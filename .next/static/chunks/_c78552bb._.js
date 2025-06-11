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
function NewsletterSubscription({ variant = 'full' }) {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Improved email validation function
    const isValidEmail = (email)=>{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email.trim());
    };
    const handleSubscription = async (e)=>{
        e.preventDefault();
        const trimmedEmail = email.trim();
        // Enhanced email validation
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
                // Success case
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
    // Compact version 
    if (variant === 'compact') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md mx-auto",
            children: [
                message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `mb-3 p-3 rounded text-sm ${type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : type === 'info' ? 'bg-blue-100 text-blue-700 border border-blue-200' : 'bg-red-100 text-red-700 border border-red-200'}`,
                    children: message
                }, void 0, false, {
                    fileName: "[project]/app/components/NewsletterSubscription.jsx",
                    lineNumber: 72,
                    columnNumber: 21
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
                            className: "flex-1 px-4 py-2.5 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 placeholder-gray-400 text-sm disabled:bg-gray-100"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NewsletterSubscription.jsx",
                            lineNumber: 83,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: isLoading,
                            className: "bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-medium px-6 py-2.5 rounded-r-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm disabled:cursor-not-allowed",
                            children: isLoading ? 'Subscribing...' : 'Subscribe'
                        }, void 0, false, {
                            fileName: "[project]/app/components/NewsletterSubscription.jsx",
                            lineNumber: 92,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/NewsletterSubscription.jsx",
                    lineNumber: 82,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/NewsletterSubscription.jsx",
            lineNumber: 70,
            columnNumber: 13
        }, this);
    }
    // Full section version 
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-gradient-to-r from-green-50 to-green-100 py-12 px-6",
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
                        lineNumber: 109,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-6",
                        children: "Stay updated with the latest news and updates from the agricultural world."
                    }, void 0, false, {
                        fileName: "[project]/app/components/NewsletterSubscription.jsx",
                        lineNumber: 112,
                        columnNumber: 21
                    }, this),
                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mb-4 p-4 rounded-lg ${type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : type === 'info' ? 'bg-blue-100 text-blue-700 border border-blue-200' : 'bg-red-100 text-red-700 border border-red-200'}`,
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/app/components/NewsletterSubscription.jsx",
                        lineNumber: 117,
                        columnNumber: 25
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
                                className: "flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 placeholder-gray-400 disabled:bg-gray-100"
                            }, void 0, false, {
                                fileName: "[project]/app/components/NewsletterSubscription.jsx",
                                lineNumber: 128,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isLoading,
                                className: "bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed",
                                children: isLoading ? 'Subscribing...' : 'Subscribe'
                            }, void 0, false, {
                                fileName: "[project]/app/components/NewsletterSubscription.jsx",
                                lineNumber: 137,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/NewsletterSubscription.jsx",
                        lineNumber: 127,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/NewsletterSubscription.jsx",
                lineNumber: 108,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/NewsletterSubscription.jsx",
            lineNumber: 107,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/NewsletterSubscription.jsx",
        lineNumber: 106,
        columnNumber: 9
    }, this);
}
_s(NewsletterSubscription, "DjCF26Cr2hLn/xU3/BH1fHNKUa8=");
_c = NewsletterSubscription;
var _c;
__turbopack_context__.k.register(_c, "NewsletterSubscription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/Footer.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$services$2f$homeService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/api/services/homeService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NewsletterSubscription$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NewsletterSubscription.jsx [app-client] (ecmascript)");
"use client";
;
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$services$2f$homeService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchHomeData"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$services$2f$homeService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchHomeSettings"])()
    ]);
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$services$2f$homeService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractCategoriesFromHomeData"])(homeData);
    const logoUrl = homeSettings?.LogoUrl || "/logo.png";
    // Dynamic color scheme - defaulting to green variants
    const primaryColor = homeSettings?.PrimaryColor || "#22c55e"; // green-500
    const secondaryColor = homeSettings?.SecondaryColor || "#16a34a"; // green-600
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "bc37f798cc2334c6",
                dynamic: [
                    primaryColor,
                    secondaryColor
                ],
                children: `.footer-container.__jsx-style-dynamic-selector{--primary-color:${primaryColor};--secondary-color:${secondaryColor}}.rss-button.__jsx-style-dynamic-selector{background:linear-gradient(to right,var(--primary-color),var(--secondary-color))}.rss-button.__jsx-style-dynamic-selector:hover{background:linear-gradient(to right,var(--secondary-color),var(--primary-color))}.category-link.__jsx-style-dynamic-selector:hover{color:var(--primary-color)}.category-dot.__jsx-style-dynamic-selector{background-color:var(--primary-color)}.contact-link.__jsx-style-dynamic-selector:hover,.contact-icon.__jsx-style-dynamic-selector{color:var(--primary-color)}.social-link.__jsx-style-dynamic-selector:hover{background-color:var(--primary-color);color:#fff}.brand-name.__jsx-style-dynamic-selector{color:var(--primary-color)}.gradient-line.__jsx-style-dynamic-selector{background:linear-gradient(to right,var(--primary-color),var(--secondary-color))}.separator-line.__jsx-style-dynamic-selector{background:linear-gradient(to right,transparent,var(--primary-color),transparent)}.bg-blur-primary.__jsx-style-dynamic-selector{background-color:var(--primary-color)}.bg-blur-secondary.__jsx-style-dynamic-selector{background-color:var(--secondary-color)}`
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NewsletterSubscription$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "full"
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.jsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "bc37f798cc2334c6",
                        [
                            primaryColor,
                            secondaryColor
                        ]
                    ]
                ]) + " " + "footer-container w-full h-1 separator-line"
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.jsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "bc37f798cc2334c6",
                        [
                            primaryColor,
                            secondaryColor
                        ]
                    ]
                ]) + " " + "footer-container bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 text-gray-800 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "bc37f798cc2334c6",
                                [
                                    primaryColor,
                                    secondaryColor
                                ]
                            ]
                        ]) + " " + "absolute inset-0 opacity-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "bc37f798cc2334c6",
                                        [
                                            primaryColor,
                                            secondaryColor
                                        ]
                                    ]
                                ]) + " " + "absolute top-10 left-10 w-32 h-32 bg-blur-primary rounded-full blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "bc37f798cc2334c6",
                                        [
                                            primaryColor,
                                            secondaryColor
                                        ]
                                    ]
                                ]) + " " + "absolute bottom-20 right-20 w-48 h-48 bg-blur-secondary rounded-full blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "bc37f798cc2334c6",
                                        [
                                            primaryColor,
                                            secondaryColor
                                        ]
                                    ]
                                ]) + " " + "absolute top-1/2 left-1/3 w-24 h-24 bg-blur-primary rounded-full blur-2xl"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.jsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "bc37f798cc2334c6",
                                [
                                    primaryColor,
                                    secondaryColor
                                ]
                            ]
                        ]) + " " + "relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "bc37f798cc2334c6",
                                        [
                                            primaryColor,
                                            secondaryColor
                                        ]
                                    ]
                                ]) + " " + "main_width grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 pt-16 pb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "bc37f798cc2334c6",
                                                [
                                                    primaryColor,
                                                    secondaryColor
                                                ]
                                            ]
                                        ]) + " " + "lg:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "bc37f798cc2334c6",
                                                        [
                                                            primaryColor,
                                                            secondaryColor
                                                        ]
                                                    ]
                                                ]) + " " + "flex items-center gap-3 mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "bc37f798cc2334c6",
                                                            [
                                                                primaryColor,
                                                                secondaryColor
                                                            ]
                                                        ]
                                                    ]) + " " + "relative",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: logoUrl,
                                                        alt: "Ground Connect Logo",
                                                        sizes: " ",
                                                        width: 140,
                                                        height: 45,
                                                        className: "drop-shadow-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 115,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.jsx",
                                                    lineNumber: 114,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "bc37f798cc2334c6",
                                                        [
                                                            primaryColor,
                                                            secondaryColor
                                                        ]
                                                    ]
                                                ]) + " " + "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "bc37f798cc2334c6",
                                                                [
                                                                    primaryColor,
                                                                    secondaryColor
                                                                ]
                                                            ]
                                                        ]) + " " + "text-base leading-relaxed text-gray-700 font-medium",
                                                        children: "Your trusted source for agricultural news and rural insights."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 126,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "bc37f798cc2334c6",
                                                                [
                                                                    primaryColor,
                                                                    secondaryColor
                                                                ]
                                                            ]
                                                        ]) + " " + "text-sm leading-relaxed text-gray-600 max-w-md",
                                                        children: "Connecting farmers with the latest information, market trends, and agricultural innovations. Empowering rural communities through knowledge and sustainable farming practices."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 129,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "bc37f798cc2334c6",
                                                                [
                                                                    primaryColor,
                                                                    secondaryColor
                                                                ]
                                                            ]
                                                        ]) + " " + "pt-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/rss",
                                                            className: "rss-button group text-white text-sm font-semibold px-6 py-3 rounded-lg inline-flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRss"], {
                                                                    className: "group-hover:rotate-12 transition-transform duration-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Footer.jsx",
                                                                    lineNumber: 139,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "RSS Feeds"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Footer.jsx",
                                                            lineNumber: 135,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 134,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "bc37f798cc2334c6",
                                                [
                                                    primaryColor,
                                                    secondaryColor
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "bc37f798cc2334c6",
                                                        [
                                                            primaryColor,
                                                            secondaryColor
                                                        ]
                                                    ]
                                                ]) + " " + "relative mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "bc37f798cc2334c6",
                                                                [
                                                                    primaryColor,
                                                                    secondaryColor
                                                                ]
                                                            ]
                                                        ]) + " " + "text-xl font-bold text-gray-800 mb-2",
                                                        children: "Categories"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 149,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "bc37f798cc2334c6",
                                                                [
                                                                    primaryColor,
                                                                    secondaryColor
                                                                ]
                                                            ]
                                                        ]) + " " + "w-12 h-1 gradient-line rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 152,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 148,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "bc37f798cc2334c6",
                                                        [
                                                            primaryColor,
                                                            secondaryColor
                                                        ]
                                                    ]
                                                ]) + " " + "space-y-3",
                                                children: categories.length > 0 ? categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "bc37f798cc2334c6",
                                                                [
                                                                    primaryColor,
                                                                    secondaryColor
                                                                ]
                                                            ]
                                                        ]),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/category/${category.Slug}`,
                                                            className: "category-link group flex items-center text-gray-700 transition-all duration-300 text-sm font-medium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                        [
                                                                            "bc37f798cc2334c6",
                                                                            [
                                                                                primaryColor,
                                                                                secondaryColor
                                                                            ]
                                                                        ]
                                                                    ]) + " " + "category-dot w-2 h-2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Footer.jsx",
                                                                    lineNumber: 162,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                        [
                                                                            "bc37f798cc2334c6",
                                                                            [
                                                                                primaryColor,
                                                                                secondaryColor
                                                                            ]
                                                                        ]
                                                                    ]) + " " + "group-hover:translate-x-1 transition-transform duration-300",
                                                                    children: category.CategoryName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Footer.jsx",
                                                                    lineNumber: 163,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Footer.jsx",
                                                            lineNumber: 158,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, category.Id, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 157,
                                                        columnNumber: 21
                                                    }, this)) : [
                                                    "पहल",
                                                    "पर्यावरण",
                                                    "नीति",
                                                    "कृषि",
                                                    "संघर्ष",
                                                    "मंथन",
                                                    "समाचार"
                                                ].map((cat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "bc37f798cc2334c6",
                                                                [
                                                                    primaryColor,
                                                                    secondaryColor
                                                                ]
                                                            ]
                                                        ]) + " " + "text-sm font-medium text-gray-700",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                [
                                                                    "bc37f798cc2334c6",
                                                                    [
                                                                        primaryColor,
                                                                        secondaryColor
                                                                    ]
                                                                ]
                                                            ]) + " " + "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                        [
                                                                            "bc37f798cc2334c6",
                                                                            [
                                                                                primaryColor,
                                                                                secondaryColor
                                                                            ]
                                                                        ]
                                                                    ]) + " " + "category-dot w-2 h-2 rounded-full mr-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Footer.jsx",
                                                                    lineNumber: 183,
                                                                    columnNumber: 25
                                                                }, this),
                                                                cat
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Footer.jsx",
                                                            lineNumber: 182,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, index, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 178,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "bc37f798cc2334c6",
                                                [
                                                    primaryColor,
                                                    secondaryColor
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "bc37f798cc2334c6",
                                                        [
                                                            primaryColor,
                                                            secondaryColor
                                                        ]
                                                    ]
                                                ]) + " " + "relative mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "bc37f798cc2334c6",
                                                                [
                                                                    primaryColor,
                                                                    secondaryColor
                                                                ]
                                                            ]
                                                        ]) + " " + "text-xl font-bold text-gray-800 mb-2",
                                                        children: "Get In Touch"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 194,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "bc37f798cc2334c6",
                                                                [
                                                                    primaryColor,
                                                                    secondaryColor
                                                                ]
                                                            ]
                                                        ]) + " " + "w-12 h-1 gradient-line rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 197,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 193,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "bc37f798cc2334c6",
                                                        [
                                                            primaryColor,
                                                            secondaryColor
                                                        ]
                                                    ]
                                                ]) + " " + "space-y-4 mb-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "bc37f798cc2334c6",
                                                                [
                                                                    primaryColor,
                                                                    secondaryColor
                                                                ]
                                                            ]
                                                        ]) + " " + "flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdPin"], {
                                                                className: "contact-icon text-lg mt-0.5 flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 202,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                    [
                                                                        "bc37f798cc2334c6",
                                                                        [
                                                                            primaryColor,
                                                                            secondaryColor
                                                                        ]
                                                                    ]
                                                                ]) + " " + "text-sm text-gray-700 leading-relaxed",
                                                                children: "123 Agriculture Way, New Delhi, India"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 203,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 201,
                                                        columnNumber: 17
                                                    }, this),
                                                    homeSettings?.ContactPhone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "bc37f798cc2334c6",
                                                                [
                                                                    primaryColor,
                                                                    secondaryColor
                                                                ]
                                                            ]
                                                        ]) + " " + "flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdCall"], {
                                                                className: "contact-icon text-lg flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 210,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `tel:${homeSettings.ContactPhone}`,
                                                                className: "contact-link text-sm text-gray-700 transition-colors duration-300",
                                                                children: homeSettings.ContactPhone
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 211,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 209,
                                                        columnNumber: 19
                                                    }, this),
                                                    homeSettings?.ContactEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "bc37f798cc2334c6",
                                                                [
                                                                    primaryColor,
                                                                    secondaryColor
                                                                ]
                                                            ]
                                                        ]) + " " + "flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdMail"], {
                                                                className: "contact-icon text-lg flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 222,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `mailto:${homeSettings.ContactEmail}`,
                                                                className: "contact-link text-sm text-gray-700 transition-colors duration-300 break-all",
                                                                children: homeSettings.ContactEmail
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 223,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 221,
                                                        columnNumber: 19
                                                    }, this),
                                                    homeSettings?.WhatsAppNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "bc37f798cc2334c6",
                                                                [
                                                                    primaryColor,
                                                                    secondaryColor
                                                                ]
                                                            ]
                                                        ]) + " " + "flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {
                                                                className: "contact-icon text-lg flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 234,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `https://wa.me/${homeSettings.WhatsAppNumber.replace(/[^0-9]/g, "")}`,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "contact-link text-sm text-gray-700 transition-colors duration-300",
                                                                children: "WhatsApp Support"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 235,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 233,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 200,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "bc37f798cc2334c6",
                                                        [
                                                            primaryColor,
                                                            secondaryColor
                                                        ]
                                                    ]
                                                ]),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "bc37f798cc2334c6",
                                                                [
                                                                    primaryColor,
                                                                    secondaryColor
                                                                ]
                                                            ]
                                                        ]) + " " + "text-lg font-semibold text-gray-800 mb-4",
                                                        children: "Follow Our Journey"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 252,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "bc37f798cc2334c6",
                                                                [
                                                                    primaryColor,
                                                                    secondaryColor
                                                                ]
                                                            ]
                                                        ]) + " " + "flex gap-4",
                                                        children: [
                                                            homeSettings?.FacebookUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: homeSettings.FacebookUrl,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "social-link group w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFacebookF"], {
                                                                    className: "text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Footer.jsx",
                                                                    lineNumber: 263,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 257,
                                                                columnNumber: 21
                                                            }, this),
                                                            homeSettings?.InstagramUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: homeSettings.InstagramUrl,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "social-link group w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {
                                                                    className: "text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Footer.jsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 268,
                                                                columnNumber: 21
                                                            }, this),
                                                            homeSettings?.LinkedInUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: homeSettings.LinkedInUrl,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "social-link group w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedinIn"], {
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
                                                            homeSettings?.YouTube && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: homeSettings.YouTube,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "social-link group w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaYoutube"], {
                                                                    className: "text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Footer.jsx",
                                                                    lineNumber: 296,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 290,
                                                                columnNumber: 21
                                                            }, this),
                                                            homeSettings?.Twitter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: homeSettings.Twitter,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "social-link group w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTwitter"], {
                                                                    className: "text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Footer.jsx",
                                                                    lineNumber: 307,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Footer.jsx",
                                                                lineNumber: 301,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Footer.jsx",
                                                        lineNumber: 255,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Footer.jsx",
                                                lineNumber: 251,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "bc37f798cc2334c6",
                                        [
                                            primaryColor,
                                            secondaryColor
                                        ]
                                    ]
                                ]) + " " + "border-t border-green-200/50 bg-white/30 backdrop-blur-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "bc37f798cc2334c6",
                                            [
                                                primaryColor,
                                                secondaryColor
                                            ]
                                        ]
                                    ]) + " " + "main_width py-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "bc37f798cc2334c6",
                                                [
                                                    primaryColor,
                                                    secondaryColor
                                                ]
                                            ]
                                        ]) + " " + "justify-center flex flex-col md:flex-row justify-between items-center gap-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "bc37f798cc2334c6",
                                                    [
                                                        primaryColor,
                                                        secondaryColor
                                                    ]
                                                ]
                                            ]) + " " + "text-sm text-gray-600",
                                            children: [
                                                "© 2025",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "bc37f798cc2334c6",
                                                            [
                                                                primaryColor,
                                                                secondaryColor
                                                            ]
                                                        ]
                                                    ]) + " " + "brand-name font-semibold",
                                                    children: "Ground Connect"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.jsx",
                                                    lineNumber: 321,
                                                    columnNumber: 19
                                                }, this),
                                                ". All rights reserved."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Footer.jsx",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.jsx",
                                        lineNumber: 318,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.jsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.jsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.jsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Footer.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_c78552bb._.js.map