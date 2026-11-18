import { useContext, useState } from "react";
import { AppContext } from "../../App.jsx";
import user_info from "../../data/user_info.js";
import user_info_es from "../../data/user_info_es.js";

import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbCheck, TbCopy } from "react-icons/tb";

const linkClass =
  "flex gap-4 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 hover:dark:text-white transition-all duration-300";

function Contact() {
  const { lang } = useContext(AppContext);
  const data = lang === "es" ? user_info_es : user_info;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(data.main.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard not available (e.g. insecure context): fall back to the mailto link
      window.location.href = `mailto:${data.main.email}`;
    }
  };

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

      {/* =========== EMAIL =========== */}
      <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3">
        <a href={`mailto:${data.main.email}`} className={linkClass}>
          <MdEmail className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">{data.main.email}</span>
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:border-red-800 hover:text-red-800 hover:dark:border-red-500 hover:dark:text-red-500 transition-all duration-300"
          aria-live="polite"
        >
          {copied ? <TbCheck aria-hidden="true" /> : <TbCopy aria-hidden="true" />}
          {copied ? data.ui.contact.emailCopied : data.ui.contact.copyEmail}
        </button>
      </div>

      <hr className="mt-6 w-72 border dark:border-zinc-800" />

      {/* =========== LINKS =========== */}
      <div className="mt-6">
        {/* =========== LINKEDIN =========== */}
        <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <FaLinkedin className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">{data.ui.contact.linkedin}</span>
        </a>

        {/* =========== GITHUB =========== */}
        <a href={data.socials.github} target="_blank" rel="noopener noreferrer" className={`${linkClass} mt-4`}>
          <FaGithub className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">{data.ui.contact.github}</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
