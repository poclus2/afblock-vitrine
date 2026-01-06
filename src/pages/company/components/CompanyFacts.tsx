export default function CompanyFacts() {
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-primary dark:text-white text-3xl font-bold tracking-tight">Afblock in Numbers</h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm text-center md:text-left">
                        <p className="text-4xl md:text-5xl font-extrabold text-accent mb-2">2024</p>
                        <p className="text-primary dark:text-white font-bold text-lg">Year Founded</p>
                        <p className="text-neutral-grey dark:text-gray-400 text-sm mt-1">Establishing the new standard</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm text-center md:text-left">
                        <p className="text-4xl md:text-5xl font-extrabold text-accent mb-2">180+</p>
                        <p className="text-primary dark:text-white font-bold text-lg">Global Coverage</p>
                        <p className="text-neutral-grey dark:text-gray-400 text-sm mt-1">Payout corridors</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm text-center md:text-left">
                        <p className="text-4xl md:text-5xl font-extrabold text-accent mb-2">Enterprise</p>
                        <p className="text-primary dark:text-white font-bold text-lg">Infrastructure</p>
                        <p className="text-neutral-grey dark:text-gray-400 text-sm mt-1">Built for scale</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm text-center md:text-left">
                        <p className="text-4xl md:text-5xl font-extrabold text-accent mb-2">High-Vol</p>
                        <p className="text-primary dark:text-white font-bold text-lg">Business Focus</p>
                        <p className="text-neutral-grey dark:text-gray-400 text-sm mt-1">Tailored solutions</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
