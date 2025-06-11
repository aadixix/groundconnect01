import { fetchHomeData, getDataBySlug } from "@/api/services/homeService";
import ArticleDetail from "../../../components/ArticleDetail/ArticleDetail";

export default async function SlugPage({ params }) {
  const { slug } = await params;

  const rs = await getDataBySlug({ slug });

  if (!rs || rs.rs !== 1 || !rs.rc || rs.rc.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-gray-800">Article Not Found</h1>
        <p className="text-gray-600 mt-2">
          The article you are looking for does not exist.
        </p>
      </div>
    );
  }

  const articleData = rs.rc[0];

  const transformedData = {
    ...articleData,
    Content: articleData.MainContent,
    CreatedDate: articleData.CreatedDate || articleData.UpdatedDate,
  };

  let bannerGridData = null;
  let relatedPosts = [];

  try {
    const homeData = await fetchHomeData();

    if (homeData && homeData.res) {
      let allFeaturedPosts = [];
      try {
        allFeaturedPosts = homeData.res.FeaturedPosts;
      } catch (error) {
        console.log("Error accessing FeaturedPosts:", error);
      }

      if (allFeaturedPosts && Array.isArray(allFeaturedPosts)) {
        const filteredFeaturedPosts = allFeaturedPosts.filter(
          (post) => post && post.IsFeatures === true
        );

        bannerGridData = {
          res: {
            FeaturedPosts: filteredFeaturedPosts.slice(0, 5),
          },
        };

        const sameCategoryPosts = allFeaturedPosts.filter(
          (post) =>
            post &&
            post.Id !== articleData.Id &&
            post.CategoryId === articleData.CategoryId &&
            post.FileUrlUpload
        );

        if (sameCategoryPosts.length >= 4) {
          relatedPosts = sameCategoryPosts.slice(0, 4);
        } else {
          const otherPosts = allFeaturedPosts.filter(
            (post) =>
              post &&
              post.Id !== articleData.Id &&
              post.CategoryId !== articleData.CategoryId &&
              post.FileUrlUpload &&
              !sameCategoryPosts.some((samePost) => samePost.Id === post.Id)
          );

          relatedPosts = [...sameCategoryPosts, ...otherPosts].slice(0, 4);
        }

        if (relatedPosts.length < 4) {
          const anyAvailablePosts = allFeaturedPosts.filter(
            (post) =>
              post &&
              post.Id !== articleData.Id &&
              post.FileUrlUpload &&
              !relatedPosts.some((existingPost) => existingPost.Id === post.Id)
          );

          relatedPosts = [...relatedPosts, ...anyAvailablePosts].slice(0, 4);
        }
      } else {
        console.log("FeaturedPosts is not an array or is empty");
      }
    } else {
      console.log("homeData structure issue");
    }
    if (!bannerGridData) {
      bannerGridData = {
        res: {
          FeaturedPosts: [],
        },
      };
    }
  } catch (error) {
    console.error("Error fetching home data:", error);
    bannerGridData = {
      res: {
        FeaturedPosts: [],
      },
    };
    relatedPosts = [];
  }

  return (
    <div className="py-6">
      <ArticleDetail
        data={transformedData}
        bannerGridData={bannerGridData}
        relatedPosts={relatedPosts}
      />
    </div>
  );
}
