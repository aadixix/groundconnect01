import { fetchRSSFeed, fetchRSSCategories, extractRSSCategories } from '../../../api/services/homeService';
import RSSFeedItem from '../../components/rss/RSSFeedItem';
import RSSHeader from '../../components/rss/RSSHeader';
import RSSNavigation from '../../components/rss/RSSNavigation';
import { parseRSSContent } from '../../lib/utils/rssUtils';
import Link from 'next/link';

export async function generateMetadata({ params }) {
    const { slug } = params;

    try {
        const rssData = await fetchRSSFeed(slug);
        const categoryName = decodeURIComponent(slug);

        return {
            title: `${categoryName} RSS Feed - Latest Updates`,
            description: `Latest information and news from ${categoryName}`,
            keywords: `${categoryName}, RSS feed, Hindi news, latest updates`,
            openGraph: {
                title: `${categoryName} RSS Feed`,
                description: `Latest information and news from ${categoryName}`,
                type: 'website',
            },
        };
    } catch (error) {
        return {
            title: 'RSS Feed',
            description: 'RSS feed content',
        };
    }
}

export async function generateStaticParams() {
    try {
        const rssData = await fetchRSSCategories();
        const categories = extractRSSCategories(rssData);

        if (!categories || categories.length === 0) {
            console.warn('No RSS categories found, using fallback slugs');
            return [
                { slug: 'general' },
                { slug: 'news' },
                { slug: 'politics' },
                { slug: 'sports' },
                { slug: 'business' }
            ];
        }

        return categories.map((category) => ({
            slug: category.slug,
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [
            { slug: 'general' },
            { slug: 'news' },
            { slug: 'politics' },
            { slug: 'sports' },
            { slug: 'business' }
        ];
    }
}

export default async function RSSFeedPage({ params }) {
    const { slug } = params;

    try {
        let categories = [];
        try {
            const categoriesData = await fetchRSSCategories();
            categories = extractRSSCategories(categoriesData);
        } catch (categoriesError) {
            console.error('Error fetching categories:', categoriesError);
        }

        const currentCategory = categories.find(cat => cat.slug === slug) || {
            name: decodeURIComponent(slug),
            slug: slug,
            rssUrl: `RSS feed for ${decodeURIComponent(slug)}`
        };

        let rssData = null;
        let feedItems = [];

        try {
            rssData = await fetchRSSFeed(slug);
            feedItems = parseRSSContent(rssData);
        } catch (feedError) {
            console.error('Error fetching RSS feed:', feedError);
        }

        if (!feedItems || feedItems.length === 0) {
            return (
                <div className="min-h-screen bg-gray-50 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {categories.length > 0 && (
                            <RSSNavigation categories={categories} currentSlug={slug} />
                        )}

                        <RSSHeader
                            title={currentCategory.name}
                            subtitle="No content available"
                        />

                        <div className="text-center py-12">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                <p className="text-yellow-800">
                                    No content is currently available in this category.
                                </p>
                                <Link
                                    href="/rss"
                                    className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    View All Categories
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Navigation */}
                    {categories.length > 0 && (
                        <RSSNavigation categories={categories} currentSlug={slug} />
                    )}

                    {/* Header */}
                    <RSSHeader
                        title={currentCategory.name}
                        subtitle={`${feedItems.length} articles available`}
                    />

                    {/* RSS URL Display */}
                    {currentCategory.rssUrl && (
                        <div className="mb-8 bg-white rounded-lg shadow-sm p-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">RSS URL:</span>
                                <div className="flex items-center space-x-2">
                                    <code className="bg-gray-100 px-3 py-1 rounded text-sm">
                                        {currentCategory.rssUrl}
                                    </code>
                                    <button
                                        onClick={() => navigator.clipboard.writeText(currentCategory.rssUrl)}
                                        className="text-blue-600 hover:text-blue-800 text-sm"
                                    >
                                        Copy
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Feed Items */}
                    <div className="space-y-6">
                        {feedItems.map((item, index) => (
                            <RSSFeedItem
                                key={item.guid || item.link || index}
                                item={item}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* Load More or Pagination could be added here */}
                    <div className="mt-12 text-center">
                        <Link
                            href="/rss"
                            className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                        >
                            View Other Categories
                        </Link>
                    </div>
                </div>
            </div>
        );

    } catch (error) {
        console.error('Error loading RSS feed:', error);

        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RSSHeader
                        title="RSS Feed"
                        subtitle="Error loading data"
                    />

                    <div className="text-center py-12">
                        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-red-800 mb-2">
                                Error
                            </h3>
                            <p className="text-red-600 mb-4">
                                There was a problem loading the RSS feed.
                            </p>
                            <Link
                                href="/rss"
                                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Go Back
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
