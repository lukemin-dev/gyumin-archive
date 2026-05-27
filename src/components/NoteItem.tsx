import type { Note } from "@/types";

interface NoteItemProps {
  note: Note;
}

export default function NoteItem({ note }: NoteItemProps) {
  return (
    <div className="py-4 border-b border-gray-100">
      <h3 className="font-medium text-gray-900">{note.title}</h3>
      <p className="text-sm text-gray-400 font-mono mt-0.5">{note.date}</p>
      <p className="text-sm text-gray-600 mt-1">{note.summary}</p>
      {note.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
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
    </div>
  );
}
