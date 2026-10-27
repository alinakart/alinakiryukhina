import { AboutWorkBand } from "@/components/AboutWorkBand";
import { CategoryGrid } from "@/components/CategoryGrid";
import { HeroCarousel } from "@/components/HeroCarousel";
import { InstagramStrip } from "@/components/InstagramStrip";
import { IntroSection } from "@/components/IntroSection";
import { PageShell } from "@/components/PageShell";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <PageShell tone="light">
      <HeroCarousel />
      <CategoryGrid />
      <IntroSection />
      <AboutWorkBand />
      <Testimonials />
      <InstagramStrip />
    </PageShell>
  );
}
