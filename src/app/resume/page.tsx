import PageHeader from "@/components/PageHeader";
import { profile } from "@/data/profile";

export const metadata = {
  title: "이력서 | 이규민",
  description: "이규민의 최신 1페이지 개발자 이력서를 확인하고 다운로드할 수 있습니다.",
};

export default function ResumePage() {
  return (
    <div>
      <PageHeader
        title="이력서"
        description="백엔드·클라우드·자동화 경험을 1페이지로 정리한 최신 이력서입니다."
      />

      <div className="border border-gray-200 rounded-lg p-8">
        <div className="text-center">
          <div className="text-4xl mb-4" aria-hidden="true">
            📄
          </div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            {profile.name} 이력서
          </h2>
          <p className="text-sm text-gray-500">{profile.title}</p>
          <p className="mt-2 text-xs font-mono text-gray-400">
            2026.07 업데이트 · A4 1페이지
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
            >
              새 탭에서 보기
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
            >
              이력서 다운로드 (PDF)
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 border border-gray-200 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">
          Contact & Links
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 w-20">Email</span>
            <a
              href={`mailto:${profile.email}`}
              className="text-gray-700 hover:text-black transition-colors"
            >
              {profile.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 w-20">GitHub</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors underline underline-offset-4"
            >
              {profile.github}
            </a>
          </div>
          {profile.portfolioRepo && (
            <div className="flex items-center gap-4">
              <span className="text-gray-400 w-20">Portfolio</span>
              <a
                href={profile.portfolioRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition-colors underline underline-offset-4"
              >
                Source Code (GitHub)
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">
          핵심 구성
        </h3>
        <ul className="text-sm text-gray-600 space-y-2">
          {[
            "한국생산기술연구원 자율주행 연구 현장실습",
            "Crosslink AI SEO 자동화 인턴십과 2~3일 → 약 10초 성과",
            "백엔드·IoT·자동화 프로젝트와 GitHub 증명 자료",
            "GPA 4.23/4.5, 장학 및 전공 기반",
            "294.5시간 멘토링과 병역 사항",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-gray-400 mt-0.5">—</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
