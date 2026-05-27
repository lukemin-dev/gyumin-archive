import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    title: "Crosslink 인턴십 — SEO 자동화팀",
    company: "Crosslink (일본, 요코하마)",
    period: "2026.01 - 2026.02",
    context:
      "요코하마 소재 IT 기업의 SEO 자동화팀에서 2개월간 인턴으로 근무했습니다. AI 기반 SEO 분석 파이프라인 개발을 담당했습니다.",
    responsibility:
      "Python 기반 AI SEO 자동화 파이프라인을 단독으로 설계·구현했습니다. Google Search Console API와 Google Sheets API로 데이터를 수집하고, Gemini API로 SEO 개선 초안을 자동 생성하는 전체 흐름을 구축했습니다.",
    problemEncountered:
      "기존에는 SEO 데이터를 수동으로 수집·분석·보고하는 데 약 3일이 걸렸습니다. 또한 Gemini 1.5 Pro 사용 시 API 할당량 초과와 응답 지연이 반복적으로 발생했습니다.",
    actionTaken:
      "GSC API와 Sheets API로 데이터 수집을 자동화하고, 데이터 정제·우선순위 스코어링·초안 생성·Markdown 보고서 출력까지 전 과정을 파이프라인화했습니다. 입력값 검증, 예외 처리, 재시도 로직, 체크포인트 저장을 추가했고, Gemini 1.5 Pro의 할당량·지연 문제는 Gemini 1.5 Flash로 전환하고 모델 감지 로직을 구현하여 해결했습니다.",
    result:
      "3일 걸리던 수동 작업을 약 10초로 단축했습니다. 누가 실행해도 동일한 결과가 나오는 재현 가능한 파이프라인이 되었고, 팀 전체가 이 도구를 사용하게 되었습니다.",
    whatILearned:
      "실무에서 자동화를 설계할 때 '일단 돌아가게' 만드는 것보다 재현 가능성과 장애 대응(재시도, 체크포인트)을 먼저 고려해야 한다는 것을 배웠습니다. 또한 외부 API 의존도가 높은 시스템에서는 할당량·지연·모델 변경 같은 변수에 유연하게 대응하는 설계가 중요하다는 점을 체감했습니다.",
    techStack: ["Python", "GSC API", "Google Sheets API", "Gemini API"],
    featured: true,
  },
];
