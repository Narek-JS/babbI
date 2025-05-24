import Image from "next/image";

const Configuration: React.FC = () => (
  <section className="w-full bg-[#171324] py-5" id="configuration">
    <div className="container mx-auto">
      <div className="w-full flex items-center justify-between gap-5">
        <Image
          alt="alt"
          className="w-full sm:max-w-[305px] sm:max-h-[600px] object-contain"
          src="/images/config-2.png"
          width={500}
          height={600}
        />
        <div className="flex flex-col gap-4 md:gap-7">
          <h2 className="text-[#FFFFFF] text-center sm:text-left tracking-normal sm:tracking-[0.7px] text-[28px] md:text-[44px] lg:text-[50px] font-semibold leading-tight">
            Configuration
          </h2>
          <p className="text-[#FFFFFF] text-center sm:text-left text-[14px] sm:text-[17px] md:text-[19px] lg:text-[21px] opacity-80 max-w-[500px]">
            Easily customize your doll’s voice, language, and behavior to match
            your child’s preferences. Adjust settings through a simple interface
            to create a more personal and engaging experience.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export { Configuration };
