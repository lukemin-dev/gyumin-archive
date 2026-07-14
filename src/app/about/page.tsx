import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import SectionBlock from "@/components/SectionBlock";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";

export const metadata = {
  title: "소개 | 이규민",
  description: "이규민의 개발 방향, 학력과 기술 역량을 소개합니다.",
};

export default function AboutPage() {
  const education = profile.education[0];
  const currentExperience = experiences.find((experience) =>
    experience.period.includes("진행 중"),
  );

  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="문제를 나누고, 근거를 남기는 개발자"
        description="반복 업무 자동화와 시스템 운영 경험을 바탕으로 입력부터 결과까지 다시 설명할 수 있는 구조를 만듭니다."
      />

      <section className="mb-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          {profile.image && (
            <Image
              src={profile.image}
              alt={`${profile.name} 프로필 이미지`}
              width={144}
              height={144}
              className="h-28 w-28 shrink-0 rounded-3xl border border-slate-200 object-cover sm:h-36 sm:w-36"
              priority
            />
          )}
          <div>
            <h2 className="text-xl font-bold text-slate-950">{profile.name}</h2>
            <p className="mt-1 text-sm font-semibold text-blue-700">{profile.title}</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{profile.bio}</p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
              <a href={`mailto:${profile.email}`} className="text-blue-700 hover:underline">
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-950"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {currentExperience && (
        <SectionBlock
          title="현재 집중하는 경험"
          description="진행 중인 업무는 과장하지 않고 현재 수행한 범위까지만 기록합니다."
        >
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-bold text-slate-950">{currentExperience.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{currentExperience.company}</p>
              </div>
              <span className="text-xs font-semibold text-blue-700">{currentExperience.period}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              {currentExperience.responsibility}
            </p>
          </div>
        </SectionBlock>
      )}

      <SectionBlock
        title="기술 역량"
        description="기술 이름보다 실제로 사용한 맥락에 따라 구분했습니다."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {profile.skills.map((category) => (
            <div key={category.category} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-bold text-slate-950">{category.category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="학력 및 학업 성취">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-bold text-slate-950">{education?.school}</h3>
              <p className="mt-1 text-sm text-slate-500">{education?.major}</p>
            </div>
            <span className="text-xs text-slate-400">{education?.period}</span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xl font-bold text-slate-950">{education?.gpa}</p>
              <p className="mt-1 text-xs text-slate-500">누계 GPA</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xl font-bold text-slate-950">수석</p>
              <p className="mt-1 text-xs text-slate-500">학과 최상위 성적 경험</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xl font-bold text-slate-950">6회</p>
              <p className="mt-1 text-xs text-slate-500">성적우수장학금</p>
            </div>
          </div>

          <div className="mt-5 divide-y divide-slate-100">
            {profile.awards.map((award) => (
              <div key={award.title} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-800">{award.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{award.description}</p>
                </div>
                <span className="text-xs text-slate-400">{award.date}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="관심 분야">
        <div className="flex flex-wrap gap-2">
          {profile.interests.map((interest) => (
            <span
              key={interest}
              className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
            >
              {interest}
            </span>
          ))}
        </div>
      </SectionBlock>
    </div>
  );
}
