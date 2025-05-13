import { CONTENT } from "@/constants/content";

const Interactions: React.FC = () => (
  <div className="w-full mt-10 pt-5 flex flex-col gap-5">
    <h2 className="text-[#FFFFFF] text-center tracking-normal sm:tracking-[0.8px] text-[28px] md:text-[44px] lg:text-[50px] font-semibold leading-tight">
      {CONTENT.INTERACTIONS_TITLE}
    </h2>
    <p className="text-[#FFFFFF] text-center text-[14px] sm:text-[17px] md:text-[19px] lg:text-[21px] opacity-80 max-w-[650px] mx-auto">
      {CONTENT.INTERACTIONS_DESCRIPTION}
    </p>
  </div>
);

export { Interactions };
