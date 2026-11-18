import { useContext } from "react";
import { CgDarkMode } from "react-icons/cg";
import { AppContext } from "../App.jsx";

function ToggleTheme({ switchTheme }) {
    const { lang, theme } = useContext(AppContext);
    const label =
        lang === "es"
            ? theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
            : theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

    return (
        <div className="hs-tooltip [--placement:bottom] inline-block">
            <button onClick={switchTheme} className="hs-tooltip-toggle flex items-center text-2xl text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-zinc-100 transition-all duration-300" aria-label={label}>
                <CgDarkMode />

                {/* =========== TOOLTIP TEXT =========== */}
                <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium dark:text-white rounded shadow-sm" role="tooltip">
                    {label}
                </span>
            </button>
        </div>
    );
}

export default ToggleTheme;
