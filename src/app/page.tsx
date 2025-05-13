import { Interactions } from "@/components/Interactions";
import { Configs } from "@/components/Configs";
import { CONTENT } from "@/constants/content";
import { Banner } from "@/components/Banner";
import Link from "next/link";

const Home: React.FC = () => (
  <main className="w-full bg-[#090918]">
    <div className="container mx-auto flex flex-col gap-5">
      <Banner />
      <Configs />
      <Interactions />
      <div className="w-full flex items-center justify-center gap-3.5 pb-2.5 opacity-80 text-[#FFFFFF] text-[14px]">
        <Link href="/privacy-policy">{CONTENT.PRIVACY_POLICY}</Link>
        <Link href="/terms-and-conditions">{CONTENT.TERMS_AND_CONDITIONS}</Link>
      </div>
    </div>
  </main>
);

export default Home;
