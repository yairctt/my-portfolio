import { AppContext } from "../App.jsx";
import { useContext } from "react";

function FlagMX() {
    return (
        <svg viewBox="0 0 30 20" className="w-5 h-[14px] rounded-[3px] shadow-sm ring-1 ring-black/10" aria-hidden="true">
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
        <svg viewBox="0 0 30 20" className="w-5 h-[14px] rounded-[3px] shadow-sm ring-1 ring-black/10" aria-hidden="true">
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
    { code: "es", label: "ES", Flag: FlagMX, name: "Español" },
    { code: "en", label: "EN", Flag: FlagUS, name: "English" },
];

function ToggleLang() {
    const { lang, switchLang } = useContext(AppContext);

    return (
        <div
            role="group"
            aria-label={lang === "es" ? "Idioma" : "Language"}
            className="flex items-center p-0.5 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 backdrop-blur"
        >
            {OPTIONS.map(({ code, label, Flag, name }) => {
                const active = lang === code;
                return (
                    <button
                        key={code}
                        type="button"
                        lang={code}
                        onClick={() => !active && switchLang()}
                        aria-pressed={active}
                        aria-label={name}
                        title={name}
                        className={`flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                            active
                                ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-700 dark:text-white"
                                : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 opacity-70 hover:opacity-100"
                        }`}
                    >
                        <Flag />
                        {label}
                    </button>
                );
            })}
        </div>
    );
}

export default ToggleLang;
