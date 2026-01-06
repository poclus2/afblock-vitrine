export default function Contact() {
    return (
        <section id="contact" className="py-20 lg:py-24 bg-white dark:bg-surface-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-primary dark:text-white text-3xl md:text-4xl font-bold tracking-tight mb-6">
                            Let's start a conversation
                        </h2>
                        <p className="text-neutral-grey dark:text-gray-400 text-lg mb-10 leading-relaxed">
                            Interested in modernizing your financial infrastructure? Our team is ready to help you navigate the future of B2B payments.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary dark:text-accent">
                                    <span className="material-symbols-outlined text-xl">location_on</span>
                                </div>
                                <div>
                                    <h4 className="text-primary dark:text-white font-bold">Headquarters</h4>
                                    <p className="text-neutral-grey dark:text-gray-400">Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary dark:text-accent">
                                    <span className="material-symbols-outlined text-xl">mail</span>
                                </div>
                                <div>
                                    <h4 className="text-primary dark:text-white font-bold">Email Us</h4>
                                    <p className="text-neutral-grey dark:text-gray-400">contact@afblock.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Form */}
                    <div className="bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-neutral-dark dark:text-gray-300" htmlFor="first-name">
                                        First Name
                                    </label>
                                    <input
                                        className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark px-4 py-3 focus:border-primary focus:ring-primary dark:text-white outline-none transition-all"
                                        id="first-name"
                                        placeholder="Jane"
                                        type="text"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-neutral-dark dark:text-gray-300" htmlFor="last-name">
                                        Last Name
                                    </label>
                                    <input
                                        className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark px-4 py-3 focus:border-primary focus:ring-primary dark:text-white outline-none transition-all"
                                        id="last-name"
                                        placeholder="Doe"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-neutral-dark dark:text-gray-300" htmlFor="email">
                                    Work Email
                                </label>
                                <input
                                    className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark px-4 py-3 focus:border-primary focus:ring-primary dark:text-white outline-none transition-all"
                                    id="email"
                                    placeholder="jane@company.com"
                                    type="email"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-neutral-dark dark:text-gray-300" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark px-4 py-3 focus:border-primary focus:ring-primary dark:text-white outline-none transition-all"
                                    id="message"
                                    placeholder="How can we help you?"
                                    rows={4}
                                ></textarea>
                            </div>
                            <button
                                className="mt-2 w-full rounded-lg bg-primary py-3 text-white font-bold hover:bg-[#0b2d63] transition-colors shadow-sm"
                                type="submit"
                            >
                                Send Message
                            </button>
                            <p className="text-xs text-center text-neutral-grey dark:text-gray-500 mt-4">
                                By submitting this form, you agree to our <a href="#" className="underline hover:text-primary dark:hover:text-white">Privacy Policy</a>.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
