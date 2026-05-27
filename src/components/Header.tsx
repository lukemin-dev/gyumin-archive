"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/projects", label: "프로젝트" },
  { href: "/experience", label: "경험" },
  { href: "/activities", label: "활동" },
  { href: "/about", label: "소개" },
  { href: "/resume", label: "이력서" },
  { href: "/en", label: "EN Summary" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-gray-900">
          이규민
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  isActive(link.href)
                    ? "text-sm font-semibold text-black"
                    : "text-sm text-gray-500 hover:text-black transition-colors"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop External Links */}
        <div className="hidden md:flex items-center gap-4 border-l border-gray-200 pl-4 ml-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
          >
            Email
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-gray-600 hover:text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          {mobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <ul className="max-w-4xl mx-auto px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={
                    isActive(link.href)
                      ? "block text-sm font-semibold text-black"
                      : "block text-sm text-gray-500 hover:text-black transition-colors"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 mt-2 border-t border-gray-100 flex gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-500 hover:text-black"
              >
                GitHub
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm font-medium text-gray-500 hover:text-black"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
