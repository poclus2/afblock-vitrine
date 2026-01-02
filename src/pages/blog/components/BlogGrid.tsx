export default function BlogGrid() {
    const posts = [
        {
            id: 1,
            category: 'Product',
            date: 'September 12, 2023',
            title: 'Launching Multi-Sig Wallets for Enterprise Teams',
            excerpt:
                'Security is paramount. Our new multi-signature wallet infrastructure allows for customizable approval workflows, ensuring no single point of failure.',
            image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAJsK7chXwvB5_cWkn-5fcK6ErEEILP5dekTFYV9Q3Vh1FPB5i8X3-UJdzRa2INhWbOUBc7PV8rtOAB_rDgNXQkcykWUvOioneVJL8Ele52caH8zdmsdPBtMR8hN-DIxKEcHctd5erJAffapUUgRm_kAU0jsGU2ZFC7Tn_cpZcHtsTHY3UuBj98NmXuRPGpaZ2Pc0hHr3ZWv70JwJ6thE4BTDx-0XnrbCj72eUBS_HE2Kcdq8z0-P3MjK7otxhL6vPM2fcNN70nK1Ut',
        },
        {
            id: 2,
            category: 'Compliance',
            date: 'August 28, 2023',
            title: 'The State of Stablecoin Regulation in the EU',
            excerpt:
                'With MiCA implementation around the corner, we break down what B2B platforms need to know to remain compliant while leveraging crypto rails.',
            image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCbt0tgk7RFHKdxx0QVJtuqbu3s8S10Mq-FfEeKkpTnHu8MQ474a7zsGpssGeAtxnDDGqHAogjINg6mDLdB7TkeVtjzHD-IavpHtb4nP6Nc3n5wRJ0aCgVsMX684i6JjvqnZ4vuj9bges2cc7tUQX51OGJk_3srMjULXLbBBHVpfzazqV2BoGUv5vpoSPCjSwWpuUDT2wTXvif7d0x8xBPhvB3JDnCc8ECFuELmADwiXhxmMkzoGuegyPr67KrKkZFGWd9LM1q-zkho',
        },
        {
            id: 3,
            category: 'Engineering',
            date: 'August 15, 2023',
            title: 'Optimizing Gas Fees for High-Volume Payouts',
            excerpt:
                "A technical deep dive into how Afblock's batching engine reduces on-chain costs by up to 40% for our enterprise partners.",
            image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAzB8ayTvnrMkyhN1XcfbwrdjT1mbB5QJcuXLW1Xz_DbffwyDlGu6mfKlFhffnEs-GDQCC3vbsmFOJOO2mhHaccfbvvEsw8FjiL1c7NszuD3lpo1fNcqaM6c0-MuxJ2Hsow1FuxunhBhRLYiMU0oodonBeS3Ic4IdSLnAIV2jdZgJr34dA61ga_tV9LZ8uKjWAIZOf-VQg920xr07-B0KVEg22NBjGsVxInkFE36a9U79BuruS38Fa1kd_6vBFloSOhw1sMqFE98dt1',
        },
        {
            id: 4,
            category: 'Case Study',
            date: 'July 30, 2023',
            title: 'Case Study: Accelerating Cross-Border Settlements',
            excerpt:
                "How a logistics giant reduced vendor payment times from 5 days to 5 minutes using Afblock's stablecoin rails.",
            image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBlk7sY1TByij_LjtdqAzZRqTgazwQx0ZbNAfH-jpa18-ghsb0uzS8J6URMu958no-CzTPLIT-kjcNGqrCd0ZUkV4ndKHBEW8_wb539Oc1kC5WuYJTLxNFbDljOA2djfdshdRVO6pUZEXVzpvTES4bEtHkOP8qinUk-pVloXzdyaPDmoThkfzETEriWFEshavcIQR-JTtG6x61Wiz3ZKWV71SC1Dg_vMRvK6uPWMYAL3oBMriaKH17Fd2Z4VA1uVOxOc0Wyq4iIst-E',
        },
        {
            id: 5,
            category: 'Vision',
            date: 'July 10, 2023',
            title: 'The End of T+2: Why Instant Settlement Matters',
            excerpt:
                'Liquidity trapped in settlement cycles is wasted capital. We explore the economic impact of moving to instant finality in B2B transactions.',
            image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuB4MkA0PXRn_5XOR__pa9qk0pFzsYy3_NN-8OJpsaYPmElry6GsiXKXFnEwf9ZZAetkNGYurTCKeKXP-BTe5PNANBO_EhL6EGUkhj4hbuCSJOWW51cd466pYWuJnGj_Lu3XdBr3lF0S2Ru5AyQ3-dtW1wVckYBjFPxSFxtkhHumS2VDkaXutkV6whlCrTicNIyRv_D17mVWLTf0QrAxxMnNJVYiiz72HSBpxYg1Pdsi_jnaRtN02Cc9R1STjq1N_tY5Y5Dk4h6adC6_',
        },
        {
            id: 6,
            category: 'Market',
            date: 'June 22, 2023',
            title: 'Treasury Diversification Strategies for 2024',
            excerpt:
                'Best practices for modern CFOs looking to incorporate digital assets into their balance sheet strategy while mitigating volatility.',
            image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDV8pLafFgg5CZBVmUOIJjBJABqh-lCB32-j7e2J9uJT0Um65Khgt4COfatIVI11KSdK3D0WhbBfezbbw-2iRLY3i1Ku9y_NS6sWD84OLQGbOZtMBAHuul-HKS8jb5EB32VCZqjEc7B-rI4su9exFJDoZpvvEOCfzGohnzz47JxPW1fqFWWL8QHHUFpvScsUuVh_ORpn5Fgxg2mLMnjVIKe5Jrre22aJpTT2CHzBM-iWjykWUJ8M16LN3oU1dXH-or3nsXo6oUMQ9c0',
        },
    ];

    return (
        <section className="py-16 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-2 mb-12 overflow-x-auto pb-4">
                    <button className="px-5 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-md transition-all">
                        All Posts
                    </button>
                    <button className="px-5 py-2 rounded-full bg-white dark:bg-surface-dark text-neutral-grey dark:text-gray-400 border border-gray-200 dark:border-gray-700 text-sm font-medium hover:border-accent hover:text-primary dark:hover:text-white transition-all">
                        Product Updates
                    </button>
                    <button className="px-5 py-2 rounded-full bg-white dark:bg-surface-dark text-neutral-grey dark:text-gray-400 border border-gray-200 dark:border-gray-700 text-sm font-medium hover:border-accent hover:text-primary dark:hover:text-white transition-all">
                        Compliance
                    </button>
                    <button className="px-5 py-2 rounded-full bg-white dark:bg-surface-dark text-neutral-grey dark:text-gray-400 border border-gray-200 dark:border-gray-700 text-sm font-medium hover:border-accent hover:text-primary dark:hover:text-white transition-all">
                        Engineering
                    </button>
                    <button className="px-5 py-2 rounded-full bg-white dark:bg-surface-dark text-neutral-grey dark:text-gray-400 border border-gray-200 dark:border-gray-700 text-sm font-medium hover:border-accent hover:text-primary dark:hover:text-white transition-all">
                        Case Studies
                    </button>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="group flex flex-col bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    src={post.image}
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-2 py-1 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-semibold text-primary dark:text-white rounded">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="text-xs font-medium text-neutral-grey dark:text-gray-400 mb-3">{post.date}</div>
                                <h3 className="text-xl font-bold text-primary dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-neutral-grey dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                                    <span className="text-sm font-medium text-primary dark:text-white group-hover:underline decoration-accent underline-offset-4 decoration-2">
                                        Read more
                                    </span>
                                    <span className="material-symbols-outlined text-gray-400 text-sm group-hover:translate-x-1 transition-transform">
                                        arrow_forward
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pagination (Static) */}
                <div className="mt-16 flex justify-center">
                    <nav aria-label="Pagination" className="flex items-center space-x-2">
                        <a href="#" className="px-4 py-2 text-sm font-medium text-gray-500 bg-white dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            Previous
                        </a>
                        <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-primary border border-primary rounded-lg">
                            1
                        </a>
                        <a href="#" className="px-4 py-2 text-sm font-medium text-neutral-dark dark:text-gray-300 bg-white dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            2
                        </a>
                        <a href="#" className="px-4 py-2 text-sm font-medium text-neutral-dark dark:text-gray-300 bg-white dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            3
                        </a>
                        <span className="px-2 text-gray-500">...</span>
                        <a href="#" className="px-4 py-2 text-sm font-medium text-neutral-dark dark:text-gray-300 bg-white dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            Next
                        </a>
                    </nav>
                </div>
            </div>
        </section>
    );
}
