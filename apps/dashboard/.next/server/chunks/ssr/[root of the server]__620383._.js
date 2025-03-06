module.exports = {

"[project]/packages/auth/keys.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "keys": (()=>keys)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$t3$2d$oss$2b$env$2d$nextjs$40$0$2e$11$2e$1_typescript$40$5$2e$7$2e$2_zod$40$3$2e$24$2e$1$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@t3-oss+env-nextjs@0.11.1_typescript@5.7.2_zod@3.24.1/node_modules/@t3-oss/env-nextjs/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
;
;
const keys = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$t3$2d$oss$2b$env$2d$nextjs$40$0$2e$11$2e$1_typescript$40$5$2e$7$2e$2_zod$40$3$2e$24$2e$1$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEnv"])({
        server: {
            AUTH_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
            AUTH_GOOGLE_CLIENT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
            AUTH_GOOGLE_CLIENT_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
            AUTH_MICROSOFT_ENTRA_ID_CLIENT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
            AUTH_MICROSOFT_ENTRA_ID_CLIENT_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional()
        },
        runtimeEnv: {
            AUTH_SECRET: process.env.AUTH_SECRET,
            AUTH_GOOGLE_CLIENT_ID: process.env.AUTH_GOOGLE_CLIENT_ID,
            AUTH_GOOGLE_CLIENT_SECRET: process.env.AUTH_GOOGLE_CLIENT_SECRET,
            AUTH_MICROSOFT_ENTRA_ID_CLIENT_ID: process.env.AUTH_MICROSOFT_ENTRA_ID_CLIENT_ID,
            AUTH_MICROSOFT_ENTRA_ID_CLIENT_SECRET: process.env.AUTH_MICROSOFT_ENTRA_ID_CLIENT_SECRET
        }
    });
}}),
"[project]/packages/auth/src/constants.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BCRYPT_SALT_LENGTH": (()=>BCRYPT_SALT_LENGTH),
    "EMAIL_CHANGE_EXPIRY_HOURS": (()=>EMAIL_CHANGE_EXPIRY_HOURS),
    "EMAIL_VERIFICATION_EXPIRY_HOURS": (()=>EMAIL_VERIFICATION_EXPIRY_HOURS),
    "MINIMUM_PASSWORD_LENGTH": (()=>MINIMUM_PASSWORD_LENGTH),
    "PASSWORD_RESET_EXPIRY_HOURS": (()=>PASSWORD_RESET_EXPIRY_HOURS),
    "TOTP_AND_RECOVERY_CODES_EXPIRY_MINUTES": (()=>TOTP_AND_RECOVERY_CODES_EXPIRY_MINUTES)
});
const BCRYPT_SALT_LENGTH = 13;
const MINIMUM_PASSWORD_LENGTH = 8;
const EMAIL_VERIFICATION_EXPIRY_HOURS = 720;
const EMAIL_CHANGE_EXPIRY_HOURS = 6;
const PASSWORD_RESET_EXPIRY_HOURS = 6;
const TOTP_AND_RECOVERY_CODES_EXPIRY_MINUTES = 12;
}}),
"[project]/packages/auth/src/cookies.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AuthCookies": (()=>AuthCookies)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/routes/src/index.ts [app-rsc] (ecmascript)");
;
const secure = new URL(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseUrl"].Dashboard).protocol === 'https:';
const AuthCookies = {
    CallbackUrl: secure ? '__Secure-authjs.callback-url' : 'authjs.callback-url',
    CsrfToken: secure ? '__Host-authjs.csrf-token' : 'authjs.csrf-token',
    SessionToken: secure ? '__Secure-authjs.session-token' : 'authjs.session-token'
};
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[project]/packages/auth/src/encryption.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "symmetricDecrypt": (()=>symmetricDecrypt),
    "symmetricEncrypt": (()=>symmetricEncrypt)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/crypto [external] (crypto, cjs)");
;
const ALGORITHM = 'aes256';
const INPUT_ENCODING = 'utf8';
const OUTPUT_ENCODING = 'hex';
const IV_LENGTH = 16;
// Derive a 32-byte key using SHA-256 to ensure it's the correct length
function deriveKey(key) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('sha256').update(key).digest();
}
function symmetricEncrypt(text, key) {
    const iv = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(IV_LENGTH);
    const cipher = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createCipheriv(ALGORITHM, deriveKey(key), iv);
    let ciphered = cipher.update(text, INPUT_ENCODING, OUTPUT_ENCODING);
    ciphered += cipher.final(OUTPUT_ENCODING);
    const ciphertext = `${iv.toString(OUTPUT_ENCODING)}:${ciphered}`;
    return ciphertext;
}
function symmetricDecrypt(text, key) {
    const components = text.split(':');
    const iv_from_ciphertext = Buffer.from(components.shift() || '', OUTPUT_ENCODING);
    const decipher = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createDecipheriv(ALGORITHM, deriveKey(key), iv_from_ciphertext);
    let deciphered = decipher.update(components.join(':'), OUTPUT_ENCODING, INPUT_ENCODING);
    deciphered += decipher.final(INPUT_ENCODING);
    return deciphered;
}
}}),
"[project]/packages/auth/src/redirect.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getRedirectAfterSignIn": (()=>getRedirectAfterSignIn),
    "getRedirectToSignIn": (()=>getRedirectToSignIn),
    "getRedirectToTotp": (()=>getRedirectToTotp),
    "getRequestStoragePathname": (()=>getRequestStoragePathname)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$has$2d$base$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/has-base-path.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$remove$2d$base$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/remove-base-path.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_import__("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/routes/src/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/keys.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/cookies.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$encryption$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/encryption.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addMinutes.mjs [app-rsc] (ecmascript)");
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
function getRedirectToSignIn() {
    const callbackUrl = getRequestStoragePathname();
    return callbackUrl ? `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.Api}/auth/signin?${new URLSearchParams({
        callbackUrl
    })}` : `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.Api}/auth/signin`;
}
async function getRedirectAfterSignIn() {
    // Try to retrieve cookie stored slug
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const callbackUrl = cookieStore.get(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AuthCookies"].CallbackUrl)?.value;
    const slug = cookieStore.get('organizationSlug')?.value;
    const redirectTo = callbackUrl ? callbackUrl : slug ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["replaceOrgSlug"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.organizations.slug.Home, slug) : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.organizations.Index;
    return redirectTo;
}
function getRedirectToTotp(userId) {
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keys"])().AUTH_SECRET;
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$encryption$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["symmetricEncrypt"])(userId, key);
    const expiry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$encryption$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["symmetricEncrypt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addMinutes"])(new Date(), __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TOTP_AND_RECOVERY_CODES_EXPIRY_MINUTES"]).toISOString(), key);
    return `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.auth.Totp}?token=${encodeURIComponent(token)}&expiry=${encodeURIComponent(expiry)}`;
}
function getRequestStoragePathname() {
    const store = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
    if (!store || store.type !== 'request') {
        return null;
    }
    const url = new URL(store.url.pathname + store.url.search, 'http://n');
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$has$2d$base$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasBasePath"])(url.pathname)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$remove$2d$base$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeBasePath"])(url.pathname) + url.search;
    }
    return url.pathname + url.search;
}
}}),
"[project]/packages/common/src/type-guards.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isDefined": (()=>isDefined),
    "isString": (()=>isString)
});
function isDefined(val) {
    return typeof val !== 'undefined' && val !== undefined && val !== null && val !== Infinity;
}
function isString(obj) {
    return obj !== null && typeof obj !== 'undefined' && Object.prototype.toString.call(obj) === '[object String]';
}
}}),
"[project]/packages/auth/src/session.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "checkSession": (()=>checkSession),
    "generateSessionToken": (()=>generateSessionToken),
    "getSessionExpiryFromNow": (()=>getSessionExpiryFromNow),
    "session": (()=>session)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$type$2d$guards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/common/src/type-guards.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$0$2e$3$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__validate$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@11.0.3/node_modules/uuid/dist/esm/validate.js [app-rsc] (ecmascript) <export default as validate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$addSeconds$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addSeconds.mjs [app-rsc] (ecmascript)");
;
;
;
;
function checkSession(session) {
    // session
    if (!session) {
        // Normal behavior, no need to log a warning
        return false;
    }
    // session.user
    if (!session.user) {
        console.warn('No user found in the session. Unable to validate session.');
        return false;
    }
    // session.user.id
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$type$2d$guards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDefined"])(session.user.id)) {
        console.warn('User ID is undefined. Validation failed.');
        return false;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$0$2e$3$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__validate$3e$__["validate"])(session.user.id)) {
        console.warn('Invalid user ID format. Expected a UUID.');
        return false;
    }
    // session.user.email
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$type$2d$guards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDefined"])(session.user.email)) {
        console.warn(`User ${session.user.id} has an undefined email.`);
        return false;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$type$2d$guards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isString"])(session.user.email)) {
        console.warn(`Invalid email type for user ${session.user.id}. Expected a string.`);
        return false;
    }
    // session.user.name
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$type$2d$guards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDefined"])(session.user.name)) {
        console.warn(`User ${session.user.id} has an undefined name.`);
        return false;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$type$2d$guards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isString"])(session.user.name)) {
        console.warn(`Invalid name type for user ${session.user.id}. Expected a string.`);
        return false;
    }
    return true;
}
function generateSessionToken() {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])();
}
function getSessionExpiryFromNow() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$addSeconds$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addSeconds"])(Date.now(), session.maxAge);
}
const session = {
    strategy: 'database',
    maxAge: 60 * 60 * 24 * 30,
    updateAge: 24 * 60 * 60,
    generateSessionToken
};
}}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}}),
"[project]/packages/database/src/client.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "prisma": (()=>prisma)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_import__("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const prisma = global.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) {
    global.prisma = prisma;
}
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:util [external] (node:util, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:util", () => require("node:util"));

module.exports = mod;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs) <export randomFillSync as default>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomFillSync"])
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:crypto [external] (node:crypto, cjs)");
}}),
"[project]/packages/auth/src/adapter.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "adapter": (()=>adapter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$prisma$2d$adapter$40$2$2e$7$2e$2_$40$prisma$2b$client$40$6$2e$1$2e$0_prisma$40$6$2e$1$2e$0_$5f$nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$prisma$2d$adapter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+prisma-adapter@2.7.2_@prisma+client@6.1.0_prisma@6.1.0__nodemailer@6.9.16/node_modules/@auth/prisma-adapter/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/database/src/client.ts [app-rsc] (ecmascript)");
;
;
const adapter = Object.freeze((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$prisma$2d$adapter$40$2$2e$7$2e$2_$40$prisma$2b$client$40$6$2e$1$2e$0_prisma$40$6$2e$1$2e$0_$5f$nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$prisma$2d$adapter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaAdapter"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"]));
}}),
"[project]/packages/auth/src/errors.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AuthErrorCode": (()=>AuthErrorCode),
    "IncorrectEmailOrPasswordError": (()=>IncorrectEmailOrPasswordError),
    "IncorrectRecoveryCodeError": (()=>IncorrectRecoveryCodeError),
    "IncorrectTotpCodeError": (()=>IncorrectTotpCodeError),
    "InternalServerError": (()=>InternalServerError),
    "MissingRecoveryCodesError": (()=>MissingRecoveryCodesError),
    "RateLimitExceededError": (()=>RateLimitExceededError),
    "RequestExpiredError": (()=>RequestExpiredError),
    "TotpCodeRequiredError": (()=>TotpCodeRequiredError),
    "UnverifiedEmailError": (()=>UnverifiedEmailError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.37.2_nodemailer@6.9.16/node_modules/@auth/core/errors.js [app-rsc] (ecmascript)");
;
var AuthErrorCode = /*#__PURE__*/ function(AuthErrorCode) {
    AuthErrorCode["NewEmailConflict"] = "new_email_conflict";
    AuthErrorCode["UnverifiedEmail"] = "unverified_email";
    AuthErrorCode["IncorrectEmailOrPassword"] = "incorrect_email_or_password";
    AuthErrorCode["TotpCodeRequired"] = "totp_code_required";
    AuthErrorCode["IncorrectTotpCode"] = "incorrect_totp_code";
    AuthErrorCode["MissingRecoveryCodes"] = "missing_recovery_codes";
    AuthErrorCode["IncorrectRecoveryCode"] = "incorrect_recovery_code";
    AuthErrorCode["RequestExpired"] = "request_expired";
    AuthErrorCode["RateLimitExceeded"] = "rate_limit_exceeded";
    AuthErrorCode["IllegalOAuthProvider"] = "illegal_oauth_provider";
    AuthErrorCode["InternalServerError"] = "internal_server_error";
    AuthErrorCode["UnknownError"] = "unknown_error";
    return AuthErrorCode;
}({});
class InternalServerError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CredentialsSignin"] {
    constructor(){
        super("internal_server_error");
    }
    code = "internal_server_error";
    stack = undefined;
}
class IncorrectEmailOrPasswordError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CredentialsSignin"] {
    constructor(){
        super("incorrect_email_or_password");
    }
    code = "incorrect_email_or_password";
    stack = undefined;
}
class TotpCodeRequiredError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CredentialsSignin"] {
    constructor(){
        super("totp_code_required");
    }
    code = "totp_code_required";
    stack = undefined;
}
class IncorrectTotpCodeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CredentialsSignin"] {
    constructor(){
        super("incorrect_totp_code");
    }
    code = "incorrect_totp_code";
    stack = undefined;
}
class MissingRecoveryCodesError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CredentialsSignin"] {
    constructor(){
        super("missing_recovery_codes");
    }
    code = "missing_recovery_codes";
    stack = undefined;
}
class IncorrectRecoveryCodeError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CredentialsSignin"] {
    constructor(){
        super("incorrect_recovery_code");
    }
    code = "incorrect_recovery_code";
    stack = undefined;
}
class UnverifiedEmailError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CredentialsSignin"] {
    constructor(){
        super("unverified_email");
    }
    code = "unverified_email";
    stack = undefined;
}
class RequestExpiredError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CredentialsSignin"] {
    constructor(){
        super("request_expired");
    }
    code = "request_expired";
    stack = undefined;
}
class RateLimitExceededError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CredentialsSignin"] {
    constructor(){
        super("rate_limit_exceeded");
    }
    code = "rate_limit_exceeded";
    stack = undefined;
}
;
}}),
"[project]/packages/auth/src/errors.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$25_next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$nodemailer$40$6$2e$9$2e$16_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.25_next@15.1.2_react-dom@19.0.0_react@19.0.0__react@19.0.0__nodemailer@6.9.16_react@19.0.0/node_modules/next-auth/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/packages/auth/src/errors.ts [app-rsc] (ecmascript) <locals>");
}}),
"[project]/packages/auth/src/providers.types.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "OAuthProvider": (()=>OAuthProvider),
    "Provider": (()=>Provider)
});
var Provider = /*#__PURE__*/ function(Provider) {
    Provider["Credentials"] = "credentials";
    Provider["TotpCode"] = "totp-code";
    Provider["RecoveryCode"] = "recovery-code";
    Provider["Google"] = "google";
    Provider["MicrosoftEntraId"] = "microsoft-entra-id";
    return Provider;
}({});
var OAuthProvider = /*#__PURE__*/ function(OAuthProvider) {
    OAuthProvider["Google"] = "google";
    OAuthProvider["MicrosoftEntraId"] = "microsoft-entra-id";
    return OAuthProvider;
}({});
}}),
"[project]/packages/auth/src/callbacks.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "callbacks": (()=>callbacks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/database/src/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/routes/src/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$adapter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/adapter.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/cookies.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/packages/auth/src/errors.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/providers.types.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$redirect$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/redirect.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/packages/auth/src/errors.ts [app-rsc] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
async function isAuthenticatorAppEnabled(userId) {
    const count = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].authenticatorApp.count({
        where: {
            userId
        }
    });
    return count > 0;
}
const callbacks = {
    async signIn ({ user, account, profile }) {
        if (!account) {
            return false;
        }
        // All Credentials Provider
        if (account.type === 'credentials') {
            if (!user || !user.id) {
                return false;
            }
            // Only username/password provider
            if (account.provider === __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"].Credentials) {
                if (await isAuthenticatorAppEnabled(user.id)) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$redirect$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRedirectToTotp"])(user.id);
                }
            }
            const sessionToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateSessionToken"])();
            const sessionExpiry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSessionExpiryFromNow"])();
            const createdSession = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$adapter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adapter"].createSession({
                sessionToken: sessionToken,
                userId: user.id,
                expires: sessionExpiry
            });
            if (!createdSession) {
                return false;
            }
            const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
            cookieStore.set({
                name: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$cookies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AuthCookies"].SessionToken,
                value: sessionToken,
                expires: sessionExpiry
            });
            // already authorized
            return true;
        }
        // All OAuth Providers
        if (!account.provider || !profile) {
            return false;
        }
        if (!Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OAuthProvider"]).includes(account.provider.toLowerCase())) {
            return `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.auth.Error}?error=${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AuthErrorCode"].IllegalOAuthProvider}`;
        }
        if (account.provider === __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OAuthProvider"].Google) {
            if (!profile.email_verified) {
                return `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.auth.Error}?error=${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AuthErrorCode"].UnverifiedEmail}`;
            }
        }
        if (account.provider === __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OAuthProvider"].MicrosoftEntraId) {
        // Microsoft does not provide a verified email field
        // If you want to have verified emails, the suggestion is to use the user here, e.g.
        //
        // if (!user.emailVerified || isBefore(new Date(), user.emailVerified)) {
        //    /* send verification email */
        //    return `${routes.dashboard.auth.verifyEmail.Index}.?email=${encodeURIComponent(parsedInput.email)}`
        // }
        }
        if (user?.id && await isAuthenticatorAppEnabled(user.id)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$redirect$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRedirectToTotp"])(user.id);
        }
        if (user?.name) {
            user.name = user.name.substring(0, 64);
        }
        if (profile.name) {
            profile.name = profile.name.substring(0, 64);
        }
        return true;
    },
    async jwt ({ token, trigger, account, user }) {
        if ((trigger === 'signIn' || trigger === 'signUp') && account) {
            token.accessToken = account.access_token;
            if (account.type === 'credentials' && user.id) {
                const expires = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSessionExpiryFromNow"])();
                const sessionToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateSessionToken"])();
                const session = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$adapter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adapter"].createSession({
                    userId: user.id,
                    sessionToken,
                    expires
                });
                token.sessionId = session.sessionToken;
            }
        }
        // Let's not allow the client to indirectly update the token using useSession().update()
        if (trigger === 'update') {
            return token;
        }
        return token;
    },
    async session ({ trigger, session, user }) {
        if (session && user) {
            session.user.id = user.id;
        }
        // Let's not allow the client to update the session using useSession().update()
        if (trigger === 'update') {
            return session;
        }
        return session;
    }
};
}}),
"[project]/packages/email-templates/src/connected-account-security-alert-email.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ConnectedAccountSecurityAlertEmail": (()=>ConnectedAccountSecurityAlertEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$html$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$html$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+html@0.0.11_react@19.0.0/node_modules/@react-email/html/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$head$40$0$2e$0$2e$12_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$head$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+head@0.0.12_react@19.0.0/node_modules/@react-email/head/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$preview$40$0$2e$0$2e$12_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$preview$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+preview@0.0.12_react@19.0.0/node_modules/@react-email/preview/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$tailwind$40$1$2e$0$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$tailwind$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+tailwind@1.0.4_react@19.0.0/node_modules/@react-email/tailwind/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$body$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$body$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+body@0.0.11_react@19.0.0/node_modules/@react-email/body/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$container$40$0$2e$0$2e$15_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$container$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+container@0.0.15_react@19.0.0/node_modules/@react-email/container/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$heading$40$0$2e$0$2e$15_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$heading$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+heading@0.0.15_react@19.0.0/node_modules/@react-email/heading/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$text$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+text@0.0.11_react@19.0.0/node_modules/@react-email/text/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$hr$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$hr$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+hr@0.0.11_react@19.0.0/node_modules/@react-email/hr/dist/index.mjs [app-rsc] (ecmascript)");
;
;
;
function ConnectedAccountSecurityAlertEmail({ appName, name, provider, action }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$html$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$html$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Html"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$head$40$0$2e$0$2e$12_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$head$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Head"], {}, void 0, false, {
                fileName: "[project]/packages/email-templates/src/connected-account-security-alert-email.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$preview$40$0$2e$0$2e$12_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$preview$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Preview"], {
                children: "Security Alert!"
            }, void 0, false, {
                fileName: "[project]/packages/email-templates/src/connected-account-security-alert-email.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$tailwind$40$1$2e$0$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$tailwind$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tailwind"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$body$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$body$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Body"], {
                    className: "m-auto bg-white px-2 font-sans",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$container$40$0$2e$0$2e$15_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$container$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
                        className: "mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$heading$40$0$2e$0$2e$15_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$heading$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                                className: "mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black",
                                children: "Security Alert!"
                            }, void 0, false, {
                                fileName: "[project]/packages/email-templates/src/connected-account-security-alert-email.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$text$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                className: "text-[14px] leading-[24px] text-black",
                                children: [
                                    "Hello ",
                                    name,
                                    ","
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/email-templates/src/connected-account-security-alert-email.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$text$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                className: "text-[14px] leading-[24px] text-black",
                                children: [
                                    "The login '",
                                    provider,
                                    "' has been ",
                                    action,
                                    ' ',
                                    action === 'disconnected' ? 'from' : 'to',
                                    " your account."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/email-templates/src/connected-account-security-alert-email.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$hr$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$hr$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Hr"], {
                                className: "mx-0 my-[26px] w-full border border-solid border-[#eaeaea]"
                            }, void 0, false, {
                                fileName: "[project]/packages/email-templates/src/connected-account-security-alert-email.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$text$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                className: "text-[12px] leading-[24px] text-[#666666]",
                                children: [
                                    "You receive this message because there has been account security changes on ",
                                    appName,
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/email-templates/src/connected-account-security-alert-email.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/email-templates/src/connected-account-security-alert-email.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/email-templates/src/connected-account-security-alert-email.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/email-templates/src/connected-account-security-alert-email.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/email-templates/src/connected-account-security-alert-email.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}}),
"[project]/packages/email/keys.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "keys": (()=>keys)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$t3$2d$oss$2b$env$2d$nextjs$40$0$2e$11$2e$1_typescript$40$5$2e$7$2e$2_zod$40$3$2e$24$2e$1$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@t3-oss+env-nextjs@0.11.1_typescript@5.7.2_zod@3.24.1/node_modules/@t3-oss/env-nextjs/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
;
;
const keys = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$t3$2d$oss$2b$env$2d$nextjs$40$0$2e$11$2e$1_typescript$40$5$2e$7$2e$2_zod$40$3$2e$24$2e$1$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEnv"])({
        server: {
            EMAIL_FROM: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
            EMAIL_FEEDBACK_INBOX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().email().optional(),
            EMAIL_MAILER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
                'NodeMailer',
                'Resend'
            ]),
            // credentials (you just need one)
            EMAIL_NODEMAILER_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
            EMAIL_RESEND_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional()
        },
        runtimeEnv: {
            EMAIL_FROM: process.env.EMAIL_FROM,
            EMAIL_FEEDBACK_INBOX: process.env.EMAIL_FEEDBACK_INBOX,
            EMAIL_MAILER: process.env.EMAIL_MAILER,
            EMAIL_NODEMAILER_URL: process.env.EMAIL_NODEMAILER_URL,
            EMAIL_RESEND_API_KEY: process.env.EMAIL_RESEND_API_KEY
        }
    });
}}),
"[project]/packages/email/src/mailer/resolve-mailer.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resolveMailer": (()=>resolveMailer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/email/keys.ts [app-rsc] (ecmascript)");
;
async function resolveMailer() {
    let mailer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keys"])().EMAIL_MAILER;
    if (mailer) {
        mailer = mailer.toLowerCase();
        if (mailer === 'nodemailer') {
            const importedModule = await __turbopack_require__("[project]/packages/email/src/mailer/node-mailer/index.ts [app-rsc] (ecmascript, async loader)")(__turbopack_import__);
            return new importedModule.NodeMailer();
        }
        if (mailer === 'resend') {
            const importedModule = await __turbopack_require__("[project]/packages/email/src/mailer/resend/index.ts [app-rsc] (ecmascript, async loader)")(__turbopack_import__);
            return new importedModule.ResendMailer();
        }
    }
    // Default to node mailer
    const importedModule = await __turbopack_require__("[project]/packages/email/src/mailer/node-mailer/index.ts [app-rsc] (ecmascript, async loader)")(__turbopack_import__);
    return new importedModule.NodeMailer();
}
}}),
"[project]/packages/email/src/mailer/send-email.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "sendEmail": (()=>sendEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$mailer$2f$resolve$2d$mailer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/email/src/mailer/resolve-mailer.ts [app-rsc] (ecmascript)");
;
async function sendEmail(payload) {
    const mailer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$mailer$2f$resolve$2d$mailer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveMailer"])();
    return mailer.sendEmail(payload);
}
}}),
"[externals]/prettier/standalone [external] (prettier/standalone, esm_import)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_external_import__("prettier/standalone");

__turbopack_export_namespace__(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/prettier/plugins/html [external] (prettier/plugins/html, esm_import)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_external_import__("prettier/plugins/html");

__turbopack_export_namespace__(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/node:stream [external] (node:stream, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:stream", () => require("node:stream"));

module.exports = mod;
}}),
"[project]/packages/email/src/send-connected-account-security-alert-email.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "sendConnectedAccountSecurityAlertEmail": (()=>sendConnectedAccountSecurityAlertEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2d$templates$2f$src$2f$connected$2d$account$2d$security$2d$alert$2d$email$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/email-templates/src/connected-account-security-alert-email.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$mailer$2f$send$2d$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/email/src/mailer/send-email.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$render$40$1$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+render@1.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@react-email/render/dist/node/index.mjs [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$render$40$1$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$render$40$1$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
async function sendConnectedAccountSecurityAlertEmail(input) {
    const component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2d$templates$2f$src$2f$connected$2d$account$2d$security$2d$alert$2d$email$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectedAccountSecurityAlertEmail"])(input);
    const html = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$render$40$1$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["render"])(component);
    const text = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$render$40$1$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["render"])(component, {
        plainText: true
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$mailer$2f$send$2d$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendEmail"])({
        recipient: input.recipient,
        subject: 'Security Alert!',
        html,
        text
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/packages/email-templates/src/welcome-email.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "WelcomeEmail": (()=>WelcomeEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$html$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$html$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+html@0.0.11_react@19.0.0/node_modules/@react-email/html/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$head$40$0$2e$0$2e$12_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$head$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+head@0.0.12_react@19.0.0/node_modules/@react-email/head/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$preview$40$0$2e$0$2e$12_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$preview$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+preview@0.0.12_react@19.0.0/node_modules/@react-email/preview/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$tailwind$40$1$2e$0$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$tailwind$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+tailwind@1.0.4_react@19.0.0/node_modules/@react-email/tailwind/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$body$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$body$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+body@0.0.11_react@19.0.0/node_modules/@react-email/body/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$container$40$0$2e$0$2e$15_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$container$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+container@0.0.15_react@19.0.0/node_modules/@react-email/container/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$heading$40$0$2e$0$2e$15_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$heading$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+heading@0.0.15_react@19.0.0/node_modules/@react-email/heading/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$text$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+text@0.0.11_react@19.0.0/node_modules/@react-email/text/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$section$40$0$2e$0$2e$16_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+section@0.0.16_react@19.0.0/node_modules/@react-email/section/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$button$40$0$2e$0$2e$19_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$button$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+button@0.0.19_react@19.0.0/node_modules/@react-email/button/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$hr$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$hr$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+hr@0.0.11_react@19.0.0/node_modules/@react-email/hr/dist/index.mjs [app-rsc] (ecmascript)");
;
;
;
function WelcomeEmail({ appName, name, getStartedLink }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$html$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$html$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Html"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$head$40$0$2e$0$2e$12_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$head$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Head"], {}, void 0, false, {
                fileName: "[project]/packages/email-templates/src/welcome-email.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$preview$40$0$2e$0$2e$12_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$preview$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Preview"], {
                children: [
                    "Welcome to ",
                    appName,
                    "!"
                ]
            }, void 0, true, {
                fileName: "[project]/packages/email-templates/src/welcome-email.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$tailwind$40$1$2e$0$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$tailwind$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tailwind"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$body$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$body$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Body"], {
                    className: "m-auto bg-white px-2 font-sans",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$container$40$0$2e$0$2e$15_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$container$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
                        className: "mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$heading$40$0$2e$0$2e$15_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$heading$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                                className: "mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black",
                                children: [
                                    "Welcome to ",
                                    appName,
                                    "!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/email-templates/src/welcome-email.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$text$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                className: "text-[14px] leading-[24px] text-black",
                                children: [
                                    "Hello ",
                                    name,
                                    ","
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/email-templates/src/welcome-email.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$text$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                className: "text-[14px] leading-[24px] text-black",
                                children: "Thank you for signing up! We're excited to have you on board. Your account has been successfully created, and you're ready to start exploring our platform."
                            }, void 0, false, {
                                fileName: "[project]/packages/email-templates/src/welcome-email.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$section$40$0$2e$0$2e$16_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
                                className: "my-[32px] text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$button$40$0$2e$0$2e$19_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$button$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                    href: getStartedLink,
                                    className: "rounded bg-[#000000] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline",
                                    children: "Get started"
                                }, void 0, false, {
                                    fileName: "[project]/packages/email-templates/src/welcome-email.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/email-templates/src/welcome-email.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$text$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                className: "text-[14px] leading-[24px] text-black",
                                children: "If you have any questions or need assistance, please don't hesitate to reach out to our support team."
                            }, void 0, false, {
                                fileName: "[project]/packages/email-templates/src/welcome-email.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$hr$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$hr$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Hr"], {
                                className: "mx-0 my-[26px] w-full border border-solid border-[#eaeaea]"
                            }, void 0, false, {
                                fileName: "[project]/packages/email-templates/src/welcome-email.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$text$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                className: "text-[12px] leading-[24px] text-[#666666]",
                                children: [
                                    "You receive this email because you signed up on ",
                                    appName,
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/email-templates/src/welcome-email.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/email-templates/src/welcome-email.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/email-templates/src/welcome-email.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/email-templates/src/welcome-email.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/email-templates/src/welcome-email.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}}),
"[project]/packages/email/src/send-welcome-email.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "sendWelcomeEmail": (()=>sendWelcomeEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/common/src/app.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2d$templates$2f$src$2f$welcome$2d$email$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/email-templates/src/welcome-email.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$mailer$2f$send$2d$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/email/src/mailer/send-email.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$render$40$1$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+render@1.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@react-email/render/dist/node/index.mjs [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$render$40$1$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$render$40$1$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
async function sendWelcomeEmail(input) {
    const component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2d$templates$2f$src$2f$welcome$2d$email$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WelcomeEmail"])(input);
    const html = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$render$40$1$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["render"])(component);
    const text = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$render$40$1$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["render"])(component, {
        plainText: true
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$mailer$2f$send$2d$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendEmail"])({
        recipient: input.recipient,
        subject: `Welcome to ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APP_NAME"]}`,
        html,
        text
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/sharp [external] (sharp, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("sharp", () => require("sharp"));

module.exports = mod;
}}),
"[project]/packages/image-processing/src/resize-image.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resizeImage": (()=>resizeImage)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$sharp__$5b$external$5d$__$28$sharp$2c$__cjs$29$__ = __turbopack_import__("[externals]/sharp [external] (sharp, cjs)");
;
const maxSize = 96 * 4;
const defaultFormat = 'jpeg';
const supportedFormats = [
    'jpeg',
    'png',
    'webp',
    'gif',
    'avif'
];
async function resizeImage(buffer, mimeType) {
    const image = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$sharp__$5b$external$5d$__$28$sharp$2c$__cjs$29$__["default"])(buffer);
    const metadata = await image.metadata();
    if (!metadata.width || !metadata.height) {
        throw new Error('Image dimensions are not available');
    }
    let resizedImage = image;
    if (Math.max(metadata.width, metadata.height) > maxSize) {
        resizedImage = image.resize({
            width: maxSize,
            height: maxSize,
            fit: __TURBOPACK__imported__module__$5b$externals$5d2f$sharp__$5b$external$5d$__$28$sharp$2c$__cjs$29$__["default"].fit.inside,
            withoutEnlargement: true
        });
    }
    const format = getFormatFromMimeType(mimeType);
    if (supportedFormats.includes(format)) {
        return resizedImage.toFormat(format).toBuffer();
    }
    console.warn(`Unsupported mime type ${mimeType}, defaulting to ${defaultFormat}`);
    return resizedImage[defaultFormat]().toBuffer();
}
function getFormatFromMimeType(mimeType) {
    try {
        const parts = mimeType.toLowerCase().split('/');
        if (parts.length !== 2 || parts[0] !== 'image') {
            throw new Error(`Invalid mime type: ${mimeType}`);
        }
        return parts[1];
    } catch  {
        console.warn(`Error parsing mime type. Using default format.`);
        return defaultFormat;
    }
}
}}),
"[project]/packages/auth/src/verification.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createOtpTokens": (()=>createOtpTokens),
    "findVerificationTokenFromOtp": (()=>findVerificationTokenFromOtp),
    "verifyEmail": (()=>verifyEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/database/src/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/keys.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$addHours$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addHours.mjs [app-rsc] (ecmascript)");
;
;
;
;
/** Web compatible method to create a hash, using SHA256 */ async function createHash(message) {
    const data = new TextEncoder().encode(message);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map((b)=>b.toString(16).padStart(2, '0')).join('').toString();
}
/** Web compatible method to create a random string of a given length */ function randomString(size) {
    const i2hex = (i)=>('0' + i.toString(16)).slice(-2);
    const r = (a, i)=>a + i2hex(i);
    const bytes = crypto.getRandomValues(new Uint8Array(size));
    return Array.from(bytes).reduce(r, '');
}
async function createOtpTokens(email) {
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keys"])().AUTH_SECRET;
    const otp = randomString(3).toUpperCase();
    const hashedOtp = await createHash(`${otp}${key}`);
    await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].verificationToken.create({
        data: {
            identifier: email,
            token: hashedOtp,
            expires: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$addHours$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addHours"])(new Date(), __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMAIL_VERIFICATION_EXPIRY_HOURS"])
        },
        select: {
            identifier: true // SELECT NONE
        }
    });
    return {
        otp,
        hashedOtp
    };
}
async function findVerificationTokenFromOtp(otp) {
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keys"])().AUTH_SECRET;
    const hashedOtp = await createHash(`${otp.toUpperCase()}${key}`);
    const verificationToken = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].verificationToken.findFirst({
        where: {
            token: hashedOtp
        },
        select: {
            identifier: true,
            expires: true
        }
    });
    return verificationToken;
}
async function verifyEmail(email) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].verificationToken.updateMany({
            where: {
                identifier: email
            },
            data: {
                expires: new Date(+0)
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].changeEmailRequest.deleteMany({
            where: {
                email
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].resetPasswordRequest.deleteMany({
            where: {
                email
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.updateMany({
            where: {
                email
            },
            data: {
                emailVerified: new Date()
            }
        })
    ]);
}
}}),
"[project]/packages/auth/src/events.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "events": (()=>events)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/common/src/app.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/database/src/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$send$2d$connected$2d$account$2d$security$2d$alert$2d$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/email/src/send-connected-account-security-alert-email.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$send$2d$welcome$2d$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/email/src/send-welcome-email.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$image$2d$processing$2f$src$2f$resize$2d$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/image-processing/src/resize-image.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/routes/src/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/providers.types.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$verification$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/verification.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$send$2d$connected$2d$account$2d$security$2d$alert$2d$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$send$2d$welcome$2d$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$send$2d$connected$2d$account$2d$security$2d$alert$2d$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$send$2d$welcome$2d$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
;
const events = {
    async signIn ({ user, account, profile, isNewUser }) {
        if (user && user.id) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.update({
                where: {
                    id: user.id
                },
                data: {
                    lastLogin: new Date()
                },
                select: {
                    id: true // SELECT NONE
                }
            });
            if (isNewUser && user.email) {
                if (account?.provider === __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OAuthProvider"].Google) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$verification$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyEmail"])(user.email);
                    await tryCopyGoogleImage(user, profile);
                    if (user.name) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$send$2d$welcome$2d$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendWelcomeEmail"])({
                            recipient: user.email,
                            appName: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APP_NAME"],
                            name: user.name,
                            getStartedLink: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.organizations.Index
                        });
                    }
                }
                if (account?.provider === __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OAuthProvider"].MicrosoftEntraId) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$verification$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyEmail"])(user.email);
                    await tryCopyMicrosoftGraphImage(user, account);
                    if (user.name) {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$send$2d$welcome$2d$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendWelcomeEmail"])({
                            recipient: user.email,
                            appName: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APP_NAME"],
                            name: user.name,
                            getStartedLink: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.organizations.Index
                        });
                    }
                }
            }
        }
    },
    async signOut (message) {
        if ('session' in message && message.session?.sessionToken) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].session.deleteMany({
                where: {
                    sessionToken: message.session.sessionToken
                }
            });
        }
    },
    async linkAccount ({ user, account }) {
        if (user && user.name && user.email && account && account.provider) {
            // Here we check if the user just has been created using an OAuth provider
            // - If yes -> No need to send out security alert
            // - If no (which means linked using an existing account) -> Send out security alert
            const newUser = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findFirst({
                where: {
                    email: user.email,
                    lastLogin: null
                },
                select: {
                    _count: {
                        select: {
                            accounts: true
                        }
                    }
                }
            });
            const isNewUser = newUser && newUser._count.accounts < 2;
            if (!isNewUser) {
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$send$2d$connected$2d$account$2d$security$2d$alert$2d$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendConnectedAccountSecurityAlertEmail"])({
                        recipient: user.email,
                        appName: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APP_NAME"],
                        name: user.name,
                        action: 'connected',
                        provider: account.provider
                    });
                } catch (e) {
                    console.error(e);
                }
            }
        }
    }
};
async function fetchAndResizeRemoteImage(url) {
    let bytes;
    let contentType;
    let hash;
    if (url) {
        try {
            if (new URL(url).origin === new URL(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseUrl"].Dashboard).origin) {
                throw Error('Cannot fetch images from the same origin. Security risk.');
            }
            const response = await fetch(url);
            if (response.ok) {
                const mimeType = response.headers.get('content-type');
                if (mimeType) {
                    const jsBuffer = await response.arrayBuffer();
                    const buffer = Buffer.from(new Uint8Array(jsBuffer));
                    bytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$image$2d$processing$2f$src$2f$resize$2d$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resizeImage"])(buffer, mimeType);
                    if (bytes) {
                        contentType = mimeType;
                        hash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('sha256').update(bytes).digest('hex');
                    }
                }
            } else {
                console.warn(`Failed to fetch image from ${url}`);
            }
        } catch (e) {
            console.error(e);
        }
    }
    return {
        bytes,
        contentType,
        hash
    };
}
async function tryCopyGoogleImage(user, profile) {
    try {
        if (profile?.picture) {
            const image = await fetchAndResizeRemoteImage(profile.picture);
            if (image.bytes && image.contentType && image.hash) {
                const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserImageUrl"])(user.id, image.hash);
                await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].userImage.create({
                        data: {
                            userId: user.id,
                            data: image.bytes,
                            contentType: image.contentType,
                            hash: image.hash
                        },
                        select: {
                            id: true // SELECT NONE
                        }
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.update({
                        where: {
                            id: user.id
                        },
                        data: {
                            image: imageUrl
                        },
                        select: {
                            id: true // SELECT NONE
                        }
                    })
                ]);
            }
        }
    } catch (e) {
        console.error(e);
    }
}
async function tryCopyMicrosoftGraphImage(user, account) {
    try {
        const profilePhotoSize = 96;
        const response = await fetch(`https://graph.microsoft.com/v1.0/me/photos/${profilePhotoSize}x${profilePhotoSize}/$value`, {
            headers: {
                Authorization: `Bearer ${account.access_token}`
            }
        });
        if (response.ok) {
            const mimeType = response.headers.get('content-type');
            if (mimeType) {
                const jsBuffer = await response.arrayBuffer();
                const buffer = Buffer.from(new Uint8Array(jsBuffer));
                const bytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$image$2d$processing$2f$src$2f$resize$2d$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resizeImage"])(buffer, mimeType);
                const contentType = mimeType;
                const hash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('sha256').update(bytes).digest('hex');
                if (bytes && contentType && hash) {
                    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserImageUrl"])(user.id, hash);
                    await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].userImage.create({
                            data: {
                                userId: user.id,
                                data: bytes,
                                contentType: contentType,
                                hash: hash
                            },
                            select: {
                                id: true // SELECT NONE
                            }
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.update({
                            where: {
                                id: user.id
                            },
                            data: {
                                image: imageUrl
                            },
                            select: {
                                id: true // SELECT NONE
                            }
                        })
                    ]);
                }
            }
        }
    } catch (e) {
        console.error(e);
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/packages/rate-limit/src/in-memory.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "inMemoryRateLimiter": (()=>inMemoryRateLimiter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$memory$2d$cache$40$0$2e$2$2e$0$2f$node_modules$2f$memory$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/memory-cache@0.2.0/node_modules/memory-cache/index.js [app-rsc] (ecmascript)");
;
function inMemoryRateLimiter(options) {
    return {
        check: (requestLimit, uniqueIdentifier)=>{
            const count = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$memory$2d$cache$40$0$2e$2$2e$0$2f$node_modules$2f$memory$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get(uniqueIdentifier) || [
                0
            ];
            if (count[0] === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$memory$2d$cache$40$0$2e$2$2e$0$2f$node_modules$2f$memory$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].put(uniqueIdentifier, count, options.intervalInMs);
            }
            count[0] += 1;
            const currentUsage = count[0];
            const isRateLimited = currentUsage >= requestLimit;
            return {
                isRateLimited,
                requestLimit,
                remaining: isRateLimited ? 0 : requestLimit - currentUsage
            };
        }
    };
}
}}),
"[project]/packages/auth/src/password.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "hashPassword": (()=>hashPassword),
    "passwordValidator": (()=>passwordValidator),
    "verifyPassword": (()=>verifyPassword)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$2$2e$4$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/bcryptjs@2.4.3/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/constants.ts [app-rsc] (ecmascript)");
;
;
function hashPassword(password) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$2$2e$4$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hash"])(password, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BCRYPT_SALT_LENGTH"]);
}
function verifyPassword(password, hashedPassword) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$2$2e$4$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compare"])(password, hashedPassword);
}
class PasswordValidator {
    containsLowerAndUpperCase(str) {
        return this.isNotNullOrEmpty(str) && str !== str.toLowerCase();
    }
    hasMinimumLength(str) {
        return this.isNotNullOrEmpty(str) && str.length >= __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MINIMUM_PASSWORD_LENGTH"];
    }
    containsNumber(str) {
        return this.isNotNullOrEmpty(str) && /\d/.test(str);
    }
    validate(str) {
        let success = true;
        const errors = [];
        if (!this.containsLowerAndUpperCase(str)) {
            success = false;
            errors.push('The password should contain lower and upper case characters.');
        }
        if (!this.hasMinimumLength(str)) {
            success = false;
            errors.push(`The password should be at least ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MINIMUM_PASSWORD_LENGTH"]} characters long.`);
        }
        if (!this.containsNumber(str)) {
            success = false;
            errors.push('The password should contain at least one number.');
        }
        return {
            success,
            errors
        };
    }
    isNotNullOrEmpty(str) {
        return !!str;
    }
}
const passwordValidator = new PasswordValidator();
}}),
"[project]/packages/auth/src/schemas.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "logInSchema": (()=>logInSchema),
    "submitRecoveryCodeSchema": (()=>submitRecoveryCodeSchema),
    "submitTotpCodeSchema": (()=>submitTotpCodeSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
;
const logInSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string({
        invalid_type_error: 'Email must be a string.'
    }).trim().min(1, 'Email is required.').max(255, 'Maximum 255 characters allowed.').email('Enter a valid email address.'),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string({
        required_error: 'Password is required.',
        invalid_type_error: 'Password must be a string.'
    }).min(1, 'Password is required.').max(72, 'Maximum 72 characters allowed.')
});
const submitTotpCodeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string({
        invalid_type_error: 'Token must be a string.'
    }).trim().min(1, 'Token is required.').max(255, 'Maximum 255 characters allowed.'),
    expiry: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string({
        invalid_type_error: 'Expiry must be a string.'
    }).trim().min(1, 'Expiry is required.').max(255, 'Maximum 255 characters allowed.'),
    totpCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string({
        required_error: 'Code is required.',
        invalid_type_error: 'Code consists of 6 digits.'
    }).trim().max(6, {
        message: ''
    })
});
const submitRecoveryCodeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string({
        invalid_type_error: 'Token must be a string.'
    }).trim().min(1, 'Token is required.').max(255, 'Maximum 255 characters allowed.'),
    expiry: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string({
        invalid_type_error: 'Expiry must be a string.'
    }).trim().min(1, 'Expiry is required.').max(255, 'Maximum 255 characters allowed.'),
    recoveryCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string({
        required_error: 'Recovery code is required.',
        invalid_type_error: 'Recovery code must be a string.'
    }).trim().min(1, 'Recovery code is required.').max(11, 'Maximum 11 characters allowed.')
});
}}),
"[project]/packages/auth/src/providers.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "providers": (()=>providers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$otplib$2b$core$40$12$2e$0$2e$1$2f$node_modules$2f40$otplib$2f$core$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@otplib+core@12.0.1/node_modules/@otplib/core/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$otplib$2b$plugin$2d$crypto$40$12$2e$0$2e$1$2f$node_modules$2f40$otplib$2f$plugin$2d$crypto$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@otplib+plugin-crypto@12.0.1/node_modules/@otplib/plugin-crypto/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$otplib$2b$plugin$2d$thirty$2d$two$40$12$2e$0$2e$1$2f$node_modules$2f40$otplib$2f$plugin$2d$thirty$2d$two$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@otplib+plugin-thirty-two@12.0.1/node_modules/@otplib/plugin-thirty-two/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$25_next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$nodemailer$40$6$2e$9$2e$16_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.25_next@15.1.2_react-dom@19.0.0_react@19.0.0__react@19.0.0__nodemailer@6.9.16_react@19.0.0/node_modules/next-auth/providers/credentials.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$25_next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$nodemailer$40$6$2e$9$2e$16_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.25_next@15.1.2_react-dom@19.0.0_react@19.0.0__react@19.0.0__nodemailer@6.9.16_react@19.0.0/node_modules/next-auth/providers/google.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$25_next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$nodemailer$40$6$2e$9$2e$16_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$auth$2f$providers$2f$microsoft$2d$entra$2d$id$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.25_next@15.1.2_react-dom@19.0.0_react@19.0.0__react@19.0.0__nodemailer@6.9.16_react@19.0.0/node_modules/next-auth/providers/microsoft-entra-id.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/database/src/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$rate$2d$limit$2f$src$2f$in$2d$memory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/rate-limit/src/in-memory.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/keys.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$encryption$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/encryption.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/packages/auth/src/errors.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$password$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/password.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/providers.types.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/schemas.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.37.2_nodemailer@6.9.16/node_modules/@auth/core/providers/credentials.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/packages/auth/src/errors.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isBefore.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isValid.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.37.2_nodemailer@6.9.16/node_modules/@auth/core/providers/google.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$microsoft$2d$entra$2d$id$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.37.2_nodemailer@6.9.16/node_modules/@auth/core/providers/microsoft-entra-id.js [app-rsc] (ecmascript)");
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
function checkRateLimitAndThrowError(uniqueIdentifier) {
    // Built-in rate limiter to help manage traffic and prevent abuse.
    // Does not support serverless rate limiting, because the storage is in-memory.
    const limiter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$rate$2d$limit$2f$src$2f$in$2d$memory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inMemoryRateLimiter"])({
        intervalInMs: 60 * 1000 // 1 minute
    });
    const result = limiter.check(10, uniqueIdentifier); // 10 requests per minute
    if (result.isRateLimited) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RateLimitExceededError"]();
    }
}
const providers = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"].Credentials,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"].Credentials,
        credentials: {
            email: {
                label: 'Email',
                type: 'text'
            },
            password: {
                label: 'Password',
                type: 'password'
            }
        },
        async authorize (credentials) {
            if (!credentials) {
                console.error(`For some reason credentials are missing`);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["InternalServerError"]();
            }
            if (!credentials.email || !credentials.password) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["IncorrectEmailOrPasswordError"]();
            }
            const result = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logInSchema"].safeParse(credentials);
            if (!result.success) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["IncorrectEmailOrPasswordError"]();
            }
            const parsedCredentials = result.data;
            const normalizedEmail = parsedCredentials.email.toLowerCase();
            checkRateLimitAndThrowError(normalizedEmail);
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                where: {
                    email: normalizedEmail
                },
                select: {
                    id: true,
                    password: true,
                    email: true,
                    emailVerified: true,
                    name: true
                }
            });
            if (!user || !user.password || !user.email) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["IncorrectEmailOrPasswordError"]();
            }
            const isCorrectPassword = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$password$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPassword"])(parsedCredentials.password, user.password);
            if (!isCorrectPassword) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["IncorrectEmailOrPasswordError"]();
            }
            if (!user.emailVerified || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBefore"])(new Date(), user.emailVerified)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UnverifiedEmailError"]();
            }
            return {
                id: user.id,
                email: user.email,
                name: user.name
            };
        }
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"].TotpCode,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"].TotpCode,
        credentials: {
            token: {
                label: 'Token',
                type: 'text'
            },
            totpCode: {
                label: 'TOTP code',
                type: 'text'
            }
        },
        async authorize (credentials) {
            if (!credentials) {
                console.error(`For some reason credentials are missing`);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["InternalServerError"]();
            }
            if (!credentials.totpCode) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["IncorrectTotpCodeError"]();
            }
            const result = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitTotpCodeSchema"].safeParse(credentials);
            if (!result.success) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["IncorrectTotpCodeError"]();
            }
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keys"])().AUTH_SECRET;
            const parsedCredentials = result.data;
            const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$encryption$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["symmetricDecrypt"])(parsedCredentials.token, key);
            const expiry = new Date((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$encryption$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["symmetricDecrypt"])(parsedCredentials.expiry, key));
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValid"])(expiry) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBefore"])(expiry, new Date())) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RequestExpiredError"]();
            }
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                where: {
                    id: userId
                },
                select: {
                    id: true,
                    password: true,
                    email: true,
                    emailVerified: true,
                    name: true,
                    authenticatorApp: {
                        select: {
                            secret: true,
                            recoveryCodes: true
                        }
                    }
                }
            });
            if (!user || !user.email) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["InternalServerError"]();
            }
            checkRateLimitAndThrowError(user.email);
            if (!user.authenticatorApp) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["InternalServerError"]();
            }
            const secret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$encryption$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["symmetricDecrypt"])(user.authenticatorApp.secret, key);
            if (secret.length !== 32) {
                console.error(`Authenticator app secret decryption failed. Expected key with length 32 but got ${secret.length}`);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["InternalServerError"]();
            }
            const authenticator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$otplib$2b$core$40$12$2e$0$2e$1$2f$node_modules$2f40$otplib$2f$core$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Authenticator"]({
                createDigest: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$otplib$2b$plugin$2d$crypto$40$12$2e$0$2e$1$2f$node_modules$2f40$otplib$2f$plugin$2d$crypto$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDigest"],
                createRandomBytes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$otplib$2b$plugin$2d$crypto$40$12$2e$0$2e$1$2f$node_modules$2f40$otplib$2f$plugin$2d$crypto$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRandomBytes"],
                keyDecoder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$otplib$2b$plugin$2d$thirty$2d$two$40$12$2e$0$2e$1$2f$node_modules$2f40$otplib$2f$plugin$2d$thirty$2d$two$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keyDecoder"],
                keyEncoder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$otplib$2b$plugin$2d$thirty$2d$two$40$12$2e$0$2e$1$2f$node_modules$2f40$otplib$2f$plugin$2d$thirty$2d$two$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keyEncoder"],
                window: [
                    1,
                    0
                ]
            });
            const isValidToken = authenticator.check(parsedCredentials.totpCode, secret);
            if (!isValidToken) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["IncorrectTotpCodeError"]();
            }
            return {
                id: user.id,
                email: user.email,
                name: user.name
            };
        }
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"].RecoveryCode,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"].RecoveryCode,
        credentials: {
            token: {
                label: 'Token',
                type: 'text'
            },
            recoveryCode: {
                label: 'Recovery code',
                type: 'text'
            }
        },
        async authorize (credentials) {
            if (!credentials) {
                console.error(`For some reason credentials are missing`);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["InternalServerError"]();
            }
            if (!credentials.recoveryCode) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["IncorrectRecoveryCodeError"]();
            }
            const result = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$schemas$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitRecoveryCodeSchema"].safeParse(credentials);
            if (!result.success) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["IncorrectRecoveryCodeError"]();
            }
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keys"])().AUTH_SECRET;
            const parsedCredentials = result.data;
            const userId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$encryption$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["symmetricDecrypt"])(parsedCredentials.token, key);
            const expiry = new Date((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$encryption$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["symmetricDecrypt"])(parsedCredentials.expiry, key));
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValid"])(expiry) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBefore"])(expiry, new Date())) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RequestExpiredError"]();
            }
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                where: {
                    id: userId
                },
                select: {
                    id: true,
                    password: true,
                    email: true,
                    emailVerified: true,
                    name: true,
                    authenticatorApp: {
                        select: {
                            recoveryCodes: true
                        }
                    }
                }
            });
            if (!user || !user.email) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["InternalServerError"]();
            }
            checkRateLimitAndThrowError(user.email);
            if (!user.authenticatorApp) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["InternalServerError"]();
            }
            if (!user.authenticatorApp.recoveryCodes) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MissingRecoveryCodesError"]();
            }
            const recoveryCodes = JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$encryption$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["symmetricDecrypt"])(user.authenticatorApp.recoveryCodes, key));
            // Check if user-supplied code matches one
            const index = recoveryCodes.indexOf(parsedCredentials.recoveryCode.replaceAll('-', ''));
            if (index === -1) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["IncorrectRecoveryCodeError"]();
            }
            // Delete verified recoery code and re-encrypt remaining
            recoveryCodes[index] = null;
            await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].authenticatorApp.update({
                where: {
                    userId: user.id
                },
                data: {
                    recoveryCodes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$encryption$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["symmetricEncrypt"])(JSON.stringify(recoveryCodes), key)
                },
                select: {
                    id: true // SELECT NONE
                }
            });
            return {
                id: user.id,
                email: user.email,
                name: user.name
            };
        }
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"].Google,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"].Google,
        clientId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keys"])().AUTH_GOOGLE_CLIENT_ID,
        clientSecret: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keys"])().AUTH_GOOGLE_CLIENT_SECRET,
        allowDangerousEmailAccountLinking: true,
        authorization: {
            params: {
                scope: 'openid email profile',
                prompt: 'consent',
                access_type: 'offline',
                response_type: 'code'
            }
        }
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$microsoft$2d$entra$2d$id$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"].MicrosoftEntraId,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Provider"].MicrosoftEntraId,
        clientId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keys"])().AUTH_MICROSOFT_ENTRA_ID_CLIENT_ID,
        clientSecret: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keys"])().AUTH_MICROSOFT_ENTRA_ID_CLIENT_SECRET,
        allowDangerousEmailAccountLinking: true,
        token: {
            url: 'https://login.microsoftonline.com/common/oauth2/v2.0/token'
        },
        authorization: {
            url: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
            params: {
                scope: 'openid profile email offline_access User.Read'
            }
        },
        userinfo: {
            url: 'https://graph.microsoft.com/oidc/userinfo'
        },
        issuer: 'https://login.microsoftonline.com/common/v2.0',
        profile (profile) {
            // Removed the image fetching logic here, since it is unnecessary.
            // We really only want to fetch the image once during Events.signIn({ isNewUser })
            // and copy the image into our database.
            return {
                id: profile.sub,
                name: profile.name,
                email: profile.email
            };
        }
    })
];
}}),
"[project]/packages/auth/src/index.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "auth": (()=>auth),
    "authConfig": (()=>authConfig),
    "dedupedAuth": (()=>dedupedAuth),
    "handlers": (()=>handlers),
    "signIn": (()=>signIn),
    "signOut": (()=>signOut)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$25_next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$nodemailer$40$6$2e$9$2e$16_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.25_next@15.1.2_react-dom@19.0.0_react@19.0.0__react@19.0.0__nodemailer@6.9.16_react@19.0.0/node_modules/next-auth/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$25_next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$nodemailer$40$6$2e$9$2e$16_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$auth$2f$jwt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.25_next@15.1.2_react-dom@19.0.0_react@19.0.0__react@19.0.0__nodemailer@6.9.16_react@19.0.0/node_modules/next-auth/jwt.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/routes/src/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/keys.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$adapter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/adapter.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$callbacks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/callbacks.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/events.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/providers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$jwt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@auth+core@0.37.2_nodemailer@6.9.16/node_modules/@auth/core/jwt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$25_next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$nodemailer$40$6$2e$9$2e$16_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.25_next@15.1.2_react-dom@19.0.0_react@19.0.0__react@19.0.0__nodemailer@6.9.16_react@19.0.0/node_modules/next-auth/index.js [app-rsc] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
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
const authConfig = {
    adapter: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$adapter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adapter"],
    providers: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$providers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["providers"],
    secret: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keys"])().AUTH_SECRET,
    session: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["session"],
    pages: {
        signIn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPathname"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.auth.SignIn, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseUrl"].Dashboard),
        signOut: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPathname"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.auth.SignIn, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseUrl"].Dashboard),
        error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPathname"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.auth.Error, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseUrl"].Dashboard),
        newUser: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPathname"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.onboarding.Index, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseUrl"].Dashboard)
    },
    callbacks: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$callbacks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["callbacks"],
    events: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$events$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["events"],
    jwt: {
        maxAge: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["session"].maxAge,
        // Required line to encode credentials sessions
        async encode (arg) {
            return arg.token?.sessionId ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2_nodemailer$40$6$2e$9$2e$16$2f$node_modules$2f40$auth$2f$core$2f$jwt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encode"])(arg);
        }
    },
    trustHost: true
};
const { handlers, signIn, signOut, auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$25_next$40$15$2e$1$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_$5f$nodemailer$40$6$2e$9$2e$16_react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(authConfig);
const dedupedAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(auth);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/packages/auth/src/context.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "getAuthContext": (()=>getAuthContext),
    "getAuthOrganizationContext": (()=>getAuthOrganizationContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$redirect$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/redirect.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/database/src/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/routes/src/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
const dedupedGetActiveOrganization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async function() {
    // Read organization slug from the HTTP header
    const headerList = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    const organizationSlug = headerList.get('x-organization-slug');
    if (!organizationSlug) {
        // Instead of not-found we can just redirect.
        console.warn('No organization slug in headers. Check middleware.');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.organizations.Index);
    }
    const organization = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].organization.findFirst({
        where: {
            slug: organizationSlug
        },
        select: {
            id: true,
            logo: true,
            name: true,
            tier: true,
            stripeCustomerId: true,
            slug: true,
            memberships: {
                select: {
                    userId: true
                }
            }
        }
    });
    if (!organization) {
        // Instead of not-found we can just redirect.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.organizations.Index);
    }
    return {
        ...organization,
        logo: organization.logo ? organization.logo : undefined
    };
});
const dedupedGetUserInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async function(userId) {
    const userInfo = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findFirst({
        where: {
            id: userId
        },
        select: {
            completedOnboarding: true,
            memberships: {
                select: {
                    organizationId: true,
                    role: true,
                    isOwner: true
                }
            }
        }
    });
    if (!userInfo) {
        // Should not happen, but if it does let's sign out the user.
        // One possible scenario is if someone is fiddling with the database while a user is still logged in.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"])({
            redirectTo: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.auth.SignIn
        });
    }
    return userInfo;
});
async function getAuthContext() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dedupedAuth"])();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkSession"])(session)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$redirect$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRedirectToSignIn"])());
    }
    const userInfo = await dedupedGetUserInfo(session.user.id);
    const enrichedSession = {
        ...session,
        user: {
            ...session.user,
            ...userInfo
        }
    };
    return {
        session: enrichedSession
    };
}
async function getAuthOrganizationContext() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dedupedAuth"])();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkSession"])(session)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$redirect$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRedirectToSignIn"])());
    }
    const activeOrganization = await dedupedGetActiveOrganization();
    const userInfo = await dedupedGetUserInfo(session.user.id);
    if (!userInfo.memberships.some((m)=>m.organizationId == activeOrganization.id)) {
        // Instead of forbidden we can just redirect.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.organizations.Index);
    }
    const enrichedSession = {
        ...session,
        user: {
            ...session.user,
            ...userInfo
        }
    };
    return {
        session: enrichedSession,
        organization: activeOrganization
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/packages/database/src/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
}}),
"[project]/packages/database/src/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_import__("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/packages/database/src/index.ts [app-rsc] (ecmascript) <locals>");
}}),
"[project]/packages/ui/src/lib/utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$5$2e$5$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tailwind-merge@2.5.5/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$5$2e$5$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/packages/ui/src/components/logo.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Logo": (()=>Logo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/common/src/app.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/ui/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
function Logo({ hideSymbol, hideWordmark, className, ...other }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('flex items-center space-x-2', className),
        ...other,
        children: [
            !hideSymbol && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex size-9 items-center justify-center p-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex size-7 items-center justify-center rounded-md border text-primary-foreground bg-primary",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M7.81815 8.36373L12 0L24 24H15.2809L7.81815 8.36373Z",
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/logo.tsx",
                                    lineNumber: 37,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M4.32142 15.3572L8.44635 24H-1.14809e-06L4.32142 15.3572Z",
                                    fill: "currentColor"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui/src/components/logo.tsx",
                                    lineNumber: 41,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/ui/src/components/logo.tsx",
                            lineNumber: 36,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/ui/src/components/logo.tsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/ui/src/components/logo.tsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/logo.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this),
            !hideWordmark && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APP_NAME"]
            }, void 0, false, {
                fileName: "[project]/packages/ui/src/components/logo.tsx",
                lineNumber: 50,
                columnNumber: 25
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui/src/components/logo.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}}),
"[project]/apps/dashboard/components/onboarding/onboarding-wizard.tsx (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "OnboardingWizard": (()=>OnboardingWizard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const OnboardingWizard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call OnboardingWizard() from the server but OnboardingWizard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/dashboard/components/onboarding/onboarding-wizard.tsx <module evaluation>", "OnboardingWizard");
}}),
"[project]/apps/dashboard/components/onboarding/onboarding-wizard.tsx (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "OnboardingWizard": (()=>OnboardingWizard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const OnboardingWizard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call OnboardingWizard() from the server but OnboardingWizard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/dashboard/components/onboarding/onboarding-wizard.tsx", "OnboardingWizard");
}}),
"[project]/apps/dashboard/components/onboarding/onboarding-wizard.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$components$2f$onboarding$2f$onboarding$2d$wizard$2e$tsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/apps/dashboard/components/onboarding/onboarding-wizard.tsx (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$components$2f$onboarding$2f$onboarding$2d$wizard$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/apps/dashboard/components/onboarding/onboarding-wizard.tsx (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$components$2f$onboarding$2f$onboarding$2d$wizard$2e$tsx__$28$client__proxy$29$__);
}}),
"[project]/apps/dashboard/components/onboarding/sign-out-button.tsx (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SignOutButton": (()=>SignOutButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const SignOutButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SignOutButton() from the server but SignOutButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/dashboard/components/onboarding/sign-out-button.tsx <module evaluation>", "SignOutButton");
}}),
"[project]/apps/dashboard/components/onboarding/sign-out-button.tsx (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SignOutButton": (()=>SignOutButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const SignOutButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SignOutButton() from the server but SignOutButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/dashboard/components/onboarding/sign-out-button.tsx", "SignOutButton");
}}),
"[project]/apps/dashboard/components/onboarding/sign-out-button.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$components$2f$onboarding$2f$sign$2d$out$2d$button$2e$tsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/apps/dashboard/components/onboarding/sign-out-button.tsx (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$components$2f$onboarding$2f$sign$2d$out$2d$button$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/apps/dashboard/components/onboarding/sign-out-button.tsx (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$components$2f$onboarding$2f$sign$2d$out$2d$button$2e$tsx__$28$client__proxy$29$__);
}}),
"[project]/apps/dashboard/lib/formatters.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "capitalize": (()=>capitalize),
    "createTitle": (()=>createTitle),
    "getInitials": (()=>getInitials),
    "getTimeSlot": (()=>getTimeSlot)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/common/src/app.ts [app-rsc] (ecmascript)");
;
function createTitle(title, addSuffix = true) {
    if (!addSuffix) {
        return title;
    }
    if (!title) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APP_NAME"];
    }
    return `${title} | ${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APP_NAME"]}`;
}
function capitalize(str) {
    if (!str) {
        return str;
    }
    if (str.length === 1) {
        return str.charAt(0).toUpperCase();
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function getInitials(name) {
    if (!name) {
        return '';
    }
    return name.replace(/\s+/, ' ').split(' ').slice(0, 2).map((v)=>v && v[0].toUpperCase()).join('');
}
function getTimeSlot(hours, minutes) {
    const date = new Date(0);
    date.setMilliseconds(0);
    date.setSeconds(0);
    date.setMinutes(0);
    date.setHours(0);
    date.setHours(hours);
    date.setMinutes(minutes);
    return date;
}
}}),
"[project]/apps/dashboard/lib/file-upload.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Max image size in bytes
__turbopack_esm__({
    "FileUploadAction": (()=>FileUploadAction),
    "MAX_IMAGE_SIZE": (()=>MAX_IMAGE_SIZE)
});
const MAX_IMAGE_SIZE = 5000000; // 5 MB
var FileUploadAction = /*#__PURE__*/ function(FileUploadAction) {
    FileUploadAction["None"] = "NONE";
    FileUploadAction["Update"] = "UPDATE";
    FileUploadAction["Delete"] = "DELETE";
    return FileUploadAction;
}({});
}}),
"[project]/apps/dashboard/schemas/onboarding/complete-onboarding-schema.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "OnboardingStep": (()=>OnboardingStep),
    "completeOnboardingSchema": (()=>completeOnboardingSchema),
    "inviteTeamOnboardingSchema": (()=>inviteTeamOnboardingSchema),
    "organizationOnboardingSchema": (()=>organizationOnboardingSchema),
    "pendingInvitationsOnboardingSchema": (()=>pendingInvitationsOnboardingSchema),
    "profileOnboardingSchema": (()=>profileOnboardingSchema),
    "themeOnboardingSchema": (()=>themeOnboardingSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/packages/database/src/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$lib$2f$file$2d$upload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/lib/file-upload.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_import__("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
;
const profileOnboardingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].nativeEnum(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$lib$2f$file$2d$upload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FileUploadAction"], {
        required_error: 'Action is required',
        invalid_type_error: 'Action must be a string'
    }),
    image: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string({
        invalid_type_error: 'Image must be a string.'
    }).optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string({
        required_error: 'Name is required.',
        invalid_type_error: 'Name must be a string.'
    }).trim().min(1, 'Name is required.').max(64, 'Maximum 64 characters allowed.'),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string({
        invalid_type_error: 'Phone must be a string.'
    }).trim().max(16, 'Maximum 16 characters allowed.').optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')),
    // We are not using the email on the server
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal(''))
});
const themeOnboardingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    theme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('light').or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('dark').or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('system')))
});
const organizationOnboardingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    logo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string({
        invalid_type_error: 'Logo must be a string.'
    }).optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string({
        required_error: 'Name is required.',
        invalid_type_error: 'Name must be a string.'
    }).trim().min(1, 'Name is required.').max(64, 'Maximum 64 characters allowed.'),
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string({
        required_error: 'Slug is required.',
        invalid_type_error: 'Slug must be a string.'
    }).trim().min(3, 'Minimum 3 characters required.').max(1024, 'Maximum 1024 characters allowed.').regex(/^[a-z0-9]+[a-z0-9_-]*[a-z0-9]+$/, {
        message: 'Slug must start and end with a letter or number and can contain underscores and hyphens in between.'
    }),
    addExampleData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].coerce.boolean()
});
const inviteTeamOnboardingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    invitations: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
        email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().trim().max(255, 'Maximum 255 characters allowed.').email('Enter a valid email address.').optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('')),
        role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].nativeEnum(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Role"], {
            required_error: 'Role is required',
            invalid_type_error: 'Role must be a string'
        })
    })).max(5, 'Maximum 5 invitations allowed.').optional()
});
const pendingInvitationsOnboardingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    invitationIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string({
        required_error: 'Id is required.',
        invalid_type_error: 'Id must be a string.'
    }).trim().uuid('Id is invalid.').min(1, 'Id is required.').max(36, 'Maximum 36 characters allowed.'))
});
var OnboardingStep = /*#__PURE__*/ function(OnboardingStep) {
    OnboardingStep["Profile"] = "profile";
    OnboardingStep["Theme"] = "theme";
    OnboardingStep["Organization"] = "organization";
    OnboardingStep["InviteTeam"] = "invite-team";
    OnboardingStep["PendingInvitations"] = "pending-invitations";
    return OnboardingStep;
}({});
const completeOnboardingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    activeSteps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].nativeEnum(OnboardingStep)),
    profileStep: profileOnboardingSchema.optional(),
    themeStep: themeOnboardingSchema.optional(),
    organizationStep: organizationOnboardingSchema.optional(),
    inviteTeamStep: inviteTeamOnboardingSchema.optional(),
    pendingInvitationsStep: pendingInvitationsOnboardingSchema.optional()
});
}}),
"[project]/apps/dashboard/app/onboarding/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": (()=>OnboardingFullPage),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$context$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/context.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/packages/database/src/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/database/src/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/routes/src/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/ui/src/components/logo.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$components$2f$onboarding$2f$onboarding$2d$wizard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/components/onboarding/onboarding-wizard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$components$2f$onboarding$2f$sign$2d$out$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/components/onboarding/sign-out-button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$lib$2f$formatters$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/lib/formatters.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$schemas$2f$onboarding$2f$complete$2d$onboarding$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/schemas/onboarding/complete-onboarding-schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_import__("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-rsc] (ecmascript) <export default as ChevronLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$context$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$context$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
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
const metadata = {
    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$lib$2f$formatters$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTitle"])('Onboarding')
};
async function OnboardingFullPage() {
    const ctx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$context$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthContext"])();
    if (ctx.session.user.completedOnboarding) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.organizations.Index);
    }
    if (// has memberships
    ctx.session.user.memberships.length > 0 || // has pending invitations
    await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].invitation.count({
        where: {
            email: ctx.session.user.email,
            status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["InvitationStatus"].PENDING
        }
    }) > 0) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.onboarding.User);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 top-0 mx-auto flex min-w-80 items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$src$2f$components$2f$logo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                    fileName: "[project]/apps/dashboard/app/onboarding/page.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/dashboard/app/onboarding/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$components$2f$onboarding$2f$sign$2d$out$2d$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignOutButton"], {
                type: "button",
                variant: "link",
                className: "absolute left-4 top-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__["ChevronLeftIcon"], {
                        className: "mr-2 size-4 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/apps/dashboard/app/onboarding/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    "Sign out"
                ]
            }, void 0, true, {
                fileName: "[project]/apps/dashboard/app/onboarding/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$components$2f$onboarding$2f$onboarding$2d$wizard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OnboardingWizard"], {
                activeSteps: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$schemas$2f$onboarding$2f$complete$2d$onboarding$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OnboardingStep"].Profile,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$schemas$2f$onboarding$2f$complete$2d$onboarding$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OnboardingStep"].Theme,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$schemas$2f$onboarding$2f$complete$2d$onboarding$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OnboardingStep"].Organization,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$schemas$2f$onboarding$2f$complete$2d$onboarding$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OnboardingStep"].InviteTeam
                ],
                metadata: {
                    user: ctx.session.user
                }
            }, void 0, false, {
                fileName: "[project]/apps/dashboard/app/onboarding/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/dashboard/app/onboarding/page.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/dashboard/app/onboarding/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_namespace__(__turbopack_import__("[project]/apps/dashboard/app/onboarding/page.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/packages/common/src/errors.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ForbiddenError": (()=>ForbiddenError),
    "GatewayError": (()=>GatewayError),
    "NotFoundError": (()=>NotFoundError),
    "PreConditionError": (()=>PreConditionError),
    "ValidationError": (()=>ValidationError)
});
class ForbiddenError extends Error {
    constructor(message = 'Forbidden.'){
        super(message);
        this.name = 'ForbiddenError';
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}
class ValidationError extends Error {
    constructor(message = 'Input contains invalid data.'){
        super(message);
        this.name = 'ValidationError';
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}
class PreConditionError extends Error {
    constructor(message = 'Pre-condition failed.'){
        super(message);
        this.name = 'PreConditionError';
        Object.setPrototypeOf(this, PreConditionError.prototype);
    }
}
class NotFoundError extends Error {
    constructor(message = 'Not Found.'){
        super(message);
        this.name = 'NotFoundError';
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
class GatewayError extends Error {
    constructor(message = 'Gateway or service responsed with error.'){
        super(message);
        this.name = 'GatewayError';
        Object.setPrototypeOf(this, GatewayError.prototype);
    }
}
}}),
"[project]/apps/dashboard/actions/safe-action.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "actionClient": (()=>actionClient),
    "authActionClient": (()=>authActionClient),
    "authOrganizationActionClient": (()=>authOrganizationActionClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$safe$2d$action$40$7$2e$10$2e$2_next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$1_5z4fby5kd4ornlngatjc5xx6a4$2f$node_modules$2f$next$2d$safe$2d$action$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next-safe-action@7.10.2_next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@1_5z4fby5kd4ornlngatjc5xx6a4/node_modules/next-safe-action/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$context$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/context.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/common/src/errors.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$context$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$context$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
const actionClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$safe$2d$action$40$7$2e$10$2e$2_next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$1_5z4fby5kd4ornlngatjc5xx6a4$2f$node_modules$2f$next$2d$safe$2d$action$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSafeActionClient"])({
    handleServerError (e) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValidationError"] || e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ForbiddenError"] || e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NotFoundError"] || e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PreConditionError"] || e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$errors$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GatewayError"]) {
            return e.message;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$safe$2d$action$40$7$2e$10$2e$2_next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$1_5z4fby5kd4ornlngatjc5xx6a4$2f$node_modules$2f$next$2d$safe$2d$action$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_SERVER_ERROR_MESSAGE"];
    },
    defineMetadataSchema () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
            actionName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()
        });
    }
});
const authActionClient = actionClient.use(async ({ next })=>{
    const ctx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$context$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthContext"])();
    return next({
        ctx
    });
});
const authOrganizationActionClient = actionClient.use(async ({ next })=>{
    const ctx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$context$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthOrganizationContext"])();
    return next({
        ctx
    });
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/dashboard/schemas/auth/sign-out-schema.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "signOutSchema": (()=>signOutSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
;
const signOutSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    redirect: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].coerce.boolean()
});
}}),
"[project]/apps/dashboard/actions/auth/sign-out.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ {"7f86376a97362c4df0e8fa650970019d18f79c93e0":"signOut"} */ __turbopack_esm__({
    "signOut": (()=>signOut)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/routes/src/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/actions/safe-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$schemas$2f$auth$2f$sign$2d$out$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/schemas/auth/sign-out-schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ signOut = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["actionClient"].metadata({
    actionName: 'signOut'
}).schema(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$schemas$2f$auth$2f$sign$2d$out$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOutSchema"]).action(async ({ parsedInput })=>{
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"])({
        redirect: parsedInput.redirect,
        redirectTo: parsedInput.redirect ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.auth.SignIn : undefined
    });
});
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    signOut
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signOut, "7f86376a97362c4df0e8fa650970019d18f79c93e0", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/dashboard/schemas/organization/check-if-slug-is-available-schema.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "checkIfSlugIsAvailableSchema": (()=>checkIfSlugIsAvailableSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
;
const checkIfSlugIsAvailableSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string({
        required_error: 'Handle is required.',
        invalid_type_error: 'Handle must be a string.'
    }).trim().min(3, 'Minimum 3 characters required.').max(1024, 'Maximum 1024 characters allowed.').regex(/^[a-z0-9]+[a-z0-9_-]*[a-z0-9]+$/, {
        message: 'Slug must start and end with a letter or number and can contain underscores and hyphens in between.'
    })
});
}}),
"[project]/apps/dashboard/actions/organization/check-if-slug-is-available.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ {"7f328864911a5cae094017bd06b316d5b389684ff3":"checkIfSlugIsAvailable"} */ __turbopack_esm__({
    "checkIfSlugIsAvailable": (()=>checkIfSlugIsAvailable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/database/src/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/actions/safe-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$schemas$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/schemas/organization/check-if-slug-is-available-schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ checkIfSlugIsAvailable = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authActionClient"].metadata({
    actionName: 'checkIfSlugIsAvailable'
}).schema(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$schemas$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkIfSlugIsAvailableSchema"]).action(async ({ parsedInput })=>{
    const count = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].organization.count({
        where: {
            slug: parsedInput.slug
        }
    });
    return {
        isAvailable: count === 0
    };
});
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    checkIfSlugIsAvailable
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkIfSlugIsAvailable, "7f328864911a5cae094017bd06b316d5b389684ff3", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/packages/email-templates/src/invitation-email.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "InvitationEmail": (()=>InvitationEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$html$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$html$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+html@0.0.11_react@19.0.0/node_modules/@react-email/html/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$head$40$0$2e$0$2e$12_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$head$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+head@0.0.12_react@19.0.0/node_modules/@react-email/head/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$preview$40$0$2e$0$2e$12_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$preview$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+preview@0.0.12_react@19.0.0/node_modules/@react-email/preview/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$tailwind$40$1$2e$0$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$tailwind$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+tailwind@1.0.4_react@19.0.0/node_modules/@react-email/tailwind/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$body$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$body$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+body@0.0.11_react@19.0.0/node_modules/@react-email/body/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$container$40$0$2e$0$2e$15_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$container$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+container@0.0.15_react@19.0.0/node_modules/@react-email/container/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$heading$40$0$2e$0$2e$15_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$heading$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+heading@0.0.15_react@19.0.0/node_modules/@react-email/heading/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$text$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+text@0.0.11_react@19.0.0/node_modules/@react-email/text/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$link$40$0$2e$0$2e$12_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$link$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+link@0.0.12_react@19.0.0/node_modules/@react-email/link/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$section$40$0$2e$0$2e$16_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+section@0.0.16_react@19.0.0/node_modules/@react-email/section/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$button$40$0$2e$0$2e$19_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$button$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+button@0.0.19_react@19.0.0/node_modules/@react-email/button/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$hr$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$hr$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+hr@0.0.11_react@19.0.0/node_modules/@react-email/hr/dist/index.mjs [app-rsc] (ecmascript)");
;
;
;
function InvitationEmail({ appName, invitedByName, invitedByEmail, organizationName, inviteLink }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$html$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$html$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Html"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$head$40$0$2e$0$2e$12_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$head$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Head"], {}, void 0, false, {
                fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$preview$40$0$2e$0$2e$12_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$preview$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Preview"], {
                children: [
                    "Join ",
                    organizationName,
                    " on ",
                    appName
                ]
            }, void 0, true, {
                fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$tailwind$40$1$2e$0$2e$4_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$tailwind$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tailwind"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$body$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$body$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Body"], {
                    className: "m-auto bg-white px-2 font-sans",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$container$40$0$2e$0$2e$15_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$container$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
                        className: "mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$heading$40$0$2e$0$2e$15_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$heading$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                                className: "mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black",
                                children: [
                                    "Join ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: organizationName
                                    }, void 0, false, {
                                        fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                                        lineNumber: 42,
                                        columnNumber: 20
                                    }, this),
                                    " on",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: appName
                                    }, void 0, false, {
                                        fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$text$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                className: "text-[14px] leading-[24px] text-black",
                                children: "Hello,"
                            }, void 0, false, {
                                fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$text$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                className: "text-[14px] leading-[24px] text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: invitedByName
                                    }, void 0, false, {
                                        fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    " (",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$link$40$0$2e$0$2e$12_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$link$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Link"], {
                                        href: `mailto:${invitedByEmail}`,
                                        className: "text-blue-600 no-underline",
                                        children: invitedByEmail
                                    }, void 0, false, {
                                        fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    ") has invited you to join the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: organizationName
                                    }, void 0, false, {
                                        fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                                        lineNumber: 56,
                                        columnNumber: 45
                                    }, this),
                                    ' ',
                                    "organization on ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: appName
                                    }, void 0, false, {
                                        fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                                        lineNumber: 57,
                                        columnNumber: 31
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$section$40$0$2e$0$2e$16_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$section$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
                                className: "my-[32px] text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$button$40$0$2e$0$2e$19_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$button$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                    href: inviteLink,
                                    className: "rounded bg-[#000000] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline",
                                    children: "Accept"
                                }, void 0, false, {
                                    fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$text$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                className: "text-[14px] leading-[24px] text-black",
                                children: [
                                    "or copy and paste this URL into your browser:",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$link$40$0$2e$0$2e$12_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$link$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Link"], {
                                        href: inviteLink,
                                        className: "text-blue-600 no-underline",
                                        children: inviteLink
                                    }, void 0, false, {
                                        fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$hr$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$hr$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Hr"], {
                                className: "mx-0 my-[26px] w-full border border-solid border-[#eaeaea]"
                            }, void 0, false, {
                                fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$text$40$0$2e$0$2e$11_react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$text$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                className: "text-[12px] leading-[24px] text-[#666666]",
                                children: "If you were not expecting this invitation, you can ignore this email."
                            }, void 0, false, {
                                fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/email-templates/src/invitation-email.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}}),
"[project]/packages/email/src/send-invitation-email.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "sendInvitationEmail": (()=>sendInvitationEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2d$templates$2f$src$2f$invitation$2d$email$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/email-templates/src/invitation-email.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$mailer$2f$send$2d$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/email/src/mailer/send-email.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$render$40$1$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@react-email+render@1.0.3_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@react-email/render/dist/node/index.mjs [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$render$40$1$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$render$40$1$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
async function sendInvitationEmail(input) {
    const component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2d$templates$2f$src$2f$invitation$2d$email$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvitationEmail"])(input);
    const html = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$render$40$1$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["render"])(component);
    const text = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$react$2d$email$2b$render$40$1$2e$0$2e$3_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f40$react$2d$email$2f$render$2f$dist$2f$node$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["render"])(component, {
        plainText: true
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$mailer$2f$send$2d$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendEmail"])({
        recipient: input.recipient,
        subject: 'Organization invitation',
        html,
        text
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/packages/auth/src/invitations.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "checkIfCanInvite": (()=>checkIfCanInvite),
    "createInvitation": (()=>createInvitation),
    "sendInvitationRequest": (()=>sendInvitationRequest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/common/src/app.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/packages/database/src/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/database/src/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$send$2d$invitation$2d$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/email/src/send-invitation-email.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/routes/src/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_import__("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$send$2d$invitation$2d$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$send$2d$invitation$2d$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
async function checkIfCanInvite(email, organizationId) {
    const [countMemberships, countInvitations] = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].membership.count({
            where: {
                user: {
                    email
                },
                organizationId
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].invitation.count({
            where: {
                email: email,
                organizationId: organizationId,
                status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["InvitationStatus"].PENDING
            }
        })
    ]);
    return countMemberships === 0 && countInvitations === 0;
}
async function createInvitation(email, role, organizationId) {
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction([
        // revoke old invitations
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].invitation.updateMany({
            where: {
                organizationId,
                email,
                status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["InvitationStatus"].PENDING
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["InvitationStatus"].REVOKED
            }
        }),
        // create new invitation
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].invitation.create({
            data: {
                email,
                role,
                organizationId
            },
            select: {
                id: true,
                role: true,
                email: true,
                token: true
            }
        })
    ]);
    return result[1];
}
async function sendInvitationRequest({ email, organizationName, invitedByEmail, invitedByName, token, invitationId, organizationId }) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$send$2d$invitation$2d$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendInvitationEmail"])({
        recipient: email,
        appName: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$common$2f$src$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APP_NAME"],
        organizationName,
        invitedByEmail,
        invitedByName,
        inviteLink: `${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.invitations.Request}/${token}`
    });
    await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].invitation.update({
        where: {
            id: invitationId,
            organizationId
        },
        data: {
            lastSentAt: new Date()
        },
        select: {
            id: true
        }
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/packages/billing/keys.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "keys": (()=>keys)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$t3$2d$oss$2b$env$2d$nextjs$40$0$2e$11$2e$1_typescript$40$5$2e$7$2e$2_zod$40$3$2e$24$2e$1$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@t3-oss+env-nextjs@0.11.1_typescript@5.7.2_zod@3.24.1/node_modules/@t3-oss/env-nextjs/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
;
;
const keys = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$t3$2d$oss$2b$env$2d$nextjs$40$0$2e$11$2e$1_typescript$40$5$2e$7$2e$2_zod$40$3$2e$24$2e$1$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEnv"])({
        server: {
            BILLING_STRIPE_SECRET_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
            BILLING_STRIPE_WEBHOOK_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
            BILLING_PRO_PRODUCT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
            BILLING_PRO_PRODUCT_PRICE_ID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional(),
            BILLING_UNIT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
                'per_seat',
                'per_organization'
            ])
        },
        client: {
            NEXT_PUBLIC_BILLING_STRIPE_PUBLISHABLE_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$24$2e$1$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional()
        },
        runtimeEnv: {
            BILLING_STRIPE_SECRET_KEY: process.env.BILLING_STRIPE_SECRET_KEY,
            BILLING_STRIPE_WEBHOOK_SECRET: process.env.BILLING_STRIPE_WEBHOOK_SECRET,
            BILLING_PRO_PRODUCT_ID: process.env.BILLING_PRO_PRODUCT_ID,
            BILLING_PRO_PRODUCT_PRICE_ID: process.env.BILLING_PRO_PRODUCT_PRICE_ID,
            BILLING_UNIT: process.env.BILLING_UNIT,
            NEXT_PUBLIC_BILLING_STRIPE_PUBLISHABLE_KEY: ("TURBOPACK compile-time value", "")
        }
    });
}}),
"[project]/packages/billing/src/billing-unit.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BillingUnit": (()=>BillingUnit)
});
var BillingUnit = /*#__PURE__*/ function(BillingUnit) {
    BillingUnit["PerSeat"] = "per_seat";
    BillingUnit["PerOrganization"] = "per_organization";
    return BillingUnit;
}({});
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/child_process [external] (child_process, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("child_process", () => require("child_process"));

module.exports = mod;
}}),
"[project]/packages/billing/src/stripe-server.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "stripeServer": (()=>stripeServer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/stripe.esm.node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/billing/keys.ts [app-rsc] (ecmascript)");
;
;
;
const stripeServer = Object.freeze(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keys"])().BILLING_STRIPE_SECRET_KEY ?? '', {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2024-06-20'
}));
}}),
"[project]/packages/billing/src/tier.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Tier": (()=>Tier)
});
var Tier = /*#__PURE__*/ function(Tier) {
    Tier["Free"] = "free";
    Tier["Pro"] = "pro";
    Tier["ProPendingCancel"] = "pro-pending-cancel";
    return Tier;
}({});
}}),
"[project]/packages/billing/src/subscription.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "mapSubscriptionToTier": (()=>mapSubscriptionToTier),
    "pickSubscription": (()=>pickSubscription)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/billing/keys.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$tier$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/billing/src/tier.ts [app-rsc] (ecmascript)");
;
;
function pickSubscription(subscriptions) {
    if (subscriptions && subscriptions.length > 0) {
        if (subscriptions.length > 1) {
            console.warn('Multiple subscriptions found. Picking the first subscription.');
        }
        return subscriptions[0];
    }
    return undefined;
}
function mapSubscriptionToTier(subscription) {
    if (subscription && subscription.plan && subscription.plan.product) {
        if (subscription.plan.product === (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keys"])().BILLING_PRO_PRODUCT_ID) {
            return subscription.cancel_at_period_end ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$tier$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tier"].ProPendingCancel : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$tier$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tier"].Pro;
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$tier$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tier"].Free;
}
}}),
"[project]/packages/billing/src/organization.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addOrganizationToStripe": (()=>addOrganizationToStripe),
    "deleteOrganizationFromStripe": (()=>deleteOrganizationFromStripe),
    "updateOrganizationSubscriptionPlan": (()=>updateOrganizationSubscriptionPlan),
    "updateOrganizationSubscriptionQuantity": (()=>updateOrganizationSubscriptionQuantity)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/database/src/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/billing/keys.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$billing$2d$unit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/billing/src/billing-unit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$stripe$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/billing/src/stripe-server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$subscription$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/billing/src/subscription.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function addOrganizationToStripe(name, email, organizationId) {
    const stripeCustomer = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$stripe$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripeServer"].customers.create({
        name,
        email,
        metadata: {
            organizationId
        }
    });
    return stripeCustomer.id;
}
async function updateOrganizationSubscriptionPlan(stripeCustomerId) {
    if (!stripeCustomerId) {
        console.warn('Missing stripeCustomerId');
        return;
    }
    const organization = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].organization.findFirst({
        where: {
            stripeCustomerId
        },
        select: {
            id: true,
            tier: true,
            stripeCustomerId: true
        }
    });
    if (!organization || !organization.stripeCustomerId) {
        console.warn('Organization not found or missing stripeCustomerId');
        return;
    }
    const subscriptionsResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$stripe$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripeServer"].subscriptions.list({
        customer: organization.stripeCustomerId
    });
    const subscriptions = subscriptionsResponse.data || [];
    const subscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$subscription$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pickSubscription"])(subscriptions);
    const tier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$subscription$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mapSubscriptionToTier"])(subscription);
    if (tier !== organization.tier) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].organization.update({
            where: {
                id: organization.id
            },
            data: {
                tier
            }
        });
    }
}
async function updateOrganizationSubscriptionQuantity(organizationId) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keys"])().BILLING_UNIT !== __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$billing$2d$unit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BillingUnit"].PerSeat) {
        return;
    }
    const organization = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].organization.findFirst({
        where: {
            id: organizationId
        },
        select: {
            stripeCustomerId: true,
            _count: {
                select: {
                    memberships: true
                }
            }
        }
    });
    if (!organization) {
        console.warn(`Organization with id ${organizationId} not found`);
        return;
    }
    if (!organization.stripeCustomerId) {
        console.warn('Missing stripeCustomerId');
        return;
    }
    const subscriptionsResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$stripe$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripeServer"].subscriptions.list({
        customer: organization.stripeCustomerId
    });
    const subscriptions = subscriptionsResponse.data || [];
    const subscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$subscription$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pickSubscription"])(subscriptions);
    if (subscription) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$stripe$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripeServer"].subscriptions.update(subscription.id, {
            items: [
                {
                    quantity: organization._count.memberships,
                    id: subscription.items.data[0].id
                }
            ],
            billing_cycle_anchor: 'unchanged',
            proration_behavior: 'always_invoice' // Immediate invoice for changes
        });
    }
}
async function deleteOrganizationFromStripe(stripeCustomerId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$stripe$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripeServer"].customers.del(stripeCustomerId);
    } catch (error) {
        console.error('Error deleting Stripe customer:', error);
        throw error;
    }
}
}}),
"[project]/packages/image-processing/src/decode-base64-image.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "decodeBase64Image": (()=>decodeBase64Image)
});
function decodeBase64Image(base64) {
    if (!base64.startsWith('data:')) {
        throw new Error(`Couldn't decode base64 image`);
    }
    const mimeMatch = base64.match(/^data:(\w+\/\w+);/);
    const mimeType = mimeMatch?.[1];
    if (!mimeType) {
        throw new Error(`Could not distinguish mimetype`);
    }
    const buffer = Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ''), 'base64');
    return {
        buffer,
        mimeType
    };
}
}}),
"[project]/apps/dashboard/actions/contacts/_contact-event-capture.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createContactAndCaptureEvent": (()=>createContactAndCaptureEvent),
    "detectChanges": (()=>detectChanges),
    "updateContactAndCaptureEvent": (()=>updateContactAndCaptureEvent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/packages/database/src/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/database/src/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_import__("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
const fieldsToCheck = [
    'record',
    'image',
    'name',
    'email',
    'address',
    'phone',
    'stage',
    'tags'
];
function safeStringify(value) {
    if (value === null || value === undefined) {
        return null;
    }
    return typeof value === 'object' ? JSON.stringify(value) : String(value);
}
function joinTags(tags) {
    return [
        ...new Set(tags.map((tag)=>tag.text))
    ].sort().join(',');
}
function detectChanges(currentContact, updatedContact, updateData) {
    const changes = {};
    for (const field of fieldsToCheck){
        if (field === 'tags') {
            const oldTags = currentContact?.tags ? joinTags(currentContact.tags) : null;
            const newTags = joinTags(updatedContact.tags);
            if (oldTags !== newTags) {
                changes.tags = {
                    old: oldTags,
                    new: newTags
                };
            }
        } else {
            const oldValue = currentContact ? safeStringify(currentContact[field]) : null;
            const newValue = safeStringify(updatedContact[field]);
            if (oldValue !== newValue && (!updateData || field in updateData)) {
                changes[field] = {
                    old: oldValue,
                    new: newValue
                };
            }
        }
    }
    return changes;
}
async function createContactAndCaptureEvent(contactData, actorId) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
        const createdAt = contactData.createdAt ?? new Date();
        const newContact = await tx.contact.create({
            data: {
                ...contactData,
                createdAt: createdAt,
                updatedAt: createdAt
            },
            include: {
                tags: true
            }
        });
        const changes = detectChanges(null, newContact);
        await tx.contactActivity.create({
            data: {
                contactId: newContact.id,
                actionType: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ActionType"].CREATE,
                actorId,
                actorType: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ActorType"].MEMBER,
                metadata: changes,
                occurredAt: createdAt
            }
        });
        return newContact;
    });
}
async function updateContactAndCaptureEvent(contactId, updateData, actorId) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
        const currentContact = await tx.contact.findUnique({
            where: {
                id: contactId
            },
            include: {
                tags: true
            }
        });
        if (!currentContact) {
            throw new Error('Contact not found');
        }
        const updatedContact = await tx.contact.update({
            where: {
                id: contactId
            },
            data: {
                ...updateData,
                updatedAt: new Date()
            },
            include: {
                tags: true
            }
        });
        const changes = detectChanges(currentContact, updatedContact, updateData);
        if (Object.keys(changes).length > 0) {
            await tx.contactActivity.create({
                data: {
                    contactId,
                    actionType: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ActionType"].UPDATE,
                    actorId,
                    actorType: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ActorType"].MEMBER,
                    metadata: changes,
                    occurredAt: new Date()
                }
            });
        }
        return changes;
    });
}
}}),
"[project]/apps/dashboard/actions/onboarding/_add-example.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"604b99ab03c7ea2fb6c9d431f27f266a0d6e8f6dad":"addExampleData"} */ __turbopack_esm__({
    "addExampleData": (()=>addExampleData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/packages/database/src/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/database/src/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/routes/src/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$contacts$2f$_contact$2d$event$2d$capture$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/actions/contacts/_contact-event-capture.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_import__("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subDays.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$0$2e$3$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@11.0.3/node_modules/uuid/dist/esm/v4.js [app-rsc] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$addMilliseconds$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/addMilliseconds.mjs [app-rsc] (ecmascript)");
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
const BATCH_SIZE = 5;
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ addExampleData(organizationId, userId) {
    const now = new Date();
    const thirtyDaysAgo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subDays"])(now, 30);
    const imageCache = await preloadImages();
    let favoritesCount = -1;
    for(let i = 0; i < contacts.length; i += BATCH_SIZE){
        const batch = contacts.slice(i, i + BATCH_SIZE);
        const timeSpan = now.getTime() - thirtyDaysAgo.getTime();
        const batchQueries = [];
        for (const contact of batch){
            const contactId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$0$2e$3$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            // Calculate a random date within the last 30 day
            const randomOffset = Math.random() * timeSpan;
            const randomDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$addMilliseconds$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addMilliseconds"])(thirtyDaysAgo, randomOffset);
            let imageUrl;
            if (contact.image && imageCache.has(contact.image)) {
                const { buffer, mimeType } = imageCache.get(contact.image);
                const hash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('sha256').update(buffer).digest('hex');
                batchQueries.push(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].contactImage.create({
                    data: {
                        contactId,
                        data: buffer,
                        contentType: mimeType,
                        hash: hash
                    },
                    select: {
                        id: true // SELECT NONE
                    }
                }));
                imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getContactImageUrl"])(contactId, hash);
            }
            let addToFavorites = false;
            if ([
                'Airbnb',
                'Google',
                'Microsoft'
            ].includes(contact.name)) {
                addToFavorites = true;
                favoritesCount++;
            }
            batchQueries.push(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].contact.create({
                data: {
                    id: contactId,
                    organizationId,
                    name: contact.name,
                    image: imageUrl,
                    record: contact.record,
                    email: contact.email,
                    phone: contact.phone,
                    address: contact.address,
                    tags: {
                        connectOrCreate: contact.tags.map((tag)=>({
                                where: {
                                    text: tag
                                },
                                create: {
                                    text: tag
                                }
                            }))
                    },
                    activities: {
                        create: {
                            actionType: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ActionType"].CREATE,
                            actorId: userId,
                            actorType: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ActorType"].MEMBER,
                            metadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$contacts$2f$_contact$2d$event$2d$capture$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["detectChanges"])(null, {
                                id: contactId,
                                organizationId: organizationId,
                                name: contact.name,
                                image: imageUrl ?? null,
                                record: contact.record,
                                email: contact.email,
                                phone: contact.phone,
                                address: contact.address,
                                stage: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactStage"].LEAD,
                                updatedAt: randomDate,
                                createdAt: randomDate,
                                tags: contact.tags.map((tag)=>({
                                        text: tag
                                    }))
                            }),
                            occurredAt: randomDate
                        }
                    },
                    favorites: addToFavorites ? {
                        create: {
                            userId: userId,
                            order: favoritesCount
                        }
                    } : undefined,
                    createdAt: randomDate,
                    updatedAt: randomDate
                },
                select: {
                    id: true // SELECT NONE
                }
            }));
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(batchQueries);
    }
}
async function preloadImages() {
    const imageCache = new Map();
    await Promise.all(contacts.map(async (contact)=>{
        if (contact.image) {
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseUrl"].Dashboard}${contact.image}`);
            if (response.ok) {
                const mimeType = response.headers.get('content-type') || getMimeType(contact.image);
                const jsBuffer = await response.arrayBuffer();
                const buffer = Buffer.from(new Uint8Array(jsBuffer));
                imageCache.set(contact.image, {
                    buffer,
                    mimeType
                });
            }
        }
    }));
    return imageCache;
}
function getMimeType(filename) {
    const ext = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["extname"])(filename).toLowerCase();
    switch(ext){
        case '.png':
            return 'image/png';
        case '.jpg':
        case '.jpeg':
            return 'image/jpeg';
        case '.gif':
            return 'image/gif';
        default:
            return 'application/octet-stream';
    }
}
const contacts = [
    // COMPANIES
    {
        name: 'Adobe',
        image: '/example-data/companies/adobe.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'contact@adobe.com',
        phone: '+1 408-536-6000',
        address: '345 Park Avenue, San Jose, CA 95110, USA',
        tags: [
            'Software',
            'Technology',
            'Creativity'
        ]
    },
    {
        name: 'Airbnb',
        image: '/example-data/companies/airbnb.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'press@airbnb.com',
        phone: '+1 415-800-5959',
        address: '888 Brannan Street, San Francisco, CA 94103, USA',
        tags: [
            'Internet',
            'B2C',
            'Web Services & Apps'
        ]
    },
    {
        name: 'Amazon',
        image: '/example-data/companies/amazon.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'contact@amazon.com',
        phone: '+1 206-266-1000',
        address: '410 Terry Avenue North, Seattle, WA 98109, USA',
        tags: [
            'E-commerce',
            'Technology',
            'Cloud Computing'
        ]
    },
    {
        name: 'AMD',
        image: '/example-data/companies/amd.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'info@amd.com',
        phone: '+1 408-749-4000',
        address: '2485 Augustine Drive, Santa Clara, CA 95054, USA',
        tags: [
            'Semiconductors',
            'Hardware',
            'Technology'
        ]
    },
    {
        name: 'Apple',
        image: '/example-data/companies/apple.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'contact@apple.com',
        phone: '+1 408-996-1010',
        address: 'One Apple Park Way, Cupertino, CA 95014, USA',
        tags: [
            'Technology',
            'B2C',
            'IT & Services'
        ]
    },
    {
        name: 'Broadcom',
        image: '/example-data/companies/broadcom.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'info@broadcom.com',
        phone: '+1 408-677-6000',
        address: '1320 Ridder Park Drive, San Jose, CA 95131, USA',
        tags: [
            'Semiconductors',
            'Infrastructure Software',
            'Technology'
        ]
    },
    {
        name: 'Disney',
        image: '/example-data/companies/disney.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'contact@disney.com',
        phone: '+1 818-560-1000',
        address: '500 South Buena Vista Street, Burbank, CA 91521, USA',
        tags: [
            'Entertainment',
            'B2C',
            'Broadcasting'
        ]
    },
    {
        name: 'Dropbox',
        image: '/example-data/companies/dropbox.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'info@dropbox.com',
        phone: '+1 415-857-6800',
        address: '1800 Owens Street, San Francisco, CA 94158, USA',
        tags: [
            'Cloud Storage',
            'Collaboration',
            'Software'
        ]
    },
    {
        name: 'Google',
        image: '/example-data/companies/google.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'contact@google.com',
        phone: '+1 650-253-0000',
        address: '1600 Amphitheatre Parkway, Mountain View, CA 94043, USA',
        tags: [
            'Technology',
            'Internet',
            'Web Services & Apps'
        ]
    },
    {
        name: 'Intercom',
        image: '/example-data/companies/intercom.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'team@intercom.com',
        phone: '+1 415-932-6898',
        address: '55 2nd Street, 4th Floor, San Francisco, CA 94105, USA',
        tags: [
            'SAAS',
            'B2B',
            'Technology'
        ]
    },
    {
        name: 'LVMH',
        image: '/example-data/companies/lvmh.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'contact@lvmh.com',
        phone: '+33 1 44 13 22 22',
        address: '22 Avenue Montaigne, 75008 Paris, France',
        tags: [
            'Luxury Goods',
            'B2C',
            'Retail'
        ]
    },
    {
        name: 'Microsoft',
        image: '/example-data/companies/microsoft.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'contact@microsoft.com',
        phone: '+1 425-882-8080',
        address: 'One Microsoft Way, Redmond, WA 98052, USA',
        tags: [
            'Technology',
            'SAAS',
            'B2B',
            'IT & Services'
        ]
    },
    {
        name: 'Netflix',
        image: '/example-data/companies/netflix.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'info@netflix.com',
        phone: '+1 408-540-3700',
        address: '100 Winchester Circle, Los Gatos, CA 95032, USA',
        tags: [
            'Entertainment',
            'Streaming',
            'Technology'
        ]
    },
    {
        name: 'Nvidia',
        image: '/example-data/companies/nvidia.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'info@nvidia.com',
        phone: '+1 408-486-2000',
        address: '2788 San Tomas Expressway, Santa Clara, CA 95051, USA',
        tags: [
            'Hardware',
            'Technology',
            'AI'
        ]
    },
    {
        name: 'Oracle',
        image: '/example-data/companies/oracle.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'info@oracle.com',
        phone: '+1 650-506-7000',
        address: '500 Oracle Parkway, Redwood Shores, CA 94065, USA',
        tags: [
            'Database',
            'Cloud',
            'Enterprise Software'
        ]
    },
    {
        name: 'PayPal',
        image: '/example-data/companies/paypal.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'contact@paypal.com',
        phone: '+1 888-221-1161',
        address: '2211 North First Street, San Jose, CA 95131, USA',
        tags: [
            'Technology',
            'B2C',
            'Internet'
        ]
    },
    {
        name: 'Qualcomm',
        image: '/example-data/companies/qualcomm.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'info@qualcomm.com',
        phone: '+1 858-587-1121',
        address: '5775 Morehouse Dr, San Diego, CA 92121, USA',
        tags: [
            'Semiconductors',
            'Telecommunications',
            'Technology'
        ]
    },
    {
        name: 'Samsung',
        image: '/example-data/companies/samsung.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'info@samsung.com',
        phone: '+82 2-2053-3000',
        address: '129 Samsung-ro, Yeongtong-gu, Suwon-si, Gyeonggi-do, South Korea',
        tags: [
            'Electronics',
            'Technology',
            'Consumer Goods'
        ]
    },
    {
        name: 'Salesforce',
        image: '/example-data/companies/salesforce.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'contact@salesforce.com',
        phone: '+1 415-901-7000',
        address: '415 Mission Street, 3rd Floor, San Francisco, CA 94105, USA',
        tags: [
            'Technology',
            'SAAS',
            'IT & Services',
            'B2B'
        ]
    },
    {
        name: 'Slack',
        image: '/example-data/companies/slack.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'info@slack.com',
        phone: '+1 415-579-9122',
        address: '500 Howard Street, San Francisco, CA 94105, USA',
        tags: [
            'Communication',
            'Collaboration',
            'Software'
        ]
    },
    {
        name: 'Spotify',
        image: '/example-data/companies/spotify.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'press@spotify.com',
        phone: '+1 212-653-8800',
        address: '4 World Trade Center, 150 Greenwich Street, New York, NY 10007, USA',
        tags: [
            'Music',
            'Streaming',
            'Technology'
        ]
    },
    {
        name: 'Tesla',
        image: '/example-data/companies/tesla.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'press@tesla.com',
        phone: '+1 888-518-3752',
        address: '3500 Deer Creek Road, Palo Alto, CA 94304, USA',
        tags: [
            'Automotive',
            'Energy',
            'Technology'
        ]
    },
    {
        name: 'Uber',
        image: '/example-data/companies/uber.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'press@uber.com',
        phone: '+1 415-612-8582',
        address: '1515 3rd Street, San Francisco, CA 94158, USA',
        tags: [
            'Transportation',
            'Technology',
            'Logistics'
        ]
    },
    {
        name: 'United Airlines',
        image: '/example-data/companies/united-airlines.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'customer.service@united.com',
        phone: '+1 800-864-8331',
        address: '233 S. Wacker Drive, Chicago, IL 60606, USA',
        tags: [
            'Aviation',
            'B2C',
            'Transportation'
        ]
    },
    {
        name: 'Zoom',
        image: '/example-data/companies/zoom.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].COMPANY,
        email: 'info@zoom.us',
        phone: '+1 888-799-9666',
        address: '55 Almaden Boulevard, 6th Floor, San Jose, CA 95113, USA',
        tags: [
            'Video Conferencing',
            'Communication',
            'Software'
        ]
    },
    // PEOPLE
    {
        name: 'Beatrice Richter',
        image: '/example-data/people/beatrice_richter.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].PERSON,
        email: 'beatrice.richter@intel.com',
        phone: '+1 408-765-8080',
        address: '2200 Mission College Blvd, Santa Clara, CA 95054, USA',
        tags: [
            'Semiconductors',
            'Technology'
        ]
    },
    {
        name: 'Gabriel Fischer',
        image: '/example-data/people/gabriel_fischer.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].PERSON,
        email: 'gabriel.fischer@x.com',
        phone: '+1 415-222-9670',
        address: '1355 Market Street, Suite 900, San Francisco, CA 94103, USA',
        tags: [
            'Social Media',
            'Technology'
        ]
    },
    {
        name: 'Hugo Schmidt',
        image: '/example-data/people/hugo_schmidt.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].PERSON,
        email: 'hugo.schmidt@spotify.com',
        phone: '+1 212-653-8800',
        address: '4 World Trade Center, 150 Greenwich Street, New York, NY 10007, USA',
        tags: [
            'Music',
            'Technology'
        ]
    },
    {
        name: 'Ishaan Richardson',
        image: '/example-data/people/ishaan_richardson.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].PERSON,
        email: 'ishaan.richardson@ibm.com',
        phone: '+1 914-499-1900',
        address: '1 New Orchard Road, Armonk, NY 10504, USA',
        tags: [
            'Cloud Computing',
            'AI'
        ]
    },
    {
        name: 'Kathleen Graves',
        image: '/example-data/people/kathleen_graves.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].PERSON,
        email: 'kathleen.graves@zoom.us',
        phone: '+1 888-799-9666',
        address: '55 Almaden Blvd, Suite 600, San Jose, CA 95113, USA',
        tags: [
            'Video Conferencing',
            'SAAS'
        ]
    },
    {
        name: 'Lucia Bianchi',
        image: '/example-data/people/lucia_bianchi.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].PERSON,
        email: 'lucia.bianchi@squareup.com',
        phone: '+1 800-473-3789',
        address: '1455 Market Street, Suite 600, San Francisco, CA 94103, USA',
        tags: [
            'Financial Services',
            'Technology'
        ]
    },
    {
        name: 'Marie Jones',
        image: '/example-data/people/marie_jones.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].PERSON,
        email: 'marie.jones@slack.com',
        phone: '+1 415-863-1200',
        address: '500 Howard Street, San Francisco, CA 94105, USA',
        tags: [
            'Collaboration',
            'SAAS'
        ]
    },
    {
        name: 'Mateo Jensen',
        image: '/example-data/people/mateo_jensen.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].PERSON,
        email: 'mateo.jensen@hubspot.com',
        phone: '+1 888-482-7768',
        address: '25 First Street, Cambridge, MA 02141, USA',
        tags: [
            'Marketing',
            'SAAS'
        ]
    },
    {
        name: 'Mei Ling Chen',
        image: '/example-data/people/mei_ling_chen.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].PERSON,
        email: 'mei.ling.chen@vmware.com',
        phone: '+1 877-486-9273',
        address: '3401 Hillview Ave, Palo Alto, CA 94304, USA',
        tags: [
            'Virtualization',
            'Cloud Infrastructure'
        ]
    },
    {
        name: 'Olivia Weber',
        image: '/example-data/people/olivia_weber.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].PERSON,
        email: 'olivia.weber@cisco.com',
        phone: '+1 408-526-4000',
        address: '170 West Tasman Dr, San Jose, CA 95134, USA',
        tags: [
            'Networking',
            'IoT'
        ]
    },
    {
        name: 'Philip Grant',
        image: '/example-data/people/philip_grant.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].PERSON,
        email: 'philip.grant@etsy.com',
        phone: '+1 718-855-6955',
        address: '55 Washington Street, Suite 512, Brooklyn, NY 11201, USA',
        tags: [
            'E-commerce',
            'Technology'
        ]
    },
    {
        name: 'Sofia Muller',
        image: '/example-data/people/sofia_muller.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].PERSON,
        email: 'sofia.muller@adobe.com',
        phone: '+1 408-536-6000',
        address: '345 Park Avenue, San Jose, CA 95110, USA',
        tags: [
            'Software',
            'Technology'
        ]
    },
    {
        name: 'Thomas Clark',
        image: '/example-data/people/thomas_clark.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].PERSON,
        email: 'thomas.clark@oracle.com',
        phone: '+1 650-506-7000',
        address: '500 Oracle Parkway, Redwood City, CA 94065, USA',
        tags: [
            'Database',
            'Technology'
        ]
    },
    {
        name: 'Victoria Ballard',
        image: '/example-data/people/victoria_ballard.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].PERSON,
        email: 'victoria.ballard@dell.com',
        phone: '+1 800-289-3355',
        address: '1 Dell Way, Round Rock, TX 78682, USA',
        tags: [
            'Hardware',
            'IT Solutions'
        ]
    },
    {
        name: 'Vivian Casey',
        image: '/example-data/people/vivian_casey.png',
        record: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ContactRecord"].PERSON,
        email: 'vivian.casey@mongodb.com',
        phone: '+1 650-793-3338',
        address: '1635 Broadway, 3rd Floor, New York, NY 10019, USA',
        tags: [
            'Database',
            'SAAS'
        ]
    }
];
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    addExampleData
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addExampleData, "604b99ab03c7ea2fb6c9d431f27f266a0d6e8f6dad", null);
}}),
"[project]/apps/dashboard/data/caching.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Caching": (()=>Caching),
    "OrganizationCacheKey": (()=>OrganizationCacheKey),
    "UserCacheKey": (()=>UserCacheKey),
    "defaultRevalidateTimeInSeconds": (()=>defaultRevalidateTimeInSeconds)
});
var UserCacheKey = /*#__PURE__*/ function(UserCacheKey) {
    UserCacheKey[UserCacheKey["Organizations"] = 0] = "Organizations";
    UserCacheKey[UserCacheKey["ContactIsInFavorites"] = 1] = "ContactIsInFavorites";
    UserCacheKey[UserCacheKey["Profile"] = 2] = "Profile";
    UserCacheKey[UserCacheKey["PersonalDetails"] = 3] = "PersonalDetails";
    UserCacheKey[UserCacheKey["Preferences"] = 4] = "Preferences";
    UserCacheKey[UserCacheKey["MultiFactorAuthentication"] = 5] = "MultiFactorAuthentication";
    UserCacheKey[UserCacheKey["Sessions"] = 6] = "Sessions";
    UserCacheKey[UserCacheKey["TransactionalEmails"] = 7] = "TransactionalEmails";
    UserCacheKey[UserCacheKey["MarketingEmails"] = 8] = "MarketingEmails";
    return UserCacheKey;
}({});
var OrganizationCacheKey = /*#__PURE__*/ function(OrganizationCacheKey) {
    OrganizationCacheKey[OrganizationCacheKey["OrganizationLogo"] = 0] = "OrganizationLogo";
    OrganizationCacheKey[OrganizationCacheKey["LeadGenerationData"] = 1] = "LeadGenerationData";
    OrganizationCacheKey[OrganizationCacheKey["Contacts"] = 2] = "Contacts";
    OrganizationCacheKey[OrganizationCacheKey["ContactTags"] = 3] = "ContactTags";
    OrganizationCacheKey[OrganizationCacheKey["Contact"] = 4] = "Contact";
    OrganizationCacheKey[OrganizationCacheKey["ContactPageVisits"] = 5] = "ContactPageVisits";
    OrganizationCacheKey[OrganizationCacheKey["ContactTimelineEvents"] = 6] = "ContactTimelineEvents";
    OrganizationCacheKey[OrganizationCacheKey["ContactNotes"] = 7] = "ContactNotes";
    OrganizationCacheKey[OrganizationCacheKey["ContactTasks"] = 8] = "ContactTasks";
    OrganizationCacheKey[OrganizationCacheKey["Favorites"] = 9] = "Favorites";
    OrganizationCacheKey[OrganizationCacheKey["OrganizationDetails"] = 10] = "OrganizationDetails";
    OrganizationCacheKey[OrganizationCacheKey["BusinessHours"] = 11] = "BusinessHours";
    OrganizationCacheKey[OrganizationCacheKey["SocialMedia"] = 12] = "SocialMedia";
    OrganizationCacheKey[OrganizationCacheKey["Members"] = 13] = "Members";
    OrganizationCacheKey[OrganizationCacheKey["Invitations"] = 14] = "Invitations";
    OrganizationCacheKey[OrganizationCacheKey["ApiKeys"] = 15] = "ApiKeys";
    OrganizationCacheKey[OrganizationCacheKey["Webhooks"] = 16] = "Webhooks";
    return OrganizationCacheKey;
}({});
class Caching {
    static USER_PREFIX = 'user';
    static ORGANIZATION_PREFIX = 'organization';
    static joinKeyParts(...parts) {
        return parts.filter((part)=>part.length > 0);
    }
    static joinTagParts(...parts) {
        return parts.filter((part)=>part.length > 0).join(':');
    }
    static createUserKeyParts(key, userId, ...additionalKeyParts) {
        if (!userId) {
            throw new Error('User ID cannot be empty');
        }
        return this.joinKeyParts(this.USER_PREFIX, userId, UserCacheKey[key].toLowerCase(), ...additionalKeyParts);
    }
    static createUserTag(key, userId, ...additionalTagParts) {
        if (!userId) {
            throw new Error('User ID cannot be empty');
        }
        return this.joinTagParts(this.USER_PREFIX, userId, UserCacheKey[key].toLowerCase(), ...additionalTagParts);
    }
    static createOrganizationKeyParts(key, organizationId, ...additionalKeyParts) {
        if (!organizationId) {
            throw new Error('Organization ID cannot be empty');
        }
        return this.joinKeyParts(this.ORGANIZATION_PREFIX, organizationId, OrganizationCacheKey[key].toLowerCase(), ...additionalKeyParts);
    }
    static createOrganizationTag(key, organizationId, ...additionalTagParts) {
        if (!organizationId) {
            throw new Error('Organization ID cannot be empty');
        }
        return this.joinTagParts(this.ORGANIZATION_PREFIX, organizationId, OrganizationCacheKey[key].toLowerCase(), ...additionalTagParts);
    }
}
const defaultRevalidateTimeInSeconds = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 120;
}}),
"[project]/apps/dashboard/actions/onboarding/complete-onboarding.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ {"7fa41a0dff924a560a744488d5fe7d7fffb51cb85d":"completeOnboarding"} */ __turbopack_esm__({
    "completeOnboarding": (()=>completeOnboarding)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$invitations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/auth/src/invitations.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$organization$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/billing/src/organization.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$tier$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/billing/src/tier.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/packages/database/src/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/database/src/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$image$2d$processing$2f$src$2f$decode$2d$base64$2d$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/image-processing/src/decode-base64-image.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$image$2d$processing$2f$src$2f$resize$2d$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/image-processing/src/resize-image.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/routes/src/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$_add$2d$example$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/actions/onboarding/_add-example.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/actions/safe-action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$data$2f$caching$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/data/caching.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$lib$2f$file$2d$upload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/lib/file-upload.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$lib$2f$formatters$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/lib/formatters.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$schemas$2f$onboarding$2f$complete$2d$onboarding$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/schemas/onboarding/complete-onboarding-schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$0$2e$3$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@11.0.3/node_modules/uuid/dist/esm/v4.js [app-rsc] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_import__("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$invitations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$invitations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
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
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ completeOnboarding = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$safe$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authActionClient"].metadata({
    actionName: 'completeOnboarding'
}).schema(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$schemas$2f$onboarding$2f$complete$2d$onboarding$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["completeOnboardingSchema"]).action(async ({ parsedInput, ctx })=>{
    const transactions = [];
    const organizationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$0$2e$3$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    const userId = ctx.session.user.id;
    const userEmail = ctx.session.user.email.toLowerCase();
    // Handle profile step
    if (parsedInput.activeSteps.includes(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$schemas$2f$onboarding$2f$complete$2d$onboarding$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OnboardingStep"].Profile)) {
        await handleProfileStep(parsedInput.profileStep, userId, transactions);
    }
    // Handle theme step
    // No action required for theme step
    // Handle organization step
    if (parsedInput.activeSteps.includes(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$schemas$2f$onboarding$2f$complete$2d$onboarding$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OnboardingStep"].Organization)) {
        await handleOrganizationStep(parsedInput.organizationStep, organizationId, userEmail, userId, transactions);
    }
    // Handle pending invitations step
    if (parsedInput.activeSteps.includes(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$schemas$2f$onboarding$2f$complete$2d$onboarding$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OnboardingStep"].PendingInvitations)) {
        await handlePendingInvitationsStep(parsedInput.pendingInvitationsStep, userId, userEmail, transactions);
    }
    if (transactions.length) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$transaction(transactions);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$data$2f$caching$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Caching"].createUserTag(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$data$2f$caching$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserCacheKey"].PersonalDetails, userId));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$data$2f$caching$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Caching"].createUserTag(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$data$2f$caching$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserCacheKey"].Preferences, userId));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$data$2f$caching$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Caching"].createUserTag(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$data$2f$caching$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UserCacheKey"].Organizations, userId));
    // Ideally we would execute these in a background job
    if (parsedInput.activeSteps.includes(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$schemas$2f$onboarding$2f$complete$2d$onboarding$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OnboardingStep"].Organization) && parsedInput.organizationStep) {
        // Handle invite team step
        if (parsedInput.activeSteps.includes(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$schemas$2f$onboarding$2f$complete$2d$onboarding$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OnboardingStep"].InviteTeam)) {
            await handleInviteTeamStep(parsedInput.inviteTeamStep, organizationId, parsedInput.organizationStep.name, ctx.session.user.name, ctx.session.user.email);
        }
        // Handle add example data
        if (parsedInput.organizationStep?.addExampleData) {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$_add$2d$example$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addExampleData"])(organizationId, ctx.session.user.id);
            } catch (e) {
                console.error(e);
            }
        }
    }
    const memberships = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].membership.findMany({
        where: {
            userId: ctx.session.user.id
        },
        select: {
            organization: {
                select: {
                    id: true,
                    slug: true
                }
            }
        }
    });
    for (const membership of memberships){
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$organization$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateOrganizationSubscriptionQuantity"])(membership.organization.id);
        } catch (e) {
            console.error(e);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$data$2f$caching$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Caching"].createOrganizationTag(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$data$2f$caching$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrganizationCacheKey"].Members, membership.organization.id));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$data$2f$caching$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Caching"].createOrganizationTag(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$data$2f$caching$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OrganizationCacheKey"].Invitations, membership.organization.id));
    }
    let redirect = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.organizations.Index;
    // Newly created organization
    if (parsedInput.activeSteps.includes(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$schemas$2f$onboarding$2f$complete$2d$onboarding$2d$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OnboardingStep"].Organization) && parsedInput.organizationStep?.slug) {
        redirect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["replaceOrgSlug"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.organizations.slug.Home, parsedInput.organizationStep.slug);
    } else if (memberships.length === 1) {
        redirect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["replaceOrgSlug"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routes"].dashboard.organizations.slug.Home, memberships[0].organization.slug);
    }
    return {
        redirect
    };
});
async function handleProfileStep(step, userId, transactions) {
    if (!step) {
        return;
    }
    let imageUrl = undefined;
    if (step.action === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$lib$2f$file$2d$upload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FileUploadAction"].Update && step.image) {
        const { buffer, mimeType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$image$2d$processing$2f$src$2f$decode$2d$base64$2d$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeBase64Image"])(step.image);
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$image$2d$processing$2f$src$2f$resize$2d$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resizeImage"])(buffer, mimeType);
        const hash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('sha256').update(data).digest('hex');
        transactions.push(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].userImage.deleteMany({
            where: {
                userId
            }
        }), __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].userImage.create({
            data: {
                userId,
                data,
                contentType: mimeType,
                hash
            }
        }));
        imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserImageUrl"])(userId, hash);
    }
    if (step.action === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$lib$2f$file$2d$upload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FileUploadAction"].Delete) {
        transactions.push(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].userImage.deleteMany({
            where: {
                userId
            }
        }));
        imageUrl = null;
    }
    // Update user profile
    transactions.push(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.update({
        where: {
            id: userId
        },
        data: {
            image: imageUrl,
            name: step.name,
            phone: step.phone,
            completedOnboarding: true
        }
    }));
}
async function handleOrganizationStep(step, organizationId, userEmail, userId, transactions) {
    if (!step) {
        return;
    }
    let stripeCustomerId = '';
    try {
        stripeCustomerId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$organization$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addOrganizationToStripe"])(step.name, userEmail, organizationId);
    } catch  {
        console.warn('Stripe customer ID is missing');
    }
    let logoUrl = undefined;
    if (step.logo) {
        const { buffer, mimeType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$image$2d$processing$2f$src$2f$decode$2d$base64$2d$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeBase64Image"])(step.logo);
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$image$2d$processing$2f$src$2f$resize$2d$image$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resizeImage"])(buffer, mimeType);
        const hash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('sha256').update(data).digest('hex');
        transactions.push(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].organizationLogo.create({
            data: {
                organizationId,
                data,
                contentType: mimeType,
                hash
            },
            select: {
                id: true // SELECT NONE
            }
        }));
        logoUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$routes$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrganizationLogoUrl"])(organizationId, hash);
    }
    transactions.push(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].organization.create({
        data: {
            id: organizationId,
            logo: logoUrl,
            name: step.name,
            stripeCustomerId,
            slug: step.slug,
            tier: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$billing$2f$src$2f$tier$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tier"].Free,
            businessHours: createDefaultBusinessHours(),
            memberships: {
                create: {
                    userId,
                    role: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Role"].ADMIN,
                    isOwner: true
                }
            }
        }
    }));
}
async function handlePendingInvitationsStep(step, userId, userEmail, transactions) {
    if (!step || !step.invitationIds) {
        return;
    }
    for (const invitationId of step.invitationIds){
        const pendingInvitation = await __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].invitation.findFirst({
            where: {
                id: invitationId,
                email: userEmail,
                status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["InvitationStatus"].PENDING
            },
            select: {
                organizationId: true,
                role: true
            }
        });
        if (!pendingInvitation) {
            continue;
        }
        transactions.push(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].membership.create({
            data: {
                userId,
                organizationId: pendingInvitation.organizationId,
                role: pendingInvitation.role
            }
        }), __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$database$2f$src$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].invitation.update({
            where: {
                id: invitationId
            },
            data: {
                status: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["InvitationStatus"].ACCEPTED
            }
        }));
    }
}
async function handleInviteTeamStep(step, organizationId, organizationName, userName, userEmail) {
    if (!step || !step.invitations) {
        return;
    }
    for (const invitation of step.invitations){
        if (!invitation.email) {
            continue;
        }
        const canInvite = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$invitations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkIfCanInvite"])(invitation.email, organizationId);
        if (!canInvite) {
            continue;
        }
        try {
            const newInvitation = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$invitations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createInvitation"])(invitation.email, invitation.role, organizationId);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$auth$2f$src$2f$invitations$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendInvitationRequest"])({
                email: newInvitation.email,
                organizationName,
                invitedByEmail: userEmail,
                invitedByName: userName,
                token: newInvitation.token,
                invitationId: newInvitation.id,
                organizationId
            });
        } catch (e) {
            console.error(e);
        }
    }
}
function createDefaultBusinessHours() {
    const timeSlot = {
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$lib$2f$formatters$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTimeSlot"])(9, 0),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$lib$2f$formatters$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTimeSlot"])(17, 0)
    };
    return {
        create: [
            {
                dayOfWeek: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DayOfWeek"].SUNDAY
            },
            {
                dayOfWeek: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DayOfWeek"].MONDAY,
                timeSlots: {
                    create: timeSlot
                }
            },
            {
                dayOfWeek: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DayOfWeek"].TUESDAY,
                timeSlots: {
                    create: timeSlot
                }
            },
            {
                dayOfWeek: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DayOfWeek"].WEDNESDAY,
                timeSlots: {
                    create: timeSlot
                }
            },
            {
                dayOfWeek: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DayOfWeek"].THURSDAY,
                timeSlots: {
                    create: timeSlot
                }
            },
            {
                dayOfWeek: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DayOfWeek"].FRIDAY,
                timeSlots: {
                    create: timeSlot
                }
            },
            {
                dayOfWeek: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DayOfWeek"].SATURDAY
            }
        ]
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    completeOnboarding
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(completeOnboarding, "7fa41a0dff924a560a744488d5fe7d7fffb51cb85d", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/dashboard/.next-internal/server/app/onboarding/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/dashboard/actions/auth/sign-out.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/dashboard/actions/organization/check-if-slug-is-available.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/dashboard/actions/onboarding/complete-onboarding.ts [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
}}),
"[project]/apps/dashboard/.next-internal/server/app/onboarding/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/dashboard/actions/auth/sign-out.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/dashboard/actions/organization/check-if-slug-is-available.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/dashboard/actions/onboarding/complete-onboarding.ts [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$auth$2f$sign$2d$out$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/actions/auth/sign-out.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/actions/organization/check-if-slug-is-available.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$complete$2d$onboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/actions/onboarding/complete-onboarding.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f2e$next$2d$internal$2f$server$2f$app$2f$onboarding$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$auth$2f$sign$2d$out$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$complete$2d$onboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/apps/dashboard/.next-internal/server/app/onboarding/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/dashboard/actions/auth/sign-out.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/dashboard/actions/organization/check-if-slug-is-available.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/apps/dashboard/actions/onboarding/complete-onboarding.ts [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$auth$2f$sign$2d$out$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$complete$2d$onboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$auth$2f$sign$2d$out$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$complete$2d$onboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/dashboard/.next-internal/server/app/onboarding/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/dashboard/actions/auth/sign-out.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/dashboard/actions/organization/check-if-slug-is-available.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/dashboard/actions/onboarding/complete-onboarding.ts [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "7f328864911a5cae094017bd06b316d5b389684ff3": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkIfSlugIsAvailable"]),
    "7f86376a97362c4df0e8fa650970019d18f79c93e0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$auth$2f$sign$2d$out$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"]),
    "7fa41a0dff924a560a744488d5fe7d7fffb51cb85d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$complete$2d$onboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["completeOnboarding"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/actions/organization/check-if-slug-is-available.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$auth$2f$sign$2d$out$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/actions/auth/sign-out.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$complete$2d$onboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/dashboard/actions/onboarding/complete-onboarding.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f2e$next$2d$internal$2f$server$2f$app$2f$onboarding$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$auth$2f$sign$2d$out$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$complete$2d$onboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/apps/dashboard/.next-internal/server/app/onboarding/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/dashboard/actions/auth/sign-out.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/dashboard/actions/organization/check-if-slug-is-available.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/apps/dashboard/actions/onboarding/complete-onboarding.ts [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$auth$2f$sign$2d$out$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$complete$2d$onboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$auth$2f$sign$2d$out$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$complete$2d$onboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/apps/dashboard/.next-internal/server/app/onboarding/page/actions.js { ACTIONS_MODULE0 => \"[project]/apps/dashboard/actions/auth/sign-out.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/apps/dashboard/actions/organization/check-if-slug-is-available.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/apps/dashboard/actions/onboarding/complete-onboarding.ts [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "7f328864911a5cae094017bd06b316d5b389684ff3": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f2e$next$2d$internal$2f$server$2f$app$2f$onboarding$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$auth$2f$sign$2d$out$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$complete$2d$onboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["7f328864911a5cae094017bd06b316d5b389684ff3"]),
    "7f86376a97362c4df0e8fa650970019d18f79c93e0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f2e$next$2d$internal$2f$server$2f$app$2f$onboarding$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$auth$2f$sign$2d$out$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$complete$2d$onboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["7f86376a97362c4df0e8fa650970019d18f79c93e0"]),
    "7fa41a0dff924a560a744488d5fe7d7fffb51cb85d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f2e$next$2d$internal$2f$server$2f$app$2f$onboarding$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$auth$2f$sign$2d$out$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$complete$2d$onboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["7fa41a0dff924a560a744488d5fe7d7fffb51cb85d"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f2e$next$2d$internal$2f$server$2f$app$2f$onboarding$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$auth$2f$sign$2d$out$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$complete$2d$onboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__('[project]/apps/dashboard/.next-internal/server/app/onboarding/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/dashboard/actions/auth/sign-out.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/dashboard/actions/organization/check-if-slug-is-available.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/apps/dashboard/actions/onboarding/complete-onboarding.ts [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f2e$next$2d$internal$2f$server$2f$app$2f$onboarding$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$auth$2f$sign$2d$out$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$complete$2d$onboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__('[project]/apps/dashboard/.next-internal/server/app/onboarding/page/actions.js { ACTIONS_MODULE0 => "[project]/apps/dashboard/actions/auth/sign-out.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/apps/dashboard/actions/organization/check-if-slug-is-available.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/apps/dashboard/actions/onboarding/complete-onboarding.ts [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <exports>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f2e$next$2d$internal$2f$server$2f$app$2f$onboarding$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$auth$2f$sign$2d$out$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$complete$2d$onboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f2e$next$2d$internal$2f$server$2f$app$2f$onboarding$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$auth$2f$sign$2d$out$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$complete$2d$onboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f2e$next$2d$internal$2f$server$2f$app$2f$onboarding$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$auth$2f$sign$2d$out$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$complete$2d$onboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$dashboard$2f2e$next$2d$internal$2f$server$2f$app$2f$onboarding$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$auth$2f$sign$2d$out$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$organization$2f$check$2d$if$2d$slug$2d$is$2d$available$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$apps$2f$dashboard$2f$actions$2f$onboarding$2f$complete$2d$onboarding$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__620383._.js.map