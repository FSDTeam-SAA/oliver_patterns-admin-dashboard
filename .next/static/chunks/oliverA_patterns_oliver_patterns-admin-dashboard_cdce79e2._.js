(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-transparent text-card-foreground  flex flex-col gap-6 rounded border py-6 shadow-sm', className),
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
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ==================== FILE: app/admin-dashboard/grant-management/_components/GrantTable.tsx ====================
__turbopack_context__.s([
    "default",
    ()=>GrantTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function GrantTable(param) {
    let { grants, onView, onEdit, onDelete, isLoading, currentPage, totalPages, totalData, hasNextPage, hasPrevPage, onPageChange } = param;
    _s();
    const [selectedGrant, setSelectedGrant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDialogOpen, setIsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleDeleteClick = (grant)=>{
        setSelectedGrant(grant);
        setIsDialogOpen(true);
    };
    const handleDeleteConfirm = ()=>{
        if (selectedGrant) {
            onDelete(selectedGrant._id);
            setSelectedGrant(null);
            setIsDialogOpen(false);
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
            }, void 0, false, {
                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this);
    }
    if (!grants || grants.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12 text-gray-500 bg-gray-50 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg",
                    children: "No grants found"
                }, void 0, false, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm mt-1",
                    children: "Create your first grant to get started"
                }, void 0, false, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this);
    }
    function getPageNumbers() {
        const pages = [];
        const maxPagesToShow = 5;
        if (totalPages <= maxPagesToShow) {
            for(let i = 1; i <= totalPages; i++){
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for(let i = 1; i <= 3; i++)pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for(let i = totalPages - 2; i <= totalPages; i++)pages.push(i);
            } else {
                pages.push(1);
                pages.push('...');
                pages.push(currentPage - 1);
                pages.push(currentPage);
                pages.push(currentPage + 1);
                pages.push('...');
                pages.push(totalPages);
            }
        }
        return pages;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-50 border-b",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "Title"
                                    }, void 0, false, {
                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "Type"
                                    }, void 0, false, {
                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "Funding"
                                    }, void 0, false, {
                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "Deadline"
                                    }, void 0, false, {
                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "bg-white divide-y divide-gray-200",
                            children: grants.map((grant, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-gray-50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-w-xs",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-gray-900 line-clamp-2",
                                                    children: grant.title
                                                }, void 0, false, {
                                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                                lineNumber: 151,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-sm text-gray-600 whitespace-nowrap",
                                            children: grant.type
                                        }, void 0, false, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap",
                                            children: grant.funding
                                        }, void 0, false, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ".concat(grant.status === 'Open' ? 'bg-green-100 text-green-800' : grant.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'),
                                                children: grant.status
                                            }, void 0, false, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                                lineNumber: 170,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-sm text-gray-500 whitespace-nowrap",
                                            children: grant.deadline
                                        }, void 0, false, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onView(grant),
                                                        className: "text-blue-600 hover:text-blue-800 transition-colors p-1 rounded",
                                                        title: "View",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onEdit(grant),
                                                        className: "text-green-600 hover:text-green-800 transition-colors p-1 rounded",
                                                        title: "Edit",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDeleteClick(grant),
                                                        className: "text-red-600 hover:text-red-800 transition-colors p-1 rounded",
                                                        title: "Delete",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, grant._id, true, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isDialogOpen,
                onOpenChange: setIsDialogOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Are You Sure?"
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Are you sure you want to delete this Grant?"
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogClose"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "destructive",
                                    onClick: handleDeleteConfirm,
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            totalPages > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white px-6 flex items-center container mx-auto  justify-between border-t py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-md text-gray-600",
                        children: [
                            "Showing ",
                            (currentPage - 1) * 10 + 1,
                            " to",
                            ' ',
                            Math.min(currentPage * 10, totalData),
                            " of ",
                            totalData,
                            " results"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                        lineNumber: 245,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: getPageNumbers().map((page, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>typeof page === 'number' && onPageChange(page),
                                disabled: page === '...',
                                className: "px-3 py-1 rounded text-sm font-medium min-w-[32px] ".concat(page === currentPage ? 'bg-blue-600 text-white' : page === '...' ? 'text-gray-400 cursor-default' : 'text-gray-700 hover:bg-gray-100'),
                                children: page
                            }, index, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                                lineNumber: 253,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                        lineNumber: 250,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_s(GrantTable, "QxpbWdRObo4tye52Ezks230meHg=");
_c = GrantTable;
var _c;
__turbopack_context__.k.register(_c, "GrantTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/data/demoGrants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "demoGrantsData",
    ()=>demoGrantsData
]);
const demoGrantsData = {
    grants: [
        {
            _id: '1',
            title: 'Small Business Innovation Grant',
            type: 'Business',
            funding: '$25,000',
            deadline: 'Jan 15, 2025',
            eligibility: 'Small Enterprises',
            applicationProcess: 'Application must be submitted online through the Business Licensing Portal. Required documents include business license, financial statements, and project proposal.',
            description: 'The Small Business Digital Adoption Grant provides financial support of up to $25,000 to eligible small businesses seeking to adopt digital technologies. This grant is meant to offset the implementation costs of digital solutions that will help in a higher level of efficiency. The program encourages businesses to integrate cutting-edge technology into their operations to boost productivity and competitiveness in the digital economy. This grant covers a wide range of expenses, including software implementation, training, and consulting services.',
            status: 'Open',
            createdAt: '2024-06-15T10:30:00Z',
            updatedAt: '2024-06-15T10:30:00Z'
        },
        {
            _id: '2',
            title: 'Community Development Fund',
            type: 'Community',
            funding: '$50,000',
            deadline: 'Jan 20, 2025',
            eligibility: 'Non-profit Organizations',
            applicationProcess: 'Submit proposal through community portal with required documentation including organization registration and project plan.',
            description: 'This fund supports community-driven initiatives that promote social welfare, infrastructure development, and community engagement. Projects must demonstrate clear community benefit and sustainable impact.',
            status: 'Open',
            createdAt: '2024-07-01T14:20:00Z',
            updatedAt: '2024-07-01T14:20:00Z'
        },
        {
            _id: '3',
            title: 'Women in Tech Leadership Grant',
            type: 'Technology',
            funding: '$15,000',
            deadline: 'Feb 10, 2025',
            eligibility: 'Women Entrepreneurs',
            applicationProcess: 'Online application with business plan, proof of technology focus, and leadership experience documentation.',
            description: 'Supporting women-led technology startups and initiatives. This grant aims to bridge the gender gap in technology leadership by providing financial support and mentorship opportunities.',
            status: 'Closed',
            createdAt: '2024-05-20T09:15:00Z',
            updatedAt: '2024-12-01T16:45:00Z'
        },
        {
            _id: '4',
            title: 'Arts and Culture Grant',
            type: 'Arts',
            funding: '$18,000',
            deadline: 'Jan 25, 2025',
            eligibility: 'Artists and Cultural Organizations',
            applicationProcess: 'Submit portfolio, project proposal, and budget breakdown through the cultural affairs department website.',
            description: 'Funding for artistic projects, cultural events, and heritage preservation initiatives. Priority given to projects that promote cultural diversity and community engagement.',
            status: 'Open',
            createdAt: '2024-08-10T11:00:00Z',
            updatedAt: '2024-08-10T11:00:00Z'
        },
        {
            _id: '5',
            title: 'Environmental Sustainability Fund',
            type: 'Environment',
            funding: '$75,000',
            deadline: 'Jan 30, 2025',
            eligibility: 'Environmental Organizations',
            applicationProcess: 'Detailed proposal submission including environmental impact assessment and sustainability plan required.',
            description: 'Supporting projects focused on climate action, renewable energy, waste reduction, and ecosystem conservation. Projects must demonstrate measurable environmental benefits.',
            status: 'Open',
            createdAt: '2024-06-05T08:30:00Z',
            updatedAt: '2024-06-05T08:30:00Z'
        },
        {
            _id: '6',
            title: 'Healthcare Innovation Initiative',
            type: 'Healthcare',
            funding: '$100,000',
            deadline: 'Jan 08, 2025',
            eligibility: 'Healthcare Providers',
            applicationProcess: 'Application through healthcare portal with medical credentials, project feasibility study, and budget justification.',
            description: 'Funding innovative healthcare solutions that improve patient care, accessibility, and health outcomes. Focus on technology-driven healthcare improvements and preventive care initiatives.',
            status: 'Upcoming',
            createdAt: '2024-09-12T13:45:00Z',
            updatedAt: '2024-09-12T13:45:00Z'
        },
        {
            _id: '7',
            title: 'Education Innovation Grant',
            type: 'Education',
            funding: '$40,000',
            deadline: 'Apr 05, 2025',
            eligibility: 'Educational Institutions',
            applicationProcess: 'Submit curriculum innovation plan, implementation timeline, and expected outcomes through education department portal.',
            description: 'Supporting innovative teaching methods, educational technology adoption, and curriculum development. Priority for projects that address educational equity and student engagement.',
            status: 'Open',
            createdAt: '2024-07-22T10:20:00Z',
            updatedAt: '2024-07-22T10:20:00Z'
        },
        {
            _id: '8',
            title: 'Technology Startup Fund',
            type: 'Technology',
            funding: '$200,000',
            deadline: 'Jan 15, 2025',
            eligibility: 'Tech Startups',
            applicationProcess: 'Complete business plan, financial projections, technical documentation, and pitch deck submission required.',
            description: 'Seed funding for early-stage technology startups with innovative solutions. Includes mentorship, networking opportunities, and access to co-working spaces.',
            status: 'Upcoming',
            createdAt: '2024-10-01T15:00:00Z',
            updatedAt: '2024-10-01T15:00:00Z'
        }
    ],
    pagination: {
        currentPage: 1,
        totalPages: 1,
        totalData: 8,
        hasNextPage: false,
        hasPrevPage: false
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ==================== FILE: app/admin-dashboard/grant-management/_components/GrantManagement.tsx ====================
__turbopack_context__.s([
    "default",
    ()=>GrantManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$app$2f$admin$2d$dashboard$2f$grant$2d$management$2f$_components$2f$grantTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$data$2f$demoGrants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/data/demoGrants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/oliverA_patterns/oliver_patterns-admin-dashboard/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
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
function GrantManagement() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isDetailsOpen, setIsDetailsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewingGrant, setViewingGrant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [grants, setGrants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$data$2f$demoGrants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["demoGrantsData"].grants);
    const handleAddGrant = ()=>{
        router.push('/admin-dashboard/grant-management/add');
    };
    const handleEditGrant = (grant)=>{
        router.push("/admin-dashboard/grant-management/edit/".concat(grant._id));
    };
    const handleViewGrant = (grant)=>{
        setViewingGrant(grant);
        setIsDetailsOpen(true);
    };
    const handleDeleteGrant = (grantId)=>{
        // Demo: Remove from local state
        setGrants(grants.filter((g)=>g._id !== grantId));
        __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Grant deleted successfully');
    };
    const handlePageChange = (page)=>{
        setCurrentPage(page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const pagination = __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$data$2f$demoGrants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["demoGrantsData"].pagination;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: "Grants Management"
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500",
                                    children: "Manage all grants in the system"
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$app$2f$admin$2d$dashboard$2f$grant$2d$management$2f$_components$2f$grantTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                grants: grants,
                                onView: handleViewGrant,
                                onEdit: handleEditGrant,
                                onDelete: handleDeleteGrant,
                                isLoading: false,
                                currentPage: currentPage,
                                totalPages: pagination.totalPages,
                                totalData: pagination.totalData,
                                hasNextPage: pagination.hasNextPage,
                                hasPrevPage: pagination.hasPrevPage,
                                onPageChange: handlePageChange
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                    open: isDetailsOpen,
                    onOpenChange: setIsDetailsOpen,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                        className: "!max-w-4xl w-full h-[90vh] overflow-y-auto rounded-xl shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                className: "sticky top-0 bg-white border-b pb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-2xl font-semibold text-gray-900",
                                    children: "Grant Details"
                                }, void 0, false, {
                                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            viewingGrant && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 py-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-900 mb-3",
                                                children: viewingGrant.title
                                            }, void 0, false, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                lineNumber: 119,
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
                                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 text-gray-600",
                                                                children: viewingGrant.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                                lineNumber: 125,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-gray-700",
                                                                children: "Funding:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 text-gray-600",
                                                                children: viewingGrant.funding
                                                            }, void 0, false, {
                                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-gray-700",
                                                                children: "Deadline:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 text-gray-600",
                                                                children: viewingGrant.deadline
                                                            }, void 0, false, {
                                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-gray-700",
                                                                children: "Status:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 px-3 py-1 rounded-full text-xs font-medium ".concat(viewingGrant.status === 'Open' ? 'bg-green-100 text-green-800' : viewingGrant.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'),
                                                                children: viewingGrant.status
                                                            }, void 0, false, {
                                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                                lineNumber: 149,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold text-lg mb-2 text-gray-900",
                                                children: "Eligibility Entities"
                                            }, void 0, false, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700",
                                                children: viewingGrant.eligibility
                                            }, void 0, false, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                lineNumber: 169,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold text-lg mb-2 text-gray-900",
                                                children: "Application Process"
                                            }, void 0, false, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700",
                                                children: viewingGrant.applicationProcess
                                            }, void 0, false, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold text-lg mb-2 text-gray-900",
                                                children: "Description"
                                            }, void 0, false, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                lineNumber: 184,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 leading-relaxed",
                                                children: viewingGrant.description
                                            }, void 0, false, {
                                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                                lineNumber: 187,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                                lineNumber: 116,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/oliverA_patterns/oliver_patterns-admin-dashboard/src/app/admin-dashboard/grant-management/_components/grantManagement.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(GrantManagement, "4EQDw689CqoyOOjYAcJCrn58Nsw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$oliverA_patterns$2f$oliver_patterns$2d$admin$2d$dashboard$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = GrantManagement;
var _c;
__turbopack_context__.k.register(_c, "GrantManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=oliverA_patterns_oliver_patterns-admin-dashboard_cdce79e2._.js.map