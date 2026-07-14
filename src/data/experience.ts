import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    title: "현장실습 인턴 — 자율주행 연구",
    company: "한국생산기술연구원 모빌리티 핵심부품소재센터",
    period: "2026.07 - 2026.12 / 진행 중",
    context:
      "광주 첨단 소재 연구센터에서 자율주행 연구 현장실습에 참여하고 있습니다. ROS2 운영 구조와 SLAM 관련 오픈소스를 학습하고, 실제 플랫폼 데이터의 수집·처리 흐름을 익히는 과정입니다.",
    responsibility:
      "ROS2 노드·토픽·서비스 구조를 실습하고, 오픈데이터셋과 오픈소스 알고리즘을 실행 환경에 맞춰 구현·분석하고 있습니다. 이후 실제 로봇·자동차 플랫폼 데이터 수집과 단기 연구 프로젝트로 연결할 예정입니다.",
    problemEncountered:
      "연구 환경에서는 정해진 정답을 구현하는 것보다 실행 환경, 입력 데이터, 비교 기준을 먼저 이해해야 했습니다. 익숙하지 않은 ROS2 생태계와 연구용 코드를 짧은 시간 안에 구조적으로 파악해야 했습니다.",
    actionTaken:
      "학습 내용을 노드, 통신 방식, 실행 명령, 관찰 결과로 나누어 문서화하고 있습니다. 코드를 바로 수정하기 전에 토픽 이름과 메시지 타입, 데이터 흐름을 확인하고 실행 로그를 남기는 방식으로 접근하고 있습니다.",
    result:
      "현재 ROS2 기본 통신 구조와 연구 코드 실행 흐름을 익히며, 실험 조건과 결과를 재현 가능한 형태로 기록하고 있습니다. 정량 성과는 연구 프로젝트가 진행된 뒤 추가할 예정입니다.",
    whatILearned:
      "연구용 소프트웨어에서는 기능 구현뿐 아니라 실행 환경, 데이터 조건, 실험 기록을 함께 관리해야 다른 사람이 결과를 재현할 수 있다는 점을 배우고 있습니다.",
    techStack: ["ROS2", "Python", "Linux", "SLAM", "Data Processing"],
  },
  {
    title: "Crosslink 인턴십 — SEO 자동화팀",
    company: "Crosslink (일본, 요코하마)",
    period: "2026.01 - 2026.02",
    context:
      "요코하마 소재 IT 기업의 SEO 자동화팀에서 인턴으로 근무했습니다. AI 기반 SEO 분석 파이프라인 개발을 담당했습니다.",
    responsibility:
      "Python 기반 AI SEO 자동화 파이프라인을 설계·구현했습니다. Google Search Console API와 Google Sheets API로 데이터를 수집하고, Gemini API로 SEO 개선 초안을 자동 생성하는 전체 흐름을 구축했습니다.",
    problemEncountered:
      "기존에는 SEO 데이터를 수동으로 수집·분석·보고하는 데 약 3일이 걸렸습니다. 또한 Gemini 1.5 Pro 사용 시 API 할당량 초과와 응답 지연이 반복적으로 발생했습니다.",
    actionTaken:
      "GSC API와 Sheets API로 데이터 수집을 자동화하고, 데이터 정제·우선순위 스코어링·초안 생성·Markdown 보고서 출력까지 전 과정을 파이프라인화했습니다. 입력값 검증, 예외 처리, 재시도 로직, 체크포인트 저장을 추가했고, Gemini 1.5 Pro의 할당량·지연 문제는 Gemini 1.5 Flash로 전환하고 모델 감지 로직을 구현하여 해결했습니다.",
    result:
      "3일 걸리던 수동 작업을 약 10초로 단축했습니다. 누가 실행해도 같은 기준으로 결과를 확인할 수 있는 재현 가능한 파이프라인으로 정리했습니다.",
    whatILearned:
      "실무에서 자동화를 설계할 때 일단 돌아가게 만드는 것보다 재현 가능성과 장애 대응을 먼저 고려해야 한다는 것을 배웠습니다. 외부 API 의존도가 높은 시스템에서는 할당량, 지연, 모델 변경에 대응하는 설계가 중요하다는 점을 체감했습니다.",
    techStack: ["Python", "GSC API", "Google Sheets API", "Gemini API"],
    featured: true,
  },
];
