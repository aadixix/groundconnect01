import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";

const TopBar = ({ homeSettings }) => {
  const links = [];

  if (homeSettings?.ContactPhone) {
    links.push({
      ico: <FiPhone />,
      label: homeSettings.ContactPhone,
      link: `tel:${homeSettings.ContactPhone}`,
    });
  }

  if (homeSettings?.ContactEmail) {
    links.push({
      ico: <MdOutlineMailOutline />,
      label: homeSettings.ContactEmail,
      link: `mailto:${homeSettings.ContactEmail}`,
    });
  }

  if (homeSettings?.WhatsAppNumber) {
    links.push({
      ico: <FaWhatsapp />,
      label: "WhatsApp",
      link: `https://wa.me/${homeSettings.WhatsAppNumber.replace(
        /[^0-9]/g,
        ""
      )}`,
    });
  }

  return (
    <div className="dynamic-green-bg text-white text-sm flex justify-end gap-6 px-4 py-4">
      <div className="main_width flex items-center justify-end gap-10 text-[18px]">
        {links.map((data, key) => (
          <span key={key} className="flex items-center gap-2">
            <Link href={data.link} className="flex items-center gap-1">
              {data.ico} {data.label}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
