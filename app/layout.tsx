import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatBot from "@/components/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoDak Solutions | Web Development & AI Services",
  description:
    "Full-stack web development and AI integration services in North Dakota. Custom websites, web applications, AI chatbots, and automation solutions for businesses.",
  keywords: [
    "web development",
    "North Dakota",
    "freelance developer",
    "Next.js",
    "React",
    "Fargo",
    "Software",
    "Fargo Software",
    "Software Fargo",
    "AI integration",
    "chatbots",
    "AI automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
