export default function Governance() {
    return (
        <section className="py-20 bg-white dark:bg-background-dark transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-12 items-start">

                    <div className="md:w-1/3">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">Governance & Auditability</h2>
                        <p className="text-neutral-grey dark:text-subtext-dark mb-6">
                            We maintain a comprehensive audit trail for every action on the platform, ensuring you are always ready for regulatory inquiries or internal audits.
                        </p>
                        <a href="#" className="text-primary dark:text-accent font-semibold flex items-center hover:underline">
                            Download Compliance Report <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                        </a>
                    </div>

                    <div className="md:w-2/3 grid gap-4">
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <h4 className="font-bold text-lg text-primary dark:text-white mb-2 flex items-center">
                                <span className="material-symbols-outlined text-gray-400 mr-3">history</span> Immutable Logs
                            </h4>
                            <p className="text-neutral-grey dark:text-subtext-dark text-sm pl-9">
                                All API calls, user logins, and configuration changes are logged with timestamps and IP addresses in a write-once database.
                            </p>
                        </div>
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <h4 className="font-bold text-lg text-primary dark:text-white mb-2 flex items-center">
                                <span className="material-symbols-outlined text-gray-400 mr-3">gavel</span> Dual-Control Authorizations
                            </h4>
                            <p className="text-neutral-grey dark:text-subtext-dark text-sm pl-9">
                                Critical actions such as changing payout addresses or whitelist modifications require approval from multiple admin roles.
                            </p>
                        </div>
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <h4 className="font-bold text-lg text-primary dark:text-white mb-2 flex items-center">
                                <span className="material-symbols-outlined text-gray-400 mr-3">description</span> On-Demand Reporting
                            </h4>
                            <p className="text-neutral-grey dark:text-subtext-dark text-sm pl-9">
                                Generate standardized reports for SARs, CTRs, and tax purposes with a single click from the dashboard.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
