

export default function Hero() {
    return (
        <section className="relative bg-background-off py-20 lg:py-28 dark:bg-background-dark overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1 dark:border-white/10 dark:bg-white/5">
                            <span className="size-2 rounded-full bg-accent"></span>
                            <span className="text-xs font-bold uppercase tracking-wide text-primary dark:text-blue-300">Operational Efficiency</span>
                        </div>
                        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-primary dark:text-white sm:text-5xl lg:text-6xl">
                            Built for Real-World Financial Workflows
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-neutral-grey dark:text-gray-400 max-w-2xl">
                            Afblock transforms complex treasury operations into simple, automated flows. From cross-border payroll to merchant settlement, deploy infrastructure that scales with your capital.
                        </p>
                    </div>
                    {/* Hero Visual - Floating Elements */}
                    <div className="flex-1 relative w-full max-w-xl lg:max-w-none flex items-center justify-center lg:h-[600px]">
                        <div className="relative w-full max-w-lg aspect-square">
                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>

                            {/* Floating Element 1 - Incoming Fiat */}
                            <div className="absolute top-10 left-0 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-soft dark:shadow-none dark:border dark:border-slate-700 w-64 z-20 transform -rotate-6 animate-[float_4s_ease-in-out_infinite]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <span className="material-icons">attach_money</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Incoming Fiat</p>
                                        <p className="font-bold text-slate-900 dark:text-white">$145,200.00</p>
                                    </div>
                                </div>
                                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 w-3/4"></div>
                                </div>
                            </div>

                            {/* Central Hub */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary dark:bg-blue-900 rounded-3xl flex items-center justify-center shadow-2xl z-10 border-4 border-white dark:border-slate-800">
                                <span className="material-icons text-white text-6xl">hub</span>
                            </div>

                            {/* Floating Element 2 - Stablecoin Payout */}
                            <div className="absolute bottom-10 right-0 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-soft dark:shadow-none dark:border dark:border-slate-700 w-64 z-20 transform rotate-3 animate-[float_5s_ease-in-out_infinite_1s]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                                        <span className="material-icons">token</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Stablecoin Payout</p>
                                        <p className="font-bold text-slate-900 dark:text-white">145,000 USDC/USDT</p>
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
            {/* Abstract Decoration */}
            <div className="absolute right-0 top-0 -z-10 h-full w-1/3 bg-gradient-to-bl from-gray-100 to-transparent opacity-50 dark:from-gray-800 lg:w-1/2"></div>
        </section>
    );
}
