import Link from "next/link";
import { estimateReadingMinutes } from "@/lib/notes";
import type { Note } from "@/types";

export default function NoteItem({ note }: { note: Note }) {
  return <article className="grid gap-3 border-t border-stone-300 py-6 sm:grid-cols-[8rem_1fr] sm:gap-6">
    <div className="text-xs leading-6 text-stone-600"><time dateTime={note.date}>{note.date}</time><p>약 {estimateReadingMinutes(note.content)}분</p></div>
    <div><h2 className="text-lg font-semibold leading-snug"><Link href={`/notes/${note.slug}`} className="hover:text-emerald-800 hover:underline">{note.title}</Link></h2><p className="mt-2 text-sm leading-7 text-stone-600">{note.summary}</p><p className="mt-2 text-xs text-emerald-800">{note.tags.join(" · ")}</p></div>
  </article>;
}
