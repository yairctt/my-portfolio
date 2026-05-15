import { useContext } from "react";
import { AppContext } from "../../App.jsx";
import user_info from "../../data/user_info.js";
import user_info_es from "../../data/user_info_es.js";
import { IoIosArrowForward } from "react-icons/io";

function Hero() {
  const { lang } = useContext(AppContext);
  const data = lang === "es" ? user_info_es : user_info;

  return (
    <section id="hero" className="pb-28 pt-24 sm:pt-28 md:pt-44 flex px-6 lg:px-24">
      <div className="self-center">
        <div className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle">
          <img
            src={data.main.photo}
            className="rounded-full mb-6 lg:hidden"
            alt="Yair Torres Profile Picture"
          />

          {/* =========== TOOLTIP TEXT =========== */}
          <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity  inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium text-zinc-950 dark:text-white rounded shadow-sm" role="tooltip">
            Hello! 👋 How are you doing? 🤔
          </span>
        </div>
        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center">
            <h2 className="text-xl">{data.main.role}</h2>
            <h1 className="font-black mt-3 text-5xl lg:w-[85%]">
              {data.main.name}
            </h1>

            <p className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7">
              {data.main.description}
            </p>

            <div className="flex gap-2 mt-6">
              <a
                href="#projects"
                className="px-6 py-3 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300"
              >
                {data.ui.nav.projects}
              </a>
              <a
                href="#contact"
                className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4"
              >
                <span className="self-center font-medium">{data.ui.nav.contact}</span>
                <IoIosArrowForward className="self-center" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block w-[480px] self-center">
            <img
              className="rounded-[10%] transform rotate-3"
              src={data.main.photo}
              alt="Yair Torres Profile Picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
