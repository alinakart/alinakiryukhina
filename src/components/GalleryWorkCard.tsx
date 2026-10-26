"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryWorkCardProps = {
  title: string;
  images: string[];
  layout?: "portrait" | "landscape";
};

export function GalleryWorkCard({
  title,
  images,
  layout = "portrait",
}: GalleryWorkCardProps) {
  const [index, setIndex] = useState(0);
  const isCarousel = images.length > 1;
  const isLandscape = layout === "landscape";

  const go = (direction: -1 | 1) => {
    setIndex((current) => {
      const next = current + direction;
      if (next < 0) return images.length - 1;
      if (next >= images.length) return 0;
      return next;
    });
  };

  if (isLandscape) {
    const src = images[index] ?? images[0];
    return (
      <figure className="group relative overflow-hidden bg-[var(--sage-deep)] sm:col-span-2 lg:col-span-2">
        <Image
          src={src}
          alt={
            isCarousel
              ? `${title} — image ${index + 1} of ${images.length}`
              : title
          }
          width={1600}
          height={900}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
          className="h-auto w-full"
          priority
        />
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] bg-gradient-to-t from-black/55 to-transparent p-4 text-[0.72rem] tracking-[0.14em] text-white uppercase opacity-0 transition-opacity duration-400 group-hover:opacity-100">
          {title}
        </figcaption>
        {isCarousel ? (
          <>
            <button
              type="button"
              aria-label={`Previous ${title} image`}
              onClick={() => go(-1)}
              className="absolute top-1/2 left-2 z-[2] -translate-y-1/2 p-2 text-white/90 opacity-0 transition-opacity group-hover:opacity-100 hover:opacity-70"
            >
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              aria-label={`Next ${title} image`}
              onClick={() => go(1)}
              className="absolute top-1/2 right-2 z-[2] -translate-y-1/2 p-2 text-white/90 opacity-0 transition-opacity group-hover:opacity-100 hover:opacity-70"
            >
              <Chevron direction="right" />
            </button>
            <div className="absolute bottom-3 left-1/2 z-[2] flex -translate-x-1/2 gap-1.5">
              {images.map((imageSrc, imageIndex) => (
                <button
                  key={imageSrc}
                  type="button"
                  aria-label={`${title} image ${imageIndex + 1}`}
                  aria-current={imageIndex === index}
                  onClick={() => setIndex(imageIndex)}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${
                    imageIndex === index
                      ? "bg-white"
                      : "bg-white/45 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className="group relative aspect-[4/5] overflow-hidden bg-[var(--sage-deep)]">
      {images.map((src, imageIndex) => (
        <Image
          key={src}
          src={src}
          alt={
            isCarousel
              ? `${title} — image ${imageIndex + 1} of ${images.length}`
              : title
          }
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-opacity duration-700 ${
            imageIndex === index ? "opacity-100" : "opacity-0"
          }`}
          priority={imageIndex === 0}
        />
      ))}

      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] bg-gradient-to-t from-black/55 to-transparent p-4 text-[0.72rem] tracking-[0.14em] text-white uppercase opacity-0 transition-opacity duration-400 group-hover:opacity-100">
        {title}
      </figcaption>

      {isCarousel ? (
        <>
          <button
            type="button"
            aria-label={`Previous ${title} image`}
            onClick={() => go(-1)}
            className="absolute top-1/2 left-2 z-[2] -translate-y-1/2 p-2 text-white/90 opacity-0 transition-opacity group-hover:opacity-100 hover:opacity-70"
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            aria-label={`Next ${title} image`}
            onClick={() => go(1)}
            className="absolute top-1/2 right-2 z-[2] -translate-y-1/2 p-2 text-white/90 opacity-0 transition-opacity group-hover:opacity-100 hover:opacity-70"
          >
            <Chevron direction="right" />
          </button>
          <div className="absolute bottom-3 left-1/2 z-[2] flex -translate-x-1/2 gap-1.5">
            {images.map((src, imageIndex) => (
              <button
                key={src}
                type="button"
                aria-label={`${title} image ${imageIndex + 1}`}
                aria-current={imageIndex === index}
                onClick={() => setIndex(imageIndex)}
                className={`h-1.5 w-1.5 rounded-full transition-all ${
                  imageIndex === index
                    ? "bg-white"
                    : "bg-white/45 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </figure>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className={direction === "left" ? "" : "rotate-180"}
    >
      <path
        d="M17.5 6.5L10 14l7.5 7.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
