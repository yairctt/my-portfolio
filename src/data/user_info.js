const info = {
    // ============ MAIN DETAILS ============
    main: {
        name: "Yair Torres",
        description: "Computer Systems Engineering student focused on full-stack web development, cloud-based architectures, and software engineering. Experienced in building responsive platforms, automation systems, and scalable applications using JavaScript, Node.js, Java, and modern cloud services.",
        role: "Web Developer & Systems Engineering Student",
        photo: "../photo.webp",
        email: "yaircruztorres@gmail.com",
    },

    // ============ SOCIAL LINKS ============
    socials: {
        github: "https://github.com/yairctt",
        linkedin: "https://www.linkedin.com/in/yairctt/",
        instagram: "https://www.instagram.com/yairctt/",
        facebook: "https://www.facebook.com/yair.torres.568632",
    },

    // ============ PROJECTS ============
    projects: [
        {
            title: "Tutorías ISC",
            description: "High-performance full-stack educational platform built on a serverless architecture. Includes a RAG-powered AI assistant, Cloudflare R2 storage management, Redis-based persistence, and a premium glassmorphism interface optimized for accessibility and academic workflows.",
            technologies: "HTML5, CSS3, JavaScript, Node.js, Vercel Functions, Cloudflare R2, Upstash Redis, Resend, Gemini API, Bootstrap 5",
            github: "https://github.com/yairctt/tutorias-isc-itver",
            link: "https://tutoriasisc.com"
        },
        {
            title: "Giang Aluminum",
            description: "Custom web platform developed for a construction services company. Built with a vanilla architecture (without frameworks) to maximize performance and SEO. Includes a serverless backend for lead management and a robust Google Workspace integration for workflow automation.",
            technologies: "HTML, CSS, JavaScript, Google Workspace, Vercel",
            github: "https://github.com/yairctt/web-giang-aluminum",
            link: "https://giangaluminum.com"
        },
        {
            title: "Corazón de Coco",
            description: "Responsive multi-page website designed to showcase artisanal bakery products through modern frontend architecture, premium visual aesthetics, and a seamless user experience aligned with the brand identity.",
            technologies: "HTML, CSS, JavaScript",
            github: "https://github.com/yairctt/web-corazon-de-coco",
            link: "https://corazondcoco.com"
        },
        {
            title: "FAX Optimizing Compiler",
            description: "Robust compiler implementation capable of transforming a custom language (FAX) into executable C code. Features an advanced optimization engine using data-flow analysis (Liveness Analysis) for global dead-code elimination and loop-invariant code motion, improving overall target program efficiency.",
            technologies: "Java, JavaCC, Compiler Design",
            github: "https://github.com/yairctt/CompiladorFax",
            link: "https://github.com/yairctt/CompiladorFax"
        },
        {
            title: "NavyFax",
            description: "Interactive Java application built under the MVC architectural pattern, implementing advanced multithreading and concurrency concepts. The system manages enemies, projectiles, obstacles, and collision detection through independent execution threads, ensuring smooth and responsive gameplay. Includes dynamic resource management, game state handling, and a scalable architecture based on interfaces and inheritance.",
            technologies: "Java, Multithreading, OOP",
            github: "https://github.com/yairctt/NavyFaxBeta",
            link: "https://github.com/yairctt/NavyFaxBeta"
        },
    ],

    // ============ EDUCATION ============
    education: [
        {
            school: "Instituto Tecnológico de Veracruz",
            degree: "Bachelor's Degree in Computer Systems Engineering",
            duration: "2023 - Present",
            image: "itv.webp"
        },
    ],

    // ============ EXPERIENCE ============
    experience: [
        {
            position: "Frontend Web Developer",
            company: "Freelance Web Development",
            duration: "2026 - Present",
            image: "freelancer.webp",
            descriptions: [
                "Developed responsive websites and landing pages for real clients.",
                "Handled deployment using Vercel and integrated third-party services.",
                "Used HTML, CSS, and JavaScript to deliver production-ready results.",
            ]
        },
        {
            position: "Student Developer",
            company: "Academic Software Projects",
            duration: "2023 - Present",
            image: "itv.webp",
            descriptions: [
                "Built educational platforms with Node.js, cloud storage, and automated email.",
                "Developed Java applications including a compiler and an OOP-based mini game.",
                "Implemented automation tools and worked with cloud-based services.",
            ]
        },
    ],

    // ============ CERTIFICATES ============
    certificates: [],

    // ============ CONTACT ============
    contact: {
        title: "Let's Get in Touch: Ways to Connect with Me",
        description: "Thank you for visiting my portfolio. If you are interested in collaborating, discussing a project, or simply connecting, feel free to reach out through email or social media. I'm always open to learning opportunities, new projects, and meaningful conversations about technology and development.",
    },

    // ============ FOOTER ============
    footer: "© 2026 Yair Cruz Torres. All Rights Reserved",

    // ============ UI LABELS ============
    ui: {
        nav: {
            projects: "Projects",
            contact: "Contact",
        },
        sections: {
            education: "Education",
            experience: "Experience",
            skills: "Technologies I Use",
        },
        contact: {
            title: "Let's Get in Touch:",
            subtitle: "Ways to Connect with Me",
            facebook: "Follow on Facebook",
            instagram: "Follow on Instagram",
            linkedin: "Follow on LinkedIn",
            github: "Follow on GitHub",
        },
        footer: {
            backToTop: "Go back to top",
        },
    },
}

export default info
