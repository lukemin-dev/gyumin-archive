import { notes } from "@/data/notes";
import PageHeader from "@/components/PageHeader";
import NoteItem from "@/components/NoteItem";

export const metadata = {
  title: "노트 | 김규민",
  description: "김규민의 기술 노트입니다.",
};

export default function NotesPage() {
  return (
    <div>
      <PageHeader
        title="기술 노트"
        description="프로젝트와 학습에서 얻은 기술적 인사이트를 정리한 노트입니다."
      />

      <div>
        {notes.map((note) => (
          <NoteItem key={note.slug} note={note} />
        ))}
      </div>
    </div>
  );
}
