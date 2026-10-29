"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { heroSlides } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const { t, locale } = useLanguage();

  const slides = useMemo(
    () =>
      heroSlides.filter(
        (slide) => !slide.locales || slide.locales.includes(locale),
      ),
    [locale],
  );

  useEffect(() => {
    setIndex(0);
  }, [locale]);

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const go = (direction: -1 | 1) => {
    setIndex((current) => {
      const next = current + direction;
      if (next < 0) return slides.length - 1;
      if (next >= slides.length) return 0;
      return next;
    });
  };

  const activeSlide = slides[index];
  const caption =
    activeSlide?.captionKey != null
      ? t.hero.captions[activeSlide.captionKey]
      : "";

  return (
    <section className="relative h-[100svh] min-h-[32rem] w-full overflow-hidden bg-black">
      {slides.map((slide, slideIndex) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            slideIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={slideIndex === 0}
            sizes="100vw"
            className="object-cover"
            style={
              slide.objectPosition
                ? { objectPosition: slide.objectPosition }
                : undefined
            }
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/20" />

      {caption ? (
        <div className="pointer-events-none absolute right-5 bottom-16 z-10 max-w-xs whitespace-pre-line text-right text-[0.78rem] leading-6 tracking-[0.06em] text-white/95 md:right-8 md:bottom-20 md:text-[0.88rem] md:leading-7">
          {caption}
        </div>
      ) : null}

      {slides.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(-1)}
            className="absolute top-1/2 left-3 z-10 -translate-y-1/2 p-3 text-white/90 transition-opacity hover:opacity-70 md:left-5"
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(1)}
            className="absolute top-1/2 right-3 z-10 -translate-y-1/2 p-3 text-white/90 transition-opacity hover:opacity-70 md:right-5"
          >
            <Chevron direction="right" />
          </button>

          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Slide ${slideIndex + 1}`}
                aria-current={slideIndex === index}
                onClick={() => setIndex(slideIndex)}
                className={`h-1.5 w-1.5 rounded-full transition-all ${
                  slideIndex === index
                    ? "bg-white"
                    : "bg-white/45 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className={direction === "left" ? "" : "rotate-180"}
    >
      <path
        d="M17.5 6.5L10 14l7.5 7.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
