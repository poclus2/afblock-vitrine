export default function TransactionMonitoring() {
    const monitoringTools = [
        {
            title: 'Chainalysis Integration',
            description: 'Automated wallet screening to block transactions with known high-risk entities or darknet markets.',
            icon: 'radar',
        },
        {
            title: 'Velocity Limits',
            description: 'Configurable daily, weekly, and monthly transaction volume caps per merchant and user.',
            icon: 'speed',
        },
        {
            title: 'Suspicious Activity Reports',
            description: 'Automated flagging of structuring patterns and immediate reporting to relevant FIUs.',
            icon: 'flag',
        },
        {
            title: 'Geo-Fencing',
            description: 'Automatic blocking of IP addresses and jurisdictions on FATF blacklists/greylists.',
            icon: 'rule',
        },
    ];

    return (
        <section className="py-20 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6">Transaction Monitoring & Controls</h2>
                    <p className="text-lg text-neutral-grey dark:text-subtext-dark max-w-3xl">
                        Real-time surveillance of all fiat and crypto flows to detect suspicious activity and prevent financial crime.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {monitoringTools.map((tool) => (
                        <div
                            key={tool.title}
                            className="p-6 rounded-xl bg-background-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700"
                        >
                            <span className="material-symbols-outlined text-4xl text-primary dark:text-accent mb-4">{tool.icon}</span>
                            <h3 className="font-bold text-lg mb-2 text-primary dark:text-white">{tool.title}</h3>
                            <p className="text-sm text-neutral-grey dark:text-subtext-dark">{tool.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
