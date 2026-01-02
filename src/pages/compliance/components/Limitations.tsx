export default function Limitations() {
    return (
        <section className="py-20 bg-background-light dark:bg-surface-dark transition-colors duration-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-8">Limitations & Availability</h2>
                <div className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 inline-block text-left w-full">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                            <h4 className="text-lg font-bold text-primary dark:text-white mb-3">Supported Jurisdictions</h4>
                            <p className="text-sm text-neutral-grey dark:text-subtext-dark mb-4">
                                Afblock currently services business entities incorporated in the EU, UK, Switzerland, Singapore, and select US states.
                            </p>
                            <a href="#" className="text-xs text-primary dark:text-accent font-semibold uppercase tracking-wider">View Full List</a>
                        </div>
                        <div className="w-px bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
                        <div className="flex-1">
                            <h4 className="text-lg font-bold text-primary dark:text-white mb-3">Restricted Activities</h4>
                            <p className="text-sm text-neutral-grey dark:text-subtext-dark mb-4">
                                We strictly prohibit the use of our infrastructure for gambling, adult entertainment, weapons manufacturing, and unauthorized MSB activities.
                            </p>
                            <a href="#" className="text-xs text-primary dark:text-accent font-semibold uppercase tracking-wider">View AUP</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
