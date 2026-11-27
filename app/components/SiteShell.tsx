"use client";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="topbar"><div className="container topbar-inner"><span>Familienbetrieb im Großraum München · Seit 1997</span><a href="tel:+498136228540">Direkt anrufen: 08136 228540</a></div></div>
    <header className="site-header"><div className="container header-inner">
      <a className="brand" href="/" aria-label="Rothmeier GmbH – Startseite"><img src="/rothmeier-logo.svg" alt="Rothmeier GmbH – Putz, Stuck, Trockenbau"/></a>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-nav" onClick={()=>setOpen(!open)}><span className="sr-only">Menü {open?"schließen":"öffnen"}</span><i/><i/><i/></button>
      <nav id="primary-nav" className={open?"nav is-open":"nav"} aria-label="Hauptnavigation">
        <a href="/unternehmen" onClick={()=>setOpen(false)}>Unternehmen</a><a href="/leistungen" onClick={()=>setOpen(false)}>Leistungen</a><a href="/projekte" onClick={()=>setOpen(false)}>Projekte</a><a href="/kontakt" onClick={()=>setOpen(false)}>Kontakt</a><a className="nav-cta" href="/kontakt" onClick={()=>setOpen(false)}>Projekt anfragen <b>↗</b></a>
      </nav>
    </div></header>
  </>;
}
export function SiteFooter() {
  return <footer className="footer"><div className="container footer-main">
    <a className="footer-logo" href="/"><img src="/rothmeier-logo.svg" alt="Rothmeier GmbH Logo"/></a>
    <div><strong>Rothmeier GmbH</strong><p>Putz · Stuck · Trockenbau<br/>Blumenstraße 15<br/>85232 Deutenhausen</p></div>
    <div><strong>Kontakt</strong><p><a href="tel:+498136228540">08136 228540</a><br/><a href="mailto:rothmeiergmbh@t-online.de">rothmeiergmbh@t-online.de</a></p></div>
    <div><strong>Informationen</strong><p><a href="/impressum">Impressum</a><br/><a href="/datenschutz">Datenschutz</a></p></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Rothmeier GmbH</span><span>Handwerk im Großraum München · Seit 1997</span></div></footer>;
}
export function PageIntro({eyebrow,title,accent,lead}:{eyebrow:string;title:string;accent:string;lead:string}) {
  return <section className="page-intro"><div className="container"><p className="eyebrow"><span/>{eyebrow}</p><h1>{title}<br/><em>{accent}</em></h1><p className="page-lead">{lead}</p></div></section>;
}