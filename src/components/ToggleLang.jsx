import { AppContext } from "../App.jsx";
import { useContext } from "react";

// Flags are drawn as inline SVG (not emoji) so they render the same on every OS.
// preserveAspectRatio="slice" lets them fill the round knob.
function FlagMX() {
    return (
        <svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" className="w-full h-full" aria-hidden="true">
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
        <svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" className="w-full h-full" aria-hidden="true">
            <rect width="30" height="20" fill="#FFFFFF" />
            {Array.from({ length: 7 }, (_, i) => (
                <rect key={i} y={i * 2 * stripe} width="30" height={stripe} fill="#B22234" />
            ))}
            <rect width="12" height={stripe * 7} fill="#3C3B6E" />
            {stars}
        </svg>
    );
}

function ToggleLang() {
    const { lang, switchLang } = useContext(AppContext);
    const isEn = lang === "en";

    return (
        <button
            type="button"
            role="switch"
            aria-checked={isEn}
            onClick={switchLang}
            aria-label={isEn ? "Language: English. Switch to Spanish" : "Idioma: Español. Cambiar a inglés"}
            title={isEn ? "Cambiar a Español" : "Switch to English"}
            className="relative flex items-center w-[68px] h-8 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors duration-300"
        >
            {/* =========== CURRENT LANGUAGE CODE (opposite side of the knob) =========== */}
            <span
                className={`absolute text-[11px] font-bold text-zinc-600 dark:text-zinc-300 transition-all duration-300 ${
                    isEn ? "left-2.5" : "right-2.5"
                }`}
            >
                {isEn ? "EN" : "ES"}
            </span>

            {/* =========== SLIDING KNOB WITH FLAG =========== */}
            <span
                className={`absolute top-[3px] left-[3px] w-6 h-6 rounded-full overflow-hidden shadow ring-1 ring-black/10 transition-transform duration-300 ease-out ${
                    isEn ? "translate-x-[36px]" : "translate-x-0"
                }`}
            >
                {isEn ? <FlagUS /> : <FlagMX />}
            </span>
        </button>
    );
}

export default ToggleLang;
