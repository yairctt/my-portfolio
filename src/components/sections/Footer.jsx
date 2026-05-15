import { useContext } from "react";
import { AppContext } from "../../App.jsx";
import user_info from "../../data/user_info.js";
import user_info_es from "../../data/user_info_es.js";
import GitHubButton from "react-github-btn";
import { FaArrowCircleUp } from "react-icons/fa";

function Footer({ theme }) {
  const { lang } = useContext(AppContext);
  const data = lang === "es" ? user_info_es : user_info;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="p-4 text-center md:flex justify-between">
      {/* =========== GITHUB BUTTON =========== */}
      <GitHubButton
        className="self-center"
        href="https://github.com/yairctt"
        data-color-scheme={theme}
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star yairctt on GitHub"
      >
        Star on Github
      </GitHubButton>
      {/* =========== USER COPYRIGHT =========== */}
      <p className="text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 text-sm text-center font-light">
        {data.footer}
      </p>
      {/* =========== SCROLL ON TOP BUTTON =========== */}
      <button
        onClick={() => scrollToTop()}
        className="text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 mx-auto md:mx-0 text-sm font-light flex gap-2"
      >
        <FaArrowCircleUp className="self-center text-red-800 dark:text-red-500" />
        {data.ui.footer.backToTop}
      </button>
    </footer>
  );
}

export default Footer;
