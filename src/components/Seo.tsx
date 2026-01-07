import { Helmet } from 'react-helmet-async';

interface SeoProps {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
}

export default function Seo({
    title,
    description = "Infrastructure for the modern economy. Secure, compliant, and developer-friendly.",
    image = "/og-image.jpg", // Ensure this exists or use a default
    url,
    type = 'website'
}: SeoProps) {
    const siteTitle = "Afblock";
    const fullTitle = `${title} | ${siteTitle}`;
    // Fallback URL if not provided (should be passed from page or generated)
    const currentUrl = url || window.location.href;

    return (
        <Helmet>
            {/* Standard Data */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}
