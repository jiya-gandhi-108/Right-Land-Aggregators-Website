/* Shared header / footer components — Right Land Aggregators */

const BRAND_MARK = `<img class="brand-mark" src="img/logo-mark-sm.png" alt="Right Land emblem — rising sun over plotted fields with a golden key">`;

function headerHTML(active) {
  const links = [
    ["index.html", "Home"],
    ["about.html", "About"],
    ["services.html", "Services"],
    ["process.html", "Process"],
    ["industries.html", "Industries"],
    ["partners.html", "Partners"],
    ["why-us.html", "Why Us"],
    ["faq.html", "FAQ"],
    ["contact.html", "Contact"],
  ];
  return `
  <div class="announce">Pan-India Industrial Land Aggregation ∙ <span>Verified options within 15 working days</span> ∙ One disclosed fee, in writing</div>
  <nav class="navbar" aria-label="Main">
    <div class="nav-inner">
      <a class="brand" href="index.html" aria-label="Right Land — home">
        ${BRAND_MARK}
        <span class="brand-name">Right Land<small>Aggregators &amp; Developers</small></span>
      </a>
      <ul class="nav-links" id="navLinks">
        ${links.map(([href, label]) =>
          `<li><a href="${href}" ${active === href ? 'class="active" aria-current="page"' : ""}>${label}</a></li>`).join("")}
      </ul>
      <div class="nav-actions">
        <a class="btn btn-gold nav-cta" href="contact.html">Get Started <span class="arrow">→</span></a>
        <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>`;
}

function footerHTML() {
  return `
  <div class="ribbon" aria-label="Compliance">
    <div class="container">
      <ul>
        <li>MSME / Udyam Registered</li>
        <li>CIN: [●]</li>
        <li>GSTIN: [●]</li>
        <li>Pan-India Network</li>
      </ul>
    </div>
  </div>
  <footer class="footer">
    <p class="footer-tagline">ज़मीन सही। दाम सही। काम सही।</p>
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">${BRAND_MARK}
            <span class="brand-name">Right Land<small>Aggregators &amp; Developers Pvt. Ltd.</small></span>
          </div>
          <p>From License to Key. India's trusted industrial land aggregator — single-window land aggregation, approvals &amp; development partner.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="process.html">Process</a></li>
            <li><a href="industries.html">Industries</a></li>
            <li><a href="partners.html">Partners &amp; Associations</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="contact.html#landowners">List Your Land</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="services.html#aggregation">Land Aggregation</a></li>
            <li><a href="services.html#clu">CLU &amp; Conversion</a></li>
            <li><a href="services.html#licenses">Licenses &amp; NOCs</a></li>
            <li><a href="services.html#subsidies">Subsidies</a></li>
            <li><a href="services.html#construction">Construction &amp; PMC</a></li>
            <li><a href="services.html#turnkey">Turnkey Program</a></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Disclaimer</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-base">
        <p class="footer-legal">© 2026 Right Land Aggregators and Developers Pvt. Ltd. ∙ CIN: [●] ∙ Udyam Reg: [●] ∙ GSTIN: [●]</p>
        <div class="footer-social" aria-label="Social links">
          <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.09h4.56V23H.22V8.09zM8.34 8.09h4.37v2.04h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V23h-4.55v-6.58c0-1.57-.03-3.59-2.19-3.59-2.19 0-2.52 1.71-2.52 3.47V23H8.34V8.09z"/></svg></a>
          <a href="#" aria-label="X"><svg viewBox="0 0 24 24"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41z"/></svg></a>
          <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg></a>
        </div>
      </div>
    </div>
  </footer>
  <a class="float-cta" href="tel:+91XXXXXXXXXX" aria-label="Call Right Land">
    <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"/></svg>
  </a>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.innerHTML = headerHTML(document.body.dataset.page || "");
  if (f) f.innerHTML = footerHTML();

  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }
});
