// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "オカピＡＩエージェント株式会社 | エンタープライズ向け AI エージェント構築",
  description:
    "エンタープライズ向けに安全でスケーラブルな AI エージェント・RAG・業務自動化ソリューションを提供します。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} font-sans bg-neutral-50 text-neutral-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
