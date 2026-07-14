import NoteItem from "@/components/NoteItem";
import PageHeader from "@/components/PageHeader";
import { notes } from "@/lib/content-data";

export const metadata = {
  title: "노트 | 이규민",
  description: "이규민의 기술 노트입니다.",
};

export default function NotesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Notes"
        title="구현 과정에서 남긴 기술 노트"
        description="프로젝트에서 부딪힌 문제와 학습 내용을 나중에 다시 사용할 수 있도록 정리했습니다."
      />

      {notes.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2">
          {notes.map((note) => (
            <NoteItem key={note.slug} note={note} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
          공개된 기술 노트를 정리 중입니다.
        </div>
      )}
    </div>
  );
}
