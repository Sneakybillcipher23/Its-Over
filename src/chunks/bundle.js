System.register([], function(_export, _context) {
    return {
        execute: function() {
            System.register("chunks:///_virtual/_rollupPluginModLoBabelHelpers.js", [], (function(e) {
                "use strict";
                return {
                    execute: function() {
                        function r(e, r) {
                            for (var t = 0; t < r.length; t++) {
                                var n = r[t];
                                n.enumerable = n.enumerable || !1,
                                n.configurable = !0,
                                "value"in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n)
                            }
                        }
                        function t() {
                            return (t = e("extends", Object.assign || function(e) {
                                for (var r = 1; r < arguments.length; r++) {
                                    var t = arguments[r];
                                    for (var n in t)
                                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                }
                                return e
                            }
                            )).apply(this, arguments)
                        }
                        function n(r, t) {
                            return (n = e("setPrototypeOf", Object.setPrototypeOf || function(e, r) {
                                return e.__proto__ = r,
                                e
                            }
                            ))(r, t)
                        }
                        function i(e, r) {
                            if (e) {
                                if ("string" == typeof e)
                                    return o(e, r);
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === t && e.constructor && (t = e.constructor.name),
                                "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? o(e, r) : void 0
                            }
                        }
                        function o(e, r) {
                            (null == r || r > e.length) && (r = e.length);
                            for (var t = 0, n = new Array(r); t < r; t++)
                                n[t] = e[t];
                            return n
                        }
                        e({
                            applyDecoratedDescriptor: function(e, r, t, n, i) {
                                var o = {};
                                Object.keys(n).forEach((function(e) {
                                    o[e] = n[e]
                                }
                                )),
                                o.enumerable = !!o.enumerable,
                                o.configurable = !!o.configurable,
                                ("value"in o || o.initializer) && (o.writable = !0);
                                o = t.slice().reverse().reduce((function(t, n) {
                                    return n(e, r, t) || t
                                }
                                ), o),
                                i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0,
                                o.initializer = void 0);
                                void 0 === o.initializer && (Object.defineProperty(e, r, o),
                                o = null);
                                return o
                            },
                            arrayLikeToArray: o,
                            assertThisInitialized: function(e) {
                                if (void 0 === e)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            },
                            createClass: function(e, t, n) {
                                t && r(e.prototype, t);
                                n && r(e, n);
                                return e
                            },
                            createForOfIteratorHelperLoose: function(e, r) {
                                var t;
                                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                    if (Array.isArray(e) || (t = i(e)) || r && e && "number" == typeof e.length) {
                                        t && (e = t);
                                        var n = 0;
                                        return function() {
                                            return n >= e.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: e[n++]
                                            }
                                        }
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }
                                return (t = e[Symbol.iterator]()).next.bind(t)
                            },
                            defineProperty: function(e, r, t) {
                                r in e ? Object.defineProperty(e, r, {
                                    value: t,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[r] = t;
                                return e
                            },
                            extends: t,
                            inheritsLoose: function(e, r) {
                                e.prototype = Object.create(r.prototype),
                                e.prototype.constructor = e,
                                n(e, r)
                            },
                            initializerDefineProperty: function(e, r, t, n) {
                                if (!t)
                                    return;
                                Object.defineProperty(e, r, {
                                    enumerable: t.enumerable,
                                    configurable: t.configurable,
                                    writable: t.writable,
                                    value: t.initializer ? t.initializer.call(n) : void 0
                                })
                            },
                            setPrototypeOf: n,
                            unsupportedIterableToArray: i
                        })
                    }
                }
            }
            ));

            System.register("chunks:///_virtual/env", [], (function(e) {
                "use strict";
                return {
                    execute: function() {
                        e("BUILD", !0),
                        e("DEBUG", !1)
                    }
                }
            }
            ));

        }
    };
});
