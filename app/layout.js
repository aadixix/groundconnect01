import { Mukta } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Load font
const mukta = Mukta({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});
const WEB_URL = process.env.WEB_URL || ""; // fallback to "" if undefined

export const metadataBase = new URL(WEB_URL || "https://www.groundconnect.in");

export const metadata = {
  title: "Ground Connect",
  description: "भारत की ग्रामीण अर्थव्यवस्था की ज़मीनी रिपोर्टिंग।",
  keywords: [
    "Ground Connect",
    "Indian Agriculture",
    "Rural India",
    "News",
    "Economy",
    "Policy",
    "Farming",
  ],
  authors: [{ name: "Ground Connect Team" }],
  robots: "index, follow",

  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
  openGraph: {
    type: "website",
    url: WEB_URL || "https://www.groundconnect.in",
    siteName: "Ground Connect",
    title: "Ground Connect - ग्रामीण भारत की आवाज़",
    description:
      "भारत की ग्रामीण अर्थव्यवस्था, कृषि, और नीति से जुड़ी गहराई से रिपोर्टिंग।",
    images: [
      {
        url: WEB_URL ? `${WEB_URL}/banner/panther.jpg` : "/banner/panther.jpg",
        width: 1200,
        height: 630,
        alt: "Ground Connect OG Image",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@GroundConnect",
    creator: "@GroundConnect",
    title: "Ground Connect - ग्रामीण भारत की आवाज़",
    description:
      "भारत की ग्रामीण अर्थव्यवस्था, कृषि, और नीति से जुड़ी गहराई से रिपोर्टिंग।",
    images: [WEB_URL ? `${WEB_URL}/banner/panther.jpg` : "/banner/panther.jpg"],
  },

  verification: {
    google: "", // Add your site verification ID here if available
  },

  other: {
    canonical: WEB_URL || "https://www.groundconnect.in",
  },
};

export default async function RootLayout({ children, params }) {
  return (
    <html lang="en">
      <body className={mukta.className}>
        <Header currentPath={params} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
