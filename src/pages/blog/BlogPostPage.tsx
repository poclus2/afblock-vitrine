import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogApi, type BlogPost } from '../../services/api';

export default function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) return;
            try {
                setLoading(true);
                const fetchedPost = await blogApi.getPostBySlug(slug);
                if (fetchedPost) {
                    setPost(fetchedPost);
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-background-light dark:bg-background-dark">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="py-32 text-center bg-background-light dark:bg-background-dark min-h-screen">
                <h1 className="text-3xl font-bold text-primary dark:text-white mb-4">Post not found</h1>
                <Link to="/blog" className="text-accent hover:underline">Return to Blog</Link>
            </div>
        );
    }

    return (
        <article className="py-20 bg-white dark:bg-background-dark min-h-screen">
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

                {post.image && (
                    <div className="w-full h-96 rounded-2xl overflow-hidden mb-12 shadow-lg">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-8 font-medium">
                        {post.excerpt}
                    </p>

                    {/* Render HTML content from backend */}
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </div>
        </article>
    );
}
