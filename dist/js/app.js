(() => {
    var __webpack_modules__ = {
        125: module => {
            /*!
 * dist/inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2021 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.7
 */
            !function(e, t) {
                if (true) module.exports = t(); else ;
            }(self, (function() {
                return function() {
                    "use strict";
                    var e = {
                        8741: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
                            t.default = i;
                        },
                        3976: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var a, n = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            };
                            var r = {
                                _maxTestPos: 500,
                                placeholder: "_",
                                optionalmarker: [ "[", "]" ],
                                quantifiermarker: [ "{", "}" ],
                                groupmarker: [ "(", ")" ],
                                alternatormarker: "|",
                                escapeChar: "\\",
                                mask: null,
                                regex: null,
                                oncomplete: function() {},
                                onincomplete: function() {},
                                oncleared: function() {},
                                repeat: 0,
                                greedy: !1,
                                autoUnmask: !1,
                                removeMaskOnSubmit: !1,
                                clearMaskOnLostFocus: !0,
                                insertMode: !0,
                                insertModeVisual: !0,
                                clearIncomplete: !1,
                                alias: null,
                                onKeyDown: function() {},
                                onBeforeMask: null,
                                onBeforePaste: function(e, t) {
                                    return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                                },
                                onBeforeWrite: null,
                                onUnMask: null,
                                showMaskOnFocus: !0,
                                showMaskOnHover: !0,
                                onKeyValidation: function() {},
                                skipOptionalPartCharacter: " ",
                                numericInput: !1,
                                rightAlign: !1,
                                undoOnEscape: !0,
                                radixPoint: "",
                                _radixDance: !1,
                                groupSeparator: "",
                                keepStatic: null,
                                positionCaretOnTab: !0,
                                tabThrough: !1,
                                supportsInputType: [ "text", "tel", "url", "password", "search" ],
                                ignorables: [ n.default.BACKSPACE, n.default.TAB, n.default["PAUSE/BREAK"], n.default.ESCAPE, n.default.PAGE_UP, n.default.PAGE_DOWN, n.default.END, n.default.HOME, n.default.LEFT, n.default.UP, n.default.RIGHT, n.default.DOWN, n.default.INSERT, n.default.DELETE, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
                                isComplete: null,
                                preValidation: null,
                                postValidation: null,
                                staticDefinitionSymbol: void 0,
                                jitMasking: !1,
                                nullable: !0,
                                inputEventOnly: !1,
                                noValuePatching: !1,
                                positionCaretOnClick: "lvp",
                                casing: null,
                                inputmode: "text",
                                importDataAttributes: !0,
                                shiftPositions: !0,
                                usePrototypeDefinitions: !0,
                                validationEventTimeOut: 3e3,
                                substitutes: {}
                            };
                            t.default = r;
                        },
                        7392: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            t.default = {
                                9: {
                                    validator: "[0-9０-９]",
                                    definitionSymbol: "*"
                                },
                                a: {
                                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                                    definitionSymbol: "*"
                                },
                                "*": {
                                    validator: "[0-9０-９A-Za-zА-яЁёÀ-ÿµ]"
                                }
                            };
                        },
                        253: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e, t, i) {
                                if (void 0 === i) return e.__data ? e.__data[t] : null;
                                e.__data = e.__data || {}, e.__data[t] = i;
                            };
                        },
                        3776: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.Event = void 0, t.off = function(e, t) {
                                var i, a;
                                function n(e, t, n) {
                                    if (e in i == !0) if (a.removeEventListener ? a.removeEventListener(e, n, !1) : a.detachEvent && a.detachEvent("on" + e, n), 
                                    "global" === t) for (var r in i[e]) i[e][r].splice(i[e][r].indexOf(n), 1); else i[e][t].splice(i[e][t].indexOf(n), 1);
                                }
                                function r(e, a) {
                                    var n, r, o = [];
                                    if (e.length > 0) if (void 0 === t) for (n = 0, r = i[e][a].length; n < r; n++) o.push({
                                        ev: e,
                                        namespace: a && a.length > 0 ? a : "global",
                                        handler: i[e][a][n]
                                    }); else o.push({
                                        ev: e,
                                        namespace: a && a.length > 0 ? a : "global",
                                        handler: t
                                    }); else if (a.length > 0) for (var l in i) for (var s in i[l]) if (s === a) if (void 0 === t) for (n = 0, 
                                    r = i[l][s].length; n < r; n++) o.push({
                                        ev: l,
                                        namespace: s,
                                        handler: i[l][s][n]
                                    }); else o.push({
                                        ev: l,
                                        namespace: s,
                                        handler: t
                                    });
                                    return o;
                                }
                                if (u(this[0]) && e) {
                                    i = this[0].eventRegistry, a = this[0];
                                    for (var o = e.split(" "), l = 0; l < o.length; l++) for (var s = o[l].split("."), c = r(s[0], s[1]), f = 0, d = c.length; f < d; f++) n(c[f].ev, c[f].namespace, c[f].handler);
                                }
                                return this;
                            }, t.on = function(e, t) {
                                function i(e, i) {
                                    n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent && n.attachEvent("on" + e, t), 
                                    a[e] = a[e] || {}, a[e][i] = a[e][i] || [], a[e][i].push(t);
                                }
                                if (u(this[0])) for (var a = this[0].eventRegistry, n = this[0], r = e.split(" "), o = 0; o < r.length; o++) {
                                    var l = r[o].split("."), s = l[0], c = l[1] || "global";
                                    i(s, c);
                                }
                                return this;
                            }, t.trigger = function(e) {
                                if (u(this[0])) for (var t = this[0].eventRegistry, i = this[0], a = "string" == typeof e ? e.split(" ") : [ e.type ], r = 0; r < a.length; r++) {
                                    var l = a[r].split("."), s = l[0], c = l[1] || "global";
                                    if (void 0 !== document && "global" === c) {
                                        var f, d, p = {
                                            bubbles: !0,
                                            cancelable: !0,
                                            detail: arguments[1]
                                        };
                                        if (document.createEvent) {
                                            try {
                                                if ("input" === s) p.inputType = "insertText", f = new InputEvent(s, p); else f = new CustomEvent(s, p);
                                            } catch (e) {
                                                (f = document.createEvent("CustomEvent")).initCustomEvent(s, p.bubbles, p.cancelable, p.detail);
                                            }
                                            e.type && (0, n.default)(f, e), i.dispatchEvent(f);
                                        } else (f = document.createEventObject()).eventType = s, f.detail = arguments[1], 
                                        e.type && (0, n.default)(f, e), i.fireEvent("on" + f.eventType, f);
                                    } else if (void 0 !== t[s]) if (arguments[0] = arguments[0].type ? arguments[0] : o.default.Event(arguments[0]), 
                                    arguments[0].detail = arguments.slice(1), "global" === c) for (var h in t[s]) for (d = 0; d < t[s][h].length; d++) t[s][h][d].apply(i, arguments); else for (d = 0; d < t[s][c].length; d++) t[s][c][d].apply(i, arguments);
                                }
                                return this;
                            };
                            var a, n = s(i(600)), r = s(i(9380)), o = s(i(4963)), l = s(i(8741));
                            function s(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            function u(e) {
                                return e instanceof Element;
                            }
                            t.Event = a, "function" == typeof r.default.CustomEvent ? t.Event = a = r.default.CustomEvent : l.default && (t.Event = a = function(e, t) {
                                t = t || {
                                    bubbles: !1,
                                    cancelable: !1,
                                    detail: void 0
                                };
                                var i = document.createEvent("CustomEvent");
                                return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
                            }, a.prototype = r.default.Event.prototype);
                        },
                        600: function(e, t) {
                            function i(e) {
                                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, i(e);
                            }
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function e() {
                                var t, a, n, r, o, l, s = arguments[0] || {}, u = 1, c = arguments.length, f = !1;
                                "boolean" == typeof s && (f = s, s = arguments[u] || {}, u++);
                                "object" !== i(s) && "function" != typeof s && (s = {});
                                for (;u < c; u++) if (null != (t = arguments[u])) for (a in t) n = s[a], r = t[a], 
                                s !== r && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, 
                                l = n && Array.isArray(n) ? n : []) : l = n && "[object Object]" === Object.prototype.toString.call(n) ? n : {}, 
                                s[a] = e(f, l, r)) : void 0 !== r && (s[a] = r));
                                return s;
                            };
                        },
                        4963: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var a = l(i(600)), n = l(i(9380)), r = l(i(253)), o = i(3776);
                            function l(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var s = n.default.document;
                            function u(e) {
                                return e instanceof u ? e : this instanceof u ? void (null != e && e !== n.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : s.querySelector(e), 
                                void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new u(e);
                            }
                            u.prototype = {
                                on: o.on,
                                off: o.off,
                                trigger: o.trigger
                            }, u.extend = a.default, u.data = r.default, u.Event = o.Event;
                            var c = u;
                            t.default = c;
                        },
                        9845: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.ua = t.mobile = t.iphone = t.iemobile = t.ie = void 0;
                            var a, n = (a = i(9380)) && a.__esModule ? a : {
                                default: a
                            };
                            var r = n.default.navigator && n.default.navigator.userAgent || "", o = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, l = "ontouchstart" in n.default, s = /iemobile/i.test(r), u = /iphone/i.test(r) && !s;
                            t.iphone = u, t.iemobile = s, t.mobile = l, t.ie = o, t.ua = r;
                        },
                        7184: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e) {
                                return e.replace(i, "\\$1");
                            };
                            var i = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
                        },
                        6030: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.EventHandlers = void 0;
                            var a, n = i(8711), r = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            }, o = i(9845), l = i(7215), s = i(7760), u = i(4713);
                            function c(e, t) {
                                var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!i) {
                                    if (Array.isArray(e) || (i = function(e, t) {
                                        if (!e) return;
                                        if ("string" == typeof e) return f(e, t);
                                        var i = Object.prototype.toString.call(e).slice(8, -1);
                                        "Object" === i && e.constructor && (i = e.constructor.name);
                                        if ("Map" === i || "Set" === i) return Array.from(e);
                                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return f(e, t);
                                    }(e)) || t && e && "number" == typeof e.length) {
                                        i && (e = i);
                                        var a = 0, n = function() {};
                                        return {
                                            s: n,
                                            n: function() {
                                                return a >= e.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: e[a++]
                                                };
                                            },
                                            e: function(e) {
                                                throw e;
                                            },
                                            f: n
                                        };
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }
                                var r, o = !0, l = !1;
                                return {
                                    s: function() {
                                        i = i.call(e);
                                    },
                                    n: function() {
                                        var e = i.next();
                                        return o = e.done, e;
                                    },
                                    e: function(e) {
                                        l = !0, r = e;
                                    },
                                    f: function() {
                                        try {
                                            o || null == i.return || i.return();
                                        } finally {
                                            if (l) throw r;
                                        }
                                    }
                                };
                            }
                            function f(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
                                return a;
                            }
                            var d = {
                                keydownEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = t.dependencyLib, c = t.maskset, f = this, d = a(f), p = e.keyCode, h = n.caret.call(t, f), v = i.onKeyDown.call(this, e, n.getBuffer.call(t), h, i);
                                    if (void 0 !== v) return v;
                                    if (p === r.default.BACKSPACE || p === r.default.DELETE || o.iphone && p === r.default.BACKSPACE_SAFARI || e.ctrlKey && p === r.default.X && !("oncut" in f)) e.preventDefault(), 
                                    l.handleRemove.call(t, f, p, h), (0, s.writeBuffer)(f, n.getBuffer.call(t, !0), c.p, e, f.inputmask._valueGet() !== n.getBuffer.call(t).join("")); else if (p === r.default.END || p === r.default.PAGE_DOWN) {
                                        e.preventDefault();
                                        var m = n.seekNext.call(t, n.getLastValidPosition.call(t));
                                        n.caret.call(t, f, e.shiftKey ? h.begin : m, m, !0);
                                    } else p === r.default.HOME && !e.shiftKey || p === r.default.PAGE_UP ? (e.preventDefault(), 
                                    n.caret.call(t, f, 0, e.shiftKey ? h.begin : 0, !0)) : i.undoOnEscape && p === r.default.ESCAPE && !0 !== e.altKey ? ((0, 
                                    s.checkVal)(f, !0, !1, t.undoValue.split("")), d.trigger("click")) : p !== r.default.INSERT || e.shiftKey || e.ctrlKey || void 0 !== t.userOptions.insertMode ? !0 === i.tabThrough && p === r.default.TAB ? !0 === e.shiftKey ? (h.end = n.seekPrevious.call(t, h.end, !0), 
                                    !0 === u.getTest.call(t, h.end - 1).match.static && h.end--, h.begin = n.seekPrevious.call(t, h.end, !0), 
                                    h.begin >= 0 && h.end > 0 && (e.preventDefault(), n.caret.call(t, f, h.begin, h.end))) : (h.begin = n.seekNext.call(t, h.begin, !0), 
                                    h.end = n.seekNext.call(t, h.begin, !0), h.end < c.maskLength && h.end--, h.begin <= c.maskLength && (e.preventDefault(), 
                                    n.caret.call(t, f, h.begin, h.end))) : e.shiftKey || i.insertModeVisual && !1 === i.insertMode && (p === r.default.RIGHT ? setTimeout((function() {
                                        var e = n.caret.call(t, f);
                                        n.caret.call(t, f, e.begin);
                                    }), 0) : p === r.default.LEFT && setTimeout((function() {
                                        var e = n.translatePosition.call(t, f.inputmask.caretPos.begin);
                                        n.translatePosition.call(t, f.inputmask.caretPos.end);
                                        t.isRTL ? n.caret.call(t, f, e + (e === c.maskLength ? 0 : 1)) : n.caret.call(t, f, e - (0 === e ? 0 : 1));
                                    }), 0)) : l.isSelection.call(t, h) ? i.insertMode = !i.insertMode : (i.insertMode = !i.insertMode, 
                                    n.caret.call(t, f, h.begin, h.begin));
                                    t.ignorable = i.ignorables.includes(p);
                                },
                                keypressEvent: function(e, t, i, a, o) {
                                    var u = this.inputmask || this, c = u.opts, f = u.dependencyLib, d = u.maskset, p = u.el, h = f(p), v = e.keyCode;
                                    if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || u.ignorable)) return v === r.default.ENTER && u.undoValue !== u._valueGet(!0) && (u.undoValue = u._valueGet(!0), 
                                    setTimeout((function() {
                                        h.trigger("change");
                                    }), 0)), u.skipInputEvent = !0, !0;
                                    if (v) {
                                        44 !== v && 46 !== v || 3 !== e.location || "" === c.radixPoint || (v = c.radixPoint.charCodeAt(0));
                                        var m, g = t ? {
                                            begin: o,
                                            end: o
                                        } : n.caret.call(u, p), k = String.fromCharCode(v);
                                        k = c.substitutes[k] || k, d.writeOutBuffer = !0;
                                        var y = l.isValid.call(u, g, k, a, void 0, void 0, void 0, t);
                                        if (!1 !== y && (n.resetMaskSet.call(u, !0), m = void 0 !== y.caret ? y.caret : n.seekNext.call(u, y.pos.begin ? y.pos.begin : y.pos), 
                                        d.p = m), m = c.numericInput && void 0 === y.caret ? n.seekPrevious.call(u, m) : m, 
                                        !1 !== i && (setTimeout((function() {
                                            c.onKeyValidation.call(p, v, y);
                                        }), 0), d.writeOutBuffer && !1 !== y)) {
                                            var b = n.getBuffer.call(u);
                                            (0, s.writeBuffer)(p, b, m, e, !0 !== t);
                                        }
                                        if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                                    }
                                },
                                keyupEvent: function(e) {
                                    var t = this.inputmask;
                                    !t.isComposing || e.keyCode !== r.default.KEY_229 && e.keyCode !== r.default.ENTER || t.$el.trigger("input");
                                },
                                pasteEvent: function(e) {
                                    var t, i = this.inputmask, a = i.opts, r = i._valueGet(!0), o = n.caret.call(i, this);
                                    i.isRTL && (t = o.end, o.end = n.translatePosition.call(i, o.begin), o.begin = n.translatePosition.call(i, t));
                                    var l = r.substr(0, o.begin), u = r.substr(o.end, r.length);
                                    if (l == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(0, o.begin).join("") && (l = ""), 
                                    u == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(o.end).join("") && (u = ""), 
                                    window.clipboardData && window.clipboardData.getData) r = l + window.clipboardData.getData("Text") + u; else {
                                        if (!e.clipboardData || !e.clipboardData.getData) return !0;
                                        r = l + e.clipboardData.getData("text/plain") + u;
                                    }
                                    var f = r;
                                    if (i.isRTL) {
                                        f = f.split("");
                                        var d, p = c(n.getBufferTemplate.call(i));
                                        try {
                                            for (p.s(); !(d = p.n()).done; ) {
                                                var h = d.value;
                                                f[0] === h && f.shift();
                                            }
                                        } catch (e) {
                                            p.e(e);
                                        } finally {
                                            p.f();
                                        }
                                        f = f.join("");
                                    }
                                    if ("function" == typeof a.onBeforePaste) {
                                        if (!1 === (f = a.onBeforePaste.call(i, f, a))) return !1;
                                        f || (f = r);
                                    }
                                    (0, s.checkVal)(this, !0, !1, f.toString().split(""), e), e.preventDefault();
                                },
                                inputFallBackEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = t.dependencyLib;
                                    var l = this, c = l.inputmask._valueGet(!0), f = (t.isRTL ? n.getBuffer.call(t).slice().reverse() : n.getBuffer.call(t)).join(""), p = n.caret.call(t, l, void 0, void 0, !0);
                                    if (f !== c) {
                                        c = function(e, i, a) {
                                            if (o.iemobile) {
                                                var r = i.replace(n.getBuffer.call(t).join(""), "");
                                                if (1 === r.length) {
                                                    var l = i.split("");
                                                    l.splice(a.begin, 0, r), i = l.join("");
                                                }
                                            }
                                            return i;
                                        }(0, c, p);
                                        var h = function(e, a, r) {
                                            for (var o, l, s, c = e.substr(0, r.begin).split(""), f = e.substr(r.begin).split(""), d = a.substr(0, r.begin).split(""), p = a.substr(r.begin).split(""), h = c.length >= d.length ? c.length : d.length, v = f.length >= p.length ? f.length : p.length, m = "", g = [], k = "~"; c.length < h; ) c.push(k);
                                            for (;d.length < h; ) d.push(k);
                                            for (;f.length < v; ) f.unshift(k);
                                            for (;p.length < v; ) p.unshift(k);
                                            var y = c.concat(f), b = d.concat(p);
                                            for (l = 0, o = y.length; l < o; l++) switch (s = u.getPlaceholder.call(t, n.translatePosition.call(t, l)), 
                                            m) {
                                              case "insertText":
                                                b[l - 1] === y[l] && r.begin == y.length - 1 && g.push(y[l]), l = o;
                                                break;

                                              case "insertReplacementText":
                                              case "deleteContentBackward":
                                                y[l] === k ? r.end++ : l = o;
                                                break;

                                              default:
                                                y[l] !== b[l] && (y[l + 1] !== k && y[l + 1] !== s && void 0 !== y[l + 1] || (b[l] !== s || b[l + 1] !== k) && b[l] !== k ? b[l + 1] === k && b[l] === y[l + 1] ? (m = "insertText", 
                                                g.push(y[l]), r.begin--, r.end--) : y[l] !== s && y[l] !== k && (y[l + 1] === k || b[l] !== y[l] && b[l + 1] === y[l + 1]) ? (m = "insertReplacementText", 
                                                g.push(y[l]), r.begin--) : y[l] === k ? (m = "deleteContentBackward", (n.isMask.call(t, n.translatePosition.call(t, l), !0) || b[l] === i.radixPoint) && r.end++) : l = o : (m = "insertText", 
                                                g.push(y[l]), r.begin--, r.end--));
                                            }
                                            return {
                                                action: m,
                                                data: g,
                                                caret: r
                                            };
                                        }(c, f, p);
                                        switch ((l.inputmask.shadowRoot || l.ownerDocument).activeElement !== l && l.focus(), 
                                        (0, s.writeBuffer)(l, n.getBuffer.call(t)), n.caret.call(t, l, p.begin, p.end, !0), 
                                        h.action) {
                                          case "insertText":
                                          case "insertReplacementText":
                                            h.data.forEach((function(e, i) {
                                                var n = new a.Event("keypress");
                                                n.keyCode = e.charCodeAt(0), t.ignorable = !1, d.keypressEvent.call(l, n);
                                            })), setTimeout((function() {
                                                t.$el.trigger("keyup");
                                            }), 0);
                                            break;

                                          case "deleteContentBackward":
                                            var v = new a.Event("keydown");
                                            v.keyCode = r.default.BACKSPACE, d.keydownEvent.call(l, v);
                                            break;

                                          default:
                                            (0, s.applyInputValue)(l, c);
                                        }
                                        e.preventDefault();
                                    }
                                },
                                compositionendEvent: function(e) {
                                    var t = this.inputmask;
                                    t.isComposing = !1, t.$el.trigger("input");
                                },
                                setValueEvent: function(e) {
                                    var t = this.inputmask, i = this, a = e && e.detail ? e.detail[0] : arguments[1];
                                    void 0 === a && (a = i.inputmask._valueGet(!0)), (0, s.applyInputValue)(i, a), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && n.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
                                },
                                focusEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = this, r = a.inputmask._valueGet();
                                    i.showMaskOnFocus && r !== n.getBuffer.call(t).join("") && (0, s.writeBuffer)(a, n.getBuffer.call(t), n.seekNext.call(t, n.getLastValidPosition.call(t))), 
                                    !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || l.isComplete.call(t, n.getBuffer.call(t)) && -1 !== n.getLastValidPosition.call(t) || d.clickEvent.apply(a, [ e, !0 ]), 
                                    t.undoValue = t._valueGet(!0);
                                },
                                invalidEvent: function(e) {
                                    this.inputmask.validationEvent = !0;
                                },
                                mouseleaveEvent: function() {
                                    var e = this.inputmask, t = e.opts, i = this;
                                    e.mouseEnter = !1, t.clearMaskOnLostFocus && (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i && (0, 
                                    s.HandleNativePlaceholder)(i, e.originalPlaceholder);
                                },
                                clickEvent: function(e, t) {
                                    var i = this.inputmask, a = this;
                                    if ((a.inputmask.shadowRoot || a.ownerDocument).activeElement === a) {
                                        var r = n.determineNewCaretPosition.call(i, n.caret.call(i, a), t);
                                        void 0 !== r && n.caret.call(i, a, r);
                                    }
                                },
                                cutEvent: function(e) {
                                    var t = this.inputmask, i = t.maskset, a = this, o = n.caret.call(t, a), u = t.isRTL ? n.getBuffer.call(t).slice(o.end, o.begin) : n.getBuffer.call(t).slice(o.begin, o.end), c = t.isRTL ? u.reverse().join("") : u.join("");
                                    window.navigator.clipboard ? window.navigator.clipboard.writeText(c) : window.clipboardData && window.clipboardData.getData && window.clipboardData.setData("Text", c), 
                                    l.handleRemove.call(t, a, r.default.DELETE, o), (0, s.writeBuffer)(a, n.getBuffer.call(t), i.p, e, t.undoValue !== t._valueGet(!0));
                                },
                                blurEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = (0, t.dependencyLib)(this), r = this;
                                    if (r.inputmask) {
                                        (0, s.HandleNativePlaceholder)(r, t.originalPlaceholder);
                                        var o = r.inputmask._valueGet(), u = n.getBuffer.call(t).slice();
                                        "" !== o && (i.clearMaskOnLostFocus && (-1 === n.getLastValidPosition.call(t) && o === n.getBufferTemplate.call(t).join("") ? u = [] : s.clearOptionalTail.call(t, u)), 
                                        !1 === l.isComplete.call(t, u) && (setTimeout((function() {
                                            a.trigger("incomplete");
                                        }), 0), i.clearIncomplete && (n.resetMaskSet.call(t), u = i.clearMaskOnLostFocus ? [] : n.getBufferTemplate.call(t).slice())), 
                                        (0, s.writeBuffer)(r, u, void 0, e)), t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), 
                                        a.trigger("change"));
                                    }
                                },
                                mouseenterEvent: function() {
                                    var e = this.inputmask, t = e.opts, i = this;
                                    if (e.mouseEnter = !0, (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i) {
                                        var a = (e.isRTL ? n.getBufferTemplate.call(e).slice().reverse() : n.getBufferTemplate.call(e)).join("");
                                        e.placeholder !== a && i.placeholder !== e.originalPlaceholder && (e.originalPlaceholder = i.placeholder), 
                                        t.showMaskOnHover && (0, s.HandleNativePlaceholder)(i, a);
                                    }
                                },
                                submitEvent: function() {
                                    var e = this.inputmask, t = e.opts;
                                    e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === n.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === n.getBufferTemplate.call(e).join("") && e._valueSet(""), 
                                    t.clearIncomplete && !1 === l.isComplete.call(e, n.getBuffer.call(e)) && e._valueSet(""), 
                                    t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout((function() {
                                        (0, s.writeBuffer)(e.el, n.getBuffer.call(e));
                                    }), 0));
                                },
                                resetEvent: function() {
                                    var e = this.inputmask;
                                    e.refreshValue = !0, setTimeout((function() {
                                        (0, s.applyInputValue)(e.el, e._valueGet(!0));
                                    }), 0);
                                }
                            };
                            t.EventHandlers = d;
                        },
                        9716: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.EventRuler = void 0;
                            var a = l(i(2394)), n = l(i(5581)), r = i(8711), o = i(7760);
                            function l(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var s = {
                                on: function(e, t, i) {
                                    var l = e.inputmask.dependencyLib, s = function(t) {
                                        t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                                        var s, u = this, c = u.inputmask, f = c ? c.opts : void 0;
                                        if (void 0 === c && "FORM" !== this.nodeName) {
                                            var d = l.data(u, "_inputmask_opts");
                                            l(u).off(), d && new a.default(d).mask(u);
                                        } else {
                                            if ([ "submit", "reset", "setvalue" ].includes(t.type) || "FORM" === this.nodeName || !(u.disabled || u.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === f.tabThrough && t.keyCode === n.default.TAB))) {
                                                switch (t.type) {
                                                  case "input":
                                                    if (!0 === c.skipInputEvent || t.inputType && "insertCompositionText" === t.inputType) return c.skipInputEvent = !1, 
                                                    t.preventDefault();
                                                    break;

                                                  case "keydown":
                                                    c.skipKeyPressEvent = !1, c.skipInputEvent = c.isComposing = t.keyCode === n.default.KEY_229;
                                                    break;

                                                  case "keyup":
                                                  case "compositionend":
                                                    c.isComposing && (c.skipInputEvent = !1);
                                                    break;

                                                  case "keypress":
                                                    if (!0 === c.skipKeyPressEvent) return t.preventDefault();
                                                    c.skipKeyPressEvent = !0;
                                                    break;

                                                  case "click":
                                                  case "focus":
                                                    return c.validationEvent ? (c.validationEvent = !1, e.blur(), (0, o.HandleNativePlaceholder)(e, (c.isRTL ? r.getBufferTemplate.call(c).slice().reverse() : r.getBufferTemplate.call(c)).join("")), 
                                                    setTimeout((function() {
                                                        e.focus();
                                                    }), f.validationEventTimeOut), !1) : (s = arguments, setTimeout((function() {
                                                        e.inputmask && i.apply(u, s);
                                                    }), 0), !1);
                                                }
                                                var p = i.apply(u, arguments);
                                                return !1 === p && (t.preventDefault(), t.stopPropagation()), p;
                                            }
                                            t.preventDefault();
                                        }
                                    };
                                    [ "submit", "reset" ].includes(t) ? (s = s.bind(e), null !== e.form && l(e.form).on(t, s)) : l(e).on(t, s), 
                                    e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(s);
                                },
                                off: function(e, t) {
                                    if (e.inputmask && e.inputmask.events) {
                                        var i = e.inputmask.dependencyLib, a = e.inputmask.events;
                                        for (var n in t && ((a = [])[t] = e.inputmask.events[t]), a) {
                                            for (var r = a[n]; r.length > 0; ) {
                                                var o = r.pop();
                                                [ "submit", "reset" ].includes(n) ? null !== e.form && i(e.form).off(n, o) : i(e).off(n, o);
                                            }
                                            delete e.inputmask.events[n];
                                        }
                                    }
                                }
                            };
                            t.EventRuler = s;
                        },
                        219: function(e, t, i) {
                            var a = d(i(2394)), n = d(i(5581)), r = d(i(7184)), o = i(8711), l = i(4713);
                            function s(e) {
                                return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, s(e);
                            }
                            function u(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e;
                                }(e) || function(e, t) {
                                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null == i) return;
                                    var a, n, r = [], o = !0, l = !1;
                                    try {
                                        for (i = i.call(e); !(o = (a = i.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0) ;
                                    } catch (e) {
                                        l = !0, n = e;
                                    } finally {
                                        try {
                                            o || null == i.return || i.return();
                                        } finally {
                                            if (l) throw n;
                                        }
                                    }
                                    return r;
                                }(e, t) || function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return c(e, t);
                                    var i = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === i && e.constructor && (i = e.constructor.name);
                                    if ("Map" === i || "Set" === i) return Array.from(e);
                                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }
                            function c(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
                                return a;
                            }
                            function f(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var a = t[i];
                                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                                    Object.defineProperty(e, a.key, a);
                                }
                            }
                            function d(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var p = a.default.dependencyLib, h = function() {
                                function e(t, i, a) {
                                    !function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    }(this, e), this.mask = t, this.format = i, this.opts = a, this._date = new Date(1, 0, 1), 
                                    this.initDateObject(t, this.opts);
                                }
                                var t, i, a;
                                return t = e, (i = [ {
                                    key: "date",
                                    get: function() {
                                        return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), 
                                        this._date;
                                    }
                                }, {
                                    key: "initDateObject",
                                    value: function(e, t) {
                                        var i;
                                        for (P(t).lastIndex = 0; i = P(t).exec(this.format); ) {
                                            var a = new RegExp("\\d+$").exec(i[0]), n = a ? i[0][0] + "x" : i[0], r = void 0;
                                            if (void 0 !== e) {
                                                if (a) {
                                                    var o = P(t).lastIndex, l = O(i.index, t);
                                                    P(t).lastIndex = o, r = e.slice(0, e.indexOf(l.nextMatch[0]));
                                                } else r = e.slice(0, n.length);
                                                e = e.slice(r.length);
                                            }
                                            Object.prototype.hasOwnProperty.call(g, n) && this.setValue(this, r, n, g[n][2], g[n][1]);
                                        }
                                    }
                                }, {
                                    key: "setValue",
                                    value: function(e, t, i, a, n) {
                                        if (void 0 !== t && (e[a] = "ampm" === a ? t : t.replace(/[^0-9]/g, "0"), e["raw" + a] = t.replace(/\s/g, "_")), 
                                        void 0 !== n) {
                                            var r = e[a];
                                            ("day" === a && 29 === parseInt(r) || "month" === a && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), 
                                            "day" === a && (m = !0, 0 === parseInt(r) && (r = 1)), "month" === a && (m = !0), 
                                            "year" === a && (m = !0, r.length < 4 && (r = _(r, 4, !0))), "" === r || isNaN(r) || n.call(e._date, r), 
                                            "ampm" === a && n.call(e._date, r);
                                        }
                                    }
                                }, {
                                    key: "reset",
                                    value: function() {
                                        this._date = new Date(1, 0, 1);
                                    }
                                }, {
                                    key: "reInit",
                                    value: function() {
                                        this._date = void 0, this.date;
                                    }
                                } ]) && f(t.prototype, i), a && f(t, a), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e;
                            }(), v = (new Date).getFullYear(), m = !1, g = {
                                d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                                dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                                    return _(Date.prototype.getDate.call(this), 2);
                                } ],
                                ddd: [ "" ],
                                dddd: [ "" ],
                                m: [ "[1-9]|1[012]", function(e) {
                                    var t = e ? parseInt(e) : 0;
                                    return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return Date.prototype.getMonth.call(this) + 1;
                                } ],
                                mm: [ "0[1-9]|1[012]", function(e) {
                                    var t = e ? parseInt(e) : 0;
                                    return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return _(Date.prototype.getMonth.call(this) + 1, 2);
                                } ],
                                mmm: [ "" ],
                                mmmm: [ "" ],
                                yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                                    return _(Date.prototype.getFullYear.call(this), 2);
                                } ],
                                yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                                    return _(Date.prototype.getFullYear.call(this), 4);
                                } ],
                                h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                                hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                                    return _(Date.prototype.getHours.call(this), 2);
                                } ],
                                hx: [ function(e) {
                                    return "[0-9]{".concat(e, "}");
                                }, Date.prototype.setHours, "hours", function(e) {
                                    return Date.prototype.getHours;
                                } ],
                                H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                                HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                                    return _(Date.prototype.getHours.call(this), 2);
                                } ],
                                Hx: [ function(e) {
                                    return "[0-9]{".concat(e, "}");
                                }, Date.prototype.setHours, "hours", function(e) {
                                    return function() {
                                        return _(Date.prototype.getHours.call(this), e);
                                    };
                                } ],
                                M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                                MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                                    return _(Date.prototype.getMinutes.call(this), 2);
                                } ],
                                s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                                ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                                    return _(Date.prototype.getSeconds.call(this), 2);
                                } ],
                                l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                                    return _(Date.prototype.getMilliseconds.call(this), 3);
                                } ],
                                L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                                    return _(Date.prototype.getMilliseconds.call(this), 2);
                                } ],
                                t: [ "[ap]", y, "ampm", b, 1 ],
                                tt: [ "[ap]m", y, "ampm", b, 2 ],
                                T: [ "[AP]", y, "ampm", b, 1 ],
                                TT: [ "[AP]M", y, "ampm", b, 2 ],
                                Z: [ ".*", void 0, "Z", function() {
                                    var e = this.toString().match(/\((.+)\)/)[1];
                                    e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map((function(e) {
                                        return u(e, 1)[0];
                                    })).join(""));
                                    return e;
                                } ],
                                o: [ "" ],
                                S: [ "" ]
                            }, k = {
                                isoDate: "yyyy-mm-dd",
                                isoTime: "HH:MM:ss",
                                isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                                isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                            };
                            function y(e) {
                                var t = this.getHours();
                                e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
                            }
                            function b() {
                                var e = this.getHours();
                                return (e = e || 12) >= 12 ? "PM" : "AM";
                            }
                            function x(e) {
                                var t = new RegExp("\\d+$").exec(e[0]);
                                if (t && void 0 !== t[0]) {
                                    var i = g[e[0][0] + "x"].slice("");
                                    return i[0] = i[0](t[0]), i[3] = i[3](t[0]), i;
                                }
                                if (g[e[0]]) return g[e[0]];
                            }
                            function P(e) {
                                if (!e.tokenizer) {
                                    var t = [], i = [];
                                    for (var a in g) if (/\.*x$/.test(a)) {
                                        var n = a[0] + "\\d+";
                                        -1 === i.indexOf(n) && i.push(n);
                                    } else -1 === t.indexOf(a[0]) && t.push(a[0]);
                                    e.tokenizer = "(" + (i.length > 0 ? i.join("|") + "|" : "") + t.join("+|") + ")+?|.", 
                                    e.tokenizer = new RegExp(e.tokenizer, "g");
                                }
                                return e.tokenizer;
                            }
                            function E(e, t, i) {
                                if (!m) return !0;
                                if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                                if ("29" == e.day) {
                                    var a = O(t.pos, i);
                                    if ("yyyy" === a.targetMatch[0] && t.pos - a.targetMatchIndex == 2) return t.remove = t.pos + 1, 
                                    t;
                                } else if ("02" == e.month && "30" == e.day && void 0 !== t.c) return e.day = "03", 
                                e.date.setDate(3), e.date.setMonth(1), t.insert = [ {
                                    pos: t.pos,
                                    c: "0"
                                }, {
                                    pos: t.pos + 1,
                                    c: t.c
                                } ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                                return !1;
                            }
                            function S(e, t, i, a) {
                                var n, o, l = "";
                                for (P(i).lastIndex = 0; n = P(i).exec(e); ) if (void 0 === t) if (o = x(n)) l += "(" + o[0] + ")"; else switch (n[0]) {
                                  case "[":
                                    l += "(";
                                    break;

                                  case "]":
                                    l += ")?";
                                    break;

                                  default:
                                    l += (0, r.default)(n[0]);
                                } else if (o = x(n)) if (!0 !== a && o[3]) l += o[3].call(t.date); else o[2] ? l += t["raw" + o[2]] : l += n[0]; else l += n[0];
                                return l;
                            }
                            function _(e, t, i) {
                                for (e = String(e), t = t || 2; e.length < t; ) e = i ? e + "0" : "0" + e;
                                return e;
                            }
                            function w(e, t, i) {
                                return "string" == typeof e ? new h(e, t, i) : e && "object" === s(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
                            }
                            function M(e, t) {
                                return S(t.inputFormat, {
                                    date: e
                                }, t);
                            }
                            function O(e, t) {
                                var i, a, n = 0, r = 0;
                                for (P(t).lastIndex = 0; a = P(t).exec(t.inputFormat); ) {
                                    var o = new RegExp("\\d+$").exec(a[0]);
                                    if ((n += r = o ? parseInt(o[0]) : a[0].length) >= e + 1) {
                                        i = a, a = P(t).exec(t.inputFormat);
                                        break;
                                    }
                                }
                                return {
                                    targetMatchIndex: n - r,
                                    nextMatch: a,
                                    targetMatch: i
                                };
                            }
                            a.default.extendAliases({
                                datetime: {
                                    mask: function(e) {
                                        return e.numericInput = !1, g.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = k[e.inputFormat] || e.inputFormat, 
                                        e.displayFormat = k[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = k[e.outputFormat] || e.outputFormat || e.inputFormat, 
                                        e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), 
                                        e.regex = S(e.inputFormat, void 0, e), e.min = w(e.min, e.inputFormat, e), e.max = w(e.max, e.inputFormat, e), 
                                        null;
                                    },
                                    placeholder: "",
                                    inputFormat: "isoDateTime",
                                    displayFormat: null,
                                    outputFormat: null,
                                    min: null,
                                    max: null,
                                    skipOptionalPartCharacter: "",
                                    i18n: {
                                        dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                                        monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                                        ordinalSuffix: [ "st", "nd", "rd", "th" ]
                                    },
                                    preValidation: function(e, t, i, a, n, r, o, l) {
                                        if (l) return !0;
                                        if (isNaN(i) && e[t] !== i) {
                                            var s = O(t, n);
                                            if (s.nextMatch && s.nextMatch[0] === i && s.targetMatch[0].length > 1) {
                                                var u = g[s.targetMatch[0]][0];
                                                if (new RegExp(u).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", 
                                                {
                                                    fuzzy: !0,
                                                    buffer: e,
                                                    refreshFromBuffer: {
                                                        start: t - 1,
                                                        end: t + 1
                                                    },
                                                    pos: t + 1
                                                };
                                            }
                                        }
                                        return !0;
                                    },
                                    postValidation: function(e, t, i, a, n, r, o, s) {
                                        var u, c;
                                        if (o) return !0;
                                        if (!1 === a && (((u = O(t + 1, n)).targetMatch && u.targetMatchIndex === t && u.targetMatch[0].length > 1 && void 0 !== g[u.targetMatch[0]] || (u = O(t + 2, n)).targetMatch && u.targetMatchIndex === t + 1 && u.targetMatch[0].length > 1 && void 0 !== g[u.targetMatch[0]]) && (c = g[u.targetMatch[0]][0]), 
                                        void 0 !== c && (void 0 !== r.validPositions[t + 1] && new RegExp(c).test(i + "0") ? (e[t] = i, 
                                        e[t + 1] = "0", a = {
                                            pos: t + 2,
                                            caret: t
                                        }) : new RegExp(c).test("0" + i) && (e[t] = "0", e[t + 1] = i, a = {
                                            pos: t + 2
                                        })), !1 === a)) return a;
                                        if (a.fuzzy && (e = a.buffer, t = a.pos), (u = O(t, n)).targetMatch && u.targetMatch[0] && void 0 !== g[u.targetMatch[0]]) {
                                            var f = g[u.targetMatch[0]];
                                            c = f[0];
                                            var d = e.slice(u.targetMatchIndex, u.targetMatchIndex + u.targetMatch[0].length);
                                            if (!1 === new RegExp(c).test(d.join("")) && 2 === u.targetMatch[0].length && r.validPositions[u.targetMatchIndex] && r.validPositions[u.targetMatchIndex + 1] && (r.validPositions[u.targetMatchIndex + 1].input = "0"), 
                                            "year" == f[2]) for (var p = l.getMaskTemplate.call(this, !1, 1, void 0, !0), h = t + 1; h < e.length; h++) e[h] = p[h], 
                                            delete r.validPositions[h];
                                        }
                                        var m = a, k = w(e.join(""), n.inputFormat, n);
                                        return m && k.date.getTime() == k.date.getTime() && (n.prefillYear && (m = function(e, t, i) {
                                            if (e.year !== e.rawyear) {
                                                var a = v.toString(), n = e.rawyear.replace(/[^0-9]/g, ""), r = a.slice(0, n.length), o = a.slice(n.length);
                                                if (2 === n.length && n === r) {
                                                    var l = new Date(v, e.month - 1, e.day);
                                                    e.day == l.getDate() && (!i.max || i.max.date.getTime() >= l.getTime()) && (e.date.setFullYear(v), 
                                                    e.year = a, t.insert = [ {
                                                        pos: t.pos + 1,
                                                        c: o[0]
                                                    }, {
                                                        pos: t.pos + 2,
                                                        c: o[1]
                                                    } ]);
                                                }
                                            }
                                            return t;
                                        }(k, m, n)), m = function(e, t, i, a, n) {
                                            if (!t) return t;
                                            if (t && i.min && i.min.date.getTime() == i.min.date.getTime()) {
                                                var r;
                                                for (e.reset(), P(i).lastIndex = 0; r = P(i).exec(i.inputFormat); ) {
                                                    var o;
                                                    if ((o = x(r)) && o[3]) {
                                                        for (var l = o[1], s = e[o[2]], u = i.min[o[2]], c = i.max ? i.max[o[2]] : u, f = [], d = !1, p = 0; p < u.length; p++) void 0 !== a.validPositions[p + r.index] || d ? (f[p] = s[p], 
                                                        d = d || s[p] > u[p]) : (f[p] = u[p], "year" === o[2] && s.length - 1 == p && u != c && (f = (parseInt(f.join("")) + 1).toString().split("")), 
                                                        "ampm" === o[2] && u != c && i.min.date.getTime() > e.date.getTime() && (f[p] = c[p]));
                                                        l.call(e._date, f.join(""));
                                                    }
                                                }
                                                t = i.min.date.getTime() <= e.date.getTime(), e.reInit();
                                            }
                                            return t && i.max && i.max.date.getTime() == i.max.date.getTime() && (t = i.max.date.getTime() >= e.date.getTime()), 
                                            t;
                                        }(k, m = E.call(this, k, m, n), n, r)), void 0 !== t && m && a.pos !== t ? {
                                            buffer: S(n.inputFormat, k, n).split(""),
                                            refreshFromBuffer: {
                                                start: t,
                                                end: a.pos
                                            },
                                            pos: a.caret || a.pos
                                        } : m;
                                    },
                                    onKeyDown: function(e, t, i, a) {
                                        e.ctrlKey && e.keyCode === n.default.RIGHT && (this.inputmask._valueSet(M(new Date, a)), 
                                        p(this).trigger("setvalue"));
                                    },
                                    onUnMask: function(e, t, i) {
                                        return t ? S(i.outputFormat, w(e, i.inputFormat, i), i, !0) : t;
                                    },
                                    casing: function(e, t, i, a) {
                                        return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                                    },
                                    onBeforeMask: function(e, t) {
                                        return "[object Date]" === Object.prototype.toString.call(e) && (e = M(e, t)), e;
                                    },
                                    insertMode: !1,
                                    shiftPositions: !1,
                                    keepStatic: !1,
                                    inputmode: "numeric",
                                    prefillYear: !0
                                }
                            });
                        },
                        3851: function(e, t, i) {
                            var a, n = (a = i(2394)) && a.__esModule ? a : {
                                default: a
                            }, r = i(8711), o = i(4713);
                            n.default.extendDefinitions({
                                A: {
                                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                                    casing: "upper"
                                },
                                "&": {
                                    validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                                    casing: "upper"
                                },
                                "#": {
                                    validator: "[0-9A-Fa-f]",
                                    casing: "upper"
                                }
                            });
                            var l = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
                            function s(e, t, i, a, n) {
                                return i - 1 > -1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = i - 2 > -1 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, 
                                l.test(e);
                            }
                            n.default.extendAliases({
                                cssunit: {
                                    regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                                },
                                url: {
                                    regex: "(https?|ftp)://.*",
                                    autoUnmask: !1,
                                    keepStatic: !1,
                                    tabThrough: !0
                                },
                                ip: {
                                    mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                                    definitions: {
                                        i: {
                                            validator: s
                                        },
                                        j: {
                                            validator: s
                                        },
                                        k: {
                                            validator: s
                                        },
                                        l: {
                                            validator: s
                                        }
                                    },
                                    onUnMask: function(e, t, i) {
                                        return e;
                                    },
                                    inputmode: "decimal",
                                    substitutes: {
                                        ",": "."
                                    }
                                },
                                email: {
                                    mask: function(e) {
                                        var t = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", i = t;
                                        if (e.separator) for (var a = 0; a < e.quantifier; a++) i += "[".concat(e.separator).concat(t, "]");
                                        return i;
                                    },
                                    greedy: !1,
                                    casing: "lower",
                                    separator: null,
                                    quantifier: 5,
                                    skipOptionalPartCharacter: "",
                                    onBeforePaste: function(e, t) {
                                        return (e = e.toLowerCase()).replace("mailto:", "");
                                    },
                                    definitions: {
                                        "*": {
                                            validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
                                        },
                                        "-": {
                                            validator: "[0-9A-Za-z-]"
                                        }
                                    },
                                    onUnMask: function(e, t, i) {
                                        return e;
                                    },
                                    inputmode: "email"
                                },
                                mac: {
                                    mask: "##:##:##:##:##:##"
                                },
                                vin: {
                                    mask: "V{13}9{4}",
                                    definitions: {
                                        V: {
                                            validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                            casing: "upper"
                                        }
                                    },
                                    clearIncomplete: !0,
                                    autoUnmask: !0
                                },
                                ssn: {
                                    mask: "999-99-9999",
                                    postValidation: function(e, t, i, a, n, l, s) {
                                        var u = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                                        return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(u.join(""));
                                    }
                                }
                            });
                        },
                        207: function(e, t, i) {
                            var a = l(i(2394)), n = l(i(5581)), r = l(i(7184)), o = i(8711);
                            function l(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var s = a.default.dependencyLib;
                            function u(e, t) {
                                for (var i = "", n = 0; n < e.length; n++) a.default.prototype.definitions[e.charAt(n)] || t.definitions[e.charAt(n)] || t.optionalmarker[0] === e.charAt(n) || t.optionalmarker[1] === e.charAt(n) || t.quantifiermarker[0] === e.charAt(n) || t.quantifiermarker[1] === e.charAt(n) || t.groupmarker[0] === e.charAt(n) || t.groupmarker[1] === e.charAt(n) || t.alternatormarker === e.charAt(n) ? i += "\\" + e.charAt(n) : i += e.charAt(n);
                                return i;
                            }
                            function c(e, t, i, a) {
                                if (e.length > 0 && t > 0 && (!i.digitsOptional || a)) {
                                    var n = e.indexOf(i.radixPoint), r = !1;
                                    i.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === n && (e.push(i.radixPoint), 
                                    n = e.length - 1);
                                    for (var o = 1; o <= t; o++) isFinite(e[n + o]) || (e[n + o] = "0");
                                }
                                return r && e.push(i.negationSymbol.back), e;
                            }
                            function f(e, t) {
                                var i = 0;
                                if ("+" === e) {
                                    for (i in t.validPositions) ;
                                    i = o.seekNext.call(this, parseInt(i));
                                }
                                for (var a in t.tests) if ((a = parseInt(a)) >= i) for (var n = 0, r = t.tests[a].length; n < r; n++) if ((void 0 === t.validPositions[a] || "-" === e) && t.tests[a][n].match.def === e) return a + (void 0 !== t.validPositions[a] && "-" !== e ? 1 : 0);
                                return i;
                            }
                            function d(e, t) {
                                var i = -1;
                                for (var a in t.validPositions) {
                                    var n = t.validPositions[a];
                                    if (n && n.match.def === e) {
                                        i = parseInt(a);
                                        break;
                                    }
                                }
                                return i;
                            }
                            function p(e, t, i, a, n) {
                                var r = t.buffer ? t.buffer.indexOf(n.radixPoint) : -1, o = (-1 !== r || a && n.jitMasking) && new RegExp(n.definitions[9].validator).test(e);
                                return n._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                                    insert: {
                                        pos: r === i ? r + 1 : r,
                                        c: n.radixPoint
                                    },
                                    pos: i
                                } : o;
                            }
                            a.default.extendAliases({
                                numeric: {
                                    mask: function(e) {
                                        e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                                        " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), 
                                        "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                                        var t = "0", i = e.radixPoint;
                                        !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                                        e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, i = "," === e.radixPoint ? "?" : "!", 
                                        "" !== e.radixPoint && void 0 === e.definitions[i] && (e.definitions[i] = {}, e.definitions[i].validator = "[" + e.radixPoint + "]", 
                                        e.definitions[i].placeholder = e.radixPoint, e.definitions[i].static = !0, e.definitions[i].generated = !0)) : (e.__financeInput = !1, 
                                        e.numericInput = !0);
                                        var a, n = "[+]";
                                        if (n += u(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, 
                                        e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, 
                                        e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), 
                                        n += e._mask(e)) : n += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                            var o = e.digits.toString().split(",");
                                            isFinite(o[0]) && o[1] && isFinite(o[1]) ? n += i + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (a = n + i + t + "{0," + e.digits + "}", 
                                            e.keepStatic = !0) : n += i + t + "{" + e.digits + "}");
                                        } else e.inputmode = "numeric";
                                        return n += u(e.suffix, e), n += "[-]", a && (n = [ a + u(e.suffix, e) + "[-]", n ]), 
                                        e.greedy = !1, function(e) {
                                            void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, 
                                            r.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), 
                                            e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), 
                                            null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, r.default)(e.groupSeparator), "g"), ""), 
                                            "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                                            isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                                        }(e), "" !== e.radixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), 
                                        n;
                                    },
                                    _mask: function(e) {
                                        return "(" + e.groupSeparator + "999){+|1}";
                                    },
                                    digits: "*",
                                    digitsOptional: !0,
                                    enforceDigitsOnBlur: !1,
                                    radixPoint: ".",
                                    positionCaretOnClick: "radixFocus",
                                    _radixDance: !0,
                                    groupSeparator: "",
                                    allowMinus: !0,
                                    negationSymbol: {
                                        front: "-",
                                        back: ""
                                    },
                                    prefix: "",
                                    suffix: "",
                                    min: null,
                                    max: null,
                                    SetMaxOnOverflow: !1,
                                    step: 1,
                                    inputType: "text",
                                    unmaskAsNumber: !1,
                                    roundingFN: Math.round,
                                    inputmode: "decimal",
                                    shortcuts: {
                                        k: "1000",
                                        m: "1000000"
                                    },
                                    placeholder: "0",
                                    greedy: !1,
                                    rightAlign: !0,
                                    insertMode: !0,
                                    autoUnmask: !1,
                                    skipOptionalPartCharacter: "",
                                    usePrototypeDefinitions: !1,
                                    stripLeadingZeroes: !0,
                                    definitions: {
                                        0: {
                                            validator: p
                                        },
                                        1: {
                                            validator: p,
                                            definitionSymbol: "9"
                                        },
                                        9: {
                                            validator: "[0-9０-９٠-٩۰-۹]",
                                            definitionSymbol: "*"
                                        },
                                        "+": {
                                            validator: function(e, t, i, a, n) {
                                                return n.allowMinus && ("-" === e || e === n.negationSymbol.front);
                                            }
                                        },
                                        "-": {
                                            validator: function(e, t, i, a, n) {
                                                return n.allowMinus && e === n.negationSymbol.back;
                                            }
                                        }
                                    },
                                    preValidation: function(e, t, i, a, n, r, o, l) {
                                        if (!1 !== n.__financeInput && i === n.radixPoint) return !1;
                                        var s = e.indexOf(n.radixPoint), u = t;
                                        if (t = function(e, t, i, a, n) {
                                            return n._radixDance && n.numericInput && t !== n.negationSymbol.back && e <= i && (i > 0 || t == n.radixPoint) && (void 0 === a.validPositions[e - 1] || a.validPositions[e - 1].input !== n.negationSymbol.back) && (e -= 1), 
                                            e;
                                        }(t, i, s, r, n), "-" === i || i === n.negationSymbol.front) {
                                            if (!0 !== n.allowMinus) return !1;
                                            var c = !1, p = d("+", r), h = d("-", r);
                                            return -1 !== p && (c = [ p, h ]), !1 !== c ? {
                                                remove: c,
                                                caret: u - n.negationSymbol.back.length
                                            } : {
                                                insert: [ {
                                                    pos: f.call(this, "+", r),
                                                    c: n.negationSymbol.front,
                                                    fromIsValid: !0
                                                }, {
                                                    pos: f.call(this, "-", r),
                                                    c: n.negationSymbol.back,
                                                    fromIsValid: void 0
                                                } ],
                                                caret: u + n.negationSymbol.back.length
                                            };
                                        }
                                        if (i === n.groupSeparator) return {
                                            caret: u
                                        };
                                        if (l) return !0;
                                        if (-1 !== s && !0 === n._radixDance && !1 === a && i === n.radixPoint && void 0 !== n.digits && (isNaN(n.digits) || parseInt(n.digits) > 0) && s !== t) return {
                                            caret: n._radixDance && t === s - 1 ? s + 1 : s
                                        };
                                        if (!1 === n.__financeInput) if (a) {
                                            if (n.digitsOptional) return {
                                                rewritePosition: o.end
                                            };
                                            if (!n.digitsOptional) {
                                                if (o.begin > s && o.end <= s) return i === n.radixPoint ? {
                                                    insert: {
                                                        pos: s + 1,
                                                        c: "0",
                                                        fromIsValid: !0
                                                    },
                                                    rewritePosition: s
                                                } : {
                                                    rewritePosition: s + 1
                                                };
                                                if (o.begin < s) return {
                                                    rewritePosition: o.begin - 1
                                                };
                                            }
                                        } else if (!n.showMaskOnHover && !n.showMaskOnFocus && !n.digitsOptional && n.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                                            rewritePosition: s
                                        };
                                        return {
                                            rewritePosition: t
                                        };
                                    },
                                    postValidation: function(e, t, i, a, n, r, o) {
                                        if (!1 === a) return a;
                                        if (o) return !0;
                                        if (null !== n.min || null !== n.max) {
                                            var l = n.onUnMask(e.slice().reverse().join(""), void 0, s.extend({}, n, {
                                                unmaskAsNumber: !0
                                            }));
                                            if (null !== n.min && l < n.min && (l.toString().length > n.min.toString().length || l < 0)) return !1;
                                            if (null !== n.max && l > n.max) return !!n.SetMaxOnOverflow && {
                                                refreshFromBuffer: !0,
                                                buffer: c(n.max.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                                            };
                                        }
                                        return a;
                                    },
                                    onUnMask: function(e, t, i) {
                                        if ("" === t && !0 === i.nullable) return t;
                                        var a = e.replace(i.prefix, "");
                                        return a = (a = a.replace(i.suffix, "")).replace(new RegExp((0, r.default)(i.groupSeparator), "g"), ""), 
                                        "" !== i.placeholder.charAt(0) && (a = a.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), 
                                        i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== a.indexOf(i.radixPoint) && (a = a.replace(r.default.call(this, i.radixPoint), ".")), 
                                        a = (a = a.replace(new RegExp("^" + (0, r.default)(i.negationSymbol.front)), "-")).replace(new RegExp((0, 
                                        r.default)(i.negationSymbol.back) + "$"), ""), Number(a)) : a;
                                    },
                                    isComplete: function(e, t) {
                                        var i = (t.numericInput ? e.slice().reverse() : e).join("");
                                        return i = (i = (i = (i = (i = i.replace(new RegExp("^" + (0, r.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, 
                                        r.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, 
                                        r.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (i = i.replace((0, 
                                        r.default)(t.radixPoint), ".")), isFinite(i);
                                    },
                                    onBeforeMask: function(e, t) {
                                        var i = t.radixPoint || ",";
                                        isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
                                        var a = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, n = e.split(i), o = n[0].replace(/[^\-0-9]/g, ""), l = n.length > 1 ? n[1].replace(/[^0-9]/g, "") : "", s = n.length > 1;
                                        e = o + ("" !== l ? i + l : l);
                                        var u = 0;
                                        if ("" !== i && (u = t.digitsOptional ? t.digits < l.length ? t.digits : l.length : t.digits, 
                                        "" !== l || !t.digitsOptional)) {
                                            var f = Math.pow(10, u || 1);
                                            e = e.replace((0, r.default)(i), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(u)), 
                                            e = e.toString().replace(".", i);
                                        }
                                        if (0 === t.digits && -1 !== e.indexOf(i) && (e = e.substring(0, e.indexOf(i))), 
                                        null !== t.min || null !== t.max) {
                                            var d = e.toString().replace(i, ".");
                                            null !== t.min && d < t.min ? e = t.min.toString().replace(".", i) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", i));
                                        }
                                        return a && "-" !== e.charAt(0) && (e = "-" + e), c(e.toString().split(""), u, t, s).join("");
                                    },
                                    onBeforeWrite: function(e, t, i, a) {
                                        function n(e, t) {
                                            if (!1 !== a.__financeInput || t) {
                                                var i = e.indexOf(a.radixPoint);
                                                -1 !== i && e.splice(i, 1);
                                            }
                                            if ("" !== a.groupSeparator) for (;-1 !== (i = e.indexOf(a.groupSeparator)); ) e.splice(i, 1);
                                            return e;
                                        }
                                        var o, l;
                                        if (a.stripLeadingZeroes && (l = function(e, t) {
                                            var i = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, r.default)(t.negationSymbol.front) + "?" : "") + (0, 
                                            r.default)(t.prefix) + ")(.*)(" + (0, r.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, 
                                            r.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), a = i ? i[2] : "", n = !1;
                                            return a && (a = a.split(t.radixPoint.charAt(0))[0], n = new RegExp("^[0" + t.groupSeparator + "]*").exec(a)), 
                                            !(!n || !(n[0].length > 1 || n[0].length > 0 && n[0].length < a.length)) && n;
                                        }(t, a))) for (var u = t.join("").lastIndexOf(l[0].split("").reverse().join("")) - (l[0] == l.input ? 0 : 1), f = l[0] == l.input ? 1 : 0, d = l[0].length - f; d > 0; d--) delete this.maskset.validPositions[u + d], 
                                        delete t[u + d];
                                        if (e) switch (e.type) {
                                          case "blur":
                                          case "checkval":
                                            if (null !== a.min) {
                                                var p = a.onUnMask(t.slice().reverse().join(""), void 0, s.extend({}, a, {
                                                    unmaskAsNumber: !0
                                                }));
                                                if (null !== a.min && p < a.min) return {
                                                    refreshFromBuffer: !0,
                                                    buffer: c(a.min.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                                };
                                            }
                                            if (t[t.length - 1] === a.negationSymbol.front) {
                                                var h = new RegExp("(^" + ("" != a.negationSymbol.front ? (0, r.default)(a.negationSymbol.front) + "?" : "") + (0, 
                                                r.default)(a.prefix) + ")(.*)(" + (0, r.default)(a.suffix) + ("" != a.negationSymbol.back ? (0, 
                                                r.default)(a.negationSymbol.back) + "?" : "") + "$)").exec(n(t.slice(), !0).reverse().join(""));
                                                0 == (h ? h[2] : "") && (o = {
                                                    refreshFromBuffer: !0,
                                                    buffer: [ 0 ]
                                                });
                                            } else if ("" !== a.radixPoint) t.indexOf(a.radixPoint) === a.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + a.suffix.length) : (t.splice(0, 1 + a.suffix.length), 
                                            o = {
                                                refreshFromBuffer: !0,
                                                buffer: n(t)
                                            }));
                                            if (a.enforceDigitsOnBlur) {
                                                var v = (o = o || {}) && o.buffer || t.slice().reverse();
                                                o.refreshFromBuffer = !0, o.buffer = c(v, a.digits, a, !0).reverse();
                                            }
                                        }
                                        return o;
                                    },
                                    onKeyDown: function(e, t, i, a) {
                                        var r, o, l = s(this), u = String.fromCharCode(e.keyCode).toLowerCase();
                                        if ((o = a.shortcuts && a.shortcuts[u]) && o.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(o)), 
                                        l.trigger("setvalue"), !1;
                                        if (e.ctrlKey) switch (e.keyCode) {
                                          case n.default.UP:
                                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(a.step)), 
                                            l.trigger("setvalue"), !1;

                                          case n.default.DOWN:
                                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(a.step)), 
                                            l.trigger("setvalue"), !1;
                                        }
                                        if (!e.shiftKey && (e.keyCode === n.default.DELETE || e.keyCode === n.default.BACKSPACE || e.keyCode === n.default.BACKSPACE_SAFARI) && i.begin !== t.length) {
                                            if (t[e.keyCode === n.default.DELETE ? i.begin - 1 : i.end] === a.negationSymbol.front) return r = t.slice().reverse(), 
                                            "" !== a.negationSymbol.front && r.shift(), "" !== a.negationSymbol.back && r.pop(), 
                                            l.trigger("setvalue", [ r.join(""), i.begin ]), !1;
                                            if (!0 === a._radixDance) {
                                                var f = t.indexOf(a.radixPoint);
                                                if (a.digitsOptional) {
                                                    if (0 === f) return (r = t.slice().reverse()).pop(), l.trigger("setvalue", [ r.join(""), i.begin >= r.length ? r.length : i.begin ]), 
                                                    !1;
                                                } else if (-1 !== f && (i.begin < f || i.end < f || e.keyCode === n.default.DELETE && i.begin === f)) return i.begin !== i.end || e.keyCode !== n.default.BACKSPACE && e.keyCode !== n.default.BACKSPACE_SAFARI || i.begin++, 
                                                (r = t.slice().reverse()).splice(r.length - i.begin, i.begin - i.end + 1), r = c(r, a.digits, a).join(""), 
                                                l.trigger("setvalue", [ r, i.begin >= r.length ? f + 1 : i.begin ]), !1;
                                            }
                                        }
                                    }
                                },
                                currency: {
                                    prefix: "",
                                    groupSeparator: ",",
                                    alias: "numeric",
                                    digits: 2,
                                    digitsOptional: !1
                                },
                                decimal: {
                                    alias: "numeric"
                                },
                                integer: {
                                    alias: "numeric",
                                    inputmode: "numeric",
                                    digits: 0
                                },
                                percentage: {
                                    alias: "numeric",
                                    min: 0,
                                    max: 100,
                                    suffix: " %",
                                    digits: 0,
                                    allowMinus: !1
                                },
                                indianns: {
                                    alias: "numeric",
                                    _mask: function(e) {
                                        return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                                    },
                                    groupSeparator: ",",
                                    radixPoint: ".",
                                    placeholder: "0",
                                    digits: 2,
                                    digitsOptional: !1
                                }
                            });
                        },
                        9380: function(e, t, i) {
                            var a;
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var n = ((a = i(8741)) && a.__esModule ? a : {
                                default: a
                            }).default ? window : {};
                            t.default = n;
                        },
                        7760: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.HandleNativePlaceholder = function(e, t) {
                                var i = e ? e.inputmask : this;
                                if (s.ie) {
                                    if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                                        var a = o.getBuffer.call(i).slice(), n = e.inputmask._valueGet();
                                        if (n !== t) {
                                            var r = o.getLastValidPosition.call(i);
                                            -1 === r && n === o.getBufferTemplate.call(i).join("") ? a = [] : -1 !== r && f.call(i, a), 
                                            p(e, a);
                                        }
                                    }
                                } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                            }, t.applyInputValue = c, t.checkVal = d, t.clearOptionalTail = f, t.unmaskedvalue = function(e) {
                                var t = e ? e.inputmask : this, i = t.opts, a = t.maskset;
                                if (e) {
                                    if (void 0 === e.inputmask) return e.value;
                                    e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                                }
                                var n = [], r = a.validPositions;
                                for (var l in r) r[l] && r[l].match && (1 != r[l].match.static || Array.isArray(a.metadata) && !0 !== r[l].generatedInput) && n.push(r[l].input);
                                var s = 0 === n.length ? "" : (t.isRTL ? n.reverse() : n).join("");
                                if ("function" == typeof i.onUnMask) {
                                    var u = (t.isRTL ? o.getBuffer.call(t).slice().reverse() : o.getBuffer.call(t)).join("");
                                    s = i.onUnMask.call(t, u, s, i);
                                }
                                return s;
                            }, t.writeBuffer = p;
                            var a, n = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            }, r = i(4713), o = i(8711), l = i(7215), s = i(9845), u = i(6030);
                            function c(e, t) {
                                var i = e ? e.inputmask : this, a = i.opts;
                                e.inputmask.refreshValue = !1, "function" == typeof a.onBeforeMask && (t = a.onBeforeMask.call(i, t, a) || t), 
                                d(e, !0, !1, t = t.toString().split("")), i.undoValue = i._valueGet(!0), (a.clearMaskOnLostFocus || a.clearIncomplete) && e.inputmask._valueGet() === o.getBufferTemplate.call(i).join("") && -1 === o.getLastValidPosition.call(i) && e.inputmask._valueSet("");
                            }
                            function f(e) {
                                e.length = 0;
                                for (var t, i = r.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = i.shift()); ) e.push(t);
                                return e;
                            }
                            function d(e, t, i, a, n) {
                                var s = e ? e.inputmask : this, c = s.maskset, f = s.opts, d = s.dependencyLib, h = a.slice(), v = "", m = -1, g = void 0, k = f.skipOptionalPartCharacter;
                                f.skipOptionalPartCharacter = "", o.resetMaskSet.call(s), c.tests = {}, m = f.radixPoint ? o.determineNewCaretPosition.call(s, {
                                    begin: 0,
                                    end: 0
                                }, !1, !1 === f.__financeInput ? "radixFocus" : void 0).begin : 0, c.p = m, s.caretPos = {
                                    begin: m
                                };
                                var y = [], b = s.caretPos;
                                if (h.forEach((function(e, t) {
                                    if (void 0 !== e) {
                                        var a = new d.Event("_checkval");
                                        a.keyCode = e.toString().charCodeAt(0), v += e;
                                        var n = o.getLastValidPosition.call(s, void 0, !0);
                                        !function(e, t) {
                                            for (var i = r.getMaskTemplate.call(s, !0, 0).slice(e, o.seekNext.call(s, e, !1, !1)).join("").replace(/'/g, ""), a = i.indexOf(t); a > 0 && " " === i[a - 1]; ) a--;
                                            var n = 0 === a && !o.isMask.call(s, e) && (r.getTest.call(s, e).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(s, e).match.static && r.getTest.call(s, e).match.nativeDef === "'" + t.charAt(0) || " " === r.getTest.call(s, e).match.nativeDef && (r.getTest.call(s, e + 1).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(s, e + 1).match.static && r.getTest.call(s, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                            if (!n && a > 0 && !o.isMask.call(s, e, !1, !0)) {
                                                var l = o.seekNext.call(s, e);
                                                s.caretPos.begin < l && (s.caretPos = {
                                                    begin: l
                                                });
                                            }
                                            return n;
                                        }(m, v) ? (g = u.EventHandlers.keypressEvent.call(s, a, !0, !1, i, s.caretPos.begin)) && (m = s.caretPos.begin + 1, 
                                        v = "") : g = u.EventHandlers.keypressEvent.call(s, a, !0, !1, i, n + 1), g ? (void 0 !== g.pos && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static && void 0 === c.validPositions[g.pos].alternation && (y.push(g.pos), 
                                        s.isRTL || (g.forwardPosition = g.pos + 1)), p.call(s, void 0, o.getBuffer.call(s), g.forwardPosition, a, !1), 
                                        s.caretPos = {
                                            begin: g.forwardPosition,
                                            end: g.forwardPosition
                                        }, b = s.caretPos) : void 0 === c.validPositions[t] && h[t] === r.getPlaceholder.call(s, t) && o.isMask.call(s, t, !0) ? s.caretPos.begin++ : s.caretPos = b;
                                    }
                                })), y.length > 0) {
                                    var x, P, E = o.seekNext.call(s, -1, void 0, !1);
                                    if (!l.isComplete.call(s, o.getBuffer.call(s)) && y.length <= E || l.isComplete.call(s, o.getBuffer.call(s)) && y.length > 0 && y.length !== E && 0 === y[0]) for (var S = E; void 0 !== (x = y.shift()); ) {
                                        var _ = new d.Event("_checkval");
                                        if ((P = c.validPositions[x]).generatedInput = !0, _.keyCode = P.input.charCodeAt(0), 
                                        (g = u.EventHandlers.keypressEvent.call(s, _, !0, !1, i, S)) && void 0 !== g.pos && g.pos !== x && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static) y.push(g.pos); else if (!g) break;
                                        S++;
                                    }
                                }
                                t && p.call(s, e, o.getBuffer.call(s), g ? g.forwardPosition : s.caretPos.begin, n || new d.Event("checkval"), n && ("input" === n.type && s.undoValue !== o.getBuffer.call(s).join("") || "paste" === n.type)), 
                                f.skipOptionalPartCharacter = k;
                            }
                            function p(e, t, i, a, r) {
                                var s = e ? e.inputmask : this, u = s.opts, c = s.dependencyLib;
                                if (a && "function" == typeof u.onBeforeWrite) {
                                    var f = u.onBeforeWrite.call(s, a, t, i, u);
                                    if (f) {
                                        if (f.refreshFromBuffer) {
                                            var d = f.refreshFromBuffer;
                                            l.refreshFromBuffer.call(s, !0 === d ? d : d.start, d.end, f.buffer || t), t = o.getBuffer.call(s, !0);
                                        }
                                        void 0 !== i && (i = void 0 !== f.caret ? f.caret : i);
                                    }
                                }
                                if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== a && "blur" === a.type || o.caret.call(s, e, i, void 0, void 0, void 0 !== a && "keydown" === a.type && (a.keyCode === n.default.DELETE || a.keyCode === n.default.BACKSPACE)), 
                                !0 === r)) {
                                    var p = c(e), h = e.inputmask._valueGet();
                                    e.inputmask.skipInputEvent = !0, p.trigger("input"), setTimeout((function() {
                                        h === o.getBufferTemplate.call(s).join("") ? p.trigger("cleared") : !0 === l.isComplete.call(s, t) && p.trigger("complete");
                                    }), 0);
                                }
                            }
                        },
                        2394: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0, i(7149), i(3194);
                            var a = i(157), n = m(i(4963)), r = m(i(9380)), o = i(2391), l = i(4713), s = i(8711), u = i(7215), c = i(7760), f = i(9716), d = m(i(7392)), p = m(i(3976)), h = m(i(8741));
                            function v(e) {
                                return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, v(e);
                            }
                            function m(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var g = r.default.document, k = "_inputmask_opts";
                            function y(e, t, i) {
                                if (h.default) {
                                    if (!(this instanceof y)) return new y(e, t, i);
                                    this.dependencyLib = n.default, this.el = void 0, this.events = {}, this.maskset = void 0, 
                                    !0 !== i && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, 
                                    e && (t.alias = e)), this.opts = n.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, 
                                    this.userOptions = t || {}, b(this.opts.alias, t, this.opts)), this.refreshValue = !1, 
                                    this.undoValue = void 0, this.$el = void 0, this.skipKeyPressEvent = !1, this.skipInputEvent = !1, 
                                    this.validationEvent = !1, this.ignorable = !1, this.maxLength, this.mouseEnter = !1, 
                                    this.originalPlaceholder = void 0, this.isComposing = !1;
                                }
                            }
                            function b(e, t, i) {
                                var a = y.prototype.aliases[e];
                                return a ? (a.alias && b(a.alias, void 0, i), n.default.extend(!0, i, a), n.default.extend(!0, i, t), 
                                !0) : (null === i.mask && (i.mask = e), !1);
                            }
                            y.prototype = {
                                dataAttribute: "data-inputmask",
                                defaults: p.default,
                                definitions: d.default,
                                aliases: {},
                                masksCache: {},
                                get isRTL() {
                                    return this.opts.isRTL || this.opts.numericInput;
                                },
                                mask: function(e) {
                                    var t = this;
                                    return "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), 
                                    (e = e.nodeName ? [ e ] : Array.isArray(e) ? e : Array.from(e)).forEach((function(e, i) {
                                        var l = n.default.extend(!0, {}, t.opts);
                                        if (function(e, t, i, a) {
                                            function o(t, n) {
                                                var o = "" === a ? t : a + "-" + t;
                                                null !== (n = void 0 !== n ? n : e.getAttribute(o)) && ("string" == typeof n && (0 === t.indexOf("on") ? n = r.default[n] : "false" === n ? n = !1 : "true" === n && (n = !0)), 
                                                i[t] = n);
                                            }
                                            if (!0 === t.importDataAttributes) {
                                                var l, s, u, c, f = e.getAttribute(a);
                                                if (f && "" !== f && (f = f.replace(/'/g, '"'), s = JSON.parse("{" + f + "}")), 
                                                s) for (c in u = void 0, s) if ("alias" === c.toLowerCase()) {
                                                    u = s[c];
                                                    break;
                                                }
                                                for (l in o("alias", u), i.alias && b(i.alias, i, t), t) {
                                                    if (s) for (c in u = void 0, s) if (c.toLowerCase() === l.toLowerCase()) {
                                                        u = s[c];
                                                        break;
                                                    }
                                                    o(l, u);
                                                }
                                            }
                                            n.default.extend(!0, t, i), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                                            ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), 
                                            t.isRTL = !0);
                                            return Object.keys(i).length;
                                        }(e, l, n.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                            var s = (0, o.generateMaskSet)(l, t.noMasksCache);
                                            void 0 !== s && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), 
                                            e.inputmask = new y(void 0, void 0, !0), e.inputmask.opts = l, e.inputmask.noMasksCache = t.noMasksCache, 
                                            e.inputmask.userOptions = n.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, 
                                            e.inputmask.$el = (0, n.default)(e), e.inputmask.maskset = s, n.default.data(e, k, t.userOptions), 
                                            a.mask.call(e.inputmask));
                                        }
                                    })), e && e[0] && e[0].inputmask || this;
                                },
                                option: function(e, t) {
                                    return "string" == typeof e ? this.opts[e] : "object" === v(e) ? (n.default.extend(this.userOptions, e), 
                                    this.el && !0 !== t && this.mask(this.el), this) : void 0;
                                },
                                unmaskedvalue: function(e) {
                                    if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    void 0 === this.el || void 0 !== e) {
                                        var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                        c.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, s.getBuffer.call(this), 0, this.opts);
                                    }
                                    return c.unmaskedvalue.call(this, this.el);
                                },
                                remove: function() {
                                    if (this.el) {
                                        n.default.data(this.el, k, null);
                                        var e = this.opts.autoUnmask ? (0, c.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                                        e !== s.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), 
                                        f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                            get: this.__valueGet,
                                            set: this.__valueSet,
                                            configurable: !0
                                        }) : g.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), 
                                        this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                                    }
                                    return this.el;
                                },
                                getemptymask: function() {
                                    return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    s.getBufferTemplate.call(this).join("");
                                },
                                hasMaskedValue: function() {
                                    return !this.opts.autoUnmask;
                                },
                                isComplete: function() {
                                    return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    u.isComplete.call(this, s.getBuffer.call(this));
                                },
                                getmetadata: function() {
                                    if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    Array.isArray(this.maskset.metadata)) {
                                        var e = l.getMaskTemplate.call(this, !0, 0, !1).join("");
                                        return this.maskset.metadata.forEach((function(t) {
                                            return t.mask !== e || (e = t, !1);
                                        })), e;
                                    }
                                    return this.maskset.metadata;
                                },
                                isValid: function(e) {
                                    if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    e) {
                                        var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                        c.checkVal.call(this, void 0, !0, !1, t);
                                    } else e = this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join("");
                                    for (var i = s.getBuffer.call(this), a = s.determineLastRequiredPosition.call(this), n = i.length - 1; n > a && !s.isMask.call(this, n); n--) ;
                                    return i.splice(a, n + 1 - a), u.isComplete.call(this, i) && e === (this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join(""));
                                },
                                format: function(e, t) {
                                    this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
                                    var i = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                    c.checkVal.call(this, void 0, !0, !1, i);
                                    var a = this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join("");
                                    return t ? {
                                        value: a,
                                        metadata: this.getmetadata()
                                    } : a;
                                },
                                setValue: function(e) {
                                    this.el && (0, n.default)(this.el).trigger("setvalue", [ e ]);
                                },
                                analyseMask: o.analyseMask
                            }, y.extendDefaults = function(e) {
                                n.default.extend(!0, y.prototype.defaults, e);
                            }, y.extendDefinitions = function(e) {
                                n.default.extend(!0, y.prototype.definitions, e);
                            }, y.extendAliases = function(e) {
                                n.default.extend(!0, y.prototype.aliases, e);
                            }, y.format = function(e, t, i) {
                                return y(t).format(e, i);
                            }, y.unmask = function(e, t) {
                                return y(t).unmaskedvalue(e);
                            }, y.isValid = function(e, t) {
                                return y(t).isValid(e);
                            }, y.remove = function(e) {
                                "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                                    e.inputmask && e.inputmask.remove();
                                }));
                            }, y.setValue = function(e, t) {
                                "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                                    e.inputmask ? e.inputmask.setValue(t) : (0, n.default)(e).trigger("setvalue", [ t ]);
                                }));
                            }, y.dependencyLib = n.default, r.default.Inputmask = y;
                            var x = y;
                            t.default = x;
                        },
                        5296: function(e, t, i) {
                            function a(e) {
                                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, a(e);
                            }
                            var n = h(i(9380)), r = h(i(2394)), o = h(i(8741));
                            function l(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var a = t[i];
                                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                                    Object.defineProperty(e, a.key, a);
                                }
                            }
                            function s(e, t) {
                                if (t && ("object" === a(t) || "function" == typeof t)) return t;
                                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                return function(e) {
                                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e;
                                }(e);
                            }
                            function u(e) {
                                var t = "function" == typeof Map ? new Map : void 0;
                                return u = function(e) {
                                    if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
                                    var i;
                                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                                    if (void 0 !== t) {
                                        if (t.has(e)) return t.get(e);
                                        t.set(e, a);
                                    }
                                    function a() {
                                        return c(e, arguments, p(this).constructor);
                                    }
                                    return a.prototype = Object.create(e.prototype, {
                                        constructor: {
                                            value: a,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), d(a, e);
                                }, u(e);
                            }
                            function c(e, t, i) {
                                return c = f() ? Reflect.construct : function(e, t, i) {
                                    var a = [ null ];
                                    a.push.apply(a, t);
                                    var n = new (Function.bind.apply(e, a));
                                    return i && d(n, i.prototype), n;
                                }, c.apply(null, arguments);
                            }
                            function f() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                    !0;
                                } catch (e) {
                                    return !1;
                                }
                            }
                            function d(e, t) {
                                return d = Object.setPrototypeOf || function(e, t) {
                                    return e.__proto__ = t, e;
                                }, d(e, t);
                            }
                            function p(e) {
                                return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                                    return e.__proto__ || Object.getPrototypeOf(e);
                                }, p(e);
                            }
                            function h(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var v = n.default.document;
                            if (o.default && v && v.head && v.head.attachShadow && n.default.customElements && void 0 === n.default.customElements.get("input-mask")) {
                                var m = function(e) {
                                    !function(e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                        Object.defineProperty(e, "prototype", {
                                            value: Object.create(t && t.prototype, {
                                                constructor: {
                                                    value: e,
                                                    writable: !0,
                                                    configurable: !0
                                                }
                                            }),
                                            writable: !1
                                        }), t && d(e, t);
                                    }(c, e);
                                    var t, i, a, n, o, u = (t = c, i = f(), function() {
                                        var e, a = p(t);
                                        if (i) {
                                            var n = p(this).constructor;
                                            e = Reflect.construct(a, arguments, n);
                                        } else e = a.apply(this, arguments);
                                        return s(this, e);
                                    });
                                    function c() {
                                        var e;
                                        !function(e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        }(this, c);
                                        var t = (e = u.call(this)).getAttributeNames(), i = e.attachShadow({
                                            mode: "closed"
                                        }), a = v.createElement("input");
                                        for (var n in a.type = "text", i.appendChild(a), t) Object.prototype.hasOwnProperty.call(t, n) && a.setAttribute(t[n], e.getAttribute(t[n]));
                                        var o = new r.default;
                                        return o.dataAttribute = "", o.mask(a), a.inputmask.shadowRoot = i, e;
                                    }
                                    return a = c, n && l(a.prototype, n), o && l(a, o), Object.defineProperty(a, "prototype", {
                                        writable: !1
                                    }), a;
                                }(u(HTMLElement));
                                n.default.customElements.define("input-mask", m);
                            }
                        },
                        2391: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.analyseMask = function(e, t, i) {
                                var a, o, l, s, u, c, f = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, p = !1, h = new n.default, v = [], m = [], g = !1;
                                function k(e, a, n) {
                                    n = void 0 !== n ? n : e.matches.length;
                                    var o = e.matches[n - 1];
                                    if (t) 0 === a.indexOf("[") || p && /\\d|\\s|\\w/i.test(a) || "." === a ? e.matches.splice(n++, 0, {
                                        fn: new RegExp(a, i.casing ? "i" : ""),
                                        static: !1,
                                        optionality: !1,
                                        newBlockMarker: void 0 === o ? "master" : o.def !== a,
                                        casing: null,
                                        def: a,
                                        placeholder: void 0,
                                        nativeDef: a
                                    }) : (p && (a = a[a.length - 1]), a.split("").forEach((function(t, a) {
                                        o = e.matches[n - 1], e.matches.splice(n++, 0, {
                                            fn: /[a-z]/i.test(i.staticDefinitionSymbol || t) ? new RegExp("[" + (i.staticDefinitionSymbol || t) + "]", i.casing ? "i" : "") : null,
                                            static: !0,
                                            optionality: !1,
                                            newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                            casing: null,
                                            def: i.staticDefinitionSymbol || t,
                                            placeholder: void 0 !== i.staticDefinitionSymbol ? t : void 0,
                                            nativeDef: (p ? "'" : "") + t
                                        });
                                    }))), p = !1; else {
                                        var l = i.definitions && i.definitions[a] || i.usePrototypeDefinitions && r.default.prototype.definitions[a];
                                        l && !p ? e.matches.splice(n++, 0, {
                                            fn: l.validator ? "string" == typeof l.validator ? new RegExp(l.validator, i.casing ? "i" : "") : new function() {
                                                this.test = l.validator;
                                            } : new RegExp("."),
                                            static: l.static || !1,
                                            optionality: l.optional || !1,
                                            newBlockMarker: void 0 === o || l.optional ? "master" : o.def !== (l.definitionSymbol || a),
                                            casing: l.casing,
                                            def: l.definitionSymbol || a,
                                            placeholder: l.placeholder,
                                            nativeDef: a,
                                            generated: l.generated
                                        }) : (e.matches.splice(n++, 0, {
                                            fn: /[a-z]/i.test(i.staticDefinitionSymbol || a) ? new RegExp("[" + (i.staticDefinitionSymbol || a) + "]", i.casing ? "i" : "") : null,
                                            static: !0,
                                            optionality: !1,
                                            newBlockMarker: void 0 === o ? "master" : o.def !== a && !0 !== o.static,
                                            casing: null,
                                            def: i.staticDefinitionSymbol || a,
                                            placeholder: void 0 !== i.staticDefinitionSymbol ? a : void 0,
                                            nativeDef: (p ? "'" : "") + a
                                        }), p = !1);
                                    }
                                }
                                function y() {
                                    if (v.length > 0) {
                                        if (k(s = v[v.length - 1], o), s.isAlternator) {
                                            u = v.pop();
                                            for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup && (u.matches[e].isGroup = !1);
                                            v.length > 0 ? (s = v[v.length - 1]).matches.push(u) : h.matches.push(u);
                                        }
                                    } else k(h, o);
                                }
                                function b(e) {
                                    var t = new n.default(!0);
                                    return t.openGroup = !1, t.matches = e, t;
                                }
                                function x() {
                                    if ((l = v.pop()).openGroup = !1, void 0 !== l) if (v.length > 0) {
                                        if ((s = v[v.length - 1]).matches.push(l), s.isAlternator) {
                                            for (var e = (u = v.pop()).matches[0].matches ? u.matches[0].matches.length : 1, t = 0; t < u.matches.length; t++) u.matches[t].isGroup = !1, 
                                            u.matches[t].alternatorGroup = !1, null === i.keepStatic && e < (u.matches[t].matches ? u.matches[t].matches.length : 1) && (i.keepStatic = !0), 
                                            e = u.matches[t].matches ? u.matches[t].matches.length : 1;
                                            v.length > 0 ? (s = v[v.length - 1]).matches.push(u) : h.matches.push(u);
                                        }
                                    } else h.matches.push(l); else y();
                                }
                                function P(e) {
                                    var t = e.pop();
                                    return t.isQuantifier && (t = b([ e.pop(), t ])), t;
                                }
                                t && (i.optionalmarker[0] = void 0, i.optionalmarker[1] = void 0);
                                for (;a = t ? d.exec(e) : f.exec(e); ) {
                                    if (o = a[0], t) {
                                        switch (o.charAt(0)) {
                                          case "?":
                                            o = "{0,1}";
                                            break;

                                          case "+":
                                          case "*":
                                            o = "{" + o + "}";
                                            break;

                                          case "|":
                                            if (0 === v.length) {
                                                var E = b(h.matches);
                                                E.openGroup = !0, v.push(E), h.matches = [], g = !0;
                                            }
                                        }
                                        if ("\\d" === o) o = "[0-9]";
                                    }
                                    if (p) y(); else switch (o.charAt(0)) {
                                      case "$":
                                      case "^":
                                        t || y();
                                        break;

                                      case i.escapeChar:
                                        p = !0, t && y();
                                        break;

                                      case i.optionalmarker[1]:
                                      case i.groupmarker[1]:
                                        x();
                                        break;

                                      case i.optionalmarker[0]:
                                        v.push(new n.default(!1, !0));
                                        break;

                                      case i.groupmarker[0]:
                                        v.push(new n.default(!0));
                                        break;

                                      case i.quantifiermarker[0]:
                                        var S = new n.default(!1, !1, !0), _ = (o = o.replace(/[{}?]/g, "")).split("|"), w = _[0].split(","), M = isNaN(w[0]) ? w[0] : parseInt(w[0]), O = 1 === w.length ? M : isNaN(w[1]) ? w[1] : parseInt(w[1]), T = isNaN(_[1]) ? _[1] : parseInt(_[1]);
                                        "*" !== M && "+" !== M || (M = "*" === O ? 0 : 1), S.quantifier = {
                                            min: M,
                                            max: O,
                                            jit: T
                                        };
                                        var C = v.length > 0 ? v[v.length - 1].matches : h.matches;
                                        if ((a = C.pop()).isAlternator) {
                                            C.push(a), C = a.matches;
                                            var A = new n.default(!0), D = C.pop();
                                            C.push(A), C = A.matches, a = D;
                                        }
                                        a.isGroup || (a = b([ a ])), C.push(a), C.push(S);
                                        break;

                                      case i.alternatormarker:
                                        if (v.length > 0) {
                                            var j = (s = v[v.length - 1]).matches[s.matches.length - 1];
                                            c = s.openGroup && (void 0 === j.matches || !1 === j.isGroup && !1 === j.isAlternator) ? v.pop() : P(s.matches);
                                        } else c = P(h.matches);
                                        if (c.isAlternator) v.push(c); else if (c.alternatorGroup ? (u = v.pop(), c.alternatorGroup = !1) : u = new n.default(!1, !1, !1, !0), 
                                        u.matches.push(c), v.push(u), c.openGroup) {
                                            c.openGroup = !1;
                                            var B = new n.default(!0);
                                            B.alternatorGroup = !0, v.push(B);
                                        }
                                        break;

                                      default:
                                        y();
                                    }
                                }
                                g && x();
                                for (;v.length > 0; ) l = v.pop(), h.matches.push(l);
                                h.matches.length > 0 && (!function e(a) {
                                    a && a.matches && a.matches.forEach((function(n, r) {
                                        var o = a.matches[r + 1];
                                        (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && n && n.isGroup && (n.isGroup = !1, 
                                        t || (k(n, i.groupmarker[0], 0), !0 !== n.openGroup && k(n, i.groupmarker[1]))), 
                                        e(n);
                                    }));
                                }(h), m.push(h));
                                (i.numericInput || i.isRTL) && function e(t) {
                                    for (var a in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, a)) {
                                        var n = parseInt(a);
                                        if (t.matches[a].isQuantifier && t.matches[n + 1] && t.matches[n + 1].isGroup) {
                                            var r = t.matches[a];
                                            t.matches.splice(a, 1), t.matches.splice(n + 1, 0, r);
                                        }
                                        void 0 !== t.matches[a].matches ? t.matches[a] = e(t.matches[a]) : t.matches[a] = ((o = t.matches[a]) === i.optionalmarker[0] ? o = i.optionalmarker[1] : o === i.optionalmarker[1] ? o = i.optionalmarker[0] : o === i.groupmarker[0] ? o = i.groupmarker[1] : o === i.groupmarker[1] && (o = i.groupmarker[0]), 
                                        o);
                                    }
                                    var o;
                                    return t;
                                }(m[0]);
                                return m;
                            }, t.generateMaskSet = function(e, t) {
                                var i;
                                function n(e, i, n) {
                                    var o, l, s = !1;
                                    if (null !== e && "" !== e || ((s = null !== n.regex) ? e = (e = n.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (s = !0, 
                                    e = ".*")), 1 === e.length && !1 === n.greedy && 0 !== n.repeat && (n.placeholder = ""), 
                                    n.repeat > 0 || "*" === n.repeat || "+" === n.repeat) {
                                        var u = "*" === n.repeat ? 0 : "+" === n.repeat ? 1 : n.repeat;
                                        e = n.groupmarker[0] + e + n.groupmarker[1] + n.quantifiermarker[0] + u + "," + n.repeat + n.quantifiermarker[1];
                                    }
                                    return l = s ? "regex_" + n.regex : n.numericInput ? e.split("").reverse().join("") : e, 
                                    null !== n.keepStatic && (l = "ks_" + n.keepStatic + l), void 0 === r.default.prototype.masksCache[l] || !0 === t ? (o = {
                                        mask: e,
                                        maskToken: r.default.prototype.analyseMask(e, s, n),
                                        validPositions: {},
                                        _buffer: void 0,
                                        buffer: void 0,
                                        tests: {},
                                        excludes: {},
                                        metadata: i,
                                        maskLength: void 0,
                                        jitOffset: {}
                                    }, !0 !== t && (r.default.prototype.masksCache[l] = o, o = a.default.extend(!0, {}, r.default.prototype.masksCache[l]))) : o = a.default.extend(!0, {}, r.default.prototype.masksCache[l]), 
                                    o;
                                }
                                "function" == typeof e.mask && (e.mask = e.mask(e));
                                if (Array.isArray(e.mask)) {
                                    if (e.mask.length > 1) {
                                        null === e.keepStatic && (e.keepStatic = !0);
                                        var o = e.groupmarker[0];
                                        return (e.isRTL ? e.mask.reverse() : e.mask).forEach((function(t) {
                                            o.length > 1 && (o += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? o += t.mask : o += t;
                                        })), n(o += e.groupmarker[1], e.mask, e);
                                    }
                                    e.mask = e.mask.pop();
                                }
                                i = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? n(e.mask.mask, e.mask, e) : n(e.mask, e.mask, e);
                                null === e.keepStatic && (e.keepStatic = !1);
                                return i;
                            };
                            var a = o(i(4963)), n = o(i(9695)), r = o(i(2394));
                            function o(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                        },
                        157: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.mask = function() {
                                var e = this, t = this.opts, i = this.el, a = this.dependencyLib;
                                l.EventRuler.off(i);
                                var f = function(t, i) {
                                    "textarea" !== t.tagName.toLowerCase() && i.ignorables.push(n.default.ENTER);
                                    var s = t.getAttribute("type"), u = "input" === t.tagName.toLowerCase() && i.supportsInputType.includes(s) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                                    if (!u) if ("input" === t.tagName.toLowerCase()) {
                                        var c = document.createElement("input");
                                        c.setAttribute("type", s), u = "text" === c.type, c = null;
                                    } else u = "partial";
                                    return !1 !== u ? function(t) {
                                        var n, s;
                                        function u() {
                                            return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== r.getLastValidPosition.call(e) || !0 !== i.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i.clearMaskOnLostFocus ? (e.isRTL ? o.clearOptionalTail.call(e, r.getBuffer.call(e).slice()).reverse() : o.clearOptionalTail.call(e, r.getBuffer.call(e).slice())).join("") : n.call(this) : "" : n.call(this);
                                        }
                                        function c(e) {
                                            s.call(this, e), this.inputmask && (0, o.applyInputValue)(this, e);
                                        }
                                        if (!t.inputmask.__valueGet) {
                                            if (!0 !== i.noValuePatching) {
                                                if (Object.getOwnPropertyDescriptor) {
                                                    var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                                    f && f.get && f.set ? (n = f.get, s = f.set, Object.defineProperty(t, "value", {
                                                        get: u,
                                                        set: c,
                                                        configurable: !0
                                                    })) : "input" !== t.tagName.toLowerCase() && (n = function() {
                                                        return this.textContent;
                                                    }, s = function(e) {
                                                        this.textContent = e;
                                                    }, Object.defineProperty(t, "value", {
                                                        get: u,
                                                        set: c,
                                                        configurable: !0
                                                    }));
                                                } else document.__lookupGetter__ && t.__lookupGetter__("value") && (n = t.__lookupGetter__("value"), 
                                                s = t.__lookupSetter__("value"), t.__defineGetter__("value", u), t.__defineSetter__("value", c));
                                                t.inputmask.__valueGet = n, t.inputmask.__valueSet = s;
                                            }
                                            t.inputmask._valueGet = function(t) {
                                                return e.isRTL && !0 !== t ? n.call(this.el).split("").reverse().join("") : n.call(this.el);
                                            }, t.inputmask._valueSet = function(t, i) {
                                                s.call(this.el, null == t ? "" : !0 !== i && e.isRTL ? t.split("").reverse().join("") : t);
                                            }, void 0 === n && (n = function() {
                                                return this.value;
                                            }, s = function(e) {
                                                this.value = e;
                                            }, function(t) {
                                                if (a.valHooks && (void 0 === a.valHooks[t] || !0 !== a.valHooks[t].inputmaskpatch)) {
                                                    var n = a.valHooks[t] && a.valHooks[t].get ? a.valHooks[t].get : function(e) {
                                                        return e.value;
                                                    }, l = a.valHooks[t] && a.valHooks[t].set ? a.valHooks[t].set : function(e, t) {
                                                        return e.value = t, e;
                                                    };
                                                    a.valHooks[t] = {
                                                        get: function(t) {
                                                            if (t.inputmask) {
                                                                if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                                var a = n(t);
                                                                return -1 !== r.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== i.nullable ? a : "";
                                                            }
                                                            return n(t);
                                                        },
                                                        set: function(e, t) {
                                                            var i = l(e, t);
                                                            return e.inputmask && (0, o.applyInputValue)(e, t), i;
                                                        },
                                                        inputmaskpatch: !0
                                                    };
                                                }
                                            }(t.type), function(t) {
                                                l.EventRuler.on(t, "mouseenter", (function() {
                                                    var t = this.inputmask._valueGet(!0);
                                                    t !== (e.isRTL ? r.getBuffer.call(e).reverse() : r.getBuffer.call(e)).join("") && (0, 
                                                    o.applyInputValue)(this, t);
                                                }));
                                            }(t));
                                        }
                                    }(t) : t.inputmask = void 0, u;
                                }(i, t);
                                if (!1 !== f) {
                                    e.originalPlaceholder = i.placeholder, e.maxLength = void 0 !== i ? i.maxLength : void 0, 
                                    -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in i && null === i.getAttribute("inputmode") && (i.inputMode = t.inputmode, 
                                    i.setAttribute("inputmode", t.inputmode)), !0 === f && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(i.autocomplete), 
                                    s.iphone && (t.insertModeVisual = !1), l.EventRuler.on(i, "submit", c.EventHandlers.submitEvent), 
                                    l.EventRuler.on(i, "reset", c.EventHandlers.resetEvent), l.EventRuler.on(i, "blur", c.EventHandlers.blurEvent), 
                                    l.EventRuler.on(i, "focus", c.EventHandlers.focusEvent), l.EventRuler.on(i, "invalid", c.EventHandlers.invalidEvent), 
                                    l.EventRuler.on(i, "click", c.EventHandlers.clickEvent), l.EventRuler.on(i, "mouseleave", c.EventHandlers.mouseleaveEvent), 
                                    l.EventRuler.on(i, "mouseenter", c.EventHandlers.mouseenterEvent), l.EventRuler.on(i, "paste", c.EventHandlers.pasteEvent), 
                                    l.EventRuler.on(i, "cut", c.EventHandlers.cutEvent), l.EventRuler.on(i, "complete", t.oncomplete), 
                                    l.EventRuler.on(i, "incomplete", t.onincomplete), l.EventRuler.on(i, "cleared", t.oncleared), 
                                    !0 !== t.inputEventOnly && (l.EventRuler.on(i, "keydown", c.EventHandlers.keydownEvent), 
                                    l.EventRuler.on(i, "keypress", c.EventHandlers.keypressEvent), l.EventRuler.on(i, "keyup", c.EventHandlers.keyupEvent)), 
                                    (s.mobile || t.inputEventOnly) && i.removeAttribute("maxLength"), l.EventRuler.on(i, "input", c.EventHandlers.inputFallBackEvent), 
                                    l.EventRuler.on(i, "compositionend", c.EventHandlers.compositionendEvent)), l.EventRuler.on(i, "setvalue", c.EventHandlers.setValueEvent), 
                                    r.getBufferTemplate.call(e).join(""), e.undoValue = e._valueGet(!0);
                                    var d = (i.inputmask.shadowRoot || i.ownerDocument).activeElement;
                                    if ("" !== i.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || d === i) {
                                        (0, o.applyInputValue)(i, i.inputmask._valueGet(!0), t);
                                        var p = r.getBuffer.call(e).slice();
                                        !1 === u.isComplete.call(e, p) && t.clearIncomplete && r.resetMaskSet.call(e), t.clearMaskOnLostFocus && d !== i && (-1 === r.getLastValidPosition.call(e) ? p = [] : o.clearOptionalTail.call(e, p)), 
                                        (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && d === i || "" !== i.inputmask._valueGet(!0)) && (0, 
                                        o.writeBuffer)(i, p), d === i && r.caret.call(e, i, r.seekNext.call(e, r.getLastValidPosition.call(e)));
                                    }
                                }
                            };
                            var a, n = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            }, r = i(8711), o = i(7760), l = i(9716), s = i(9845), u = i(7215), c = i(6030);
                        },
                        9695: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e, t, i, a) {
                                this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                                this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = a || !1, 
                                this.quantifier = {
                                    min: 1,
                                    max: 1
                                };
                            };
                        },
                        3194: function() {
                            Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                                value: function(e, t) {
                                    if (null == this) throw new TypeError('"this" is null or not defined');
                                    var i = Object(this), a = i.length >>> 0;
                                    if (0 === a) return !1;
                                    for (var n = 0 | t, r = Math.max(n >= 0 ? n : a - Math.abs(n), 0); r < a; ) {
                                        if (i[r] === e) return !0;
                                        r++;
                                    }
                                    return !1;
                                }
                            });
                        },
                        7149: function() {
                            function e(t) {
                                return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, e(t);
                            }
                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                                return e.__proto__;
                            } : function(e) {
                                return e.constructor.prototype;
                            });
                        },
                        8711: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.caret = function(e, t, i, a, n) {
                                var r, o = this, l = this.opts;
                                if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, 
                                i = e.selectionEnd) : window.getSelection ? (r = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && r.commonAncestorContainer !== e || (t = r.startOffset, 
                                i = r.endOffset) : document.selection && document.selection.createRange && (r = document.selection.createRange(), 
                                t = 0 - r.duplicate().moveStart("character", -e.inputmask._valueGet().length), i = t + r.text.length), 
                                {
                                    begin: a ? t : u.call(o, t),
                                    end: a ? i : u.call(o, i)
                                };
                                if (Array.isArray(t) && (i = o.isRTL ? t[0] : t[1], t = o.isRTL ? t[1] : t[0]), 
                                void 0 !== t.begin && (i = o.isRTL ? t.begin : t.end, t = o.isRTL ? t.end : t.begin), 
                                "number" == typeof t) {
                                    t = a ? t : u.call(o, t), i = "number" == typeof (i = a ? i : u.call(o, i)) ? i : t;
                                    var s = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                                    if (e.scrollLeft = s > e.scrollWidth ? s : 0, e.inputmask.caretPos = {
                                        begin: t,
                                        end: i
                                    }, l.insertModeVisual && !1 === l.insertMode && t === i && (n || i++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) if ("setSelectionRange" in e) e.setSelectionRange(t, i); else if (window.getSelection) {
                                        if (r = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                            var c = document.createTextNode("");
                                            e.appendChild(c);
                                        }
                                        r.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                                        r.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), 
                                        r.collapse(!0);
                                        var f = window.getSelection();
                                        f.removeAllRanges(), f.addRange(r);
                                    } else e.createTextRange && ((r = e.createTextRange()).collapse(!0), r.moveEnd("character", i), 
                                    r.moveStart("character", t), r.select());
                                }
                            }, t.determineLastRequiredPosition = function(e) {
                                var t, i, r = this, l = this.maskset, s = this.dependencyLib, u = a.getMaskTemplate.call(r, !0, o.call(r), !0, !0), c = u.length, f = o.call(r), d = {}, p = l.validPositions[f], h = void 0 !== p ? p.locator.slice() : void 0;
                                for (t = f + 1; t < u.length; t++) i = a.getTestTemplate.call(r, t, h, t - 1), h = i.locator.slice(), 
                                d[t] = s.extend(!0, {}, i);
                                var v = p && void 0 !== p.alternation ? p.locator[p.alternation] : void 0;
                                for (t = c - 1; t > f && ((i = d[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || v && (v !== d[t].locator[p.alternation] && 1 != i.match.static || !0 === i.match.static && i.locator[p.alternation] && n.checkAlternationMatch.call(r, i.locator[p.alternation].toString().split(","), v.toString().split(",")) && "" !== a.getTests.call(r, t)[0].def)) && u[t] === a.getPlaceholder.call(r, t, i.match); t--) c--;
                                return e ? {
                                    l: c,
                                    def: d[c] ? d[c].match : void 0
                                } : c;
                            }, t.determineNewCaretPosition = function(e, t, i) {
                                var n = this, u = this.maskset, c = this.opts;
                                t && (n.isRTL ? e.end = e.begin : e.begin = e.end);
                                if (e.begin === e.end) {
                                    switch (i = i || c.positionCaretOnClick) {
                                      case "none":
                                        break;

                                      case "select":
                                        e = {
                                            begin: 0,
                                            end: r.call(n).length
                                        };
                                        break;

                                      case "ignore":
                                        e.end = e.begin = s.call(n, o.call(n));
                                        break;

                                      case "radixFocus":
                                        if (function(e) {
                                            if ("" !== c.radixPoint && 0 !== c.digits) {
                                                var t = u.validPositions;
                                                if (void 0 === t[e] || t[e].input === a.getPlaceholder.call(n, e)) {
                                                    if (e < s.call(n, -1)) return !0;
                                                    var i = r.call(n).indexOf(c.radixPoint);
                                                    if (-1 !== i) {
                                                        for (var o in t) if (t[o] && i < o && t[o].input !== a.getPlaceholder.call(n, o)) return !1;
                                                        return !0;
                                                    }
                                                }
                                            }
                                            return !1;
                                        }(e.begin)) {
                                            var f = r.call(n).join("").indexOf(c.radixPoint);
                                            e.end = e.begin = c.numericInput ? s.call(n, f) : f;
                                            break;
                                        }

                                      default:
                                        var d = e.begin, p = o.call(n, d, !0), h = s.call(n, -1 !== p || l.call(n, 0) ? p : -1);
                                        if (d <= h) e.end = e.begin = l.call(n, d, !1, !0) ? d : s.call(n, d); else {
                                            var v = u.validPositions[p], m = a.getTestTemplate.call(n, h, v ? v.match.locator : void 0, v), g = a.getPlaceholder.call(n, h, m.match);
                                            if ("" !== g && r.call(n)[h] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !l.call(n, h, c.keepStatic, !0) && m.match.def === g) {
                                                var k = s.call(n, h);
                                                (d >= k || d === h) && (h = k);
                                            }
                                            e.end = e.begin = h;
                                        }
                                    }
                                    return e;
                                }
                            }, t.getBuffer = r, t.getBufferTemplate = function() {
                                var e = this.maskset;
                                void 0 === e._buffer && (e._buffer = a.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                                return e._buffer;
                            }, t.getLastValidPosition = o, t.isMask = l, t.resetMaskSet = function(e) {
                                var t = this.maskset;
                                t.buffer = void 0, !0 !== e && (t.validPositions = {}, t.p = 0);
                            }, t.seekNext = s, t.seekPrevious = function(e, t) {
                                var i = this, n = e - 1;
                                if (e <= 0) return 0;
                                for (;n > 0 && (!0 === t && (!0 !== a.getTest.call(i, n).match.newBlockMarker || !l.call(i, n, void 0, !0)) || !0 !== t && !l.call(i, n, void 0, !0)); ) n--;
                                return n;
                            }, t.translatePosition = u;
                            var a = i(4713), n = i(7215);
                            function r(e) {
                                var t = this.maskset;
                                return void 0 !== t.buffer && !0 !== e || (t.buffer = a.getMaskTemplate.call(this, !0, o.call(this), !0), 
                                void 0 === t._buffer && (t._buffer = t.buffer.slice())), t.buffer;
                            }
                            function o(e, t, i) {
                                var a = this.maskset, n = -1, r = -1, o = i || a.validPositions;
                                for (var l in void 0 === e && (e = -1), o) {
                                    var s = parseInt(l);
                                    o[s] && (t || !0 !== o[s].generatedInput) && (s <= e && (n = s), s >= e && (r = s));
                                }
                                return -1 === n || n == e ? r : -1 == r || e - n < r - e ? n : r;
                            }
                            function l(e, t, i) {
                                var n = this, r = this.maskset, o = a.getTestTemplate.call(n, e).match;
                                if ("" === o.def && (o = a.getTest.call(n, e).match), !0 !== o.static) return o.fn;
                                if (!0 === i && void 0 !== r.validPositions[e] && !0 !== r.validPositions[e].generatedInput) return !0;
                                if (!0 !== t && e > -1) {
                                    if (i) {
                                        var l = a.getTests.call(n, e);
                                        return l.length > 1 + ("" === l[l.length - 1].match.def ? 1 : 0);
                                    }
                                    var s = a.determineTestTemplate.call(n, e, a.getTests.call(n, e)), u = a.getPlaceholder.call(n, e, s.match);
                                    return s.match.def !== u;
                                }
                                return !1;
                            }
                            function s(e, t, i) {
                                var n = this;
                                void 0 === i && (i = !0);
                                for (var r = e + 1; "" !== a.getTest.call(n, r).match.def && (!0 === t && (!0 !== a.getTest.call(n, r).match.newBlockMarker || !l.call(n, r, void 0, !0)) || !0 !== t && !l.call(n, r, void 0, i)); ) r++;
                                return r;
                            }
                            function u(e) {
                                var t = this.opts, i = this.el;
                                return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !i || (e = Math.abs(this._valueGet().length - e)), 
                                e;
                            }
                        },
                        4713: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.determineTestTemplate = u, t.getDecisionTaker = o, t.getMaskTemplate = function(e, t, i, a, n) {
                                var r = this, o = this.opts, c = this.maskset, f = o.greedy;
                                n && o.greedy && (o.greedy = !1, r.maskset.tests = {});
                                t = t || 0;
                                var p, h, v, m, g = [], k = 0;
                                do {
                                    if (!0 === e && c.validPositions[k]) v = n && c.validPositions[k].match.optionality && void 0 === c.validPositions[k + 1] && (!0 === c.validPositions[k].generatedInput || c.validPositions[k].input == o.skipOptionalPartCharacter && k > 0) ? u.call(r, k, d.call(r, k, p, k - 1)) : c.validPositions[k], 
                                    h = v.match, p = v.locator.slice(), g.push(!0 === i ? v.input : !1 === i ? h.nativeDef : l.call(r, k, h)); else {
                                        v = s.call(r, k, p, k - 1), h = v.match, p = v.locator.slice();
                                        var y = !0 !== a && (!1 !== o.jitMasking ? o.jitMasking : h.jit);
                                        (m = (m && h.static && h.def !== o.groupSeparator && null === h.fn || c.validPositions[k - 1] && h.static && h.def !== o.groupSeparator && null === h.fn) && c.tests[k] && 1 === c.tests[k].length) || !1 === y || void 0 === y || "number" == typeof y && isFinite(y) && y > k ? g.push(!1 === i ? h.nativeDef : l.call(r, k, h)) : m = !1;
                                    }
                                    k++;
                                } while (!0 !== h.static || "" !== h.def || t > k);
                                "" === g[g.length - 1] && g.pop();
                                !1 === i && void 0 !== c.maskLength || (c.maskLength = k - 1);
                                return o.greedy = f, g;
                            }, t.getPlaceholder = l, t.getTest = c, t.getTestTemplate = s, t.getTests = d, t.isSubsetOf = f;
                            var a, n = (a = i(2394)) && a.__esModule ? a : {
                                default: a
                            };
                            function r(e, t) {
                                var i = (null != e.alternation ? e.mloc[o(e)] : e.locator).join("");
                                if ("" !== i) for (;i.length < t; ) i += "0";
                                return i;
                            }
                            function o(e) {
                                var t = e.locator[e.alternation];
                                return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                            }
                            function l(e, t, i) {
                                var a = this.opts, n = this.maskset;
                                if (void 0 !== (t = t || c.call(this, e).match).placeholder || !0 === i) return "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;
                                if (!0 === t.static) {
                                    if (e > -1 && void 0 === n.validPositions[e]) {
                                        var r, o = d.call(this, e), l = [];
                                        if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var s = 0; s < o.length; s++) if ("" !== o[s].match.def && !0 !== o[s].match.optionality && !0 !== o[s].match.optionalQuantifier && (!0 === o[s].match.static || void 0 === r || !1 !== o[s].match.fn.test(r.match.def, n, e, !0, a)) && (l.push(o[s]), 
                                        !0 === o[s].match.static && (r = o[s]), l.length > 1 && /[0-9a-bA-Z]/.test(l[0].match.def))) return a.placeholder.charAt(e % a.placeholder.length);
                                    }
                                    return t.def;
                                }
                                return a.placeholder.charAt(e % a.placeholder.length);
                            }
                            function s(e, t, i) {
                                return this.maskset.validPositions[e] || u.call(this, e, d.call(this, e, t ? t.slice() : t, i));
                            }
                            function u(e, t) {
                                var i = this.opts, a = function(e, t) {
                                    var i = 0, a = !1;
                                    t.forEach((function(e) {
                                        e.match.optionality && (0 !== i && i !== e.match.optionality && (a = !0), (0 === i || i > e.match.optionality) && (i = e.match.optionality));
                                    })), i && (0 == e || 1 == t.length ? i = 0 : a || (i = 0));
                                    return i;
                                }(e, t);
                                e = e > 0 ? e - 1 : 0;
                                var n, o, l, s = r(c.call(this, e));
                                i.greedy && t.length > 1 && "" === t[t.length - 1].match.def && t.pop();
                                for (var u = 0; u < t.length; u++) {
                                    var f = t[u];
                                    n = r(f, s.length);
                                    var d = Math.abs(n - s);
                                    (void 0 === o || "" !== n && d < o || l && !i.greedy && l.match.optionality && l.match.optionality - a > 0 && "master" === l.match.newBlockMarker && (!f.match.optionality || f.match.optionality - a < 1 || !f.match.newBlockMarker) || l && !i.greedy && l.match.optionalQuantifier && !f.match.optionalQuantifier) && (o = d, 
                                    l = f);
                                }
                                return l;
                            }
                            function c(e, t) {
                                var i = this.maskset;
                                return i.validPositions[e] ? i.validPositions[e] : (t || d.call(this, e))[0];
                            }
                            function f(e, t, i) {
                                function a(e) {
                                    for (var t, i = [], a = -1, n = 0, r = e.length; n < r; n++) if ("-" === e.charAt(n)) for (t = e.charCodeAt(n + 1); ++a < t; ) i.push(String.fromCharCode(a)); else a = e.charCodeAt(n), 
                                    i.push(e.charAt(n));
                                    return i.join("");
                                }
                                return e.match.def === t.match.nativeDef || !(!(i.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== a(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(a(e.match.fn.toString().replace(/[[\]/]/g, "")));
                            }
                            function d(e, t, i) {
                                var a, r, o = this, l = this.dependencyLib, s = this.maskset, c = this.opts, d = this.el, p = s.maskToken, h = t ? i : 0, v = t ? t.slice() : [ 0 ], m = [], g = !1, k = t ? t.join("") : "";
                                function y(t, i, r, o) {
                                    function l(r, o, u) {
                                        function p(e, t) {
                                            var i = 0 === t.matches.indexOf(e);
                                            return i || t.matches.every((function(a, n) {
                                                return !0 === a.isQuantifier ? i = p(e, t.matches[n - 1]) : Object.prototype.hasOwnProperty.call(a, "matches") && (i = p(e, a)), 
                                                !i;
                                            })), i;
                                        }
                                        function v(e, t, i) {
                                            var a, n;
                                            if ((s.tests[e] || s.validPositions[e]) && (s.tests[e] || [ s.validPositions[e] ]).every((function(e, r) {
                                                if (e.mloc[t]) return a = e, !1;
                                                var o = void 0 !== i ? i : e.alternation, l = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                                return (void 0 === n || l < n) && -1 !== l && (a = e, n = l), !0;
                                            })), a) {
                                                var r = a.locator[a.alternation];
                                                return (a.mloc[t] || a.mloc[r] || a.locator).slice((void 0 !== i ? i : a.alternation) + 1);
                                            }
                                            return void 0 !== i ? v(e, t) : void 0;
                                        }
                                        function b(e, t) {
                                            var i = e.alternation, a = void 0 === t || i === t.alternation && -1 === e.locator[i].toString().indexOf(t.locator[i]);
                                            if (!a && i > t.alternation) for (var n = t.alternation; n < i; n++) if (e.locator[n] !== t.locator[n]) {
                                                i = n, a = !0;
                                                break;
                                            }
                                            if (a) {
                                                e.mloc = e.mloc || {};
                                                var r = e.locator[i];
                                                if (void 0 !== r) {
                                                    if ("string" == typeof r && (r = r.split(",")[0]), void 0 === e.mloc[r] && (e.mloc[r] = e.locator.slice()), 
                                                    void 0 !== t) {
                                                        for (var o in t.mloc) "string" == typeof o && (o = o.split(",")[0]), void 0 === e.mloc[o] && (e.mloc[o] = t.mloc[o]);
                                                        e.locator[i] = Object.keys(e.mloc).join(",");
                                                    }
                                                    return !0;
                                                }
                                                e.alternation = void 0;
                                            }
                                            return !1;
                                        }
                                        function x(e, t) {
                                            if (e.locator.length !== t.locator.length) return !1;
                                            for (var i = e.alternation + 1; i < e.locator.length; i++) if (e.locator[i] !== t.locator[i]) return !1;
                                            return !0;
                                        }
                                        if (h > e + c._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + s.mask;
                                        if (h === e && void 0 === r.matches) {
                                            if (m.push({
                                                match: r,
                                                locator: o.reverse(),
                                                cd: k,
                                                mloc: {}
                                            }), !r.optionality || void 0 !== u || !(c.definitions && c.definitions[r.nativeDef] && c.definitions[r.nativeDef].optional || n.default.prototype.definitions[r.nativeDef] && n.default.prototype.definitions[r.nativeDef].optional)) return !0;
                                            g = !0, h = e;
                                        } else if (void 0 !== r.matches) {
                                            if (r.isGroup && u !== r) {
                                                if (r = l(t.matches[t.matches.indexOf(r) + 1], o, u)) return !0;
                                            } else if (r.isOptional) {
                                                var P = r, E = m.length;
                                                if (r = y(r, i, o, u)) {
                                                    if (m.forEach((function(e, t) {
                                                        t >= E && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                                                    })), a = m[m.length - 1].match, void 0 !== u || !p(a, P)) return !0;
                                                    g = !0, h = e;
                                                }
                                            } else if (r.isAlternator) {
                                                var S, _ = r, w = [], M = m.slice(), O = o.length, T = !1, C = i.length > 0 ? i.shift() : -1;
                                                if (-1 === C || "string" == typeof C) {
                                                    var A, D = h, j = i.slice(), B = [];
                                                    if ("string" == typeof C) B = C.split(","); else for (A = 0; A < _.matches.length; A++) B.push(A.toString());
                                                    if (void 0 !== s.excludes[e]) {
                                                        for (var R = B.slice(), L = 0, I = s.excludes[e].length; L < I; L++) {
                                                            var F = s.excludes[e][L].toString().split(":");
                                                            o.length == F[1] && B.splice(B.indexOf(F[0]), 1);
                                                        }
                                                        0 === B.length && (delete s.excludes[e], B = R);
                                                    }
                                                    (!0 === c.keepStatic || isFinite(parseInt(c.keepStatic)) && D >= c.keepStatic) && (B = B.slice(0, 1));
                                                    for (var N = 0; N < B.length; N++) {
                                                        A = parseInt(B[N]), m = [], i = "string" == typeof C && v(h, A, O) || j.slice();
                                                        var V = _.matches[A];
                                                        if (V && l(V, [ A ].concat(o), u)) r = !0; else if (0 === N && (T = !0), V && V.matches && V.matches.length > _.matches[0].matches.length) break;
                                                        S = m.slice(), h = D, m = [];
                                                        for (var G = 0; G < S.length; G++) {
                                                            var H = S[G], K = !1;
                                                            H.match.jit = H.match.jit || T, H.alternation = H.alternation || O, b(H);
                                                            for (var U = 0; U < w.length; U++) {
                                                                var $ = w[U];
                                                                if ("string" != typeof C || void 0 !== H.alternation && B.includes(H.locator[H.alternation].toString())) {
                                                                    if (H.match.nativeDef === $.match.nativeDef) {
                                                                        K = !0, b($, H);
                                                                        break;
                                                                    }
                                                                    if (f(H, $, c)) {
                                                                        b(H, $) && (K = !0, w.splice(w.indexOf($), 0, H));
                                                                        break;
                                                                    }
                                                                    if (f($, H, c)) {
                                                                        b($, H);
                                                                        break;
                                                                    }
                                                                    if (Z = $, !0 === (Q = H).match.static && !0 !== Z.match.static && Z.match.fn.test(Q.match.def, s, e, !1, c, !1)) {
                                                                        x(H, $) || void 0 !== d.inputmask.userOptions.keepStatic ? b(H, $) && (K = !0, w.splice(w.indexOf($), 0, H)) : c.keepStatic = !0;
                                                                        break;
                                                                    }
                                                                }
                                                            }
                                                            K || w.push(H);
                                                        }
                                                    }
                                                    m = M.concat(w), h = e, g = m.length > 0, r = w.length > 0, i = j.slice();
                                                } else r = l(_.matches[C] || t.matches[C], [ C ].concat(o), u);
                                                if (r) return !0;
                                            } else if (r.isQuantifier && u !== t.matches[t.matches.indexOf(r) - 1]) for (var q = r, z = i.length > 0 ? i.shift() : 0; z < (isNaN(q.quantifier.max) ? z + 1 : q.quantifier.max) && h <= e; z++) {
                                                var W = t.matches[t.matches.indexOf(q) - 1];
                                                if (r = l(W, [ z ].concat(o), W)) {
                                                    if ((a = m[m.length - 1].match).optionalQuantifier = z >= q.quantifier.min, a.jit = (z + 1) * (W.matches.indexOf(a) + 1) > q.quantifier.jit, 
                                                    a.optionalQuantifier && p(a, W)) {
                                                        g = !0, h = e;
                                                        break;
                                                    }
                                                    return a.jit && (s.jitOffset[e] = W.matches.length - W.matches.indexOf(a)), !0;
                                                }
                                            } else if (r = y(r, i, o, u)) return !0;
                                        } else h++;
                                        var Q, Z;
                                    }
                                    for (var u = i.length > 0 ? i.shift() : 0; u < t.matches.length; u++) if (!0 !== t.matches[u].isQuantifier) {
                                        var p = l(t.matches[u], [ u ].concat(r), o);
                                        if (p && h === e) return p;
                                        if (h > e) break;
                                    }
                                }
                                if (e > -1) {
                                    if (void 0 === t) {
                                        for (var b, x = e - 1; void 0 === (b = s.validPositions[x] || s.tests[x]) && x > -1; ) x--;
                                        void 0 !== b && x > -1 && (v = function(e, t) {
                                            var i, a = [];
                                            return Array.isArray(t) || (t = [ t ]), t.length > 0 && (void 0 === t[0].alternation || !0 === c.keepStatic ? 0 === (a = u.call(o, e, t.slice()).locator.slice()).length && (a = t[0].locator.slice()) : t.forEach((function(e) {
                                                "" !== e.def && (0 === a.length ? (i = e.alternation, a = e.locator.slice()) : e.locator[i] && -1 === a[i].toString().indexOf(e.locator[i]) && (a[i] += "," + e.locator[i]));
                                            }))), a;
                                        }(x, b), k = v.join(""), h = x);
                                    }
                                    if (s.tests[e] && s.tests[e][0].cd === k) return s.tests[e];
                                    for (var P = v.shift(); P < p.length; P++) if (y(p[P], v, [ P ]) && h === e || h > e) break;
                                }
                                return (0 === m.length || g) && m.push({
                                    match: {
                                        fn: null,
                                        static: !0,
                                        optionality: !1,
                                        casing: null,
                                        def: "",
                                        placeholder: ""
                                    },
                                    locator: [],
                                    mloc: {},
                                    cd: k
                                }), void 0 !== t && s.tests[e] ? r = l.extend(!0, [], m) : (s.tests[e] = l.extend(!0, [], m), 
                                r = s.tests[e]), m.forEach((function(e) {
                                    e.match.optionality = !1;
                                })), r;
                            }
                        },
                        7215: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.alternate = s, t.checkAlternationMatch = function(e, t, i) {
                                for (var a, n = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== i ? i.split(",") : [], l = 0; l < o.length; l++) -1 !== (a = e.indexOf(o[l])) && e.splice(a, 1);
                                for (var s = 0; s < e.length; s++) if (n.includes(e[s])) {
                                    r = !0;
                                    break;
                                }
                                return r;
                            }, t.handleRemove = function(e, t, i, a, l) {
                                var u = this, c = this.maskset, f = this.opts;
                                if ((f.numericInput || u.isRTL) && (t === r.default.BACKSPACE ? t = r.default.DELETE : t === r.default.DELETE && (t = r.default.BACKSPACE), 
                                u.isRTL)) {
                                    var d = i.end;
                                    i.end = i.begin, i.begin = d;
                                }
                                var p, h = o.getLastValidPosition.call(u, void 0, !0);
                                i.end >= o.getBuffer.call(u).length && h >= i.end && (i.end = h + 1);
                                t === r.default.BACKSPACE ? i.end - i.begin < 1 && (i.begin = o.seekPrevious.call(u, i.begin)) : t === r.default.DELETE && i.begin === i.end && (i.end = o.isMask.call(u, i.end, !0, !0) ? i.end + 1 : o.seekNext.call(u, i.end) + 1);
                                if (!1 !== (p = m.call(u, i))) {
                                    if (!0 !== a && !1 !== f.keepStatic || null !== f.regex && -1 !== n.getTest.call(u, i.begin).match.def.indexOf("|")) {
                                        var v = s.call(u, !0);
                                        if (v) {
                                            var g = void 0 !== v.caret ? v.caret : v.pos ? o.seekNext.call(u, v.pos.begin ? v.pos.begin : v.pos) : o.getLastValidPosition.call(u, -1, !0);
                                            (t !== r.default.DELETE || i.begin > g) && i.begin;
                                        }
                                    }
                                    !0 !== a && (c.p = t === r.default.DELETE ? i.begin + p : i.begin, c.p = o.determineNewCaretPosition.call(u, {
                                        begin: c.p,
                                        end: c.p
                                    }, !1, !1 === f.insertMode && t === r.default.BACKSPACE ? "none" : void 0).begin);
                                }
                            }, t.isComplete = c, t.isSelection = f, t.isValid = d, t.refreshFromBuffer = h, 
                            t.revalidateMask = m;
                            var a, n = i(4713), r = (a = i(5581)) && a.__esModule ? a : {
                                default: a
                            }, o = i(8711), l = i(6030);
                            function s(e, t, i, a, r, l) {
                                var u, c, f, p, h, v, m, g, k, y, b, x = this, P = this.dependencyLib, E = this.opts, S = x.maskset, _ = P.extend(!0, {}, S.validPositions), w = P.extend(!0, {}, S.tests), M = !1, O = !1, T = void 0 !== r ? r : o.getLastValidPosition.call(x);
                                if (l && (y = l.begin, b = l.end, l.begin > l.end && (y = l.end, b = l.begin)), 
                                -1 === T && void 0 === r) u = 0, c = (p = n.getTest.call(x, u)).alternation; else for (;T >= 0; T--) if ((f = S.validPositions[T]) && void 0 !== f.alternation) {
                                    if (p && p.locator[f.alternation] !== f.locator[f.alternation]) break;
                                    u = T, c = S.validPositions[u].alternation, p = f;
                                }
                                if (void 0 !== c) {
                                    m = parseInt(u), S.excludes[m] = S.excludes[m] || [], !0 !== e && S.excludes[m].push((0, 
                                    n.getDecisionTaker)(p) + ":" + p.alternation);
                                    var C = [], A = -1;
                                    for (h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) -1 === A && e <= h && void 0 !== t && (C.push(t), 
                                    A = C.length - 1), (v = S.validPositions[h]) && !0 !== v.generatedInput && (void 0 === l || h < y || h >= b) && C.push(v.input), 
                                    delete S.validPositions[h];
                                    for (-1 === A && void 0 !== t && (C.push(t), A = C.length - 1); void 0 !== S.excludes[m] && S.excludes[m].length < 10; ) {
                                        for (S.tests = {}, o.resetMaskSet.call(x, !0), M = !0, h = 0; h < C.length && (g = M.caret || o.getLastValidPosition.call(x, void 0, !0) + 1, 
                                        k = C[h], M = d.call(x, g, k, !1, a, !0)); h++) h === A && (O = M), 1 == e && M && (O = {
                                            caretPos: h
                                        });
                                        if (M) break;
                                        if (o.resetMaskSet.call(x), p = n.getTest.call(x, m), S.validPositions = P.extend(!0, {}, _), 
                                        S.tests = P.extend(!0, {}, w), !S.excludes[m]) {
                                            O = s.call(x, e, t, i, a, m - 1, l);
                                            break;
                                        }
                                        var D = (0, n.getDecisionTaker)(p);
                                        if (-1 !== S.excludes[m].indexOf(D + ":" + p.alternation)) {
                                            O = s.call(x, e, t, i, a, m - 1, l);
                                            break;
                                        }
                                        for (S.excludes[m].push(D + ":" + p.alternation), h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) delete S.validPositions[h];
                                    }
                                }
                                return O && !1 === E.keepStatic || delete S.excludes[m], O;
                            }
                            function u(e, t, i) {
                                var a = this.opts, n = this.maskset;
                                switch (a.casing || t.casing) {
                                  case "upper":
                                    e = e.toUpperCase();
                                    break;

                                  case "lower":
                                    e = e.toLowerCase();
                                    break;

                                  case "title":
                                    var o = n.validPositions[i - 1];
                                    e = 0 === i || o && o.input === String.fromCharCode(r.default.SPACE) ? e.toUpperCase() : e.toLowerCase();
                                    break;

                                  default:
                                    if ("function" == typeof a.casing) {
                                        var l = Array.prototype.slice.call(arguments);
                                        l.push(n.validPositions), e = a.casing.apply(this, l);
                                    }
                                }
                                return e;
                            }
                            function c(e) {
                                var t = this, i = this.opts, a = this.maskset;
                                if ("function" == typeof i.isComplete) return i.isComplete(e, i);
                                if ("*" !== i.repeat) {
                                    var r = !1, l = o.determineLastRequiredPosition.call(t, !0), s = o.seekPrevious.call(t, l.l);
                                    if (void 0 === l.def || l.def.newBlockMarker || l.def.optionality || l.def.optionalQuantifier) {
                                        r = !0;
                                        for (var u = 0; u <= s; u++) {
                                            var c = n.getTestTemplate.call(t, u).match;
                                            if (!0 !== c.static && void 0 === a.validPositions[u] && !0 !== c.optionality && !0 !== c.optionalQuantifier || !0 === c.static && e[u] !== n.getPlaceholder.call(t, u, c)) {
                                                r = !1;
                                                break;
                                            }
                                        }
                                    }
                                    return r;
                                }
                            }
                            function f(e) {
                                var t = this.opts.insertMode ? 0 : 1;
                                return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
                            }
                            function d(e, t, i, a, r, l, p) {
                                var g = this, k = this.dependencyLib, y = this.opts, b = g.maskset;
                                i = !0 === i;
                                var x = e;
                                function P(e) {
                                    if (void 0 !== e) {
                                        if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [ e.remove ]), 
                                        e.remove.sort((function(e, t) {
                                            return t.pos - e.pos;
                                        })).forEach((function(e) {
                                            m.call(g, {
                                                begin: e,
                                                end: e + 1
                                            });
                                        })), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [ e.insert ]), 
                                        e.insert.sort((function(e, t) {
                                            return e.pos - t.pos;
                                        })).forEach((function(e) {
                                            "" !== e.c && d.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : a);
                                        })), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                            var t = e.refreshFromBuffer;
                                            h.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                                        }
                                        void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                                    }
                                    return e;
                                }
                                function E(t, i, r) {
                                    var l = !1;
                                    return n.getTests.call(g, t).every((function(s, c) {
                                        var d = s.match;
                                        if (o.getBuffer.call(g, !0), !1 !== (l = (!d.jit || void 0 !== b.validPositions[o.seekPrevious.call(g, t)]) && (null != d.fn ? d.fn.test(i, b, t, r, y, f.call(g, e)) : (i === d.def || i === y.skipOptionalPartCharacter) && "" !== d.def && {
                                            c: n.getPlaceholder.call(g, t, d, !0) || d.def,
                                            pos: t
                                        }))) {
                                            var p = void 0 !== l.c ? l.c : i, h = t;
                                            return p = p === y.skipOptionalPartCharacter && !0 === d.static ? n.getPlaceholder.call(g, t, d, !0) || d.def : p, 
                                            !0 !== (l = P(l)) && void 0 !== l.pos && l.pos !== t && (h = l.pos), !0 !== l && void 0 === l.pos && void 0 === l.c ? !1 : (!1 === m.call(g, e, k.extend({}, s, {
                                                input: u.call(g, p, d, h)
                                            }), a, h) && (l = !1), !1);
                                        }
                                        return !0;
                                    })), l;
                                }
                                void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
                                var S = !0, _ = k.extend(!0, {}, b.validPositions);
                                if (!1 === y.keepStatic && void 0 !== b.excludes[x] && !0 !== r && !0 !== a) for (var w = x; w < (g.isRTL ? e.begin : e.end); w++) void 0 !== b.excludes[w] && (b.excludes[w] = void 0, 
                                delete b.tests[w]);
                                if ("function" == typeof y.preValidation && !0 !== a && !0 !== l && (S = P(S = y.preValidation.call(g, o.getBuffer.call(g), x, t, f.call(g, e), y, b, e, i || r))), 
                                !0 === S) {
                                    if (S = E(x, t, i), (!i || !0 === a) && !1 === S && !0 !== l) {
                                        var M = b.validPositions[x];
                                        if (!M || !0 !== M.match.static || M.match.def !== t && t !== y.skipOptionalPartCharacter) {
                                            if (y.insertMode || void 0 === b.validPositions[o.seekNext.call(g, x)] || e.end > x) {
                                                var O = !1;
                                                if (b.jitOffset[x] && void 0 === b.validPositions[o.seekNext.call(g, x)] && !1 !== (S = d.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== r && (S.caret = x), 
                                                O = !0), e.end > x && (b.validPositions[x] = void 0), !O && !o.isMask.call(g, x, y.keepStatic && 0 === x)) for (var T = x + 1, C = o.seekNext.call(g, x, !1, 0 !== x); T <= C; T++) if (!1 !== (S = E(T, t, i))) {
                                                    S = v.call(g, x, void 0 !== S.pos ? S.pos : T) || S, x = T;
                                                    break;
                                                }
                                            }
                                        } else S = {
                                            caret: o.seekNext.call(g, x)
                                        };
                                    }
                                    !1 !== S || !y.keepStatic || !c.call(g, o.getBuffer.call(g)) && 0 !== x || i || !0 === r ? f.call(g, e) && b.tests[x] && b.tests[x].length > 1 && y.keepStatic && !i && !0 !== r && (S = s.call(g, !0)) : S = s.call(g, x, t, i, a, void 0, e), 
                                    !0 === S && (S = {
                                        pos: x
                                    });
                                }
                                if ("function" == typeof y.postValidation && !0 !== a && !0 !== l) {
                                    var A = y.postValidation.call(g, o.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, y, b, i, p);
                                    void 0 !== A && (S = !0 === A ? S : A);
                                }
                                S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === l ? (o.resetMaskSet.call(g, !0), 
                                b.validPositions = k.extend(!0, {}, _)) : v.call(g, void 0, x, !0);
                                var D = P(S);
                                void 0 !== g.maxLength && o.getBuffer.call(g).length > g.maxLength && !a && (o.resetMaskSet.call(g, !0), 
                                b.validPositions = k.extend(!0, {}, _), D = !1);
                                return D;
                            }
                            function p(e, t, i) {
                                for (var a = this.maskset, r = !1, o = n.getTests.call(this, e), l = 0; l < o.length; l++) {
                                    if (o[l].match && (o[l].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match.static) || o[l].match.nativeDef === t.match.nativeDef || i.regex && !o[l].match.static && o[l].match.fn.test(t.input))) {
                                        r = !0;
                                        break;
                                    }
                                    if (o[l].match && o[l].match.def === t.match.nativeDef) {
                                        r = void 0;
                                        break;
                                    }
                                }
                                return !1 === r && void 0 !== a.jitOffset[e] && (r = p.call(this, e + a.jitOffset[e], t, i)), 
                                r;
                            }
                            function h(e, t, i) {
                                var a, n, r = this, s = this.maskset, u = this.opts, c = this.dependencyLib, f = u.skipOptionalPartCharacter, d = r.isRTL ? i.slice().reverse() : i;
                                if (u.skipOptionalPartCharacter = "", !0 === e) o.resetMaskSet.call(r), s.tests = {}, 
                                e = 0, t = i.length, n = o.determineNewCaretPosition.call(r, {
                                    begin: 0,
                                    end: 0
                                }, !1).begin; else {
                                    for (a = e; a < t; a++) delete s.validPositions[a];
                                    n = e;
                                }
                                var p = new c.Event("keypress");
                                for (a = e; a < t; a++) {
                                    p.keyCode = d[a].toString().charCodeAt(0), r.ignorable = !1;
                                    var h = l.EventHandlers.keypressEvent.call(r, p, !0, !1, !1, n);
                                    !1 !== h && void 0 !== h && (n = h.forwardPosition);
                                }
                                u.skipOptionalPartCharacter = f;
                            }
                            function v(e, t, i) {
                                var a = this, r = this.maskset, l = this.dependencyLib;
                                if (void 0 === e) for (e = t - 1; e > 0 && !r.validPositions[e]; e--) ;
                                for (var s = e; s < t; s++) if (void 0 === r.validPositions[s] && !o.isMask.call(a, s, !1)) if (0 == s ? n.getTest.call(a, s) : r.validPositions[s - 1]) {
                                    var u = n.getTests.call(a, s).slice();
                                    "" === u[u.length - 1].match.def && u.pop();
                                    var c, f = n.determineTestTemplate.call(a, s, u);
                                    if (f && (!0 !== f.match.jit || "master" === f.match.newBlockMarker && (c = r.validPositions[s + 1]) && !0 === c.match.optionalQuantifier) && ((f = l.extend({}, f, {
                                        input: n.getPlaceholder.call(a, s, f.match, !0) || f.match.def
                                    })).generatedInput = !0, m.call(a, s, f, !0), !0 !== i)) {
                                        var p = r.validPositions[t].input;
                                        return r.validPositions[t] = void 0, d.call(a, t, p, !0, !0);
                                    }
                                }
                            }
                            function m(e, t, i, a) {
                                var r = this, l = this.maskset, s = this.opts, u = this.dependencyLib;
                                function c(e, t, i) {
                                    var a = t[e];
                                    if (void 0 !== a && !0 === a.match.static && !0 !== a.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                                        var n = i.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = i.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                                        return n && r;
                                    }
                                    return !1;
                                }
                                var f = 0, h = void 0 !== e.begin ? e.begin : e, v = void 0 !== e.end ? e.end : e, m = !0;
                                if (e.begin > e.end && (h = e.end, v = e.begin), a = void 0 !== a ? a : h, h !== v || s.insertMode && void 0 !== l.validPositions[a] && void 0 === i || void 0 === t || t.match.optionalQuantifier || t.match.optionality) {
                                    var g, k = u.extend(!0, {}, l.validPositions), y = o.getLastValidPosition.call(r, void 0, !0);
                                    for (l.p = h, g = y; g >= h; g--) delete l.validPositions[g], void 0 === t && delete l.tests[g + 1];
                                    var b, x, P = a, E = P;
                                    for (t && (l.validPositions[a] = u.extend(!0, {}, t), E++, P++), g = t ? v : v - 1; g <= y; g++) {
                                        if (void 0 !== (b = k[g]) && !0 !== b.generatedInput && (g >= v || g >= h && c(g, k, {
                                            begin: h,
                                            end: v
                                        }))) {
                                            for (;"" !== n.getTest.call(r, E).match.def; ) {
                                                if (!1 !== (x = p.call(r, E, b, s)) || "+" === b.match.def) {
                                                    "+" === b.match.def && o.getBuffer.call(r, !0);
                                                    var S = d.call(r, E, b.input, "+" !== b.match.def, !0);
                                                    if (m = !1 !== S, P = (S.pos || E) + 1, !m && x) break;
                                                } else m = !1;
                                                if (m) {
                                                    void 0 === t && b.match.static && g === e.begin && f++;
                                                    break;
                                                }
                                                if (!m && o.getBuffer.call(r), E > l.maskLength) break;
                                                E++;
                                            }
                                            "" == n.getTest.call(r, E).match.def && (m = !1), E = P;
                                        }
                                        if (!m) break;
                                    }
                                    if (!m) return l.validPositions = u.extend(!0, {}, k), o.resetMaskSet.call(r, !0), 
                                    !1;
                                } else t && n.getTest.call(r, a).match.cd === t.match.cd && (l.validPositions[a] = u.extend(!0, {}, t));
                                return o.resetMaskSet.call(r, !0), f;
                            }
                        },
                        5581: function(e) {
                            e.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"Z":90,"CONTROL":17,"PAUSE/BREAK":19,"WINDOWS_LEFT":91,"WINDOWS_RIGHT":92,"KEY_229":229}');
                        }
                    }, t = {};
                    function i(a) {
                        var n = t[a];
                        if (void 0 !== n) return n.exports;
                        var r = t[a] = {
                            exports: {}
                        };
                        return e[a](r, r.exports, i), r.exports;
                    }
                    var a = {};
                    return function() {
                        var e, t = a;
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.default = void 0, i(3851), i(219), i(207), i(5296);
                        var n = ((e = i(2394)) && e.__esModule ? e : {
                            default: e
                        }).default;
                        t.default = n;
                    }(), a;
                }();
            }));
        },
        197: module => {
            (function(factory) {
                if (true && module.exports) module.exports = factory(); else window.intlTelInput = factory();
            })((function(undefined) {
                "use strict";
                return function() {
                    var allCountries = [ [ "Afghanistan (‫افغانستان‬‎)", "af", "93" ], [ "Albania (Shqipëri)", "al", "355" ], [ "Algeria (‫الجزائر‬‎)", "dz", "213" ], [ "American Samoa", "as", "1", 5, [ "684" ] ], [ "Andorra", "ad", "376" ], [ "Angola", "ao", "244" ], [ "Anguilla", "ai", "1", 6, [ "264" ] ], [ "Antigua and Barbuda", "ag", "1", 7, [ "268" ] ], [ "Argentina", "ar", "54" ], [ "Armenia (Հայաստան)", "am", "374" ], [ "Aruba", "aw", "297" ], [ "Ascension Island", "ac", "247" ], [ "Australia", "au", "61", 0 ], [ "Austria (Österreich)", "at", "43" ], [ "Azerbaijan (Azərbaycan)", "az", "994" ], [ "Bahamas", "bs", "1", 8, [ "242" ] ], [ "Bahrain (‫البحرين‬‎)", "bh", "973" ], [ "Bangladesh (বাংলাদেশ)", "bd", "880" ], [ "Barbados", "bb", "1", 9, [ "246" ] ], [ "Belarus (Беларусь)", "by", "375" ], [ "Belgium (België)", "be", "32" ], [ "Belize", "bz", "501" ], [ "Benin (Bénin)", "bj", "229" ], [ "Bermuda", "bm", "1", 10, [ "441" ] ], [ "Bhutan (འབྲུག)", "bt", "975" ], [ "Bolivia", "bo", "591" ], [ "Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387" ], [ "Botswana", "bw", "267" ], [ "Brazil (Brasil)", "br", "55" ], [ "British Indian Ocean Territory", "io", "246" ], [ "British Virgin Islands", "vg", "1", 11, [ "284" ] ], [ "Brunei", "bn", "673" ], [ "Bulgaria (България)", "bg", "359" ], [ "Burkina Faso", "bf", "226" ], [ "Burundi (Uburundi)", "bi", "257" ], [ "Cambodia (កម្ពុជា)", "kh", "855" ], [ "Cameroon (Cameroun)", "cm", "237" ], [ "Canada", "ca", "1", 1, [ "204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905" ] ], [ "Cape Verde (Kabu Verdi)", "cv", "238" ], [ "Caribbean Netherlands", "bq", "599", 1, [ "3", "4", "7" ] ], [ "Cayman Islands", "ky", "1", 12, [ "345" ] ], [ "Central African Republic (République centrafricaine)", "cf", "236" ], [ "Chad (Tchad)", "td", "235" ], [ "Chile", "cl", "56" ], [ "China (中国)", "cn", "86" ], [ "Christmas Island", "cx", "61", 2, [ "89164" ] ], [ "Cocos (Keeling) Islands", "cc", "61", 1, [ "89162" ] ], [ "Colombia", "co", "57" ], [ "Comoros (‫جزر القمر‬‎)", "km", "269" ], [ "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243" ], [ "Congo (Republic) (Congo-Brazzaville)", "cg", "242" ], [ "Cook Islands", "ck", "682" ], [ "Costa Rica", "cr", "506" ], [ "Côte d’Ivoire", "ci", "225" ], [ "Croatia (Hrvatska)", "hr", "385" ], [ "Cuba", "cu", "53" ], [ "Curaçao", "cw", "599", 0 ], [ "Cyprus (Κύπρος)", "cy", "357" ], [ "Czech Republic (Česká republika)", "cz", "420" ], [ "Denmark (Danmark)", "dk", "45" ], [ "Djibouti", "dj", "253" ], [ "Dominica", "dm", "1", 13, [ "767" ] ], [ "Dominican Republic (República Dominicana)", "do", "1", 2, [ "809", "829", "849" ] ], [ "Ecuador", "ec", "593" ], [ "Egypt (‫مصر‬‎)", "eg", "20" ], [ "El Salvador", "sv", "503" ], [ "Equatorial Guinea (Guinea Ecuatorial)", "gq", "240" ], [ "Eritrea", "er", "291" ], [ "Estonia (Eesti)", "ee", "372" ], [ "Eswatini", "sz", "268" ], [ "Ethiopia", "et", "251" ], [ "Falkland Islands (Islas Malvinas)", "fk", "500" ], [ "Faroe Islands (Føroyar)", "fo", "298" ], [ "Fiji", "fj", "679" ], [ "Finland (Suomi)", "fi", "358", 0 ], [ "France", "fr", "33" ], [ "French Guiana (Guyane française)", "gf", "594" ], [ "French Polynesia (Polynésie française)", "pf", "689" ], [ "Gabon", "ga", "241" ], [ "Gambia", "gm", "220" ], [ "Georgia (საქართველო)", "ge", "995" ], [ "Germany (Deutschland)", "de", "49" ], [ "Ghana (Gaana)", "gh", "233" ], [ "Gibraltar", "gi", "350" ], [ "Greece (Ελλάδα)", "gr", "30" ], [ "Greenland (Kalaallit Nunaat)", "gl", "299" ], [ "Grenada", "gd", "1", 14, [ "473" ] ], [ "Guadeloupe", "gp", "590", 0 ], [ "Guam", "gu", "1", 15, [ "671" ] ], [ "Guatemala", "gt", "502" ], [ "Guernsey", "gg", "44", 1, [ "1481", "7781", "7839", "7911" ] ], [ "Guinea (Guinée)", "gn", "224" ], [ "Guinea-Bissau (Guiné Bissau)", "gw", "245" ], [ "Guyana", "gy", "592" ], [ "Haiti", "ht", "509" ], [ "Honduras", "hn", "504" ], [ "Hong Kong (香港)", "hk", "852" ], [ "Hungary (Magyarország)", "hu", "36" ], [ "Iceland (Ísland)", "is", "354" ], [ "India (भारत)", "in", "91" ], [ "Indonesia", "id", "62" ], [ "Iran (‫ایران‬‎)", "ir", "98" ], [ "Iraq (‫العراق‬‎)", "iq", "964" ], [ "Ireland", "ie", "353" ], [ "Isle of Man", "im", "44", 2, [ "1624", "74576", "7524", "7924", "7624" ] ], [ "Israel (‫ישראל‬‎)", "il", "972" ], [ "Italy (Italia)", "it", "39", 0 ], [ "Jamaica", "jm", "1", 4, [ "876", "658" ] ], [ "Japan (日本)", "jp", "81" ], [ "Jersey", "je", "44", 3, [ "1534", "7509", "7700", "7797", "7829", "7937" ] ], [ "Jordan (‫الأردن‬‎)", "jo", "962" ], [ "Kazakhstan (Казахстан)", "kz", "7", 1, [ "33", "7" ] ], [ "Kenya", "ke", "254" ], [ "Kiribati", "ki", "686" ], [ "Kosovo", "xk", "383" ], [ "Kuwait (‫الكويت‬‎)", "kw", "965" ], [ "Kyrgyzstan (Кыргызстан)", "kg", "996" ], [ "Laos (ລາວ)", "la", "856" ], [ "Latvia (Latvija)", "lv", "371" ], [ "Lebanon (‫لبنان‬‎)", "lb", "961" ], [ "Lesotho", "ls", "266" ], [ "Liberia", "lr", "231" ], [ "Libya (‫ليبيا‬‎)", "ly", "218" ], [ "Liechtenstein", "li", "423" ], [ "Lithuania (Lietuva)", "lt", "370" ], [ "Luxembourg", "lu", "352" ], [ "Macau (澳門)", "mo", "853" ], [ "North Macedonia (Македонија)", "mk", "389" ], [ "Madagascar (Madagasikara)", "mg", "261" ], [ "Malawi", "mw", "265" ], [ "Malaysia", "my", "60" ], [ "Maldives", "mv", "960" ], [ "Mali", "ml", "223" ], [ "Malta", "mt", "356" ], [ "Marshall Islands", "mh", "692" ], [ "Martinique", "mq", "596" ], [ "Mauritania (‫موريتانيا‬‎)", "mr", "222" ], [ "Mauritius (Moris)", "mu", "230" ], [ "Mayotte", "yt", "262", 1, [ "269", "639" ] ], [ "Mexico (México)", "mx", "52" ], [ "Micronesia", "fm", "691" ], [ "Moldova (Republica Moldova)", "md", "373" ], [ "Monaco", "mc", "377" ], [ "Mongolia (Монгол)", "mn", "976" ], [ "Montenegro (Crna Gora)", "me", "382" ], [ "Montserrat", "ms", "1", 16, [ "664" ] ], [ "Morocco (‫المغرب‬‎)", "ma", "212", 0 ], [ "Mozambique (Moçambique)", "mz", "258" ], [ "Myanmar (Burma) (မြန်မာ)", "mm", "95" ], [ "Namibia (Namibië)", "na", "264" ], [ "Nauru", "nr", "674" ], [ "Nepal (नेपाल)", "np", "977" ], [ "Netherlands (Nederland)", "nl", "31" ], [ "New Caledonia (Nouvelle-Calédonie)", "nc", "687" ], [ "New Zealand", "nz", "64" ], [ "Nicaragua", "ni", "505" ], [ "Niger (Nijar)", "ne", "227" ], [ "Nigeria", "ng", "234" ], [ "Niue", "nu", "683" ], [ "Norfolk Island", "nf", "672" ], [ "North Korea (조선 민주주의 인민 공화국)", "kp", "850" ], [ "Northern Mariana Islands", "mp", "1", 17, [ "670" ] ], [ "Norway (Norge)", "no", "47", 0 ], [ "Oman (‫عُمان‬‎)", "om", "968" ], [ "Pakistan (‫پاکستان‬‎)", "pk", "92" ], [ "Palau", "pw", "680" ], [ "Palestine (‫فلسطين‬‎)", "ps", "970" ], [ "Panama (Panamá)", "pa", "507" ], [ "Papua New Guinea", "pg", "675" ], [ "Paraguay", "py", "595" ], [ "Peru (Perú)", "pe", "51" ], [ "Philippines", "ph", "63" ], [ "Poland (Polska)", "pl", "48" ], [ "Portugal", "pt", "351" ], [ "Puerto Rico", "pr", "1", 3, [ "787", "939" ] ], [ "Qatar (‫قطر‬‎)", "qa", "974" ], [ "Réunion (La Réunion)", "re", "262", 0 ], [ "Romania (România)", "ro", "40" ], [ "Russia (Россия)", "ru", "7", 0 ], [ "Rwanda", "rw", "250" ], [ "Saint Barthélemy", "bl", "590", 1 ], [ "Saint Helena", "sh", "290" ], [ "Saint Kitts and Nevis", "kn", "1", 18, [ "869" ] ], [ "Saint Lucia", "lc", "1", 19, [ "758" ] ], [ "Saint Martin (Saint-Martin (partie française))", "mf", "590", 2 ], [ "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508" ], [ "Saint Vincent and the Grenadines", "vc", "1", 20, [ "784" ] ], [ "Samoa", "ws", "685" ], [ "San Marino", "sm", "378" ], [ "São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239" ], [ "Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966" ], [ "Senegal (Sénégal)", "sn", "221" ], [ "Serbia (Србија)", "rs", "381" ], [ "Seychelles", "sc", "248" ], [ "Sierra Leone", "sl", "232" ], [ "Singapore", "sg", "65" ], [ "Sint Maarten", "sx", "1", 21, [ "721" ] ], [ "Slovakia (Slovensko)", "sk", "421" ], [ "Slovenia (Slovenija)", "si", "386" ], [ "Solomon Islands", "sb", "677" ], [ "Somalia (Soomaaliya)", "so", "252" ], [ "South Africa", "za", "27" ], [ "South Korea (대한민국)", "kr", "82" ], [ "South Sudan (‫جنوب السودان‬‎)", "ss", "211" ], [ "Spain (España)", "es", "34" ], [ "Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94" ], [ "Sudan (‫السودان‬‎)", "sd", "249" ], [ "Suriname", "sr", "597" ], [ "Svalbard and Jan Mayen", "sj", "47", 1, [ "79" ] ], [ "Sweden (Sverige)", "se", "46" ], [ "Switzerland (Schweiz)", "ch", "41" ], [ "Syria (‫سوريا‬‎)", "sy", "963" ], [ "Taiwan (台灣)", "tw", "886" ], [ "Tajikistan", "tj", "992" ], [ "Tanzania", "tz", "255" ], [ "Thailand (ไทย)", "th", "66" ], [ "Timor-Leste", "tl", "670" ], [ "Togo", "tg", "228" ], [ "Tokelau", "tk", "690" ], [ "Tonga", "to", "676" ], [ "Trinidad and Tobago", "tt", "1", 22, [ "868" ] ], [ "Tunisia (‫تونس‬‎)", "tn", "216" ], [ "Turkey (Türkiye)", "tr", "90" ], [ "Turkmenistan", "tm", "993" ], [ "Turks and Caicos Islands", "tc", "1", 23, [ "649" ] ], [ "Tuvalu", "tv", "688" ], [ "U.S. Virgin Islands", "vi", "1", 24, [ "340" ] ], [ "Uganda", "ug", "256" ], [ "Ukraine (Україна)", "ua", "380" ], [ "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971" ], [ "United Kingdom", "gb", "44", 0 ], [ "United States", "us", "1", 0 ], [ "Uruguay", "uy", "598" ], [ "Uzbekistan (Oʻzbekiston)", "uz", "998" ], [ "Vanuatu", "vu", "678" ], [ "Vatican City (Città del Vaticano)", "va", "39", 1, [ "06698" ] ], [ "Venezuela", "ve", "58" ], [ "Vietnam (Việt Nam)", "vn", "84" ], [ "Wallis and Futuna (Wallis-et-Futuna)", "wf", "681" ], [ "Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, [ "5288", "5289" ] ], [ "Yemen (‫اليمن‬‎)", "ye", "967" ], [ "Zambia", "zm", "260" ], [ "Zimbabwe", "zw", "263" ], [ "Åland Islands", "ax", "358", 1, [ "18" ] ] ];
                    for (var i = 0; i < allCountries.length; i++) {
                        var c = allCountries[i];
                        allCountries[i] = {
                            name: c[0],
                            iso2: c[1],
                            dialCode: c[2],
                            priority: c[3] || 0,
                            areaCodes: c[4] || null
                        };
                    }
                    "use strict";
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                    }
                    function _defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];
                            descriptor.enumerable = descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor) descriptor.writable = true;
                            Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }
                    function _createClass(Constructor, protoProps, staticProps) {
                        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                        if (staticProps) _defineProperties(Constructor, staticProps);
                        return Constructor;
                    }
                    var intlTelInputGlobals = {
                        getInstance: function getInstance(input) {
                            var id = input.getAttribute("data-intl-tel-input-id");
                            return window.intlTelInputGlobals.instances[id];
                        },
                        instances: {},
                        documentReady: function documentReady() {
                            return "complete" === document.readyState;
                        }
                    };
                    if ("object" === typeof window) window.intlTelInputGlobals = intlTelInputGlobals;
                    var id = 0;
                    var defaults = {
                        allowDropdown: true,
                        autoHideDialCode: true,
                        autoPlaceholder: "polite",
                        customContainer: "",
                        customPlaceholder: null,
                        dropdownContainer: null,
                        excludeCountries: [],
                        formatOnDisplay: true,
                        geoIpLookup: null,
                        hiddenInput: "",
                        initialCountry: "",
                        localizedCountries: null,
                        nationalMode: true,
                        onlyCountries: [],
                        placeholderNumberType: "MOBILE",
                        preferredCountries: [ "us", "gb" ],
                        separateDialCode: false,
                        utilsScript: ""
                    };
                    var regionlessNanpNumbers = [ "800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889" ];
                    var forEachProp = function forEachProp(obj, callback) {
                        var keys = Object.keys(obj);
                        for (var i = 0; i < keys.length; i++) callback(keys[i], obj[keys[i]]);
                    };
                    var forEachInstance = function forEachInstance(method) {
                        forEachProp(window.intlTelInputGlobals.instances, (function(key) {
                            window.intlTelInputGlobals.instances[key][method]();
                        }));
                    };
                    var Iti = function() {
                        function Iti(input, options) {
                            var _this = this;
                            _classCallCheck(this, Iti);
                            this.id = id++;
                            this.telInput = input;
                            this.activeItem = null;
                            this.highlightedItem = null;
                            var customOptions = options || {};
                            this.options = {};
                            forEachProp(defaults, (function(key, value) {
                                _this.options[key] = customOptions.hasOwnProperty(key) ? customOptions[key] : value;
                            }));
                            this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
                        }
                        _createClass(Iti, [ {
                            key: "_init",
                            value: function _init() {
                                var _this2 = this;
                                if (this.options.nationalMode) this.options.autoHideDialCode = false;
                                if (this.options.separateDialCode) this.options.autoHideDialCode = this.options.nationalMode = false;
                                this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                                if (this.isMobile) {
                                    document.body.classList.add("iti-mobile");
                                    if (!this.options.dropdownContainer) this.options.dropdownContainer = document.body;
                                }
                                if ("undefined" !== typeof Promise) {
                                    var autoCountryPromise = new Promise((function(resolve, reject) {
                                        _this2.resolveAutoCountryPromise = resolve;
                                        _this2.rejectAutoCountryPromise = reject;
                                    }));
                                    var utilsScriptPromise = new Promise((function(resolve, reject) {
                                        _this2.resolveUtilsScriptPromise = resolve;
                                        _this2.rejectUtilsScriptPromise = reject;
                                    }));
                                    this.promise = Promise.all([ autoCountryPromise, utilsScriptPromise ]);
                                } else {
                                    this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function() {};
                                    this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function() {};
                                }
                                this.selectedCountryData = {};
                                this._processCountryData();
                                this._generateMarkup();
                                this._setInitialState();
                                this._initListeners();
                                this._initRequests();
                            }
                        }, {
                            key: "_processCountryData",
                            value: function _processCountryData() {
                                this._processAllCountries();
                                this._processCountryCodes();
                                this._processPreferredCountries();
                                if (this.options.localizedCountries) this._translateCountriesByLocale();
                                if (this.options.onlyCountries.length || this.options.localizedCountries) this.countries.sort(this._countryNameSort);
                            }
                        }, {
                            key: "_addCountryCode",
                            value: function _addCountryCode(iso2, countryCode, priority) {
                                if (countryCode.length > this.countryCodeMaxLen) this.countryCodeMaxLen = countryCode.length;
                                if (!this.countryCodes.hasOwnProperty(countryCode)) this.countryCodes[countryCode] = [];
                                for (var i = 0; i < this.countryCodes[countryCode].length; i++) if (this.countryCodes[countryCode][i] === iso2) return;
                                var index = priority !== undefined ? priority : this.countryCodes[countryCode].length;
                                this.countryCodes[countryCode][index] = iso2;
                            }
                        }, {
                            key: "_processAllCountries",
                            value: function _processAllCountries() {
                                if (this.options.onlyCountries.length) {
                                    var lowerCaseOnlyCountries = this.options.onlyCountries.map((function(country) {
                                        return country.toLowerCase();
                                    }));
                                    this.countries = allCountries.filter((function(country) {
                                        return lowerCaseOnlyCountries.indexOf(country.iso2) > -1;
                                    }));
                                } else if (this.options.excludeCountries.length) {
                                    var lowerCaseExcludeCountries = this.options.excludeCountries.map((function(country) {
                                        return country.toLowerCase();
                                    }));
                                    this.countries = allCountries.filter((function(country) {
                                        return -1 === lowerCaseExcludeCountries.indexOf(country.iso2);
                                    }));
                                } else this.countries = allCountries;
                            }
                        }, {
                            key: "_translateCountriesByLocale",
                            value: function _translateCountriesByLocale() {
                                for (var i = 0; i < this.countries.length; i++) {
                                    var iso = this.countries[i].iso2.toLowerCase();
                                    if (this.options.localizedCountries.hasOwnProperty(iso)) this.countries[i].name = this.options.localizedCountries[iso];
                                }
                            }
                        }, {
                            key: "_countryNameSort",
                            value: function _countryNameSort(a, b) {
                                return a.name.localeCompare(b.name);
                            }
                        }, {
                            key: "_processCountryCodes",
                            value: function _processCountryCodes() {
                                this.countryCodeMaxLen = 0;
                                this.dialCodes = {};
                                this.countryCodes = {};
                                for (var i = 0; i < this.countries.length; i++) {
                                    var c = this.countries[i];
                                    if (!this.dialCodes[c.dialCode]) this.dialCodes[c.dialCode] = true;
                                    this._addCountryCode(c.iso2, c.dialCode, c.priority);
                                }
                                for (var _i = 0; _i < this.countries.length; _i++) {
                                    var _c = this.countries[_i];
                                    if (_c.areaCodes) {
                                        var rootCountryCode = this.countryCodes[_c.dialCode][0];
                                        for (var j = 0; j < _c.areaCodes.length; j++) {
                                            var areaCode = _c.areaCodes[j];
                                            for (var k = 1; k < areaCode.length; k++) {
                                                var partialDialCode = _c.dialCode + areaCode.substr(0, k);
                                                this._addCountryCode(rootCountryCode, partialDialCode);
                                                this._addCountryCode(_c.iso2, partialDialCode);
                                            }
                                            this._addCountryCode(_c.iso2, _c.dialCode + areaCode);
                                        }
                                    }
                                }
                            }
                        }, {
                            key: "_processPreferredCountries",
                            value: function _processPreferredCountries() {
                                this.preferredCountries = [];
                                for (var i = 0; i < this.options.preferredCountries.length; i++) {
                                    var countryCode = this.options.preferredCountries[i].toLowerCase();
                                    var countryData = this._getCountryData(countryCode, false, true);
                                    if (countryData) this.preferredCountries.push(countryData);
                                }
                            }
                        }, {
                            key: "_createEl",
                            value: function _createEl(name, attrs, container) {
                                var el = document.createElement(name);
                                if (attrs) forEachProp(attrs, (function(key, value) {
                                    return el.setAttribute(key, value);
                                }));
                                if (container) container.appendChild(el);
                                return el;
                            }
                        }, {
                            key: "_generateMarkup",
                            value: function _generateMarkup() {
                                if (!this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete"))) this.telInput.setAttribute("autocomplete", "off");
                                var parentClass = "iti";
                                if (this.options.allowDropdown) parentClass += " iti--allow-dropdown";
                                if (this.options.separateDialCode) parentClass += " iti--separate-dial-code";
                                if (this.options.customContainer) {
                                    parentClass += " ";
                                    parentClass += this.options.customContainer;
                                }
                                var wrapper = this._createEl("div", {
                                    class: parentClass
                                });
                                this.telInput.parentNode.insertBefore(wrapper, this.telInput);
                                this.flagsContainer = this._createEl("div", {
                                    class: "iti__flag-container"
                                }, wrapper);
                                wrapper.appendChild(this.telInput);
                                this.selectedFlag = this._createEl("div", {
                                    class: "iti__selected-flag",
                                    role: "combobox",
                                    "aria-controls": "iti-".concat(this.id, "__country-listbox"),
                                    "aria-owns": "iti-".concat(this.id, "__country-listbox"),
                                    "aria-expanded": "false"
                                }, this.flagsContainer);
                                this.selectedFlagInner = this._createEl("div", {
                                    class: "iti__flag"
                                }, this.selectedFlag);
                                if (this.options.separateDialCode) this.selectedDialCode = this._createEl("div", {
                                    class: "iti__selected-dial-code"
                                }, this.selectedFlag);
                                if (this.options.allowDropdown) {
                                    this.selectedFlag.setAttribute("tabindex", "0");
                                    this.dropdownArrow = this._createEl("div", {
                                        class: "iti__arrow"
                                    }, this.selectedFlag);
                                    this.countryList = this._createEl("ul", {
                                        class: "iti__country-list iti__hide",
                                        id: "iti-".concat(this.id, "__country-listbox"),
                                        role: "listbox",
                                        "aria-label": "List of countries"
                                    });
                                    if (this.preferredCountries.length) {
                                        this._appendListItems(this.preferredCountries, "iti__preferred", true);
                                        this._createEl("li", {
                                            class: "iti__divider",
                                            role: "separator",
                                            "aria-disabled": "true"
                                        }, this.countryList);
                                    }
                                    this._appendListItems(this.countries, "iti__standard");
                                    if (this.options.dropdownContainer) {
                                        this.dropdown = this._createEl("div", {
                                            class: "iti iti--container"
                                        });
                                        this.dropdown.appendChild(this.countryList);
                                    } else this.flagsContainer.appendChild(this.countryList);
                                }
                                if (this.options.hiddenInput) {
                                    var hiddenInputName = this.options.hiddenInput;
                                    var name = this.telInput.getAttribute("name");
                                    if (name) {
                                        var i = name.lastIndexOf("[");
                                        if (-1 !== i) hiddenInputName = "".concat(name.substr(0, i), "[").concat(hiddenInputName, "]");
                                    }
                                    this.hiddenInput = this._createEl("input", {
                                        type: "hidden",
                                        name: hiddenInputName
                                    });
                                    wrapper.appendChild(this.hiddenInput);
                                }
                            }
                        }, {
                            key: "_appendListItems",
                            value: function _appendListItems(countries, className, preferred) {
                                var tmp = "";
                                for (var i = 0; i < countries.length; i++) {
                                    var c = countries[i];
                                    var idSuffix = preferred ? "-preferred" : "";
                                    tmp += "<li class='iti__country ".concat(className, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(c.iso2).concat(idSuffix, "' role='option' data-dial-code='").concat(c.dialCode, "' data-country-code='").concat(c.iso2, "' aria-selected='false'>");
                                    tmp += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(c.iso2, "'></div></div>");
                                    tmp += "<span class='iti__country-name'>".concat(c.name, "</span>");
                                    tmp += "<span class='iti__dial-code'>+".concat(c.dialCode, "</span>");
                                    tmp += "</li>";
                                }
                                this.countryList.insertAdjacentHTML("beforeend", tmp);
                            }
                        }, {
                            key: "_setInitialState",
                            value: function _setInitialState() {
                                var attributeValue = this.telInput.getAttribute("value");
                                var inputValue = this.telInput.value;
                                var useAttribute = attributeValue && "+" === attributeValue.charAt(0) && (!inputValue || "+" !== inputValue.charAt(0));
                                var val = useAttribute ? attributeValue : inputValue;
                                var dialCode = this._getDialCode(val);
                                var isRegionlessNanp = this._isRegionlessNanp(val);
                                var _this$options = this.options, initialCountry = _this$options.initialCountry, nationalMode = _this$options.nationalMode, autoHideDialCode = _this$options.autoHideDialCode, separateDialCode = _this$options.separateDialCode;
                                if (dialCode && !isRegionlessNanp) this._updateFlagFromNumber(val); else if ("auto" !== initialCountry) {
                                    if (initialCountry) this._setFlag(initialCountry.toLowerCase()); else if (dialCode && isRegionlessNanp) this._setFlag("us"); else {
                                        this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2;
                                        if (!val) this._setFlag(this.defaultCountry);
                                    }
                                    if (!val && !nationalMode && !autoHideDialCode && !separateDialCode) this.telInput.value = "+".concat(this.selectedCountryData.dialCode);
                                }
                                if (val) this._updateValFromNumber(val);
                            }
                        }, {
                            key: "_initListeners",
                            value: function _initListeners() {
                                this._initKeyListeners();
                                if (this.options.autoHideDialCode) this._initBlurListeners();
                                if (this.options.allowDropdown) this._initDropdownListeners();
                                if (this.hiddenInput) this._initHiddenInputListener();
                            }
                        }, {
                            key: "_initHiddenInputListener",
                            value: function _initHiddenInputListener() {
                                var _this3 = this;
                                this._handleHiddenInputSubmit = function() {
                                    _this3.hiddenInput.value = _this3.getNumber();
                                };
                                if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
                            }
                        }, {
                            key: "_getClosestLabel",
                            value: function _getClosestLabel() {
                                var el = this.telInput;
                                while (el && "LABEL" !== el.tagName) el = el.parentNode;
                                return el;
                            }
                        }, {
                            key: "_initDropdownListeners",
                            value: function _initDropdownListeners() {
                                var _this4 = this;
                                this._handleLabelClick = function(e) {
                                    if (_this4.countryList.classList.contains("iti__hide")) _this4.telInput.focus(); else e.preventDefault();
                                };
                                var label = this._getClosestLabel();
                                if (label) label.addEventListener("click", this._handleLabelClick);
                                this._handleClickSelectedFlag = function() {
                                    if (_this4.countryList.classList.contains("iti__hide") && !_this4.telInput.disabled && !_this4.telInput.readOnly) _this4._showDropdown();
                                };
                                this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag);
                                this._handleFlagsContainerKeydown = function(e) {
                                    var isDropdownHidden = _this4.countryList.classList.contains("iti__hide");
                                    if (isDropdownHidden && -1 !== [ "ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter" ].indexOf(e.key)) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        _this4._showDropdown();
                                    }
                                    if ("Tab" === e.key) _this4._closeDropdown();
                                };
                                this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
                            }
                        }, {
                            key: "_initRequests",
                            value: function _initRequests() {
                                var _this5 = this;
                                if (this.options.utilsScript && !window.intlTelInputUtils) if (window.intlTelInputGlobals.documentReady()) window.intlTelInputGlobals.loadUtils(this.options.utilsScript); else window.addEventListener("load", (function() {
                                    window.intlTelInputGlobals.loadUtils(_this5.options.utilsScript);
                                })); else this.resolveUtilsScriptPromise();
                                if ("auto" === this.options.initialCountry) this._loadAutoCountry(); else this.resolveAutoCountryPromise();
                            }
                        }, {
                            key: "_loadAutoCountry",
                            value: function _loadAutoCountry() {
                                if (window.intlTelInputGlobals.autoCountry) this.handleAutoCountry(); else if (!window.intlTelInputGlobals.startedLoadingAutoCountry) {
                                    window.intlTelInputGlobals.startedLoadingAutoCountry = true;
                                    if ("function" === typeof this.options.geoIpLookup) this.options.geoIpLookup((function(countryCode) {
                                        window.intlTelInputGlobals.autoCountry = countryCode.toLowerCase();
                                        setTimeout((function() {
                                            return forEachInstance("handleAutoCountry");
                                        }));
                                    }), (function() {
                                        return forEachInstance("rejectAutoCountryPromise");
                                    }));
                                }
                            }
                        }, {
                            key: "_initKeyListeners",
                            value: function _initKeyListeners() {
                                var _this6 = this;
                                this._handleKeyupEvent = function() {
                                    if (_this6._updateFlagFromNumber(_this6.telInput.value)) _this6._triggerCountryChange();
                                };
                                this.telInput.addEventListener("keyup", this._handleKeyupEvent);
                                this._handleClipboardEvent = function() {
                                    setTimeout(_this6._handleKeyupEvent);
                                };
                                this.telInput.addEventListener("cut", this._handleClipboardEvent);
                                this.telInput.addEventListener("paste", this._handleClipboardEvent);
                            }
                        }, {
                            key: "_cap",
                            value: function _cap(number) {
                                var max = this.telInput.getAttribute("maxlength");
                                return max && number.length > max ? number.substr(0, max) : number;
                            }
                        }, {
                            key: "_initBlurListeners",
                            value: function _initBlurListeners() {
                                var _this7 = this;
                                this._handleSubmitOrBlurEvent = function() {
                                    _this7._removeEmptyDialCode();
                                };
                                if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent);
                                this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
                            }
                        }, {
                            key: "_removeEmptyDialCode",
                            value: function _removeEmptyDialCode() {
                                if ("+" === this.telInput.value.charAt(0)) {
                                    var numeric = this._getNumeric(this.telInput.value);
                                    if (!numeric || this.selectedCountryData.dialCode === numeric) this.telInput.value = "";
                                }
                            }
                        }, {
                            key: "_getNumeric",
                            value: function _getNumeric(s) {
                                return s.replace(/\D/g, "");
                            }
                        }, {
                            key: "_trigger",
                            value: function _trigger(name) {
                                var e = document.createEvent("Event");
                                e.initEvent(name, true, true);
                                this.telInput.dispatchEvent(e);
                            }
                        }, {
                            key: "_showDropdown",
                            value: function _showDropdown() {
                                this.countryList.classList.remove("iti__hide");
                                this.selectedFlag.setAttribute("aria-expanded", "true");
                                this._setDropdownPosition();
                                if (this.activeItem) {
                                    this._highlightListItem(this.activeItem, false);
                                    this._scrollTo(this.activeItem, true);
                                }
                                this._bindDropdownListeners();
                                this.dropdownArrow.classList.add("iti__arrow--up");
                                this._trigger("open:countrydropdown");
                            }
                        }, {
                            key: "_toggleClass",
                            value: function _toggleClass(el, className, shouldHaveClass) {
                                if (shouldHaveClass && !el.classList.contains(className)) el.classList.add(className); else if (!shouldHaveClass && el.classList.contains(className)) el.classList.remove(className);
                            }
                        }, {
                            key: "_setDropdownPosition",
                            value: function _setDropdownPosition() {
                                var _this8 = this;
                                if (this.options.dropdownContainer) this.options.dropdownContainer.appendChild(this.dropdown);
                                if (!this.isMobile) {
                                    var pos = this.telInput.getBoundingClientRect();
                                    var windowTop = window.pageYOffset || document.documentElement.scrollTop;
                                    var inputTop = pos.top + windowTop;
                                    var dropdownHeight = this.countryList.offsetHeight;
                                    var dropdownFitsBelow = inputTop + this.telInput.offsetHeight + dropdownHeight < windowTop + window.innerHeight;
                                    var dropdownFitsAbove = inputTop - dropdownHeight > windowTop;
                                    this._toggleClass(this.countryList, "iti__country-list--dropup", !dropdownFitsBelow && dropdownFitsAbove);
                                    if (this.options.dropdownContainer) {
                                        var extraTop = !dropdownFitsBelow && dropdownFitsAbove ? 0 : this.telInput.offsetHeight;
                                        this.dropdown.style.top = "".concat(inputTop + extraTop, "px");
                                        this.dropdown.style.left = "".concat(pos.left + document.body.scrollLeft, "px");
                                        this._handleWindowScroll = function() {
                                            return _this8._closeDropdown();
                                        };
                                        window.addEventListener("scroll", this._handleWindowScroll);
                                    }
                                }
                            }
                        }, {
                            key: "_getClosestListItem",
                            value: function _getClosestListItem(target) {
                                var el = target;
                                while (el && el !== this.countryList && !el.classList.contains("iti__country")) el = el.parentNode;
                                return el === this.countryList ? null : el;
                            }
                        }, {
                            key: "_bindDropdownListeners",
                            value: function _bindDropdownListeners() {
                                var _this9 = this;
                                this._handleMouseoverCountryList = function(e) {
                                    var listItem = _this9._getClosestListItem(e.target);
                                    if (listItem) _this9._highlightListItem(listItem, false);
                                };
                                this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList);
                                this._handleClickCountryList = function(e) {
                                    var listItem = _this9._getClosestListItem(e.target);
                                    if (listItem) _this9._selectListItem(listItem);
                                };
                                this.countryList.addEventListener("click", this._handleClickCountryList);
                                var isOpening = true;
                                this._handleClickOffToClose = function() {
                                    if (!isOpening) _this9._closeDropdown();
                                    isOpening = false;
                                };
                                document.documentElement.addEventListener("click", this._handleClickOffToClose);
                                var query = "";
                                var queryTimer = null;
                                this._handleKeydownOnDropdown = function(e) {
                                    e.preventDefault();
                                    if ("ArrowUp" === e.key || "Up" === e.key || "ArrowDown" === e.key || "Down" === e.key) _this9._handleUpDownKey(e.key); else if ("Enter" === e.key) _this9._handleEnterKey(); else if ("Escape" === e.key) _this9._closeDropdown(); else if (/^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key)) {
                                        if (queryTimer) clearTimeout(queryTimer);
                                        query += e.key.toLowerCase();
                                        _this9._searchForCountry(query);
                                        queryTimer = setTimeout((function() {
                                            query = "";
                                        }), 1e3);
                                    }
                                };
                                document.addEventListener("keydown", this._handleKeydownOnDropdown);
                            }
                        }, {
                            key: "_handleUpDownKey",
                            value: function _handleUpDownKey(key) {
                                var next = "ArrowUp" === key || "Up" === key ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
                                if (next) {
                                    if (next.classList.contains("iti__divider")) next = "ArrowUp" === key || "Up" === key ? next.previousElementSibling : next.nextElementSibling;
                                    this._highlightListItem(next, true);
                                }
                            }
                        }, {
                            key: "_handleEnterKey",
                            value: function _handleEnterKey() {
                                if (this.highlightedItem) this._selectListItem(this.highlightedItem);
                            }
                        }, {
                            key: "_searchForCountry",
                            value: function _searchForCountry(query) {
                                for (var i = 0; i < this.countries.length; i++) if (this._startsWith(this.countries[i].name, query)) {
                                    var listItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(this.countries[i].iso2));
                                    this._highlightListItem(listItem, false);
                                    this._scrollTo(listItem, true);
                                    break;
                                }
                            }
                        }, {
                            key: "_startsWith",
                            value: function _startsWith(a, b) {
                                return a.substr(0, b.length).toLowerCase() === b;
                            }
                        }, {
                            key: "_updateValFromNumber",
                            value: function _updateValFromNumber(originalNumber) {
                                var number = originalNumber;
                                if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
                                    var useNational = !this.options.separateDialCode && (this.options.nationalMode || "+" !== number.charAt(0));
                                    var _intlTelInputUtils$nu = intlTelInputUtils.numberFormat, NATIONAL = _intlTelInputUtils$nu.NATIONAL, INTERNATIONAL = _intlTelInputUtils$nu.INTERNATIONAL;
                                    var format = useNational ? NATIONAL : INTERNATIONAL;
                                    number = intlTelInputUtils.formatNumber(number, this.selectedCountryData.iso2, format);
                                }
                                number = this._beforeSetNumber(number);
                                this.telInput.value = number;
                            }
                        }, {
                            key: "_updateFlagFromNumber",
                            value: function _updateFlagFromNumber(originalNumber) {
                                var number = originalNumber;
                                var selectedDialCode = this.selectedCountryData.dialCode;
                                var isNanp = "1" === selectedDialCode;
                                if (number && this.options.nationalMode && isNanp && "+" !== number.charAt(0)) {
                                    if ("1" !== number.charAt(0)) number = "1".concat(number);
                                    number = "+".concat(number);
                                }
                                if (this.options.separateDialCode && selectedDialCode && "+" !== number.charAt(0)) number = "+".concat(selectedDialCode).concat(number);
                                var dialCode = this._getDialCode(number, true);
                                var numeric = this._getNumeric(number);
                                var countryCode = null;
                                if (dialCode) {
                                    var countryCodes = this.countryCodes[this._getNumeric(dialCode)];
                                    var alreadySelected = -1 !== countryCodes.indexOf(this.selectedCountryData.iso2) && numeric.length <= dialCode.length - 1;
                                    var isRegionlessNanpNumber = "1" === selectedDialCode && this._isRegionlessNanp(numeric);
                                    if (!isRegionlessNanpNumber && !alreadySelected) for (var j = 0; j < countryCodes.length; j++) if (countryCodes[j]) {
                                        countryCode = countryCodes[j];
                                        break;
                                    }
                                } else if ("+" === number.charAt(0) && numeric.length) countryCode = ""; else if (!number || "+" === number) countryCode = this.defaultCountry;
                                if (null !== countryCode) return this._setFlag(countryCode);
                                return false;
                            }
                        }, {
                            key: "_isRegionlessNanp",
                            value: function _isRegionlessNanp(number) {
                                var numeric = this._getNumeric(number);
                                if ("1" === numeric.charAt(0)) {
                                    var areaCode = numeric.substr(1, 3);
                                    return -1 !== regionlessNanpNumbers.indexOf(areaCode);
                                }
                                return false;
                            }
                        }, {
                            key: "_highlightListItem",
                            value: function _highlightListItem(listItem, shouldFocus) {
                                var prevItem = this.highlightedItem;
                                if (prevItem) prevItem.classList.remove("iti__highlight");
                                this.highlightedItem = listItem;
                                this.highlightedItem.classList.add("iti__highlight");
                                if (shouldFocus) this.highlightedItem.focus();
                            }
                        }, {
                            key: "_getCountryData",
                            value: function _getCountryData(countryCode, ignoreOnlyCountriesOption, allowFail) {
                                var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries;
                                for (var i = 0; i < countryList.length; i++) if (countryList[i].iso2 === countryCode) return countryList[i];
                                if (allowFail) return null;
                                throw new Error("No country data for '".concat(countryCode, "'"));
                            }
                        }, {
                            key: "_setFlag",
                            value: function _setFlag(countryCode) {
                                var prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                                this.selectedCountryData = countryCode ? this._getCountryData(countryCode, false, false) : {};
                                if (this.selectedCountryData.iso2) this.defaultCountry = this.selectedCountryData.iso2;
                                this.selectedFlagInner.setAttribute("class", "iti__flag iti__".concat(countryCode));
                                var title = countryCode ? "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : "Unknown";
                                this.selectedFlag.setAttribute("title", title);
                                if (this.options.separateDialCode) {
                                    var dialCode = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
                                    this.selectedDialCode.innerHTML = dialCode;
                                    var selectedFlagWidth = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
                                    this.telInput.style.paddingLeft = "".concat(selectedFlagWidth + 6, "px");
                                }
                                this._updatePlaceholder();
                                if (this.options.allowDropdown) {
                                    var prevItem = this.activeItem;
                                    if (prevItem) {
                                        prevItem.classList.remove("iti__active");
                                        prevItem.setAttribute("aria-selected", "false");
                                    }
                                    if (countryCode) {
                                        var nextItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode));
                                        nextItem.setAttribute("aria-selected", "true");
                                        nextItem.classList.add("iti__active");
                                        this.activeItem = nextItem;
                                        this.selectedFlag.setAttribute("aria-activedescendant", nextItem.getAttribute("id"));
                                    }
                                }
                                return prevCountry.iso2 !== countryCode;
                            }
                        }, {
                            key: "_getHiddenSelectedFlagWidth",
                            value: function _getHiddenSelectedFlagWidth() {
                                var containerClone = this.telInput.parentNode.cloneNode();
                                containerClone.style.visibility = "hidden";
                                document.body.appendChild(containerClone);
                                var flagsContainerClone = this.flagsContainer.cloneNode();
                                containerClone.appendChild(flagsContainerClone);
                                var selectedFlagClone = this.selectedFlag.cloneNode(true);
                                flagsContainerClone.appendChild(selectedFlagClone);
                                var width = selectedFlagClone.offsetWidth;
                                containerClone.parentNode.removeChild(containerClone);
                                return width;
                            }
                        }, {
                            key: "_updatePlaceholder",
                            value: function _updatePlaceholder() {
                                var shouldSetPlaceholder = "aggressive" === this.options.autoPlaceholder || !this.hadInitialPlaceholder && "polite" === this.options.autoPlaceholder;
                                if (window.intlTelInputUtils && shouldSetPlaceholder) {
                                    var numberType = intlTelInputUtils.numberType[this.options.placeholderNumberType];
                                    var placeholder = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, numberType) : "";
                                    placeholder = this._beforeSetNumber(placeholder);
                                    if ("function" === typeof this.options.customPlaceholder) placeholder = this.options.customPlaceholder(placeholder, this.selectedCountryData);
                                    this.telInput.setAttribute("placeholder", placeholder);
                                }
                            }
                        }, {
                            key: "_selectListItem",
                            value: function _selectListItem(listItem) {
                                var flagChanged = this._setFlag(listItem.getAttribute("data-country-code"));
                                this._closeDropdown();
                                this._updateDialCode(listItem.getAttribute("data-dial-code"), true);
                                this.telInput.focus();
                                var len = this.telInput.value.length;
                                this.telInput.setSelectionRange(len, len);
                                if (flagChanged) this._triggerCountryChange();
                            }
                        }, {
                            key: "_closeDropdown",
                            value: function _closeDropdown() {
                                this.countryList.classList.add("iti__hide");
                                this.selectedFlag.setAttribute("aria-expanded", "false");
                                this.dropdownArrow.classList.remove("iti__arrow--up");
                                document.removeEventListener("keydown", this._handleKeydownOnDropdown);
                                document.documentElement.removeEventListener("click", this._handleClickOffToClose);
                                this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList);
                                this.countryList.removeEventListener("click", this._handleClickCountryList);
                                if (this.options.dropdownContainer) {
                                    if (!this.isMobile) window.removeEventListener("scroll", this._handleWindowScroll);
                                    if (this.dropdown.parentNode) this.dropdown.parentNode.removeChild(this.dropdown);
                                }
                                this._trigger("close:countrydropdown");
                            }
                        }, {
                            key: "_scrollTo",
                            value: function _scrollTo(element, middle) {
                                var container = this.countryList;
                                var windowTop = window.pageYOffset || document.documentElement.scrollTop;
                                var containerHeight = container.offsetHeight;
                                var containerTop = container.getBoundingClientRect().top + windowTop;
                                var containerBottom = containerTop + containerHeight;
                                var elementHeight = element.offsetHeight;
                                var elementTop = element.getBoundingClientRect().top + windowTop;
                                var elementBottom = elementTop + elementHeight;
                                var newScrollTop = elementTop - containerTop + container.scrollTop;
                                var middleOffset = containerHeight / 2 - elementHeight / 2;
                                if (elementTop < containerTop) {
                                    if (middle) newScrollTop -= middleOffset;
                                    container.scrollTop = newScrollTop;
                                } else if (elementBottom > containerBottom) {
                                    if (middle) newScrollTop += middleOffset;
                                    var heightDifference = containerHeight - elementHeight;
                                    container.scrollTop = newScrollTop - heightDifference;
                                }
                            }
                        }, {
                            key: "_updateDialCode",
                            value: function _updateDialCode(newDialCodeBare, hasSelectedListItem) {
                                var inputVal = this.telInput.value;
                                var newDialCode = "+".concat(newDialCodeBare);
                                var newNumber;
                                if ("+" === inputVal.charAt(0)) {
                                    var prevDialCode = this._getDialCode(inputVal);
                                    if (prevDialCode) newNumber = inputVal.replace(prevDialCode, newDialCode); else newNumber = newDialCode;
                                } else if (this.options.nationalMode || this.options.separateDialCode) return; else if (inputVal) newNumber = newDialCode + inputVal; else if (hasSelectedListItem || !this.options.autoHideDialCode) newNumber = newDialCode; else return;
                                this.telInput.value = newNumber;
                            }
                        }, {
                            key: "_getDialCode",
                            value: function _getDialCode(number, includeAreaCode) {
                                var dialCode = "";
                                if ("+" === number.charAt(0)) {
                                    var numericChars = "";
                                    for (var i = 0; i < number.length; i++) {
                                        var c = number.charAt(i);
                                        if (!isNaN(parseInt(c, 10))) {
                                            numericChars += c;
                                            if (includeAreaCode) {
                                                if (this.countryCodes[numericChars]) dialCode = number.substr(0, i + 1);
                                            } else if (this.dialCodes[numericChars]) {
                                                dialCode = number.substr(0, i + 1);
                                                break;
                                            }
                                            if (numericChars.length === this.countryCodeMaxLen) break;
                                        }
                                    }
                                }
                                return dialCode;
                            }
                        }, {
                            key: "_getFullNumber",
                            value: function _getFullNumber() {
                                var val = this.telInput.value.trim();
                                var dialCode = this.selectedCountryData.dialCode;
                                var prefix;
                                var numericVal = this._getNumeric(val);
                                if (this.options.separateDialCode && "+" !== val.charAt(0) && dialCode && numericVal) prefix = "+".concat(dialCode); else prefix = "";
                                return prefix + val;
                            }
                        }, {
                            key: "_beforeSetNumber",
                            value: function _beforeSetNumber(originalNumber) {
                                var number = originalNumber;
                                if (this.options.separateDialCode) {
                                    var dialCode = this._getDialCode(number);
                                    if (dialCode) {
                                        dialCode = "+".concat(this.selectedCountryData.dialCode);
                                        var start = " " === number[dialCode.length] || "-" === number[dialCode.length] ? dialCode.length + 1 : dialCode.length;
                                        number = number.substr(start);
                                    }
                                }
                                return this._cap(number);
                            }
                        }, {
                            key: "_triggerCountryChange",
                            value: function _triggerCountryChange() {
                                this._trigger("countrychange");
                            }
                        }, {
                            key: "handleAutoCountry",
                            value: function handleAutoCountry() {
                                if ("auto" === this.options.initialCountry) {
                                    this.defaultCountry = window.intlTelInputGlobals.autoCountry;
                                    if (!this.telInput.value) this.setCountry(this.defaultCountry);
                                    this.resolveAutoCountryPromise();
                                }
                            }
                        }, {
                            key: "handleUtils",
                            value: function handleUtils() {
                                if (window.intlTelInputUtils) {
                                    if (this.telInput.value) this._updateValFromNumber(this.telInput.value);
                                    this._updatePlaceholder();
                                }
                                this.resolveUtilsScriptPromise();
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                var form = this.telInput.form;
                                if (this.options.allowDropdown) {
                                    this._closeDropdown();
                                    this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag);
                                    this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
                                    var label = this._getClosestLabel();
                                    if (label) label.removeEventListener("click", this._handleLabelClick);
                                }
                                if (this.hiddenInput && form) form.removeEventListener("submit", this._handleHiddenInputSubmit);
                                if (this.options.autoHideDialCode) {
                                    if (form) form.removeEventListener("submit", this._handleSubmitOrBlurEvent);
                                    this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent);
                                }
                                this.telInput.removeEventListener("keyup", this._handleKeyupEvent);
                                this.telInput.removeEventListener("cut", this._handleClipboardEvent);
                                this.telInput.removeEventListener("paste", this._handleClipboardEvent);
                                this.telInput.removeAttribute("data-intl-tel-input-id");
                                var wrapper = this.telInput.parentNode;
                                wrapper.parentNode.insertBefore(this.telInput, wrapper);
                                wrapper.parentNode.removeChild(wrapper);
                                delete window.intlTelInputGlobals.instances[this.id];
                            }
                        }, {
                            key: "getExtension",
                            value: function getExtension() {
                                if (window.intlTelInputUtils) return intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
                                return "";
                            }
                        }, {
                            key: "getNumber",
                            value: function getNumber(format) {
                                if (window.intlTelInputUtils) {
                                    var iso2 = this.selectedCountryData.iso2;
                                    return intlTelInputUtils.formatNumber(this._getFullNumber(), iso2, format);
                                }
                                return "";
                            }
                        }, {
                            key: "getNumberType",
                            value: function getNumberType() {
                                if (window.intlTelInputUtils) return intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
                                return -99;
                            }
                        }, {
                            key: "getSelectedCountryData",
                            value: function getSelectedCountryData() {
                                return this.selectedCountryData;
                            }
                        }, {
                            key: "getValidationError",
                            value: function getValidationError() {
                                if (window.intlTelInputUtils) {
                                    var iso2 = this.selectedCountryData.iso2;
                                    return intlTelInputUtils.getValidationError(this._getFullNumber(), iso2);
                                }
                                return -99;
                            }
                        }, {
                            key: "isValidNumber",
                            value: function isValidNumber() {
                                var val = this._getFullNumber().trim();
                                var countryCode = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
                                return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(val, countryCode) : null;
                            }
                        }, {
                            key: "setCountry",
                            value: function setCountry(originalCountryCode) {
                                var countryCode = originalCountryCode.toLowerCase();
                                if (!this.selectedFlagInner.classList.contains("iti__".concat(countryCode))) {
                                    this._setFlag(countryCode);
                                    this._updateDialCode(this.selectedCountryData.dialCode, false);
                                    this._triggerCountryChange();
                                }
                            }
                        }, {
                            key: "setNumber",
                            value: function setNumber(number) {
                                var flagChanged = this._updateFlagFromNumber(number);
                                this._updateValFromNumber(number);
                                if (flagChanged) this._triggerCountryChange();
                            }
                        }, {
                            key: "setPlaceholderNumberType",
                            value: function setPlaceholderNumberType(type) {
                                this.options.placeholderNumberType = type;
                                this._updatePlaceholder();
                            }
                        } ]);
                        return Iti;
                    }();
                    intlTelInputGlobals.getCountryData = function() {
                        return allCountries;
                    };
                    var injectScript = function injectScript(path, handleSuccess, handleFailure) {
                        var script = document.createElement("script");
                        script.onload = function() {
                            forEachInstance("handleUtils");
                            if (handleSuccess) handleSuccess();
                        };
                        script.onerror = function() {
                            forEachInstance("rejectUtilsScriptPromise");
                            if (handleFailure) handleFailure();
                        };
                        script.className = "iti-load-utils";
                        script.async = true;
                        script.src = path;
                        document.body.appendChild(script);
                    };
                    intlTelInputGlobals.loadUtils = function(path) {
                        if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
                            window.intlTelInputGlobals.startedLoadingUtilsScript = true;
                            if ("undefined" !== typeof Promise) return new Promise((function(resolve, reject) {
                                return injectScript(path, resolve, reject);
                            }));
                            injectScript(path);
                        }
                        return null;
                    };
                    intlTelInputGlobals.defaults = defaults;
                    intlTelInputGlobals.version = "17.0.16";
                    return function(input, options) {
                        var iti = new Iti(input, options);
                        iti._init();
                        input.setAttribute("data-intl-tel-input-id", iti.id);
                        window.intlTelInputGlobals.instances[iti.id] = iti;
                        return iti;
                    };
                }();
            }));
        },
        699: (module, __unused_webpack_exports, __webpack_require__) => {
            module.exports = __webpack_require__(197);
        },
        59: function(module) {
            /*! lozad.js - v1.16.0 - 2020-09-06
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
            !function(t, e) {
                true ? module.exports = e() : 0;
            }(0, (function() {
                "use strict";
                var g = "undefined" != typeof document && document.documentMode, f = {
                    rootMargin: "0px",
                    threshold: 0,
                    load: function(t) {
                        if ("picture" === t.nodeName.toLowerCase()) {
                            var e = t.querySelector("img"), r = !1;
                            null === e && (e = document.createElement("img"), r = !0), g && t.getAttribute("data-iesrc") && (e.src = t.getAttribute("data-iesrc")), 
                            t.getAttribute("data-alt") && (e.alt = t.getAttribute("data-alt")), r && t.append(e);
                        }
                        if ("video" === t.nodeName.toLowerCase() && !t.getAttribute("data-src") && t.children) {
                            for (var a = t.children, o = void 0, i = 0; i <= a.length - 1; i++) (o = a[i].getAttribute("data-src")) && (a[i].src = o);
                            t.load();
                        }
                        t.getAttribute("data-poster") && (t.poster = t.getAttribute("data-poster")), t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")), 
                        t.getAttribute("data-srcset") && t.setAttribute("srcset", t.getAttribute("data-srcset"));
                        var n = ",";
                        if (t.getAttribute("data-background-delimiter") && (n = t.getAttribute("data-background-delimiter")), 
                        t.getAttribute("data-background-image")) t.style.backgroundImage = "url('" + t.getAttribute("data-background-image").split(n).join("'),url('") + "')"; else if (t.getAttribute("data-background-image-set")) {
                            var d = t.getAttribute("data-background-image-set").split(n), u = d[0].substr(0, d[0].indexOf(" ")) || d[0];
                            u = -1 === u.indexOf("url(") ? "url(" + u + ")" : u, 1 === d.length ? t.style.backgroundImage = u : t.setAttribute("style", (t.getAttribute("style") || "") + "background-image: " + u + "; background-image: -webkit-image-set(" + d + "); background-image: image-set(" + d + ")");
                        }
                        t.getAttribute("data-toggle-class") && t.classList.toggle(t.getAttribute("data-toggle-class"));
                    },
                    loaded: function() {}
                };
                function A(t) {
                    t.setAttribute("data-loaded", !0);
                }
                var m = function(t) {
                    return "true" === t.getAttribute("data-loaded");
                }, v = function(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document;
                    return t instanceof Element ? [ t ] : t instanceof NodeList ? t : e.querySelectorAll(t);
                };
                return function() {
                    var r, a, o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad", t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, e = Object.assign({}, f, t), i = e.root, n = e.rootMargin, d = e.threshold, u = e.load, g = e.loaded, s = void 0;
                    "undefined" != typeof window && window.IntersectionObserver && (s = new IntersectionObserver((r = u, 
                    a = g, function(t, e) {
                        t.forEach((function(t) {
                            (0 < t.intersectionRatio || t.isIntersecting) && (e.unobserve(t.target), m(t.target) || (r(t.target), 
                            A(t.target), a(t.target)));
                        }));
                    }), {
                        root: i,
                        rootMargin: n,
                        threshold: d
                    }));
                    for (var c, l = v(o, i), b = 0; b < l.length; b++) (c = l[b]).getAttribute("data-placeholder-background") && (c.style.background = c.getAttribute("data-placeholder-background"));
                    return {
                        observe: function() {
                            for (var t = v(o, i), e = 0; e < t.length; e++) m(t[e]) || (s ? s.observe(t[e]) : (u(t[e]), 
                            A(t[e]), g(t[e])));
                        },
                        triggerLoad: function(t) {
                            m(t) || (u(t), A(t), g(t));
                        },
                        observer: s
                    };
                };
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.r = exports => {
            if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        };
    })();
    (() => {
        "use strict";
        var utils_namespaceObject = {};
        __webpack_require__.r(utils_namespaceObject);
        const modules_flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerTitles.forEach((spollerTitle => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
                const spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) document.addEventListener("click", (function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                        const spollersBlock = spollerClose.closest("[data-spollers]");
                        if (spollersBlock.classList.contains("_spoller-init")) {
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            spollerClose.classList.remove("_spoller-active");
                            _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                        }
                    }));
                }));
            }
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function functions_FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Проснулся`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if ("error" !== this._dataValue) {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Ой ой, не заполнен атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen && !e.target.closest(".iti") && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && 27 == e.which && "Escape" === e.code && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && 9 == e.which && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube-nocookie.com/embed/${codeVideo}`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Открыл попап`);
                    } else this.popupLogging(`Ой ой, такого попапа нет.Проверьте корректность ввода. `);
                }
            }
            close(selectorValue) {
                if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                this.popupLogging(`Закрыл попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && 0 === focusedIndex) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? functions_FLS(`[Попапос]: ${message}`) : null;
            }
        }
        modules_flsModules.popup = new Popup({});
        let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    const headerElement = document.querySelector(headerItem);
                    if (!headerElement.classList.contains("_header-scroll")) {
                        headerElement.style.cssText = `transition-duration: 0s;`;
                        headerElement.classList.add("_header-scroll");
                        headerItemHeight = headerElement.offsetHeight;
                        headerElement.classList.remove("_header-scroll");
                        setTimeout((() => {
                            headerElement.style.cssText = ``;
                        }), 0);
                    } else headerItemHeight = headerElement.offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if ("undefined" !== typeof SmoothScroll) (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                functions_FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
            } else functions_FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
        };
        var intl_tel_input = __webpack_require__(699);
        (function() {
            var aa = this || self;
            function k(a, b) {
                a = a.split(".");
                var c = aa;
                a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
                for (var d; a.length && (d = a.shift()); ) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b;
            }
            function m(a, b) {
                function c() {}
                c.prototype = b.prototype;
                a.$ = b.prototype;
                a.prototype = new c;
                a.prototype.constructor = a;
                a.fa = function(d, e, g) {
                    for (var f = Array(arguments.length - 2), h = 2; h < arguments.length; h++) f[h - 2] = arguments[h];
                    return b.prototype[e].apply(d, f);
                };
            }
            function ba(a) {
                var d, b = [], c = 0;
                for (d in a) b[c++] = a[d];
                return b;
            }
            function ca(a, b) {
                a.sort(b || da);
            }
            function da(a, b) {
                return a > b ? 1 : a < b ? -1 : 0;
            }
            function ea(a, b) {
                this.g = a;
                this.m = !!b.o;
                this.i = b.h;
                this.v = b.type;
                this.u = !1;
                switch (this.i) {
                  case fa:
                  case ha:
                  case ia:
                  case ja:
                  case ka:
                  case la:
                  case ma:
                    this.u = !0;
                }
                this.l = b.defaultValue;
            }
            var ma = 1, la = 2, fa = 3, ha = 4, ia = 6, ja = 16, ka = 18;
            function na(a, b) {
                this.i = a;
                this.g = {};
                for (a = 0; a < b.length; a++) {
                    var c = b[a];
                    this.g[c.g] = c;
                }
            }
            function oa(a) {
                a = ba(a.g);
                ca(a, (function(b, c) {
                    return b.g - c.g;
                }));
                return a;
            }
            function n() {
                this.g = {};
                this.l = this.j().g;
                this.i = this.m = null;
            }
            n.prototype.has = function(a) {
                return null != this.g[a.g];
            };
            n.prototype.get = function(a, b) {
                return p(this, a.g, b);
            };
            n.prototype.set = function(a, b) {
                q(this, a.g, b);
            };
            n.prototype.add = function(a, b) {
                r(this, a.g, b);
            };
            function t(a, b) {
                for (var c = oa(a.j()), d = 0; d < c.length; d++) {
                    var e = c[d], g = e.g;
                    if (null != b.g[g]) {
                        a.i && delete a.i[e.g];
                        var f = 11 == e.i || 10 == e.i;
                        if (e.m) {
                            e = u(b, g);
                            for (var h = 0; h < e.length; h++) r(a, g, f ? e[h].clone() : e[h]);
                        } else e = v(b, g), f ? (f = v(a, g)) ? t(f, e) : q(a, g, e.clone()) : q(a, g, e);
                    }
                }
            }
            n.prototype.clone = function() {
                var a = new this.constructor;
                a != this && (a.g = {}, a.i && (a.i = {}), t(a, this));
                return a;
            };
            function v(a, b) {
                var c = a.g[b];
                if (null == c) return null;
                if (a.m) {
                    if (!(b in a.i)) {
                        var d = a.m, e = a.l[b];
                        if (null != c) if (e.m) {
                            for (var g = [], f = 0; f < c.length; f++) g[f] = d.i(e, c[f]);
                            c = g;
                        } else c = d.i(e, c);
                        return a.i[b] = c;
                    }
                    return a.i[b];
                }
                return c;
            }
            function p(a, b, c) {
                var d = v(a, b);
                return a.l[b].m ? d[c || 0] : d;
            }
            function w(a, b) {
                if (null != a.g[b]) a = p(a, b, void 0); else a: {
                    a = a.l[b];
                    if (void 0 === a.l) if (b = a.v, b === Boolean) a.l = !1; else if (b === Number) a.l = 0; else if (b === String) a.l = a.u ? "0" : ""; else {
                        a = new b;
                        break a;
                    }
                    a = a.l;
                }
                return a;
            }
            function u(a, b) {
                return v(a, b) || [];
            }
            function x(a, b) {
                return a.l[b].m ? null != a.g[b] ? a.g[b].length : 0 : null != a.g[b] ? 1 : 0;
            }
            function q(a, b, c) {
                a.g[b] = c;
                a.i && (a.i[b] = c);
            }
            function r(a, b, c) {
                a.g[b] || (a.g[b] = []);
                a.g[b].push(c);
                a.i && delete a.i[b];
            }
            function y(a, b) {
                var d, c = [];
                for (d in b) 0 != d && c.push(new ea(d, b[d]));
                return new na(a, c);
            }
            function A() {}
            A.prototype.g = function(a) {
                new a.i;
                throw Error("Unimplemented");
            };
            A.prototype.i = function(a, b) {
                if (11 == a.i || 10 == a.i) return b instanceof n ? b : this.g(a.v.prototype.j(), b);
                if (14 == a.i) return "string" === typeof b && B.test(b) && (a = Number(b), 0 < a) ? a : b;
                if (!a.u) return b;
                a = a.v;
                if (a === String) {
                    if ("number" === typeof b) return String(b);
                } else if (a === Number && "string" === typeof b && ("Infinity" === b || "-Infinity" === b || "NaN" === b || B.test(b))) return Number(b);
                return b;
            };
            var B = /^-?[0-9]+$/;
            function C() {}
            m(C, A);
            C.prototype.g = function(a, b) {
                a = new a.i;
                a.m = this;
                a.g = b;
                a.i = {};
                return a;
            };
            function D() {}
            m(D, C);
            D.prototype.i = function(a, b) {
                return 8 == a.i ? !!b : A.prototype.i.apply(this, arguments);
            };
            D.prototype.g = function(a, b) {
                return D.$.g.call(this, a, b);
            };
            function E(a, b) {
                null != a && this.g.apply(this, arguments);
            }
            E.prototype.i = "";
            E.prototype.set = function(a) {
                this.i = "" + a;
            };
            E.prototype.g = function(a, b, c) {
                this.i += String(a);
                if (null != b) for (var d = 1; d < arguments.length; d++) this.i += arguments[d];
                return this;
            };
            E.prototype.toString = function() {
                return this.i;
            };
            function F() {
                n.call(this);
            }
            m(F, n);
            var pa = null;
            function G() {
                n.call(this);
            }
            m(G, n);
            var qa = null;
            function H() {
                n.call(this);
            }
            m(H, n);
            var ra = null;
            F.prototype.j = function() {
                var a = pa;
                a || (pa = a = y(F, {
                    0: {
                        name: "NumberFormat",
                        s: "i18n.phonenumbers.NumberFormat"
                    },
                    1: {
                        name: "pattern",
                        required: !0,
                        h: 9,
                        type: String
                    },
                    2: {
                        name: "format",
                        required: !0,
                        h: 9,
                        type: String
                    },
                    3: {
                        name: "leading_digits_pattern",
                        o: !0,
                        h: 9,
                        type: String
                    },
                    4: {
                        name: "national_prefix_formatting_rule",
                        h: 9,
                        type: String
                    },
                    6: {
                        name: "national_prefix_optional_when_formatting",
                        h: 8,
                        defaultValue: !1,
                        type: Boolean
                    },
                    5: {
                        name: "domestic_carrier_code_formatting_rule",
                        h: 9,
                        type: String
                    }
                }));
                return a;
            };
            F.j = F.prototype.j;
            G.prototype.j = function() {
                var a = qa;
                a || (qa = a = y(G, {
                    0: {
                        name: "PhoneNumberDesc",
                        s: "i18n.phonenumbers.PhoneNumberDesc"
                    },
                    2: {
                        name: "national_number_pattern",
                        h: 9,
                        type: String
                    },
                    9: {
                        name: "possible_length",
                        o: !0,
                        h: 5,
                        type: Number
                    },
                    10: {
                        name: "possible_length_local_only",
                        o: !0,
                        h: 5,
                        type: Number
                    },
                    6: {
                        name: "example_number",
                        h: 9,
                        type: String
                    }
                }));
                return a;
            };
            G.j = G.prototype.j;
            H.prototype.j = function() {
                var a = ra;
                a || (ra = a = y(H, {
                    0: {
                        name: "PhoneMetadata",
                        s: "i18n.phonenumbers.PhoneMetadata"
                    },
                    1: {
                        name: "general_desc",
                        h: 11,
                        type: G
                    },
                    2: {
                        name: "fixed_line",
                        h: 11,
                        type: G
                    },
                    3: {
                        name: "mobile",
                        h: 11,
                        type: G
                    },
                    4: {
                        name: "toll_free",
                        h: 11,
                        type: G
                    },
                    5: {
                        name: "premium_rate",
                        h: 11,
                        type: G
                    },
                    6: {
                        name: "shared_cost",
                        h: 11,
                        type: G
                    },
                    7: {
                        name: "personal_number",
                        h: 11,
                        type: G
                    },
                    8: {
                        name: "voip",
                        h: 11,
                        type: G
                    },
                    21: {
                        name: "pager",
                        h: 11,
                        type: G
                    },
                    25: {
                        name: "uan",
                        h: 11,
                        type: G
                    },
                    27: {
                        name: "emergency",
                        h: 11,
                        type: G
                    },
                    28: {
                        name: "voicemail",
                        h: 11,
                        type: G
                    },
                    29: {
                        name: "short_code",
                        h: 11,
                        type: G
                    },
                    30: {
                        name: "standard_rate",
                        h: 11,
                        type: G
                    },
                    31: {
                        name: "carrier_specific",
                        h: 11,
                        type: G
                    },
                    33: {
                        name: "sms_services",
                        h: 11,
                        type: G
                    },
                    24: {
                        name: "no_international_dialling",
                        h: 11,
                        type: G
                    },
                    9: {
                        name: "id",
                        required: !0,
                        h: 9,
                        type: String
                    },
                    10: {
                        name: "country_code",
                        h: 5,
                        type: Number
                    },
                    11: {
                        name: "international_prefix",
                        h: 9,
                        type: String
                    },
                    17: {
                        name: "preferred_international_prefix",
                        h: 9,
                        type: String
                    },
                    12: {
                        name: "national_prefix",
                        h: 9,
                        type: String
                    },
                    13: {
                        name: "preferred_extn_prefix",
                        h: 9,
                        type: String
                    },
                    15: {
                        name: "national_prefix_for_parsing",
                        h: 9,
                        type: String
                    },
                    16: {
                        name: "national_prefix_transform_rule",
                        h: 9,
                        type: String
                    },
                    18: {
                        name: "same_mobile_and_fixed_line_pattern",
                        h: 8,
                        defaultValue: !1,
                        type: Boolean
                    },
                    19: {
                        name: "number_format",
                        o: !0,
                        h: 11,
                        type: F
                    },
                    20: {
                        name: "intl_number_format",
                        o: !0,
                        h: 11,
                        type: F
                    },
                    22: {
                        name: "main_country_for_code",
                        h: 8,
                        defaultValue: !1,
                        type: Boolean
                    },
                    23: {
                        name: "leading_digits",
                        h: 9,
                        type: String
                    },
                    26: {
                        name: "leading_zero_possible",
                        h: 8,
                        defaultValue: !1,
                        type: Boolean
                    }
                }));
                return a;
            };
            H.j = H.prototype.j;
            function I() {
                n.call(this);
            }
            m(I, n);
            var sa = null, ta = {
                ea: 0,
                da: 1,
                ca: 5,
                ba: 10,
                aa: 20
            };
            I.prototype.j = function() {
                var a = sa;
                a || (sa = a = y(I, {
                    0: {
                        name: "PhoneNumber",
                        s: "i18n.phonenumbers.PhoneNumber"
                    },
                    1: {
                        name: "country_code",
                        required: !0,
                        h: 5,
                        type: Number
                    },
                    2: {
                        name: "national_number",
                        required: !0,
                        h: 4,
                        type: Number
                    },
                    3: {
                        name: "extension",
                        h: 9,
                        type: String
                    },
                    4: {
                        name: "italian_leading_zero",
                        h: 8,
                        type: Boolean
                    },
                    8: {
                        name: "number_of_leading_zeros",
                        h: 5,
                        defaultValue: 1,
                        type: Number
                    },
                    5: {
                        name: "raw_input",
                        h: 9,
                        type: String
                    },
                    6: {
                        name: "country_code_source",
                        h: 14,
                        defaultValue: 0,
                        type: ta
                    },
                    7: {
                        name: "preferred_domestic_carrier_code",
                        h: 9,
                        type: String
                    }
                }));
                return a;
            };
            I.ctor = I;
            I.ctor.j = I.prototype.j;
            var J = {
                1: "US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),
                7: [ "RU", "KZ" ],
                20: [ "EG" ],
                27: [ "ZA" ],
                30: [ "GR" ],
                31: [ "NL" ],
                32: [ "BE" ],
                33: [ "FR" ],
                34: [ "ES" ],
                36: [ "HU" ],
                39: [ "IT", "VA" ],
                40: [ "RO" ],
                41: [ "CH" ],
                43: [ "AT" ],
                44: [ "GB", "GG", "IM", "JE" ],
                45: [ "DK" ],
                46: [ "SE" ],
                47: [ "NO", "SJ" ],
                48: [ "PL" ],
                49: [ "DE" ],
                51: [ "PE" ],
                52: [ "MX" ],
                53: [ "CU" ],
                54: [ "AR" ],
                55: [ "BR" ],
                56: [ "CL" ],
                57: [ "CO" ],
                58: [ "VE" ],
                60: [ "MY" ],
                61: [ "AU", "CC", "CX" ],
                62: [ "ID" ],
                63: [ "PH" ],
                64: [ "NZ" ],
                65: [ "SG" ],
                66: [ "TH" ],
                81: [ "JP" ],
                82: [ "KR" ],
                84: [ "VN" ],
                86: [ "CN" ],
                90: [ "TR" ],
                91: [ "IN" ],
                92: [ "PK" ],
                93: [ "AF" ],
                94: [ "LK" ],
                95: [ "MM" ],
                98: [ "IR" ],
                211: [ "SS" ],
                212: [ "MA", "EH" ],
                213: [ "DZ" ],
                216: [ "TN" ],
                218: [ "LY" ],
                220: [ "GM" ],
                221: [ "SN" ],
                222: [ "MR" ],
                223: [ "ML" ],
                224: [ "GN" ],
                225: [ "CI" ],
                226: [ "BF" ],
                227: [ "NE" ],
                228: [ "TG" ],
                229: [ "BJ" ],
                230: [ "MU" ],
                231: [ "LR" ],
                232: [ "SL" ],
                233: [ "GH" ],
                234: [ "NG" ],
                235: [ "TD" ],
                236: [ "CF" ],
                237: [ "CM" ],
                238: [ "CV" ],
                239: [ "ST" ],
                240: [ "GQ" ],
                241: [ "GA" ],
                242: [ "CG" ],
                243: [ "CD" ],
                244: [ "AO" ],
                245: [ "GW" ],
                246: [ "IO" ],
                247: [ "AC" ],
                248: [ "SC" ],
                249: [ "SD" ],
                250: [ "RW" ],
                251: [ "ET" ],
                252: [ "SO" ],
                253: [ "DJ" ],
                254: [ "KE" ],
                255: [ "TZ" ],
                256: [ "UG" ],
                257: [ "BI" ],
                258: [ "MZ" ],
                260: [ "ZM" ],
                261: [ "MG" ],
                262: [ "RE", "YT" ],
                263: [ "ZW" ],
                264: [ "NA" ],
                265: [ "MW" ],
                266: [ "LS" ],
                267: [ "BW" ],
                268: [ "SZ" ],
                269: [ "KM" ],
                290: [ "SH", "TA" ],
                291: [ "ER" ],
                297: [ "AW" ],
                298: [ "FO" ],
                299: [ "GL" ],
                350: [ "GI" ],
                351: [ "PT" ],
                352: [ "LU" ],
                353: [ "IE" ],
                354: [ "IS" ],
                355: [ "AL" ],
                356: [ "MT" ],
                357: [ "CY" ],
                358: [ "FI", "AX" ],
                359: [ "BG" ],
                370: [ "LT" ],
                371: [ "LV" ],
                372: [ "EE" ],
                373: [ "MD" ],
                374: [ "AM" ],
                375: [ "BY" ],
                376: [ "AD" ],
                377: [ "MC" ],
                378: [ "SM" ],
                380: [ "UA" ],
                381: [ "RS" ],
                382: [ "ME" ],
                383: [ "XK" ],
                385: [ "HR" ],
                386: [ "SI" ],
                387: [ "BA" ],
                389: [ "MK" ],
                420: [ "CZ" ],
                421: [ "SK" ],
                423: [ "LI" ],
                500: [ "FK" ],
                501: [ "BZ" ],
                502: [ "GT" ],
                503: [ "SV" ],
                504: [ "HN" ],
                505: [ "NI" ],
                506: [ "CR" ],
                507: [ "PA" ],
                508: [ "PM" ],
                509: [ "HT" ],
                590: [ "GP", "BL", "MF" ],
                591: [ "BO" ],
                592: [ "GY" ],
                593: [ "EC" ],
                594: [ "GF" ],
                595: [ "PY" ],
                596: [ "MQ" ],
                597: [ "SR" ],
                598: [ "UY" ],
                599: [ "CW", "BQ" ],
                670: [ "TL" ],
                672: [ "NF" ],
                673: [ "BN" ],
                674: [ "NR" ],
                675: [ "PG" ],
                676: [ "TO" ],
                677: [ "SB" ],
                678: [ "VU" ],
                679: [ "FJ" ],
                680: [ "PW" ],
                681: [ "WF" ],
                682: [ "CK" ],
                683: [ "NU" ],
                685: [ "WS" ],
                686: [ "KI" ],
                687: [ "NC" ],
                688: [ "TV" ],
                689: [ "PF" ],
                690: [ "TK" ],
                691: [ "FM" ],
                692: [ "MH" ],
                800: [ "001" ],
                808: [ "001" ],
                850: [ "KP" ],
                852: [ "HK" ],
                853: [ "MO" ],
                855: [ "KH" ],
                856: [ "LA" ],
                870: [ "001" ],
                878: [ "001" ],
                880: [ "BD" ],
                881: [ "001" ],
                882: [ "001" ],
                883: [ "001" ],
                886: [ "TW" ],
                888: [ "001" ],
                960: [ "MV" ],
                961: [ "LB" ],
                962: [ "JO" ],
                963: [ "SY" ],
                964: [ "IQ" ],
                965: [ "KW" ],
                966: [ "SA" ],
                967: [ "YE" ],
                968: [ "OM" ],
                970: [ "PS" ],
                971: [ "AE" ],
                972: [ "IL" ],
                973: [ "BH" ],
                974: [ "QA" ],
                975: [ "BT" ],
                976: [ "MN" ],
                977: [ "NP" ],
                979: [ "001" ],
                992: [ "TJ" ],
                993: [ "TM" ],
                994: [ "AZ" ],
                995: [ "GE" ],
                996: [ "KG" ],
                998: [ "UZ" ]
            }, va = {
                AC: [ , [ , , "(?:[01589]\\d|[46])\\d{4}", , , , , , , [ 5, 6 ] ], [ , , "6[2-467]\\d{3}", , , , "62889", , , [ 5 ] ], [ , , "4\\d{4}", , , , "40123", , , [ 5 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "AC", 247, "00", , , , , , , , , , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "(?:0[1-9]|[1589]\\d)\\d{4}", , , , "542011", , , [ 6 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                AD: [ , [ , , "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", , , , , , , [ 6, 8, 9 ] ], [ , , "[78]\\d{5}", , , , "712345", , , [ 6 ] ], [ , , "690\\d{6}|[356]\\d{5}", , , , "312345", , , [ 6, 9 ] ], [ , , "180[02]\\d{4}", , , , "18001234", , , [ 8 ] ], [ , , "[19]\\d{5}", , , , "912345", , , [ 6 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "AD", 376, "00", , , , , , , , [ [ , "(\\d{3})(\\d{3})", "$1 $2", [ "[135-9]" ] ], [ , "(\\d{4})(\\d{4})", "$1 $2", [ "1" ] ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "6" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , "1800\\d{4}", , , , , , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                AE: [ , [ , , "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", , , , , , , [ 5, 6, 7, 8, 9, 10, 11, 12 ] ], [ , , "[2-4679][2-8]\\d{6}", , , , "22345678", , , [ 8 ], [ 7 ] ], [ , , "5[024-68]\\d{7}", , , , "501234567", , , [ 9 ] ], [ , , "400\\d{6}|800\\d{2,9}", , , , "800123456" ], [ , , "900[02]\\d{5}", , , , "900234567", , , [ 9 ] ], [ , , "700[05]\\d{5}", , , , "700012345", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "AE", 971, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{2,9})", "$1 $2", [ "60|8" ] ], [ , "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", [ "[236]|[479][2-8]" ], "0$1" ], [ , "(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", [ "[479]" ] ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "5" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "600[25]\\d{5}", , , , "600212345", , , [ 9 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                AF: [ , [ , , "[2-7]\\d{8}", , , , , , , [ 9 ], [ 7 ] ], [ , , "(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}", , , , "234567890", , , , [ 7 ] ], [ , , "7\\d{8}", , , , "701234567", , , , [ 7 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "AF", 93, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[1-9]" ] ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[2-7]" ], "0$1" ] ], [ [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[2-7]" ], "0$1" ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                AG: [ , [ , , "(?:268|[58]\\d\\d|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}", , , , "2684601234", , , , [ 7 ] ], [ , , "268(?:464|7(?:1[3-9]|[28]\\d|3[0246]|64|7[0-689]))\\d{4}", , , , "2684641234", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456" ], [ , , "900[2-9]\\d{6}", , , , "9002123456" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , "26848[01]\\d{4}", , , , "2684801234", , , , [ 7 ] ], "AG", 1, "011", "1", , , "1|([457]\\d{6})$", "268$1", , , , , [ , , "26840[69]\\d{4}", , , , "2684061234", , , , [ 7 ] ], , "268", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                AI: [ , [ , , "(?:264|[58]\\d\\d|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "264(?:292|4(?:6[12]|9[78]))\\d{4}", , , , "2644612345", , , , [ 7 ] ], [ , , "264(?:235|4(?:69|76)|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}", , , , "2642351234", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456" ], [ , , "900[2-9]\\d{6}", , , , "9002123456" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "AI", 1, "011", "1", , , "1|([2457]\\d{6})$", "264$1", , , , , [ , , "264724\\d{4}", , , , "2647241234", , , , [ 7 ] ], , "264", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                AL: [ , [ , , "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", , , , , , , [ 6, 7, 8, 9 ], [ 5 ] ], [ , , "4505[0-2]\\d{3}|(?:[2358][16-9]\\d[2-9]|4410)\\d{4}|(?:[2358][2-5][2-9]|4(?:[2-57-9][2-9]|6\\d))\\d{5}", , , , "22345678", , , [ 8 ], [ 5, 6, 7 ] ], [ , , "6(?:[78][2-9]|9\\d)\\d{6}", , , , "672123456", , , [ 9 ] ], [ , , "800\\d{4}", , , , "8001234", , , [ 7 ] ], [ , , "900[1-9]\\d\\d", , , , "900123", , , [ 6 ] ], [ , , "808[1-9]\\d\\d", , , , "808123", , , [ 6 ] ], [ , , "700[2-9]\\d{4}", , , , "70021234", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], "AL", 355, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{3,4})", "$1 $2", [ "80|9" ], "0$1" ], [ , "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", [ "4[2-6]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[2358][2-5]|4" ], "0$1" ], [ , "(\\d{3})(\\d{5})", "$1 $2", [ "[23578]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "6" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                AM: [ , [ , , "(?:[1-489]\\d|55|60|77)\\d{6}", , , , , , , [ 8 ], [ 5, 6 ] ], [ , , "(?:(?:1[0-25]|47)\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2)\\d{5}", , , , "10123456", , , , [ 5, 6 ] ], [ , , "(?:33|4[1349]|55|77|88|9[13-9])\\d{6}", , , , "77123456" ], [ , , "800\\d{5}", , , , "80012345" ], [ , , "90[016]\\d{5}", , , , "90012345" ], [ , , "80[1-4]\\d{5}", , , , "80112345" ], [ , , , , , , , , , [ -1 ] ], [ , , "60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|9[01])\\d{4}", , , , "60271234" ], "AM", 374, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", [ "[89]0" ], "0 $1" ], [ , "(\\d{3})(\\d{5})", "$1 $2", [ "2|3[12]" ], "(0$1)" ], [ , "(\\d{2})(\\d{6})", "$1 $2", [ "1|47" ], "(0$1)" ], [ , "(\\d{2})(\\d{6})", "$1 $2", [ "[3-9]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                AO: [ , [ , , "[29]\\d{8}", , , , , , , [ 9 ] ], [ , , "2\\d(?:[0134][25-9]|[25-9]\\d)\\d{5}", , , , "222123456" ], [ , , "9[1-59]\\d{7}", , , , "923123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "AO", 244, "00", , , , , , , , [ [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[29]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                AR: [ , [ , , "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", , , , , , , [ 10, 11 ], [ 6, 7, 8 ] ], [ , , "3888[013-9]\\d{5}|(?:29(?:54|66)|3(?:777|865))[2-8]\\d{5}|3(?:7(?:1[15]|81)|8(?:21|4[16]|69|9[12]))[46]\\d{5}|(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|(?:2(?:284|302|657|920)|3(?:4(?:8[27]|92)|541|755|878))[2-7]\\d{5}|(?:2(?:(?:26|62)2|32[03]|477|9(?:42|83))|3(?:329|4(?:[47]6|62|89)|564))[2-6]\\d{5}|(?:(?:11[1-8]|670)\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-8]|[36][45]|4[3-6])|80[45]|9(?:[17][4-6]|[48][45]|9[3-6]))|3(?:364|4(?:1[2-7]|[235][4-6]|84)|5(?:1[2-8]|[38][4-6])|6(?:2[45]|44)|7[069][45]|8(?:[03][45]|[17][2-6]|[58][3-6])))\\d{6}|2(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])))[3-6]\\d{5}|(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}", , , , "1123456789", , , [ 10 ], [ 6, 7, 8 ] ], [ , , "93888[013-9]\\d{5}|9(?:29(?:54|66)|3(?:777|865))[2-8]\\d{5}|93(?:7(?:1[15]|81)|8(?:21|4[16]|69|9[12]))[46]\\d{5}|9(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|9(?:2(?:284|302|657|920)|3(?:4(?:8[27]|92)|541|755|878))[2-7]\\d{5}|9(?:2(?:(?:26|62)2|32[03]|477|9(?:42|83))|3(?:329|4(?:[47]6|62|89)|564))[2-6]\\d{5}|(?:675\\d|9(?:11[1-8]\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-8]|[36][45]|4[3-6])|80[45]|9(?:[17][4-6]|[48][45]|9[3-6]))|3(?:364|4(?:1[2-7]|[235][4-6]|84)|5(?:1[2-8]|[38][4-6])|6(?:2[45]|44)|7[069][45]|8(?:[03][45]|[17][2-6]|[58][3-6]))))\\d{6}|92(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|9(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])))[3-6]\\d{5}|9(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}", , , , "91123456789", , , , [ 6, 7, 8 ] ], [ , , "800\\d{7,8}", , , , "8001234567" ], [ , , "60[04579]\\d{7}", , , , "6001234567", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "AR", 54, "00", "0", , , "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1", , , [ [ , "(\\d{3})", "$1", [ "0|1(?:0[0-35-7]|1[02-5]|2[015]|3[47]|4[478])|911" ] ], [ , "(\\d{2})(\\d{4})", "$1-$2", [ "[1-9]" ] ], [ , "(\\d{3})(\\d{4})", "$1-$2", [ "[2-8]" ] ], [ , "(\\d{4})(\\d{4})", "$1-$2", [ "[1-8]" ] ], [ , "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", [ "2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]" ], "0$1", , 1 ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", [ "1" ], "0$1", , 1 ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", [ "[68]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", [ "[23]" ], "0$1", , 1 ], [ , "(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", [ "9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]" ], "0$1" ], [ , "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", [ "91" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", [ "8" ], "0$1" ], [ , "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", [ "9" ], "0$1" ] ], [ [ , "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", [ "2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]" ], "0$1", , 1 ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", [ "1" ], "0$1", , 1 ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", [ "[68]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", [ "[23]" ], "0$1", , 1 ], [ , "(\\d)(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3-$4", [ "9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]" ] ], [ , "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3-$4", [ "91" ] ], [ , "(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", [ "8" ], "0$1" ], [ , "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3-$4", [ "9" ] ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , "810\\d{7}", , , , , , , [ 10 ] ], [ , , "810\\d{7}", , , , "8101234567", , , [ 10 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                AS: [ , [ , , "(?:[58]\\d\\d|684|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "6846(?:22|33|44|55|77|88|9[19])\\d{4}", , , , "6846221234", , , , [ 7 ] ], [ , , "684(?:2(?:48|5[2468]|72)|7(?:3[13]|70|82))\\d{4}", , , , "6847331234", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456" ], [ , , "900[2-9]\\d{6}", , , , "9002123456" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "AS", 1, "011", "1", , , "1|([267]\\d{6})$", "684$1", , , , , [ , , , , , , , , , [ -1 ] ], , "684", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                AT: [ , [ , , "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", , , , , , , [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ], [ 3 ] ], [ , , "1(?:11\\d|[2-9]\\d{3,11})|(?:316|463|(?:51|66|73)2)\\d{3,10}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-578]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|7[1368]|8[2457])|5(?:2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[135-8]|5[468])|7(?:2[1-8]|35|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{4,10}", , , , "1234567890", , , , [ 3 ] ], [ , , "6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}", , , , "664123456", , , [ 7, 8, 9, 10, 11, 12, 13 ] ], [ , , "800\\d{6,10}", , , , "800123456", , , [ 9, 10, 11, 12, 13 ] ], [ , , "(?:8[69][2-68]|9(?:0[01]|3[019]))\\d{6,10}", , , , "900123456", , , [ 9, 10, 11, 12, 13 ] ], [ , , "8(?:10|2[018])\\d{6,10}|828\\d{5}", , , , "810123456", , , [ 8, 9, 10, 11, 12, 13 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "5(?:0[1-9]|17|[79]\\d)\\d{2,10}|7[28]0\\d{6,10}", , , , "780123456", , , [ 5, 6, 7, 8, 9, 10, 11, 12, 13 ] ], "AT", 43, "00", "0", , , "0", , , , [ [ , "(\\d)(\\d{3,12})", "$1 $2", [ "1(?:11|[2-9])" ], "0$1" ], [ , "(\\d{3})(\\d{2})", "$1 $2", [ "517" ], "0$1" ], [ , "(\\d{2})(\\d{3,5})", "$1 $2", [ "5[079]" ], "0$1" ], [ , "(\\d{6})", "$1", [ "1" ] ], [ , "(\\d{3})(\\d{3,10})", "$1 $2", [ "(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]" ], "0$1" ], [ , "(\\d{4})(\\d{3,9})", "$1 $2", [ "[2-467]|5[2-6]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "5" ], "0$1" ], [ , "(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", [ "5" ], "0$1" ] ], [ [ , "(\\d)(\\d{3,12})", "$1 $2", [ "1(?:11|[2-9])" ], "0$1" ], [ , "(\\d{3})(\\d{2})", "$1 $2", [ "517" ], "0$1" ], [ , "(\\d{2})(\\d{3,5})", "$1 $2", [ "5[079]" ], "0$1" ], [ , "(\\d{3})(\\d{3,10})", "$1 $2", [ "(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]" ], "0$1" ], [ , "(\\d{4})(\\d{3,9})", "$1 $2", [ "[2-467]|5[2-6]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "5" ], "0$1" ], [ , "(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", [ "5" ], "0$1" ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                AU: [ , [ , , "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", , , , , , , [ 5, 6, 7, 8, 9, 10, 12 ] ], [ , , "(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", , , , "212345678", , , [ 9 ], [ 8 ] ], [ , , "4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", , , , "412345678", , , [ 9 ] ], [ , , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [ 7, 10 ] ], [ , , "190[0-26]\\d{6}", , , , "1900123456", , , [ 10 ] ], [ , , "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", , , , "1300123456", , , [ 6, 8, 10, 12 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", , , , "147101234", , , [ 9 ] ], "AU", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0", , , "0|(183[12])", , "0011", , [ [ , "(\\d{2})(\\d{3,4})", "$1 $2", [ "16" ], "0$1" ], [ , "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", [ "13" ] ], [ , "(\\d{3})(\\d{3})", "$1 $2", [ "19" ] ], [ , "(\\d{3})(\\d{4})", "$1 $2", [ "180", "1802" ] ], [ , "(\\d{4})(\\d{3,4})", "$1 $2", [ "19" ] ], [ , "(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", [ "16" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "14|4" ], "0$1" ], [ , "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", [ "[2378]" ], "(0$1)", "$CC ($1)" ], [ , "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", [ "1(?:30|[89])" ] ], [ , "(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", [ "130" ] ] ], [ [ , "(\\d{2})(\\d{3,4})", "$1 $2", [ "16" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", [ "16" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "14|4" ], "0$1" ], [ , "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", [ "[2378]" ], "(0$1)", "$CC ($1)" ], [ , "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", [ "1(?:30|[89])" ] ] ], [ , , "163\\d{2,6}", , , , "1631234", , , [ 5, 6, 7, 8, 9 ] ], 1, , [ , , "1(?:3(?:00\\d{5}|45[0-4])|802)\\d{3}|1[38]00\\d{6}|13\\d{4}", , , , , , , [ 6, 7, 8, 10, 12 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                AW: [ , [ , , "(?:[25-79]\\d\\d|800)\\d{4}", , , , , , , [ 7 ] ], [ , , "5(?:2\\d|8[1-9])\\d{4}", , , , "5212345" ], [ , , "(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}", , , , "5601234" ], [ , , "800\\d{4}", , , , "8001234" ], [ , , "900\\d{4}", , , , "9001234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "(?:28\\d|501)\\d{4}", , , , "5011234" ], "AW", 297, "00", , , , , , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[25-9]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                AX: [ , [ , , "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", , , , , , , [ 5, 6, 7, 8, 9, 10, 11, 12 ] ], [ , , "18[1-8]\\d{3,6}", , , , "181234567", , , [ 6, 7, 8, 9 ] ], [ , , "4946\\d{2,6}|(?:4[0-8]|50)\\d{4,8}", , , , "412345678", , , [ 6, 7, 8, 9, 10 ] ], [ , , "800\\d{4,6}", , , , "800123456", , , [ 7, 8, 9 ] ], [ , , "[67]00\\d{5,6}", , , , "600123456", , , [ 8, 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "AX", 358, "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "0", , , "0", , "00", , , , [ , , , , , , , , , [ -1 ] ], , "18", [ , , , , , , , , , [ -1 ] ], [ , , "20\\d{4,8}|60[12]\\d{5,6}|7(?:099\\d{4,5}|5[03-9]\\d{3,7})|20[2-59]\\d\\d|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:10|29|3[09]|70[1-5]\\d)\\d{4,8}", , , , "10112345" ], , , [ , , , , , , , , , [ -1 ] ] ],
                AZ: [ , [ , , "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", , , , , , , [ 9 ], [ 7 ] ], [ , , "(?:2[12]428|3655[02])\\d{4}|(?:2(?:22[0-79]|63[0-28])|3654)\\d{5}|(?:(?:1[28]|46)\\d|2(?:[014-6]2|[23]3))\\d{6}", , , , "123123456", , , , [ 7 ] ], [ , , "36554\\d{4}|(?:[16]0|4[04]|5[015]|7[07]|99)\\d{7}", , , , "401234567" ], [ , , "88\\d{7}", , , , "881234567" ], [ , , "900200\\d{3}", , , , "900200123" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "AZ", 994, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", [ "[1-9]" ] ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "90" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46" ], "(0$1)" ], [ , "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[13-9]" ], "0$1" ] ], [ [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "90" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46" ], "(0$1)" ], [ , "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[13-9]" ], "0$1" ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                BA: [ , [ , , "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", , , , , , , [ 8, 9 ], [ 6 ] ], [ , , "(?:3(?:[05-79][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}", , , , "30212345", , , [ 8 ], [ 6 ] ], [ , , "6040\\d{5}|6(?:03|[1-356]|44|7\\d)\\d{6}", , , , "61123456" ], [ , , "8[08]\\d{6}", , , , "80123456", , , [ 8 ] ], [ , , "9[0246]\\d{6}", , , , "90123456", , , [ 8 ] ], [ , , "8[12]\\d{6}", , , , "82123456", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "BA", 387, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{3})", "$1-$2", [ "[2-9]" ] ], [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "6[1-3]|[7-9]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", [ "[3-5]|6[56]" ], "0$1" ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", [ "6" ], "0$1" ] ], [ [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "6[1-3]|[7-9]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", [ "[3-5]|6[56]" ], "0$1" ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", [ "6" ], "0$1" ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "703[235]0\\d{3}|70(?:2[0-5]|3[0146]|[56]0)\\d{4}", , , , "70341234", , , [ 8 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                BB: [ , [ , , "(?:246|[58]\\d\\d|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "246521[0369]\\d{3}|246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}", , , , "2464123456", , , , [ 7 ] ], [ , , "246(?:(?:2(?:[3568]\\d|4[0-57-9])|3(?:5[2-9]|6[0-6])|4(?:46|5\\d)|69[5-7]|8(?:[2-5]\\d|83))\\d|52(?:1[147]|20))\\d{3}", , , , "2462501234", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456" ], [ , , "(?:246976|900[2-9]\\d\\d)\\d{4}", , , , "9002123456", , , , [ 7 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , "24631\\d{5}", , , , "2463101234", , , , [ 7 ] ], "BB", 1, "011", "1", , , "1|([2-9]\\d{6})$", "246$1", , , , , [ , , , , , , , , , [ -1 ] ], , "246", [ , , , , , , , , , [ -1 ] ], [ , , "246(?:292|367|4(?:1[7-9]|3[01]|4[47-9]|67)|7(?:1[2-9]|2\\d|3[016]|53))\\d{4}", , , , "2464301234", , , , [ 7 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                BD: [ , [ , , "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", , , , , , , [ 6, 7, 8, 9, 10 ] ], [ , , "(?:4(?:31\\d\\d|423)|5222)\\d{3}(?:\\d{2})?|8332[6-9]\\d\\d|(?:3(?:03[56]|224)|4(?:22[25]|653))\\d{3,4}|(?:3(?:42[47]|529|823)|4(?:027|525|65(?:28|8))|562|6257|7(?:1(?:5[3-5]|6[12]|7[156]|89)|22[589]56|32|42675|52(?:[25689](?:56|8)|[347]8)|71(?:6[1267]|75|89)|92374)|82(?:2[59]|32)56|9(?:03[23]56|23(?:256|373)|31|5(?:1|2[4589]56)))\\d{3}|(?:3(?:02[348]|22[35]|324|422)|4(?:22[67]|32[236-9]|6(?:2[46]|5[57])|953)|5526|6(?:024|6655)|81)\\d{4,5}|(?:2(?:7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|1[1-6]|2[0157-9]|3[1-69]|41|6[1-35]|7[1-5]|8[1-8]|9[0-6])|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[0136-9]|7[0-7]|8[014-9]))|3(?:0(?:2[025-79]|3[2-4])|181|22[12]|32[2356]|824)|4(?:02[09]|22[348]|32[045]|523|6(?:27|54))|666(?:22|53)|7(?:22[57-9]|42[56]|82[35])8|8(?:0[124-9]|2(?:181|2[02-4679]8)|4[12]|[5-7]2)|9(?:[04]2|2(?:2|328)|81))\\d{4}|(?:2(?:222|[45]\\d)\\d|3(?:1(?:2[5-7]|[5-7])|425|822)|4(?:033|1\\d|[257]1|332|4(?:2[246]|5[25])|6(?:2[35]|56|62)|8(?:23|54)|92[2-5])|5(?:02[03489]|22[457]|32[35-79]|42[46]|6(?:[18]|53)|724|826)|6(?:023|2(?:2[2-5]|5[3-5]|8)|32[3478]|42[34]|52[47]|6(?:[18]|6(?:2[34]|5[24]))|[78]2[2-5]|92[2-6])|7(?:02|21\\d|[3-589]1|6[12]|72[24])|8(?:217|3[12]|[5-7]1)|9[24]1)\\d{5}|(?:(?:3[2-8]|5[2-57-9]|6[03-589])1|4[4689][18])\\d{5}|[59]1\\d{5}", , , , "27111234" ], [ , , "(?:1[13-9]\\d|644)\\d{7}|(?:3[78]|44|66)[02-9]\\d{7}", , , , "1812345678", , , [ 10 ] ], [ , , "80[03]\\d{7}", , , , "8001234567", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "96(?:0[469]|1[0-47]|3[389]|6[69]|7[78])\\d{6}", , , , "9604123456", , , [ 10 ] ], "BD", 880, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{4,6})", "$1-$2", [ "31[5-8]|[459]1" ], "0$1" ], [ , "(\\d{3})(\\d{3,7})", "$1-$2", [ "3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]" ], "0$1" ], [ , "(\\d{4})(\\d{3,6})", "$1-$2", [ "[13-9]|22" ], "0$1" ], [ , "(\\d)(\\d{7,8})", "$1-$2", [ "2" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                BE: [ , [ , , "4\\d{8}|[1-9]\\d{7}", , , , , , , [ 8, 9 ] ], [ , , "80[2-8]\\d{5}|(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}", , , , "12345678", , , [ 8 ] ], [ , , "4[5-9]\\d{7}", , , , "470123456", , , [ 9 ] ], [ , , "800[1-9]\\d{4}", , , , "80012345", , , [ 8 ] ], [ , , "(?:70(?:2[0-57]|3[04-7]|44|69|7[0579])|90(?:0[0-8]|1[36]|2[0-3568]|3[013-689]|[47][2-68]|5[1-68]|6[0-378]|9[34679]))\\d{4}", , , , "90012345", , , [ 8 ] ], [ , , "7879\\d{4}", , , , "78791234", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "BE", 32, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", [ "(?:80|9)0" ], "0$1" ], [ , "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[239]|4[23]" ], "0$1" ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[15-8]" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "4" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "78(?:0[57]|1[0458]|2[25]|3[15-8]|48|[56]0|7[078]|9\\d)\\d{4}", , , , "78102345", , , [ 8 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                BF: [ , [ , , "[025-7]\\d{7}", , , , , , , [ 8 ] ], [ , , "2(?:0(?:49|5[23]|6[5-7]|9[016-9])|4(?:4[569]|5[4-6]|6[5-7]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}", , , , "20491234" ], [ , , "(?:0[125-7]|5[1-8]|[67]\\d)\\d{6}", , , , "70123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "BF", 226, "00", , , , , , , , [ [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[025-7]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                BG: [ , [ , , "[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", , , , , , , [ 6, 7, 8, 9 ], [ 4, 5 ] ], [ , , "2\\d{5,7}|(?:43[1-6]|70[1-9])\\d{4,5}|(?:[36]\\d|4[124-7]|[57][1-9]|8[1-6]|9[1-7])\\d{5,6}", , , , "2123456", , , [ 6, 7, 8 ], [ 4, 5 ] ], [ , , "(?:43[07-9]|99[69]\\d)\\d{5}|(?:8[7-9]|98)\\d{7}", , , , "43012345", , , [ 8, 9 ] ], [ , , "800\\d{5}", , , , "80012345", , , [ 8 ] ], [ , , "90\\d{6}", , , , "90123456", , , [ 8 ] ], [ , , "700\\d{5}", , , , "70012345", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "BG", 359, "00", "0", , , "0", , , , [ [ , "(\\d{6})", "$1", [ "1" ] ], [ , "(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "2" ], "0$1" ], [ , "(\\d{3})(\\d{4})", "$1 $2", [ "43[1-6]|70[1-9]" ], "0$1" ], [ , "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "2" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", [ "[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", [ "(?:70|8)0" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", [ "43[1-7]|7" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "[48]|9[08]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "9" ], "0$1" ] ], [ [ , "(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "2" ], "0$1" ], [ , "(\\d{3})(\\d{4})", "$1 $2", [ "43[1-6]|70[1-9]" ], "0$1" ], [ , "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "2" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", [ "[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", [ "(?:70|8)0" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", [ "43[1-7]|7" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "[48]|9[08]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "9" ], "0$1" ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                BH: [ , [ , , "[136-9]\\d{7}", , , , , , , [ 8 ] ], [ , , "(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9]|88)|9[69][69])|7(?:1(?:11|78)|7\\d\\d))\\d{4}", , , , "17001234" ], [ , , "(?:3(?:[1-79]\\d|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:3[03-9]|[69]\\d|7[0-6])))\\d{4}", , , , "36001234" ], [ , , "80\\d{6}", , , , "80123456" ], [ , , "(?:87|9[014578])\\d{6}", , , , "90123456" ], [ , , "84\\d{6}", , , , "84123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "BH", 973, "00", , , , , , , , [ [ , "(\\d{4})(\\d{4})", "$1 $2", [ "[13679]|8[047]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                BI: [ , [ , , "(?:[267]\\d|31)\\d{6}", , , , , , , [ 8 ] ], [ , , "(?:22|31)\\d{6}", , , , "22201234" ], [ , , "(?:29|6[1257-9]|7[125-9])\\d{6}", , , , "79561234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "BI", 257, "00", , , , , , , , [ [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[2367]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                BJ: [ , [ , , "(?:[25689]\\d|40)\\d{6}", , , , , , , [ 8 ] ], [ , , "2(?:02|1[037]|2[45]|3[68])\\d{5}", , , , "20211234" ], [ , , "(?:40|5[1-8]|6\\d|9[013-9])\\d{6}", , , , "90011234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "857[58]\\d{4}", , , , "85751234" ], "BJ", 229, "00", , , , , , , , [ [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[24-689]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "81\\d{6}", , , , "81123456" ], , , [ , , , , , , , , , [ -1 ] ] ],
                BL: [ , [ , , "(?:590|(?:69|80)\\d|976)\\d{6}", , , , , , , [ 9 ] ], [ , , "590(?:2[7-9]|5[12]|87)\\d{4}", , , , "590271234" ], [ , , "69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}", , , , "690001234" ], [ , , "80[0-5]\\d{6}", , , , "800012345" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "976[01]\\d{5}", , , , "976012345" ], "BL", 590, "00", "0", , , "0", , , , , , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                BM: [ , [ , , "(?:441|[58]\\d\\d|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "441(?:[46]\\d\\d|5(?:4\\d|60|89))\\d{4}", , , , "4414123456", , , , [ 7 ] ], [ , , "441(?:[2378]\\d|5[0-39])\\d{5}", , , , "4413701234", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456" ], [ , , "900[2-9]\\d{6}", , , , "9002123456" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "BM", 1, "011", "1", , , "1|([2-8]\\d{6})$", "441$1", , , , , [ , , , , , , , , , [ -1 ] ], , "441", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                BN: [ , [ , , "[2-578]\\d{6}", , , , , , , [ 7 ] ], [ , , "22[0-7]\\d{4}|(?:2[013-9]|[34]\\d|5[0-25-9])\\d{5}", , , , "2345678" ], [ , , "(?:22[89]|[78]\\d\\d)\\d{4}", , , , "7123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "5[34]\\d{5}", , , , "5345678" ], "BN", 673, "00", , , , , , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[2-578]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                BO: [ , [ , , "(?:[2-467]\\d\\d|8001)\\d{5}", , , , , , , [ 8, 9 ], [ 7 ] ], [ , , "(?:2(?:2\\d\\d|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d\\d|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\\d\\d|6(?:11|[24689]\\d|72)))\\d{4}", , , , "22123456", , , [ 8 ], [ 7 ] ], [ , , "[67]\\d{7}", , , , "71234567", , , [ 8 ] ], [ , , "8001[07]\\d{4}", , , , "800171234", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "BO", 591, "00(?:1\\d)?", "0", , , "0(1\\d)?", , , , [ [ , "(\\d)(\\d{7})", "$1 $2", [ "[23]|4[46]" ], , "0$CC $1" ], [ , "(\\d{8})", "$1", [ "[67]" ], , "0$CC $1" ], [ , "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", [ "8" ], , "0$CC $1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , "8001[07]\\d{4}", , , , , , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                BQ: [ , [ , , "(?:[34]1|7\\d)\\d{5}", , , , , , , [ 7 ] ], [ , , "(?:318[023]|41(?:6[023]|70)|7(?:1[578]|2[05]|50)\\d)\\d{3}", , , , "7151234" ], [ , , "(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}", , , , "3181234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "BQ", 599, "00", , , , , , , , , , [ , , , , , , , , , [ -1 ] ], , "[347]", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                BR: [ , [ , , "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", , , , , , , [ 8, 9, 10, 11 ] ], [ , , "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}", , , , "1123456789", , , [ 10 ], [ 8 ] ], [ , , "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])(?:7|9\\d)\\d{7}", , , , "11961234567", , , [ 10, 11 ], [ 8, 9 ] ], [ , , "800\\d{6,7}", , , , "800123456", , , [ 9, 10 ] ], [ , , "300\\d{6}|[59]00\\d{6,7}", , , , "300123456", , , [ 9, 10 ] ], [ , , "(?:30[03]\\d{3}|4(?:0(?:0\\d|20)|370))\\d{4}|300\\d{5}", , , , "40041234", , , [ 8, 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "BR", 55, "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "0", , , "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2", , , [ [ , "(\\d{3,6})", "$1", [ "1(?:1[25-8]|2[357-9]|3[02-68]|4[12568]|5|6[0-8]|8[015]|9[0-47-9])|321|610" ] ], [ , "(\\d{4})(\\d{4})", "$1-$2", [ "300|4(?:0[02]|37)", "4(?:02|37)0|[34]00" ] ], [ , "(\\d{4})(\\d{4})", "$1-$2", [ "[2-57]", "[2357]|4(?:[0-24-9]|3(?:[0-689]|7[1-9]))" ] ], [ , "(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", [ "(?:[358]|90)0" ], "0$1" ], [ , "(\\d{5})(\\d{4})", "$1-$2", [ "9" ] ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", [ "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]" ], "($1)", "0 $CC ($1)" ], [ , "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", [ "[16][1-9]|[2-57-9]" ], "($1)", "0 $CC ($1)" ] ], [ [ , "(\\d{4})(\\d{4})", "$1-$2", [ "300|4(?:0[02]|37)", "4(?:02|37)0|[34]00" ] ], [ , "(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", [ "(?:[358]|90)0" ], "0$1" ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", [ "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]" ], "($1)", "0 $CC ($1)" ], [ , "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", [ "[16][1-9]|[2-57-9]" ], "($1)", "0 $CC ($1)" ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , "4020\\d{4}|[34]00\\d{5}", , , , , , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                BS: [ , [ , , "(?:242|[58]\\d\\d|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}", , , , "2423456789", , , , [ 7 ] ], [ , , "242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}", , , , "2423591234", , , , [ 7 ] ], [ , , "242300\\d{4}|8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456", , , , [ 7 ] ], [ , , "900[2-9]\\d{6}", , , , "9002123456" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "BS", 1, "011", "1", , , "1|([3-8]\\d{6})$", "242$1", , , , , [ , , , , , , , , , [ -1 ] ], , "242", [ , , , , , , , , , [ -1 ] ], [ , , "242225\\d{4}", , , , "2422250123" ], , , [ , , , , , , , , , [ -1 ] ] ],
                BT: [ , [ , , "[17]\\d{7}|[2-8]\\d{6}", , , , , , , [ 7, 8 ], [ 6 ] ], [ , , "(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}", , , , "2345678", , , [ 7 ], [ 6 ] ], [ , , "(?:1[67]|77)\\d{6}", , , , "17123456", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "BT", 975, "00", , , , , , , , [ [ , "(\\d{3})(\\d{3})", "$1 $2", [ "[2-7]" ] ], [ , "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", [ "[2-68]|7[246]" ] ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "1[67]|7" ] ] ], [ [ , "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", [ "[2-68]|7[246]" ] ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "1[67]|7" ] ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                BW: [ , [ , , "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", , , , , , , [ 7, 8, 10 ] ], [ , , "(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[013])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[03489]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}", , , , "2401234", , , [ 7 ] ], [ , , "(?:321|7(?:[1-7]\\d|8[01]))\\d{5}", , , , "71123456", , , [ 8 ] ], [ , , "(?:0800|800\\d)\\d{6}", , , , "0800012345", , , [ 10 ] ], [ , , "90\\d{5}", , , , "9012345", , , [ 7 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "79(?:1(?:[01]\\d|20)|2[0-25-7]\\d)\\d{3}", , , , "79101234", , , [ 8 ] ], "BW", 267, "00", , , , , , , , [ [ , "(\\d{2})(\\d{5})", "$1 $2", [ "90" ] ], [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[24-6]|3[15-79]" ] ], [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[37]" ] ], [ , "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", [ "0" ] ], [ , "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", [ "8" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                BY: [ , [ , , "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", , , , , , , [ 6, 7, 8, 9, 10, 11 ], [ 5 ] ], [ , , "(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d\\d)|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}", , , , "152450911", , , [ 9 ], [ 5, 6, 7 ] ], [ , , "(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}", , , , "294911911", , , [ 9 ] ], [ , , "800\\d{3,7}|8(?:0[13]|20\\d)\\d{7}", , , , "8011234567" ], [ , , "(?:810|902)\\d{7}", , , , "9021234567", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "249\\d{6}", , , , "249123456", , , [ 9 ] ], "BY", 375, "810", "8", , , "0|80?", , "8~10", , [ [ , "(\\d{3})(\\d{3})", "$1 $2", [ "800" ], "8 $1" ], [ , "(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", [ "800" ], "8 $1" ], [ , "(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", [ "1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])" ], "8 0$1" ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", [ "1(?:[56]|7[467])|2[1-3]" ], "8 0$1" ], [ , "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", [ "[1-4]" ], "8 0$1" ], [ , "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", [ "[89]" ], "8 $1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , "800\\d{3,7}|(?:8(?:0[13]|10|20\\d)|902)\\d{7}" ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                BZ: [ , [ , , "(?:0800\\d|[2-8])\\d{6}", , , , , , , [ 7, 11 ] ], [ , , "(?:2(?:[02]\\d|36|[68]0)|[3-58](?:[02]\\d|[68]0)|7(?:[02]\\d|32|[68]0))\\d{4}", , , , "2221234", , , [ 7 ] ], [ , , "6[0-35-7]\\d{5}", , , , "6221234", , , [ 7 ] ], [ , , "0800\\d{7}", , , , "08001234123", , , [ 11 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "BZ", 501, "00", , , , , , , , [ [ , "(\\d{3})(\\d{4})", "$1-$2", [ "[2-8]" ] ], [ , "(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", [ "0" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                CA: [ , [ , , "(?:[2-8]\\d|90)\\d{8}", , , , , , , [ 10 ], [ 7 ] ], [ , , "(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|6[578])|4(?:03|1[68]|3[178]|50|68|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", , , , "5062345678", , , , [ 7 ] ], [ , , "(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|6[578])|4(?:03|1[68]|3[178]|50|68|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|13|39|47|72)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", , , , "5062345678", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456" ], [ , , "900[2-9]\\d{6}", , , , "9002123456" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-7]|33|44|66|77|88)|622)[2-9]\\d{6}", , , , "5002345678" ], [ , , "600[2-9]\\d{6}", , , , "6002012345" ], "CA", 1, "011", "1", , , "1", , , 1, , , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                CC: [ , [ , , "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", , , , , , , [ 6, 7, 8, 9, 10, 12 ] ], [ , , "8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", , , , "891621234", , , [ 9 ], [ 8 ] ], [ , , "4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", , , , "412345678", , , [ 9 ] ], [ , , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [ 7, 10 ] ], [ , , "190[0-26]\\d{6}", , , , "1900123456", , , [ 10 ] ], [ , , "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", , , , "1300123456", , , [ 6, 8, 10, 12 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", , , , "147101234", , , [ 9 ] ], "CC", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0", , , "0|([59]\\d{7})$", "8$1", "0011", , , , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                CD: [ , [ , , "[189]\\d{8}|[1-68]\\d{6}", , , , , , , [ 7, 9 ] ], [ , , "12\\d{7}|[1-6]\\d{6}", , , , "1234567" ], [ , , "88\\d{5}|(?:8[0-59]|9[017-9])\\d{7}", , , , "991234567" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "CD", 243, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", [ "88" ], "0$1" ], [ , "(\\d{2})(\\d{5})", "$1 $2", [ "[1-6]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "1" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[89]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                CF: [ , [ , , "(?:[27]\\d{3}|8776)\\d{4}", , , , , , , [ 8 ] ], [ , , "2[12]\\d{6}", , , , "21612345" ], [ , , "7[02457]\\d{6}", , , , "70012345" ], [ , , , , , , , , , [ -1 ] ], [ , , "8776\\d{4}", , , , "87761234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "CF", 236, "00", , , , , , , , [ [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[278]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                CG: [ , [ , , "222\\d{6}|(?:0\\d|80)\\d{7}", , , , , , , [ 9 ] ], [ , , "222[1-589]\\d{5}", , , , "222123456" ], [ , , "026(?:1[0-5]|6[6-9])\\d{4}|0(?:[14-6]\\d\\d|2(?:40|5[5-8]|6[07-9]))\\d{5}", , , , "061234567" ], [ , , , , , , , , , [ -1 ] ], [ , , "80(?:0\\d\\d|120)\\d{4}", , , , "800123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "CG", 242, "00", , , , , , , , [ [ , "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", [ "8" ] ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[02]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                CH: [ , [ , , "8\\d{11}|[2-9]\\d{8}", , , , , , , [ 9, 12 ] ], [ , , "(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}", , , , "212345678", , , [ 9 ] ], [ , , "7[35-9]\\d{7}", , , , "781234567", , , [ 9 ] ], [ , , "800\\d{6}", , , , "800123456", , , [ 9 ] ], [ , , "90[016]\\d{6}", , , , "900123456", , , [ 9 ] ], [ , , "84[0248]\\d{6}", , , , "840123456", , , [ 9 ] ], [ , , "878\\d{6}", , , , "878123456", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], "CH", 41, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "8[047]|90" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[2-79]|81" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", [ "8" ], "0$1" ] ], , [ , , "74[0248]\\d{6}", , , , "740123456", , , [ 9 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "5[18]\\d{7}", , , , "581234567", , , [ 9 ] ], , , [ , , "860\\d{9}", , , , "860123456789", , , [ 12 ] ] ],
                CI: [ , [ , , "[02]\\d{9}", , , , , , , [ 10 ] ], [ , , "2(?:[15]\\d{3}|7(?:2(?:0[23]|1[2357]|[23][45]|4[3-5])|3(?:06|1[69]|[2-6]7)))\\d{5}", , , , "2123456789" ], [ , , "0704[0-7]\\d{5}|0(?:[15]\\d\\d|7(?:0[0-37-9]|[4-9][7-9]))\\d{6}", , , , "0123456789" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "CI", 225, "00", , , , , , , , [ [ , "(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", [ "2" ] ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", [ "0" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                CK: [ , [ , , "[2-578]\\d{4}", , , , , , , [ 5 ] ], [ , , "(?:2\\d|3[13-7]|4[1-5])\\d{3}", , , , "21234" ], [ , , "[578]\\d{4}", , , , "71234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "CK", 682, "00", , , , , , , , [ [ , "(\\d{2})(\\d{3})", "$1 $2", [ "[2-578]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                CL: [ , [ , , "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", , , , , , , [ 9, 10, 11 ] ], [ , , "2(?:1982[0-6]|3314[05-9])\\d{3}|(?:2(?:1(?:160|962)|3(?:2\\d\\d|3(?:[034]\\d|1[0-35-9]|2[1-9]|5[0-2])|600)|6469)|80[1-9]\\d\\d|9(?:3(?:[0-57-9]\\d\\d|6(?:0[02-9]|[1-9]\\d))|6(?:[0-8]\\d\\d|9(?:[02-79]\\d|1[05-9]))|7[1-9]\\d\\d|9(?:[03-9]\\d\\d|1(?:[0235-9]\\d|4[0-24-9])|2(?:[0-79]\\d|8[0-46-9]))))\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\\d{7}", , , , "221234567", , , [ 9 ] ], [ , , "2(?:1982[0-6]|3314[05-9])\\d{3}|(?:2(?:1(?:160|962)|3(?:2\\d\\d|3(?:[034]\\d|1[0-35-9]|2[1-9]|5[0-2])|600)|6469)|80[1-9]\\d\\d|9(?:3(?:[0-57-9]\\d\\d|6(?:0[02-9]|[1-9]\\d))|6(?:[0-8]\\d\\d|9(?:[02-79]\\d|1[05-9]))|7[1-9]\\d\\d|9(?:[03-9]\\d\\d|1(?:[0235-9]\\d|4[0-24-9])|2(?:[0-79]\\d|8[0-46-9]))))\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\\d{7}", , , , "221234567", , , [ 9 ] ], [ , , "(?:123|8)00\\d{6}", , , , "800123456", , , [ 9, 11 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "600\\d{7,8}", , , , "6001234567", , , [ 10, 11 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "44\\d{7}", , , , "441234567", , , [ 9 ] ], "CL", 56, "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", , , , , , , 1, [ [ , "(\\d{4})", "$1", [ "1(?:[03-589]|21)|[29]0|78" ] ], [ , "(\\d{5})(\\d{4})", "$1 $2", [ "219", "2196" ], "($1)" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "44" ] ], [ , "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", [ "2[1-36]" ], "($1)" ], [ , "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", [ "9[2-9]" ] ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])" ], "($1)" ], [ , "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "60|8" ] ], [ , "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", [ "1" ] ], [ , "(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", [ "60" ] ] ], [ [ , "(\\d{5})(\\d{4})", "$1 $2", [ "219", "2196" ], "($1)" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "44" ] ], [ , "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", [ "2[1-36]" ], "($1)" ], [ , "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", [ "9[2-9]" ] ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])" ], "($1)" ], [ , "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "60|8" ] ], [ , "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", [ "1" ] ], [ , "(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", [ "60" ] ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , "600\\d{7,8}", , , , , , , [ 10, 11 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                CM: [ , [ , , "[26]\\d{8}|88\\d{6,7}", , , , , , , [ 8, 9 ] ], [ , , "2(?:22|33)\\d{6}", , , , "222123456", , , [ 9 ] ], [ , , "(?:24[23]|6[5-9]\\d)\\d{6}", , , , "671234567", , , [ 9 ] ], [ , , "88\\d{6,7}", , , , "88012345" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "CM", 237, "00", , , , , , , , [ [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "88" ] ], [ , "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", [ "[26]|88" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                CN: [ , [ , , "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", , , , , , , [ 7, 8, 9, 10, 11, 12 ], [ 5, 6 ] ], [ , , "(?:10(?:[02-79]\\d\\d|[18](?:0[1-9]|[1-9]\\d))|21(?:[18](?:0[1-9]|[1-9]\\d)|[2-79]\\d\\d))\\d{5}|(?:43[35]|754)\\d{7,8}|8(?:078\\d{7}|51\\d{7,8})|(?:10|(?:2|85)1|43[35]|754)(?:100\\d\\d|95\\d{3,4})|(?:2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[57]|6[09])|8(?:71|98))(?:[02-8]\\d{7}|1(?:0(?:0\\d\\d(?:\\d{3})?|[1-9]\\d{5})|[1-9]\\d{6})|9(?:[0-46-9]\\d{6}|5\\d{3}(?:\\d(?:\\d{2})?)?))|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[46-9]|5[2-9]|6[47-9]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-3689]|6[2368]|9[02-9])|8(?:1[236-8]|2[5-7]|3\\d|5[2-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]\\d{6}|1(?:0(?:0\\d\\d(?:\\d{2})?|[1-9]\\d{4})|[1-9]\\d{5})|9(?:[0-46-9]\\d{5}|5\\d{3,5}))", , , , "1012345678", , , [ 7, 8, 9, 10, 11 ], [ 5, 6 ] ], [ , , "1740[0-5]\\d{6}|1(?:[38]\\d|4[57]|5[0-35-9]|6[25-7]|7[0-35-8]|9[0135-9])\\d{8}", , , , "13123456789", , , [ 11 ] ], [ , , "(?:(?:10|21)8|8)00\\d{7}", , , , "8001234567", , , [ 10, 12 ] ], [ , , "16[08]\\d{5}", , , , "16812345", , , [ 8 ] ], [ , , "400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}", , , , "4001234567", , , [ 7, 8, 9, 10, 11 ], [ 5, 6 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "CN", 86, "00|1(?:[12]\\d|79)\\d\\d00", "0", , , "0|(1(?:[12]\\d|79)\\d\\d)", , "00", , [ [ , "(\\d{5,6})", "$1", [ "96" ] ], [ , "(\\d{2})(\\d{5,6})", "$1 $2", [ "(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])" ], "0$1", "$CC $1" ], [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[1-9]", "1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])", "1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[02-8]|1(?:0[1-9]|[1-9])|9[0-47-9])" ] ], [ , "(\\d{4})(\\d{4})", "$1 $2", [ "16[08]" ] ], [ , "(\\d{3})(\\d{5,6})", "$1 $2", [ "3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])" ], "0$1", "$CC $1" ], [ , "(\\d{4})(\\d{4})", "$1 $2", [ "[1-9]", "1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])", "26|3(?:[0268]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|90)|6(?:[0-24578]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|50|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9])|(?:34|85[23])[0-8]|(?:1|58)[1-9]|(?:63|95)[06-9]|(?:33|85[23]9)[0-46-9]|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[0-8]|9[0-47-9])", "26|3(?:[0268]|3[0-46-9]|4[0-8]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|5(?:0|[23](?:[02-8]|1[1-9]|9[0-46-9]))|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9])|(?:1|58|85[23]10)[1-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]|1(?:0[1-9]|[1-9])|9[0-47-9])" ] ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "(?:4|80)0" ] ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", [ "10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])" ], "0$1", "$CC $1", 1 ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]" ], "0$1", "$CC $1", 1 ], [ , "(\\d{3})(\\d{7,8})", "$1 $2", [ "9" ] ], [ , "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", [ "80" ], "0$1", "$CC $1", 1 ], [ , "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", [ "[3-578]" ], "0$1", "$CC $1", 1 ], [ , "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", [ "1[3-9]" ], , "$CC $1" ], [ , "(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", [ "[12]" ], "0$1", , 1 ] ], [ [ , "(\\d{2})(\\d{5,6})", "$1 $2", [ "(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "(?:10|2[0-57-9])(?:100|9[56])" ], "0$1", "$CC $1" ], [ , "(\\d{3})(\\d{5,6})", "$1 $2", [ "3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])" ], "0$1", "$CC $1" ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "(?:4|80)0" ] ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", [ "10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])" ], "0$1", "$CC $1", 1 ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]" ], "0$1", "$CC $1", 1 ], [ , "(\\d{3})(\\d{7,8})", "$1 $2", [ "9" ] ], [ , "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", [ "80" ], "0$1", "$CC $1", 1 ], [ , "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", [ "[3-578]" ], "0$1", "$CC $1", 1 ], [ , "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", [ "1[3-9]" ], , "$CC $1" ], [ , "(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", [ "[12]" ], "0$1", , 1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , "(?:(?:10|21)8|[48])00\\d{7}|950\\d{7,8}", , , , , , , [ 10, 11, 12 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                CO: [ , [ , , "(?:(?:1\\d|[36])\\d{3}|9101)\\d{6}|[124-8]\\d{7}", , , , , , , [ 8, 10, 11 ], [ 7 ] ], [ , , "60[124-8][2-9]\\d{6}|[124-8][2-9]\\d{6}", , , , "12345678", , , [ 8, 10 ], [ 7 ] ], [ , , "3333(?:0(?:0\\d|1[0-5])|[4-9]\\d\\d)\\d{3}|(?:3(?:24[1-9]|3(?:00|3[0-24-9]))|9101)\\d{6}|3(?:0[0-5]|1\\d|2[0-3]|5[01]|70)\\d{7}", , , , "3211234567", , , [ 10 ] ], [ , , "1800\\d{7}", , , , "18001234567", , , [ 11 ] ], [ , , "19(?:0[01]|4[78])\\d{7}", , , , "19001234567", , , [ 11 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "CO", 57, "00(?:4(?:[14]4|56)|[579])", "0", , , "0([3579]|4(?:[14]4|56))?", , , , [ [ , "(\\d)(\\d{7})", "$1 $2", [ "[146][2-9]|[2578]" ], "($1)", "0$CC $1" ], [ , "(\\d{3})(\\d{7})", "$1 $2", [ "6" ], "($1)" ], [ , "(\\d{3})(\\d{7})", "$1 $2", [ "[39]" ], , "0$CC $1" ], [ , "(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", [ "1" ], "0$1" ] ], [ [ , "(\\d)(\\d{7})", "$1 $2", [ "[146][2-9]|[2578]" ], "($1)", "0$CC $1" ], [ , "(\\d{3})(\\d{7})", "$1 $2", [ "6" ], "($1)" ], [ , "(\\d{3})(\\d{7})", "$1 $2", [ "[39]" ], , "0$CC $1" ], [ , "(\\d)(\\d{3})(\\d{7})", "$1 $2 $3", [ "1" ] ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                CR: [ , [ , , "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", , , , , , , [ 8, 10 ] ], [ , , "210[7-9]\\d{4}|2(?:[024-7]\\d|1[1-9])\\d{5}", , , , "22123456", , , [ 8 ] ], [ , , "(?:3005\\d|6500[01])\\d{3}|(?:5[07]|6[0-4]|7[0-3]|8[3-9])\\d{6}", , , , "83123456", , , [ 8 ] ], [ , , "800\\d{7}", , , , "8001234567", , , [ 10 ] ], [ , , "90[059]\\d{7}", , , , "9001234567", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "(?:210[0-6]|4\\d{3}|5100)\\d{4}", , , , "40001234", , , [ 8 ] ], "CR", 506, "00", , , , "(19(?:0[0-2468]|1[09]|20|66|77|99))", , , , [ [ , "(\\d{4})(\\d{4})", "$1 $2", [ "[2-7]|8[3-9]" ], , "$CC $1" ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", [ "[89]" ], , "$CC $1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                CU: [ , [ , , "[27]\\d{6,7}|[34]\\d{5,7}|(?:5|8\\d\\d)\\d{7}", , , , , , , [ 6, 7, 8, 10 ], [ 4, 5 ] ], [ , , "(?:3[23]|48)\\d{4,6}|(?:31|4[36]|8(?:0[25]|78)\\d)\\d{6}|(?:2[1-4]|4[1257]|7\\d)\\d{5,6}", , , , "71234567", , , , [ 4, 5 ] ], [ , , "5\\d{7}", , , , "51234567", , , [ 8 ] ], [ , , "800\\d{7}", , , , "8001234567", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "807\\d{7}", , , , "8071234567", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "CU", 53, "119", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{4,6})", "$1 $2", [ "2[1-4]|[34]" ], "(0$1)" ], [ , "(\\d)(\\d{6,7})", "$1 $2", [ "7" ], "(0$1)" ], [ , "(\\d)(\\d{7})", "$1 $2", [ "5" ], "0$1" ], [ , "(\\d{3})(\\d{7})", "$1 $2", [ "8" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                CV: [ , [ , , "(?:[2-59]\\d\\d|800)\\d{4}", , , , , , , [ 7 ] ], [ , , "2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}", , , , "2211234" ], [ , , "(?:36|5[1-389]|9\\d)\\d{5}", , , , "9911234" ], [ , , "800\\d{4}", , , , "8001234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "(?:3[3-5]|4[356])\\d{5}", , , , "3401234" ], "CV", 238, "0", , , , , , , , [ [ , "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", [ "[2-589]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                CW: [ , [ , , "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", , , , , , , [ 7, 8 ] ], [ , , "9(?:4(?:3[0-5]|4[14]|6\\d)|50\\d|7(?:2[014]|3[02-9]|4[4-9]|6[357]|77|8[7-9])|8(?:3[39]|[46]\\d|7[01]|8[57-9]))\\d{4}", , , , "94351234" ], [ , , "953[01]\\d{4}|9(?:5[12467]|6[5-9])\\d{5}", , , , "95181234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "60[0-2]\\d{4}", , , , "6001234", , , [ 7 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "CW", 599, "00", , , , , , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[3467]" ] ], [ , "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", [ "9[4-8]" ] ] ], , [ , , "955\\d{5}", , , , "95581234", , , [ 8 ] ], 1, "[69]", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                CX: [ , [ , , "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", , , , , , , [ 6, 7, 8, 9, 10, 12 ] ], [ , , "8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", , , , "891641234", , , [ 9 ], [ 8 ] ], [ , , "4(?:83[0-38]|93[0-6])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-24-9]|9[0-27-9])\\d{6}", , , , "412345678", , , [ 9 ] ], [ , , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [ 7, 10 ] ], [ , , "190[0-26]\\d{6}", , , , "1900123456", , , [ 10 ] ], [ , , "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", , , , "1300123456", , , [ 6, 8, 10, 12 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", , , , "147101234", , , [ 9 ] ], "CX", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0", , , "0|([59]\\d{7})$", "8$1", "0011", , , , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                CY: [ , [ , , "(?:[279]\\d|[58]0)\\d{6}", , , , , , , [ 8 ] ], [ , , "2[2-6]\\d{6}", , , , "22345678" ], [ , , "9[4-79]\\d{6}", , , , "96123456" ], [ , , "800\\d{5}", , , , "80001234" ], [ , , "90[09]\\d{5}", , , , "90012345" ], [ , , "80[1-9]\\d{5}", , , , "80112345" ], [ , , "700\\d{5}", , , , "70012345" ], [ , , , , , , , , , [ -1 ] ], "CY", 357, "00", , , , , , , , [ [ , "(\\d{2})(\\d{6})", "$1 $2", [ "[257-9]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "(?:50|77)\\d{6}", , , , "77123456" ], , , [ , , , , , , , , , [ -1 ] ] ],
                CZ: [ , [ , , "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", , , , , , , [ 9, 10, 11, 12 ] ], [ , , "(?:2\\d|3[1257-9]|4[16-9]|5[13-9])\\d{7}", , , , "212345678", , , [ 9 ] ], [ , , "(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}", , , , "601123456", , , [ 9 ] ], [ , , "800\\d{6}", , , , "800123456", , , [ 9 ] ], [ , , "9(?:0[05689]|76)\\d{6}", , , , "900123456", , , [ 9 ] ], [ , , "8[134]\\d{7}", , , , "811234567", , , [ 9 ] ], [ , , "70[01]\\d{6}", , , , "700123456", , , [ 9 ] ], [ , , "9[17]0\\d{6}", , , , "910123456", , , [ 9 ] ], "CZ", 420, "00", , , , , , , , [ [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[2-8]|9[015-7]" ] ], [ , "(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", [ "96" ] ], [ , "(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", [ "9" ] ], [ , "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", [ "9" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "9(?:5\\d|7[2-4])\\d{6}", , , , "972123456", , , [ 9 ] ], , , [ , , "9(?:3\\d{9}|6\\d{7,10})", , , , "93123456789" ] ],
                DE: [ , [ , , "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:1\\d|2[02-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[05]\\d|[23]1|[46][1-8])\\d{1,9}", , , , , , , [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ], [ 2, 3 ] ], [ , , "32\\d{9,11}|49[2-6]\\d{10}|49[0-7]\\d{3,9}|(?:[34]0|[68]9)\\d{3,13}|(?:2(?:0[1-689]|[1-3569]\\d|4[0-8]|7[1-7]|8[0-7])|3(?:[3569]\\d|4[0-79]|7[1-7]|8[1-8])|4(?:1[02-9]|[2-48]\\d|5[0-6]|6[0-8]|7[0-79])|5(?:0[2-8]|[124-6]\\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-358]\\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|2\\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\\d|[589][0-7]|6[0-8]|7[0-467]))\\d{3,12}", , , , "30123456", , , [ 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ], [ 2, 3, 4 ] ], [ , , "15[0-25-9]\\d{8}|1(?:6[023]|7\\d)\\d{7,8}", , , , "15123456789", , , [ 10, 11 ] ], [ , , "800\\d{7,12}", , , , "8001234567890", , , [ 10, 11, 12, 13, 14, 15 ] ], [ , , "(?:137[7-9]|900(?:[135]|9\\d))\\d{6}", , , , "9001234567", , , [ 10, 11 ] ], [ , , "180\\d{5,11}|13(?:7[1-6]\\d\\d|8)\\d{4}", , , , "18012345", , , [ 7, 8, 9, 10, 11, 12, 13, 14 ] ], [ , , "700\\d{8}", , , , "70012345678", , , [ 11 ] ], [ , , , , , , , , , [ -1 ] ], "DE", 49, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{3,13})", "$1 $2", [ "3[02]|40|[68]9" ], "0$1" ], [ , "(\\d{3})(\\d{3,12})", "$1 $2", [ "2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1" ], "0$1" ], [ , "(\\d{4})(\\d{2,11})", "$1 $2", [ "[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]" ], "0$1" ], [ , "(\\d{3})(\\d{4})", "$1 $2", [ "138" ], "0$1" ], [ , "(\\d{5})(\\d{2,10})", "$1 $2", [ "3" ], "0$1" ], [ , "(\\d{3})(\\d{5,11})", "$1 $2", [ "181" ], "0$1" ], [ , "(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", [ "1(?:3|80)|9" ], "0$1" ], [ , "(\\d{3})(\\d{7,8})", "$1 $2", [ "1[67]" ], "0$1" ], [ , "(\\d{3})(\\d{7,12})", "$1 $2", [ "8" ], "0$1" ], [ , "(\\d{5})(\\d{6})", "$1 $2", [ "185", "1850", "18500" ], "0$1" ], [ , "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", [ "7" ], "0$1" ], [ , "(\\d{4})(\\d{7})", "$1 $2", [ "18[68]" ], "0$1" ], [ , "(\\d{5})(\\d{6})", "$1 $2", [ "15[0568]" ], "0$1" ], [ , "(\\d{4})(\\d{7})", "$1 $2", [ "15[1279]" ], "0$1" ], [ , "(\\d{3})(\\d{8})", "$1 $2", [ "18" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", [ "1(?:6[023]|7)" ], "0$1" ], [ , "(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", [ "15[279]" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", [ "15" ], "0$1" ] ], , [ , , "16(?:4\\d{1,10}|[89]\\d{1,11})", , , , "16412345", , , [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "18(?:1\\d{5,11}|[2-9]\\d{8})", , , , "18500123456", , , [ 8, 9, 10, 11, 12, 13, 14 ] ], , , [ , , "1(?:6(?:013|255|399)|7(?:(?:[015]1|[69]3)3|[2-4]55|[78]99))\\d{7,8}|15(?:(?:[03-68]00|113)\\d|2\\d55|7\\d99|9\\d33)\\d{7}", , , , "177991234567", , , [ 12, 13 ] ] ],
                DJ: [ , [ , , "(?:2\\d|77)\\d{6}", , , , , , , [ 8 ] ], [ , , "2(?:1[2-5]|7[45])\\d{5}", , , , "21360003" ], [ , , "77\\d{6}", , , , "77831001" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "DJ", 253, "00", , , , , , , , [ [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[27]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                DK: [ , [ , , "[2-9]\\d{7}", , , , , , , [ 8 ] ], [ , , "(?:[2-7]\\d|8[126-9]|9[1-46-9])\\d{6}", , , , "32123456" ], [ , , "(?:[2-7]\\d|8[126-9]|9[1-46-9])\\d{6}", , , , "32123456" ], [ , , "80\\d{6}", , , , "80123456" ], [ , , "90\\d{6}", , , , "90123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "DK", 45, "00", , , , , , , 1, [ [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[2-9]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                DM: [ , [ , , "(?:[58]\\d\\d|767|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4])\\d{4}", , , , "7674201234", , , , [ 7 ] ], [ , , "767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-8]|70[1-6])\\d{4}", , , , "7672251234", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456" ], [ , , "900[2-9]\\d{6}", , , , "9002123456" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "DM", 1, "011", "1", , , "1|([2-7]\\d{6})$", "767$1", , , , , [ , , , , , , , , , [ -1 ] ], , "767", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                DO: [ , [ , , "(?:[58]\\d\\d|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}", , , , "8092345678", , , , [ 7 ] ], [ , , "8[024]9[2-9]\\d{6}", , , , "8092345678", , , , [ 7 ] ], [ , , "8(?:00(?:14|[2-9]\\d)|(?:33|44|55|66|77|88)[2-9]\\d)\\d{5}", , , , "8002123456" ], [ , , "900[2-9]\\d{6}", , , , "9002123456" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "DO", 1, "011", "1", , , "1", , , , , , [ , , , , , , , , , [ -1 ] ], , "8001|8[024]9", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                DZ: [ , [ , , "(?:[1-4]|[5-79]\\d|80)\\d{7}", , , , , , , [ 8, 9 ] ], [ , , "9619\\d{5}|(?:1\\d|2[013-79]|3[0-8]|4[013-689])\\d{6}", , , , "12345678" ], [ , , "(?:5(?:4[0-29]|5\\d|6[0-2])|6(?:[569]\\d|7[0-6])|7[7-9]\\d)\\d{6}", , , , "551234567", , , [ 9 ] ], [ , , "800\\d{6}", , , , "800123456", , , [ 9 ] ], [ , , "80[3-689]1\\d{5}", , , , "808123456", , , [ 9 ] ], [ , , "80[12]1\\d{5}", , , , "801123456", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "98[23]\\d{6}", , , , "983123456", , , [ 9 ] ], "DZ", 213, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[1-4]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "9" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[5-8]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                EC: [ , [ , , "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", , , , , , , [ 8, 9, 10, 11 ], [ 7 ] ], [ , , "[2-7][2-7]\\d{6}", , , , "22123456", , , [ 8 ], [ 7 ] ], [ , , "964[0-2]\\d{5}|9(?:39|[57][89]|6[0-36-9]|[89]\\d)\\d{6}", , , , "991234567", , , [ 9 ] ], [ , , "1800\\d{7}|1[78]00\\d{6}", , , , "18001234567", , , [ 10, 11 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "[2-7]890\\d{4}", , , , "28901234", , , [ 8 ] ], "EC", 593, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{4})", "$1-$2", [ "[2-7]" ] ], [ , "(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", [ "[2-7]" ], "(0$1)" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "9" ], "0$1" ], [ , "(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "1" ] ] ], [ [ , "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", [ "[2-7]" ] ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "9" ], "0$1" ], [ , "(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "1" ] ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                EE: [ , [ , , "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", , , , , , , [ 7, 8, 10 ] ], [ , , "(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}", , , , "3212345", , , [ 7 ] ], [ , , "(?:5\\d{5}|8(?:1(?:0(?:000|[3-9]\\d\\d)|(?:1(?:0[236]|1\\d)|(?:23|[3-79]\\d)\\d)\\d)|2(?:0(?:000|(?:19|[2-7]\\d)\\d)|(?:(?:[124-6]\\d|3[5-9])\\d|7(?:[3679]\\d|8[13-9])|8(?:[2-6]\\d|7[01]))\\d)|[349]\\d{4}))\\d\\d|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}", , , , "51234567", , , [ 7, 8 ] ], [ , , "800(?:(?:0\\d\\d|1)\\d|[2-9])\\d{3}", , , , "80012345" ], [ , , "(?:40\\d\\d|900)\\d{4}", , , , "9001234", , , [ 7, 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "70[0-2]\\d{5}", , , , "70012345", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], "EE", 372, "00", , , , , , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88" ] ], [ , "(\\d{4})(\\d{3,4})", "$1 $2", [ "[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])" ] ], [ , "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", [ "7" ] ], [ , "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", [ "8" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , "800[2-9]\\d{3}", , , , , , , [ 7 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                EG: [ , [ , , "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", , , , , , , [ 8, 9, 10 ], [ 6, 7 ] ], [ , , "13[23]\\d{6}|(?:15|57)\\d{6,7}|(?:2[2-4]|3|4[05-8]|5[05]|6[24-689]|8[2468]|9[235-7])\\d{7}", , , , "234567890", , , [ 8, 9 ], [ 6, 7 ] ], [ , , "1[0-25]\\d{8}", , , , "1001234567", , , [ 10 ] ], [ , , "800\\d{7}", , , , "8001234567", , , [ 10 ] ], [ , , "900\\d{7}", , , , "9001234567", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "EG", 20, "00", "0", , , "0", , , , [ [ , "(\\d)(\\d{7,8})", "$1 $2", [ "[23]" ], "0$1" ], [ , "(\\d{2})(\\d{6,7})", "$1 $2", [ "1[35]|[4-6]|8[2468]|9[235-7]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[189]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                EH: [ , [ , , "[5-8]\\d{8}", , , , , , , [ 9 ] ], [ , , "528[89]\\d{5}", , , , "528812345" ], [ , , "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|6[0-367]))\\d{6}", , , , "650123456" ], [ , , "80\\d{7}", , , , "801234567" ], [ , , "89\\d{7}", , , , "891234567" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "592(?:4[0-2]|93)\\d{4}", , , , "592401234" ], "EH", 212, "00", "0", , , "0", , , , , , [ , , , , , , , , , [ -1 ] ], , "528[89]", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                ER: [ , [ , , "[178]\\d{6}", , , , , , , [ 7 ], [ 6 ] ], [ , , "(?:1(?:1[12568]|[24]0|55|6[146])|8\\d\\d)\\d{4}", , , , "8370362", , , , [ 6 ] ], [ , , "(?:17[1-3]|7\\d\\d)\\d{4}", , , , "7123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "ER", 291, "00", "0", , , "0", , , , [ [ , "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", [ "[178]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                ES: [ , [ , , "[5-9]\\d{8}", , , , , , , [ 9 ] ], [ , , "96906(?:0[0-8]|1[1-9]|[2-9]\\d)\\d\\d|9(?:69(?:0[0-57-9]|[1-9]\\d)|73(?:[0-8]\\d|9[1-9]))\\d{4}|(?:8(?:[1356]\\d|[28][0-8]|[47][1-9])|9(?:[135]\\d|[268][0-8]|4[1-9]|7[124-9]))\\d{6}", , , , "810123456" ], [ , , "(?:590[16]00\\d|9(?:6906(?:09|10)|7390\\d\\d))\\d\\d|(?:6\\d|7[1-48])\\d{7}", , , , "612345678" ], [ , , "[89]00\\d{6}", , , , "800123456" ], [ , , "80[367]\\d{6}", , , , "803123456" ], [ , , "90[12]\\d{6}", , , , "901123456" ], [ , , "70\\d{7}", , , , "701234567" ], [ , , , , , , , , , [ -1 ] ], "ES", 34, "00", , , , , , , , [ [ , "(\\d{4})", "$1", [ "905" ] ], [ , "(\\d{6})", "$1", [ "[79]9" ] ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[89]00" ] ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[5-9]" ] ] ], [ [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[89]00" ] ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[5-9]" ] ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "51\\d{7}", , , , "511234567" ], , , [ , , , , , , , , , [ -1 ] ] ],
                ET: [ , [ , , "(?:11|[2-59]\\d)\\d{7}", , , , , , , [ 9 ], [ 7 ] ], [ , , "11667[01]\\d{3}|(?:11(?:1(?:1[124]|2[2-7]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:1[78]|2[69]|39|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|(?:22|55)[0-6]|33[0134689]|44[04]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:119|22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:(?:11|22)[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}", , , , "111112345", , , , [ 7 ] ], [ , , "9\\d{8}", , , , "911234567" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "ET", 251, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[1-59]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                FI: [ , [ , , "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", , , , , , , [ 5, 6, 7, 8, 9, 10, 11, 12 ] ], [ , , "(?:1[3-79][1-8]|[235689][1-8]\\d)\\d{2,6}", , , , "131234567", , , [ 5, 6, 7, 8, 9 ] ], [ , , "4946\\d{2,6}|(?:4[0-8]|50)\\d{4,8}", , , , "412345678", , , [ 6, 7, 8, 9, 10 ] ], [ , , "800\\d{4,6}", , , , "800123456", , , [ 7, 8, 9 ] ], [ , , "[67]00\\d{5,6}", , , , "600123456", , , [ 8, 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "FI", 358, "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "0", , , "0", , "00", , [ [ , "(\\d{5})", "$1", [ "75[12]" ], "0$1" ], [ , "(\\d)(\\d{4,9})", "$1 $2", [ "[2568][1-8]|3(?:0[1-9]|[1-9])|9" ], "0$1" ], [ , "(\\d{6})", "$1", [ "11" ] ], [ , "(\\d{3})(\\d{3,7})", "$1 $2", [ "[12]00|[368]|70[07-9]" ], "0$1" ], [ , "(\\d{2})(\\d{4,8})", "$1 $2", [ "[1245]|7[135]" ], "0$1" ], [ , "(\\d{2})(\\d{6,10})", "$1 $2", [ "7" ], "0$1" ] ], [ [ , "(\\d)(\\d{4,9})", "$1 $2", [ "[2568][1-8]|3(?:0[1-9]|[1-9])|9" ], "0$1" ], [ , "(\\d{3})(\\d{3,7})", "$1 $2", [ "[12]00|[368]|70[07-9]" ], "0$1" ], [ , "(\\d{2})(\\d{4,8})", "$1 $2", [ "[1245]|7[135]" ], "0$1" ], [ , "(\\d{2})(\\d{6,10})", "$1 $2", [ "7" ], "0$1" ] ], [ , , , , , , , , , [ -1 ] ], 1, "1[03-79]|[2-9]", [ , , "20(?:2[023]|9[89])\\d{1,6}|(?:60[12]\\d|7099)\\d{4,5}|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:[1-3]00|7(?:0[1-5]\\d\\d|5[03-9]))\\d{3,7}" ], [ , , "20\\d{4,8}|60[12]\\d{5,6}|7(?:099\\d{4,5}|5[03-9]\\d{3,7})|20[2-59]\\d\\d|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:10|29|3[09]|70[1-5]\\d)\\d{4,8}", , , , "10112345" ], , , [ , , , , , , , , , [ -1 ] ] ],
                FJ: [ , [ , , "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", , , , , , , [ 7, 11 ] ], [ , , "603\\d{4}|(?:3[0-5]|6[25-7]|8[58])\\d{5}", , , , "3212345", , , [ 7 ] ], [ , , "(?:[279]\\d|45|5[01568]|8[034679])\\d{5}", , , , "7012345", , , [ 7 ] ], [ , , "0800\\d{7}", , , , "08001234567", , , [ 11 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "FJ", 679, "0(?:0|52)", , , , , , "00", , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[235-9]|45" ] ], [ , "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", [ "0" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                FK: [ , [ , , "[2-7]\\d{4}", , , , , , , [ 5 ] ], [ , , "[2-47]\\d{4}", , , , "31234" ], [ , , "[56]\\d{4}", , , , "51234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "FK", 500, "00", , , , , , , , , , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                FM: [ , [ , , "(?:[39]\\d\\d|820)\\d{4}", , , , , , , [ 7 ] ], [ , , "31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-6]\\d)\\d)\\d{3}", , , , "3201234" ], [ , , "31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-7]\\d)\\d)\\d{3}", , , , "3501234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "FM", 691, "00", , , , , , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[389]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                FO: [ , [ , , "[2-9]\\d{5}", , , , , , , [ 6 ] ], [ , , "(?:20|[34]\\d|8[19])\\d{4}", , , , "201234" ], [ , , "(?:[27][1-9]|5\\d|91)\\d{4}", , , , "211234" ], [ , , "80[257-9]\\d{3}", , , , "802123" ], [ , , "90(?:[13-5][15-7]|2[125-7]|9\\d)\\d\\d", , , , "901123" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "(?:6[0-36]|88)\\d{4}", , , , "601234" ], "FO", 298, "00", , , , "(10(?:01|[12]0|88))", , , , [ [ , "(\\d{6})", "$1", [ "[2-9]" ], , "$CC $1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                FR: [ , [ , , "[1-9]\\d{8}", , , , , , , [ 9 ] ], [ , , "(?:[1-35]\\d|4[1-9])\\d{7}", , , , "123456789" ], [ , , "(?:6(?:[0-24-8]\\d|3[0-8]|9[589])|7(?:00|[3-9]\\d))\\d{6}", , , , "612345678" ], [ , , "80[0-5]\\d{6}", , , , "801234567" ], [ , , "836(?:0[0-36-9]|[1-9]\\d)\\d{4}|8(?:1[2-9]|2[2-47-9]|3[0-57-9]|[569]\\d|8[0-35-9])\\d{6}", , , , "891123456" ], [ , , "8(?:1[01]|2[0156]|4[02]|84)\\d{6}", , , , "884012345" ], [ , , , , , , , , , [ -1 ] ], [ , , "9\\d{8}", , , , "912345678" ], "FR", 33, "00", "0", , , "0", , , , [ [ , "(\\d{4})", "$1", [ "10" ] ], [ , "(\\d{3})(\\d{3})", "$1 $2", [ "1" ] ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "8" ], "0 $1" ], [ , "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", [ "[1-79]" ], "0$1" ] ], [ [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "8" ], "0 $1" ], [ , "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", [ "[1-79]" ], "0$1" ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "80[6-9]\\d{6}", , , , "806123456" ], , , [ , , , , , , , , , [ -1 ] ] ],
                GA: [ , [ , , "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", , , , , , , [ 7, 8 ] ], [ , , "[01]1\\d{6}", , , , "01441234", , , [ 8 ] ], [ , , "(?:(?:0[2-7]|7[467])\\d|6(?:0[0-4]|10|[256]\\d))\\d{5}|[2-7]\\d{6}", , , , "06031234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "GA", 241, "00", , , , "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1", , , [ [ , "(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[2-7]" ], "0$1" ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "0" ] ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "11|[67]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                GB: [ , [ , , "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", , , , , , , [ 7, 9, 10 ], [ 4, 5, 6, 8 ] ], [ , , "(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0359])|(?:5[0-26-9]|[78][0-49])\\d\\d|6(?:[0-4]\\d\\d|50[0-24-69]))|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|8(?:[02]\\d|1[0-27-9])))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", , , , "1212345678", , , [ 9, 10 ], [ 4, 5, 6, 7, 8 ] ], [ , , "7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", , , , "7400123456", , , [ 10 ] ], [ , , "80[08]\\d{7}|800\\d{6}|8001111", , , , "8001234567" ], [ , , "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", , , , "9012345678", , , [ 7, 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "70\\d{8}", , , , "7012345678", , , [ 10 ] ], [ , , "56\\d{8}", , , , "5612345678", , , [ 10 ] ], "GB", 44, "00", "0", " x", , "0", , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "800", "8001", "80011", "800111", "8001111" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", [ "845", "8454", "84546", "845464" ], "0$1" ], [ , "(\\d{3})(\\d{6})", "$1 $2", [ "800" ], "0$1" ], [ , "(\\d{5})(\\d{4,5})", "$1 $2", [ "1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)" ], "0$1" ], [ , "(\\d{4})(\\d{5,6})", "$1 $2", [ "1(?:[2-69][02-9]|[78])" ], "0$1" ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", [ "[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))" ], "0$1" ], [ , "(\\d{4})(\\d{6})", "$1 $2", [ "7" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[1389]" ], "0$1" ] ], , [ , , "76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", , , , "7640123456", , , [ 10 ] ], 1, , [ , , , , , , , , , [ -1 ] ], [ , , "(?:3[0347]|55)\\d{8}", , , , "5512345678", , , [ 10 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                GD: [ , [ , , "(?:473|[58]\\d\\d|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}", , , , "4732691234", , , , [ 7 ] ], [ , , "473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}", , , , "4734031234", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456" ], [ , , "900[2-9]\\d{6}", , , , "9002123456" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "GD", 1, "011", "1", , , "1|([2-9]\\d{6})$", "473$1", , , , , [ , , , , , , , , , [ -1 ] ], , "473", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                GE: [ , [ , , "(?:[3-57]\\d\\d|800)\\d{6}", , , , , , , [ 9 ], [ 6, 7 ] ], [ , , "(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}", , , , "322123456", , , , [ 6, 7 ] ], [ , , "5(?:(?:0555|1177)[5-9]|757(?:7[7-9]|8[01]))\\d{3}|5(?:00(?:0\\d|50)|11(?:00|1\\d|2[0-4]|3[01])|5200|75(?:00|[57]5)|8(?:0(?:[01]\\d|2[0-4])|58[89]|8(?:55|88)))\\d{4}|5(?:0070|11(?:33|51)|[25]222|3333)[0-4]\\d{3}|(?:5(?:[14]4|5[0157-9]|68|7[0147-9]|9[1-35-9])|790)\\d{6}", , , , "555123456" ], [ , , "800\\d{6}", , , , "800123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "70[67]\\d{6}", , , , "706123456" ], "GE", 995, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "70" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "32" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[57]" ] ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[348]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , "70[67]\\d{6}" ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                GF: [ , [ , , "(?:[56]94|80\\d|976)\\d{6}", , , , , , , [ 9 ] ], [ , , "594(?:[023]\\d|1[01]|4[03-9]|5[6-9]|6[0-3]|80|9[0-8])\\d{4}", , , , "594101234" ], [ , , "694(?:[0-249]\\d|3[0-48])\\d{4}", , , , "694201234" ], [ , , "80[0-5]\\d{6}", , , , "800012345" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "976\\d{6}", , , , "976012345" ], "GF", 594, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[569]" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "8" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                GG: [ , [ , , "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", , , , , , , [ 7, 9, 10 ], [ 6 ] ], [ , , "1481[25-9]\\d{5}", , , , "1481256789", , , [ 10 ], [ 6 ] ], [ , , "7(?:(?:781|839)\\d|911[17])\\d{5}", , , , "7781123456", , , [ 10 ] ], [ , , "80[08]\\d{7}|800\\d{6}|8001111", , , , "8001234567" ], [ , , "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", , , , "9012345678", , , [ 7, 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "70\\d{8}", , , , "7012345678", , , [ 10 ] ], [ , , "56\\d{8}", , , , "5612345678", , , [ 10 ] ], "GG", 44, "00", "0", , , "0|([25-9]\\d{5})$", "1481$1", , , , , [ , , "76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", , , , "7640123456", , , [ 10 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "(?:3[0347]|55)\\d{8}", , , , "5512345678", , , [ 10 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                GH: [ , [ , , "(?:[235]\\d{3}|800)\\d{5}", , , , , , , [ 8, 9 ], [ 7 ] ], [ , , "3082[0-5]\\d{4}|3(?:0(?:[237]\\d|8[01])|[167](?:2[0-6]|7\\d|80)|2(?:2[0-5]|7\\d|80)|3(?:2[0-3]|7\\d|80)|4(?:2[013-9]|3[01]|7\\d|80)|5(?:2[0-7]|7\\d|80)|8(?:2[0-2]|7\\d|80)|9(?:[28]0|7\\d))\\d{5}", , , , "302345678", , , [ 9 ], [ 7 ] ], [ , , "(?:2(?:[0346-8]\\d|5[67])|5(?:[0457]\\d|6[01]|9[1-9]))\\d{6}", , , , "231234567", , , [ 9 ] ], [ , , "800\\d{5}", , , , "80012345", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "GH", 233, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[237]|8[0-2]" ] ], [ , "(\\d{3})(\\d{5})", "$1 $2", [ "8" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[235]" ], "0$1" ] ], [ [ , "(\\d{3})(\\d{5})", "$1 $2", [ "8" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[235]" ], "0$1" ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , "800\\d{5}", , , , , , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                GI: [ , [ , , "(?:[25]\\d\\d|606)\\d{5}", , , , , , , [ 8 ] ], [ , , "21(?:6[24-7]\\d|90[0-2])\\d{3}|2(?:00|2[25])\\d{5}", , , , "20012345" ], [ , , "(?:5[146-8]\\d|606)\\d{5}", , , , "57123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "GI", 350, "00", , , , , , , , [ [ , "(\\d{3})(\\d{5})", "$1 $2", [ "2" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                GL: [ , [ , , "(?:19|[2-689]\\d|70)\\d{4}", , , , , , , [ 6 ] ], [ , , "(?:19|3[1-7]|6[14689]|70|8[14-79]|9\\d)\\d{4}", , , , "321000" ], [ , , "[245]\\d{5}", , , , "221234" ], [ , , "80\\d{4}", , , , "801234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "3[89]\\d{4}", , , , "381234" ], "GL", 299, "00", , , , , , , , [ [ , "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", [ "19|[2-9]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                GM: [ , [ , , "[2-9]\\d{6}", , , , , , , [ 7 ] ], [ , , "(?:4(?:[23]\\d\\d|4(?:1[024679]|[6-9]\\d))|5(?:5(?:3\\d|4[0-7])|6[67]\\d|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}", , , , "5661234" ], [ , , "(?:[23679]\\d|5[0-389])\\d{5}", , , , "3012345" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "GM", 220, "00", , , , , , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[2-9]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                GN: [ , [ , , "722\\d{6}|(?:3|6\\d)\\d{7}", , , , , , , [ 8, 9 ] ], [ , , "3(?:0(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])|1\\d\\d)\\d{4}", , , , "30241234", , , [ 8 ] ], [ , , "6[0-356]\\d{7}", , , , "601123456", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "722\\d{6}", , , , "722123456", , , [ 9 ] ], "GN", 224, "00", , , , , , , , [ [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "3" ] ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[67]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                GP: [ , [ , , "(?:590|(?:69|80)\\d|976)\\d{6}", , , , , , , [ 9 ] ], [ , , "590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1289]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}", , , , "590201234" ], [ , , "69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}", , , , "690001234" ], [ , , "80[0-5]\\d{6}", , , , "800012345" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "976[01]\\d{5}", , , , "976012345" ], "GP", 590, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[569]" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "8" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], 1, , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                GQ: [ , [ , , "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", , , , , , , [ 9 ] ], [ , , "33[0-24-9]\\d[46]\\d{4}|3(?:33|5\\d)\\d[7-9]\\d{4}", , , , "333091234" ], [ , , "(?:222|55\\d)\\d{6}", , , , "222123456" ], [ , , "80\\d[1-9]\\d{5}", , , , "800123456" ], [ , , "90\\d[1-9]\\d{5}", , , , "900123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "GQ", 240, "00", , , , , , , , [ [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[235]" ] ], [ , "(\\d{3})(\\d{6})", "$1 $2", [ "[89]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                GR: [ , [ , , "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", , , , , , , [ 10, 11, 12 ] ], [ , , "2(?:1\\d\\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}", , , , "2123456789", , , [ 10 ] ], [ , , "68[57-9]\\d{7}|(?:69|94)\\d{8}", , , , "6912345678", , , [ 10 ] ], [ , , "800\\d{7,9}", , , , "8001234567" ], [ , , "90[19]\\d{7}", , , , "9091234567", , , [ 10 ] ], [ , , "8(?:0[16]|12|[27]5|50)\\d{7}", , , , "8011234567", , , [ 10 ] ], [ , , "70\\d{8}", , , , "7012345678", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], "GR", 30, "00", , , , , , , , [ [ , "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", [ "21|7" ] ], [ , "(\\d{4})(\\d{6})", "$1 $2", [ "2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5" ] ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[2689]" ] ], [ , "(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", [ "8" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "5005000\\d{3}", , , , "5005000123", , , [ 10 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                GT: [ , [ , , "(?:1\\d{3}|[2-7])\\d{7}", , , , , , , [ 8, 11 ] ], [ , , "[267][2-9]\\d{6}", , , , "22456789", , , [ 8 ] ], [ , , "[3-5]\\d{7}", , , , "51234567", , , [ 8 ] ], [ , , "18[01]\\d{8}", , , , "18001112222", , , [ 11 ] ], [ , , "19\\d{9}", , , , "19001112222", , , [ 11 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "GT", 502, "00", , , , , , , , [ [ , "(\\d{4})(\\d{4})", "$1 $2", [ "[2-7]" ] ], [ , "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", [ "1" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                GU: [ , [ , , "(?:[58]\\d\\d|671|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}", , , , "6713001234", , , , [ 7 ] ], [ , , "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}", , , , "6713001234", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456" ], [ , , "900[2-9]\\d{6}", , , , "9002123456" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "GU", 1, "011", "1", , , "1|([3-9]\\d{6})$", "671$1", , 1, , , [ , , , , , , , , , [ -1 ] ], , "671", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                GW: [ , [ , , "[49]\\d{8}|4\\d{6}", , , , , , , [ 7, 9 ] ], [ , , "443\\d{6}", , , , "443201234", , , [ 9 ] ], [ , , "9(?:5\\d|6[569]|77)\\d{6}", , , , "955012345", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "40\\d{5}", , , , "4012345", , , [ 7 ] ], "GW", 245, "00", , , , , , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "40" ] ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[49]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                GY: [ , [ , , "9008\\d{3}|(?:[2-467]\\d\\d|862)\\d{4}", , , , , , , [ 7 ] ], [ , , "(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}", , , , "2201234" ], [ , , "(?:6\\d\\d|70[015-7])\\d{4}", , , , "6091234" ], [ , , "(?:289|862)\\d{4}", , , , "2891234" ], [ , , "9008\\d{3}", , , , "9008123" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "GY", 592, "001", , , , , , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[2-46-9]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                HK: [ , [ , , "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", , , , , , , [ 5, 6, 7, 8, 9, 11 ] ], [ , , "(?:2(?:[13-9]\\d|2[013-9])\\d|3(?:(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69])\\d|8(?:4[0-8]|5[0-5]|9\\d))|58(?:0[1-8]|1[2-9]))\\d{4}", , , , "21234567", , , [ 8 ] ], [ , , "(?:46(?:0[0-7]|1[0-6]|4[0-57-9]|6[0-4]|7[0-8])|573[0-6]|6(?:26[013-8]|66[0-3])|70(?:7[1-5]|8[0-4])|848[015-9]|929[013-9])\\d{4}|(?:4(?:40|6[2358])|5(?:[1-59][0-46-9]|6[0-4689]|7[0-24679])|6(?:0[1-9]|[13-59]\\d|[268][0-57-9]|7[0-79])|84[09]|9(?:0[1-9]|1[02-9]|[2358][0-8]|[467]\\d))\\d{5}", , , , "51234567", , , [ 8 ] ], [ , , "800\\d{6}", , , , "800123456", , , [ 9 ] ], [ , , "900(?:[0-24-9]\\d{7}|3\\d{1,4})", , , , "90012345678", , , [ 5, 6, 7, 8, 11 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}", , , , "81123456", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], "HK", 852, "00(?:30|5[09]|[126-9]?)", , , , , , "00", , [ [ , "(\\d{3})(\\d{2,5})", "$1 $2", [ "900", "9003" ] ], [ , "(\\d{4})(\\d{4})", "$1 $2", [ "[2-7]|8[1-4]|9(?:0[1-9]|[1-8])" ] ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "8" ] ], [ , "(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", [ "9" ] ] ], , [ , , "7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[0136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}", , , , "71123456", , , [ 8 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}", , , , "30161234", , , [ 8 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                HN: [ , [ , , "8\\d{10}|[237-9]\\d{7}", , , , , , , [ 8, 11 ] ], [ , , "2(?:2(?:0[0-39]|1[1-367]|[23]\\d|4[03-6]|5[57]|6[245]|7[0135689]|8[01346-9]|9[0-2])|4(?:0[78]|2[3-59]|3[13-9]|4[0-68]|5[1-35])|5(?:0[7-9]|16|4[03-5]|5\\d|6[014-6]|7[04]|80)|6(?:[056]\\d|17|2[067]|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034]|91)|8(?:79|8[0-357-9]|9[1-57-9]))\\d{4}", , , , "22123456", , , [ 8 ] ], [ , , "[37-9]\\d{7}", , , , "91234567", , , [ 8 ] ], [ , , "8002\\d{7}", , , , "80021234567", , , [ 11 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "HN", 504, "00", , , , , , , , [ [ , "(\\d{4})(\\d{4})", "$1-$2", [ "[237-9]" ] ], [ , "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", [ "8" ] ] ], [ [ , "(\\d{4})(\\d{4})", "$1-$2", [ "[237-9]" ] ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , "8002\\d{7}", , , , , , , [ 11 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                HR: [ , [ , , "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", , , , , , , [ 6, 7, 8, 9 ] ], [ , , "1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}", , , , "12345678", , , [ 8, 9 ], [ 6, 7 ] ], [ , , "98\\d{6,7}|975(?:1\\d|96)\\d{4}|9(?:0[1-9]|[1259]\\d|7[0679])\\d{6}", , , , "921234567", , , [ 8, 9 ] ], [ , , "80[01]\\d{4,6}", , , , "800123456", , , [ 7, 8, 9 ] ], [ , , "6[01459]\\d{6}|6[01]\\d{4,5}", , , , "611234", , , [ 6, 7, 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "7[45]\\d{6}", , , , "74123456", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], "HR", 385, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", [ "6[01]" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", [ "8" ], "0$1" ], [ , "(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", [ "1" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "[67]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "9" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "[2-5]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "8" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "62\\d{6,7}|72\\d{6}", , , , "62123456", , , [ 8, 9 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                HT: [ , [ , , "[2-489]\\d{7}", , , , , , , [ 8 ] ], [ , , "2(?:2\\d|5[1-5]|81|9[149])\\d{5}", , , , "22453300" ], [ , , "[34]\\d{7}", , , , "34101234" ], [ , , "8\\d{7}", , , , "80012345" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "9(?:[67][0-4]|8[0-3589]|9\\d)\\d{5}", , , , "98901234" ], "HT", 509, "00", , , , , , , , [ [ , "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", [ "[2-489]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                HU: [ , [ , , "[235-7]\\d{8}|[1-9]\\d{7}", , , , , , , [ 8, 9 ], [ 6, 7 ] ], [ , , "(?:1\\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\\d{6}", , , , "12345678", , , [ 8 ], [ 6, 7 ] ], [ , , "(?:[257]0|3[01])\\d{7}", , , , "201234567", , , [ 9 ] ], [ , , "(?:[48]0\\d|680[29])\\d{5}", , , , "80123456" ], [ , , "9[01]\\d{6}", , , , "90123456", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "21\\d{7}", , , , "211234567", , , [ 9 ] ], "HU", 36, "00", "06", , , "06", , , , [ [ , "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", [ "1" ], "(06 $1)" ], [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]" ], "(06 $1)" ], [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "[2-9]" ], "06 $1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , "(?:[48]0\\d|680[29])\\d{5}" ], [ , , "38\\d{7}", , , , "381234567", , , [ 9 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                ID: [ , [ , , "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", , , , , , , [ 7, 8, 9, 10, 11, 12, 13 ], [ 5, 6 ] ], [ , , "2[124]\\d{7,8}|619\\d{8}|2(?:1(?:14|500)|2\\d{3})\\d{3}|61\\d{5,8}|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}", , , , "218350123", , , [ 7, 8, 9, 10, 11 ], [ 5, 6 ] ], [ , , "8[1-35-9]\\d{7,10}", , , , "812345678", , , [ 9, 10, 11, 12 ] ], [ , , "00[17]803\\d{7}|(?:177\\d|800)\\d{5,7}|001803\\d{6}", , , , "8001234567", , , [ 8, 9, 10, 11, 12, 13 ] ], [ , , "809\\d{7}", , , , "8091234567", , , [ 10 ] ], [ , , "804\\d{7}", , , , "8041234567", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "ID", 62, "00[89]", "0", , , "0", , , , [ [ , "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", [ "15" ] ], [ , "(\\d{2})(\\d{5,9})", "$1 $2", [ "2[124]|[36]1" ], "(0$1)" ], [ , "(\\d{3})(\\d{5,7})", "$1 $2", [ "800" ], "0$1" ], [ , "(\\d{3})(\\d{5,8})", "$1 $2", [ "[2-79]" ], "(0$1)" ], [ , "(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", [ "8[1-35-9]" ], "0$1" ], [ , "(\\d{3})(\\d{6,8})", "$1 $2", [ "1" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "804" ], "0$1" ], [ , "(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", [ "80" ], "0$1" ], [ , "(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", [ "8" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", [ "001" ] ], [ , "(\\d{2})(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3 $4", [ "0" ] ] ], [ [ , "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", [ "15" ] ], [ , "(\\d{2})(\\d{5,9})", "$1 $2", [ "2[124]|[36]1" ], "(0$1)" ], [ , "(\\d{3})(\\d{5,7})", "$1 $2", [ "800" ], "0$1" ], [ , "(\\d{3})(\\d{5,8})", "$1 $2", [ "[2-79]" ], "(0$1)" ], [ , "(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", [ "8[1-35-9]" ], "0$1" ], [ , "(\\d{3})(\\d{6,8})", "$1 $2", [ "1" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "804" ], "0$1" ], [ , "(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", [ "80" ], "0$1" ], [ , "(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", [ "8" ], "0$1" ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , "001803\\d{6,7}|(?:007803\\d|8071)\\d{6}", , , , , , , [ 10, 12, 13 ] ], [ , , "(?:1500|8071\\d{3})\\d{3}", , , , "8071123456", , , [ 7, 10 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                IE: [ , [ , , "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", , , , , , , [ 7, 8, 9, 10 ], [ 5, 6 ] ], [ , , "(?:1\\d|21)\\d{6,7}|(?:2[24-9]|4(?:0[24]|5\\d|7)|5(?:0[45]|1\\d|8)|6(?:1\\d|[237-9])|9(?:1\\d|[35-9]))\\d{5}|(?:23|4(?:[1-469]|8\\d)|5[23679]|6[4-6]|7[14]|9[04])\\d{7}", , , , "2212345", , , , [ 5, 6 ] ], [ , , "8(?:22|[35-9]\\d)\\d{6}", , , , "850123456", , , [ 9 ] ], [ , , "1800\\d{6}", , , , "1800123456", , , [ 10 ] ], [ , , "15(?:1[2-8]|[2-8]0|9[089])\\d{6}", , , , "1520123456", , , [ 10 ] ], [ , , "18[59]0\\d{6}", , , , "1850123456", , , [ 10 ] ], [ , , "700\\d{6}", , , , "700123456", , , [ 9 ] ], [ , , "76\\d{7}", , , , "761234567", , , [ 9 ] ], "IE", 353, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{5})", "$1 $2", [ "2[24-9]|47|58|6[237-9]|9[35-9]" ], "(0$1)" ], [ , "(\\d{3})(\\d{5})", "$1 $2", [ "[45]0" ], "(0$1)" ], [ , "(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", [ "1" ], "(0$1)" ], [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "[2569]|4[1-69]|7[14]" ], "(0$1)" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "70" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "81" ], "(0$1)" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[78]" ], "0$1" ], [ , "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", [ "1" ] ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", [ "4" ], "(0$1)" ], [ , "(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", [ "8" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , "18[59]0\\d{6}", , , , , , , [ 10 ] ], [ , , "818\\d{6}", , , , "818123456", , , [ 9 ] ], , , [ , , "88210[1-9]\\d{4}|8(?:[35-79]5\\d\\d|8(?:[013-9]\\d\\d|2(?:[01][1-9]|[2-9]\\d)))\\d{5}", , , , "8551234567", , , [ 10 ] ] ],
                IL: [ , [ , , "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", , , , , , , [ 7, 8, 9, 10, 11, 12 ] ], [ , , "153\\d{8,9}|29[1-9]\\d{5}|(?:2[0-8]|[3489]\\d)\\d{6}", , , , "21234567", , , [ 8, 11, 12 ], [ 7 ] ], [ , , "5(?:(?:[02368]\\d|[19][2-9]|4[1-9])\\d|5(?:01|1[79]|2[2-9]|3[0-3]|4[34]|5[015689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\\d{5}", , , , "502345678", , , [ 9 ] ], [ , , "1(?:255|80[019]\\d{3})\\d{3}", , , , "1800123456", , , [ 7, 10 ] ], [ , , "1212\\d{4}|1(?:200|9(?:0[0-2]|19))\\d{6}", , , , "1919123456", , , [ 8, 10 ] ], [ , , "1700\\d{6}", , , , "1700123456", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "7(?:380|8(?:33|55|77|81))\\d{5}|7(?:18|2[23]|3[237]|47|6[58]|7\\d|82|9[235-9])\\d{6}", , , , "771234567", , , [ 9 ] ], "IL", 972, "0(?:0|1[2-9])", "0", , , "0", , , , [ [ , "(\\d{4})(\\d{3})", "$1-$2", [ "125" ] ], [ , "(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", [ "121" ] ], [ , "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", [ "[2-489]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", [ "[57]" ], "0$1" ], [ , "(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", [ "12" ] ], [ , "(\\d{4})(\\d{6})", "$1-$2", [ "159" ] ], [ , "(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", [ "1[7-9]" ] ], [ , "(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", [ "15" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , "1700\\d{6}", , , , , , , [ 10 ] ], [ , , "1599\\d{6}", , , , "1599123456", , , [ 10 ] ], , , [ , , "151\\d{8,9}", , , , "15112340000", , , [ 11, 12 ] ] ],
                IM: [ , [ , , "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", , , , , , , [ 10 ], [ 6 ] ], [ , , "1624(?:230|[5-8]\\d\\d)\\d{3}", , , , "1624756789", , , , [ 6 ] ], [ , , "76245[06]\\d{4}|7(?:4576|[59]24\\d|624[0-4689])\\d{5}", , , , "7924123456" ], [ , , "808162\\d{4}", , , , "8081624567" ], [ , , "8(?:440[49]06|72299\\d)\\d{3}|(?:8(?:45|70)|90[0167])624\\d{4}", , , , "9016247890" ], [ , , , , , , , , , [ -1 ] ], [ , , "70\\d{8}", , , , "7012345678" ], [ , , "56\\d{8}", , , , "5612345678" ], "IM", 44, "00", "0", , , "0|([25-8]\\d{5})$", "1624$1", , , , , [ , , , , , , , , , [ -1 ] ], , "74576|(?:16|7[56])24", [ , , , , , , , , , [ -1 ] ], [ , , "3440[49]06\\d{3}|(?:3(?:08162|3\\d{4}|45624|7(?:0624|2299))|55\\d{4})\\d{4}", , , , "5512345678" ], , , [ , , , , , , , , , [ -1 ] ] ],
                IN: [ , [ , , "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", , , , , , , [ 8, 9, 10, 11, 12, 13 ], [ 6, 7 ] ], [ , , "2717(?:[2-7]\\d|95)\\d{4}|(?:271[0-689]|782[0-6])[2-7]\\d{5}|(?:170[24]|2(?:(?:[02][2-79]|90)\\d|80[13468])|(?:3(?:23|80)|683|79[1-7])\\d|4(?:20[24]|72[2-8])|552[1-7])\\d{6}|(?:11|33|4[04]|80)[2-7]\\d{7}|(?:342|674|788)(?:[0189][2-7]|[2-7]\\d)\\d{5}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[13]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[014-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[3-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1245]|4[5-8]|5[125689]|6[235-7]|7[157-9]|8[2-46-8])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])|7(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|8[013-7]|9[089])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d[2-7]\\d{5}", , , , "7410410123", , , [ 10 ], [ 6, 7, 8 ] ], [ , , "(?:61279|7(?:887[02-9]|9(?:313|79[07-9]))|8(?:079[04-9]|(?:84|91)7[02-8]))\\d{5}|(?:6(?:12|[2-47]1|5[17]|6[13]|80)[0189]|7(?:1(?:2[0189]|9[0-5])|2(?:[14][017-9]|8[0-59])|3(?:2[5-8]|[34][017-9]|9[016-9])|4(?:1[015-9]|[29][89]|39|8[389])|5(?:[15][017-9]|2[04-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589])|70[0289]|88[089]|97[02-8])|8(?:0(?:6[67]|7[02-8])|70[017-9]|84[01489]|91[0-289]))\\d{6}|(?:7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[0189]\\d|7[02-8])\\d{5}|(?:6(?:[09]\\d|1[04679]|2[03689]|3[05-9]|4[0489]|50|6[069]|7[07]|8[7-9])|7(?:0\\d|2[0235-79]|3[05-8]|40|5[0346-8]|6[6-9]|7[1-9]|8[0-79]|9[089])|8(?:0[01589]|1[0-57-9]|2[235-9]|3[03-57-9]|[45]\\d|6[02457-9]|7[1-69]|8[0-25-9]|9[02-9])|9\\d\\d)\\d{7}|(?:6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|8[124-6])\\d|7(?:[235689]\\d|4[0189]))|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-5])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]|881))[0189]\\d{5}", , , , "8123456789", , , [ 10 ] ], [ , , "000800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))", , , , "1800123456" ], [ , , "186[12]\\d{9}", , , , "1861123456789", , , [ 13 ] ], [ , , "1860\\d{7}", , , , "18603451234", , , [ 11 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "IN", 91, "00", "0", , , "0", , , , [ [ , "(\\d{7})", "$1", [ "575" ] ], [ , "(\\d{8})", "$1", [ "5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)" ], , , 1 ], [ , "(\\d{4})(\\d{4,5})", "$1 $2", [ "180", "1800" ], , , 1 ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "140" ], , , 1 ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", [ "11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])" ], "0$1", , 1 ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]" ], "0$1", , 1 ], [ , "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", [ "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]" ], "0$1", , 1 ], [ , "(\\d{5})(\\d{5})", "$1 $2", [ "[6-9]" ], "0$1", , 1 ], [ , "(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", [ "1(?:6|8[06])", "1(?:6|8[06]0)" ], , , 1 ], [ , "(\\d{3})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", [ "0" ] ], [ , "(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", [ "18" ], , , 1 ] ], [ [ , "(\\d{8})", "$1", [ "5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)" ], , , 1 ], [ , "(\\d{4})(\\d{4,5})", "$1 $2", [ "180", "1800" ], , , 1 ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "140" ], , , 1 ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", [ "11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])" ], "0$1", , 1 ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]" ], "0$1", , 1 ], [ , "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", [ "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]" ], "0$1", , 1 ], [ , "(\\d{5})(\\d{5})", "$1 $2", [ "[6-9]" ], "0$1", , 1 ], [ , "(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", [ "1(?:6|8[06])", "1(?:6|8[06]0)" ], , , 1 ], [ , "(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", [ "18" ], , , 1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , "1(?:600\\d{6}|800\\d{4,9})|(?:000800|18(?:03\\d\\d|6(?:0|[12]\\d\\d)))\\d{7}" ], [ , , "140\\d{7}", , , , "1409305260", , , [ 10 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                IO: [ , [ , , "3\\d{6}", , , , , , , [ 7 ] ], [ , , "37\\d{5}", , , , "3709100" ], [ , , "38\\d{5}", , , , "3801234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "IO", 246, "00", , , , , , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "3" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                IQ: [ , [ , , "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", , , , , , , [ 8, 9, 10 ], [ 6, 7 ] ], [ , , "1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}", , , , "12345678", , , [ 8, 9 ], [ 6, 7 ] ], [ , , "7[3-9]\\d{8}", , , , "7912345678", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "IQ", 964, "00", "0", , , "0", , , , [ [ , "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", [ "1" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "[2-6]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "7" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                IR: [ , [ , , "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", , , , , , , [ 4, 5, 6, 7, 10 ], [ 8 ] ], [ , , "(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:[03-57]\\d{7}|[16]\\d{3}(?:\\d{4})?|[289]\\d{3}(?:\\d(?:\\d{3})?)?)|94(?:000[09]|2(?:121|[2689]0\\d)|30[0-2]\\d|4(?:111|40\\d))\\d{4}", , , , "2123456789", , , [ 6, 7, 10 ], [ 4, 5, 8 ] ], [ , , "9(?:(?:0(?:[0-35]\\d|4[4-6])|(?:[13]\\d|2[0-3])\\d)\\d|9(?:[0-46]\\d\\d|5[15]0|8(?:1\\d|88)|9(?:0[013]|[19]\\d|21|77|8[7-9])))\\d{5}", , , , "9123456789", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "IR", 98, "00", "0", , , "0", , , , [ [ , "(\\d{4,5})", "$1", [ "96" ], "0$1" ], [ , "(\\d{2})(\\d{4,5})", "$1 $2", [ "(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "9" ], "0$1" ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", [ "[1-8]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , "9(?:4440\\d{5}|6(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19]))", , , , , , , [ 4, 5, 10 ] ], [ , , "96(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19])", , , , "9601", , , [ 4, 5 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                IS: [ , [ , , "(?:38\\d|[4-9])\\d{6}", , , , , , , [ 7, 9 ] ], [ , , "(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-24589]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|872)\\d{4}", , , , "4101234", , , [ 7 ] ], [ , , "(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[026-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-9]\\d)|8(?:2[0-59]|[3-69]\\d|8[238]))\\d{4}", , , , "6111234" ], [ , , "80[0-8]\\d{4}", , , , "8001234", , , [ 7 ] ], [ , , "90(?:0\\d|1[5-79]|2[015-79]|3[135-79]|4[125-7]|5[25-79]|7[1-37]|8[0-35-7])\\d{3}", , , , "9001234", , , [ 7 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "49[0-24-79]\\d{4}", , , , "4921234", , , [ 7 ] ], "IS", 354, "00|1(?:0(?:01|[12]0)|100)", , , , , , "00", , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[4-9]" ] ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "3" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "809\\d{4}", , , , "8091234", , , [ 7 ] ], , , [ , , "(?:689|8(?:7[18]|80)|95[48])\\d{4}", , , , "6891234", , , [ 7 ] ] ],
                IT: [ , [ , , "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|55\\d{8}|8\\d{5}(?:\\d{2,4})?", , , , , , , [ 6, 7, 8, 9, 10, 11, 12 ] ], [ , , "0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}", , , , "0212345678", , , [ 6, 7, 8, 9, 10, 11 ] ], [ , , "3[1-9]\\d{8}|3[2-9]\\d{7}", , , , "3123456789", , , [ 9, 10 ] ], [ , , "80(?:0\\d{3}|3)\\d{3}", , , , "800123456", , , [ 6, 9 ] ], [ , , "(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", , , , "899123456", , , [ 6, 8, 9, 10 ] ], [ , , "84(?:[08]\\d{3}|[17])\\d{3}", , , , "848123456", , , [ 6, 9 ] ], [ , , "1(?:78\\d|99)\\d{6}", , , , "1781234567", , , [ 9, 10 ] ], [ , , "55\\d{8}", , , , "5512345678", , , [ 10 ] ], "IT", 39, "00", , , , , , , , [ [ , "(\\d{4,5})", "$1", [ "1(?:0|9[246])", "1(?:0|9(?:2[2-9]|[46]))" ] ], [ , "(\\d{6})", "$1", [ "1(?:1|92)" ] ], [ , "(\\d{2})(\\d{4,6})", "$1 $2", [ "0[26]" ] ], [ , "(\\d{3})(\\d{3,6})", "$1 $2", [ "0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))" ] ], [ , "(\\d{4})(\\d{2,6})", "$1 $2", [ "0(?:[13-579][2-46-8]|8[236-8])" ] ], [ , "(\\d{4})(\\d{4})", "$1 $2", [ "894" ] ], [ , "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", [ "0[26]|5" ] ], [ , "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "1(?:44|[679])|[38]" ] ], [ , "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", [ "0[13-57-9][0159]|14" ] ], [ , "(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", [ "0[26]" ] ], [ , "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", [ "0" ] ], [ , "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", [ "3" ] ] ], [ [ , "(\\d{2})(\\d{4,6})", "$1 $2", [ "0[26]" ] ], [ , "(\\d{3})(\\d{3,6})", "$1 $2", [ "0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))" ] ], [ , "(\\d{4})(\\d{2,6})", "$1 $2", [ "0(?:[13-579][2-46-8]|8[236-8])" ] ], [ , "(\\d{4})(\\d{4})", "$1 $2", [ "894" ] ], [ , "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", [ "0[26]|5" ] ], [ , "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "1(?:44|[679])|[38]" ] ], [ , "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", [ "0[13-57-9][0159]|14" ] ], [ , "(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", [ "0[26]" ] ], [ , "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", [ "0" ] ], [ , "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", [ "3" ] ] ], [ , , , , , , , , , [ -1 ] ], 1, , [ , , "848\\d{6}", , , , , , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , "3[2-8]\\d{9,10}", , , , "33101234501", , , [ 11, 12 ] ] ],
                JE: [ , [ , , "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", , , , , , , [ 10 ], [ 6 ] ], [ , , "1534[0-24-8]\\d{5}", , , , "1534456789", , , , [ 6 ] ], [ , , "7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}", , , , "7797712345" ], [ , , "80(?:07(?:35|81)|8901)\\d{4}", , , , "8007354567" ], [ , , "(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}", , , , "9018105678" ], [ , , , , , , , , , [ -1 ] ], [ , , "701511\\d{4}", , , , "7015115678" ], [ , , "56\\d{8}", , , , "5612345678" ], "JE", 44, "00", "0", , , "0|([0-24-8]\\d{5})$", "1534$1", , , , , [ , , "76(?:464|652)\\d{5}|76(?:0[0-2]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", , , , "7640123456" ], , , [ , , , , , , , , , [ -1 ] ], [ , , "(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}", , , , "5512345678" ], , , [ , , , , , , , , , [ -1 ] ] ],
                JM: [ , [ , , "(?:[58]\\d\\d|658|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "8766060\\d{3}|(?:658(?:2(?:[0-8]\\d|9[0-46-9])|[3-9]\\d\\d)|876(?:52[35]|6(?:0[1-3579]|1[02357-9]|[23]\\d|40|5[06]|6[2-589]|7[0257]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}", , , , "8765230123", , , , [ 7 ] ], [ , , "(?:658295|876(?:2(?:0[2-9]|[14-9]\\d|2[013-9]|3[3-9])|[348]\\d\\d|5(?:0[1-9]|[1-9]\\d)|6(?:4[89]|6[67])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579])))\\d{4}", , , , "8762101234", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456" ], [ , , "900[2-9]\\d{6}", , , , "9002123456" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "JM", 1, "011", "1", , , "1", , , , , , [ , , , , , , , , , [ -1 ] ], , "658|876", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                JO: [ , [ , , "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", , , , , , , [ 8, 9 ] ], [ , , "87(?:000|90[01])\\d{3}|(?:2(?:6(?:2[0-35-9]|3[0-578]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[5-7][023])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2(?:[05]0|22)|3(?:00|33)|4(?:0[0-25]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[178]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[0239]))|87(?:20|7[078]|99))\\d{4}", , , , "62001234", , , [ 8 ] ], [ , , "7(?:[78][0-25-9]|9\\d)\\d{6}", , , , "790123456", , , [ 9 ] ], [ , , "80\\d{6}", , , , "80012345", , , [ 8 ] ], [ , , "9\\d{7}", , , , "90012345", , , [ 8 ] ], [ , , "85\\d{6}", , , , "85012345", , , [ 8 ] ], [ , , "70\\d{7}", , , , "700123456", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], "JO", 962, "00", "0", , , "0", , , , [ [ , "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", [ "[2356]|87" ], "(0$1)" ], [ , "(\\d{3})(\\d{5,6})", "$1 $2", [ "[89]" ], "0$1" ], [ , "(\\d{2})(\\d{7})", "$1 $2", [ "70" ], "0$1" ], [ , "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", [ "7" ], "0$1" ] ], , [ , , "74(?:66|77)\\d{5}", , , , "746612345", , , [ 9 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "8(?:10|8\\d)\\d{5}", , , , "88101234", , , [ 8 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                JP: [ , [ , , "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", , , , , , , [ 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ] ], [ , , "(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|(?:2[2-9]|[36][1-9])\\d|4(?:[2-578]\\d|6[02-8]|9[2-59])|5(?:[2-589]\\d|6[1-9]|7[2-8])|7(?:[25-9]\\d|3[4-9]|4[02-9])|8(?:[2679]\\d|3[2-9]|4[5-9]|5[1-9]|8[03-9])|9(?:[2-58]\\d|[679][1-9]))\\d{6}", , , , "312345678", , , [ 9 ] ], [ , , "[7-9]0[1-9]\\d{7}", , , , "9012345678", , , [ 10 ] ], [ , , "00777(?:[01]|5\\d)\\d\\d|(?:00(?:7778|882[1245])|(?:120|800\\d)\\d\\d)\\d{4}|00(?:37|66|78)\\d{6,13}", , , , "120123456" ], [ , , "990\\d{6}", , , , "990123456", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "60\\d{7}", , , , "601234567", , , [ 9 ] ], [ , , "50[1-9]\\d{7}", , , , "5012345678", , , [ 10 ] ], "JP", 81, "010", "0", , , "0", , , , [ [ , "(\\d{4})(\\d{4})", "$1-$2", [ "007", "0077", "00777", "00777[01]" ] ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", [ "(?:12|57|99)0" ], "0$1" ], [ , "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", [ "1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", [ "60" ], "0$1" ], [ , "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", [ "[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", [ "1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", [ "[14]|[289][2-9]|5[3-9]|7[2-4679]" ], "0$1" ], [ , "(\\d{4})(\\d{2})(\\d{3,4})", "$1-$2-$3", [ "007", "0077" ] ], [ , "(\\d{4})(\\d{2})(\\d{4})", "$1-$2-$3", [ "008" ] ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", [ "800" ], "0$1" ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", [ "[257-9]" ], "0$1" ], [ , "(\\d{4})(\\d{3})(\\d{3,4})", "$1-$2-$3", [ "0" ] ], [ , "(\\d{4})(\\d{4})(\\d{4,5})", "$1-$2-$3", [ "0" ] ], [ , "(\\d{4})(\\d{5})(\\d{5,6})", "$1-$2-$3", [ "0" ] ], [ , "(\\d{4})(\\d{6})(\\d{6,7})", "$1-$2-$3", [ "0" ] ] ], [ [ , "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", [ "(?:12|57|99)0" ], "0$1" ], [ , "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", [ "1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9]|636[457-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", [ "60" ], "0$1" ], [ , "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", [ "[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", [ "1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[27-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|51|6(?:[0-24]|36|5[0-3589]|72|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[23]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|72|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", [ "[14]|[289][2-9]|5[3-9]|7[2-4679]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", [ "800" ], "0$1" ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", [ "[257-9]" ], "0$1" ] ], [ , , "20\\d{8}", , , , "2012345678", , , [ 10 ] ], , , [ , , "00(?:777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d|00(?:37|66|78)\\d{6,13}" ], [ , , "570\\d{6}", , , , "570123456", , , [ 9 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                KE: [ , [ , , "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", , , , , , , [ 7, 8, 9, 10 ] ], [ , , "(?:4[245]|5[1-79]|6[01457-9])\\d{5,7}|(?:4[136]|5[08]|62)\\d{7}|(?:[24]0|66)\\d{6,7}", , , , "202012345", , , [ 7, 8, 9 ] ], [ , , "(?:1(?:0[0-6]|1[0-5]|2[014])|7\\d\\d)\\d{6}", , , , "712123456", , , [ 9 ] ], [ , , "800[2-8]\\d{5,6}", , , , "800223456", , , [ 9, 10 ] ], [ , , "900[02-9]\\d{5}", , , , "900223456", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "KE", 254, "000", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{5,7})", "$1 $2", [ "[24-6]" ], "0$1" ], [ , "(\\d{3})(\\d{6})", "$1 $2", [ "[17]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "[89]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                KG: [ , [ , , "8\\d{9}|(?:[235-8]\\d|99)\\d{7}", , , , , , , [ 9, 10 ], [ 5, 6 ] ], [ , , "312(?:5[0-79]\\d|9(?:[0-689]\\d|7[0-24-9]))\\d{3}|(?:3(?:1(?:2[0-46-8]|3[1-9]|47|[56]\\d)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}", , , , "312123456", , , [ 9 ], [ 5, 6 ] ], [ , , "312(?:58\\d|973)\\d{3}|(?:2(?:0[0-35]|2\\d)|5[0-24-7]\\d|7(?:[07]\\d|55)|880|99[05-9])\\d{6}", , , , "700123456", , , [ 9 ] ], [ , , "800\\d{6,7}", , , , "800123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "KG", 996, "00", "0", , , "0", , , , [ [ , "(\\d{4})(\\d{5})", "$1 $2", [ "3(?:1[346]|[24-79])" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[235-79]|88" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", [ "8" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                KH: [ , [ , , "1\\d{9}|[1-9]\\d{7,8}", , , , , , , [ 8, 9, 10 ], [ 6, 7 ] ], [ , , "23(?:4(?:[2-4]|[56]\\d)|[568]\\d\\d)\\d{4}|23[236-9]\\d{5}|(?:2[4-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:(?:[237-9]|4[56]|5\\d)\\d{5}|6\\d{5,6})", , , , "23756789", , , [ 8, 9 ], [ 6, 7 ] ], [ , , "(?:(?:1[28]|3[18]|9[67])\\d|6[016-9]|7(?:[07-9]|[16]\\d)|8(?:[013-79]|8\\d))\\d{6}|(?:1\\d|9[0-57-9])\\d{6}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])48\\d{5}", , , , "91234567", , , [ 8, 9 ] ], [ , , "1800(?:1\\d|2[019])\\d{4}", , , , "1800123456", , , [ 10 ] ], [ , , "1900(?:1\\d|2[09])\\d{4}", , , , "1900123456", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "KH", 855, "00[14-9]", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "[1-9]" ], "0$1" ], [ , "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", [ "1" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                KI: [ , [ , , "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", , , , , , , [ 5, 8 ] ], [ , , "(?:[24]\\d|3[1-9]|50|65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d\\d|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500))|8[0-5])\\d{3}", , , , "31234" ], [ , , "(?:63\\d{3}|73(?:0[0-5]\\d|140))\\d{3}|[67]200[01]\\d{3}", , , , "72001234", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "30(?:0[01]\\d\\d|12(?:11|20))\\d\\d", , , , "30010000", , , [ 8 ] ], "KI", 686, "00", "0", , , "0", , , , , , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                KM: [ , [ , , "[3478]\\d{6}", , , , , , , [ 7 ], [ 4 ] ], [ , , "7[4-7]\\d{5}", , , , "7712345", , , , [ 4 ] ], [ , , "[34]\\d{6}", , , , "3212345" ], [ , , , , , , , , , [ -1 ] ], [ , , "8\\d{6}", , , , "8001234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "KM", 269, "00", , , , , , , , [ [ , "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", [ "[3478]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                KN: [ , [ , , "(?:[58]\\d\\d|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "869(?:2(?:29|36)|302|4(?:6[015-9]|70)|56[5-7])\\d{4}", , , , "8692361234", , , , [ 7 ] ], [ , , "869(?:48[89]|55[6-8]|66\\d|76[02-7])\\d{4}", , , , "8697652917", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456" ], [ , , "900[2-9]\\d{6}", , , , "9002123456" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "KN", 1, "011", "1", , , "1|([2-7]\\d{6})$", "869$1", , , , , [ , , , , , , , , , [ -1 ] ], , "869", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                KP: [ , [ , , "85\\d{6}|(?:19\\d|[2-7])\\d{7}", , , , , , , [ 8, 10 ], [ 6, 7 ] ], [ , , "(?:(?:195|2)\\d|3[19]|4[159]|5[37]|6[17]|7[39]|85)\\d{6}", , , , "21234567", , , , [ 6, 7 ] ], [ , , "19[1-3]\\d{7}", , , , "1921234567", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "KP", 850, "00|99", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "8" ], "0$1" ], [ , "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", [ "[2-7]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "1" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , "238[02-9]\\d{4}|2(?:[0-24-9]\\d|3[0-79])\\d{5}", , , , , , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                KR: [ , [ , , "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", , , , , , , [ 5, 6, 8, 9, 10, 11, 12, 13, 14 ], [ 3, 4, 7 ] ], [ , , "(?:2|3[1-3]|[46][1-4]|5[1-5])[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])1\\d{2,3}", , , , "22123456", , , [ 5, 6, 8, 9, 10 ], [ 3, 4, 7 ] ], [ , , "1(?:05(?:[0-8]\\d|9[0-6])|22[13]\\d)\\d{4,5}|1(?:0[1-46-9]|[16-9]\\d|2[013-9])\\d{6,7}", , , , "1020000000", , , [ 9, 10 ] ], [ , , "00(?:308\\d{6,7}|798\\d{7,9})|(?:00368|80)\\d{7}", , , , "801234567", , , [ 9, 11, 12, 13, 14 ] ], [ , , "60[2-9]\\d{6}", , , , "602345678", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "50\\d{8,9}", , , , "5012345678", , , [ 10, 11 ] ], [ , , "70\\d{8}", , , , "7012345678", , , [ 10 ] ], "KR", 82, "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "0", , , "0(8(?:[1-46-8]|5\\d\\d))?", , , , [ [ , "(\\d{5})", "$1", [ "1[016-9]1", "1[016-9]11", "1[016-9]114" ], "0$1" ], [ , "(\\d{2})(\\d{3,4})", "$1-$2", [ "(?:3[1-3]|[46][1-4]|5[1-5])1" ], "0$1", "0$CC-$1" ], [ , "(\\d{4})(\\d{4})", "$1-$2", [ "1" ] ], [ , "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", [ "2" ], "0$1", "0$CC-$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", [ "60|8" ], "0$1", "0$CC-$1" ], [ , "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", [ "[1346]|5[1-5]" ], "0$1", "0$CC-$1" ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", [ "[57]" ], "0$1", "0$CC-$1" ], [ , "(\\d{5})(\\d{3})(\\d{3})", "$1 $2 $3", [ "003", "0030" ] ], [ , "(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", [ "5" ], "0$1", "0$CC-$1" ], [ , "(\\d{5})(\\d{3,4})(\\d{4})", "$1 $2 $3", [ "0" ] ], [ , "(\\d{5})(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", [ "0" ] ] ], [ [ , "(\\d{2})(\\d{3,4})", "$1-$2", [ "(?:3[1-3]|[46][1-4]|5[1-5])1" ], "0$1", "0$CC-$1" ], [ , "(\\d{4})(\\d{4})", "$1-$2", [ "1" ] ], [ , "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", [ "2" ], "0$1", "0$CC-$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", [ "60|8" ], "0$1", "0$CC-$1" ], [ , "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", [ "[1346]|5[1-5]" ], "0$1", "0$CC-$1" ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", [ "[57]" ], "0$1", "0$CC-$1" ], [ , "(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", [ "5" ], "0$1", "0$CC-$1" ] ], [ , , "15\\d{7,8}", , , , "1523456789", , , [ 9, 10 ] ], , , [ , , "00(?:3(?:08\\d{6,7}|68\\d{7})|798\\d{7,9})", , , , , , , [ 11, 12, 13, 14 ] ], [ , , "1(?:5(?:22|33|44|66|77|88|99)|6(?:[07]0|44|6[168]|88)|8(?:00|33|55|77|99))\\d{4}", , , , "15441234", , , [ 8 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                KW: [ , [ , , "18\\d{5}|(?:[2569]\\d|41)\\d{6}", , , , , , , [ 7, 8 ] ], [ , , "2(?:[23]\\d\\d|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7]))\\d{4}", , , , "22345678", , , [ 8 ] ], [ , , "(?:41\\d\\d|5(?:(?:[05]\\d|1[0-7]|6[56])\\d|2(?:22|5[25])|7(?:55|77)|88[58])|6(?:(?:0[034679]|5[015-9]|6\\d)\\d|111|222|333|444|7(?:0[013-9]|[67]\\d)|888|9(?:[069]\\d|3[039]))|9(?:(?:0[09]|22|[4679]\\d|8[057-9])\\d|1(?:1[01]|99)|3(?:00|33)|5(?:00|5\\d)))\\d{4}", , , , "50012345", , , [ 8 ] ], [ , , "18\\d{5}", , , , "1801234", , , [ 7 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "KW", 965, "00", , , , , , , , [ [ , "(\\d{4})(\\d{3,4})", "$1 $2", [ "[169]|2(?:[235]|4[1-35-9])|52" ] ], [ , "(\\d{3})(\\d{5})", "$1 $2", [ "[245]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                KY: [ , [ , , "(?:345|[58]\\d\\d|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "345(?:2(?:22|3[23]|44|66)|333|444|6(?:23|38|40)|7(?:30|4[35-79]|6[6-9]|77)|8(?:00|1[45]|[48]8)|9(?:14|4[035-9]))\\d{4}", , , , "3452221234", , , , [ 7 ] ], [ , , "345(?:32[1-9]|42[0-4]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|82[56]|9(?:1[679]|2[2-9]|3[06-9]|90))\\d{4}", , , , "3453231234", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678" ], [ , , "(?:345976|900[2-9]\\d\\d)\\d{4}", , , , "9002345678" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "KY", 1, "011", "1", , , "1|([2-9]\\d{6})$", "345$1", , , , , [ , , "345849\\d{4}", , , , "3458491234" ], , "345", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                KZ: [ , [ , , "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", , , , , , , [ 10, 14 ], [ 5, 6, 7 ] ], [ , , "(?:33622|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[2-4]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[2-4]\\d|5[139])|4(?:2\\d|3[1-35-9]|59)|5(?:[23]\\d|4[0-246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59))))\\d{5}", , , , "7123456789", , , [ 10 ], [ 5, 6, 7 ] ], [ , , "7(?:0[0-25-8]|47|6[0-4]|7[15-8]|85)\\d{7}", , , , "7710009998", , , [ 10 ] ], [ , , "8(?:00|108\\d{3})\\d{7}", , , , "8001234567" ], [ , , "809\\d{7}", , , , "8091234567", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "808\\d{7}", , , , "8081234567", , , [ 10 ] ], [ , , "751\\d{7}", , , , "7511234567", , , [ 10 ] ], "KZ", 7, "810", "8", , , "8", , "8~10", , , , [ , , , , , , , , , [ -1 ] ], , "33|7", [ , , "751\\d{7}", , , , , , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                LA: [ , [ , , "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", , , , , , , [ 8, 9, 10 ], [ 6 ] ], [ , , "(?:2[13]|[35-7][14]|41|8[1468])\\d{6}", , , , "21212862", , , [ 8 ], [ 6 ] ], [ , , "(?:20(?:[239]\\d|5[24-9]|7[6-8]|88)|302\\d)\\d{6}", , , , "2023123456", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "LA", 856, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "2[13]|3[14]|[4-8]" ], "0$1" ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", [ "30[013-9]" ], "0$1" ], [ , "(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", [ "[23]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "30[013-9]\\d{6}", , , , "301234567", , , [ 9 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                LB: [ , [ , , "[27-9]\\d{7}|[13-9]\\d{6}", , , , , , , [ 7, 8 ] ], [ , , "7(?:62|8[0-7]|9[04-9])\\d{4}|(?:[14-69]\\d|2(?:[14-69]\\d|[78][1-9])|7[2-57]|8[02-9])\\d{5}", , , , "1123456" ], [ , , "793(?:[01]\\d|2[0-4])\\d{3}|(?:(?:3|81)\\d|7(?:[01]\\d|6[013-9]|8[89]|9[12]))\\d{5}", , , , "71123456" ], [ , , , , , , , , , [ -1 ] ], [ , , "9[01]\\d{6}", , , , "90123456", , , [ 8 ] ], [ , , "80\\d{6}", , , , "80123456", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "LB", 961, "00", "0", , , "0", , , , [ [ , "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", [ "[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[27-9]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                LC: [ , [ , , "(?:[58]\\d\\d|758|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "758(?:234|4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|(?:63|75)8)\\d{4}", , , , "7584305678", , , , [ 7 ] ], [ , , "758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[0-3])|812)\\d{4}", , , , "7582845678", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456" ], [ , , "900[2-9]\\d{6}", , , , "9002123456" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "LC", 1, "011", "1", , , "1|([2-8]\\d{6})$", "758$1", , , , , [ , , , , , , , , , [ -1 ] ], , "758", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                LI: [ , [ , , "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", , , , , , , [ 7, 9 ] ], [ , , "(?:2(?:01|1[27]|2[02]|3\\d|6[02-578]|96)|3(?:[24]0|33|7[0135-7]|8[048]|9[0269]))\\d{4}", , , , "2345678", , , [ 7 ] ], [ , , "(?:6(?:(?:4[5-9]|5[0-4])\\d|6(?:[0245]\\d|[17]0|3[7-9]))\\d|7(?:[37-9]\\d|42|56))\\d{4}", , , , "660234567" ], [ , , "8002[28]\\d\\d|80(?:05\\d|9)\\d{4}", , , , "8002222" ], [ , , "90(?:02[258]|1(?:23|3[14])|66[136])\\d\\d", , , , "9002222", , , [ 7 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "LI", 423, "00", "0", , , "0|(1001)", , , , [ [ , "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", [ "[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)" ], , "$CC $1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "8" ] ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "69" ], , "$CC $1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "6" ], , "$CC $1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "870(?:28|87)\\d\\d", , , , "8702812", , , [ 7 ] ], , , [ , , "697(?:42|56|[78]\\d)\\d{4}", , , , "697861234", , , [ 9 ] ] ],
                LK: [ , [ , , "[1-9]\\d{8}", , , , , , , [ 9 ], [ 7 ] ], [ , , "(?:12[2-9]|602|8[12]\\d|9(?:1\\d|22|9[245]))\\d{6}|(?:11|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}", , , , "112345678", , , , [ 7 ] ], [ , , "7(?:[0-25-8]\\d|4[0-4])\\d{6}", , , , "712345678" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "LK", 94, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "7" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[1-689]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "1973\\d{5}", , , , "197312345" ], , , [ , , , , , , , , , [ -1 ] ] ],
                LR: [ , [ , , "(?:2|33|5\\d|77|88)\\d{7}|[4-6]\\d{6}", , , , , , , [ 7, 8, 9 ] ], [ , , "(?:2\\d{3}|33333)\\d{4}", , , , "21234567", , , [ 8, 9 ] ], [ , , "(?:(?:330|555|(?:77|88)\\d)\\d|4[67])\\d{5}|[56]\\d{6}", , , , "770123456", , , [ 7, 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "332(?:02|[34]\\d)\\d{4}", , , , "332021234", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "LR", 231, "00", "0", , , "0", , , , [ [ , "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", [ "[4-6]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "2" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[3578]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                LS: [ , [ , , "(?:[256]\\d\\d|800)\\d{5}", , , , , , , [ 8 ] ], [ , , "2\\d{7}", , , , "22123456" ], [ , , "[56]\\d{7}", , , , "50123456" ], [ , , "800[256]\\d{4}", , , , "80021234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "LS", 266, "00", , , , , , , , [ [ , "(\\d{4})(\\d{4})", "$1 $2", [ "[2568]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                LT: [ , [ , , "(?:[3469]\\d|52|[78]0)\\d{6}", , , , , , , [ 8 ] ], [ , , "(?:3[1478]|4[124-6]|52)\\d{6}", , , , "31234567" ], [ , , "6\\d{7}", , , , "61234567" ], [ , , "80[02]\\d{5}", , , , "80012345" ], [ , , "9(?:0[0239]|10)\\d{5}", , , , "90012345" ], [ , , "808\\d{5}", , , , "80812345" ], [ , , "70[05]\\d{5}", , , , "70012345" ], [ , , "[89]01\\d{5}", , , , "80123456" ], "LT", 370, "00", "8", , , "[08]", , , , [ [ , "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", [ "52[0-7]" ], "(8-$1)", , 1 ], [ , "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", [ "[7-9]" ], "8 $1", , 1 ], [ , "(\\d{2})(\\d{6})", "$1 $2", [ "37|4(?:[15]|6[1-8])" ], "(8-$1)", , 1 ], [ , "(\\d{3})(\\d{5})", "$1 $2", [ "[3-6]" ], "(8-$1)", , 1 ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "70[67]\\d{5}", , , , "70712345" ], , , [ , , , , , , , , , [ -1 ] ] ],
                LU: [ , [ , , "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", , , , , , , [ 4, 5, 6, 7, 8, 9, 10, 11 ] ], [ , , "(?:35[013-9]|80[2-9]|90[89])\\d{1,8}|(?:2[2-9]|3[0-46-9]|[457]\\d|8[13-9]|9[2-579])\\d{2,9}", , , , "27123456" ], [ , , "6(?:[269][18]|5[1568]|7[189]|81)\\d{6}", , , , "628123456", , , [ 9 ] ], [ , , "800\\d{5}", , , , "80012345", , , [ 8 ] ], [ , , "90[015]\\d{5}", , , , "90012345", , , [ 8 ] ], [ , , "801\\d{5}", , , , "80112345", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "20(?:1\\d{5}|[2-689]\\d{1,7})", , , , "20201234", , , [ 4, 5, 6, 7, 8, 9, 10 ] ], "LU", 352, "00", , , , "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)", , , , [ [ , "(\\d{2})(\\d{3})", "$1 $2", [ "2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])" ], , "$CC $1" ], [ , "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", [ "2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])" ], , "$CC $1" ], [ , "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", [ "20[2-689]" ], , "$CC $1" ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", [ "2(?:[0367]|4[3-8])" ], , "$CC $1" ], [ , "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", [ "80[01]|90[015]" ], , "$CC $1" ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", [ "20" ], , "$CC $1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "6" ], , "$CC $1" ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", [ "2(?:[0367]|4[3-8])" ], , "$CC $1" ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", [ "[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]" ], , "$CC $1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                LV: [ , [ , , "(?:[268]\\d|90)\\d{6}", , , , , , , [ 8 ] ], [ , , "6\\d{7}", , , , "63123456" ], [ , , "2\\d{7}", , , , "21234567" ], [ , , "80\\d{6}", , , , "80123456" ], [ , , "90\\d{6}", , , , "90123456" ], [ , , "81\\d{6}", , , , "81123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "LV", 371, "00", , , , , , , , [ [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[269]|8[01]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                LY: [ , [ , , "[2-9]\\d{8}", , , , , , , [ 9 ], [ 7 ] ], [ , , "(?:2(?:0[56]|[1-6]\\d|7[124579]|8[124])|3(?:1\\d|2[2356])|4(?:[17]\\d|2[1-357]|5[2-4]|8[124])|5(?:[1347]\\d|2[1-469]|5[13-5]|8[1-4])|6(?:[1-479]\\d|5[2-57]|8[1-5])|7(?:[13]\\d|2[13-79])|8(?:[124]\\d|5[124]|84))\\d{6}", , , , "212345678", , , , [ 7 ] ], [ , , "9[1-6]\\d{7}", , , , "912345678" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "LY", 218, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{7})", "$1-$2", [ "[2-9]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MA: [ , [ , , "[5-8]\\d{8}", , , , , , , [ 9 ] ], [ , , "5(?:29(?:[189][05]|2[29]|3[01])|38(?:8[057]|9[05]))\\d{4}|5(?:2(?:[0-25-7]\\d|3[1-578]|4[02-46-8]|8[0235-7]|90)|3(?:[0-47]\\d|5[02-9]|6[02-8]|80|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}", , , , "520123456" ], [ , , "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[017]\\d|6[0-367]))\\d{6}", , , , "650123456" ], [ , , "80\\d{7}", , , , "801234567" ], [ , , "89\\d{7}", , , , "891234567" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "592(?:4[0-2]|93)\\d{4}", , , , "592401234" ], "MA", 212, "00", "0", , , "0", , , , [ [ , "(\\d{5})(\\d{4})", "$1-$2", [ "5(?:29|38)", "5(?:29|38)[89]", "5(?:29|38)[89]0" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "5[45]" ], "0$1" ], [ , "(\\d{4})(\\d{5})", "$1-$2", [ "5(?:2[2-489]|3[5-9]|9)|892", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|892" ], "0$1" ], [ , "(\\d{2})(\\d{7})", "$1-$2", [ "8" ], "0$1" ], [ , "(\\d{3})(\\d{6})", "$1-$2", [ "[5-7]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], 1, , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MC: [ , [ , , "(?:[3489]|6\\d)\\d{7}", , , , , , , [ 8, 9 ] ], [ , , "(?:870|9[2-47-9]\\d)\\d{5}", , , , "99123456", , , [ 8 ] ], [ , , "4(?:[46]\\d|5[1-9])\\d{5}|(?:3|6\\d)\\d{7}", , , , "612345678" ], [ , , "(?:800|90\\d)\\d{5}", , , , "90123456", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "MC", 377, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", [ "87" ] ], [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "4" ], "0$1" ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[389]" ] ], [ , "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", [ "6" ], "0$1" ] ], [ [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "4" ], "0$1" ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[389]" ] ], [ , "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", [ "6" ], "0$1" ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , "8[07]0\\d{5}", , , , , , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MD: [ , [ , , "(?:[235-7]\\d|[89]0)\\d{6}", , , , , , , [ 8 ] ], [ , , "(?:(?:2[1-9]|3[1-79])\\d|5(?:33|5[257]))\\d{5}", , , , "22212345" ], [ , , "562\\d{5}|(?:6\\d|7[16-9])\\d{6}", , , , "62112345" ], [ , , "800\\d{5}", , , , "80012345" ], [ , , "90[056]\\d{5}", , , , "90012345" ], [ , , "808\\d{5}", , , , "80812345" ], [ , , , , , , , , , [ -1 ] ], [ , , "3[08]\\d{6}", , , , "30123456" ], "MD", 373, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{5})", "$1 $2", [ "[89]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "22|3" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", [ "[25-7]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "803\\d{5}", , , , "80312345" ], , , [ , , , , , , , , , [ -1 ] ] ],
                ME: [ , [ , , "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", , , , , , , [ 8, 9 ], [ 6 ] ], [ , , "(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:0[2467]|1[24-7]|2[2-467]))\\d{5}", , , , "30234567", , , [ 8 ], [ 6 ] ], [ , , "6(?:[07-9]\\d|3[024]|6[0-25])\\d{5}", , , , "67622901", , , [ 8 ] ], [ , , "80(?:[0-2578]|9\\d)\\d{5}", , , , "80080002" ], [ , , "9(?:4[1568]|5[178])\\d{5}", , , , "94515151", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "78[1-49]\\d{5}", , , , "78108780", , , [ 8 ] ], "ME", 382, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "[2-9]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "77[1-9]\\d{5}", , , , "77273012", , , [ 8 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MF: [ , [ , , "(?:590|(?:69|80)\\d|976)\\d{6}", , , , , , , [ 9 ] ], [ , , "590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}", , , , "590271234" ], [ , , "69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}", , , , "690001234" ], [ , , "80[0-5]\\d{6}", , , , "800012345" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "976[01]\\d{5}", , , , "976012345" ], "MF", 590, "00", "0", , , "0", , , , , , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MG: [ , [ , , "[23]\\d{8}", , , , , , , [ 9 ], [ 7 ] ], [ , , "2072[29]\\d{4}|20(?:2\\d|4[47]|5[3467]|6[279]|7[35]|8[268]|9[245])\\d{5}", , , , "202123456", , , , [ 7 ] ], [ , , "3[2-489]\\d{7}", , , , "321234567" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "22\\d{7}", , , , "221234567" ], "MG", 261, "00", "0", , , "0|([24-9]\\d{6})$", "20$1", , , [ [ , "(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", [ "[23]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MH: [ , [ , , "329\\d{4}|(?:[256]\\d|45)\\d{5}", , , , , , , [ 7 ] ], [ , , "(?:247|528|625)\\d{4}", , , , "2471234" ], [ , , "(?:(?:23|54)5|329|45[56])\\d{4}", , , , "2351234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "635\\d{4}", , , , "6351234" ], "MH", 692, "011", "1", , , "1", , , , [ [ , "(\\d{3})(\\d{4})", "$1-$2", [ "[2-6]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MK: [ , [ , , "[2-578]\\d{7}", , , , , , , [ 8 ], [ 6, 7 ] ], [ , , "(?:(?:2(?:62|77)0|3444)\\d|4[56]440)\\d{3}|(?:34|4[357])700\\d{3}|(?:2(?:[23]\\d|5[0-578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}", , , , "22012345", , , , [ 6, 7 ] ], [ , , "7(?:3555|4(?:60\\d|747)|94(?:[01]\\d|2[0-4]))\\d{3}|7(?:[0-25-8]\\d|3[1-4]|42|9[23])\\d{5}", , , , "72345678" ], [ , , "800\\d{5}", , , , "80012345" ], [ , , "5[02-9]\\d{6}", , , , "50012345" ], [ , , "8(?:0[1-9]|[1-9]\\d)\\d{5}", , , , "80123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "MK", 389, "00", "0", , , "0", , , , [ [ , "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", [ "2|34[47]|4(?:[37]7|5[47]|64)" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[347]" ], "0$1" ], [ , "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[58]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                ML: [ , [ , , "[24-9]\\d{7}", , , , , , , [ 8 ] ], [ , , "2(?:07[0-8]|12[67])\\d{4}|(?:2(?:02|1[4-689])|4(?:0[0-4]|4[1-39]))\\d{5}", , , , "20212345" ], [ , , "2(?:0(?:01|79)|17\\d)\\d{4}|(?:5[01]|[679]\\d|8[239])\\d{6}", , , , "65012345" ], [ , , "80\\d{6}", , , , "80012345" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "ML", 223, "00", , , , , , , , [ [ , "(\\d{4})", "$1", [ "67[057-9]|74[045]", "67(?:0[09]|[59]9|77|8[89])|74(?:0[02]|44|55)" ] ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[24-9]" ] ] ], [ [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[24-9]" ] ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , "80\\d{6}" ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MM: [ , [ , , "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", , , , , , , [ 6, 7, 8, 9, 10 ], [ 5 ] ], [ , , "(?:1(?:(?:2\\d|3[56]|[89][0-6])\\d|4(?:2[2-469]|39|46|6[25]|7[0-3]|83)|6)|2(?:2(?:00|8[34])|4(?:0\\d|2[246]|39|46|62|7[0-3]|83)|51\\d\\d)|4(?:2(?:2\\d\\d|48[0-3])|3(?:20\\d|4(?:70|83)|56)|420\\d|5470)|6(?:0(?:[23]|88\\d)|(?:124|[56]2\\d)\\d|247[23]|3(?:20\\d|470)|4(?:2[04]\\d|47[23])|7(?:(?:3\\d|8[01459])\\d|4(?:39|60|7[013]))))\\d{4}|5(?:2(?:2\\d{5,6}|47[023]\\d{4})|(?:347[23]|4(?:2(?:1|86)|470)|522\\d|6(?:20\\d|483)|7(?:20\\d|48[0-2])|8(?:20\\d|47[02])|9(?:20\\d|47[01]))\\d{4})|7(?:(?:0470|4(?:25\\d|470)|5(?:202|470|96\\d))\\d{4}|1(?:20\\d{4,5}|4(?:70|83)\\d{4}))|8(?:1(?:2\\d{5,6}|4(?:10|7[01]\\d)\\d{3})|2(?:2\\d{5,6}|(?:320|490\\d)\\d{3})|(?:3(?:2\\d\\d|470)|4[24-7]|5(?:2\\d|4[1-9]|51)\\d|6[23])\\d{4})|(?:1[2-6]\\d|4(?:2[24-8]|3[2-7]|[46][2-6]|5[3-5])|5(?:[27][2-8]|3[2-68]|4[24-8]|5[23]|6[2-4]|8[24-7]|9[2-7])|6(?:[19]20|42[03-6]|(?:52|7[45])\\d)|7(?:[04][24-8]|[15][2-7]|22|3[2-4])|8(?:1[2-689]|2[2-8]|[35]2\\d))\\d{4}|25\\d{5,6}|(?:2[2-9]|6(?:1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7[235-7]|8[245]|9[24])|8(?:3[24]|5[245]))\\d{4}", , , , "1234567", , , [ 6, 7, 8, 9 ], [ 5 ] ], [ , , "(?:17[01]|9(?:2(?:[0-4]|[56]\\d\\d)|(?:3(?:[0-36]|4\\d)|(?:6\\d|8[89]|9[4-8])\\d|7(?:3|40|[5-9]\\d))\\d|4(?:(?:[0245]\\d|[1379])\\d|88)|5[0-6])\\d)\\d{4}|9[69]1\\d{6}|9(?:[68]\\d|9[089])\\d{5}", , , , "92123456", , , [ 7, 8, 9, 10 ] ], [ , , "80080(?:[01][1-9]|2\\d)\\d{3}", , , , "8008001234", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "1333\\d{4}|[12]468\\d{4}", , , , "13331234", , , [ 8 ] ], "MM", 95, "00", "0", , , "0", , , , [ [ , "(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", [ "16|2" ], "0$1" ], [ , "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", [ "[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]" ], "0$1" ], [ , "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "[12]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "[4-7]|8[1-35]" ], "0$1" ], [ , "(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", [ "9(?:2[0-4]|[35-9]|4[137-9])" ], "0$1" ], [ , "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", [ "2" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "8" ], "0$1" ], [ , "(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", [ "92" ], "0$1" ], [ , "(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", [ "9" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MN: [ , [ , , "[12]\\d{7,9}|[57-9]\\d{7}", , , , , , , [ 8, 9, 10 ], [ 4, 5, 6 ] ], [ , , "[12]2[1-3]\\d{5,6}|7(?:0[0-5]\\d|128)\\d{4}|(?:[12](?:1|27)|5[368])\\d{6}|[12](?:3[2-8]|4[2-68]|5[1-4689])\\d{6,7}", , , , "53123456", , , , [ 4, 5, 6 ] ], [ , , "(?:83[01]|920)\\d{5}|(?:5[05]|8[05689]|9[013-9])\\d{6}", , , , "88123456", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "712[0-79]\\d{4}|7(?:1[013-9]|[25-8]\\d)\\d{5}", , , , "75123456", , , [ 8 ] ], "MN", 976, "001", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", [ "[12]1" ], "0$1" ], [ , "(\\d{4})(\\d{4})", "$1 $2", [ "[57-9]" ] ], [ , "(\\d{3})(\\d{5,6})", "$1 $2", [ "[12]2[1-3]" ], "0$1" ], [ , "(\\d{4})(\\d{5,6})", "$1 $2", [ "[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]" ], "0$1" ], [ , "(\\d{5})(\\d{4,5})", "$1 $2", [ "[12]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MO: [ , [ , , "0800\\d{3}|(?:28|[68]\\d)\\d{6}", , , , , , , [ 7, 8 ] ], [ , , "(?:28[2-9]|8(?:11|[2-57-9]\\d))\\d{5}", , , , "28212345", , , [ 8 ] ], [ , , "6800[0-79]\\d{3}|6(?:[235]\\d\\d|6(?:0[0-5]|[1-9]\\d)|8(?:0[1-9]|[14-8]\\d|2[5-9]|[39][0-4]))\\d{4}", , , , "66123456", , , [ 8 ] ], [ , , "0800\\d{3}", , , , "0800501", , , [ 7 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "MO", 853, "00", , , , , , , , [ [ , "(\\d{4})(\\d{3})", "$1 $2", [ "0" ] ], [ , "(\\d{4})(\\d{4})", "$1 $2", [ "[268]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MP: [ , [ , , "[58]\\d{9}|(?:67|90)0\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}", , , , "6702345678", , , , [ 7 ] ], [ , , "670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}", , , , "6702345678", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456" ], [ , , "900[2-9]\\d{6}", , , , "9002123456" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "MP", 1, "011", "1", , , "1|([2-9]\\d{6})$", "670$1", , 1, , , [ , , , , , , , , , [ -1 ] ], , "670", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MQ: [ , [ , , "(?:69|80)\\d{7}|(?:59|97)6\\d{6}", , , , , , , [ 9 ] ], [ , , "596(?:[04-7]\\d|10|2[7-9]|3[014-9]|8[09]|9[4-9])\\d{4}", , , , "596301234" ], [ , , "69(?:6(?:[0-46-9]\\d|5[0-6])|727)\\d{4}", , , , "696201234" ], [ , , "80[0-5]\\d{6}", , , , "800012345" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "976(?:6\\d|7[0-367])\\d{4}", , , , "976612345" ], "MQ", 596, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[569]" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "8" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MR: [ , [ , , "(?:[2-4]\\d\\d|800)\\d{5}", , , , , , , [ 8 ] ], [ , , "(?:25[08]|35\\d|45[1-7])\\d{5}", , , , "35123456" ], [ , , "[2-4][0-46-9]\\d{6}", , , , "22123456" ], [ , , "800\\d{5}", , , , "80012345" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "MR", 222, "00", , , , , , , , [ [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[2-48]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MS: [ , [ , , "(?:[58]\\d\\d|664|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "6644(?:1[0-3]|91)\\d{4}", , , , "6644912345", , , , [ 7 ] ], [ , , "664(?:3(?:49|9[1-6])|49[2-6])\\d{4}", , , , "6644923456", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456" ], [ , , "900[2-9]\\d{6}", , , , "9002123456" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "MS", 1, "011", "1", , , "1|([34]\\d{6})$", "664$1", , , , , [ , , , , , , , , , [ -1 ] ], , "664", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MT: [ , [ , , "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", , , , , , , [ 8 ] ], [ , , "20(?:3[1-4]|6[059])\\d{4}|2(?:0[19]|[1-357]\\d|60)\\d{5}", , , , "21001234" ], [ , , "(?:7(?:210|[79]\\d\\d)|9(?:[29]\\d\\d|69[67]|8(?:1[1-3]|89|97)))\\d{4}", , , , "96961234" ], [ , , "800(?:02|[3467]\\d)\\d{3}", , , , "80071234" ], [ , , "5(?:0(?:0(?:37|43)|(?:6\\d|70|9[0168])\\d)|[12]\\d0[1-5])\\d{3}", , , , "50037123" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "3550\\d{4}", , , , "35501234" ], "MT", 356, "00", , , , , , , , [ [ , "(\\d{4})(\\d{4})", "$1 $2", [ "[2357-9]" ] ] ], , [ , , "7117\\d{4}", , , , "71171234" ], , , [ , , , , , , , , , [ -1 ] ], [ , , "501\\d{5}", , , , "50112345" ], , , [ , , , , , , , , , [ -1 ] ] ],
                MU: [ , [ , , "(?:5|8\\d\\d)\\d{7}|[2-468]\\d{6}", , , , , , , [ 7, 8, 10 ] ], [ , , "(?:2(?:[0346-8]\\d|1[0-7])|4(?:[013568]\\d|2[4-7])|54(?:[3-5]\\d|71)|6\\d\\d|8(?:14|3[129]))\\d{4}", , , , "54480123", , , [ 7, 8 ] ], [ , , "5(?:4(?:2[1-389]|7[1-9])|87[15-8])\\d{4}|5(?:2[5-9]|4[3-689]|[57]\\d|8[0-689]|9[0-8])\\d{5}", , , , "52512345", , , [ 8 ] ], [ , , "802\\d{7}|80[0-2]\\d{4}", , , , "8001234", , , [ 7, 10 ] ], [ , , "30\\d{5}", , , , "3012345", , , [ 7 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "3(?:20|9\\d)\\d{4}", , , , "3201234", , , [ 7 ] ], "MU", 230, "0(?:0|[24-7]0|3[03])", , , , , , "020", , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[2-46]|8[013]" ] ], [ , "(\\d{4})(\\d{4})", "$1 $2", [ "5" ] ], [ , "(\\d{5})(\\d{5})", "$1 $2", [ "8" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MV: [ , [ , , "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", , , , , , , [ 7, 10 ] ], [ , , "(?:3(?:0[0-3]|3[0-59])|6(?:[57][02468]|6[024-68]|8[024689]))\\d{4}", , , , "6701234", , , [ 7 ] ], [ , , "46[46]\\d{4}|(?:7\\d|9[13-9])\\d{5}", , , , "7712345", , , [ 7 ] ], [ , , "800\\d{7}", , , , "8001234567", , , [ 10 ] ], [ , , "900\\d{7}", , , , "9001234567", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "MV", 960, "0(?:0|19)", , , , , , "00", , [ [ , "(\\d{3})(\\d{4})", "$1-$2", [ "[3467]|9[13-9]" ] ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[89]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "4[05]0\\d{4}", , , , "4001234", , , [ 7 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MW: [ , [ , , "(?:[129]\\d|31|77|88)\\d{7}|1\\d{6}", , , , , , , [ 7, 9 ] ], [ , , "(?:1[2-9]|2[12]\\d\\d)\\d{5}", , , , "1234567" ], [ , , "111\\d{6}|(?:31|77|88|9[89])\\d{7}", , , , "991234567", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "MW", 265, "00", "0", , , "0", , , , [ [ , "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", [ "1[2-9]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "2" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[137-9]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MX: [ , [ , , "1(?:(?:44|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[017]\\d|[235][1-9]|4[0-35-9]|6[0-46-9]|8[1-79]|9[1-8])|[2-9]\\d)\\d{8}", , , , , , , [ 10, 11 ], [ 7, 8 ] ], [ , , "6571\\d{6}|(?:2(?:0[01]|2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[25-7][1-9]|3[1-8]|4\\d|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|6[1-9]|7[12]|8[1-8]|9\\d))\\d{7}", , , , "2001234567", , , [ 10 ], [ 7, 8 ] ], [ , , "6571\\d{6}|(?:1(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))|2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[25-7][1-9]|3[1-8]|4\\d|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|6[1-9]|7[12]|8[1-8]|9\\d))\\d{7}", , , , "12221234567", , , , [ 7, 8 ] ], [ , , "8(?:00|88)\\d{7}", , , , "8001234567", , , [ 10 ] ], [ , , "900\\d{7}", , , , "9001234567", , , [ 10 ] ], [ , , "300\\d{7}", , , , "3001234567", , , [ 10 ] ], [ , , "500\\d{7}", , , , "5001234567", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], "MX", 52, "0[09]", "01", , , "0(?:[12]|4[45])|1", , "00", , [ [ , "(\\d{5})", "$1", [ "53" ] ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", [ "33|5[56]|81" ], , , 1 ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[2-9]" ], , , 1 ], [ , "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", [ "1(?:33|5[56]|81)" ], , , 1 ], [ , "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", [ "1" ], , , 1 ] ], [ [ , "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", [ "33|5[56]|81" ], , , 1 ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[2-9]" ], , , 1 ], [ , "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", [ "1(?:33|5[56]|81)" ], , , 1 ], [ , "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", [ "1" ], , , 1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MY: [ , [ , , "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", , , , , , , [ 8, 9, 10 ], [ 6, 7 ] ], [ , , "(?:3(?:2[0-36-9]|3[0-368]|4[0-278]|5[0-24-8]|6[0-467]|7[1246-9]|8\\d|9[0-57])\\d|4(?:2[0-689]|[3-79]\\d|8[1-35689])|5(?:2[0-589]|[3468]\\d|5[0-489]|7[1-9]|9[23])|6(?:2[2-9]|3[1357-9]|[46]\\d|5[0-6]|7[0-35-9]|85|9[015-8])|7(?:[2579]\\d|3[03-68]|4[0-8]|6[5-9]|8[0-35-9])|8(?:[24][2-8]|3[2-5]|5[2-7]|6[2-589]|7[2-578]|[89][2-9])|9(?:0[57]|13|[25-7]\\d|[3489][0-8]))\\d{5}", , , , "323856789", , , [ 8, 9 ], [ 6, 7 ] ], [ , , "1(?:1888[69]|4400|8(?:47|8[27])[0-4])\\d{4}|1(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d)|7(?:[0134]\\d|2[1-9]|5[0-6]))|(?:(?:[269]|59)\\d|[37][1-9]|4[235-9])\\d|8(?:1[23]|[236]\\d|4[06]|5[7-9]|7[016-9]|8[01]|9[0-8]))\\d{5}", , , , "123456789", , , [ 9, 10 ] ], [ , , "1[378]00\\d{6}", , , , "1300123456", , , [ 10 ] ], [ , , "1600\\d{6}", , , , "1600123456", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "15(?:4(?:6[0-4]\\d|8(?:0[125]|[17]\\d|21|3[01]|4[01589]|5[014]|6[02]))|6(?:32[0-6]|78\\d))\\d{4}", , , , "1546012345", , , [ 10 ] ], "MY", 60, "00", "0", , , "0", , , , [ [ , "(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", [ "[4-79]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", [ "1(?:[02469]|[378][1-9])|8" ], "0$1" ], [ , "(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", [ "3" ], "0$1" ], [ , "(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", [ "1[36-8]" ] ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", [ "15" ], "0$1" ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", [ "1" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                MZ: [ , [ , , "(?:2|8\\d)\\d{7}", , , , , , , [ 8, 9 ] ], [ , , "2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}", , , , "21123456", , , [ 8 ] ], [ , , "8[2-79]\\d{7}", , , , "821234567", , , [ 9 ] ], [ , , "800\\d{6}", , , , "800123456", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "MZ", 258, "00", , , , , , , , [ [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "2|8[2-79]" ] ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "8" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                NA: [ , [ , , "[68]\\d{7,8}", , , , , , , [ 8, 9 ] ], [ , , "64426\\d{3}|6(?:1(?:2[2-7]|3[01378]|4[0-4])|254|32[0237]|4(?:27|41|5[25])|52[236-8]|626|7(?:2[2-4]|30))\\d{4,5}|6(?:1(?:(?:0\\d|2[0189]|3[24-69]|4[5-9])\\d|17|69|7[014])|2(?:17|5[0-36-8]|69|70)|3(?:17|2[14-689]|34|6[289]|7[01]|81)|4(?:17|2[0-2]|4[06]|5[0137]|69|7[01])|5(?:17|2[0459]|69|7[01])|6(?:17|25|38|42|69|7[01])|7(?:17|2[569]|3[13]|6[89]|7[01]))\\d{4}", , , , "61221234" ], [ , , "(?:60|8[1245])\\d{7}", , , , "811234567", , , [ 9 ] ], [ , , "80\\d{7}", , , , "800123456", , , [ 9 ] ], [ , , "8701\\d{5}", , , , "870123456", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "8(?:3\\d\\d|86)\\d{5}", , , , "88612345" ], "NA", 264, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "88" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "6" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "87" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "8" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                NC: [ , [ , , "(?:050|[2-57-9]\\d\\d)\\d{3}", , , , , , , [ 6 ] ], [ , , "(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}", , , , "201234" ], [ , , "(?:5[0-4]|[79]\\d|8[0-79])\\d{4}", , , , "751234" ], [ , , "050\\d{3}", , , , "050012" ], [ , , "36\\d{4}", , , , "366711" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "NC", 687, "00", , , , , , , , [ [ , "(\\d{3})", "$1", [ "5[6-8]" ] ], [ , "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", [ "[02-57-9]" ] ] ], [ [ , "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", [ "[02-57-9]" ] ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                NE: [ , [ , , "[027-9]\\d{7}", , , , , , , [ 8 ] ], [ , , "2(?:0(?:20|3[1-8]|4[13-5]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}", , , , "20201234" ], [ , , "(?:23|7[04]|[89]\\d)\\d{6}", , , , "93123456" ], [ , , "08\\d{6}", , , , "08123456" ], [ , , "09\\d{6}", , , , "09123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "NE", 227, "00", , , , , , , , [ [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "08" ] ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[089]|2[013]|7[04]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                NF: [ , [ , , "[13]\\d{5}", , , , , , , [ 6 ], [ 5 ] ], [ , , "(?:1(?:06|17|28|39)|3[0-2]\\d)\\d{3}", , , , "106609", , , , [ 5 ] ], [ , , "(?:14|3[58])\\d{4}", , , , "381234", , , , [ 5 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "NF", 672, "00", , , , "([0-258]\\d{4})$", "3$1", , , [ [ , "(\\d{2})(\\d{4})", "$1 $2", [ "1[0-3]" ] ], [ , "(\\d)(\\d{5})", "$1 $2", [ "[13]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                NG: [ , [ , , "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", , , , , , , [ 7, 8, 10, 11, 12, 13, 14 ], [ 5, 6 ] ], [ , , "(?:(?:[1-356]\\d|4[02-8]|8[2-9])\\d|9(?:0[3-9]|[1-9]\\d))\\d{5}|7(?:0(?:[013-689]\\d|2[0-24-9])\\d{3,4}|[1-79]\\d{6})|(?:[12]\\d|4[147]|5[14579]|6[1578]|7[1-3578])\\d{5}", , , , "18040123", , , [ 7, 8 ], [ 5, 6 ] ], [ , , "(?:702[0-24-9]|8(?:01|19)[01])\\d{6}|(?:70[13-689]|8(?:0[2-9]|1[0-8])|9(?:0[1-9]|1[2356]))\\d{7}", , , , "8021234567", , , [ 10 ] ], [ , , "800\\d{7,11}", , , , "80017591759", , , [ 10, 11, 12, 13, 14 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "NG", 234, "009", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", [ "78" ], "0$1" ], [ , "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "[12]|9(?:0[3-9]|[1-9])" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", [ "[3-7]|8[2-9]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "[7-9]" ], "0$1" ], [ , "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", [ "[78]" ], "0$1" ], [ , "(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", [ "[78]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "700\\d{7,11}", , , , "7001234567", , , [ 10, 11, 12, 13, 14 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                NI: [ , [ , , "(?:1800|[25-8]\\d{3})\\d{4}", , , , , , , [ 8 ] ], [ , , "2\\d{7}", , , , "21234567" ], [ , , "(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\\d)\\d)\\d{5}", , , , "81234567" ], [ , , "1800\\d{4}", , , , "18001234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "NI", 505, "00", , , , , , , , [ [ , "(\\d{4})(\\d{4})", "$1 $2", [ "[125-8]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                NL: [ , [ , , "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", , , , , , , [ 5, 6, 7, 8, 9, 10, 11 ] ], [ , , "(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d\\d)\\d{6}", , , , "101234567", , , [ 9 ] ], [ , , "(?:6[1-58]|970\\d)\\d{7}", , , , "612345678", , , [ 9, 11 ] ], [ , , "800\\d{4,7}", , , , "8001234", , , [ 7, 8, 9, 10 ] ], [ , , "90[069]\\d{4,7}", , , , "9061234", , , [ 7, 8, 9, 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "(?:85|91)\\d{7}", , , , "851234567", , , [ 9 ] ], "NL", 31, "00", "0", , , "0", , , , [ [ , "(\\d{4})", "$1", [ "1[238]|[34]" ] ], [ , "(\\d{2})(\\d{3,4})", "$1 $2", [ "14" ] ], [ , "(\\d{6})", "$1", [ "1" ] ], [ , "(\\d{3})(\\d{4,7})", "$1 $2", [ "[89]0" ], "0$1" ], [ , "(\\d{2})(\\d{7})", "$1 $2", [ "66" ], "0$1" ], [ , "(\\d)(\\d{8})", "$1 $2", [ "6" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "1[16-8]|2[259]|3[124]|4[17-9]|5[124679]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[1-578]|91" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", [ "9" ], "0$1" ] ], [ [ , "(\\d{3})(\\d{4,7})", "$1 $2", [ "[89]0" ], "0$1" ], [ , "(\\d{2})(\\d{7})", "$1 $2", [ "66" ], "0$1" ], [ , "(\\d)(\\d{8})", "$1 $2", [ "6" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "1[16-8]|2[259]|3[124]|4[17-9]|5[124679]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[1-578]|91" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", [ "9" ], "0$1" ] ], [ , , "66\\d{7}", , , , "662345678", , , [ 9 ] ], , , [ , , "140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)\\d", , , , , , , [ 5, 6 ] ], [ , , "140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|(?:140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)|8[478]\\d{6})\\d", , , , "14020", , , [ 5, 6, 9 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                NO: [ , [ , , "(?:0|[2-9]\\d{3})\\d{4}", , , , , , , [ 5, 8 ] ], [ , , "(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", , , , "21234567", , , [ 8 ] ], [ , , "(?:4[015-8]|59|9\\d)\\d{6}", , , , "40612345", , , [ 8 ] ], [ , , "80[01]\\d{5}", , , , "80012345", , , [ 8 ] ], [ , , "82[09]\\d{5}", , , , "82012345", , , [ 8 ] ], [ , , "810(?:0[0-6]|[2-8]\\d)\\d{3}", , , , "81021234", , , [ 8 ] ], [ , , "880\\d{5}", , , , "88012345", , , [ 8 ] ], [ , , "85[0-5]\\d{5}", , , , "85012345", , , [ 8 ] ], "NO", 47, "00", , , , , , , , [ [ , "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", [ "[489]|59" ] ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[235-7]" ] ] ], , [ , , , , , , , , , [ -1 ] ], 1, "[02-689]|7[0-8]", [ , , , , , , , , , [ -1 ] ], [ , , "(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}", , , , "02000" ], , , [ , , "81[23]\\d{5}", , , , "81212345", , , [ 8 ] ] ],
                NP: [ , [ , , "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", , , , , , , [ 8, 10, 11 ], [ 6, 7 ] ], [ , , "(?:1[0-6]\\d|99[02-6])\\d{5}|(?:2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-7])[2-6]\\d{5}", , , , "14567890", , , [ 8 ], [ 6, 7 ] ], [ , , "9(?:6[0-3]|7[24-6]|8[0-24-68])\\d{7}", , , , "9841234567", , , [ 10 ] ], [ , , "1(?:66001|800\\d\\d)\\d{5}", , , , "16600101234", , , [ 11 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "NP", 977, "00", "0", , , "0", , , , [ [ , "(\\d)(\\d{7})", "$1-$2", [ "1[2-6]" ], "0$1" ], [ , "(\\d{2})(\\d{6})", "$1-$2", [ "1[01]|[2-8]|9(?:[1-579]|6[2-6])" ], "0$1" ], [ , "(\\d{3})(\\d{7})", "$1-$2", [ "9" ] ], [ , "(\\d{4})(\\d{2})(\\d{5})", "$1-$2-$3", [ "1" ] ] ], [ [ , "(\\d)(\\d{7})", "$1-$2", [ "1[2-6]" ], "0$1" ], [ , "(\\d{2})(\\d{6})", "$1-$2", [ "1[01]|[2-8]|9(?:[1-579]|6[2-6])" ], "0$1" ], [ , "(\\d{3})(\\d{7})", "$1-$2", [ "9" ] ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                NR: [ , [ , , "(?:444|(?:55|8\\d)\\d|666)\\d{4}", , , , , , , [ 7 ] ], [ , , "444\\d{4}", , , , "4441234" ], [ , , "(?:55[3-9]|666|8\\d\\d)\\d{4}", , , , "5551234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "NR", 674, "00", , , , , , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[4-68]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                NU: [ , [ , , "(?:[47]|888\\d)\\d{3}", , , , , , , [ 4, 7 ] ], [ , , "[47]\\d{3}", , , , "7012", , , [ 4 ] ], [ , , "888[4-9]\\d{3}", , , , "8884012", , , [ 7 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "NU", 683, "00", , , , , , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "8" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                NZ: [ , [ , , "[29]\\d{7,9}|50\\d{5}(?:\\d{2,3})?|6[0-35-9]\\d{6}|7\\d{7,8}|8\\d{4,9}|(?:11\\d|[34])\\d{7}", , , , , , , [ 5, 6, 7, 8, 9, 10 ] ], [ , , "24099\\d{3}|(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}", , , , "32345678", , , [ 8 ], [ 7 ] ], [ , , "2[0-27-9]\\d{7,8}|21\\d{6}", , , , "211234567", , , [ 8, 9, 10 ] ], [ , , "508\\d{6,7}|80\\d{6,8}", , , , "800123456", , , [ 8, 9, 10 ] ], [ , , "(?:11\\d{5}|50(?:0[08]|30|66|77|88))\\d{3}|90\\d{6,8}", , , , "900123456", , , [ 7, 8, 9, 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "70\\d{7}", , , , "701234567", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], "NZ", 64, "0(?:0|161)", "0", , , "0", , "00", , [ [ , "(\\d{2})(\\d{3,8})", "$1 $2", [ "8[1-579]" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", [ "50[036-8]|[89]0", "50(?:[0367]|88)|[89]0" ], "0$1" ], [ , "(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", [ "24|[346]|7[2-57-9]|9[2-9]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "2(?:10|74)|[59]|80" ], "0$1" ], [ , "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", [ "1|2[028]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", [ "2(?:[169]|7[0-35-9])|7|86" ], "0$1" ] ], , [ , , "[28]6\\d{6,7}", , , , "26123456", , , [ 8, 9 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "8(?:1[6-9]|22|3\\d|4[045]|5[459]|7[0-3579]|90)\\d{2,7}", , , , "83012378" ], , , [ , , , , , , , , , [ -1 ] ] ],
                OM: [ , [ , , "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", , , , , , , [ 7, 8, 9 ] ], [ , , "2[2-6]\\d{6}", , , , "23123456", , , [ 8 ] ], [ , , "1505\\d{4}|(?:7(?:[1289]\\d|7[0-4])|9(?:0[1-9]|[1-9]\\d))\\d{5}", , , , "92123456", , , [ 8 ] ], [ , , "8007\\d{4,5}|(?:500|800[05])\\d{4}", , , , "80071234" ], [ , , "900\\d{5}", , , , "90012345", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "OM", 968, "00", , , , , , , , [ [ , "(\\d{3})(\\d{4,6})", "$1 $2", [ "[58]" ] ], [ , "(\\d{2})(\\d{6})", "$1 $2", [ "2" ] ], [ , "(\\d{4})(\\d{4})", "$1 $2", [ "[179]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                PA: [ , [ , , "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", , , , , , , [ 7, 8, 10, 11 ] ], [ , , "(?:1(?:0\\d|1[479]|2[37]|3[0137]|4[17]|5[05]|6[58]|7[0167]|8[258]|9[1389])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[02-9])|3(?:[089]\\d|1[0-7]|2[0-5]|33|4[0-79]|5[0-35]|6[068]|7[0-8])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[056]|7[0-24-9]|8[5-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}", , , , "2001234", , , [ 7 ] ], [ , , "(?:1[16]1|21[89]|6\\d{3}|8(?:1[01]|7[23]))\\d{4}", , , , "61234567", , , [ 7, 8 ] ], [ , , "800\\d{4,5}|(?:00800|800\\d)\\d{6}", , , , "8001234" ], [ , , "(?:8(?:22|55|60|7[78]|86)|9(?:00|81))\\d{4}", , , , "8601234", , , [ 7 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "PA", 507, "00", , , , , , , , [ [ , "(\\d{3})(\\d{4})", "$1-$2", [ "[1-57-9]" ] ], [ , "(\\d{4})(\\d{4})", "$1-$2", [ "[68]" ] ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "8" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                PE: [ , [ , , "(?:[14-8]|9\\d)\\d{7}", , , , , , , [ 8, 9 ], [ 6, 7 ] ], [ , , "(?:(?:4[34]|5[14])[0-8]\\d|7(?:173|3[0-8]\\d)|8(?:10[05689]|6(?:0[06-9]|1[6-9]|29)|7(?:0[569]|[56]0)))\\d{4}|(?:1[0-8]|4[12]|5[236]|6[1-7]|7[246]|8[2-4])\\d{6}", , , , "11234567", , , [ 8 ], [ 6, 7 ] ], [ , , "9\\d{8}", , , , "912345678", , , [ 9 ] ], [ , , "800\\d{5}", , , , "80012345", , , [ 8 ] ], [ , , "805\\d{5}", , , , "80512345", , , [ 8 ] ], [ , , "801\\d{5}", , , , "80112345", , , [ 8 ] ], [ , , "80[24]\\d{5}", , , , "80212345", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], "PE", 51, "19(?:1[124]|77|90)00", "0", " Anexo ", , "0", , , , [ [ , "(\\d{3})(\\d{5})", "$1 $2", [ "80" ], "(0$1)" ], [ , "(\\d)(\\d{7})", "$1 $2", [ "1" ], "(0$1)" ], [ , "(\\d{2})(\\d{6})", "$1 $2", [ "[4-8]" ], "(0$1)" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "9" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                PF: [ , [ , , "4\\d{5}(?:\\d{2})?|8\\d{7,8}", , , , , , , [ 6, 8, 9 ] ], [ , , "4(?:0[4-689]|9[4-68])\\d{5}", , , , "40412345", , , [ 8 ] ], [ , , "8[7-9]\\d{6}", , , , "87123456", , , [ 8 ] ], [ , , "80[0-5]\\d{6}", , , , "800012345", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "499\\d{5}", , , , "49901234", , , [ 8 ] ], "PF", 689, "00", , , , , , , , [ [ , "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", [ "44" ] ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "4|8[7-9]" ] ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "8" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , "44\\d{4}", , , , , , , [ 6 ] ], [ , , "44\\d{4}", , , , "440123", , , [ 6 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                PG: [ , [ , , "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", , , , , , , [ 7, 8 ] ], [ , , "(?:(?:3[0-2]|4[257]|5[34]|9[78])\\d|64[1-9]|85[02-46-9])\\d{4}", , , , "3123456", , , [ 7 ] ], [ , , "(?:7\\d|8[18])\\d{6}", , , , "70123456", , , [ 8 ] ], [ , , "180\\d{4}", , , , "1801234", , , [ 7 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "2(?:0[0-47]|7[568])\\d{4}", , , , "2751234", , , [ 7 ] ], "PG", 675, "00|140[1-3]", , , , , , "00", , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "18|[2-69]|85" ] ], [ , "(\\d{4})(\\d{4})", "$1 $2", [ "[78]" ] ] ], , [ , , "27[01]\\d{4}", , , , "2700123", , , [ 7 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                PH: [ , [ , , "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", , , , , , , [ 6, 8, 9, 10, 11, 12, 13 ], [ 4, 5, 7 ] ], [ , , "(?:(?:2[3-8]|3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578])\\d{3}|88(?:22\\d\\d|42))\\d{4}|(?:2|8[2-8]\\d\\d)\\d{5}", , , , "232345678", , , [ 6, 8, 9, 10 ], [ 4, 5, 7 ] ], [ , , "(?:8(?:1[37]|9[5-8])|9(?:0[5-9]|1[0-24-9]|[235-7]\\d|4[2-9]|8[135-9]|9[1-9]))\\d{7}", , , , "9051234567", , , [ 10 ] ], [ , , "1800\\d{7,9}", , , , "180012345678", , , [ 11, 12, 13 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "PH", 63, "00", "0", , , "0", , , , [ [ , "(\\d)(\\d{5})", "$1 $2", [ "2" ], "(0$1)" ], [ , "(\\d{4})(\\d{4,6})", "$1 $2", [ "3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))" ], "(0$1)" ], [ , "(\\d{5})(\\d{4})", "$1 $2", [ "346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834" ], "(0$1)" ], [ , "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", [ "2" ], "(0$1)" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[3-7]|8[2-8]" ], "(0$1)" ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[89]" ], "0$1" ], [ , "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", [ "1" ] ], [ , "(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", [ "1" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                PK: [ , [ , , "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", , , , , , , [ 8, 9, 10, 11, 12 ], [ 5, 6, 7 ] ], [ , , "(?:(?:21|42)[2-9]|58[126])\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6,7}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}", , , , "2123456789", , , [ 9, 10 ], [ 5, 6, 7, 8 ] ], [ , , "3(?:[0-24]\\d|3[0-7]|55|64)\\d{7}", , , , "3012345678", , , [ 10 ] ], [ , , "800\\d{5}(?:\\d{3})?", , , , "80012345", , , [ 8, 11 ] ], [ , , "900\\d{5}", , , , "90012345", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "122\\d{6}", , , , "122044444", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], "PK", 92, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", [ "[89]0" ], "0$1" ], [ , "(\\d{4})(\\d{5})", "$1 $2", [ "1" ] ], [ , "(\\d{3})(\\d{6,7})", "$1 $2", [ "2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]" ], "(0$1)" ], [ , "(\\d{2})(\\d{7,8})", "$1 $2", [ "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]" ], "(0$1)" ], [ , "(\\d{5})(\\d{5})", "$1 $2", [ "58" ], "(0$1)" ], [ , "(\\d{3})(\\d{7})", "$1 $2", [ "3" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", [ "2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91" ], "(0$1)" ], [ , "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", [ "[24-9]" ], "(0$1)" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:0[468]|[1-8])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}", , , , "21111825888", , , [ 11, 12 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                PL: [ , [ , , "6\\d{5}(?:\\d{2})?|8\\d{9}|[1-9]\\d{6}(?:\\d{2})?", , , , , , , [ 6, 7, 8, 9, 10 ] ], [ , , "47\\d{7}|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])(?:[02-9]\\d{6}|1(?:[0-8]\\d{5}|9\\d{3}(?:\\d{2})?))", , , , "123456789", , , [ 7, 9 ] ], [ , , "21(?:1(?:[145]\\d|3[1-5])|2[0-4]\\d)\\d{4}|(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}", , , , "512345678", , , [ 9 ] ], [ , , "800\\d{6,7}", , , , "800123456", , , [ 9, 10 ] ], [ , , "70[01346-8]\\d{6}", , , , "701234567", , , [ 9 ] ], [ , , "801\\d{6}", , , , "801234567", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "39\\d{7}", , , , "391234567", , , [ 9 ] ], "PL", 48, "00", , , , , , , , [ [ , "(\\d{5})", "$1", [ "19" ] ], [ , "(\\d{3})(\\d{3})", "$1 $2", [ "11|64" ] ], [ , "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", [ "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19" ] ], [ , "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", [ "64" ] ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)" ] ], [ , "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "1[2-8]|[2-7]|8[1-79]|9[145]" ] ], [ , "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "8" ] ] ], , [ , , "64\\d{4,7}", , , , "641234567", , , [ 6, 7, 8, 9 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "804\\d{6}", , , , "804123456", , , [ 9 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                PM: [ , [ , , "(?:[45]|80\\d\\d)\\d{5}", , , , , , , [ 6, 9 ] ], [ , , "(?:4[1-356]|50)\\d{4}", , , , "430123", , , [ 6 ] ], [ , , "(?:4[02-4]|5[056])\\d{4}", , , , "551234", , , [ 6 ] ], [ , , "80[0-5]\\d{6}", , , , "800012345", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "PM", 508, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", [ "[45]" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "8" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                PR: [ , [ , , "(?:[589]\\d\\d|787)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "(?:787|939)[2-9]\\d{6}", , , , "7872345678", , , , [ 7 ] ], [ , , "(?:787|939)[2-9]\\d{6}", , , , "7872345678", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678" ], [ , , "900[2-9]\\d{6}", , , , "9002345678" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "PR", 1, "011", "1", , , "1", , , 1, , , [ , , , , , , , , , [ -1 ] ], , "787|939", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                PS: [ , [ , , "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", , , , , , , [ 8, 9, 10 ], [ 7 ] ], [ , , "(?:22[2-47-9]|42[45]|82[014-68]|92[3569])\\d{5}", , , , "22234567", , , [ 8 ], [ 7 ] ], [ , , "5[69]\\d{7}", , , , "599123456", , , [ 9 ] ], [ , , "1800\\d{6}", , , , "1800123456", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "1700\\d{6}", , , , "1700123456", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "PS", 970, "00", "0", , , "0", , , , [ [ , "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", [ "[2489]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "5" ], "0$1" ], [ , "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", [ "1" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                PT: [ , [ , , "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", , , , , , , [ 9 ] ], [ , , "2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}", , , , "212345678" ], [ , , "6[0356]92(?:30|9\\d)\\d{3}|(?:(?:16|6[0356])93|9(?:[1-36]\\d\\d|480))\\d{5}", , , , "912345678" ], [ , , "80[02]\\d{6}", , , , "800123456" ], [ , , "(?:6(?:0[178]|4[68])\\d|76(?:0[1-57]|1[2-47]|2[237]))\\d{5}", , , , "760123456" ], [ , , "80(?:8\\d|9[1579])\\d{5}", , , , "808123456" ], [ , , "884[0-4689]\\d{5}", , , , "884123456" ], [ , , "30\\d{7}", , , , "301234567" ], "PT", 351, "00", , , , , , , , [ [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "2[12]" ] ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "16|[236-9]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "70(?:7\\d|8[17])\\d{5}", , , , "707123456" ], , , [ , , "600\\d{6}", , , , "600110000" ] ],
                PW: [ , [ , , "(?:[24-8]\\d\\d|345|900)\\d{4}", , , , , , , [ 7 ] ], [ , , "(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}", , , , "2771234" ], [ , , "(?:(?:46|83)[0-5]|6[2-4689]0)\\d{4}|(?:45|77|88)\\d{5}", , , , "6201234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "PW", 680, "01[12]", , , , , , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[2-9]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                PY: [ , [ , , "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", , , , , , , [ 6, 7, 8, 9, 10, 11 ], [ 5 ] ], [ , , "(?:[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36])\\d{5,7}|(?:2(?:2[4-68]|[4-68]\\d|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51|[67]\\d)|4(?:3[12]|5[13]|9[1-47])|5(?:[1-4]\\d|5[02-4])|6(?:3[1-3]|44|7[1-8])|7(?:4[0-4]|5\\d|6[1-578]|75|8[0-8])|858)\\d{5,6}", , , , "212345678", , , [ 7, 8, 9 ], [ 5, 6 ] ], [ , , "9(?:51|6[129]|[78][1-6]|9[1-5])\\d{6}", , , , "961456789", , , [ 9 ] ], [ , , "9800\\d{5,7}", , , , "98000123456", , , [ 9, 10, 11 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "8700[0-4]\\d{4}", , , , "870012345", , , [ 9 ] ], "PY", 595, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{3,6})", "$1 $2", [ "[2-9]0" ], "0$1" ], [ , "(\\d{2})(\\d{5})", "$1 $2", [ "[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]" ], "(0$1)" ], [ , "(\\d{3})(\\d{4,5})", "$1 $2", [ "2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85" ], "(0$1)" ], [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]" ], "(0$1)" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "87" ] ], [ , "(\\d{3})(\\d{6})", "$1 $2", [ "9(?:[5-79]|8[1-6])" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[2-8]" ], "0$1" ], [ , "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", [ "9" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "[2-9]0\\d{4,7}", , , , "201234567", , , [ 6, 7, 8, 9 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                QA: [ , [ , , "[2-7]\\d{7}|800\\d{4}(?:\\d{2})?|2\\d{6}", , , , , , , [ 7, 8, 9 ] ], [ , , "4141\\d{4}|(?:23|4[04])\\d{6}", , , , "44123456", , , [ 8 ] ], [ , , "(?:2[89]|[35-7]\\d)\\d{6}", , , , "33123456", , , [ 8 ] ], [ , , "800\\d{4}(?:\\d{2})?", , , , "8001234", , , [ 7, 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "QA", 974, "00", , , , , , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "2[126]|8" ] ], [ , "(\\d{4})(\\d{4})", "$1 $2", [ "[2-7]" ] ] ], , [ , , "2(?:[12]\\d|61)\\d{4}", , , , "2123456", , , [ 7 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                RE: [ , [ , , "9769\\d{5}|(?:26|[68]\\d)\\d{7}", , , , , , , [ 9 ] ], [ , , "26(?:2\\d\\d|30[0-5])\\d{4}", , , , "262161234" ], [ , , "(?:69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|6[0-6]|7[0-27]|8[0-8]|9[0-479]))|9769\\d)\\d{4}", , , , "692123456" ], [ , , "80\\d{7}", , , , "801234567" ], [ , , "89[1-37-9]\\d{6}", , , , "891123456" ], [ , , "8(?:1[019]|2[0156]|84|90)\\d{6}", , , , "810123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "RE", 262, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[2689]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], 1, "26[23]|69|[89]", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                RO: [ , [ , , "(?:[2378]\\d|90)\\d{7}|[23]\\d{5}", , , , , , , [ 6, 9 ] ], [ , , "[23][13-6]\\d{7}|(?:2(?:19\\d|[3-6]\\d9)|31\\d\\d)\\d\\d", , , , "211234567" ], [ , , "7020\\d{5}|7(?:0[013-9]|1[0-3]|[2-7]\\d|8[03-8]|9[019])\\d{6}", , , , "712034567", , , [ 9 ] ], [ , , "800\\d{6}", , , , "800123456", , , [ 9 ] ], [ , , "90[0136]\\d{6}", , , , "900123456", , , [ 9 ] ], [ , , "801\\d{6}", , , , "801123456", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "RO", 40, "00", "0", " int ", , "0", , , , [ [ , "(\\d{3})(\\d{3})", "$1 $2", [ "2[3-6]", "2[3-6]\\d9" ], "0$1" ], [ , "(\\d{2})(\\d{4})", "$1 $2", [ "219|31" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[23]1" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[237-9]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "(?:37\\d|80[578])\\d{6}", , , , "372123456", , , [ 9 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                RS: [ , [ , , "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", , , , , , , [ 6, 7, 8, 9, 10, 11, 12 ], [ 4, 5 ] ], [ , , "(?:11[1-9]\\d|(?:2[389]|39)(?:0[2-9]|[2-9]\\d))\\d{3,8}|(?:1[02-9]|2[0-24-7]|3[0-8])[2-9]\\d{4,9}", , , , "10234567", , , [ 7, 8, 9, 10, 11, 12 ], [ 4, 5, 6 ] ], [ , , "6(?:[0-689]|7\\d)\\d{6,7}", , , , "601234567", , , [ 8, 9, 10 ] ], [ , , "800\\d{3,9}", , , , "80012345" ], [ , , "(?:78\\d|90[0169])\\d{3,7}", , , , "90012345", , , [ 6, 7, 8, 9, 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "RS", 381, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{3,9})", "$1 $2", [ "(?:2[389]|39)0|[7-9]" ], "0$1" ], [ , "(\\d{2})(\\d{5,10})", "$1 $2", [ "[1-36]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "7[06]\\d{4,10}", , , , "700123456" ], , , [ , , , , , , , , , [ -1 ] ] ],
                RU: [ , [ , , "8\\d{13}|[347-9]\\d{9}", , , , , , , [ 10, 14 ], [ 7 ] ], [ , , "(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}", , , , "3011234567", , , [ 10 ], [ 7 ] ], [ , , "9\\d{9}", , , , "9123456789", , , [ 10 ] ], [ , , "8(?:0[04]|108\\d{3})\\d{7}", , , , "8001234567" ], [ , , "80[39]\\d{7}", , , , "8091234567", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "808\\d{7}", , , , "8081234567", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], "RU", 7, "810", "8", , , "8", , "8~10", , [ [ , "(\\d{3})(\\d{2})(\\d{2})", "$1-$2-$3", [ "[0-79]" ] ], [ , "(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2" ], "8 ($1)", , 1 ], [ , "(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]" ], "8 ($1)", , 1 ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "7" ], "8 ($1)", , 1 ], [ , "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", [ "[349]|8(?:[02-7]|1[1-8])" ], "8 ($1)", , 1 ], [ , "(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", [ "8" ], "8 ($1)" ] ], [ [ , "(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2" ], "8 ($1)", , 1 ], [ , "(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]" ], "8 ($1)", , 1 ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "7" ], "8 ($1)", , 1 ], [ , "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", [ "[349]|8(?:[02-7]|1[1-8])" ], "8 ($1)", , 1 ], [ , "(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", [ "8" ], "8 ($1)" ] ], [ , , , , , , , , , [ -1 ] ], 1, "3[04-689]|[489]", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                RW: [ , [ , , "(?:06|[27]\\d\\d|[89]00)\\d{6}", , , , , , , [ 8, 9 ] ], [ , , "(?:06|2[23568]\\d)\\d{6}", , , , "250123456" ], [ , , "7[2389]\\d{7}", , , , "720123456", , , [ 9 ] ], [ , , "800\\d{6}", , , , "800123456", , , [ 9 ] ], [ , , "900\\d{6}", , , , "900123456", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "RW", 250, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "0" ] ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[7-9]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "2" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                SA: [ , [ , , "92\\d{7}|(?:[15]|8\\d)\\d{8}", , , , , , , [ 9, 10 ], [ 7 ] ], [ , , "1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}", , , , "112345678", , , [ 9 ], [ 7 ] ], [ , , "579[01]\\d{5}|5(?:[013-689]\\d|7[0-35-8])\\d{6}", , , , "512345678", , , [ 9 ] ], [ , , "800\\d{7}", , , , "8001234567", , , [ 10 ] ], [ , , "925\\d{6}", , , , "925012345", , , [ 9 ] ], [ , , "920\\d{6}", , , , "920012345", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "SA", 966, "00", "0", , , "0", , , , [ [ , "(\\d{4})(\\d{5})", "$1 $2", [ "9" ] ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "1" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "5" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "81" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "8" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "811\\d{7}", , , , "8110123456", , , [ 10 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                SB: [ , [ , , "(?:[1-6]|[7-9]\\d\\d)\\d{4}", , , , , , , [ 5, 7 ] ], [ , , "(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}", , , , "40123", , , [ 5 ] ], [ , , "48\\d{3}|(?:(?:7[1-9]|8[4-9])\\d|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8]))\\d{4}", , , , "7421234" ], [ , , "1[38]\\d{3}", , , , "18123", , , [ 5 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "5[12]\\d{3}", , , , "51123", , , [ 5 ] ], "SB", 677, "0[01]", , , , , , , , [ [ , "(\\d{2})(\\d{5})", "$1 $2", [ "7|8[4-9]|9(?:[1-8]|9[0-8])" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                SC: [ , [ , , "800\\d{4}|(?:[249]\\d|64)\\d{5}", , , , , , , [ 7 ] ], [ , , "4[2-46]\\d{5}", , , , "4217123" ], [ , , "2[125-8]\\d{5}", , , , "2510123" ], [ , , "800[08]\\d{3}", , , , "8000000" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "971\\d{4}|(?:64|95)\\d{5}", , , , "6412345" ], "SC", 248, "010|0[0-2]", , , , , , "00", , [ [ , "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", [ "[246]|9[57]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                SD: [ , [ , , "[19]\\d{8}", , , , , , , [ 9 ] ], [ , , "1(?:5\\d|8[35-7])\\d{6}", , , , "153123456" ], [ , , "(?:1[0-2]|9[0-3569])\\d{7}", , , , "911231234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "SD", 249, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[19]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                SE: [ , [ , , "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", , , , , , , [ 6, 7, 8, 9, 10, 12 ] ], [ , , "(?:(?:[12][136]|3[356]|4[0246]|6[03]|8\\d)\\d|90[1-9])\\d{4,6}|(?:1(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)|2(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|4(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])|6(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])|9(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8]))\\d{5,6}", , , , "8123456", , , [ 7, 8, 9 ] ], [ , , "7[02369]\\d{7}", , , , "701234567", , , [ 9 ] ], [ , , "20\\d{4,7}", , , , "20123456", , , [ 6, 7, 8, 9 ] ], [ , , "649\\d{6}|99[1-59]\\d{4}(?:\\d{3})?|9(?:00|39|44)[1-8]\\d{3,6}", , , , "9001234567", , , [ 7, 8, 9, 10 ] ], [ , , "77[0-7]\\d{6}", , , , "771234567", , , [ 9 ] ], [ , , "75[1-8]\\d{6}", , , , "751234567", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], "SE", 46, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", [ "20" ], "0$1" ], [ , "(\\d{3})(\\d{4})", "$1-$2", [ "9(?:00|39|44|9)" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", [ "[12][136]|3[356]|4[0246]|6[03]|90[1-9]" ], "0$1" ], [ , "(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", [ "8" ], "0$1" ], [ , "(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", [ "1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])" ], "0$1" ], [ , "(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", [ "9(?:00|39|44)" ], "0$1" ], [ , "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", [ "1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", [ "10|7" ], "0$1" ], [ , "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", [ "8" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", [ "[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", [ "9" ], "0$1" ], [ , "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", [ "[26]" ], "0$1" ] ], [ [ , "(\\d{2})(\\d{2,3})(\\d{2})", "$1 $2 $3", [ "20" ] ], [ , "(\\d{3})(\\d{4})", "$1 $2", [ "9(?:00|39|44|9)" ] ], [ , "(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3", [ "[12][136]|3[356]|4[0246]|6[03]|90[1-9]" ] ], [ , "(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "8" ] ], [ , "(\\d{3})(\\d{2,3})(\\d{2})", "$1 $2 $3", [ "1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])" ] ], [ , "(\\d{3})(\\d{2,3})(\\d{3})", "$1 $2 $3", [ "9(?:00|39|44)" ] ], [ , "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]" ] ], [ , "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "10|7" ] ], [ , "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", [ "8" ] ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])" ] ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", [ "9" ] ], [ , "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", [ "[26]" ] ] ], [ , , "74[02-9]\\d{6}", , , , "740123456", , , [ 9 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "10[1-8]\\d{6}", , , , "102345678", , , [ 9 ] ], , , [ , , "(?:25[245]|67[3-68])\\d{9}", , , , "254123456789", , , [ 12 ] ] ],
                SG: [ , [ , , "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", , , , , , , [ 8, 10, 11 ] ], [ , , "662[0-24-9]\\d{4}|6(?:[0-578]\\d|6[013-57-9]|9[0-35-9])\\d{5}", , , , "61234567", , , [ 8 ] ], [ , , "8(?:051|95[0-2])\\d{4}|(?:8(?:0[1-4]|[1-8]\\d|9[0-4])|9[0-8]\\d)\\d{5}", , , , "81234567", , , [ 8 ] ], [ , , "(?:18|8)00\\d{7}", , , , "18001234567", , , [ 10, 11 ] ], [ , , "1900\\d{7}", , , , "19001234567", , , [ 11 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "(?:3[12]\\d|666)\\d{5}", , , , "31234567", , , [ 8 ] ], "SG", 65, "0[0-3]\\d", , , , , , , , [ [ , "(\\d{4,5})", "$1", [ "1[013-9]|77", "1(?:[013-8]|9(?:0[1-9]|[1-9]))|77" ] ], [ , "(\\d{4})(\\d{4})", "$1 $2", [ "[369]|8(?:0[1-5]|[1-9])" ] ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "8" ] ], [ , "(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", [ "7" ] ], [ , "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", [ "1" ] ] ], [ [ , "(\\d{4})(\\d{4})", "$1 $2", [ "[369]|8(?:0[1-5]|[1-9])" ] ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "8" ] ], [ , "(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", [ "7" ] ], [ , "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", [ "1" ] ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "7000\\d{7}", , , , "70001234567", , , [ 11 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                SH: [ , [ , , "(?:[256]\\d|8)\\d{3}", , , , , , , [ 4, 5 ] ], [ , , "2(?:[0-57-9]\\d|6[4-9])\\d\\d", , , , "22158" ], [ , , "[56]\\d{4}", , , , "51234", , , [ 5 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "262\\d\\d", , , , "26212", , , [ 5 ] ], "SH", 290, "00", , , , , , , , , , [ , , , , , , , , , [ -1 ] ], 1, "[256]", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                SI: [ , [ , , "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", , , , , , , [ 5, 6, 7, 8 ] ], [ , , "(?:[1-357][2-8]|4[24-8])\\d{6}", , , , "12345678", , , [ 8 ], [ 7 ] ], [ , , "65(?:1\\d|55|[67]0)\\d{4}|(?:[37][01]|4[0139]|51|6[489])\\d{6}", , , , "31234567", , , [ 8 ] ], [ , , "80\\d{4,6}", , , , "80123456", , , [ 6, 7, 8 ] ], [ , , "89[1-3]\\d{2,5}|90\\d{4,6}", , , , "90123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "(?:59\\d\\d|8(?:1(?:[67]\\d|8[0-589])|2(?:0\\d|2[0-37-9]|8[0-2489])|3[389]\\d))\\d{4}", , , , "59012345", , , [ 8 ] ], "SI", 386, "00|10(?:22|66|88|99)", "0", , , "0", , "00", , [ [ , "(\\d{2})(\\d{3,6})", "$1 $2", [ "8[09]|9" ], "0$1" ], [ , "(\\d{3})(\\d{5})", "$1 $2", [ "59|8" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[37][01]|4[0139]|51|6" ], "0$1" ], [ , "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[1-57]" ], "(0$1)" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                SJ: [ , [ , , "0\\d{4}|(?:[489]\\d|[57]9)\\d{6}", , , , , , , [ 5, 8 ] ], [ , , "79\\d{6}", , , , "79123456", , , [ 8 ] ], [ , , "(?:4[015-8]|59|9\\d)\\d{6}", , , , "41234567", , , [ 8 ] ], [ , , "80[01]\\d{5}", , , , "80012345", , , [ 8 ] ], [ , , "82[09]\\d{5}", , , , "82012345", , , [ 8 ] ], [ , , "810(?:0[0-6]|[2-8]\\d)\\d{3}", , , , "81021234", , , [ 8 ] ], [ , , "880\\d{5}", , , , "88012345", , , [ 8 ] ], [ , , "85[0-5]\\d{5}", , , , "85012345", , , [ 8 ] ], "SJ", 47, "00", , , , , , , , , , [ , , , , , , , , , [ -1 ] ], , "79", [ , , , , , , , , , [ -1 ] ], [ , , "(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}", , , , "02000" ], , , [ , , "81[23]\\d{5}", , , , "81212345", , , [ 8 ] ] ],
                SK: [ , [ , , "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", , , , , , , [ 6, 7, 9 ] ], [ , , "(?:2(?:16|[2-9]\\d{3})|(?:(?:[3-5][1-8]\\d|819)\\d|601[1-5])\\d)\\d{4}|(?:2|[3-5][1-8])1[67]\\d{3}|[3-5][1-8]16\\d\\d", , , , "221234567" ], [ , , "909[1-9]\\d{5}|9(?:0[1-8]|1[0-24-9]|4[03-57-9]|5\\d)\\d{6}", , , , "912123456", , , [ 9 ] ], [ , , "800\\d{6}", , , , "800123456", , , [ 9 ] ], [ , , "9(?:00|[78]\\d)\\d{6}", , , , "900123456", , , [ 9 ] ], [ , , "8[5-9]\\d{7}", , , , "850123456", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "6(?:02|5[0-4]|9[0-6])\\d{6}", , , , "690123456", , , [ 9 ] ], "SK", 421, "00", "0", , , "0", , , , [ [ , "(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", [ "21" ], "0$1" ], [ , "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", [ "[3-5][1-8]1", "[3-5][1-8]1[67]" ], "0$1" ], [ , "(\\d{4})(\\d{3})", "$1 $2", [ "909", "9090" ], "0$1" ], [ , "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", [ "2" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[689]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", [ "[3-5]" ], "0$1" ] ], [ [ , "(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", [ "21" ], "0$1" ], [ , "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", [ "[3-5][1-8]1", "[3-5][1-8]1[67]" ], "0$1" ], [ , "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", [ "2" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[689]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", [ "[3-5]" ], "0$1" ] ], [ , , "9090\\d{3}", , , , "9090123", , , [ 7 ] ], , , [ , , "9090\\d{3}|(?:602|8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}", , , , , , , [ 7, 9 ] ], [ , , "96\\d{7}", , , , "961234567", , , [ 9 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                SL: [ , [ , , "(?:[237-9]\\d|66)\\d{6}", , , , , , , [ 8 ], [ 6 ] ], [ , , "22[2-4][2-9]\\d{4}", , , , "22221234", , , , [ 6 ] ], [ , , "(?:25|3[0-5]|66|7[2-9]|8[08]|9[09])\\d{6}", , , , "25123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "SL", 232, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{6})", "$1 $2", [ "[236-9]" ], "(0$1)" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                SM: [ , [ , , "(?:0549|[5-7]\\d)\\d{6}", , , , , , , [ 8, 10 ], [ 6 ] ], [ , , "0549(?:8[0157-9]|9\\d)\\d{4}", , , , "0549886377", , , [ 10 ], [ 6 ] ], [ , , "6[16]\\d{6}", , , , "66661212", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "7[178]\\d{6}", , , , "71123456", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "5[158]\\d{6}", , , , "58001110", , , [ 8 ] ], "SM", 378, "00", , , , "([89]\\d{5})$", "0549$1", , , [ [ , "(\\d{6})", "$1", [ "[89]" ] ], [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[5-7]" ] ], [ , "(\\d{4})(\\d{6})", "$1 $2", [ "0" ] ] ], [ [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[5-7]" ] ], [ , "(\\d{4})(\\d{6})", "$1 $2", [ "0" ] ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                SN: [ , [ , , "(?:[378]\\d|93)\\d{7}", , , , , , , [ 9 ] ], [ , , "3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}", , , , "301012345" ], [ , , "75(?:01|[38]3)\\d{5}|7(?:[06-8]\\d|21|5[4-7]|90)\\d{6}", , , , "701234567" ], [ , , "800\\d{6}", , , , "800123456" ], [ , , "88[4689]\\d{6}", , , , "884123456" ], [ , , "81[02468]\\d{6}", , , , "810123456" ], [ , , , , , , , , , [ -1 ] ], [ , , "(?:3(?:392|9[01]\\d)\\d|93(?:3[13]0|929))\\d{4}", , , , "933301234" ], "SN", 221, "00", , , , , , , , [ [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "8" ] ], [ , "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[379]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                SO: [ , [ , , "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", , , , , , , [ 6, 7, 8, 9 ] ], [ , , "(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|5[57-9])\\d{5}|(?:[134]\\d|8[125])\\d{4}", , , , "4012345", , , [ 6, 7 ] ], [ , , "(?:(?:15|(?:3[59]|4[89]|79|8[08])\\d|6(?:0[5-7]|[1-9]\\d)|9(?:0\\d|[2-9]))\\d|2(?:4\\d|8))\\d{5}|(?:6\\d|7[1-9])\\d{6}", , , , "71123456", , , [ 7, 8, 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "SO", 252, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{4})", "$1 $2", [ "8[125]" ] ], [ , "(\\d{6})", "$1", [ "[134]" ] ], [ , "(\\d)(\\d{6})", "$1 $2", [ "[15]|2[0-79]|3[0-46-8]|4[0-7]" ] ], [ , "(\\d)(\\d{7})", "$1 $2", [ "24|[67]" ] ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[3478]|64|90" ] ], [ , "(\\d{2})(\\d{5,7})", "$1 $2", [ "1|28|6(?:0[5-7]|[1-35-9])|9[2-9]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                SR: [ , [ , , "(?:[2-5]|68|[78]\\d)\\d{5}", , , , , , , [ 6, 7 ] ], [ , , "(?:2[1-3]|3[0-7]|(?:4|68)\\d|5[2-58])\\d{4}", , , , "211234" ], [ , , "(?:7[124-7]|8[124-9])\\d{5}", , , , "7412345", , , [ 7 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "56\\d{4}", , , , "561234", , , [ 6 ] ], "SR", 597, "00", , , , , , , , [ [ , "(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", [ "56" ] ], [ , "(\\d{3})(\\d{3})", "$1-$2", [ "[2-5]" ] ], [ , "(\\d{3})(\\d{4})", "$1-$2", [ "[6-8]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                SS: [ , [ , , "[19]\\d{8}", , , , , , , [ 9 ] ], [ , , "1[89]\\d{7}", , , , "181234567" ], [ , , "(?:12|9[1257-9])\\d{7}", , , , "977123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "SS", 211, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[19]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                ST: [ , [ , , "(?:22|9\\d)\\d{5}", , , , , , , [ 7 ] ], [ , , "22\\d{5}", , , , "2221234" ], [ , , "900[5-9]\\d{3}|9(?:0[1-9]|[89]\\d)\\d{4}", , , , "9812345" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "ST", 239, "00", , , , , , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[29]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                SV: [ , [ , , "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", , , , , , , [ 7, 8, 11 ] ], [ , , "2(?:[1-6]\\d{3}|[79]90[034]|890[0245])\\d{3}", , , , "21234567", , , [ 8 ] ], [ , , "66(?:[02-9]\\d\\d|1(?:[02-9]\\d|16))\\d{3}|(?:6[0-57-9]|7\\d)\\d{6}", , , , "70123456", , , [ 8 ] ], [ , , "800\\d{4}(?:\\d{4})?", , , , "8001234", , , [ 7, 11 ] ], [ , , "900\\d{4}(?:\\d{4})?", , , , "9001234", , , [ 7, 11 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "SV", 503, "00", , , , , , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[89]" ] ], [ , "(\\d{4})(\\d{4})", "$1 $2", [ "[267]" ] ], [ , "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", [ "[89]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                SX: [ , [ , , "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "7215(?:4[2-8]|8[239]|9[056])\\d{4}", , , , "7215425678", , , , [ 7 ] ], [ , , "7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}", , , , "7215205678", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456" ], [ , , "900[2-9]\\d{6}", , , , "9002123456" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "SX", 1, "011", "1", , , "1|(5\\d{6})$", "721$1", , , , , [ , , , , , , , , , [ -1 ] ], , "721", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                SY: [ , [ , , "[1-39]\\d{8}|[1-5]\\d{7}", , , , , , , [ 8, 9 ], [ 6, 7 ] ], [ , , "21\\d{6,7}|(?:1(?:[14]\\d|[2356])|2[235]|3(?:[13]\\d|4)|4[134]|5[1-3])\\d{6}", , , , "112345678", , , , [ 6, 7 ] ], [ , , "9[1-689]\\d{7}", , , , "944567890", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "SY", 963, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "[1-5]" ], "0$1", , 1 ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "9" ], "0$1", , 1 ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                SZ: [ , [ , , "0800\\d{4}|(?:[237]\\d|900)\\d{6}", , , , , , , [ 8, 9 ] ], [ , , "[23][2-5]\\d{6}", , , , "22171234", , , [ 8 ] ], [ , , "7[6-9]\\d{6}", , , , "76123456", , , [ 8 ] ], [ , , "0800\\d{4}", , , , "08001234", , , [ 8 ] ], [ , , "900\\d{6}", , , , "900012345", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "70\\d{6}", , , , "70012345", , , [ 8 ] ], "SZ", 268, "00", , , , , , , , [ [ , "(\\d{4})(\\d{4})", "$1 $2", [ "[0237]" ] ], [ , "(\\d{5})(\\d{4})", "$1 $2", [ "9" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , "0800\\d{4}", , , , , , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                TA: [ , [ , , "8\\d{3}", , , , , , , [ 4 ] ], [ , , "8\\d{3}", , , , "8999" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "TA", 290, "00", , , , , , , , , , [ , , , , , , , , , [ -1 ] ], , "8", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                TC: [ , [ , , "(?:[58]\\d\\d|649|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "649(?:266|712|9(?:4\\d|50))\\d{4}", , , , "6497121234", , , , [ 7 ] ], [ , , "649(?:2(?:3[129]|4[1-79])|3\\d\\d|4[34][1-3])\\d{4}", , , , "6492311234", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678" ], [ , , "900[2-9]\\d{6}", , , , "9002345678" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , "649(?:71[01]|966)\\d{4}", , , , "6497101234", , , , [ 7 ] ], "TC", 1, "011", "1", , , "1|([2-479]\\d{6})$", "649$1", , , , , [ , , , , , , , , , [ -1 ] ], , "649", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                TD: [ , [ , , "(?:22|[69]\\d|77)\\d{6}", , , , , , , [ 8 ] ], [ , , "22(?:[37-9]0|5[0-5]|6[89])\\d{4}", , , , "22501234" ], [ , , "(?:6[023568]|77|9\\d)\\d{6}", , , , "63012345" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "TD", 235, "00|16", , , , , , "00", , [ [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[2679]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                TG: [ , [ , , "[279]\\d{7}", , , , , , , [ 8 ] ], [ , , "2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\\d{5}", , , , "22212345" ], [ , , "(?:7[09]|9[0-36-9])\\d{6}", , , , "90112345" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "TG", 228, "00", , , , , , , , [ [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[279]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                TH: [ , [ , , "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", , , , , , , [ 8, 9, 10, 13 ] ], [ , , "(?:1[0689]|2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}", , , , "21234567", , , [ 8 ] ], [ , , "671[0-8]\\d{5}|(?:14|6[1-6]|[89]\\d)\\d{7}", , , , "812345678", , , [ 9 ] ], [ , , "(?:001800\\d|1800)\\d{6}", , , , "1800123456", , , [ 10, 13 ] ], [ , , "1900\\d{6}", , , , "1900123456", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "6[08]\\d{7}", , , , "601234567", , , [ 9 ] ], "TH", 66, "00[1-9]", "0", , , "0", , , , [ [ , "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", [ "2" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "[13-9]" ], "0$1" ], [ , "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", [ "1" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                TJ: [ , [ , , "(?:00|[1-57-9]\\d)\\d{7}", , , , , , , [ 9 ], [ 3, 5, 6, 7 ] ], [ , , "(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}", , , , "372123456", , , , [ 3, 5, 6, 7 ] ], [ , , "41[18]\\d{6}|(?:[034]0|[17][017]|2[02]|5[05]|8[08]|9\\d)\\d{7}", , , , "917123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "TJ", 992, "810", , , , , , "8~10", , [ [ , "(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", [ "331", "3317" ] ], [ , "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", [ "[34]7|91[78]" ] ], [ , "(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", [ "3[1-5]" ] ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[0-57-9]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                TK: [ , [ , , "[2-47]\\d{3,6}", , , , , , , [ 4, 5, 6, 7 ] ], [ , , "(?:2[2-4]|[34]\\d)\\d{2,5}", , , , "3101" ], [ , , "7[2-4]\\d{2,5}", , , , "7290" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "TK", 690, "00", , , , , , , , , , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                TL: [ , [ , , "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", , , , , , , [ 7, 8 ] ], [ , , "(?:2[1-5]|3[1-9]|4[1-4])\\d{5}", , , , "2112345", , , [ 7 ] ], [ , , "7[2-8]\\d{6}", , , , "77212345", , , [ 8 ] ], [ , , "80\\d{5}", , , , "8012345", , , [ 7 ] ], [ , , "90\\d{5}", , , , "9012345", , , [ 7 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "70\\d{5}", , , , "7012345", , , [ 7 ] ], [ , , , , , , , , , [ -1 ] ], "TL", 670, "00", , , , , , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[2-489]|70" ] ], [ , "(\\d{4})(\\d{4})", "$1 $2", [ "7" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                TM: [ , [ , , "[1-6]\\d{7}", , , , , , , [ 8 ] ], [ , , "(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}", , , , "12345678" ], [ , , "6\\d{7}", , , , "66123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "TM", 993, "810", "8", , , "8", , "8~10", , [ [ , "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", [ "12" ], "(8 $1)" ], [ , "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", [ "[1-5]" ], "(8 $1)" ], [ , "(\\d{2})(\\d{6})", "$1 $2", [ "6" ], "8 $1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                TN: [ , [ , , "[2-57-9]\\d{7}", , , , , , , [ 8 ] ], [ , , "81200\\d{3}|(?:3[0-2]|7\\d)\\d{6}", , , , "30010123" ], [ , , "3(?:001|[12]40)\\d{4}|(?:(?:[259]\\d|4[0-7])\\d|3(?:1[1-35]|6[0-4]|91))\\d{5}", , , , "20123456" ], [ , , "8010\\d{4}", , , , "80101234" ], [ , , "88\\d{6}", , , , "88123456" ], [ , , "8[12]10\\d{4}", , , , "81101234" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "TN", 216, "00", , , , , , , , [ [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[2-57-9]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                TO: [ , [ , , "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", , , , , , , [ 5, 7 ] ], [ , , "(?:2\\d|3[0-8]|4[0-4]|50|6[09]|7[0-24-69]|8[05])\\d{3}", , , , "20123", , , [ 5 ] ], [ , , "(?:55[4-6]|6(?:[09]\\d|3[02]|8[15-9])|(?:7\\d|8[46-9])\\d|999)\\d{4}", , , , "7715123", , , [ 7 ] ], [ , , "0800\\d{3}", , , , "0800222", , , [ 7 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "55[0-37-9]\\d{4}", , , , "5510123", , , [ 7 ] ], "TO", 676, "00", , , , , , , , [ [ , "(\\d{2})(\\d{3})", "$1-$2", [ "[2-4]|50|6[09]|7[0-24-69]|8[05]" ] ], [ , "(\\d{4})(\\d{3})", "$1 $2", [ "0" ] ], [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[5-9]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                TR: [ , [ , , "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", , , , , , , [ 7, 10, 12, 13 ] ], [ , , "(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}", , , , "2123456789", , , [ 10 ] ], [ , , "56161\\d{5}|5(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d{7}", , , , "5012345678", , , [ 10 ] ], [ , , "8(?:00\\d{7}(?:\\d{2,3})?|11\\d{7})", , , , "8001234567", , , [ 10, 12, 13 ] ], [ , , "(?:8[89]8|900)\\d{7}", , , , "9001234567", , , [ 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "592(?:21[12]|461)\\d{4}", , , , "5922121234", , , [ 10 ] ], [ , , "850\\d{7}", , , , "8500123456", , , [ 10 ] ], "TR", 90, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d)(\\d{3})", "$1 $2 $3", [ "444" ], , , 1 ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "512|8[01589]|90" ], "0$1", , 1 ], [ , "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)" ], "0$1", , 1 ], [ , "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[24][1-8]|3[1-9]" ], "(0$1)", , 1 ], [ , "(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", [ "80" ], "0$1", , 1 ] ], [ [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "512|8[01589]|90" ], "0$1", , 1 ], [ , "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "5(?:[0-59]|61)", "5(?:[0-59]|616)", "5(?:[0-59]|6161)" ], "0$1", , 1 ], [ , "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[24][1-8]|3[1-9]" ], "(0$1)", , 1 ], [ , "(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", [ "80" ], "0$1", , 1 ] ], [ , , "512\\d{7}", , , , "5123456789", , , [ 10 ] ], , , [ , , "(?:444|811\\d{3})\\d{4}", , , , , , , [ 7, 10 ] ], [ , , "444\\d{4}", , , , "4441444", , , [ 7 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                TT: [ , [ , , "(?:[58]\\d\\d|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "868(?:2(?:0[13]|1[89]|[23]\\d|4[0-2])|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}", , , , "8682211234", , , , [ 7 ] ], [ , , "868(?:(?:2[5-9]|3\\d)\\d|4(?:3[0-6]|[6-9]\\d)|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}", , , , "8682911234", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678" ], [ , , "900[2-9]\\d{6}", , , , "9002345678" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "TT", 1, "011", "1", , , "1|([2-46-8]\\d{6})$", "868$1", , , , , [ , , , , , , , , , [ -1 ] ], , "868", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , "868619\\d{4}", , , , "8686191234", , , , [ 7 ] ] ],
                TV: [ , [ , , "(?:2|7\\d\\d|90)\\d{4}", , , , , , , [ 5, 6, 7 ] ], [ , , "2[02-9]\\d{3}", , , , "20123", , , [ 5 ] ], [ , , "(?:7[01]\\d|90)\\d{4}", , , , "901234", , , [ 6, 7 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "TV", 688, "00", , , , , , , , [ [ , "(\\d{2})(\\d{3})", "$1 $2", [ "2" ] ], [ , "(\\d{2})(\\d{4})", "$1 $2", [ "90" ] ], [ , "(\\d{2})(\\d{5})", "$1 $2", [ "7" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                TW: [ , [ , , "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", , , , , , , [ 7, 8, 9, 10, 11 ] ], [ , , "(?:2[2-8]\\d|370|55[01]|7[1-9])\\d{6}|4(?:(?:0(?:0[1-9]|[2-48]\\d)|1[023]\\d)\\d{4,5}|(?:[239]\\d\\d|4(?:0[56]|12|49))\\d{5})|6(?:[01]\\d{7}|4(?:0[56]|12|24|4[09])\\d{4,5})|8(?:(?:2(?:3\\d|4[0-269]|[578]0|66)|36[24-9]|90\\d\\d)\\d{4}|4(?:0[56]|12|24|4[09])\\d{4,5})|(?:2(?:2(?:0\\d\\d|4(?:0[68]|[249]0|3[0-467]|5[0-25-9]|6[0235689]))|(?:3(?:[09]\\d|1[0-4])|(?:4\\d|5[0-49]|6[0-29]|7[0-5])\\d)\\d)|(?:(?:3[2-9]|5[2-8]|6[0-35-79]|8[7-9])\\d\\d|4(?:2(?:[089]\\d|7[1-9])|(?:3[0-4]|[78]\\d|9[01])\\d))\\d)\\d{3}", , , , "221234567", , , [ 8, 9 ] ], [ , , "(?:40001[0-2]|9[0-8]\\d{4})\\d{3}", , , , "912345678", , , [ 9 ] ], [ , , "80[0-79]\\d{6}|800\\d{5}", , , , "800123456", , , [ 8, 9 ] ], [ , , "20(?:[013-9]\\d\\d|2)\\d{4}", , , , "203123456", , , [ 7, 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "99\\d{7}", , , , "990123456", , , [ 9 ] ], [ , , "7010(?:[0-2679]\\d|3[0-7]|8[0-5])\\d{5}|70\\d{8}", , , , "7012345678", , , [ 10, 11 ] ], "TW", 886, "0(?:0[25-79]|19)", "0", "#", , "0", , , , [ [ , "(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", [ "202" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "[258]0" ], "0$1" ], [ , "(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", [ "[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[49]" ], "0$1" ], [ , "(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", [ "7" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "50[0-46-9]\\d{6}", , , , "500123456", , , [ 9 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                TZ: [ , [ , , "(?:[26-8]\\d|41|90)\\d{7}", , , , , , , [ 9 ] ], [ , , "2[2-8]\\d{7}", , , , "222345678" ], [ , , "77[2-9]\\d{6}|(?:6[1-9]|7[1-689])\\d{7}", , , , "621234567" ], [ , , "80[08]\\d{6}", , , , "800123456" ], [ , , "90\\d{7}", , , , "900123456" ], [ , , "8(?:40|6[01])\\d{6}", , , , "840123456" ], [ , , , , , , , , , [ -1 ] ], [ , , "41\\d{7}", , , , "412345678" ], "TZ", 255, "00[056]", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", [ "[89]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[24]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[67]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , "(?:8(?:[04]0|6[01])|90\\d)\\d{6}" ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                UA: [ , [ , , "[89]\\d{9}|[3-9]\\d{8}", , , , , , , [ 9, 10 ], [ 5, 6, 7 ] ], [ , , "(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}", , , , "311234567", , , [ 9 ], [ 5, 6, 7 ] ], [ , , "(?:50|6[36-8]|7[1-3]|9[1-9])\\d{7}", , , , "501234567", , , [ 9 ] ], [ , , "800[1-8]\\d{5,6}", , , , "800123456" ], [ , , "900[239]\\d{5,6}", , , , "900212345" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "89[1-579]\\d{6}", , , , "891234567", , , [ 9 ] ], "UA", 380, "00", "0", , , "0", , "0~0", , [ [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "4[45][0-5]|5(?:0|6[37])|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]", "4[45][0-5]|5(?:0|6(?:3[14-7]|7))|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]" ], "0$1" ], [ , "(\\d{4})(\\d{5})", "$1 $2", [ "[3-6]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "[89]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                UG: [ , [ , , "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", , , , , , , [ 9 ], [ 5, 6, 7 ] ], [ , , "20(?:(?:(?:24|81)0|30[67])\\d|6(?:00[0-2]|30[0-4]))\\d{3}|(?:20(?:[017]\\d|2[5-9]|32|5[0-4]|6[15-9])|[34]\\d{3})\\d{5}", , , , "312345678", , , , [ 5, 6, 7 ] ], [ , , "726[01]\\d{5}|7(?:[01578]\\d|20|36|[46][0-4]|9[89])\\d{6}", , , , "712345678" ], [ , , "800[1-3]\\d{5}", , , , "800123456" ], [ , , "90[1-3]\\d{6}", , , , "901123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "UG", 256, "00[057]", "0", , , "0", , , , [ [ , "(\\d{4})(\\d{5})", "$1 $2", [ "202", "2024" ], "0$1" ], [ , "(\\d{3})(\\d{6})", "$1 $2", [ "[27-9]|4(?:6[45]|[7-9])" ], "0$1" ], [ , "(\\d{2})(\\d{7})", "$1 $2", [ "[34]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                US: [ , [ , , "[2-9]\\d{9}", , , , , , , [ 10 ], [ 7 ] ], [ , , "5(?:05(?:[2-57-9]\\d\\d|6(?:[0-35-9]\\d|44))|82(?:2(?:0[0-3]|[268]2)|3(?:0[02]|22|33)|4(?:00|4[24]|65|82)|5(?:00|29|58|83)|6(?:00|66|82)|7(?:58|77)|8(?:00|42|88)|9(?:00|9[89])))\\d{4}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[0-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-289]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0157-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}", , , , "2015550123", , , , [ 7 ] ], [ , , "5(?:05(?:[2-57-9]\\d\\d|6(?:[0-35-9]\\d|44))|82(?:2(?:0[0-3]|[268]2)|3(?:0[02]|22|33)|4(?:00|4[24]|65|82)|5(?:00|29|58|83)|6(?:00|66|82)|7(?:58|77)|8(?:00|42|88)|9(?:00|9[89])))\\d{4}|(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[01356]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[0-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-289]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0157-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}", , , , "2015550123", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678" ], [ , , "900[2-9]\\d{6}", , , , "9002345678" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "US", 1, "011", "1", , , "1", , , 1, [ [ , "(\\d{3})(\\d{4})", "$1-$2", [ "[2-9]" ] ], [ , "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", [ "[2-9]" ], , , 1 ] ], [ [ , "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", [ "[2-9]" ] ] ], [ , , , , , , , , , [ -1 ] ], 1, , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                UY: [ , [ , , "4\\d{9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", , , , , , , [ 7, 8, 10 ] ], [ , , "(?:1(?:770|987)|(?:2\\d|4[2-7])\\d\\d)\\d{4}", , , , "21231234", , , [ 8 ], [ 7 ] ], [ , , "9[1-9]\\d{6}", , , , "94231234", , , [ 8 ] ], [ , , "(?:4\\d{5}|80[05])\\d{4}|405\\d{4}", , , , "8001234", , , [ 7, 10 ] ], [ , , "90[0-8]\\d{4}", , , , "9001234", , , [ 7 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "UY", 598, "0(?:0|1[3-9]\\d)", "0", " int. ", , "0", , "00", , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "405|8|90" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "9" ], "0$1" ], [ , "(\\d{4})(\\d{4})", "$1 $2", [ "[124]" ] ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "4" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                UZ: [ , [ , , "(?:33|55|[679]\\d|88)\\d{7}", , , , , , , [ 9 ] ], [ , , "(?:6(?:1(?:22|3[124]|4[1-4]|5[1-3578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d\\d|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[124-6]|9[135-8])|(?:1[12]|8\\d)\\d|2(?:22|3[13-57-9]|4[1-3579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}", , , , "669050123" ], [ , , "(?:(?:33|88|9[0-57-9])\\d{3}|55(?:50[013]|90\\d)|6(?:1(?:2(?:2[01]|98)|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:(?:11|7\\d)\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4]))|5(?:19[01]|2(?:27|9[26])|(?:30|59|7\\d)\\d)|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|(?:3[79]|9[0-3])\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79]))|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|3[01]|5\\d|7[0-4])|(?:5[67]|7\\d)\\d|6(?:2[0-26]|8\\d)))|7(?:[07]\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|(?:33|9[4-6])\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078]))|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0-27]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[02569]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07]))))\\d{4}", , , , "912345678" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "UZ", 998, "810", "8", , , "8", , "8~10", , [ [ , "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[35-9]" ], "8 $1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                VA: [ , [ , , "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", , , , , , , [ 6, 7, 8, 9, 10, 11, 12 ] ], [ , , "06698\\d{1,6}", , , , "0669812345", , , [ 6, 7, 8, 9, 10, 11 ] ], [ , , "3[1-9]\\d{8}|3[2-9]\\d{7}", , , , "3123456789", , , [ 9, 10 ] ], [ , , "80(?:0\\d{3}|3)\\d{3}", , , , "800123456", , , [ 6, 9 ] ], [ , , "(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", , , , "899123456", , , [ 6, 8, 9, 10 ] ], [ , , "84(?:[08]\\d{3}|[17])\\d{3}", , , , "848123456", , , [ 6, 9 ] ], [ , , "1(?:78\\d|99)\\d{6}", , , , "1781234567", , , [ 9, 10 ] ], [ , , "55\\d{8}", , , , "5512345678", , , [ 10 ] ], "VA", 39, "00", , , , , , , , , , [ , , , , , , , , , [ -1 ] ], , "06698", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , "3[2-8]\\d{9,10}", , , , "33101234501", , , [ 11, 12 ] ] ],
                VC: [ , [ , , "(?:[58]\\d\\d|784|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "784(?:266|3(?:6[6-9]|7\\d|8[0-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}", , , , "7842661234", , , , [ 7 ] ], [ , , "784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4])|720)\\d{4}", , , , "7844301234", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678" ], [ , , "900[2-9]\\d{6}", , , , "9002345678" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , "78451[0-2]\\d{4}", , , , "7845101234", , , , [ 7 ] ], "VC", 1, "011", "1", , , "1|([2-7]\\d{6})$", "784$1", , , , , [ , , , , , , , , , [ -1 ] ], , "784", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                VE: [ , [ , , "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", , , , , , , [ 10 ], [ 7 ] ], [ , , "(?:2(?:12|3[457-9]|[467]\\d|[58][1-9]|9[1-6])|[4-6]00)\\d{7}", , , , "2121234567", , , , [ 7 ] ], [ , , "4(?:1[24-8]|2[46])\\d{7}", , , , "4121234567" ], [ , , "800\\d{7}", , , , "8001234567" ], [ , , "90[01]\\d{7}", , , , "9001234567" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "VE", 58, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{7})", "$1-$2", [ "[24-689]" ], "0$1", "$CC $1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "501\\d{7}", , , , "5010123456", , , , [ 7 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                VG: [ , [ , , "(?:284|[58]\\d\\d|900)\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "284496[0-5]\\d{3}|284(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}", , , , "2842291234", , , , [ 7 ] ], [ , , "284496[6-9]\\d{3}|284(?:245|3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|99)|5(?:4[0-7]|68|9[69]))\\d{4}", , , , "2843001234", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678" ], [ , , "900[2-9]\\d{6}", , , , "9002345678" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "VG", 1, "011", "1", , , "1|([2-578]\\d{6})$", "284$1", , , , , [ , , , , , , , , , [ -1 ] ], , "284", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                VI: [ , [ , , "[58]\\d{9}|(?:34|90)0\\d{7}", , , , , , , [ 10 ], [ 7 ] ], [ , , "340(?:2(?:0[0-38]|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\\d)|884|998)\\d{4}", , , , "3406421234", , , , [ 7 ] ], [ , , "340(?:2(?:0[0-38]|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\\d)|884|998)\\d{4}", , , , "3406421234", , , , [ 7 ] ], [ , , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678" ], [ , , "900[2-9]\\d{6}", , , , "9002345678" ], [ , , , , , , , , , [ -1 ] ], [ , , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-7]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678" ], [ , , , , , , , , , [ -1 ] ], "VI", 1, "011", "1", , , "1|([2-9]\\d{6})$", "340$1", , 1, , , [ , , , , , , , , , [ -1 ] ], , "340", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                VN: [ , [ , , "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", , , , , , , [ 7, 8, 9, 10 ] ], [ , , "2(?:0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|8[2-79]|9[0-4679])\\d{7}", , , , "2101234567", , , [ 10 ] ], [ , , "(?:5(?:2[238]|59)|89[689]|99[013-9])\\d{6}|(?:3\\d|5[689]|7[06-9]|8[1-8]|9[0-8])\\d{7}", , , , "912345678", , , [ 9 ] ], [ , , "1800\\d{4,6}|12(?:0[13]|28)\\d{4}", , , , "1800123456", , , [ 8, 9, 10 ] ], [ , , "1900\\d{4,6}", , , , "1900123456", , , [ 8, 9, 10 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "672\\d{6}", , , , "672012345", , , [ 9 ] ], "VN", 84, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[17]99" ], "0$1", , 1 ], [ , "(\\d{2})(\\d{5})", "$1 $2", [ "80" ], "0$1", , 1 ], [ , "(\\d{3})(\\d{4,5})", "$1 $2", [ "69" ], "0$1", , 1 ], [ , "(\\d{4})(\\d{4,6})", "$1 $2", [ "1" ], , , 1 ], [ , "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[69]" ], "0$1", , 1 ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[3578]" ], "0$1", , 1 ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", [ "2[48]" ], "0$1", , 1 ], [ , "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", [ "2" ], "0$1", , 1 ] ], [ [ , "(\\d{2})(\\d{5})", "$1 $2", [ "80" ], "0$1", , 1 ], [ , "(\\d{4})(\\d{4,6})", "$1 $2", [ "1" ], , , 1 ], [ , "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "[69]" ], "0$1", , 1 ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[3578]" ], "0$1", , 1 ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", [ "2[48]" ], "0$1", , 1 ], [ , "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", [ "2" ], "0$1", , 1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , "[17]99\\d{4}|69\\d{5,6}", , , , , , , [ 7, 8 ] ], [ , , "(?:[17]99|80\\d)\\d{4}|69\\d{5,6}", , , , "1992000", , , [ 7, 8 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                VU: [ , [ , , "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", , , , , , , [ 5, 7 ] ], [ , , "(?:38[0-8]|48[4-9])\\d\\d|(?:2[02-9]|3[4-7]|88)\\d{3}", , , , "22123", , , [ 5 ] ], [ , , "(?:[58]\\d|7[013-7])\\d{5}", , , , "5912345", , , [ 7 ] ], [ , , "81[18]\\d\\d", , , , "81123", , , [ 5 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "9(?:0[1-9]|1[01])\\d{4}", , , , "9010123", , , [ 7 ] ], "VU", 678, "00", , , , , , , , [ [ , "(\\d{3})(\\d{4})", "$1 $2", [ "[57-9]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "(?:3[03]|900\\d)\\d{3}", , , , "30123" ], , , [ , , , , , , , , , [ -1 ] ] ],
                WF: [ , [ , , "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", , , , , , , [ 6, 9 ] ], [ , , "72\\d{4}", , , , "721234", , , [ 6 ] ], [ , , "(?:72|8[23])\\d{4}", , , , "821234", , , [ 6 ] ], [ , , "80[0-5]\\d{6}", , , , "800012345", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "WF", 681, "00", , , , , , , , [ [ , "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", [ "[478]" ] ], [ , "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", [ "8" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , "[48]0\\d{4}", , , , "401234", , , [ 6 ] ] ],
                WS: [ , [ , , "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", , , , , , , [ 5, 6, 7, 10 ] ], [ , , "6[1-9]\\d{3}|(?:[2-5]|60)\\d{4}", , , , "22123", , , [ 5, 6 ] ], [ , , "(?:7[1-35-7]|8(?:[3-7]|9\\d{3}))\\d{5}", , , , "7212345", , , [ 7, 10 ] ], [ , , "800\\d{3}", , , , "800123", , , [ 6 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "WS", 685, "0", , , , , , , , [ [ , "(\\d{5})", "$1", [ "[2-5]|6[1-9]" ] ], [ , "(\\d{3})(\\d{3,7})", "$1 $2", [ "[68]" ] ], [ , "(\\d{2})(\\d{5})", "$1 $2", [ "7" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                XK: [ , [ , , "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", , , , , , , [ 8, 9 ] ], [ , , "(?:2[89]|39)0\\d{6}|[23][89]\\d{6}", , , , "28012345" ], [ , , "4[3-9]\\d{6}", , , , "43201234", , , [ 8 ] ], [ , , "800\\d{5}", , , , "80001234", , , [ 8 ] ], [ , , "900\\d{5}", , , , "90001234", , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "XK", 383, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{5})", "$1 $2", [ "[89]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[2-4]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[23]" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                YE: [ , [ , , "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", , , , , , , [ 7, 8, 9 ], [ 6 ] ], [ , , "78[0-7]\\d{4}|17\\d{6}|(?:[12][2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-6])\\d{5}", , , , "1234567", , , [ 7, 8 ], [ 6 ] ], [ , , "7[0137]\\d{7}", , , , "712345678", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "YE", 967, "00", "0", , , "0", , , , [ [ , "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "[1-6]|7[24-68]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "7" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                YT: [ , [ , , "80\\d{7}|(?:26|63)9\\d{6}", , , , , , , [ 9 ] ], [ , , "269(?:0[0-367]|5[0-3]|6\\d|[78]0)\\d{4}", , , , "269601234" ], [ , , "639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}", , , , "639012345" ], [ , , "80\\d{7}", , , , "801234567" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "YT", 262, "00", "0", , , "0", , , , , , [ , , , , , , , , , [ -1 ] ], , "269|63", [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                ZA: [ , [ , , "[1-79]\\d{8}|8\\d{4,9}", , , , , , , [ 5, 6, 7, 8, 9, 10 ] ], [ , , "(?:2(?:0330|4302)|52087)0\\d{3}|(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}", , , , "101234567", , , [ 9 ] ], [ , , "(?:1(?:3492[0-25]|4495[0235]|549(?:20|5[01]))|4[34]492[01])\\d{3}|8[1-4]\\d{3,7}|(?:2[27]|47|54)4950\\d{3}|(?:1(?:049[2-4]|9[12]\\d\\d)|(?:6\\d|7[0-46-9])\\d{3}|8(?:5\\d{3}|7(?:08[67]|158|28[5-9]|310)))\\d{4}|(?:1[6-8]|28|3[2-69]|4[025689]|5[36-8])4920\\d{3}|(?:12|[2-5]1)492\\d{4}", , , , "711234567", , , [ 5, 6, 7, 8, 9 ] ], [ , , "80\\d{7}", , , , "801234567", , , [ 9 ] ], [ , , "(?:86[2-9]|9[0-2]\\d)\\d{6}", , , , "862345678", , , [ 9 ] ], [ , , "860\\d{6}", , , , "860123456", , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "87(?:08[0-589]|15[0-79]|28[0-4]|31[1-9])\\d{4}|87(?:[02][0-79]|1[0-46-9]|3[02-9]|[4-9]\\d)\\d{5}", , , , "871234567", , , [ 9 ] ], "ZA", 27, "00", "0", , , "0", , , , [ [ , "(\\d{2})(\\d{3,4})", "$1 $2", [ "8[1-4]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", [ "8[1-4]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "860" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "[1-9]" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "8" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "861\\d{6,7}", , , , "861123456", , , [ 9, 10 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                ZM: [ , [ , , "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", , , , , , , [ 9 ], [ 6 ] ], [ , , "21[1-8]\\d{6}", , , , "211234567", , , , [ 6 ] ], [ , , "(?:7[679]|9[5-8])\\d{7}", , , , "955123456" ], [ , , "800\\d{6}", , , , "800123456" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "63\\d{7}", , , , "630123456" ], "ZM", 260, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{3})", "$1 $2", [ "[1-9]" ] ], [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[28]" ], "0$1" ], [ , "(\\d{2})(\\d{7})", "$1 $2", [ "[79]" ], "0$1" ] ], [ [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[28]" ], "0$1" ], [ , "(\\d{2})(\\d{7})", "$1 $2", [ "[79]" ], "0$1" ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                ZW: [ , [ , , "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", , , , , , , [ 5, 6, 7, 8, 9, 10 ], [ 3, 4 ] ], [ , , "(?:1(?:(?:3\\d|9)\\d|[4-8])|2(?:(?:(?:0(?:2[014]|5)|(?:2[0157]|31|84|9)\\d\\d|[56](?:[14]\\d\\d|20)|7(?:[089]|2[03]|[35]\\d\\d))\\d|4(?:2\\d\\d|8))\\d|1(?:2|[39]\\d{4}))|3(?:(?:123|(?:29\\d|92)\\d)\\d\\d|7(?:[19]|[56]\\d))|5(?:0|1[2-478]|26|[37]2|4(?:2\\d{3}|83)|5(?:25\\d\\d|[78])|[689]\\d)|6(?:(?:[16-8]21|28|52[013])\\d\\d|[39])|8(?:[1349]28|523)\\d\\d)\\d{3}|(?:4\\d\\d|9[2-9])\\d{4,5}|(?:(?:2(?:(?:(?:0|8[146])\\d|7[1-7])\\d|2(?:[278]\\d|92)|58(?:2\\d|3))|3(?:[26]|9\\d{3})|5(?:4\\d|5)\\d\\d)\\d|6(?:(?:(?:[0-246]|[78]\\d)\\d|37)\\d|5[2-8]))\\d\\d|(?:2(?:[569]\\d|8[2-57-9])|3(?:[013-59]\\d|8[37])|6[89]8)\\d{3}", , , , "1312345", , , , [ 3, 4 ] ], [ , , "7(?:[178]\\d|3[1-9])\\d{6}", , , , "712345678", , , [ 9 ] ], [ , , "80(?:[01]\\d|20|8[0-8])\\d{3}", , , , "8001234", , , [ 7 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "86(?:1[12]|22|30|44|55|77|8[368])\\d{6}", , , , "8686123456", , , [ 10 ] ], "ZW", 263, "00", "0", , , "0", , , , [ [ , "(\\d{3})(\\d{3,5})", "$1 $2", [ "2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]" ], "0$1" ], [ , "(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", [ "[49]" ], "0$1" ], [ , "(\\d{3})(\\d{4})", "$1 $2", [ "80" ], "0$1" ], [ , "(\\d{2})(\\d{7})", "$1 $2", [ "24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]" ], "(0$1)" ], [ , "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", [ "7" ], "0$1" ], [ , "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)" ], "0$1" ], [ , "(\\d{4})(\\d{6})", "$1 $2", [ "8" ], "0$1" ], [ , "(\\d{2})(\\d{3,5})", "$1 $2", [ "1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]" ], "0$1" ], [ , "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", [ "29[013-9]|39|54" ], "0$1" ], [ , "(\\d{4})(\\d{3,5})", "$1 $2", [ "(?:25|54)8", "258|5483" ], "0$1" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                800: [ , [ , , "(?:005|[1-9]\\d\\d)\\d{5}", , , , , , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "(?:005|[1-9]\\d\\d)\\d{5}", , , , "12345678" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "001", 800, , , , , , , , 1, [ [ , "(\\d{4})(\\d{4})", "$1 $2", [ "\\d" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                808: [ , [ , , "[1-9]\\d{7}", , , , , , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "[1-9]\\d{7}", , , , "12345678" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "001", 808, , , , , , , , 1, [ [ , "(\\d{4})(\\d{4})", "$1 $2", [ "[1-9]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                870: [ , [ , , "7\\d{11}|[35-7]\\d{8}", , , , , , , [ 9, 12 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}", , , , "301234567" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "001", 870, , , , , , , , , [ [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "[35-7]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                878: [ , [ , , "10\\d{10}", , , , , , , [ 12 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "10\\d{10}", , , , "101234567890" ], "001", 878, , , , , , , , 1, [ [ , "(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", [ "1" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                881: [ , [ , , "[0-36-9]\\d{8}", , , , , , , [ 9 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "[0-36-9]\\d{8}", , , , "612345678" ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "001", 881, , , , , , , , , [ [ , "(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", [ "[0-36-9]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                882: [ , [ , , "[13]\\d{6}(?:\\d{2,5})?|285\\d{9}|(?:[19]\\d|49)\\d{6}", , , , , , , [ 7, 8, 9, 10, 11, 12 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "342\\d{4}|(?:337|49)\\d{6}|3(?:2|47|7\\d{3})\\d{7}", , , , "3421234", , , [ 7, 8, 9, 10, 12 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:(?:285\\d\\d|3(?:45|[69]\\d{3}))\\d|9[89])\\d{6}", , , , "390123456789" ], "001", 882, , , , , , , , , [ [ , "(\\d{2})(\\d{5})", "$1 $2", [ "16|342" ] ], [ , "(\\d{2})(\\d{6})", "$1 $2", [ "4" ] ], [ , "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", [ "[19]" ] ], [ , "(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", [ "3[23]" ] ], [ , "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", [ "1" ] ], [ , "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", [ "34[57]" ] ], [ , "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", [ "34" ] ], [ , "(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", [ "[1-3]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , "348[57]\\d{7}", , , , "34851234567", , , [ 11 ] ] ],
                883: [ , [ , , "(?:210|370\\d\\d)\\d{7}|51\\d{7}(?:\\d{3})?", , , , , , , [ 9, 10, 12 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "(?:210|(?:370[1-9]|51[013]0)\\d)\\d{7}|5100\\d{5}", , , , "510012345" ], "001", 883, , , , , , , , 1, [ [ , "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", [ "510" ] ], [ , "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", [ "2" ] ], [ , "(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", [ "51[13]" ] ], [ , "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", [ "[35]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ],
                888: [ , [ , , "\\d{11}", , , , , , , [ 11 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "001", 888, , , , , , , , 1, [ [ , "(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3" ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , "\\d{11}", , , , "12345678901" ], , , [ , , , , , , , , , [ -1 ] ] ],
                979: [ , [ , , "[1359]\\d{8}", , , , , , , [ 9 ], [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , "[1359]\\d{8}", , , , "123456789", , , , [ 8 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], "001", 979, , , , , , , , 1, [ [ , "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", [ "[1359]" ] ] ], , [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ], [ , , , , , , , , , [ -1 ] ], , , [ , , , , , , , , , [ -1 ] ] ]
            };
            function K() {
                this.g = {};
            }
            K.i = void 0;
            K.g = function() {
                return K.i ? K.i : K.i = new K;
            };
            var wa = {
                0: "0",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                "０": "0",
                "１": "1",
                "２": "2",
                "３": "3",
                "４": "4",
                "５": "5",
                "６": "6",
                "７": "7",
                "８": "8",
                "９": "9",
                "٠": "0",
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "۰": "0",
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9"
            }, xa = {
                0: "0",
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                "０": "0",
                "１": "1",
                "２": "2",
                "３": "3",
                "４": "4",
                "５": "5",
                "６": "6",
                "７": "7",
                "８": "8",
                "９": "9",
                "٠": "0",
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "۰": "0",
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9",
                A: "2",
                B: "2",
                C: "2",
                D: "3",
                E: "3",
                F: "3",
                G: "4",
                H: "4",
                I: "4",
                J: "5",
                K: "5",
                L: "5",
                M: "6",
                N: "6",
                O: "6",
                P: "7",
                Q: "7",
                R: "7",
                S: "7",
                T: "8",
                U: "8",
                V: "8",
                W: "9",
                X: "9",
                Y: "9",
                Z: "9"
            }, L = /^[+\uff0b]+/, ya = /([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])/, za = /[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]/, Aa = /[\\\/] *x/, Ba = /[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$/, Ca = /(?:.*?[A-Za-z]){3}.*/;
            function N(a) {
                return "([0-9０-９٠-٩۰-۹]{1," + a + "})";
            }
            function Da() {
                return ";ext=" + N("20") + "|[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)[:\\.．]?[  \\t,-]*" + N("20") + "#?|[  \\t,]*(?:[xｘ#＃~～]|int|ｉｎｔ)[:\\.．]?[  \\t,-]*" + N("9") + "#?|[- ]+" + N("6") + "#|[  \\t]*(?:,{2}|;)[:\\.．]?[  \\t,-]*" + N("15") + "#?|[  \\t]*(?:,)+[:\\.．]?[  \\t,-]*" + N("9") + "#?";
            }
            var Ea = new RegExp("(?:" + Da() + ")$", "i"), Fa = new RegExp("^[0-9０-９٠-٩۰-۹]{2}$|^[+＋]*(?:[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～*]*[0-9０-９٠-٩۰-۹]){3,}[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～*A-Za-z0-9０-９٠-٩۰-۹]*(?:" + Da() + ")?$", "i"), Ga = /(\$\d)/;
            function Ha(a) {
                return 2 > a.length ? !1 : O(Fa, a);
            }
            function Ia(a) {
                return O(Ca, a) ? P(a, xa) : P(a, wa);
            }
            function Ja(a) {
                var b = Ia(a.toString());
                a.i = "";
                a.g(b);
            }
            function Ka(a) {
                return null != a && (1 != x(a, 9) || -1 != u(a, 9)[0]);
            }
            function P(a, b) {
                for (var d, c = new E, e = a.length, g = 0; g < e; ++g) d = a.charAt(g), d = b[d.toUpperCase()], 
                null != d && c.g(d);
                return c.toString();
            }
            function Q(a) {
                return null != a && isNaN(a) && a.toUpperCase() in va;
            }
            function La(a, b, c) {
                if (0 == p(b, 2) && null != b.g[5]) {
                    var d = w(b, 5);
                    if (0 < d.length) return d;
                }
                d = w(b, 1);
                var e = R(b);
                if (0 == c) return Ma(d, 0, e, "");
                if (!(d in J)) return e;
                a = S(a, d, T(d));
                b = null != b.g[3] && 0 != p(b, 3).length ? 3 == c ? ";ext=" + p(b, 3) : null != a.g[13] ? p(a, 13) + w(b, 3) : " ext. " + w(b, 3) : "";
                a: {
                    a = 0 == u(a, 20).length || 2 == c ? u(a, 19) : u(a, 20);
                    for (var g, f = a.length, h = 0; h < f; ++h) {
                        g = a[h];
                        var l = x(g, 3);
                        if (0 == l || 0 == e.search(p(g, 3, l - 1))) if (l = new RegExp(p(g, 1)), O(l, e)) {
                            a = g;
                            break a;
                        }
                    }
                    a = null;
                }
                null != a && (f = a, a = w(f, 2), g = new RegExp(p(f, 1)), w(f, 5), f = w(f, 4), 
                e = 2 == c && null != f && 0 < f.length ? e.replace(g, a.replace(Ga, f)) : e.replace(g, a), 
                3 == c && (e = e.replace(/^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/, ""), 
                e = e.replace(/[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/g, "-")));
                return Ma(d, c, e, b);
            }
            function S(a, b, c) {
                return "001" == c ? U(a, "" + b) : U(a, c);
            }
            function R(a) {
                if (null == a.g[2]) return "";
                var b = "" + p(a, 2);
                return null != a.g[4] && p(a, 4) && 0 < w(a, 8) ? Array(w(a, 8) + 1).join("0") + b : b;
            }
            function Ma(a, b, c, d) {
                switch (b) {
                  case 0:
                    return "+" + a + c + d;

                  case 1:
                    return "+" + a + " " + c + d;

                  case 3:
                    return "tel:+" + a + "-" + c + d;

                  default:
                    return c + d;
                }
            }
            function V(a, b) {
                switch (b) {
                  case 4:
                    return p(a, 5);

                  case 3:
                    return p(a, 4);

                  case 1:
                    return p(a, 3);

                  case 0:
                  case 2:
                    return p(a, 2);

                  case 5:
                    return p(a, 6);

                  case 6:
                    return p(a, 8);

                  case 7:
                    return p(a, 7);

                  case 8:
                    return p(a, 21);

                  case 9:
                    return p(a, 25);

                  case 10:
                    return p(a, 28);

                  default:
                    return p(a, 1);
                }
            }
            function W(a, b) {
                return X(a, p(b, 1)) ? X(a, p(b, 5)) ? 4 : X(a, p(b, 4)) ? 3 : X(a, p(b, 6)) ? 5 : X(a, p(b, 8)) ? 6 : X(a, p(b, 7)) ? 7 : X(a, p(b, 21)) ? 8 : X(a, p(b, 25)) ? 9 : X(a, p(b, 28)) ? 10 : X(a, p(b, 2)) ? p(b, 18) || X(a, p(b, 3)) ? 2 : 0 : !p(b, 18) && X(a, p(b, 3)) ? 1 : -1 : -1;
            }
            function U(a, b) {
                if (null == b) return null;
                b = b.toUpperCase();
                var c = a.g[b];
                if (null == c) {
                    c = va[b];
                    if (null == c) return null;
                    c = (new D).g(H.j(), c);
                    a.g[b] = c;
                }
                return c;
            }
            function X(a, b) {
                var c = a.length;
                return 0 < x(b, 9) && -1 == u(b, 9).indexOf(c) ? !1 : O(w(b, 2), a);
            }
            function Na(a, b) {
                if (null == b) return null;
                var c = w(b, 1);
                c = J[c];
                if (null == c) a = null; else if (1 == c.length) a = c[0]; else a: {
                    b = R(b);
                    for (var d, e = c.length, g = 0; g < e; g++) {
                        d = c[g];
                        var f = U(a, d);
                        if (null != f.g[23]) {
                            if (0 == b.search(p(f, 23))) {
                                a = d;
                                break a;
                            }
                        } else if (-1 != W(b, f)) {
                            a = d;
                            break a;
                        }
                    }
                    a = null;
                }
                return a;
            }
            function T(a) {
                a = J[a];
                return null == a ? "ZZ" : a[0];
            }
            function Y(a, b, c, d) {
                var e = V(c, d), g = 0 == x(e, 9) ? u(p(c, 1), 9) : u(e, 9);
                e = u(e, 10);
                if (2 == d) if (Ka(V(c, 0))) a = V(c, 1), Ka(a) && (g = g.concat(0 == x(a, 9) ? u(p(c, 1), 9) : u(a, 9)), 
                g.sort(), 0 == e.length ? e = u(a, 10) : (e = e.concat(u(a, 10)), e.sort())); else return Y(a, b, c, 1);
                if (-1 == g[0]) return 5;
                b = b.length;
                if (-1 < e.indexOf(b)) return 4;
                c = g[0];
                return c == b ? 0 : c > b ? 2 : g[g.length - 1] < b ? 3 : -1 < g.indexOf(b, 1) ? 0 : 5;
            }
            function Oa(a, b) {
                var c = R(b);
                b = w(b, 1);
                if (!(b in J)) return 1;
                b = S(a, b, T(b));
                return Y(a, c, b, -1);
            }
            function Pa(a, b, c, d, e, g) {
                if (0 == b.length) return 0;
                b = new E(b);
                var f;
                null != c && (f = p(c, 11));
                null == f && (f = "NonMatch");
                var h = b.toString();
                if (0 == h.length) f = 20; else if (L.test(h)) h = h.replace(L, ""), b.i = "", b.g(Ia(h)), 
                f = 1; else {
                    h = new RegExp(f);
                    Ja(b);
                    f = b.toString();
                    if (0 == f.search(h)) {
                        h = f.match(h)[0].length;
                        var l = f.substring(h).match(ya);
                        l && null != l[1] && 0 < l[1].length && "0" == P(l[1], wa) ? f = !1 : (b.i = "", 
                        b.g(f.substring(h)), f = !0);
                    } else f = !1;
                    f = f ? 5 : 20;
                }
                e && q(g, 6, f);
                if (20 != f) {
                    if (2 >= b.i.length) throw Error("Phone number too short after IDD");
                    a: {
                        a = b.toString();
                        if (0 != a.length && "0" != a.charAt(0)) for (e = a.length, b = 1; 3 >= b && b <= e; ++b) if (c = parseInt(a.substring(0, b), 10), 
                        c in J) {
                            d.g(a.substring(b));
                            d = c;
                            break a;
                        }
                        d = 0;
                    }
                    if (0 != d) return q(g, 1, d), d;
                    throw Error("Invalid country calling code");
                }
                if (null != c && (f = w(c, 10), h = "" + f, l = b.toString(), 0 == l.lastIndexOf(h, 0) && (h = new E(l.substring(h.length)), 
                l = p(c, 1), l = new RegExp(w(l, 2)), Qa(h, c, null), h = h.toString(), !O(l, b.toString()) && O(l, h) || 3 == Y(a, b.toString(), c, -1)))) return d.g(h), 
                e && q(g, 6, 10), q(g, 1, f), f;
                q(g, 1, 0);
                return 0;
            }
            function Qa(a, b, c) {
                var d = a.toString(), e = d.length, g = p(b, 15);
                if (0 != e && null != g && 0 != g.length) {
                    var f = new RegExp("^(?:" + g + ")");
                    if (e = f.exec(d)) {
                        g = new RegExp(w(p(b, 1), 2));
                        var h = O(g, d), l = e.length - 1;
                        b = p(b, 16);
                        if (null == b || 0 == b.length || null == e[l] || 0 == e[l].length) {
                            if (!h || O(g, d.substring(e[0].length))) null != c && 0 < l && null != e[l] && c.g(e[1]), 
                            a.set(d.substring(e[0].length));
                        } else if (d = d.replace(f, b), !h || O(g, d)) null != c && 0 < l && c.g(e[1]), 
                        a.set(d);
                    }
                }
            }
            function Z(a, b, c) {
                if (!Q(c) && 0 < b.length && "+" != b.charAt(0)) throw Error("Invalid country calling code");
                return Ra(a, b, c, !0);
            }
            function Ra(a, b, c, d) {
                if (null == b) throw Error("The string supplied did not seem to be a phone number");
                if (250 < b.length) throw Error("The string supplied is too long to be a phone number");
                var e = new E, g = b.indexOf(";phone-context=");
                if (0 <= g) {
                    var f = g + 15;
                    if ("+" == b.charAt(f)) {
                        var h = b.indexOf(";", f);
                        0 < h ? e.g(b.substring(f, h)) : e.g(b.substring(f));
                    }
                    f = b.indexOf("tel:");
                    e.g(b.substring(0 <= f ? f + 4 : 0, g));
                } else g = e.g, f = b.search(za), 0 <= f ? (f = b.substring(f), f = f.replace(Ba, ""), 
                h = f.search(Aa), 0 <= h && (f = f.substring(0, h))) : f = "", g.call(e, f);
                g = e.toString();
                f = g.indexOf(";isub=");
                0 < f && (e.i = "", e.g(g.substring(0, f)));
                if (!Ha(e.toString())) throw Error("The string supplied did not seem to be a phone number");
                g = e.toString();
                if (!(Q(c) || null != g && 0 < g.length && L.test(g))) throw Error("Invalid country calling code");
                g = new I;
                d && q(g, 5, b);
                a: {
                    b = e.toString();
                    f = b.search(Ea);
                    if (0 <= f && Ha(b.substring(0, f))) {
                        h = b.match(Ea);
                        for (var l = h.length, z = 1; z < l; ++z) if (null != h[z] && 0 < h[z].length) {
                            e.i = "";
                            e.g(b.substring(0, f));
                            b = h[z];
                            break a;
                        }
                    }
                    b = "";
                }
                0 < b.length && q(g, 3, b);
                f = U(a, c);
                b = new E;
                h = 0;
                l = e.toString();
                try {
                    h = Pa(a, l, f, b, d, g);
                } catch (M) {
                    if ("Invalid country calling code" == M.message && L.test(l)) {
                        if (l = l.replace(L, ""), h = Pa(a, l, f, b, d, g), 0 == h) throw M;
                    } else throw M;
                }
                0 != h ? (e = T(h), e != c && (f = S(a, h, e))) : (Ja(e), b.g(e.toString()), null != c ? (h = w(f, 10), 
                q(g, 1, h)) : d && (delete g.g[6], g.i && delete g.i[6]));
                if (2 > b.i.length) throw Error("The string supplied is too short to be a phone number");
                null != f && (c = new E, e = new E(b.toString()), Qa(e, f, c), a = Y(a, e.toString(), f, -1), 
                2 != a && 4 != a && 5 != a && (b = e, d && 0 < c.toString().length && q(g, 7, c.toString())));
                d = b.toString();
                a = d.length;
                if (2 > a) throw Error("The string supplied is too short to be a phone number");
                if (17 < a) throw Error("The string supplied is too long to be a phone number");
                if (1 < d.length && "0" == d.charAt(0)) {
                    q(g, 4, !0);
                    for (a = 1; a < d.length - 1 && "0" == d.charAt(a); ) a++;
                    1 != a && q(g, 8, a);
                }
                q(g, 2, parseInt(d, 10));
                return g;
            }
            function O(a, b) {
                return (a = "string" == typeof a ? b.match("^(?:" + a + ")$") : b.match(a)) && a[0].length == b.length ? !0 : !1;
            }
            k("intlTelInputUtils", {});
            k("intlTelInputUtils.formatNumber", (function(a, b, c) {
                try {
                    var d = K.g(), e = Z(d, a, b), g = Oa(d, e);
                    return 0 == g || 4 == g ? La(d, e, "undefined" == typeof c ? 0 : c) : a;
                } catch (f) {
                    return a;
                }
            }));
            k("intlTelInputUtils.getExampleNumber", (function(a, b, c) {
                try {
                    var d = K.g();
                    a: {
                        if (Q(a)) {
                            var e = V(U(d, a), c);
                            try {
                                if (null != e.g[6]) {
                                    var g = p(e, 6);
                                    var f = Ra(d, g, a, !1);
                                    break a;
                                }
                            } catch (h) {}
                        }
                        f = null;
                    }
                    return La(d, f, b ? 2 : 1);
                } catch (h) {
                    return "";
                }
            }));
            k("intlTelInputUtils.getExtension", (function(a, b) {
                try {
                    return p(Z(K.g(), a, b), 3);
                } catch (c) {
                    return "";
                }
            }));
            k("intlTelInputUtils.getNumberType", (function(a, b) {
                try {
                    var c = K.g();
                    var d = Z(c, a, b), e = Na(c, d), g = S(c, w(d, 1), e);
                    if (null == g) var f = -1; else {
                        var h = R(d);
                        f = W(h, g);
                    }
                    return f;
                } catch (l) {
                    return -99;
                }
            }));
            k("intlTelInputUtils.getValidationError", (function(a, b) {
                try {
                    var c = K.g(), d = Z(c, a, b);
                    return Oa(c, d);
                } catch (e) {
                    return "Invalid country calling code" == e.message ? 1 : "Phone number too short after IDD" == e.message || "The string supplied is too short to be a phone number" == e.message ? 2 : "The string supplied is too long to be a phone number" == e.message ? 3 : -99;
                }
            }));
            k("intlTelInputUtils.isValidNumber", (function(a, b) {
                try {
                    var c = K.g(), d = Z(c, a, b);
                    var h, e = Na(c, d), g = w(d, 1), f = S(c, g, e);
                    if (!(h = null == f)) {
                        var l;
                        if (l = "001" != e) {
                            var z = U(c, e);
                            if (null == z) throw Error("Invalid region code: " + e);
                            var M = w(z, 10);
                            l = g != M;
                        }
                        h = l;
                    }
                    if (h) var ua = !1; else {
                        var Sa = R(d);
                        ua = -1 != W(Sa, f);
                    }
                    return ua;
                } catch (Ta) {
                    return !1;
                }
            }));
            k("intlTelInputUtils.numberFormat", {
                E164: 0,
                INTERNATIONAL: 1,
                NATIONAL: 2,
                RFC3966: 3
            });
            k("intlTelInputUtils.numberType", {
                FIXED_LINE: 0,
                MOBILE: 1,
                FIXED_LINE_OR_MOBILE: 2,
                TOLL_FREE: 3,
                PREMIUM_RATE: 4,
                SHARED_COST: 5,
                VOIP: 6,
                PERSONAL_NUMBER: 7,
                PAGER: 8,
                UAN: 9,
                VOICEMAIL: 10,
                UNKNOWN: -1
            });
            k("intlTelInputUtils.validationError", {
                IS_POSSIBLE: 0,
                INVALID_COUNTRY_CODE: 1,
                TOO_SHORT: 2,
                TOO_LONG: 3,
                IS_POSSIBLE_LOCAL_ONLY: 4,
                INVALID_LENGTH: 5
            });
        })();
        __webpack_require__(125);
        const inputsPhone = document.querySelectorAll("input[name=phone]");
        if (inputsPhone.length) inputsPhone.forEach((input => {
            intl_tel_input(input, {
                hiddenInput: "phone",
                autoHideDialCode: true,
                separateDialCode: true,
                preferredCountries: [ "by", "ru", "ua" ],
                utilsScript: utils_namespaceObject,
                initialCountry: "by"
            });
            input.addEventListener("countrychange", (() => {
                input.value = "";
                const countryMask = input.placeholder.replace(/[0-9]/g, "9");
                Inputmask(countryMask).mask(input);
            }));
            Inputmask("99 999-99-99").mask(input);
        }));
        function ssr_window_esm_isObject(obj) {
            return null !== obj && "object" === typeof obj && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if ("undefined" === typeof target[key]) target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = "undefined" !== typeof document ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if ("undefined" === typeof setTimeout) {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if ("undefined" === typeof setTimeout) return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = "undefined" !== typeof window ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function makeReactive(obj) {
            const proto = obj.__proto__;
            Object.defineProperty(obj, "__proto__", {
                get() {
                    return proto;
                },
                set(value) {
                    proto.__proto__ = value;
                }
            });
        }
        class Dom7 extends Array {
            constructor(items) {
                if ("number" === typeof items) super(items); else {
                    super(...items || []);
                    makeReactive(this);
                }
            }
        }
        function arrayFlat(arr = []) {
            const res = [];
            arr.forEach((el => {
                if (Array.isArray(el)) res.push(...arrayFlat(el)); else res.push(el);
            }));
            return res;
        }
        function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
        }
        function arrayUnique(arr) {
            const uniqueArray = [];
            for (let i = 0; i < arr.length; i += 1) if (-1 === uniqueArray.indexOf(arr[i])) uniqueArray.push(arr[i]);
            return uniqueArray;
        }
        function qsa(selector, context) {
            if ("string" !== typeof selector) return [ selector ];
            const a = [];
            const res = context.querySelectorAll(selector);
            for (let i = 0; i < res.length; i += 1) a.push(res[i]);
            return a;
        }
        function dom7_esm_$(selector, context) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            let arr = [];
            if (!context && selector instanceof Dom7) return selector;
            if (!selector) return new Dom7(arr);
            if ("string" === typeof selector) {
                const html = selector.trim();
                if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                    let toCreate = "div";
                    if (0 === html.indexOf("<li")) toCreate = "ul";
                    if (0 === html.indexOf("<tr")) toCreate = "tbody";
                    if (0 === html.indexOf("<td") || 0 === html.indexOf("<th")) toCreate = "tr";
                    if (0 === html.indexOf("<tbody")) toCreate = "table";
                    if (0 === html.indexOf("<option")) toCreate = "select";
                    const tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (let i = 0; i < tempParent.childNodes.length; i += 1) arr.push(tempParent.childNodes[i]);
                } else arr = qsa(selector.trim(), context || document);
            } else if (selector.nodeType || selector === window || selector === document) arr.push(selector); else if (Array.isArray(selector)) {
                if (selector instanceof Dom7) return selector;
                arr = selector;
            }
            return new Dom7(arrayUnique(arr));
        }
        dom7_esm_$.fn = Dom7.prototype;
        function addClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.add(...classNames);
            }));
            return this;
        }
        function removeClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.remove(...classNames);
            }));
            return this;
        }
        function toggleClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                classNames.forEach((className => {
                    el.classList.toggle(className);
                }));
            }));
        }
        function hasClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            return arrayFilter(this, (el => classNames.filter((className => el.classList.contains(className))).length > 0)).length > 0;
        }
        function attr(attrs, value) {
            if (1 === arguments.length && "string" === typeof attrs) {
                if (this[0]) return this[0].getAttribute(attrs);
                return;
            }
            for (let i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(attrs, value); else for (const attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
            }
            return this;
        }
        function removeAttr(attr) {
            for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(attr);
            return this;
        }
        function transform(transform) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transform = transform;
            return this;
        }
        function transition(duration) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transitionDuration = "string" !== typeof duration ? `${duration}ms` : duration;
            return this;
        }
        function on(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            function handleLiveEvent(e) {
                const target = e.target;
                if (!target) return;
                const eventData = e.target.dom7EventData || [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                if (dom7_esm_$(target).is(targetSelector)) listener.apply(target, eventData); else {
                    const parents = dom7_esm_$(target).parents();
                    for (let k = 0; k < parents.length; k += 1) if (dom7_esm_$(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                }
            }
            function handleEvent(e) {
                const eventData = e && e.target ? e.target.dom7EventData || [] : [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                listener.apply(this, eventData);
            }
            const events = eventType.split(" ");
            let j;
            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];
                if (!targetSelector) for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {};
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                } else for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                    if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
                    el.dom7LiveListeners[event].push({
                        listener,
                        proxyListener: handleLiveEvent
                    });
                    el.addEventListener(event, handleLiveEvent, capture);
                }
            }
            return this;
        }
        function off(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            const events = eventType.split(" ");
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    let handlers;
                    if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event]; else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
                    if (handlers && handlers.length) for (let k = handlers.length - 1; k >= 0; k -= 1) {
                        const handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
            return this;
        }
        function trigger(...args) {
            const window = ssr_window_esm_getWindow();
            const events = args[0].split(" ");
            const eventData = args[1];
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    if (window.CustomEvent) {
                        const evt = new window.CustomEvent(event, {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true
                        });
                        el.dom7EventData = args.filter(((data, dataIndex) => dataIndex > 0));
                        el.dispatchEvent(evt);
                        el.dom7EventData = [];
                        delete el.dom7EventData;
                    }
                }
            }
            return this;
        }
        function transitionEnd(callback) {
            const dom = this;
            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off("transitionend", fireCallBack);
            }
            if (callback) dom.on("transitionend", fireCallBack);
            return this;
        }
        function dom7_esm_outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        }
        function dom7_esm_outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        }
        function offset() {
            if (this.length > 0) {
                const window = ssr_window_esm_getWindow();
                const document = ssr_window_esm_getDocument();
                const el = this[0];
                const box = el.getBoundingClientRect();
                const body = document.body;
                const clientTop = el.clientTop || body.clientTop || 0;
                const clientLeft = el.clientLeft || body.clientLeft || 0;
                const scrollTop = el === window ? window.scrollY : el.scrollTop;
                const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
            }
            return null;
        }
        function styles() {
            const window = ssr_window_esm_getWindow();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {};
        }
        function css(props, value) {
            const window = ssr_window_esm_getWindow();
            let i;
            if (1 === arguments.length) if ("string" === typeof props) {
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                for (i = 0; i < this.length; i += 1) for (const prop in props) this[i].style[prop] = props[prop];
                return this;
            }
            if (2 === arguments.length && "string" === typeof props) {
                for (i = 0; i < this.length; i += 1) this[i].style[props] = value;
                return this;
            }
            return this;
        }
        function each(callback) {
            if (!callback) return this;
            this.forEach(((el, index) => {
                callback.apply(el, [ el, index ]);
            }));
            return this;
        }
        function filter(callback) {
            const result = arrayFilter(this, callback);
            return dom7_esm_$(result);
        }
        function html(html) {
            if ("undefined" === typeof html) return this[0] ? this[0].innerHTML : null;
            for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
            return this;
        }
        function dom7_esm_text(text) {
            if ("undefined" === typeof text) return this[0] ? this[0].textContent.trim() : null;
            for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
            return this;
        }
        function is(selector) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            const el = this[0];
            let compareWith;
            let i;
            if (!el || "undefined" === typeof selector) return false;
            if ("string" === typeof selector) {
                if (el.matches) return el.matches(selector);
                if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                compareWith = dom7_esm_$(selector);
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            if (selector === document) return el === document;
            if (selector === window) return el === window;
            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [ selector ] : selector;
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            return false;
        }
        function index() {
            let child = this[0];
            let i;
            if (child) {
                i = 0;
                while (null !== (child = child.previousSibling)) if (1 === child.nodeType) i += 1;
                return i;
            }
            return;
        }
        function eq(index) {
            if ("undefined" === typeof index) return this;
            const length = this.length;
            if (index > length - 1) return dom7_esm_$([]);
            if (index < 0) {
                const returnIndex = length + index;
                if (returnIndex < 0) return dom7_esm_$([]);
                return dom7_esm_$([ this[returnIndex] ]);
            }
            return dom7_esm_$([ this[index] ]);
        }
        function append(...els) {
            let newChild;
            const document = ssr_window_esm_getDocument();
            for (let k = 0; k < els.length; k += 1) {
                newChild = els[k];
                for (let i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) this[i].appendChild(tempDiv.firstChild);
                } else if (newChild instanceof Dom7) for (let j = 0; j < newChild.length; j += 1) this[i].appendChild(newChild[j]); else this[i].appendChild(newChild);
            }
            return this;
        }
        function prepend(newChild) {
            const document = ssr_window_esm_getDocument();
            let i;
            let j;
            for (i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            } else if (newChild instanceof Dom7) for (j = 0; j < newChild.length; j += 1) this[i].insertBefore(newChild[j], this[i].childNodes[0]); else this[i].insertBefore(newChild, this[i].childNodes[0]);
            return this;
        }
        function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && dom7_esm_$(this[0].nextElementSibling).is(selector)) return dom7_esm_$([ this[0].nextElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (this[0].nextElementSibling) return dom7_esm_$([ this[0].nextElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function nextAll(selector) {
            const nextEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (dom7_esm_$(next).is(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return dom7_esm_$(nextEls);
        }
        function prev(selector) {
            if (this.length > 0) {
                const el = this[0];
                if (selector) {
                    if (el.previousElementSibling && dom7_esm_$(el.previousElementSibling).is(selector)) return dom7_esm_$([ el.previousElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (el.previousElementSibling) return dom7_esm_$([ el.previousElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function prevAll(selector) {
            const prevEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (dom7_esm_$(prev).is(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return dom7_esm_$(prevEls);
        }
        function dom7_esm_parent(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) if (null !== this[i].parentNode) if (selector) {
                if (dom7_esm_$(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
            } else parents.push(this[i].parentNode);
            return dom7_esm_$(parents);
        }
        function parents(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) {
                let parent = this[i].parentNode;
                while (parent) {
                    if (selector) {
                        if (dom7_esm_$(parent).is(selector)) parents.push(parent);
                    } else parents.push(parent);
                    parent = parent.parentNode;
                }
            }
            return dom7_esm_$(parents);
        }
        function closest(selector) {
            let closest = this;
            if ("undefined" === typeof selector) return dom7_esm_$([]);
            if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
            return closest;
        }
        function find(selector) {
            const foundElements = [];
            for (let i = 0; i < this.length; i += 1) {
                const found = this[i].querySelectorAll(selector);
                for (let j = 0; j < found.length; j += 1) foundElements.push(found[j]);
            }
            return dom7_esm_$(foundElements);
        }
        function children(selector) {
            const children = [];
            for (let i = 0; i < this.length; i += 1) {
                const childNodes = this[i].children;
                for (let j = 0; j < childNodes.length; j += 1) if (!selector || dom7_esm_$(childNodes[j]).is(selector)) children.push(childNodes[j]);
            }
            return dom7_esm_$(children);
        }
        function remove() {
            for (let i = 0; i < this.length; i += 1) if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            return this;
        }
        const noTrigger = "resize scroll".split(" ");
        function shortcut(name) {
            function eventHandler(...args) {
                if ("undefined" === typeof args[0]) {
                    for (let i = 0; i < this.length; i += 1) if (noTrigger.indexOf(name) < 0) if (name in this[i]) this[i][name](); else dom7_esm_$(this[i]).trigger(name);
                    return this;
                }
                return this.on(name, ...args);
            }
            return eventHandler;
        }
        shortcut("click");
        shortcut("blur");
        shortcut("focus");
        shortcut("focusin");
        shortcut("focusout");
        shortcut("keyup");
        shortcut("keydown");
        shortcut("keypress");
        shortcut("submit");
        shortcut("change");
        shortcut("mousedown");
        shortcut("mousemove");
        shortcut("mouseup");
        shortcut("mouseenter");
        shortcut("mouseleave");
        shortcut("mouseout");
        shortcut("mouseover");
        shortcut("touchstart");
        shortcut("touchend");
        shortcut("touchmove");
        shortcut("resize");
        shortcut("scroll");
        const Methods = {
            addClass,
            removeClass,
            hasClass,
            toggleClass,
            attr,
            removeAttr,
            transform,
            transition,
            on,
            off,
            trigger,
            transitionEnd,
            outerWidth: dom7_esm_outerWidth,
            outerHeight: dom7_esm_outerHeight,
            styles,
            offset,
            css,
            each,
            html,
            text: dom7_esm_text,
            is,
            index,
            eq,
            append,
            prepend,
            next,
            nextAll,
            prev,
            prevAll,
            parent: dom7_esm_parent,
            parents,
            closest,
            find,
            children,
            filter,
            remove
        };
        Object.keys(Methods).forEach((methodName => {
            Object.defineProperty(dom7_esm_$.fn, methodName, {
                value: Methods[methodName],
                writable: true
            });
        }));
        const dom = dom7_esm_$;
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (void 0 === delay) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (void 0 === axis) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix("none" === curTransform ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if ("x" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (16 === matrix.length) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if ("y" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (16 === matrix.length) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return "object" === typeof o && null !== o && o.constructor && "Object" === Object.prototype.toString.call(o).slice(8, -1);
        }
        function isNode(node) {
            if ("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement) return node instanceof HTMLElement;
            return node && (1 === node.nodeType || 11 === node.nodeType);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (void 0 !== nextSource && null !== nextSource && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (void 0 !== desc && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => "next" === dir && current >= target || "prev" === dir && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (null === startTime) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                passiveListener: function checkPassiveListener() {
                    let supportsPassive = false;
                    try {
                        const opts = Object.defineProperty({}, "passive", {
                            get() {
                                supportsPassive = true;
                            }
                        });
                        window.addEventListener("testPassiveListener", null, opts);
                    } catch (e) {}
                    return supportsPassive;
                }(),
                gestures: function checkGestures() {
                    return "ongesturestart" in window;
                }()
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = void 0 === _temp ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = "Win32" === platform;
            let macos = "MacIntel" === platform;
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (void 0 === overrides) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            return {
                isSafari: isSafari(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && "undefined" !== typeof window.ResizeObserver) {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (void 0 === options) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (1 === mutations.length) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: "undefined" === typeof options.attributes ? true : options.attributes,
                    childList: "undefined" === typeof options.childList ? true : options.childList,
                    characterData: "undefined" === typeof options.characterData ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = swiper.$el.parents();
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.$el[0], {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.$wrapperEl[0], {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if ("undefined" === typeof handler) self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if ("string" === typeof args[0] || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const $el = swiper.$el;
            if ("undefined" !== typeof swiper.params.width && null !== swiper.params.width) width = swiper.params.width; else width = $el[0].clientWidth;
            if ("undefined" !== typeof swiper.params.height && null !== swiper.params.height) height = swiper.params.height; else height = $el[0].clientHeight;
            if (0 === width && swiper.isHorizontal() || 0 === height && swiper.isVertical()) return;
            width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
            height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {$wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if ("function" === typeof offsetBefore) offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if ("function" === typeof offsetAfter) offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if ("undefined" === typeof swiperSize) return;
            if ("string" === typeof spaceBetween && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween;
            if (rtl) slides.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }); else slides.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            });
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = "auto" === params.slidesPerView && params.breakpoints && Object.keys(params.breakpoints).filter((key => "undefined" !== typeof params.breakpoints[key].slidesPerView)).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                const slide = slides.eq(i);
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if ("none" === slide.css("display")) continue;
                if ("auto" === params.slidesPerView) {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide[0]);
                    const currentTransform = slide[0].style.transform;
                    const currentWebKitTransform = slide[0].style.webkitTransform;
                    if (currentTransform) slide[0].style.transform = "none";
                    if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && "border-box" === boxSizing) slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide[0];
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide[0].style.transform = currentTransform;
                    if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (0 === prevSlideSize && 0 !== i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (0 === i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && ("slide" === params.effect || "coverflow" === params.effect)) $wrapperEl.css({
                width: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (params.setWrapperSize) $wrapperEl.css({
                [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (0 === snapGrid.length) snapGrid = [ 0 ];
            if (0 !== params.spaceBetween) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).css({
                    [key]: `${spaceBetween}px`
                });
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && ("slide" === params.effect || "fade" === params.effect)) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if ("number" === typeof speed) swiper.setTransition(speed); else if (true === speed) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides.filter((el => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index))[0];
                return swiper.slides.eq(index)[0];
            };
            if ("auto" !== swiper.params.slidesPerView && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || dom([])).each((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if ("undefined" !== typeof activeSlides[i]) {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || 0 === newHeight) swiper.$wrapperEl.css("height", `${newHeight}px`);
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
        function updateSlidesProgress(translate) {
            if (void 0 === translate) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (0 === slides.length) return;
            if ("undefined" === typeof slides[0].swiperSlideOffset) swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
            swiper.visibleSlides = dom(swiper.visibleSlides);
        }
        function updateProgress(translate) {
            const swiper = this;
            if ("undefined" === typeof translate) {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (0 === translatesDiff) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }
            Object.assign(swiper, {
                progress,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, $wrapperEl, activeIndex, realIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
            let activeSlide;
            if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides.eq(activeIndex);
            activeSlide.addClass(params.slideActiveClass);
            if (params.loop) if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
            let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
            if (params.loop && 0 === nextSlide.length) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            }
            let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
            if (params.loop && 0 === prevSlide.length) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }
            if (params.loop) {
                if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
                if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            if ("undefined" === typeof activeIndex) {
                for (let i = 0; i < slidesGrid.length; i += 1) if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                } else if (translate >= slidesGrid[i]) activeIndex = i;
                if (params.normalizeSlideIndex) if (activeIndex < 0 || "undefined" === typeof activeIndex) activeIndex = 0;
            }
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
            Object.assign(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = dom(e).closest(`.${params.slideClass}`)[0];
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(dom(slide).attr("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && void 0 !== swiper.clickedIndex && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (void 0 === axis) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, $wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (void 0 === translate) translate = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === translateBounds) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (0 === speed) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (0 === speed) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if ("reset" === dir) {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if ("next" === dir) swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd_transitionEnd(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const core_transition = {
            setTransition,
            transitionStart,
            transitionEnd: transitionEnd_transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if ("number" !== typeof index && "string" !== typeof index) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            const translate = -snapGrid[snapIndex];
            swiper.updateProgress(translate);
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(100 * translate);
                const normalizedGrid = Math.floor(100 * slidesGrid[i]);
                const normalizedGridNext = Math.floor(100 * slidesGrid[i + 1]);
                if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if ("slide" !== params.effect) swiper.setTranslate(translate);
                if ("reset" !== direction) {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (0 === speed) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._swiperImmediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (0 === speed) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) newIndex += swiper.loopedSlides;
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {animating, enabled, params} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params, animating, snapGrid, slidesGrid, rtlTranslate, enabled} = swiper;
            if (!enabled) return swiper;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if ("undefined" === typeof prevSnap && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if ("undefined" !== typeof prevSnapIndex) prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if ("undefined" !== typeof prevSnap) {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === threshold) threshold = .5;
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, $wrapperEl} = swiper;
            const slidesPerView = "auto" === params.slidesPerView ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(dom(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, $wrapperEl} = swiper;
            const $selector = $wrapperEl.children().length > 0 ? dom($wrapperEl.children()[0].parentNode) : $wrapperEl;
            $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
            let slides = $selector.children(`.${params.slideClass}`);
            if (params.loopFillGroupWithBlank) {
                const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
                if (blankSlidesNum !== params.slidesPerGroup) {
                    for (let i = 0; i < blankSlidesNum; i += 1) {
                        const blankNode = dom(document.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                        $selector.append(blankNode);
                    }
                    slides = $selector.children(`.${params.slideClass}`);
                }
            }
            if ("auto" === params.slidesPerView && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;
            if (swiper.loopedSlides > slides.length) swiper.loopedSlides = slides.length;
            const prependSlides = [];
            const appendSlides = [];
            slides.each(((el, index) => {
                const slide = dom(el);
                if (index < swiper.loopedSlides) appendSlides.push(el);
                if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
                slide.attr("data-swiper-slide-index", index);
            }));
            for (let i = 0; i < appendSlides.length; i += 1) $selector.append(dom(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            for (let i = prependSlides.length - 1; i >= 0; i -= 1) $selector.prepend(dom(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        function loopFix() {
            const swiper = this;
            swiper.emit("beforeLoopFix");
            const {activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl} = swiper;
            let newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            const snapTranslate = -snapGrid[activeIndex];
            const diff = snapTranslate - swiper.getTranslate();
            if (activeIndex < loopedSlides) {
                newIndex = slides.length - 3 * loopedSlides + activeIndex;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            } else if (activeIndex >= slides.length - loopedSlides) {
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {$wrapperEl, params, slides} = swiper;
            $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
            slides.removeAttr("data-swiper-slide-index");
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = "container" === swiper.params.touchEventsTarget ? swiper.el : swiper.wrapperEl;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            swiper["container" === swiper.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "";
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (void 0 === base) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let $targetEl = dom(e.target);
            if ("wrapper" === params.touchEventsTarget) if (!$targetEl.closest(swiper.wrapperEl).length) return;
            data.isTouchEvent = "touchstart" === e.type;
            if (!data.isTouchEvent && "which" in e && 3 === e.which) return;
            if (!data.isTouchEvent && "button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && "" !== params.noSwipingClass;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) $targetEl = dom(event.path[0]);
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!$targetEl.closest(params.swipeHandler)[0]) return;
            touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if ("prevent" === edgeSwipeDetection) event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            if ("touchstart" !== e.type) {
                let preventDefault = true;
                if ($targetEl.is(data.focusableElements)) {
                    preventDefault = false;
                    if ("SELECT" === $targetEl[0].nodeName) data.isTouched = false;
                }
                if (document.activeElement && dom(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
                const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
            }
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            if (data.isTouchEvent && "touchmove" !== e.type) return;
            const targetTouch = "touchmove" === e.type && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            const pageX = "touchmove" === e.type ? targetTouch.pageX : e.pageX;
            const pageY = "touchmove" === e.type ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!dom(e.target).is(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (data.isTouchEvent && document.activeElement) if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if ("undefined" === typeof data.isScrolling) {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = 180 * Math.atan2(Math.abs(diffY), Math.abs(diffX)) / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if ("undefined" === typeof data.startMoving) if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            if (!data.isMoved) {
                if (params.loop && !params.cssMode) swiper.loopFix();
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
                data.allowMomentumBounce = false;
                if (params.grabCursor && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            let diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && "next" === swiper.swipeDirection && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && "prev" === swiper.swipeDirection && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || 0 === touches.diff || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if ("undefined" !== typeof slidesGrid[i + increment]) {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if ("next" === swiper.swipeDirection) if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if ("prev" === swiper.swipeDirection) if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (null !== rewindLastIndex && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if ("next" === swiper.swipeDirection) swiper.slideTo(null !== rewindFirstIndex ? rewindFirstIndex : stopIndex + increment);
                    if ("prev" === swiper.swipeDirection) swiper.slideTo(null !== rewindLastIndex ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && 0 === el.offsetWidth) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            if (("auto" === params.slidesPerView || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (0 === swiper.translate) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, touchEvents, el, wrapperEl, device, support} = swiper;
            const capture = !!params.nested;
            const domMethod = "on" === method ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            if (!support.touch) {
                el[domMethod](touchEvents.start, swiper.onTouchStart, false);
                document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
                document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
            } else {
                const passiveListener = "touchstart" === touchEvents.start && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
                el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture
                } : capture);
                el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
                if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            }
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, support} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            if (support.touch && !dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {activeIndex, initialized, loopedSlides = 0, params, $el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && 0 === Object.keys(breakpoints).length) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && "column" === breakpointParams.grid.fill || !breakpointParams.grid.fill && "column" === params.grid.fill) $el.addClass(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (void 0 === base) base = "window";
            if (!breakpoints || "container" === base && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = "window" === base ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if ("string" === typeof point && 0 === point.indexOf("@")) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if ("window" === base) {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if ("object" === typeof item) Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if ("string" === typeof item) resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, $el, device, support} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "pointer-events": !support.touch
            }, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && "column" === params.grid.fill
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            $el.addClass([ ...classNames ].join(" "));
            swiper.emitContainerClasses();
        }
        function removeClasses_removeClasses() {
            const swiper = this;
            const {$el, classNames} = swiper;
            $el.removeClass(classNames.join(" "));
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses: removeClasses_removeClasses
        };
        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            const window = ssr_window_esm_getWindow();
            let image;
            function onReady() {
                if (callback) callback();
            }
            const isPicture = dom(imageEl).parent("picture")[0];
            if (!isPicture && (!imageEl.complete || !checkForComplete)) if (src) {
                image = new window.Image;
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) image.sizes = sizes;
                if (srcset) image.srcset = srcset;
                if (src) image.src = src;
            } else onReady(); else onReady();
        }
        function preloadImages() {
            const swiper = this;
            swiper.imagesToLoad = swiper.$el.find("img");
            function onReady() {
                if ("undefined" === typeof swiper || null === swiper || !swiper || swiper.destroyed) return;
                if (void 0 !== swiper.imagesLoaded) swiper.imagesLoaded += 1;
                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) swiper.update();
                    swiper.emit("imagesReady");
                }
            }
            for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
                const imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
            }
        }
        const core_images = {
            loadImage,
            preloadImages
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + 2 * slidesOffsetBefore;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = 1 === swiper.snapGrid.length;
            if (true === params.allowSlideNext) swiper.allowSlideNext = !swiper.isLocked;
            if (true === params.allowSlidePrev) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            preloadImages: true,
            updateOnImagesReady: true,
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (void 0 === obj) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if ("object" !== typeof moduleParams || null === moduleParams) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && true === params[moduleParamName]) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (true === params[moduleParamName]) params[moduleParamName] = {
                    enabled: true
                };
                if ("object" === typeof params[moduleParamName] && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition: core_transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes,
            images: core_images
        };
        const extendedDefaults = {};
        class core_Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (1 === args.length && args[0].constructor && "Object" === Object.prototype.toString.call(args[0]).slice(8, -1)) params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                if (params.el && dom(params.el).length > 1) {
                    const swipers = [];
                    dom(params.el).each((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                swiper.$ = dom;
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: dom(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return "horizontal" === swiper.params.direction;
                    },
                    isVertical() {
                        return "vertical" === swiper.params.direction;
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEvents: function touchEvents() {
                        const touch = [ "touchstart", "touchmove", "touchend", "touchcancel" ];
                        const desktop = [ "pointerdown", "pointermove", "pointerup" ];
                        swiper.touchEventsTouch = {
                            start: touch[0],
                            move: touch[1],
                            end: touch[2],
                            cancel: touch[3]
                        };
                        swiper.touchEventsDesktop = {
                            start: desktop[0],
                            move: desktop[1],
                            end: desktop[2]
                        };
                        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: utils_now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, "undefined" === typeof speed ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => 0 === className.indexOf("swiper") || 0 === className.indexOf(swiper.params.containerModifierClass)));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => 0 === className.indexOf("swiper-slide") || 0 === className.indexOf(swiper.params.slideClass))).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.each((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (void 0 === view) view = "current";
                if (void 0 === exact) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if ("current" === view) for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? -1 * swiper.translate : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if (("auto" === swiper.params.slidesPerView || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true); else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (void 0 === needUpdate) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = "horizontal" === currentDirection ? "vertical" : "horizontal";
                if (newDirection === currentDirection || "horizontal" !== newDirection && "vertical" !== newDirection) return swiper;
                swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.each((slideEl => {
                    if ("vertical" === newDirection) slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            mount(el) {
                const swiper = this;
                if (swiper.mounted) return true;
                const $el = dom(el || swiper.params.el);
                el = $el[0];
                if (!el) return false;
                el.swiper = swiper;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = dom(el.shadowRoot.querySelector(getWrapperSelector()));
                        res.children = options => $el.children(options);
                        return res;
                    }
                    if (!$el.children) return dom($el).children(getWrapperSelector());
                    return $el.children(getWrapperSelector());
                };
                let $wrapperEl = getWrapper();
                if (0 === $wrapperEl.length && swiper.params.createElements) {
                    const document = ssr_window_esm_getDocument();
                    const wrapper = document.createElement("div");
                    $wrapperEl = dom(wrapper);
                    wrapper.className = swiper.params.wrapperClass;
                    $el.append(wrapper);
                    $el.children(`.${swiper.params.slideClass}`).each((slideEl => {
                        $wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    $el,
                    el,
                    $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    mounted: true,
                    rtl: "rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction"),
                    rtlTranslate: "horizontal" === swiper.params.direction && ("rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction")),
                    wrongRTL: "-webkit-box" === $wrapperEl.css("display")
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (false === mounted) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                if (swiper.params.loop) swiper.loopCreate();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.preloadImages) swiper.preloadImages();
                if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                swiper.attachEvents();
                swiper.initialized = true;
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (void 0 === deleteInstance) deleteInstance = true;
                if (void 0 === cleanStyles) cleanStyles = true;
                const swiper = this;
                const {params, $el, $wrapperEl, slides} = swiper;
                if ("undefined" === typeof swiper.params || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    $el.removeAttr("style");
                    $wrapperEl.removeAttr("style");
                    if (slides && slides.length) slides.removeClass([ params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (false !== deleteInstance) {
                    swiper.$el[0].swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!core_Swiper.prototype.__modules__) core_Swiper.prototype.__modules__ = [];
                const modules = core_Swiper.prototype.__modules__;
                if ("function" === typeof mod && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => core_Swiper.installModule(m)));
                    return core_Swiper;
                }
                core_Swiper.installModule(module);
                return core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        core_Swiper.use([ Resize, Observer ]);
        const core = core_Swiper;
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            const document = ssr_window_esm_getDocument();
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && true === params.auto) {
                    let element = swiper.$el.children(`.${checkProps[key]}`)[0];
                    if (!element) {
                        element = document.createElement("div");
                        element.className = checkProps[key];
                        swiper.$el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            };
            function getEl(el) {
                let $el;
                if (el) {
                    $el = dom(el);
                    if (swiper.params.uniqueNavElements && "string" === typeof el && $el.length > 1 && 1 === swiper.$el.find(el).length) $el = swiper.$el.find(el);
                }
                return $el;
            }
            function toggleEl($el, disabled) {
                const params = swiper.params.navigation;
                if ($el && $el.length > 0) {
                    $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
                    if ($el[0] && "BUTTON" === $el[0].tagName) $el[0].disabled = disabled;
                    if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
                }
            }
            function update() {
                if (swiper.params.loop) return;
                const {$nextEl, $prevEl} = swiper.navigation;
                toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                const $nextEl = getEl(params.nextEl);
                const $prevEl = getEl(params.prevEl);
                if ($nextEl && $nextEl.length > 0) $nextEl.on("click", onNextClick);
                if ($prevEl && $prevEl.length > 0) $prevEl.on("click", onPrevClick);
                Object.assign(swiper.navigation, {
                    $nextEl,
                    nextEl: $nextEl && $nextEl[0],
                    $prevEl,
                    prevEl: $prevEl && $prevEl[0]
                });
                if (!swiper.enabled) {
                    if ($nextEl) $nextEl.addClass(params.lockClass);
                    if ($prevEl) $prevEl.addClass(params.lockClass);
                }
            }
            function destroy() {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl && $nextEl.length) {
                    $nextEl.off("click", onNextClick);
                    $nextEl.removeClass(swiper.params.navigation.disabledClass);
                }
                if ($prevEl && $prevEl.length) {
                    $prevEl.off("click", onPrevClick);
                    $prevEl.removeClass(swiper.params.navigation.disabledClass);
                }
            }
            on("init", (() => {
                if (false === swiper.params.navigation.enabled) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl) $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
                if ($prevEl) $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
            }));
            on("click", ((_s, e) => {
                const {$nextEl, $prevEl} = swiper.navigation;
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !dom(targetEl).is($prevEl) && !dom(targetEl).is($nextEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass); else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    if (true === isHidden) emit("navigationShow"); else emit("navigationHide");
                    if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                }
            }));
            const enable = () => {
                swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
                init();
                update();
            };
            const disable = () => {
                swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function initSliders() {
            if (document.querySelector(".reviews__slider")) new core(".reviews__slider", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: 2,
                spaceBetween: 50,
                autoHeight: false,
                speed: 800,
                navigation: {
                    prevEl: ".reviews-arrow-prev",
                    nextEl: ".reviews-arrow-next"
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1.2,
                        spaceBetween: 10
                    },
                    479.98: {
                        slidesPerView: 1.6,
                        spaceBetween: 15
                    },
                    767.68: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    991.98: {
                        spaceBetween: 50
                    },
                    1268: {}
                },
                on: {}
            });
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        var lozad_min = __webpack_require__(59);
        const observer = lozad_min();
        observer.observe();
        class ScrollWatcher {
            constructor(props) {
                let defaultConfig = {
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.observer;
                !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null;
            }
            scrollWatcherUpdate() {
                this.scrollWatcherRun();
            }
            scrollWatcherRun() {
                document.documentElement.classList.add("watcher");
                this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
            }
            scrollWatcherConstructor(items) {
                if (items.length) {
                    this.scrollWatcherLogging(`Проснулся, слежу за объектами (${items.length})...`);
                    let uniqParams = uniqArray(Array.from(items).map((function(item) {
                        return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : "0px"}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
                    })));
                    uniqParams.forEach((uniqParam => {
                        let uniqParamArray = uniqParam.split("|");
                        let paramsWatch = {
                            root: uniqParamArray[0],
                            margin: uniqParamArray[1],
                            threshold: uniqParamArray[2]
                        };
                        let groupItems = Array.from(items).filter((function(item) {
                            let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
                            let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
                            let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
                            if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                        }));
                        let configWatcher = this.getScrollWatcherConfig(paramsWatch);
                        this.scrollWatcherInit(groupItems, configWatcher);
                    }));
                } else this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
            }
            getScrollWatcherConfig(paramsWatch) {
                let configWatcher = {};
                if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); else if ("null" !== paramsWatch.root) this.scrollWatcherLogging(`Эмм... родительского объекта ${paramsWatch.root} нет на странице`);
                configWatcher.rootMargin = paramsWatch.margin;
                if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
                    this.scrollWatcherLogging(`Ой ой, настройку data-watch-margin нужно задавать в PX или %`);
                    return;
                }
                if ("prx" === paramsWatch.threshold) {
                    paramsWatch.threshold = [];
                    for (let i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i);
                } else paramsWatch.threshold = paramsWatch.threshold.split(",");
                configWatcher.threshold = paramsWatch.threshold;
                return configWatcher;
            }
            scrollWatcherCreate(configWatcher) {
                this.observer = new IntersectionObserver(((entries, observer) => {
                    entries.forEach((entry => {
                        this.scrollWatcherCallback(entry, observer);
                    }));
                }), configWatcher);
            }
            scrollWatcherInit(items, configWatcher) {
                this.scrollWatcherCreate(configWatcher);
                items.forEach((item => this.observer.observe(item)));
            }
            scrollWatcherIntersecting(entry, targetElement) {
                if (entry.isIntersecting) {
                    !targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я вижу ${targetElement.classList}, добавил класс _watcher-view`);
                } else {
                    targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я не вижу ${targetElement.classList}, убрал класс _watcher-view`);
                }
            }
            scrollWatcherOff(targetElement, observer) {
                observer.unobserve(targetElement);
                this.scrollWatcherLogging(`Я перестал следить за ${targetElement.classList}`);
            }
            scrollWatcherLogging(message) {
                this.config.logging ? functions_FLS(`[Наблюдатель]: ${message}`) : null;
            }
            scrollWatcherCallback(entry, observer) {
                const targetElement = entry.target;
                this.scrollWatcherIntersecting(entry, targetElement);
                targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
                document.dispatchEvent(new CustomEvent("watcherCallback", {
                    detail: {
                        entry
                    }
                }));
            }
        }
        modules_flsModules.watcher = new ScrollWatcher({});
        class FullPage {
            constructor(element, options) {
                let config = {
                    noEventSelector: "[data-no-event]",
                    сlassInit: "fp-init",
                    wrapperAnimatedClass: "fp-switching",
                    selectorSection: "[data-fp-section]",
                    activeClass: "active-section",
                    previousClass: "previous-section",
                    nextClass: "next-section",
                    idActiveSection: 0,
                    mode: element.dataset.fpEffect ? element.dataset.fpEffect : "slider",
                    bullets: element.hasAttribute("data-fp-bullets") ? true : false,
                    bulletsClass: "fp-bullets",
                    bulletClass: "fp-bullet",
                    bulletActiveClass: "fp-bullet-active",
                    onInit: function() {},
                    onSwitching: function() {},
                    onDestroy: function() {}
                };
                this.options = Object.assign(config, options);
                this.wrapper = element;
                this.sections = this.wrapper.querySelectorAll(this.options.selectorSection);
                this.activeSection = false;
                this.activeSectionId = false;
                this.previousSection = false;
                this.previousSectionId = false;
                this.nextSection = false;
                this.nextSectionId = false;
                this.bulletsWrapper = false;
                this.stopEvent = false;
                if (this.sections.length) this.init();
            }
            init() {
                if (this.options.idActiveSection > this.sections.length - 1) return;
                this.setId();
                this.activeSectionId = this.options.idActiveSection;
                this.setEffectsClasses();
                this.setClasses();
                this.setStyle();
                if (this.options.bullets) {
                    this.setBullets();
                    this.setActiveBullet(this.activeSectionId);
                }
                this.events();
                setTimeout((() => {
                    document.documentElement.classList.add(this.options.сlassInit);
                    this.options.onInit(this);
                    document.dispatchEvent(new CustomEvent("fpinit", {
                        detail: {
                            fp: this
                        }
                    }));
                }), 0);
            }
            destroy() {
                this.removeEvents();
                this.removeClasses();
                document.documentElement.classList.remove(this.options.сlassInit);
                this.wrapper.classList.remove(this.options.wrapperAnimatedClass);
                this.removeEffectsClasses();
                this.removeZIndex();
                this.removeStyle();
                this.removeId();
                this.options.onDestroy(this);
                document.dispatchEvent(new CustomEvent("fpdestroy", {
                    detail: {
                        fp: this
                    }
                }));
            }
            setId() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.setAttribute("data-fp-id", index);
                }
            }
            removeId() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.removeAttribute("data-fp-id");
                }
            }
            setClasses() {
                this.previousSectionId = this.activeSectionId - 1 >= 0 ? this.activeSectionId - 1 : false;
                this.nextSectionId = this.activeSectionId + 1 < this.sections.length ? this.activeSectionId + 1 : false;
                this.activeSection = this.sections[this.activeSectionId];
                this.activeSection.classList.add(this.options.activeClass);
                if (false !== this.previousSectionId) {
                    this.previousSection = this.sections[this.previousSectionId];
                    this.previousSection.classList.add(this.options.previousClass);
                } else this.previousSection = false;
                if (false !== this.nextSectionId) {
                    this.nextSection = this.sections[this.nextSectionId];
                    this.nextSection.classList.add(this.options.nextClass);
                } else this.nextSection = false;
            }
            removeEffectsClasses() {
                switch (this.options.mode) {
                  case "slider":
                    this.wrapper.classList.remove("slider-mode");
                    break;

                  case "cards":
                    this.wrapper.classList.remove("cards-mode");
                    this.setZIndex();
                    break;

                  case "fade":
                    this.wrapper.classList.remove("fade-mode");
                    this.setZIndex();
                    break;

                  default:
                    break;
                }
            }
            setEffectsClasses() {
                switch (this.options.mode) {
                  case "slider":
                    this.wrapper.classList.add("slider-mode");
                    break;

                  case "cards":
                    this.wrapper.classList.add("cards-mode");
                    this.setZIndex();
                    break;

                  case "fade":
                    this.wrapper.classList.add("fade-mode");
                    this.setZIndex();
                    break;

                  default:
                    break;
                }
            }
            setStyle() {
                switch (this.options.mode) {
                  case "slider":
                    this.styleSlider();
                    break;

                  case "cards":
                    this.styleCards();
                    break;

                  case "fade":
                    this.styleFade();
                    break;

                  default:
                    break;
                }
            }
            styleSlider() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    if (index === this.activeSectionId) section.style.transform = "translate3D(0,0,0)"; else if (index < this.activeSectionId) section.style.transform = "translate3D(0,-100%,0)"; else if (index > this.activeSectionId) section.style.transform = "translate3D(0,100%,0)";
                }
            }
            styleCards() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    if (index >= this.activeSectionId) section.style.transform = "translate3D(0,0,0)"; else if (index < this.activeSectionId) section.style.transform = "translate3D(0,-100%,0)";
                }
            }
            styleFade() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    if (index === this.activeSectionId) {
                        section.style.opacity = "1";
                        section.style.visibility = "visible";
                    } else {
                        section.style.opacity = "0";
                        section.style.visibility = "hidden";
                    }
                }
            }
            removeStyle() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.style.opacity = "";
                    section.style.visibility = "";
                    section.style.transform = "";
                }
            }
            checkScroll(yCoord, element) {
                this.goScroll = false;
                if (!this.stopEvent && element) {
                    this.goScroll = true;
                    if (this.haveScroll(element)) {
                        this.goScroll = false;
                        const position = Math.round(element.scrollHeight - element.scrollTop);
                        if (Math.abs(position - element.scrollHeight) < 2 && yCoord <= 0 || Math.abs(position - element.clientHeight) < 2 && yCoord >= 0) this.goScroll = true;
                    }
                }
            }
            haveScroll(element) {
                return element.scrollHeight !== window.innerHeight;
            }
            removeClasses() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.classList.remove(this.options.activeClass);
                    section.classList.remove(this.options.previousClass);
                    section.classList.remove(this.options.nextClass);
                }
            }
            events() {
                this.events = {
                    wheel: this.wheel.bind(this),
                    touchdown: this.touchDown.bind(this),
                    touchup: this.touchUp.bind(this),
                    touchmove: this.touchMove.bind(this),
                    touchcancel: this.touchUp.bind(this),
                    transitionEnd: this.transitionend.bind(this),
                    click: this.clickBullets.bind(this)
                };
                if (isMobile.iOS()) document.addEventListener("touchmove", (e => {
                    e.preventDefault();
                }));
                this.setEvents();
            }
            setEvents() {
                this.wrapper.addEventListener("wheel", this.events.wheel);
                this.wrapper.addEventListener("touchstart", this.events.touchdown);
                if (this.options.bullets && this.bulletsWrapper) this.bulletsWrapper.addEventListener("click", this.events.click);
            }
            removeEvents() {
                this.wrapper.removeEventListener("wheel", this.events.wheel);
                this.wrapper.removeEventListener("touchdown", this.events.touchdown);
                this.wrapper.removeEventListener("touchup", this.events.touchup);
                this.wrapper.removeEventListener("touchcancel", this.events.touchup);
                this.wrapper.removeEventListener("touchmove", this.events.touchmove);
                if (this.bulletsWrapper) this.bulletsWrapper.removeEventListener("click", this.events.click);
            }
            clickBullets(e) {
                const bullet = e.target.closest(`.${this.options.bulletClass}`);
                if (bullet) {
                    const arrayChildren = Array.from(this.bulletsWrapper.children);
                    const idClickBullet = arrayChildren.indexOf(bullet);
                    this.switchingSection(idClickBullet);
                }
            }
            setActiveBullet(idButton) {
                if (!this.bulletsWrapper) return;
                const bullets = this.bulletsWrapper.children;
                for (let index = 0; index < bullets.length; index++) {
                    const bullet = bullets[index];
                    if (idButton === index) bullet.classList.add(this.options.bulletActiveClass); else bullet.classList.remove(this.options.bulletActiveClass);
                }
            }
            touchDown(e) {
                this._yP = e.changedTouches[0].pageY;
                this._eventElement = e.target.closest(`.${this.options.activeClass}`);
                if (this._eventElement) {
                    this._eventElement.addEventListener("touchend", this.events.touchup);
                    this._eventElement.addEventListener("touchcancel", this.events.touchup);
                    this._eventElement.addEventListener("touchmove", this.events.touchmove);
                    this.clickOrTouch = true;
                    if (isMobile.iOS()) {
                        if (this._eventElement.scrollHeight !== this._eventElement.clientHeight) {
                            if (0 === this._eventElement.scrollTop) this._eventElement.scrollTop = 1;
                            if (this._eventElement.scrollTop === this._eventElement.scrollHeight - this._eventElement.clientHeight) this._eventElement.scrollTop = this._eventElement.scrollHeight - this._eventElement.clientHeight - 1;
                        }
                        this.allowUp = this._eventElement.scrollTop > 0;
                        this.allowDown = this._eventElement.scrollTop < this._eventElement.scrollHeight - this._eventElement.clientHeight;
                        this.lastY = e.changedTouches[0].pageY;
                    }
                }
            }
            touchMove(e) {
                const targetElement = e.target.closest(`.${this.options.activeClass}`);
                if (isMobile.iOS()) {
                    let up = e.changedTouches[0].pageY > this.lastY;
                    let down = !up;
                    this.lastY = e.changedTouches[0].pageY;
                    if (targetElement) if (up && this.allowUp || down && this.allowDown) e.stopPropagation(); else if (e.cancelable) e.preventDefault();
                }
                if (!this.clickOrTouch || e.target.closest(this.options.noEventSelector)) return;
                let yCoord = this._yP - e.changedTouches[0].pageY;
                this.checkScroll(yCoord, targetElement);
                if (this.goScroll && Math.abs(yCoord) > 20) this.choiceOfDirection(yCoord);
            }
            touchUp(e) {
                this._eventElement.removeEventListener("touchend", this.events.touchup);
                this._eventElement.removeEventListener("touchcancel", this.events.touchup);
                this._eventElement.removeEventListener("touchmove", this.events.touchmove);
                return this.clickOrTouch = false;
            }
            transitionend(e) {
                if (e.target.closest(this.options.selectorSection)) {
                    this.stopEvent = false;
                    this.wrapper.classList.remove(this.options.wrapperAnimatedClass);
                }
            }
            wheel(e) {
                if (e.target.closest(this.options.noEventSelector)) return;
                const yCoord = e.deltaY;
                const targetElement = e.target.closest(`.${this.options.activeClass}`);
                this.checkScroll(yCoord, targetElement);
                if (this.goScroll) this.choiceOfDirection(yCoord);
            }
            choiceOfDirection(direction) {
                this.stopEvent = true;
                if (0 === this.activeSectionId && direction < 0 || this.activeSectionId === this.sections.length - 1 && direction > 0) this.stopEvent = false;
                if (direction > 0 && false !== this.nextSection) this.activeSectionId = this.activeSectionId + 1 < this.sections.length ? ++this.activeSectionId : this.activeSectionId; else if (direction < 0 && false !== this.previousSection) this.activeSectionId = this.activeSectionId - 1 >= 0 ? --this.activeSectionId : this.activeSectionId;
                if (this.stopEvent) this.switchingSection();
            }
            switchingSection(idSection = this.activeSectionId) {
                this.activeSectionId = idSection;
                this.wrapper.classList.add(this.options.wrapperAnimatedClass);
                this.wrapper.addEventListener("transitionend", this.events.transitionEnd);
                this.removeClasses();
                this.setClasses();
                this.setStyle();
                if (this.options.bullets) this.setActiveBullet(this.activeSectionId);
                this.options.onSwitching(this);
                document.dispatchEvent(new CustomEvent("fpswitching", {
                    detail: {
                        fp: this
                    }
                }));
            }
            setBullets() {
                this.bulletsWrapper = document.querySelector(`.${this.options.bulletsClass}`);
                if (!this.bulletsWrapper) {
                    const bullets = document.createElement("div");
                    bullets.classList.add(this.options.bulletsClass);
                    this.wrapper.append(bullets);
                    this.bulletsWrapper = bullets;
                }
                if (this.bulletsWrapper) for (let index = 0; index < this.sections.length; index++) {
                    const span = document.createElement("span");
                    span.classList.add(this.options.bulletClass);
                    this.bulletsWrapper.append(span);
                }
            }
            setZIndex() {
                let zIndex = this.sections.length;
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.style.zIndex = zIndex;
                    --zIndex;
                }
            }
            removeZIndex() {
                for (let index = 0; index < this.sections.length; index++) {
                    const section = this.sections[index];
                    section.style.zIndex = "";
                }
            }
        }
        if (document.querySelector("[data-fp]")) modules_flsModules.fullpage = new FullPage(document.querySelector("[data-fp]"), "");
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if ("click" === e.type) {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        gotoblock_gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if ("watcherCallback" === e.type && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if ("navigator" === targetElement.dataset.watch) {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoblock_gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        const blocks = document.querySelectorAll("section");
        const header = document.querySelector("header");
        document.addEventListener("watcherCallback", (function(e) {
            const entry = e.detail.entry;
            const targetElement = entry.target;
            blocks.forEach((block => {
                if (targetElement.classList.contains("_watcher-view") && targetElement.classList.contains("sixth-block")) {
                    block.classList.add("bg");
                    header.classList.add("bg");
                } else {
                    block.classList.remove("bg");
                    header.classList.remove("bg");
                }
            }));
        }));
        const wpcf7Elm = document.querySelector(".wpcf7");
        if (wpcf7Elm) wpcf7Elm.addEventListener("wpcf7mailsent", (() => {
            modules_flsModules.popup.close("#form");
            setTimeout((() => {
                modules_flsModules.popup.open("#thanks");
            }), 500);
        }));
        window["FLS"] = false;
        isWebp();
        spollers();
        pageNavigation();
    })();
})();