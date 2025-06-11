import CategoryPostGrid from "../category/CategoryPostGrid";
import AuthorHeader from "./AuthorHeader";
import { fetchHomeSettings } from "../../../api/services/homeService";

const AuthorPostsPage = async ({ authorData, posts }) => {
  const homeSettings = await fetchHomeSettings();
  const primaryColor = homeSettings?.PrimaryColor || "#22c55e";
  const secondaryColor = homeSettings?.SecondaryColor || "#16a34a";

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .author-posts-container {
            --primary-color: ${primaryColor};
            --secondary-color: ${secondaryColor};
            --primary-color-20: ${primaryColor}33;
            --primary-color-40: ${primaryColor}66;
            --primary-color-80: ${primaryColor}CC;
          }
          .dynamic-text-primary {
            color: var(--primary-color);
          }
          .dynamic-stroke-primary {
            stroke: var(--primary-color);
          }
        `
      }} />

      <div className="author-posts-container min-h-screen bg-gray-50">
        {/* Author Header */}
        <AuthorHeader authorData={authorData} postsCount={posts?.length || 0} />

        {/* Posts Grid */}
        <div className="container mx-auto px-4 pb-8">
          {posts && posts.length > 0 ? (
            <CategoryPostGrid
              posts={posts}
              title={`All Articles by ${authorData?.AuthorName || "Author"}`}
            />
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">
                <svg
                  className="w-16 h-16 mx-auto dynamic-stroke-primary"
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
                No Articles Found
              </h3>
              <p className="text-gray-500">
                No articles have been published by this author yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthorPostsPage;
