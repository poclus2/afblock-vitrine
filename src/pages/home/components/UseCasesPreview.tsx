import { Link } from 'react-router-dom';

export default function UseCasesPreview() {
    const cases = [
        {
            title: 'African Diaspora exporters & global trade',
            description: 'Settle vendor invoices globally without high banking fees or delays.',
            icon: 'public',
            link: '/use-cases#cross-border',
        },
        {
            title: 'Payroll & Contractors',
            description: 'Pay your distributed team in stablecoins or local currency instantly.',
            icon: 'groups',
            link: '/use-cases#payroll',
        },
        {
            title: 'Marketplaces & Platforms',
            description: 'Automate payouts to sellers and creators with programmable flows.',
            icon: 'storefront',
            link: '/use-cases#marketplaces',
        },
    ];

    return (
        <section className="py-24 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-primary dark:text-white mb-2">Designed for every model</h2>
                        <p className="text-gray-600 dark:text-gray-400">Scalable solutions for modern business needs</p>
                    </div>
                    <Link
                        to="/use-cases"
                        className="hidden md:flex items-center text-primary dark:text-blue-300 font-semibold hover:gap-2 transition-all"
                    >
                        View all use cases <span className="material-icons ml-1 text-sm">arrow_forward</span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((item) => (
                        <div
                            key={item.title}
                            className="group relative bg-gray-50 dark:bg-slate-800 rounded-3xl p-8 overflow-hidden hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors duration-300"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-icons text-9xl text-primary">{item.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-primary dark:text-white mb-4 relative z-10">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-8 z-10 relative">
                                {item.description}
                            </p>
                            <Link
                                to={item.link}
                                className="inline-flex items-center text-accent dark:text-yellow-400 font-semibold hover:text-yellow-600 transition-colors relative z-10"
                            >
                                Learn more <span className="material-icons ml-1 text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
