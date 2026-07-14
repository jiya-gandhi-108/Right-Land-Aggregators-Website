/* Right Land — interactions
   Energy rules: entrances fade-UP or slide LEFT→RIGHT only,
   counters count UPWARD, gold progress line grows W→E. */

document.addEventListener("DOMContentLoaded", () => {

  /* Scroll progress — thin gold line, left → right */
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.prepend(bar);
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Reveal on scroll (fade-up / slide from west) */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal, .reveal-left").forEach((el) => io.observe(el));

  /* Counters — count upward on entry */
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      cio.unobserve(e.target);
      const el = e.target;
      const target = parseInt(el.dataset.count, 10);
      const dur = 1800;
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + (el.dataset.suffix || "");
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));

  /* FAQ accordion */
  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const ans = item.querySelector(".faq-a");
      const open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
      ans.style.maxHeight = open ? ans.scrollHeight + "px" : "0";
    });
  });

  /* Requirement form */
  const form = document.getElementById("requirementForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const box = document.getElementById("formSuccess");
      form.style.display = "none";
      if (box) box.style.display = "block";
      box?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
});
