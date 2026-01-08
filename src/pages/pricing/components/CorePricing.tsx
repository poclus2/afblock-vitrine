export default function CorePricing() {
    return (
        <section className="py-20 bg-white dark:bg-surface-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">Core Platform Pricing</h2>
                    <p className="text-neutral-grey dark:text-gray-400">Everything you need to manage fiat and crypto treasuries.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1: Account */}
                    <div className="group relative bg-background-light dark:bg-background-dark rounded-2xl p-8 border border-slate-300 dark:border-gray-700 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                        <div className="h-12 w-12 bg-blue-50 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary dark:text-accent">
                            <span className="material-symbols-outlined text-2xl">verified_user</span>
                        </div>
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Account & Onboarding</h3>
                        <p className="text-sm text-neutral-grey dark:text-gray-400 mb-6 min-h-[40px]">Access to multi-currency IBANs and corporate wallets.</p>
                        <div className="border-t border-slate-300 dark:border-gray-700 pt-6">
                            <div className="flex items-baseline mb-1">
                                <span className="text-4xl font-bold text-primary dark:text-white">$0</span>
                                <span className="text-neutral-grey dark:text-gray-400 ml-2">/ month</span>
                            </div>
                            <p className="text-sm text-accent font-medium mb-6">Free for standard accounts. Account maintenance is free. Transaction and third-party network fees may apply.</p>
                            <ul className="space-y-4 text-sm text-neutral-grey dark:text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                    <span>KYB & Compliance Checks</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                    <span>Multi-currency IBAN generation</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                    <span>Unlimited team members</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 2: Transfers */}
                    <div className="group relative bg-background-light dark:bg-background-dark rounded-2xl p-8 border border-slate-300 dark:border-gray-700 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                        <div className="h-12 w-12 bg-blue-50 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary dark:text-accent">
                            <span className="material-symbols-outlined text-2xl">swap_horiz</span>
                        </div>
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Transfers & FX</h3>
                        <p className="text-sm text-neutral-grey dark:text-gray-400 mb-6 min-h-[40px]">Global payments, crypto on/off-ramps and conversions.</p>
                        <div className="border-t border-slate-300 dark:border-gray-700 pt-6">
                            <div className="flex items-baseline mb-1">
                                <span className="text-4xl font-bold text-primary dark:text-white">&lt; 1%</span>
                                <span className="text-neutral-grey dark:text-gray-400 ml-2">per transaction</span>
                            </div>
                            <p className="text-sm text-accent font-medium mb-6">Volume discounts available</p>
                            <ul className="space-y-4 text-sm text-neutral-grey dark:text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                    <span>Fiat to Stablecoin</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                    <span>International SWIFT/SEPA transfers</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                    <span>Real-time FX rates</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 3: Corporate Cards */}
                    <div className="group relative bg-background-light dark:bg-background-dark rounded-2xl p-8 border border-slate-300 dark:border-gray-700 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                        <div className="h-12 w-12 bg-blue-50 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary dark:text-accent">
                            <span className="material-symbols-outlined text-2xl">credit_card</span>
                        </div>
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Corporate Cards (Upcoming)</h3>
                        <p className="text-sm text-neutral-grey dark:text-gray-400 mb-6 min-h-[40px]">Virtual and physical cards for team expenses.</p>
                        <div className="border-t border-slate-300 dark:border-gray-700 pt-6">
                            <div className="flex items-baseline mb-1">
                                <span className="text-4xl font-bold text-primary dark:text-white">$0</span>
                                <span className="text-neutral-grey dark:text-gray-400 ml-2">issuance fee</span>
                            </div>
                            <p className="text-sm text-accent font-medium mb-6">Up to 10 cards free</p>
                            <ul className="space-y-4 text-sm text-neutral-grey dark:text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                    <span>Unlimited virtual cards ($1/mo after 10)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                    <span>High spending limits</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                    <span>1% Cashback on eligible spend</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
