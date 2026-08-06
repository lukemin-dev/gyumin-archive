import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    title: "현장실습 인턴 — AI 비전·PLC 자동 선별 시스템",
    company: "한국생산기술연구원 모빌리티 핵심부품소재센터",
    period: "2026.07 - 2026.08.14",
    context:
      "농산물이 컨베이어를 통과할 때 LR-Z 센서, CUBLOC PLC, 카메라, YOLO·ConvNeXt가 차례로 동작하는 자동 선별 라인을 점검했습니다.",
    responsibility:
      "YOLO 객체 검출·ConvNeXt 등급 분류 모델 학습·튜닝에 참여하고, 양파·단호박 촬영 데이터의 라벨이 등급 기준과 맞는지 확인했습니다. 촬영 누락이 나면 LR-Z 입력, PLC 출력, 카메라 트리거를 순서대로 확인했습니다.",
    problemEncountered:
      "초기 100개 검증에서 20개는 플래시 작동과 데이터 기록이 동시에 남지 않았습니다. 최종 이미지에서만 누락이 보여 센서, PLC, 카메라, 모델 중 어느 단계에서 끊겼는지 바로 알 수 없었습니다.",
    actionTaken:
      "누락된 대상의 시점을 맞춰 LR-Z 센서 입력, PLC P41~P44 출력, 카메라 트리거를 점검했습니다. LR-Z를 U.C.D. 배경 튜닝 모드로 바꾸고 응답 시간을 50ms에서 10ms로 조정했으며, P41~P44 출력 조건을 수정했습니다.",
    result:
      "초기 검증에서는 100개 중 80개만 플래시 작동과 데이터 기록이 모두 남았습니다. 설정 변경 후 실제 운영에서는 양파 8,092개(2,136.38kg) 모두에서 같은 두 기록을 확인했습니다.",
    whatILearned:
      "촬영 결과가 없다고 해서 모델부터 확인하지 않았습니다. 이후에는 센서 입력 → PLC 출력 → 카메라 트리거 순서로 마지막으로 남은 신호를 찾아 확인 범위를 좁혔습니다.",
    techStack: ["Python", "YOLO", "ConvNeXt", "PLC", "KEYENCE LR-Z", "Computer Vision"],
  },
  {
    title: "Yahoo-Crosslink 인턴십 — SEO 자동화팀",
    company: "Yahoo-Crosslink (일본, 요코하마)",
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
      "수작업으로 2~3일 걸리던 SEO 분석·보고 업무가 자동 실행으로 약 10초에 끝났습니다. 입력이 바뀌어도 수집부터 보고서 출력까지 같은 순서로 처리되게 만들었습니다.",
    whatILearned:
      "API를 연결하는 것보다 멈췄을 때 어디서 다시 시작할지 정하는 일이 더 까다로웠습니다. 그 뒤로는 재시도와 중간 결과 저장을 처음부터 함께 설계합니다.",
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
