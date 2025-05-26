import { getTranslations } from "next-intl/server";
import Image from "next/image";

const Configuration: React.FC = async () => {
  const t = await getTranslations("configuration");
  const commonT = await getTranslations("common");

  return (
    <section className="w-full bg-[#171324] py-5" id="configuration">
      <div className="container mx-auto">
        <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-between gap-5">
          <Image
            alt={t("configurationImageAlt")}
            className="object-contain max-w-[550px] min-w-[320px] md:min-w-[445px] w-full max-h-[600px]"
            src="/images/configuration.png"
            width={550}
            height={600}
          />
          <div className="flex flex-col gap-4 md:gap-7 max-w-[750px]">
            <h2 className="text-[#FFFFFF] text-center sm:text-left tracking-normal sm:tracking-[0.7px] text-[28px] md:text-[44px] lg:text-[50px] font-semibold leading-tight">
              {commonT("configuration")}
            </h2>
            <p className="text-[#FFFFFF] text-center sm:text-left text-[14px] sm:text-[17px] md:text-[19px] lg:text-[21px] opacity-80">
              {t("description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Configuration };
