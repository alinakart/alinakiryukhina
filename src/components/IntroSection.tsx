import { intro, site } from "@/lib/content";

export function IntroSection() {
  return (
    <section className="bg-[var(--sage)] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
        <p className="font-signature text-[2.6rem] leading-none text-[var(--ink)] md:pt-2 md:text-[3.4rem]">
          {site.name}
        </p>
        <div>
          <h1 className="mb-5 text-[0.82rem] font-semibold tracking-[0.2em] text-[var(--ink)] uppercase md:text-[0.88rem]">
            {intro.heading}
          </h1>
          <p className="max-w-xl text-[0.98rem] leading-8 text-[var(--ink-muted)] md:text-[1.02rem] md:leading-8">
            {intro.body}
          </p>
        </div>
      </div>
    </section>
  );
}
