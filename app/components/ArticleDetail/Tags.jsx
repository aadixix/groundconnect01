import React from "react";
import Link from "next/link";

const Tags = ({ keywords, tags }) => {
  return (
    <>
      {/* Keywords as Tags */}
      {keywords && typeof keywords === "string" && keywords.trim() && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {keywords.split(",").map((keyword, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                #{keyword.trim()}
              </span>
            ))}
          </div>
        </div>
      )}

      {tags && Array.isArray(tags) && tags.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Link key={index} href={`/tag/${encodeURIComponent(tag)}`}>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                  #{tag}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Tags as String */}
      {tags && typeof tags === "string" && tags && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.split(",").map((tag, index) => (
              <Link key={index} href={`/tag/${encodeURIComponent(tag)}`}>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                  #{tag}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Tags;
