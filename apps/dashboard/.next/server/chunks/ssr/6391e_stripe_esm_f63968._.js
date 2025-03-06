module.exports = {

"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/crypto/CryptoProvider.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Interface encapsulating the various crypto computations used by the library,
 * allowing pluggable underlying crypto implementations.
 */ __turbopack_esm__({
    "CryptoProvider": (()=>CryptoProvider),
    "CryptoProviderOnlySupportsAsyncError": (()=>CryptoProviderOnlySupportsAsyncError)
});
class CryptoProvider {
    /**
     * Computes a SHA-256 HMAC given a secret and a payload (encoded in UTF-8).
     * The output HMAC should be encoded in hexadecimal.
     *
     * Sample values for implementations:
     * - computeHMACSignature('', 'test_secret') => 'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
     * - computeHMACSignature('\ud83d\ude00', 'test_secret') => '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43
     */ computeHMACSignature(payload, secret) {
        throw new Error('computeHMACSignature not implemented.');
    }
    /**
     * Asynchronous version of `computeHMACSignature`. Some implementations may
     * only allow support async signature computation.
     *
     * Computes a SHA-256 HMAC given a secret and a payload (encoded in UTF-8).
     * The output HMAC should be encoded in hexadecimal.
     *
     * Sample values for implementations:
     * - computeHMACSignature('', 'test_secret') => 'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
     * - computeHMACSignature('\ud83d\ude00', 'test_secret') => '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43
     */ computeHMACSignatureAsync(payload, secret) {
        throw new Error('computeHMACSignatureAsync not implemented.');
    }
}
class CryptoProviderOnlySupportsAsyncError extends Error {
}
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/crypto/NodeCryptoProvider.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NodeCryptoProvider": (()=>NodeCryptoProvider)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$CryptoProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/crypto/CryptoProvider.js [app-rsc] (ecmascript)");
;
;
class NodeCryptoProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$CryptoProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CryptoProvider"] {
    /** @override */ computeHMACSignature(payload, secret) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__.createHmac('sha256', secret).update(payload, 'utf8').digest('hex');
    }
    /** @override */ async computeHMACSignatureAsync(payload, secret) {
        const signature = await this.computeHMACSignature(payload, secret);
        return signature;
    }
}
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/net/HttpClient.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Encapsulates the logic for issuing a request to the Stripe API.
 *
 * A custom HTTP client should should implement:
 * 1. A response class which extends HttpClientResponse and wraps around their
 *    own internal representation of a response.
 * 2. A client class which extends HttpClient and implements all methods,
 *    returning their own response class when making requests.
 */ __turbopack_esm__({
    "HttpClient": (()=>HttpClient),
    "HttpClientResponse": (()=>HttpClientResponse)
});
class HttpClient {
    /** The client name used for diagnostics. */ getClientName() {
        throw new Error('getClientName not implemented.');
    }
    makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
        throw new Error('makeRequest not implemented.');
    }
    /** Helper to make a consistent timeout error across implementations. */ static makeTimeoutError() {
        const timeoutErr = new TypeError(HttpClient.TIMEOUT_ERROR_CODE);
        timeoutErr.code = HttpClient.TIMEOUT_ERROR_CODE;
        return timeoutErr;
    }
}
// Public API accessible via Stripe.HttpClient
HttpClient.CONNECTION_CLOSED_ERROR_CODES = [
    'ECONNRESET',
    'EPIPE'
];
HttpClient.TIMEOUT_ERROR_CODE = 'ETIMEDOUT';
class HttpClientResponse {
    constructor(statusCode, headers){
        this._statusCode = statusCode;
        this._headers = headers;
    }
    getStatusCode() {
        return this._statusCode;
    }
    getHeaders() {
        return this._headers;
    }
    getRawResponse() {
        throw new Error('getRawResponse not implemented.');
    }
    toStream(streamCompleteCallback) {
        throw new Error('toStream not implemented.');
    }
    toJSON() {
        throw new Error('toJSON not implemented.');
    }
}
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/net/NodeHttpClient.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NodeHttpClient": (()=>NodeHttpClient),
    "NodeHttpClientResponse": (()=>NodeHttpClientResponse)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__ = __turbopack_import__("[externals]/http [external] (http, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__ = __turbopack_import__("[externals]/https [external] (https, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/net/HttpClient.js [app-rsc] (ecmascript)");
;
;
;
// `import * as http_ from 'http'` creates a "Module Namespace Exotic Object"
// which is immune to monkey-patching, whereas http_.default (in an ES Module context)
// will resolve to the same thing as require('http'), which is
// monkey-patchable. We care about this because users in their test
// suites might be using a library like "nock" which relies on the ability
// to monkey-patch and intercept calls to http.request.
const http = __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__.default || __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__;
const https = __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__.default || __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__;
const defaultHttpAgent = new http.Agent({
    keepAlive: true
});
const defaultHttpsAgent = new https.Agent({
    keepAlive: true
});
class NodeHttpClient extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpClient"] {
    constructor(agent){
        super();
        this._agent = agent;
    }
    /** @override. */ getClientName() {
        return 'node';
    }
    makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
        const isInsecureConnection = protocol === 'http';
        let agent = this._agent;
        if (!agent) {
            agent = isInsecureConnection ? defaultHttpAgent : defaultHttpsAgent;
        }
        const requestPromise = new Promise((resolve, reject)=>{
            const req = (isInsecureConnection ? http : https).request({
                host: host,
                port: port,
                path,
                method,
                agent,
                headers,
                ciphers: 'DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5'
            });
            req.setTimeout(timeout, ()=>{
                req.destroy(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpClient"].makeTimeoutError());
            });
            req.on('response', (res)=>{
                resolve(new NodeHttpClientResponse(res));
            });
            req.on('error', (error)=>{
                reject(error);
            });
            req.once('socket', (socket)=>{
                if (socket.connecting) {
                    socket.once(isInsecureConnection ? 'connect' : 'secureConnect', ()=>{
                        // Send payload; we're safe:
                        req.write(requestData);
                        req.end();
                    });
                } else {
                    // we're already connected
                    req.write(requestData);
                    req.end();
                }
            });
        });
        return requestPromise;
    }
}
class NodeHttpClientResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpClientResponse"] {
    constructor(res){
        // @ts-ignore
        super(res.statusCode, res.headers || {});
        this._res = res;
    }
    getRawResponse() {
        return this._res;
    }
    toStream(streamCompleteCallback) {
        // The raw response is itself the stream, so we just return that. To be
        // backwards compatible, we should invoke the streamCompleteCallback only
        // once the stream has been fully consumed.
        this._res.once('end', ()=>streamCompleteCallback());
        return this._res;
    }
    toJSON() {
        return new Promise((resolve, reject)=>{
            let response = '';
            this._res.setEncoding('utf8');
            this._res.on('data', (chunk)=>{
                response += chunk;
            });
            this._res.once('end', ()=>{
                try {
                    resolve(JSON.parse(response));
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
}
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/net/FetchHttpClient.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "FetchHttpClient": (()=>FetchHttpClient),
    "FetchHttpClientResponse": (()=>FetchHttpClientResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/net/HttpClient.js [app-rsc] (ecmascript)");
;
class FetchHttpClient extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpClient"] {
    constructor(fetchFn){
        super();
        // Default to global fetch if available
        if (!fetchFn) {
            if (!globalThis.fetch) {
                throw new Error('fetch() function not provided and is not defined in the global scope. ' + 'You must provide a fetch implementation.');
            }
            fetchFn = globalThis.fetch;
        }
        // Both timeout behaviors differs from Node:
        // - Fetch uses a single timeout for the entire length of the request.
        // - Node is more fine-grained and resets the timeout after each stage of the request.
        if (globalThis.AbortController) {
            // Utilise native AbortController if available
            // AbortController was added in Node v15.0.0, v14.17.0
            this._fetchFn = FetchHttpClient.makeFetchWithAbortTimeout(fetchFn);
        } else {
            // Fall back to racing against a timeout promise if not available in the runtime
            // This does not actually cancel the underlying fetch operation or resources
            this._fetchFn = FetchHttpClient.makeFetchWithRaceTimeout(fetchFn);
        }
    }
    static makeFetchWithRaceTimeout(fetchFn) {
        return (url, init, timeout)=>{
            let pendingTimeoutId;
            const timeoutPromise = new Promise((_, reject)=>{
                pendingTimeoutId = setTimeout(()=>{
                    pendingTimeoutId = null;
                    reject(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpClient"].makeTimeoutError());
                }, timeout);
            });
            const fetchPromise = fetchFn(url, init);
            return Promise.race([
                fetchPromise,
                timeoutPromise
            ]).finally(()=>{
                if (pendingTimeoutId) {
                    clearTimeout(pendingTimeoutId);
                }
            });
        };
    }
    static makeFetchWithAbortTimeout(fetchFn) {
        return async (url, init, timeout)=>{
            // Use AbortController because AbortSignal.timeout() was added later in Node v17.3.0, v16.14.0
            const abort = new AbortController();
            let timeoutId = setTimeout(()=>{
                timeoutId = null;
                abort.abort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpClient"].makeTimeoutError());
            }, timeout);
            try {
                return await fetchFn(url, Object.assign(Object.assign({}, init), {
                    signal: abort.signal
                }));
            } catch (err) {
                // Some implementations, like node-fetch, do not respect the reason passed to AbortController.abort()
                // and instead it always throws an AbortError
                // We catch this case to normalise all timeout errors
                if (err.name === 'AbortError') {
                    throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpClient"].makeTimeoutError();
                } else {
                    throw err;
                }
            } finally{
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
            }
        };
    }
    /** @override. */ getClientName() {
        return 'fetch';
    }
    async makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
        const isInsecureConnection = protocol === 'http';
        const url = new URL(path, `${isInsecureConnection ? 'http' : 'https'}://${host}`);
        url.port = port;
        // For methods which expect payloads, we should always pass a body value
        // even when it is empty. Without this, some JS runtimes (eg. Deno) will
        // inject a second Content-Length header. See https://github.com/stripe/stripe-node/issues/1519
        // for more details.
        const methodHasPayload = method == 'POST' || method == 'PUT' || method == 'PATCH';
        const body = requestData || (methodHasPayload ? '' : undefined);
        const res = await this._fetchFn(url.toString(), {
            method,
            // @ts-ignore
            headers,
            // @ts-ignore
            body
        }, timeout);
        return new FetchHttpClientResponse(res);
    }
}
class FetchHttpClientResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpClientResponse"] {
    constructor(res){
        super(res.status, FetchHttpClientResponse._transformHeadersToObject(res.headers));
        this._res = res;
    }
    getRawResponse() {
        return this._res;
    }
    toStream(streamCompleteCallback) {
        // Unfortunately `fetch` does not have event handlers for when the stream is
        // completely read. We therefore invoke the streamCompleteCallback right
        // away. This callback emits a response event with metadata and completes
        // metrics, so it's ok to do this without waiting for the stream to be
        // completely read.
        streamCompleteCallback();
        // Fetch's `body` property is expected to be a readable stream of the body.
        return this._res.body;
    }
    toJSON() {
        return this._res.json();
    }
    static _transformHeadersToObject(headers) {
        // Fetch uses a Headers instance so this must be converted to a barebones
        // JS object to meet the HttpClient interface.
        const headersObj = {};
        for (const entry of headers){
            if (!Array.isArray(entry) || entry.length != 2) {
                throw new Error('Response objects produced by the fetch function given to FetchHttpClient do not have an iterable headers map. Response#headers should be an iterable object.');
            }
            headersObj[entry[0]] = entry[1];
        }
        return headersObj;
    }
}
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/crypto/SubtleCryptoProvider.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SubtleCryptoProvider": (()=>SubtleCryptoProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$CryptoProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/crypto/CryptoProvider.js [app-rsc] (ecmascript)");
;
class SubtleCryptoProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$CryptoProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CryptoProvider"] {
    constructor(subtleCrypto){
        super();
        // If no subtle crypto is interface, default to the global namespace. This
        // is to allow custom interfaces (eg. using the Node webcrypto interface in
        // tests).
        this.subtleCrypto = subtleCrypto || crypto.subtle;
    }
    /** @override */ computeHMACSignature(payload, secret) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$CryptoProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CryptoProviderOnlySupportsAsyncError"]('SubtleCryptoProvider cannot be used in a synchronous context.');
    }
    /** @override */ async computeHMACSignatureAsync(payload, secret) {
        const encoder = new TextEncoder();
        const key = await this.subtleCrypto.importKey('raw', encoder.encode(secret), {
            name: 'HMAC',
            hash: {
                name: 'SHA-256'
            }
        }, false, [
            'sign'
        ]);
        const signatureBuffer = await this.subtleCrypto.sign('hmac', key, encoder.encode(payload));
        // crypto.subtle returns the signature in base64 format. This must be
        // encoded in hex to match the CryptoProvider contract. We map each byte in
        // the buffer to its corresponding hex octet and then combine into a string.
        const signatureBytes = new Uint8Array(signatureBuffer);
        const signatureHexCodes = new Array(signatureBytes.length);
        for(let i = 0; i < signatureBytes.length; i++){
            signatureHexCodes[i] = byteHexMapping[signatureBytes[i]];
        }
        return signatureHexCodes.join('');
    }
}
// Cached mapping of byte to hex representation. We do this once to avoid re-
// computing every time we need to convert the result of a signature to hex.
const byteHexMapping = new Array(256);
for(let i = 0; i < byteHexMapping.length; i++){
    byteHexMapping[i] = i.toString(16).padStart(2, '0');
}
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/platform/PlatformFunctions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PlatformFunctions": (()=>PlatformFunctions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$FetchHttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/net/FetchHttpClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$SubtleCryptoProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/crypto/SubtleCryptoProvider.js [app-rsc] (ecmascript)");
;
;
class PlatformFunctions {
    constructor(){
        this._fetchFn = null;
        this._agent = null;
    }
    /**
     * Gets uname with Node's built-in `exec` function, if available.
     */ getUname() {
        throw new Error('getUname not implemented.');
    }
    /**
     * Generates a v4 UUID. See https://stackoverflow.com/a/2117523
     */ uuid4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
        });
    }
    /**
     * Compares strings in constant time.
     */ secureCompare(a, b) {
        // return early here if buffer lengths are not equal
        if (a.length !== b.length) {
            return false;
        }
        const len = a.length;
        let result = 0;
        for(let i = 0; i < len; ++i){
            result |= a.charCodeAt(i) ^ b.charCodeAt(i);
        }
        return result === 0;
    }
    /**
     * Creates an event emitter.
     */ createEmitter() {
        throw new Error('createEmitter not implemented.');
    }
    /**
     * Checks if the request data is a stream. If so, read the entire stream
     * to a buffer and return the buffer.
     */ tryBufferData(data) {
        throw new Error('tryBufferData not implemented.');
    }
    /**
     * Creates an HTTP client which uses the Node `http` and `https` packages
     * to issue requests.
     */ createNodeHttpClient(agent) {
        throw new Error('createNodeHttpClient not implemented.');
    }
    /**
     * Creates an HTTP client for issuing Stripe API requests which uses the Web
     * Fetch API.
     *
     * A fetch function can optionally be passed in as a parameter. If none is
     * passed, will default to the default `fetch` function in the global scope.
     */ createFetchHttpClient(fetchFn) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$FetchHttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FetchHttpClient"](fetchFn);
    }
    /**
     * Creates an HTTP client using runtime-specific APIs.
     */ createDefaultHttpClient() {
        throw new Error('createDefaultHttpClient not implemented.');
    }
    /**
     * Creates a CryptoProvider which uses the Node `crypto` package for its computations.
     */ createNodeCryptoProvider() {
        throw new Error('createNodeCryptoProvider not implemented.');
    }
    /**
     * Creates a CryptoProvider which uses the SubtleCrypto interface of the Web Crypto API.
     */ createSubtleCryptoProvider(subtleCrypto) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$SubtleCryptoProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SubtleCryptoProvider"](subtleCrypto);
    }
    createDefaultCryptoProvider() {
        throw new Error('createDefaultCryptoProvider not implemented.');
    }
}
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/Error.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable camelcase */ __turbopack_esm__({
    "StripeAPIError": (()=>StripeAPIError),
    "StripeAuthenticationError": (()=>StripeAuthenticationError),
    "StripeCardError": (()=>StripeCardError),
    "StripeConnectionError": (()=>StripeConnectionError),
    "StripeError": (()=>StripeError),
    "StripeIdempotencyError": (()=>StripeIdempotencyError),
    "StripeInvalidGrantError": (()=>StripeInvalidGrantError),
    "StripeInvalidRequestError": (()=>StripeInvalidRequestError),
    "StripePermissionError": (()=>StripePermissionError),
    "StripeRateLimitError": (()=>StripeRateLimitError),
    "StripeSignatureVerificationError": (()=>StripeSignatureVerificationError),
    "StripeUnknownError": (()=>StripeUnknownError),
    "generate": (()=>generate)
});
const generate = (rawStripeError)=>{
    switch(rawStripeError.type){
        case 'card_error':
            return new StripeCardError(rawStripeError);
        case 'invalid_request_error':
            return new StripeInvalidRequestError(rawStripeError);
        case 'api_error':
            return new StripeAPIError(rawStripeError);
        case 'authentication_error':
            return new StripeAuthenticationError(rawStripeError);
        case 'rate_limit_error':
            return new StripeRateLimitError(rawStripeError);
        case 'idempotency_error':
            return new StripeIdempotencyError(rawStripeError);
        case 'invalid_grant':
            return new StripeInvalidGrantError(rawStripeError);
        default:
            return new StripeUnknownError(rawStripeError);
    }
};
class StripeError extends Error {
    constructor(raw = {}, type = null){
        super(raw.message);
        this.type = type || this.constructor.name;
        this.raw = raw;
        this.rawType = raw.type;
        this.code = raw.code;
        this.doc_url = raw.doc_url;
        this.param = raw.param;
        this.detail = raw.detail;
        this.headers = raw.headers;
        this.requestId = raw.requestId;
        this.statusCode = raw.statusCode;
        // @ts-ignore
        this.message = raw.message;
        this.charge = raw.charge;
        this.decline_code = raw.decline_code;
        this.payment_intent = raw.payment_intent;
        this.payment_method = raw.payment_method;
        this.payment_method_type = raw.payment_method_type;
        this.setup_intent = raw.setup_intent;
        this.source = raw.source;
    }
}
/**
 * Helper factory which takes raw stripe errors and outputs wrapping instances
 */ StripeError.generate = generate;
class StripeCardError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripeCardError');
    }
}
class StripeInvalidRequestError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripeInvalidRequestError');
    }
}
class StripeAPIError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripeAPIError');
    }
}
class StripeAuthenticationError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripeAuthenticationError');
    }
}
class StripePermissionError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripePermissionError');
    }
}
class StripeRateLimitError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripeRateLimitError');
    }
}
class StripeConnectionError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripeConnectionError');
    }
}
class StripeSignatureVerificationError extends StripeError {
    constructor(header, payload, raw = {}){
        super(raw, 'StripeSignatureVerificationError');
        this.header = header;
        this.payload = payload;
    }
}
class StripeIdempotencyError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripeIdempotencyError');
    }
}
class StripeInvalidGrantError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripeInvalidGrantError');
    }
}
class StripeUnknownError extends StripeError {
    constructor(raw = {}){
        super(raw, 'StripeUnknownError');
    }
}
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "callbackifyPromiseWithTimeout": (()=>callbackifyPromiseWithTimeout),
    "concat": (()=>concat),
    "determineProcessUserAgentProperties": (()=>determineProcessUserAgentProperties),
    "emitWarning": (()=>emitWarning),
    "extractUrlParams": (()=>extractUrlParams),
    "flattenAndStringify": (()=>flattenAndStringify),
    "getDataFromArgs": (()=>getDataFromArgs),
    "getOptionsFromArgs": (()=>getOptionsFromArgs),
    "isObject": (()=>isObject),
    "isOptionsHash": (()=>isOptionsHash),
    "makeURLInterpolator": (()=>makeURLInterpolator),
    "normalizeHeader": (()=>normalizeHeader),
    "normalizeHeaders": (()=>normalizeHeaders),
    "pascalToCamelCase": (()=>pascalToCamelCase),
    "protoExtend": (()=>protoExtend),
    "removeNullish": (()=>removeNullish),
    "stringifyRequestData": (()=>stringifyRequestData),
    "validateInteger": (()=>validateInteger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qs$40$6$2e$14$2e$0$2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/qs@6.14.0/node_modules/qs/lib/index.js [app-rsc] (ecmascript)");
;
const OPTIONS_KEYS = [
    'apiKey',
    'idempotencyKey',
    'stripeAccount',
    'apiVersion',
    'maxNetworkRetries',
    'timeout',
    'host'
];
function isOptionsHash(o) {
    return o && typeof o === 'object' && OPTIONS_KEYS.some((prop)=>Object.prototype.hasOwnProperty.call(o, prop));
}
function stringifyRequestData(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qs$40$6$2e$14$2e$0$2f$node_modules$2f$qs$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.stringify(data, {
        serializeDate: (d)=>Math.floor(d.getTime() / 1000).toString()
    })// Don't use strict form encoding by changing the square bracket control
    // characters back to their literals. This is fine by the server, and
    // makes these parameter strings easier to read.
    .replace(/%5B/g, '[').replace(/%5D/g, ']');
}
const makeURLInterpolator = (()=>{
    const rc = {
        '\n': '\\n',
        '"': '\\"',
        '\u2028': '\\u2028',
        '\u2029': '\\u2029'
    };
    return (str)=>{
        const cleanString = str.replace(/["\n\r\u2028\u2029]/g, ($0)=>rc[$0]);
        return (outputs)=>{
            return cleanString.replace(/\{([\s\S]+?)\}/g, ($0, $1)=>// @ts-ignore
                encodeURIComponent(outputs[$1] || ''));
        };
    };
})();
function extractUrlParams(path) {
    const params = path.match(/\{\w+\}/g);
    if (!params) {
        return [];
    }
    return params.map((param)=>param.replace(/[{}]/g, ''));
}
function getDataFromArgs(args) {
    if (!Array.isArray(args) || !args[0] || typeof args[0] !== 'object') {
        return {};
    }
    if (!isOptionsHash(args[0])) {
        return args.shift();
    }
    const argKeys = Object.keys(args[0]);
    const optionKeysInArgs = argKeys.filter((key)=>OPTIONS_KEYS.includes(key));
    // In some cases options may be the provided as the first argument.
    // Here we're detecting a case where there are two distinct arguments
    // (the first being args and the second options) and with known
    // option keys in the first so that we can warn the user about it.
    if (optionKeysInArgs.length > 0 && optionKeysInArgs.length !== argKeys.length) {
        emitWarning(`Options found in arguments (${optionKeysInArgs.join(', ')}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`);
    }
    return {};
}
function getOptionsFromArgs(args) {
    const opts = {
        auth: null,
        host: null,
        headers: {},
        settings: {}
    };
    if (args.length > 0) {
        const arg = args[args.length - 1];
        if (typeof arg === 'string') {
            opts.auth = args.pop();
        } else if (isOptionsHash(arg)) {
            const params = Object.assign({}, args.pop());
            const extraKeys = Object.keys(params).filter((key)=>!OPTIONS_KEYS.includes(key));
            if (extraKeys.length) {
                emitWarning(`Invalid options found (${extraKeys.join(', ')}); ignoring.`);
            }
            if (params.apiKey) {
                opts.auth = params.apiKey;
            }
            if (params.idempotencyKey) {
                opts.headers['Idempotency-Key'] = params.idempotencyKey;
            }
            if (params.stripeAccount) {
                opts.headers['Stripe-Account'] = params.stripeAccount;
            }
            if (params.apiVersion) {
                opts.headers['Stripe-Version'] = params.apiVersion;
            }
            if (Number.isInteger(params.maxNetworkRetries)) {
                opts.settings.maxNetworkRetries = params.maxNetworkRetries;
            }
            if (Number.isInteger(params.timeout)) {
                opts.settings.timeout = params.timeout;
            }
            if (params.host) {
                opts.host = params.host;
            }
        }
    }
    return opts;
}
function protoExtend(sub) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const Super = this;
    const Constructor = Object.prototype.hasOwnProperty.call(sub, 'constructor') ? sub.constructor : function(...args) {
        Super.apply(this, args);
    };
    // This initialization logic is somewhat sensitive to be compatible with
    // divergent JS implementations like the one found in Qt. See here for more
    // context:
    //
    // https://github.com/stripe/stripe-node/pull/334
    Object.assign(Constructor, Super);
    Constructor.prototype = Object.create(Super.prototype);
    Object.assign(Constructor.prototype, sub);
    return Constructor;
}
function removeNullish(obj) {
    if (typeof obj !== 'object') {
        throw new Error('Argument must be an object');
    }
    return Object.keys(obj).reduce((result, key)=>{
        if (obj[key] != null) {
            result[key] = obj[key];
        }
        return result;
    }, {});
}
function normalizeHeaders(obj) {
    if (!(obj && typeof obj === 'object')) {
        return obj;
    }
    return Object.keys(obj).reduce((result, header)=>{
        result[normalizeHeader(header)] = obj[header];
        return result;
    }, {});
}
function normalizeHeader(header) {
    return header.split('-').map((text)=>text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()).join('-');
}
function callbackifyPromiseWithTimeout(promise, callback) {
    if (callback) {
        // Ensure callback is called outside of promise stack.
        return promise.then((res)=>{
            setTimeout(()=>{
                callback(null, res);
            }, 0);
        }, (err)=>{
            setTimeout(()=>{
                callback(err, null);
            }, 0);
        });
    }
    return promise;
}
function pascalToCamelCase(name) {
    if (name === 'OAuth') {
        return 'oauth';
    } else {
        return name[0].toLowerCase() + name.substring(1);
    }
}
function emitWarning(warning) {
    if (typeof process.emitWarning !== 'function') {
        return console.warn(`Stripe: ${warning}`); /* eslint-disable-line no-console */ 
    }
    return process.emitWarning(warning, 'Stripe');
}
function isObject(obj) {
    const type = typeof obj;
    return (type === 'function' || type === 'object') && !!obj;
}
function flattenAndStringify(data) {
    const result = {};
    const step = (obj, prevKey)=>{
        Object.entries(obj).forEach(([key, value])=>{
            const newKey = prevKey ? `${prevKey}[${key}]` : key;
            if (isObject(value)) {
                if (!(value instanceof Uint8Array) && !Object.prototype.hasOwnProperty.call(value, 'data')) {
                    // Non-buffer non-file Objects are recursively flattened
                    return step(value, newKey);
                } else {
                    // Buffers and file objects are stored without modification
                    result[newKey] = value;
                }
            } else {
                // Primitives are converted to strings
                result[newKey] = String(value);
            }
        });
    };
    step(data, null);
    return result;
}
function validateInteger(name, n, defaultVal) {
    if (!Number.isInteger(n)) {
        if (defaultVal !== undefined) {
            return defaultVal;
        } else {
            throw new Error(`${name} must be an integer`);
        }
    }
    return n;
}
function determineProcessUserAgentProperties() {
    return typeof process === 'undefined' ? {} : {
        lang_version: process.version,
        platform: process.platform
    };
}
function concat(arrays) {
    const totalLength = arrays.reduce((len, array)=>len + array.length, 0);
    const merged = new Uint8Array(totalLength);
    let offset = 0;
    arrays.forEach((array)=>{
        merged.set(array, offset);
        offset += array.length;
    });
    return merged;
}
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/platform/NodePlatformFunctions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NodePlatformFunctions": (()=>NodePlatformFunctions)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_import__("[externals]/events [external] (events, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$NodeCryptoProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/crypto/NodeCryptoProvider.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$NodeHttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/net/NodeHttpClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$platform$2f$PlatformFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/platform/PlatformFunctions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/Error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__ = __turbopack_import__("[externals]/child_process [external] (child_process, cjs)");
;
;
;
;
;
;
;
;
class StreamProcessingError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeError"] {
}
class NodePlatformFunctions extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$platform$2f$PlatformFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlatformFunctions"] {
    constructor(){
        super();
        this._exec = __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__["exec"];
        this._UNAME_CACHE = null;
    }
    /** @override */ uuid4() {
        // available in: v14.17.x+
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__.randomUUID) {
            return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__.randomUUID();
        }
        return super.uuid4();
    }
    /**
     * @override
     * Node's built in `exec` function sometimes throws outright,
     * and sometimes has a callback with an error,
     * depending on the type of error.
     *
     * This unifies that interface by resolving with a null uname
     * if an error is encountered.
     */ getUname() {
        if (!this._UNAME_CACHE) {
            this._UNAME_CACHE = new Promise((resolve, reject)=>{
                try {
                    this._exec('uname -a', (err, uname)=>{
                        if (err) {
                            return resolve(null);
                        }
                        resolve(uname);
                    });
                } catch (e) {
                    resolve(null);
                }
            });
        }
        return this._UNAME_CACHE;
    }
    /**
     * @override
     * Secure compare, from https://github.com/freewil/scmp
     */ secureCompare(a, b) {
        if (!a || !b) {
            throw new Error('secureCompare must receive two arguments');
        }
        // return early here if buffer lengths are not equal since timingSafeEqual
        // will throw if buffer lengths are not equal
        if (a.length !== b.length) {
            return false;
        }
        // use crypto.timingSafeEqual if available (since Node.js v6.6.0),
        // otherwise use our own scmp-internal function.
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__.timingSafeEqual) {
            const textEncoder = new TextEncoder();
            const aEncoded = textEncoder.encode(a);
            const bEncoded = textEncoder.encode(b);
            return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__.timingSafeEqual(aEncoded, bEncoded);
        }
        return super.secureCompare(a, b);
    }
    createEmitter() {
        return new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"]();
    }
    /** @override */ tryBufferData(data) {
        if (!(data.file.data instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"])) {
            return Promise.resolve(data);
        }
        const bufferArray = [];
        return new Promise((resolve, reject)=>{
            data.file.data.on('data', (line)=>{
                bufferArray.push(line);
            }).once('end', ()=>{
                // @ts-ignore
                const bufferData = Object.assign({}, data);
                bufferData.file.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["concat"])(bufferArray);
                resolve(bufferData);
            }).on('error', (err)=>{
                reject(new StreamProcessingError({
                    message: 'An error occurred while attempting to process the file for upload.',
                    detail: err
                }));
            });
        });
    }
    /** @override */ createNodeHttpClient(agent) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$NodeHttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeHttpClient"](agent);
    }
    /** @override */ createDefaultHttpClient() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$NodeHttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeHttpClient"]();
    }
    /** @override */ createNodeCryptoProvider() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$NodeCryptoProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeCryptoProvider"]();
    }
    /** @override */ createDefaultCryptoProvider() {
        return this.createNodeCryptoProvider();
    }
}
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/RequestSender.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RequestSender": (()=>RequestSender)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/Error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/net/HttpClient.js [app-rsc] (ecmascript)");
;
;
;
const MAX_RETRY_AFTER_WAIT = 60;
class RequestSender {
    constructor(stripe, maxBufferedRequestMetric){
        this._stripe = stripe;
        this._maxBufferedRequestMetric = maxBufferedRequestMetric;
    }
    _addHeadersDirectlyToObject(obj, headers) {
        // For convenience, make some headers easily accessible on
        // lastResponse.
        // NOTE: Stripe responds with lowercase header names/keys.
        obj.requestId = headers['request-id'];
        obj.stripeAccount = obj.stripeAccount || headers['stripe-account'];
        obj.apiVersion = obj.apiVersion || headers['stripe-version'];
        obj.idempotencyKey = obj.idempotencyKey || headers['idempotency-key'];
    }
    _makeResponseEvent(requestEvent, statusCode, headers) {
        const requestEndTime = Date.now();
        const requestDurationMs = requestEndTime - requestEvent.request_start_time;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeNullish"])({
            api_version: headers['stripe-version'],
            account: headers['stripe-account'],
            idempotency_key: headers['idempotency-key'],
            method: requestEvent.method,
            path: requestEvent.path,
            status: statusCode,
            request_id: this._getRequestId(headers),
            elapsed: requestDurationMs,
            request_start_time: requestEvent.request_start_time,
            request_end_time: requestEndTime
        });
    }
    _getRequestId(headers) {
        return headers['request-id'];
    }
    /**
     * Used by methods with spec.streaming === true. For these methods, we do not
     * buffer successful responses into memory or do parse them into stripe
     * objects, we delegate that all of that to the user and pass back the raw
     * http.Response object to the callback.
     *
     * (Unsuccessful responses shouldn't make it here, they should
     * still be buffered/parsed and handled by _jsonResponseHandler -- see
     * makeRequest)
     */ _streamingResponseHandler(requestEvent, usage, callback) {
        return (res)=>{
            const headers = res.getHeaders();
            const streamCompleteCallback = ()=>{
                const responseEvent = this._makeResponseEvent(requestEvent, res.getStatusCode(), headers);
                this._stripe._emitter.emit('response', responseEvent);
                this._recordRequestMetrics(this._getRequestId(headers), responseEvent.elapsed, usage);
            };
            const stream = res.toStream(streamCompleteCallback);
            // This is here for backwards compatibility, as the stream is a raw
            // HTTP response in Node and the legacy behavior was to mutate this
            // response.
            this._addHeadersDirectlyToObject(stream, headers);
            return callback(null, stream);
        };
    }
    /**
     * Default handler for Stripe responses. Buffers the response into memory,
     * parses the JSON and returns it (i.e. passes it to the callback) if there
     * is no "error" field. Otherwise constructs/passes an appropriate Error.
     */ _jsonResponseHandler(requestEvent, usage, callback) {
        return (res)=>{
            const headers = res.getHeaders();
            const requestId = this._getRequestId(headers);
            const statusCode = res.getStatusCode();
            const responseEvent = this._makeResponseEvent(requestEvent, statusCode, headers);
            this._stripe._emitter.emit('response', responseEvent);
            res.toJSON().then((jsonResponse)=>{
                if (jsonResponse.error) {
                    let err;
                    // Convert OAuth error responses into a standard format
                    // so that the rest of the error logic can be shared
                    if (typeof jsonResponse.error === 'string') {
                        jsonResponse.error = {
                            type: jsonResponse.error,
                            message: jsonResponse.error_description
                        };
                    }
                    jsonResponse.error.headers = headers;
                    jsonResponse.error.statusCode = statusCode;
                    jsonResponse.error.requestId = requestId;
                    if (statusCode === 401) {
                        err = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeAuthenticationError"](jsonResponse.error);
                    } else if (statusCode === 403) {
                        err = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripePermissionError"](jsonResponse.error);
                    } else if (statusCode === 429) {
                        err = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeRateLimitError"](jsonResponse.error);
                    } else {
                        err = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeError"].generate(jsonResponse.error);
                    }
                    throw err;
                }
                return jsonResponse;
            }, (e)=>{
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeAPIError"]({
                    message: 'Invalid JSON received from the Stripe API',
                    exception: e,
                    requestId: headers['request-id']
                });
            }).then((jsonResponse)=>{
                this._recordRequestMetrics(requestId, responseEvent.elapsed, usage);
                // Expose raw response object.
                const rawResponse = res.getRawResponse();
                this._addHeadersDirectlyToObject(rawResponse, headers);
                Object.defineProperty(jsonResponse, 'lastResponse', {
                    enumerable: false,
                    writable: false,
                    value: rawResponse
                });
                callback(null, jsonResponse);
            }, (e)=>callback(e, null));
        };
    }
    static _generateConnectionErrorMessage(requestRetries) {
        return `An error occurred with our connection to Stripe.${requestRetries > 0 ? ` Request was retried ${requestRetries} times.` : ''}`;
    }
    // For more on when and how to retry API requests, see https://stripe.com/docs/error-handling#safely-retrying-requests-with-idempotency
    static _shouldRetry(res, numRetries, maxRetries, error) {
        if (error && numRetries === 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpClient"].CONNECTION_CLOSED_ERROR_CODES.includes(error.code)) {
            return true;
        }
        // Do not retry if we are out of retries.
        if (numRetries >= maxRetries) {
            return false;
        }
        // Retry on connection error.
        if (!res) {
            return true;
        }
        // The API may ask us not to retry (e.g., if doing so would be a no-op)
        // or advise us to retry (e.g., in cases of lock timeouts); we defer to that.
        if (res.getHeaders()['stripe-should-retry'] === 'false') {
            return false;
        }
        if (res.getHeaders()['stripe-should-retry'] === 'true') {
            return true;
        }
        // Retry on conflict errors.
        if (res.getStatusCode() === 409) {
            return true;
        }
        // Retry on 500, 503, and other internal errors.
        //
        // Note that we expect the stripe-should-retry header to be false
        // in most cases when a 500 is returned, since our idempotency framework
        // would typically replay it anyway.
        if (res.getStatusCode() >= 500) {
            return true;
        }
        return false;
    }
    _getSleepTimeInMS(numRetries, retryAfter = null) {
        const initialNetworkRetryDelay = this._stripe.getInitialNetworkRetryDelay();
        const maxNetworkRetryDelay = this._stripe.getMaxNetworkRetryDelay();
        // Apply exponential backoff with initialNetworkRetryDelay on the
        // number of numRetries so far as inputs. Do not allow the number to exceed
        // maxNetworkRetryDelay.
        let sleepSeconds = Math.min(initialNetworkRetryDelay * Math.pow(numRetries - 1, 2), maxNetworkRetryDelay);
        // Apply some jitter by randomizing the value in the range of
        // (sleepSeconds / 2) to (sleepSeconds).
        sleepSeconds *= 0.5 * (1 + Math.random());
        // But never sleep less than the base sleep seconds.
        sleepSeconds = Math.max(initialNetworkRetryDelay, sleepSeconds);
        // And never sleep less than the time the API asks us to wait, assuming it's a reasonable ask.
        if (Number.isInteger(retryAfter) && retryAfter <= MAX_RETRY_AFTER_WAIT) {
            sleepSeconds = Math.max(sleepSeconds, retryAfter);
        }
        return sleepSeconds * 1000;
    }
    // Max retries can be set on a per request basis. Favor those over the global setting
    _getMaxNetworkRetries(settings = {}) {
        return settings.maxNetworkRetries !== undefined && Number.isInteger(settings.maxNetworkRetries) ? settings.maxNetworkRetries : this._stripe.getMaxNetworkRetries();
    }
    _defaultIdempotencyKey(method, settings) {
        // If this is a POST and we allow multiple retries, ensure an idempotency key.
        const maxRetries = this._getMaxNetworkRetries(settings);
        if (method === 'POST' && maxRetries > 0) {
            return `stripe-node-retry-${this._stripe._platformFunctions.uuid4()}`;
        }
        return null;
    }
    _makeHeaders(auth, contentLength, apiVersion, clientUserAgent, method, userSuppliedHeaders, userSuppliedSettings) {
        const defaultHeaders = {
            // Use specified auth token or use default from this stripe instance:
            Authorization: auth ? `Bearer ${auth}` : this._stripe.getApiField('auth'),
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': this._getUserAgentString(),
            'X-Stripe-Client-User-Agent': clientUserAgent,
            'X-Stripe-Client-Telemetry': this._getTelemetryHeader(),
            'Stripe-Version': apiVersion,
            'Stripe-Account': this._stripe.getApiField('stripeAccount'),
            'Idempotency-Key': this._defaultIdempotencyKey(method, userSuppliedSettings)
        };
        // As per https://datatracker.ietf.org/doc/html/rfc7230#section-3.3.2:
        //   A user agent SHOULD send a Content-Length in a request message when
        //   no Transfer-Encoding is sent and the request method defines a meaning
        //   for an enclosed payload body.  For example, a Content-Length header
        //   field is normally sent in a POST request even when the value is 0
        //   (indicating an empty payload body).  A user agent SHOULD NOT send a
        //   Content-Length header field when the request message does not contain
        //   a payload body and the method semantics do not anticipate such a
        //   body.
        //
        // These method types are expected to have bodies and so we should always
        // include a Content-Length.
        const methodHasPayload = method == 'POST' || method == 'PUT' || method == 'PATCH';
        // If a content length was specified, we always include it regardless of
        // whether the method semantics anticipate such a body. This keeps us
        // consistent with historical behavior. We do however want to warn on this
        // and fix these cases as they are semantically incorrect.
        if (methodHasPayload || contentLength) {
            if (!methodHasPayload) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["emitWarning"])(`${method} method had non-zero contentLength but no payload is expected for this verb`);
            }
            defaultHeaders['Content-Length'] = contentLength;
        }
        return Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeNullish"])(defaultHeaders), // If the user supplied, say 'idempotency-key', override instead of appending by ensuring caps are the same.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeHeaders"])(userSuppliedHeaders));
    }
    _getUserAgentString() {
        const packageVersion = this._stripe.getConstant('PACKAGE_VERSION');
        const appInfo = this._stripe._appInfo ? this._stripe.getAppInfoAsString() : '';
        return `Stripe/v1 NodeBindings/${packageVersion} ${appInfo}`.trim();
    }
    _getTelemetryHeader() {
        if (this._stripe.getTelemetryEnabled() && this._stripe._prevRequestMetrics.length > 0) {
            const metrics = this._stripe._prevRequestMetrics.shift();
            return JSON.stringify({
                last_request_metrics: metrics
            });
        }
    }
    _recordRequestMetrics(requestId, requestDurationMs, usage) {
        if (this._stripe.getTelemetryEnabled() && requestId) {
            if (this._stripe._prevRequestMetrics.length > this._maxBufferedRequestMetric) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["emitWarning"])('Request metrics buffer is full, dropping telemetry message.');
            } else {
                const m = {
                    request_id: requestId,
                    request_duration_ms: requestDurationMs
                };
                if (usage && usage.length > 0) {
                    m.usage = usage;
                }
                this._stripe._prevRequestMetrics.push(m);
            }
        }
    }
    _request(method, host, path, data, auth, options = {}, usage = [], callback, requestDataProcessor = null) {
        let requestData;
        const retryRequest = (requestFn, apiVersion, headers, requestRetries, retryAfter)=>{
            return setTimeout(requestFn, this._getSleepTimeInMS(requestRetries, retryAfter), apiVersion, headers, requestRetries + 1);
        };
        const makeRequest = (apiVersion, headers, numRetries)=>{
            // timeout can be set on a per-request basis. Favor that over the global setting
            const timeout = options.settings && options.settings.timeout && Number.isInteger(options.settings.timeout) && options.settings.timeout >= 0 ? options.settings.timeout : this._stripe.getApiField('timeout');
            const req = this._stripe.getApiField('httpClient').makeRequest(host || this._stripe.getApiField('host'), this._stripe.getApiField('port'), path, method, headers, requestData, this._stripe.getApiField('protocol'), timeout);
            const requestStartTime = Date.now();
            // @ts-ignore
            const requestEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeNullish"])({
                api_version: apiVersion,
                account: headers['Stripe-Account'],
                idempotency_key: headers['Idempotency-Key'],
                method,
                path,
                request_start_time: requestStartTime
            });
            const requestRetries = numRetries || 0;
            const maxRetries = this._getMaxNetworkRetries(options.settings || {});
            this._stripe._emitter.emit('request', requestEvent);
            req.then((res)=>{
                if (RequestSender._shouldRetry(res, requestRetries, maxRetries)) {
                    return retryRequest(makeRequest, apiVersion, headers, requestRetries, // @ts-ignore
                    res.getHeaders()['retry-after']);
                } else if (options.streaming && res.getStatusCode() < 400) {
                    return this._streamingResponseHandler(requestEvent, usage, callback)(res);
                } else {
                    return this._jsonResponseHandler(requestEvent, usage, callback)(res);
                }
            }).catch((error)=>{
                if (RequestSender._shouldRetry(null, requestRetries, maxRetries, error)) {
                    return retryRequest(makeRequest, apiVersion, headers, requestRetries, null);
                } else {
                    const isTimeoutError = error.code && error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpClient"].TIMEOUT_ERROR_CODE;
                    return callback(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeConnectionError"]({
                        message: isTimeoutError ? `Request aborted due to timeout being reached (${timeout}ms)` : RequestSender._generateConnectionErrorMessage(requestRetries),
                        // @ts-ignore
                        detail: error
                    }));
                }
            });
        };
        const prepareAndMakeRequest = (error, data)=>{
            if (error) {
                return callback(error);
            }
            requestData = data;
            this._stripe.getClientUserAgent((clientUserAgent)=>{
                var _a, _b;
                const apiVersion = this._stripe.getApiField('version');
                const headers = this._makeHeaders(auth, requestData.length, apiVersion, clientUserAgent, method, (_a = options.headers) !== null && _a !== void 0 ? _a : null, (_b = options.settings) !== null && _b !== void 0 ? _b : {});
                makeRequest(apiVersion, headers, 0);
            });
        };
        if (requestDataProcessor) {
            requestDataProcessor(method, data, options.headers, prepareAndMakeRequest);
        } else {
            prepareAndMakeRequest(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringifyRequestData"])(data || {}));
        }
    }
}
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/autoPagination.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "makeAutoPaginationMethods": (()=>makeAutoPaginationMethods)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/utils.js [app-rsc] (ecmascript)");
;
class StripeIterator {
    constructor(firstPagePromise, requestArgs, spec, stripeResource){
        this.index = 0;
        this.pagePromise = firstPagePromise;
        this.promiseCache = {
            currentPromise: null
        };
        this.requestArgs = requestArgs;
        this.spec = spec;
        this.stripeResource = stripeResource;
    }
    async iterate(pageResult) {
        if (!(pageResult && pageResult.data && typeof pageResult.data.length === 'number')) {
            throw Error('Unexpected: Stripe API response does not have a well-formed `data` array.');
        }
        const reverseIteration = isReverseIteration(this.requestArgs);
        if (this.index < pageResult.data.length) {
            const idx = reverseIteration ? pageResult.data.length - 1 - this.index : this.index;
            const value = pageResult.data[idx];
            this.index += 1;
            return {
                value,
                done: false
            };
        } else if (pageResult.has_more) {
            // Reset counter, request next page, and recurse.
            this.index = 0;
            this.pagePromise = this.getNextPage(pageResult);
            const nextPageResult = await this.pagePromise;
            return this.iterate(nextPageResult);
        }
        return {
            done: true,
            value: undefined
        };
    }
    /** @abstract */ getNextPage(_pageResult) {
        throw new Error('Unimplemented');
    }
    async _next() {
        return this.iterate(await this.pagePromise);
    }
    next() {
        /**
         * If a user calls `.next()` multiple times in parallel,
         * return the same result until something has resolved
         * to prevent page-turning race conditions.
         */ if (this.promiseCache.currentPromise) {
            return this.promiseCache.currentPromise;
        }
        const nextPromise = (async ()=>{
            const ret = await this._next();
            this.promiseCache.currentPromise = null;
            return ret;
        })();
        this.promiseCache.currentPromise = nextPromise;
        return nextPromise;
    }
}
class ListIterator extends StripeIterator {
    getNextPage(pageResult) {
        const reverseIteration = isReverseIteration(this.requestArgs);
        const lastId = getLastId(pageResult, reverseIteration);
        return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
            [reverseIteration ? 'ending_before' : 'starting_after']: lastId
        });
    }
}
class SearchIterator extends StripeIterator {
    getNextPage(pageResult) {
        if (!pageResult.next_page) {
            throw Error('Unexpected: Stripe API response does not have a well-formed `next_page` field, but `has_more` was true.');
        }
        return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
            page: pageResult.next_page
        });
    }
}
const makeAutoPaginationMethods = (stripeResource, requestArgs, spec, firstPagePromise)=>{
    if (spec.methodType === 'search') {
        return makeAutoPaginationMethodsFromIterator(new SearchIterator(firstPagePromise, requestArgs, spec, stripeResource));
    }
    if (spec.methodType === 'list') {
        return makeAutoPaginationMethodsFromIterator(new ListIterator(firstPagePromise, requestArgs, spec, stripeResource));
    }
    return null;
};
const makeAutoPaginationMethodsFromIterator = (iterator)=>{
    const autoPagingEach = makeAutoPagingEach((...args)=>iterator.next(...args));
    const autoPagingToArray = makeAutoPagingToArray(autoPagingEach);
    const autoPaginationMethods = {
        autoPagingEach,
        autoPagingToArray,
        // Async iterator functions:
        next: ()=>iterator.next(),
        return: ()=>{
            // This is required for `break`.
            return {};
        },
        [getAsyncIteratorSymbol()]: ()=>{
            return autoPaginationMethods;
        }
    };
    return autoPaginationMethods;
};
/**
 * ----------------
 * Private Helpers:
 * ----------------
 */ function getAsyncIteratorSymbol() {
    if (typeof Symbol !== 'undefined' && Symbol.asyncIterator) {
        return Symbol.asyncIterator;
    }
    // Follow the convention from libraries like iterall: https://github.com/leebyron/iterall#asynciterator-1
    return '@@asyncIterator';
}
function getDoneCallback(args) {
    if (args.length < 2) {
        return null;
    }
    const onDone = args[1];
    if (typeof onDone !== 'function') {
        throw Error(`The second argument to autoPagingEach, if present, must be a callback function; received ${typeof onDone}`);
    }
    return onDone;
}
/**
 * We allow four forms of the `onItem` callback (the middle two being equivalent),
 *
 *   1. `.autoPagingEach((item) => { doSomething(item); return false; });`
 *   2. `.autoPagingEach(async (item) => { await doSomething(item); return false; });`
 *   3. `.autoPagingEach((item) => doSomething(item).then(() => false));`
 *   4. `.autoPagingEach((item, next) => { doSomething(item); next(false); });`
 *
 * In addition to standard validation, this helper
 * coalesces the former forms into the latter form.
 */ function getItemCallback(args) {
    if (args.length === 0) {
        return undefined;
    }
    const onItem = args[0];
    if (typeof onItem !== 'function') {
        throw Error(`The first argument to autoPagingEach, if present, must be a callback function; received ${typeof onItem}`);
    }
    // 4. `.autoPagingEach((item, next) => { doSomething(item); next(false); });`
    if (onItem.length === 2) {
        return onItem;
    }
    if (onItem.length > 2) {
        throw Error(`The \`onItem\` callback function passed to autoPagingEach must accept at most two arguments; got ${onItem}`);
    }
    // This magically handles all three of these usecases (the latter two being functionally identical):
    // 1. `.autoPagingEach((item) => { doSomething(item); return false; });`
    // 2. `.autoPagingEach(async (item) => { await doSomething(item); return false; });`
    // 3. `.autoPagingEach((item) => doSomething(item).then(() => false));`
    return function _onItem(item, next) {
        const shouldContinue = onItem(item);
        next(shouldContinue);
    };
}
function getLastId(listResult, reverseIteration) {
    const lastIdx = reverseIteration ? 0 : listResult.data.length - 1;
    const lastItem = listResult.data[lastIdx];
    const lastId = lastItem && lastItem.id;
    if (!lastId) {
        throw Error('Unexpected: No `id` found on the last item while auto-paging a list.');
    }
    return lastId;
}
function makeAutoPagingEach(asyncIteratorNext) {
    return function autoPagingEach() {
        const args = [].slice.call(arguments);
        const onItem = getItemCallback(args);
        const onDone = getDoneCallback(args);
        if (args.length > 2) {
            throw Error(`autoPagingEach takes up to two arguments; received ${args}`);
        }
        const autoPagePromise = wrapAsyncIteratorWithCallback(asyncIteratorNext, // @ts-ignore we might need a null check
        onItem);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["callbackifyPromiseWithTimeout"])(autoPagePromise, onDone);
    };
}
function makeAutoPagingToArray(autoPagingEach) {
    return function autoPagingToArray(opts, onDone) {
        const limit = opts && opts.limit;
        if (!limit) {
            throw Error('You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.');
        }
        if (limit > 10000) {
            throw Error('You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.');
        }
        const promise = new Promise((resolve, reject)=>{
            const items = [];
            autoPagingEach((item)=>{
                items.push(item);
                if (items.length >= limit) {
                    return false;
                }
            }).then(()=>{
                resolve(items);
            }).catch(reject);
        });
        // @ts-ignore
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["callbackifyPromiseWithTimeout"])(promise, onDone);
    };
}
function wrapAsyncIteratorWithCallback(asyncIteratorNext, onItem) {
    return new Promise((resolve, reject)=>{
        function handleIteration(iterResult) {
            if (iterResult.done) {
                resolve();
                return;
            }
            const item = iterResult.value;
            return new Promise((next)=>{
                // Bit confusing, perhaps; we pass a `resolve` fn
                // to the user, so they can decide when and if to continue.
                // They can return false, or a promise which resolves to false, to break.
                onItem(item, next);
            }).then((shouldContinue)=>{
                if (shouldContinue === false) {
                    return handleIteration({
                        done: true,
                        value: undefined
                    });
                } else {
                    return asyncIteratorNext().then(handleIteration);
                }
            });
        }
        asyncIteratorNext().then(handleIteration).catch(reject);
    });
}
function isReverseIteration(requestArgs) {
    const args = [].slice.call(requestArgs);
    const dataFromArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDataFromArgs"])(args);
    return !!dataFromArgs.ending_before;
}
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeMethod.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "stripeMethod": (()=>stripeMethod)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$autoPagination$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/autoPagination.js [app-rsc] (ecmascript)");
;
;
function stripeMethod(spec) {
    if (spec.path !== undefined && spec.fullPath !== undefined) {
        throw new Error(`Method spec specified both a 'path' (${spec.path}) and a 'fullPath' (${spec.fullPath}).`);
    }
    return function(...args) {
        const callback = typeof args[args.length - 1] == 'function' && args.pop();
        spec.urlParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractUrlParams"])(spec.fullPath || this.createResourcePathWithSymbols(spec.path || ''));
        const requestPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["callbackifyPromiseWithTimeout"])(this._makeRequest(args, spec, {}), callback);
        Object.assign(requestPromise, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$autoPagination$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeAutoPaginationMethods"])(this, args, spec, requestPromise));
        return requestPromise;
    };
}
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "StripeResource": (()=>StripeResource)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeMethod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeMethod.js [app-rsc] (ecmascript)");
;
;
// Provide extension mechanism for Stripe Resource Sub-Classes
StripeResource.extend = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protoExtend"];
// Expose method-creator
StripeResource.method = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeMethod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripeMethod"];
StripeResource.MAX_BUFFERED_REQUEST_METRICS = 100;
/**
 * Encapsulates request logic for a Stripe Resource
 */ function StripeResource(stripe, deprecatedUrlData) {
    this._stripe = stripe;
    if (deprecatedUrlData) {
        throw new Error('Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids.');
    }
    this.basePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeURLInterpolator"])(// @ts-ignore changing type of basePath
    this.basePath || stripe.getApiField('basePath'));
    // @ts-ignore changing type of path
    this.resourcePath = this.path;
    // @ts-ignore changing type of path
    this.path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeURLInterpolator"])(this.path);
    this.initialize(...arguments);
}
StripeResource.prototype = {
    _stripe: null,
    // @ts-ignore the type of path changes in ctor
    path: '',
    resourcePath: '',
    // Methods that don't use the API's default '/v1' path can override it with this setting.
    basePath: null,
    initialize () {},
    // Function to override the default data processor. This allows full control
    // over how a StripeResource's request data will get converted into an HTTP
    // body. This is useful for non-standard HTTP requests. The function should
    // take method name, data, and headers as arguments.
    requestDataProcessor: null,
    // Function to add a validation checks before sending the request, errors should
    // be thrown, and they will be passed to the callback/promise.
    validateRequest: null,
    createFullPath (commandPath, urlData) {
        const urlParts = [
            this.basePath(urlData),
            this.path(urlData)
        ];
        if (typeof commandPath === 'function') {
            const computedCommandPath = commandPath(urlData);
            // If we have no actual command path, we just omit it to avoid adding a
            // trailing slash. This is important for top-level listing requests, which
            // do not have a command path.
            if (computedCommandPath) {
                urlParts.push(computedCommandPath);
            }
        } else {
            urlParts.push(commandPath);
        }
        return this._joinUrlParts(urlParts);
    },
    // Creates a relative resource path with symbols left in (unlike
    // createFullPath which takes some data to replace them with). For example it
    // might produce: /invoices/{id}
    createResourcePathWithSymbols (pathWithSymbols) {
        // If there is no path beyond the resource path, we want to produce just
        // /<resource path> rather than /<resource path>/.
        if (pathWithSymbols) {
            return `/${this._joinUrlParts([
                this.resourcePath,
                pathWithSymbols
            ])}`;
        } else {
            return `/${this.resourcePath}`;
        }
    },
    _joinUrlParts (parts) {
        // Replace any accidentally doubled up slashes. This previously used
        // path.join, which would do this as well. Unfortunately we need to do this
        // as the functions for creating paths are technically part of the public
        // interface and so we need to preserve backwards compatibility.
        return parts.join('/').replace(/\/{2,}/g, '/');
    },
    _getRequestOpts (requestArgs, spec, overrideData) {
        // Extract spec values with defaults.
        const requestMethod = (spec.method || 'GET').toUpperCase();
        const usage = spec.usage || [];
        const urlParams = spec.urlParams || [];
        const encode = spec.encode || ((data)=>data);
        const isUsingFullPath = !!spec.fullPath;
        const commandPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeURLInterpolator"])(isUsingFullPath ? spec.fullPath : spec.path || '');
        // When using fullPath, we ignore the resource path as it should already be
        // fully qualified.
        const path = isUsingFullPath ? spec.fullPath : this.createResourcePathWithSymbols(spec.path);
        // Don't mutate args externally.
        const args = [].slice.call(requestArgs);
        // Generate and validate url params.
        const urlData = urlParams.reduce((urlData, param)=>{
            const arg = args.shift();
            if (typeof arg !== 'string') {
                throw new Error(`Stripe: Argument "${param}" must be a string, but got: ${arg} (on API request to \`${requestMethod} ${path}\`)`);
            }
            urlData[param] = arg;
            return urlData;
        }, {});
        // Pull request data and options (headers, auth) from args.
        const dataFromArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDataFromArgs"])(args);
        const data = encode(Object.assign({}, dataFromArgs, overrideData));
        const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOptionsFromArgs"])(args);
        const host = options.host || spec.host;
        const streaming = !!spec.streaming;
        // Validate that there are no more args.
        if (args.filter((x)=>x != null).length) {
            throw new Error(`Stripe: Unknown arguments (${args}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${requestMethod} \`${path}\`)`);
        }
        // When using full path, we can just invoke the URL interpolator directly
        // as we don't need to use the resource to create a full path.
        const requestPath = isUsingFullPath ? commandPath(urlData) : this.createFullPath(commandPath, urlData);
        const headers = Object.assign(options.headers, spec.headers);
        if (spec.validator) {
            spec.validator(data, {
                headers
            });
        }
        const dataInQuery = spec.method === 'GET' || spec.method === 'DELETE';
        const bodyData = dataInQuery ? null : data;
        const queryData = dataInQuery ? data : {};
        return {
            requestMethod,
            requestPath,
            bodyData,
            queryData,
            auth: options.auth,
            headers,
            host: host !== null && host !== void 0 ? host : null,
            streaming,
            settings: options.settings,
            usage
        };
    },
    _makeRequest (requestArgs, spec, overrideData) {
        return new Promise((resolve, reject)=>{
            var _a;
            let opts;
            try {
                opts = this._getRequestOpts(requestArgs, spec, overrideData);
            } catch (err) {
                reject(err);
                return;
            }
            function requestCallback(err, response) {
                if (err) {
                    reject(err);
                } else {
                    resolve(spec.transformResponseData ? spec.transformResponseData(response) : response);
                }
            }
            const emptyQuery = Object.keys(opts.queryData).length === 0;
            const path = [
                opts.requestPath,
                emptyQuery ? '' : '?',
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringifyRequestData"])(opts.queryData)
            ].join('');
            const { headers, settings } = opts;
            this._stripe._requestSender._request(opts.requestMethod, opts.host, path, opts.bodyData, opts.auth, {
                headers,
                settings,
                streaming: opts.streaming
            }, opts.usage, requestCallback, (_a = this.requestDataProcessor) === null || _a === void 0 ? void 0 : _a.bind(this));
        });
    }
};
;
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/Webhooks.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createWebhooks": (()=>createWebhooks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/Error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$CryptoProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/crypto/CryptoProvider.js [app-rsc] (ecmascript)");
;
;
function createWebhooks(platformFunctions) {
    const Webhook = {
        DEFAULT_TOLERANCE: 300,
        // @ts-ignore
        signature: null,
        constructEvent (payload, header, secret, tolerance, cryptoProvider, receivedAt) {
            try {
                this.signature.verifyHeader(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider, receivedAt);
            } catch (e) {
                if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$CryptoProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CryptoProviderOnlySupportsAsyncError"]) {
                    e.message += '\nUse `await constructEventAsync(...)` instead of `constructEvent(...)`';
                }
                throw e;
            }
            const jsonPayload = payload instanceof Uint8Array ? JSON.parse(new TextDecoder('utf8').decode(payload)) : JSON.parse(payload);
            return jsonPayload;
        },
        async constructEventAsync (payload, header, secret, tolerance, cryptoProvider, receivedAt) {
            await this.signature.verifyHeaderAsync(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider, receivedAt);
            const jsonPayload = payload instanceof Uint8Array ? JSON.parse(new TextDecoder('utf8').decode(payload)) : JSON.parse(payload);
            return jsonPayload;
        },
        /**
         * Generates a header to be used for webhook mocking
         *
         * @typedef {object} opts
         * @property {number} timestamp - Timestamp of the header. Defaults to Date.now()
         * @property {string} payload - JSON stringified payload object, containing the 'id' and 'object' parameters
         * @property {string} secret - Stripe webhook secret 'whsec_...'
         * @property {string} scheme - Version of API to hit. Defaults to 'v1'.
         * @property {string} signature - Computed webhook signature
         * @property {CryptoProvider} cryptoProvider - Crypto provider to use for computing the signature if none was provided. Defaults to NodeCryptoProvider.
         */ generateTestHeaderString: function(opts) {
            const preparedOpts = prepareOptions(opts);
            const signature = preparedOpts.signature || preparedOpts.cryptoProvider.computeHMACSignature(preparedOpts.payloadString, preparedOpts.secret);
            return preparedOpts.generateHeaderString(signature);
        },
        generateTestHeaderStringAsync: async function(opts) {
            const preparedOpts = prepareOptions(opts);
            const signature = preparedOpts.signature || await preparedOpts.cryptoProvider.computeHMACSignatureAsync(preparedOpts.payloadString, preparedOpts.secret);
            return preparedOpts.generateHeaderString(signature);
        }
    };
    const signature = {
        EXPECTED_SCHEME: 'v1',
        verifyHeader (encodedPayload, encodedHeader, secret, tolerance, cryptoProvider, receivedAt) {
            const { decodedHeader: header, decodedPayload: payload, details, suspectPayloadType } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
            const secretContainsWhitespace = /\s/.test(secret);
            cryptoProvider = cryptoProvider || getCryptoProvider();
            const expectedSignature = cryptoProvider.computeHMACSignature(makeHMACContent(payload, details), secret);
            validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt);
            return true;
        },
        async verifyHeaderAsync (encodedPayload, encodedHeader, secret, tolerance, cryptoProvider, receivedAt) {
            const { decodedHeader: header, decodedPayload: payload, details, suspectPayloadType } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
            const secretContainsWhitespace = /\s/.test(secret);
            cryptoProvider = cryptoProvider || getCryptoProvider();
            const expectedSignature = await cryptoProvider.computeHMACSignatureAsync(makeHMACContent(payload, details), secret);
            return validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt);
        }
    };
    function makeHMACContent(payload, details) {
        return `${details.timestamp}.${payload}`;
    }
    function parseEventDetails(encodedPayload, encodedHeader, expectedScheme) {
        if (!encodedPayload) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeSignatureVerificationError"](encodedHeader, encodedPayload, {
                message: 'No webhook payload was provided.'
            });
        }
        const suspectPayloadType = typeof encodedPayload != 'string' && !(encodedPayload instanceof Uint8Array);
        const textDecoder = new TextDecoder('utf8');
        const decodedPayload = encodedPayload instanceof Uint8Array ? textDecoder.decode(encodedPayload) : encodedPayload;
        // Express's type for `Request#headers` is `string | []string`
        // which is because the `set-cookie` header is an array,
        // but no other headers are an array (docs: https://nodejs.org/api/http.html#http_message_headers)
        // (Express's Request class is an extension of http.IncomingMessage, and doesn't appear to be relevantly modified: https://github.com/expressjs/express/blob/master/lib/request.js#L31)
        if (Array.isArray(encodedHeader)) {
            throw new Error('Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.');
        }
        if (encodedHeader == null || encodedHeader == '') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeSignatureVerificationError"](encodedHeader, encodedPayload, {
                message: 'No stripe-signature header value was provided.'
            });
        }
        const decodedHeader = encodedHeader instanceof Uint8Array ? textDecoder.decode(encodedHeader) : encodedHeader;
        const details = parseHeader(decodedHeader, expectedScheme);
        if (!details || details.timestamp === -1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeSignatureVerificationError"](decodedHeader, decodedPayload, {
                message: 'Unable to extract timestamp and signatures from header'
            });
        }
        if (!details.signatures.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeSignatureVerificationError"](decodedHeader, decodedPayload, {
                message: 'No signatures found with expected scheme'
            });
        }
        return {
            decodedPayload,
            decodedHeader,
            details,
            suspectPayloadType
        };
    }
    function validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt) {
        const signatureFound = !!details.signatures.filter(platformFunctions.secureCompare.bind(platformFunctions, expectedSignature)).length;
        const docsLocation = '\nLearn more about webhook signing and explore webhook integration examples for various frameworks at ' + 'https://github.com/stripe/stripe-node#webhook-signing';
        const whitespaceMessage = secretContainsWhitespace ? '\n\nNote: The provided signing secret contains whitespace. This often indicates an extra newline or space is in the value' : '';
        if (!signatureFound) {
            if (suspectPayloadType) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeSignatureVerificationError"](header, payload, {
                    message: 'Webhook payload must be provided as a string or a Buffer (https://nodejs.org/api/buffer.html) instance representing the _raw_ request body.' + 'Payload was provided as a parsed JavaScript object instead. \n' + 'Signature verification is impossible without access to the original signed material. \n' + docsLocation + '\n' + whitespaceMessage
                });
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeSignatureVerificationError"](header, payload, {
                message: 'No signatures found matching the expected signature for payload.' + ' Are you passing the raw request body you received from Stripe? \n' + ' If a webhook request is being forwarded by a third-party tool,' + ' ensure that the exact request body, including JSON formatting and new line style, is preserved.\n' + docsLocation + '\n' + whitespaceMessage
            });
        }
        const timestampAge = Math.floor((typeof receivedAt === 'number' ? receivedAt : Date.now()) / 1000) - details.timestamp;
        if (tolerance > 0 && timestampAge > tolerance) {
            // @ts-ignore
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeSignatureVerificationError"](header, payload, {
                message: 'Timestamp outside the tolerance zone'
            });
        }
        return true;
    }
    function parseHeader(header, scheme) {
        if (typeof header !== 'string') {
            return null;
        }
        return header.split(',').reduce((accum, item)=>{
            const kv = item.split('=');
            if (kv[0] === 't') {
                accum.timestamp = parseInt(kv[1], 10);
            }
            if (kv[0] === scheme) {
                accum.signatures.push(kv[1]);
            }
            return accum;
        }, {
            timestamp: -1,
            signatures: []
        });
    }
    let webhooksCryptoProviderInstance = null;
    /**
     * Lazily instantiate a CryptoProvider instance. This is a stateless object
     * so a singleton can be used here.
     */ function getCryptoProvider() {
        if (!webhooksCryptoProviderInstance) {
            webhooksCryptoProviderInstance = platformFunctions.createDefaultCryptoProvider();
        }
        return webhooksCryptoProviderInstance;
    }
    function prepareOptions(opts) {
        if (!opts) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeError"]({
                message: 'Options are required'
            });
        }
        const timestamp = Math.floor(opts.timestamp) || Math.floor(Date.now() / 1000);
        const scheme = opts.scheme || signature.EXPECTED_SCHEME;
        const cryptoProvider = opts.cryptoProvider || getCryptoProvider();
        const payloadString = `${timestamp}.${opts.payload}`;
        const generateHeaderString = (signature)=>{
            return `t=${timestamp},${scheme}=${signature}`;
        };
        return Object.assign(Object.assign({}, opts), {
            timestamp,
            scheme,
            cryptoProvider,
            payloadString,
            generateHeaderString
        });
    }
    Webhook.signature = signature;
    return Webhook;
}
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/apiVersion.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "ApiVersion": (()=>ApiVersion)
});
const ApiVersion = '2024-06-20';
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/ResourceNamespace.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// ResourceNamespace allows you to create nested resources, i.e. `stripe.issuing.cards`.
// It also works recursively, so you could do i.e. `stripe.billing.invoicing.pay`.
__turbopack_esm__({
    "resourceNamespace": (()=>resourceNamespace)
});
function ResourceNamespace(stripe, resources) {
    for(const name in resources){
        if (!Object.prototype.hasOwnProperty.call(resources, name)) {
            continue;
        }
        const camelCaseName = name[0].toLowerCase() + name.substring(1);
        const resource = new resources[name](stripe);
        this[camelCaseName] = resource;
    }
}
function resourceNamespace(namespace, resources) {
    return function(stripe) {
        return new ResourceNamespace(stripe, resources);
    };
}
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/FinancialConnections/Accounts.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Accounts": (()=>Accounts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Accounts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/accounts/{account}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/accounts',
        methodType: 'list'
    }),
    disconnect: stripeMethod({
        method: 'POST',
        fullPath: '/v1/financial_connections/accounts/{account}/disconnect'
    }),
    listOwners: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/accounts/{account}/owners',
        methodType: 'list'
    }),
    refresh: stripeMethod({
        method: 'POST',
        fullPath: '/v1/financial_connections/accounts/{account}/refresh'
    }),
    subscribe: stripeMethod({
        method: 'POST',
        fullPath: '/v1/financial_connections/accounts/{account}/subscribe'
    }),
    unsubscribe: stripeMethod({
        method: 'POST',
        fullPath: '/v1/financial_connections/accounts/{account}/unsubscribe'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Entitlements/ActiveEntitlements.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "ActiveEntitlements": (()=>ActiveEntitlements)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ActiveEntitlements = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/entitlements/active_entitlements/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/entitlements/active_entitlements',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Billing/Alerts.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Alerts": (()=>Alerts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Alerts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/alerts'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing/alerts/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing/alerts',
        methodType: 'list'
    }),
    activate: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/alerts/{id}/activate'
    }),
    archive: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/alerts/{id}/archive'
    }),
    deactivate: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/alerts/{id}/deactivate'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Issuing/Authorizations.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Authorizations": (()=>Authorizations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Authorizations = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/authorizations'
    }),
    capture: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/capture'
    }),
    expire: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/expire'
    }),
    finalizeAmount: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount'
    }),
    increment: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/increment'
    }),
    reverse: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/authorizations/{authorization}/reverse'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/Authorizations.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Authorizations": (()=>Authorizations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Authorizations = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/authorizations/{authorization}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/authorizations/{authorization}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/authorizations',
        methodType: 'list'
    }),
    approve: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/authorizations/{authorization}/approve'
    }),
    decline: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/authorizations/{authorization}/decline'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Tax/Calculations.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Calculations": (()=>Calculations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Calculations = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax/calculations'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/calculations/{calculation}'
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/calculations/{calculation}/line_items',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/Cardholders.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Cardholders": (()=>Cardholders)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Cardholders = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cardholders'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cardholders/{cardholder}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cardholders/{cardholder}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cardholders',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Issuing/Cards.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Cards": (()=>Cards)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Cards = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    deliverCard: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/deliver'
    }),
    failCard: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/fail'
    }),
    returnCard: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/return'
    }),
    shipCard: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/ship'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/Cards.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Cards": (()=>Cards)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Cards = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cards'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cards/{card}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cards/{card}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cards',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/BillingPortal/Configurations.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Configurations": (()=>Configurations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Configurations = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing_portal/configurations'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing_portal/configurations/{configuration}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing_portal/configurations/{configuration}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing_portal/configurations',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Terminal/Configurations.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Configurations": (()=>Configurations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Configurations = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/configurations'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/terminal/configurations/{configuration}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/configurations/{configuration}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/terminal/configurations',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/terminal/configurations/{configuration}'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/ConfirmationTokens.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "ConfirmationTokens": (()=>ConfirmationTokens)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ConfirmationTokens = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/confirmation_tokens'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Terminal/ConnectionTokens.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "ConnectionTokens": (()=>ConnectionTokens)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ConnectionTokens = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/connection_tokens'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/CreditReversals.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "CreditReversals": (()=>CreditReversals)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const CreditReversals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/credit_reversals'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/credit_reversals/{credit_reversal}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/credit_reversals',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Customers.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Customers": (()=>Customers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Customers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    fundCashBalance: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/customers/{customer}/fund_cash_balance'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/DebitReversals.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "DebitReversals": (()=>DebitReversals)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const DebitReversals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/debit_reversals'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/debit_reversals/{debit_reversal}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/debit_reversals',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/Disputes.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Disputes": (()=>Disputes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Disputes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/disputes'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/disputes/{dispute}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/disputes/{dispute}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/disputes',
        methodType: 'list'
    }),
    submit: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/disputes/{dispute}/submit'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Radar/EarlyFraudWarnings.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "EarlyFraudWarnings": (()=>EarlyFraudWarnings)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const EarlyFraudWarnings = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/radar/early_fraud_warnings/{early_fraud_warning}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/radar/early_fraud_warnings',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Entitlements/Features.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Features": (()=>Features)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Features = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/entitlements/features'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/entitlements/features/{id}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/entitlements/features/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/entitlements/features',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/FinancialAccounts.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "FinancialAccounts": (()=>FinancialAccounts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const FinancialAccounts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/financial_accounts'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/financial_accounts/{financial_account}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/financial_accounts/{financial_account}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/financial_accounts',
        methodType: 'list'
    }),
    retrieveFeatures: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/financial_accounts/{financial_account}/features'
    }),
    updateFeatures: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/financial_accounts/{financial_account}/features'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/InboundTransfers.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "InboundTransfers": (()=>InboundTransfers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const InboundTransfers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    fail: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/fail'
    }),
    returnInboundTransfer: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/return'
    }),
    succeed: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/succeed'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/InboundTransfers.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "InboundTransfers": (()=>InboundTransfers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const InboundTransfers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/inbound_transfers'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/inbound_transfers/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/inbound_transfers',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/inbound_transfers/{inbound_transfer}/cancel'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Terminal/Locations.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Locations": (()=>Locations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Locations = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/locations'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/terminal/locations/{location}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/locations/{location}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/terminal/locations',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/terminal/locations/{location}'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Billing/MeterEventAdjustments.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "MeterEventAdjustments": (()=>MeterEventAdjustments)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const MeterEventAdjustments = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/meter_event_adjustments'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Billing/MeterEvents.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "MeterEvents": (()=>MeterEvents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const MeterEvents = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/meter_events'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Billing/Meters.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Meters": (()=>Meters)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Meters = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/meters'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing/meters/{id}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/meters/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing/meters',
        methodType: 'list'
    }),
    deactivate: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/meters/{id}/deactivate'
    }),
    listEventSummaries: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing/meters/{id}/event_summaries',
        methodType: 'list'
    }),
    reactivate: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing/meters/{id}/reactivate'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Climate/Orders.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Orders": (()=>Orders)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Orders = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/climate/orders'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/climate/orders/{order}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/climate/orders/{order}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/climate/orders',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/climate/orders/{order}/cancel'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/OutboundPayments.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "OutboundPayments": (()=>OutboundPayments)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const OutboundPayments = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}'
    }),
    fail: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/fail'
    }),
    post: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/post'
    }),
    returnOutboundPayment: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/return'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/OutboundPayments.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "OutboundPayments": (()=>OutboundPayments)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const OutboundPayments = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/outbound_payments'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/outbound_payments/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/outbound_payments',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/outbound_payments/{id}/cancel'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/OutboundTransfers.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "OutboundTransfers": (()=>OutboundTransfers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const OutboundTransfers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}'
    }),
    fail: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail'
    }),
    post: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post'
    }),
    returnOutboundTransfer: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/OutboundTransfers.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "OutboundTransfers": (()=>OutboundTransfers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const OutboundTransfers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/outbound_transfers'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/outbound_transfers/{outbound_transfer}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/outbound_transfers',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/outbound_transfers/{outbound_transfer}/cancel'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Issuing/PersonalizationDesigns.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "PersonalizationDesigns": (()=>PersonalizationDesigns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const PersonalizationDesigns = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    activate: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate'
    }),
    deactivate: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate'
    }),
    reject: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/PersonalizationDesigns.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "PersonalizationDesigns": (()=>PersonalizationDesigns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const PersonalizationDesigns = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/personalization_designs'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/personalization_designs/{personalization_design}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/personalization_designs/{personalization_design}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/personalization_designs',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/PhysicalBundles.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "PhysicalBundles": (()=>PhysicalBundles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const PhysicalBundles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/physical_bundles/{physical_bundle}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/physical_bundles',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Climate/Products.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Products": (()=>Products)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Products = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/climate/products/{product}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/climate/products',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Terminal/Readers.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Readers": (()=>Readers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Readers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    presentPaymentMethod: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/terminal/readers/{reader}/present_payment_method'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Terminal/Readers.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Readers": (()=>Readers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Readers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/terminal/readers/{reader}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/terminal/readers',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/terminal/readers/{reader}'
    }),
    cancelAction: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/cancel_action'
    }),
    processPaymentIntent: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/process_payment_intent'
    }),
    processSetupIntent: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/process_setup_intent'
    }),
    refundPayment: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/refund_payment'
    }),
    setReaderDisplay: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/readers/{reader}/set_reader_display'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/ReceivedCredits.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "ReceivedCredits": (()=>ReceivedCredits)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ReceivedCredits = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/received_credits'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/ReceivedCredits.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "ReceivedCredits": (()=>ReceivedCredits)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ReceivedCredits = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/received_credits/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/received_credits',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/ReceivedDebits.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "ReceivedDebits": (()=>ReceivedDebits)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ReceivedDebits = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/received_debits'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/ReceivedDebits.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "ReceivedDebits": (()=>ReceivedDebits)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ReceivedDebits = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/received_debits/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/received_debits',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Refunds.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Refunds": (()=>Refunds)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Refunds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    expire: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/refunds/{refund}/expire'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Tax/Registrations.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Registrations": (()=>Registrations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Registrations = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax/registrations'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/registrations/{id}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax/registrations/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/registrations',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Reporting/ReportRuns.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "ReportRuns": (()=>ReportRuns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ReportRuns = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/reporting/report_runs'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/reporting/report_runs/{report_run}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/reporting/report_runs',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Reporting/ReportTypes.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "ReportTypes": (()=>ReportTypes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ReportTypes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/reporting/report_types/{report_type}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/reporting/report_types',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Forwarding/Requests.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Requests": (()=>Requests)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Requests = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/forwarding/requests'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/forwarding/requests/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/forwarding/requests',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Sigma/ScheduledQueryRuns.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "ScheduledQueryRuns": (()=>ScheduledQueryRuns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ScheduledQueryRuns = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/sigma/scheduled_query_runs/{scheduled_query_run}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/sigma/scheduled_query_runs',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Apps/Secrets.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Secrets": (()=>Secrets)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Secrets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/apps/secrets'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/apps/secrets',
        methodType: 'list'
    }),
    deleteWhere: stripeMethod({
        method: 'POST',
        fullPath: '/v1/apps/secrets/delete'
    }),
    find: stripeMethod({
        method: 'GET',
        fullPath: '/v1/apps/secrets/find'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/BillingPortal/Sessions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Sessions": (()=>Sessions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Sessions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing_portal/sessions'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Checkout/Sessions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Sessions": (()=>Sessions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Sessions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/checkout/sessions'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/checkout/sessions/{session}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/checkout/sessions/{session}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/checkout/sessions',
        methodType: 'list'
    }),
    expire: stripeMethod({
        method: 'POST',
        fullPath: '/v1/checkout/sessions/{session}/expire'
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/checkout/sessions/{session}/line_items',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/FinancialConnections/Sessions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Sessions": (()=>Sessions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Sessions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/financial_connections/sessions'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/sessions/{session}'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Tax/Settings.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Settings": (()=>Settings)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Settings = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/settings'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax/settings'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Climate/Suppliers.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Suppliers": (()=>Suppliers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Suppliers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/climate/suppliers/{supplier}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/climate/suppliers',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/TestClocks.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "TestClocks": (()=>TestClocks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const TestClocks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/test_clocks'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/test_helpers/test_clocks/{test_clock}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/test_helpers/test_clocks',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/test_helpers/test_clocks/{test_clock}'
    }),
    advance: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/test_clocks/{test_clock}/advance'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/Tokens.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Tokens": (()=>Tokens)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Tokens = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/tokens/{token}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/tokens/{token}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/tokens',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/TransactionEntries.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "TransactionEntries": (()=>TransactionEntries)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const TransactionEntries = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/transaction_entries/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/transaction_entries',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Issuing/Transactions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Transactions": (()=>Transactions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Transactions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    createForceCapture: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/transactions/create_force_capture'
    }),
    createUnlinkedRefund: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/transactions/create_unlinked_refund'
    }),
    refund: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/transactions/{transaction}/refund'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/FinancialConnections/Transactions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Transactions": (()=>Transactions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Transactions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/transactions/{transaction}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/transactions',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/Transactions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Transactions": (()=>Transactions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Transactions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/transactions/{transaction}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/transactions/{transaction}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/transactions',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Tax/Transactions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Transactions": (()=>Transactions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Transactions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/transactions/{transaction}'
    }),
    createFromCalculation: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax/transactions/create_from_calculation'
    }),
    createReversal: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax/transactions/create_reversal'
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/transactions/{transaction}/line_items',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/Transactions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Transactions": (()=>Transactions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Transactions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/transactions/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/transactions',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Radar/ValueListItems.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "ValueListItems": (()=>ValueListItems)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ValueListItems = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/radar/value_list_items'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/radar/value_list_items/{item}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/radar/value_list_items',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/radar/value_list_items/{item}'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Radar/ValueLists.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "ValueLists": (()=>ValueLists)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ValueLists = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/radar/value_lists'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/radar/value_lists/{value_list}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/radar/value_lists/{value_list}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/radar/value_lists',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/radar/value_lists/{value_list}'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Identity/VerificationReports.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "VerificationReports": (()=>VerificationReports)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const VerificationReports = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/identity/verification_reports/{report}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/identity/verification_reports',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Identity/VerificationSessions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "VerificationSessions": (()=>VerificationSessions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const VerificationSessions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/identity/verification_sessions'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/identity/verification_sessions/{session}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/identity/verification_sessions/{session}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/identity/verification_sessions',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/identity/verification_sessions/{session}/cancel'
    }),
    redact: stripeMethod({
        method: 'POST',
        fullPath: '/v1/identity/verification_sessions/{session}/redact'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Accounts.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Accounts": (()=>Accounts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Accounts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts'
    }),
    retrieve (id, ...args) {
        // No longer allow an api key to be passed as the first string to this function due to ambiguity between
        // old account ids and api keys. To request the account for an api key, send null as the id
        if (typeof id === 'string') {
            return stripeMethod({
                method: 'GET',
                fullPath: '/v1/accounts/{id}'
            }).apply(this, [
                id,
                ...args
            ]);
        } else {
            if (id === null || id === undefined) {
                // Remove id as stripeMethod would complain of unexpected argument
                [].shift.apply([
                    id,
                    ...args
                ]);
            }
            return stripeMethod({
                method: 'GET',
                fullPath: '/v1/account'
            }).apply(this, [
                id,
                ...args
            ]);
        }
    },
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/accounts/{account}'
    }),
    createExternalAccount: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/external_accounts'
    }),
    createLoginLink: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/login_links'
    }),
    createPerson: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/persons'
    }),
    deleteExternalAccount: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/accounts/{account}/external_accounts/{id}'
    }),
    deletePerson: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/accounts/{account}/persons/{person}'
    }),
    listCapabilities: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/capabilities',
        methodType: 'list'
    }),
    listExternalAccounts: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/external_accounts',
        methodType: 'list'
    }),
    listPersons: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/persons',
        methodType: 'list'
    }),
    reject: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/reject'
    }),
    retrieveCurrent: stripeMethod({
        method: 'GET',
        fullPath: '/v1/account'
    }),
    retrieveCapability: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/capabilities/{capability}'
    }),
    retrieveExternalAccount: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/external_accounts/{id}'
    }),
    retrievePerson: stripeMethod({
        method: 'GET',
        fullPath: '/v1/accounts/{account}/persons/{person}'
    }),
    updateCapability: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/capabilities/{capability}'
    }),
    updateExternalAccount: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/external_accounts/{id}'
    }),
    updatePerson: stripeMethod({
        method: 'POST',
        fullPath: '/v1/accounts/{account}/persons/{person}'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/AccountLinks.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "AccountLinks": (()=>AccountLinks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const AccountLinks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/account_links'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/AccountSessions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "AccountSessions": (()=>AccountSessions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const AccountSessions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/account_sessions'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/ApplePayDomains.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "ApplePayDomains": (()=>ApplePayDomains)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ApplePayDomains = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/apple_pay/domains'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/apple_pay/domains/{domain}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/apple_pay/domains',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/apple_pay/domains/{domain}'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/ApplicationFees.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "ApplicationFees": (()=>ApplicationFees)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ApplicationFees = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/application_fees/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/application_fees',
        methodType: 'list'
    }),
    createRefund: stripeMethod({
        method: 'POST',
        fullPath: '/v1/application_fees/{id}/refunds'
    }),
    listRefunds: stripeMethod({
        method: 'GET',
        fullPath: '/v1/application_fees/{id}/refunds',
        methodType: 'list'
    }),
    retrieveRefund: stripeMethod({
        method: 'GET',
        fullPath: '/v1/application_fees/{fee}/refunds/{id}'
    }),
    updateRefund: stripeMethod({
        method: 'POST',
        fullPath: '/v1/application_fees/{fee}/refunds/{id}'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Balance.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Balance": (()=>Balance)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Balance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/balance'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/BalanceTransactions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "BalanceTransactions": (()=>BalanceTransactions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const BalanceTransactions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/balance_transactions/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/balance_transactions',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Charges.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Charges": (()=>Charges)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Charges = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/charges'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/charges/{charge}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/charges/{charge}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/charges',
        methodType: 'list'
    }),
    capture: stripeMethod({
        method: 'POST',
        fullPath: '/v1/charges/{charge}/capture'
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/charges/search',
        methodType: 'search'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/ConfirmationTokens.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "ConfirmationTokens": (()=>ConfirmationTokens)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ConfirmationTokens = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/confirmation_tokens/{confirmation_token}'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/CountrySpecs.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "CountrySpecs": (()=>CountrySpecs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const CountrySpecs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/country_specs/{country}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/country_specs',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Coupons.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Coupons": (()=>Coupons)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Coupons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/coupons'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/coupons/{coupon}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/coupons/{coupon}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/coupons',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/coupons/{coupon}'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/CreditNotes.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "CreditNotes": (()=>CreditNotes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const CreditNotes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/credit_notes'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/credit_notes/{id}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/credit_notes/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/credit_notes',
        methodType: 'list'
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/credit_notes/{credit_note}/lines',
        methodType: 'list'
    }),
    listPreviewLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/credit_notes/preview/lines',
        methodType: 'list'
    }),
    preview: stripeMethod({
        method: 'GET',
        fullPath: '/v1/credit_notes/preview'
    }),
    voidCreditNote: stripeMethod({
        method: 'POST',
        fullPath: '/v1/credit_notes/{id}/void'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/CustomerSessions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "CustomerSessions": (()=>CustomerSessions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const CustomerSessions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customer_sessions'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Customers.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Customers": (()=>Customers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Customers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}'
    }),
    createBalanceTransaction: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/balance_transactions'
    }),
    createFundingInstructions: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/funding_instructions'
    }),
    createSource: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/sources'
    }),
    createTaxId: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/tax_ids'
    }),
    deleteDiscount: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}/discount'
    }),
    deleteSource: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}/sources/{id}'
    }),
    deleteTaxId: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/customers/{customer}/tax_ids/{id}'
    }),
    listBalanceTransactions: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/balance_transactions',
        methodType: 'list'
    }),
    listCashBalanceTransactions: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/cash_balance_transactions',
        methodType: 'list'
    }),
    listPaymentMethods: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/payment_methods',
        methodType: 'list'
    }),
    listSources: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/sources',
        methodType: 'list'
    }),
    listTaxIds: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/tax_ids',
        methodType: 'list'
    }),
    retrieveBalanceTransaction: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/balance_transactions/{transaction}'
    }),
    retrieveCashBalance: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/cash_balance'
    }),
    retrieveCashBalanceTransaction: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/cash_balance_transactions/{transaction}'
    }),
    retrievePaymentMethod: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/payment_methods/{payment_method}'
    }),
    retrieveSource: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/sources/{id}'
    }),
    retrieveTaxId: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/{customer}/tax_ids/{id}'
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/customers/search',
        methodType: 'search'
    }),
    updateBalanceTransaction: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/balance_transactions/{transaction}'
    }),
    updateCashBalance: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/cash_balance'
    }),
    updateSource: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/sources/{id}'
    }),
    verifySource: stripeMethod({
        method: 'POST',
        fullPath: '/v1/customers/{customer}/sources/{id}/verify'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Disputes.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Disputes": (()=>Disputes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Disputes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/disputes/{dispute}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/disputes/{dispute}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/disputes',
        methodType: 'list'
    }),
    close: stripeMethod({
        method: 'POST',
        fullPath: '/v1/disputes/{dispute}/close'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/EphemeralKeys.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "EphemeralKeys": (()=>EphemeralKeys)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const EphemeralKeys = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/ephemeral_keys',
        validator: (data, options)=>{
            if (!options.headers || !options.headers['Stripe-Version']) {
                throw new Error('Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node');
            }
        }
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/ephemeral_keys/{key}'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Events.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Events": (()=>Events)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Events = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/events/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/events',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/ExchangeRates.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "ExchangeRates": (()=>ExchangeRates)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ExchangeRates = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/exchange_rates/{rate_id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/exchange_rates',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/FileLinks.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "FileLinks": (()=>FileLinks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const FileLinks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/file_links'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/file_links/{link}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/file_links/{link}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/file_links',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/multipart.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "multipartRequestDataProcessor": (()=>multipartRequestDataProcessor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/utils.js [app-rsc] (ecmascript)");
;
// Method for formatting HTTP body for the multipart/form-data specification
// Mostly taken from Fermata.js
// https://github.com/natevw/fermata/blob/5d9732a33d776ce925013a265935facd1626cc88/fermata.js#L315-L343
const multipartDataGenerator = (method, data, headers)=>{
    const segno = (Math.round(Math.random() * 1e16) + Math.round(Math.random() * 1e16)).toString();
    headers['Content-Type'] = `multipart/form-data; boundary=${segno}`;
    const textEncoder = new TextEncoder();
    let buffer = new Uint8Array(0);
    const endBuffer = textEncoder.encode('\r\n');
    function push(l) {
        const prevBuffer = buffer;
        const newBuffer = l instanceof Uint8Array ? l : new Uint8Array(textEncoder.encode(l));
        buffer = new Uint8Array(prevBuffer.length + newBuffer.length + 2);
        buffer.set(prevBuffer);
        buffer.set(newBuffer, prevBuffer.length);
        buffer.set(endBuffer, buffer.length - 2);
    }
    function q(s) {
        return `"${s.replace(/"|"/g, '%22').replace(/\r\n|\r|\n/g, ' ')}"`;
    }
    const flattenedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flattenAndStringify"])(data);
    for(const k in flattenedData){
        if (!Object.prototype.hasOwnProperty.call(flattenedData, k)) {
            continue;
        }
        const v = flattenedData[k];
        push(`--${segno}`);
        if (Object.prototype.hasOwnProperty.call(v, 'data')) {
            const typedEntry = v;
            push(`Content-Disposition: form-data; name=${q(k)}; filename=${q(typedEntry.name || 'blob')}`);
            push(`Content-Type: ${typedEntry.type || 'application/octet-stream'}`);
            push('');
            push(typedEntry.data);
        } else {
            push(`Content-Disposition: form-data; name=${q(k)}`);
            push('');
            push(v);
        }
    }
    push(`--${segno}--`);
    return buffer;
};
function multipartRequestDataProcessor(method, data, headers, callback) {
    data = data || {};
    if (method !== 'POST') {
        return callback(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringifyRequestData"])(data));
    }
    this._stripe._platformFunctions.tryBufferData(data).then((bufferedData)=>{
        const buffer = multipartDataGenerator(method, bufferedData, headers);
        return callback(null, buffer);
    }).catch((err)=>callback(err, null));
}
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Files.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Files": (()=>Files)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$multipart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/multipart.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Files = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/files',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        host: 'files.stripe.com'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/files/{file}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/files',
        methodType: 'list'
    }),
    requestDataProcessor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$multipart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["multipartRequestDataProcessor"]
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/InvoiceItems.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "InvoiceItems": (()=>InvoiceItems)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const InvoiceItems = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoiceitems'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoiceitems/{invoiceitem}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoiceitems/{invoiceitem}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoiceitems',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/invoiceitems/{invoiceitem}'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/InvoiceRenderingTemplates.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "InvoiceRenderingTemplates": (()=>InvoiceRenderingTemplates)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const InvoiceRenderingTemplates = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoice_rendering_templates/{template}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoice_rendering_templates',
        methodType: 'list'
    }),
    archive: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoice_rendering_templates/{template}/archive'
    }),
    unarchive: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoice_rendering_templates/{template}/unarchive'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Invoices.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Invoices": (()=>Invoices)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Invoices = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoices/{invoice}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoices',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/invoices/{invoice}'
    }),
    addLines: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/add_lines'
    }),
    createPreview: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/create_preview'
    }),
    finalizeInvoice: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/finalize'
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoices/{invoice}/lines',
        methodType: 'list'
    }),
    listUpcomingLines: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoices/upcoming/lines',
        methodType: 'list'
    }),
    markUncollectible: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/mark_uncollectible'
    }),
    pay: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/pay'
    }),
    removeLines: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/remove_lines'
    }),
    retrieveUpcoming: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoices/upcoming'
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoices/search',
        methodType: 'search'
    }),
    sendInvoice: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/send'
    }),
    updateLines: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/update_lines'
    }),
    updateLineItem: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/lines/{line_item_id}'
    }),
    voidInvoice: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoices/{invoice}/void'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Mandates.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Mandates": (()=>Mandates)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Mandates = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/mandates/{mandate}'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/OAuth.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "OAuth": (()=>OAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/utils.js [app-rsc] (ecmascript)");
'use strict';
;
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const oAuthHost = 'connect.stripe.com';
const OAuth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    basePath: '/',
    authorizeUrl (params, options) {
        params = params || {};
        options = options || {};
        let path = 'oauth/authorize';
        // For Express accounts, the path changes
        if (options.express) {
            path = `express/${path}`;
        }
        if (!params.response_type) {
            params.response_type = 'code';
        }
        if (!params.client_id) {
            params.client_id = this._stripe.getClientId();
        }
        if (!params.scope) {
            params.scope = 'read_write';
        }
        return `https://${oAuthHost}/${path}?${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringifyRequestData"])(params)}`;
    },
    token: stripeMethod({
        method: 'POST',
        path: 'oauth/token',
        host: oAuthHost
    }),
    deauthorize (spec, ...args) {
        if (!spec.client_id) {
            spec.client_id = this._stripe.getClientId();
        }
        return stripeMethod({
            method: 'POST',
            path: 'oauth/deauthorize',
            host: oAuthHost
        }).apply(this, [
            spec,
            ...args
        ]);
    }
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/PaymentIntents.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "PaymentIntents": (()=>PaymentIntents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const PaymentIntents = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_intents/{intent}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_intents',
        methodType: 'list'
    }),
    applyCustomerBalance: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/apply_customer_balance'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/cancel'
    }),
    capture: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/capture'
    }),
    confirm: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/confirm'
    }),
    incrementAuthorization: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/increment_authorization'
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_intents/search',
        methodType: 'search'
    }),
    verifyMicrodeposits: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_intents/{intent}/verify_microdeposits'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/PaymentLinks.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "PaymentLinks": (()=>PaymentLinks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const PaymentLinks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_links'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_links/{payment_link}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_links/{payment_link}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_links',
        methodType: 'list'
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_links/{payment_link}/line_items',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/PaymentMethodConfigurations.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "PaymentMethodConfigurations": (()=>PaymentMethodConfigurations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const PaymentMethodConfigurations = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_method_configurations'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_method_configurations/{configuration}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_method_configurations/{configuration}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_method_configurations',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/PaymentMethodDomains.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "PaymentMethodDomains": (()=>PaymentMethodDomains)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const PaymentMethodDomains = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_method_domains'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_method_domains/{payment_method_domain}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_method_domains/{payment_method_domain}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_method_domains',
        methodType: 'list'
    }),
    validate: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_method_domains/{payment_method_domain}/validate'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/PaymentMethods.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "PaymentMethods": (()=>PaymentMethods)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const PaymentMethods = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_methods'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_methods/{payment_method}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_methods/{payment_method}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payment_methods',
        methodType: 'list'
    }),
    attach: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_methods/{payment_method}/attach'
    }),
    detach: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payment_methods/{payment_method}/detach'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Payouts.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Payouts": (()=>Payouts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Payouts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payouts'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payouts/{payout}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payouts/{payout}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payouts',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payouts/{payout}/cancel'
    }),
    reverse: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payouts/{payout}/reverse'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Plans.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Plans": (()=>Plans)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Plans = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/plans'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/plans/{plan}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/plans/{plan}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/plans',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/plans/{plan}'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Prices.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Prices": (()=>Prices)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Prices = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/prices'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/prices/{price}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/prices/{price}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/prices',
        methodType: 'list'
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/prices/search',
        methodType: 'search'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Products.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Products": (()=>Products)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Products = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/products'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/products/{id}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/products/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/products',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/products/{id}'
    }),
    createFeature: stripeMethod({
        method: 'POST',
        fullPath: '/v1/products/{product}/features'
    }),
    deleteFeature: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/products/{product}/features/{id}'
    }),
    listFeatures: stripeMethod({
        method: 'GET',
        fullPath: '/v1/products/{product}/features',
        methodType: 'list'
    }),
    retrieveFeature: stripeMethod({
        method: 'GET',
        fullPath: '/v1/products/{product}/features/{id}'
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/products/search',
        methodType: 'search'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/PromotionCodes.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "PromotionCodes": (()=>PromotionCodes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const PromotionCodes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/promotion_codes'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/promotion_codes/{promotion_code}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/promotion_codes/{promotion_code}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/promotion_codes',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Quotes.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Quotes": (()=>Quotes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Quotes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/quotes'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/quotes/{quote}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/quotes/{quote}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/quotes',
        methodType: 'list'
    }),
    accept: stripeMethod({
        method: 'POST',
        fullPath: '/v1/quotes/{quote}/accept'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/quotes/{quote}/cancel'
    }),
    finalizeQuote: stripeMethod({
        method: 'POST',
        fullPath: '/v1/quotes/{quote}/finalize'
    }),
    listComputedUpfrontLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/quotes/{quote}/computed_upfront_line_items',
        methodType: 'list'
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/quotes/{quote}/line_items',
        methodType: 'list'
    }),
    pdf: stripeMethod({
        method: 'GET',
        fullPath: '/v1/quotes/{quote}/pdf',
        host: 'files.stripe.com',
        streaming: true
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Refunds.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Refunds": (()=>Refunds)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Refunds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/refunds'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/refunds/{refund}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/refunds/{refund}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/refunds',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/refunds/{refund}/cancel'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Reviews.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Reviews": (()=>Reviews)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Reviews = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/reviews/{review}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/reviews',
        methodType: 'list'
    }),
    approve: stripeMethod({
        method: 'POST',
        fullPath: '/v1/reviews/{review}/approve'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/SetupAttempts.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "SetupAttempts": (()=>SetupAttempts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const SetupAttempts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/setup_attempts',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/SetupIntents.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "SetupIntents": (()=>SetupIntents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const SetupIntents = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/setup_intents'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/setup_intents/{intent}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/setup_intents/{intent}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/setup_intents',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/setup_intents/{intent}/cancel'
    }),
    confirm: stripeMethod({
        method: 'POST',
        fullPath: '/v1/setup_intents/{intent}/confirm'
    }),
    verifyMicrodeposits: stripeMethod({
        method: 'POST',
        fullPath: '/v1/setup_intents/{intent}/verify_microdeposits'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/ShippingRates.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "ShippingRates": (()=>ShippingRates)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const ShippingRates = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/shipping_rates'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/shipping_rates/{shipping_rate_token}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/shipping_rates/{shipping_rate_token}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/shipping_rates',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Sources.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Sources": (()=>Sources)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Sources = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/sources'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/sources/{source}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/sources/{source}'
    }),
    listSourceTransactions: stripeMethod({
        method: 'GET',
        fullPath: '/v1/sources/{source}/source_transactions',
        methodType: 'list'
    }),
    verify: stripeMethod({
        method: 'POST',
        fullPath: '/v1/sources/{source}/verify'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/SubscriptionItems.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "SubscriptionItems": (()=>SubscriptionItems)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const SubscriptionItems = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_items'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscription_items/{item}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_items/{item}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscription_items',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/subscription_items/{item}'
    }),
    createUsageRecord: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_items/{subscription_item}/usage_records'
    }),
    listUsageRecordSummaries: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscription_items/{subscription_item}/usage_record_summaries',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/SubscriptionSchedules.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "SubscriptionSchedules": (()=>SubscriptionSchedules)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const SubscriptionSchedules = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_schedules'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscription_schedules/{schedule}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_schedules/{schedule}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscription_schedules',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_schedules/{schedule}/cancel'
    }),
    release: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_schedules/{schedule}/release'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Subscriptions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Subscriptions": (()=>Subscriptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Subscriptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscriptions'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscriptions/{subscription_exposed_id}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscriptions/{subscription_exposed_id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscriptions',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/subscriptions/{subscription_exposed_id}'
    }),
    deleteDiscount: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/subscriptions/{subscription_exposed_id}/discount'
    }),
    resume: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscriptions/{subscription}/resume'
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscriptions/search',
        methodType: 'search'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TaxCodes.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "TaxCodes": (()=>TaxCodes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const TaxCodes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax_codes/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax_codes',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TaxIds.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "TaxIds": (()=>TaxIds)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const TaxIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax_ids'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax_ids/{id}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax_ids',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/tax_ids/{id}'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TaxRates.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "TaxRates": (()=>TaxRates)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const TaxRates = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax_rates'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax_rates/{tax_rate}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax_rates/{tax_rate}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax_rates',
        methodType: 'list'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Tokens.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Tokens": (()=>Tokens)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Tokens = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tokens'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tokens/{token}'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Topups.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Topups": (()=>Topups)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Topups = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/topups'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/topups/{topup}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/topups/{topup}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/topups',
        methodType: 'list'
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/topups/{topup}/cancel'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Transfers.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Transfers": (()=>Transfers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const Transfers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/transfers'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/transfers/{transfer}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/transfers/{transfer}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/transfers',
        methodType: 'list'
    }),
    createReversal: stripeMethod({
        method: 'POST',
        fullPath: '/v1/transfers/{id}/reversals'
    }),
    listReversals: stripeMethod({
        method: 'GET',
        fullPath: '/v1/transfers/{id}/reversals',
        methodType: 'list'
    }),
    retrieveReversal: stripeMethod({
        method: 'GET',
        fullPath: '/v1/transfers/{transfer}/reversals/{id}'
    }),
    updateReversal: stripeMethod({
        method: 'POST',
        fullPath: '/v1/transfers/{transfer}/reversals/{id}'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/WebhookEndpoints.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "WebhookEndpoints": (()=>WebhookEndpoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
;
const stripeMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].method;
const WebhookEndpoints = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/webhook_endpoints'
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/webhook_endpoints/{webhook_endpoint}'
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/webhook_endpoints/{webhook_endpoint}'
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/webhook_endpoints',
        methodType: 'list'
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/webhook_endpoints/{webhook_endpoint}'
    })
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File generated from our OpenAPI spec
__turbopack_esm__({
    "Apps": (()=>Apps),
    "Billing": (()=>Billing),
    "BillingPortal": (()=>BillingPortal),
    "Checkout": (()=>Checkout),
    "Climate": (()=>Climate),
    "Entitlements": (()=>Entitlements),
    "FinancialConnections": (()=>FinancialConnections),
    "Forwarding": (()=>Forwarding),
    "Identity": (()=>Identity),
    "Issuing": (()=>Issuing),
    "Radar": (()=>Radar),
    "Reporting": (()=>Reporting),
    "Sigma": (()=>Sigma),
    "Tax": (()=>Tax),
    "Terminal": (()=>Terminal),
    "TestHelpers": (()=>TestHelpers),
    "Treasury": (()=>Treasury)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/ResourceNamespace.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Apps$2f$Secrets$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Apps/Secrets.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$Alerts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Billing/Alerts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$MeterEventAdjustments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Billing/MeterEventAdjustments.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$MeterEvents$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Billing/MeterEvents.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$Meters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Billing/Meters.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$BillingPortal$2f$Configurations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/BillingPortal/Configurations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$BillingPortal$2f$Sessions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/BillingPortal/Sessions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Checkout$2f$Sessions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Checkout/Sessions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Climate$2f$Orders$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Climate/Orders.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Climate$2f$Products$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Climate/Products.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Climate$2f$Suppliers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Climate/Suppliers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Entitlements$2f$ActiveEntitlements$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Entitlements/ActiveEntitlements.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Entitlements$2f$Features$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Entitlements/Features.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FinancialConnections$2f$Accounts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/FinancialConnections/Accounts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FinancialConnections$2f$Sessions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/FinancialConnections/Sessions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FinancialConnections$2f$Transactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/FinancialConnections/Transactions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Forwarding$2f$Requests$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Forwarding/Requests.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Identity$2f$VerificationReports$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Identity/VerificationReports.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Identity$2f$VerificationSessions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Identity/VerificationSessions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Authorizations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/Authorizations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Cardholders$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/Cardholders.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Cards$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/Cards.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Disputes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/Disputes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$PersonalizationDesigns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/PersonalizationDesigns.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$PhysicalBundles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/PhysicalBundles.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Tokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/Tokens.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Transactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/Transactions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Radar$2f$EarlyFraudWarnings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Radar/EarlyFraudWarnings.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Radar$2f$ValueListItems$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Radar/ValueListItems.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Radar$2f$ValueLists$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Radar/ValueLists.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Reporting$2f$ReportRuns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Reporting/ReportRuns.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Reporting$2f$ReportTypes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Reporting/ReportTypes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Sigma$2f$ScheduledQueryRuns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Sigma/ScheduledQueryRuns.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Calculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Tax/Calculations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Registrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Tax/Registrations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Settings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Tax/Settings.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Transactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Tax/Transactions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$Configurations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Terminal/Configurations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$ConnectionTokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Terminal/ConnectionTokens.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$Locations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Terminal/Locations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$Readers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Terminal/Readers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$ConfirmationTokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/ConfirmationTokens.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Customers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Customers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Refunds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Refunds.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$TestClocks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/TestClocks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$Authorizations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Issuing/Authorizations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$Cards$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Issuing/Cards.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$PersonalizationDesigns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Issuing/PersonalizationDesigns.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$Transactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Issuing/Transactions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Terminal$2f$Readers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Terminal/Readers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$InboundTransfers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/InboundTransfers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$OutboundPayments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/OutboundPayments.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$OutboundTransfers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/OutboundTransfers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$ReceivedCredits$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/ReceivedCredits.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$ReceivedDebits$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/ReceivedDebits.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$CreditReversals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/CreditReversals.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$DebitReversals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/DebitReversals.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$FinancialAccounts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/FinancialAccounts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$InboundTransfers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/InboundTransfers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$OutboundPayments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/OutboundPayments.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$OutboundTransfers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/OutboundTransfers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$ReceivedCredits$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/ReceivedCredits.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$ReceivedDebits$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/ReceivedDebits.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$TransactionEntries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/TransactionEntries.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$Transactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/Transactions.js [app-rsc] (ecmascript)");
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
;
;
;
;
;
const Apps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('apps', {
    Secrets: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Apps$2f$Secrets$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Secrets"]
});
const Billing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('billing', {
    Alerts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$Alerts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Alerts"],
    MeterEventAdjustments: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$MeterEventAdjustments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MeterEventAdjustments"],
    MeterEvents: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$MeterEvents$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MeterEvents"],
    Meters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$Meters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Meters"]
});
const BillingPortal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('billingPortal', {
    Configurations: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$BillingPortal$2f$Configurations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Configurations"],
    Sessions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$BillingPortal$2f$Sessions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Sessions"]
});
const Checkout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('checkout', {
    Sessions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Checkout$2f$Sessions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Sessions"]
});
const Climate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('climate', {
    Orders: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Climate$2f$Orders$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Orders"],
    Products: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Climate$2f$Products$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Products"],
    Suppliers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Climate$2f$Suppliers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suppliers"]
});
const Entitlements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('entitlements', {
    ActiveEntitlements: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Entitlements$2f$ActiveEntitlements$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ActiveEntitlements"],
    Features: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Entitlements$2f$Features$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Features"]
});
const FinancialConnections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('financialConnections', {
    Accounts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FinancialConnections$2f$Accounts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Accounts"],
    Sessions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FinancialConnections$2f$Sessions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Sessions"],
    Transactions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FinancialConnections$2f$Transactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Transactions"]
});
const Forwarding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('forwarding', {
    Requests: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Forwarding$2f$Requests$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Requests"]
});
const Identity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('identity', {
    VerificationReports: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Identity$2f$VerificationReports$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VerificationReports"],
    VerificationSessions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Identity$2f$VerificationSessions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VerificationSessions"]
});
const Issuing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('issuing', {
    Authorizations: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Authorizations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Authorizations"],
    Cardholders: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Cardholders$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Cardholders"],
    Cards: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Cards$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Cards"],
    Disputes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Disputes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Disputes"],
    PersonalizationDesigns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$PersonalizationDesigns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PersonalizationDesigns"],
    PhysicalBundles: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$PhysicalBundles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PhysicalBundles"],
    Tokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Tokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tokens"],
    Transactions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Transactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Transactions"]
});
const Radar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('radar', {
    EarlyFraudWarnings: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Radar$2f$EarlyFraudWarnings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EarlyFraudWarnings"],
    ValueListItems: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Radar$2f$ValueListItems$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValueListItems"],
    ValueLists: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Radar$2f$ValueLists$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValueLists"]
});
const Reporting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('reporting', {
    ReportRuns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Reporting$2f$ReportRuns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReportRuns"],
    ReportTypes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Reporting$2f$ReportTypes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReportTypes"]
});
const Sigma = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('sigma', {
    ScheduledQueryRuns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Sigma$2f$ScheduledQueryRuns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ScheduledQueryRuns"]
});
const Tax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('tax', {
    Calculations: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Calculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Calculations"],
    Registrations: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Registrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Registrations"],
    Settings: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Settings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Settings"],
    Transactions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Transactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Transactions"]
});
const Terminal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('terminal', {
    Configurations: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$Configurations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Configurations"],
    ConnectionTokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$ConnectionTokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectionTokens"],
    Locations: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$Locations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Locations"],
    Readers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$Readers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Readers"]
});
const TestHelpers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('testHelpers', {
    ConfirmationTokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$ConfirmationTokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConfirmationTokens"],
    Customers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Customers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Customers"],
    Refunds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Refunds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Refunds"],
    TestClocks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$TestClocks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TestClocks"],
    Issuing: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('issuing', {
        Authorizations: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$Authorizations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Authorizations"],
        Cards: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$Cards$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Cards"],
        PersonalizationDesigns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$PersonalizationDesigns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PersonalizationDesigns"],
        Transactions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$Transactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Transactions"]
    }),
    Terminal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('terminal', {
        Readers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Terminal$2f$Readers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Readers"]
    }),
    Treasury: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('treasury', {
        InboundTransfers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$InboundTransfers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InboundTransfers"],
        OutboundPayments: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$OutboundPayments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OutboundPayments"],
        OutboundTransfers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$OutboundTransfers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OutboundTransfers"],
        ReceivedCredits: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$ReceivedCredits$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReceivedCredits"],
        ReceivedDebits: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$ReceivedDebits$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReceivedDebits"]
    })
});
const Treasury = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resourceNamespace"])('treasury', {
    CreditReversals: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$CreditReversals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CreditReversals"],
    DebitReversals: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$DebitReversals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DebitReversals"],
    FinancialAccounts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$FinancialAccounts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FinancialAccounts"],
    InboundTransfers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$InboundTransfers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InboundTransfers"],
    OutboundPayments: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$OutboundPayments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OutboundPayments"],
    OutboundTransfers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$OutboundTransfers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OutboundTransfers"],
    ReceivedCredits: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$ReceivedCredits$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReceivedCredits"],
    ReceivedDebits: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$ReceivedDebits$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReceivedDebits"],
    TransactionEntries: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$TransactionEntries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TransactionEntries"],
    Transactions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$Transactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Transactions"]
});
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$ResourceNamespace$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/ResourceNamespace.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FinancialConnections$2f$Accounts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/FinancialConnections/Accounts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Entitlements$2f$ActiveEntitlements$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Entitlements/ActiveEntitlements.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$Alerts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Billing/Alerts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$Authorizations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Issuing/Authorizations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Authorizations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/Authorizations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Calculations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Tax/Calculations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Cardholders$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/Cardholders.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$Cards$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Issuing/Cards.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Cards$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/Cards.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$BillingPortal$2f$Configurations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/BillingPortal/Configurations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$Configurations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Terminal/Configurations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$ConfirmationTokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/ConfirmationTokens.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$ConnectionTokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Terminal/ConnectionTokens.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$CreditReversals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/CreditReversals.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Customers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Customers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$DebitReversals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/DebitReversals.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Disputes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/Disputes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Radar$2f$EarlyFraudWarnings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Radar/EarlyFraudWarnings.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Entitlements$2f$Features$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Entitlements/Features.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$FinancialAccounts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/FinancialAccounts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$InboundTransfers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/InboundTransfers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$InboundTransfers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/InboundTransfers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$Locations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Terminal/Locations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$MeterEventAdjustments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Billing/MeterEventAdjustments.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$MeterEvents$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Billing/MeterEvents.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Billing$2f$Meters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Billing/Meters.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Climate$2f$Orders$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Climate/Orders.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$OutboundPayments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/OutboundPayments.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$OutboundPayments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/OutboundPayments.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$OutboundTransfers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/OutboundTransfers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$OutboundTransfers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/OutboundTransfers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$PersonalizationDesigns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Issuing/PersonalizationDesigns.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$PersonalizationDesigns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/PersonalizationDesigns.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$PhysicalBundles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/PhysicalBundles.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Climate$2f$Products$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Climate/Products.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Terminal$2f$Readers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Terminal/Readers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Terminal$2f$Readers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Terminal/Readers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$ReceivedCredits$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/ReceivedCredits.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$ReceivedCredits$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/ReceivedCredits.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Treasury$2f$ReceivedDebits$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/ReceivedDebits.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$ReceivedDebits$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/ReceivedDebits.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Refunds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Refunds.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Registrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Tax/Registrations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Reporting$2f$ReportRuns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Reporting/ReportRuns.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Reporting$2f$ReportTypes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Reporting/ReportTypes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Forwarding$2f$Requests$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Forwarding/Requests.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Sigma$2f$ScheduledQueryRuns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Sigma/ScheduledQueryRuns.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Apps$2f$Secrets$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Apps/Secrets.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$BillingPortal$2f$Sessions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/BillingPortal/Sessions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Checkout$2f$Sessions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Checkout/Sessions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FinancialConnections$2f$Sessions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/FinancialConnections/Sessions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Settings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Tax/Settings.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Climate$2f$Suppliers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Climate/Suppliers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$TestClocks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/TestClocks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Tokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/Tokens.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$TransactionEntries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/TransactionEntries.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TestHelpers$2f$Issuing$2f$Transactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TestHelpers/Issuing/Transactions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FinancialConnections$2f$Transactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/FinancialConnections/Transactions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Issuing$2f$Transactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Issuing/Transactions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tax$2f$Transactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Tax/Transactions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Treasury$2f$Transactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Treasury/Transactions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Radar$2f$ValueListItems$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Radar/ValueListItems.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Radar$2f$ValueLists$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Radar/ValueLists.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Identity$2f$VerificationReports$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Identity/VerificationReports.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Identity$2f$VerificationSessions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Identity/VerificationSessions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Accounts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Accounts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$AccountLinks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/AccountLinks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$AccountSessions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/AccountSessions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ApplePayDomains$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/ApplePayDomains.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ApplicationFees$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/ApplicationFees.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Balance$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Balance.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$BalanceTransactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/BalanceTransactions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Charges$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Charges.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ConfirmationTokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/ConfirmationTokens.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$CountrySpecs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/CountrySpecs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Coupons$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Coupons.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$CreditNotes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/CreditNotes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$CustomerSessions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/CustomerSessions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Customers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Customers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Disputes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Disputes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$EphemeralKeys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/EphemeralKeys.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Events$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Events.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ExchangeRates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/ExchangeRates.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FileLinks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/FileLinks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Files$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Files.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$InvoiceItems$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/InvoiceItems.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$InvoiceRenderingTemplates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/InvoiceRenderingTemplates.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Invoices$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Invoices.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Mandates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Mandates.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$OAuth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/OAuth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentIntents$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/PaymentIntents.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentLinks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/PaymentLinks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentMethodConfigurations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/PaymentMethodConfigurations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentMethodDomains$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/PaymentMethodDomains.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentMethods$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/PaymentMethods.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Payouts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Payouts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Plans$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Plans.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Prices$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Prices.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Products$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Products.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PromotionCodes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/PromotionCodes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Quotes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Quotes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Refunds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Refunds.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Reviews$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Reviews.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SetupAttempts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/SetupAttempts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SetupIntents$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/SetupIntents.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ShippingRates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/ShippingRates.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Sources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Sources.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SubscriptionItems$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/SubscriptionItems.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SubscriptionSchedules$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/SubscriptionSchedules.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Subscriptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Subscriptions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TaxCodes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TaxCodes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TaxIds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TaxIds.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TaxRates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TaxRates.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Tokens.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Topups$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Topups.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Transfers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Transfers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$WebhookEndpoints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/WebhookEndpoints.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources.js [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Account": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Accounts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Accounts"]),
    "AccountLinks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$AccountLinks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccountLinks"]),
    "AccountSessions": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$AccountSessions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccountSessions"]),
    "Accounts": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Accounts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Accounts"]),
    "ApplePayDomains": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ApplePayDomains$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ApplePayDomains"]),
    "ApplicationFees": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ApplicationFees$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ApplicationFees"]),
    "Apps": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Apps"]),
    "Balance": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Balance$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Balance"]),
    "BalanceTransactions": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$BalanceTransactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BalanceTransactions"]),
    "Billing": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Billing"]),
    "BillingPortal": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BillingPortal"]),
    "Charges": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Charges$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Charges"]),
    "Checkout": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Checkout"]),
    "Climate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Climate"]),
    "ConfirmationTokens": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ConfirmationTokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConfirmationTokens"]),
    "CountrySpecs": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$CountrySpecs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CountrySpecs"]),
    "Coupons": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Coupons$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Coupons"]),
    "CreditNotes": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$CreditNotes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CreditNotes"]),
    "CustomerSessions": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$CustomerSessions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CustomerSessions"]),
    "Customers": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Customers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Customers"]),
    "Disputes": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Disputes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Disputes"]),
    "Entitlements": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Entitlements"]),
    "EphemeralKeys": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$EphemeralKeys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EphemeralKeys"]),
    "Events": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Events$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Events"]),
    "ExchangeRates": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ExchangeRates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ExchangeRates"]),
    "FileLinks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FileLinks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FileLinks"]),
    "Files": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Files$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Files"]),
    "FinancialConnections": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FinancialConnections"]),
    "Forwarding": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Forwarding"]),
    "Identity": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Identity"]),
    "InvoiceItems": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$InvoiceItems$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvoiceItems"]),
    "InvoiceRenderingTemplates": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$InvoiceRenderingTemplates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvoiceRenderingTemplates"]),
    "Invoices": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Invoices$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Invoices"]),
    "Issuing": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Issuing"]),
    "Mandates": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Mandates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Mandates"]),
    "OAuth": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$OAuth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OAuth"]),
    "PaymentIntents": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentIntents$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PaymentIntents"]),
    "PaymentLinks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentLinks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PaymentLinks"]),
    "PaymentMethodConfigurations": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentMethodConfigurations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PaymentMethodConfigurations"]),
    "PaymentMethodDomains": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentMethodDomains$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PaymentMethodDomains"]),
    "PaymentMethods": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentMethods$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PaymentMethods"]),
    "Payouts": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Payouts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Payouts"]),
    "Plans": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Plans$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Plans"]),
    "Prices": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Prices$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Prices"]),
    "Products": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Products$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Products"]),
    "PromotionCodes": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PromotionCodes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PromotionCodes"]),
    "Quotes": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Quotes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Quotes"]),
    "Radar": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Radar"]),
    "Refunds": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Refunds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Refunds"]),
    "Reporting": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Reporting"]),
    "Reviews": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Reviews$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Reviews"]),
    "SetupAttempts": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SetupAttempts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SetupAttempts"]),
    "SetupIntents": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SetupIntents$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SetupIntents"]),
    "ShippingRates": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ShippingRates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ShippingRates"]),
    "Sigma": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Sigma"]),
    "Sources": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Sources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Sources"]),
    "SubscriptionItems": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SubscriptionItems$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SubscriptionItems"]),
    "SubscriptionSchedules": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SubscriptionSchedules$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SubscriptionSchedules"]),
    "Subscriptions": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Subscriptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Subscriptions"]),
    "Tax": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tax"]),
    "TaxCodes": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TaxCodes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TaxCodes"]),
    "TaxIds": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TaxIds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TaxIds"]),
    "TaxRates": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TaxRates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TaxRates"]),
    "Terminal": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Terminal"]),
    "TestHelpers": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TestHelpers"]),
    "Tokens": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tokens"]),
    "Topups": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Topups$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Topups"]),
    "Transfers": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Transfers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Transfers"]),
    "Treasury": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Treasury"]),
    "WebhookEndpoints": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$WebhookEndpoints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WebhookEndpoints"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Accounts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Accounts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$AccountLinks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/AccountLinks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$AccountSessions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/AccountSessions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ApplePayDomains$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/ApplePayDomains.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ApplicationFees$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/ApplicationFees.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Balance$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Balance.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$BalanceTransactions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/BalanceTransactions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Charges$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Charges.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ConfirmationTokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/ConfirmationTokens.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$CountrySpecs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/CountrySpecs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Coupons$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Coupons.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$CreditNotes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/CreditNotes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$CustomerSessions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/CustomerSessions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Customers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Customers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Disputes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Disputes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$EphemeralKeys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/EphemeralKeys.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Events$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Events.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ExchangeRates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/ExchangeRates.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$FileLinks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/FileLinks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Files$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Files.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$InvoiceItems$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/InvoiceItems.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$InvoiceRenderingTemplates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/InvoiceRenderingTemplates.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Invoices$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Invoices.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Mandates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Mandates.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$OAuth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/OAuth.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentIntents$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/PaymentIntents.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentLinks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/PaymentLinks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentMethodConfigurations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/PaymentMethodConfigurations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentMethodDomains$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/PaymentMethodDomains.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PaymentMethods$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/PaymentMethods.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Payouts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Payouts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Plans$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Plans.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Prices$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Prices.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Products$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Products.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$PromotionCodes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/PromotionCodes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Quotes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Quotes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Refunds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Refunds.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Reviews$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Reviews.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SetupAttempts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/SetupAttempts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SetupIntents$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/SetupIntents.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$ShippingRates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/ShippingRates.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Sources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Sources.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SubscriptionItems$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/SubscriptionItems.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$SubscriptionSchedules$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/SubscriptionSchedules.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Subscriptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Subscriptions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TaxCodes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TaxCodes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TaxIds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TaxIds.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$TaxRates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/TaxRates.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Tokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Tokens.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Topups$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Topups.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$Transfers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/Transfers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2f$WebhookEndpoints$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources/WebhookEndpoints.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Account": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Account"]),
    "AccountLinks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["AccountLinks"]),
    "AccountSessions": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["AccountSessions"]),
    "Accounts": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Accounts"]),
    "ApplePayDomains": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ApplePayDomains"]),
    "ApplicationFees": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ApplicationFees"]),
    "Apps": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Apps"]),
    "Balance": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Balance"]),
    "BalanceTransactions": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["BalanceTransactions"]),
    "Billing": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Billing"]),
    "BillingPortal": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["BillingPortal"]),
    "Charges": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Charges"]),
    "Checkout": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Checkout"]),
    "Climate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Climate"]),
    "ConfirmationTokens": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ConfirmationTokens"]),
    "CountrySpecs": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["CountrySpecs"]),
    "Coupons": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Coupons"]),
    "CreditNotes": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["CreditNotes"]),
    "CustomerSessions": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["CustomerSessions"]),
    "Customers": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Customers"]),
    "Disputes": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Disputes"]),
    "Entitlements": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Entitlements"]),
    "EphemeralKeys": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["EphemeralKeys"]),
    "Events": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Events"]),
    "ExchangeRates": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ExchangeRates"]),
    "FileLinks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["FileLinks"]),
    "Files": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Files"]),
    "FinancialConnections": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["FinancialConnections"]),
    "Forwarding": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Forwarding"]),
    "Identity": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Identity"]),
    "InvoiceItems": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["InvoiceItems"]),
    "InvoiceRenderingTemplates": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["InvoiceRenderingTemplates"]),
    "Invoices": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Invoices"]),
    "Issuing": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Issuing"]),
    "Mandates": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Mandates"]),
    "OAuth": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["OAuth"]),
    "PaymentIntents": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PaymentIntents"]),
    "PaymentLinks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PaymentLinks"]),
    "PaymentMethodConfigurations": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PaymentMethodConfigurations"]),
    "PaymentMethodDomains": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PaymentMethodDomains"]),
    "PaymentMethods": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PaymentMethods"]),
    "Payouts": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Payouts"]),
    "Plans": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Plans"]),
    "Prices": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Prices"]),
    "Products": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Products"]),
    "PromotionCodes": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PromotionCodes"]),
    "Quotes": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Quotes"]),
    "Radar": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Radar"]),
    "Refunds": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Refunds"]),
    "Reporting": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Reporting"]),
    "Reviews": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Reviews"]),
    "SetupAttempts": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["SetupAttempts"]),
    "SetupIntents": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["SetupIntents"]),
    "ShippingRates": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ShippingRates"]),
    "Sigma": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Sigma"]),
    "Sources": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Sources"]),
    "SubscriptionItems": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["SubscriptionItems"]),
    "SubscriptionSchedules": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["SubscriptionSchedules"]),
    "Subscriptions": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Subscriptions"]),
    "Tax": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Tax"]),
    "TaxCodes": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["TaxCodes"]),
    "TaxIds": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["TaxIds"]),
    "TaxRates": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["TaxRates"]),
    "Terminal": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Terminal"]),
    "TestHelpers": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["TestHelpers"]),
    "Tokens": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Tokens"]),
    "Topups": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Topups"]),
    "Transfers": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Transfers"]),
    "Treasury": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Treasury"]),
    "WebhookEndpoints": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["WebhookEndpoints"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources.js [app-rsc] (ecmascript) <exports>");
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/stripe.core.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createStripe": (()=>createStripe)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/Error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$RequestSender$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/RequestSender.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/StripeResource.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Webhooks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/Webhooks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$apiVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/apiVersion.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$CryptoProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/crypto/CryptoProvider.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/net/HttpClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/resources.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const DEFAULT_HOST = 'api.stripe.com';
const DEFAULT_PORT = '443';
const DEFAULT_BASE_PATH = '/v1/';
const DEFAULT_API_VERSION = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$apiVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.ApiVersion;
const DEFAULT_TIMEOUT = 80000;
const MAX_NETWORK_RETRY_DELAY_SEC = 2;
const INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;
const APP_INFO_PROPERTIES = [
    'name',
    'version',
    'url',
    'partner_id'
];
const ALLOWED_CONFIG_PROPERTIES = [
    'apiVersion',
    'typescript',
    'maxNetworkRetries',
    'httpAgent',
    'httpClient',
    'timeout',
    'host',
    'port',
    'protocol',
    'telemetry',
    'appInfo',
    'stripeAccount'
];
const defaultRequestSenderFactory = (stripe)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$RequestSender$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RequestSender"](stripe, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"].MAX_BUFFERED_REQUEST_METRICS);
function createStripe(platformFunctions, requestSender = defaultRequestSenderFactory) {
    Stripe.PACKAGE_VERSION = '16.12.0';
    Stripe.USER_AGENT = Object.assign({
        bindings_version: Stripe.PACKAGE_VERSION,
        lang: 'node',
        publisher: 'stripe',
        uname: null,
        typescript: false
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["determineProcessUserAgentProperties"])());
    Stripe.StripeResource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$StripeResource$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeResource"];
    Stripe.resources = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__;
    Stripe.HttpClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpClient"];
    Stripe.HttpClientResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$net$2f$HttpClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HttpClientResponse"];
    Stripe.CryptoProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$crypto$2f$CryptoProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CryptoProvider"];
    // Previously Stripe.webhooks was just the createWebhooks() factory function
    // however going forward it will be a WebhookObject instance. To maintain
    // backwards compatibility it is currently a factory function that also
    // complies to the WebhookObject signature. The factory function signature
    // will be removed as a breaking change in the next major release.
    // See https://github.com/stripe/stripe-node/issues/1956
    function createWebhooksDefault(fns = platformFunctions) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Webhooks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createWebhooks"])(fns);
    }
    Stripe.webhooks = Object.assign(createWebhooksDefault, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Webhooks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createWebhooks"])(platformFunctions));
    function Stripe(key, config = {}) {
        if (!(this instanceof Stripe)) {
            return new Stripe(key, config);
        }
        const props = this._getPropsFromConfig(config);
        this._platformFunctions = platformFunctions;
        Object.defineProperty(this, '_emitter', {
            value: this._platformFunctions.createEmitter(),
            enumerable: false,
            configurable: false,
            writable: false
        });
        this.VERSION = Stripe.PACKAGE_VERSION;
        this.on = this._emitter.on.bind(this._emitter);
        this.once = this._emitter.once.bind(this._emitter);
        this.off = this._emitter.removeListener.bind(this._emitter);
        const agent = props.httpAgent || null;
        this._api = {
            auth: null,
            host: props.host || DEFAULT_HOST,
            port: props.port || DEFAULT_PORT,
            protocol: props.protocol || 'https',
            basePath: DEFAULT_BASE_PATH,
            version: props.apiVersion || DEFAULT_API_VERSION,
            timeout: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateInteger"])('timeout', props.timeout, DEFAULT_TIMEOUT),
            maxNetworkRetries: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateInteger"])('maxNetworkRetries', props.maxNetworkRetries, 1),
            agent: agent,
            httpClient: props.httpClient || (agent ? this._platformFunctions.createNodeHttpClient(agent) : this._platformFunctions.createDefaultHttpClient()),
            dev: false,
            stripeAccount: props.stripeAccount || null
        };
        const typescript = props.typescript || false;
        if (typescript !== Stripe.USER_AGENT.typescript) {
            // The mutation here is uncomfortable, but likely fastest;
            // serializing the user agent involves shelling out to the system,
            // and given some users may instantiate the library many times without switching between TS and non-TS,
            // we only want to incur the performance hit when that actually happens.
            Stripe.USER_AGENT.typescript = typescript;
        }
        if (props.appInfo) {
            this._setAppInfo(props.appInfo);
        }
        this._prepResources();
        this._setApiKey(key);
        this.errors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__;
        // Once Stripe.webhooks looses the factory function signature in a future release
        // then this should become this.webhooks = Stripe.webhooks
        this.webhooks = createWebhooksDefault();
        this._prevRequestMetrics = [];
        this._enableTelemetry = props.telemetry !== false;
        this._requestSender = requestSender(this);
        // Expose StripeResource on the instance too
        // @ts-ignore
        this.StripeResource = Stripe.StripeResource;
    }
    Stripe.errors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$Error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__;
    Stripe.createNodeHttpClient = platformFunctions.createNodeHttpClient;
    /**
     * Creates an HTTP client for issuing Stripe API requests which uses the Web
     * Fetch API.
     *
     * A fetch function can optionally be passed in as a parameter. If none is
     * passed, will default to the default `fetch` function in the global scope.
     */ Stripe.createFetchHttpClient = platformFunctions.createFetchHttpClient;
    /**
     * Create a CryptoProvider which uses the built-in Node crypto libraries for
     * its crypto operations.
     */ Stripe.createNodeCryptoProvider = platformFunctions.createNodeCryptoProvider;
    /**
     * Creates a CryptoProvider which uses the Subtle Crypto API from the Web
     * Crypto API spec for its crypto operations.
     *
     * A SubtleCrypto interface can optionally be passed in as a parameter. If none
     * is passed, will default to the default `crypto.subtle` object in the global
     * scope.
     */ Stripe.createSubtleCryptoProvider = platformFunctions.createSubtleCryptoProvider;
    Stripe.prototype = {
        // Properties are set in the constructor above
        _appInfo: undefined,
        on: null,
        off: null,
        once: null,
        VERSION: null,
        StripeResource: null,
        webhooks: null,
        errors: null,
        _api: null,
        _prevRequestMetrics: null,
        _emitter: null,
        _enableTelemetry: null,
        _requestSender: null,
        _platformFunctions: null,
        /**
         * @private
         */ _setApiKey (key) {
            if (key) {
                this._setApiField('auth', `Bearer ${key}`);
            }
        },
        /**
         * @private
         * This may be removed in the future.
         */ _setAppInfo (info) {
            if (info && typeof info !== 'object') {
                throw new Error('AppInfo must be an object.');
            }
            if (info && !info.name) {
                throw new Error('AppInfo.name is required');
            }
            info = info || {};
            this._appInfo = APP_INFO_PROPERTIES.reduce((accum, prop)=>{
                if (typeof info[prop] == 'string') {
                    accum = accum || {};
                    accum[prop] = info[prop];
                }
                return accum;
            }, // @ts-ignore
            undefined);
        },
        /**
         * @private
         * This may be removed in the future.
         */ _setApiField (key, value) {
            this._api[key] = value;
        },
        /**
         * @private
         * Please open or upvote an issue at github.com/stripe/stripe-node
         * if you use this, detailing your use-case.
         *
         * It may be deprecated and removed in the future.
         */ getApiField (key) {
            return this._api[key];
        },
        setClientId (clientId) {
            this._clientId = clientId;
        },
        getClientId () {
            return this._clientId;
        },
        /**
         * @private
         * Please open or upvote an issue at github.com/stripe/stripe-node
         * if you use this, detailing your use-case.
         *
         * It may be deprecated and removed in the future.
         */ getConstant: (c)=>{
            switch(c){
                case 'DEFAULT_HOST':
                    return DEFAULT_HOST;
                case 'DEFAULT_PORT':
                    return DEFAULT_PORT;
                case 'DEFAULT_BASE_PATH':
                    return DEFAULT_BASE_PATH;
                case 'DEFAULT_API_VERSION':
                    return DEFAULT_API_VERSION;
                case 'DEFAULT_TIMEOUT':
                    return DEFAULT_TIMEOUT;
                case 'MAX_NETWORK_RETRY_DELAY_SEC':
                    return MAX_NETWORK_RETRY_DELAY_SEC;
                case 'INITIAL_NETWORK_RETRY_DELAY_SEC':
                    return INITIAL_NETWORK_RETRY_DELAY_SEC;
            }
            return Stripe[c];
        },
        getMaxNetworkRetries () {
            return this.getApiField('maxNetworkRetries');
        },
        /**
         * @private
         * This may be removed in the future.
         */ _setApiNumberField (prop, n, defaultVal) {
            const val = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateInteger"])(prop, n, defaultVal);
            this._setApiField(prop, val);
        },
        getMaxNetworkRetryDelay () {
            return MAX_NETWORK_RETRY_DELAY_SEC;
        },
        getInitialNetworkRetryDelay () {
            return INITIAL_NETWORK_RETRY_DELAY_SEC;
        },
        /**
         * @private
         * Please open or upvote an issue at github.com/stripe/stripe-node
         * if you use this, detailing your use-case.
         *
         * It may be deprecated and removed in the future.
         *
         * Gets a JSON version of a User-Agent and uses a cached version for a slight
         * speed advantage.
         */ getClientUserAgent (cb) {
            return this.getClientUserAgentSeeded(Stripe.USER_AGENT, cb);
        },
        /**
         * @private
         * Please open or upvote an issue at github.com/stripe/stripe-node
         * if you use this, detailing your use-case.
         *
         * It may be deprecated and removed in the future.
         *
         * Gets a JSON version of a User-Agent by encoding a seeded object and
         * fetching a uname from the system.
         */ getClientUserAgentSeeded (seed, cb) {
            this._platformFunctions.getUname().then((uname)=>{
                var _a;
                const userAgent = {};
                for(const field in seed){
                    if (!Object.prototype.hasOwnProperty.call(seed, field)) {
                        continue;
                    }
                    userAgent[field] = encodeURIComponent((_a = seed[field]) !== null && _a !== void 0 ? _a : 'null');
                }
                // URI-encode in case there are unusual characters in the system's uname.
                userAgent.uname = encodeURIComponent(uname || 'UNKNOWN');
                const client = this.getApiField('httpClient');
                if (client) {
                    userAgent.httplib = encodeURIComponent(client.getClientName());
                }
                if (this._appInfo) {
                    userAgent.application = this._appInfo;
                }
                cb(JSON.stringify(userAgent));
            });
        },
        /**
         * @private
         * Please open or upvote an issue at github.com/stripe/stripe-node
         * if you use this, detailing your use-case.
         *
         * It may be deprecated and removed in the future.
         */ getAppInfoAsString () {
            if (!this._appInfo) {
                return '';
            }
            let formatted = this._appInfo.name;
            if (this._appInfo.version) {
                formatted += `/${this._appInfo.version}`;
            }
            if (this._appInfo.url) {
                formatted += ` (${this._appInfo.url})`;
            }
            return formatted;
        },
        getTelemetryEnabled () {
            return this._enableTelemetry;
        },
        /**
         * @private
         * This may be removed in the future.
         */ _prepResources () {
            for(const name in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__){
                if (!Object.prototype.hasOwnProperty.call(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, name)) {
                    continue;
                }
                // @ts-ignore
                this[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pascalToCamelCase"])(name)] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$resources$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[name](this);
            }
        },
        /**
         * @private
         * This may be removed in the future.
         */ _getPropsFromConfig (config) {
            // If config is null or undefined, just bail early with no props
            if (!config) {
                return {};
            }
            // config can be an object or a string
            const isString = typeof config === 'string';
            const isObject = config === Object(config) && !Array.isArray(config);
            if (!isObject && !isString) {
                throw new Error('Config must either be an object or a string');
            }
            // If config is a string, we assume the old behavior of passing in a string representation of the api version
            if (isString) {
                return {
                    apiVersion: config
                };
            }
            // If config is an object, we assume the new behavior and make sure it doesn't contain any unexpected values
            const values = Object.keys(config).filter((value)=>!ALLOWED_CONFIG_PROPERTIES.includes(value));
            if (values.length > 0) {
                throw new Error(`Config object may only contain the following: ${ALLOWED_CONFIG_PROPERTIES.join(', ')}`);
            }
            return config;
        }
    };
    return Stripe;
}
}}),
"[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/stripe.esm.node.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Stripe": (()=>Stripe),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$platform$2f$NodePlatformFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/platform/NodePlatformFunctions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/stripe@16.12.0/node_modules/stripe/esm/stripe.core.js [app-rsc] (ecmascript)");
;
;
const Stripe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStripe"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$stripe$40$16$2e$12$2e$0$2f$node_modules$2f$stripe$2f$esm$2f$platform$2f$NodePlatformFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodePlatformFunctions"]());
const __TURBOPACK__default__export__ = Stripe;
}}),

};

//# sourceMappingURL=6391e_stripe_esm_f63968._.js.map