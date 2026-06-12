# Gyumin Archive

[![CI](https://github.com/lukemin-dev/gyumin-archive/actions/workflows/ci.yml/badge.svg)](https://github.com/lukemin-dev/gyumin-archive/actions/workflows/ci.yml)

Cloud, backend, and automation-focused portfolio for Gyumin Lee.

This site organizes projects, internships, activities, courses, and notes around the problems each experience solved. The goal is to show not only finished outputs, but also the reasoning behind the work: what was repeated, what was automated, what was measured, and what can be explained clearly in an interview.

## Highlights

- Project case studies for backend APIs, automation tools, and operational workflows
- Internship and activity records with concrete responsibilities and results
- Resume and portfolio pages built with Next.js App Router
- Minimal, text-first UI designed for quick scanning by reviewers

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## GitHub에서 콘텐츠 추가하기

이 사이트는 컴퓨터에 프로젝트 파일이 없어도 GitHub 웹사이트에서 직접 수정할 수 있습니다.  
새 글, 프로젝트, 활동을 추가하면 Vercel이 자동으로 다시 배포합니다.

### 새 노트 추가

1. GitHub 저장소에서 `content/notes` 폴더로 들어갑니다.
2. `Add file` -> `Create new file`을 누릅니다.
3. 파일 이름을 `my-new-note.md`처럼 입력합니다.
4. `content/notes/_README.md`에 있는 양식을 복사해서 붙여넣습니다.
5. 제목, 날짜, 요약, 태그, 본문을 수정합니다.
6. 아래의 `Commit changes` 버튼을 누릅니다.

예시:

```md
---
title: "새로 배운 점"
date: "2026-06-11"
summary: "목록에 보일 짧은 요약"
tags: ["Backend", "DevOps"]
---

# 새로 배운 점

여기에 본문을 씁니다.
```

저장하면 `/notes/my-new-note` 주소로 상세 페이지가 자동 생성됩니다.

### 새 프로젝트 추가

1. `content/projects` 폴더로 들어갑니다.
2. `Add file` -> `Create new file`을 누릅니다.
3. 파일 이름을 `my-project.md`처럼 입력합니다.
4. `content/projects/_README.md` 양식을 복사해서 채웁니다.
5. `Commit changes`를 누릅니다.

프로젝트는 `/projects/my-project` 주소로 상세 페이지가 자동 생성됩니다.

### 새 활동 추가

1. `content/activities` 폴더로 들어갑니다.
2. `Add file` -> `Create new file`을 누릅니다.
3. 파일 이름을 `my-activity.md`처럼 입력합니다.
4. `content/activities/_README.md` 양식을 복사해서 채웁니다.
5. `Commit changes`를 누릅니다.

### 파일 이름 규칙

- 영어 소문자, 숫자, 하이픈을 사용하는 것을 추천합니다.
- 좋은 예: `java-study-note.md`, `crosslink-retrospective.md`
- 피할 예: `새 글.md`, `My New Note.md`
- `_README.md`처럼 밑줄로 시작하는 파일은 사이트에 표시되지 않습니다.

### 배포 확인

GitHub에서 `Commit changes`를 누르면 Vercel이 자동으로 배포합니다. 보통 1~3분 뒤 [https://gyumin-archive.vercel.app/](https://gyumin-archive.vercel.app/)에서 확인할 수 있습니다.

## 면접 대비 기록

작업 과정과 문제 해결 흐름은 `docs/interview-notes.md`에 정리합니다.  
다른 저장소에서도 같은 방식으로 정리하려면 `docs/interview-template.md`를 복사해서 사용하면 됩니다.

공개 GitHub 저장소 전체를 면접 관점으로 분류한 자료는 `docs/github-repo-interview-map.md`에서 확인할 수 있습니다.
폴더별 역할과 Next.js 코드 흐름은 `docs/code-walkthrough.md`에서 확인할 수 있습니다.

## Verification

```bash
npm run lint
npm run build
```

## Structure

```text
src/app/          App Router pages and metadata
src/components/   Shared UI components
content/          Markdown files that can be edited from GitHub
src/data/         Portfolio content data
src/types/        Shared TypeScript types
public/           Static assets
```

## Deployment

The project is intended for deployment on Vercel.
