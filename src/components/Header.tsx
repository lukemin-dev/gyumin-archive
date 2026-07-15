"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "/projects", label: "프로젝트" },
  { href: "/experience", label: "경험" },
  { href: "/about", label: "소개" },
  { href: "/resume", label: "이력서" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between" aria-label="주요 메뉴">
        <Link href="/" className="group flex items-center gap-3" aria-label="이규민 포트폴리오 홈">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white transition-transform group-hover:-translate-y-0.5">
            G
          </span>
          <span>
            <span className="block text-sm font-bold text-slate-900 leading-tight">
              {profile.name}
            </span>
            <span className="hidden sm:block text-[11px] text-slate-500 leading-tight">
              Backend · Cloud · Automation
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
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <span className="mx-2 h-5 w-px bg-slate-200" aria-hidden="true" />
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
          >
            GitHub ↗
          </a>
        </div>

        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-950"
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
        <div id="mobile-navigation" className="md:hidden border-t border-slate-100 bg-white">
          <div className="max-w-5xl mx-auto px-5 py-4">
            <div className="grid gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                      active
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
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
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
