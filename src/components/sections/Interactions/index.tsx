import { getTranslations } from "next-intl/server";

const Interactions: React.FC = async () => {
  const t = await getTranslations("interactions");

  return (
    <section className="w-full bg-[#171324] py-5" id="configuration">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-5">
          <h2 className="text-[#FFFFFF] text-center tracking-normal sm:tracking-[0.8px] text-[28px] md:text-[44px] lg:text-[50px] font-semibold leading-tight">
            {t("title")}
          </h2>
          <p className="text-[#FFFFFF] text-center text-[14px] sm:text-[17px] md:text-[19px] lg:text-[21px] opacity-80 max-w-[650px] mx-auto">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export { Interactions };
