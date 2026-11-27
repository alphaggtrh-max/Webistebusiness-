import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rothmeier GmbH | Trockenbau, Putz & Stuck im Raum München",
  description: "Rothmeier GmbH – Ihr Familienbetrieb für Trockenbau, Putz- und Spachtelarbeiten, Stuck und kleinere GU-Aufträge im Großraum München. Seit 1997.",
  metadataBase: new URL("https://www.rothmeiergmbh.de"),
  openGraph: { title: "Rothmeier GmbH", description: "Handwerk mit Anspruch. Seit 1997 im Großraum München.", type: "website", locale: "de_DE" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}