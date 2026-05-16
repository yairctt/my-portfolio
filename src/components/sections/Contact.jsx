import { useContext } from "react";
import { AppContext } from "../../App.jsx";
import user_info from "../../data/user_info.js";
import user_info_es from "../../data/user_info_es.js";

import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  const { lang } = useContext(AppContext);
  const data = lang === "es" ? user_info_es : user_info;

  return (
    <section id="contact" className="mt-16 pt-12 px-6 lg:px-24">
      {/* =========== TITLE =========== */}
      <h4 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
        {data.ui.contact.title}{" "}
        <span className="text-red-800 dark:text-red-500">
          {data.ui.contact.subtitle}
        </span>
      </h4>

      {/* =========== DESCRIPTION =========== */}
      <p className="mt-8 leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light">
        {data.contact.description}
      </p>

      {/* =========== LINKS =========== */}
      <div className="mt-12">
        {/* =========== FACEBOOK =========== */}
        <a
          href={data.socials.facebook}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300  hover:text-zinc-700 transition-all duration-300"
        >
          <FaFacebook className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">{data.ui.contact.facebook}</span>
        </a>

        {/* =========== INSTAGRAM =========== */}
        <a
          href={data.socials.instagram}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaInstagram className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">{data.ui.contact.instagram}</span>
        </a>

        {/* =========== LINKEDIN =========== */}
        <a
          href={data.socials.linkedin}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaLinkedin className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">{data.ui.contact.linkedin}</span>
        </a>

        {/* =========== GITHUB =========== */}
        <a
          href={data.socials.github}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaGithub className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">{data.ui.contact.github}</span>
        </a>
      </div>

      <hr className="mt-6 w-72 border dark:border-zinc-800" />

      {/* =========== EMAIL =========== */}
      <a
        href={`mailto:${data.main.email}`}
        className="flex mt-6 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 gap-4 hover:text-zinc-700 transition-all duration-30"
      >
        <MdEmail className="self-center text-lg text-red-800 dark:text-red-500" />
        <span>{data.main.email}</span>
      </a>
    </section>
  );
}

export default Contact;
