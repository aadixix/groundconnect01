import { fetchHomeData, getDataBySlug } from "@/api/services/homeService";
import ArticleDetail from "../../../components/ArticleDetail/ArticleDetail";

export async function generateMetadata(input) {
  const params = await input.params;
  const slug = params.slug;
  const WEB_URL = process.env.WEB_URL;
  console.log(slug);
  const { rc: [article] = [] } = await getDataBySlug({ slug });

  if (!article) {
    return {
      title: "Article Not Found",
      description: "This article does not exist.",
    };
  }

  const {
    Title: title = "Ground Connect",
    Description: description = "",
    Tags = "",
    FileUrlUpload: image = "/default-image.jpg",
    PostAuthorsList = [],
    CreatedDate: publishedAt = new Date().toISOString(),
    CategoryId,
    CategoryLanguage,
    Slug: articleSlug,
  } = article;

  const keywords = Tags ? Tags.split(",").map((tag) => tag.trim()) : [];
  const authorObj = PostAuthorsList[0] || {};
  const author = authorObj.Name || "Ground Connect";
  const authorSlug = authorObj.Slug || "ground-connect";
  const authorTwitter = authorObj.Twitter || "GroundConnect";

  const baseURL = WEB_URL;
  const url = `${baseURL}/articles/${articleSlug}`;
  const authorProfile = `${baseURL}/authors/${authorSlug}`;
  const ogImage = image || `${baseURL}/logo.png`;

  return {
    metadataBase: new URL(baseURL),

    title,
    description,
    keywords,
    authors: [{ name: author }],
    alternates: {
      canonical: url,
    },
    icons: {
      icon: "/fav.png",
      shortcut: "/fav.png",
      apple: "/fav.png",
    },

    openGraph: {
      type: "article",
      locale: "en_US",
      siteName: "Ground Connect",
      url,
      title,
      description,
      publishedTime: publishedAt,
      authors: [authorProfile],
      section: `Category-${CategoryId || "General"}`,
      tags: keywords,
      images: [
        {
          url: ogImage,
          width: 1200, // ideal for LinkedIn & FB
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      site: "@GroundConnect",
      creator: `@${authorTwitter}`,
    },

    other: {
      "og:title": title,
      "og:description": description,
      "og:image": ogImage,
      "og:image:type": "image/jpeg",
      "og:image:width": "1200",
      "og:image:height": "630",
      "og:url": url,
      "article:published_time": publishedAt,
      "article:author": authorProfile,
      "article:section": `Category-${CategoryId}`,
      "article:tag": keywords.join(", "),
      "article:language": `Language-${CategoryLanguage || "1"}`,
    },
  };
}

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
