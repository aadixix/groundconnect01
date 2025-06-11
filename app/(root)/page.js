import MainBanner from "../components/banner/MainBanner";
import Cards from "../components/CardSlide/Cards";
import { fetchHomeData } from "@/api/services/homeService";

export default async function Home() {
  const data = await fetchHomeData();

  const featuredPosts = data.res.FeaturedPosts || [];
  const filteredFeaturedPosts = featuredPosts.filter(
    (post) => post.IsFeatures === true
  );
  const firstFivePosts = filteredFeaturedPosts.slice(0, 5);

  const categoryPost = data.res.Categories || [];
  const categoryPostFilter = categoryPost.slice(0, 7);

  return (
    <>
      <MainBanner data={firstFivePosts} mainBanner={filteredFeaturedPosts} />
      <Cards data={categoryPostFilter} />
    </>
  );
}
