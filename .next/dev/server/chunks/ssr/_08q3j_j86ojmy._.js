module.exports = [
"[project]/node_modules/next/dist/client/request-idle-callback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cancelIdleCallback: null,
    requestIdleCallback: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    },
    requestIdleCallback: function() {
        return requestIdleCallback;
    }
});
const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/script.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    handleClientScriptLoad: null,
    initScriptLoader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    handleClientScriptLoad: function() {
        return handleClientScriptLoad;
    },
    initScriptLoader: function() {
        return initScriptLoader;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/head-manager-context.js [app-ssr] (ecmascript)");
const _setattributesfromprops = __turbopack_context__.r("[project]/node_modules/next/dist/client/set-attributes-from-props.js [app-ssr] (ecmascript)");
const _requestidlecallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/request-idle-callback.js [app-ssr] (ecmascript)");
const _htmlescape = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/htmlescape.js [app-ssr] (ecmascript)");
const ScriptCache = new Map();
const LoadCache = new Set();
const insertStylesheets = (stylesheets)=>{
    // Case 1: Styles for afterInteractive/lazyOnload with appDir injected via handleClientScriptLoad
    //
    // Using ReactDOM.preinit to feature detect appDir and inject styles
    // Stylesheets might have already been loaded if initialized with Script component
    // Re-inject styles here to handle scripts loaded via handleClientScriptLoad
    // ReactDOM.preinit handles dedup and ensures the styles are loaded only once
    if (_reactdom.default.preinit) {
        stylesheets.forEach((stylesheet)=>{
            _reactdom.default.preinit(stylesheet, {
                as: 'style'
            });
        });
        return;
    }
    // Case 2: Styles for afterInteractive/lazyOnload with pages injected via handleClientScriptLoad
    //
    // We use this function to load styles when appdir is not detected
    // TODO: Use React float APIs to load styles once available for pages dir
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
};
const loadScript = (props)=>{
    const { src, id, onLoad = ()=>{}, onReady = null, dangerouslySetInnerHTML, children = '', strategy = 'afterInteractive', onError, stylesheets } = props;
    const cacheKey = id || src;
    // Script has already loaded
    if (cacheKey && LoadCache.has(cacheKey)) {
        return;
    }
    // Contents of this script are already loading/loaded
    if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
        ScriptCache.get(src).then(onLoad, onError);
        return;
    }
    /** Execute after the script first loaded */ const afterLoad = ()=>{
        // Run onReady for the first time after load event
        if (onReady) {
            onReady();
        }
        // add cacheKey to LoadCache when load successfully
        LoadCache.add(cacheKey);
    };
    const el = document.createElement('script');
    const loadPromise = new Promise((resolve, reject)=>{
        el.addEventListener('load', function(e) {
            resolve();
            if (onLoad) {
                onLoad.call(this, e);
            }
            afterLoad();
        });
        el.addEventListener('error', function(e) {
            reject(e);
        });
    }).catch(function(e) {
        if (onError) {
            onError(e);
        }
    });
    if (dangerouslySetInnerHTML) {
        // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
        el.innerHTML = dangerouslySetInnerHTML.__html || '';
        afterLoad();
    } else if (children) {
        el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        afterLoad();
    } else if (src) {
        el.src = src;
        // do not add cacheKey into LoadCache for remote script here
        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
        ScriptCache.set(src, loadPromise);
    }
    (0, _setattributesfromprops.setAttributesFromProps)(el, props);
    if (strategy === 'worker') {
        el.setAttribute('type', 'text/partytown');
    }
    el.setAttribute('data-nscript', strategy);
    // Load styles associated with this script
    if (stylesheets) {
        insertStylesheets(stylesheets);
    }
    document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
    const { strategy = 'afterInteractive' } = props;
    if (strategy === 'lazyOnload') {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    } else {
        loadScript(props);
    }
}
function loadLazyScript(props) {
    if (document.readyState === 'complete') {
        (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
    } else {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    }
}
function addBeforeInteractiveToCache() {
    const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
    ];
    scripts.forEach((script)=>{
        const cacheKey = script.id || script.getAttribute('src');
        LoadCache.add(cacheKey);
    });
}
function initScriptLoader(scriptLoaderItems) {
    scriptLoaderItems.forEach(handleClientScriptLoad);
    addBeforeInteractiveToCache();
}
/**
 * Load a third-party scripts in an optimized way.
 *
 * Read more: [Next.js Docs: `next/script`](https://nextjs.org/docs/app/api-reference/components/script)
 */ function Script(props) {
    const { id, src = '', onLoad = ()=>{}, onReady = null, strategy = 'afterInteractive', onError, stylesheets, ...restProps } = props;
    // Context is available only during SSR
    let { updateScripts, scripts, getIsSsr, appDir, nonce } = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    // if a nonce is explicitly passed to the script tag, favor that over the automatic handling
    nonce = restProps.nonce || nonce;
    /**
   * - First mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
   *      Once the script is loaded, the onLoad and onReady will be called by then
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   *
   * - Second mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
   *      onReady is called, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. The script is already loaded, loadScript bails out
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   */ const hasOnReadyEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        const cacheKey = id || src;
        if (!hasOnReadyEffectCalled.current) {
            // Run onReady if script has loaded before but component is re-mounted
            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
                onReady();
            }
            hasOnReadyEffectCalled.current = true;
        }
    }, [
        onReady,
        id,
        src
    ]);
    const hasLoadScriptEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        if (!hasLoadScriptEffectCalled.current) {
            if (strategy === 'afterInteractive') {
                loadScript(props);
            } else if (strategy === 'lazyOnload') {
                loadLazyScript(props);
            }
            hasLoadScriptEffectCalled.current = true;
        }
    }, [
        props,
        strategy
    ]);
    if (strategy === 'beforeInteractive' || strategy === 'worker') {
        if (updateScripts) {
            scripts[strategy] = (scripts[strategy] || []).concat([
                {
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError,
                    ...restProps,
                    nonce
                }
            ]);
            updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
            // Script has already loaded during SSR
            LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
            loadScript({
                ...props,
                nonce
            });
        }
    }
    // For the app directory, we need React Float to preload these scripts.
    if (appDir) {
        // Injecting stylesheets here handles beforeInteractive and worker scripts correctly
        // For other strategies injecting here ensures correct stylesheet order
        // ReactDOM.preinit handles loading the styles in the correct order,
        // also ensures the stylesheet is loaded only once and in a consistent manner
        //
        // Case 1: Styles for beforeInteractive/worker with appDir - handled here
        // Case 2: Styles for beforeInteractive/worker with pages dir - Not handled yet
        // Case 3: Styles for afterInteractive/lazyOnload with appDir - handled here
        // Case 4: Styles for afterInteractive/lazyOnload with pages dir - handled in insertStylesheets function
        if (stylesheets) {
            stylesheets.forEach((styleSrc)=>{
                _reactdom.default.preinit(styleSrc, {
                    as: 'style'
                });
            });
        }
        // Before interactive scripts need to be loaded by Next.js' runtime instead
        // of native <script> tags, because they no longer have `defer`.
        if (strategy === 'beforeInteractive') {
            if (!src) {
                // For inlined scripts, we put the content in `children`.
                if (restProps.dangerouslySetInnerHTML) {
                    // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
                    restProps.children = restProps.dangerouslySetInnerHTML.__html;
                    delete restProps.dangerouslySetInnerHTML;
                }
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${(0, _htmlescape.htmlEscapeJsonString)(JSON.stringify([
                            0,
                            {
                                ...restProps,
                                id
                            }
                        ]))})`
                    }
                });
            } else {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${(0, _htmlescape.htmlEscapeJsonString)(JSON.stringify([
                            src,
                            {
                                ...restProps,
                                id
                            }
                        ]))})`
                    }
                });
            }
        } else if (strategy === 'afterInteractive') {
            if (src) {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
            }
        }
    }
    return null;
}
Object.defineProperty(Script, '__nextScript', {
    value: true
});
const _default = Script;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/set-attributes-from-props.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setAttributesFromProps", {
    enumerable: true,
    get: function() {
        return setAttributesFromProps;
    }
});
const DOMAttributeNames = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv',
    noModule: 'noModule'
};
const ignoreProps = [
    'onLoad',
    'onReady',
    'dangerouslySetInnerHTML',
    'children',
    'onError',
    'strategy',
    'stylesheets'
];
function isBooleanScriptAttribute(attr) {
    return [
        'async',
        'defer',
        'noModule'
    ].includes(attr);
}
function setAttributesFromProps(el, props) {
    for (const [p, value] of Object.entries(props)){
        if (!props.hasOwnProperty(p)) continue;
        if (ignoreProps.includes(p)) continue;
        // we don't render undefined props to the DOM
        if (value === undefined) {
            continue;
        }
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr)) {
            // Correctly assign boolean script attributes
            // https://github.com/vercel/next.js/pull/20748
            ;
            el[attr] = !!value;
        } else {
            el.setAttribute(attr, String(value));
        }
        // Remove falsy non-zero boolean attributes so they are correctly interpreted
        // (e.g. if we set them to false, this coerces to the string "false", which the browser interprets as true)
        if (value === false || el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr) && (!value || value === 'false')) {
            // Call setAttribute before, as we need to set and unset the attribute to override force async:
            // https://html.spec.whatwg.org/multipage/scripting.html#script-force-async
            el.setAttribute(attr, '');
            el.removeAttribute(attr);
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/shared/lib/htmlescape.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ESCAPE_REGEX: null,
    htmlEscapeAttributeString: null,
    htmlEscapeJsonString: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ESCAPE_REGEX: function() {
        return ESCAPE_REGEX;
    },
    htmlEscapeAttributeString: function() {
        return htmlEscapeAttributeString;
    },
    htmlEscapeJsonString: function() {
        return htmlEscapeJsonString;
    }
});
const ESCAPE_LOOKUP = {
    '&': '\\u0026',
    '>': '\\u003e',
    '<': '\\u003c',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
const ESCAPE_REGEX = /[&><\u2028\u2029]/g;
const ATTRIBUTE_ESCAPE_LOOKUP = {
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#39;',
    '<': '&lt;',
    '>': '&gt;'
};
const ATTRIBUTE_ESCAPE_REGEX = /[&"'<>]/g;
function htmlEscapeJsonString(str) {
    return str.replace(ESCAPE_REGEX, (match)=>ESCAPE_LOOKUP[match]);
}
function htmlEscapeAttributeString(str) {
    return str.replace(ATTRIBUTE_ESCAPE_REGEX, (match)=>ATTRIBUTE_ESCAPE_LOOKUP[match]);
}
}),
"[project]/src/components/v5/CommunitySignupForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommunitySignupForm",
    ()=>CommunitySignupForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/countries.ts [app-ssr] (ecmascript)");
'use client';
;
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
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [interested, setInterested] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
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
    if (state === 'success') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "v5-community-success",
        role: "status",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: labels.success
            }, void 0, false, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 13,
                columnNumber: 87
            }, this),
            whatsappUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "v5-community-form",
        onSubmit: submit,
        noValidate: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: labels.intro
            }, void 0, false, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 14,
                columnNumber: 75
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "v5-community-required",
                children: labels.requiredNote
            }, void 0, false, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 14,
                columnNumber: 96
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    labels.firstName,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    labels.lastName,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    labels.email,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    labels.city,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    labels.country,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "country",
                        required: true,
                        defaultValue: "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                disabled: true,
                                children: "—"
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                                lineNumber: 14,
                                columnNumber: 598
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$countries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countryOptions"].map(([value, name])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    labels.describes,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "describes",
                        required: true,
                        defaultValue: "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                disabled: true,
                                children: "—"
                            }, void 0, false, {
                                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                                lineNumber: 14,
                                columnNumber: 816
                            }, this),
                            roles.map(([value, key])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    labels.website,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        children: [
                            labels.interested,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    interests.map(([value, key])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "v5-community-check",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    labels.openQuestion,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "v5-community-consent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "v5-community-honeypot",
                "aria-hidden": "true",
                children: [
                    "Company",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            state === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "v5-community-error",
                role: "alert",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/v5/CommunitySignupForm.tsx",
                lineNumber: 14,
                columnNumber: 1979
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/components/v5/ReadMore.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadMore",
    ()=>ReadMore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ReadMore({ text, more, labels }) {
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/v5/ReadMore.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            more && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            more && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "text-toggle",
                type: "button",
                onClick: ()=>setExpanded((value)=>!value),
                children: [
                    expanded ? labels.less : labels.more,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/components/v5/VibetixEmbed.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VibetixEmbed",
    ()=>VibetixEmbed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function VibetixEmbed({ embedId, checkoutUrl, fallbackUrl, labels }) {
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [src, setSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(checkoutUrl);
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1000);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const url = new URL(checkoutUrl);
        url.searchParams.set('return_url', window.location.href);
        const timer = window.setTimeout(()=>setSrc(url.toString()), 0);
        return ()=>window.clearTimeout(timer);
    }, [
        checkoutUrl
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onMessage = (event)=>{
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
                if (Number.isFinite(nextHeight)) setHeight(Math.max(300, Math.min(8000, nextHeight)));
            }
        };
        window.addEventListener('message', onMessage);
        const timeout = window.setTimeout(()=>{
            if (loading) {
                setLoading(false);
                setFailed(true);
            }
        }, 15000);
        return ()=>{
            window.removeEventListener('message', onMessage);
            window.clearTimeout(timeout);
        };
    }, [
        embedId,
        loading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "v5-vibetix",
        style: {
            minHeight: `${height}px`
        },
        children: [
            loading && !failed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "v5-vibetix-loading",
                children: labels.loading
            }, void 0, false, {
                fileName: "[project]/src/components/v5/VibetixEmbed.tsx",
                lineNumber: 50,
                columnNumber: 28
            }, this),
            failed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "v5-vibetix-error",
                role: "alert",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: labels.error
                    }, void 0, false, {
                        fileName: "[project]/src/components/v5/VibetixEmbed.tsx",
                        lineNumber: 51,
                        columnNumber: 63
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                ref: frame,
                id: embedId,
                src: src,
                title: "VibeTix ticket shop",
                style: {
                    height: `${height}px`
                },
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
}),
"[project]/src/content/countries.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
];

//# sourceMappingURL=_08q3j_j86ojmy._.js.map