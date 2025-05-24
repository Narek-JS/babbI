import { FAQItem } from "./Item";

const FAQS = [
  {
    QUESTION: "What's inside the Curio box?",
    ANSWER:
      "Inside the Curio box, you will find the Curio toy itself, a user-friendly manual, charging cables, and a set of interactive cards that enhance the play experience. Additionally, there's a unique code to access online resources and updates.",
  },
  {
    QUESTION: "What age group are Curio toys designed for?",
    ANSWER:
      "Curio toys are primarily designed for children aged 3 to 12 years old, but everyone can enjoy them, no matter their age!",
  },
  {
    QUESTION: "What languages are currently supported?",
    ANSWER:
      "Currently, our toys are only available in English; however, we are working on expanding language support. You can purchase them now and update the language support later. Subscribe to our newsletter to stay updated!",
  },
  {
    QUESTION: "When should I expect to receive my toy?",
    ANSWER:
      "For U.S. orders, toys can be expected to ship within 7 days. For international orders, we are unfortunately expecting a 3-5 month wait time while we ensure that we have all of our international certifications in order. Our deepest apologies for any inconvenience.",
  },
  {
    QUESTION: "Do you offer international shipping?",
    ANSWER:
      "Yes, we currently offer international shipping to a wide range of countries and are working on expanding our reach. Please be aware that due to compliance reasons, the shipping timeframe for international orders is 3 to 5 months to reach the destination.",
  },
];

const Faq: React.FC = () => (
  <section className="w-full bg-[#171324] py-5" id="faqs">
    <div className="container mx-auto">
      <div className="w-full flex flex-col gap-[20px]">
        <h2 className="text-[#FFFFFF] mb-3 mx-auto text-center sm:text-left tracking-normal sm:tracking-[0.7px] text-[28px] md:text-[44px] lg:text-[50px] font-semibold leading-tight">
          FAQs
        </h2>

        {FAQS.map(({ ANSWER, QUESTION }, index) => (
          <FAQItem question={QUESTION} answer={ANSWER} key={index} />
        ))}
      </div>
    </div>
  </section>
);

export { Faq };
