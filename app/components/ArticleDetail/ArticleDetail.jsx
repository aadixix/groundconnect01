import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt, FaRegClock, FaArrowLeft } from "react-icons/fa";
import BannerGrid from "../banner/BannerGrid";
import Tags from "./Tags";
import Share from "./Share";
import CardSections from "../../components/CardSlide/CardSections";
import { fetchHomeSettings } from "../../../api/services/homeService";

const ArticleDetail = async ({ data, bannerGridData = null, relatedPosts = [] }) => {
  if (!data) return null;

  // Fetch home settings for dynamic colors
  const homeSettings = await fetchHomeSettings();
  const primaryColor = homeSettings?.PrimaryColor || "#22c55e";
  const secondaryColor = homeSettings?.SecondaryColor || "#16a34a";

  const formatDateTime = (isoString) => {
    if (!isoString) return { date: "Unknown Date", time: "Unknown Time" };

    try {
      const date = new Date(isoString);
      const dateOnly = date.toLocaleDateString("en-GB");
      const timeOnly = date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return { date: dateOnly, time: timeOnly };
    } catch (error) {
      return { date: "Unknown Date", time: "Unknown Time" };
    }
  };

  const { date, time } = formatDateTime(data.CreatedDate || data.UpdatedDate);

  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, "");
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .article-detail-container {
            --primary-color: ${primaryColor};
            --secondary-color: ${secondaryColor};
            --primary-color-20: ${primaryColor}33;
            --primary-color-40: ${primaryColor}66;
            --primary-color-80: ${primaryColor}CC;
          }
          .dynamic-text-primary {
            color: var(--primary-color);
          }
          .dynamic-text-secondary {
            color: var(--secondary-color);
          }
          .dynamic-border-primary {
            border-color: var(--primary-color);
          }
          .dynamic-bg-primary-light {
            background-color: var(--primary-color-20);
          }
          .hover-dynamic-text-primary:hover {
            color: var(--primary-color);
          }
          .hover-dynamic-text-secondary:hover {
            color: var(--secondary-color);
          }
          .hover-dynamic-border-primary:hover {
            border-color: var(--primary-color);
          }
          .group:hover .group-hover-dynamic-border-primary {
            border-color: var(--primary-color);
          }
          .group:hover .group-hover-dynamic-text-primary {
            color: var(--primary-color);
          }
        `
      }} />

      <div className="article-detail-container">
        {/* Back Button */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-black-300 hover-dynamic-text-secondary transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Main Layout Grid */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
          {/* Main Article Content */}
          <div className="min-w-0">
            {/* Article Header */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {data.Title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <FaRegCalendarAlt className="text-gray-600" />
                  <span className="text-gray-700">{date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegClock className="text-gray-600" />
                  <span className="text-gray-700">{time}</span>
                </div>
              </div>

              {/* Author Information */}
              {data.PostAuthorsList && data.PostAuthorsList.length > 0 && (
                <div className="flex items-center gap-4 mb-8">
                  {data.PostAuthorsList.map((author, index) => (
                    <Link
                      key={index}
                      href={`/author/${encodeURIComponent(author.UserName)}`}
                      className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 cursor-pointer group"
                    >
                      <div className="w-12 h-12 rounded-full border-2 border-gray-200 overflow-hidden group-hover-dynamic-border-primary transition-colors duration-200">
                        <img
                          src={author.Photo || "/fav.png"}
                          alt={author.AuthorName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover-dynamic-text-primary transition-colors duration-200">
                          {author.AuthorName}
                        </div>
                        <div className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-200">
                          {author.UserName}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Featured Image or Video */}
            {/* {data.FileUrlUpload && (
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8">
                {isVideo(data.FileUrlUpload) ? (
                  <video
                    src={data.FileUrlUpload}
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={data.FileUrlUpload}
                    alt={data.Title || "Article image"}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                    unoptimized={false}
                  />
                )}

                {data.FileDescription && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <p className="text-sm">{data.FileDescription}</p>
                  </div>
                )}
              </div>
            )} */}

            {/* Featured Image */}
            {data.FileUrlUpload && (
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8">
                <Image
                  src={data.FileUrlUpload}
                  alt={data.Title || "Article image"}
                  fill
                  className="object-cover"
                  priority
                  sizes=" "
                  unoptimized={false}
                />
                {data.FileDescription && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <p className="text-sm">{data.FileDescription}</p>
                  </div>
                )}
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-8">
              {/* Article Description/Summary */}
              {data.Description && (
                <div className="text-xl text-gray-700 leading-relaxed mb-8 p-6 bg-gray-50 rounded-lg border-l-4 dynamic-border-primary">
                  {stripHtml(data.Description)}
                </div>
              )}

              {/* Main Content */}
              {data.MainContent || data.Content ? (
                <div
                  className="article-content text-gray-800 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: data.MainContent || data.Content,
                  }}
                />
              ) : (
                <div className="text-gray-600 italic">
                  Full article content will be displayed here once available.
                </div>
              )}
            </div>

            {/* Tags Component */}
            <Tags keywords={data.Keywords} tags={data.Tags} />

            {/* Share Component */}
            <Share title={data.Title} />
          </div>

          {/* Featured Posts */}
          <div>
            {bannerGridData &&
              bannerGridData.res &&
              bannerGridData.res.FeaturedPosts &&
              bannerGridData.res.FeaturedPosts.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <BannerGrid gridData={bannerGridData.res.FeaturedPosts} />
                </div>
              )}
          </div>
        </div>
        {/* Related Posts Section */}
        {relatedPosts &&
          Array.isArray(relatedPosts) &&
          relatedPosts.length > 0 && (
            <div className="mt-6 border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Related Articles
              </h2>
              <CardSections cards={relatedPosts} />
            </div>
          )}
      </div>
    </>
  );
};

export default ArticleDetail;
