import { CONTENT } from "@/constants/content";
import Image from "next/image";

const Configs: React.FC = () => (
  <div className="w-full py-5 lg:px-20 flex flex-col sm:flex-row gap-20 sm:gap-0 justify-between items-center">
    <div className="flex flex-col gap-4 md:gap-7">
      <h2 className="text-[#FFFFFF] text-center sm:text-left tracking-normal sm:tracking-[0.7px] text-[28px] md:text-[44px] lg:text-[50px] font-semibold leading-tight max-w-[350px]">
        {CONTENT.CONFIG_1_SUB_TITLE}
      </h2>
      <p className="text-[#FFFFFF] text-center sm:text-left text-[14px] sm:text-[17px] md:text-[19px] lg:text-[21px] opacity-80 max-w-[320px]">
        {CONTENT.CONFIG_1_SUB_DESCRIPTION}
      </p>
      <Image
        alt={CONTENT.CONFIG_IMAGE_1_ALT}
        className="object-contain sm:max-w-[300px]"
        src="/images/config-1.png"
        width={300}
        height={300}
      />
    </div>
    <div className="flex flex-col-reverse sm:flex-col items-center gap-4 md:gap-7">
      <Image
        alt={CONTENT.CONFIG_IMAGE_2_ALT}
        className="w-full sm:max-w-[300px] sm:max-h-[450px] object-contain"
        src="/images/config-2.png"
        width={300}
        height={500}
      />
      <div className="flex flex-col gap-4 md:gap-7">
        <h2 className="text-[#FFFFFF] text-center sm:text-left tracking-normal sm:tracking-[0.7px] text-[28px] md:text-[44px] lg:text-[50px] font-semibold leading-tight">
          {CONTENT.CONFIG_2_SUB_TITLE}
        </h2>
        <p className="text-[#FFFFFF] text-center sm:text-left text-[14px] sm:text-[17px] md:text-[19px] lg:text-[21px] opacity-80 max-w-[320px]">
          {CONTENT.CONFIG_2_SUB_DESCRIPTION}
        </p>
      </div>
    </div>
  </div>
);

export { Configs };
