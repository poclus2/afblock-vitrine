import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

export default function BlogPostPage() {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === Number(id));

    if (!post) {
        return (
            <div className="py-32 text-center">
                <h1 className="text-3xl font-bold text-primary dark:text-white mb-4">Post not found</h1>
                <Link to="/blog" className="text-accent hover:underline">Return to Blog</Link>
            </div>
        );
    }

    return (
        <article className="py-20 bg-white dark:bg-background-dark">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/blog" className="inline-flex items-center text-sm text-neutral-grey hover:text-primary dark:text-gray-400 dark:hover:text-white mb-8 transition-colors">
                    <span className="material-symbols-outlined text-sm mr-2">arrow_back</span>
                    Back to Blog
                </Link>

                <div className="mb-8">
                    <span className="px-3 py-1 bg-primary/5 text-primary dark:text-accent dark:bg-primary/20 rounded-full text-xs font-bold uppercase tracking-wide">
                        {post.category}
                    </span>
                    <span className="ml-4 text-sm text-gray-500">{post.date}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white leading-tight mb-8">
                    {post.title}
                </h1>

                <div className="w-full h-96 rounded-2xl overflow-hidden mb-12 shadow-lg">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-8 font-medium">
                        {post.excerpt}
                    </p>
                    <p>
                        [Content placeholder for "{post.title}". The user indicated they will write this article soon.]
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h2>Key Takeaways</h2>
                    <ul>
                        <li>Understanding the shift in treasury infrastructure.</li>
                        <li>How regulatory compliance is built into the protocol level.</li>
                        <li>Strategies for optimizing liquidity with instant settlement.</li>
                    </ul>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </article>
    );
}
