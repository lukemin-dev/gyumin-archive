import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectVisuals } from "@/data/project-visuals";
import { notes, projects } from "@/lib/content-data";

export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return { title: p ? `${p.title} | 이규민` : "프로젝트를 찾을 수 없습니다", description: p?.theme };
}
export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((item) => item.slug === slug);
  if (!p) notFound();
  const visuals = getProjectVisuals(slug);
  const related = notes.filter((n) => n.relatedProject?.slug === slug);
  return <article className="mx-auto max-w-3xl">
    <Link href="/projects" className="text-sm text-emerald-800 hover:underline">← 프로젝트 목록</Link>
    <header className="mt-8 border-b border-stone-300 pb-8">
      <p className="text-sm text-stone-600">{p.period} · {p.type}</p>
      <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{p.title}</h1>
      <p className="mt-4 text-lg leading-8 text-stone-600">{p.theme}</p>
      <dl className="mt-6 space-y-3 text-sm leading-7">
        {p.role && <div className="grid gap-1 sm:grid-cols-[6rem_1fr]"><dt className="text-stone-500">내 역할</dt><dd>{p.role}</dd></div>}
        {p.scope && <div className="grid gap-1 sm:grid-cols-[6rem_1fr]"><dt className="text-stone-500">작업 범위</dt><dd>{p.scope}</dd></div>}
      </dl>
      <div className="mt-5 flex flex-wrap gap-5 text-sm text-emerald-800">
        {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="underline">공개 코드 ↗</a>}
        {p.demoUrl && <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="underline">데모 ↗</a>}
        {p.privateCode && <span className="text-stone-500">회사 내부 코드와 운영 화면은 공개하지 않습니다.</span>}
      </div>
    </header>
    <nav aria-label="프로젝트 목차" className="my-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-emerald-800">
      <a href="#context" className="hover:underline">문제와 역할 ↓</a><a href="#process" className="hover:underline">해결 과정 ↓</a><a href="#result" className="hover:underline">결과와 남은 점 ↓</a>
    </nav>
    <section id="context" className="py-6">
      <h2 className="text-2xl font-bold">문제와 내 역할</h2><p className="mt-5 whitespace-pre-wrap text-base leading-8 text-stone-700">{p.problem}</p>
      <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-8 text-stone-700">{p.myContribution.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>
    <section id="process" className="mt-5 border-t border-stone-300 py-8">
      <h2 className="text-2xl font-bold">해결 과정</h2>
      <p className="mt-5 whitespace-pre-wrap text-base leading-8 text-stone-700">{p.bottleneck}</p>
      <p className="mt-4 whitespace-pre-wrap text-base leading-8 text-stone-700">{p.solution}</p>
      {slug === "kitech-vision-plc-validation" ? <div className="mt-7 overflow-x-auto"><table className="w-full border-collapse text-left text-sm leading-7"><caption className="mb-3 text-left font-semibold">바꾼 설정과 확인한 결과</caption><thead><tr className="border-y border-stone-300 bg-[#e7efe9]"><th className="p-3">항목</th><th className="p-3">작업 내용</th></tr></thead><tbody><tr className="border-b border-stone-300"><th className="p-3 font-medium">LR-Z 센서</th><td className="p-3">응답시간 50ms → 10ms</td></tr><tr className="border-b border-stone-300"><th className="p-3 font-medium">PLC</th><td className="p-3">출력 조건 조정</td></tr><tr className="border-b border-stone-300"><th className="p-3 font-medium">후속 운전 확인</th><td className="p-3">양파 8,092개 전량의 플래시 작동·데이터 기록 확인</td></tr></tbody></table><p className="mt-3 text-xs leading-6 text-stone-600">촬영·기록 확인 결과이며 AI 등급분류 정확도를 뜻하지 않습니다.</p></div> : <div className="mt-7 space-y-7">{visuals.map((v) => <figure key={v.src}><a href={v.src} target="_blank" rel="noopener noreferrer" aria-label={`${v.alt} 원본 보기`}><Image src={v.src} alt={v.alt} width={v.width} height={v.height} sizes="(min-width: 768px) 768px, 100vw" className={v.kind === "screen" ? "max-h-[32rem] w-full border border-stone-300 object-contain" : "h-auto w-full border border-stone-300"} /></a><figcaption className="mt-2 text-xs leading-6 text-stone-600">{v.caption}</figcaption></figure>)}</div>}
      <details className="mt-6 border-y border-stone-300 py-4"><summary className="cursor-pointer text-sm font-semibold text-emerald-800">사용한 기술과 선택 이유</summary><p className="mt-4 whitespace-pre-wrap text-base leading-8 text-stone-700">{p.techContext}</p></details>
    </section>
    <section id="result" className="border-t border-stone-300 py-8">
      <h2 className="text-2xl font-bold">결과와 남은 점</h2><p className="mt-5 whitespace-pre-wrap border-l-2 border-emerald-800 pl-5 text-base font-medium leading-8">{p.result}</p>
      {p.validation && p.validation.length > 0 && <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-stone-700">{p.validation.map((item) => <li key={item}>{item}</li>)}</ul>}
      <p className="mt-5 whitespace-pre-wrap text-base leading-8 text-stone-700">{p.retrospective}</p>
      {p.evidence && p.evidence.length > 0 && <div className="mt-6 space-y-3">{p.evidence.map((e) => <div key={e.label} className="text-sm leading-7"><p className="font-semibold">{e.href ? <a href={e.href} target="_blank" rel="noopener noreferrer" className="text-emerald-800 underline">{e.label} ↗</a> : e.label}</p><p className="text-stone-600">{e.description}</p></div>)}</div>}
    </section>
    {related.length > 0 && <aside className="border-t border-stone-300 py-7"><h2 className="font-semibold">작업하며 남긴 글</h2>{related.map((n) => <Link key={n.slug} href={`/notes/${n.slug}`} className="mt-3 block text-sm leading-7 text-emerald-800 hover:underline">{n.title} →</Link>)}</aside>}
    <Link href="/projects" className="mt-6 inline-block text-sm text-emerald-800 underline">다른 프로젝트 보기 →</Link>
  </article>;
}
