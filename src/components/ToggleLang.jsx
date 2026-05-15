import { AppContext } from "../App.jsx";
import { useContext } from "react";
import { TbWorld } from "react-icons/tb";

function ToggleLang() {
    const { lang, switchLang } = useContext(AppContext);

    return (
        <div className="hs-tooltip [--placement:bottom] inline-block">
            <button
                onClick={switchLang}
                className="hs-tooltip-toggle flex items-center gap-1 text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-zinc-100 transition-all duration-300"
                aria-label="Toggle Language"
            >
                <TbWorld className="text-2xl" />
                <span className="text-xs font-semibold">{lang === "es" ? "EN" : "ES"}</span>

                {/* =========== TOOLTIP TEXT =========== */}
                <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium dark:text-white rounded shadow-sm" role="tooltip">
                    {lang === "es" ? "Switch to English" : "Cambiar a Español"}
                </span>
            </button>
        </div>
    );
}

export default ToggleLang;
