import { getTranslations } from "next-intl/server";
import { FAQItem } from "./Item";

const Faq: React.FC = async () => {
  const t = await getTranslations("faq");

  const FAQS = [
    { QUESTION: t("question-1"), ANSWER: t("answer-1") },
    { QUESTION: t("question-2"), ANSWER: t("answer-2") },
    { QUESTION: t("question-3"), ANSWER: t("answer-3") },
    { QUESTION: t("question-4"), ANSWER: t("answer-4") },
    { QUESTION: t("question-5"), ANSWER: t("answer-5") },
  ];

  return (
    <section className="w-full bg-[#171324] py-5" id="faqs">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-[20px]">
          <h2 className="text-[#FFFFFF] mb-3 mx-auto text-center sm:text-left tracking-normal sm:tracking-[0.7px] text-[28px] md:text-[44px] lg:text-[50px] font-semibold leading-tight">
            {t("title")}
          </h2>

          {FAQS.map(({ ANSWER, QUESTION }, index) => (
            <FAQItem question={QUESTION} answer={ANSWER} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Faq };
