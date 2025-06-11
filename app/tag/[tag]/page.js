import { getPostsByTag, getAllTags } from "@/api/services/homeService";
import CategoryPostGrid from "../../components/category/CategoryPostGrid";

export async function generateStaticParams() {
  try {
    const data = await getAllTags();

    if (data.rs === 1 && data.rc) {
      return data.rc.map((tagObj) => ({
        tag: encodeURIComponent(tagObj.tag),
      }));
    }
  } catch (error) {
    console.error("Error fetching tags for static params:", error);
  }

  return [];
}

export async function generateMetadata({ params }) {
  const tag = decodeURIComponent(params.tag);

  return {
    title: `Posts tagged with "${tag}"`,
    description: `Browse all posts tagged with ${tag}. Find related articles and stories.`,
    keywords: [tag, "posts", "articles", "news"],
  };
}

export default async function TagPage({ params }) {
  const tag = decodeURIComponent(params.tag);

  try {
    const data = await getPostsByTag(tag);

    if (!data.rc || data.rc.length === 0) {
      return (
        <main className="min-h-screen bg-gray-50">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">No posts found for tag: {tag}</h1>
          </div>
        </main>
      );
    }

    const posts = data.rc;

    return (
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Tag: {tag}</h1>
            <p className="text-gray-600">{posts.length} posts found</p>
          </div>

          <CategoryPostGrid posts={posts} title={null} />
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching posts by tag:", error);

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600">Failed to fetch posts. Please try again later.</p>
        </div>
      </div>
    );
  }
}
