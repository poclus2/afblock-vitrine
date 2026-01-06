import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../../../services/api';

interface BlogGridProps {
    posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    // Get unique categories (handle cases where category might be undefined, though mapped in api.ts)
    const categories = ['All', ...new Set(posts.map(post => post.category || 'General').filter(Boolean))];

    // Filter posts
    const filteredPosts = selectedCategory === 'All'
        ? posts
        : posts.filter(post => (post.category || 'General') === selectedCategory);

    return (
        <section className="py-16 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Filters - Only show if there are posts */}
                {posts.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 mb-12 overflow-x-auto pb-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category!)}
                                className={`px-5 py-2 rounded-full text-sm font-medium shadow-sm transition-all whitespace-nowrap ${selectedCategory === category
                                    ? 'bg-primary text-white shadow-md'
                                    : 'bg-white dark:bg-surface-dark text-neutral-grey dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-accent hover:text-primary dark:hover:text-white'
                                    }`}
                            >
                                {category === 'All' ? 'All Posts' : category}
                            </button>
                        ))}
                    </div>
                )}

                {/* Grid */}
                {posts.length === 0 ? (
                    <div className="text-center py-20 text-gray-500">
                        No posts found.
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <article
                                key={post.id}
                                className="group flex flex-col bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                            >
                                <Link to={`/blog/${post.slug}`} className="block h-48 overflow-hidden relative">
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
                                </Link>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="text-xs font-medium text-neutral-grey dark:text-gray-400 mb-3">{post.date}</div>
                                    <Link to={`/blog/${post.slug}`} className="block">
                                        <h3 className="text-xl font-bold text-primary dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {post.title}
                                        </h3>
                                    </Link>
                                    <p className="text-neutral-grey dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                                        <Link to={`/blog/${post.slug}`} className="text-sm font-medium text-primary dark:text-white group-hover:underline decoration-accent underline-offset-4 decoration-2">
                                            Read more
                                        </Link>
                                        <span className="material-symbols-outlined text-gray-400 text-sm group-hover:translate-x-1 transition-transform">
                                            arrow_forward
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {/* Pagination (Static for now as 6 posts fit on one page) */}
                {filteredPosts.length > 9 && (
                    <div className="mt-16 flex justify-center">
                        <nav aria-label="Pagination" className="flex items-center space-x-2">
                            <button className="px-4 py-2 text-sm font-medium text-gray-500 bg-white dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                Previous
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-white bg-primary border border-primary rounded-lg">
                                1
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-neutral-dark dark:text-gray-300 bg-white dark:bg-surface-dark border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                Next
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </section>
    );
}
