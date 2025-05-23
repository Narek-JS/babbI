import { LegalContent } from "@/components/shared/LegalContent";
import { TERMS_CONDITIONS } from "@/constants/termsConditions";
import { CONTENT } from "@/constants/content";

const TermsConditions: React.FC = () => (
  <main className="relative w-full py-10">
    <div className="container mx-auto flex flex-col justify-center gap-[20px] pt-10">
      <h2 className="font-bold text-[32px] sm:text-[42px] text-center text-[#FFFFFF]">
        {CONTENT.TERMS_AND_CONDITIONS}
      </h2>

      <LegalContent content={TERMS_CONDITIONS} />
    </div>
  </main>
);

export default TermsConditions;
