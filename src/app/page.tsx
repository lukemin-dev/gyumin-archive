import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import NoteItem from "@/components/NoteItem";
import { profile } from "@/data/profile";
import { automationWork } from "@/data/portfolio";
import { notes, projects } from "@/lib/content-data";

export default function Home() {
  const plm = projects.find((p) => p.slug === "plm-account-recovery")!;
  const automation = projects.find((p) => p.slug === automationWork)!;
  return <div>
    <header className="grid gap-8 border-b border-stone-300 pb-12 pt-4 md:grid-cols-[1.6fr_1fr] md:gap-16">
      <div>
        <p className="text-sm text-emerald-800">전남대학교 컴퓨터공학과 · 2027년 2월 졸업예정</p>
        <h1 className="mt-5 text-6xl font-bold tracking-tight sm:text-7xl">이규민<span className="mt-3 block text-lg font-normal tracking-normal text-stone-500">Gyumin Lee</span></h1>
        <p className="mt-6 text-xl font-semibold">금호타이어 생산연구IT 인턴</p>
        <p className="mt-3 max-w-xl text-lg leading-8 text-stone-700">Python과 Java로 시스템을 연동하고 반복 업무를 자동화합니다. 현장에서 데이터가 만들어지고 전달되는 과정을 함께 살핍니다.</p>
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
      <article className="mt-6 overflow-hidden rounded-2xl border border-stone-300 bg-[#fbfaf7]">
        <div className="grid md:grid-cols-2">
          <div className="p-6 sm:p-8">
            <p className="text-sm text-emerald-800">한국생산기술연구원 · 2026.07–08</p>
            <h3 className="mt-4 text-2xl font-bold leading-snug sm:text-3xl">촬영이 빠진 구간을<br />따라가다</h3>
            <p className="mt-5 text-base leading-8 text-stone-700">농산물 자동선별 과정에서 이미지가 누락됐습니다. 센서 감지부터 PLC 출력, 카메라 트리거까지 확인하며 원인을 좁혔습니다.</p>
            <p className="mt-3 text-sm leading-7 text-stone-600">센서 응답시간과 PLC 출력 조건을 조정한 뒤, 실제 컨베이어에서 플래시 동작과 데이터 기록을 확인했습니다.</p>
            <Link href="/projects/kitech-vision-plc-validation" className="mt-6 inline-block text-sm font-semibold text-emerald-800 underline underline-offset-4">점검 과정과 검증 결과 →</Link>
          </div>
          <figure className="bg-[#173f35] p-6 text-white sm:p-8">
            <figcaption className="text-sm text-emerald-100">촬영 누락 점검 흐름</figcaption>
            <ol className="mt-6 grid grid-cols-3 gap-2 text-center text-sm">
              <li className="border-y border-white/30 py-4"><span className="block text-xs text-emerald-100">01</span><span className="mt-2 block font-semibold">센서 감지</span></li>
              <li className="border-y border-white/30 py-4"><span className="block text-xs text-emerald-100">02</span><span className="mt-2 block font-semibold">PLC 출력</span></li>
              <li className="border-y border-white/30 py-4"><span className="block text-xs text-emerald-100">03</span><span className="mt-2 block font-semibold">카메라 촬영</span></li>
            </ol>
            <p className="mt-7 text-sm text-emerald-100">LR-Z 센서 응답시간 조정</p>
            <p className="mt-2 flex flex-wrap items-baseline gap-3 text-4xl font-semibold tracking-tight sm:text-5xl"><span className="text-emerald-100">50<span className="ml-1 text-base font-normal">ms</span></span><span className="text-2xl font-normal" aria-label="에서">→</span><span>10<span className="ml-1 text-base font-normal">ms</span></span></p>
            <div className="mt-7 border-t border-white/30 pt-5"><p className="text-3xl font-semibold">8,092<span className="ml-2 text-base font-normal">개</span></p><p className="mt-2 text-sm leading-6 text-emerald-100">후속 운전에서 양파 전량의<br />플래시 작동·데이터 기록 확인</p></div>
          </figure>
        </div>
      </article>
      <div className="mt-6"><ProjectCard project={plm} /></div>
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
