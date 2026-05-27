import type { Profile } from "@/types";

export const profile: Profile = {
  name: "이규민",
  nameEn: "Gyumin Lee",
  title: "Cloud Infrastructure & Backend Engineer",
  tagline:
    "반복 작업을 자동화하고, 시스템을 모니터링하며, 장애 없이 재현 가능한 인프라를 구축하는 데 집중합니다.",
  bio: "• 문제 해결 철학: 코드를 바로 고치기보다 입력 기준을 맞추고, 로그를 남기며, 실패 시 재개 가능한 견고한 구조를 설계합니다.\n• 인턴십 자동화 성과: 일본 요코하마 IT 기업에서 수동 데이터 추출 및 엑셀 취합에 3일 소요되던 작업을 10초로 단축하는 파이프라인을 구축했습니다.\n• 성실함과 꾸준함: 전공 학습에서 꾸준함을 유지해 GPA 4.26/4.5와 수석 경험을 기록했습니다.",
  email: "lgmlgm227@naver.com",
  github: "https://github.com/lukemin-dev",
  portfolioRepo: "https://github.com/lukemin-dev/gyumin-archive",
  image: "/images/images.jpg",
  education: [
    {
      school: "전남대학교",
      major: "컴퓨터공학과",
      period: "2023.03 - 2027.02 졸업예정",
      gpa: "4.26/4.5",
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
      title: "수원시장학재단 장학금",
      organization: "수원시장학재단",
      date: "2025",
      description: "수원시장학재단 장학생 선발",
    },
  ],
  skills: [
    {
      category: "Backend",
      items: ["Java", "Spring Boot", "Python", "REST API", "Swagger/OpenAPI", "SQL"],
    },
    {
      category: "Cloud/Infra",
      items: ["AWS EC2", "Linux", "Git/GitHub"],
    },
    {
      category: "Automation & API",
      items: ["GSC API", "Google Sheets API", "Gemini API"],
    },
    {
      category: "Engineering Focus",
      items: ["Input Validation", "Retry Logic", "Checkpointing"],
    },
    {
      category: "Fundamentals",
      items: ["OS / Database / Network"],
    },
  ],
  interests: ["클라우드 인프라", "백엔드 시스템", "자동화", "모니터링"],
};
