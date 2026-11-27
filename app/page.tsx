"use client";

import { FormEvent, useState } from "react";

const services = [
  { n: "01", title: "Trockenbau", text: "Flexible Wände, Decken und Raumlösungen – passgenau geplant und sorgfältig umgesetzt.", tag: "Unser Schwerpunkt" },
  { n: "02", title: "Putzarbeiten", text: "Gleichmäßige, belastbare Oberflächen im Innen- und Außenbereich – sauber verarbeitet." },
  { n: "03", title: "Stuckarbeiten", text: "Klassische Stuckelemente und moderne Details, die Räumen Charakter verleihen." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState("");

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Projektanfrage – Rothmeier GmbH");
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nTelefon: ${form.get("phone") || "-"}\nE-Mail: ${form.get("email")}\nLeistung: ${form.get("service")}\n\nNachricht:\n${form.get("message")}`
    );
    setStatus("Ihr E-Mail-Programm wird geöffnet.");
    window.location.href = `mailto:rothmeiergmbh@t-online.de?subject=${subject}&body=${body}`;
  }

  return <>
    <div className="topbar"><div className="container topbar-inner"><span>Familienbetrieb im Großraum München · Seit 1997</span><a href="tel:+498136228540">Direkt anrufen: 08136 228540</a></div></div>
    <header className="site-header"><div className="container header-inner">
      <a className="brand" href="#start" aria-label="Rothmeier GmbH – Startseite"><img src="/rothmeier-logo.svg" alt="Rothmeier GmbH – Putz, Stuck, Trockenbau" /></a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen(!menuOpen)}><span className="sr-only">Menü {menuOpen ? "schließen" : "öffnen"}</span><i/><i/><i/></button>
      <nav id="primary-nav" className={menuOpen ? "nav is-open" : "nav"} aria-label="Hauptnavigation">
        <a onClick={() => setMenuOpen(false)} href="#leistungen">Leistungen</a><a onClick={() => setMenuOpen(false)} href="#unternehmen">Unternehmen</a><a onClick={() => setMenuOpen(false)} href="#projekte">Projekte</a><a onClick={() => setMenuOpen(false)} href="#kontakt">Kontakt</a><a className="nav-cta" onClick={() => setMenuOpen(false)} href="#kontakt">Projekt anfragen <b>↗</b></a>
      </nav>
    </div></header>
    <main id="start">
      <section className="hero"><div className="hero-photo"/><div className="hero-shade"/><div className="container hero-content">
        <p className="eyebrow light"><span/> PUTZ · STUCK · TROCKENBAU</p><h1>Handwerk, das<br/><em>Räume prägt.</em></h1>
        <p className="hero-intro">Präziser Trockenbau und sorgfältige Ausbauarbeiten – persönlich begleitet von einem Familienbetrieb aus der Region München.</p>
        <div className="hero-actions"><a className="button button-red" href="#kontakt">Projekt besprechen <b>↗</b></a><a className="hero-link" href="#leistungen">Unsere Leistungen entdecken <span>↓</span></a></div>
        <div className="hero-proof"><span/> <strong>SEIT 1997</strong> · PERSÖNLICH. PRÄZISE. ZUVERLÄSSIG.</div>
      </div><div className="hero-seal"><img src="/rothmeier-logo.svg" alt="Rothmeier GmbH Logo" /></div></section>

      <section className="intro section" id="unternehmen"><div className="container intro-grid">
        <div className="section-index">01 <span>UNTERNEHMEN</span></div>
        <div><p className="eyebrow"><span/> FAMILIENBETRIEB SEIT 1997</p><h2>Gutes Handwerk<br/>braucht <em>Vertrauen.</em></h2></div>
        <div className="intro-copy"><p className="lead">Bei Rothmeier zählt nicht nur das Ergebnis. Sondern auch, wie man dorthin kommt.</p><p>Als Familienbetrieb im Großraum München stehen wir für sorgfältige Ausführung, klare Absprachen und persönlichen Einsatz. Der Chef ist bei jedem Projekt persönlich vor Ort und begleitet die Arbeiten mit Blick für Qualität und Details.</p><a className="inline-link" href="#kontakt">Lernen Sie uns kennen <b>↗</b></a></div>
      </div></section>

      <section className="facts"><div className="container facts-grid"><div><strong>Seit 1997</strong><span>Erfahrung im Ausbauhandwerk</span></div><div><strong>Persönlich vor Ort</strong><span>Direkte Begleitung durch den Chef</span></div><div><strong>Großraum München</strong><span>Regional und zuverlässig im Einsatz</span></div></div></section>

      <section className="services section" id="leistungen"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span/> UNSERE LEISTUNGEN</p><h2>Sauber ausgeführt.<br/><em>Bis ins Detail.</em></h2></div><p>Unser Schwerpunkt ist der Trockenbau. Ergänzend übernehmen wir Putz- und Stuckarbeiten – mit einem klaren Anspruch an Verarbeitung und Qualität.</p></div>
        <div className="service-grid">{services.map((service) => <article className="service-card" key={service.n}><span className="service-number">{service.n} / {service.tag ? "SCHWERPUNKT" : "HANDWERK"}</span><span className="service-symbol" aria-hidden="true">{service.n === "01" ? "▱" : service.n === "02" ? "▤" : "⌁"}</span><h3>{service.title}</h3><p>{service.text}</p><a href="#kontakt">Leistung anfragen <b>↗</b></a></article>)}</div>
      </div></section>

      <section className="statement"><div className="statement-photo"/><div className="statement-shade"/><div className="container statement-content"><p className="eyebrow light"><span/> UNSER ANSPRUCH</p><h2>Der Chef ist da.<br/><em>Das macht den Unterschied.</em></h2><p>Bei jedem Projekt ist die Geschäftsführung persönlich vor Ort. So bleiben Abstimmung, Sorgfalt und Qualität nah am Geschehen.</p></div></section>

      <section className="projects section" id="projekte"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span/> EINBLICKE IN UNSERE ARBEIT</p><h2>Arbeit, die für sich<br/><em>sprechen soll.</em></h2></div><p>Hier sollen echte Projekte aus dem Arbeitsalltag der Rothmeier GmbH gezeigt werden. Die Beispielbilder bitte vor Veröffentlichung durch eigene Referenzen ersetzen.</p></div>
        <div className="project-grid"><figure className="project project-large"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85" alt="Heller, fertig ausgebauter Innenraum" loading="lazy"/><figcaption><b>01</b><span>Innenausbau <small>Beispielbild – ersetzen</small></span></figcaption></figure><figure className="project"><img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85" alt="Detail eines modernen Innenraums" loading="lazy"/><figcaption><b>02</b><span>Wand- und Deckenflächen <small>Beispielbild – ersetzen</small></span></figcaption></figure><figure className="project"><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85" alt="Wohnraum mit klaren Oberflächen" loading="lazy"/><figcaption><b>03</b><span>Ausbau und Gestaltung <small>Beispielbild – ersetzen</small></span></figcaption></figure></div>
      </div></section>

      <section className="contact section" id="kontakt"><div className="container contact-grid"><div className="contact-intro"><p className="eyebrow light"><span/> KONTAKT & ANFRAGE</p><h2>Sie haben ein<br/><em>Projekt vor?</em></h2><p>Erzählen Sie uns, was Sie planen. Wir freuen uns auf Ihre Anfrage und den persönlichen Austausch.</p><div className="contact-details"><div><span>TELEFON</span><a href="tel:+498136228540">08136 228540</a></div><div><span>E-MAIL</span><a href="mailto:rothmeiergmbh@t-online.de">rothmeiergmbh@t-online.de</a></div><div><span>ANSCHRIFT</span><p>Blumenstraße 15<br/>85232 Deutenhausen</p></div></div></div>
        <div className="form-panel"><h3>Projektanfrage</h3><p>Füllen Sie die Felder aus. Anschließend wird eine E-Mail mit Ihren Angaben vorbereitet.</p><form onSubmit={submitInquiry}><div className="form-row"><label>Name *<input name="name" autoComplete="name" required/></label><label>Telefon<input name="phone" type="tel" autoComplete="tel"/></label></div><label>E-Mail-Adresse *<input name="email" type="email" autoComplete="email" required/></label><label>Worum geht es?<select name="service"><option>Trockenbau</option><option>Putzarbeiten</option><option>Stuckarbeiten</option><option>Sonstiges / Beratung</option></select></label><label>Ihre Nachricht *<textarea name="message" rows={5} required/></label><button className="button button-red submit-button" type="submit">Anfrage vorbereiten <b>↗</b></button><p className="form-note">Das Formular versendet keine Daten direkt über die Website, sondern öffnet Ihr E-Mail-Programm.</p><p className="sr-only" aria-live="polite">{status}</p></form></div>
      </div></section>

      <section className="map-section"><div className="container map-heading"><div><p className="eyebrow"><span/> UNSER EINSATZGEBIET</p><h2>Im Großraum<br/><em>München zuhause.</em></h2></div><p>Von unserem Standort in Deutenhausen aus betreuen wir Bauvorhaben im Großraum München. Fragen Sie uns gerne an, ob Ihr Projektgebiet dazugehört.</p></div><div className="map-frame"><iframe title="Karte: Rothmeier GmbH in Deutenhausen bei München" src="https://www.google.com/maps?q=Blumenstra%C3%9Fe%2015%2C%2085232%20Deutenhausen&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div></section>
    </main>
    <footer className="footer"><div className="container footer-main"><a className="footer-logo" href="#start"><img src="/rothmeier-logo.svg" alt="Rothmeier GmbH Logo"/></a><div><strong>Rothmeier GmbH</strong><p>Putz · Stuck · Trockenbau<br/>Blumenstraße 15<br/>85232 Deutenhausen</p></div><div><strong>Kontakt</strong><p><a href="tel:+498136228540">08136 228540</a><br/><a href="mailto:rothmeiergmbh@t-online.de">rothmeiergmbh@t-online.de</a></p></div><div><strong>Informationen</strong><p><a href="/impressum">Impressum</a><br/><a href="/datenschutz">Datenschutz</a></p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Rothmeier GmbH</span><span>Handwerk im Großraum München · Seit 1997</span></div></footer>
  </>;
}
