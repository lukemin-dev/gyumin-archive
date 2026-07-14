#!/usr/bin/env python3
import os
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import BaseDocTemplate, Frame, HRFlowable, PageTemplate, Paragraph, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parent.parent
OUT = Path(os.environ.get("RESUME_OUTPUT", ROOT / "public" / "resume.pdf"))
INK, TEXT, MUTED, RULE, BLUE = [colors.HexColor(c) for c in ("#111827", "#4B5563", "#6B7280", "#9CA3AF", "#2563EB")]


def font(*paths):
    for p in paths:
        if Path(p).exists(): return p
    raise FileNotFoundError("Install fonts-nanum")


def setup_fonts():
    pdfmetrics.registerFont(TTFont("Nanum", font(
        "/usr/share/fonts/truetype/nanum/NanumSquareR.ttf",
        "/usr/share/fonts/truetype/nanum/NanumSquareRoundR.ttf",
        "/usr/share/fonts/truetype/nanum/NanumGothic.ttf")))
    pdfmetrics.registerFont(TTFont("Nanum-Bold", font(
        "/usr/share/fonts/truetype/nanum/NanumSquareB.ttf",
        "/usr/share/fonts/truetype/nanum/NanumSquareRoundB.ttf",
        "/usr/share/fonts/truetype/nanum/NanumGothicBold.ttf")))
    pdfmetrics.registerFontFamily("Nanum", normal="Nanum", bold="Nanum-Bold")


def styles():
    return {
        "name": ParagraphStyle("name", fontName="Nanum-Bold", fontSize=21, leading=23, textColor=INK, alignment=TA_CENTER, spaceAfter=1.5*mm),
        "headline": ParagraphStyle("headline", fontName="Nanum-Bold", fontSize=9.2, leading=10.8, textColor=BLUE, alignment=TA_CENTER, spaceAfter=1.5*mm),
        "contact": ParagraphStyle("contact", fontName="Nanum", fontSize=8, leading=9.5, textColor=TEXT, alignment=TA_CENTER, spaceAfter=3*mm),
        "summary": ParagraphStyle("summary", fontName="Nanum", fontSize=8.55, leading=10.7, textColor=TEXT, wordWrap="CJK", spaceAfter=2.2*mm),
        "section": ParagraphStyle("section", fontName="Nanum-Bold", fontSize=10, leading=11.5, textColor=INK, spaceBefore=1*mm),
        "left": ParagraphStyle("left", fontName="Nanum-Bold", fontSize=9, leading=10.4, textColor=INK, wordWrap="CJK"),
        "right": ParagraphStyle("right", fontName="Nanum", fontSize=7.9, leading=9.2, textColor=MUTED, alignment=TA_RIGHT),
        "org": ParagraphStyle("org", fontName="Nanum", fontSize=7.9, leading=9.3, textColor=MUTED, spaceAfter=.6*mm),
        "bullet": ParagraphStyle("bullet", fontName="Nanum", fontSize=8.05, leading=9.7, textColor=TEXT, leftIndent=4*mm, firstLineIndent=-2.8*mm, wordWrap="CJK", spaceAfter=.35*mm),
        "skills": ParagraphStyle("skills", fontName="Nanum", fontSize=7.8, leading=9.45, textColor=TEXT, wordWrap="CJK"),
    }


def sec(title, s):
    return [Paragraph(title.upper(), s["section"]), HRFlowable(width="100%", thickness=.55, color=RULE, spaceBefore=.4*mm, spaceAfter=1.7*mm)]


def head(title, role, date, org, s):
    left = title if not role else f"{title} | {role}"
    t = Table([[Paragraph(left, s["left"]), Paragraph(date, s["right"])]], colWidths=[145*mm, 34*mm])
    t.setStyle(TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"),("LEFTPADDING",(0,0),(-1,-1),0),("RIGHTPADDING",(0,0),(-1,-1),0),("TOPPADDING",(0,0),(-1,-1),0),("BOTTOMPADDING",(0,0),(-1,-1),0)]))
    return [t, Paragraph(org, s["org"]) if org else Spacer(1,.6*mm)]


def b(text, s): return Paragraph(f"• {text}", s["bullet"])


def footer(c, _):
    c.saveState(); c.setFont("Nanum",7.2); c.setFillColor(MUTED)
    text="프로젝트 상세 및 증명 자료: gyumin-archive.vercel.app"; right=A4[0]-15*mm; y=8.5*mm
    c.drawRightString(right,y,text); w=pdfmetrics.stringWidth(text,"Nanum",7.2)
    c.linkURL("https://gyumin-archive.vercel.app",(right-w,y-1,right,y+8),relative=0); c.restoreState()


def build():
    setup_fonts(); s=styles(); OUT.parent.mkdir(parents=True,exist_ok=True)
    doc=BaseDocTemplate(str(OUT),pagesize=A4,leftMargin=15*mm,rightMargin=15*mm,topMargin=12*mm,bottomMargin=16*mm,title="이규민 이력서",author="Lee Gyumin",subject="Backend Cloud Automation Engineer Resume",keywords="Backend, Cloud, Automation, Python, Java, AWS, ROS2",pageCompression=1)
    doc.addPageTemplates(PageTemplate(id="resume",frames=[Frame(doc.leftMargin,doc.bottomMargin,doc.width,doc.height,id="frame")],onPage=footer))
    x=[]
    x += [Paragraph("이규민",s["name"]), Paragraph("BACKEND · CLOUD · AUTOMATION ENGINEER",s["headline"]), Paragraph(
        '010-5838-6229&nbsp;&nbsp;|&nbsp;&nbsp;<link href="mailto:lgmlgm227@naver.com" color="#4B5563">lgmlgm227@naver.com</link>&nbsp;&nbsp;|&nbsp;&nbsp;<link href="https://github.com/lukemin-dev" color="#4B5563">github.com/lukemin-dev</link>&nbsp;&nbsp;|&nbsp;&nbsp;<link href="https://gyumin-archive.vercel.app" color="#4B5563">gyumin-archive.vercel.app</link>',s["contact"]), Paragraph(
        "Python·Java 기반 API와 자동화 파이프라인을 구축하고 AWS/Linux 환경에 배포해온 컴퓨터공학도입니다. <b>일본 IT 기업 인턴에서 2~3일 걸리던 SEO 분석 업무를 약 10초로 단축</b>했으며, 현재 한국생산기술연구원에서 ROS2 기반 자율주행 데이터 처리와 재현 가능한 연구 기록 방식을 익히고 있습니다.",s["summary"])]
    x += sec("Experience",s) + head("한국생산기술연구원","자율주행 연구 현장실습 인턴","2026.07 - 2026.12","모빌리티 핵심부품소재센터 · 광주 · 진행 중",s)
    x += [b("ROS2 노드·토픽·서비스 구조를 실습하고 SLAM 관련 오픈소스의 실행 환경과 데이터 흐름을 분석",s),b("오픈데이터셋과 오픈소스 알고리즘 구현 실습을 진행하며 입력 조건, 실행 로그, 관찰 결과를 같은 형식으로 문서화",s),b("토픽 이름·메시지 타입·실행 명령을 먼저 확인하는 절차를 적용하고, 이후 실환경 플랫폼 데이터 수집·처리 프로젝트로 확장 예정",s),Spacer(1,1.2*mm)]
    x += head("Crosslink","AI SEO 자동화 인턴","2026.01 - 2026.02","요코하마, 일본",s)
    x += [b("Python, GSC API, Google Sheets API, Gemini API를 연동해 데이터 수집-정제-스코어링-리포트 생성을 자동화",s),b("수작업으로 2~3일 걸리던 SEO 분석 및 보고서 생성 시간을 약 10초로 단축",s),b("Quota Exceeded와 응답 지연에 대응해 Flash 모델 전환, 모델 감지, 재시도, 체크포인트, 입력 스키마 검증을 구현",s),Spacer(1,1.5*mm)]
    x += sec("Selected Projects",s) + head("창고 화재·이상 징후 감지 시스템","팀장 · 기여도 50%","2026.03 - 2026.07","",s)
    x += [b("Raspberry Pi 센서 데이터를 Flask API와 SQLite에 저장하고 IsolationForest로 이상 징후를 판정해 AWS EC2에 배포",s),b("MCP3008 ADC를 적용해 0/1 디지털 출력의 한계를 보완하고 0~1023 아날로그 값 기반 전조 감지 흐름을 구현",s),Spacer(1,.8*mm)]
    x += head("Backend Interview Tracker","개인 프로젝트","2024.03 - 2024.04","",s)+[b("Spring Boot REST API에 DTO-Controller-Service 계층, 전역 예외 처리, 페이지네이션, Swagger 문서화와 테스트를 적용",s),Spacer(1,.8*mm)]
    x += head("File Organizer Agent","개인 프로젝트","2026","",s)+[b("Python CLI에 기본 dry-run, 중복 파일명 처리, 로그, pytest 단위·통합 테스트와 GitHub Actions CI를 적용",s),Spacer(1,1.4*mm)]
    x += sec("Technical Foundation",s)+[Paragraph("<b>Backend:</b> Python, Java, Spring Boot, Flask, REST API, SQL, SQLite&nbsp;&nbsp;|&nbsp;&nbsp;<b>Cloud / Infra:</b> AWS EC2, Linux, systemd, Git, GitHub Actions&nbsp;&nbsp;|&nbsp;&nbsp;<b>Automation / Data:</b> GSC API, Google Sheets API, Gemini API, ROS2, scikit-learn<br/><b>Engineering:</b> Input Validation, Retry Logic, Checkpointing, Logging, Testing&nbsp;&nbsp;|&nbsp;&nbsp;<b>Coursework:</b> Data Structures, Algorithms, Operating Systems, Databases, Networks, Software Engineering",s["skills"]),Spacer(1,1.3*mm)]
    x += sec("Education",s)+head("전남대학교","컴퓨터공학과","2027.02 졸업예정","",s)
    x += [b("GPA 4.23/4.5 · 전공 GPA 4.4/4.5 · 학과 수석 경험 · 성적우수장학금 6회 · 수원시장학재단 우수 장학생",s),b("AWS Master Class 수료 · H-Mobility Class 자율주행 인지 과정 수료 · Osaka University J-SHIP 참여",s),Spacer(1,1.2*mm)]
    x += sec("Additional Experience",s)+head("대학생 청소년교육지원사업","학습 멘토","2025.05 - 2026.06","초록어린이지역아동센터",s)
    x += [b("총 294.5시간 동안 학생별 이해 수준에 맞춰 설명 단계를 조정하고 학습 내용을 문서화",s),b("공군 병장 만기 전역 (2020.02 - 2021.11)",s)]
    doc.build(x)

if __name__ == "__main__":
    build(); print(f"Generated {OUT}")
