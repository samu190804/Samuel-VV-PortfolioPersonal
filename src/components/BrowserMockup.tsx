type BrowserMockupProps = {
    src: string;
    alt: string;
    url?: string;
};

export default function BrowserMockup({ src, alt, url = "localhost:4321" }: BrowserMockupProps) {
    return (
        <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
            {/* Barra superior Mac */}
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/80 border-b border-white/8">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>

                {/* Barra de URL */}
                <div className="flex-1 mx-4">
                    <div className="mx-auto max-w-xs flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-700/60 border border-white/8">
                        {/* Icono candado */}
                        <svg className="w-3 h-3 text-gray-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="11" width="18" height="11" rx="2" />
                            <path d="M7 11V7a5 5 0 0110 0v4" />
                        </svg>
                        <span className="text-xs text-gray-400 truncate font-mono">{url}</span>
                    </div>
                </div>

                {/* Botones derecha (decorativos) */}
                <div className="flex items-center gap-2 opacity-30">
                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </div>
            </div>

            {/* Captura */}
            <div className="w-full overflow-hidden">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-auto block"
                />
            </div>
        </div>
    );
}
