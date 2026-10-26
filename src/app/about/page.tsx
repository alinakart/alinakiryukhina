import type { Metadata } from "next";
import Image from "next/image";
import { FadeCarousel } from "@/components/FadeCarousel";
import { PageShell } from "@/components/PageShell";
import { aboutAlina, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Alina",
};

export default function AboutPage() {
  return (
    <PageShell>
      <main className="bg-[var(--sage)] pt-28 pb-20 md:pt-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div className="relative aspect-[3/4] overflow-hidden bg-[var(--sage-deep)] md:max-w-md">
              <Image
                src={aboutAlina.images.primary}
                alt={`${site.name} portrait`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-signature mb-4 text-[2.8rem] leading-none text-[var(--ink)] md:text-[3.2rem]">
                {site.name}
              </p>
              <h1 className="mb-6 text-[0.88rem] font-semibold tracking-[0.22em] text-[var(--ink)] uppercase">
                {aboutAlina.heading}
              </h1>
              <div className="space-y-5 text-[1rem] leading-8 text-[var(--ink-muted)]">
                <p>{aboutAlina.lead}</p>
                {aboutAlina.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3 md:mt-20">
            {[
              aboutAlina.images.academy,
              aboutAlina.images.painting,
              aboutAlina.images.exhibited,
            ].map((src) => (
              <div
                key={src}
                className="relative aspect-[4/5] overflow-hidden bg-[var(--sage-deep)]"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <section className="mt-16 md:mt-20">
            <h2 className="mb-6 text-[0.82rem] font-semibold tracking-[0.2em] text-[var(--ink)] uppercase">
              Education
            </h2>
            <ul className="space-y-4 text-[0.98rem] leading-7 text-[var(--ink-muted)]">
              {aboutAlina.education.map((item) => (
                <li key={item.school}>
                  <p className="font-medium text-[var(--ink)]">{item.school}</p>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-14 md:mt-16">
          <h2 className="mx-auto mb-6 max-w-6xl px-5 text-[0.82rem] font-semibold tracking-[0.2em] text-[var(--ink)] uppercase md:mb-8 md:px-8">
            Alina&apos;s Post-Graduate Diploma Project
          </h2>
          <FadeCarousel slides={aboutAlina.exhibitionCarousel} />
        </div>

        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <section className="mt-14 md:mt-16">
            <h2 className="mb-6 text-[0.82rem] font-semibold tracking-[0.2em] text-[var(--ink)] uppercase">
              Selected Exhibitions
            </h2>
            <ul className="space-y-2.5 text-[0.92rem] leading-7 text-[var(--ink-muted)]">
              {aboutAlina.exhibitions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-14 md:mt-16">
            <h2 className="mb-6 text-[0.82rem] font-semibold tracking-[0.2em] text-[var(--ink)] uppercase">
              Publications & Catalogues
            </h2>
            <ul className="space-y-2.5 text-[0.92rem] leading-7 text-[var(--ink-muted)]">
              {aboutAlina.publications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </PageShell>
  );
}
