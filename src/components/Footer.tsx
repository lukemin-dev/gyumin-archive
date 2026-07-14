import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 py-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-800">
            {profile.name} · {profile.nameEn}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Backend · Cloud · Automation Portfolio
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/activities" className="text-sm text-slate-500 hover:text-slate-950">
            활동
          </Link>
          <Link href="/courses" className="text-sm text-slate-500 hover:text-slate-950">
            교육
          </Link>
          <Link href="/notes" className="text-sm text-slate-500 hover:text-slate-950">
            노트
          </Link>
          <Link href="/en" className="text-sm text-slate-500 hover:text-slate-950">
            English
          </Link>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-slate-950"
          >
            GitHub ↗
          </a>
          <a href={`mailto:${profile.email}`} className="text-sm text-slate-500 hover:text-slate-950">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
