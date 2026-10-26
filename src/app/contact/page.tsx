import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PageShell showMailingList={false}>
      <ContactContent />
    </PageShell>
  );
}
