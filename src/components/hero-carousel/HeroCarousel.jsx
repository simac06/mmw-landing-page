import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { urlForImage } from "../../lib/urlForImage";
import Autoplay from "embla-carousel-autoplay";
import { Icon } from "@iconify/react";
import Fade from "embla-carousel-fade";

// To do: stop the autoplay when user clicks buttons
export function EmblaCarousel({ slides }) {
  const [viewportRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 5000, stopOnInteraction: true, playOnInit: true }),
    Fade(),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    onSelect(); // Initialize the selected index
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const isPortrait = (image) => {
    const ref = image.asset._ref;
    const match = ref.match(/-(\d+)x(\d+)-/);
    if (match) {
      const width = parseInt(match[1]);
      const height = parseInt(match[2]);
      return height > width;
    }
    return false;
  };

  return (
    <div className="embla relative">
      <div className="embla__viewport w-full h-full" ref={viewportRef}>
        <div className="embla__container w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="embla__slide overflow-x-hidden"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                className="embla__slide__inner w-screen h-[calc(100svh-4rem)]"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div className="absolute bottom-0 md:mb-12 md:left-14 ml-12 mb-10 md:ml-4 z-10 w-full">
                  <div className="flex flex-col justify-center items-start gap-3 md:gap-6 w-2/3">
                    <span className="text-blue tracking-[-0.1em] text-6xl md:text-[7rem] capitalize leading-tight font-obviously_title font-[600]">
                      {slide.artist_name}
                    </span>
                    <span className="subtitle">{slide.title}</span>

                    <a href={slide.url}>
                      <div className="text-blue md:text-lg font-obviously_body font-[500] px-6 pb-1 md:px-8 md:pt-2 md:pb-3 bg-bg border-2 border-blue rounded-2xl lowercase">
                        {slide.url_title}
                      </div>
                    </a>
                  </div>
                </div>
                {isPortrait(slide.image) ? (
                  <div className="portrait-container flex relative md:grid md:grid-cols-[1fr_max-content_1fr] h-full w-full brightness-75">
                    <div className="h-full relative  hidden md:block">
                      <img
                        className="embla__slide__img object-cover h-full object-right"
                        src={urlForImage(slide.image).url()}
                        alt=""
                      />
                    </div>
                    <div className="h-full w-full flex justify-center items-center">
                      <img
                        className="embla__slide__img object-cover w-full h-[calc(100svh-4rem)] md:scale-[1.001] object-center"
                        src={urlForImage(slide.image).url()}
                        alt=""
                      />
                    </div>
                    <div className="h-full relative hidden md:block">
                      <img
                        className="embla__slide__img h-full object-cover object-left"
                        src={urlForImage(slide.image).url()}
                        alt=""
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    className="embla__slide__img w-full flex h-full object-cover brightness-75"
                    src={urlForImage(slide.image).url()}
                    alt=""
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__navigation absolute bottom-0 right-0 transform mr-6 mb-12 md:mr:16 md:mb-12 z-30 flex items-center justify-center text-xl space-x-4">
        <button className="embla__prev text-blue" onClick={scrollPrev}>
          <Icon
            className="-skew-x-12 hidden md:block"
            icon="fluent:triangle-left-20-filled"
          ></Icon>
        </button>
        <div className="embla__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className="embla__dot"
              onClick={() => scrollTo(index)}
            >
              {selectedIndex === index ? (
                <div className="w-4 h-4 bg-blue -skew-x-12 rounded-sm"></div>
              ) : (
                <div className="w-4 h-4 border-2 border-blue -skew-x-12 rounded-sm"></div>
              )}
            </button>
          ))}
        </div>
        <button className="embla__next text-blue" onClick={scrollNext}>
          <Icon
            className="-skew-x-12 hidden md:block"
            icon="fluent:triangle-right-20-filled"
          ></Icon>
        </button>
      </div>
    </div>
  );
}
