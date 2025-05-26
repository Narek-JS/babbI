import { LegalContent } from "@/components/shared/LegalContent";
import { getTranslations } from "next-intl/server";

const PrivacyPolicy: React.FC = async () => {
  const t = await getTranslations("privacy-policy");

  const PRIVACY_POLICY = [
    { DESCRIPTION: t("description-1") },
    {
      TITLE: t("title-1"),
      DESCRIPTION: t("description-2"),
      LIST: [t("list_1-0"), t("list_1-1")],
    },
    { TITLE: t("title-2"), DESCRIPTION: t("description-3") },
    {
      TITLE: t("title-3"),
      LIST: [t("list_2-0"), t("list_2-1"), t("list_2-2"), t("list_2-3")],
    },
    {
      TITLE: t("title-4"),
      DESCRIPTION: t("description-4"),
      LONG_DESCRIPTION: t("longDescription-1"),
    },
    { TITLE: t("title-5"), DESCRIPTION: t("description-5") },
    { TITLE: t("title-6"), DESCRIPTION: t("description-6") },
    { TITLE: t("title-7"), DESCRIPTION: t("description-7") },
    { DESCRIPTION: t("description-8") },
  ];

  return (
    <main className="relative w-full py-10">
      <div className="container mx-auto flex flex-col justify-center gap-[20px] pt-10">
        <h2 className="font-bold text-[32px] sm:text-[42px] text-center text-[#FFFFFF]">
          {t("privacyPolicy-title")}
        </h2>

        <LegalContent content={PRIVACY_POLICY} />
      </div>
    </main>
  );
};

export default PrivacyPolicy;
