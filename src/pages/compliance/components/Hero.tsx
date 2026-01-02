export default function Hero() {
    return (
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-primary text-white">
            <div className="absolute top-0 right-0 w-1/2 h-full hero-pattern"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent rounded-full blur-[128px] opacity-20"></div>
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-400 rounded-full blur-[128px] opacity-20"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-800/50 border border-blue-700 text-xs font-semibold tracking-wider mb-6 text-blue-200 uppercase">
                    Compliance & Trust
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-4xl">
                    Uncompromising Compliance for <span className="text-accent">Global Finance</span>
                </h1>
                <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed mb-10">
                    Afblock operates at the intersection of traditional banking standards and blockchain transparency. We ensure every transaction is secure, audited, and compliant.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <a
                        href="#philosophy"
                        className="inline-flex justify-center items-center px-6 py-3.5 border border-transparent text-base font-medium rounded-lg text-primary bg-white hover:bg-gray-50 md:text-lg transition-all shadow-sm"
                    >
                        Read Our Framework
                    </a>
                    <button className="inline-flex justify-center items-center px-6 py-3.5 border border-white/20 text-base font-medium rounded-lg text-white hover:bg-white/10 md:text-lg transition-all backdrop-blur-sm">
                        Contact Compliance Team
                    </button>
                </div>
            </div>
        </section>
    );
}
