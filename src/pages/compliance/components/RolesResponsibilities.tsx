export default function RolesResponsibilities() {
    return (
        <section className="py-20 bg-white dark:bg-background-dark transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4">Roles & Responsibilities</h2>
                    <p className="text-neutral-grey dark:text-subtext-dark">Defining clear accountability across the transaction lifecycle.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">

                    <div className="group relative bg-background-light dark:bg-surface-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-accent/50 transition-all duration-300">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-primary dark:text-white">business</span>
                        </div>
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-4">Afblock Platform</h3>
                        <ul className="space-y-3 text-neutral-grey dark:text-subtext-dark text-sm">
                            <li className="flex items-start">
                                <span className="material-symbols-outlined text-green-500 text-lg mr-2 mt-0.5">check_circle</span>
                                <span>Infrastructure security & maintenance</span>
                            </li>
                            <li className="flex items-start">
                                <span className="material-symbols-outlined text-green-500 text-lg mr-2 mt-0.5">check_circle</span>
                                <span>Automated sanctions screening</span>
                            </li>
                            <li className="flex items-start">
                                <span className="material-symbols-outlined text-green-500 text-lg mr-2 mt-0.5">check_circle</span>
                                <span>Smart contract auditing</span>
                            </li>
                        </ul>
                    </div>

                    <div className="group relative bg-background-light dark:bg-surface-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-accent/50 transition-all duration-300">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-primary dark:text-white">account_balance</span>
                        </div>
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-4">Partner Banks</h3>
                        <ul className="space-y-3 text-neutral-grey dark:text-subtext-dark text-sm">
                            <li className="flex items-start">
                                <span className="material-symbols-outlined text-green-500 text-lg mr-2 mt-0.5">check_circle</span>
                                <span>Fiat custody & settlement</span>
                            </li>
                            <li className="flex items-start">
                                <span className="material-symbols-outlined text-green-500 text-lg mr-2 mt-0.5">check_circle</span>
                                <span>Regulatory reporting (Fiat)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="material-symbols-outlined text-green-500 text-lg mr-2 mt-0.5">check_circle</span>
                                <span>Final mile payment processing</span>
                            </li>
                        </ul>
                    </div>

                    <div className="group relative bg-background-light dark:bg-surface-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-accent/50 transition-all duration-300">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-primary dark:text-white">store</span>
                        </div>
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-4">Merchant / Client</h3>
                        <ul className="space-y-3 text-neutral-grey dark:text-subtext-dark text-sm">
                            <li className="flex items-start">
                                <span className="material-symbols-outlined text-green-500 text-lg mr-2 mt-0.5">check_circle</span>
                                <span>Accurate UBO disclosure</span>
                            </li>
                            <li className="flex items-start">
                                <span className="material-symbols-outlined text-green-500 text-lg mr-2 mt-0.5">check_circle</span>
                                <span>Source of funds verification</span>
                            </li>
                            <li className="flex items-start">
                                <span className="material-symbols-outlined text-green-500 text-lg mr-2 mt-0.5">check_circle</span>
                                <span>End-user terms acceptance</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
