"use client";

import Link from "next/link";
import { site } from "@/lib/content";
import { getNavLinks } from "@/lib/i18n/nav";
import { useLanguage } from "./LanguageProvider";

export function SiteFooter() {
  const { t } = useLanguage();
  const navLinks = getNavLinks(t);

  return (
    <footer className="bg-[var(--charcoal)] px-6 pb-8 text-white md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 border-t border-white/10 pt-12 md:flex-row md:justify-between">
        <div className="max-w-xl">
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-[0.7rem] tracking-[0.16em] uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex gap-5 text-lg">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-opacity hover:opacity-70"
            >
              ⌁
            </a>
          </div>
        </div>

        <div className="md:text-right">
          <p className="font-signature text-[2.4rem] leading-none md:text-[2.8rem]">
            Alina Kiryukhina
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 block text-[0.78rem] tracking-wide text-white/85 transition-opacity hover:opacity-70"
          >
            {site.email}
          </a>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="mt-2 block text-[0.78rem] tracking-wide text-white/85 transition-opacity hover:opacity-70"
          >
            {site.phone}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-[0.68rem] text-white/65 md:flex-row md:justify-between">
        <p>{t.ui.privacy}</p>
        <p>© 2026 {site.name}</p>
      </div>
    </footer>
  );
}
