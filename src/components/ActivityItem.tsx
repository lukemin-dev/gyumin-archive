import type { Activity } from "@/types";

interface ActivityItemProps {
  activity: Activity;
}

export default function ActivityItem({ activity }: ActivityItemProps) {
  return (
    <article className="border-t border-stone-400 py-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-bold text-slate-950">{activity.title}</h3>
          <p className="mt-1 text-sm font-medium text-emerald-800">{activity.theme}</p>
        </div>
        <div className="shrink-0 text-left sm:text-right">
          <p className="text-xs font-semibold text-slate-500">{activity.type}</p>
          <p className="mt-1 text-xs text-slate-400">{activity.period}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
        {activity.details.map((detail) => (
          <li key={detail} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      {activity.evidence && (
        <p className="mt-4 border-l-2 border-emerald-700 pl-4 text-sm font-semibold text-stone-800">
          {activity.evidence}
        </p>
      )}
    </article>
  );
}
