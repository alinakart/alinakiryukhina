"use client";

import { useState } from "react";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  const go = (direction: -1 | 1) => {
    setIndex((current) => {
      const next = current + direction;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  return (
    <section className="bg-[var(--charcoal)] px-6 py-20 text-white md:px-10 md:py-28">
      <div className="relative mx-auto flex max-w-4xl items-center gap-4 md:gap-8">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className="shrink-0 p-2 text-white/55 transition-opacity hover:opacity-80"
        >
          <Arrow />
        </button>

        <blockquote
          key={item.quote}
          className="animate-fade-in flex-1 text-center"
        >
          <p className="text-[1.02rem] leading-8 text-white/85 md:text-[1.12rem] md:leading-9">
            {item.quote}
          </p>
          <footer className="mt-6 text-[0.78rem] tracking-[0.04em] text-white/55">
            {item.attribution}
          </footer>
        </blockquote>

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className="shrink-0 rotate-180 p-2 text-white/55 transition-opacity hover:opacity-80"
        >
          <Arrow />
        </button>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M13.5 5.5L8 11l5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
