export default function Hero() {
    return (
        <header className="relative overflow-hidden pt-20 pb-32 gradient-mesh">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-surface-dark border border-blue-100 dark:border-gray-700 mb-8">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    <span className="text-xs font-semibold text-primary dark:text-blue-300 uppercase tracking-wider">
                        Platform
                    </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-primary dark:text-white tracking-tight leading-tight mb-8">
                    Stablecoin-first infrastructure,<br className="hidden md:block" />
                    built for{" "}
                    <span className="relative inline-block">
                        <span className="relative z-10">business operations</span>
                        <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/30 -z-0"></span>
                    </span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-xl text-neutral-grey dark:text-subtext-dark leading-relaxed">
                    Empower your treasury with a unified layer to collect, convert, and manage digital assets with institutional-grade compliance and auditability.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-primary hover:bg-blue-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl shadow-primary/20 transition-all transform hover:-translate-y-1">
                        Book a demo
                    </button>
                    <button className="bg-transparent border-2 border-primary dark:border-white/20 text-primary dark:text-white hover:bg-primary/5 dark:hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all">
                        Open account
                    </button>
                </div>
                <div className="mt-20 relative max-w-5xl mx-auto">
                    <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full opacity-30 transform translate-y-20"></div>
                    <img
                        alt="Abstract interface showcasing Afblock dashboard metrics"
                        className="relative w-full h-auto object-cover opacity-90 dark:opacity-100"
                        src="/platform_dashboard.png"
                    />
                </div>
            </div>
        </header>
    );
}
