import Image from "next/image";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { fetchHomeSettings } from "../../../api/services/homeService";

const BannerGrid = async ({ gridData }) => {
  if (!gridData || gridData.length === 0) {
    return null;
  }

  // Fetch home settings for dynamic colors
  const homeSettings = await fetchHomeSettings();
  const primaryColor = homeSettings?.PrimaryColor || "#22c55e";
  const secondaryColor = homeSettings?.SecondaryColor || "#16a34a";

  const postsToShow =
    gridData[0] === null ? gridData.slice(1, 5) : gridData.slice(1, 5);

  const validPosts = postsToShow.filter((post) => post && post.Title);

  if (validPosts.length === 0) {
    return null;
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .banner-grid-container {
            --primary-color: ${primaryColor};
            --secondary-color: ${secondaryColor};
            --primary-color-20: ${primaryColor}33;
            --primary-color-40: ${primaryColor}66;
            --primary-color-80: ${primaryColor}CC;
          }
          .dynamic-border-grid {
            border-color: #d1d5db;
          }
          .dynamic-icon-color-grid {
            color: var(--primary-color);
          }
          .hover-dynamic-text-grid:hover {
            color: var(--secondary-color);
          }
          .dynamic-hover-bg:hover {
            background-color: var(--primary-color-20);
          }
          .dynamic-hover-shadow:hover {
            box-shadow: 0 10px 25px rgba(209, 213, 219, 0.4);
          }
        `
      }} />

      <div className="banner-grid-container">
        <div className="border-b dynamic-border-grid pb-2 mb-4">
          <h4 className="text-[25px] font-medium">Featured Stories</h4>
        </div>
        {validPosts.map((data, index) => {
          const updatedDate = data?.CreatedDate;
          const dateOnly = updatedDate
            ? updatedDate.split("T")[0]
            : "Unknown Date";

          return (
            <Link
              href={`/articles/${data.Slug || ""}`}
              key={index}
              className="block"
            >
              <div className="grid sm:grid-cols-[35%_1fr] mt-4 gap-2 sm:h-[150px] h-[240px] p-2 items-start border rounded-[10px] transition-all duration-300 transform hover:scale-[1.02] dynamic-hover-bg dynamic-hover-shadow dynamic-border-grid">
                <div className="relative w-full sm:h-full h-[130px] rounded-[10px] overflow-hidden">
                  <Image
                    src={data.FileUrlUpload || "/banner/panther.jpg"}
                    alt={data.Title || "Article image"}
                    fill
                    sizes="(max-width: 640px) 100vw, 35vw"
                    className="object-cover border"
                  />
                </div>
                <div className="">
                  <h4 className="font-semibold md:text-[20px] text-[14px] line-clamp-3 hover-dynamic-text-grid transition-colors duration-300">
                    {data.Title}
                  </h4>

                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <FaRegCalendarAlt className="dynamic-icon-color-grid" />
                      <span className="text-sm text-gray-800">{dateOnly}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BannerGrid;
