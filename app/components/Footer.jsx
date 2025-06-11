import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMdCall, IoMdMail, IoMdPin } from "react-icons/io";
import { FaRss } from "react-icons/fa6";
import {
  fetchHomeData,
  fetchHomeSettings,
  extractCategoriesFromHomeData,
} from "../../api/services/homeService";
import NewsletterSubscription from './NewsletterSubscription';

const Footer = async () => {
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
          .footer-container {
            --primary-color: ${primaryColor};
            --secondary-color: ${secondaryColor};
            --primary-color-20: ${primaryColor}33;
            --primary-color-40: ${primaryColor}66;
            --primary-color-80: ${primaryColor}CC;
          }
          .dynamic-separator {
            background: linear-gradient(to right, transparent, var(--primary-color), transparent);
          }
          .dynamic-bg-blur {
            background-color: var(--primary-color-20);
          }
          .dynamic-bg-blur-2 {
            background-color: ${secondaryColor}33;
          }
          .dynamic-bg-blur-3 {
            background-color: ${primaryColor}4D;
          }
          .dynamic-underline {
            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
          }
          .dynamic-rss-btn {
            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
          }
          .dynamic-rss-btn:hover {
            background: linear-gradient(to right, var(--secondary-color), var(--primary-color));
          }
          .dynamic-dot {
            background-color: var(--primary-color);
          }
          .dynamic-dot-static {
            background-color: var(--primary-color-80);
          }
          .dynamic-icon-color {
            color: var(--primary-color);
          }
          .hover-dynamic-text:hover {
            color: var(--secondary-color);
          }
          .dynamic-brand-color {
            color: var(--secondary-color);
          }
          .dynamic-border {
            border-color: var(--primary-color-40);
          }
        `
      }} />

      {/* Newsletter Subscription Section */}
      <NewsletterSubscription variant="full" />

      {/* Separator Line */}
      <div className="w-full h-1 dynamic-separator"></div>

      {/* Footer */}
      <footer className="footer-container bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 text-gray-800 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 dynamic-bg-blur rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 dynamic-bg-blur-2 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 dynamic-bg-blur-3 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="main_width grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 pt-16 pb-12">
            {/* Logo & About - Enhanced */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <Image
                    src={logoUrl}
                    alt="Ground Connect Logo"
                    sizes=" "
                    width={140}
                    height={45}
                    className="drop-shadow-sm"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-gray-700 font-medium">
                  Your trusted source for agricultural news and rural insights.
                </p>
                <p className="text-sm leading-relaxed text-gray-600 max-w-md">
                  Connecting farmers with the latest information, market trends,
                  and agricultural innovations. Empowering rural communities
                  through knowledge and sustainable farming practices.
                </p>
                <div className="pt-2">
                  <Link
                    href="/rss"
                    className="group dynamic-rss-btn text-white text-sm font-semibold px-6 py-3 rounded-lg inline-flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <FaRss className="group-hover:rotate-12 transition-transform duration-300" />
                    RSS Feeds
                  </Link>
                </div>
              </div>
            </div>

            {/* Dynamic Categories - Enhanced */}
            <div>
              <div className="relative mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Categories
                </h3>
                <div className="w-12 h-1 dynamic-underline rounded-full"></div>
              </div>
              <ul className="space-y-3">
                {categories.length > 0
                  ? categories.map((category) => (
                    <li key={category.Id}>
                      <Link
                        href={`/category/${category.Slug}`}
                        className="group flex items-center text-gray-700 hover-dynamic-text transition-all duration-300 text-sm font-medium"
                      >
                        <span className="w-2 h-2 dynamic-dot rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {category.CategoryName}
                        </span>
                      </Link>
                    </li>
                  ))
                  : [
                    "पहल",
                    "पर्यावरण",
                    "नीति",
                    "कृषि",
                    "संघर्ष",
                    "मंथन",
                    "समाचार",
                  ].map((cat, index) => (
                    <li
                      key={index}
                      className="text-sm font-medium text-gray-700"
                    >
                      <span className="flex items-center">
                        <span className="w-2 h-2 dynamic-dot-static rounded-full mr-3"></span>
                        {cat}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Contact & Social - Enhanced */}
            <div>
              <div className="relative mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Get In Touch
                </h3>
                <div className="w-12 h-1 dynamic-underline rounded-full"></div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300">
                  <IoMdPin className="dynamic-icon-color text-lg mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 leading-relaxed">
                    123 Agriculture Way, New Delhi, India
                  </span>
                </div>

                {homeSettings?.ContactPhone && (
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300">
                    <IoMdCall className="dynamic-icon-color text-lg flex-shrink-0" />
                    <Link
                      href={`tel:${homeSettings.ContactPhone}`}
                      className="text-sm text-gray-700 hover-dynamic-text transition-colors duration-300"
                    >
                      {homeSettings.ContactPhone}
                    </Link>
                  </div>
                )}

                {homeSettings?.ContactEmail && (
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300">
                    <IoMdMail className="dynamic-icon-color text-lg flex-shrink-0" />
                    <Link
                      href={`mailto:${homeSettings.ContactEmail}`}
                      className="text-sm text-gray-700 hover-dynamic-text transition-colors duration-300 break-all"
                    >
                      {homeSettings.ContactEmail}
                    </Link>
                  </div>
                )}

                {homeSettings?.WhatsAppNumber && (
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300">
                    <FaWhatsapp className="dynamic-icon-color text-lg flex-shrink-0" />
                    <Link
                      href={`https://wa.me/${homeSettings.WhatsAppNumber.replace(
                        /[^0-9]/g,
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-700 hover-dynamic-text transition-colors duration-300"
                    >
                      WhatsApp Support
                    </Link>
                  </div>
                )}
              </div>

              {/* Social Media - Enhanced */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Follow Our Journey
                </h4>
                <div className="flex gap-4">
                  {homeSettings?.FacebookUrl && (
                    <Link
                      href={homeSettings.FacebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      <FaFacebookF className="text-sm" />
                    </Link>
                  )}
                  {homeSettings?.InstagramUrl && (
                    <Link
                      href={homeSettings.InstagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      <FaInstagram className="text-sm" />
                    </Link>
                  )}
                  {homeSettings?.LinkedInUrl && (
                    <Link
                      href={homeSettings.LinkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      <FaLinkedinIn className="text-sm" />
                    </Link>
                  )}
                  {homeSettings?.YouTube && (
                    <Link
                      href={homeSettings.YouTube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      <FaYoutube className="text-sm" />
                    </Link>
                  )}
                  {homeSettings?.Twitter && (
                    <Link
                      href={homeSettings.Twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-sky-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      <FaTwitter className="text-sm" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Bar - Enhanced */}
          <div className="border-t dynamic-border bg-white/30 backdrop-blur-sm">
            <div className="main_width py-6">
              <div className="justify-center flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-600">
                  © 2025{" "}
                  <span className="font-semibold dynamic-brand-color">
                    Ground Connect
                  </span>
                  . All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
