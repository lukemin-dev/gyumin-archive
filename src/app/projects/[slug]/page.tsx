import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/content-data";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "프로젝트를 찾을 수 없습니다" };
  return {
    title: `${project.title} | 이규민`,
    description: project.theme,
  };
}

function DetailSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
        {label}
      </p>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      {/* Back link */}
      <Link
        href="/projects"
        className="text-sm text-gray-400 hover:text-black transition-colors mb-6 inline-block"
      >
        ← 프로젝트 목록
      </Link>

      {/* Header */}
      <div className="mb-8 pb-6 border-b border-gray-200">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-900">{project.title}</h1>
          {project.featured && (
            <span className="shrink-0 text-xs bg-gray-900 text-white px-2 py-0.5 rounded">
              Featured
            </span>
          )}
        </div>
        <p className="text-sm font-mono text-gray-400 mt-1">
          {project.type} · {project.period}
        </p>
      </div>

      {/* Detail Sections */}
      <DetailSection label="한 줄 요약">
        <p className="font-medium text-gray-800">{project.theme}</p>
        <ul className="list-none space-y-1 mt-2 text-sm text-gray-600 mb-2">
          {project.details.map((detail, idx) => (
            <li key={idx}>
              {idx + 1}. {detail}
            </li>
          ))}
        </ul>
      </DetailSection>

      <DetailSection label="처음 문제">
        <p className="whitespace-pre-wrap">{project.problem}</p>
      </DetailSection>

      <DetailSection label="내가 직접 한 일">
        <ul className="list-disc list-inside space-y-1">
          {project.myContribution.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </DetailSection>

      <DetailSection label="가장 막혔던 부분">
        <p className="whitespace-pre-wrap">{project.bottleneck}</p>
      </DetailSection>

      <DetailSection label="해결 과정">
        <p className="whitespace-pre-wrap">{project.solution}</p>
      </DetailSection>

      <DetailSection label="결과">
        <p className="whitespace-pre-wrap">{project.result}</p>
      </DetailSection>

      <DetailSection label="증명 자료 (Evidence)">
        {project.evidence && project.evidence.length > 0 ? (
          <div className="space-y-3">
            {project.evidence.map((item) => {
              const content = (
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 transition-colors hover:border-gray-300">
                  <p className="font-semibold text-gray-900">{item.label}</p>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );

              if (item.href) {
                return (
                  <a
                    key={`${item.label}-${item.href}`}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                );
              }

              return <div key={item.label}>{content}</div>;
            })}
          </div>
        ) : (
          <div className="rounded-lg border border-gray-200 border-dashed bg-gray-50 p-4">
            <p className="text-sm text-gray-500">
              공개 가능한 증명 자료를 정리 중입니다.
            </p>
          </div>
        )}
      </DetailSection>

      <DetailSection label="지금 다시 한다면">
        <p className="whitespace-pre-wrap">{project.retrospective}</p>
      </DetailSection>

      <DetailSection label="더 이야기할 수 있는 부분">
        <ul className="list-disc list-inside space-y-1 text-gray-800 font-medium">
          {project.interviewPoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </DetailSection>

      <DetailSection label="사용한 기술과 이유">
        <p className="whitespace-pre-wrap">{project.techContext}</p>
      </DetailSection>

      {/* Links */}
      {(project.githubUrl || project.privateCode || project.demoUrl) && (
        <DetailSection label="링크 및 저장소">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {project.privateCode && (
              <p className="text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded border border-gray-200">
                <span className="font-semibold text-gray-800 mr-2">🔒 비공개 코드</span> 
                <span>(기업 실무 보안 및 NDA 규정으로 인해 소스 코드를 공개할 수 없습니다.)</span>
              </p>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                GitHub 저장소
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                데모 사이트
              </a>
            )}
          </div>
        </DetailSection>
      )}
    </div>
  );
}
