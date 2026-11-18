import { useContext } from "react";
import { AppContext } from "../../App.jsx";
import user_info from "../../data/user_info.js";
import user_info_es from "../../data/user_info_es.js";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";

function Footer() {
  const { lang } = useContext(AppContext);
  const data = lang === "es" ? user_info_es : user_info;

  const links = [
    { href: data.socials.linkedin, label: "LinkedIn", Icon: TbBrandLinkedin, external: true },
    { href: data.socials.github, label: "GitHub", Icon: TbBrandGithub, external: true },
    { href: `mailto:${data.main.email}`, label: "Email", Icon: TbMail, external: false },
  ];

  return (
    <footer className="px-6 lg:px-24 pt-6 pb-20 md:pb-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
      {/* =========== COPYRIGHT =========== */}
      <p className="text-zinc-600 dark:text-zinc-300 text-sm font-light text-center">
        © {new Date().getFullYear()} {data.footer}
      </p>

      {/* =========== SOCIAL LINKS =========== */}
      <div className="flex items-center gap-2">
        {links.map(({ href, label, Icon, external }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="flex items-center justify-center size-9 rounded-full text-zinc-500 hover:text-red-800 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-red-500 dark:hover:bg-zinc-900 transition-colors duration-300"
          >
            <Icon className="text-xl" aria-hidden="true" />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
