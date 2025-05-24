"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCarousel } from "@/hooks/useCarousel";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const MATERIALS = [
  {
    TEXT: "It’s cool, it’s like a combination of Teddy Ruxpin or a Furby... with a brain!",
    ICON: "https://heycurio.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frs4w87x0%2Fproduction%2F709a6591e74ac59f4e44c7e708c3648e21554ced-400x200.webp&w=828&q=75",
  },
  {
    TEXT: "It’s cool, it’s like a combination of Teddy Ruxpin or a Furby... with a brain!",
    ICON: "https://heycurio.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frs4w87x0%2Fproduction%2F709a6591e74ac59f4e44c7e708c3648e21554ced-400x200.webp&w=828&q=75",
  },
  {
    TEXT: "It’s cool, it’s like a combination of Teddy Ruxpin or a Furby... with a brain!",
    ICON: "https://heycurio.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frs4w87x0%2Fproduction%2F709a6591e74ac59f4e44c7e708c3648e21554ced-400x200.webp&w=828&q=75",
  },
  {
    TEXT: "It’s cool, it’s like a combination of Teddy Ruxpin or a Furby... with a brain!",
    ICON: "https://heycurio.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frs4w87x0%2Fproduction%2F709a6591e74ac59f4e44c7e708c3648e21554ced-400x200.webp&w=828&q=75",
  },
  {
    TEXT: "It’s cool, it’s like a combination of Teddy Ruxpin or a Furby... with a brain!",
    ICON: "https://heycurio.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frs4w87x0%2Fproduction%2F709a6591e74ac59f4e44c7e708c3648e21554ced-400x200.webp&w=828&q=75",
  },
];

const Slider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ startIndex: 1 });
  const { onNext, onPrev, nextDisabled, prevDisabled } = useCarousel(emblaApi);

  return (
    <section className="w-full bg-[#171324] py-5" id="slider">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 md:gap-7">
          <h2 className="text-[#FFFFFF] mb-3 mx-auto text-center sm:text-left tracking-normal sm:tracking-[0.7px] text-[28px] md:text-[44px] lg:text-[50px] font-semibold leading-tight">
            Featured In
          </h2>

          <div
            className="relative overflow-hidden before:content-['*'] before:absolute before:top-0 before:right-0 before:h-full before:w-[40px] before:bg-gradient-to-l before:from-[#171324] before:via-[#171324]/40 before:to-transparent before:z-50 after:content-['*'] after:absolute after:top-0 after:left-0 after:h-full after:w-[40px] after:bg-gradient-to-r after:from-[#171324] after:via-[#171324]/40 after:to-transparent after:z-50"
            ref={emblaRef}
          >
            <div className="flex gap-4 sm:gap-6 md:gap-8">
              {MATERIALS.map(({ ICON, TEXT }, index) => (
                <div
                  key={index}
                  className="min-w-[320px] sm:min-w-[360px] md:min-w-[400px] h-[200px] sm:h-[250px] flex flex-col items-center justify-center gap-3 rounded-2xl bg-white shadow-md px-4"
                >
                  <Image alt="alt" src={ICON} width={160} height={60} />
                  <h4 className="opacity-80 text-[var(--primary)] font-bold text-[18px] sm:text-[20px] md:text-[24px] text-center">
                    {TEXT}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 justify-center">
            <button
              className="group w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-30 cursor-pointer disabled:cursor-default"
              disabled={prevDisabled}
              onClick={onPrev}
            >
              <ChevronLeft className="w-5 h-5 text-white group-hover:text-black transition-colors duration-200" />
            </button>
            <button
              className="group w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-30 cursor-pointer disabled:cursor-default"
              disabled={nextDisabled}
              onClick={onNext}
            >
              <ChevronRight className="w-5 h-5 text-white group-hover:text-black transition-colors duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Slider };
