import CategoryCard from "../CardSlide/CategoryCard";

const CategoryPostGrid = ({ posts, title }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        {title && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          </div>
        )}

        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="text-gray-500 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            No Posts Found
          </h3>
          <p className="text-gray-500 max-w-md">
            No posts have been published in this category yet. Please check back later.
          </p>
        </div>
      </div>
    );
  }

  const displayPosts = Array.isArray(posts) ? posts : [];

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="text-2xl font-bold border-l-4 border-green-700 pl-3 mb-2">
        {title}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayPosts.map((post, index) => (
          <CategoryCard key={post.id || index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPostGrid;
