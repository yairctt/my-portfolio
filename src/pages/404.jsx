import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbArrowLeft } from "react-icons/tb";
import { AppContext } from "../App.jsx";
import user_info from "../data/user_info.js";
import user_info_es from "../data/user_info_es.js";
import ToggleLang from "../components/ToggleLang.jsx";
import ToggleTheme from "../components/ToggleTheme.jsx";

function NotFound() {
    const navigate = useNavigate();
    const { lang } = useContext(AppContext);
    const data = lang === "es" ? user_info_es : user_info;
    const t = data.ui.notFound;

    return (
        <div className="bg-zinc-100 dark:bg-zinc-900">
            <div className="xl:w-[1200px] md:mx-auto min-h-screen flex flex-col border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                <div className="flex justify-end gap-2 p-4">
                    <ToggleLang />
                    <ToggleTheme />
                </div>

                <main className="flex-1 flex items-center justify-center px-6 pb-20">
                    <div className="text-center">
                        <p className="text-8xl font-black text-red-800 dark:text-red-500">404</p>
                        <h1 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-zinc-100">{t.title}</h1>
                        <p className="mt-4 leading-7 text-base font-light text-zinc-500 dark:text-zinc-400">{t.text}</p>
                        <button
                            type="button"
                            onClick={() => navigate("/")}
                            className="mt-8 inline-flex items-center gap-2 px-6 py-3 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white dark:text-white font-medium transition-all duration-300"
                        >
                            <TbArrowLeft aria-hidden="true" />
                            {t.button}
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default NotFound;
