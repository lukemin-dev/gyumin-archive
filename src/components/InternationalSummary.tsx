import Link from "next/link";
import { profile } from "@/data/profile";
import { updatedAt } from "@/data/portfolio";

const copy = {
  en: {
    name: "Gyumin Lee", intro: "I am a Computer Engineering student at Chonnam National University, graduating in February 2027. I currently work as a Manufacturing IT Intern at Kumho Tire, building system integrations and automating routine tasks with Python and Java.",
    work: "Internship work", personal: "Coursework and personal projects", education: "Education", language: "Languages and activities", detail: "Project details in Korean", resume: "Resume (Korean PDF)", updated: "Updated",
    entries: [
      { company: "Kumho Tire", period: "Sep 2026 – Present", role: "Manufacturing IT Intern", slug: "plm-account-recovery", title: "PLM account deprovisioning", text: "Matched users across HR, groupware and PLM; implemented license and role revocation, account deactivation and result emails. I also worked on assigned KCEM SQL migration tasks from MSSQL to PostgreSQL, checked query results and screen integration, and accompanied MES/POP site visits." },
      { company: "Korea Institute of Industrial Technology", period: "Jul – Aug 2026", role: "Research Intern", slug: "kitech-vision-plc-validation", title: "Tracing missing image captures", text: "Checked the signal path from the LR-Z sensor through PLC I/O to the camera trigger. After changing the sensor response time from 50 ms to 10 ms and adjusting PLC output conditions, I verified flash activation and data records for all 8,092 onions in a subsequent run. This count measures capture and record verification, not AI classification accuracy." },
      { company: "Crosslink · Japan", period: "Jan – Feb 2026", role: "Software Automation Intern", slug: "seo-automation", title: "SEO data and report automation", text: "Connected Google Search Console, Google Sheets and Gemini APIs in Python to collect and process data, prioritize work, and generate improvement drafts and reports. Added input validation, retries and checkpoints so interrupted work could resume. A recorded automated run took about ten seconds, excluding human review." },
    ],
    projects: [
      { slug: "java-socket", title: "Java Socket messaging", text: "Length-prefixed messages, receive buffering and session logs. The coursework experience is distinguished from the current public implementation." },
      { slug: "warehouse-fire-anomaly-monitor", title: "Sensor monitoring prototype", text: "Raspberry Pi, Flask, SQLite, AWS EC2 and a mobile dashboard. Checked that changed sensor readings reached stored results, graphs and alert history." },
    ],
    school: "Chonnam National University · Computer Engineering", graduation: "Expected graduation: February 2027", awards: "Academic Excellence Awards for seven consecutive semesters, Spring 2023–Spring 2026.",
    languages: ["English: reading technical and API documentation.", "Japanese: everyday and collaborative communication during an internship in Japan and Osaka University's J-SHIP program.", "294.5 hours of academic mentoring through a university youth education support program."],
  },
  jp: {
    name: "イ・ギュミン", intro: "全南大学でコンピュータ工学を専攻し、2027年2月に卒業予定です。現在はクムホタイヤの生産・研究IT部門でインターンとして働き、PythonとJavaを使ったシステム連携や定型業務の自動化に取り組んでいます。",
    work: "インターンで担当した仕事", personal: "授業・個人開発", education: "学歴", language: "語学・活動", detail: "韓国語の詳細を見る", resume: "履歴書（韓国語PDF）", updated: "更新",
    entries: [
      { company: "クムホタイヤ", period: "2026年9月 – 現在", role: "生産・研究ITインターン", slug: "plm-account-recovery", title: "PLM退職者アカウントの権限回収", text: "人事DB・グループウェア・PLMのユーザー情報を照合し、License・Roleの回収、アカウントの無効化、結果のメール通知を実装しました。KCEMでは担当範囲のSQLをMSSQLからPostgreSQLへ移行し、検索結果と画面連携を確認しました。また、担当者に同行してMES・POPの現場を見学しました。" },
      { company: "韓国生産技術研究院", period: "2026年7月 – 8月", role: "研究インターン", slug: "kitech-vision-plc-validation", title: "撮影漏れの原因調査と確認", text: "LR-Zセンサー、PLC入出力、カメラトリガーの順に信号を確認しました。センサーの応答時間を50msから10msに変更し、PLCの出力条件を調整した後、タマネギ8,092個すべてのフラッシュ動作とデータ記録を確認しました。この数値は撮影・記録の確認件数であり、AIの分類精度ではありません。" },
      { company: "Crosslink · 日本", period: "2026年1月 – 2月", role: "ソフトウェア自動化インターン", slug: "seo-automation", title: "SEOデータ処理とレポート作成の自動化", text: "PythonでGoogle Search Console・Google Sheets・Gemini APIを連携し、データ収集・整理・優先順位の計算から改善案とレポートの生成まで自動化しました。入力検証、再試行、チェックポイントを実装し、中断後も処理を再開できるようにしました。記録した自動実行時間は約10秒で、人による確認時間は含みません。" },
    ],
    projects: [
      { slug: "java-socket", title: "Java Socket通信", text: "長さヘッダー、受信バッファ、セッションログを使ったメッセージ処理。授業での経験と現在公開している実装を分けて記載しています。" },
      { slug: "warehouse-fire-anomaly-monitor", title: "センサーモニタリングの試作", text: "Raspberry Pi・Flask・SQLite・AWS EC2・モバイル画面を連携。変更したセンサー値が保存結果、グラフ、警告履歴に反映されることを確認しました。" },
    ],
    school: "全南大学 · コンピュータ工学科", graduation: "2027年2月卒業予定", awards: "2023年度前期から2026年度前期まで、7学期連続で成績優秀賞を受賞。",
    languages: ["英語：技術文書・APIドキュメントの読解。", "日本語：日本企業でのインターンと大阪大学J-SHIPプログラムで、日常会話や共同活動に使用。", "大学生青少年教育支援事業で、合計294.5時間の学習指導・メンタリングを実施。"],
  },
};
export default function InternationalSummary({ locale }: { locale: "en" | "jp" }) {
  const c = copy[locale];
  return <article lang={locale === "jp" ? "ja" : "en"} className="mx-auto max-w-3xl">
    <header className="border-b border-stone-300 pb-9"><p className="text-sm text-emerald-800">{locale === "en" ? "English summary" : "日本語ポートフォリオ"}</p><h1 className="mt-4 text-4xl font-bold">{c.name}</h1><p className="mt-6 text-lg leading-8 text-stone-700">{c.intro}</p><div className="mt-6 flex flex-wrap gap-5 text-sm text-emerald-800"><Link href="/" className="underline">한국어</Link><Link href={locale === "en" ? "/jp" : "/en"} className="underline">{locale === "en" ? "日本語" : "English"}</Link><a href="/resume.pdf" className="underline">{c.resume}</a><a href={profile.github} className="underline" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></header>
    <section className="mt-10"><h2 className="text-2xl font-bold">{c.work}</h2><div className="mt-7">{c.entries.map((e) => <section key={e.slug} className="relative border-l border-stone-300 pb-9 pl-6"><span aria-hidden="true" className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-emerald-800"/><p className="text-sm text-stone-600">{e.period}</p><h3 className="mt-2 text-xl font-semibold">{e.company}</h3><p className="mt-1 text-sm text-emerald-800">{e.role}</p><h4 className="mt-4 font-semibold">{e.title}</h4><p className="mt-2 text-base leading-8 text-stone-700">{e.text}</p><Link href={`/projects/${e.slug}`} className="mt-3 inline-block text-sm text-emerald-800 underline">{c.detail} →</Link></section>)}</div></section>
    <section className="border-t border-stone-300 py-8"><h2 className="text-2xl font-bold">{c.personal}</h2><div className="mt-6 grid gap-6 sm:grid-cols-2">{c.projects.map((p) => <div key={p.slug}><h3 className="font-semibold">{p.title}</h3><p className="mt-3 text-sm leading-7 text-stone-700">{p.text}</p><Link href={`/projects/${p.slug}`} className="mt-3 inline-block text-sm text-emerald-800 underline">{c.detail} →</Link></div>)}</div></section>
    <section className="border-t border-stone-300 py-8"><h2 className="text-2xl font-bold">{c.education}</h2><p className="mt-5 font-semibold">{c.school}</p><p className="mt-2 text-sm leading-7">{c.graduation} · GPA {profile.education[0].gpa}</p><p className="mt-2 text-sm leading-7 text-stone-700">{c.awards}</p></section>
    <section className="border-t border-stone-300 py-8"><h2 className="text-2xl font-bold">{c.language}</h2><ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-stone-700">{c.languages.map((s) => <li key={s}>{s}</li>)}</ul></section>
    <p className="text-xs text-stone-600">{c.updated}: {updatedAt}</p>
  </article>;
}
