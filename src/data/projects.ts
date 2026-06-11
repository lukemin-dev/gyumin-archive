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
      "수작업으로 2~3일 걸리던 SEO 분석 과정을 약 10초 내외로 단축"
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
      "3일 걸리던 수동 작업을 10초로 단축했습니다. 담당자가 같은 기준으로 결과를 확인할 수 있는 형태로 정리하여, 반복 업무에 대한 스트레스가 크게 줄었습니다.",
    retrospective:
      "당시에는 급하게 기능 구현에 집중하다 보니 API 호출 로직이 여러 모듈에 흩어졌습니다. 다시 설계한다면, 외부 API 의존성을 캡슐화하는 계층을 분리해 테스트와 에러 처리를 더 일관성 있게 관리하고 싶습니다.",
    interviewPoints: [
      "Gemini API 호출 제한(429 Error)이 발생했을 때 처리 방식을 조정한 과정",
      "작업 소요 시간을 3일에서 10초로 단축한 구체적인 측정 기준",
      "동일한 입력에서 일관된 결과를 얻기 위해 도입한 데이터 검증 방식",
    ],
    techContext: "Python으로 GSC API와 Google Sheets API를 연결했고, 데이터 형식이 흔들리는 문제를 입력 스키마 검증과 예외 데이터 분리로 줄였습니다.",
    shortProblem: "SEO 분석 기준이 흔들리고 수동 데이터 추출 및 엑셀 취합에 3일이 소요되었습니다.",
    shortAction: "GSC API, Google Sheets API, Gemini API를 연결하고 입력 스키마 검증, 예외 데이터 분리, 재시도 규칙을 넣었습니다.",
    shortResult: "분석과 리포트 생성 시간을 약 10초 내외로 줄였습니다.",
    shortQuestion: "Gemini API 호출 제한이 발생했을 때 처리 방식을 조정한 과정",
    privateCode: true,
    evidence: [
      {
        label: "정량 결과",
        description: "수작업으로 2~3일 걸리던 SEO 분석과 리포트 생성 과정을 약 10초 내외로 단축했습니다.",
      },
      {
        label: "공개 제한",
        description: "기업 실무 프로젝트라 소스 코드는 공개하지 않고, 포트폴리오에는 문제, 역할, 해결 과정, 결과 중심으로 정리했습니다.",
      },
      {
        label: "면접 설명 포인트",
        description: "Gemini API quota, 재시도, 체크포인트, 입력 스키마 검증처럼 실제 자동화 운영에서 부딪힌 문제를 설명할 수 있습니다.",
      },
    ],
    featured: true,
  },
  {
    slug: "java-socket",
    title: "Java Socket 기반 실시간 통신 시스템",
    type: "Academic Project",
    period: "2023.10-2023.12",
    theme: "로그 기준 정리와 메시지 처리 안정화",
    details: [
      "메시지가 나뉘어 수신되며 데이터가 깨지는 문제를 로그로 확인",
      "송수신 로그 기준을 맞추고, 수신 버퍼에 데이터를 누적한 뒤 완전한 단위만 처리하도록 수정",
      "팀원이 같은 로그와 기준으로 문제를 확인할 수 있게 되어 원인 파악과 재작업을 줄임"
    ],
    problem:
      "수업 과제로 멀티 클라이언트 채팅 시스템을 구현했습니다. 처음에는 소켓을 열고 데이터만 보내면 될 줄 알았지만, 동시에 여러 명이 접속하거나 데이터가 길어지면 메시지가 깨지는 문제가 계속 발생했습니다.",
    myContribution: [
      "클라이언트당 스레드를 할당하는 멀티스레드 서버 아키텍처 구현",
      "메시지 유형(연결, 전송, 종료)을 구분하는 커스텀 패킷 프로토콜 설계",
      "스레드 ID, 타임스탬프, 이벤트 유형을 기록하는 로깅 체계 구축",
    ],
    bottleneck:
      "여러 클라이언트가 동시에 메시지를 보낼 때 어떤 스레드에서 문제가 생겼는지 파악하기 어려웠습니다. 또한 긴 메시지를 보낼 때 수신 버퍼 크기 문제로 메시지가 잘리거나 깨지는 현상이 빈번했습니다.",
    solution:
      "에러를 추적할 수 있도록 스레드 ID와 시간을 강제하는 로그 기준을 맞췄습니다. 메시지 깨짐 문제를 해결하기 위해 헤더에 페이로드 길이를 포함하는 커스텀 프로토콜을 정의하고, 지정된 길이만큼 데이터를 읽어 들이도록 수신 버퍼 처리 로직을 수정했습니다.",
    result:
      "멀티스레드 환경에서 패킷 깨짐 없이 동시 접속 안정성 확보를 달성했습니다. 특히 팀원들이 같은 기준으로 로그를 확인하게 되면서 디버깅 속도가 크게 향상되었습니다.",
    retrospective:
      "직접 스레드를 생성하는 방식은 접속자가 많아지면 서버에 부담이 커진다는 것을 배웠습니다. 지금 다시 한다면 스레드 풀(Thread Pool)이나 Java NIO 기반의 비동기 소켓 처리를 도입해 리소스 사용을 최적화해보고 싶습니다.",
    interviewPoints: [
      "메시지가 나뉘어 수신될 때 데이터가 깨지는 원인과 해결 과정",
      "메시지가 나뉘어 수신될 때 수신 버퍼를 처리한 기준",
      "팀원이 동일한 환경과 기준으로 문제를 추적할 수 있도록 로깅 체계를 통일한 방법",
    ],
    techContext: "Java의 Socket API와 Multi-threading을 활용해 여러 클라이언트의 동시 접속을 처리하고, 자체 패킷 규격을 정의해 데이터 유실을 막았습니다.",
    shortProblem: "메시지가 나뉘어 수신되면서 데이터가 깨졌습니다.",
    shortAction: "송수신 로그 기준을 맞추고 수신 버퍼에 데이터를 누적한 뒤 완전한 단위만 처리하도록 바꿨습니다.",
    shortResult: "팀원이 같은 로그와 기준으로 문제를 확인할 수 있게 됐습니다.",
    shortQuestion: "메시지가 나뉘어 수신될 때 수신 버퍼를 처리한 기준",
    githubUrl: "https://github.com/lukemin-dev/multichat-java",
    evidence: [
      {
        label: "GitHub 저장소",
        description: "Java Socket 기반 실시간 통신 프로젝트 정리 저장소입니다.",
        href: "https://github.com/lukemin-dev/multichat-java",
      },
      {
        label: "면접 대비 노트",
        description: "TCP 메시지 경계, 수신 버퍼 처리, 멀티스레드 처리, 로그 기준을 면접 답변용으로 정리했습니다.",
        href: "https://github.com/lukemin-dev/multichat-java/blob/main/docs/interview-notes.md",
      },
      {
        label: "문제 해결 근거",
        description: "메시지가 나뉘어 수신되는 문제를 TCP 스트림 특성으로 설명하고, 완전한 메시지 단위 처리와 로그 기준 통일로 해결한 과정을 정리했습니다.",
      },
    ],
    featured: false,
  },
  {
    slug: "iot-cloud-monitoring",
    title: "IoT 클라우드 모니터링 시스템",
    type: "Capstone Project",
    period: "2024.05-2024.07",
    theme: "센서 데이터 기반 환경 모니터링",
    details: [
      "Raspberry Pi와 센서 데이터를 서버로 전송하는 흐름을 설계했습니다.",
      "네트워크 장애 상황을 고려해 로컬 저장과 재전송 구조를 검토했습니다.",
      "센서 데이터가 서버까지 이어지는 흐름과 운영 안정성의 중요성을 학습했습니다."
    ],
    problem:
      "센서 장비에 문제가 생겼을 때 수동으로 로그를 뒤져봐야만 원인을 알 수 있었습니다. 장애가 발생한 시점을 정확히 파악하기 어렵고 알림 체계가 없어서 대응이 항상 늦었습니다.",
    myContribution: [
      "MQTT 브로커를 활용한 Edge 단의 센서 데이터 수집 파이프라인 구축",
      "InfluxDB를 활용한 시계열 데이터 저장 및 Grafana 연동",
      "임계값 설정 기반 슬랙(Slack) 자동 알림 파이프라인 구성",
    ],
    bottleneck:
      "센서에서 보내는 데이터 형식이 일정하지 않아서 데이터베이스에 넣기 전에 에러가 자주 났습니다. 또한, 네트워크가 불안정할 때 데이터가 유실되는 현상이 발견되었습니다.",
    solution:
      "데이터를 DB에 넣기 전에 입력 형식을 검증하고 규격화하는 전처리 단계를 추가했습니다. 네트워크 장애 상황을 고려해 로컬 저장과 재전송 구조를 검토했습니다.",
    result:
      "센서 데이터가 서버까지 이어지는 흐름과 운영 안정성의 중요성을 학습했습니다.",
    retrospective:
      "단일 노드에 InfluxDB를 구성하여 트래픽이 몰릴 때 부하가 우려되었습니다. 앞으로는 메시지 큐(Kafka, RabbitMQ)를 도입해 트래픽 스파이크를 완충하는 구조를 적용해보고 싶습니다.",
    interviewPoints: [
      "네트워크 장애 상황을 고려해 센서 데이터의 유실 가능성을 줄이기 위해 검토한 방안",
      "임계값 기반 알림에서 오탐(False Positive)을 줄이기 위한 고민",
      "시계열 데이터베이스를 사용할 때의 특징 비교",
    ],
    techContext: "Python과 MQTT를 이용해 Edge 장비에서 센서 데이터를 수집하고, InfluxDB와 Grafana를 연결해 시계열 데이터 저장 및 실시간 알림을 구성했습니다.",
    shortProblem: "네트워크가 불안정할 때 센서 데이터가 유실되었습니다.",
    shortAction: "네트워크 장애 상황을 고려해 로컬 저장과 재전송 구조를 검토했습니다.",
    shortResult: "센서 데이터가 서버까지 이어지는 흐름과 운영 안정성의 중요성을 학습했습니다.",
    shortQuestion: "네트워크가 불안정할 때 센서 데이터를 유실 없이 보존한 방법",
    evidence: [
      {
        label: "프로젝트 케이스 정리",
        description: "Raspberry Pi, MQTT, InfluxDB, Grafana, Slack 알림을 연결한 Edge-to-Cloud 모니터링 흐름을 포트폴리오 케이스로 정리했습니다.",
      },
      {
        label: "공개 코드 상태",
        description: "현재 공개 GitHub 저장소는 연결하지 않았습니다. 코드나 캡스톤 산출물을 정리하면 이 위치에 링크를 추가할 수 있습니다.",
      },
      {
        label: "면접 설명 포인트",
        description: "네트워크 장애 시 로컬 저장과 재전송 구조, 시계열 데이터 저장, 임계값 기반 알림의 오탐 관리 관점으로 설명할 수 있습니다.",
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
      "Spring Boot 기반 REST API를 구현했습니다.",
      "DTO, Controller, Service 구조를 분리하고 예외 처리, 페이지네이션, Swagger 문서화를 적용했습니다.",
      "단순 CRUD를 넘어서 API 구조, 예외 처리, 테스트, 문서화 흐름을 정리"
    ],
    problem:
      "면접 준비를 하면서 여러 노트 앱과 문서에 정보가 파편화되는 문제를 느꼈습니다. 이를 해결하기 위해 데이터를 체계적으로 관리할 API가 필요했습니다.",
    myContribution: [
      "Spring Boot 기반 REST API를 구현했습니다.",
      "DTO, Controller, Service 구조를 분리하고 예외 처리, 페이지네이션, Swagger 문서화를 적용했습니다.",
    ],
    bottleneck:
      "처음에는 모든 로직을 하나의 클래스에 몰아넣어 코드가 길어지고 유지보수가 어려웠습니다.",
    solution:
      "DTO, Controller, Service 구조를 명확히 분리하고, 전역 예외 처리(Global Exception Handling)를 도입해 에러 응답 규격을 통일했습니다.",
    result:
      "면접 질문 데이터를 관리하는 API 서버를 완성하며, REST API 설계 및 문서화 흐름을 익혔습니다.",
    retrospective:
      "다양한 에러 케이스에 대한 테스트 코드를 작성해보면서, 사전에 예외를 검증하는 구조의 중요성을 느꼈습니다.",
    interviewPoints: [
      "DTO, Controller, Service 구조를 분리한 이유와 장점",
      "전역 예외 처리(Global Exception Handling)를 적용한 과정",
      "Swagger 문서화를 통해 얻은 이점",
    ],
    techContext: "Java와 Spring Boot로 REST API를 구현하고, 계층형 아키텍처를 적용했습니다.",
    shortProblem: "질문 데이터를 체계적으로 관리할 API가 필요했습니다.",
    shortAction: "Spring Boot 기반 REST API를 구현하고 계층을 분리했습니다.",
    shortResult: "API 구조, 예외 처리, 문서화 흐름을 정리했습니다.",
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
        description: "질문 등록, 조회, 검색, 수정, 삭제 API와 공통 응답 형식을 문서화했습니다.",
        href: "https://github.com/lukemin-dev/backend-interview-tracker/blob/main/docs/02-design/api-spec.md",
      },
      {
        label: "아키텍처 리뷰",
        description: "Controller-Service-Repository 계층 분리, DTO 분리, 전역 예외 처리, 테스트 관점을 정리했습니다.",
        href: "https://github.com/lukemin-dev/backend-interview-tracker/blob/main/docs/03-analysis/architecture-review.md",
      },
      {
        label: "면접 대비 노트",
        description: "프로젝트 설명 흐름, 막혔던 점, 해결 방법, 30초 답변 예시를 정리했습니다.",
        href: "https://github.com/lukemin-dev/backend-interview-tracker/blob/main/docs/interview-notes.md",
      },
    ],
    featured: true,
  },
];
