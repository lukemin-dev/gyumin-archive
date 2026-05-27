import type { Course } from "@/types";

export const courses: Course[] = [
  {
    title: "AWS Master Class",
    type: "Cloud Training",
    period: "2026.04-2026.06 / 진행 중",
    theme: "클라우드 인프라 및 운영 기초 학습",
    details: [
      "AWS 기반 서버, 네트워크, 스토리지, 모니터링 개념 학습",
      "클라우드 환경에서 서비스가 배포되고 운영되는 흐름 이해",
      "개인 프로젝트와 연계해 인프라 구성 및 운영 관점 보완"
    ],
    category: "클라우드",
  },
  {
    title: "H-Mobility Class 자율주행 인지 과정",
    type: "Online Training",
    period: "수강 중",
    theme: "자율주행 인지 기술 학습",
    details: [
      "카메라와 센서 기반 주변 환경 인식 과정 학습",
      "자율주행 기능 안정성과 데이터 검증의 연결성 이해",
      "로그와 데이터 기반 기능 개선 관점 확장"
    ],
    category: "산업 연계",
  },
  {
    title: "전국 에너지 공동학점과정",
    type: "Online Program",
    period: "2025.10-2026.01",
    theme: "전력산업 및 전력ICT 직무 교육",
    details: [
      "전력거래소, 한전KDN, 한전KPS 직무 기초교육 수강",
      "네트워크, 서버, 배전자동화, 전력ICT 실무 교육 학습",
      "산업 인프라 시스템이 운영되는 구조와 데이터 흐름 이해"
    ],
    category: "학점 교류",
  },
  {
    title: "Osaka University J-SHIP Program",
    type: "Overseas Program",
    period: "2025.01-2025.02",
    theme: "일본어 연수 및 문화교류",
    details: [
      "오사카대학교에서 일본어 연수 및 문화교류 프로그램 참여",
      "현지 대학 환경에서 수업과 교류 활동을 경험",
      "낯선 환경에서 먼저 맥락을 파악하고 소통하는 방식 학습"
    ],
    category: "해외 교류",
  },
];
