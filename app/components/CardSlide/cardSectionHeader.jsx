import React from "react";
import { fetchHomeSettings } from "../../../api/services/homeService";
import Link from "next/link";

const CardSectionHeader = async ({ title }) => {
  const homeSettings = await fetchHomeSettings();
  const primaryColor = homeSettings?.PrimaryColor || "#22c55e";
  const secondaryColor = homeSettings?.SecondaryColor || "#16a34a";

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .card-section-header {
            --primary-color: ${primaryColor};
            --secondary-color: ${secondaryColor};
          }
          .dynamic-border-left {
            border-left-color: var(--primary-color);
          }
          .view-all-button {
            color: var(--primary-color);
            border: 1px solid var(--primary-color);
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 0.875rem;
            font-weight: 600;
            transition: background-color 0.2s, color 0.2s;
          }
          .view-all-button:hover {
            background-color: var(--primary-color);
            color: white;
          }
        `
      }} />

      <div className="flex items-center justify-between text-xl font-bold border-l-4 dynamic-border-left pl-3 mb-2 card-section-header">
        <span>{title}</span>
        <Link href={`/category/${title}`} className="view-all-button">
          View All
        </Link>
      </div>
    </>
  );
};

export default CardSectionHeader;
