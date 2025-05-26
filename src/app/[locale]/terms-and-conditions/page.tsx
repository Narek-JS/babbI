import { LegalContent } from "@/components/shared/LegalContent";
import { getTranslations } from "next-intl/server";

const TermsConditions: React.FC = async () => {
  const t = await getTranslations("terms-conditions");

  const TERMS_CONDITIONS = [
    { DESCRIPTION: t("description-1") },
    { DESCRIPTION: t("description-2") },
    { TITLE: t("title-1"), DESCRIPTION: t("description-3") },
    {
      TITLE: t("title-2"),
      DESCRIPTION: t("description-4"),
      LIST: [t("list_1-0"), t("list_1-1"), t("list_1-2"), t("list_1-3")],
      LONG_DESCRIPTION: t("longDescription-1"),
    },
    {
      TITLE: t("title-3"),
      DESCRIPTION: t("description-5"),
      LIST: [t("list_2-0"), t("list_2-1"), t("list_2-2")],
      LONG_DESCRIPTION: t("longDescription-2"),
    },
    { TITLE: t("title-4"), DESCRIPTION: t("description-6") },
    {
      DESCRIPTION: t("description-7"),
      LIST: [t("list_3-0"), t("list_3-1"), t("list_3-2")],
      LONG_DESCRIPTION: t("longDescription-3"),
    },
    { DESCRIPTION: t("description-8") },
    {
      TITLE: t("title-5"),
      DESCRIPTION: t("description-9"),
      LIST: [t("list_4-0"), t("list_4-1"), t("list_4-2")],
      LONG_DESCRIPTION: t("longDescription-4"),
    },
    { TITLE: t("title-6"), DESCRIPTION: t("description-10") },
    { TITLE: t("title-7"), DESCRIPTION: t("description-11") },
    { TITLE: t("title-8"), DESCRIPTION: t("description-12") },
    { TITLE: t("title-9"), DESCRIPTION: t("description-13") },
    { TITLE: t("title-10"), DESCRIPTION: t("description-14") },
    { TITLE: t("title-11"), DESCRIPTION: t("description-15") },
  ];

  return (
    <main className="relative w-full py-10">
      <div className="container mx-auto flex flex-col justify-center gap-[20px] pt-10">
        <h2 className="font-bold text-[32px] sm:text-[42px] text-center text-[#FFFFFF]">
          {t("termsConditions-title")}
        </h2>

        <LegalContent content={TERMS_CONDITIONS} />
      </div>
    </main>
  );
};

export default TermsConditions;
