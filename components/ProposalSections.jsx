import Palette from './Palette';

export function Header({ onDownload }) {
  return (
    <header className="site-header">
    <a className="brand" href="#" aria-label="LEAP 2027 home"><img className="fairplatz-header-logo" src="/assets/fairplatz-logo.png" alt="FAIRPLATZ" /><span className="brand-rule"></span><span className="brand-small">LEAP 2027<br />DESIGN PROPOSAL</span></a>
  </header>
  );
}

export function Cover({ onDownload }) {
  return (
    <section className="proposal-cover" aria-labelledby="proposal-title">
      <div className="cover-ribbons" aria-hidden="true"><i></i><i></i><i></i><span>ASCEND</span></div>
      <div className="proposal-cover-content"><p className="eyebrow">FAIRPLATZ PRESENTS / DESIGN PROPOSAL</p><div className="event-lockup"><img src="/assets/leap-logo.png" alt="LEAP" /><span>2027</span></div><p className="cover-theme">INTO NEW WORLDS</p><h1 id="proposal-title">MOOD BOARD<br /><em>&amp; SPATIAL DESIGN</em><br />PROPOSAL</h1><div className="cover-actions"><a className="button primary" href="#concept">Explore the proposal <span>↗</span></a><span>12—15 APRIL 2027<br />RIYADH, SAUDI ARABIA</span></div></div>
      <a className="cover-orbit" href="#areas" aria-label="Explore the 22 proposed event areas"><span>22</span><small>BRIEFED<br />EVENT AREAS</small><b>↗</b></a>
      <div className="proposal-cover-footer"><div><span>DESIGN DEVELOPMENT / PRODUCTION / DELIVERY</span><p>Global exhibition &amp; event production<br />Europe · Dubai · Riyadh</p></div><a href="https://www.fairplatz.com/" target="_blank" rel="noopener" aria-label="Visit FAIRPLATZ"><small>PROPOSED BY</small><img src="/assets/fairplatz-logo.png" alt="FAIRPLATZ" /><span>fairplatz.com ↗</span></a></div>
    </section>
  );
}

export function CompanyProfile({ onDownload }) {
  return (
    <section className="company-profile" id="fairplatz" aria-labelledby="company-title"><div className="company-introduction"><p className="eyebrow">YOUR PROPOSAL PARTNER</p><h2 id="company-title">Presented by <em>FAIRPLATZ.</em></h2><p>Global exhibition and event production, technical expertise and project delivery, supported by manufacturing facilities in Europe, Dubai and Riyadh.</p><a className="company-source" href="https://www.fairplatz.com/" target="_blank" rel="noopener">Explore our company ↗</a></div><div className="company-contact"><span>UNITED ARAB EMIRATES</span><h3>Dubai</h3><p>Global Production &amp; GCC HQ</p><a href="mailto:dubai@fairplatz.com">dubai@fairplatz.com</a><a href="tel:+97142655919">+971 4 265 5919</a></div><div className="company-contact"><span>SAUDI ARABIA</span><h3>Riyadh</h3><p>KSA Production Branch</p><a href="mailto:ksa@fairplatz.com">ksa@fairplatz.com</a><a href="tel:+966114566100">+966 11 456 6100</a><a className="contact-source" href="https://www.fairplatz.com/contact-3" target="_blank" rel="noopener">Company contact details ↗</a></div></section>
  );
}

export function EventDetails({ onDownload }) {
  return (
    <section className="event-strip" aria-label="Event details"><div><span className="label">THE EVENT</span><strong>LEAP 2027</strong></div><div><span className="label">WHEN</span><strong>12—15 April 2027</strong></div><div><span className="label">WHERE</span><strong>Riyadh, Saudi Arabia</strong><small>RECC · Malham</small></div><div><span className="label">CREATIVE PLATFORM</span><strong>ASCEND</strong><small>Into New Worlds</small></div></section>
  );
}

export function ReferenceDisclosure({ onDownload }) {
  return (
    <aside className="reference-disclosure"><span className="disclosure-icon">↗</span><div><strong>IMAGES ARE DESIGN REFERENCES</strong><p>Spatial renderings and material textures are AI-generated references for the booths and event spaces, created from the client’s briefs. Brand elements, area information and floor plans come from the client documents.</p></div></aside>
  );
}

export function Concept({ onDownload }) {
  return (
    <section className="proposal-concept" id="concept" aria-labelledby="concept-title"><div className="concept-topline"><span>FAIRPLATZ / PROPOSED CREATIVE DIRECTION</span><span>LEAP 2027 / 01</span></div><div className="concept-columns"><div className="concept-narrative"><p className="eyebrow">MAIN CONCEPT</p><h2 id="concept-title">ASCEND.<br /><em>SPACES THAT<br />MOVE IDEAS FORWARD.</em></h2><p>Our proposed spatial language translates LEAP’s ASCEND creative platform into a connected architectural journey. Layered forms, translucent surfaces and light give each space a distinct identity within one event.</p><p>From the first arrival to the final conversation, the experience moves through discovery, exchange and connection. Dark architectural volumes provide a calm foundation; cyan and pink accents bring energy and direction.</p><strong className="concept-signoff">ONE EVENT. DISTINCT SPACES. A SHARED DIRECTION.</strong></div><aside className="concept-purpose"><div><p className="eyebrow">CONCEPT GOAL</p><p>Create a coherent and memorable visitor experience across 22 briefed areas, connecting impactful stages, comfortable lounges, interactive activations and social spaces.</p></div><div><p className="eyebrow">CONCEPT KEYWORDS</p><p className="concept-keywords">ASCENT · DISCOVERY · CONNECTION<br />LIGHT · LAYERS · POSSIBILITY</p></div><div><p className="eyebrow">DESIGN FOUNDATION</p><p>LEAP 2027 brand palette + client requirements<br />FAIRPLATZ proposed spatial interpretation</p></div></aside></div><div className="journey-heading"><p className="eyebrow">THE VISITOR JOURNEY</p><span>SELECT A MOMENT TO EXPLORE ITS REFERENCE ↗</span></div><div className="proposal-journey">
      <a className="journey-stop" href="#area/tunnels"><div className="journey-image"><span>01</span><img src="/assets/reference-5-3.jpg" alt="AI-generated hall-link and arrival concept reference" /></div><h3>ARRIVE<br />&amp; ORIENT</h3><p>A clear, immersive<br />first impression</p><small>Hall links + entrance</small></a>
      <a className="journey-stop" href="#area/main-stage"><div className="journey-image"><span>02</span><img src="/assets/reference-1-0.jpg" alt="AI-generated Main Stage concept reference" /></div><h3>EXPERIENCE<br />&amp; DISCOVER</h3><p>Ideas take the stage<br />in a shared atmosphere</p><small>Stages + content</small></a>
      <a className="journey-stop" href="#area/investors-lounge-matchmaking"><div className="journey-image"><span>03</span><img src="/assets/reference-3-2.jpg" alt="AI-generated investor lounge concept reference" /></div><h3>CONNECT<br />&amp; EXCHANGE</h3><p>Spaces for conversation<br />and opportunity</p><small>Lounges + matchmaking</small></a>
      <a className="journey-stop" href="#area/future-mobility-zone"><div className="journey-image"><span>04</span><img src="/assets/reference-5-0.jpg" alt="AI-generated Future Mobility concept reference" /></div><h3>EXPLORE<br />&amp; ENGAGE</h3><p>Make innovation<br />tangible and memorable</p><small>Activations + experiences</small></a>
      <a className="journey-stop" href="#area/food-festival-outdoor-f-b"><div className="journey-image"><span>05</span><img src="/assets/reference-6-1.jpg" alt="AI-generated Food Festival concept reference" /></div><h3>PAUSE<br />&amp; RECONNECT</h3><p>Social places to gather,<br />recharge and return</p><small>Food + social spaces</small></a>
    </div><p className="journey-disclaimer">Journey images are AI-generated concept references for the proposed event spaces.</p><a className="concept-explore" href="#areas">Explore the complete collection <span>22 AREAS ↗</span></a></section>
  );
}

export function Direction({ onDownload }) {
  return (
    <section id="direction" className="direction-section"><div className="direction-visual"><img src="/assets/direction.jpg" alt="Dark architectural direction with illuminated frames, layered surfaces and LEAP colour accents" loading="lazy" /></div><div className="direction-copy"><p className="eyebrow">ONE VISUAL LANGUAGE</p><h2>Dark space.<br /><em>Bright possibility.</em></h2><p>Charcoal architecture gives the event its foundation. Brushed metal, translucent layers and tactile finishes bring depth. Cyan and pink light trace the journey.</p><div className="direction-words"><span>01 / LAYER</span><span>02 / ILLUMINATE</span><span>03 / ASCEND</span></div><div className="brand-palette" aria-label="LEAP brand colour palette"><Palette /></div><p className="fine-print">LEAP 2027 brand colours. Concept images are AI-generated design references; finishes and lighting are proposed for development.</p></div></section>
  );
}

export function Closing({ onDownload }) {
  return (
    <section className="closing"><div><p className="eyebrow">TAKE THE IDEAS WITH YOU</p><h2>Built to explore.<br /><em>Ready to rework.</em></h2></div><div><p>Keep the complete area book close, or take the editable presentation into your own design process.</p><button className="button primary download-trigger" onClick={onDownload}>Get the design book <span>↗</span></button></div></section>
  );
}

export function Footer({ onDownload }) {
  return (
    <footer><a className="footer-company" href="https://www.fairplatz.com/" target="_blank" rel="noopener" aria-label="FAIRPLATZ website"><img src="/assets/fairplatz-logo.png" alt="FAIRPLATZ" /></a><span>LEAP 2027 / MOOD BOARD PROPOSAL BY FAIRPLATZ</span><small>Concept study · November 2026</small><a href="#areas">Explore all areas ↑</a></footer>
  );
}

