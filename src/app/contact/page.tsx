import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/content";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PageShell showMailingList={false}>
      <main className="bg-[var(--sage)] pt-28 pb-20 md:pt-32">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 md:grid-cols-2 md:items-stretch md:gap-16 md:px-8">
          <div className="flex flex-col">
            <h1 className="mb-6 text-[0.88rem] font-semibold tracking-[0.22em] text-[var(--ink)] uppercase">
              Contact
            </h1>
            <p className="mb-8 max-w-md text-[1rem] leading-8 text-[var(--ink-muted)]">
              For commissions, exhibitions, or general enquiries, please send a
              message. Alina will respond as soon as she can.
            </p>
            <div className="space-y-3 text-[0.9rem] tracking-[0.04em] text-[var(--ink)]">
              <p>{site.location}</p>
              <a
                href={`mailto:${site.email}`}
                className="block transition-opacity hover:opacity-70"
              >
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="block transition-opacity hover:opacity-70"
              >
                {site.phone}
              </a>
            </div>
            <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden bg-[var(--sage-deep)] md:aspect-auto md:min-h-0 md:flex-1">
              <Image
                src="/artwork/site/about/alina-piter.jpg"
                alt={`${site.name} in Saint Petersburg`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </main>
    </PageShell>
  );
}
