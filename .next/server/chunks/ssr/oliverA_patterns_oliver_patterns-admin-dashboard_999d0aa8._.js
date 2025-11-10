module.exports = [
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/lib/dashboard.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getActiveUser",
    ()=>getActiveUser,
    "getStats",
    ()=>getStats
]);
async function getActiveUser(token, date) {
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5000/api/v1")}/admin/active-users?year=${date}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
    const resData = await response.json();
    if (!response.ok) {
        throw new Error(resData.message || "Failed to get profile");
    }
    return resData;
}
async function getStats(token) {
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5000/api/v1")}/admin`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
    const resData = await response.json();
    if (!response.ok) {
        throw new Error(resData.message || "Failed to get stats");
    }
    return resData;
}
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/lib/contact.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCOntact",
    ()=>getCOntact
]);
async function getCOntact() {
    const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5000/api/v1")}/contracts?limit=3`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    const resData = await response.json();
    if (!response.ok) {
        throw new Error(resData.message || "Failed to get stats");
    }
    return resData;
}
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/hooks/ApiCalling.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useActiveUser",
    ()=>useActiveUser,
    "useContact",
    ()=>useContact,
    "useStats",
    ()=>useStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$dashboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/lib/dashboard.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/lib/contact.ts [app-ssr] (ecmascript)");
;
;
;
function useActiveUser(token, date) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "active-user",
            date
        ],
        queryFn: ()=>{
            if (!token) throw new Error("Token is missing");
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$dashboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActiveUser"])(token, date);
        },
        enabled: !!token
    });
}
function useStats(token) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "stats"
        ],
        queryFn: ()=>{
            if (!token) throw new Error("Token is missing");
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$dashboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStats"])(token);
        },
        enabled: !!token
    });
}
function useContact() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "contact"
        ],
        queryFn: ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCOntact"])();
        }
    });
}
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$hooks$2f$ApiCalling$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/hooks/ApiCalling.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function DashboardStats() {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const accessToken = session?.user?.accessToken || '';
    const getStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$hooks$2f$ApiCalling$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStats"])(accessToken);
    console.log(getStats.data?.data);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center py-[24px] justify-between rounded-xl border border-gray-200 bg-white px-[24px] shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-[24px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-[#5A8DEE]/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "h-6 w-6 text-[#5A8DEE]"
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-x-[12px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[20px] font-bold text-[#343A40]",
                                    children: "Active Users"
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold text-[#5A8DEE]",
                                    children: getStats.data?.data.totalUsers
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center py-[39px] justify-between rounded-xl border border-gray-200 bg-white px-[24px] shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-[24px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-[#5A8DEE]/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "h-6 w-6 text-[#5A8DEE]"
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-x-[12px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[20px] font-bold text-[#343A40]",
                                    children: "Total Blog Posts"
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold text-[#5A8DEE]",
                                    children: getStats.data?.data.totalBlogs
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center py-[39px] justify-between rounded-xl border border-gray-200 bg-white px-[24px] shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-[24px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-[#5A8DEE]/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                className: "h-6 w-6 text-[#5A8DEE]"
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-x-[12px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[20px] font-bold text-[#343A40]",
                                    children: "Total Messages"
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold text-[#5A8DEE]",
                                    children: getStats.data?.data.totalMessages
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/StatsCard.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Users
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "path",
        {
            d: "M16 3.128a4 4 0 0 1 0 7.744",
            key: "16gr8j"
        }
    ],
    [
        "path",
        {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ]
];
const Users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("users", __iconNode);
;
 //# sourceMappingURL=users.js.map
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Users",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=oliverA_patterns_oliver_patterns-admin-dashboard_999d0aa8._.js.map