import { useContext, useState } from "react";
import { AppContext } from "../../App.jsx";
import user_info from "../../data/user_info.js";
import user_info_es from "../../data/user_info_es.js";
import Project from "../Project.jsx";

// Display order of the filter buttons; categories without projects are hidden
const CATEGORY_ORDER = ["institutional", "client", "academic", "hackathon"];

function Projects() {
  const { lang } = useContext(AppContext);
  const data = lang === "es" ? user_info_es : user_info;
  const labels = data.ui.projects;
  const [filter, setFilter] = useState("all");

  const counts = data.projects.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});
  const filters = [
    { key: "all", count: data.projects.length },
    ...CATEGORY_ORDER.filter((c) => counts[c]).map((c) => ({ key: c, count: counts[c] })),
  ];
  const visible = filter === "all" ? data.projects : data.projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="px-4 lg:px-16 scroll-mt-8">
      {/* =========== PROJECTS TITLE =========== */}
      <h4 className="text-4xl font-bold text-center dark:text-white">
        {data.ui.sections.projects}
      </h4>

      {/* =========== CATEGORY FILTERS =========== */}
      <div className="flex flex-wrap justify-center gap-2 mt-8" role="group" aria-label={data.ui.sections.projects}>
        {filters.map(({ key, count }) => {
          const active = filter === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              aria-pressed={active}
              className={`inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full text-sm font-medium border transition-all duration-300 ${
                active
                  ? "bg-red-800 border-red-800 text-white dark:bg-red-500 dark:border-red-500 dark:text-zinc-950"
                  : "border-zinc-300 text-zinc-600 hover:border-red-800 hover:text-red-800 dark:border-zinc-700 dark:text-zinc-300 hover:dark:border-red-500 hover:dark:text-red-500"
              }`}
            >
              {labels.filters[key]}
              <span className={active ? "opacity-80" : "text-zinc-400 dark:text-zinc-500"}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* =========== PROJECTS GRID =========== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
        {visible.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            link={project.link}
            privateReason={project.privateReason}
            image={project.image}
            role={project.role}
            labels={labels}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
