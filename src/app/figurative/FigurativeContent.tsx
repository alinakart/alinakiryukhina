"use client";

import Image from "next/image";
import { FeaturePanel } from "@/components/FeaturePanel";
import { GalleryWorkCard } from "@/components/GalleryWorkCard";
import { useLanguage } from "@/components/LanguageProvider";
import { academArtFeature, galleries, studiesSection } from "@/lib/content";

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

export function FigurativeContent() {
  const gallery = galleries.figurative;
  const { t, locale } = useLanguage();

  return (
    <main className="bg-[var(--sage)] pt-28 pb-20 md:pt-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <header className="mb-12 md:mb-16">
          <div className="mb-8 flex items-end gap-6 md:gap-8">
            <Image
              src="/artwork/site/figurative/repin-academy-logo.png"
              alt="I.E. Repin Saint Petersburg Academy of Arts"
              width={99}
              height={95}
              className="h-16 w-auto md:h-20"
            />
            <Image
              src="/artwork/site/figurative/shadr-logo.png"
              alt="I.D. Shadr Sverdlovsk Art College"
              width={194}
              height={420}
              className="h-20 w-auto md:h-24"
            />
          </div>
          <h1 className="mb-4 text-[0.88rem] font-semibold tracking-[0.22em] text-[var(--ink)] uppercase">
            {t.academic.title}
          </h1>
          <p className="w-full text-[1rem] leading-8 text-[var(--ink-muted)]">
            {t.academic.intro}
          </p>
          <p className="mt-6 w-full text-[1rem] leading-8 text-[var(--ink-muted)]">
            “{t.academic.quote}”
          </p>
        </header>

        <section className="mb-16 md:mb-20">
          <h2 className="mb-6 text-[0.82rem] font-semibold tracking-[0.2em] text-[var(--ink)] uppercase md:mb-8">
            {t.academic.diplomaHeading}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.works.map((work) => (
              <GalleryWorkCard
                key={work.title}
                title={
                  t.academic.works[work.title as keyof typeof t.academic.works] ??
                  work.title
                }
                images={workImages(work)}
                layout={workLayout(work as { layout?: string })}
              />
            ))}
          </div>
          <div className="mt-4">
            <GalleryWorkCard
              title={
                t.academic.works[
                  gallery.diplomaVideo
                    .title as keyof typeof t.academic.works
                ] ?? gallery.diplomaVideo.title
              }
              images={[
                locale === "en"
                  ? gallery.diplomaVideo.srcEn
                  : gallery.diplomaVideo.src,
              ]}
              layout={gallery.diplomaVideo.layout}
              subtitleTracks={
                locale === "en"
                  ? [
                      {
                        src: "/artwork/site/figurative/dedication-to-father.en.vtt",
                        srcLang: "en",
                        label: "English",
                        default: true,
                      },
                    ]
                  : undefined
              }
            />
          </div>
        </section>

        <section className="mb-16 md:mb-20">
          <h2 className="mb-6 text-[0.82rem] font-semibold tracking-[0.2em] text-[var(--ink)] uppercase md:mb-8">
            {t.academic.studiesTitle}
          </h2>
          {t.academic.studiesIntro ? (
            <p className="mb-8 max-w-2xl text-[1rem] leading-8 text-[var(--ink-muted)]">
              {t.academic.studiesIntro}
            </p>
          ) : null}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {studiesSection.works.map((work) => (
              <GalleryWorkCard
                key={work.title}
                title={
                  t.academic.studyWorks[
                    work.title as keyof typeof t.academic.studyWorks
                  ] ?? work.title
                }
                images={workImages(work)}
                layout={workLayout(work as { layout?: string })}
              />
            ))}
          </div>
        </section>

        <section>
          <FeaturePanel
            domain={academArtFeature.domain}
            title={academArtFeature.title}
            titleEn={t.feature.academArt.titleEn}
            excerpt={t.feature.academArt.excerpt}
            slides={academArtFeature.slides}
          />
        </section>
      </div>
    </main>
  );
}
