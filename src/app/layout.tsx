import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "메타링크 | 기술과 사람을 잇는 AI 파트너",
  description:
    "메타링크는 AI 콜봇·챗봇, RAG/LLM, 시스템 구축·운영, 통합 디지털 마케팅을 하나의 흐름으로 연결하는 AI 파트너입니다.",
  icons: {
    icon: "/seo/favicon.png",
  },
  openGraph: {
    title: "메타링크 | 기술과 사람을 잇는 AI 파트너",
    description:
      "메타링크는 AI 콜봇·챗봇, RAG/LLM, 시스템 구축·운영, 통합 디지털 마케팅을 하나의 흐름으로 연결하는 AI 파트너입니다.",
    images: ["/seo/og_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nanum+Brush+Script&family=Nanum+Pen+Script&display=swap"
          precedence="default"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
