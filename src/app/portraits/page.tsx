import type { Metadata } from "next";
import { GalleryPage } from "@/components/GalleryPage";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Commissioned portraits and genre paintings",
};

export default function PortraitsPage() {
  return (
    <PageShell tone="charcoal">
      <GalleryPage slug="portraits" />
    </PageShell>
  );
}
