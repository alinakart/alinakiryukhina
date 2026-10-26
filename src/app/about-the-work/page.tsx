import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About The Work",
};

const galleries = [
  {
    heading: "Mehmet and his daughter Melisa",
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
    heading: "Denis, C.E.O. of Tabi Meat Restaurant",
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
    heading: "Natalia commissioned a portrait for her summer residence",
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

export default function AboutTheWorkPage() {
  return (
    <PageShell>
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
                About The Work
              </h1>
              <div className="space-y-5 text-[1rem] leading-8 text-[var(--ink-muted)]">
                <p>
                  Every commission begins with conversation — about the sitter,
                  the setting, and the feeling the piece should hold. From first
                  sketches through colour studies and the finished painting, the
                  process is collaborative and unhurried.
                </p>
                <p>
                  Alina often works from life when possible, building likeness
                  and atmosphere through sitting sessions, reference studies,
                  and classical painting methods formed at the Repin Academy.
                </p>
                <p>
                  The permanent story of that exchange is the artwork itself:
                  something with a life of its own, and a focal point for years
                  to come. Portrait commissions, figurative works, and private
                  collections are all welcome.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
            {galleries.map((gallery) => (
              <section key={gallery.heading}>
                <header className="mb-8 md:mb-10">
                  <h2 className="max-w-3xl text-[0.82rem] font-semibold tracking-[0.18em] text-[var(--ink)] uppercase md:text-[0.88rem] md:tracking-[0.2em]">
                    {gallery.heading}
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
    </PageShell>
  );
}
