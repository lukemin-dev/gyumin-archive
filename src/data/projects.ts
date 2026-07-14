import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "seo-automation",
    title: "AI 기반 SEO 자동화 파이프라인",
    type: "Internship Project",
    period: "2026.01-2026.02",
    theme: "AI 기반 SEO 자동화 파이프라인 구축",
    details: [
      "GSC API, Google Sheets API, Gemini API를 연동해 데이터 수집부터 리포트 생성까지 자동화",
      "입력 스키마 검증, 예외 데이터 분리, 재시도 규칙, 체크포인트를 적용",
      "수작업으로 2~3일 걸리던 SEO 분석 과정을 약 10초 내외로 단축",
    ],
    problem:
      "클라이언트 웹사이트의 SEO 데이터를 수동으로 수집·분석·보고하는 데 약 3일이 걸렸습니다. 사람이 하다 보니 누락이 생기고, 담당자에 따라 분석 기준이 달라서 일관된 결과를 얻기 어려웠습니다.",
    myContribution: [
      "GSC API와 Google Sheets API를 연동해 데이터 수집 및 입출력 자동화",
      "데이터 정제 후 우선순위 스코어링 로직 구현",
      "Gemini API 프롬프트 엔지니어링 및 초안 자동 생성 파이프라인 구축",
      "입력값 검증, 예외 처리, 재시도 로직, 체크포인트 저장 기능 추가",
    ],
    bottleneck:
      "초기에는 Gemini 1.5 Pro 모델을 사용했는데, API Quota Exceeded 에러와 응답 지연이 자주 발생했습니다. 중간에 실패하면 처음부터 다시 데이터를 수집해야 해서 오히려 수작업보다 비효율적인 상황이 생겼습니다.",
    solution:
      "비용과 속도 면에서 더 적합한 Gemini 1.5 Flash 모델로 전환하고, 할당량 초과 시 자동으로 재시도하거나 대체 모델을 감지하는 로직을 추가했습니다. 또한 실행 단계를 나누어 체크포인트를 저장하게 만들어, 실패해도 중간부터 다시 실행할 수 있는 구조를 만들었습니다.",
    result:
      "3일 걸리던 수동 작업을 10초로 단축했습니다. 담당자가 같은 기준으로 결과를 확인할 수 있는 형태로 정리하여, 반복 업무에 대한 스트레스를 줄였습니다.",
    retrospective:
      "당시에는 급하게 기능 구현에 집중하다 보니 API 호출 로직이 여러 모듈에 흩어졌습니다. 다시 설계한다면 외부 API 의존성을 캡슐화하는 계층을 분리해 테스트와 에러 처리를 더 일관성 있게 관리하고 싶습니다.",
    interviewPoints: [
      "Gemini API 호출 제한(429 Error)이 발생했을 때 처리 방식을 조정한 과정",
      "작업 소요 시간을 3일에서 10초로 단축한 구체적인 측정 기준",
      "동일한 입력에서 일관된 결과를 얻기 위해 도입한 데이터 검증 방식",
    ],
    techContext:
      "Python으로 GSC API와 Google Sheets API를 연결했고, 데이터 형식이 흔들리는 문제를 입력 스키마 검증과 예외 데이터 분리로 줄였습니다.",
    shortProblem:
      "SEO 분석 기준이 흔들리고 수동 데이터 추출 및 엑셀 취합에 3일이 소요되었습니다.",
    shortAction:
      "GSC API, Google Sheets API, Gemini API를 연결하고 입력 스키마 검증, 예외 데이터 분리, 재시도 규칙을 넣었습니다.",
    shortResult: "분석과 리포트 생성 시간을 약 10초 내외로 줄였습니다.",
    shortQuestion: "Gemini API 호출 제한이 발생했을 때 처리 방식을 조정한 과정",
    privateCode: true,
    evidence: [
      {
        label: "정량 결과",
        description:
          "수작업으로 2~3일 걸리던 SEO 분석과 리포트 생성 과정을 약 10초 내외로 단축했습니다.",
      },
      {
        label: "공개 제한",
        description:
          "기업 실무 프로젝트라 소스 코드는 공개하지 않고, 포트폴리오에는 문제, 역할, 해결 과정, 결과 중심으로 정리했습니다.",
      },
      {
        label: "면접 설명 포인트",
        description:
          "Gemini API quota, 재시도, 체크포인트, 입력 스키마 검증처럼 실제 자동화 운영에서 부딪힌 문제를 설명할 수 있습니다.",
      },
    ],
    featured: true,
  },
  {
    slug: "warehouse-fire-anomaly-monitor",
    title: "창고 화재·이상 징후 감지 시스템",
    type: "Capstone Project",
    period: "2026.03-2026.07",
    theme: "라즈베리파이 센서 데이터와 IsolationForest를 활용한 이상 징후 감지",
    details: [
      "MQ-2 가스·연기 센서와 불꽃 센서의 디지털·아날로그 데이터를 수집",
      "Flask API와 SQLite로 센서 및 경고 이력을 저장하고 AWS EC2에 배포",
      "IsolationForest 기반 이상 탐지와 React Native 모바일 대시보드를 구현",
    ],
    problem:
      "센서의 디지털 출력만 사용하면 값이 0과 1로만 표현되어 단순 임계값 판정과 차이가 거의 없었습니다. 화재가 발생하기 전의 미세한 변화나 평소 패턴에서 벗어나는 전조를 확인하기 어려웠습니다.",
    myContribution: [
      "MCP3008 ADC를 연결해 MQ-2와 불꽃 센서의 아날로그 값을 0~1023 범위로 수집",
      "라즈베리파이에서 2초 주기로 Flask 서버에 센서 데이터를 전송하는 파이프라인 구현",
      "SQLite 기반 센서·경고 이력 저장과 IsolationForest 이상 탐지 로직 구현",
      "AWS EC2 배포와 Expo·React Native 기반 모바일 모니터링 화면 구성",
    ],
    bottleneck:
      "센서의 디지털 출력만으로는 정상과 위험 사이의 연속적인 변화를 표현할 수 없었습니다. 또한 실제 화재 데이터를 충분히 수집하기 어려워 지도학습용 정상·이상 라벨을 확보하기 힘들었습니다.",
    solution:
      "MCP3008 ADC를 추가해 센서의 아날로그 값을 수집하고, 정상 구간 데이터를 기준으로 IsolationForest를 학습했습니다. 서버가 각 이벤트를 저장한 뒤 규칙 기반 경고와 AI 이상 점수를 함께 반환하도록 구성해 단순 임계값과 패턴 이탈을 동시에 확인했습니다.",
    result:
      "센서 수집, Flask API, SQLite, AI 추론, 모바일 대시보드가 연결된 Edge-to-Cloud 파이프라인을 완성했습니다. AWS EC2와 systemd를 활용해 서버를 배포하고 실제 센서 변화가 앱의 그래프와 경고 이력에 반영되는 흐름을 검증했습니다.",
    retrospective:
      "실제 화재 데이터가 부족해 정상 데이터 기반 이상 탐지에 의존했습니다. 운영 환경으로 확장한다면 관리자 API 인증, 푸시 알림, 장기 시계열 저장소, 센서 보정과 회로 보호를 추가하겠습니다.",
    interviewPoints: [
      "디지털 출력만 사용했을 때의 한계와 ADC를 추가한 이유",
      "실제 이상 데이터가 부족한 상황에서 IsolationForest를 선택한 근거",
      "라즈베리파이부터 EC2와 모바일 앱까지 데이터가 흐르는 구조",
    ],
    techContext:
      "Python, Flask, SQLite, scikit-learn, Raspberry Pi, React Native, AWS EC2를 사용했습니다. 센서의 연속값을 확보하고 정상 패턴에서 벗어난 정도를 판단하기 위해 IsolationForest를 적용했습니다.",
    shortProblem:
      "센서의 0/1 디지털 출력만으로는 화재 전조와 정상 패턴의 미세한 변화를 구분하기 어려웠습니다.",
    shortAction:
      "ADC로 아날로그 값을 수집하고 Flask·SQLite·IsolationForest·모바일 앱을 하나의 파이프라인으로 연결했습니다.",
    shortResult:
      "실제 센서 변화가 EC2 서버의 AI 판정과 모바일 대시보드에 반영되는 흐름을 검증했습니다.",
    shortQuestion: "실제 이상 데이터가 부족한 상황에서 이상 탐지 모델을 설계한 방법",
    githubUrl: "https://github.com/lukemin-dev/warehouse-fire-anomaly-monitor",
    evidence: [
      {
        label: "GitHub 저장소",
        description:
          "센서 수집 코드, Flask 서버, 모바일 앱, 배포 스크립트와 문서를 확인할 수 있습니다.",
        href: "https://github.com/lukemin-dev/warehouse-fire-anomaly-monitor",
      },
      {
        label: "시스템 구성도",
        description:
          "센서부터 라즈베리파이, Flask API, SQLite, AI 모델, 앱까지의 데이터 흐름을 정리했습니다.",
        href: "https://github.com/lukemin-dev/warehouse-fire-anomaly-monitor/blob/main/docs/architecture.md",
      },
      {
        label: "API 명세",
        description: "센서 이벤트, 상태 조회, 경고 이력과 AI 관리 API를 문서화했습니다.",
        href: "https://github.com/lukemin-dev/warehouse-fire-anomaly-monitor/blob/main/docs/api.md",
      },
      {
        label: "면접 대비 Q&A",
        description:
          "기술 선택, 트러블슈팅, 한계와 개선 방향을 면접 답변 기준으로 정리했습니다.",
        href: "https://github.com/lukemin-dev/warehouse-fire-anomaly-monitor/blob/main/docs/interview-prep.md",
      },
    ],
    featured: true,
  },
  {
    slug: "backend-interview-tracker",
    title: "Backend Interview Tracker",
    type: "Personal Project",
    period: "2024.03-2024.04",
    theme: "Spring Boot 기반 면접 질문 관리 API",
    details: [
      "Spring Boot 기반 REST API를 구현",
      "DTO, Controller, Service 구조를 분리하고 예외 처리, 페이지네이션, Swagger 문서화를 적용",
      "단순 CRUD를 넘어 API 구조, 예외 처리, 테스트, 문서화 흐름을 정리",
    ],
    problem:
      "면접 준비를 하면서 여러 노트 앱과 문서에 정보가 파편화되는 문제를 느꼈습니다. 이를 해결하기 위해 데이터를 체계적으로 관리할 API가 필요했습니다.",
    myContribution: [
      "Spring Boot 기반 REST API 구현",
      "DTO, Controller, Service 구조 분리",
      "전역 예외 처리, 페이지네이션, Swagger 문서화와 테스트 적용",
    ],
    bottleneck:
      "처음에는 모든 로직을 하나의 클래스에 몰아넣어 코드가 길어지고 유지보수가 어려웠습니다.",
    solution:
      "DTO, Controller, Service 구조를 명확히 분리하고, 전역 예외 처리(Global Exception Handling)를 도입해 에러 응답 규격을 통일했습니다.",
    result:
      "면접 질문 데이터를 관리하는 API 서버를 완성하며 REST API 설계, 테스트 및 문서화 흐름을 익혔습니다.",
    retrospective:
      "다양한 에러 케이스에 대한 테스트 코드를 작성하면서 사전에 예외를 검증하는 구조의 중요성을 느꼈습니다.",
    interviewPoints: [
      "DTO, Controller, Service 구조를 분리한 이유와 장점",
      "전역 예외 처리(Global Exception Handling)를 적용한 과정",
      "Swagger 문서화를 통해 얻은 이점",
    ],
    techContext:
      "Java와 Spring Boot로 REST API를 구현하고 계층형 아키텍처를 적용했습니다.",
    shortProblem: "질문 데이터를 체계적으로 관리할 API가 필요했습니다.",
    shortAction: "Spring Boot 기반 REST API를 구현하고 계층을 분리했습니다.",
    shortResult: "API 구조, 예외 처리, 테스트와 문서화 흐름을 정리했습니다.",
    shortQuestion: "DTO, Controller, Service 구조를 분리한 이유와 장점",
    githubUrl: "https://github.com/lukemin-dev/backend-interview-tracker",
    evidence: [
      {
        label: "GitHub 저장소",
        description: "Spring Boot REST API 소스, 테스트 코드, CI 설정을 확인할 수 있습니다.",
        href: "https://github.com/lukemin-dev/backend-interview-tracker",
      },
      {
        label: "API 명세",
        description:
          "질문 등록, 조회, 검색, 수정, 삭제 API와 공통 응답 형식을 문서화했습니다.",
        href: "https://github.com/lukemin-dev/backend-interview-tracker/blob/main/docs/02-design/api-spec.md",
      },
      {
        label: "아키텍처 리뷰",
        description:
          "Controller-Service-Repository 계층 분리, DTO 분리, 전역 예외 처리, 테스트 관점을 정리했습니다.",
        href: "https://github.com/lukemin-dev/backend-interview-tracker/blob/main/docs/03-analysis/architecture-review.md",
      },
      {
        label: "면접 대비 노트",
        description:
          "프로젝트 설명 흐름, 막혔던 점, 해결 방법, 30초 답변 예시를 정리했습니다.",
        href: "https://github.com/lukemin-dev/backend-interview-tracker/blob/main/docs/interview-notes.md",
      },
    ],
    featured: true,
  },
  {
    slug: "file-organizer-agent",
    title: "File Organizer Agent",
    type: "Personal Project",
    period: "2026",
    theme: "안전한 파일 이동을 우선한 Python CLI 자동 정리 도구",
    details: [
      "파일 확장자에 따라 문서, 이미지, 코드, 압축 파일 등으로 자동 분류",
      "기본값을 dry-run으로 설정해 실제 이동 전 변경 내용을 미리 확인",
      "중복 파일명 처리, 로그 기록, pytest 테스트와 GitHub Actions CI 적용",
    ],
    problem:
      "다운로드 폴더를 자동으로 정리하고 싶었지만 파일 이동 작업은 잘못 실행하면 원본 위치를 잃거나 같은 이름의 파일을 덮어쓸 위험이 있었습니다.",
    myContribution: [
      "확장자 기반 분류 규칙과 CLI 진입점 구현",
      "기본 dry-run과 명시적 --apply 옵션으로 실행 안전장치 구성",
      "중복 파일명에 번호 접미사를 붙이는 충돌 처리와 숨김 파일 제외 로직 구현",
      "pytest 단위·통합 테스트와 GitHub Actions CI 구성",
    ],
    bottleneck:
      "자동화의 편의성보다 잘못된 파일 이동과 덮어쓰기가 더 큰 위험이었습니다. 운영체제마다 경로가 다르고, 동일한 이름의 파일이 이미 존재하는 경우도 고려해야 했습니다.",
    solution:
      "실제 이동을 기본 동작으로 두지 않고 dry-run 결과를 먼저 출력했습니다. 사용자가 --apply를 입력한 경우에만 이동하며, 이름 충돌 시 번호 접미사를 붙이고 모든 동작을 파일과 콘솔 로그에 남겼습니다.",
    result:
      "Windows, macOS, Linux에서 사용할 수 있는 Python CLI를 구현했고, 테스트와 CI로 분류·중복 처리·이동 흐름을 반복 검증할 수 있게 했습니다.",
    retrospective:
      "다음 단계에서는 실행 취소 기능, 사용자 정의 분류 설정 파일, GUI와 클라우드 저장소 지원을 추가해 실제 사용성을 높이고 싶습니다.",
    interviewPoints: [
      "파일 이동 도구의 기본값을 dry-run으로 설계한 이유",
      "중복 파일명과 운영체제별 경로를 안전하게 처리한 방법",
      "단위 테스트와 통합 테스트의 경계를 나눈 기준",
    ],
    techContext:
      "Python 표준 라이브러리를 중심으로 CLI를 구현하고 pytest와 GitHub Actions를 적용했습니다. 자동화 도구에서 기능보다 복구 가능성과 사전 확인이 중요하다고 판단해 dry-run을 기본값으로 선택했습니다.",
    shortProblem: "자동 파일 이동은 덮어쓰기와 잘못된 이동으로 원본을 잃을 위험이 있었습니다.",
    shortAction:
      "dry-run을 기본값으로 두고 중복 이름 처리, 로그, pytest와 CI를 추가했습니다.",
    shortResult: "실행 전 변경을 검토할 수 있는 안전한 크로스플랫폼 CLI를 완성했습니다.",
    shortQuestion: "자동화 도구의 안전장치와 복구 가능성을 설계한 기준",
    githubUrl: "https://github.com/lukemin-dev/file-organizer-agent",
    evidence: [
      {
        label: "GitHub 저장소",
        description: "Python CLI 소스, 테스트와 GitHub Actions 설정을 확인할 수 있습니다.",
        href: "https://github.com/lukemin-dev/file-organizer-agent",
      },
      {
        label: "면접 대비 노트",
        description: "설계 결정, 문제 해결 과정과 면접 설명 포인트를 정리했습니다.",
        href: "https://github.com/lukemin-dev/file-organizer-agent/blob/main/docs/interview-notes.md",
      },
      {
        label: "CI 실행 결과",
        description: "main 브랜치와 Pull Request에서 pytest를 실행하도록 구성했습니다.",
        href: "https://github.com/lukemin-dev/file-organizer-agent/actions/workflows/ci.yml",
      },
    ],
    featured: false,
  },
  {
    slug: "crypto-entry-guard",
    title: "Crypto Entry Guard",
    type: "Personal Project",
    period: "2026",
    theme: "여러 시장 지표와 리스크 기준을 한 화면에 모은 Chrome 확장 프로그램",
    details: [
      "Binance 선물 데이터와 Upbit·Bithumb 가격을 API로 수집",
      "EMA, RSI, MACD, 거래량, ATR, ADX를 조합해 Long·Short·Wait 신호 계산",
      "손절·익절 기준, 김치 프리미엄과 간단한 백테스트 결과를 함께 표시",
    ],
    problem:
      "암호화폐 선물 진입 전 여러 차트와 거래소를 오가며 지표를 확인해야 했고, 조건을 빠뜨리거나 애매한 자리에서 충동적으로 진입하는 문제가 있었습니다.",
    myContribution: [
      "Chrome Extension 화면과 데이터 수집 로직 구현",
      "Binance REST API·WebSocket 및 Upbit·Bithumb API 연동",
      "EMA, RSI, MACD, Volume, ATR, ADX 기반 점수와 신호 계산",
      "손절·익절, Risk/Reward, 김치 프리미엄과 백테스트 요약 표시",
    ],
    bottleneck:
      "단일 지표만 사용하면 횡보장에서 신호가 자주 바뀌었고, 여러 지표가 서로 다른 방향을 가리킬 때 무리하게 매수·매도 신호가 표시되는 문제가 있었습니다.",
    solution:
      "ADX로 횡보장을 필터링하고 Long·Short 점수 차이가 작으면 WAIT 또는 DO NOT ENTER를 반환하도록 했습니다. 방향 신호와 함께 손절 폭과 손익비를 표시해 신호 하나만으로 판단하지 않도록 구성했습니다.",
    result:
      "여러 사이트에서 반복 확인하던 추세, 변동성, 거래량, 국내외 가격 차이와 리스크 기준을 확장 프로그램 한 화면에서 점검할 수 있게 했습니다.",
    retrospective:
      "현재 백테스트는 수수료와 슬리피지, 체결 지연을 충분히 반영하지 못합니다. 다음에는 계산 모듈을 분리하고 테스트 데이터와 설정 UI를 추가하겠습니다.",
    interviewPoints: [
      "횡보장에서 발생하는 거짓 신호를 줄이기 위해 ADX와 점수 차 필터를 사용한 이유",
      "여러 외부 API의 응답 실패와 누락 데이터를 처리한 방법",
      "투자 신호가 아닌 체크리스트 도구로 범위를 제한한 설계 기준",
    ],
    techContext:
      "HTML, CSS, JavaScript와 Chrome Extension Manifest를 사용했습니다. Binance, Upbit, Bithumb API를 연동하고 여러 지표가 충돌할 때 진입을 보류하는 규칙을 적용했습니다.",
    shortProblem: "여러 지표와 거래소를 오가며 확인하다 조건을 빠뜨리는 문제가 있었습니다.",
    shortAction:
      "시장 API와 기술 지표, 김치 프리미엄, 손절·익절 기준을 Chrome 확장 프로그램에 통합했습니다.",
    shortResult: "진입 전 확인 절차를 한 화면의 체크리스트로 자동화했습니다.",
    shortQuestion: "횡보장과 지표 충돌 상황에서 신호를 보수적으로 제한한 기준",
    githubUrl: "https://github.com/lukemin-dev/crypto-entry-guard",
    evidence: [
      {
        label: "GitHub 저장소",
        description: "Chrome 확장 프로그램 소스와 설치·사용 방법을 확인할 수 있습니다.",
        href: "https://github.com/lukemin-dev/crypto-entry-guard",
      },
      {
        label: "프로젝트 README",
        description: "신호 계산 흐름, 지표, 리스크 기준과 한계를 정리했습니다.",
        href: "https://github.com/lukemin-dev/crypto-entry-guard/blob/main/README.md",
      },
    ],
    featured: false,
  },
  {
    slug: "java-socket",
    title: "Java Socket 기반 실시간 통신 시스템",
    type: "Academic Project",
    period: "2023.10-2023.12",
    theme: "로그 기준 정리와 메시지 처리 안정화",
    details: [
      "메시지가 나뉘어 수신되며 데이터가 깨지는 문제를 로그로 확인",
      "송수신 로그 기준을 맞추고 수신 버퍼에 데이터를 누적한 뒤 완전한 단위만 처리하도록 수정",
      "팀원이 같은 로그와 기준으로 문제를 확인할 수 있게 되어 원인 파악과 재작업을 줄임",
    ],
    problem:
      "수업 과제로 멀티 클라이언트 채팅 시스템을 구현했습니다. 동시에 여러 명이 접속하거나 데이터가 길어지면 메시지가 깨지는 문제가 계속 발생했습니다.",
    myContribution: [
      "클라이언트당 스레드를 할당하는 멀티스레드 서버 아키텍처 구현",
      "메시지 유형을 구분하는 커스텀 패킷 프로토콜 설계",
      "스레드 ID, 타임스탬프, 이벤트 유형을 기록하는 로깅 체계 구축",
    ],
    bottleneck:
      "여러 클라이언트가 동시에 메시지를 보낼 때 어떤 스레드에서 문제가 생겼는지 파악하기 어려웠고, 긴 메시지는 수신 버퍼 처리 문제로 잘리거나 깨졌습니다.",
    solution:
      "스레드 ID와 시간을 포함하는 로그 기준을 통일했습니다. 헤더에 페이로드 길이를 포함하는 프로토콜을 정의하고 지정된 길이만큼 데이터를 누적해 읽도록 수신 로직을 수정했습니다.",
    result:
      "멀티스레드 환경에서 메시지 경계를 안정적으로 처리했고, 팀원들이 동일한 로그 기준으로 문제를 추적할 수 있게 됐습니다.",
    retrospective:
      "직접 스레드를 생성하는 방식은 접속자가 많아지면 서버 부담이 커집니다. 다시 한다면 스레드 풀이나 Java NIO 기반 비동기 처리를 적용하겠습니다.",
    interviewPoints: [
      "TCP가 메시지 경계를 보장하지 않는 이유와 해결 과정",
      "수신 버퍼에 데이터를 누적하고 완전한 단위만 처리한 기준",
      "팀원이 동일한 기준으로 문제를 추적하도록 로그를 통일한 방법",
    ],
    techContext:
      "Java Socket API와 Multi-threading을 활용하고 자체 패킷 규격을 정의해 메시지 경계를 처리했습니다.",
    shortProblem: "메시지가 나뉘어 수신되면서 데이터가 깨졌습니다.",
    shortAction:
      "송수신 로그 기준을 맞추고 수신 버퍼에 데이터를 누적한 뒤 완전한 단위만 처리했습니다.",
    shortResult: "팀원이 같은 로그와 기준으로 문제를 확인할 수 있게 됐습니다.",
    shortQuestion: "TCP 스트림에서 메시지 경계를 처리한 기준",
    githubUrl: "https://github.com/lukemin-dev/multichat-java",
    evidence: [
      {
        label: "GitHub 저장소",
        description: "Java Socket 기반 실시간 통신 프로젝트 정리 저장소입니다.",
        href: "https://github.com/lukemin-dev/multichat-java",
      },
      {
        label: "면접 대비 노트",
        description:
          "TCP 메시지 경계, 수신 버퍼 처리, 멀티스레드 처리와 로그 기준을 정리했습니다.",
        href: "https://github.com/lukemin-dev/multichat-java/blob/main/docs/interview-notes.md",
      },
    ],
    featured: false,
  },
];