import { activities } from "@/data/activities";
import PageHeader from "@/components/PageHeader";
import ActivityItem from "@/components/ActivityItem";

export const metadata = {
  title: "활동 | 이규민",
  description: "이규민의 멘토링, 봉사, 학술 활동입니다.",
};

export default function ActivitiesPage() {
  const categories = Array.from(new Set(activities.map((a) => a.category)));

  return (
    <div>
      <PageHeader
        title="활동"
        description="커뮤니케이션, 멘토링, 봉사, 협업 활동을 정리했습니다."
      />

      {categories.map((category) => {
        const items = activities.filter((a) => a.category === category);
        return (
          <section key={category} className="mb-10">
            <h2 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-2">
              {category}
            </h2>
            <div>
              {items.map((activity) => (
                <ActivityItem key={activity.title} activity={activity} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
