import {
  ConfigurationSection,
  InteractionsSection,
  ChatHistorySection,
  BannerSection,
  SliderSection,
  VideoSection,
  FaqsSection,
} from "@/components/sections";

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
