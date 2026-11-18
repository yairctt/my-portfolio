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
            title: "Tutorías ISC — Portal de Coordinación",
            role: "Desarrollador full-stack",
            image: "/projects/tutorias-isc.webp",
            description: "Plataforma serverless de gestión académica para la Coordinación de Tutorías ISC del TecNM Veracruz. Envía automáticamente las constancias desde Cloudflare R2 al correo institucional del alumno mediante un endpoint con seguridad multicapa. Incluye buscador de tutores, sistema unificado de autenticación y perfiles en Redis, y panel administrativo en un subdominio dedicado.",
            technologies: "HTML5, CSS3, JavaScript, Node.js, Vercel Functions, Cloudflare R2, Upstash Redis, Resend, Bootstrap 5",
            privateReason: "Proyecto institucional",
            link: "https://www.tutoriasisc.com/"
        },
        {
            title: "MiTutorIA — Asistente de Tutoría con IA",
            role: "Desarrollador full-stack e integración de IA",
            image: "/projects/mitutoria.webp",
            description: "Asistente con IA para estudiantes de ISC, basado en RAG y en los modelos Gemini y DeepSeek, con respuestas en tiempo real vía streaming SSE. Integra 17 Objetos de Aprendizaje interactivos de Tutoría I y II, e inyecta el progreso de cada alumno en el contexto del asistente para adaptar sus respuestas.",
            technologies: "JavaScript, Node.js, Gemini API, DeepSeek API, RAG, SSE, Upstash Redis, Vercel Functions",
            privateReason: "Proyecto institucional",
            link: "https://www.tutoriasisc.com/tutor-ia"
        },
        {
            title: "Pulso Jarocho — 3er Lugar Hackathon",
            role: "Mapa interactivo, validación QR, integración y despliegue (equipo de 5)",
            image: "/projects/pulso-jarocho.webp",
            description: "PWA de turismo inteligente desarrollada en 24 horas en el Hackathon Veracruz Tech Week 2026 para el \"Reto 6 · Centro Vivo\", enfocada en revitalizar el Centro Histórico de Veracruz. Genera rutas personalizadas según tiempo e intereses del visitante, valida visitas a comercios mediante códigos QR con tokens de un solo uso verificados en el servidor e incluye un tablero de métricas para autoridades. Equipo de 5 personas; responsable del mapa interactivo, la validación por QR, la integración y el despliegue.",
            technologies: "Next.js, TypeScript, Supabase (PostgreSQL), Leaflet, Gemini API, Vercel",
            privateReason: "Proyecto de equipo de hackathon",
            link: "https://centro-vive-proton.vercel.app/"
        },
        {
            title: "Sistema de Gestión de Banco de Proyectos Académicos",
            role: "Desarrollador full-stack",
            image: "/projects/banco-proyectos.webp",
            description: "Sistema web para administrar el banco de proyectos académicos de la carrera, con cuatro portales por rol y flujo completo de registro, aprobación, postulación y asignación de proyectos. Aplica reglas de negocio a nivel de base de datos con restricciones y triggers, transacciones con bloqueo para evitar condiciones de carrera, y seguridad con cabeceras CSP, bloqueo de login por intentos y sesiones seguras. Desplegado en producción en Hostinger.",
            technologies: "PHP, MySQL, JavaScript, PHPUnit, Hostinger",
            privateReason: "Proyecto académico",
            link: "https://elprofecoss.tech/w1204/"
        },
        {
            title: "Chatbot IA InvitacionesLovi",
            role: "Desarrollador backend e IA",
            image: "/projects/invitacioneslovi.webp",
            description: "Chatbot multilingüe con IA para un negocio de invitaciones digitales, con Gemini y streaming SSE, contexto del negocio vía RAG y rate limiting basado en archivos. Desplegado en DigitalOcean con Apache.",
            technologies: "PHP, Apache, Gemini API, SSE, DigitalOcean",
            privateReason: "Proyecto de cliente",
            link: "https://invitacioneslovi.com/"
        },
        {
            title: "GoCheck — Sistema de Control de Asistencia",
            image: "/projects/gocheck.webp",
            role: "Desarrollador full-stack",
            description: "Sistema cliente-servidor para el control de asistencia del personal en tiendas de abarrotes y supermercados. El terminal web, pensado para kioscos físicos, permite a los empleados registrar sus cuatro movimientos del día (entrada, salida a comida, regreso y salida) mediante código QR o PIN, con validación que impide registros duplicados. La API REST en Node.js/Express usa MySQL con pool Maestro/Réplica, autenticación JWT, cifrado con BcryptJS, rate limiting y bitácora de auditoría. Incluye un dashboard con KPIs en tiempo real: empleados activos, asistencias, retardos, permisos y faltas.",
            technologies: "HTML5, CSS3, JavaScript, Bootstrap, Node.js, Express, MySQL, JWT",
            github: "https://github.com/yairctt/gocheck-sistema"
        },
        {
            title: "Giang Aluminum",
            role: "Desarrollador web (freelance)",
            image: "/projects/giang-aluminum.webp",
            description: "Plataforma web personalizada desarrollada para una empresa de servicios de construcción. Construida con arquitectura vanilla (sin frameworks) para maximizar el rendimiento y el SEO. Incluye un backend serverless para gestión de leads y una robusta integración con Google Workspace para la automatización de flujos de trabajo.",
            technologies: "HTML, CSS, JavaScript, Google Workspace, Vercel",
            privateReason: "Proyecto de cliente",
            link: "https://giangaluminum.com/"
        },
        {
            title: "Corazón de Coco",
            role: "Desarrollador web (freelance)",
            image: "/projects/corazon-de-coco.webp",
            description: "Sitio web multipágina responsivo diseñado para mostrar productos de panadería artesanal mediante arquitectura frontend moderna, estética visual premium y una experiencia de usuario fluida alineada con la identidad de la marca.",
            technologies: "HTML, CSS, JavaScript",
            privateReason: "Proyecto de cliente",
            link: "https://corazondcoco.com/"
        },
        {
            title: "FAX Optimizing Compiler",
            image: "/projects/fax-compiler.webp",
            description: "Implementación robusta de un compilador capaz de transformar un lenguaje personalizado (FAX) en código C ejecutable. Cuenta con un motor de optimización avanzado mediante análisis de flujo de datos (Análisis de Vivacidad) para eliminación global de código muerto y movimiento de código invariante en bucles, mejorando la eficiencia general del programa objetivo.",
            technologies: "Java, JavaCC, Compiler Design",
            github: "https://github.com/yairctt/CompiladorFax"
        },
        {
            title: "NavyFax",
            image: "/projects/navyfax.webp",
            description: "Aplicación Java interactiva construida bajo el patrón arquitectónico MVC, implementando conceptos avanzados de multithreading y concurrencia. El sistema gestiona enemigos, proyectiles, obstáculos y detección de colisiones mediante hilos de ejecución independientes, garantizando una jugabilidad fluida y responsiva. Incluye gestión dinámica de recursos, manejo de estados del juego y una arquitectura escalable basada en interfaces y herencia.",
            technologies: "Java, Multithreading, OOP",
            github: "https://github.com/yairctt/NavyFaxBeta"
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
        projects: {
            viewProject: "Sitio en vivo",
            viewGithub: "Ver GitHub",
            privateCode: "Código privado",
            showMore: "Ver más",
            showLess: "Ver menos",
            role: "Rol",
        },
        nav: {
            projects: "Proyectos",
            contact: "Contacto",
        },
        sections: {
            projects: "Proyectos",
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
