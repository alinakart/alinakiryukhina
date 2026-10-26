"use client";

import Image from "next/image";
import { instagramShots, site } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";

export function InstagramStrip() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--charcoal)] px-0 pb-14 pt-4">
      <div className="grid grid-cols-3 gap-1 sm:grid-cols-6">
        {instagramShots.map((src) => (
          <a
            key={src}
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square overflow-hidden bg-black/30"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="16vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </a>
        ))}
      </div>
      <div className="mt-8 flex justify-center px-6">
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/35 px-7 py-3 text-[0.72rem] font-medium tracking-[0.16em] text-white uppercase transition-opacity hover:opacity-85"
        >
          {t.ui.followInstagram}
        </a>
      </div>
    </section>
  );
}
