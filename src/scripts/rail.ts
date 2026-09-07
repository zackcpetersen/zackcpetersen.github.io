/*
 * The reach line. One indigo line in the gutter draws as far as the reader has scrolled
 * plus a lead of 40% of the viewport. Rows whose node the line head has passed get `.reached`
 * once and keep it. The elevation readout climbs with the line.
 *
 * Without this script (or with reduced motion) the page renders fully drawn: the hollow
 * state only exists under html.js, and this script exits early when motion is reduced.
 */
const rail = document.querySelector<HTMLElement>('[data-rail]');
const line = rail?.querySelector<HTMLElement>('.rail-line');
const readout = document.querySelector<HTMLElement>('[data-elev]');

if (rail && line) {
  const rows = Array.from(rail.querySelectorAll<HTMLElement>('.row[data-node]'));
  const LEAD = 0.4;
  const LO = 4226;   // Salt Lake City
  const HI = 11253;  // Lone Peak
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  let railTop = 0;
  let railHeight = 1;
  let offsets: number[] = [];
  let ticking = false;
  let resizeTimer = 0;

  const vh = () => window.visualViewport?.height ?? window.innerHeight;
  const fmt = (n: number) => Math.round(n).toLocaleString('en-US');

  const measure = () => {
    const r = rail.getBoundingClientRect();
    railTop = r.top + window.scrollY;
    railHeight = rail.offsetHeight || 1;
    offsets = rows.map(row => {
      const node = row.querySelector<HTMLElement>('.node');
      if (!node) return 0;
      const b = node.getBoundingClientRect();
      return b.top + window.scrollY + b.height / 2;
    });
  };

  const fillAll = () => {
    rows.forEach(row => row.classList.add('reached'));
    line.style.setProperty('--reach', '1');
    if (readout) readout.textContent = fmt(HI);
  };

  const update = () => {
    ticking = false;
    // The head leads by 40% of the viewport at the top and by a full viewport at the bottom,
    // so it reaches the end of the rail exactly when the page is scrolled to the end.
    // A page that does not scroll has maxScroll <= 0 and is drawn in full on load.
    const height = vh();
    const maxScroll = document.documentElement.scrollHeight - height;
    const progress = maxScroll > 0 ? Math.max(0, Math.min(1, window.scrollY / maxScroll)) : 1;
    const short = maxScroll <= 0;
    const head = window.scrollY + height * (LEAD + (1 - LEAD) * progress);
    const reach = short ? 1 : Math.max(0, Math.min(1, (head - railTop) / railHeight));
    line.style.setProperty('--reach', String(reach));
    rows.forEach((row, i) => {
      if (!row.classList.contains('reached') && (short || offsets[i] <= head)) row.classList.add('reached');
    });
    if (readout) readout.textContent = fmt(LO + (HI - LO) * reach);
  };

  const request = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  if (reduce) {
    fillAll();
  } else {
    measure();
    // intro: the origin appears at 150ms, then the line draws out to the lead over --d-intro
    window.setTimeout(() => {
      line.classList.add('intro');
      request();
      window.setTimeout(() => line.classList.remove('intro'), 520);
    }, 150);

    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => { measure(); request(); }, 120);
    });
    document.fonts?.ready.then(() => { measure(); request(); });
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) { measure(); request(); }
    });
    window.addEventListener('load', () => { measure(); request(); });
  }
}
