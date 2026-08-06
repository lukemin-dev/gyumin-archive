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
        title="어디에서 무엇을 맡았는지"
        description="현장실습과 인턴십, 연구 경험을 실제로 맡은 일과 결과를 기준으로 적었습니다."
      />

      <div className="grid gap-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.title} experience={experience} />
        ))}
      </div>
    </div>
  );
}
