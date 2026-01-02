export default function Security() {
    return (
        <section className="py-20 bg-background-light dark:bg-surface-dark transition-colors duration-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-12 text-center">Security & Data Protection</h2>

                <div className="bg-primary dark:bg-black rounded-3xl overflow-hidden shadow-2xl relative text-white">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-[80px]"></div>

                    <div className="grid md:grid-cols-2">
                        <div className="p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
                            <h3 className="text-2xl font-bold mb-4">Bank-Grade Encryption</h3>
                            <p className="text-blue-100 mb-6">All sensitive data is encrypted at rest (AES-256) and in transit (TLS 1.3). We utilize Multi-Party Computation (MPC) for wallet security.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center text-sm">
                                    <span className="material-symbols-outlined text-accent text-sm mr-2">check</span> SOC 2 Type II Certified
                                </li>
                                <li className="flex items-center text-sm">
                                    <span className="material-symbols-outlined text-accent text-sm mr-2">check</span> GDPR & CCPA Compliant
                                </li>
                                <li className="flex items-center text-sm">
                                    <span className="material-symbols-outlined text-accent text-sm mr-2">check</span> Regular Penetration Testing
                                </li>
                            </ul>
                        </div>

                        <div className="p-10 flex flex-col justify-center bg-white/5">
                            <h3 className="text-2xl font-bold mb-4">Funds Segregation</h3>
                            <p className="text-blue-100 mb-6">Client funds are always kept strictly segregated from Afblock's corporate operating accounts. 100% of stablecoin reserves are verifiable.</p>
                            <div className="bg-black/20 p-4 rounded-lg">
                                <div className="flex justify-between text-xs text-blue-200 mb-2">
                                    <span>Reserve Ratio</span>
                                    <span className="text-accent font-mono">1:1</span>
                                </div>
                                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                    <div className="bg-accent h-full w-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
