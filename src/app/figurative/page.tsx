import type { Metadata } from "next";
import { FeaturePanel } from "@/components/FeaturePanel";
import { GalleryWorkCard } from "@/components/GalleryWorkCard";
import { PageShell } from "@/components/PageShell";
import { academArtFeature, galleries, studiesSection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Academic Training",
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

export default function FigurativePage() {
  const gallery = galleries.figurative;

  return (
    <PageShell>
      <main className="bg-[var(--sage)] pt-28 pb-20 md:pt-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <header className="mb-12 max-w-2xl md:mb-16">
            <h1 className="mb-4 text-[0.88rem] font-semibold tracking-[0.22em] text-[var(--ink)] uppercase">
              {gallery.title}
            </h1>
            <p className="text-[1rem] leading-8 text-[var(--ink-muted)]">
              {gallery.intro}
            </p>
            {gallery.quote ? (
              <p className="mt-6 text-[1rem] leading-8 text-[var(--ink-muted)]">
                “{gallery.quote}”
              </p>
            ) : null}
          </header>

          <section className="mb-16 md:mb-20">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.works.map((work) => (
                <GalleryWorkCard
                  key={work.title}
                  title={work.title}
                  images={workImages(work)}
                  layout={workLayout(work as { layout?: string })}
                />
              ))}
            </div>
          </section>

          <section className="mb-16 md:mb-20">
            <h2 className="mb-6 text-[0.82rem] font-semibold tracking-[0.2em] text-[var(--ink)] uppercase md:mb-8">
              {studiesSection.title}
            </h2>
            <p className="mb-8 max-w-2xl text-[1rem] leading-8 text-[var(--ink-muted)]">
              {studiesSection.intro}
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {studiesSection.works.map((work) => (
                <GalleryWorkCard
                  key={work.title}
                  title={work.title}
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
              titleEn={academArtFeature.titleEn}
              excerpt={academArtFeature.excerpt}
              slides={academArtFeature.slides}
            />
          </section>
        </div>
      </main>
    </PageShell>
  );
}
