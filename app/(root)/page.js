import MainBanner from "../components/banner/MainBanner";
import Cards from "../components/CardSlide/Cards";
import { fetchHomeData } from "@/api/services/homeService";

export async function generateMetadata() {
  const WEB_URL = process.env.WEB_URL;

  const data = await fetchHomeData();
  const featuredMetaPosts = data.res.FeaturedPosts || [];
  const filteredMetaFeaturedPosts = featuredMetaPosts.filter(
    (post) => post.IsFeatures === true
  );
  const firstMetaPost = filteredMetaFeaturedPosts.slice(0, 1);
  const author = firstMetaPost?.PostAuthorsList?.[0];
  const creatorHandle = author?.UserName?.startsWith("@")
    ? author.UserName
    : `@${author?.UserName?.split("@")[0] || "GroundConnect"}`;

  return {
    title: firstMetaPost.Title,
    description: firstMetaPost.Description,
    keywords: firstMetaPost.Keywords?.split(",") || [],
    openGraph: {
      type: "article",
      url: `${WEB_URL}/article/${firstMetaPost.Slug}`,
      title: firstMetaPost.Title,
      description: firstMetaPost.Description,
      siteName: "Ground Connect",
      images: [
        {
          url:
            firstMetaPost.FileUrlUpload || `${WEB_URL}/logo.png` || "/logo.png",
          width: 750,
          height: 422,
          alt: firstMetaPost.Title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: firstMetaPost.Title,
      description: firstMetaPost.Description,
      images: [
        firstMetaPost.FileUrlUpload || `${WEB_URL}/logo.png` || "/logo.png",
      ],
      site: "@GroundConnect",
      creator: creatorHandle,
    },
    other: {
      canonical: `${WEB_URL}/article/${firstMetaPost.Slug}`,
    },
  };
}

export default async function Home() {
  const data = await fetchHomeData();

  const featuredPosts = data.res.FeaturedPosts || [];
  const filteredFeaturedPosts = featuredPosts.filter(
    (post) => post.IsFeatures === true
  );
  const firstFivePosts = filteredFeaturedPosts.slice(0, 5);
  console.log(firstFivePosts, "data from home page ");

  const categoryPost = data.res.Categories || [];
  const categoryPostFilter = categoryPost.slice(0, 7);

  return (
    <>
      <MainBanner data={firstFivePosts} mainBanner={filteredFeaturedPosts} />
      <Cards data={categoryPostFilter} />
    </>
  );
}
