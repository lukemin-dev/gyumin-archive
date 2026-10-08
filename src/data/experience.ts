import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    "title": "생산·연구IT 인턴 — 시스템 연동·업무 자동화",
    "company": "금호타이어",
    "period": "2026.09 - 현재",
    "context": "PLM 계정 회수 자동화와 KCEM DB 전환 업무를 수행하고, 담당자와 MES·POP 현장에 동행해 생산정보 흐름을 확인했습니다.",
    "responsibility": "인사 DB·그룹웨어·PLM 사용자 대조, License·Role 회수, 계정 비활성화와 결과 이메일 통보를 구현했습니다. KCEM은 담당 범위의 SQL 전환과 조회·화면 연계 항목을 점검했습니다.",
    "problemEncountered": "퇴직자 정보와 계정 정보가 여러 시스템에 나뉘어 있어 동일 사용자 식별과 처리 결과 확인이 필요했습니다.",
    "actionTaken": "사번으로 그룹웨어 ID·이메일을 확인하고 PLM 사용자를 대조한 뒤 권한 회수와 비활성화, 결과 통보를 연결했습니다.",
    "result": "퇴직자 조회부터 권한 회수·계정 비활성화·결과 이메일까지 이어지는 흐름을 구현했습니다.",
    "whatILearned": "자동화에서는 대상 식별과 결과 확인이 중요했습니다. MES·POP은 현장 동행·데이터 흐름 분석이며 전체 시스템 개발 실적과 구분합니다. 처리 건수·시간 절감률은 측정 근거가 없어 제시하지 않습니다.",
    "techStack": [
      "Python",
      "SQL",
      "Java",
      "Spring MVC",
      "MyBatis",
      "PostgreSQL",
      "PLM"
    ]
  },
  {
    "title": "현장실습 인턴 — AI 비전·PLC 연동 검증",
    "company": "한국생산기술연구원 모빌리티 핵심부품소재센터",
    "period": "2026.07 - 2026.08",
    "context": "농산물 자동선별 시스템의 영상 데이터 검수와 센서·PLC·카메라 연동 점검에 참여했습니다.",
    "responsibility": "촬영 누락 대상의 센서 입력, PLC 출력, 카메라 트리거를 확인하고 설정 변경 후 실제 컨베이어에서 결과를 검증했습니다.",
    "problemEncountered": "촬영 이미지가 누락됐지만 센서·PLC·카메라·AI 처리가 연결돼 있어 결과만으로 원인을 단정하기 어려웠습니다.",
    "actionTaken": "100개로 시험을 시작하고 약 1,500개로 범위를 넓혔습니다. LR-Z 센서 응답시간을 50ms에서 10ms로 조정하고 PLC 출력 조건을 수정했습니다.",
    "result": "변경 후 양파 8,092개 전량의 플래시 작동과 데이터 기록을 확인했습니다. AI 분류 정확도가 아닌 촬영 관련 동작·기록 확인 수량입니다.",
    "whatILearned": "설정 변경 후 최종 기록까지 확인하는 과정이 중요했습니다. ROS2·공개 LiDAR 데이터 처리는 별도의 학습·재현 경험이며 알고리즘 자체 개발과 구분합니다.",
    "techStack": [
      "PLC",
      "LR-Z",
      "AI Vision",
      "ROS2"
    ],
    "featured": true
  },
  {
    "title": "소프트웨어 자동화 인턴 — SEO 데이터·리포트",
    "company": "Crosslink (일본)",
    "period": "2026.01.09 - 2026.02.06",
    "context": "요코하마 소재 IT 기업의 SEO 자동화팀에서 인턴으로 근무하며 AI 기반 SEO 분석 파이프라인 개발을 담당했습니다.",
    "responsibility": "Python으로 Google Search Console API, Google Sheets API, Gemini API를 연결해 데이터 수집, 정제, 우선순위 산정, 개선 초안 생성, Markdown 보고서 출력까지 자동화했습니다.",
    "problemEncountered": "기존에는 SEO 데이터를 수동으로 수집·분석·보고하는 데 약 3일이 걸렸고, Gemini API 사용 중 할당량 초과와 응답 지연도 반복적으로 발생했습니다.",
    "actionTaken": "입력값 검증, 예외 처리, 재시도, 체크포인트 저장을 추가했습니다. API 할당량과 응답 지연 문제에는 Flash 모델 전환과 사용 가능한 모델을 자동으로 감지하는 로직을 적용했습니다.",
    "result": "수작업으로 2~3일 걸리던 분석·보고 흐름을 자동화했습니다. 기록된 자동 실행은 보고서 생성까지 약 10초이며 사람의 검토·수정 시간은 제외합니다. 입력 규모·API 응답에 따라 실행시간은 달라집니다.",
    "whatILearned": "API를 연결하는 것보다 멈췄을 때 어디서 다시 시작할지 정하는 일이 더 까다로웠습니다. 그 뒤로는 재시도와 중간 결과 저장을 처음부터 함께 설계합니다.",
    "techStack": [
      "Python",
      "GSC API",
      "Google Sheets API",
      "Gemini API"
    ],
    "featured": false
  },
  {
    "title": "학부연구생 — 소프트컴퓨팅·인공지능",
    "company": "전남대학교 컴퓨터공학과 연구실",
    "period": "2025.09 - 2026.07",
    "context": "소프트컴퓨팅과 인공지능 관련 연구 주제를 학습하고 연구실 세미나와 프로젝트에 참여했습니다.",
    "responsibility": "관련 논문과 기술 자료를 검토하고, 실험 입력 조건과 비교 기준, 관찰 결과를 문서화했습니다. AI 모델과 데이터 분석 흐름을 설명 가능한 형태로 정리하는 데 집중했습니다.",
    "problemEncountered": "연구 과제는 요구사항과 정답이 미리 정해져 있지 않아 무엇을 비교하고 어떤 조건을 기록해야 하는지부터 정리해야 했습니다.",
    "actionTaken": "연구 자료를 읽으며 용어와 배경 개념을 정리하고, 실험을 진행할 때는 입력 조건, 실행 환경, 비교 기준, 결과를 같은 형식으로 기록했습니다.",
    "result": "결과만 제시하는 것이 아니라 어떤 조건에서 어떤 결과가 나왔는지 설명하는 연구 기록 방식을 익혔습니다.",
    "whatILearned": "AI 실험에서는 모델 실행 자체보다 비교 기준과 실험 조건을 일관되게 관리하는 과정이 중요하다는 점을 배웠습니다.",
    "techStack": [
      "Artificial Intelligence",
      "Data Analysis",
      "Paper Review",
      "Experiment Documentation"
    ]
  }
];
