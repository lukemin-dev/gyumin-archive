export interface ProjectVisual {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  kind: "diagram" | "screen";
}

const warehouseVisualRoot =
  "https://raw.githubusercontent.com/lukemin-dev/warehouse-fire-anomaly-monitor/main/assets/screenshots";

export const projectVisuals: Record<string, ProjectVisual[]> = {
  "seo-automation": [
    {
      src: "/projects/seo-automation-pipeline.svg",
      alt: "AI 기반 SEO 자동화 파이프라인 구조도",
      caption: "수집·검증·우선순위 계산·AI 초안·보고서 생성과 장애 대응 흐름",
      width: 1600,
      height: 900,
      kind: "diagram",
    },
  ],
  "warehouse-fire-anomaly-monitor": [
    {
      src: "/projects/warehouse-monitor-architecture.svg",
      alt: "창고 화재 이상 징후 감지 시스템 전체 구조도",
      caption: "센서와 Raspberry Pi부터 AWS EC2, AI 판정, 모바일 앱까지 이어지는 데이터 흐름",
      width: 1600,
      height: 900,
      kind: "diagram",
    },
    {
      src: `${warehouseVisualRoot}/mobile-dashboard.jpg`,
      alt: "창고 화재 이상 징후 감지 시스템 모바일 대시보드",
      caption: "센서 상태와 AI 판정 결과를 확인하는 모바일 대시보드",
      width: 1080,
      height: 2340,
      kind: "screen",
    },
    {
      src: `${warehouseVisualRoot}/mobile-graph.jpg`,
      alt: "창고 화재 이상 징후 감지 시스템 실시간 센서 그래프",
      caption: "MQ-2와 불꽃 센서의 변화를 확인하는 실시간 그래프",
      width: 1080,
      height: 2340,
      kind: "screen",
    },
    {
      src: `${warehouseVisualRoot}/mobile-alerts.jpg`,
      alt: "창고 화재 이상 징후 감지 시스템 경고 이력 화면",
      caption: "규칙 기반 경고와 AI 이상 판정이 저장된 경고 이력",
      width: 1080,
      height: 2340,
      kind: "screen",
    },
  ],
  "backend-interview-tracker": [
    {
      src: "/projects/backend-tracker-architecture.svg",
      alt: "Backend Interview Tracker Spring Boot 계층 구조도",
      caption: "Controller·Service·Repository 계층과 전역 예외 처리, 테스트, CI 구조",
      width: 1600,
      height: 900,
      kind: "diagram",
    },
  ],
  "file-organizer-agent": [
    {
      src: "/projects/file-organizer-flow.svg",
      alt: "File Organizer Agent 안전한 파일 정리 실행 흐름",
      caption: "폴더 스캔부터 dry-run, 충돌 처리, 이동, 로그와 CI까지의 실행 흐름",
      width: 1600,
      height: 900,
      kind: "diagram",
    },
  ],
};

export function getProjectVisuals(slug: string): ProjectVisual[] {
  return projectVisuals[slug] ?? [];
}
