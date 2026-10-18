import Image from "next/image";
import Link from "next/link";
import { getProjectVisuals } from "@/data/project-visuals";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const preview = getProjectVisuals(project.slug)[0];
  const previewClassName =
    preview?.kind === "diagram"
      ? "h-44 w-full object-contain p-3 transition-transform duration-300 group-hover:scale-[1.015]"
      : "h-44 w-full object-contain object-top transition-transform duration-300 group-hover:scale-[1.02]";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-300 bg-[#fbfaf7] p-5 transition-colors hover:border-emerald-700">
      {preview && (
        <Link
          href={`/projects/${project.slug}`}
          className="mb-5 block overflow-hidden rounded-lg bg-[#e7efe9]"
          aria-label={`${project.title} 시각 자료와 상세 내용 보기`}
        >
          <Image
            src={preview.src}
            alt={preview.alt}
            width={preview.width}
            height={preview.height}
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
            className={previewClassName}
          />
        </Link>
      )}

      <div className="flex flex-1 flex-col">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="w-fit font-mono text-[11px] font-bold uppercase tracking-wide text-emerald-800">
            {project.type}
          </span>
          <span className="text-xs text-stone-600">{project.period}</span>
        </div>

        <h3 className="mt-4 text-lg font-bold leading-snug text-slate-950">
          <Link href={`/projects/${project.slug}`} className="hover:text-emerald-800">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.theme}</p>

        <div className="mt-5 border-l-2 border-emerald-700 pl-4">
          <p className="text-xs font-semibold text-stone-600">핵심 결과</p>
          <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-900">
            {project.shortResult || project.result}
          </p>
        </div>


        <div className="mt-auto flex flex-wrap items-center gap-4 pt-5 text-sm font-semibold">
          <Link href={`/projects/${project.slug}`} className="text-emerald-800 hover:underline">
            상세 보기 →
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 hover:text-slate-950"
            >
              GitHub ↗
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 hover:text-slate-950"
            >
              Demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
