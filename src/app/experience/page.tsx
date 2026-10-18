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
        description="금호타이어, 한국생산기술연구원, Crosslink에서 한 일과 학부 연구 경험입니다."
      />

      <div className="ml-1 mt-4">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.title} experience={experience} />
        ))}
      </div>
    </div>
  );
}
