export default function KYBFramework() {
    return (
        <section className="py-20 bg-background-light dark:bg-surface-dark relative overflow-hidden transition-colors duration-200">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-5 dark:opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">KYB / KYC Framework</h2>
                        <p className="text-lg text-neutral-grey dark:text-subtext-dark mb-8">
                            Our onboarding process is rigorous yet streamlined. We employ a multi-stage verification process to ensure we only do business with legitimate entities.
                        </p>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-background-dark rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center font-bold text-primary shadow-sm">
                                    01
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary dark:text-white">Entity Verification (KYB)</h4>
                                    <p className="text-neutral-grey dark:text-subtext-dark text-sm mt-1">Verification of business registration, operating address, and good standing status in the jurisdiction of incorporation.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-background-dark rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center font-bold text-primary shadow-sm">
                                    02
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary dark:text-white">UBO Identification (KYC)</h4>
                                    <p className="text-neutral-grey dark:text-subtext-dark text-sm mt-1">Identity verification for all Ultimate Beneficial Owners (UBOs) holding &gt;25% stake, using biometric liveness checks.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-background-dark rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center font-bold text-primary shadow-sm">
                                    03
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary dark:text-white">Enhanced Due Diligence (EDD)</h4>
                                    <p className="text-neutral-grey dark:text-subtext-dark text-sm mt-1">Applied to high-risk verticals or jurisdictions, requiring additional source of wealth documentation.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
                        <div className="bg-white dark:bg-background-dark rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 relative z-10">
                            <div className="flex justify-between items-center mb-8 border-b border-gray-100 dark:border-gray-700 pb-4">
                                <div className="text-sm font-medium text-gray-500 uppercase">Verification Status</div>
                                <div className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Approved</div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded w-3/4"></div>
                                <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded w-1/2"></div>
                                <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded w-full"></div>
                                <div className="mt-8 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary dark:text-accent">verified_user</span>
                                    <span className="text-sm font-semibold text-primary dark:text-white">Sanctions Screening Passed</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary dark:text-accent">verified_user</span>
                                    <span className="text-sm font-semibold text-primary dark:text-white">PEP Check Cleared</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary dark:text-accent">verified_user</span>
                                    <span className="text-sm font-semibold text-primary dark:text-white">Adverse Media Check Cleared</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
