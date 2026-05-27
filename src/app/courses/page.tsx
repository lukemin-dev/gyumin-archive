import { courses } from "@/data/courses";
import PageHeader from "@/components/PageHeader";
import CourseItem from "@/components/CourseItem";

export const metadata = {
  title: "교육 | 김규민",
  description: "김규민이 참여한 교육 프로그램 및 과정입니다.",
};

export default function CoursesPage() {
  // Group courses by category
  const categories = Array.from(new Set(courses.map((c) => c.category)));

  return (
    <div>
      <PageHeader
        title="교육 · 프로그램"
        description="실제 참여하거나 이수한 프로그램만 정리했습니다."
      />

      {categories.map((category) => {
        const items = courses.filter((c) => c.category === category);
        return (
          <section key={category} className="mb-10">
            <h2 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-2">
              {category}
            </h2>
            <div>
              {items.map((course) => (
                <CourseItem key={course.title} course={course} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
