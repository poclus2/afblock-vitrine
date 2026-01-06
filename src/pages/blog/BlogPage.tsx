import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import FeaturedPost from './components/FeaturedPost';
import BlogGrid from './components/BlogGrid';
import Newsletter from './components/Newsletter';
import { blogApi, type BlogPost } from '../../services/api';

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const fetchedPosts = await blogApi.getAllPosts();
                setPosts(fetchedPosts);
            } catch (error) {
                console.error("Failed to load posts", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    // Use the latest post as featured, and the rest for the grid
    const featuredPost = posts.length > 0 ? posts[0] : undefined;
    const gridPosts = posts.length > 1 ? posts.slice(1) : [];

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-background-light dark:bg-background-dark">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <>
            <Hero />
            {featuredPost && <FeaturedPost post={featuredPost} />}
            {/* Only show Grid if we have more posts, or if we have NO posts (to show empty state) */}
            {(posts.length === 0 || gridPosts.length > 0) && <BlogGrid posts={gridPosts} />}
            <Newsletter />
        </>
    );
}
