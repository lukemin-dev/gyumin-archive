import Link from "next/link";
import { estimateReadingMinutes } from "@/lib/notes";
import type { Note } from "@/types";

interface NoteItemProps {
  note: Note;
}

export default function NoteItem({ note }: NoteItemProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-bold leading-snug text-slate-950">
          <Link href={`/notes/${note.slug}`} className="hover:text-blue-700">
            {note.title}
          </Link>
        </h2>
        <div className="shrink-0 text-right text-xs text-slate-400">
          <time dateTime={note.date}>{note.date}</time>
          <p className="mt-1">약 {estimateReadingMinutes(note.content)}분</p>
        </div>
      </div>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">{note.summary}</p>
      {note.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <Link href={`/notes/${note.slug}`} className="mt-5 inline-block text-sm font-semibold text-blue-700 hover:underline">
        읽기 →
      </Link>
    </article>
  );
}
