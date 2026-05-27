import PageHeader from "@/components/PageHeader";
import { profile } from "@/data/profile";

export const metadata = {
  title: "이력서 | 이규민",
  description: "이규민의 이력서를 다운로드할 수 있습니다.",
};

export default function ResumePage() {
  return (
    <div>
      <PageHeader
        title="이력서"
        description="이력서 PDF를 다운로드할 수 있습니다."
      />

      <div className="border border-gray-200 rounded-lg p-8">
        <div className="text-center">
          <div className="text-4xl mb-4">📄</div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            {profile.name} 이력서
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Cloud Infrastructure & Backend Engineer
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
          >
            이력서 다운로드 (PDF)
          </a>

        </div>
      </div>

      {/* Contact */}
      <div className="mt-8 p-6 border border-gray-200 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">
          Contact & Links
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 w-20">Email</span>
            <a href={`mailto:${profile.email}`} className="text-gray-700 hover:text-black transition-colors">{profile.email}</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 w-20">GitHub</span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors underline underline-offset-4">{profile.github}</a>
          </div>
          {profile.portfolioRepo && (
            <div className="flex items-center gap-4">
              <span className="text-gray-400 w-20">Portfolio</span>
              <a href={profile.portfolioRepo} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors underline underline-offset-4">Source Code (GitHub)</a>
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">
          이력서에 포함된 내용
        </h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-gray-400 mt-0.5">—</span>
            학력 및 GPA
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gray-400 mt-0.5">—</span>
            인턴십 및 실무 경험
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gray-400 mt-0.5">—</span>
            주요 프로젝트 및 기술 스택
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gray-400 mt-0.5">—</span>
            수상 내역 및 교육 프로그램
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gray-400 mt-0.5">—</span>
            활동 및 봉사
          </li>
        </ul>
      </div>
    </div>
  );
}
