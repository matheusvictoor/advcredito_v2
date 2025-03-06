module.exports = {

"[project]/packages/email/src/mailer/resend/resend-options.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resendOptions": (()=>resendOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/email/keys.ts [app-rsc] (ecmascript)");
;
const resendOptions = {
    from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keys"])().EMAIL_FROM
};
}}),
"[project]/packages/email/src/mailer/resend/index.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ResendMailer": (()=>ResendMailer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$resend$40$4$2e$0$2e$1_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/resend@4.0.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/resend/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/email/keys.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$mailer$2f$resend$2f$resend$2d$options$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/email/src/mailer/resend/resend-options.ts [app-rsc] (ecmascript)");
;
;
;
const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$resend$40$4$2e$0$2e$1_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resend"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$keys$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["keys"])().EMAIL_RESEND_API_KEY);
class ResendMailer {
    async sendEmail(payload) {
        const response = await resend.emails.send({
            from: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$email$2f$src$2f$mailer$2f$resend$2f$resend$2d$options$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resendOptions"].from,
            to: payload.recipient,
            subject: payload.subject,
            html: payload.html,
            text: payload.text
        });
        if (response.error) {
            throw Error(response.error.message ?? 'Could not send mail.');
        }
        return response;
    }
}
}}),
"[project]/node_modules/.pnpm/resend@4.0.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/resend/dist/index.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Resend": (()=>Resend)
});
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)){
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator)=>{
    return new Promise((resolve, reject)=>{
        var fulfilled = (value)=>{
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = (value)=>{
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        };
        var step = (x)=>x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
    });
};
// package.json
var version = "4.0.1";
// src/api-keys/api-keys.ts
var ApiKeys = class {
    constructor(resend){
        this.resend = resend;
    }
    create(_0) {
        return __async(this, arguments, function*(payload, options = {}) {
            const data = yield this.resend.post("/api-keys", payload, options);
            return data;
        });
    }
    list() {
        return __async(this, null, function*() {
            const data = yield this.resend.get("/api-keys");
            return data;
        });
    }
    remove(id) {
        return __async(this, null, function*() {
            const data = yield this.resend.delete(`/api-keys/${id}`);
            return data;
        });
    }
};
// src/audiences/audiences.ts
var Audiences = class {
    constructor(resend){
        this.resend = resend;
    }
    create(_0) {
        return __async(this, arguments, function*(payload, options = {}) {
            const data = yield this.resend.post("/audiences", payload, options);
            return data;
        });
    }
    list() {
        return __async(this, null, function*() {
            const data = yield this.resend.get("/audiences");
            return data;
        });
    }
    get(id) {
        return __async(this, null, function*() {
            const data = yield this.resend.get(`/audiences/${id}`);
            return data;
        });
    }
    remove(id) {
        return __async(this, null, function*() {
            const data = yield this.resend.delete(`/audiences/${id}`);
            return data;
        });
    }
};
// src/batch/batch.ts
var Batch = class {
    constructor(resend){
        this.resend = resend;
    }
    send(_0) {
        return __async(this, arguments, function*(payload, options = {}) {
            return this.create(payload, options);
        });
    }
    create(_0) {
        return __async(this, arguments, function*(payload, options = {}) {
            for (const email of payload){
                if (email.react) {
                    if (!this.renderAsync) {
                        try {
                            const { renderAsync } = yield __turbopack_require__("[project]/node_modules/.pnpm/@react-email+render@1.0.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@react-email/render/dist/node/index.mjs [app-rsc] (ecmascript, async loader)")(__turbopack_import__);
                            this.renderAsync = renderAsync;
                        } catch (error) {
                            throw new Error("Failed to render React component. Make sure to install `@react-email/render`");
                        }
                    }
                    email.html = yield this.renderAsync(email.react);
                    email.react = void 0;
                }
            }
            const data = yield this.resend.post("/emails/batch", payload, options);
            return data;
        });
    }
};
// src/contacts/contacts.ts
var Contacts = class {
    constructor(resend){
        this.resend = resend;
    }
    create(_0) {
        return __async(this, arguments, function*(payload, options = {}) {
            const data = yield this.resend.post(`/audiences/${payload.audienceId}/contacts`, {
                unsubscribed: payload.unsubscribed,
                email: payload.email,
                first_name: payload.firstName,
                last_name: payload.lastName
            }, options);
            return data;
        });
    }
    list(options) {
        return __async(this, null, function*() {
            const data = yield this.resend.get(`/audiences/${options.audienceId}/contacts`);
            return data;
        });
    }
    get(options) {
        return __async(this, null, function*() {
            const data = yield this.resend.get(`/audiences/${options.audienceId}/contacts/${options.id}`);
            return data;
        });
    }
    update(payload) {
        return __async(this, null, function*() {
            const data = yield this.resend.patch(`/audiences/${payload.audienceId}/contacts/${payload.id}`, {
                unsubscribed: payload.unsubscribed,
                first_name: payload.firstName,
                last_name: payload.lastName
            });
            return data;
        });
    }
    remove(payload) {
        return __async(this, null, function*() {
            const data = yield this.resend.delete(`/audiences/${payload.audienceId}/contacts/${(payload == null ? void 0 : payload.email) ? payload == null ? void 0 : payload.email : payload == null ? void 0 : payload.id}`);
            return data;
        });
    }
};
// src/domains/domains.ts
var Domains = class {
    constructor(resend){
        this.resend = resend;
    }
    create(_0) {
        return __async(this, arguments, function*(payload, options = {}) {
            const data = yield this.resend.post("/domains", payload, options);
            return data;
        });
    }
    list() {
        return __async(this, null, function*() {
            const data = yield this.resend.get("/domains");
            return data;
        });
    }
    get(id) {
        return __async(this, null, function*() {
            const data = yield this.resend.get(`/domains/${id}`);
            return data;
        });
    }
    update(payload) {
        return __async(this, null, function*() {
            const data = yield this.resend.patch(`/domains/${payload.id}`, {
                click_tracking: payload.clickTracking,
                open_tracking: payload.openTracking,
                tls: payload.tls
            });
            return data;
        });
    }
    remove(id) {
        return __async(this, null, function*() {
            const data = yield this.resend.delete(`/domains/${id}`);
            return data;
        });
    }
    verify(id) {
        return __async(this, null, function*() {
            const data = yield this.resend.post(`/domains/${id}/verify`);
            return data;
        });
    }
};
// src/emails/emails.ts
var Emails = class {
    constructor(resend){
        this.resend = resend;
    }
    send(_0) {
        return __async(this, arguments, function*(payload, options = {}) {
            return this.create(payload, options);
        });
    }
    create(_0) {
        return __async(this, arguments, function*(payload, options = {}) {
            if (payload.react) {
                if (!this.renderAsync) {
                    try {
                        const { renderAsync } = yield __turbopack_require__("[project]/node_modules/.pnpm/@react-email+render@1.0.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/@react-email/render/dist/node/index.mjs [app-rsc] (ecmascript, async loader)")(__turbopack_import__);
                        this.renderAsync = renderAsync;
                    } catch (error) {
                        throw new Error("Failed to render React component. Make sure to install `@react-email/render`");
                    }
                }
                payload.html = yield this.renderAsync(payload.react);
            }
            const data = yield this.resend.post("/emails", {
                attachments: payload.attachments,
                bcc: payload.bcc,
                cc: payload.cc,
                from: payload.from,
                headers: payload.headers,
                html: payload.html,
                reply_to: payload.replyTo,
                scheduled_at: payload.scheduledAt,
                subject: payload.subject,
                tags: payload.tags,
                text: payload.text,
                to: payload.to
            }, options);
            return data;
        });
    }
    get(id) {
        return __async(this, null, function*() {
            const data = yield this.resend.get(`/emails/${id}`);
            return data;
        });
    }
    update(payload) {
        return __async(this, null, function*() {
            const data = yield this.resend.patch(`/emails/${payload.id}`, {
                scheduled_at: payload.scheduledAt
            });
            return data;
        });
    }
    cancel(id) {
        return __async(this, null, function*() {
            const data = yield this.resend.post(`/emails/${id}/cancel`);
            return data;
        });
    }
};
// src/resend.ts
var defaultBaseUrl = "https://api.resend.com";
var defaultUserAgent = `resend-node:${version}`;
var baseUrl = typeof process !== "undefined" && process.env ? process.env.RESEND_BASE_URL || defaultBaseUrl : defaultBaseUrl;
var userAgent = typeof process !== "undefined" && process.env ? process.env.RESEND_USER_AGENT || defaultUserAgent : defaultUserAgent;
var Resend = class {
    constructor(key){
        this.key = key;
        this.apiKeys = new ApiKeys(this);
        this.audiences = new Audiences(this);
        this.batch = new Batch(this);
        this.contacts = new Contacts(this);
        this.domains = new Domains(this);
        this.emails = new Emails(this);
        if (!key) {
            if (typeof process !== "undefined" && process.env) {
                this.key = process.env.RESEND_API_KEY;
            }
            if (!this.key) {
                throw new Error('Missing API key. Pass it to the constructor `new Resend("re_123")`');
            }
        }
        this.headers = new Headers({
            Authorization: `Bearer ${this.key}`,
            "User-Agent": userAgent,
            "Content-Type": "application/json"
        });
    }
    fetchRequest(_0) {
        return __async(this, arguments, function*(path, options = {}) {
            try {
                const response = yield fetch(`${baseUrl}${path}`, options);
                if (!response.ok) {
                    try {
                        const rawError = yield response.text();
                        return {
                            data: null,
                            error: JSON.parse(rawError)
                        };
                    } catch (err) {
                        if (err instanceof SyntaxError) {
                            return {
                                data: null,
                                error: {
                                    name: "application_error",
                                    message: "Internal server error. We are unable to process your request right now, please try again later."
                                }
                            };
                        }
                        const error = {
                            message: response.statusText,
                            name: "application_error"
                        };
                        if (err instanceof Error) {
                            return {
                                data: null,
                                error: __spreadProps(__spreadValues({}, error), {
                                    message: err.message
                                })
                            };
                        }
                        return {
                            data: null,
                            error
                        };
                    }
                }
                const data = yield response.json();
                return {
                    data,
                    error: null
                };
            } catch (error) {
                return {
                    data: null,
                    error: {
                        name: "application_error",
                        message: "Unable to fetch data. The request could not be resolved."
                    }
                };
            }
        });
    }
    post(_0, _1) {
        return __async(this, arguments, function*(path, entity, options = {}) {
            const requestOptions = __spreadValues({
                method: "POST",
                headers: this.headers,
                body: JSON.stringify(entity)
            }, options);
            return this.fetchRequest(path, requestOptions);
        });
    }
    get(_0) {
        return __async(this, arguments, function*(path, options = {}) {
            const requestOptions = __spreadValues({
                method: "GET",
                headers: this.headers
            }, options);
            return this.fetchRequest(path, requestOptions);
        });
    }
    put(_0, _1) {
        return __async(this, arguments, function*(path, entity, options = {}) {
            const requestOptions = __spreadValues({
                method: "PUT",
                headers: this.headers,
                body: JSON.stringify(entity)
            }, options);
            return this.fetchRequest(path, requestOptions);
        });
    }
    patch(_0, _1) {
        return __async(this, arguments, function*(path, entity, options = {}) {
            const requestOptions = __spreadValues({
                method: "PATCH",
                headers: this.headers,
                body: JSON.stringify(entity)
            }, options);
            return this.fetchRequest(path, requestOptions);
        });
    }
    delete(path, query) {
        return __async(this, null, function*() {
            const requestOptions = {
                method: "DELETE",
                headers: this.headers,
                body: JSON.stringify(query)
            };
            return this.fetchRequest(path, requestOptions);
        });
    }
};
;
}}),

};

//# sourceMappingURL=%5Bproject%5D__891fcf._.js.map