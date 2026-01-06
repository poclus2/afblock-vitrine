export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-background-light dark:bg-background-dark">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/50 dark:bg-primary/10 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary dark:text-white mb-6">
                    Transparent pricing for <br className="hidden md:block" />
                    <span className="text-primary dark:text-accent">limitless growth</span>
                </h1>
                <p className="mt-4 text-xl text-neutral-grey dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    No hidden fees, no monthly subscriptions. Pay only for what you use as you scale your global financial operations with Afblock.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <a href="https://afblock-business.dartsia.app/signup" className="bg-primary text-white px-8 py-3.5 rounded-xl font-medium hover:bg-[#0a2a60] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
                        Open account
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                    <button className="bg-white dark:bg-surface-dark text-primary dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-3.5 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                        Book a demo
                    </button>
                </div>
            </div>
        </section>
    );
}
