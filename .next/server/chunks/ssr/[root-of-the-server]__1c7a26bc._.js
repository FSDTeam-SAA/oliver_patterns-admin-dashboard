module.exports = [
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/.next-internal/server/app/admin-dashboard/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/favicon.ico.mjs { IMAGE => \"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/favicon.ico.mjs { IMAGE => \"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
async function Page() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    console.log('users role::', session);
    if (session?.user && session?.user?.role.toLowerCase() !== 'admin') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/signin');
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/admin-dashboard/dashboard');
}
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1c7a26bc._.js.map