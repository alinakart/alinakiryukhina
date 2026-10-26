"use client";

import Link from "next/link";
import { useEffect } from "react";
import { site } from "@/lib/content";
import { getNavLinks } from "@/lib/i18n/nav";
import { useLanguage } from "./LanguageProvider";

type SiteNavProps = {
  open: boolean;
  onClose: () => void;
};

export function SiteNav({ open, onClose }: SiteNavProps) {
  const { t } = useLanguage();
  const navLinks = getNavLinks(t);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
      {...(!open ? { inert: true as const } : {})}
    >
      <button
        type="button"
        aria-label={t.ui.closeMenuOverlay}
        onClick={onClose}
        className={`absolute inset-0 bg-black/35 transition-opacity duration-400 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-[var(--slate)] px-8 py-8 text-white shadow-2xl transition-transform duration-400 ease-out sm:px-10 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button
            type="button"
            aria-label={t.ui.closeMenu}
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center text-2xl leading-none transition-opacity hover:opacity-70"
          >
            ×
          </button>
        </div>

        <nav className="mt-10 flex flex-1 flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-[0.95rem] font-medium tracking-[0.18em] uppercase transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto space-y-5 border-t border-white/15 pt-8 text-[0.72rem] tracking-[0.14em] uppercase">
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
          <div className="flex gap-5 text-lg normal-case tracking-normal">
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
      </aside>
    </div>
  );
}
