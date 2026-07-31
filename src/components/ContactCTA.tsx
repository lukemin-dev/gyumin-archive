"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";

export default function ContactCTA() {
  const english = usePathname().startsWith("/en");
  const japanese = usePathname().startsWith("/jp");

  return (
    <section className="mx-auto mb-12 w-full max-w-5xl px-5 sm:px-6" aria-labelledby="contact-title">
      <div className="border-y-2 border-stone-800 py-7 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:py-9">
        <div>
          <p className="font-mono text-xs text-emerald-800">
            / contact
          </p>
          <h2 id="contact-title" className="mt-2 text-2xl font-bold text-stone-950">
            {japanese
              ? "採用・協業についてお話しできれば幸いです。"
              : english
              ? "Open to employment and collaboration opportunities."
              : "채용·협업 문의"}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600">
            {japanese
              ? "担当範囲、問題解決の判断、検証結果について詳しくご説明できます。"
              : english
              ? "I can share more detail about implementation scope, problem-solving decisions, and validation evidence."
              : "프로젝트의 구현 범위, 문제 해결 과정과 검증 근거를 더 자세히 설명드릴 수 있습니다."}
          </p>
        </div>
        <div className="mt-6 flex shrink-0 flex-wrap gap-3 sm:mt-0">
          <a
            href={`mailto:${profile.email}`}
            className="border-b-2 border-stone-900 px-1 py-2.5 text-sm font-bold text-stone-900 hover:text-emerald-800"
          >
            {japanese ? "メールを送る" : english ? "Send email" : "이메일 보내기"}
          </a>
          <Link
            href="/resume"
            className="border-b border-stone-400 px-1 py-2.5 text-sm font-bold text-stone-700 hover:text-stone-950"
          >
            {japanese ? "韓国語の履歴書を見る" : english ? "View resume" : "이력서 보기"}
          </Link>
        </div>
      </div>
    </section>
  );
}
