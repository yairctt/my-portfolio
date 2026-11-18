import { AppContext } from "../App.jsx";
import { useContext, useEffect, useRef, useState } from "react";
import { TbCheck, TbChevronDown } from "react-icons/tb";

// Flags are drawn as inline SVG (not emoji) so they render the same on every OS.
const flagClass = "w-5 h-[14px] shrink-0 rounded-[3px] shadow-sm ring-1 ring-black/10";

function FlagMX() {
    return (
        <svg viewBox="0 0 30 20" className={flagClass} aria-hidden="true">
            <rect width="10" height="20" x="0" fill="#006847" />
            <rect width="10" height="20" x="10" fill="#FFFFFF" />
            <rect width="10" height="20" x="20" fill="#CE1126" />
            {/* simplified coat of arms */}
            <circle cx="15" cy="10" r="3" fill="none" stroke="#5C8A3A" strokeWidth="0.9" />
            <circle cx="15" cy="9.6" r="1.7" fill="#8C5A2B" />
        </svg>
    );
}

function FlagUS() {
    const stripe = 20 / 13;
    const stars = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 5; col++) {
            stars.push(<circle key={`${row}-${col}`} cx={1.4 + col * 2.3} cy={1.4 + row * 2.6} r="0.55" fill="#FFFFFF" />);
        }
    }
    return (
        <svg viewBox="0 0 30 20" className={flagClass} aria-hidden="true">
            <rect width="30" height="20" fill="#FFFFFF" />
            {Array.from({ length: 7 }, (_, i) => (
                <rect key={i} y={i * 2 * stripe} width="30" height={stripe} fill="#B22234" />
            ))}
            <rect width="12" height={stripe * 7} fill="#3C3B6E" />
            {stars}
        </svg>
    );
}

const OPTIONS = [
    { code: "es", short: "ES", name: "Español", Flag: FlagMX },
    { code: "en", short: "EN", name: "English", Flag: FlagUS },
];

function ToggleLang() {
    const { lang, switchLang } = useContext(AppContext);
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const current = OPTIONS.find((o) => o.code === lang) || OPTIONS[0];

    // Close on outside click or Escape
    useEffect(() => {
        if (!open) return;
        const onClick = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        document.addEventListener("mousedown", onClick);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onClick);
            document.removeEventListener("keydown", onKey);
        };
    }, [open]);

    const choose = (code) => {
        if (code !== lang) switchLang();
        setOpen(false);
    };

    return (
        <div ref={ref} className="relative">
            {/* =========== CURRENT LANGUAGE =========== */}
            <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-haspopup="menu"
                aria-expanded={open}
                aria-label={lang === "es" ? "Idioma: Español" : "Language: English"}
                className="flex items-center gap-1.5 py-1 pl-2 pr-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:border-zinc-400 hover:text-zinc-900 dark:hover:border-zinc-500 dark:hover:text-white transition-colors duration-300"
            >
                <current.Flag />
                {current.short}
                <TbChevronDown className={`text-sm transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>

            {/* =========== LANGUAGE MENU =========== */}
            {open && (
                <div
                    role="menu"
                    className="absolute right-0 top-full mt-2 z-20 min-w-[150px] p-1 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-lg"
                >
                    {OPTIONS.map(({ code, name, Flag }) => {
                        const active = code === lang;
                        return (
                            <button
                                key={code}
                                type="button"
                                role="menuitemradio"
                                aria-checked={active}
                                lang={code}
                                onClick={() => choose(code)}
                                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-left transition-colors duration-200 ${
                                    active
                                        ? "font-semibold text-zinc-900 dark:text-white"
                                        : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                }`}
                            >
                                <Flag />
                                <span className="flex-1">{name}</span>
                                {active && <TbCheck className="text-red-800 dark:text-red-500" aria-hidden="true" />}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default ToggleLang;
