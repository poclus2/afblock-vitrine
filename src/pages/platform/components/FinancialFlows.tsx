export default function FinancialFlows() {
    return (
        <section className="py-24 bg-background-off dark:bg-surface-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 md:text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">Financial Flows</h2>
                    <p className="text-neutral-grey dark:text-subtext-dark">Visualizing how money moves through the Afblock infrastructure.</p>
                </div>

                <div className="space-y-16">
                    {/* Flow 1 */}
                    <div className="bg-white dark:bg-background-dark rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800">
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center text-sm font-bold">1</span>
                            Fiat Collection → Stablecoin Payout
                        </h3>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">

                            <div className="flex-1 w-full p-6 bg-background-off dark:bg-surface-dark rounded-2xl text-center border border-dashed border-primary/20 dark:border-white/20">
                                <span className="material-symbols-outlined text-4xl text-primary dark:text-accent mb-2">account_balance</span>
                                <p className="font-semibold text-primary dark:text-white">Inbound Fiat</p>
                                <p className="text-sm text-neutral-grey dark:text-subtext-dark">Customer pays via Wire/ACH</p>
                            </div>

                            <div className="hidden md:block flex-shrink-0">
                                <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-3xl">arrow_forward</span>
                            </div>
                            <div className="md:hidden">
                                <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-3xl">arrow_downward</span>
                            </div>

                            <div className="flex-1 w-full p-6 bg-primary rounded-2xl text-center shadow-lg relative overflow-hidden">
                                <div className="absolute inset-0 bg-accent/10"></div>
                                <span className="material-symbols-outlined text-4xl text-white mb-2 relative z-10">sync_alt</span>
                                <p className="font-semibold text-white relative z-10">Auto-Conversion</p>
                                <p className="text-sm text-blue-100 relative z-10">USD → stablecoin (near-parity)</p>
                            </div>

                            <div className="hidden md:block flex-shrink-0">
                                <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-3xl">arrow_forward</span>
                            </div>
                            <div className="md:hidden">
                                <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-3xl">arrow_downward</span>
                            </div>

                            <div className="flex-1 w-full p-6 bg-background-off dark:bg-surface-dark rounded-2xl text-center border border-dashed border-primary/20 dark:border-white/20">
                                <span className="material-symbols-outlined text-4xl text-primary dark:text-accent mb-2">account_balance_wallet</span>
                                <p className="font-semibold text-primary dark:text-white">Payout</p>
                                <p className="text-sm text-neutral-grey dark:text-subtext-dark">Sent to Vendor Wallet</p>
                            </div>

                        </div>
                    </div>

                    {/* Flow 2 */}
                    <div className="bg-white dark:bg-background-dark rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800">
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center text-sm font-bold">2</span>
                            Stablecoin Revenue → Global Off-ramp
                        </h3>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                            <div className="flex-1 w-full p-6 bg-background-off dark:bg-surface-dark rounded-2xl text-center border border-dashed border-primary/20 dark:border-white/20">
                                <span className="material-symbols-outlined text-4xl text-primary dark:text-accent mb-2">currency_bitcoin</span>
                                <p className="font-semibold text-primary dark:text-white">Crypto Deposit</p>
                                <p className="text-sm text-neutral-grey dark:text-subtext-dark">Receive USDC/USDT</p>
                            </div>

                            <div className="hidden md:block flex-shrink-0">
                                <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-3xl">arrow_forward</span>
                            </div>
                            <div className="md:hidden">
                                <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-3xl">arrow_downward</span>
                            </div>

                            <div className="flex-1 w-full p-6 bg-primary rounded-2xl text-center shadow-lg relative overflow-hidden">
                                <div className="absolute inset-0 bg-accent/10"></div>
                                <span className="material-symbols-outlined text-4xl text-white mb-2 relative z-10">currency_exchange</span>
                                <p className="font-semibold text-white relative z-10">FX Liquidation</p>
                                <p className="text-sm text-blue-100 relative z-10">USDC → EUR/GBP/USD</p>
                            </div>

                            <div className="hidden md:block flex-shrink-0">
                                <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-3xl">arrow_forward</span>
                            </div>
                            <div className="md:hidden">
                                <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-3xl">arrow_downward</span>
                            </div>

                            <div className="flex-1 w-full p-6 bg-background-off dark:bg-surface-dark rounded-2xl text-center border border-dashed border-primary/20 dark:border-white/20">
                                <span className="material-symbols-outlined text-4xl text-primary dark:text-accent mb-2">public</span>
                                <p className="font-semibold text-primary dark:text-white">Local Transfer</p>
                                <p className="text-sm text-neutral-grey dark:text-subtext-dark">Funds arrive in bank</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
