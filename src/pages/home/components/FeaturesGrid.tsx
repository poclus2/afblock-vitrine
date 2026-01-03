export default function FeaturesGrid() {
    const features = [
        {
            title: 'Fiat ↔ Stablecoin',
            description: 'Instant conversion between major fiat currencies and USDC/USDT with institutional exchange rates.',
            icon: 'currency_exchange',
        },
        {
            title: 'Global Payments',
            description: 'Send payments to 180+ countries instantly using blockchain rails with local settlement options.',
            icon: 'public',
        },
        {
            title: '24/7 Operations',
            description: 'No banking hours. Move funds, convert assets, and settle transactions weekends and holidays included.',
            icon: 'schedule',
        },
        {
            title: 'Built-in Compliance',
            description: 'Automated KYB/KYC checks and transaction monitoring integrated directly into the payment flow.',
            icon: 'verified',
        },
        {
            title: 'Reporting & Reconciliation',
            description: 'Real-time dashboards and exportable data for seamless accounting and treasury management.',
            icon: 'analytics',
        },
        {
            title: 'Bank-grade Security',
            description: 'Multi-signature wallets. Built with security and compliance best practices. Infrastructure powered by regulated partner. Fully segregated client funds.',
            icon: 'security',
        },
    ];

    return (
        <section className="py-24 bg-background-light dark:bg-slate-900 border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">
                        Enterprise-grade financial tools
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Build your business on a foundation of reliability, speed, and compliance.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow group"
                        >
                            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-icons text-primary dark:text-blue-300 text-2xl">
                                    {feature.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-text-dark-grey dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
