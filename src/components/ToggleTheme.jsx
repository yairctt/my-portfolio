import { useContext } from "react";
import { TbMoon, TbSun } from "react-icons/tb";
import { AppContext } from "../App.jsx";

function ToggleTheme() {
    const { lang, theme, switchTheme } = useContext(AppContext);
    const isDark = theme === "dark";
    const label =
        lang === "es"
            ? isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
            : isDark ? "Switch to light mode" : "Switch to dark mode";

    return (
        <button
            type="button"
            onClick={switchTheme}
            aria-label={label}
            title={label}
            className="relative flex items-center justify-center size-8 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:border-zinc-400 hover:text-zinc-900 dark:hover:border-zinc-500 dark:hover:text-white transition-colors duration-300 overflow-hidden"
        >
            {/* Moon in light mode (go dark), sun in dark mode (go light); they swap with a small rotation */}
            <TbMoon
                aria-hidden="true"
                className={`absolute text-lg transition-all duration-300 ${isDark ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}
            />
            <TbSun
                aria-hidden="true"
                className={`absolute text-lg transition-all duration-300 ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"}`}
            />
        </button>
    );
}

export default ToggleTheme;
