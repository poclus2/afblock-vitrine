import { Link } from 'react-router-dom';
import type { BlogPost } from '../../../services/api';

interface FeaturedPostProps {
    post?: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
    if (!post) {
        return null;
    }

    return (
        <section className="py-12 bg-white dark:bg-surface-dark border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to={`/blog/${post.slug}`} className="relative group cursor-pointer block">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="relative h-64 lg:h-96 w-full rounded-2xl overflow-hidden shadow-lg">
                            <img
                                alt={post.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src={post.image}
                            />
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors"></div>
                        </div>
                        <div className="flex flex-col justify-center space-y-6">
                            <div className="flex items-center space-x-3">
                                <span className="px-3 py-1 text-xs font-medium bg-accent/20 text-yellow-700 dark:text-yellow-400 rounded-full border border-accent/20">
                                    Featured
                                </span>
                                <span className="text-sm text-neutral-grey dark:text-gray-400">{post.date}</span>
                            </div>
                            <h2 className="text-3xl font-bold text-primary dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                                {post.title}
                            </h2>
                            <p className="text-lg text-neutral-grey dark:text-gray-400 line-clamp-3">
                                {post.excerpt}
                            </p>
                            <div className="pt-2">
                                <span className="inline-flex items-center text-primary dark:text-white font-semibold group-hover:translate-x-1 transition-transform">
                                    Read article <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}
