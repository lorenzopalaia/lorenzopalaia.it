import { getSEOTags } from "@/lib/seo";
import { config } from "@/config";

export const metadata = getSEOTags({
  title: "Privacy Policy | Lorenzo Palaia",
  canonicalUrlRelative: "/privacy",
  keywords: config.settings.keywords,
});

export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}