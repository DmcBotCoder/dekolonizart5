(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/v5/CommunitySignupForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommunitySignupForm",
    ()=>CommunitySignupForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/countries.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const roles = [
    [
        'artist',
        'Artist'
    ],
    [
        'curator',
        'Curator'
    ],
    [
        'culturalWorker',
        'Cultural worker'
    ],
    [
        'researcher',
        'Researcher'
    ],
    [
        'educator',
        'Educator'
    ],
    [
        'organisation',
        'Organisation / institution'
    ],
    [
        'student',
        'Student'
    ],
    [
        'other',
        'Other'
    ]
];
const interests = [
    [
        'art',
        'Art & artistic practice'
    ],
    [
        'research',
        'Decolonial research'
    ],
    [
        'institutions',
        'Cultural institutions'
    ],
    [
        'education',
        'Education'
    ],
    [
        'archives',
        'Archives & memory'
    ],
    [
        'community',
        'Community / collective practice'
    ],
    [
        'other',
        'Other'
    ]
];
function CommunitySignupForm({ labels, whatsappUrl }) {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [interested, setInterested] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    async function submit(event) {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const payload = {
            firstName: String(form.get('firstName') ?? '').trim(),
            lastName: String(form.get('lastName') ?? '').trim(),
            email: String(form.get('email') ?? '').trim(),
            city: String(form.get('city') ?? '').trim(),
            country: String(form.get('country') ?? ''),
            describes: String(form.get('describes') ?? ''),
            website: String(form.get('website') ?? '').trim(),
            interested,
            openQuestion: String(form.get('openQuestion') ?? '').trim(),
            consent: form.get('consent') === 'on',
            honeypot: String(form.get('company') ?? '')
        };
        if (!payload.firstName || !payload.lastName || !payload.email || !payload.city || !payload.country || !payload.describes || !payload.consent) {
            setError(labels.invalid);
            setState('error');
            return;
        }
        setState('sending');
        setError('');
        try {
            const response = await fetch('/api/community', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                const body = await response.json().catch(()=>({}));
                throw new Error(body.error === 'community_not_configured' ? 'unavailable' : 'provider');
            }
            setState('success');
        } catch (cause) {
            setState('error');
            setError(cause instanceof Error && cause.message === 'unavailable' ? labels.unavailable : labels.providerError);
        }
    }
    if (state === 'success') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "v5-community-success",
        role: "status",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: labels.success
            }, void 0, false, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 13,
                columnNumber: 87
            }, this),
            whatsappUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "solid-link",
                href: whatsappUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                    labels.whatsappCta,
                    " ↗"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 13,
                columnNumber: 126
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
        lineNumber: 13,
        columnNumber: 35
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "v5-community-form",
        onSubmit: submit,
        noValidate: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: labels.intro
            }, void 0, false, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 14,
                columnNumber: 75
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "v5-community-required",
                children: labels.requiredNote
            }, void 0, false, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 14,
                columnNumber: 96
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    labels.firstName,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "firstName",
                        required: true,
                        autoComplete: "given-name"
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                        lineNumber: 14,
                        columnNumber: 183
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 14,
                columnNumber: 158
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    labels.lastName,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "lastName",
                        required: true,
                        autoComplete: "family-name"
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                        lineNumber: 14,
                        columnNumber: 276
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 14,
                columnNumber: 252
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    labels.email,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "email",
                        type: "email",
                        required: true,
                        autoComplete: "email"
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                        lineNumber: 14,
                        columnNumber: 366
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 14,
                columnNumber: 345
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    labels.city,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "city",
                        required: true,
                        autoComplete: "address-level2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                        lineNumber: 14,
                        columnNumber: 459
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 14,
                columnNumber: 439
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    labels.country,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "country",
                        required: true,
                        defaultValue: "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                disabled: true,
                                children: "—"
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                                lineNumber: 14,
                                columnNumber: 598
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countryOptions"].map(([value, name])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: value,
                                    children: name
                                }, value, false, {
                                    fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                                    lineNumber: 14,
                                    columnNumber: 673
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                        lineNumber: 14,
                        columnNumber: 550
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 14,
                columnNumber: 527
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    labels.describes,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "describes",
                        required: true,
                        defaultValue: "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                disabled: true,
                                children: "—"
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                                lineNumber: 14,
                                columnNumber: 816
                            }, this),
                            roles.map(([value, key])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: key,
                                    children: labels.describesOptions[value]
                                }, value, false, {
                                    fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                                    lineNumber: 14,
                                    columnNumber: 881
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                        lineNumber: 14,
                        columnNumber: 766
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 14,
                columnNumber: 741
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    labels.website,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "v5-community-optional",
                        children: [
                            "(",
                            labels.optional,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                        lineNumber: 14,
                        columnNumber: 997
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "website",
                        type: "text",
                        autoComplete: "url"
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                        lineNumber: 14,
                        columnNumber: 1063
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 14,
                columnNumber: 973
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        children: [
                            labels.interested,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "v5-community-optional",
                                children: [
                                    "(",
                                    labels.optional,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                                lineNumber: 14,
                                columnNumber: 1164
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                        lineNumber: 14,
                        columnNumber: 1136
                    }, this),
                    interests.map(([value, key])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "v5-community-check",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: interested.includes(key),
                                    onChange: (event)=>setInterested((current)=>event.target.checked ? [
                                                ...current,
                                                key
                                            ] : current.filter((item)=>item !== key))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                                    lineNumber: 14,
                                    columnNumber: 1322
                                }, this),
                                labels.interestedOptions[value]
                            ]
                        }, value, true, {
                            fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                            lineNumber: 14,
                            columnNumber: 1272
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 14,
                columnNumber: 1126
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    labels.openQuestion,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "v5-community-optional",
                        children: [
                            "(",
                            labels.optional,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                        lineNumber: 14,
                        columnNumber: 1597
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        name: "openQuestion",
                        rows: 4
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                        lineNumber: 14,
                        columnNumber: 1663
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 14,
                columnNumber: 1568
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "v5-community-consent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "consent",
                        type: "checkbox",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                        lineNumber: 14,
                        columnNumber: 1752
                    }, this),
                    labels.consent
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 14,
                columnNumber: 1712
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "v5-community-honeypot",
                "aria-hidden": "true",
                children: [
                    "Company",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "company",
                        tabIndex: -1,
                        autoComplete: "off"
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                        lineNumber: 14,
                        columnNumber: 1892
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 14,
                columnNumber: 1825
            }, this),
            state === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "v5-community-error",
                role: "alert",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 14,
                columnNumber: 1979
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "solid-link",
                type: "submit",
                disabled: state === 'sending',
                children: state === 'sending' ? labels.submitting : labels.submit
            }, void 0, false, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 14,
                columnNumber: 2038
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
_s(CommunitySignupForm, "P0DlFXe0UqWkXXqS6kWA+ujr7fU=");
_c = CommunitySignupForm;
var _c;
__turbopack_context__.k.register(_c, "CommunitySignupForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/v5/ReadMore.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadMore",
    ()=>ReadMore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ReadMore({ text, more, labels }) {
    _s();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/v5/ReadMore.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            more && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: expanded ? 'read-more-extra is-visible' : 'read-more-extra',
                children: [
                    " ",
                    more
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/ReadMore.tsx",
                lineNumber: 10,
                columnNumber: 16
            }, this),
            more && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "text-toggle",
                type: "button",
                onClick: ()=>setExpanded((value)=>!value),
                children: [
                    expanded ? labels.less : labels.more,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: expanded ? '−' : '+'
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/ReadMore.tsx",
                        lineNumber: 11,
                        columnNumber: 148
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/ReadMore.tsx",
                lineNumber: 11,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/ReadMore.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_s(ReadMore, "DuL5jiiQQFgbn7gBKAyxwS/H4Ek=");
_c = ReadMore;
var _c;
__turbopack_context__.k.register(_c, "ReadMore");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/v5/VibetixEmbed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VibetixEmbed",
    ()=>VibetixEmbed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function VibetixEmbed({ embedId, checkoutUrl, fallbackUrl, labels }) {
    _s();
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [src, setSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(checkoutUrl);
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1000);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VibetixEmbed.useEffect": ()=>{
            const url = new URL(checkoutUrl);
            url.searchParams.set('return_url', window.location.href);
            const timer = window.setTimeout({
                "VibetixEmbed.useEffect.timer": ()=>setSrc(url.toString())
            }["VibetixEmbed.useEffect.timer"], 0);
            return ({
                "VibetixEmbed.useEffect": ()=>window.clearTimeout(timer)
            })["VibetixEmbed.useEffect"];
        }
    }["VibetixEmbed.useEffect"], [
        checkoutUrl
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VibetixEmbed.useEffect": ()=>{
            const onMessage = {
                "VibetixEmbed.useEffect.onMessage": (event)=>{
                    if (!frame.current || event.source !== frame.current.contentWindow) return;
                    try {
                        const hostname = new URL(event.origin).hostname;
                        if (hostname !== 'vibetix.io' && !hostname.endsWith('.vibetix.io')) return;
                    } catch  {
                        return;
                    }
                    const data = event.data ?? {};
                    if (String(data.id ?? '') !== embedId) return;
                    if (data.type === 'vibetix:ready') {
                        setLoading(false);
                        setFailed(false);
                    }
                    if (data.type === 'vibetix:error') {
                        setLoading(false);
                        setFailed(true);
                    }
                    if (data.type === 'vibetix:height' || data.type === 'vibetix:resize') {
                        const nextHeight = Number.parseInt(String(data.height ?? ''), 10);
                        if (Number.isFinite(nextHeight)) setHeight(Math.max(300, nextHeight));
                    }
                }
            }["VibetixEmbed.useEffect.onMessage"];
            window.addEventListener('message', onMessage);
            const timeout = window.setTimeout({
                "VibetixEmbed.useEffect.timeout": ()=>{
                    if (loading) {
                        setLoading(false);
                        setFailed(true);
                    }
                }
            }["VibetixEmbed.useEffect.timeout"], 15000);
            return ({
                "VibetixEmbed.useEffect": ()=>{
                    window.removeEventListener('message', onMessage);
                    window.clearTimeout(timeout);
                }
            })["VibetixEmbed.useEffect"];
        }
    }["VibetixEmbed.useEffect"], [
        embedId,
        loading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "v5-vibetix",
        style: {
            minHeight: `${height}px`
        },
        children: [
            loading && !failed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "v5-vibetix-loading",
                children: labels.loading
            }, void 0, false, {
                fileName: "[project]/src/components/v5/VibetixEmbed.tsx",
                lineNumber: 50,
                columnNumber: 28
            }, this),
            failed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "v5-vibetix-error",
                role: "alert",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: labels.error
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/VibetixEmbed.tsx",
                        lineNumber: 51,
                        columnNumber: 63
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: fallbackUrl ?? src,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: labels.fallback
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/VibetixEmbed.tsx",
                        lineNumber: 51,
                        columnNumber: 94
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/v5/VibetixEmbed.tsx",
                lineNumber: 51,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                ref: frame,
                id: embedId,
                src: src,
                title: "VibeTix ticket shop",
                loading: "eager",
                scrolling: "auto",
                referrerPolicy: "origin-when-cross-origin",
                allow: "payment; clipboard-write; fullscreen",
                sandbox: "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation",
                onError: ()=>{
                    setLoading(false);
                    setFailed(true);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/v5/VibetixEmbed.tsx",
                lineNumber: 52,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/v5/VibetixEmbed.tsx",
        lineNumber: 49,
        columnNumber: 10
    }, this);
}
_s(VibetixEmbed, "AxJn/jsXW7lMD1DKFlfSXPFzLWs=");
_c = VibetixEmbed;
var _c;
__turbopack_context__.k.register(_c, "VibetixEmbed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/content/countries.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countryCodes",
    ()=>countryCodes,
    "countryOptions",
    ()=>countryOptions
]);
const countryOptions = [
    [
        "af",
        "Afghanistan"
    ],
    [
        "ax",
        "Aland Islands"
    ],
    [
        "al",
        "Albania"
    ],
    [
        "dz",
        "Algeria"
    ],
    [
        "as",
        "American Samoa"
    ],
    [
        "ad",
        "Andorra"
    ],
    [
        "ao",
        "Angola"
    ],
    [
        "ai",
        "Anguilla"
    ],
    [
        "aq",
        "Antarctica"
    ],
    [
        "ag",
        "Antigua and Barbuda"
    ],
    [
        "ar",
        "Argentina"
    ],
    [
        "am",
        "Armenia"
    ],
    [
        "aw",
        "Aruba"
    ],
    [
        "au",
        "Australia"
    ],
    [
        "at",
        "Austria"
    ],
    [
        "az",
        "Azerbaijan"
    ],
    [
        "bs",
        "Bahamas"
    ],
    [
        "bh",
        "Bahrain"
    ],
    [
        "bd",
        "Bangladesh"
    ],
    [
        "bb",
        "Barbados"
    ],
    [
        "by",
        "Belarus"
    ],
    [
        "be",
        "Belgium"
    ],
    [
        "bz",
        "Belize"
    ],
    [
        "bj",
        "Benin"
    ],
    [
        "bm",
        "Bermuda"
    ],
    [
        "bt",
        "Bhutan"
    ],
    [
        "bo",
        "Bolivia, Plurinational State of"
    ],
    [
        "bq",
        "Bonaire, Sint Eustatius and Saba"
    ],
    [
        "ba",
        "Bosnia and Herzegovina"
    ],
    [
        "bw",
        "Botswana"
    ],
    [
        "bv",
        "Bouvet Island"
    ],
    [
        "br",
        "Brazil"
    ],
    [
        "io",
        "British Indian Ocean Territory"
    ],
    [
        "bn",
        "Brunei Darussalam"
    ],
    [
        "bg",
        "Bulgaria"
    ],
    [
        "bf",
        "Burkina Faso"
    ],
    [
        "bi",
        "Burundi"
    ],
    [
        "kh",
        "Cambodia"
    ],
    [
        "cm",
        "Cameroon"
    ],
    [
        "ca",
        "Canada"
    ],
    [
        "ic",
        "Canary Islands"
    ],
    [
        "cv",
        "Cape Verde"
    ],
    [
        "ky",
        "Cayman Islands"
    ],
    [
        "cf",
        "Central African Republic"
    ],
    [
        "ea",
        "Ceuta and Melila"
    ],
    [
        "td",
        "Chad"
    ],
    [
        "cl",
        "Chile"
    ],
    [
        "cn",
        "China"
    ],
    [
        "cx",
        "Christmas Island"
    ],
    [
        "cc",
        "Cocos (Keeling) Islands"
    ],
    [
        "co",
        "Colombia"
    ],
    [
        "km",
        "Comoros"
    ],
    [
        "cg",
        "Congo"
    ],
    [
        "cd",
        "Democratic Republic of the Congo"
    ],
    [
        "ck",
        "Cook Islands"
    ],
    [
        "cr",
        "Costa Rica"
    ],
    [
        "ci",
        "Cote dIvoire"
    ],
    [
        "hr",
        "Croatia"
    ],
    [
        "cu",
        "Cuba"
    ],
    [
        "cw",
        "Curacao"
    ],
    [
        "cy",
        "Cyprus"
    ],
    [
        "cz",
        "Czech Republic"
    ],
    [
        "dk",
        "Denmark"
    ],
    [
        "dj",
        "Djibouti"
    ],
    [
        "dm",
        "Dominica"
    ],
    [
        "do",
        "Dominican Republic"
    ],
    [
        "ec",
        "Ecuador"
    ],
    [
        "eg",
        "Egypt"
    ],
    [
        "sv",
        "El Salvador"
    ],
    [
        "gq",
        "Equatorial Guinea"
    ],
    [
        "er",
        "Eritrea"
    ],
    [
        "ee",
        "Estonia"
    ],
    [
        "et",
        "Ethiopia"
    ],
    [
        "fk",
        "Falkland Islands (Malvinas)"
    ],
    [
        "fo",
        "Faroe Islands"
    ],
    [
        "fj",
        "Fiji"
    ],
    [
        "fi",
        "Finland"
    ],
    [
        "fr",
        "France"
    ],
    [
        "gf",
        "French Guiana"
    ],
    [
        "pf",
        "French Polynesia"
    ],
    [
        "tf",
        "French Southern Territories"
    ],
    [
        "ga",
        "Gabon"
    ],
    [
        "gm",
        "Gambia"
    ],
    [
        "ge",
        "Georgia"
    ],
    [
        "de",
        "Germany"
    ],
    [
        "gh",
        "Ghana"
    ],
    [
        "gi",
        "Gibraltar"
    ],
    [
        "gr",
        "Greece"
    ],
    [
        "gl",
        "Greenland"
    ],
    [
        "gd",
        "Grenada"
    ],
    [
        "gp",
        "Guadeloupe"
    ],
    [
        "gu",
        "Guam"
    ],
    [
        "gt",
        "Guatemala"
    ],
    [
        "gg",
        "Guernsey"
    ],
    [
        "gn",
        "Guinea"
    ],
    [
        "gw",
        "Guinea-Bissau"
    ],
    [
        "gy",
        "Guyana"
    ],
    [
        "ht",
        "Haiti"
    ],
    [
        "hm",
        "Heard Island and McDonald Islands"
    ],
    [
        "va",
        "Holy See (Vatican City State)"
    ],
    [
        "hn",
        "Honduras"
    ],
    [
        "hk",
        "Hong Kong"
    ],
    [
        "hu",
        "Hungary"
    ],
    [
        "is",
        "Iceland"
    ],
    [
        "in",
        "India"
    ],
    [
        "id",
        "Indonesia"
    ],
    [
        "ir",
        "Iran, Islamic Republic of"
    ],
    [
        "iq",
        "Iraq"
    ],
    [
        "ie",
        "Ireland"
    ],
    [
        "im",
        "Isle of Man"
    ],
    [
        "il",
        "Israel"
    ],
    [
        "it",
        "Italy"
    ],
    [
        "jm",
        "Jamaica"
    ],
    [
        "jp",
        "Japan"
    ],
    [
        "je",
        "Jersey"
    ],
    [
        "jo",
        "Jordan"
    ],
    [
        "kz",
        "Kazakhstan"
    ],
    [
        "ke",
        "Kenya"
    ],
    [
        "ki",
        "Kiribati"
    ],
    [
        "kp",
        "Democratic Peoples Republic of Korea"
    ],
    [
        "kr",
        "Republic of Korea"
    ],
    [
        "kw",
        "Kuwait"
    ],
    [
        "kg",
        "Kyrgyzstan"
    ],
    [
        "la",
        "Lao Peoples Democratic Republic"
    ],
    [
        "lv",
        "Latvia"
    ],
    [
        "lb",
        "Lebanon"
    ],
    [
        "ls",
        "Lesotho"
    ],
    [
        "lr",
        "Liberia"
    ],
    [
        "ly",
        "Libya"
    ],
    [
        "li",
        "Liechtenstein"
    ],
    [
        "lt",
        "Lithuania"
    ],
    [
        "lu",
        "Luxembourg"
    ],
    [
        "mo",
        "Macao"
    ],
    [
        "mk",
        "North Macedonia"
    ],
    [
        "mg",
        "Madagascar"
    ],
    [
        "mw",
        "Malawi"
    ],
    [
        "my",
        "Malaysia"
    ],
    [
        "mv",
        "Maldives"
    ],
    [
        "ml",
        "Mali"
    ],
    [
        "mt",
        "Malta"
    ],
    [
        "mh",
        "Marshall Islands"
    ],
    [
        "mq",
        "Martinique"
    ],
    [
        "mr",
        "Mauritania"
    ],
    [
        "mu",
        "Mauritius"
    ],
    [
        "yt",
        "Mayotte"
    ],
    [
        "mx",
        "Mexico"
    ],
    [
        "fm",
        "Micronesia, Federated States of"
    ],
    [
        "md",
        "Republic of Moldova"
    ],
    [
        "mc",
        "Monaco"
    ],
    [
        "mn",
        "Mongolia"
    ],
    [
        "me",
        "Montenegro"
    ],
    [
        "ms",
        "Montserrat"
    ],
    [
        "ma",
        "Morocco"
    ],
    [
        "mz",
        "Mozambique"
    ],
    [
        "mm",
        "Myanmar"
    ],
    [
        "na",
        "Namibia"
    ],
    [
        "nr",
        "Nauru"
    ],
    [
        "np",
        "Nepal"
    ],
    [
        "nl",
        "Netherlands"
    ],
    [
        "nc",
        "New Caledonia"
    ],
    [
        "nz",
        "New Zealand"
    ],
    [
        "ni",
        "Nicaragua"
    ],
    [
        "ne",
        "Niger"
    ],
    [
        "ng",
        "Nigeria"
    ],
    [
        "nu",
        "Niue"
    ],
    [
        "nf",
        "Norfolk Island"
    ],
    [
        "mp",
        "Northern Mariana Islands"
    ],
    [
        "no",
        "Norway"
    ],
    [
        "om",
        "Oman"
    ],
    [
        "pk",
        "Pakistan"
    ],
    [
        "pw",
        "Palau"
    ],
    [
        "ps",
        "State of Palestine"
    ],
    [
        "pa",
        "Panama"
    ],
    [
        "pg",
        "Papua New Guinea"
    ],
    [
        "py",
        "Paraguay"
    ],
    [
        "pe",
        "Peru"
    ],
    [
        "ph",
        "Philippines"
    ],
    [
        "pn",
        "Pitcairn"
    ],
    [
        "pl",
        "Poland"
    ],
    [
        "pt",
        "Portugal"
    ],
    [
        "pr",
        "Puerto Rico"
    ],
    [
        "qa",
        "Qatar"
    ],
    [
        "xk",
        "Kosovo"
    ],
    [
        "re",
        "Reunion"
    ],
    [
        "ro",
        "Romania"
    ],
    [
        "ru",
        "Russian Federation"
    ],
    [
        "rw",
        "Rwanda"
    ],
    [
        "bl",
        "Saint Barthelemy"
    ],
    [
        "sh",
        "Saint Helena and Tristan da Cunha"
    ],
    [
        "kn",
        "Saint Kitts and Nevis"
    ],
    [
        "lc",
        "Saint Lucia"
    ],
    [
        "mf",
        "Saint Martin (French part)"
    ],
    [
        "pm",
        "Saint Pierre and Miquelon"
    ],
    [
        "vc",
        "Saint Vincent and the Grenadines"
    ],
    [
        "ws",
        "Samoa"
    ],
    [
        "sm",
        "San Marino"
    ],
    [
        "st",
        "Sao Tome and Principe"
    ],
    [
        "sa",
        "Saudi Arabia"
    ],
    [
        "sn",
        "Senegal"
    ],
    [
        "rs",
        "Serbia"
    ],
    [
        "sc",
        "Seychelles"
    ],
    [
        "sl",
        "Sierra Leone"
    ],
    [
        "sg",
        "Singapore"
    ],
    [
        "sx",
        "Sint Maarten"
    ],
    [
        "sk",
        "Slovakia"
    ],
    [
        "si",
        "Slovenia"
    ],
    [
        "sb",
        "Solomon Islands"
    ],
    [
        "so",
        "Somalia"
    ],
    [
        "za",
        "South Africa"
    ],
    [
        "gs",
        "South Georgia and the South Sandwich Islands"
    ],
    [
        "ss",
        "South Sudan"
    ],
    [
        "es",
        "Spain"
    ],
    [
        "lk",
        "Sri Lanka"
    ],
    [
        "sd",
        "Sudan"
    ],
    [
        "sr",
        "Suriname"
    ],
    [
        "sj",
        "Svalbard and Jan Mayen"
    ],
    [
        "sz",
        "Swaziland"
    ],
    [
        "se",
        "Sweden"
    ],
    [
        "ch",
        "Switzerland"
    ],
    [
        "sy",
        "Syrian Arab Republic"
    ],
    [
        "tw",
        "Taiwan"
    ],
    [
        "tj",
        "Tajikistan"
    ],
    [
        "tz",
        "Tanzania, United Republic of"
    ],
    [
        "th",
        "Thailand"
    ],
    [
        "tl",
        "Timor-Leste"
    ],
    [
        "tg",
        "Togo"
    ],
    [
        "tk",
        "Tokelau"
    ],
    [
        "to",
        "Tonga"
    ],
    [
        "tt",
        "Trinidad and Tobago"
    ],
    [
        "tn",
        "Tunisia"
    ],
    [
        "tr",
        "Turkey"
    ],
    [
        "tm",
        "Turkmenistan"
    ],
    [
        "tc",
        "Turks and Caicos Islands"
    ],
    [
        "tv",
        "Tuvalu"
    ],
    [
        "ug",
        "Uganda"
    ],
    [
        "ua",
        "Ukraine"
    ],
    [
        "ae",
        "United Arab Emirates"
    ],
    [
        "gb",
        "United Kingdom"
    ],
    [
        "us",
        "United States"
    ],
    [
        "um",
        "United States Minor Outlying Islands"
    ],
    [
        "uy",
        "Uruguay"
    ],
    [
        "uz",
        "Uzbekistan"
    ],
    [
        "vu",
        "Vanuatu"
    ],
    [
        "ve",
        "Venezuela, Bolivarian Republic of"
    ],
    [
        "vn",
        "Vietnam"
    ],
    [
        "vg",
        "Virgin Islands, British"
    ],
    [
        "vi",
        "Virgin Islands, U.S."
    ],
    [
        "wf",
        "Wallis and Futuna"
    ],
    [
        "eh",
        "Western Sahara"
    ],
    [
        "ye",
        "Yemen"
    ],
    [
        "zm",
        "Zambia"
    ],
    [
        "zw",
        "Zimbabwe"
    ]
];
const countryCodes = new Set(countryOptions.map(([code])=>code));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1zlb4nelw--ij._.js.map