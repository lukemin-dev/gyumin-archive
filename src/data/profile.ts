import type { Profile } from "@/types";

export const profile: Profile = {
  name: "이규민",
  nameEn: "Gyumin Lee",
  title: "Cloud Infrastructure & Backend Engineer",
  tagline:
    "반복 작업을 자동화하고, 시스템을 모니터링하며, 장애 없이 재현 가능한 인프라를 구축하는 데 집중합니다.",
  bio: "처음부터 거창한 시스템을 만들려고 했다기보다, 프로젝트를 하면서 같은 문제가 반복되는 상황을 자주 봤습니다. 그래서 코드를 바로 고치기보다 입력 기준을 맞추고, 로그를 남기고, 실패했을 때 다시 이어서 실행할 수 있는 구조를 고민하게 됐습니다. 일본 요코하마 IT 기업 인턴십에서 자동화 파이프라인을 구축해 3일 걸리던 작업을 10초로 단축했고, IoT 시스템을 구축하면서 Edge-to-Cloud 구조를 경험했습니다. 전공 학습에서도 꾸준함을 유지해 GPA 4.26/4.5와 학과 수석을 기록했습니다.",
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
      category: "Cloud/Infra",
      items: ["AWS", "Docker", "Linux", "Terraform"],
    },
    {
      category: "Backend",
      items: ["Java", "Spring", "Python", "Node.js"],
    },
    {
      category: "Monitoring",
      items: ["Grafana", "Prometheus", "ELK Stack"],
    },
    {
      category: "Automation",
      items: ["Selenium", "Shell Script", "CI/CD"],
    },
    {
      category: "Database",
      items: ["MySQL", "PostgreSQL", "Redis"],
    },
  ],
  interests: ["클라우드 인프라", "백엔드 시스템", "자동화", "모니터링"],
};
