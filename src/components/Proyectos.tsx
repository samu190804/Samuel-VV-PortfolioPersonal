import { useEffect, useRef, useState } from "react";
import { ExternalLink, ArrowRight, X } from "lucide-react";
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
    previewContent: "tfg" | "portfolio" | "mes" | "review";
};

const reviewShots = [
    { src: "/review-ai/analizar-vacio.png", label: "Analizar", alt: "Formulario para analizar una reseña" },
    { src: "/review-ai/analizar-resultado.png", label: "Resultado", alt: "Reseña aprobada con sus estrellas" },
    { src: "/review-ai/historial.png", label: "Historial", alt: "Historial con filtro por estado" },
    { src: "/review-ai/estadisticas.png", label: "Estadísticas", alt: "Panel de estadísticas con gráficas" },
];

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
        {
        id: "review",
        title: "Review AI Platform",
        subtitle: "Proyecto personal · 2026",
        description:
            "Plataforma de análisis de reseñas con IA: modera cada texto (reglas + Detoxify) y le asigna de 1 a 5 estrellas con un BERT multilingüe. Arquitectura de microservicios con Angular, Spring Boot y FastAPI, todo en local con Docker Compose. Evaluada con 200 reseñas etiquetadas a mano: 96.5 % de acierto a ±1 estrella.",
        tech: ["Angular", "Spring Boot", "FastAPI", "PostgreSQL", "Docker", "Tailwind CSS"],
        github: "https://github.com/samu190804/review-ai-platform",
        live: undefined,
        gradient: "from-indigo-600/20 via-transparent to-transparent",
        accentColor: "#6366F1",
        previewContent: "review",
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

type ZoomHandler = (src: string, alt: string) => void;

function ReviewGallery({ color, onZoom }: { color: string; onZoom?: ZoomHandler }) {
    const [index, setIndex] = useState(0);
    const touchStart = useRef<{ x: number; y: number } | null>(null);
    const shot = reviewShots[index];

    const onTouchStart = (e: React.TouchEvent) => {
        touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchEnd = (e: React.TouchEvent) => {
        const start = touchStart.current;
        touchStart.current = null;
        if (!start) return;
        const dx = e.changedTouches[0].clientX - start.x;
        const dy = e.changedTouches[0].clientY - start.y;
        if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
        setIndex((i) => (dx < 0 ? Math.min(i + 1, reviewShots.length - 1) : Math.max(i - 1, 0)));
    };

    return (
        <div className="flex flex-col gap-3">
            <div
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                onClick={onZoom ? () => onZoom(shot.src, shot.alt) : undefined}
                className={onZoom ? "cursor-zoom-in" : undefined}
            >
                <BrowserMockup src={shot.src} alt={shot.alt} url="localhost:4200" />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                {reviewShots.map((s, i) => (
                    <button
                        key={s.src}
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIndex(i);
                        }}
                        className="text-xs px-3 py-2 lg:py-1 rounded-full border transition-colors duration-200"
                        style={{
                            borderColor: i === index ? color : "rgba(255,255,255,0.08)",
                            color: i === index ? color : "#6b7280",
                            background: i === index ? `${color}15` : "transparent",
                        }}
                    >
                        {s.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

function ProjectPreview({ project, onZoom }: { project: Project; onZoom?: ZoomHandler }) {
    const isBrowser =
        project.previewContent === "tfg" ||
        project.previewContent === "portfolio" ||
        project.previewContent === "review";

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
                {project.previewContent === "review" ? (
                    <ReviewGallery color={project.accentColor} onZoom={onZoom} />
                ) : project.previewContent === "tfg" ? (
                    <div
                        onClick={onZoom ? () => onZoom("/home.png", "Captura del TFG S+ Fitness") : undefined}
                        className={onZoom ? "cursor-zoom-in" : undefined}
                    >
                        <BrowserMockup
                            src="/home.png"
                            alt="Captura del TFG S+ Fitness"
                            url="s-fitness.app"
                        />
                    </div>
                ) : project.previewContent === "portfolio" ? (
                    <div
                        onClick={onZoom ? () => onZoom("/portfolio-preview.png", "Captura del portfolio") : undefined}
                        className={onZoom ? "cursor-zoom-in" : undefined}
                    >
                        <BrowserMockup
                            src="/portfolio-preview.png"
                            alt="Captura del portfolio"
                            url="https://samuelvv.netlify.app/"
                        />
                    </div>
                ) : (
                    <PreviewIllustration type={project.previewContent} color={project.accentColor} />
                )}
            </div>
        </div>
    );
}

const thumbnails: Partial<Record<Project["previewContent"], { src: string; alt: string }>> = {
    tfg: { src: "/home.png", alt: "Captura del TFG S+ Fitness" },
    portfolio: { src: "/portfolio-preview.png", alt: "Captura del portfolio" },
    review: { src: reviewShots[0].src, alt: reviewShots[0].alt },
};

function ProjectThumbnail({ project }: { project: Project }) {
    const thumb = thumbnails[project.previewContent];
    return (
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/8 bg-zinc-900">
            {thumb ? (
                <img src={thumb.src} alt={thumb.alt} loading="lazy" className="w-full h-full object-cover object-top" />
            ) : (
                <PreviewIllustration type={project.previewContent} color={project.accentColor} />
            )}
        </div>
    );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
    const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const touchY = useRef<number | null>(null);

    useEffect(() => {
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => {
            if (e.key !== "Escape") return;
            if (zoom) setZoom(null);
            else onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", onKey);
        };
    }, [zoom, onClose]);

    // Deslizar hacia abajo (con el panel en lo alto del scroll) para cerrar
    const onTouchStart = (e: React.TouchEvent) => {
        touchY.current = panelRef.current && panelRef.current.scrollTop === 0 ? e.touches[0].clientY : null;
    };
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchY.current !== null && e.changedTouches[0].clientY - touchY.current > 90) onClose();
        touchY.current = null;
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm lg:hidden"
            style={{ animation: "modalFade 0.2s ease forwards" }}
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
        >
            <div
                ref={panelRef}
                onClick={(e) => e.stopPropagation()}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                className="relative w-full max-w-lg max-h-[88vh] overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-zinc-950 p-5"
                style={{
                    animation: "modalScale 0.25s ease forwards",
                    boxShadow: `0 0 0 1px ${project.accentColor}30, 0 16px 48px ${project.accentColor}20`,
                }}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Cerrar"
                    className="absolute top-3 right-3 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-zinc-900/90 border border-white/10 text-gray-300"
                >
                    <X className="w-5 h-5" />
                </button>

                <p className="text-xs font-mono mb-1 pr-12" style={{ color: project.accentColor }}>
                    {project.subtitle}
                </p>
                <h3 className="text-xl font-semibold text-white mb-4 pr-12">{project.title}</h3>

                <ProjectPreview project={project} onZoom={(src, alt) => setZoom({ src, alt })} />
                <p className="mt-2 text-center text-[11px] text-gray-600">Toca la captura para ampliarla</p>

                <p className="text-sm text-gray-300 leading-relaxed mt-4">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/8">
                            {t}
                        </span>
                    ))}
                </div>

                {(project.github || project.live) && (
                    <div className="flex gap-3 mt-5">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-gray-200"
                            >
                                <i className="devicon-github-original text-base" />
                                GitHub
                            </a>
                        )}
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm text-white"
                                style={{ background: `${project.accentColor}30`, border: `1px solid ${project.accentColor}60` }}
                            >
                                <ExternalLink className="w-4 h-4" />
                                Ver web
                            </a>
                        )}
                    </div>
                )}
            </div>

            {zoom && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-2"
                    onClick={(e) => {
                        e.stopPropagation();
                        setZoom(null);
                    }}
                >
                    <button
                        type="button"
                        aria-label="Cerrar imagen"
                        className="absolute top-4 right-4 flex items-center justify-center w-11 h-11 rounded-full bg-zinc-900/90 border border-white/10 text-gray-300"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <img src={zoom.src} alt={zoom.alt} className="max-w-full max-h-full object-contain" />
                </div>
            )}
        </div>
    );
}

export default function Proyectos() {
    const [activeId, setActiveId] = useState(projects[0].id);
    const [modalId, setModalId] = useState<string | null>(null);

    const activeProject = projects.find((p) => p.id === activeId) ?? projects[0];
    const modalProject = projects.find((p) => p.id === modalId) ?? null;

    const handleSelect = (id: string) => {
        setActiveId(id);
        // En móvil/tablet no hay panel de preview: se abre el modal
        if (window.matchMedia("(max-width: 1023px)").matches) setModalId(id);
    };

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
                                onClick={() => handleSelect(project.id)}
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
                                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tech badges */}
                                    <div className="flex flex-wrap gap-1.5 mt-3">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={t}
                                                className={`text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-500 border border-white/8 ${i >= 4 ? "hidden lg:inline-block" : ""}`}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 4 && (
                                            <span className="lg:hidden text-xs px-2 py-0.5 text-gray-600">
                                                +{project.tech.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4 mt-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex items-center gap-1.5 text-xs py-2 lg:py-0 text-gray-500 hover:text-white transition-colors duration-200"
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
                                                className="flex items-center gap-1.5 text-xs py-2 lg:py-0 text-gray-500 hover:text-white transition-colors duration-200"
                                            >
                                                <ExternalLink className="w-3.5 h-3.5" />
                                            </a>
                                        )}
                                        <span
                                            className="ml-auto lg:hidden flex items-center gap-1 text-xs py-2"
                                            style={{ color: project.accentColor }}
                                        >
                                            Ver detalle <ArrowRight className="w-3 h-3" />
                                        </span>
                                        <span className="ml-auto hidden lg:flex items-center gap-1 text-xs transition-all duration-300"
                                            style={{ color: activeId === project.id ? project.accentColor : "transparent" }}>
                                            Ver preview <ArrowRight className="w-3 h-3" />
                                        </span>
                                    </div>
                                </div>

                                {/* Miniatura en móvil: la preview completa va en el modal */}
                                <div className="mt-4 lg:hidden">
                                    <ProjectThumbnail project={project} />
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

            {modalProject && <ProjectModal project={modalProject} onClose={() => setModalId(null)} />}

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(10px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes modalFade {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                @keyframes modalScale {
                    from { opacity: 0; transform: scale(0.92); }
                    to   { opacity: 1; transform: scale(1); }
                }
                @media (prefers-reduced-motion: reduce) {
                    [role="dialog"], [role="dialog"] > div { animation: none !important; }
                }
            `}</style>
        </section>
    );
}
