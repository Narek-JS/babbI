import {
  ConfigurationSection,
  InteractionsSection,
  ChatHistorySection,
  BannerSection,
  SliderSection,
  VideoSection,
  FaqsSrction,
} from "@/components/sections";
import { CONTENT } from "@/constants/content";
import Link from "next/link";

const Home: React.FC = () => (
  <main className="w-full bg-[#FFFFFF]  mx-auto flex flex-col gap-5">
    <BannerSection />
    <VideoSection />
    <ConfigurationSection />
    <ChatHistorySection />
    <SliderSection />
    <InteractionsSection />
    <FaqsSrction />
    <div className="w-full flex items-center justify-center gap-3.5 pb-2.5 opacity-80 text-[#FFFFFF] text-[14px]">
      <Link href="/privacy-policy">{CONTENT.PRIVACY_POLICY}</Link>
      <Link href="/terms-and-conditions">{CONTENT.TERMS_AND_CONDITIONS}</Link>
    </div>
  </main>
);

export default Home;
