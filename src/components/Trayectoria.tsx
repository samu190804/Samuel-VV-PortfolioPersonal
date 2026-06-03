import { useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

type TechBadge = string;

type TimelineEntry = {
    type: "work" | "education";
    date: string;
    title: string;
    organization: string;
    location?: string;
    description?: string;
    bullets?: string[];
    tech?: TechBadge[];
};

const entries: TimelineEntry[] = [
    {
        type: "education",
        date: "2022 — 2024",
        title: "Desarrollo de Aplicaciones Web",
        organization: "IES Escultor José Luis Sánchez",
        description:
            "Ciclo formativo de grado superior con enfoque en desarrollo frontend y backend, bases de datos y despliegue de aplicaciones web.",
        tech: ["Java", "PHP", "JavaScript", "Vue", "Laravel", "Bootstrap"],
    },
    {
        type: "work",
        date: "Abr 2024 — Sep 2025",
        title: "Programador Junior",
        organization: "Magnanni Inc.",
        bullets: [
            "Desarrollo de un sistema MES multiplataforma con Electron.js, Svelte y Node.js para la digitalización del control de calidad en planta.",
            "Automatización de procesos industriales mediante aplicaciones de consola en C# y .NET para la generación de archivos de configuración de maquinaria de corte.",
            "Eliminación de la configuración manual, reduciendo errores humanos y ahorrando tiempo crítico para los operarios.",
        ],
        tech: ["Electron.js", "C#", ".NET", "TypeScript", "Svelte", "Node.js"],
    },
    {
        type: "education",
        date: "Sep 2025 — Actual",
        title: "Especialización en IA y Big Data",
        organization: "IES San Vicente del Raspeig",
        description:
            "Formación avanzada en inteligencia artificial, machine learning y procesamiento de grandes volúmenes de datos.",
        tech: ["Python", "Machine Learning", "Deep Learning", "Grafana", "Prometheus", "Azure"],
    }
];

const typeConfig = {
    work: {
        label: "Trabajo",
        color: "#3B82F6",
        bgClass: "bg-blue-500/10",
        textClass: "text-blue-400",
        borderClass: "border-blue-500/30",
        dotClass: "bg-blue-500",
        Icon: Briefcase,
    },
    education: {
        label: "Educación",
        color: "#A855F7",
        bgClass: "bg-purple-500/10",
        textClass: "text-purple-400",
        borderClass: "border-purple-500/30",
        dotClass: "bg-purple-500",
        Icon: GraduationCap,
    },
};

function TimelineCard({ entry, index }: { entry: TimelineEntry; index: number }) {
    const config = typeConfig[entry.type];
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className="relative flex gap-6 md:gap-10"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms`,
            }}
        >
            {/* Línea + Dot */}
            <div className="flex flex-col items-center">
                <div
                    className={`w-3 h-3 rounded-full mt-5 shrink-0 ring-4 ring-zinc-950 z-10 ${config.dotClass}`}
                />
                <div className="w-px flex-1 bg-white/8 mt-1" />
            </div>

            {/* Tarjeta */}
            <div
                className={`
                    mb-10 flex-1 rounded-2xl border p-6
                    bg-zinc-900/50 backdrop-blur-sm
                    transition-all duration-300 group
                    hover:-translate-y-1
                    ${config.borderClass}
                `}
                style={{
                    boxShadow: `0 0 0 0px ${config.color}`,
                    transition: "box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${config.color}40, 0 8px 24px ${config.color}10`;
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0px ${config.color}`;
                }}
            >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                        {/* Badge tipo */}
                        <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full mb-2 ${config.bgClass} ${config.textClass}`}>
                            <config.Icon className="w-3 h-3" />
                            {config.label}
                        </span>
                        <h3 className="text-lg font-semibold text-white leading-tight">
                            {entry.title}
                        </h3>
                        <p className="text-sm text-gray-400 mt-0.5">
                            {entry.organization}
                        </p>
                    </div>
                    {/* Fecha */}
                    <span className="text-xs font-mono text-gray-500 shrink-0 mt-1">
                        {entry.date}
                    </span>
                </div>

                {/* Descripción o bullets */}
                {entry.description && (
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {entry.description}
                    </p>
                )}
                {entry.bullets && (
                    <ul className="space-y-2 mt-1">
                        {entry.bullets.map((b, i) => (
                            <li key={i} className="flex gap-2 text-sm text-gray-400 leading-relaxed">
                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${config.dotClass}`} />
                                {b}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Tech badges */}
                {entry.tech && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {entry.tech.map((t) => (
                            <span
                                key={t}
                                className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/8"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Trayectoria() {
    return (
        <section id="trayectoria" className="py-24 px-6">
            <div className="container mx-auto max-w-3xl">

                {/* Cabecera */}
                <div className="mb-16">
                    <p className="text-xs font-mono text-blue-500 mb-3 tracking-widest uppercase">
                        Mi recorrido
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight">
                        Trayectoria
                    </h2>
                </div>

                {/* Timeline */}
                <div>
                    {entries.map((entry, i) => (
                        <TimelineCard key={i} entry={entry} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
