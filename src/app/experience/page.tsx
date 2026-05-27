import { experiences } from "@/data/experience";
import PageHeader from "@/components/PageHeader";
import ExperienceCard from "@/components/ExperienceCard";
import SkillTag from "@/components/SkillTag";

export const metadata = {
  title: "경험 | 이규민",
  description: "이규민의 인턴십 및 실무 경험입니다.",
};

export default function ExperiencePage() {
  return (
    <div>
      <PageHeader
        title="경험"
        description="인턴십과 실무 경험을 맥락, 문제, 조치, 결과 중심으로 정리했습니다."
      />

      {experiences.map((exp) => (
        <div key={exp.title}>
          <ExperienceCard experience={exp} />
          {exp.techStack && exp.techStack.length > 0 && (
            <div className="ml-6 mb-8 -mt-4">
              <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                기술 스택
              </p>
              <div className="flex flex-wrap gap-1.5">
                {exp.techStack.map((tech) => (
                  <SkillTag key={tech} label={tech} />
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
