import type { Course } from "@/types";

interface CourseItemProps {
  course: Course;
}

export default function CourseItem({ course }: CourseItemProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-bold text-slate-950">{course.title}</h3>
          <p className="mt-1 text-sm font-medium text-blue-700">{course.theme}</p>
        </div>
        <div className="shrink-0 text-left sm:text-right">
          <p className="text-xs font-semibold text-slate-500">{course.type}</p>
          <p className="mt-1 text-xs text-slate-400">{course.period}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
        {course.details.map((detail) => (
          <li key={detail} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
