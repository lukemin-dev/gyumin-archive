import Link from "next/link";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import type { Evidence } from "@/types";

const evidenceData: Evidence[] = [
  {
    icon: "",
    label: "학업",
    value: "수석 경험 · GPA 4.26 / 4.5 · 성적우수장학금 6회",
    description: "",
  },
  {
    icon: "",
    label: "Crosslink 인턴",
    value: "수작업으로 2~3일 걸리던 SEO 분석 과정을 약 10초 내외로 줄였습니다.",
    description: "",
  },
  {
    icon: "",
    label: "멘토링",
    value: "초록어린이지역아동센터에서 294.5시간 이상 학습 멘토링을 이어가고 있습니다.",
    description: "",
  },
  {
    icon: "",
    label: "일본 경험",
    value: "Osaka University J-SHIP 이후 일본 기업 인턴십까지 이어졌습니다.",
    description: "",
  },
];

const featuredProjects = projects.filter((p) => p.featured);
const featuredExperience = experiences.find((e) => e.featured);

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="mb-16 flex flex-col md:flex-row items-start gap-8">
        {profile.image && (
          <div className="shrink-0">
            <Image
              src={profile.image}
              alt="프로필 이미지"
              width={100}
              height={100}
              className="rounded-full object-cover w-24 h-24 border border-gray-200"
              priority
            />
          </div>
        )}
        <div>
          <p className="text-sm font-mono text-gray-400 mb-2">Cloud · Backend · Automation Portfolio</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            이규민의 경험 정리
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-6">
            자동화와 시스템 운영에 관심이 있습니다. 특히 같은 문제가 반복되지 않게 기준을 만들고, 로그로 원인을 다시 찾을 수 있는 구조를 고민해왔습니다.
          </p>

        {/* Direction keywords */}
        <div className="flex flex-wrap gap-2 mt-6">
          {[
            "Cloud Infrastructure",
            "Backend Systems",
            "Automation",
            "Monitoring & Logging",
            "Reproducible Workflows",
          ].map((keyword) => (
            <span
              key={keyword}
              className="text-xs font-mono px-3 py-1.5 border border-gray-300 rounded text-gray-600"
            >
              {keyword}
            </span>
          ))}
        </div>
        </div>
      </section>

      {/* How I view problems */}
      {/* 기술을 설명하는 방식 */}
      <section className="mb-16">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">기술을 설명하는 방식</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            프로젝트나 교류 활동을 하면서, 정답을 아는 것보다 상대가 이해할 수 있게 설명하는 과정이 중요하다는 걸 느꼈습니다. 일본문화연구회 발표와 통역, 멘토링 활동을 통해 질문의 의도와 상대의 이해 수준을 먼저 보는 습관을 갖게 됐습니다.
          </p>
        </div>
      </section>

      {/* Evidence Section */}
      <section className="mb-16">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          주요 성과 및 근거
        </h2>
        <div className="border-t border-gray-200">
          {evidenceData.map((evidence) => (
            <div key={evidence.label} className="py-4 border-b border-gray-200 flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
              <span className="text-sm font-mono text-gray-400 w-32 shrink-0">{evidence.label}</span>
              <div>
                <p className="font-medium text-gray-900 leading-relaxed">{evidence.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Experience */}
      {featuredExperience && (
        <section className="mb-16">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            주요 경험
          </h2>
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between gap-4 mb-1">
              <h3 className="font-semibold text-gray-900">
                {featuredExperience.title}
              </h3>
              <span className="shrink-0 text-xs font-mono text-gray-400">
                {featuredExperience.period}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-3">
              {featuredExperience.company}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              {featuredExperience.context}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium text-gray-700">담당:</span>{" "}
              {featuredExperience.responsibility}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">결과:</span>{" "}
              {featuredExperience.result}
            </p>
            <div className="mt-4">
              <Link
                href="/experience"
                className="text-sm text-gray-500 hover:text-black transition-colors underline underline-offset-4"
              >
                자세히 보기 →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 제가 깊게 다뤄본 문제들 */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            제가 깊게 다뤄본 문제들
          </h2>
          <Link
            href="/projects"
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            전체 프로젝트 보기 →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <div key={project.slug} className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors flex flex-col bg-white">
              <Link href={`/projects/${project.slug}`} className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-semibold text-gray-900 flex-1 leading-snug">
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-gray-900">문제:</span> {project.shortProblem}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-gray-900">내가 한 일:</span> {project.shortAction}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  <span className="font-semibold text-gray-900">결과:</span> {project.shortResult}
                </p>
              </Link>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">더 이야기할 수 있는 부분:</span> {project.shortQuestion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          둘러보기
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { href: "/about", label: "소개", desc: "학력 · 기술 · 관심사" },
            { href: "/projects", label: "프로젝트", desc: "개발 프로젝트" },
            { href: "/experience", label: "경험", desc: "인턴십 · 실무" },
            { href: "/courses", label: "교육", desc: "프로그램 · 과정" },
            { href: "/activities", label: "활동", desc: "멘토링 · 봉사" },
            { href: "/notes", label: "노트", desc: "기술 노트" },
            { href: "/resume", label: "이력서", desc: "PDF 다운로드" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-colors"
            >
              <p className="font-medium text-gray-900 text-sm">{item.label}</p>
              <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
