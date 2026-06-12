# Gyumin Archive Code Walkthrough

이 문서는 `gyumin-archive` 코드를 처음 읽는 사람을 위한 공부용 설명입니다. 목표는 "포트폴리오 사이트에서 데이터가 어디에 있고, 어떤 과정을 거쳐 화면에 보이는지"를 이해하는 것입니다.

## 1. 프로젝트가 하는 일

`gyumin-archive`는 Next.js로 만든 개인 포트폴리오 사이트입니다.

사이트는 아래 내용을 보여줍니다.

```text
프로필
프로젝트
인턴십/경험
활동
교육/과정
노트
이력서
```

중요한 특징은 콘텐츠를 두 방식으로 관리한다는 점입니다.

```text
src/data/*.ts       코드 안에 직접 적은 기본 데이터
content/**/*.md     GitHub에서 쉽게 추가할 수 있는 Markdown 콘텐츠
```

## 2. 전체 폴더 구조

```text
gyumin-archive/
  README.md
  content/
  docs/
  public/
  src/
```

### 루트 폴더

- `README.md`: 프로젝트 소개, 실행 방법, GitHub에서 콘텐츠 추가하는 방법
- `package.json`: 실행 명령어와 의존성
- `next.config.ts`: Next.js 설정
- `tsconfig.json`: TypeScript 설정
- `.github/workflows/ci.yml`: GitHub Actions 검증 설정

### content

GitHub 웹사이트에서 직접 추가하기 쉬운 Markdown 콘텐츠 폴더입니다.

```text
content/projects/    프로젝트 Markdown
content/notes/       노트 Markdown
content/activities/  활동 Markdown
```

여기에 `.md` 파일을 추가하면 사이트에 자동으로 반영됩니다. 단, `_README.md`처럼 밑줄로 시작하는 파일은 사이트에 표시하지 않습니다.

### docs

공부와 면접 설명을 위한 문서 폴더입니다.

- `interview-notes.md`: 작업 과정과 문제 해결 흐름
- `interview-template.md`: 다른 프로젝트에서 복사해 쓸 수 있는 면접 정리 양식
- `github-repo-interview-map.md`: GitHub 저장소를 면접 관점으로 분류한 문서
- `code-walkthrough.md`: 지금 읽고 있는 코드 설명 문서

### public

정적 파일 폴더입니다.

- `resume.pdf`: 이력서 PDF
- `images/images.jpg`: 프로필 이미지
- SVG 파일들: 기본 아이콘 이미지

Next.js에서는 `public` 안의 파일을 `/resume.pdf`, `/images/images.jpg`처럼 바로 접근할 수 있습니다.

### src

실제 사이트 코드가 들어있는 폴더입니다.

```text
src/app/          페이지와 라우팅
src/components/   재사용 UI 컴포넌트
src/data/         기본 포트폴리오 데이터
src/lib/          데이터 변환/로딩 로직
src/types/        TypeScript 타입
```

## 3. Next.js App Router 이해하기

이 프로젝트는 Next.js App Router 구조를 사용합니다.

`src/app` 안의 폴더와 파일이 URL이 됩니다.

```text
src/app/page.tsx                -> /
src/app/about/page.tsx          -> /about
src/app/projects/page.tsx       -> /projects
src/app/projects/[slug]/page.tsx -> /projects/:slug
src/app/notes/page.tsx          -> /notes
src/app/notes/[slug]/page.tsx   -> /notes/:slug
src/app/resume/page.tsx         -> /resume
```

여기서 `[slug]`는 동적 주소입니다.

예를 들어 `content/projects/multichat-java.md`가 있고 slug가 `multichat-java`라면 아래 주소가 됩니다.

```text
/projects/multichat-java
```

## 4. 먼저 읽을 파일 순서

처음에는 아래 순서대로 보는 것이 좋습니다.

```text
1. src/app/layout.tsx
2. src/app/page.tsx
3. src/data/profile.ts
4. src/lib/content-data.ts
5. src/app/projects/page.tsx
6. src/app/projects/[slug]/page.tsx
7. src/components/ProjectCard.tsx
8. src/types/index.ts
```

## 5. layout.tsx 이해하기

`src/app/layout.tsx`는 모든 페이지의 공통 틀입니다.

```text
Header
-> main 영역
-> Footer
```

모든 페이지는 이 레이아웃 안에 들어갑니다.

```tsx
<Header />
<main>{children}</main>
<Footer />
```

여기서 `children`은 현재 접속한 페이지 내용입니다.

예를 들어 `/projects`로 들어가면 `children` 자리에 `ProjectsPage`가 들어갑니다.

## 6. Header 이해하기

`src/components/Header.tsx`는 상단 메뉴입니다.

```text
홈
프로젝트
경험
활동
소개
이력서
EN Summary
```

`usePathname()`으로 현재 주소를 확인하고, 현재 페이지 메뉴는 더 진하게 표시합니다.

모바일에서는 `mobileOpen` 상태를 사용해서 메뉴를 열고 닫습니다.

## 7. 데이터가 화면에 보이는 흐름

이 사이트에서 가장 중요한 흐름은 데이터가 화면으로 가는 과정입니다.

```text
src/data/*.ts 또는 content/**/*.md
-> src/lib/content-data.ts
-> src/app/*/page.tsx
-> src/components/*
-> 화면
```

예를 들어 프로젝트 목록은 이렇게 흐릅니다.

```text
content/projects/*.md
src/data/projects.ts
-> src/lib/content-data.ts의 projects
-> src/app/projects/page.tsx
-> ProjectCard 컴포넌트
-> /projects 화면
```

## 8. src/data 폴더 이해하기

`src/data`는 코드로 관리하는 기본 데이터입니다.

```text
profile.ts      이름, 소개, 이메일, 기술 스택
projects.ts     프로젝트 기본 데이터
experience.ts   인턴십/경험 데이터
activities.ts   활동 데이터
courses.ts      교육/과정 데이터
notes.ts        노트 기본 데이터
```

예를 들어 이름, 프로필 이미지, GitHub 링크를 바꾸고 싶으면 `profile.ts`를 봅니다.

## 9. content 폴더 이해하기

`content`는 GitHub 웹에서 쉽게 추가할 수 있는 Markdown 콘텐츠입니다.

프로젝트 Markdown은 보통 이런 형태입니다.

```md
---
title: "프로젝트 이름"
period: "2026"
theme: "한 줄 요약"
featured: true
---

본문을 씁니다.
```

Markdown 파일을 추가하면 `src/lib/content-data.ts`가 읽어서 TypeScript 데이터로 바꿉니다.

## 10. content-data.ts 이해하기

`src/lib/content-data.ts`는 이 프로젝트의 데이터 연결부입니다.

이 파일이 하는 일은 크게 네 가지입니다.

```text
1. content 폴더에서 .md 파일 목록을 찾습니다.
2. Markdown 앞부분의 frontmatter를 읽습니다.
3. frontmatter와 본문을 Project, Note, Activity 타입으로 바꿉니다.
4. src/data의 기본 데이터와 합칩니다.
```

핵심 함수는 아래와 같습니다.

```text
markdownFiles()
parseMarkdown()
parseFrontmatter()
markdownProjects()
markdownNotes()
markdownActivities()
```

### markdownFiles()

특정 폴더의 `.md` 파일을 찾습니다.

```text
content/projects
-> .md 파일 목록
-> _README.md는 제외
```

### parseMarkdown()

Markdown 파일을 두 부분으로 나눕니다.

```text
frontmatter  -> 제목, 날짜, 태그 같은 메타데이터
content      -> 실제 본문
```

### markdownProjects()

Markdown 파일을 `Project` 타입 데이터로 바꿉니다.

이 데이터는 `/projects` 목록과 `/projects/[slug]` 상세 페이지에서 사용됩니다.

## 11. 프로젝트 목록 페이지 흐름

`src/app/projects/page.tsx`는 `/projects` 화면입니다.

흐름은 단순합니다.

```text
projects 가져오기
-> featured 프로젝트와 나머지 프로젝트 분리
-> ProjectCard로 목록 출력
```

`ProjectCard`는 프로젝트 하나를 카드 모양으로 보여주는 컴포넌트입니다.

## 12. 프로젝트 상세 페이지 흐름

`src/app/projects/[slug]/page.tsx`는 프로젝트 상세 페이지입니다.

흐름은 아래와 같습니다.

```text
주소에서 slug 받기
-> projects에서 slug가 같은 프로젝트 찾기
-> 없으면 notFound()
-> 있으면 상세 섹션 출력
```

예를 들어 주소가 아래와 같다면:

```text
/projects/multichat-java
```

코드는 `projects.find((p) => p.slug === "multichat-java")`처럼 해당 프로젝트를 찾습니다.

## 13. MarkdownBody 이해하기

`src/components/MarkdownBody.tsx`는 Markdown 본문을 React 화면으로 바꾸는 컴포넌트입니다.

지원하는 문법은 일부입니다.

```text
# 제목
## 제목
### 제목
- 목록
1. 숫자 목록
코드 블록
[링크](https://example.com)
```

완전한 Markdown 라이브러리를 쓰는 대신, 필요한 문법만 직접 처리합니다.

## 14. TypeScript 타입 이해하기

`src/types/index.ts`는 데이터 모양을 정의합니다.

예를 들어 `Project` 타입은 프로젝트에 어떤 필드가 있어야 하는지 정합니다.

```text
slug
title
period
theme
problem
myContribution
result
interviewPoints
```

타입이 있으면 좋은 점은 데이터를 잘못 넣었을 때 미리 오류를 잡기 쉽다는 것입니다.

## 15. 자주 수정하는 위치

목적별로 보면 아래 파일을 수정하면 됩니다.

```text
프로필 이름/소개/기술 스택 변경 -> src/data/profile.ts
프로젝트 코드 데이터 변경 -> src/data/projects.ts
프로젝트 Markdown 추가 -> content/projects/*.md
노트 추가 -> content/notes/*.md
활동 추가 -> content/activities/*.md
상단 메뉴 변경 -> src/components/Header.tsx
메인 화면 변경 -> src/app/page.tsx
전체 레이아웃 변경 -> src/app/layout.tsx
이력서 교체 -> public/resume.pdf
```

## 16. 공부하면서 직접 해볼 것

로컬에서 실행:

```bash
npm install
npm run dev
```

검증:

```bash
npm run lint
npm run build
```

작게 수정해보기:

```text
1. src/data/profile.ts에서 tagline 한 줄 바꾸기
2. content/notes에 새 Markdown 파일 추가하기
3. /notes에서 새 글이 보이는지 확인하기
4. content/projects에 새 프로젝트 추가하기
5. /projects와 /projects/slug 상세 페이지 확인하기
```

## 17. 혼자 설명해보기

아래 질문에 답할 수 있으면 큰 흐름은 잡은 것입니다.

1. `src/app` 폴더가 URL과 어떤 관계가 있는가?
2. `layout.tsx`의 `children`은 무엇인가?
3. `src/data`와 `content`는 어떤 차이가 있는가?
4. Markdown 파일은 어떻게 페이지 데이터가 되는가?
5. `content-data.ts`는 왜 필요한가?
6. `[slug]` 페이지는 어떤 방식으로 상세 데이터를 찾는가?
7. `ProjectCard` 같은 컴포넌트를 따로 만든 이유는 무엇인가?
8. `src/types/index.ts`가 있으면 어떤 점이 좋은가?

## 18. 다음에 추가해볼 기능

공부용으로 작게 추가해보기 좋은 기능입니다.

- 프로젝트 태그 필터
- 노트 태그 필터
- 프로젝트 검색
- Markdown 이미지 표시 개선
- 다크 모드
- GitHub 저장소 카드 자동 표시
- 각 프로젝트 상세 페이지에 "면접 답변 1분 요약" 섹션 추가
