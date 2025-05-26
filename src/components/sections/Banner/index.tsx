import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

const Banner: React.FC = async () => {
  const commonT = await getTranslations("common");
  const t = await getTranslations("banner");

  return (
    <section className="w-full bg-[#171324] pb-5 pt-7 lg:pt-13" id="home">
      <div className="container mx-auto">
        <div className="flex justify-evenly items-center">
          <Image
            className="object-contain h-min max-w-[150px] sm:max-w-[200px] md:max-w-[350px] lg:max-w-[450] w-full"
            src="/images/bannerImage.png"
            alt={t("bannerImageAlt")}
            height={450}
            width={500}
          />

          <div className="flex flex-col gap-4 md:gap-7 max-w-[600px]">
            <h1 className="text-[#FFFFFF] tracking-normal sm:tracking-[0.8px] text-[34px] md:text-[54px] lg:text-[62px] font-semibold leading-tight min-w-[215px]">
              {t("title")}
            </h1>
            <p className="text-[#FFFFFF] text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] opacity-80 max-w-[500px]">
              {t("description")}
            </p>
            <div className="flex items-center gap-3.5">
              <Link
                href="https://play.google.com/store/apps/details?id=com.facebook.katana"
                className="max-w-fit cursor-pointer"
              >
                <Image
                  src="/images/app-store.webp"
                  alt={commonT("appStore")}
                  width={142}
                  height={41}
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.facebook.katana"
                className="max-w-fit cursor-pointer"
              >
                <Image
                  src="/images/google-play.webp"
                  alt={commonT("googlePlay")}
                  width={142}
                  height={41}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Banner };
