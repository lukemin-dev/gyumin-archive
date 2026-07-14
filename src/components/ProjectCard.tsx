import Image from "next/image";
import Link from "next/link";
import { getProjectVisuals } from "@/data/project-visuals";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const preview = getProjectVisuals(project.slug)[0];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
      {preview && (
        <Link
          href={`/projects/${project.slug}`}
          className="block border-b border-slate-200 bg-slate-100"
          aria-label={`${project.title} 구현 화면과 상세 내용 보기`}
        >
          <Image
            src={preview.src}
            alt={preview.alt}
            width={1080}
            height={2340}
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
            className="h-48 w-full object-contain object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="w-fit rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700">
            {project.type}
          </span>
          <span className="text-xs text-slate-400">{project.period}</span>
        </div>

        <h3 className="mt-4 text-lg font-bold leading-snug text-slate-950">
          <Link href={`/projects/${project.slug}`} className="hover:text-blue-700">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.theme}</p>

        <div className="mt-5 rounded-xl border-l-4 border-blue-500 bg-slate-50 px-4 py-3">
          <p className="text-xs font-semibold text-slate-500">핵심 결과</p>
          <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-900">
            {project.shortResult || project.result}
          </p>
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-500">
          {project.shortAction || project.myContribution[0]}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-5 text-sm font-semibold">
          <Link href={`/projects/${project.slug}`} className="text-blue-700 hover:underline">
            상세 보기 →
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-950"
            >
              GitHub ↗
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-950"
            >
              Demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
