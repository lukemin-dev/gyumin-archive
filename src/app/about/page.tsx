import { profile } from "@/data/profile";
import PageHeader from "@/components/PageHeader";
import SectionBlock from "@/components/SectionBlock";
import SkillTag from "@/components/SkillTag";
import Image from "next/image";

export const metadata = {
  title: "소개 | 김규민",
  description: "김규민의 학력, 기술 스택, 관심 분야를 소개합니다.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="소개"
        description="학력, 기술, 관심 분야를 정리했습니다."
      />

      {/* Bio */}
      <SectionBlock title="자기소개">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {profile.image && (
            <Image
              src={profile.image}
              alt="프로필 이미지"
              width={120}
              height={120}
              className="rounded-lg object-cover w-24 h-24 md:w-32 md:h-32 border border-gray-200 shrink-0"
              priority
            />
          )}
          <p className="text-sm text-gray-700 leading-relaxed">{profile.bio}</p>
        </div>
      </SectionBlock>

      {/* Currently */}
      <SectionBlock title="Currently">
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          <li>AWS Master Class 수강 중</li>
          <li>H-Mobility 자율주행 인지 과정 수강 중</li>
          <li>초록어린이지역아동센터 학습 멘토링 진행 중</li>
          <li>개인 포트폴리오와 프로젝트 기록 정리 중</li>
        </ul>
      </SectionBlock>

      {/* 기술을 설명하는 방식 */}
      <SectionBlock title="기술을 설명하는 방식">
        <p className="text-sm text-gray-700 leading-relaxed">
          프로젝트나 교류 활동을 하면서, 정답을 아는 것보다 상대가 이해할 수 있게 설명하는 과정이 중요하다는 걸 느꼈습니다. 일본문화연구회 발표와 통역, 멘토링 활동을 통해 질문의 의도와 상대의 이해 수준을 먼저 보는 습관을 갖게 됐습니다.
        </p>
      </SectionBlock>

      {/* Education */}
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

      {/* Academic Achievement */}
      <SectionBlock title="학업 성취">
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          전공 학습에서도 꾸준함을 유지했습니다. GPA{" "}
          <span className="font-mono font-semibold">4.26/4.5</span>를
          기록했고, 학과 수석 경험과 성적우수장학금 6회를 통해 컴퓨터공학 기초를
          성실히 쌓아왔습니다.
        </p>
        <div className="grid grid-cols-3 gap-4 border border-gray-200 rounded-lg p-4">
          <div className="text-center">
            <p className="text-xl font-bold font-mono text-gray-900">4.26/4.5</p>
            <p className="text-xs text-gray-500 mt-1">GPA</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold font-mono text-gray-900">수석</p>
            <p className="text-xs text-gray-500 mt-1">학과 내 최상위</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold font-mono text-gray-900">6회</p>
            <p className="text-xs text-gray-500 mt-1">성적우수장학금</p>
          </div>
        </div>
      </SectionBlock>

      {/* Awards */}
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

      {/* Skills */}
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

      {/* Interests */}
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

      {/* Contact */}
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
