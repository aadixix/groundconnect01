import { fetchRSSCategories, extractRSSCategories } from '../../api/services/homeService';
import RSSCategoryCard from '../components/rss/RSSCategoryCard';
import RSSHeader from '../components/rss/RSSHeader';

export const metadata = {
    title: 'RSS Feeds - All Categories',
    description: 'List of all RSS feeds - latest information on news, agriculture, environment and other topics',
    keywords: 'RSS feeds, Hindi news, agriculture news, environment',
    openGraph: {
        title: 'RSS Feeds - All Categories',
        description: 'List of all RSS feeds - latest information on news, agriculture, environment and other topics',
        type: 'website',
    },
};

export default async function RSSPage() {
    try {
        const rssData = await fetchRSSCategories();
        const categories = extractRSSCategories(rssData);

        if (!categories || categories.length === 0) {
            return (
                <div className="min-h-screen bg-gray-50 py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <RSSHeader
                            title="RSS FEEDS"
                            subtitle="No RSS categories available"
                        />
                        <div className="text-center py-12">
                            <p className="text-gray-600 text-lg">
                                No RSS feeds are currently available. Please try again later.
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RSSHeader
                        title="RSS Feeds"
                        subtitle={`Latest news and information in ${categories.length} categories`}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                        {categories.map((category, index) => (
                            <RSSCategoryCard
                                key={category.slug}
                                category={category}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error loading RSS categories:', error);

        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RSSHeader
                        title="RSS Feeds"
                        subtitle="Error loading data"
                    />
                    <div className="text-center py-12">
                        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-red-800 mb-2">
                                Error
                            </h3>
                            <p className="text-red-600">
                                There was a problem loading RSS categories. Please refresh the page or try again later.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
