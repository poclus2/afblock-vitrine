export default function Newsletter() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-4">Stay ahead of the curve</h2>
                <p className="text-neutral-grey dark:text-gray-400 mb-8">
                    Join 10,000+ finance leaders receiving our weekly analysis on B2B payments and blockchain infrastructure.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-surface-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Enter your work email"
                        type="email"
                    />
                    <button
                        className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-blue-900 transition-colors shadow-lg"
                        type="submit"
                    >
                        Subscribe
                    </button>
                </form>
                <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">No spam. Unsubscribe anytime.</p>
            </div>
        </section>
    );
}
