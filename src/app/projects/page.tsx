import { projects } from "@/lib/content-data";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "프로젝트 | 이규민",
  description: "이규민이 수행한 개발 프로젝트 목록입니다.",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div>
      <PageHeader
        title="프로젝트"
        description="각 프로젝트의 문제, 역할, 기술적 챌린지, 결과를 정리했습니다."
      />

      {featured.length > 0 && (
        <section className="mb-12">
          <h2 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">
            Featured
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section>
          <h2 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">
            Other Projects
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {others.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
