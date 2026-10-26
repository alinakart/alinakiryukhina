"use client";

import { FeaturePanel } from "@/components/FeaturePanel";
import { useLanguage } from "@/components/LanguageProvider";
import { featureLinks } from "@/lib/content";

export function FeatureContent() {
  const { t } = useLanguage();

  return (
    <main className="bg-[var(--sage)] pt-28 pb-20 md:pt-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <header className="mb-12 max-w-2xl md:mb-16">
          <h1 className="mb-4 text-[0.88rem] font-semibold tracking-[0.22em] text-[var(--ink)] uppercase">
            {t.feature.title}
          </h1>
          <p className="text-[1rem] leading-8 text-[var(--ink-muted)]">
            {t.feature.intro}
          </p>
        </header>

        <div className="flex flex-col gap-10 md:gap-14">
          {featureLinks.map((item) => (
            <FeaturePanel
              key={item.domain}
              domain={item.domain}
              title={item.title}
              titleEn={
                t.feature.titlesEn[
                  item.domain as keyof typeof t.feature.titlesEn
                ] ?? item.titleEn
              }
              excerpt={
                t.feature.excerpts[
                  item.domain as keyof typeof t.feature.excerpts
                ] ?? item.excerpt
              }
              slides={item.slides}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
