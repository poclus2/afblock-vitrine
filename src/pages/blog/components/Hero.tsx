export default function Hero() {
    return (
        <section className="relative w-full py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-background-light dark:bg-background-dark z-0">
                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                    style={{
                        backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')",
                    }}
                ></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-300 text-xs font-semibold tracking-wide uppercase mb-6 border border-blue-100 dark:border-blue-800">
                    Insights & Updates
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary dark:text-white mb-6">
                    Navigating the Future of <br className="hidden md:block" />{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-white">
                        B2B Finance
                    </span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-grey dark:text-gray-400 leading-relaxed">
                    Expert perspectives on treasury management, stablecoin infrastructure, and the evolving landscape of global payments.
                </p>
            </div>
        </section>
    );
}
