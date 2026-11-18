import { useContext } from "react";
import { AppContext } from "../../App.jsx";
import user_info from "../../data/user_info.js";
import user_info_es from "../../data/user_info_es.js";
import Project from "../Project.jsx";

function Projects() {
  const { lang } = useContext(AppContext);
  const data = lang === "es" ? user_info_es : user_info;

  return (
    <section id="projects" className="px-4 lg:px-16 scroll-mt-8">
      {/* =========== PROJECTS TITLE =========== */}
      <h4 className="text-4xl font-bold text-center dark:text-white">
        {data.ui.sections.projects}
      </h4>

      {/* =========== PROJECTS GRID =========== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
        {data.projects.map((project) => (
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
            labels={data.ui.projects}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
