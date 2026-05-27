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

export const metadata: Metadata = {
  title: "이규민 | Gyumin Lee",
  description:
    "자동화와 시스템 운영에 관심 있는 컴퓨터공학도 이규민의 포트폴리오입니다. 같은 문제가 반복되지 않게 기준을 만들고 로그를 남기는 구조를 고민합니다.",
  openGraph: {
    title: "이규민 | Cloud · Backend · Automation",
    description: "자동화와 시스템 운영에 관심 있는 컴퓨터공학도 이규민의 경험 정리입니다.",
    url: "https://gyumin-archive.vercel.app", // 배포 후 실제 도메인으로 변경하세요
    siteName: "이규민 포트폴리오",
    locale: "ko_KR",
    type: "website",
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
