export default function Footer() {
    return (
        <footer className="py-8 px-6 border-t border-white/5">
            <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-2">
                <span className="text-sm font-semibold tracking-tight">
                    SV<span className="text-blue-500">.</span>
                </span>
                <p className="text-xs text-gray-600">
                    © {new Date().getFullYear()} Samuel Villaescusa Villalba. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}