import NotesExplorer from "@/components/NotesExplorer";
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
        title="작업하다 막힌 내용을 적어 둡니다"
        description="같은 문제를 다시 만났을 때 바로 꺼내 볼 수 있도록 원인과 조치, 결과를 남겼습니다."
      />

      <div className="mb-6 flex justify-end">
        <a
          href="/feed.xml"
          className="text-sm font-semibold text-blue-700 hover:underline"
        >
          RSS 구독 →
        </a>
      </div>

      {notes.length > 0 ? (
        <NotesExplorer notes={notes} />
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
          공개된 기술 노트를 정리 중입니다.
        </div>
      )}
    </div>
  );
}
