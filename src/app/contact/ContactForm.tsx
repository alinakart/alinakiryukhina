"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export function ContactForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-[1rem] leading-8 text-[var(--ink-muted)]">
        {t.contact.formThanks}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Field id="name" label={t.contact.formName} required />
      <Field id="email" label={t.contact.formEmail} type="email" required />
      <Field id="subject" label={t.contact.formSubject} />
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-[0.72rem] tracking-[0.14em] text-[var(--ink)] uppercase"
        >
          {t.contact.formMessage}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full border border-[var(--ink)]/15 bg-white/40 px-4 py-3 text-[0.95rem] text-[var(--ink)] outline-none transition-colors focus:border-[var(--ink)]/40"
        />
      </div>
      <button
        type="submit"
        className="bg-[var(--slate)] px-8 py-3 text-[0.72rem] font-medium tracking-[0.16em] text-white uppercase transition-opacity hover:opacity-85"
      >
        {t.contact.formSubmit}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[0.72rem] tracking-[0.14em] text-[var(--ink)] uppercase"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full border border-[var(--ink)]/15 bg-white/40 px-4 py-3 text-[0.95rem] text-[var(--ink)] outline-none transition-colors focus:border-[var(--ink)]/40"
      />
    </div>
  );
}
