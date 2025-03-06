(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/e2bdf_d3-scale_src_9a0d7d._.js", {

"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
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
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "initInterpolator": (()=>initInterpolator),
    "initRange": (()=>initRange)
});
function initRange(domain, range) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            this.range(domain);
            break;
        default:
            this.range(range).domain(domain);
            break;
    }
    return this;
}
function initInterpolator(domain, interpolator) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            {
                if (typeof domain === "function") this.interpolator(domain);
                else this.range(domain);
                break;
            }
        default:
            {
                this.domain(domain);
                if (typeof interpolator === "function") this.interpolator(interpolator);
                else this.range(interpolator);
                break;
            }
    }
    return this;
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/ordinal.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ordinal),
    "implicit": (()=>implicit)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$internmap$40$2$2e$0$2e$3$2f$node_modules$2f$internmap$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/internmap@2.0.3/node_modules/internmap/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js [app-client] (ecmascript)");
;
;
const implicit = Symbol("implicit");
function ordinal() {
    var index = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$internmap$40$2$2e$0$2e$3$2f$node_modules$2f$internmap$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternMap"](), domain = [], range = [], unknown = implicit;
    function scale(d) {
        let i = index.get(d);
        if (i === undefined) {
            if (unknown !== implicit) return unknown;
            index.set(d, i = domain.push(d) - 1);
        }
        return range[i % range.length];
    }
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [], index = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$internmap$40$2$2e$0$2e$3$2f$node_modules$2f$internmap$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternMap"]();
        for (const value of _){
            if (index.has(value)) continue;
            index.set(value, domain.push(value) - 1);
        }
        return scale;
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), scale) : range.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return ordinal(domain, range).unknown(unknown);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initRange"].apply(scale, arguments);
    return scale;
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/band.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>band),
    "point": (()=>point)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$ordinal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/ordinal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__range$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/range.js [app-client] (ecmascript) <export default as range>");
;
;
;
function band() {
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$ordinal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])().unknown(undefined), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
    delete scale.unknown;
    function rescale() {
        var n = domain().length, reverse = r1 < r0, start = reverse ? r1 : r0, stop = reverse ? r0 : r1;
        step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
        if (round) step = Math.floor(step);
        start += (stop - start - step * (n - paddingInner)) * align;
        bandwidth = step * (1 - paddingInner);
        if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
        var values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__range$3e$__["range"])(n).map(function(i) {
            return start + step * i;
        });
        return ordinalRange(reverse ? values.reverse() : values);
    }
    scale.domain = function(_) {
        return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.range = function(_) {
        return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [
            r0,
            r1
        ];
    };
    scale.rangeRound = function(_) {
        return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
    };
    scale.bandwidth = function() {
        return bandwidth;
    };
    scale.step = function() {
        return step;
    };
    scale.round = function(_) {
        return arguments.length ? (round = !!_, rescale()) : round;
    };
    scale.padding = function(_) {
        return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
    };
    scale.paddingInner = function(_) {
        return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
    };
    scale.paddingOuter = function(_) {
        return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
    };
    scale.align = function(_) {
        return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
    };
    scale.copy = function() {
        return band(domain(), [
            r0,
            r1
        ]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initRange"].apply(rescale(), arguments);
}
function pointish(scale) {
    var copy = scale.copy;
    scale.padding = scale.paddingOuter;
    delete scale.paddingInner;
    delete scale.paddingOuter;
    scale.copy = function() {
        return pointish(copy());
    };
    return scale;
}
function point() {
    return pointish(band.apply(null, arguments).paddingInner(1));
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/constant.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>constants)
});
function constants(x) {
    return function() {
        return x;
    };
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/number.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>number)
});
function number(x) {
    return +x;
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/continuous.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "copy": (()=>copy),
    "default": (()=>continuous),
    "identity": (()=>identity),
    "transformer": (()=>transformer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/constant.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__bisect$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/bisect.js [app-client] (ecmascript) <export default as bisect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateNumber$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/number.js [app-client] (ecmascript) <export default as interpolateNumber>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateRound$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/round.js [app-client] (ecmascript) <export default as interpolateRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolate$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/value.js [app-client] (ecmascript) <export default as interpolate>");
;
;
;
;
var unit = [
    0,
    1
];
function identity(x) {
    return x;
}
function normalize(a, b) {
    return (b -= a = +a) ? function(x) {
        return (x - a) / b;
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$constant$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
    var t;
    if (a > b) t = a, a = b, b = t;
    return function(x) {
        return Math.max(a, Math.min(b, x));
    };
}
// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
    else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
    return function(x) {
        return r0(d0(x));
    };
}
function polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
    // Reverse descending domains.
    if (domain[j] < domain[0]) {
        domain = domain.slice().reverse();
        range = range.slice().reverse();
    }
    while(++i < j){
        d[i] = normalize(domain[i], domain[i + 1]);
        r[i] = interpolate(range[i], range[i + 1]);
    }
    return function(x) {
        var i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__bisect$3e$__["bisect"])(domain, x, 1, j) - 1;
        return r[i](d[i](x));
    };
}
function copy(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
    var domain = unit, range = unit, interpolate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolate$3e$__["interpolate"], transform, untransform, unknown, clamp = identity, piecewise, output, input;
    function rescale() {
        var n = Math.min(domain.length, range.length);
        if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
        piecewise = n > 2 ? polymap : bimap;
        output = input = null;
        return scale;
    }
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
    }
    scale.invert = function(y) {
        return clamp(untransform((input || (input = piecewise(range, domain.map(transform), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateNumber$3e$__["interpolateNumber"])))(y)));
    };
    scale.domain = function(_) {
        return arguments.length ? (domain = Array.from(_, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), rescale()) : domain.slice();
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };
    scale.rangeRound = function(_) {
        return range = Array.from(_), interpolate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateRound$3e$__["interpolateRound"], rescale();
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
    };
    scale.interpolate = function(_) {
        return arguments.length ? (interpolate = _, rescale()) : interpolate;
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t, u) {
        transform = t, untransform = u;
        return rescale();
    };
}
function continuous() {
    return transformer()(identity, identity);
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/tickFormat.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>tickFormat)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/ticks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$format$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatSpecifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__formatSpecifier$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/formatSpecifier.js [app-client] (ecmascript) <export default as formatSpecifier>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$format$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$format$2f$src$2f$precisionPrefix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__precisionPrefix$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/precisionPrefix.js [app-client] (ecmascript) <export default as precisionPrefix>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$format$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$format$2f$src$2f$defaultLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/defaultLocale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$format$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$format$2f$src$2f$precisionRound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__precisionRound$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/precisionRound.js [app-client] (ecmascript) <export default as precisionRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$format$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$format$2f$src$2f$precisionFixed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__precisionFixed$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/precisionFixed.js [app-client] (ecmascript) <export default as precisionFixed>");
;
;
function tickFormat(start, stop, count, specifier) {
    var step = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tickStep"])(start, stop, count), precision;
    specifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$format$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatSpecifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__formatSpecifier$3e$__["formatSpecifier"])(specifier == null ? ",f" : specifier);
    switch(specifier.type){
        case "s":
            {
                var value = Math.max(Math.abs(start), Math.abs(stop));
                if (specifier.precision == null && !isNaN(precision = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$format$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$format$2f$src$2f$precisionPrefix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__precisionPrefix$3e$__["precisionPrefix"])(step, value))) specifier.precision = precision;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$format$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$format$2f$src$2f$defaultLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrefix"])(specifier, value);
            }
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            {
                if (specifier.precision == null && !isNaN(precision = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$format$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$format$2f$src$2f$precisionRound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__precisionRound$3e$__["precisionRound"])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
                break;
            }
        case "f":
        case "%":
            {
                if (specifier.precision == null && !isNaN(precision = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$format$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$format$2f$src$2f$precisionFixed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__precisionFixed$3e$__["precisionFixed"])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
                break;
            }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$format$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$format$2f$src$2f$defaultLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["format"])(specifier);
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/linear.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>linear),
    "linearish": (()=>linearish)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/continuous.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ticks$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/ticks.js [app-client] (ecmascript) <export default as ticks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$tickFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/tickFormat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/ticks.js [app-client] (ecmascript)");
;
;
;
;
function linearish(scale) {
    var domain = scale.domain;
    scale.ticks = function(count) {
        var d = domain();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ticks$3e$__["ticks"])(d[0], d[d.length - 1], count == null ? 10 : count);
    };
    scale.tickFormat = function(count, specifier) {
        var d = domain();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$tickFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };
    scale.nice = function(count) {
        if (count == null) count = 10;
        var d = domain();
        var i0 = 0;
        var i1 = d.length - 1;
        var start = d[i0];
        var stop = d[i1];
        var prestep;
        var step;
        var maxIter = 10;
        if (stop < start) {
            step = start, start = stop, stop = step;
            step = i0, i0 = i1, i1 = step;
        }
        while(maxIter-- > 0){
            step = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tickIncrement"])(start, stop, count);
            if (step === prestep) {
                d[i0] = start;
                d[i1] = stop;
                return domain(d);
            } else if (step > 0) {
                start = Math.floor(start / step) * step;
                stop = Math.ceil(stop / step) * step;
            } else if (step < 0) {
                start = Math.ceil(start * step) / step;
                stop = Math.floor(stop * step) / step;
            } else {
                break;
            }
            prestep = step;
        }
        return scale;
    };
    return scale;
}
function linear() {
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    scale.copy = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(scale, linear());
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initRange"].apply(scale, arguments);
    return linearish(scale);
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/nice.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>nice)
});
function nice(domain, interval) {
    domain = domain.slice();
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
    if (x1 < x0) {
        t = i0, i0 = i1, i1 = t;
        t = x0, x0 = x1, x1 = t;
    }
    domain[i0] = interval.floor(x0);
    domain[i1] = interval.ceil(x1);
    return domain;
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/log.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>log),
    "loggish": (()=>loggish)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/continuous.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ticks$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/ticks.js [app-client] (ecmascript) <export default as ticks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$format$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatSpecifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__formatSpecifier$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/formatSpecifier.js [app-client] (ecmascript) <export default as formatSpecifier>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$format$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$format$2f$src$2f$defaultLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-format@3.1.0/node_modules/d3-format/src/defaultLocale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$nice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/nice.js [app-client] (ecmascript)");
;
;
;
;
;
function transformLog(x) {
    return Math.log(x);
}
function transformExp(x) {
    return Math.exp(x);
}
function transformLogn(x) {
    return -Math.log(-x);
}
function transformExpn(x) {
    return -Math.exp(-x);
}
function pow10(x) {
    return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}
function powp(base) {
    return base === 10 ? pow10 : base === Math.E ? Math.exp : (x)=>Math.pow(base, x);
}
function logp(base) {
    return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), (x)=>Math.log(x) / base);
}
function reflect(f) {
    return (x, k)=>-f(-x, k);
}
function loggish(transform) {
    const scale = transform(transformLog, transformExp);
    const domain = scale.domain;
    let base = 10;
    let logs;
    let pows;
    function rescale() {
        logs = logp(base), pows = powp(base);
        if (domain()[0] < 0) {
            logs = reflect(logs), pows = reflect(pows);
            transform(transformLogn, transformExpn);
        } else {
            transform(transformLog, transformExp);
        }
        return scale;
    }
    scale.base = function(_) {
        return arguments.length ? (base = +_, rescale()) : base;
    };
    scale.domain = function(_) {
        return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.ticks = (count)=>{
        const d = domain();
        let u = d[0];
        let v = d[d.length - 1];
        const r = v < u;
        if (r) [u, v] = [
            v,
            u
        ];
        let i = logs(u);
        let j = logs(v);
        let k;
        let t;
        const n = count == null ? 10 : +count;
        let z = [];
        if (!(base % 1) && j - i < n) {
            i = Math.floor(i), j = Math.ceil(j);
            if (u > 0) for(; i <= j; ++i){
                for(k = 1; k < base; ++k){
                    t = i < 0 ? k / pows(-i) : k * pows(i);
                    if (t < u) continue;
                    if (t > v) break;
                    z.push(t);
                }
            }
            else for(; i <= j; ++i){
                for(k = base - 1; k >= 1; --k){
                    t = i > 0 ? k / pows(-i) : k * pows(i);
                    if (t < u) continue;
                    if (t > v) break;
                    z.push(t);
                }
            }
            if (z.length * 2 < n) z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ticks$3e$__["ticks"])(u, v, n);
        } else {
            z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$ticks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ticks$3e$__["ticks"])(i, j, Math.min(j - i, n)).map(pows);
        }
        return r ? z.reverse() : z;
    };
    scale.tickFormat = (count, specifier)=>{
        if (count == null) count = 10;
        if (specifier == null) specifier = base === 10 ? "s" : ",";
        if (typeof specifier !== "function") {
            if (!(base % 1) && (specifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$format$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$format$2f$src$2f$formatSpecifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__formatSpecifier$3e$__["formatSpecifier"])(specifier)).precision == null) specifier.trim = true;
            specifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$format$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$format$2f$src$2f$defaultLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["format"])(specifier);
        }
        if (count === Infinity) return specifier;
        const k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
        return (d)=>{
            let i = d / pows(Math.round(logs(d)));
            if (i * base < base - 0.5) i *= base;
            return i <= k ? specifier(d) : "";
        };
    };
    scale.nice = ()=>{
        return domain((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$nice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(domain(), {
            floor: (x)=>pows(Math.floor(logs(x))),
            ceil: (x)=>pows(Math.ceil(logs(x)))
        }));
    };
    return scale;
}
function log() {
    const scale = loggish((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformer"])()).domain([
        1,
        10
    ]);
    scale.copy = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(scale, log()).base(scale.base());
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initRange"].apply(scale, arguments);
    return scale;
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/symlog.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>symlog),
    "symlogish": (()=>symlogish)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/continuous.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/linear.js [app-client] (ecmascript)");
;
;
;
function transformSymlog(c) {
    return function(x) {
        return Math.sign(x) * Math.log1p(Math.abs(x / c));
    };
}
function transformSymexp(c) {
    return function(x) {
        return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
    };
}
function symlogish(transform) {
    var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));
    scale.constant = function(_) {
        return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearish"])(scale);
}
function symlog() {
    var scale = symlogish((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformer"])());
    scale.copy = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(scale, symlog()).constant(scale.constant());
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initRange"].apply(scale, arguments);
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/pow.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>pow),
    "powish": (()=>powish),
    "sqrt": (()=>sqrt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/linear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/continuous.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js [app-client] (ecmascript)");
;
;
;
function transformPow(exponent) {
    return function(x) {
        return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
    };
}
function transformSqrt(x) {
    return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}
function transformSquare(x) {
    return x < 0 ? -x * x : x * x;
}
function powish(transform) {
    var scale = transform(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]), exponent = 1;
    function rescale() {
        return exponent === 1 ? transform(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]) : exponent === 0.5 ? transform(transformSqrt, transformSquare) : transform(transformPow(exponent), transformPow(1 / exponent));
    }
    scale.exponent = function(_) {
        return arguments.length ? (exponent = +_, rescale()) : exponent;
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearish"])(scale);
}
function pow() {
    var scale = powish((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformer"])());
    scale.copy = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(scale, pow()).exponent(scale.exponent());
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initRange"].apply(scale, arguments);
    return scale;
}
function sqrt() {
    return pow.apply(null, arguments).exponent(0.5);
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/sequential.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "copy": (()=>copy),
    "default": (()=>sequential),
    "sequentialLog": (()=>sequentialLog),
    "sequentialPow": (()=>sequentialPow),
    "sequentialSqrt": (()=>sequentialSqrt),
    "sequentialSymlog": (()=>sequentialSymlog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolate$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/value.js [app-client] (ecmascript) <export default as interpolate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateRound$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/round.js [app-client] (ecmascript) <export default as interpolateRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/continuous.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/linear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$symlog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/symlog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/pow.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function transformer() {
    var x0 = 0, x1 = 1, t0, t1, k10, transform, interpolator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"], clamp = false, unknown;
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
    }
    scale.domain = function(_) {
        return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [
            x0,
            x1
        ];
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = !!_, scale) : clamp;
    };
    scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    function range(interpolate) {
        return function(_) {
            var r0, r1;
            return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [
                interpolator(0),
                interpolator(1)
            ];
        };
    }
    scale.range = range(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolate$3e$__["interpolate"]);
    scale.rangeRound = range(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateRound$3e$__["interpolateRound"]);
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t) {
        transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
        return scale;
    };
}
function copy(source, target) {
    return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}
function sequential() {
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearish"])(transformer()(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]));
    scale.copy = function() {
        return copy(scale, sequential());
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInterpolator"].apply(scale, arguments);
}
function sequentialLog() {
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loggish"])(transformer()).domain([
        1,
        10
    ]);
    scale.copy = function() {
        return copy(scale, sequentialLog()).base(scale.base());
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInterpolator"].apply(scale, arguments);
}
function sequentialSymlog() {
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$symlog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["symlogish"])(transformer());
    scale.copy = function() {
        return copy(scale, sequentialSymlog()).constant(scale.constant());
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInterpolator"].apply(scale, arguments);
}
function sequentialPow() {
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["powish"])(transformer());
    scale.copy = function() {
        return copy(scale, sequentialPow()).exponent(scale.exponent());
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInterpolator"].apply(scale, arguments);
}
function sequentialSqrt() {
    return sequentialPow.apply(null, arguments).exponent(0.5);
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/diverging.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>diverging),
    "divergingLog": (()=>divergingLog),
    "divergingPow": (()=>divergingPow),
    "divergingSqrt": (()=>divergingSqrt),
    "divergingSymlog": (()=>divergingSymlog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolate$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/value.js [app-client] (ecmascript) <export default as interpolate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateRound$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/round.js [app-client] (ecmascript) <export default as interpolateRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/continuous.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$piecewise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__piecewise$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/src/piecewise.js [app-client] (ecmascript) <export default as piecewise>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/linear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/sequential.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$symlog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/symlog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/pow.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function transformer() {
    var x0 = 0, x1 = 0.5, x2 = 1, s = 1, t0, t1, t2, k10, k21, interpolator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"], transform, clamp = false, unknown;
    function scale(x) {
        return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (s * x < s * t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
    }
    scale.domain = function(_) {
        return arguments.length ? ([x0, x1, x2] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1, scale) : [
            x0,
            x1,
            x2
        ];
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = !!_, scale) : clamp;
    };
    scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    function range(interpolate) {
        return function(_) {
            var r0, r1, r2;
            return arguments.length ? ([r0, r1, r2] = _, interpolator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$piecewise$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__piecewise$3e$__["piecewise"])(interpolate, [
                r0,
                r1,
                r2
            ]), scale) : [
                interpolator(0),
                interpolator(0.5),
                interpolator(1)
            ];
        };
    }
    scale.range = range(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolate$3e$__["interpolate"]);
    scale.rangeRound = range(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$interpolate$40$3$2e$0$2e$1$2f$node_modules$2f$d3$2d$interpolate$2f$src$2f$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__interpolateRound$3e$__["interpolateRound"]);
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t) {
        transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1;
        return scale;
    };
}
function diverging() {
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearish"])(transformer()(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"]));
    scale.copy = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(scale, diverging());
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInterpolator"].apply(scale, arguments);
}
function divergingLog() {
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loggish"])(transformer()).domain([
        0.1,
        1,
        10
    ]);
    scale.copy = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(scale, divergingLog()).base(scale.base());
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInterpolator"].apply(scale, arguments);
}
function divergingSymlog() {
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$symlog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["symlogish"])(transformer());
    scale.copy = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(scale, divergingSymlog()).constant(scale.constant());
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInterpolator"].apply(scale, arguments);
}
function divergingPow() {
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["powish"])(transformer());
    scale.copy = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(scale, divergingPow()).exponent(scale.exponent());
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInterpolator"].apply(scale, arguments);
}
function divergingSqrt() {
    return divergingPow.apply(null, arguments).exponent(0.5);
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/identity.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>identity)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/linear.js [app-client] (ecmascript)");
;
;
function identity(domain) {
    var unknown;
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : x;
    }
    scale.invert = scale;
    scale.domain = scale.range = function(_) {
        return arguments.length ? (domain = Array.from(_, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]), scale) : domain.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return identity(domain).unknown(unknown);
    };
    domain = arguments.length ? Array.from(domain, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) : [
        0,
        1
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearish"])(scale);
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/quantile.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>quantile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$ascending$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ascending$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/ascending.js [app-client] (ecmascript) <export default as ascending>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$quantile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/quantile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__bisect$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/bisect.js [app-client] (ecmascript) <export default as bisect>");
;
;
function quantile() {
    var domain = [], range = [], thresholds = [], unknown;
    function rescale() {
        var i = 0, n = Math.max(1, range.length);
        thresholds = new Array(n - 1);
        while(++i < n)thresholds[i - 1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$quantile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quantileSorted"])(domain, i / n);
        return scale;
    }
    function scale(x) {
        return x == null || isNaN(x = +x) ? unknown : range[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__bisect$3e$__["bisect"])(thresholds, x)];
    }
    scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return i < 0 ? [
            NaN,
            NaN
        ] : [
            i > 0 ? thresholds[i - 1] : domain[0],
            i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
        ];
    };
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [];
        for (let d of _)if (d != null && !isNaN(d = +d)) domain.push(d);
        domain.sort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$ascending$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ascending$3e$__["ascending"]);
        return rescale();
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.quantiles = function() {
        return thresholds.slice();
    };
    scale.copy = function() {
        return quantile().domain(domain).range(range).unknown(unknown);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initRange"].apply(scale, arguments);
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/quantize.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>quantize)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/linear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__bisect$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/bisect.js [app-client] (ecmascript) <export default as bisect>");
;
;
;
function quantize() {
    var x0 = 0, x1 = 1, n = 1, domain = [
        0.5
    ], range = [
        0,
        1
    ], unknown;
    function scale(x) {
        return x != null && x <= x ? range[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__bisect$3e$__["bisect"])(domain, x, 0, n)] : unknown;
    }
    function rescale() {
        var i = -1;
        domain = new Array(n);
        while(++i < n)domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
        return scale;
    }
    scale.domain = function(_) {
        return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [
            x0,
            x1
        ];
    };
    scale.range = function(_) {
        return arguments.length ? (n = (range = Array.from(_)).length - 1, rescale()) : range.slice();
    };
    scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return i < 0 ? [
            NaN,
            NaN
        ] : i < 1 ? [
            x0,
            domain[0]
        ] : i >= n ? [
            domain[n - 1],
            x1
        ] : [
            domain[i - 1],
            domain[i]
        ];
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : scale;
    };
    scale.thresholds = function() {
        return domain.slice();
    };
    scale.copy = function() {
        return quantize().domain([
            x0,
            x1
        ]).range(range).unknown(unknown);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initRange"].apply((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearish"])(scale), arguments);
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/radial.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>radial)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/linear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/continuous.js [app-client] (ecmascript)");
;
;
;
;
function square(x) {
    return Math.sign(x) * x * x;
}
function unsquare(x) {
    return Math.sign(x) * Math.sqrt(Math.abs(x));
}
function radial() {
    var squared = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(), range = [
        0,
        1
    ], round = false, unknown;
    function scale(x) {
        var y = unsquare(squared(x));
        return isNaN(y) ? unknown : round ? Math.round(y) : y;
    }
    scale.invert = function(y) {
        return squared.invert(square(y));
    };
    scale.domain = function(_) {
        return arguments.length ? (squared.domain(_), scale) : squared.domain();
    };
    scale.range = function(_) {
        return arguments.length ? (squared.range((range = Array.from(_, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])).map(square)), scale) : range.slice();
    };
    scale.rangeRound = function(_) {
        return scale.range(_).round(true);
    };
    scale.round = function(_) {
        return arguments.length ? (round = !!_, scale) : round;
    };
    scale.clamp = function(_) {
        return arguments.length ? (squared.clamp(_), scale) : squared.clamp();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return radial(squared.domain(), range).round(round).clamp(squared.clamp()).unknown(unknown);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initRange"].apply(scale, arguments);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linearish"])(scale);
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/sequentialQuantile.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>sequentialQuantile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$ascending$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ascending$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/ascending.js [app-client] (ecmascript) <export default as ascending>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$quantile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__quantile$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/quantile.js [app-client] (ecmascript) <export default as quantile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/continuous.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__bisect$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/bisect.js [app-client] (ecmascript) <export default as bisect>");
;
;
;
function sequentialQuantile() {
    var domain = [], interpolator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identity"];
    function scale(x) {
        if (x != null && !isNaN(x = +x)) return interpolator(((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__bisect$3e$__["bisect"])(domain, x, 1) - 1) / (domain.length - 1));
    }
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [];
        for (let d of _)if (d != null && !isNaN(d = +d)) domain.push(d);
        domain.sort(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$ascending$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ascending$3e$__["ascending"]);
        return scale;
    };
    scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    scale.range = function() {
        return domain.map((d, i)=>interpolator(i / (domain.length - 1)));
    };
    scale.quantiles = function(n) {
        return Array.from({
            length: n + 1
        }, (_, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$quantile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__quantile$3e$__["quantile"])(domain, i / n));
    };
    scale.copy = function() {
        return sequentialQuantile(interpolator).domain(domain);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initInterpolator"].apply(scale, arguments);
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/threshold.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>threshold)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__bisect$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-array@3.2.4/node_modules/d3-array/src/bisect.js [app-client] (ecmascript) <export default as bisect>");
;
;
function threshold() {
    var domain = [
        0.5
    ], range = [
        0,
        1
    ], unknown, n = 1;
    function scale(x) {
        return x != null && x <= x ? range[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$array$40$3$2e$2$2e$4$2f$node_modules$2f$d3$2d$array$2f$src$2f$bisect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__bisect$3e$__["bisect"])(domain, x, 0, n)] : unknown;
    }
    scale.domain = function(_) {
        return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
    };
    scale.range = function(_) {
        return arguments.length ? (range = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
    };
    scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return [
            domain[i - 1],
            domain[i]
        ];
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return threshold().domain(domain).range(range).unknown(unknown);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initRange"].apply(scale, arguments);
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/time.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "calendar": (()=>calendar),
    "default": (()=>time)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$ticks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/ticks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/year.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$month$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/month.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__timeSunday__as__timeWeek$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/week.js [app-client] (ecmascript) <export timeSunday as timeWeek>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$day$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/day.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$hour$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/hour.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$minute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/minute.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$second$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__second__as__timeSecond$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/second.js [app-client] (ecmascript) <export second as timeSecond>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$2d$format$40$4$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2d$format$2f$src$2f$defaultLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-time-format@4.1.0/node_modules/d3-time-format/src/defaultLocale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$nice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/nice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/continuous.js [app-client] (ecmascript)");
;
;
;
;
;
function date(t) {
    return new Date(t);
}
function number(t) {
    return t instanceof Date ? +t : +new Date(+t);
}
function calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format) {
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(), invert = scale.invert, domain = scale.domain;
    var formatMillisecond = format(".%L"), formatSecond = format(":%S"), formatMinute = format("%I:%M"), formatHour = format("%I %p"), formatDay = format("%a %d"), formatWeek = format("%b %d"), formatMonth = format("%B"), formatYear = format("%Y");
    function tickFormat(date) {
        return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? week(date) < date ? formatDay : formatWeek : year(date) < date ? formatMonth : formatYear)(date);
    }
    scale.invert = function(y) {
        return new Date(invert(y));
    };
    scale.domain = function(_) {
        return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
    };
    scale.ticks = function(interval) {
        var d = domain();
        return ticks(d[0], d[d.length - 1], interval == null ? 10 : interval);
    };
    scale.tickFormat = function(count, specifier) {
        return specifier == null ? tickFormat : format(specifier);
    };
    scale.nice = function(interval) {
        var d = domain();
        if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
        return interval ? domain((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$nice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(d, interval)) : scale;
    };
    scale.copy = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$continuous$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(scale, calendar(ticks, tickInterval, year, month, week, day, hour, minute, second, format));
    };
    return scale;
}
function time() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initRange"].apply(calendar(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$ticks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeTicks"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$ticks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeTickInterval"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeYear"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$month$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeMonth"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__timeSunday__as__timeWeek$3e$__["timeWeek"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$day$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeDay"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$hour$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeHour"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$minute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeMinute"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$second$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__second__as__timeSecond$3e$__["timeSecond"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$2d$format$40$4$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2d$format$2f$src$2f$defaultLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeFormat"]).domain([
        new Date(2000, 0, 1),
        new Date(2000, 0, 2)
    ]), arguments);
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/utcTime.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>utcTime)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$ticks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/ticks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/year.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$month$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/month.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__utcSunday__as__utcWeek$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/week.js [app-client] (ecmascript) <export utcSunday as utcWeek>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$day$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/day.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$hour$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/hour.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$minute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/minute.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$second$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__second__as__utcSecond$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-time@3.1.0/node_modules/d3-time/src/second.js [app-client] (ecmascript) <export second as utcSecond>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$2d$format$40$4$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2d$format$2f$src$2f$defaultLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-time-format@4.1.0/node_modules/d3-time-format/src/defaultLocale.js [app-client] (ecmascript)");
;
;
;
;
function utcTime() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initRange"].apply((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calendar"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$ticks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utcTicks"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$ticks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utcTickInterval"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$year$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utcYear"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$month$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utcMonth"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$week$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__utcSunday__as__utcWeek$3e$__["utcWeek"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$day$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utcDay"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$hour$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utcHour"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$minute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utcMinute"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$40$3$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2f$src$2f$second$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__second__as__utcSecond$3e$__["utcSecond"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$time$2d$format$40$4$2e$1$2e$0$2f$node_modules$2f$d3$2d$time$2d$format$2f$src$2f$defaultLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utcFormat"]).domain([
        Date.UTC(2000, 0, 1),
        Date.UTC(2000, 0, 2)
    ]), arguments);
}
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/index.js [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "scaleBand": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$band$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "scaleDiverging": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$diverging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "scaleDivergingLog": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$diverging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["divergingLog"]),
    "scaleDivergingPow": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$diverging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["divergingPow"]),
    "scaleDivergingSqrt": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$diverging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["divergingSqrt"]),
    "scaleDivergingSymlog": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$diverging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["divergingSymlog"]),
    "scaleIdentity": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "scaleImplicit": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$ordinal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["implicit"]),
    "scaleLinear": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "scaleLog": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "scaleOrdinal": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$ordinal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "scalePoint": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$band$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["point"]),
    "scalePow": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "scaleQuantile": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$quantile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "scaleQuantize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$quantize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "scaleRadial": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$radial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "scaleSequential": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "scaleSequentialLog": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sequentialLog"]),
    "scaleSequentialPow": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sequentialPow"]),
    "scaleSequentialQuantile": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequentialQuantile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "scaleSequentialSqrt": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sequentialSqrt"]),
    "scaleSequentialSymlog": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sequentialSymlog"]),
    "scaleSqrt": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sqrt"]),
    "scaleSymlog": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$symlog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "scaleThreshold": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$threshold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "scaleTime": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "scaleUtc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$utcTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
    "tickFormat": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$tickFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$band$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/band.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$diverging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/diverging.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/identity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$ordinal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/ordinal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/linear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$pow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/pow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$quantile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/quantile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$quantize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/quantize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$radial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/radial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequential$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/sequential.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$sequentialQuantile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/sequentialQuantile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$symlog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/symlog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$threshold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/threshold.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$utcTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/utcTime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$tickFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/tickFormat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "scaleBand": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleBand"]),
    "scaleDiverging": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleDiverging"]),
    "scaleDivergingLog": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleDivergingLog"]),
    "scaleDivergingPow": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleDivergingPow"]),
    "scaleDivergingSqrt": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleDivergingSqrt"]),
    "scaleDivergingSymlog": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleDivergingSymlog"]),
    "scaleIdentity": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleIdentity"]),
    "scaleImplicit": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleImplicit"]),
    "scaleLinear": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleLinear"]),
    "scaleLog": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleLog"]),
    "scaleOrdinal": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleOrdinal"]),
    "scalePoint": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scalePoint"]),
    "scalePow": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scalePow"]),
    "scaleQuantile": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleQuantile"]),
    "scaleQuantize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleQuantize"]),
    "scaleRadial": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleRadial"]),
    "scaleSequential": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleSequential"]),
    "scaleSequentialLog": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleSequentialLog"]),
    "scaleSequentialPow": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleSequentialPow"]),
    "scaleSequentialQuantile": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleSequentialQuantile"]),
    "scaleSequentialSqrt": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleSequentialSqrt"]),
    "scaleSequentialSymlog": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleSequentialSymlog"]),
    "scaleSqrt": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleSqrt"]),
    "scaleSymlog": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleSymlog"]),
    "scaleThreshold": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleThreshold"]),
    "scaleTime": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleTime"]),
    "scaleUtc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["scaleUtc"]),
    "tickFormat": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["tickFormat"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/index.js [app-client] (ecmascript) <exports>");
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/band.js [app-client] (ecmascript) <export point as scalePoint>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "scalePoint": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$band$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["point"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$band$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/band.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/linear.js [app-client] (ecmascript) <export default as scaleLinear>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "scaleLinear": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/linear.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=e2bdf_d3-scale_src_9a0d7d._.js.map