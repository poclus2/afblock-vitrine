export default function PlatformFeatures() {
    const features = [
        {
            title: 'Dedicated IBANs',
            description: "Accounts in your company's name, not pooled wallets.",
        },
        {
            title: 'Programmable API',
            description: 'Automate complex treasury flows via our REST API.',
        },
        {
            title: 'Multi-User Governance',
            description: 'Set approval policies, spending limits, and roles.',
        },
        {
            title: 'Audit-Ready Reporting',
            description: 'Download CSV/PDF reports formatted for your ERP.',
        },
    ];

    return (
        <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-primary dark:text-white mb-6 leading-tight">
                            More than just an On-Ramp.
                        </h2>
                        <p className="text-lg text-neutral-grey dark:text-text-body-dark mb-8">
                            Most solutions offer simple conversion. Afblock offers a complete financial operating system tailored for high-volume business needs.
                        </p>
                        <p className="text-lg text-neutral-grey dark:text-text-body-dark mb-8 border-l-4 border-accent pl-4 italic">
                            For example: automate payroll in USDC/USDT for a distributed team across Europe and Africa.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-primary dark:text-accent font-semibold flex items-center hover:underline">
                                Read our case studies <span className="material-symbols-outlined ml-1">arrow_forward</span>
                            </a>
                        </div>
                    </div>

                    <div className="bg-background-off dark:bg-surface-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800">
                        <ul className="space-y-6">
                            {features.map((feature) => (
                                <li key={feature.title} className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-1">
                                        <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-sm">check</span>
                                    </span>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-primary dark:text-white">{feature.title}</h4>
                                        <p className="text-sm text-neutral-grey dark:text-text-body-dark mt-1">{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
