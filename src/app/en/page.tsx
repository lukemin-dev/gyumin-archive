import Link from "next/link";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Gyumin Lee | English Summary",
  description:
    "English summary of Gyumin Lee's backend, automation, cloud, and mobility software experience.",
};

export default function EnglishSummaryPage() {
  const primaryEducation = profile.education[0];

  return (
    <div className="space-y-16 max-w-3xl">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {profile.nameEn}
        </h1>
        <p className="text-lg font-medium text-gray-800 mb-4">
          Computer Engineering student focused on backend systems, automation,
          cloud infrastructure, and mobility software.
        </p>
        <p className="text-gray-600 leading-relaxed">
          I build repeatable workflows with clear input rules, observable logs,
          and failure recovery in mind. During an internship in Japan, I
          automated an SEO analysis workflow that previously took several days
          and reduced its execution time to about ten seconds.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
          Selected Projects
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>
            <Link
              href="/projects/seo-automation"
              className="font-medium text-gray-900 hover:underline underline-offset-4"
            >
              AI-powered SEO Automation Pipeline
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              Python and external APIs with input validation, retry logic, and
              checkpoints.
            </p>
          </li>
          <li>
            <Link
              href="/projects/warehouse-fire-anomaly-monitor"
              className="font-medium text-gray-900 hover:underline underline-offset-4"
            >
              Warehouse Fire and Anomaly Monitoring System
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              Raspberry Pi sensor pipeline, Flask API, SQLite, IsolationForest,
              AWS EC2, and a React Native dashboard.
            </p>
          </li>
          <li>
            <Link
              href="/projects/backend-interview-tracker"
              className="font-medium text-gray-900 hover:underline underline-offset-4"
            >
              Backend Interview Tracker
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              Spring Boot REST API with layered architecture, error handling,
              documentation, and tests.
            </p>
          </li>
          <li>
            <Link
              href="/projects/file-organizer-agent"
              className="font-medium text-gray-900 hover:underline underline-offset-4"
            >
              File Organizer Agent
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              Cross-platform Python CLI with dry-run safety, logging, pytest,
              and GitHub Actions CI.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
          Education
        </h2>
        <div className="space-y-2 text-gray-700">
          <p className="font-semibold text-gray-900">
            Chonnam National University, Computer Engineering
          </p>
          <p className="text-sm text-gray-500">
            Expected graduation: February 2027
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>GPA {primaryEducation?.gpa ?? "-"}</li>
            <li>Department top-ranking experience</li>
            <li>Academic Excellence Scholarship, six times</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
          Experience
        </h2>
        <div className="space-y-8 text-gray-700">
          <div>
            <p className="font-semibold text-gray-900">
              Korea Institute of Industrial Technology / Mobility Research Intern
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Gwangju, Korea / July 2026 - December 2026, in progress
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                Learning ROS2 communication structures, SLAM-related open-source
                workflows, and autonomous-driving data collection and processing.
              </li>
              <li>
                Documenting execution environments, input conditions, logs, and
                observed results for reproducible experiments.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-900">
              Crosslink / SEO Automation Team Intern
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Yokohama, Japan / January 2026 - February 2026
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                Built an automated SEO reporting pipeline using Python, Google
                Search Console, Google Sheets, and Gemini APIs.
              </li>
              <li>
                Reduced manual data extraction, analysis, and reporting time
                from roughly three days to about ten seconds.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
          Training and Activities
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>AWS Master Class, completed</li>
          <li>H-Mobility Class Autonomous Driving Perception Track, completed</li>
          <li>
            Academic mentoring at Chorok Children&apos;s Community Center, 294.5
            total hours
          </li>
          <li>Osaka University J-SHIP Program</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
          Contact
        </h2>
        <div className="flex flex-col gap-2 text-gray-700">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-black hover:underline w-fit"
          >
            Email: {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black hover:underline w-fit"
          >
            GitHub: {profile.github}
          </a>
          {profile.portfolioRepo && (
            <a
              href={profile.portfolioRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black hover:underline w-fit"
            >
              Portfolio repository: {profile.portfolioRepo}
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
