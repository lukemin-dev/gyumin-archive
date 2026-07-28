import { notes } from "@/lib/content-data";

const siteUrl = "https://gyumin-archive.vercel.app";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const items = notes
    .map((note) => {
      const url = `${siteUrl}/notes/${note.slug}`;

      return `
        <item>
          <title>${escapeXml(note.title)}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <pubDate>${new Date(note.date).toUTCString()}</pubDate>
          <description>${escapeXml(note.summary)}</description>
        </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>이규민 기술 노트</title>
        <link>${siteUrl}/notes</link>
        <description>프로젝트에서 부딪힌 문제와 해결 과정을 기록한 기술 노트입니다.</description>
        <language>ko-KR</language>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
