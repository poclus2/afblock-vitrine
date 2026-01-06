export default function CTA() {
    return (
        <section className="py-24 bg-white dark:bg-background-dark">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white mb-8">
                    Ready to explore stablecoin infrastructure for your business?
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#"
                        className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl font-semibold text-center hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Book a demo
                    </a>
                    <a
                        href="https://afblock-business.dartsia.app/signup"
                        className="w-full sm:w-auto border-2 border-primary dark:border-blue-400 text-primary dark:text-blue-300 px-8 py-4 rounded-xl font-semibold text-center hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                    >
                        Open account
                    </a>
                </div>
            </div>
        </section>
    );
}
