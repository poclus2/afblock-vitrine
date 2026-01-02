import { Link } from 'react-router-dom';

export default function CompliancePreview() {
    const items = [
        { title: 'KYB & KYC', desc: 'Automated identity verification for businesses and individuals onboarding to your platform.' },
        { title: 'Sanctions Screening', desc: 'Real-time screening against OFAC, EU, and UN sanctions lists for all transactions.' },
        { title: 'Transaction Monitoring', desc: 'AI-driven analysis to detect and flag suspicious activities and potential money laundering.' },
        { title: 'Audit Logs', desc: 'Immutable records of all system actions, accessible anytime for regulatory reporting.' },
    ];

    return (
        <section className="py-24 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    <div className="lg:col-span-4">
                        <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Compliance is not an afterthought</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Navigate the complex regulatory landscape with confidence. Our infrastructure is built with rigorous compliance checks embedded at every layer.
                        </p>
                        <Link
                            to="/compliance"
                            className="text-primary dark:text-blue-300 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                        >
                            View our compliance framework <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {items.map((item) => (
                            <div
                                key={item.title}
                                className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl border-l-4 border-primary dark:border-blue-500"
                            >
                                <h3 className="text-lg font-bold text-primary dark:text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
