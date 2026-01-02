export default function FeaturedPost() {
    return (
        <section className="py-12 bg-white dark:bg-surface-dark border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative group cursor-pointer">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="relative h-64 lg:h-96 w-full rounded-2xl overflow-hidden shadow-lg">
                            <img
                                alt="Abstract data visualization of financial networks"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm8TNHn-7zeAAOzklZZ_pqtofp0E0Cn8GD5SWK7WdV5P6kuPDzrlkhDcHSvS3i8aLE8rE2HfzqDshKF0sitHYrW8kuSTnqNXcrKPTI-Ulx0aNyoBHCgL3BLJy0hity2bOBsPPqEhsUOvvR5WXgP4jpW_y9dBEGG5YuZe6kYgpJ2stckwjdEF0xU4Q4zAO_Jb_awzy1k8M2dbgTAAWw-iyxpTDcWw0vtCI7UtBZxomlS5CTC4FULp38anpmJ-2BnlPvPfPgR5CjH0TW"
                            />
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors"></div>
                        </div>
                        <div className="flex flex-col justify-center space-y-6">
                            <div className="flex items-center space-x-3">
                                <span className="px-3 py-1 text-xs font-medium bg-accent/20 text-yellow-700 dark:text-yellow-400 rounded-full border border-accent/20">
                                    Featured
                                </span>
                                <span className="text-sm text-neutral-grey dark:text-gray-400">Oct 24, 2023</span>
                            </div>
                            <h2 className="text-3xl font-bold text-primary dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                                Bridging the Gap: How Institutional Defi is Transforming Corporate Treasury
                            </h2>
                            <p className="text-lg text-neutral-grey dark:text-gray-400 line-clamp-3">
                                Traditional banking rails are slow and costly. Discover how smart contracts and stablecoins are enabling real-time
                                liquidity management for global enterprises without compromising compliance.
                            </p>
                            <div className="pt-2">
                                <span className="inline-flex items-center text-primary dark:text-white font-semibold group-hover:translate-x-1 transition-transform">
                                    Read article <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
