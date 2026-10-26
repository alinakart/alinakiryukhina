import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { MailingList } from "./MailingList";

type PageShellProps = {
  children: React.ReactNode;
  tone?: "light" | "dark" | "charcoal";
  showMailingList?: boolean;
};

export function PageShell({
  children,
  tone = "dark",
  showMailingList = true,
}: PageShellProps) {
  return (
    <>
      <SiteHeader tone={tone} />
      {children}
      {showMailingList ? <MailingList /> : null}
      <SiteFooter />
    </>
  );
}
