import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const siteUrl = "https://gyumin-archive.vercel.app";
const siteDescription =
  "센서·PLC·카메라가 연결된 현장 시스템과 백엔드·자동화 프로젝트를 기록한 이규민의 개발 포트폴리오입니다.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "이규민 | Backend · Cloud · Automation",
  description: siteDescription,
  applicationName: "이규민 포트폴리오",
  authors: [{ name: "Gyumin Lee", url: siteUrl }],
  creator: "Gyumin Lee",
  alternates: {
    canonical: "/",
    languages: {
      "ko-KR": "/",
      "en-US": "/en",
      "ja-JP": "/jp",
    },
    types: {
      "application/rss+xml": "/feed.xml",
    },
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
  verification: {
    google: "BQ413X8nbm4_arZBeDcGxtp7xi-pVK_WhRVhGZvvmm4",
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
      knowsLanguage: ["Korean", "English", "Japanese"],
    },
    {
      "@type": "WebSite",
      name: "이규민 포트폴리오",
      url: siteUrl,
      description: siteDescription,
      inLanguage: ["ko-KR", "en-US", "ja-JP"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased" data-scroll-behavior="smooth">
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
        <ContactCTA />
        <Footer />
      </body>
    </html>
  );
}
