import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import classNames from "classnames";

import Script from "next/script";

import "../../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Babbl – AI-Powered Speaking Doll",
  description:
    "Babbl is an AI-powered interactive doll that engages your child in conversation. Configure the doll’s voice, monitor interactions, and review chat history—all through the companion app.",
  keywords: [
    "AI doll",
    "interactive toy",
    "smart doll",
    "child development",
    "parental controls",
    "doll configuration",
    "chat history",
    "AI-powered speaking doll",
  ],
  openGraph: {
    title: "Babbl – AI-Powered Speaking Doll",
    description:
      "An interactive doll that talks with your child using AI. Customize settings, review chat history, and manage interactions effortlessly.",
    siteName: "Babbl",

    url: "https://babbi.vercel.app",
    images: [
      {
        url: "https://babbi.vercel.app/images/bannerImage.webp",
        width: 1200,
        height: 630,
        alt: "Babbl AI Doll",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Babbl – AI-Powered Speaking Doll",
    description:
      "Talk, configure, and monitor: Babbl is a smart doll that interacts with your child through AI.",
    images: ["https://babbi.vercel.app/images/bannerImage.webp"],
  },
};

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const TAG_MANAGER_ID = process.env.TAG_MANAGER_ID;

const RootLayout: React.FC<Props> = async ({ children, params }) => {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <Script
          strategy="afterInteractive"
          src={"https://www.googletagmanager.com/gtag/js?id=" + TAG_MANAGER_ID}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${TAG_MANAGER_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={classNames(
          geistSans.variable,
          geistMono.variable,
          inter.variable,
          "antialiased"
        )}
      >
        <NextIntlClientProvider>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
