import { updatedAt } from "@/data/portfolio";
import PageHeader from "@/components/PageHeader";
import { profile } from "@/data/profile";

export const metadata = {
  title: "이력서 | 이규민",
  description: "이규민의 최신 1페이지 개발자 이력서를 확인하고 다운로드할 수 있습니다.",
};

const resumeHighlights = [
  "금호타이어 PLM 계정 회수 자동화·KCEM DB 전환",
  "생기원 센서·PLC·카메라 촬영 누락 개선과 8,092개 확인",
  "Crosslink API 연동·리포트 자동화 (사람 검토 시간 별도)",
  "Java Socket 통신·센서 데이터 모니터링 프로젝트",
  "GPA 4.23/4.5 · 성적우수상 7학기 연속 · 멘토링 294.5시간",
];

export default function ResumePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Resume"
        title="한 장으로 보는 이력서"
        description="경력과 프로젝트를 한 장에 담았습니다. PDF로 내려받거나 새 탭에서 바로 볼 수 있습니다."
      />

      <section className="overflow-hidden rounded-3xl border border-stone-300 bg-[#fbfaf7] ">
        <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-[#e7efe9] px-3 py-1.5 text-xs font-bold text-emerald-800">
              {updatedAt} 업데이트 · A4 1페이지
            </span>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
              {profile.name} · {profile.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
              인턴 경력 세 곳과 개인 프로젝트, 학력·활동을 정리했습니다.
              이메일·GitHub·포트폴리오 링크도 PDF 안에서 바로 열립니다.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                PDF 다운로드
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-[#fbfaf7] px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                새 탭에서 미리보기 ↗
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-300 bg-slate-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">
              Included
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
              {resumeHighlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-700" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-2xl border border-stone-300 bg-[#fbfaf7] p-5 hover:border-slate-300"
        >
          <p className="text-xs font-bold text-stone-600">EMAIL</p>
          <p className="mt-2 break-all text-sm font-semibold text-slate-800">{profile.email}</p>
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-stone-300 bg-[#fbfaf7] p-5 hover:border-slate-300"
        >
          <p className="text-xs font-bold text-stone-600">GITHUB</p>
          <p className="mt-2 text-sm font-semibold text-slate-800">lukemin-dev ↗</p>
        </a>
        <a
          href={profile.portfolioRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-stone-300 bg-[#fbfaf7] p-5 hover:border-slate-300"
        >
          <p className="text-xs font-bold text-stone-600">SOURCE</p>
          <p className="mt-2 text-sm font-semibold text-slate-800">Portfolio Repository ↗</p>
        </a>
      </section>
    </div>
  );
}
