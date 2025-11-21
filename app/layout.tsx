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
  title: "Infocreon - Novel Digital Creators",
  description:
    "Digital Transformation Through Digital Wisdom - InfoCreon is committed to providing innovative and novel digital aid to its clientele, delivering exceptional technology solutions that drive business success.",
  keywords: [
    "IT solutions",
    "Digital transformation",
    "Software development",
    "Web development",
    "Mobile app development",
    "Cloud solutions",
    "Enterprise solutions",
    "Custom software",
    "Technology consulting",
    "IT services",
    "AI Strategy & Consulting",
    "GenAI Applications",
    "Agentic AI Systems",
    "Data Science Solutions",
    "Information and Security Consulting",
    "Digital Marketing",
    "Artificial Intelligence and Machine Learning",
    "Infocreon",
    "Novel Digital Creators",
    "Digital problem solving",
    "Innovative IT solutions",
    "Business process automation",
    "End-to-end solutions",
    "Smart technology solutions",
    "Problem to solution IT",
    "Scalable digital solutions",
    "Tailored IT services",
    "Digital innovation",
    "Technology-driven solutions",
    "IT consulting company",
    "Digital strategy services",
    "Cloud migration services",
    "AI and automation solutions",
    "SaaS product development",
    "IT outsourcing services",
    "Data-driven solutions",
    "IT support and maintenance",
    "Digital business solutions",
    "Next-gen technology solutions",
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
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
