import Link from "next/link";
import { ExternalLinkIcon, RssIcon } from "lucide-react";

export default function RSSCategoryCard({ category, index }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <RssIcon className="h-6 w-6 text-orange-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">
              {category.name}
            </h3>
          </div>
        </div>

        <div className="space-y-3">
          {/* <Link
            href={`/rss/${encodeURIComponent(category.slug)}`}
            className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Feeds
          </Link> */}

          <a
            href={category.rssUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm"
          >
            <ExternalLinkIcon className="h-4 w-4 mr-1" />
            Raw RSS
          </a>
        </div>
      </div>
    </div>
  );
}
