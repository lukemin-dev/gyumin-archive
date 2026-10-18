"use client";

import { useMemo, useState } from "react";
import NoteItem from "@/components/NoteItem";
import type { Note } from "@/types";

export default function NotesExplorer({ notes }: { notes: Note[] }) {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("전체");
  const tags = useMemo(
    () => ["전체", ...Array.from(new Set(notes.flatMap((note) => note.tags)))],
    [notes],
  );
  const filteredNotes = notes.filter((note) =>
    (selectedTag === "전체" || note.tags.includes(selectedTag)) &&
    `${note.title} ${note.summary} ${note.tags.join(" ")}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())
  );

  return (
    <>
      <label className="mb-6 block">
        <span className="mb-2 block text-sm font-semibold text-stone-800">기술 노트 검색</span>
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="제목, 기술 이름, 궁금한 주제로 검색" className="w-full rounded-xl border border-stone-300 bg-[#fbfaf7] px-4 py-3 text-base text-stone-900" />
      </label>
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
                  : "border border-stone-300 bg-[#fbfaf7] text-slate-600 hover:border-emerald-600 hover:text-emerald-800"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <p className="mb-4 text-sm text-stone-600" aria-live="polite">
        {selectedTag === "전체" ? "전체" : selectedTag} {filteredNotes.length}개
      </p>
      {filteredNotes.length === 0 && <div className="rounded-xl border border-stone-300 p-6 text-stone-600">
        <p>검색 결과가 없습니다. 다른 검색어나 태그를 선택해 주세요.</p>
        <button type="button" onClick={() => { setQuery(""); setSelectedTag("전체"); }} className="mt-3 font-semibold text-emerald-800 underline">전체 노트 보기</button>
      </div>}
      <div className="divide-y-0">
        {filteredNotes.map((note) => (
          <NoteItem key={note.slug} note={note} />
        ))}
      </div>
    </>
  );
}
