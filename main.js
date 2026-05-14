/* Malaysia Clear Ice | small, native JS only */

(function () {
  const ready = (fn) =>
    document.readyState !== "loading"
      ? fn()
      : document.addEventListener("DOMContentLoaded", fn);

  ready(() => {
    // Footer year
    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });

    // Mobile nav toggle
    const toggle = document.querySelector("[data-nav-toggle]");
    const menu = document.querySelector("[data-mobile-menu]");
    if (toggle && menu) {
      const setOpen = (open) => {
        toggle.setAttribute("aria-expanded", String(open));
        menu.dataset.open = String(open);
        if (open) menu.removeAttribute("hidden");
        else menu.setAttribute("hidden", "");
      };
      toggle.addEventListener("click", () => {
        setOpen(toggle.getAttribute("aria-expanded") !== "true");
      });
      menu.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => setOpen(false))
      );
      window.addEventListener("resize", () => {
        if (window.matchMedia("(min-width: 881px)").matches) setOpen(false);
      });
    }

    // Smooth anchor scroll (respects reduced motion)
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({
          behavior: reduced ? "auto" : "smooth",
          block: "start",
        });
      });
    });
  });
})();
