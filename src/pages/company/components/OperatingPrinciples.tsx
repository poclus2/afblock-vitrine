export default function OperatingPrinciples() {
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark border-y border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
                    <div className="md:w-1/3">
                        <h2 className="text-primary dark:text-white text-3xl md:text-4xl font-bold tracking-tight mb-6">Operating Principles</h2>
                        <p className="text-neutral-grey dark:text-gray-400 text-lg leading-relaxed">
                            Our core values drive every decision we make, ensuring we build a product that is reliable, secure, and fast.
                        </p>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Principle 1 */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 mb-1">
                                <span className="material-symbols-outlined text-accent">check_circle</span>
                                <h3 className="text-lg font-bold text-primary dark:text-white">Transparency</h3>
                            </div>
                            <p className="text-neutral-grey dark:text-gray-400 text-sm leading-relaxed pl-9">
                                We believe in clear, audit-ready financial flows. No hidden fees, no opaque processes. Everything is visible.
                            </p>
                        </div>
                        {/* Principle 2 */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 mb-1">
                                <span className="material-symbols-outlined text-accent">check_circle</span>
                                <h3 className="text-lg font-bold text-primary dark:text-white">Security First</h3>
                            </div>
                            <p className="text-neutral-grey dark:text-gray-400 text-sm leading-relaxed pl-9">
                                We prioritize enterprise-grade encryption and regulatory adherence above all else to protect your assets.
                            </p>
                        </div>
                        {/* Principle 3 */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 mb-1">
                                <span className="material-symbols-outlined text-accent">check_circle</span>
                                <h3 className="text-lg font-bold text-primary dark:text-white">Speed</h3>
                            </div>
                            <p className="text-neutral-grey dark:text-gray-400 text-sm leading-relaxed pl-9">
                                In the modern economy, speed is liquidity. We strive for instant settlement to improve cash flow management.
                            </p>
                        </div>
                        {/* Principle 4 */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 mb-1">
                                <span className="material-symbols-outlined text-accent">check_circle</span>
                                <h3 className="text-lg font-bold text-primary dark:text-white">Customer Obsession</h3>
                            </div>
                            <p className="text-neutral-grey dark:text-gray-400 text-sm leading-relaxed pl-9">
                                We build for our users. Every feature is designed to solve real problems for real financial teams.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
