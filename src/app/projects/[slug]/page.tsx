import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import SkillTag from "@/components/SkillTag";

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
    title: `${project.title} | 김규민`,
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
        <p>{project.problem}</p>
      </DetailSection>

      <DetailSection label="내가 직접 한 일">
        <ul className="list-disc list-inside space-y-1">
          {project.myContribution.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </DetailSection>

      <DetailSection label="가장 막혔던 부분">
        <p>{project.bottleneck}</p>
      </DetailSection>

      <DetailSection label="해결 과정">
        <p>{project.solution}</p>
      </DetailSection>

      <DetailSection label="결과">
        <p>{project.result}</p>
      </DetailSection>

      <DetailSection label="증명 자료 (Evidence)">
        <div className="bg-gray-50 border border-gray-200 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center text-gray-500">
          <p className="text-sm font-medium mb-1">[증명 자료 Placeholder]</p>
          <p className="text-xs text-gray-400">여기에 스크린샷, 로그 예시, 아키텍처 다이어그램, 리포트 산출물 등을 배치할 수 있습니다.</p>
        </div>
      </DetailSection>

      <DetailSection label="지금 다시 한다면">
        <p>{project.retrospective}</p>
      </DetailSection>

      <DetailSection label="면접에서 이야기할 포인트">
        <ul className="list-disc list-inside space-y-1 text-gray-800 font-medium">
          {project.interviewPoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </DetailSection>

      <DetailSection label="사용한 기술과 이유">
        <p>{project.techContext}</p>
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

      {/* Screenshots placeholder */}
      {project.screenshots && project.screenshots.length > 0 && (
        <DetailSection label="스크린샷">
          <div className="grid gap-4 md:grid-cols-2">
            {project.screenshots.map((src, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg aspect-video flex items-center justify-center bg-gray-50 text-sm text-gray-400"
              >
                스크린샷 placeholder
              </div>
            ))}
          </div>
        </DetailSection>
      )}
    </div>
  );
}
