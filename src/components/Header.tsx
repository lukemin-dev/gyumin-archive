"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "/projects", label: "프로젝트" },
  { href: "/experience", label: "경험" },
  { href: "/notes", label: "기술 노트" },
  { href: "/about", label: "소개" },
  { href: "/resume", label: "이력서" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-300/90 bg-[#f4f1ea]/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-6" aria-label="주요 메뉴">
        <Link href="/" className="group flex items-center gap-3" aria-label="이규민 포트폴리오 홈">
          <span className="font-mono text-sm font-bold text-emerald-800">
            gyumin.dev
          </span>
          <span>
            <span className="block text-sm font-bold leading-tight text-stone-900">
              {profile.name}
            </span>
            <span className="hidden text-[11px] leading-tight text-stone-500 sm:block">
              기록하고 개선하는 개발자
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-emerald-800 underline decoration-2 underline-offset-8"
                    : "text-stone-600 hover:text-stone-950"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <span className="mx-2 h-5 w-px bg-stone-300" aria-hidden="true" />
          <Link
            href="/en"
            className="px-2 py-2 font-mono text-xs font-semibold text-stone-600 transition-colors hover:text-stone-950"
          >
            EN
          </Link>
          <Link
            href="/jp"
            className="px-2 py-2 font-mono text-xs font-semibold text-stone-600 transition-colors hover:text-stone-950"
          >
            JP
          </Link>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-2 text-sm font-semibold text-stone-600 transition-colors hover:text-stone-950"
          >
            GitHub ↗
          </a>
        </div>

        <button
          type="button"
          className="p-2 text-stone-600 hover:text-stone-950 md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-navigation" className="border-t border-stone-300 bg-[#f4f1ea] md:hidden">
          <div className="max-w-5xl mx-auto px-5 py-4">
            <div className="grid gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                      active
                        ? "font-bold text-emerald-800"
                        : "text-stone-600 hover:text-stone-950"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-3 flex gap-4 border-t border-slate-100 pt-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-slate-700"
              >
                GitHub ↗
              </a>
              <a href={`mailto:${profile.email}`} className="text-sm font-semibold text-slate-700">
                Email
              </a>
              <Link href="/en" className="text-sm font-semibold text-slate-700">
                English
              </Link>
              <Link href="/jp" className="text-sm font-semibold text-slate-700">
                日本語
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
