module.exports = {

"[next]/internal/font/google/mukta_c34c98bb.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "mukta_c34c98bb-module___my8wq__className",
});
}}),
"[next]/internal/font/google/mukta_c34c98bb.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$mukta_c34c98bb$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/mukta_c34c98bb.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$mukta_c34c98bb$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Mukta', 'Mukta Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$mukta_c34c98bb$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$mukta_c34c98bb$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/app/components/TopBar.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
;
const TopBar = ({ homeSettings })=>{
    const links = [];
    if (homeSettings?.ContactPhone) {
        links.push({
            ico: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FiPhone"], {}, void 0, false, {
                fileName: "[project]/app/components/TopBar.jsx",
                lineNumber: 11,
                columnNumber: 12
            }, this),
            label: homeSettings.ContactPhone,
            link: `tel:${homeSettings.ContactPhone}`
        });
    }
    if (homeSettings?.ContactEmail) {
        links.push({
            ico: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MdOutlineMailOutline"], {}, void 0, false, {
                fileName: "[project]/app/components/TopBar.jsx",
                lineNumber: 19,
                columnNumber: 12
            }, this),
            label: homeSettings.ContactEmail,
            link: `mailto:${homeSettings.ContactEmail}`
        });
    }
    if (homeSettings?.WhatsAppNumber) {
        links.push({
            ico: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaWhatsapp"], {}, void 0, false, {
                fileName: "[project]/app/components/TopBar.jsx",
                lineNumber: 27,
                columnNumber: 12
            }, this),
            label: "WhatsApp",
            link: `https://wa.me/${homeSettings.WhatsAppNumber.replace(/[^0-9]/g, "")}`
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "dynamic-green-bg text-white text-sm flex justify-end gap-6 px-4 py-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "main_width flex items-center justify-end gap-10 text-[18px]",
            children: links.map((data, key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: data.link,
                        className: "flex items-center gap-1",
                        children: [
                            data.ico,
                            " ",
                            data.label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/TopBar.jsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this)
                }, key, false, {
                    fileName: "[project]/app/components/TopBar.jsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/app/components/TopBar.jsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/TopBar.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = TopBar;
}}),
"[project]/app/components/NavMenu.jsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/NavMenu.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/NavMenu.jsx <module evaluation>", "default");
}}),
"[project]/app/components/NavMenu.jsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/NavMenu.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/NavMenu.jsx", "default");
}}),
"[project]/app/components/NavMenu.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavMenu$2e$jsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/components/NavMenu.jsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavMenu$2e$jsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/app/components/NavMenu.jsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavMenu$2e$jsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/api/constants.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "api": (()=>api)
});
const apiUrl = ("TURBOPACK compile-time value", "https://newsadminapi.anmoluphaar.in/api/");
const api = {
    homePage: `${apiUrl}Home/GetAllCategory`,
    homeSettings: `${apiUrl}Home/HomeSettings`,
    slugData: `${apiUrl}Home/GetPostBySlug`,
    postsByAuthor: `${apiUrl}Home/GetPostsByAuthor`,
    postsByTag: `${apiUrl}Home/GetPostsByTag`,
    newsletter: `${apiUrl}Home/PostEmailBYSubscriber`,
    rssCategories: `${apiUrl}Home/GetCatRSSFeeds`,
    rssFeed: `${apiUrl}Home/GetRssFeed`
};
}}),
"[project]/api/services/homeService.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "extractCategoriesFromHomeData": (()=>extractCategoriesFromHomeData),
    "extractRSSCategories": (()=>extractRSSCategories),
    "fetchHomeData": (()=>fetchHomeData),
    "fetchHomeSettings": (()=>fetchHomeSettings),
    "fetchRSSCategories": (()=>fetchRSSCategories),
    "fetchRSSFeed": (()=>fetchRSSFeed),
    "getAllAuthors": (()=>getAllAuthors),
    "getAllTags": (()=>getAllTags),
    "getCategoryBySlug": (()=>getCategoryBySlug),
    "getDataBySlug": (()=>getDataBySlug),
    "getPostsByAuthor": (()=>getPostsByAuthor),
    "getPostsByTag": (()=>getPostsByTag),
    "getRSSUrlBySlug": (()=>getRSSUrlBySlug),
    "subscribeToNewsletter": (()=>subscribeToNewsletter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/api/constants.js [app-rsc] (ecmascript)");
;
async function fetchHomeData() {
    const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].homePage}?currentPage=1&recordsPerPage=50`, {
        next: {
            revalidate: 3600
        }
    });
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
}
function extractCategoriesFromHomeData(homeData) {
    if (homeData.rs === 1 && homeData.res?.Categories) {
        return homeData.res.Categories.filter((category)=>category.ShowOnMenu && category.IsActive).sort((a, b)=>(a.MenuOrder || 999) - (b.MenuOrder || 999));
    }
    return [];
}
async function getCategoryBySlug(slug) {
    try {
        const data = await fetchHomeData();
        if (data.rs === 1 && data.res?.Categories) {
            const category = data.res.Categories.find((cat)=>cat.Slug === slug);
            if (category) {
                return {
                    rs: 1,
                    res: {
                        Categories: [
                            category
                        ]
                    }
                };
            }
        }
        return {
            rs: 2
        };
    } catch (error) {
        throw error;
    }
}
async function getDataBySlug({ slug }) {
    try {
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].slugData}?slug=${slug}`, {
            next: {
                revalidate: 3600
            }
        });
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return await res.json();
    } catch (error) {
        console.error("Error in getDataBySlug:", error);
        throw error;
    }
}
async function getPostsByAuthor(username) {
    try {
        const decodedUsername = decodeURIComponent(username);
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].postsByAuthor}?username=${encodeURIComponent(decodedUsername)}`, {
            next: {
                revalidate: 3600
            }
        });
        if (!res.ok) {
            throw new Error("Failed to fetch posts by author");
        }
        return await res.json();
    } catch (error) {
        console.error("Error in getPostsByAuthor:", error);
        throw error;
    }
}
async function getPostsByTag(tag) {
    try {
        const encodedTag = encodeURIComponent(tag);
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].postsByTag}?tag=${encodedTag}`, {
            next: {
                revalidate: 3600
            }
        });
        if (!res.ok) {
            throw new Error("Failed to fetch posts by tag");
        }
        return await res.json();
    } catch (error) {
        console.error("Error in getPostsByTag:", error);
        throw error;
    }
}
async function getAllAuthors() {
    try {
        const data = await fetchHomeData();
        if (data.rs === 1 && data.res?.Posts) {
            const authors = [
                ...new Set(data.res.Posts.map((post)=>post.Author).filter(Boolean))
            ];
            return authors.map((author)=>({
                    username: author
                }));
        }
        return [];
    } catch (error) {
        console.error("Error in getAllAuthors:", error);
        return [];
    }
}
async function getAllTags() {
    try {
        const data = await fetchHomeData();
        if (data.rs === 1 && data.res?.Posts) {
            const allTags = new Set();
            data.res.Posts.forEach((post)=>{
                if (post.Tags && Array.isArray(post.Tags)) {
                    post.Tags.forEach((tag)=>{
                        if (tag && tag.trim()) {
                            allTags.add(tag.trim());
                        }
                    });
                }
            });
            return Array.from(allTags).map((tag)=>({
                    tag
                }));
        }
        return [];
    } catch (error) {
        console.error("Error in getAllTags:", error);
        return [];
    }
}
async function fetchHomeSettings() {
    try {
        const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].homeSettings, {
            cache: "no-store"
        });
        if (!res.ok) throw new Error("Failed to fetch home settings");
        const data = await res.json();
        return data.rs === 1 && data.res?.length > 0 ? data.res[0] : null;
    } catch (error) {
        console.error("Error fetching home settings:", error);
        return null;
    }
}
async function subscribeToNewsletter(email) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].newsletter}`, {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Email": email
            })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        throw error;
    }
}
async function fetchRSSCategories() {
    try {
        const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].rssCategories, {
            next: {
                revalidate: 3600
            }
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch RSS categories: ${res.status}`);
        }
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const data = await res.json();
            return data;
        } else {
            const text = await res.text();
            try {
                const data = JSON.parse(text);
                return data;
            } catch (parseError) {
                console.error("Response is not valid JSON:", text.substring(0, 100));
                throw new Error("Invalid JSON response from RSS categories API");
            }
        }
    } catch (error) {
        console.error("Error fetching RSS categories:", error);
        throw error;
    }
}
async function fetchRSSFeed(categorySlug) {
    try {
        const encodedSlug = encodeURIComponent(categorySlug);
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].rssFeed}?CategorySlug=${encodedSlug}`, {
            next: {
                revalidate: 1800
            }
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch RSS feed: ${res.status}`);
        }
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const data = await res.json();
            return data;
        } else {
            const text = await res.text();
            try {
                const data = JSON.parse(text);
                return data;
            } catch (parseError) {
                if (text.trim().startsWith('<')) {
                    console.log("Received XML response, returning as text for XML parsing");
                    return text;
                } else {
                    console.error("Response is neither JSON nor XML:", text.substring(0, 100));
                    throw new Error("Invalid response format from RSS feed API");
                }
            }
        }
    } catch (error) {
        console.error("Error fetching RSS feed:", error);
        throw error;
    }
}
async function getRSSUrlBySlug(categorySlug) {
    try {
        const rssData = await fetchRSSCategories();
        if (rssData && rssData.rs === 1 && rssData.rc) {
            const category = rssData.rc.find((cat)=>cat.Slug === categorySlug);
            return category ? category.RssUrl : null;
        }
        return null;
    } catch (error) {
        console.error("Error getting RSS URL by slug:", error);
        return null;
    }
}
function extractRSSCategories(rssData) {
    try {
        if (rssData && rssData.rs === 1 && rssData.rc) {
            return rssData.rc.map((category)=>({
                    name: category.CategoryName,
                    slug: category.Slug,
                    rssUrl: category.RssUrl
                }));
        }
        return [];
    } catch (error) {
        console.error("Error extracting RSS categories:", error);
        return [];
    }
}
}}),
"[project]/app/components/Header.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TopBar$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/TopBar.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavMenu$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NavMenu.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$services$2f$homeService$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/api/services/homeService.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const Header = async ({ currentPath })=>{
    const [homeData, homeSettings] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$services$2f$homeService$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchHomeData"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$services$2f$homeService$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchHomeSettings"])()
    ]);
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$services$2f$homeService$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractCategoriesFromHomeData"])(homeData);
    const logoUrl = homeSettings?.LogoUrl || "/logo.png";
    const primaryColor = homeSettings?.PrimaryColor || "#22c55e";
    const secondaryColor = homeSettings?.SecondaryColor || "#16a34a";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
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
                }
            }, void 0, false, {
                fileName: "[project]/app/components/Header.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "header-container border-b border-gray-200 shadow-sm sticky top-0 bg-white z-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:block hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TopBar$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            homeSettings: homeSettings
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header.jsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header.jsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex main_width items-center justify-between py-2 lg:py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative lg:w-[220px] md:w-[180px] sm:w-[160px] w-[140px] lg:h-[90px] md:h-[80px] sm:h-[70px] h-[60px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: logoUrl,
                                        alt: "Ground Connect Logo",
                                        fill: true,
                                        sizes: "(max-width: 640px) 140px, (max-width: 768px) 160px, (max-width: 1024px) 180px, 220px",
                                        className: "w-full h-full object-contain",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Header.jsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Header.jsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header.jsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavMenu$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    pathname: currentPath,
                                    categories: categories
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Header.jsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header.jsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Header.jsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Header.jsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Header;
}}),
"[project]/app/components/NewsletterSubscription.jsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/NewsletterSubscription.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/NewsletterSubscription.jsx <module evaluation>", "default");
}}),
"[project]/app/components/NewsletterSubscription.jsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/NewsletterSubscription.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/NewsletterSubscription.jsx", "default");
}}),
"[project]/app/components/NewsletterSubscription.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NewsletterSubscription$2e$jsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/components/NewsletterSubscription.jsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NewsletterSubscription$2e$jsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/app/components/NewsletterSubscription.jsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NewsletterSubscription$2e$jsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/app/components/Footer.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$services$2f$homeService$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/api/services/homeService.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NewsletterSubscription$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NewsletterSubscription.jsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const Footer = async ()=>{
    const [homeData, homeSettings] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$services$2f$homeService$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchHomeData"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$services$2f$homeService$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchHomeSettings"])()
    ]);
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$services$2f$homeService$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractCategoriesFromHomeData"])(homeData);
    const logoUrl = homeSettings?.LogoUrl || "/logo.png";
    const primaryColor = homeSettings?.PrimaryColor || "#22c55e";
    const secondaryColor = homeSettings?.SecondaryColor || "#16a34a";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
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
                }
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NewsletterSubscription$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                variant: "full"
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-1 dynamic-separator"
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.jsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "footer-container bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 text-gray-800 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-10 left-10 w-32 h-32 dynamic-bg-blur rounded-full blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-20 right-20 w-48 h-48 dynamic-bg-blur-2 rounded-full blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-1/3 w-24 h-24 dynamic-bg-blur-3 rounded-full blur-2xl"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.jsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "main_width grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 pt-16 pb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        src: logoUrl,
                                                        alt: "Ground Connect Logo",
                                                        sizes: " ",
                                                        width: 140,
                                                        height: 45,
                                                        className: "drop-shadow-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.jsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-base leading-relaxed text-gray-700 font-medium",
                                                        children: "Your trusted source for agricultural news and rural insights."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 118,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm leading-relaxed text-gray-600 max-w-md",
                                                        children: "Connecting farmers with the latest information, market trends, and agricultural innovations. Empowering rural communities through knowledge and sustainable farming practices."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 121,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/rss",
                                                            className: "group dynamic-rss-btn text-white text-sm font-semibold px-6 py-3 rounded-lg inline-flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaRss"], {
                                                                    className: "group-hover:rotate-12 transition-transform duration-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Footer.jsx",
                                                                    lineNumber: 131,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "RSS Feeds"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Footer.jsx",
                                                            lineNumber: 127,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 126,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold text-gray-800 mb-2",
                                                        children: "Categories"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 141,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-1 dynamic-underline rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 144,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-3",
                                                children: categories.length > 0 ? categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/category/${category.Slug}`,
                                                            className: "group flex items-center text-gray-700 hover-dynamic-text transition-all duration-300 text-sm font-medium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-2 h-2 dynamic-dot rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Footer.jsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "group-hover:translate-x-1 transition-transform duration-300",
                                                                    children: category.CategoryName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Footer.jsx",
                                                                    lineNumber: 155,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Footer.jsx",
                                                            lineNumber: 150,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, category.Id, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 149,
                                                        columnNumber: 21
                                                    }, this)) : [
                                                    "पहल",
                                                    "पर्यावरण",
                                                    "नीति",
                                                    "कृषि",
                                                    "संघर्ष",
                                                    "मंथन",
                                                    "समाचार"
                                                ].map((cat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm font-medium text-gray-700",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-2 h-2 dynamic-dot-static rounded-full mr-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Footer.jsx",
                                                                    lineNumber: 175,
                                                                    columnNumber: 25
                                                                }, this),
                                                                cat
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Footer.jsx",
                                                            lineNumber: 174,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, index, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 170,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold text-gray-800 mb-2",
                                                        children: "Get In Touch"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 186,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-1 dynamic-underline rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 189,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4 mb-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IoMdPin"], {
                                                                className: "dynamic-icon-color text-lg mt-0.5 flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 194,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-gray-700 leading-relaxed",
                                                                children: "123 Agriculture Way, New Delhi, India"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 195,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 193,
                                                        columnNumber: 17
                                                    }, this),
                                                    homeSettings?.ContactPhone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IoMdCall"], {
                                                                className: "dynamic-icon-color text-lg flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 202,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `tel:${homeSettings.ContactPhone}`,
                                                                className: "text-sm text-gray-700 hover-dynamic-text transition-colors duration-300",
                                                                children: homeSettings.ContactPhone
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 203,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 201,
                                                        columnNumber: 19
                                                    }, this),
                                                    homeSettings?.ContactEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IoMdMail"], {
                                                                className: "dynamic-icon-color text-lg flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 214,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `mailto:${homeSettings.ContactEmail}`,
                                                                className: "text-sm text-gray-700 hover-dynamic-text transition-colors duration-300 break-all",
                                                                children: homeSettings.ContactEmail
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 215,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 213,
                                                        columnNumber: 19
                                                    }, this),
                                                    homeSettings?.WhatsAppNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                                                className: "dynamic-icon-color text-lg flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 226,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `https://wa.me/${homeSettings.WhatsAppNumber.replace(/[^0-9]/g, "")}`,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "text-sm text-gray-700 hover-dynamic-text transition-colors duration-300",
                                                                children: "WhatsApp Support"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 227,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 225,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 192,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-lg font-semibold text-gray-800 mb-4",
                                                        children: "Follow Our Journey"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 244,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-4",
                                                        children: [
                                                            homeSettings?.FacebookUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: homeSettings.FacebookUrl,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "group w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaFacebookF"], {
                                                                    className: "text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Footer.jsx",
                                                                    lineNumber: 255,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 249,
                                                                columnNumber: 21
                                                            }, this),
                                                            homeSettings?.InstagramUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: homeSettings.InstagramUrl,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "group w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaInstagram"], {
                                                                    className: "text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Footer.jsx",
                                                                    lineNumber: 265,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 259,
                                                                columnNumber: 21
                                                            }, this),
                                                            homeSettings?.LinkedInUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: homeSettings.LinkedInUrl,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "group w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaLinkedinIn"], {
                                                                    className: "text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Footer.jsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 269,
                                                                columnNumber: 21
                                                            }, this),
                                                            homeSettings?.YouTube && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: homeSettings.YouTube,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "group w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaYoutube"], {
                                                                    className: "text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Footer.jsx",
                                                                    lineNumber: 285,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 279,
                                                                columnNumber: 21
                                                            }, this),
                                                            homeSettings?.Twitter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                href: homeSettings.Twitter,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "group w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-sky-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaTwitter"], {
                                                                    className: "text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Footer.jsx",
                                                                    lineNumber: 295,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 289,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 247,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 243,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t dynamic-border bg-white/30 backdrop-blur-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "main_width py-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "justify-center flex flex-col md:flex-row justify-between items-center gap-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: [
                                                "© 2025",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold dynamic-brand-color",
                                                    children: "Ground Connect"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.jsx",
                                                    lineNumber: 308,
                                                    columnNumber: 19
                                                }, this),
                                                ". All rights reserved."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Footer.jsx",
                                            lineNumber: 306,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.jsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.jsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Footer.jsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Footer;
}}),
"[project]/app/layout.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RootLayout),
    "metadata": (()=>metadata),
    "metadataBase": (()=>metadataBase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$mukta_c34c98bb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/mukta_c34c98bb.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Header.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Footer.jsx [app-rsc] (ecmascript)");
;
;
;
;
;
const WEB_URL = process.env.WEB_URL || ""; // fallback to "" if undefined
const metadataBase = new URL(WEB_URL || "https://www.groundconnect.in");
const metadata = {
    title: "Ground Connect",
    description: "भारत की ग्रामीण अर्थव्यवस्था की ज़मीनी रिपोर्टिंग।",
    keywords: [
        "Ground Connect",
        "Indian Agriculture",
        "Rural India",
        "News",
        "Economy",
        "Policy",
        "Farming"
    ],
    authors: [
        {
            name: "Ground Connect Team"
        }
    ],
    robots: "index, follow",
    icons: {
        icon: "/fav.png",
        shortcut: "/fav.png",
        apple: "/fav.png"
    },
    openGraph: {
        type: "website",
        url: WEB_URL || "https://www.groundconnect.in",
        siteName: "Ground Connect",
        title: "Ground Connect - ग्रामीण भारत की आवाज़",
        description: "भारत की ग्रामीण अर्थव्यवस्था, कृषि, और नीति से जुड़ी गहराई से रिपोर्टिंग।",
        images: [
            {
                url: WEB_URL ? `${WEB_URL}/banner/panther.jpg` : "/banner/panther.jpg",
                width: 1200,
                height: 630,
                alt: "Ground Connect OG Image"
            }
        ],
        locale: "en_US"
    },
    twitter: {
        card: "summary_large_image",
        site: "@GroundConnect",
        creator: "@GroundConnect",
        title: "Ground Connect - ग्रामीण भारत की आवाज़",
        description: "भारत की ग्रामीण अर्थव्यवस्था, कृषि, और नीति से जुड़ी गहराई से रिपोर्टिंग।",
        images: [
            WEB_URL ? `${WEB_URL}/banner/panther.jpg` : "/banner/panther.jpg"
        ]
    },
    verification: {
        google: ""
    },
    other: {
        canonical: WEB_URL || "https://www.groundconnect.in"
    }
};
async function RootLayout({ children, params }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$mukta_c34c98bb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].className,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    currentPath: params
                }, void 0, false, {
                    fileName: "[project]/app/layout.js",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/layout.js",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/layout.js",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/layout.js",
            lineNumber: 76,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/layout.js",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__5f138c89._.js.map