import Link from "next/link";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Gyumin Lee | English Summary",
  description:
    "English summary of Gyumin Lee's backend, automation, cloud, and AI vision experience.",
};

const projects = [
  {
    href: "/projects/seo-automation",
    title: "AI-powered SEO Automation Pipeline",
    description:
      "Automated data collection, prioritization, and reporting with Python and external APIs, reducing a multi-day workflow to about ten seconds.",
  },
  {
    href: "/projects/warehouse-fire-anomaly-monitor",
    title: "Warehouse Fire and Anomaly Monitoring System",
    description:
      "Built a Raspberry Pi-to-Flask sensor pipeline with SQLite, IsolationForest, AWS EC2, and a mobile dashboard.",
  },
  {
    href: "/projects/backend-interview-tracker",
    title: "Backend Interview Tracker",
    description:
      "Designed a Spring Boot REST API with layered architecture, global error handling, documentation, and tests.",
  },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
      <h2 className="text-xl font-bold tracking-tight text-slate-950">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-slate-600">{children}</div>
    </section>
  );
}

export default function EnglishSummaryPage() {
  const education = profile.education[0];

  return (
    <div className="mx-auto max-w-4xl">
      <header className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
          English Summary
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          {profile.nameEn}
        </h1>
        <p className="mt-3 text-lg font-semibold text-blue-700">
          Backend · Cloud · Automation Engineer
        </p>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
          I build backend systems and automation workflows with clear input rules,
          observable logs, and failure recovery in mind. During an internship in
          Japan, I reduced an SEO analysis and reporting workflow from two to three
          days to about ten seconds. I am currently working on an AI vision and PLC
          based agricultural sorting system at the Korea Institute of Industrial Technology.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            GitHub ↗
          </a>
          <Link
            href="/resume"
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            Resume
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-xl px-4 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50"
          >
            Email
          </a>
        </div>
      </header>

      <div className="mt-6 grid gap-6">
        <Section title="Experience">
          <div className="space-y-6">
            <div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-bold text-slate-900">
                    Korea Institute of Industrial Technology · AI Vision & PLC Intern
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">Gwangju, Korea</p>
                </div>
                <span className="text-xs text-slate-400">Jul 2026 – Dec 2026 · In progress</span>
              </div>
              <ul className="mt-3 space-y-2">
                <li>Trained and evaluated YOLO object detection and ConvNeXt classification models in a conveyor environment.</li>
                <li>Analyzed missed image captures by separating the sensor input, PLC output, camera trigger, and AI inference stages.</li>
                <li>Labeled and quality-checked onion and kabocha squash image data for model training.</li>
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-bold text-slate-900">Crosslink · AI SEO Automation Intern</h3>
                  <p className="mt-1 text-sm text-slate-500">Yokohama, Japan</p>
                </div>
                <span className="text-xs text-slate-400">Jan 2026 – Feb 2026</span>
              </div>
              <ul className="mt-3 space-y-2">
                <li>Connected Google Search Console, Google Sheets, and Gemini APIs in a Python automation pipeline.</li>
                <li>Reduced manual data extraction, analysis, and reporting time from two to three days to about ten seconds.</li>
                <li>Implemented input validation, retries, checkpoints, and automatic model detection for quota and latency issues.</li>
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-bold text-slate-900">
                    Chonnam National University · Undergraduate Research Assistant
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">Soft Computing and Artificial Intelligence Lab</p>
                </div>
                <span className="text-xs text-slate-400">Sep 2025 – Jul 2026</span>
              </div>
              <p className="mt-3">
                Reviewed research papers and documented experimental inputs, comparison criteria,
                execution environments, and results for AI and data analysis work.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Selected Projects">
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-blue-200 hover:bg-blue-50"
              >
                <h3 className="font-bold leading-snug text-slate-900">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>
                <p className="mt-4 text-sm font-semibold text-blue-700">View project →</p>
              </Link>
            ))}
          </div>
        </Section>

        <div className="grid gap-6 md:grid-cols-2">
          <Section title="Education">
            <h3 className="font-bold text-slate-900">Chonnam National University</h3>
            <p className="mt-1">B.E. in Computer Engineering · Expected Feb 2027</p>
            <ul className="mt-3 space-y-2">
              <li>GPA {education?.gpa ?? "-"}</li>
              <li>Department top-ranking experience</li>
              <li>Academic Excellence Scholarship, six times</li>
            </ul>
          </Section>

          <Section title="Training & Activities">
            <ul className="space-y-2">
              <li>AWS Master Class · Completed</li>
              <li>H-Mobility Autonomous Driving Perception Track · Completed</li>
              <li>Academic mentoring · 294.5 total hours</li>
              <li>Osaka University J-SHIP Program</li>
            </ul>
          </Section>
        </div>
      </div>
    </div>
  );
}
