import ActivityItem from "@/components/ActivityItem";
import PageHeader from "@/components/PageHeader";
import { activities } from "@/lib/content-data";

export const metadata = {
  title: "활동 | 이규민",
  description: "이규민의 멘토링, 봉사, 학술 활동입니다.",
};

export default function ActivitiesPage() {
  const categories = Array.from(new Set(activities.map((activity) => activity.category)));

  return (
    <div>
      <PageHeader
        eyebrow="Activities"
        title="기술 밖에서 쌓은 협업과 설명 경험"
        description="멘토링, 국제 교류, 학술 활동에서 맡은 역할과 실제로 배운 점을 정리했습니다."
      />

      <div className="space-y-14">
        {categories.map((category) => {
          const items = activities.filter((activity) => activity.category === category);
          return (
            <section key={category}>
              <h2 className="mb-4 text-lg font-bold text-slate-950">{category}</h2>
              <div className="grid gap-5 md:grid-cols-2">
                {items.map((activity) => (
                  <ActivityItem key={activity.title} activity={activity} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
