export default function DeepDiveMerchant() {
    return (
        <section id="merchant" className="py-20 lg:py-28 bg-white dark:bg-background-dark">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col-reverse gap-12 lg:flex-row lg:gap-24">

                    {/* Flow Diagram */}
                    <div className="flex-1 lg:pt-8">
                        <div className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-background-off dark:bg-surface-dark p-8 shadow-sm">
                            <div className="absolute right-4 top-4 rounded bg-white dark:bg-gray-800 px-2 py-1 text-[10px] font-bold uppercase text-gray-500 dark:text-gray-400 shadow-sm">Flow Diagram</div>
                            <div className="flex flex-col gap-2">
                                {/* Step 1 */}
                                <div className="flex items-center justify-between">
                                    <div className="w-32 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-3 text-center shadow-sm">
                                        <div className="mx-auto mb-2 flex size-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                                            <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                                        </div>
                                        <div className="text-xs font-bold text-neutral-dark dark:text-white">Customer</div>
                                    </div>
                                    <div className="h-0.5 flex-1 bg-gray-300 dark:bg-gray-600"></div>
                                    <div className="w-32 rounded border border-primary border-dashed bg-primary/5 dark:bg-primary/20 p-3 text-center">
                                        <div className="mx-auto mb-2 flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary dark:text-blue-300">
                                            <span className="material-symbols-outlined text-[18px]">qr_code</span>
                                        </div>
                                        <div className="text-xs font-bold text-primary dark:text-blue-300">Crypto Pay</div>
                                    </div>
                                </div>
                                {/* Middle Processing Block */}
                                <div className="my-4 rounded-lg border border-primary bg-primary p-4 text-white shadow-lg relative z-10 w-full">
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-xs font-bold opacity-80">Afblock Processing</span>
                                        <span className="material-symbols-outlined text-[16px] text-accent">autorenew</span>
                                    </div>
                                    <div className="flex items-center justify-between gap-4 text-sm font-medium">
                                        <span>Receive Crypto</span>
                                        <span className="h-0.5 flex-1 bg-white/30"></span>
                                        <span className="text-accent">Convert to Fiat</span>
                                    </div>
                                </div>
                                {/* Step 3 */}
                                <div className="flex items-center justify-center">
                                    <div className="h-8 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                                </div>
                                {/* Settlement */}
                                <div className="mx-auto w-full max-w-xs rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-3 text-center shadow-sm">
                                    <div className="mx-auto mb-2 flex size-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                                        <span className="material-symbols-outlined text-[18px]">account_balance</span>
                                    </div>
                                    <div className="text-xs font-bold text-neutral-dark dark:text-white">Merchant Bank Account</div>
                                    <div className="text-[10px] text-gray-500 dark:text-gray-400">Settled in USD/EUR</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-full bg-primary text-white">
                                <span className="material-symbols-outlined">storefront</span>
                            </div>
                            <h2 className="text-2xl font-bold text-primary dark:text-white">Merchant Settlement</h2>
                        </div>

                        <div className="mb-8 space-y-6">
                            <div className="rounded-lg border border-red-100 bg-red-50/50 dark:bg-red-900/10 dark:border-red-900/30 p-4">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-red-900 dark:text-red-300">
                                    <span className="material-symbols-outlined text-[18px]">cancel</span> The Problem
                                </h4>
                                <p className="mt-1 text-sm text-neutral-600 dark:text-gray-400">Crypto payments are volatile. Holding Bitcoin or ETH on the balance sheet creates accounting nightmares and market risk.</p>
                            </div>
                            <div className="rounded-lg border border-green-100 bg-green-50/50 dark:bg-green-900/10 dark:border-green-900/30 p-4">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-green-900 dark:text-green-300">
                                    <span className="material-symbols-outlined text-[18px] text-accent">check_circle</span> The Solution
                                </h4>
                                <p className="mt-1 text-sm text-neutral-600 dark:text-gray-400">Accept any token, settle in fiat. Afblock instantly converts incoming payments to your preferred currency.</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-dark dark:text-white">Key Benefits</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 material-symbols-outlined text-[20px] text-accent">shield</span>
                                    <div>
                                        <span className="block text-sm font-bold text-primary dark:text-white">Zero Volatility Risk</span>
                                        <span className="text-sm text-neutral-grey dark:text-gray-400">Lock in the rate at the moment of purchase.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 material-symbols-outlined text-[20px] text-accent">receipt</span>
                                    <div>
                                        <span className="block text-sm font-bold text-primary dark:text-white">Simplified Accounting</span>
                                        <span className="text-sm text-neutral-grey dark:text-gray-400">Receive standard fiat bank deposits with clear reconciliation.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 material-symbols-outlined text-[20px] text-accent">globe</span>
                                    <div>
                                        <span className="block text-sm font-bold text-primary dark:text-white">Global Reach</span>
                                        <span className="text-sm text-neutral-grey dark:text-gray-400">Accept customers from anywhere without cross-border fees.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
