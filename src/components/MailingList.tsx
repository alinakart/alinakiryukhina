"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export function MailingList() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[var(--sage)] px-6 py-16 text-[var(--ink)] md:px-10 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 flex items-center justify-center gap-3 text-center text-[0.78rem] font-semibold tracking-[0.2em] uppercase md:justify-start">
          <span aria-hidden="true" className="text-base">
            ✉
          </span>
          {t.ui.mailingTitle}
        </h2>

        {submitted ? (
          <p className="text-center text-sm tracking-wide text-[var(--ink-muted)] md:text-left">
            {t.ui.mailingThanks}
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-3 md:flex-row md:items-stretch"
          >
            <label className="sr-only" htmlFor="mailing-name">
              {t.ui.mailingName}
            </label>
            <input
              id="mailing-name"
              name="name"
              type="text"
              placeholder={t.ui.mailingName}
              className="min-h-12 flex-1 border border-[var(--ink)]/15 bg-white/50 px-4 text-[0.92rem] text-[var(--ink)] outline-none placeholder:text-[var(--ink-soft)]"
            />
            <label className="sr-only" htmlFor="mailing-email">
              {t.ui.mailingEmail}
            </label>
            <input
              id="mailing-email"
              name="email"
              type="email"
              required
              placeholder={t.ui.mailingEmail}
              className="min-h-12 flex-1 border border-[var(--ink)]/15 bg-white/50 px-4 text-[0.92rem] text-[var(--ink)] outline-none placeholder:text-[var(--ink-soft)]"
            />
            <button
              type="submit"
              className="min-h-12 bg-[var(--charcoal)] px-8 text-[0.72rem] font-semibold tracking-[0.18em] text-white uppercase transition-opacity hover:opacity-85"
            >
              {t.ui.mailingSubmit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
