import { Mukta } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const mukta = Mukta({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Ground Connect",
  description: "प्रधानमंत्री नरेंद्र मोदी ने इस महत्वाकांक्षी ...",
  icons: {
    icon: "/fav.png",
  },
  keywords: [
    "India",
    "UK",
    "United Kingdom",
    "India-UK Free Trade Agreement",
    "tariff",
    "agriculture exports",
    "automobiles",
    "textiles",
    "footwear",
    "whisky",
    "food products",
    "marine products",
    "Prime Minister Narendra Modi",
    "FIEO",
  ],
  authors: [{ name: "Codingest" }],
  robots: "index, follow",
  openGraph: {
    locale: "en_US",
    siteName: "Ground Connect",
    type: "article",
    title:
      "ब्रिटेन के साथ मुक्त व्यापार समझौते के भारतीय अर्थव्यवस्था और कृषि के लिए क्या मायने?",
    description: "प्रधानमंत्री नरेंद्र मोदी ने इस महत्वाकांक्षी ...",
    url: "https://www.groundconnect.in/article/crop-damage-due-to-heavy-rain-government-is-providing-compensation-2938635",
    images: [
      {
        url: "https://demo.nuovasoft.in/aslibharat/wp-content/uploads/2023/09/Picture1.png",
        width: 750,
        height: 422,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RuralVoice",
    creator: "@Ajeet Singh",
    title:
      "ब्रिटेन के साथ मुक्त व्यापार समझौते के भारतीय अर्थव्यवस्था और कृषि के लिए क्या मायने?",
    description: "प्रधानमंत्री नरेंद्र मोदी ने इस महत्वाकांक्षी ...",
    images: [
      "https://demo.nuovasoft.in/aslibharat/wp-content/uploads/2023/09/Picture1.png",
    ],
  },
  verification: {
    google: "", // if any
  },
  other: {
    canonical:
      "https://www.groundconnect.in/article/crop-damage-due-to-heavy-rain-government-is-providing-compensation-2938635",
    shortcutIcon:
      "https://demo.nuovasoft.in/aslibharat/wp-content/uploads/2023/09/Picture1.png",
  },
};

export default async function RootLayout({ children, params }) {
  return (
    <html lang="en">
      <body className={`${mukta.variable}  `}>
        <Header currentPath={params} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
