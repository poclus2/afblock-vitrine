export default function Governance() {
    return (
        <section className="py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-primary rounded-2xl p-8 md:p-16 text-white overflow-hidden relative">
                    <div className="relative z-10 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Governance & Responsibility</h2>
                        <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
                            We operate with the rigor of a traditional financial institution and the innovation of a tech company. Our governance framework ensures accountability, ethical conduct, and strict adherence to global financial regulations.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-medium">
                                Built with security and compliance best practices. Infrastructure powered by regulated partner
                            </div>
                            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-medium">
                                GDPR Ready
                            </div>
                            <div className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-medium">
                                ISO 27001 Certified
                            </div>
                        </div>
                    </div>
                    {/* Decor */}
                    <div className="absolute right-0 bottom-0 opacity-10 translate-y-1/4 translate-x-1/4">
                        <span className="material-symbols-outlined text-[400px]">gavel</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
