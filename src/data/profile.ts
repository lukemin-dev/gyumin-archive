import type { Profile } from "@/types";

export const profile: Profile = {
  name: "이규민",
  nameEn: "Gyumin Lee",
  title: "Backend · Cloud · Automation Engineer",
  tagline:
    "복잡한 문제를 입력부터 결과까지 따라가며 원인을 찾고, 다시 같은 문제가 생겨도 대응할 수 있는 구조로 정리합니다.",
  bio: "코드만 들여다보기보다 데이터가 어디에서 들어와 어떻게 흘러가는지 먼저 확인하는 개발자입니다. 일본 IT 기업 인턴십에서는 수작업으로 2~3일 걸리던 SEO 분석·보고 과정을 자동화했고, 지금은 한국생산기술연구원에서 센서와 PLC, 카메라, AI 모델이 함께 움직이는 농산물 선별 시스템을 다루고 있습니다. 잘된 결과만 남기기보다 막혔던 이유와 확인한 순서까지 기록하려고 합니다.",
  email: "lgmlgm227@naver.com",
  github: "https://github.com/lukemin-dev",
  portfolioRepo: "https://github.com/lukemin-dev/gyumin-archive",
  image: "/images/images.jpg",
  education: [
    {
      school: "전남대학교",
      major: "컴퓨터공학과",
      period: "2023.03 - 2027.02 졸업예정",
      gpa: "4.23/4.5",
    },
  ],
  awards: [
    {
      title: "수석 경험",
      organization: "전남대학교 컴퓨터공학과",
      date: "재학 중",
      description: "학과 내 최상위 성적 기록",
    },
    {
      title: "성적우수장학금",
      organization: "전남대학교",
      date: "2023.08.31 - 2026.02.28",
      description:
        "6회 선정 · 2023-1학기(2023.08.31), 2023-2학기(2024.02.28), 2024-1학기(2024.08.31), 2024-2학기(2025.02.28), 2025-1학기(2025.08.31), 2025-2학기(2026.02.28)",
    },
    {
      title: "수원시장학재단 우수 장학생",
      organization: "수원시장학재단",
      date: "2025",
      description: "학업 성취를 바탕으로 우수 장학생 선발",
    },
  ],
  skills: [
    {
      category: "Backend",
      items: ["Java", "Spring Boot", "Python", "Flask", "REST API", "SQL", "SQLite"],
    },
    {
      category: "Cloud & Infra",
      items: ["AWS EC2", "Linux", "systemd", "Git", "GitHub Actions"],
    },
    {
      category: "AI & Automation",
      items: ["YOLO", "ConvNeXt", "scikit-learn", "GSC API", "Google Sheets API", "Gemini API", "PLC"],
    },
    {
      category: "Engineering Practice",
      items: ["Input Validation", "Retry", "Checkpointing", "Logging", "Testing"],
    },
    {
      category: "Computer Science",
      items: ["Data Structures", "Algorithms", "Operating Systems", "Database", "Network"],
    },
  ],
  interests: ["백엔드 시스템", "클라우드 인프라", "업무 자동화", "AI 비전"],
  languages: [
    {
      name: "영어",
      capability: "기술 문서 이해 및 업무·프로젝트 소통",
      evidence: "영문 API 문서 활용과 국제 교류 활동 지원 경험",
    },
    {
      name: "일본어",
      capability: "일상 및 협업 상황 소통",
      evidence: "일본 기업 인턴십과 오사카대학교 J-SHIP 교류 경험",
    },
  ],
};
