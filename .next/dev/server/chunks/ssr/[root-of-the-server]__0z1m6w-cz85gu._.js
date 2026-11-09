module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/[locale]/[[...rest]]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocalizedRoute,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$messages$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/messages/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/v5/SitePages.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
async function generateMetadata({ params }) {
    const { locale: value, rest } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLocale"])(value)) return {};
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$messages$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMessages"])(value);
    const route = rest?.[0];
    const slug = rest?.[1];
    const detail = route === 'events' && slug ? t.shows[slug]?.title : undefined;
    const title = detail ?? (route === 'events' ? t.meta.titles.events : route === 'contact' ? t.meta.titles.contact : route === 'about' ? t.meta.titles.about : route === 'support' ? t.meta.titles.support : route === 'community' ? t.meta.titles.community : route === 'references' ? t.meta.titles.references : route === 'terms-of-sale' ? t.meta.titles.terms : route === 'refund-policy' ? t.meta.titles.refund : t.meta.homeTitle);
    return {
        title: `${title} — DekolonizArt`,
        description: t.meta.description
    };
}
async function LocalizedRoute({ params }) {
    const { locale: value, rest = [] } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLocale"])(value)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const locale = value;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$messages$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMessages"])(locale);
    const [first, second, third] = rest;
    if (!first) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomePage"], {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 25,
        columnNumber: 22
    }, this);
    if (first === 'about') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AboutPage"], {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 26,
        columnNumber: 33
    }, this);
    if (first === 'history') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HistoryPage"], {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 27,
        columnNumber: 35
    }, this);
    if (first === 'support') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SupportPage"], {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 28,
        columnNumber: 35
    }, this);
    if (first === 'community') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CommunityPage"], {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 29,
        columnNumber: 37
    }, this);
    if (first === 'references') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReferencesPage"], {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 30,
        columnNumber: 38
    }, this);
    if (first === 'terms-of-sale') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SalesPage"], {
        locale: locale,
        t: t,
        kind: "terms"
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 31,
        columnNumber: 41
    }, this);
    if (first === 'refund-policy') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SalesPage"], {
        locale: locale,
        t: t,
        kind: "refund"
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 32,
        columnNumber: 41
    }, this);
    if (first === 'services') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ServicesPage"], {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 33,
        columnNumber: 36
    }, this);
    if (first === 'theater') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TheaterPage"], {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 34,
        columnNumber: 35
    }, this);
    if (first === 'artistic') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArtisticPage"], {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 35,
        columnNumber: 36
    }, this);
    if (first === 'movement-dance') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MovementPage"], {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 36,
        columnNumber: 42
    }, this);
    if (first === 'artists') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArtistsPage"], {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 37,
        columnNumber: 35
    }, this);
    if (first === 'the-team') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TeamPage"], {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 38,
        columnNumber: 36
    }, this);
    if (first === 'contact') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ContactPage"], {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 39,
        columnNumber: 35
    }, this);
    if (first === 'events' && !second) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EventsPage"], {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 40,
        columnNumber: 45
    }, this);
    if (first === 'events' && second && third === 'booking') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BookingPage"], {
        locale: locale,
        t: t,
        slug: second
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 41,
        columnNumber: 67
    }, this);
    if (first === 'events' && second) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EventDetailPage"], {
        locale: locale,
        t: t,
        slug: second
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 42,
        columnNumber: 44
    }, this);
    if (first === 'glossary') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GlossaryPage"], {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 43,
        columnNumber: 36
    }, this);
    if (first === 'easy-read') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EasyReadPage"], {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 44,
        columnNumber: 37
    }, this);
    if (first === 'accessibility') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccessibilityPage"], {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 45,
        columnNumber: 41
    }, this);
    if (first === 'impressum') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LegalPage"], {
        locale: locale,
        t: t,
        kind: "impressum"
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 46,
        columnNumber: 37
    }, this);
    if (first === 'datenschutz') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LegalPage"], {
        locale: locale,
        t: t,
        kind: "datenschutz"
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 47,
        columnNumber: 39
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SitePages$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NotFoundPage"], {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/[[...rest]]/page.tsx",
        lineNumber: 48,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/[locale]/[[...rest]]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[locale]/[[...rest]]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/v5/ReadMore.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadMore",
    ()=>ReadMore
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ReadMore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ReadMore() from the server but ReadMore is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/v5/ReadMore.tsx", "ReadMore");
}),
"[project]/src/components/v5/ReadMore.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$ReadMore$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/v5/ReadMore.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$ReadMore$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/v5/SitePages.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutPage",
    ()=>AboutPage,
    "AccessibilityPage",
    ()=>AccessibilityPage,
    "ArtisticPage",
    ()=>ArtisticPage,
    "ArtistsPage",
    ()=>ArtistsPage,
    "BookingPage",
    ()=>BookingPage,
    "CommunityPage",
    ()=>CommunityPage,
    "ContactPage",
    ()=>ContactPage,
    "EasyReadPage",
    ()=>EasyReadPage,
    "EventDetailPage",
    ()=>EventDetailPage,
    "EventsPage",
    ()=>EventsPage,
    "GlossaryPage",
    ()=>GlossaryPage,
    "HistoryPage",
    ()=>HistoryPage,
    "HomePage",
    ()=>HomePage,
    "LegalPage",
    ()=>LegalPage,
    "MovementPage",
    ()=>MovementPage,
    "NotFoundPage",
    ()=>NotFoundPage,
    "ReferencesPage",
    ()=>ReferencesPage,
    "SalesPage",
    ()=>SalesPage,
    "ServicesPage",
    ()=>ServicesPage,
    "SupportPage",
    ()=>SupportPage,
    "TeamPage",
    ()=>TeamPage,
    "TheaterPage",
    ()=>TheaterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$messages$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/messages/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$artists$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/artists.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$productions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/productions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/events.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/media.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$offers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/offers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/team.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$easy$2d$read$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/easy-read.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$ReadMore$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/v5/ReadMore.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SiteChrome$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/v5/SiteChrome.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$VibetixEmbed$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/v5/VibetixEmbed.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$WhyDonateWidget$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/v5/WhyDonateWidget.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$support$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/support.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$youtube$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/youtube.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const path = (value, locale)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localizePath"])(value, locale);
function Frame({ children, locale, t, tone = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        id: "main-content",
        className: `v5-page ${tone}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-wrap",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 26,
                columnNumber: 64
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$SiteChrome$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SiteFooter"], {
                locale: locale,
                t: t
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 26,
                columnNumber: 107
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, this);
}
function PageMast({ eyebrow, title, intro, index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "page-mast",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mast-index",
                children: [
                    index,
                    " / DK—05"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 30,
                columnNumber: 40
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: eyebrow
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 30,
                        columnNumber: 94
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 30,
                        columnNumber: 136
                    }, this),
                    intro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: intro
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 30,
                        columnNumber: 162
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 30,
                columnNumber: 89
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mast-arrow",
                "aria-hidden": "true",
                children: "↓"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 30,
                columnNumber: 183
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
function HomePage({ locale, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        locale: locale,
        t: t,
        tone: "home-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero-field",
                "aria-labelledby": "hero-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-image-wrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["heroImages"].doualaMangaBell.src,
                            alt: "",
                            fill: true,
                            priority: true,
                            sizes: "(max-width: 700px) 100vw, 70vw",
                            className: "hero-image"
                        }, void 0, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 37,
                            columnNumber: 42
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-stamp",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "DK—05"
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 38,
                                columnNumber: 37
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "LIVE / BERLIN"
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 38,
                                columnNumber: 55
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "13.12.26"
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 38,
                                columnNumber: 81
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-vertical",
                        children: "THE ART OF REMEMBRANCE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: t.home.eyebrow
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 40,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                id: "hero-title",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t.home.h1a
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 40,
                                        columnNumber: 105
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hero-offset",
                                        children: t.home.h1b
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 40,
                                        columnNumber: 130
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 40,
                                columnNumber: 85
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-foot",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: t.home.lead
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 40,
                                        columnNumber: 211
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        className: "circle-link",
                                        href: path('/about', locale),
                                        "aria-label": t.home.ctaAbout,
                                        children: "↘"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 40,
                                        columnNumber: 231
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 40,
                                columnNumber: 184
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-scroll",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t.home.scroll
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 41,
                                columnNumber: 38
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "scroll-line"
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 41,
                                columnNumber: 66
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "signal-intro section-light",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-index",
                        children: [
                            "01 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "POSITION"
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 45,
                                columnNumber: 43
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "signal-copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: t.home.introH
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 46,
                                columnNumber: 38
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "We make ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "memory"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 46,
                                        columnNumber: 98
                                    }, this),
                                    " move."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 46,
                                columnNumber: 86
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "lead-copy",
                                children: t.home.lead
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 46,
                                columnNumber: 124
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    t.home.p1a,
                                    t.home.p1term,
                                    t.home.p1b
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 46,
                                columnNumber: 166
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                className: "underlined-link",
                                href: path('/about', locale),
                                children: [
                                    t.home.history,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "↗"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 46,
                                        columnNumber: 293
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 46,
                                columnNumber: 212
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "signal-notation",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "01"
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 47,
                                columnNumber: 61
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "1—1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 47,
                                columnNumber: 76
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "REMEMBER"
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 47,
                                columnNumber: 92
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "featured-sheet",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sheet-tape",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t.home.ticker
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 51,
                                columnNumber: 37
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t.home.stamp.join(' · ')
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 51,
                                columnNumber: 65
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "VIBETIX / 001"
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 51,
                                columnNumber: 104
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "featured-poster",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["posters"].doualaMangaBell.src,
                            alt: t.posters.doualaMangaBell,
                            width: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["posters"].doualaMangaBell.width,
                            height: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["posters"].doualaMangaBell.height
                        }, void 0, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 52,
                            columnNumber: 42
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "featured-copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: [
                                    t.home.whatsOn,
                                    " · ",
                                    t.featured.note
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 53,
                                columnNumber: 40
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: t.featured.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 53,
                                columnNumber: 109
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "featured-subtitle",
                                children: t.featured.subtitleTranslation
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 53,
                                columnNumber: 136
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t.featured.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 53,
                                columnNumber: 205
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                className: "fact-strip",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                children: t.featured.labels.date
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                                lineNumber: 53,
                                                columnNumber: 268
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                children: t.featured.dateLong
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                                lineNumber: 53,
                                                columnNumber: 301
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 53,
                                        columnNumber: 263
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                children: t.featured.labels.time
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                                lineNumber: 53,
                                                columnNumber: 342
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                children: t.featured.time
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                                lineNumber: 53,
                                                columnNumber: 375
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 53,
                                        columnNumber: 337
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                children: t.featured.labels.venue
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                                lineNumber: 53,
                                                columnNumber: 412
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                children: [
                                                    t.featured.venue[0],
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 471
                                                    }, this),
                                                    t.featured.venue[1]
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                                lineNumber: 53,
                                                columnNumber: 446
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 53,
                                        columnNumber: 407
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 53,
                                columnNumber: 236
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "featured-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        className: "solid-link",
                                        href: path('/events/douala-manga-bell/booking', locale),
                                        children: [
                                            t.home.book,
                                            " ↗"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 53,
                                        columnNumber: 548
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        className: "arrow-link",
                                        href: path('/events/douala-manga-bell', locale),
                                        children: [
                                            t.common.knowMore,
                                            " →"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 53,
                                        columnNumber: 656
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 53,
                                columnNumber: 514
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "practice-field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-index",
                        children: [
                            "02 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "WAYS OF WORKING"
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 57,
                                columnNumber: 43
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "practice-intro",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: t.home.offersEyebrow
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 58,
                                columnNumber: 41
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: t.home.offersH
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 58,
                                columnNumber: 96
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t.about.intro
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 58,
                                columnNumber: 121
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "practice-list",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$offers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["offers"].map((offer, index)=>{
                            const copy = t.offers[offer.id];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                className: `practice-chapter chapter-${index + 1}`,
                                href: path(offer.href, locale),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chapter-image",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                            src: offer.image.src,
                                            alt: "",
                                            fill: true,
                                            sizes: "(max-width: 700px) 100vw, 46vw"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/v5/SitePages.tsx",
                                            lineNumber: 59,
                                            columnNumber: 248
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 59,
                                        columnNumber: 217
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "chapter-number",
                                        children: [
                                            "0",
                                            index + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 59,
                                        columnNumber: 336
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chapter-copy",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "eyebrow",
                                                children: copy.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                                lineNumber: 59,
                                                columnNumber: 418
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: index === 0 ? 'Make the stage a place to question.' : index === 1 ? 'Learn through the body.' : 'Let rhythm carry the archive.'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                                lineNumber: 59,
                                                columnNumber: 463
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "chapter-arrow",
                                                "aria-hidden": "true",
                                                children: "↗"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                                lineNumber: 59,
                                                columnNumber: 601
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 59,
                                        columnNumber: 388
                                    }, this)
                                ]
                            }, offer.id, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 59,
                                columnNumber: 112
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "people-signal section-light",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-index",
                        children: [
                            "03 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "THE COLLECTIVE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 63,
                                columnNumber: 43
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "people-copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: t.artists.eyebrow
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 63,
                                columnNumber: 105
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "Many hands.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 63,
                                        columnNumber: 172
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "One living archive."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 63,
                                        columnNumber: 178
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 63,
                                columnNumber: 157
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t.about.strong
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 63,
                                columnNumber: 211
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                className: "underlined-link",
                                href: path('/artists', locale),
                                children: [
                                    t.artists.title,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "↗"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 63,
                                        columnNumber: 318
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 63,
                                columnNumber: 234
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 63,
                        columnNumber: 76
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "people-image",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["closingPortrait"].src,
                            alt: "",
                            fill: true,
                            sizes: "(max-width: 700px) 100vw, 48vw"
                        }, void 0, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 64,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "people-caption",
                        children: [
                            "Ngako Keuni",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 64,
                                columnNumber: 174
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t.artists.roles.ngako
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 64,
                                columnNumber: 180
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 64,
                        columnNumber: 131
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "partners-band",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: t.home.partners
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 67,
                        columnNumber: 42
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["partners"].map((partner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: partner.href,
                            target: "_blank",
                            rel: "noreferrer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                src: partner.logo.src,
                                alt: partner.name,
                                width: partner.logo.width,
                                height: partner.logo.height
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 67,
                                columnNumber: 194
                            }, this)
                        }, partner.name, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 67,
                            columnNumber: 119
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
function EventsPage({ locale, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        locale: locale,
        t: t,
        tone: "events-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageMast, {
                eyebrow: t.allEvents.eyebrow,
                title: t.allEvents.title,
                intro: t.home.lead,
                index: "04"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 73,
                columnNumber: 58
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "v5-events-provider",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: t.allEvents.vibetixH
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 73,
                        columnNumber: 197
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: t.allEvents.vibetixP
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 73,
                        columnNumber: 228
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$VibetixEmbed$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VibetixEmbed"], {
                        embedId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$productions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["vibetixEventListEmbed"].embedId,
                        checkoutUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$productions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["vibetixEventListEmbed"].checkoutUrl,
                        labels: {
                            loading: t.booking.embedLoading,
                            error: t.booking.embedError,
                            fallback: t.booking.embedFallback
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 73,
                        columnNumber: 257
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 73,
                columnNumber: 157
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 73,
        columnNumber: 10
    }, this);
}
function PosterBand({ production, locale, t }) {
    const poster = production.image ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["posters"][production.image.key] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["posters"].doualaMangaBell;
    const show = t.shows[production.slug];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "poster-band",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                src: poster.src,
                alt: t.posters[production.image?.key ?? 'doualaMangaBell'],
                width: poster.width,
                height: poster.height
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 79,
                columnNumber: 39
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "poster-band-copy",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: show.when
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 79,
                        columnNumber: 203
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: show.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 79,
                        columnNumber: 247
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: show.text
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 79,
                        columnNumber: 268
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: "solid-link",
                        href: path(`/events/${production.slug}/booking`, locale),
                        children: [
                            t.booking.title,
                            " ↗"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 79,
                        columnNumber: 286
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 79,
                columnNumber: 169
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 79,
        columnNumber: 10
    }, this);
}
function EventDetailPage({ locale, t, slug }) {
    const production = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$productions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProduction"])(slug);
    if (!production) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(NotFoundPage, {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 84,
        columnNumber: 27
    }, this);
    const show = t.shows[production.slug];
    const plot = production.plotTranslations?.[locale] ? {
        lang: locale,
        blocks: production.plotTranslations[locale]
    } : production.plot;
    const cast = production.cast.map((item)=>({
            ...item,
            artist: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$artists$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getArtist"])(item.artist)
        })).filter((item)=>item.artist);
    const subtitleTranslation = production.slug === 'douala-manga-bell' ? t.shows['douala-manga-bell'].subtitleTranslation : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        locale: locale,
        t: t,
        tone: "detail-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "detail-intro",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detail-spine",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t.production.introH
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 89,
                                columnNumber: 118
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "DK / ",
                                    production.slug
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 89,
                                columnNumber: 152
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 89,
                        columnNumber: 88
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detail-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: [
                                    show.when,
                                    " · ",
                                    t.allEvents.categories[production.category]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 89,
                                columnNumber: 223
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: show.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 89,
                                columnNumber: 315
                            }, this),
                            production.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "detail-subtitle",
                                children: [
                                    production.subtitle,
                                    " ",
                                    subtitleTranslation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: subtitleTranslation
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 89,
                                        columnNumber: 437
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 89,
                                columnNumber: 360
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 89,
                        columnNumber: 193
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detail-poster",
                        children: production.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["posters"][production.image.key].src,
                            alt: t.posters[production.image.key],
                            width: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["posters"][production.image.key].width,
                            height: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["posters"][production.image.key].height
                        }, void 0, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 89,
                            columnNumber: 535
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 89,
                        columnNumber: 483
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 89,
                columnNumber: 58
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "detail-body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detail-aside",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: t.production.datesH
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 89,
                                columnNumber: 784
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: show.when
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 89,
                                columnNumber: 838
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t.featured.venue.join(' ')
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 89,
                                columnNumber: 856
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                className: "solid-link",
                                href: path(`/events/${production.slug}/booking`, locale),
                                children: [
                                    t.booking.title,
                                    " ↗"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 89,
                                columnNumber: 891
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 89,
                        columnNumber: 754
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "detail-story",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: t.production.plotH
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 89,
                                columnNumber: 1040
                            }, this),
                            plot?.blocks.map((block, index)=>block.kind === 'h3' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: block.text
                                }, index, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 89,
                                    columnNumber: 1151
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$ReadMore$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReadMore"], {
                                        text: block.text.split('<!--more-->')[0],
                                        more: block.text.split('<!--more-->')[1],
                                        labels: {
                                            more: t.common.readMore,
                                            less: t.common.readLess
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 89,
                                        columnNumber: 1202
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 89,
                                    columnNumber: 1187
                                }, this)),
                            production.introVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "video-score",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "video-label",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t.production.introH
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                                lineNumber: 89,
                                                columnNumber: 1450
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t.production.introVideo.replace('{title}', show.title)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                                lineNumber: 89,
                                                columnNumber: 1484
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 89,
                                        columnNumber: 1421
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "video-frame",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                            title: t.production.introVideo.replace('{title}', show.title),
                                            src: `https://www.youtube-nocookie.com/embed/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$youtube$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["youTubeId"])(production.introVideo.url)}?rel=0`,
                                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                            allowFullScreen: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/v5/SitePages.tsx",
                                            lineNumber: 89,
                                            columnNumber: 1588
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 89,
                                        columnNumber: 1559
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 89,
                                columnNumber: 1392
                            }, this),
                            cast.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cast-ledger",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: t.production.castH
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 89,
                                        columnNumber: 1929
                                    }, this),
                                    cast.map(({ artist, credit })=>artist && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cast-line",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: credit === 'author' ? t.featured.labels.author : credit === 'composer' ? t.featured.labels.composer : t.production.castH
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 2071
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: artist.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 2206
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: path(`/artists#${artist.slug}`, locale),
                                                    children: [
                                                        t.production.castLink,
                                                        " ↗"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 2236
                                                }, this)
                                            ]
                                        }, artist.slug, true, {
                                            fileName: "[project]/src/components/v5/SitePages.tsx",
                                            lineNumber: 89,
                                            columnNumber: 2026
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 89,
                                columnNumber: 1900
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 89,
                        columnNumber: 1010
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 89,
                columnNumber: 725
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 89,
        columnNumber: 10
    }, this);
}
function BookingPage({ locale, t, slug }) {
    const production = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$productions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProduction"])(slug);
    if (!production) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(NotFoundPage, {
        locale: locale,
        t: t
    }, void 0, false, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 94,
        columnNumber: 27
    }, this);
    const booking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$productions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveBooking"])(production);
    const embed = production.booking.enabled ? production.booking.embed : undefined;
    const show = t.shows[production.slug];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        locale: locale,
        t: t,
        tone: "booking-page",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "booking-sheet",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "eyebrow",
                    children: [
                        t.booking.eyebrow,
                        " / ",
                        show.when
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/v5/SitePages.tsx",
                    lineNumber: 98,
                    columnNumber: 90
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$messages$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["format"])(t.booking.pageTitle, {
                        title: show.title
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/v5/SitePages.tsx",
                    lineNumber: 98,
                    columnNumber: 156
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "booking-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "booking-big",
                                    children: t.booking.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 98,
                                    columnNumber: 252
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$messages$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["format"])(t.booking.provider, {
                                        provider: 'Vibetix'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 98,
                                    columnNumber: 300
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 98,
                            columnNumber: 247
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "booking-action",
                            children: embed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$messages$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["format"])(t.booking.provider, {
                                    provider: 'Vibetix'
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 98,
                                columnNumber: 407
                            }, this) : booking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "solid-link",
                                href: booking.url,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                    t.booking.continue,
                                    " ↗"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 98,
                                columnNumber: 480
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: t.booking.unavailable
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 98,
                                        columnNumber: 589
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$messages$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["format"])(t.booking.byEmail, {
                                            email: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].email
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 98,
                                        columnNumber: 619
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "solid-link",
                                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].email}?subject=${encodeURIComponent((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$messages$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["format"])(t.booking.emailSubject, {
                                            title: show.title
                                        }))}`,
                                        children: [
                                            t.booking.emailCta,
                                            " ↗"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 98,
                                        columnNumber: 676
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 98,
                                columnNumber: 587
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 98,
                            columnNumber: 366
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/v5/SitePages.tsx",
                    lineNumber: 98,
                    columnNumber: 217
                }, this),
                embed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$VibetixEmbed$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VibetixEmbed"], {
                    embedId: embed.embedId,
                    checkoutUrl: embed.checkoutUrl,
                    fallbackUrl: embed.fallbackUrl,
                    labels: {
                        loading: t.booking.embedLoading,
                        error: t.booking.embedError,
                        fallback: t.booking.embedFallback
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/v5/SitePages.tsx",
                    lineNumber: 98,
                    columnNumber: 869
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/v5/SitePages.tsx",
            lineNumber: 98,
            columnNumber: 59
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 98,
        columnNumber: 10
    }, this);
}
function AboutPage({ locale, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        locale: locale,
        t: t,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageMast, {
                eyebrow: t.about.eyebrow,
                title: t.about.h2.join(' '),
                intro: t.about.intro,
                index: "05"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 101,
                columnNumber: 91
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "essay-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "essay-lead",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: [
                                    "01 / ",
                                    t.about.valuesH
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 101,
                                columnNumber: 251
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    t.about.leadA,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: t.about.leadTerm
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 101,
                                        columnNumber: 324
                                    }, this),
                                    t.about.leadB
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 101,
                                columnNumber: 306
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 101,
                        columnNumber: 223
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t.about.p1
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 101,
                                columnNumber: 381
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t.about.p2
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 101,
                                columnNumber: 400
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "pull-quote",
                                children: t.about.strong
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 101,
                                columnNumber: 419
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 101,
                        columnNumber: 376
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 101,
                columnNumber: 191
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "values-ledger",
                id: "values",
                children: t.about.cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "0",
                                    index + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 101,
                                columnNumber: 586
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: card.h
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 101,
                                columnNumber: 611
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: card.p.map((paragraph)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: paragraph
                                    }, paragraph, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 101,
                                        columnNumber: 660
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 101,
                                columnNumber: 628
                            }, this)
                        ]
                    }, card.h, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 101,
                        columnNumber: 564
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 101,
                columnNumber: 481
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 101,
        columnNumber: 62
    }, this);
}
function HistoryPage({ locale, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        locale: locale,
        t: t,
        tone: "history-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageMast, {
                eyebrow: t.history.eyebrow,
                title: t.history.title,
                intro: t.history.intro,
                index: "06"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 103,
                columnNumber: 113
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "v5-draft",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: t.history.draftLabel
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 103,
                        columnNumber: 242
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: t.history.draftTitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 103,
                        columnNumber: 297
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "v5-draft-text",
                        children: t.history.draftParagraphs.map((paragraph)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: paragraph
                            }, paragraph, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 103,
                                columnNumber: 405
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 103,
                        columnNumber: 328
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "v5-draft-note",
                        children: t.history.draftNotice
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 103,
                        columnNumber: 447
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 103,
                columnNumber: 212
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "timeline-field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eyebrow",
                        children: t.history.timelineH
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 103,
                        columnNumber: 549
                    }, this),
                    t.history.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "timeline-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: item.year
                                }, void 0, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 103,
                                    columnNumber: 682
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/v5/SitePages.tsx",
                                            lineNumber: 103,
                                            columnNumber: 715
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: item.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/v5/SitePages.tsx",
                                            lineNumber: 103,
                                            columnNumber: 736
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 103,
                                    columnNumber: 710
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "↗"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 103,
                                    columnNumber: 760
                                }, this)
                            ]
                        }, item.year, true, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 103,
                            columnNumber: 632
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 103,
                columnNumber: 513
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 103,
        columnNumber: 64
    }, this);
}
function SupportPage({ locale, t }) {
    const s = t.support;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        locale: locale,
        t: t,
        tone: "support-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageMast, {
                eyebrow: s.eyebrow,
                title: s.title,
                intro: s.intro,
                index: "17"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 105,
                columnNumber: 134
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "v5-support-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "v5-support-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: s.impactH
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 105,
                                columnNumber: 280
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: s.impactP
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 105,
                                columnNumber: 300
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "v5-impact-list",
                                children: s.impactItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                                lineNumber: 105,
                                                columnNumber: 399
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                                lineNumber: 105,
                                                columnNumber: 428
                                            }, this)
                                        ]
                                    }, item.title, true, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 105,
                                        columnNumber: 378
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 105,
                                columnNumber: 318
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 105,
                        columnNumber: 246
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "v5-support-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: s.widgetH
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 105,
                                columnNumber: 504
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: s.widgetP
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 105,
                                columnNumber: 524
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$WhyDonateWidget$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WhyDonateWidget"], {
                                lang: locale,
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$support$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supportConfig"].donationWidget
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 105,
                                columnNumber: 542
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 105,
                        columnNumber: 470
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 105,
                columnNumber: 209
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "v5-support-note",
                children: [
                    s.contact,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "underlined-link",
                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].email}`,
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].email,
                            " ↗"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 105,
                        columnNumber: 668
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 105,
                columnNumber: 625
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 105,
        columnNumber: 85
    }, this);
}
function CommunityPage({ locale, t }) {
    const c = t.community;
    const mailto = `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$support$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supportConfig"].community.signupEmail}?subject=${encodeURIComponent('DekolonizArt community')}`;
    const channel = {
        label: c.whatsapp,
        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$support$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supportConfig"].community.whatsappUrl
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        locale: locale,
        t: t,
        tone: "community-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageMast, {
                eyebrow: c.eyebrow,
                title: c.title,
                intro: c.intro,
                index: "18"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 107,
                columnNumber: 342
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "v5-community-intro",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: c.presentationH
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 107,
                        columnNumber: 457
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: c.presentationP
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 107,
                        columnNumber: 483
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 107,
                columnNumber: 417
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "v5-community-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "v5-community-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: c.signupH
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 107,
                                columnNumber: 592
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: c.signupText
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 107,
                                columnNumber: 612
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "solid-link",
                                href: mailto,
                                children: [
                                    c.signupCta,
                                    " ↗"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 107,
                                columnNumber: 633
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 107,
                        columnNumber: 556
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "v5-community-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: c.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 107,
                                columnNumber: 734
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "v5-channel-list",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: channel.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/v5/SitePages.tsx",
                                            lineNumber: 107,
                                            columnNumber: 788
                                        }, this),
                                        channel.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "underlined-link",
                                            href: channel.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [
                                                channel.label,
                                                " ↗"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/v5/SitePages.tsx",
                                            lineNumber: 107,
                                            columnNumber: 836
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "v5-pending",
                                            children: c.invitePending
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/v5/SitePages.tsx",
                                            lineNumber: 107,
                                            columnNumber: 953
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 107,
                                    columnNumber: 784
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 107,
                                columnNumber: 752
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 107,
                        columnNumber: 698
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 107,
                columnNumber: 517
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 107,
        columnNumber: 291
    }, this);
}
function ReferencesPage({ locale, t }) {
    const r = t.references;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        locale: locale,
        t: t,
        tone: "references-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageMast, {
                eyebrow: r.eyebrow,
                title: r.title,
                intro: r.intro,
                index: "19"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 109,
                columnNumber: 143
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "v5-community-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "v5-community-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: r.partnersH
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 109,
                                columnNumber: 293
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "v5-reference-list",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["partners"].map((partner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                src: partner.logo.src,
                                                alt: partner.name,
                                                width: partner.logo.width,
                                                height: partner.logo.height
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                                lineNumber: 109,
                                                columnNumber: 405
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: partner.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                                lineNumber: 109,
                                                columnNumber: 512
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: r.noDescription
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                                lineNumber: 109,
                                                columnNumber: 535
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "underlined-link",
                                                href: partner.href,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [
                                                    r.website,
                                                    " ↗"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                                lineNumber: 109,
                                                columnNumber: 559
                                            }, this)
                                        ]
                                    }, partner.name, true, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 109,
                                        columnNumber: 377
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 109,
                                columnNumber: 315
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 109,
                        columnNumber: 257
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "v5-community-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: r.coachesH
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 109,
                                columnNumber: 729
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: r.noCoaches
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 109,
                                columnNumber: 750
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 109,
                        columnNumber: 693
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 109,
                columnNumber: 218
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 109,
        columnNumber: 91
    }, this);
}
function SalesPage({ locale, t, kind }) {
    const isTerms = kind === 'terms';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        locale: locale,
        t: t,
        tone: "legal-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageMast, {
                eyebrow: isTerms ? t.sales.termsEyebrow : t.sales.refundEyebrow,
                title: isTerms ? t.sales.termsTitle : t.sales.refundTitle,
                intro: t.sales.pending,
                index: "20"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 111,
                columnNumber: 180
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "v5-draft",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "v5-draft-note",
                    children: t.sales.pending
                }, void 0, false, {
                    fileName: "[project]/src/components/v5/SitePages.tsx",
                    lineNumber: 111,
                    columnNumber: 381
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 111,
                columnNumber: 351
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 111,
        columnNumber: 133
    }, this);
}
function ServicesPage({ locale, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        locale: locale,
        t: t,
        tone: "services-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageMast, {
                eyebrow: t.services.eyebrow,
                title: t.services.title,
                intro: t.services.intro,
                index: "07"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 113,
                columnNumber: 115
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "service-chapters",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$offers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["offers"].map((offer, index)=>{
                    const copy = t.offers[offer.id];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "service-chapter",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "service-image",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                    src: offer.image.src,
                                    alt: "",
                                    fill: true,
                                    sizes: "(max-width: 700px) 100vw, 50vw"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 113,
                                    columnNumber: 410
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 113,
                                columnNumber: 379
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "service-number",
                                children: [
                                    "0",
                                    index + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 113,
                                columnNumber: 498
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "service-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: copy.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 113,
                                        columnNumber: 578
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: copy.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 113,
                                        columnNumber: 623
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: copy.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 113,
                                        columnNumber: 644
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        className: "arrow-link",
                                        href: path(offer.href, locale),
                                        children: [
                                            t.services.visit,
                                            " ↗"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 113,
                                        columnNumber: 662
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 113,
                                columnNumber: 548
                            }, this)
                        ]
                    }, offer.id, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 113,
                        columnNumber: 327
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 113,
                columnNumber: 217
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "closing-cta",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: t.services.ctaH
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 113,
                        columnNumber: 814
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: t.services.ctaH
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 113,
                        columnNumber: 864
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: "solid-link",
                        href: path('/contact', locale),
                        children: [
                            t.services.ctaBtn,
                            " ↗"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 113,
                        columnNumber: 890
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 113,
                columnNumber: 781
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 113,
        columnNumber: 65
    }, this);
}
function ArtisticPage({ locale, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        locale: locale,
        t: t,
        tone: "artistic-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageMast, {
                eyebrow: t.artistic.eyebrow,
                title: t.artistic.h2,
                intro: t.artistic.intro,
                index: "08"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 115,
                columnNumber: 115
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "artistic-intro",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "lead-copy",
                                children: [
                                    t.artistic.leadA,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: t.artistic.leadTerm
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 115,
                                        columnNumber: 298
                                    }, this),
                                    t.artistic.leadB
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 115,
                                columnNumber: 255
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t.artistic.p1
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 115,
                                columnNumber: 350
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    t.artistic.p2a,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Douala Manga Bell"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 115,
                                        columnNumber: 391
                                    }, this),
                                    t.artistic.p2b,
                                    t.artistic.p2c
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 115,
                                columnNumber: 372
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 115,
                        columnNumber: 250
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "workshop-band",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["workshops"][1].image.src,
                                alt: t.artistic.bandAlt,
                                fill: true,
                                sizes: "(max-width: 700px) 100vw, 45vw"
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 115,
                                columnNumber: 498
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t.artistic.bandPlace
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 115,
                                columnNumber: 605
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 115,
                        columnNumber: 467
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 115,
                columnNumber: 214
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "chapter-notes",
                children: t.artistic.cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "0",
                                    index + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 115,
                                columnNumber: 752
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: card.h
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 115,
                                columnNumber: 777
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: card.p
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 115,
                                columnNumber: 794
                            }, this)
                        ]
                    }, card.h, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 115,
                        columnNumber: 730
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 115,
                columnNumber: 656
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "youth-sheet",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: t.artistic.youth.eyebrow
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 115,
                        columnNumber: 864
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: t.artistic.youth.h2
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 115,
                        columnNumber: 923
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: t.artistic.youth.lead
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 115,
                        columnNumber: 953
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "youth-facts",
                        children: t.artistic.youth.facts.map((fact)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: fact.strong
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 115,
                                        columnNumber: 1073
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: fact.span
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 115,
                                        columnNumber: 1103
                                    }, this)
                                ]
                            }, fact.strong, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 115,
                                columnNumber: 1050
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 115,
                        columnNumber: 983
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: "solid-link",
                        href: path('/contact', locale),
                        children: [
                            t.artistic.youth.cta,
                            " ↗"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 115,
                        columnNumber: 1141
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 115,
                columnNumber: 831
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 115,
        columnNumber: 65
    }, this);
}
function TheaterPage({ locale, t }) {
    const featured = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$productions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProduction"])('douala-manga-bell');
    const theaterEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveEvents"])(t, locale).filter((event)=>event.category === 'theater');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        locale: locale,
        t: t,
        tone: "theater-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageMast, {
                eyebrow: t.theater.eyebrow,
                title: t.theater.title,
                intro: t.home.lead,
                index: "08"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 117,
                columnNumber: 263
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PosterBand, {
                production: featured,
                locale: locale,
                t: t
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 117,
                columnNumber: 358
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "theater-list",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eyebrow",
                        children: t.theater.upcomingH
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 117,
                        columnNumber: 450
                    }, this),
                    theaterEvents.map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            className: "theater-line",
                            href: path(event.secondary.href, locale),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "0",
                                        index + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 117,
                                    columnNumber: 627
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: event.when
                                }, void 0, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 117,
                                    columnNumber: 652
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: event.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 117,
                                    columnNumber: 681
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "↗"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 117,
                                    columnNumber: 703
                                }, this)
                            ]
                        }, event.id, true, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 117,
                            columnNumber: 539
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 117,
                columnNumber: 416
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "booking-note",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: t.theater.bookEyebrow
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 117,
                        columnNumber: 766
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: t.theater.bookH
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 117,
                        columnNumber: 822
                    }, this),
                    t.bookingFaq.slice(0, 2).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    children: [
                                        item.q,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/v5/SitePages.tsx",
                                            lineNumber: 117,
                                            columnNumber: 927
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 117,
                                    columnNumber: 910
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: item.a
                                }, void 0, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 117,
                                    columnNumber: 951
                                }, this)
                            ]
                        }, item.q, true, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 117,
                            columnNumber: 888
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 117,
                columnNumber: 732
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 117,
        columnNumber: 214
    }, this);
}
function MovementPage({ locale, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        locale: locale,
        t: t,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageMast, {
                eyebrow: t.movement.eyebrow,
                title: t.movement.title,
                intro: t.movement.intro,
                index: "09"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 119,
                columnNumber: 94
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "movement-feature",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$offers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["offerImages"].movement.src,
                        alt: "",
                        fill: true,
                        sizes: "100vw"
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 119,
                        columnNumber: 234
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: t.movement.upcomingH
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 119,
                                columnNumber: 305
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: t.home.offersH
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 119,
                                columnNumber: 360
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                className: "solid-link",
                                href: path('/events', locale),
                                children: [
                                    t.common.knowMore,
                                    " ↗"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 119,
                                columnNumber: 385
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 119,
                        columnNumber: 300
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 119,
                columnNumber: 196
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "faq-ledger",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: t.movement.faqH
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 119,
                        columnNumber: 521
                    }, this),
                    t.faq.slice(0, 3).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "0",
                                                index + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/v5/SitePages.tsx",
                                            lineNumber: 119,
                                            columnNumber: 642
                                        }, this),
                                        item.q
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 119,
                                    columnNumber: 633
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: item.a
                                }, void 0, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 119,
                                    columnNumber: 685
                                }, this)
                            ]
                        }, item.q, true, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 119,
                            columnNumber: 611
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 119,
                columnNumber: 489
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 119,
        columnNumber: 65
    }, this);
}
function ArtistsPage({ locale, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        locale: locale,
        t: t,
        tone: "artists-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageMast, {
                eyebrow: t.artists.eyebrow,
                title: t.artists.title,
                intro: t.about.intro,
                index: "10"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 121,
                columnNumber: 113
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "artist-index",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$artists$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["artists"].map((artist, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "artist-entry",
                        id: artist.slug,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "artist-marker",
                                children: [
                                    "0",
                                    index + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 121,
                                columnNumber: 345
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "artist-portrait",
                                children: artist.photo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                    src: artist.photo.src,
                                    alt: artist.photo.alt ?? artist.name,
                                    width: artist.photo.width,
                                    height: artist.photo.height
                                }, void 0, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 121,
                                    columnNumber: 443
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: artist.name.split(' ').map((part)=>part[0]).join('')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 121,
                                    columnNumber: 572
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 121,
                                columnNumber: 394
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "artist-writing",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: artist.location ?? t.artists.eyebrow
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 121,
                                        columnNumber: 680
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: artist.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 121,
                                        columnNumber: 751
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "artist-role",
                                        children: t.artists.roles[artist.role]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 121,
                                        columnNumber: 773
                                    }, this),
                                    artist.bio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$ReadMore$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReadMore"], {
                                            text: artist.bio.paragraphs[0],
                                            more: artist.bio.paragraphs.slice(1).join(' '),
                                            labels: {
                                                more: t.common.readMore,
                                                less: t.common.readLess
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/v5/SitePages.tsx",
                                            lineNumber: 121,
                                            columnNumber: 852
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 121,
                                        columnNumber: 849
                                    }, this),
                                    artist.website && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "underlined-link",
                                        href: artist.website,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$messages$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["format"])(t.artists.website, {
                                                name: artist.name
                                            }),
                                            " ↗"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 121,
                                        columnNumber: 1030
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 121,
                                columnNumber: 648
                            }, this)
                        ]
                    }, artist.slug, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 121,
                        columnNumber: 276
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 121,
                columnNumber: 210
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 121,
        columnNumber: 64
    }, this);
}
function TeamPage({ locale, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        locale: locale,
        t: t,
        tone: "team-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageMast, {
                eyebrow: t.team.eyebrow,
                title: t.team.title,
                intro: t.team.intro,
                index: "11"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 123,
                columnNumber: 107
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "team-roll",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["team"].map((member, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: index % 2 ? 'team-member reverse' : 'team-member',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "team-index",
                                children: [
                                    "0",
                                    index + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 123,
                                columnNumber: 346
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "team-photo",
                                children: member.photo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                    src: member.photo.src,
                                    alt: member.name,
                                    width: member.photo.width,
                                    height: member.photo.height,
                                    style: {
                                        objectPosition: member.photo.position
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 123,
                                    columnNumber: 438
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: member.name.slice(0, 2).toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 123,
                                    columnNumber: 597
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 123,
                                columnNumber: 394
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        children: t.team.roles[member.role]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 123,
                                        columnNumber: 661
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: member.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 123,
                                        columnNumber: 721
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 123,
                                columnNumber: 656
                            }, this)
                        ]
                    }, member.name, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 123,
                        columnNumber: 257
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 123,
                columnNumber: 197
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 123,
        columnNumber: 61
    }, this);
}
function ContactPage({ locale, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        locale: locale,
        t: t,
        tone: "contact-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageMast, {
                eyebrow: t.contact.eyebrow,
                title: t.contact.title,
                index: "12"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 125,
                columnNumber: 113
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "contact-coordinates",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "coordinate-email",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: [
                                    "01 / ",
                                    t.contact.artistic
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 125,
                                columnNumber: 263
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].email}`,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].email
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 125,
                                columnNumber: 321
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t.home.support1
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 125,
                                columnNumber: 370
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 125,
                        columnNumber: 229
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "coordinate-address",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: [
                                    "02 / ",
                                    t.ui.venueH
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 125,
                                columnNumber: 436
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["venue"].name
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 125,
                                columnNumber: 487
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["venue"].street,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 125,
                                        columnNumber: 525
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["venue"].city,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/v5/SitePages.tsx",
                                        lineNumber: 125,
                                        columnNumber: 543
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["venue"].place
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 125,
                                columnNumber: 508
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "arrow-link",
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["venue"].mapUrl,
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                    t.common.showOnMap,
                                    " ↗"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 125,
                                columnNumber: 566
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 125,
                        columnNumber: 400
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "coordinate-social",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: [
                                    "03 / ",
                                    t.footer.follow
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 125,
                                columnNumber: 712
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["socials"].map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: social.href,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: [
                                        social.label,
                                        " ↗"
                                    ]
                                }, social.label, true, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 125,
                                    columnNumber: 792
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 125,
                        columnNumber: 677
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 125,
                columnNumber: 188
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "no-form-note",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: t.contact.production
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 125,
                        columnNumber: 938
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "There is no contact form here. Write to us directly and tell us what you want to make, remember or renew."
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 125,
                        columnNumber: 993
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "solid-link",
                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].email}`,
                        children: "Write an e-mail ↗"
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 125,
                        columnNumber: 1105
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 125,
                columnNumber: 904
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 125,
        columnNumber: 64
    }, this);
}
function TextPage({ locale, t, eyebrow, title, intro, children, index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Frame, {
        locale: locale,
        t: t,
        tone: "text-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageMast, {
                eyebrow: eyebrow,
                title: title,
                intro: intro,
                index: index
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 127,
                columnNumber: 235
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "long-reading",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 127,
                columnNumber: 307
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 127,
        columnNumber: 189
    }, this);
}
function GlossaryPage({ locale, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TextPage, {
        locale: locale,
        t: t,
        eyebrow: t.glossary.eyebrow,
        title: t.glossary.title,
        intro: t.glossary.intro,
        index: "13",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glossary-list",
            children: t.glossary.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                            children: [
                                item.term,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 129,
                                    columnNumber: 293
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 129,
                            columnNumber: 273
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: item.text
                        }, void 0, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 129,
                            columnNumber: 317
                        }, this)
                    ]
                }, item.id, true, {
                    fileName: "[project]/src/components/v5/SitePages.tsx",
                    lineNumber: 129,
                    columnNumber: 250
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/v5/SitePages.tsx",
            lineNumber: 129,
            columnNumber: 187
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 129,
        columnNumber: 65
    }, this);
}
function AccessibilityPage({ locale, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TextPage, {
        locale: locale,
        t: t,
        eyebrow: t.accessibility.eyebrow,
        title: t.accessibility.title,
        intro: t.accessibility.intro,
        index: "14",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: t.accessibility.standardH
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 131,
                columnNumber: 207
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: t.accessibility.standard
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 131,
                columnNumber: 243
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: t.accessibility.statusH
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 131,
                columnNumber: 276
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: t.accessibility.status
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 131,
                columnNumber: 310
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: t.accessibility.doneH
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 131,
                columnNumber: 341
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: t.accessibility.done.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: item
                    }, item, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 131,
                        columnNumber: 413
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 131,
                columnNumber: 373
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: t.accessibility.notYetH
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 131,
                columnNumber: 446
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: t.accessibility.notYet.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: item.strong
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/SitePages.tsx",
                                lineNumber: 131,
                                columnNumber: 544
                            }, this),
                            " ",
                            item.text
                        ]
                    }, item.strong, true, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 131,
                        columnNumber: 522
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 131,
                columnNumber: 480
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: t.accessibility.feedbackH
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 131,
                columnNumber: 598
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: t.accessibility.feedback
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 131,
                columnNumber: 634
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "underlined-link",
                href: `mailto:${t.accessibility.email}`,
                children: [
                    t.accessibility.email,
                    " ↗"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 131,
                columnNumber: 667
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 131,
        columnNumber: 70
    }, this);
}
function LegalPage({ locale, t, kind }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TextPage, {
        locale: locale,
        t: t,
        eyebrow: kind === 'impressum' ? t.legal.impressumEyebrow : t.legal.datenschutzEyebrow,
        title: kind === 'impressum' ? t.meta.titles.impressum : t.meta.titles.datenschutz,
        intro: t.common.legalGermanOnly,
        index: "15",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            lang: "de",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "legal-warning",
                    children: "Vorlage – noch nicht veröffentlichungsreif. Die Platzhalter müssen vor Veröffentlichung ergänzt und juristisch geprüft werden."
                }, void 0, false, {
                    fileName: "[project]/src/components/v5/SitePages.tsx",
                    lineNumber: 133,
                    columnNumber: 369
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: kind === 'impressum' ? 'Angaben gemäß § 5 DDG' : 'Verantwortliche Stelle'
                }, void 0, false, {
                    fileName: "[project]/src/components/v5/SitePages.tsx",
                    lineNumber: 133,
                    columnNumber: 528
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 133,
                            columnNumber: 626
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["venue"].street,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 133,
                            columnNumber: 646
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["venue"].city,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 133,
                            columnNumber: 664
                        }, this),
                        "E-Mail: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].email}`,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].email
                        }, void 0, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 133,
                            columnNumber: 678
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/v5/SitePages.tsx",
                    lineNumber: 133,
                    columnNumber: 612
                }, this),
                kind === 'datenschutz' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Kontakt per E-Mail"
                        }, void 0, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 133,
                            columnNumber: 759
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Diese Website hat kein Kontaktformular. Wenn Sie uns eine E-Mail schreiben, erhalten wir Ihre E-Mail-Adresse und die Angaben, die Sie uns mitteilen."
                        }, void 0, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 133,
                            columnNumber: 786
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Lokale Speicherung"
                        }, void 0, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 133,
                            columnNumber: 941
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Die Website speichert nur Ihre Sprach- und Barrierefreiheitseinstellungen im Browser."
                        }, void 0, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 133,
                            columnNumber: 968
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Ihre Rechte"
                        }, void 0, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 133,
                            columnNumber: 1060
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Sie haben die Rechte auf Auskunft, Berichtigung, Löschung und Widerspruch nach der DSGVO."
                        }, void 0, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 133,
                            columnNumber: 1080
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/v5/SitePages.tsx",
                    lineNumber: 133,
                    columnNumber: 757
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Kontakt"
                        }, void 0, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 133,
                            columnNumber: 1184
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Vertreten durch: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "legal-placeholder",
                                    children: "TODO: Verantwortliche Person"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 133,
                                    columnNumber: 1220
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 133,
                                    columnNumber: 1291
                                }, this),
                                "Telefon: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "legal-placeholder",
                                    children: "TODO: Telefonnummer"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/v5/SitePages.tsx",
                                    lineNumber: 133,
                                    columnNumber: 1306
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 133,
                            columnNumber: 1200
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Haftung und Urheberrecht"
                        }, void 0, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 133,
                            columnNumber: 1372
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Die Inhalte dieser Website unterliegen dem deutschen Urheberrecht. Bitte beachten Sie die gesetzlichen Hinweise vor einer Veröffentlichung."
                        }, void 0, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 133,
                            columnNumber: 1405
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/v5/SitePages.tsx",
                    lineNumber: 133,
                    columnNumber: 1182
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/v5/SitePages.tsx",
            lineNumber: 133,
            columnNumber: 354
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 133,
        columnNumber: 108
    }, this);
}
function EasyReadPage({ locale, t }) {
    const page = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$easy$2d$read$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["easyRead"][locale];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TextPage, {
        locale: locale,
        t: t,
        eyebrow: page.eyebrow,
        title: page.title,
        intro: page.intro,
        index: "16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "easy-lead",
                children: page.draft
            }, void 0, false, {
                fileName: "[project]/src/components/v5/SitePages.tsx",
                lineNumber: 135,
                columnNumber: 200
            }, this),
            page.blocks.map((block, index)=>{
                if ('h2' in block) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: block.h2
                }, index, false, {
                    fileName: "[project]/src/components/v5/SitePages.tsx",
                    lineNumber: 135,
                    columnNumber: 304
                }, this);
                if ('list' in block) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    children: block.list.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: item
                        }, item, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 135,
                            columnNumber: 407
                        }, this))
                }, index, false, {
                    fileName: "[project]/src/components/v5/SitePages.tsx",
                    lineNumber: 135,
                    columnNumber: 365
                }, this);
                if ('box' in block) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "easy-box",
                    children: block.box.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: line
                        }, line, false, {
                            fileName: "[project]/src/components/v5/SitePages.tsx",
                            lineNumber: 135,
                            columnNumber: 532
                        }, this))
                }, index, false, {
                    fileName: "[project]/src/components/v5/SitePages.tsx",
                    lineNumber: 135,
                    columnNumber: 469
                }, this);
                if ('big' in block) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "easy-lead",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "underlined-link",
                        href: block.big.includes('mailto:') ? `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].email}` : undefined,
                        children: block.big
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/SitePages.tsx",
                        lineNumber: 135,
                        columnNumber: 630
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/components/v5/SitePages.tsx",
                    lineNumber: 135,
                    columnNumber: 593
                }, this);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: 'p' in block ? block.p : block.explain
                }, index, false, {
                    fileName: "[project]/src/components/v5/SitePages.tsx",
                    lineNumber: 135,
                    columnNumber: 763
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 135,
        columnNumber: 96
    }, this);
}
function NotFoundPage({ locale, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TextPage, {
        locale: locale,
        t: t,
        eyebrow: "404",
        title: t.notFound.title,
        intro: t.notFound.text,
        index: "—",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            className: "solid-link",
            href: path('/', locale),
            children: [
                t.notFound.home,
                " ↗"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/v5/SitePages.tsx",
            lineNumber: 137,
            columnNumber: 170
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/v5/SitePages.tsx",
        lineNumber: 137,
        columnNumber: 65
    }, this);
}
}),
"[project]/src/components/v5/VibetixEmbed.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VibetixEmbed",
    ()=>VibetixEmbed
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const VibetixEmbed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call VibetixEmbed() from the server but VibetixEmbed is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/v5/VibetixEmbed.tsx", "VibetixEmbed");
}),
"[project]/src/components/v5/VibetixEmbed.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$VibetixEmbed$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/v5/VibetixEmbed.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$v5$2f$VibetixEmbed$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/v5/WhyDonateWidget.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhyDonateWidget",
    ()=>WhyDonateWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-rsc] (ecmascript)");
;
;
function WhyDonateWidget({ lang, slug, primaryColor, secondaryColor, fontFamily, buttonRadius, cardRadius, donationAmountSize, buttonTextSize }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "v5-donation-widget",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                href: "https://plugin.whydonate.com/wdplugin-style.css",
                rel: "stylesheet",
                type: "text/css"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/WhyDonateWidget.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: `share-widget-${slug}`,
                className: "share-widget",
                "data-slug": slug,
                "data-lang": lang,
                "data-primary-color": primaryColor,
                "data-secondary-color": secondaryColor,
                "data-font-family": fontFamily,
                "data-button-radius": buttonRadius,
                "data-card-radius": cardRadius,
                "data-donation-amount-size": donationAmountSize,
                "data-button-text-size": buttonTextSize,
                "data-card": "show",
                "data-form_mode": "donation-form+widget"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/WhyDonateWidget.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "https://plugin.whydonate.com/wp_styling.js",
                strategy: "afterInteractive"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/WhyDonateWidget.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/WhyDonateWidget.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/content/agenda.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "agenda",
    ()=>agenda,
    "resolveAgenda",
    ()=>resolveAgenda
]);
const agenda = [
    {
        id: 'reading',
        href: '/theater',
        production: 'douala-manga-bell'
    },
    {
        id: 'performance',
        href: '/theater',
        production: 'douala-manga-bell',
        cardTitle: 'production'
    },
    // Theater & Geschichte belongs to the MeMo workshops (Artistic page).
    {
        id: 'youth',
        href: '/artistic#youth',
        category: 'workshop'
    }
];
function resolveAgenda(t, production) {
    return agenda.filter((entry)=>!production || 'production' in entry && entry.production === production).map((entry)=>({
            id: entry.id,
            href: entry.href,
            ...t.events[entry.id]
        }));
}
}),
"[project]/src/content/artists.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "artists",
    ()=>artists,
    "getArtist",
    ()=>getArtist
]);
const artists = [
    {
        slug: 'ngako-keuni',
        name: 'Ngako Keuni',
        location: 'Berlin',
        role: 'ngako',
        photo: {
            src: '/img/artists/ngako-keuni.webp',
            width: 1282,
            height: 1920
        },
        website: 'https://www.ngakokeuni.com/',
        // Source: WordPress "event actors page" (German only).
        bio: {
            lang: 'de',
            paragraphs: [
                'Der Schauspieler, Sänger und Tänzer Ngako Keuni absolvierte 2016-2020 an der Universität der Künste Berlin den Studiengang „Musical”. Im Rahmen seines Studiums gewann er den „BOBBY WALDEN PREIS“ und erhielt das DEUTSCHLAND STIPENDIUM.',
                'Geboren in Kamerun, sollte er nach dem Wunsch seines Vaters Priester werden. So fing er an im Internat Trommeln zu spielen und später im Chor zu singen. Nachdem er aus dem katholischen Internat geschmissen wurde, stand Ngako nach seinem Abitur in Kamerun als Perkussionist, Opernsänger oder Tänzer auf der Bühne.<!--more--> Parallel studierte er Wirtschaftswissenschaft. Allerdings war es in seiner Familie nicht willkommen, Künstler zu sein und in der Kamerunischen Gesellschaft schwierig, fast unmöglich, davon zu leben. So zog Ngako 2013 erstmal nach Qatar und später nach Deutschland, um seiner Musik- und Tanzleidenschaft zu folgen. Im Jahr 2019 spielte er Woda in dem Musical Drachenherz unter der Regie von Peter Lund und Mathias Noack sowie der Choreografin Neva Howard, eine Co-Produktion des Staatstheaters Chemnitz und der Neuköllner Oper. 2020 übernahm er die Rolle des Blechmann in dem Stück Der Zauberer von Oz am Staatstheater Kassel unter der Regie von Martina van Boxen. 2022 war Ngako auf Tour als Charles in der Komödie Monsieur Claude 2. Die Regie führte Stefan Zimmermann vom A.gon Theater in München. Er spielte in 2022/2023 als Gilbert und Seaweed am Staatstheater Nürnberg in der Produktion Hairspray mit der Regisseurin Melissa King. Sein jüngster Auftritt auf der Bühne war in Bad Münstereifel in der Theaterproduktion Macht euch die Erde untertan. Aktuell ist Ngako in den Bad Hersfelder Sommerfestspielen 2023 als Simon Zealotes in dem Musical Jesus Christ Superstar mit dem Regisseur Stefan Huber und der Choreografin Melissa King zu sehen.',
                'Ngako ist auch freischaffend unterwegs, als afrikanischer Tanzlehrer und Darsteller. Er wirkte 2021 in dem Musik-Video Tam Tam als Choreograph, Regisseur und Arrangeur mit. 2022 Und 2023 war er Krimhilder am Theater Expedition Metropolis in Berlin und im Theater Heidelberg – Zwinger X in dem Theaterstück Schwarze Zukunft: Eine afrofuturistische Märchenstunde- oder auch nicht, eine Produktion von Goblin Baby. In der Uraufführung des Theaterstückes Macht euch die Erde untertan, entwickelte er selbst die Rolle des Murayas, eines Flüchtlings aus Afrika.'
            ]
        }
    },
    {
        slug: 'athanasios-karakantas',
        name: 'Athanasios Karakantas',
        role: 'composer'
    }
];
function getArtist(slug) {
    return artists.find((artist)=>artist.slug === slug);
}
}),
"[project]/src/content/easy-read.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easyRead",
    ()=>easyRead
]);
const en = {
    eyebrow: 'Easy read',
    title: 'DekolonizArt – easy to read',
    intro: 'This page explains our website in simple words.',
    draft: '**Note:** This text follows the rules for easy read. It has not yet been checked by readers with learning difficulties.',
    blocks: [
        {
            h2: 'Who are we?'
        },
        {
            p: 'We are DekolonizArt.'
        },
        {
            p: 'We are a group of artists.'
        },
        {
            p: 'We are in Berlin, in Germany.'
        },
        {
            p: 'We started in the year 2025.'
        },
        {
            h2: 'What do we do?'
        },
        {
            p: 'We make theatre.'
        },
        {
            p: 'We dance and make music.'
        },
        {
            p: 'We tell stories from history.'
        },
        {
            p: 'We tell these stories from the view of people from Africa. Many history books only tell the view of the colonial powers.'
        },
        {
            explain: '**Colonial powers** are countries that took land in other parts of the world by force. Germany was a colonial power, too.'
        },
        {
            h2: 'Our play'
        },
        {
            p: 'Our play is about a king in Cameroon.'
        },
        {
            p: 'His name was Rudolf Duala Manga Bell.'
        },
        {
            p: 'He fought for the rights of his people.'
        },
        {
            p: 'The play has music and dance.'
        },
        {
            box: [
                '**First reading of the play:**',
                '13 December 2026',
                '6 pm to 9 pm',
                'Miriam Makeba Saal\nAm Sudhaus 2\n12053 Berlin',
                'The reading is in German.'
            ]
        },
        {
            h2: 'Workshops'
        },
        {
            p: 'We do workshops in schools.'
        },
        {
            p: 'In a workshop, you can play theatre, dance and make music.'
        },
        {
            p: 'You do not need to know anything before.'
        },
        {
            p: 'You can bring your own ideas.'
        },
        {
            h2: 'Theatre for young people'
        },
        {
            p: 'Young people from 9 to 19 years can join.'
        },
        {
            p: 'It is every Saturday and Sunday.'
        },
        {
            p: 'Please ask us for the exact day.'
        },
        {
            p: 'It is from 2 pm to 5 pm.'
        },
        {
            p: 'It is free. You do not have to pay.'
        },
        {
            h2: 'How can you contact us?'
        },
        {
            p: 'You can write an e-mail to:'
        },
        {
            big: '[info@dekolonizart.com](mailto:info@dekolonizart.com)'
        },
        {
            p: 'Or you can use our [contact page](/contact).'
        },
        {
            h2: 'How to use this website'
        },
        {
            p: 'At the top of every page there is a button: **Accessibility**.'
        },
        {
            p: 'There you can:'
        },
        {
            list: [
                'make the text bigger.',
                'make the colours stronger.',
                'stop the moving pictures.'
            ]
        },
        {
            p: 'You can find hard words in our [glossary](/glossary).'
        },
        {
            p: 'Diese Seite gibt es auch in [Leichter Sprache auf Deutsch](/de/easy-read).',
            lang: 'de'
        },
        {
            p: 'Cette page existe aussi en [français facile à lire](/fr/easy-read).',
            lang: 'fr'
        }
    ]
};
const de = {
    eyebrow: 'Leichte Sprache',
    title: 'Deko·loniz·Art in Leichter Sprache',
    intro: 'Hier erklären wir unsere Internet·seite in Leichter Sprache.',
    draft: '**Hinweis:** Dieser Text ist nach den Regeln für Leichte Sprache geschrieben. Eine Prüf·gruppe hat den Text noch nicht geprüft.',
    blocks: [
        {
            h2: 'Wer sind wir?'
        },
        {
            p: 'Wir heißen Deko·loniz·Art.'
        },
        {
            p: 'Wir sind eine Gruppe von Künstlern und Künstlerinnen.'
        },
        {
            p: 'Wir sind in Berlin.'
        },
        {
            p: 'Uns gibt es seit dem Jahr 2025.'
        },
        {
            h2: 'Was machen wir?'
        },
        {
            p: 'Wir machen Theater.'
        },
        {
            p: 'Wir tanzen und machen Musik.'
        },
        {
            p: 'Wir erzählen Geschichten aus der Vergangenheit.'
        },
        {
            p: 'Wir erzählen die Geschichten so, wie Menschen aus Afrika sie sehen.'
        },
        {
            p: 'Viele Geschichts·bücher erzählen nur die Sicht von den Kolonial·mächten.'
        },
        {
            explain: '**Kolonial·mächte** sind Länder. Diese Länder haben in anderen Teilen der Welt Land genommen. Sie haben dabei Gewalt benutzt. Auch Deutschland war eine Kolonial·macht.'
        },
        {
            h2: 'Unser Theater·stück'
        },
        {
            p: 'Unser Theater·stück handelt von einem König in Kamerun.'
        },
        {
            p: 'Kamerun ist ein Land in Afrika.'
        },
        {
            p: 'Der König hieß Rudolf Duala Manga Bell.'
        },
        {
            p: 'Er hat für die Rechte von seinem Volk gekämpft.'
        },
        {
            p: 'In dem Stück gibt es Musik und Tanz.'
        },
        {
            box: [
                '**Die erste Lesung von dem Stück ist am:**',
                '13. Dezember 2026',
                'von 18 Uhr bis 21 Uhr',
                'Miriam Makeba Saal\nAm Sudhaus 2\n12053 Berlin'
            ]
        },
        {
            explain: 'Bei einer **Lesung** lesen Schau·spieler das Stück vor. Es gibt dabei auch Musik und Tanz.'
        },
        {
            h2: 'Kurse in Schulen'
        },
        {
            p: 'Wir machen Kurse in Schulen.'
        },
        {
            p: 'In den Kursen kann man Theater spielen.'
        },
        {
            p: 'Man kann tanzen und Musik machen.'
        },
        {
            p: 'Man muss vorher nichts können.'
        },
        {
            p: 'Man kann eigene Ideen mit·bringen.'
        },
        {
            h2: 'Theater für junge Menschen'
        },
        {
            p: 'Junge Menschen von 9 bis 19 Jahren können mit·machen.'
        },
        {
            p: 'Das Theater ist am Samstag und am Sonntag.'
        },
        {
            p: 'Bitte fragen Sie uns nach dem genauen Tag.'
        },
        {
            p: 'Es geht von 14 Uhr bis 17 Uhr.'
        },
        {
            p: 'Es kostet nichts.'
        },
        {
            h2: 'So erreichen Sie uns'
        },
        {
            p: 'Sie können uns eine E-Mail schreiben:'
        },
        {
            big: '[info@dekolonizart.com](mailto:info@dekolonizart.com)'
        },
        {
            p: 'Oder Sie benutzen unsere [Kontakt·seite](/contact).'
        },
        {
            h2: 'So benutzen Sie die Internet·seite'
        },
        {
            p: 'Oben auf jeder Seite ist ein Knopf.'
        },
        {
            p: 'Auf dem Knopf steht: **Barriere·freiheit**.'
        },
        {
            p: 'Dort können Sie:'
        },
        {
            list: [
                'die Schrift größer machen.',
                'die Farben stärker machen.',
                'die Bewegungen aus·schalten.'
            ]
        },
        {
            p: 'Die Internet·seite gibt es auf Deutsch, Englisch und Französisch.'
        },
        {
            p: 'Oben auf jeder Seite können Sie die Sprache wählen: **DE** heißt Deutsch.'
        },
        {
            p: 'This page is also available in [easy read English](/easy-read "en").',
            lang: 'en'
        },
        {
            p: 'Cette page existe aussi en [français facile à lire](/fr/easy-read).',
            lang: 'fr'
        }
    ]
};
const fr = {
    eyebrow: 'Facile à lire et à comprendre',
    title: 'DekolonizArt en facile à lire',
    intro: 'Cette page explique notre site avec des mots simples.',
    draft: '**Attention :** ce texte suit les règles du « facile à lire et à comprendre » (FALC). Il n’a pas encore été relu par des personnes concernées.',
    blocks: [
        {
            h2: 'Qui sommes-nous ?'
        },
        {
            p: 'Nous sommes DekolonizArt.'
        },
        {
            p: 'Nous sommes un groupe d’artistes.'
        },
        {
            p: 'Nous sommes à Berlin, en Allemagne.'
        },
        {
            p: 'Nous existons depuis l’année 2025.'
        },
        {
            h2: 'Que faisons-nous ?'
        },
        {
            p: 'Nous faisons du théâtre.'
        },
        {
            p: 'Nous dansons et nous faisons de la musique.'
        },
        {
            p: 'Nous racontons des histoires du passé.'
        },
        {
            p: 'Nous racontons ces histoires comme les voient les personnes d’Afrique.'
        },
        {
            p: 'Beaucoup de livres d’histoire racontent seulement le point de vue des puissances coloniales.'
        },
        {
            explain: 'Les **puissances coloniales** sont des pays. Ces pays ont pris des terres dans d’autres parties du monde. Ils ont utilisé la violence. L’Allemagne et la France étaient aussi des puissances coloniales.'
        },
        {
            h2: 'Notre pièce de théâtre'
        },
        {
            p: 'Notre pièce parle d’un roi au Cameroun.'
        },
        {
            p: 'Le Cameroun est un pays d’Afrique.'
        },
        {
            p: 'Le roi s’appelait Rudolf Duala Manga Bell.'
        },
        {
            p: 'Il s’est battu pour les droits de son peuple.'
        },
        {
            p: 'Dans la pièce, il y a de la musique et de la danse.'
        },
        {
            box: [
                '**La première lecture de la pièce a lieu le :**',
                '13 décembre 2026',
                'de 18 heures à 21 heures',
                'Miriam Makeba Saal\nAm Sudhaus 2\n12053 Berlin',
                'La lecture est en allemand.'
            ]
        },
        {
            explain: 'Pendant une **lecture**, des comédiens lisent la pièce à voix haute. Il y a aussi de la musique et de la danse.'
        },
        {
            h2: 'Des ateliers dans les écoles'
        },
        {
            p: 'Nous faisons des ateliers dans les écoles.'
        },
        {
            p: 'Dans un atelier, on peut faire du théâtre.'
        },
        {
            p: 'On peut danser et faire de la musique.'
        },
        {
            p: 'Il n’est pas nécessaire de savoir quelque chose avant.'
        },
        {
            p: 'On peut apporter ses propres idées.'
        },
        {
            h2: 'Du théâtre pour les jeunes'
        },
        {
            p: 'Les jeunes de 9 à 19 ans peuvent participer.'
        },
        {
            p: 'C’est le samedi et le dimanche.'
        },
        {
            p: 'Demandez-nous le jour exact.'
        },
        {
            p: 'C’est de 14 heures à 17 heures.'
        },
        {
            p: 'C’est gratuit. Vous ne payez rien.'
        },
        {
            h2: 'Comment nous contacter ?'
        },
        {
            p: 'Vous pouvez écrire un e-mail à :'
        },
        {
            big: '[info@dekolonizart.com](mailto:info@dekolonizart.com)'
        },
        {
            p: 'Ou vous pouvez utiliser notre [page de contact](/contact).'
        },
        {
            h2: 'Comment utiliser ce site'
        },
        {
            p: 'En haut de chaque page, il y a un bouton.'
        },
        {
            p: 'Sur ce bouton, il est écrit : **Accessibilité**.'
        },
        {
            p: 'Avec ce bouton, vous pouvez :'
        },
        {
            list: [
                'agrandir le texte.',
                'rendre les couleurs plus fortes.',
                'arrêter les images qui bougent.'
            ]
        },
        {
            p: 'Le site existe en français, en allemand et en anglais.'
        },
        {
            p: 'En haut de chaque page, vous pouvez choisir la langue : **FR** veut dire français.'
        },
        {
            p: 'Vous trouvez les mots difficiles dans notre [glossaire](/glossary).'
        },
        {
            p: 'Diese Seite gibt es auch in [Leichter Sprache auf Deutsch](/de/easy-read).',
            lang: 'de'
        },
        {
            p: 'This page is also available in [easy read English](/easy-read "en").',
            lang: 'en'
        }
    ]
};
const easyRead = {
    en,
    de,
    fr
};
}),
"[project]/src/content/events.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveEvents",
    ()=>resolveEvents,
    "resolveProductionEvents",
    ()=>resolveProductionEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$agenda$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/agenda.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/media.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$productions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/productions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
function resolveEvents(t, locale) {
    const l = (href)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localizePath"])(href, locale);
    const otherLang = (lang)=>lang && lang !== locale ? lang : undefined;
    const searchable = (...parts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeForSearch"])(parts.filter(Boolean).join(' '));
    /** `occurrence` names one dated performance; without it the card shows the production's full title. */ const fromProduction = (id, production, when, occurrence)=>{
        const show = t.shows[production.slug];
        const categoryLabel = t.allEvents.categories[production.category];
        const titledByOccurrence = occurrence && !occurrence.asSubtitle;
        const subtitle = occurrence ? occurrence.asSubtitle ? occurrence.title : production.shortTitle : undefined;
        return {
            id,
            category: production.category,
            categoryLabel,
            when,
            title: titledByOccurrence ? occurrence.title : show.title,
            titleLang: titledByOccurrence ? undefined : otherLang(production.titleLang),
            subtitle,
            text: show.text,
            primary: {
                href: l((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$productions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bookingPath"])(production.slug)),
                label: t.showCard.book,
                kind: 'booking'
            },
            secondary: {
                href: l((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$productions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productionPath"])(production.slug)),
                label: t.showCard.info
            },
            image: production.image ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["posters"][production.image.key] : undefined,
            place: production.atCurrentVenue ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["venue"].name : undefined,
            search: searchable(production.shortTitle, show.title, production.subtitle, occurrence?.title, when, categoryLabel)
        };
    };
    const dated = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$agenda$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["agenda"].flatMap((entry)=>{
        const occurrence = t.events[entry.id];
        if ('production' in entry) {
            const production = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$productions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productions"].find((p)=>p.slug === entry.production);
            const asSubtitle = 'cardTitle' in entry && entry.cardTitle === 'production';
            return production ? [
                fromProduction(entry.id, production, occurrence.date, {
                    title: occurrence.title,
                    asSubtitle
                })
            ] : [];
        }
        // Theater & Geschichte – the youth workshop of MeMo (sign-up, not ticketed).
        const youth = t.artistic.youth;
        const categoryLabel = t.allEvents.categories[entry.category];
        return [
            {
                id: entry.id,
                category: entry.category,
                categoryLabel,
                when: occurrence.date,
                title: youth.h2,
                titleLang: otherLang('de'),
                subtitle: occurrence.title,
                text: youth.lead,
                primary: {
                    href: l('/contact'),
                    label: youth.cta,
                    kind: 'signup'
                },
                secondary: {
                    href: l(entry.href),
                    label: t.common.knowMore
                },
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["posters"].theaterGeschichte,
                place: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["venue"].place,
                search: searchable(youth.h2, youth.h2Translation, occurrence.title, occurrence.date, categoryLabel)
            }
        ];
    });
    const withDates = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$agenda$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["agenda"].flatMap((entry)=>'production' in entry ? [
            entry.production
        ] : []));
    const undated = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$productions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productions"].filter((production)=>!withDates.has(production.slug)).map((production)=>fromProduction(production.slug, production, t.shows[production.slug].when));
    return [
        ...dated,
        ...undated
    ];
}
function resolveProductionEvents(t, locale) {
    const all = resolveEvents(t, locale);
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$productions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productions"].map((production)=>{
        const own = all.find((event)=>event.id === production.slug);
        if (own) return own;
        // Productions with agenda dates: reuse the first dated entry's links, but show the production itself.
        const dated = all.find((event)=>event.secondary.href.endsWith((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$productions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["productionPath"])(production.slug)));
        const show = t.shows[production.slug];
        return {
            ...dated,
            id: production.slug,
            when: show.when,
            title: show.title,
            titleLang: production.titleLang && production.titleLang !== locale ? production.titleLang : undefined,
            subtitle: undefined,
            text: show.text
        };
    });
}
}),
"[project]/src/content/media.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closingPortrait",
    ()=>closingPortrait,
    "heroImages",
    ()=>heroImages,
    "partners",
    ()=>partners,
    "posters",
    ()=>posters,
    "resolvePoster",
    ()=>resolvePoster,
    "workshopBand",
    ()=>workshopBand,
    "workshops",
    ()=>workshops
]);
const posters = {
    saveTheDate: {
        src: '/img/media/poster-save-the-date.jpg',
        width: 1135,
        height: 1600
    },
    theaterGeschichte: {
        src: '/img/media/poster-theater-geschichte.jpg',
        width: 1135,
        height: 1600
    },
    doualaMangaBell: {
        src: '/img/media/poster-douala-manga-bell.webp',
        width: 1080,
        height: 1350
    },
    melilla: {
        src: '/img/media/the-tragedy-of-melilla.webp',
        width: 1920,
        height: 896
    }
};
const heroImages = {
    doualaMangaBell: {
        src: '/img/media/douala-manga-bell-portrait.webp',
        width: 557,
        height: 512,
        position: '55% 12%'
    },
    melilla: {
        ...posters.melilla,
        position: '50% 50%'
    }
};
function resolvePoster(t, key) {
    return {
        ...posters[key],
        alt: t.posters[key]
    };
}
const closingPortrait = {
    src: '/img/team/ngako-keuni.webp',
    width: 1920,
    height: 1280
};
const workshops = [
    {
        id: 'spandau',
        image: {
            src: '/img/media/workshop-spandau.jpg',
            width: 1800,
            height: 1350
        }
    },
    {
        id: 'doha',
        image: {
            src: '/img/media/workshop-doha-group.jpg',
            width: 1800,
            height: 1200
        }
    }
];
const workshopBand = {
    src: '/img/media/workshop-doha-drum.jpg',
    width: 1800,
    height: 1200
};
const partners = [
    {
        name: 'Conservatoire Supérieur de Musique et des Arts',
        href: 'https://conservatoire-sup-musiqart.com/',
        logo: {
            src: '/img/partners/conservatoire.png',
            width: 440,
            height: 440
        }
    },
    {
        name: 'Sozial-kulturelle Netzwerke casa e.V.',
        lang: 'de',
        href: 'https://casa-ev.de/',
        logo: {
            src: '/img/partners/casa.png',
            width: 440,
            height: 440
        }
    }
];
}),
"[project]/src/content/offers.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "offerImages",
    ()=>offerImages,
    "offers",
    ()=>offers,
    "resolveOffers",
    ()=>resolveOffers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/media.ts [app-rsc] (ecmascript)");
;
const offerImages = {
    performance: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["posters"].melilla,
        position: '50% 50%'
    },
    workshops: {
        src: '/img/media/offer-workshops.webp',
        width: 1200,
        height: 638,
        position: '35% 50%'
    },
    movement: {
        src: '/img/media/offer-movement.webp',
        width: 1024,
        height: 576,
        position: '50% 50%'
    }
};
const offers = [
    {
        id: 'performance',
        href: '/theater',
        image: offerImages.performance
    },
    {
        id: 'workshops',
        href: '/artistic',
        image: offerImages.workshops
    },
    {
        id: 'movement',
        href: '/movement-dance',
        image: offerImages.movement
    }
];
function resolveOffers(t) {
    return offers.map((offer)=>({
            ...offer,
            ...t.offers[offer.id]
        }));
}
}),
"[project]/src/content/support.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** External destinations remain null until the owner supplies real invite URLs. */ __turbopack_context__.s([
    "supportConfig",
    ()=>supportConfig
]);
const supportConfig = {
    donationProvider: 'WhyDonate',
    donationUrl: null,
    donationWidget: {
        slug: 'dekolonizart',
        primaryColor: '#135406',
        secondaryColor: '#9a391b',
        fontFamily: 'Source Sans Pro',
        buttonRadius: 27,
        cardRadius: 21,
        donationAmountSize: 16,
        buttonTextSize: 20
    },
    community: {
        whatsappUrl: 'https://chat.whatsapp.com/LXX7vkIECDsH0eDmaVzAYG',
        signupEmail: 'info@dekolonizart.com'
    },
    brevo: {
        apiKeyEnv: 'BREVO_API_KEY',
        listIdEnv: 'BREVO_LIST_ID'
    }
};
}),
"[project]/src/content/team.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initials",
    ()=>initials,
    "team",
    ()=>team
]);
const team = [
    {
        name: 'Ngako Keuni',
        role: 'founder',
        photo: {
            src: '/img/team/ngako-keuni.webp',
            width: 1920,
            height: 1280,
            position: '63% 30%'
        }
    }
];
function initials(name) {
    return name.split(' ').map((part)=>part[0]).join('').slice(0, 2);
}
}),
"[project]/src/lib/search.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Forgiving text search: lower case, no accents, typographic quotes and
 * dashes folded, so "evenement" finds "Événement" and "tragedie" finds
 * "Tragédie".
 */ __turbopack_context__.s([
    "matchesQuery",
    ()=>matchesQuery,
    "normalizeForSearch",
    ()=>normalizeForSearch
]);
function normalizeForSearch(text) {
    return text.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[’‘`´]/g, "'").replace(/[–—]/g, '-').toLowerCase().replace(/\s+/g, ' ').trim();
}
function matchesQuery(haystack, query) {
    return normalizeForSearch(query).split(' ').filter(Boolean).every((word)=>haystack.includes(word));
}
}),
"[project]/src/lib/youtube.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "youTubeEmbedUrl",
    ()=>youTubeEmbedUrl,
    "youTubeId",
    ()=>youTubeId
]);
const VIDEO_ID = /^[\w-]{11}$/;
const HOSTS = new Set([
    'youtube.com',
    'www.youtube.com',
    'm.youtube.com',
    'youtube-nocookie.com',
    'www.youtube-nocookie.com'
]);
function youTubeId(link) {
    let url;
    try {
        url = new URL(link);
    } catch  {
        throw new Error(`Intro video: "${link}" is not a URL.`);
    }
    let id = null;
    if (url.hostname === 'youtu.be') {
        id = url.pathname.slice(1);
    } else if (HOSTS.has(url.hostname)) {
        id = url.pathname === '/watch' ? url.searchParams.get('v') : url.pathname.match(/^\/(?:embed|shorts|live)\/([^/]+)/)?.[1] ?? null;
    }
    if (!id || !VIDEO_ID.test(id)) throw new Error(`Intro video: "${link}" is not a YouTube video link.`);
    return id;
}
function youTubeEmbedUrl(id, { autoplay }) {
    const params = new URLSearchParams({
        autoplay: autoplay ? '1' : '0',
        mute: autoplay ? '1' : '0',
        loop: '1',
        playlist: id,
        playsinline: '1',
        rel: '0'
    });
    return `https://www.youtube-nocookie.com/embed/${id}?${params}`;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0z1m6w-cz85gu._.js.map