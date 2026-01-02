export default function TrustGrid() {
    const partners = [
        { name: 'CircleFlow', icon: 'change_circle' },
        { name: 'NovaBank', icon: 'account_balance' },
        { name: 'TrustPay', icon: 'verified_user' },
        { name: 'StarLedger', icon: 'rocket_launch' },
    ];

    return (
        <section className="py-10 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
                    Trusted infrastructure for
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                    {partners.map((partner) => (
                        <div key={partner.name} className="flex items-center gap-2 text-xl font-bold text-slate-700 dark:text-slate-300">
                            <span className="material-icons text-primary">{partner.icon}</span> {partner.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
