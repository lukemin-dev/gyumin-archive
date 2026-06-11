# GitHub Repo Interview Map

스캔 기준일: 2026-06-11  
GitHub 계정: `lukemin-dev`

이 문서는 공개 GitHub 저장소들을 면접 대비 관점에서 정리한 지도입니다.  
목표는 각 저장소를 단순 나열하는 것이 아니라, 면접에서 어떤 프로젝트를 어떻게 설명할지 미리 정리하는 것입니다.

## 전체 우선순위

| 우선순위 | 저장소 | 면접에서의 역할 | 한 줄 포인트 |
|---|---|---|---|
| 1 | `backend-interview-tracker` | 주력 백엔드 프로젝트 | Spring Boot REST API, 검색/필터/페이지네이션, 테스트, Swagger 문서화 |
| 1 | `file-organizer-agent` | 주력 자동화 프로젝트 | Python CLI, dry-run 기본값, 중복 파일 처리, 로그, pytest 검증 |
| 1 | `gyumin-archive` | 주력 포트폴리오/운영 개선 프로젝트 | Next.js 포트폴리오, Markdown 기반 콘텐츠 운영, Vercel 자동 배포 |
| 2 | `2025-fall-planner` | 자동화/운영 보조 프로젝트 | GitHub Issues, Milestones, Actions로 학기 일정 자동 리마인드 |
| 2 | `multichat-java` | Java 소켓 프로젝트 후보 | 실시간 통신, 멀티스레드, 메시지 처리 문제를 설명할 수 있음 |
| 3 | `codetree` | 알고리즘 학습 기록 | 꾸준한 문제 풀이 기록으로 보조 설명 가능 |
| 3 | `2-` | 초기 학습 기록 | Python 기초 학습 기록, 면접 주력으로는 약함 |
| 참고 | `backend-interview-question` | 학습 참고 자료 | 외부 면접 질문 자료 기반이므로 내 구현 프로젝트처럼 말하지 않기 |

## 1. backend-interview-tracker

URL: https://github.com/lukemin-dev/backend-interview-tracker  
언어/스택: Java, Spring Boot, Gradle, H2, JPA, JUnit, Mockito, MockMvc, Swagger

### 프로젝트 설명

백엔드 면접 준비를 위해 질문과 답안을 카테고리별로 정리하고 이해도를 관리할 수 있는 Spring Boot REST API 서버입니다.

### 말할 수 있는 문제

- 면접 질문과 답변이 문서나 메모에 흩어져 있으면 검색, 분류, 복습 상태 관리가 어렵습니다.
- 단순 CRUD만 만들면 실무 API 설계 경험을 설명하기 어렵기 때문에, 검색/필터/정렬/페이지네이션과 예외 응답 구조까지 포함할 필요가 있었습니다.

### 구현 포인트

- `QuestionController`에서 질문 등록, 단건 조회, 목록 조회, 수정, 삭제 API를 제공합니다.
- `QuestionService`에서 생성, 검색, 수정, 삭제 로직을 트랜잭션 단위로 분리했습니다.
- `QuestionRepository`에서 keyword, category, status 기반 검색을 처리합니다.
- `GlobalExceptionHandler`, `ApiResponse`, `ResourceNotFoundException`으로 응답 형식을 정리했습니다.
- `QuestionControllerTest`, `QuestionServiceTest`로 컨트롤러와 서비스 계층을 검증했습니다.

### 면접 답변 포인트

- Controller, Service, Repository 계층을 분리한 이유
- DTO를 Request/Response로 나눈 이유
- 검색 조건이 늘어날 때 Repository 쿼리를 어떻게 관리할지
- Global Exception Handling을 둔 이유
- MockMvc와 Mockito 테스트의 역할 차이

### 추가로 정리하면 좋은 문서

- `docs/interview-notes.md`
- API 설계 의도
- 검색/필터/페이지네이션을 구현하며 고민한 점
- 테스트 케이스 목록과 실패했던 케이스

## 2. file-organizer-agent

URL: https://github.com/lukemin-dev/file-organizer-agent  
언어/스택: Python, argparse, pathlib, logging, pytest

### 프로젝트 설명

파일 확장자를 기준으로 다운로드 폴더 같은 디렉터리의 파일을 자동 분류하는 Python CLI 도구입니다.

### 말할 수 있는 문제

- 다운로드 폴더처럼 파일이 계속 쌓이는 곳은 수작업 정리에 시간이 들고, 실수로 파일을 덮어쓸 위험이 있습니다.
- 자동화 도구는 실제 파일을 이동하므로, 기본 동작을 안전하게 설계해야 했습니다.

### 구현 포인트

- `src/main.py`에서 CLI 인자를 처리합니다.
- `--apply`를 명시하지 않으면 dry-run으로 동작해 실제 파일 이동 전 계획만 보여줍니다.
- `src/organizer.py`의 `FileOrganizer`가 scan, plan, execute 흐름을 담당합니다.
- 숨김 파일은 제외하고, 파일 확장자별 카테고리를 계산합니다.
- 중복 파일명은 numbered suffix로 충돌을 피하도록 처리합니다.
- 콘솔과 파일 로그를 함께 남깁니다.
- `tests/test_*.py`로 config, edge case, integration, organizer, utils를 검증합니다.

### 면접 답변 포인트

- 자동화 도구에서 dry-run을 기본값으로 둔 이유
- 실제 변경 전 plan 단계를 둔 이유
- 파일명 충돌을 안전하게 처리하는 방식
- 단위 테스트와 통합 테스트를 나눠 검증한 이유
- CLI 도구에서 logging이 중요한 이유

### 추가로 정리하면 좋은 문서

- `docs/interview-notes.md`
- dry-run 설계 이유
- 파일 이동 실패/권한 오류/중복 파일 처리 사례
- 테스트 커버리지와 수동 테스트 시나리오

## 3. gyumin-archive

URL: https://github.com/lukemin-dev/gyumin-archive  
언어/스택: TypeScript, Next.js, React, Tailwind CSS, Vercel

### 프로젝트 설명

개인 포트폴리오와 경험 아카이브를 Next.js로 만들고, GitHub 웹에서 Markdown 파일만 추가해도 콘텐츠가 반영되도록 개선한 사이트입니다.

### 말할 수 있는 문제

- 기존에는 콘텐츠가 `src/data/*.ts`에 들어 있어 수정하려면 코드 파일을 직접 바꿔야 했습니다.
- 다른 컴퓨터에서 쉽게 글, 프로젝트, 활동을 추가하기 어려웠습니다.
- 포트폴리오를 장기적으로 운영하려면 콘텐츠 작성 방식이 쉬워야 했습니다.

### 구현 포인트

- `content/notes`, `content/projects`, `content/activities` 폴더를 추가했습니다.
- `src/lib/content-data.ts`에서 Markdown frontmatter를 읽고 기존 TypeScript 데이터와 합칩니다.
- `/notes/[slug]` 상세 페이지를 추가했습니다.
- `MarkdownBody` 컴포넌트로 간단한 Markdown 본문을 렌더링합니다.
- README에 GitHub 웹에서 콘텐츠 추가하는 방법을 한국어로 정리했습니다.

### 면접 답변 포인트

- 포트폴리오를 단순 정적 사이트가 아니라 지속 관리 가능한 구조로 개선한 점
- 기존 데이터를 유지하면서 Markdown 기반 콘텐츠를 합친 방식
- Vercel 자동 배포와 GitHub 웹 편집을 연결한 운영 흐름
- 직접 Markdown 파서를 만든 경우의 한계와, 나중에 `gray-matter`, `remark`로 확장할 수 있다는 점

### 이미 정리된 문서

- `docs/interview-notes.md`
- `docs/interview-template.md`

## 4. 2025-fall-planner

URL: https://github.com/lukemin-dev/2025-fall-planner  
언어/스택: Shell, GitHub Issues, GitHub Actions, GitHub CLI

### 프로젝트 설명

학기 일정과 공부 과제를 GitHub Issues, Milestones, Actions로 관리하기 위한 템플릿 저장소입니다.

### 말할 수 있는 문제

- 과제, 복습, 모의고사 같은 작업은 마감일을 놓치기 쉽고 상태 추적이 어렵습니다.
- 별도 앱 대신 GitHub Issues를 이용하면 과제 기록과 자동화를 한 곳에서 관리할 수 있습니다.

### 구현 포인트

- Issue Template으로 학습 과제를 등록합니다.
- Labels로 과목, 유형, 상태를 분류합니다.
- Milestones로 주차와 시험 기간을 묶습니다.
- GitHub Actions가 매일 마감 D-1, D-day, overdue 상태를 확인해 코멘트와 라벨을 추가합니다.
- `bootstrap.sh`가 GitHub CLI로 라벨과 마일스톤 생성을 자동화합니다.

### 면접 답변 포인트

- GitHub Actions를 개발 외 일정 관리 자동화에 활용한 점
- 반복적인 라벨/마일스톤 설정을 스크립트로 자동화한 점
- 운영 자동화에서 알림 기준과 상태 라벨을 설계한 점

## 5. multichat-java

URL: https://github.com/lukemin-dev/multichat-java  
언어/스택: Java로 추정

### 현재 상태

GitHub API에서 파일 목록과 README를 안정적으로 확인하지 못했습니다.  
다만 포트폴리오에 이미 Java Socket 기반 실시간 통신 시스템 경험이 정리되어 있으므로, 이 저장소가 해당 프로젝트라면 면접용으로 다시 정리할 가치가 있습니다.

### 정리하면 좋은 포인트

- 여러 클라이언트 동시 접속 처리
- 스레드 per client 방식의 장단점
- 메시지 경계가 깨지는 문제와 수신 버퍼 처리
- 로그 기준을 맞춰 디버깅한 과정
- 다시 한다면 Thread Pool 또는 Java NIO로 개선할 수 있다는 점

## 6. codetree

URL: https://github.com/lukemin-dev/codetree  
언어/스택: C++, 일부 Python

### 프로젝트 설명

코딩 테스트 문제 풀이 기록 저장소입니다.

### 면접에서의 역할

주력 프로젝트라기보다는 꾸준한 학습 기록으로 보조 설명하는 것이 좋습니다.

### 말하는 방식

- 알고리즘 실력을 과장하기보다, 꾸준히 문제 풀이 기록을 남겼다는 근거로 사용합니다.
- 특정 문제를 깊게 설명할 수 있을 때만 면접 답변에 사용합니다.

## 7. 2-

URL: https://github.com/lukemin-dev/2-  
언어/스택: Python

### 프로젝트 설명

Python 기초 문제 풀이 기록으로 보입니다.

### 면접에서의 역할

면접 주력 프로젝트로는 약합니다.  
필요하다면 초기 학습 기록 또는 알고리즘 학습의 시작점 정도로만 언급하는 것이 좋습니다.

## 8. backend-interview-question

URL: https://github.com/lukemin-dev/backend-interview-question

### 주의점

이 저장소는 외부 백엔드 면접 질문 자료를 기반으로 한 학습 참고 자료 성격입니다.  
내가 직접 구현한 프로젝트처럼 말하면 안 됩니다.

### 면접에서의 역할

- 백엔드 면접 질문을 공부할 때 참고한 자료
- `backend-interview-tracker` 같은 개인 프로젝트로 발전시킬 수 있었던 학습 배경
- CS/Java/Spring 면접 주제 정리용 자료

## 앞으로의 작업 방식

다른 저장소를 면접용으로 정리할 때는 아래 순서로 진행합니다.

1. README와 파일 구조 확인
2. 실행 방법, 테스트 방법 확인
3. 핵심 소스 파일 2~4개 확인
4. `docs/interview-notes.md` 생성
5. "처음 문제 -> 내가 한 일 -> 막힌 점 -> 해결 -> 검증 -> 면접 답변" 순서로 정리
6. 주력 프로젝트는 포트폴리오 사이트의 `content/projects`에도 반영

## 다음 우선 작업

1. `backend-interview-tracker`에 상세 `docs/interview-notes.md` 추가
2. `file-organizer-agent`에 상세 `docs/interview-notes.md` 추가
3. `2025-fall-planner`에 짧은 면접 노트 추가
4. `multichat-java` 상태 확인 후 Java Socket 프로젝트로 정리
5. `gyumin-archive` 포트폴리오의 프로젝트 상세 내용과 이 문서 내용 맞추기
