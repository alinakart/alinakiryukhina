import { galleries, type GallerySlug } from "@/lib/content";
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

  return (
    <main className="bg-[var(--sage)] pt-28 pb-20 md:pt-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <header className="mb-12 max-w-2xl md:mb-16">
          <h1 className="mb-4 text-[0.88rem] font-semibold tracking-[0.22em] text-[var(--ink)] uppercase">
            {gallery.title}
          </h1>
          <p className="text-[1rem] leading-8 text-[var(--ink-muted)]">
            {gallery.intro}
          </p>
          {"quote" in gallery && gallery.quote ? (
            <p className="mt-6 text-[1rem] leading-8 text-[var(--ink-muted)]">
              “{gallery.quote}”
            </p>
          ) : null}
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.works.map((work) => (
            <GalleryWorkCard
              key={work.title}
              title={work.title}
              images={workImages(work as { src?: string; images?: readonly string[] })}
              layout={workLayout(work as { layout?: string })}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
