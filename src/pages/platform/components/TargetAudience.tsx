export default function TargetAudience() {
    const segments = [
        { title: 'SMEs', icon: 'store' },
        { title: 'Fintechs', icon: 'rocket_launch' },
        { title: 'Platforms', icon: 'layers' },
        { title: 'Marketplaces', icon: 'shopping_cart' },
        { title: 'Treasury Teams', icon: 'trending_up' },
    ];

    return (
        <section className="py-24 bg-background-off dark:bg-surface-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">Built for the future of finance</h2>
                    <p className="text-neutral-grey dark:text-text-body-dark">Trusted by forward-thinking teams across the industry.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {segments.map((segment) => (
                        <div
                            key={segment.title}
                            className="p-6 bg-white dark:bg-background-dark rounded-xl shadow-sm text-center border border-transparent hover:border-primary/20 dark:hover:border-white/20 transition-all cursor-default"
                        >
                            <span className="material-symbols-outlined text-primary dark:text-accent text-3xl mb-3">{segment.icon}</span>
                            <h3 className="font-semibold text-primary dark:text-white">{segment.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
