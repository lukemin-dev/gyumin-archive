import type { Profile } from "@/types";

export const profile: Profile = {
  "name": "이규민",
  "nameEn": "Gyumin Lee",
  "title": "Backend · Cloud · Automation Engineer",
  "tagline": "현장의 신호와 데이터를 연결하고, 끝까지 확인합니다.",
  "bio": "Python과 Java로 시스템 연동과 업무 자동화를 구현합니다. 센서·PLC·카메라 사이의 촬영 누락을 추적하고, 인사 DB·그룹웨어·PLM을 연결해 퇴직자 계정 회수 흐름을 구현했습니다. 기능 변경 후에는 입력이 최종 결과로 이어지는지 확인합니다.",
  "email": "lgmlgm227@naver.com",
  "github": "https://github.com/lukemin-dev",
  "portfolioRepo": "https://github.com/lukemin-dev/gyumin-archive",
  "image": "/images/images.jpg",
  "education": [
    {
      "school": "전남대학교",
      "major": "컴퓨터공학과",
      "period": "2023.03 - 2027.02 졸업예정",
      "gpa": "4.23/4.5"
    }
  ],
  "awards": [
    {
      "title": "성적우수상 7학기 연속",
      "organization": "전남대학교",
      "date": "2023-1학기 - 2026-1학기",
      "description": "2023년 1학기부터 2026년 1학기까지 7학기 연속 성적우수상"
    },
    {
      "title": "수원시장학재단 제20기 장학생",
      "organization": "수원시장학재단",
      "date": "2025.06.16",
      "description": "2025년 제20기 장학생 선발"
    }
  ],
  "skills": [
    {
      "category": "Backend",
      "items": [
        "Java",
        "Spring Boot",
        "Python",
        "Flask",
        "REST API",
        "SQL",
        "SQLite"
      ]
    },
    {
      "category": "Cloud & Infra",
      "items": [
        "AWS EC2",
        "Linux",
        "systemd",
        "Git",
        "GitHub Actions"
      ]
    },
    {
      "category": "AI & Automation",
      "items": [
        "scikit-learn",
        "GSC API",
        "Google Sheets API",
        "Gemini API",
        "ROS2",
        "FAST-LIO"
      ]
    },
    {
      "category": "Engineering Practice",
      "items": [
        "Input Validation",
        "Retry",
        "Checkpointing",
        "Logging",
        "Testing"
      ]
    },
    {
      "category": "Computer Science",
      "items": [
        "Data Structures",
        "Algorithms",
        "Operating Systems",
        "Database",
        "Network"
      ]
    }
  ],
  "interests": [
    "백엔드 시스템",
    "클라우드 인프라",
    "업무 자동화",
    "AI 비전"
  ],
  "languages": [
    {
      "name": "영어",
      "capability": "영문 기술 문서·API 문서 독해",
      "evidence": "영문 문서를 참고한 프로젝트 개발 · OPIc IM1"
    },
    {
      "name": "일본어",
      "capability": "일상 및 협업 상황 소통",
      "evidence": "일본 기업 인턴십과 오사카대학교 J-SHIP 교류 경험"
    }
  ]
};
