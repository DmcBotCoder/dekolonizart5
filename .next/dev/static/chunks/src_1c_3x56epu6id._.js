(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/v5/MenuSheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuSheet",
    ()=>MenuSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function MenuSheet({ locale, t, nav }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "index-trigger",
                type: "button",
                "aria-expanded": open,
                "aria-controls": "index-sheet",
                onClick: ()=>setOpen((value)=>!value),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: open ? t.common.close : t.common.menu
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/MenuSheet.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "trigger-glyph",
                        "aria-hidden": "true",
                        children: open ? '×' : '↗'
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/MenuSheet.tsx",
                        lineNumber: 14,
                        columnNumber: 61
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/MenuSheet.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "index-backdrop",
                onClick: ()=>setOpen(false),
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/MenuSheet.tsx",
                lineNumber: 16,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "index-sheet",
                className: open ? 'index-sheet is-open' : 'index-sheet',
                role: "dialog",
                "aria-modal": "true",
                "aria-hidden": !open,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sheet-top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: t.common.mainNav
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/MenuSheet.tsx",
                                lineNumber: 18,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "sheet-close",
                                type: "button",
                                onClick: ()=>setOpen(false),
                                "aria-label": t.common.close,
                                children: [
                                    t.common.close,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/v5/MenuSheet.tsx",
                                        lineNumber: 18,
                                        columnNumber: 209
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/MenuSheet.tsx",
                                lineNumber: 18,
                                columnNumber: 87
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/MenuSheet.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": t.common.mobileNav,
                        children: nav.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sheet-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sheet-number",
                                        children: [
                                            "0",
                                            index + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/v5/MenuSheet.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePath"])(item.href, locale),
                                                onClick: ()=>setOpen(false),
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/v5/MenuSheet.tsx",
                                                lineNumber: 24,
                                                columnNumber: 17
                                            }, this),
                                            item.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sheet-children",
                                                children: item.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePath"])(child.href, locale),
                                                        onClick: ()=>setOpen(false),
                                                        children: child.label
                                                    }, child.href, false, {
                                                        fileName: "[project]/src/components/v5/MenuSheet.tsx",
                                                        lineNumber: 25,
                                                        columnNumber: 97
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/v5/MenuSheet.tsx",
                                                lineNumber: 25,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/v5/MenuSheet.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.href, true, {
                                fileName: "[project]/src/components/v5/MenuSheet.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/MenuSheet.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sheet-bottom",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t.nav.about.feature?.text
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/MenuSheet.tsx",
                                lineNumber: 30,
                                columnNumber: 39
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePath"])('/contact', locale),
                                onClick: ()=>setOpen(false),
                                children: [
                                    "→ ",
                                    t.contact.title
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/MenuSheet.tsx",
                                lineNumber: 30,
                                columnNumber: 79
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/MenuSheet.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/MenuSheet.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/MenuSheet.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(MenuSheet, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = MenuSheet;
var _c;
__turbopack_context__.k.register(_c, "MenuSheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/v5/NewsletterForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsletterForm",
    ()=>NewsletterForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function NewsletterForm({ labels }) {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [consent, setConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    async function submit(event) {
        event.preventDefault();
        const value = email.trim();
        if (!value) {
            setError(labels.errEmpty);
            setState('error');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            setError(labels.errInvalid);
            setState('error');
            return;
        }
        if (!consent) {
            setError(labels.errConsent);
            setState('error');
            return;
        }
        setState('sending');
        setError('');
        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: value,
                    consent
                })
            });
            if (!response.ok) {
                const data = await response.json().catch(()=>({}));
                throw new Error(data.error === 'newsletter_not_configured' ? 'unavailable' : 'provider');
            }
            setState('success');
            setEmail('');
            setConsent(false);
        } catch (cause) {
            setState('error');
            setError(cause instanceof Error && cause.message === 'unavailable' ? labels.errUnavailable : labels.errProvider);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "v5-newsletter",
        onSubmit: submit,
        noValidate: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "v5-newsletter-email",
                children: labels.emailLabel
            }, void 0, false, {
                fileName: "[project]/src/components/v5/NewsletterForm.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: "v5-newsletter-email",
                type: "email",
                value: email,
                onChange: (event)=>setEmail(event.target.value),
                autoComplete: "email"
            }, void 0, false, {
                fileName: "[project]/src/components/v5/NewsletterForm.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "v5-consent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        checked: consent,
                        onChange: (event)=>setConsent(event.target.checked)
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/NewsletterForm.tsx",
                        lineNumber: 63,
                        columnNumber: 37
                    }, this),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: labels.consent
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/NewsletterForm.tsx",
                        lineNumber: 63,
                        columnNumber: 136
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/NewsletterForm.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "solid-link",
                type: "submit",
                disabled: state === 'sending',
                children: state === 'sending' ? labels.sending : labels.send
            }, void 0, false, {
                fileName: "[project]/src/components/v5/NewsletterForm.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            state === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                children: labels.thanks
            }, void 0, false, {
                fileName: "[project]/src/components/v5/NewsletterForm.tsx",
                lineNumber: 65,
                columnNumber: 31
            }, this),
            state === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/v5/NewsletterForm.tsx",
                lineNumber: 66,
                columnNumber: 29
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/NewsletterForm.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(NewsletterForm, "ghVzCiAJzsgkhbPlXFzL9O71kqs=");
_c = NewsletterForm;
var _c;
__turbopack_context__.k.register(_c, "NewsletterForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/i18n/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Locale configuration and URL helpers. Safe to import from server and
 * client code.
 *
 * URL scheme (matches the reference): English is unprefixed, the other
 * locales are prefixed – `/about`, `/de/about`, `/fr/about`.
 */ __turbopack_context__.s([
    "LOCALE_STORAGE_KEY",
    ()=>LOCALE_STORAGE_KEY,
    "defaultLocale",
    ()=>defaultLocale,
    "isLocale",
    ()=>isLocale,
    "localeInfo",
    ()=>localeInfo,
    "locales",
    ()=>locales,
    "localizePath",
    ()=>localizePath,
    "splitLocale",
    ()=>splitLocale
]);
const locales = [
    'en',
    'de',
    'fr'
];
const defaultLocale = 'en';
const LOCALE_STORAGE_KEY = 'dk-locale';
const localeInfo = {
    en: {
        short: 'EN',
        name: 'English',
        og: 'en_GB'
    },
    de: {
        short: 'DE',
        name: 'Deutsch',
        og: 'de_DE'
    },
    fr: {
        short: 'FR',
        name: 'Français',
        og: 'fr_FR'
    }
};
function isLocale(value) {
    return !!value && locales.includes(value);
}
const PREFIX = /^\/(de|fr|en)(?=\/|$|#|\?)/;
function splitLocale(pathname) {
    const match = pathname.match(PREFIX);
    const locale = match && isLocale(match[1]) ? match[1] : defaultLocale;
    let path = match ? pathname.slice(match[0].length) : pathname;
    if (!path.startsWith('/')) path = `/${path}`;
    return {
        locale,
        path
    };
}
function localizePath(path, locale) {
    if (/^(https?:|mailto:|tel:)/.test(path)) return path;
    const [, pathname = '/', rest = ''] = path.match(/^([^?#]*)(.*)$/) ?? [];
    const clean = pathname.startsWith('/') ? pathname : `/${pathname}`;
    if (locale === defaultLocale) return `${clean}${rest}`;
    return `/${locale}${clean === '/' ? '' : clean}${rest}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1c_3x56epu6id._.js.map