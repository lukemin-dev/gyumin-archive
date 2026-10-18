import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import NoteItem from "@/components/NoteItem";
import { profile } from "@/data/profile";
import { primaryWork, automationWork } from "@/data/portfolio";
import { notes, projects } from "@/lib/content-data";

export default function Home() {
  const work = primaryWork.map((slug) => projects.find((p) => p.slug === slug)!);
  const automation = projects.find((p) => p.slug === automationWork)!;
  return <div>
    <header className="grid gap-8 border-b border-stone-300 pb-12 pt-4 md:grid-cols-[1.6fr_1fr] md:gap-16">
      <div>
        <p className="text-sm text-emerald-800">전남대학교 컴퓨터공학과 · 2027년 2월 졸업예정</p>
        <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">안녕하세요,<br />이규민입니다.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">금호타이어 생산연구IT팀에서 인턴으로 일하고 있습니다. Python과 Java로 시스템을 연동하고, 반복 업무를 자동화하는 일을 합니다.</p>
        <div className="mt-7 flex flex-wrap gap-6 text-sm font-semibold">
          <Link href="/resume" className="text-emerald-800 underline">이력서 보기 →</Link>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub ↗</a>
          <Link href="/about" className="hover:underline">조금 더 알아보기 →</Link>
        </div>
      </div>
      <aside className="self-end border-l-2 border-emerald-800 pl-6 text-sm leading-7">
        <p className="font-semibold">최근 하고 있는 일</p>
        <ul className="mt-3 space-y-3 text-stone-600">
          <li>PLM 퇴직자 계정 자동 회수 구현</li>
          <li>KCEM의 담당 SQL을 PostgreSQL로 전환하고 조회 결과 점검</li>
          <li>담당자와 MES·POP 현장에 동행하며 생산정보 흐름 확인</li>
        </ul>
      </aside>
    </header>
    <section className="mt-14" aria-labelledby="work-title">
      <div className="flex items-end justify-between gap-5"><h2 id="work-title" className="text-2xl font-bold">실무에서 맡은 작업</h2><Link href="/experience" className="text-sm text-emerald-800 hover:underline">경력 전체 →</Link></div>
      <div className="mt-5 grid gap-x-10 md:grid-cols-2">{work.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
    </section>
    <section className="mt-8 grid gap-6 border-y border-stone-300 py-8 md:grid-cols-[1fr_2fr]" aria-labelledby="automation-title">
      <div><p className="text-sm text-emerald-800">일본 Crosslink 인턴</p><h2 id="automation-title" className="mt-2 text-2xl font-bold">AI를 업무에 써 본 경험</h2></div>
      <div><h3 className="text-lg font-semibold">{automation.title}</h3><p className="mt-3 text-base leading-8 text-stone-700">Google Search Console·Google Sheets·Gemini API를 연결했습니다. 데이터 수집부터 개선 초안과 보고서 생성까지 자동화하고, 실행이 중단됐을 때 이어서 처리하도록 재시도와 체크포인트를 넣었습니다.</p><Link href={`/projects/${automation.slug}`} className="mt-4 inline-block text-sm font-semibold text-emerald-800 hover:underline">구현 과정 보기 →</Link></div>
    </section>
    <section className="mt-14"><div className="flex items-end justify-between gap-4"><h2 className="text-2xl font-bold">수업과 개인 개발</h2><Link href="/projects" className="text-sm text-emerald-800 hover:underline">프로젝트 전체 →</Link></div><div className="mt-5 grid gap-x-10 md:grid-cols-2">{["java-socket", "warehouse-fire-anomaly-monitor"].map((slug) => <ProjectCard key={slug} project={projects.find((p) => p.slug === slug)!} />)}</div></section>
    <section className="mt-14"><div className="mb-5 flex items-end justify-between gap-4"><h2 className="text-2xl font-bold">작업하며 남긴 글</h2><Link href="/notes" className="text-sm text-emerald-800 hover:underline">모든 글 →</Link></div>{notes.slice(0,3).map((note) => <NoteItem key={note.slug} note={note} />)}</section>
    <div className="mt-12 flex flex-wrap gap-6 border-t border-stone-300 pt-6 text-sm"><Link href="/en" className="text-emerald-800 hover:underline">English summary →</Link><Link href="/jp" className="text-emerald-800 hover:underline">日本語で読む →</Link></div>
  </div>;
}
