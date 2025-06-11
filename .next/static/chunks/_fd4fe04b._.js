(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/api/constants.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "api": (()=>api)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/api/services/homeService.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/api/constants.js [app-client] (ecmascript)");
;
async function fetchHomeData() {
    const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].homePage}?currentPage=1&recordsPerPage=50`, {
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
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].slugData}?slug=${slug}`, {
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
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].postsByAuthor}?username=${encodeURIComponent(decodedUsername)}`, {
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
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].postsByTag}?tag=${encodedTag}`, {
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
        const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].homeSettings, {
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
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].newsletter}`, {
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
        const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].rssCategories, {
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
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$api$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].rssFeed}?CategorySlug=${encodedSlug}`, {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/NewsletterSubscription.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NewsletterSubscription)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$services$2f$homeService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/api/services/homeService.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function NewsletterSubscription({ variant = 'full', colors: initialColors }) {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [colors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        primary: initialColors?.primary || '#22c55e',
        secondary: initialColors?.secondary || '#16a34a'
    });
    const isValidEmail = (email)=>{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email.trim());
    };
    const handleSubscription = async (e)=>{
        e.preventDefault();
        const trimmedEmail = email.trim();
        if (!trimmedEmail) {
            setMessage('Please enter your email address');
            setType('error');
            return;
        }
        if (!isValidEmail(trimmedEmail)) {
            setMessage('Please enter a valid email address');
            setType('error');
            return;
        }
        setIsLoading(true);
        setMessage('');
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$services$2f$homeService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeToNewsletter"])(trimmedEmail);
            if (data.rs === 1) {
                setMessage(data.res?.ResponseMessage || 'Successfully subscribed to newsletter!');
                setType('success');
                setEmail('');
            } else {
                const responseMsg = data.res?.ResponseMessage || 'Subscription failed. Please try again.';
                if (responseMsg.toLowerCase().includes('already subscribed')) {
                    setMessage('This email is already subscribed to our newsletter.');
                    setType('info');
                } else {
                    setMessage(responseMsg);
                    setType('error');
                }
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            setMessage('Something went wrong. Please try again.');
            setType('error');
        } finally{
            setIsLoading(false);
        }
    };
    // Inline styles with dynamic CSS variables
    const dynamicStyles = `
        .newsletter-container {
            --primary-color: ${colors.primary};
            --secondary-color: ${colors.secondary};
            --primary-color-10: ${colors.primary}1A;
            --primary-color-20: ${colors.primary}33;
        }
        .newsletter-gradient-bg {
            background: linear-gradient(to right, var(--primary-color-10), var(--primary-color-20));
        }
        .newsletter-btn-bg {
            background-color: var(--primary-color);
        }
        .newsletter-btn-hover:hover {
            background-color: var(--secondary-color);
        }
        .newsletter-btn-disabled:disabled {
            background-color: var(--primary-color);
            opacity: 0.6;
        }
        .newsletter-btn-focus:focus {
            ring-color: var(--primary-color);
        }
    `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: dynamicStyles
                }
            }, void 0, false, {
                fileName: "[project]/app/components/NewsletterSubscription.jsx",
                lineNumber: 95,
                columnNumber: 13
            }, this),
            variant === 'compact' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md mx-auto newsletter-container",
                children: [
                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mb-3 p-3 rounded text-sm ${type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : type === 'info' ? 'bg-blue-100 text-blue-700 border border-blue-200' : 'bg-red-100 text-red-700 border border-red-200'}`,
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/app/components/NewsletterSubscription.jsx",
                        lineNumber: 100,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubscription,
                        className: "flex gap-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                value: email,
                                onChange: (e)=>setEmail(e.target.value),
                                placeholder: "Type your Email",
                                required: true,
                                disabled: isLoading,
                                className: "flex-1 px-4 py-2.5 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 newsletter-focus-ring focus:border-transparent text-gray-700 placeholder-gray-400 text-sm disabled:bg-gray-100"
                            }, void 0, false, {
                                fileName: "[project]/app/components/NewsletterSubscription.jsx",
                                lineNumber: 111,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isLoading,
                                className: "newsletter-btn-bg newsletter-btn-hover newsletter-btn-disabled text-white font-medium px-6 py-2.5 rounded-r-md transition-colors duration-200 focus:outline-none focus:ring-2 newsletter-btn-focus text-sm disabled:cursor-not-allowed",
                                children: isLoading ? 'Subscribing...' : 'Subscribe'
                            }, void 0, false, {
                                fileName: "[project]/app/components/NewsletterSubscription.jsx",
                                lineNumber: 120,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/NewsletterSubscription.jsx",
                        lineNumber: 110,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/NewsletterSubscription.jsx",
                lineNumber: 98,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full newsletter-gradient-bg py-12 px-6 newsletter-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-sm p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-gray-800 mb-3",
                                children: "Subscribe to our Newsletter"
                            }, void 0, false, {
                                fileName: "[project]/app/components/NewsletterSubscription.jsx",
                                lineNumber: 133,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-6",
                                children: "Stay updated with the latest news and updates from the agricultural world."
                            }, void 0, false, {
                                fileName: "[project]/app/components/NewsletterSubscription.jsx",
                                lineNumber: 136,
                                columnNumber: 29
                            }, this),
                            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mb-4 p-4 rounded-lg ${type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : type === 'info' ? 'bg-blue-100 text-blue-700 border border-blue-200' : 'bg-red-100 text-red-700 border border-red-200'}`,
                                children: message
                            }, void 0, false, {
                                fileName: "[project]/app/components/NewsletterSubscription.jsx",
                                lineNumber: 141,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubscription,
                                className: "flex flex-col sm:flex-row gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        placeholder: "Your email address",
                                        required: true,
                                        disabled: isLoading,
                                        className: "flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 newsletter-focus-ring focus:border-transparent text-gray-700 placeholder-gray-400 disabled:bg-gray-100"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/NewsletterSubscription.jsx",
                                        lineNumber: 152,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isLoading,
                                        className: "newsletter-btn-bg newsletter-btn-hover newsletter-btn-disabled text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 newsletter-btn-focus focus:ring-offset-2 disabled:cursor-not-allowed",
                                        children: isLoading ? 'Subscribing...' : 'Subscribe'
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/NewsletterSubscription.jsx",
                                        lineNumber: 161,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/NewsletterSubscription.jsx",
                                lineNumber: 151,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/NewsletterSubscription.jsx",
                        lineNumber: 132,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/NewsletterSubscription.jsx",
                    lineNumber: 131,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/NewsletterSubscription.jsx",
                lineNumber: 130,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
_s(NewsletterSubscription, "WZjmsrPTxKjMhpN4mmI2tmxN1yQ=");
_c = NewsletterSubscription;
var _c;
__turbopack_context__.k.register(_c, "NewsletterSubscription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_fd4fe04b._.js.map