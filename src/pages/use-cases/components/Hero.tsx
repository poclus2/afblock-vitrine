import heroImage from '../../../assets/use-cases-hero.jpg';

export default function Hero() {
    return (
        <section className="relative bg-background-off py-20 lg:py-28 dark:bg-background-dark overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 dark:border-white/10 dark:bg-white/5">
                            <span className="size-2 rounded-full bg-accent"></span>
                            <span className="text-xs font-bold uppercase tracking-wide text-primary dark:text-blue-300">Operational Efficiency</span>
                        </div>
                        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-primary dark:text-white sm:text-5xl lg:text-6xl">
                            Built for Real-World Financial Workflows
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-neutral-grey dark:text-gray-400 max-w-2xl">
                            Afblock transforms complex treasury operations into simple, automated flows. From cross-border payroll to merchant settlement, deploy infrastructure that scales with your capital.
                        </p>
                    </div>
                    {/* Hero Image */}
                    <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
                            <img
                                src={heroImage}
                                alt="Abstract visualization of financial flows"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative blob behind image */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-3xl rounded-full"></div>
                    </div>
                </div>
            </div>
            {/* Abstract Decoration */}
            <div className="absolute right-0 top-0 -z-10 h-full w-1/3 bg-gradient-to-bl from-gray-100 to-transparent opacity-50 dark:from-gray-800 lg:w-1/2"></div>
        </section>
    );
}
