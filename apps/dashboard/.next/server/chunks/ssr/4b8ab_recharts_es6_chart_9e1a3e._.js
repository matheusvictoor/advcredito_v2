module.exports = {

"[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/AccessibilityManager.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AccessibilityManager": (()=>AccessibilityManager)
});
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var AccessibilityManager = /*#__PURE__*/ function() {
    function AccessibilityManager() {
        _classCallCheck(this, AccessibilityManager);
        _defineProperty(this, "activeIndex", 0);
        _defineProperty(this, "coordinateList", []);
        _defineProperty(this, "layout", 'horizontal');
    }
    return _createClass(AccessibilityManager, [
        {
            key: "setDetails",
            value: function setDetails(_ref) {
                var _ref2;
                var _ref$coordinateList = _ref.coordinateList, coordinateList = _ref$coordinateList === void 0 ? null : _ref$coordinateList, _ref$container = _ref.container, container = _ref$container === void 0 ? null : _ref$container, _ref$layout = _ref.layout, layout = _ref$layout === void 0 ? null : _ref$layout, _ref$offset = _ref.offset, offset = _ref$offset === void 0 ? null : _ref$offset, _ref$mouseHandlerCall = _ref.mouseHandlerCallback, mouseHandlerCallback = _ref$mouseHandlerCall === void 0 ? null : _ref$mouseHandlerCall;
                this.coordinateList = (_ref2 = coordinateList !== null && coordinateList !== void 0 ? coordinateList : this.coordinateList) !== null && _ref2 !== void 0 ? _ref2 : [];
                this.container = container !== null && container !== void 0 ? container : this.container;
                this.layout = layout !== null && layout !== void 0 ? layout : this.layout;
                this.offset = offset !== null && offset !== void 0 ? offset : this.offset;
                this.mouseHandlerCallback = mouseHandlerCallback !== null && mouseHandlerCallback !== void 0 ? mouseHandlerCallback : this.mouseHandlerCallback;
                // Keep activeIndex in the bounds between 0 and the last coordinate index
                this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
            }
        },
        {
            key: "focus",
            value: function focus() {
                this.spoofMouse();
            }
        },
        {
            key: "keyboardEvent",
            value: function keyboardEvent(e) {
                // The AccessibilityManager relies on the Tooltip component. When tooltips suddenly stop existing,
                // it can cause errors. We use this function to check. We don't want arrow keys to be processed
                // if there are no tooltips, since that will cause unexpected behavior of users.
                if (this.coordinateList.length === 0) {
                    return;
                }
                switch(e.key){
                    case 'ArrowRight':
                        {
                            if (this.layout !== 'horizontal') {
                                return;
                            }
                            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1);
                            this.spoofMouse();
                            break;
                        }
                    case 'ArrowLeft':
                        {
                            if (this.layout !== 'horizontal') {
                                return;
                            }
                            this.activeIndex = Math.max(this.activeIndex - 1, 0);
                            this.spoofMouse();
                            break;
                        }
                    default:
                        {
                            break;
                        }
                }
            }
        },
        {
            key: "setIndex",
            value: function setIndex(newIndex) {
                this.activeIndex = newIndex;
            }
        },
        {
            key: "spoofMouse",
            value: function spoofMouse() {
                var _window, _window2;
                if (this.layout !== 'horizontal') {
                    return;
                }
                // This can happen when the tooltips suddenly stop existing as children of the component
                // That update doesn't otherwise fire events, so we have to double check here.
                if (this.coordinateList.length === 0) {
                    return;
                }
                var _this$container$getBo = this.container.getBoundingClientRect(), x = _this$container$getBo.x, y = _this$container$getBo.y, height = _this$container$getBo.height;
                var coordinate = this.coordinateList[this.activeIndex].coordinate;
                var scrollOffsetX = ((_window = window) === null || _window === void 0 ? void 0 : _window.scrollX) || 0;
                var scrollOffsetY = ((_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.scrollY) || 0;
                var pageX = x + coordinate + scrollOffsetX;
                var pageY = y + this.offset.top + height / 2 + scrollOffsetY;
                this.mouseHandlerCallback({
                    pageX: pageX,
                    pageY: pageY
                });
            }
        }
    ]);
}();
}}),
"[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/generateCategoricalChart.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createDefaultState": (()=>createDefaultState),
    "generateCategoricalChart": (()=>generateCategoricalChart),
    "getAxisMapByAxes": (()=>getAxisMapByAxes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/range.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$sortBy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/sortBy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/throttle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
// eslint-disable-next-line no-restricted-imports
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tiny$2d$invariant$40$1$2e$3$2e$3$2f$node_modules$2f$tiny$2d$invariant$2f$dist$2f$esm$2f$tiny$2d$invariant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tiny-invariant@1.3.3/node_modules/tiny-invariant/dist/esm/tiny-invariant.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/DataUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/ChartUtils.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$isDomainSpecifiedByUser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/isDomainSpecifiedByUser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DetectReferenceElementsDomain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/DetectReferenceElementsDomain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/ReactUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Brush$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/Brush.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/component/Legend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DOMUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/DOMUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/PolarUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/Events.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ActiveShapeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/ActiveShapeUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Rectangle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/shape/Rectangle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$chartLayoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/context/chartLayoutContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Surface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/container/Surface.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AccessibilityManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/AccessibilityManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/component/Cursor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$getLegendProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/getLegendProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ShallowEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/ShallowEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/shape/Dot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/container/Layer.js [app-ssr] (ecmascript)");
var _excluded = [
    "item"
], _excluded2 = [
    "children",
    "className",
    "width",
    "height",
    "style",
    "compact",
    "title",
    "desc"
];
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined);
    return _extends.apply(this, arguments);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    for(var key in source){
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
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
var ORIENT_MAP = {
    xAxis: [
        'bottom',
        'top'
    ],
    yAxis: [
        'left',
        'right'
    ]
};
var FULL_WIDTH_AND_HEIGHT = {
    width: '100%',
    height: '100%'
};
var originCoordinate = {
    x: 0,
    y: 0
};
/**
 * This function exists as a temporary workaround.
 *
 * Why? generateCategoricalChart does not render `{children}` directly;
 * instead it passes them through `renderByOrder` function which reads their handlers.
 *
 * So, this is a handler that does nothing.
 * Once we get rid of `renderByOrder` and switch to JSX only, we can get rid of this handler too.
 *
 * @param {JSX} element as is in JSX
 * @returns {JSX} the same element
 */ function renderAsIs(element) {
    return element;
}
var calculateTooltipPos = function calculateTooltipPos(rangeObj, layout) {
    if (layout === 'horizontal') {
        return rangeObj.x;
    }
    if (layout === 'vertical') {
        return rangeObj.y;
    }
    if (layout === 'centric') {
        return rangeObj.angle;
    }
    return rangeObj.radius;
};
var getActiveCoordinate = function getActiveCoordinate(layout, tooltipTicks, activeIndex, rangeObj) {
    var entry = tooltipTicks.find(function(tick) {
        return tick && tick.index === activeIndex;
    });
    if (entry) {
        if (layout === 'horizontal') {
            return {
                x: entry.coordinate,
                y: rangeObj.y
            };
        }
        if (layout === 'vertical') {
            return {
                x: rangeObj.x,
                y: entry.coordinate
            };
        }
        if (layout === 'centric') {
            var _angle = entry.coordinate;
            var _radius = rangeObj.radius;
            return _objectSpread(_objectSpread(_objectSpread({}, rangeObj), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(rangeObj.cx, rangeObj.cy, _radius, _angle)), {}, {
                angle: _angle,
                radius: _radius
            });
        }
        var radius = entry.coordinate;
        var angle = rangeObj.angle;
        return _objectSpread(_objectSpread(_objectSpread({}, rangeObj), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(rangeObj.cx, rangeObj.cy, radius, angle)), {}, {
            angle: angle,
            radius: radius
        });
    }
    return originCoordinate;
};
var getDisplayedData = function getDisplayedData(data, _ref) {
    var graphicalItems = _ref.graphicalItems, dataStartIndex = _ref.dataStartIndex, dataEndIndex = _ref.dataEndIndex;
    var itemsData = (graphicalItems !== null && graphicalItems !== void 0 ? graphicalItems : []).reduce(function(result, child) {
        var itemData = child.props.data;
        if (itemData && itemData.length) {
            return [].concat(_toConsumableArray(result), _toConsumableArray(itemData));
        }
        return result;
    }, []);
    if (itemsData.length > 0) {
        return itemsData;
    }
    if (data && data.length && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(dataStartIndex) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(dataEndIndex)) {
        return data.slice(dataStartIndex, dataEndIndex + 1);
    }
    return [];
};
function getDefaultDomainByAxisType(axisType) {
    return axisType === 'number' ? [
        0,
        'auto'
    ] : undefined;
}
/**
 * Get the content to be displayed in the tooltip
 * @param  {Object} state          Current state
 * @param  {Array}  chartData      The data defined in chart
 * @param  {Number} activeIndex    Active index of data
 * @param  {String} activeLabel    Active label of data
 * @return {Array}                 The content of tooltip
 */ var getTooltipContent = function getTooltipContent(state, chartData, activeIndex, activeLabel) {
    var graphicalItems = state.graphicalItems, tooltipAxis = state.tooltipAxis;
    var displayedData = getDisplayedData(chartData, state);
    if (activeIndex < 0 || !graphicalItems || !graphicalItems.length || activeIndex >= displayedData.length) {
        return null;
    }
    // get data by activeIndex when the axis don't allow duplicated category
    return graphicalItems.reduce(function(result, child) {
        var _child$props$data;
        /**
     * Fixes: https://github.com/recharts/recharts/issues/3669
     * Defaulting to chartData below to fix an edge case where the tooltip does not include data from all charts
     * when a separate dataset is passed to chart prop data and specified on Line/Area/etc prop data
     */ var data = (_child$props$data = child.props.data) !== null && _child$props$data !== void 0 ? _child$props$data : chartData;
        if (data && state.dataStartIndex + state.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
        // The data is sliced only when the active index is within the start/end index range.
        state.dataEndIndex - state.dataStartIndex >= activeIndex) {
            data = data.slice(state.dataStartIndex, state.dataEndIndex + 1);
        }
        var payload;
        if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
            // graphic child has data props
            var entries = data === undefined ? displayedData : data;
            payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findEntryInArray"])(entries, tooltipAxis.dataKey, activeLabel);
        } else {
            payload = data && data[activeIndex] || displayedData[activeIndex];
        }
        if (!payload) {
            return result;
        }
        return [].concat(_toConsumableArray(result), [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTooltipItem"])(child, payload)
        ]);
    }, []);
};
/**
 * Returns tooltip data based on a mouse position (as a parameter or in state)
 * @param  {Object} state     current state
 * @param  {Array}  chartData the data defined in chart
 * @param  {String} layout     The layout type of chart
 * @param  {Object} rangeObj  { x, y } coordinates
 * @return {Object}           Tooltip data data
 */ var getTooltipData = function getTooltipData(state, chartData, layout, rangeObj) {
    var rangeData = rangeObj || {
        x: state.chartX,
        y: state.chartY
    };
    var pos = calculateTooltipPos(rangeData, layout);
    var ticks = state.orderedTooltipTicks, axis = state.tooltipAxis, tooltipTicks = state.tooltipTicks;
    var activeIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["calculateActiveTickIndex"])(pos, ticks, tooltipTicks, axis);
    if (activeIndex >= 0 && tooltipTicks) {
        var activeLabel = tooltipTicks[activeIndex] && tooltipTicks[activeIndex].value;
        var activePayload = getTooltipContent(state, chartData, activeIndex, activeLabel);
        var activeCoordinate = getActiveCoordinate(layout, ticks, activeIndex, rangeData);
        return {
            activeTooltipIndex: activeIndex,
            activeLabel: activeLabel,
            activePayload: activePayload,
            activeCoordinate: activeCoordinate
        };
    }
    return null;
};
var getAxisMapByAxes = function getAxisMapByAxes(props, _ref2) {
    var axes = _ref2.axes, graphicalItems = _ref2.graphicalItems, axisType = _ref2.axisType, axisIdKey = _ref2.axisIdKey, stackGroups = _ref2.stackGroups, dataStartIndex = _ref2.dataStartIndex, dataEndIndex = _ref2.dataEndIndex;
    var layout = props.layout, children = props.children, stackOffset = props.stackOffset;
    var isCategorical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isCategoricalAxis"])(layout, axisType);
    // Eliminate duplicated axes
    return axes.reduce(function(result, child) {
        var _childProps$domain2;
        var childProps = child.type.defaultProps !== undefined ? _objectSpread(_objectSpread({}, child.type.defaultProps), child.props) : child.props;
        var type = childProps.type, dataKey = childProps.dataKey, allowDataOverflow = childProps.allowDataOverflow, allowDuplicatedCategory = childProps.allowDuplicatedCategory, scale = childProps.scale, ticks = childProps.ticks, includeHidden = childProps.includeHidden;
        var axisId = childProps[axisIdKey];
        if (result[axisId]) {
            return result;
        }
        var displayedData = getDisplayedData(props.data, {
            graphicalItems: graphicalItems.filter(function(item) {
                var _defaultProps;
                var itemAxisId = axisIdKey in item.props ? item.props[axisIdKey] : (_defaultProps = item.type.defaultProps) === null || _defaultProps === void 0 ? void 0 : _defaultProps[axisIdKey];
                return itemAxisId === axisId;
            }),
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex
        });
        var len = displayedData.length;
        var domain, duplicateDomain, categoricalDomain;
        /*
     * This is a hack to short-circuit the domain creation here to enhance performance.
     * Usually, the data is used to determine the domain, but when the user specifies
     * a domain upfront (via props), there is no need to calculate the domain start and end,
     * which is very expensive for a larger amount of data.
     * The only thing that would prohibit short-circuiting is when the user doesn't allow data overflow,
     * because the axis is supposed to ignore the specified domain that way.
     */ if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$isDomainSpecifiedByUser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDomainSpecifiedByUser"])(childProps.domain, allowDataOverflow, type)) {
            domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseSpecifiedDomain"])(childProps.domain, null, allowDataOverflow);
            /* The chart can be categorical and have the domain specified in numbers
       * we still need to calculate the categorical domain
       * TODO: refactor this more
       */ if (isCategorical && (type === 'number' || scale !== 'auto')) {
                categoricalDomain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDomainOfDataByKey"])(displayedData, dataKey, 'category');
            }
        }
        // if the domain is defaulted we need this for `originalDomain` as well
        var defaultDomain = getDefaultDomainByAxisType(type);
        // we didn't create the domain from user's props above, so we need to calculate it
        if (!domain || domain.length === 0) {
            var _childProps$domain;
            var childDomain = (_childProps$domain = childProps.domain) !== null && _childProps$domain !== void 0 ? _childProps$domain : defaultDomain;
            if (dataKey) {
                // has dataKey in <Axis />
                domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDomainOfDataByKey"])(displayedData, dataKey, type);
                if (type === 'category' && isCategorical) {
                    // the field type is category data and this axis is categorical axis
                    var duplicate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasDuplicate"])(domain);
                    if (allowDuplicatedCategory && duplicate) {
                        duplicateDomain = domain;
                        // When category axis has duplicated text, serial numbers are used to generate scale
                        domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(0, len);
                    } else if (!allowDuplicatedCategory) {
                        // remove duplicated category
                        domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseDomainOfCategoryAxis"])(childDomain, domain, child).reduce(function(finalDomain, entry) {
                            return finalDomain.indexOf(entry) >= 0 ? finalDomain : [].concat(_toConsumableArray(finalDomain), [
                                entry
                            ]);
                        }, []);
                    }
                } else if (type === 'category') {
                    // the field type is category data and this axis is numerical axis
                    if (!allowDuplicatedCategory) {
                        domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseDomainOfCategoryAxis"])(childDomain, domain, child).reduce(function(finalDomain, entry) {
                            return finalDomain.indexOf(entry) >= 0 || entry === '' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(entry) ? finalDomain : [].concat(_toConsumableArray(finalDomain), [
                                entry
                            ]);
                        }, []);
                    } else {
                        // eliminate undefined or null or empty string
                        domain = domain.filter(function(entry) {
                            return entry !== '' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(entry);
                        });
                    }
                } else if (type === 'number') {
                    // the field type is numerical
                    var errorBarsDomain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseErrorBarsOfAxis"])(displayedData, graphicalItems.filter(function(item) {
                        var _defaultProps2, _defaultProps3;
                        var itemAxisId = axisIdKey in item.props ? item.props[axisIdKey] : (_defaultProps2 = item.type.defaultProps) === null || _defaultProps2 === void 0 ? void 0 : _defaultProps2[axisIdKey];
                        var itemHide = 'hide' in item.props ? item.props.hide : (_defaultProps3 = item.type.defaultProps) === null || _defaultProps3 === void 0 ? void 0 : _defaultProps3.hide;
                        return itemAxisId === axisId && (includeHidden || !itemHide);
                    }), dataKey, axisType, layout);
                    if (errorBarsDomain) {
                        domain = errorBarsDomain;
                    }
                }
                if (isCategorical && (type === 'number' || scale !== 'auto')) {
                    categoricalDomain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDomainOfDataByKey"])(displayedData, dataKey, 'category');
                }
            } else if (isCategorical) {
                // the axis is a categorical axis
                domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(0, len);
            } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack && type === 'number') {
                // when stackOffset is 'expand', the domain may be calculated as [0, 1.000000000002]
                domain = stackOffset === 'expand' ? [
                    0,
                    1
                ] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDomainOfStackGroups"])(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
            } else {
                domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDomainOfItemsWithSameAxis"])(displayedData, graphicalItems.filter(function(item) {
                    var itemAxisId = axisIdKey in item.props ? item.props[axisIdKey] : item.type.defaultProps[axisIdKey];
                    var itemHide = 'hide' in item.props ? item.props.hide : item.type.defaultProps.hide;
                    return itemAxisId === axisId && (includeHidden || !itemHide);
                }), type, layout, true);
            }
            if (type === 'number') {
                // To detect wether there is any reference lines whose props alwaysShow is true
                domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DetectReferenceElementsDomain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectReferenceElementsDomain"])(children, domain, axisId, axisType, ticks);
                if (childDomain) {
                    domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseSpecifiedDomain"])(childDomain, domain, allowDataOverflow);
                }
            } else if (type === 'category' && childDomain) {
                var axisDomain = childDomain;
                var isDomainValid = domain.every(function(entry) {
                    return axisDomain.indexOf(entry) >= 0;
                });
                if (isDomainValid) {
                    domain = axisDomain;
                }
            }
        }
        return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, axisId, _objectSpread(_objectSpread({}, childProps), {}, {
            axisType: axisType,
            domain: domain,
            categoricalDomain: categoricalDomain,
            duplicateDomain: duplicateDomain,
            originalDomain: (_childProps$domain2 = childProps.domain) !== null && _childProps$domain2 !== void 0 ? _childProps$domain2 : defaultDomain,
            isCategorical: isCategorical,
            layout: layout
        })));
    }, {});
};
/**
 * Get the configuration of axis by the options of item,
 * this kind of axis does not display in chart
 * @param  {Object} props         Latest props
 * @param  {Array} graphicalItems The instances of item
 * @param  {ReactElement} Axis    Axis Component
 * @param  {String} axisType      The type of axis, xAxis - x-axis, yAxis - y-axis
 * @param  {String} axisIdKey     The unique id of an axis
 * @param  {Object} stackGroups   The items grouped by axisId and stackId
 * @param {Number} dataStartIndex The start index of the data series when a brush is applied
 * @param {Number} dataEndIndex   The end index of the data series when a brush is applied
 * @return {Object}               Configuration
 */ var getAxisMapByItems = function getAxisMapByItems(props, _ref3) {
    var graphicalItems = _ref3.graphicalItems, Axis = _ref3.Axis, axisType = _ref3.axisType, axisIdKey = _ref3.axisIdKey, stackGroups = _ref3.stackGroups, dataStartIndex = _ref3.dataStartIndex, dataEndIndex = _ref3.dataEndIndex;
    var layout = props.layout, children = props.children;
    var displayedData = getDisplayedData(props.data, {
        graphicalItems: graphicalItems,
        dataStartIndex: dataStartIndex,
        dataEndIndex: dataEndIndex
    });
    var len = displayedData.length;
    var isCategorical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isCategoricalAxis"])(layout, axisType);
    var index = -1;
    // The default type of x-axis is category axis,
    // The default contents of x-axis is the serial numbers of data
    // The default type of y-axis is number axis
    // The default contents of y-axis is the domain of data
    return graphicalItems.reduce(function(result, child) {
        var childProps = child.type.defaultProps !== undefined ? _objectSpread(_objectSpread({}, child.type.defaultProps), child.props) : child.props;
        var axisId = childProps[axisIdKey];
        var originalDomain = getDefaultDomainByAxisType('number');
        if (!result[axisId]) {
            index++;
            var domain;
            if (isCategorical) {
                domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(0, len);
            } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack) {
                domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDomainOfStackGroups"])(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
                domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DetectReferenceElementsDomain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectReferenceElementsDomain"])(children, domain, axisId, axisType);
            } else {
                domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseSpecifiedDomain"])(originalDomain, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDomainOfItemsWithSameAxis"])(displayedData, graphicalItems.filter(function(item) {
                    var _defaultProps4, _defaultProps5;
                    var itemAxisId = axisIdKey in item.props ? item.props[axisIdKey] : (_defaultProps4 = item.type.defaultProps) === null || _defaultProps4 === void 0 ? void 0 : _defaultProps4[axisIdKey];
                    var itemHide = 'hide' in item.props ? item.props.hide : (_defaultProps5 = item.type.defaultProps) === null || _defaultProps5 === void 0 ? void 0 : _defaultProps5.hide;
                    return itemAxisId === axisId && !itemHide;
                }), 'number', layout), Axis.defaultProps.allowDataOverflow);
                domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DetectReferenceElementsDomain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectReferenceElementsDomain"])(children, domain, axisId, axisType);
            }
            return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, axisId, _objectSpread(_objectSpread({
                axisType: axisType
            }, Axis.defaultProps), {}, {
                hide: true,
                orientation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ORIENT_MAP, "".concat(axisType, ".").concat(index % 2), null),
                domain: domain,
                originalDomain: originalDomain,
                isCategorical: isCategorical,
                layout: layout
            })));
        }
        return result;
    }, {});
};
/**
 * Get the configuration of all x-axis or y-axis
 * @param  {Object} props          Latest props
 * @param  {String} axisType       The type of axis
 * @param  {React.ComponentType}  [AxisComp]      Axis Component
 * @param  {Array}  graphicalItems The instances of item
 * @param  {Object} stackGroups    The items grouped by axisId and stackId
 * @param {Number} dataStartIndex  The start index of the data series when a brush is applied
 * @param {Number} dataEndIndex    The end index of the data series when a brush is applied
 * @return {Object}          Configuration
 */ var getAxisMap = function getAxisMap(props, _ref4) {
    var _ref4$axisType = _ref4.axisType, axisType = _ref4$axisType === void 0 ? 'xAxis' : _ref4$axisType, AxisComp = _ref4.AxisComp, graphicalItems = _ref4.graphicalItems, stackGroups = _ref4.stackGroups, dataStartIndex = _ref4.dataStartIndex, dataEndIndex = _ref4.dataEndIndex;
    var children = props.children;
    var axisIdKey = "".concat(axisType, "Id");
    // Get all the instance of Axis
    var axes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findAllByType"])(children, AxisComp);
    var axisMap = {};
    if (axes && axes.length) {
        axisMap = getAxisMapByAxes(props, {
            axes: axes,
            graphicalItems: graphicalItems,
            axisType: axisType,
            axisIdKey: axisIdKey,
            stackGroups: stackGroups,
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex
        });
    } else if (graphicalItems && graphicalItems.length) {
        axisMap = getAxisMapByItems(props, {
            Axis: AxisComp,
            graphicalItems: graphicalItems,
            axisType: axisType,
            axisIdKey: axisIdKey,
            stackGroups: stackGroups,
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex
        });
    }
    return axisMap;
};
var tooltipTicksGenerator = function tooltipTicksGenerator(axisMap) {
    var axis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnyElementOfObject"])(axisMap);
    var tooltipTicks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTicksOfAxis"])(axis, false, true);
    return {
        tooltipTicks: tooltipTicks,
        orderedTooltipTicks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$sortBy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(tooltipTicks, function(o) {
            return o.coordinate;
        }),
        tooltipAxis: axis,
        tooltipAxisBandSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBandSizeOfAxis"])(axis, tooltipTicks)
    };
};
var createDefaultState = function createDefaultState(props) {
    var children = props.children, defaultShowTooltip = props.defaultShowTooltip;
    var brushItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Brush$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Brush"]);
    var startIndex = 0;
    var endIndex = 0;
    if (props.data && props.data.length !== 0) {
        endIndex = props.data.length - 1;
    }
    if (brushItem && brushItem.props) {
        if (brushItem.props.startIndex >= 0) {
            startIndex = brushItem.props.startIndex;
        }
        if (brushItem.props.endIndex >= 0) {
            endIndex = brushItem.props.endIndex;
        }
    }
    return {
        chartX: 0,
        chartY: 0,
        dataStartIndex: startIndex,
        dataEndIndex: endIndex,
        activeTooltipIndex: -1,
        isTooltipActive: Boolean(defaultShowTooltip)
    };
};
var hasGraphicalBarItem = function hasGraphicalBarItem(graphicalItems) {
    if (!graphicalItems || !graphicalItems.length) {
        return false;
    }
    return graphicalItems.some(function(item) {
        var name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDisplayName"])(item && item.type);
        return name && name.indexOf('Bar') >= 0;
    });
};
var getAxisNameByLayout = function getAxisNameByLayout(layout) {
    if (layout === 'horizontal') {
        return {
            numericAxisName: 'yAxis',
            cateAxisName: 'xAxis'
        };
    }
    if (layout === 'vertical') {
        return {
            numericAxisName: 'xAxis',
            cateAxisName: 'yAxis'
        };
    }
    if (layout === 'centric') {
        return {
            numericAxisName: 'radiusAxis',
            cateAxisName: 'angleAxis'
        };
    }
    return {
        numericAxisName: 'angleAxis',
        cateAxisName: 'radiusAxis'
    };
};
/**
 * Calculate the offset of main part in the svg element
 * @param  {Object} params.props          Latest props
 * @param  {Array}  params.graphicalItems The instances of item
 * @param  {Object} params.xAxisMap       The configuration of x-axis
 * @param  {Object} params.yAxisMap       The configuration of y-axis
 * @param  {Object} prevLegendBBox        The boundary box of legend
 * @return {Object} The offset of main part in the svg element
 */ var calculateOffset = function calculateOffset(_ref5, prevLegendBBox) {
    var props = _ref5.props, graphicalItems = _ref5.graphicalItems, _ref5$xAxisMap = _ref5.xAxisMap, xAxisMap = _ref5$xAxisMap === void 0 ? {} : _ref5$xAxisMap, _ref5$yAxisMap = _ref5.yAxisMap, yAxisMap = _ref5$yAxisMap === void 0 ? {} : _ref5$yAxisMap;
    var width = props.width, height = props.height, children = props.children;
    var margin = props.margin || {};
    var brushItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Brush$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Brush"]);
    var legendItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"]);
    var offsetH = Object.keys(yAxisMap).reduce(function(result, id) {
        var entry = yAxisMap[id];
        var orientation = entry.orientation;
        if (!entry.mirror && !entry.hide) {
            return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, orientation, result[orientation] + entry.width));
        }
        return result;
    }, {
        left: margin.left || 0,
        right: margin.right || 0
    });
    var offsetV = Object.keys(xAxisMap).reduce(function(result, id) {
        var entry = xAxisMap[id];
        var orientation = entry.orientation;
        if (!entry.mirror && !entry.hide) {
            return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, orientation, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(result, "".concat(orientation)) + entry.height));
        }
        return result;
    }, {
        top: margin.top || 0,
        bottom: margin.bottom || 0
    });
    var offset = _objectSpread(_objectSpread({}, offsetV), offsetH);
    var brushBottom = offset.bottom;
    if (brushItem) {
        offset.bottom += brushItem.props.height || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Brush$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Brush"].defaultProps.height;
    }
    if (legendItem && prevLegendBBox) {
        // @ts-expect-error margin is optional in props but required in appendOffsetOfLegend
        offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["appendOffsetOfLegend"])(offset, graphicalItems, props, prevLegendBBox);
    }
    var offsetWidth = width - offset.left - offset.right;
    var offsetHeight = height - offset.top - offset.bottom;
    return _objectSpread(_objectSpread({
        brushBottom: brushBottom
    }, offset), {}, {
        // never return negative values for height and width
        width: Math.max(offsetWidth, 0),
        height: Math.max(offsetHeight, 0)
    });
};
// Determine the size of the axis, used for calculation of relative bar sizes
var getCartesianAxisSize = function getCartesianAxisSize(axisObj, axisName) {
    if (axisName === 'xAxis') {
        return axisObj[axisName].width;
    }
    if (axisName === 'yAxis') {
        return axisObj[axisName].height;
    }
    // This is only supported for Bar charts (i.e. charts with cartesian axes), so we should never get here
    return undefined;
};
var generateCategoricalChart = function generateCategoricalChart(_ref6) {
    var chartName = _ref6.chartName, GraphicalChild = _ref6.GraphicalChild, _ref6$defaultTooltipE = _ref6.defaultTooltipEventType, defaultTooltipEventType = _ref6$defaultTooltipE === void 0 ? 'axis' : _ref6$defaultTooltipE, _ref6$validateTooltip = _ref6.validateTooltipEventTypes, validateTooltipEventTypes = _ref6$validateTooltip === void 0 ? [
        'axis'
    ] : _ref6$validateTooltip, axisComponents = _ref6.axisComponents, legendContent = _ref6.legendContent, formatAxisMap = _ref6.formatAxisMap, defaultProps = _ref6.defaultProps;
    var getFormatItems = function getFormatItems(props, currentState) {
        var graphicalItems = currentState.graphicalItems, stackGroups = currentState.stackGroups, offset = currentState.offset, updateId = currentState.updateId, dataStartIndex = currentState.dataStartIndex, dataEndIndex = currentState.dataEndIndex;
        var barSize = props.barSize, layout = props.layout, barGap = props.barGap, barCategoryGap = props.barCategoryGap, globalMaxBarSize = props.maxBarSize;
        var _getAxisNameByLayout = getAxisNameByLayout(layout), numericAxisName = _getAxisNameByLayout.numericAxisName, cateAxisName = _getAxisNameByLayout.cateAxisName;
        var hasBar = hasGraphicalBarItem(graphicalItems);
        var formattedItems = [];
        graphicalItems.forEach(function(item, index) {
            var displayedData = getDisplayedData(props.data, {
                graphicalItems: [
                    item
                ],
                dataStartIndex: dataStartIndex,
                dataEndIndex: dataEndIndex
            });
            var itemProps = item.type.defaultProps !== undefined ? _objectSpread(_objectSpread({}, item.type.defaultProps), item.props) : item.props;
            var dataKey = itemProps.dataKey, childMaxBarSize = itemProps.maxBarSize;
            // axisId of the numerical axis
            var numericAxisId = itemProps["".concat(numericAxisName, "Id")];
            // axisId of the categorical axis
            var cateAxisId = itemProps["".concat(cateAxisName, "Id")];
            var axisObjInitialValue = {};
            var axisObj = axisComponents.reduce(function(result, entry) {
                var _item$type$displayNam, _item$type;
                // map of axisId to axis for a specific axis type
                var axisMap = currentState["".concat(entry.axisType, "Map")];
                // axisId of axis we are currently computing
                var id = itemProps["".concat(entry.axisType, "Id")];
                /**
         * tell the user in dev mode that their configuration is incorrect if we cannot find a match between
         * axisId on the chart and axisId on the axis. zAxis does not get passed in the map for ComposedChart,
         * leave it out of the check for now.
         */ !(axisMap && axisMap[id] || entry.axisType === 'zAxis') ? ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tiny$2d$invariant$40$1$2e$3$2e$3$2f$node_modules$2f$tiny$2d$invariant$2f$dist$2f$esm$2f$tiny$2d$invariant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(false, "Specifying a(n) ".concat(entry.axisType, "Id requires a corresponding ").concat(entry.axisType, "Id on the targeted graphical component ").concat((_item$type$displayNam = item === null || item === void 0 || (_item$type = item.type) === null || _item$type === void 0 ? void 0 : _item$type.displayName) !== null && _item$type$displayNam !== void 0 ? _item$type$displayNam : '')) : ("TURBOPACK unreachable", undefined) : void 0;
                // the axis we are currently formatting
                var axis = axisMap[id];
                return _objectSpread(_objectSpread({}, result), {}, _defineProperty(_defineProperty({}, entry.axisType, axis), "".concat(entry.axisType, "Ticks"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTicksOfAxis"])(axis)));
            }, axisObjInitialValue);
            var cateAxis = axisObj[cateAxisName];
            var cateTicks = axisObj["".concat(cateAxisName, "Ticks")];
            var stackedData = stackGroups && stackGroups[numericAxisId] && stackGroups[numericAxisId].hasStack && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStackedDataOfItem"])(item, stackGroups[numericAxisId].stackGroups);
            var itemIsBar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDisplayName"])(item.type).indexOf('Bar') >= 0;
            var bandSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBandSizeOfAxis"])(cateAxis, cateTicks);
            var barPosition = [];
            var sizeList = hasBar && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBarSizeList"])({
                barSize: barSize,
                stackGroups: stackGroups,
                totalSize: getCartesianAxisSize(axisObj, cateAxisName)
            });
            if (itemIsBar) {
                var _ref7, _getBandSizeOfAxis;
                // If it is bar, calculate the position of bar
                var maxBarSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
                var barBandSize = (_ref7 = (_getBandSizeOfAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBandSizeOfAxis"])(cateAxis, cateTicks, true)) !== null && _getBandSizeOfAxis !== void 0 ? _getBandSizeOfAxis : maxBarSize) !== null && _ref7 !== void 0 ? _ref7 : 0;
                barPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBarPosition"])({
                    barGap: barGap,
                    barCategoryGap: barCategoryGap,
                    bandSize: barBandSize !== bandSize ? barBandSize : bandSize,
                    sizeList: sizeList[cateAxisId],
                    maxBarSize: maxBarSize
                });
                if (barBandSize !== bandSize) {
                    barPosition = barPosition.map(function(pos) {
                        return _objectSpread(_objectSpread({}, pos), {}, {
                            position: _objectSpread(_objectSpread({}, pos.position), {}, {
                                offset: pos.position.offset - barBandSize / 2
                            })
                        });
                    });
                }
            }
            // @ts-expect-error we should stop reading data from ReactElements
            var composedFn = item && item.type && item.type.getComposedData;
            if (composedFn) {
                formattedItems.push({
                    props: _objectSpread(_objectSpread({}, composedFn(_objectSpread(_objectSpread({}, axisObj), {}, {
                        displayedData: displayedData,
                        props: props,
                        dataKey: dataKey,
                        item: item,
                        bandSize: bandSize,
                        barPosition: barPosition,
                        offset: offset,
                        stackedData: stackedData,
                        layout: layout,
                        dataStartIndex: dataStartIndex,
                        dataEndIndex: dataEndIndex
                    }))), {}, _defineProperty(_defineProperty(_defineProperty({
                        key: item.key || "item-".concat(index)
                    }, numericAxisName, axisObj[numericAxisName]), cateAxisName, axisObj[cateAxisName]), "animationId", updateId)),
                    childIndex: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseChildIndex"])(item, props.children),
                    item: item
                });
            }
        });
        return formattedItems;
    };
    /**
   * The AxisMaps are expensive to render on large data sets
   * so provide the ability to store them in state and only update them when necessary
   * they are dependent upon the start and end index of
   * the brush so it's important that this method is called _after_
   * the state is updated with any new start/end indices
   *
   * @param {Object} props          The props object to be used for updating the axismaps
   * dataStartIndex: The start index of the data series when a brush is applied
   * dataEndIndex: The end index of the data series when a brush is applied
   * updateId: The update id
   * @param {Object} prevState      Prev state
   * @return {Object} state New state to set
   */ var updateStateOfAxisMapsOffsetAndStackGroups = function updateStateOfAxisMapsOffsetAndStackGroups(_ref8, prevState) {
        var props = _ref8.props, dataStartIndex = _ref8.dataStartIndex, dataEndIndex = _ref8.dataEndIndex, updateId = _ref8.updateId;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateWidthHeight"])({
            props: props
        })) {
            return null;
        }
        var children = props.children, layout = props.layout, stackOffset = props.stackOffset, data = props.data, reverseStackOrder = props.reverseStackOrder;
        var _getAxisNameByLayout2 = getAxisNameByLayout(layout), numericAxisName = _getAxisNameByLayout2.numericAxisName, cateAxisName = _getAxisNameByLayout2.cateAxisName;
        var graphicalItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findAllByType"])(children, GraphicalChild);
        var stackGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStackGroupsByAxisId"])(data, graphicalItems, "".concat(numericAxisName, "Id"), "".concat(cateAxisName, "Id"), stackOffset, reverseStackOrder);
        var axisObj = axisComponents.reduce(function(result, entry) {
            var name = "".concat(entry.axisType, "Map");
            return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, name, getAxisMap(props, _objectSpread(_objectSpread({}, entry), {}, {
                graphicalItems: graphicalItems,
                stackGroups: entry.axisType === numericAxisName && stackGroups,
                dataStartIndex: dataStartIndex,
                dataEndIndex: dataEndIndex
            }))));
        }, {});
        var offset = calculateOffset(_objectSpread(_objectSpread({}, axisObj), {}, {
            props: props,
            graphicalItems: graphicalItems
        }), prevState === null || prevState === void 0 ? void 0 : prevState.legendBBox);
        Object.keys(axisObj).forEach(function(key) {
            axisObj[key] = formatAxisMap(props, axisObj[key], offset, key.replace('Map', ''), chartName);
        });
        var cateAxisMap = axisObj["".concat(cateAxisName, "Map")];
        var ticksObj = tooltipTicksGenerator(cateAxisMap);
        var formattedGraphicalItems = getFormatItems(props, _objectSpread(_objectSpread({}, axisObj), {}, {
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex,
            updateId: updateId,
            graphicalItems: graphicalItems,
            stackGroups: stackGroups,
            offset: offset
        }));
        return _objectSpread(_objectSpread({
            formattedGraphicalItems: formattedGraphicalItems,
            graphicalItems: graphicalItems,
            offset: offset,
            stackGroups: stackGroups
        }, ticksObj), axisObj);
    };
    var CategoricalChartWrapper = /*#__PURE__*/ function(_Component) {
        function CategoricalChartWrapper(_props) {
            var _props$id, _props$throttleDelay;
            var _this;
            _classCallCheck(this, CategoricalChartWrapper);
            _this = _callSuper(this, CategoricalChartWrapper, [
                _props
            ]);
            _defineProperty(_this, "eventEmitterSymbol", Symbol('rechartsEventEmitter'));
            _defineProperty(_this, "accessibilityManager", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AccessibilityManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccessibilityManager"]());
            _defineProperty(_this, "handleLegendBBoxUpdate", function(box) {
                if (box) {
                    var _this$state = _this.state, dataStartIndex = _this$state.dataStartIndex, dataEndIndex = _this$state.dataEndIndex, updateId = _this$state.updateId;
                    _this.setState(_objectSpread({
                        legendBBox: box
                    }, updateStateOfAxisMapsOffsetAndStackGroups({
                        props: _this.props,
                        dataStartIndex: dataStartIndex,
                        dataEndIndex: dataEndIndex,
                        updateId: updateId
                    }, _objectSpread(_objectSpread({}, _this.state), {}, {
                        legendBBox: box
                    }))));
                }
            });
            _defineProperty(_this, "handleReceiveSyncEvent", function(cId, data, emitter) {
                if (_this.props.syncId === cId) {
                    if (emitter === _this.eventEmitterSymbol && typeof _this.props.syncMethod !== 'function') {
                        return;
                    }
                    _this.applySyncEvent(data);
                }
            });
            _defineProperty(_this, "handleBrushChange", function(_ref9) {
                var startIndex = _ref9.startIndex, endIndex = _ref9.endIndex;
                // Only trigger changes if the extents of the brush have actually changed
                if (startIndex !== _this.state.dataStartIndex || endIndex !== _this.state.dataEndIndex) {
                    var updateId = _this.state.updateId;
                    _this.setState(function() {
                        return _objectSpread({
                            dataStartIndex: startIndex,
                            dataEndIndex: endIndex
                        }, updateStateOfAxisMapsOffsetAndStackGroups({
                            props: _this.props,
                            dataStartIndex: startIndex,
                            dataEndIndex: endIndex,
                            updateId: updateId
                        }, _this.state));
                    });
                    _this.triggerSyncEvent({
                        dataStartIndex: startIndex,
                        dataEndIndex: endIndex
                    });
                }
            });
            /**
       * The handler of mouse entering chart
       * @param  {Object} e              Event object
       * @return {Null}                  null
       */ _defineProperty(_this, "handleMouseEnter", function(e) {
                var mouse = _this.getMouseInfo(e);
                if (mouse) {
                    var _nextState = _objectSpread(_objectSpread({}, mouse), {}, {
                        isTooltipActive: true
                    });
                    _this.setState(_nextState);
                    _this.triggerSyncEvent(_nextState);
                    var onMouseEnter = _this.props.onMouseEnter;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(onMouseEnter)) {
                        onMouseEnter(_nextState, e);
                    }
                }
            });
            _defineProperty(_this, "triggeredAfterMouseMove", function(e) {
                var mouse = _this.getMouseInfo(e);
                var nextState = mouse ? _objectSpread(_objectSpread({}, mouse), {}, {
                    isTooltipActive: true
                }) : {
                    isTooltipActive: false
                };
                _this.setState(nextState);
                _this.triggerSyncEvent(nextState);
                var onMouseMove = _this.props.onMouseMove;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(onMouseMove)) {
                    onMouseMove(nextState, e);
                }
            });
            /**
       * The handler of mouse entering a scatter
       * @param {Object} el The active scatter
       * @return {Object} no return
       */ _defineProperty(_this, "handleItemMouseEnter", function(el) {
                _this.setState(function() {
                    return {
                        isTooltipActive: true,
                        activeItem: el,
                        activePayload: el.tooltipPayload,
                        activeCoordinate: el.tooltipPosition || {
                            x: el.cx,
                            y: el.cy
                        }
                    };
                });
            });
            /**
       * The handler of mouse leaving a scatter
       * @return {Object} no return
       */ _defineProperty(_this, "handleItemMouseLeave", function() {
                _this.setState(function() {
                    return {
                        isTooltipActive: false
                    };
                });
            });
            /**
       * The handler of mouse moving in chart
       * @param  {React.MouseEvent} e        Event object
       * @return {void} no return
       */ _defineProperty(_this, "handleMouseMove", function(e) {
                e.persist();
                _this.throttleTriggeredAfterMouseMove(e);
            });
            /**
       * The handler if mouse leaving chart
       * @param {Object} e Event object
       * @return {Null} no return
       */ _defineProperty(_this, "handleMouseLeave", function(e) {
                _this.throttleTriggeredAfterMouseMove.cancel();
                var nextState = {
                    isTooltipActive: false
                };
                _this.setState(nextState);
                _this.triggerSyncEvent(nextState);
                var onMouseLeave = _this.props.onMouseLeave;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(onMouseLeave)) {
                    onMouseLeave(nextState, e);
                }
            });
            _defineProperty(_this, "handleOuterEvent", function(e) {
                var eventName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReactEventByType"])(e);
                var event = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this.props, "".concat(eventName));
                if (eventName && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event)) {
                    var _mouse;
                    var mouse;
                    if (/.*touch.*/i.test(eventName)) {
                        mouse = _this.getMouseInfo(e.changedTouches[0]);
                    } else {
                        mouse = _this.getMouseInfo(e);
                    }
                    event((_mouse = mouse) !== null && _mouse !== void 0 ? _mouse : {}, e);
                }
            });
            _defineProperty(_this, "handleClick", function(e) {
                var mouse = _this.getMouseInfo(e);
                if (mouse) {
                    var _nextState2 = _objectSpread(_objectSpread({}, mouse), {}, {
                        isTooltipActive: true
                    });
                    _this.setState(_nextState2);
                    _this.triggerSyncEvent(_nextState2);
                    var onClick = _this.props.onClick;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(onClick)) {
                        onClick(_nextState2, e);
                    }
                }
            });
            _defineProperty(_this, "handleMouseDown", function(e) {
                var onMouseDown = _this.props.onMouseDown;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(onMouseDown)) {
                    var _nextState3 = _this.getMouseInfo(e);
                    onMouseDown(_nextState3, e);
                }
            });
            _defineProperty(_this, "handleMouseUp", function(e) {
                var onMouseUp = _this.props.onMouseUp;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(onMouseUp)) {
                    var _nextState4 = _this.getMouseInfo(e);
                    onMouseUp(_nextState4, e);
                }
            });
            _defineProperty(_this, "handleTouchMove", function(e) {
                if (e.changedTouches != null && e.changedTouches.length > 0) {
                    _this.throttleTriggeredAfterMouseMove(e.changedTouches[0]);
                }
            });
            _defineProperty(_this, "handleTouchStart", function(e) {
                if (e.changedTouches != null && e.changedTouches.length > 0) {
                    _this.handleMouseDown(e.changedTouches[0]);
                }
            });
            _defineProperty(_this, "handleTouchEnd", function(e) {
                if (e.changedTouches != null && e.changedTouches.length > 0) {
                    _this.handleMouseUp(e.changedTouches[0]);
                }
            });
            _defineProperty(_this, "handleDoubleClick", function(e) {
                var onDoubleClick = _this.props.onDoubleClick;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(onDoubleClick)) {
                    var _nextState5 = _this.getMouseInfo(e);
                    onDoubleClick(_nextState5, e);
                }
            });
            _defineProperty(_this, "handleContextMenu", function(e) {
                var onContextMenu = _this.props.onContextMenu;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(onContextMenu)) {
                    var _nextState6 = _this.getMouseInfo(e);
                    onContextMenu(_nextState6, e);
                }
            });
            _defineProperty(_this, "triggerSyncEvent", function(data) {
                if (_this.props.syncId !== undefined) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventCenter"].emit(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYNC_EVENT"], _this.props.syncId, data, _this.eventEmitterSymbol);
                }
            });
            _defineProperty(_this, "applySyncEvent", function(data) {
                var _this$props = _this.props, layout = _this$props.layout, syncMethod = _this$props.syncMethod;
                var updateId = _this.state.updateId;
                var dataStartIndex = data.dataStartIndex, dataEndIndex = data.dataEndIndex;
                if (data.dataStartIndex !== undefined || data.dataEndIndex !== undefined) {
                    _this.setState(_objectSpread({
                        dataStartIndex: dataStartIndex,
                        dataEndIndex: dataEndIndex
                    }, updateStateOfAxisMapsOffsetAndStackGroups({
                        props: _this.props,
                        dataStartIndex: dataStartIndex,
                        dataEndIndex: dataEndIndex,
                        updateId: updateId
                    }, _this.state)));
                } else if (data.activeTooltipIndex !== undefined) {
                    var chartX = data.chartX, chartY = data.chartY;
                    var activeTooltipIndex = data.activeTooltipIndex;
                    var _this$state2 = _this.state, offset = _this$state2.offset, tooltipTicks = _this$state2.tooltipTicks;
                    if (!offset) {
                        return;
                    }
                    if (typeof syncMethod === 'function') {
                        // Call a callback function. If there is an application specific algorithm
                        activeTooltipIndex = syncMethod(tooltipTicks, data);
                    } else if (syncMethod === 'value') {
                        // Set activeTooltipIndex to the index with the same value as data.activeLabel
                        // For loop instead of findIndex because the latter is very slow in some browsers
                        activeTooltipIndex = -1; // in case we cannot find the element
                        for(var i = 0; i < tooltipTicks.length; i++){
                            if (tooltipTicks[i].value === data.activeLabel) {
                                activeTooltipIndex = i;
                                break;
                            }
                        }
                    }
                    var viewBox = _objectSpread(_objectSpread({}, offset), {}, {
                        x: offset.left,
                        y: offset.top
                    });
                    // When a categorical chart is combined with another chart, the value of chartX
                    // and chartY may beyond the boundaries.
                    var validateChartX = Math.min(chartX, viewBox.x + viewBox.width);
                    var validateChartY = Math.min(chartY, viewBox.y + viewBox.height);
                    var activeLabel = tooltipTicks[activeTooltipIndex] && tooltipTicks[activeTooltipIndex].value;
                    var activePayload = getTooltipContent(_this.state, _this.props.data, activeTooltipIndex);
                    var activeCoordinate = tooltipTicks[activeTooltipIndex] ? {
                        x: layout === 'horizontal' ? tooltipTicks[activeTooltipIndex].coordinate : validateChartX,
                        y: layout === 'horizontal' ? validateChartY : tooltipTicks[activeTooltipIndex].coordinate
                    } : originCoordinate;
                    _this.setState(_objectSpread(_objectSpread({}, data), {}, {
                        activeLabel: activeLabel,
                        activeCoordinate: activeCoordinate,
                        activePayload: activePayload,
                        activeTooltipIndex: activeTooltipIndex
                    }));
                } else {
                    _this.setState(data);
                }
            });
            _defineProperty(_this, "renderCursor", function(element) {
                var _element$props$active;
                var _this$state3 = _this.state, isTooltipActive = _this$state3.isTooltipActive, activeCoordinate = _this$state3.activeCoordinate, activePayload = _this$state3.activePayload, offset = _this$state3.offset, activeTooltipIndex = _this$state3.activeTooltipIndex, tooltipAxisBandSize = _this$state3.tooltipAxisBandSize;
                var tooltipEventType = _this.getTooltipEventType();
                // The cursor is a part of the Tooltip, and it should be shown (by default) when the Tooltip is active.
                var isActive = (_element$props$active = element.props.active) !== null && _element$props$active !== void 0 ? _element$props$active : isTooltipActive;
                var layout = _this.props.layout;
                var key = element.key || '_recharts-cursor';
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cursor"], {
                    key: key,
                    activeCoordinate: activeCoordinate,
                    activePayload: activePayload,
                    activeTooltipIndex: activeTooltipIndex,
                    chartName: chartName,
                    element: element,
                    isActive: isActive,
                    layout: layout,
                    offset: offset,
                    tooltipAxisBandSize: tooltipAxisBandSize,
                    tooltipEventType: tooltipEventType
                });
            });
            _defineProperty(_this, "renderPolarAxis", function(element, displayName, index) {
                var axisType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(element, 'type.axisType');
                var axisMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this.state, "".concat(axisType, "Map"));
                var elementDefaultProps = element.type.defaultProps;
                var elementProps = elementDefaultProps !== undefined ? _objectSpread(_objectSpread({}, elementDefaultProps), element.props) : element.props;
                var axisOption = axisMap && axisMap[elementProps["".concat(axisType, "Id")]];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(element, _objectSpread(_objectSpread({}, axisOption), {}, {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(axisType, axisOption.className),
                    key: element.key || "".concat(displayName, "-").concat(index),
                    ticks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTicksOfAxis"])(axisOption, true)
                }));
            });
            _defineProperty(_this, "renderPolarGrid", function(element) {
                var _element$props = element.props, radialLines = _element$props.radialLines, polarAngles = _element$props.polarAngles, polarRadius = _element$props.polarRadius;
                var _this$state4 = _this.state, radiusAxisMap = _this$state4.radiusAxisMap, angleAxisMap = _this$state4.angleAxisMap;
                var radiusAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnyElementOfObject"])(radiusAxisMap);
                var angleAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnyElementOfObject"])(angleAxisMap);
                var cx = angleAxis.cx, cy = angleAxis.cy, innerRadius = angleAxis.innerRadius, outerRadius = angleAxis.outerRadius;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(element, {
                    polarAngles: Array.isArray(polarAngles) ? polarAngles : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTicksOfAxis"])(angleAxis, true).map(function(entry) {
                        return entry.coordinate;
                    }),
                    polarRadius: Array.isArray(polarRadius) ? polarRadius : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTicksOfAxis"])(radiusAxis, true).map(function(entry) {
                        return entry.coordinate;
                    }),
                    cx: cx,
                    cy: cy,
                    innerRadius: innerRadius,
                    outerRadius: outerRadius,
                    key: element.key || 'polar-grid',
                    radialLines: radialLines
                });
            });
            /**
       * Draw legend
       * @return {ReactElement}            The instance of Legend
       */ _defineProperty(_this, "renderLegend", function() {
                var formattedGraphicalItems = _this.state.formattedGraphicalItems;
                var _this$props2 = _this.props, children = _this$props2.children, width = _this$props2.width, height = _this$props2.height;
                var margin = _this.props.margin || {};
                var legendWidth = width - (margin.left || 0) - (margin.right || 0);
                var props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$getLegendProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLegendProps"])({
                    children: children,
                    formattedGraphicalItems: formattedGraphicalItems,
                    legendWidth: legendWidth,
                    legendContent: legendContent
                });
                if (!props) {
                    return null;
                }
                var item = props.item, otherProps = _objectWithoutProperties(props, _excluded);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(item, _objectSpread(_objectSpread({}, otherProps), {}, {
                    chartWidth: width,
                    chartHeight: height,
                    margin: margin,
                    onBBoxUpdate: _this.handleLegendBBoxUpdate
                }));
            });
            /**
       * Draw Tooltip
       * @return {ReactElement}  The instance of Tooltip
       */ _defineProperty(_this, "renderTooltip", function() {
                var _tooltipItem$props$ac;
                var _this$props3 = _this.props, children = _this$props3.children, accessibilityLayer = _this$props3.accessibilityLayer;
                var tooltipItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"]);
                if (!tooltipItem) {
                    return null;
                }
                var _this$state5 = _this.state, isTooltipActive = _this$state5.isTooltipActive, activeCoordinate = _this$state5.activeCoordinate, activePayload = _this$state5.activePayload, activeLabel = _this$state5.activeLabel, offset = _this$state5.offset;
                // The user can set isActive on the Tooltip,
                // and we respect the user to enable customisation.
                // The Tooltip is active if the user has set isActive, or if the tooltip is active due to a mouse event.
                var isActive = (_tooltipItem$props$ac = tooltipItem.props.active) !== null && _tooltipItem$props$ac !== void 0 ? _tooltipItem$props$ac : isTooltipActive;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(tooltipItem, {
                    viewBox: _objectSpread(_objectSpread({}, offset), {}, {
                        x: offset.left,
                        y: offset.top
                    }),
                    active: isActive,
                    label: activeLabel,
                    payload: isActive ? activePayload : [],
                    coordinate: activeCoordinate,
                    accessibilityLayer: accessibilityLayer
                });
            });
            _defineProperty(_this, "renderBrush", function(element) {
                var _this$props4 = _this.props, margin = _this$props4.margin, data = _this$props4.data;
                var _this$state6 = _this.state, offset = _this$state6.offset, dataStartIndex = _this$state6.dataStartIndex, dataEndIndex = _this$state6.dataEndIndex, updateId = _this$state6.updateId;
                // TODO: update brush when children update
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(element, {
                    key: element.key || '_recharts-brush',
                    onChange: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineEventHandlers"])(_this.handleBrushChange, element.props.onChange),
                    data: data,
                    x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(element.props.x) ? element.props.x : offset.left,
                    y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(element.props.y) ? element.props.y : offset.top + offset.height + offset.brushBottom - (margin.bottom || 0),
                    width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(element.props.width) ? element.props.width : offset.width,
                    startIndex: dataStartIndex,
                    endIndex: dataEndIndex,
                    updateId: "brush-".concat(updateId)
                });
            });
            _defineProperty(_this, "renderReferenceElement", function(element, displayName, index) {
                if (!element) {
                    return null;
                }
                var _this2 = _this, clipPathId = _this2.clipPathId;
                var _this$state7 = _this.state, xAxisMap = _this$state7.xAxisMap, yAxisMap = _this$state7.yAxisMap, offset = _this$state7.offset;
                var elementDefaultProps = element.type.defaultProps || {};
                var _element$props2 = element.props, _element$props2$xAxis = _element$props2.xAxisId, xAxisId = _element$props2$xAxis === void 0 ? elementDefaultProps.xAxisId : _element$props2$xAxis, _element$props2$yAxis = _element$props2.yAxisId, yAxisId = _element$props2$yAxis === void 0 ? elementDefaultProps.yAxisId : _element$props2$yAxis;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(element, {
                    key: element.key || "".concat(displayName, "-").concat(index),
                    xAxis: xAxisMap[xAxisId],
                    yAxis: yAxisMap[yAxisId],
                    viewBox: {
                        x: offset.left,
                        y: offset.top,
                        width: offset.width,
                        height: offset.height
                    },
                    clipPathId: clipPathId
                });
            });
            _defineProperty(_this, "renderActivePoints", function(_ref10) {
                var item = _ref10.item, activePoint = _ref10.activePoint, basePoint = _ref10.basePoint, childIndex = _ref10.childIndex, isRange = _ref10.isRange;
                var result = [];
                // item is not a React Element so we don't need to resolve defaultProps.
                var key = item.props.key;
                var itemItemProps = item.item.type.defaultProps !== undefined ? _objectSpread(_objectSpread({}, item.item.type.defaultProps), item.item.props) : item.item.props;
                var activeDot = itemItemProps.activeDot, dataKey = itemItemProps.dataKey;
                var dotProps = _objectSpread(_objectSpread({
                    index: childIndex,
                    dataKey: dataKey,
                    cx: activePoint.x,
                    cy: activePoint.y,
                    r: 4,
                    fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getMainColorOfGraphicItem"])(item.item),
                    strokeWidth: 2,
                    stroke: '#fff',
                    payload: activePoint.payload,
                    value: activePoint.value
                }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(activeDot, false)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adaptEventHandlers"])(activeDot));
                result.push(CategoricalChartWrapper.renderActiveDot(activeDot, dotProps, "".concat(key, "-activePoint-").concat(childIndex)));
                if (basePoint) {
                    result.push(CategoricalChartWrapper.renderActiveDot(activeDot, _objectSpread(_objectSpread({}, dotProps), {}, {
                        cx: basePoint.x,
                        cy: basePoint.y
                    }), "".concat(key, "-basePoint-").concat(childIndex)));
                } else if (isRange) {
                    result.push(null);
                }
                return result;
            });
            _defineProperty(_this, "renderGraphicChild", function(element, displayName, index) {
                var item = _this.filterFormatItem(element, displayName, index);
                if (!item) {
                    return null;
                }
                var tooltipEventType = _this.getTooltipEventType();
                var _this$state8 = _this.state, isTooltipActive = _this$state8.isTooltipActive, tooltipAxis = _this$state8.tooltipAxis, activeTooltipIndex = _this$state8.activeTooltipIndex, activeLabel = _this$state8.activeLabel;
                var children = _this.props.children;
                var tooltipItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"]);
                // item is not a React Element so we don't need to resolve defaultProps
                var _item$props = item.props, points = _item$props.points, isRange = _item$props.isRange, baseLine = _item$props.baseLine;
                var itemItemProps = item.item.type.defaultProps !== undefined ? _objectSpread(_objectSpread({}, item.item.type.defaultProps), item.item.props) : item.item.props;
                var activeDot = itemItemProps.activeDot, hide = itemItemProps.hide, activeBar = itemItemProps.activeBar, activeShape = itemItemProps.activeShape;
                var hasActive = Boolean(!hide && isTooltipActive && tooltipItem && (activeDot || activeBar || activeShape));
                var itemEvents = {};
                if (tooltipEventType !== 'axis' && tooltipItem && tooltipItem.props.trigger === 'click') {
                    itemEvents = {
                        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineEventHandlers"])(_this.handleItemMouseEnter, element.props.onClick)
                    };
                } else if (tooltipEventType !== 'axis') {
                    itemEvents = {
                        onMouseLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineEventHandlers"])(_this.handleItemMouseLeave, element.props.onMouseLeave),
                        onMouseEnter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["combineEventHandlers"])(_this.handleItemMouseEnter, element.props.onMouseEnter)
                    };
                }
                var graphicalItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(element, _objectSpread(_objectSpread({}, item.props), itemEvents));
                function findWithPayload(entry) {
                    // TODO needs to verify dataKey is Function
                    return typeof tooltipAxis.dataKey === 'function' ? tooltipAxis.dataKey(entry.payload) : null;
                }
                if (hasActive) {
                    if (activeTooltipIndex >= 0) {
                        var activePoint, basePoint;
                        if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
                            // number transform to string
                            var specifiedKey = typeof tooltipAxis.dataKey === 'function' ? findWithPayload : 'payload.'.concat(tooltipAxis.dataKey.toString());
                            activePoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findEntryInArray"])(points, specifiedKey, activeLabel);
                            basePoint = isRange && baseLine && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findEntryInArray"])(baseLine, specifiedKey, activeLabel);
                        } else {
                            activePoint = points === null || points === void 0 ? void 0 : points[activeTooltipIndex];
                            basePoint = isRange && baseLine && baseLine[activeTooltipIndex];
                        }
                        if (activeShape || activeBar) {
                            var activeIndex = element.props.activeIndex !== undefined ? element.props.activeIndex : activeTooltipIndex;
                            return [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(element, _objectSpread(_objectSpread(_objectSpread({}, item.props), itemEvents), {}, {
                                    activeIndex: activeIndex
                                })),
                                null,
                                null
                            ];
                        }
                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(activePoint)) {
                            return [
                                graphicalItem
                            ].concat(_toConsumableArray(_this.renderActivePoints({
                                item: item,
                                activePoint: activePoint,
                                basePoint: basePoint,
                                childIndex: activeTooltipIndex,
                                isRange: isRange
                            })));
                        }
                    } else {
                        var _this$getItemByXY;
                        /**
             * We hit this block if consumer uses a Tooltip without XAxis and/or YAxis.
             * In which case, this.state.activeTooltipIndex never gets set
             * because the mouse events that trigger that value getting set never get trigged without the axis components.
             *
             * An example usage case is a FunnelChart
             */ var _ref11 = (_this$getItemByXY = _this.getItemByXY(_this.state.activeCoordinate)) !== null && _this$getItemByXY !== void 0 ? _this$getItemByXY : {
                            graphicalItem: graphicalItem
                        }, _ref11$graphicalItem = _ref11.graphicalItem, _ref11$graphicalItem$ = _ref11$graphicalItem.item, xyItem = _ref11$graphicalItem$ === void 0 ? element : _ref11$graphicalItem$, childIndex = _ref11$graphicalItem.childIndex;
                        var elementProps = _objectSpread(_objectSpread(_objectSpread({}, item.props), itemEvents), {}, {
                            activeIndex: childIndex
                        });
                        return [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(xyItem, elementProps),
                            null,
                            null
                        ];
                    }
                }
                if (isRange) {
                    return [
                        graphicalItem,
                        null,
                        null
                    ];
                }
                return [
                    graphicalItem,
                    null
                ];
            });
            _defineProperty(_this, "renderCustomized", function(element, displayName, index) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(element, _objectSpread(_objectSpread({
                    key: "recharts-customized-".concat(index)
                }, _this.props), _this.state));
            });
            _defineProperty(_this, "renderMap", {
                CartesianGrid: {
                    handler: renderAsIs,
                    once: true
                },
                ReferenceArea: {
                    handler: _this.renderReferenceElement
                },
                ReferenceLine: {
                    handler: renderAsIs
                },
                ReferenceDot: {
                    handler: _this.renderReferenceElement
                },
                XAxis: {
                    handler: renderAsIs
                },
                YAxis: {
                    handler: renderAsIs
                },
                Brush: {
                    handler: _this.renderBrush,
                    once: true
                },
                Bar: {
                    handler: _this.renderGraphicChild
                },
                Line: {
                    handler: _this.renderGraphicChild
                },
                Area: {
                    handler: _this.renderGraphicChild
                },
                Radar: {
                    handler: _this.renderGraphicChild
                },
                RadialBar: {
                    handler: _this.renderGraphicChild
                },
                Scatter: {
                    handler: _this.renderGraphicChild
                },
                Pie: {
                    handler: _this.renderGraphicChild
                },
                Funnel: {
                    handler: _this.renderGraphicChild
                },
                Tooltip: {
                    handler: _this.renderCursor,
                    once: true
                },
                PolarGrid: {
                    handler: _this.renderPolarGrid,
                    once: true
                },
                PolarAngleAxis: {
                    handler: _this.renderPolarAxis
                },
                PolarRadiusAxis: {
                    handler: _this.renderPolarAxis
                },
                Customized: {
                    handler: _this.renderCustomized
                }
            });
            _this.clipPathId = "".concat((_props$id = _props.id) !== null && _props$id !== void 0 ? _props$id : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uniqueId"])('recharts'), "-clip");
            // trigger 60fps
            _this.throttleTriggeredAfterMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this.triggeredAfterMouseMove, (_props$throttleDelay = _props.throttleDelay) !== null && _props$throttleDelay !== void 0 ? _props$throttleDelay : 1000 / 60);
            _this.state = {};
            return _this;
        }
        _inherits(CategoricalChartWrapper, _Component);
        return _createClass(CategoricalChartWrapper, [
            {
                key: "componentDidMount",
                value: function componentDidMount() {
                    var _this$props$margin$le, _this$props$margin$to;
                    this.addListener();
                    this.accessibilityManager.setDetails({
                        container: this.container,
                        offset: {
                            left: (_this$props$margin$le = this.props.margin.left) !== null && _this$props$margin$le !== void 0 ? _this$props$margin$le : 0,
                            top: (_this$props$margin$to = this.props.margin.top) !== null && _this$props$margin$to !== void 0 ? _this$props$margin$to : 0
                        },
                        coordinateList: this.state.tooltipTicks,
                        mouseHandlerCallback: this.triggeredAfterMouseMove,
                        layout: this.props.layout
                    });
                    this.displayDefaultTooltip();
                }
            },
            {
                key: "displayDefaultTooltip",
                value: function displayDefaultTooltip() {
                    var _this$props5 = this.props, children = _this$props5.children, data = _this$props5.data, height = _this$props5.height, layout = _this$props5.layout;
                    var tooltipElem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"]);
                    // If the chart doesn't include a <Tooltip /> element, there's no tooltip to display
                    if (!tooltipElem) {
                        return;
                    }
                    var defaultIndex = tooltipElem.props.defaultIndex;
                    // Protect against runtime errors
                    if (typeof defaultIndex !== 'number' || defaultIndex < 0 || defaultIndex > this.state.tooltipTicks.length - 1) {
                        return;
                    }
                    var activeLabel = this.state.tooltipTicks[defaultIndex] && this.state.tooltipTicks[defaultIndex].value;
                    var activePayload = getTooltipContent(this.state, data, defaultIndex, activeLabel);
                    var independentAxisCoord = this.state.tooltipTicks[defaultIndex].coordinate;
                    var dependentAxisCoord = (this.state.offset.top + height) / 2;
                    var isHorizontal = layout === 'horizontal';
                    var activeCoordinate = isHorizontal ? {
                        x: independentAxisCoord,
                        y: dependentAxisCoord
                    } : {
                        y: independentAxisCoord,
                        x: dependentAxisCoord
                    };
                    // Unlike other chart types, scatter plot's tooltip positions rely on both X and Y coordinates. Only the scatter plot
                    // element knows its own Y coordinates.
                    // If there's a scatter plot, we'll want to grab that element for an interrogation.
                    var scatterPlotElement = this.state.formattedGraphicalItems.find(function(_ref12) {
                        var item = _ref12.item;
                        return item.type.name === 'Scatter';
                    });
                    if (scatterPlotElement) {
                        activeCoordinate = _objectSpread(_objectSpread({}, activeCoordinate), scatterPlotElement.props.points[defaultIndex].tooltipPosition);
                        activePayload = scatterPlotElement.props.points[defaultIndex].tooltipPayload;
                    }
                    var nextState = {
                        activeTooltipIndex: defaultIndex,
                        isTooltipActive: true,
                        activeLabel: activeLabel,
                        activePayload: activePayload,
                        activeCoordinate: activeCoordinate
                    };
                    this.setState(nextState);
                    this.renderCursor(tooltipElem);
                    // Make sure that anyone who keyboard-only users who tab to the chart will start their
                    // cursors at defaultIndex
                    this.accessibilityManager.setIndex(defaultIndex);
                }
            },
            {
                key: "getSnapshotBeforeUpdate",
                value: function getSnapshotBeforeUpdate(prevProps, prevState) {
                    if (!this.props.accessibilityLayer) {
                        return null;
                    }
                    if (this.state.tooltipTicks !== prevState.tooltipTicks) {
                        this.accessibilityManager.setDetails({
                            coordinateList: this.state.tooltipTicks
                        });
                    }
                    if (this.props.layout !== prevProps.layout) {
                        this.accessibilityManager.setDetails({
                            layout: this.props.layout
                        });
                    }
                    if (this.props.margin !== prevProps.margin) {
                        var _this$props$margin$le2, _this$props$margin$to2;
                        this.accessibilityManager.setDetails({
                            offset: {
                                left: (_this$props$margin$le2 = this.props.margin.left) !== null && _this$props$margin$le2 !== void 0 ? _this$props$margin$le2 : 0,
                                top: (_this$props$margin$to2 = this.props.margin.top) !== null && _this$props$margin$to2 !== void 0 ? _this$props$margin$to2 : 0
                            }
                        });
                    }
                    // Something has to be returned for getSnapshotBeforeUpdate
                    return null;
                }
            },
            {
                key: "componentDidUpdate",
                value: function componentDidUpdate(prevProps) {
                    // Check to see if the Tooltip updated. If so, re-check default tooltip position
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isChildrenEqual"])([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildByType"])(prevProps.children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"])
                    ], [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildByType"])(this.props.children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"])
                    ])) {
                        this.displayDefaultTooltip();
                    }
                }
            },
            {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                    this.removeListener();
                    this.throttleTriggeredAfterMouseMove.cancel();
                }
            },
            {
                key: "getTooltipEventType",
                value: function getTooltipEventType() {
                    var tooltipItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildByType"])(this.props.children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"]);
                    if (tooltipItem && typeof tooltipItem.props.shared === 'boolean') {
                        var eventType = tooltipItem.props.shared ? 'axis' : 'item';
                        return validateTooltipEventTypes.indexOf(eventType) >= 0 ? eventType : defaultTooltipEventType;
                    }
                    return defaultTooltipEventType;
                }
            },
            {
                key: "getMouseInfo",
                value: function getMouseInfo(event) {
                    if (!this.container) {
                        return null;
                    }
                    var element = this.container;
                    var boundingRect = element.getBoundingClientRect();
                    var containerOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DOMUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOffset"])(boundingRect);
                    var e = {
                        chartX: Math.round(event.pageX - containerOffset.left),
                        chartY: Math.round(event.pageY - containerOffset.top)
                    };
                    var scale = boundingRect.width / element.offsetWidth || 1;
                    var rangeObj = this.inRange(e.chartX, e.chartY, scale);
                    if (!rangeObj) {
                        return null;
                    }
                    var _this$state9 = this.state, xAxisMap = _this$state9.xAxisMap, yAxisMap = _this$state9.yAxisMap;
                    var tooltipEventType = this.getTooltipEventType();
                    if (tooltipEventType !== 'axis' && xAxisMap && yAxisMap) {
                        var xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnyElementOfObject"])(xAxisMap).scale;
                        var yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnyElementOfObject"])(yAxisMap).scale;
                        var xValue = xScale && xScale.invert ? xScale.invert(e.chartX) : null;
                        var yValue = yScale && yScale.invert ? yScale.invert(e.chartY) : null;
                        return _objectSpread(_objectSpread({}, e), {}, {
                            xValue: xValue,
                            yValue: yValue
                        });
                    }
                    var toolTipData = getTooltipData(this.state, this.props.data, this.props.layout, rangeObj);
                    if (toolTipData) {
                        return _objectSpread(_objectSpread({}, e), toolTipData);
                    }
                    return null;
                }
            },
            {
                key: "inRange",
                value: function inRange(x, y) {
                    var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
                    var layout = this.props.layout;
                    var scaledX = x / scale, scaledY = y / scale;
                    if (layout === 'horizontal' || layout === 'vertical') {
                        var offset = this.state.offset;
                        var isInRange = scaledX >= offset.left && scaledX <= offset.left + offset.width && scaledY >= offset.top && scaledY <= offset.top + offset.height;
                        return isInRange ? {
                            x: scaledX,
                            y: scaledY
                        } : null;
                    }
                    var _this$state10 = this.state, angleAxisMap = _this$state10.angleAxisMap, radiusAxisMap = _this$state10.radiusAxisMap;
                    if (angleAxisMap && radiusAxisMap) {
                        var angleAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnyElementOfObject"])(angleAxisMap);
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inRangeOfSector"])({
                            x: scaledX,
                            y: scaledY
                        }, angleAxis);
                    }
                    return null;
                }
            },
            {
                key: "parseEventsOfWrapper",
                value: function parseEventsOfWrapper() {
                    var children = this.props.children;
                    var tooltipEventType = this.getTooltipEventType();
                    var tooltipItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"]);
                    var tooltipEvents = {};
                    if (tooltipItem && tooltipEventType === 'axis') {
                        if (tooltipItem.props.trigger === 'click') {
                            tooltipEvents = {
                                onClick: this.handleClick
                            };
                        } else {
                            tooltipEvents = {
                                onMouseEnter: this.handleMouseEnter,
                                onDoubleClick: this.handleDoubleClick,
                                onMouseMove: this.handleMouseMove,
                                onMouseLeave: this.handleMouseLeave,
                                onTouchMove: this.handleTouchMove,
                                onTouchStart: this.handleTouchStart,
                                onTouchEnd: this.handleTouchEnd,
                                onContextMenu: this.handleContextMenu
                            };
                        }
                    }
                    // @ts-expect-error adaptEventHandlers expects DOM Event but generateCategoricalChart works with React UIEvents
                    var outerEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adaptEventHandlers"])(this.props, this.handleOuterEvent);
                    return _objectSpread(_objectSpread({}, outerEvents), tooltipEvents);
                }
            },
            {
                key: "addListener",
                value: function addListener() {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventCenter"].on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYNC_EVENT"], this.handleReceiveSyncEvent);
                }
            },
            {
                key: "removeListener",
                value: function removeListener() {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventCenter"].removeListener(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SYNC_EVENT"], this.handleReceiveSyncEvent);
                }
            },
            {
                key: "filterFormatItem",
                value: function filterFormatItem(item, displayName, childIndex) {
                    var formattedGraphicalItems = this.state.formattedGraphicalItems;
                    for(var i = 0, len = formattedGraphicalItems.length; i < len; i++){
                        var entry = formattedGraphicalItems[i];
                        if (entry.item === item || entry.props.key === item.key || displayName === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDisplayName"])(entry.item.type) && childIndex === entry.childIndex) {
                            return entry;
                        }
                    }
                    return null;
                }
            },
            {
                key: "renderClipPath",
                value: function renderClipPath() {
                    var clipPathId = this.clipPathId;
                    var _this$state$offset = this.state.offset, left = _this$state$offset.left, top = _this$state$offset.top, height = _this$state$offset.height, width = _this$state$offset.width;
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("defs", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("clipPath", {
                        id: clipPathId
                    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("rect", {
                        x: left,
                        y: top,
                        height: height,
                        width: width
                    })));
                }
            },
            {
                key: "getXScales",
                value: function getXScales() {
                    var xAxisMap = this.state.xAxisMap;
                    return xAxisMap ? Object.entries(xAxisMap).reduce(function(res, _ref13) {
                        var _ref14 = _slicedToArray(_ref13, 2), axisId = _ref14[0], axisProps = _ref14[1];
                        return _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, axisId, axisProps.scale));
                    }, {}) : null;
                }
            },
            {
                key: "getYScales",
                value: function getYScales() {
                    var yAxisMap = this.state.yAxisMap;
                    return yAxisMap ? Object.entries(yAxisMap).reduce(function(res, _ref15) {
                        var _ref16 = _slicedToArray(_ref15, 2), axisId = _ref16[0], axisProps = _ref16[1];
                        return _objectSpread(_objectSpread({}, res), {}, _defineProperty({}, axisId, axisProps.scale));
                    }, {}) : null;
                }
            },
            {
                key: "getXScaleByAxisId",
                value: function getXScaleByAxisId(axisId) {
                    var _this$state$xAxisMap;
                    return (_this$state$xAxisMap = this.state.xAxisMap) === null || _this$state$xAxisMap === void 0 || (_this$state$xAxisMap = _this$state$xAxisMap[axisId]) === null || _this$state$xAxisMap === void 0 ? void 0 : _this$state$xAxisMap.scale;
                }
            },
            {
                key: "getYScaleByAxisId",
                value: function getYScaleByAxisId(axisId) {
                    var _this$state$yAxisMap;
                    return (_this$state$yAxisMap = this.state.yAxisMap) === null || _this$state$yAxisMap === void 0 || (_this$state$yAxisMap = _this$state$yAxisMap[axisId]) === null || _this$state$yAxisMap === void 0 ? void 0 : _this$state$yAxisMap.scale;
                }
            },
            {
                key: "getItemByXY",
                value: function getItemByXY(chartXY) {
                    var _this$state11 = this.state, formattedGraphicalItems = _this$state11.formattedGraphicalItems, activeItem = _this$state11.activeItem;
                    if (formattedGraphicalItems && formattedGraphicalItems.length) {
                        for(var i = 0, len = formattedGraphicalItems.length; i < len; i++){
                            var graphicalItem = formattedGraphicalItems[i];
                            // graphicalItem is not a React Element so we don't need to resolve defaultProps
                            var props = graphicalItem.props, item = graphicalItem.item;
                            var itemProps = item.type.defaultProps !== undefined ? _objectSpread(_objectSpread({}, item.type.defaultProps), item.props) : item.props;
                            var itemDisplayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDisplayName"])(item.type);
                            if (itemDisplayName === 'Bar') {
                                var activeBarItem = (props.data || []).find(function(entry) {
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Rectangle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isInRectangle"])(chartXY, entry);
                                });
                                if (activeBarItem) {
                                    return {
                                        graphicalItem: graphicalItem,
                                        payload: activeBarItem
                                    };
                                }
                            } else if (itemDisplayName === 'RadialBar') {
                                var _activeBarItem = (props.data || []).find(function(entry) {
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inRangeOfSector"])(chartXY, entry);
                                });
                                if (_activeBarItem) {
                                    return {
                                        graphicalItem: graphicalItem,
                                        payload: _activeBarItem
                                    };
                                }
                            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ActiveShapeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunnel"])(graphicalItem, activeItem) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ActiveShapeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPie"])(graphicalItem, activeItem) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ActiveShapeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isScatter"])(graphicalItem, activeItem)) {
                                var activeIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ActiveShapeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActiveShapeIndexForTooltip"])({
                                    graphicalItem: graphicalItem,
                                    activeTooltipItem: activeItem,
                                    itemData: itemProps.data
                                });
                                var childIndex = itemProps.activeIndex === undefined ? activeIndex : itemProps.activeIndex;
                                return {
                                    graphicalItem: _objectSpread(_objectSpread({}, graphicalItem), {}, {
                                        childIndex: childIndex
                                    }),
                                    payload: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ActiveShapeUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isScatter"])(graphicalItem, activeItem) ? itemProps.data[activeIndex] : graphicalItem.props.data[activeIndex]
                                };
                            }
                        }
                    }
                    return null;
                }
            },
            {
                key: "render",
                value: function render() {
                    var _this3 = this;
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateWidthHeight"])(this)) {
                        return null;
                    }
                    var _this$props6 = this.props, children = _this$props6.children, className = _this$props6.className, width = _this$props6.width, height = _this$props6.height, style = _this$props6.style, compact = _this$props6.compact, title = _this$props6.title, desc = _this$props6.desc, others = _objectWithoutProperties(_this$props6, _excluded2);
                    var attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(others, false);
                    // The "compact" mode is mainly used as the panorama within Brush
                    if (compact) {
                        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$chartLayoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChartLayoutContextProvider"], {
                            state: this.state,
                            width: this.props.width,
                            height: this.props.height,
                            clipPathId: this.clipPathId
                        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Surface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Surface"], _extends({}, attrs, {
                            width: width,
                            height: height,
                            title: title,
                            desc: desc
                        }), this.renderClipPath(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderByOrder"])(children, this.renderMap)));
                    }
                    if (this.props.accessibilityLayer) {
                        var _this$props$tabIndex, _this$props$role;
                        // Set tabIndex to 0 by default (can be overwritten)
                        attrs.tabIndex = (_this$props$tabIndex = this.props.tabIndex) !== null && _this$props$tabIndex !== void 0 ? _this$props$tabIndex : 0;
                        // Set role to img by default (can be overwritten)
                        attrs.role = (_this$props$role = this.props.role) !== null && _this$props$role !== void 0 ? _this$props$role : 'application';
                        attrs.onKeyDown = function(e) {
                            _this3.accessibilityManager.keyboardEvent(e);
                        // 'onKeyDown' is not currently a supported prop that can be passed through
                        // if it's added, this should be added: this.props.onKeyDown(e);
                        };
                        attrs.onFocus = function() {
                            _this3.accessibilityManager.focus();
                        // 'onFocus' is not currently a supported prop that can be passed through
                        // if it's added, the focus event should be forwarded to the prop
                        };
                    }
                    var events = this.parseEventsOfWrapper();
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$chartLayoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChartLayoutContextProvider"], {
                        state: this.state,
                        width: this.props.width,
                        height: this.props.height,
                        clipPathId: this.clipPathId
                    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", _extends({
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('recharts-wrapper', className),
                        style: _objectSpread({
                            position: 'relative',
                            cursor: 'default',
                            width: width,
                            height: height
                        }, style)
                    }, events, {
                        ref: function ref(node) {
                            _this3.container = node;
                        }
                    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Surface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Surface"], _extends({}, attrs, {
                        width: width,
                        height: height,
                        title: title,
                        desc: desc,
                        style: FULL_WIDTH_AND_HEIGHT
                    }), this.renderClipPath(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderByOrder"])(children, this.renderMap)), this.renderLegend(), this.renderTooltip()));
                }
            }
        ]);
    }(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"]);
    _defineProperty(CategoricalChartWrapper, "displayName", chartName);
    // todo join specific chart propTypes
    _defineProperty(CategoricalChartWrapper, "defaultProps", _objectSpread({
        layout: 'horizontal',
        stackOffset: 'none',
        barCategoryGap: '10%',
        barGap: 4,
        margin: {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5
        },
        reverseStackOrder: false,
        syncMethod: 'index'
    }, defaultProps));
    _defineProperty(CategoricalChartWrapper, "getDerivedStateFromProps", function(nextProps, prevState) {
        var dataKey = nextProps.dataKey, data = nextProps.data, children = nextProps.children, width = nextProps.width, height = nextProps.height, layout = nextProps.layout, stackOffset = nextProps.stackOffset, margin = nextProps.margin;
        var dataStartIndex = prevState.dataStartIndex, dataEndIndex = prevState.dataEndIndex;
        if (prevState.updateId === undefined) {
            var defaultState = createDefaultState(nextProps);
            return _objectSpread(_objectSpread(_objectSpread({}, defaultState), {}, {
                updateId: 0
            }, updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread(_objectSpread({
                props: nextProps
            }, defaultState), {}, {
                updateId: 0
            }), prevState)), {}, {
                prevDataKey: dataKey,
                prevData: data,
                prevWidth: width,
                prevHeight: height,
                prevLayout: layout,
                prevStackOffset: stackOffset,
                prevMargin: margin,
                prevChildren: children
            });
        }
        if (dataKey !== prevState.prevDataKey || data !== prevState.prevData || width !== prevState.prevWidth || height !== prevState.prevHeight || layout !== prevState.prevLayout || stackOffset !== prevState.prevStackOffset || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ShallowEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqual"])(margin, prevState.prevMargin)) {
            var _defaultState = createDefaultState(nextProps);
            // Fixes https://github.com/recharts/recharts/issues/2143
            var keepFromPrevState = {
                // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
                // any flickering
                chartX: prevState.chartX,
                chartY: prevState.chartY,
                // The tooltip should stay active when it was active in the previous render. If this is not
                // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
                isTooltipActive: prevState.isTooltipActive
            };
            var updatesToState = _objectSpread(_objectSpread({}, getTooltipData(prevState, data, layout)), {}, {
                updateId: prevState.updateId + 1
            });
            var newState = _objectSpread(_objectSpread(_objectSpread({}, _defaultState), keepFromPrevState), updatesToState);
            return _objectSpread(_objectSpread(_objectSpread({}, newState), updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread({
                props: nextProps
            }, newState), prevState)), {}, {
                prevDataKey: dataKey,
                prevData: data,
                prevWidth: width,
                prevHeight: height,
                prevLayout: layout,
                prevStackOffset: stackOffset,
                prevMargin: margin,
                prevChildren: children
            });
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isChildrenEqual"])(children, prevState.prevChildren)) {
            var _brush$props$startInd, _brush$props, _brush$props$endIndex, _brush$props2;
            // specifically check for Brush - if it exists and the start and end indexes are different, re-render with the new ones
            var brush = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Brush$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Brush"]);
            var startIndex = brush ? (_brush$props$startInd = (_brush$props = brush.props) === null || _brush$props === void 0 ? void 0 : _brush$props.startIndex) !== null && _brush$props$startInd !== void 0 ? _brush$props$startInd : dataStartIndex : dataStartIndex;
            var endIndex = brush ? (_brush$props$endIndex = (_brush$props2 = brush.props) === null || _brush$props2 === void 0 ? void 0 : _brush$props2.endIndex) !== null && _brush$props$endIndex !== void 0 ? _brush$props$endIndex : dataEndIndex : dataEndIndex;
            var hasDifferentStartOrEndIndex = startIndex !== dataStartIndex || endIndex !== dataEndIndex;
            // update configuration in children
            var hasGlobalData = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(data);
            var newUpdateId = hasGlobalData && !hasDifferentStartOrEndIndex ? prevState.updateId : prevState.updateId + 1;
            return _objectSpread(_objectSpread({
                updateId: newUpdateId
            }, updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread(_objectSpread({
                props: nextProps
            }, prevState), {}, {
                updateId: newUpdateId,
                dataStartIndex: startIndex,
                dataEndIndex: endIndex
            }), prevState)), {}, {
                prevChildren: children,
                dataStartIndex: startIndex,
                dataEndIndex: endIndex
            });
        }
        return null;
    });
    _defineProperty(CategoricalChartWrapper, "renderActiveDot", function(option, props, key) {
        var dot;
        if (/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(option)) {
            dot = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(option, props);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(option)) {
            dot = option(props);
        } else {
            dot = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dot"], props);
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], {
            className: "recharts-active-dot",
            key: key
        }, dot);
    });
    var CategoricalChart = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function CategoricalChart(props, ref) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(CategoricalChartWrapper, _extends({}, props, {
            ref: ref
        }));
    });
    CategoricalChart.displayName = CategoricalChartWrapper.displayName;
    return CategoricalChart;
};
}}),
"[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/AreaChart.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @fileOverview Area Chart
 */ __turbopack_esm__({
    "AreaChart": (()=>AreaChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$generateCategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/generateCategoricalChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/Area.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$CartesianUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/CartesianUtils.js [app-ssr] (ecmascript)");
;
;
;
;
;
var AreaChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$generateCategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateCategoricalChart"])({
    chartName: 'AreaChart',
    GraphicalChild: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"],
    axisComponents: [
        {
            axisType: 'xAxis',
            AxisComp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"]
        },
        {
            axisType: 'yAxis',
            AxisComp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"]
        }
    ],
    formatAxisMap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$CartesianUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAxisMap"]
});
}}),
"[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @fileOverview Bar Chart
 */ __turbopack_esm__({
    "BarChart": (()=>BarChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$generateCategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/generateCategoricalChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$CartesianUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/CartesianUtils.js [app-ssr] (ecmascript)");
;
;
;
;
;
var BarChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$generateCategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateCategoricalChart"])({
    chartName: 'BarChart',
    GraphicalChild: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"],
    defaultTooltipEventType: 'axis',
    validateTooltipEventTypes: [
        'axis',
        'item'
    ],
    axisComponents: [
        {
            axisType: 'xAxis',
            AxisComp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"]
        },
        {
            axisType: 'yAxis',
            AxisComp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"]
        }
    ],
    formatAxisMap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$CartesianUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAxisMap"]
});
}}),
"[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/ComposedChart.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @fileOverview Composed Chart
 */ __turbopack_esm__({
    "ComposedChart": (()=>ComposedChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$generateCategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/generateCategoricalChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/Line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/Area.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/Scatter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ZAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/ZAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$CartesianUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/CartesianUtils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
var ComposedChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$generateCategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateCategoricalChart"])({
    chartName: 'ComposedChart',
    GraphicalChild: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scatter"]
    ],
    axisComponents: [
        {
            axisType: 'xAxis',
            AxisComp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"]
        },
        {
            axisType: 'yAxis',
            AxisComp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"]
        },
        {
            axisType: 'zAxis',
            AxisComp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ZAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZAxis"]
        }
    ],
    formatAxisMap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$CartesianUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAxisMap"]
});
}}),
"[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/FunnelChart.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @fileOverview Funnel Chart
 */ __turbopack_esm__({
    "FunnelChart": (()=>FunnelChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$generateCategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/generateCategoricalChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$numberAxis$2f$Funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/numberAxis/Funnel.js [app-ssr] (ecmascript)");
;
;
var FunnelChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$generateCategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateCategoricalChart"])({
    chartName: 'FunnelChart',
    GraphicalChild: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$numberAxis$2f$Funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Funnel"],
    validateTooltipEventTypes: [
        'item'
    ],
    defaultTooltipEventType: 'item',
    axisComponents: [],
    defaultProps: {
        layout: 'centric'
    }
});
}}),
"[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/LineChart.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @fileOverview Line Chart
 */ __turbopack_esm__({
    "LineChart": (()=>LineChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$generateCategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/generateCategoricalChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/Line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$CartesianUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/CartesianUtils.js [app-ssr] (ecmascript)");
;
;
;
;
;
var LineChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$generateCategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateCategoricalChart"])({
    chartName: 'LineChart',
    GraphicalChild: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"],
    axisComponents: [
        {
            axisType: 'xAxis',
            AxisComp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"]
        },
        {
            axisType: 'yAxis',
            AxisComp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"]
        }
    ],
    formatAxisMap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$CartesianUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAxisMap"]
});
}}),
"[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/PieChart.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @fileOverview Pie Chart
 */ __turbopack_esm__({
    "PieChart": (()=>PieChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$generateCategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/generateCategoricalChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/polar/Pie.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarAngleAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/polar/PolarAngleAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarRadiusAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/polar/PolarRadiusAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/PolarUtils.js [app-ssr] (ecmascript)");
;
;
;
;
;
var PieChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$generateCategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateCategoricalChart"])({
    chartName: 'PieChart',
    GraphicalChild: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"],
    validateTooltipEventTypes: [
        'item'
    ],
    defaultTooltipEventType: 'item',
    legendContent: 'children',
    axisComponents: [
        {
            axisType: 'angleAxis',
            AxisComp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarAngleAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarAngleAxis"]
        },
        {
            axisType: 'radiusAxis',
            AxisComp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarRadiusAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarRadiusAxis"]
        }
    ],
    formatAxisMap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAxisMap"],
    defaultProps: {
        layout: 'centric',
        startAngle: 0,
        endAngle: 360,
        cx: '50%',
        cy: '50%',
        innerRadius: 0,
        outerRadius: '80%'
    }
});
}}),
"[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/RadarChart.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @fileOverview Radar Chart
 */ __turbopack_esm__({
    "RadarChart": (()=>RadarChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$generateCategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/generateCategoricalChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Radar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/polar/Radar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarAngleAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/polar/PolarAngleAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarRadiusAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/polar/PolarRadiusAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/PolarUtils.js [app-ssr] (ecmascript)");
;
;
;
;
;
var RadarChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$generateCategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateCategoricalChart"])({
    chartName: 'RadarChart',
    GraphicalChild: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Radar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Radar"],
    axisComponents: [
        {
            axisType: 'angleAxis',
            AxisComp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarAngleAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarAngleAxis"]
        },
        {
            axisType: 'radiusAxis',
            AxisComp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarRadiusAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarRadiusAxis"]
        }
    ],
    formatAxisMap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAxisMap"],
    defaultProps: {
        layout: 'centric',
        startAngle: 90,
        endAngle: -270,
        cx: '50%',
        cy: '50%',
        innerRadius: 0,
        outerRadius: '80%'
    }
});
}}),
"[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/RadialBarChart.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @fileOverview Radar Bar Chart
 */ __turbopack_esm__({
    "RadialBarChart": (()=>RadialBarChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$generateCategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/generateCategoricalChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$RadialBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/polar/RadialBar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarAngleAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/polar/PolarAngleAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarRadiusAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/polar/PolarRadiusAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/PolarUtils.js [app-ssr] (ecmascript)");
;
;
;
;
;
var RadialBarChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$generateCategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateCategoricalChart"])({
    chartName: 'RadialBarChart',
    GraphicalChild: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$RadialBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadialBar"],
    legendContent: 'children',
    defaultTooltipEventType: 'axis',
    validateTooltipEventTypes: [
        'axis',
        'item'
    ],
    axisComponents: [
        {
            axisType: 'angleAxis',
            AxisComp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarAngleAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarAngleAxis"]
        },
        {
            axisType: 'radiusAxis',
            AxisComp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$PolarRadiusAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarRadiusAxis"]
        }
    ],
    formatAxisMap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAxisMap"],
    defaultProps: {
        layout: 'radial',
        startAngle: 0,
        endAngle: 360,
        cx: '50%',
        cy: '50%',
        innerRadius: 0,
        outerRadius: '80%'
    }
});
}}),
"[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/Sankey.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Sankey": (()=>Sankey)
});
/**
 * @file TreemapChart
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$maxBy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/maxBy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$sumBy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/sumBy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/ChartUtils.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/ReactUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/container/Layer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Surface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/container/Surface.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ShallowEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/ShallowEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Rectangle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/shape/Rectangle.js [app-ssr] (ecmascript)");
var _excluded = [
    "width",
    "height",
    "className",
    "style",
    "children"
], _excluded2 = [
    "sourceX",
    "sourceY",
    "sourceControlX",
    "targetX",
    "targetY",
    "targetControlX",
    "linkWidth"
];
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    for(var key in source){
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined);
    return _extends.apply(this, arguments);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
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
var defaultCoordinateOfTooltip = {
    x: 0,
    y: 0
};
var interpolationGenerator = function interpolationGenerator(a, b) {
    var ka = +a;
    var kb = b - ka;
    return function(t) {
        return ka + kb * t;
    };
};
var centerY = function centerY(node) {
    return node.y + node.dy / 2;
};
var getValue = function getValue(entry) {
    return entry && entry.value || 0;
};
var getSumOfIds = function getSumOfIds(links, ids) {
    return ids.reduce(function(result, id) {
        return result + getValue(links[id]);
    }, 0);
};
var getSumWithWeightedSource = function getSumWithWeightedSource(tree, links, ids) {
    return ids.reduce(function(result, id) {
        var link = links[id];
        var sourceNode = tree[link.source];
        return result + centerY(sourceNode) * getValue(links[id]);
    }, 0);
};
var getSumWithWeightedTarget = function getSumWithWeightedTarget(tree, links, ids) {
    return ids.reduce(function(result, id) {
        var link = links[id];
        var targetNode = tree[link.target];
        return result + centerY(targetNode) * getValue(links[id]);
    }, 0);
};
var ascendingY = function ascendingY(a, b) {
    return a.y - b.y;
};
var searchTargetsAndSources = function searchTargetsAndSources(links, id) {
    var sourceNodes = [];
    var sourceLinks = [];
    var targetNodes = [];
    var targetLinks = [];
    for(var i = 0, len = links.length; i < len; i++){
        var link = links[i];
        if (link.source === id) {
            targetNodes.push(link.target);
            targetLinks.push(i);
        }
        if (link.target === id) {
            sourceNodes.push(link.source);
            sourceLinks.push(i);
        }
    }
    return {
        sourceNodes: sourceNodes,
        sourceLinks: sourceLinks,
        targetLinks: targetLinks,
        targetNodes: targetNodes
    };
};
var updateDepthOfTargets = function updateDepthOfTargets(tree, curNode) {
    var targetNodes = curNode.targetNodes;
    for(var i = 0, len = targetNodes.length; i < len; i++){
        var target = tree[targetNodes[i]];
        if (target) {
            target.depth = Math.max(curNode.depth + 1, target.depth);
            updateDepthOfTargets(tree, target);
        }
    }
};
var getNodesTree = function getNodesTree(_ref, width, nodeWidth) {
    var nodes = _ref.nodes, links = _ref.links;
    var tree = nodes.map(function(entry, index) {
        var result = searchTargetsAndSources(links, index);
        return _objectSpread(_objectSpread(_objectSpread({}, entry), result), {}, {
            value: Math.max(getSumOfIds(links, result.sourceLinks), getSumOfIds(links, result.targetLinks)),
            depth: 0
        });
    });
    for(var i = 0, len = tree.length; i < len; i++){
        var node = tree[i];
        if (!node.sourceNodes.length) {
            updateDepthOfTargets(tree, node);
        }
    }
    var maxDepth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$maxBy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(tree, function(entry) {
        return entry.depth;
    }).depth;
    if (maxDepth >= 1) {
        var childWidth = (width - nodeWidth) / maxDepth;
        for(var _i = 0, _len = tree.length; _i < _len; _i++){
            var _node = tree[_i];
            if (!_node.targetNodes.length) {
                _node.depth = maxDepth;
            }
            _node.x = _node.depth * childWidth;
            _node.dx = nodeWidth;
        }
    }
    return {
        tree: tree,
        maxDepth: maxDepth
    };
};
var getDepthTree = function getDepthTree(tree) {
    var result = [];
    for(var i = 0, len = tree.length; i < len; i++){
        var node = tree[i];
        if (!result[node.depth]) {
            result[node.depth] = [];
        }
        result[node.depth].push(node);
    }
    return result;
};
var updateYOfTree = function updateYOfTree(depthTree, height, nodePadding, links) {
    var yRatio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(depthTree.map(function(nodes) {
        return (height - (nodes.length - 1) * nodePadding) / (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$sumBy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(nodes, getValue);
    }));
    for(var d = 0, maxDepth = depthTree.length; d < maxDepth; d++){
        for(var i = 0, len = depthTree[d].length; i < len; i++){
            var node = depthTree[d][i];
            node.y = i;
            node.dy = node.value * yRatio;
        }
    }
    return links.map(function(link) {
        return _objectSpread(_objectSpread({}, link), {}, {
            dy: getValue(link) * yRatio
        });
    });
};
var resolveCollisions = function resolveCollisions(depthTree, height, nodePadding) {
    var sort = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    for(var i = 0, len = depthTree.length; i < len; i++){
        var nodes = depthTree[i];
        var n = nodes.length;
        // Sort by the value of y
        if (sort) {
            nodes.sort(ascendingY);
        }
        var y0 = 0;
        for(var j = 0; j < n; j++){
            var node = nodes[j];
            var dy = y0 - node.y;
            if (dy > 0) {
                node.y += dy;
            }
            y0 = node.y + node.dy + nodePadding;
        }
        y0 = height + nodePadding;
        for(var _j = n - 1; _j >= 0; _j--){
            var _node2 = nodes[_j];
            var _dy = _node2.y + _node2.dy + nodePadding - y0;
            if (_dy > 0) {
                _node2.y -= _dy;
                y0 = _node2.y;
            } else {
                break;
            }
        }
    }
};
var relaxLeftToRight = function relaxLeftToRight(tree, depthTree, links, alpha) {
    for(var i = 0, maxDepth = depthTree.length; i < maxDepth; i++){
        var nodes = depthTree[i];
        for(var j = 0, len = nodes.length; j < len; j++){
            var node = nodes[j];
            if (node.sourceLinks.length) {
                var sourceSum = getSumOfIds(links, node.sourceLinks);
                var weightedSum = getSumWithWeightedSource(tree, links, node.sourceLinks);
                var y = weightedSum / sourceSum;
                node.y += (y - centerY(node)) * alpha;
            }
        }
    }
};
var relaxRightToLeft = function relaxRightToLeft(tree, depthTree, links, alpha) {
    for(var i = depthTree.length - 1; i >= 0; i--){
        var nodes = depthTree[i];
        for(var j = 0, len = nodes.length; j < len; j++){
            var node = nodes[j];
            if (node.targetLinks.length) {
                var targetSum = getSumOfIds(links, node.targetLinks);
                var weightedSum = getSumWithWeightedTarget(tree, links, node.targetLinks);
                var y = weightedSum / targetSum;
                node.y += (y - centerY(node)) * alpha;
            }
        }
    }
};
var updateYOfLinks = function updateYOfLinks(tree, links) {
    for(var i = 0, len = tree.length; i < len; i++){
        var node = tree[i];
        var sy = 0;
        var ty = 0;
        node.targetLinks.sort(function(a, b) {
            return tree[links[a].target].y - tree[links[b].target].y;
        });
        node.sourceLinks.sort(function(a, b) {
            return tree[links[a].source].y - tree[links[b].source].y;
        });
        for(var j = 0, tLen = node.targetLinks.length; j < tLen; j++){
            var link = links[node.targetLinks[j]];
            if (link) {
                link.sy = sy;
                sy += link.dy;
            }
        }
        for(var _j2 = 0, sLen = node.sourceLinks.length; _j2 < sLen; _j2++){
            var _link = links[node.sourceLinks[_j2]];
            if (_link) {
                _link.ty = ty;
                ty += _link.dy;
            }
        }
    }
};
var computeData = function computeData(_ref2) {
    var data = _ref2.data, width = _ref2.width, height = _ref2.height, iterations = _ref2.iterations, nodeWidth = _ref2.nodeWidth, nodePadding = _ref2.nodePadding, sort = _ref2.sort;
    var links = data.links;
    var _getNodesTree = getNodesTree(data, width, nodeWidth), tree = _getNodesTree.tree;
    var depthTree = getDepthTree(tree);
    var newLinks = updateYOfTree(depthTree, height, nodePadding, links);
    resolveCollisions(depthTree, height, nodePadding, sort);
    var alpha = 1;
    for(var i = 1; i <= iterations; i++){
        relaxRightToLeft(tree, depthTree, newLinks, alpha *= 0.99);
        resolveCollisions(depthTree, height, nodePadding, sort);
        relaxLeftToRight(tree, depthTree, newLinks, alpha);
        resolveCollisions(depthTree, height, nodePadding, sort);
    }
    updateYOfLinks(tree, newLinks);
    return {
        nodes: tree,
        links: newLinks
    };
};
var getCoordinateOfTooltip = function getCoordinateOfTooltip(el, type) {
    if (type === 'node') {
        return {
            x: el.x + el.width / 2,
            y: el.y + el.height / 2
        };
    }
    return {
        x: (el.sourceX + el.targetX) / 2,
        y: (el.sourceY + el.targetY) / 2
    };
};
var getPayloadOfTooltip = function getPayloadOfTooltip(el, type, nameKey) {
    var payload = el.payload;
    if (type === 'node') {
        return [
            {
                payload: el,
                name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getValueByDataKey"])(payload, nameKey, ''),
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getValueByDataKey"])(payload, 'value')
            }
        ];
    }
    if (payload.source && payload.target) {
        var sourceName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getValueByDataKey"])(payload.source, nameKey, '');
        var targetName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getValueByDataKey"])(payload.target, nameKey, '');
        return [
            {
                payload: el,
                name: "".concat(sourceName, " - ").concat(targetName),
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getValueByDataKey"])(payload, 'value')
            }
        ];
    }
    return [];
};
var Sankey = /*#__PURE__*/ function(_PureComponent) {
    function Sankey() {
        var _this;
        _classCallCheck(this, Sankey);
        for(var _len2 = arguments.length, args = new Array(_len2), _key = 0; _key < _len2; _key++){
            args[_key] = arguments[_key];
        }
        _this = _callSuper(this, Sankey, [].concat(args));
        _defineProperty(_this, "state", {
            activeElement: null,
            activeElementType: null,
            isTooltipActive: false,
            nodes: [],
            links: []
        });
        return _this;
    }
    _inherits(Sankey, _PureComponent);
    return _createClass(Sankey, [
        {
            key: "handleMouseEnter",
            value: function handleMouseEnter(el, type, e) {
                var _this$props = this.props, onMouseEnter = _this$props.onMouseEnter, children = _this$props.children;
                var tooltipItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"]);
                if (tooltipItem) {
                    this.setState(function(prev) {
                        if (tooltipItem.props.trigger === 'hover') {
                            return _objectSpread(_objectSpread({}, prev), {}, {
                                activeElement: el,
                                activeElementType: type,
                                isTooltipActive: true
                            });
                        }
                        return prev;
                    }, function() {
                        if (onMouseEnter) {
                            onMouseEnter(el, type, e);
                        }
                    });
                } else if (onMouseEnter) {
                    onMouseEnter(el, type, e);
                }
            }
        },
        {
            key: "handleMouseLeave",
            value: function handleMouseLeave(el, type, e) {
                var _this$props2 = this.props, onMouseLeave = _this$props2.onMouseLeave, children = _this$props2.children;
                var tooltipItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"]);
                if (tooltipItem) {
                    this.setState(function(prev) {
                        if (tooltipItem.props.trigger === 'hover') {
                            return _objectSpread(_objectSpread({}, prev), {}, {
                                activeElement: undefined,
                                activeElementType: undefined,
                                isTooltipActive: false
                            });
                        }
                        return prev;
                    }, function() {
                        if (onMouseLeave) {
                            onMouseLeave(el, type, e);
                        }
                    });
                } else if (onMouseLeave) {
                    onMouseLeave(el, type, e);
                }
            }
        },
        {
            key: "handleClick",
            value: function handleClick(el, type, e) {
                var _this$props3 = this.props, onClick = _this$props3.onClick, children = _this$props3.children;
                var tooltipItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"]);
                if (tooltipItem && tooltipItem.props.trigger === 'click') {
                    if (this.state.isTooltipActive) {
                        this.setState(function(prev) {
                            return _objectSpread(_objectSpread({}, prev), {}, {
                                activeElement: undefined,
                                activeElementType: undefined,
                                isTooltipActive: false
                            });
                        });
                    } else {
                        this.setState(function(prev) {
                            return _objectSpread(_objectSpread({}, prev), {}, {
                                activeElement: el,
                                activeElementType: type,
                                isTooltipActive: true
                            });
                        });
                    }
                }
                if (onClick) onClick(el, type, e);
            }
        },
        {
            key: "renderLinks",
            value: function renderLinks(links, nodes) {
                var _this2 = this;
                var _this$props4 = this.props, linkCurvature = _this$props4.linkCurvature, linkContent = _this$props4.link, margin = _this$props4.margin;
                var top = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(margin, 'top') || 0;
                var left = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(margin, 'left') || 0;
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], {
                    className: "recharts-sankey-links",
                    key: "recharts-sankey-links"
                }, links.map(function(link, i) {
                    var sourceRelativeY = link.sy, targetRelativeY = link.ty, linkWidth = link.dy;
                    var source = nodes[link.source];
                    var target = nodes[link.target];
                    var sourceX = source.x + source.dx + left;
                    var targetX = target.x + left;
                    var interpolationFunc = interpolationGenerator(sourceX, targetX);
                    var sourceControlX = interpolationFunc(linkCurvature);
                    var targetControlX = interpolationFunc(1 - linkCurvature);
                    var sourceY = source.y + sourceRelativeY + linkWidth / 2 + top;
                    var targetY = target.y + targetRelativeY + linkWidth / 2 + top;
                    var linkProps = _objectSpread({
                        sourceX: sourceX,
                        targetX: targetX,
                        sourceY: sourceY,
                        targetY: targetY,
                        sourceControlX: sourceControlX,
                        targetControlX: targetControlX,
                        sourceRelativeY: sourceRelativeY,
                        targetRelativeY: targetRelativeY,
                        linkWidth: linkWidth,
                        index: i,
                        payload: _objectSpread(_objectSpread({}, link), {}, {
                            source: source,
                            target: target
                        })
                    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(linkContent, false));
                    var events = {
                        onMouseEnter: _this2.handleMouseEnter.bind(_this2, linkProps, 'link'),
                        onMouseLeave: _this2.handleMouseLeave.bind(_this2, linkProps, 'link'),
                        onClick: _this2.handleClick.bind(_this2, linkProps, 'link')
                    };
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], _extends({
                        key: "link-".concat(link.source, "-").concat(link.target, "-").concat(link.value)
                    }, events), _this2.constructor.renderLinkItem(linkContent, linkProps));
                }));
            }
        },
        {
            key: "renderNodes",
            value: function renderNodes(nodes) {
                var _this3 = this;
                var _this$props5 = this.props, nodeContent = _this$props5.node, margin = _this$props5.margin;
                var top = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(margin, 'top') || 0;
                var left = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(margin, 'left') || 0;
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], {
                    className: "recharts-sankey-nodes",
                    key: "recharts-sankey-nodes"
                }, nodes.map(function(node, i) {
                    var x = node.x, y = node.y, dx = node.dx, dy = node.dy;
                    var nodeProps = _objectSpread(_objectSpread({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(nodeContent, false)), {}, {
                        x: x + left,
                        y: y + top,
                        width: dx,
                        height: dy,
                        index: i,
                        payload: node
                    });
                    var events = {
                        onMouseEnter: _this3.handleMouseEnter.bind(_this3, nodeProps, 'node'),
                        onMouseLeave: _this3.handleMouseLeave.bind(_this3, nodeProps, 'node'),
                        onClick: _this3.handleClick.bind(_this3, nodeProps, 'node')
                    };
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], _extends({
                        key: "node-".concat(node.x, "-").concat(node.y, "-").concat(node.value)
                    }, events), _this3.constructor.renderNodeItem(nodeContent, nodeProps));
                }));
            }
        },
        {
            key: "renderTooltip",
            value: function renderTooltip() {
                var _this$props6 = this.props, children = _this$props6.children, width = _this$props6.width, height = _this$props6.height, nameKey = _this$props6.nameKey;
                var tooltipItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"]);
                if (!tooltipItem) {
                    return null;
                }
                var _this$state = this.state, isTooltipActive = _this$state.isTooltipActive, activeElement = _this$state.activeElement, activeElementType = _this$state.activeElementType;
                var viewBox = {
                    x: 0,
                    y: 0,
                    width: width,
                    height: height
                };
                var coordinate = activeElement ? getCoordinateOfTooltip(activeElement, activeElementType) : defaultCoordinateOfTooltip;
                var payload = activeElement ? getPayloadOfTooltip(activeElement, activeElementType, nameKey) : [];
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(tooltipItem, {
                    viewBox: viewBox,
                    active: isTooltipActive,
                    coordinate: coordinate,
                    label: '',
                    payload: payload
                });
            }
        },
        {
            key: "render",
            value: function render() {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateWidthHeight"])(this)) {
                    return null;
                }
                var _this$props7 = this.props, width = _this$props7.width, height = _this$props7.height, className = _this$props7.className, style = _this$props7.style, children = _this$props7.children, others = _objectWithoutProperties(_this$props7, _excluded);
                var _this$state2 = this.state, links = _this$state2.links, nodes = _this$state2.nodes;
                var attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(others, false);
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('recharts-wrapper', className),
                    style: _objectSpread(_objectSpread({}, style), {}, {
                        position: 'relative',
                        cursor: 'default',
                        width: width,
                        height: height
                    }),
                    role: "region"
                }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Surface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Surface"], _extends({}, attrs, {
                    width: width,
                    height: height
                }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterSvgElements"])(children), this.renderLinks(links, nodes), this.renderNodes(nodes)), this.renderTooltip());
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps, prevState) {
                var data = nextProps.data, width = nextProps.width, height = nextProps.height, margin = nextProps.margin, iterations = nextProps.iterations, nodeWidth = nextProps.nodeWidth, nodePadding = nextProps.nodePadding, sort = nextProps.sort;
                if (data !== prevState.prevData || width !== prevState.prevWidth || height !== prevState.prevHeight || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ShallowEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqual"])(margin, prevState.prevMargin) || iterations !== prevState.prevIterations || nodeWidth !== prevState.prevNodeWidth || nodePadding !== prevState.prevNodePadding || sort !== prevState.sort) {
                    var contentWidth = width - (margin && margin.left || 0) - (margin && margin.right || 0);
                    var contentHeight = height - (margin && margin.top || 0) - (margin && margin.bottom || 0);
                    var _computeData = computeData({
                        data: data,
                        width: contentWidth,
                        height: contentHeight,
                        iterations: iterations,
                        nodeWidth: nodeWidth,
                        nodePadding: nodePadding,
                        sort: sort
                    }), links = _computeData.links, nodes = _computeData.nodes;
                    return _objectSpread(_objectSpread({}, prevState), {}, {
                        nodes: nodes,
                        links: links,
                        prevData: data,
                        prevWidth: iterations,
                        prevHeight: height,
                        prevMargin: margin,
                        prevNodePadding: nodePadding,
                        prevNodeWidth: nodeWidth,
                        prevIterations: iterations,
                        prevSort: sort
                    });
                }
                return null;
            }
        },
        {
            key: "renderLinkItem",
            value: function renderLinkItem(option, props) {
                if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(option)) {
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(option, props);
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(option)) {
                    return option(props);
                }
                var sourceX = props.sourceX, sourceY = props.sourceY, sourceControlX = props.sourceControlX, targetX = props.targetX, targetY = props.targetY, targetControlX = props.targetControlX, linkWidth = props.linkWidth, others = _objectWithoutProperties(props, _excluded2);
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", _extends({
                    className: "recharts-sankey-link",
                    d: "\n          M".concat(sourceX, ",").concat(sourceY, "\n          C").concat(sourceControlX, ",").concat(sourceY, " ").concat(targetControlX, ",").concat(targetY, " ").concat(targetX, ",").concat(targetY, "\n        "),
                    fill: "none",
                    stroke: "#333",
                    strokeWidth: linkWidth,
                    strokeOpacity: "0.2"
                }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(others, false)));
            }
        },
        {
            key: "renderNodeItem",
            value: function renderNodeItem(option, props) {
                if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(option)) {
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(option, props);
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(option)) {
                    return option(props);
                }
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Rectangle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Rectangle"], _extends({
                    className: "recharts-sankey-node",
                    fill: "#0088fe",
                    fillOpacity: "0.8"
                }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(props, false), {
                    role: "img"
                }));
            }
        }
    ]);
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PureComponent"]);
_defineProperty(Sankey, "displayName", 'Sankey');
_defineProperty(Sankey, "defaultProps", {
    nameKey: 'name',
    dataKey: 'value',
    nodePadding: 10,
    nodeWidth: 10,
    linkCurvature: 0.5,
    iterations: 32,
    margin: {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
    },
    sort: true
});
}}),
"[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/ScatterChart.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @fileOverview Scatter Chart
 */ __turbopack_esm__({
    "ScatterChart": (()=>ScatterChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$generateCategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/generateCategoricalChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/Scatter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ZAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/cartesian/ZAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$CartesianUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/CartesianUtils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var ScatterChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$generateCategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateCategoricalChart"])({
    chartName: 'ScatterChart',
    GraphicalChild: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Scatter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scatter"],
    defaultTooltipEventType: 'item',
    validateTooltipEventTypes: [
        'item'
    ],
    axisComponents: [
        {
            axisType: 'xAxis',
            AxisComp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"]
        },
        {
            axisType: 'yAxis',
            AxisComp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"]
        },
        {
            axisType: 'zAxis',
            AxisComp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ZAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZAxis"]
        }
    ],
    formatAxisMap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$CartesianUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAxisMap"]
});
}}),
"[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/SunburstChart.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SunburstChart": (()=>SunburstChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$victory$2d$vendor$40$36$2e$9$2e$2$2f$node_modules$2f$victory$2d$vendor$2f$es$2f$d3$2d$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/victory-vendor@36.9.2/node_modules/victory-vendor/es/d3-scale.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Surface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/container/Surface.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/container/Layer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/linear.js [app-ssr] (ecmascript) <export default as scaleLinear>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/PolarUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Sector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/shape/Sector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/component/Text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/ReactUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined);
    return _extends.apply(this, arguments);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
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
var defaultTextProps = {
    fontWeight: 'bold',
    paintOrder: 'stroke fill',
    fontSize: '.75rem',
    stroke: '#FFF',
    fill: 'black',
    pointerEvents: 'none'
};
function getMaxDepthOf(node) {
    if (!node.children || node.children.length === 0) return 1;
    // Calculate depth for each child and find the maximum
    var childDepths = node.children.map(function(d) {
        return getMaxDepthOf(d);
    });
    return 1 + Math.max.apply(Math, _toConsumableArray(childDepths));
}
var SunburstChart = function SunburstChart(_ref) {
    var className = _ref.className, data = _ref.data, children = _ref.children, width = _ref.width, height = _ref.height, _ref$padding = _ref.padding, padding = _ref$padding === void 0 ? 2 : _ref$padding, _ref$dataKey = _ref.dataKey, dataKey = _ref$dataKey === void 0 ? 'value' : _ref$dataKey, _ref$ringPadding = _ref.ringPadding, ringPadding = _ref$ringPadding === void 0 ? 2 : _ref$ringPadding, _ref$innerRadius = _ref.innerRadius, innerRadius = _ref$innerRadius === void 0 ? 50 : _ref$innerRadius, _ref$fill = _ref.fill, fill = _ref$fill === void 0 ? '#333' : _ref$fill, _ref$stroke = _ref.stroke, stroke = _ref$stroke === void 0 ? '#FFF' : _ref$stroke, _ref$textOptions = _ref.textOptions, textOptions = _ref$textOptions === void 0 ? defaultTextProps : _ref$textOptions, _ref$outerRadius = _ref.outerRadius, outerRadius = _ref$outerRadius === void 0 ? Math.min(width, height) / 2 : _ref$outerRadius, _ref$cx = _ref.cx, cx = _ref$cx === void 0 ? width / 2 : _ref$cx, _ref$cy = _ref.cy, cy = _ref$cy === void 0 ? height / 2 : _ref$cy, _ref$startAngle = _ref.startAngle, startAngle = _ref$startAngle === void 0 ? 0 : _ref$startAngle, _ref$endAngle = _ref.endAngle, endAngle = _ref$endAngle === void 0 ? 360 : _ref$endAngle, onClick = _ref.onClick, onMouseEnter = _ref.onMouseEnter, onMouseLeave = _ref.onMouseLeave;
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false), _useState2 = _slicedToArray(_useState, 2), isTooltipActive = _useState2[0], setIsTooltipActive = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), _useState4 = _slicedToArray(_useState3, 2), activeNode = _useState4[0], setActiveNode = _useState4[1];
    var rScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"])([
        0,
        data[dataKey]
    ], [
        0,
        endAngle
    ]);
    var treeDepth = getMaxDepthOf(data);
    var thickness = (outerRadius - innerRadius) / treeDepth;
    var sectors = [];
    var positions = new Map([]);
    // event handlers
    function handleMouseEnter(node, e) {
        if (onMouseEnter) onMouseEnter(node, e);
        setActiveNode(node);
        setIsTooltipActive(true);
    }
    function handleMouseLeave(node, e) {
        if (onMouseLeave) onMouseLeave(node, e);
        setActiveNode(null);
        setIsTooltipActive(false);
    }
    function handleClick(node) {
        if (onClick) onClick(node);
    }
    // recursively add nodes for each data point and its children
    function drawArcs(childNodes, options) {
        var radius = options.radius, innerR = options.innerR, initialAngle = options.initialAngle, childColor = options.childColor;
        var currentAngle = initialAngle;
        if (!childNodes) return; // base case: no children of this node
        childNodes.forEach(function(d) {
            var _ref2, _d$fill;
            var arcLength = rScale(d[dataKey]);
            var start = currentAngle;
            // color priority - if there's a color on the individual point use that, otherwise use parent color or default
            var fillColor = (_ref2 = (_d$fill = d === null || d === void 0 ? void 0 : d.fill) !== null && _d$fill !== void 0 ? _d$fill : childColor) !== null && _ref2 !== void 0 ? _ref2 : fill;
            var _polarToCartesian = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(0, 0, innerR + radius / 2, -(start + arcLength - arcLength / 2)), textX = _polarToCartesian.x, textY = _polarToCartesian.y;
            currentAngle += arcLength;
            sectors.push(/*#__PURE__*/ // TODO: Missing key warning. Can we use `key={d.name}`?
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("g", {
                "aria-label": d.name,
                tabIndex: 0
            }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Sector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sector"], {
                onClick: function onClick() {
                    return handleClick(d);
                },
                onMouseEnter: function onMouseEnter(e) {
                    return handleMouseEnter(d, e);
                },
                onMouseLeave: function onMouseLeave(e) {
                    return handleMouseLeave(d, e);
                },
                fill: fillColor,
                stroke: stroke,
                strokeWidth: padding,
                startAngle: start,
                endAngle: start + arcLength,
                innerRadius: innerR,
                outerRadius: innerR + radius,
                cx: cx,
                cy: cy
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], _extends({}, textOptions, {
                alignmentBaseline: "middle",
                textAnchor: "middle",
                x: textX + cx,
                y: cy - textY
            }), d[dataKey])));
            var _polarToCartesian2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, innerR + radius / 2, start), tooltipX = _polarToCartesian2.x, tooltipY = _polarToCartesian2.y;
            positions.set(d.name, {
                x: tooltipX,
                y: tooltipY
            });
            return drawArcs(d.children, {
                radius: radius,
                innerR: innerR + radius + ringPadding,
                initialAngle: start,
                childColor: fillColor
            });
        });
    }
    drawArcs(data.children, {
        radius: thickness,
        innerR: innerRadius,
        initialAngle: startAngle
    });
    var layerClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('recharts-sunburst', className);
    function renderTooltip() {
        var tooltipComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildByType"])([
            children
        ], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"]);
        if (!tooltipComponent || !activeNode) return null;
        var viewBox = {
            x: 0,
            y: 0,
            width: width,
            height: height
        };
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(tooltipComponent, {
            viewBox: viewBox,
            coordinate: positions.get(activeNode.name),
            payload: [
                activeNode
            ],
            active: isTooltipActive
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('recharts-wrapper', className),
        style: {
            position: 'relative',
            width: width,
            height: height
        },
        role: "region"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Surface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Surface"], {
        width: width,
        height: height
    }, children, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], {
        className: layerClass
    }, sectors)), renderTooltip());
};
}}),
"[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/chart/Treemap.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Treemap": (()=>Treemap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNaN$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isNaN.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isFunction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$omit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/omit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
/**
 * @fileOverview TreemapChart
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.2_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/ReactUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$smooth$40$4$2e$0$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$smooth$2f$es6$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-smooth@4.0.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-smooth/es6/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/container/Layer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/ChartUtils.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/DataUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Surface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/container/Surface.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/shape/Polygon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DOMUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/DOMUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/Constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Rectangle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/shape/Rectangle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Global$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/recharts@2.15.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/recharts/es6/util/Global.js [app-ssr] (ecmascript)");
var _excluded = [
    "width",
    "height",
    "className",
    "style",
    "children",
    "type"
];
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined);
    return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    for(var key in source){
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
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
var NODE_VALUE_KEY = 'value';
var computeNode = function computeNode(_ref) {
    var depth = _ref.depth, node = _ref.node, index = _ref.index, valueKey = _ref.valueKey;
    var children = node.children;
    var childDepth = depth + 1;
    var computedChildren = children && children.length ? children.map(function(child, i) {
        return computeNode({
            depth: childDepth,
            node: child,
            index: i,
            valueKey: valueKey
        });
    }) : null;
    var nodeValue;
    if (children && children.length) {
        nodeValue = computedChildren.reduce(function(result, child) {
            return result + child[NODE_VALUE_KEY];
        }, 0);
    } else {
        // TODO need to verify valueKey
        nodeValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNaN$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node[valueKey]) || node[valueKey] <= 0 ? 0 : node[valueKey];
    }
    return _objectSpread(_objectSpread({}, node), {}, _defineProperty(_defineProperty(_defineProperty({
        children: computedChildren
    }, NODE_VALUE_KEY, nodeValue), "depth", depth), "index", index));
};
var filterRect = function filterRect(node) {
    return {
        x: node.x,
        y: node.y,
        width: node.width,
        height: node.height
    };
};
// Compute the area for each child based on value & scale.
var getAreaOfChildren = function getAreaOfChildren(children, areaValueRatio) {
    var ratio = areaValueRatio < 0 ? 0 : areaValueRatio;
    return children.map(function(child) {
        var area = child[NODE_VALUE_KEY] * ratio;
        return _objectSpread(_objectSpread({}, child), {}, {
            area: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isNaN$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(area) || area <= 0 ? 0 : area
        });
    });
};
// Computes the score for the specified row, as the worst aspect ratio.
var getWorstScore = function getWorstScore(row, parentSize, aspectRatio) {
    var parentArea = parentSize * parentSize;
    var rowArea = row.area * row.area;
    var _row$reduce = row.reduce(function(result, child) {
        return {
            min: Math.min(result.min, child.area),
            max: Math.max(result.max, child.area)
        };
    }, {
        min: Infinity,
        max: 0
    }), min = _row$reduce.min, max = _row$reduce.max;
    return rowArea ? Math.max(parentArea * max * aspectRatio / rowArea, rowArea / (parentArea * min * aspectRatio)) : Infinity;
};
var horizontalPosition = function horizontalPosition(row, parentSize, parentRect, isFlush) {
    var rowHeight = parentSize ? Math.round(row.area / parentSize) : 0;
    if (isFlush || rowHeight > parentRect.height) {
        rowHeight = parentRect.height;
    }
    var curX = parentRect.x;
    var child;
    for(var i = 0, len = row.length; i < len; i++){
        child = row[i];
        child.x = curX;
        child.y = parentRect.y;
        child.height = rowHeight;
        child.width = Math.min(rowHeight ? Math.round(child.area / rowHeight) : 0, parentRect.x + parentRect.width - curX);
        curX += child.width;
    }
    // add the remain x to the last one of row
    child.width += parentRect.x + parentRect.width - curX;
    return _objectSpread(_objectSpread({}, parentRect), {}, {
        y: parentRect.y + rowHeight,
        height: parentRect.height - rowHeight
    });
};
var verticalPosition = function verticalPosition(row, parentSize, parentRect, isFlush) {
    var rowWidth = parentSize ? Math.round(row.area / parentSize) : 0;
    if (isFlush || rowWidth > parentRect.width) {
        rowWidth = parentRect.width;
    }
    var curY = parentRect.y;
    var child;
    for(var i = 0, len = row.length; i < len; i++){
        child = row[i];
        child.x = parentRect.x;
        child.y = curY;
        child.width = rowWidth;
        child.height = Math.min(rowWidth ? Math.round(child.area / rowWidth) : 0, parentRect.y + parentRect.height - curY);
        curY += child.height;
    }
    if (child) {
        child.height += parentRect.y + parentRect.height - curY;
    }
    return _objectSpread(_objectSpread({}, parentRect), {}, {
        x: parentRect.x + rowWidth,
        width: parentRect.width - rowWidth
    });
};
var position = function position(row, parentSize, parentRect, isFlush) {
    if (parentSize === parentRect.width) {
        return horizontalPosition(row, parentSize, parentRect, isFlush);
    }
    return verticalPosition(row, parentSize, parentRect, isFlush);
};
// Recursively arranges the specified node's children into squarified rows.
var squarify = function squarify(node, aspectRatio) {
    var children = node.children;
    if (children && children.length) {
        var rect = filterRect(node);
        // maybe a bug
        var row = [];
        var best = Infinity; // the best row score so far
        var child, score; // the current row score
        var size = Math.min(rect.width, rect.height); // initial orientation
        var scaleChildren = getAreaOfChildren(children, rect.width * rect.height / node[NODE_VALUE_KEY]);
        var tempChildren = scaleChildren.slice();
        row.area = 0;
        while(tempChildren.length > 0){
            // row first
            // eslint-disable-next-line prefer-destructuring
            row.push(child = tempChildren[0]);
            row.area += child.area;
            score = getWorstScore(row, size, aspectRatio);
            if (score <= best) {
                // continue with this orientation
                tempChildren.shift();
                best = score;
            } else {
                // abort, and try a different orientation
                row.area -= row.pop().area;
                rect = position(row, size, rect, false);
                size = Math.min(rect.width, rect.height);
                row.length = row.area = 0;
                best = Infinity;
            }
        }
        if (row.length) {
            rect = position(row, size, rect, true);
            row.length = row.area = 0;
        }
        return _objectSpread(_objectSpread({}, node), {}, {
            children: scaleChildren.map(function(c) {
                return squarify(c, aspectRatio);
            })
        });
    }
    return node;
};
var defaultState = {
    isTooltipActive: false,
    isAnimationFinished: false,
    activeNode: null,
    formatRoot: null,
    currentRoot: null,
    nestIndex: []
};
var Treemap = /*#__PURE__*/ function(_PureComponent) {
    function Treemap() {
        var _this;
        _classCallCheck(this, Treemap);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _callSuper(this, Treemap, [].concat(args));
        _defineProperty(_this, "state", _objectSpread({}, defaultState));
        _defineProperty(_this, "handleAnimationEnd", function() {
            var onAnimationEnd = _this.props.onAnimationEnd;
            _this.setState({
                isAnimationFinished: true
            });
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(onAnimationEnd)) {
                onAnimationEnd();
            }
        });
        _defineProperty(_this, "handleAnimationStart", function() {
            var onAnimationStart = _this.props.onAnimationStart;
            _this.setState({
                isAnimationFinished: false
            });
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(onAnimationStart)) {
                onAnimationStart();
            }
        });
        return _this;
    }
    _inherits(Treemap, _PureComponent);
    return _createClass(Treemap, [
        {
            key: "handleMouseEnter",
            value: function handleMouseEnter(node, e) {
                e.persist();
                var _this$props = this.props, onMouseEnter = _this$props.onMouseEnter, children = _this$props.children;
                var tooltipItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"]);
                if (tooltipItem) {
                    this.setState({
                        isTooltipActive: true,
                        activeNode: node
                    }, function() {
                        if (onMouseEnter) {
                            onMouseEnter(node, e);
                        }
                    });
                } else if (onMouseEnter) {
                    onMouseEnter(node, e);
                }
            }
        },
        {
            key: "handleMouseLeave",
            value: function handleMouseLeave(node, e) {
                e.persist();
                var _this$props2 = this.props, onMouseLeave = _this$props2.onMouseLeave, children = _this$props2.children;
                var tooltipItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"]);
                if (tooltipItem) {
                    this.setState({
                        isTooltipActive: false,
                        activeNode: null
                    }, function() {
                        if (onMouseLeave) {
                            onMouseLeave(node, e);
                        }
                    });
                } else if (onMouseLeave) {
                    onMouseLeave(node, e);
                }
            }
        },
        {
            key: "handleClick",
            value: function handleClick(node) {
                var _this$props3 = this.props, onClick = _this$props3.onClick, type = _this$props3.type;
                if (type === 'nest' && node.children) {
                    var _this$props4 = this.props, width = _this$props4.width, height = _this$props4.height, dataKey = _this$props4.dataKey, aspectRatio = _this$props4.aspectRatio;
                    var root = computeNode({
                        depth: 0,
                        node: _objectSpread(_objectSpread({}, node), {}, {
                            x: 0,
                            y: 0,
                            width: width,
                            height: height
                        }),
                        index: 0,
                        valueKey: dataKey
                    });
                    var formatRoot = squarify(root, aspectRatio);
                    var nestIndex = this.state.nestIndex;
                    nestIndex.push(node);
                    this.setState({
                        formatRoot: formatRoot,
                        currentRoot: root,
                        nestIndex: nestIndex
                    });
                }
                if (onClick) {
                    onClick(node);
                }
            }
        },
        {
            key: "handleNestIndex",
            value: function handleNestIndex(node, i) {
                var nestIndex = this.state.nestIndex;
                var _this$props5 = this.props, width = _this$props5.width, height = _this$props5.height, dataKey = _this$props5.dataKey, aspectRatio = _this$props5.aspectRatio;
                var root = computeNode({
                    depth: 0,
                    node: _objectSpread(_objectSpread({}, node), {}, {
                        x: 0,
                        y: 0,
                        width: width,
                        height: height
                    }),
                    index: 0,
                    valueKey: dataKey
                });
                var formatRoot = squarify(root, aspectRatio);
                nestIndex = nestIndex.slice(0, i + 1);
                this.setState({
                    formatRoot: formatRoot,
                    currentRoot: node,
                    nestIndex: nestIndex
                });
            }
        },
        {
            key: "renderItem",
            value: function renderItem(content, nodeProps, isLeaf) {
                var _this2 = this;
                var _this$props6 = this.props, isAnimationActive = _this$props6.isAnimationActive, animationBegin = _this$props6.animationBegin, animationDuration = _this$props6.animationDuration, animationEasing = _this$props6.animationEasing, isUpdateAnimationActive = _this$props6.isUpdateAnimationActive, type = _this$props6.type, animationId = _this$props6.animationId, colorPanel = _this$props6.colorPanel;
                var isAnimationFinished = this.state.isAnimationFinished;
                var width = nodeProps.width, height = nodeProps.height, x = nodeProps.x, y = nodeProps.y, depth = nodeProps.depth;
                var translateX = parseInt("".concat((Math.random() * 2 - 1) * width), 10);
                var event = {};
                if (isLeaf || type === 'nest') {
                    event = {
                        onMouseEnter: this.handleMouseEnter.bind(this, nodeProps),
                        onMouseLeave: this.handleMouseLeave.bind(this, nodeProps),
                        onClick: this.handleClick.bind(this, nodeProps)
                    };
                }
                if (!isAnimationActive) {
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], event, this.constructor.renderContentItem(content, _objectSpread(_objectSpread({}, nodeProps), {}, {
                        isAnimationActive: false,
                        isUpdateAnimationActive: false,
                        width: width,
                        height: height,
                        x: x,
                        y: y
                    }), type, colorPanel));
                }
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$smooth$40$4$2e$0$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$smooth$2f$es6$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                    begin: animationBegin,
                    duration: animationDuration,
                    isActive: isAnimationActive,
                    easing: animationEasing,
                    key: "treemap-".concat(animationId),
                    from: {
                        x: x,
                        y: y,
                        width: width,
                        height: height
                    },
                    to: {
                        x: x,
                        y: y,
                        width: width,
                        height: height
                    },
                    onAnimationStart: this.handleAnimationStart,
                    onAnimationEnd: this.handleAnimationEnd
                }, function(_ref2) {
                    var currX = _ref2.x, currY = _ref2.y, currWidth = _ref2.width, currHeight = _ref2.height;
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$smooth$40$4$2e$0$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$react$2d$smooth$2f$es6$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                        from: "translate(".concat(translateX, "px, ").concat(translateX, "px)"),
                        to: "translate(0, 0)",
                        attributeName: "transform",
                        begin: animationBegin,
                        easing: animationEasing,
                        isActive: isAnimationActive,
                        duration: animationDuration
                    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], event, function() {
                        // when animation Duration , only render depth=1 nodes
                        if (depth > 2 && !isAnimationFinished) {
                            return null;
                        }
                        return _this2.constructor.renderContentItem(content, _objectSpread(_objectSpread({}, nodeProps), {}, {
                            isAnimationActive: isAnimationActive,
                            isUpdateAnimationActive: !isUpdateAnimationActive,
                            width: currWidth,
                            height: currHeight,
                            x: currX,
                            y: currY
                        }), type, colorPanel);
                    }()));
                });
            }
        },
        {
            key: "renderNode",
            value: function renderNode(root, node) {
                var _this3 = this;
                var _this$props7 = this.props, content = _this$props7.content, type = _this$props7.type;
                var nodeProps = _objectSpread(_objectSpread(_objectSpread({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(this.props, false)), node), {}, {
                    root: root
                });
                var isLeaf = !node.children || !node.children.length;
                var currentRoot = this.state.currentRoot;
                var isCurrentRootChild = (currentRoot.children || []).filter(function(item) {
                    return item.depth === node.depth && item.name === node.name;
                });
                if (!isCurrentRootChild.length && root.depth && type === 'nest') {
                    return null;
                }
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], {
                    key: "recharts-treemap-node-".concat(nodeProps.x, "-").concat(nodeProps.y, "-").concat(nodeProps.name),
                    className: "recharts-treemap-depth-".concat(node.depth)
                }, this.renderItem(content, nodeProps, isLeaf), node.children && node.children.length ? node.children.map(function(child) {
                    return _this3.renderNode(node, child);
                }) : null);
            }
        },
        {
            key: "renderAllNodes",
            value: function renderAllNodes() {
                var formatRoot = this.state.formatRoot;
                if (!formatRoot) {
                    return null;
                }
                return this.renderNode(formatRoot, formatRoot);
            }
        },
        {
            key: "renderTooltip",
            value: function renderTooltip() {
                var _this$props8 = this.props, children = _this$props8.children, nameKey = _this$props8.nameKey;
                var tooltipItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildByType"])(children, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"]);
                if (!tooltipItem) {
                    return null;
                }
                var _this$props9 = this.props, width = _this$props9.width, height = _this$props9.height;
                var _this$state = this.state, isTooltipActive = _this$state.isTooltipActive, activeNode = _this$state.activeNode;
                var viewBox = {
                    x: 0,
                    y: 0,
                    width: width,
                    height: height
                };
                var coordinate = activeNode ? {
                    x: activeNode.x + activeNode.width / 2,
                    y: activeNode.y + activeNode.height / 2
                } : null;
                var payload = isTooltipActive && activeNode ? [
                    {
                        payload: activeNode,
                        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getValueByDataKey"])(activeNode, nameKey, ''),
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getValueByDataKey"])(activeNode, NODE_VALUE_KEY)
                    }
                ] : [];
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(tooltipItem, {
                    viewBox: viewBox,
                    active: isTooltipActive,
                    coordinate: coordinate,
                    label: '',
                    payload: payload
                });
            }
        },
        {
            key: "renderNestIndex",
            value: function renderNestIndex() {
                var _this4 = this;
                var _this$props10 = this.props, nameKey = _this$props10.nameKey, nestIndexContent = _this$props10.nestIndexContent;
                var nestIndex = this.state.nestIndex;
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                    className: "recharts-treemap-nest-index-wrapper",
                    style: {
                        marginTop: '8px',
                        textAlign: 'center'
                    }
                }, nestIndex.map(function(item, i) {
                    // TODO need to verify nameKey type
                    var name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(item, nameKey, 'root');
                    var content = null;
                    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(nestIndexContent)) {
                        content = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(nestIndexContent, item, i);
                    }
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(nestIndexContent)) {
                        content = nestIndexContent(item, i);
                    } else {
                        content = name;
                    }
                    return(/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                        onClick: _this4.handleNestIndex.bind(_this4, item, i),
                        key: "nest-index-".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uniqueId"])()),
                        className: "recharts-treemap-nest-index-box",
                        style: {
                            cursor: 'pointer',
                            display: 'inline-block',
                            padding: '0 7px',
                            background: '#000',
                            color: '#fff',
                            marginRight: '3px'
                        }
                    }, content));
                }));
            }
        },
        {
            key: "render",
            value: function render() {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateWidthHeight"])(this)) {
                    return null;
                }
                var _this$props11 = this.props, width = _this$props11.width, height = _this$props11.height, className = _this$props11.className, style = _this$props11.style, children = _this$props11.children, type = _this$props11.type, others = _objectWithoutProperties(_this$props11, _excluded);
                var attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(others, false);
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('recharts-wrapper', className),
                    style: _objectSpread(_objectSpread({}, style), {}, {
                        position: 'relative',
                        cursor: 'default',
                        width: width,
                        height: height
                    }),
                    role: "region"
                }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Surface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Surface"], _extends({}, attrs, {
                    width: width,
                    height: type === 'nest' ? height - 30 : height
                }), this.renderAllNodes(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterSvgElements"])(children)), this.renderTooltip(), type === 'nest' && this.renderNestIndex());
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps, prevState) {
                if (nextProps.data !== prevState.prevData || nextProps.type !== prevState.prevType || nextProps.width !== prevState.prevWidth || nextProps.height !== prevState.prevHeight || nextProps.dataKey !== prevState.prevDataKey || nextProps.aspectRatio !== prevState.prevAspectRatio) {
                    var root = computeNode({
                        depth: 0,
                        node: {
                            children: nextProps.data,
                            x: 0,
                            y: 0,
                            width: nextProps.width,
                            height: nextProps.height
                        },
                        index: 0,
                        valueKey: nextProps.dataKey
                    });
                    var formatRoot = squarify(root, nextProps.aspectRatio);
                    return _objectSpread(_objectSpread({}, prevState), {}, {
                        formatRoot: formatRoot,
                        currentRoot: root,
                        nestIndex: [
                            root
                        ],
                        prevAspectRatio: nextProps.aspectRatio,
                        prevData: nextProps.data,
                        prevWidth: nextProps.width,
                        prevHeight: nextProps.height,
                        prevDataKey: nextProps.dataKey,
                        prevType: nextProps.type
                    });
                }
                return null;
            }
        },
        {
            key: "renderContentItem",
            value: function renderContentItem(content, nodeProps, type, colorPanel) {
                if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(content)) {
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(content, nodeProps);
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$isFunction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(content)) {
                    return content(nodeProps);
                }
                // optimize default shape
                var x = nodeProps.x, y = nodeProps.y, width = nodeProps.width, height = nodeProps.height, index = nodeProps.index;
                var arrow = null;
                if (width > 10 && height > 10 && nodeProps.children && type === 'nest') {
                    arrow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Polygon"], {
                        points: [
                            {
                                x: x + 2,
                                y: y + height / 2
                            },
                            {
                                x: x + 6,
                                y: y + height / 2 + 3
                            },
                            {
                                x: x + 2,
                                y: y + height / 2 + 6
                            }
                        ]
                    });
                }
                var text = null;
                var nameSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DOMUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStringSize"])(nodeProps.name);
                if (width > 20 && height > 20 && nameSize.width < width && nameSize.height < height) {
                    text = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("text", {
                        x: x + 8,
                        y: y + height / 2 + 7,
                        fontSize: 14
                    }, nodeProps.name);
                }
                var colors = colorPanel || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_PANEL"];
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("g", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Rectangle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Rectangle"], _extends({
                    fill: nodeProps.depth < 2 ? colors[index % colors.length] : 'rgba(255,255,255,0)',
                    stroke: "#fff"
                }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$21$2f$node_modules$2f$lodash$2f$omit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(nodeProps, 'children'), {
                    role: "img"
                })), arrow, text);
            }
        }
    ]);
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$2_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PureComponent"]);
_defineProperty(Treemap, "displayName", 'Treemap');
_defineProperty(Treemap, "defaultProps", {
    aspectRatio: 0.5 * (1 + Math.sqrt(5)),
    dataKey: 'value',
    type: 'flat',
    isAnimationActive: !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Global$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Global"].isSsr,
    isUpdateAnimationActive: !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$recharts$40$2$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Global$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Global"].isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'linear'
});
}}),

};

//# sourceMappingURL=4b8ab_recharts_es6_chart_9e1a3e._.js.map