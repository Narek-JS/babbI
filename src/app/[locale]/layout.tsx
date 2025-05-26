import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Metadata } from "next";
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

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export const metadata: Metadata = {
  metadataBase: new URL("https://babbi.vercel.app"),
  other: { "apple-itunes-app": "app-id=<<app store i id>>" },
};

const RootLayout: React.FC<Props> = async ({ children, params }) => {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <Script
          strategy="afterInteractive"
          src={"https://www.googletagmanager.com/gtag/js?id=G - WR9Z8V707Q"}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G - WR9Z8V707Q', {
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
          "antialiased bg-[#171324]"
        )}
      >
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
