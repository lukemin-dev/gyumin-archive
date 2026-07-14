import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/lib/content-data";

const currentExperience = experiences.find((experience) =>
  experience.period.includes("진행 중"),
);
const impactExperience = experiences.find((experience) => experience.featured);
const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

const highlights = [
  {
    value: "약 10초",
    label: "2~3일 걸리던 SEO 분석·보고 업무 자동화",
  },
  {
    value: "4.23 / 4.5",
    label: "누계 GPA · 성적우수장학금 6회",
  },
  {
    value: "294.5시간",
    label: "학생별 설명 방식을 조정한 학습 멘토링",
  },
];

function ExperiencePreview({
  eyebrow,
  experience,
}: {
  eyebrow: string;
  experience: (typeof experiences)[number];
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
        {eyebrow}
      </p>
      <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
        <div>
          <h3 className="font-bold text-slate-950">{experience.title}</h3>
          <p className="mt-1 text-sm text-slate-500">{experience.company}</p>
        </div>
        <span className="shrink-0 text-xs text-slate-400">{experience.period}</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{experience.context}</p>
      <div className="mt-4 rounded-xl bg-slate-50 px-4 py-3">
        <p className="text-xs font-semibold text-slate-500">핵심 결과</p>
        <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-900">
          {experience.result}
        </p>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div>
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-8 p-7 sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              {profile.title}
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl sm:leading-[1.12]">
              반복되는 문제를 구조화하고,
              <br className="hidden sm:block" /> 자동화 가능한 흐름으로 바꿉니다.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-slate-800"
              >
                대표 프로젝트 보기
              </Link>
              <Link
                href="/resume"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                이력서 다운로드
              </Link>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl px-4 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50"
              >
                GitHub ↗
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {profile.image && (
            <div className="order-first md:order-last">
              <Image
                src={profile.image}
                alt={`${profile.name} 프로필 이미지`}
                width={144}
                height={144}
                className="h-28 w-28 rounded-3xl border border-slate-200 object-cover shadow-sm sm:h-36 sm:w-36"
                priority
              />
            </div>
          )}
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-3" aria-label="주요 성과">
        {highlights.map((item) => (
          <div key={item.value} className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-2xl font-bold tracking-tight text-slate-950">{item.value}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.label}</p>
          </div>
        ))}
      </section>

      {(currentExperience || impactExperience) && (
        <section className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                Experience
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                현장에서 검증한 경험
              </h2>
            </div>
            <Link href="/experience" className="text-sm font-semibold text-blue-700 hover:underline">
              전체 경험 보기 →
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {currentExperience && (
              <ExperiencePreview eyebrow="Current" experience={currentExperience} />
            )}
            {impactExperience && impactExperience !== currentExperience && (
              <ExperiencePreview eyebrow="Measured Impact" experience={impactExperience} />
            )}
          </div>
        </section>
      )}

      <section className="mt-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
              Selected Work
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              대표 프로젝트
            </h2>
          </div>
          <Link href="/projects" className="text-sm font-semibold text-blue-700 hover:underline">
            전체 프로젝트 보기 →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
          Engineering Principles
        </p>
        <div className="mt-4 grid gap-5 sm:grid-cols-3">
          {[
            ["입력부터 확인", "코드를 고치기 전에 데이터 형식과 시스템 경계를 먼저 확인합니다."],
            ["실패를 전제로 설계", "재시도·체크포인트·로그를 넣어 중단 이후에도 복구할 수 있게 만듭니다."],
            ["근거를 남기는 문서화", "문제, 판단 기준, 조치와 결과를 다시 설명할 수 있는 형태로 기록합니다."],
          ].map(([title, description]) => (
            <div key={title}>
              <h3 className="font-bold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
