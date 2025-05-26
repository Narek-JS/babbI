import {
  ConfigurationSection,
  InteractionsSection,
  ChatHistorySection,
  BannerSection,
  SliderSection,
  VideoSection,
  FaqsSection,
} from "@/components/sections";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const Home: React.FC = () => (
  <main className="w-full mx-auto mb-15 sm:mb-40 flex flex-col gap-15 sm:gap-40">
    <BannerSection />
    <VideoSection />
    <ConfigurationSection />
    <ChatHistorySection />
    <SliderSection />
    <InteractionsSection />
    <FaqsSection />
  </main>
);

export default Home;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: (await params).locale,
    namespace: "metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      siteName: t("ogSiteName"),
      url: "https://babbi.vercel.app",
      images: [
        {
          url: "https://babbi.vercel.app/images/bannerImage.png",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["https://babbi.vercel.app/images/bannerImage.png"],
    },
  };
}
