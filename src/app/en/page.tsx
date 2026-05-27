import { profile } from "@/data/profile";

export const metadata = {
  title: "Gyumin Lee | English Summary",
};

export default function EnglishSummaryPage() {
  return (
    <div className="space-y-16 max-w-3xl">
      {/* 1. Hero */}
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Lee Gyumin</h1>
        <p className="text-lg font-medium text-gray-800 mb-4">
          Computer Engineering student interested in automation, backend systems, and cloud infrastructure.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Architecting resilient systems and automating repetitive workflows. I focus on establishing clear input criteria, implementing robust logging, and designing fault-tolerant pipelines that can resume seamlessly after failures.
        </p>
      </section>

      {/* 2. Selected Highlights */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">Selected Highlights</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Crosslink SEO Automation</li>
          <li>Java Socket Project</li>
          <li>Backend Interview Tracker</li>
          <li>IoT Cloud Monitoring System</li>
        </ul>
      </section>

      {/* 3. Education */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">Education</h2>
        <div className="space-y-2 text-gray-700">
          <p className="font-semibold text-gray-900">Chonnam National University, Computer Engineering</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>GPA 4.26 / 4.5</li>
            <li>Department top-ranking experience</li>
            <li>Academic Excellence Scholarship 6 times</li>
          </ul>
        </div>
      </section>

      {/* 4. Experience */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">Experience</h2>
        <div className="space-y-2 text-gray-700">
          <p className="font-semibold text-gray-900">Crosslink / SEO Automation Team Intern</p>
          <p className="text-sm text-gray-500 mb-2">Yokohama, Japan / 2026.01 ~ 2026.02</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Engineered an automated SEO reporting pipeline using Python, GSC, and Gemini APIs. Drastically reduced manual data extraction and spreadsheet aggregation time from 3 days to under 10 seconds.</li>
          </ul>
        </div>
      </section>

      {/* 5. Activities */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">Activities</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Mentoring at Chorok Children&apos;s Community Center, 294.5+ hours and ongoing</li>
          <li>Osaka University J-SHIP</li>
          <li>Japanese Culture Research Club</li>
          <li>CIS international exchange</li>
        </ul>
      </section>

      {/* 6. Contact */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">Contact</h2>
        <div className="flex flex-col gap-2 text-gray-700">
          <a href={`mailto:${profile.email}`} className="hover:text-black hover:underline w-fit">
            Email: {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline w-fit">
            GitHub: {profile.github}
          </a>
          <a href={profile.portfolioRepo} target="_blank" rel="noopener noreferrer" className="hover:text-black hover:underline w-fit">
            Repository: {profile.portfolioRepo}
          </a>
        </div>
      </section>
    </div>
  );
}
