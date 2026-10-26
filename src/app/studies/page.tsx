import type { Metadata } from "next";
import { GalleryWorkCard } from "@/components/GalleryWorkCard";
import { PageShell } from "@/components/PageShell";
import { stillLifeSection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Still Life",
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

export default function StudiesPage() {
  return (
    <PageShell>
      <main className="bg-[var(--sage)] pt-28 pb-20 md:pt-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <header className="mb-12 max-w-2xl md:mb-16">
            <h1 className="mb-4 text-[0.88rem] font-semibold tracking-[0.22em] text-[var(--ink)] uppercase">
              Still Life
            </h1>
            <p className="text-[1rem] leading-8 text-[var(--ink-muted)]">
              {stillLifeSection.intro}
            </p>
          </header>

          <section>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stillLifeSection.works.map((work) => (
                <GalleryWorkCard
                  key={work.title}
                  title={work.title}
                  images={workImages(work)}
                  layout={workLayout(work as { layout?: string })}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </PageShell>
  );
}
