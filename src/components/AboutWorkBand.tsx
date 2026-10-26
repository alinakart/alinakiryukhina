import Image from "next/image";
import Link from "next/link";
import { aboutTheWork } from "@/lib/content";

export function AboutWorkBand() {
  return (
    <section className="relative min-h-[28rem] overflow-hidden md:min-h-[34rem]">
      <Image
        src={aboutTheWork.image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 mx-auto flex min-h-[28rem] max-w-3xl flex-col items-center justify-center px-6 pt-40 pb-12 text-center text-white md:min-h-[34rem] md:pt-48 md:pb-16">
        <h2 className="mb-6 text-[0.82rem] font-semibold tracking-[0.22em] uppercase">
          {aboutTheWork.heading}
        </h2>
        {aboutTheWork.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="mb-4 max-w-xl text-[0.98rem] leading-8 text-white/95 md:text-[1.05rem]"
          >
            {paragraph}
          </p>
        ))}
        <Link
          href={aboutTheWork.href}
          className="mt-4 inline-flex items-center gap-2 text-[0.75rem] font-semibold tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
        >
          More
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
