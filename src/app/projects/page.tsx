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
        title="직접 만들고 고친 것들"
        description="완성 화면만 보여주기보다 어디서 막혔고, 무엇을 맡았으며, 결과가 어떻게 달라졌는지 함께 적었습니다."
      />

      {featured.length > 0 && (
        <section className="mb-14">
          <div className="mb-5">
            <h2 className="text-xl font-bold tracking-tight text-slate-950">대표 프로젝트</h2>
            <p className="mt-1 text-sm text-slate-500">
              현장과 인턴십에서 직접 맡은 범위가 큰 작업입니다.
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
