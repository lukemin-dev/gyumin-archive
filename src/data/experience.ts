import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    title: "현장실습 인턴 — AI 비전·PLC 자동 선별 시스템",
    company: "한국생산기술연구원 모빌리티 핵심부품소재센터",
    period: "2026.07 - 2026.12 / 진행 중",
    context:
      "AI 비전과 PLC가 연동되는 농산물 자동 선별 시스템의 성능 개선 프로젝트에 참여하고 있습니다. 모델 성능뿐 아니라 센서, PLC, 카메라, 컨베이어가 연결되는 전체 흐름을 함께 확인하고 있습니다.",
    responsibility:
      "YOLO 객체 검출 모델과 ConvNeXt 등급 분류 모델을 학습·튜닝하고 실제 컨베이어 환경에서 성능을 검증하고 있습니다. 양파와 단호박 촬영 데이터를 등급 기준에 맞춰 라벨링하고 학습 데이터의 품질도 검수하고 있습니다.",
    problemEncountered:
      "초기에는 컨베이어를 통과한 농산물이 일부 촬영되지 않았지만, 모델 문제인지 카메라 문제인지 설비 신호 문제인지 한 번에 판단하기 어려웠습니다.",
    actionTaken:
      "촬영 흐름을 센서 입력, PLC 출력, 카메라 트리거, AI 추론 단계로 나누어 확인했습니다. KEYENCE LR-Z 센서와 PLC 신호 흐름을 점검하고 각 단계의 입력과 출력이 정상적으로 이어지는지 로그와 현장 동작을 함께 비교했습니다.",
    result:
      "촬영 누락 문제를 설비와 AI가 연결되는 단계별 흐름으로 분석하는 기준을 정리했습니다. 정량 성과는 현장 검증이 완료된 뒤 추가할 예정입니다.",
    whatILearned:
      "현장 AI 시스템에서는 모델 정확도만큼 센서 신호, 카메라 트리거, 데이터 품질이 중요하다는 점을 배웠습니다. 문제를 모델과 설비로 나누지 않고 전체 데이터 흐름으로 확인하는 관점을 익히고 있습니다.",
    techStack: ["Python", "YOLO", "ConvNeXt", "PLC", "KEYENCE LR-Z", "Computer Vision"],
  },
  {
    title: "Crosslink 인턴십 — SEO 자동화팀",
    company: "Crosslink (일본, 요코하마)",
    period: "2026.01 - 2026.02",
    context:
      "요코하마 소재 IT 기업의 SEO 자동화팀에서 인턴으로 근무하며 AI 기반 SEO 분석 파이프라인 개발을 담당했습니다.",
    responsibility:
      "Python으로 Google Search Console API, Google Sheets API, Gemini API를 연결해 데이터 수집, 정제, 우선순위 산정, 개선 초안 생성, Markdown 보고서 출력까지 자동화했습니다.",
    problemEncountered:
      "기존에는 SEO 데이터를 수동으로 수집·분석·보고하는 데 약 3일이 걸렸고, Gemini API 사용 중 할당량 초과와 응답 지연도 반복적으로 발생했습니다.",
    actionTaken:
      "입력값 검증, 예외 처리, 재시도, 체크포인트 저장을 추가했습니다. API 할당량과 응답 지연 문제에는 Flash 모델 전환과 사용 가능한 모델을 자동으로 감지하는 로직을 적용했습니다.",
    result:
      "수작업으로 2~3일 걸리던 SEO 분석·보고 업무를 약 10초로 단축했습니다. 동일한 입력을 같은 기준으로 처리할 수 있는 재현 가능한 파이프라인으로 정리했습니다.",
    whatILearned:
      "외부 API를 사용하는 자동화 시스템에서는 기능 구현뿐 아니라 입력 검증, 재시도, 중단 지점 복구, 모델 변경 대응까지 함께 설계해야 한다는 점을 배웠습니다.",
    techStack: ["Python", "GSC API", "Google Sheets API", "Gemini API"],
    featured: true,
  },
  {
    title: "학부연구생 — 소프트컴퓨팅·인공지능",
    company: "전남대학교 컴퓨터공학과 연구실",
    period: "2025.09 - 2026.07",
    context:
      "소프트컴퓨팅과 인공지능 관련 연구 주제를 학습하고 연구실 세미나와 프로젝트에 참여했습니다.",
    responsibility:
      "관련 논문과 기술 자료를 검토하고, 실험 입력 조건과 비교 기준, 관찰 결과를 문서화했습니다. AI 모델과 데이터 분석 흐름을 설명 가능한 형태로 정리하는 데 집중했습니다.",
    problemEncountered:
      "연구 과제는 요구사항과 정답이 미리 정해져 있지 않아 무엇을 비교하고 어떤 조건을 기록해야 하는지부터 정리해야 했습니다.",
    actionTaken:
      "연구 자료를 읽으며 용어와 배경 개념을 정리하고, 실험을 진행할 때는 입력 조건, 실행 환경, 비교 기준, 결과를 같은 형식으로 기록했습니다.",
    result:
      "결과만 제시하는 것이 아니라 어떤 조건에서 어떤 결과가 나왔는지 설명하는 연구 기록 방식을 익혔습니다.",
    whatILearned:
      "AI 실험에서는 모델 실행 자체보다 비교 기준과 실험 조건을 일관되게 관리하는 과정이 중요하다는 점을 배웠습니다.",
    techStack: ["Artificial Intelligence", "Data Analysis", "Paper Review", "Experiment Documentation"],
  },
];
