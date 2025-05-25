import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#262134] pb-5 pt-10" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8 sm:gap-12">
          <div className="w-full flex flex-wrap sm:flex-nowrap gap-8 justify-evenly sm:justify-between lg:justify-evenly">
            <div className="flex flex-col gap-3.5">
              <p className="text-[#FFFFFF] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[26px] font-bold">
                Our Story
              </p>
              <Link
                href="/"
                className="text-[#FFFFFF] text-[14px] md:text-[15px] lg:text-[16px] "
              >
                About Us
              </Link>
              <Link
                href="/"
                className="text-[#FFFFFF] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] "
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="text-[#FFFFFF] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] "
              >
                Configuration
              </Link>
            </div>
            <div className="flex flex-col gap-3.5">
              <p className="text-[#FFFFFF] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[26px] font-bold">
                Grown Up Stuff
              </p>
              <Link
                href="/"
                className="text-[#FFFFFF] text-[14px] md:text-[15px] lg:text-[16px] "
              >
                FAQs
              </Link>
              <Link
                href="/"
                className="text-[#FFFFFF] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] "
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-[#FFFFFF] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] "
              >
                Terms & Conditions
              </Link>
            </div>
            <div className="flex flex-col gap-3.5">
              <Link
                className="max-w-fit cursor-pointer"
                href="https://play.google.com/store/apps/details?id=com.facebook.katana"
              >
                <Image
                  alt="App store"
                  src="/images/app-store.webp"
                  width={142}
                  height={41}
                />
              </Link>
              <Link
                className="max-w-fit cursor-pointer"
                href="https://play.google.com/store/apps/details?id=com.facebook.katana"
              >
                <Image
                  alt="Google play"
                  src="/images/google-play.webp"
                  width={142}
                  height={41}
                />
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Link href="https://www.facebook.com/narek.petrosyan.52012">
              <Facebook size={32} color="#FFFFFF" />
            </Link>
            <Link href="https://www.instagram.com/petrosyan8102">
              <Instagram size={32} color="#FFFFFF" />
            </Link>
            <Link href="https://x.com/aniboghoss">
              <Twitter size={32} color="#FFFFFF" />
            </Link>
          </div>

          <div className="flex flex-col items-center gap-5">
            <Link href="/#home" className="cursor-pointer">
              <Image
                className="object-contain w-[250px] h-auto"
                src="/images/logo.jpg"
                alt="alt"
                height={75}
                width={250}
              />
            </Link>

            <div className="flex flex-col items-center">
              <p className="text-[#FFFFFF] text-[13px] sm:text-[14px] opacity-75">
                © 2025 Curio Interactive Inc.
              </p>
              <p className="text-[#FFFFFF] text-[13px] sm:text-[14px] opacity-75">
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
