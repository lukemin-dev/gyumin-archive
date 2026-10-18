import Link from "next/link";
import { appliedSkills } from "@/data/portfolio";
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
  const recentExperience = experiences[0];

  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="이규민입니다"
        description="컴퓨터공학을 공부하며 제조 현장과 일본 기업에서 인턴으로 일했습니다."
      />

      <section className="mb-14 rounded-3xl border border-stone-300 bg-[#fbfaf7] p-6  sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          {profile.image && (
            <Image
              src={profile.image}
              alt={`${profile.name} 프로필 이미지`}
              width={192}
              height={192}
              className="h-28 w-28 shrink-0 rounded-3xl border border-stone-300 object-cover sm:h-48 sm:w-48"
              priority
            />
          )}
          <div>
            <h2 className="text-xl font-bold text-slate-950">{profile.name}</h2>
            <p className="mt-1 text-sm font-semibold text-emerald-800">{profile.title}</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{profile.bio}</p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
              <a href={`mailto:${profile.email}`} className="text-emerald-800 hover:underline">
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

      {recentExperience && (
        <SectionBlock
          title="최근 현장 경험"
          description="금호타이어 생산연구IT팀에서 시스템 연동과 자동화를 맡고 있습니다."
        >
          <div className="rounded-2xl border border-stone-300 bg-[#e7efe9] p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-bold text-slate-950">{recentExperience.title}</h3>
                <p className="mt-1 text-sm text-stone-600">{recentExperience.company}</p>
              </div>
              <span className="text-xs font-semibold text-emerald-800">{recentExperience.period}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              {recentExperience.responsibility}
            </p>
          </div>
        </SectionBlock>
      )}

      <SectionBlock title="어디에 써 본 기술인지">
        <div className="divide-y divide-stone-300">{appliedSkills.map((item) => <div key={item.skills} className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr]"><p className="text-sm text-emerald-800">{item.context}</p><div><h3 className="font-semibold">{item.skills}</h3><p className="mt-2 text-sm leading-7 text-stone-600">{item.detail}</p><Link href={item.href} className="mt-2 inline-block text-sm text-emerald-800 underline">{item.link} →</Link></div></div>)}</div>
        <p className="mt-5 text-sm leading-7 text-stone-600">전공 수업에서는 자료구조·알고리즘·운영체제·데이터베이스·네트워크를 공부했습니다.</p>
      </SectionBlock>

      <SectionBlock title="학력 및 학업 성취">
        <div className="rounded-2xl border border-stone-300 bg-[#fbfaf7] p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-bold text-slate-950">{education?.school}</h3>
              <p className="mt-1 text-sm text-stone-600">{education?.major}</p>
            </div>
            <span className="text-xs text-stone-600">{education?.period}</span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xl font-bold text-slate-950">{education?.gpa}</p>
              <p className="mt-1 text-xs text-stone-600">누계 GPA</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xl font-bold text-slate-950">수석</p>
              <p className="mt-1 text-xs text-stone-600">학과 최상위 성적 경험</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xl font-bold text-slate-950">7학기 연속</p>
              <p className="mt-1 text-xs text-stone-600">성적우수장학금</p>
            </div>
          </div>

          <div className="mt-5 divide-y divide-slate-100">
            {profile.awards.map((award) => (
              <div key={award.title} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-800">{award.title}</p>
                  <p className="mt-1 text-xs text-stone-600">{award.description}</p>
                </div>
                <span className="text-xs text-stone-600">{award.date}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionBlock>

      <SectionBlock
        title="언어 역량"
        description="영어 기술 문서를 읽고, 일본 현지에서 교류와 인턴 업무를 경험했습니다."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.languages.map((language) => (
            <div key={language.name} className="rounded-2xl border border-stone-300 bg-[#fbfaf7] p-5">
              <h3 className="font-bold text-slate-950">{language.name}</h3>
              <p className="mt-2 text-sm font-semibold text-emerald-800">
                {language.capability}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {language.evidence}
              </p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="관심 분야">
        <div className="flex flex-wrap gap-2">
          {profile.interests.map((interest) => (
            <span
              key={interest}
              className="rounded-full border border-stone-300 bg-[#e7efe9] px-3 py-1.5 text-sm font-medium text-emerald-800"
            >
              {interest}
            </span>
          ))}
        </div>
      </SectionBlock>
    </div>
  );
}
