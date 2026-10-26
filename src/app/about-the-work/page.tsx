import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { AboutWorkContent } from "./AboutWorkContent";

export const metadata: Metadata = {
  title: "About The Work",
};

export default function AboutTheWorkPage() {
  return (
    <PageShell>
      <AboutWorkContent />
    </PageShell>
  );
}
