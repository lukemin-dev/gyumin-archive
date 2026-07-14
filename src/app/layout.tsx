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

const siteDescription =
  "반복 업무를 자동화하고, 입력 검증·로그·재시도·체크포인트를 통해 재현 가능한 시스템을 만드는 이규민의 개발 포트폴리오입니다.";

export const metadata: Metadata = {
  metadataBase: new URL("https://gyumin-archive.vercel.app"),
  title: "이규민 | Backend · Cloud · Automation",
  description: siteDescription,
  applicationName: "이규민 포트폴리오",
  authors: [{ name: "Gyumin Lee" }],
  creator: "Gyumin Lee",
  keywords: [
    "이규민",
    "Gyumin Lee",
    "Backend",
    "Cloud",
    "Automation",
    "Python",
    "Spring Boot",
    "ROS2",
  ],
  openGraph: {
    title: "이규민 | Backend · Cloud · Automation",
    description: siteDescription,
    url: "/",
    siteName: "이규민 포트폴리오",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "이규민 | Backend · Cloud · Automation",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <Header />
        <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
