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
// components/TopBar.js
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
// TopBar Component
const TopBar = ({ homeSettings })=>{
    const links = [];
    if (homeSettings?.ContactPhone) {
        links.push({
            ico: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FiPhone"], {}, void 0, false, {
                fileName: "[project]/app/components/TopBar.jsx",
                lineNumber: 13,
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
                lineNumber: 21,
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
                lineNumber: 29,
                columnNumber: 12
            }, this),
            label: "WhatsApp",
            link: `https://wa.me/${homeSettings.WhatsAppNumber.replace(/[^0-9]/g, "")}`
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "greenBg text-white text-sm flex justify-end gap-6 px-4 py-4",
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
                        lineNumber: 43,
                        columnNumber: 13
                    }, this)
                }, key, false, {
                    fileName: "[project]/app/components/TopBar.jsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/app/components/TopBar.jsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/TopBar.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = TopBar;
}}),
"[project]/app/components/NavMenu.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
const NavMenu = ({ pathname, categories = [] })=>{
    const allNavLinks = categories.filter((category)=>category.ShowOnMenu && category.IsActive).sort((a, b)=>(a.MenuOrder || 999) - (b.MenuOrder || 999)).map((category)=>({
            label: category.CategoryName,
            href: `/category/${category.Slug}`,
            id: category.Id
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex space-x-8 lg:text-[20px] font-semibold items-center",
        children: allNavLinks.map((link, idx)=>{
            const isActive = pathname === link.href;
            if (link.submenu) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative group inline-block",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "greenColor font-semibold relative inline-block cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "group-hover:text-green-600 transition-colors duration-300",
                                children: link.label
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavMenu.jsx",
                                lineNumber: 22,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavMenu.jsx",
                            lineNumber: 21,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "   absolute top-full -left-20 mt-0 w-[180px]   opacity-0 scale-95 translate-y-2 pointer-events-none   group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto   transition-all duration-300 ease-out   rounded-xl border border-gray-200 bg-white/90 backdrop-blur-md shadow-2xl z-50   ",
                            children: link.submenu.map((sublink, i)=>{
                                const isSubActive = pathname === sublink.href;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: sublink.href,
                                    className: `relative block px-5 py-3 text-[17px] font-medium text-gray-800 tracking-wide
                        hover:bg-gray-100 hover:text-green-600 transition-all duration-200 rounded-md
                        ${isSubActive ? "text-green-600 font-semibold bg-gray-50" : ""}
                      `,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: sublink.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/NavMenu.jsx",
                                        lineNumber: 50,
                                        columnNumber: 23
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/app/components/NavMenu.jsx",
                                    lineNumber: 39,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavMenu.jsx",
                            lineNumber: 27,
                            columnNumber: 15
                        }, this)
                    ]
                }, link.id || idx, true, {
                    fileName: "[project]/app/components/NavMenu.jsx",
                    lineNumber: 20,
                    columnNumber: 13
                }, this);
            } else {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: link.href,
                    className: `greenColor font-semibold relative inline-block ${isActive ? "active-underline" : ""}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: link.label
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavMenu.jsx",
                            lineNumber: 65,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "underline-line"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavMenu.jsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this)
                    ]
                }, link.id || idx, true, {
                    fileName: "[project]/app/components/NavMenu.jsx",
                    lineNumber: 59,
                    columnNumber: 13
                }, this);
            }
        })
    }, void 0, false, {
        fileName: "[project]/app/components/NavMenu.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = NavMenu;
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
            next: {
                revalidate: 3600
            }
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
// components/Header.js
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "border-b border-gray-200 shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:block hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TopBar$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    homeSettings: homeSettings
                }, void 0, false, {
                    fileName: "[project]/app/components/Header.jsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Header.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex main_width items-center justify-between py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative lg:w-[220px] md:w-[180px] w-[150px] md:h-[90px] h-[80px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: logoUrl,
                                alt: "Ground Connect Logo",
                                fill: true,
                                sizes: "100%",
                                className: "w-full h-full object-cover",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/app/components/Header.jsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:block hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavMenu$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            pathname: currentPath,
                            categories: categories
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Header.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Header.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Header.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Header;
}}),
"[project]/app/components/Footer.jsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/Footer.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/Footer.jsx <module evaluation>", "default");
}}),
"[project]/app/components/Footer.jsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/components/Footer.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/components/Footer.jsx", "default");
}}),
"[project]/app/components/Footer.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$jsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/components/Footer.jsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$jsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/app/components/Footer.jsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$jsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/app/layout.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RootLayout),
    "metadata": (()=>metadata)
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
const metadata = {
    title: "Ground Connect",
    description: "प्रधानमंत्री नरेंद्र मोदी ने इस महत्वाकांक्षी ...",
    icons: {
        icon: "/fav.png"
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
        "FIEO"
    ],
    authors: [
        {
            name: "Codingest"
        }
    ],
    robots: "index, follow",
    openGraph: {
        locale: "en_US",
        siteName: "Ground Connect",
        type: "article",
        title: "ब्रिटेन के साथ मुक्त व्यापार समझौते के भारतीय अर्थव्यवस्था और कृषि के लिए क्या मायने?",
        description: "प्रधानमंत्री नरेंद्र मोदी ने इस महत्वाकांक्षी ...",
        url: "https://www.groundconnect.in/article/crop-damage-due-to-heavy-rain-government-is-providing-compensation-2938635",
        images: [
            {
                url: "https://demo.nuovasoft.in/aslibharat/wp-content/uploads/2023/09/Picture1.png",
                width: 750,
                height: 422
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        site: "@RuralVoice",
        creator: "@Ajeet Singh",
        title: "ब्रिटेन के साथ मुक्त व्यापार समझौते के भारतीय अर्थव्यवस्था और कृषि के लिए क्या मायने?",
        description: "प्रधानमंत्री नरेंद्र मोदी ने इस महत्वाकांक्षी ...",
        images: [
            "https://demo.nuovasoft.in/aslibharat/wp-content/uploads/2023/09/Picture1.png"
        ]
    },
    verification: {
        google: ""
    },
    other: {
        canonical: "https://www.groundconnect.in/article/crop-damage-due-to-heavy-rain-government-is-providing-compensation-2938635",
        shortcutIcon: "https://demo.nuovasoft.in/aslibharat/wp-content/uploads/2023/09/Picture1.png"
    }
};
async function RootLayout({ children, params }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$mukta_c34c98bb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable}  `,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    currentPath: params
                }, void 0, false, {
                    fileName: "[project]/app/layout.js",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/layout.js",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/layout.js",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/layout.js",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/layout.js",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__05bf6267._.js.map