import Link from "next/link";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { fetchHomeSettings } from "../../../api/services/homeService";

const CategoryCard = async ({ post }) => {
  if (!post) return null;

  const homeSettings = await fetchHomeSettings();
  const primaryColor = homeSettings?.PrimaryColor || "#22c55e";
  const secondaryColor = homeSettings?.SecondaryColor || "#16a34a";

  const imageUrl = post.FileUrlUploadoto || post.FileUrlUpload;
  const finalImageUrl =
    imageUrl && imageUrl.trim() ? imageUrl : "/banner/panther.jpg";
  const postUrl = `/articles/${post.Slug}`;
  const author = post.PostAuthors?.[0];

  const formatDateTime = (isoString) => {
    if (!isoString) return "No date";

    const date = new Date(isoString);

    return date.toLocaleString("hi-IN", {
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
          .category-card-container {
            --primary-color: ${primaryColor};
            --secondary-color: ${secondaryColor};
          }
          .dynamic-icon-color-category {
            color: var(--primary-color);
          }
        `
      }} />

      <div className="mt-4 h-full p-2 border rounded-[10px] transition-all duration-500 transform hover:scale-[1.02] hover:shadow category-card-container">
        <Link href={postUrl}>
          <div className="relative h-48 w-full">
            <Image
              src={finalImageUrl}
              alt={post.Title || "Post image"}
              fill
              className="object-cover"
              sizes=" "
            />
          </div>

          <div className="mt-2 p-2">
            <h4 className="font-semibold md:text-[20px] text-[14px] line-clamp-2">
              {post.Title || "Untitled"}
            </h4>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1">
                <FaRegCalendarAlt className="dynamic-icon-color-category" />
                <span className="text-sm text-gray-800">
                  {formatDateTime(post.CreatedDate) || "No date"}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CategoryCard;
