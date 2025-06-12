import Image from "next/image";
import React from "react";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import BannerGrid from "./BannerGrid";
import Link from "next/link";
import NewsletterSubscription from "../NewsletterSubscription";
import { fetchHomeSettings } from "../../../api/services/homeService";

const MainBanner = async ({ data, mainBanner }) => {
  if (!data) return null;

  const homeSettings = await fetchHomeSettings();
  const primaryColor = homeSettings?.PrimaryColor || "#22c55e";
  const secondaryColor = homeSettings?.SecondaryColor || "#16a34a";

  const mainBannerData = mainBanner.slice(0, 1);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .main-banner-container {
            --primary-color: ${primaryColor};
            --secondary-color: ${secondaryColor};
            --primary-color-20: ${primaryColor}33;
            --primary-color-40: ${primaryColor}66;
            --primary-color-80: ${primaryColor}CC;
          }
          .greenBg-dynamic {
            background-color: var(--primary-color);
          }
          .greenColorBg-dynamic {
            background-color: var(--secondary-color);
          }
          .dynamic-border-main {
            border-color: #d1d5db;
          }
          .dynamic-icon-color-main {
            color: var(--primary-color);
          }
          .hover-dynamic-text-main:hover {
            color: var(--secondary-color);
          }
          .dynamic-hover-bg-main:hover {
            background-color: var(--primary-color-20);
          }
          .dynamic-hover-shadow-main:hover {
            box-shadow: 0 10px 25px rgba(209, 213, 219, 0.4);
          }
        `,
        }}
      />

      <div className="main_width py-10 main-banner-container">
        {/* Top Section Heading with Newsletter */}
        <div className="border-b dynamic-border-main pb-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
            <div className="grid grid-cols-[14px_1fr] items-center gap-2">
              <div className="grid grid-cols-2 items-center">
                <div className="greenColorBg-dynamic w-[8px] h-[48px]"></div>
                <div className="greenBg-dynamic w-[8px] h-[48px]"></div>
              </div>
              <h2 className="font-semibold text-[32px]">Top story</h2>
            </div>

            {/* Newsletter Subscription - Compact Version */}
            <div className="lg:w-auto w-full">
              <NewsletterSubscription variant="compact" />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid xl:grid-cols-[68%_1fr] lg:grid-cols-[60%_1fr] xl:gap-6 lg:gap-8 gap-10 mt-4">
          {/* Main Banner Card */}
          {mainBannerData.map((data, index) => {
            const updatedDate = data?.CreatedDate;
            const dateOnly = updatedDate
              ? updatedDate.split("T")[0]
              : "Unknown Date";
            const timeOnly = updatedDate
              ? updatedDate.split("T")[1]?.slice(0, 5)
              : "Unknown Time";
            return (
              <Link
                href={`/articles/${data.Slug || ""}`}
                key={index}
                className="block"
              >
                <div
                  className="border dynamic-border-main rounded-[20px] transition-all duration-300 transform hover:scale-[1.02] dynamic-hover-shadow-main"
                  key={index}
                >
                  <div className="relative w-full xl:h-[500px] md:h-[400px] h-[250px] rounded-[20px] overflow-hidden">
                    <Image
                      src={data.FileUrlUpload}
                      alt={data.Title}
                      fill
                      sizes=" "
                      priority
                      className="w-full h-full object-cover border"
                    />
                  </div>
                  <div className="lg:p-8 md:p-6 p-3">
                    <h1 className="lg:text-[40px] text-[#000] md:text-[35px] text-[20px] font-semibold lg:leading-[44px] line-clamp-4 hover-dynamic-text-main transition-colors duration-300">
                      {data.Title}
                    </h1>
                    {data?.PostAuthorsList.map((data, index) => {
                      return (
                        <div
                          className="mt-4 flex items-center gap-2"
                          key={index}
                        >
                          <div className="w-[40px] h-[40px] rounded-full border dynamic-border-main overflow-hidden">
                            <img
                              src={data.Photo || "/fav.png"}
                              alt={data.AuthorName}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="font-medium">
                            <div>
                              <div className="font-medium">
                                {data.AuthorName}
                              </div>
                              <div className="">{data.UserName}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="mt-2">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <FaRegCalendarAlt className="dynamic-icon-color-main" />
                          <span className="text-sm text-gray-800">
                            {dateOnly}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaRegClock className="dynamic-icon-color-main" />
                          <span className="text-sm text-gray-800">
                            {timeOnly}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}

          {/* Grid Data */}
          <div>
            <BannerGrid gridData={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
