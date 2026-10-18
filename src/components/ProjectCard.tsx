import Link from "next/link";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col border-t border-stone-300 py-6">
      <p className="text-xs text-stone-600">{project.period} · {project.type}</p>
      <h3 className="mt-3 text-xl font-bold leading-snug"><Link href={`/projects/${project.slug}`} className="hover:text-emerald-800">{project.title}</Link></h3>
      <p className="mt-3 text-sm leading-7 text-stone-600">{project.role || project.theme}</p>
      <p className="mt-4 text-base leading-7">{project.shortResult || project.result}</p>
      <div className="mt-auto flex gap-5 pt-5 text-sm font-semibold text-emerald-800">
        <Link href={`/projects/${project.slug}`} className="hover:underline">작업 내용 →</Link>
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub ↗</a>}
      </div>
    </article>
  );
}
