import { CONTENT } from "@/constants/content";
import Image from "next/image";
import Link from "next/link";

const Banner: React.FC = () => (
  <div className="w-full py-5 flex flex-col gap-14" id="home">
    <div className="flex items-center gap-1.5">
      <Image
        className="w-[35px] h-[35px]"
        src="/images/logo.webp"
        alt={CONTENT.LOGO_ALT}
        height={35}
        width={35}
      />
      <span className="text-[#FFFFFF] text-[22px]">{CONTENT.LOGO_TEXT}</span>
    </div>

    <div className="flex justify-between">
      <Image
        alt={CONTENT.BANNER_IMAGE_ALT}
        src="/images/bannerImage.png"
        className="object-contain h-min max-w-[150px] sm:max-w-[200px] md:max-w-[350px] w-full"
        height={350}
        width={350}
      />

      <div className="flex flex-col gap-4 md:gap-7 max-w-[500px]">
        <h1 className="text-[#FFFFFF] tracking-normal sm:tracking-[0.8px] text-[34px] md:text-[54px] lg:text-[62px] font-semibold leading-tight min-w-[215px]">
          {CONTENT.TITLE}
        </h1>
        <p className="text-[#FFFFFF] text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] opacity-80 max-w-[350px]">
          {CONTENT.DESCRIPTION}
        </p>
        <Link
          className="flex items-center justify-center h-[42px] sm:h-[48px] rounded-2xl bg-[#0e66b3] text-[#FFFFFF] max-w-fit px-5 sm:px-7 cursor-pointer"
          href="https://play.google.com/store/apps/details?id=com.facebook.katana"
        >
          {CONTENT.GET_STARTED_BUTTON}
        </Link>
      </div>
    </div>
  </div>
);

export { Banner };
