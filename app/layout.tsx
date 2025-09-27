import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { Footer } from "@/components/footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tôn giáo trong Lý thuyết Mác-Lênin | Chính sách Việt Nam",
  description:
    "Bài thuyết trình tương tác về tôn giáo trong lý thuyết Mác-Lênin và chính sách tôn giáo của Việt Nam",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`font-sans ${openSans.variable} ${montserrat.variable} ${GeistMono.variable} min-h-screen flex flex-col`}
        suppressHydrationWarning={true}
      >
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
