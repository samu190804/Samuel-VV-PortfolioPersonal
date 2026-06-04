import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import BrowserMockup from "./BrowserMockup";

type Project = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    github?: string;
    live?: string;
    gradient: string;
    accentColor: string;
    // Simulamos una preview con una ilustración SVG inline
    previewContent: "tfg" | "portfolio" | "mes";
};

const projects: Project[] = [
    {
        id: "tfg",
        title: "TFG — S+ Fitness",
        subtitle: "Trabajo de Fin de Grado · IES Escultor José Luis Sánchez · 2024",
        description:
            "Plataforma web integral diseñada para la gestión de entrenamientos deportivos. La aplicación permite a los usuarios crear, consultar y compartir rutinas personalizadas y ejercicios en una comunidad activa.",
        tech: ["Vue", "Laravel", "Bootstrap", "Docker"],
        github: "https://github.com/samu190804/S-Fitness",
        live: undefined,
        gradient: "from-blue-600/20 via-transparent to-transparent",
        accentColor: "#47A248",
        previewContent: "tfg",
    },
    {
        id: "mes",
        title: "Sistema MES — Magnanni",
        subtitle: "Proyecto profesional · Magnanni Inc.",
        description:
            "Aplicación de escritorio multiplataforma para la digitalización del control de calidad en planta. Desarrollada con Electron.js e integrada en los sistemas de producción de la empresa.",
        tech: ["Electron.js", "Svelte", "Node.js"],
        github: undefined,
        live: undefined,
        gradient: "from-violet-600/20 via-transparent to-transparent",
        accentColor: "#A855F7",
        previewContent: "mes",
    },
    {
        id: "portfolio",
        title: "Portfolio Personal",
        subtitle: "Proyecto personal · 2026",
        description:
            "Este mismo portfolio. Diseñado con una estética dark minimalista inspirada en Zen Browser. Construido con Astro para máximo rendimiento estático y React para los componentes interactivos.",
        tech: ["Astro", "React", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/samu190804/Samuel-VV-PortfolioPersonal",
        live: "https://samuelvv.netlify.app/",
        gradient: "from-cyan-600/20 via-transparent to-transparent",
        accentColor: "#3B82F6",
        previewContent: "portfolio",
    },
];

// Previews SVG ilustrativas por proyecto
function PreviewIllustration({ type, color }: { type: Project["previewContent"]; color: string }) {
    if (type === "portfolio") {
        return (
            <svg viewBox="0 0 500 340" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Navegador mock */}
                <rect x="20" y="20" width="460" height="300" rx="12" fill="#111" stroke="#222" strokeWidth="1" />
                <rect x="20" y="20" width="460" height="36" rx="12" fill="#1a1a1a" />
                <rect x="20" y="44" width="460" height="12" fill="#1a1a1a" />
                <circle cx="44" cy="38" r="5" fill="#ff5f57" />
                <circle cx="60" cy="38" r="5" fill="#febc2e" />
                <circle cx="76" cy="38" r="5" fill="#28c840" />
                <rect x="110" y="30" width="280" height="16" rx="8" fill="#252525" />
                {/* Navbar */}
                <rect x="30" y="66" width="440" height="36" rx="8" fill="#161616" stroke="#2a2a2a" strokeWidth="1" />
                <text x="50" y="89" fill="white" fontSize="12" fontWeight="bold">SV<tspan fill={color}>.</tspan></text>
                <rect x="360" y="74" width="70" height="20" rx="10" fill={color} opacity="0.8" />
                {/* Hero */}
                <rect x="30" y="116" width="440" height="160" rx="8" fill="#0d0d0d" />
                <rect x="150" y="136" width="200" height="10" rx="4" fill="#333" />
                <rect x="100" y="156" width="300" height="22" rx="4" fill="#444" />
                <rect x="130" y="188" width="240" height="10" rx="4" fill="#2a2a2a" />
                <rect x="150" y="208" width="200" height="10" rx="4" fill="#2a2a2a" />
                <rect x="170" y="234" width="70" height="24" rx="12" fill={color} opacity="0.9" />
                <rect x="256" y="234" width="100" height="24" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
            </svg>
        );
    }

    if (type === "mes") {
        return (
            <svg viewBox="0 0 500 340" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Ventana app escritorio */}
                <rect x="20" y="20" width="460" height="300" rx="10" fill="#111" stroke="#222" strokeWidth="1" />
                <rect x="20" y="20" width="460" height="32" rx="10" fill="#1c1c1c" />
                <rect x="20" y="40" width="460" height="12" fill="#1c1c1c" />
                <circle cx="38" cy="36" r="5" fill="#ff5f57" />
                <circle cx="54" cy="36" r="5" fill="#febc2e" />
                <circle cx="70" cy="36" r="5" fill="#28c840" />
                <text x="200" y="41" fill="#555" fontSize="10" textAnchor="middle">Sistema MES — Control de Calidad</text>
                {/* Sidebar */}
                <rect x="20" y="52" width="100" height="268" fill="#141414" />
                <rect x="28" y="68" width="84" height="28" rx="6" fill={color} opacity="0.15" />
                <rect x="36" y="78" width="50" height="8" rx="3" fill={color} opacity="0.8" />
                <rect x="36" y="108" width="50" height="8" rx="3" fill="#333" />
                <rect x="36" y="128" width="50" height="8" rx="3" fill="#333" />
                <rect x="36" y="148" width="50" height="8" rx="3" fill="#333" />
                {/* Main content */}
                <rect x="130" y="62" width="330" height="50" rx="6" fill="#181818" stroke="#2a2a2a" strokeWidth="1" />
                <rect x="142" y="74" width="80" height="8" rx="3" fill="#444" />
                <rect x="142" y="88" width="120" height="6" rx="3" fill="#2a2a2a" />
                {/* Tabla */}
                <rect x="130" y="124" width="330" height="180" rx="6" fill="#181818" stroke="#2a2a2a" strokeWidth="1" />
                <rect x="130" y="124" width="330" height="28" rx="6" fill="#1e1e1e" />
                {[0, 1, 2, 3, 4].map((i) => (
                    <g key={i}>
                        <rect x="142" y={162 + i * 26} width="60" height="8" rx="3" fill="#2a2a2a" />
                        <rect x="222" y={162 + i * 26} width="80" height="8" rx="3" fill="#2a2a2a" />
                        <rect x="322" y={162 + i * 26} width="40" height="14" rx="4"
                            fill={i === 1 ? "#16a34a22" : i === 3 ? "#dc262622" : "#2a2a2a"} />
                        <rect x="325" y={165 + i * 26} width="34" height="8" rx="3"
                            fill={i === 1 ? "#16a34a" : i === 3 ? "#dc2626" : "#444"} opacity="0.7" />
                    </g>
                ))}
            </svg>
        );
    }

    return null;
}

function ProjectPreview({ project }: { project: Project }) {
    const isBrowser = project.previewContent === "tfg" || project.previewContent === "portfolio";

    return (
        <div
            className="relative w-full rounded-2xl overflow-hidden border border-white/8 bg-zinc-900/80"
            style={{ aspectRatio: isBrowser ? undefined : "16/10" }}
        >
            {/* Glow de fondo */}
            <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${project.accentColor}30 0%, transparent 60%)`,
                }}
            />
            <div className="relative z-10 w-full h-full p-4">
                {project.previewContent === "tfg" ? (
                    <BrowserMockup
                        src="/home.png"
                        alt="Captura del TFG S+ Fitness"
                        url="s-fitness.app"
                    />
                ) : project.previewContent === "portfolio" ? (
                    <BrowserMockup
                        src="/portfolio-preview.png"
                        alt="Captura del portfolio"
                        url="https://samuelvv.netlify.app/"
                    />
                ) : (
                    <PreviewIllustration type={project.previewContent} color={project.accentColor} />
                )}
            </div>
        </div>
    );
}

export default function Proyectos() {
    const [activeId, setActiveId] = useState(projects[0].id);

    const activeProject = projects.find((p) => p.id === activeId) ?? projects[0];

    return (
        <section id="proyectos" className="py-24 px-6">
            <div className="container mx-auto max-w-6xl">

                {/* Cabecera */}
                <div className="mb-16">
                    <p className="text-xs font-mono text-blue-500 mb-3 tracking-widest uppercase">
                        Lo que he construido
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight">
                        Proyectos
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-16">

                    {/* Lista de proyectos — izquierda */}
                    <div className="flex flex-col gap-4 lg:w-2/5">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => setActiveId(project.id)}
                                className={`
                                    group relative rounded-2xl border p-6 cursor-pointer
                                    transition-all duration-300
                                    ${activeId === project.id
                                        ? "border-white/15 bg-zinc-900/80"
                                        : "border-white/5 bg-zinc-900/30 hover:border-white/10 hover:bg-zinc-900/50"
                                    }
                                `}
                                style={{
                                    boxShadow: activeId === project.id
                                        ? `0 0 0 1px ${project.accentColor}30, 0 8px 32px ${project.accentColor}10`
                                        : "none",
                                }}
                            >
                                {/* Barra lateral de color */}
                                <span
                                    className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full transition-opacity duration-300"
                                    style={{
                                        background: project.accentColor,
                                        opacity: activeId === project.id ? 1 : 0,
                                    }}
                                />

                                <div className="pl-3">
                                    <p
                                        className="text-xs font-mono mb-1 transition-colors duration-300"
                                        style={{ color: activeId === project.id ? project.accentColor : "#6b7280" }}
                                    >
                                        {project.subtitle}
                                    </p>
                                    <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${activeId === project.id ? "text-white" : "text-gray-400 group-hover:text-gray-200"}`}>
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed lg:line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tech badges */}
                                    <div className="flex flex-wrap gap-1.5 mt-3">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-500 border border-white/8"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4 mt-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors duration-200"
                                            >
                                                <i className="devicon-github-original text-sm" />
                                                GitHub
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors duration-200"
                                            >
                                                <ExternalLink className="w-3.5 h-3.5" />
                                            </a>
                                        )}
                                        <span className="ml-auto hidden lg:flex items-center gap-1 text-xs transition-all duration-300"
                                            style={{ color: activeId === project.id ? project.accentColor : "transparent" }}>
                                            Ver preview <ArrowRight className="w-3 h-3" />
                                        </span>
                                    </div>
                                </div>

                                {/* Preview en móvil */}
                                <div className="mt-4 lg:hidden">
                                    <ProjectPreview project={project} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Preview sticky — derecha, solo desktop */}
                    <div className="hidden lg:block lg:w-3/5 lg:sticky lg:top-28 lg:self-start">
                        <div
                            key={activeId}
                            style={{
                                animation: "fadeInUp 0.35s ease forwards",
                            }}
                        >
                            <ProjectPreview project={activeProject} />

                            {/* Descripción bajo la preview */}
                            <div className="mt-6 px-1">
                                <p
                                    className="text-xs font-mono mb-1"
                                    style={{ color: activeProject.accentColor }}
                                >
                                    {activeProject.subtitle}
                                </p>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {activeProject.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(10px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}
