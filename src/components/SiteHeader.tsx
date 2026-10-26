"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { SiteNav } from "./SiteNav";

type SiteHeaderProps = {
  tone?: "light" | "dark" | "charcoal";
};

export function SiteHeader({ tone = "light" }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHero = tone === "light" && !scrolled;
  const darkChrome = tone === "light" || tone === "charcoal";
  const ink = darkChrome ? "text-white" : "text-[var(--ink)]";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          onHero
            ? "bg-transparent"
            : darkChrome
              ? "bg-[var(--charcoal)]/95 backdrop-blur-sm"
              : "bg-[var(--sage)]/95 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5 md:px-8 md:py-6">
          <Link
            href="/"
            className={`font-signature text-[2.1rem] leading-none transition-opacity hover:opacity-80 md:text-[2.5rem] ${ink}`}
          >
            Alina Kiryukhina
          </Link>
          <div className="flex items-center gap-4 md:gap-5">
            <div
              className={`flex items-center gap-1.5 text-[0.68rem] font-semibold tracking-[0.16em] uppercase ${ink}`}
              role="group"
              aria-label="Language"
            >
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`transition-opacity ${
                  locale === "en" ? "opacity-100" : "opacity-45 hover:opacity-80"
                }`}
                aria-pressed={locale === "en"}
              >
                {t.ui.langEn}
              </button>
              <span className="opacity-35" aria-hidden="true">
                /
              </span>
              <button
                type="button"
                onClick={() => setLocale("ru")}
                className={`transition-opacity ${
                  locale === "ru" ? "opacity-100" : "opacity-45 hover:opacity-80"
                }`}
                aria-pressed={locale === "ru"}
              >
                {t.ui.langRu}
              </button>
            </div>
            <button
              type="button"
              aria-label={t.ui.openMenu}
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className={`group flex h-10 w-10 items-center justify-center ${ink}`}
            >
              <span className="flex w-6 flex-col gap-[5px]">
                <span className="h-px w-full bg-current transition-transform group-hover:translate-x-0.5" />
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current transition-transform group-hover:-translate-x-0.5" />
              </span>
            </button>
          </div>
        </div>
      </header>
      <SiteNav open={open} onClose={() => setOpen(false)} />
    </>
  );
}
