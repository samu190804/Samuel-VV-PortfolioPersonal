import { useState } from "react";

// Añade esto en tu layout/head de Astro:
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"/>

type Tech = {
    name: string;
    icon: string;   // clase devicon
    color: string;  // color oficial para el hover/glow
};

type Category = {
    label: string;
    items: Tech[];
};

const categories: Category[] = [
    {
        label: "Sistemas Operativos",
        items: [
            { name: "Linux",   icon: "devicon-linux-plain colored",    color: "#FCC624" },
            { name: "Ubuntu",  icon: "devicon-ubuntu-plain colored",   color: "#E95420" },
            { name: "Fedora",  icon: "devicon-fedora-plain colored",   color: "#51A2DA" },
            { name: "Windows 11", icon: "devicon-windows11-original colored", color: "#0078D4" },
        ],
    },
    {
        label: "Lenguajes",
        items: [
            { name: "Java",       icon: "devicon-java-plain colored",          color: "#f89820" },
            { name: "C#",         icon: "devicon-csharp-plain colored",        color: "#9B4F96" },
            { name: "Python",     icon: "devicon-python-plain colored",        color: "#3776AB" },
            { name: "JavaScript", icon: "devicon-javascript-plain colored",    color: "#F7DF1E" },
            { name: "TypeScript", icon: "devicon-typescript-plain colored",    color: "#3178C6" },
            { name: "PHP",        icon: "devicon-php-plain colored",           color: "#8892BE" },
            { name: "HTML5",      icon: "devicon-html5-plain colored",         color: "#E34F26" },
            { name: "CSS3",       icon: "devicon-css3-plain colored",          color: "#1572B6" },
        ],
    },
    {
        label: "Frameworks & Librerías",
        items: [
            { name: "Laravel",    icon: "devicon-laravel-plain colored",    color: "#FF2D20" },
            { name: "Bootstrap",  icon: "devicon-bootstrap-plain colored",  color: "#7952B3" },
            { name: "Tailwind",   icon: "devicon-tailwindcss-plain colored",color: "#06B6D4" },
            { name: "Electron",   icon: "devicon-electron-original colored",color: "#47848F" },
            { name: "Svelte",     icon: "devicon-svelte-plain colored",     color: "#FF3E00" },
            { name: "Vue",        icon: "devicon-vuejs-plain colored",      color: "#42B883" },
            { name: "React",      icon: "devicon-react-original colored",   color: "#61DAFB" },
            { name: "Node.js",    icon: "devicon-nodejs-plain colored",     color: "#339933" },
        ],
    },
    {
        label: "Bases de Datos",
        items: [
            { name: "MySQL",  icon: "devicon-mysql-original colored",  color: "#4479A1" },
            { name: "Neo4j",  icon: "devicon-neo4j-plain colored",  color: "#008CC1" },
            { name: "MongoDB", icon: "devicon-mongodb-plain colored", color: "#47A248" },
        ],
    },
    {
        label: "DevOps & Cloud",
        items: [
            { name: "Docker",      icon: "devicon-docker-plain colored",      color: "#2496ED" },
            { name: "Azure",       icon: "devicon-azure-plain colored",       color: "#0089D6" },
            { name: "Git",         icon: "devicon-git-plain colored",         color: "#F05032" },
            { name: "GitHub",      icon: "devicon-github-original",           color: "#ffffff" },
            { name: "Grafana",     icon: "devicon-grafana-plain colored",     color: "#F46800" },
            { name: "Prometheus",  icon: "devicon-prometheus-original colored", color: "#E6522C" },
            { name: "Kafka",       icon: "devicon-apachekafka-original colored", color: "#231F20" },
        ],
    },
    {
        label: "Herramientas",
        items: [
            { name: "VS Code",   icon: "devicon-vscode-plain colored",     color: "#007ACC" },
            { name: "Anaconda",  icon: "devicon-anaconda-original colored",color: "#44A833" },
            { name: "DBeaver",   icon: "devicon-dbeaver-plain colored", color: "#382923" },
        ],
    },
    {
        label: "IA & Data",
        items: [
            { name: "TensorFlow", icon: "devicon-tensorflow-original colored", color: "#FF6F00" },
            { name: "PyTorch",    icon: "devicon-pytorch-original colored",    color: "#EE4C2C" },
        ],
},

];

function TechCard({ tech }: { tech: Tech }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl
                border border-white/5 bg-zinc-900/60 backdrop-blur-sm
                transition-all duration-300 cursor-default overflow-hidden group"
            style={{
                boxShadow: hovered
                    ? `0 0 0 1px ${tech.color}40, 0 8px 24px ${tech.color}15`
                    : "none",
                borderColor: hovered ? `${tech.color}50` : undefined,
                transform: hovered ? "translateY(-4px)" : "translateY(0)",
            }}
        >
            {/* Línea superior de color */}
            <span
                className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300"
                style={{ background: tech.color, opacity: hovered ? 1 : 0 }}
            />

            {/* Brillo radial de fondo */}
            <span
                className="absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 50% 0%, ${tech.color}18 0%, transparent 70%)`,
                    opacity: hovered ? 1 : 0,
                }}
            />

            {/* Icono devicon */}
            <i
                className={`${tech.icon} text-4xl relative z-10 transition-transform duration-300 group-hover:scale-110`}
            />

            <span className="relative z-10 text-xs font-medium text-gray-400 group-hover:text-white transition-colors duration-300 text-center leading-tight">
                {tech.name}
            </span>
        </div>
    );
}

export default function TechStack() {
    return (
        <section id="stack" className="py-24 px-6">
            <div className="container mx-auto max-w-6xl">

                {/* Cabecera */}
                <div className="mb-16">
                    <p className="text-xs font-mono text-blue-500 mb-3 tracking-widest uppercase">
                        Stack tecnológico
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight">
                        Tecnologías que uso
                    </h2>
                </div>

                {/* Categorías */}
                <div className="flex flex-col gap-12">
                    {categories.map((cat) => (
                        <div key={cat.label}>
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-widest mb-4">
                                {cat.label}
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                                {cat.items.map((tech) => (
                                    <TechCard key={tech.name} tech={tech} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
