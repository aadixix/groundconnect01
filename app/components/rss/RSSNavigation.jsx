import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";

export default function RSSNavigation({ categories, currentSlug }) {
  return (
    <div className="mb-8">
      <nav className="flex items-center space-x-4 mb-6">
        <Link
          href="/rss"
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <ChevronLeftIcon className="h-4 w-4 mr-1" />
          सभी श्रेणियाँ
        </Link>
      </nav>

      {categories && categories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/rss/${encodeURIComponent(category.slug)}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category.slug === currentSlug
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
