import type { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
}

function DetailItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-bold text-slate-500">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-slate-600">{children}</p>
    </div>
  );
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const ongoing = experience.period.includes("진행 중");

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-bold text-slate-950">{experience.title}</h2>
            {ongoing && (
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                진행 중
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-slate-500">{experience.company}</p>
        </div>
        <span className="shrink-0 text-xs text-slate-400">{experience.period}</span>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-slate-600">{experience.context}</p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs font-bold text-slate-500">핵심 역할</p>
          <p className="mt-2 text-sm font-medium leading-relaxed text-slate-800">
            {experience.responsibility}
          </p>
        </div>
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
          <p className="text-xs font-bold text-blue-700">결과</p>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-900">
            {experience.result}
          </p>
        </div>
      </div>

      {experience.techStack && experience.techStack.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {experience.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <details className="group mt-5 border-t border-slate-100 pt-4">
        <summary className="cursor-pointer list-none text-sm font-semibold text-blue-700 marker:hidden">
          <span className="group-open:hidden">문제 해결 과정 펼쳐보기 ↓</span>
          <span className="hidden group-open:inline">문제 해결 과정 접기 ↑</span>
        </summary>
        <div className="mt-4 grid gap-5 rounded-xl bg-slate-50 p-5 md:grid-cols-3">
          <DetailItem label="직면한 문제">{experience.problemEncountered}</DetailItem>
          <DetailItem label="수행한 조치">{experience.actionTaken}</DetailItem>
          <DetailItem label="배운 점">{experience.whatILearned}</DetailItem>
        </div>
      </details>
    </article>
  );
}
