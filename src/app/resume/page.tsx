import PageHeader from "@/components/PageHeader";
import { profile } from "@/data/profile";

export const metadata = {
  title: "이력서 | 이규민",
  description: "이규민의 최신 1페이지 개발자 이력서를 확인하고 다운로드할 수 있습니다.",
};

const resumeHighlights = [
  "한국생산기술연구원 AI 비전·PLC 현장실습 인턴",
  "Crosslink AI SEO 자동화 인턴십 · 2~3일 → 약 10초",
  "전남대학교 소프트컴퓨팅·인공지능 연구실 학부연구생",
  "백엔드·AI 비전·자동화 프로젝트와 GitHub 증명 자료",
  "GPA 4.23/4.5 · 성적우수장학금 6회 · 멘토링 294.5시간",
];

export default function ResumePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Resume"
        title="1페이지 개발자 이력서"
        description="백엔드·클라우드·자동화 경험을 채용담당자가 빠르게 확인할 수 있도록 한 페이지로 정리했습니다."
      />

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
              2026.07 업데이트 · A4 1페이지
            </span>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
              {profile.name} · {profile.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
              실무 성과, 현재 경험, 대표 프로젝트와 기술 기반을 한 화면에서 확인할 수 있습니다.
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
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                새 탭에서 미리보기 ↗
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
              Included
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
              {resumeHighlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
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
          className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-slate-300"
        >
          <p className="text-xs font-bold text-slate-400">EMAIL</p>
          <p className="mt-2 break-all text-sm font-semibold text-slate-800">{profile.email}</p>
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-slate-300"
        >
          <p className="text-xs font-bold text-slate-400">GITHUB</p>
          <p className="mt-2 text-sm font-semibold text-slate-800">lukemin-dev ↗</p>
        </a>
        <a
          href={profile.portfolioRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-slate-300"
        >
          <p className="text-xs font-bold text-slate-400">SOURCE</p>
          <p className="mt-2 text-sm font-semibold text-slate-800">Portfolio Repository ↗</p>
        </a>
      </section>
    </div>
  );
}
