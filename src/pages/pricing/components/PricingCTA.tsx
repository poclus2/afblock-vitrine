export default function PricingCTA() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                }}
            ></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-10 md:mb-0 max-w-xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Open your account in <br />
                        <span className="text-gray-400">10 minutes or less</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Begin your journey with Afblock today. Quick, effortless, and secure. Our streamlined process ensures your treasury is set up and ready to go.
                    </p>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex gap-8 text-white/80 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-accent">percent</span>
                            <span>Competitive FX rates</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-accent">credit_card</span>
                            <span>No card fees</span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="https://afblock-business.dartsia.app/signup" className="bg-primary hover:bg-[#1a4490] text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group">
                            Open account
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </a>
                        <button className="bg-transparent border border-gray-700 hover:border-accent text-white hover:text-accent px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                            Schedule demo
                            <span className="material-symbols-outlined">calendar_today</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
