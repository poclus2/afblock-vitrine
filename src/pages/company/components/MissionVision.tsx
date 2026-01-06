export default function MissionVision() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Mission */}
                    <div className="flex flex-col gap-4">
                        <div className="h-12 w-12 rounded-lg bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center border border-gray-100 dark:border-gray-700 mb-2 text-primary dark:text-white">
                            <span className="material-symbols-outlined text-3xl">flag</span>
                        </div>
                        <h2 className="text-primary dark:text-white text-3xl font-bold tracking-tight">Our Mission</h2>
                        <div className="h-1 w-20 bg-accent rounded-full"></div>
                        <p className="text-neutral-grey dark:text-gray-400 text-lg leading-relaxed">
                            To empower businesses by removing the friction of international settlements. We exist to make moving money across borders as simple as sending an email, while maintaining the highest standards of regulatory compliance.
                        </p>
                    </div>
                    {/* Vision */}
                    <div className="flex flex-col gap-4">
                        <div className="h-12 w-12 rounded-lg bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center border border-gray-100 dark:border-gray-700 mb-2 text-primary dark:text-white">
                            <span className="material-symbols-outlined text-3xl">visibility</span>
                        </div>
                        <h2 className="text-primary dark:text-white text-3xl font-bold tracking-tight">Our Vision</h2>
                        <div className="h-1 w-20 bg-accent rounded-full"></div>
                        <p className="text-neutral-grey dark:text-gray-400 text-lg leading-relaxed">
                            A world where global business payments are instant, transparent, and auditably secure. We envision an ecosystem where crypto and fiat treasuries coexist seamlessly through a unified orchestration platform.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
