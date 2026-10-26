"use client";

import { galleries, type GallerySlug } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";
import { GalleryWorkCard } from "./GalleryWorkCard";

type GalleryPageProps = {
  slug: GallerySlug;
};

function workImages(work: {
  title: string;
  src?: string;
  images?: readonly string[];
}): string[] {
  if (work.images?.length) return [...work.images];
  if (work.src) return [work.src];
  return [];
}

function workLayout(work: { layout?: string }): "portrait" | "landscape" {
  return work.layout === "landscape" ? "landscape" : "portrait";
}

export function GalleryPage({ slug }: GalleryPageProps) {
  const gallery = galleries[slug];
  const { t } = useLanguage();
  const isPortraits = slug === "portraits";
  const copy = isPortraits ? t.portraits : t.stillLife;
  const workTitles = isPortraits ? t.portraits.works : t.stillLife.works;

  return (
    <main
      className={`pt-28 pb-20 md:pt-32 ${
        isPortraits
          ? "bg-[var(--charcoal)] text-white"
          : "bg-[var(--sage)] text-[var(--ink)]"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <header className="mb-12 max-w-2xl md:mb-16">
          <h1 className="mb-4 text-[0.88rem] font-semibold tracking-[0.22em] uppercase">
            {copy.title}
          </h1>
          <p
            className={`text-[1rem] leading-8 ${
              isPortraits ? "text-white/75" : "text-[var(--ink-muted)]"
            }`}
          >
            {copy.intro}
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.works.map((work) => {
            const translated =
              workTitles[work.title as keyof typeof workTitles] ?? work.title;
            return (
              <GalleryWorkCard
                key={work.title}
                title={translated}
                images={workImages(work)}
                layout={workLayout(work as { layout?: string })}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
