import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectVisuals } from "@/data/project-visuals";
import { projects } from "@/lib/content-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "프로젝트를 찾을 수 없습니다" };
  return {
    title: `${project.title} | 이규민`,
    description: project.theme,
  };
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
      <h2 className="text-lg font-bold tracking-tight text-slate-950">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-slate-600">{children}</div>
    </section>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const visuals = getProjectVisuals(project.slug);
  const diagrams = visuals.filter((visual) => visual.kind === "diagram");
  const screens = visuals.filter((visual) => visual.kind === "screen");

  return (
    <article className="mx-auto max-w-4xl">
      <Link
        href="/projects"
        className="mb-7 inline-flex text-sm font-semibold text-slate-500 hover:text-blue-700"
      >
        ← 프로젝트 목록
      </Link>

      <header className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
            {project.type}
          </span>
          <span className="text-xs text-slate-400">{project.period}</span>
          {project.featured && (
            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">
              대표 프로젝트
            </span>
          )}
        </div>

        <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          {project.theme}
        </p>

        {project.details.length > 0 && (
          <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-slate-600 sm:grid-cols-2">
            {project.details.map((detail) => (
              <li key={detail} className="flex gap-3 rounded-xl bg-slate-50 p-4">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
                  aria-hidden="true"
                />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}

        {(project.githubUrl || project.demoUrl || project.privateCode) && (
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                GitHub 저장소 ↗
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                데모 보기 ↗
              </a>
            )}
            {project.privateCode && (
              <span className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
                기업 실무 보안상 소스 코드 비공개
              </span>
            )}
          </div>
        )}
      </header>

      {visuals.length > 0 && (
        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                Visual Evidence
              </p>
              <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-950">
                구조와 구현 결과
              </h2>
            </div>
            <p className="text-sm text-slate-500">
              프로젝트 구조도와 공개된 실제 구현 화면
            </p>
          </div>

          {diagrams.length > 0 && (
            <div className="mt-6 space-y-4">
              {diagrams.map((visual) => (
                <a
                  key={visual.src}
                  href={visual.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition hover:border-blue-200 hover:shadow-md"
                >
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    width={visual.width}
                    height={visual.height}
                    sizes="(min-width: 1024px) 56rem, 100vw"
                    className="h-auto w-full object-contain"
                  />
                  <div className="border-t border-slate-200 bg-white p-4">
                    <p className="text-sm font-semibold leading-relaxed text-slate-800 group-hover:text-blue-700">
                      {visual.caption}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">원본 자료 보기 ↗</p>
                  </div>
                </a>
              ))}
            </div>
          )}

          {screens.length > 0 && (
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {screens.map((visual) => (
                <a
                  key={visual.src}
                  href={visual.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition hover:border-blue-200 hover:shadow-md"
                >
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    width={visual.width}
                    height={visual.height}
                    sizes="(min-width: 640px) 30vw, 100vw"
                    className="h-[30rem] w-full object-contain object-top sm:h-[25rem] lg:h-[30rem]"
                  />
                  <div className="border-t border-slate-200 bg-white p-4">
                    <p className="text-sm font-semibold leading-relaxed text-slate-800 group-hover:text-blue-700">
                      {visual.caption}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">원본 이미지 보기 ↗</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>
      )}

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Section title="문제">
          <p className="whitespace-pre-wrap">{project.problem}</p>
        </Section>
        <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm sm:p-7">
          <h2 className="text-lg font-bold tracking-tight text-slate-950">결과</h2>
          <p className="mt-4 whitespace-pre-wrap text-sm font-semibold leading-7 text-slate-900">
            {project.result}
          </p>
        </section>
      </div>

      <div className="mt-6 grid gap-6">
        <Section title="내가 직접 한 일">
          <ul className="space-y-3">
            {project.myContribution.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <div className="grid gap-6 md:grid-cols-2">
          <Section title="가장 어려웠던 지점">
            <p className="whitespace-pre-wrap">{project.bottleneck}</p>
          </Section>
          <Section title="해결 과정">
            <p className="whitespace-pre-wrap">{project.solution}</p>
          </Section>
        </div>

        <Section title="증명 자료">
          {project.evidence && project.evidence.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {project.evidence.map((item) => {
                const card = (
                  <div className="h-full rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-blue-200 hover:bg-blue-50">
                    <p className="font-bold text-slate-900">{item.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                    {item.href && (
                      <p className="mt-3 text-sm font-semibold text-blue-700">자료 열기 ↗</p>
                    )}
                  </div>
                );

                return item.href ? (
                  <a
                    key={`${item.label}-${item.href}`}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {card}
                  </a>
                ) : (
                  <div key={item.label}>{card}</div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5 text-slate-500">
              공개 가능한 증명 자료를 정리 중입니다.
            </div>
          )}
        </Section>

        <div className="grid gap-6 md:grid-cols-2">
          <Section title="사용한 기술과 이유">
            <p className="whitespace-pre-wrap">{project.techContext}</p>
          </Section>
          <Section title="지금 다시 한다면">
            <p className="whitespace-pre-wrap">{project.retrospective}</p>
          </Section>
        </div>

        {project.interviewPoints.length > 0 && (
          <Section title="면접에서 더 설명할 수 있는 부분">
            <ul className="space-y-3">
              {project.interviewPoints.map((point) => (
                <li key={point} className="flex gap-3 font-medium text-slate-800">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}
      </div>
    </article>
  );
}
