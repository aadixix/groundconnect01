import Head from "next/head";

const MetaTags = ({
  title,
  description,
  keywords,
  author,
  url,
  image,
  imageWidth = "750",
  imageHeight = "422",
  siteName = "RuralVoice",
  locale = "en_US",
  type = "article",
  publishedTime,
  modifiedTime,
  tags = [],
  twitterSite = "@RuralVoice",
  twitterCreator = "@Ajeet Singh",
  canonical,
  ampUrl,
}) => {
  return (
    <Head>
      {/* <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />

      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="article:author" content={author} />
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      <meta property="fb:app_id" content="104841141528181" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {canonical && <link rel="canonical" href={canonical} />}
      {ampUrl && <link rel="amphtml" href={ampUrl} />}
      <link rel="shortcut icon" type="image/png" href={image} /> */}
      <meta
        name="description"
        content="प्रधानमंत्री नरेंद्र मोदी ने इस महत्वाकांक्षी और आपसी लाभकारी व्यापार समझौते को \'ऐतिहासिक मील का पत्थर\' बताया है।"
      />
      <meta
        name="keywords"
        content="India, UK, United Kingdom, UK, India-UK Free Trade Agreement, UK-India FTA, tariff, agriculture exports, automobiles, textiles, footwear, whisky, food products, marine products, Prime Minister Narendra Modi, FIEO"
      />
      <meta name="author" content="Codingest" />
      <meta name="robots" content="index, follow" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="RuralVoice" />
      <link
        rel="amphtml"
        href="https://www.groundconnect.in/article/crop-damage-due-to-heavy-rain-government-is-providing-compensation-2938635"
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content="ब्रिटेन के साथ मुक्त व्यापार समझौते के भारतीय अर्थव्यवस्था और कृषि के लिए क्या मायने?"
      />
      <meta
        property="og:description"
        content="प्रधानमंत्री नरेंद्र मोदी ने इस महत्वाकांक्षी और आपसी लाभकारी व्यापार समझौते को \'ऐतिहासिक मील का पत्थर\' बताया है।"
      />
      <meta
        property="og:url"
        content="https://www.groundconnect.in/article/crop-damage-due-to-heavy-rain-government-is-providing-compensation-2938635"
      />
      <meta
        property="og:image"
        content="https://demo.nuovasoft.in/aslibharat/wp-content/uploads/2023/09/Picture1.png"
      />
      <meta property="og:image:width" content="750" />{" "}
      <meta property="og:image:height" content="422" />
      <meta property="article:author" content="Ajeet Singh" />
      <meta property="fb:app_id" content="104841141528181" />
      <meta property="article:tag" content="India" />
      <meta property="article:tag" content="UK" />
      <meta property="article:tag" content="United Kingdom" />
      <meta property="article:tag" content="UK" />
      <meta property="article:tag" content="India-UK Free Trade Agreement" />
      <meta property="article:tag" content="UK-India FTA" />
      <meta property="article:tag" content="tariff" />
      <meta property="article:tag" content="agriculture exports" />
      <meta property="article:tag" content="automobiles" />
      <meta property="article:tag" content="textiles" />
      <meta property="article:tag" content="footwear" />
      <meta property="article:tag" content="whisky" />
      <meta property="article:tag" content="food products" />
      <meta property="article:tag" content="marine products" />
      <meta property="article:tag" content="Prime Minister Narendra Modi" />
      <meta property="article:tag" content="FIEO" />
      <meta property="article:published_time" content="2025-05-07 19:12:27" />
      <meta property="article:modified_time" content="2025-05-08 12:53:59" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@RuralVoice" />
      <meta name="twitter:creator" content="@Ajeet Singh" />
      <meta
        name="twitter:title"
        content="ब्रिटेन के साथ मुक्त व्यापार समझौते के भारतीय अर्थव्यवस्था और कृषि के लिए क्या मायने?"
      />
      <meta
        name="twitter:description"
        content="प्रधानमंत्री नरेंद्र मोदी ने इस महत्वाकांक्षी और आपसी लाभकारी व्यापार समझौते को \'ऐतिहासिक मील का पत्थर\' बताया है।"
      />
      <meta
        name="twitter:image"
        content="https://demo.nuovasoft.in/aslibharat/wp-content/uploads/2023/09/Picture1.png"
      />
      <link
        rel="canonical"
        href="https://www.groundconnect.in/article/crop-damage-due-to-heavy-rain-government-is-providing-compensation-2938635"
      />
      <link
        rel="shortcut icon"
        type="image/png"
        href="https://demo.nuovasoft.in/aslibharat/wp-content/uploads/2023/09/Picture1.png"
      />
    </Head>
  );
};

export default MetaTags;
