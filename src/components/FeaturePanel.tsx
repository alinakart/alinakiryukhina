"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type FeatureSlide = {
  href: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
};

type FeaturePanelProps = {
  domain: string;
  title: string;
  titleEn: string;
  excerpt: string;
  slides: readonly FeatureSlide[];
};

export function FeaturePanel({
  domain,
  title,
  titleEn,
  excerpt,
  slides,
}: FeaturePanelProps) {
  const [index, setIndex] = useState(0);
  const isCarousel = slides.length > 1;
  const slide = slides[index] ?? slides[0];

  useEffect(() => {
    if (!isCarousel) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [isCarousel, slides.length]);

  const go = (direction: -1 | 1) => {
    setIndex((current) => {
      const next = current + direction;
      if (next < 0) return slides.length - 1;
      if (next >= slides.length) return 0;
      return next;
    });
  };

  return (
    <div className="group relative overflow-hidden bg-[var(--sage-deep)]">
      <div className="flex items-center gap-2 border-b border-[var(--ink)]/10 bg-[var(--slate)] px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="ml-3 flex min-w-0 flex-1 truncate bg-black/20 px-3 py-1.5 text-[0.7rem] tracking-[0.04em] text-white/70">
          {slide.href.replace(/^https?:\/\//, "")}
        </span>
      </div>

      <div className="grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[18rem]">
          {slides.map((item, slideIndex) => (
            <Image
              key={item.href}
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className={`object-cover transition-all duration-700 ${
                slideIndex === index
                  ? "opacity-100 group-hover:scale-[1.02]"
                  : "opacity-0"
              }`}
              style={
                item.objectPosition
                  ? { objectPosition: item.objectPosition }
                  : undefined
              }
              priority={slideIndex === 0}
            />
          ))}

          {isCarousel ? (
            <>
              <button
                type="button"
                aria-label="Previous AcademArt work"
                onClick={() => go(-1)}
                className="absolute top-1/2 left-2 z-10 -translate-y-1/2 p-2 text-white/90 transition-opacity hover:opacity-70"
              >
                <Chevron direction="left" />
              </button>
              <button
                type="button"
                aria-label="Next AcademArt work"
                onClick={() => go(1)}
                className="absolute top-1/2 right-2 z-10 -translate-y-1/2 p-2 text-white/90 transition-opacity hover:opacity-70"
              >
                <Chevron direction="right" />
              </button>
              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                {slides.map((item, slideIndex) => (
                  <button
                    key={item.href}
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
        </div>

        <a
          href={slide.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col justify-center bg-[var(--sage)] px-6 py-8 transition-opacity hover:opacity-95 md:px-8 md:py-10"
        >
          <p className="mb-3 text-[0.68rem] tracking-[0.18em] text-[var(--ink-soft)] uppercase">
            {domain}
          </p>
          <h2 className="mb-2 text-[1.35rem] leading-snug text-[var(--ink)] md:text-[1.5rem]">
            {title}
          </h2>
          <p className="mb-4 text-[0.82rem] tracking-[0.04em] text-[var(--ink-muted)]">
            {titleEn}
          </p>
          <p className="mb-6 max-w-md text-[0.95rem] leading-7 text-[var(--ink-muted)]">
            {excerpt}
          </p>
          <span className="text-[0.72rem] tracking-[0.16em] text-[var(--ink)] uppercase">
            Open page →
          </span>
        </a>
      </div>
    </div>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
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
