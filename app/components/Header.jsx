import TopBar from "./TopBar";
import NavMenu from "./NavMenu";
import Image from "next/image";
import Link from "next/link";
import {
  fetchHomeData,
  fetchHomeSettings,
  extractCategoriesFromHomeData,
} from "../../api/services/homeService";

const Header = async ({ currentPath }) => {
  const [homeData, homeSettings] = await Promise.all([
    fetchHomeData(),
    fetchHomeSettings(),
  ]);

  const categories = extractCategoriesFromHomeData(homeData);
  const logoUrl = homeSettings?.LogoUrl || "/logo.png";
  const primaryColor = homeSettings?.PrimaryColor || "#22c55e";
  const secondaryColor = homeSettings?.SecondaryColor || "#16a34a";

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .header-container {
            --primary-color: ${primaryColor};
            --secondary-color: ${secondaryColor};
            --primary-color-20: ${primaryColor}33;
            --primary-color-40: ${primaryColor}66;
            --primary-color-80: ${primaryColor}CC;
          }
          .dynamic-green-bg {
            background-color: var(--primary-color);
          }
          .dynamic-green-color {
            color: var(--primary-color);
          }
          .dynamic-green-hover:hover {
            color: var(--secondary-color);
          }
          .dynamic-active-underline.active-underline .dynamic-underline-line {
            width: 100%;
          }
          .dynamic-underline-line {
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--secondary-color);
            transition: width 0.3s ease;
          }
          .dynamic-green-color:hover .dynamic-underline-line {
            width: 100%;
          }
          .dynamic-submenu-hover:hover {
            background-color: var(--primary-color-20);
            color: var(--secondary-color);
          }
          .dynamic-submenu-active {
            color: var(--secondary-color);
            background-color: var(--primary-color-20);
          }

          /* Mobile specific styles */
          @media (max-width: 1023px) {
            .main_width {
              padding-left: 1rem;
              padding-right: 1rem;
            }
          }

          @media (max-width: 767px) {
            .main_width {
              padding-left: 0.75rem;
              padding-right: 0.75rem;
            }
          }

          @media (max-width: 479px) {
            .main_width {
              padding-left: 0.5rem;
              padding-right: 0.5rem;
            }
          }
        `
      }} />

      <header className="header-container border-b border-gray-200 shadow-sm sticky top-0 bg-white z-30">
        {/* Top Bar - Hidden on mobile */}
        <div className="lg:block hidden">
          <TopBar homeSettings={homeSettings} />
        </div>

        {/* Main Header */}
        <div className="flex main_width items-center justify-between py-2 lg:py-3">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative lg:w-[220px] md:w-[180px] sm:w-[160px] w-[140px] lg:h-[90px] md:h-[80px] sm:h-[70px] h-[60px]">
              <Image
                src={logoUrl}
                alt="Ground Connect Logo"
                fill
                sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, (max-width: 1024px) 180px, 220px"
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center">
            <NavMenu pathname={currentPath} categories={categories} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
