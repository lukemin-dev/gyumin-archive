import Image from "next/image";
import Link from "next/link";
import NoteItem from "@/components/NoteItem";
import ProjectCard from "@/components/ProjectCard";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { notes, projects } from "@/lib/content-data";

const recentExperience = experiences[0];
const impactExperience = experiences.find((experience) => experience.featured);
const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
const latestNotes = notes.slice(0, 3);

const highlights = [{"value":"8,092개","label":"설정 변경 후 플래시 작동·데이터 기록 확인"},{"value":"TCP","label":"길이 헤더 기반 메시지 경계 처리"},{"value":"PLM","label":"사용자 대조·권한 회수·결과 통보 구현"},{"value":"7학기 연속","label":"전남대학교 성적우수상"}];

function ExperiencePreview({
  eyebrow,
  experience,
}: {
  eyebrow: string;
  experience: (typeof experiences)[number];
}) {
  return (
    <article className="border-t-2 border-stone-800 py-6">
      <p className="font-mono text-xs text-emerald-800">
        {eyebrow === "Recent" ? "최근 현장 경험" : "직접 만든 변화"}
      </p>
      <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
        <div>
          <h3 className="font-bold text-slate-950">{experience.title}</h3>
          <p className="mt-1 text-sm text-stone-600">{experience.company}</p>
        </div>
        <span className="shrink-0 text-xs text-stone-600">{experience.period}</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{experience.context}</p>
      <div className="mt-5 border-l-2 border-emerald-700 pl-4">
        <p className="font-mono text-xs text-stone-500">결과</p>
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
      <section className="border-b border-stone-300 pb-12 pt-4 sm:pb-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="font-mono text-sm text-emerald-800">
              안녕하세요. 이규민입니다.
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.055em] text-stone-950 sm:text-5xl leading-[1.2] sm:leading-[1.2]">
              현장과 소프트웨어를<br /> 연결합니다.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
              제조 현장의 데이터를 이해하고, 시스템 연동과 자동화로 문제를 해결합니다. 직접 구현하고 검증한 과정을 기록합니다.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="border-b-2 border-stone-900 px-1 py-2 text-sm font-bold text-stone-900 hover:text-emerald-800"
              >
                대표 프로젝트 보기
              </Link>
              <Link
                href="/resume"
                className="border-b border-stone-400 px-1 py-2 text-sm font-semibold text-stone-700 hover:text-stone-950"
              >
                이력서 보기
              </Link>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-1 py-2 text-sm font-semibold text-emerald-800 hover:underline"
              >
                GitHub ↗
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="font-mono text-xs text-stone-500"
                >
                  #{interest.replaceAll(" ", "_")}
                </span>
              ))}
            </div>
          </div>

          <Link href="/projects/plm-account-recovery" className="overflow-hidden rounded-2xl border border-stone-300 bg-[#e7efe9]" aria-label="PLM 계정 자동 회수 프로젝트 보기">
            <Image src="/projects/plm-account-recovery.svg" alt="인사 정보, 사용자 대조, PLM 권한 처리를 연결한 흐름" width={800} height={440} priority sizes="(min-width: 768px) 42vw, 100vw" className="w-full h-auto" />
            <p className="border-t border-stone-300 px-5 py-4 text-sm font-semibold text-emerald-800">실무 프로젝트 · PLM 계정 자동 회수 →</p>
          </Link>
        </div>
      </section>

      <section className="grid border-b border-stone-300 sm:grid-cols-2 lg:grid-cols-4" aria-label="주요 성과">
        {highlights.map((item, index) => (
          <div
            key={item.value}
            className={`py-6 sm:px-5 ${index > 0 ? "border-t border-stone-300 sm:border-t-0 sm:border-l" : ""}`}
          >
            <p className="text-xl font-bold tracking-tight text-stone-950">{item.value}</p>
            <p className="mt-2 text-sm leading-relaxed text-stone-500">{item.label}</p>
          </div>
        ))}
      </section>


      <section className="mt-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
              <p className="font-mono text-xs text-emerald-800">
                / selected work
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              대표 프로젝트
            </h2>
          </div>
          <Link href="/projects" className="text-sm font-semibold text-emerald-800 hover:underline">
            전체 프로젝트 보기 →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {(recentExperience || impactExperience) && (
        <section className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-emerald-800">
                / experience
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
                최근 실무 경험
              </h2>
            </div>
            <Link href="/experience" className="text-sm font-semibold text-emerald-800 hover:underline">
              전체 경험 보기 →
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {recentExperience && (
              <ExperiencePreview eyebrow="Recent" experience={recentExperience} />
            )}
            {impactExperience && impactExperience !== recentExperience && (
              <ExperiencePreview eyebrow="Measured Impact" experience={impactExperience} />
            )}
          </div>
        </section>
      )}

      <section className="mt-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
              <p className="font-mono text-xs text-emerald-800">
                / notes
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              최근 기술 노트
            </h2>
          </div>
          <Link href="/notes" className="text-sm font-semibold text-emerald-800 hover:underline">
            전체 글 보기 →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {latestNotes.map((note) => (
            <NoteItem key={note.slug} note={note} />
          ))}
        </div>
      </section>

      <section className="mt-16 border-y border-stone-300 py-7" aria-labelledby="home-languages">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs text-emerald-800">
              / languages
            </p>
            <h2 id="home-languages" className="mt-2 text-xl font-bold text-slate-950">
              영어·일본어 소통 역량
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/en" className="text-sm font-semibold text-emerald-800 hover:underline">
              English →
            </Link>
            <Link href="/jp" className="text-sm font-semibold text-emerald-800 hover:underline">
              日本語 →
            </Link>
          </div>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {profile.languages.map((language) => (
            <div key={language.name} className="border-l border-stone-300 pl-4">
              <p className="font-bold text-slate-900">{language.name}</p>
              <p className="mt-1 text-sm font-semibold text-emerald-800">
                {language.capability}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-stone-600">
                {language.evidence}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t-2 border-stone-800 py-8">
        <p className="font-mono text-xs text-emerald-800">
          / 일할 때 자주 확인하는 것
        </p>
        <div className="mt-4 grid gap-5 sm:grid-cols-3">
          {[
            ["입력을 먼저 봅니다", "코드를 고치기 전에 데이터 형식과 들어오는 값부터 확인합니다."],
            ["멈춘 뒤를 생각합니다", "재시도와 체크포인트를 넣어 중간부터 다시 시작할 수 있게 만듭니다."],
            ["확인한 순서를 남깁니다", "어디서 막혔고 무엇을 바꿨는지 다음 사람이 따라갈 수 있게 기록합니다."],
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
