export default function DeepDivePayroll() {
    return (
        <section id="payroll" className="border-t border-gray-100 dark:border-gray-800 bg-background-off dark:bg-surface-dark py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">

                    {/* Text Content */}
                    <div className="flex-1">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-full bg-primary text-white">
                                <span className="material-symbols-outlined">public</span>
                            </div>
                            <h2 className="text-2xl font-bold text-primary dark:text-white">Cross-Border Payroll</h2>
                        </div>

                        <div className="mb-8 space-y-6">
                            <div className="rounded-lg border border-red-100 bg-red-50/50 dark:bg-red-900/10 dark:border-red-900/30 p-4">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-red-900 dark:text-red-300">
                                    <span className="material-symbols-outlined text-[18px]">cancel</span> The Problem
                                </h4>
                                <p className="mt-1 text-sm text-neutral-600 dark:text-gray-400">Traditional SWIFT transfers take 3-5 days, incur 3-5% FX fees, and lack payment visibility.</p>
                            </div>
                            <div className="rounded-lg border border-green-100 bg-green-50/50 dark:bg-green-900/10 dark:border-green-900/30 p-4">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-green-900 dark:text-green-300">
                                    <span className="material-symbols-outlined text-[18px] text-accent">check_circle</span> The Solution
                                </h4>
                                <p className="mt-1 text-sm text-neutral-600 dark:text-gray-400">Afblock enables programmable payouts. Fund in USD, convert to stablecoin, and off-ramp to local currency instantly.</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-dark dark:text-white">Key Benefits</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 material-symbols-outlined text-[20px] text-accent">bolt</span>
                                    <div>
                                        <span className="block text-sm font-bold text-primary dark:text-white">T+0 Settlement</span>
                                        <span className="text-sm text-neutral-grey dark:text-gray-400">Funds arrive same-day, often within minutes.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 material-symbols-outlined text-[20px] text-accent">savings</span>
                                    <div>
                                        <span className="block text-sm font-bold text-primary dark:text-white">Reduced FX Costs</span>
                                        <span className="text-sm text-neutral-grey dark:text-gray-400">Save up to 80% on conversion fees compared to banks.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 material-symbols-outlined text-[20px] text-accent">fact_check</span>
                                    <div>
                                        <span className="block text-sm font-bold text-primary dark:text-white">Automated Compliance</span>
                                        <span className="text-sm text-neutral-grey dark:text-gray-400">Built-in sanctions screening for every recipient.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Flow Diagram */}
                    <div className="flex-1 lg:pt-8">
                        <div className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-8 shadow-sm">
                            <div className="absolute right-4 top-4 rounded bg-gray-100 dark:bg-gray-800 px-2 py-1 text-[10px] font-bold uppercase text-gray-500 dark:text-gray-400">Flow Diagram</div>
                            <div className="flex flex-col gap-6">
                                {/* Step 1 */}
                                <div className="flex items-center gap-4">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border-2 border-primary bg-primary/5 dark:bg-primary/20 text-primary dark:text-blue-300">
                                        <span className="material-symbols-outlined">apartment</span>
                                    </div>
                                    <div className="flex-1 rounded border border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 p-3">
                                        <div className="text-xs font-bold text-gray-500 dark:text-gray-400">Origin</div>
                                        <div className="font-semibold text-neutral-dark dark:text-white">Corporate Bank (USD)</div>
                                    </div>
                                </div>
                                {/* Connector Down */}
                                <div className="ml-6 h-8 w-0.5 bg-primary dark:bg-blue-500"></div>
                                {/* Step 2 */}
                                <div className="flex items-center gap-4">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary text-white shadow-lg shadow-primary/20">
                                        <span className="material-symbols-outlined">token</span>
                                    </div>
                                    <div className="flex-1 rounded bg-primary/5 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 p-3">
                                        <div className="text-xs font-bold text-primary dark:text-blue-300">Afblock Engine</div>
                                        <div className="font-semibold text-neutral-dark dark:text-white">Auto-Convert to USDC</div>
                                    </div>
                                </div>
                                {/* Connector Down */}
                                <div className="ml-6 h-8 w-0.5 bg-primary dark:bg-blue-500"></div>
                                {/* Step 3 */}
                                <div className="flex items-center gap-4">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border-2 border-accent bg-accent/10 text-yellow-700 dark:text-yellow-400">
                                        <span className="material-symbols-outlined">payments</span>
                                    </div>
                                    <div className="flex-1 rounded border border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 p-3">
                                        <div className="text-xs font-bold text-gray-500 dark:text-gray-400">Destination</div>
                                        <div className="font-semibold text-neutral-dark dark:text-white">Local Bank (EUR/GBP/NGN)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
