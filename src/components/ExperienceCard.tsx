import type { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">
      {children}
    </p>
  );
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-gray-700 mb-4">{children}</p>;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="border-l-2 border-gray-300 pl-6 mb-8">
      <h3 className="font-semibold text-gray-900">{experience.title}</h3>
      <p className="text-sm text-gray-500 mt-0.5">
        {experience.company} · {experience.period}
      </p>

      <div className="mt-4">
        <SectionLabel>맥락</SectionLabel>
        <SectionContent>{experience.context}</SectionContent>

        <SectionLabel>담당 업무</SectionLabel>
        <SectionContent>{experience.responsibility}</SectionContent>

        <SectionLabel>직면한 문제</SectionLabel>
        <SectionContent>{experience.problemEncountered}</SectionContent>

        <SectionLabel>수행한 조치</SectionLabel>
        <SectionContent>{experience.actionTaken}</SectionContent>

        <SectionLabel>결과</SectionLabel>
        <SectionContent>{experience.result}</SectionContent>

        <SectionLabel>배운 점</SectionLabel>
        <SectionContent>{experience.whatILearned}</SectionContent>
      </div>
    </div>
  );
}
