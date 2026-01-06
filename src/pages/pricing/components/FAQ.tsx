export default function FAQ() {
    const faqs = [
        {
            question: 'Is there a minimum deposit required?',
            answer: 'There is no minimum balance required to open or maintain an Afblock account. However, certain transactions or services may require minimum amounts depending on the payment rail, currency, or partner institution involved.'
        },
        {
            question: 'How do you calculate FX spreads?',
            answer: 'FX spreads are calculated dynamically based on market rates, liquidity conditions, transaction size, and currency corridor. Higher volumes benefit from tighter spreads, and enterprise clients may access custom pricing.'
        },
        {
            question: 'Are there any hidden or monthly fees?',
            answer: 'No. Afblock does not charge monthly subscription or account maintenance fees. You only pay transaction-related fees, which are transparently disclosed before execution.'
        },
        {
            question: 'Can I issue cards for my employees?',
            answer: 'Yes. Afblock supports both virtual and physical corporate cards for employee expenses. Spending limits, permissions, and card controls can be configured directly from the dashboard. But this feature is currently unavailable.'
        },
        {
            question: 'Which jurisdictions are supported?',
            answer: 'Afblock currently supports businesses incorporated in select jurisdictions, including parts of the EU, UK, Switzerland, Singapore, and certain US states. Availability depends on regulatory requirements and risk assessments. Please contact our compliance team for confirmation.'
        },
    ];

    return (
        <section className="py-20 bg-white dark:bg-surface-dark">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-primary dark:text-white mb-10 text-center">Frequently asked questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.question}
                            className="bg-background-light dark:bg-background-dark rounded-xl p-6 transition-colors"
                        >
                            <div className="flex justify-between items-center w-full mb-2">
                                <h3 className="font-medium text-primary dark:text-white">{faq.question}</h3>
                            </div>
                            <p className="text-sm text-neutral-grey dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
