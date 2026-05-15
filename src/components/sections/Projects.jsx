import { useContext } from "react";
import { AppContext } from "../../App.jsx";
import user_info from "../../data/user_info.js";
import user_info_es from "../../data/user_info_es.js";
import Project from "../Project.jsx";

function Projects() {
  const { lang } = useContext(AppContext);
  const data = lang === "es" ? user_info_es : user_info;

  return (
    <section
      id="projects"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:px-16"
    >
      {data.projects.map((project, index) => {
        return (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            link={project.link}
          />
        );
      })}
    </section>
  );
}

export default Projects;
