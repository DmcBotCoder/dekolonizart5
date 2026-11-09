(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/v5/CommunitySignupForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommunitySignupForm",
    ()=>CommunitySignupForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
const countryOptions = [
    [
        'cm',
        'Cameroon'
    ],
    [
        'de',
        'Germany'
    ],
    [
        'fr',
        'France'
    ],
    [
        'be',
        'Belgium'
    ],
    [
        'ch',
        'Switzerland'
    ],
    [
        'at',
        'Austria'
    ],
    [
        'gb',
        'United Kingdom'
    ],
    [
        'us',
        'United States'
    ],
    [
        'ca',
        'Canada'
    ],
    [
        'sn',
        'Senegal'
    ],
    [
        'ci',
        'Côte d’Ivoire'
    ],
    [
        'gh',
        'Ghana'
    ],
    [
        'ng',
        'Nigeria'
    ],
    [
        'za',
        'South Africa'
    ],
    [
        'ke',
        'Kenya'
    ],
    [
        'rw',
        'Rwanda'
    ],
    [
        'ug',
        'Uganda'
    ],
    [
        'tz',
        'Tanzania'
    ],
    [
        'cd',
        'Democratic Republic of the Congo'
    ],
    [
        'cg',
        'Congo'
    ],
    [
        'ga',
        'Gabon'
    ],
    [
        'td',
        'Chad'
    ],
    [
        'cf',
        'Central African Republic'
    ],
    [
        'bj',
        'Benin'
    ],
    [
        'bf',
        'Burkina Faso'
    ],
    [
        'ml',
        'Mali'
    ],
    [
        'ne',
        'Niger'
    ],
    [
        'gn',
        'Guinea'
    ],
    [
        'ma',
        'Morocco'
    ],
    [
        'dz',
        'Algeria'
    ],
    [
        'tn',
        'Tunisia'
    ],
    [
        'eg',
        'Egypt'
    ],
    [
        'br',
        'Brazil'
    ],
    [
        'mx',
        'Mexico'
    ],
    [
        'ar',
        'Argentina'
    ],
    [
        'in',
        'India'
    ],
    [
        'jp',
        'Japan'
    ],
    [
        'cn',
        'China'
    ],
    [
        'au',
        'Australia'
    ],
    [
        'es',
        'Spain'
    ],
    [
        'it',
        'Italy'
    ],
    [
        'nl',
        'Netherlands'
    ],
    [
        'pt',
        'Portugal'
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
                            countryOptions.map(([value, name])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
]);

//# sourceMappingURL=src_components_v5_06417mbclz1xl._.js.map