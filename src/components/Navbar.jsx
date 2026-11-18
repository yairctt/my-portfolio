import { useContext, useEffect, useState } from "react";
import { TbMenu2, TbX } from "react-icons/tb";
import { AppContext } from "../App.jsx";
import user_info from "../data/user_info.js";
import user_info_es from "../data/user_info_es.js";
import ToggleLang from "./ToggleLang.jsx";
import ToggleTheme from "./ToggleTheme.jsx";

const SECTIONS = [
  { id: "projects", key: "projects" },
  { id: "education-and-experience", key: "experience" },
  { id: "skills", key: "skills" },
  { id: "contact", key: "contact" },
];

function Navbar() {
  const { lang } = useContext(AppContext);
  const data = lang === "es" ? user_info_es : user_info;
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Highlight the section currently in view
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => observer.observe(el));

    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (window.scrollY < 200) setActive(null);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const linkClass = (id) =>
    `relative py-1 text-sm font-medium transition-colors duration-300 ${
      active === id
        ? "text-red-800 dark:text-red-500"
        : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
    }`;

  return (
    <header
      className={`sticky top-0 z-30 bg-white/85 dark:bg-zinc-950/85 backdrop-blur border-b transition-colors duration-300 ${
        scrolled ? "border-zinc-200 dark:border-zinc-800" : "border-transparent"
      }`}
    >
      <nav className="flex items-center justify-between gap-4 h-14 px-4 lg:px-16">
        {/* =========== NAME / HOME =========== */}
        <a href="#hero" onClick={() => setOpen(false)} className="font-black text-zinc-900 dark:text-white tracking-tight whitespace-nowrap">
          Yair Cruz<span className="text-red-800 dark:text-red-500">.</span>
        </a>

        {/* =========== SECTION LINKS (desktop) =========== */}
        <ul className="hidden md:flex items-center gap-7">
          {SECTIONS.map(({ id, key }) => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass(id)} aria-current={active === id ? "location" : undefined}>
                {data.ui.nav[key]}
              </a>
            </li>
          ))}
        </ul>

        {/* =========== CONTROLS =========== */}
        <div className="flex items-center gap-2">
          <ToggleLang />
          <ToggleTheme />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={data.ui.nav.menu}
            className="md:hidden flex items-center justify-center size-8 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300"
          >
            {open ? <TbX className="text-lg" aria-hidden="true" /> : <TbMenu2 className="text-lg" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* =========== SECTION LINKS (mobile) =========== */}
      {open && (
        <ul id="mobile-nav" className="md:hidden flex flex-col px-4 pb-3 border-t border-zinc-200 dark:border-zinc-800">
          {SECTIONS.map(({ id, key }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className={`block py-3 ${linkClass(id)}`}>
                {data.ui.nav[key]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
