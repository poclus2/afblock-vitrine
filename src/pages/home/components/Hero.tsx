import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-background-off to-blue-50 dark:from-background-dark dark:to-slate-900 pt-20 pb-24 lg:pt-32 lg:pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Text */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl lg:text-6xl font-extrabold text-primary dark:text-white leading-[1.15] mb-8">
                            Connecting businesses to the global economy through{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 dark:from-blue-300 dark:to-white">
                                stablecoins
                            </span>
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-grey dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Seamlessly collect fiat, convert to stablecoins, manage treasury flows, and execute off-ramp payouts with built-in compliance and auditability.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a
                                href="https://afblock-business.dartsia.app/signup"
                                className="w-full sm:w-auto bg-primary text-white border-2 border-primary px-8 py-4 rounded-xl font-semibold text-center hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                            >
                                Open account
                                <span className="material-icons text-sm">arrow_forward</span>
                            </a>
                            <Link
                                to="/demo"
                                className="w-full sm:w-auto bg-white dark:bg-slate-800 text-primary dark:text-white border-2 border-gray-200 dark:border-slate-700 px-8 py-4 rounded-xl font-semibold text-center hover:bg-gray-50 dark:hover:bg-slate-700 transition-all"
                            >
                                Book a demo
                            </Link>
                        </div>
                        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                            Regulated financial technology provider. Not a bank.
                        </p>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                                alt="Platform Dashboard"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
