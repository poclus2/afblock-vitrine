export default function HowItWorks() {
    return (
        <section className="py-24 bg-primary dark:bg-blue-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(#fbcd1b 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How Afblock works</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto">A unified infrastructure for the entire lifecycle of your funds.</p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-500/50 -translate-y-1/2 z-0"></div>

                    {/* Step 1 */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg text-primary">
                            <span className="material-symbols-outlined text-3xl">account_balance</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Fiat In</h3>
                        <p className="text-sm text-blue-200 w-48">Collect payments via wire or ACH (EUR, GBP, USD).</p>
                    </div>

                    {/* Arrow (Mobile) */}
                    <span className="material-symbols-outlined text-accent md:hidden">arrow_downward</span>

                    {/* Step 2 */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg text-primary">
                            <span className="material-symbols-outlined text-3xl">sync_alt</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Convert</h3>
                        <p className="text-sm text-blue-200 w-48">Auto-convert to stablecoins at wholesale rates.</p>
                    </div>

                    {/* Arrow (Mobile) */}
                    <span className="material-symbols-outlined text-accent md:hidden">arrow_downward</span>

                    {/* Step 3 */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg border-4 border-accent text-primary">
                            <span className="material-symbols-outlined text-3xl">token</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-accent">Stablecoins</h3>
                        <p className="text-sm text-blue-200 w-48">Hold or transfer stablecoins on-chain instantly.</p>
                    </div>

                    {/* Arrow (Mobile) */}
                    <span className="material-symbols-outlined text-accent md:hidden">arrow_downward</span>

                    {/* Step 4 */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg text-primary">
                            <span className="material-symbols-outlined text-3xl">payments</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Off-ramp</h3>
                        <p className="text-sm text-blue-200 w-48">Payout to bank accounts worldwide.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
