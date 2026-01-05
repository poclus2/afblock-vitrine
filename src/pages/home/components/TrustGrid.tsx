export default function TrustGrid() {
    // Partners removed temporarily

    return (
        <section className="py-10 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
                    Trusted infrastructure for
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                    {/* Logos temporarily removed per request */}
                    <span className="text-xl font-bold text-slate-400">Fintechs</span>
                    <span className="text-xl font-bold text-slate-400">Exporters</span>
                    <span className="text-xl font-bold text-slate-400">Marketplaces</span>
                    <span className="text-xl font-bold text-slate-400">Gig Economy</span>
                </div>
            </div>
        </section>
    );
}
