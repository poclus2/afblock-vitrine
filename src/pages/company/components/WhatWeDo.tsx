export default function WhatWeDo() {
    return (
        <section className="py-20 lg:py-24 bg-white dark:bg-surface-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-16 max-w-2xl">
                    <h2 className="text-primary dark:text-white text-3xl md:text-4xl font-bold tracking-tight mb-4">What Afblock Does</h2>
                    <p className="text-neutral-grey dark:text-gray-400 text-lg">
                        Comprehensive infrastructure for the modern financial stack.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="group p-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                        <div className="mb-6 inline-flex items-center justify-center h-14 w-14 rounded-lg bg-primary/5 dark:bg-primary/20 text-primary dark:text-accent group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-3xl">account_balance</span>
                        </div>
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Treasury Management</h3>
                        <p className="text-neutral-grey dark:text-gray-400 leading-relaxed">
                            Manage your crypto and fiat treasury flows in one unified dashboard with real-time reporting and analytics.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="group p-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                        <div className="mb-6 inline-flex items-center justify-center h-14 w-14 rounded-lg bg-primary/5 dark:bg-primary/20 text-primary dark:text-accent group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-3xl">payments</span>
                        </div>
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Global Payouts</h3>
                        <p className="text-neutral-grey dark:text-gray-400 leading-relaxed">
                            Perform off-ramp payouts to 180+ countries instantly. Convert stablecoins to local fiat currencies effortlessly.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className="group p-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                        <div className="mb-6 inline-flex items-center justify-center h-14 w-14 rounded-lg bg-primary/5 dark:bg-primary/20 text-primary dark:text-accent group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-3xl">verified_user</span>
                        </div>
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Compliance & Audit</h3>
                        <p className="text-neutral-grey dark:text-gray-400 leading-relaxed">
                            Enterprise-grade security with built-in KYB/KYC checks and audit-ready logs for every single transaction.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
