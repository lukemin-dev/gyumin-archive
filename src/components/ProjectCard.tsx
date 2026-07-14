import Link from "next/link";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border border-gray-200 rounded-lg hover:border-gray-400 transition-colors overflow-hidden">
      <Link href={`/projects/${project.slug}`} className="block p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="font-semibold text-gray-900 flex-1 leading-snug">
            {project.title}
          </h3>
          <span className="shrink-0 text-xs font-mono text-gray-400 mt-0.5">
            {project.period}
          </span>
        </div>

        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <span className="font-semibold text-gray-900 block mb-1">무엇을 만들었나</span>
            <p>{project.theme}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-900 block mb-1">어떤 문제가 있었나</span>
            <p className="line-clamp-2 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-900 block mb-1">내가 직접 한 일</span>
            <p className="line-clamp-2 leading-relaxed">{project.myContribution[0]}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-900 block mb-1">무엇이 바뀌었나</span>
            <p className="line-clamp-2 leading-relaxed">{project.result}</p>
          </div>
        </div>
      </Link>

      {(project.githubUrl || project.demoUrl) && (
        <div className="flex gap-4 border-t border-gray-100 px-6 py-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-gray-500 hover:text-black transition-colors"
            >
              GitHub ↗
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-gray-500 hover:text-black transition-colors"
            >
              Demo ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}