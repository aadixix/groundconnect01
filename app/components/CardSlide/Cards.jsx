import React from "react";
import CardSections from "./CardSections";
import CardSectionHeader from "./cardSectionHeader";
import { fetchHomeSettings } from "../../../api/services/homeService";

const Cards = async ({ data }) => {
  const homeSettings = await fetchHomeSettings();
  const primaryColor = homeSettings?.PrimaryColor || "#22c55e";
  const secondaryColor = homeSettings?.SecondaryColor || "#16a34a";

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .cards-container {
            --primary-color: ${primaryColor};
            --secondary-color: ${secondaryColor};
          }
          .dynamic-border-cards {
            border-color: var(--primary-color);
          }
        `
      }} />

      <div className="main_width cards-container">
        <div>
          <span className="text-[25px] border-b-4 rounded-[4px] dynamic-border-cards font-bold">
            Featured Stories
          </span>
        </div>

        {data.map((section, index) => (
          <div key={section.Id || index} className="my-14">
            <CardSectionHeader title={section.CategoryName} />
            <CardSections cards={section.CategoryPostList || []} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
