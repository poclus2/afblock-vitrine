
const API_BASE_URL = 'https://api.afblock.dartsia.app';

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    content: string;
    summary: string;
    cover_image_url: string;
    author_name: string;
    status: string;
    published_at: string;
    created_at: string;
    updated_at: string;
    // Client-side helper properties that might be needed or mapped
    category?: string;
    date?: string; // formatted date
    image?: string; // alias for cover_image_url
    excerpt?: string; // alias for summary
}

export const blogApi = {
    getAllPosts: async (): Promise<BlogPost[]> => {
        try {
            const response = await fetch(`${API_BASE_URL}/blog/posts`);
            if (!response.ok) {
                throw new Error('Failed to fetch blog posts');
            }
            const data = await response.json();
            return data.map((post: BlogPost) => ({
                ...post,
                // Map backend fields to frontend expected fields for compatibility
                category: 'Company News', // Default category since backend doesn't have it yet
                date: new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                }),
                image: post.cover_image_url || 'https://via.placeholder.com/800x400?text=No+Image',
                excerpt: post.summary || post.content.substring(0, 150) + '...'
            }));
        } catch (error) {
            console.error('Error fetching blog posts:', error);
            return [];
        }
    },

    getPostBySlug: async (slug: string): Promise<BlogPost | null> => {
        try {
            const response = await fetch(`${API_BASE_URL}/blog/posts/${slug}`);
            if (!response.ok) {
                if (response.status === 404) return null;
                throw new Error('Failed to fetch blog post');
            }
            const post = await response.json();
            return {
                ...post,
                category: 'Company News',
                date: new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                }),
                image: post.cover_image_url || 'https://via.placeholder.com/800x400?text=No+Image',
                excerpt: post.summary || post.content.substring(0, 150) + '...'
            };
        } catch (error) {
            console.error('Error fetching blog post:', error);
            return null;
        }
    }
};

export interface DemoRequestData {
    enterprise_name: string;
    country: string;
    use_case: string;
    business_email: string;
    phone_number: string;
    transaction_volume: string;
}

export const companyApi = {
    sendDemoRequest: async (data: DemoRequestData): Promise<boolean> => {
        try {
            const response = await fetch(`${API_BASE_URL}/company/demo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Failed to submit demo request');
            }
            return true;
        } catch (error) {
            console.error('Error submitting demo request:', error);
            throw error;
        }
    }
};

