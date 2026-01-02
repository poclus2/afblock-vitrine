export default function Hero() {
    return (
        <section className="relative py-20 lg:py-32 overflow-hidden bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl text-center md:text-left">
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary dark:text-blue-300 dark:bg-blue-900/30 mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
                        About Afblock
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary dark:text-white tracking-tight leading-[1.1] mb-8">
                        Building the Future of <br />
                        <span className="relative inline-block">
                            B2B Fintech
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/30 -z-10 rounded-sm"></span>
                        </span>
                        {' '}Infrastructure
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-grey dark:text-gray-400 font-normal leading-relaxed max-w-2xl">
                        We bridge the gap between traditional finance and blockchain efficiency, enabling seamless global business payments with built-in compliance.
                    </p>
                </div>
            </div>
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl -z-0 pointer-events-none"></div>
        </section>
    );
}
