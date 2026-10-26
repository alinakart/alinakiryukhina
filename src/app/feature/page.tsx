import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { FeatureContent } from "./FeatureContent";

export const metadata: Metadata = {
  title: "Feature",
};

export default function FeaturePage() {
  return (
    <PageShell>
      <FeatureContent />
    </PageShell>
  );
}
