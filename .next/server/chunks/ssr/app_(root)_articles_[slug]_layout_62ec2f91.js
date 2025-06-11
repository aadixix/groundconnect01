module.exports = {

"[project]/app/(root)/articles/[slug]/layout.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SlugLayout),
    "generateMetadata": (()=>generateMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$services$2f$homeService$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/api/services/homeService.js [app-rsc] (ecmascript)");
;
;
async function generateMetadata({ params }) {
    const slug = params;
    const article = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$services$2f$homeService$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDataBySlug"])({
        slug
    });
    if (!article) {
        return {
            title: "Article Not Found",
            description: "This article does not exist."
        };
    }
    const { Title: title = "Ground Connect", Description: description = "", Tags = "", FileUrlUpload: image = "/default-image.jpg", PostAuthorsList = [], CreatedDate: publishedAt = new Date().toISOString(), CategoryId, CategoryLanguage, Slug: articleSlug } = article;
    const keywords = Tags ? Tags.split(",").map((tag)=>tag.trim()) : [];
    const authorObj = PostAuthorsList[0] || {};
    const author = authorObj.Name || "Ground Connect";
    const authorSlug = authorObj.Slug || "ground-connect";
    const authorTwitter = authorObj.Twitter || "GroundConnect";
    const url = `https://www.groundconnect.in/articles/${articleSlug}`;
    const authorProfile = `https://www.groundconnect.in/authors/${authorSlug}`;
    return {
        title,
        description,
        keywords,
        authors: [
            {
                name: author
            }
        ],
        openGraph: {
            type: "article",
            locale: "en_US",
            siteName: "Ground Connect",
            url,
            title,
            description,
            publishedTime: publishedAt,
            authors: [
                authorProfile
            ],
            section: `Category-${CategoryId || "General"}`,
            tags: keywords,
            images: [
                {
                    url: image,
                    width: 750,
                    height: 422,
                    alt: title
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            site: "@RuralVoice",
            creator: `@${authorTwitter}`,
            title,
            description,
            images: [
                image
            ]
        },
        metadataBase: new URL("https://www.groundconnect.in"),
        alternates: {
            canonical: url
        },
        icons: {
            shortcut: image || "/fav.png"
        },
        other: {
            "og:image:type": "image/jpeg",
            "og:image:width": "750",
            "og:image:height": "422",
            "article:published_time": publishedAt,
            "article:author": authorProfile,
            "article:section": `Category-${CategoryId}`,
            "article:tag": keywords.join(", "),
            "article:language": `Language-${CategoryLanguage || "1"}`
        }
    };
}
function SlugLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "main_width py-6",
        children: children
    }, void 0, false, {
        fileName: "[project]/app/(root)/articles/[slug]/layout.js",
        lineNumber: 91,
        columnNumber: 10
    }, this);
}
}}),

};

//# sourceMappingURL=app_%28root%29_articles_%5Bslug%5D_layout_62ec2f91.js.map