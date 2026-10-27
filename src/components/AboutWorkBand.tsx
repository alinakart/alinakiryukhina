"use client";

import Image from "next/image";
import Link from "next/link";
import { aboutTheWork } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";

export function AboutWorkBand() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[28rem] overflow-hidden md:min-h-[34rem]">
      <Image
        src={aboutTheWork.image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[18%_35%]"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/15" />
      <div className="relative z-10 mx-auto flex min-h-[28rem] max-w-6xl flex-col items-end justify-end px-6 pt-12 pb-12 text-right text-white md:min-h-[34rem] md:px-10 md:pb-16">
        <h2 className="mb-6 text-[0.82rem] font-semibold tracking-[0.22em] uppercase">
          {t.aboutTheWorkBand.heading}
        </h2>
        {t.aboutTheWorkBand.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="mb-4 max-w-xl whitespace-pre-line text-[0.98rem] leading-8 text-white/95 md:text-[1.05rem]"
          >
            {paragraph}
          </p>
        ))}
        <Link
          href={aboutTheWork.href}
          className="mt-4 inline-flex items-center gap-2 text-[0.75rem] font-semibold tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
        >
          {t.ui.more}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
