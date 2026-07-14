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
    "/usr/share/fonts/truetype/nanum/NanumSquareR.ttf",
    "/usr/share/fonts/truetype/nanum/NanumSquareRoundR.ttf",
    "/usr/share/fonts/truetype/nanum/NanumGothic.ttf",
]
BOLD_FONT_CANDIDATES = [
    "/usr/share/fonts/truetype/nanum/NanumSquareB.ttf",
    "/usr/share/fonts/truetype/nanum/NanumSquareRoundB.ttf",
    "/usr/share/fonts/truetype/nanum/NanumGothicBold.ttf",
]

INK = colors.HexColor("#111827")
TEXT = colors.HexColor("#4B5563")
MUTED = colors.HexColor("#6B7280")
RULE = colors.HexColor("#D1D5DB")
ACCENT = colors.HexColor("#2563EB")


def first_existing(paths: Iterable[str]) -> str:
    for path in paths:
        if Path(path).exists():
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
        keywords="Backend, Cloud, Automation, Python, Java, AWS, AI Vision, PLC",
        pageCompression=1,
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="resume", showBoundary=0)
    doc.addPageTemplates(PageTemplate(id="one-page", frames=[frame], onPage=footer))

    story = [
        Paragraph("이규민", styles["name"]),
        Paragraph("BACKEND · CLOUD · AUTOMATION ENGINEER", styles["headline"]),
        Paragraph(
            '010-5838-6229&nbsp;&nbsp;|&nbsp;&nbsp;'
            '<link href="mailto:lgmlgm227@naver.com" color="#4B5563">lgmlgm227@naver.com</link>&nbsp;&nbsp;|&nbsp;&nbsp;'
            '<link href="https://github.com/lukemin-dev" color="#4B5563">github.com/lukemin-dev</link>&nbsp;&nbsp;|&nbsp;&nbsp;'
            '<link href="https://gyumin-archive.vercel.app" color="#4B5563">gyumin-archive.vercel.app</link>',
            styles["contact"],
        ),
        Paragraph(
            "Python·Java로 API와 자동화 파이프라인을 구현하고 AWS/Linux 환경에 배포한 경험이 있습니다. "
            "<b>일본 IT 기업 인턴십에서 2~3일 걸리던 SEO 분석·보고 업무를 약 10초로 단축</b>했습니다. "
            "현재 한국생산기술연구원에서 AI 비전·PLC 기반 자동 선별 시스템의 데이터 흐름과 현장 동작을 분석하고 있습니다.",
            styles["summary"],
        ),
    ]

    story.extend(section("Experience", styles))

    kitech = []
    kitech.extend(
        entry_header(
            "한국생산기술연구원",
            "AI 비전·PLC 현장실습 인턴",
            "2026.07 - 2026.12",
            "모빌리티 핵심부품소재센터 · 광주 · 진행 중",
            styles,
        )
    )
    kitech.extend(
        [
            bullet(
                "YOLO 객체 검출과 ConvNeXt 등급 분류 모델을 학습·튜닝하고 실제 컨베이어 환경에서 성능을 검증",
                styles,
            ),
            bullet(
                "촬영 누락 문제를 센서 입력 → PLC 출력 → 카메라 트리거 → AI 추론 단계로 분리해 원인을 분석하고 KEYENCE LR-Z 센서와 신호 흐름을 점검",
                styles,
            ),
            bullet(
                "양파·단호박 촬영 데이터를 등급 기준에 맞춰 라벨링하고 학습 데이터의 품질을 검수",
                styles,
            ),
        ]
    )
    story.append(KeepTogether(kitech))
    story.append(Spacer(1, 0.9 * mm))

    crosslink = []
    crosslink.extend(
        entry_header(
            "Crosslink",
            "AI SEO 자동화 인턴",
            "2026.01 - 2026.02",
            "요코하마, 일본",
            styles,
        )
    )
    crosslink.extend(
        [
            bullet(
                "Python으로 GSC·Google Sheets·Gemini API를 연동해 데이터 수집-정제-우선순위 산정-리포트 생성 전 과정을 자동화",
                styles,
            ),
            bullet("수작업으로 2~3일 걸리던 SEO 분석·보고 업무를 약 10초로 단축", styles),
            bullet(
                "API 할당량 초과와 응답 지연에 대응해 Flash 모델 전환, 사용 가능한 모델을 자동으로 감지하는 로직, 재시도, 체크포인트, 입력 스키마 검증을 구현",
                styles,
            ),
        ]
    )
    story.append(KeepTogether(crosslink))
    story.append(Spacer(1, 0.9 * mm))

    research = []
    research.extend(
        entry_header(
            "전남대학교 소프트컴퓨팅·인공지능 연구실",
            "학부연구생",
            "2025.09 - 2026.07",
            "컴퓨터공학과",
            styles,
        )
    )
    research.extend(
        [
            bullet("소프트컴퓨팅·인공지능 관련 논문과 기술 자료를 검토하고 연구실 세미나·프로젝트에 참여", styles),
            bullet("실험 입력 조건, 비교 기준, 결과를 문서화하며 AI 모델과 데이터 분석 흐름을 정리", styles),
        ]
    )
    story.append(KeepTogether(research))
    story.append(Spacer(1, 1.1 * mm))

    story.extend(section("Selected Projects", styles))

    warehouse = []
    warehouse.extend(
        entry_header(
            "창고 화재·이상 징후 감지 시스템",
            "팀장 · 기여도 50%",
            "2026.03 - 2026.07",
            "",
            styles,
            url="https://github.com/lukemin-dev/warehouse-fire-anomaly-monitor",
        )
    )
    warehouse.extend(
        [
            bullet(
                "Raspberry Pi 센서 데이터를 Flask API·SQLite로 수집·저장하고 IsolationForest 기반 이상 탐지 서비스를 AWS EC2에 배포",
                styles,
            ),
            bullet(
                "MCP3008 ADC로 0~1023 아날로그 값을 수집해 디지털 출력(0/1)만으로는 어려웠던 전조 변화를 분석할 수 있는 데이터 흐름을 구현",
                styles,
            ),
        ]
    )
    story.append(KeepTogether(warehouse))
    story.append(Spacer(1, 0.55 * mm))

    backend = []
    backend.extend(
        entry_header(
            "Backend Interview Tracker",
            "개인 프로젝트",
            "2024.03 - 2024.04",
            "",
            styles,
            url="https://github.com/lukemin-dev/backend-interview-tracker",
        )
    )
    backend.append(
        bullet(
            "Spring Boot REST API를 계층형 구조로 설계하고 전역 예외 처리, 페이지네이션, Swagger 문서화, 테스트를 적용",
            styles,
        )
    )
    story.append(KeepTogether(backend))
    story.append(Spacer(1, 0.55 * mm))

    organizer = []
    organizer.extend(
        entry_header(
            "File Organizer Agent",
            "개인 프로젝트",
            "2026",
            "",
            styles,
            url="https://github.com/lukemin-dev/file-organizer-agent",
        )
    )
    organizer.append(
        bullet(
            "기본 dry-run, 중복 파일명 처리, 실행 로그, pytest, GitHub Actions CI를 갖춘 Python CLI를 구현",
            styles,
        )
    )
    story.append(KeepTogether(organizer))
    story.append(Spacer(1, 1.0 * mm))

    story.extend(section("Technical Skills", styles))
    story.append(
        Paragraph(
            "<b>Backend:</b> Java, Spring Boot, Python, Flask, REST API, SQL, SQLite&nbsp;&nbsp;|&nbsp;&nbsp;"
            "<b>Cloud / Infra:</b> AWS EC2, Linux, systemd, Git, GitHub Actions<br/>"
            "<b>AI / Automation:</b> YOLO, ConvNeXt, scikit-learn, GSC API, Google Sheets API, Gemini API, ROS2&nbsp;&nbsp;|&nbsp;&nbsp;"
            "<b>Practices:</b> Input Validation, Retry, Checkpointing, Logging, Testing<br/>"
            "<b>CS:</b> 자료구조, 알고리즘, 운영체제, 데이터베이스, 네트워크, 소프트웨어공학",
            styles["skills"],
        )
    )
    story.append(Spacer(1, 0.9 * mm))

    story.extend(section("Education", styles))
    education = []
    education.extend(entry_header("전남대학교", "컴퓨터공학과", "2027.02 졸업예정", "", styles))
    education.extend(
        [
            bullet(
                "GPA 4.23/4.5 · 전공 GPA 4.4/4.5 · 학과 수석 경험 · 성적우수장학금 6회 · 수원시장학재단 우수 장학생",
                styles,
            ),
            bullet(
                "AWS Master Class·H-Mobility Class 자율주행 인지 과정 수료 · Osaka University J-SHIP 참여",
                styles,
            ),
        ]
    )
    story.append(KeepTogether(education))
    story.append(Spacer(1, 0.9 * mm))

    story.extend(section("Additional Experience", styles))
    mentoring = []
    mentoring.extend(
        entry_header(
            "대학생 청소년교육지원사업",
            "학습 멘토",
            "2025.05 - 2026.06",
            "초록어린이지역아동센터",
            styles,
        )
    )
    mentoring.append(
        bullet("총 294.5시간 동안 학생별 이해 수준에 맞춰 설명 단계를 조정하고 학습 내용을 문서화", styles)
    )
    story.append(KeepTogether(mentoring))
    story.append(Spacer(1, 0.45 * mm))

    military = []
    military.extend(
        entry_header(
            "공군",
            "군사경찰 · 병장 만기 전역",
            "2020.02 - 2021.11",
            "",
            styles,
        )
    )
    story.append(KeepTogether(military))

    doc.build(story)


if __name__ == "__main__":
    build_resume(OUT)
    print(f"Generated {OUT}")
