import Link from "next/link";
import { estimateReadingMinutes } from "@/lib/notes";
import type { Note } from "@/types";

interface NoteItemProps {
  note: Note;
}

export default function NoteItem({ note }: NoteItemProps) {
  return (
    <article className="rounded-2xl border border-stone-300 bg-[#fbfaf7] p-6">
      <div className="flex flex-col-reverse gap-3">
        <h2 className="font-bold leading-snug text-slate-950">
          <Link href={`/notes/${note.slug}`} className="hover:text-emerald-800">
            {note.title}
          </Link>
        </h2>
        <div className="flex gap-3 text-xs text-stone-600">
          <time dateTime={note.date}>{note.date}</time>
          <p >약 {estimateReadingMinutes(note.content)}분</p>
        </div>
      </div>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">{note.summary}</p>
      {note.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {note.tags.map((tag) => (
            <span key={tag} className="font-mono text-[11px] text-stone-500">#{tag}</span>
          ))}
        </div>
      )}
      <Link href={`/notes/${note.slug}`} className="mt-5 inline-block text-sm font-semibold text-emerald-800 hover:underline">
        읽기 →
      </Link>
    </article>
  );
}
