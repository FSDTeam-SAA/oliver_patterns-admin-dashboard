(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/lib/dashboardApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/dashboardApi.ts
__turbopack_context__.s([
    "useGetDashboardGrowth",
    ()=>useGetDashboardGrowth,
    "useGetDashboardOverview",
    ()=>useGetDashboardOverview,
    "useGetGrantDetails",
    ()=>useGetGrantDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api/v1") || 'http://localhost:5000/api/v1';
const useGetDashboardGrowth = (accessToken, year)=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'dashboardGrowth',
            year
        ],
        queryFn: {
            "useGetDashboardGrowth.useQuery": async ()=>{
                const res = await fetch("".concat(API_BASE_URL, "/dashboard/growth?year=").concat(year), {
                    headers: {
                        Authorization: "Bearer ".concat(accessToken)
                    }
                });
                if (!res.ok) throw new Error('Failed to fetch growth data');
                return res.json();
            }
        }["useGetDashboardGrowth.useQuery"],
        enabled: !!accessToken
    });
};
_s(useGetDashboardGrowth, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const useGetDashboardOverview = (accessToken)=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'dashboardOverview'
        ],
        queryFn: {
            "useGetDashboardOverview.useQuery": async ()=>{
                const res = await fetch("".concat(API_BASE_URL, "/dashboard/overview"), {
                    headers: {
                        Authorization: "Bearer ".concat(accessToken)
                    }
                });
                if (!res.ok) throw new Error('Failed to fetch overview data');
                return res.json();
            }
        }["useGetDashboardOverview.useQuery"],
        enabled: !!accessToken
    });
};
_s1(useGetDashboardOverview, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const useGetGrantDetails = (grantId, accessToken)=>{
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'grantDetails',
            grantId
        ],
        queryFn: {
            "useGetGrantDetails.useQuery": async ()=>{
                const res = await fetch("".concat(API_BASE_URL, "/grant/").concat(grantId), {
                    headers: {
                        Authorization: "Bearer ".concat(accessToken)
                    }
                });
                if (!res.ok) throw new Error('Failed to fetch grant details');
                return res.json();
            }
        }["useGetGrantDetails.useQuery"],
        enabled: !!accessToken && !!grantId
    });
};
_s2(useGetGrantDetails, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-transparent text-card-foreground  flex flex-col gap-6 rounded-none border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6 ', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/statsCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/dashboard/StatsCards.tsx
__turbopack_context__.s([
    "default",
    ()=>StatsCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/card.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function StatsCards(param) {
    let { totalUsers, totalGrants, totalRevenue, activeSubscriptions, isLoading } = param;
    const stats = [
        {
            title: 'Total Users',
            value: totalUsers.toLocaleString(),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            bgColor: 'bg-blue-50',
            iconColor: '#0C2661'
        },
        {
            title: 'Total Grants',
            value: totalGrants.toLocaleString(),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
            bgColor: 'bg-blue-50',
            iconColor: '#0C2661'
        },
        {
            title: 'Revenue',
            value: "$".concat(totalRevenue.toLocaleString()),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
            bgColor: 'bg-blue-50',
            iconColor: '#0C2661'
        },
        {
            title: 'Active Subscriptions',
            value: activeSubscriptions.toLocaleString(),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"],
            bgColor: 'bg-blue-50',
            iconColor: '#0C2661'
        }
    ];
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
            children: [
                1,
                2,
                3,
                4
            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "animate-pulse",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 bg-gray-200 rounded w-20 mb-2"
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/statsCards.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-8 bg-gray-200 rounded w-24"
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/statsCards.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/statsCards.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this)
                }, i, false, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/statsCards.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/statsCards.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
        children: stats.map((stat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border hover:shadow-md transition rounded-md shadow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-gray-600 font-medium mb-3",
                                        children: stat.title
                                    }, void 0, false, {
                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/statsCards.tsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-3xl font-bold text-[#0C2661]",
                                        children: stat.value
                                    }, void 0, false, {
                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/statsCards.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/statsCards.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 rounded-full ".concat(stat.bgColor),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                    className: "w-6 h-6 ".concat(stat.iconColor)
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/statsCards.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/statsCards.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/statsCards.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/statsCards.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this)
            }, idx, false, {
                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/statsCards.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/statsCards.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c = StatsCards;
var _c;
__turbopack_context__.k.register(_c, "StatsCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Select(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Select;
function SelectGroup(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = SelectGroup;
function SelectValue(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = SelectValue;
function SelectTrigger(param) {
    let { className, size = "default", children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c3 = SelectTrigger;
function SelectContent(param) {
    let { className, children, position = "popper", ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c4 = SelectContent;
function SelectLabel(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c5 = SelectLabel;
function SelectItem(param) {
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c6 = SelectItem;
function SelectSeparator(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/dashboard/DashboardCharts.tsx
__turbopack_context__.s([
    "default",
    ()=>DashboardCharts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function DashboardCharts(param) {
    let { data, selectedYear, onYearChange, isLoading } = param;
    const currentYear = new Date().getFullYear();
    const years = [
        currentYear,
        currentYear - 1,
        currentYear - 2
    ];
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6",
            children: [
                1,
                2
            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "animate-pulse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-6 bg-gray-200 rounded w-32"
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-64 bg-gray-100 rounded"
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end mb-4 mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    value: selectedYear.toString(),
                    onValueChange: (value)=>onYearChange(Number(value)),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            className: "w-52",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: "Select year"
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: years.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: year.toString(),
                                    children: year
                                }, year, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border shadow rounded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-lg font-semibold text-[#0C2661]",
                                    children: "User Growth"
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: 300,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                        data: data,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                strokeDasharray: "3 3",
                                                stroke: "#f0f0f0"
                                            }, void 0, false, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "month",
                                                tick: {
                                                    fontSize: 12
                                                },
                                                label: {
                                                    value: 'Users',
                                                    position: 'insideBottom',
                                                    offset: -5
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                tick: {
                                                    fontSize: 12
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                contentStyle: {
                                                    backgroundColor: '#fff',
                                                    border: '1px solid #e5e7eb',
                                                    borderRadius: '6px'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                type: "monotone",
                                                dataKey: "userCount",
                                                stroke: "#0C2661",
                                                strokeWidth: 2,
                                                dot: {
                                                    fill: '#ffffff',
                                                    r: 4
                                                },
                                                activeDot: {
                                                    r: 6
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border shadow-sm rounded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-lg font-semibold text-[#0C2661]",
                                    children: "Revenue Trend"
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: 300,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                        data: data,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                strokeDasharray: "3 3",
                                                stroke: "#f0f0f0"
                                            }, void 0, false, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                dataKey: "month",
                                                tick: {
                                                    fontSize: 12
                                                },
                                                label: {
                                                    value: 'Revenue',
                                                    position: 'insideBottom',
                                                    offset: -5
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                tick: {
                                                    fontSize: 12
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                contentStyle: {
                                                    backgroundColor: '#fff',
                                                    border: '1px solid #e5e7eb',
                                                    borderRadius: '6px'
                                                },
                                                formatter: (value)=>[
                                                        "$".concat(value),
                                                        'Revenue'
                                                    ]
                                            }, void 0, false, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                                lineNumber: 142,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                type: "monotone",
                                                dataKey: "revenue",
                                                stroke: "#0C2661",
                                                strokeWidth: 2,
                                                dot: {
                                                    fill: '#ffffff',
                                                    r: 4
                                                },
                                                activeDot: {
                                                    r: 6
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c = DashboardCharts;
var _c;
__turbopack_context__.k.register(_c, "DashboardCharts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer ", {
    variants: {
        variant: {
            default: 'bg-[#5A8DEE] px-6 py-3 rounded text-primary-foreground shadow-xs hover:bg-[#5A8DEE]/80',
            destructive: 'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background rounded  shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-6 py-2.5 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button(param) {
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Dialog(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent(param) {
    let { className, children, showCloseButton = true, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/dashboard/RecentGrantsTable.tsx
__turbopack_context__.s([
    "default",
    ()=>RecentGrantsTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$dashboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/lib/dashboardApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function RecentGrantsTable(param) {
    let { grants, isLoading } = param;
    var _session_data_user, _session_data;
    _s();
    const [selectedGrantId, setSelectedGrantId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDetailsOpen, setIsDetailsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const accessToken = (session === null || session === void 0 ? void 0 : (_session_data = session.data) === null || _session_data === void 0 ? void 0 : (_session_data_user = _session_data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.accessToken) || '';
    const { data: grantDetailsData, isLoading: isLoadingDetails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$dashboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetGrantDetails"])(selectedGrantId, accessToken);
    const viewingGrant = grantDetailsData === null || grantDetailsData === void 0 ? void 0 : grantDetailsData.data;
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };
    const handleView = (grantId)=>{
        setSelectedGrantId(grantId);
        setIsDetailsOpen(true);
    };
    const handleDetailsClose = (open)=>{
        setIsDetailsOpen(open);
        if (!open) {
            setSelectedGrantId(null);
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "flex flex-row items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-lg font-semibold",
                            children: "Recent Grants"
                        }, void 0, false, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 w-16 bg-gray-200 rounded animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            1,
                            2,
                            3
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-16 bg-gray-100 rounded animate-pulse"
                            }, i, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "flex flex-row items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-lg font-semibold",
                                children: "Recent Grants"
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin-dashboard/grant-management",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "link",
                                    className: "text-[#0C2661] text-base p-0",
                                    children: "See All"
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: grants.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 text-center py-8",
                                children: "No recent grants found"
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this) : grants.map((grant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-medium text-gray-900 mb-1",
                                                    children: grant.title
                                                }, void 0, false, {
                                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4 text-sm text-gray-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Grant ID: ",
                                                                grant._id.slice(-8)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Deadline: ",
                                                                formatDate(grant.deadline)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-[#0C2661] bg-blue-50 px-3 py-1 rounded-full",
                                                    children: grant.funding
                                                }, void 0, false, {
                                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "sm",
                                                    variant: "ghost",
                                                    className: "text-blue-600 hover:text-blue-800",
                                                    onClick: ()=>handleView(grant._id),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                            lineNumber: 107,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, grant._id, true, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isDetailsOpen,
                onOpenChange: handleDetailsClose,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "!max-w-4xl w-full rounded-xl shadow-lg h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            className: "bg-white sticky top-0 z-10 pb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-2xl font-semibold text-gray-900",
                                children: "Grant Details"
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        isLoadingDetails ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 py-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-8 bg-gray-200 rounded animate-pulse w-3/4"
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 bg-gray-200 rounded animate-pulse w-1/2"
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 bg-gray-200 rounded animate-pulse w-2/3"
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-32 bg-gray-200 rounded animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this) : viewingGrant && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 py-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-gray-900 mb-3",
                                            children: viewingGrant.title
                                        }, void 0, false, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                            lineNumber: 148,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-gray-700",
                                                            children: "Type:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 text-gray-600",
                                                            children: viewingGrant.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-gray-700",
                                                            children: "Funding:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 text-gray-600",
                                                            children: viewingGrant.funding
                                                        }, void 0, false, {
                                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-gray-700",
                                                            children: "Deadline:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 text-gray-600",
                                                            children: new Date(viewingGrant.deadline).toLocaleDateString('en-US', {
                                                                month: 'short',
                                                                day: '2-digit',
                                                                year: 'numeric'
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-gray-700",
                                                            children: "Status:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 px-3 py-1 rounded-full text-xs font-medium ".concat(viewingGrant.status === 'open' ? 'bg-green-100 text-green-800' : viewingGrant.status === 'upcoming' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'),
                                                            children: viewingGrant.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-gray-700",
                                                            children: "Location:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 text-gray-600",
                                                            children: viewingGrant.location
                                                        }, void 0, false, {
                                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-gray-700",
                                                            children: "Industry:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 text-gray-600",
                                                            children: viewingGrant.industry
                                                        }, void 0, false, {
                                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                            lineNumber: 152,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                    lineNumber: 147,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-lg mb-2 text-gray-900",
                                            children: "Activity"
                                        }, void 0, false, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                            lineNumber: 224,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700",
                                            children: viewingGrant.activity
                                        }, void 0, false, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                            lineNumber: 227,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                    lineNumber: 223,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-lg mb-2 text-gray-900",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                            lineNumber: 232,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 leading-relaxed",
                                            children: viewingGrant.description
                                        }, void 0, false, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                            lineNumber: 235,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                    lineNumber: 231,
                                    columnNumber: 17
                                }, this),
                                viewingGrant.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-lg mb-2 text-gray-900",
                                            children: "Image"
                                        }, void 0, false, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                            lineNumber: 243,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: viewingGrant.imageUrl,
                                            alt: viewingGrant.title,
                                            width: 600,
                                            height: 400,
                                            className: "w-full max-w-md rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                            lineNumber: 246,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                    lineNumber: 242,
                                    columnNumber: 19
                                }, this),
                                viewingGrant.fileUrls && viewingGrant.fileUrls.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-lg mb-2 text-gray-900",
                                            children: "Attachments"
                                        }, void 0, false, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                            lineNumber: 259,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: viewingGrant.fileUrls.map((url, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: url,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "text-blue-600 hover:underline",
                                                        children: [
                                                            "Document ",
                                                            index + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 29
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 27
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                            lineNumber: 262,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                                    lineNumber: 258,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                            lineNumber: 145,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(RecentGrantsTable, "KVLl2xZazgflSMJYVDaeI7gW/Bc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$dashboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetGrantDetails"]
    ];
});
_c = RecentGrantsTable;
var _c;
__turbopack_context__.k.register(_c, "RecentGrantsTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/dashboard/RecentSubscribersTable.tsx
__turbopack_context__.s([
    "default",
    ()=>RecentSubscribersTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function RecentSubscribersTable(param) {
    let { subscribers, isLoading } = param;
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "border shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "flex flex-row items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-lg font-semibold",
                            children: "Recent Subscribers"
                        }, void 0, false, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 w-16 bg-gray-200 rounded animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            1,
                            2,
                            3
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-16 bg-gray-100 rounded animate-pulse"
                            }, i, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "border shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "flex flex-row items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-lg font-semibold",
                        children: "Recent Subscribers"
                    }, void 0, false, {
                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/admin-dashboard/subscription/pricing-plan",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "link",
                            className: "text-[#0C2661] text-base p-0",
                            children: "See All"
                        }, void 0, false, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: subscribers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 text-center py-8",
                        children: "No recent subscribers found"
                    }, void 0, false, {
                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this) : subscribers.map((subscriber)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-medium text-gray-900 mb-1",
                                            children: subscriber.name
                                        }, void 0, false, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                                            lineNumber: 73,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 text-sm text-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: subscriber.email
                                                }, void 0, false, {
                                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Started: ",
                                                        formatDate(subscriber.subscriptionStart)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium capitalize px-3 py-1 rounded-full bg-blue-50 text-[#0C2661]",
                                            children: [
                                                subscriber.planName,
                                                " Plan"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium px-2.5 py-0.5 rounded-full ".concat(subscriber.hasActiveSubscription ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'),
                                            children: subscriber.planStatus
                                        }, void 0, false, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, subscriber._id, true, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                            lineNumber: 68,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = RecentSubscribersTable;
var _c;
__turbopack_context__.k.register(_c, "RecentSubscribersTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/dashboard/DashboardPage.tsx
__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$dashboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/lib/dashboardApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$app$2f$admin$2d$dashboard$2f$dashboard$2f$_components$2f$statsCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/statsCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$app$2f$admin$2d$dashboard$2f$dashboard$2f$_components$2f$dashboardCharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardCharts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$app$2f$admin$2d$dashboard$2f$dashboard$2f$_components$2f$recentGrantsTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentGrantsTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$app$2f$admin$2d$dashboard$2f$dashboard$2f$_components$2f$recentSubscriberTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/recentSubscriberTable.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function DashboardPage() {
    var _session_data_user, _session_data;
    _s();
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentYear);
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const accessToken = (session === null || session === void 0 ? void 0 : (_session_data = session.data) === null || _session_data === void 0 ? void 0 : (_session_data_user = _session_data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.accessToken) || '';
    // Fetch overview data
    const { data: overviewData, isLoading: overviewLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$dashboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetDashboardOverview"])(accessToken);
    // Fetch growth data
    const { data: growthData, isLoading: growthLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$dashboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetDashboardGrowth"])(accessToken, selectedYear);
    const overview = overviewData === null || overviewData === void 0 ? void 0 : overviewData.data;
    const growth = (growthData === null || growthData === void 0 ? void 0 : growthData.data) || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-full px-5 mx-auto pb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$app$2f$admin$2d$dashboard$2f$dashboard$2f$_components$2f$statsCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    totalUsers: (overview === null || overview === void 0 ? void 0 : overview.totalUsers) || 0,
                    totalGrants: (overview === null || overview === void 0 ? void 0 : overview.totalGrants) || 0,
                    totalRevenue: (overview === null || overview === void 0 ? void 0 : overview.totalRevenue) || 0,
                    activeSubscriptions: (overview === null || overview === void 0 ? void 0 : overview.activeSubscriptions) || 0,
                    isLoading: overviewLoading
                }, void 0, false, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardPage.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$app$2f$admin$2d$dashboard$2f$dashboard$2f$_components$2f$dashboardCharts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    data: growth,
                    selectedYear: selectedYear,
                    onYearChange: setSelectedYear,
                    isLoading: growthLoading
                }, void 0, false, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardPage.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$app$2f$admin$2d$dashboard$2f$dashboard$2f$_components$2f$recentGrantsTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            grants: (overview === null || overview === void 0 ? void 0 : overview.recentGrants) || [],
                            isLoading: overviewLoading
                        }, void 0, false, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardPage.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$app$2f$admin$2d$dashboard$2f$dashboard$2f$_components$2f$recentSubscriberTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            subscribers: (overview === null || overview === void 0 ? void 0 : overview.recentSubscribers) || [],
                            isLoading: overviewLoading
                        }, void 0, false, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardPage.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardPage.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardPage.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/dashboard/_components/dashboardPage.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "BxgLZjphqrWB8lqhUD8RMDuTwg4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$dashboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetDashboardOverview"],
        __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$dashboardApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetDashboardGrowth"]
    ];
});
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=oliverA_patterns_oliver_patterns-admin-dashboard_src_96f433c1._.js.map