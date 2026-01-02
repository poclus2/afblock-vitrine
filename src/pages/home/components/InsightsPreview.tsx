import { Link } from 'react-router-dom';

export default function InsightsPreview() {
    const posts = [
        {
            title: 'The Future of B2B Cross-Border Settlements',
            excerpt: 'Why stablecoins are becoming the preferred settlement layer for international trade.',
            date: 'October 24, 2026',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeQcyXbbn1cxayBqYpJkQIxUokdkOu2-ly1Bc2WqZftvu7EQmLOAVT37sXuAMHw54d6aEKh72vqaHNZIMiOuZ-EJELvnP5LFrS3siaM4vWUyrZhgZkzOVK8ZiWLen1NKY9f_CMJEbh3b7NiOsToAdtTI4EcCAdJSpBdtstOsazG5viuaX0HJiXqjt0cAIpK9gGR22gC2n9ZQqsQSTVz1LATGaJN7a6tUGl7NGnz7DvE1WyC7h0K38fTaDmB_oq-MMdtk1NDyrOlvA0',
        },
        {
            title: 'Understanding KYB Requirements in Web3',
            excerpt: 'A comprehensive guide to Know Your Business regulations for fintech companies.',
            date: 'November 02, 2026',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBviklIrb6qDFCNvDROtyzA0kp2GgKQtir2YqOj5uEkcXZNCydCXDfQFeeL1i1tqMuWEtL-VxmPxWlafRA_NI1AyZlUSlP-ybTHZ2PnrW5m_VH2GQekl7E_RF3ilEBhi-FftdrD3K425SdIXwX_S7VZ9cJAiblfwpTqAe4hhI3ExwOc1y5o70oVHSeIvBV7wFyigUcweRXG5HV8b_GDxlMN26cfns20Ql91mcTzpX8Kn7-iuJj3L6_uP3UNscYIGF_GIcJhpnOsgN4n',
        },
        {
            title: 'Optimizing Treasury Management with DeFi',
            excerpt: 'Strategies for businesses to earn yield on idle capital securely.',
            date: 'November 15, 2026',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5HAhVEXhqhaAjNhdQNc-B3xk3f5zFl7FSA4mWBXs_Y64hydxa7i9KfUw822555Yzm2JUo_sBHXM87JJdaf_xtEsLjFAes8zsBq-fAqfHsYVmtVMGzE8VnF0igdG9RIg5VsEIVDF7TMLC6zQgvJGeg3KfQgQpscNPANQubhWnb69bYNgZL7ReAirym0d5WO56rr26ekGdrFtvABLQBH3-zZ3kN3gaN4WlEBhpD2TcNgqxEew6mj04x3SP8mpKrKiyDitX8R997dQD4',
        },
    ];

    return (
        <section className="py-24 bg-background-light dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-primary dark:text-white mb-12 text-center">Latest Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link key={post.title} to="/blog/post-1" className="group cursor-pointer">
                            <div className="h-48 bg-gray-200 dark:bg-slate-700 rounded-2xl mb-6 overflow-hidden relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">{post.date}</div>
                            <h3 className="text-xl font-bold text-primary dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                                {post.excerpt}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
