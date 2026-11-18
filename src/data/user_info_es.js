const info_es = {
    // ============ MAIN DETAILS ============
    main: {
        name: "Yair Cruz Torres",
        description: "Estudiante de Ingeniería en Sistemas Computacionales en el Instituto Tecnológico de Veracruz (TecNM), con experiencia desarrollando software para proyectos institucionales y clientes. Trabajo en desarrollo web full-stack, APIs REST, bases de datos e inteligencia artificial aplicada, con proyectos en producción como el Portal de Tutorías ISC y MiTutorIA, un asistente con RAG y Gemini disponible para 212 alumnos.",
        role: "Desarrollador de Software · Estudiante de Ing. en Sistemas Computacionales",
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
            title: "Tutorías ISC — Portal de Coordinación",
            category: "institutional",
            role: "Desarrollador full-stack",
            image: "/projects/tutorias-isc.webp",
            description: "Plataforma serverless de gestión académica para la Coordinación de Tutorías ISC del TecNM Veracruz. Envía automáticamente las constancias desde Cloudflare R2 al correo institucional del alumno mediante un endpoint con seguridad multicapa. Incluye buscador de tutores, sistema unificado de autenticación y perfiles en Redis, y panel administrativo en un subdominio dedicado.",
            technologies: "HTML5, CSS3, JavaScript, Node.js, Vercel Functions, Cloudflare R2, Upstash Redis, Resend, Bootstrap 5",
            privateReason: "Proyecto institucional",
            link: "https://www.tutoriasisc.com/"
        },
        {
            title: "MiTutorIA — Asistente de Tutoría con IA",
            category: "institutional",
            role: "Desarrollador full-stack e integración de IA",
            image: "/projects/mitutoria.webp",
            description: "Asistente con IA para estudiantes de ISC, basado en RAG y en los modelos Gemini y DeepSeek, con respuestas en tiempo real vía streaming SSE. Integra 17 Objetos de Aprendizaje interactivos de Tutoría I y II, e inyecta el progreso de cada alumno en el contexto del asistente para adaptar sus respuestas.",
            technologies: "JavaScript, Node.js, Gemini API, DeepSeek API, RAG, SSE, Upstash Redis, Vercel Functions",
            privateReason: "Proyecto institucional",
            link: "https://www.tutoriasisc.com/tutor-ia"
        },
        {
            title: "Pulso Jarocho — 3er Lugar Hackathon",
            category: "hackathon",
            role: "Mapa interactivo, validación QR, integración y despliegue (equipo de 5)",
            image: "/projects/pulso-jarocho.webp",
            description: "PWA de turismo inteligente desarrollada en 24 horas en el Hackathon Veracruz Tech Week 2026 para el \"Reto 6 · Centro Vivo\", enfocada en revitalizar el Centro Histórico de Veracruz. Genera rutas personalizadas según tiempo e intereses del visitante, valida visitas a comercios mediante códigos QR con tokens de un solo uso verificados en el servidor e incluye un tablero de métricas para autoridades. Equipo de 5 personas; responsable del mapa interactivo, la validación por QR, la integración y el despliegue.",
            technologies: "Next.js, TypeScript, Supabase (PostgreSQL), Leaflet, Gemini API, Vercel",
            privateReason: "Proyecto de equipo de hackathon",
            link: "https://centro-vive-proton.vercel.app/"
        },
        {
            title: "Sistema de Gestión de Banco de Proyectos Académicos",
            category: "academic",
            role: "Desarrollador full-stack",
            image: "/projects/banco-proyectos.webp",
            description: "Sistema web para administrar el banco de proyectos académicos de la carrera, con cuatro portales por rol y flujo completo de registro, aprobación, postulación y asignación de proyectos. Aplica reglas de negocio a nivel de base de datos con restricciones y triggers, transacciones con bloqueo para evitar condiciones de carrera, y seguridad con cabeceras CSP, bloqueo de login por intentos y sesiones seguras. Desplegado en producción en Hostinger.",
            technologies: "PHP, MySQL, JavaScript, PHPUnit, Hostinger",
            privateReason: "Proyecto académico",
            link: "https://elprofecoss.tech/w1204/"
        },
        {
            title: "Chatbot IA InvitacionesLovi",
            category: "client",
            role: "Desarrollador backend e IA",
            image: "/projects/invitacioneslovi.webp",
            description: "Chatbot multilingüe con IA para un negocio de invitaciones digitales, con Gemini y streaming SSE, contexto del negocio vía RAG y rate limiting basado en archivos. Desplegado en DigitalOcean con Apache.",
            technologies: "PHP, Apache, Gemini API, SSE, DigitalOcean",
            privateReason: "Proyecto de cliente",
            link: "https://invitacioneslovi.com/"
        },
        {
            title: "GoCheck — Sistema de Control de Asistencia",
            category: "academic",
            image: "/projects/gocheck.webp",
            role: "Desarrollador full-stack",
            description: "Sistema cliente-servidor para el control de asistencia del personal en tiendas de abarrotes y supermercados. El terminal web, pensado para kioscos físicos, permite a los empleados registrar sus cuatro movimientos del día (entrada, salida a comida, regreso y salida) mediante código QR o PIN, con validación que impide registros duplicados. La API REST en Node.js/Express usa MySQL con pool Maestro/Réplica, autenticación JWT, cifrado con BcryptJS, rate limiting y bitácora de auditoría. Incluye un dashboard con KPIs en tiempo real: empleados activos, asistencias, retardos, permisos y faltas.",
            technologies: "HTML5, CSS3, JavaScript, Bootstrap, Node.js, Express, MySQL, JWT",
            github: "https://github.com/yairctt/gocheck-sistema"
        },
        {
            title: "Giang Aluminum",
            category: "client",
            role: "Desarrollador web (freelance)",
            image: "/projects/giang-aluminum.webp",
            description: "Plataforma web personalizada desarrollada para una empresa de servicios de construcción. Construida con arquitectura vanilla (sin frameworks) para maximizar el rendimiento y el SEO. Incluye un backend serverless para gestión de leads y una robusta integración con Google Workspace para la automatización de flujos de trabajo.",
            technologies: "HTML, CSS, JavaScript, Google Workspace, Vercel",
            privateReason: "Proyecto de cliente",
            link: "https://giangaluminum.com/"
        },
        {
            title: "Corazón de Coco",
            category: "client",
            role: "Desarrollador web (freelance)",
            image: "/projects/corazon-de-coco.webp",
            description: "Sitio web multipágina responsivo diseñado para mostrar productos de panadería artesanal mediante arquitectura frontend moderna, estética visual premium y una experiencia de usuario fluida alineada con la identidad de la marca.",
            technologies: "HTML, CSS, JavaScript",
            privateReason: "Proyecto de cliente",
            link: "https://corazondcoco.com/"
        },
        {
            title: "FAX Optimizing Compiler",
            category: "academic",
            image: "/projects/fax-compiler.webp",
            description: "Implementación robusta de un compilador capaz de transformar un lenguaje personalizado (FAX) en código C ejecutable. Cuenta con un motor de optimización avanzado mediante análisis de flujo de datos (Análisis de Vivacidad) para eliminación global de código muerto y movimiento de código invariante en bucles, mejorando la eficiencia general del programa objetivo.",
            technologies: "Java, JavaCC, Compiler Design",
            github: "https://github.com/yairctt/CompiladorFax"
        },
        {
            title: "NavyFax",
            category: "academic",
            image: "/projects/navyfax.webp",
            description: "Aplicación Java interactiva construida bajo el patrón arquitectónico MVC, implementando conceptos avanzados de multithreading y concurrencia. El sistema gestiona enemigos, proyectiles, obstáculos y detección de colisiones mediante hilos de ejecución independientes, garantizando una jugabilidad fluida y responsiva. Incluye gestión dinámica de recursos, manejo de estados del juego y una arquitectura escalable basada en interfaces y herencia.",
            technologies: "Java, Multithreading, OOP",
            github: "https://github.com/yairctt/NavyFaxBeta"
        },
    ],

    // ============ EDUCATION ============
    education: [
        {
            school: "Instituto Tecnológico de Veracruz (TecNM)",
            degree: "Ingeniería en Sistemas Computacionales · Promedio 90.07",
            duration: "2023 - 2027 (egreso estimado)",
            image: "itv.webp"
        },
    ],

    // ============ EXPERIENCE ============
    experience: [
        {
            position: "Desarrollador Web Freelance",
            company: "Desarrollo Web Freelance",
            duration: "2025 - Presente",
            image: "freelancer.webp",
            descriptions: [
                "Desarrollo de sitios web para clientes como Giang Aluminum y Corazón de Coco.",
                "Despliegue en Vercel e integración de servicios de terceros.",
                "Sitios responsivos con HTML, CSS y JavaScript listos para producción.",
            ]
        },
        {
            position: "Web Developer",
            company: "GMayaS Digital Services",
            duration: "2026",
            image: "gmayas.webp",
            descriptions: [
                "Desarrollo full-stack de soluciones y plataformas web.",
                "Integración de servicios y APIs de terceros.",
                "Mantenimiento y optimización de rendimiento.",
            ]
        },
        {
            position: "Servicio Social",
            company: "Coordinación de Tutorías ISC · ITVer",
            duration: "2025 - 2026",
            image: "itv.webp",
            descriptions: [
                "Desarrollo, despliegue y mantenimiento del portal web de la Coordinación de Tutorías del Depto. de Sistemas y Computación.",
                "Desarrollo de MiTutorIA: chatbot con RAG y Gemini más objetos de aprendizaje para Tutoría I y II.",
                "Plataforma en producción, disponible para 212 alumnos.",
            ]
        },
    ],

    // ============ CERTIFICATES ============
    certificates: [
        {
            title: "CCNA: Switching, Routing, and Wireless Essentials",
            description: "Cisco Networking Academy · Agosto 2026",
            icon: "cisco",
            link: "/certificates/CCNA_Switching_Routing_Wireless_Essentials.pdf"
        },
    ],

    // ============ ACHIEVEMENTS ============
    achievements: [
        {
            value: "3er lugar",
            title: "Hackathon Veracruz Tech Week 2026",
            detail: "Pulso Jarocho, PWA de turismo desarrollada en 24 horas con un equipo de 5.",
        },
        {
            value: "212",
            title: "Alumnos con acceso",
            detail: "Portal de Tutorías ISC y MiTutorIA, ambos en producción.",
        },
        {
            value: "90.07",
            title: "Promedio",
            detail: "Ingeniería en Sistemas Computacionales, Instituto Tecnológico de Veracruz.",
        },
        {
            value: "CCNA",
            title: "Switching, Routing, and Wireless Essentials",
            detail: "Cisco Networking Academy, 2026.",
        },
    ],

    // ============ SOFT SKILLS & LANGUAGES ============
    softSkills: ["Autodidacta", "Análisis y resolución de problemas", "Organización", "Trabajo en equipo", "Comunicación con clientes"],
    languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Básico" },
    ],

    // ============ CONTACT ============
    contact: {
        title: "Conectemos: Formas de contactarme",
        description: "Gracias por visitar mi portafolio. Si tienes interés en colaborar, discutir un proyecto o simplemente conectar, no dudes en contactarme por correo electrónico o LinkedIn. Siempre estoy abierto a oportunidades de aprendizaje, nuevos proyectos y conversaciones significativas sobre tecnología y desarrollo.",
    },

    // ============ FOOTER ============
    footer: "© 2026 Yair Cruz Torres. Todos los derechos reservados.",

    // ============ UI LABELS ============
    ui: {
        hero: {
            greeting: "Hola, gracias por visitar mi portafolio",
            photoAlt: "Foto de Yair Cruz Torres",
        },
        projects: {
            filters: {
                all: "Todos",
                client: "Clientes",
                institutional: "Institucional",
                academic: "Académicos",
                hackathon: "Hackathon",
            },
            viewProject: "Sitio en vivo",
            viewGithub: "Ver GitHub",
            privateCode: "Código privado",
            showMore: "Ver más",
            showLess: "Ver menos",
            role: "Rol",
        },
        nav: {
            projects: "Proyectos",
            downloadCv: "Descargar CV",
            contact: "Contacto",
        },
        sections: {
            achievements: "Logros",
            softSkills: "Habilidades",
            languages: "Idiomas",
            certificates: "Certificaciones",
            openCertificate: "Ver certificado",
            projects: "Proyectos",
            education: "Educación",
            experience: "Experiencia",
            skills: "Tecnologías que uso",
        },
        contact: {
            title: "Conectemos:",
            subtitle: "Formas de contactarme",
            copyEmail: "Copiar correo",
            emailCopied: "Correo copiado",
                    linkedin: "Seguir en LinkedIn",
            github: "Seguir en GitHub",
        },
        footer: {
            backToTop: "Volver arriba",
        },
    },
}

export default info_es
