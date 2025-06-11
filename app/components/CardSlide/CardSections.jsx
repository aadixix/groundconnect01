import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { fetchHomeSettings } from "../../../api/services/homeService";

const CardSections = async ({ cards }) => {
  const homeSettings = await fetchHomeSettings();
  const primaryColor = homeSettings?.PrimaryColor || "#22c55e";
  const secondaryColor = homeSettings?.SecondaryColor || "#16a34a";

  const data = cards.slice(0, 4);
  const formatDateTime = (isoString) => {
    if (!isoString) return "No date";

    const date = new Date(isoString);

    return date.toLocaleString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .card-sections-container {
            --primary-color: ${primaryColor};
            --secondary-color: ${secondaryColor};
          }
          .dynamic-icon-color-cards {
            color: var(--primary-color);
          }
        `
      }} />

      <div className="mt-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 card-sections-container">
        {data.map((card, index) => (
          <div key={card.id || index}>
            <Link href={`/articles/${card.Slug || ""}`}>
              <div className="mt-4 h-full p-2 border rounded-[10px] transition-all duration-500 transform hover:scale-[1.02] hover:shadow">
                <div className="relative w-full lg:h-[220px] md:h-[150px] h-[120px] rounded-[10px] overflow-hidden">
                  <Image
                    src={
                      card.FileUrlUploadoto ||
                      card.FileUrlUpload ||
                      "/banner/panther.jpg"
                    }
                    alt={card.Title || "Image"}
                    fill
                    sizes=" "
                    className="object-cover border"
                  />
                </div>
                <div className="mt-2 p-2">
                  <h4 className="font-semibold md:text-[20px] text-[14px] line-clamp-2">
                    {card.Title || "Untitled"}
                  </h4>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <FaRegCalendarAlt className="dynamic-icon-color-cards" />
                      <span className="text-sm text-gray-800">
                        {formatDateTime(card.CreatedDate) || "No date"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardSections;
