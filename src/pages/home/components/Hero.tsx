export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-background-off to-blue-50 dark:from-background-dark dark:to-slate-900 pt-20 pb-24 lg:pt-32 lg:pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Text */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl lg:text-6xl font-extrabold text-primary dark:text-white leading-[1.15] mb-6">
                            Stablecoin-first infrastructure for{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 dark:from-blue-300 dark:to-white">
                                modern businesses
                            </span>
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-grey dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Seamlessly collect fiat, convert to stablecoins, manage treasury flows, and execute off-ramp payouts with built-in compliance and auditability.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a
                                href="#"
                                className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl font-semibold text-center hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                            >
                                Book a demo
                                <span className="material-icons text-sm">arrow_forward</span>
                            </a>
                            <a
                                href="#"
                                className="w-full sm:w-auto border-2 border-primary dark:border-blue-400 text-primary dark:text-blue-300 px-8 py-4 rounded-xl font-semibold text-center hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all relative overflow-hidden group"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Open account
                                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                                </span>
                            </a>
                        </div>
                        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                            Regulated financial technology provider. Not a bank.
                        </p>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        <div className="relative w-full max-w-lg aspect-square">
                            {/* Animated Halo */}
                            <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>

                            {/* Floating Card: Incoming Fiat */}
                            <div className="absolute top-10 left-0 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-soft dark:shadow-none dark:border dark:border-slate-700 w-64 z-20 transform -rotate-6 animate-float">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <span className="material-icons">attach_money</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Incoming Fiat</p>
                                        <p className="font-bold text-neutral-dark dark:text-white">$145,200.00</p>
                                    </div>
                                </div>
                                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 w-3/4"></div>
                                </div>
                            </div>

                            {/* Center Hub */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary dark:bg-blue-900 rounded-3xl flex items-center justify-center shadow-2xl z-10 border-4 border-white dark:border-slate-800">
                                <span className="material-icons text-white text-6xl">hub</span>
                            </div>

                            {/* Floating Card: Stablecoin Payout */}
                            <div
                                className="absolute bottom-10 right-0 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-soft dark:shadow-none dark:border dark:border-slate-700 w-64 z-20 transform rotate-3"
                                style={{ animation: 'float 5s ease-in-out infinite 1s' }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                                        <span className="material-icons">token</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Stablecoin Payout</p>
                                        <p className="font-bold text-neutral-dark dark:text-white">145,000 USDC</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center text-xs text-gray-400">
                                    <span>Processing</span>
                                    <span className="text-accent font-medium">Instant</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
