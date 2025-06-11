import Link from "next/link";
import { formatDistanceToNow } from "../../lib/utils/dateUtils";
import { ExternalLinkIcon, CalendarIcon } from "lucide-react";

export default function RSSFeedItem({ item, index }) {
  return (
    <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 leading-tight">
            {item.title}
          </h2>
        </div>

        {item.description && (
          <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <time dateTime={item.pubDate}>
              {formatDistanceToNow(item.pubDate)}
            </time>
          </div>

          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              पूरा पढ़ें
              <ExternalLinkIcon className="h-4 w-4 ml-1" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
