import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "NoDak Solutions | Web Development Services",
  description:
    "Full-stack web development services in North Dakota. Custom websites, web applications, and performance optimization for businesses.",
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
      </body>
    </html>
  );
}
