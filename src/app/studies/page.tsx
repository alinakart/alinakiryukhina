import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { StudiesContent } from "./StudiesContent";

export const metadata: Metadata = {
  title: "Still Life",
};

export default function StudiesPage() {
  return (
    <PageShell>
      <StudiesContent />
    </PageShell>
  );
}
