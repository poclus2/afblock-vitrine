export default function UseCasesGrid() {
    const cases = [
        {
            title: 'Cross-Border Payroll',
            description: 'Pay global teams instantly in local fiat or stablecoins, bypassing correspondent banking delays.',
            icon: 'public',
            link: '#payroll',
        },
        {
            title: 'Merchant Settlement',
            description: 'Accept crypto payments and auto-convert to fiat instantly to eliminate volatility risk.',
            icon: 'storefront',
            link: '#merchant',
        },
        {
            title: 'Treasury Management',
            description: 'Unified visibility across fiat and digital assets with automated rebalancing.',
            icon: 'account_balance',
            link: '#',
        },
        {
            title: 'Invoice Factoring',
            description: 'Tokenize invoices for instant liquidity through DeFi pools or private credit lines.',
            icon: 'receipt_long',
            link: '#',
        },
        {
            title: 'Marketplace Payouts',
            description: 'Split payments programmatically between platform and sellers in real-time.',
            icon: 'hub',
            link: '#',
        },
        {
            title: 'Yield Generation',
            description: 'Access safe, institutional-grade yield products for idle corporate treasury.',
            icon: 'trending_up',
            link: '#',
        },
    ];

    return (
        <section className="py-20 bg-white dark:bg-background-dark">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-primary dark:text-white">Applications</h2>
                    <p className="mt-2 text-neutral-grey dark:text-gray-400">Select a workflow to see how Afblock optimizes the process.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cases.map((item) => (
                        <div
                            key={item.title}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-gray-200 bg-white dark:bg-surface-dark dark:border-gray-800 p-6 shadow-soft transition-all duration-300 hover:border-primary/30 hover:shadow-hover hover:-translate-y-1 cursor-pointer"
                        >
                            <div>
                                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/5 dark:bg-primary/20 text-primary dark:text-blue-300">
                                    <span className="material-symbols-outlined icon-filled">{item.icon}</span>
                                </div>
                                <h3 className="text-lg font-bold text-neutral-dark dark:text-white group-hover:text-primary dark:group-hover:text-blue-300 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-neutral-grey dark:text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                            <div className="mt-6 flex items-center text-sm font-semibold text-primary dark:text-blue-300">
                                Explore Workflow <span className="material-symbols-outlined ml-1 text-[18px]">arrow_forward</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
