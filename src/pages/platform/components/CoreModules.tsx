export default function CoreModules() {
    const modules = [
        {
            title: 'Multi-Currency Accounts',
            description: 'Segregated IBANs and crypto wallets for over 15+ currencies and 5+ stablecoins.',
            icon: 'account_balance_wallet',
        },
        {
            title: 'Instant Conversion',
            description: 'Zero-slippage conversion between Fiat and Stablecoins (USDC/USDT) 24/7.',
            icon: 'swap_horiz',
        },
        {
            title: 'B2B Payments',
            description: 'Pay vendors and invoices globally using crypto rails with automatic fiat settlement.',
            icon: 'payments',
        },
        {
            title: 'Global Off-Ramp',
            description: 'Automated payout engine to local bank accounts in 60+ countries.',
            icon: 'output',
        },
        {
            title: 'Unified Reporting',
            description: 'Real-time consolidation of all fiat and crypto positions for easy accounting.',
            icon: 'pie_chart',
        },
        {
            title: 'Built-in Compliance',
            description: 'Automated KYB, AML screening, and transaction monitoring embedded in every flow.',
            icon: 'gpp_good',
        },
    ];

    return (
        <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary dark:text-white text-3xl font-bold mb-4">Core Modules</h2>
                    <p className="text-neutral-grey dark:text-subtext-dark max-w-2xl mx-auto">
                        Everything you need to manage your crypto-treasury in one secure dashboard.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((module) => (
                        <div
                            key={module.title}
                            className="group p-8 bg-white dark:bg-surface-dark rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft hover:shadow-lg transition-all"
                        >
                            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <span className="material-symbols-outlined text-primary dark:text-blue-300 text-3xl group-hover:text-white transition-colors">
                                    {module.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-primary dark:text-white mb-3">{module.title}</h3>
                            <p className="text-neutral-grey dark:text-subtext-dark">{module.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
