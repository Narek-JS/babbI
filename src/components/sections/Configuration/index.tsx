import Image from "next/image";

const Configuration: React.FC = () => (
  <section className="w-full bg-[#171324] py-5" id="configuration">
    <div className="container mx-auto">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-5">
        <Image
          alt="alt"
          className="object-contain max-w-[550px] min-w-[320px] md:min-w-[445px] w-full max-h-[600px]"
          src="/images/config-2.png"
          width={550}
          height={600}
        />
        <div className="flex flex-col gap-4 md:gap-7 max-w-[750px]">
          <h2 className="text-[#FFFFFF] text-center sm:text-left tracking-normal sm:tracking-[0.7px] text-[28px] md:text-[44px] lg:text-[50px] font-semibold leading-tight">
            Configuration
          </h2>
          <p className="text-[#FFFFFF] text-center sm:text-left text-[14px] sm:text-[17px] md:text-[19px] lg:text-[21px] opacity-80">
            Personalize your child’s experience by adjusting the doll’s voice,
            language, interaction style, and more. The easy-to-use configuration
            panel lets you fine-tune how the doll responds, creating a tailored
            and emotionally engaging companion that grows with your child’s
            needs.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export { Configuration };
