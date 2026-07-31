import CourseItem from "@/components/CourseItem";
import PageHeader from "@/components/PageHeader";
import { courses } from "@/data/courses";

export const metadata = {
  title: "교육 | 이규민",
  description: "이규민이 참여한 교육 프로그램 및 과정입니다.",
};

export default function CoursesPage() {
  const categories = Array.from(new Set(courses.map((course) => course.category)));

  return (
    <div>
      <PageHeader
        eyebrow="Courses"
        title="직무와 연결해 이수한 교육"
        description="실제로 참여한 과정과 그 안에서 다룬 내용을 모았습니다."
      />

      <div className="space-y-14">
        {categories.map((category) => {
          const items = courses.filter((course) => course.category === category);
          return (
            <section key={category}>
              <h2 className="mb-4 text-lg font-bold text-slate-950">{category}</h2>
              <div className="grid gap-5 md:grid-cols-2">
                {items.map((course) => (
                  <CourseItem key={course.title} course={course} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
