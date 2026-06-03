import { useState } from "react";
import { ExternalLink, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

type FormData = {
    nombre: string;
    email: string;
    mensaje: string;
};

const socialLinks = [
    {
        label: "GitHub",
        value: "github.com/samu190804",
        href: "https://github.com/samu190804",
        icon: <i className="devicon-github-original text-xl" />,
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/samuel-villaescusa-villalba",
        href: "https://www.linkedin.com/in/samuel-villaescusa-villalba-6185bb304/",
        icon: <i className="devicon-linkedin-plain colored text-xl" />,
    },
    {
        label: "Email",
        value: "samueltfg190804@gmail.com",
        href: "mailto:samueltfg190804@gmail.com",
        icon: <Mail className="w-5 h-5" />,
    },
];

export default function Contacto() {
    const [formState, setFormState] = useState<FormState>("idle");
    const [formData, setFormData] = useState<FormData>({
        nombre: "",
        email: "",
        mensaje: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("loading");

        try {
            const res = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    "form-name": "contacto",
                    ...formData,
                }).toString(),
            });

            if (res.ok) {
                setFormState("success");
                setFormData({ nombre: "", email: "", mensaje: "" });
            } else {
                setFormState("error");
            }
        } catch {
            setFormState("error");
        }
    };

    return (
        <section id="contacto" className="py-24 px-6">
            <div className="container mx-auto max-w-6xl">

                {/* Cabecera */}
                <div className="mb-16">
                    <p className="text-xs font-mono text-blue-500 mb-3 tracking-widest uppercase">
                        Hablemos
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight">
                        Contacto
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Columna izquierda — info */}
                    <div className="flex flex-col justify-between gap-10">
                        <div>
                            <p className="text-gray-300 text-lg leading-relaxed mb-2">
                                ¿Tienes un proyecto en mente o quieres hablar sobre una oportunidad?
                            </p>
                            <p className="text-gray-500 leading-relaxed">
                                Estoy disponible para colaboraciones o posiciones a tiempo completo. No dudes en escribirme.
                            </p>
                        </div>

                        {/* Links sociales */}
                        <div className="flex flex-col gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.label !== "Email" ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-zinc-900/40
                                        hover:border-white/10 hover:bg-zinc-900/70
                                        transition-all duration-300"
                                >
                                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                                        {link.icon}
                                    </span>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500 font-medium uppercase tracking-widest">
                                            {link.label}
                                        </span>
                                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                                            {link.value}
                                        </span>
                                    </div>
                                    <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-gray-400 ml-auto transition-colors duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Columna derecha — formulario */}
                    <div className="glass-card p-8">
                        {formState === "success" ? (
                            <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                                <CheckCircle className="w-12 h-12 text-green-400" />
                                <h3 className="text-xl font-semibold">¡Mensaje enviado!</h3>
                                <p className="text-gray-400 text-sm">
                                    Gracias por escribirme. Te responderé lo antes posible.
                                </p>
                                <button
                                    onClick={() => setFormState("idle")}
                                    className="mt-4 text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                                {/* Nombre */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tu nombre"
                                        className="w-full px-4 py-3 rounded-xl bg-zinc-800/60 border border-white/8
                                            text-white placeholder-gray-600 text-sm
                                            focus:outline-none focus:border-blue-500/50 focus:bg-zinc-800
                                            transition-all duration-200"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="tu@email.com"
                                        className="w-full px-4 py-3 rounded-xl bg-zinc-800/60 border border-white/8
                                            text-white placeholder-gray-600 text-sm
                                            focus:outline-none focus:border-blue-500/50 focus:bg-zinc-800
                                            transition-all duration-200"
                                    />
                                </div>

                                {/* Mensaje */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                                        Mensaje
                                    </label>
                                    <textarea
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Cuéntame en qué puedo ayudarte..."
                                        className="w-full px-4 py-3 rounded-xl bg-zinc-800/60 border border-white/8
                                            text-white placeholder-gray-600 text-sm resize-none
                                            focus:outline-none focus:border-blue-500/50 focus:bg-zinc-800
                                            transition-all duration-200"
                                    />
                                </div>

                                {/* Error */}
                                {formState === "error" && (
                                    <div className="flex items-center gap-2 text-red-400 text-sm">
                                        <AlertCircle className="w-4 h-4 shrink-0" />
                                        Algo salió mal. Inténtalo de nuevo o escríbeme directamente.
                                    </div>
                                )}

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={formState === "loading"}
                                    className="mt-2 flex items-center justify-center gap-2 px-6 py-3
                                        bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50
                                        rounded-full text-sm font-medium
                                        transition-all duration-200 hover:scale-[1.02] disabled:scale-100
                                        disabled:cursor-not-allowed"
                                >
                                    {formState === "loading" ? (
                                        <>
                                            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="32" strokeDashoffset="12" />
                                            </svg>
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Enviar mensaje
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
