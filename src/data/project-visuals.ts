export interface ProjectVisual {
  src: string;
  alt: string;
  caption: string;
}

const warehouseVisualRoot =
  "https://raw.githubusercontent.com/lukemin-dev/warehouse-fire-anomaly-monitor/main/assets/screenshots";

export const projectVisuals: Record<string, ProjectVisual[]> = {
  "warehouse-fire-anomaly-monitor": [
    {
      src: `${warehouseVisualRoot}/mobile-dashboard.jpg`,
      alt: "창고 화재 이상 징후 감지 시스템 모바일 대시보드",
      caption: "센서 상태와 AI 판정 결과를 확인하는 모바일 대시보드",
    },
    {
      src: `${warehouseVisualRoot}/mobile-graph.jpg`,
      alt: "창고 화재 이상 징후 감지 시스템 실시간 센서 그래프",
      caption: "MQ-2와 불꽃 센서의 변화를 확인하는 실시간 그래프",
    },
    {
      src: `${warehouseVisualRoot}/mobile-alerts.jpg`,
      alt: "창고 화재 이상 징후 감지 시스템 경고 이력 화면",
      caption: "규칙 기반 경고와 AI 이상 판정이 저장된 경고 이력",
    },
  ],
};

export function getProjectVisuals(slug: string): ProjectVisual[] {
  return projectVisuals[slug] ?? [];
}
