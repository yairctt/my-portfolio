const info = {
    // ============ MAIN DETAILS ============
    main: {
        name: "Yair Cruz Torres",
        description: "Computer Systems Engineering student at the Instituto Tecnológico de Veracruz (TecNM), with experience building software for institutional projects and clients. I work on full-stack web development, REST APIs, databases, and applied AI, with projects in production such as the ISC Tutoring Portal and MiTutorIA, an AI assistant built with RAG and Gemini available to 212 students.",
        role: "Software Developer · Computer Systems Engineering Student",
        photo: "../photo.webp",
        cv: "/cv/CV_Yair_Cruz_Torres.pdf",
        email: "yaircruztorres@gmail.com",
    },

    // ============ SOCIAL LINKS ============
    socials: {
        github: "https://github.com/yairctt",
        linkedin: "https://www.linkedin.com/in/yairctt/",
    },

    // ============ PROJECTS ============
    projects: [
        {
            title: "Tutorías ISC — Coordination Portal",
            category: "institutional",
            role: "Full-stack developer",
            image: "/projects/tutorias-isc.webp",
            description: "Serverless academic management platform for the ISC Tutoring Coordination office at TecNM Veracruz. Automatically delivers certificates from Cloudflare R2 to each student's institutional email through an endpoint with multi-layered security. Includes a tutor search tool, a unified authentication and Redis-based profile system, and an admin dashboard on a dedicated subdomain.",
            technologies: "HTML5, CSS3, JavaScript, Node.js, Vercel Functions, Cloudflare R2, Upstash Redis, Resend, Bootstrap 5",
            privateReason: "Institutional project",
            link: "https://www.tutoriasisc.com/"
        },
        {
            title: "MiTutorIA — AI Tutoring Assistant",
            category: "institutional",
            role: "Full-stack developer and AI integration",
            image: "/projects/mitutoria.webp",
            description: "AI assistant for ISC students built on RAG and the Gemini and DeepSeek models, delivering real-time responses via SSE streaming. Integrates 17 interactive Learning Objects from Tutoring I and II, and injects each student's progress into the assistant's context to tailor its answers.",
            technologies: "JavaScript, Node.js, Gemini API, DeepSeek API, RAG, SSE, Upstash Redis, Vercel Functions",
            privateReason: "Institutional project",
            link: "https://www.tutoriasisc.com/tutor-ia"
        },
        {
            title: "Pulso Jarocho — 3rd Place Hackathon",
            category: "hackathon",
            role: "Interactive map, QR validation, integration and deployment (team of 5)",
            image: "/projects/pulso-jarocho.webp",
            description: "Smart tourism PWA built in 24 hours at the Veracruz Tech Week 2026 Hackathon for \"Challenge 6 · Centro Vivo\", focused on revitalizing the Historic Center of Veracruz. Generates personalized routes based on the visitor's available time and interests, validates visits to local businesses through QR codes with single-use tokens verified on the server, and includes a metrics dashboard for local authorities. Five-person team; responsible for the interactive map, QR validation, integration, and deployment.",
            technologies: "Next.js, TypeScript, Supabase (PostgreSQL), Leaflet, Gemini API, Vercel",
            privateReason: "Hackathon team project",
            link: "https://centro-vive-proton.vercel.app/"
        },
        {
            title: "Academic Project Bank Management System",
            category: "academic",
            role: "Full-stack developer",
            image: "/projects/banco-proyectos.webp",
            description: "Web system for managing the degree program's academic project bank, with four role-based portals and a complete workflow for project registration, approval, application, and assignment. Enforces business rules at the database level through constraints and triggers, uses locking transactions to prevent race conditions, and applies security through CSP headers, login lockout after repeated failed attempts, and secure sessions. Deployed to production on Hostinger.",
            technologies: "PHP, MySQL, JavaScript, PHPUnit, Hostinger",
            privateReason: "Academic project",
            link: "https://elprofecoss.tech/w1204/"
        },
        {
            title: "InvitacionesLovi AI Chatbot",
            category: "client",
            role: "Backend and AI developer",
            image: "/projects/invitacioneslovi.webp",
            description: "Multilingual AI chatbot for a digital invitations business, powered by Gemini with SSE streaming, business context via RAG, and file-based rate limiting. Deployed on DigitalOcean with Apache.",
            technologies: "PHP, Apache, Gemini API, SSE, DigitalOcean",
            privateReason: "Client project",
            link: "https://invitacioneslovi.com/"
        },
        {
            title: "GoCheck — Attendance Control System",
            category: "academic",
            image: "/projects/gocheck.webp",
            role: "Full-stack developer",
            description: "Client-server system for tracking staff attendance in grocery stores and supermarkets. The web terminal, designed for physical kiosks, lets employees record their four daily events (clock-in, lunch break, return, and clock-out) via QR code or PIN, with validation that prevents duplicate entries. The Node.js/Express REST API uses MySQL with a Primary/Replica pool, JWT authentication, BcryptJS hashing, rate limiting, and an audit log. Includes a dashboard with real-time KPIs: active employees, attendance, late arrivals, leaves, and absences.",
            technologies: "HTML5, CSS3, JavaScript, Bootstrap, Node.js, Express, MySQL, JWT",
            github: "https://github.com/yairctt/gocheck-sistema"
        },
        {
            title: "Giang Aluminum",
            category: "client",
            role: "Web developer (freelance)",
            image: "/projects/giang-aluminum.webp",
            description: "Custom web platform developed for a construction services company. Built with a vanilla architecture (without frameworks) to maximize performance and SEO. Includes a serverless backend for lead management and a robust Google Workspace integration for workflow automation.",
            technologies: "HTML, CSS, JavaScript, Google Workspace, Vercel",
            privateReason: "Client project",
            link: "https://giangaluminum.com/"
        },
        {
            title: "Corazón de Coco",
            category: "client",
            role: "Web developer (freelance)",
            image: "/projects/corazon-de-coco.webp",
            description: "Responsive multi-page website designed to showcase artisanal bakery products through modern frontend architecture, premium visual aesthetics, and a seamless user experience aligned with the brand identity.",
            technologies: "HTML, CSS, JavaScript",
            privateReason: "Client project",
            link: "https://corazondcoco.com/"
        },
        {
            title: "FAX Optimizing Compiler",
            category: "academic",
            image: "/projects/fax-compiler.webp",
            description: "Robust compiler implementation capable of transforming a custom language (FAX) into executable C code. Features an advanced optimization engine using data-flow analysis (Liveness Analysis) for global dead-code elimination and loop-invariant code motion, improving overall target program efficiency.",
            technologies: "Java, JavaCC, Compiler Design",
            github: "https://github.com/yairctt/CompiladorFax"
        },
        {
            title: "NavyFax",
            category: "academic",
            image: "/projects/navyfax.webp",
            description: "Interactive Java application built under the MVC architectural pattern, implementing advanced multithreading and concurrency concepts. The system manages enemies, projectiles, obstacles, and collision detection through independent execution threads, ensuring smooth and responsive gameplay. Includes dynamic resource management, game state handling, and a scalable architecture based on interfaces and inheritance.",
            technologies: "Java, Multithreading, OOP",
            github: "https://github.com/yairctt/NavyFaxBeta"
        },
    ],

    // ============ EDUCATION ============
    education: [
        {
            school: "Instituto Tecnológico de Veracruz (TecNM)",
            degree: "Bachelor's Degree in Computer Systems Engineering · GPA 90.07",
            duration: "2023 - 2027 (expected graduation)",
            image: "itv.webp"
        },
    ],

    // ============ EXPERIENCE ============
    experience: [
        {
            position: "Freelance Web Developer",
            company: "Freelance Web Development",
            duration: "2025 - Present",
            image: "freelancer.webp",
            descriptions: [
                "Built websites for clients such as Giang Aluminum and Corazón de Coco.",
                "Handled deployment on Vercel and integrated third-party services.",
                "Delivered production-ready responsive sites with HTML, CSS, and JavaScript.",
            ]
        },
        {
            position: "Web Developer",
            company: "GMayaS Digital Services",
            duration: "2026",
            image: "gmayas.webp",
            descriptions: [
                "Full-stack development of web solutions and platforms.",
                "Integration of third-party services and APIs.",
                "Maintenance and performance optimization.",
            ]
        },
        {
            position: "Social Service",
            company: "ISC Tutoring Coordination · ITVer",
            duration: "2025 - 2026",
            image: "itv.webp",
            descriptions: [
                "Developed, deployed, and maintained the web portal for the Computer Systems Department's Tutoring Coordination office.",
                "Built MiTutorIA: a RAG and Gemini chatbot plus learning objects for Tutoring I and II.",
                "Platform in production, available to 212 students.",
            ]
        },
    ],

    // ============ CERTIFICATES ============
    certificates: [
        {
            title: "CCNA: Switching, Routing, and Wireless Essentials",
            description: "Cisco Networking Academy · Aug 2026",
            icon: "cisco",
            link: "/certificates/CCNA_Switching_Routing_Wireless_Essentials.pdf"
        },
    ],

    // ============ SOFT SKILLS & LANGUAGES ============
    softSkills: ["Self-taught", "Problem analysis and solving", "Organization", "Teamwork", "Client communication"],
    languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "Basic" },
    ],

    // ============ CONTACT ============
    contact: {
        title: "Let's Get in Touch: Ways to Connect with Me",
        description: "Thank you for visiting my portfolio. If you are interested in collaborating, discussing a project, or simply connecting, feel free to reach out through email or LinkedIn. I'm always open to learning opportunities, new projects, and meaningful conversations about technology and development.",
    },

    // ============ FOOTER ============
    footer: "© 2026 Yair Cruz Torres. All Rights Reserved",

    // ============ UI LABELS ============
    ui: {
        hero: {
            greeting: "Hi, thanks for visiting my portfolio",
            photoAlt: "Photo of Yair Cruz Torres",
        },
        projects: {
            filters: {
                all: "All",
                client: "Clients",
                institutional: "Institutional",
                academic: "Academic",
                hackathon: "Hackathon",
            },
            viewProject: "Live Site",
            viewGithub: "View Github",
            privateCode: "Private code",
            showMore: "Show more",
            showLess: "Show less",
            role: "Role",
        },
        nav: {
            projects: "Projects",
            downloadCv: "Download CV",
            contact: "Contact",
        },
        sections: {
            softSkills: "Soft Skills",
            languages: "Languages",
            certificates: "Certificates",
            openCertificate: "Open Certificate",
            projects: "Projects",
            education: "Education",
            experience: "Experience",
            skills: "Technologies I Use",
        },
        contact: {
            title: "Let's Get in Touch:",
            subtitle: "Ways to Connect with Me",
            copyEmail: "Copy email",
            emailCopied: "Email copied",
                    linkedin: "Follow on LinkedIn",
            github: "Follow on GitHub",
        },
        footer: {
            backToTop: "Go back to top",
        },
    },
}

export default info
