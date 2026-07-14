import type { Profile } from "@/types";

export const profile: Profile = {
  name: "이규민",
  nameEn: "Gyumin Lee",
  title: "Backend · Cloud · Automation Engineer",
  tagline:
    "Python·Java로 API와 자동화 파이프라인을 구현하고, 입력 검증·로그·재시도·체크포인트를 통해 실패 이후에도 복구 가능한 시스템을 만듭니다.",
  bio: "반복되는 업무와 불안정한 데이터 흐름을 구조적으로 정리하는 개발자입니다. 일본 IT 기업 인턴십에서 수작업으로 2~3일 걸리던 SEO 분석·보고 업무를 약 10초로 단축했고, 현재 한국생산기술연구원에서 AI 비전·PLC 기반 자동 선별 시스템의 센서 입력부터 AI 추론까지 전체 흐름을 분석하고 있습니다. 결과만 나열하기보다 문제, 판단 기준, 실행 과정과 근거를 다시 설명할 수 있는 형태로 기록합니다.",
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
      date: "6회 수상",
      description: "재학 기간 중 학업 성적 기반 장학금 6회 선정",
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
};
