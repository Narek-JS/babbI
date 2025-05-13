"use client";

import { useHeaderAnimation } from "@/hooks/useHeaderAnimation";
import { CONTENT } from "@/constants/content";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const { active } = useHeaderAnimation();
  const pathname = usePathname();

  return (
    <header
      className={classNames(
        " w-full flex items-center h-[var(--header-height)] fixed z-10 -translate-y-[var(--header-height)] transition-all duration-300",
        {
          "translate-y-0": active || pathname !== "/",
          "bg-[#FFFFFF] shadow": pathname !== "/",
          "bg-[linear-gradient(to_bottom,_#111121cc_50%,_rgba(17,17,33,0)_100%)]":
            pathname === "/",
        }
      )}
    >
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-between gap-[7px] sm:gap-[20px]">
          <Link
            href="/#home"
            className="flex items-center gap-1.5 cursor-pointer"
          >
            <Image
              className="w-[35px] h-[35px]"
              src="/images/logo.webp"
              alt={CONTENT.LOGO_ALT}
              height={35}
              width={35}
            />
            <span
              className={classNames("text-[22px]", {
                "text-[#FFFFFF]": pathname === "/",
              })}
            >
              {CONTENT.LOGO_TEXT}
            </span>
          </Link>

          <Link
            className="flex items-center justify-center h-[42px] sm:h-[48px] rounded-2xl bg-[#0e66b3] text-[#FFFFFF] max-w-fit px-5 sm:px-7 cursor-pointer"
            href="https://play.google.com/store/apps/details?id=com.facebook.katana"
          >
            {CONTENT.GET_STARTED_BUTTON}
          </Link>
        </div>
      </div>
    </header>
  );
};

export { Header };
