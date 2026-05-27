import type { Activity } from "@/types";

interface ActivityItemProps {
  activity: Activity;
}

export default function ActivityItem({ activity }: ActivityItemProps) {
  return (
    <div className="py-4 border-b border-gray-100">
      <h3 className="font-semibold text-gray-900">
        ■ {activity.title} / {activity.type} / {activity.period}
      </h3>
      <p className="font-medium text-gray-800 mt-2">[{activity.theme}]</p>
      <ul className="list-none space-y-1 mt-1 text-sm text-gray-600">
        {activity.details.map((detail, idx) => (
          <li key={idx}>
            {idx + 1}. {detail}
          </li>
        ))}
      </ul>
      {activity.evidence && (
        <p className="font-mono text-sm text-gray-900 font-semibold mt-3">
          {activity.evidence}
        </p>
      )}
    </div>
  );
}
