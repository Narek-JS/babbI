"use client";

import { useLocale } from "next-intl";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const LanguageSwitcher: FC = () => {
  const locale = useLocale();

  return (
    <div className="group relative">
      <div className="flex items-center justify-center w-8 h-8 leading-none rounded-full bg-[#3b3b3b] cursor-pointer">
        <Image
          src={
            "/flags/" +
            (locale.includes("en") ? "united-kingdom.svg" : "armenia.svg")
          }
          alt={(locale.includes("en") ? "United-kingdom" : "Armenia") + " Flag"}
          height={20}
          width={20}
        />
      </div>
      <div className="min-w-[40px] absolute top-full right-1/2 leading-none opacity-0 invisible translate-x-1/2 transition-all duration-300 group-hover:opacity-100 group-hover:visible">
        <div className="bg-[#FFFFFF] rounded-md pt-[10px] px-2 pb-[1px] mt-2 flex flex-col items-center gap-[5px]">
          <Link className="block mb-[8px]" locale="en" href="/">
            <Image
              className="rounded-full"
              src="/flags/united-kingdom.svg"
              alt="United-kingdom Flag"
              height={20}
              width={20}
            />
          </Link>
          <Link className="block mb-[8px]" locale="hy" href="/hy">
            <Image
              className="rounded-full"
              src="/flags/armenia.svg"
              alt="Armenia Flag"
              height={20}
              width={20}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
