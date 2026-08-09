import type { Note } from "@/types";

export const notes: Note[] = [
  {
    slug: "why-reproducible-automation",
    title: "Gemini API 자동화 실패 복구: 재시도·체크포인트 적용",
    date: "2026-02-28",
    summary:
      "Gemini API가 할당량 오류로 멈춰도 처음부터 다시 돌리지 않도록 재시도와 체크포인트를 넣었습니다.",
    tags: ["자동화", "DevOps", "재현성"],
    relatedProject: {
      slug: "seo-automation",
      title: "AI 기반 SEO 자동화 파이프라인",
    },
    evidence: [
      {
        label: "정량 결과",
        description: "수작업으로 2~3일 걸리던 SEO 분석·보고 흐름을 약 10초 내외로 단축했습니다.",
      },
      {
        label: "공개 범위",
        description: "기업 프로젝트이므로 소스 대신 입력 검증, 재시도, 체크포인트와 결과 중심으로 공개합니다.",
      },
    ],
    content: `자동화를 처음 시작하면 '일단 돌아가게' 만드는 데 집중하기 쉽습니다. 그러나 실무에서 만든 파이프라인은 반복적으로 실행되고, 같은 입력을 같은 기준으로 처리할 수 있어야 합니다. 재현 가능성이 보장되지 않으면 자동화 결과를 신뢰하기 어렵습니다.

Yahoo-Crosslink 인턴십에서 SEO 자동화 파이프라인을 만들 때 입력 데이터의 형식이 달라지고 Gemini API 할당량 초과와 응답 지연이 반복됐습니다. 입력값 검증과 예외 데이터 분리를 넣고, 실패한 단계만 다시 실행할 수 있도록 작업을 나누었습니다. 중간 결과는 체크포인트로 저장했습니다.

이 작업 이후 자동화 스크립트를 만들 때는 기능보다 먼저 '멈추면 어디서 다시 시작할지'를 정합니다. 재시도와 체크포인트는 부가 기능이 아니라 실제로 반복 실행하기 위한 조건이었습니다.`,
  },
  {
    slug: "java-socket-logging-lessons",
    title: "Java Socket 메시지가 잘리는 이유: TCP 메시지 경계와 로깅",
    date: "2024-06-20",
    summary:
      "TCP가 메시지 단위를 보장하지 않아 잘린 데이터를 수신 버퍼에 모으고, 세션별 로그로 동작을 추적했습니다.",
    tags: ["Java", "Socket", "로깅", "디버깅"],
    relatedProject: {
      slug: "java-socket",
      title: "Java Socket 기반 실시간 통신 시스템",
    },
    evidence: [
      {
        label: "GitHub 저장소",
        description: "멀티스레드 처리, 메시지 경계와 로그 기준을 정리한 공개 저장소입니다.",
        href: "https://github.com/lukemin-dev/multichat-java",
      },
    ],
    content: `멀티 클라이언트 Socket 서버를 구현하면서 가장 어려웠던 것은 '무엇이 잘못되었는지 파악하는 일'이었습니다. 여러 클라이언트가 동시에 접속하는 환경에서는 System.out.println만으로는 문제의 원인을 추적하기 어렵습니다.

이 문제를 해결하기 위해 스레드 ID, 타임스탬프, 이벤트 유형을 포함하는 구조화된 로깅 시스템을 도입했습니다. 각 클라이언트 세션별로 로그를 분리하고, 연결·메시지·종료 이벤트를 구분하여 기록하자 동시 접속 상황에서도 특정 클라이언트의 동작을 정확히 추적할 수 있었습니다.

그 뒤로는 멀티스레드 코드를 만들 때 로그 형식부터 정합니다. 연결, 메시지, 종료 이벤트가 구분되지 않으면 문제가 생긴 클라이언트를 다시 찾는 데 더 많은 시간이 들었기 때문입니다.`,
  },
  {
    slug: "edge-to-cloud-iot",
    title: "Raspberry Pi 센서 데이터를 Flask·AWS로 전송한 방법",
    date: "2026-07-20",
    summary:
      "라즈베리파이에서 읽은 센서 값이 EC2와 모바일 화면까지 도착하도록 2초 주기의 데이터 흐름을 만들었습니다.",
    tags: ["IoT", "클라우드", "Edge Computing", "모니터링"],
    relatedProject: {
      slug: "warehouse-fire-anomaly-monitor",
      title: "창고 화재·이상 징후 감지 시스템",
    },
    evidence: [
      {
        label: "GitHub 저장소",
        description: "센서 수집 코드, Flask 서버, 모바일 앱과 배포 문서를 확인할 수 있습니다.",
        href: "https://github.com/lukemin-dev/warehouse-fire-anomaly-monitor",
      },
      {
        label: "검증 범위",
        description: "실제 센서 변화가 EC2 서버의 AI 판정과 모바일 그래프·경고 이력에 반영되는 흐름을 확인했습니다.",
      },
    ],
    content: `IoT 시스템에서 센서 데이터를 클라우드에 저장하고 시각화하는 것은 단순해 보이지만, 구현하면 센서 해상도, 전송 실패, 서버 판정과 화면 반영 사이의 경계를 확인해야 합니다.

창고 화재·이상 징후 감지 프로젝트에서는 라즈베리파이가 MQ-2와 불꽃 센서의 아날로그 값을 수집하고, 2초 주기로 AWS EC2의 Flask API에 전송하도록 구성했습니다. 서버는 SQLite에 센서·경고 이력을 저장하고 IsolationForest 점수와 규칙 기반 경고를 함께 반환했습니다.

라즈베리파이는 센서 값을 읽어 전송하고, EC2 서버는 이력 저장과 이상 판정을 맡았습니다. 센서 값 하나를 바꾼 뒤 모바일 그래프와 경고 이력까지 함께 바뀌는지 확인하면서 연결이 끊긴 구간을 찾았습니다.`,
  },
];
