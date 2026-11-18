import { useLayoutEffect, useRef, useState } from "react";
import { CiLink } from "react-icons/ci";
import { FiCode } from "react-icons/fi";

const linkClass =
  "flex gap-2 hover:text-red-800 hover:dark:text-red-500 cursor-pointer transition-all duration-300";

const tagClass =
  "inline-flex items-center py-1 px-2.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500";

const isValidUrl = (url) => typeof url === "string" && url.trim() !== "" && url !== "#";

function LockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3 h-3"
      aria-hidden="true"
    >
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function ProjectImage({ image, title, link }) {
  const frame = "relative block overflow-hidden bg-zinc-100 dark:bg-zinc-900 aspect-[16/10] rounded-t-xl";

  const content = image ? (
    <img
      src={image}
      alt={title}
      loading="lazy"
      decoding="async"
      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
    />
  ) : (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-red-50 to-zinc-100 dark:from-red-900/20 dark:to-zinc-900 text-red-800 dark:text-red-500">
      <FiCode className="text-4xl" aria-hidden="true" />
      <span className="px-6 text-center text-sm font-semibold text-zinc-600 dark:text-zinc-300">{title}</span>
    </div>
  );

  if (isValidUrl(link)) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={frame} tabIndex={-1} aria-hidden="true">
        {content}
      </a>
    );
  }
  return <div className={frame}>{content}</div>;
}

function Project({
  title,
  description,
  technologies,
  link,
  github,
  privateReason,
  image,
  role,
  labels,
}) {
  const [expanded, setExpanded] = useState(false);
  const [truncated, setTruncated] = useState(false);
  const descRef = useRef(null);

  // Detect whether the clamped description hides text, so "show more" only appears when needed
  useLayoutEffect(() => {
    const el = descRef.current;
    if (!el || expanded) return;
    const measure = () => setTruncated(el.scrollHeight > el.clientHeight + 1);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [description, expanded]);

  const hasLink = isValidUrl(link);
  const hasGithub = isValidUrl(github);

  const techs = technologies.split(",").map((t) => t.trim());

  return (
    <article
      className="group h-full flex flex-col bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-300 hover:dark:border-zinc-700 hover:shadow-lg hover:shadow-zinc-200/60 hover:dark:shadow-black/40 transition-all duration-300"
    >
      {/* =========== PREVIEW IMAGE =========== */}
      <ProjectImage image={image} title={title} link={link} />

      <div className="flex flex-col flex-1 p-6">
        {/* =========== PROJECT TITLE =========== */}
        <h3 className="font-bold text-lg text-zinc-700 dark:text-zinc-300 line-clamp-2 min-h-[3.5rem]" title={title}>
          {title}
        </h3>

        {/* =========== ROLE =========== */}
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 min-h-[2.5rem]" title={role}>
          {role && (
            <>
              <span className="font-semibold">{labels.role}:</span> {role}
            </>
          )}
        </p>

        {/* =========== PROJECT DESCRIPTION =========== */}
        <p
          ref={descRef}
          className={`leading-7 text-zinc-500 dark:text-zinc-300 font-light text-base mt-3 min-h-[7rem] ${
            expanded ? "" : "line-clamp-4"
          }`}
        >
          {description}
        </p>
        <div className="h-6 mt-1">
          {(truncated || expanded) && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              className="text-xs font-medium text-red-800 dark:text-red-500 hover:underline"
            >
              {expanded ? labels.showLess : labels.showMore}
            </button>
          )}
        </div>

        {/* =========== TECHNOLOGIES USED =========== */}
        <div className="flex flex-wrap content-start gap-1.5 mt-3 min-h-[84px] max-[359px]:min-h-[114px] sm:min-h-[114px] md:min-h-[84px] lg:min-h-[114px] xl:min-h-[84px]" data-tags>
          {techs.map((tech, index) => (
            <span className={tagClass} key={index}>
              {tech}
            </span>
          ))}
        </div>

        {/* =========== LINKS (pinned to bottom) =========== */}
        <div className="mt-auto pt-5 min-h-[84px] flex flex-wrap items-start content-start gap-x-6 gap-y-3 text-zinc-600 dark:text-zinc-300 font-medium">
          {hasLink && (
            <a href={link} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <CiLink className="text-2xl self-center" />
              <span className="text-xs self-center">{labels.viewProject}</span>
            </a>
          )}
          {hasGithub ? (
            <a href={github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <CiLink className="text-2xl self-center" />
              <span className="text-xs self-center">{labels.viewGithub}</span>
            </a>
          ) : (
            <div className="flex items-center gap-2 min-w-0 max-w-full">
              <span
                className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 cursor-default select-none whitespace-nowrap"
                title={privateReason}
              >
                <LockIcon />
                {labels.privateCode}
              </span>
              {privateReason && (
                <span className="text-xs font-light text-zinc-500 dark:text-zinc-400 truncate">{privateReason}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default Project;
