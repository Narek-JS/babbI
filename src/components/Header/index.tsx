"use client";

import { CONTENT } from "@/constants/content";
import { Fragment } from "react";

import LanguageSwitcher from "../LanguageSwitcher";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => (
  <Fragment>
    <header className="bg-gradient-to-b from-[#171324] via-[#171324]/70 to-transparent z-50 h-[var(--header-height)] w-full fixed top-0 left-0">
      <div className="container mx-auto">
        <div className="w-full h-[var(--header-height)] flex items-center justify-between gap-[7px] sm:gap-[20px]">
          <Link href="/#home" className="cursor-pointer">
            <Image
              className="object-contain w-[122px] h-[41px]"
              src="/images/logo.png"
              alt={CONTENT.LOGO_ALT}
              height={41}
              width={122}
            />
          </Link>

          <div className="flex items-center justify-center gap-3.5 sm:gap-[40px]">
            <Link href="/" className="text-[#FFFFFF] cursor-pointer">
              About Us
            </Link>
            <Link href="/" className="text-[#FFFFFF] cursor-pointer">
              Contact Us
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
    <div className="h-[64px] w-0" />
  </Fragment>
);

export { Header };
