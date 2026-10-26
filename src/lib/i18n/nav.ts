import type { Dictionary } from "./dictionaries";

export function getNavLinks(t: Dictionary) {
  return [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/figurative", label: t.nav.academic },
    { href: "/portraits", label: t.nav.portraits },
    { href: "/studies", label: t.nav.stillLife },
    { href: "/about-the-work", label: t.nav.aboutWork },
    { href: "/feature", label: t.nav.feature },
    { href: "/contact", label: t.nav.contact },
  ] as const;
}
