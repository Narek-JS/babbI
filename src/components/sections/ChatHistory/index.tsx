import Image from "next/image";

const ChatHistory: React.FC = () => (
  <section className="w-full bg-[#171324] py-5" id="chatHistory">
    <div className="container mx-auto">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-0 sm:gap-5">
        <div className="flex flex-col gap-4 md:gap-7 max-w-[600px]">
          <h2 className="text-[#FFFFFF] text-center sm:text-left tracking-normal sm:tracking-[0.7px] text-[28px] md:text-[44px] lg:text-[50px] font-semibold leading-tight">
            Chat History
          </h2>
          <p className="text-[#FFFFFF] text-center sm:text-left text-[14px] sm:text-[17px] md:text-[19px] lg:text-[21px] opacity-80">
            Keep track of your child’s conversations with the doll through an
            easy-to-use chat history feature. Review past interactions to stay
            informed, ensure a safe experience, and better understand how your
            child is engaging with their AI companion.
          </p>
        </div>
        <Image
          alt="alt"
          className="object-contain max-w-[700px] min-w-[320px] md:min-w-[445px] w-full max-h-[800px]"
          src="/images/config-1.png"
          width={700}
          height={800}
        />
      </div>
    </div>
  </section>
);

export { ChatHistory };
