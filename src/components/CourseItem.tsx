import type { Course } from "@/types";

interface CourseItemProps {
  course: Course;
}

export default function CourseItem({ course }: CourseItemProps) {
  return (
    <div className="py-4 border-b border-gray-100">
      <h3 className="font-semibold text-gray-900">
        ■ {course.title} / {course.type} / {course.period}
      </h3>
      <p className="font-medium text-gray-800 mt-2">[{course.theme}]</p>
      <ul className="list-none space-y-1 mt-1 text-sm text-gray-600">
        {course.details.map((detail, idx) => (
          <li key={idx}>
            {idx + 1}. {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}
