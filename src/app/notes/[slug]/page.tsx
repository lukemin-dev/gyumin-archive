import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownBody from "@/components/MarkdownBody";
import { estimateReadingMinutes, notes } from "@/lib/content-data";

const siteUrl = "https://gyumin-archive.vercel.app";

export function generateStaticParams() {
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);

  if (!note) {
    return { title: "노트를 찾을 수 없습니다" };
  }

  return {
    title: `${note.title} | 이규민`,
    description: note.summary,
    alternates: {
      canonical: `/notes/${note.slug}`,
    },
    openGraph: {
      type: "article",
      title: note.title,
      description: note.summary,
      url: `/notes/${note.slug}`,
      publishedTime: note.date,
      authors: ["이규민"],
      tags: note.tags,
    },
  };
}

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);

  if (!note) {
    notFound();
  }

  const relatedNotes = notes
    .filter(
      (item) =>
        item.slug !== note.slug && item.tags.some((tag) => note.tags.includes(tag)),
    )
    .slice(0, 2);
  const articleUrl = `${siteUrl}/notes/${note.slug}`;
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: note.title,
    description: note.summary,
    datePublished: note.date,
    dateModified: note.date,
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Person",
      name: "이규민",
      url: siteUrl,
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <Link
        href="/notes"
        className="text-sm text-gray-400 hover:text-black transition-colors mb-6 inline-block"
      >
        ← 노트 목록
      </Link>

      <header className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">{note.title}</h1>
        <p className="mt-2 text-sm text-gray-400">
          <time dateTime={note.date}>{note.date}</time>
          <span aria-hidden="true"> · </span>
          약 {estimateReadingMinutes(note.content)}분
        </p>
        {note.summary && (
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            {note.summary}
          </p>
        )}
        {note.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {note.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <MarkdownBody content={note.content} />

      {relatedNotes.length > 0 && (
        <aside className="mt-12 border-t border-slate-200 pt-8" aria-labelledby="related-notes">
          <h2 id="related-notes" className="text-lg font-bold text-slate-950">
            관련 기술 노트
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {relatedNotes.map((relatedNote) => (
              <Link
                key={relatedNote.slug}
                href={`/notes/${relatedNote.slug}`}
                className="rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-300 hover:bg-blue-50"
              >
                <p className="font-semibold text-slate-900">{relatedNote.title}</p>
                <p className="mt-2 text-xs text-slate-500">{relatedNote.date}</p>
              </Link>
            ))}
          </div>
        </aside>
      )}
    </article>
  );
}
