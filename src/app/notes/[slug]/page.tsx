import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownBody from "@/components/MarkdownBody";
import { notes } from "@/lib/content-data";

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

  return (
    <article>
      <Link
        href="/notes"
        className="text-sm text-gray-400 hover:text-black transition-colors mb-6 inline-block"
      >
        ← 노트 목록
      </Link>

      <header className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">{note.title}</h1>
        <p className="text-sm text-gray-400 font-mono mt-2">{note.date}</p>
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
    </article>
  );
}
