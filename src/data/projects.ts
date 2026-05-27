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
      "3일 걸리던 수동 작업을 10초로 단축했습니다. 무엇보다 팀원 누구나 버튼 한 번만 누르면 동일한 기준의 리포트를 얻을 수 있게 되어 반복 업무에 대한 스트레스가 크게 줄었습니다.",
    retrospective:
      "당시에는 급하게 기능 구현에 집중하다 보니 API 호출 로직이 여러 모듈에 흩어졌습니다. 다시 설계한다면, 외부 API 의존성을 캡슐화하는 계층을 분리해 테스트와 에러 처리를 더 일관성 있게 관리하고 싶습니다.",
    interviewPoints: [
      "Gemini API 호출 제한(429 Error)이 발생했을 때 처리 방식을 조정한 과정",
      "작업 소요 시간을 3일에서 10초로 단축한 구체적인 측정 기준",
      "동일한 입력에서 일관된 결과를 얻기 위해 도입한 데이터 검증 방식",
    ],
    techContext: "Python으로 GSC API와 Google Sheets API를 연결했고, 데이터 형식이 흔들리는 문제를 입력 스키마 검증과 예외 데이터 분리로 줄였습니다.",
    shortProblem: "SEO 분석 기준이 흔들리고 수작업에 2~3일이 걸렸습니다.",
    shortAction: "GSC API, Google Sheets API, Gemini API를 연결하고 입력 스키마 검증, 예외 데이터 분리, 재시도 규칙을 넣었습니다.",
    shortResult: "분석과 리포트 생성 시간을 약 10초 내외로 줄였습니다.",
    shortQuestion: "Gemini API 호출 제한이 발생했을 때 처리 방식을 조정한 과정",
    privateCode: true,
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
      "메시지가 깨지던 문제를 해결하여 10명 이상의 동시 접속을 안정적으로 처리할 수 있었습니다. 특히 팀원들이 같은 기준으로 로그를 확인하게 되면서 디버깅 속도가 크게 향상되었습니다.",
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
    githubUrl: "https://github.com/lukemin-dev/java-socket",
    featured: false,
  },
  {
    slug: "iot-cloud-monitoring",
    title: "IoT 클라우드 모니터링 시스템",
    type: "Capstone Project",
    period: "2024.05-2024.07",
    theme: "센서 데이터 기반 환경 모니터링",
    details: [
      "Raspberry Pi와 센서를 활용해 가스, 화재, 온습도 등 환경 데이터를 수집",
      "네트워크 장애 상황을 고려해 로컬 저장과 재전송 구조를 설계",
      "현장 데이터가 끊기지 않고 서버로 이어지는 흐름과 운영 안정성의 중요성 학습"
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
      "데이터를 DB에 넣기 전에 입력 형식을 검증하고 규격화하는 전처리 단계를 추가했습니다. 네트워크 불안정 문제는 MQTT의 QoS 레벨을 상향 조정하고 로컬에 임시 버퍼링을 두어 나중에 한 번에 재전송하는 방식으로 데이터 유실을 막았습니다.",
    result:
      "수동 확인 없이 센서 이상을 1분 내외로 즉시 감지하게 되었습니다. 로그와 데이터를 대시보드에 모아두니, 시스템을 유지보수하는 사람들이 언제 어디서 문제가 발생했는지 직관적으로 파악할 수 있게 되었습니다.",
    retrospective:
      "단일 노드에 InfluxDB를 구성하여 트래픽이 몰릴 때 부하가 우려되었습니다. 앞으로는 메시지 큐(Kafka, RabbitMQ)를 도입해 트래픽 스파이크를 완충하는 구조를 적용해보고 싶습니다.",
    interviewPoints: [
      "네트워크가 불안정할 때 센서 데이터를 유실 없이 보존한 방법",
      "임계값 기반 알림에서 오탐(False Positive)을 줄이기 위한 고민",
      "시계열 데이터베이스로 InfluxDB를 선택한 구체적 이유",
    ],
    techContext: "Python과 MQTT를 이용해 Edge 장비에서 센서 데이터를 수집하고, InfluxDB와 Grafana를 연결해 시계열 데이터 저장 및 실시간 알림을 구성했습니다.",
    shortProblem: "네트워크가 불안정할 때 센서 데이터가 유실되었습니다.",
    shortAction: "MQTT QoS 레벨을 조정하고 로컬 버퍼링 후 재전송하는 구조를 설계했습니다.",
    shortResult: "센서 데이터를 유실 없이 보존하고 이상을 1분 내외로 감지하게 되었습니다.",
    shortQuestion: "네트워크가 불안정할 때 센서 데이터를 유실 없이 보존한 방법",
    githubUrl: "https://github.com/lukemin-dev/iot-cloud-monitoring",
    featured: true,
  },
  {
    slug: "backend-interview-tracker",
    title: "Backend Interview Tracker",
    type: "Personal Project",
    period: "2024.03-2024.04",
    theme: "Spring Boot 기반 면접 질문 관리 API",
    details: [
      "Java와 Spring Boot로 면접 질문을 카테고리와 숙련도별로 관리하는 REST API 구현",
      "DTO, Service, Controller, 예외 처리, 페이지네이션, Swagger 문서화 적용",
      "단순 CRUD를 넘어서 API 구조, 예외 처리, 테스트, 문서화 흐름을 정리"
    ],
    problem:
      "면접 준비를 하면서 여러 노트 앱과 문서에 정보가 파편화되는 문제를 느꼈습니다. 내가 어떤 주제를 얼마나 더 파고들어야 하는지 파악하기 어려웠습니다.",
    myContribution: [
      "Spring Boot REST API 설계 및 구현 (질문 CRUD, 카테고리 관리)",
      "카테고리별 학습 진도를 한눈에 보여주는 통계 및 대시보드 개발",
      "Thymeleaf를 활용한 서버 사이드 렌더링 뷰 구현",
    ],
    bottleneck:
      "초기에는 키워드 검색 시 데이터베이스 전체를 LIKE 쿼리로 순회하다 보니 질문 데이터가 많아질수록 응답 속도가 현저히 느려졌습니다. 또한 카테고리 분류 기준이 바뀔 때마다 기존 데이터를 일일이 갱신해야 하는 구조적 한계가 있었습니다.",
    solution:
      "검색이 빈번한 컬럼에 인덱스를 추가하고 페이지네이션을 적용하여 응답 속도를 개선했습니다. 카테고리는 계층형 구조(Parent-Child)로 테이블을 분리하여, 분류 체계가 바뀌어도 유연하게 대응할 수 있도록 정규화를 진행했습니다.",
    result:
      "약 200개 이상의 면접 질문을 하나의 시스템 안에서 체계적으로 관리할 수 있게 되었습니다. 본인의 학습 진행도를 대시보드로 확인함으로써 면접 준비 효율이 눈에 띄게 높아졌습니다.",
    retrospective:
      "초기 단계부터 데이터베이스 정규화를 고려하지 않아 중간에 스키마를 엎는 과정이 번거로웠습니다. 프로젝트 시작 전 ERD(Entity-Relationship Diagram)를 명확히 설계하고 리뷰하는 과정의 중요성을 느꼈습니다.",
    interviewPoints: [
      "LIKE 쿼리로 인한 성능 저하를 측정하고 개선한 구체적 기준",
      "관계형 데이터베이스에서 계층형 카테고리를 모델링한 방식",
      "Thymeleaf 템플릿 엔진을 선택한 이유와 API 분리의 장단점",
    ],
    techContext: "Java와 Spring Boot로 RESTful API를 구현하고, MySQL의 계층형 테이블 구조를 통해 유연한 카테고리 관리를 가능하게 했습니다.",
    shortProblem: "면접 질문 데이터가 많아질수록 LIKE 검색이 느려졌습니다.",
    shortAction: "검색 컬럼에 인덱스를 추가하고 페이지네이션을 적용했으며, 카테고리를 계층형으로 분리했습니다.",
    shortResult: "응답 속도를 개선하고 카테고리 확장에 유연한 구조를 만들었습니다.",
    shortQuestion: "LIKE 쿼리로 인한 성능 저하를 측정하고 개선한 구체적 기준",
    githubUrl: "https://github.com/lukemin-dev/backend-interview-tracker",
    featured: true,
  },
];
