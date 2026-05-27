import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          © 이규민 / Gyumin Lee. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
          >
            Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://github.com/lukemin-dev/gyumin-archive"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
          >
            Repository
          </a>
          <Link
            href="/resume"
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors"
          >
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}
