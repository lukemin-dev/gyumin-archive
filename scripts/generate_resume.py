#!/usr/bin/env python3
from __future__ import annotations

import os
from pathlib import Path
from typing import Iterable

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parent.parent
OUT = Path(os.environ.get("RESUME_OUTPUT", ROOT / "public" / "resume.pdf"))

REGULAR_FONT_CANDIDATES = [
    os.environ.get("RESUME_FONT_REGULAR", ""),
    "/usr/share/fonts/truetype/nanum/NanumSquareR.ttf",
    "/usr/share/fonts/truetype/nanum/NanumSquareRoundR.ttf",
    "/usr/share/fonts/truetype/nanum/NanumGothic.ttf",
    "/System/Library/Fonts/Supplemental/AppleGothic.ttf",
]
BOLD_FONT_CANDIDATES = [
    os.environ.get("RESUME_FONT_BOLD", ""),
    "/usr/share/fonts/truetype/nanum/NanumSquareB.ttf",
    "/usr/share/fonts/truetype/nanum/NanumSquareRoundB.ttf",
    "/usr/share/fonts/truetype/nanum/NanumGothicBold.ttf",
    "/System/Library/Fonts/Supplemental/AppleGothic.ttf",
]

INK = colors.HexColor("#111827")
TEXT = colors.HexColor("#4B5563")
MUTED = colors.HexColor("#6B7280")
RULE = colors.HexColor("#D1D5DB")
ACCENT = colors.HexColor("#2563EB")


def first_existing(paths: Iterable[str]) -> str:
    for path in paths:
        if path and Path(path).is_file():
            return path
    raise FileNotFoundError("Nanum font was not found. Install fonts-nanum first.")


def register_fonts() -> None:
    regular = first_existing(REGULAR_FONT_CANDIDATES)
    bold = first_existing(BOLD_FONT_CANDIDATES)
    pdfmetrics.registerFont(TTFont("Nanum", regular))
    pdfmetrics.registerFont(TTFont("Nanum-Bold", bold))
    pdfmetrics.registerFontFamily(
        "Nanum",
        normal="Nanum",
        bold="Nanum-Bold",
        italic="Nanum",
        boldItalic="Nanum-Bold",
    )


def build_styles() -> dict[str, ParagraphStyle]:
    return {
        "name": ParagraphStyle(
            "name",
            fontName="Nanum-Bold",
            fontSize=21.5,
            leading=23.5,
            textColor=INK,
            alignment=TA_LEFT,
            spaceAfter=0.7 * mm,
        ),
        "headline": ParagraphStyle(
            "headline",
            fontName="Nanum-Bold",
            fontSize=9.2,
            leading=10.6,
            textColor=ACCENT,
            alignment=TA_LEFT,
            spaceAfter=1.0 * mm,
        ),
        "contact": ParagraphStyle(
            "contact",
            fontName="Nanum",
            fontSize=8.0,
            leading=9.4,
            textColor=TEXT,
            alignment=TA_LEFT,
            spaceAfter=2.5 * mm,
        ),
        "summary": ParagraphStyle(
            "summary",
            fontName="Nanum",
            fontSize=8.65,
            leading=10.8,
            textColor=TEXT,
            alignment=TA_LEFT,
            wordWrap="CJK",
            spaceAfter=2.0 * mm,
        ),
        "section": ParagraphStyle(
            "section",
            fontName="Nanum-Bold",
            fontSize=9.9,
            leading=11.2,
            textColor=ACCENT,
            spaceBefore=0.8 * mm,
            spaceAfter=0,
        ),
        "entry_left": ParagraphStyle(
            "entry_left",
            fontName="Nanum-Bold",
            fontSize=9.05,
            leading=10.4,
            textColor=INK,
            wordWrap="CJK",
        ),
        "entry_right": ParagraphStyle(
            "entry_right",
            fontName="Nanum",
            fontSize=7.75,
            leading=9.0,
            textColor=MUTED,
            alignment=TA_RIGHT,
        ),
        "org": ParagraphStyle(
            "org",
            fontName="Nanum",
            fontSize=7.95,
            leading=9.25,
            textColor=MUTED,
            spaceAfter=0.45 * mm,
        ),
        "bullet": ParagraphStyle(
            "bullet",
            fontName="Nanum",
            fontSize=8.15,
            leading=9.7,
            textColor=TEXT,
            leftIndent=4.0 * mm,
            firstLineIndent=-2.8 * mm,
            bulletIndent=0,
            wordWrap="CJK",
            spaceAfter=0.25 * mm,
        ),
        "skills": ParagraphStyle(
            "skills",
            fontName="Nanum",
            fontSize=7.85,
            leading=9.45,
            textColor=TEXT,
            wordWrap="CJK",
            spaceAfter=0,
        ),
    }


def section(title: str, styles: dict[str, ParagraphStyle]):
    return [
        Paragraph(title.upper(), styles["section"]),
        HRFlowable(
            width="100%",
            thickness=0.55,
            color=RULE,
            spaceBefore=0.35 * mm,
            spaceAfter=1.45 * mm,
        ),
    ]


def entry_header(
    title: str,
    role: str,
    date: str,
    org: str,
    styles: dict[str, ParagraphStyle],
    url: str | None = None,
):
    if url:
        title_markup = f'<link href="{url}" color="#111827">{title}</link>'
        link_markup = f' <link href="{url}" color="#2563EB">GitHub</link>'
    else:
        title_markup = title
        link_markup = ""

    left = title_markup if not role else f"{title_markup} | {role}"
    left += link_markup

    table = Table(
        [[Paragraph(left, styles["entry_left"]), Paragraph(date, styles["entry_right"])]],
        colWidths=[142 * mm, 37 * mm],
        hAlign="LEFT",
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    flows = [table]
    if org:
        flows.append(Paragraph(org, styles["org"]))
    else:
        flows.append(Spacer(1, 0.4 * mm))
    return flows


def bullet(text: str, styles: dict[str, ParagraphStyle]):
    return Paragraph(f"• {text}", styles["bullet"])


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Nanum", 7.0)
    canvas.setFillColor(MUTED)
    text = "프로젝트 상세 및 증명 자료: gyumin-archive.vercel.app"
    right = A4[0] - 15 * mm
    y = 8.0 * mm
    canvas.drawRightString(right, y, text)
    width = pdfmetrics.stringWidth(text, "Nanum", 7.0)
    canvas.linkURL(
        "https://gyumin-archive.vercel.app",
        (right - width, y - 1, right, y + 8),
        relative=0,
    )
    canvas.restoreState()


def build_resume(output_path: Path) -> None:
    register_fonts()
    styles = build_styles()
    output_path.parent.mkdir(parents=True, exist_ok=True)

    doc = BaseDocTemplate(
        str(output_path),
        pagesize=A4,
        leftMargin=15 * mm,
        rightMargin=15 * mm,
        topMargin=11.5 * mm,
        bottomMargin=15 * mm,
        title="이규민 이력서",
        author="Lee Gyumin",
        subject="Backend Cloud Automation Engineer Resume",
        keywords="Backend, Cloud, Automation, Python, Java, AWS, ROS2, LiDAR",
        pageCompression=1,
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="resume", showBoundary=0)
    doc.addPageTemplates(PageTemplate(id="one-page", frames=[frame], onPage=footer))

    story = [
        Paragraph("이규민", styles["name"]),
        Paragraph("BACKEND · SYSTEM INTEGRATION · AUTOMATION", styles["headline"]),
        Paragraph('<link href="mailto:lgmlgm227@naver.com">lgmlgm227@naver.com</link> | <link href="https://github.com/lukemin-dev">github.com/lukemin-dev</link> | <link href="https://gyumin-archive.vercel.app">gyumin-archive.vercel.app</link>', styles["contact"]),
        Paragraph("Python과 Java로 시스템 연동과 업무 자동화를 구현합니다. 센서·PLC·카메라 촬영 누락을 추적하고, 인사·그룹웨어·PLM 정보를 연결해 계정 회수 흐름을 구현했습니다.", styles["summary"]),
    ]
    story.extend(section("Experience", styles))
    entries = [
        ("금호타이어", "생산·연구IT 인턴", "2026.09 - 현재", [
            "인사 DB·그룹웨어·PLM 사용자를 대조하고 License·Role 회수, 계정 비활성화와 결과 이메일 통보를 구현",
            "KCEM의 담당 범위 MSSQL 쿼리를 PostgreSQL로 전환하며 조회 결과·화면 연계 항목 점검",
            "담당자와 MES·POP 현장에 동행해 생산 7개 공정의 작업지시·LOT·검사정보 흐름 확인"]),
        ("한국생산기술연구원", "현장실습 인턴", "2026.07 - 2026.08", [
            "농산물 자동선별 시스템 촬영 누락을 센서 감지 → PLC 입출력 → 카메라 트리거 순으로 점검",
            "LR-Z 응답시간 50ms → 10ms 및 PLC 출력 조건 조정 후 양파 8,092개 플래시 작동·데이터 기록 확인 (AI 정확도와 구분)"]),
        ("Crosslink", "소프트웨어 자동화 인턴 · 일본", "2026.01 - 2026.02", [
            "Python으로 GSC·Google Sheets·Gemini API를 연결해 수집·정제·우선순위 산정·리포트 생성 자동화",
            "입력 검증·재시도·체크포인트 구현. 자동 실행 약 10초 기록은 사람의 검토·수정 시간 제외"]),
    ]
    for company, role, period, items in entries:
        block=entry_header(company,role,period,"",styles)
        block.extend(bullet(item,styles) for item in items)
        story.append(KeepTogether(block));story.append(Spacer(1,2*mm))
    story.extend(section("Selected Projects",styles))
    for title,role,period,url,items in [
        ("Java Socket 실시간 통신", "수업 경험·현재 공개 구현", "2023.10 - 2023.12", "https://github.com/lukemin-dev/multichat-java", [
            "4바이트 길이 헤더·반복 수신·스레드 풀 기반 세션 처리와 이벤트 로그 (현재 공개 코드 기준)",
            "2026.10.07 공개 코드 단위 테스트 3개 통과: 메시지 왕복, 분할 입력, 초과 길이 거부. 실제 네트워크 부하 검증과 구분"]),
        ("센서 데이터 기반 이상 징후 모니터링", "센서·서버·모바일 연동", "2026.03 - 2026.07", "https://github.com/lukemin-dev/warehouse-fire-anomaly-monitor", [
            "Raspberry Pi에서 2초 주기 수집, Flask·SQLite·Isolation Forest·모바일 앱 연동 및 AWS EC2 배포",
            "센서값 변경 후 저장·판정·그래프·경고 이력 반영 확인. 실제 화재 성능·안전 인증을 받은 시스템이 아닌 시제품"]),
    ]:
        block=entry_header(title,role,period,"",styles,url=url)
        block.extend(bullet(item,styles) for item in items)
        story.append(KeepTogether(block));story.append(Spacer(1,2*mm))
    story.extend(section("Skills & Education",styles))
    for text in [
        "<b>개발:</b> Python, Java, SQL, Spring MVC/Boot, MyBatis, Flask, PostgreSQL, SQLite",
        "<b>배포·도구:</b> AWS EC2, Linux, systemd, Git | <b>언어:</b> 영어 기술 문서 독해, 일본어 현지 교류·인턴 경험",
        "<b>전남대학교 컴퓨터공학과</b> · 2027.02 졸업예정 · GPA 4.23/4.5",
        "2023-1학기부터 2026-1학기까지 7학기 연속 성적우수상 · 2025년 수원시장학재단 제20기 장학생",
        "인공지능 중급과정(AWS 마스터 클래스) 160시간 · 자율주행 인지 Track 16시간 이수",
    ]: story.append(Paragraph(text,styles["skills"]));story.append(Spacer(1,1*mm))
    story.extend(section("Community",styles))
    story.extend(entry_header("대학생 청소년교육지원사업","학습 멘토","2025.05 - 2026.01","",styles))
    story.append(bullet("294.5시간 영어 학습지도·멘토링. 학생의 이해 수준에 맞춰 설명하고, 체험활동과 꾸준한 지도로 질문할 수 있는 관계 형성",styles))
    story.append(Spacer(1,2*mm))
    story.append(Paragraph("2026.10.08 업데이트 · 개인 담당 범위와 검증 결과를 기준으로 작성",styles["org"]))

    doc.build(story)


if __name__ == "__main__":
    build_resume(OUT)
    print(f"Generated {OUT}")
