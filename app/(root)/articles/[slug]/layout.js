import { getDataBySlug } from "@/api/services/homeService";

// export async function generateMetadata({ params }) {
//   const slug = params.slug;
//   const article = await getDataBySlug({ slug });
//   console.log(article, "data from slug page ");

//   if (!article) {
//     return {
//       title: "Article Not Found",
//       description: "This article does not exist.",
//     };
//   }

//   const {
//     Title: title = "Ground Connect",
//     Description: description = "",
//     Tags = "",
//     FileUrlUpload: image = "/default-image.jpg",
//     PostAuthorsList = [],
//     CreatedDate: publishedAt = new Date().toISOString(),
//     CategoryId,
//     CategoryLanguage,
//     Slug: articleSlug,
//   } = article;

//   const keywords = Tags ? Tags.split(",").map((tag) => tag.trim()) : [];

//   const authorObj = PostAuthorsList[0] || {};
//   const author = authorObj.Name || "Ground Connect";
//   const authorSlug = authorObj.Slug || "ground-connect";
//   const authorTwitter = authorObj.Twitter || "GroundConnect";

//   const url = `https://www.groundconnect.in/articles/${articleSlug}`;
//   const authorProfile = `https://www.groundconnect.in/authors/${authorSlug}`;

//   return {
//     title,
//     description,
//     keywords,
//     authors: [{ name: author }],
//     openGraph: {
//       type: "article",
//       locale: "en_US",
//       siteName: "Ground Connect",
//       url,
//       title,
//       description,
//       publishedTime: publishedAt,
//       authors: [authorProfile],
//       section: `Category-${CategoryId || "General"}`,
//       tags: keywords,
//       images: [
//         {
//           url: image,
//           width: 750,
//           height: 422,
//           alt: title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       site: "@RuralVoice",
//       creator: `@${authorTwitter}`,
//       title,
//       description,
//       images: [image],
//     },
//     metadataBase: new URL("https://www.groundconnect.in"),
//     alternates: {
//       canonical: url,
//     },
//     icons: {
//       shortcut: image || "/fav.png",
//     },
//     other: {
//       "og:image:type": "image/jpeg",
//       "og:image:width": "750",
//       "og:image:height": "422",
//       "article:published_time": publishedAt,
//       "article:author": authorProfile,
//       "article:section": `Category-${CategoryId}`,
//       "article:tag": keywords.join(", "),
//       "article:language": `Language-${CategoryLanguage || "1"}`,
//     },
//   };
// }

export default function SlugLayout({ children }) {
  return <div className="main_width py-6">{children}</div>;
}
