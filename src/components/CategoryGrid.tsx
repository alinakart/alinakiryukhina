"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";

export function CategoryGrid() {
  const { t } = useLanguage();
  const labels = [
    t.categories.portraits,
    t.categories.academic,
    t.categories.stillLife,
  ];

  return (
    <section className="bg-[var(--charcoal)] px-4 pt-10 pb-6 md:px-8 md:pt-14">
      <div className="mx-auto grid max-w-6xl gap-3 md:grid-cols-3 md:gap-4">
        {categories.map((category, index) => (
          <Link
            key={category.href}
            href={category.href}
            className="group relative block aspect-[3/4] overflow-hidden bg-black/30"
          >
            <Image
              src={category.src}
              alt={category.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
            <h3 className="absolute inset-x-0 bottom-0 p-5 text-center text-[0.78rem] font-medium tracking-[0.2em] text-white uppercase md:text-[0.82rem]">
              {labels[index] ?? category.label}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
