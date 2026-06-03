import { useState, useEffect } from "react";

const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Tecnologías", href: "#stack" },
    { name: "Trayectoria", href: "#trayectoria" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // Cierra el menú al hacer click en un enlace
    const handleNavClick = (href: string) => {
        setIsOpen(false);
        // Smooth scroll manual por si acaso
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    // Detecta la sección activa al hacer scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) =>
                document.querySelector(item.href)
            );
            const scrollY = window.scrollY + 100;

            sections.forEach((section, i) => {
                if (!section) return;
                const top = (section as HTMLElement).offsetTop;
                const height = (section as HTMLElement).offsetHeight;
                if (scrollY >= top && scrollY < top + height) {
                    setActiveSection(navItems[i].href);
                }
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Bloquea scroll del body cuando el menú está abierto
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 py-4">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="glass flex items-center justify-between px-6 py-3">
                        {/* Logo */}
                        <a href="/" className="text-xl font-semibold tracking-tight z-10">
                            SV<span className="text-blue-500">.</span>
                        </a>

                        {/* Links escritorio */}
                        <div className="hidden md:flex gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }}
                                    className={`
                                        relative text-sm font-medium transition-colors duration-300
                                        group
                                        ${activeSection === item.href
                                            ? "text-white"
                                            : "text-gray-400 hover:text-white"
                                        }
                                    `}
                                >
                                    {item.name}
                                    {/* Underline animado */}
                                    <span
                                        className={`
                                            absolute -bottom-1 left-0 h-px bg-blue-500
                                            transition-all duration-300 ease-out
                                            ${activeSection === item.href
                                                ? "w-full"
                                                : "w-0 group-hover:w-full"
                                            }
                                        `}
                                    />
                                </a>
                            ))}
                        </div>

                        {/* Botón contactar escritorio */}
                        <a
                            href="#contacto"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick("#contacto");
                            }}
                            className="hidden md:block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                        >
                            Contactar
                        </a>

                        {/* Botón hamburguesa */}
                        <button
                            onClick={() => setIsOpen((prev) => !prev)}
                            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50"
                            aria-label="Toggle menu"
                        >
                            <span
                                className={`
                                    block h-px w-6 bg-white rounded-full
                                    transition-all duration-300 ease-in-out origin-center
                                    ${isOpen ? "rotate-45 translate-y-1.25" : ""}
                                `}
                            />
                            <span
                                className={`
                                    block h-px bg-white rounded-full
                                    transition-all duration-300 ease-in-out
                                    ${isOpen ? "w-0 opacity-0" : "w-6 opacity-100"}
                                `}
                            />
                            <span
                                className={`
                                    block h-px w-6 bg-white rounded-full
                                    transition-all duration-300 ease-in-out origin-center
                                    ${isOpen ? "-rotate-45 -translate-y-2.25" : ""}
                                `}
                            />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Overlay oscuro */}
            <div
                onClick={() => setIsOpen(false)}
                className={`
                    fixed inset-0 z-40 bg-black/60 backdrop-blur-sm
                    transition-opacity duration-300 md:hidden
                    ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
            />

            {/* Panel menú móvil */}
            <div
                className={`
                    fixed top-0 right-0 h-full w-72 z-40 md:hidden
                    bg-zinc-900/95 backdrop-blur-xl
                    border-l border-white/10
                    flex flex-col justify-center gap-2 px-8
                    transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                {navItems.map((item, i) => (
                    <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item.href);
                        }}
                        className={`
                            group flex items-center gap-3 py-4
                            border-b border-white/5 last:border-0
                            text-2xl font-semibold tracking-tight
                            transition-all duration-300
                            ${activeSection === item.href
                                ? "text-white"
                                : "text-gray-500 hover:text-white"
                            }
                        `}
                        style={{
                            transitionDelay: isOpen ? `${i * 60 + 100}ms` : "0ms",
                            transform: isOpen ? "translateX(0)" : "translateX(20px)",
                            opacity: isOpen ? 1 : 0,
                        }}
                    >
                        {/* Número decorativo */}
                        <span className="text-xs text-blue-500 font-mono mt-1 w-4 shrink-0">
                            0{i + 1}
                        </span>
                        <span className="relative">
                            {item.name}
                            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                        </span>
                    </a>
                ))}

                {/* Botón contactar en móvil */}
                <a
                    href="#contacto"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("#contacto");
                    }}
                    className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-medium text-center transition-all duration-200 hover:scale-105"
                    style={{
                        transitionDelay: isOpen ? "340ms" : "0ms",
                        transform: isOpen ? "translateX(0)" : "translateX(20px)",
                        opacity: isOpen ? 1 : 0,
                    }}
                >
                    Contactar
                </a>
            </div>
        </>
    );
}
