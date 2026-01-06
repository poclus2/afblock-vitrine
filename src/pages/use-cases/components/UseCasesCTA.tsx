export default function UseCasesCTA() {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl">
                    Ready to modernize your financial stack?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-grey dark:text-gray-400">
                    Join forward-thinking companies using Afblock to move money faster, cheaper, and more securely.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a href="https://afblock-business.dartsia.app/signup" className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/20 transition hover:bg-[#0a2560] hover:-translate-y-0.5">
                        Start Building
                    </a>
                    <a href="/company#contact" className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark px-6 text-base font-bold text-neutral-dark dark:text-white transition hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300">
                        Talk to Sales
                    </a>
                </div>
            </div>
        </section>
    );
}
