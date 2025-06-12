import {
  getCategoryBySlug,
  getDataBySlug,
} from "../../../api/services/homeService";
import CategoryPostGrid from "../../components/category/CategoryPostGrid";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }) {
  try {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);

    const data = await getCategoryBySlug(decodedSlug);
    console.log(data);

    if (!data || data.rs !== 1 || !data.res?.Categories?.[0]) {
      notFound();
    }

    const category = data.res.Categories[0];
    const posts = category.CategoryPostList || [];

    return (
      <main className="min-h-screen bg-gray-50 py-8">
        <CategoryPostGrid posts={posts} title={category.CategoryName} />
      </main>
    );
  } catch (error) {
    notFound();
  }
}
