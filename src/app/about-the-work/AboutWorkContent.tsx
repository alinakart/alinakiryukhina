"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

const galleries = [
  {
    key: "mehmet" as const,
    images: [
      {
        src: "/artwork/site/process/mehmet-melisa-with-sitter.jpg",
        alt: "Sitter with the finished father-and-child portrait on the easel",
      },
      {
        src: "/artwork/site/process/mehmet-melisa-framed.jpg",
        alt: "Finished father-and-child portrait in its frame",
      },
      {
        src: "/artwork/site/process/mehmet-melisa-photo.jpg",
        alt: "Father and child — reference for the portrait",
      },
    ],
  },
  {
    key: "denis" as const,
    images: [
      {
        src: "/artwork/site/process/pirog-with-alina.jpg",
        alt: "Alina with the portrait sitter",
      },
      {
        src: "/artwork/site/process/pirog-with-portrait.jpg",
        alt: "Sitter with his finished portrait",
      },
      {
        src: "/artwork/site/process/pirog-photo.jpg",
        alt: "Portrait sitter outdoors",
      },
    ],
  },
  {
    key: "natalia" as const,
    images: [
      {
        src: "/artwork/site/process/mc-live-posing-gallery.jpg",
        alt: "Live posing for a seated portrait",
      },
      {
        src: "/artwork/site/process/mc-with-portrait.jpg",
        alt: "Sitter with her finished portrait",
      },
      {
        src: "/artwork/site/process/mc-portrait-finished.jpg",
        alt: "Finished seated portrait with frame samples",
      },
    ],
  },
];

export function AboutWorkContent() {
  const { t } = useLanguage();
  const page = t.aboutWorkPage;

  return (
    <main className="bg-[var(--sage)] pt-28 pb-20 md:pt-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--sage-deep)]">
            <Image
              src="/artwork/site/process/studio-session.jpg"
              alt="Studio portrait session"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-[0.88rem] font-semibold tracking-[0.22em] text-[var(--ink)] uppercase">
              {page.title}
            </h1>
            <div className="space-y-5 text-[1rem] leading-8 text-[var(--ink-muted)]">
              {page.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
          {galleries.map((gallery) => (
            <section key={gallery.key}>
              <header className="mb-8 md:mb-10">
                <h2 className="max-w-3xl text-[0.82rem] font-semibold tracking-[0.18em] text-[var(--ink)] uppercase md:text-[0.88rem] md:tracking-[0.2em]">
                  {page.galleries[gallery.key]}
                </h2>
                <div
                  className="mt-4 h-px w-full bg-[var(--ink)]/15"
                  aria-hidden="true"
                />
              </header>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {gallery.images.map((image) => (
                  <figure
                    key={image.src}
                    className="relative aspect-[4/5] overflow-hidden bg-[var(--sage-deep)]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
