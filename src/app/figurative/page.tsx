import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { FigurativeContent } from "./FigurativeContent";

export const metadata: Metadata = {
  title: "Academic Training",
};

export default function FigurativePage() {
  return (
    <PageShell>
      <FigurativeContent />
    </PageShell>
  );
}
