import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import BackToTop from "../components/BackToTop.jsx";
import Reveal from "../components/Reveal.jsx";

import Hero from "../components/sections/Hero.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import EducationAndExperience from "../components/sections/EducationAndExperience.jsx";
import Skills from "../components/sections/Skills.jsx";

function Homepage() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900">
      <div className="xl:w-[1200px] md:mx-auto h-full border-x border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <Navbar />

        <Hero />
        <Reveal><Projects /></Reveal>
        <Reveal><EducationAndExperience /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Contact /></Reveal>

        <hr className="mt-12 border border-zinc-300 dark:border-zinc-800" />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

export default Homepage;