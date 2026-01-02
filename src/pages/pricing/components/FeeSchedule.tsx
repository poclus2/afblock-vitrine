export default function FeeSchedule() {
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-primary dark:text-white mb-4">Detailed Fee Schedule & Limits</h2>
                    <p className="text-neutral-grey dark:text-gray-400">Clear transparency on all operational costs.</p>
                </div>
                <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700">
                                    <th className="p-6 text-sm font-semibold text-primary dark:text-white w-1/3">Service</th>
                                    <th className="p-6 text-sm font-semibold text-primary dark:text-white w-1/3">Standard</th>
                                    <th className="p-6 text-sm font-semibold text-primary dark:text-white w-1/3">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                <tr>
                                    <td className="p-6 text-sm font-medium text-neutral-dark dark:text-gray-200">Account Opening</td>
                                    <td className="p-6 text-sm text-neutral-grey dark:text-gray-400">Free</td>
                                    <td className="p-6 text-sm text-neutral-grey dark:text-gray-400">Free</td>
                                </tr>
                                <tr>
                                    <td className="p-6 text-sm font-medium text-neutral-dark dark:text-gray-200">Incoming SWIFT</td>
                                    <td className="p-6 text-sm text-neutral-grey dark:text-gray-400">$25 fixed fee</td>
                                    <td className="p-6 text-sm text-neutral-grey dark:text-gray-400">$10 fixed fee</td>
                                </tr>
                                <tr>
                                    <td className="p-6 text-sm font-medium text-neutral-dark dark:text-gray-200">Outgoing SEPA Instant</td>
                                    <td className="p-6 text-sm text-neutral-grey dark:text-gray-400">€0.50</td>
                                    <td className="p-6 text-sm text-neutral-grey dark:text-gray-400">Free</td>
                                </tr>
                                <tr>
                                    <td className="p-6 text-sm font-medium text-neutral-dark dark:text-gray-200">Crypto Liquidation</td>
                                    <td className="p-6 text-sm text-neutral-grey dark:text-gray-400">1% spread</td>
                                    <td className="p-6 text-sm text-accent font-medium">Custom Quote</td>
                                </tr>
                                <tr>
                                    <td className="p-6 text-sm font-medium text-neutral-dark dark:text-gray-200">Physical Card Delivery</td>
                                    <td className="p-6 text-sm text-neutral-grey dark:text-gray-400">$10 / card</td>
                                    <td className="p-6 text-sm text-neutral-grey dark:text-gray-400">Free</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="p-6 bg-gray-50 dark:bg-gray-800/30 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-xs text-neutral-grey dark:text-gray-400">
                            * Enterprise pricing applies to businesses processing &gt;$1M monthly volume.{' '}
                            <a className="text-primary dark:text-accent underline decoration-1 underline-offset-2" href="#">
                                Contact sales
                            </a>{' '}
                            for volume discounts.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
