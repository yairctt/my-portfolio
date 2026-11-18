import { useContext } from "react";
import { AppContext } from "../../App.jsx";
import user_info from "../../data/user_info.js";
import user_info_es from "../../data/user_info_es.js";

function Achievements() {
  const { lang } = useContext(AppContext);
  const data = lang === "es" ? user_info_es : user_info;

  if (!data.achievements?.length) return null;

  return (
    <section id="achievements" className="mt-20 mx-4 lg:mx-20">
      {/* =========== ACHIEVEMENTS TITLE =========== */}
      <h4 className="text-4xl font-bold text-center dark:text-white">
        {data.ui.sections.achievements}
      </h4>

      {/* =========== ACHIEVEMENTS LIST =========== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {data.achievements.map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
          >
            <p className="text-3xl font-black text-red-800 dark:text-red-500">{item.value}</p>
            <p className="mt-2 font-semibold text-zinc-800 dark:text-zinc-100 leading-snug">{item.title}</p>
            <p className="mt-2 text-sm font-light leading-6 text-zinc-500 dark:text-zinc-400">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
