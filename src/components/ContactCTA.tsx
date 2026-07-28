"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";

export default function ContactCTA() {
  const english = usePathname().startsWith("/en");

  return (
    <section className="mx-auto mb-12 w-full max-w-5xl px-5 sm:px-6" aria-labelledby="contact-title">
      <div className="rounded-3xl bg-slate-900 p-7 text-white shadow-lg sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-9">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
            Contact
          </p>
          <h2 id="contact-title" className="mt-2 text-2xl font-bold">
            {english
              ? "Open to employment and collaboration opportunities."
              : "채용·협업에 관해 이야기하고 싶습니다."}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
            {english
              ? "I can share more detail about implementation scope, problem-solving decisions, and validation evidence."
              : "프로젝트의 구현 범위, 문제 해결 과정과 검증 근거를 더 자세히 설명드릴 수 있습니다."}
          </p>
        </div>
        <div className="mt-6 flex shrink-0 flex-wrap gap-3 sm:mt-0">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-slate-900 hover:bg-blue-50"
          >
            {english ? "Send email" : "이메일 보내기"}
          </a>
          <Link
            href="/resume"
            className="rounded-xl border border-slate-600 px-4 py-2.5 text-sm font-bold text-white hover:border-slate-400 hover:bg-slate-800"
          >
            {english ? "View resume" : "이력서 보기"}
          </Link>
        </div>
      </div>
    </section>
  );
}
