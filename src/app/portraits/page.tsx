import type { Metadata } from "next";
import { GalleryPage } from "@/components/GalleryPage";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Commissioned Portraits",
};

export default function PortraitsPage() {
  return (
    <PageShell tone="charcoal">
      <GalleryPage slug="portraits" />
    </PageShell>
  );
}
