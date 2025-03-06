module.exports = {

"[project]/node_modules/.pnpm/@react-email+tailwind@1.0.4_react@19.0.0/node_modules/@react-email/tailwind/dist/index.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Tailwind": (()=>pd)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
var ni = typeof globalThis < "u" ? globalThis : "undefined" < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qe(s) {
    return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
function Is(s) {
    if (s.__esModule) return s;
    var e = s.default;
    if (typeof e == "function") {
        var t = function r() {
            return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
        };
        t.prototype = e.prototype;
    } else t = {};
    return Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.keys(s).forEach(function(r) {
        var n = Object.getOwnPropertyDescriptor(s, r);
        Object.defineProperty(t, r, n.get ? n : {
            enumerable: !0,
            get: function() {
                return s[r];
            }
        });
    }), t;
}
var bn = {
    exports: {}
}, Re = String, Di = function() {
    return {
        isColorSupported: !1,
        reset: Re,
        bold: Re,
        dim: Re,
        italic: Re,
        underline: Re,
        inverse: Re,
        hidden: Re,
        strikethrough: Re,
        black: Re,
        red: Re,
        green: Re,
        yellow: Re,
        blue: Re,
        magenta: Re,
        cyan: Re,
        white: Re,
        gray: Re,
        bgBlack: Re,
        bgRed: Re,
        bgGreen: Re,
        bgYellow: Re,
        bgBlue: Re,
        bgMagenta: Re,
        bgCyan: Re,
        bgWhite: Re
    };
};
bn.exports = Di();
bn.exports.createColors = Di;
var Rs = bn.exports;
const $s = {}, Ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: $s
}, Symbol.toStringTag, {
    value: "Module"
})), Le = /* @__PURE__ */ Is(Ds);
let ii = Rs, ai = Le, Dr = class Ni extends Error {
    constructor(e, t, r, n, l, i){
        super(e), this.name = "CssSyntaxError", this.reason = e, l && (this.file = l), n && (this.source = n), i && (this.plugin = i), typeof t < "u" && typeof r < "u" && (typeof t == "number" ? (this.line = t, this.column = r) : (this.line = t.line, this.column = t.column, this.endLine = r.line, this.endColumn = r.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Ni);
    }
    setMessage() {
        this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
    }
    showSourceCode(e) {
        if (!this.source) return "";
        let t = this.source;
        e == null && (e = ii.isColorSupported), ai && e && (t = ai(t));
        let r = t.split(/\r?\n/), n = Math.max(this.line - 3, 0), l = Math.min(this.line + 2, r.length), i = String(l).length, c, a;
        if (e) {
            let { bold: o, gray: f, red: u } = ii.createColors(!0);
            c = (p)=>o(u(p)), a = (p)=>f(p);
        } else c = a = (o)=>o;
        return r.slice(n, l).map((o, f)=>{
            let u = n + 1 + f, p = " " + (" " + u).slice(-i) + " | ";
            if (u === this.line) {
                let _ = a(p.replace(/\d/g, " ")) + o.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                return c(">") + a(p) + o + `
 ` + _ + c("^");
            }
            return " " + a(p) + o;
        }).join(`
`);
    }
    toString() {
        let e = this.showSourceCode();
        return e && (e = `

` + e + `
`), this.name + ": " + this.message + e;
    }
};
var xn = Dr;
Dr.default = Dr;
var _t = {};
_t.isClean = Symbol("isClean");
_t.my = Symbol("my");
const si = {
    after: `
`,
    beforeClose: `
`,
    beforeComment: `
`,
    beforeDecl: `
`,
    beforeOpen: " ",
    beforeRule: `
`,
    colon: ": ",
    commentLeft: " ",
    commentRight: " ",
    emptyBody: "",
    indent: "    ",
    semicolon: !1
};
function Ns(s) {
    return s[0].toUpperCase() + s.slice(1);
}
let Nr = class {
    constructor(e){
        this.builder = e;
    }
    atrule(e, t) {
        let r = "@" + e.name, n = e.params ? this.rawValue(e, "params") : "";
        if (typeof e.raws.afterName < "u" ? r += e.raws.afterName : n && (r += " "), e.nodes) this.block(e, r + n);
        else {
            let l = (e.raws.between || "") + (t ? ";" : "");
            this.builder(r + n + l, e);
        }
    }
    beforeAfter(e, t) {
        let r;
        e.type === "decl" ? r = this.raw(e, null, "beforeDecl") : e.type === "comment" ? r = this.raw(e, null, "beforeComment") : t === "before" ? r = this.raw(e, null, "beforeRule") : r = this.raw(e, null, "beforeClose");
        let n = e.parent, l = 0;
        for(; n && n.type !== "root";)l += 1, n = n.parent;
        if (r.includes(`
`)) {
            let i = this.raw(e, null, "indent");
            if (i.length) for(let c = 0; c < l; c++)r += i;
        }
        return r;
    }
    block(e, t) {
        let r = this.raw(e, "between", "beforeOpen");
        this.builder(t + r + "{", e, "start");
        let n;
        e.nodes && e.nodes.length ? (this.body(e), n = this.raw(e, "after")) : n = this.raw(e, "after", "emptyBody"), n && this.builder(n), this.builder("}", e, "end");
    }
    body(e) {
        let t = e.nodes.length - 1;
        for(; t > 0 && e.nodes[t].type === "comment";)t -= 1;
        let r = this.raw(e, "semicolon");
        for(let n = 0; n < e.nodes.length; n++){
            let l = e.nodes[n], i = this.raw(l, "before");
            i && this.builder(i), this.stringify(l, t !== n || r);
        }
    }
    comment(e) {
        let t = this.raw(e, "left", "commentLeft"), r = this.raw(e, "right", "commentRight");
        this.builder("/*" + t + e.text + r + "*/", e);
    }
    decl(e, t) {
        let r = this.raw(e, "between", "colon"), n = e.prop + r + this.rawValue(e, "value");
        e.important && (n += e.raws.important || " !important"), t && (n += ";"), this.builder(n, e);
    }
    document(e) {
        this.body(e);
    }
    raw(e, t, r) {
        let n;
        if (r || (r = t), t && (n = e.raws[t], typeof n < "u")) return n;
        let l = e.parent;
        if (r === "before" && (!l || l.type === "root" && l.first === e || l && l.type === "document")) return "";
        if (!l) return si[r];
        let i = e.root();
        if (i.rawCache || (i.rawCache = {}), typeof i.rawCache[r] < "u") return i.rawCache[r];
        if (r === "before" || r === "after") return this.beforeAfter(e, r);
        {
            let c = "raw" + Ns(r);
            this[c] ? n = this[c](i, e) : i.walk((a)=>{
                if (n = a.raws[t], typeof n < "u") return !1;
            });
        }
        return typeof n > "u" && (n = si[r]), i.rawCache[r] = n, n;
    }
    rawBeforeClose(e) {
        let t;
        return e.walk((r)=>{
            if (r.nodes && r.nodes.length > 0 && typeof r.raws.after < "u") return t = r.raws.after, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
        }), t && (t = t.replace(/\S/g, "")), t;
    }
    rawBeforeComment(e, t) {
        let r;
        return e.walkComments((n)=>{
            if (typeof n.raws.before < "u") return r = n.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
        }), typeof r > "u" ? r = this.raw(t, null, "beforeDecl") : r && (r = r.replace(/\S/g, "")), r;
    }
    rawBeforeDecl(e, t) {
        let r;
        return e.walkDecls((n)=>{
            if (typeof n.raws.before < "u") return r = n.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
        }), typeof r > "u" ? r = this.raw(t, null, "beforeRule") : r && (r = r.replace(/\S/g, "")), r;
    }
    rawBeforeOpen(e) {
        let t;
        return e.walk((r)=>{
            if (r.type !== "decl" && (t = r.raws.between, typeof t < "u")) return !1;
        }), t;
    }
    rawBeforeRule(e) {
        let t;
        return e.walk((r)=>{
            if (r.nodes && (r.parent !== e || e.first !== r) && typeof r.raws.before < "u") return t = r.raws.before, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
        }), t && (t = t.replace(/\S/g, "")), t;
    }
    rawColon(e) {
        let t;
        return e.walkDecls((r)=>{
            if (typeof r.raws.between < "u") return t = r.raws.between.replace(/[^\s:]/g, ""), !1;
        }), t;
    }
    rawEmptyBody(e) {
        let t;
        return e.walk((r)=>{
            if (r.nodes && r.nodes.length === 0 && (t = r.raws.after, typeof t < "u")) return !1;
        }), t;
    }
    rawIndent(e) {
        if (e.raws.indent) return e.raws.indent;
        let t;
        return e.walk((r)=>{
            let n = r.parent;
            if (n && n !== e && n.parent && n.parent === e && typeof r.raws.before < "u") {
                let l = r.raws.before.split(`
`);
                return t = l[l.length - 1], t = t.replace(/\S/g, ""), !1;
            }
        }), t;
    }
    rawSemicolon(e) {
        let t;
        return e.walk((r)=>{
            if (r.nodes && r.nodes.length && r.last.type === "decl" && (t = r.raws.semicolon, typeof t < "u")) return !1;
        }), t;
    }
    rawValue(e, t) {
        let r = e[t], n = e.raws[t];
        return n && n.value === r ? n.raw : r;
    }
    root(e) {
        this.body(e), e.raws.after && this.builder(e.raws.after);
    }
    rule(e) {
        this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
    }
    stringify(e, t) {
        if (!this[e.type]) throw new Error("Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier.");
        this[e.type](e, t);
    }
};
var Li = Nr;
Nr.default = Nr;
let Ls = Li;
function Lr(s, e) {
    new Ls(e).stringify(s);
}
var Kt = Lr;
Lr.default = Lr;
let { isClean: Mt, my: Fs } = _t, zs = xn, Us = Li, js = Kt;
function Fr(s, e) {
    let t = new s.constructor();
    for(let r in s){
        if (!Object.prototype.hasOwnProperty.call(s, r) || r === "proxyCache") continue;
        let n = s[r], l = typeof n;
        r === "parent" && l === "object" ? e && (t[r] = e) : r === "source" ? t[r] = n : Array.isArray(n) ? t[r] = n.map((i)=>Fr(i, t)) : (l === "object" && n !== null && (n = Fr(n)), t[r] = n);
    }
    return t;
}
let zr = class {
    constructor(e = {}){
        this.raws = {}, this[Mt] = !1, this[Fs] = !0;
        for(let t in e)if (t === "nodes") {
            this.nodes = [];
            for (let r of e[t])typeof r.clone == "function" ? this.append(r.clone()) : this.append(r);
        } else this[t] = e[t];
    }
    addToError(e) {
        if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
            let t = this.source;
            e.stack = e.stack.replace(/\n\s{4}at /, `$&${t.input.from}:${t.start.line}:${t.start.column}$&`);
        }
        return e;
    }
    after(e) {
        return this.parent.insertAfter(this, e), this;
    }
    assign(e = {}) {
        for(let t in e)this[t] = e[t];
        return this;
    }
    before(e) {
        return this.parent.insertBefore(this, e), this;
    }
    cleanRaws(e) {
        delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
    }
    clone(e = {}) {
        let t = Fr(this);
        for(let r in e)t[r] = e[r];
        return t;
    }
    cloneAfter(e = {}) {
        let t = this.clone(e);
        return this.parent.insertAfter(this, t), t;
    }
    cloneBefore(e = {}) {
        let t = this.clone(e);
        return this.parent.insertBefore(this, t), t;
    }
    error(e, t = {}) {
        if (this.source) {
            let { end: r, start: n } = this.rangeBy(t);
            return this.source.input.error(e, {
                column: n.column,
                line: n.line
            }, {
                column: r.column,
                line: r.line
            }, t);
        }
        return new zs(e);
    }
    getProxyProcessor() {
        return {
            get (e, t) {
                return t === "proxyOf" ? e : t === "root" ? ()=>e.root().toProxy() : e[t];
            },
            set (e, t, r) {
                return e[t] === r || (e[t] = r, (t === "prop" || t === "value" || t === "name" || t === "params" || t === "important" || /* c8 ignore next */ t === "text") && e.markDirty()), !0;
            }
        };
    }
    markDirty() {
        if (this[Mt]) {
            this[Mt] = !1;
            let e = this;
            for(; e = e.parent;)e[Mt] = !1;
        }
    }
    next() {
        if (!this.parent) return;
        let e = this.parent.index(this);
        return this.parent.nodes[e + 1];
    }
    positionBy(e, t) {
        let r = this.source.start;
        if (e.index) r = this.positionInside(e.index, t);
        else if (e.word) {
            t = this.toString();
            let n = t.indexOf(e.word);
            n !== -1 && (r = this.positionInside(n, t));
        }
        return r;
    }
    positionInside(e, t) {
        let r = t || this.toString(), n = this.source.start.column, l = this.source.start.line;
        for(let i = 0; i < e; i++)r[i] === `
` ? (n = 1, l += 1) : n += 1;
        return {
            column: n,
            line: l
        };
    }
    prev() {
        if (!this.parent) return;
        let e = this.parent.index(this);
        return this.parent.nodes[e - 1];
    }
    rangeBy(e) {
        let t = {
            column: this.source.start.column,
            line: this.source.start.line
        }, r = this.source.end ? {
            column: this.source.end.column + 1,
            line: this.source.end.line
        } : {
            column: t.column + 1,
            line: t.line
        };
        if (e.word) {
            let n = this.toString(), l = n.indexOf(e.word);
            l !== -1 && (t = this.positionInside(l, n), r = this.positionInside(l + e.word.length, n));
        } else e.start ? t = {
            column: e.start.column,
            line: e.start.line
        } : e.index && (t = this.positionInside(e.index)), e.end ? r = {
            column: e.end.column,
            line: e.end.line
        } : typeof e.endIndex == "number" ? r = this.positionInside(e.endIndex) : e.index && (r = this.positionInside(e.index + 1));
        return (r.line < t.line || r.line === t.line && r.column <= t.column) && (r = {
            column: t.column + 1,
            line: t.line
        }), {
            end: r,
            start: t
        };
    }
    raw(e, t) {
        return new Us().raw(this, e, t);
    }
    remove() {
        return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }
    replaceWith(...e) {
        if (this.parent) {
            let t = this, r = !1;
            for (let n of e)n === this ? r = !0 : r ? (this.parent.insertAfter(t, n), t = n) : this.parent.insertBefore(t, n);
            r || this.remove();
        }
        return this;
    }
    root() {
        let e = this;
        for(; e.parent && e.parent.type !== "document";)e = e.parent;
        return e;
    }
    toJSON(e, t) {
        let r = {}, n = t == null;
        t = t || /* @__PURE__ */ new Map();
        let l = 0;
        for(let i in this){
            if (!Object.prototype.hasOwnProperty.call(this, i) || i === "parent" || i === "proxyCache") continue;
            let c = this[i];
            if (Array.isArray(c)) r[i] = c.map((a)=>typeof a == "object" && a.toJSON ? a.toJSON(null, t) : a);
            else if (typeof c == "object" && c.toJSON) r[i] = c.toJSON(null, t);
            else if (i === "source") {
                let a = t.get(c.input);
                a == null && (a = l, t.set(c.input, l), l++), r[i] = {
                    end: c.end,
                    inputId: a,
                    start: c.start
                };
            } else r[i] = c;
        }
        return n && (r.inputs = [
            ...t.keys()
        ].map((i)=>i.toJSON())), r;
    }
    toProxy() {
        return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
    }
    toString(e = js) {
        e.stringify && (e = e.stringify);
        let t = "";
        return e(this, (r)=>{
            t += r;
        }), t;
    }
    warn(e, t, r) {
        let n = {
            node: this
        };
        for(let l in r)n[l] = r[l];
        return e.warn(t, n);
    }
    get proxyOf() {
        return this;
    }
};
var Xt = zr;
zr.default = zr;
let Vs = Xt, Ur = class extends Vs {
    constructor(e){
        e && typeof e.value < "u" && typeof e.value != "string" && (e = {
            ...e,
            value: String(e.value)
        }), super(e), this.type = "decl";
    }
    get variable() {
        return this.prop.startsWith("--") || this.prop[0] === "$";
    }
};
var Zt = Ur;
Ur.default = Ur;
let Ws = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Bs = (s, e = 21)=>(t = e)=>{
        let r = "", n = t;
        for(; n--;)r += s[Math.random() * s.length | 0];
        return r;
    }, qs = (s = 21)=>{
    let e = "", t = s;
    for(; t--;)e += Ws[Math.random() * 64 | 0];
    return e;
};
var Gs = {
    nanoid: qs,
    customAlphabet: Bs
};
let { SourceMapConsumer: oi, SourceMapGenerator: li } = Le, { existsSync: Ys, readFileSync: Hs } = Le, { dirname: gr, join: Qs } = Le;
function Js(s) {
    return ("TURBOPACK compile-time truthy", 1) ? Buffer.from(s, "base64").toString() : ("TURBOPACK unreachable", undefined);
}
let jr = class {
    constructor(e, t){
        if (t.map === !1) return;
        this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
        let r = t.map ? t.map.prev : void 0, n = this.loadMap(t.from, r);
        !this.mapFile && t.from && (this.mapFile = t.from), this.mapFile && (this.root = gr(this.mapFile)), n && (this.text = n);
    }
    consumer() {
        return this.consumerCache || (this.consumerCache = new oi(this.text)), this.consumerCache;
    }
    decodeInline(e) {
        let t = /^data:application\/json;charset=utf-?8;base64,/, r = /^data:application\/json;base64,/, n = /^data:application\/json;charset=utf-?8,/, l = /^data:application\/json,/;
        if (n.test(e) || l.test(e)) return decodeURIComponent(e.substr(RegExp.lastMatch.length));
        if (t.test(e) || r.test(e)) return Js(e.substr(RegExp.lastMatch.length));
        let i = e.match(/data:application\/json;([^,]+),/)[1];
        throw new Error("Unsupported source map encoding " + i);
    }
    getAnnotationURL(e) {
        return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }
    isMap(e) {
        return typeof e != "object" ? !1 : typeof e.mappings == "string" || typeof e._mappings == "string" || Array.isArray(e.sections);
    }
    loadAnnotation(e) {
        let t = e.match(/\/\*\s*# sourceMappingURL=/gm);
        if (!t) return;
        let r = e.lastIndexOf(t.pop()), n = e.indexOf("*/", r);
        r > -1 && n > -1 && (this.annotation = this.getAnnotationURL(e.substring(r, n)));
    }
    loadFile(e) {
        if (this.root = gr(e), Ys(e)) return this.mapFile = e, Hs(e, "utf-8").toString().trim();
    }
    loadMap(e, t) {
        if (t === !1) return !1;
        if (t) {
            if (typeof t == "string") return t;
            if (typeof t == "function") {
                let r = t(e);
                if (r) {
                    let n = this.loadFile(r);
                    if (!n) throw new Error("Unable to load previous source map: " + r.toString());
                    return n;
                }
            } else {
                if (t instanceof oi) return li.fromSourceMap(t).toString();
                if (t instanceof li) return t.toString();
                if (this.isMap(t)) return JSON.stringify(t);
                throw new Error("Unsupported previous source map format: " + t.toString());
            }
        } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
                let r = this.annotation;
                return e && (r = Qs(gr(e), r)), this.loadFile(r);
            }
        }
    }
    startWith(e, t) {
        return e ? e.substr(0, t.length) === t : !1;
    }
    withContent() {
        return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
};
var Fi = jr;
jr.default = jr;
let { SourceMapConsumer: Ks, SourceMapGenerator: Xs } = Le, { fileURLToPath: ui, pathToFileURL: It } = Le, { isAbsolute: Vr, resolve: Wr } = Le, { nanoid: Zs } = Gs, vr = Le, fi = xn, eo = Fi, yr = Symbol("fromOffsetCache"), to = !!(Ks && Xs), ci = !!(Wr && Vr), qt = class {
    constructor(e, t = {}){
        if (e === null || typeof e > "u" || typeof e == "object" && !e.toString) throw new Error(`PostCSS received ${e} instead of CSS string`);
        if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!ci || /^\w+:\/\//.test(t.from) || Vr(t.from) ? this.file = t.from : this.file = Wr(t.from)), ci && to) {
            let r = new eo(this.css, t);
            if (r.text) {
                this.map = r;
                let n = r.consumer().file;
                !this.file && n && (this.file = this.mapResolve(n));
            }
        }
        this.file || (this.id = "<input css " + Zs(6) + ">"), this.map && (this.map.file = this.from);
    }
    error(e, t, r, n = {}) {
        let l, i, c;
        if (t && typeof t == "object") {
            let o = t, f = r;
            if (typeof o.offset == "number") {
                let u = this.fromOffset(o.offset);
                t = u.line, r = u.col;
            } else t = o.line, r = o.column;
            if (typeof f.offset == "number") {
                let u = this.fromOffset(f.offset);
                i = u.line, c = u.col;
            } else i = f.line, c = f.column;
        } else if (!r) {
            let o = this.fromOffset(t);
            t = o.line, r = o.col;
        }
        let a = this.origin(t, r, i, c);
        return a ? l = new fi(e, a.endLine === void 0 ? a.line : {
            column: a.column,
            line: a.line
        }, a.endLine === void 0 ? a.column : {
            column: a.endColumn,
            line: a.endLine
        }, a.source, a.file, n.plugin) : l = new fi(e, i === void 0 ? t : {
            column: r,
            line: t
        }, i === void 0 ? r : {
            column: c,
            line: i
        }, this.css, this.file, n.plugin), l.input = {
            column: r,
            endColumn: c,
            endLine: i,
            line: t,
            source: this.css
        }, this.file && (It && (l.input.url = It(this.file).toString()), l.input.file = this.file), l;
    }
    fromOffset(e) {
        let t, r;
        if (this[yr]) r = this[yr];
        else {
            let l = this.css.split(`
`);
            r = new Array(l.length);
            let i = 0;
            for(let c = 0, a = l.length; c < a; c++)r[c] = i, i += l[c].length + 1;
            this[yr] = r;
        }
        t = r[r.length - 1];
        let n = 0;
        if (e >= t) n = r.length - 1;
        else {
            let l = r.length - 2, i;
            for(; n < l;)if (i = n + (l - n >> 1), e < r[i]) l = i - 1;
            else if (e >= r[i + 1]) n = i + 1;
            else {
                n = i;
                break;
            }
        }
        return {
            col: e - r[n] + 1,
            line: n + 1
        };
    }
    mapResolve(e) {
        return /^\w+:\/\//.test(e) ? e : Wr(this.map.consumer().sourceRoot || this.map.root || ".", e);
    }
    origin(e, t, r, n) {
        if (!this.map) return !1;
        let l = this.map.consumer(), i = l.originalPositionFor({
            column: t,
            line: e
        });
        if (!i.source) return !1;
        let c;
        typeof r == "number" && (c = l.originalPositionFor({
            column: n,
            line: r
        }));
        let a;
        Vr(i.source) ? a = It(i.source) : a = new URL(i.source, this.map.consumer().sourceRoot || It(this.map.mapFile));
        let o = {
            column: i.column,
            endColumn: c && c.column,
            endLine: c && c.line,
            line: i.line,
            url: a.toString()
        };
        if (a.protocol === "file:") if (ui) o.file = ui(a);
        else throw new Error("file: protocol is not available in this PostCSS build");
        let f = l.sourceContentFor(i.source);
        return f && (o.source = f), o;
    }
    toJSON() {
        let e = {};
        for (let t of [
            "hasBOM",
            "css",
            "file",
            "id"
        ])this[t] != null && (e[t] = this[t]);
        return this.map && (e.map = {
            ...this.map
        }, e.map.consumerCache && (e.map.consumerCache = void 0)), e;
    }
    get from() {
        return this.file || this.id;
    }
};
var er = qt;
qt.default = qt;
vr && vr.registerInput && vr.registerInput(qt);
let { SourceMapConsumer: zi, SourceMapGenerator: Wt } = Le, { dirname: Bt, relative: Ui, resolve: ji, sep: Vi } = Le, { pathToFileURL: di } = Le, ro = er, no = !!(zi && Wt), io = !!(Bt && ji && Ui && Vi), ao = class {
    constructor(e, t, r, n){
        this.stringify = e, this.mapOpts = r.map || {}, this.root = t, this.opts = r, this.css = n, this.originalCSS = n, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
    }
    addAnnotation() {
        let e;
        this.isInline() ? e = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? e = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? e = this.mapOpts.annotation(this.opts.to, this.root) : e = this.outputFile() + ".map";
        let t = `
`;
        this.css.includes(`\r
`) && (t = `\r
`), this.css += t + "/*# sourceMappingURL=" + e + " */";
    }
    applyPrevMaps() {
        for (let e of this.previous()){
            let t = this.toUrl(this.path(e.file)), r = e.root || Bt(e.file), n;
            this.mapOpts.sourcesContent === !1 ? (n = new zi(e.text), n.sourcesContent && (n.sourcesContent = null)) : n = e.consumer(), this.map.applySourceMap(n, t, this.toUrl(this.path(r)));
        }
    }
    clearAnnotation() {
        if (this.mapOpts.annotation !== !1) if (this.root) {
            let e;
            for(let t = this.root.nodes.length - 1; t >= 0; t--)e = this.root.nodes[t], e.type === "comment" && e.text.indexOf("# sourceMappingURL=") === 0 && this.root.removeChild(t);
        } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""));
    }
    generate() {
        if (this.clearAnnotation(), io && no && this.isMap()) return this.generateMap();
        {
            let e = "";
            return this.stringify(this.root, (t)=>{
                e += t;
            }), [
                e
            ];
        }
    }
    generateMap() {
        if (this.root) this.generateString();
        else if (this.previous().length === 1) {
            let e = this.previous()[0].consumer();
            e.file = this.outputFile(), this.map = Wt.fromSourceMap(e, {
                ignoreInvalidMapping: !0
            });
        } else this.map = new Wt({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
        }), this.map.addMapping({
            generated: {
                column: 0,
                line: 1
            },
            original: {
                column: 0,
                line: 1
            },
            source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
        });
        return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [
            this.css
        ] : [
            this.css,
            this.map
        ];
    }
    generateString() {
        this.css = "", this.map = new Wt({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
        });
        let e = 1, t = 1, r = "<no source>", n = {
            generated: {
                column: 0,
                line: 0
            },
            original: {
                column: 0,
                line: 0
            },
            source: ""
        }, l, i;
        this.stringify(this.root, (c, a, o)=>{
            if (this.css += c, a && o !== "end" && (n.generated.line = e, n.generated.column = t - 1, a.source && a.source.start ? (n.source = this.sourcePath(a), n.original.line = a.source.start.line, n.original.column = a.source.start.column - 1, this.map.addMapping(n)) : (n.source = r, n.original.line = 1, n.original.column = 0, this.map.addMapping(n))), l = c.match(/\n/g), l ? (e += l.length, i = c.lastIndexOf(`
`), t = c.length - i) : t += c.length, a && o !== "start") {
                let f = a.parent || {
                    raws: {}
                };
                (!(a.type === "decl" || a.type === "atrule" && !a.nodes) || a !== f.last || f.raws.semicolon) && (a.source && a.source.end ? (n.source = this.sourcePath(a), n.original.line = a.source.end.line, n.original.column = a.source.end.column - 1, n.generated.line = e, n.generated.column = t - 2, this.map.addMapping(n)) : (n.source = r, n.original.line = 1, n.original.column = 0, n.generated.line = e, n.generated.column = t - 1, this.map.addMapping(n)));
            }
        });
    }
    isAnnotation() {
        return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((e)=>e.annotation) : !0;
    }
    isInline() {
        if (typeof this.mapOpts.inline < "u") return this.mapOpts.inline;
        let e = this.mapOpts.annotation;
        return typeof e < "u" && e !== !0 ? !1 : this.previous().length ? this.previous().some((t)=>t.inline) : !0;
    }
    isMap() {
        return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
    }
    isSourcesContent() {
        return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((e)=>e.withContent()) : !0;
    }
    outputFile() {
        return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
    }
    path(e) {
        if (this.mapOpts.absolute || e.charCodeAt(0) === 60 || /^\w+:\/\//.test(e)) return e;
        let t = this.memoizedPaths.get(e);
        if (t) return t;
        let r = this.opts.to ? Bt(this.opts.to) : ".";
        typeof this.mapOpts.annotation == "string" && (r = Bt(ji(r, this.mapOpts.annotation)));
        let n = Ui(r, e);
        return this.memoizedPaths.set(e, n), n;
    }
    previous() {
        if (!this.previousMaps) if (this.previousMaps = [], this.root) this.root.walk((e)=>{
            if (e.source && e.source.input.map) {
                let t = e.source.input.map;
                this.previousMaps.includes(t) || this.previousMaps.push(t);
            }
        });
        else {
            let e = new ro(this.originalCSS, this.opts);
            e.map && this.previousMaps.push(e.map);
        }
        return this.previousMaps;
    }
    setSourcesContent() {
        let e = {};
        if (this.root) this.root.walk((t)=>{
            if (t.source) {
                let r = t.source.input.from;
                if (r && !e[r]) {
                    e[r] = !0;
                    let n = this.usesFileUrls ? this.toFileUrl(r) : this.toUrl(this.path(r));
                    this.map.setSourceContent(n, t.source.input.css);
                }
            }
        });
        else if (this.css) {
            let t = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(t, this.css);
        }
    }
    sourcePath(e) {
        return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e.source.input.from) : this.toUrl(this.path(e.source.input.from));
    }
    toBase64(e) {
        return ("TURBOPACK compile-time truthy", 1) ? Buffer.from(e).toString("base64") : ("TURBOPACK unreachable", undefined);
    }
    toFileUrl(e) {
        let t = this.memoizedFileURLs.get(e);
        if (t) return t;
        if (di) {
            let r = di(e).toString();
            return this.memoizedFileURLs.set(e, r), r;
        } else throw new Error("`map.absolute` option is not available in this PostCSS build");
    }
    toUrl(e) {
        let t = this.memoizedURLs.get(e);
        if (t) return t;
        Vi === "\\" && (e = e.replace(/\\/g, "/"));
        let r = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
        return this.memoizedURLs.set(e, r), r;
    }
};
var Wi = ao;
let so = Xt, Br = class extends so {
    constructor(e){
        super(e), this.type = "comment";
    }
};
var tr = Br;
Br.default = Br;
let { isClean: Bi, my: qi } = _t, Gi = Zt, Yi = tr, oo = Xt, Hi, _n, Sn, Qi;
function Ji(s) {
    return s.map((e)=>(e.nodes && (e.nodes = Ji(e.nodes)), delete e.source, e));
}
function Ki(s) {
    if (s[Bi] = !1, s.proxyOf.nodes) for (let e of s.proxyOf.nodes)Ki(e);
}
let Ze = class Xi extends oo {
    append(...e) {
        for (let t of e){
            let r = this.normalize(t, this.last);
            for (let n of r)this.proxyOf.nodes.push(n);
        }
        return this.markDirty(), this;
    }
    cleanRaws(e) {
        if (super.cleanRaws(e), this.nodes) for (let t of this.nodes)t.cleanRaws(e);
    }
    each(e) {
        if (!this.proxyOf.nodes) return;
        let t = this.getIterator(), r, n;
        for(; this.indexes[t] < this.proxyOf.nodes.length && (r = this.indexes[t], n = e(this.proxyOf.nodes[r], r), n !== !1);)this.indexes[t] += 1;
        return delete this.indexes[t], n;
    }
    every(e) {
        return this.nodes.every(e);
    }
    getIterator() {
        this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
        let e = this.lastEach;
        return this.indexes[e] = 0, e;
    }
    getProxyProcessor() {
        return {
            get (e, t) {
                return t === "proxyOf" ? e : e[t] ? t === "each" || typeof t == "string" && t.startsWith("walk") ? (...r)=>e[t](...r.map((n)=>typeof n == "function" ? (l, i)=>n(l.toProxy(), i) : n)) : t === "every" || t === "some" ? (r)=>e[t]((n, ...l)=>r(n.toProxy(), ...l)) : t === "root" ? ()=>e.root().toProxy() : t === "nodes" ? e.nodes.map((r)=>r.toProxy()) : t === "first" || t === "last" ? e[t].toProxy() : e[t] : e[t];
            },
            set (e, t, r) {
                return e[t] === r || (e[t] = r, (t === "name" || t === "params" || t === "selector") && e.markDirty()), !0;
            }
        };
    }
    index(e) {
        return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
    }
    insertAfter(e, t) {
        let r = this.index(e), n = this.normalize(t, this.proxyOf.nodes[r]).reverse();
        r = this.index(e);
        for (let i of n)this.proxyOf.nodes.splice(r + 1, 0, i);
        let l;
        for(let i in this.indexes)l = this.indexes[i], r < l && (this.indexes[i] = l + n.length);
        return this.markDirty(), this;
    }
    insertBefore(e, t) {
        let r = this.index(e), n = r === 0 ? "prepend" : !1, l = this.normalize(t, this.proxyOf.nodes[r], n).reverse();
        r = this.index(e);
        for (let c of l)this.proxyOf.nodes.splice(r, 0, c);
        let i;
        for(let c in this.indexes)i = this.indexes[c], r <= i && (this.indexes[c] = i + l.length);
        return this.markDirty(), this;
    }
    normalize(e, t) {
        if (typeof e == "string") e = Ji(Hi(e).nodes);
        else if (typeof e > "u") e = [];
        else if (Array.isArray(e)) {
            e = e.slice(0);
            for (let n of e)n.parent && n.parent.removeChild(n, "ignore");
        } else if (e.type === "root" && this.type !== "document") {
            e = e.nodes.slice(0);
            for (let n of e)n.parent && n.parent.removeChild(n, "ignore");
        } else if (e.type) e = [
            e
        ];
        else if (e.prop) {
            if (typeof e.value > "u") throw new Error("Value field is missed in node creation");
            typeof e.value != "string" && (e.value = String(e.value)), e = [
                new Gi(e)
            ];
        } else if (e.selector) e = [
            new _n(e)
        ];
        else if (e.name) e = [
            new Sn(e)
        ];
        else if (e.text) e = [
            new Yi(e)
        ];
        else throw new Error("Unknown node type in node creation");
        return e.map((n)=>(n[qi] || Xi.rebuild(n), n = n.proxyOf, n.parent && n.parent.removeChild(n), n[Bi] && Ki(n), typeof n.raws.before > "u" && t && typeof t.raws.before < "u" && (n.raws.before = t.raws.before.replace(/\S/g, "")), n.parent = this.proxyOf, n));
    }
    prepend(...e) {
        e = e.reverse();
        for (let t of e){
            let r = this.normalize(t, this.first, "prepend").reverse();
            for (let n of r)this.proxyOf.nodes.unshift(n);
            for(let n in this.indexes)this.indexes[n] = this.indexes[n] + r.length;
        }
        return this.markDirty(), this;
    }
    push(e) {
        return e.parent = this, this.proxyOf.nodes.push(e), this;
    }
    removeAll() {
        for (let e of this.proxyOf.nodes)e.parent = void 0;
        return this.proxyOf.nodes = [], this.markDirty(), this;
    }
    removeChild(e) {
        e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
        let t;
        for(let r in this.indexes)t = this.indexes[r], t >= e && (this.indexes[r] = t - 1);
        return this.markDirty(), this;
    }
    replaceValues(e, t, r) {
        return r || (r = t, t = {}), this.walkDecls((n)=>{
            t.props && !t.props.includes(n.prop) || t.fast && !n.value.includes(t.fast) || (n.value = n.value.replace(e, r));
        }), this.markDirty(), this;
    }
    some(e) {
        return this.nodes.some(e);
    }
    walk(e) {
        return this.each((t, r)=>{
            let n;
            try {
                n = e(t, r);
            } catch (l) {
                throw t.addToError(l);
            }
            return n !== !1 && t.walk && (n = t.walk(e)), n;
        });
    }
    walkAtRules(e, t) {
        return t ? e instanceof RegExp ? this.walk((r, n)=>{
            if (r.type === "atrule" && e.test(r.name)) return t(r, n);
        }) : this.walk((r, n)=>{
            if (r.type === "atrule" && r.name === e) return t(r, n);
        }) : (t = e, this.walk((r, n)=>{
            if (r.type === "atrule") return t(r, n);
        }));
    }
    walkComments(e) {
        return this.walk((t, r)=>{
            if (t.type === "comment") return e(t, r);
        });
    }
    walkDecls(e, t) {
        return t ? e instanceof RegExp ? this.walk((r, n)=>{
            if (r.type === "decl" && e.test(r.prop)) return t(r, n);
        }) : this.walk((r, n)=>{
            if (r.type === "decl" && r.prop === e) return t(r, n);
        }) : (t = e, this.walk((r, n)=>{
            if (r.type === "decl") return t(r, n);
        }));
    }
    walkRules(e, t) {
        return t ? e instanceof RegExp ? this.walk((r, n)=>{
            if (r.type === "rule" && e.test(r.selector)) return t(r, n);
        }) : this.walk((r, n)=>{
            if (r.type === "rule" && r.selector === e) return t(r, n);
        }) : (t = e, this.walk((r, n)=>{
            if (r.type === "rule") return t(r, n);
        }));
    }
    get first() {
        if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
    }
    get last() {
        if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
};
Ze.registerParse = (s)=>{
    Hi = s;
};
Ze.registerRule = (s)=>{
    _n = s;
};
Ze.registerAtRule = (s)=>{
    Sn = s;
};
Ze.registerRoot = (s)=>{
    Qi = s;
};
var st = Ze;
Ze.default = Ze;
Ze.rebuild = (s)=>{
    s.type === "atrule" ? Object.setPrototypeOf(s, Sn.prototype) : s.type === "rule" ? Object.setPrototypeOf(s, _n.prototype) : s.type === "decl" ? Object.setPrototypeOf(s, Gi.prototype) : s.type === "comment" ? Object.setPrototypeOf(s, Yi.prototype) : s.type === "root" && Object.setPrototypeOf(s, Qi.prototype), s[qi] = !0, s.nodes && s.nodes.forEach((e)=>{
        Ze.rebuild(e);
    });
};
let lo = st, Zi, ea, vt = class extends lo {
    constructor(e){
        super({
            type: "document",
            ...e
        }), this.nodes || (this.nodes = []);
    }
    toResult(e = {}) {
        return new Zi(new ea(), this, e).stringify();
    }
};
vt.registerLazyResult = (s)=>{
    Zi = s;
};
vt.registerProcessor = (s)=>{
    ea = s;
};
var On = vt;
vt.default = vt;
let pi = {};
var ta = function(e) {
    pi[e] || (pi[e] = !0, typeof console < "u" && console.warn && console.warn(e));
};
let qr = class {
    constructor(e, t = {}){
        if (this.type = "warning", this.text = e, t.node && t.node.source) {
            let r = t.node.rangeBy(t);
            this.line = r.start.line, this.column = r.start.column, this.endLine = r.end.line, this.endColumn = r.end.column;
        }
        for(let r in t)this[r] = t[r];
    }
    toString() {
        return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
        }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
    }
};
var ra = qr;
qr.default = qr;
let uo = ra, Gr = class {
    constructor(e, t, r){
        this.processor = e, this.messages = [], this.root = t, this.opts = r, this.css = void 0, this.map = void 0;
    }
    toString() {
        return this.css;
    }
    warn(e, t = {}) {
        t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
        let r = new uo(e, t);
        return this.messages.push(r), r;
    }
    warnings() {
        return this.messages.filter((e)=>e.type === "warning");
    }
    get content() {
        return this.css;
    }
};
var kn = Gr;
Gr.default = Gr;
const wr = 39, hi = 34, Rt = 92, mi = 47, $t = 10, ht = 32, Dt = 12, Nt = 9, Lt = 13, fo = 91, co = 93, po = 40, ho = 41, mo = 123, go = 125, vo = 59, yo = 42, wo = 58, bo = 64, Ft = /[\t\n\f\r "#'()/;[\\\]{}]/g, zt = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, xo = /.[\r\n"'(/\\]/, gi = /[\da-f]/i;
var _o = function(e, t = {}) {
    let r = e.css.valueOf(), n = t.ignoreErrors, l, i, c, a, o, f, u, p, _, x, h = r.length, m = 0, C = [], S = [];
    function k() {
        return m;
    }
    function O(P) {
        throw e.error("Unclosed " + P, m);
    }
    function E() {
        return S.length === 0 && m >= h;
    }
    function M(P) {
        if (S.length) return S.pop();
        if (m >= h) return;
        let b = P ? P.ignoreUnclosed : !1;
        switch(l = r.charCodeAt(m), l){
            case $t:
            case ht:
            case Nt:
            case Lt:
            case Dt:
                {
                    i = m;
                    do i += 1, l = r.charCodeAt(i);
                    while (l === ht || l === $t || l === Nt || l === Lt || l === Dt)
                    x = [
                        "space",
                        r.slice(m, i)
                    ], m = i - 1;
                    break;
                }
            case fo:
            case co:
            case mo:
            case go:
            case wo:
            case vo:
            case ho:
                {
                    let A = String.fromCharCode(l);
                    x = [
                        A,
                        A,
                        m
                    ];
                    break;
                }
            case po:
                {
                    if (p = C.length ? C.pop()[1] : "", _ = r.charCodeAt(m + 1), p === "url" && _ !== wr && _ !== hi && _ !== ht && _ !== $t && _ !== Nt && _ !== Dt && _ !== Lt) {
                        i = m;
                        do {
                            if (f = !1, i = r.indexOf(")", i + 1), i === -1) if (n || b) {
                                i = m;
                                break;
                            } else O("bracket");
                            for(u = i; r.charCodeAt(u - 1) === Rt;)u -= 1, f = !f;
                        }while (f)
                        x = [
                            "brackets",
                            r.slice(m, i + 1),
                            m,
                            i
                        ], m = i;
                    } else i = r.indexOf(")", m + 1), a = r.slice(m, i + 1), i === -1 || xo.test(a) ? x = [
                        "(",
                        "(",
                        m
                    ] : (x = [
                        "brackets",
                        a,
                        m,
                        i
                    ], m = i);
                    break;
                }
            case wr:
            case hi:
                {
                    c = l === wr ? "'" : '"', i = m;
                    do {
                        if (f = !1, i = r.indexOf(c, i + 1), i === -1) if (n || b) {
                            i = m + 1;
                            break;
                        } else O("string");
                        for(u = i; r.charCodeAt(u - 1) === Rt;)u -= 1, f = !f;
                    }while (f)
                    x = [
                        "string",
                        r.slice(m, i + 1),
                        m,
                        i
                    ], m = i;
                    break;
                }
            case bo:
                {
                    Ft.lastIndex = m + 1, Ft.test(r), Ft.lastIndex === 0 ? i = r.length - 1 : i = Ft.lastIndex - 2, x = [
                        "at-word",
                        r.slice(m, i + 1),
                        m,
                        i
                    ], m = i;
                    break;
                }
            case Rt:
                {
                    for(i = m, o = !0; r.charCodeAt(i + 1) === Rt;)i += 1, o = !o;
                    if (l = r.charCodeAt(i + 1), o && l !== mi && l !== ht && l !== $t && l !== Nt && l !== Lt && l !== Dt && (i += 1, gi.test(r.charAt(i)))) {
                        for(; gi.test(r.charAt(i + 1));)i += 1;
                        r.charCodeAt(i + 1) === ht && (i += 1);
                    }
                    x = [
                        "word",
                        r.slice(m, i + 1),
                        m,
                        i
                    ], m = i;
                    break;
                }
            default:
                {
                    l === mi && r.charCodeAt(m + 1) === yo ? (i = r.indexOf("*/", m + 2) + 1, i === 0 && (n || b ? i = r.length : O("comment")), x = [
                        "comment",
                        r.slice(m, i + 1),
                        m,
                        i
                    ], m = i) : (zt.lastIndex = m + 1, zt.test(r), zt.lastIndex === 0 ? i = r.length - 1 : i = zt.lastIndex - 2, x = [
                        "word",
                        r.slice(m, i + 1),
                        m,
                        i
                    ], C.push(x), m = i);
                    break;
                }
        }
        return m++, x;
    }
    function D(P) {
        S.push(P);
    }
    return {
        back: D,
        endOfFile: E,
        nextToken: M,
        position: k
    };
};
let na = st, Gt = class extends na {
    constructor(e){
        super(e), this.type = "atrule";
    }
    append(...e) {
        return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
    }
    prepend(...e) {
        return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
    }
};
var An = Gt;
Gt.default = Gt;
na.registerAtRule(Gt);
let ia = st, aa, sa, ut = class extends ia {
    constructor(e){
        super(e), this.type = "root", this.nodes || (this.nodes = []);
    }
    normalize(e, t, r) {
        let n = super.normalize(e);
        if (t) {
            if (r === "prepend") this.nodes.length > 1 ? t.raws.before = this.nodes[1].raws.before : delete t.raws.before;
            else if (this.first !== t) for (let l of n)l.raws.before = t.raws.before;
        }
        return n;
    }
    removeChild(e, t) {
        let r = this.index(e);
        return !t && r === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[r].raws.before), super.removeChild(e);
    }
    toResult(e = {}) {
        return new aa(new sa(), this, e).stringify();
    }
};
ut.registerLazyResult = (s)=>{
    aa = s;
};
ut.registerProcessor = (s)=>{
    sa = s;
};
var St = ut;
ut.default = ut;
ia.registerRoot(ut);
let yt = {
    comma (s) {
        return yt.split(s, [
            ","
        ], !0);
    },
    space (s) {
        let e = [
            " ",
            `
`,
            "	"
        ];
        return yt.split(s, e);
    },
    split (s, e, t) {
        let r = [], n = "", l = !1, i = 0, c = !1, a = "", o = !1;
        for (let f of s)o ? o = !1 : f === "\\" ? o = !0 : c ? f === a && (c = !1) : f === '"' || f === "'" ? (c = !0, a = f) : f === "(" ? i += 1 : f === ")" ? i > 0 && (i -= 1) : i === 0 && e.includes(f) && (l = !0), l ? (n !== "" && r.push(n.trim()), n = "", l = !1) : n += f;
        return (t || n !== "") && r.push(n.trim()), r;
    }
};
var oa = yt;
yt.default = yt;
let la = st, So = oa, Yt = class extends la {
    constructor(e){
        super(e), this.type = "rule", this.nodes || (this.nodes = []);
    }
    get selectors() {
        return So.comma(this.selector);
    }
    set selectors(e) {
        let t = this.selector ? this.selector.match(/,\s*/) : null, r = t ? t[0] : "," + this.raw("between", "beforeOpen");
        this.selector = e.join(r);
    }
};
var Cn = Yt;
Yt.default = Yt;
la.registerRule(Yt);
let Oo = Zt, ko = _o, Ao = tr, Co = An, Eo = St, vi = Cn;
const yi = {
    empty: !0,
    space: !0
};
function Po(s) {
    for(let e = s.length - 1; e >= 0; e--){
        let t = s[e], r = t[3] || t[2];
        if (r) return r;
    }
}
let To = class {
    constructor(e){
        this.input = e, this.root = new Eo(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: e,
            start: {
                column: 1,
                line: 1,
                offset: 0
            }
        };
    }
    atrule(e) {
        let t = new Co();
        t.name = e[1].slice(1), t.name === "" && this.unnamedAtrule(t, e), this.init(t, e[2]);
        let r, n, l, i = !1, c = !1, a = [], o = [];
        for(; !this.tokenizer.endOfFile();){
            if (e = this.tokenizer.nextToken(), r = e[0], r === "(" || r === "[" ? o.push(r === "(" ? ")" : "]") : r === "{" && o.length > 0 ? o.push("}") : r === o[o.length - 1] && o.pop(), o.length === 0) if (r === ";") {
                t.source.end = this.getPosition(e[2]), t.source.end.offset++, this.semicolon = !0;
                break;
            } else if (r === "{") {
                c = !0;
                break;
            } else if (r === "}") {
                if (a.length > 0) {
                    for(l = a.length - 1, n = a[l]; n && n[0] === "space";)n = a[--l];
                    n && (t.source.end = this.getPosition(n[3] || n[2]), t.source.end.offset++);
                }
                this.end(e);
                break;
            } else a.push(e);
            else a.push(e);
            if (this.tokenizer.endOfFile()) {
                i = !0;
                break;
            }
        }
        t.raws.between = this.spacesAndCommentsFromEnd(a), a.length ? (t.raws.afterName = this.spacesAndCommentsFromStart(a), this.raw(t, "params", a), i && (e = a[a.length - 1], t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++, this.spaces = t.raws.between, t.raws.between = "")) : (t.raws.afterName = "", t.params = ""), c && (t.nodes = [], this.current = t);
    }
    checkMissedSemicolon(e) {
        let t = this.colon(e);
        if (t === !1) return;
        let r = 0, n;
        for(let l = t - 1; l >= 0 && (n = e[l], !(n[0] !== "space" && (r += 1, r === 2))); l--);
        throw this.input.error("Missed semicolon", n[0] === "word" ? n[3] + 1 : n[2]);
    }
    colon(e) {
        let t = 0, r, n, l;
        for (let [i, c] of e.entries()){
            if (r = c, n = r[0], n === "(" && (t += 1), n === ")" && (t -= 1), t === 0 && n === ":") if (!l) this.doubleColon(r);
            else {
                if (l[0] === "word" && l[1] === "progid") continue;
                return i;
            }
            l = r;
        }
        return !1;
    }
    comment(e) {
        let t = new Ao();
        this.init(t, e[2]), t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++;
        let r = e[1].slice(2, -2);
        if (/^\s*$/.test(r)) t.text = "", t.raws.left = r, t.raws.right = "";
        else {
            let n = r.match(/^(\s*)([^]*\S)(\s*)$/);
            t.text = n[2], t.raws.left = n[1], t.raws.right = n[3];
        }
    }
    createTokenizer() {
        this.tokenizer = ko(this.input);
    }
    decl(e, t) {
        let r = new Oo();
        this.init(r, e[0][2]);
        let n = e[e.length - 1];
        for(n[0] === ";" && (this.semicolon = !0, e.pop()), r.source.end = this.getPosition(n[3] || n[2] || Po(e)), r.source.end.offset++; e[0][0] !== "word";)e.length === 1 && this.unknownWord(e), r.raws.before += e.shift()[1];
        for(r.source.start = this.getPosition(e[0][2]), r.prop = ""; e.length;){
            let o = e[0][0];
            if (o === ":" || o === "space" || o === "comment") break;
            r.prop += e.shift()[1];
        }
        r.raws.between = "";
        let l;
        for(; e.length;)if (l = e.shift(), l[0] === ":") {
            r.raws.between += l[1];
            break;
        } else l[0] === "word" && /\w/.test(l[1]) && this.unknownWord([
            l
        ]), r.raws.between += l[1];
        (r.prop[0] === "_" || r.prop[0] === "*") && (r.raws.before += r.prop[0], r.prop = r.prop.slice(1));
        let i = [], c;
        for(; e.length && (c = e[0][0], !(c !== "space" && c !== "comment"));)i.push(e.shift());
        this.precheckMissedSemicolon(e);
        for(let o = e.length - 1; o >= 0; o--){
            if (l = e[o], l[1].toLowerCase() === "!important") {
                r.important = !0;
                let f = this.stringFrom(e, o);
                f = this.spacesFromEnd(e) + f, f !== " !important" && (r.raws.important = f);
                break;
            } else if (l[1].toLowerCase() === "important") {
                let f = e.slice(0), u = "";
                for(let p = o; p > 0; p--){
                    let _ = f[p][0];
                    if (u.trim().indexOf("!") === 0 && _ !== "space") break;
                    u = f.pop()[1] + u;
                }
                u.trim().indexOf("!") === 0 && (r.important = !0, r.raws.important = u, e = f);
            }
            if (l[0] !== "space" && l[0] !== "comment") break;
        }
        e.some((o)=>o[0] !== "space" && o[0] !== "comment") && (r.raws.between += i.map((o)=>o[1]).join(""), i = []), this.raw(r, "value", i.concat(e), t), r.value.includes(":") && !t && this.checkMissedSemicolon(e);
    }
    doubleColon(e) {
        throw this.input.error("Double colon", {
            offset: e[2]
        }, {
            offset: e[2] + e[1].length
        });
    }
    emptyRule(e) {
        let t = new vi();
        this.init(t, e[2]), t.selector = "", t.raws.between = "", this.current = t;
    }
    end(e) {
        this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e);
    }
    endFile() {
        this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    freeSemicolon(e) {
        if (this.spaces += e[1], this.current.nodes) {
            let t = this.current.nodes[this.current.nodes.length - 1];
            t && t.type === "rule" && !t.raws.ownSemicolon && (t.raws.ownSemicolon = this.spaces, this.spaces = "");
        }
    }
    // Helpers
    getPosition(e) {
        let t = this.input.fromOffset(e);
        return {
            column: t.col,
            line: t.line,
            offset: e
        };
    }
    init(e, t) {
        this.current.push(e), e.source = {
            input: this.input,
            start: this.getPosition(t)
        }, e.raws.before = this.spaces, this.spaces = "", e.type !== "comment" && (this.semicolon = !1);
    }
    other(e) {
        let t = !1, r = null, n = !1, l = null, i = [], c = e[1].startsWith("--"), a = [], o = e;
        for(; o;){
            if (r = o[0], a.push(o), r === "(" || r === "[") l || (l = o), i.push(r === "(" ? ")" : "]");
            else if (c && n && r === "{") l || (l = o), i.push("}");
            else if (i.length === 0) if (r === ";") if (n) {
                this.decl(a, c);
                return;
            } else break;
            else if (r === "{") {
                this.rule(a);
                return;
            } else if (r === "}") {
                this.tokenizer.back(a.pop()), t = !0;
                break;
            } else r === ":" && (n = !0);
            else r === i[i.length - 1] && (i.pop(), i.length === 0 && (l = null));
            o = this.tokenizer.nextToken();
        }
        if (this.tokenizer.endOfFile() && (t = !0), i.length > 0 && this.unclosedBracket(l), t && n) {
            if (!c) for(; a.length && (o = a[a.length - 1][0], !(o !== "space" && o !== "comment"));)this.tokenizer.back(a.pop());
            this.decl(a, c);
        } else this.unknownWord(a);
    }
    parse() {
        let e;
        for(; !this.tokenizer.endOfFile();)switch(e = this.tokenizer.nextToken(), e[0]){
            case "space":
                this.spaces += e[1];
                break;
            case ";":
                this.freeSemicolon(e);
                break;
            case "}":
                this.end(e);
                break;
            case "comment":
                this.comment(e);
                break;
            case "at-word":
                this.atrule(e);
                break;
            case "{":
                this.emptyRule(e);
                break;
            default:
                this.other(e);
                break;
        }
        this.endFile();
    }
    precheckMissedSemicolon() {}
    raw(e, t, r, n) {
        let l, i, c = r.length, a = "", o = !0, f, u;
        for(let p = 0; p < c; p += 1)l = r[p], i = l[0], i === "space" && p === c - 1 && !n ? o = !1 : i === "comment" ? (u = r[p - 1] ? r[p - 1][0] : "empty", f = r[p + 1] ? r[p + 1][0] : "empty", !yi[u] && !yi[f] ? a.slice(-1) === "," ? o = !1 : a += l[1] : o = !1) : a += l[1];
        if (!o) {
            let p = r.reduce((_, x)=>_ + x[1], "");
            e.raws[t] = {
                raw: p,
                value: a
            };
        }
        e[t] = a;
    }
    rule(e) {
        e.pop();
        let t = new vi();
        this.init(t, e[0][2]), t.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(t, "selector", e), this.current = t;
    }
    spacesAndCommentsFromEnd(e) {
        let t, r = "";
        for(; e.length && (t = e[e.length - 1][0], !(t !== "space" && t !== "comment"));)r = e.pop()[1] + r;
        return r;
    }
    // Errors
    spacesAndCommentsFromStart(e) {
        let t, r = "";
        for(; e.length && (t = e[0][0], !(t !== "space" && t !== "comment"));)r += e.shift()[1];
        return r;
    }
    spacesFromEnd(e) {
        let t, r = "";
        for(; e.length && (t = e[e.length - 1][0], t === "space");)r = e.pop()[1] + r;
        return r;
    }
    stringFrom(e, t) {
        let r = "";
        for(let n = t; n < e.length; n++)r += e[n][1];
        return e.splice(t, e.length - t), r;
    }
    unclosedBlock() {
        let e = this.current.source.start;
        throw this.input.error("Unclosed block", e.line, e.column);
    }
    unclosedBracket(e) {
        throw this.input.error("Unclosed bracket", {
            offset: e[2]
        }, {
            offset: e[2] + 1
        });
    }
    unexpectedClose(e) {
        throw this.input.error("Unexpected }", {
            offset: e[2]
        }, {
            offset: e[2] + 1
        });
    }
    unknownWord(e) {
        throw this.input.error("Unknown word", {
            offset: e[0][2]
        }, {
            offset: e[0][2] + e[0][1].length
        });
    }
    unnamedAtrule(e, t) {
        throw this.input.error("At-rule without name", {
            offset: t[2]
        }, {
            offset: t[2] + t[1].length
        });
    }
};
var Mo = To;
let Io = st, Ro = Mo, $o = er;
function Ht(s, e) {
    let t = new $o(s, e), r = new Ro(t);
    try {
        r.parse();
    } catch (n) {
        throw ("TURBOPACK compile-time value", "development") !== "production" && n.name === "CssSyntaxError" && e && e.from && (/\.scss$/i.test(e.from) ? n.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(e.from) ? n.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(e.from) && (n.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), n;
    }
    return r.root;
}
var En = Ht;
Ht.default = Ht;
Io.registerParse(Ht);
let { isClean: Je, my: Do } = _t, No = Wi, Lo = Kt, Fo = st, zo = On, Uo = ta, wi = kn, jo = En, Vo = St;
const Wo = {
    atrule: "AtRule",
    comment: "Comment",
    decl: "Declaration",
    document: "Document",
    root: "Root",
    rule: "Rule"
}, Bo = {
    AtRule: !0,
    AtRuleExit: !0,
    Comment: !0,
    CommentExit: !0,
    Declaration: !0,
    DeclarationExit: !0,
    Document: !0,
    DocumentExit: !0,
    Once: !0,
    OnceExit: !0,
    postcssPlugin: !0,
    prepare: !0,
    Root: !0,
    RootExit: !0,
    Rule: !0,
    RuleExit: !0
}, qo = {
    Once: !0,
    postcssPlugin: !0,
    prepare: !0
}, ft = 0;
function mt(s) {
    return typeof s == "object" && typeof s.then == "function";
}
function ua(s) {
    let e = !1, t = Wo[s.type];
    return s.type === "decl" ? e = s.prop.toLowerCase() : s.type === "atrule" && (e = s.name.toLowerCase()), e && s.append ? [
        t,
        t + "-" + e,
        ft,
        t + "Exit",
        t + "Exit-" + e
    ] : e ? [
        t,
        t + "-" + e,
        t + "Exit",
        t + "Exit-" + e
    ] : s.append ? [
        t,
        ft,
        t + "Exit"
    ] : [
        t,
        t + "Exit"
    ];
}
function bi(s) {
    let e;
    return s.type === "document" ? e = [
        "Document",
        ft,
        "DocumentExit"
    ] : s.type === "root" ? e = [
        "Root",
        ft,
        "RootExit"
    ] : e = ua(s), {
        eventIndex: 0,
        events: e,
        iterator: 0,
        node: s,
        visitorIndex: 0,
        visitors: []
    };
}
function Yr(s) {
    return s[Je] = !1, s.nodes && s.nodes.forEach((e)=>Yr(e)), s;
}
let Hr = {}, ct = class fa {
    constructor(e, t, r){
        this.stringified = !1, this.processed = !1;
        let n;
        if (typeof t == "object" && t !== null && (t.type === "root" || t.type === "document")) n = Yr(t);
        else if (t instanceof fa || t instanceof wi) n = Yr(t.root), t.map && (typeof r.map > "u" && (r.map = {}), r.map.inline || (r.map.inline = !1), r.map.prev = t.map);
        else {
            let l = jo;
            r.syntax && (l = r.syntax.parse), r.parser && (l = r.parser), l.parse && (l = l.parse);
            try {
                n = l(t, r);
            } catch (i) {
                this.processed = !0, this.error = i;
            }
            n && !n[Do] && Fo.rebuild(n);
        }
        this.result = new wi(e, n, r), this.helpers = {
            ...Hr,
            postcss: Hr,
            result: this.result
        }, this.plugins = this.processor.plugins.map((l)=>typeof l == "object" && l.prepare ? {
                ...l,
                ...l.prepare(this.result)
            } : l);
    }
    async() {
        return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
    }
    catch(e) {
        return this.async().catch(e);
    }
    finally(e) {
        return this.async().then(e, e);
    }
    getAsyncError() {
        throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(e, t) {
        let r = this.result.lastPlugin;
        try {
            if (t && t.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin) e.plugin = r.postcssPlugin, e.setMessage();
            else if (r.postcssVersion && ("TURBOPACK compile-time value", "development") !== "production") {
                let n = r.postcssPlugin, l = r.postcssVersion, i = this.result.processor.version, c = l.split("."), a = i.split(".");
                (c[0] !== a[0] || parseInt(c[1]) > parseInt(a[1])) && console.error("Unknown error from PostCSS plugin. Your current PostCSS version is " + i + ", but " + n + " uses " + l + ". Perhaps this is the source of the error below.");
            }
        } catch (n) {
            console && console.error && console.error(n);
        }
        return e;
    }
    prepareVisitors() {
        this.listeners = {};
        let e = (t, r, n)=>{
            this.listeners[r] || (this.listeners[r] = []), this.listeners[r].push([
                t,
                n
            ]);
        };
        for (let t of this.plugins)if (typeof t == "object") for(let r in t){
            if (!Bo[r] && /^[A-Z]/.test(r)) throw new Error(`Unknown event ${r} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
            if (!qo[r]) if (typeof t[r] == "object") for(let n in t[r])n === "*" ? e(t, r, t[r][n]) : e(t, r + "-" + n.toLowerCase(), t[r][n]);
            else typeof t[r] == "function" && e(t, r, t[r]);
        }
        this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
        this.plugin = 0;
        for(let e = 0; e < this.plugins.length; e++){
            let t = this.plugins[e], r = this.runOnRoot(t);
            if (mt(r)) try {
                await r;
            } catch (n) {
                throw this.handleError(n);
            }
        }
        if (this.prepareVisitors(), this.hasListener) {
            let e = this.result.root;
            for(; !e[Je];){
                e[Je] = !0;
                let t = [
                    bi(e)
                ];
                for(; t.length > 0;){
                    let r = this.visitTick(t);
                    if (mt(r)) try {
                        await r;
                    } catch (n) {
                        let l = t[t.length - 1].node;
                        throw this.handleError(n, l);
                    }
                }
            }
            if (this.listeners.OnceExit) for (let [t, r] of this.listeners.OnceExit){
                this.result.lastPlugin = t;
                try {
                    if (e.type === "document") {
                        let n = e.nodes.map((l)=>r(l, this.helpers));
                        await Promise.all(n);
                    } else await r(e, this.helpers);
                } catch (n) {
                    throw this.handleError(n);
                }
            }
        }
        return this.processed = !0, this.stringify();
    }
    runOnRoot(e) {
        this.result.lastPlugin = e;
        try {
            if (typeof e == "object" && e.Once) {
                if (this.result.root.type === "document") {
                    let t = this.result.root.nodes.map((r)=>e.Once(r, this.helpers));
                    return mt(t[0]) ? Promise.all(t) : t;
                }
                return e.Once(this.result.root, this.helpers);
            } else if (typeof e == "function") return e(this.result.root, this.result);
        } catch (t) {
            throw this.handleError(t);
        }
    }
    stringify() {
        if (this.error) throw this.error;
        if (this.stringified) return this.result;
        this.stringified = !0, this.sync();
        let e = this.result.opts, t = Lo;
        e.syntax && (t = e.syntax.stringify), e.stringifier && (t = e.stringifier), t.stringify && (t = t.stringify);
        let n = new No(t, this.result.root, this.result.opts).generate();
        return this.result.css = n[0], this.result.map = n[1], this.result;
    }
    sync() {
        if (this.error) throw this.error;
        if (this.processed) return this.result;
        if (this.processed = !0, this.processing) throw this.getAsyncError();
        for (let e of this.plugins){
            let t = this.runOnRoot(e);
            if (mt(t)) throw this.getAsyncError();
        }
        if (this.prepareVisitors(), this.hasListener) {
            let e = this.result.root;
            for(; !e[Je];)e[Je] = !0, this.walkSync(e);
            if (this.listeners.OnceExit) if (e.type === "document") for (let t of e.nodes)this.visitSync(this.listeners.OnceExit, t);
            else this.visitSync(this.listeners.OnceExit, e);
        }
        return this.result;
    }
    then(e, t) {
        return ("TURBOPACK compile-time value", "development") !== "production" && ("from" in this.opts || Uo("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.")), this.async().then(e, t);
    }
    toString() {
        return this.css;
    }
    visitSync(e, t) {
        for (let [r, n] of e){
            this.result.lastPlugin = r;
            let l;
            try {
                l = n(t, this.helpers);
            } catch (i) {
                throw this.handleError(i, t.proxyOf);
            }
            if (t.type !== "root" && t.type !== "document" && !t.parent) return !0;
            if (mt(l)) throw this.getAsyncError();
        }
    }
    visitTick(e) {
        let t = e[e.length - 1], { node: r, visitors: n } = t;
        if (r.type !== "root" && r.type !== "document" && !r.parent) {
            e.pop();
            return;
        }
        if (n.length > 0 && t.visitorIndex < n.length) {
            let [i, c] = n[t.visitorIndex];
            t.visitorIndex += 1, t.visitorIndex === n.length && (t.visitors = [], t.visitorIndex = 0), this.result.lastPlugin = i;
            try {
                return c(r.toProxy(), this.helpers);
            } catch (a) {
                throw this.handleError(a, r);
            }
        }
        if (t.iterator !== 0) {
            let i = t.iterator, c;
            for(; c = r.nodes[r.indexes[i]];)if (r.indexes[i] += 1, !c[Je]) {
                c[Je] = !0, e.push(bi(c));
                return;
            }
            t.iterator = 0, delete r.indexes[i];
        }
        let l = t.events;
        for(; t.eventIndex < l.length;){
            let i = l[t.eventIndex];
            if (t.eventIndex += 1, i === ft) {
                r.nodes && r.nodes.length && (r[Je] = !0, t.iterator = r.getIterator());
                return;
            } else if (this.listeners[i]) {
                t.visitors = this.listeners[i];
                return;
            }
        }
        e.pop();
    }
    walkSync(e) {
        e[Je] = !0;
        let t = ua(e);
        for (let r of t)if (r === ft) e.nodes && e.each((n)=>{
            n[Je] || this.walkSync(n);
        });
        else {
            let n = this.listeners[r];
            if (n && this.visitSync(n, e.toProxy())) return;
        }
    }
    warnings() {
        return this.sync().warnings();
    }
    get content() {
        return this.stringify().content;
    }
    get css() {
        return this.stringify().css;
    }
    get map() {
        return this.stringify().map;
    }
    get messages() {
        return this.sync().messages;
    }
    get opts() {
        return this.result.opts;
    }
    get processor() {
        return this.result.processor;
    }
    get root() {
        return this.sync().root;
    }
    get [Symbol.toStringTag]() {
        return "LazyResult";
    }
};
ct.registerPostcss = (s)=>{
    Hr = s;
};
var ca = ct;
ct.default = ct;
Vo.registerLazyResult(ct);
zo.registerLazyResult(ct);
let Go = Wi, Yo = Kt, Ho = ta, Qo = En;
const Jo = kn;
let Qr = class {
    constructor(e, t, r){
        t = t.toString(), this.stringified = !1, this._processor = e, this._css = t, this._opts = r, this._map = void 0;
        let n, l = Yo;
        this.result = new Jo(this._processor, n, this._opts), this.result.css = t;
        let i = this;
        Object.defineProperty(this.result, "root", {
            get () {
                return i.root;
            }
        });
        let c = new Go(l, n, this._opts, t);
        if (c.isMap()) {
            let [a, o] = c.generate();
            a && (this.result.css = a), o && (this.result.map = o);
        } else c.clearAnnotation(), this.result.css = c.css;
    }
    async() {
        return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
    }
    catch(e) {
        return this.async().catch(e);
    }
    finally(e) {
        return this.async().then(e, e);
    }
    sync() {
        if (this.error) throw this.error;
        return this.result;
    }
    then(e, t) {
        return ("TURBOPACK compile-time value", "development") !== "production" && ("from" in this._opts || Ho("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.")), this.async().then(e, t);
    }
    toString() {
        return this._css;
    }
    warnings() {
        return [];
    }
    get content() {
        return this.result.css;
    }
    get css() {
        return this.result.css;
    }
    get map() {
        return this.result.map;
    }
    get messages() {
        return [];
    }
    get opts() {
        return this.result.opts;
    }
    get processor() {
        return this.result.processor;
    }
    get root() {
        if (this._root) return this._root;
        let e, t = Qo;
        try {
            e = t(this._css, this._opts);
        } catch (r) {
            this.error = r;
        }
        if (this.error) throw this.error;
        return this._root = e, e;
    }
    get [Symbol.toStringTag]() {
        return "NoWorkResult";
    }
};
var Ko = Qr;
Qr.default = Qr;
let Xo = Ko, Zo = ca, el = On, tl = St, wt = class {
    constructor(e = []){
        this.version = "8.4.40", this.plugins = this.normalize(e);
    }
    normalize(e) {
        let t = [];
        for (let r of e)if (r.postcss === !0 ? r = r() : r.postcss && (r = r.postcss), typeof r == "object" && Array.isArray(r.plugins)) t = t.concat(r.plugins);
        else if (typeof r == "object" && r.postcssPlugin) t.push(r);
        else if (typeof r == "function") t.push(r);
        else if (typeof r == "object" && (r.parse || r.stringify)) {
            if ("TURBOPACK compile-time truthy", 1) throw new Error("PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation.");
        } else throw new Error(r + " is not a PostCSS plugin");
        return t;
    }
    process(e, t = {}) {
        return !this.plugins.length && !t.parser && !t.stringifier && !t.syntax ? new Xo(this, e, t) : new Zo(this, e, t);
    }
    use(e) {
        return this.plugins = this.plugins.concat(this.normalize([
            e
        ])), this;
    }
};
var rl = wt;
wt.default = wt;
tl.registerProcessor(wt);
el.registerProcessor(wt);
let nl = Zt, il = Fi, al = tr, sl = An, ol = er, ll = St, ul = Cn;
function bt(s, e) {
    if (Array.isArray(s)) return s.map((n)=>bt(n));
    let { inputs: t, ...r } = s;
    if (t) {
        e = [];
        for (let n of t){
            let l = {
                ...n,
                __proto__: ol.prototype
            };
            l.map && (l.map = {
                ...l.map,
                __proto__: il.prototype
            }), e.push(l);
        }
    }
    if (r.nodes && (r.nodes = s.nodes.map((n)=>bt(n, e))), r.source) {
        let { inputId: n, ...l } = r.source;
        r.source = l, n != null && (r.source.input = e[n]);
    }
    if (r.type === "root") return new ll(r);
    if (r.type === "decl") return new nl(r);
    if (r.type === "rule") return new ul(r);
    if (r.type === "comment") return new al(r);
    if (r.type === "atrule") return new sl(r);
    throw new Error("Unknown node type: " + s.type);
}
var fl = bt;
bt.default = bt;
let cl = xn, da = Zt, dl = ca, pl = st, Pn = rl, hl = Kt, ml = fl, pa = On, gl = ra, ha = tr, ma = An, vl = kn, yl = er, wl = En, bl = oa, ga = Cn, va = St, xl = Xt;
function Ee(...s) {
    return s.length === 1 && Array.isArray(s[0]) && (s = s[0]), new Pn(s);
}
Ee.plugin = function(e, t) {
    let r = !1;
    function n(...i) {
        console && console.warn && !r && (r = !0, console.warn(e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(e + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`));
        let c = t(...i);
        return c.postcssPlugin = e, c.postcssVersion = new Pn().version, c;
    }
    let l;
    return Object.defineProperty(n, "postcss", {
        get () {
            return l || (l = n()), l;
        }
    }), n.process = function(i, c, a) {
        return Ee([
            n(a)
        ]).process(i, c);
    }, n;
};
Ee.stringify = hl;
Ee.parse = wl;
Ee.fromJSON = ml;
Ee.list = bl;
Ee.comment = (s)=>new ha(s);
Ee.atRule = (s)=>new ma(s);
Ee.decl = (s)=>new da(s);
Ee.rule = (s)=>new ga(s);
Ee.root = (s)=>new va(s);
Ee.document = (s)=>new pa(s);
Ee.CssSyntaxError = cl;
Ee.Declaration = da;
Ee.Container = pl;
Ee.Processor = Pn;
Ee.Document = pa;
Ee.Comment = ha;
Ee.Warning = gl;
Ee.AtRule = ma;
Ee.Result = vl;
Ee.Input = yl;
Ee.Rule = ga;
Ee.Root = va;
Ee.Node = xl;
dl.registerPostcss(Ee);
var qe = Ee;
Ee.default = Ee;
const De = /* @__PURE__ */ Qe(qe);
De.stringify;
De.fromJSON;
De.plugin;
const _l = De.parse;
De.list;
De.document;
De.comment;
De.atRule;
const Sl = De.rule, Ol = De.decl;
De.root;
De.CssSyntaxError;
De.Declaration;
De.Container;
De.Processor;
De.Document;
De.Comment;
De.Warning;
const kl = De.AtRule;
De.Result;
De.Input;
const xi = De.Rule, Al = De.Root;
De.Node;
const Cl = (s)=>s.replace(/\/\*[\s\S]*?\*\//gm, "").replace(/;\s+/gm, ";").replace(/:\s+/gm, ":").replace(/\)\s*{/gm, "){").replace(/\s+\(/gm, "(").replace(/{\s+/gm, "{").replace(/}\s+/gm, "}").replace(/\s*{/gm, "{").replace(/;?\s*}/gm, "}");
var ya = {}, wa = {
    exports: {}
};
(function(s, e) {
    (function(t, r) {
        s.exports = function(n, l, i, c, a) {
            for(l = l.split ? l.split(".") : l, c = 0; c < l.length; c++)n = n ? n[l[c]] : a;
            return n === a ? i : n;
        };
    })();
})(wa);
var ba = wa.exports, xa = {
    exports: {}
};
(function(s) {
    (function() {
        function e(n, l, i) {
            if (!n) return null;
            e.caseSensitive || (n = n.toLowerCase());
            var c = e.threshold === null ? null : e.threshold * n.length, a = e.thresholdAbsolute, o;
            c !== null && a !== null ? o = Math.min(c, a) : c !== null ? o = c : a !== null ? o = a : o = null;
            var f, u, p, _, x, h = l.length;
            for(x = 0; x < h; x++)if (u = l[x], i && (u = u[i]), !!u && (e.caseSensitive ? p = u : p = u.toLowerCase(), _ = r(n, p, o), (o === null || _ < o) && (o = _, i && e.returnWinningObject ? f = l[x] : f = u, e.returnFirstMatch))) return f;
            return f || e.nullResultValue;
        }
        e.threshold = 0.4, e.thresholdAbsolute = 20, e.caseSensitive = !1, e.nullResultValue = null, e.returnWinningObject = null, e.returnFirstMatch = !1, s.exports ? s.exports = e : window.didYouMean = e;
        var t = Math.pow(2, 32) - 1;
        function r(n, l, i) {
            i = i || i === 0 ? i : t;
            var c = n.length, a = l.length;
            if (c === 0) return Math.min(i + 1, a);
            if (a === 0) return Math.min(i + 1, c);
            if (Math.abs(c - a) > i) return i + 1;
            var o = [], f, u, p, _, x;
            for(f = 0; f <= a; f++)o[f] = [
                f
            ];
            for(u = 0; u <= c; u++)o[0][u] = u;
            for(f = 1; f <= a; f++){
                for(p = t, _ = 1, f > i && (_ = f - i), x = a + 1, x > i + f && (x = i + f), u = 1; u <= c; u++)u < _ || u > x ? o[f][u] = i + 1 : l.charAt(f - 1) === n.charAt(u - 1) ? o[f][u] = o[f - 1][u - 1] : o[f][u] = Math.min(o[f - 1][u - 1] + 1, // Substitute
                Math.min(o[f][u - 1] + 1, // Insert
                o[f - 1][u] + 1)), o[f][u] < p && (p = o[f][u]);
                if (p > i) return i + 1;
            }
            return o[a][c];
        }
    })();
})(xa);
var El = xa.exports, Ot = {}, dt = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return e;
        }
    });
    function e(t) {
        if (Object.prototype.toString.call(t) !== "[object Object]") return !1;
        const r = Object.getPrototypeOf(t);
        return r === null || Object.getPrototypeOf(r) === null;
    }
})(dt);
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return n;
        }
    });
    const e = /* @__PURE__ */ r(qe), t = /* @__PURE__ */ r(dt);
    function r(l) {
        return l && l.__esModule ? l : {
            default: l
        };
    }
    function n(l) {
        return [
            "fontSize",
            "outline"
        ].includes(l) ? (i)=>(typeof i == "function" && (i = i({})), Array.isArray(i) && (i = i[0]), i) : l === "fontFamily" ? (i)=>{
            typeof i == "function" && (i = i({}));
            let c = Array.isArray(i) && (0, t.default)(i[1]) ? i[0] : i;
            return Array.isArray(c) ? c.join(", ") : c;
        } : [
            "boxShadow",
            "transitionProperty",
            "transitionDuration",
            "transitionDelay",
            "transitionTimingFunction",
            "backgroundImage",
            "backgroundSize",
            "backgroundColor",
            "cursor",
            "animation"
        ].includes(l) ? (i)=>(typeof i == "function" && (i = i({})), Array.isArray(i) && (i = i.join(", ")), i) : [
            "gridTemplateColumns",
            "gridTemplateRows",
            "objectPosition"
        ].includes(l) ? (i)=>(typeof i == "function" && (i = i({})), typeof i == "string" && (i = e.default.list.comma(i).join(" ")), i) : (i, c = {})=>(typeof i == "function" && (i = i(c)), i);
    }
})(Ot);
var br = 40, xr = 41, Ut = 39, _r = 34, Sr = 92, lt = 47, Or = 44, kr = 58, jt = 42, Pl = 117, Tl = 85, Ml = 43, Il = /^[a-f0-9?-]+$/i, Rl = function(s) {
    for(var e = [], t = s, r, n, l, i, c, a, o, f, u = 0, p = t.charCodeAt(u), _ = t.length, x = [
        {
            nodes: e
        }
    ], h = 0, m, C = "", S = "", k = ""; u < _;)if (p <= 32) {
        r = u;
        do r += 1, p = t.charCodeAt(r);
        while (p <= 32)
        i = t.slice(u, r), l = e[e.length - 1], p === xr && h ? k = i : l && l.type === "div" ? (l.after = i, l.sourceEndIndex += i.length) : p === Or || p === kr || p === lt && t.charCodeAt(r + 1) !== jt && (!m || m && m.type === "function" && !1) ? S = i : e.push({
            type: "space",
            sourceIndex: u,
            sourceEndIndex: r,
            value: i
        }), u = r;
    } else if (p === Ut || p === _r) {
        r = u, n = p === Ut ? "'" : '"', i = {
            type: "string",
            sourceIndex: u,
            quote: n
        };
        do if (c = !1, r = t.indexOf(n, r + 1), ~r) for(a = r; t.charCodeAt(a - 1) === Sr;)a -= 1, c = !c;
        else t += n, r = t.length - 1, i.unclosed = !0;
        while (c)
        i.value = t.slice(u + 1, r), i.sourceEndIndex = i.unclosed ? r : r + 1, e.push(i), u = r + 1, p = t.charCodeAt(u);
    } else if (p === lt && t.charCodeAt(u + 1) === jt) r = t.indexOf("*/", u), i = {
        type: "comment",
        sourceIndex: u,
        sourceEndIndex: r + 2
    }, r === -1 && (i.unclosed = !0, r = t.length, i.sourceEndIndex = r), i.value = t.slice(u + 2, r), e.push(i), u = r + 2, p = t.charCodeAt(u);
    else if ((p === lt || p === jt) && m && m.type === "function") i = t[u], e.push({
        type: "word",
        sourceIndex: u - S.length,
        sourceEndIndex: u + i.length,
        value: i
    }), u += 1, p = t.charCodeAt(u);
    else if (p === lt || p === Or || p === kr) i = t[u], e.push({
        type: "div",
        sourceIndex: u - S.length,
        sourceEndIndex: u + i.length,
        value: i,
        before: S,
        after: ""
    }), S = "", u += 1, p = t.charCodeAt(u);
    else if (br === p) {
        r = u;
        do r += 1, p = t.charCodeAt(r);
        while (p <= 32)
        if (f = u, i = {
            type: "function",
            sourceIndex: u - C.length,
            value: C,
            before: t.slice(f + 1, r)
        }, u = r, C === "url" && p !== Ut && p !== _r) {
            r -= 1;
            do if (c = !1, r = t.indexOf(")", r + 1), ~r) for(a = r; t.charCodeAt(a - 1) === Sr;)a -= 1, c = !c;
            else t += ")", r = t.length - 1, i.unclosed = !0;
            while (c)
            o = r;
            do o -= 1, p = t.charCodeAt(o);
            while (p <= 32)
            f < o ? (u !== o + 1 ? i.nodes = [
                {
                    type: "word",
                    sourceIndex: u,
                    sourceEndIndex: o + 1,
                    value: t.slice(u, o + 1)
                }
            ] : i.nodes = [], i.unclosed && o + 1 !== r ? (i.after = "", i.nodes.push({
                type: "space",
                sourceIndex: o + 1,
                sourceEndIndex: r,
                value: t.slice(o + 1, r)
            })) : (i.after = t.slice(o + 1, r), i.sourceEndIndex = r)) : (i.after = "", i.nodes = []), u = r + 1, i.sourceEndIndex = i.unclosed ? r : u, p = t.charCodeAt(u), e.push(i);
        } else h += 1, i.after = "", i.sourceEndIndex = u + 1, e.push(i), x.push(i), e = i.nodes = [], m = i;
        C = "";
    } else if (xr === p && h) u += 1, p = t.charCodeAt(u), m.after = k, m.sourceEndIndex += k.length, k = "", h -= 1, x[x.length - 1].sourceEndIndex = u, x.pop(), m = x[h], e = m.nodes;
    else {
        r = u;
        do p === Sr && (r += 1), r += 1, p = t.charCodeAt(r);
        while (r < _ && !(p <= 32 || p === Ut || p === _r || p === Or || p === kr || p === lt || p === br || p === jt && m && m.type === "function" || p === lt && m.type === "function" || p === xr && h))
        i = t.slice(u, r), br === p ? C = i : (Pl === i.charCodeAt(0) || Tl === i.charCodeAt(0)) && Ml === i.charCodeAt(1) && Il.test(i.slice(2)) ? e.push({
            type: "unicode-range",
            sourceIndex: u,
            sourceEndIndex: r,
            value: i
        }) : e.push({
            type: "word",
            sourceIndex: u,
            sourceEndIndex: r,
            value: i
        }), u = r;
    }
    for(u = x.length - 1; u; u -= 1)x[u].unclosed = !0, x[u].sourceEndIndex = t.length;
    return x[0].nodes;
}, $l = function s(e, t, r) {
    var n, l, i, c;
    for(n = 0, l = e.length; n < l; n += 1)i = e[n], r || (c = t(i, n, e)), c !== !1 && i.type === "function" && Array.isArray(i.nodes) && s(i.nodes, t, r), r && t(i, n, e);
};
function _i(s, e) {
    var t = s.type, r = s.value, n, l;
    return e && (l = e(s)) !== void 0 ? l : t === "word" || t === "space" ? r : t === "string" ? (n = s.quote || "", n + r + (s.unclosed ? "" : n)) : t === "comment" ? "/*" + r + (s.unclosed ? "" : "*/") : t === "div" ? (s.before || "") + r + (s.after || "") : Array.isArray(s.nodes) ? (n = _a(s.nodes, e), t !== "function" ? n : r + "(" + (s.before || "") + n + (s.after || "") + (s.unclosed ? "" : ")")) : r;
}
function _a(s, e) {
    var t, r;
    if (Array.isArray(s)) {
        for(t = "", r = s.length - 1; ~r; r -= 1)t = _i(s[r], e) + t;
        return t;
    }
    return _i(s, e);
}
var Dl = _a, Ar, Si;
function Nl() {
    if (Si) return Ar;
    Si = 1;
    var s = 45, e = 43, t = 46, r = 101, n = 69;
    function l(i) {
        var c = i.charCodeAt(0), a;
        if (c === e || c === s) {
            if (a = i.charCodeAt(1), a >= 48 && a <= 57) return !0;
            var o = i.charCodeAt(2);
            return a === t && o >= 48 && o <= 57;
        }
        return c === t ? (a = i.charCodeAt(1), a >= 48 && a <= 57) : c >= 48 && c <= 57;
    }
    return Ar = function(i) {
        var c = 0, a = i.length, o, f, u;
        if (a === 0 || !l(i)) return !1;
        for(o = i.charCodeAt(c), (o === e || o === s) && c++; c < a && (o = i.charCodeAt(c), !(o < 48 || o > 57));)c += 1;
        if (o = i.charCodeAt(c), f = i.charCodeAt(c + 1), o === t && f >= 48 && f <= 57) for(c += 2; c < a && (o = i.charCodeAt(c), !(o < 48 || o > 57));)c += 1;
        if (o = i.charCodeAt(c), f = i.charCodeAt(c + 1), u = i.charCodeAt(c + 2), (o === r || o === n) && (f >= 48 && f <= 57 || (f === e || f === s) && u >= 48 && u <= 57)) for(c += f === e || f === s ? 3 : 2; c < a && (o = i.charCodeAt(c), !(o < 48 || o > 57));)c += 1;
        return {
            number: i.slice(0, c),
            unit: i.slice(c)
        };
    }, Ar;
}
var Ll = Rl, Sa = $l, Oa = Dl;
function nt(s) {
    return this instanceof nt ? (this.nodes = Ll(s), this) : new nt(s);
}
nt.prototype.toString = function() {
    return Array.isArray(this.nodes) ? Oa(this.nodes) : "";
};
nt.prototype.walk = function(s, e) {
    return Sa(this.nodes, s, e), this;
};
nt.unit = Nl();
nt.walk = Sa;
nt.stringify = Oa;
var Fl = nt, rr = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    });
    function e(c, a) {
        for(var o in a)Object.defineProperty(c, o, {
            enumerable: !0,
            get: a[o]
        });
    }
    e(s, {
        normalizeScreens: function() {
            return t;
        },
        isScreenSortable: function() {
            return r;
        },
        compareScreens: function() {
            return n;
        },
        toScreen: function() {
            return l;
        }
    });
    function t(c, a = !0) {
        return Array.isArray(c) ? c.map((o)=>{
            if (a && Array.isArray(o)) throw new Error("The tuple syntax is not supported for `screens`.");
            if (typeof o == "string") return {
                name: o.toString(),
                not: !1,
                values: [
                    {
                        min: o,
                        max: void 0
                    }
                ]
            };
            let [f, u] = o;
            return f = f.toString(), typeof u == "string" ? {
                name: f,
                not: !1,
                values: [
                    {
                        min: u,
                        max: void 0
                    }
                ]
            } : Array.isArray(u) ? {
                name: f,
                not: !1,
                values: u.map((p)=>i(p))
            } : {
                name: f,
                not: !1,
                values: [
                    i(u)
                ]
            };
        }) : t(Object.entries(c ?? {}), !1);
    }
    function r(c) {
        return c.values.length !== 1 ? {
            result: !1,
            reason: "multiple-values"
        } : c.values[0].raw !== void 0 ? {
            result: !1,
            reason: "raw-values"
        } : c.values[0].min !== void 0 && c.values[0].max !== void 0 ? {
            result: !1,
            reason: "min-and-max"
        } : {
            result: !0,
            reason: null
        };
    }
    function n(c, a, o) {
        let f = l(a, c), u = l(o, c), p = r(f), _ = r(u);
        if (p.reason === "multiple-values" || _.reason === "multiple-values") throw new Error("Attempted to sort a screen with multiple values. This should never happen. Please open a bug report.");
        if (p.reason === "raw-values" || _.reason === "raw-values") throw new Error("Attempted to sort a screen with raw values. This should never happen. Please open a bug report.");
        if (p.reason === "min-and-max" || _.reason === "min-and-max") throw new Error("Attempted to sort a screen with both min and max values. This should never happen. Please open a bug report.");
        let { min: x, max: h } = f.values[0], { min: m, max: C } = u.values[0];
        a.not && ([x, h] = [
            h,
            x
        ]), o.not && ([m, C] = [
            C,
            m
        ]), x = x === void 0 ? x : parseFloat(x), h = h === void 0 ? h : parseFloat(h), m = m === void 0 ? m : parseFloat(m), C = C === void 0 ? C : parseFloat(C);
        let [S, k] = c === "min" ? [
            x,
            m
        ] : [
            C,
            h
        ];
        return S - k;
    }
    function l(c, a) {
        return typeof c == "object" ? c : {
            name: "arbitrary-screen",
            values: [
                {
                    [a]: c
                }
            ]
        };
    }
    function i({ "min-width": c, min: a = c, max: o, raw: f } = {}) {
        return {
            min: a,
            max: o,
            raw: f
        };
    }
})(rr);
var nr = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return e;
        }
    });
    function e(t) {
        return t = Array.isArray(t) ? t : [
            t
        ], t.map((r)=>{
            let n = r.values.map((l)=>l.raw !== void 0 ? l.raw : [
                    l.min && `(min-width: ${l.min})`,
                    l.max && `(max-width: ${l.max})`
                ].filter(Boolean).join(" and "));
            return r.not ? `not all and ${n}` : n;
        }).join(", ");
    }
})(nr);
var ir = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "toPath", {
        enumerable: !0,
        get: function() {
            return e;
        }
    });
    function e(t) {
        if (Array.isArray(t)) return t;
        let r = t.split("[").length - 1, n = t.split("]").length - 1;
        if (r !== n) throw new Error(`Path is invalid. Has unbalanced brackets: ${t}`);
        return t.split(/\.(?![^\[]*\])|[\[\]]/g).filter(Boolean);
    }
})(ir);
var kt = {}, Tn = {}, ka = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return e;
        }
    });
    const e = {
        aliceblue: [
            240,
            248,
            255
        ],
        antiquewhite: [
            250,
            235,
            215
        ],
        aqua: [
            0,
            255,
            255
        ],
        aquamarine: [
            127,
            255,
            212
        ],
        azure: [
            240,
            255,
            255
        ],
        beige: [
            245,
            245,
            220
        ],
        bisque: [
            255,
            228,
            196
        ],
        black: [
            0,
            0,
            0
        ],
        blanchedalmond: [
            255,
            235,
            205
        ],
        blue: [
            0,
            0,
            255
        ],
        blueviolet: [
            138,
            43,
            226
        ],
        brown: [
            165,
            42,
            42
        ],
        burlywood: [
            222,
            184,
            135
        ],
        cadetblue: [
            95,
            158,
            160
        ],
        chartreuse: [
            127,
            255,
            0
        ],
        chocolate: [
            210,
            105,
            30
        ],
        coral: [
            255,
            127,
            80
        ],
        cornflowerblue: [
            100,
            149,
            237
        ],
        cornsilk: [
            255,
            248,
            220
        ],
        crimson: [
            220,
            20,
            60
        ],
        cyan: [
            0,
            255,
            255
        ],
        darkblue: [
            0,
            0,
            139
        ],
        darkcyan: [
            0,
            139,
            139
        ],
        darkgoldenrod: [
            184,
            134,
            11
        ],
        darkgray: [
            169,
            169,
            169
        ],
        darkgreen: [
            0,
            100,
            0
        ],
        darkgrey: [
            169,
            169,
            169
        ],
        darkkhaki: [
            189,
            183,
            107
        ],
        darkmagenta: [
            139,
            0,
            139
        ],
        darkolivegreen: [
            85,
            107,
            47
        ],
        darkorange: [
            255,
            140,
            0
        ],
        darkorchid: [
            153,
            50,
            204
        ],
        darkred: [
            139,
            0,
            0
        ],
        darksalmon: [
            233,
            150,
            122
        ],
        darkseagreen: [
            143,
            188,
            143
        ],
        darkslateblue: [
            72,
            61,
            139
        ],
        darkslategray: [
            47,
            79,
            79
        ],
        darkslategrey: [
            47,
            79,
            79
        ],
        darkturquoise: [
            0,
            206,
            209
        ],
        darkviolet: [
            148,
            0,
            211
        ],
        deeppink: [
            255,
            20,
            147
        ],
        deepskyblue: [
            0,
            191,
            255
        ],
        dimgray: [
            105,
            105,
            105
        ],
        dimgrey: [
            105,
            105,
            105
        ],
        dodgerblue: [
            30,
            144,
            255
        ],
        firebrick: [
            178,
            34,
            34
        ],
        floralwhite: [
            255,
            250,
            240
        ],
        forestgreen: [
            34,
            139,
            34
        ],
        fuchsia: [
            255,
            0,
            255
        ],
        gainsboro: [
            220,
            220,
            220
        ],
        ghostwhite: [
            248,
            248,
            255
        ],
        gold: [
            255,
            215,
            0
        ],
        goldenrod: [
            218,
            165,
            32
        ],
        gray: [
            128,
            128,
            128
        ],
        green: [
            0,
            128,
            0
        ],
        greenyellow: [
            173,
            255,
            47
        ],
        grey: [
            128,
            128,
            128
        ],
        honeydew: [
            240,
            255,
            240
        ],
        hotpink: [
            255,
            105,
            180
        ],
        indianred: [
            205,
            92,
            92
        ],
        indigo: [
            75,
            0,
            130
        ],
        ivory: [
            255,
            255,
            240
        ],
        khaki: [
            240,
            230,
            140
        ],
        lavender: [
            230,
            230,
            250
        ],
        lavenderblush: [
            255,
            240,
            245
        ],
        lawngreen: [
            124,
            252,
            0
        ],
        lemonchiffon: [
            255,
            250,
            205
        ],
        lightblue: [
            173,
            216,
            230
        ],
        lightcoral: [
            240,
            128,
            128
        ],
        lightcyan: [
            224,
            255,
            255
        ],
        lightgoldenrodyellow: [
            250,
            250,
            210
        ],
        lightgray: [
            211,
            211,
            211
        ],
        lightgreen: [
            144,
            238,
            144
        ],
        lightgrey: [
            211,
            211,
            211
        ],
        lightpink: [
            255,
            182,
            193
        ],
        lightsalmon: [
            255,
            160,
            122
        ],
        lightseagreen: [
            32,
            178,
            170
        ],
        lightskyblue: [
            135,
            206,
            250
        ],
        lightslategray: [
            119,
            136,
            153
        ],
        lightslategrey: [
            119,
            136,
            153
        ],
        lightsteelblue: [
            176,
            196,
            222
        ],
        lightyellow: [
            255,
            255,
            224
        ],
        lime: [
            0,
            255,
            0
        ],
        limegreen: [
            50,
            205,
            50
        ],
        linen: [
            250,
            240,
            230
        ],
        magenta: [
            255,
            0,
            255
        ],
        maroon: [
            128,
            0,
            0
        ],
        mediumaquamarine: [
            102,
            205,
            170
        ],
        mediumblue: [
            0,
            0,
            205
        ],
        mediumorchid: [
            186,
            85,
            211
        ],
        mediumpurple: [
            147,
            112,
            219
        ],
        mediumseagreen: [
            60,
            179,
            113
        ],
        mediumslateblue: [
            123,
            104,
            238
        ],
        mediumspringgreen: [
            0,
            250,
            154
        ],
        mediumturquoise: [
            72,
            209,
            204
        ],
        mediumvioletred: [
            199,
            21,
            133
        ],
        midnightblue: [
            25,
            25,
            112
        ],
        mintcream: [
            245,
            255,
            250
        ],
        mistyrose: [
            255,
            228,
            225
        ],
        moccasin: [
            255,
            228,
            181
        ],
        navajowhite: [
            255,
            222,
            173
        ],
        navy: [
            0,
            0,
            128
        ],
        oldlace: [
            253,
            245,
            230
        ],
        olive: [
            128,
            128,
            0
        ],
        olivedrab: [
            107,
            142,
            35
        ],
        orange: [
            255,
            165,
            0
        ],
        orangered: [
            255,
            69,
            0
        ],
        orchid: [
            218,
            112,
            214
        ],
        palegoldenrod: [
            238,
            232,
            170
        ],
        palegreen: [
            152,
            251,
            152
        ],
        paleturquoise: [
            175,
            238,
            238
        ],
        palevioletred: [
            219,
            112,
            147
        ],
        papayawhip: [
            255,
            239,
            213
        ],
        peachpuff: [
            255,
            218,
            185
        ],
        peru: [
            205,
            133,
            63
        ],
        pink: [
            255,
            192,
            203
        ],
        plum: [
            221,
            160,
            221
        ],
        powderblue: [
            176,
            224,
            230
        ],
        purple: [
            128,
            0,
            128
        ],
        rebeccapurple: [
            102,
            51,
            153
        ],
        red: [
            255,
            0,
            0
        ],
        rosybrown: [
            188,
            143,
            143
        ],
        royalblue: [
            65,
            105,
            225
        ],
        saddlebrown: [
            139,
            69,
            19
        ],
        salmon: [
            250,
            128,
            114
        ],
        sandybrown: [
            244,
            164,
            96
        ],
        seagreen: [
            46,
            139,
            87
        ],
        seashell: [
            255,
            245,
            238
        ],
        sienna: [
            160,
            82,
            45
        ],
        silver: [
            192,
            192,
            192
        ],
        skyblue: [
            135,
            206,
            235
        ],
        slateblue: [
            106,
            90,
            205
        ],
        slategray: [
            112,
            128,
            144
        ],
        slategrey: [
            112,
            128,
            144
        ],
        snow: [
            255,
            250,
            250
        ],
        springgreen: [
            0,
            255,
            127
        ],
        steelblue: [
            70,
            130,
            180
        ],
        tan: [
            210,
            180,
            140
        ],
        teal: [
            0,
            128,
            128
        ],
        thistle: [
            216,
            191,
            216
        ],
        tomato: [
            255,
            99,
            71
        ],
        turquoise: [
            64,
            224,
            208
        ],
        violet: [
            238,
            130,
            238
        ],
        wheat: [
            245,
            222,
            179
        ],
        white: [
            255,
            255,
            255
        ],
        whitesmoke: [
            245,
            245,
            245
        ],
        yellow: [
            255,
            255,
            0
        ],
        yellowgreen: [
            154,
            205,
            50
        ]
    };
})(ka);
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    });
    function e(x, h) {
        for(var m in h)Object.defineProperty(x, m, {
            enumerable: !0,
            get: h[m]
        });
    }
    e(s, {
        parseColor: function() {
            return p;
        },
        formatColor: function() {
            return _;
        }
    });
    const t = /* @__PURE__ */ r(ka);
    function r(x) {
        return x && x.__esModule ? x : {
            default: x
        };
    }
    let n = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, l = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, i = /(?:\d+|\d*\.\d+)%?/, c = /(?:\s*,\s*|\s+)/, a = /\s*[,/]\s*/, o = /var\(--(?:[^ )]*?)(?:,(?:[^ )]*?|var\(--[^ )]*?\)))?\)/, f = new RegExp(`^(rgba?)\\(\\s*(${i.source}|${o.source})(?:${c.source}(${i.source}|${o.source}))?(?:${c.source}(${i.source}|${o.source}))?(?:${a.source}(${i.source}|${o.source}))?\\s*\\)$`), u = new RegExp(`^(hsla?)\\(\\s*((?:${i.source})(?:deg|rad|grad|turn)?|${o.source})(?:${c.source}(${i.source}|${o.source}))?(?:${c.source}(${i.source}|${o.source}))?(?:${a.source}(${i.source}|${o.source}))?\\s*\\)$`);
    function p(x, { loose: h = !1 } = {}) {
        var m, C;
        if (typeof x != "string") return null;
        if (x = x.trim(), x === "transparent") return {
            mode: "rgb",
            color: [
                "0",
                "0",
                "0"
            ],
            alpha: "0"
        };
        if (x in t.default) return {
            mode: "rgb",
            color: t.default[x].map((M)=>M.toString())
        };
        let S = x.replace(l, (M, D, P, b, A)=>[
                "#",
                D,
                D,
                P,
                P,
                b,
                b,
                A ? A + A : ""
            ].join("")).match(n);
        if (S !== null) return {
            mode: "rgb",
            color: [
                parseInt(S[1], 16),
                parseInt(S[2], 16),
                parseInt(S[3], 16)
            ].map((M)=>M.toString()),
            alpha: S[4] ? (parseInt(S[4], 16) / 255).toString() : void 0
        };
        var k;
        let O = (k = x.match(f)) !== null && k !== void 0 ? k : x.match(u);
        if (O === null) return null;
        let E = [
            O[2],
            O[3],
            O[4]
        ].filter(Boolean).map((M)=>M.toString());
        return E.length === 2 && E[0].startsWith("var(") ? {
            mode: O[1],
            color: [
                E[0]
            ],
            alpha: E[1]
        } : !h && E.length !== 3 || E.length < 3 && !E.some((M)=>/^var\(.*?\)$/.test(M)) ? null : {
            mode: O[1],
            color: E,
            alpha: (m = O[5]) === null || m === void 0 || (C = m.toString) === null || C === void 0 ? void 0 : C.call(m)
        };
    }
    function _({ mode: x, color: h, alpha: m }) {
        let C = m !== void 0;
        return x === "rgba" || x === "hsla" ? `${x}(${h.join(", ")}${C ? `, ${m}` : ""})` : `${x}(${h.join(" ")}${C ? ` / ${m}` : ""})`;
    }
})(Tn);
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    });
    function e(l, i) {
        for(var c in i)Object.defineProperty(l, c, {
            enumerable: !0,
            get: i[c]
        });
    }
    e(s, {
        withAlphaValue: function() {
            return r;
        },
        default: function() {
            return n;
        }
    });
    const t = Tn;
    function r(l, i, c) {
        if (typeof l == "function") return l({
            opacityValue: i
        });
        let a = (0, t.parseColor)(l, {
            loose: !0
        });
        return a === null ? c : (0, t.formatColor)({
            ...a,
            alpha: i
        });
    }
    function n({ color: l, property: i, variable: c }) {
        let a = [].concat(i);
        if (typeof l == "function") return {
            [c]: "1",
            ...Object.fromEntries(a.map((f)=>[
                    f,
                    l({
                        opacityVariable: c,
                        opacityValue: `var(${c})`
                    })
                ]))
        };
        const o = (0, t.parseColor)(l);
        return o === null ? Object.fromEntries(a.map((f)=>[
                f,
                l
            ])) : o.alpha !== void 0 ? Object.fromEntries(a.map((f)=>[
                f,
                l
            ])) : {
            [c]: "1",
            ...Object.fromEntries(a.map((f)=>[
                    f,
                    (0, t.formatColor)({
                        ...o,
                        alpha: `var(${c})`
                    })
                ]))
        };
    }
})(kt);
var At = {}, ar = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return e;
        }
    });
    function e(t) {
        return t.replace(/\\,/g, "\\2c ");
    }
})(ar);
var Ct = {}, Mn = {}, ot = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "splitAtTopLevelOnly", {
        enumerable: !0,
        get: function() {
            return e;
        }
    });
    function e(t, r) {
        let n = [], l = [], i = 0, c = !1;
        for(let a = 0; a < t.length; a++){
            let o = t[a];
            n.length === 0 && o === r[0] && !c && (r.length === 1 || t.slice(a, a + r.length) === r) && (l.push(t.slice(i, a)), i = a + r.length), c = c ? !1 : o === "\\", o === "(" || o === "[" || o === "{" ? n.push(o) : (o === ")" && n[n.length - 1] === "(" || o === "]" && n[n.length - 1] === "[" || o === "}" && n[n.length - 1] === "{") && n.pop();
        }
        return l.push(t.slice(i)), l;
    }
})(ot);
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    });
    function e(a, o) {
        for(var f in o)Object.defineProperty(a, f, {
            enumerable: !0,
            get: o[f]
        });
    }
    e(s, {
        parseBoxShadowValue: function() {
            return i;
        },
        formatBoxShadowValue: function() {
            return c;
        }
    });
    const t = ot;
    let r = /* @__PURE__ */ new Set([
        "inset",
        "inherit",
        "initial",
        "revert",
        "unset"
    ]), n = /\ +(?![^(]*\))/g, l = /^-?(\d+|\.\d+)(.*?)$/g;
    function i(a) {
        return (0, t.splitAtTopLevelOnly)(a, ",").map((f)=>{
            let u = f.trim(), p = {
                raw: u
            }, _ = u.split(n), x = /* @__PURE__ */ new Set();
            for (let h of _)l.lastIndex = 0, !x.has("KEYWORD") && r.has(h) ? (p.keyword = h, x.add("KEYWORD")) : l.test(h) ? x.has("X") ? x.has("Y") ? x.has("BLUR") ? x.has("SPREAD") || (p.spread = h, x.add("SPREAD")) : (p.blur = h, x.add("BLUR")) : (p.y = h, x.add("Y")) : (p.x = h, x.add("X")) : p.color ? (p.unknown || (p.unknown = []), p.unknown.push(h)) : p.color = h;
            return p.valid = p.x !== void 0 && p.y !== void 0, p;
        });
    }
    function c(a) {
        return a.map((o)=>o.valid ? [
                o.keyword,
                o.x,
                o.y,
                o.blur,
                o.spread,
                o.color
            ].filter(Boolean).join(" ") : o.raw).join(", ");
    }
})(Mn);
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    });
    function e(y, R) {
        for(var F in R)Object.defineProperty(y, F, {
            enumerable: !0,
            get: R[F]
        });
    }
    e(s, {
        normalize: function() {
            return a;
        },
        normalizeAttributeSelectors: function() {
            return o;
        },
        url: function() {
            return u;
        },
        number: function() {
            return p;
        },
        percentage: function() {
            return _;
        },
        length: function() {
            return m;
        },
        lineWidth: function() {
            return S;
        },
        shadow: function() {
            return k;
        },
        color: function() {
            return O;
        },
        image: function() {
            return E;
        },
        gradient: function() {
            return D;
        },
        position: function() {
            return b;
        },
        familyName: function() {
            return A;
        },
        genericName: function() {
            return T;
        },
        absoluteSize: function() {
            return d;
        },
        relativeSize: function() {
            return v;
        }
    });
    const t = Tn, r = Mn, n = ot;
    let l = [
        "min",
        "max",
        "clamp",
        "calc"
    ];
    function i(y) {
        return l.some((R)=>new RegExp(`^${R}\\(.*\\)`).test(y));
    }
    const c = /* @__PURE__ */ new Set([
        // Concrete properties
        "scroll-timeline-name",
        "timeline-scope",
        "view-timeline-name",
        "font-palette",
        "anchor-name",
        "anchor-scope",
        "position-anchor",
        "position-try-options",
        // Shorthand properties
        "scroll-timeline",
        "animation-timeline",
        "view-timeline",
        "position-try"
    ]);
    function a(y, R = null, F = !0) {
        let $ = R && c.has(R.property);
        return y.startsWith("--") && !$ ? `var(${y})` : y.includes("url(") ? y.split(/(url\(.*?\))/g).filter(Boolean).map((z)=>/^url\(.*?\)$/.test(z) ? z : a(z, R, !1)).join("") : (y = y.replace(/([^\\])_+/g, (z, j)=>j + " ".repeat(z.length - 1)).replace(/^_/g, " ").replace(/\\_/g, "_"), F && (y = y.trim()), y = f(y), y);
    }
    function o(y) {
        return y.includes("=") && (y = y.replace(/(=.*)/g, (R, F)=>{
            if (F[1] === "'" || F[1] === '"') return F;
            if (F.length > 2) {
                let $ = F[F.length - 1];
                if (F[F.length - 2] === " " && ($ === "i" || $ === "I" || $ === "s" || $ === "S")) return `="${F.slice(1, -2)}" ${F[F.length - 1]}`;
            }
            return `="${F.slice(1)}"`;
        })), y;
    }
    function f(y) {
        let R = [
            "theme"
        ], F = [
            "min-content",
            "max-content",
            "fit-content",
            // Env
            "safe-area-inset-top",
            "safe-area-inset-right",
            "safe-area-inset-bottom",
            "safe-area-inset-left",
            "titlebar-area-x",
            "titlebar-area-y",
            "titlebar-area-width",
            "titlebar-area-height",
            "keyboard-inset-top",
            "keyboard-inset-right",
            "keyboard-inset-bottom",
            "keyboard-inset-left",
            "keyboard-inset-width",
            "keyboard-inset-height",
            "radial-gradient",
            "linear-gradient",
            "conic-gradient",
            "repeating-radial-gradient",
            "repeating-linear-gradient",
            "repeating-conic-gradient"
        ];
        return y.replace(/(calc|min|max|clamp)\(.+\)/g, ($)=>{
            let z = "";
            function j() {
                let W = z.trimEnd();
                return W[W.length - 1];
            }
            for(let W = 0; W < $.length; W++){
                let I = function(w) {
                    return w.split("").every((L, B)=>$[W + B] === L);
                }, G = function(w) {
                    let L = 1 / 0;
                    for (let H of w){
                        let Y = $.indexOf(H, W);
                        Y !== -1 && Y < L && (L = Y);
                    }
                    let B = $.slice(W, L);
                    return W += B.length - 1, B;
                }, re = $[W];
                if (I("var")) z += G([
                    ")",
                    ","
                ]);
                else if (F.some((w)=>I(w))) {
                    let w = F.find((L)=>I(L));
                    z += w, W += w.length - 1;
                } else R.some((w)=>I(w)) ? z += G([
                    ")"
                ]) : I("[") ? z += G([
                    "]"
                ]) : [
                    "+",
                    "-",
                    "*",
                    "/"
                ].includes(re) && ![
                    "(",
                    "+",
                    "-",
                    "*",
                    "/",
                    ","
                ].includes(j()) ? z += ` ${re} ` : z += re;
            }
            return z.replace(/\s+/g, " ");
        });
    }
    function u(y) {
        return y.startsWith("url(");
    }
    function p(y) {
        return !isNaN(Number(y)) || i(y);
    }
    function _(y) {
        return y.endsWith("%") && p(y.slice(0, -1)) || i(y);
    }
    let h = `(?:${[
        "cm",
        "mm",
        "Q",
        "in",
        "pc",
        "pt",
        "px",
        "em",
        "ex",
        "ch",
        "rem",
        "lh",
        "rlh",
        "vw",
        "vh",
        "vmin",
        "vmax",
        "vb",
        "vi",
        "svw",
        "svh",
        "lvw",
        "lvh",
        "dvw",
        "dvh",
        "cqw",
        "cqh",
        "cqi",
        "cqb",
        "cqmin",
        "cqmax"
    ].join("|")})`;
    function m(y) {
        return y === "0" || new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${h}$`).test(y) || i(y);
    }
    let C = /* @__PURE__ */ new Set([
        "thin",
        "medium",
        "thick"
    ]);
    function S(y) {
        return C.has(y);
    }
    function k(y) {
        let R = (0, r.parseBoxShadowValue)(a(y));
        for (let F of R)if (!F.valid) return !1;
        return !0;
    }
    function O(y) {
        let R = 0;
        return (0, n.splitAtTopLevelOnly)(y, "_").every(($)=>($ = a($), $.startsWith("var(") ? !0 : (0, t.parseColor)($, {
                loose: !0
            }) !== null ? (R++, !0) : !1)) ? R > 0 : !1;
    }
    function E(y) {
        let R = 0;
        return (0, n.splitAtTopLevelOnly)(y, ",").every(($)=>($ = a($), $.startsWith("var(") ? !0 : u($) || D($) || [
                "element(",
                "image(",
                "cross-fade(",
                "image-set("
            ].some((z)=>$.startsWith(z)) ? (R++, !0) : !1)) ? R > 0 : !1;
    }
    let M = /* @__PURE__ */ new Set([
        "conic-gradient",
        "linear-gradient",
        "radial-gradient",
        "repeating-conic-gradient",
        "repeating-linear-gradient",
        "repeating-radial-gradient"
    ]);
    function D(y) {
        y = a(y);
        for (let R of M)if (y.startsWith(`${R}(`)) return !0;
        return !1;
    }
    let P = /* @__PURE__ */ new Set([
        "center",
        "top",
        "right",
        "bottom",
        "left"
    ]);
    function b(y) {
        let R = 0;
        return (0, n.splitAtTopLevelOnly)(y, "_").every(($)=>($ = a($), $.startsWith("var(") ? !0 : P.has($) || m($) || _($) ? (R++, !0) : !1)) ? R > 0 : !1;
    }
    function A(y) {
        let R = 0;
        return (0, n.splitAtTopLevelOnly)(y, ",").every(($)=>($ = a($), $.startsWith("var(") ? !0 : $.includes(" ") && !/(['"])([^"']+)\1/g.test($) || /^\d/g.test($) ? !1 : (R++, !0))) ? R > 0 : !1;
    }
    let N = /* @__PURE__ */ new Set([
        "serif",
        "sans-serif",
        "monospace",
        "cursive",
        "fantasy",
        "system-ui",
        "ui-serif",
        "ui-sans-serif",
        "ui-monospace",
        "ui-rounded",
        "math",
        "emoji",
        "fangsong"
    ]);
    function T(y) {
        return N.has(y);
    }
    let V = /* @__PURE__ */ new Set([
        "xx-small",
        "x-small",
        "small",
        "medium",
        "large",
        "x-large",
        "xx-large",
        "xxx-large"
    ]);
    function d(y) {
        return V.has(y);
    }
    let g = /* @__PURE__ */ new Set([
        "larger",
        "smaller"
    ]);
    function v(y) {
        return g.has(y);
    }
})(Ct);
var sr = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return e;
        }
    });
    function e(t) {
        if (t = `${t}`, t === "0") return "0";
        if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(t)) return t.replace(/^[+-]?/, (n)=>n === "-" ? "" : "-");
        let r = [
            "var",
            "calc",
            "min",
            "max",
            "clamp"
        ];
        for (const n of r)if (t.includes(`${n}(`)) return `calc(${t} * -1)`;
    }
})(sr);
var Aa = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "backgroundSize", {
        enumerable: !0,
        get: function() {
            return r;
        }
    });
    const e = Ct, t = ot;
    function r(n) {
        let l = [
            "cover",
            "contain"
        ];
        return (0, t.splitAtTopLevelOnly)(n, ",").every((i)=>{
            let c = (0, t.splitAtTopLevelOnly)(i, "_").filter(Boolean);
            return c.length === 1 && l.includes(c[0]) ? !0 : c.length !== 1 && c.length !== 2 ? !1 : c.every((a)=>(0, e.length)(a) || (0, e.percentage)(a) || a === "auto");
        });
    }
})(Aa);
var it = {}, In = {
    exports: {}
}, we = String, Ca = function() {
    return {
        isColorSupported: !1,
        reset: we,
        bold: we,
        dim: we,
        italic: we,
        underline: we,
        inverse: we,
        hidden: we,
        strikethrough: we,
        black: we,
        red: we,
        green: we,
        yellow: we,
        blue: we,
        magenta: we,
        cyan: we,
        white: we,
        gray: we,
        bgBlack: we,
        bgRed: we,
        bgGreen: we,
        bgYellow: we,
        bgBlue: we,
        bgMagenta: we,
        bgCyan: we,
        bgWhite: we,
        blackBright: we,
        redBright: we,
        greenBright: we,
        yellowBright: we,
        blueBright: we,
        magentaBright: we,
        cyanBright: we,
        whiteBright: we,
        bgBlackBright: we,
        bgRedBright: we,
        bgGreenBright: we,
        bgYellowBright: we,
        bgBlueBright: we,
        bgMagentaBright: we,
        bgCyanBright: we,
        bgWhiteBright: we
    };
};
In.exports = Ca();
In.exports.createColors = Ca;
var Ea = In.exports, et = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    });
    function e(a, o) {
        for(var f in o)Object.defineProperty(a, f, {
            enumerable: !0,
            get: o[f]
        });
    }
    e(s, {
        dim: function() {
            return i;
        },
        default: function() {
            return c;
        }
    });
    const t = /* @__PURE__ */ r(Ea);
    function r(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }
    let n = /* @__PURE__ */ new Set();
    function l(a, o, f) {
        typeof process < "u" && process.env.JEST_WORKER_ID || f && n.has(f) || (f && n.add(f), console.warn(""), o.forEach((u)=>console.warn(a, "-", u)));
    }
    function i(a) {
        return t.default.dim(a);
    }
    const c = {
        info (a, o) {
            l(t.default.bold(t.default.cyan("info")), ...Array.isArray(a) ? [
                a
            ] : [
                o,
                a
            ]);
        },
        warn (a, o) {
            l(t.default.bold(t.default.yellow("warn")), ...Array.isArray(a) ? [
                a
            ] : [
                o,
                a
            ]);
        },
        risk (a, o) {
            l(t.default.bold(t.default.magenta("risk")), ...Array.isArray(a) ? [
                a
            ] : [
                o,
                a
            ]);
        }
    };
})(et);
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    });
    function e(u, p) {
        for(var _ in p)Object.defineProperty(u, _, {
            enumerable: !0,
            get: p[_]
        });
    }
    e(s, {
        flagEnabled: function() {
            return c;
        },
        issueFlagNotices: function() {
            return o;
        },
        default: function() {
            return f;
        }
    });
    const t = /* @__PURE__ */ n(Ea), r = /* @__PURE__ */ n(et);
    function n(u) {
        return u && u.__esModule ? u : {
            default: u
        };
    }
    let l = {
        optimizeUniversalDefaults: !1,
        generalizedModifiers: !0,
        disableColorOpacityUtilitiesByDefault: !1,
        relativeContentPathsByDefault: !1
    }, i = {
        future: [
            "hoverOnlyWhenSupported",
            "respectDefaultRingColorOpacity",
            "disableColorOpacityUtilitiesByDefault",
            "relativeContentPathsByDefault"
        ],
        experimental: [
            "optimizeUniversalDefaults",
            "generalizedModifiers"
        ]
    };
    function c(u, p) {
        if (i.future.includes(p)) {
            var _, x, h;
            return u.future === "all" || ((h = (x = u == null || (_ = u.future) === null || _ === void 0 ? void 0 : _[p]) !== null && x !== void 0 ? x : l[p]) !== null && h !== void 0 ? h : !1);
        }
        if (i.experimental.includes(p)) {
            var m, C, S;
            return u.experimental === "all" || ((S = (C = u == null || (m = u.experimental) === null || m === void 0 ? void 0 : m[p]) !== null && C !== void 0 ? C : l[p]) !== null && S !== void 0 ? S : !1);
        }
        return !1;
    }
    function a(u) {
        if (u.experimental === "all") return i.experimental;
        var p;
        return Object.keys((p = u == null ? void 0 : u.experimental) !== null && p !== void 0 ? p : {}).filter((_)=>i.experimental.includes(_) && u.experimental[_]);
    }
    function o(u) {
        if (process.env.JEST_WORKER_ID === void 0 && a(u).length > 0) {
            let p = a(u).map((_)=>t.default.yellow(_)).join(", ");
            r.default.warn("experimental-flags-enabled", [
                `You have enabled experimental features: ${p}`,
                "Experimental features in Tailwind CSS are not covered by semver, may introduce breaking changes, and can change at any time."
            ]);
        }
    }
    const f = i;
})(it);
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    });
    function e(b, A) {
        for(var N in A)Object.defineProperty(b, N, {
            enumerable: !0,
            get: A[N]
        });
    }
    e(s, {
        updateAllClasses: function() {
            return o;
        },
        asValue: function() {
            return p;
        },
        parseColorFormat: function() {
            return h;
        },
        asColor: function() {
            return C;
        },
        asLookupValue: function() {
            return S;
        },
        typeMap: function() {
            return O;
        },
        coerceValue: function() {
            return D;
        },
        getMatchingTypes: function() {
            return P;
        }
    });
    const t = /* @__PURE__ */ a(ar), r = kt, n = Ct, l = /* @__PURE__ */ a(sr), i = Aa, c = it;
    function a(b) {
        return b && b.__esModule ? b : {
            default: b
        };
    }
    function o(b, A) {
        b.walkClasses((N)=>{
            N.value = A(N.value), N.raws && N.raws.value && (N.raws.value = (0, t.default)(N.raws.value));
        });
    }
    function f(b, A) {
        if (!_(b)) return;
        let N = b.slice(1, -1);
        if (A(N)) return (0, n.normalize)(N);
    }
    function u(b, A = {}, N) {
        let T = A[b];
        if (T !== void 0) return (0, l.default)(T);
        if (_(b)) {
            let V = f(b, N);
            return V === void 0 ? void 0 : (0, l.default)(V);
        }
    }
    function p(b, A = {}, { validate: N = ()=>!0 } = {}) {
        var T;
        let V = (T = A.values) === null || T === void 0 ? void 0 : T[b];
        return V !== void 0 ? V : A.supportsNegativeValues && b.startsWith("-") ? u(b.slice(1), A.values, N) : f(b, N);
    }
    function _(b) {
        return b.startsWith("[") && b.endsWith("]");
    }
    function x(b) {
        let A = b.lastIndexOf("/"), N = b.lastIndexOf("[", A), T = b.indexOf("]", A);
        return b[A - 1] === "]" || b[A + 1] === "[" || N !== -1 && T !== -1 && N < A && A < T && (A = b.lastIndexOf("/", N)), A === -1 || A === b.length - 1 ? [
            b,
            void 0
        ] : _(b) && !b.includes("]/[") ? [
            b,
            void 0
        ] : [
            b.slice(0, A),
            b.slice(A + 1)
        ];
    }
    function h(b) {
        if (typeof b == "string" && b.includes("<alpha-value>")) {
            let A = b;
            return ({ opacityValue: N = 1 })=>A.replace(/<alpha-value>/g, N);
        }
        return b;
    }
    function m(b) {
        return (0, n.normalize)(b.slice(1, -1));
    }
    function C(b, A = {}, { tailwindConfig: N = {} } = {}) {
        var T;
        if (((T = A.values) === null || T === void 0 ? void 0 : T[b]) !== void 0) {
            var V;
            return h((V = A.values) === null || V === void 0 ? void 0 : V[b]);
        }
        let [d, g] = x(b);
        if (g !== void 0) {
            var v, y, R, F;
            let $ = (F = (v = A.values) === null || v === void 0 ? void 0 : v[d]) !== null && F !== void 0 ? F : _(d) ? d.slice(1, -1) : void 0;
            return $ === void 0 ? void 0 : ($ = h($), _(g) ? (0, r.withAlphaValue)($, m(g)) : ((y = N.theme) === null || y === void 0 || (R = y.opacity) === null || R === void 0 ? void 0 : R[g]) === void 0 ? void 0 : (0, r.withAlphaValue)($, N.theme.opacity[g]));
        }
        return p(b, A, {
            validate: n.color
        });
    }
    function S(b, A = {}) {
        var N;
        return (N = A.values) === null || N === void 0 ? void 0 : N[b];
    }
    function k(b) {
        return (A, N)=>p(A, N, {
                validate: b
            });
    }
    let O = {
        any: p,
        color: C,
        url: k(n.url),
        image: k(n.image),
        length: k(n.length),
        percentage: k(n.percentage),
        position: k(n.position),
        lookup: S,
        "generic-name": k(n.genericName),
        "family-name": k(n.familyName),
        number: k(n.number),
        "line-width": k(n.lineWidth),
        "absolute-size": k(n.absoluteSize),
        "relative-size": k(n.relativeSize),
        shadow: k(n.shadow),
        size: k(i.backgroundSize)
    }, E = Object.keys(O);
    function M(b, A) {
        let N = b.indexOf(A);
        return N === -1 ? [
            void 0,
            b
        ] : [
            b.slice(0, N),
            b.slice(N + 1)
        ];
    }
    function D(b, A, N, T) {
        if (N.values && A in N.values) for (let { type: d } of b ?? []){
            let g = O[d](A, N, {
                tailwindConfig: T
            });
            if (g !== void 0) return [
                g,
                d,
                null
            ];
        }
        if (_(A)) {
            let d = A.slice(1, -1), [g, v] = M(d, ":");
            if (!/^[\w-_]+$/g.test(g)) v = d;
            else if (g !== void 0 && !E.includes(g)) return [];
            if (v.length > 0 && E.includes(g)) return [
                p(`[${v}]`, N),
                g,
                null
            ];
        }
        let V = P(b, A, N, T);
        for (let d of V)return d;
        return [];
    }
    function* P(b, A, N, T) {
        let V = (0, c.flagEnabled)(T, "generalizedModifiers"), [d, g] = x(A);
        if (V && N.modifiers != null && (N.modifiers === "any" || typeof N.modifiers == "object" && (g && _(g) || g in N.modifiers)) || (d = A, g = void 0), g !== void 0 && d === "" && (d = "DEFAULT"), g !== void 0 && typeof N.modifiers == "object") {
            var y, R;
            let F = (R = (y = N.modifiers) === null || y === void 0 ? void 0 : y[g]) !== null && R !== void 0 ? R : null;
            F !== null ? g = F : _(g) && (g = m(g));
        }
        for (let { type: F } of b ?? []){
            let $ = O[F](d, N, {
                tailwindConfig: T
            });
            $ !== void 0 && (yield [
                $,
                F,
                g ?? null
            ]);
        }
    }
})(At);
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return P;
        }
    });
    const e = /* @__PURE__ */ u(ba), t = /* @__PURE__ */ u(El), r = /* @__PURE__ */ u(Ot), n = /* @__PURE__ */ u(Fl), l = rr, i = /* @__PURE__ */ u(nr), c = ir, a = kt, o = At, f = /* @__PURE__ */ u(et);
    function u(b) {
        return b && b.__esModule ? b : {
            default: b
        };
    }
    function p(b) {
        return typeof b == "object" && b !== null;
    }
    function _(b, A) {
        let N = (0, c.toPath)(A);
        do if (N.pop(), (0, e.default)(b, N) !== void 0) break;
        while (N.length)
        return N.length ? N : void 0;
    }
    function x(b) {
        return typeof b == "string" ? b : b.reduce((A, N, T)=>N.includes(".") ? `${A}[${N}]` : T === 0 ? N : `${A}.${N}`, "");
    }
    function h(b) {
        return b.map((A)=>`'${A}'`).join(", ");
    }
    function m(b) {
        return h(Object.keys(b));
    }
    function C(b, A, N, T = {}) {
        const V = Array.isArray(A) ? x(A) : A.replace(/^['"]+|['"]+$/g, ""), d = Array.isArray(A) ? A : (0, c.toPath)(V), g = (0, e.default)(b.theme, d, N);
        if (g === void 0) {
            let y = `'${V}' does not exist in your theme config.`;
            const R = d.slice(0, -1), F = (0, e.default)(b.theme, R);
            if (p(F)) {
                const $ = Object.keys(F).filter((j)=>C(b, [
                        ...R,
                        j
                    ]).isValid), z = (0, t.default)(d[d.length - 1], $);
                z ? y += ` Did you mean '${x([
                    ...R,
                    z
                ])}'?` : $.length > 0 && (y += ` '${x(R)}' has the following valid keys: ${h($)}`);
            } else {
                const $ = _(b.theme, V);
                if ($) {
                    const z = (0, e.default)(b.theme, $);
                    p(z) ? y += ` '${x($)}' has the following keys: ${m(z)}` : y += ` '${x($)}' is not an object.`;
                } else y += ` Your theme has the following top-level keys: ${m(b.theme)}`;
            }
            return {
                isValid: !1,
                error: y
            };
        }
        if (!(typeof g == "string" || typeof g == "number" || typeof g == "function" || g instanceof String || g instanceof Number || Array.isArray(g))) {
            let y = `'${V}' was found but does not resolve to a string.`;
            if (p(g)) {
                let R = Object.keys(g).filter((F)=>C(b, [
                        ...d,
                        F
                    ]).isValid);
                R.length && (y += ` Did you mean something like '${x([
                    ...d,
                    R[0]
                ])}'?`);
            }
            return {
                isValid: !1,
                error: y
            };
        }
        const [v] = d;
        return {
            isValid: !0,
            value: (0, r.default)(v)(g, T)
        };
    }
    function S(b, A, N) {
        A = A.map((V)=>k(b, V, N));
        let T = [
            ""
        ];
        for (let V of A)V.type === "div" && V.value === "," ? T.push("") : T[T.length - 1] += n.default.stringify(V);
        return T;
    }
    function k(b, A, N) {
        if (A.type === "function" && N[A.value] !== void 0) {
            let T = S(b, A.nodes, N);
            A.type = "word", A.value = N[A.value](b, ...T);
        }
        return A;
    }
    function O(b, A, N) {
        return Object.keys(N).some((V)=>A.includes(`${V}(`)) ? (0, n.default)(A).walk((V)=>{
            k(b, V, N);
        }).toString() : A;
    }
    let E = {
        atrule: "params",
        decl: "value"
    };
    function* M(b) {
        b = b.replace(/^['"]+|['"]+$/g, "");
        let A = b.match(/^([^\s]+)(?![^\[]*\])(?:\s*\/\s*([^\/\s]+))$/), N;
        yield [
            b,
            void 0
        ], A && (b = A[1], N = A[2], yield [
            b,
            N
        ]);
    }
    function D(b, A, N) {
        const T = Array.from(M(A)).map(([d, g])=>Object.assign(C(b, d, N, {
                opacityValue: g
            }), {
                resolvedPath: d,
                alpha: g
            }));
        var V;
        return (V = T.find((d)=>d.isValid)) !== null && V !== void 0 ? V : T[0];
    }
    function P(b) {
        let A = b.tailwindConfig, N = {
            theme: (T, V, ...d)=>{
                let { isValid: g, value: v, error: y, alpha: R } = D(A, V, d.length ? d : void 0);
                if (!g) {
                    var F;
                    let j = T.parent, W = (F = j == null ? void 0 : j.raws.tailwind) === null || F === void 0 ? void 0 : F.candidate;
                    if (j && W !== void 0) {
                        b.markInvalidUtilityNode(j), j.remove(), f.default.warn("invalid-theme-key-in-class", [
                            `The utility \`${W}\` contains an invalid theme value and was not generated.`
                        ]);
                        return;
                    }
                    throw T.error(y);
                }
                let $ = (0, o.parseColorFormat)(v);
                return (R !== void 0 || $ !== void 0 && typeof $ == "function") && (R === void 0 && (R = 1), v = (0, a.withAlphaValue)($, R, $)), v;
            },
            screen: (T, V)=>{
                V = V.replace(/^['"]+/g, "").replace(/['"]+$/g, "");
                let g = (0, l.normalizeScreens)(A.theme.screens).find(({ name: v })=>v === V);
                if (!g) throw T.error(`The '${V}' screen does not exist in your theme.`);
                return (0, i.default)(g);
            }
        };
        return (T)=>{
            T.walk((V)=>{
                let d = E[V.type];
                d !== void 0 && (V[d] = O(V, V[d], N));
            });
        };
    }
})(ya);
const zl = /* @__PURE__ */ Qe(ya);
var Pa = {}, Jr = {
    exports: {}
}, Kr = {
    exports: {}
}, Xr = {
    exports: {}
}, Zr = {
    exports: {}
}, en = {
    exports: {}
}, tn = {
    exports: {}
}, Be = {}, rn = {
    exports: {}
};
(function(s, e) {
    e.__esModule = !0, e.default = n;
    function t(l) {
        for(var i = l.toLowerCase(), c = "", a = !1, o = 0; o < 6 && i[o] !== void 0; o++){
            var f = i.charCodeAt(o), u = f >= 97 && f <= 102 || f >= 48 && f <= 57;
            if (a = f === 32, !u) break;
            c += i[o];
        }
        if (c.length !== 0) {
            var p = parseInt(c, 16), _ = p >= 55296 && p <= 57343;
            return _ || p === 0 || p > 1114111 ? [
                "�",
                c.length + (a ? 1 : 0)
            ] : [
                String.fromCodePoint(p),
                c.length + (a ? 1 : 0)
            ];
        }
    }
    var r = /\\/;
    function n(l) {
        var i = r.test(l);
        if (!i) return l;
        for(var c = "", a = 0; a < l.length; a++){
            if (l[a] === "\\") {
                var o = t(l.slice(a + 1, a + 7));
                if (o !== void 0) {
                    c += o[0], a += o[1];
                    continue;
                }
                if (l[a + 1] === "\\") {
                    c += "\\", a++;
                    continue;
                }
                l.length === a + 1 && (c += l[a]);
                continue;
            }
            c += l[a];
        }
        return c;
    }
    s.exports = e.default;
})(rn, rn.exports);
var Rn = rn.exports, nn = {
    exports: {}
};
(function(s, e) {
    e.__esModule = !0, e.default = t;
    function t(r) {
        for(var n = arguments.length, l = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)l[i - 1] = arguments[i];
        for(; l.length > 0;){
            var c = l.shift();
            if (!r[c]) return;
            r = r[c];
        }
        return r;
    }
    s.exports = e.default;
})(nn, nn.exports);
var Ul = nn.exports, an = {
    exports: {}
};
(function(s, e) {
    e.__esModule = !0, e.default = t;
    function t(r) {
        for(var n = arguments.length, l = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)l[i - 1] = arguments[i];
        for(; l.length > 0;){
            var c = l.shift();
            r[c] || (r[c] = {}), r = r[c];
        }
    }
    s.exports = e.default;
})(an, an.exports);
var jl = an.exports, sn = {
    exports: {}
};
(function(s, e) {
    e.__esModule = !0, e.default = t;
    function t(r) {
        for(var n = "", l = r.indexOf("/*"), i = 0; l >= 0;){
            n = n + r.slice(i, l);
            var c = r.indexOf("*/", l + 2);
            if (c < 0) return n;
            i = c + 2, l = r.indexOf("/*", i);
        }
        return n = n + r.slice(i), n;
    }
    s.exports = e.default;
})(sn, sn.exports);
var Vl = sn.exports;
Be.__esModule = !0;
Be.unesc = Be.stripComments = Be.getProp = Be.ensureObject = void 0;
var Wl = or(Rn);
Be.unesc = Wl.default;
var Bl = or(Ul);
Be.getProp = Bl.default;
var ql = or(jl);
Be.ensureObject = ql.default;
var Gl = or(Vl);
Be.stripComments = Gl.default;
function or(s) {
    return s && s.__esModule ? s : {
        default: s
    };
}
(function(s, e) {
    e.__esModule = !0, e.default = void 0;
    var t = Be;
    function r(c, a) {
        for(var o = 0; o < a.length; o++){
            var f = a[o];
            f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(c, f.key, f);
        }
    }
    function n(c, a, o) {
        return a && r(c.prototype, a), Object.defineProperty(c, "prototype", {
            writable: !1
        }), c;
    }
    var l = function c(a, o) {
        if (typeof a != "object" || a === null) return a;
        var f = new a.constructor();
        for(var u in a)if (a.hasOwnProperty(u)) {
            var p = a[u], _ = typeof p;
            u === "parent" && _ === "object" ? o && (f[u] = o) : p instanceof Array ? f[u] = p.map(function(x) {
                return c(x, f);
            }) : f[u] = c(p, f);
        }
        return f;
    }, i = /* @__PURE__ */ function() {
        function c(o) {
            o === void 0 && (o = {}), Object.assign(this, o), this.spaces = this.spaces || {}, this.spaces.before = this.spaces.before || "", this.spaces.after = this.spaces.after || "";
        }
        var a = c.prototype;
        return a.remove = function() {
            return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
        }, a.replaceWith = function() {
            if (this.parent) {
                for(var f in arguments)this.parent.insertBefore(this, arguments[f]);
                this.remove();
            }
            return this;
        }, a.next = function() {
            return this.parent.at(this.parent.index(this) + 1);
        }, a.prev = function() {
            return this.parent.at(this.parent.index(this) - 1);
        }, a.clone = function(f) {
            f === void 0 && (f = {});
            var u = l(this);
            for(var p in f)u[p] = f[p];
            return u;
        }, a.appendToPropertyAndEscape = function(f, u, p) {
            this.raws || (this.raws = {});
            var _ = this[f], x = this.raws[f];
            this[f] = _ + u, x || p !== u ? this.raws[f] = (x || _) + p : delete this.raws[f];
        }, a.setPropertyAndEscape = function(f, u, p) {
            this.raws || (this.raws = {}), this[f] = u, this.raws[f] = p;
        }, a.setPropertyWithoutEscape = function(f, u) {
            this[f] = u, this.raws && delete this.raws[f];
        }, a.isAtPosition = function(f, u) {
            if (this.source && this.source.start && this.source.end) return !(this.source.start.line > f || this.source.end.line < f || this.source.start.line === f && this.source.start.column > u || this.source.end.line === f && this.source.end.column < u);
        }, a.stringifyProperty = function(f) {
            return this.raws && this.raws[f] || this[f];
        }, a.valueToString = function() {
            return String(this.stringifyProperty("value"));
        }, a.toString = function() {
            return [
                this.rawSpaceBefore,
                this.valueToString(),
                this.rawSpaceAfter
            ].join("");
        }, n(c, [
            {
                key: "rawSpaceBefore",
                get: function() {
                    var f = this.raws && this.raws.spaces && this.raws.spaces.before;
                    return f === void 0 && (f = this.spaces && this.spaces.before), f || "";
                },
                set: function(f) {
                    (0, t.ensureObject)(this, "raws", "spaces"), this.raws.spaces.before = f;
                }
            },
            {
                key: "rawSpaceAfter",
                get: function() {
                    var f = this.raws && this.raws.spaces && this.raws.spaces.after;
                    return f === void 0 && (f = this.spaces.after), f || "";
                },
                set: function(f) {
                    (0, t.ensureObject)(this, "raws", "spaces"), this.raws.spaces.after = f;
                }
            }
        ]), c;
    }();
    e.default = i, s.exports = e.default;
})(tn, tn.exports);
var at = tn.exports, be = {};
be.__esModule = !0;
be.UNIVERSAL = be.TAG = be.STRING = be.SELECTOR = be.ROOT = be.PSEUDO = be.NESTING = be.ID = be.COMMENT = be.COMBINATOR = be.CLASS = be.ATTRIBUTE = void 0;
var Yl = "tag";
be.TAG = Yl;
var Hl = "string";
be.STRING = Hl;
var Ql = "selector";
be.SELECTOR = Ql;
var Jl = "root";
be.ROOT = Jl;
var Kl = "pseudo";
be.PSEUDO = Kl;
var Xl = "nesting";
be.NESTING = Xl;
var Zl = "id";
be.ID = Zl;
var eu = "comment";
be.COMMENT = eu;
var tu = "combinator";
be.COMBINATOR = tu;
var ru = "class";
be.CLASS = ru;
var nu = "attribute";
be.ATTRIBUTE = nu;
var iu = "universal";
be.UNIVERSAL = iu;
(function(s, e) {
    e.__esModule = !0, e.default = void 0;
    var t = i(at), r = l(be);
    function n(h) {
        if (typeof WeakMap != "function") return null;
        var m = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap();
        return (n = function(k) {
            return k ? C : m;
        })(h);
    }
    function l(h, m) {
        if (h && h.__esModule) return h;
        if (h === null || typeof h != "object" && typeof h != "function") return {
            default: h
        };
        var C = n(m);
        if (C && C.has(h)) return C.get(h);
        var S = {}, k = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for(var O in h)if (O !== "default" && Object.prototype.hasOwnProperty.call(h, O)) {
            var E = k ? Object.getOwnPropertyDescriptor(h, O) : null;
            E && (E.get || E.set) ? Object.defineProperty(S, O, E) : S[O] = h[O];
        }
        return S.default = h, C && C.set(h, S), S;
    }
    function i(h) {
        return h && h.__esModule ? h : {
            default: h
        };
    }
    function c(h, m) {
        var C = typeof Symbol < "u" && h[Symbol.iterator] || h["@@iterator"];
        if (C) return (C = C.call(h)).next.bind(C);
        if (Array.isArray(h) || (C = a(h)) || m) {
            C && (h = C);
            var S = 0;
            return function() {
                return S >= h.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: h[S++]
                };
            };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function a(h, m) {
        if (h) {
            if (typeof h == "string") return o(h, m);
            var C = Object.prototype.toString.call(h).slice(8, -1);
            if (C === "Object" && h.constructor && (C = h.constructor.name), C === "Map" || C === "Set") return Array.from(h);
            if (C === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)) return o(h, m);
        }
    }
    function o(h, m) {
        (m == null || m > h.length) && (m = h.length);
        for(var C = 0, S = new Array(m); C < m; C++)S[C] = h[C];
        return S;
    }
    function f(h, m) {
        for(var C = 0; C < m.length; C++){
            var S = m[C];
            S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(h, S.key, S);
        }
    }
    function u(h, m, C) {
        return m && f(h.prototype, m), Object.defineProperty(h, "prototype", {
            writable: !1
        }), h;
    }
    function p(h, m) {
        h.prototype = Object.create(m.prototype), h.prototype.constructor = h, _(h, m);
    }
    function _(h, m) {
        return _ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(S, k) {
            return S.__proto__ = k, S;
        }, _(h, m);
    }
    var x = /* @__PURE__ */ function(h) {
        p(m, h);
        function m(S) {
            var k;
            return k = h.call(this, S) || this, k.nodes || (k.nodes = []), k;
        }
        var C = m.prototype;
        return C.append = function(k) {
            return k.parent = this, this.nodes.push(k), this;
        }, C.prepend = function(k) {
            return k.parent = this, this.nodes.unshift(k), this;
        }, C.at = function(k) {
            return this.nodes[k];
        }, C.index = function(k) {
            return typeof k == "number" ? k : this.nodes.indexOf(k);
        }, C.removeChild = function(k) {
            k = this.index(k), this.at(k).parent = void 0, this.nodes.splice(k, 1);
            var O;
            for(var E in this.indexes)O = this.indexes[E], O >= k && (this.indexes[E] = O - 1);
            return this;
        }, C.removeAll = function() {
            for(var k = c(this.nodes), O; !(O = k()).done;){
                var E = O.value;
                E.parent = void 0;
            }
            return this.nodes = [], this;
        }, C.empty = function() {
            return this.removeAll();
        }, C.insertAfter = function(k, O) {
            O.parent = this;
            var E = this.index(k);
            this.nodes.splice(E + 1, 0, O), O.parent = this;
            var M;
            for(var D in this.indexes)M = this.indexes[D], E <= M && (this.indexes[D] = M + 1);
            return this;
        }, C.insertBefore = function(k, O) {
            O.parent = this;
            var E = this.index(k);
            this.nodes.splice(E, 0, O), O.parent = this;
            var M;
            for(var D in this.indexes)M = this.indexes[D], M <= E && (this.indexes[D] = M + 1);
            return this;
        }, C._findChildAtPosition = function(k, O) {
            var E = void 0;
            return this.each(function(M) {
                if (M.atPosition) {
                    var D = M.atPosition(k, O);
                    if (D) return E = D, !1;
                } else if (M.isAtPosition(k, O)) return E = M, !1;
            }), E;
        }, C.atPosition = function(k, O) {
            if (this.isAtPosition(k, O)) return this._findChildAtPosition(k, O) || this;
        }, C._inferEndPosition = function() {
            this.last && this.last.source && this.last.source.end && (this.source = this.source || {}, this.source.end = this.source.end || {}, Object.assign(this.source.end, this.last.source.end));
        }, C.each = function(k) {
            this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach++;
            var O = this.lastEach;
            if (this.indexes[O] = 0, !!this.length) {
                for(var E, M; this.indexes[O] < this.length && (E = this.indexes[O], M = k(this.at(E), E), M !== !1);)this.indexes[O] += 1;
                if (delete this.indexes[O], M === !1) return !1;
            }
        }, C.walk = function(k) {
            return this.each(function(O, E) {
                var M = k(O, E);
                if (M !== !1 && O.length && (M = O.walk(k)), M === !1) return !1;
            });
        }, C.walkAttributes = function(k) {
            var O = this;
            return this.walk(function(E) {
                if (E.type === r.ATTRIBUTE) return k.call(O, E);
            });
        }, C.walkClasses = function(k) {
            var O = this;
            return this.walk(function(E) {
                if (E.type === r.CLASS) return k.call(O, E);
            });
        }, C.walkCombinators = function(k) {
            var O = this;
            return this.walk(function(E) {
                if (E.type === r.COMBINATOR) return k.call(O, E);
            });
        }, C.walkComments = function(k) {
            var O = this;
            return this.walk(function(E) {
                if (E.type === r.COMMENT) return k.call(O, E);
            });
        }, C.walkIds = function(k) {
            var O = this;
            return this.walk(function(E) {
                if (E.type === r.ID) return k.call(O, E);
            });
        }, C.walkNesting = function(k) {
            var O = this;
            return this.walk(function(E) {
                if (E.type === r.NESTING) return k.call(O, E);
            });
        }, C.walkPseudos = function(k) {
            var O = this;
            return this.walk(function(E) {
                if (E.type === r.PSEUDO) return k.call(O, E);
            });
        }, C.walkTags = function(k) {
            var O = this;
            return this.walk(function(E) {
                if (E.type === r.TAG) return k.call(O, E);
            });
        }, C.walkUniversals = function(k) {
            var O = this;
            return this.walk(function(E) {
                if (E.type === r.UNIVERSAL) return k.call(O, E);
            });
        }, C.split = function(k) {
            var O = this, E = [];
            return this.reduce(function(M, D, P) {
                var b = k.call(O, D);
                return E.push(D), b ? (M.push(E), E = []) : P === O.length - 1 && M.push(E), M;
            }, []);
        }, C.map = function(k) {
            return this.nodes.map(k);
        }, C.reduce = function(k, O) {
            return this.nodes.reduce(k, O);
        }, C.every = function(k) {
            return this.nodes.every(k);
        }, C.some = function(k) {
            return this.nodes.some(k);
        }, C.filter = function(k) {
            return this.nodes.filter(k);
        }, C.sort = function(k) {
            return this.nodes.sort(k);
        }, C.toString = function() {
            return this.map(String).join("");
        }, u(m, [
            {
                key: "first",
                get: function() {
                    return this.at(0);
                }
            },
            {
                key: "last",
                get: function() {
                    return this.at(this.length - 1);
                }
            },
            {
                key: "length",
                get: function() {
                    return this.nodes.length;
                }
            }
        ]), m;
    }(t.default);
    e.default = x, s.exports = e.default;
})(en, en.exports);
var $n = en.exports;
(function(s, e) {
    e.__esModule = !0, e.default = void 0;
    var t = n($n), r = be;
    function n(f) {
        return f && f.__esModule ? f : {
            default: f
        };
    }
    function l(f, u) {
        for(var p = 0; p < u.length; p++){
            var _ = u[p];
            _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(f, _.key, _);
        }
    }
    function i(f, u, p) {
        return u && l(f.prototype, u), Object.defineProperty(f, "prototype", {
            writable: !1
        }), f;
    }
    function c(f, u) {
        f.prototype = Object.create(u.prototype), f.prototype.constructor = f, a(f, u);
    }
    function a(f, u) {
        return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(_, x) {
            return _.__proto__ = x, _;
        }, a(f, u);
    }
    var o = /* @__PURE__ */ function(f) {
        c(u, f);
        function u(_) {
            var x;
            return x = f.call(this, _) || this, x.type = r.ROOT, x;
        }
        var p = u.prototype;
        return p.toString = function() {
            var x = this.reduce(function(h, m) {
                return h.push(String(m)), h;
            }, []).join(",");
            return this.trailingComma ? x + "," : x;
        }, p.error = function(x, h) {
            return this._error ? this._error(x, h) : new Error(x);
        }, i(u, [
            {
                key: "errorGenerator",
                set: function(x) {
                    this._error = x;
                }
            }
        ]), u;
    }(t.default);
    e.default = o, s.exports = e.default;
})(Zr, Zr.exports);
var Ta = Zr.exports, on = {
    exports: {}
};
(function(s, e) {
    e.__esModule = !0, e.default = void 0;
    var t = n($n), r = be;
    function n(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }
    function l(a, o) {
        a.prototype = Object.create(o.prototype), a.prototype.constructor = a, i(a, o);
    }
    function i(a, o) {
        return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, p) {
            return u.__proto__ = p, u;
        }, i(a, o);
    }
    var c = /* @__PURE__ */ function(a) {
        l(o, a);
        function o(f) {
            var u;
            return u = a.call(this, f) || this, u.type = r.SELECTOR, u;
        }
        return o;
    }(t.default);
    e.default = c, s.exports = e.default;
})(on, on.exports);
var Ma = on.exports, ln = {
    exports: {}
};
/*! https://mths.be/cssesc v3.0.0 by @mathias */ var au = {}, su = au.hasOwnProperty, ou = function(e, t) {
    if (!e) return t;
    var r = {};
    for(var n in t)r[n] = su.call(e, n) ? e[n] : t[n];
    return r;
}, lu = /[ -,\.\/:-@\[-\^`\{-~]/, uu = /[ -,\.\/:-@\[\]\^`\{-~]/, fu = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g, Dn = function s(e, t) {
    t = ou(t, s.options), t.quotes != "single" && t.quotes != "double" && (t.quotes = "single");
    for(var r = t.quotes == "double" ? '"' : "'", n = t.isIdentifier, l = e.charAt(0), i = "", c = 0, a = e.length; c < a;){
        var o = e.charAt(c++), f = o.charCodeAt(), u = void 0;
        if (f < 32 || f > 126) {
            if (f >= 55296 && f <= 56319 && c < a) {
                var p = e.charCodeAt(c++);
                (p & 64512) == 56320 ? f = ((f & 1023) << 10) + (p & 1023) + 65536 : c--;
            }
            u = "\\" + f.toString(16).toUpperCase() + " ";
        } else t.escapeEverything ? lu.test(o) ? u = "\\" + o : u = "\\" + f.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(o) ? u = "\\" + f.toString(16).toUpperCase() + " " : o == "\\" || !n && (o == '"' && r == o || o == "'" && r == o) || n && uu.test(o) ? u = "\\" + o : u = o;
        i += u;
    }
    return n && (/^-[-\d]/.test(i) ? i = "\\-" + i.slice(1) : /\d/.test(l) && (i = "\\3" + l + " " + i.slice(1))), i = i.replace(fu, function(_, x, h) {
        return x && x.length % 2 ? _ : (x || "") + h;
    }), !n && t.wrap ? r + i + r : i;
};
Dn.options = {
    escapeEverything: !1,
    isIdentifier: !1,
    quotes: "single",
    wrap: !1
};
Dn.version = "3.0.0";
var Nn = Dn;
(function(s, e) {
    e.__esModule = !0, e.default = void 0;
    var t = i(Nn), r = Be, n = i(at), l = be;
    function i(p) {
        return p && p.__esModule ? p : {
            default: p
        };
    }
    function c(p, _) {
        for(var x = 0; x < _.length; x++){
            var h = _[x];
            h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(p, h.key, h);
        }
    }
    function a(p, _, x) {
        return _ && c(p.prototype, _), Object.defineProperty(p, "prototype", {
            writable: !1
        }), p;
    }
    function o(p, _) {
        p.prototype = Object.create(_.prototype), p.prototype.constructor = p, f(p, _);
    }
    function f(p, _) {
        return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(h, m) {
            return h.__proto__ = m, h;
        }, f(p, _);
    }
    var u = /* @__PURE__ */ function(p) {
        o(_, p);
        function _(h) {
            var m;
            return m = p.call(this, h) || this, m.type = l.CLASS, m._constructed = !0, m;
        }
        var x = _.prototype;
        return x.valueToString = function() {
            return "." + p.prototype.valueToString.call(this);
        }, a(_, [
            {
                key: "value",
                get: function() {
                    return this._value;
                },
                set: function(m) {
                    if (this._constructed) {
                        var C = (0, t.default)(m, {
                            isIdentifier: !0
                        });
                        C !== m ? ((0, r.ensureObject)(this, "raws"), this.raws.value = C) : this.raws && delete this.raws.value;
                    }
                    this._value = m;
                }
            }
        ]), _;
    }(n.default);
    e.default = u, s.exports = e.default;
})(ln, ln.exports);
var Ia = ln.exports, un = {
    exports: {}
};
(function(s, e) {
    e.__esModule = !0, e.default = void 0;
    var t = n(at), r = be;
    function n(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }
    function l(a, o) {
        a.prototype = Object.create(o.prototype), a.prototype.constructor = a, i(a, o);
    }
    function i(a, o) {
        return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, p) {
            return u.__proto__ = p, u;
        }, i(a, o);
    }
    var c = /* @__PURE__ */ function(a) {
        l(o, a);
        function o(f) {
            var u;
            return u = a.call(this, f) || this, u.type = r.COMMENT, u;
        }
        return o;
    }(t.default);
    e.default = c, s.exports = e.default;
})(un, un.exports);
var Ra = un.exports, fn = {
    exports: {}
};
(function(s, e) {
    e.__esModule = !0, e.default = void 0;
    var t = n(at), r = be;
    function n(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }
    function l(a, o) {
        a.prototype = Object.create(o.prototype), a.prototype.constructor = a, i(a, o);
    }
    function i(a, o) {
        return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, p) {
            return u.__proto__ = p, u;
        }, i(a, o);
    }
    var c = /* @__PURE__ */ function(a) {
        l(o, a);
        function o(u) {
            var p;
            return p = a.call(this, u) || this, p.type = r.ID, p;
        }
        var f = o.prototype;
        return f.valueToString = function() {
            return "#" + a.prototype.valueToString.call(this);
        }, o;
    }(t.default);
    e.default = c, s.exports = e.default;
})(fn, fn.exports);
var $a = fn.exports, cn = {
    exports: {}
}, dn = {
    exports: {}
};
(function(s, e) {
    e.__esModule = !0, e.default = void 0;
    var t = l(Nn), r = Be, n = l(at);
    function l(u) {
        return u && u.__esModule ? u : {
            default: u
        };
    }
    function i(u, p) {
        for(var _ = 0; _ < p.length; _++){
            var x = p[_];
            x.enumerable = x.enumerable || !1, x.configurable = !0, "value" in x && (x.writable = !0), Object.defineProperty(u, x.key, x);
        }
    }
    function c(u, p, _) {
        return p && i(u.prototype, p), Object.defineProperty(u, "prototype", {
            writable: !1
        }), u;
    }
    function a(u, p) {
        u.prototype = Object.create(p.prototype), u.prototype.constructor = u, o(u, p);
    }
    function o(u, p) {
        return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(x, h) {
            return x.__proto__ = h, x;
        }, o(u, p);
    }
    var f = /* @__PURE__ */ function(u) {
        a(p, u);
        function p() {
            return u.apply(this, arguments) || this;
        }
        var _ = p.prototype;
        return _.qualifiedName = function(h) {
            return this.namespace ? this.namespaceString + "|" + h : h;
        }, _.valueToString = function() {
            return this.qualifiedName(u.prototype.valueToString.call(this));
        }, c(p, [
            {
                key: "namespace",
                get: function() {
                    return this._namespace;
                },
                set: function(h) {
                    if (h === !0 || h === "*" || h === "&") {
                        this._namespace = h, this.raws && delete this.raws.namespace;
                        return;
                    }
                    var m = (0, t.default)(h, {
                        isIdentifier: !0
                    });
                    this._namespace = h, m !== h ? ((0, r.ensureObject)(this, "raws"), this.raws.namespace = m) : this.raws && delete this.raws.namespace;
                }
            },
            {
                key: "ns",
                get: function() {
                    return this._namespace;
                },
                set: function(h) {
                    this.namespace = h;
                }
            },
            {
                key: "namespaceString",
                get: function() {
                    if (this.namespace) {
                        var h = this.stringifyProperty("namespace");
                        return h === !0 ? "" : h;
                    } else return "";
                }
            }
        ]), p;
    }(n.default);
    e.default = f, s.exports = e.default;
})(dn, dn.exports);
var Ln = dn.exports;
(function(s, e) {
    e.__esModule = !0, e.default = void 0;
    var t = n(Ln), r = be;
    function n(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }
    function l(a, o) {
        a.prototype = Object.create(o.prototype), a.prototype.constructor = a, i(a, o);
    }
    function i(a, o) {
        return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, p) {
            return u.__proto__ = p, u;
        }, i(a, o);
    }
    var c = /* @__PURE__ */ function(a) {
        l(o, a);
        function o(f) {
            var u;
            return u = a.call(this, f) || this, u.type = r.TAG, u;
        }
        return o;
    }(t.default);
    e.default = c, s.exports = e.default;
})(cn, cn.exports);
var Da = cn.exports, pn = {
    exports: {}
};
(function(s, e) {
    e.__esModule = !0, e.default = void 0;
    var t = n(at), r = be;
    function n(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }
    function l(a, o) {
        a.prototype = Object.create(o.prototype), a.prototype.constructor = a, i(a, o);
    }
    function i(a, o) {
        return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, p) {
            return u.__proto__ = p, u;
        }, i(a, o);
    }
    var c = /* @__PURE__ */ function(a) {
        l(o, a);
        function o(f) {
            var u;
            return u = a.call(this, f) || this, u.type = r.STRING, u;
        }
        return o;
    }(t.default);
    e.default = c, s.exports = e.default;
})(pn, pn.exports);
var Na = pn.exports, hn = {
    exports: {}
};
(function(s, e) {
    e.__esModule = !0, e.default = void 0;
    var t = n($n), r = be;
    function n(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }
    function l(a, o) {
        a.prototype = Object.create(o.prototype), a.prototype.constructor = a, i(a, o);
    }
    function i(a, o) {
        return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, p) {
            return u.__proto__ = p, u;
        }, i(a, o);
    }
    var c = /* @__PURE__ */ function(a) {
        l(o, a);
        function o(u) {
            var p;
            return p = a.call(this, u) || this, p.type = r.PSEUDO, p;
        }
        var f = o.prototype;
        return f.toString = function() {
            var p = this.length ? "(" + this.map(String).join(",") + ")" : "";
            return [
                this.rawSpaceBefore,
                this.stringifyProperty("value"),
                p,
                this.rawSpaceAfter
            ].join("");
        }, o;
    }(t.default);
    e.default = c, s.exports = e.default;
})(hn, hn.exports);
var La = hn.exports, Fn = {}, cu = du;
function du(s, e) {
    if (Cr("noDeprecation")) return s;
    var t = !1;
    function r() {
        if (!t) {
            if (Cr("throwDeprecation")) throw new Error(e);
            Cr("traceDeprecation") ? console.trace(e) : console.warn(e), t = !0;
        }
        return s.apply(this, arguments);
    }
    return r;
}
function Cr(s) {
    try {
        if (!ni.localStorage) return !1;
    } catch  {
        return !1;
    }
    var e = ni.localStorage[s];
    return e == null ? !1 : String(e).toLowerCase() === "true";
}
(function(s) {
    s.__esModule = !0, s.default = void 0, s.unescapeValue = m;
    var e = i(Nn), t = i(Rn), r = i(Ln), n = be, l;
    function i(E) {
        return E && E.__esModule ? E : {
            default: E
        };
    }
    function c(E, M) {
        for(var D = 0; D < M.length; D++){
            var P = M[D];
            P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(E, P.key, P);
        }
    }
    function a(E, M, D) {
        return M && c(E.prototype, M), Object.defineProperty(E, "prototype", {
            writable: !1
        }), E;
    }
    function o(E, M) {
        E.prototype = Object.create(M.prototype), E.prototype.constructor = E, f(E, M);
    }
    function f(E, M) {
        return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(P, b) {
            return P.__proto__ = b, P;
        }, f(E, M);
    }
    var u = cu, p = /^('|")([^]*)\1$/, _ = u(function() {}, "Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead."), x = u(function() {}, "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead."), h = u(function() {}, "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");
    function m(E) {
        var M = !1, D = null, P = E, b = P.match(p);
        return b && (D = b[1], P = b[2]), P = (0, t.default)(P), P !== E && (M = !0), {
            deprecatedUsage: M,
            unescaped: P,
            quoteMark: D
        };
    }
    function C(E) {
        if (E.quoteMark !== void 0 || E.value === void 0) return E;
        h();
        var M = m(E.value), D = M.quoteMark, P = M.unescaped;
        return E.raws || (E.raws = {}), E.raws.value === void 0 && (E.raws.value = E.value), E.value = P, E.quoteMark = D, E;
    }
    var S = /* @__PURE__ */ function(E) {
        o(M, E);
        function M(P) {
            var b;
            return P === void 0 && (P = {}), b = E.call(this, C(P)) || this, b.type = n.ATTRIBUTE, b.raws = b.raws || {}, Object.defineProperty(b.raws, "unquoted", {
                get: u(function() {
                    return b.value;
                }, "attr.raws.unquoted is deprecated. Call attr.value instead."),
                set: u(function() {
                    return b.value;
                }, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")
            }), b._constructed = !0, b;
        }
        var D = M.prototype;
        return D.getQuotedValue = function(b) {
            b === void 0 && (b = {});
            var A = this._determineQuoteMark(b), N = k[A], T = (0, e.default)(this._value, N);
            return T;
        }, D._determineQuoteMark = function(b) {
            return b.smart ? this.smartQuoteMark(b) : this.preferredQuoteMark(b);
        }, D.setValue = function(b, A) {
            A === void 0 && (A = {}), this._value = b, this._quoteMark = this._determineQuoteMark(A), this._syncRawValue();
        }, D.smartQuoteMark = function(b) {
            var A = this.value, N = A.replace(/[^']/g, "").length, T = A.replace(/[^"]/g, "").length;
            if (N + T === 0) {
                var V = (0, e.default)(A, {
                    isIdentifier: !0
                });
                if (V === A) return M.NO_QUOTE;
                var d = this.preferredQuoteMark(b);
                if (d === M.NO_QUOTE) {
                    var g = this.quoteMark || b.quoteMark || M.DOUBLE_QUOTE, v = k[g], y = (0, e.default)(A, v);
                    if (y.length < V.length) return g;
                }
                return d;
            } else return T === N ? this.preferredQuoteMark(b) : T < N ? M.DOUBLE_QUOTE : M.SINGLE_QUOTE;
        }, D.preferredQuoteMark = function(b) {
            var A = b.preferCurrentQuoteMark ? this.quoteMark : b.quoteMark;
            return A === void 0 && (A = b.preferCurrentQuoteMark ? b.quoteMark : this.quoteMark), A === void 0 && (A = M.DOUBLE_QUOTE), A;
        }, D._syncRawValue = function() {
            var b = (0, e.default)(this._value, k[this.quoteMark]);
            b === this._value ? this.raws && delete this.raws.value : this.raws.value = b;
        }, D._handleEscapes = function(b, A) {
            if (this._constructed) {
                var N = (0, e.default)(A, {
                    isIdentifier: !0
                });
                N !== A ? this.raws[b] = N : delete this.raws[b];
            }
        }, D._spacesFor = function(b) {
            var A = {
                before: "",
                after: ""
            }, N = this.spaces[b] || {}, T = this.raws.spaces && this.raws.spaces[b] || {};
            return Object.assign(A, N, T);
        }, D._stringFor = function(b, A, N) {
            A === void 0 && (A = b), N === void 0 && (N = O);
            var T = this._spacesFor(A);
            return N(this.stringifyProperty(b), T);
        }, D.offsetOf = function(b) {
            var A = 1, N = this._spacesFor("attribute");
            if (A += N.before.length, b === "namespace" || b === "ns") return this.namespace ? A : -1;
            if (b === "attributeNS" || (A += this.namespaceString.length, this.namespace && (A += 1), b === "attribute")) return A;
            A += this.stringifyProperty("attribute").length, A += N.after.length;
            var T = this._spacesFor("operator");
            A += T.before.length;
            var V = this.stringifyProperty("operator");
            if (b === "operator") return V ? A : -1;
            A += V.length, A += T.after.length;
            var d = this._spacesFor("value");
            A += d.before.length;
            var g = this.stringifyProperty("value");
            if (b === "value") return g ? A : -1;
            A += g.length, A += d.after.length;
            var v = this._spacesFor("insensitive");
            return A += v.before.length, b === "insensitive" && this.insensitive ? A : -1;
        }, D.toString = function() {
            var b = this, A = [
                this.rawSpaceBefore,
                "["
            ];
            return A.push(this._stringFor("qualifiedAttribute", "attribute")), this.operator && (this.value || this.value === "") && (A.push(this._stringFor("operator")), A.push(this._stringFor("value")), A.push(this._stringFor("insensitiveFlag", "insensitive", function(N, T) {
                return N.length > 0 && !b.quoted && T.before.length === 0 && !(b.spaces.value && b.spaces.value.after) && (T.before = " "), O(N, T);
            }))), A.push("]"), A.push(this.rawSpaceAfter), A.join("");
        }, a(M, [
            {
                key: "quoted",
                get: function() {
                    var b = this.quoteMark;
                    return b === "'" || b === '"';
                },
                set: function(b) {
                    x();
                }
            },
            {
                key: "quoteMark",
                get: function() {
                    return this._quoteMark;
                },
                set: function(b) {
                    if (!this._constructed) {
                        this._quoteMark = b;
                        return;
                    }
                    this._quoteMark !== b && (this._quoteMark = b, this._syncRawValue());
                }
            },
            {
                key: "qualifiedAttribute",
                get: function() {
                    return this.qualifiedName(this.raws.attribute || this.attribute);
                }
            },
            {
                key: "insensitiveFlag",
                get: function() {
                    return this.insensitive ? "i" : "";
                }
            },
            {
                key: "value",
                get: function() {
                    return this._value;
                },
                set: /**
         * Before 3.0, the value had to be set to an escaped value including any wrapped
         * quote marks. In 3.0, the semantics of `Attribute.value` changed so that the value
         * is unescaped during parsing and any quote marks are removed.
         *
         * Because the ambiguity of this semantic change, if you set `attr.value = newValue`,
         * a deprecation warning is raised when the new value contains any characters that would
         * require escaping (including if it contains wrapped quotes).
         *
         * Instead, you should call `attr.setValue(newValue, opts)` and pass options that describe
         * how the new value is quoted.
         */ function(b) {
                    if (this._constructed) {
                        var A = m(b), N = A.deprecatedUsage, T = A.unescaped, V = A.quoteMark;
                        if (N && _(), T === this._value && V === this._quoteMark) return;
                        this._value = T, this._quoteMark = V, this._syncRawValue();
                    } else this._value = b;
                }
            },
            {
                key: "insensitive",
                get: function() {
                    return this._insensitive;
                },
                set: function(b) {
                    b || (this._insensitive = !1, this.raws && (this.raws.insensitiveFlag === "I" || this.raws.insensitiveFlag === "i") && (this.raws.insensitiveFlag = void 0)), this._insensitive = b;
                }
            },
            {
                key: "attribute",
                get: function() {
                    return this._attribute;
                },
                set: function(b) {
                    this._handleEscapes("attribute", b), this._attribute = b;
                }
            }
        ]), M;
    }(r.default);
    s.default = S, S.NO_QUOTE = null, S.SINGLE_QUOTE = "'", S.DOUBLE_QUOTE = '"';
    var k = (l = {
        "'": {
            quotes: "single",
            wrap: !0
        },
        '"': {
            quotes: "double",
            wrap: !0
        }
    }, l[null] = {
        isIdentifier: !0
    }, l);
    function O(E, M) {
        return "" + M.before + E + M.after;
    }
})(Fn);
var mn = {
    exports: {}
};
(function(s, e) {
    e.__esModule = !0, e.default = void 0;
    var t = n(Ln), r = be;
    function n(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }
    function l(a, o) {
        a.prototype = Object.create(o.prototype), a.prototype.constructor = a, i(a, o);
    }
    function i(a, o) {
        return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, p) {
            return u.__proto__ = p, u;
        }, i(a, o);
    }
    var c = /* @__PURE__ */ function(a) {
        l(o, a);
        function o(f) {
            var u;
            return u = a.call(this, f) || this, u.type = r.UNIVERSAL, u.value = "*", u;
        }
        return o;
    }(t.default);
    e.default = c, s.exports = e.default;
})(mn, mn.exports);
var Fa = mn.exports, gn = {
    exports: {}
};
(function(s, e) {
    e.__esModule = !0, e.default = void 0;
    var t = n(at), r = be;
    function n(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }
    function l(a, o) {
        a.prototype = Object.create(o.prototype), a.prototype.constructor = a, i(a, o);
    }
    function i(a, o) {
        return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, p) {
            return u.__proto__ = p, u;
        }, i(a, o);
    }
    var c = /* @__PURE__ */ function(a) {
        l(o, a);
        function o(f) {
            var u;
            return u = a.call(this, f) || this, u.type = r.COMBINATOR, u;
        }
        return o;
    }(t.default);
    e.default = c, s.exports = e.default;
})(gn, gn.exports);
var za = gn.exports, vn = {
    exports: {}
};
(function(s, e) {
    e.__esModule = !0, e.default = void 0;
    var t = n(at), r = be;
    function n(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }
    function l(a, o) {
        a.prototype = Object.create(o.prototype), a.prototype.constructor = a, i(a, o);
    }
    function i(a, o) {
        return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(u, p) {
            return u.__proto__ = p, u;
        }, i(a, o);
    }
    var c = /* @__PURE__ */ function(a) {
        l(o, a);
        function o(f) {
            var u;
            return u = a.call(this, f) || this, u.type = r.NESTING, u.value = "&", u;
        }
        return o;
    }(t.default);
    e.default = c, s.exports = e.default;
})(vn, vn.exports);
var Ua = vn.exports, yn = {
    exports: {}
};
(function(s, e) {
    e.__esModule = !0, e.default = t;
    function t(r) {
        return r.sort(function(n, l) {
            return n - l;
        });
    }
    s.exports = e.default;
})(yn, yn.exports);
var pu = yn.exports, ja = {}, ie = {};
ie.__esModule = !0;
ie.word = ie.tilde = ie.tab = ie.str = ie.space = ie.slash = ie.singleQuote = ie.semicolon = ie.plus = ie.pipe = ie.openSquare = ie.openParenthesis = ie.newline = ie.greaterThan = ie.feed = ie.equals = ie.doubleQuote = ie.dollar = ie.cr = ie.comment = ie.comma = ie.combinator = ie.colon = ie.closeSquare = ie.closeParenthesis = ie.caret = ie.bang = ie.backslash = ie.at = ie.asterisk = ie.ampersand = void 0;
var hu = 38;
ie.ampersand = hu;
var mu = 42;
ie.asterisk = mu;
var gu = 64;
ie.at = gu;
var vu = 44;
ie.comma = vu;
var yu = 58;
ie.colon = yu;
var wu = 59;
ie.semicolon = wu;
var bu = 40;
ie.openParenthesis = bu;
var xu = 41;
ie.closeParenthesis = xu;
var _u = 91;
ie.openSquare = _u;
var Su = 93;
ie.closeSquare = Su;
var Ou = 36;
ie.dollar = Ou;
var ku = 126;
ie.tilde = ku;
var Au = 94;
ie.caret = Au;
var Cu = 43;
ie.plus = Cu;
var Eu = 61;
ie.equals = Eu;
var Pu = 124;
ie.pipe = Pu;
var Tu = 62;
ie.greaterThan = Tu;
var Mu = 32;
ie.space = Mu;
var Va = 39;
ie.singleQuote = Va;
var Iu = 34;
ie.doubleQuote = Iu;
var Ru = 47;
ie.slash = Ru;
var $u = 33;
ie.bang = $u;
var Du = 92;
ie.backslash = Du;
var Nu = 13;
ie.cr = Nu;
var Lu = 12;
ie.feed = Lu;
var Fu = 10;
ie.newline = Fu;
var zu = 9;
ie.tab = zu;
var Uu = Va;
ie.str = Uu;
var ju = -1;
ie.comment = ju;
var Vu = -2;
ie.word = Vu;
var Wu = -3;
ie.combinator = Wu;
(function(s) {
    s.__esModule = !0, s.FIELDS = void 0, s.default = x;
    var e = l(ie), t, r;
    function n(h) {
        if (typeof WeakMap != "function") return null;
        var m = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap();
        return (n = function(k) {
            return k ? C : m;
        })(h);
    }
    function l(h, m) {
        if (h && h.__esModule) return h;
        if (h === null || typeof h != "object" && typeof h != "function") return {
            default: h
        };
        var C = n(m);
        if (C && C.has(h)) return C.get(h);
        var S = {}, k = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for(var O in h)if (O !== "default" && Object.prototype.hasOwnProperty.call(h, O)) {
            var E = k ? Object.getOwnPropertyDescriptor(h, O) : null;
            E && (E.get || E.set) ? Object.defineProperty(S, O, E) : S[O] = h[O];
        }
        return S.default = h, C && C.set(h, S), S;
    }
    for(var i = (t = {}, t[e.tab] = !0, t[e.newline] = !0, t[e.cr] = !0, t[e.feed] = !0, t), c = (r = {}, r[e.space] = !0, r[e.tab] = !0, r[e.newline] = !0, r[e.cr] = !0, r[e.feed] = !0, r[e.ampersand] = !0, r[e.asterisk] = !0, r[e.bang] = !0, r[e.comma] = !0, r[e.colon] = !0, r[e.semicolon] = !0, r[e.openParenthesis] = !0, r[e.closeParenthesis] = !0, r[e.openSquare] = !0, r[e.closeSquare] = !0, r[e.singleQuote] = !0, r[e.doubleQuote] = !0, r[e.plus] = !0, r[e.pipe] = !0, r[e.tilde] = !0, r[e.greaterThan] = !0, r[e.equals] = !0, r[e.dollar] = !0, r[e.caret] = !0, r[e.slash] = !0, r), a = {}, o = "0123456789abcdefABCDEF", f = 0; f < o.length; f++)a[o.charCodeAt(f)] = !0;
    function u(h, m) {
        var C = m, S;
        do {
            if (S = h.charCodeAt(C), c[S]) return C - 1;
            S === e.backslash ? C = p(h, C) + 1 : C++;
        }while (C < h.length)
        return C - 1;
    }
    function p(h, m) {
        var C = m, S = h.charCodeAt(C + 1);
        if (!i[S]) if (a[S]) {
            var k = 0;
            do C++, k++, S = h.charCodeAt(C + 1);
            while (a[S] && k < 6)
            k < 6 && S === e.space && C++;
        } else C++;
        return C;
    }
    var _ = {
        TYPE: 0,
        START_LINE: 1,
        START_COL: 2,
        END_LINE: 3,
        END_COL: 4,
        START_POS: 5,
        END_POS: 6
    };
    s.FIELDS = _;
    function x(h) {
        var m = [], C = h.css.valueOf(), S = C, k = S.length, O = -1, E = 1, M = 0, D = 0, P, b, A, N, T, V, d, g, v, y, R, F, $;
        function z(j, W) {
            if (h.safe) C += W, v = C.length - 1;
            else throw h.error("Unclosed " + j, E, M - O, M);
        }
        for(; M < k;){
            switch(P = C.charCodeAt(M), P === e.newline && (O = M, E += 1), P){
                case e.space:
                case e.tab:
                case e.newline:
                case e.cr:
                case e.feed:
                    v = M;
                    do v += 1, P = C.charCodeAt(v), P === e.newline && (O = v, E += 1);
                    while (P === e.space || P === e.newline || P === e.tab || P === e.cr || P === e.feed)
                    $ = e.space, N = E, A = v - O - 1, D = v;
                    break;
                case e.plus:
                case e.greaterThan:
                case e.tilde:
                case e.pipe:
                    v = M;
                    do v += 1, P = C.charCodeAt(v);
                    while (P === e.plus || P === e.greaterThan || P === e.tilde || P === e.pipe)
                    $ = e.combinator, N = E, A = M - O, D = v;
                    break;
                case e.asterisk:
                case e.ampersand:
                case e.bang:
                case e.comma:
                case e.equals:
                case e.dollar:
                case e.caret:
                case e.openSquare:
                case e.closeSquare:
                case e.colon:
                case e.semicolon:
                case e.openParenthesis:
                case e.closeParenthesis:
                    v = M, $ = P, N = E, A = M - O, D = v + 1;
                    break;
                case e.singleQuote:
                case e.doubleQuote:
                    F = P === e.singleQuote ? "'" : '"', v = M;
                    do for(T = !1, v = C.indexOf(F, v + 1), v === -1 && z("quote", F), V = v; C.charCodeAt(V - 1) === e.backslash;)V -= 1, T = !T;
                    while (T)
                    $ = e.str, N = E, A = M - O, D = v + 1;
                    break;
                default:
                    P === e.slash && C.charCodeAt(M + 1) === e.asterisk ? (v = C.indexOf("*/", M + 2) + 1, v === 0 && z("comment", "*/"), b = C.slice(M, v + 1), g = b.split(`
`), d = g.length - 1, d > 0 ? (y = E + d, R = v - g[d].length) : (y = E, R = O), $ = e.comment, E = y, N = y, A = v - R) : P === e.slash ? (v = M, $ = P, N = E, A = M - O, D = v + 1) : (v = u(C, M), $ = e.word, N = E, A = v - O), D = v + 1;
                    break;
            }
            m.push([
                $,
                // [0] Token type
                E,
                // [1] Starting line
                M - O,
                // [2] Starting column
                N,
                // [3] Ending line
                A,
                // [4] Ending column
                M,
                // [5] Start position / Source index
                D
            ]), R && (O = R, R = null), M = D;
        }
        return m;
    }
})(ja);
(function(s, e) {
    e.__esModule = !0, e.default = void 0;
    var t = D(Ta), r = D(Ma), n = D(Ia), l = D(Ra), i = D($a), c = D(Da), a = D(Na), o = D(La), f = M(Fn), u = D(Fa), p = D(za), _ = D(Ua), x = D(pu), h = M(ja), m = M(ie), C = M(be), S = Be, k, O;
    function E(z) {
        if (typeof WeakMap != "function") return null;
        var j = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ new WeakMap();
        return (E = function(G) {
            return G ? W : j;
        })(z);
    }
    function M(z, j) {
        if (z && z.__esModule) return z;
        if (z === null || typeof z != "object" && typeof z != "function") return {
            default: z
        };
        var W = E(j);
        if (W && W.has(z)) return W.get(z);
        var I = {}, G = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for(var re in z)if (re !== "default" && Object.prototype.hasOwnProperty.call(z, re)) {
            var w = G ? Object.getOwnPropertyDescriptor(z, re) : null;
            w && (w.get || w.set) ? Object.defineProperty(I, re, w) : I[re] = z[re];
        }
        return I.default = z, W && W.set(z, I), I;
    }
    function D(z) {
        return z && z.__esModule ? z : {
            default: z
        };
    }
    function P(z, j) {
        for(var W = 0; W < j.length; W++){
            var I = j[W];
            I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(z, I.key, I);
        }
    }
    function b(z, j, W) {
        return j && P(z.prototype, j), Object.defineProperty(z, "prototype", {
            writable: !1
        }), z;
    }
    var A = (k = {}, k[m.space] = !0, k[m.cr] = !0, k[m.feed] = !0, k[m.newline] = !0, k[m.tab] = !0, k), N = Object.assign({}, A, (O = {}, O[m.comment] = !0, O));
    function T(z) {
        return {
            line: z[h.FIELDS.START_LINE],
            column: z[h.FIELDS.START_COL]
        };
    }
    function V(z) {
        return {
            line: z[h.FIELDS.END_LINE],
            column: z[h.FIELDS.END_COL]
        };
    }
    function d(z, j, W, I) {
        return {
            start: {
                line: z,
                column: j
            },
            end: {
                line: W,
                column: I
            }
        };
    }
    function g(z) {
        return d(z[h.FIELDS.START_LINE], z[h.FIELDS.START_COL], z[h.FIELDS.END_LINE], z[h.FIELDS.END_COL]);
    }
    function v(z, j) {
        if (z) return d(z[h.FIELDS.START_LINE], z[h.FIELDS.START_COL], j[h.FIELDS.END_LINE], j[h.FIELDS.END_COL]);
    }
    function y(z, j) {
        var W = z[j];
        if (typeof W == "string") return W.indexOf("\\") !== -1 && ((0, S.ensureObject)(z, "raws"), z[j] = (0, S.unesc)(W), z.raws[j] === void 0 && (z.raws[j] = W)), z;
    }
    function R(z, j) {
        for(var W = -1, I = []; (W = z.indexOf(j, W + 1)) !== -1;)I.push(W);
        return I;
    }
    function F() {
        var z = Array.prototype.concat.apply([], arguments);
        return z.filter(function(j, W) {
            return W === z.indexOf(j);
        });
    }
    var $ = /* @__PURE__ */ function() {
        function z(W, I) {
            I === void 0 && (I = {}), this.rule = W, this.options = Object.assign({
                lossy: !1,
                safe: !1
            }, I), this.position = 0, this.css = typeof this.rule == "string" ? this.rule : this.rule.selector, this.tokens = (0, h.default)({
                css: this.css,
                error: this._errorGenerator(),
                safe: this.options.safe
            });
            var G = v(this.tokens[0], this.tokens[this.tokens.length - 1]);
            this.root = new t.default({
                source: G
            }), this.root.errorGenerator = this._errorGenerator();
            var re = new r.default({
                source: {
                    start: {
                        line: 1,
                        column: 1
                    }
                }
            });
            this.root.append(re), this.current = re, this.loop();
        }
        var j = z.prototype;
        return j._errorGenerator = function() {
            var I = this;
            return function(G, re) {
                return typeof I.rule == "string" ? new Error(G) : I.rule.error(G, re);
            };
        }, j.attribute = function() {
            var I = [], G = this.currToken;
            for(this.position++; this.position < this.tokens.length && this.currToken[h.FIELDS.TYPE] !== m.closeSquare;)I.push(this.currToken), this.position++;
            if (this.currToken[h.FIELDS.TYPE] !== m.closeSquare) return this.expected("closing square bracket", this.currToken[h.FIELDS.START_POS]);
            var re = I.length, w = {
                source: d(G[1], G[2], this.currToken[3], this.currToken[4]),
                sourceIndex: G[h.FIELDS.START_POS]
            };
            if (re === 1 && !~[
                m.word
            ].indexOf(I[0][h.FIELDS.TYPE])) return this.expected("attribute", I[0][h.FIELDS.START_POS]);
            for(var L = 0, B = "", H = "", Y = null, J = !1; L < re;){
                var ee = I[L], Q = this.content(ee), le = I[L + 1];
                switch(ee[h.FIELDS.TYPE]){
                    case m.space:
                        if (J = !0, this.options.lossy) break;
                        if (Y) {
                            (0, S.ensureObject)(w, "spaces", Y);
                            var ye = w.spaces[Y].after || "";
                            w.spaces[Y].after = ye + Q;
                            var Oe = (0, S.getProp)(w, "raws", "spaces", Y, "after") || null;
                            Oe && (w.raws.spaces[Y].after = Oe + Q);
                        } else B = B + Q, H = H + Q;
                        break;
                    case m.asterisk:
                        if (le[h.FIELDS.TYPE] === m.equals) w.operator = Q, Y = "operator";
                        else if ((!w.namespace || Y === "namespace" && !J) && le) {
                            B && ((0, S.ensureObject)(w, "spaces", "attribute"), w.spaces.attribute.before = B, B = ""), H && ((0, S.ensureObject)(w, "raws", "spaces", "attribute"), w.raws.spaces.attribute.before = B, H = ""), w.namespace = (w.namespace || "") + Q;
                            var Ae = (0, S.getProp)(w, "raws", "namespace") || null;
                            Ae && (w.raws.namespace += Q), Y = "namespace";
                        }
                        J = !1;
                        break;
                    case m.dollar:
                        if (Y === "value") {
                            var oe = (0, S.getProp)(w, "raws", "value");
                            w.value += "$", oe && (w.raws.value = oe + "$");
                            break;
                        }
                    case m.caret:
                        le[h.FIELDS.TYPE] === m.equals && (w.operator = Q, Y = "operator"), J = !1;
                        break;
                    case m.combinator:
                        if (Q === "~" && le[h.FIELDS.TYPE] === m.equals && (w.operator = Q, Y = "operator"), Q !== "|") {
                            J = !1;
                            break;
                        }
                        le[h.FIELDS.TYPE] === m.equals ? (w.operator = Q, Y = "operator") : !w.namespace && !w.attribute && (w.namespace = !0), J = !1;
                        break;
                    case m.word:
                        if (le && this.content(le) === "|" && I[L + 2] && I[L + 2][h.FIELDS.TYPE] !== m.equals && // this look-ahead probably fails with comment nodes involved.
                        !w.operator && !w.namespace) w.namespace = Q, Y = "namespace";
                        else if (!w.attribute || Y === "attribute" && !J) {
                            B && ((0, S.ensureObject)(w, "spaces", "attribute"), w.spaces.attribute.before = B, B = ""), H && ((0, S.ensureObject)(w, "raws", "spaces", "attribute"), w.raws.spaces.attribute.before = H, H = ""), w.attribute = (w.attribute || "") + Q;
                            var Ne = (0, S.getProp)(w, "raws", "attribute") || null;
                            Ne && (w.raws.attribute += Q), Y = "attribute";
                        } else if (!w.value && w.value !== "" || Y === "value" && !(J || w.quoteMark)) {
                            var q = (0, S.unesc)(Q), U = (0, S.getProp)(w, "raws", "value") || "", Z = w.value || "";
                            w.value = Z + q, w.quoteMark = null, (q !== Q || U) && ((0, S.ensureObject)(w, "raws"), w.raws.value = (U || Z) + Q), Y = "value";
                        } else {
                            var K = Q === "i" || Q === "I";
                            (w.value || w.value === "") && (w.quoteMark || J) ? (w.insensitive = K, (!K || Q === "I") && ((0, S.ensureObject)(w, "raws"), w.raws.insensitiveFlag = Q), Y = "insensitive", B && ((0, S.ensureObject)(w, "spaces", "insensitive"), w.spaces.insensitive.before = B, B = ""), H && ((0, S.ensureObject)(w, "raws", "spaces", "insensitive"), w.raws.spaces.insensitive.before = H, H = "")) : (w.value || w.value === "") && (Y = "value", w.value += Q, w.raws.value && (w.raws.value += Q));
                        }
                        J = !1;
                        break;
                    case m.str:
                        if (!w.attribute || !w.operator) return this.error("Expected an attribute followed by an operator preceding the string.", {
                            index: ee[h.FIELDS.START_POS]
                        });
                        var X = (0, f.unescapeValue)(Q), ae = X.unescaped, se = X.quoteMark;
                        w.value = ae, w.quoteMark = se, Y = "value", (0, S.ensureObject)(w, "raws"), w.raws.value = Q, J = !1;
                        break;
                    case m.equals:
                        if (!w.attribute) return this.expected("attribute", ee[h.FIELDS.START_POS], Q);
                        if (w.value) return this.error('Unexpected "=" found; an operator was already defined.', {
                            index: ee[h.FIELDS.START_POS]
                        });
                        w.operator = w.operator ? w.operator + Q : Q, Y = "operator", J = !1;
                        break;
                    case m.comment:
                        if (Y) if (J || le && le[h.FIELDS.TYPE] === m.space || Y === "insensitive") {
                            var Se = (0, S.getProp)(w, "spaces", Y, "after") || "", fe = (0, S.getProp)(w, "raws", "spaces", Y, "after") || Se;
                            (0, S.ensureObject)(w, "raws", "spaces", Y), w.raws.spaces[Y].after = fe + Q;
                        } else {
                            var Pe = w[Y] || "", ge = (0, S.getProp)(w, "raws", Y) || Pe;
                            (0, S.ensureObject)(w, "raws"), w.raws[Y] = ge + Q;
                        }
                        else H = H + Q;
                        break;
                    default:
                        return this.error('Unexpected "' + Q + '" found.', {
                            index: ee[h.FIELDS.START_POS]
                        });
                }
                L++;
            }
            y(w, "attribute"), y(w, "namespace"), this.newNode(new f.default(w)), this.position++;
        }, j.parseWhitespaceEquivalentTokens = function(I) {
            I < 0 && (I = this.tokens.length);
            var G = this.position, re = [], w = "", L = void 0;
            do if (A[this.currToken[h.FIELDS.TYPE]]) this.options.lossy || (w += this.content());
            else if (this.currToken[h.FIELDS.TYPE] === m.comment) {
                var B = {};
                w && (B.before = w, w = ""), L = new l.default({
                    value: this.content(),
                    source: g(this.currToken),
                    sourceIndex: this.currToken[h.FIELDS.START_POS],
                    spaces: B
                }), re.push(L);
            }
            while (++this.position < I)
            if (w) {
                if (L) L.spaces.after = w;
                else if (!this.options.lossy) {
                    var H = this.tokens[G], Y = this.tokens[this.position - 1];
                    re.push(new a.default({
                        value: "",
                        source: d(H[h.FIELDS.START_LINE], H[h.FIELDS.START_COL], Y[h.FIELDS.END_LINE], Y[h.FIELDS.END_COL]),
                        sourceIndex: H[h.FIELDS.START_POS],
                        spaces: {
                            before: w,
                            after: ""
                        }
                    }));
                }
            }
            return re;
        }, j.convertWhitespaceNodesToSpace = function(I, G) {
            var re = this;
            G === void 0 && (G = !1);
            var w = "", L = "";
            I.forEach(function(H) {
                var Y = re.lossySpace(H.spaces.before, G), J = re.lossySpace(H.rawSpaceBefore, G);
                w += Y + re.lossySpace(H.spaces.after, G && Y.length === 0), L += Y + H.value + re.lossySpace(H.rawSpaceAfter, G && J.length === 0);
            }), L === w && (L = void 0);
            var B = {
                space: w,
                rawSpace: L
            };
            return B;
        }, j.isNamedCombinator = function(I) {
            return I === void 0 && (I = this.position), this.tokens[I + 0] && this.tokens[I + 0][h.FIELDS.TYPE] === m.slash && this.tokens[I + 1] && this.tokens[I + 1][h.FIELDS.TYPE] === m.word && this.tokens[I + 2] && this.tokens[I + 2][h.FIELDS.TYPE] === m.slash;
        }, j.namedCombinator = function() {
            if (this.isNamedCombinator()) {
                var I = this.content(this.tokens[this.position + 1]), G = (0, S.unesc)(I).toLowerCase(), re = {};
                G !== I && (re.value = "/" + I + "/");
                var w = new p.default({
                    value: "/" + G + "/",
                    source: d(this.currToken[h.FIELDS.START_LINE], this.currToken[h.FIELDS.START_COL], this.tokens[this.position + 2][h.FIELDS.END_LINE], this.tokens[this.position + 2][h.FIELDS.END_COL]),
                    sourceIndex: this.currToken[h.FIELDS.START_POS],
                    raws: re
                });
                return this.position = this.position + 3, w;
            } else this.unexpected();
        }, j.combinator = function() {
            var I = this;
            if (this.content() === "|") return this.namespace();
            var G = this.locateNextMeaningfulToken(this.position);
            if (G < 0 || this.tokens[G][h.FIELDS.TYPE] === m.comma) {
                var re = this.parseWhitespaceEquivalentTokens(G);
                if (re.length > 0) {
                    var w = this.current.last;
                    if (w) {
                        var L = this.convertWhitespaceNodesToSpace(re), B = L.space, H = L.rawSpace;
                        H !== void 0 && (w.rawSpaceAfter += H), w.spaces.after += B;
                    } else re.forEach(function(U) {
                        return I.newNode(U);
                    });
                }
                return;
            }
            var Y = this.currToken, J = void 0;
            G > this.position && (J = this.parseWhitespaceEquivalentTokens(G));
            var ee;
            if (this.isNamedCombinator() ? ee = this.namedCombinator() : this.currToken[h.FIELDS.TYPE] === m.combinator ? (ee = new p.default({
                value: this.content(),
                source: g(this.currToken),
                sourceIndex: this.currToken[h.FIELDS.START_POS]
            }), this.position++) : A[this.currToken[h.FIELDS.TYPE]] || J || this.unexpected(), ee) {
                if (J) {
                    var Q = this.convertWhitespaceNodesToSpace(J), le = Q.space, ye = Q.rawSpace;
                    ee.spaces.before = le, ee.rawSpaceBefore = ye;
                }
            } else {
                var Oe = this.convertWhitespaceNodesToSpace(J, !0), Ae = Oe.space, oe = Oe.rawSpace;
                oe || (oe = Ae);
                var Ne = {}, q = {
                    spaces: {}
                };
                Ae.endsWith(" ") && oe.endsWith(" ") ? (Ne.before = Ae.slice(0, Ae.length - 1), q.spaces.before = oe.slice(0, oe.length - 1)) : Ae.startsWith(" ") && oe.startsWith(" ") ? (Ne.after = Ae.slice(1), q.spaces.after = oe.slice(1)) : q.value = oe, ee = new p.default({
                    value: " ",
                    source: v(Y, this.tokens[this.position - 1]),
                    sourceIndex: Y[h.FIELDS.START_POS],
                    spaces: Ne,
                    raws: q
                });
            }
            return this.currToken && this.currToken[h.FIELDS.TYPE] === m.space && (ee.spaces.after = this.optionalSpace(this.content()), this.position++), this.newNode(ee);
        }, j.comma = function() {
            if (this.position === this.tokens.length - 1) {
                this.root.trailingComma = !0, this.position++;
                return;
            }
            this.current._inferEndPosition();
            var I = new r.default({
                source: {
                    start: T(this.tokens[this.position + 1])
                }
            });
            this.current.parent.append(I), this.current = I, this.position++;
        }, j.comment = function() {
            var I = this.currToken;
            this.newNode(new l.default({
                value: this.content(),
                source: g(I),
                sourceIndex: I[h.FIELDS.START_POS]
            })), this.position++;
        }, j.error = function(I, G) {
            throw this.root.error(I, G);
        }, j.missingBackslash = function() {
            return this.error("Expected a backslash preceding the semicolon.", {
                index: this.currToken[h.FIELDS.START_POS]
            });
        }, j.missingParenthesis = function() {
            return this.expected("opening parenthesis", this.currToken[h.FIELDS.START_POS]);
        }, j.missingSquareBracket = function() {
            return this.expected("opening square bracket", this.currToken[h.FIELDS.START_POS]);
        }, j.unexpected = function() {
            return this.error("Unexpected '" + this.content() + "'. Escaping special characters with \\ may help.", this.currToken[h.FIELDS.START_POS]);
        }, j.unexpectedPipe = function() {
            return this.error("Unexpected '|'.", this.currToken[h.FIELDS.START_POS]);
        }, j.namespace = function() {
            var I = this.prevToken && this.content(this.prevToken) || !0;
            if (this.nextToken[h.FIELDS.TYPE] === m.word) return this.position++, this.word(I);
            if (this.nextToken[h.FIELDS.TYPE] === m.asterisk) return this.position++, this.universal(I);
            this.unexpectedPipe();
        }, j.nesting = function() {
            if (this.nextToken) {
                var I = this.content(this.nextToken);
                if (I === "|") {
                    this.position++;
                    return;
                }
            }
            var G = this.currToken;
            this.newNode(new _.default({
                value: this.content(),
                source: g(G),
                sourceIndex: G[h.FIELDS.START_POS]
            })), this.position++;
        }, j.parentheses = function() {
            var I = this.current.last, G = 1;
            if (this.position++, I && I.type === C.PSEUDO) {
                var re = new r.default({
                    source: {
                        start: T(this.tokens[this.position - 1])
                    }
                }), w = this.current;
                for(I.append(re), this.current = re; this.position < this.tokens.length && G;)this.currToken[h.FIELDS.TYPE] === m.openParenthesis && G++, this.currToken[h.FIELDS.TYPE] === m.closeParenthesis && G--, G ? this.parse() : (this.current.source.end = V(this.currToken), this.current.parent.source.end = V(this.currToken), this.position++);
                this.current = w;
            } else {
                for(var L = this.currToken, B = "(", H; this.position < this.tokens.length && G;)this.currToken[h.FIELDS.TYPE] === m.openParenthesis && G++, this.currToken[h.FIELDS.TYPE] === m.closeParenthesis && G--, H = this.currToken, B += this.parseParenthesisToken(this.currToken), this.position++;
                I ? I.appendToPropertyAndEscape("value", B, B) : this.newNode(new a.default({
                    value: B,
                    source: d(L[h.FIELDS.START_LINE], L[h.FIELDS.START_COL], H[h.FIELDS.END_LINE], H[h.FIELDS.END_COL]),
                    sourceIndex: L[h.FIELDS.START_POS]
                }));
            }
            if (G) return this.expected("closing parenthesis", this.currToken[h.FIELDS.START_POS]);
        }, j.pseudo = function() {
            for(var I = this, G = "", re = this.currToken; this.currToken && this.currToken[h.FIELDS.TYPE] === m.colon;)G += this.content(), this.position++;
            if (!this.currToken) return this.expected([
                "pseudo-class",
                "pseudo-element"
            ], this.position - 1);
            if (this.currToken[h.FIELDS.TYPE] === m.word) this.splitWord(!1, function(w, L) {
                G += w, I.newNode(new o.default({
                    value: G,
                    source: v(re, I.currToken),
                    sourceIndex: re[h.FIELDS.START_POS]
                })), L > 1 && I.nextToken && I.nextToken[h.FIELDS.TYPE] === m.openParenthesis && I.error("Misplaced parenthesis.", {
                    index: I.nextToken[h.FIELDS.START_POS]
                });
            });
            else return this.expected([
                "pseudo-class",
                "pseudo-element"
            ], this.currToken[h.FIELDS.START_POS]);
        }, j.space = function() {
            var I = this.content();
            this.position === 0 || this.prevToken[h.FIELDS.TYPE] === m.comma || this.prevToken[h.FIELDS.TYPE] === m.openParenthesis || this.current.nodes.every(function(G) {
                return G.type === "comment";
            }) ? (this.spaces = this.optionalSpace(I), this.position++) : this.position === this.tokens.length - 1 || this.nextToken[h.FIELDS.TYPE] === m.comma || this.nextToken[h.FIELDS.TYPE] === m.closeParenthesis ? (this.current.last.spaces.after = this.optionalSpace(I), this.position++) : this.combinator();
        }, j.string = function() {
            var I = this.currToken;
            this.newNode(new a.default({
                value: this.content(),
                source: g(I),
                sourceIndex: I[h.FIELDS.START_POS]
            })), this.position++;
        }, j.universal = function(I) {
            var G = this.nextToken;
            if (G && this.content(G) === "|") return this.position++, this.namespace();
            var re = this.currToken;
            this.newNode(new u.default({
                value: this.content(),
                source: g(re),
                sourceIndex: re[h.FIELDS.START_POS]
            }), I), this.position++;
        }, j.splitWord = function(I, G) {
            for(var re = this, w = this.nextToken, L = this.content(); w && ~[
                m.dollar,
                m.caret,
                m.equals,
                m.word
            ].indexOf(w[h.FIELDS.TYPE]);){
                this.position++;
                var B = this.content();
                if (L += B, B.lastIndexOf("\\") === B.length - 1) {
                    var H = this.nextToken;
                    H && H[h.FIELDS.TYPE] === m.space && (L += this.requiredSpace(this.content(H)), this.position++);
                }
                w = this.nextToken;
            }
            var Y = R(L, ".").filter(function(le) {
                var ye = L[le - 1] === "\\", Oe = /^\d+\.\d+%$/.test(L);
                return !ye && !Oe;
            }), J = R(L, "#").filter(function(le) {
                return L[le - 1] !== "\\";
            }), ee = R(L, "#{");
            ee.length && (J = J.filter(function(le) {
                return !~ee.indexOf(le);
            }));
            var Q = (0, x.default)(F([
                0
            ].concat(Y, J)));
            Q.forEach(function(le, ye) {
                var Oe = Q[ye + 1] || L.length, Ae = L.slice(le, Oe);
                if (ye === 0 && G) return G.call(re, Ae, Q.length);
                var oe, Ne = re.currToken, q = Ne[h.FIELDS.START_POS] + Q[ye], U = d(Ne[1], Ne[2] + le, Ne[3], Ne[2] + (Oe - 1));
                if (~Y.indexOf(le)) {
                    var Z = {
                        value: Ae.slice(1),
                        source: U,
                        sourceIndex: q
                    };
                    oe = new n.default(y(Z, "value"));
                } else if (~J.indexOf(le)) {
                    var K = {
                        value: Ae.slice(1),
                        source: U,
                        sourceIndex: q
                    };
                    oe = new i.default(y(K, "value"));
                } else {
                    var X = {
                        value: Ae,
                        source: U,
                        sourceIndex: q
                    };
                    y(X, "value"), oe = new c.default(X);
                }
                re.newNode(oe, I), I = null;
            }), this.position++;
        }, j.word = function(I) {
            var G = this.nextToken;
            return G && this.content(G) === "|" ? (this.position++, this.namespace()) : this.splitWord(I);
        }, j.loop = function() {
            for(; this.position < this.tokens.length;)this.parse(!0);
            return this.current._inferEndPosition(), this.root;
        }, j.parse = function(I) {
            switch(this.currToken[h.FIELDS.TYPE]){
                case m.space:
                    this.space();
                    break;
                case m.comment:
                    this.comment();
                    break;
                case m.openParenthesis:
                    this.parentheses();
                    break;
                case m.closeParenthesis:
                    I && this.missingParenthesis();
                    break;
                case m.openSquare:
                    this.attribute();
                    break;
                case m.dollar:
                case m.caret:
                case m.equals:
                case m.word:
                    this.word();
                    break;
                case m.colon:
                    this.pseudo();
                    break;
                case m.comma:
                    this.comma();
                    break;
                case m.asterisk:
                    this.universal();
                    break;
                case m.ampersand:
                    this.nesting();
                    break;
                case m.slash:
                case m.combinator:
                    this.combinator();
                    break;
                case m.str:
                    this.string();
                    break;
                case m.closeSquare:
                    this.missingSquareBracket();
                case m.semicolon:
                    this.missingBackslash();
                default:
                    this.unexpected();
            }
        }, j.expected = function(I, G, re) {
            if (Array.isArray(I)) {
                var w = I.pop();
                I = I.join(", ") + " or " + w;
            }
            var L = /^[aeiou]/.test(I[0]) ? "an" : "a";
            return re ? this.error("Expected " + L + " " + I + ', found "' + re + '" instead.', {
                index: G
            }) : this.error("Expected " + L + " " + I + ".", {
                index: G
            });
        }, j.requiredSpace = function(I) {
            return this.options.lossy ? " " : I;
        }, j.optionalSpace = function(I) {
            return this.options.lossy ? "" : I;
        }, j.lossySpace = function(I, G) {
            return this.options.lossy ? G ? " " : "" : I;
        }, j.parseParenthesisToken = function(I) {
            var G = this.content(I);
            return I[h.FIELDS.TYPE] === m.space ? this.requiredSpace(G) : G;
        }, j.newNode = function(I, G) {
            return G && (/^ +$/.test(G) && (this.options.lossy || (this.spaces = (this.spaces || "") + G), G = !0), I.namespace = G, y(I, "namespace")), this.spaces && (I.spaces.before = this.spaces, this.spaces = ""), this.current.append(I);
        }, j.content = function(I) {
            return I === void 0 && (I = this.currToken), this.css.slice(I[h.FIELDS.START_POS], I[h.FIELDS.END_POS]);
        }, j.locateNextMeaningfulToken = function(I) {
            I === void 0 && (I = this.position + 1);
            for(var G = I; G < this.tokens.length;)if (N[this.tokens[G][h.FIELDS.TYPE]]) {
                G++;
                continue;
            } else return G;
            return -1;
        }, b(z, [
            {
                key: "currToken",
                get: function() {
                    return this.tokens[this.position];
                }
            },
            {
                key: "nextToken",
                get: function() {
                    return this.tokens[this.position + 1];
                }
            },
            {
                key: "prevToken",
                get: function() {
                    return this.tokens[this.position - 1];
                }
            }
        ]), z;
    }();
    e.default = $, s.exports = e.default;
})(Xr, Xr.exports);
var Bu = Xr.exports;
(function(s, e) {
    e.__esModule = !0, e.default = void 0;
    var t = r(Bu);
    function r(l) {
        return l && l.__esModule ? l : {
            default: l
        };
    }
    var n = /* @__PURE__ */ function() {
        function l(c, a) {
            this.func = c || function() {}, this.funcRes = null, this.options = a;
        }
        var i = l.prototype;
        return i._shouldUpdateSelector = function(a, o) {
            o === void 0 && (o = {});
            var f = Object.assign({}, this.options, o);
            return f.updateSelector === !1 ? !1 : typeof a != "string";
        }, i._isLossy = function(a) {
            a === void 0 && (a = {});
            var o = Object.assign({}, this.options, a);
            return o.lossless === !1;
        }, i._root = function(a, o) {
            o === void 0 && (o = {});
            var f = new t.default(a, this._parseOptions(o));
            return f.root;
        }, i._parseOptions = function(a) {
            return {
                lossy: this._isLossy(a)
            };
        }, i._run = function(a, o) {
            var f = this;
            return o === void 0 && (o = {}), new Promise(function(u, p) {
                try {
                    var _ = f._root(a, o);
                    Promise.resolve(f.func(_)).then(function(x) {
                        var h = void 0;
                        return f._shouldUpdateSelector(a, o) && (h = _.toString(), a.selector = h), {
                            transform: x,
                            root: _,
                            string: h
                        };
                    }).then(u, p);
                } catch (x) {
                    p(x);
                    return;
                }
            });
        }, i._runSync = function(a, o) {
            o === void 0 && (o = {});
            var f = this._root(a, o), u = this.func(f);
            if (u && typeof u.then == "function") throw new Error("Selector processor returned a promise to a synchronous call.");
            var p = void 0;
            return o.updateSelector && typeof a != "string" && (p = f.toString(), a.selector = p), {
                transform: u,
                root: f,
                string: p
            };
        }, i.ast = function(a, o) {
            return this._run(a, o).then(function(f) {
                return f.root;
            });
        }, i.astSync = function(a, o) {
            return this._runSync(a, o).root;
        }, i.transform = function(a, o) {
            return this._run(a, o).then(function(f) {
                return f.transform;
            });
        }, i.transformSync = function(a, o) {
            return this._runSync(a, o).transform;
        }, i.process = function(a, o) {
            return this._run(a, o).then(function(f) {
                return f.string || f.root.toString();
            });
        }, i.processSync = function(a, o) {
            var f = this._runSync(a, o);
            return f.string || f.root.toString();
        }, l;
    }();
    e.default = n, s.exports = e.default;
})(Kr, Kr.exports);
var qu = Kr.exports, Wa = {}, Me = {};
Me.__esModule = !0;
Me.universal = Me.tag = Me.string = Me.selector = Me.root = Me.pseudo = Me.nesting = Me.id = Me.comment = Me.combinator = Me.className = Me.attribute = void 0;
var Gu = Ge(Fn), Yu = Ge(Ia), Hu = Ge(za), Qu = Ge(Ra), Ju = Ge($a), Ku = Ge(Ua), Xu = Ge(La), Zu = Ge(Ta), ef = Ge(Ma), tf = Ge(Na), rf = Ge(Da), nf = Ge(Fa);
function Ge(s) {
    return s && s.__esModule ? s : {
        default: s
    };
}
var af = function(e) {
    return new Gu.default(e);
};
Me.attribute = af;
var sf = function(e) {
    return new Yu.default(e);
};
Me.className = sf;
var of = function(e) {
    return new Hu.default(e);
};
Me.combinator = of;
var lf = function(e) {
    return new Qu.default(e);
};
Me.comment = lf;
var uf = function(e) {
    return new Ju.default(e);
};
Me.id = uf;
var ff = function(e) {
    return new Ku.default(e);
};
Me.nesting = ff;
var cf = function(e) {
    return new Xu.default(e);
};
Me.pseudo = cf;
var df = function(e) {
    return new Zu.default(e);
};
Me.root = df;
var pf = function(e) {
    return new ef.default(e);
};
Me.selector = pf;
var hf = function(e) {
    return new tf.default(e);
};
Me.string = hf;
var mf = function(e) {
    return new rf.default(e);
};
Me.tag = mf;
var gf = function(e) {
    return new nf.default(e);
};
Me.universal = gf;
var ke = {};
ke.__esModule = !0;
ke.isComment = ke.isCombinator = ke.isClassName = ke.isAttribute = void 0;
ke.isContainer = Ef;
ke.isIdentifier = void 0;
ke.isNamespace = Pf;
ke.isNesting = void 0;
ke.isNode = zn;
ke.isPseudo = void 0;
ke.isPseudoClass = Cf;
ke.isPseudoElement = Ga;
ke.isUniversal = ke.isTag = ke.isString = ke.isSelector = ke.isRoot = void 0;
var $e = be, je, vf = (je = {}, je[$e.ATTRIBUTE] = !0, je[$e.CLASS] = !0, je[$e.COMBINATOR] = !0, je[$e.COMMENT] = !0, je[$e.ID] = !0, je[$e.NESTING] = !0, je[$e.PSEUDO] = !0, je[$e.ROOT] = !0, je[$e.SELECTOR] = !0, je[$e.STRING] = !0, je[$e.TAG] = !0, je[$e.UNIVERSAL] = !0, je);
function zn(s) {
    return typeof s == "object" && vf[s.type];
}
function Ye(s, e) {
    return zn(e) && e.type === s;
}
var Ba = Ye.bind(null, $e.ATTRIBUTE);
ke.isAttribute = Ba;
var yf = Ye.bind(null, $e.CLASS);
ke.isClassName = yf;
var wf = Ye.bind(null, $e.COMBINATOR);
ke.isCombinator = wf;
var bf = Ye.bind(null, $e.COMMENT);
ke.isComment = bf;
var xf = Ye.bind(null, $e.ID);
ke.isIdentifier = xf;
var _f = Ye.bind(null, $e.NESTING);
ke.isNesting = _f;
var Un = Ye.bind(null, $e.PSEUDO);
ke.isPseudo = Un;
var Sf = Ye.bind(null, $e.ROOT);
ke.isRoot = Sf;
var Of = Ye.bind(null, $e.SELECTOR);
ke.isSelector = Of;
var kf = Ye.bind(null, $e.STRING);
ke.isString = kf;
var qa = Ye.bind(null, $e.TAG);
ke.isTag = qa;
var Af = Ye.bind(null, $e.UNIVERSAL);
ke.isUniversal = Af;
function Ga(s) {
    return Un(s) && s.value && (s.value.startsWith("::") || s.value.toLowerCase() === ":before" || s.value.toLowerCase() === ":after" || s.value.toLowerCase() === ":first-letter" || s.value.toLowerCase() === ":first-line");
}
function Cf(s) {
    return Un(s) && !Ga(s);
}
function Ef(s) {
    return !!(zn(s) && s.walk);
}
function Pf(s) {
    return Ba(s) || qa(s);
}
(function(s) {
    s.__esModule = !0;
    var e = be;
    Object.keys(e).forEach(function(n) {
        n === "default" || n === "__esModule" || n in s && s[n] === e[n] || (s[n] = e[n]);
    });
    var t = Me;
    Object.keys(t).forEach(function(n) {
        n === "default" || n === "__esModule" || n in s && s[n] === t[n] || (s[n] = t[n]);
    });
    var r = ke;
    Object.keys(r).forEach(function(n) {
        n === "default" || n === "__esModule" || n in s && s[n] === r[n] || (s[n] = r[n]);
    });
})(Wa);
(function(s, e) {
    e.__esModule = !0, e.default = void 0;
    var t = i(qu), r = l(Wa);
    function n(o) {
        if (typeof WeakMap != "function") return null;
        var f = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
        return (n = function(_) {
            return _ ? u : f;
        })(o);
    }
    function l(o, f) {
        if (o && o.__esModule) return o;
        if (o === null || typeof o != "object" && typeof o != "function") return {
            default: o
        };
        var u = n(f);
        if (u && u.has(o)) return u.get(o);
        var p = {}, _ = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for(var x in o)if (x !== "default" && Object.prototype.hasOwnProperty.call(o, x)) {
            var h = _ ? Object.getOwnPropertyDescriptor(o, x) : null;
            h && (h.get || h.set) ? Object.defineProperty(p, x, h) : p[x] = o[x];
        }
        return p.default = o, u && u.set(o, p), p;
    }
    function i(o) {
        return o && o.__esModule ? o : {
            default: o
        };
    }
    var c = function(f) {
        return new t.default(f);
    };
    Object.assign(c, r), delete c.__esModule;
    var a = c;
    e.default = a, s.exports = e.default;
})(Jr, Jr.exports);
var Ke = Jr.exports;
const Qt = /* @__PURE__ */ Qe(Ke);
var Er = {}, jn = {}, Vn = {
    exports: {}
};
const { Rule: Ya, AtRule: Tf } = qe;
let Ha = Ke;
function wn(s, e) {
    let t;
    try {
        Ha((r)=>{
            t = r;
        }).processSync(s);
    } catch (r) {
        throw s.includes(":") ? e ? e.error("Missed semicolon") : r : e ? e.error(r.message) : r;
    }
    return t.at(0);
}
function Qa(s, e) {
    let t = !1;
    return s.each((r)=>{
        if (r.type === "nesting") {
            let n = e.clone({});
            r.value !== "&" ? r.replaceWith(wn(r.value.replace("&", n.toString()))) : r.replaceWith(n), t = !0;
        } else "nodes" in r && r.nodes && Qa(r, e) && (t = !0);
    }), t;
}
function Ja(s, e) {
    let t = [];
    return s.selectors.forEach((r)=>{
        let n = wn(r, s);
        e.selectors.forEach((l)=>{
            if (!l) return;
            let i = wn(l, e);
            Qa(i, n) || (i.prepend(Ha.combinator({
                value: " "
            })), i.prepend(n.clone({}))), t.push(i.toString());
        });
    }), t;
}
function Vt(s, e) {
    let t = s.prev();
    for(e.after(s); t && t.type === "comment";){
        let r = t.prev();
        e.after(t), t = r;
    }
    return s;
}
function Mf(s) {
    return function e(t, r, n, l = n) {
        let i = [];
        if (r.each((c)=>{
            c.type === "rule" && n ? l && (c.selectors = Ja(t, c)) : c.type === "atrule" && c.nodes ? s[c.name] ? e(t, c, l) : r[Wn] !== !1 && i.push(c) : i.push(c);
        }), n && i.length) {
            let c = t.clone({
                nodes: []
            });
            for (let a of i)c.append(a);
            r.prepend(c);
        }
    };
}
function Pr(s, e, t) {
    let r = new Ya({
        selector: s,
        nodes: []
    });
    return r.append(e), t.after(r), r;
}
function Oi(s, e) {
    let t = {};
    for (let r of s)t[r] = !0;
    if (e) for (let r of e)t[r.replace(/^@/, "")] = !0;
    return t;
}
function If(s) {
    s = s.trim();
    let e = s.match(/^\((.*)\)$/);
    if (!e) return {
        type: "basic",
        selector: s
    };
    let t = e[1].match(/^(with(?:out)?):(.+)$/);
    if (t) {
        let r = t[1] === "with", n = Object.fromEntries(t[2].trim().split(/\s+/).map((i)=>[
                i,
                !0
            ]));
        if (r && n.all) return {
            type: "noop"
        };
        let l = (i)=>!!n[i];
        return n.all ? l = ()=>!0 : r && (l = (i)=>i === "all" ? !1 : !n[i]), {
            type: "withrules",
            escapes: l
        };
    }
    return {
        type: "unknown"
    };
}
function Rf(s) {
    let e = [], t = s.parent;
    for(; t && t instanceof Tf;)e.push(t), t = t.parent;
    return e;
}
function $f(s) {
    let e = s[Ka];
    if (!e) s.after(s.nodes);
    else {
        let t = s.nodes, r, n = -1, l, i, c, a = Rf(s);
        if (a.forEach((o, f)=>{
            if (e(o.name)) r = o, n = f, i = c;
            else {
                let u = c;
                c = o.clone({
                    nodes: []
                }), u && c.append(u), l = l || c;
            }
        }), r ? i ? (l.append(t), r.after(i)) : r.after(t) : s.after(t), s.next() && r) {
            let o;
            a.slice(0, n + 1).forEach((f, u, p)=>{
                let _ = o;
                o = f.clone({
                    nodes: []
                }), _ && o.append(_);
                let x = [], m = (p[u - 1] || s).next();
                for(; m;)x.push(m), m = m.next();
                o.append(x);
            }), o && (i || t[t.length - 1]).after(o);
        }
    }
    s.remove();
}
const Wn = Symbol("rootRuleMergeSel"), Ka = Symbol("rootRuleEscapes");
function Df(s) {
    let { params: e } = s, { type: t, selector: r, escapes: n } = If(e);
    if (t === "unknown") throw s.error(`Unknown @${s.name} parameter ${JSON.stringify(e)}`);
    if (t === "basic" && r) {
        let l = new Ya({
            selector: r,
            nodes: s.nodes
        });
        s.removeAll(), s.append(l);
    }
    s[Ka] = n, s[Wn] = n ? !n("all") : t === "noop";
}
const Tr = Symbol("hasRootRule");
Vn.exports = (s = {})=>{
    let e = Oi([
        "media",
        "supports",
        "layer",
        "container"
    ], s.bubble), t = Mf(e), r = Oi([
        "document",
        "font-face",
        "keyframes",
        "-webkit-keyframes",
        "-moz-keyframes"
    ], s.unwrap), n = (s.rootRuleName || "at-root").replace(/^@/, ""), l = s.preserveEmpty;
    return {
        postcssPlugin: "postcss-nested",
        Once (i) {
            i.walkAtRules(n, (c)=>{
                Df(c), i[Tr] = !0;
            });
        },
        Rule (i) {
            let c = !1, a = i, o = !1, f = [];
            i.each((u)=>{
                u.type === "rule" ? (f.length && (a = Pr(i.selector, f, a), f = []), o = !0, c = !0, u.selectors = Ja(i, u), a = Vt(u, a)) : u.type === "atrule" ? (f.length && (a = Pr(i.selector, f, a), f = []), u.name === n ? (c = !0, t(i, u, !0, u[Wn]), a = Vt(u, a)) : e[u.name] ? (o = !0, c = !0, t(i, u, !0), a = Vt(u, a)) : r[u.name] ? (o = !0, c = !0, t(i, u, !1), a = Vt(u, a)) : o && f.push(u)) : u.type === "decl" && o && f.push(u);
            }), f.length && (a = Pr(i.selector, f, a)), c && l !== !0 && (i.raws.semicolon = !0, i.nodes.length === 0 && i.remove());
        },
        RootExit (i) {
            i[Tr] && (i.walkAtRules(n, $f), i[Tr] = !1);
        }
    };
};
Vn.exports.postcss = !0;
var Nf = Vn.exports, ki = /-(\w|$)/g, Ai = function(e, t) {
    return t.toUpperCase();
}, Lf = function(e) {
    return e = e.toLowerCase(), e === "float" ? "cssFloat" : e.charCodeAt(0) === 45 && e.charCodeAt(1) === 109 && e.charCodeAt(2) === 115 && e.charCodeAt(3) === 45 ? e.substr(1).replace(ki, Ai) : e.replace(ki, Ai);
}, Ff = Lf;
let zf = Ff, Uf = {
    boxFlex: !0,
    boxFlexGroup: !0,
    columnCount: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    strokeDashoffset: !0,
    strokeOpacity: !0,
    strokeWidth: !0
};
function Mr(s) {
    return typeof s.nodes > "u" ? !0 : Bn(s);
}
function Bn(s) {
    let e, t = {};
    return s.each((r)=>{
        if (r.type === "atrule") e = "@" + r.name, r.params && (e += " " + r.params), typeof t[e] > "u" ? t[e] = Mr(r) : Array.isArray(t[e]) ? t[e].push(Mr(r)) : t[e] = [
            t[e],
            Mr(r)
        ];
        else if (r.type === "rule") {
            let n = Bn(r);
            if (t[r.selector]) for(let l in n)t[r.selector][l] = n[l];
            else t[r.selector] = n;
        } else if (r.type === "decl") {
            r.prop[0] === "-" && r.prop[1] === "-" || r.parent && r.parent.selector === ":export" ? e = r.prop : e = zf(r.prop);
            let n = r.value;
            !isNaN(r.value) && Uf[e] && (n = parseFloat(r.value)), r.important && (n += " !important"), typeof t[e] > "u" ? t[e] = n : Array.isArray(t[e]) ? t[e].push(n) : t[e] = [
                t[e],
                n
            ];
        }
    }), t;
}
var Xa = Bn;
let xt = qe, Ci = /\s*!important\s*$/i, jf = {
    "box-flex": !0,
    "box-flex-group": !0,
    "column-count": !0,
    flex: !0,
    "flex-grow": !0,
    "flex-positive": !0,
    "flex-shrink": !0,
    "flex-negative": !0,
    "font-weight": !0,
    "line-clamp": !0,
    "line-height": !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    "tab-size": !0,
    widows: !0,
    "z-index": !0,
    zoom: !0,
    "fill-opacity": !0,
    "stroke-dashoffset": !0,
    "stroke-opacity": !0,
    "stroke-width": !0
};
function Vf(s) {
    return s.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase();
}
function Ei(s, e, t) {
    t === !1 || t === null || (e.startsWith("--") || (e = Vf(e)), typeof t == "number" && (t === 0 || jf[e] ? t = t.toString() : t += "px"), e === "css-float" && (e = "float"), Ci.test(t) ? (t = t.replace(Ci, ""), s.push(xt.decl({
        prop: e,
        value: t,
        important: !0
    }))) : s.push(xt.decl({
        prop: e,
        value: t
    })));
}
function Pi(s, e, t) {
    let r = xt.atRule({
        name: e[1],
        params: e[3] || ""
    });
    typeof t == "object" && (r.nodes = [], qn(t, r)), s.push(r);
}
function qn(s, e) {
    let t, r, n;
    for(t in s)if (r = s[t], !(r === null || typeof r > "u")) if (t[0] === "@") {
        let l = t.match(/@(\S+)(\s+([\W\w]*)\s*)?/);
        if (Array.isArray(r)) for (let i of r)Pi(e, l, i);
        else Pi(e, l, r);
    } else if (Array.isArray(r)) for (let l of r)Ei(e, t, l);
    else typeof r == "object" ? (n = xt.rule({
        selector: t
    }), qn(r, n), e.push(n)) : Ei(e, t, r);
}
var Gn = function(s) {
    let e = xt.root();
    return qn(s, e), e;
};
let Wf = Xa;
var Za = function(e) {
    return console && console.warn && e.warnings().forEach((t)=>{
        let r = t.plugin || "PostCSS";
        console.warn(r + ": " + t.text);
    }), Wf(e.root);
};
let Bf = qe, qf = Za, Gf = Gn;
var Yf = function(e) {
    let t = Bf(e);
    return async (r)=>{
        let n = await t.process(r, {
            parser: Gf,
            from: void 0
        });
        return qf(n);
    };
};
let Hf = qe, Qf = Za, Jf = Gn;
var Kf = function(s) {
    let e = Hf(s);
    return (t)=>{
        let r = e.process(t, {
            parser: Jf,
            from: void 0
        });
        return Qf(r);
    };
};
let Xf = Xa, Zf = Gn, ec = Yf, tc = Kf;
var rc = {
    objectify: Xf,
    parse: Zf,
    async: ec,
    sync: tc
};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return l;
        }
    });
    const e = /* @__PURE__ */ n(qe), t = /* @__PURE__ */ n(Nf), r = /* @__PURE__ */ n(rc);
    function n(i) {
        return i && i.__esModule ? i : {
            default: i
        };
    }
    function l(i) {
        return Array.isArray(i) ? i.flatMap((c)=>(0, e.default)([
                (0, t.default)({
                    bubble: [
                        "screen"
                    ]
                })
            ]).process(c, {
                parser: r.default
            }).root.nodes) : l([
            i
        ]);
    }
})(jn);
var lr = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, /**
    * @template {string | import('postcss-selector-parser').Root} T
    *
    * Prefix all classes in the selector with the given prefix
    *
    * It can take either a string or a selector AST and will return the same type
    *
    * @param {string} prefix
    * @param {T} selector
    * @param {boolean} prependNegative
    * @returns {T}
    */ "default", {
        enumerable: !0,
        get: function() {
            return r;
        }
    });
    const e = /* @__PURE__ */ t(Ke);
    function t(n) {
        return n && n.__esModule ? n : {
            default: n
        };
    }
    function r(n, l, i = !1) {
        if (n === "") return l;
        let c = typeof l == "string" ? (0, e.default)().astSync(l) : l;
        return c.walkClasses((a)=>{
            let o = a.value, f = i && o.startsWith("-");
            a.value = f ? `-${n}${o.slice(1)}` : `${n}${o}`;
        }), typeof l == "string" ? c.toString() : c;
    }
})(lr);
var Et = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    });
    function e(f, u) {
        for(var p in u)Object.defineProperty(f, p, {
            enumerable: !0,
            get: u[p]
        });
    }
    e(s, {
        env: function() {
            return t;
        },
        contextMap: function() {
            return r;
        },
        configContextMap: function() {
            return n;
        },
        contextSourcesMap: function() {
            return l;
        },
        sourceHashMap: function() {
            return i;
        },
        NOT_ON_DEMAND: function() {
            return c;
        },
        NONE: function() {
            return a;
        },
        resolveDebug: function() {
            return o;
        }
    });
    const t = typeof process < "u" ? {
        NODE_ENV: ("TURBOPACK compile-time value", "development"),
        DEBUG: o(process.env.DEBUG)
    } : {
        NODE_ENV: "production",
        DEBUG: !1
    }, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), c = new String("*"), a = Symbol("__NONE__");
    function o(f) {
        if (f === void 0) return !1;
        if (f === "true" || f === "1") return !0;
        if (f === "false" || f === "0") return !1;
        if (f === "*") return !0;
        let u = f.split(",").map((p)=>p.split(":")[0]);
        return u.includes("-tailwindcss") ? !1 : !!u.includes("tailwindcss");
    }
})(Et);
var Yn = {}, pt = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return n;
        }
    });
    const e = /* @__PURE__ */ r(Ke), t = /* @__PURE__ */ r(ar);
    function r(l) {
        return l && l.__esModule ? l : {
            default: l
        };
    }
    function n(l) {
        var i;
        let c = e.default.className();
        c.value = l;
        var a;
        return (0, t.default)((a = c == null || (i = c.raws) === null || i === void 0 ? void 0 : i.value) !== null && a !== void 0 ? a : c.value);
    }
})(pt);
var ur = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "movePseudos", {
        enumerable: !0,
        get: function() {
            return t;
        }
    });
    let e = {
        // Pseudo elements from the spec
        "::after": [
            "terminal",
            "jumpable"
        ],
        "::backdrop": [
            "terminal",
            "jumpable"
        ],
        "::before": [
            "terminal",
            "jumpable"
        ],
        "::cue": [
            "terminal"
        ],
        "::cue-region": [
            "terminal"
        ],
        "::first-letter": [
            "terminal",
            "jumpable"
        ],
        "::first-line": [
            "terminal",
            "jumpable"
        ],
        "::grammar-error": [
            "terminal"
        ],
        "::marker": [
            "terminal",
            "jumpable"
        ],
        "::part": [
            "terminal",
            "actionable"
        ],
        "::placeholder": [
            "terminal",
            "jumpable"
        ],
        "::selection": [
            "terminal",
            "jumpable"
        ],
        "::slotted": [
            "terminal"
        ],
        "::spelling-error": [
            "terminal"
        ],
        "::target-text": [
            "terminal"
        ],
        // Pseudo elements from the spec with special rules
        "::file-selector-button": [
            "terminal",
            "actionable"
        ],
        // Library-specific pseudo elements used by component libraries
        // These are Shadow DOM-like
        "::deep": [
            "actionable"
        ],
        "::v-deep": [
            "actionable"
        ],
        "::ng-deep": [
            "actionable"
        ],
        // Note: As a rule, double colons (::) should be used instead of a single colon
        // (:). This distinguishes pseudo-classes from pseudo-elements. However, since
        // this distinction was not present in older versions of the W3C spec, most
        // browsers support both syntaxes for the original pseudo-elements.
        ":after": [
            "terminal",
            "jumpable"
        ],
        ":before": [
            "terminal",
            "jumpable"
        ],
        ":first-letter": [
            "terminal",
            "jumpable"
        ],
        ":first-line": [
            "terminal",
            "jumpable"
        ],
        ":where": [],
        ":is": [],
        ":has": [],
        // The default value is used when the pseudo-element is not recognized
        // Because it's not recognized, we don't know if it's terminal or not
        // So we assume it can be moved AND can have user-action pseudo classes attached to it
        __default__: [
            "terminal",
            "actionable"
        ]
    };
    function t(a) {
        let [o] = r(a);
        return o.forEach(([f, u])=>f.removeChild(u)), a.nodes.push(...o.map(([, f])=>f)), a;
    }
    function r(a) {
        let o = [], f = null;
        for (let p of a.nodes)if (p.type === "combinator") o = o.filter(([, _])=>c(_).includes("jumpable")), f = null;
        else if (p.type === "pseudo") {
            l(p) ? (f = p, o.push([
                a,
                p,
                null
            ])) : f && i(p, f) ? o.push([
                a,
                p,
                f
            ]) : f = null;
            var u;
            for (let _ of (u = p.nodes) !== null && u !== void 0 ? u : []){
                let [x, h] = r(_);
                f = h || f, o.push(...x);
            }
        }
        return [
            o,
            f
        ];
    }
    function n(a) {
        return a.value.startsWith("::") || e[a.value] !== void 0;
    }
    function l(a) {
        return n(a) && c(a).includes("terminal");
    }
    function i(a, o) {
        return a.type !== "pseudo" || n(a) ? !1 : c(o).includes("actionable");
    }
    function c(a) {
        var o;
        return (o = e[a.value]) !== null && o !== void 0 ? o : e.__default__;
    }
})(ur);
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    });
    function e(m, C) {
        for(var S in C)Object.defineProperty(m, S, {
            enumerable: !0,
            get: C[S]
        });
    }
    e(s, {
        formatVariantSelector: function() {
            return f;
        },
        eliminateIrrelevantSelectors: function() {
            return _;
        },
        finalizeSelector: function() {
            return x;
        },
        handleMergePseudo: function() {
            return h;
        }
    });
    const t = /* @__PURE__ */ a(Ke), r = /* @__PURE__ */ a(Rn), n = /* @__PURE__ */ a(pt), l = /* @__PURE__ */ a(lr), i = ur, c = ot;
    function a(m) {
        return m && m.__esModule ? m : {
            default: m
        };
    }
    let o = ":merge";
    function f(m, { context: C, candidate: S }) {
        var k;
        let O = (k = C == null ? void 0 : C.tailwindConfig.prefix) !== null && k !== void 0 ? k : "", E = m.map((D)=>{
            let P = (0, t.default)().astSync(D.format);
            return {
                ...D,
                ast: D.respectPrefix ? (0, l.default)(O, P) : P
            };
        }), M = t.default.root({
            nodes: [
                t.default.selector({
                    nodes: [
                        t.default.className({
                            value: (0, n.default)(S)
                        })
                    ]
                })
            ]
        });
        for (let { ast: D } of E)[M, D] = h(M, D), D.walkNesting((P)=>P.replaceWith(...M.nodes[0].nodes)), M = D;
        return M;
    }
    function u(m) {
        let C = [];
        for(; m.prev() && m.prev().type !== "combinator";)m = m.prev();
        for(; m && m.type !== "combinator";)C.push(m), m = m.next();
        return C;
    }
    function p(m) {
        return m.sort((C, S)=>C.type === "tag" && S.type === "class" ? -1 : C.type === "class" && S.type === "tag" ? 1 : C.type === "class" && S.type === "pseudo" && S.value.startsWith("::") ? -1 : C.type === "pseudo" && C.value.startsWith("::") && S.type === "class" ? 1 : m.index(C) - m.index(S)), m;
    }
    function _(m, C) {
        let S = !1;
        m.walk((k)=>{
            if (k.type === "class" && k.value === C) return S = !0, !1;
        }), S || m.remove();
    }
    function x(m, C, { context: S, candidate: k, base: O }) {
        var E, M;
        let D = (M = S == null || (E = S.tailwindConfig) === null || E === void 0 ? void 0 : E.separator) !== null && M !== void 0 ? M : ":";
        O = O ?? (0, c.splitAtTopLevelOnly)(k, D).pop();
        let P = (0, t.default)().astSync(m);
        if (P.walkClasses((T)=>{
            T.raws && T.value.includes(O) && (T.raws.value = (0, n.default)((0, r.default)(T.raws.value)));
        }), P.each((T)=>_(T, O)), P.length === 0) return null;
        let b = Array.isArray(C) ? f(C, {
            context: S,
            candidate: k
        }) : C;
        if (b === null) return P.toString();
        let A = t.default.comment({
            value: "/*__simple__*/"
        }), N = t.default.comment({
            value: "/*__simple__*/"
        });
        return P.walkClasses((T)=>{
            if (T.value !== O) return;
            let V = T.parent, d = b.nodes[0].nodes;
            if (V.nodes.length === 1) {
                T.replaceWith(...d);
                return;
            }
            let g = u(T);
            V.insertBefore(g[0], A), V.insertAfter(g[g.length - 1], N);
            for (let y of d)V.insertBefore(g[0], y.clone());
            T.remove(), g = u(A);
            let v = V.index(A);
            V.nodes.splice(v, g.length, ...p(t.default.selector({
                nodes: g
            })).nodes), A.remove(), N.remove();
        }), P.walkPseudos((T)=>{
            T.value === o && T.replaceWith(T.nodes);
        }), P.each((T)=>(0, i.movePseudos)(T)), P.toString();
    }
    function h(m, C) {
        let S = [];
        return m.walkPseudos((k)=>{
            k.value === o && S.push({
                pseudo: k,
                value: k.nodes[0].toString()
            });
        }), C.walkPseudos((k)=>{
            if (k.value !== o) return;
            let O = k.nodes[0].toString(), E = S.find((b)=>b.value === O);
            if (!E) return;
            let M = [], D = k.next();
            for(; D && D.type !== "combinator";)M.push(D), D = D.next();
            let P = D;
            E.pseudo.parent.insertAfter(E.pseudo, t.default.selector({
                nodes: M.map((b)=>b.clone())
            })), k.remove(), M.forEach((b)=>b.remove()), P && P.type === "combinator" && P.remove();
        }), [
            m,
            C
        ];
    }
})(Yn);
var Hn = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    });
    function e(a, o) {
        for(var f in o)Object.defineProperty(a, f, {
            enumerable: !0,
            get: o[f]
        });
    }
    e(s, {
        asClass: function() {
            return l;
        },
        default: function() {
            return i;
        },
        formatClass: function() {
            return c;
        }
    });
    const t = /* @__PURE__ */ n(pt), r = /* @__PURE__ */ n(ar);
    function n(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }
    function l(a) {
        return (0, r.default)(`.${(0, t.default)(a)}`);
    }
    function i(a, o) {
        return l(c(a, o));
    }
    function c(a, o) {
        return o === "DEFAULT" ? a : o === "-" || o === "-DEFAULT" ? `-${a}` : o.startsWith("-") ? `-${a}${o}` : o.startsWith("/") ? `${a}${o}` : `${a}-${o}`;
    }
})(Hn);
var Ir = {}, Rr = {}, es = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return r;
        }
    });
    const e = /* @__PURE__ */ t(Ot);
    function t(n) {
        return n && n.__esModule ? n : {
            default: n
        };
    }
    function r(n, l = [
        [
            n,
            [
                n
            ]
        ]
    ], { filterDefault: i = !1, ...c } = {}) {
        let a = (0, e.default)(n);
        return function({ matchUtilities: o, theme: f }) {
            for (let p of l){
                let _ = Array.isArray(p[0]) ? p : [
                    p
                ];
                var u;
                o(_.reduce((x, [h, m])=>Object.assign(x, {
                        [h]: (C)=>m.reduce((S, k)=>Array.isArray(k) ? Object.assign(S, {
                                    [k[0]]: k[1]
                                }) : Object.assign(S, {
                                    [k]: a(C)
                                }), {})
                    }), {}), {
                    ...c,
                    values: i ? Object.fromEntries(Object.entries((u = f(n)) !== null && u !== void 0 ? u : {}).filter(([x])=>x !== "DEFAULT")) : f(n)
                });
            }
        };
    }
})(es);
var ts = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return u;
        }
    });
    const e = /* @__PURE__ */ new Set([
        "normal",
        "reverse",
        "alternate",
        "alternate-reverse"
    ]), t = /* @__PURE__ */ new Set([
        "running",
        "paused"
    ]), r = /* @__PURE__ */ new Set([
        "none",
        "forwards",
        "backwards",
        "both"
    ]), n = /* @__PURE__ */ new Set([
        "infinite"
    ]), l = /* @__PURE__ */ new Set([
        "linear",
        "ease",
        "ease-in",
        "ease-out",
        "ease-in-out",
        "step-start",
        "step-end"
    ]), i = [
        "cubic-bezier",
        "steps"
    ], c = /\,(?![^(]*\))/g, a = /\ +(?![^(]*\))/g, o = /^(-?[\d.]+m?s)$/, f = /^(\d+)$/;
    function u(p) {
        return p.split(c).map((x)=>{
            let h = x.trim(), m = {
                value: h
            }, C = h.split(a), S = /* @__PURE__ */ new Set();
            for (let k of C)!S.has("DIRECTIONS") && e.has(k) ? (m.direction = k, S.add("DIRECTIONS")) : !S.has("PLAY_STATES") && t.has(k) ? (m.playState = k, S.add("PLAY_STATES")) : !S.has("FILL_MODES") && r.has(k) ? (m.fillMode = k, S.add("FILL_MODES")) : !S.has("ITERATION_COUNTS") && (n.has(k) || f.test(k)) ? (m.iterationCount = k, S.add("ITERATION_COUNTS")) : !S.has("TIMING_FUNCTION") && l.has(k) || !S.has("TIMING_FUNCTION") && i.some((O)=>k.startsWith(`${O}(`)) ? (m.timingFunction = k, S.add("TIMING_FUNCTION")) : !S.has("DURATION") && o.test(k) ? (m.duration = k, S.add("DURATION")) : !S.has("DELAY") && o.test(k) ? (m.delay = k, S.add("DELAY")) : S.has("NAME") ? (m.unknown || (m.unknown = []), m.unknown.push(k)) : (m.name = k, S.add("NAME"));
            return m;
        });
    }
})(ts);
var rs = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return t;
        }
    });
    const e = (r)=>Object.assign({}, ...Object.entries(r ?? {}).flatMap(([n, l])=>typeof l == "object" ? Object.entries(e(l)).map(([i, c])=>({
                    [n + (i === "DEFAULT" ? "" : `-${i}`)]: c
                })) : [
                {
                    [`${n}`]: l
                }
            ])), t = e;
})(rs);
var Qn = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return e;
        }
    });
    function e(t) {
        return typeof t == "function" ? t({}) : t;
    }
})(Qn);
const nc = "tailwindcss", ic = "3.4.10", ac = "A utility-first CSS framework for rapidly building custom user interfaces.", sc = "MIT", oc = "lib/index.js", lc = "types/index.d.ts", uc = "https://github.com/tailwindlabs/tailwindcss.git", fc = "https://github.com/tailwindlabs/tailwindcss/issues", cc = "https://tailwindcss.com", dc = {
    tailwind: "lib/cli.js",
    tailwindcss: "lib/cli.js"
}, pc = {
    prebuild: "npm run generate && rimraf lib",
    build: "swc src --out-dir lib --copy-files",
    postbuild: "esbuild lib/cli-peer-dependencies.js --bundle --platform=node --outfile=peers/index.js --define:process.env.CSS_TRANSFORMER_WASM=false",
    "rebuild-fixtures": "npm run build && node -r @swc/register scripts/rebuildFixtures.js",
    style: "eslint .",
    pretest: "npm run generate",
    test: "jest",
    "test:integrations": "npm run test --prefix ./integrations",
    "install:integrations": "node scripts/install-integrations.js",
    "generate:plugin-list": "node -r @swc/register scripts/create-plugin-list.js",
    "generate:types": "node -r @swc/register scripts/generate-types.js",
    generate: "npm run generate:plugin-list && npm run generate:types",
    "release-channel": "node ./scripts/release-channel.js",
    "release-notes": "node ./scripts/release-notes.js",
    prepublishOnly: "npm install --force && npm run build"
}, hc = [
    "src/*",
    "cli/*",
    "lib/*",
    "peers/*",
    "scripts/*.js",
    "stubs/*",
    "nesting/*",
    "types/**/*",
    "*.d.ts",
    "*.css",
    "*.js"
], mc = {
    "@swc/cli": "^0.1.62",
    "@swc/core": "^1.3.55",
    "@swc/jest": "^0.2.26",
    "@swc/register": "^0.1.10",
    autoprefixer: "^10.4.14",
    browserslist: "^4.21.5",
    concurrently: "^8.0.1",
    cssnano: "^6.1.2",
    esbuild: "^0.20.2",
    eslint: "^8.39.0",
    "eslint-config-prettier": "^8.8.0",
    "eslint-plugin-prettier": "^4.2.1",
    jest: "^29.6.0",
    "jest-diff": "^29.6.0",
    lightningcss: "1.24.1",
    prettier: "^2.8.8",
    rimraf: "^5.0.0",
    "source-map-js": "^1.0.2",
    turbo: "^1.9.3"
}, gc = {
    "@alloc/quick-lru": "^5.2.0",
    arg: "^5.0.2",
    chokidar: "^3.5.3",
    didyoumean: "^1.2.2",
    dlv: "^1.1.3",
    "fast-glob": "^3.3.0",
    "glob-parent": "^6.0.2",
    "is-glob": "^4.0.3",
    jiti: "^1.21.0",
    lilconfig: "^2.1.0",
    micromatch: "^4.0.5",
    "normalize-path": "^3.0.0",
    "object-hash": "^3.0.0",
    picocolors: "^1.0.0",
    postcss: "^8.4.23",
    "postcss-import": "^15.1.0",
    "postcss-js": "^4.0.1",
    "postcss-load-config": "^4.0.1",
    "postcss-nested": "^6.0.1",
    "postcss-selector-parser": "^6.0.11",
    resolve: "^1.22.2",
    sucrase: "^3.32.0"
}, vc = [
    "> 1%",
    "not edge <= 18",
    "not ie 11",
    "not op_mini all"
], yc = {
    testTimeout: 3e4,
    setupFilesAfterEnv: [
        "<rootDir>/jest/customMatchers.js"
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/integrations/",
        "/standalone-cli/",
        "\\.test\\.skip\\.js$"
    ],
    transformIgnorePatterns: [
        "node_modules/(?!lightningcss)"
    ],
    transform: {
        "\\.js$": "@swc/jest",
        "\\.ts$": "@swc/jest"
    }
}, wc = {
    node: ">=14.0.0"
}, bc = {
    name: nc,
    version: ic,
    description: ac,
    license: sc,
    main: oc,
    types: lc,
    repository: uc,
    bugs: fc,
    homepage: cc,
    bin: dc,
    scripts: pc,
    files: hc,
    devDependencies: mc,
    dependencies: gc,
    browserslist: vc,
    jest: yc,
    engines: wc
};
var ns = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "removeAlphaVariables", {
        enumerable: !0,
        get: function() {
            return e;
        }
    });
    function e(t, r) {
        t.walkDecls((n)=>{
            if (r.includes(n.prop)) {
                n.remove();
                return;
            }
            for (let l of r)n.value.includes(`/ var(${l})`) && (n.value = n.value.replace(`/ var(${l})`, ""));
        });
    }
})(ns);
var Ti;
function xc() {
    return Ti || (Ti = 1, function(s) {
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        function e(d, g) {
            for(var v in g)Object.defineProperty(d, v, {
                enumerable: !0,
                get: g[v]
            });
        }
        e(s, {
            variantPlugins: function() {
                return b;
            },
            corePlugins: function() {
                return V;
            }
        });
        const t = /* @__PURE__ */ M(Le), r = /* @__PURE__ */ P(Le), n = /* @__PURE__ */ M(qe), l = /* @__PURE__ */ M(es), i = /* @__PURE__ */ M(nr), c = /* @__PURE__ */ M(pt), a = /* @__PURE__ */ M(ts), o = /* @__PURE__ */ M(rs), f = /* @__PURE__ */ P(kt), u = /* @__PURE__ */ M(Qn), p = /* @__PURE__ */ M(dt), _ = /* @__PURE__ */ M(Ot), x = bc, h = /* @__PURE__ */ M(et), m = rr, C = Mn, S = ns, k = it, O = Ct, E = Kn();
        function M(d) {
            return d && d.__esModule ? d : {
                default: d
            };
        }
        function D(d) {
            if (typeof WeakMap != "function") return null;
            var g = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap();
            return (D = function(y) {
                return y ? v : g;
            })(d);
        }
        function P(d, g) {
            if (d && d.__esModule) return d;
            if (d === null || typeof d != "object" && typeof d != "function") return {
                default: d
            };
            var v = D(g);
            if (v && v.has(d)) return v.get(d);
            var y = {}, R = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for(var F in d)if (F !== "default" && Object.prototype.hasOwnProperty.call(d, F)) {
                var $ = R ? Object.getOwnPropertyDescriptor(d, F) : null;
                $ && ($.get || $.set) ? Object.defineProperty(y, F, $) : y[F] = d[F];
            }
            return y.default = d, v && v.set(d, y), y;
        }
        let b = {
            childVariant: ({ addVariant: d })=>{
                d("*", "& > *");
            },
            pseudoElementVariants: ({ addVariant: d })=>{
                d("first-letter", "&::first-letter"), d("first-line", "&::first-line"), d("marker", [
                    ({ container: g })=>((0, S.removeAlphaVariables)(g, [
                            "--tw-text-opacity"
                        ]), "& *::marker"),
                    ({ container: g })=>((0, S.removeAlphaVariables)(g, [
                            "--tw-text-opacity"
                        ]), "&::marker")
                ]), d("selection", [
                    "& *::selection",
                    "&::selection"
                ]), d("file", "&::file-selector-button"), d("placeholder", "&::placeholder"), d("backdrop", "&::backdrop"), d("before", ({ container: g })=>(g.walkRules((v)=>{
                        let y = !1;
                        v.walkDecls("content", ()=>{
                            y = !0;
                        }), y || v.prepend(n.default.decl({
                            prop: "content",
                            value: "var(--tw-content)"
                        }));
                    }), "&::before")), d("after", ({ container: g })=>(g.walkRules((v)=>{
                        let y = !1;
                        v.walkDecls("content", ()=>{
                            y = !0;
                        }), y || v.prepend(n.default.decl({
                            prop: "content",
                            value: "var(--tw-content)"
                        }));
                    }), "&::after"));
            },
            pseudoClassVariants: ({ addVariant: d, matchVariant: g, config: v, prefix: y })=>{
                let R = [
                    // Positional
                    [
                        "first",
                        "&:first-child"
                    ],
                    [
                        "last",
                        "&:last-child"
                    ],
                    [
                        "only",
                        "&:only-child"
                    ],
                    [
                        "odd",
                        "&:nth-child(odd)"
                    ],
                    [
                        "even",
                        "&:nth-child(even)"
                    ],
                    "first-of-type",
                    "last-of-type",
                    "only-of-type",
                    // State
                    [
                        "visited",
                        ({ container: $ })=>((0, S.removeAlphaVariables)($, [
                                "--tw-text-opacity",
                                "--tw-border-opacity",
                                "--tw-bg-opacity"
                            ]), "&:visited")
                    ],
                    "target",
                    [
                        "open",
                        "&[open]"
                    ],
                    // Forms
                    "default",
                    "checked",
                    "indeterminate",
                    "placeholder-shown",
                    "autofill",
                    "optional",
                    "required",
                    "valid",
                    "invalid",
                    "in-range",
                    "out-of-range",
                    "read-only",
                    // Content
                    "empty",
                    // Interactive
                    "focus-within",
                    [
                        "hover",
                        (0, k.flagEnabled)(v(), "hoverOnlyWhenSupported") ? "@media (hover: hover) and (pointer: fine) { &:hover }" : "&:hover"
                    ],
                    "focus",
                    "focus-visible",
                    "active",
                    "enabled",
                    "disabled"
                ].map(($)=>Array.isArray($) ? $ : [
                        $,
                        `&:${$}`
                    ]);
                for (let [$, z] of R)d($, (j)=>typeof z == "function" ? z(j) : z);
                let F = {
                    group: ($, { modifier: z })=>z ? [
                            `:merge(${y(".group")}\\/${(0, c.default)(z)})`,
                            " &"
                        ] : [
                            `:merge(${y(".group")})`,
                            " &"
                        ],
                    peer: ($, { modifier: z })=>z ? [
                            `:merge(${y(".peer")}\\/${(0, c.default)(z)})`,
                            " ~ &"
                        ] : [
                            `:merge(${y(".peer")})`,
                            " ~ &"
                        ]
                };
                for (let [$, z] of Object.entries(F))g($, (j = "", W)=>{
                    let I = (0, O.normalize)(typeof j == "function" ? j(W) : j);
                    I.includes("&") || (I = "&" + I);
                    let [G, re] = z("", W), w = null, L = null, B = 0;
                    for(let H = 0; H < I.length; ++H){
                        let Y = I[H];
                        Y === "&" ? w = H : Y === "'" || Y === '"' ? B += 1 : w !== null && Y === " " && !B && (L = H);
                    }
                    return w !== null && L === null && (L = I.length), I.slice(0, w) + G + I.slice(w + 1, L) + re + I.slice(L);
                }, {
                    values: Object.fromEntries(R),
                    [E.INTERNAL_FEATURES]: {
                        respectPrefix: !1
                    }
                });
            },
            directionVariants: ({ addVariant: d })=>{
                d("ltr", '&:where([dir="ltr"], [dir="ltr"] *)'), d("rtl", '&:where([dir="rtl"], [dir="rtl"] *)');
            },
            reducedMotionVariants: ({ addVariant: d })=>{
                d("motion-safe", "@media (prefers-reduced-motion: no-preference)"), d("motion-reduce", "@media (prefers-reduced-motion: reduce)");
            },
            darkVariants: ({ config: d, addVariant: g })=>{
                let [v, y = ".dark"] = [].concat(d("darkMode", "media"));
                if (v === !1 && (v = "media", h.default.warn("darkmode-false", [
                    "The `darkMode` option in your Tailwind CSS configuration is set to `false`, which now behaves the same as `media`.",
                    "Change `darkMode` to `media` or remove it entirely.",
                    "https://tailwindcss.com/docs/upgrade-guide#remove-dark-mode-configuration"
                ])), v === "variant") {
                    let R;
                    if (Array.isArray(y) || typeof y == "function" ? R = y : typeof y == "string" && (R = [
                        y
                    ]), Array.isArray(R)) for (let F of R)F === ".dark" ? (v = !1, h.default.warn("darkmode-variant-without-selector", [
                        "When using `variant` for `darkMode`, you must provide a selector.",
                        'Example: `darkMode: ["variant", ".your-selector &"]`'
                    ])) : F.includes("&") || (v = !1, h.default.warn("darkmode-variant-without-ampersand", [
                        "When using `variant` for `darkMode`, your selector must contain `&`.",
                        'Example `darkMode: ["variant", ".your-selector &"]`'
                    ]));
                    y = R;
                }
                v === "selector" ? g("dark", `&:where(${y}, ${y} *)`) : v === "media" ? g("dark", "@media (prefers-color-scheme: dark)") : v === "variant" ? g("dark", y) : v === "class" && g("dark", `&:is(${y} *)`);
            },
            printVariant: ({ addVariant: d })=>{
                d("print", "@media print");
            },
            screenVariants: ({ theme: d, addVariant: g, matchVariant: v })=>{
                var y;
                let R = (y = d("screens")) !== null && y !== void 0 ? y : {}, F = Object.values(R).every((J)=>typeof J == "string"), $ = (0, m.normalizeScreens)(d("screens")), z = /* @__PURE__ */ new Set([]);
                function j(J) {
                    var ee, Q;
                    return (Q = (ee = J.match(/(\D+)$/)) === null || ee === void 0 ? void 0 : ee[1]) !== null && Q !== void 0 ? Q : "(none)";
                }
                function W(J) {
                    J !== void 0 && z.add(j(J));
                }
                function I(J) {
                    return W(J), z.size === 1;
                }
                for (const J of $)for (const ee of J.values)W(ee.min), W(ee.max);
                let G = z.size <= 1;
                function re(J) {
                    return Object.fromEntries($.filter((ee)=>(0, m.isScreenSortable)(ee).result).map((ee)=>{
                        let { min: Q, max: le } = ee.values[0];
                        if (le !== void 0) return ee;
                        if (Q !== void 0) return {
                            ...ee,
                            not: !ee.not
                        };
                    }).map((ee)=>[
                            ee.name,
                            ee
                        ]));
                }
                function w(J) {
                    return (ee, Q)=>(0, m.compareScreens)(J, ee.value, Q.value);
                }
                let L = w("max"), B = w("min");
                function H(J) {
                    return (ee)=>{
                        if (F) if (G) {
                            if (typeof ee == "string" && !I(ee)) return h.default.warn("minmax-have-mixed-units", [
                                "The `min-*` and `max-*` variants are not supported with a `screens` configuration containing mixed units."
                            ]), [];
                        } else return h.default.warn("mixed-screen-units", [
                            "The `min-*` and `max-*` variants are not supported with a `screens` configuration containing mixed units."
                        ]), [];
                        else return h.default.warn("complex-screen-config", [
                            "The `min-*` and `max-*` variants are not supported with a `screens` configuration containing objects."
                        ]), [];
                        return [
                            `@media ${(0, i.default)((0, m.toScreen)(ee, J))}`
                        ];
                    };
                }
                v("max", H("max"), {
                    sort: L,
                    values: F ? re() : {}
                });
                let Y = "min-screens";
                for (let J of $)g(J.name, `@media ${(0, i.default)(J)}`, {
                    id: Y,
                    sort: F && G ? B : void 0,
                    value: J
                });
                v("min", H("min"), {
                    id: Y,
                    sort: B
                });
            },
            supportsVariants: ({ matchVariant: d, theme: g })=>{
                var v;
                d("supports", (y = "")=>{
                    let R = (0, O.normalize)(y), F = /^\w*\s*\(/.test(R);
                    return R = F ? R.replace(/\b(and|or|not)\b/g, " $1 ") : R, F ? `@supports ${R}` : (R.includes(":") || (R = `${R}: var(--tw)`), R.startsWith("(") && R.endsWith(")") || (R = `(${R})`), `@supports ${R}`);
                }, {
                    values: (v = g("supports")) !== null && v !== void 0 ? v : {}
                });
            },
            hasVariants: ({ matchVariant: d, prefix: g })=>{
                d("has", (v)=>`&:has(${(0, O.normalize)(v)})`, {
                    values: {},
                    [E.INTERNAL_FEATURES]: {
                        respectPrefix: !1
                    }
                }), d("group-has", (v, { modifier: y })=>y ? `:merge(${g(".group")}\\/${y}):has(${(0, O.normalize)(v)}) &` : `:merge(${g(".group")}):has(${(0, O.normalize)(v)}) &`, {
                    values: {},
                    [E.INTERNAL_FEATURES]: {
                        respectPrefix: !1
                    }
                }), d("peer-has", (v, { modifier: y })=>y ? `:merge(${g(".peer")}\\/${y}):has(${(0, O.normalize)(v)}) ~ &` : `:merge(${g(".peer")}):has(${(0, O.normalize)(v)}) ~ &`, {
                    values: {},
                    [E.INTERNAL_FEATURES]: {
                        respectPrefix: !1
                    }
                });
            },
            ariaVariants: ({ matchVariant: d, theme: g })=>{
                var v;
                d("aria", (F)=>`&[aria-${(0, O.normalizeAttributeSelectors)((0, O.normalize)(F))}]`, {
                    values: (v = g("aria")) !== null && v !== void 0 ? v : {}
                });
                var y;
                d("group-aria", (F, { modifier: $ })=>$ ? `:merge(.group\\/${$})[aria-${(0, O.normalizeAttributeSelectors)((0, O.normalize)(F))}] &` : `:merge(.group)[aria-${(0, O.normalizeAttributeSelectors)((0, O.normalize)(F))}] &`, {
                    values: (y = g("aria")) !== null && y !== void 0 ? y : {}
                });
                var R;
                d("peer-aria", (F, { modifier: $ })=>$ ? `:merge(.peer\\/${$})[aria-${(0, O.normalizeAttributeSelectors)((0, O.normalize)(F))}] ~ &` : `:merge(.peer)[aria-${(0, O.normalizeAttributeSelectors)((0, O.normalize)(F))}] ~ &`, {
                    values: (R = g("aria")) !== null && R !== void 0 ? R : {}
                });
            },
            dataVariants: ({ matchVariant: d, theme: g })=>{
                var v;
                d("data", (F)=>`&[data-${(0, O.normalizeAttributeSelectors)((0, O.normalize)(F))}]`, {
                    values: (v = g("data")) !== null && v !== void 0 ? v : {}
                });
                var y;
                d("group-data", (F, { modifier: $ })=>$ ? `:merge(.group\\/${$})[data-${(0, O.normalizeAttributeSelectors)((0, O.normalize)(F))}] &` : `:merge(.group)[data-${(0, O.normalizeAttributeSelectors)((0, O.normalize)(F))}] &`, {
                    values: (y = g("data")) !== null && y !== void 0 ? y : {}
                });
                var R;
                d("peer-data", (F, { modifier: $ })=>$ ? `:merge(.peer\\/${$})[data-${(0, O.normalizeAttributeSelectors)((0, O.normalize)(F))}] ~ &` : `:merge(.peer)[data-${(0, O.normalizeAttributeSelectors)((0, O.normalize)(F))}] ~ &`, {
                    values: (R = g("data")) !== null && R !== void 0 ? R : {}
                });
            },
            orientationVariants: ({ addVariant: d })=>{
                d("portrait", "@media (orientation: portrait)"), d("landscape", "@media (orientation: landscape)");
            },
            prefersContrastVariants: ({ addVariant: d })=>{
                d("contrast-more", "@media (prefers-contrast: more)"), d("contrast-less", "@media (prefers-contrast: less)");
            },
            forcedColorsVariants: ({ addVariant: d })=>{
                d("forced-colors", "@media (forced-colors: active)");
            }
        }, A = [
            "translate(var(--tw-translate-x), var(--tw-translate-y))",
            "rotate(var(--tw-rotate))",
            "skewX(var(--tw-skew-x))",
            "skewY(var(--tw-skew-y))",
            "scaleX(var(--tw-scale-x))",
            "scaleY(var(--tw-scale-y))"
        ].join(" "), N = [
            "var(--tw-blur)",
            "var(--tw-brightness)",
            "var(--tw-contrast)",
            "var(--tw-grayscale)",
            "var(--tw-hue-rotate)",
            "var(--tw-invert)",
            "var(--tw-saturate)",
            "var(--tw-sepia)",
            "var(--tw-drop-shadow)"
        ].join(" "), T = [
            "var(--tw-backdrop-blur)",
            "var(--tw-backdrop-brightness)",
            "var(--tw-backdrop-contrast)",
            "var(--tw-backdrop-grayscale)",
            "var(--tw-backdrop-hue-rotate)",
            "var(--tw-backdrop-invert)",
            "var(--tw-backdrop-opacity)",
            "var(--tw-backdrop-saturate)",
            "var(--tw-backdrop-sepia)"
        ].join(" "), V = {
            preflight: ({ addBase: d })=>{
                let g = n.default.parse(t.default.readFileSync(r.join(__dirname, "./css/preflight.css"), "utf8"));
                d([
                    n.default.comment({
                        text: `! tailwindcss v${x.version} | MIT License | https://tailwindcss.com`
                    }),
                    ...g.nodes
                ]);
            },
            container: /* @__PURE__ */ (()=>{
                function d(v = []) {
                    return v.flatMap((y)=>y.values.map((R)=>R.min)).filter((y)=>y !== void 0);
                }
                function g(v, y, R) {
                    if (typeof R > "u") return [];
                    if (!(typeof R == "object" && R !== null)) return [
                        {
                            screen: "DEFAULT",
                            minWidth: 0,
                            padding: R
                        }
                    ];
                    let F = [];
                    R.DEFAULT && F.push({
                        screen: "DEFAULT",
                        minWidth: 0,
                        padding: R.DEFAULT
                    });
                    for (let $ of v)for (let z of y)for (let { min: j } of z.values)j === $ && F.push({
                        minWidth: $,
                        padding: R[z.name]
                    });
                    return F;
                }
                return function({ addComponents: v, theme: y }) {
                    let R = (0, m.normalizeScreens)(y("container.screens", y("screens"))), F = d(R), $ = g(F, R, y("container.padding")), z = (W)=>{
                        let I = $.find((G)=>G.minWidth === W);
                        return I ? {
                            paddingRight: I.padding,
                            paddingLeft: I.padding
                        } : {};
                    }, j = Array.from(new Set(F.slice().sort((W, I)=>parseInt(W) - parseInt(I)))).map((W)=>({
                            [`@media (min-width: ${W})`]: {
                                ".container": {
                                    "max-width": W,
                                    ...z(W)
                                }
                            }
                        }));
                    v([
                        {
                            ".container": Object.assign({
                                width: "100%"
                            }, y("container.center", !1) ? {
                                marginRight: "auto",
                                marginLeft: "auto"
                            } : {}, z(0))
                        },
                        ...j
                    ]);
                };
            })(),
            accessibility: ({ addUtilities: d })=>{
                d({
                    ".sr-only": {
                        position: "absolute",
                        width: "1px",
                        height: "1px",
                        padding: "0",
                        margin: "-1px",
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0"
                    },
                    ".not-sr-only": {
                        position: "static",
                        width: "auto",
                        height: "auto",
                        padding: "0",
                        margin: "0",
                        overflow: "visible",
                        clip: "auto",
                        whiteSpace: "normal"
                    }
                });
            },
            pointerEvents: ({ addUtilities: d })=>{
                d({
                    ".pointer-events-none": {
                        "pointer-events": "none"
                    },
                    ".pointer-events-auto": {
                        "pointer-events": "auto"
                    }
                });
            },
            visibility: ({ addUtilities: d })=>{
                d({
                    ".visible": {
                        visibility: "visible"
                    },
                    ".invisible": {
                        visibility: "hidden"
                    },
                    ".collapse": {
                        visibility: "collapse"
                    }
                });
            },
            position: ({ addUtilities: d })=>{
                d({
                    ".static": {
                        position: "static"
                    },
                    ".fixed": {
                        position: "fixed"
                    },
                    ".absolute": {
                        position: "absolute"
                    },
                    ".relative": {
                        position: "relative"
                    },
                    ".sticky": {
                        position: "sticky"
                    }
                });
            },
            inset: (0, l.default)("inset", [
                [
                    "inset",
                    [
                        "inset"
                    ]
                ],
                [
                    [
                        "inset-x",
                        [
                            "left",
                            "right"
                        ]
                    ],
                    [
                        "inset-y",
                        [
                            "top",
                            "bottom"
                        ]
                    ]
                ],
                [
                    [
                        "start",
                        [
                            "inset-inline-start"
                        ]
                    ],
                    [
                        "end",
                        [
                            "inset-inline-end"
                        ]
                    ],
                    [
                        "top",
                        [
                            "top"
                        ]
                    ],
                    [
                        "right",
                        [
                            "right"
                        ]
                    ],
                    [
                        "bottom",
                        [
                            "bottom"
                        ]
                    ],
                    [
                        "left",
                        [
                            "left"
                        ]
                    ]
                ]
            ], {
                supportsNegativeValues: !0
            }),
            isolation: ({ addUtilities: d })=>{
                d({
                    ".isolate": {
                        isolation: "isolate"
                    },
                    ".isolation-auto": {
                        isolation: "auto"
                    }
                });
            },
            zIndex: (0, l.default)("zIndex", [
                [
                    "z",
                    [
                        "zIndex"
                    ]
                ]
            ], {
                supportsNegativeValues: !0
            }),
            order: (0, l.default)("order", void 0, {
                supportsNegativeValues: !0
            }),
            gridColumn: (0, l.default)("gridColumn", [
                [
                    "col",
                    [
                        "gridColumn"
                    ]
                ]
            ]),
            gridColumnStart: (0, l.default)("gridColumnStart", [
                [
                    "col-start",
                    [
                        "gridColumnStart"
                    ]
                ]
            ], {
                supportsNegativeValues: !0
            }),
            gridColumnEnd: (0, l.default)("gridColumnEnd", [
                [
                    "col-end",
                    [
                        "gridColumnEnd"
                    ]
                ]
            ], {
                supportsNegativeValues: !0
            }),
            gridRow: (0, l.default)("gridRow", [
                [
                    "row",
                    [
                        "gridRow"
                    ]
                ]
            ]),
            gridRowStart: (0, l.default)("gridRowStart", [
                [
                    "row-start",
                    [
                        "gridRowStart"
                    ]
                ]
            ], {
                supportsNegativeValues: !0
            }),
            gridRowEnd: (0, l.default)("gridRowEnd", [
                [
                    "row-end",
                    [
                        "gridRowEnd"
                    ]
                ]
            ], {
                supportsNegativeValues: !0
            }),
            float: ({ addUtilities: d })=>{
                d({
                    ".float-start": {
                        float: "inline-start"
                    },
                    ".float-end": {
                        float: "inline-end"
                    },
                    ".float-right": {
                        float: "right"
                    },
                    ".float-left": {
                        float: "left"
                    },
                    ".float-none": {
                        float: "none"
                    }
                });
            },
            clear: ({ addUtilities: d })=>{
                d({
                    ".clear-start": {
                        clear: "inline-start"
                    },
                    ".clear-end": {
                        clear: "inline-end"
                    },
                    ".clear-left": {
                        clear: "left"
                    },
                    ".clear-right": {
                        clear: "right"
                    },
                    ".clear-both": {
                        clear: "both"
                    },
                    ".clear-none": {
                        clear: "none"
                    }
                });
            },
            margin: (0, l.default)("margin", [
                [
                    "m",
                    [
                        "margin"
                    ]
                ],
                [
                    [
                        "mx",
                        [
                            "margin-left",
                            "margin-right"
                        ]
                    ],
                    [
                        "my",
                        [
                            "margin-top",
                            "margin-bottom"
                        ]
                    ]
                ],
                [
                    [
                        "ms",
                        [
                            "margin-inline-start"
                        ]
                    ],
                    [
                        "me",
                        [
                            "margin-inline-end"
                        ]
                    ],
                    [
                        "mt",
                        [
                            "margin-top"
                        ]
                    ],
                    [
                        "mr",
                        [
                            "margin-right"
                        ]
                    ],
                    [
                        "mb",
                        [
                            "margin-bottom"
                        ]
                    ],
                    [
                        "ml",
                        [
                            "margin-left"
                        ]
                    ]
                ]
            ], {
                supportsNegativeValues: !0
            }),
            boxSizing: ({ addUtilities: d })=>{
                d({
                    ".box-border": {
                        "box-sizing": "border-box"
                    },
                    ".box-content": {
                        "box-sizing": "content-box"
                    }
                });
            },
            lineClamp: ({ matchUtilities: d, addUtilities: g, theme: v })=>{
                d({
                    "line-clamp": (y)=>({
                            overflow: "hidden",
                            display: "-webkit-box",
                            "-webkit-box-orient": "vertical",
                            "-webkit-line-clamp": `${y}`
                        })
                }, {
                    values: v("lineClamp")
                }), g({
                    ".line-clamp-none": {
                        overflow: "visible",
                        display: "block",
                        "-webkit-box-orient": "horizontal",
                        "-webkit-line-clamp": "none"
                    }
                });
            },
            display: ({ addUtilities: d })=>{
                d({
                    ".block": {
                        display: "block"
                    },
                    ".inline-block": {
                        display: "inline-block"
                    },
                    ".inline": {
                        display: "inline"
                    },
                    ".flex": {
                        display: "flex"
                    },
                    ".inline-flex": {
                        display: "inline-flex"
                    },
                    ".table": {
                        display: "table"
                    },
                    ".inline-table": {
                        display: "inline-table"
                    },
                    ".table-caption": {
                        display: "table-caption"
                    },
                    ".table-cell": {
                        display: "table-cell"
                    },
                    ".table-column": {
                        display: "table-column"
                    },
                    ".table-column-group": {
                        display: "table-column-group"
                    },
                    ".table-footer-group": {
                        display: "table-footer-group"
                    },
                    ".table-header-group": {
                        display: "table-header-group"
                    },
                    ".table-row-group": {
                        display: "table-row-group"
                    },
                    ".table-row": {
                        display: "table-row"
                    },
                    ".flow-root": {
                        display: "flow-root"
                    },
                    ".grid": {
                        display: "grid"
                    },
                    ".inline-grid": {
                        display: "inline-grid"
                    },
                    ".contents": {
                        display: "contents"
                    },
                    ".list-item": {
                        display: "list-item"
                    },
                    ".hidden": {
                        display: "none"
                    }
                });
            },
            aspectRatio: (0, l.default)("aspectRatio", [
                [
                    "aspect",
                    [
                        "aspect-ratio"
                    ]
                ]
            ]),
            size: (0, l.default)("size", [
                [
                    "size",
                    [
                        "width",
                        "height"
                    ]
                ]
            ]),
            height: (0, l.default)("height", [
                [
                    "h",
                    [
                        "height"
                    ]
                ]
            ]),
            maxHeight: (0, l.default)("maxHeight", [
                [
                    "max-h",
                    [
                        "maxHeight"
                    ]
                ]
            ]),
            minHeight: (0, l.default)("minHeight", [
                [
                    "min-h",
                    [
                        "minHeight"
                    ]
                ]
            ]),
            width: (0, l.default)("width", [
                [
                    "w",
                    [
                        "width"
                    ]
                ]
            ]),
            minWidth: (0, l.default)("minWidth", [
                [
                    "min-w",
                    [
                        "minWidth"
                    ]
                ]
            ]),
            maxWidth: (0, l.default)("maxWidth", [
                [
                    "max-w",
                    [
                        "maxWidth"
                    ]
                ]
            ]),
            flex: (0, l.default)("flex"),
            flexShrink: (0, l.default)("flexShrink", [
                [
                    "flex-shrink",
                    [
                        "flex-shrink"
                    ]
                ],
                [
                    "shrink",
                    [
                        "flex-shrink"
                    ]
                ]
            ]),
            flexGrow: (0, l.default)("flexGrow", [
                [
                    "flex-grow",
                    [
                        "flex-grow"
                    ]
                ],
                [
                    "grow",
                    [
                        "flex-grow"
                    ]
                ]
            ]),
            flexBasis: (0, l.default)("flexBasis", [
                [
                    "basis",
                    [
                        "flex-basis"
                    ]
                ]
            ]),
            tableLayout: ({ addUtilities: d })=>{
                d({
                    ".table-auto": {
                        "table-layout": "auto"
                    },
                    ".table-fixed": {
                        "table-layout": "fixed"
                    }
                });
            },
            captionSide: ({ addUtilities: d })=>{
                d({
                    ".caption-top": {
                        "caption-side": "top"
                    },
                    ".caption-bottom": {
                        "caption-side": "bottom"
                    }
                });
            },
            borderCollapse: ({ addUtilities: d })=>{
                d({
                    ".border-collapse": {
                        "border-collapse": "collapse"
                    },
                    ".border-separate": {
                        "border-collapse": "separate"
                    }
                });
            },
            borderSpacing: ({ addDefaults: d, matchUtilities: g, theme: v })=>{
                d("border-spacing", {
                    "--tw-border-spacing-x": 0,
                    "--tw-border-spacing-y": 0
                }), g({
                    "border-spacing": (y)=>({
                            "--tw-border-spacing-x": y,
                            "--tw-border-spacing-y": y,
                            "@defaults border-spacing": {},
                            "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)"
                        }),
                    "border-spacing-x": (y)=>({
                            "--tw-border-spacing-x": y,
                            "@defaults border-spacing": {},
                            "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)"
                        }),
                    "border-spacing-y": (y)=>({
                            "--tw-border-spacing-y": y,
                            "@defaults border-spacing": {},
                            "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)"
                        })
                }, {
                    values: v("borderSpacing")
                });
            },
            transformOrigin: (0, l.default)("transformOrigin", [
                [
                    "origin",
                    [
                        "transformOrigin"
                    ]
                ]
            ]),
            translate: (0, l.default)("translate", [
                [
                    [
                        "translate-x",
                        [
                            [
                                "@defaults transform",
                                {}
                            ],
                            "--tw-translate-x",
                            [
                                "transform",
                                A
                            ]
                        ]
                    ],
                    [
                        "translate-y",
                        [
                            [
                                "@defaults transform",
                                {}
                            ],
                            "--tw-translate-y",
                            [
                                "transform",
                                A
                            ]
                        ]
                    ]
                ]
            ], {
                supportsNegativeValues: !0
            }),
            rotate: (0, l.default)("rotate", [
                [
                    "rotate",
                    [
                        [
                            "@defaults transform",
                            {}
                        ],
                        "--tw-rotate",
                        [
                            "transform",
                            A
                        ]
                    ]
                ]
            ], {
                supportsNegativeValues: !0
            }),
            skew: (0, l.default)("skew", [
                [
                    [
                        "skew-x",
                        [
                            [
                                "@defaults transform",
                                {}
                            ],
                            "--tw-skew-x",
                            [
                                "transform",
                                A
                            ]
                        ]
                    ],
                    [
                        "skew-y",
                        [
                            [
                                "@defaults transform",
                                {}
                            ],
                            "--tw-skew-y",
                            [
                                "transform",
                                A
                            ]
                        ]
                    ]
                ]
            ], {
                supportsNegativeValues: !0
            }),
            scale: (0, l.default)("scale", [
                [
                    "scale",
                    [
                        [
                            "@defaults transform",
                            {}
                        ],
                        "--tw-scale-x",
                        "--tw-scale-y",
                        [
                            "transform",
                            A
                        ]
                    ]
                ],
                [
                    [
                        "scale-x",
                        [
                            [
                                "@defaults transform",
                                {}
                            ],
                            "--tw-scale-x",
                            [
                                "transform",
                                A
                            ]
                        ]
                    ],
                    [
                        "scale-y",
                        [
                            [
                                "@defaults transform",
                                {}
                            ],
                            "--tw-scale-y",
                            [
                                "transform",
                                A
                            ]
                        ]
                    ]
                ]
            ], {
                supportsNegativeValues: !0
            }),
            transform: ({ addDefaults: d, addUtilities: g })=>{
                d("transform", {
                    "--tw-translate-x": "0",
                    "--tw-translate-y": "0",
                    "--tw-rotate": "0",
                    "--tw-skew-x": "0",
                    "--tw-skew-y": "0",
                    "--tw-scale-x": "1",
                    "--tw-scale-y": "1"
                }), g({
                    ".transform": {
                        "@defaults transform": {},
                        transform: A
                    },
                    ".transform-cpu": {
                        transform: A
                    },
                    ".transform-gpu": {
                        transform: A.replace("translate(var(--tw-translate-x), var(--tw-translate-y))", "translate3d(var(--tw-translate-x), var(--tw-translate-y), 0)")
                    },
                    ".transform-none": {
                        transform: "none"
                    }
                });
            },
            animation: ({ matchUtilities: d, theme: g, config: v })=>{
                let y = ($)=>(0, c.default)(v("prefix") + $);
                var R;
                let F = Object.fromEntries(Object.entries((R = g("keyframes")) !== null && R !== void 0 ? R : {}).map(([$, z])=>[
                        $,
                        {
                            [`@keyframes ${y($)}`]: z
                        }
                    ]));
                d({
                    animate: ($)=>{
                        let z = (0, a.default)($);
                        return [
                            ...z.flatMap((j)=>F[j.name]),
                            {
                                animation: z.map(({ name: j, value: W })=>j === void 0 || F[j] === void 0 ? W : W.replace(j, y(j))).join(", ")
                            }
                        ];
                    }
                }, {
                    values: g("animation")
                });
            },
            cursor: (0, l.default)("cursor"),
            touchAction: ({ addDefaults: d, addUtilities: g })=>{
                d("touch-action", {
                    "--tw-pan-x": " ",
                    "--tw-pan-y": " ",
                    "--tw-pinch-zoom": " "
                });
                let v = "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)";
                g({
                    ".touch-auto": {
                        "touch-action": "auto"
                    },
                    ".touch-none": {
                        "touch-action": "none"
                    },
                    ".touch-pan-x": {
                        "@defaults touch-action": {},
                        "--tw-pan-x": "pan-x",
                        "touch-action": v
                    },
                    ".touch-pan-left": {
                        "@defaults touch-action": {},
                        "--tw-pan-x": "pan-left",
                        "touch-action": v
                    },
                    ".touch-pan-right": {
                        "@defaults touch-action": {},
                        "--tw-pan-x": "pan-right",
                        "touch-action": v
                    },
                    ".touch-pan-y": {
                        "@defaults touch-action": {},
                        "--tw-pan-y": "pan-y",
                        "touch-action": v
                    },
                    ".touch-pan-up": {
                        "@defaults touch-action": {},
                        "--tw-pan-y": "pan-up",
                        "touch-action": v
                    },
                    ".touch-pan-down": {
                        "@defaults touch-action": {},
                        "--tw-pan-y": "pan-down",
                        "touch-action": v
                    },
                    ".touch-pinch-zoom": {
                        "@defaults touch-action": {},
                        "--tw-pinch-zoom": "pinch-zoom",
                        "touch-action": v
                    },
                    ".touch-manipulation": {
                        "touch-action": "manipulation"
                    }
                });
            },
            userSelect: ({ addUtilities: d })=>{
                d({
                    ".select-none": {
                        "user-select": "none"
                    },
                    ".select-text": {
                        "user-select": "text"
                    },
                    ".select-all": {
                        "user-select": "all"
                    },
                    ".select-auto": {
                        "user-select": "auto"
                    }
                });
            },
            resize: ({ addUtilities: d })=>{
                d({
                    ".resize-none": {
                        resize: "none"
                    },
                    ".resize-y": {
                        resize: "vertical"
                    },
                    ".resize-x": {
                        resize: "horizontal"
                    },
                    ".resize": {
                        resize: "both"
                    }
                });
            },
            scrollSnapType: ({ addDefaults: d, addUtilities: g })=>{
                d("scroll-snap-type", {
                    "--tw-scroll-snap-strictness": "proximity"
                }), g({
                    ".snap-none": {
                        "scroll-snap-type": "none"
                    },
                    ".snap-x": {
                        "@defaults scroll-snap-type": {},
                        "scroll-snap-type": "x var(--tw-scroll-snap-strictness)"
                    },
                    ".snap-y": {
                        "@defaults scroll-snap-type": {},
                        "scroll-snap-type": "y var(--tw-scroll-snap-strictness)"
                    },
                    ".snap-both": {
                        "@defaults scroll-snap-type": {},
                        "scroll-snap-type": "both var(--tw-scroll-snap-strictness)"
                    },
                    ".snap-mandatory": {
                        "--tw-scroll-snap-strictness": "mandatory"
                    },
                    ".snap-proximity": {
                        "--tw-scroll-snap-strictness": "proximity"
                    }
                });
            },
            scrollSnapAlign: ({ addUtilities: d })=>{
                d({
                    ".snap-start": {
                        "scroll-snap-align": "start"
                    },
                    ".snap-end": {
                        "scroll-snap-align": "end"
                    },
                    ".snap-center": {
                        "scroll-snap-align": "center"
                    },
                    ".snap-align-none": {
                        "scroll-snap-align": "none"
                    }
                });
            },
            scrollSnapStop: ({ addUtilities: d })=>{
                d({
                    ".snap-normal": {
                        "scroll-snap-stop": "normal"
                    },
                    ".snap-always": {
                        "scroll-snap-stop": "always"
                    }
                });
            },
            scrollMargin: (0, l.default)("scrollMargin", [
                [
                    "scroll-m",
                    [
                        "scroll-margin"
                    ]
                ],
                [
                    [
                        "scroll-mx",
                        [
                            "scroll-margin-left",
                            "scroll-margin-right"
                        ]
                    ],
                    [
                        "scroll-my",
                        [
                            "scroll-margin-top",
                            "scroll-margin-bottom"
                        ]
                    ]
                ],
                [
                    [
                        "scroll-ms",
                        [
                            "scroll-margin-inline-start"
                        ]
                    ],
                    [
                        "scroll-me",
                        [
                            "scroll-margin-inline-end"
                        ]
                    ],
                    [
                        "scroll-mt",
                        [
                            "scroll-margin-top"
                        ]
                    ],
                    [
                        "scroll-mr",
                        [
                            "scroll-margin-right"
                        ]
                    ],
                    [
                        "scroll-mb",
                        [
                            "scroll-margin-bottom"
                        ]
                    ],
                    [
                        "scroll-ml",
                        [
                            "scroll-margin-left"
                        ]
                    ]
                ]
            ], {
                supportsNegativeValues: !0
            }),
            scrollPadding: (0, l.default)("scrollPadding", [
                [
                    "scroll-p",
                    [
                        "scroll-padding"
                    ]
                ],
                [
                    [
                        "scroll-px",
                        [
                            "scroll-padding-left",
                            "scroll-padding-right"
                        ]
                    ],
                    [
                        "scroll-py",
                        [
                            "scroll-padding-top",
                            "scroll-padding-bottom"
                        ]
                    ]
                ],
                [
                    [
                        "scroll-ps",
                        [
                            "scroll-padding-inline-start"
                        ]
                    ],
                    [
                        "scroll-pe",
                        [
                            "scroll-padding-inline-end"
                        ]
                    ],
                    [
                        "scroll-pt",
                        [
                            "scroll-padding-top"
                        ]
                    ],
                    [
                        "scroll-pr",
                        [
                            "scroll-padding-right"
                        ]
                    ],
                    [
                        "scroll-pb",
                        [
                            "scroll-padding-bottom"
                        ]
                    ],
                    [
                        "scroll-pl",
                        [
                            "scroll-padding-left"
                        ]
                    ]
                ]
            ]),
            listStylePosition: ({ addUtilities: d })=>{
                d({
                    ".list-inside": {
                        "list-style-position": "inside"
                    },
                    ".list-outside": {
                        "list-style-position": "outside"
                    }
                });
            },
            listStyleType: (0, l.default)("listStyleType", [
                [
                    "list",
                    [
                        "listStyleType"
                    ]
                ]
            ]),
            listStyleImage: (0, l.default)("listStyleImage", [
                [
                    "list-image",
                    [
                        "listStyleImage"
                    ]
                ]
            ]),
            appearance: ({ addUtilities: d })=>{
                d({
                    ".appearance-none": {
                        appearance: "none"
                    },
                    ".appearance-auto": {
                        appearance: "auto"
                    }
                });
            },
            columns: (0, l.default)("columns", [
                [
                    "columns",
                    [
                        "columns"
                    ]
                ]
            ]),
            breakBefore: ({ addUtilities: d })=>{
                d({
                    ".break-before-auto": {
                        "break-before": "auto"
                    },
                    ".break-before-avoid": {
                        "break-before": "avoid"
                    },
                    ".break-before-all": {
                        "break-before": "all"
                    },
                    ".break-before-avoid-page": {
                        "break-before": "avoid-page"
                    },
                    ".break-before-page": {
                        "break-before": "page"
                    },
                    ".break-before-left": {
                        "break-before": "left"
                    },
                    ".break-before-right": {
                        "break-before": "right"
                    },
                    ".break-before-column": {
                        "break-before": "column"
                    }
                });
            },
            breakInside: ({ addUtilities: d })=>{
                d({
                    ".break-inside-auto": {
                        "break-inside": "auto"
                    },
                    ".break-inside-avoid": {
                        "break-inside": "avoid"
                    },
                    ".break-inside-avoid-page": {
                        "break-inside": "avoid-page"
                    },
                    ".break-inside-avoid-column": {
                        "break-inside": "avoid-column"
                    }
                });
            },
            breakAfter: ({ addUtilities: d })=>{
                d({
                    ".break-after-auto": {
                        "break-after": "auto"
                    },
                    ".break-after-avoid": {
                        "break-after": "avoid"
                    },
                    ".break-after-all": {
                        "break-after": "all"
                    },
                    ".break-after-avoid-page": {
                        "break-after": "avoid-page"
                    },
                    ".break-after-page": {
                        "break-after": "page"
                    },
                    ".break-after-left": {
                        "break-after": "left"
                    },
                    ".break-after-right": {
                        "break-after": "right"
                    },
                    ".break-after-column": {
                        "break-after": "column"
                    }
                });
            },
            gridAutoColumns: (0, l.default)("gridAutoColumns", [
                [
                    "auto-cols",
                    [
                        "gridAutoColumns"
                    ]
                ]
            ]),
            gridAutoFlow: ({ addUtilities: d })=>{
                d({
                    ".grid-flow-row": {
                        gridAutoFlow: "row"
                    },
                    ".grid-flow-col": {
                        gridAutoFlow: "column"
                    },
                    ".grid-flow-dense": {
                        gridAutoFlow: "dense"
                    },
                    ".grid-flow-row-dense": {
                        gridAutoFlow: "row dense"
                    },
                    ".grid-flow-col-dense": {
                        gridAutoFlow: "column dense"
                    }
                });
            },
            gridAutoRows: (0, l.default)("gridAutoRows", [
                [
                    "auto-rows",
                    [
                        "gridAutoRows"
                    ]
                ]
            ]),
            gridTemplateColumns: (0, l.default)("gridTemplateColumns", [
                [
                    "grid-cols",
                    [
                        "gridTemplateColumns"
                    ]
                ]
            ]),
            gridTemplateRows: (0, l.default)("gridTemplateRows", [
                [
                    "grid-rows",
                    [
                        "gridTemplateRows"
                    ]
                ]
            ]),
            flexDirection: ({ addUtilities: d })=>{
                d({
                    ".flex-row": {
                        "flex-direction": "row"
                    },
                    ".flex-row-reverse": {
                        "flex-direction": "row-reverse"
                    },
                    ".flex-col": {
                        "flex-direction": "column"
                    },
                    ".flex-col-reverse": {
                        "flex-direction": "column-reverse"
                    }
                });
            },
            flexWrap: ({ addUtilities: d })=>{
                d({
                    ".flex-wrap": {
                        "flex-wrap": "wrap"
                    },
                    ".flex-wrap-reverse": {
                        "flex-wrap": "wrap-reverse"
                    },
                    ".flex-nowrap": {
                        "flex-wrap": "nowrap"
                    }
                });
            },
            placeContent: ({ addUtilities: d })=>{
                d({
                    ".place-content-center": {
                        "place-content": "center"
                    },
                    ".place-content-start": {
                        "place-content": "start"
                    },
                    ".place-content-end": {
                        "place-content": "end"
                    },
                    ".place-content-between": {
                        "place-content": "space-between"
                    },
                    ".place-content-around": {
                        "place-content": "space-around"
                    },
                    ".place-content-evenly": {
                        "place-content": "space-evenly"
                    },
                    ".place-content-baseline": {
                        "place-content": "baseline"
                    },
                    ".place-content-stretch": {
                        "place-content": "stretch"
                    }
                });
            },
            placeItems: ({ addUtilities: d })=>{
                d({
                    ".place-items-start": {
                        "place-items": "start"
                    },
                    ".place-items-end": {
                        "place-items": "end"
                    },
                    ".place-items-center": {
                        "place-items": "center"
                    },
                    ".place-items-baseline": {
                        "place-items": "baseline"
                    },
                    ".place-items-stretch": {
                        "place-items": "stretch"
                    }
                });
            },
            alignContent: ({ addUtilities: d })=>{
                d({
                    ".content-normal": {
                        "align-content": "normal"
                    },
                    ".content-center": {
                        "align-content": "center"
                    },
                    ".content-start": {
                        "align-content": "flex-start"
                    },
                    ".content-end": {
                        "align-content": "flex-end"
                    },
                    ".content-between": {
                        "align-content": "space-between"
                    },
                    ".content-around": {
                        "align-content": "space-around"
                    },
                    ".content-evenly": {
                        "align-content": "space-evenly"
                    },
                    ".content-baseline": {
                        "align-content": "baseline"
                    },
                    ".content-stretch": {
                        "align-content": "stretch"
                    }
                });
            },
            alignItems: ({ addUtilities: d })=>{
                d({
                    ".items-start": {
                        "align-items": "flex-start"
                    },
                    ".items-end": {
                        "align-items": "flex-end"
                    },
                    ".items-center": {
                        "align-items": "center"
                    },
                    ".items-baseline": {
                        "align-items": "baseline"
                    },
                    ".items-stretch": {
                        "align-items": "stretch"
                    }
                });
            },
            justifyContent: ({ addUtilities: d })=>{
                d({
                    ".justify-normal": {
                        "justify-content": "normal"
                    },
                    ".justify-start": {
                        "justify-content": "flex-start"
                    },
                    ".justify-end": {
                        "justify-content": "flex-end"
                    },
                    ".justify-center": {
                        "justify-content": "center"
                    },
                    ".justify-between": {
                        "justify-content": "space-between"
                    },
                    ".justify-around": {
                        "justify-content": "space-around"
                    },
                    ".justify-evenly": {
                        "justify-content": "space-evenly"
                    },
                    ".justify-stretch": {
                        "justify-content": "stretch"
                    }
                });
            },
            justifyItems: ({ addUtilities: d })=>{
                d({
                    ".justify-items-start": {
                        "justify-items": "start"
                    },
                    ".justify-items-end": {
                        "justify-items": "end"
                    },
                    ".justify-items-center": {
                        "justify-items": "center"
                    },
                    ".justify-items-stretch": {
                        "justify-items": "stretch"
                    }
                });
            },
            gap: (0, l.default)("gap", [
                [
                    "gap",
                    [
                        "gap"
                    ]
                ],
                [
                    [
                        "gap-x",
                        [
                            "columnGap"
                        ]
                    ],
                    [
                        "gap-y",
                        [
                            "rowGap"
                        ]
                    ]
                ]
            ]),
            space: ({ matchUtilities: d, addUtilities: g, theme: v })=>{
                d({
                    "space-x": (y)=>(y = y === "0" ? "0px" : y, {
                            "& > :not([hidden]) ~ :not([hidden])": {
                                "--tw-space-x-reverse": "0",
                                "margin-right": `calc(${y} * var(--tw-space-x-reverse))`,
                                "margin-left": `calc(${y} * calc(1 - var(--tw-space-x-reverse)))`
                            }
                        }),
                    "space-y": (y)=>(y = y === "0" ? "0px" : y, {
                            "& > :not([hidden]) ~ :not([hidden])": {
                                "--tw-space-y-reverse": "0",
                                "margin-top": `calc(${y} * calc(1 - var(--tw-space-y-reverse)))`,
                                "margin-bottom": `calc(${y} * var(--tw-space-y-reverse))`
                            }
                        })
                }, {
                    values: v("space"),
                    supportsNegativeValues: !0
                }), g({
                    ".space-y-reverse > :not([hidden]) ~ :not([hidden])": {
                        "--tw-space-y-reverse": "1"
                    },
                    ".space-x-reverse > :not([hidden]) ~ :not([hidden])": {
                        "--tw-space-x-reverse": "1"
                    }
                });
            },
            divideWidth: ({ matchUtilities: d, addUtilities: g, theme: v })=>{
                d({
                    "divide-x": (y)=>(y = y === "0" ? "0px" : y, {
                            "& > :not([hidden]) ~ :not([hidden])": {
                                "@defaults border-width": {},
                                "--tw-divide-x-reverse": "0",
                                "border-right-width": `calc(${y} * var(--tw-divide-x-reverse))`,
                                "border-left-width": `calc(${y} * calc(1 - var(--tw-divide-x-reverse)))`
                            }
                        }),
                    "divide-y": (y)=>(y = y === "0" ? "0px" : y, {
                            "& > :not([hidden]) ~ :not([hidden])": {
                                "@defaults border-width": {},
                                "--tw-divide-y-reverse": "0",
                                "border-top-width": `calc(${y} * calc(1 - var(--tw-divide-y-reverse)))`,
                                "border-bottom-width": `calc(${y} * var(--tw-divide-y-reverse))`
                            }
                        })
                }, {
                    values: v("divideWidth"),
                    type: [
                        "line-width",
                        "length",
                        "any"
                    ]
                }), g({
                    ".divide-y-reverse > :not([hidden]) ~ :not([hidden])": {
                        "@defaults border-width": {},
                        "--tw-divide-y-reverse": "1"
                    },
                    ".divide-x-reverse > :not([hidden]) ~ :not([hidden])": {
                        "@defaults border-width": {},
                        "--tw-divide-x-reverse": "1"
                    }
                });
            },
            divideStyle: ({ addUtilities: d })=>{
                d({
                    ".divide-solid > :not([hidden]) ~ :not([hidden])": {
                        "border-style": "solid"
                    },
                    ".divide-dashed > :not([hidden]) ~ :not([hidden])": {
                        "border-style": "dashed"
                    },
                    ".divide-dotted > :not([hidden]) ~ :not([hidden])": {
                        "border-style": "dotted"
                    },
                    ".divide-double > :not([hidden]) ~ :not([hidden])": {
                        "border-style": "double"
                    },
                    ".divide-none > :not([hidden]) ~ :not([hidden])": {
                        "border-style": "none"
                    }
                });
            },
            divideColor: ({ matchUtilities: d, theme: g, corePlugins: v })=>{
                d({
                    divide: (y)=>v("divideOpacity") ? {
                            "& > :not([hidden]) ~ :not([hidden])": (0, f.default)({
                                color: y,
                                property: "border-color",
                                variable: "--tw-divide-opacity"
                            })
                        } : {
                            "& > :not([hidden]) ~ :not([hidden])": {
                                "border-color": (0, u.default)(y)
                            }
                        }
                }, {
                    values: (({ DEFAULT: y, ...R })=>R)((0, o.default)(g("divideColor"))),
                    type: [
                        "color",
                        "any"
                    ]
                });
            },
            divideOpacity: ({ matchUtilities: d, theme: g })=>{
                d({
                    "divide-opacity": (v)=>({
                            "& > :not([hidden]) ~ :not([hidden])": {
                                "--tw-divide-opacity": v
                            }
                        })
                }, {
                    values: g("divideOpacity")
                });
            },
            placeSelf: ({ addUtilities: d })=>{
                d({
                    ".place-self-auto": {
                        "place-self": "auto"
                    },
                    ".place-self-start": {
                        "place-self": "start"
                    },
                    ".place-self-end": {
                        "place-self": "end"
                    },
                    ".place-self-center": {
                        "place-self": "center"
                    },
                    ".place-self-stretch": {
                        "place-self": "stretch"
                    }
                });
            },
            alignSelf: ({ addUtilities: d })=>{
                d({
                    ".self-auto": {
                        "align-self": "auto"
                    },
                    ".self-start": {
                        "align-self": "flex-start"
                    },
                    ".self-end": {
                        "align-self": "flex-end"
                    },
                    ".self-center": {
                        "align-self": "center"
                    },
                    ".self-stretch": {
                        "align-self": "stretch"
                    },
                    ".self-baseline": {
                        "align-self": "baseline"
                    }
                });
            },
            justifySelf: ({ addUtilities: d })=>{
                d({
                    ".justify-self-auto": {
                        "justify-self": "auto"
                    },
                    ".justify-self-start": {
                        "justify-self": "start"
                    },
                    ".justify-self-end": {
                        "justify-self": "end"
                    },
                    ".justify-self-center": {
                        "justify-self": "center"
                    },
                    ".justify-self-stretch": {
                        "justify-self": "stretch"
                    }
                });
            },
            overflow: ({ addUtilities: d })=>{
                d({
                    ".overflow-auto": {
                        overflow: "auto"
                    },
                    ".overflow-hidden": {
                        overflow: "hidden"
                    },
                    ".overflow-clip": {
                        overflow: "clip"
                    },
                    ".overflow-visible": {
                        overflow: "visible"
                    },
                    ".overflow-scroll": {
                        overflow: "scroll"
                    },
                    ".overflow-x-auto": {
                        "overflow-x": "auto"
                    },
                    ".overflow-y-auto": {
                        "overflow-y": "auto"
                    },
                    ".overflow-x-hidden": {
                        "overflow-x": "hidden"
                    },
                    ".overflow-y-hidden": {
                        "overflow-y": "hidden"
                    },
                    ".overflow-x-clip": {
                        "overflow-x": "clip"
                    },
                    ".overflow-y-clip": {
                        "overflow-y": "clip"
                    },
                    ".overflow-x-visible": {
                        "overflow-x": "visible"
                    },
                    ".overflow-y-visible": {
                        "overflow-y": "visible"
                    },
                    ".overflow-x-scroll": {
                        "overflow-x": "scroll"
                    },
                    ".overflow-y-scroll": {
                        "overflow-y": "scroll"
                    }
                });
            },
            overscrollBehavior: ({ addUtilities: d })=>{
                d({
                    ".overscroll-auto": {
                        "overscroll-behavior": "auto"
                    },
                    ".overscroll-contain": {
                        "overscroll-behavior": "contain"
                    },
                    ".overscroll-none": {
                        "overscroll-behavior": "none"
                    },
                    ".overscroll-y-auto": {
                        "overscroll-behavior-y": "auto"
                    },
                    ".overscroll-y-contain": {
                        "overscroll-behavior-y": "contain"
                    },
                    ".overscroll-y-none": {
                        "overscroll-behavior-y": "none"
                    },
                    ".overscroll-x-auto": {
                        "overscroll-behavior-x": "auto"
                    },
                    ".overscroll-x-contain": {
                        "overscroll-behavior-x": "contain"
                    },
                    ".overscroll-x-none": {
                        "overscroll-behavior-x": "none"
                    }
                });
            },
            scrollBehavior: ({ addUtilities: d })=>{
                d({
                    ".scroll-auto": {
                        "scroll-behavior": "auto"
                    },
                    ".scroll-smooth": {
                        "scroll-behavior": "smooth"
                    }
                });
            },
            textOverflow: ({ addUtilities: d })=>{
                d({
                    ".truncate": {
                        overflow: "hidden",
                        "text-overflow": "ellipsis",
                        "white-space": "nowrap"
                    },
                    ".overflow-ellipsis": {
                        "text-overflow": "ellipsis"
                    },
                    ".text-ellipsis": {
                        "text-overflow": "ellipsis"
                    },
                    ".text-clip": {
                        "text-overflow": "clip"
                    }
                });
            },
            hyphens: ({ addUtilities: d })=>{
                d({
                    ".hyphens-none": {
                        hyphens: "none"
                    },
                    ".hyphens-manual": {
                        hyphens: "manual"
                    },
                    ".hyphens-auto": {
                        hyphens: "auto"
                    }
                });
            },
            whitespace: ({ addUtilities: d })=>{
                d({
                    ".whitespace-normal": {
                        "white-space": "normal"
                    },
                    ".whitespace-nowrap": {
                        "white-space": "nowrap"
                    },
                    ".whitespace-pre": {
                        "white-space": "pre"
                    },
                    ".whitespace-pre-line": {
                        "white-space": "pre-line"
                    },
                    ".whitespace-pre-wrap": {
                        "white-space": "pre-wrap"
                    },
                    ".whitespace-break-spaces": {
                        "white-space": "break-spaces"
                    }
                });
            },
            textWrap: ({ addUtilities: d })=>{
                d({
                    ".text-wrap": {
                        "text-wrap": "wrap"
                    },
                    ".text-nowrap": {
                        "text-wrap": "nowrap"
                    },
                    ".text-balance": {
                        "text-wrap": "balance"
                    },
                    ".text-pretty": {
                        "text-wrap": "pretty"
                    }
                });
            },
            wordBreak: ({ addUtilities: d })=>{
                d({
                    ".break-normal": {
                        "overflow-wrap": "normal",
                        "word-break": "normal"
                    },
                    ".break-words": {
                        "overflow-wrap": "break-word"
                    },
                    ".break-all": {
                        "word-break": "break-all"
                    },
                    ".break-keep": {
                        "word-break": "keep-all"
                    }
                });
            },
            borderRadius: (0, l.default)("borderRadius", [
                [
                    "rounded",
                    [
                        "border-radius"
                    ]
                ],
                [
                    [
                        "rounded-s",
                        [
                            "border-start-start-radius",
                            "border-end-start-radius"
                        ]
                    ],
                    [
                        "rounded-e",
                        [
                            "border-start-end-radius",
                            "border-end-end-radius"
                        ]
                    ],
                    [
                        "rounded-t",
                        [
                            "border-top-left-radius",
                            "border-top-right-radius"
                        ]
                    ],
                    [
                        "rounded-r",
                        [
                            "border-top-right-radius",
                            "border-bottom-right-radius"
                        ]
                    ],
                    [
                        "rounded-b",
                        [
                            "border-bottom-right-radius",
                            "border-bottom-left-radius"
                        ]
                    ],
                    [
                        "rounded-l",
                        [
                            "border-top-left-radius",
                            "border-bottom-left-radius"
                        ]
                    ]
                ],
                [
                    [
                        "rounded-ss",
                        [
                            "border-start-start-radius"
                        ]
                    ],
                    [
                        "rounded-se",
                        [
                            "border-start-end-radius"
                        ]
                    ],
                    [
                        "rounded-ee",
                        [
                            "border-end-end-radius"
                        ]
                    ],
                    [
                        "rounded-es",
                        [
                            "border-end-start-radius"
                        ]
                    ],
                    [
                        "rounded-tl",
                        [
                            "border-top-left-radius"
                        ]
                    ],
                    [
                        "rounded-tr",
                        [
                            "border-top-right-radius"
                        ]
                    ],
                    [
                        "rounded-br",
                        [
                            "border-bottom-right-radius"
                        ]
                    ],
                    [
                        "rounded-bl",
                        [
                            "border-bottom-left-radius"
                        ]
                    ]
                ]
            ]),
            borderWidth: (0, l.default)("borderWidth", [
                [
                    "border",
                    [
                        [
                            "@defaults border-width",
                            {}
                        ],
                        "border-width"
                    ]
                ],
                [
                    [
                        "border-x",
                        [
                            [
                                "@defaults border-width",
                                {}
                            ],
                            "border-left-width",
                            "border-right-width"
                        ]
                    ],
                    [
                        "border-y",
                        [
                            [
                                "@defaults border-width",
                                {}
                            ],
                            "border-top-width",
                            "border-bottom-width"
                        ]
                    ]
                ],
                [
                    [
                        "border-s",
                        [
                            [
                                "@defaults border-width",
                                {}
                            ],
                            "border-inline-start-width"
                        ]
                    ],
                    [
                        "border-e",
                        [
                            [
                                "@defaults border-width",
                                {}
                            ],
                            "border-inline-end-width"
                        ]
                    ],
                    [
                        "border-t",
                        [
                            [
                                "@defaults border-width",
                                {}
                            ],
                            "border-top-width"
                        ]
                    ],
                    [
                        "border-r",
                        [
                            [
                                "@defaults border-width",
                                {}
                            ],
                            "border-right-width"
                        ]
                    ],
                    [
                        "border-b",
                        [
                            [
                                "@defaults border-width",
                                {}
                            ],
                            "border-bottom-width"
                        ]
                    ],
                    [
                        "border-l",
                        [
                            [
                                "@defaults border-width",
                                {}
                            ],
                            "border-left-width"
                        ]
                    ]
                ]
            ], {
                type: [
                    "line-width",
                    "length"
                ]
            }),
            borderStyle: ({ addUtilities: d })=>{
                d({
                    ".border-solid": {
                        "border-style": "solid"
                    },
                    ".border-dashed": {
                        "border-style": "dashed"
                    },
                    ".border-dotted": {
                        "border-style": "dotted"
                    },
                    ".border-double": {
                        "border-style": "double"
                    },
                    ".border-hidden": {
                        "border-style": "hidden"
                    },
                    ".border-none": {
                        "border-style": "none"
                    }
                });
            },
            borderColor: ({ matchUtilities: d, theme: g, corePlugins: v })=>{
                d({
                    border: (y)=>v("borderOpacity") ? (0, f.default)({
                            color: y,
                            property: "border-color",
                            variable: "--tw-border-opacity"
                        }) : {
                            "border-color": (0, u.default)(y)
                        }
                }, {
                    values: (({ DEFAULT: y, ...R })=>R)((0, o.default)(g("borderColor"))),
                    type: [
                        "color",
                        "any"
                    ]
                }), d({
                    "border-x": (y)=>v("borderOpacity") ? (0, f.default)({
                            color: y,
                            property: [
                                "border-left-color",
                                "border-right-color"
                            ],
                            variable: "--tw-border-opacity"
                        }) : {
                            "border-left-color": (0, u.default)(y),
                            "border-right-color": (0, u.default)(y)
                        },
                    "border-y": (y)=>v("borderOpacity") ? (0, f.default)({
                            color: y,
                            property: [
                                "border-top-color",
                                "border-bottom-color"
                            ],
                            variable: "--tw-border-opacity"
                        }) : {
                            "border-top-color": (0, u.default)(y),
                            "border-bottom-color": (0, u.default)(y)
                        }
                }, {
                    values: (({ DEFAULT: y, ...R })=>R)((0, o.default)(g("borderColor"))),
                    type: [
                        "color",
                        "any"
                    ]
                }), d({
                    "border-s": (y)=>v("borderOpacity") ? (0, f.default)({
                            color: y,
                            property: "border-inline-start-color",
                            variable: "--tw-border-opacity"
                        }) : {
                            "border-inline-start-color": (0, u.default)(y)
                        },
                    "border-e": (y)=>v("borderOpacity") ? (0, f.default)({
                            color: y,
                            property: "border-inline-end-color",
                            variable: "--tw-border-opacity"
                        }) : {
                            "border-inline-end-color": (0, u.default)(y)
                        },
                    "border-t": (y)=>v("borderOpacity") ? (0, f.default)({
                            color: y,
                            property: "border-top-color",
                            variable: "--tw-border-opacity"
                        }) : {
                            "border-top-color": (0, u.default)(y)
                        },
                    "border-r": (y)=>v("borderOpacity") ? (0, f.default)({
                            color: y,
                            property: "border-right-color",
                            variable: "--tw-border-opacity"
                        }) : {
                            "border-right-color": (0, u.default)(y)
                        },
                    "border-b": (y)=>v("borderOpacity") ? (0, f.default)({
                            color: y,
                            property: "border-bottom-color",
                            variable: "--tw-border-opacity"
                        }) : {
                            "border-bottom-color": (0, u.default)(y)
                        },
                    "border-l": (y)=>v("borderOpacity") ? (0, f.default)({
                            color: y,
                            property: "border-left-color",
                            variable: "--tw-border-opacity"
                        }) : {
                            "border-left-color": (0, u.default)(y)
                        }
                }, {
                    values: (({ DEFAULT: y, ...R })=>R)((0, o.default)(g("borderColor"))),
                    type: [
                        "color",
                        "any"
                    ]
                });
            },
            borderOpacity: (0, l.default)("borderOpacity", [
                [
                    "border-opacity",
                    [
                        "--tw-border-opacity"
                    ]
                ]
            ]),
            backgroundColor: ({ matchUtilities: d, theme: g, corePlugins: v })=>{
                d({
                    bg: (y)=>v("backgroundOpacity") ? (0, f.default)({
                            color: y,
                            property: "background-color",
                            variable: "--tw-bg-opacity"
                        }) : {
                            "background-color": (0, u.default)(y)
                        }
                }, {
                    values: (0, o.default)(g("backgroundColor")),
                    type: [
                        "color",
                        "any"
                    ]
                });
            },
            backgroundOpacity: (0, l.default)("backgroundOpacity", [
                [
                    "bg-opacity",
                    [
                        "--tw-bg-opacity"
                    ]
                ]
            ]),
            backgroundImage: (0, l.default)("backgroundImage", [
                [
                    "bg",
                    [
                        "background-image"
                    ]
                ]
            ], {
                type: [
                    "lookup",
                    "image",
                    "url"
                ]
            }),
            gradientColorStops: /* @__PURE__ */ (()=>{
                function d(g) {
                    return (0, f.withAlphaValue)(g, 0, "rgb(255 255 255 / 0)");
                }
                return function({ matchUtilities: g, theme: v, addDefaults: y }) {
                    y("gradient-color-stops", {
                        "--tw-gradient-from-position": " ",
                        "--tw-gradient-via-position": " ",
                        "--tw-gradient-to-position": " "
                    });
                    let R = {
                        values: (0, o.default)(v("gradientColorStops")),
                        type: [
                            "color",
                            "any"
                        ]
                    }, F = {
                        values: v("gradientColorStopPositions"),
                        type: [
                            "length",
                            "percentage"
                        ]
                    };
                    g({
                        from: ($)=>{
                            let z = d($);
                            return {
                                "@defaults gradient-color-stops": {},
                                "--tw-gradient-from": `${(0, u.default)($)} var(--tw-gradient-from-position)`,
                                "--tw-gradient-to": `${z} var(--tw-gradient-to-position)`,
                                "--tw-gradient-stops": "var(--tw-gradient-from), var(--tw-gradient-to)"
                            };
                        }
                    }, R), g({
                        from: ($)=>({
                                "--tw-gradient-from-position": $
                            })
                    }, F), g({
                        via: ($)=>{
                            let z = d($);
                            return {
                                "@defaults gradient-color-stops": {},
                                "--tw-gradient-to": `${z}  var(--tw-gradient-to-position)`,
                                "--tw-gradient-stops": `var(--tw-gradient-from), ${(0, u.default)($)} var(--tw-gradient-via-position), var(--tw-gradient-to)`
                            };
                        }
                    }, R), g({
                        via: ($)=>({
                                "--tw-gradient-via-position": $
                            })
                    }, F), g({
                        to: ($)=>({
                                "@defaults gradient-color-stops": {},
                                "--tw-gradient-to": `${(0, u.default)($)} var(--tw-gradient-to-position)`
                            })
                    }, R), g({
                        to: ($)=>({
                                "--tw-gradient-to-position": $
                            })
                    }, F);
                };
            })(),
            boxDecorationBreak: ({ addUtilities: d })=>{
                d({
                    ".decoration-slice": {
                        "box-decoration-break": "slice"
                    },
                    ".decoration-clone": {
                        "box-decoration-break": "clone"
                    },
                    ".box-decoration-slice": {
                        "box-decoration-break": "slice"
                    },
                    ".box-decoration-clone": {
                        "box-decoration-break": "clone"
                    }
                });
            },
            backgroundSize: (0, l.default)("backgroundSize", [
                [
                    "bg",
                    [
                        "background-size"
                    ]
                ]
            ], {
                type: [
                    "lookup",
                    "length",
                    "percentage",
                    "size"
                ]
            }),
            backgroundAttachment: ({ addUtilities: d })=>{
                d({
                    ".bg-fixed": {
                        "background-attachment": "fixed"
                    },
                    ".bg-local": {
                        "background-attachment": "local"
                    },
                    ".bg-scroll": {
                        "background-attachment": "scroll"
                    }
                });
            },
            backgroundClip: ({ addUtilities: d })=>{
                d({
                    ".bg-clip-border": {
                        "background-clip": "border-box"
                    },
                    ".bg-clip-padding": {
                        "background-clip": "padding-box"
                    },
                    ".bg-clip-content": {
                        "background-clip": "content-box"
                    },
                    ".bg-clip-text": {
                        "background-clip": "text"
                    }
                });
            },
            backgroundPosition: (0, l.default)("backgroundPosition", [
                [
                    "bg",
                    [
                        "background-position"
                    ]
                ]
            ], {
                type: [
                    "lookup",
                    [
                        "position",
                        {
                            preferOnConflict: !0
                        }
                    ]
                ]
            }),
            backgroundRepeat: ({ addUtilities: d })=>{
                d({
                    ".bg-repeat": {
                        "background-repeat": "repeat"
                    },
                    ".bg-no-repeat": {
                        "background-repeat": "no-repeat"
                    },
                    ".bg-repeat-x": {
                        "background-repeat": "repeat-x"
                    },
                    ".bg-repeat-y": {
                        "background-repeat": "repeat-y"
                    },
                    ".bg-repeat-round": {
                        "background-repeat": "round"
                    },
                    ".bg-repeat-space": {
                        "background-repeat": "space"
                    }
                });
            },
            backgroundOrigin: ({ addUtilities: d })=>{
                d({
                    ".bg-origin-border": {
                        "background-origin": "border-box"
                    },
                    ".bg-origin-padding": {
                        "background-origin": "padding-box"
                    },
                    ".bg-origin-content": {
                        "background-origin": "content-box"
                    }
                });
            },
            fill: ({ matchUtilities: d, theme: g })=>{
                d({
                    fill: (v)=>({
                            fill: (0, u.default)(v)
                        })
                }, {
                    values: (0, o.default)(g("fill")),
                    type: [
                        "color",
                        "any"
                    ]
                });
            },
            stroke: ({ matchUtilities: d, theme: g })=>{
                d({
                    stroke: (v)=>({
                            stroke: (0, u.default)(v)
                        })
                }, {
                    values: (0, o.default)(g("stroke")),
                    type: [
                        "color",
                        "url",
                        "any"
                    ]
                });
            },
            strokeWidth: (0, l.default)("strokeWidth", [
                [
                    "stroke",
                    [
                        "stroke-width"
                    ]
                ]
            ], {
                type: [
                    "length",
                    "number",
                    "percentage"
                ]
            }),
            objectFit: ({ addUtilities: d })=>{
                d({
                    ".object-contain": {
                        "object-fit": "contain"
                    },
                    ".object-cover": {
                        "object-fit": "cover"
                    },
                    ".object-fill": {
                        "object-fit": "fill"
                    },
                    ".object-none": {
                        "object-fit": "none"
                    },
                    ".object-scale-down": {
                        "object-fit": "scale-down"
                    }
                });
            },
            objectPosition: (0, l.default)("objectPosition", [
                [
                    "object",
                    [
                        "object-position"
                    ]
                ]
            ]),
            padding: (0, l.default)("padding", [
                [
                    "p",
                    [
                        "padding"
                    ]
                ],
                [
                    [
                        "px",
                        [
                            "padding-left",
                            "padding-right"
                        ]
                    ],
                    [
                        "py",
                        [
                            "padding-top",
                            "padding-bottom"
                        ]
                    ]
                ],
                [
                    [
                        "ps",
                        [
                            "padding-inline-start"
                        ]
                    ],
                    [
                        "pe",
                        [
                            "padding-inline-end"
                        ]
                    ],
                    [
                        "pt",
                        [
                            "padding-top"
                        ]
                    ],
                    [
                        "pr",
                        [
                            "padding-right"
                        ]
                    ],
                    [
                        "pb",
                        [
                            "padding-bottom"
                        ]
                    ],
                    [
                        "pl",
                        [
                            "padding-left"
                        ]
                    ]
                ]
            ]),
            textAlign: ({ addUtilities: d })=>{
                d({
                    ".text-left": {
                        "text-align": "left"
                    },
                    ".text-center": {
                        "text-align": "center"
                    },
                    ".text-right": {
                        "text-align": "right"
                    },
                    ".text-justify": {
                        "text-align": "justify"
                    },
                    ".text-start": {
                        "text-align": "start"
                    },
                    ".text-end": {
                        "text-align": "end"
                    }
                });
            },
            textIndent: (0, l.default)("textIndent", [
                [
                    "indent",
                    [
                        "text-indent"
                    ]
                ]
            ], {
                supportsNegativeValues: !0
            }),
            verticalAlign: ({ addUtilities: d, matchUtilities: g })=>{
                d({
                    ".align-baseline": {
                        "vertical-align": "baseline"
                    },
                    ".align-top": {
                        "vertical-align": "top"
                    },
                    ".align-middle": {
                        "vertical-align": "middle"
                    },
                    ".align-bottom": {
                        "vertical-align": "bottom"
                    },
                    ".align-text-top": {
                        "vertical-align": "text-top"
                    },
                    ".align-text-bottom": {
                        "vertical-align": "text-bottom"
                    },
                    ".align-sub": {
                        "vertical-align": "sub"
                    },
                    ".align-super": {
                        "vertical-align": "super"
                    }
                }), g({
                    align: (v)=>({
                            "vertical-align": v
                        })
                });
            },
            fontFamily: ({ matchUtilities: d, theme: g })=>{
                d({
                    font: (v)=>{
                        let [y, R = {}] = Array.isArray(v) && (0, p.default)(v[1]) ? v : [
                            v
                        ], { fontFeatureSettings: F, fontVariationSettings: $ } = R;
                        return {
                            "font-family": Array.isArray(y) ? y.join(", ") : y,
                            ...F === void 0 ? {} : {
                                "font-feature-settings": F
                            },
                            ...$ === void 0 ? {} : {
                                "font-variation-settings": $
                            }
                        };
                    }
                }, {
                    values: g("fontFamily"),
                    type: [
                        "lookup",
                        "generic-name",
                        "family-name"
                    ]
                });
            },
            fontSize: ({ matchUtilities: d, theme: g })=>{
                d({
                    text: (v, { modifier: y })=>{
                        let [R, F] = Array.isArray(v) ? v : [
                            v
                        ];
                        if (y) return {
                            "font-size": R,
                            "line-height": y
                        };
                        let { lineHeight: $, letterSpacing: z, fontWeight: j } = (0, p.default)(F) ? F : {
                            lineHeight: F
                        };
                        return {
                            "font-size": R,
                            ...$ === void 0 ? {} : {
                                "line-height": $
                            },
                            ...z === void 0 ? {} : {
                                "letter-spacing": z
                            },
                            ...j === void 0 ? {} : {
                                "font-weight": j
                            }
                        };
                    }
                }, {
                    values: g("fontSize"),
                    modifiers: g("lineHeight"),
                    type: [
                        "absolute-size",
                        "relative-size",
                        "length",
                        "percentage"
                    ]
                });
            },
            fontWeight: (0, l.default)("fontWeight", [
                [
                    "font",
                    [
                        "fontWeight"
                    ]
                ]
            ], {
                type: [
                    "lookup",
                    "number",
                    "any"
                ]
            }),
            textTransform: ({ addUtilities: d })=>{
                d({
                    ".uppercase": {
                        "text-transform": "uppercase"
                    },
                    ".lowercase": {
                        "text-transform": "lowercase"
                    },
                    ".capitalize": {
                        "text-transform": "capitalize"
                    },
                    ".normal-case": {
                        "text-transform": "none"
                    }
                });
            },
            fontStyle: ({ addUtilities: d })=>{
                d({
                    ".italic": {
                        "font-style": "italic"
                    },
                    ".not-italic": {
                        "font-style": "normal"
                    }
                });
            },
            fontVariantNumeric: ({ addDefaults: d, addUtilities: g })=>{
                let v = "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)";
                d("font-variant-numeric", {
                    "--tw-ordinal": " ",
                    "--tw-slashed-zero": " ",
                    "--tw-numeric-figure": " ",
                    "--tw-numeric-spacing": " ",
                    "--tw-numeric-fraction": " "
                }), g({
                    ".normal-nums": {
                        "font-variant-numeric": "normal"
                    },
                    ".ordinal": {
                        "@defaults font-variant-numeric": {},
                        "--tw-ordinal": "ordinal",
                        "font-variant-numeric": v
                    },
                    ".slashed-zero": {
                        "@defaults font-variant-numeric": {},
                        "--tw-slashed-zero": "slashed-zero",
                        "font-variant-numeric": v
                    },
                    ".lining-nums": {
                        "@defaults font-variant-numeric": {},
                        "--tw-numeric-figure": "lining-nums",
                        "font-variant-numeric": v
                    },
                    ".oldstyle-nums": {
                        "@defaults font-variant-numeric": {},
                        "--tw-numeric-figure": "oldstyle-nums",
                        "font-variant-numeric": v
                    },
                    ".proportional-nums": {
                        "@defaults font-variant-numeric": {},
                        "--tw-numeric-spacing": "proportional-nums",
                        "font-variant-numeric": v
                    },
                    ".tabular-nums": {
                        "@defaults font-variant-numeric": {},
                        "--tw-numeric-spacing": "tabular-nums",
                        "font-variant-numeric": v
                    },
                    ".diagonal-fractions": {
                        "@defaults font-variant-numeric": {},
                        "--tw-numeric-fraction": "diagonal-fractions",
                        "font-variant-numeric": v
                    },
                    ".stacked-fractions": {
                        "@defaults font-variant-numeric": {},
                        "--tw-numeric-fraction": "stacked-fractions",
                        "font-variant-numeric": v
                    }
                });
            },
            lineHeight: (0, l.default)("lineHeight", [
                [
                    "leading",
                    [
                        "lineHeight"
                    ]
                ]
            ]),
            letterSpacing: (0, l.default)("letterSpacing", [
                [
                    "tracking",
                    [
                        "letterSpacing"
                    ]
                ]
            ], {
                supportsNegativeValues: !0
            }),
            textColor: ({ matchUtilities: d, theme: g, corePlugins: v })=>{
                d({
                    text: (y)=>v("textOpacity") ? (0, f.default)({
                            color: y,
                            property: "color",
                            variable: "--tw-text-opacity"
                        }) : {
                            color: (0, u.default)(y)
                        }
                }, {
                    values: (0, o.default)(g("textColor")),
                    type: [
                        "color",
                        "any"
                    ]
                });
            },
            textOpacity: (0, l.default)("textOpacity", [
                [
                    "text-opacity",
                    [
                        "--tw-text-opacity"
                    ]
                ]
            ]),
            textDecoration: ({ addUtilities: d })=>{
                d({
                    ".underline": {
                        "text-decoration-line": "underline"
                    },
                    ".overline": {
                        "text-decoration-line": "overline"
                    },
                    ".line-through": {
                        "text-decoration-line": "line-through"
                    },
                    ".no-underline": {
                        "text-decoration-line": "none"
                    }
                });
            },
            textDecorationColor: ({ matchUtilities: d, theme: g })=>{
                d({
                    decoration: (v)=>({
                            "text-decoration-color": (0, u.default)(v)
                        })
                }, {
                    values: (0, o.default)(g("textDecorationColor")),
                    type: [
                        "color",
                        "any"
                    ]
                });
            },
            textDecorationStyle: ({ addUtilities: d })=>{
                d({
                    ".decoration-solid": {
                        "text-decoration-style": "solid"
                    },
                    ".decoration-double": {
                        "text-decoration-style": "double"
                    },
                    ".decoration-dotted": {
                        "text-decoration-style": "dotted"
                    },
                    ".decoration-dashed": {
                        "text-decoration-style": "dashed"
                    },
                    ".decoration-wavy": {
                        "text-decoration-style": "wavy"
                    }
                });
            },
            textDecorationThickness: (0, l.default)("textDecorationThickness", [
                [
                    "decoration",
                    [
                        "text-decoration-thickness"
                    ]
                ]
            ], {
                type: [
                    "length",
                    "percentage"
                ]
            }),
            textUnderlineOffset: (0, l.default)("textUnderlineOffset", [
                [
                    "underline-offset",
                    [
                        "text-underline-offset"
                    ]
                ]
            ], {
                type: [
                    "length",
                    "percentage",
                    "any"
                ]
            }),
            fontSmoothing: ({ addUtilities: d })=>{
                d({
                    ".antialiased": {
                        "-webkit-font-smoothing": "antialiased",
                        "-moz-osx-font-smoothing": "grayscale"
                    },
                    ".subpixel-antialiased": {
                        "-webkit-font-smoothing": "auto",
                        "-moz-osx-font-smoothing": "auto"
                    }
                });
            },
            placeholderColor: ({ matchUtilities: d, theme: g, corePlugins: v })=>{
                d({
                    placeholder: (y)=>v("placeholderOpacity") ? {
                            "&::placeholder": (0, f.default)({
                                color: y,
                                property: "color",
                                variable: "--tw-placeholder-opacity"
                            })
                        } : {
                            "&::placeholder": {
                                color: (0, u.default)(y)
                            }
                        }
                }, {
                    values: (0, o.default)(g("placeholderColor")),
                    type: [
                        "color",
                        "any"
                    ]
                });
            },
            placeholderOpacity: ({ matchUtilities: d, theme: g })=>{
                d({
                    "placeholder-opacity": (v)=>({
                            "&::placeholder": {
                                "--tw-placeholder-opacity": v
                            }
                        })
                }, {
                    values: g("placeholderOpacity")
                });
            },
            caretColor: ({ matchUtilities: d, theme: g })=>{
                d({
                    caret: (v)=>({
                            "caret-color": (0, u.default)(v)
                        })
                }, {
                    values: (0, o.default)(g("caretColor")),
                    type: [
                        "color",
                        "any"
                    ]
                });
            },
            accentColor: ({ matchUtilities: d, theme: g })=>{
                d({
                    accent: (v)=>({
                            "accent-color": (0, u.default)(v)
                        })
                }, {
                    values: (0, o.default)(g("accentColor")),
                    type: [
                        "color",
                        "any"
                    ]
                });
            },
            opacity: (0, l.default)("opacity", [
                [
                    "opacity",
                    [
                        "opacity"
                    ]
                ]
            ]),
            backgroundBlendMode: ({ addUtilities: d })=>{
                d({
                    ".bg-blend-normal": {
                        "background-blend-mode": "normal"
                    },
                    ".bg-blend-multiply": {
                        "background-blend-mode": "multiply"
                    },
                    ".bg-blend-screen": {
                        "background-blend-mode": "screen"
                    },
                    ".bg-blend-overlay": {
                        "background-blend-mode": "overlay"
                    },
                    ".bg-blend-darken": {
                        "background-blend-mode": "darken"
                    },
                    ".bg-blend-lighten": {
                        "background-blend-mode": "lighten"
                    },
                    ".bg-blend-color-dodge": {
                        "background-blend-mode": "color-dodge"
                    },
                    ".bg-blend-color-burn": {
                        "background-blend-mode": "color-burn"
                    },
                    ".bg-blend-hard-light": {
                        "background-blend-mode": "hard-light"
                    },
                    ".bg-blend-soft-light": {
                        "background-blend-mode": "soft-light"
                    },
                    ".bg-blend-difference": {
                        "background-blend-mode": "difference"
                    },
                    ".bg-blend-exclusion": {
                        "background-blend-mode": "exclusion"
                    },
                    ".bg-blend-hue": {
                        "background-blend-mode": "hue"
                    },
                    ".bg-blend-saturation": {
                        "background-blend-mode": "saturation"
                    },
                    ".bg-blend-color": {
                        "background-blend-mode": "color"
                    },
                    ".bg-blend-luminosity": {
                        "background-blend-mode": "luminosity"
                    }
                });
            },
            mixBlendMode: ({ addUtilities: d })=>{
                d({
                    ".mix-blend-normal": {
                        "mix-blend-mode": "normal"
                    },
                    ".mix-blend-multiply": {
                        "mix-blend-mode": "multiply"
                    },
                    ".mix-blend-screen": {
                        "mix-blend-mode": "screen"
                    },
                    ".mix-blend-overlay": {
                        "mix-blend-mode": "overlay"
                    },
                    ".mix-blend-darken": {
                        "mix-blend-mode": "darken"
                    },
                    ".mix-blend-lighten": {
                        "mix-blend-mode": "lighten"
                    },
                    ".mix-blend-color-dodge": {
                        "mix-blend-mode": "color-dodge"
                    },
                    ".mix-blend-color-burn": {
                        "mix-blend-mode": "color-burn"
                    },
                    ".mix-blend-hard-light": {
                        "mix-blend-mode": "hard-light"
                    },
                    ".mix-blend-soft-light": {
                        "mix-blend-mode": "soft-light"
                    },
                    ".mix-blend-difference": {
                        "mix-blend-mode": "difference"
                    },
                    ".mix-blend-exclusion": {
                        "mix-blend-mode": "exclusion"
                    },
                    ".mix-blend-hue": {
                        "mix-blend-mode": "hue"
                    },
                    ".mix-blend-saturation": {
                        "mix-blend-mode": "saturation"
                    },
                    ".mix-blend-color": {
                        "mix-blend-mode": "color"
                    },
                    ".mix-blend-luminosity": {
                        "mix-blend-mode": "luminosity"
                    },
                    ".mix-blend-plus-darker": {
                        "mix-blend-mode": "plus-darker"
                    },
                    ".mix-blend-plus-lighter": {
                        "mix-blend-mode": "plus-lighter"
                    }
                });
            },
            boxShadow: (()=>{
                let d = (0, _.default)("boxShadow"), g = [
                    "var(--tw-ring-offset-shadow, 0 0 #0000)",
                    "var(--tw-ring-shadow, 0 0 #0000)",
                    "var(--tw-shadow)"
                ].join(", ");
                return function({ matchUtilities: v, addDefaults: y, theme: R }) {
                    y("box-shadow", {
                        "--tw-ring-offset-shadow": "0 0 #0000",
                        "--tw-ring-shadow": "0 0 #0000",
                        "--tw-shadow": "0 0 #0000",
                        "--tw-shadow-colored": "0 0 #0000"
                    }), v({
                        shadow: (F)=>{
                            F = d(F);
                            let $ = (0, C.parseBoxShadowValue)(F);
                            for (let z of $)z.valid && (z.color = "var(--tw-shadow-color)");
                            return {
                                "@defaults box-shadow": {},
                                "--tw-shadow": F === "none" ? "0 0 #0000" : F,
                                "--tw-shadow-colored": F === "none" ? "0 0 #0000" : (0, C.formatBoxShadowValue)($),
                                "box-shadow": g
                            };
                        }
                    }, {
                        values: R("boxShadow"),
                        type: [
                            "shadow"
                        ]
                    });
                };
            })(),
            boxShadowColor: ({ matchUtilities: d, theme: g })=>{
                d({
                    shadow: (v)=>({
                            "--tw-shadow-color": (0, u.default)(v),
                            "--tw-shadow": "var(--tw-shadow-colored)"
                        })
                }, {
                    values: (0, o.default)(g("boxShadowColor")),
                    type: [
                        "color",
                        "any"
                    ]
                });
            },
            outlineStyle: ({ addUtilities: d })=>{
                d({
                    ".outline-none": {
                        outline: "2px solid transparent",
                        "outline-offset": "2px"
                    },
                    ".outline": {
                        "outline-style": "solid"
                    },
                    ".outline-dashed": {
                        "outline-style": "dashed"
                    },
                    ".outline-dotted": {
                        "outline-style": "dotted"
                    },
                    ".outline-double": {
                        "outline-style": "double"
                    }
                });
            },
            outlineWidth: (0, l.default)("outlineWidth", [
                [
                    "outline",
                    [
                        "outline-width"
                    ]
                ]
            ], {
                type: [
                    "length",
                    "number",
                    "percentage"
                ]
            }),
            outlineOffset: (0, l.default)("outlineOffset", [
                [
                    "outline-offset",
                    [
                        "outline-offset"
                    ]
                ]
            ], {
                type: [
                    "length",
                    "number",
                    "percentage",
                    "any"
                ],
                supportsNegativeValues: !0
            }),
            outlineColor: ({ matchUtilities: d, theme: g })=>{
                d({
                    outline: (v)=>({
                            "outline-color": (0, u.default)(v)
                        })
                }, {
                    values: (0, o.default)(g("outlineColor")),
                    type: [
                        "color",
                        "any"
                    ]
                });
            },
            ringWidth: ({ matchUtilities: d, addDefaults: g, addUtilities: v, theme: y, config: R })=>{
                let F = (()=>{
                    var $, z;
                    if ((0, k.flagEnabled)(R(), "respectDefaultRingColorOpacity")) return y("ringColor.DEFAULT");
                    let j = y("ringOpacity.DEFAULT", "0.5");
                    return !(($ = y("ringColor")) === null || $ === void 0) && $.DEFAULT ? (0, f.withAlphaValue)((z = y("ringColor")) === null || z === void 0 ? void 0 : z.DEFAULT, j, `rgb(147 197 253 / ${j})`) : `rgb(147 197 253 / ${j})`;
                })();
                g("ring-width", {
                    "--tw-ring-inset": " ",
                    "--tw-ring-offset-width": y("ringOffsetWidth.DEFAULT", "0px"),
                    "--tw-ring-offset-color": y("ringOffsetColor.DEFAULT", "#fff"),
                    "--tw-ring-color": F,
                    "--tw-ring-offset-shadow": "0 0 #0000",
                    "--tw-ring-shadow": "0 0 #0000",
                    "--tw-shadow": "0 0 #0000",
                    "--tw-shadow-colored": "0 0 #0000"
                }), d({
                    ring: ($)=>({
                            "@defaults ring-width": {},
                            "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
                            "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${$} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
                            "box-shadow": [
                                "var(--tw-ring-offset-shadow)",
                                "var(--tw-ring-shadow)",
                                "var(--tw-shadow, 0 0 #0000)"
                            ].join(", ")
                        })
                }, {
                    values: y("ringWidth"),
                    type: "length"
                }), v({
                    ".ring-inset": {
                        "@defaults ring-width": {},
                        "--tw-ring-inset": "inset"
                    }
                });
            },
            ringColor: ({ matchUtilities: d, theme: g, corePlugins: v })=>{
                d({
                    ring: (y)=>v("ringOpacity") ? (0, f.default)({
                            color: y,
                            property: "--tw-ring-color",
                            variable: "--tw-ring-opacity"
                        }) : {
                            "--tw-ring-color": (0, u.default)(y)
                        }
                }, {
                    values: Object.fromEntries(Object.entries((0, o.default)(g("ringColor"))).filter(([y])=>y !== "DEFAULT")),
                    type: [
                        "color",
                        "any"
                    ]
                });
            },
            ringOpacity: (d)=>{
                let { config: g } = d;
                return (0, l.default)("ringOpacity", [
                    [
                        "ring-opacity",
                        [
                            "--tw-ring-opacity"
                        ]
                    ]
                ], {
                    filterDefault: !(0, k.flagEnabled)(g(), "respectDefaultRingColorOpacity")
                })(d);
            },
            ringOffsetWidth: (0, l.default)("ringOffsetWidth", [
                [
                    "ring-offset",
                    [
                        "--tw-ring-offset-width"
                    ]
                ]
            ], {
                type: "length"
            }),
            ringOffsetColor: ({ matchUtilities: d, theme: g })=>{
                d({
                    "ring-offset": (v)=>({
                            "--tw-ring-offset-color": (0, u.default)(v)
                        })
                }, {
                    values: (0, o.default)(g("ringOffsetColor")),
                    type: [
                        "color",
                        "any"
                    ]
                });
            },
            blur: ({ matchUtilities: d, theme: g })=>{
                d({
                    blur: (v)=>({
                            "--tw-blur": v.trim() === "" ? " " : `blur(${v})`,
                            "@defaults filter": {},
                            filter: N
                        })
                }, {
                    values: g("blur")
                });
            },
            brightness: ({ matchUtilities: d, theme: g })=>{
                d({
                    brightness: (v)=>({
                            "--tw-brightness": `brightness(${v})`,
                            "@defaults filter": {},
                            filter: N
                        })
                }, {
                    values: g("brightness")
                });
            },
            contrast: ({ matchUtilities: d, theme: g })=>{
                d({
                    contrast: (v)=>({
                            "--tw-contrast": `contrast(${v})`,
                            "@defaults filter": {},
                            filter: N
                        })
                }, {
                    values: g("contrast")
                });
            },
            dropShadow: ({ matchUtilities: d, theme: g })=>{
                d({
                    "drop-shadow": (v)=>({
                            "--tw-drop-shadow": Array.isArray(v) ? v.map((y)=>`drop-shadow(${y})`).join(" ") : `drop-shadow(${v})`,
                            "@defaults filter": {},
                            filter: N
                        })
                }, {
                    values: g("dropShadow")
                });
            },
            grayscale: ({ matchUtilities: d, theme: g })=>{
                d({
                    grayscale: (v)=>({
                            "--tw-grayscale": `grayscale(${v})`,
                            "@defaults filter": {},
                            filter: N
                        })
                }, {
                    values: g("grayscale")
                });
            },
            hueRotate: ({ matchUtilities: d, theme: g })=>{
                d({
                    "hue-rotate": (v)=>({
                            "--tw-hue-rotate": `hue-rotate(${v})`,
                            "@defaults filter": {},
                            filter: N
                        })
                }, {
                    values: g("hueRotate"),
                    supportsNegativeValues: !0
                });
            },
            invert: ({ matchUtilities: d, theme: g })=>{
                d({
                    invert: (v)=>({
                            "--tw-invert": `invert(${v})`,
                            "@defaults filter": {},
                            filter: N
                        })
                }, {
                    values: g("invert")
                });
            },
            saturate: ({ matchUtilities: d, theme: g })=>{
                d({
                    saturate: (v)=>({
                            "--tw-saturate": `saturate(${v})`,
                            "@defaults filter": {},
                            filter: N
                        })
                }, {
                    values: g("saturate")
                });
            },
            sepia: ({ matchUtilities: d, theme: g })=>{
                d({
                    sepia: (v)=>({
                            "--tw-sepia": `sepia(${v})`,
                            "@defaults filter": {},
                            filter: N
                        })
                }, {
                    values: g("sepia")
                });
            },
            filter: ({ addDefaults: d, addUtilities: g })=>{
                d("filter", {
                    "--tw-blur": " ",
                    "--tw-brightness": " ",
                    "--tw-contrast": " ",
                    "--tw-grayscale": " ",
                    "--tw-hue-rotate": " ",
                    "--tw-invert": " ",
                    "--tw-saturate": " ",
                    "--tw-sepia": " ",
                    "--tw-drop-shadow": " "
                }), g({
                    ".filter": {
                        "@defaults filter": {},
                        filter: N
                    },
                    ".filter-none": {
                        filter: "none"
                    }
                });
            },
            backdropBlur: ({ matchUtilities: d, theme: g })=>{
                d({
                    "backdrop-blur": (v)=>({
                            "--tw-backdrop-blur": v.trim() === "" ? " " : `blur(${v})`,
                            "@defaults backdrop-filter": {},
                            "-webkit-backdrop-filter": T,
                            "backdrop-filter": T
                        })
                }, {
                    values: g("backdropBlur")
                });
            },
            backdropBrightness: ({ matchUtilities: d, theme: g })=>{
                d({
                    "backdrop-brightness": (v)=>({
                            "--tw-backdrop-brightness": `brightness(${v})`,
                            "@defaults backdrop-filter": {},
                            "-webkit-backdrop-filter": T,
                            "backdrop-filter": T
                        })
                }, {
                    values: g("backdropBrightness")
                });
            },
            backdropContrast: ({ matchUtilities: d, theme: g })=>{
                d({
                    "backdrop-contrast": (v)=>({
                            "--tw-backdrop-contrast": `contrast(${v})`,
                            "@defaults backdrop-filter": {},
                            "-webkit-backdrop-filter": T,
                            "backdrop-filter": T
                        })
                }, {
                    values: g("backdropContrast")
                });
            },
            backdropGrayscale: ({ matchUtilities: d, theme: g })=>{
                d({
                    "backdrop-grayscale": (v)=>({
                            "--tw-backdrop-grayscale": `grayscale(${v})`,
                            "@defaults backdrop-filter": {},
                            "-webkit-backdrop-filter": T,
                            "backdrop-filter": T
                        })
                }, {
                    values: g("backdropGrayscale")
                });
            },
            backdropHueRotate: ({ matchUtilities: d, theme: g })=>{
                d({
                    "backdrop-hue-rotate": (v)=>({
                            "--tw-backdrop-hue-rotate": `hue-rotate(${v})`,
                            "@defaults backdrop-filter": {},
                            "-webkit-backdrop-filter": T,
                            "backdrop-filter": T
                        })
                }, {
                    values: g("backdropHueRotate"),
                    supportsNegativeValues: !0
                });
            },
            backdropInvert: ({ matchUtilities: d, theme: g })=>{
                d({
                    "backdrop-invert": (v)=>({
                            "--tw-backdrop-invert": `invert(${v})`,
                            "@defaults backdrop-filter": {},
                            "-webkit-backdrop-filter": T,
                            "backdrop-filter": T
                        })
                }, {
                    values: g("backdropInvert")
                });
            },
            backdropOpacity: ({ matchUtilities: d, theme: g })=>{
                d({
                    "backdrop-opacity": (v)=>({
                            "--tw-backdrop-opacity": `opacity(${v})`,
                            "@defaults backdrop-filter": {},
                            "-webkit-backdrop-filter": T,
                            "backdrop-filter": T
                        })
                }, {
                    values: g("backdropOpacity")
                });
            },
            backdropSaturate: ({ matchUtilities: d, theme: g })=>{
                d({
                    "backdrop-saturate": (v)=>({
                            "--tw-backdrop-saturate": `saturate(${v})`,
                            "@defaults backdrop-filter": {},
                            "-webkit-backdrop-filter": T,
                            "backdrop-filter": T
                        })
                }, {
                    values: g("backdropSaturate")
                });
            },
            backdropSepia: ({ matchUtilities: d, theme: g })=>{
                d({
                    "backdrop-sepia": (v)=>({
                            "--tw-backdrop-sepia": `sepia(${v})`,
                            "@defaults backdrop-filter": {},
                            "-webkit-backdrop-filter": T,
                            "backdrop-filter": T
                        })
                }, {
                    values: g("backdropSepia")
                });
            },
            backdropFilter: ({ addDefaults: d, addUtilities: g })=>{
                d("backdrop-filter", {
                    "--tw-backdrop-blur": " ",
                    "--tw-backdrop-brightness": " ",
                    "--tw-backdrop-contrast": " ",
                    "--tw-backdrop-grayscale": " ",
                    "--tw-backdrop-hue-rotate": " ",
                    "--tw-backdrop-invert": " ",
                    "--tw-backdrop-opacity": " ",
                    "--tw-backdrop-saturate": " ",
                    "--tw-backdrop-sepia": " "
                }), g({
                    ".backdrop-filter": {
                        "@defaults backdrop-filter": {},
                        "-webkit-backdrop-filter": T,
                        "backdrop-filter": T
                    },
                    ".backdrop-filter-none": {
                        "-webkit-backdrop-filter": "none",
                        "backdrop-filter": "none"
                    }
                });
            },
            transitionProperty: ({ matchUtilities: d, theme: g })=>{
                let v = g("transitionTimingFunction.DEFAULT"), y = g("transitionDuration.DEFAULT");
                d({
                    transition: (R)=>({
                            "transition-property": R,
                            ...R === "none" ? {} : {
                                "transition-timing-function": v,
                                "transition-duration": y
                            }
                        })
                }, {
                    values: g("transitionProperty")
                });
            },
            transitionDelay: (0, l.default)("transitionDelay", [
                [
                    "delay",
                    [
                        "transitionDelay"
                    ]
                ]
            ]),
            transitionDuration: (0, l.default)("transitionDuration", [
                [
                    "duration",
                    [
                        "transitionDuration"
                    ]
                ]
            ], {
                filterDefault: !0
            }),
            transitionTimingFunction: (0, l.default)("transitionTimingFunction", [
                [
                    "ease",
                    [
                        "transitionTimingFunction"
                    ]
                ]
            ], {
                filterDefault: !0
            }),
            willChange: (0, l.default)("willChange", [
                [
                    "will-change",
                    [
                        "will-change"
                    ]
                ]
            ]),
            contain: ({ addDefaults: d, addUtilities: g })=>{
                let v = "var(--tw-contain-size) var(--tw-contain-layout) var(--tw-contain-paint) var(--tw-contain-style)";
                d("contain", {
                    "--tw-contain-size": " ",
                    "--tw-contain-layout": " ",
                    "--tw-contain-paint": " ",
                    "--tw-contain-style": " "
                }), g({
                    ".contain-none": {
                        contain: "none"
                    },
                    ".contain-content": {
                        contain: "content"
                    },
                    ".contain-strict": {
                        contain: "strict"
                    },
                    ".contain-size": {
                        "@defaults contain": {},
                        "--tw-contain-size": "size",
                        contain: v
                    },
                    ".contain-inline-size": {
                        "@defaults contain": {},
                        "--tw-contain-size": "inline-size",
                        contain: v
                    },
                    ".contain-layout": {
                        "@defaults contain": {},
                        "--tw-contain-layout": "layout",
                        contain: v
                    },
                    ".contain-paint": {
                        "@defaults contain": {},
                        "--tw-contain-paint": "paint",
                        contain: v
                    },
                    ".contain-style": {
                        "@defaults contain": {},
                        "--tw-contain-style": "style",
                        contain: v
                    }
                });
            },
            content: (0, l.default)("content", [
                [
                    "content",
                    [
                        "--tw-content",
                        [
                            "content",
                            "var(--tw-content)"
                        ]
                    ]
                ]
            ]),
            forcedColorAdjust: ({ addUtilities: d })=>{
                d({
                    ".forced-color-adjust-auto": {
                        "forced-color-adjust": "auto"
                    },
                    ".forced-color-adjust-none": {
                        "forced-color-adjust": "none"
                    }
                });
            }
        };
    }(Rr)), Rr;
}
var Jn = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, // Arbitrary values must contain balanced brackets (), [] and {}. Escaped
    // values don't count, and brackets inside quotes also don't count.
    //
    // E.g.: w-[this-is]w-[weird-and-invalid]
    // E.g.: w-[this-is\\]w-\\[weird-but-valid]
    // E.g.: content-['this-is-also-valid]-weirdly-enough']
    "default", {
        enumerable: !0,
        get: function() {
            return n;
        }
    });
    let e = /* @__PURE__ */ new Map([
        [
            "{",
            "}"
        ],
        [
            "[",
            "]"
        ],
        [
            "(",
            ")"
        ]
    ]), t = new Map(Array.from(e.entries()).map(([l, i])=>[
            i,
            l
        ])), r = /* @__PURE__ */ new Set([
        '"',
        "'",
        "`"
    ]);
    function n(l) {
        let i = [], c = !1;
        for(let a = 0; a < l.length; a++){
            let o = l[a];
            if (o === ":" && !c && i.length === 0) return !1;
            if (r.has(o) && l[a - 1] !== "\\" && (c = !c), !c && l[a - 1] !== "\\") {
                if (e.has(o)) i.push(o);
                else if (t.has(o)) {
                    let f = t.get(o);
                    if (i.length <= 0 || i.pop() !== f) return !1;
                }
            }
        }
        return !(i.length > 0);
    }
})(Jn);
var is = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "hasContentChanged", {
        enumerable: !0,
        get: function() {
            return c;
        }
    });
    const e = /* @__PURE__ */ r(Le), t = /* @__PURE__ */ l(Et);
    function r(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }
    function n(a) {
        if (typeof WeakMap != "function") return null;
        var o = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
        return (n = function(u) {
            return u ? f : o;
        })(a);
    }
    function l(a, o) {
        if (a && a.__esModule) return a;
        if (a === null || typeof a != "object" && typeof a != "function") return {
            default: a
        };
        var f = n(o);
        if (f && f.has(a)) return f.get(a);
        var u = {}, p = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for(var _ in a)if (_ !== "default" && Object.prototype.hasOwnProperty.call(a, _)) {
            var x = p ? Object.getOwnPropertyDescriptor(a, _) : null;
            x && (x.get || x.set) ? Object.defineProperty(u, _, x) : u[_] = a[_];
        }
        return u.default = a, f && f.set(a, u), u;
    }
    function i(a) {
        try {
            return e.default.createHash("md5").update(a, "utf-8").digest("binary");
        } catch  {
            return "";
        }
    }
    function c(a, o) {
        let f = o.toString();
        if (!f.includes("@tailwind")) return !1;
        let u = t.sourceHashMap.get(a), p = i(f), _ = u !== p;
        return t.sourceHashMap.set(a, p), _;
    }
})(is);
var as = {}, ss = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return e;
        }
    });
    function e(t) {
        return (t > 0n) - (t < 0n);
    }
})(ss);
var os = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "remapBitfield", {
        enumerable: !0,
        get: function() {
            return e;
        }
    });
    function e(t, r) {
        let n = 0n, l = 0n;
        for (let [i, c] of r)t & i && (n = n | i, l = l | c);
        return t & ~n | l;
    }
})(os);
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "Offsets", {
        enumerable: !0,
        get: function() {
            return n;
        }
    });
    const e = /* @__PURE__ */ r(ss), t = os;
    function r(c) {
        return c && c.__esModule ? c : {
            default: c
        };
    }
    class n {
        constructor(){
            this.offsets = {
                defaults: 0n,
                base: 0n,
                components: 0n,
                utilities: 0n,
                variants: 0n,
                user: 0n
            }, this.layerPositions = {
                defaults: 0n,
                base: 1n,
                components: 2n,
                utilities: 3n,
                // There isn't technically a "user" layer, but we need to give it a position
                // Because it's used for ordering user-css from @apply
                user: 4n,
                variants: 5n
            }, this.reservedVariantBits = 0n, this.variantOffsets = /* @__PURE__ */ new Map();
        }
        /**
    * @param {Layer} layer
    * @returns {RuleOffset}
    */ create(a) {
            return {
                layer: a,
                parentLayer: a,
                arbitrary: 0n,
                variants: 0n,
                parallelIndex: 0n,
                index: this.offsets[a]++,
                propertyOffset: 0n,
                property: "",
                options: []
            };
        }
        /**
    * @param {string} name
    * @returns {RuleOffset}
    */ arbitraryProperty(a) {
            return {
                ...this.create("utilities"),
                arbitrary: 1n,
                property: a
            };
        }
        /**
    * Get the offset for a variant
    *
    * @param {string} variant
    * @param {number} index
    * @returns {RuleOffset}
    */ forVariant(a, o = 0) {
            let f = this.variantOffsets.get(a);
            if (f === void 0) throw new Error(`Cannot find offset for unknown variant ${a}`);
            return {
                ...this.create("variants"),
                variants: f << BigInt(o)
            };
        }
        /**
    * @param {RuleOffset} rule
    * @param {RuleOffset} variant
    * @param {VariantOption} options
    * @returns {RuleOffset}
    */ applyVariantOffset(a, o, f) {
            return f.variant = o.variants, {
                ...a,
                layer: "variants",
                parentLayer: a.layer === "variants" ? a.parentLayer : a.layer,
                variants: a.variants | o.variants,
                options: f.sort ? [].concat(f, a.options) : a.options,
                // TODO: Technically this is wrong. We should be handling parallel index on a per variant basis.
                // We'll take the max of all the parallel indexes for now.
                // @ts-ignore
                parallelIndex: l([
                    a.parallelIndex,
                    o.parallelIndex
                ])
            };
        }
        /**
    * @param {RuleOffset} offset
    * @param {number} parallelIndex
    * @returns {RuleOffset}
    */ applyParallelOffset(a, o) {
            return {
                ...a,
                parallelIndex: BigInt(o)
            };
        }
        /**
    * Each variant gets 1 bit per function / rule registered.
    * This is because multiple variants can be applied to a single rule and we need to know which ones are present and which ones are not.
    * Additionally, every unique group of variants is grouped together in the stylesheet.
    *
    * This grouping is order-independent. For instance, we do not differentiate between `hover:focus` and `focus:hover`.
    *
    * @param {string[]} variants
    * @param {(name: string) => number} getLength
    */ recordVariants(a, o) {
            for (let f of a)this.recordVariant(f, o(f));
        }
        /**
    * The same as `recordVariants` but for a single arbitrary variant at runtime.
    * @param {string} variant
    * @param {number} fnCount
    *
    * @returns {RuleOffset} The highest offset for this variant
    */ recordVariant(a, o = 1) {
            return this.variantOffsets.set(a, 1n << this.reservedVariantBits), this.reservedVariantBits += BigInt(o), {
                ...this.create("variants"),
                variants: this.variantOffsets.get(a)
            };
        }
        /**
    * @param {RuleOffset} a
    * @param {RuleOffset} b
    * @returns {bigint}
    */ compare(a, o) {
            if (a.layer !== o.layer) return this.layerPositions[a.layer] - this.layerPositions[o.layer];
            if (a.parentLayer !== o.parentLayer) return this.layerPositions[a.parentLayer] - this.layerPositions[o.parentLayer];
            for (let u of a.options)for (let p of o.options){
                if (u.id !== p.id || !u.sort || !p.sort) continue;
                var f;
                let _ = (f = l([
                    u.variant,
                    p.variant
                ])) !== null && f !== void 0 ? f : 0n, x = ~(_ | _ - 1n), h = a.variants & x, m = o.variants & x;
                if (h !== m) continue;
                let C = u.sort({
                    value: u.value,
                    modifier: u.modifier
                }, {
                    value: p.value,
                    modifier: p.modifier
                });
                if (C !== 0) return C;
            }
            return a.variants !== o.variants ? a.variants - o.variants : a.parallelIndex !== o.parallelIndex ? a.parallelIndex - o.parallelIndex : a.arbitrary !== o.arbitrary ? a.arbitrary - o.arbitrary : a.propertyOffset !== o.propertyOffset ? a.propertyOffset - o.propertyOffset : a.index - o.index;
        }
        /**
    * Arbitrary variants are recorded in the order they're encountered.
    * This means that the order is not stable between environments and sets of content files.
    *
    * In order to make the order stable, we need to remap the arbitrary variant offsets to
    * be in alphabetical order starting from the offset of the first arbitrary variant.
    */ recalculateVariantOffsets() {
            let a = Array.from(this.variantOffsets.entries()).filter(([u])=>u.startsWith("[")).sort(([u], [p])=>i(u, p)), o = a.map(([, u])=>u).sort((u, p)=>(0, e.default)(u - p));
            return a.map(([, u], p)=>[
                    u,
                    o[p]
                ]).filter(([u, p])=>u !== p);
        }
        /**
    * @template T
    * @param {[RuleOffset, T][]} list
    * @returns {[RuleOffset, T][]}
    */ remapArbitraryVariantOffsets(a) {
            let o = this.recalculateVariantOffsets();
            return o.length === 0 ? a : a.map((f)=>{
                let [u, p] = f;
                return u = {
                    ...u,
                    variants: (0, t.remapBitfield)(u.variants, o)
                }, [
                    u,
                    p
                ];
            });
        }
        /**
    * @template T
    * @param {[RuleOffset, T][]} list
    * @returns {[RuleOffset, T][]}
    */ sortArbitraryProperties(a) {
            let o = /* @__PURE__ */ new Set();
            for (let [_] of a)_.arbitrary === 1n && o.add(_.property);
            if (o.size === 0) return a;
            let f = Array.from(o).sort(), u = /* @__PURE__ */ new Map(), p = 1n;
            for (let _ of f)u.set(_, p++);
            return a.map((_)=>{
                let [x, h] = _;
                var m;
                return x = {
                    ...x,
                    propertyOffset: (m = u.get(x.property)) !== null && m !== void 0 ? m : 0n
                }, [
                    x,
                    h
                ];
            });
        }
        /**
    * @template T
    * @param {[RuleOffset, T][]} list
    * @returns {[RuleOffset, T][]}
    */ sort(a) {
            return a = this.remapArbitraryVariantOffsets(a), a = this.sortArbitraryProperties(a), a.sort(([o], [f])=>(0, e.default)(this.compare(o, f)));
        }
    }
    function l(c) {
        let a = null;
        for (const o of c)a = a ?? o, a = a > o ? a : o;
        return a;
    }
    function i(c, a) {
        let o = c.length, f = a.length, u = o < f ? o : f;
        for(let p = 0; p < u; p++){
            let _ = c.charCodeAt(p) - a.charCodeAt(p);
            if (_ !== 0) return _;
        }
        return o - f;
    }
})(as);
var Mi;
function Kn() {
    return Mi || (Mi = 1, function(s) {
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        function e(q, U) {
            for(var Z in U)Object.defineProperty(q, Z, {
                enumerable: !0,
                get: U[Z]
            });
        }
        e(s, {
            INTERNAL_FEATURES: function() {
                return T;
            },
            isValidVariantFormatString: function() {
                return I;
            },
            parseVariant: function() {
                return G;
            },
            getFileModifiedMap: function() {
                return L;
            },
            createContext: function() {
                return ye;
            },
            getContext: function() {
                return Ne;
            }
        });
        const t = /* @__PURE__ */ b(Le), r = /* @__PURE__ */ b(Le), n = /* @__PURE__ */ b(qe), l = /* @__PURE__ */ b(ba), i = /* @__PURE__ */ b(Ke), c = /* @__PURE__ */ b(Ot), a = /* @__PURE__ */ b(jn), o = /* @__PURE__ */ b(lr), f = /* @__PURE__ */ b(dt), u = /* @__PURE__ */ b(pt), p = /* @__PURE__ */ N(Hn), _ = At, x = xc(), h = /* @__PURE__ */ N(Et), m = ir, C = /* @__PURE__ */ b(et), S = /* @__PURE__ */ b(sr), k = /* @__PURE__ */ b(Jn), O = fr(), E = is, M = as, D = it, P = Yn;
        function b(q) {
            return q && q.__esModule ? q : {
                default: q
            };
        }
        function A(q) {
            if (typeof WeakMap != "function") return null;
            var U = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap();
            return (A = function(K) {
                return K ? Z : U;
            })(q);
        }
        function N(q, U) {
            if (q && q.__esModule) return q;
            if (q === null || typeof q != "object" && typeof q != "function") return {
                default: q
            };
            var Z = A(U);
            if (Z && Z.has(q)) return Z.get(q);
            var K = {}, X = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for(var ae in q)if (ae !== "default" && Object.prototype.hasOwnProperty.call(q, ae)) {
                var se = X ? Object.getOwnPropertyDescriptor(q, ae) : null;
                se && (se.get || se.set) ? Object.defineProperty(K, ae, se) : K[ae] = q[ae];
            }
            return K.default = q, Z && Z.set(q, K), K;
        }
        const T = Symbol(), V = {
            AddVariant: Symbol.for("ADD_VARIANT"),
            MatchVariant: Symbol.for("MATCH_VARIANT")
        }, d = {
            Base: 1,
            Dynamic: 2
        };
        function g(q, U) {
            let Z = q.tailwindConfig.prefix;
            return typeof Z == "function" ? Z(U) : Z + U;
        }
        function v({ type: q = "any", ...U }) {
            let Z = [].concat(q);
            return {
                ...U,
                types: Z.map((K)=>Array.isArray(K) ? {
                        type: K[0],
                        ...K[1]
                    } : {
                        type: K,
                        preferOnConflict: !1
                    })
            };
        }
        function y(q) {
            let U = [], Z = "", K = 0;
            for(let X = 0; X < q.length; X++){
                let ae = q[X];
                if (ae === "\\") Z += "\\" + q[++X];
                else if (ae === "{") ++K, U.push(Z.trim()), Z = "";
                else if (ae === "}") {
                    if (--K < 0) throw new Error("Your { and } are unbalanced.");
                    U.push(Z.trim()), Z = "";
                } else Z += ae;
            }
            return Z.length > 0 && U.push(Z.trim()), U = U.filter((X)=>X !== ""), U;
        }
        function R(q, U, { before: Z = [] } = {}) {
            if (Z = [].concat(Z), Z.length <= 0) {
                q.push(U);
                return;
            }
            let K = q.length - 1;
            for (let X of Z){
                let ae = q.indexOf(X);
                ae !== -1 && (K = Math.min(K, ae));
            }
            q.splice(K, 0, U);
        }
        function F(q) {
            return Array.isArray(q) ? q.flatMap((U)=>!Array.isArray(U) && !(0, f.default)(U) ? U : (0, a.default)(U)) : F([
                q
            ]);
        }
        function $(q, U) {
            return (0, i.default)((K)=>{
                let X = [];
                return U && U(K), K.walkClasses((ae)=>{
                    X.push(ae.value);
                }), X;
            }).transformSync(q);
        }
        function z(q) {
            q.walkPseudos((U)=>{
                U.value === ":not" && U.remove();
            });
        }
        function j(q, U = {
            containsNonOnDemandable: !1
        }, Z = 0) {
            let K = [], X = [];
            q.type === "rule" ? X.push(...q.selectors) : q.type === "atrule" && q.walkRules((ae)=>X.push(...ae.selectors));
            for (let ae of X){
                let se = $(ae, z);
                se.length === 0 && (U.containsNonOnDemandable = !0);
                for (let Se of se)K.push(Se);
            }
            return Z === 0 ? [
                U.containsNonOnDemandable || K.length === 0,
                K
            ] : K;
        }
        function W(q) {
            return F(q).flatMap((U)=>{
                let Z = /* @__PURE__ */ new Map(), [K, X] = j(U);
                return K && X.unshift(h.NOT_ON_DEMAND), X.map((ae)=>(Z.has(U) || Z.set(U, U), [
                        ae,
                        Z.get(U)
                    ]));
            });
        }
        function I(q) {
            return q.startsWith("@") || q.includes("&");
        }
        function G(q) {
            q = q.replace(/\n+/g, "").replace(/\s{1,}/g, " ").trim();
            let U = y(q).map((Z)=>{
                if (!Z.startsWith("@")) return ({ format: se })=>se(Z);
                let [, K, X] = /@(\S*)( .+|[({].*)?/g.exec(Z);
                var ae;
                return ({ wrap: se })=>se(n.default.atRule({
                        name: K,
                        params: (ae = X == null ? void 0 : X.trim()) !== null && ae !== void 0 ? ae : ""
                    }));
            }).reverse();
            return (Z)=>{
                for (let K of U)K(Z);
            };
        }
        function re(q, U, { variantList: Z, variantMap: K, offsets: X, classList: ae }) {
            function se(ne, te) {
                return ne ? (0, l.default)(q, ne, te) : q;
            }
            function Se(ne) {
                return (0, o.default)(q.prefix, ne);
            }
            function fe(ne, te) {
                return ne === h.NOT_ON_DEMAND ? h.NOT_ON_DEMAND : te.respectPrefix ? U.tailwindConfig.prefix + ne : ne;
            }
            function Pe(ne, te, ue = {}) {
                let ve = (0, m.toPath)(ne), me = se([
                    "theme",
                    ...ve
                ], te);
                return (0, c.default)(ve[0])(me, ue);
            }
            let ge = 0, Ce = {
                postcss: n.default,
                prefix: Se,
                e: u.default,
                config: se,
                theme: Pe,
                corePlugins: (ne)=>Array.isArray(q.corePlugins) ? q.corePlugins.includes(ne) : se([
                        "corePlugins",
                        ne
                    ], !0),
                variants: ()=>[],
                addBase (ne) {
                    for (let [te, ue] of W(ne)){
                        let ve = fe(te, {}), me = X.create("base");
                        U.candidateRuleMap.has(ve) || U.candidateRuleMap.set(ve, []), U.candidateRuleMap.get(ve).push([
                            {
                                sort: me,
                                layer: "base"
                            },
                            ue
                        ]);
                    }
                },
                /**
        * @param {string} group
        * @param {Record<string, string | string[]>} declarations
        */ addDefaults (ne, te) {
                    const ue = {
                        [`@defaults ${ne}`]: te
                    };
                    for (let [ve, me] of W(ue)){
                        let de = fe(ve, {});
                        U.candidateRuleMap.has(de) || U.candidateRuleMap.set(de, []), U.candidateRuleMap.get(de).push([
                            {
                                sort: X.create("defaults"),
                                layer: "defaults"
                            },
                            me
                        ]);
                    }
                },
                addComponents (ne, te) {
                    te = Object.assign({}, {
                        preserveSource: !1,
                        respectPrefix: !0,
                        respectImportant: !1
                    }, Array.isArray(te) ? {} : te);
                    for (let [ve, me] of W(ne)){
                        let de = fe(ve, te);
                        ae.add(de), U.candidateRuleMap.has(de) || U.candidateRuleMap.set(de, []), U.candidateRuleMap.get(de).push([
                            {
                                sort: X.create("components"),
                                layer: "components",
                                options: te
                            },
                            me
                        ]);
                    }
                },
                addUtilities (ne, te) {
                    te = Object.assign({}, {
                        preserveSource: !1,
                        respectPrefix: !0,
                        respectImportant: !0
                    }, Array.isArray(te) ? {} : te);
                    for (let [ve, me] of W(ne)){
                        let de = fe(ve, te);
                        ae.add(de), U.candidateRuleMap.has(de) || U.candidateRuleMap.set(de, []), U.candidateRuleMap.get(de).push([
                            {
                                sort: X.create("utilities"),
                                layer: "utilities",
                                options: te
                            },
                            me
                        ]);
                    }
                },
                matchUtilities: function(ne, te) {
                    te = v({
                        ...{
                            respectPrefix: !0,
                            respectImportant: !0,
                            modifiers: !1
                        },
                        ...te
                    });
                    let ve = X.create("utilities");
                    for(let me in ne){
                        let Ie = function(xe, { isOnlyPlugin: he }) {
                            let [ce, _e, Fe] = (0, _.coerceValue)(te.types, xe, te, q);
                            if (ce === void 0) return [];
                            if (!te.types.some(({ type: Ue })=>Ue === _e)) if (he) C.default.warn([
                                `Unnecessary typehint \`${_e}\` in \`${me}-${xe}\`.`,
                                `You can safely update it to \`${me}-${xe.replace(_e + ":", "")}\`.`
                            ]);
                            else return [];
                            if (!(0, k.default)(ce)) return [];
                            let tt = {
                                get modifier () {
                                    return te.modifiers || C.default.warn(`modifier-used-without-options-for-${me}`, [
                                        "Your plugin must set `modifiers: true` in its options to support modifiers."
                                    ]), Fe;
                                }
                            }, ze = (0, D.flagEnabled)(q, "generalizedModifiers");
                            return [].concat(ze ? Te(ce, tt) : Te(ce)).filter(Boolean).map((Ue)=>({
                                    [(0, p.default)(me, xe)]: Ue
                                }));
                        }, de = fe(me, te), Te = ne[me];
                        ae.add([
                            de,
                            te
                        ]);
                        let pe = [
                            {
                                sort: ve,
                                layer: "utilities",
                                options: te
                            },
                            Ie
                        ];
                        U.candidateRuleMap.has(de) || U.candidateRuleMap.set(de, []), U.candidateRuleMap.get(de).push(pe);
                    }
                },
                matchComponents: function(ne, te) {
                    te = v({
                        ...{
                            respectPrefix: !0,
                            respectImportant: !1,
                            modifiers: !1
                        },
                        ...te
                    });
                    let ve = X.create("components");
                    for(let me in ne){
                        let Ie = function(xe, { isOnlyPlugin: he }) {
                            let [ce, _e, Fe] = (0, _.coerceValue)(te.types, xe, te, q);
                            if (ce === void 0) return [];
                            if (!te.types.some(({ type: Ue })=>Ue === _e)) if (he) C.default.warn([
                                `Unnecessary typehint \`${_e}\` in \`${me}-${xe}\`.`,
                                `You can safely update it to \`${me}-${xe.replace(_e + ":", "")}\`.`
                            ]);
                            else return [];
                            if (!(0, k.default)(ce)) return [];
                            let tt = {
                                get modifier () {
                                    return te.modifiers || C.default.warn(`modifier-used-without-options-for-${me}`, [
                                        "Your plugin must set `modifiers: true` in its options to support modifiers."
                                    ]), Fe;
                                }
                            }, ze = (0, D.flagEnabled)(q, "generalizedModifiers");
                            return [].concat(ze ? Te(ce, tt) : Te(ce)).filter(Boolean).map((Ue)=>({
                                    [(0, p.default)(me, xe)]: Ue
                                }));
                        }, de = fe(me, te), Te = ne[me];
                        ae.add([
                            de,
                            te
                        ]);
                        let pe = [
                            {
                                sort: ve,
                                layer: "components",
                                options: te
                            },
                            Ie
                        ];
                        U.candidateRuleMap.has(de) || U.candidateRuleMap.set(de, []), U.candidateRuleMap.get(de).push(pe);
                    }
                },
                addVariant (ne, te, ue = {}) {
                    te = [].concat(te).map((ve)=>{
                        if (typeof ve != "string") return (me = {})=>{
                            let { args: de, modifySelectors: Te, container: Ie, separator: pe, wrap: xe, format: he } = me, ce = ve(Object.assign({
                                modifySelectors: Te,
                                container: Ie,
                                separator: pe
                            }, ue.type === V.MatchVariant && {
                                args: de,
                                wrap: xe,
                                format: he
                            }));
                            if (typeof ce == "string" && !I(ce)) throw new Error(`Your custom variant \`${ne}\` has an invalid format string. Make sure it's an at-rule or contains a \`&\` placeholder.`);
                            return Array.isArray(ce) ? ce.filter((_e)=>typeof _e == "string").map((_e)=>G(_e)) : ce && typeof ce == "string" && G(ce)(me);
                        };
                        if (!I(ve)) throw new Error(`Your custom variant \`${ne}\` has an invalid format string. Make sure it's an at-rule or contains a \`&\` placeholder.`);
                        return G(ve);
                    }), R(Z, ne, ue), K.set(ne, te), U.variantOptions.set(ne, ue);
                },
                matchVariant (ne, te, ue) {
                    var ve;
                    let me = (ve = ue == null ? void 0 : ue.id) !== null && ve !== void 0 ? ve : ++ge, de = ne === "@", Te = (0, D.flagEnabled)(q, "generalizedModifiers");
                    var Ie;
                    for (let [he, ce] of Object.entries((Ie = ue == null ? void 0 : ue.values) !== null && Ie !== void 0 ? Ie : {}))he !== "DEFAULT" && Ce.addVariant(de ? `${ne}${he}` : `${ne}-${he}`, ({ args: _e, container: Fe })=>te(ce, Te ? {
                            modifier: _e == null ? void 0 : _e.modifier,
                            container: Fe
                        } : {
                            container: Fe
                        }), {
                        ...ue,
                        value: ce,
                        id: me,
                        type: V.MatchVariant,
                        variantInfo: d.Base
                    });
                    var pe;
                    let xe = "DEFAULT" in ((pe = ue == null ? void 0 : ue.values) !== null && pe !== void 0 ? pe : {});
                    Ce.addVariant(ne, ({ args: he, container: ce })=>{
                        if ((he == null ? void 0 : he.value) === h.NONE && !xe) return null;
                        var _e;
                        return te((he == null ? void 0 : he.value) === h.NONE ? ue.values.DEFAULT : (_e = he == null ? void 0 : he.value) !== null && _e !== void 0 ? _e : typeof he == "string" ? he : "", Te ? {
                            modifier: he == null ? void 0 : he.modifier,
                            container: ce
                        } : {
                            container: ce
                        });
                    }, {
                        ...ue,
                        id: me,
                        type: V.MatchVariant,
                        variantInfo: d.Dynamic
                    });
                }
            };
            return Ce;
        }
        let w = /* @__PURE__ */ new WeakMap();
        function L(q) {
            return w.has(q) || w.set(q, /* @__PURE__ */ new Map()), w.get(q);
        }
        function B(q, U) {
            let Z = !1, K = /* @__PURE__ */ new Map();
            for (let ae of q){
                var X;
                if (!ae) continue;
                let se = r.default.parse(ae), Se = se.hash ? se.href.replace(se.hash, "") : se.href;
                Se = se.search ? Se.replace(se.search, "") : Se;
                let fe = (X = t.default.statSync(decodeURIComponent(Se), {
                    throwIfNoEntry: !1
                })) === null || X === void 0 ? void 0 : X.mtimeMs;
                fe && ((!U.has(ae) || fe > U.get(ae)) && (Z = !0), K.set(ae, fe));
            }
            return [
                Z,
                K
            ];
        }
        function H(q) {
            q.walkAtRules((U)=>{
                [
                    "responsive",
                    "variants"
                ].includes(U.name) && (H(U), U.before(U.nodes), U.remove());
            });
        }
        function Y(q) {
            let U = [];
            return q.each((Z)=>{
                Z.type === "atrule" && [
                    "responsive",
                    "variants"
                ].includes(Z.name) && (Z.name = "layer", Z.params = "utilities");
            }), q.walkAtRules("layer", (Z)=>{
                if (H(Z), Z.params === "base") {
                    for (let K of Z.nodes)U.push(function({ addBase: X }) {
                        X(K, {
                            respectPrefix: !1
                        });
                    });
                    Z.remove();
                } else if (Z.params === "components") {
                    for (let K of Z.nodes)U.push(function({ addComponents: X }) {
                        X(K, {
                            respectPrefix: !1,
                            preserveSource: !0
                        });
                    });
                    Z.remove();
                } else if (Z.params === "utilities") {
                    for (let K of Z.nodes)U.push(function({ addUtilities: X }) {
                        X(K, {
                            respectPrefix: !1,
                            preserveSource: !0
                        });
                    });
                    Z.remove();
                }
            }), U;
        }
        function J(q, U) {
            let Z = Object.entries({
                ...x.variantPlugins,
                ...x.corePlugins
            }).map(([fe, Pe])=>q.tailwindConfig.corePlugins.includes(fe) ? Pe : null).filter(Boolean), K = q.tailwindConfig.plugins.map((fe)=>(fe.__isOptionsFunction && (fe = fe()), typeof fe == "function" ? fe : fe.handler)), X = Y(U), ae = [
                x.variantPlugins.childVariant,
                x.variantPlugins.pseudoElementVariants,
                x.variantPlugins.pseudoClassVariants,
                x.variantPlugins.hasVariants,
                x.variantPlugins.ariaVariants,
                x.variantPlugins.dataVariants
            ], se = [
                x.variantPlugins.supportsVariants,
                x.variantPlugins.reducedMotionVariants,
                x.variantPlugins.prefersContrastVariants,
                x.variantPlugins.screenVariants,
                x.variantPlugins.orientationVariants,
                x.variantPlugins.directionVariants,
                x.variantPlugins.darkVariants,
                x.variantPlugins.forcedColorsVariants,
                x.variantPlugins.printVariant
            ];
            return (q.tailwindConfig.darkMode === "class" || Array.isArray(q.tailwindConfig.darkMode) && q.tailwindConfig.darkMode[0] === "class") && (se = [
                x.variantPlugins.supportsVariants,
                x.variantPlugins.reducedMotionVariants,
                x.variantPlugins.prefersContrastVariants,
                x.variantPlugins.darkVariants,
                x.variantPlugins.screenVariants,
                x.variantPlugins.orientationVariants,
                x.variantPlugins.directionVariants,
                x.variantPlugins.forcedColorsVariants,
                x.variantPlugins.printVariant
            ]), [
                ...Z,
                ...ae,
                ...K,
                ...se,
                ...X
            ];
        }
        function ee(q, U) {
            let Z = [], K = /* @__PURE__ */ new Map();
            U.variantMap = K;
            let X = new M.Offsets();
            U.offsets = X;
            let ae = /* @__PURE__ */ new Set(), se = re(U.tailwindConfig, U, {
                variantList: Z,
                variantMap: K,
                offsets: X,
                classList: ae
            });
            for (let te of q)if (Array.isArray(te)) for (let ue of te)ue(se);
            else te == null || te(se);
            X.recordVariants(Z, (te)=>K.get(te).length);
            for (let [te, ue] of K.entries())U.variantMap.set(te, ue.map((ve, me)=>[
                    X.forVariant(te, me),
                    ve
                ]));
            var Se;
            let fe = ((Se = U.tailwindConfig.safelist) !== null && Se !== void 0 ? Se : []).filter(Boolean);
            if (fe.length > 0) {
                let te = [];
                for (let ue of fe){
                    if (typeof ue == "string") {
                        U.changedContent.push({
                            content: ue,
                            extension: "html"
                        });
                        continue;
                    }
                    if (ue instanceof RegExp) {
                        C.default.warn("root-regex", [
                            "Regular expressions in `safelist` work differently in Tailwind CSS v3.0.",
                            "Update your `safelist` configuration to eliminate this warning.",
                            "https://tailwindcss.com/docs/content-configuration#safelisting-classes"
                        ]);
                        continue;
                    }
                    te.push(ue);
                }
                if (te.length > 0) {
                    let ue = /* @__PURE__ */ new Map(), ve = U.tailwindConfig.prefix.length, me = te.some((de)=>de.pattern.source.includes("!"));
                    for (let de of ae){
                        let Te = Array.isArray(de) ? (()=>{
                            let [Ie, pe] = de;
                            var xe;
                            let ce = Object.keys((xe = pe == null ? void 0 : pe.values) !== null && xe !== void 0 ? xe : {}).map((_e)=>(0, p.formatClass)(Ie, _e));
                            return pe != null && pe.supportsNegativeValues && (ce = [
                                ...ce,
                                ...ce.map((_e)=>"-" + _e)
                            ], ce = [
                                ...ce,
                                ...ce.map((_e)=>_e.slice(0, ve) + "-" + _e.slice(ve))
                            ]), pe.types.some(({ type: _e })=>_e === "color") && (ce = [
                                ...ce,
                                ...ce.flatMap((_e)=>Object.keys(U.tailwindConfig.theme.opacity).map((Fe)=>`${_e}/${Fe}`))
                            ]), me && pe != null && pe.respectImportant && (ce = [
                                ...ce,
                                ...ce.map((_e)=>"!" + _e)
                            ]), ce;
                        })() : [
                            de
                        ];
                        for (let Ie of Te)for (let { pattern: pe, variants: xe = [] } of te)if (pe.lastIndex = 0, ue.has(pe) || ue.set(pe, 0), !!pe.test(Ie)) {
                            ue.set(pe, ue.get(pe) + 1), U.changedContent.push({
                                content: Ie,
                                extension: "html"
                            });
                            for (let he of xe)U.changedContent.push({
                                content: he + U.tailwindConfig.separator + Ie,
                                extension: "html"
                            });
                        }
                    }
                    for (let [de, Te] of ue.entries())Te === 0 && C.default.warn([
                        `The safelist pattern \`${de}\` doesn't match any Tailwind CSS classes.`,
                        "Fix this pattern or remove it from your `safelist` configuration.",
                        "https://tailwindcss.com/docs/content-configuration#safelisting-classes"
                    ]);
                }
            }
            var Pe, ge;
            let Ce = (ge = [].concat((Pe = U.tailwindConfig.darkMode) !== null && Pe !== void 0 ? Pe : "media")[1]) !== null && ge !== void 0 ? ge : "dark", ne = [
                g(U, Ce),
                g(U, "group"),
                g(U, "peer")
            ];
            U.getClassOrder = function(ue) {
                let ve = [
                    ...ue
                ].sort((pe, xe)=>pe === xe ? 0 : pe < xe ? -1 : 1), me = new Map(ve.map((pe)=>[
                        pe,
                        null
                    ])), de = (0, O.generateRules)(new Set(ve), U, !0);
                de = U.offsets.sort(de);
                let Te = BigInt(ne.length);
                for (const [, pe] of de){
                    let xe = pe.raws.tailwind.candidate;
                    var Ie;
                    me.set(xe, (Ie = me.get(xe)) !== null && Ie !== void 0 ? Ie : Te++);
                }
                return ue.map((pe)=>{
                    var xe;
                    let he = (xe = me.get(pe)) !== null && xe !== void 0 ? xe : null, ce = ne.indexOf(pe);
                    return he === null && ce !== -1 && (he = BigInt(ce)), [
                        pe,
                        he
                    ];
                });
            }, U.getClassList = function(ue = {}) {
                let ve = [];
                for (let pe of ae)if (Array.isArray(pe)) {
                    var me;
                    let [xe, he] = pe, ce = [];
                    var de;
                    let _e = Object.keys((de = he == null ? void 0 : he.modifiers) !== null && de !== void 0 ? de : {});
                    if (!(he == null || (me = he.types) === null || me === void 0) && me.some(({ type: ze })=>ze === "color")) {
                        var Te;
                        _e.push(...Object.keys((Te = U.tailwindConfig.theme.opacity) !== null && Te !== void 0 ? Te : {}));
                    }
                    let Fe = {
                        modifiers: _e
                    }, tt = ue.includeMetadata && _e.length > 0;
                    var Ie;
                    for (let [ze, rt] of Object.entries((Ie = he == null ? void 0 : he.values) !== null && Ie !== void 0 ? Ie : {})){
                        if (rt == null) continue;
                        let Ue = (0, p.formatClass)(xe, ze);
                        if (ve.push(tt ? [
                            Ue,
                            Fe
                        ] : Ue), he != null && he.supportsNegativeValues && (0, S.default)(rt)) {
                            let Xe = (0, p.formatClass)(xe, `-${ze}`);
                            ce.push(tt ? [
                                Xe,
                                Fe
                            ] : Xe);
                        }
                    }
                    ve.push(...ce);
                } else ve.push(pe);
                return ve;
            }, U.getVariants = function() {
                let ue = Math.random().toString(36).substring(7).toUpperCase(), ve = [];
                for (let [de, Te] of U.variantOptions.entries())if (Te.variantInfo !== d.Base) {
                    var me;
                    ve.push({
                        name: de,
                        isArbitrary: Te.type === Symbol.for("MATCH_VARIANT"),
                        values: Object.keys((me = Te.values) !== null && me !== void 0 ? me : {}),
                        hasDash: de !== "@",
                        selectors ({ modifier: Ie, value: pe } = {}) {
                            let xe = `TAILWINDPLACEHOLDER${ue}`, he = n.default.rule({
                                selector: `.${xe}`
                            }), ce = n.default.root({
                                nodes: [
                                    he.clone()
                                ]
                            }), _e = ce.toString();
                            var Fe;
                            let tt = ((Fe = U.variantMap.get(de)) !== null && Fe !== void 0 ? Fe : []).flatMap(([Ve, We])=>We), ze = [];
                            for (let Ve of tt){
                                var rt;
                                let We = [];
                                var Ue;
                                let Pt = {
                                    args: {
                                        modifier: Ie,
                                        value: (Ue = (rt = Te.values) === null || rt === void 0 ? void 0 : rt[pe]) !== null && Ue !== void 0 ? Ue : pe
                                    },
                                    separator: U.tailwindConfig.separator,
                                    modifySelectors (He) {
                                        return ce.each((hr)=>{
                                            hr.type === "rule" && (hr.selectors = hr.selectors.map((ri)=>He({
                                                    get className () {
                                                        return (0, O.getClassNameFromSelector)(ri);
                                                    },
                                                    selector: ri
                                                })));
                                        }), ce;
                                    },
                                    format (He) {
                                        We.push(He);
                                    },
                                    wrap (He) {
                                        We.push(`@${He.name} ${He.params} { & }`);
                                    },
                                    container: ce
                                }, Tt = Ve(Pt);
                                if (We.length > 0 && ze.push(We), Array.isArray(Tt)) for (let He of Tt)We = [], He(Pt), ze.push(We);
                            }
                            let Xe = [], Es = ce.toString();
                            _e !== Es && (ce.walkRules((Ve)=>{
                                let We = Ve.selector, Pt = (0, i.default)((Tt)=>{
                                    Tt.walkClasses((He)=>{
                                        He.value = `${de}${U.tailwindConfig.separator}${He.value}`;
                                    });
                                }).processSync(We);
                                Xe.push(We.replace(Pt, "&").replace(xe, "&"));
                            }), ce.walkAtRules((Ve)=>{
                                Xe.push(`@${Ve.name} (${Ve.params}) { & }`);
                            }));
                            var cr;
                            let Ps = !(pe in ((cr = Te.values) !== null && cr !== void 0 ? cr : {}));
                            var dr;
                            let Ts = (dr = Te[T]) !== null && dr !== void 0 ? dr : {}, ei = !(Ps || Ts.respectPrefix === !1);
                            ze = ze.map((Ve)=>Ve.map((We)=>({
                                        format: We,
                                        respectPrefix: ei
                                    }))), Xe = Xe.map((Ve)=>({
                                    format: Ve,
                                    respectPrefix: ei
                                }));
                            let pr = {
                                candidate: xe,
                                context: U
                            }, ti = ze.map((Ve)=>(0, P.finalizeSelector)(`.${xe}`, (0, P.formatVariantSelector)(Ve, pr), pr).replace(`.${xe}`, "&").replace("{ & }", "").trim());
                            return Xe.length > 0 && ti.push((0, P.formatVariantSelector)(Xe, pr).toString().replace(`.${xe}`, "&")), ti;
                        }
                    });
                }
                return ve;
            };
        }
        function Q(q, U) {
            q.classCache.has(U) && (q.notClassCache.add(U), q.classCache.delete(U), q.applyClassCache.delete(U), q.candidateRuleMap.delete(U), q.candidateRuleCache.delete(U), q.stylesheetCache = null);
        }
        function le(q, U) {
            let Z = U.raws.tailwind.candidate;
            if (Z) {
                for (const K of q.ruleCache)K[1].raws.tailwind.candidate === Z && q.ruleCache.delete(K);
                Q(q, Z);
            }
        }
        function ye(q, U = [], Z = n.default.root()) {
            var K;
            let X = {
                disposables: [],
                ruleCache: /* @__PURE__ */ new Set(),
                candidateRuleCache: /* @__PURE__ */ new Map(),
                classCache: /* @__PURE__ */ new Map(),
                applyClassCache: /* @__PURE__ */ new Map(),
                // Seed the not class cache with the blocklist (which is only strings)
                notClassCache: new Set((K = q.blocklist) !== null && K !== void 0 ? K : []),
                postCssNodeCache: /* @__PURE__ */ new Map(),
                candidateRuleMap: /* @__PURE__ */ new Map(),
                tailwindConfig: q,
                changedContent: U,
                variantMap: /* @__PURE__ */ new Map(),
                stylesheetCache: null,
                variantOptions: /* @__PURE__ */ new Map(),
                markInvalidUtilityCandidate: (se)=>Q(X, se),
                markInvalidUtilityNode: (se)=>le(X, se)
            }, ae = J(X, Z);
            return ee(ae, X), X;
        }
        let Oe = h.contextMap, Ae = h.configContextMap, oe = h.contextSourcesMap;
        function Ne(q, U, Z, K, X, ae) {
            let se = U.opts.from, Se = K !== null;
            h.env.DEBUG && console.log("Source path:", se);
            let fe;
            if (Se && Oe.has(se)) fe = Oe.get(se);
            else if (Ae.has(X)) {
                let ne = Ae.get(X);
                oe.get(ne).add(se), Oe.set(se, ne), fe = ne;
            }
            let Pe = (0, E.hasContentChanged)(se, q);
            if (fe) {
                let [ne, te] = B([
                    ...ae
                ], L(fe));
                if (!ne && !Pe) return [
                    fe,
                    !1,
                    te
                ];
            }
            if (Oe.has(se)) {
                let ne = Oe.get(se);
                if (oe.has(ne) && (oe.get(ne).delete(se), oe.get(ne).size === 0)) {
                    oe.delete(ne);
                    for (let [te, ue] of Ae)ue === ne && Ae.delete(te);
                    for (let te of ne.disposables.splice(0))te(ne);
                }
            }
            h.env.DEBUG && console.log("Setting up new context...");
            let ge = ye(Z, [], q);
            Object.assign(ge, {
                userConfigPath: K
            });
            let [, Ce] = B([
                ...ae
            ], L(ge));
            return Ae.set(X, ge), Oe.set(se, ge), oe.has(ge) || oe.set(ge, /* @__PURE__ */ new Set()), oe.get(ge).add(se), [
                ge,
                !0,
                Ce
            ];
        }
    }(Ir)), Ir;
}
var Xn = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "applyImportantSelector", {
        enumerable: !0,
        get: function() {
            return n;
        }
    });
    const e = /* @__PURE__ */ r(Ke), t = ur;
    function r(l) {
        return l && l.__esModule ? l : {
            default: l
        };
    }
    function n(l, i) {
        let c = (0, e.default)().astSync(l);
        return c.each((a)=>{
            a.nodes.some((f)=>f.type === "combinator") && (a.nodes = [
                e.default.pseudo({
                    value: ":is",
                    nodes: [
                        a.clone()
                    ]
                })
            ]), (0, t.movePseudos)(a);
        }), `${i} ${c.toString()}`;
    }
})(Xn);
var Ii;
function fr() {
    return Ii || (Ii = 1, function(s) {
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        function e(w, L) {
            for(var B in L)Object.defineProperty(w, B, {
                enumerable: !0,
                get: L[B]
            });
        }
        e(s, {
            getClassNameFromSelector: function() {
                return M;
            },
            resolveMatches: function() {
                return z;
            },
            generateRules: function() {
                return G;
            }
        });
        const t = /* @__PURE__ */ S(qe), r = /* @__PURE__ */ S(Ke), n = /* @__PURE__ */ S(jn), l = /* @__PURE__ */ S(dt), i = /* @__PURE__ */ S(lr), c = At, a = /* @__PURE__ */ S(et), o = /* @__PURE__ */ O(Et), f = Yn, u = Hn, p = Ct, _ = Kn(), x = /* @__PURE__ */ S(Jn), h = ot, m = it, C = Xn;
        function S(w) {
            return w && w.__esModule ? w : {
                default: w
            };
        }
        function k(w) {
            if (typeof WeakMap != "function") return null;
            var L = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap();
            return (k = function(H) {
                return H ? B : L;
            })(w);
        }
        function O(w, L) {
            if (w && w.__esModule) return w;
            if (w === null || typeof w != "object" && typeof w != "function") return {
                default: w
            };
            var B = k(L);
            if (B && B.has(w)) return B.get(w);
            var H = {}, Y = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for(var J in w)if (J !== "default" && Object.prototype.hasOwnProperty.call(w, J)) {
                var ee = Y ? Object.getOwnPropertyDescriptor(w, J) : null;
                ee && (ee.get || ee.set) ? Object.defineProperty(H, J, ee) : H[J] = w[J];
            }
            return H.default = w, B && B.set(w, H), H;
        }
        let E = (0, r.default)((w)=>w.first.filter(({ type: L })=>L === "class").pop().value);
        function M(w) {
            return E.transformSync(w);
        }
        function* D(w) {
            let L = 1 / 0;
            for(; L >= 0;){
                let B, H = !1;
                if (L === 1 / 0 && w.endsWith("]")) {
                    let ee = w.indexOf("[");
                    w[ee - 1] === "-" ? B = ee - 1 : w[ee - 1] === "/" ? (B = ee - 1, H = !0) : B = -1;
                } else L === 1 / 0 && w.includes("/") ? (B = w.lastIndexOf("/"), H = !0) : B = w.lastIndexOf("-", L);
                if (B < 0) break;
                let Y = w.slice(0, B), J = w.slice(H ? B : B + 1);
                L = B - 1, !(Y === "" || J === "/") && (yield [
                    Y,
                    J
                ]);
            }
        }
        function P(w, L) {
            if (w.length === 0 || L.tailwindConfig.prefix === "") return w;
            for (let B of w){
                let [H] = B;
                if (H.options.respectPrefix) {
                    let Y = t.default.root({
                        nodes: [
                            B[1].clone()
                        ]
                    }), J = B[1].raws.tailwind.classCandidate;
                    Y.walkRules((ee)=>{
                        let Q = J.startsWith("-");
                        ee.selector = (0, i.default)(L.tailwindConfig.prefix, ee.selector, Q);
                    }), B[1] = Y.nodes[0];
                }
            }
            return w;
        }
        function b(w, L) {
            if (w.length === 0) return w;
            let B = [];
            function H(Y) {
                return Y.parent && Y.parent.type === "atrule" && Y.parent.name === "keyframes";
            }
            for (let [Y, J] of w){
                let ee = t.default.root({
                    nodes: [
                        J.clone()
                    ]
                });
                ee.walkRules((Q)=>{
                    if (H(Q)) return;
                    let le = (0, r.default)().astSync(Q.selector);
                    le.each((ye)=>(0, f.eliminateIrrelevantSelectors)(ye, L)), (0, c.updateAllClasses)(le, (ye)=>ye === L ? `!${ye}` : ye), Q.selector = le.toString(), Q.walkDecls((ye)=>ye.important = !0);
                }), B.push([
                    {
                        ...Y,
                        important: !0
                    },
                    ee.nodes[0]
                ]);
            }
            return B;
        }
        function A(w, L, B) {
            if (L.length === 0) return L;
            let H = {
                modifier: null,
                value: o.NONE
            };
            {
                let [Q, ...le] = (0, h.splitAtTopLevelOnly)(w, "/");
                if (le.length > 1 && (Q = Q + "/" + le.slice(0, -1).join("/"), le = le.slice(-1)), le.length && !B.variantMap.has(w) && (w = Q, H.modifier = le[0], !(0, m.flagEnabled)(B.tailwindConfig, "generalizedModifiers"))) return [];
            }
            if (w.endsWith("]") && !w.startsWith("[")) {
                let Q = /(.)(-?)\[(.*)\]/g.exec(w);
                if (Q) {
                    let [, le, ye, Oe] = Q;
                    if (le === "@" && ye === "-") return [];
                    if (le !== "@" && ye === "") return [];
                    w = w.replace(`${ye}[${Oe}]`, ""), H.value = Oe;
                }
            }
            if (re(w) && !B.variantMap.has(w)) {
                let Q = B.offsets.recordVariant(w), le = (0, p.normalize)(w.slice(1, -1)), ye = (0, h.splitAtTopLevelOnly)(le, ",");
                if (ye.length > 1) return [];
                if (!ye.every(_.isValidVariantFormatString)) return [];
                let Oe = ye.map((Ae, oe)=>[
                        B.offsets.applyParallelOffset(Q, oe),
                        (0, _.parseVariant)(Ae.trim())
                    ]);
                B.variantMap.set(w, Oe);
            }
            if (B.variantMap.has(w)) {
                var Y;
                let Q = re(w);
                var J;
                let le = (J = (Y = B.variantOptions.get(w)) === null || Y === void 0 ? void 0 : Y[_.INTERNAL_FEATURES]) !== null && J !== void 0 ? J : {}, ye = B.variantMap.get(w).slice(), Oe = [], Ae = !(Q || le.respectPrefix === !1);
                for (let [oe, Ne] of L){
                    if (oe.layer === "user") continue;
                    let q = t.default.root({
                        nodes: [
                            Ne.clone()
                        ]
                    });
                    for (let [U, Z, K] of ye){
                        let se = function() {
                            X.raws.neededBackup || (X.raws.neededBackup = !0, X.walkRules((ge)=>ge.raws.originalSelector = ge.selector));
                        }, Se = function(ge) {
                            return se(), X.each((Ce)=>{
                                Ce.type === "rule" && (Ce.selectors = Ce.selectors.map((ne)=>ge({
                                        get className () {
                                            return M(ne);
                                        },
                                        selector: ne
                                    })));
                            }), X;
                        }, X = (K ?? q).clone(), ae = [], fe = Z({
                            // Public API
                            get container () {
                                return se(), X;
                            },
                            separator: B.tailwindConfig.separator,
                            modifySelectors: Se,
                            // Private API for now
                            wrap (ge) {
                                let Ce = X.nodes;
                                X.removeAll(), ge.append(Ce), X.append(ge);
                            },
                            format (ge) {
                                ae.push({
                                    format: ge,
                                    respectPrefix: Ae
                                });
                            },
                            args: H
                        });
                        if (Array.isArray(fe)) {
                            for (let [ge, Ce] of fe.entries())ye.push([
                                B.offsets.applyParallelOffset(U, ge),
                                Ce,
                                // If the clone has been modified we have to pass that back
                                // though so each rule can use the modified container
                                X.clone()
                            ]);
                            continue;
                        }
                        if (typeof fe == "string" && ae.push({
                            format: fe,
                            respectPrefix: Ae
                        }), fe === null) continue;
                        X.raws.neededBackup && (delete X.raws.neededBackup, X.walkRules((ge)=>{
                            let Ce = ge.raws.originalSelector;
                            if (!Ce || (delete ge.raws.originalSelector, Ce === ge.selector)) return;
                            let ne = ge.selector, te = (0, r.default)((ue)=>{
                                ue.walkClasses((ve)=>{
                                    ve.value = `${w}${B.tailwindConfig.separator}${ve.value}`;
                                });
                            }).processSync(Ce);
                            ae.push({
                                format: ne.replace(te, "&"),
                                respectPrefix: Ae
                            }), ge.selector = Ce;
                        })), X.nodes[0].raws.tailwind = {
                            ...X.nodes[0].raws.tailwind,
                            parentLayer: oe.layer
                        };
                        var ee;
                        let Pe = [
                            {
                                ...oe,
                                sort: B.offsets.applyVariantOffset(oe.sort, U, Object.assign(H, B.variantOptions.get(w))),
                                collectedFormats: ((ee = oe.collectedFormats) !== null && ee !== void 0 ? ee : []).concat(ae)
                            },
                            X.nodes[0]
                        ];
                        Oe.push(Pe);
                    }
                }
                return Oe;
            }
            return [];
        }
        function N(w, L, B = {}) {
            return !(0, l.default)(w) && !Array.isArray(w) ? [
                [
                    w
                ],
                B
            ] : Array.isArray(w) ? N(w[0], L, w[1]) : (L.has(w) || L.set(w, (0, n.default)(w)), [
                L.get(w),
                B
            ]);
        }
        const T = /^[a-z_-]/;
        function V(w) {
            return T.test(w);
        }
        function d(w) {
            if (!w.includes("://")) return !1;
            try {
                const L = new URL(w);
                return L.scheme !== "" && L.host !== "";
            } catch  {
                return !1;
            }
        }
        function g(w) {
            let L = !0;
            return w.walkDecls((B)=>{
                if (!v(B.prop, B.value)) return L = !1, !1;
            }), L;
        }
        function v(w, L) {
            if (d(`${w}:${L}`)) return !1;
            try {
                return t.default.parse(`a{${w}:${L}}`).toResult(), !0;
            } catch  {
                return !1;
            }
        }
        function y(w, L) {
            var B;
            let [, H, Y] = (B = w.match(/^\[([a-zA-Z0-9-_]+):(\S+)\]$/)) !== null && B !== void 0 ? B : [];
            if (Y === void 0 || !V(H) || !(0, x.default)(Y)) return null;
            let J = (0, p.normalize)(Y, {
                property: H
            });
            return v(H, J) ? [
                [
                    {
                        sort: L.offsets.arbitraryProperty(w),
                        layer: "utilities",
                        options: {
                            respectImportant: !0
                        }
                    },
                    ()=>({
                            [(0, u.asClass)(w)]: {
                                [H]: J
                            }
                        })
                ]
            ] : null;
        }
        function* R(w, L) {
            L.candidateRuleMap.has(w) && (yield [
                L.candidateRuleMap.get(w),
                "DEFAULT"
            ]), yield* function*(Q) {
                Q !== null && (yield [
                    Q,
                    "DEFAULT"
                ]);
            }(y(w, L));
            let B = w, H = !1;
            const Y = L.tailwindConfig.prefix, J = Y.length, ee = B.startsWith(Y) || B.startsWith(`-${Y}`);
            B[J] === "-" && ee && (H = !0, B = Y + B.slice(J + 1)), H && L.candidateRuleMap.has(B) && (yield [
                L.candidateRuleMap.get(B),
                "-DEFAULT"
            ]);
            for (let [Q, le] of D(B))L.candidateRuleMap.has(Q) && (yield [
                L.candidateRuleMap.get(Q),
                H ? `-${le}` : le
            ]);
        }
        function F(w, L) {
            return w === o.NOT_ON_DEMAND ? [
                o.NOT_ON_DEMAND
            ] : (0, h.splitAtTopLevelOnly)(w, L);
        }
        function* $(w, L) {
            for (const Y of w){
                var B, H;
                Y[1].raws.tailwind = {
                    ...Y[1].raws.tailwind,
                    classCandidate: L,
                    preserveSource: (H = (B = Y[0].options) === null || B === void 0 ? void 0 : B.preserveSource) !== null && H !== void 0 ? H : !1
                }, yield Y;
            }
        }
        function* z(w, L) {
            let B = L.tailwindConfig.separator, [H, ...Y] = F(w, B).reverse(), J = !1;
            H.startsWith("!") && (J = !0, H = H.slice(1));
            for (let Ae of R(H, L)){
                let oe = [], Ne = /* @__PURE__ */ new Map(), [q, U] = Ae, Z = q.length === 1;
                for (let [K, X] of q){
                    let ae = [];
                    if (typeof X == "function") for (let se of [].concat(X(U, {
                        isOnlyPlugin: Z
                    }))){
                        let [Se, fe] = N(se, L.postCssNodeCache);
                        for (let Pe of Se)ae.push([
                            {
                                ...K,
                                options: {
                                    ...K.options,
                                    ...fe
                                }
                            },
                            Pe
                        ]);
                    }
                    else if (U === "DEFAULT" || U === "-DEFAULT") {
                        let se = X, [Se, fe] = N(se, L.postCssNodeCache);
                        for (let Pe of Se)ae.push([
                            {
                                ...K,
                                options: {
                                    ...K.options,
                                    ...fe
                                }
                            },
                            Pe
                        ]);
                    }
                    if (ae.length > 0) {
                        var ee, Q, le;
                        let se = Array.from((0, c.getMatchingTypes)((Q = (ee = K.options) === null || ee === void 0 ? void 0 : ee.types) !== null && Q !== void 0 ? Q : [], U, (le = K.options) !== null && le !== void 0 ? le : {}, L.tailwindConfig)).map(([Se, fe])=>fe);
                        se.length > 0 && Ne.set(ae, se), oe.push(ae);
                    }
                }
                if (re(U)) {
                    if (oe.length > 1) {
                        let ae = function(Se) {
                            return Se.length === 1 ? Se[0] : Se.find((fe)=>{
                                let Pe = Ne.get(fe);
                                return fe.some(([{ options: ge }, Ce])=>g(Ce) ? ge.types.some(({ type: ne, preferOnConflict: te })=>Pe.includes(ne) && te) : !1);
                            });
                        }, [K, X] = oe.reduce((Se, fe)=>(fe.some(([{ options: ge }])=>ge.types.some(({ type: Ce })=>Ce === "any")) ? Se[0].push(fe) : Se[1].push(fe), Se), [
                            [],
                            []
                        ]);
                        var ye;
                        let se = (ye = ae(X)) !== null && ye !== void 0 ? ye : ae(K);
                        if (se) oe = [
                            se
                        ];
                        else {
                            var Oe;
                            let Se = oe.map((Pe)=>/* @__PURE__ */ new Set([
                                    ...(Oe = Ne.get(Pe)) !== null && Oe !== void 0 ? Oe : []
                                ]));
                            for (let Pe of Se)for (let ge of Pe){
                                let Ce = !1;
                                for (let ne of Se)Pe !== ne && ne.has(ge) && (ne.delete(ge), Ce = !0);
                                Ce && Pe.delete(ge);
                            }
                            let fe = [];
                            for (let [Pe, ge] of Se.entries())for (let Ce of ge){
                                let ne = oe[Pe].map(([, te])=>te).flat().map((te)=>te.toString().split(`
`).slice(1, -1).map((ue)=>ue.trim()).map((ue)=>`      ${ue}`).join(`
`)).join(`

`);
                                fe.push(`  Use \`${w.replace("[", `[${Ce}:`)}\` for \`${ne.trim()}\``);
                                break;
                            }
                            a.default.warn([
                                `The class \`${w}\` is ambiguous and matches multiple utilities.`,
                                ...fe,
                                `If this is content and not a class, replace it with \`${w.replace("[", "&lsqb;").replace("]", "&rsqb;")}\` to silence this warning.`
                            ]);
                            continue;
                        }
                    }
                    oe = oe.map((K)=>K.filter((X)=>g(X[1])));
                }
                oe = oe.flat(), oe = Array.from($(oe, H)), oe = P(oe, L), J && (oe = b(oe, H));
                for (let K of Y)oe = A(K, oe, L);
                for (let K of oe)K[1].raws.tailwind = {
                    ...K[1].raws.tailwind,
                    candidate: w
                }, K = j(K, {
                    context: L,
                    candidate: w
                }), K !== null && (yield K);
            }
        }
        function j(w, { context: L, candidate: B }) {
            if (!w[0].collectedFormats) return w;
            let H = !0, Y;
            try {
                Y = (0, f.formatVariantSelector)(w[0].collectedFormats, {
                    context: L,
                    candidate: B
                });
            } catch  {
                return null;
            }
            let J = t.default.root({
                nodes: [
                    w[1].clone()
                ]
            });
            return J.walkRules((ee)=>{
                if (!W(ee)) try {
                    let Q = (0, f.finalizeSelector)(ee.selector, Y, {
                        candidate: B,
                        context: L
                    });
                    if (Q === null) {
                        ee.remove();
                        return;
                    }
                    ee.selector = Q;
                } catch  {
                    return H = !1, !1;
                }
            }), !H || J.nodes.length === 0 ? null : (w[1] = J.nodes[0], w);
        }
        function W(w) {
            return w.parent && w.parent.type === "atrule" && w.parent.name === "keyframes";
        }
        function I(w) {
            if (w === !0) return (L)=>{
                W(L) || L.walkDecls((B)=>{
                    B.parent.type === "rule" && !W(B.parent) && (B.important = !0);
                });
            };
            if (typeof w == "string") return (L)=>{
                W(L) || (L.selectors = L.selectors.map((B)=>(0, C.applyImportantSelector)(B, w)));
            };
        }
        function G(w, L, B = !1) {
            let H = [], Y = I(L.tailwindConfig.important);
            for (let ee of w){
                if (L.notClassCache.has(ee)) continue;
                if (L.candidateRuleCache.has(ee)) {
                    H = H.concat(Array.from(L.candidateRuleCache.get(ee)));
                    continue;
                }
                let Q = Array.from(z(ee, L));
                if (Q.length === 0) {
                    L.notClassCache.add(ee);
                    continue;
                }
                L.classCache.set(ee, Q);
                var J;
                let le = (J = L.candidateRuleCache.get(ee)) !== null && J !== void 0 ? J : /* @__PURE__ */ new Set();
                L.candidateRuleCache.set(ee, le);
                for (const ye of Q){
                    let [{ sort: Oe, options: Ae }, oe] = ye;
                    if (Ae.respectImportant && Y) {
                        let q = t.default.root({
                            nodes: [
                                oe.clone()
                            ]
                        });
                        q.walkRules(Y), oe = q.nodes[0];
                    }
                    let Ne = [
                        Oe,
                        B ? oe.clone() : oe
                    ];
                    le.add(Ne), L.ruleCache.add(Ne), H.push(Ne);
                }
            }
            return H;
        }
        function re(w) {
            return w.startsWith("[") && w.endsWith("]");
        }
    }(Er)), Er;
}
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return M;
        }
    });
    const e = /* @__PURE__ */ c(qe), t = /* @__PURE__ */ c(Ke), r = fr(), n = /* @__PURE__ */ c(pt), l = Xn, i = ur;
    function c(D) {
        return D && D.__esModule ? D : {
            default: D
        };
    }
    function a(D) {
        let P = /* @__PURE__ */ new Map();
        e.default.root({
            nodes: [
                D.clone()
            ]
        }).walkRules((T)=>{
            (0, t.default)((V)=>{
                V.walkClasses((d)=>{
                    let g = d.parent.toString(), v = P.get(g);
                    v || P.set(g, v = /* @__PURE__ */ new Set()), v.add(d.value);
                });
            }).processSync(T.selector);
        });
        let A = Array.from(P.values(), (T)=>Array.from(T)), N = A.flat();
        return Object.assign(N, {
            groups: A
        });
    }
    let o = (0, t.default)();
    function f(D) {
        return o.astSync(D);
    }
    function u(D, P) {
        let b = /* @__PURE__ */ new Set();
        for (let A of D)b.add(A.split(P).pop());
        return Array.from(b);
    }
    function p(D, P) {
        let b = D.tailwindConfig.prefix;
        return typeof b == "function" ? b(P) : b + P;
    }
    function* _(D) {
        for(yield D; D.parent;)yield D.parent, D = D.parent;
    }
    function x(D, P = {}) {
        let b = D.nodes;
        D.nodes = [];
        let A = D.clone(P);
        return D.nodes = b, A;
    }
    function h(D) {
        for (let P of _(D))if (D !== P) {
            if (P.type === "root") break;
            D = x(P, {
                nodes: [
                    D
                ]
            });
        }
        return D;
    }
    function m(D, P) {
        let b = /* @__PURE__ */ new Map();
        return D.walkRules((A)=>{
            for (let d of _(A)){
                var N;
                if (((N = d.raws.tailwind) === null || N === void 0 ? void 0 : N.layer) !== void 0) return;
            }
            let T = h(A), V = P.offsets.create("user");
            for (let d of a(A)){
                let g = b.get(d) || [];
                b.set(d, g), g.push([
                    {
                        layer: "user",
                        sort: V,
                        important: !1
                    },
                    T
                ]);
            }
        }), b;
    }
    function C(D, P) {
        for (let b of D){
            if (P.notClassCache.has(b) || P.applyClassCache.has(b)) continue;
            if (P.classCache.has(b)) {
                P.applyClassCache.set(b, P.classCache.get(b).map(([N, T])=>[
                        N,
                        T.clone()
                    ]));
                continue;
            }
            let A = Array.from((0, r.resolveMatches)(b, P));
            if (A.length === 0) {
                P.notClassCache.add(b);
                continue;
            }
            P.applyClassCache.set(b, A);
        }
        return P.applyClassCache;
    }
    function S(D) {
        let P = null;
        return {
            get: (b)=>(P = P || D(), P.get(b)),
            has: (b)=>(P = P || D(), P.has(b))
        };
    }
    function k(D) {
        return {
            get: (P)=>D.flatMap((b)=>b.get(P) || []),
            has: (P)=>D.some((b)=>b.has(P))
        };
    }
    function O(D) {
        let P = D.split(/[\s\t\n]+/g);
        return P[P.length - 1] === "!important" ? [
            P.slice(0, -1),
            !0
        ] : [
            P,
            !1
        ];
    }
    function E(D, P, b) {
        let A = /* @__PURE__ */ new Set(), N = [];
        if (D.walkAtRules("apply", (g)=>{
            let [v] = O(g.params);
            for (let y of v)A.add(y);
            N.push(g);
        }), N.length === 0) return;
        let T = k([
            b,
            C(A, P)
        ]);
        function V(g, v, y) {
            let R = f(g), F = f(v), z = f(`.${(0, n.default)(y)}`).nodes[0].nodes[0];
            return R.each((j)=>{
                let W = /* @__PURE__ */ new Set();
                F.each((I)=>{
                    let G = !1;
                    I = I.clone(), I.walkClasses((re)=>{
                        re.value === z.value && (G || (re.replaceWith(...j.nodes.map((w)=>w.clone())), W.add(I), G = !0));
                    });
                });
                for (let I of W){
                    let G = [
                        []
                    ];
                    for (let re of I.nodes)re.type === "combinator" ? (G.push(re), G.push([])) : G[G.length - 1].push(re);
                    I.nodes = [];
                    for (let re of G)Array.isArray(re) && re.sort((w, L)=>w.type === "tag" && L.type === "class" ? -1 : w.type === "class" && L.type === "tag" ? 1 : w.type === "class" && L.type === "pseudo" && L.value.startsWith("::") ? -1 : w.type === "pseudo" && w.value.startsWith("::") && L.type === "class" ? 1 : 0), I.nodes = I.nodes.concat(re);
                }
                j.replaceWith(...W);
            }), R.toString();
        }
        let d = /* @__PURE__ */ new Map();
        for (let g of N){
            let [v] = d.get(g.parent) || [
                [],
                g.source
            ];
            d.set(g.parent, [
                v,
                g.source
            ]);
            let [y, R] = O(g.params);
            if (g.parent.type === "atrule") {
                if (g.parent.name === "screen") {
                    let F = g.parent.params;
                    throw g.error(`@apply is not supported within nested at-rules like @screen. We suggest you write this as @apply ${y.map(($)=>`${F}:${$}`).join(" ")} instead.`);
                }
                throw g.error(`@apply is not supported within nested at-rules like @${g.parent.name}. You can fix this by un-nesting @${g.parent.name}.`);
            }
            for (let F of y){
                if ([
                    p(P, "group"),
                    p(P, "peer")
                ].includes(F)) throw g.error(`@apply should not be used with the '${F}' utility`);
                if (!T.has(F)) throw g.error(`The \`${F}\` class does not exist. If \`${F}\` is a custom class, make sure it is defined within a \`@layer\` directive.`);
                let $ = T.get(F);
                for (let [, z] of $)z.type !== "atrule" && z.walkRules(()=>{
                    throw g.error([
                        `The \`${F}\` class cannot be used with \`@apply\` because \`@apply\` does not currently support nested CSS.`,
                        "Rewrite the selector without nesting or configure the `tailwindcss/nesting` plugin:",
                        "https://tailwindcss.com/docs/using-with-preprocessors#nesting"
                    ].join(`
`));
                });
                v.push([
                    F,
                    R,
                    $
                ]);
            }
        }
        for (let [g, [v, y]] of d){
            let R = [];
            for (let [$, z, j] of v){
                let W = [
                    $,
                    ...u([
                        $
                    ], P.tailwindConfig.separator)
                ];
                for (let [I, G] of j){
                    let re = a(g), w = a(G);
                    if (w = w.groups.filter((Y)=>Y.some((J)=>W.includes(J))).flat(), w = w.concat(u(w, P.tailwindConfig.separator)), re.some((Y)=>w.includes(Y))) throw G.error(`You cannot \`@apply\` the \`${$}\` utility here because it creates a circular dependency.`);
                    let B = e.default.root({
                        nodes: [
                            G.clone()
                        ]
                    });
                    B.walk((Y)=>{
                        Y.source = y;
                    }), (G.type !== "atrule" || G.type === "atrule" && G.name !== "keyframes") && B.walkRules((Y)=>{
                        if (!a(Y).some((ye)=>ye === $)) {
                            Y.remove();
                            return;
                        }
                        let J = typeof P.tailwindConfig.important == "string" ? P.tailwindConfig.important : null, Q = g.raws.tailwind !== void 0 && J && g.selector.indexOf(J) === 0 ? g.selector.slice(J.length) : g.selector;
                        Q === "" && (Q = g.selector), Y.selector = V(Q, Y.selector, $), J && Q !== g.selector && (Y.selector = (0, l.applyImportantSelector)(Y.selector, J)), Y.walkDecls((ye)=>{
                            ye.important = I.important || z;
                        });
                        let le = (0, t.default)().astSync(Y.selector);
                        le.each((ye)=>(0, i.movePseudos)(ye)), Y.selector = le.toString();
                    }), B.nodes[0] && R.push([
                        I.sort,
                        B.nodes[0]
                    ]);
                }
            }
            let F = P.offsets.sort(R).map(($)=>$[1]);
            g.after(F);
        }
        for (let g of N)g.parent.nodes.length > 1 ? g.remove() : g.parent.remove();
        E(D, P, b);
    }
    function M(D) {
        return (P)=>{
            let b = S(()=>m(P, D));
            E(P, D, b);
        };
    }
})(Pa);
const _c = /* @__PURE__ */ Qe(Pa);
var ls = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    });
    function e(p, _) {
        for(var x in _)Object.defineProperty(p, x, {
            enumerable: !0,
            get: _[x]
        });
    }
    e(s, {
        elementSelectorParser: function() {
            return a;
        },
        default: function() {
            return u;
        }
    });
    const t = /* @__PURE__ */ l(qe), r = /* @__PURE__ */ l(Ke), n = it;
    function l(p) {
        return p && p.__esModule ? p : {
            default: p
        };
    }
    let i = {
        id (p) {
            return r.default.attribute({
                attribute: "id",
                operator: "=",
                value: p.value,
                quoteMark: '"'
            });
        }
    };
    function c(p) {
        let _ = p.filter((k)=>k.type !== "pseudo" || k.nodes.length > 0 ? !0 : k.value.startsWith("::") || [
                ":before",
                ":after",
                ":first-line",
                ":first-letter"
            ].includes(k.value)).reverse(), x = /* @__PURE__ */ new Set([
            "tag",
            "class",
            "id",
            "attribute"
        ]), h = _.findIndex((k)=>x.has(k.type));
        if (h === -1) return _.reverse().join("").trim();
        let m = _[h], C = i[m.type] ? i[m.type](m) : m;
        _ = _.slice(0, h);
        let S = _.findIndex((k)=>k.type === "combinator" && k.value === ">");
        return S !== -1 && (_.splice(0, S), _.unshift(r.default.universal())), [
            C,
            ..._.reverse()
        ].join("").trim();
    }
    let a = (0, r.default)((p)=>p.map((_)=>{
            let x = _.split((h)=>h.type === "combinator" && h.value === " ").pop();
            return c(x);
        })), o = /* @__PURE__ */ new Map();
    function f(p) {
        return o.has(p) || o.set(p, a.transformSync(p)), o.get(p);
    }
    function u({ tailwindConfig: p }) {
        return (_)=>{
            let x = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Set();
            if (_.walkAtRules("defaults", (S)=>{
                if (S.nodes && S.nodes.length > 0) {
                    h.add(S);
                    return;
                }
                let k = S.params;
                x.has(k) || x.set(k, /* @__PURE__ */ new Set()), x.get(k).add(S.parent), S.remove();
            }), (0, n.flagEnabled)(p, "optimizeUniversalDefaults")) for (let S of h){
                let k = /* @__PURE__ */ new Map();
                var m;
                let O = (m = x.get(S.params)) !== null && m !== void 0 ? m : [];
                for (let E of O)for (let M of f(E.selector)){
                    let D = M.includes(":-") || M.includes("::-") || M.includes(":has") ? M : "__DEFAULT__";
                    var C;
                    let P = (C = k.get(D)) !== null && C !== void 0 ? C : /* @__PURE__ */ new Set();
                    k.set(D, P), P.add(M);
                }
                if ((0, n.flagEnabled)(p, "optimizeUniversalDefaults")) {
                    if (k.size === 0) {
                        S.remove();
                        continue;
                    }
                    for (let [, E] of k){
                        let M = t.default.rule({
                            source: S.source
                        });
                        M.selectors = [
                            ...E
                        ], M.append(S.nodes.map((D)=>D.clone())), S.before(M);
                    }
                }
                S.remove();
            }
            else if (h.size) {
                let S = t.default.rule({
                    selectors: [
                        "*",
                        "::before",
                        "::after"
                    ]
                });
                for (let O of h)S.append(O.nodes), S.parent || O.before(S), S.source || (S.source = O.source), O.remove();
                let k = S.clone({
                    selectors: [
                        "::backdrop"
                    ]
                });
                S.after(k);
            }
        };
    }
})(ls);
const Sc = /* @__PURE__ */ Qe(ls);
var Oc = fr(), us = {};
class kc {
    constructor(e = {}){
        if (!(e.maxSize && e.maxSize > 0)) throw new TypeError("`maxSize` must be a number greater than 0");
        if (typeof e.maxAge == "number" && e.maxAge === 0) throw new TypeError("`maxAge` must be a number greater than 0");
        this.maxSize = e.maxSize, this.maxAge = e.maxAge || 1 / 0, this.onEviction = e.onEviction, this.cache = /* @__PURE__ */ new Map(), this.oldCache = /* @__PURE__ */ new Map(), this._size = 0;
    }
    _emitEvictions(e) {
        if (typeof this.onEviction == "function") for (const [t, r] of e)this.onEviction(t, r.value);
    }
    _deleteIfExpired(e, t) {
        return typeof t.expiry == "number" && t.expiry <= Date.now() ? (typeof this.onEviction == "function" && this.onEviction(e, t.value), this.delete(e)) : !1;
    }
    _getOrDeleteIfExpired(e, t) {
        if (this._deleteIfExpired(e, t) === !1) return t.value;
    }
    _getItemValue(e, t) {
        return t.expiry ? this._getOrDeleteIfExpired(e, t) : t.value;
    }
    _peek(e, t) {
        const r = t.get(e);
        return this._getItemValue(e, r);
    }
    _set(e, t) {
        this.cache.set(e, t), this._size++, this._size >= this.maxSize && (this._size = 0, this._emitEvictions(this.oldCache), this.oldCache = this.cache, this.cache = /* @__PURE__ */ new Map());
    }
    _moveToRecent(e, t) {
        this.oldCache.delete(e), this._set(e, t);
    }
    *_entriesAscending() {
        for (const e of this.oldCache){
            const [t, r] = e;
            this.cache.has(t) || this._deleteIfExpired(t, r) === !1 && (yield e);
        }
        for (const e of this.cache){
            const [t, r] = e;
            this._deleteIfExpired(t, r) === !1 && (yield e);
        }
    }
    get(e) {
        if (this.cache.has(e)) {
            const t = this.cache.get(e);
            return this._getItemValue(e, t);
        }
        if (this.oldCache.has(e)) {
            const t = this.oldCache.get(e);
            if (this._deleteIfExpired(e, t) === !1) return this._moveToRecent(e, t), t.value;
        }
    }
    set(e, t, { maxAge: r = this.maxAge === 1 / 0 ? void 0 : Date.now() + this.maxAge } = {}) {
        this.cache.has(e) ? this.cache.set(e, {
            value: t,
            maxAge: r
        }) : this._set(e, {
            value: t,
            expiry: r
        });
    }
    has(e) {
        return this.cache.has(e) ? !this._deleteIfExpired(e, this.cache.get(e)) : this.oldCache.has(e) ? !this._deleteIfExpired(e, this.oldCache.get(e)) : !1;
    }
    peek(e) {
        if (this.cache.has(e)) return this._peek(e, this.cache);
        if (this.oldCache.has(e)) return this._peek(e, this.oldCache);
    }
    delete(e) {
        const t = this.cache.delete(e);
        return t && this._size--, this.oldCache.delete(e) || t;
    }
    clear() {
        this.cache.clear(), this.oldCache.clear(), this._size = 0;
    }
    resize(e) {
        if (!(e && e > 0)) throw new TypeError("`maxSize` must be a number greater than 0");
        const t = [
            ...this._entriesAscending()
        ], r = t.length - e;
        r < 0 ? (this.cache = new Map(t), this.oldCache = /* @__PURE__ */ new Map(), this._size = t.length) : (r > 0 && this._emitEvictions(t.slice(0, r)), this.oldCache = new Map(t.slice(r)), this.cache = /* @__PURE__ */ new Map(), this._size = 0), this.maxSize = e;
    }
    *keys() {
        for (const [e] of this)yield e;
    }
    *values() {
        for (const [, e] of this)yield e;
    }
    *[Symbol.iterator]() {
        for (const e of this.cache){
            const [t, r] = e;
            this._deleteIfExpired(t, r) === !1 && (yield [
                t,
                r.value
            ]);
        }
        for (const e of this.oldCache){
            const [t, r] = e;
            this.cache.has(t) || this._deleteIfExpired(t, r) === !1 && (yield [
                t,
                r.value
            ]);
        }
    }
    *entriesDescending() {
        let e = [
            ...this.cache
        ];
        for(let t = e.length - 1; t >= 0; --t){
            const r = e[t], [n, l] = r;
            this._deleteIfExpired(n, l) === !1 && (yield [
                n,
                l.value
            ]);
        }
        e = [
            ...this.oldCache
        ];
        for(let t = e.length - 1; t >= 0; --t){
            const r = e[t], [n, l] = r;
            this.cache.has(n) || this._deleteIfExpired(n, l) === !1 && (yield [
                n,
                l.value
            ]);
        }
    }
    *entriesAscending() {
        for (const [e, t] of this._entriesAscending())yield [
            e,
            t.value
        ];
    }
    get size() {
        if (!this._size) return this.oldCache.size;
        let e = 0;
        for (const t of this.oldCache.keys())this.cache.has(t) || e++;
        return Math.min(this._size + e, this.maxSize);
    }
}
var Ac = kc, fs = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return e;
        }
    });
    function e(r, n = void 0, l = void 0) {
        return r.map((i)=>{
            let c = i.clone();
            return l !== void 0 && (c.raws.tailwind = {
                ...c.raws.tailwind,
                ...l
            }), n !== void 0 && t(c, (a)=>{
                var o;
                if (((o = a.raws.tailwind) === null || o === void 0 ? void 0 : o.preserveSource) === !0 && a.source) return !1;
                a.source = n;
            }), c;
        });
    }
    function t(r, n) {
        if (n(r) !== !1) {
            var l;
            (l = r.each) === null || l === void 0 || l.call(r, (i)=>t(i, n));
        }
    }
})(fs);
var cs = {}, ds = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    });
    function e(p, _) {
        for(var x in _)Object.defineProperty(p, x, {
            enumerable: !0,
            get: _[x]
        });
    }
    e(s, {
        pattern: function() {
            return l;
        },
        withoutCapturing: function() {
            return i;
        },
        any: function() {
            return c;
        },
        optional: function() {
            return a;
        },
        zeroOrMore: function() {
            return o;
        },
        nestedBrackets: function() {
            return f;
        },
        escape: function() {
            return u;
        }
    });
    const t = /[\\^$.*+?()[\]{}|]/g, r = RegExp(t.source);
    function n(p) {
        return p = Array.isArray(p) ? p : [
            p
        ], p = p.map((_)=>_ instanceof RegExp ? _.source : _), p.join("");
    }
    function l(p) {
        return new RegExp(n(p), "g");
    }
    function i(p) {
        return new RegExp(`(?:${n(p)})`, "g");
    }
    function c(p) {
        return `(?:${p.map(n).join("|")})`;
    }
    function a(p) {
        return `(?:${n(p)})?`;
    }
    function o(p) {
        return `(?:${n(p)})*`;
    }
    function f(p, _, x = 1) {
        return i([
            u(p),
            /[^\s]*/,
            x === 1 ? `[^${u(p)}${u(_)}s]*` : c([
                `[^${u(p)}${u(_)}s]*`,
                f(p, _, x - 1)
            ]),
            /[^\s]*/,
            u(_)
        ]);
    }
    function u(p) {
        return p && r.test(p) ? p.replace(t, "\\$&") : p || "";
    }
})(ds);
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "defaultExtractor", {
        enumerable: !0,
        get: function() {
            return l;
        }
    });
    const e = /* @__PURE__ */ n(ds), t = ot;
    function r(f) {
        if (typeof WeakMap != "function") return null;
        var u = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap();
        return (r = function(_) {
            return _ ? p : u;
        })(f);
    }
    function n(f, u) {
        if (f && f.__esModule) return f;
        if (f === null || typeof f != "object" && typeof f != "function") return {
            default: f
        };
        var p = r(u);
        if (p && p.has(f)) return p.get(f);
        var _ = {}, x = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for(var h in f)if (h !== "default" && Object.prototype.hasOwnProperty.call(f, h)) {
            var m = x ? Object.getOwnPropertyDescriptor(f, h) : null;
            m && (m.get || m.set) ? Object.defineProperty(_, h, m) : _[h] = f[h];
        }
        return _.default = f, p && p.set(f, _), _;
    }
    function l(f) {
        let u = Array.from(i(f));
        return (p)=>{
            let _ = [];
            for (let h of u){
                var x;
                for (let m of (x = p.match(h)) !== null && x !== void 0 ? x : [])_.push(o(m));
            }
            for (let h of _.slice()){
                let m = (0, t.splitAtTopLevelOnly)(h, ".");
                for(let C = 0; C < m.length; C++){
                    let S = m[C];
                    if (C >= m.length - 1) {
                        _.push(S);
                        continue;
                    }
                    let k = Number(m[C + 1]);
                    isNaN(k) ? _.push(S) : C++;
                }
            }
            return _;
        };
    }
    function* i(f) {
        let u = f.tailwindConfig.separator, p = f.tailwindConfig.prefix !== "" ? e.optional(e.pattern([
            /-?/,
            e.escape(f.tailwindConfig.prefix)
        ])) : "", _ = e.any([
            // Arbitrary properties (without square brackets)
            /\[[^\s:'"`]+:[^\s\[\]]+\]/,
            // Arbitrary properties with balanced square brackets
            // This is a targeted fix to continue to allow theme()
            // with square brackets to work in arbitrary properties
            // while fixing a problem with the regex matching too much
            /\[[^\s:'"`\]]+:[^\s]+?\[[^\s]+\][^\s]+?\]/,
            // Utilities
            e.pattern([
                // Utility Name / Group Name
                e.any([
                    /-?(?:\w+)/,
                    // This is here to make sure @container supports everything that other utilities do
                    /@(?:\w+)/
                ]),
                // Normal/Arbitrary values
                e.optional(e.any([
                    e.pattern([
                        // Arbitrary values
                        e.any([
                            /-(?:\w+-)*\['[^\s]+'\]/,
                            /-(?:\w+-)*\["[^\s]+"\]/,
                            /-(?:\w+-)*\[`[^\s]+`\]/,
                            /-(?:\w+-)*\[(?:[^\s\[\]]+\[[^\s\[\]]+\])*[^\s:\[\]]+\]/
                        ]),
                        // Not immediately followed by an `{[(`
                        /(?![{([]])/,
                        // optionally followed by an opacity modifier
                        /(?:\/[^\s'"`\\><$]*)?/
                    ]),
                    e.pattern([
                        // Arbitrary values
                        e.any([
                            /-(?:\w+-)*\['[^\s]+'\]/,
                            /-(?:\w+-)*\["[^\s]+"\]/,
                            /-(?:\w+-)*\[`[^\s]+`\]/,
                            /-(?:\w+-)*\[(?:[^\s\[\]]+\[[^\s\[\]]+\])*[^\s\[\]]+\]/
                        ]),
                        // Not immediately followed by an `{[(`
                        /(?![{([]])/,
                        // optionally followed by an opacity modifier
                        /(?:\/[^\s'"`\\$]*)?/
                    ]),
                    // Normal values w/o quotes — may include an opacity modifier
                    /[-\/][^\s'"`\\$={><]*/
                ]))
            ])
        ]), x = [
            // Without quotes
            e.any([
                // This is here to provide special support for the `@` variant
                e.pattern([
                    /@\[[^\s"'`]+\](\/[^\s"'`]+)?/,
                    u
                ]),
                // With variant modifier (e.g.: group-[..]/modifier)
                e.pattern([
                    /([^\s"'`\[\\]+-)?\[[^\s"'`]+\]\/[\w_-]+/,
                    u
                ]),
                e.pattern([
                    /([^\s"'`\[\\]+-)?\[[^\s"'`]+\]/,
                    u
                ]),
                e.pattern([
                    /[^\s"'`\[\\]+/,
                    u
                ])
            ]),
            // With quotes allowed
            e.any([
                // With variant modifier (e.g.: group-[..]/modifier)
                e.pattern([
                    /([^\s"'`\[\\]+-)?\[[^\s`]+\]\/[\w_-]+/,
                    u
                ]),
                e.pattern([
                    /([^\s"'`\[\\]+-)?\[[^\s`]+\]/,
                    u
                ]),
                e.pattern([
                    /[^\s`\[\\]+/,
                    u
                ])
            ])
        ];
        for (const h of x)yield e.pattern([
            // Variants
            "((?=((",
            h,
            ")+))\\2)?",
            // Important (optional)
            /!?/,
            p,
            _
        ]);
        yield /[^<>"'`\s.(){}[\]#=%$][^<>"'`\s(){}[\]#=%$]*[^<>"'`\s.(){}[\]#=%:$]/g;
    }
    let c = /([\[\]'"`])([^\[\]'"`])?/g, a = /[^"'`\s<>\]]+/;
    function o(f) {
        if (!f.includes("-[")) return f;
        let u = 0, p = [], _ = f.matchAll(c);
        _ = Array.from(_).flatMap((x)=>{
            const [, ...h] = x;
            return h.map((m, C)=>Object.assign([], x, {
                    index: x.index + C,
                    0: m
                }));
        });
        for (let x of _){
            let h = x[0], m = p[p.length - 1];
            if (h === m ? p.pop() : (h === "'" || h === '"' || h === "`") && p.push(h), !m) {
                if (h === "[") {
                    u++;
                    continue;
                } else if (h === "]") {
                    u--;
                    continue;
                }
                if (u < 0) return f.substring(0, x.index - 1);
                if (u === 0 && !a.test(h)) return f.substring(0, x.index);
            }
        }
        return f;
    }
})(cs);
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return k;
        }
    });
    const e = /* @__PURE__ */ a(Le), t = /* @__PURE__ */ a(Ac), r = /* @__PURE__ */ f(Et), n = fr(), l = /* @__PURE__ */ a(et), i = /* @__PURE__ */ a(fs), c = cs;
    function a(O) {
        return O && O.__esModule ? O : {
            default: O
        };
    }
    function o(O) {
        if (typeof WeakMap != "function") return null;
        var E = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap();
        return (o = function(D) {
            return D ? M : E;
        })(O);
    }
    function f(O, E) {
        if (O && O.__esModule) return O;
        if (O === null || typeof O != "object" && typeof O != "function") return {
            default: O
        };
        var M = o(E);
        if (M && M.has(O)) return M.get(O);
        var D = {}, P = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for(var b in O)if (b !== "default" && Object.prototype.hasOwnProperty.call(O, b)) {
            var A = P ? Object.getOwnPropertyDescriptor(O, b) : null;
            A && (A.get || A.set) ? Object.defineProperty(D, b, A) : D[b] = O[b];
        }
        return D.default = O, M && M.set(O, D), D;
    }
    let u = r.env;
    const p = {
        DEFAULT: c.defaultExtractor
    }, _ = {
        DEFAULT: (O)=>O,
        svelte: (O)=>O.replace(/(?:^|\s)class:/g, " ")
    };
    function x(O, E) {
        let M = O.tailwindConfig.content.extract;
        return M[E] || M.DEFAULT || p[E] || p.DEFAULT(O);
    }
    function h(O, E) {
        let M = O.content.transform;
        return M[E] || M.DEFAULT || _[E] || _.DEFAULT;
    }
    let m = /* @__PURE__ */ new WeakMap();
    function C(O, E, M, D) {
        m.has(E) || m.set(E, new t.default({
            maxSize: 25e3
        }));
        for (let P of O.split(`
`))if (P = P.trim(), !D.has(P)) if (D.add(P), m.get(E).has(P)) for (let b of m.get(E).get(P))M.add(b);
        else {
            let b = E(P).filter((N)=>N !== "!*"), A = new Set(b);
            for (let N of A)M.add(N);
            m.get(E).set(P, A);
        }
    }
    function S(O, E) {
        let M = E.offsets.sort(O), D = {
            base: /* @__PURE__ */ new Set(),
            defaults: /* @__PURE__ */ new Set(),
            components: /* @__PURE__ */ new Set(),
            utilities: /* @__PURE__ */ new Set(),
            variants: /* @__PURE__ */ new Set()
        };
        for (let [P, b] of M)D[P.layer].add(b);
        return D;
    }
    function k(O) {
        return async (E)=>{
            let M = {
                base: null,
                components: null,
                utilities: null,
                variants: null
            };
            if (E.walkAtRules((j)=>{
                j.name === "tailwind" && Object.keys(M).includes(j.params) && (M[j.params] = j);
            }), Object.values(M).every((j)=>j === null)) return E;
            var D;
            let P = /* @__PURE__ */ new Set([
                ...(D = O.candidates) !== null && D !== void 0 ? D : [],
                r.NOT_ON_DEMAND
            ]), b = /* @__PURE__ */ new Set();
            u.DEBUG && console.time("Reading changed files");
            let A = [];
            for (let j of O.changedContent){
                let W = h(O.tailwindConfig, j.extension), I = x(O, j.extension);
                A.push([
                    j,
                    {
                        transformer: W,
                        extractor: I
                    }
                ]);
            }
            const N = 500;
            for(let j = 0; j < A.length; j += N){
                let W = A.slice(j, j + N);
                await Promise.all(W.map(async ([{ file: I, content: G }, { transformer: re, extractor: w }])=>{
                    G = I ? await e.default.promises.readFile(I, "utf8") : G, C(re(G), w, P, b);
                }));
            }
            u.DEBUG && console.timeEnd("Reading changed files");
            let T = O.classCache.size;
            u.DEBUG && console.time("Generate rules"), u.DEBUG && console.time("Sorting candidates");
            let V = new Set([
                ...P
            ].sort((j, W)=>j === W ? 0 : j < W ? -1 : 1));
            u.DEBUG && console.timeEnd("Sorting candidates"), (0, n.generateRules)(V, O), u.DEBUG && console.timeEnd("Generate rules"), u.DEBUG && console.time("Build stylesheet"), (O.stylesheetCache === null || O.classCache.size !== T) && (O.stylesheetCache = S([
                ...O.ruleCache
            ], O)), u.DEBUG && console.timeEnd("Build stylesheet");
            let { defaults: d, base: g, components: v, utilities: y, variants: R } = O.stylesheetCache;
            M.base && (M.base.before((0, i.default)([
                ...g,
                ...d
            ], M.base.source, {
                layer: "base"
            })), M.base.remove()), M.components && (M.components.before((0, i.default)([
                ...v
            ], M.components.source, {
                layer: "components"
            })), M.components.remove()), M.utilities && (M.utilities.before((0, i.default)([
                ...y
            ], M.utilities.source, {
                layer: "utilities"
            })), M.utilities.remove());
            const F = Array.from(R).filter((j)=>{
                var W;
                const I = (W = j.raws.tailwind) === null || W === void 0 ? void 0 : W.parentLayer;
                return I === "components" ? M.components !== null : I === "utilities" ? M.utilities !== null : !0;
            });
            M.variants ? (M.variants.before((0, i.default)(F, M.variants.source, {
                layer: "variants"
            })), M.variants.remove()) : F.length > 0 && E.append((0, i.default)(F, E.source, {
                layer: "variants"
            }));
            var $;
            E.source.end = ($ = E.source.end) !== null && $ !== void 0 ? $ : E.source.start;
            const z = F.some((j)=>{
                var W;
                return ((W = j.raws.tailwind) === null || W === void 0 ? void 0 : W.parentLayer) === "utilities";
            });
            M.utilities && y.size === 0 && !z && l.default.warn("content-problems", [
                "No utility classes were detected in your source files. If this is unexpected, double-check the `content` option in your Tailwind CSS configuration.",
                "https://tailwindcss.com/docs/content-configuration"
            ]), u.DEBUG && (console.log("Potential classes: ", P.size), console.log("Active contexts: ", r.contextSourcesMap.size)), O.changedContent = [], E.walkAtRules("layer", (j)=>{
                Object.keys(M).includes(j.params) && j.remove();
            });
        };
    }
})(us);
const Cc = /* @__PURE__ */ Qe(us);
var ps = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return t;
        }
    });
    function e(r) {
        if (!r.walkAtRules) return;
        let n = /* @__PURE__ */ new Set();
        if (r.walkAtRules("apply", (l)=>{
            n.add(l.parent);
        }), n.size !== 0) for (let l of n){
            let i = [], c = [];
            for (let a of l.nodes)a.type === "atrule" && a.name === "apply" ? (c.length > 0 && (i.push(c), c = []), i.push([
                a
            ])) : c.push(a);
            if (c.length > 0 && i.push(c), i.length !== 1) {
                for (let a of [
                    ...i
                ].reverse()){
                    let o = l.clone({
                        nodes: []
                    });
                    o.append(a), l.after(o);
                }
                l.remove();
            }
        }
    }
    function t() {
        return (r)=>{
            e(r);
        };
    }
})(ps);
const Ri = /* @__PURE__ */ Qe(ps);
var hs = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return n;
        }
    });
    const e = rr, t = /* @__PURE__ */ r(nr);
    function r(l) {
        return l && l.__esModule ? l : {
            default: l
        };
    }
    function n({ tailwindConfig: { theme: l } }) {
        return function(i) {
            i.walkAtRules("screen", (c)=>{
                let a = c.params, f = (0, e.normalizeScreens)(l.screens).find(({ name: u })=>u === a);
                if (!f) throw c.error(`No \`${a}\` screen found.`);
                c.name = "media", c.params = (0, t.default)(f);
            });
        };
    }
})(hs);
const Ec = /* @__PURE__ */ Qe(hs);
var ms = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return r;
        }
    });
    let e = {
        atrule: [
            "name",
            "params"
        ],
        rule: [
            "selector"
        ]
    }, t = new Set(Object.keys(e));
    function r() {
        function n(l) {
            let i = null;
            l.each((c)=>{
                if (!t.has(c.type)) {
                    i = null;
                    return;
                }
                if (i === null) {
                    i = c;
                    return;
                }
                let a = e[c.type];
                var o, f;
                c.type === "atrule" && c.name === "font-face" ? i = c : a.every((u)=>((o = c[u]) !== null && o !== void 0 ? o : "").replace(/\s+/g, " ") === ((f = i[u]) !== null && f !== void 0 ? f : "").replace(/\s+/g, " ")) ? (c.nodes && i.append(c.nodes), c.remove()) : i = c;
            }), l.each((c)=>{
                c.type === "atrule" && n(c);
            });
        }
        return (l)=>{
            n(l);
        };
    }
})(ms);
const Pc = /* @__PURE__ */ Qe(ms);
var gs = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return e;
        }
    });
    function e() {
        return (n)=>{
            n.walkRules((l)=>{
                let i = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set([]), a = /* @__PURE__ */ new Map();
                l.walkDecls((o)=>{
                    if (o.parent === l) {
                        if (i.has(o.prop)) {
                            if (i.get(o.prop).value === o.value) {
                                c.add(i.get(o.prop)), i.set(o.prop, o);
                                return;
                            }
                            a.has(o.prop) || a.set(o.prop, /* @__PURE__ */ new Set()), a.get(o.prop).add(i.get(o.prop)), a.get(o.prop).add(o);
                        }
                        i.set(o.prop, o);
                    }
                });
                for (let o of c)o.remove();
                for (let o of a.values()){
                    let f = /* @__PURE__ */ new Map();
                    for (let u of o){
                        let p = r(u.value);
                        p !== null && (f.has(p) || f.set(p, /* @__PURE__ */ new Set()), f.get(p).add(u));
                    }
                    for (let u of f.values()){
                        let p = Array.from(u).slice(0, -1);
                        for (let _ of p)_.remove();
                    }
                }
            });
        };
    }
    let t = Symbol("unitless-number");
    function r(n) {
        let l = /^-?\d*.?\d+([\w%]+)?$/g.exec(n);
        if (l) {
            var i;
            return (i = l[1]) !== null && i !== void 0 ? i : t;
        }
        return null;
    }
})(gs);
const Tc = /* @__PURE__ */ Qe(gs), Zn = (s)=>{
    if (s.first === void 0) {
        const e = s.parent;
        e && (s.remove(), Zn(e));
    }
}, Mc = (s, e)=>s instanceof xi && e instanceof xi ? s.selector === e.selector || e.selector.includes("*") || e.selector.includes(":root") : s === e, Ic = (s)=>(s.walkRules((e)=>{
        const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
        e.walkDecls((n)=>{
            if (/var\(--[^\s)]+\)/.test(n.value)) {
                const l = /var\(--[^\s)]+\)/gm.exec(n.value);
                s.walkDecls((i)=>{
                    var c;
                    if (/--[^\s]+/.test(i.prop)) {
                        const a = `var(${i.prop})`;
                        if (l && l.includes(a) && Mc(n.parent, i.parent)) {
                            if (((c = i.parent) == null ? void 0 : c.parent) instanceof kl && i.parent !== n.parent) {
                                const o = i.parent.parent, f = Ol();
                                f.prop = n.prop, f.value = n.value.replaceAll(a, i.value), f.important = n.important;
                                const u = t.get(o);
                                u ? u.add(f) : t.set(i.parent.parent, /* @__PURE__ */ new Set([
                                    f
                                ]));
                                return;
                            }
                            r.add({
                                declaration: n,
                                newValue: n.value.replaceAll(a, i.value)
                            });
                        }
                    }
                });
            }
        });
        for (const { declaration: n, newValue: l } of r)n.value = l;
        for (const [n, l] of t.entries()){
            const i = Sl();
            i.selector = e.selector, i.append(...l), n.append(i);
        }
    }), s.walkDecls((e)=>{
        if (/--[^\s]+/.test(e.prop)) {
            const t = e.parent;
            e.remove(), t && Zn(t);
        }
    }), s);
var Rc = Kn(), vs = {}, ys = {}, ws = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return e;
        }
    });
    const e = [
        "preflight",
        "container",
        "accessibility",
        "pointerEvents",
        "visibility",
        "position",
        "inset",
        "isolation",
        "zIndex",
        "order",
        "gridColumn",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRow",
        "gridRowStart",
        "gridRowEnd",
        "float",
        "clear",
        "margin",
        "boxSizing",
        "lineClamp",
        "display",
        "aspectRatio",
        "size",
        "height",
        "maxHeight",
        "minHeight",
        "width",
        "minWidth",
        "maxWidth",
        "flex",
        "flexShrink",
        "flexGrow",
        "flexBasis",
        "tableLayout",
        "captionSide",
        "borderCollapse",
        "borderSpacing",
        "transformOrigin",
        "translate",
        "rotate",
        "skew",
        "scale",
        "transform",
        "animation",
        "cursor",
        "touchAction",
        "userSelect",
        "resize",
        "scrollSnapType",
        "scrollSnapAlign",
        "scrollSnapStop",
        "scrollMargin",
        "scrollPadding",
        "listStylePosition",
        "listStyleType",
        "listStyleImage",
        "appearance",
        "columns",
        "breakBefore",
        "breakInside",
        "breakAfter",
        "gridAutoColumns",
        "gridAutoFlow",
        "gridAutoRows",
        "gridTemplateColumns",
        "gridTemplateRows",
        "flexDirection",
        "flexWrap",
        "placeContent",
        "placeItems",
        "alignContent",
        "alignItems",
        "justifyContent",
        "justifyItems",
        "gap",
        "space",
        "divideWidth",
        "divideStyle",
        "divideColor",
        "divideOpacity",
        "placeSelf",
        "alignSelf",
        "justifySelf",
        "overflow",
        "overscrollBehavior",
        "scrollBehavior",
        "textOverflow",
        "hyphens",
        "whitespace",
        "textWrap",
        "wordBreak",
        "borderRadius",
        "borderWidth",
        "borderStyle",
        "borderColor",
        "borderOpacity",
        "backgroundColor",
        "backgroundOpacity",
        "backgroundImage",
        "gradientColorStops",
        "boxDecorationBreak",
        "backgroundSize",
        "backgroundAttachment",
        "backgroundClip",
        "backgroundPosition",
        "backgroundRepeat",
        "backgroundOrigin",
        "fill",
        "stroke",
        "strokeWidth",
        "objectFit",
        "objectPosition",
        "padding",
        "textAlign",
        "textIndent",
        "verticalAlign",
        "fontFamily",
        "fontSize",
        "fontWeight",
        "textTransform",
        "fontStyle",
        "fontVariantNumeric",
        "lineHeight",
        "letterSpacing",
        "textColor",
        "textOpacity",
        "textDecoration",
        "textDecorationColor",
        "textDecorationStyle",
        "textDecorationThickness",
        "textUnderlineOffset",
        "fontSmoothing",
        "placeholderColor",
        "placeholderOpacity",
        "caretColor",
        "accentColor",
        "opacity",
        "backgroundBlendMode",
        "mixBlendMode",
        "boxShadow",
        "boxShadowColor",
        "outlineStyle",
        "outlineWidth",
        "outlineOffset",
        "outlineColor",
        "ringWidth",
        "ringColor",
        "ringOpacity",
        "ringOffsetWidth",
        "ringOffsetColor",
        "blur",
        "brightness",
        "contrast",
        "dropShadow",
        "grayscale",
        "hueRotate",
        "invert",
        "saturate",
        "sepia",
        "filter",
        "backdropBlur",
        "backdropBrightness",
        "backdropContrast",
        "backdropGrayscale",
        "backdropHueRotate",
        "backdropInvert",
        "backdropOpacity",
        "backdropSaturate",
        "backdropSepia",
        "backdropFilter",
        "transitionProperty",
        "transitionDelay",
        "transitionDuration",
        "transitionTimingFunction",
        "willChange",
        "contain",
        "content",
        "forcedColorAdjust"
    ];
})(ws);
var bs = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return e;
        }
    });
    function e(t, r) {
        return t === void 0 ? r : Array.isArray(t) ? t : [
            ...new Set(r.filter((l)=>t !== !1 && t[l] !== !1).concat(Object.keys(t).filter((l)=>t[l] !== !1)))
        ];
    }
})(bs);
var xs = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return n;
        }
    });
    const e = /* @__PURE__ */ t(et);
    function t(l) {
        return l && l.__esModule ? l : {
            default: l
        };
    }
    function r({ version: l, from: i, to: c }) {
        e.default.warn(`${i}-color-renamed`, [
            `As of Tailwind CSS ${l}, \`${i}\` has been renamed to \`${c}\`.`,
            "Update your configuration file to silence this warning."
        ]);
    }
    const n = {
        inherit: "inherit",
        current: "currentColor",
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        slate: {
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            300: "#cbd5e1",
            400: "#94a3b8",
            500: "#64748b",
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a",
            950: "#020617"
        },
        gray: {
            50: "#f9fafb",
            100: "#f3f4f6",
            200: "#e5e7eb",
            300: "#d1d5db",
            400: "#9ca3af",
            500: "#6b7280",
            600: "#4b5563",
            700: "#374151",
            800: "#1f2937",
            900: "#111827",
            950: "#030712"
        },
        zinc: {
            50: "#fafafa",
            100: "#f4f4f5",
            200: "#e4e4e7",
            300: "#d4d4d8",
            400: "#a1a1aa",
            500: "#71717a",
            600: "#52525b",
            700: "#3f3f46",
            800: "#27272a",
            900: "#18181b",
            950: "#09090b"
        },
        neutral: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#e5e5e5",
            300: "#d4d4d4",
            400: "#a3a3a3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#171717",
            950: "#0a0a0a"
        },
        stone: {
            50: "#fafaf9",
            100: "#f5f5f4",
            200: "#e7e5e4",
            300: "#d6d3d1",
            400: "#a8a29e",
            500: "#78716c",
            600: "#57534e",
            700: "#44403c",
            800: "#292524",
            900: "#1c1917",
            950: "#0c0a09"
        },
        red: {
            50: "#fef2f2",
            100: "#fee2e2",
            200: "#fecaca",
            300: "#fca5a5",
            400: "#f87171",
            500: "#ef4444",
            600: "#dc2626",
            700: "#b91c1c",
            800: "#991b1b",
            900: "#7f1d1d",
            950: "#450a0a"
        },
        orange: {
            50: "#fff7ed",
            100: "#ffedd5",
            200: "#fed7aa",
            300: "#fdba74",
            400: "#fb923c",
            500: "#f97316",
            600: "#ea580c",
            700: "#c2410c",
            800: "#9a3412",
            900: "#7c2d12",
            950: "#431407"
        },
        amber: {
            50: "#fffbeb",
            100: "#fef3c7",
            200: "#fde68a",
            300: "#fcd34d",
            400: "#fbbf24",
            500: "#f59e0b",
            600: "#d97706",
            700: "#b45309",
            800: "#92400e",
            900: "#78350f",
            950: "#451a03"
        },
        yellow: {
            50: "#fefce8",
            100: "#fef9c3",
            200: "#fef08a",
            300: "#fde047",
            400: "#facc15",
            500: "#eab308",
            600: "#ca8a04",
            700: "#a16207",
            800: "#854d0e",
            900: "#713f12",
            950: "#422006"
        },
        lime: {
            50: "#f7fee7",
            100: "#ecfccb",
            200: "#d9f99d",
            300: "#bef264",
            400: "#a3e635",
            500: "#84cc16",
            600: "#65a30d",
            700: "#4d7c0f",
            800: "#3f6212",
            900: "#365314",
            950: "#1a2e05"
        },
        green: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e",
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
            900: "#14532d",
            950: "#052e16"
        },
        emerald: {
            50: "#ecfdf5",
            100: "#d1fae5",
            200: "#a7f3d0",
            300: "#6ee7b7",
            400: "#34d399",
            500: "#10b981",
            600: "#059669",
            700: "#047857",
            800: "#065f46",
            900: "#064e3b",
            950: "#022c22"
        },
        teal: {
            50: "#f0fdfa",
            100: "#ccfbf1",
            200: "#99f6e4",
            300: "#5eead4",
            400: "#2dd4bf",
            500: "#14b8a6",
            600: "#0d9488",
            700: "#0f766e",
            800: "#115e59",
            900: "#134e4a",
            950: "#042f2e"
        },
        cyan: {
            50: "#ecfeff",
            100: "#cffafe",
            200: "#a5f3fc",
            300: "#67e8f9",
            400: "#22d3ee",
            500: "#06b6d4",
            600: "#0891b2",
            700: "#0e7490",
            800: "#155e75",
            900: "#164e63",
            950: "#083344"
        },
        sky: {
            50: "#f0f9ff",
            100: "#e0f2fe",
            200: "#bae6fd",
            300: "#7dd3fc",
            400: "#38bdf8",
            500: "#0ea5e9",
            600: "#0284c7",
            700: "#0369a1",
            800: "#075985",
            900: "#0c4a6e",
            950: "#082f49"
        },
        blue: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#2563eb",
            700: "#1d4ed8",
            800: "#1e40af",
            900: "#1e3a8a",
            950: "#172554"
        },
        indigo: {
            50: "#eef2ff",
            100: "#e0e7ff",
            200: "#c7d2fe",
            300: "#a5b4fc",
            400: "#818cf8",
            500: "#6366f1",
            600: "#4f46e5",
            700: "#4338ca",
            800: "#3730a3",
            900: "#312e81",
            950: "#1e1b4b"
        },
        violet: {
            50: "#f5f3ff",
            100: "#ede9fe",
            200: "#ddd6fe",
            300: "#c4b5fd",
            400: "#a78bfa",
            500: "#8b5cf6",
            600: "#7c3aed",
            700: "#6d28d9",
            800: "#5b21b6",
            900: "#4c1d95",
            950: "#2e1065"
        },
        purple: {
            50: "#faf5ff",
            100: "#f3e8ff",
            200: "#e9d5ff",
            300: "#d8b4fe",
            400: "#c084fc",
            500: "#a855f7",
            600: "#9333ea",
            700: "#7e22ce",
            800: "#6b21a8",
            900: "#581c87",
            950: "#3b0764"
        },
        fuchsia: {
            50: "#fdf4ff",
            100: "#fae8ff",
            200: "#f5d0fe",
            300: "#f0abfc",
            400: "#e879f9",
            500: "#d946ef",
            600: "#c026d3",
            700: "#a21caf",
            800: "#86198f",
            900: "#701a75",
            950: "#4a044e"
        },
        pink: {
            50: "#fdf2f8",
            100: "#fce7f3",
            200: "#fbcfe8",
            300: "#f9a8d4",
            400: "#f472b6",
            500: "#ec4899",
            600: "#db2777",
            700: "#be185d",
            800: "#9d174d",
            900: "#831843",
            950: "#500724"
        },
        rose: {
            50: "#fff1f2",
            100: "#ffe4e6",
            200: "#fecdd3",
            300: "#fda4af",
            400: "#fb7185",
            500: "#f43f5e",
            600: "#e11d48",
            700: "#be123c",
            800: "#9f1239",
            900: "#881337",
            950: "#4c0519"
        },
        get lightBlue () {
            return r({
                version: "v2.2",
                from: "lightBlue",
                to: "sky"
            }), this.sky;
        },
        get warmGray () {
            return r({
                version: "v3.0",
                from: "warmGray",
                to: "stone"
            }), this.stone;
        },
        get trueGray () {
            return r({
                version: "v3.0",
                from: "trueGray",
                to: "neutral"
            }), this.neutral;
        },
        get coolGray () {
            return r({
                version: "v3.0",
                from: "coolGray",
                to: "gray"
            }), this.gray;
        },
        get blueGray () {
            return r({
                version: "v3.0",
                from: "blueGray",
                to: "slate"
            }), this.slate;
        }
    };
})(xs);
var _s = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "defaults", {
        enumerable: !0,
        get: function() {
            return e;
        }
    });
    function e(t, ...r) {
        for (let i of r){
            for(let c in i){
                var n;
                !(t == null || (n = t.hasOwnProperty) === null || n === void 0) && n.call(t, c) || (t[c] = i[c]);
            }
            for (let c of Object.getOwnPropertySymbols(i)){
                var l;
                !(t == null || (l = t.hasOwnProperty) === null || l === void 0) && l.call(t, c) || (t[c] = i[c]);
            }
        }
        return t;
    }
})(_s);
var Ss = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "normalizeConfig", {
        enumerable: !0,
        get: function() {
            return l;
        }
    });
    const e = it, t = /* @__PURE__ */ n(et);
    function r(i) {
        if (typeof WeakMap != "function") return null;
        var c = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
        return (r = function(o) {
            return o ? a : c;
        })(i);
    }
    function n(i, c) {
        if (i && i.__esModule) return i;
        if (i === null || typeof i != "object" && typeof i != "function") return {
            default: i
        };
        var a = r(c);
        if (a && a.has(i)) return a.get(i);
        var o = {}, f = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for(var u in i)if (u !== "default" && Object.prototype.hasOwnProperty.call(i, u)) {
            var p = f ? Object.getOwnPropertyDescriptor(i, u) : null;
            p && (p.get || p.set) ? Object.defineProperty(o, u, p) : o[u] = i[u];
        }
        return o.default = i, a && a.set(i, o), o;
    }
    function l(i) {
        if ((()=>{
            if (i.purge || !i.content || !Array.isArray(i.content) && !(typeof i.content == "object" && i.content !== null)) return !1;
            if (Array.isArray(i.content)) return i.content.every((o)=>typeof o == "string" ? !0 : !(typeof (o == null ? void 0 : o.raw) != "string" || o != null && o.extension && typeof (o == null ? void 0 : o.extension) != "string"));
            if (typeof i.content == "object" && i.content !== null) {
                if (Object.keys(i.content).some((o)=>![
                        "files",
                        "relative",
                        "extract",
                        "transform"
                    ].includes(o))) return !1;
                if (Array.isArray(i.content.files)) {
                    if (!i.content.files.every((o)=>typeof o == "string" ? !0 : !(typeof (o == null ? void 0 : o.raw) != "string" || o != null && o.extension && typeof (o == null ? void 0 : o.extension) != "string"))) return !1;
                    if (typeof i.content.extract == "object") {
                        for (let o of Object.values(i.content.extract))if (typeof o != "function") return !1;
                    } else if (!(i.content.extract === void 0 || typeof i.content.extract == "function")) return !1;
                    if (typeof i.content.transform == "object") {
                        for (let o of Object.values(i.content.transform))if (typeof o != "function") return !1;
                    } else if (!(i.content.transform === void 0 || typeof i.content.transform == "function")) return !1;
                    if (typeof i.content.relative != "boolean" && typeof i.content.relative < "u") return !1;
                }
                return !0;
            }
            return !1;
        })() || t.default.warn("purge-deprecation", [
            "The `purge`/`content` options have changed in Tailwind CSS v3.0.",
            "Update your configuration file to eliminate this warning.",
            "https://tailwindcss.com/docs/upgrade-guide#configure-content-sources"
        ]), i.safelist = (()=>{
            var o;
            let { content: f, purge: u, safelist: p } = i;
            return Array.isArray(p) ? p : Array.isArray(f == null ? void 0 : f.safelist) ? f.safelist : Array.isArray(u == null ? void 0 : u.safelist) ? u.safelist : Array.isArray(u == null || (o = u.options) === null || o === void 0 ? void 0 : o.safelist) ? u.options.safelist : [];
        })(), i.blocklist = (()=>{
            let { blocklist: o } = i;
            if (Array.isArray(o)) {
                if (o.every((f)=>typeof f == "string")) return o;
                t.default.warn("blocklist-invalid", [
                    "The `blocklist` option must be an array of strings.",
                    "https://tailwindcss.com/docs/content-configuration#discarding-classes"
                ]);
            }
            return [];
        })(), typeof i.prefix == "function") t.default.warn("prefix-function", [
            "As of Tailwind CSS v3.0, `prefix` cannot be a function.",
            "Update `prefix` in your configuration to be a string to eliminate this warning.",
            "https://tailwindcss.com/docs/upgrade-guide#prefix-cannot-be-a-function"
        ]), i.prefix = "";
        else {
            var a;
            i.prefix = (a = i.prefix) !== null && a !== void 0 ? a : "";
        }
        i.content = {
            relative: (()=>{
                let { content: o } = i;
                return o != null && o.relative ? o.relative : (0, e.flagEnabled)(i, "relativeContentPathsByDefault");
            })(),
            files: (()=>{
                let { content: o, purge: f } = i;
                return Array.isArray(f) ? f : Array.isArray(f == null ? void 0 : f.content) ? f.content : Array.isArray(o) ? o : Array.isArray(o == null ? void 0 : o.content) ? o.content : Array.isArray(o == null ? void 0 : o.files) ? o.files : [];
            })(),
            extract: (()=>{
                let o = (()=>{
                    var p, _, x, h, m, C, S, k, O, E;
                    return !((p = i.purge) === null || p === void 0) && p.extract ? i.purge.extract : !((_ = i.content) === null || _ === void 0) && _.extract ? i.content.extract : !((x = i.purge) === null || x === void 0 || (h = x.extract) === null || h === void 0) && h.DEFAULT ? i.purge.extract.DEFAULT : !((m = i.content) === null || m === void 0 || (C = m.extract) === null || C === void 0) && C.DEFAULT ? i.content.extract.DEFAULT : !((S = i.purge) === null || S === void 0 || (k = S.options) === null || k === void 0) && k.extractors ? i.purge.options.extractors : !((O = i.content) === null || O === void 0 || (E = O.options) === null || E === void 0) && E.extractors ? i.content.options.extractors : {};
                })(), f = {}, u = (()=>{
                    var p, _, x, h;
                    if (!((p = i.purge) === null || p === void 0 || (_ = p.options) === null || _ === void 0) && _.defaultExtractor) return i.purge.options.defaultExtractor;
                    if (!((x = i.content) === null || x === void 0 || (h = x.options) === null || h === void 0) && h.defaultExtractor) return i.content.options.defaultExtractor;
                })();
                if (u !== void 0 && (f.DEFAULT = u), typeof o == "function") f.DEFAULT = o;
                else if (Array.isArray(o)) for (let { extensions: p, extractor: _ } of o ?? [])for (let x of p)f[x] = _;
                else typeof o == "object" && o !== null && Object.assign(f, o);
                return f;
            })(),
            transform: (()=>{
                let o = (()=>{
                    var u, p, _, x, h, m;
                    return !((u = i.purge) === null || u === void 0) && u.transform ? i.purge.transform : !((p = i.content) === null || p === void 0) && p.transform ? i.content.transform : !((_ = i.purge) === null || _ === void 0 || (x = _.transform) === null || x === void 0) && x.DEFAULT ? i.purge.transform.DEFAULT : !((h = i.content) === null || h === void 0 || (m = h.transform) === null || m === void 0) && m.DEFAULT ? i.content.transform.DEFAULT : {};
                })(), f = {};
                return typeof o == "function" ? f.DEFAULT = o : typeof o == "object" && o !== null && Object.assign(f, o), f;
            })()
        };
        for (let o of i.content.files)if (typeof o == "string" && /{([^,]*?)}/g.test(o)) {
            t.default.warn("invalid-glob-braces", [
                `The glob pattern ${(0, t.dim)(o)} in your Tailwind CSS configuration is invalid.`,
                `Update it to ${(0, t.dim)(o.replace(/{([^,]*?)}/g, "$1"))} to silence this warning.`
            ]);
            break;
        }
        return i;
    }
})(Ss);
var Os = {};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "cloneDeep", {
        enumerable: !0,
        get: function() {
            return e;
        }
    });
    function e(t) {
        return Array.isArray(t) ? t.map((r)=>e(r)) : typeof t == "object" && t !== null ? Object.fromEntries(Object.entries(t).map(([r, n])=>[
                r,
                e(n)
            ])) : t;
    }
})(Os);
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return N;
        }
    });
    const e = /* @__PURE__ */ _(sr), t = /* @__PURE__ */ _(ws), r = /* @__PURE__ */ _(bs), n = /* @__PURE__ */ _(xs), l = _s, i = ir, c = Ss, a = /* @__PURE__ */ _(dt), o = Os, f = At, u = kt, p = /* @__PURE__ */ _(Qn);
    function _(T) {
        return T && T.__esModule ? T : {
            default: T
        };
    }
    function x(T) {
        return typeof T == "function";
    }
    function h(T, ...V) {
        let d = V.pop();
        for (let g of V)for(let v in g){
            let y = d(T[v], g[v]);
            y === void 0 ? (0, a.default)(T[v]) && (0, a.default)(g[v]) ? T[v] = h({}, T[v], g[v], d) : T[v] = g[v] : T[v] = y;
        }
        return T;
    }
    const m = {
        colors: n.default,
        negative (T) {
            return Object.keys(T).filter((V)=>T[V] !== "0").reduce((V, d)=>{
                let g = (0, e.default)(T[d]);
                return g !== void 0 && (V[`-${d}`] = g), V;
            }, {});
        },
        breakpoints (T) {
            return Object.keys(T).filter((V)=>typeof T[V] == "string").reduce((V, d)=>({
                    ...V,
                    [`screen-${d}`]: T[d]
                }), {});
        }
    };
    function C(T, ...V) {
        return x(T) ? T(...V) : T;
    }
    function S(T) {
        return T.reduce((V, { extend: d })=>h(V, d, (g, v)=>g === void 0 ? [
                    v
                ] : Array.isArray(g) ? [
                    v,
                    ...g
                ] : [
                    v,
                    g
                ]), {});
    }
    function k(T) {
        return {
            ...T.reduce((V, d)=>(0, l.defaults)(V, d), {}),
            // In order to resolve n config objects, we combine all of their `extend` properties
            // into arrays instead of objects so they aren't overridden.
            extend: S(T)
        };
    }
    function O(T, V) {
        if (Array.isArray(T) && (0, a.default)(T[0])) return T.concat(V);
        if (Array.isArray(V) && (0, a.default)(V[0]) && (0, a.default)(T)) return [
            T,
            ...V
        ];
        if (Array.isArray(V)) return V;
    }
    function E({ extend: T, ...V }) {
        return h(V, T, (d, g)=>!x(d) && !g.some(x) ? h({}, d, ...g, O) : (v, y)=>h({}, ...[
                    d,
                    ...g
                ].map((R)=>C(R, v, y)), O));
    }
    function* M(T) {
        let V = (0, i.toPath)(T);
        if (V.length === 0 || (yield V, Array.isArray(T))) return;
        let d = /^(.*?)\s*\/\s*([^/]+)$/, g = T.match(d);
        if (g !== null) {
            let [, v, y] = g, R = (0, i.toPath)(v);
            R.alpha = y, yield R;
        }
    }
    function D(T) {
        const V = (d, g)=>{
            for (const v of M(d)){
                let y = 0, R = T;
                for(; R != null && y < v.length;)R = R[v[y++]], R = x(R) && (v.alpha === void 0 || y <= v.length - 1) ? R(V, m) : R;
                if (R !== void 0) {
                    if (v.alpha !== void 0) {
                        let F = (0, f.parseColorFormat)(R);
                        return (0, u.withAlphaValue)(F, v.alpha, (0, p.default)(F));
                    }
                    return (0, a.default)(R) ? (0, o.cloneDeep)(R) : R;
                }
            }
            return g;
        };
        return Object.assign(V, {
            theme: V,
            ...m
        }), Object.keys(T).reduce((d, g)=>(d[g] = x(T[g]) ? T[g](V, m) : T[g], d), {});
    }
    function P(T) {
        let V = [];
        return T.forEach((d)=>{
            V = [
                ...V,
                d
            ];
            var g;
            const v = (g = d == null ? void 0 : d.plugins) !== null && g !== void 0 ? g : [];
            v.length !== 0 && v.forEach((y)=>{
                y.__isOptionsFunction && (y = y());
                var R;
                V = [
                    ...V,
                    ...P([
                        (R = y == null ? void 0 : y.config) !== null && R !== void 0 ? R : {}
                    ])
                ];
            });
        }), V;
    }
    function b(T) {
        return [
            ...T
        ].reduceRight((d, g)=>x(g) ? g({
                corePlugins: d
            }) : (0, r.default)(g, d), t.default);
    }
    function A(T) {
        return [
            ...T
        ].reduceRight((d, g)=>[
                ...d,
                ...g
            ], []);
    }
    function N(T) {
        let V = [
            ...P(T),
            {
                prefix: "",
                important: !1,
                separator: ":"
            }
        ];
        var d, g;
        return (0, c.normalizeConfig)((0, l.defaults)({
            theme: D(E(k(V.map((v)=>(d = v == null ? void 0 : v.theme) !== null && d !== void 0 ? d : {})))),
            corePlugins: b(V.map((v)=>v.corePlugins)),
            plugins: A(T.map((v)=>(g = v == null ? void 0 : v.plugins) !== null && g !== void 0 ? g : []))
        }, ...V));
    }
})(ys);
var ks = {}, $c = {
    content: [],
    presets: [],
    darkMode: "media",
    // or 'class'
    theme: {
        accentColor: ({ theme: s })=>({
                ...s("colors"),
                auto: "auto"
            }),
        animation: {
            none: "none",
            spin: "spin 1s linear infinite",
            ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
            pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            bounce: "bounce 1s infinite"
        },
        aria: {
            busy: 'busy="true"',
            checked: 'checked="true"',
            disabled: 'disabled="true"',
            expanded: 'expanded="true"',
            hidden: 'hidden="true"',
            pressed: 'pressed="true"',
            readonly: 'readonly="true"',
            required: 'required="true"',
            selected: 'selected="true"'
        },
        aspectRatio: {
            auto: "auto",
            square: "1 / 1",
            video: "16 / 9"
        },
        backdropBlur: ({ theme: s })=>s("blur"),
        backdropBrightness: ({ theme: s })=>s("brightness"),
        backdropContrast: ({ theme: s })=>s("contrast"),
        backdropGrayscale: ({ theme: s })=>s("grayscale"),
        backdropHueRotate: ({ theme: s })=>s("hueRotate"),
        backdropInvert: ({ theme: s })=>s("invert"),
        backdropOpacity: ({ theme: s })=>s("opacity"),
        backdropSaturate: ({ theme: s })=>s("saturate"),
        backdropSepia: ({ theme: s })=>s("sepia"),
        backgroundColor: ({ theme: s })=>s("colors"),
        backgroundImage: {
            none: "none",
            "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
            "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
            "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
            "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
            "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
            "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
            "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
            "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
        },
        backgroundOpacity: ({ theme: s })=>s("opacity"),
        backgroundPosition: {
            bottom: "bottom",
            center: "center",
            left: "left",
            "left-bottom": "left bottom",
            "left-top": "left top",
            right: "right",
            "right-bottom": "right bottom",
            "right-top": "right top",
            top: "top"
        },
        backgroundSize: {
            auto: "auto",
            cover: "cover",
            contain: "contain"
        },
        blur: {
            0: "0",
            none: "",
            sm: "4px",
            DEFAULT: "8px",
            md: "12px",
            lg: "16px",
            xl: "24px",
            "2xl": "40px",
            "3xl": "64px"
        },
        borderColor: ({ theme: s })=>({
                ...s("colors"),
                DEFAULT: s("colors.gray.200", "currentColor")
            }),
        borderOpacity: ({ theme: s })=>s("opacity"),
        borderRadius: {
            none: "0px",
            sm: "0.125rem",
            DEFAULT: "0.25rem",
            md: "0.375rem",
            lg: "0.5rem",
            xl: "0.75rem",
            "2xl": "1rem",
            "3xl": "1.5rem",
            full: "9999px"
        },
        borderSpacing: ({ theme: s })=>({
                ...s("spacing")
            }),
        borderWidth: {
            DEFAULT: "1px",
            0: "0px",
            2: "2px",
            4: "4px",
            8: "8px"
        },
        boxShadow: {
            sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
            none: "none"
        },
        boxShadowColor: ({ theme: s })=>s("colors"),
        brightness: {
            0: "0",
            50: ".5",
            75: ".75",
            90: ".9",
            95: ".95",
            100: "1",
            105: "1.05",
            110: "1.1",
            125: "1.25",
            150: "1.5",
            200: "2"
        },
        caretColor: ({ theme: s })=>s("colors"),
        colors: ({ colors: s })=>({
                inherit: s.inherit,
                current: s.current,
                transparent: s.transparent,
                black: s.black,
                white: s.white,
                slate: s.slate,
                gray: s.gray,
                zinc: s.zinc,
                neutral: s.neutral,
                stone: s.stone,
                red: s.red,
                orange: s.orange,
                amber: s.amber,
                yellow: s.yellow,
                lime: s.lime,
                green: s.green,
                emerald: s.emerald,
                teal: s.teal,
                cyan: s.cyan,
                sky: s.sky,
                blue: s.blue,
                indigo: s.indigo,
                violet: s.violet,
                purple: s.purple,
                fuchsia: s.fuchsia,
                pink: s.pink,
                rose: s.rose
            }),
        columns: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            "3xs": "16rem",
            "2xs": "18rem",
            xs: "20rem",
            sm: "24rem",
            md: "28rem",
            lg: "32rem",
            xl: "36rem",
            "2xl": "42rem",
            "3xl": "48rem",
            "4xl": "56rem",
            "5xl": "64rem",
            "6xl": "72rem",
            "7xl": "80rem"
        },
        container: {},
        content: {
            none: "none"
        },
        contrast: {
            0: "0",
            50: ".5",
            75: ".75",
            100: "1",
            125: "1.25",
            150: "1.5",
            200: "2"
        },
        cursor: {
            auto: "auto",
            default: "default",
            pointer: "pointer",
            wait: "wait",
            text: "text",
            move: "move",
            help: "help",
            "not-allowed": "not-allowed",
            none: "none",
            "context-menu": "context-menu",
            progress: "progress",
            cell: "cell",
            crosshair: "crosshair",
            "vertical-text": "vertical-text",
            alias: "alias",
            copy: "copy",
            "no-drop": "no-drop",
            grab: "grab",
            grabbing: "grabbing",
            "all-scroll": "all-scroll",
            "col-resize": "col-resize",
            "row-resize": "row-resize",
            "n-resize": "n-resize",
            "e-resize": "e-resize",
            "s-resize": "s-resize",
            "w-resize": "w-resize",
            "ne-resize": "ne-resize",
            "nw-resize": "nw-resize",
            "se-resize": "se-resize",
            "sw-resize": "sw-resize",
            "ew-resize": "ew-resize",
            "ns-resize": "ns-resize",
            "nesw-resize": "nesw-resize",
            "nwse-resize": "nwse-resize",
            "zoom-in": "zoom-in",
            "zoom-out": "zoom-out"
        },
        divideColor: ({ theme: s })=>s("borderColor"),
        divideOpacity: ({ theme: s })=>s("borderOpacity"),
        divideWidth: ({ theme: s })=>s("borderWidth"),
        dropShadow: {
            sm: "0 1px 1px rgb(0 0 0 / 0.05)",
            DEFAULT: [
                "0 1px 2px rgb(0 0 0 / 0.1)",
                "0 1px 1px rgb(0 0 0 / 0.06)"
            ],
            md: [
                "0 4px 3px rgb(0 0 0 / 0.07)",
                "0 2px 2px rgb(0 0 0 / 0.06)"
            ],
            lg: [
                "0 10px 8px rgb(0 0 0 / 0.04)",
                "0 4px 3px rgb(0 0 0 / 0.1)"
            ],
            xl: [
                "0 20px 13px rgb(0 0 0 / 0.03)",
                "0 8px 5px rgb(0 0 0 / 0.08)"
            ],
            "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
            none: "0 0 #0000"
        },
        fill: ({ theme: s })=>({
                none: "none",
                ...s("colors")
            }),
        flex: {
            1: "1 1 0%",
            auto: "1 1 auto",
            initial: "0 1 auto",
            none: "none"
        },
        flexBasis: ({ theme: s })=>({
                auto: "auto",
                ...s("spacing"),
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                "1/4": "25%",
                "2/4": "50%",
                "3/4": "75%",
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "1/6": "16.666667%",
                "2/6": "33.333333%",
                "3/6": "50%",
                "4/6": "66.666667%",
                "5/6": "83.333333%",
                "1/12": "8.333333%",
                "2/12": "16.666667%",
                "3/12": "25%",
                "4/12": "33.333333%",
                "5/12": "41.666667%",
                "6/12": "50%",
                "7/12": "58.333333%",
                "8/12": "66.666667%",
                "9/12": "75%",
                "10/12": "83.333333%",
                "11/12": "91.666667%",
                full: "100%"
            }),
        flexGrow: {
            0: "0",
            DEFAULT: "1"
        },
        flexShrink: {
            0: "0",
            DEFAULT: "1"
        },
        fontFamily: {
            sans: [
                "ui-sans-serif",
                "system-ui",
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"'
            ],
            serif: [
                "ui-serif",
                "Georgia",
                "Cambria",
                '"Times New Roman"',
                "Times",
                "serif"
            ],
            mono: [
                "ui-monospace",
                "SFMono-Regular",
                "Menlo",
                "Monaco",
                "Consolas",
                '"Liberation Mono"',
                '"Courier New"',
                "monospace"
            ]
        },
        fontSize: {
            xs: [
                "0.75rem",
                {
                    lineHeight: "1rem"
                }
            ],
            sm: [
                "0.875rem",
                {
                    lineHeight: "1.25rem"
                }
            ],
            base: [
                "1rem",
                {
                    lineHeight: "1.5rem"
                }
            ],
            lg: [
                "1.125rem",
                {
                    lineHeight: "1.75rem"
                }
            ],
            xl: [
                "1.25rem",
                {
                    lineHeight: "1.75rem"
                }
            ],
            "2xl": [
                "1.5rem",
                {
                    lineHeight: "2rem"
                }
            ],
            "3xl": [
                "1.875rem",
                {
                    lineHeight: "2.25rem"
                }
            ],
            "4xl": [
                "2.25rem",
                {
                    lineHeight: "2.5rem"
                }
            ],
            "5xl": [
                "3rem",
                {
                    lineHeight: "1"
                }
            ],
            "6xl": [
                "3.75rem",
                {
                    lineHeight: "1"
                }
            ],
            "7xl": [
                "4.5rem",
                {
                    lineHeight: "1"
                }
            ],
            "8xl": [
                "6rem",
                {
                    lineHeight: "1"
                }
            ],
            "9xl": [
                "8rem",
                {
                    lineHeight: "1"
                }
            ]
        },
        fontWeight: {
            thin: "100",
            extralight: "200",
            light: "300",
            normal: "400",
            medium: "500",
            semibold: "600",
            bold: "700",
            extrabold: "800",
            black: "900"
        },
        gap: ({ theme: s })=>s("spacing"),
        gradientColorStops: ({ theme: s })=>s("colors"),
        gradientColorStopPositions: {
            "0%": "0%",
            "5%": "5%",
            "10%": "10%",
            "15%": "15%",
            "20%": "20%",
            "25%": "25%",
            "30%": "30%",
            "35%": "35%",
            "40%": "40%",
            "45%": "45%",
            "50%": "50%",
            "55%": "55%",
            "60%": "60%",
            "65%": "65%",
            "70%": "70%",
            "75%": "75%",
            "80%": "80%",
            "85%": "85%",
            "90%": "90%",
            "95%": "95%",
            "100%": "100%"
        },
        grayscale: {
            0: "0",
            DEFAULT: "100%"
        },
        gridAutoColumns: {
            auto: "auto",
            min: "min-content",
            max: "max-content",
            fr: "minmax(0, 1fr)"
        },
        gridAutoRows: {
            auto: "auto",
            min: "min-content",
            max: "max-content",
            fr: "minmax(0, 1fr)"
        },
        gridColumn: {
            auto: "auto",
            "span-1": "span 1 / span 1",
            "span-2": "span 2 / span 2",
            "span-3": "span 3 / span 3",
            "span-4": "span 4 / span 4",
            "span-5": "span 5 / span 5",
            "span-6": "span 6 / span 6",
            "span-7": "span 7 / span 7",
            "span-8": "span 8 / span 8",
            "span-9": "span 9 / span 9",
            "span-10": "span 10 / span 10",
            "span-11": "span 11 / span 11",
            "span-12": "span 12 / span 12",
            "span-full": "1 / -1"
        },
        gridColumnEnd: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13"
        },
        gridColumnStart: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13"
        },
        gridRow: {
            auto: "auto",
            "span-1": "span 1 / span 1",
            "span-2": "span 2 / span 2",
            "span-3": "span 3 / span 3",
            "span-4": "span 4 / span 4",
            "span-5": "span 5 / span 5",
            "span-6": "span 6 / span 6",
            "span-7": "span 7 / span 7",
            "span-8": "span 8 / span 8",
            "span-9": "span 9 / span 9",
            "span-10": "span 10 / span 10",
            "span-11": "span 11 / span 11",
            "span-12": "span 12 / span 12",
            "span-full": "1 / -1"
        },
        gridRowEnd: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13"
        },
        gridRowStart: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13"
        },
        gridTemplateColumns: {
            none: "none",
            subgrid: "subgrid",
            1: "repeat(1, minmax(0, 1fr))",
            2: "repeat(2, minmax(0, 1fr))",
            3: "repeat(3, minmax(0, 1fr))",
            4: "repeat(4, minmax(0, 1fr))",
            5: "repeat(5, minmax(0, 1fr))",
            6: "repeat(6, minmax(0, 1fr))",
            7: "repeat(7, minmax(0, 1fr))",
            8: "repeat(8, minmax(0, 1fr))",
            9: "repeat(9, minmax(0, 1fr))",
            10: "repeat(10, minmax(0, 1fr))",
            11: "repeat(11, minmax(0, 1fr))",
            12: "repeat(12, minmax(0, 1fr))"
        },
        gridTemplateRows: {
            none: "none",
            subgrid: "subgrid",
            1: "repeat(1, minmax(0, 1fr))",
            2: "repeat(2, minmax(0, 1fr))",
            3: "repeat(3, minmax(0, 1fr))",
            4: "repeat(4, minmax(0, 1fr))",
            5: "repeat(5, minmax(0, 1fr))",
            6: "repeat(6, minmax(0, 1fr))",
            7: "repeat(7, minmax(0, 1fr))",
            8: "repeat(8, minmax(0, 1fr))",
            9: "repeat(9, minmax(0, 1fr))",
            10: "repeat(10, minmax(0, 1fr))",
            11: "repeat(11, minmax(0, 1fr))",
            12: "repeat(12, minmax(0, 1fr))"
        },
        height: ({ theme: s })=>({
                auto: "auto",
                ...s("spacing"),
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                "1/4": "25%",
                "2/4": "50%",
                "3/4": "75%",
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "1/6": "16.666667%",
                "2/6": "33.333333%",
                "3/6": "50%",
                "4/6": "66.666667%",
                "5/6": "83.333333%",
                full: "100%",
                screen: "100vh",
                svh: "100svh",
                lvh: "100lvh",
                dvh: "100dvh",
                min: "min-content",
                max: "max-content",
                fit: "fit-content"
            }),
        hueRotate: {
            0: "0deg",
            15: "15deg",
            30: "30deg",
            60: "60deg",
            90: "90deg",
            180: "180deg"
        },
        inset: ({ theme: s })=>({
                auto: "auto",
                ...s("spacing"),
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                "1/4": "25%",
                "2/4": "50%",
                "3/4": "75%",
                full: "100%"
            }),
        invert: {
            0: "0",
            DEFAULT: "100%"
        },
        keyframes: {
            spin: {
                to: {
                    transform: "rotate(360deg)"
                }
            },
            ping: {
                "75%, 100%": {
                    transform: "scale(2)",
                    opacity: "0"
                }
            },
            pulse: {
                "50%": {
                    opacity: ".5"
                }
            },
            bounce: {
                "0%, 100%": {
                    transform: "translateY(-25%)",
                    animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
                },
                "50%": {
                    transform: "none",
                    animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
                }
            }
        },
        letterSpacing: {
            tighter: "-0.05em",
            tight: "-0.025em",
            normal: "0em",
            wide: "0.025em",
            wider: "0.05em",
            widest: "0.1em"
        },
        lineHeight: {
            none: "1",
            tight: "1.25",
            snug: "1.375",
            normal: "1.5",
            relaxed: "1.625",
            loose: "2",
            3: ".75rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem"
        },
        listStyleType: {
            none: "none",
            disc: "disc",
            decimal: "decimal"
        },
        listStyleImage: {
            none: "none"
        },
        margin: ({ theme: s })=>({
                auto: "auto",
                ...s("spacing")
            }),
        lineClamp: {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6"
        },
        maxHeight: ({ theme: s })=>({
                ...s("spacing"),
                none: "none",
                full: "100%",
                screen: "100vh",
                svh: "100svh",
                lvh: "100lvh",
                dvh: "100dvh",
                min: "min-content",
                max: "max-content",
                fit: "fit-content"
            }),
        maxWidth: ({ theme: s, breakpoints: e })=>({
                ...s("spacing"),
                none: "none",
                xs: "20rem",
                sm: "24rem",
                md: "28rem",
                lg: "32rem",
                xl: "36rem",
                "2xl": "42rem",
                "3xl": "48rem",
                "4xl": "56rem",
                "5xl": "64rem",
                "6xl": "72rem",
                "7xl": "80rem",
                full: "100%",
                min: "min-content",
                max: "max-content",
                fit: "fit-content",
                prose: "65ch",
                ...e(s("screens"))
            }),
        minHeight: ({ theme: s })=>({
                ...s("spacing"),
                full: "100%",
                screen: "100vh",
                svh: "100svh",
                lvh: "100lvh",
                dvh: "100dvh",
                min: "min-content",
                max: "max-content",
                fit: "fit-content"
            }),
        minWidth: ({ theme: s })=>({
                ...s("spacing"),
                full: "100%",
                min: "min-content",
                max: "max-content",
                fit: "fit-content"
            }),
        objectPosition: {
            bottom: "bottom",
            center: "center",
            left: "left",
            "left-bottom": "left bottom",
            "left-top": "left top",
            right: "right",
            "right-bottom": "right bottom",
            "right-top": "right top",
            top: "top"
        },
        opacity: {
            0: "0",
            5: "0.05",
            10: "0.1",
            15: "0.15",
            20: "0.2",
            25: "0.25",
            30: "0.3",
            35: "0.35",
            40: "0.4",
            45: "0.45",
            50: "0.5",
            55: "0.55",
            60: "0.6",
            65: "0.65",
            70: "0.7",
            75: "0.75",
            80: "0.8",
            85: "0.85",
            90: "0.9",
            95: "0.95",
            100: "1"
        },
        order: {
            first: "-9999",
            last: "9999",
            none: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12"
        },
        outlineColor: ({ theme: s })=>s("colors"),
        outlineOffset: {
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
        },
        outlineWidth: {
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
        },
        padding: ({ theme: s })=>s("spacing"),
        placeholderColor: ({ theme: s })=>s("colors"),
        placeholderOpacity: ({ theme: s })=>s("opacity"),
        ringColor: ({ theme: s })=>({
                DEFAULT: s("colors.blue.500", "#3b82f6"),
                ...s("colors")
            }),
        ringOffsetColor: ({ theme: s })=>s("colors"),
        ringOffsetWidth: {
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
        },
        ringOpacity: ({ theme: s })=>({
                DEFAULT: "0.5",
                ...s("opacity")
            }),
        ringWidth: {
            DEFAULT: "3px",
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
        },
        rotate: {
            0: "0deg",
            1: "1deg",
            2: "2deg",
            3: "3deg",
            6: "6deg",
            12: "12deg",
            45: "45deg",
            90: "90deg",
            180: "180deg"
        },
        saturate: {
            0: "0",
            50: ".5",
            100: "1",
            150: "1.5",
            200: "2"
        },
        scale: {
            0: "0",
            50: ".5",
            75: ".75",
            90: ".9",
            95: ".95",
            100: "1",
            105: "1.05",
            110: "1.1",
            125: "1.25",
            150: "1.5"
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px"
        },
        scrollMargin: ({ theme: s })=>({
                ...s("spacing")
            }),
        scrollPadding: ({ theme: s })=>s("spacing"),
        sepia: {
            0: "0",
            DEFAULT: "100%"
        },
        skew: {
            0: "0deg",
            1: "1deg",
            2: "2deg",
            3: "3deg",
            6: "6deg",
            12: "12deg"
        },
        space: ({ theme: s })=>({
                ...s("spacing")
            }),
        spacing: {
            px: "1px",
            0: "0px",
            0.5: "0.125rem",
            1: "0.25rem",
            1.5: "0.375rem",
            2: "0.5rem",
            2.5: "0.625rem",
            3: "0.75rem",
            3.5: "0.875rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem",
            11: "2.75rem",
            12: "3rem",
            14: "3.5rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            28: "7rem",
            32: "8rem",
            36: "9rem",
            40: "10rem",
            44: "11rem",
            48: "12rem",
            52: "13rem",
            56: "14rem",
            60: "15rem",
            64: "16rem",
            72: "18rem",
            80: "20rem",
            96: "24rem"
        },
        stroke: ({ theme: s })=>({
                none: "none",
                ...s("colors")
            }),
        strokeWidth: {
            0: "0",
            1: "1",
            2: "2"
        },
        supports: {},
        data: {},
        textColor: ({ theme: s })=>s("colors"),
        textDecorationColor: ({ theme: s })=>s("colors"),
        textDecorationThickness: {
            auto: "auto",
            "from-font": "from-font",
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
        },
        textIndent: ({ theme: s })=>({
                ...s("spacing")
            }),
        textOpacity: ({ theme: s })=>s("opacity"),
        textUnderlineOffset: {
            auto: "auto",
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px"
        },
        transformOrigin: {
            center: "center",
            top: "top",
            "top-right": "top right",
            right: "right",
            "bottom-right": "bottom right",
            bottom: "bottom",
            "bottom-left": "bottom left",
            left: "left",
            "top-left": "top left"
        },
        transitionDelay: {
            0: "0s",
            75: "75ms",
            100: "100ms",
            150: "150ms",
            200: "200ms",
            300: "300ms",
            500: "500ms",
            700: "700ms",
            1e3: "1000ms"
        },
        transitionDuration: {
            DEFAULT: "150ms",
            0: "0s",
            75: "75ms",
            100: "100ms",
            150: "150ms",
            200: "200ms",
            300: "300ms",
            500: "500ms",
            700: "700ms",
            1e3: "1000ms"
        },
        transitionProperty: {
            none: "none",
            all: "all",
            DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
            colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
            opacity: "opacity",
            shadow: "box-shadow",
            transform: "transform"
        },
        transitionTimingFunction: {
            DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
            linear: "linear",
            in: "cubic-bezier(0.4, 0, 1, 1)",
            out: "cubic-bezier(0, 0, 0.2, 1)",
            "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
        },
        translate: ({ theme: s })=>({
                ...s("spacing"),
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                "1/4": "25%",
                "2/4": "50%",
                "3/4": "75%",
                full: "100%"
            }),
        size: ({ theme: s })=>({
                auto: "auto",
                ...s("spacing"),
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                "1/4": "25%",
                "2/4": "50%",
                "3/4": "75%",
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "1/6": "16.666667%",
                "2/6": "33.333333%",
                "3/6": "50%",
                "4/6": "66.666667%",
                "5/6": "83.333333%",
                "1/12": "8.333333%",
                "2/12": "16.666667%",
                "3/12": "25%",
                "4/12": "33.333333%",
                "5/12": "41.666667%",
                "6/12": "50%",
                "7/12": "58.333333%",
                "8/12": "66.666667%",
                "9/12": "75%",
                "10/12": "83.333333%",
                "11/12": "91.666667%",
                full: "100%",
                min: "min-content",
                max: "max-content",
                fit: "fit-content"
            }),
        width: ({ theme: s })=>({
                auto: "auto",
                ...s("spacing"),
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                "1/4": "25%",
                "2/4": "50%",
                "3/4": "75%",
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "1/6": "16.666667%",
                "2/6": "33.333333%",
                "3/6": "50%",
                "4/6": "66.666667%",
                "5/6": "83.333333%",
                "1/12": "8.333333%",
                "2/12": "16.666667%",
                "3/12": "25%",
                "4/12": "33.333333%",
                "5/12": "41.666667%",
                "6/12": "50%",
                "7/12": "58.333333%",
                "8/12": "66.666667%",
                "9/12": "75%",
                "10/12": "83.333333%",
                "11/12": "91.666667%",
                full: "100%",
                screen: "100vw",
                svw: "100svw",
                lvw: "100lvw",
                dvw: "100dvw",
                min: "min-content",
                max: "max-content",
                fit: "fit-content"
            }),
        willChange: {
            auto: "auto",
            scroll: "scroll-position",
            contents: "contents",
            transform: "transform"
        },
        zIndex: {
            auto: "auto",
            0: "0",
            10: "10",
            20: "20",
            30: "30",
            40: "40",
            50: "50"
        }
    },
    plugins: []
};
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return n;
        }
    });
    const e = /* @__PURE__ */ r($c), t = it;
    function r(l) {
        return l && l.__esModule ? l : {
            default: l
        };
    }
    function n(l) {
        var i;
        const c = ((i = l == null ? void 0 : l.presets) !== null && i !== void 0 ? i : [
            e.default
        ]).slice().reverse().flatMap((f)=>n(f instanceof Function ? f() : f)), a = {
            // Add experimental configs here...
            respectDefaultRingColorOpacity: {
                theme: {
                    ringColor: ({ theme: f })=>({
                            DEFAULT: "#3b82f67f",
                            ...f("colors")
                        })
                }
            },
            disableColorOpacityUtilitiesByDefault: {
                corePlugins: {
                    backgroundOpacity: !1,
                    borderOpacity: !1,
                    divideOpacity: !1,
                    placeholderOpacity: !1,
                    ringOpacity: !1,
                    textOpacity: !1
                }
            }
        }, o = Object.keys(a).filter((f)=>(0, t.flagEnabled)(l, f)).map((f)=>a[f]);
        return [
            l,
            ...o,
            ...c
        ];
    }
})(ks);
(function(s) {
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function() {
            return n;
        }
    });
    const e = /* @__PURE__ */ r(ys), t = /* @__PURE__ */ r(ks);
    function r(l) {
        return l && l.__esModule ? l : {
            default: l
        };
    }
    function n(...l) {
        let [, ...i] = (0, t.default)(l[0]);
        return (0, e.default)([
            ...l,
            ...i
        ]);
    }
})(vs);
let $r = vs;
var Dc = ($r.__esModule ? $r : {
    default: $r
}).default;
const Nc = /* @__PURE__ */ Qe(Dc), Lc = (s)=>Rc.createContext(Nc({
        ...s,
        content: [],
        corePlugins: {
            preflight: !1
        }
    })), Fc = _l(`
  @tailwind base;
  @tailwind components;
`).root();
function zc(s) {
    const e = Lc(s);
    return {
        generateRootForClasses: (t)=>{
            const r = Oc.generateRules(new Set(t), e), n = Fc.clone().append(...r.map(([, l])=>l));
            return Ri()(n), Cc(e)(n), Ri()(n), _c(e)(n), zl(e)(n), Ec(e)(n), Sc(e)(n), Pc(e)(n), Tc(e)(n), Ic(n), n;
        }
    };
}
const As = (s)=>typeof s.type == "function" || // @ts-expect-error - we know this is a component that may have a render function
    s.type.render !== void 0;
function Jt(s, e) {
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Children.map(s, (r)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].isValidElement(r)) {
            const n = {
                ...r.props
            };
            r.props.children && !As(r) && (n.children = Jt(r.props.children, e));
            const l = e(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].cloneElement(r, n, n.children));
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].isValidElement(l) && (typeof l.type == "function" || // @ts-expect-error - we know this is a component that may have a render function
            l.type.render)) {
                const c = (typeof l.type == "object" ? // @ts-expect-error - we know this is a component with a render function
                l.type.render : l.type)(l.props);
                return Jt(c, e);
            }
            return l;
        }
        return e(r);
    });
    return t && t.length === 1 ? t[0] : t;
}
const Uc = (s)=>{
    s.walkDecls((e)=>{
        const t = /rgb\(\s*(\d+)\s*(\d+)\s*(\d+)(?:\s*\/\s*([\d%.]+))?\s*\)/g;
        e.value = e.value.replaceAll(t, (r, n, l, i, c)=>{
            const a = c === "1" || typeof c > "u" ? "" : `,${c}`;
            return `rgb(${n},${l},${i}${a})`;
        });
    });
}, jc = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
}, Cs = (s)=>s.replaceAll("+", "plus").replaceAll("[", "").replaceAll("%", "pc").replaceAll("]", "").replaceAll("(", "").replaceAll(")", "").replaceAll("!", "imprtnt").replaceAll(">", "gt").replaceAll("<", "lt").replaceAll("=", "eq").replace(/^[0-9]/, (e)=>jc[e]).replace(/[^a-zA-Z0-9\-_]/g, "_"), Vc = (s)=>{
    const e = [], t = [];
    return s.walkAtRules((r)=>{
        const n = r.clone();
        n.walkRules((i)=>{
            let c = !1;
            i.selector = Qt((a)=>{
                a.walkPseudos(()=>{
                    c = !0;
                }), c || a.walkClasses((o)=>{
                    t.push(o.value), o.replaceWith(Qt.className({
                        ...o,
                        value: Cs(o.value)
                    }));
                });
            }).processSync(i.selector), c ? n.removeChild(i) : i.walkDecls((a)=>{
                a.important = !0;
            });
        });
        const l = e.find((i)=>i.params === n.params);
        l ? l.append(n.nodes) : e.push(n);
    }), {
        mediaQueryClasses: t,
        sanitizedAtRules: e
    };
};
function Wc(s) {
    return s.replaceAll(/\\[0-9]|\\/g, "");
}
const $i = (s)=>s.replace(/-(\w|$)/g, (e, t)=>t.toUpperCase()), Bc = (s)=>{
    const e = s.toLowerCase();
    return e.startsWith("--") ? e : e.startsWith("-ms-") ? $i(e.slice(1)) : $i(e);
}, qc = (s, e)=>{
    s.walkRules((t)=>{
        var r;
        ((r = t.parent) == null ? void 0 : r.type) !== "atrule" && Qt((n)=>{
            let l = !1;
            n.walkPseudos(()=>{
                l = !0;
            }), l || e(t);
        }).processSync(t.selector);
    });
};
function Gc(s, e) {
    let r = [
        ...s.split(" ")
    ];
    const n = {};
    return qc(e, (l)=>{
        const i = [];
        Qt((c)=>{
            c.walkClasses((a)=>{
                i.push(Wc(a.value));
            });
        }).processSync(l.selector), r = r.filter((c)=>!i.includes(c)), l.walkDecls((c)=>{
            n[Bc(c.prop)] = c.value + (c.important ? "!important" : "");
        });
    }), {
        styles: n,
        residualClassName: r.join(" ")
    };
}
const Yc = (s, e)=>{
    const t = {};
    let r = [], n = [];
    if (s.props.className) {
        const i = e.generateRootForClasses(s.props.className.split(" "));
        Uc(i);
        const { sanitizedAtRules: c, mediaQueryClasses: a } = Vc(i);
        r = a, n = c;
        const { styles: o, residualClassName: f } = Gc(s.props.className, i);
        if (t.style = {
            ...o,
            ...s.props.style
        }, !As(s)) if (f.trim().length > 0) {
            t.className = f;
            for (const u of a)t.className = t.className.replace(u, Cs(u));
        } else t.className = void 0;
    }
    const l = {
        ...s.props,
        ...t
    };
    return {
        elementWithInlinedStyles: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].cloneElement(s, l, l.children),
        nonInlinableClasses: r,
        nonInlineStyleNodes: n
    };
}, Hc = (s)=>{
    s.walkRules((e)=>{
        s.walkRules(e.selector, (t)=>{
            if (t === e) return;
            const r = t.parent;
            t.remove(), r && Zn(r);
        });
    });
}, pd = ({ children: s, config: e })=>{
    const t = zc(e ?? {}), r = new Al();
    let n = [], l = !1, i = Jt(s, (c)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isValidElement(c)) {
            const { elementWithInlinedStyles: a, nonInlinableClasses: o, nonInlineStyleNodes: f } = Yc(c, t);
            return n = n.concat(o), r.append(f), o.length > 0 && !l && (l = !0), a;
        }
        return c;
    });
    if (Hc(r), l) {
        let c = !1;
        if (i = Jt(i, (a)=>{
            if (c) return a;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isValidElement(a) && a.type === "head") {
                c = !0;
                const o = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("style", {
                    children: Cl(r.toString().trim())
                });
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.cloneElement(a, a.props, a.props.children, o);
            }
            return a;
        }), !c) throw new Error(`You are trying to use the following Tailwind classes that cannot be inlined: ${n.join(" ")}.
For the media queries to work properly on rendering, they need to be added into a <style> tag inside of a <head> tag,
the Tailwind component tried finding a <head> element but just wasn't able to find it.

Make sure that you have a <head> element at some point inside of the <Tailwind> component at any depth. 
This can also be our <Head> component.

If you do already have a <head> element at some depth, 
please file a bug https://github.com/resend/react-email/issues/new?assignees=&labels=Type%3A+Bug&projects=&template=1.bug_report.yml.`);
    }
    return i;
};
;
}}),

};

//# sourceMappingURL=652e7_%40react-email_tailwind_dist_index_mjs_4d7ef0._.js.map