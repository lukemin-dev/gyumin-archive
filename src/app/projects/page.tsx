import ProjectCard from "@/components/ProjectCard";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/lib/content-data";

export const metadata = {
  title: "프로젝트 | 이규민",
  description: "이규민이 수행한 개발 프로젝트 목록입니다.",
};

export default function ProjectsPage() {
  const featured = projects.filter((project) => ["plm-account-recovery", "kitech-vision-plc-validation", "seo-automation"].includes(project.slug));
  const others = projects.filter((project) => !featured.includes(project));

  return (
    <div>
      <PageHeader
        eyebrow="Projects"
        title="직접 만들고 고친 것들"
        description="인턴 실무, 수업, 개인 개발에서 맡은 작업을 모았습니다."
      />

      {featured.length > 0 && (
        <section className="mb-14">
          <div className="mb-5">
            <h2 className="text-xl font-bold tracking-tight text-slate-950">인턴 실무</h2>
            <p className="mt-1 text-sm text-stone-600">
              시스템 연동, 촬영 누락 점검, AI를 활용한 업무 자동화.
            </p>
          </div>
          <div className="grid gap-x-10 md:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section>
          <div className="mb-5">
            <h2 className="text-xl font-bold tracking-tight text-slate-950">개인·수업 프로젝트와 학습 기록</h2>
            <p className="mt-1 text-sm text-stone-600">
              수업과 개인 학습에서 구현한 시스템 및 자동화 도구입니다.
            </p>
          </div>
          <div className="grid gap-x-10 md:grid-cols-2">
            {others.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
