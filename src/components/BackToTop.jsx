import { useContext, useEffect, useState } from "react";
import { TbArrowUp } from "react-icons/tb";
import { AppContext } from "../App.jsx";
import user_info from "../data/user_info.js";
import user_info_es from "../data/user_info_es.js";

function BackToTop() {
  const { lang } = useContext(AppContext);
  const data = lang === "es" ? user_info_es : user_info;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={data.ui.footer.backToTop}
      title={data.ui.footer.backToTop}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 z-30 flex items-center justify-center size-11 rounded-full bg-red-800 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500 text-white shadow-lg transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <TbArrowUp className="text-xl" aria-hidden="true" />
    </button>
  );
}

export default BackToTop;
