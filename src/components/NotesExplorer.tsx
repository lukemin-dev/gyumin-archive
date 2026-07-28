"use client";

import { useMemo, useState } from "react";
import NoteItem from "@/components/NoteItem";
import type { Note } from "@/types";

export default function NotesExplorer({ notes }: { notes: Note[] }) {
  const [selectedTag, setSelectedTag] = useState("전체");
  const tags = useMemo(
    () => ["전체", ...Array.from(new Set(notes.flatMap((note) => note.tags)))],
    [notes],
  );
  const filteredNotes =
    selectedTag === "전체"
      ? notes
      : notes.filter((note) => note.tags.includes(selectedTag));

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2" aria-label="기술 노트 태그 필터">
        {tags.map((tag) => {
          const selected = tag === selectedTag;

          return (
            <button
              key={tag}
              type="button"
              aria-pressed={selected}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                selected
                  ? "bg-slate-900 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <p className="mb-4 text-sm text-slate-500" aria-live="polite">
        {selectedTag === "전체" ? "전체" : selectedTag} {filteredNotes.length}개
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {filteredNotes.map((note) => (
          <NoteItem key={note.slug} note={note} />
        ))}
      </div>
    </>
  );
}
