import { Link } from 'react-router-dom';
import heroImage from '../../../assets/home-hero.jpg';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-background-light dark:bg-background-dark py-8 px-4 sm:px-6 lg:px-8">
            {/* Dark Card Container */}
            <div className="max-w-7xl mx-auto relative z-10 bg-[#0f172a] rounded-[2.5rem] p-8 md:p-12 lg:p-20 overflow-hidden shadow-2xl">

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

                    {/* Left Column: Text */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
                            Connecting businesses to the global economy through{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                                stablecoins
                            </span>
                        </h1>
                        <p className="text-lg lg:text-xl text-blue-100/80 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Seamlessly collect fiat, convert to stablecoins, manage treasury flows, and execute off-ramp payouts with built-in compliance and auditability.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                            <a
                                href="https://afblock-business.dartsia.app/signup"
                                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-center hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-600/25 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                            >
                                Open account
                                <span className="material-icons text-sm">arrow_forward</span>
                            </a>
                            <Link
                                to="/demo"
                                className="w-full sm:w-auto text-white font-semibold text-center hover:text-blue-300 transition-all flex items-center justify-center gap-2 group"
                            >
                                Book a demo
                                <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">chevron_right</span>
                            </Link>
                        </div>
                        <p className="mt-8 text-xs text-blue-200/40 max-w-lg mx-auto lg:mx-0">
                            Afblock is a financial technology company, not a bank. Banking services provided by our partners.
                        </p>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative w-full max-w-lg aspect-square lg:aspect-auto rounded-full lg:rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm p-4 ring-1 ring-white/10">
                            <img
                                src={heroImage}
                                alt="Afblock Platform"
                                className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
