import type { Metadata } from "next";
import { FeaturePanel } from "@/components/FeaturePanel";
import { PageShell } from "@/components/PageShell";
import { featureLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Feature",
};

export default function FeaturePage() {
  return (
    <PageShell>
      <main className="bg-[var(--sage)] pt-28 pb-20 md:pt-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <header className="mb-12 max-w-2xl md:mb-16">
            <h1 className="mb-4 text-[0.88rem] font-semibold tracking-[0.22em] text-[var(--ink)] uppercase">
              Feature
            </h1>
            <p className="text-[1rem] leading-8 text-[var(--ink-muted)]">
              Alina online — exhibition pages and gallery profiles where her work
              appears.
            </p>
          </header>

          <div className="flex flex-col gap-10 md:gap-14">
            {featureLinks.map((site) => (
              <FeaturePanel
                key={site.domain}
                domain={site.domain}
                title={site.title}
                titleEn={site.titleEn}
                excerpt={site.excerpt}
                slides={site.slides}
              />
            ))}
          </div>
        </div>
      </main>
    </PageShell>
  );
}
