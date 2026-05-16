const info_es = {
    // ============ MAIN DETAILS ============
    main: {
        name: "Yair Torres",
        description: "Estudiante de Ingeniería en Sistemas Computacionales enfocado en desarrollo web full-stack, arquitecturas basadas en la nube e ingeniería de software. Con experiencia en la creación de plataformas responsivas, sistemas de automatización y aplicaciones escalables utilizando JavaScript, Node.js, Java y servicios modernos en la nube.",
        role: "Desarrollador Web y Estudiante de Ing. en Sistemas",
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
            description: "Plataforma educativa full-stack de alto rendimiento construida sobre arquitectura serverless. Incluye un asistente de IA con RAG, gestión de almacenamiento en Cloudflare R2, persistencia basada en Redis y una interfaz glassmorphism premium optimizada para accesibilidad y flujos de trabajo académicos.",
            technologies: "HTML5, CSS3, JavaScript, Node.js, Vercel Functions, Cloudflare R2, Upstash Redis, Resend, Gemini API, Bootstrap 5",
            github: "https://github.com/yairctt/tutorias-isc-itver",
            link: "https://tutoriasisc.com"
        },
        {
            title: "Giang Aluminum",
            description: "Plataforma web personalizada desarrollada para una empresa de servicios de construcción. Construida con arquitectura vanilla (sin frameworks) para maximizar el rendimiento y el SEO. Incluye un backend serverless para gestión de leads y una robusta integración con Google Workspace para la automatización de flujos de trabajo.",
            technologies: "HTML, CSS, JavaScript, Google Workspace, Vercel",
            github: "https://github.com/yairctt/web-giang-aluminum",
            link: "https://giangaluminum.com"
        },
        {
            title: "Corazón de Coco",
            description: "Sitio web multipágina responsivo diseñado para mostrar productos de panadería artesanal mediante arquitectura frontend moderna, estética visual premium y una experiencia de usuario fluida alineada con la identidad de la marca.",
            technologies: "HTML, CSS, JavaScript",
            github: "https://github.com/yairctt/web-corazon-de-coco",
            link: "https://corazondcoco.com"
        },
        {
            title: "FAX Optimizing Compiler",
            description: "Implementación robusta de un compilador capaz de transformar un lenguaje personalizado (FAX) en código C ejecutable. Cuenta con un motor de optimización avanzado mediante análisis de flujo de datos (Análisis de Vivacidad) para eliminación global de código muerto y movimiento de código invariante en bucles, mejorando la eficiencia general del programa objetivo.",
            technologies: "Java, JavaCC, Compiler Design",
            github: "https://github.com/yairctt/CompiladorFax",
            link: "https://github.com/yairctt/CompiladorFax"
        },
        {
            title: "NavyFax",
            description: "Aplicación Java interactiva construida bajo el patrón arquitectónico MVC, implementando conceptos avanzados de multithreading y concurrencia. El sistema gestiona enemigos, proyectiles, obstáculos y detección de colisiones mediante hilos de ejecución independientes, garantizando una jugabilidad fluida y responsiva. Incluye gestión dinámica de recursos, manejo de estados del juego y una arquitectura escalable basada en interfaces y herencia.",
            technologies: "Java, Multithreading, OOP",
            github: "https://github.com/yairctt/NavyFaxBeta",
            link: "https://github.com/yairctt/NavyFaxBeta"
        },
    ],

    // ============ EDUCATION ============
    education: [
        {
            school: "Instituto Tecnológico de Veracruz",
            degree: "Ingeniería en Sistemas Computacionales",
            duration: "2023 - Presente",
            image: "itv.webp"
        },
    ],

    // ============ EXPERIENCE ============
    experience: [
        {
            position: "Desarrollador Web Frontend",
            company: "Freelance Web Development",
            duration: "2026 - Presente",
            image: "freelancer.webp",
            descriptions: [
                "Desarrollo de sitios web y páginas de aterrizaje responsivas para clientes reales.",
                "Gestión de despliegue en Vercel e integración de servicios de terceros.",
                "Uso de HTML, CSS y JavaScript para entregar resultados listos para producción.",
            ]
        },
        {
            position: "Desarrollador Estudiantil",
            company: "Academic Software Projects",
            duration: "2023 - Presente",
            image: "itv.webp",
            descriptions: [
                "Construcción de plataformas educativas con Node.js, almacenamiento en la nube y correo automatizado.",
                "Desarrollo de aplicaciones Java incluyendo un compilador y un minijuego orientado a objetos.",
                "Implementación de herramientas de automatización y trabajo con servicios en la nube.",
            ]
        },
    ],

    // ============ CERTIFICATES ============
    certificates: [],

    // ============ CONTACT ============
    contact: {
        title: "Conectemos: Formas de contactarme",
        description: "Gracias por visitar mi portafolio. Si tienes interés en colaborar, discutir un proyecto o simplemente conectar, no dudes en contactarme por correo electrónico o redes sociales. Siempre estoy abierto a oportunidades de aprendizaje, nuevos proyectos y conversaciones significativas sobre tecnología y desarrollo.",
    },

    // ============ FOOTER ============
    footer: "© 2026 Yair Cruz Torres. Todos los derechos reservados.",

    // ============ UI LABELS ============
    ui: {
        nav: {
            projects: "Proyectos",
            contact: "Contacto",
        },
        sections: {
            education: "Educación",
            experience: "Experiencia",
            skills: "Tecnologías que uso",
        },
        contact: {
            title: "Conectemos:",
            subtitle: "Formas de contactarme",
            facebook: "Seguir en Facebook",
            instagram: "Seguir en Instagram",
            linkedin: "Seguir en LinkedIn",
            github: "Seguir en GitHub",
        },
        footer: {
            backToTop: "Volver arriba",
        },
    },
}

export default info_es
