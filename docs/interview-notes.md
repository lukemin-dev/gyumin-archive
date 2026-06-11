# Gyumin Archive Interview Notes

이 문서는 면접에서 `gyumin-archive` 프로젝트를 설명하기 위해 정리한 기록입니다.

## 1. 프로젝트 한 줄 설명

개인 포트폴리오와 경험 아카이브를 Next.js로 구성하고, GitHub 웹에서 Markdown 파일만 추가해도 노트, 프로젝트, 활동이 자동 반영되도록 개선한 사이트입니다.

## 2. 처음 문제

- 기존 콘텐츠는 `src/data/*.ts` 파일 안에 TypeScript 객체로 직접 작성되어 있었습니다.
- 다른 컴퓨터에서 수정하려면 저장소를 clone하고, Node.js 환경을 준비하고, 코드 파일을 수정해야 했습니다.
- 포트폴리오를 계속 관리하려면 글이나 활동 기록을 더 쉽게 추가할 수 있는 구조가 필요했습니다.

## 3. 내가 한 지시 또는 목표

- GitHub에 올라간 포트폴리오를 다른 컴퓨터에서도 수정할 수 있게 만들고 싶었습니다.
- 코드 파일을 직접 고치지 않고, GitHub 웹에서 새 파일을 추가하는 방식으로 노트, 프로젝트, 활동을 관리하고 싶었습니다.
- 나중에 사용법을 잊지 않도록 README에도 실제 사용 방법을 남기고 싶었습니다.

## 4. 구현 과정

- `content/notes`, `content/projects`, `content/activities` 폴더를 추가했습니다.
- 각 폴더 안에 `_README.md` 템플릿을 두어 새 콘텐츠 작성 양식을 복사할 수 있게 했습니다.
- `src/lib/content-data.ts`를 추가해 Markdown 파일의 frontmatter를 읽고 기존 `src/data` 콘텐츠와 합치도록 만들었습니다.
- 기존 페이지들이 `src/data/projects`, `src/data/notes`, `src/data/activities`를 직접 읽는 대신 `@/lib/content-data`를 읽도록 변경했습니다.
- 기존에는 노트 목록만 있었기 때문에 `/notes/[slug]` 상세 페이지를 추가했습니다.
- 간단한 Markdown 렌더링을 위해 `src/components/MarkdownBody.tsx`를 추가했습니다.
- README에 GitHub 웹에서 콘텐츠를 추가하는 방법, 파일 이름 규칙, 배포 확인 방법을 한국어로 정리했습니다.

## 5. 막혔던 점

- `npm run build` 실행 중 Google Fonts를 가져오지 못해 빌드가 실패했습니다.
- 로컬 검증용 개발 서버를 실행하고 종료하는 과정에서 샌드박스 권한 때문에 일부 명령이 막혔습니다.

## 6. 해결 방법

- Google Fonts 다운로드가 필요한 빌드는 네트워크 권한을 허용한 뒤 다시 실행했습니다.
- 개발 서버 실행과 종료는 권한을 승인한 상태에서 진행했습니다.
- 로컬 서버를 띄운 뒤 `/notes`와 기존 노트 상세 페이지가 HTTP 200으로 응답하는지 확인했습니다.

## 7. 검증

실행한 검증:

```bash
npm run lint
npm run build
```

확인한 페이지:

- `/notes`
- `/notes/why-reproducible-automation`

결과:

- ESLint 통과
- Next.js production build 통과
- 노트 목록과 상세 페이지 정상 응답 확인

## 8. 면접에서 말할 포인트

- 단순히 포트폴리오 화면을 만든 것이 아니라, 계속 관리 가능한 콘텐츠 운영 구조로 개선했습니다.
- GitHub 웹에서 Markdown 파일만 추가하면 Vercel 자동 배포를 통해 사이트에 반영되는 가벼운 CMS 구조를 만들었습니다.
- 기존 TypeScript 데이터 구조를 유지하면서 새 Markdown 콘텐츠를 합치는 방식으로, 기존 기능을 깨지 않고 확장했습니다.
- `/notes/[slug]` 상세 페이지를 추가해 단순 목록형 노트를 실제 글 페이지로 확장했습니다.
- 검증 과정에서 lint, build, 로컬 HTTP 응답 확인까지 진행했습니다.

## 9. 다시 한다면 개선할 점

- Markdown 파서를 직접 유지하기보다 `gray-matter`, `remark` 같은 검증된 라이브러리를 도입할 수 있습니다.
- 이미지 업로드나 첨부 파일 관리 규칙도 함께 만들 수 있습니다.
- 콘텐츠가 많아지면 날짜별 정렬, 태그별 필터, 검색 기능을 추가할 수 있습니다.
- 관리자 페이지를 붙여 GitHub 웹을 열지 않고도 글을 작성하는 구조로 확장할 수 있습니다.

## 10. 짧은 답변 예시

면접에서 짧게 설명한다면:

> 제 포트폴리오는 처음에는 TypeScript 데이터 파일을 직접 수정해야 했습니다. 그래서 다른 컴퓨터나 GitHub 웹에서 쉽게 관리하기 어렵다는 문제가 있었습니다. 이를 해결하기 위해 `content` 폴더 기반 Markdown 작성 구조를 추가했고, Markdown frontmatter를 읽어 기존 데이터와 합치는 로더를 만들었습니다. 그 결과 새 노트나 프로젝트는 GitHub에서 `.md` 파일만 추가하면 Vercel 자동 배포로 사이트에 반영됩니다. 단순 배포보다, 지속적으로 관리 가능한 포트폴리오 운영 구조를 만든 점을 설명할 수 있습니다.
