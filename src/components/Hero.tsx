import { BrainCircuit } from "lucide-react";

const name = "Samuel Villaescusa Villalba";
const title = "Full Stack Developer | AI & Big Data Specialist";
const bio =
    "Apasionado por el desarrollo web y la automatización. Construyo aplicaciones inteligentes donde el machine learning resuelve problemas reales. Trabajador, organizado y comunicativo.";

const [firstName, lastName, surname1, surname2] = name.split(" ");

export default function Hero() {
    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center px-6">
            <div className="container mx-auto max-w-5xl text-center">

                {/* Badge */}
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full glass">
                    <span className="text-xs text-blue-400 font-medium inline-flex items-center gap-2">
                        <BrainCircuit className="w-4 h-4" />
                        Construyendo el futuro con código e IA
                    </span>
                </div>

                {/* Título con gradiente animado */}
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    <span className="bg-linear-to-r from-white via-blue-400 to-white bg-clip-text text-transparent animate-gradient">
                        {firstName} {lastName}
                    </span>
                    <br />
                    <span className="text-gray-400">
                        {surname1} {surname2}
                    </span>
                </h1>

                {/* Título profesional */}
                <p className="text-xl md:text-2xl text-blue-400 font-medium mb-6">
                    {title}
                </p>

                {/* Bio */}
                <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
                    {bio}
                </p>

                {/* Botones CTA */}
                <div className="flex gap-4 justify-center flex-wrap">
                    <a
                        href="#proyectos"
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-all duration-200 hover:scale-105"
                    >
                        Ver proyectos
                    </a>
                    <a
                        href="#contacto"
                        className="px-8 py-3 glass hover:bg-white/10 rounded-full font-medium transition-all duration-200 hover:scale-105"
                    >
                        Contactar
                    </a>
                </div>
            </div>
        </section>
    );
}
