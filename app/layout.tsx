import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rothmeier GmbH – Putz · Stuck · Trockenbau",
  description: "Ihr Familienbetrieb für Trockenbau, Putz- und Stuckarbeiten im Großraum München. Persönlich begleitet, präzise ausgeführt. Seit 1997.",
  metadataBase: new URL("https://www.rothmeiergmbh.de"),
  openGraph: {
    title: "Rothmeier GmbH – Putz · Stuck · Trockenbau",
    description: "Handwerk, das Räume prägt. Familienbetrieb im Großraum München seit 1997.",
    type: "website",
    locale: "de_DE"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}