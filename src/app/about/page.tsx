import Image from "next/image";
import { profile } from "@/data/profile";
import PageHeader from "@/components/PageHeader";
import SectionBlock from "@/components/SectionBlock";
import SkillTag from "@/components/SkillTag";

export const metadata = {
  title: "소개 | 이규민",
  description: "이규민의 학력, 기술 스택, 관심 분야를 소개합니다.",
};

export default function AboutPage() {
  const primaryEducation = profile.education[0];
  const topAcademicAward = profile.awards.find((award) =>
    award.title.includes("수석"),
  );
  const scholarshipAward = profile.awards.find((award) =>
    award.title.includes("성적우수장학금"),
  );

  return (
    <div>
      <PageHeader
        title="소개"
        description="학력, 기술, 관심 분야를 정리했습니다."
      />

      <SectionBlock title="자기소개">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {profile.image && (
            <Image
              src={profile.image}
              alt={`${profile.name} 프로필 이미지`}
              width={120}
              height={120}
              className="rounded-lg object-cover w-24 h-24 md:w-32 md:h-32 border border-gray-200 shrink-0"
              priority
            />
          )}
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
            {profile.bio}
          </p>
        </div>
      </SectionBlock>

      <SectionBlock title="현재 집중하는 것">
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          <li>한국생산기술연구원 현장실습 인턴으로 ROS2와 SLAM 연구 흐름 학습</li>
          <li>자율주행 데이터 수집·처리와 오픈소스 알고리즘 구현 실습</li>
          <li>프로젝트의 문제, 역할, 해결 과정과 근거 자료 문서화</li>
        </ul>
      </SectionBlock>

      <SectionBlock title="기술을 설명하는 방식">
        <p className="text-sm text-gray-700 leading-relaxed">
          프로젝트나 교류 활동을 하면서, 정답을 아는 것보다 상대가 이해할 수 있게 설명하는 과정이 중요하다는 걸 느꼈습니다. 일본문화연구회 발표와 통역, 멘토링 활동을 통해 질문의 의도와 상대의 이해 수준을 먼저 보는 습관을 갖게 됐습니다.
        </p>
      </SectionBlock>

      <SectionBlock title="학력">
        {profile.education.map((edu) => (
          <div key={edu.school} className="mb-4 last:mb-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-gray-900">{edu.school}</p>
                <p className="text-sm text-gray-600">{edu.major}</p>
              </div>
              <span className="text-sm font-mono text-gray-400 shrink-0">
                {edu.period}
              </span>
            </div>
            {edu.gpa && (
              <p className="text-sm text-gray-500 mt-1">
                GPA: <span className="font-mono">{edu.gpa}</span>
                {edu.note && (
                  <span className="text-xs text-gray-400 ml-2">
                    ({edu.note})
                  </span>
                )}
              </p>
            )}
          </div>
        ))}
      </SectionBlock>

      <SectionBlock title="학업 성취">
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          전공 학습에서도 꾸준함을 유지했습니다. GPA{" "}
          <span className="font-mono font-semibold">
            {primaryEducation?.gpa ?? "-"}
          </span>
          를 기록했고, 학과 수석 경험과 성적우수장학금 6회를 통해 컴퓨터공학 기초를 성실히 쌓아왔습니다.
        </p>
        <div className="grid grid-cols-3 gap-4 border border-gray-200 rounded-lg p-4">
          <div className="text-center">
            <p className="text-xl font-bold font-mono text-gray-900">
              {primaryEducation?.gpa ?? "-"}
            </p>
            <p className="text-xs text-gray-500 mt-1">GPA</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold font-mono text-gray-900">
              {topAcademicAward?.title.replace(" 경험", "") ?? "수석"}
            </p>
            <p className="text-xs text-gray-500 mt-1">학과 내 최상위</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold font-mono text-gray-900">
              {scholarshipAward?.date ?? "-"}
            </p>
            <p className="text-xs text-gray-500 mt-1">성적우수장학금</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="수상 및 장학">
        {profile.awards.map((award) => (
          <div
            key={award.title}
            className="py-3 border-b border-gray-100 last:border-b-0"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-gray-900">{award.title}</p>
                <p className="text-sm text-gray-600">{award.description}</p>
              </div>
              <span className="text-sm font-mono text-gray-400 shrink-0">
                {award.date}
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1">{award.organization}</p>
          </div>
        ))}
      </SectionBlock>

      <SectionBlock title="기술 스택">
        <div className="space-y-4">
          {profile.skills.map((category) => (
            <div key={category.category}>
              <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                {category.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <SkillTag key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="관심 분야">
        <div className="flex flex-wrap gap-2">
          {profile.interests.map((interest) => (
            <span
              key={interest}
              className="text-sm px-3 py-1.5 border border-gray-200 rounded text-gray-700"
            >
              {interest}
            </span>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="연락처">
        <div className="space-y-2 text-sm">
          <p className="text-gray-600">
            <span className="font-mono text-gray-400 mr-2">Email</span>
            <a
              href={`mailto:${profile.email}`}
              className="text-gray-900 hover:underline underline-offset-4"
            >
              {profile.email}
            </a>
          </p>
          <p className="text-gray-600">
            <span className="font-mono text-gray-400 mr-2">GitHub</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:underline underline-offset-4"
            >
              {profile.github}
            </a>
          </p>
        </div>
      </SectionBlock>
    </div>
  );
}
