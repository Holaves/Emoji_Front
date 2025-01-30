(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[424],{958:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DynamicServerError:function(){return n},isDynamicServerError:function(){return o}});let r="DYNAMIC_SERVER_USAGE";class n extends Error{constructor(e){super("Dynamic server usage: "+e),this.description=e,this.digest=r}}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&"string"==typeof e.digest&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7643:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isNextRouterError",{enumerable:!0,get:function(){return a}});let n=r(7966),o=r(8600);function a(e){return(0,o.isRedirectError)(e)||(0,n.isNotFoundError)(e)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3750:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return c.ReadonlyURLSearchParams},RedirectType:function(){return c.RedirectType},ServerInsertedHTMLContext:function(){return d.ServerInsertedHTMLContext},notFound:function(){return c.notFound},permanentRedirect:function(){return c.permanentRedirect},redirect:function(){return c.redirect},unstable_rethrow:function(){return c.unstable_rethrow},useParams:function(){return y},usePathname:function(){return f},useRouter:function(){return p},useSearchParams:function(){return l},useSelectedLayoutSegment:function(){return m},useSelectedLayoutSegments:function(){return h},useServerInsertedHTML:function(){return d.useServerInsertedHTML}});let n=r(6540),o=r(9258),a=r(8519),u=r(4365),i=r(274),c=r(4531),s=r(8228),d=r(465);function l(){let e=(0,n.useContext)(a.SearchParamsContext);return(0,n.useMemo)(()=>e?new c.ReadonlyURLSearchParams(e):null,[e])}function f(){return(0,s.useDynamicRouteParams)("usePathname()"),(0,n.useContext)(a.PathnameContext)}function p(){let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function y(){return(0,s.useDynamicRouteParams)("useParams()"),(0,n.useContext)(a.PathParamsContext)}function h(e){void 0===e&&(e="children"),(0,s.useDynamicRouteParams)("useSelectedLayoutSegments()");let t=(0,n.useContext)(o.LayoutRouterContext);return t?function e(t,r,n,o){let a;if(void 0===n&&(n=!0),void 0===o&&(o=[]),n)a=t[1][r];else{var c;let e=t[1];a=null!=(c=e.children)?c:Object.values(e)[0]}if(!a)return o;let s=a[0],d=(0,u.getSegmentValue)(s);return!d||d.startsWith(i.PAGE_SEGMENT_KEY)?o:(o.push(d),e(a,r,!1,o))}(t.tree,e):null}function m(e){void 0===e&&(e="children"),(0,s.useDynamicRouteParams)("useSelectedLayoutSegment()");let t=h(e);if(!t||0===t.length)return null;let r="children"===e?t[0]:t[t.length-1];return r===i.DEFAULT_SEGMENT_KEY?null:r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4531:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return i},RedirectType:function(){return n.RedirectType},notFound:function(){return o.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect},unstable_rethrow:function(){return a.unstable_rethrow}});let n=r(8600),o=r(7966),a=r(8542);class u extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class i extends URLSearchParams{append(){throw new u}delete(){throw new u}set(){throw new u}sort(){throw new u}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7966:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return o},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4357:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8600:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return i},getRedirectStatusCodeFromError:function(){return p},getRedirectTypeFromError:function(){return f},getURLFromRedirectError:function(){return l},isRedirectError:function(){return d},permanentRedirect:function(){return s},redirect:function(){return c}});let o=r(7860),a=r(4357),u="NEXT_REDIRECT";function i(e,t,r){void 0===r&&(r=a.RedirectStatusCode.TemporaryRedirect);let n=Error(u);return n.digest=u+";"+t+";"+e+";"+r+";",n}function c(e,t){let r=o.actionAsyncStorage.getStore();throw i(e,t||((null==r?void 0:r.isAction)?"push":"replace"),a.RedirectStatusCode.TemporaryRedirect)}function s(e,t){throw void 0===t&&(t="replace"),i(e,t,a.RedirectStatusCode.PermanentRedirect)}function d(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let t=e.digest.split(";"),[r,n]=t,o=t.slice(2,-2).join(";"),i=Number(t.at(-2));return r===u&&("replace"===n||"push"===n)&&"string"==typeof o&&!isNaN(i)&&i in a.RedirectStatusCode}function l(e){return d(e)?e.digest.split(";").slice(2,-2).join(";"):null}function f(e){if(!d(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function p(e){if(!d(e))throw Error("Not a redirect error");return Number(e.digest.split(";").at(-2))}!function(e){e.push="push",e.replace="replace"}(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4365:(e,t)=>{"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1480:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{StaticGenBailoutError:function(){return n},isStaticGenBailoutError:function(){return o}});let r="NEXT_STATIC_GEN_BAILOUT";class n extends Error{constructor(...e){super(...e),this.code=r}}function o(e){return"object"==typeof e&&null!==e&&"code"in e&&e.code===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8542:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unstable_rethrow",{enumerable:!0,get:function(){return function e(t){if((0,u.isNextRouterError)(t)||(0,a.isBailoutToCSRError)(t)||(0,n.isDynamicUsageError)(t)||(0,o.isPostpone)(t))throw t;t instanceof Error&&"cause"in t&&e(t.cause)}}});let n=r(8837),o=r(9222),a=r(8431),u=r(7643);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},465:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return o},useServerInsertedHTML:function(){return a}});let n=r(544)._(r(6540)),o=n.default.createContext(null);function a(e){let t=(0,n.useContext)(o);t&&t(e)}},8837:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicUsageError",{enumerable:!0,get:function(){return i}});let n=r(958),o=r(8431),a=r(7643),u=r(8228),i=e=>(0,n.isDynamicServerError)(e)||(0,o.isBailoutToCSRError)(e)||(0,a.isNextRouterError)(e)||(0,u.isDynamicPostpone)(e)},8126:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{METADATA_BOUNDARY_NAME:function(){return r},OUTLET_BOUNDARY_NAME:function(){return o},VIEWPORT_BOUNDARY_NAME:function(){return n}});let r="__next_metadata_boundary__",n="__next_viewport_boundary__",o="__next_outlet_boundary__"},1913:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"actionAsyncStorage",{enumerable:!0,get:function(){return n}});let n=(0,r(8626).createAsyncLocalStorage)()},7860:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"actionAsyncStorage",{enumerable:!0,get:function(){return n.actionAsyncStorage}});let n=r(1913)},8626:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{bindSnapshot:function(){return u},createAsyncLocalStorage:function(){return a},createSnapshot:function(){return i}});let r=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class n{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}static bind(e){return e}}let o="undefined"!=typeof globalThis&&globalThis.AsyncLocalStorage;function a(){return o?new o:new n}function u(e){return o?o.bind(e):n.bind(e)}function i(){return o?o.snapshot():function(e,...t){return e(...t)}}},8228:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{Postpone:function(){return v},abortAndThrowOnSynchronousRequestDataAccess:function(){return E},abortOnSynchronousPlatformIOAccess:function(){return _},accessedDynamicData:function(){return M},annotateDynamicAccess:function(){return L},consumeDynamicAccess:function(){return k},createDynamicTrackingState:function(){return l},createDynamicValidationState:function(){return f},createPostponedAbortSignal:function(){return C},formatDynamicAPIAccesses:function(){return T},getFirstDynamicReason:function(){return p},isDynamicPostpone:function(){return j},isPrerenderInterruptedError:function(){return A},markCurrentScopeAsDynamic:function(){return y},postponeWithTracking:function(){return w},throwIfDisallowedDynamic:function(){return G},throwToInterruptStaticGeneration:function(){return m},trackAllowedDynamicAccess:function(){return F},trackDynamicDataInDynamicRender:function(){return g},trackFallbackParamAccessed:function(){return h},trackSynchronousPlatformIOAccessInDev:function(){return S},trackSynchronousRequestDataAccessInDev:function(){return R},useDynamicRouteParams:function(){return U}});let n=function(e){return e&&e.__esModule?e:{default:e}}(r(6540)),o=r(958),a=r(1480),u=r(3074),i=r(7305),c=r(2249),s=r(8126),d="function"==typeof n.default.unstable_postpone;function l(e){return{isDebugDynamicAccesses:e,dynamicAccesses:[],syncDynamicExpression:void 0,syncDynamicErrorWithStack:null}}function f(){return{hasSuspendedDynamic:!1,hasDynamicMetadata:!1,hasDynamicViewport:!1,hasSyncDynamicErrors:!1,dynamicErrors:[]}}function p(e){var t;return null==(t=e.dynamicAccesses[0])?void 0:t.expression}function y(e,t,r){if((!t||"cache"!==t.type&&"unstable-cache"!==t.type)&&!e.forceDynamic&&!e.forceStatic){if(e.dynamicShouldError)throw new a.StaticGenBailoutError(`Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${r}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);if(t){if("prerender-ppr"===t.type)w(e.route,r,t.dynamicTracking);else if("prerender-legacy"===t.type){t.revalidate=0;let n=new o.DynamicServerError(`Route ${e.route} couldn't be rendered statically because it used ${r}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);throw e.dynamicUsageDescription=r,e.dynamicUsageStack=n.stack,n}}}}function h(e,t){let r=u.workUnitAsyncStorage.getStore();r&&"prerender-ppr"===r.type&&w(e.route,t,r.dynamicTracking)}function m(e,t,r){let n=new o.DynamicServerError(`Route ${t.route} couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);throw r.revalidate=0,t.dynamicUsageDescription=e,t.dynamicUsageStack=n.stack,n}function g(e,t){t&&"cache"!==t.type&&"unstable-cache"!==t.type&&("prerender"===t.type||"prerender-legacy"===t.type)&&(t.revalidate=0)}function b(e,t,r){let n=x(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`);r.controller.abort(n);let o=r.dynamicTracking;o&&o.dynamicAccesses.push({stack:o.isDebugDynamicAccesses?Error().stack:void 0,expression:t})}function _(e,t,r,n){let o=n.dynamicTracking;return o&&null===o.syncDynamicErrorWithStack&&(o.syncDynamicExpression=t,o.syncDynamicErrorWithStack=r),b(e,t,n)}function S(e){e.prerenderPhase=!1}function E(e,t,r,n){let o=n.dynamicTracking;throw o&&null===o.syncDynamicErrorWithStack&&(o.syncDynamicExpression=t,o.syncDynamicErrorWithStack=r,!0===n.validating&&(o.syncDynamicLogged=!0)),b(e,t,n),x(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`)}let R=S;function v({reason:e,route:t}){let r=u.workUnitAsyncStorage.getStore();w(t,e,r&&"prerender-ppr"===r.type?r.dynamicTracking:null)}function w(e,t,r){N(),r&&r.dynamicAccesses.push({stack:r.isDebugDynamicAccesses?Error().stack:void 0,expression:t}),n.default.unstable_postpone(P(e,t))}function P(e,t){return`Route ${e} needs to bail out of prerendering at this point because it used ${t}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`}function j(e){return"object"==typeof e&&null!==e&&"string"==typeof e.message&&D(e.message)}function D(e){return e.includes("needs to bail out of prerendering at this point because it used")&&e.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error")}if(!1===D(P("%%%","^^^")))throw Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js");let O="NEXT_PRERENDER_INTERRUPTED";function x(e){let t=Error(e);return t.digest=O,t}function A(e){return"object"==typeof e&&null!==e&&e.digest===O&&"name"in e&&"message"in e&&e instanceof Error}function M(e){return e.length>0}function k(e,t){return e.dynamicAccesses.push(...t.dynamicAccesses),e.dynamicAccesses}function T(e){return e.filter(e=>"string"==typeof e.stack&&e.stack.length>0).map(({expression:e,stack:t})=>(t=t.split("\n").slice(4).filter(e=>!(e.includes("node_modules/next/")||e.includes(" (<anonymous>)")||e.includes(" (node:"))).join("\n"),`Dynamic API Usage Debug - ${e}:
${t}`))}function N(){if(!d)throw Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js")}function C(e){N();let t=new AbortController;try{n.default.unstable_postpone(e)}catch(e){t.abort(e)}return t.signal}function L(e,t){let r=t.dynamicTracking;r&&r.dynamicAccesses.push({stack:r.isDebugDynamicAccesses?Error().stack:void 0,expression:e})}function U(e){if("undefined"==typeof window){let t=i.workAsyncStorage.getStore();if(t&&t.isStaticGeneration&&t.fallbackRouteParams&&t.fallbackRouteParams.size>0){let r=u.workUnitAsyncStorage.getStore();r&&("prerender"===r.type?n.default.use((0,c.makeHangingPromise)(r.renderSignal,e)):"prerender-ppr"===r.type?w(t.route,e,r.dynamicTracking):"prerender-legacy"===r.type&&m(e,t,r))}}}let $=/\n\s+at Suspense \(<anonymous>\)/,I=RegExp(`\\n\\s+at ${s.METADATA_BOUNDARY_NAME}[\\n\\s]`),B=RegExp(`\\n\\s+at ${s.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),W=RegExp(`\\n\\s+at ${s.OUTLET_BOUNDARY_NAME}[\\n\\s]`);function F(e,t,r,n,o){if(!W.test(t)){if(I.test(t)){r.hasDynamicMetadata=!0;return}if(B.test(t)){r.hasDynamicViewport=!0;return}if($.test(t)){r.hasSuspendedDynamic=!0;return}if(n.syncDynamicErrorWithStack||o.syncDynamicErrorWithStack){r.hasSyncDynamicErrors=!0;return}else{let n=function(e,t){let r=Error(e);return r.stack="Error: "+e+t,r}(`Route "${e}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`,t);r.dynamicErrors.push(n);return}}}function G(e,t,r,n){let o,u,i;if(r.syncDynamicErrorWithStack?(o=r.syncDynamicErrorWithStack,u=r.syncDynamicExpression,i=!0===r.syncDynamicLogged):n.syncDynamicErrorWithStack?(o=n.syncDynamicErrorWithStack,u=n.syncDynamicExpression,i=!0===n.syncDynamicLogged):(o=null,u=void 0,i=!1),t.hasSyncDynamicErrors&&o)throw i||console.error(o),new a.StaticGenBailoutError;let c=t.dynamicErrors;if(c.length){for(let e=0;e<c.length;e++)console.error(c[e]);throw new a.StaticGenBailoutError}if(!t.hasSuspendedDynamic){if(t.hasDynamicMetadata){if(o)throw console.error(o),new a.StaticGenBailoutError(`Route "${e}" has a \`generateMetadata\` that could not finish rendering before ${u} was used. Follow the instructions in the error for this expression to resolve.`);throw new a.StaticGenBailoutError(`Route "${e}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`)}if(t.hasDynamicViewport){if(o)throw console.error(o),new a.StaticGenBailoutError(`Route "${e}" has a \`generateViewport\` that could not finish rendering before ${u} was used. Follow the instructions in the error for this expression to resolve.`);throw new a.StaticGenBailoutError(`Route "${e}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`)}}}},2528:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workAsyncStorage",{enumerable:!0,get:function(){return n}});let n=(0,r(8626).createAsyncLocalStorage)()},7305:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workAsyncStorage",{enumerable:!0,get:function(){return n.workAsyncStorage}});let n=r(2528)},8379:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"workUnitAsyncStorage",{enumerable:!0,get:function(){return n}});let n=(0,r(8626).createAsyncLocalStorage)()},3074:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getExpectedRequestStore:function(){return o},getPrerenderResumeDataCache:function(){return a},getRenderResumeDataCache:function(){return u},workUnitAsyncStorage:function(){return n.workUnitAsyncStorage}});let n=r(8379);function o(e){let t=n.workUnitAsyncStorage.getStore();if(t){if("request"===t.type)return t;if("prerender"===t.type||"prerender-ppr"===t.type||"prerender-legacy"===t.type)throw Error(`\`${e}\` cannot be called inside a prerender. This is a bug in Next.js.`);if("cache"===t.type)throw Error(`\`${e}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`);if("unstable-cache"===t.type)throw Error(`\`${e}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`)}throw Error(`\`${e}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`)}function a(e){return"prerender-legacy"!==e.type&&"cache"!==e.type&&"unstable-cache"!==e.type?"request"===e.type?e.devWarmupPrerenderResumeDataCache:e.prerenderResumeDataCache:null}function u(e){return"prerender-legacy"!==e.type&&"cache"!==e.type&&"unstable-cache"!==e.type?"request"===e.type?e.renderResumeDataCache:e.prerenderResumeDataCache:null}},2249:(e,t)=>{"use strict";function r(e,t){let r=new Promise((r,n)=>{e.addEventListener("abort",()=>{n(Error(`During prerendering, ${t} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${t} to a different context by using \`setTimeout\`, \`unstable_after\`, or similar functions you may observe this error and you should handle it in that context.`))},{once:!0})});return r.catch(n),r}function n(){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"makeHangingPromise",{enumerable:!0,get:function(){return r}})},9222:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isPostpone",{enumerable:!0,get:function(){return n}});let r=Symbol.for("react.postpone");function n(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}},6424:(e,t,r)=>{e.exports=r(3750)}}]);