import Image from "next/image";
import { fetchHomeSettings } from "../../../api/services/homeService";

const AuthorHeader = async ({ authorData, postsCount }) => {
  if (!authorData) return null;

  // Fetch home settings for dynamic colors
  const homeSettings = await fetchHomeSettings();
  const primaryColor = homeSettings?.PrimaryColor || "#22c55e";
  const secondaryColor = homeSettings?.SecondaryColor || "#16a34a";

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .author-header-container {
            --primary-color: ${primaryColor};
            --secondary-color: ${secondaryColor};
            --primary-color-10: ${primaryColor}1A;
            --primary-color-20: ${primaryColor}33;
            --secondary-color-darker: ${secondaryColor}E6;
          }
          .dynamic-bg-gradient {
            background: linear-gradient(135deg, var(--primary-color-10) 0%, #f0f9ff 100%);
          }
          .dynamic-bg-badge {
            background-color: var(--primary-color-20);
          }
          .dynamic-text-badge {
            color: var(--secondary-color);
            font-weight: 600;
          }
        `
      }} />

      <div className="author-header-container dynamic-bg-gradient py-8 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Author Photo */}
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image
                src={authorData.Photo || "/default-avatar.png"}
                alt={authorData.AuthorName || "Author"}
                fill
                className="object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>

            {/* Author Info */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {authorData.AuthorName || "Author"}
              </h1>
              <p className="text-gray-600 mb-2">{authorData.UserName || ""}</p>
              <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
                <span className="dynamic-bg-badge dynamic-text-badge px-3 py-1 rounded-full">
                  {postsCount} Articles
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorHeader;
