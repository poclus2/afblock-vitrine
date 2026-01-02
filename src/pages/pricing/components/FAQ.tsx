export default function FAQ() {
    const faqs = [
        { question: 'Is there a minimum deposit required?' },
        { question: 'How do you calculate FX spreads?' },
        { question: 'Can I issue cards for my employees?' },
        { question: 'Which jurisdictions are supported?' },
    ];

    return (
        <section className="py-20 bg-white dark:bg-surface-dark">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-primary dark:text-white mb-10 text-center">Frequently asked questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.question}
                            className="bg-background-light dark:bg-background-dark rounded-xl p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <div className="flex justify-between items-center w-full">
                                <h3 className="font-medium text-primary dark:text-white">{faq.question}</h3>
                                <span className="material-symbols-outlined text-neutral-grey">add</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
