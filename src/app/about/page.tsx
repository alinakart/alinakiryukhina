import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Alina",
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutContent />
    </PageShell>
  );
}
