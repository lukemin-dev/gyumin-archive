import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://gyumin-archive.vercel.app";
const siteDescription =
  "반복 업무를 자동화하고, 입력 검증·로그·재시도·체크포인트를 통해 재현 가능한 시스템을 만드는 이규민의 개발 포트폴리오입니다.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "이규민 | Backend · Cloud · Automation",
  description: siteDescription,
  applicationName: "이규민 포트폴리오",
  authors: [{ name: "Gyumin Lee", url: siteUrl }],
  creator: "Gyumin Lee",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "이규민",
    "Gyumin Lee",
    "Backend",
    "Cloud",
    "Automation",
    "Python",
    "Spring Boot",
    "AI Vision",
    "PLC",
  ],
  openGraph: {
    title: "이규민 | Backend · Cloud · Automation",
    description: siteDescription,
    url: "/",
    siteName: "이규민 포트폴리오",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "이규민 Backend Cloud Automation 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "이규민 | Backend · Cloud · Automation",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "이규민",
      alternateName: "Gyumin Lee",
      url: siteUrl,
      email: "mailto:lgmlgm227@naver.com",
      sameAs: ["https://github.com/lukemin-dev"],
      jobTitle: "Backend · Cloud · Automation Engineer",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "전남대학교",
      },
      knowsAbout: [
        "Backend Development",
        "Cloud Infrastructure",
        "Workflow Automation",
        "AI Vision",
        "PLC Integration",
      ],
    },
    {
      "@type": "WebSite",
      name: "이규민 포트폴리오",
      url: siteUrl,
      description: siteDescription,
      inLanguage: ["ko-KR", "en"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a href="#main-content" className="skip-link">
          본문으로 바로가기
        </a>
        <Header />
        <main
          id="main-content"
          className="flex-1 w-full max-w-5xl mx-auto px-5 sm:px-6 py-10 sm:py-14"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
