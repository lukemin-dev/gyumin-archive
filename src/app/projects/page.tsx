import ProjectCard from "@/components/ProjectCard";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/lib/content-data";

export const metadata = {
  title: "프로젝트 | 이규민",
  description: "이규민이 수행한 개발 프로젝트 목록입니다.",
};

export default function ProjectsPage() {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <div>
      <PageHeader
        eyebrow="Projects"
        title="문제를 해결한 과정을 보여주는 프로젝트"
        description="기술 이름보다 어떤 문제를 발견했고, 무엇을 직접 구현했으며, 결과가 어떻게 달라졌는지를 중심으로 정리했습니다."
      />

      {featured.length > 0 && (
        <section className="mb-14">
          <div className="mb-5">
            <h2 className="text-xl font-bold tracking-tight text-slate-950">대표 프로젝트</h2>
            <p className="mt-1 text-sm text-slate-500">
              직무 연관성과 문제 해결 과정이 가장 잘 드러나는 작업입니다.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section>
          <div className="mb-5">
            <h2 className="text-xl font-bold tracking-tight text-slate-950">그 밖의 프로젝트</h2>
            <p className="mt-1 text-sm text-slate-500">
              수업과 개인 학습에서 구현한 시스템 및 자동화 도구입니다.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {others.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
