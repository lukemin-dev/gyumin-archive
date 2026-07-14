import ExperienceCard from "@/components/ExperienceCard";
import PageHeader from "@/components/PageHeader";
import { experiences } from "@/data/experience";

export const metadata = {
  title: "경험 | 이규민",
  description: "이규민의 연구, 인턴십, 실무 경험입니다.",
};

export default function ExperiencePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Experience"
        title="현장에서 문제를 나누고 해결한 경험"
        description="처음에는 핵심 역할과 결과만 빠르게 확인하고, 필요한 경험의 문제 해결 과정은 펼쳐서 볼 수 있도록 구성했습니다."
      />

      <div className="grid gap-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.title} experience={experience} />
        ))}
      </div>
    </div>
  );
}
