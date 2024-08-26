System.register("chunks:///_virtual/XpRewardSettings.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts", "./LevelingUpEnums.ts"], (function(e) {
    "use strict";
    var t, n, r, s, i, o, a, d, u;
    return {
        setters: [function(e) {
            t = e.defineProperty
        }
        , function(e) {
            n = e.cclegacy,
            r = e.game,
            s = e.Game,
            i = e.resources,
            o = e.JsonAsset
        }
        , function(e) {
            a = e.logger
        }
        , function(e) {
            d = e.projectEvent
        }
        , function(e) {
            u = e.LevelingUpEvents
        }
        ],
        execute: function() {
            n._RF.push({}, "00248b3dzhGZoJVvbWzb2q+", "XpRewardSettings", void 0);
            var g = e("XpRewardSettings", function() {
                function e() {
                    var e = this;
                    t(this, "rewards", []),
                    r.on(s.EVENT_GAME_INITED, (function() {
                        i.load("Settings/XpRewardSettings", o, null, e.onLoadComplete.bind(e))
                    }
                    ), this)
                }
                var n = e.prototype;
                return n.getXp = function(e) {
                    return e > this.rewards.length ? 0 : this.rewards[e - 1]
                }
                ,
                n.onLoadComplete = function(e, t) {
                    this.rewards = t.json.rewards,
                    a.log("Finished loading Xp Reward Settings. " + this.rewards.length + " rewards loaded."),
                    d.emit(u[u.LevelingUp_XpRewardsLoaded])
                }
                ,
                e
            }());
            e("xpRewardSettingsSettings", new g);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-AI-Movement-WanderBehavior.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TS_CharacterMovement.ts", "./AISlimeThreat.ts", "./TS-Slime-AI-Movement-BaseBehavior.ts"], (function(e) {
    "use strict";
    var t, i, n, r, o, a, c, s, l, h, m, v, u, _, d;
    return {
        setters: [function(e) {
            t = e.inheritsLoose,
            i = e.defineProperty,
            n = e.assertThisInitialized,
            r = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            o = e.cclegacy,
            a = e._decorator,
            c = e.Vec3,
            s = e.game,
            l = e.Vec2,
            h = e.math,
            m = e.randomRange,
            v = e.random
        }
        , function(e) {
            u = e.CharacterMovement
        }
        , function(e) {
            _ = e.AISlimeThreat
        }
        , function(e) {
            d = e.TS_Slime_AI_Movement_BaseBehavior
        }
        ],
        execute: function() {
            var f;
            o._RF.push({}, "01985zDO55PNr/YcsRk7T1b", "TS-Slime-AI-Movement-WanderBehavior", void 0);
            var g = a.ccclass;
            a.property,
            e("TS_Slime_AI_Movement_WanderBehavior", g("TS_Slime_AI_Movement_WanderBehavior")(f = function(e) {
                function o() {
                    for (var t, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                        o[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    i(n(t), "_slimeBody", null),
                    i(n(t), "previousForward", null),
                    i(n(t), "_changeDirectionTime", 0),
                    i(n(t), "_direction", new c),
                    i(n(t), "_changingDirection", !1),
                    t
                }
                t(o, e);
                var a = o.prototype;
                return a.getDirection = function(e) {
                    var t = e.slime
                      , i = e.threats;
                    return null === this._slimeBody && (this._slimeBody = t.node.getComponentInChildren(u)),
                    this._slimeBody.canMove ? (!1 === this._changingDirection && s.totalTime / 1e3 >= this._changeDirectionTime && this.changeDirection(t.forward, null, i, t),
                    {
                        direction: this._direction.clone()
                    }) : {
                        direction: null
                    }
                }
                ,
                a.changeDirection = function(e, t, i, n) {
                    for (var o, a = !1, u = !1, d = r(i); !(o = d()).done; ) {
                        var f = o.value;
                        if (f instanceof _ && n.canBeAbsorbed(f.other)) {
                            var g = new l;
                            l.subtract(g, n.Position2D, f.other.Position2D);
                            var S = new c;
                            c.cross(S, new c(g.x,0,g.y), e),
                            S.y > 0 ? u = !0 : S.y < 0 && (a = !0)
                        }
                    }
                    var T = h.toRadian(m(5, 90));
                    u && a ? T = 0 : (u || v() <= .5) && (T *= -1);
                    var p = new c;
                    c.rotateY(p, e, c.ZERO, T),
                    this._direction = p,
                    this._changeDirectionTime = s.totalTime / 1e3 + m(.5, 2.5)
                }
                ,
                o
            }(d)) || f);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SpriteHelper.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, r, n, i, o, p, s;
    return {
        setters: [function(e) {
            t = e.inheritsLoose,
            r = e.defineProperty,
            n = e.assertThisInitialized
        }
        , function(e) {
            i = e.cclegacy,
            o = e._decorator,
            p = e.Sprite,
            s = e.Component
        }
        ],
        execute: function() {
            var c;
            i._RF.push({}, "028afSgFyBL+LXV3sQ6a3xF", "SpriteHelper", void 0);
            var a = o.ccclass
              , l = (o.property,
            o.requireComponent);
            e("SpriteHelper", a("SpriteHelper")(c = l(p)(c = function(e) {
                function i() {
                    for (var t, i = arguments.length, o = new Array(i), p = 0; p < i; p++)
                        o[p] = arguments[p];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    r(n(t), "_sprite", null),
                    t
                }
                t(i, e);
                var o = i.prototype;
                return o.onLoad = function() {
                    this._sprite = this.node.getComponent(p)
                }
                ,
                o.enableSprite = function() {
                    this._sprite.enabled = !0
                }
                ,
                o.disableSprite = function() {
                    this._sprite.enabled = !1
                }
                ,
                i
            }(s)) || c) || c);
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/FrustumTarget.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./TS-Camera-Gameplay.ts"], (function(e) {
    "use strict";
    var r, n, t, i, s, o, a, u, c, h, d, l, _, g, m, p;
    return {
        setters: [function(e) {
            r = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            t = e.initializerDefineProperty,
            i = e.assertThisInitialized,
            s = e.defineProperty,
            o = e.createClass
        }
        , function(e) {
            a = e.cclegacy,
            u = e._decorator,
            c = e.Node,
            h = e.EventHandler,
            d = e.SkinnedMeshRenderer,
            l = e.Vec3,
            _ = e.view,
            g = e.Component
        }
        , function(e) {
            m = e.logger
        }
        , function(e) {
            p = e.TS_Camera_Gameplay
        }
        ],
        execute: function() {
            var f, b, y, w, v, C, x, z, E, M, I;
            a._RF.push({}, "03519Y5qUtDP6onUrzC3DHQ", "FrustumTarget", void 0);
            var R = u.ccclass
              , T = u.property
              , D = (e("FrustumTarget", (f = R("FrustumTarget"),
            b = T({
                type: [c],
                visible: !0
            }),
            y = T({
                visible: !0
            }),
            w = T({
                type: [h],
                visible: !0
            }),
            v = T({
                type: [h],
                visible: !0
            }),
            f((z = r((x = function(e) {
                function r() {
                    for (var r, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
                        o[a] = arguments[a];
                    return r = e.call.apply(e, [this].concat(o)) || this,
                    t(i(r), "_debugNodes", z, i(r)),
                    t(i(r), "_debug", E, i(r)),
                    t(i(r), "_onEnterCamera", M, i(r)),
                    t(i(r), "_onLeaveCamera", I, i(r)),
                    s(i(r), "_renderer", null),
                    s(i(r), "_bounds", null),
                    s(i(r), "_wasInsideCamera", !0),
                    r
                }
                n(r, e);
                var o = r.prototype;
                return o.update = function(e) {
                    if (this._bounds) {
                        this._debug && this.placeDebugNodes();
                        var r = this.isInsideCamera();
                        r && !this._wasInsideCamera ? h.emitEvents(this._onEnterCamera) : !r && this._wasInsideCamera && h.emitEvents(this._onLeaveCamera),
                        this._wasInsideCamera = r
                    }
                }
                ,
                o.findRenderer = function(e) {
                    this._renderer = e.getComponentInChildren(d),
                    this._renderer ? this.updateBounds() : m.log("Unable to find slime renderer!")
                }
                ,
                o.updateBounds = function() {
                    this._bounds = new D(this._renderer.mesh.struct.minPosition,this._renderer.mesh.struct.maxPosition),
                    this._debug && m.log("Mesh: " + this._renderer.mesh.name + " Bounds: " + this._bounds.min + " and " + this._bounds.max)
                }
                ,
                o.placeDebugNodes = function() {
                    if (this._debugNodes.length > 0) {
                        var e = new D(l.ZERO,l.ZERO);
                        D.transformMatrix(e, this._bounds, this._renderer.node.worldMatrix);
                        for (var r = 0; r < e.length; r++)
                            this._debugNodes[r].worldPosition = e.getCorner(r)
                    }
                }
                ,
                o.isInsideCamera = function() {
                    var e = new D(l.ZERO,l.ZERO);
                    D.transformMatrix(e, this._bounds, this._renderer.node.worldMatrix);
                    for (var r = _.getFrameSize(), n = 0; n < e.length; n++) {
                        var t = new l(0,0,0);
                        if (p.instance.Camera.worldToScreen(e.getCorner(n), t),
                        this._debug && m.log("Checking corner: " + e.getCorner(n) + ". Screen coords: " + t),
                        t.x > 0 && t.x < r.width && t.y > 0 && t.y < r.height)
                            return !0
                    }
                    return !1
                }
                ,
                r
            }(g)).prototype, "_debugNodes", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            E = r(x.prototype, "_debug", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            M = r(x.prototype, "_onEnterCamera", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            I = r(x.prototype, "_onLeaveCamera", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            C = x)) || C)),
            function() {
                function e(e, r) {
                    s(this, "_corners", []),
                    this._corners.push(new l(e)),
                    this._corners.push(new l(r.x,e.y,e.z)),
                    this._corners.push(new l(r.x,e.y,r.z)),
                    this._corners.push(new l(e.x,e.y,r.z)),
                    this._corners.push(new l(e.x,r.y,e.z)),
                    this._corners.push(new l(r.x,r.y,e.z)),
                    this._corners.push(new l(r)),
                    this._corners.push(new l(e.x,r.y,r.z))
                }
                return e.transformMatrix = function(e, r, n) {
                    for (var t = 0; t < r._corners.length; t++) {
                        var i = new l(0,0,0);
                        l.transformMat4(i, r._corners[t], n),
                        e._corners[t] = i
                    }
                }
                ,
                e.prototype.getCorner = function(e) {
                    return this._corners[e]
                }
                ,
                o(e, [{
                    key: "min",
                    get: function() {
                        return this._corners[0]
                    }
                }, {
                    key: "max",
                    get: function() {
                        return this._corners[6]
                    }
                }, {
                    key: "length",
                    get: function() {
                        return this._corners.length
                    }
                }]),
                e
            }());
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AudioListener.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./env", "./Logger.ts"], (function(e) {
    "use strict";
    var i, t, n, r, o, s, a, c, l, u, h, g, d, p, b, m, f, D;
    return {
        setters: [function(e) {
            i = e.defineProperty,
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            r = e.initializerDefineProperty,
            o = e.assertThisInitialized,
            s = e.createClass
        }
        , function(e) {
            a = e.cclegacy,
            c = e._decorator,
            l = e.CCFloat,
            u = e.CCBoolean,
            h = e.Node,
            g = e.MeshRenderer,
            d = e.Color,
            p = e.Vec3,
            b = e.Component
        }
        , function(e) {
            m = e.DEBUG
        }
        , function(e) {
            f = e.logger,
            D = e.LogCategory
        }
        ],
        execute: function() {
            var C, y, v, w, L, _, x, P, z, A, E, k, F;
            a._RF.push({}, "03e27UIeUhPkbnm9lwYkGFi", "AudioListener", void 0);
            var R = c.ccclass
              , S = c.property;
            e("AudioListener", (C = R("AudioListener"),
            y = S(l),
            v = S(l),
            w = S(u),
            L = S([h]),
            C((F = k = function(e) {
                function i() {
                    for (var i, t = arguments.length, n = new Array(t), s = 0; s < t; s++)
                        n[s] = arguments[s];
                    return i = e.call.apply(e, [this].concat(n)) || this,
                    r(o(i), "minDistance", P, o(i)),
                    r(o(i), "maxDistance", z, o(i)),
                    r(o(i), "showDebug", A, o(i)),
                    r(o(i), "debugCircles", E, o(i)),
                    i
                }
                n(i, e);
                var t = i.prototype;
                return t.onEnable = function() {
                    i._instance = this,
                    this.debugCircles[0].active = this.showDebug && m,
                    this.debugCircles[1].active = this.showDebug && m,
                    this.debugCircles[0].setWorldScale(2 * this.minDistance, 2 * this.minDistance, 2 * this.minDistance),
                    this.debugCircles[1].setWorldScale(2 * this.maxDistance, 2 * this.maxDistance, 2 * this.maxDistance),
                    this.debugCircles[0].getComponent(g).material.setProperty("color", d.GREEN),
                    this.debugCircles[1].getComponent(g).material.setProperty("color", d.YELLOW)
                }
                ,
                t.onDisable = function() {
                    i._instance == this && (i._instance = null)
                }
                ,
                t.getVolumeScale = function(e) {
                    var i = p.distance(e, this.node.worldPosition);
                    if (f.log("Distance from " + e + " to " + this.node.worldPosition + " = " + i, D.Audio),
                    i >= this.maxDistance)
                        return 0;
                    if (i <= this.minDistance)
                        return 1;
                    var t = this.maxDistance - this.minDistance;
                    return (i -= this.minDistance) / t
                }
                ,
                s(i, null, [{
                    key: "instance",
                    get: function() {
                        return i._instance
                    }
                }]),
                i
            }(b),
            i(k, "_instance", void 0),
            P = t((x = F).prototype, "minDistance", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 2
                }
            }),
            z = t(x.prototype, "maxDistance", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 30
                }
            }),
            A = t(x.prototype, "showDebug", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            E = t(x.prototype, "debugCircles", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            _ = x)) || _));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameOverLevelDisplayDirector.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./LevelingUpEnums.ts", "./ENUM-GameEvents.ts", "./PlayerLevelSettings.ts", "./PlayerPurseController.ts", "./PlayerLevelController.ts", "./GameOverLevelDisplay.ts"], (function(e) {
    "use strict";
    var t, i, l, n, a, r, p, o, s, c, v, u, d, y, h;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            l = e.initializerDefineProperty,
            n = e.assertThisInitialized,
            a = e.defineProperty
        }
        , function(e) {
            r = e.cclegacy,
            p = e._decorator,
            o = e.Component
        }
        , function(e) {
            s = e.projectEvent
        }
        , function(e) {
            c = e.LevelingUpEvents
        }
        , function(e) {
            v = e.GameEvents
        }
        , function(e) {
            u = e.levelingSettings
        }
        , function(e) {
            d = e.PlayerPurseController
        }
        , function(e) {
            y = e.PlayerLevelController
        }
        , function(e) {
            h = e.GameOverLevelDisplay
        }
        ],
        execute: function() {
            var f, U, _, L, b;
            r._RF.push({}, "04734e5Zp1KiYseHUCwDl6y", "GameOverLevelDisplayDirector", void 0);
            var g, m = p.ccclass, k = p.property;
            e("GameOverLevelDisplayDirector", (f = m("GameOverLevelDisplayDirector"),
            U = k({
                type: h,
                visible: !0
            }),
            f((b = t((L = function(e) {
                function t() {
                    for (var t, i = arguments.length, r = new Array(i), p = 0; p < i; p++)
                        r[p] = arguments[p];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    l(n(t), "_display", b, n(t)),
                    a(n(t), "_operationsSequence", []),
                    a(n(t), "_levelUpCallback", void 0),
                    a(n(t), "_xpUpdateCallback", void 0),
                    t
                }
                i(t, e);
                var r = t.prototype;
                return r.onEnable = function() {
                    this._display.setValues(y.level, y.xp, d.coins)
                }
                ,
                r.start = function() {
                    var e = this;
                    this._levelUpCallback = s.on(c[c.LevelingUp_PlayerLevelUpdated], (function(t) {
                        e._operationsSequence.push(D.levelUpOperation(t))
                    }
                    ), this),
                    this._xpUpdateCallback = s.on(c[c.LevelingUp_PlayerXpUpdated], (function(t, i) {
                        e._operationsSequence.push(D.xpUpdateOperation(t))
                    }
                    ), this),
                    s.on(v[v.Game_Over], this.playFeedback, this)
                }
                ,
                r.onDestroy = function() {
                    s.off(c[c.LevelingUp_PlayerLevelUpdated], this._levelUpCallback, this),
                    this._levelUpCallback = null,
                    s.off(c[c.LevelingUp_PlayerXpUpdated], this._xpUpdateCallback, this),
                    this._xpUpdateCallback = null,
                    s.off(v[v.Game_Over], this.playFeedback, this)
                }
                ,
                r.playFeedback = function() {
                    this.scheduleOnce(this.playNextFeedbackItem.bind(this), 1)
                }
                ,
                r.playNextFeedbackItem = function() {
                    if (0 != this._operationsSequence.length) {
                        var e = this._operationsSequence[0];
                        this._operationsSequence.splice(0, 1),
                        e.operationType == g.UpdateLevel ? this._display.playLevelUp(e.targetLevel, this.playNextFeedbackItem.bind(this)) : e.operationType == g.UpdateXp && this._display.playXpUpdate(e.targetXp, u.getXpRequirementForLevel(y.level + 1), this.playNextFeedbackItem.bind(this))
                    }
                }
                ,
                t
            }(o)).prototype, "_display", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            _ = L)) || _));
            !function(e) {
                e[e.UpdateLevel = 0] = "UpdateLevel",
                e[e.UpdateXp = 1] = "UpdateXp"
            }(g || (g = {}));
            var D = function() {
                function e(e, t, i) {
                    a(this, "operationType", void 0),
                    a(this, "targetLevel", void 0),
                    a(this, "targetXp", void 0),
                    this.operationType = e,
                    this.targetLevel = t,
                    this.targetXp = i
                }
                return e.levelUpOperation = function(t) {
                    return new e(g.UpdateLevel,t,u.getXpRequirementForLevel(t))
                }
                ,
                e.xpUpdateOperation = function(t) {
                    return new e(g.UpdateXp,y.level,t)
                }
                ,
                e
            }();
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SkinSelection-SetModel.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./SkinSelectionEvents.ts", "./SkinSaveController.ts"], (function(e) {
    "use strict";
    var t, n, i, o, l, r, d, s, u, c, a, S, p, _;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.defineProperty,
            i = e.inheritsLoose,
            o = e.initializerDefineProperty,
            l = e.assertThisInitialized,
            r = e.createClass
        }
        , function(e) {
            d = e.cclegacy,
            s = e._decorator,
            u = e.Enum,
            c = e.EventHandler,
            a = e.Component
        }
        , function(e) {
            S = e.projectEvent
        }
        , function(e) {
            p = e.SkinEvents
        }
        , function(e) {
            _ = e.SkinSaveController
        }
        ],
        execute: function() {
            var D, h, I, m, f, k, v, M, C, y, b, q, E, g, N, w;
            d._RF.push({}, "04753kODZ1COq8ujU5QwPzS", "SkinSelection-SetModel", void 0);
            var z, P = s.ccclass, j = s.property;
            !function(e) {
                e[e.None = 0] = "None",
                e[e.EquippedNotSelected = 1] = "EquippedNotSelected",
                e[e.EquippedSelected = 2] = "EquippedSelected",
                e[e.CommonSelected = 3] = "CommonSelected",
                e[e.CommonNotSelected = 4] = "CommonNotSelected"
            }(z || (z = {}));
            var F = e("SkinModelStateEntry", (D = P("SkinModelStateEntry"),
            h = j({
                visible: !0,
                type: u(z)
            }),
            I = j({
                visible: !0,
                type: [c]
            }),
            D((k = t((f = function(e) {
                o(this, "stateID", k, this),
                o(this, "onSetState", v, this),
                this.stateID = e || 0
            }
            ).prototype, "stateID", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return z.None
                }
            }),
            v = t(f.prototype, "onSetState", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            m = f)) || m));
            e("SkinSelection_SetModel", (M = P("SkinSelection_SetModel"),
            C = j({
                visible: !0
            }),
            y = j({
                visible: !0,
                type: [F]
            }),
            M((w = N = function(e) {
                function t() {
                    for (var t, i = arguments.length, r = new Array(i), d = 0; d < i; d++)
                        r[d] = arguments[d];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    o(l(t), "_modelID", E, l(t)),
                    o(l(t), "_skinStates", g, l(t)),
                    n(l(t), "_currentSkinState", null),
                    t
                }
                i(t, e);
                var d = t.prototype;
                return d.onEnable = function() {
                    if (S.on(p[p.Skin_PlayerSkinChanged], this.onSkinChanged, this),
                    !t._equippedModelID) {
                        var e = _.skin.split("-");
                        t._equippedModelID = e[0],
                        t._selectedModelID = e[0]
                    }
                }
                ,
                d.onDisable = function() {
                    S.off(p[p.Skin_PlayerSkinChanged], this.onSkinChanged, this)
                }
                ,
                d.update = function() {
                    var e, n, i, o;
                    t._equippedModelID === this._modelID && t._selectedModelID === this._modelID && (null === (e = this._currentSkinState) || void 0 === e ? void 0 : e.stateID) !== z.EquippedSelected ? this.setCurrentState(z.EquippedSelected) : t._equippedModelID === this._modelID && t._selectedModelID !== this._modelID && (null === (n = this._currentSkinState) || void 0 === n ? void 0 : n.stateID) !== z.EquippedNotSelected ? this.setCurrentState(z.EquippedNotSelected) : t._equippedModelID !== this._modelID && t._selectedModelID === this._modelID && (null === (i = this._currentSkinState) || void 0 === i ? void 0 : i.stateID) !== z.CommonSelected ? this.setCurrentState(z.CommonSelected) : t._equippedModelID !== this._modelID && t._selectedModelID !== this._modelID && (null === (o = this._currentSkinState) || void 0 === o ? void 0 : o.stateID) !== z.CommonNotSelected && this.setCurrentState(z.CommonNotSelected)
                }
                ,
                d.setCurrentState = function(e) {
                    this._currentSkinState = this._skinStates.find((function(t) {
                        return t.stateID === e
                    }
                    )),
                    c.emitEvents(this._currentSkinState.onSetState)
                }
                ,
                d.clicked = function() {
                    S.emit(p[p.Skin_SetModel], this._modelID),
                    t._selectedModelID = this._modelID
                }
                ,
                d.onSkinChanged = function(e) {
                    var n = e.split("-");
                    t._equippedModelID !== n[0] && (t._equippedModelID = n[0])
                }
                ,
                r(t, null, [{
                    key: "selectedModelID",
                    get: function() {
                        return t._selectedModelID
                    }
                }]),
                t
            }(a),
            n(N, "_equippedModelID", null),
            n(N, "_selectedModelID", null),
            E = t((q = w).prototype, "_modelID", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            g = t(q.prototype, "_skinStates", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [new F(0), new F(1)]
                }
            }),
            b = q)) || b));
            d._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AISlimeThreat.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./AIThreat.ts"], (function(e) {
    "use strict";
    var t, r, i, n, a, s, o, h, l, u;
    return {
        setters: [function(e) {
            t = e.inheritsLoose,
            r = e.createClass,
            i = e.defineProperty,
            n = e.assertThisInitialized
        }
        , function(e) {
            a = e.cclegacy,
            s = e.Vec2,
            o = e.math,
            h = e.Vec3,
            l = e.randomRange
        }
        , function(e) {
            u = e.AIThreat
        }
        ],
        execute: function() {
            a._RF.push({}, "053d9JhdJ5ILIOUFzXtSGYq", "AISlimeThreat", void 0);
            var c = e("AISlimeThreat", function(e) {
                function a(t, r) {
                    var s, o = a.getThreatLevel(t, r);
                    return o = Math.round(100 * o) / 100,
                    s = e.call(this, o) || this,
                    i(n(s), "_self", null),
                    i(n(s), "_other", null),
                    s._self = t,
                    s._other = r,
                    s
                }
                return t(a, e),
                a.getThreatLevel = function(e, t) {
                    if (e.canBeAbsorbed(t)) {
                        var r = s.distance(e.Position2D, t.Position2D) - t.radius
                          , i = t.Size - e.Size
                          , n = 1 - 1 / (-.005 * (i * i + 199)) - 1
                          , h = o.lerp(2, a._maxThreatingDistance, n);
                        return 1 - o.clamp(r / h, 0, 1)
                    }
                    return 0
                }
                ,
                a.prototype.recalculateThreat = function() {
                    var e = a.getThreatLevel(this._self, this._other);
                    return e = Math.round(100 * e) / 100,
                    this.threatLevel === e ? this : new a(this.self,this.other)
                }
                ,
                r(a, [{
                    key: "self",
                    get: function() {
                        return this._self
                    }
                }, {
                    key: "other",
                    get: function() {
                        return this._other
                    }
                }, {
                    key: "direction",
                    get: function() {
                        var e = new s;
                        s.subtract(e, this._self.Position2D, this._other.Position2D);
                        var t = new h(e.x,0,e.y)
                          , r = this.directionError.evaluate(1 - this.threatLevel)
                          , i = l(-r, r)
                          , n = o.toRadian(i);
                        return h.rotateY(t, t, h.ZERO, n),
                        t.normalize()
                    }
                }]),
                a
            }(u));
            i(c, "_maxThreatingDistance", 10),
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-SlimeDamageBlink.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./ENUM-GameEvents.ts", "./TS-BattleRoyale-SafeArea.ts", "./AudioManager.ts"], (function(e) {
    "use strict";
    var t, i, r, n, a, o, l, s, u, c, f, _, p, d, h, b, v, m;
    return {
        setters: [function(e) {
            t = e.defineProperty,
            i = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            n = e.initializerDefineProperty,
            a = e.assertThisInitialized,
            o = e.createForOfIteratorHelperLoose,
            l = e.createClass
        }
        , function(e) {
            s = e.cclegacy,
            u = e._decorator,
            c = e.CurveRange,
            f = e.Prefab,
            _ = e.Node,
            p = e.RenderableComponent,
            d = e.Component
        }
        , function(e) {
            h = e.projectEvent
        }
        , function(e) {
            b = e.GameEvents
        }
        , function(e) {
            v = e.SafeAreaEvents
        }
        , function(e) {
            m = e.AudioManager
        }
        ],
        execute: function() {
            var y, g, k, A, S, P, C, B, M, T, V, w, D, O, U, j, z;
            s._RF.push({}, "05d15J3lUpD5JAIXsL9fkKr", "TS-SlimeDamageBlink", void 0);
            var E = u.ccclass
              , F = u.property;
            e("TS_SlimeDamageBlink", (y = E("TS_SlimeDamageBlink"),
            g = F({
                visible: !0
            }),
            k = F({
                type: c,
                visible: !0
            }),
            A = F({
                visible: !0
            }),
            S = F({
                visible: !0
            }),
            P = F({
                visible: !0,
                type: f
            }),
            C = F({
                visible: !0,
                type: _
            }),
            y((z = j = function(e) {
                function i() {
                    for (var i, r = arguments.length, o = new Array(r), l = 0; l < r; l++)
                        o[l] = arguments[l];
                    return i = e.call.apply(e, [this].concat(o)) || this,
                    n(a(i), "_frequency", T, a(i)),
                    n(a(i), "_tintCurve", V, a(i)),
                    n(a(i), "_blinkMaterialParameter", w, a(i)),
                    n(a(i), "_safeAreaParameter", D, a(i)),
                    t(a(i), "_renderers", []),
                    n(a(i), "_outOfSafeAreaSfx", O, a(i)),
                    n(a(i), "_renderNode", U, a(i)),
                    t(a(i), "_on", !1),
                    t(a(i), "_elapsedTime", 0),
                    t(a(i), "_blinkValue", 0),
                    t(a(i), "_period", void 0),
                    t(a(i), "_safeAreaUpdateCallback", void 0),
                    t(a(i), "_currentAudioObject", null),
                    i
                }
                r(i, e);
                var s = i.prototype;
                return s.onEnable = function() {
                    var e = this;
                    this._safeAreaUpdateCallback = h.on(v[v.SafeArea_AreaUpdated], (function(t) {
                        e.safeAreaUpdated(t)
                    }
                    ), this);
                    for (var t, i = o(this._renderNode.children); !(t = i()).done; ) {
                        var r = t.value;
                        r.name.toLowerCase().includes("slime") && this.setModel(r)
                    }
                    h.on(b[b.Game_Victory], this.stopBlink, this)
                }
                ,
                s.update = function(e) {
                    if (this._on) {
                        this._elapsedTime += e;
                        var t = this._tintCurve.evaluate(this._elapsedTime % this._period / this._period, 1);
                        this.blinkValue = t
                    }
                }
                ,
                s.onDisable = function() {
                    this.stopBlink(),
                    h.off(v[v.SafeArea_AreaUpdated], this._safeAreaUpdateCallback),
                    h.off(b[b.Game_Victory], this.stopBlink, this)
                }
                ,
                s.startBlink = function() {
                    this._period = 1 / this._frequency,
                    this.blinkValue = 0,
                    this._on = !0,
                    i._isPlayingSFX || (this._currentAudioObject = m.instance.playByKey(this._outOfSafeAreaSfx),
                    i._isPlayingSFX = !0)
                }
                ,
                s.stopBlink = function() {
                    this._on = !1,
                    this.blinkValue = 0,
                    this._currentAudioObject && (i._isPlayingSFX = !1,
                    this._currentAudioObject.stop(),
                    this._currentAudioObject = null)
                }
                ,
                s.setModel = function(e) {
                    for (var t, i = e.getComponentsInChildren(p), r = o(i); !(t = r()).done; ) {
                        var n = t.value;
                        this._renderers.push(n)
                    }
                }
                ,
                s.safeAreaUpdated = function(e) {
                    for (var t = 0; t < this._renderers.length; t++)
                        this._renderers[t].getMaterialInstance(0).setProperty(this._safeAreaParameter, e)
                }
                ,
                l(i, [{
                    key: "blinkValue",
                    get: function() {
                        return this._blinkValue
                    },
                    set: function(e) {
                        this._blinkValue = e;
                        for (var t = 0; t < this._renderers.length; t++)
                            this._renderers[t].getMaterialInstance(0).setProperty(this._blinkMaterialParameter, this._blinkValue)
                    }
                }]),
                i
            }(d),
            t(j, "_isPlayingSFX", !1),
            T = i((M = z).prototype, "_frequency", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 20
                }
            }),
            V = i(M.prototype, "_tintCurve", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new c
                }
            }),
            w = i(M.prototype, "_blinkMaterialParameter", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "damageTint"
                }
            }),
            D = i(M.prototype, "_safeAreaParameter", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "radius"
                }
            }),
            O = i(M.prototype, "_outOfSafeAreaSfx", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            U = i(M.prototype, "_renderNode", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            B = M)) || B));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-AnimationEvent-Raiser.ts", ["cc"], (function() {
    "use strict";
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }
        ],
        execute: function() {
            t._RF.push({}, "05effdw2QNN1LaBApOa9ooW", "TS-AnimationEvent-Raiser", void 0),
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DailyMissionDataFactory.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var i, o, r, a;
    return {
        setters: [function(t) {
            i = t.inheritsLoose
        }
        , function(t) {
            o = t.cclegacy,
            r = t._decorator,
            a = t.Component
        }
        ],
        execute: function() {
            var s;
            o._RF.push({}, "07205BRGDlLoIgr+FySd4Jb", "DailyMissionDataFactory", void 0);
            var n = r.ccclass;
            r.property,
            t("DailyMissionDataFactory", n("DailyMissionDataFactory")(s = function(t) {
                function o() {
                    return t.apply(this, arguments) || this
                }
                return i(o, t),
                o
            }(a)) || s);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/UIVirtualJoystick.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./TweenCollection.ts", "./VirutalJoystick%20enums.ts"], (function(t) {
    "use strict";
    var i, e, n, o, s, r, a, u, c, l, h, p, d, f, _, y, m, g, v, T, b, C, w, P;
    return {
        setters: [function(t) {
            i = t.applyDecoratedDescriptor,
            e = t.inheritsLoose,
            n = t.initializerDefineProperty,
            o = t.assertThisInitialized,
            s = t.defineProperty,
            r = t.createClass
        }
        , function(t) {
            a = t.cclegacy,
            u = t._decorator,
            c = t.Enum,
            l = t.Camera,
            h = t.UIOpacity,
            p = t.Node,
            d = t.UITransform,
            f = t.input,
            _ = t.Input,
            y = t.Vec3,
            m = t.director,
            g = t.Vec2,
            v = t.screen,
            T = t.Canvas,
            b = t.Component
        }
        , function(t) {
            C = t.projectEvent
        }
        , function(t) {
            w = t.TweenCollection
        }
        , function(t) {
            P = t.VirtualJoystickEvent
        }
        ],
        execute: function() {
            var k, H, E, D, S, O, I, z, R, U, V, A, J, M, L, x, j, N, F, B, G, W, Z;
            a._RF.push({}, "09e1dLFgZhCrL2KX2024O5A", "UIVirtualJoystick", void 0);
            var q, K = u.ccclass, X = u.property;
            !function(t) {
                t[t.ResetPosition = 0] = "ResetPosition",
                t[t.Hide = 1] = "Hide"
            }(q || (q = {}));
            t("UIVirtualJoystick", (k = K("UIVirtualJoystick"),
            H = X({
                type: c(q),
                visible: !0,
                group: {
                    id: "configuration",
                    name: "Configuration"
                },
                formerlySerializedAs: "style"
            }),
            E = X({
                visible: !0,
                group: {
                    id: "configuration",
                    name: "Configuration"
                },
                tooltip: "Leave at 0 if the joystick should not reposition itself when the user hold his finger over it."
            }),
            D = X({
                visible: !0,
                group: {
                    id: "configuration",
                    name: "Configuration"
                },
                tooltip: "Minimum distance in pixels needed to consider the input as a movement"
            }),
            S = X({
                type: l,
                visible: !0,
                group: {
                    id: "components",
                    name: "Components"
                },
                tooltip: "If left blank will try to find a camera in the parent canvas"
            }),
            O = X({
                type: h,
                visible: !0,
                group: {
                    id: "components",
                    name: "Components"
                },
                formerlySerializedAs: "contentOpacity"
            }),
            I = X({
                type: p,
                visible: !0,
                group: {
                    id: "components",
                    name: "Components"
                },
                formerlySerializedAs: "pivot"
            }),
            z = X({
                type: p,
                visible: !0,
                group: {
                    id: "components",
                    name: "Components"
                },
                formerlySerializedAs: "joystickBG"
            }),
            R = X({
                type: w,
                visible: !0,
                group: {
                    id: "fade",
                    name: "Fade Effects"
                },
                formerlySerializedAs: "tweenShow"
            }),
            U = X({
                type: w,
                visible: !0,
                group: {
                    id: "fade",
                    name: "Fade Effects"
                },
                formerlySerializedAs: "tweenHide"
            }),
            V = X({
                visible: !0
            }),
            k((M = i((J = function(t) {
                function i() {
                    for (var i, e = arguments.length, r = new Array(e), a = 0; a < e; a++)
                        r[a] = arguments[a];
                    return i = t.call.apply(t, [this].concat(r)) || this,
                    n(o(i), "_style", M, o(i)),
                    n(o(i), "_timeToReposition", L, o(i)),
                    n(o(i), "_minMovementScreenHeightRatio", x, o(i)),
                    n(o(i), "_camera", j, o(i)),
                    n(o(i), "_contentOpacity", N, o(i)),
                    n(o(i), "_pivot", F, o(i)),
                    n(o(i), "_joystickBG", B, o(i)),
                    n(o(i), "_tweenShow", G, o(i)),
                    n(o(i), "_tweenHide", W, o(i)),
                    n(o(i), "_detectClicksOnCanvas", Z, o(i)),
                    s(o(i), "_radius", 64),
                    s(o(i), "_initialVirtualJoystickPosition", void 0),
                    s(o(i), "_touchData", null),
                    i
                }
                e(i, t);
                var a = i.prototype;
                return a.onLoad = function() {
                    var t = this.node.getComponent(d);
                    t && (this._radius = t.contentSize.width / 2)
                }
                ,
                a.start = function() {
                    f.on(_.EventType.TOUCH_START, this.onTouchStart, this),
                    f.on(_.EventType.TOUCH_MOVE, this.onTouchMove, this),
                    f.on(_.EventType.TOUCH_END, this.onTouchEndOrCancel, this),
                    f.on(_.EventType.TOUCH_CANCEL, this.onTouchEndOrCancel, this),
                    this.node.parent && this.node.setSiblingIndex(this.node.parent.children.length - 1),
                    this._style == q.Hide && (this._contentOpacity.opacity = 0),
                    this._initialVirtualJoystickPosition = new y(this.node.worldPosition)
                }
                ,
                a.onDestroy = function() {
                    f.off(_.EventType.TOUCH_START, this.onTouchStart, this),
                    f.off(_.EventType.TOUCH_MOVE, this.onTouchMove, this),
                    f.off(_.EventType.TOUCH_END, this.onTouchEndOrCancel, this),
                    f.off(_.EventType.TOUCH_CANCEL, this.onTouchEndOrCancel, this)
                }
                ,
                a.update = function(t) {
                    if (this.hasInput) {
                        this.usingReposition && m.getCurrentTime() - this._touchData.lastTime >= 1e3 * this._timeToReposition && this._touchData.updateReferencePosition();
                        var i = this.getNormalizedJoystickPosition();
                        this.updatePivotPosition(i),
                        C.emit(P[P.VistualJoystickPositionUpdated], i)
                    }
                }
                ,
                a.onTouchStart = function(t) {
                    this._touchData || (this._detectClicksOnCanvas || null === t.currentTarget) && (this._touchData = new Q(t.touch.getID(),t.touch.getLocation(),t.touch.lastModified),
                    this.onInputStart())
                }
                ,
                a.onTouchMove = function(t) {
                    this._touchData && this._touchData.id == t.getID() && (g.distance(t.touch.getLocation(), this._touchData.referencePosition) >= v.windowSize.height * this._minMovementScreenHeightRatio && this._touchData.updatePosition(t.touch.getLocation(), t.touch.lastModified))
                }
                ,
                a.onTouchEndOrCancel = function(t) {
                    this._touchData && this._touchData.id == t.getID() && (this._touchData = null,
                    this.onInputEnd())
                }
                ,
                a.onInputStart = function() {
                    var t, i;
                    this._style == q.Hide && (null === (t = this._tweenHide) || void 0 === t || t.stop(),
                    null === (i = this._tweenShow) || void 0 === i || i.play())
                }
                ,
                a.onInputEnd = function() {
                    var t, i;
                    this._style == q.Hide ? (null === (t = this._tweenShow) || void 0 === t || t.stop(),
                    null === (i = this._tweenHide) || void 0 === i || i.play()) : (this.node.setWorldPosition(this._initialVirtualJoystickPosition),
                    this._pivot.setPosition(0, 0, 0))
                }
                ,
                a.updatePivotPosition = function(t) {
                    this.node.setWorldPosition(this.screenToCanvas(this._touchData.referencePosition)),
                    this._pivot.setPosition(t.x * this._radius, t.y * this._radius, 0)
                }
                ,
                a.screenToCanvas = function(t) {
                    var i = new y(t.x,t.y,0)
                      , e = new y;
                    return this.camera.screenToWorld(i, e),
                    e
                }
                ,
                a.getNormalizedJoystickPosition = function() {
                    if (!this._touchData)
                        return new g(0,0);
                    var t = new g(this._touchData.positionDelta);
                    return t.lengthSqr() < this._radius * this._radius ? t.multiplyScalar(1 / this._radius) : t.normalize(),
                    t
                }
                ,
                r(i, [{
                    key: "hasInput",
                    get: function() {
                        return null != this._touchData
                    }
                }, {
                    key: "camera",
                    get: function() {
                        return null == this._camera && (this._camera = this.node.parent.getComponent(T).cameraComponent),
                        this._camera
                    }
                }, {
                    key: "usingReposition",
                    get: function() {
                        return this._timeToReposition > 0
                    }
                }]),
                i
            }(b)).prototype, "_style", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return q.ResetPosition
                }
            }),
            L = i(J.prototype, "_timeToReposition", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            x = i(J.prototype, "_minMovementScreenHeightRatio", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .01
                }
            }),
            j = i(J.prototype, "_camera", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            N = i(J.prototype, "_contentOpacity", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            F = i(J.prototype, "_pivot", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            B = i(J.prototype, "_joystickBG", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            G = i(J.prototype, "_tweenShow", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            W = i(J.prototype, "_tweenHide", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Z = i(J.prototype, "_detectClicksOnCanvas", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            A = J)) || A));
            var Q = function() {
                function t(t, i, e) {
                    s(this, "_id", void 0),
                    s(this, "_positionHistory", []),
                    s(this, "_referencePositionIndex", 0),
                    this._id = t,
                    this.updatePosition(i, e),
                    this._referencePositionIndex = 0
                }
                var i = t.prototype;
                return i.updatePosition = function(t, i) {
                    this._positionHistory.push(new Y(t,i))
                }
                ,
                i.updateReferencePosition = function() {
                    this._referencePositionIndex = this._positionHistory.length - 1
                }
                ,
                r(t, [{
                    key: "id",
                    get: function() {
                        return this._id
                    }
                }, {
                    key: "referencePosition",
                    get: function() {
                        return this._positionHistory[this._referencePositionIndex].position
                    }
                }, {
                    key: "referenceTime",
                    get: function() {
                        return this._positionHistory[this._referencePositionIndex].time
                    }
                }, {
                    key: "lastPosition",
                    get: function() {
                        return this._positionHistory[this._positionHistory.length - 1].position
                    }
                }, {
                    key: "lastTime",
                    get: function() {
                        return this._positionHistory[this._positionHistory.length - 1].time
                    }
                }, {
                    key: "positionDelta",
                    get: function() {
                        return new g(this.lastPosition).subtract(this.referencePosition)
                    }
                }]),
                t
            }()
              , Y = function() {
                function t(t, i) {
                    s(this, "_position", g.ZERO),
                    s(this, "_time", 0),
                    this._position = t,
                    this._time = i
                }
                return r(t, [{
                    key: "position",
                    get: function() {
                        return this._position
                    }
                }, {
                    key: "time",
                    get: function() {
                        return this._time
                    }
                }]),
                t
            }();
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TweenNodePosition.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TweenBase.ts"], (function(t) {
    "use strict";
    var e, i, a, n, o, s, r, u, l;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            a = t.initializerDefineProperty,
            n = t.assertThisInitialized
        }
        , function(t) {
            o = t.cclegacy,
            s = t._decorator,
            r = t.Vec3,
            u = t.tween
        }
        , function(t) {
            l = t.TweenBase
        }
        ],
        execute: function() {
            var h, c, p, d;
            o._RF.push({}, "09f00cyaRdMraH6RbUaiRdA", "TweenNodePosition", void 0);
            var y = s.ccclass
              , v = s.property
              , w = s.menu;
            t("TweenNodePosition", y("TweenNodePosition")(h = w("Tween/Position")((p = e((c = function(t) {
                function e() {
                    for (var e, i = arguments.length, o = new Array(i), s = 0; s < i; s++)
                        o[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(o)) || this,
                    a(n(e), "valueStart", p, n(e)),
                    a(n(e), "valueEnd", d, n(e)),
                    e
                }
                i(e, t);
                var o = e.prototype;
                return o.onLoad = function() {
                    t.prototype.onLoad.call(this),
                    this.useCustomStartValue ? this.target.setPosition(this.valueStart) : this.valueStart.set(this.target.position),
                    this.useRelativeValue ? (this.tweenCache = u(this.target).delay(this.delay).by(this.duration, {
                        position: this.valueEnd
                    }, this.options).repeat(1),
                    this.tweenReverseCache = u(this.target).delay(this.delay).by(this.duration, {
                        position: this.valueStart
                    }, this.options).repeat(1)) : (this.tweenCache = u(this.target).delay(this.delay).to(this.duration, {
                        position: this.valueEnd
                    }, this.options).repeat(1),
                    this.tweenReverseCache = u(this.target).delay(this.delay).to(this.duration, {
                        position: this.valueStart
                    }, this.options).repeat(1))
                }
                ,
                o.reset = function() {
                    this.target.setPosition(this.valueStart)
                }
                ,
                e
            }(l)).prototype, "valueStart", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new r
                }
            }),
            d = e(c.prototype, "valueEnd", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new r(1,1,1)
                }
            }),
            h = c)) || h) || h);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Particle.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var r, e, o, i, n, c, s;
    return {
        setters: [function(t) {
            r = t.inheritsLoose,
            e = t.defineProperty,
            o = t.assertThisInitialized
        }
        , function(t) {
            i = t.cclegacy,
            n = t._decorator,
            c = t.ParticleSystem,
            s = t.Component
        }
        ],
        execute: function() {
            var a;
            i._RF.push({}, "0c5d3ln13dJiYvGTuhGpTgh", "TS-Particle", void 0);
            var l = n.ccclass
              , u = (n.property,
            n.requireComponent);
            t("TS_Particle", l("TS_Particle")(a = u(c)(a = function(t) {
                function i() {
                    for (var r, i = arguments.length, n = new Array(i), c = 0; c < i; c++)
                        n[c] = arguments[c];
                    return r = t.call.apply(t, [this].concat(n)) || this,
                    e(o(r), "_particleSystem", null),
                    r
                }
                r(i, t);
                var n = i.prototype;
                return n.onLoad = function() {
                    this._particleSystem = this.node.getComponent(c)
                }
                ,
                n.setStartColorMin = function(t) {
                    this._particleSystem.startColor.colorMin = t
                }
                ,
                n.setStartColorMax = function(t) {
                    this._particleSystem.startColor.colorMax = t
                }
                ,
                n.setStartColor = function(t) {
                    this._particleSystem.startColor.color = t
                }
                ,
                i
            }(s)) || a) || a);
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DailyMissionsEvents.ts", ["cc"], (function(s) {
    "use strict";
    var i;
    return {
        setters: [function(s) {
            i = s.cclegacy
        }
        ],
        execute: function() {
            var n;
            s("DailyMissionEvents", void 0),
            i._RF.push({}, "0cf68o9+pVO25gb0YlcpmQb", "DailyMissionsEvents", void 0),
            function(s) {
                s[s.None = 0] = "None",
                s[s.DailyMission_SetCurrentMissions = 1] = "DailyMission_SetCurrentMissions"
            }(n || (n = s("DailyMissionEvents", {}))),
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-AI-SkillsManager.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var r, t, i, n, a, l, o, s;
    return {
        setters: [function(e) {
            r = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            i = e.initializerDefineProperty,
            n = e.assertThisInitialized
        }
        , function(e) {
            a = e.cclegacy,
            l = e._decorator,
            o = e.Collider,
            s = e.Component
        }
        ],
        execute: function() {
            var c, u, p, f, _;
            a._RF.push({}, "0f282rEq+FICrYDt4qQXWa7", "TS-AI-SkillsManager", void 0);
            var g = l.ccclass
              , y = l.property;
            e("TS_AI_SkillsManager", (c = g("TS_AI_SkillsManager"),
            u = y({
                visible: !0,
                type: o
            }),
            c((_ = r((f = function(e) {
                function r() {
                    for (var r, t = arguments.length, a = new Array(t), l = 0; l < t; l++)
                        a[l] = arguments[l];
                    return r = e.call.apply(e, [this].concat(a)) || this,
                    i(n(r), "_aIArea", _, n(r)),
                    r
                }
                return t(r, e),
                r
            }(s)).prototype, "_aIArea", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            p = f)) || p));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-SlimeEvents-Listener.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./SlimeEvents.ts", "./TS-Events-Listener.ts"], (function(e) {
    "use strict";
    var t, n, i, s, r, o, l, c, a, u;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            i = e.initializerDefineProperty,
            s = e.assertThisInitialized
        }
        , function(e) {
            r = e.cclegacy,
            o = e._decorator,
            l = e.Enum
        }
        , function(e) {
            c = e.projectEvent
        }
        , function(e) {
            a = e.SlimeEvents
        }
        , function(e) {
            u = e.TS_Events_Listener
        }
        ],
        execute: function() {
            var v, f, p, E, m;
            r._RF.push({}, "0fdf23AXTtH7oNr98KwIs5U", "TS-SlimeEvents-Listener", void 0);
            var S = o.ccclass
              , h = o.property;
            e("TS_SlimeEvents_Listener", (v = S("TS_SlimeEvents_Listener"),
            f = h({
                type: l(a)
            }),
            v((m = t((E = function(e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                        r[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    i(s(t), "slimeEvent", m, s(t)),
                    t
                }
                n(t, e);
                var r = t.prototype;
                return r.onEnable = function() {
                    c.on(a[this.slimeEvent], this.onEventRaised, this)
                }
                ,
                r.onDisable = function() {
                    c.off(a[this.slimeEvent], this.onEventRaised, this)
                }
                ,
                t
            }(u)).prototype, "slimeEvent", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return a.Slime_NewSlime
                }
            }),
            p = E)) || p));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ObjectPool.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var e, o;
    return {
        setters: [function(t) {
            e = t.defineProperty
        }
        , function(t) {
            o = t.cclegacy
        }
        ],
        execute: function() {
            o._RF.push({}, "11492o6PdtKSpWjhHMselFX", "ObjectPool", void 0);
            t("ObjectPool", function() {
                function t(t, o) {
                    void 0 === o && (o = 0),
                    e(this, "elements", []),
                    this.allocator = t;
                    for (var n = 0; n < o; n++)
                        this.elements.push(this.allocator())
                }
                var o = t.prototype;
                return o.get = function() {
                    return this.elements.length > 0 ? this.elements.pop() : this.allocator()
                }
                ,
                o.release = function(t) {
                    this.elements.push(t)
                }
                ,
                t
            }());
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Rotate.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var e, r, i, o, n, a, u, c, l;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            r = t.inheritsLoose,
            i = t.initializerDefineProperty,
            o = t.assertThisInitialized
        }
        , function(t) {
            n = t.cclegacy,
            a = t._decorator,
            u = t.Node,
            c = t.Quat,
            l = t.Component
        }
        ],
        execute: function() {
            var p, s, f, _, d, g, h;
            n._RF.push({}, "11d79q2hF9HbqS6gAgJXh9f", "TS-Rotate", void 0);
            var y = a.ccclass
              , b = a.property;
            t("TS_Rotate", (p = y("TS_Rotate"),
            s = b({
                visible: !0
            }),
            f = b({
                type: u,
                visible: !0
            }),
            p((g = e((d = function(t) {
                function e() {
                    for (var e, r = arguments.length, n = new Array(r), a = 0; a < r; a++)
                        n[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(n)) || this,
                    i(o(e), "_rotSpeed", g, o(e)),
                    i(o(e), "_target", h, o(e)),
                    e
                }
                return r(e, t),
                e.prototype.update = function(t) {
                    var e = new c;
                    c.fromEuler(e, 0, this._rotSpeed * t, 0),
                    this._target.rotate(e)
                }
                ,
                e
            }(l)).prototype, "_rotSpeed", [s], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            h = e(d.prototype, "_target", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            _ = d)) || _));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TweenNodeScale.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TweenBase.ts"], (function(e) {
    "use strict";
    var t, i, a, n, s, r, l, o, u;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            a = e.initializerDefineProperty,
            n = e.assertThisInitialized
        }
        , function(e) {
            s = e.cclegacy,
            r = e._decorator,
            l = e.Vec3,
            o = e.tween
        }
        , function(e) {
            u = e.TweenBase
        }
        ],
        execute: function() {
            var c, h, d, p;
            s._RF.push({}, "12ea43w32ZDAL2+IVCNZlsZ", "TweenNodeScale", void 0);
            var v = r.ccclass
              , w = r.property
              , y = r.menu;
            e("TweenNodeScale", v("TweenNodeScale")(c = y("Tween/Scale")((d = t((h = function(e) {
                function t() {
                    for (var t, i = arguments.length, s = new Array(i), r = 0; r < i; r++)
                        s[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(s)) || this,
                    a(n(t), "valueStart", d, n(t)),
                    a(n(t), "valueEnd", p, n(t)),
                    t
                }
                i(t, e);
                var s = t.prototype;
                return s.onLoad = function() {
                    e.prototype.onLoad.call(this),
                    this.useCustomStartValue ? this.target.setScale(this.valueStart) : this.valueStart.set(this.target.scale),
                    this.initializeTween()
                }
                ,
                s.initializeTween = function() {
                    this.useRelativeValue ? (this.tweenCache = o(this.target).delay(this.delay).by(this.duration, {
                        scale: this.valueEnd
                    }, this.options).repeat(1),
                    this.tweenReverseCache = o(this.target).delay(this.delay).by(this.duration, {
                        scale: this.valueStart
                    }, this.options).repeat(1)) : (this.tweenCache = o(this.target).delay(this.delay).to(this.duration, {
                        scale: this.valueEnd
                    }, this.options).repeat(1),
                    this.tweenReverseCache = o(this.target).delay(this.delay).to(this.duration, {
                        scale: this.valueStart
                    }, this.options).repeat(1))
                }
                ,
                s.reset = function() {
                    this.target.setScale(this.valueStart)
                }
                ,
                s.setValues = function(e, t) {
                    this.valueStart = e,
                    this.valueEnd = t,
                    this.initializeTween()
                }
                ,
                s.setEndValue = function(e) {
                    this.valueEnd = e,
                    this.initializeTween()
                }
                ,
                t
            }(u)).prototype, "valueStart", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new l
                }
            }),
            p = t(h.prototype, "valueEnd", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new l(1,1,1)
                }
            }),
            c = h)) || c) || c);
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-Skill-Shoot.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./SlimeEvents.ts", "./TS_Slime.ts", "./PrefabPool.ts", "./TS-Slime-SkillConfig-Shoot.ts", "./TS-SlimeFood-Bullet.ts"], (function(e) {
    "use strict";
    var t, i, o, n, l, r, s, a, c, u, h, f, S, p, m, y, b, d, _, g, P, v;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            o = e.initializerDefineProperty,
            n = e.assertThisInitialized,
            l = e.defineProperty
        }
        , function(e) {
            r = e.cclegacy,
            s = e._decorator,
            a = e.Prefab,
            c = e.RigidBody,
            u = e.Node,
            h = e.EventHandler,
            f = e.input,
            S = e.Input,
            p = e.Vec3,
            m = e.KeyCode,
            y = e.Component
        }
        , function(e) {
            b = e.projectEvent
        }
        , function(e) {
            d = e.SlimeEvents
        }
        , function(e) {
            _ = e.TS_Slime
        }
        , function(e) {
            g = e.PrefabPool
        }
        , function(e) {
            P = e.TS_Slime_SkillConfig_Shoot
        }
        , function(e) {
            v = e.TS_SlimeFood_Bullet
        }
        ],
        execute: function() {
            var z, T, D, k, E, C, R, w, B, K, I, F, Y, L, N;
            r._RF.push({}, "161b4kJT95DkrpxYg3sCEYb", "TS-Slime-Skill-Shoot", void 0);
            var j = s.ccclass
              , x = s.property;
            e("TS_Slime_Skill_Shoot", (z = j("TS_Slime_Skill_Shoot"),
            T = x(_),
            D = x(a),
            k = x(a),
            E = x(c),
            C = x(u),
            R = x({
                type: [h],
                visible: !0
            }),
            z((K = t((B = function(e) {
                function t() {
                    for (var t, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
                        r[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    o(n(t), "slime", K, n(t)),
                    o(n(t), "configPrefab", I, n(t)),
                    l(n(t), "config", null),
                    o(n(t), "bulletPrefab", F, n(t)),
                    o(n(t), "slimeBody", Y, n(t)),
                    o(n(t), "slimeDirection", L, n(t)),
                    o(n(t), "_onShoot", N, n(t)),
                    l(n(t), "_shootReady", !1),
                    t
                }
                i(t, e);
                var r = t.prototype;
                return r.start = function() {
                    g.instance.initialize(this.bulletPrefab);
                    var e = this.configPrefab.data;
                    this.config = e.getComponent(P),
                    f.on(S.EventType.KEY_DOWN, this.onKeyPressed, this),
                    b.on(d[d.Slime_PlayerShootClicked], this.shoot, this)
                }
                ,
                r.onDestroy = function() {
                    f.off(S.EventType.KEY_DOWN, this.onKeyPressed, this),
                    b.on(d[d.Slime_PlayerShootClicked], this.shoot, this)
                }
                ,
                r.update = function(e) {
                    this._shootReady && !this.canShoot() ? (this._shootReady = !1,
                    this.slime.playerID.includes("player") && b.emit(d[d.Slime_PlayerShootNotReady])) : !this._shootReady && this.canShoot() && (this._shootReady = !0,
                    this.slime.playerID.includes("player") && b.emit(d[d.Slime_PlayerShootReady]))
                }
                ,
                r.canShoot = function() {
                    return this.slime.Size >= this.config.MinSize
                }
                ,
                r.shoot = function() {
                    var e = this;
                    if (this.canShoot()) {
                        this.slime.decrease(this.config.BulletSize);
                        var t = g.instance.getInScene(this.bulletPrefab);
                        t.setPosition(this.slime.node.position),
                        t.setRotation(this.slimeDirection.rotation),
                        t.getComponent(v).initialize(this.slime.node.position, (function() {
                            g.instance.put(e.bulletPrefab, t)
                        }
                        ), this.slime);
                        var i = t.getComponent(c)
                          , o = new p;
                        this.slimeBody.getLinearVelocity(o),
                        i.setLinearVelocity(new p(o.x,0,o.z));
                        var n = this.slimeDirection.forward;
                        i.applyImpulse(n.multiplyScalar(this.config.ShootForce)),
                        h.emitEvents(this._onShoot)
                    }
                }
                ,
                r.onKeyPressed = function(e) {
                    e.keyCode === m.KEY_W && this.shoot()
                }
                ,
                t
            }(y)).prototype, "slime", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            I = t(B.prototype, "configPrefab", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            F = t(B.prototype, "bulletPrefab", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Y = t(B.prototype, "slimeBody", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            L = t(B.prototype, "slimeDirection", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            N = t(B.prototype, "_onShoot", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            w = B)) || w));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AIError.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Range.ts"], (function(e) {
    "use strict";
    var n, r, t, i;
    return {
        setters: [function(e) {
            n = e.defineProperty
        }
        , function(e) {
            r = e.cclegacy,
            t = e.math
        }
        , function(e) {
            i = e.Range
        }
        ],
        execute: function() {
            r._RF.push({}, "16bf3qlF8NPUZAwqEHXyJgR", "AIError", void 0);
            e("AIError", function() {
                function e(e, r) {
                    n(this, "_range", new i(0,0)),
                    this._range = new i(e,r)
                }
                return e.prototype.evaluate = function(e) {
                    return t.lerp(this._range.Min, this._range.Max, e)
                }
                ,
                e
            }());
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/IVelocity2D.ts", ["cc"], (function(t) {
    "use strict";
    var c;
    return {
        setters: [function(t) {
            c = t.cclegacy
        }
        ],
        execute: function() {
            t("isIVelocity2D", (function(t) {
                return void 0 !== t.velocity
            }
            )),
            c._RF.push({}, "17281XsYxRMyJsyUOHaQhNT", "IVelocity2D", void 0),
            c._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PlayerLevelSettings.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts", "./LevelingUpEnums.ts", "./PlayerLevelData.ts"], (function(e) {
    "use strict";
    var t, n, l, s, i, r, o, a, v, g, u, c;
    return {
        setters: [function(e) {
            t = e.createClass,
            n = e.defineProperty
        }
        , function(e) {
            l = e.cclegacy,
            s = e.clamp,
            i = e.game,
            r = e.Game,
            o = e.resources,
            a = e.JsonAsset
        }
        , function(e) {
            v = e.logger
        }
        , function(e) {
            g = e.projectEvent
        }
        , function(e) {
            u = e.LevelingUpEvents
        }
        , function(e) {
            c = e.PlayerLevelData
        }
        ],
        execute: function() {
            l._RF.push({}, "178c0mSYFNL/ZFnFv4/gBgN", "PlayerLevelSettings", void 0);
            var L = e("PlayerLevelSettings", function() {
                function e() {
                    var e = this;
                    n(this, "levels", []),
                    i.on(r.EVENT_GAME_INITED, (function() {
                        o.load("Settings/LevelSettings", a, null, e.onLoadComplete.bind(e))
                    }
                    ), this)
                }
                var l = e.prototype;
                return l.getXpRequirementForLevel = function(e) {
                    var t = this.getLevelData(e);
                    return t ? t.xp : 0
                }
                ,
                l.getCoinsForLevel = function(e) {
                    var t = this.getLevelData(e);
                    return t ? t.coinsPrize : 0
                }
                ,
                l.onLoadComplete = function(e, t) {
                    for (var n = t.json.levels.length, l = 0; l < n; l++)
                        this.levels.push(new c(t.json.levels[l]));
                    v.log("Finished loading Player Level Settings. " + this.levels.length + " settings loaded."),
                    g.emit(u[u.LevelingUp_LevelingSettingsLoaded])
                }
                ,
                l.getLevelData = function(e) {
                    if (e <= this.startingLevel)
                        return null;
                    var t = s(e, this.startingLevel + 1, this.levels.length + this.startingLevel);
                    return this.levels[t - this.startingLevel - 1]
                }
                ,
                t(e, [{
                    key: "startingLevel",
                    get: function() {
                        return 1
                    }
                }]),
                e
            }());
            e("levelingSettings", new L);
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS_CharacterMovemenAISteering.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TS_Slime.ts", "./TS_CharacterMovement.ts", "./TS_CharacterMovementBaseSteering.ts", "./TS-Slime-AI-Brain.ts", "./AISteeringOption.ts"], (function(e) {
    "use strict";
    var i, t, r, n, o, a, l, s, c, u, h, g, v, _, S, p;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            r = e.initializerDefineProperty,
            n = e.assertThisInitialized,
            o = e.defineProperty,
            a = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            l = e.cclegacy,
            s = e._decorator,
            c = e.Vec3,
            u = e.Vec2,
            h = e.EventHandler
        }
        , function(e) {
            g = e.TS_Slime
        }
        , function(e) {
            v = e.CharacterMovement
        }
        , function(e) {
            _ = e.TS_CharacterMovementBaseSteering
        }
        , function(e) {
            S = e.TS_Slime_AI_Brain
        }
        , function(e) {
            p = e.AISteeringOption
        }
        ],
        execute: function() {
            var d, b, f, m, I, y, A, C, T, M;
            l._RF.push({}, "1861clCAZ9C7JZUvKed0AQr", "TS_CharacterMovemenAISteering", void 0);
            var R = s.ccclass
              , w = s.property
              , B = s.executionOrder;
            e("TS_CharacterMovementAISteering", (d = R("TS_CharacterMovementAISteering"),
            b = B(5),
            f = w({
                type: g,
                visible: !0
            }),
            m = w({
                type: [p],
                visible: !0
            }),
            I = w({
                visible: !0,
                type: S
            }),
            d(y = b((C = i((A = function(e) {
                function i() {
                    for (var i, t = arguments.length, a = new Array(t), l = 0; l < t; l++)
                        a[l] = arguments[l];
                    return i = e.call.apply(e, [this].concat(a)) || this,
                    r(n(i), "_slime", C, n(i)),
                    o(n(i), "_slimeMovement", null),
                    r(n(i), "_behaviors", T, n(i)),
                    o(n(i), "_currentTargetSteering", null),
                    o(n(i), "_steeringTween", null),
                    r(n(i), "_aIBrain", M, n(i)),
                    o(n(i), "_cloneAISteering", null),
                    o(n(i), "_isClone", !1),
                    o(n(i), "_previousSteering", null),
                    o(n(i), "_rotSpeed", 5),
                    i
                }
                t(i, e);
                var l = i.prototype;
                return l.onLoad = function() {
                    this._behaviors = this._behaviors.sort((function(e, i) {
                        return e.priority < i.priority ? 1 : e.priority > i.priority ? -1 : 0
                    }
                    )),
                    this._slimeMovement = this._slime.getComponentInChildren(v)
                }
                ,
                l.lateUpdate = function(e) {
                    if (this._isClone && null === this._cloneAISteering._slime && (this._isClone = !1,
                    this._cloneAISteering = null),
                    !this._isClone && this._slimeMovement.canMove) {
                        for (var i = this._aIBrain.brainState, t = [], r = 0; r < this._behaviors.length; r++) {
                            var n, o, a, l, s = this._behaviors[r].behavior.getDirection(i);
                            if (i.isBoosting)
                                if (null !== s.direction && i.behavior === this._behaviors[r].behavior.node.name)
                                    t.push({
                                        behavior: this._behaviors[r].behavior.node.name,
                                        direction: s.direction,
                                        dangerRatio: null !== (n = s.dangerRatio) && void 0 !== n ? n : 0,
                                        target: null !== (o = s.target) && void 0 !== o ? o : null
                                    });
                                else
                                    this._behaviors[r].behavior.getDirection(i);
                            else if (null !== s.direction)
                                t.push({
                                    behavior: this._behaviors[r].behavior.node.name,
                                    direction: s.direction,
                                    dangerRatio: null !== (a = s.dangerRatio) && void 0 !== a ? a : 0,
                                    target: null !== (l = s.target) && void 0 !== l ? l : null
                                })
                        }
                        var u = this.calculateSteeringData(t, e);
                        this._previousSteering = new c(u.steering.x,0,u.steering.y),
                        this.setSteering(u),
                        null !== this._cloneAISteering && null !== this._cloneAISteering.node && this._cloneAISteering.setSteering(u)
                    }
                }
                ,
                l.calculateSteeringData = function(e, i) {
                    var t = null
                      , r = 0
                      , n = ""
                      , o = new c;
                    if (e.length > 1)
                        for (var l, s = a(e); !(l = s()).done; ) {
                            var h = l.value;
                            o.add(h.direction.normalize().multiplyScalar(h.dangerRatio)),
                            (null === t || h.dangerRatio > r) && (t = h.target,
                            r = h.dangerRatio,
                            n = h.behavior)
                        }
                    else
                        o = e[0].direction,
                        n = e[0].behavior,
                        r = e[0].dangerRatio,
                        t = e[0].target;
                    if (o = o.normalize(),
                    this._previousSteering) {
                        var g = c.angle(o, this._previousSteering)
                          , v = new c;
                        c.cross(v, this._previousSteering, o),
                        v.y > 0 ? c.rotateY(o, this._previousSteering, c.ZERO, g * i * this._rotSpeed) : c.rotateY(o, this._previousSteering, c.ZERO, -g * i * this._rotSpeed)
                    }
                    return {
                        target: t,
                        steering: new u(o.x,o.z),
                        behavior: n,
                        dangerRatio: r
                    }
                }
                ,
                l.setSteering = function(e) {
                    h.emitEvents(this.onChangedSteering, e)
                }
                ,
                l.setCloneAI = function(e) {
                    this._isClone = !0,
                    e._cloneAISteering = this,
                    this._cloneAISteering = e
                }
                ,
                i
            }(_)).prototype, "_slime", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            T = i(A.prototype, "_behaviors", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            M = i(A.prototype, "_aIBrain", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            y = A)) || y) || y));
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ISafeAreaObject.ts", ["cc"], (function() {
    "use strict";
    var e, c;
    return {
        setters: [function(t) {
            e = t.cclegacy,
            c = t._decorator
        }
        ],
        execute: function() {
            e._RF.push({}, "18f7bQJLZlId7K8jT1dyWnV", "ISafeAreaObject", void 0);
            c.ccclass,
            c.property;
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PunchTweenBase.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts"], (function(t) {
    "use strict";
    var e, n, i, r, a, o, u, s, l, c, h, g, p;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            i = t.initializerDefineProperty,
            r = t.assertThisInitialized,
            a = t.defineProperty,
            o = t.createClass
        }
        , function(t) {
            u = t.cclegacy,
            s = t._decorator,
            l = t.Node,
            c = t.Vec3,
            h = t.EventHandler,
            g = t.Component
        }
        , function(t) {
            p = t.logger
        }
        ],
        execute: function() {
            var f, m, y, b, d, v, w, V, S, z, C, D, _, P, T, M, B, L;
            u._RF.push({}, "1a181DRx0VC2LpN/KLYDv9u", "PunchTweenBase", void 0);
            var x = s.ccclass
              , E = s.property;
            t("PunchTweenBase", (f = x("PunchTweenBase"),
            m = E(l),
            y = E(c),
            b = E({
                min: 0,
                unit: "sec"
            }),
            d = E({
                min: 0,
                unit: "sec"
            }),
            v = E({
                min: 0,
                max: 1
            }),
            w = E({
                type: [h],
                displayOrder: 20
            }),
            V = E({
                type: [h],
                displayOrder: 20
            }),
            f((C = e((z = function(t) {
                function e() {
                    for (var e, n = arguments.length, o = new Array(n), u = 0; u < n; u++)
                        o[u] = arguments[u];
                    return e = t.call.apply(t, [this].concat(o)) || this,
                    i(r(e), "target", C, r(e)),
                    i(r(e), "to", D, r(e)),
                    i(r(e), "delay", _, r(e)),
                    i(r(e), "duration", P, r(e)),
                    i(r(e), "vibrato", T, r(e)),
                    i(r(e), "elasticity", M, r(e)),
                    i(r(e), "onStart", B, r(e)),
                    i(r(e), "onComplete", L, r(e)),
                    a(r(e), "tweenCache", void 0),
                    a(r(e), "_startingValue", void 0),
                    a(r(e), "segmentValues", void 0),
                    a(r(e), "segmentDurations", void 0),
                    e
                }
                n(e, t);
                var u = e.prototype;
                return u.getTarget = function() {
                    return this.target ? this.target : this.node
                }
                ,
                u.play = function() {
                    this.tweenCache && this.stop(),
                    this._startingValue = this.currentValue,
                    this.setup(),
                    this.playSegment(0)
                }
                ,
                u.stop = function() {
                    this.tweenCache.stop(),
                    this.tweenCache = null,
                    this.currentValue = this._startingValue
                }
                ,
                u.playSegment = function(t) {}
                ,
                u.getSegmentValue = function(t) {
                    return this.segmentValues[t]
                }
                ,
                u.getSegmentDuration = function(t) {
                    return this.segmentDurations[t]
                }
                ,
                u.getTweenOptions = function(t) {
                    var e = this
                      , n = {};
                    return n.onStart = function(t) {
                        h.emitEvents(e.onStart, t)
                    }
                    .bind(this),
                    t < this.segmentValues.length - 1 ? n.onComplete = function() {
                        e.playSegment(t + 1)
                    }
                    .bind(this) : n.onComplete = function(t) {
                        h.emitEvents(e.onComplete, t)
                    }
                    .bind(this),
                    n
                }
                ,
                u.setup = function() {
                    var t = this.to.length()
                      , e = Math.max(Math.floor(this.vibrato * this.duration), 2)
                      , n = t / e;
                    this.segmentDurations = new Array(e);
                    for (var i = 0, r = 0; r < e; r++) {
                        var a = (r + 1) / e
                          , o = this.duration * a;
                        i += o,
                        this.segmentDurations[r] = o
                    }
                    for (var u = this.duration / i, s = 0; s < e; s++)
                        this.segmentDurations[s] *= u;
                    var l = new c;
                    c.normalize(l, this.to),
                    this.segmentValues = new Array(e);
                    for (var h = 0; h < e; h++)
                        h < e - 1 ? (this.segmentValues[h] = 0 === h ? this.to : h % 2 != 0 ? this.clampVec3Magnitude(this.to, t * this.elasticity).multiplyScalar(-1) : this.clampVec3Magnitude(this.to, t),
                        t -= n) : this.segmentValues[h] = c.ZERO
                }
                ,
                u.clampVec3Magnitude = function(t, e) {
                    if (t.length() <= e)
                        return new c(t);
                    var n = new c;
                    return c.normalize(n, t),
                    n.multiplyScalar(e)
                }
                ,
                u.printSequence = function(t, e) {
                    for (var n = "", i = 0; i < t.length; i++)
                        n += "[" + t[i] + "]",
                        i < t.length - 1 && (n += ", ");
                    for (var r = "", a = 0; a < e.length; a++)
                        r += "" + e[a],
                        a < e.length - 1 && (r += ", ");
                    p.log("Values: " + n + " Durations: " + r)
                }
                ,
                o(e, [{
                    key: "startingValue",
                    get: function() {
                        return this._startingValue
                    }
                }, {
                    key: "currentValue",
                    get: function() {
                        return null
                    },
                    set: function(t) {}
                }]),
                e
            }(g)).prototype, "target", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            D = e(z.prototype, "to", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new c(1,1,1)
                }
            }),
            _ = e(z.prototype, "delay", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            P = e(z.prototype, "duration", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            T = e(z.prototype, "vibrato", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 10
                }
            }),
            M = e(z.prototype, "elasticity", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            B = e(z.prototype, "onStart", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            L = e(z.prototype, "onComplete", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            S = z)) || S));
            u._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS_Slime_SetModelColor.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TS-Slime-ColorsData.ts"], (function(e) {
    "use strict";
    var o, t, r, i, l, n, s, a, c;
    return {
        setters: [function(e) {
            o = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            r = e.initializerDefineProperty,
            i = e.assertThisInitialized
        }
        , function(e) {
            l = e.cclegacy,
            n = e._decorator,
            s = e.EventHandler,
            a = e.Component
        }
        , function(e) {
            c = e.TS_Slime_ColorsData
        }
        ],
        execute: function() {
            var u, p, _, S, d;
            l._RF.push({}, "1a3618UqwJAoY8Y8z5qOgFR", "TS_Slime_SetModelColor", void 0);
            var f = n.ccclass
              , m = n.property;
            e("TS_Slime_SetModelColor", (u = f("TS_Slime_SetModelColor"),
            p = m({
                visible: !0,
                type: [s]
            }),
            u((d = o((S = function(e) {
                function o() {
                    for (var o, t = arguments.length, l = new Array(t), n = 0; n < t; n++)
                        l[n] = arguments[n];
                    return o = e.call.apply(e, [this].concat(l)) || this,
                    r(i(o), "_setModelColors", d, i(o)),
                    o
                }
                return t(o, e),
                o.prototype.setModel = function(e) {
                    var o = e.getComponent(c);
                    s.emitEvents(this._setModelColors, o)
                }
                ,
                o
            }(a)).prototype, "_setModelColors", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            _ = S)) || _));
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AxisInput.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var n, e, i, r, o, s;
    return {
        setters: [function(t) {
            n = t.inheritsLoose,
            e = t.createClass,
            i = t.defineProperty,
            r = t.assertThisInitialized
        }
        , function(t) {
            o = t.cclegacy,
            s = t.Component
        }
        ],
        execute: function() {
            o._RF.push({}, "1a7167v2EBGjoInPfDd+oHG", "AxisInput", void 0);
            t("AxisInput", function(t) {
                function o() {
                    for (var n, e = arguments.length, o = new Array(e), s = 0; s < e; s++)
                        o[s] = arguments[s];
                    return n = t.call.apply(t, [this].concat(o)) || this,
                    i(r(n), "_horizontal", 0),
                    i(r(n), "_vertical", 0),
                    n
                }
                return n(o, t),
                e(o, [{
                    key: "horizontal",
                    get: function() {
                        return this._horizontal
                    }
                }, {
                    key: "vertical",
                    get: function() {
                        return this._vertical
                    }
                }]),
                o
            }(s));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-WorldEvents-Listener.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./TS-Events-Listener.ts", "./WorldEvents.ts"], (function(e) {
    "use strict";
    var t, n, r, i, o, s, c, a, l, u;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            r = e.initializerDefineProperty,
            i = e.assertThisInitialized
        }
        , function(e) {
            o = e.cclegacy,
            s = e._decorator,
            c = e.Enum
        }
        , function(e) {
            a = e.projectEvent
        }
        , function(e) {
            l = e.TS_Events_Listener
        }
        , function(e) {
            u = e.WorldEvents
        }
        ],
        execute: function() {
            var v, p, f, d, h;
            o._RF.push({}, "1a8ceQmz21HmZ2niBT6Vuz5", "TS-WorldEvents-Listener", void 0);
            var E = s.ccclass
              , _ = s.property;
            e("TS_WorldEvents_Listener", (v = E("TS_WorldEvents_Listener"),
            p = _({
                type: c(u)
            }),
            v((h = t((d = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), s = 0; s < n; s++)
                        o[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    r(i(t), "eventID", h, i(t)),
                    t
                }
                n(t, e);
                var o = t.prototype;
                return o.onEnable = function() {
                    a.on(u[this.eventID], this.onEventRaised, this)
                }
                ,
                o.onDisable = function() {
                    a.off(u[this.eventID], this.onEventRaised, this)
                }
                ,
                t
            }(l)).prototype, "eventID", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return u.World_Changed
                }
            }),
            f = d)) || f));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/BundleLoader.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts"], (function(e) {
    "use strict";
    var n, t, o, u, i, r, l, s, d, a;
    return {
        setters: [function(e) {
            n = e.createClass,
            t = e.defineProperty
        }
        , function(e) {
            o = e.cclegacy,
            u = e.game,
            i = e.Game,
            r = e.assetManager
        }
        , function(e) {
            l = e.logger,
            s = e.LogCategory,
            d = e.LogType
        }
        , function(e) {
            a = e.projectEvent
        }
        ],
        execute: function() {
            o._RF.push({}, "1d256k9D25Bj6AINkfe3CGU", "BundleLoader", void 0);
            e("BundleLoader", function() {
                function e(e, n) {
                    var o = this;
                    t(this, "_bundle", null),
                    t(this, "_onDoneEventType", void 0),
                    u.on(i.EVENT_GAME_INITED, (function() {
                        o._onDoneEventType = n,
                        r.loadBundle(e, o.onLoadComplete.bind(o))
                    }
                    ), this)
                }
                return e.prototype.onLoadComplete = function(e, n) {
                    null != e && l.log(e.message, s.Generic, d.Error),
                    this._bundle = n,
                    l.log("Finished loading " + this._bundle.name + " bundle"),
                    a.emit(this._onDoneEventType)
                }
                ,
                n(e, [{
                    key: "bundle",
                    get: function() {
                        return this._bundle
                    }
                }, {
                    key: "isDataLoaded",
                    get: function() {
                        return null != this._bundle
                    }
                }]),
                e
            }());
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TweenUIOpacity.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./TweenBase.ts"], (function(t) {
    "use strict";
    var e, i, a, n, r, s, o, p, c, u, h, l, y, d;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            a = t.initializerDefineProperty,
            n = t.assertThisInitialized,
            r = t.defineProperty
        }
        , function(t) {
            s = t.cclegacy,
            o = t._decorator,
            p = t.CCInteger,
            c = t.UIOpacity,
            u = t.tween
        }
        , function(t) {
            h = t.logger,
            l = t.LogCategory,
            y = t.LogType
        }
        , function(t) {
            d = t.TweenBase
        }
        ],
        execute: function() {
            var g, v, O, f, w, b, m, C;
            s._RF.push({}, "1eddcq+dFJL6Kd35j8xBAOw", "TweenUIOpacity", void 0);
            var I = o.ccclass
              , S = o.property
              , T = (o.requireComponent,
            o.menu);
            t("TweenUIOpacity", (g = I("TweenUIOpacity"),
            v = T("Tween/UIOpacity"),
            O = S({
                type: p,
                range: [0, 255],
                step: 1,
                slide: !0
            }),
            f = S({
                type: p,
                range: [0, 255],
                step: 1,
                slide: !0
            }),
            g(w = v((m = e((b = function(t) {
                function e() {
                    for (var e, i = arguments.length, s = new Array(i), o = 0; o < i; o++)
                        s[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(s)) || this,
                    a(n(e), "valueStart", m, n(e)),
                    a(n(e), "valueEnd", C, n(e)),
                    r(n(e), "uiOpacity", void 0),
                    e
                }
                i(e, t);
                var s = e.prototype;
                return s.onLoad = function() {
                    t.prototype.onLoad.call(this),
                    this.uiOpacity = this.target.getComponent(c),
                    this.uiOpacity || (h.log("WARNING: target: " + this.target.name + " does not have UIOpacity, adding it, please add at edit time because it is probably better than adding at runtime", l.UI, y.Warning),
                    this.uiOpacity = this.target.addComponent(c)),
                    this.useCustomStartValue ? this.uiOpacity.opacity = this.valueStart : this.valueStart = this.uiOpacity.opacity,
                    this.useRelativeValue ? (this.tweenCache = u(this.uiOpacity).delay(this.delay).by(this.duration, {
                        opacity: this.valueEnd
                    }, this.options).repeat(1),
                    this.tweenReverseCache = u(this.uiOpacity).delay(this.delay).by(this.duration, {
                        opacity: this.valueStart
                    }, this.options).repeat(1)) : (this.tweenCache = u(this.uiOpacity).delay(this.delay).to(this.duration, {
                        opacity: this.valueEnd
                    }, this.options).repeat(1),
                    this.tweenReverseCache = u(this.uiOpacity).delay(this.delay).to(this.duration, {
                        opacity: this.valueStart
                    }, this.options).repeat(1))
                }
                ,
                s.reset = function() {
                    this.uiOpacity && (this.uiOpacity.opacity = this.valueStart)
                }
                ,
                e
            }(d)).prototype, "valueStart", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            C = e(b.prototype, "valueEnd", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 255
                }
            }),
            w = b)) || w) || w));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/QuantityDailyMissionData.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./DailyMissionState.ts", "./DailyMissionData.ts"], (function(t) {
    "use strict";
    var e, a, i, r, n, u, l, s, c, o, V;
    return {
        setters: [function(t) {
            e = t.inheritsLoose,
            a = t.applyDecoratedDescriptor,
            i = t.defineProperty,
            r = t.assertThisInitialized,
            n = t.initializerDefineProperty,
            u = t.createClass
        }
        , function(t) {
            l = t.cclegacy,
            s = t._decorator
        }
        , function(t) {
            c = t.DailyMissionState
        }
        , function(t) {
            o = t.DailyMissionDataSave,
            V = t.DailyMissionData
        }
        ],
        execute: function() {
            var g, y, h, _, f;
            l._RF.push({}, "1fbe314bgZKDJN+oVlJAsBq", "QuantityDailyMissionData", void 0);
            s.ccclass;
            var p = s.property
              , D = t("QuantityDailyMissionDataSave", function(t) {
                function a(e) {
                    var a;
                    return a = t.call(this, e) || this,
                    i(r(a), "_targetValue", 0),
                    i(r(a), "_currentValue", 0),
                    a._targetValue = e.targetValue,
                    a._currentValue = e.currentValue,
                    a
                }
                return e(a, t),
                a
            }(o));
            t("QuantityDailyMissionData", (g = p({
                visible: !0
            }),
            y = p({
                visible: !0
            }),
            _ = a((h = function(t) {
                e(i, t);
                var a = i.prototype;
                function i(e, a, u) {
                    var l;
                    return l = t.call(this, e, a, u) || this,
                    n(r(l), "_targetValue", _, r(l)),
                    n(r(l), "_currentValue", f, r(l)),
                    e instanceof i ? (l._targetValue = e.targetValue,
                    "object" == typeof u && u._currentValue ? l._currentValue = u._currentValue : l._currentValue = e.currentValue) : (l._targetValue = e.value,
                    l._currentValue = 0),
                    l
                }
                return a.createSaveData = function() {
                    return new D(this)
                }
                ,
                a.increase = function(t) {
                    this.currentState === c.InProgress && (this._currentValue = Math.min(this._targetValue, this._currentValue + t),
                    this.currentValue === this.targetValue ? this.missionCompleted() : this.onChange())
                }
                ,
                a.initializeMission = function() {
                    t.prototype.initializeMission.call(this),
                    this._currentValue = 0
                }
                ,
                u(i, [{
                    key: "targetValue",
                    get: function() {
                        return this._targetValue
                    }
                }, {
                    key: "currentValue",
                    get: function() {
                        return this._currentValue
                    }
                }, {
                    key: "displayName",
                    get: function() {
                        return this._displayName.getName(["value"], [this.targetValue], 1 === this.targetValue)
                    }
                }, {
                    key: "currentFillValue",
                    get: function() {
                        return this._currentValue
                    }
                }, {
                    key: "targetFillValue",
                    get: function() {
                        return this._targetValue
                    }
                }, {
                    key: "completed",
                    get: function() {
                        return this._currentValue >= this.targetValue
                    }
                }]),
                i
            }(V)).prototype, "_targetValue", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            f = a(h.prototype, "_currentValue", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            h));
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimationGraphHelper.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./AnimationEnums.ts"], (function(t) {
    "use strict";
    var e, i, n, a, r, o, s, l, u, m, c, h, p, f, _, g, d;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            n = t.initializerDefineProperty,
            a = t.assertThisInitialized,
            r = t.defineProperty,
            o = t.createForOfIteratorHelperLoose,
            s = t.createClass
        }
        , function(t) {
            l = t.cclegacy,
            u = t._decorator,
            m = t.animation,
            c = t.EventTouch,
            h = t.Node,
            p = t.Component
        }
        , function(t) {
            f = t.logger,
            _ = t.LogCategory,
            g = t.LogType
        }
        , function(t) {
            d = t.AnimationVariableType
        }
        ],
        execute: function() {
            var b, A, y, v, T, C, V;
            l._RF.push({}, "2022ebMdchE2pNL1SpqTm8g", "AnimationGraphHelper", void 0);
            var O = u.ccclass
              , R = u.property;
            t("AnimationGraphHelper", (b = O("AnimationGraphHelper"),
            A = R({
                type: m.AnimationController,
                visible: !0
            }),
            y = R({
                visible: !0
            }),
            b((C = e((T = function(t) {
                function e() {
                    for (var e, i = arguments.length, o = new Array(i), s = 0; s < i; s++)
                        o[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(o)) || this,
                    n(a(e), "_animator", C, a(e)),
                    n(a(e), "_debug", V, a(e)),
                    r(a(e), "_lastClipName", null),
                    r(a(e), "_animQueue", []),
                    e
                }
                i(e, t);
                var l = e.prototype;
                return l.start = function() {
                    this.isAnimatorReady()
                }
                ,
                l.update = function() {
                    if (this._animator && (this.isAnimatorReady() && this._animQueue.length > 0 && (this._animQueue[0].call(),
                    this._animQueue.splice(0, 1)),
                    this._debug)) {
                        for (var t, e = this._animator.getCurrentClipStatuses(0), i = !1, n = this.node.name + " - Animation Clip: ", a = o(e); !(t = a()).done; ) {
                            var r = t.value;
                            this._lastClipName !== r.clip.name && (n += r.clip.name,
                            this._lastClipName = r.clip.name,
                            i = !0)
                        }
                        for (var s, l = this._animator.getVariables(), u = o(l); !(s = u()).done; ) {
                            var m = s.value
                              , c = m[0];
                            m[1];
                            n += "\n" + c + " = " + this._animator.getValue(c)
                        }
                        i && f.log(n)
                    }
                }
                ,
                l.onDestroy = function() {
                    this.unscheduleAllCallbacks()
                }
                ,
                l.setTrigger = function(t, e) {
                    var i = this;
                    this.isAnimatorReady() ? t instanceof c ? (this._debug && f.log("Animation clip: Set " + e),
                    this.scheduleOnce((function() {
                        return i._animator.setValue(e, !0)
                    }
                    ), this._frameTime)) : "string" == typeof t ? (this._debug && f.log("Animation clip: Set " + t),
                    this.scheduleOnce((function() {
                        return i._animator.setValue(t, !0)
                    }
                    ), this._frameTime)) : (this._debug && f.log("Animation clip: Set " + e),
                    this.scheduleOnce((function() {
                        return i._animator.setValue(e, !0)
                    }
                    ), this._frameTime)) : this._animQueue.push({
                        call: function() {
                            return i.setTrigger(t, e)
                        }
                    })
                }
                ,
                l.setInt = function(t, e) {
                    var i = this;
                    if (this.isAnimatorReady()) {
                        var n = e.split(",");
                        this._debug && f.log("Animation clip: Set " + n[0] + " to: " + n[1]),
                        this.scheduleOnce((function() {
                            return i._animator.setValue(n[0], Number.parseInt(n[1]))
                        }
                        ), this._frameTime)
                    } else
                        this._animQueue.push({
                            call: function() {
                                return i.setInt(t, e)
                            }
                        })
                }
                ,
                l.setFloat = function(t, e) {
                    var i = this;
                    if (this.isAnimatorReady()) {
                        var n = e.split(",");
                        this._debug && f.log("Animation clip: Set " + n[0] + " to: " + n[1]),
                        this.scheduleOnce((function() {
                            return i._animator.setValue(n[0], Number.parseFloat(n[1]))
                        }
                        ), this._frameTime)
                    } else
                        this._animQueue.push({
                            call: function() {
                                return i.setFloat(t, e)
                            }
                        })
                }
                ,
                l.setBool = function(t, e) {
                    var i = this;
                    if (this.isAnimatorReady())
                        if ("string" == typeof t)
                            this.setBool(null, t);
                        else {
                            var n = e.split(",");
                            this._debug && f.log("Animation clip: Set " + n[0] + " to: " + n[1]),
                            this.scheduleOnce((function() {
                                i._animator.setValue(n[0], "true" === n[1])
                            }
                            ), this._frameTime)
                        }
                    else
                        this._animQueue.push({
                            call: function() {
                                return i.setBool(t, e)
                            }
                        })
                }
                ,
                l.setVariable = function(t) {
                    switch (t.animParamType) {
                    case d.Boolean:
                        this.setBool(null, t.animParam + " , " + t.paramValue);
                        break;
                    case d.Trigger:
                        this.setTrigger(t.animParam, null);
                        break;
                    case d.Number:
                        this.setInt(null, t.animParam + " , " + t.paramValue)
                    }
                }
                ,
                l.setTargetAnimator = function(t) {
                    t instanceof h ? this._animator = t.getComponent(m.AnimationController) : t instanceof m.AnimationController && (this._animator = t)
                }
                ,
                l.turnAnimatorOn = function() {
                    this._animator.enabled = !0
                }
                ,
                l.turnAnimatorOff = function() {
                    this._animator.enabled = !1
                }
                ,
                l.isAnimatorReady = function() {
                    return this._animator ? null != this._animator && this._animator._isOnLoadCalled > 0 || null != this._animator._graphEval : (f.log(e.name + " animator is null in " + this.node.name, _.Generic, g.Error),
                    !1)
                }
                ,
                s(e, [{
                    key: "_frameTime",
                    get: function() {
                        return .1
                    }
                }]),
                e
            }(p)).prototype, "_animator", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            V = e(T.prototype, "_debug", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            v = T)) || v));
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimationEnums.ts", ["cc"], (function(e) {
    "use strict";
    var n;
    return {
        setters: [function(e) {
            n = e.cclegacy
        }
        ],
        execute: function() {
            var i;
            e("AnimationVariableType", void 0),
            n._RF.push({}, "204fa/ah2NNe4Que8jUVKma", "AnimationEnums", void 0),
            function(e) {
                e[e.None = 0] = "None",
                e[e.Trigger = 1] = "Trigger",
                e[e.Boolean = 2] = "Boolean",
                e[e.Number = 3] = "Number"
            }(i || (i = e("AnimationVariableType", {}))),
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ItemSave.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Item.ts"], (function(t) {
    "use strict";
    var e, i, n, r, a, u;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.createClass,
            n = t.initializerDefineProperty
        }
        , function(t) {
            r = t.cclegacy,
            a = t._decorator
        }
        , function(t) {
            u = t.Item
        }
        ],
        execute: function() {
            var s, o, c, l, _, f, p, y, h;
            r._RF.push({}, "20ed3bbb+pKRYCnhgYD6nmY", "ItemSave", void 0);
            var m = a.ccclass
              , b = a.property;
            t("ItemSave", (s = m("ItemSave"),
            o = b({
                visible: !0
            }),
            c = b({
                visible: !0
            }),
            l = b({
                visible: !0
            }),
            s((p = e((f = function() {
                function t(t, e, i) {
                    n(this, "_id", p, this),
                    n(this, "_name", y, this),
                    n(this, "_quantity", h, this),
                    "string" == typeof t ? (this._id = t,
                    e && (this._name = e),
                    i && (this._quantity = i)) : t instanceof u && (this._id = t.id,
                    this._name = t.name,
                    this._quantity = t.quantity)
                }
                return i(t, [{
                    key: "id",
                    get: function() {
                        return this._id
                    }
                }, {
                    key: "name",
                    get: function() {
                        return this._name
                    }
                }, {
                    key: "quantity",
                    get: function() {
                        return this._quantity
                    }
                }]),
                t
            }()).prototype, "_id", [o], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            y = e(f.prototype, "_name", [c], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            h = e(f.prototype, "_quantity", [l], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            _ = f)) || _));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-SlimeAbsorb-Consume.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TS-Slime-SlimeAbsorb.ts"], (function(e) {
    "use strict";
    var s, o, i, r;
    return {
        setters: [function(e) {
            s = e.inheritsLoose
        }
        , function(e) {
            o = e.cclegacy,
            i = e._decorator
        }
        , function(e) {
            r = e.TS_Slime_SlimeAbsorb
        }
        ],
        execute: function() {
            var t;
            o._RF.push({}, "21c126rGLFO86lqv3S7mROs", "TS-Slime-SlimeAbsorb-Consume", void 0);
            var n = i.ccclass;
            i.property,
            e("TS_Slime_SlimeAbsorb_Consume", n("TS_Slime_SlimeAbsorb_Consume")(t = function(e) {
                function o() {
                    return e.apply(this, arguments) || this
                }
                return s(o, e),
                o.prototype.absorbed = function(e) {
                    e.absorb(this.slime)
                }
                ,
                o
            }(r)) || t);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/IAdRequest.ts", ["cc"], (function() {
    "use strict";
    var e;
    return {
        setters: [function(t) {
            e = t.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "22612UF5l5FMooRU1qXNbbR", "IAdRequest", void 0),
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LevelingUpEnums.ts", ["cc"], (function(e) {
    "use strict";
    var n;
    return {
        setters: [function(e) {
            n = e.cclegacy
        }
        ],
        execute: function() {
            var i;
            e("LevelingUpEvents", void 0),
            n._RF.push({}, "228ffpQj2FF0o9ZJn8S0ExE", "LevelingUpEnums", void 0),
            function(e) {
                e[e.LevelingUp_XpRewardsLoaded = 0] = "LevelingUp_XpRewardsLoaded",
                e[e.LevelingUp_LevelingSettingsLoaded = 1] = "LevelingUp_LevelingSettingsLoaded",
                e[e.LevelingUp_PlayerLevelUpdated = 2] = "LevelingUp_PlayerLevelUpdated",
                e[e.LevelingUp_PlayerXpUpdated = 3] = "LevelingUp_PlayerXpUpdated"
            }(i || (i = e("LevelingUpEvents", {}))),
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameSlimesManager.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts", "./SlimeEvents.ts", "./BundleEvents.ts", "./SlimesBundleLoader.ts"], (function(e) {
    "use strict";
    var t, n, i, a, o, s, r, l, d, u, c, m, f, p, b, h, _, y;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            i = e.defineProperty,
            a = e.assertThisInitialized,
            o = e.initializerDefineProperty
        }
        , function(e) {
            s = e.cclegacy,
            r = e._decorator,
            l = e.game,
            d = e.Prefab,
            u = e.instantiate,
            c = e.randomRange,
            m = e.Vec3,
            f = e.Component
        }
        , function(e) {
            p = e.logger
        }
        , function(e) {
            b = e.projectEvent
        }
        , function(e) {
            h = e.SlimeEvents
        }
        , function(e) {
            _ = e.BundleEvents
        }
        , function(e) {
            y = e.slimesBundleLoader
        }
        ],
        execute: function() {
            var P, g, v, L, B;
            s._RF.push({}, "23770vxPW5OaYNYthIrYRdX", "GameSlimesManager", void 0);
            var S = r.ccclass
              , T = r.property;
            e("GameSlimesManager", (P = S("GameSlimesManager"),
            g = T({
                visible: !0
            }),
            P((B = t((L = function(e) {
                function t() {
                    for (var t, n = arguments.length, s = new Array(n), r = 0; r < n; r++)
                        s[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(s)) || this,
                    i(a(t), "_playerPrefab", null),
                    i(a(t), "_botPrefab", null),
                    o(a(t), "_botCount", B, a(t)),
                    i(a(t), "_instantiatedBots", 0),
                    i(a(t), "_playerInstance", null),
                    t
                }
                n(t, e);
                var s = t.prototype;
                return s.onLoad = function() {
                    y.isDataLoaded ? (p.log("onLoad Time: " + l.totalTime / 1e3),
                    this.slimesBundleLoaded()) : b.on(_[_.Bundle_SlimesLoaded], this.slimesBundleLoaded, this)
                }
                ,
                s.slimesBundleLoaded = function() {
                    p.log("slimesBundleLoaded Time: " + l.totalTime / 1e3),
                    y.bundle.load("P_Slime_Player", d, this.playerLoaded.bind(this)),
                    y.bundle.preload("P_Slime", d)
                }
                ,
                s.playerLoaded = function(e, t) {
                    if (p.log("playerLoaded Time: " + l.totalTime / 1e3),
                    !e) {
                        this._playerPrefab = t;
                        var n = u(this._playerPrefab);
                        n.setParent(this.node);
                        var i = c(-68, 68)
                          , a = c(-68, 68);
                        n.setPosition(new m(i,0,a)),
                        this._playerInstance = n,
                        y.bundle.load("P_Slime", d, this.botLoaded.bind(this))
                    }
                }
                ,
                s.botLoaded = function(e, t) {
                    p.log("botLoaded Time: " + l.totalTime / 1e3),
                    e || (this._botPrefab = t)
                }
                ,
                s.update = function() {
                    if (null !== this._botPrefab && this._instantiatedBots < this._botCount) {
                        var e = u(this._botPrefab);
                        e.setParent(this.node);
                        for (var t = c(-68, 68), n = c(-68, 68); m.distance(new m(t,0,n), this._playerInstance.position) <= 5; )
                            t = c(-68, 68),
                            n = c(-68, 68);
                        e.setPosition(new m(t,0,n)),
                        this._instantiatedBots++,
                        this._instantiatedBots === this._botCount && b.emit(h[h.Slime_GameSlimesReady])
                    }
                }
                ,
                t
            }(f)).prototype, "_botCount", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 19
                }
            }),
            v = L)) || v));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-OrdinalSetText.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TS-SetText.ts"], (function(t) {
    "use strict";
    var e, r, s, n;
    return {
        setters: [function(t) {
            e = t.inheritsLoose
        }
        , function(t) {
            r = t.cclegacy,
            s = t._decorator
        }
        , function(t) {
            n = t.TS_SetText
        }
        ],
        execute: function() {
            var o;
            r._RF.push({}, "23f03FqfFxDSb54Zss+W8dO", "TS-OrdinalSetText", void 0);
            var i = s.ccclass;
            s.property,
            t("TS_OrdinalText", i("TS_OrdinalText")(o = function(t) {
                function r() {
                    return t.apply(this, arguments) || this
                }
                return e(r, t),
                r.prototype.setText = function(e) {
                    if ("string" == typeof e)
                        try {
                            var r = Number.parseInt(e);
                            this.setText(r)
                        } catch (t) {
                            throw "Data is not a number"
                        }
                    else
                        1 === e ? t.prototype.setText.call(this, "st") : 2 === e ? t.prototype.setText.call(this, "nd") : 3 === e ? t.prototype.setText.call(this, "rd") : t.prototype.setText.call(this, "th")
                }
                ,
                r
            }(n)) || o);
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-AI-Movement-BaseBehavior.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, o, r, i;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }
        , function(e) {
            o = e.cclegacy,
            r = e._decorator,
            i = e.Component
        }
        ],
        execute: function() {
            var n;
            o._RF.push({}, "24338jqwmtGPYp6CzmFdjYr", "TS-Slime-AI-Movement-BaseBehavior", void 0);
            var s = r.ccclass;
            r.property,
            e("TS_Slime_AI_Movement_BaseBehavior", s("TS_Slime_AI_BaseBehavior")(n = function(e) {
                function o() {
                    return e.apply(this, arguments) || this
                }
                return t(o, e),
                o.prototype.getDirection = function(e) {
                    throw "Not implemented"
                }
                ,
                o
            }(i)) || n);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DailyMissionsSet.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./DailyMissionsSetSave.ts", "./DailyMissionsEvents.ts", "./DailyMissionsSaveController.ts"], (function(s) {
    "use strict";
    var i, e, n, t, o, a, r, c, l;
    return {
        setters: [function(s) {
            i = s.createForOfIteratorHelperLoose,
            e = s.createClass,
            n = s.defineProperty
        }
        , function(s) {
            t = s.cclegacy,
            o = s._decorator
        }
        , function(s) {
            a = s.projectEvent
        }
        , function(s) {
            r = s.DailyMissionsSetSave
        }
        , function(s) {
            c = s.DailyMissionEvents
        }
        , function(s) {
            l = s.DailyMissionsSaveController
        }
        ],
        execute: function() {
            var u;
            t._RF.push({}, "258d8Okzb9FI70lFMALBvlm", "DailyMissionsSet", void 0);
            var v = o.ccclass;
            s("DailyMissionsSet", v("DailyMissions")(u = function() {
                function s(s, e) {
                    var t = this;
                    if (void 0 === s && (s = null),
                    n(this, "_creationDate", new Date(0)),
                    n(this, "_missions", []),
                    s instanceof Array) {
                        this._creationDate = new Date,
                        this._missions = s;
                        for (var o, a = i(this._missions); !(o = a()).done; ) {
                            o.value.addOnChangeListener((function() {
                                return t.save()
                            }
                            ))
                        }
                    } else if (s instanceof r) {
                        this._creationDate = new Date(s._creationDate),
                        this._missions = [];
                        for (var c, l = i(s._missions); !(c = l()).done; ) {
                            var u = e(c.value);
                            u.addOnChangeListener((function() {
                                return t.save()
                            }
                            )),
                            this._missions.push(u)
                        }
                    } else {
                        var v = new Date;
                        v.setDate(v.getDate() - 1),
                        this._creationDate = v,
                        this._missions = null
                    }
                }
                var t = s.prototype;
                return t.enableMissions = function() {
                    if (this._missions)
                        for (var s, e = i(this._missions); !(s = e()).done; ) {
                            s.value.enableListeners()
                        }
                    a.emit(c[c.DailyMission_SetCurrentMissions], this)
                }
                ,
                t.disableMissions = function() {
                    if (this._missions)
                        for (var s, e = i(this._missions); !(s = e()).done; ) {
                            s.value.enableListeners()
                        }
                }
                ,
                t.save = function() {
                    l.saveDailies(this)
                }
                ,
                e(s, [{
                    key: "creationDate",
                    get: function() {
                        return this._creationDate
                    }
                }, {
                    key: "missions",
                    get: function() {
                        return this._missions
                    }
                }]),
                s
            }()) || u);
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ItemsSaveController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Item.ts", "./SaveGame.ts"], (function(e) {
    "use strict";
    var t, n, r, o, s, u, c, a;
    return {
        setters: [function(e) {
            t = e.inheritsLoose,
            n = e.createClass,
            r = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            o = e.cclegacy,
            s = e._decorator,
            u = e.Component
        }
        , function(e) {
            c = e.Item
        }
        , function(e) {
            a = e.saveGame
        }
        ],
        execute: function() {
            var l;
            o._RF.push({}, "26efbpoLjlFp4UEVo7FILmC", "ItemsSaveController", void 0);
            var i = s.ccclass;
            s.property,
            e("ItemsSaveController", i("ItemsSaveController")(l = function(e) {
                function o() {
                    return e.apply(this, arguments) || this
                }
                return t(o, e),
                o.setItem = function(e) {
                    a.setItem(e)
                }
                ,
                o.getItem = function(e) {
                    return new c(a.getItem(e))
                }
                ,
                n(o, null, [{
                    key: "items",
                    get: function() {
                        for (var e, t = [], n = a.getItems(), o = r(n); !(e = o()).done; ) {
                            var s = e.value;
                            t.push(new c(s))
                        }
                        return t
                    },
                    set: function(e) {
                        a.setItems(e)
                    }
                }]),
                o
            }(u)) || l);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-AI-Skills-SpeedBoostBehavior.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Range.ts", "./TS_Slime.ts", "./TS_CharacterMovement.ts", "./AISlimeThreat.ts", "./TS-Slime-SkillConfig-SpeedBoost.ts", "./TS-Slime-Skill-SpeedBoost.ts", "./TS-Slime-AI-Skills-BaseBehavior.ts"], (function(e) {
    "use strict";
    var t, i, o, n, a, r, s, l, c, u, h, d, S, _, p, v, f, B, b;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            o = e.initializerDefineProperty,
            n = e.assertThisInitialized,
            a = e.defineProperty
        }
        , function(e) {
            r = e.cclegacy,
            s = e._decorator,
            l = e.Prefab,
            c = e.CurveRange,
            u = e.random,
            h = e.Vec2,
            d = e.randomRange
        }
        , function(e) {
            S = e.Range
        }
        , function(e) {
            _ = e.TS_Slime
        }
        , function(e) {
            p = e.CharacterMovement
        }
        , function(e) {
            v = e.AISlimeThreat
        }
        , function(e) {
            f = e.TS_Slime_SkillConfig_SpeedBoost
        }
        , function(e) {
            B = e.TS_Slime_Skill_SpeedBoost
        }
        , function(e) {
            b = e.TS_Slime_AI_Skills_BaseBehavior
        }
        ],
        execute: function() {
            var g, m, C, k, y, A, T, z, D, I, w, M, R, P, F, x, L, V, j, H, J, K;
            r._RF.push({}, "283a8iJgvNFmK8YcSHD7V2j", "TS-Slime-AI-Skills-SpeedBoostBehavior", void 0);
            var N = s.ccclass
              , O = s.property
              , Y = s.executionOrder;
            e("TS_Slime_AI_Skills_SpeedBoostBehavior", (g = N("TS_Slime_AI_Skills_SpeedBoostBehavior"),
            m = Y(4),
            C = O({
                visible: !0,
                type: l
            }),
            k = O({
                visible: !0,
                type: B
            }),
            y = O({
                visible: !0,
                type: p
            }),
            A = O({
                visible: !0
            }),
            T = O({
                visible: !0,
                type: c
            }),
            z = O({
                visible: !0
            }),
            D = O({
                visible: !0,
                type: c
            }),
            I = O({
                visible: !0
            }),
            w = O({
                visible: !0,
                type: S
            }),
            g(M = m((P = t((R = function(e) {
                function t() {
                    for (var t, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
                        r[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    o(n(t), "_speedBoostSkillConfigPrefab", P, n(t)),
                    a(n(t), "_speedBoostSkillConfig", null),
                    o(n(t), "_speedBoostSkill", F, n(t)),
                    o(n(t), "_characterMovement", x, n(t)),
                    a(n(t), "_currentBoost", null),
                    o(n(t), "_minChaseBoostDistance", L, n(t)),
                    o(n(t), "_chaseActivationChance", V, n(t)),
                    o(n(t), "_minFleeBoostDistance", j, n(t)),
                    o(n(t), "_fleeActivationChance", H, n(t)),
                    o(n(t), "_randomActivationChance", J, n(t)),
                    o(n(t), "_durationRange", K, n(t)),
                    a(n(t), "_highestThreat", null),
                    t
                }
                i(t, e);
                var r = t.prototype;
                return r.onLoad = function() {
                    var e = this._speedBoostSkillConfigPrefab.data;
                    this._speedBoostSkillConfig = e.getComponent(f)
                }
                ,
                r.update = function(e) {
                    var t = this._aIBrain.brainState;
                    if (t.isBoosting && !this._speedBoostSkill.isBoostActive && this._aIBrain.deactivatedSpeedBoost(),
                    null !== this._currentBoost)
                        this._currentBoost.duration -= e,
                        this.shouldDeactivate(t) && (this._aIBrain.deactivatedSpeedBoost(),
                        this.deactivateSpeedBoost());
                    else if (this.isInDanger(t.behavior, t.slime, t.threats))
                        this._aIBrain.activatedFleeSpeedBoost(),
                        this.activateSpeedBoost(t);
                    else {
                        var i = this.chasedSlimeTooClose(t.behavior, t.slime, t.target)
                          , o = i.result
                          , n = i.duration;
                        !0 === o ? (this._aIBrain.activatedChaseSpeedBoost(),
                        this.activateSpeedBoost(t, n)) : u() < this._randomActivationChance && this.activateSpeedBoost(t)
                    }
                }
                ,
                r.shouldDeactivate = function(e) {
                    var t;
                    return this._currentBoost.duration <= 0 || (this._currentBoost.behavior !== e.behavior || ("Chase" === e.behavior && !(null === (t = e.target) || void 0 === t ? void 0 : t.node) || (this._currentBoost.target !== e.target || (!e.target.canBeAbsorbed(e.slime) || !this._speedBoostSkill.isBoostActive))))
                }
                ,
                r.chasedSlimeTooClose = function(e, t, i) {
                    if ("Chase" === e && i instanceof _) {
                        var o = h.distance(t.Position2D, i.Position2D) - t.radius
                          , n = o / this._characterMovement.MaxSpeed
                          , a = 1.2 * (this._speedBoostSkillConfig.fixedDecayValue * n + this._speedBoostSkillConfig.decayRatio * t.Size * n);
                        if (t.Size - a >= this._speedBoostSkillConfig.MinSize && i.canBeAbsorbed(t, a)) {
                            var r = this._chaseActivationChance.spline.evaluate(o / this._minChaseBoostDistance);
                            return {
                                result: u() < r,
                                duration: n
                            }
                        }
                        return {
                            result: !1
                        }
                    }
                    return {
                        result: !1
                    }
                }
                ,
                r.isInDanger = function(e, t, i) {
                    if ("Flee" === e) {
                        for (var o = 0, n = null, a = 0; a < i.length; a++)
                            i[a].threatLevel > o && (o = i[a].threatLevel,
                            i[a]instanceof v && (n = i[a]));
                        if (.85 * t.Size > this._speedBoostSkillConfig.MinSize) {
                            var r = this._fleeActivationChance.spline.evaluate(o);
                            return u() <= r ? (this._highestThreat = n,
                            !0) : (this._highestThreat = null,
                            !1)
                        }
                        return !1
                    }
                    return this._highestThreat = null,
                    !1
                }
                ,
                r.activateSpeedBoost = function(e, t) {
                    this._currentBoost = {
                        duration: void 0 !== t ? t : d(this._durationRange.Min, this._durationRange.Max),
                        behavior: e.behavior,
                        target: e.target
                    },
                    this._speedBoostSkill.activateBoost()
                }
                ,
                r.deactivateSpeedBoost = function() {
                    this._speedBoostSkill.deactivateBoost(),
                    this._currentBoost = null
                }
                ,
                t
            }(b)).prototype, "_speedBoostSkillConfigPrefab", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            F = t(R.prototype, "_speedBoostSkill", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            x = t(R.prototype, "_characterMovement", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            L = t(R.prototype, "_minChaseBoostDistance", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            V = t(R.prototype, "_chaseActivationChance", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new c
                }
            }),
            j = t(R.prototype, "_minFleeBoostDistance", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            H = t(R.prototype, "_fleeActivationChance", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new c
                }
            }),
            J = t(R.prototype, "_randomActivationChance", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .05
                }
            }),
            K = t(R.prototype, "_durationRange", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new S
                }
            }),
            M = R)) || M) || M));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-SlimeFood-Bullet.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./PrefabPool.ts", "./TS-Slime-SkillConfig-Shoot.ts", "./TS-SlimeFood.ts"], (function(e) {
    "use strict";
    var t, i, o, n, r, l, a, u, s, c, f, m, h, p, S;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            o = e.initializerDefineProperty,
            n = e.assertThisInitialized,
            r = e.defineProperty,
            l = e.createClass
        }
        , function(e) {
            a = e.cclegacy,
            u = e._decorator,
            s = e.Prefab,
            c = e.game,
            f = e.Vec3,
            m = e.log
        }
        , function(e) {
            h = e.PrefabPool
        }
        , function(e) {
            p = e.TS_Slime_SkillConfig_Shoot
        }
        , function(e) {
            S = e.TS_SlimeFood
        }
        ],
        execute: function() {
            var b, g, d, T, P, y, _, C;
            a._RF.push({}, "28ebaslwY1DYqItN5EHsJvf", "TS-SlimeFood-Bullet", void 0);
            var v = u.ccclass
              , z = u.property;
            e("TS_SlimeFood_Bullet", (b = v("TS_SlimeFood_Bullet"),
            g = z(s),
            d = z(s),
            b((y = t((P = function(e) {
                function t() {
                    for (var t, i = arguments.length, l = new Array(i), a = 0; a < i; a++)
                        l[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(l)) || this,
                    o(n(t), "shootConfigPrefab", y, n(t)),
                    o(n(t), "immuneTime", _, n(t)),
                    r(n(t), "shootConfig", null),
                    r(n(t), "creatorSlime", null),
                    r(n(t), "creationTime", 0),
                    o(n(t), "bulletPrefab", C, n(t)),
                    t
                }
                i(t, e);
                var a = t.prototype;
                return a.canBeAbsorbed = function(e) {
                    return e !== this.creatorSlime || c.totalTime - this.creationTime >= 1e3 * this.immuneTime
                }
                ,
                a.initialize = function(e, t, i) {
                    this._art.scale = new f(1,1,1),
                    this.creationTime = c.totalTime,
                    this.creatorSlime = i
                }
                ,
                a.update = function() {
                    m("Position:" + this.node.position)
                }
                ,
                a.eaten = function(t) {
                    h.instance.put(this.bulletPrefab, this.node),
                    e.prototype.eaten.call(this, t)
                }
                ,
                l(t, [{
                    key: "Size",
                    get: function() {
                        return null === this.shootConfig && (this.shootConfig = this.shootConfigPrefab.data.getComponent(p)),
                        this.shootConfig.BulletSize
                    }
                }]),
                t
            }(S)).prototype, "shootConfigPrefab", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            _ = t(P.prototype, "immuneTime", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .3
                }
            }),
            C = t(P.prototype, "bulletPrefab", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            T = P)) || T));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SlimesMissionsDataFactory.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./ENUM-GameEvents.ts", "./SaveGame.ts", "./DailyMissionDataFactory.ts", "./DailyMissionData.ts", "./CrystalsDailyMissionData.ts", "./DashSlimesEatenDailyMissionData.ts", "./DivideSlimesEatenDailyMissionData.ts", "./SlimesEatenDailyMissionData.ts", "./SurviveDailyMissionData.ts"], (function(t) {
    "use strict";
    var i, a, n, e, s, r, o, c, D, u, l, f, y, v, m, S;
    return {
        setters: [function(t) {
            i = t.inheritsLoose,
            a = t.defineProperty,
            n = t.assertThisInitialized,
            e = t.createClass
        }
        , function(t) {
            s = t.cclegacy,
            r = t._decorator
        }
        , function(t) {
            o = t.projectEvent
        }
        , function(t) {
            c = t.GameEvents
        }
        , function(t) {
            D = t.saveGame
        }
        , function(t) {
            u = t.DailyMissionDataFactory
        }
        , function(t) {
            l = t.DailyMissionData
        }
        , function(t) {
            f = t.CrystalsDailyMissionData
        }
        , function(t) {
            y = t.DashSlimesEatenDailyMissionData
        }
        , function(t) {
            v = t.DivideSlimesEatenDailyMissionData
        }
        , function(t) {
            m = t.SlimesEatenDailyMissionData
        }
        , function(t) {
            S = t.SurviveDailyMissionData
        }
        ],
        execute: function() {
            var M;
            s._RF.push({}, "2a10cQdtFNL4LcqGldPgnch", "SlimesMissionsDataFactory", void 0);
            var g = r.ccclass;
            r.property,
            t("SlimesMissionsDataFactory", g("SlimesMissionsDataFactory")(M = function(t) {
                function s() {
                    for (var i, e = arguments.length, s = new Array(e), r = 0; r < e; r++)
                        s[r] = arguments[r];
                    return i = t.call.apply(t, [this].concat(s)) || this,
                    a(n(i), "_gameStarted", !1),
                    i
                }
                i(s, t);
                var r = s.prototype;
                return r.onLoad = function() {
                    o.on(c[c.Game_Start], this.gameStarted, this)
                }
                ,
                r.onDestroy = function() {
                    o.off(c[c.Game_Start], this.gameStarted, this)
                }
                ,
                r.gameStarted = function() {
                    this._gameStarted = !0
                }
                ,
                r.createInstance = function(t, i, a, n, e) {
                    if (t instanceof l) {
                        if (t.ID === f.ID)
                            return new f(t,i,a);
                        if (t.ID === m.ID)
                            return new m(t,i,a);
                        if (t.ID === y.ID)
                            return new y(t,i,a);
                        if (t.ID === v.ID)
                            return new v(t,i,a);
                        if (t.ID === S.ID)
                            return new S(t,i,a)
                    } else if ("string" == typeof t && "number" == typeof a) {
                        if (t === f.ID) {
                            var s = {};
                            return Object.assign(s, n, e),
                            new f(s,i,a)
                        }
                        if (t === m.ID) {
                            var r = {};
                            return Object.assign(r, n, e),
                            new m(r,i,a)
                        }
                        if (t === y.ID) {
                            var o = {};
                            return Object.assign(o, n, e),
                            new y(o,i,a)
                        }
                        if (t === v.ID) {
                            var c = {};
                            return Object.assign(c, n, e),
                            new v(c,i,a)
                        }
                        if (t === S.ID) {
                            var D = {};
                            return Object.assign(D, n, e),
                            new S(D,i,a)
                        }
                    }
                    throw "Invalid Mission!"
                }
                ,
                e(s, [{
                    key: "canCreateMissions",
                    get: function() {
                        return !this._gameStarted && D.getHighScore() > 0
                    }
                }]),
                s
            }(u)) || M);
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS_CharacterMovementArrowsSteering.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TS_CharacterMovementBaseSteering.ts"], (function(e) {
    "use strict";
    var t, r, i, s, n, o, a, h, c, d, u, l, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            i = e.initializerDefineProperty,
            s = e.assertThisInitialized,
            n = e.defineProperty
        }
        , function(e) {
            o = e.cclegacy,
            a = e._decorator,
            h = e.Vec2,
            c = e.input,
            d = e.Input,
            u = e.KeyCode,
            l = e.log
        }
        , function(e) {
            p = e.TS_CharacterMovementBaseSteering
        }
        ],
        execute: function() {
            var y, f, v, P;
            o._RF.push({}, "2a497lqurdNI7Db8bvkmntD", "TS_CharacterMovementArrowsSteering", void 0);
            var A = a.ccclass
              , _ = a.property;
            e("TS_CharacterMovementArrowsSteering", A("TS_CharacterMovementArrowsSteering")((v = t((f = function(e) {
                function t() {
                    for (var t, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                        o[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    i(s(t), "rotationSpeed", v, s(t)),
                    i(s(t), "direction", P, s(t)),
                    n(s(t), "horizontalAxis", 0),
                    n(s(t), "verticalAxis", 0),
                    n(s(t), "leftPressed", !1),
                    n(s(t), "rightPressed", !1),
                    n(s(t), "upPressed", !1),
                    n(s(t), "downPressed", !1),
                    t
                }
                r(t, e);
                var o = t.prototype;
                return o.start = function() {
                    c.on(d.EventType.KEY_DOWN, this.onKeyDown, this),
                    c.on(d.EventType.KEY_UP, this.onKeyUp, this)
                }
                ,
                o.onDestroy = function() {
                    c.off(d.EventType.KEY_DOWN, this.onKeyDown, this),
                    c.off(d.EventType.KEY_UP, this.onKeyUp, this)
                }
                ,
                o.onKeyDown = function(e) {
                    var t = Object.keys(u).reduce((function(e, t) {
                        return e[u[t]] = t,
                        e
                    }
                    ), {});
                    l("Keydown: " + t[e.keyCode]),
                    e.keyCode !== u.ARROW_LEFT || this.leftPressed || (this.leftPressed = !0,
                    this.horizontalAxis -= 1),
                    e.keyCode !== u.ARROW_RIGHT || this.rightPressed || (this.rightPressed = !0,
                    this.horizontalAxis += 1),
                    e.keyCode !== u.ARROW_UP || this.upPressed || (this.upPressed = !0,
                    this.verticalAxis += 1),
                    e.keyCode !== u.ARROW_DOWN || this.downPressed || (this.downPressed = !0,
                    this.verticalAxis -= 1)
                }
                ,
                o.onKeyUp = function(e) {
                    var t = Object.keys(u).reduce((function(e, t) {
                        return e[u[t]] = t,
                        e
                    }
                    ), {});
                    l("KeyUp: " + t[e.keyCode]),
                    e.keyCode === u.ARROW_LEFT && this.leftPressed && (this.leftPressed = !1,
                    this.horizontalAxis += 1),
                    e.keyCode === u.ARROW_RIGHT && this.rightPressed && (this.rightPressed = !1,
                    this.horizontalAxis -= 1),
                    e.keyCode === u.ARROW_UP && this.upPressed && (this.upPressed = !1,
                    this.verticalAxis -= 1),
                    e.keyCode === u.ARROW_DOWN && this.downPressed && (this.downPressed = !1,
                    this.verticalAxis += 1)
                }
                ,
                o.update = function(e) {
                    var t = new h(this.horizontalAxis,-this.verticalAxis);
                    t.length() > 0 && this.setSteering(t.normalize())
                }
                ,
                t
            }(p)).prototype, "rotationSpeed", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            P = t(f.prototype, "direction", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new h
                }
            }),
            y = f)) || y);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DivideState.ts", ["cc"], (function(i) {
    "use strict";
    var e;
    return {
        setters: [function(i) {
            e = i.cclegacy
        }
        ],
        execute: function() {
            var t;
            i("DivideState", void 0),
            e._RF.push({}, "2c1c91trpVIwpblKqWdkALZ", "DivideState", void 0),
            function(i) {
                i[i.DivideNotReady = 0] = "DivideNotReady",
                i[i.DivideReady = 1] = "DivideReady",
                i[i.Dividing = 2] = "Dividing",
                i[i.DivideCD = 3] = "DivideCD",
                i[i.UniteReady = 4] = "UniteReady",
                i[i.Uniting = 5] = "Uniting",
                i[i.UniteCD = 6] = "UniteCD"
            }(t || (t = i("DivideState", {}))),
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LevelUpRewardedAdEvents.ts", ["cc"], (function(e) {
    "use strict";
    var d;
    return {
        setters: [function(e) {
            d = e.cclegacy
        }
        ],
        execute: function() {
            var t;
            e("LevelUpRewardedAdEvents", void 0),
            d._RF.push({}, "2c328S/FmNC4o03QiCSlVHn", "LevelUpRewardedAdEvents", void 0),
            function(e) {
                e[e.LevelUpRewardedAdEvents_Completed = 0] = "LevelUpRewardedAdEvents_Completed"
            }(t || (t = e("LevelUpRewardedAdEvents", {}))),
            d._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RewardedAdOportunity.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts", "./AudioManager.ts", "./AdsEvents.ts"], (function(e) {
    "use strict";
    var t, n, o, d, i, s, a, r, u, l, A, c, h, f;
    return {
        setters: [function(e) {
            t = e.defineProperty,
            n = e.applyDecoratedDescriptor,
            o = e.inheritsLoose,
            d = e.assertThisInitialized,
            i = e.initializerDefineProperty,
            s = e.createClass
        }
        , function(e) {
            a = e.cclegacy,
            r = e._decorator,
            u = e.game,
            l = e.Component
        }
        , function(e) {
            A = e.logger
        }
        , function(e) {
            c = e.projectEvent
        }
        , function(e) {
            h = e.AudioManager
        }
        , function(e) {
            f = e.AdsEvents
        }
        ],
        execute: function() {
            var w, p, _, g, y, b, v, R, m;
            a._RF.push({}, "2c4e8xIPOZENLhcYAIWTYzQ", "RewardedAdOportunity", void 0);
            var D = r.ccclass
              , S = r.property;
            e("RewardedAdOportunity", (w = D("RewardedAdOportunity"),
            p = S({
                visible: !0
            }),
            _ = S({
                visible: !0,
                unit: "s"
            }),
            w((m = R = function(e) {
                function n() {
                    for (var n, o = arguments.length, s = new Array(o), a = 0; a < o; a++)
                        s[a] = arguments[a];
                    return n = e.call.apply(e, [this].concat(s)) || this,
                    t(d(n), "_currentAdRequest", null),
                    t(d(n), "_wasAudioEnabled", !1),
                    i(d(n), "_autoLoadAds", b, d(n)),
                    i(d(n), "_loadAdsRequestDelay", v, d(n)),
                    t(d(n), "_lastAdRequest", -100),
                    n
                }
                o(n, e);
                var a = n.prototype;
                return a.update = function() {
                    var e = u.totalTime / 1e3;
                    this._autoLoadAds && e >= this._lastAdRequest + this._loadAdsRequestDelay && (this._lastAdRequest = e,
                    n._showAdFunction || (A.log("ADS: Ads: No ad detected, start loading one"),
                    this.loadAd()))
                }
                ,
                a.start = function() {
                    c.on(f[f.AdsEvents_LoadAd], this.loadAd, this),
                    c.on(f[f.AdsEvents_ShowAd], this.showAd, this)
                }
                ,
                a.onDestroy = function() {
                    c.off(f[f.AdsEvents_LoadAd], this.loadAd, this),
                    c.off(f[f.AdsEvents_ShowAd], this.showAd, this)
                }
                ,
                a.loadAd = function() {
                    var e = this;
                    if (A.log("ADS: Load Ad"),
                    !n._showAdFunction)
                        if (A.log("ADS: Setting up rewarded ad opportunity"),
                        "undefined" != typeof GameSnacks) {
                            var t = {
                                type: "reward",
                                beforeReward: function(e) {
                                    n._showAdFunction = e,
                                    A.log("ADS: beforeReward - ad is ready!"),
                                    c.emit(f[f.AdsEvents_AdLoaded])
                                }
                                .bind(this),
                                beforeAd: function() {
                                    A.log("ADS: beforeBreak - game will be paused to show ad"),
                                    e._wasAudioEnabled = h.instance.audioEnabled,
                                    h.instance.audioEnabled = !1
                                }
                                .bind(this),
                                adViewed: function() {
                                    A.log("ADS: adComplete - rewarding player"),
                                    e._currentAdRequest.onAdCompleted()
                                }
                                .bind(this),
                                adDismissed: function() {
                                    A.log("ADS: adDismissed - player will not receive anything"),
                                    e._currentAdRequest.onAdFailed({
                                        id: 1,
                                        message: "Player dismissed ad"
                                    })
                                }
                                .bind(this),
                                afterAd: function() {
                                    e._currentAdRequest = null,
                                    n._showAdFunction = null;
                                    var t = u.totalTime / 1e3;
                                    e._lastAdRequest = t,
                                    A.log("ADS: afterBreak - game will be resumed now"),
                                    e._wasAudioEnabled && (h.instance.audioEnabled = !0)
                                }
                                .bind(this)
                            };
                            A.log("ADS: Ad Break Options OK"),
                            GameSnacks.ad.break(t),
                            A.log("ADS: Ad Break Requested")
                        } else
                            A.log("ADS: GameSnacks is invalid")
                }
                ,
                a.showAd = function(e) {
                    n._showAdFunction ? (A.log("ADS: Show Ad to Player."),
                    this._currentAdRequest = e,
                    n._showAdFunction()) : (this._currentAdRequest = null,
                    e.onAdFailed({
                        id: 1,
                        message: "Ad was not loaded"
                    }),
                    A.log("ADS: Trying to show ad without initializing."),
                    c.emit(f[f.AdsEvents_AdFailedToShow]))
                }
                ,
                s(n, null, [{
                    key: "isAdReady",
                    get: function() {
                        return !!n._showAdFunction
                    }
                }]),
                n
            }(l),
            t(R, "_showAdFunction", null),
            b = n((y = m).prototype, "_autoLoadAds", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }),
            v = n(y.prototype, "_loadAdsRequestDelay", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 60
                }
            }),
            g = y)) || g));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Panel.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./PanelEnums.ts", "./PanelManager.ts"], (function(i) {
    "use strict";
    var t, e, n, o, a, l, r, s, c, p, u, h, d, y, m, v, f, O, b;
    return {
        setters: [function(i) {
            t = i.applyDecoratedDescriptor,
            e = i.inheritsLoose,
            n = i.initializerDefineProperty,
            o = i.assertThisInitialized,
            a = i.defineProperty,
            l = i.createClass
        }
        , function(i) {
            r = i.cclegacy,
            s = i._decorator,
            c = i.Enum,
            p = i.Animation,
            u = i.Node,
            h = i.AnimationClip,
            d = i.CCBoolean,
            y = i.UIOpacity,
            m = i.Component
        }
        , function(i) {
            v = i.projectEvent
        }
        , function(i) {
            f = i.PanelId,
            O = i.EventPanel
        }
        , function(i) {
            b = i.PanelManager
        }
        ],
        execute: function() {
            var g, C, P, z, w, S, E, F, A, _, I, L, j, k, D, M;
            r._RF.push({}, "2e50aA9tv1ElLX6TaHJkvJg", "Panel", void 0);
            var x = s.ccclass
              , B = s.property
              , H = s.executionOrder;
            i("Panel", (g = x("Panel"),
            C = H(-4),
            P = B({
                type: c(f)
            }),
            z = B(p),
            w = B({
                type: u,
                tooltip: "Used to disable the panel content so no input is processed when closed"
            }),
            S = B({
                type: h,
                formerlySerializedAs: "clip"
            }),
            E = B(h),
            F = B(d),
            g(A = C((I = t((_ = function(i) {
                function t() {
                    for (var t, e = arguments.length, l = new Array(e), r = 0; r < e; r++)
                        l[r] = arguments[r];
                    return t = i.call.apply(i, [this].concat(l)) || this,
                    n(o(t), "id", I, o(t)),
                    n(o(t), "anim", L, o(t)),
                    n(o(t), "content", j, o(t)),
                    n(o(t), "clipOpen", k, o(t)),
                    n(o(t), "clipClose", D, o(t)),
                    n(o(t), "startOpen", M, o(t)),
                    a(o(t), "uiOpacity", void 0),
                    t
                }
                e(t, i);
                var r = t.prototype;
                return r.onLoad = function() {
                    var i;
                    null === (i = b.instance) || void 0 === i || i.register(this),
                    this.uiOpacity = this.node.getComponent(y),
                    null == this.content && this.node.children.length > 0 && (this.content = this.node.children[0])
                }
                ,
                r.start = function() {
                    this.startOpen ? this.open() : (this.uiOpacity && (this.uiOpacity.opacity = 0),
                    this.content && (this.content.active = !1))
                }
                ,
                r.open = function() {
                    var i, t, e = this;
                    this.uiOpacity && (this.uiOpacity.opacity = 255),
                    this.content && (this.content.active = !0);
                    var n = null === (i = this.anim) || void 0 === i ? void 0 : i.getState(this.clipOpen.name);
                    n && (n.speed = 1),
                    null === (t = this.anim) || void 0 === t || t.play(this.clipOpen.name),
                    this.node.emit(O.OpenStart),
                    v.emit(O.OpenStart, this.id, this.clipOpen.duration),
                    this.scheduleOnce((function() {
                        e.node.emit(O.OpenFinish),
                        v.emit(O.OpenFinish, e.id)
                    }
                    ), this.clipOpen.duration)
                }
                ,
                r.close = function() {
                    var i = this
                      , t = 0;
                    if (null == this.clipClose) {
                        var e, n, o = null === (e = this.anim) || void 0 === e ? void 0 : e.getState(this.clipOpen.name);
                        o && (o.speed = -1),
                        null === (n = this.anim) || void 0 === n || n.play(this.clipOpen.name),
                        t = this.clipOpen.duration
                    } else {
                        var a;
                        null === (a = this.anim) || void 0 === a || a.play(this.clipClose.name),
                        t = this.clipClose.duration
                    }
                    this.node.emit(O.CloseStart),
                    v.emit(O.CloseStart, this.id, t),
                    this.scheduleOnce((function() {
                        i.node.emit(O.CloseFinish),
                        v.emit(O.CloseFinish, i.id),
                        i.uiOpacity && (i.uiOpacity.opacity = 0),
                        i.content && (i.content.active = !1)
                    }
                    ), t)
                }
                ,
                l(t, [{
                    key: "Id",
                    get: function() {
                        return this.id
                    }
                }]),
                t
            }(m)).prototype, "id", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return f.None
                }
            }),
            L = t(_.prototype, "anim", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            j = t(_.prototype, "content", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            k = t(_.prototype, "clipOpen", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            D = t(_.prototype, "clipClose", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            M = t(_.prototype, "startOpen", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            A = _)) || A) || A));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-FaceForward.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./IVelocity2D.ts"], (function(e) {
    "use strict";
    var t, i, r, n, o, l, c, a, s, u, y, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            r = e.initializerDefineProperty,
            n = e.assertThisInitialized,
            o = e.defineProperty
        }
        , function(e) {
            l = e.cclegacy,
            c = e._decorator,
            a = e.Node,
            s = e.Component,
            u = e.Vec3,
            y = e.log
        }
        , function(e) {
            p = e.isIVelocity2D
        }
        ],
        execute: function() {
            var f, v, h, d, _, g, m, b;
            l._RF.push({}, "2e8808Ox4tBXYEZQBYFchhl", "TS-Slime-FaceForward", void 0);
            var F = c.ccclass
              , w = c.property;
            e("TS_Slime_FaceForward", (f = F("TS_Slime_FaceForward"),
            v = w(a),
            h = w({
                visible: !0,
                type: s
            }),
            f((g = t((_ = function(e) {
                function t() {
                    for (var t, i = arguments.length, l = new Array(i), c = 0; c < i; c++)
                        l[c] = arguments[c];
                    return t = e.call.apply(e, [this].concat(l)) || this,
                    r(n(t), "renderNode", g, n(t)),
                    o(n(t), "lastAngle", 0),
                    r(n(t), "debug", m, n(t)),
                    r(n(t), "_velocityComponent", b, n(t)),
                    o(n(t), "_velocityReference", null),
                    t
                }
                i(t, e);
                var l = t.prototype;
                return l.start = function() {
                    p(this._velocityComponent) && (this._velocityReference = this._velocityComponent)
                }
                ,
                l.lateUpdate = function() {
                    if (null !== this._velocityReference && this._velocityReference.velocity.length() > 0) {
                        var e = new u(this._velocityReference.velocity.x,0,this._velocityReference.velocity.y);
                        e.normalize();
                        var t = 180 * Math.atan2(-e.x, -e.z) / Math.PI;
                        if (t != this.lastAngle) {
                            var i, r = new u(0,t,0);
                            this.debug && y("rotation: " + r + " velocity:" + e.length()),
                            null === (i = this.renderNode) || void 0 === i || i.setRotationFromEuler(r),
                            this.lastAngle = t
                        }
                    }
                }
                ,
                t
            }(s)).prototype, "renderNode", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            m = t(_.prototype, "debug", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            b = t(_.prototype, "_velocityComponent", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            d = _)) || d));
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TweenPunchScale.ts", ["cc"], (function() {
    "use strict";
    var e;
    return {
        setters: [function(c) {
            e = c.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "2f99335XsBIDLj0yn+vPddq", "TweenPunchScale", void 0),
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-UI-ButtonSlimeEvent.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./SlimeEvents.ts", "./TS-UI-ButtonEvent.ts"], (function(t) {
    "use strict";
    var e, n, i, r, o, u, c, l, s, a;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            i = t.initializerDefineProperty,
            r = t.assertThisInitialized
        }
        , function(t) {
            o = t.cclegacy,
            u = t._decorator,
            c = t.Enum
        }
        , function(t) {
            l = t.projectEvent
        }
        , function(t) {
            s = t.SlimeEvents
        }
        , function(t) {
            a = t.TS_UI_ButtonEvent
        }
        ],
        execute: function() {
            var p, v, S, f, y;
            o._RF.push({}, "3025b6pDuJDCY6PclIuTKbW", "TS-UI-ButtonSlimeEvent", void 0);
            var m = u.ccclass
              , _ = u.property;
            t("TS_UI_ButtonSlimeEvent", (p = m("TS_UI_ButtonSlimeEvent"),
            v = _({
                type: c(s)
            }),
            p((y = e((f = function(t) {
                function e() {
                    for (var e, n = arguments.length, o = new Array(n), u = 0; u < n; u++)
                        o[u] = arguments[u];
                    return e = t.call.apply(t, [this].concat(o)) || this,
                    i(r(e), "eventType", y, r(e)),
                    e
                }
                return n(e, t),
                e.prototype.raise = function() {
                    var t = s[this.eventType];
                    l.emit(t)
                }
                ,
                e
            }(a)).prototype, "eventType", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return s.Slime_NewSlime
                }
            }),
            S = f)) || S));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-SkillConfig-SpeedBoost.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var i, t, n, r, o, a, l, c;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            n = e.initializerDefineProperty,
            r = e.assertThisInitialized,
            o = e.createClass
        }
        , function(e) {
            a = e.cclegacy,
            l = e._decorator,
            c = e.Component
        }
        ],
        execute: function() {
            var u, s, p, f, S, d, y, g, _, b;
            a._RF.push({}, "32af9xWdKpDW41S3+S2FSfL", "TS-Slime-SkillConfig-SpeedBoost", void 0);
            var m = l.ccclass
              , h = l.property;
            e("TS_Slime_SkillConfig_SpeedBoost", (u = m("TS_Slime_SkillConfig_SpeedBoost"),
            s = h({
                visible: !0
            }),
            p = h({
                visible: !0
            }),
            f = h({
                visible: !0
            }),
            u((y = i((d = function(e) {
                function i() {
                    for (var i, t = arguments.length, o = new Array(t), a = 0; a < t; a++)
                        o[a] = arguments[a];
                    return i = e.call.apply(e, [this].concat(o)) || this,
                    n(r(i), "minSize", y, r(i)),
                    n(r(i), "_speedBoost", g, r(i)),
                    n(r(i), "_decayPercentagePerSecond", _, r(i)),
                    n(r(i), "_fixedDecayValue", b, r(i)),
                    i
                }
                return t(i, e),
                o(i, [{
                    key: "MinSize",
                    get: function() {
                        return this.minSize
                    }
                }, {
                    key: "speedBoost",
                    get: function() {
                        return this._speedBoost
                    }
                }, {
                    key: "maxSpeedMultiplier",
                    get: function() {
                        return this.speedBoost
                    }
                }, {
                    key: "decayRatio",
                    get: function() {
                        return this._decayPercentagePerSecond
                    }
                }, {
                    key: "fixedDecayValue",
                    get: function() {
                        return this._fixedDecayValue
                    }
                }]),
                i
            }(c)).prototype, "minSize", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 8
                }
            }),
            g = i(d.prototype, "_speedBoost", [s], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 2
                }
            }),
            _ = i(d.prototype, "_decayPercentagePerSecond", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .1
                }
            }),
            b = i(d.prototype, "_fixedDecayValue", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .1
                }
            }),
            S = d)) || S));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-SafeAreaAffectedMaterials.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./TS-BattleRoyale-SafeArea.ts"], (function(e) {
    "use strict";
    var a, r, t, i, n, s, o, f, l, u, c, d;
    return {
        setters: [function(e) {
            a = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            t = e.initializerDefineProperty,
            i = e.assertThisInitialized,
            n = e.defineProperty,
            s = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            o = e.cclegacy,
            f = e._decorator,
            l = e.Material,
            u = e.Component
        }
        , function(e) {
            c = e.projectEvent
        }
        , function(e) {
            d = e.SafeAreaEvents
        }
        ],
        execute: function() {
            var A, p, S, _, h, v, M;
            o._RF.push({}, "33369SADQZAtZ5huWbGrtji", "TS-SafeAreaAffectedMaterials", void 0);
            var b = f.ccclass
              , y = f.property;
            f.executionOrder,
            e("TS_SafeAreaAffectedMaterials", (A = b("TS_SafeAreaAffectedMaterials"),
            p = y({
                visible: !0
            }),
            S = y({
                type: [l],
                visible: !0
            }),
            A((v = a((h = function(e) {
                function a() {
                    for (var a, r = arguments.length, s = new Array(r), o = 0; o < r; o++)
                        s[o] = arguments[o];
                    return a = e.call.apply(e, [this].concat(s)) || this,
                    t(i(a), "_radiusParameter", v, i(a)),
                    t(i(a), "_safeAreaMaterials", M, i(a)),
                    n(i(a), "_areaUpdateCallback", void 0),
                    n(i(a), "_currentRadius", -1),
                    a
                }
                r(a, e);
                var o = a.prototype;
                return o.onEnable = function() {
                    var e = this;
                    c.on(d[d.SafeArea_AddSafeAreaMaterial], this.addSafeAreaMaterial, this),
                    c.on(d[d.SafeArea_RemoveSafeAreaMaterial], this.removeSafeAreaMaterial, this),
                    this._areaUpdateCallback = c.on(d[d.SafeArea_AreaUpdated], (function(a) {
                        e.onSafeRadiusUpdated(a)
                    }
                    ), this),
                    this.onSafeRadiusUpdated(1e3)
                }
                ,
                o.onDisable = function() {
                    c.off(d[d.SafeArea_AddSafeAreaMaterial], this.addSafeAreaMaterial, this),
                    c.off(d[d.SafeArea_RemoveSafeAreaMaterial], this.removeSafeAreaMaterial, this),
                    c.off(d[d.SafeArea_AreaUpdated], this._areaUpdateCallback, this)
                }
                ,
                o.addSafeAreaMaterial = function(e) {
                    for (var a, r = this, t = function() {
                        var e = a.value;
                        -1 === r._safeAreaMaterials.findIndex((function(a) {
                            return a === e
                        }
                        )) && (r._safeAreaMaterials.push(e),
                        r._currentRadius >= 0 && e.setProperty(r._radiusParameter, r._currentRadius))
                    }, i = s(e); !(a = i()).done; )
                        t()
                }
                ,
                o.removeSafeAreaMaterial = function(e) {
                    for (var a, r = this, t = function() {
                        var e = a.value
                          , t = r._safeAreaMaterials.findIndex((function(a) {
                            return a === e
                        }
                        ));
                        -1 !== t && r._safeAreaMaterials.splice(t, 1)
                    }, i = s(e); !(a = i()).done; )
                        t()
                }
                ,
                o.onSafeRadiusUpdated = function(e) {
                    this._currentRadius = e;
                    for (var a, r = s(this._safeAreaMaterials); !(a = r()).done; ) {
                        a.value.setProperty(this._radiusParameter, this._currentRadius)
                    }
                }
                ,
                a
            }(u)).prototype, "_radiusParameter", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "radius"
                }
            }),
            M = a(h.prototype, "_safeAreaMaterials", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            _ = h)) || _));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimationVariableType.ts", ["cc"], (function(e) {
    "use strict";
    var i;
    return {
        setters: [function(e) {
            i = e.cclegacy
        }
        ],
        execute: function() {
            var n;
            e("AnimationVariableType", void 0),
            i._RF.push({}, "33f86T7r/9PkJ4Bxz+EP3Jy", "AnimationVariableType", void 0),
            function(e) {
                e[e.None = 0] = "None",
                e[e.Trigger = 1] = "Trigger",
                e[e.Boolean = 2] = "Boolean",
                e[e.Number = 3] = "Number"
            }(n || (n = e("AnimationVariableType", {}))),
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-UI-ButtonGameEvent.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./ENUM-GameEvents.ts", "./TS-UI-ButtonEvent.ts"], (function(t) {
    "use strict";
    var e, n, r, i, o, a, c, u, s, p;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            r = t.initializerDefineProperty,
            i = t.assertThisInitialized
        }
        , function(t) {
            o = t.cclegacy,
            a = t._decorator,
            c = t.Enum
        }
        , function(t) {
            u = t.projectEvent
        }
        , function(t) {
            s = t.GameEvents
        }
        , function(t) {
            p = t.TS_UI_ButtonEvent
        }
        ],
        execute: function() {
            var v, l, f, y, E;
            o._RF.push({}, "33fbfvcKCVKi5q8DCetaVL+", "TS-UI-ButtonGameEvent", void 0);
            var _ = a.ccclass
              , m = a.property;
            t("TS_UI_ButtonGameEvent", (v = _("TS_UI_ButtonGameEvent"),
            l = m({
                type: c(s)
            }),
            v((E = e((y = function(t) {
                function e() {
                    for (var e, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
                        o[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(o)) || this,
                    r(i(e), "eventType", E, i(e)),
                    e
                }
                return n(e, t),
                e.prototype.raise = function() {
                    var t = s[this.eventType];
                    u.emit(t)
                }
                ,
                e
            }(p)).prototype, "eventType", [l], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return s.Game_Start
                }
            }),
            f = y)) || f));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ItemsDatabase.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts", "./Item.ts", "./ItemsSaveController.ts", "./ItemsDatabaseEvents.ts"], (function(e) {
    "use strict";
    var t, s, a, n, o, r, i, m, c, u, l, I, g, f;
    return {
        setters: [function(e) {
            t = e.createForOfIteratorHelperLoose,
            s = e.createClass,
            a = e.defineProperty
        }
        , function(e) {
            n = e.cclegacy,
            o = e._decorator,
            r = e.game,
            i = e.Game,
            m = e.resources,
            c = e.JsonAsset
        }
        , function(e) {
            u = e.logger
        }
        , function(e) {
            l = e.projectEvent
        }
        , function(e) {
            I = e.Item
        }
        , function(e) {
            g = e.ItemsSaveController
        }
        , function(e) {
            f = e.ItemsDatabaseEvents
        }
        ],
        execute: function() {
            var p;
            n._RF.push({}, "34d11BPM2pB7pxr7AQWiaSZ", "ItemsDatabase", void 0);
            var d = o.ccclass
              , v = (o.property,
            e("ItemsDatabase", d("ItemsDatabase")(p = function() {
                function e() {
                    var e = this;
                    a(this, "_gameItems", []),
                    r.on(i.EVENT_GAME_INITED, (function() {
                        m.load("Skins/slime-skins", c, null, e.onLoadComplete.bind(e))
                    }
                    ), this)
                }
                return e.prototype.onLoadComplete = function(e, s) {
                    var a = s.json.items;
                    this._gameItems = [];
                    for (var n, o = t(a); !(n = o()).done; ) {
                        var r = n.value;
                        this._gameItems.push(new I(r))
                    }
                    0 === g.items.length && (g.items = this.gameItems),
                    u.log("Finished loading Game Items. " + this._gameItems.length + " items loaded."),
                    l.emit(f[f.ItemsDatabase_Loaded], this)
                }
                ,
                s(e, [{
                    key: "gameItems",
                    get: function() {
                        return this._gameItems
                    }
                }]),
                e
            }()) || p));
            e("itemsDatabase", new v);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DebugDraw.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts"], (function(e) {
    "use strict";
    var n, i, o, t, r, a, c, s, l, u, h, g;
    return {
        setters: [function(e) {
            n = e.defineProperty,
            i = e.inheritsLoose,
            o = e.assertThisInitialized
        }
        , function(e) {
            t = e.cclegacy,
            r = e._decorator,
            a = e.Canvas,
            c = e.Graphics,
            s = e.Color,
            l = e.Component
        }
        , function(e) {
            u = e.logger,
            h = e.LogCategory,
            g = e.LogType
        }
        ],
        execute: function() {
            var _, p, d;
            t._RF.push({}, "35b5fSfaRlOPKI14LMhoyZU", "DebugDraw", void 0);
            var v = r.ccclass
              , f = (r.property,
            r.requireComponent)
              , y = r.executionOrder;
            e("DebugDraw", v("DebugDraw")(_ = f(a)(_ = f(c)(_ = y(-1)((d = p = function(e) {
                function t() {
                    for (var i, t = arguments.length, r = new Array(t), a = 0; a < t; a++)
                        r[a] = arguments[a];
                    return i = e.call.apply(e, [this].concat(r)) || this,
                    n(o(i), "_graphics", null),
                    i
                }
                i(t, e);
                var r = t.prototype;
                return r.onLoad = function() {
                    null != t._instance && t._instance.isValid && t._instance.destroy(),
                    t._instance = this,
                    this._graphics = this.getComponent(c)
                }
                ,
                r.update = function() {
                    this._graphics && this._graphics.clear()
                }
                ,
                t.line = function(e, n, i, o) {
                    this._instance._checkDebugDrawValid();
                    var t = this._instance._graphics;
                    if (t && e) {
                        var r = e.convertToUINode(n, t.node)
                          , a = e.convertToUINode(i, t.node);
                        o && (t.strokeColor = o),
                        t.moveTo(r.x, r.y),
                        t.lineTo(a.x, a.y),
                        t.close(),
                        t.stroke()
                    }
                }
                ,
                t.circle = function(e, n, i, o) {
                    void 0 === i && (i = s.MAGENTA),
                    void 0 === o && (o = 10),
                    this._instance._checkDebugDrawValid();
                    var t = this._instance._graphics;
                    if (t && e) {
                        var r = e.convertToUINode(n, t.node);
                        i && (t.strokeColor = i),
                        t.circle(r.x, r.y, o),
                        t.stroke()
                    }
                }
                ,
                t.lineUI = function(e, n) {
                    this._instance._checkDebugDrawValid();
                    var i = this._instance._graphics;
                    i && (i.strokeColor = s.BLUE,
                    i.moveTo(e.x, e.y),
                    i.lineTo(n.x, n.y),
                    i.stroke())
                }
                ,
                r._checkDebugDrawValid = function() {
                    this._graphics && this._graphics.isValid || u.log("Dynamically instantiating debug canvas not working yet. Please add DebugDraw component to a canvas in scene.", h.Generic, g.Error)
                }
                ,
                t
            }(l),
            n(p, "_instance", null),
            _ = d)) || _) || _) || _) || _);
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Player-Score-Tracker.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./ENUM-GameEvents.ts", "./SlimeEvents.ts"], (function(e) {
    "use strict";
    var t, i, n, r, o, s, a, l, c, u, f;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.createClass,
            n = e.inheritsLoose,
            r = e.initializerDefineProperty,
            o = e.assertThisInitialized
        }
        , function(e) {
            s = e.cclegacy,
            a = e._decorator,
            l = e.Component
        }
        , function(e) {
            c = e.projectEvent
        }
        , function(e) {
            u = e.GameEvents
        }
        , function(e) {
            f = e.SlimeEvents
        }
        ],
        execute: function() {
            var _, b, h, y, p, E, m, d, P, S, v, k, g, T, D, B, w, z, j, G, F, I;
            e("PlayerTrackedDataEvents", void 0),
            s._RF.push({}, "36927j1UIxMIZjG3fPya3Sq", "TS-Player-Score-Tracker", void 0);
            var M, x = a.ccclass, C = a.property, L = e("PlayerTrackedData", (_ = x("PlayerTrackedData"),
            b = C({
                visible: !0
            }),
            h = C({
                visible: !0
            }),
            y = C({
                visible: !0
            }),
            p = C({
                visible: !0
            }),
            _((d = t((m = function() {
                function e(e, t, i, n) {
                    r(this, "_playerBestScore", d, this),
                    r(this, "_foodsEaten", P, this),
                    r(this, "_slimesEaten", S, this),
                    r(this, "_bestPosition", v, this),
                    this._playerBestScore = e,
                    this._foodsEaten = t,
                    this._slimesEaten = i,
                    this._bestPosition = n
                }
                return i(e, [{
                    key: "playerBestScore",
                    get: function() {
                        return this._playerBestScore
                    }
                }, {
                    key: "foodsEaten",
                    get: function() {
                        return this._foodsEaten
                    }
                }, {
                    key: "slimesEaten",
                    get: function() {
                        return this._slimesEaten
                    }
                }, {
                    key: "bestPosition",
                    get: function() {
                        return this._bestPosition
                    }
                }]),
                e
            }()).prototype, "_playerBestScore", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            P = t(m.prototype, "_foodsEaten", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            S = t(m.prototype, "_slimesEaten", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            v = t(m.prototype, "_bestPosition", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            E = m)) || E));
            e("TS_Player_Score_Tracker", (k = x("TS_Player_Score_Tracker"),
            g = C({
                visible: !0
            }),
            T = C({
                visible: !0
            }),
            D = C({
                visible: !0
            }),
            B = C({
                visible: !0
            }),
            k((j = t((z = function(e) {
                function t() {
                    for (var t, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                        n[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(n)) || this,
                    r(o(t), "_playerBestScore", j, o(t)),
                    r(o(t), "_foodsEaten", G, o(t)),
                    r(o(t), "_slimesEaten", F, o(t)),
                    r(o(t), "_bestPosition", I, o(t)),
                    t
                }
                n(t, e);
                var i = t.prototype;
                return i.onEnable = function() {
                    c.on(f[f.Slime_PlayerSlimeEaten], this.slimeEaten, this),
                    c.on(f[f.Slime_PlayerFoodEaten], this.foodEaten, this),
                    c.on(u[u.Game_Over], this.sendTrackedData, this)
                }
                ,
                i.onDisable = function() {
                    c.off(f[f.Slime_PlayerSlimeEaten], this.slimeEaten, this),
                    c.off(f[f.Slime_PlayerFoodEaten], this.foodEaten, this),
                    c.off(u[u.Game_Over], this.sendTrackedData, this)
                }
                ,
                i.setPlayerScore = function(e, t) {
                    e > this._playerBestScore && (this._playerBestScore = e),
                    t + 1 < this._bestPosition && (this._bestPosition = t + 1)
                }
                ,
                i.setPlayerPosition = function(e) {
                    e > this._bestPosition && (this._bestPosition = e)
                }
                ,
                i.slimeEaten = function() {
                    this._slimesEaten++
                }
                ,
                i.foodEaten = function() {
                    this._foodsEaten++
                }
                ,
                i.sendTrackedData = function() {
                    c.emit(M.finalData, new L(this._playerBestScore,this._foodsEaten,this._slimesEaten,this._bestPosition))
                }
                ,
                t
            }(l)).prototype, "_playerBestScore", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            G = t(z.prototype, "_foodsEaten", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            F = t(z.prototype, "_slimesEaten", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            I = t(z.prototype, "_bestPosition", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 100
                }
            }),
            w = z)) || w));
            !function(e) {
                e.finalData = "player-tracked-data-final"
            }(M || (M = e("PlayerTrackedDataEvents", {}))),
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-AnimationGraph-Helper.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./AnimationVariableType.ts"], (function(i) {
    "use strict";
    var n, e, t, a, l, r, s, o, u, c, m, h, p, _;
    return {
        setters: [function(i) {
            n = i.applyDecoratedDescriptor,
            e = i.inheritsLoose,
            t = i.initializerDefineProperty,
            a = i.assertThisInitialized,
            l = i.defineProperty,
            r = i.createForOfIteratorHelperLoose
        }
        , function(i) {
            s = i.cclegacy,
            o = i._decorator,
            u = i.animation,
            c = i.EventTouch,
            m = i.Node,
            h = i.Component
        }
        , function(i) {
            p = i.logger
        }
        , function(i) {
            _ = i.AnimationVariableType
        }
        ],
        execute: function() {
            var f, g, d, b, v, A, y;
            s._RF.push({}, "37b85WpHzdBn41+pXJNQa6l", "TS-AnimationGraph-Helper", void 0);
            var C = o.ccclass
              , T = o.property;
            i("TS_AnimationGraph_Helper", (f = C("TS_AnimationGraph_Helper"),
            g = T({
                visible: !0,
                type: u.AnimationController
            }),
            d = T({
                visible: !0
            }),
            f((A = n((v = function(i) {
                function n() {
                    for (var n, e = arguments.length, r = new Array(e), s = 0; s < e; s++)
                        r[s] = arguments[s];
                    return n = i.call.apply(i, [this].concat(r)) || this,
                    t(a(n), "_anim", A, a(n)),
                    t(a(n), "_debug", y, a(n)),
                    l(a(n), "_lastClipName", null),
                    l(a(n), "_animQueue", []),
                    n
                }
                e(n, i);
                var s = n.prototype;
                return s.setTrigger = function(i, n) {
                    var e = this;
                    null === this._anim || this._anim._isOnLoadCalled <= 0 ? this._animQueue.push({
                        call: function() {
                            return e.setTrigger(i, n)
                        }
                    }) : i instanceof c ? (this._debug && p.log("Animation clip: Set " + n),
                    this.scheduleOnce((function() {
                        return e._anim.setValue(n, !0)
                    }
                    ), .1)) : "string" == typeof i ? (this._debug && p.log("Animation clip: Set " + i),
                    this.scheduleOnce((function() {
                        return e._anim.setValue(i, !0)
                    }
                    ), .1)) : (this._debug && p.log("Animation clip: Set " + n),
                    this.scheduleOnce((function() {
                        return e._anim.setValue(n, !0)
                    }
                    ), .1))
                }
                ,
                s.setInt = function(i, n) {
                    var e = this;
                    if (null === this._anim || this._anim._isOnLoadCalled <= 0)
                        this._animQueue.push({
                            call: function() {
                                return e.setInt(i, n)
                            }
                        });
                    else {
                        var t = n.split(",");
                        this._debug && p.log("Animation clip: Set " + t[0] + " to: " + t[1]),
                        this.scheduleOnce((function() {
                            return e._anim.setValue(t[0], Number.parseInt(t[1]))
                        }
                        ), .1)
                    }
                }
                ,
                s.setFloat = function(i, n) {
                    var e = this;
                    if (null === this._anim || this._anim._isOnLoadCalled <= 0 || null === this._anim._graphEval)
                        this._animQueue.push({
                            call: function() {
                                return e.setFloat(i, n)
                            }
                        });
                    else {
                        var t = n.split(",");
                        this._debug && p.log("Animation clip: Set " + t[0] + " to: " + t[1]),
                        this.scheduleOnce((function() {
                            return e._anim.setValue(t[0], Number.parseFloat(t[1]))
                        }
                        ), .1)
                    }
                }
                ,
                s.setBool = function(i, n) {
                    var e = this;
                    if (null === this._anim || this._anim._isOnLoadCalled <= 0)
                        this._animQueue.push({
                            call: function() {
                                return e.setBool(i, n)
                            }
                        });
                    else {
                        var t = n.split(",");
                        this._debug && p.log("Animation clip: Set " + t[0] + " to: " + t[1]),
                        this.scheduleOnce((function() {
                            e._anim.setValue(t[0], "true" === t[1])
                        }
                        ), .1)
                    }
                }
                ,
                s.setVariable = function(i) {
                    i.animParamType === _.Boolean ? this.setBool(null, i.animParam + "," + i.paramValue) : i.animParamType === _.Trigger ? this.setTrigger(i.animParam, null) : i.animParamType === _.Number && this.setInt(null, i.animParam + "," + i.paramValue)
                }
                ,
                s.setTargetAnimation = function(i) {
                    i instanceof m ? this._anim = i.getComponent(u.AnimationController) : i instanceof u.AnimationController && (this._anim = i)
                }
                ,
                s.turnAnimatorOn = function() {
                    this._anim.enabled = !0
                }
                ,
                s.turnAnimatorOff = function() {
                    this._anim.enabled = !1
                }
                ,
                s.update = function() {
                    if (null !== this._anim && this._anim._isOnLoadCalled > 0 && null !== this._anim._graphEval && this._animQueue.length > 0 && (this._animQueue[0].call(),
                    this._animQueue.splice(0, 1)),
                    this._debug) {
                        for (var i, n = this._anim.getCurrentClipStatuses(0), e = !1, t = "Animation Clip: ", a = r(n); !(i = a()).done; ) {
                            var l = i.value;
                            this._lastClipName !== l.clip.name && (t += l.clip.name,
                            this._lastClipName = l.clip.name,
                            e = !0)
                        }
                        for (var s, o = this._anim.getVariables(), u = r(o); !(s = u()).done; ) {
                            var c = s.value
                              , m = c[0];
                            c[1];
                            t += "\n" + m + " = " + this._anim.getValue(m)
                        }
                        e && p.log(t)
                    }
                }
                ,
                s.onDestroy = function() {
                    this.unscheduleAllCallbacks()
                }
                ,
                n
            }(h)).prototype, "_anim", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            y = n(v.prototype, "_debug", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            b = v)) || b));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-AnimationBlend.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TS-AnimationGraph-Helper.ts"], (function(e) {
    "use strict";
    var n, i, t, r, l, o, a, s, c;
    return {
        setters: [function(e) {
            n = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            t = e.initializerDefineProperty,
            r = e.assertThisInitialized,
            l = e.defineProperty
        }
        , function(e) {
            o = e.cclegacy,
            a = e._decorator,
            s = e.Component
        }
        , function(e) {
            c = e.TS_AnimationGraph_Helper
        }
        ],
        execute: function() {
            var p, u, m, _, d;
            o._RF.push({}, "39057j6vj9KwIARqrrUYku8", "TS-Slime-AnimationBlend", void 0);
            var S = a.ccclass
              , f = a.property;
            e("TS_Slime_AnimationBlend", (p = S("TS_Slime_AnimationBlend"),
            u = f({
                type: c,
                visible: !0
            }),
            p((d = n((_ = function(e) {
                function n() {
                    for (var n, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
                        o[a] = arguments[a];
                    return n = e.call.apply(e, [this].concat(o)) || this,
                    t(r(n), "_animHelper", d, r(n)),
                    l(r(n), "_animationBlend", 0),
                    n
                }
                return i(n, e),
                n.prototype.setSlimeSize = function(e) {
                    this._animationBlend = 1 - (1 - 1 / (-.001 * (e * e + 1e3)) - 1),
                    this._animHelper.setFloat(null, "Blend," + this._animationBlend.toString())
                }
                ,
                n
            }(s)).prototype, "_animHelper", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            m = _)) || m));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AudioManagerInitializer.ts", ["cc", "./Logger.ts", "./AudioManager.ts", "./AudioData.ts"], (function(a) {
    "use strict";
    var i, t, n, e, o, u, r, d, g;
    return {
        setters: [function(a) {
            i = a.cclegacy,
            t = a.game,
            n = a.Game,
            e = a.resources,
            o = a.Prefab
        }
        , function(a) {
            u = a.logger,
            r = a.LogCategory
        }
        , function(a) {
            d = a.AudioManager
        }
        , function(a) {
            g = a.AudioData
        }
        ],
        execute: function() {
            i._RF.push({}, "39e33XnAQRJhpTBTgQcVQw7", "AudioManagerInitializer", void 0);
            a("audioManagerInitializer", new function() {
                t.on(n.EVENT_GAME_INITED, (function() {
                    e.load("audio/audioData", o, (function(a, i) {
                        if (a)
                            u.log("No default audio data found. Initiating an empty AudioManager", r.Audio),
                            d.instantiateNewAudioManager();
                        else {
                            u.log("Found default audio data: " + i, r.Audio);
                            var t = i.data.getComponent(g);
                            d.instantiateNewAudioManager(t)
                        }
                    }
                    ))
                }
                ), this)
            }
            );
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/KillBotsCheat.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./SlimeEvents.ts", "./TS-Slime-Player.ts"], (function(e) {
    "use strict";
    var t, n, i, s, o, l, r, c, a, u, h, f;
    return {
        setters: [function(e) {
            t = e.inheritsLoose,
            n = e.defineProperty,
            i = e.assertThisInitialized
        }
        , function(e) {
            s = e.cclegacy,
            o = e._decorator,
            l = e.input,
            r = e.Input,
            c = e.KeyCode,
            a = e.Component
        }
        , function(e) {
            u = e.projectEvent
        }
        , function(e) {
            h = e.SlimeEvents
        }
        , function(e) {
            f = e.TS_Slime_Player
        }
        ],
        execute: function() {
            var p;
            s._RF.push({}, "3a61e0UdvJO764d4bUxkCVP", "KillBotsCheat", void 0);
            var y = o.ccclass;
            o.property,
            e("KillBotsCheat", y("KillBotsCheat")(p = function(e) {
                function s() {
                    for (var t, s = arguments.length, o = new Array(s), l = 0; l < s; l++)
                        o[l] = arguments[l];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    n(i(t), "_bots", []),
                    t
                }
                t(s, e);
                var o = s.prototype;
                return o.onEnable = function() {
                    l.on(r.EventType.KEY_DOWN, this.keyPressed, this),
                    u.on(h[h.Slime_NewSlime], this.newSlime, this)
                }
                ,
                o.onDisable = function() {
                    l.off(r.EventType.KEY_DOWN, this.keyPressed, this),
                    u.off(h[h.Slime_NewSlime], this.newSlime, this)
                }
                ,
                o.newSlime = function(e) {
                    e instanceof f || this._bots.push(e)
                }
                ,
                o.keyPressed = function(e) {
                    if (e.keyCode === c.F1) {
                        for (var t = 0; t < this._bots.length; t++)
                            this._bots[t].eaten(null);
                        this._bots = []
                    }
                }
                ,
                s
            }(a)) || p);
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/UI-Fillbar.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, r, i, l, n, a, u, o, c, s;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            i = e.initializerDefineProperty,
            l = e.assertThisInitialized
        }
        , function(e) {
            n = e.cclegacy,
            a = e._decorator,
            u = e.Sprite,
            o = e.EventHandler,
            c = e.math,
            s = e.Component
        }
        ],
        execute: function() {
            var p, b, f, _, g, y, h, v, F;
            n._RF.push({}, "3b28eOkVQtF/507hbMwzYxn", "UI-Fillbar", void 0);
            var V = a.ccclass
              , m = a.property;
            e("UI_Fillbar", (p = V("UI_Fillbar"),
            b = m({
                visible: !0,
                type: u
            }),
            f = m({
                visible: !0,
                type: [o]
            }),
            _ = m({
                visible: !0,
                type: [o]
            }),
            p((h = t((y = function(e) {
                function t() {
                    for (var t, r = arguments.length, n = new Array(r), a = 0; a < r; a++)
                        n[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(n)) || this,
                    i(l(t), "_sprite", h, l(t)),
                    i(l(t), "_currentValue", v, l(t)),
                    i(l(t), "_targetValue", F, l(t)),
                    t
                }
                return r(t, e),
                t.prototype.setFillPercentage = function(e) {
                    o.emitEvents(this._currentValue, e.currentFillValue),
                    o.emitEvents(this._targetValue, e.targetFillValue),
                    this._sprite.fillRange = c.clamp(e.currentFillValue / e.targetFillValue, 0, 1)
                }
                ,
                t
            }(s)).prototype, "_sprite", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            v = t(y.prototype, "_currentValue", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            F = t(y.prototype, "_targetValue", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            g = y)) || g));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/MeshColor-Setter.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var r, t, o, n, i, l, s, a;
    return {
        setters: [function(e) {
            r = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            o = e.initializerDefineProperty,
            n = e.assertThisInitialized
        }
        , function(e) {
            i = e.cclegacy,
            l = e._decorator,
            s = e.RenderableComponent,
            a = e.Component
        }
        ],
        execute: function() {
            var c, u, p, h, d;
            i._RF.push({}, "3bad91bJJROtrq/iYNkKQPI", "MeshColor-Setter", void 0);
            var f = l.ccclass
              , y = l.property;
            e("MeshColor_Setter", (c = f("MeshColor_Setter"),
            u = y({
                visible: !0,
                type: s
            }),
            c((d = r((h = function(e) {
                function r() {
                    for (var r, t = arguments.length, i = new Array(t), l = 0; l < t; l++)
                        i[l] = arguments[l];
                    return r = e.call.apply(e, [this].concat(i)) || this,
                    o(n(r), "_renderer", d, n(r)),
                    r
                }
                return t(r, e),
                r.prototype.setColor = function(e) {
                    this._renderer.getRenderMaterial(0).setProperty("mainColor", e)
                }
                ,
                r
            }(a)).prototype, "_renderer", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            p = h)) || p));
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TweenCollection.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TweenBase.ts"], (function(e) {
    "use strict";
    var n, t, o, i, r, s, c, l, a;
    return {
        setters: [function(e) {
            n = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            o = e.initializerDefineProperty,
            i = e.assertThisInitialized,
            r = e.defineProperty
        }
        , function(e) {
            s = e.cclegacy,
            c = e._decorator,
            l = e.Component
        }
        , function(e) {
            a = e.TweenBase
        }
        ],
        execute: function() {
            var u, p, f;
            s._RF.push({}, "3ca0eUR64hHCIpL0fRF8hQx", "TweenCollection", void 0);
            var h = c.ccclass
              , w = c.property
              , y = c.menu;
            e("TweenCollection", h("TweenCollection")(u = y("Tween/Collection")((f = n((p = function(e) {
                function n() {
                    for (var n, t = arguments.length, s = new Array(t), c = 0; c < t; c++)
                        s[c] = arguments[c];
                    return n = e.call.apply(e, [this].concat(s)) || this,
                    o(i(n), "getInChildren", f, i(n)),
                    r(i(n), "tweens", []),
                    n
                }
                t(n, e);
                var s = n.prototype;
                return s.onLoad = function() {
                    this.getInChildren ? this.tweens = this.node.getComponentsInChildren(a) : this.tweens = this.node.getComponents(a)
                }
                ,
                s.play = function() {
                    this.tweens.forEach((function(e) {
                        e.play()
                    }
                    ))
                }
                ,
                s.reset = function() {
                    this.tweens.forEach((function(e) {
                        e.reset()
                    }
                    ))
                }
                ,
                s.playReverse = function() {
                    this.tweens.forEach((function(e) {
                        e.playReverse()
                    }
                    ))
                }
                ,
                s.stop = function() {
                    this.tweens.forEach((function(e) {
                        e.stop()
                    }
                    ))
                }
                ,
                n
            }(l)).prototype, "getInChildren", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            u = p)) || u) || u);
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-OnEnable.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var n, t, r, i, o, a, l, c;
    return {
        setters: [function(e) {
            n = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            r = e.initializerDefineProperty,
            i = e.assertThisInitialized
        }
        , function(e) {
            o = e.cclegacy,
            a = e._decorator,
            l = e.EventHandler,
            c = e.Component
        }
        ],
        execute: function() {
            var s, u, p, b, f;
            o._RF.push({}, "3da91Bjk/lNCbNlngdCFi0u", "TS-OnEnable", void 0);
            var y = a.ccclass
              , E = a.property;
            e("TS_OnEnable", (s = y("TS_OnEnable"),
            u = E({
                type: [l],
                visible: !0
            }),
            s((f = n((b = function(e) {
                function n() {
                    for (var n, t = arguments.length, o = new Array(t), a = 0; a < t; a++)
                        o[a] = arguments[a];
                    return n = e.call.apply(e, [this].concat(o)) || this,
                    r(i(n), "_onEnable", f, i(n)),
                    n
                }
                return t(n, e),
                n.prototype.onEnable = function() {
                    l.emitEvents(this._onEnable)
                }
                ,
                n
            }(c)).prototype, "_onEnable", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            p = b)) || p));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AudioObject.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts", "./AudioEnums.ts"], (function(i) {
    "use strict";
    var t, e, l, o, a, s, u, n, d, h;
    return {
        setters: [function(i) {
            t = i.createClass,
            e = i.defineProperty
        }
        , function(i) {
            l = i.cclegacy,
            o = i.clamp
        }
        , function(i) {
            a = i.logger,
            s = i.LogCategory,
            u = i.LogType
        }
        , function(i) {
            n = i.projectEvent
        }
        , function(i) {
            d = i.AudioEvent,
            h = i.LoopMode
        }
        ],
        execute: function() {
            l._RF.push({}, "3fd7eqNPmJG85niU6MZ1UDs", "AudioObject", void 0);
            i("AudioObject", function() {
                function i() {
                    e(this, "_audioItem", void 0),
                    e(this, "_audioSource", void 0),
                    e(this, "_onEndCallback", void 0),
                    e(this, "_valid", !1),
                    e(this, "_clipsToPlay", void 0),
                    e(this, "_playingClipIndex", 0),
                    e(this, "_paused", !1),
                    e(this, "_muteModifier", 1),
                    e(this, "_volume", 1),
                    e(this, "_playNextClipCallback", void 0)
                }
                var l = i.prototype;
                return l.initialize = function(i, t, e, l) {
                    var o = this;
                    this._audioItem = i,
                    this._audioSource = t,
                    this._onEndCallback = l,
                    this._valid = !0,
                    this._playingClipIndex = 0,
                    this._paused = !1,
                    this._volume = this._audioItem.volume,
                    this.mute = e,
                    n.on(d.SetMuted, (function(i) {
                        o.mute = i
                    }
                    ))
                }
                ,
                l.play = function() {
                    this._valid ? 0 != this._audioItem.length ? (this._paused ? (this._playNextClipCallback = this.playNextClip.bind(this),
                    this._audioSource.scheduleOnce(this._playNextClipCallback, this._audioSource.duration - this._audioSource.currentTime),
                    this._paused = !1) : (this._clipsToPlay = this._audioItem.getAudioClipsToPlay(),
                    this._playingClipIndex = 0,
                    this._audioSource.clip = this._clipsToPlay[this._playingClipIndex],
                    this._playNextClipCallback = this.playNextClip.bind(this),
                    this._audioSource.scheduleOnce(this._playNextClipCallback, this._clipsToPlay[this._playingClipIndex].getDuration())),
                    this._audioSource.play()) : this.end() : a.log("Play was called on an invalid AudioObject", s.Audio, u.Error)
                }
                ,
                l.pause = function() {
                    this._valid ? (this._audioSource.unschedule(this._playNextClipCallback),
                    this._playNextClipCallback = null,
                    this._audioSource.pause(),
                    this._paused = !0) : a.log("Pause was called on an invalid AudioObject", s.Audio, u.Error)
                }
                ,
                l.stop = function() {
                    this._valid ? (this._audioSource.unschedule(this._playNextClipCallback),
                    this._playNextClipCallback = null,
                    this._audioSource.stop(),
                    this.end()) : a.log("Stop was called on an invalid AudioObject", s.Audio, u.Error)
                }
                ,
                l.scaleVolume = function(i) {
                    this._valid ? this._audioSource.volume *= i : a.log("ScaleVolume was called on an invalid AudioObject", s.Audio, u.Error)
                }
                ,
                l.playNextClip = function() {
                    switch (this._audioItem.loopMode) {
                    case h.Do_Not_Loop:
                        if (this._playingClipIndex += 1,
                        this._playingClipIndex >= this._clipsToPlay.length)
                            return void this.end();
                    case h.Loop_Subitem:
                        break;
                    case h.Loop_Sequence:
                        this._playingClipIndex += 1,
                        this._playingClipIndex == this._clipsToPlay.length && (this._playingClipIndex = 0);
                    case h.Play_Sequence_Loop_Last:
                        this._playingClipIndex < this._clipsToPlay.length - 1 && (this._playingClipIndex += 1)
                    }
                    this._playNextClipCallback = this.playNextClip.bind(this),
                    this._audioSource.scheduleOnce(this._playNextClipCallback, this._clipsToPlay[this._playingClipIndex].getDuration()),
                    this._audioSource.clip = this._clipsToPlay[this._playingClipIndex],
                    this._audioSource.play()
                }
                ,
                l.end = function() {
                    this._valid && (this._audioItem = null,
                    this._audioSource = null,
                    this._valid = !1,
                    this._onEndCallback(),
                    this._onEndCallback = null)
                }
                ,
                l.updateVolume = function() {
                    this._audioSource && (this._audioSource.volume = this._volume * this._muteModifier)
                }
                ,
                t(i, [{
                    key: "isValid",
                    get: function() {
                        return this._valid
                    }
                }, {
                    key: "playing",
                    get: function() {
                        return !!this.isValid && this._audioSource.playing
                    }
                }, {
                    key: "volume",
                    get: function() {
                        return this._volume
                    },
                    set: function(i) {
                        this._volume = o(i, 0, 1),
                        this.updateVolume()
                    }
                }, {
                    key: "mute",
                    get: function() {
                        return 0 == this._muteModifier
                    },
                    set: function(i) {
                        this._muteModifier = i ? 0 : 1,
                        this.updateVolume()
                    }
                }]),
                i
            }());
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/UICamera.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var n, t, r, a, i, s, c, o;
    return {
        setters: [function(e) {
            n = e.defineProperty,
            t = e.inheritsLoose,
            r = e.assertThisInitialized,
            a = e.createClass
        }
        , function(e) {
            i = e.cclegacy,
            s = e._decorator,
            c = e.Camera,
            o = e.Component
        }
        ],
        execute: function() {
            var u, l, h;
            i._RF.push({}, "3fe40hRLidOXpQ2NiARuPUM", "UICamera", void 0);
            var f = s.ccclass
              , p = s.requireComponent
              , _ = s.executionOrder;
            e("UICamera", f("UICamera")(u = p(c)(u = _(-5)((h = l = function(e) {
                function i() {
                    for (var t, a = arguments.length, i = new Array(a), s = 0; s < a; s++)
                        i[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(i)) || this,
                    n(r(t), "_camera", null),
                    t
                }
                t(i, e);
                var s = i.prototype;
                return s.onLoad = function() {
                    i._instance ? this.node.destroy() : (i._instance = this,
                    this._camera = this.node.getComponent(c))
                }
                ,
                s.onDestroy = function() {
                    i._instance === this && (i._instance = null)
                }
                ,
                a(i, null, [{
                    key: "instance",
                    get: function() {
                        return this._instance
                    }
                }, {
                    key: "camera",
                    get: function() {
                        if (this.instance)
                            return this.instance._camera
                    }
                }]),
                i
            }(o),
            n(l, "_instance", null),
            u = h)) || u) || u) || u);
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-FoodAbsorb.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TS-SlimeFood.ts", "./TS-Slime-BaseAbsorb.ts"], (function(o) {
    "use strict";
    var t, e, s, i, n, r, l;
    return {
        setters: [function(o) {
            t = o.inheritsLoose,
            e = o.defineProperty,
            s = o.assertThisInitialized
        }
        , function(o) {
            i = o.cclegacy,
            n = o._decorator
        }
        , function(o) {
            r = o.TS_SlimeFood
        }
        , function(o) {
            l = o.TS_Slime_BaseAbsorb
        }
        ],
        execute: function() {
            var c;
            i._RF.push({}, "405d5QJlkND5qnJHSPRCLqD", "TS-Slime-FoodAbsorb", void 0);
            var u = n.ccclass;
            n.property,
            o("TS_Slime_FoodAbsorb", u("TS_Slime_FoodAbsorb")(c = function(o) {
                function i() {
                    for (var t, i = arguments.length, n = new Array(i), r = 0; r < i; r++)
                        n[r] = arguments[r];
                    return t = o.call.apply(o, [this].concat(n)) || this,
                    e(s(t), "_foods", []),
                    t
                }
                t(i, o);
                var n = i.prototype;
                return n.trackCollider = function(o) {
                    var t = this.getFood(o);
                    null !== t && this._foods.push(t)
                }
                ,
                n.untrackCollider = function(o) {
                    var t = this.getFood(o)
                      , e = this._foods.findIndex((function(o) {
                        return o === t
                    }
                    ));
                    -1 !== e && this._foods.splice(e, 1)
                }
                ,
                n.getFood = function(o) {
                    var t = o.node.getComponent(r);
                    return null !== t ? t : null
                }
                ,
                n.update = function() {
                    for (var o = this._foods.length - 1; o >= 0; o--)
                        this._foods[o].canBeAbsorbed(this.slime) && (this.slime.absorb(this._foods[o]),
                        this._foods.splice(o, 1))
                }
                ,
                i
            }(l)) || c);
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-OnStart.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var r, e, n, i, o, a, c, s;
    return {
        setters: [function(t) {
            r = t.applyDecoratedDescriptor,
            e = t.inheritsLoose,
            n = t.initializerDefineProperty,
            i = t.assertThisInitialized
        }
        , function(t) {
            o = t.cclegacy,
            a = t._decorator,
            c = t.EventHandler,
            s = t.Component
        }
        ],
        execute: function() {
            var u, l, p, S, f;
            o._RF.push({}, "410e2HhWdBJvqVVRBYZrqQz", "TS-OnStart", void 0);
            var h = a.ccclass
              , v = a.property;
            t("TS_OnStart", (u = h("TS_OnStart"),
            l = v([c]),
            u((f = r((S = function(t) {
                function r() {
                    for (var r, e = arguments.length, o = new Array(e), a = 0; a < e; a++)
                        o[a] = arguments[a];
                    return r = t.call.apply(t, [this].concat(o)) || this,
                    n(i(r), "onStart", f, i(r)),
                    r
                }
                return e(r, t),
                r.prototype.start = function() {
                    c.emitEvents(this.onStart)
                }
                ,
                r
            }(s)).prototype, "onStart", [l], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            p = S)) || p));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TutorialSaveController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./SaveGame.ts"], (function(e) {
    "use strict";
    var t, n, o;
    return {
        setters: [function(e) {
            t = e.createClass
        }
        , function(e) {
            n = e.cclegacy
        }
        , function(e) {
            o = e.saveGame
        }
        ],
        execute: function() {
            n._RF.push({}, "44643Tpn+pOObRhPoasnP4x", "TutorialSaveController", void 0);
            e("TutorialSaveController", function() {
                function e() {}
                return t(e, null, [{
                    key: "showMenuTutorial",
                    get: function() {
                        return 0 === o.getHighScore()
                    }
                }]),
                e
            }());
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-Skill-Divide.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts", "./SlimeEvents.ts", "./TS_Slime.ts", "./TS_CharacterMovement.ts", "./TS_CharacterMovemenAISteering.ts", "./DivideState.ts", "./TS_CharacterMovemenJoystickSteering.ts", "./TS_Slime_ModelLoader.ts", "./TS_Slime_ModelRandomizer.ts", "./TS-Slime-SkillConfig-Divide.ts"], (function(i) {
    "use strict";
    var e, t, n, o, s, r, l, a, h, _, d, c, u, S, m, f, v, g, C, D, y, p, P, b, T, z, k, w, R, F, I;
    return {
        setters: [function(i) {
            e = i.applyDecoratedDescriptor,
            t = i.inheritsLoose,
            n = i.initializerDefineProperty,
            o = i.assertThisInitialized,
            s = i.defineProperty,
            r = i.createClass
        }
        , function(i) {
            l = i.cclegacy,
            a = i._decorator,
            h = i.Prefab,
            _ = i.EventHandler,
            d = i.Node,
            c = i.input,
            u = i.Input,
            S = i.game,
            m = i.math,
            f = i.Vec3,
            v = i.instantiate,
            g = i.ParticleSystem,
            C = i.KeyCode,
            D = i.Component
        }
        , function(i) {
            y = i.logger
        }
        , function(i) {
            p = i.projectEvent
        }
        , function(i) {
            P = i.SlimeEvents
        }
        , function(i) {
            b = i.TS_Slime
        }
        , function(i) {
            T = i.CharacterMovement
        }
        , function(i) {
            z = i.TS_CharacterMovementAISteering
        }
        , function(i) {
            k = i.DivideState
        }
        , function(i) {
            w = i.TS_CharacterMovementJoystickSteering
        }
        , function(i) {
            R = i.TS_Slime_ModelLoader
        }
        , function(i) {
            F = i.TS_Slime_ModelRandomizer
        }
        , function(i) {
            I = i.TS_Slime_SkillConfig_Divide
        }
        ],
        execute: function() {
            var M, V, U, X, E, N, A, K, O, x, L, j, J, W, H, Y, B;
            l._RF.push({}, "45036yzSCxAR7bKOf+btmz5", "TS-Slime-Skill-Divide", void 0);
            var q = a.ccclass
              , G = a.property;
            i("TS_Slime_Skill_Divide", (M = q("TS_Slime_Skill_Divide"),
            V = G({
                visible: !0,
                type: h
            }),
            U = G({
                visible: !0,
                type: b
            }),
            X = G({
                type: [_],
                visible: !0
            }),
            E = G({
                type: [_],
                visible: !0
            }),
            N = G({
                type: d,
                visible: !0
            }),
            A = G({
                type: d,
                visible: !0
            }),
            K = G({
                visible: !0
            }),
            M((L = e((x = function(i) {
                function e() {
                    for (var e, t = arguments.length, r = new Array(t), l = 0; l < t; l++)
                        r[l] = arguments[l];
                    return e = i.call.apply(i, [this].concat(r)) || this,
                    n(o(e), "_configPrefab", L, o(e)),
                    s(o(e), "_config", null),
                    n(o(e), "_slime", j, o(e)),
                    n(o(e), "_onDivide", J, o(e)),
                    n(o(e), "_onUnite", W, o(e)),
                    n(o(e), "_divideDashTarget", H, o(e)),
                    n(o(e), "_uniteVFX", Y, o(e)),
                    n(o(e), "_debug", B, o(e)),
                    s(o(e), "_isClone", !1),
                    s(o(e), "_isPlayer", !1),
                    s(o(e), "_isUniting", !1),
                    s(o(e), "_dashTargetPoint", null),
                    s(o(e), "_dashStartPoint", null),
                    s(o(e), "_dashStartTime", 0),
                    s(o(e), "_dashDuration", 0),
                    s(o(e), "_dashCallback", null),
                    s(o(e), "_cdStartTime", 0),
                    s(o(e), "_cdDuration", 0),
                    s(o(e), "_clone", null),
                    s(o(e), "_currentState", k.DivideNotReady),
                    s(o(e), "_uniteVFXPositionOffset", null),
                    s(o(e), "_uniteVFXPosition", null),
                    e
                }
                t(e, i);
                var l = e.prototype;
                return l.start = function() {
                    var i = this._configPrefab.data;
                    this._config = i.getComponent(I),
                    this._uniteVFXPositionOffset = this._uniteVFX.worldPosition.clone().subtract(this._slime.node.worldPosition.clone())
                }
                ,
                l.onEnable = function() {
                    this._isPlayer = this._slime.playerID.includes("player"),
                    this._isPlayer && !this._isClone && (c.on(u.EventType.KEY_DOWN, this.onKeyPressed, this),
                    p.on(P[P.Slime_PlayerDivideClicked], this.toggleDivide, this))
                }
                ,
                l.onDisable = function() {
                    this._isPlayer && !this._isClone && (c.on(u.EventType.KEY_DOWN, this.onKeyPressed, this),
                    p.on(P[P.Slime_PlayerDivideClicked], this.toggleDivide, this))
                }
                ,
                l.onDestroy = function() {
                    null !== this._clone && (this._isClone || (this._clone._isClone = !1),
                    this._clone._clone = null)
                }
                ,
                l.update = function() {
                    this.checkState()
                }
                ,
                l.lateUpdate = function() {
                    if (null !== this._dashTargetPoint) {
                        var i = S.totalTime / 1e3 - this._dashStartTime
                          , e = m.clamp(i / this._dashDuration, 0, 1)
                          , t = new f;
                        f.lerp(t, this._dashStartPoint, this._dashTargetPoint, e),
                        this._slime.node.setPosition(t),
                        this._currentState === k.Uniting && e < 1 && (this._isClone || this._uniteVFX.setWorldPosition(new f(this._uniteVFXPosition.x,this._uniteVFX.worldPosition.y,this._uniteVFXPosition.z)),
                        this._slime.renderNode.lookAt(this._clone._slime.renderNode.worldPosition)),
                        1 == e && (this._dashTargetPoint = null,
                        null !== this._dashCallback && this._dashCallback())
                    }
                }
                ,
                l.checkState = function() {
                    if (!this._isClone)
                        if (this._isDivided && null === this._clone && (this._slime.Size < this._config.minSize ? this.setCurrentState(k.DivideNotReady) : this.setCurrentState(k.DivideReady)),
                        this._currentState === k.DivideNotReady)
                            this._slime.Size >= this._config.minSize && this.setCurrentState(k.DivideReady);
                        else if (this._currentState === k.DivideReady)
                            this._slime.Size < this._config.minSize && this.setCurrentState(k.DivideNotReady);
                        else if (this._currentState === k.DivideCD) {
                            var i = S.totalTime / 1e3 - this._cdStartTime
                              , e = Math.max(Math.ceil(this._cdDuration - i), 0);
                            this._isPlayer && p.emit(P[P.Slime_PlayerDivideCD], e),
                            0 === e && this.setCurrentState(k.UniteReady)
                        } else if (this._currentState === k.UniteCD) {
                            var t = S.totalTime / 1e3 - this._cdStartTime
                              , n = Math.max(Math.ceil(this._cdDuration - t), 0);
                            this._isPlayer && p.emit(P[P.Slime_PlayerDivideCD], n),
                            0 === n && (this._slime.Size < this._config.minSize ? this.setCurrentState(k.DivideNotReady) : this.setCurrentState(k.DivideReady))
                        }
                }
                ,
                l.toggleDivide = function() {
                    this.canDivide() ? this.divide() : this.canUnite() && this.unite()
                }
                ,
                l.canDivide = function() {
                    return this._currentState === k.DivideReady
                }
                ,
                l.divide = function() {
                    var i = this;
                    if (this.canDivide()) {
                        var t = this._slime.Size / 2;
                        this._slime.decrease(t);
                        var n = this._slime.node
                          , o = v(n);
                        (this._isPlayer ? o.getComponentInChildren(R) : o.getComponentInChildren(F)).enabled = !1;
                        var s = o.getComponentInChildren(e);
                        this._clone = s,
                        s._slime.setAsClone(this._slime),
                        this._isPlayer ? o.getComponentInChildren(w).setCloneJoystick(this._slime.getComponentInChildren(w)) : o.getComponentInChildren(z).setCloneAI(this._slime.getComponentInChildren(z)),
                        o.parent = n.parent,
                        o.setPosition(n.position),
                        o.setRotation(n.rotation),
                        o.getComponentInChildren(T).setCloneMovement(n.getComponentInChildren(T)),
                        s._isClone = !0,
                        s._clone = this,
                        s.dashTo(this._divideDashTarget.worldPosition.clone(), this._config.divideDuration, (function() {
                            i._cdStartTime = S.totalTime / 1e3,
                            i._cdDuration = i._config.divideCD + i._slime.Size * i._config.divideSizeCD,
                            i.setCurrentState(k.DivideCD)
                        }
                        )),
                        this.setCurrentState(k.Dividing),
                        _.emitEvents(this._onDivide)
                    }
                }
                ,
                l.dashTo = function(i, e, t) {
                    this._dashStartPoint = this._slime.node.worldPosition.clone(),
                    this._dashDuration = e,
                    this._dashStartTime = S.totalTime / 1e3,
                    null != t && (this._dashCallback = t),
                    i.y = this._slime.node.position.y,
                    this._dashTargetPoint = i
                }
                ,
                l.canUnite = function() {
                    return !this._isClone && this._currentState === k.UniteReady
                }
                ,
                l.unite = function() {
                    var i = this;
                    if (this.canUnite()) {
                        var e = new f;
                        f.lerp(e, this._slime.node.worldPosition.clone(), this._clone._slime.node.worldPosition.clone(), .5),
                        this._uniteVFXPosition = e.clone().add(this._uniteVFXPositionOffset),
                        this._debug && y.log("Unite VFX Position Set " + e + " " + this._uniteVFXPosition);
                        for (var t = this._uniteVFX.getComponentsInChildren(g), n = 0; n < t.length; n++)
                            t[n].play();
                        this._clone.dashTo(e, this._config.uniteDuration),
                        this.dashTo(e, this._config.uniteDuration, (function() {
                            i._slime.absorb(i._clone._slime),
                            i._clone = null,
                            i._cdStartTime = S.totalTime / 1e3,
                            i._cdDuration = i._config.uniteCD + i._slime.Size * i._config.uniteSizeCD,
                            i.setCurrentState(k.UniteCD)
                        }
                        )),
                        this.setCurrentState(k.Uniting)
                    }
                }
                ,
                l.setCurrentState = function(i) {
                    this._debug && y.log("Divide State: " + k[this._currentState] + " -> " + k[i]),
                    this._currentState = i,
                    null !== this._clone && (this._clone._currentState = i),
                    this._isPlayer && p.emit(k[i])
                }
                ,
                l.onKeyPressed = function(i) {
                    i.keyCode === C.SPACE && this.toggleDivide()
                }
                ,
                r(e, [{
                    key: "divideDashTargetPosition",
                    get: function() {
                        return this._divideDashTarget.worldPosition.clone()
                    }
                }, {
                    key: "currentState",
                    get: function() {
                        return this._currentState
                    }
                }, {
                    key: "_isDivided",
                    get: function() {
                        return this._currentState === k.Dividing || this._currentState === k.DivideCD || this._currentState === k.UniteReady
                    }
                }]),
                e
            }(D)).prototype, "_configPrefab", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            j = e(x.prototype, "_slime", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            J = e(x.prototype, "_onDivide", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            W = e(x.prototype, "_onUnite", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            H = e(x.prototype, "_divideDashTarget", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Y = e(x.prototype, "_uniteVFX", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            B = e(x.prototype, "_debug", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            O = x)) || O));
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SkinSelection-UpdateTextureSprites.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./SkinSelection-SetModel.ts"], (function(e) {
    "use strict";
    var i, t, r, n, l, o, u, s, a, c, p;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            t = e.initializerDefineProperty,
            r = e.inheritsLoose,
            n = e.assertThisInitialized,
            l = e.defineProperty
        }
        , function(e) {
            o = e.cclegacy,
            u = e._decorator,
            s = e.SpriteFrame,
            a = e.Sprite,
            c = e.Component
        }
        , function(e) {
            p = e.SkinSelection_SetModel
        }
        ],
        execute: function() {
            var b, f, d, S, y, _, h, m, v, k, g, z, w, M, F, T, x, D, U, P, B, I;
            o._RF.push({}, "45507+V7B5O9qT4vi73sOer", "SkinSelection-UpdateTextureSprites", void 0);
            var L = u.ccclass
              , O = u.property
              , R = (b = L("TextureSprites"),
            f = O({
                visible: !0
            }),
            d = O({
                visible: !0,
                type: s
            }),
            S = O({
                visible: !0,
                type: s
            }),
            y = O({
                visible: !0,
                type: s
            }),
            b((m = i((h = function() {
                t(this, "id", m, this),
                t(this, "icon", v, this),
                t(this, "mask", k, this),
                t(this, "outline", g, this)
            }
            ).prototype, "id", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            v = i(h.prototype, "icon", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            k = i(h.prototype, "mask", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            g = i(h.prototype, "outline", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            _ = h)) || _);
            e("SkinSelection_UpdateTextureSprites", (z = L("SkinSelection_UpdateTextureSprites"),
            w = O({
                visible: !0,
                type: [R]
            }),
            M = O({
                visible: !0,
                type: a
            }),
            F = O({
                visible: !0,
                type: a
            }),
            T = O({
                visible: !0,
                type: a
            }),
            z((U = i((D = function(e) {
                function i() {
                    for (var i, r = arguments.length, o = new Array(r), u = 0; u < r; u++)
                        o[u] = arguments[u];
                    return i = e.call.apply(e, [this].concat(o)) || this,
                    t(n(i), "_sprites", U, n(i)),
                    t(n(i), "_icon", P, n(i)),
                    t(n(i), "_mask", B, n(i)),
                    t(n(i), "_outline", I, n(i)),
                    l(n(i), "_currentSelectedModel", null),
                    i
                }
                r(i, e);
                var o = i.prototype;
                return o.update = function() {
                    var e = p.selectedModelID;
                    this._currentSelectedModel !== e && this.setSpritesForModel(e)
                }
                ,
                o.setSpritesForModel = function(e) {
                    var i = this._sprites.find((function(i) {
                        return i.id === e
                    }
                    ));
                    this._icon.spriteFrame = i.icon,
                    this._mask.spriteFrame = i.mask,
                    this._outline.spriteFrame = i.outline,
                    this._currentSelectedModel = e
                }
                ,
                i
            }(c)).prototype, "_sprites", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            P = i(D.prototype, "_icon", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            B = i(D.prototype, "_mask", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            I = i(D.prototype, "_outline", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            x = D)) || x));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/WorldShadowSelector.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./WorldEvents.ts", "./WorldSaveController.ts"], (function(o) {
    "use strict";
    var e, t, r, n, i, a, l, s, c, h, d;
    return {
        setters: [function(o) {
            e = o.applyDecoratedDescriptor,
            t = o.inheritsLoose,
            r = o.initializerDefineProperty,
            n = o.assertThisInitialized
        }
        , function(o) {
            i = o.cclegacy,
            a = o._decorator,
            l = o.Node,
            s = o.Component
        }
        , function(o) {
            c = o.projectEvent
        }
        , function(o) {
            h = o.WorldEvents
        }
        , function(o) {
            d = o.WorldSaveController
        }
        ],
        execute: function() {
            var u, p, f, v, S;
            i._RF.push({}, "4558d+lqS9LYKXyNOvP2g9u", "WorldShadowSelector", void 0);
            var w = a.ccclass
              , g = a.property;
            o("WorldShadowSelector", (u = w("WorldShadowSelector"),
            p = g({
                visible: !0,
                type: [l]
            }),
            u((S = e((v = function(o) {
                function e() {
                    for (var e, t = arguments.length, i = new Array(t), a = 0; a < t; a++)
                        i[a] = arguments[a];
                    return e = o.call.apply(o, [this].concat(i)) || this,
                    r(n(e), "_shadows", S, n(e)),
                    e
                }
                t(e, o);
                var i = e.prototype;
                return i.onEnable = function() {
                    var o = d.world;
                    this.changeShadow(o),
                    c.on(h[h.World_Changed], this.changeShadow, this)
                }
                ,
                i.onDisable = function() {
                    c.off(h[h.World_Changed], this.changeShadow, this)
                }
                ,
                i.changeShadow = function(o) {
                    for (var e = 0; e < this._shadows.length; e++)
                        this._shadows[e].active = e + 1 === o
                }
                ,
                e
            }(s)).prototype, "_shadows", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            f = v)) || f));
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Logger.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var o, r;
    return {
        setters: [function(e) {
            o = e.defineProperty
        }
        , function(e) {
            r = e.cclegacy
        }
        ],
        execute: function() {
            var g, n;
            e({
                LogCategory: void 0,
                LogType: void 0
            }),
            r._RF.push({}, "46e063+EuZIZL/iJQhAf/jc", "Logger", void 0),
            function(e) {
                e[e.Info = 0] = "Info",
                e[e.Warning = 1] = "Warning",
                e[e.Error = 2] = "Error"
            }(g || (g = e("LogType", {}))),
            function(e) {
                e[e.Generic = 0] = "Generic",
                e[e.Gameplay = 1] = "Gameplay",
                e[e.AI = 2] = "AI",
                e[e.Metagame = 3] = "Metagame",
                e[e.UI = 4] = "UI",
                e[e.Audio = 5] = "Audio"
            }(n || (n = e("LogCategory", {})));
            var t = e("Logger", function() {
                function e() {
                    for (var e in o(this, "currentLoggingLevel", g.Info),
                    o(this, "categoryLogging", new Map),
                    n) {
                        var r = Number(e);
                        isNaN(r) || this.categoryLogging.set(r, !0)
                    }
                }
                var r = e.prototype;
                return r.setLoggingLevel = function(e) {
                    this.currentLoggingLevel = e
                }
                ,
                r.setCategoryLogging = function(e, o) {
                    this.categoryLogging.set(e, o)
                }
                ,
                r.getCategoryLogging = function(e) {
                    if (this.categoryLogging.has(e)) {
                        var o = this.categoryLogging.get(e);
                        return o || !1
                    }
                    return !1
                }
                ,
                r.log = function(e, o, r) {
                    if (void 0 === o && (o = n.Generic),
                    void 0 === r && (r = g.Info),
                    this.categoryLogging.get(o) && !(r < this.currentLoggingLevel)) {
                        var t = n[o];
                        switch (r) {
                        case g.Info:
                            console.log("[" + t + "] " + e);
                            break;
                        case g.Warning:
                            console.warn("[" + t + "] " + e);
                            break;
                        case g.Error:
                            console.error("[" + t + "] " + e)
                        }
                        g.Error
                    }
                }
                ,
                e
            }());
            e("logger", new t).setLoggingLevel(g.Error),
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SkinSelectionEvents.ts", ["cc"], (function(e) {
    "use strict";
    var n;
    return {
        setters: [function(e) {
            n = e.cclegacy
        }
        ],
        execute: function() {
            var i;
            e("SkinEvents", void 0),
            n._RF.push({}, "48a34+JNMpE6LFxqiuwQ7qx", "SkinSelectionEvents", void 0),
            function(e) {
                e[e.Skin_SetTexture = 0] = "Skin_SetTexture",
                e[e.Skin_SetModel = 1] = "Skin_SetModel",
                e[e.Skin_PlayerSkinChanged = 2] = "Skin_PlayerSkinChanged",
                e[e.Skin_ClosedSkinPanel = 3] = "Skin_ClosedSkinPanel"
            }(i || (i = e("SkinEvents", {}))),
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ITFC-ISlimeDecayMultiplier.ts", ["cc"], (function() {
    "use strict";
    var e;
    return {
        setters: [function(c) {
            e = c.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "48cd96l6EROlbjjMcuqpmTL", "ITFC-ISlimeDecayMultiplier", void 0),
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/InputEnums.ts", ["cc"], (function(r) {
    "use strict";
    var p;
    return {
        setters: [function(r) {
            p = r.cclegacy
        }
        ],
        execute: function() {
            var t, e, a;
            r({
                DropAreaEvent: void 0,
                DroppableEvent: void 0,
                InputEvent: void 0
            }),
            p._RF.push({}, "494bagGv19A6qaO01iDWWku", "InputEnums", void 0),
            function(r) {
                r[r.Input_Tap = 0] = "Input_Tap",
                r[r.Input_HoldStart = 1] = "Input_HoldStart",
                r[r.Input_HoldEnd = 2] = "Input_HoldEnd",
                r[r.Input_DragStart = 3] = "Input_DragStart",
                r[r.Input_DragUpdate = 4] = "Input_DragUpdate",
                r[r.Input_DragEnd = 5] = "Input_DragEnd"
            }(t || (t = r("InputEvent", {}))),
            function(r) {
                r[r.Droppable_ValidDrop = 0] = "Droppable_ValidDrop",
                r[r.Droppable_InvalidDrop = 1] = "Droppable_InvalidDrop",
                r[r.Droppable_EnteredADropArea = 2] = "Droppable_EnteredADropArea",
                r[r.Droppable_LeftAllDropAreas = 3] = "Droppable_LeftAllDropAreas"
            }(e || (e = r("DroppableEvent", {}))),
            function(r) {
                r[r.DropArea_Targeted = 0] = "DropArea_Targeted",
                r[r.DropArea_Untargeted = 1] = "DropArea_Untargeted",
                r[r.DropArea_Dropped = 2] = "DropArea_Dropped"
            }(a || (a = r("DropAreaEvent", {}))),
            p._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Draggable.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./InputEnums.ts"], (function(t) {
    "use strict";
    var n, i, r, e, o, a, s, c, g, u, h, l;
    return {
        setters: [function(t) {
            n = t.applyDecoratedDescriptor,
            i = t.createClass,
            r = t.defineProperty,
            e = t.inheritsLoose,
            o = t.initializerDefineProperty,
            a = t.assertThisInitialized
        }
        , function(t) {
            s = t.cclegacy,
            c = t._decorator,
            g = t.EventHandler,
            u = t.Vec2,
            h = t.Component
        }
        , function(t) {
            l = t.InputEvent
        }
        ],
        execute: function() {
            var D, _, p, S, b, f, P, d, v;
            s._RF.push({}, "4ba62TPJzhCar5/gykBs0KI", "Draggable", void 0);
            var y = c.ccclass
              , O = c.property
              , m = (t("Draggable", (D = y("Draggable"),
            _ = O({
                type: [g],
                visible: !0
            }),
            p = O({
                type: [g],
                visible: !0
            }),
            S = O({
                type: [g],
                visible: !0
            }),
            D((P = n((f = function(t) {
                function n() {
                    for (var n, i = arguments.length, e = new Array(i), s = 0; s < i; s++)
                        e[s] = arguments[s];
                    return n = t.call.apply(t, [this].concat(e)) || this,
                    o(a(n), "_onDragStart", P, a(n)),
                    o(a(n), "_onDragUpdate", d, a(n)),
                    o(a(n), "_onDragEnd", v, a(n)),
                    r(a(n), "_touchPositionOnDragStart", null),
                    r(a(n), "_objectScreenPositionOnDragStart", null),
                    r(a(n), "_isDragging", !1),
                    n
                }
                e(n, t);
                var i = n.prototype;
                return i.onDisable = function() {
                    this.isDragging() && this.endDrag()
                }
                ,
                i.isDragging = function() {
                    return this._isDragging
                }
                ,
                i.startDrag = function(t, n) {
                    this._touchPositionOnDragStart = new u(t);
                    var i = n.worldToScreen(this.node.worldPosition);
                    this._objectScreenPositionOnDragStart = new u(i.x,i.y),
                    this._isDragging = !0;
                    var r = new m(this._touchPositionOnDragStart,this._objectScreenPositionOnDragStart,this._touchPositionOnDragStart,n);
                    this.node.emit(l[l.Input_DragStart], r),
                    g.emitEvents(this._onDragStart, r)
                }
                ,
                i.updateDrag = function(t, n) {
                    if (this.isDragging()) {
                        var i = new m(this._touchPositionOnDragStart,this._objectScreenPositionOnDragStart,t,n);
                        this.node.emit(l[l.Input_DragUpdate], i),
                        g.emitEvents(this._onDragUpdate, i)
                    }
                }
                ,
                i.endDrag = function(t, n) {
                    void 0 === t && (t = null),
                    void 0 === n && (n = null),
                    this._isDragging = !1;
                    var i = new m(this._touchPositionOnDragStart,this._objectScreenPositionOnDragStart,t,n);
                    this.node.emit(l[l.Input_DragEnd], i),
                    g.emitEvents(this._onDragEnd, i)
                }
                ,
                n
            }(h)).prototype, "_onDragStart", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            d = n(f.prototype, "_onDragUpdate", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            v = n(f.prototype, "_onDragEnd", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            b = f)) || b)),
            t("DragData", function() {
                function t(t, n, i, e) {
                    r(this, "_touchPositionOnDragStart", null),
                    r(this, "_objectScreenPositionOnDragStart", null),
                    r(this, "_touchPosition", null),
                    r(this, "_camera", null),
                    this._touchPositionOnDragStart = t,
                    this._objectScreenPositionOnDragStart = n,
                    this._touchPosition = i,
                    this._camera = e
                }
                return i(t, [{
                    key: "touchScreenPositionOnDragStart",
                    get: function() {
                        return this._touchPositionOnDragStart
                    }
                }, {
                    key: "objectScreenPositionOnDragStart",
                    get: function() {
                        return this._objectScreenPositionOnDragStart
                    }
                }, {
                    key: "touchScreenPosition",
                    get: function() {
                        return this._touchPosition
                    }
                }, {
                    key: "camera",
                    get: function() {
                        return this._camera
                    }
                }]),
                t
            }()));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SaveGame.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts", "./SaveGameData.ts", "./SaveGameEnums.ts"], (function(n) {
    "use strict";
    var t, a, s, i, e, r, o, c, u;
    return {
        setters: [function(n) {
            t = n.defineProperty
        }
        , function(n) {
            a = n.cclegacy,
            s = n.sys,
            i = n.game,
            e = n.Game
        }
        , function(n) {
            r = n.logger
        }
        , function(n) {
            o = n.projectEvent
        }
        , function(n) {
            c = n.SaveGameData
        }
        , function(n) {
            u = n.SaveGameEvent
        }
        ],
        execute: function() {
            a._RF.push({}, "4c497Igl+NJ0KxF+LL10Ce+", "SaveGame", void 0);
            var g = n("SaveGame", function() {
                function n() {
                    var n = this;
                    t(this, "_saveKey", "SlimesIoSave"),
                    t(this, "_savedData", null),
                    t(this, "_runningTransaction", null),
                    i.on(e.EVENT_GAME_INITED, (function() {
                        n.load()
                    }
                    ), this)
                }
                var a = n.prototype;
                return a.isDataLoaded = function() {
                    return null != this._savedData
                }
                ,
                a.getPlayerXp = function() {
                    return this._runningTransaction ? this._runningTransaction.getTotalXp() : this._savedData.getTotalXp()
                }
                ,
                a.setPlayerXp = function(n) {
                    this._runningTransaction ? this._runningTransaction.setTotalXp(n) : (this._savedData.setTotalXp(n),
                    this.save())
                }
                ,
                a.getPlayerLevel = function() {
                    return this._runningTransaction ? this._runningTransaction.getLevel() : this._savedData.getLevel()
                }
                ,
                a.setPlayerLevel = function(n) {
                    this._runningTransaction ? this._runningTransaction.setLevel(n) : (this._savedData.setLevel(n),
                    this.save())
                }
                ,
                a.getCoins = function() {
                    return this._runningTransaction ? this._runningTransaction.getCoins() : this._savedData.getCoins()
                }
                ,
                a.setCoins = function(n) {
                    this._runningTransaction ? this._runningTransaction.setCoins(n) : (this._savedData.setCoins(n),
                    this.save())
                }
                ,
                a.getHighScore = function() {
                    return this._runningTransaction ? this._runningTransaction.getHighScore() : this._savedData.getHighScore()
                }
                ,
                a.setHighScore = function(n) {
                    this._runningTransaction ? this._runningTransaction.setHighScore(n) : (this._savedData.setHighScore(n),
                    this.save())
                }
                ,
                a.getItems = function() {
                    return this._runningTransaction ? this._runningTransaction.getStoreItems() : this._savedData.getStoreItems()
                }
                ,
                a.setItems = function(n) {
                    this._runningTransaction ? this._runningTransaction.setStoreItems(n) : (this._savedData.setStoreItems(n),
                    this.save())
                }
                ,
                a.setItem = function(n) {
                    this._runningTransaction ? this._runningTransaction.setStoreItem(n) : (this._savedData.setStoreItem(n),
                    this.save())
                }
                ,
                a.getItem = function(n) {
                    return this._runningTransaction ? this._runningTransaction.getStoreItem(n) : this._savedData.getStoreItem(n)
                }
                ,
                a.getMissions = function() {
                    return this._runningTransaction ? this._runningTransaction.getMissions() : this._savedData.getMissions()
                }
                ,
                a.setMissions = function(n) {
                    this._runningTransaction ? this._runningTransaction.setMissions(n) : (this._savedData.setMissions(n),
                    this.save())
                }
                ,
                a.getSkin = function() {
                    return this._runningTransaction ? this._runningTransaction.getSkin() : this._savedData.getSkin()
                }
                ,
                a.setSkin = function(n) {
                    this._runningTransaction ? this._runningTransaction.setSkin(n) : (this._savedData.setSkin(n),
                    this.save())
                }
                ,
                a.getWorld = function() {
                    return this._runningTransaction ? this._runningTransaction.getWorld() : this._savedData.getWorld()
                }
                ,
                a.setWorld = function(n) {
                    this._runningTransaction ? this._runningTransaction.setWorld(n) : (this._savedData.setWorld(n),
                    this.save())
                }
                ,
                a.startTransaction = function() {
                    this._runningTransaction = new c(this._savedData)
                }
                ,
                a.commitTransaction = function() {
                    this._savedData = this._runningTransaction,
                    this._runningTransaction = null,
                    this.save()
                }
                ,
                a.rollbackTransaction = function() {
                    this._runningTransaction = null
                }
                ,
                a.save = function() {
                    if (this._savedData) {
                        var n = JSON.stringify(this._savedData, this.replacer);
                        return this.setLocalData(this._saveKey, n),
                        void r.log("Saved game: " + n)
                    }
                    r.log("No data to save.")
                }
                ,
                a.load = function() {
                    var n = this.getLocalData(this._saveKey);
                    if (n)
                        return this._savedData = new c(JSON.parse(n, this.reviver)),
                        void r.log("Loaded saved game: " + n);
                    this._savedData = new c,
                    r.log("No data to load."),
                    o.emit(u[u.SaveGame_Loaded])
                }
                ,
                a.replacer = function(n, t) {
                    return t instanceof Map ? {
                        dataType: "Map",
                        value: Array.from(t.entries())
                    } : t
                }
                ,
                a.reviver = function(n, t) {
                    return "object" == typeof t && null !== t && "Map" === t.dataType ? new Map(t.value) : t
                }
                ,
                a.setLocalData = function(n, t) {
                    "undefined" != typeof GameSnacks ? GameSnacks.storage.setItem(n, t) : s.localStorage.setItem(n, t)
                }
                ,
                a.getLocalData = function(n) {
                    return "undefined" != typeof GameSnacks ? GameSnacks.storage.getItem(n) : s.localStorage.getItem(n)
                }
                ,
                n
            }());
            n("saveGame", new g);
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-AI-Skills-BaseBehavior.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TS-Slime-AI-Brain.ts"], (function(e) {
    "use strict";
    var i, r, t, n, l, a, o, s;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            t = e.initializerDefineProperty,
            n = e.assertThisInitialized
        }
        , function(e) {
            l = e.cclegacy,
            a = e._decorator,
            o = e.Component
        }
        , function(e) {
            s = e.TS_Slime_AI_Brain
        }
        ],
        execute: function() {
            var c, u, _, p, S;
            l._RF.push({}, "4d29blM/vRK7JvTElP3AOjj", "TS-Slime-AI-Skills-BaseBehavior", void 0);
            var v = a.ccclass
              , B = a.property;
            e("TS_Slime_AI_Skills_BaseBehavior", (c = v("TS_Slime_AI_Skills_BaseBehavior"),
            u = B({
                type: s,
                visible: !0
            }),
            c((S = i((p = function(e) {
                function i() {
                    for (var i, r = arguments.length, l = new Array(r), a = 0; a < r; a++)
                        l[a] = arguments[a];
                    return i = e.call.apply(e, [this].concat(l)) || this,
                    t(n(i), "_aIBrain", S, n(i)),
                    i
                }
                return r(i, e),
                i
            }(o)).prototype, "_aIBrain", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            _ = p)) || _));
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Camera-Gameplay.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts", "./ENUM-GameEvents.ts"], (function(t) {
    "use strict";
    var e, a, r, n, i, o, s, l, c, g, u, h, d, f, m, p, v, y, w;
    return {
        setters: [function(t) {
            e = t.defineProperty,
            a = t.applyDecoratedDescriptor,
            r = t.inheritsLoose,
            n = t.initializerDefineProperty,
            i = t.assertThisInitialized,
            o = t.createClass
        }
        , function(t) {
            s = t.cclegacy,
            l = t._decorator,
            c = t.Node,
            g = t.Vec3,
            u = t.Camera,
            h = t.tween,
            d = t.math,
            f = t.Component
        }
        , function(t) {
            m = t.logger,
            p = t.LogCategory,
            v = t.LogType
        }
        , function(t) {
            y = t.projectEvent
        }
        , function(t) {
            w = t.GameEvents
        }
        ],
        execute: function() {
            var b, T, _, C, P, z, S, E, N, R, G, x, k, L, O, A, D, I;
            t("CameraEvents", void 0),
            s._RF.push({}, "4dd9bj5xJNEaYc3HTlp4ysk", "TS-Camera-Gameplay", void 0);
            var j, W = l.ccclass, F = l.property, U = l.executionOrder;
            !function(t) {
                t.addNewTarget = "add-new-camera-target",
                t.removeTarget = "remove-camera-target"
            }(j || (j = t("CameraEvents", {})));
            t("TS_Camera_Gameplay", (b = W("TS_Camera_Gameplay"),
            T = U(3),
            _ = F([c]),
            C = F(g),
            P = F(g),
            z = F(u),
            S = F({
                visible: !0
            }),
            E = F({
                visible: !0,
                range: [0, 1]
            }),
            b(N = T((I = D = function(t) {
                function a() {
                    for (var a, r = arguments.length, o = new Array(r), s = 0; s < r; s++)
                        o[s] = arguments[s];
                    return a = t.call.apply(t, [this].concat(o)) || this,
                    n(i(a), "targets", G, i(a)),
                    n(i(a), "offset", x, i(a)),
                    n(i(a), "startRotation", k, i(a)),
                    e(i(a), "shakeSetting", void 0),
                    e(i(a), "targetPos", new g),
                    n(i(a), "camera", L, i(a)),
                    n(i(a), "_addNewTargets", O, i(a)),
                    e(i(a), "_gameStarted", !1),
                    n(i(a), "_laziness", A, i(a)),
                    a
                }
                r(a, t);
                var s = a.prototype;
                return s.onLoad = function() {
                    this.camera || (this.camera = this.node.getComponentInChildren(u)),
                    a.instance = this,
                    this._addNewTargets && (y.on(j.addNewTarget, this.onAddNewTarget, this),
                    y.on(j.removeTarget, this.removeCameraTarget, this))
                }
                ,
                s.start = function() {
                    this.targets ? this.camera ? (this.node.setRotationFromEuler(this.startRotation),
                    this.shakeSetting = new Array) : m.log("ERROR: Could not find camera", p.Gameplay, v.Error) : m.log("ERROR: Could not find player", p.Gameplay, v.Warning)
                }
                ,
                s.onEnable = function() {
                    y.on(w[w.Game_Start], this.gameStarted, this)
                }
                ,
                s.onDisable = function() {
                    y.off(w[w.Game_Start], this.gameStarted, this)
                }
                ,
                s.onDestroy = function() {
                    this._addNewTargets && (y.off(j.addNewTarget, this.onAddNewTarget, this),
                    y.off(j.removeTarget, this.removeCameraTarget, this))
                }
                ,
                s.gameStarted = function() {
                    var t = this;
                    this._gameStarted = !0,
                    this.scheduleOnce((function() {
                        var e = t
                          , a = t._laziness;
                        h(e).to(.5, null, {
                            easing: "cubicIn",
                            onUpdate: function(t, r) {
                                return e._laziness = d.lerp(a, .5, r)
                            }
                        }).start()
                    }
                    ), .5)
                }
                ,
                s.onAddNewTarget = function(t) {
                    -1 === this.targets.findIndex((function(e) {
                        return e === t
                    }
                    )) && (this.targets.push(t),
                    this.updateCameraPosition(!0))
                }
                ,
                s.removeCameraTarget = function(t) {
                    var e = this.targets.findIndex((function(e) {
                        return e === t
                    }
                    ));
                    -1 !== e && this.targets.splice(e, 1)
                }
                ,
                s.calculateTargetPoint = function() {
                    var t = new g;
                    this.targets[0].getWorldPosition(t);
                    for (var e = t.x, a = t.y, r = t.z, n = 1; n < this.targets.length; n++) {
                        var i = new g;
                        this.targets[n].getWorldPosition(i),
                        e += i.x,
                        a += i.y,
                        r += i.z
                    }
                    return this.targetPos = new g(e / this.targets.length,a / this.targets.length,r / this.targets.length),
                    this.targetPos
                }
                ,
                s.lateUpdate = function(t) {
                    this.updateCameraPosition()
                }
                ,
                s.updateCameraPosition = function(t) {
                    if (void 0 === t && (t = !1),
                    (this._gameStarted || t) && this.targets.length > 0) {
                        this.calculateTargetPoint(),
                        this.targetPos.add(this.offset);
                        var e = new g;
                        t ? ((e = this.targetPos).y -= 4.715,
                        e.z -= 7.15) : g.lerp(e, this.node.worldPosition, this.targetPos, 1 - this._laziness),
                        this.node.setWorldPosition(e)
                    }
                }
                ,
                s.setOffset = function(t) {
                    this.offset = t
                }
                ,
                o(a, [{
                    key: "Offset",
                    get: function() {
                        return this.offset
                    }
                }, {
                    key: "Camera",
                    get: function() {
                        return this.camera
                    }
                }]),
                a
            }(f),
            e(D, "instance", void 0),
            G = a((R = I).prototype, "targets", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            x = a(R.prototype, "offset", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new g
                }
            }),
            k = a(R.prototype, "startRotation", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new g(-57,0,0)
                }
            }),
            L = a(R.prototype, "camera", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            O = a(R.prototype, "_addNewTargets", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }),
            A = a(R.prototype, "_laziness", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            N = R)) || N) || N));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TouchController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./Draggable.ts", "./Holdable.ts", "./Tappable.ts"], (function(t) {
    "use strict";
    var i, e, o, n, a, s, r, h, l, u, c, g, d, p, b, _, f, v, m, y, T, D;
    return {
        setters: [function(t) {
            i = t.extends,
            e = t.defineProperty,
            o = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            a = t.initializerDefineProperty,
            s = t.assertThisInitialized,
            r = t.createClass
        }
        , function(t) {
            h = t.cclegacy,
            l = t._decorator,
            u = t.Camera,
            c = t.BitMask,
            g = t.PhysicsSystem,
            d = t.input,
            p = t.Input,
            b = t.game,
            _ = t.Vec2,
            f = t.geometry,
            v = t.Component
        }
        , function(t) {
            m = t.logger
        }
        , function(t) {
            y = t.Draggable
        }
        , function(t) {
            T = t.Holdable
        }
        , function(t) {
            D = t.Tappable
        }
        ],
        execute: function() {
            var H, I, L, M, S, E, k, C, w, x, F, P, B, R, z;
            h._RF.push({}, "4e1b0GHVi1IfJ8x0OM8H5sb", "TouchController", void 0);
            var U, A = l.ccclass, O = l.property;
            t("TouchController", (H = A("TouchController"),
            I = O({
                type: u,
                visible: !0,
                formerlySerializedAs: "camera"
            }),
            L = O({
                visible: !0,
                min: 0,
                formerlySerializedAs: "maxTapInterval"
            }),
            M = O({
                visible: !0,
                min: 0,
                tooltip: "Move distance in pixels"
            }),
            S = O({
                visible: !0
            }),
            E = O({
                visible: !0,
                type: c(i({}, g.PhysicsGroup))
            }),
            H((z = R = function(t) {
                function i() {
                    for (var i, o = arguments.length, n = new Array(o), r = 0; r < o; r++)
                        n[r] = arguments[r];
                    return i = t.call.apply(t, [this].concat(n)) || this,
                    a(s(i), "_camera", w, s(i)),
                    a(s(i), "_maxTapInterval", x, s(i)),
                    a(s(i), "_minMovementToDrag", F, s(i)),
                    a(s(i), "_verboseLogging", P, s(i)),
                    a(s(i), "_raycastMask", B, s(i)),
                    e(s(i), "_touchData", []),
                    i
                }
                n(i, t);
                var o = i.prototype;
                return o.onLoad = function() {
                    i._instance ? this.node.destroy() : i._instance = this
                }
                ,
                o.start = function() {
                    d.on(p.EventType.TOUCH_START, this.onTouchStart, this),
                    d.on(p.EventType.TOUCH_MOVE, this.onTouchMove, this),
                    d.on(p.EventType.TOUCH_END, this.onTouchEnd, this),
                    d.on(p.EventType.TOUCH_CANCEL, this.onTouchCancel, this)
                }
                ,
                o.update = function() {
                    for (var t = 0; t < this._touchData.length; t++) {
                        var i = this._touchData[t];
                        i.isEligibleForTap(b.frameStartTime, this._maxTapInterval) || (i.isEligibleForDrag() && i.startDrag(i.position, b.frameStartTime, this._camera, this._verboseLogging),
                        i.isEligibleForHold() && i.startHold(i.position, this._camera, this._verboseLogging))
                    }
                }
                ,
                o.onDestroy = function() {
                    i._instance == this && (i._instance = null)
                }
                ,
                o.onTouchStart = function(t) {
                    if (!t.currentTarget) {
                        this.getTouchDataById(t.touch.getID()) && this.removeTouchById(t.touch.getID());
                        var i = new N(t.touch.getID(),t.touch.getLocation(),t.touch.lastModified);
                        this._touchData.push(i);
                        var e = this.getNodeUnderTouch(i.position);
                        e && (i.tappable = e.getComponent(D),
                        i.holdable = e.getComponent(T),
                        i.draggable = e.getComponent(y))
                    }
                }
                ,
                o.onTouchMove = function(t) {
                    var i = this.getTouchDataById(t.touch.getID());
                    if (i && !i.isEligibleForTap(t.touch.lastModified, this._maxTapInterval))
                        switch (i.status) {
                        case U.Starting:
                            i.isEligibleForDrag() && this.isMoveRelevant(t.touch.getLocation(), i.position) && i.startDrag(t.touch.getLocation(), t.touch.lastModified, this._camera, this._verboseLogging),
                            i.isEligibleForHold() && (this.isMoveRelevant(t.touch.getLocation(), i.position) || i.startHold(i.position, this._camera, this._verboseLogging));
                            break;
                        case U.Dragging:
                            i.updatePosition(t.touch.getLocation(), t.touch.lastModified),
                            i.draggable.updateDrag(i.position, this._camera);
                            break;
                        case U.Holding:
                            var e = this.getNodeUnderTouch(t.touch.getLocation());
                            null != e && e.getComponent(T) == i.holdable || i.endHold(this._verboseLogging)
                        }
                }
                ,
                o.onTouchEnd = function(t) {
                    var i = this.getTouchDataById(t.touch.getID());
                    if (null != i) {
                        switch (i.status) {
                        case U.Starting:
                            i.isEligibleForTap(t.touch.lastModified, this._maxTapInterval) && (this._verboseLogging && m.log("Touch with id " + i.id + " is a tap on " + i.tappable.node.name),
                            i.tappable.tap(t.touch.getLocation(), this._camera));
                            break;
                        case U.Dragging:
                            i.endDrag(t.touch.getLocation(), t.touch.lastModified, this._camera, this._verboseLogging);
                            break;
                        case U.Holding:
                            i.endHold(this._verboseLogging)
                        }
                        this.removeTouchById(t.touch.getID())
                    }
                }
                ,
                o.onTouchCancel = function(t) {
                    this.removeTouchById(t.touch.getID())
                }
                ,
                o.getTouchDataById = function(t) {
                    var i = this._touchData.findIndex((function(i) {
                        return i.id == t
                    }
                    ));
                    return i > -1 ? this._touchData[i] : null
                }
                ,
                o.removeTouchById = function(t) {
                    var i = this._touchData.findIndex((function(i) {
                        return i.id == t
                    }
                    ));
                    i > -1 && this._touchData.splice(i, 1)
                }
                ,
                o.isMoveRelevant = function(t, i) {
                    var e = new _(0,0);
                    return _.subtract(e, t, i),
                    e.lengthSqr() < this._minMovementToDrag * this._minMovementToDrag
                }
                ,
                o.getNodeUnderTouch = function(t) {
                    var i = new f.Ray;
                    if (this._camera.screenPointToRay(t.x, t.y, i),
                    g.instance.raycast(i, this._raycastMask)) {
                        for (var e = g.instance.raycastResults, o = null, n = Number.MAX_VALUE, a = 0; a < e.length; a++)
                            e[a].distance < n && (n = e[a].distance,
                            o = e[a]);
                        if (o)
                            return o.collider.node
                    }
                    return null
                }
                ,
                i
            }(v),
            e(R, "_instance", null),
            w = o((C = z).prototype, "_camera", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            x = o(C.prototype, "_maxTapInterval", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 200
                }
            }),
            F = o(C.prototype, "_minMovementToDrag", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            P = o(C.prototype, "_verboseLogging", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            B = o(C.prototype, "_raycastMask", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return g.PhysicsGroup.DEFAULT
                }
            }),
            k = C)) || k));
            !function(t) {
                t[t.Starting = 0] = "Starting",
                t[t.Dragging = 1] = "Dragging",
                t[t.Holding = 2] = "Holding",
                t[t.Done = 3] = "Done"
            }(U || (U = {}));
            var N = function() {
                function t(t, i, o) {
                    e(this, "_id", void 0),
                    e(this, "_positionHistory", []),
                    e(this, "_onScreen", !0),
                    e(this, "_tappable", null),
                    e(this, "_draggable", null),
                    e(this, "_holdable", null),
                    e(this, "_status", U.Starting),
                    this._id = t,
                    this.updatePosition(i, o),
                    this._onScreen = !0
                }
                var i = t.prototype;
                return i.updatePosition = function(t, i) {
                    this._positionHistory.push(new V(t,i))
                }
                ,
                i.hasMoved = function() {
                    return this._positionHistory.length > 1
                }
                ,
                i.isEligibleForTap = function(t, i) {
                    return null != this.tappable && this.status == U.Starting && this.tappable.enabled && t - this.startTime < i
                }
                ,
                i.isEligibleForDrag = function() {
                    return null != this.draggable && (this.status == U.Starting || this.status == U.Holding) && this.draggable.enabled
                }
                ,
                i.isEligibleForHold = function() {
                    return null != this.holdable && this.status == U.Starting && this.holdable.enabled
                }
                ,
                i.startDrag = function(t, i, e, o) {
                    void 0 === o && (o = !1),
                    o && m.log("Touch with id " + this.id + " is starting a drag on " + this.draggable.node.name),
                    this.status == U.Holding && this.endHold(o),
                    this.status = U.Dragging,
                    this.draggable.startDrag(t, e),
                    this.updatePosition(t, i)
                }
                ,
                i.startHold = function(t, i, e) {
                    void 0 === e && (e = !1),
                    e && m.log("Touch with id " + this.id + " is starting a hold on " + this.holdable.node.name),
                    this.status = U.Holding,
                    this.holdable.startHold(t, i)
                }
                ,
                i.endDrag = function(t, i, e, o) {
                    void 0 === o && (o = !1),
                    o && m.log("Touch with id " + this.id + " is ending a drag on " + this.draggable.node.name),
                    this.status = U.Done,
                    this.draggable.endDrag(t, e)
                }
                ,
                i.endHold = function(t) {
                    void 0 === t && (t = !1),
                    t && m.log("Touch with id " + this.id + " is ending a hold on " + this.holdable.node.name),
                    this.status = U.Done,
                    this.holdable.endHold()
                }
                ,
                r(t, [{
                    key: "id",
                    get: function() {
                        return this._id
                    }
                }, {
                    key: "startTime",
                    get: function() {
                        return this._positionHistory[0].time
                    }
                }, {
                    key: "onScreen",
                    get: function() {
                        return this._onScreen
                    },
                    set: function(t) {
                        this._onScreen = t
                    }
                }, {
                    key: "position",
                    get: function() {
                        return this._positionHistory[this._positionHistory.length - 1].position
                    }
                }, {
                    key: "startPosition",
                    get: function() {
                        return this._positionHistory[0].position
                    }
                }, {
                    key: "tappable",
                    get: function() {
                        return this._tappable
                    },
                    set: function(t) {
                        this._tappable = t
                    }
                }, {
                    key: "draggable",
                    get: function() {
                        return this._draggable
                    },
                    set: function(t) {
                        this._draggable = t
                    }
                }, {
                    key: "holdable",
                    get: function() {
                        return this._holdable
                    },
                    set: function(t) {
                        this._holdable = t
                    }
                }, {
                    key: "status",
                    get: function() {
                        return this._status
                    },
                    set: function(t) {
                        this._status = t
                    }
                }]),
                t
            }()
              , V = function() {
                function t(t, i, o) {
                    void 0 === o && (o = !1),
                    e(this, "_position", _.ZERO),
                    e(this, "_time", 0),
                    e(this, "_moving", void 0),
                    this._position = t,
                    this._time = i,
                    this._moving = o
                }
                return r(t, [{
                    key: "position",
                    get: function() {
                        return this._position
                    }
                }, {
                    key: "time",
                    get: function() {
                        return this._time
                    }
                }, {
                    key: "moving",
                    get: function() {
                        return this._moving
                    },
                    set: function(t) {
                        this._moving = t
                    }
                }]),
                t
            }();
            h._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS_Slime_ModelRandomizer.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./TS-BattleRoyale-SafeArea.ts"], (function(e) {
    "use strict";
    var t, r, n, o, i, a, l, s, d, c, u, f, p, m, _, b;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            n = e.initializerDefineProperty,
            o = e.assertThisInitialized,
            i = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            a = e.cclegacy,
            l = e._decorator,
            s = e.Node,
            d = e.Prefab,
            c = e.EventHandler,
            u = e.randomRangeInt,
            f = e.instantiate,
            p = e.RenderableComponent,
            m = e.Component
        }
        , function(e) {
            _ = e.projectEvent
        }
        , function(e) {
            b = e.SafeAreaEvents
        }
        ],
        execute: function() {
            var h, v, S, y, g, M, z, P, R;
            a._RF.push({}, "4e5fe0gefJEyrCU3PxBM+E8", "TS_Slime_ModelRandomizer", void 0);
            var E = l.ccclass
              , A = l.property;
            e("TS_Slime_ModelRandomizer", (h = E("TS_Slime_ModelRandomizer"),
            v = A({
                type: s,
                visible: !0
            }),
            S = A({
                type: [d],
                visible: !0
            }),
            y = A({
                type: [c],
                visible: !0
            }),
            h((z = t((M = function(e) {
                function t() {
                    for (var t, r = arguments.length, i = new Array(r), a = 0; a < r; a++)
                        i[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(i)) || this,
                    n(o(t), "_modelHolder", z, o(t)),
                    n(o(t), "_modelsPrefabs", P, o(t)),
                    n(o(t), "_onModelSet", R, o(t)),
                    t
                }
                r(t, e);
                var a = t.prototype;
                return a.start = function() {
                    this.randomizeModel(),
                    this.enabled = !1
                }
                ,
                a.randomizeModel = function() {
                    var e = u(0, this._modelsPrefabs.length)
                      , t = this._modelsPrefabs[e].data.children[0]
                      , r = f(t);
                    r.setParent(this._modelHolder);
                    for (var n, o = r.getComponentsInChildren(p), a = [], l = i(o); !(n = l()).done; ) {
                        var s = n.value.getRenderMaterial(0);
                        "../Internal/Scripts/Shaders/slime" === s.effectName && a.push(s)
                    }
                    a.length > 0 && _.emit(b[b.SafeArea_AddSafeAreaMaterial], a),
                    c.emitEvents(this._onModelSet, r)
                }
                ,
                t
            }(m)).prototype, "_modelHolder", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            P = t(M.prototype, "_modelsPrefabs", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            R = t(M.prototype, "_onModelSet", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            g = M)) || g));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PlayerLevelController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./LevelingUpEnums.ts", "./PlayerLevelSettings.ts", "./SaveGame.ts", "./PlayerPurseController.ts"], (function(e) {
    "use strict";
    var t, n, l, r, i, o, s;
    return {
        setters: [function(e) {
            t = e.createClass
        }
        , function(e) {
            n = e.cclegacy
        }
        , function(e) {
            l = e.projectEvent
        }
        , function(e) {
            r = e.LevelingUpEvents
        }
        , function(e) {
            i = e.levelingSettings
        }
        , function(e) {
            o = e.saveGame
        }
        , function(e) {
            s = e.PlayerPurseController
        }
        ],
        execute: function() {
            n._RF.push({}, "4f1dbA7zUxOpKg6oCGWEX8B", "PlayerLevelController", void 0);
            e("PlayerLevelController", function() {
                function e() {}
                return e.addXp = function(e) {
                    if (e > 0) {
                        o.startTransaction();
                        for (var t = this.xp + e, n = i.getXpRequirementForLevel(this.level + 1); t >= n; )
                            this.level += 1,
                            t -= n,
                            n = i.getXpRequirementForLevel(this.level + 1),
                            s.addCoins(i.getCoinsForLevel(this.level));
                        this.xp = t,
                        o.commitTransaction()
                    }
                }
                ,
                t(e, null, [{
                    key: "level",
                    get: function() {
                        return o.getPlayerLevel()
                    },
                    set: function(e) {
                        e > this.level && (o.setPlayerLevel(e),
                        l.emit(r[r.LevelingUp_PlayerLevelUpdated], e))
                    }
                }, {
                    key: "xp",
                    get: function() {
                        return o.getPlayerXp()
                    },
                    set: function(e) {
                        o.setPlayerXp(e);
                        var t = i.getXpRequirementForLevel(this.level + 1);
                        l.emit(r[r.LevelingUp_PlayerXpUpdated], e, t)
                    }
                }]),
                e
            }());
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/FollowDragOnGroundExample.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./InputEnums.ts", "./Draggable.ts"], (function(n) {
    "use strict";
    var e, t, r, o, i, a, s, l, u, c, d, p, g, h;
    return {
        setters: [function(n) {
            e = n.applyDecoratedDescriptor,
            t = n.inheritsLoose,
            r = n.initializerDefineProperty,
            o = n.assertThisInitialized
        }
        , function(n) {
            i = n.cclegacy,
            a = n._decorator,
            s = n.Layers,
            l = n.geometry,
            u = n.PhysicsSystem,
            c = n.Collider,
            d = n.Vec3,
            p = n.Component
        }
        , function(n) {
            g = n.InputEvent
        }
        , function(n) {
            h = n.Draggable
        }
        ],
        execute: function() {
            var y, f, m, v, D, b;
            i._RF.push({}, "508557u52tOdqiIYtxcbrB7", "FollowDragOnGroundExample", void 0);
            var P = a.ccclass
              , _ = a.property
              , w = a.requireComponent;
            n("FollowDragOnGroundExample", (y = P("FollowDragOnGroundExample"),
            f = w(h),
            m = _({
                type: s.BitMask,
                visible: !0
            }),
            y(v = f((b = e((D = function(n) {
                function e() {
                    for (var e, t = arguments.length, i = new Array(t), a = 0; a < t; a++)
                        i[a] = arguments[a];
                    return e = n.call.apply(n, [this].concat(i)) || this,
                    r(o(e), "_groundLayerMask", b, o(e)),
                    e
                }
                t(e, n);
                var i = e.prototype;
                return i.onLoad = function() {
                    this.node.on(g[g.Input_DragUpdate], this.onDragUpdate, this)
                }
                ,
                i.onDragUpdate = function(n) {
                    var e = this.getGroundPosition(n);
                    e && (this.node.worldPosition = e)
                }
                ,
                i.getGroundPosition = function(n) {
                    var e = new l.Ray;
                    if (n.camera.screenPointToRay(n.touchScreenPosition.x, n.touchScreenPosition.y, e),
                    u.instance.raycast(e)) {
                        for (var t = u.instance.raycastResults, r = null, o = Number.MAX_VALUE, i = this.node.getComponentsInChildren(c), a = 0; a < t.length; a++)
                            if ((t[a].collider.node.layer & this._groundLayerMask) > 0 && !this.isSubCollider(t[a].collider, i)) {
                                var s = new d(0,0,0);
                                d.subtract(s, t[a].hitPoint, e.o),
                                s.lengthSqr() < o && (o = s.lengthSqr(),
                                r = t[a])
                            }
                        if (r)
                            return r.hitPoint
                    }
                    return null
                }
                ,
                i.isSubCollider = function(n, e) {
                    return e.indexOf(n) > -1
                }
                ,
                e
            }(p)).prototype, "_groundLayerMask", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return s.makeMaskInclude([s.BitMask.DEFAULT])
                }
            }),
            v = D)) || v) || v));
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DailyMissionsSetSave.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var i, s, t;
    return {
        setters: [function(e) {
            i = e.defineProperty,
            s = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            t = e.cclegacy
        }
        ],
        execute: function() {
            t._RF.push({}, "51f6dne05xOjqcmLEb070hb", "DailyMissionsSetSave", void 0);
            e("DailyMissionsSetSave", (function(e) {
                if (i(this, "_creationDate", ""),
                i(this, "_missions", []),
                e && e.creationDate) {
                    this._creationDate = e.creationDate.toISOString(),
                    this._missions = [];
                    for (var t, o = s(e.missions); !(t = o()).done; ) {
                        var n = t.value.createSaveData();
                        this._missions.push(n)
                    }
                }
            }
            ));
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/gamesnacks.ts", ["cc"], (function() {
    "use strict";
    var s;
    return {
        setters: [function(c) {
            s = c.cclegacy
        }
        ],
        execute: function() {
            s._RF.push({}, "52404YKlXVK/YaW7LswFs4c", "gamesnacks", void 0),
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AISteeringOption.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TS-Slime-AI-Movement-BaseBehavior.ts"], (function(e) {
    "use strict";
    var i, t, r, n, o, a;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            t = e.createClass,
            r = e.initializerDefineProperty
        }
        , function(e) {
            n = e.cclegacy,
            o = e._decorator
        }
        , function(e) {
            a = e.TS_Slime_AI_Movement_BaseBehavior
        }
        ],
        execute: function() {
            var u, c, s, l, p, v, y;
            n._RF.push({}, "52640MKxaBHGryjZXSxSKvG", "AISteeringOption", void 0);
            var _ = o.ccclass
              , b = o.property;
            e("AISteeringOption", (u = _("AISteeringOption"),
            c = b({
                visible: !0,
                type: a
            }),
            s = b({
                visible: !0,
                tooltip: "Greater number are prioritized"
            }),
            u((v = i((p = function() {
                function e() {
                    r(this, "_behavior", v, this),
                    r(this, "_priority", y, this)
                }
                return t(e, [{
                    key: "behavior",
                    get: function() {
                        return this._behavior
                    }
                }, {
                    key: "priority",
                    get: function() {
                        return this._priority
                    }
                }]),
                e
            }()).prototype, "_behavior", [c], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            y = i(p.prototype, "_priority", [s], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            l = p)) || l));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimationEventRaiser.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var i, n, e, r, o, a, s, c, u;
    return {
        setters: [function(t) {
            i = t.applyDecoratedDescriptor,
            n = t.createClass,
            e = t.inheritsLoose,
            r = t.initializerDefineProperty,
            o = t.assertThisInitialized
        }
        , function(t) {
            a = t.cclegacy,
            s = t._decorator,
            c = t.EventHandler,
            u = t.Component
        }
        ],
        execute: function() {
            var l, p, f, v, y, b, h, m, _, E, d, g;
            a._RF.push({}, "53d3fTbnFxPOLwJ9KE2Kruy", "AnimationEventRaiser", void 0);
            var A = s.ccclass
              , k = s.property
              , R = (l = A("Data"),
            p = k({
                visible: !0
            }),
            f = k({
                type: c,
                visible: !0
            }),
            l((b = i((y = function() {
                function t() {
                    r(this, "_key", b, this),
                    r(this, "_actions", h, this)
                }
                return t.prototype.callActions = function() {
                    c.emitEvents(this._actions)
                }
                ,
                n(t, [{
                    key: "key",
                    get: function() {
                        return this._key
                    }
                }]),
                t
            }()).prototype, "_key", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            h = i(y.prototype, "_actions", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            v = y)) || v);
            t("AnimationEventRaiser", (m = A("AnimationEventRaiser"),
            _ = k({
                type: R,
                visible: !0
            }),
            m((g = i((d = function(t) {
                function i() {
                    for (var i, n = arguments.length, e = new Array(n), a = 0; a < n; a++)
                        e[a] = arguments[a];
                    return i = t.call.apply(t, [this].concat(e)) || this,
                    r(o(i), "_animationEvents", g, o(i)),
                    i
                }
                return e(i, t),
                i.prototype.raiseAnimationEvent = function(t) {
                    var i = this._animationEvents.find((function(i) {
                        return i.key === t
                    }
                    ));
                    void 0 !== i && i.callActions()
                }
                ,
                i
            }(u)).prototype, "_animationEvents", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            E = d)) || E));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/VirtualJoystick.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./VirutalJoystick%20enums.ts", "./AxisInput.ts"], (function(t) {
    "use strict";
    var i, o, s, n, c, e;
    return {
        setters: [function(t) {
            i = t.inheritsLoose
        }
        , function(t) {
            o = t.cclegacy,
            s = t._decorator
        }
        , function(t) {
            n = t.projectEvent
        }
        , function(t) {
            c = t.VirtualJoystickEvent
        }
        , function(t) {
            e = t.AxisInput
        }
        ],
        execute: function() {
            var r;
            o._RF.push({}, "53d6ak+3nROapxBv5lms9wF", "VirtualJoystick", void 0);
            var u = s.ccclass;
            t("VirtualJoystick", u("VirtualJoystick")(r = function(t) {
                function o() {
                    return t.apply(this, arguments) || this
                }
                i(o, t);
                var s = o.prototype;
                return s.start = function() {
                    n.on(c[c.VistualJoystickPositionUpdated], this.onJoystickUpdate, this)
                }
                ,
                s.onDestroy = function() {
                    n.off(c[c.VistualJoystickPositionUpdated], this.onJoystickUpdate, this)
                }
                ,
                s.onJoystickUpdate = function(t) {
                    this._horizontal = t.x,
                    this._vertical = t.y
                }
                ,
                o
            }(e)) || r);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Item.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ItemSave.ts"], (function(t) {
    "use strict";
    var i, e, n, r, a, u;
    return {
        setters: [function(t) {
            i = t.applyDecoratedDescriptor,
            e = t.createClass,
            n = t.initializerDefineProperty
        }
        , function(t) {
            r = t.cclegacy,
            a = t._decorator
        }
        , function(t) {
            u = t.ItemSave
        }
        ],
        execute: function() {
            var s, o, c, h, l, y, _, f, p;
            r._RF.push({}, "54e22ieMUNCqIRZVEVBfo89", "Item", void 0);
            var d = a.ccclass
              , m = a.property;
            t("Item", (s = d("Item"),
            o = m({
                visible: !0
            }),
            c = m({
                visible: !0
            }),
            h = m({
                visible: !0
            }),
            s((_ = i((y = function() {
                function t(t, i, e) {
                    n(this, "_id", _, this),
                    n(this, "_name", f, this),
                    n(this, "_quantity", p, this),
                    "string" == typeof t ? (this._id = t,
                    this._name = i,
                    this._quantity = e || 0) : t instanceof u ? (this._id = t.id,
                    this._name = t.name,
                    this._quantity = t.quantity) : "object" == typeof t && t.id && (this._id = t.id,
                    this._name = t.name,
                    t.purchased ? this._quantity = t.purchased ? 1 : 0 : this._quantity = 0)
                }
                var i = t.prototype;
                return i.add = function(i) {
                    var e = new t(this.id,this.name,this.quantity);
                    return e._quantity += i,
                    e
                }
                ,
                i.remove = function(t) {
                    return this.add(-t)
                }
                ,
                e(t, [{
                    key: "id",
                    get: function() {
                        return this._id
                    }
                }, {
                    key: "name",
                    get: function() {
                        return this._name
                    }
                }, {
                    key: "quantity",
                    get: function() {
                        return this._quantity
                    }
                }]),
                t
            }()).prototype, "_id", [o], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            f = i(y.prototype, "_name", [c], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            p = i(y.prototype, "_quantity", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            l = y)) || l));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS_Slime_ModelColorElement.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, o, r, i, l, n, c, s;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            o = e.inheritsLoose,
            r = e.initializerDefineProperty,
            i = e.assertThisInitialized
        }
        , function(e) {
            l = e.cclegacy,
            n = e._decorator,
            c = e.EventHandler,
            s = e.Component
        }
        ],
        execute: function() {
            var u, a, p, d, _, f, y, b;
            l._RF.push({}, "55773MFO2ZKyY0wJczKXkl/", "TS_Slime_ModelColorElement", void 0);
            var m = n.ccclass
              , v = n.property;
            e("TS_Slime_ModelColorElement", (u = m("TS_Slime_ModelColorElement"),
            a = v({
                visible: !0
            }),
            p = v({
                visible: !0,
                type: [c]
            }),
            u((f = t((_ = function(e) {
                function t() {
                    for (var t, o = arguments.length, l = new Array(o), n = 0; n < o; n++)
                        l[n] = arguments[n];
                    return t = e.call.apply(e, [this].concat(l)) || this,
                    r(i(t), "_key", f, i(t)),
                    r(i(t), "_setModelColors", y, i(t)),
                    r(i(t), "debug", b, i(t)),
                    t
                }
                return o(t, e),
                t.prototype.setModelColor = function(e) {
                    var t = this
                      , o = e.colors.find((function(e) {
                        return e.id === t._key
                    }
                    ));
                    void 0 !== o && c.emitEvents(this._setModelColors, o.color)
                }
                ,
                t
            }(s)).prototype, "_key", [a], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            y = t(_.prototype, "_setModelColors", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            b = t(_.prototype, "debug", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            d = _)) || d));
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/WorldSaveController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./SaveGame.ts", "./WorldEvents.ts"], (function(t) {
    "use strict";
    var e, r, o, n, l, c;
    return {
        setters: [function(t) {
            e = t.createClass
        }
        , function(t) {
            r = t.cclegacy,
            o = t._decorator
        }
        , function(t) {
            n = t.projectEvent
        }
        , function(t) {
            l = t.saveGame
        }
        , function(t) {
            c = t.WorldEvents
        }
        ],
        execute: function() {
            var s;
            r._RF.push({}, "56749lqtLJJGLXoptBCgz9b", "WorldSaveController", void 0);
            var u = o.ccclass;
            o.property,
            t("WorldSaveController", u("WorldSaveController")(s = function() {
                function t() {}
                return e(t, null, [{
                    key: "world",
                    get: function() {
                        return l.getWorld()
                    },
                    set: function(t) {
                        l.setWorld(t),
                        n.emit(c[c.World_Changed], t)
                    }
                }]),
                t
            }()) || s);
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/OnEnable.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var n, t, r, i, o, a, l, c;
    return {
        setters: [function(e) {
            n = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            r = e.initializerDefineProperty,
            i = e.assertThisInitialized
        }
        , function(e) {
            o = e.cclegacy,
            a = e._decorator,
            l = e.EventHandler,
            c = e.Component
        }
        ],
        execute: function() {
            var s, u, p, b, f;
            o._RF.push({}, "56f824up7tJH6vIYn6FglJc", "OnEnable", void 0);
            var v = a.ccclass
              , y = a.property;
            e("OnEnable", (s = v("OnEnable"),
            u = y({
                visible: !0,
                type: [l]
            }),
            s((f = n((b = function(e) {
                function n() {
                    for (var n, t = arguments.length, o = new Array(t), a = 0; a < t; a++)
                        o[a] = arguments[a];
                    return n = e.call.apply(e, [this].concat(o)) || this,
                    r(i(n), "_onEnable", f, i(n)),
                    n
                }
                return t(n, e),
                n.prototype.onEnable = function() {
                    l.emitEvents(this._onEnable)
                }
                ,
                n
            }(c)).prototype, "_onEnable", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            p = b)) || p));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PositionLogger.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts"], (function(o) {
    "use strict";
    var t, n, e, i, r;
    return {
        setters: [function(o) {
            t = o.inheritsLoose
        }
        , function(o) {
            n = o.cclegacy,
            e = o._decorator,
            i = o.Component
        }
        , function(o) {
            r = o.logger
        }
        ],
        execute: function() {
            var s;
            n._RF.push({}, "57a6fb57TZGOKnusIvsWd3R", "PositionLogger", void 0);
            var c = e.ccclass;
            e.property,
            o("PositionLogger", c("PositionLogger")(s = function(o) {
                function n() {
                    return o.apply(this, arguments) || this
                }
                return t(n, o),
                n.prototype.update = function() {
                    r.log("Position Logger " + this.node.name + ": " + this.node.worldPosition)
                }
                ,
                n
            }(i)) || s);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-SlimeFood.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./Range.ts", "./TS-BattleRoyale-SafeArea.ts", "./TweenNodePosition.ts", "./TS_SlimeFood_Settings.ts"], (function(e) {
    "use strict";
    var i, t, a, n, r, s, l, o, c, u, f, d, p, h, _, y, b, S, m, v, g;
    return {
        setters: [function(e) {
            i = e.defineProperty,
            t = e.applyDecoratedDescriptor,
            a = e.inheritsLoose,
            n = e.assertThisInitialized,
            r = e.initializerDefineProperty,
            s = e.createForOfIteratorHelperLoose,
            l = e.createClass
        }
        , function(e) {
            o = e.cclegacy,
            c = e._decorator,
            u = e.Node,
            f = e.CurveRange,
            d = e.EventHandler,
            p = e.game,
            h = e.randomRange,
            _ = e.Vec3,
            y = e.Component
        }
        , function(e) {
            b = e.projectEvent
        }
        , function(e) {
            S = e.Range
        }
        , function(e) {
            m = e.SafeAreaEvents
        }
        , function(e) {
            v = e.TweenNodePosition
        }
        , function(e) {
            g = e.TS_SlimeFood_Settings
        }
        ],
        execute: function() {
            var w, A, z, T, C, P, N, O, k, E, F, R, D, H, B, I, x, L, j, M, Z, q, G, U, V;
            o._RF.push({}, "57c08cq6/hHc4WZEHNT5zmf", "TS-SlimeFood", void 0);
            var W = c.ccclass
              , J = c.property;
            e("TS_SlimeFood", (w = W("TS_SlimeFood"),
            A = J({
                type: u,
                visible: !0
            }),
            z = J({
                visible: !0
            }),
            T = J({
                visible: !0,
                type: S
            }),
            C = J({
                visible: !0,
                type: f
            }),
            P = J({
                visible: !0,
                type: [u]
            }),
            N = J({
                visible: !0,
                type: [g]
            }),
            O = J({
                visible: !0,
                type: v
            }),
            k = J({
                visible: !0,
                type: v
            }),
            E = J({
                visible: !0,
                type: [d]
            }),
            w((V = U = function(e) {
                function t() {
                    for (var t, a = arguments.length, s = new Array(a), l = 0; l < a; l++)
                        s[l] = arguments[l];
                    return t = e.call.apply(e, [this].concat(s)) || this,
                    i(n(t), "id", null),
                    r(n(t), "debug", D, n(t)),
                    r(n(t), "size", H, n(t)),
                    r(n(t), "_art", B, n(t)),
                    r(n(t), "_maxTimeOutsideSafeArea", I, n(t)),
                    r(n(t), "_outsideSafeAreaPulsesPerSecond", x, n(t)),
                    r(n(t), "_pulsesCurve", L, n(t)),
                    r(n(t), "_crystalNodes", j, n(t)),
                    r(n(t), "_crystals", M, n(t)),
                    r(n(t), "_upTween", Z, n(t)),
                    r(n(t), "_downTween", q, n(t)),
                    i(n(t), "_safeArea", null),
                    i(n(t), "_insideSafeArea", !0),
                    i(n(t), "_elapsedTimeOutsideSafeArea", 0),
                    r(n(t), "_beginCrystalDisapear", G, n(t)),
                    i(n(t), "_disapearing", !1),
                    i(n(t), "callback", null),
                    t
                }
                a(t, e);
                var o = t.prototype;
                return o.canBeAbsorbed = function(e) {
                    return !0
                }
                ,
                o.setSize = function(e) {
                    if (!(this.size < 0))
                        throw "Can't change size from initialized food";
                    this.size = e
                }
                ,
                o.update = function(e) {
                    this._insideSafeArea && null !== this._safeArea && !this._safeArea.isInsideSafeArea(this.node) && (this._insideSafeArea = !1),
                    this._insideSafeArea || (this._elapsedTimeOutsideSafeArea += e,
                    this._elapsedTimeOutsideSafeArea >= this._maxTimeOutsideSafeArea && !this._disapearing && (this._disapearing = !0,
                    d.emitEvents(this._beginCrystalDisapear)))
                }
                ,
                o.lateUpdate = function(e) {}
                ,
                o.onLoad = function() {
                    this.id = "food-" + this.node.name + p.totalTime
                }
                ,
                o.onEnable = function() {
                    b.emit(m[m.SafeArea_GetSafeArea], this)
                }
                ,
                o.finishCrystalDisapear = function() {
                    this.eaten(null)
                }
                ,
                o.setSafeArea = function(e) {
                    null === this._safeArea && (this._safeArea = e)
                }
                ,
                o.start = function() {
                    this.node.activeInHierarchy
                }
                ,
                o.initialize = function(e, i, a) {
                    var n = 1 - this._safeArea.radiusRatio;
                    t._spawnCrystalChances = 0;
                    for (var r = 0; r < this._crystals.length; r++) {
                        var s = 4 * this._crystals[r].spawnChanceByTime.spline.evaluate(n);
                        t._spawnCrystalChances += s
                    }
                    for (var l = h(0, t._spawnCrystalChances), o = 0, c = !1, u = (_.ZERO,
                    0); u < this._crystals.length; u++)
                        o += 4 * this._crystals[u].spawnChanceByTime.spline.evaluate(n),
                        !c && l <= o ? (c = !0,
                        this.size = this._crystals[u].startSize,
                        this._crystals[u].model.active = !0,
                        this._crystals[u].shadowModel.active = !0,
                        this._crystals[u].model.scale) : (this._crystals[u].model.active = !1,
                        this._crystals[u].shadowModel.active = !1);
                    this._art.scale = new _(0,0,0),
                    this.node.position = e,
                    this.node.active = !0,
                    this._insideSafeArea = !0,
                    this._elapsedTimeOutsideSafeArea = 0,
                    this._disapearing = !1,
                    this.setCrystalNodesScale(_.ONE),
                    this.callback = i
                }
                ,
                o.eaten = function(e) {
                    this.node.active = !1,
                    null != this.callback && (this.callback(),
                    this.callback = null)
                }
                ,
                o.setCrystalNodesScale = function(e) {
                    for (var i, t = s(this._crystalNodes); !(i = t()).done; ) {
                        i.value.setScale(e)
                    }
                }
                ,
                l(t, [{
                    key: "ID",
                    get: function() {
                        return this.id
                    }
                }, {
                    key: "Position",
                    get: function() {
                        return this.node.position
                    }
                }, {
                    key: "Size",
                    get: function() {
                        return this.size
                    }
                }]),
                t
            }(y),
            i(U, "_spawnCrystalChances", -1),
            D = t((R = V).prototype, "debug", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            H = t(R.prototype, "size", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            B = t(R.prototype, "_art", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            I = t(R.prototype, "_maxTimeOutsideSafeArea", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 5
                }
            }),
            x = t(R.prototype, "_outsideSafeAreaPulsesPerSecond", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new S
                }
            }),
            L = t(R.prototype, "_pulsesCurve", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new f
                }
            }),
            j = t(R.prototype, "_crystalNodes", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            M = t(R.prototype, "_crystals", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            Z = t(R.prototype, "_upTween", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            q = t(R.prototype, "_downTween", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            G = t(R.prototype, "_beginCrystalDisapear", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            F = R)) || F));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/FlowController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, r, i, n, o, a, s, l, u;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            i = e.initializerDefineProperty,
            n = e.assertThisInitialized,
            o = e.defineProperty
        }
        , function(e) {
            a = e.cclegacy,
            s = e._decorator,
            l = e.EventHandler,
            u = e.Component
        }
        ],
        execute: function() {
            var c, y, d, p, _, h, f, v;
            a._RF.push({}, "58152N3IOJILLu+bx3ThyjT", "FlowController", void 0);
            var L = s.ccclass
              , C = s.property
              , b = s.executionOrder;
            e("FlowController", (c = L("FlowController"),
            y = b(-1),
            d = C({
                visible: !0
            }),
            p = C({
                visible: !0,
                type: [l]
            }),
            c(_ = y((f = t((h = function(e) {
                function t() {
                    for (var t, r = arguments.length, a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(a)) || this,
                    i(n(t), "_readyCount", f, n(t)),
                    i(n(t), "_onReady", v, n(t)),
                    o(n(t), "_readyList", []),
                    o(n(t), "_readyListCount", 0),
                    t
                }
                r(t, e);
                var a = t.prototype;
                return a.onLoad = function() {
                    for (var e = 0; e < this._readyCount; e++)
                        this._readyList.push(!1)
                }
                ,
                a.setReady = function(e, t) {
                    void 0 === e && (e = t),
                    e >= 0 && e < this._readyList.length && !1 === this._readyList[e] && (this._readyList[e] = !0,
                    this._readyListCount++,
                    this._readyListCount === this._readyCount && l.emitEvents(this._onReady))
                }
                ,
                t
            }(u)).prototype, "_readyCount", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            v = t(h.prototype, "_onReady", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            _ = h)) || _) || _));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DailyMissionDisplayName.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(i) {
    "use strict";
    var s, e, r;
    return {
        setters: [function(i) {
            s = i.defineProperty
        }
        , function(i) {
            e = i.cclegacy,
            r = i._decorator
        }
        ],
        execute: function() {
            var t;
            e._RF.push({}, "584feFYDp9Nw4S2chiyyBoM", "DailyMissionDisplayName", void 0);
            var a = r.ccclass;
            r.property,
            i("DailyMissionDisplayName", a("DailyMissionDisplayName")(t = function() {
                function i(i, e) {
                    s(this, "_singular", ""),
                    s(this, "_plural", ""),
                    this._singular = i,
                    this._plural = e
                }
                return i.prototype.getName = function(i, s, e) {
                    void 0 === e && (e = !1);
                    for (var r = e ? this._singular : this._plural, t = 0; t < i.length; t++) {
                        -1 !== r.indexOf("$" + i[t]) && (r = r.replace("$" + i[t], s[t]))
                    }
                    return r
                }
                ,
                i
            }()) || t);
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-Player.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts", "./SlimeEvents.ts", "./TS-Score-Tracker.ts", "./AudioManager.ts", "./TS_Slime.ts", "./TS-Camera-Gameplay.ts", "./TS-SlimeFood.ts", "./SlimePlayerHighestMassController.ts"], (function(e) {
    "use strict";
    var i, t, n, o, a, r, s, l, c, h, m, u, d, y, S, p, b, f, _, g, v, T;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            n = e.initializerDefineProperty,
            o = e.assertThisInitialized
        }
        , function(e) {
            a = e.cclegacy,
            r = e._decorator,
            s = e.Prefab,
            l = e.EventHandler,
            c = e.game,
            h = e.math,
            m = e.input,
            u = e.Input,
            d = e.KeyCode
        }
        , function(e) {
            y = e.logger
        }
        , function(e) {
            S = e.projectEvent
        }
        , function(e) {
            p = e.SlimeEvents
        }
        , function(e) {
            b = e.ScoreEvents
        }
        , function(e) {
            f = e.AudioManager
        }
        , function(e) {
            _ = e.TS_Slime
        }
        , function(e) {
            g = e.CameraEvents
        }
        , function(e) {
            v = e.TS_SlimeFood
        }
        , function(e) {
            T = e.SlimePlayerHighestMassController
        }
        ],
        execute: function() {
            var P, D, z, E, I, A, F, C, K, w;
            a._RF.push({}, "5b19dq0eWhJUbFOk5xsaEiO", "TS-Slime-Player", void 0);
            var k = r.ccclass
              , M = r.executionOrder
              , O = r.property;
            e("TS_Slime_Player", (P = k("TS_Slime_Player"),
            D = M(-1),
            z = O({
                type: s,
                visible: !0
            }),
            E = O({
                type: s,
                visible: !0
            }),
            I = O({
                visible: !0,
                type: [l]
            }),
            P(A = D((C = i((F = function(e) {
                function i() {
                    for (var i, t = arguments.length, a = new Array(t), r = 0; r < t; r++)
                        a[r] = arguments[r];
                    return i = e.call.apply(e, [this].concat(a)) || this,
                    n(o(i), "_absorbFoodAudio", C, o(i)),
                    n(o(i), "_absorbSlimeAudio", K, o(i)),
                    n(o(i), "_onVanished", w, o(i)),
                    i
                }
                t(i, e);
                var a = i.prototype;
                return a.onLoad = function() {
                    null !== this.playerID && void 0 !== this.playerID && "" !== this.playerID || (this._playerID = "player-" + c.totalTime.toString().replace(".", "") + h.randomRangeInt(1e5, 999999).toString() + "-slime")
                }
                ,
                a.start = function() {
                    this._creationTime = c.totalTime / 1e3,
                    null !== this.playerID && void 0 !== this.playerID && "" !== this.playerID || (this._playerID = "player-" + c.totalTime.toString().replace(".", "") + h.randomRangeInt(1e5, 999999).toString() + "-slime"),
                    this.Size > 1 ? S.emit(p[p.Slime_PlayerIncreased], this.Size) : this.Size < 1 && S.emit(p[p.Slime_PlayerDecreased], this.Size),
                    l.emitEvents(this.onSizeChanged, this.Size),
                    S.emit(p[p.Slime_NewSlime], this),
                    S.emit(g.addNewTarget, this.node),
                    this._lastSizeDecreaseTime = c.totalTime / 1e3
                }
                ,
                a.onEnable = function() {
                    e.prototype.onEnable.call(this),
                    this._debug && m.on(u.EventType.KEY_DOWN, this.onKeyPressed, this)
                }
                ,
                a.onDisable = function() {
                    e.prototype.onDisable.call(this),
                    this._debug && m.off(u.EventType.KEY_DOWN, this.onKeyPressed, this)
                }
                ,
                a.onKeyPressed = function(e) {
                    e.keyCode === d.F10 ? this.increase(1) : e.keyCode === d.F11 && this.decrease(1)
                }
                ,
                a.onDestroy = function() {
                    S.emit(g.removeTarget, this.node)
                }
                ,
                a.eaten = function(e) {
                    S.emit(p[p.Slime_SlimeAbsorbed], this),
                    S.emit(b.updateSlimeScore, this, -this.Size),
                    S.emit(g.removeTarget, this.node),
                    this.playerID.includes("player") && y.log("Player was eaten by: " + e.node.name + " " + e.Size),
                    this.node.destroy()
                }
                ,
                a.finishedVanish = function() {
                    S.emit(p[p.Slime_PlayerVanished]),
                    e.prototype.finishedVanish.call(this)
                }
                ,
                a.absorb = function(i) {
                    e.prototype.absorb.call(this, i),
                    i instanceof _ ? (this._absorbSlimeAudio && f.instance.playByKey(this._absorbSlimeAudio.data.name),
                    S.emit(p[p.Slime_PlayerSlimeEaten], this, i)) : i instanceof v && (this._absorbFoodAudio && f.instance.playByKey(this._absorbFoodAudio.data.name),
                    S.emit(p[p.Slime_PlayerFoodEaten], i))
                }
                ,
                a.increase = function(i) {
                    e.prototype.increase.call(this, i),
                    S.emit(p[p.Slime_PlayerIncreased], this.Size),
                    this.Size > T.highScore && (T.highScore = this.Size)
                }
                ,
                a.decrease = function(i) {
                    this.Size > 0 && (e.prototype.decrease.call(this, i),
                    S.emit(p[p.Slime_PlayerDecreased], this.Size))
                }
                ,
                i
            }(_)).prototype, "_absorbFoodAudio", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            K = i(F.prototype, "_absorbSlimeAudio", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            w = i(F.prototype, "_onVanished", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            A = F)) || A) || A));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-AI-Movement-FleeBehavior.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Range.ts", "./AISlimeThreat.ts", "./TS-Slime-AI-Movement-BaseBehavior.ts"], (function(e) {
    "use strict";
    var t, r, i, n, a, o, l, c, u, s, h, _, v, m, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            i = e.defineProperty,
            n = e.assertThisInitialized,
            a = e.initializerDefineProperty,
            o = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            l = e.cclegacy,
            c = e._decorator,
            u = e.CurveRange,
            s = e.Vec3,
            h = e.game,
            _ = e.randomRange
        }
        , function(e) {
            v = e.Range
        }
        , function(e) {
            m = e.AISlimeThreat
        }
        , function(e) {
            p = e.TS_Slime_AI_Movement_BaseBehavior
        }
        ],
        execute: function() {
            var f, g, T, D, d, R, y;
            l._RF.push({}, "5f16aUihOpJTJ0RNTgIGpa+", "TS-Slime-AI-Movement-FleeBehavior", void 0);
            var S = c.ccclass
              , x = c.property;
            e("TS_Slime_AI_Movement_FleeBehavior", (f = S("TS_Slime_AI_Movement_FleeBehavior"),
            g = x({
                type: u,
                visible: !0
            }),
            T = x({
                type: v,
                visible: !0
            }),
            f((R = t((d = function(e) {
                function t() {
                    for (var t, r = arguments.length, o = new Array(r), l = 0; l < r; l++)
                        o[l] = arguments[l];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    i(n(t), "_safeArea", null),
                    a(n(t), "_fleeRatioByDistance", R, n(t)),
                    a(n(t), "_directionExpireTimeRange", y, n(t)),
                    i(n(t), "_slime", null),
                    i(n(t), "_currentDirection", null),
                    i(n(t), "_currentDirectionExpireTime", 0),
                    i(n(t), "_currentDangerRatio", 0),
                    i(n(t), "_currentThreat", null),
                    t
                }
                r(t, e);
                var l = t.prototype;
                return l.getDirection = function(e) {
                    var t = e.slime
                      , r = e.threats;
                    return null === this._slime && (this._slime = t),
                    this.setDirection(r),
                    {
                        direction: this._currentDirection,
                        target: this._currentThreat,
                        dangerRatio: this._currentDangerRatio
                    }
                }
                ,
                l.hasDeadlyThreats = function(e) {
                    for (var t, r = o(e); !(t = r()).done; ) {
                        var i = t.value;
                        if (i instanceof m && i.threatLevel >= .75)
                            return !0;
                        if (i instanceof m && i.threatLevel >= .9)
                            return !0
                    }
                    return !1
                }
                ,
                l.setDirection = function(e) {
                    var t = new s(0,0,0);
                    this._currentDangerRatio = 0;
                    for (var r, i, n, a = null, l = 0, c = o(e); !(r = c()).done; ) {
                        var u = r.value;
                        t.add(u.direction.multiplyScalar(u.threatLevel)),
                        this._currentDangerRatio = Math.max(this._currentDangerRatio, u.threatLevel),
                        u instanceof m && (null === a || u.threatLevel > l) && (a = u,
                        l = u.threatLevel)
                    }
                    t.length() > 0 ? (this._currentDirection = t.normalize(),
                    this._currentDirectionExpireTime = h.totalTime / 1e3 + _(this._directionExpireTimeRange.Min, this._directionExpireTimeRange.Max),
                    this._currentThreat = null !== (i = null === (n = a) || void 0 === n ? void 0 : n.other) && void 0 !== i ? i : null) : (this._currentDirection = null,
                    this._currentDirectionExpireTime = 0,
                    this._currentDangerRatio = 0,
                    this._currentThreat = null)
                }
                ,
                l.hasValidDirection = function() {
                    return null !== this._currentDirection && !(h.totalTime / 1e3 > this._currentDirectionExpireTime)
                }
                ,
                t
            }(p)).prototype, "_fleeRatioByDistance", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u
                }
            }),
            y = t(d.prototype, "_directionExpireTimeRange", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new v(0,0)
                }
            }),
            D = d)) || D));
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DailyMissionDifficulty.ts", ["cc"], (function(i) {
    "use strict";
    var c, s;
    return {
        setters: [function(i) {
            c = i.cclegacy,
            s = i._decorator
        }
        ],
        execute: function() {
            i("DailyMissionDifficulty", void 0),
            c._RF.push({}, "5f184PVqXVLV6TDwIEXHiod", "DailyMissionDifficulty", void 0);
            var t;
            s.ccclass,
            s.property;
            !function(i) {
                i[i.None = 0] = "None",
                i[i.Easy = 1] = "Easy",
                i[i.Medium = 2] = "Medium",
                i[i.Hard = 3] = "Hard",
                i[i.Epic = 4] = "Epic"
            }(t || (t = i("DailyMissionDifficulty", {}))),
            c._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PlayerCoinsDisplay.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./PlayerPurseEnums.ts", "./PlayerPurseController.ts"], (function(e) {
    "use strict";
    var t, n, i, r, a, l, o, s, u, c, p, d, y, b;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            i = e.initializerDefineProperty,
            r = e.assertThisInitialized,
            a = e.defineProperty
        }
        , function(e) {
            l = e.cclegacy,
            o = e._decorator,
            s = e.Label,
            u = e.tween,
            c = e.math,
            p = e.Component
        }
        , function(e) {
            d = e.projectEvent
        }
        , function(e) {
            y = e.PlayerPurseEvents
        }
        , function(e) {
            b = e.PlayerPurseController
        }
        ],
        execute: function() {
            var f, h, P, _, v;
            l._RF.push({}, "6107bBCvtJHpbyrosM9DUC0", "PlayerCoinsDisplay", void 0);
            var C = o.ccclass
              , g = o.property;
            e("PlayerCoinsDisplay", (f = C("PlayerCoinsDisplay"),
            h = g({
                type: s,
                visible: !0
            }),
            f((v = t((_ = function(e) {
                function t() {
                    for (var t, n = arguments.length, l = new Array(n), o = 0; o < n; o++)
                        l[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(l)) || this,
                    i(r(t), "_label", v, r(t)),
                    a(r(t), "coinsUpdatedCallback", void 0),
                    a(r(t), "_targetValue", 0),
                    a(r(t), "_tween", null),
                    t
                }
                n(t, e);
                var l = t.prototype;
                return l.onEnable = function() {
                    var e = this;
                    this.updateLabel(b.coins, 0),
                    this.coinsUpdatedCallback = d.on(y[y.PlayerPurse_CoinsUpdated], (function(t) {
                        e.updateLabel(t)
                    }
                    ))
                }
                ,
                l.onDisable = function() {
                    d.off(y[y.PlayerPurse_CoinsUpdated], this.coinsUpdatedCallback),
                    this.coinsUpdatedCallback = null
                }
                ,
                l.updateLabel = function(e, t) {
                    var n = this;
                    void 0 === t && (t = .3),
                    this._tween && (this._label.string = this._targetValue.toFixed(),
                    this._tween.stop()),
                    this._targetValue = e;
                    var i = Number.parseInt(this._label.string)
                      , r = e;
                    this._tween = u(this).to(t, null, {
                        onUpdate: function(e, t) {
                            e._label.string = c.lerp(i, r, t).toFixed()
                        },
                        onComplete: function() {
                            n._tween = null
                        }
                    }).start()
                }
                ,
                t
            }(p)).prototype, "_label", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            P = _)) || P));
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GSGameReadyEmitter.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./GSGameEventsEmitter.ts"], (function(t) {
    "use strict";
    var e, n, r, i, a;
    return {
        setters: [function(t) {
            e = t.inheritsLoose
        }
        , function(t) {
            n = t.cclegacy,
            r = t._decorator,
            i = t.Component
        }
        , function(t) {
            a = t.GSGameEventsEmitter
        }
        ],
        execute: function() {
            var o;
            n._RF.push({}, "61531xMjfdJtLGPUfndQAv7", "GSGameReadyEmitter", void 0);
            var c = r.ccclass;
            t("GSGameReadyEmitter", c("GSGameReadyEmitter")(o = function(t) {
                function n() {
                    return t.apply(this, arguments) || this
                }
                return e(n, t),
                n.prototype.ready = function() {
                    a.gameReady()
                }
                ,
                n
            }(i)) || o);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SlimeDisabler.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./SlimeEvents.ts", "./TS_Slime.ts"], (function(e) {
    "use strict";
    var i, t, n, l, r, o, s, a, c, u, b, p, f, m;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            n = e.initializerDefineProperty,
            l = e.assertThisInitialized
        }
        , function(e) {
            r = e.cclegacy,
            o = e._decorator,
            s = e.ParticleSystem,
            a = e.EventHandler,
            c = e.tween,
            u = e.Vec3,
            b = e.Component
        }
        , function(e) {
            p = e.projectEvent
        }
        , function(e) {
            f = e.SlimeEvents
        }
        , function(e) {
            m = e.TS_Slime
        }
        ],
        execute: function() {
            var _, h, y, d, g, v, D, S, w, z, P, B, E;
            r._RF.push({}, "64be3B0iyJOGr/7vUdvlzSM", "SlimeDisabler", void 0);
            var V = o.ccclass
              , j = o.property;
            e("SlimeDisabler", (_ = V("SlimeDisabler"),
            h = j({
                visible: !0,
                type: m
            }),
            y = j({
                visible: !0,
                type: [s]
            }),
            d = j({
                visible: !0,
                type: [a]
            }),
            g = j({
                visible: !0,
                type: [a]
            }),
            _((S = i((D = function(e) {
                function i() {
                    for (var i, t = arguments.length, r = new Array(t), o = 0; o < t; o++)
                        r[o] = arguments[o];
                    return i = e.call.apply(e, [this].concat(r)) || this,
                    n(l(i), "_slime", S, l(i)),
                    n(l(i), "_deathParticles", w, l(i)),
                    n(l(i), "_isDying", z, l(i)),
                    n(l(i), "_onBeginDisable", P, l(i)),
                    n(l(i), "_onDisable", B, l(i)),
                    n(l(i), "_model", E, l(i)),
                    i
                }
                t(i, e);
                var r = i.prototype;
                return r.onEnable = function() {
                    p.on(f[f.Slime_SlimeBeginVanish], this.onSlimeDied, this)
                }
                ,
                r.onDisable = function() {
                    p.off(f[f.Slime_SlimeBeginVanish], this.onSlimeDied, this)
                }
                ,
                r.update = function(e) {
                    if (this._isDying) {
                        for (var i = !1, t = 0; t < this._deathParticles.length && !i; t++)
                            i = i || this._deathParticles[t].isPlaying;
                        i || this._slime.finishedVanish()
                    }
                }
                ,
                r.onSlimeDied = function(e) {
                    this._slime._id === e._id && (this._isDying = !0,
                    c(this._model).to(.3, {
                        scale: new u(0,0,0)
                    }, {
                        onComplete: function(e) {
                            e.active = !1
                        }
                    }).start(),
                    a.emitEvents(this._onBeginDisable))
                }
                ,
                r.setModel = function(e) {
                    this._model = e
                }
                ,
                i
            }(b)).prototype, "_slime", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            w = i(D.prototype, "_deathParticles", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            z = i(D.prototype, "_isDying", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            P = i(D.prototype, "_onBeginDisable", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            B = i(D.prototype, "_onDisable", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            E = i(D.prototype, "_model", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            v = D)) || v));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-TouchController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TouchController.ts"], (function(o) {
    "use strict";
    var t, r, c, n;
    return {
        setters: [function(o) {
            t = o.inheritsLoose
        }
        , function(o) {
            r = o.cclegacy,
            c = o._decorator
        }
        , function(o) {
            n = o.TouchController
        }
        ],
        execute: function() {
            var e;
            r._RF.push({}, "65084sBH9VJIJchWKN6o1GH", "TS-TouchController", void 0);
            var u = c.ccclass;
            c.property,
            o("TS_TouchController", u("TS_TouchController")(e = function(o) {
                function r() {
                    return o.apply(this, arguments) || this
                }
                return t(r, o),
                r.prototype.copy = function(o) {
                    this._touchData = o._touchData
                }
                ,
                r
            }(n)) || e);
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimationStateComponent_EventHandler.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var n, e, o, a;
    return {
        setters: [function(t) {
            n = t.inheritsLoose
        }
        , function(t) {
            e = t.cclegacy,
            o = t._decorator,
            a = t.animation
        }
        ],
        execute: function() {
            var i;
            e._RF.push({}, "67a0dgsvqtD6YacmBddV71+", "AnimationStateComponent_EventHandler", void 0);
            var r = o.ccclass;
            o.property,
            t("AnimationStateComponent_EventHandler", r("AnimationStateComponent_EventHandler")(i = function(t) {
                function e() {
                    return t.apply(this, arguments) || this
                }
                return n(e, t),
                e
            }(a.StateMachineComponent)) || i);
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DailyMissionsListener.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./DailyMissionsEvents.ts"], (function(e) {
    "use strict";
    var i, t, n, s, o, r, a, c, l, u, p;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            n = e.initializerDefineProperty,
            s = e.assertThisInitialized
        }
        , function(e) {
            o = e.cclegacy,
            r = e._decorator,
            a = e.Enum,
            c = e.EventHandler,
            l = e.Component
        }
        , function(e) {
            u = e.projectEvent
        }
        , function(e) {
            p = e.DailyMissionEvents
        }
        ],
        execute: function() {
            var v, f, y, D, h, _, b;
            o._RF.push({}, "68319PdaTpA66+DyVsaDsQC", "DailyMissionsListener", void 0);
            var E = r.ccclass
              , d = r.property;
            e("DailyMissionsListener", (v = E("DailyMissionsListener"),
            f = d({
                visible: !0,
                type: a(p)
            }),
            y = d({
                visible: !0,
                type: [c]
            }),
            v((_ = i((h = function(e) {
                function i() {
                    for (var i, t = arguments.length, o = new Array(t), r = 0; r < t; r++)
                        o[r] = arguments[r];
                    return i = e.call.apply(e, [this].concat(o)) || this,
                    n(s(i), "_eventID", _, s(i)),
                    n(s(i), "_actions", b, s(i)),
                    i
                }
                t(i, e);
                var o = i.prototype;
                return o.onEnable = function() {
                    u.on(p[this._eventID], this.onEventRaised, this)
                }
                ,
                o.onDisable = function() {
                    u.off(p[this._eventID], this.onEventRaised, this)
                }
                ,
                o.onEventRaised = function(e) {
                    c.emitEvents(this._actions, e)
                }
                ,
                i
            }(l)).prototype, "_eventID", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return p.None
                }
            }),
            b = i(h.prototype, "_actions", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            D = h)) || D));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DailyMissionEntryUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./DailyMissionState.ts", "./TS-AnimationGraph-Helper.ts", "./AnimationHelperVariable.ts"], (function(i) {
    "use strict";
    var e, t, n, r, a, s, o, l, u, p, c, m, y, b;
    return {
        setters: [function(i) {
            e = i.applyDecoratedDescriptor,
            t = i.initializerDefineProperty,
            n = i.inheritsLoose,
            r = i.assertThisInitialized,
            a = i.defineProperty,
            s = i.createForOfIteratorHelperLoose
        }
        , function(i) {
            o = i.cclegacy,
            l = i._decorator,
            u = i.Enum,
            p = i.EventHandler,
            c = i.Component
        }
        , function(i) {
            m = i.DailyMissionState
        }
        , function(i) {
            y = i.TS_AnimationGraph_Helper
        }
        , function(i) {
            b = i.AnimationHelperVariable
        }
        ],
        execute: function() {
            var f, h, d, v, _, w, g, M, D, A, H, z, E, S, I, R, P, U, N, V, k, Q, B, C, F;
            o._RF.push({}, "69235X/kRBPI7XnaqkrAQBO", "DailyMissionEntryUI", void 0);
            var L = l.ccclass
              , T = l.property
              , q = i("DailyMissionAnimationHelperVariable", (f = L("DailyMissionAnimationHelperVariable"),
            h = T({
                visible: !0,
                type: u(m)
            }),
            d = T({
                visible: !0,
                type: [b]
            }),
            f((w = e((_ = function() {
                t(this, "missionState", w, this),
                t(this, "variables", g, this)
            }
            ).prototype, "missionState", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return m.None
                }
            }),
            g = e(_.prototype, "variables", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            v = _)) || v))
              , G = i("DailyMissionEntryUIAnimation", (M = L("DailyMissionEntryUIAnimation"),
            D = T({
                visible: !0,
                type: y
            }),
            A = T({
                visible: !0,
                type: [q]
            }),
            M((E = e((z = function() {
                t(this, "animHelper", E, this),
                t(this, "data", S, this)
            }
            ).prototype, "animHelper", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            S = e(z.prototype, "data", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            H = z)) || H));
            i("DailyMissionEntryUI", (I = L("DailyMissionEntryUI"),
            R = T({
                visible: !0,
                type: G
            }),
            P = T({
                visible: !0,
                type: [p]
            }),
            U = T({
                visible: !0,
                type: [p]
            }),
            N = T({
                visible: !0,
                type: [p]
            }),
            I((Q = e((k = function(i) {
                function e() {
                    for (var e, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                        s[o] = arguments[o];
                    return e = i.call.apply(i, [this].concat(s)) || this,
                    t(r(e), "_animator", Q, r(e)),
                    t(r(e), "_setMissionName", B, r(e)),
                    t(r(e), "_setProgress", C, r(e)),
                    t(r(e), "_setRewardQuantity", F, r(e)),
                    a(r(e), "_mission", null),
                    e
                }
                n(e, i);
                var o = e.prototype;
                return o.updateAnimation = function() {
                    for (var i, e = this, t = this._animator.data.find((function(i) {
                        return i.missionState === e._mission.currentState
                    }
                    )), n = s(t.variables); !(i = n()).done; ) {
                        var r = i.value;
                        this._animator.animHelper.setVariable(r)
                    }
                }
                ,
                o.setMissionData = function(i) {
                    if (this._mission = i,
                    this.updateAnimation(),
                    p.emitEvents(this._setMissionName, i.displayName),
                    p.emitEvents(this._setProgress, i),
                    1 !== i.rewards.length)
                        throw "Invalid Rewards Size";
                    p.emitEvents(this._setRewardQuantity, i.rewards[0].quantity)
                }
                ,
                o.redeemRewardsClicked = function() {
                    this._mission && this._mission.currentState === m.Completed && (this._mission.redeemRewards(),
                    this.updateAnimation())
                }
                ,
                e
            }(c)).prototype, "_animator", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            B = e(k.prototype, "_setMissionName", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            C = e(k.prototype, "_setProgress", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            F = e(k.prototype, "_setRewardQuantity", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            V = k)) || V));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GSAudioController.ts", ["cc", "./ProjectEvent.ts", "./AudioEnums.ts", "./AudioManager.ts"], (function(n) {
    "use strict";
    var o, e, t, a, i, c, u;
    return {
        setters: [function(n) {
            o = n.cclegacy,
            e = n._decorator,
            t = n.game,
            a = n.Game
        }
        , function(n) {
            i = n.projectEvent
        }
        , function(n) {
            c = n.AudioEvent
        }
        , function(n) {
            u = n.AudioManager
        }
        ],
        execute: function() {
            var r;
            o._RF.push({}, "6a244BXPm5Ht5fM+hYgNOsY", "GSAudioController", void 0);
            var d = e.ccclass
              , s = n("GSAudioController", d("GSAudioController")(r = function() {
                function n() {
                    var n = this;
                    t.on(a.EVENT_GAME_INITED, (function() {
                        u.instance ? n.connectToAudioManager() : i.once(c.AudioManagerInitialized, n.connectToAudioManager, n)
                    }
                    ), this)
                }
                var o = n.prototype;
                return o.connectToAudioManager = function() {
                    "undefined" != typeof GameSnacks && (u.instance.audioEnabled = GameSnacks.audio.isEnabled(),
                    GameSnacks.audio.subscribe(this.audioEnabledUpdate.bind(this)))
                }
                ,
                o.audioEnabledUpdate = function(n) {
                    u.instance.audioEnabled = n
                }
                ,
                n
            }()) || r);
            n("gameSnacksAudioController", new s);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-SlimeAbsorb-Animation.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TS-Slime-SlimeAbsorb.ts"], (function(i) {
    "use strict";
    var e, t, o, n;
    return {
        setters: [function(i) {
            e = i.inheritsLoose
        }
        , function(i) {
            t = i.cclegacy,
            o = i._decorator
        }
        , function(i) {
            n = i.TS_Slime_SlimeAbsorb
        }
        ],
        execute: function() {
            var r;
            t._RF.push({}, "6b6daAeJS9K3LY1IPMVGQeB", "TS-Slime-SlimeAbsorb-Animation", void 0);
            var s = o.ccclass;
            o.property,
            i("TS_Slime_SlimeAbsorb_Animation", s("TS_Slime_SlimeAbsorb_Animation")(r = function(i) {
                function t() {
                    return i.apply(this, arguments) || this
                }
                return e(t, i),
                t.prototype.absorbed = function(i) {}
                ,
                t
            }(n)) || r);
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-AI-Brain.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./TS-BattleRoyale-SafeArea.ts", "./TS_Slime.ts", "./AISlimeThreat.ts", "./TS-SlimeFood.ts", "./AISafeAreaThreat.ts", "./BrainState.ts"], (function(e) {
    "use strict";
    var t, r, i, n, a, s, o, h, l, u, g, c, _, f, S, d, T, p, m, v, A, b;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            i = e.initializerDefineProperty,
            n = e.assertThisInitialized,
            a = e.defineProperty,
            s = e.createClass,
            o = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            h = e.cclegacy,
            l = e._decorator,
            u = e.Collider,
            g = e.EventHandler,
            c = e.Vec2,
            _ = e.randomRange,
            f = e.math,
            S = e.Component
        }
        , function(e) {
            d = e.projectEvent
        }
        , function(e) {
            T = e.SafeAreaEvents
        }
        , function(e) {
            p = e.TS_Slime
        }
        , function(e) {
            m = e.AISlimeThreat
        }
        , function(e) {
            v = e.TS_SlimeFood
        }
        , function(e) {
            A = e.AISafeAreaThreat
        }
        , function(e) {
            b = e.BrainState
        }
        ],
        execute: function() {
            var y, B, I, x, E, D, w, R, C, z, L, F, k, M;
            h._RF.push({}, "6dd4b6Y9UtEeIHkW07vUNtC", "TS-Slime-AI-Brain", void 0);
            var H = l.ccclass
              , P = l.property
              , j = l.executionOrder;
            e("TS_Slime_AI_Brain", (y = H("TS_Slime_AI_Brain"),
            B = j(3),
            I = P({
                type: p,
                visible: !0
            }),
            x = P({
                type: u,
                visible: !0
            }),
            E = P({
                type: [g],
                visible: !0
            }),
            D = P({
                visible: !0
            }),
            w = P({
                visible: !0
            }),
            y(R = B((z = t((C = function(e) {
                function t() {
                    for (var t, r = arguments.length, s = new Array(r), o = 0; o < r; o++)
                        s[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(s)) || this,
                    i(n(t), "_slime", z, n(t)),
                    a(n(t), "_isBoosting", !1),
                    i(n(t), "_detectionArea", L, n(t)),
                    a(n(t), "_aiTargets", []),
                    a(n(t), "_safeArea", null),
                    a(n(t), "_safeAreaThreat", null),
                    a(n(t), "_slimeThreats", []),
                    a(n(t), "_dangerRatio", 0),
                    i(n(t), "_setSteering", F, n(t)),
                    i(n(t), "_maxDistanceThreat", k, n(t)),
                    a(n(t), "_currentTarget", null),
                    a(n(t), "_currentBehavior", null),
                    a(n(t), "_currentSteering", new c(0,1)),
                    a(n(t), "_targetSteering", null),
                    a(n(t), "_safeAreaCenter", null),
                    i(n(t), "_rotSpeed", M, n(t)),
                    a(n(t), "_brainState", null),
                    t
                }
                r(t, e);
                var h = t.prototype;
                return h.onEnable = function() {
                    this._detectionArea.on("onTriggerEnter", this.onTriggerEnter, this),
                    this._detectionArea.on("onTriggerExit", this.onTriggerExit, this),
                    d.emit(T[T.SafeArea_GetSafeArea], this),
                    this._currentSteering.x = _(-1, 1),
                    this._currentSteering.y = _(-1, 1),
                    this._currentSteering = this._currentSteering.normalize(),
                    this.updateSlimeThreats(),
                    this.updateThreatsLevels(),
                    this.updateBrainState()
                }
                ,
                h.onDisable = function() {
                    this._detectionArea.off("onTriggerEnter", this.onTriggerEnter, this),
                    this._detectionArea.off("onTriggerExit", this.onTriggerExit, this)
                }
                ,
                h.onTriggerEnter = function(e) {
                    var t = this.getAITarget(e.otherCollider.node);
                    null !== t && (t instanceof p && t.playerID == this._slime.playerID || (this._aiTargets.push(t),
                    this.updateBrainState()))
                }
                ,
                h.onTriggerExit = function(e) {
                    var t = this.getAITarget(e.otherCollider.node);
                    if (null !== t) {
                        var r = this._aiTargets.findIndex((function(e) {
                            return e.ID === t.ID
                        }
                        ));
                        -1 !== r && (this._aiTargets.splice(r, 1),
                        this.updateBrainState())
                    }
                }
                ,
                h.getAITarget = function(e) {
                    var t = e.getComponent(p);
                    if (null != t)
                        return t;
                    var r = e.getComponent(v);
                    return null != r ? r : null
                }
                ,
                h.onLoad = function() {}
                ,
                h.update = function(e) {
                    this.updateAITargets(this._aiTargets),
                    this.updateSlimeThreats(),
                    this.updateThreatsLevels(),
                    this.updateBrainState(),
                    this.updateSteering(e)
                }
                ,
                h.updateAITargets = function(e) {
                    for (var t = e.length - 1; t >= 0; t--)
                        null === e[t].node && e.splice(t, 1);
                    null !== this._currentTarget && null === this._currentTarget.node && (this._currentTarget = null)
                }
                ,
                h.updateSteering = function(e) {
                    if (null !== this._targetSteering && this._currentSteering !== this._targetSteering) {
                        var t = c.angle(this._currentSteering, this._targetSteering)
                          , r = c.cross(this._currentSteering, this._targetSteering)
                          , i = new c(0,0);
                        if (r < 0) {
                            var n = f.toDegree(Math.sin(-t * e * this._rotSpeed))
                              , a = f.toDegree(Math.cos(-t * e * this._rotSpeed));
                            i.x = a * this._currentSteering.x - n * this._currentSteering.y,
                            i.y = n * this._currentSteering.x + a * this._currentSteering.y
                        } else {
                            var s = f.toDegree(Math.sin(t * e * this._rotSpeed))
                              , o = f.toDegree(Math.cos(t * e * this._rotSpeed));
                            i.x = o * this._currentSteering.x - s * this._currentSteering.y,
                            i.y = s * this._currentSteering.x + o * this._currentSteering.y
                        }
                        this._currentSteering = i.normalize(),
                        g.emitEvents(this._setSteering, this._currentSteering)
                    }
                }
                ,
                h.setSteeringData = function(e) {
                    (e.steering !== this._targetSteering || e.target !== this._currentTarget || e.behavior !== this._currentBehavior || "Flee" === this._currentBehavior && this.dangerRatio !== e.dangerRatio) && (this._targetSteering = e.steering,
                    this._currentTarget = e.target,
                    this._currentBehavior = e.behavior,
                    this._dangerRatio = e.dangerRatio,
                    this.updateBrainState())
                }
                ,
                h.updateBrainState = function() {
                    this._brainState = new b(this._currentTarget,this.targets,this._currentSteering,this._currentBehavior,this._slime,this.threats,this._isBoosting)
                }
                ,
                h.setSafeArea = function(e) {
                    null === this._safeArea && (this._safeArea = e)
                }
                ,
                h.updateSlimeThreats = function() {
                    for (var e = this, t = this, r = function(e) {
                        -1 !== t._aiTargets.findIndex((function(r) {
                            return r === t._slimeThreats[e].other
                        }
                        )) && t._slimeThreats[e].other.isValid && t._slimeThreats[e].other.node.isValid || (t._brainState = null,
                        t._slimeThreats.splice(e, 1))
                    }, i = t._slimeThreats.length - 1; i >= 0; i--)
                        r(i);
                    for (var n = function(r) {
                        e._aiTargets[r]instanceof p && (-1 == t._slimeThreats.findIndex((function(t) {
                            return t.other === e._aiTargets[r]
                        }
                        )) && (t._slimeThreats.push(new m(t._slime,e._aiTargets[r])),
                        t._brainState = null))
                    }, a = 0; a < this._aiTargets.length; a++)
                        n(a)
                }
                ,
                h.updateThreatsLevels = function() {
                    null !== this._slime && (null === this._safeAreaThreat ? this._safeAreaThreat = new A(this._safeArea,this._slime) : (this._safeAreaThreat = this._safeAreaThreat.recalculateThreat(),
                    this._safeAreaThreat.threatLevel));
                    for (var e = this._slimeThreats.length - 1; e >= 0; e--)
                        this._slimeThreats[e] = this._slimeThreats[e].recalculateThreat(),
                        "\n" + this._slimeThreats[e].threatLevel
                }
                ,
                h.deactivatedSpeedBoost = function() {
                    this._isBoosting = !1,
                    this.updateBrainState()
                }
                ,
                h.activatedFleeSpeedBoost = function() {
                    this._isBoosting = !0,
                    this.updateBrainState()
                }
                ,
                h.activatedChaseSpeedBoost = function() {
                    this._isBoosting = !0,
                    this.updateBrainState()
                }
                ,
                s(t, [{
                    key: "targets",
                    get: function() {
                        return this._aiTargets
                    }
                }, {
                    key: "threats",
                    get: function() {
                        var e = [];
                        e.push(this._safeAreaThreat);
                        for (var t, r = o(this._slimeThreats); !(t = r()).done; ) {
                            var i = t.value;
                            e.push(i)
                        }
                        return e
                    }
                }, {
                    key: "dangerRatio",
                    get: function() {
                        return this._dangerRatio
                    }
                }, {
                    key: "brainState",
                    get: function() {
                        return this._brainState
                    }
                }]),
                t
            }(S)).prototype, "_slime", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            L = t(C.prototype, "_detectionArea", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            F = t(C.prototype, "_setSteering", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            k = t(C.prototype, "_maxDistanceThreat", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 10
                }
            }),
            M = t(C.prototype, "_rotSpeed", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 10
                }
            }),
            R = C)) || R) || R));
            h._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-UI-Label.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, n, r, l, o, i, a;
    return {
        setters: [function(e) {
            t = e.inheritsLoose,
            n = e.defineProperty,
            r = e.assertThisInitialized
        }
        , function(e) {
            l = e.cclegacy,
            o = e._decorator,
            i = e.Label,
            a = e.Component
        }
        ],
        execute: function() {
            var s;
            l._RF.push({}, "6e2c3RUn6NEX4g5R/9iNyPG", "TS-UI-Label", void 0);
            var c = o.ccclass
              , u = o.requireComponent;
            o.property,
            e("TS_UI_Label", c("TS_UI_Label")(s = u(i)(s = function(e) {
                function l() {
                    for (var t, l = arguments.length, o = new Array(l), i = 0; i < l; i++)
                        o[i] = arguments[i];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    n(r(t), "_label", null),
                    t
                }
                t(l, e);
                var o = l.prototype;
                return o.onEnable = function() {
                    null === this._label && (this._label = this.getComponent(i))
                }
                ,
                o.setText = function(e) {
                    this._label.string = e
                }
                ,
                l
            }(a)) || s) || s);
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/OnStart.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var e, r, n, i, o, a, c, s;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            r = t.inheritsLoose,
            n = t.initializerDefineProperty,
            i = t.assertThisInitialized
        }
        , function(t) {
            o = t.cclegacy,
            a = t._decorator,
            c = t.EventHandler,
            s = t.Component
        }
        ],
        execute: function() {
            var l, u, p, f, y;
            o._RF.push({}, "72ee5PZ+hdMopet3lRswSwG", "OnStart", void 0);
            var h = a.ccclass
              , v = a.property;
            t("OnStart", (l = h("OnStart"),
            u = v({
                visible: !0,
                type: [c]
            }),
            l((y = e((f = function(t) {
                function e() {
                    for (var e, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                        o[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(o)) || this,
                    n(i(e), "_onStart", y, i(e)),
                    e
                }
                return r(e, t),
                e.prototype.start = function() {
                    c.emitEvents(this._onStart)
                }
                ,
                e
            }(s)).prototype, "_onStart", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            p = f)) || p));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DivideSlimesEatenDailyMissionData.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./SlimeEvents.ts", "./DailyMissionState.ts", "./QuantityDailyMissionData.ts", "./DivideState.ts", "./TS-Slime-Skill-Divide.ts"], (function(i) {
    "use strict";
    var e, t, n, a, s, l, r, o, c, u, D, y, S;
    return {
        setters: [function(i) {
            e = i.inheritsLoose,
            t = i.defineProperty,
            n = i.assertThisInitialized,
            a = i.createClass
        }
        , function(i) {
            s = i.cclegacy,
            l = i._decorator
        }
        , function(i) {
            r = i.projectEvent
        }
        , function(i) {
            o = i.SlimeEvents
        }
        , function(i) {
            c = i.DailyMissionState
        }
        , function(i) {
            u = i.QuantityDailyMissionDataSave,
            D = i.QuantityDailyMissionData
        }
        , function(i) {
            y = i.DivideState
        }
        , function(i) {
            S = i.TS_Slime_Skill_Divide
        }
        ],
        execute: function() {
            var v, d, f;
            s._RF.push({}, "76ee8/ofrdN0aQR5rmEbvi4", "DivideSlimesEatenDailyMissionData", void 0);
            var h = l.ccclass
              , p = (l.property,
            i("DivideSlimesEatenDailyMissionDataSave", function(i) {
                function t() {
                    return i.apply(this, arguments) || this
                }
                return e(t, i),
                t
            }(u)));
            i("DivideSlimesEatenDailyMissionData", h("DivideSlimesEatenDailyMissionData")((f = d = function(i) {
                function s() {
                    for (var e, a = arguments.length, s = new Array(a), l = 0; l < a; l++)
                        s[l] = arguments[l];
                    return e = i.call.apply(i, [this].concat(s)) || this,
                    t(n(e), "_playerDivideSkill", null),
                    t(n(e), "_listening", !1),
                    e
                }
                e(s, i);
                var l = s.prototype;
                return l.createCloneInstance = function() {
                    return new s(this)
                }
                ,
                l.createSaveData = function() {
                    return new p(this)
                }
                ,
                l.enableListeners = function() {
                    this.currentState === c.InProgress && (this._listening = !0,
                    r.on(o[o.Slime_PlayerSlimeEaten], this.onPlayerEaten, this))
                }
                ,
                l.disableListeners = function() {
                    this._listening && r.off(o[o.Slime_PlayerSlimeEaten], this.onPlayerEaten, this)
                }
                ,
                l.onPlayerEaten = function(i, e) {
                    this._playerDivideSkill || (this._playerDivideSkill = i.getComponentInChildren(S)),
                    this._playerDivideSkill.currentState === y.Dividing && this.increase(1)
                }
                ,
                a(s, [{
                    key: "ID",
                    get: function() {
                        return s._id
                    }
                }, {
                    key: "displayName",
                    get: function() {
                        return "Eat " + this.targetValue + " Slimes with Divide!"
                    }
                }], [{
                    key: "ID",
                    get: function() {
                        return s._id
                    }
                }]),
                s
            }(D),
            t(d, "_id", "divide-eat-slimes"),
            v = f)) || v);
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS_Slime_ModelSelection.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./SkinSelectionEvents.ts", "./SkinSaveController.ts", "./ItemsSaveController.ts"], (function(e) {
    "use strict";
    var t, n, i, o, r, l, s, a, c, d, u, h, _, f, p, v, S, m, M, w, I, b;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.initializerDefineProperty,
            i = e.inheritsLoose,
            o = e.assertThisInitialized,
            r = e.defineProperty,
            l = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            s = e.cclegacy,
            a = e._decorator,
            c = e.Prefab,
            d = e.Node,
            u = e.EventHandler,
            h = e.instantiate,
            _ = e.Vec3,
            f = e.MeshRenderer,
            p = e.UIMeshRenderer,
            v = e.tween,
            S = e.Component,
            m = e.animation
        }
        , function(e) {
            M = e.projectEvent
        }
        , function(e) {
            w = e.SkinEvents
        }
        , function(e) {
            I = e.SkinSaveController
        }
        , function(e) {
            b = e.ItemsSaveController
        }
        ],
        execute: function() {
            var y, T, D, x, g, C, P, k, z, E, H, R, F, O, j, A, L;
            s._RF.push({}, "76f763DyylFW41XZQ3PmA/F", "TS_Slime_ModelSelection", void 0);
            var W = a.ccclass
              , B = a.property
              , V = (y = W("ModelSelectionEntry"),
            T = B({
                type: c
            }),
            y((g = t((x = function() {
                n(this, "id", g, this),
                n(this, "prefab", C, this)
            }
            ).prototype, "id", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            C = t(x.prototype, "prefab", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            D = x)) || D);
            e("TS_Slime_ModelSelection", (P = W("TS_Slime_ModelSelection"),
            k = B({
                type: d,
                visible: !0
            }),
            z = B({
                type: [V],
                visible: !0
            }),
            E = B({
                type: [u],
                visible: !0
            }),
            H = B({
                type: d,
                visible: !0
            }),
            P((O = t((F = function(e) {
                function t() {
                    for (var t, i = arguments.length, l = new Array(i), s = 0; s < i; s++)
                        l[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(l)) || this,
                    n(o(t), "_modelHolder", O, o(t)),
                    n(o(t), "_entries", j, o(t)),
                    n(o(t), "_onModelSet", A, o(t)),
                    n(o(t), "_referencePosition", L, o(t)),
                    r(o(t), "_modelsInstances", []),
                    r(o(t), "_currentModelIndex", -1),
                    r(o(t), "_skinsSave", []),
                    r(o(t), "_modelID", ""),
                    r(o(t), "_textureID", ""),
                    r(o(t), "_showTween", null),
                    r(o(t), "_hideTween", null),
                    t
                }
                i(t, e);
                var s = t.prototype;
                return s.loadModels = function() {
                    var e = this;
                    e._skinsSave = b.items;
                    for (var t, n = function() {
                        var n = t.value
                          , i = e.createModelInstance(n);
                        e._modelsInstances.push(i),
                        e.scheduleOnce((function() {
                            i.getComponent(m.AnimationController).setValue("Blend", .25),
                            i.active = !1
                        }
                        ), .01)
                    }, i = l(e._entries); !(t = i()).done; )
                        n()
                }
                ,
                s.onEnable = function() {
                    M.on(w[w.Skin_SetTexture], this.setTextureID, this),
                    M.on(w[w.Skin_SetModel], this.setModelID, this)
                }
                ,
                s.onDisable = function() {
                    M.off(w[w.Skin_SetTexture], this.setTextureID, this),
                    M.off(w[w.Skin_SetModel], this.setModelID, this)
                }
                ,
                s.createModelInstance = function(e) {
                    var t = e.prefab.data.children[0]
                      , n = h(t);
                    n.setParent(this._modelHolder),
                    n.setWorldPosition(this._referencePosition.worldPosition),
                    n.setScale(new _(0,0,0)),
                    n.setWorldRotation(this._referencePosition.worldRotation),
                    n.layer = 1 << 23;
                    for (var i, o = l(n.children); !(i = o()).done; ) {
                        i.value.layer = 1 << 23
                    }
                    for (var r, s = n.getComponentsInChildren(f), a = l(s); !(r = a()).done; ) {
                        var c = r.value;
                        c.getComponent(p) || c.addComponent(p)
                    }
                    return n
                }
                ,
                s.initialize = function() {
                    var e = I.skin.split("-");
                    this._modelID = e[0],
                    this._textureID = e[1],
                    this._currentModelIndex = -1,
                    this.loadModels(),
                    this.setModel(.3, 1)
                }
                ,
                s.hideModel = function() {
                    this.hideModelHandler(.15, .15)
                }
                ,
                s.hideModelHandler = function(e, t) {
                    var n = this;
                    if (-1 != this._currentModelIndex) {
                        var i = this._modelsInstances[this._currentModelIndex];
                        this._hideTween && (this._hideTween.stop(),
                        this._hideTween.set({
                            scale: new _(0,0,0)
                        })),
                        this._hideTween = v(i).delay(e).to(t, {
                            scale: new _(0,0,0)
                        }, {
                            onComplete: function() {
                                i.active = !1,
                                n._hideTween = null
                            }
                        }).start()
                    }
                }
                ,
                s.setTextureID = function(e) {
                    this._textureID = e.toString(),
                    this.setModel(0, 1)
                }
                ,
                s.setModelID = function(e) {
                    this._modelID = e.toString(),
                    this.setModel(0, 1)
                }
                ,
                s.setModel = function(e, t) {
                    var n = this
                      , i = this._modelID + "-" + this._textureID
                      , o = this._entries.findIndex((function(e) {
                        return e.id === i
                    }
                    ));
                    if (this._currentModelIndex !== o) {
                        var r = this._modelsInstances[o];
                        this._showTween && (this._showTween.stop(),
                        this._showTween.set({
                            scale: new _(50,50,50)
                        })),
                        this.hideModelHandler(0, 0),
                        this._showTween = v(r).delay(e).to(t, {
                            scale: new _(50,50,50)
                        }, {
                            easing: "elasticOut",
                            onStart: function() {
                                r.setScale(_.ZERO),
                                r.active = !0
                            },
                            onComplete: function() {
                                n._showTween = null
                            }
                        }).start(),
                        this._currentModelIndex = o,
                        u.emitEvents(this._onModelSet, r)
                    }
                }
                ,
                t
            }(S)).prototype, "_modelHolder", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            j = t(F.prototype, "_entries", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            A = t(F.prototype, "_onModelSet", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            L = t(F.prototype, "_referencePosition", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            R = F)) || R));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Events-Listener.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts"], (function(e) {
    "use strict";
    var t, n, i, r, o, s, a, c, l;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            i = e.initializerDefineProperty,
            r = e.assertThisInitialized
        }
        , function(e) {
            o = e.cclegacy,
            s = e._decorator,
            a = e.EventHandler,
            c = e.Component
        }
        , function(e) {
            l = e.projectEvent
        }
        ],
        execute: function() {
            var u, v, p, f, _, h, d, y, E;
            o._RF.push({}, "7aa59VYt9NOyp9K157gXXfU", "TS-Events-Listener", void 0);
            var b = s.ccclass
              , R = s.property;
            e("TS_Events_Listener", (u = b("TS_Events_Listener"),
            v = R({
                visible: !0
            }),
            p = R({
                visible: !0
            }),
            f = R({
                visible: !0,
                type: [a]
            }),
            u((d = t((h = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), s = 0; s < n; s++)
                        o[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    i(r(t), "_eventID", d, r(t)),
                    i(r(t), "_delay", y, r(t)),
                    i(r(t), "_onEventRaised", E, r(t)),
                    t
                }
                n(t, e);
                var o = t.prototype;
                return o.onEnable = function() {
                    l.on(this._eventID, this.onEventRaised, this)
                }
                ,
                o.onDisable = function() {
                    l.off(this._eventID, this.onEventRaised, this)
                }
                ,
                o.onEventRaised = function(e) {
                    var t = this;
                    this._delay <= 0 ? a.emitEvents(this._onEventRaised, e) : this.scheduleOnce((function() {
                        return a.emitEvents(t._onEventRaised, e)
                    }
                    ), this._delay)
                }
                ,
                t
            }(c)).prototype, "_eventID", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            y = t(h.prototype, "_delay", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            E = t(h.prototype, "_onEventRaised", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            _ = h)) || _));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DailyMissionManager.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./env", "./ProjectEvent.ts", "./ENUM-GameEvents.ts", "./DailyMissionDataFactory.ts", "./DailyMissionDifficulty.ts", "./DailyMissionsSaveController.ts", "./DailyMissionsSet.ts", "./DailyMissionRewardFactory.ts"], (function(i) {
    "use strict";
    var s, e, t, n, o, a, r, l, c, y, u, d, f, h, m, M, _, p, D, g, v, R, b;
    return {
        setters: [function(i) {
            s = i.applyDecoratedDescriptor,
            e = i.inheritsLoose,
            t = i.initializerDefineProperty,
            n = i.assertThisInitialized,
            o = i.defineProperty,
            a = i.createForOfIteratorHelperLoose
        }
        , function(i) {
            r = i.cclegacy,
            l = i._decorator,
            c = i.resources,
            y = i.JsonAsset,
            u = i.input,
            d = i.Input,
            f = i.KeyCode,
            h = i.randomRangeInt,
            m = i.Component
        }
        , function(i) {
            M = i.BUILD
        }
        , function(i) {
            _ = i.projectEvent
        }
        , function(i) {
            p = i.GameEvents
        }
        , function(i) {
            D = i.DailyMissionDataFactory
        }
        , function(i) {
            g = i.DailyMissionDifficulty
        }
        , function(i) {
            v = i.DailyMissionsSaveController
        }
        , function(i) {
            R = i.DailyMissionsSet
        }
        , function(i) {
            b = i.DailyMissionRewardFactory
        }
        ],
        execute: function() {
            var F, T, w, E, P, L, S, K, C;
            r._RF.push({}, "7ce902c+8ZP7ZMly+mPaf7O", "DailyMissionManager", void 0);
            var I = l.ccclass
              , N = l.property;
            i("DailyMissionManager", (F = I("DailyMissionManager"),
            T = N({
                visible: !0
            }),
            w = N({
                visible: !0,
                type: D
            }),
            E = N({
                visible: !0,
                type: b
            }),
            F((S = s((L = function(i) {
                function s() {
                    for (var s, e = arguments.length, a = new Array(e), r = 0; r < e; r++)
                        a[r] = arguments[r];
                    return s = i.call.apply(i, [this].concat(a)) || this,
                    t(n(s), "_resetMissions", S, n(s)),
                    t(n(s), "_dailyMissionDataFactory", K, n(s)),
                    t(n(s), "_dailyMissionRewardFactory", C, n(s)),
                    o(n(s), "_templateMissions", []),
                    o(n(s), "_missionSet", null),
                    o(n(s), "_missionsRemainingTime", 0),
                    o(n(s), "_ctrlPressed", !1),
                    s
                }
                e(s, i);
                var r = s.prototype;
                return r.onLoad = function() {
                    c.load("Daily Missions/daily-missions", y, null, this.onResourceLoaded.bind(this))
                }
                ,
                r.onEnable = function() {
                    _.on(p[p.Game_Over], this.disableMissions, this),
                    u.on(d.EventType.KEY_DOWN, this.onKeyPressed, this),
                    u.on(d.EventType.KEY_UP, this.onKeyReleased, this)
                }
                ,
                r.onDisable = function() {
                    _.off(p[p.Game_Over], this.disableMissions, this),
                    u.off(d.EventType.KEY_DOWN, this.onKeyPressed, this),
                    u.off(d.EventType.KEY_UP, this.onKeyReleased, this)
                }
                ,
                r.onKeyPressed = function(i) {
                    i.keyCode === f.CTRL_LEFT && (this._ctrlPressed = !0)
                }
                ,
                r.onKeyReleased = function(i) {
                    i.keyCode === f.CTRL_LEFT ? this._ctrlPressed = !1 : i.keyCode !== f.F1 || M || this.getNewMissions()
                }
                ,
                r.update = function(i) {
                    this._missionsRemainingTime > 0 && (this._missionsRemainingTime -= i),
                    null !== this._missionSet && this._missionsRemainingTime <= 0 && this.getNewMissions()
                }
                ,
                r.onResourceLoaded = function(i, s) {
                    for (var e, t = s.json.missions, n = a(t); !(e = n()).done; ) {
                        var o = e.value
                          , r = o.type
                          , l = o.displayName
                          , c = o.easy
                          , y = o.medium
                          , u = o.hard;
                        this._templateMissions.push(this._dailyMissionDataFactory.createInstance(r, this._dailyMissionRewardFactory, g.Easy, c, l)),
                        this._templateMissions.push(this._dailyMissionDataFactory.createInstance(r, this._dailyMissionRewardFactory, g.Medium, y, l)),
                        this._templateMissions.push(this._dailyMissionDataFactory.createInstance(r, this._dailyMissionRewardFactory, g.Hard, u, l))
                    }
                    this.missionsLoaded()
                }
                ,
                r.missionsLoaded = function() {
                    var i = this;
                    try {
                        this._missionSet = new R(v.missions,(function(s) {
                            var e = i._templateMissions.find((function(i) {
                                return i.ID === s._id && i.difficulty === s._difficulty
                            }
                            ));
                            if (e)
                                return i._dailyMissionDataFactory.createInstance(e, i._dailyMissionRewardFactory, s);
                            throw "Undefined Template Mission for:\n" + s
                        }
                        )),
                        this._missionsRemainingTime = this.calculateRemainingMissionTime(),
                        !M && this._resetMissions || this._missionsRemainingTime <= 0 ? this.getNewMissions() : this.enableMissions()
                    } catch (i) {
                        this.getNewMissions()
                    }
                }
                ,
                r.getNewMissions = function() {
                    if (this._dailyMissionDataFactory.canCreateMissions) {
                        var i = this._templateMissions.filter((function(i) {
                            return i.difficulty === g.Easy
                        }
                        ))
                          , s = i[h(0, i.length)]
                          , e = this._templateMissions.filter((function(i) {
                            return i.difficulty === g.Medium
                        }
                        ))
                          , t = e[h(0, e.length)]
                          , n = this._templateMissions.filter((function(i) {
                            return i.difficulty === g.Hard
                        }
                        ))
                          , o = n[h(0, n.length)];
                        this._missionSet = new R([s.instantiate(), t.instantiate(), o.instantiate()]),
                        this._missionsRemainingTime = this.calculateRemainingMissionTime(),
                        v.saveDailies(this._missionSet),
                        this.enableMissions()
                    }
                }
                ,
                r.calculateRemainingMissionTime = function() {
                    return 864e5 - ((new Date).getTime() - this._missionSet.creationDate.getTime())
                }
                ,
                r.enableMissions = function() {
                    this._missionSet.enableMissions()
                }
                ,
                r.disableMissions = function() {
                    this._missionSet.disableMissions()
                }
                ,
                s
            }(m)).prototype, "_resetMissions", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            K = s(L.prototype, "_dailyMissionDataFactory", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            C = s(L.prototype, "_dailyMissionRewardFactory", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            P = L)) || P));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-Bot.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Range.ts", "./TS_Slime.ts"], (function(t) {
    "use strict";
    var e, i, r, n, a, o, s, c, l;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            r = t.initializerDefineProperty,
            n = t.assertThisInitialized
        }
        , function(t) {
            a = t.cclegacy,
            o = t._decorator,
            s = t.randomRangeInt
        }
        , function(t) {
            c = t.Range
        }
        , function(t) {
            l = t.TS_Slime
        }
        ],
        execute: function() {
            var p, u, S, f, _, h;
            a._RF.push({}, "7debcjBg7tM3p8q5vWfzpBl", "TS-Slime-Bot", void 0);
            var g = o.ccclass
              , y = o.property
              , v = o.executionOrder;
            t("TS_Slime_Bot", (p = g("TS_Slime_Bot"),
            u = v(-1),
            S = y({
                visible: !0,
                type: c
            }),
            p(f = u((h = e((_ = function(t) {
                function e() {
                    for (var e, i = arguments.length, a = new Array(i), o = 0; o < i; o++)
                        a[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(a)) || this,
                    r(n(e), "_startSizeRange", h, n(e)),
                    e
                }
                i(e, t);
                var a = e.prototype;
                return a.start = function() {
                    if (t.prototype.start.call(this),
                    1 === this.Size) {
                        var e = s(this._startSizeRange.Min, this._startSizeRange.Max) - this.Size;
                        e > 0 && t.prototype.increase.call(this, e)
                    }
                }
                ,
                a.increase = function(e) {
                    t.prototype.increase.call(this, e)
                }
                ,
                e
            }(l)).prototype, "_startSizeRange", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new c(0,0)
                }
            }),
            f = _)) || f) || f));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-ScaleTracker.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, r, n, a, i, c, o, l, u;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            n = e.initializerDefineProperty,
            a = e.assertThisInitialized
        }
        , function(e) {
            i = e.cclegacy,
            c = e._decorator,
            o = e.Node,
            l = e.EventHandler,
            u = e.Component
        }
        ],
        execute: function() {
            var s, p, f, d, y, g, h;
            i._RF.push({}, "7eeca/pB5tK6rnzOssHmNQj", "TS-ScaleTracker", void 0);
            var S = c.ccclass
              , T = c.property;
            e("TS_ScaleTracker", (s = S("TS_ScaleTracker"),
            p = T(o),
            f = T(l),
            s((g = t((y = function(e) {
                function t() {
                    for (var t, r = arguments.length, i = new Array(r), c = 0; c < r; c++)
                        i[c] = arguments[c];
                    return t = e.call.apply(e, [this].concat(i)) || this,
                    n(a(t), "target", g, a(t)),
                    n(a(t), "onUpdate", h, a(t)),
                    t
                }
                return r(t, e),
                t.prototype.update = function() {
                    this.onUpdate.emit([this.target.scale])
                }
                ,
                t
            }(u)).prototype, "target", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            h = t(y.prototype, "onUpdate", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            d = y)) || d));
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimationHelperVariable.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./AnimationEnums.ts"], (function(i) {
    "use strict";
    var e, r, a, n, t, l;
    return {
        setters: [function(i) {
            e = i.applyDecoratedDescriptor,
            r = i.initializerDefineProperty
        }
        , function(i) {
            a = i.cclegacy,
            n = i._decorator,
            t = i.Enum
        }
        , function(i) {
            l = i.AnimationVariableType
        }
        ],
        execute: function() {
            var o, u, p, c, s, m, b, f, y;
            a._RF.push({}, "7f86fBkr0NPC6FhOPx3u8fS", "AnimationHelperVariable", void 0);
            var h = n.ccclass
              , v = n.property;
            i("AnimationHelperVariable", (o = h("AnimationHelperVariable"),
            u = v({
                visible: !0,
                type: t(l)
            }),
            p = v({
                visible: !0
            }),
            c = v({
                visible: !0
            }),
            o((b = e((m = function() {
                r(this, "animParamType", b, this),
                r(this, "animParam", f, this),
                r(this, "paramValue", y, this)
            }
            ).prototype, "animParamType", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return l.None
                }
            }),
            f = e(m.prototype, "animParam", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            y = e(m.prototype, "paramValue", [c], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            s = m)) || s));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GSGameEventsEmitter.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, n, a, c, i;
    return {
        setters: [function(e) {
            t = e.defineProperty,
            n = e.inheritsLoose
        }
        , function(e) {
            a = e.cclegacy,
            c = e._decorator,
            i = e.Component
        }
        ],
        execute: function() {
            var o, s, m;
            a._RF.push({}, "7fa30EftohPYbRJx2BFzkUm", "GSGameEventsEmitter", void 0);
            var r = c.ccclass;
            e("GSGameEventsEmitter", r("GSGameEventsEmitter")((m = s = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                return n(t, e),
                t.levelCompleted = function(e) {
                    "undefined" != typeof GameSnacks && GameSnacks.game.levelComplete(e)
                }
                ,
                t.highscore = function(e) {
                    "undefined" != typeof GameSnacks && GameSnacks.score.update(e)
                }
                ,
                t.gameOver = function() {
                    "undefined" != typeof GameSnacks && GameSnacks.game.gameOver()
                }
                ,
                t.gameReady = function() {
                    t._emitted || "undefined" != typeof GameSnacks && (GameSnacks.game.ready(),
                    t._emitted = !0)
                }
                ,
                t
            }(i),
            t(s, "_emitted", !1),
            o = m)) || o);
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Range.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, i, n, r, a;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.createClass,
            n = e.initializerDefineProperty
        }
        , function(e) {
            r = e.cclegacy,
            a = e._decorator
        }
        ],
        execute: function() {
            var o, c, u, s;
            r._RF.push({}, "7fcf05P1PpHiLm263bSenj0", "Range", void 0);
            var l = a.ccclass
              , p = a.property;
            e("Range", l("Range")((u = t((c = function() {
                function e(e, t) {
                    void 0 === e && (e = 0),
                    void 0 === t && (t = 0),
                    n(this, "min", u, this),
                    n(this, "max", s, this),
                    this.min = e,
                    this.max = t
                }
                return i(e, [{
                    key: "Max",
                    get: function() {
                        return this.max
                    }
                }, {
                    key: "Min",
                    get: function() {
                        return this.min
                    }
                }]),
                e
            }()).prototype, "min", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            s = t(c.prototype, "max", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            o = c)) || o);
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PlayerLevelDisplay.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./LevelingUpEnums.ts", "./PlayerLevelController.ts"], (function(e) {
    "use strict";
    var l, t, a, n, i, r, o, c, s, p, u, v;
    return {
        setters: [function(e) {
            l = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            a = e.initializerDefineProperty,
            n = e.assertThisInitialized,
            i = e.defineProperty
        }
        , function(e) {
            r = e.cclegacy,
            o = e._decorator,
            c = e.Label,
            s = e.Component
        }
        , function(e) {
            p = e.projectEvent
        }
        , function(e) {
            u = e.LevelingUpEvents
        }
        , function(e) {
            v = e.PlayerLevelController
        }
        ],
        execute: function() {
            var d, y, f, b, L;
            r._RF.push({}, "81ae3BBkvtAZ4T+cbJ1WRAa", "PlayerLevelDisplay", void 0);
            var h = o.ccclass
              , P = o.property;
            e("PlayerLevelDisplay", (d = h("PlayerLevelDisplay"),
            y = P({
                type: c,
                visible: !0
            }),
            d((L = l((b = function(e) {
                function l() {
                    for (var l, t = arguments.length, r = new Array(t), o = 0; o < t; o++)
                        r[o] = arguments[o];
                    return l = e.call.apply(e, [this].concat(r)) || this,
                    a(n(l), "_label", L, n(l)),
                    i(n(l), "levelUpdatedCallback", void 0),
                    l
                }
                t(l, e);
                var r = l.prototype;
                return r.onEnable = function() {
                    var e = this;
                    this.updateLabel(v.level),
                    this.levelUpdatedCallback = p.on(u[u.LevelingUp_PlayerLevelUpdated], (function(l) {
                        e.updateLabel(l)
                    }
                    ))
                }
                ,
                r.onDisable = function() {
                    p.off(u[u.LevelingUp_PlayerLevelUpdated], this.levelUpdatedCallback),
                    this.levelUpdatedCallback = null
                }
                ,
                r.updateLabel = function(e) {
                    this._label.string = e.toFixed()
                }
                ,
                l
            }(s)).prototype, "_label", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            f = b)) || f));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Game-Victory.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./ENUM-GameEvents.ts", "./SlimeEvents.ts", "./TS_Slime.ts", "./GSGameEventsEmitter.ts"], (function(e) {
    "use strict";
    var t, i, s, n, l, o, r, a, m, c, h, u, _, f, S;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            s = e.initializerDefineProperty,
            n = e.assertThisInitialized,
            l = e.defineProperty
        }
        , function(e) {
            o = e.cclegacy,
            r = e._decorator,
            a = e.input,
            m = e.Input,
            c = e.Component
        }
        , function(e) {
            h = e.projectEvent
        }
        , function(e) {
            u = e.GameEvents
        }
        , function(e) {
            _ = e.SlimeEvents
        }
        , function(e) {
            f = e.TS_Slime
        }
        , function(e) {
            S = e.GSGameEventsEmitter
        }
        ],
        execute: function() {
            var p, d, v, y, b, G, D;
            o._RF.push({}, "8242eQsTn1Gu72i9gG/84wj", "TS-Game-Victory", void 0);
            var E = r.ccclass
              , T = r.property;
            e("TS_Game_Victory", (p = E("TS_Game_Victory"),
            d = T([f]),
            v = T({
                visible: !0
            }),
            p((G = t((b = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), r = 0; r < i; r++)
                        o[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    s(n(t), "_slimes", G, n(t)),
                    s(n(t), "_totalSlimes", D, n(t)),
                    l(n(t), "_active", !1),
                    t
                }
                i(t, e);
                var o = t.prototype;
                return o.onEnable = function() {
                    this._totalSlimes = 0,
                    h.on(_[_.Slime_NewSlime], this.addNewSlime, this),
                    h.on(_[_.Slime_SlimeAbsorbed], this.slimeAbsorbed, this),
                    h.on(_[_.Slime_SlimeDied], this.slimeAbsorbed, this),
                    h.once(u[u.Game_Start], this.onGameStarted, this),
                    a.on(m.EventType.KEY_DOWN, this.onKeyDown, this)
                }
                ,
                o.onDisable = function() {
                    h.off(_[_.Slime_NewSlime], this.addNewSlime, this),
                    h.off(_[_.Slime_SlimeAbsorbed], this.slimeAbsorbed, this),
                    h.off(_[_.Slime_SlimeDied], this.slimeAbsorbed, this),
                    a.off(m.EventType.KEY_DOWN, this.onKeyDown, this)
                }
                ,
                o.onKeyDown = function(e) {}
                ,
                o.addNewSlime = function(e) {
                    var t = this._slimes.findIndex((function(t) {
                        return t[0].playerID === e.playerID
                    }
                    ));
                    -1 == t ? (this._totalSlimes++,
                    this._slimes.push([e])) : this._slimes[t].push(e)
                }
                ,
                o.onGameStarted = function() {
                    this._active = !0,
                    this.updateTotalSlimes()
                }
                ,
                o.updateTotalSlimes = function() {
                    h.emit(u[u.Game_TotalSlimes], this._totalSlimes)
                }
                ,
                o.slimeAbsorbed = function(e) {
                    if (this._active) {
                        var t = this._slimes.findIndex((function(t) {
                            return t[0].playerID == e.playerID
                        }
                        ));
                        if (e.playerID.includes("player") && 1 === this._slimes[t].length) {
                            var i = this._totalSlimes;
                            this._totalSlimes--,
                            this.updateTotalSlimes(),
                            this.defeat(i, i),
                            this._active = !1
                        } else if (-1 != t) {
                            var s = this._slimes[t].findIndex((function(t) {
                                return t === e
                            }
                            ));
                            this._slimes[t].splice(s, 1),
                            0 === this._slimes[t].length && (this._slimes.splice(t, 1),
                            this._totalSlimes--,
                            this.updateTotalSlimes()),
                            1 == this._slimes.length ? (this.victory(1),
                            this._active = !1) : S.highscore(this._totalSlimes)
                        }
                    }
                }
                ,
                o.defeat = function(e, t) {
                    h.emit(u[u.Game_Defeat], e),
                    h.emit(u[u.Game_Over]),
                    S.gameOver()
                }
                ,
                o.victory = function(e) {
                    h.emit(u[u.Game_Victory]),
                    h.emit(u[u.Game_Over]),
                    S.levelCompleted(0)
                }
                ,
                t
            }(c)).prototype, "_slimes", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [[]]
                }
            }),
            D = t(b.prototype, "_totalSlimes", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            y = b)) || y));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SlimeEvents.ts", ["cc"], (function(e) {
    "use strict";
    var i;
    return {
        setters: [function(e) {
            i = e.cclegacy
        }
        ],
        execute: function() {
            var l;
            e("SlimeEvents", void 0),
            i._RF.push({}, "838bdZ9SpVH05lb8OB02TA5", "SlimeEvents", void 0),
            function(e) {
                e[e.Slime_NewSlime = 0] = "Slime_NewSlime",
                e[e.Slime_SlimeAbsorbed = 1] = "Slime_SlimeAbsorbed",
                e[e.Slime_PlayerIncreased = 2] = "Slime_PlayerIncreased",
                e[e.Slime_PlayerDecreased = 3] = "Slime_PlayerDecreased",
                e[e.Slime_PlayerShootClicked = 4] = "Slime_PlayerShootClicked",
                e[e.Slime_PlayerDivideClicked = 5] = "Slime_PlayerDivideClicked",
                e[e.Slime_PlayerSlimeEaten = 6] = "Slime_PlayerSlimeEaten",
                e[e.Slime_PlayerFoodEaten = 7] = "Slime_PlayerFoodEaten",
                e[e.Slime_PlayerShootReady = 8] = "Slime_PlayerShootReady",
                e[e.Slime_PlayerShootNotReady = 9] = "Slime_PlayerShootNotReady",
                e[e.Slime_PlayerDivideNotReady = 10] = "Slime_PlayerDivideNotReady",
                e[e.Slime_PlayerDivideReady = 11] = "Slime_PlayerDivideReady",
                e[e.Slime_PlayerUniteReady = 12] = "Slime_PlayerUniteReady",
                e[e.Slime_PlayerDivided = 13] = "Slime_PlayerDivided",
                e[e.Slime_PlayerUnited = 14] = "Slime_PlayerUnited",
                e[e.Slime_PlayerUniteNotReady = 15] = "Slime_PlayerUniteNotReady",
                e[e.Slime_PlayerDivideCD = 16] = "Slime_PlayerDivideCD",
                e[e.Slime_PlayerUniteCD = 17] = "Slime_PlayerUniteCD",
                e[e.Slime_SlimeDied = 18] = "Slime_SlimeDied",
                e[e.Slime_PlayerDivideDisabled = 19] = "Slime_PlayerDivideDisabled",
                e[e.Slime_PlayerVanished = 20] = "Slime_PlayerVanished",
                e[e.Slime_SlimeBeginVanish = 21] = "Slime_SlimeBeginVanish",
                e[e.Slime_GameSlimesReady = 22] = "Slime_GameSlimesReady"
            }(l || (l = e("SlimeEvents", {}))),
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-SetText.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, i, r, n, l, o, a, u, c;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            r = e.initializerDefineProperty,
            n = e.assertThisInitialized
        }
        , function(e) {
            l = e.cclegacy,
            o = e._decorator,
            a = e.RichText,
            u = e.Label,
            c = e.Component
        }
        ],
        execute: function() {
            var s, p, f, b, h, x, m, y, g;
            l._RF.push({}, "85848g+yY1PpKiragtG2vjV", "TS-SetText", void 0);
            var T = o.ccclass
              , S = o.property;
            e("TS_SetText", (s = T("TS_SetText"),
            p = S(a),
            f = S(u),
            s((x = t((h = function(e) {
                function t() {
                    for (var t, i = arguments.length, l = new Array(i), o = 0; o < i; o++)
                        l[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(l)) || this,
                    r(n(t), "label", x, n(t)),
                    r(n(t), "commonLabel", m, n(t)),
                    r(n(t), "prefix", y, n(t)),
                    r(n(t), "sufix", g, n(t)),
                    t
                }
                return i(t, e),
                t.prototype.setText = function(e) {
                    null != this.label && (this.label.string = this.prefix + e + this.sufix),
                    null != this.commonLabel && (this.commonLabel.string = this.prefix + e + this.sufix)
                }
                ,
                t
            }(c)).prototype, "label", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            m = t(h.prototype, "commonLabel", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            y = t(h.prototype, "prefix", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            g = t(h.prototype, "sufix", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            b = h)) || b));
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SlimesDailyMissionEntryUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts", "./DailyMissionState.ts", "./DailyMissionDifficulty.ts", "./AdsEvents.ts", "./RewardedAdOportunity.ts", "./DailyMissionEntryUI.ts"], (function(i) {
    "use strict";
    var t, n, s, e, o, a, r, d, l, c, u, h, y, A, f;
    return {
        setters: [function(i) {
            t = i.applyDecoratedDescriptor,
            n = i.inheritsLoose,
            s = i.defineProperty,
            e = i.assertThisInitialized,
            o = i.initializerDefineProperty
        }
        , function(i) {
            a = i.cclegacy,
            r = i._decorator,
            d = i.EventHandler
        }
        , function(i) {
            l = i.logger
        }
        , function(i) {
            c = i.projectEvent
        }
        , function(i) {
            u = i.DailyMissionState
        }
        , function(i) {
            h = i.DailyMissionDifficulty
        }
        , function(i) {
            y = i.AdsEvents
        }
        , function(i) {
            A = i.RewardedAdOportunity
        }
        , function(i) {
            f = i.DailyMissionEntryUI
        }
        ],
        execute: function() {
            var m, p, _, w, D;
            a._RF.push({}, "85c5d2mBTNAjKx4dLl8Y+bc", "SlimesDailyMissionEntryUI", void 0);
            var E = r.ccclass
              , g = r.property;
            i("SlimesDailyMissionEntryUI", (m = E("SlimesDailyMissionEntryUI"),
            p = g({
                visible: !0
            }),
            m((D = t((w = function(i) {
                function t() {
                    for (var t, n = arguments.length, a = new Array(n), r = 0; r < n; r++)
                        a[r] = arguments[r];
                    return t = i.call.apply(i, [this].concat(a)) || this,
                    s(e(t), "_watchedAd", !1),
                    s(e(t), "_waitingAd", !1),
                    o(e(t), "_adAnimationParamater", D, e(t)),
                    t
                }
                n(t, i);
                var a = t.prototype;
                return a.onEnable = function() {
                    this._watchedAd = !1,
                    this._waitingAd = !1,
                    c.on(y[y.AdsEvents_AdLoaded], this.onAdLoaded, this)
                }
                ,
                a.onDisable = function() {
                    c.off(y[y.AdsEvents_AdLoaded], this.onAdLoaded, this)
                }
                ,
                a.update = function(i) {}
                ,
                a.onAdLoaded = function() {
                    l.log("SlimesDailyMissionEntryUI: Ad Loaded"),
                    this._waitingAd && (l.log("SlimesDailyMissionEntryUI: Show ad oportunity"),
                    this._waitingAd = !1,
                    this.showAdOportunity())
                }
                ,
                a.showAdOportunity = function() {
                    this._animator.animHelper.setBool(null, this._adAnimationParamater + ",true")
                }
                ,
                a.setMissionData = function(t) {
                    i.prototype.setMissionData.call(this, t),
                    this._animator.animHelper.setBool(null, this._adAnimationParamater + ",false"),
                    t.difficulty === h.Hard && t.currentState === u.Completed && (A.isAdReady ? (l.log("SlimesDailyMissionEntryUI: Show ad oportunity"),
                    this.showAdOportunity()) : (l.log("SlimesDailyMissionEntryUI: Wait for ad oportunity"),
                    this._waitingAd = !0))
                }
                ,
                a.redeemRewardsClicked = function() {
                    this._mission && this._mission.currentState === u.Completed && (this._mission.redeemRewards(this._watchedAd ? 2 : 1),
                    this.updateAnimation())
                }
                ,
                a.onAdCompleted = function() {
                    this._watchedAd = !0,
                    d.emitEvents(this._setRewardQuantity, 2 * this._mission.rewards[0].quantity)
                }
                ,
                a.onAdFailed = function(i) {
                    this._watchedAd = !1,
                    this._waitingAd = !0
                }
                ,
                a.showAd = function() {
                    this._watchedAd = !1,
                    this._animator.animHelper.setBool(null, this._adAnimationParamater + ",false"),
                    c.emit(y[y.AdsEvents_ShowAd], this)
                }
                ,
                t
            }(f)).prototype, "_adAnimationParamater", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            _ = w)) || _));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SelectedStoreItemUIController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./PlayerPurseController.ts", "./SkinSelectionEvents.ts", "./SkinSaveController.ts", "./StoreController.ts"], (function(t) {
    "use strict";
    var e, i, n, r, s, o, a, l, u, c, S, h, d, p, _;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            n = t.initializerDefineProperty,
            r = t.assertThisInitialized,
            s = t.defineProperty
        }
        , function(t) {
            o = t.cclegacy,
            a = t._decorator,
            l = t.Enum,
            u = t.EventHandler,
            c = t.Component
        }
        , function(t) {
            S = t.projectEvent
        }
        , function(t) {
            h = t.PlayerPurseController
        }
        , function(t) {
            d = t.SkinEvents
        }
        , function(t) {
            p = t.SkinSaveController
        }
        , function(t) {
            _ = t.storeController
        }
        ],
        execute: function() {
            var I, k, m, f, v, D, b, C, y, E, g, U, P, M, x;
            t("ItemState", void 0),
            o._RF.push({}, "85d1aSv1CpM1q1iP4fDFUa4", "SelectedStoreItemUIController", void 0);
            var T, z = a.ccclass, w = a.property;
            !function(t) {
                t[t.None = 0] = "None",
                t[t.Locked = 1] = "Locked",
                t[t.Unlocked = 2] = "Unlocked",
                t[t.Equipped = 3] = "Equipped",
                t[t.CantUnlock = 4] = "CantUnlock"
            }(T || (T = t("ItemState", {})));
            t("SelectedStoreItemUIController", (I = z("SelectedStoreItemUIController"),
            k = w({
                visible: !0,
                type: l(T)
            }),
            m = w({
                visible: !0,
                type: [u]
            }),
            f = w({
                visible: !0,
                type: [u]
            }),
            v = w({
                visible: !0,
                type: [u]
            }),
            D = w({
                visible: !0,
                type: [u]
            }),
            b = w({
                visible: !0,
                type: [u]
            }),
            I((E = e((y = function(t) {
                function e() {
                    for (var e, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
                        o[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(o)) || this,
                    n(r(e), "_currentItemState", E, r(e)),
                    n(r(e), "_setStoreItemCost", g, r(e)),
                    n(r(e), "_setSkinName", U, r(e)),
                    n(r(e), "_setStoreState", P, r(e)),
                    n(r(e), "_skinPurchased", M, r(e)),
                    n(r(e), "_skinChanged", x, r(e)),
                    s(r(e), "_skinTextureID", 0),
                    s(r(e), "_skinModelID", ""),
                    s(r(e), "_storeItemData", null),
                    e
                }
                i(e, t);
                var o = e.prototype;
                return o.onEnable = function() {
                    var t = p.skin.split("-");
                    this._skinModelID = t[0],
                    this._skinTextureID = Number.parseInt(t[1]),
                    this.updateState(),
                    S.on(d[d.Skin_SetTexture], this.setSkinTextureID, this),
                    S.on(d[d.Skin_SetModel], this.setSkinModelID, this)
                }
                ,
                o.onDisable = function() {
                    S.off(d[d.Skin_SetTexture], this.setSkinTextureID, this),
                    S.off(d[d.Skin_SetModel], this.setSkinModelID, this)
                }
                ,
                o.setSkinTextureID = function(t) {
                    this._skinTextureID = t,
                    this.updateState()
                }
                ,
                o.setSkinModelID = function(t) {
                    this._skinModelID = t,
                    this.updateState()
                }
                ,
                o.updateState = function() {
                    var t = this._skinModelID + "-" + this._skinTextureID
                      , e = p.skin;
                    if (this._storeItemData = _.storeItems.find((function(e) {
                        return e.id === t
                    }
                    )),
                    u.emitEvents(this._setStoreItemCost, this._storeItemData.cost),
                    u.emitEvents(this._setSkinName, this._storeItemData.name),
                    e === t)
                        this._currentItemState !== T.Equipped && this.setCurrentState(T.Equipped);
                    else if (this._storeItemData)
                        if (this._storeItemData.purchased && this._currentItemState !== T.Unlocked)
                            this.setCurrentState(T.Unlocked);
                        else if (!this._storeItemData.purchased && this._currentItemState !== T.Locked) {
                            var i = h.coins;
                            this._storeItemData.cost <= i ? this.setCurrentState(T.Locked) : this.setCurrentState(T.CantUnlock)
                        }
                }
                ,
                o.clicked = function() {
                    this._currentItemState === T.Locked ? (_.purchaseItem(this._storeItemData.id, 1),
                    p.setSkin(this._storeItemData.id),
                    u.emitEvents(this._skinPurchased)) : this._currentItemState === T.Unlocked && (p.setSkin(this._storeItemData.id),
                    u.emitEvents(this._skinChanged)),
                    this.updateState()
                }
                ,
                o.setCurrentState = function(t) {
                    this._currentItemState = t,
                    u.emitEvents(this._setStoreState, T[this._currentItemState])
                }
                ,
                e
            }(c)).prototype, "_currentItemState", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return T.None
                }
            }),
            g = e(y.prototype, "_setStoreItemCost", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            U = e(y.prototype, "_setSkinName", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            P = e(y.prototype, "_setStoreState", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            M = e(y.prototype, "_skinPurchased", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            x = e(y.prototype, "_skinChanged", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            C = y)) || C));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LevelUpRewardedAdController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts", "./LevelingUpEnums.ts", "./ENUM-GameEvents.ts", "./PlayerPurseController.ts", "./LevelUpRewardedAdEvents.ts", "./AdsEvents.ts", "./RewardedAdOportunity.ts"], (function(e) {
    "use strict";
    var t, n, o, i, d, r, a, s, l, u, c, p, h, v, A, L, f;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            o = e.initializerDefineProperty,
            i = e.assertThisInitialized,
            d = e.defineProperty
        }
        , function(e) {
            r = e.cclegacy,
            a = e._decorator,
            s = e.Node,
            l = e.Component
        }
        , function(e) {
            u = e.logger
        }
        , function(e) {
            c = e.projectEvent
        }
        , function(e) {
            p = e.LevelingUpEvents
        }
        , function(e) {
            h = e.GameEvents
        }
        , function(e) {
            v = e.PlayerPurseController
        }
        , function(e) {
            A = e.LevelUpRewardedAdEvents
        }
        , function(e) {
            L = e.AdsEvents
        }
        , function(e) {
            f = e.RewardedAdOportunity
        }
        ],
        execute: function() {
            var w, g, _, y, C;
            r._RF.push({}, "8620aiyaVVH5aUIHiS4nbuh", "LevelUpRewardedAdController", void 0);
            var U = a.ccclass
              , R = a.property;
            e("LevelUpRewardedAdController", (w = U("LevelUpRewardedAdController"),
            g = R({
                visible: !0,
                type: s
            }),
            w((C = t((y = function(e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                        r[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    o(i(t), "_buttonNode", C, i(t)),
                    d(i(t), "_watchedAd", !1),
                    d(i(t), "_waitingAdLoad", !1),
                    d(i(t), "_initialCoins", 0),
                    t
                }
                n(t, e);
                var r = t.prototype;
                return r.onEnable = function() {
                    c.on(p[p.LevelingUp_PlayerLevelUpdated], this.onLevelChanged, this),
                    c.on(L[L.AdsEvents_AdLoaded], this.onAdLoaded, this),
                    c.on(h[h.Game_Start], this.gameStarted, this)
                }
                ,
                r.onDisable = function() {
                    c.off(p[p.LevelingUp_PlayerLevelUpdated], this.onLevelChanged, this),
                    c.off(L[L.AdsEvents_AdLoaded], this.onAdLoaded, this),
                    c.off(h[h.Game_Start], this.gameStarted, this)
                }
                ,
                r.gameStarted = function() {
                    this._initialCoins = v.coins,
                    u.log("LevelUpRewardedAdController: Initial Coins " + this._initialCoins)
                }
                ,
                r.onAdLoaded = function() {
                    u.log("LevelUpRewardedAdController: Ad Loaded"),
                    this._waitingAdLoad && (u.log("LevelUpRewardedAdController: Show ad oportunity"),
                    this._waitingAdLoad = !1,
                    this.showAdOportunity())
                }
                ,
                r.onLevelChanged = function() {
                    f.isAdReady ? (u.log("LevelUpRewardedAdController: Show ad oportunity"),
                    this.showAdOportunity()) : (u.log("LevelUpRewardedAdController: Wait for ad oportunity"),
                    this._waitingAdLoad = !0)
                }
                ,
                r.showAdOportunity = function() {
                    this._buttonNode.active = !0
                }
                ,
                r.showAd = function() {
                    this._watchedAd = !1,
                    this._buttonNode.active = !1,
                    c.emit(L[L.AdsEvents_ShowAd], this)
                }
                ,
                r.onAdCompleted = function() {
                    this._watchedAd = !0;
                    var e = v.coins - this._initialCoins;
                    v.addCoins(e),
                    u.log("LevelUpRewardedAdController: Bonus coins " + e),
                    c.emit(A[A.LevelUpRewardedAdEvents_Completed])
                }
                ,
                r.onAdFailed = function(e) {
                    this._watchedAd = !1,
                    this._waitingAdLoad = !0
                }
                ,
                t
            }(l)).prototype, "_buttonNode", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            _ = y)) || _));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/UICameraGetter.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./UICamera.ts"], (function(e) {
    "use strict";
    var t, n, a, r, o, c, s, i, u;
    return {
        setters: [function(e) {
            t = e.inheritsLoose,
            n = e.defineProperty,
            a = e.assertThisInitialized,
            r = e.createClass
        }
        , function(e) {
            o = e.cclegacy,
            c = e._decorator,
            s = e.Canvas,
            i = e.Component
        }
        , function(e) {
            u = e.UICamera
        }
        ],
        execute: function() {
            var l;
            o._RF.push({}, "896c2R0RLpPWIAkTx4TPKFx", "UICameraGetter", void 0);
            var p = c.ccclass
              , m = c.requireComponent
              , v = c.executionOrder;
            e("UICameraGetter", p("UICameraGetter")(l = m(s)(l = v(-1)(l = function(e) {
                function o() {
                    for (var t, r = arguments.length, o = new Array(r), c = 0; c < r; c++)
                        o[c] = arguments[c];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    n(a(t), "_canvas", null),
                    t
                }
                t(o, e);
                var c = o.prototype;
                return c.onLoad = function() {
                    this._canvas = this.node.getComponent(s),
                    this.canvas.cameraComponent = u.camera
                }
                ,
                c.start = function() {}
                ,
                r(o, [{
                    key: "canvas",
                    get: function() {
                        return this._canvas
                    }
                }]),
                o
            }(i)) || l) || l) || l);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/StoreItem.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Item.ts"], (function(e) {
    "use strict";
    var t, n, r, i, c, u, o, a;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            r = e.initializerDefineProperty,
            i = e.assertThisInitialized,
            c = e.createClass
        }
        , function(e) {
            u = e.cclegacy,
            o = e._decorator
        }
        , function(e) {
            a = e.Item
        }
        ],
        execute: function() {
            var s, l, y, p, h, f, b, _, m;
            u._RF.push({}, "8b3baLlzYNB5bmRhY6nabhk", "StoreItem", void 0);
            var O = o.ccclass
              , d = o.property;
            e("StoreItem", (s = O("StoreItem"),
            l = d({
                visible: !0
            }),
            y = d({
                visible: !0
            }),
            p = d({
                visible: !0
            }),
            s((b = t((f = function(e) {
                function t(t, n, c, u) {
                    var o;
                    return o = e.call(this, t, n, u) || this,
                    r(i(o), "_cost", b, i(o)),
                    r(i(o), "_purchased", _, i(o)),
                    r(i(o), "_canBuyOnlyOnce", m, i(o)),
                    o._cost = c || 0,
                    o._purchased = u > 0,
                    o._canBuyOnlyOnce = !0,
                    o
                }
                return n(t, e),
                c(t, [{
                    key: "cost",
                    get: function() {
                        return this._cost
                    }
                }, {
                    key: "purchased",
                    get: function() {
                        return this._purchased
                    }
                }, {
                    key: "canBuyOnlyOnce",
                    get: function() {
                        return this._canBuyOnlyOnce
                    }
                }, {
                    key: "canBuyItem",
                    get: function() {
                        return !this.purchased || !this.canBuyOnlyOnce
                    }
                }]),
                t
            }(a)).prototype, "_cost", [l], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            _ = t(f.prototype, "_purchased", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            m = t(f.prototype, "_canBuyOnlyOnce", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            h = f)) || h));
            u._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PanelEnums.ts", ["cc"], (function(e) {
    "use strict";
    var n;
    return {
        setters: [function(e) {
            n = e.cclegacy
        }
        ],
        execute: function() {
            var t, s;
            e({
                EventPanel: void 0,
                PanelId: void 0
            }),
            n._RF.push({}, "8b3edgXZadK4Lxacf0H30hG", "PanelEnums", void 0),
            function(e) {
                e[e.None = 0] = "None",
                e[e.DebugMenu = 1] = "DebugMenu"
            }(t || (t = e("PanelId", {}))),
            function(e) {
                e.OpenStart = "panel-open-start",
                e.OpenFinish = "panel-open-finish",
                e.CloseStart = "panel-close-start",
                e.CloseFinish = "panel-close-finish"
            }(s || (s = e("EventPanel", {}))),
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS_Slime_Scale.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TS-Settings-Slime.ts"], (function(e) {
    "use strict";
    var t, i, r, n, l, a, o, s, c, u, p, f, S, b;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            r = e.initializerDefineProperty,
            n = e.assertThisInitialized,
            l = e.defineProperty,
            a = e.createClass
        }
        , function(e) {
            o = e.cclegacy,
            s = e._decorator,
            c = e.EventHandler,
            u = e.Node,
            p = e.Prefab,
            f = e.Vec3,
            S = e.Component
        }
        , function(e) {
            b = e.TS_Settings_Slime
        }
        ],
        execute: function() {
            var g, _, m, h, y, v, d, w, z, P, C, T, D;
            o._RF.push({}, "8c640ND3JRCiLZxYhwMh9hf", "TS_Slime_Scale", void 0);
            var k = s.ccclass
              , x = s.property;
            e("TS_Slime_Scale", (g = k("TS_Slime_Scale"),
            _ = x([c]),
            m = x(u),
            h = x({
                visible: !0
            }),
            y = x({
                visible: !0
            }),
            v = x({
                type: p,
                visible: !0
            }),
            g((z = t((w = function(e) {
                function t() {
                    for (var t, i = arguments.length, a = new Array(i), o = 0; o < i; o++)
                        a[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(a)) || this,
                    r(n(t), "onScaleChanged", z, n(t)),
                    r(n(t), "target", P, n(t)),
                    r(n(t), "_a", C, n(t)),
                    r(n(t), "_b", T, n(t)),
                    r(n(t), "_slimeSettingsPrefab", D, n(t)),
                    l(n(t), "_slimeSettings", null),
                    t
                }
                return i(t, e),
                t.prototype.setSlimeSize = function(e) {
                    var t = this._a * e + this._b
                      , i = new f(t,t,t);
                    f.subtract(i, i, this.target.scale),
                    c.emitEvents(this.onScaleChanged, i)
                }
                ,
                a(t, [{
                    key: "formula2",
                    get: function() {
                        return "(a2*x)+b2"
                    }
                }, {
                    key: "slimeSettings",
                    get: function() {
                        if (null === this._slimeSettings) {
                            var e = this._slimeSettingsPrefab.data;
                            this._slimeSettings = e.getComponent(b)
                        }
                        return this._slimeSettings
                    }
                }]),
                t
            }(S)).prototype, "onScaleChanged", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            P = t(w.prototype, "target", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            t(w.prototype, "formula2", [x], Object.getOwnPropertyDescriptor(w.prototype, "formula2"), w.prototype),
            C = t(w.prototype, "_a", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .04
                }
            }),
            T = t(w.prototype, "_b", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 2.92
                }
            }),
            D = t(w.prototype, "_slimeSettingsPrefab", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            d = w)) || d));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SlimesRewardsFactory.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./DailyMissionRewardFactory.ts", "./CurrencyDailyMissionReward.ts"], (function(r) {
    "use strict";
    var e, t, s, i, n;
    return {
        setters: [function(r) {
            e = r.inheritsLoose
        }
        , function(r) {
            t = r.cclegacy,
            s = r._decorator
        }
        , function(r) {
            i = r.DailyMissionRewardFactory
        }
        , function(r) {
            n = r.CurrencyDailyMissionReward
        }
        ],
        execute: function() {
            var a;
            t._RF.push({}, "8cdbfq4449OuqPuEFk7/wfs", "SlimesRewardsFactory", void 0);
            var o = s.ccclass;
            s.property,
            r("SlimesRewardsFactory", o("SlimesRewardsFactory")(a = function(r) {
                function t() {
                    return r.apply(this, arguments) || this
                }
                return e(t, r),
                t.prototype.createReward = function(r, e, t) {
                    if (r === n.ID)
                        return new n(e,t);
                    throw "Invalid parameters"
                }
                ,
                t
            }(i)) || a);
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ThreatType.ts", ["cc"], (function(e) {
    "use strict";
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }
        ],
        execute: function() {
            var r;
            e("ThreatType", void 0),
            t._RF.push({}, "8da21LzvOdDVLVJMkDHLjSf", "ThreatType", void 0),
            function(e) {
                e[e.None = 0] = "None",
                e[e.SafeArea = 1] = "SafeArea",
                e[e.Slime = 2] = "Slime"
            }(r || (r = e("ThreatType", {}))),
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AudioEnums.ts", ["cc"], (function(e) {
    "use strict";
    var o;
    return {
        setters: [function(e) {
            o = e.cclegacy
        }
        ],
        execute: function() {
            var i, t, n;
            e({
                AudioEvent: void 0,
                LoopMode: void 0,
                PickSubitemMode: void 0
            }),
            o._RF.push({}, "8fdc8EKGHVNmrekSIJ8Q6Ho", "AudioEnums", void 0),
            function(e) {
                e[e.Do_Not_Loop = 0] = "Do_Not_Loop",
                e[e.Loop_Subitem = 1] = "Loop_Subitem",
                e[e.Loop_Sequence = 2] = "Loop_Sequence",
                e[e.Play_Sequence_Loop_Last = 3] = "Play_Sequence_Loop_Last"
            }(i || (i = e("LoopMode", {}))),
            function(e) {
                e[e.Disabled = 0] = "Disabled",
                e[e.Random = 1] = "Random",
                e[e.Random_Not_Same_Twice = 2] = "Random_Not_Same_Twice",
                e[e.Sequence = 3] = "Sequence"
            }(t || (t = e("PickSubitemMode", {}))),
            function(e) {
                e[e.AudioManagerInitialized = 0] = "AudioManagerInitialized",
                e[e.SetMuted = 1] = "SetMuted"
            }(n || (n = e("AudioEvent", {}))),
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-DivideStateEvents-Listener.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./TS-Events-Listener.ts", "./DivideState.ts"], (function(e) {
    "use strict";
    var t, i, n, r, s, o, a, c, u, v;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            n = e.initializerDefineProperty,
            r = e.assertThisInitialized
        }
        , function(e) {
            s = e.cclegacy,
            o = e._decorator,
            a = e.Enum
        }
        , function(e) {
            c = e.projectEvent
        }
        , function(e) {
            u = e.TS_Events_Listener
        }
        , function(e) {
            v = e.DivideState
        }
        ],
        execute: function() {
            var l, p, f, d, E;
            s._RF.push({}, "8fe5eZFmPZM4Z7Xz5zo2zyj", "TS-DivideStateEvents-Listener", void 0);
            var h = o.ccclass
              , S = o.property;
            e("TS_DivideState_Listener", (l = h("TS_DivideState_Listener"),
            p = S({
                type: a(v)
            }),
            l((E = t((d = function(e) {
                function t() {
                    for (var t, i = arguments.length, s = new Array(i), o = 0; o < i; o++)
                        s[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(s)) || this,
                    n(r(t), "slimeEvent", E, r(t)),
                    t
                }
                i(t, e);
                var s = t.prototype;
                return s.onEnable = function() {
                    c.on(v[this.slimeEvent], this.onEventRaised, this)
                }
                ,
                s.onDisable = function() {
                    c.off(v[this.slimeEvent], this.onEventRaised, this)
                }
                ,
                t
            }(u)).prototype, "slimeEvent", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return v.DivideNotReady
                }
            }),
            f = d)) || f));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/UIClickSFX.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./AudioManager.ts"], (function(e) {
    "use strict";
    var i, t, n, r, o, a, l, c, s, u, y;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            n = e.initializerDefineProperty,
            r = e.assertThisInitialized,
            o = e.createClass
        }
        , function(e) {
            a = e.cclegacy,
            l = e._decorator,
            c = e.Button,
            s = e.Prefab,
            u = e.Component
        }
        , function(e) {
            y = e.AudioManager
        }
        ],
        execute: function() {
            var p, d, f, h, k, v, _, g;
            a._RF.push({}, "9173aMkALVIoLKQ9YSJ5EVS", "UIClickSFX", void 0);
            var b = l.ccclass
              , C = l.property
              , m = l.requireComponent;
            e("UIClickSFX", (p = b("UIClickSFX"),
            d = m(c),
            f = C({
                visible: !0
            }),
            h = C({
                type: s,
                visible: !0,
                displayName: "OldKey (deprecated)",
                formerlySerializedAs: "key"
            }),
            p(k = d((_ = i((v = function(e) {
                function i() {
                    for (var i, t = arguments.length, o = new Array(t), a = 0; a < t; a++)
                        o[a] = arguments[a];
                    return i = e.call.apply(e, [this].concat(o)) || this,
                    n(r(i), "_audioKey", _, r(i)),
                    n(r(i), "_key", g, r(i)),
                    i
                }
                t(i, e);
                var a = i.prototype;
                return a.onLoad = function() {
                    this.node.on(c.EventType.CLICK, this.onclick, this)
                }
                ,
                a.onclick = function() {
                    var e;
                    this.key.length > 0 && (null === (e = y.instance) || void 0 === e || e.playByKey(this.key))
                }
                ,
                o(i, [{
                    key: "key",
                    get: function() {
                        return 0 == this._audioKey.length ? this._key.data.node.name : this._audioKey
                    }
                }]),
                i
            }(u)).prototype, "_audioKey", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            g = i(v.prototype, "_key", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            k = v)) || k) || k));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DashSlimesEatenDailyMissionData.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./SlimeEvents.ts", "./DailyMissionState.ts", "./QuantityDailyMissionData.ts", "./TS-Slime-Skill-SpeedBoost.ts"], (function(t) {
    "use strict";
    var e, i, n, s, a, l, r, o, u, c, h, y;
    return {
        setters: [function(t) {
            e = t.inheritsLoose,
            i = t.defineProperty,
            n = t.assertThisInitialized,
            s = t.createClass
        }
        , function(t) {
            a = t.cclegacy,
            l = t._decorator
        }
        , function(t) {
            r = t.projectEvent
        }
        , function(t) {
            o = t.SlimeEvents
        }
        , function(t) {
            u = t.DailyMissionState
        }
        , function(t) {
            c = t.QuantityDailyMissionDataSave,
            h = t.QuantityDailyMissionData
        }
        , function(t) {
            y = t.TS_Slime_Skill_SpeedBoost
        }
        ],
        execute: function() {
            var D, S, f;
            a._RF.push({}, "91770yYXIRIvrwsBYlToA/L", "DashSlimesEatenDailyMissionData", void 0);
            var p = l.ccclass
              , _ = (l.property,
            t("DashSlimesEatenDailyMissionDataSave", function(t) {
                function i() {
                    return t.apply(this, arguments) || this
                }
                return e(i, t),
                i
            }(c)));
            t("DashSlimesEatenDailyMissionData", p("DashSlimesEatenDailyMissionData")((f = S = function(t) {
                function a() {
                    for (var e, s = arguments.length, a = new Array(s), l = 0; l < s; l++)
                        a[l] = arguments[l];
                    return e = t.call.apply(t, [this].concat(a)) || this,
                    i(n(e), "_playerDashSkill", null),
                    i(n(e), "_listening", !1),
                    e
                }
                e(a, t);
                var l = a.prototype;
                return l.createCloneInstance = function() {
                    return new a(this)
                }
                ,
                l.createSaveData = function() {
                    return new _(this)
                }
                ,
                l.enableListeners = function() {
                    this.currentState === u.InProgress && (this._listening = !0,
                    r.on(o[o.Slime_PlayerSlimeEaten], this.onPlayerEaten, this))
                }
                ,
                l.disableListeners = function() {
                    this._listening && r.off(o[o.Slime_PlayerSlimeEaten], this.onPlayerEaten, this)
                }
                ,
                l.onPlayerEaten = function(t, e) {
                    this._playerDashSkill || (this._playerDashSkill = t.getComponentInChildren(y)),
                    this._playerDashSkill.isBoostActive && this.increase(1)
                }
                ,
                s(a, [{
                    key: "ID",
                    get: function() {
                        return a._id
                    }
                }, {
                    key: "displayName",
                    get: function() {
                        return this._displayName.getName(["value"], [this.targetValue], 1 === this.targetValue)
                    }
                }], [{
                    key: "ID",
                    get: function() {
                        return a._id
                    }
                }]),
                a
            }(h),
            i(S, "_id", "dash-eat-slimes"),
            D = f)) || D);
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SlimesBundleLoader.ts", ["cc", "./BundleLoader.ts", "./BundleEvents.ts"], (function(e) {
    "use strict";
    var n, s, t;
    return {
        setters: [function(e) {
            n = e.cclegacy
        }
        , function(e) {
            s = e.BundleLoader
        }
        , function(e) {
            t = e.BundleEvents
        }
        ],
        execute: function() {
            n._RF.push({}, "91df6yUNmpAQ4B6SPGgaI2Y", "SlimesBundleLoader", void 0);
            e("slimesBundleLoader", new s("Slimes",t[t.Bundle_SlimesLoaded]));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TweenNodeRotation.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TweenBase.ts"], (function(e) {
    "use strict";
    var t, i, a, n, r, s, o, l, u;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            a = e.initializerDefineProperty,
            n = e.assertThisInitialized
        }
        , function(e) {
            r = e.cclegacy,
            s = e._decorator,
            o = e.Vec3,
            l = e.tween
        }
        , function(e) {
            u = e.TweenBase
        }
        ],
        execute: function() {
            var h, c, p, d;
            r._RF.push({}, "925cc7HsYRKfKoUI6HIv/Em", "TweenNodeRotation", void 0);
            var v = s.ccclass
              , y = s.property
              , g = s.menu;
            e("TweenNodeRotation", v("TweenNodeRotation")(h = g("Tween/Rotation")((p = t((c = function(e) {
                function t() {
                    for (var t, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
                        r[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    a(n(t), "valueStart", p, n(t)),
                    a(n(t), "valueEnd", d, n(t)),
                    t
                }
                i(t, e);
                var r = t.prototype;
                return r.onLoad = function() {
                    e.prototype.onLoad.call(this),
                    this.useCustomStartValue ? this.target.eulerAngles.set(this.valueStart) : this.valueStart = this.target.eulerAngles,
                    this.useRelativeValue ? (this.tweenCache = l(this.target).delay(this.delay).by(this.duration, {
                        eulerAngles: this.valueEnd
                    }, this.options).repeat(1),
                    this.tweenReverseCache = l(this.target).delay(this.delay).by(this.duration, {
                        eulerAngles: this.valueStart
                    }, this.options).repeat(1)) : (this.tweenCache = l(this.target).delay(this.delay).to(this.duration, {
                        eulerAngles: this.valueEnd
                    }, this.options).repeat(1),
                    this.tweenReverseCache = l(this.target).delay(this.delay).to(this.duration, {
                        eulerAngles: this.valueStart
                    }, this.options).repeat(1))
                }
                ,
                r.reset = function() {
                    this.target.eulerAngles.set(this.valueStart)
                }
                ,
                t
            }(u)).prototype, "valueStart", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new o
                }
            }),
            d = t(c.prototype, "valueEnd", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new o(1,1,1)
                }
            }),
            h = c)) || h) || h);
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-SlimeAbsorb.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./AudioManager.ts", "./TS_Slime.ts", "./TS-Slime-BaseAbsorb.ts"], (function(e) {
    "use strict";
    var i, t, s, n, r, o, l, u, a, c, b;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            s = e.initializerDefineProperty,
            n = e.assertThisInitialized,
            r = e.defineProperty
        }
        , function(e) {
            o = e.cclegacy,
            l = e._decorator,
            u = e.Prefab
        }
        , function(e) {
            a = e.AudioManager
        }
        , function(e) {
            c = e.TS_Slime
        }
        , function(e) {
            b = e.TS_Slime_BaseAbsorb
        }
        ],
        execute: function() {
            var m, d, p, _, S;
            o._RF.push({}, "93df20OzjVL4q96nCc5n2C2", "TS-Slime-SlimeAbsorb", void 0);
            var f = l.ccclass
              , h = l.property;
            e("TS_Slime_SlimeAbsorb", (m = f("TS_Slime_SlimeAbsorb"),
            d = h({
                type: u,
                visible: !0
            }),
            m((S = i((_ = function(e) {
                function i() {
                    for (var i, t = arguments.length, o = new Array(t), l = 0; l < t; l++)
                        o[l] = arguments[l];
                    return i = e.call.apply(e, [this].concat(o)) || this,
                    s(n(i), "_onAbsorbedAudio", S, n(i)),
                    r(n(i), "_slimes", []),
                    i
                }
                t(i, e);
                var o = i.prototype;
                return o.trackCollider = function(e) {
                    var i = this.getSlime(e);
                    null !== i && this._slimes.push(i)
                }
                ,
                o.untrackCollider = function(e) {
                    var i = this.getSlime(e)
                      , t = this._slimes.findIndex((function(e) {
                        return e == i
                    }
                    ));
                    -1 !== t && this._slimes.splice(t, 1)
                }
                ,
                o.getSlime = function(e) {
                    var i = e.node.getComponent(c);
                    return null !== i ? i : null
                }
                ,
                o.update = function() {
                    for (var e = this._slimes.length - 1; e >= 0; e--)
                        this.slime.canBeAbsorbed(this._slimes[e]) && (this.absorbed(this._slimes[e]),
                        this._slimes.splice(e, 1),
                        this._onAbsorbedAudio && a.instance.playByKey(this._onAbsorbedAudio))
                }
                ,
                i
            }(b)).prototype, "_onAbsorbedAudio", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            p = _)) || p));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ProjectEvent.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var e, n, r;
    return {
        setters: [function(t) {
            e = t.inheritsLoose
        }
        , function(t) {
            n = t.cclegacy,
            r = t.EventTarget
        }
        ],
        execute: function() {
            n._RF.push({}, "973baCDLAVIVo6OxiqmUpR2", "ProjectEvent", void 0);
            t("projectEvent", new (function(t) {
                function n() {
                    return t.call(this) || this
                }
                return e(n, t),
                n
            }(r)));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/CurrencyDailyMissionReward.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./PlayerPurseController.ts", "./DailyMissionReward.ts"], (function(r) {
    "use strict";
    var e, i, n, t, s, o, c;
    return {
        setters: [function(r) {
            e = r.defineProperty,
            i = r.inheritsLoose,
            n = r.createClass
        }
        , function(r) {
            t = r.cclegacy,
            s = r._decorator
        }
        , function(r) {
            o = r.PlayerPurseController
        }
        , function(r) {
            c = r.DailyMissionReward
        }
        ],
        execute: function() {
            var u, a, l;
            t._RF.push({}, "994544mYLxPCac5W1+fjs7e", "CurrencyDailyMissionReward", void 0);
            var y = s.ccclass;
            s.property,
            r("CurrencyDailyMissionReward", y("CurrencyDailyMissionReward")((l = a = function(r) {
                function e() {
                    return r.apply(this, arguments) || this
                }
                return i(e, r),
                e.prototype.give = function(r) {
                    void 0 === r && (r = 1),
                    o.addCoins(this.quantity * r)
                }
                ,
                n(e, [{
                    key: "ID",
                    get: function() {
                        return e._id
                    }
                }], [{
                    key: "ID",
                    get: function() {
                        return e._id
                    }
                }]),
                e
            }(c),
            e(a, "_id", "currency-reward"),
            u = l)) || u);
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/NodeHelper.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, o, n, i;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }
        , function(e) {
            o = e.cclegacy,
            n = e._decorator,
            i = e.Component
        }
        ],
        execute: function() {
            var r;
            o._RF.push({}, "99672sUg5NFw4x7bEPAiyHE", "NodeHelper", void 0);
            var c = n.ccclass;
            n.property,
            e("NodeHelper", c("NodeHelper")(r = function(e) {
                function o() {
                    return e.apply(this, arguments) || this
                }
                t(o, e);
                var n = o.prototype;
                return n.activate = function() {
                    this.setActiveState(!0)
                }
                ,
                n.deactivate = function() {
                    this.setActiveState(!1)
                }
                ,
                n.setActiveState = function(e) {
                    "boolean" == typeof e && (this.node.active = e)
                }
                ,
                n.destroyNode = function() {
                    this.node.destroy()
                }
                ,
                o
            }(i)) || r);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS_CharacterMovement.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./TS_Slime.ts"], (function(e) {
    "use strict";
    var i, t, n, o, l, r, s, a, c, u, h, p, d, _, m, v;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            n = e.initializerDefineProperty,
            o = e.assertThisInitialized,
            l = e.defineProperty,
            r = e.createClass
        }
        , function(e) {
            s = e.cclegacy,
            a = e._decorator,
            c = e.Collider,
            u = e.Vec2,
            h = e.RigidBody,
            p = e.Vec3,
            d = e.Tween,
            _ = e.Component
        }
        , function(e) {
            m = e.logger
        }
        , function(e) {
            v = e.TS_Slime
        }
        ],
        execute: function() {
            var f, g, y, S, b, x, M, w, T, C, z, B, E, k, I;
            s._RF.push({}, "998c54116RP+60xSJ3vqUX7", "TS_CharacterMovement", void 0);
            var P = a.ccclass
              , D = a.property;
            e("CharacterMovement", (f = P("CharacterMovement"),
            g = D({
                visible: !0
            }),
            y = D({
                visible: !0
            }),
            S = D({
                visible: !0,
                type: c
            }),
            b = D({
                visible: !0,
                type: v
            }),
            f((w = i((M = function(e) {
                function i() {
                    for (var i, t = arguments.length, r = new Array(t), s = 0; s < t; s++)
                        r[s] = arguments[s];
                    return i = e.call.apply(e, [this].concat(r)) || this,
                    n(o(i), "_canMove", w, o(i)),
                    n(o(i), "speed", T, o(i)),
                    n(o(i), "maxSpeed", C, o(i)),
                    n(o(i), "direction", z, o(i)),
                    n(o(i), "body", B, o(i)),
                    n(o(i), "_debug", E, o(i)),
                    l(o(i), "_maxSpeedMultiplier", {
                        value: 1
                    }),
                    l(o(i), "_velocity", new u),
                    n(o(i), "_collisionArea", k, o(i)),
                    l(o(i), "_collisionSlimes", []),
                    l(o(i), "_isBeingBlocked", !1),
                    n(o(i), "_slime", I, o(i)),
                    i
                }
                t(i, e);
                var s = i.prototype;
                return s.onEnable = function() {
                    this._collisionArea.on("onTriggerEnter", this.onTriggerEnter, this),
                    this._collisionArea.on("onTriggerExit", this.onTriggerExit, this)
                }
                ,
                s.onDisable = function() {
                    this._collisionArea.off("onTriggerEnter", this.onTriggerEnter, this),
                    this._collisionArea.off("onTriggerExit", this.onTriggerExit, this)
                }
                ,
                s.onTriggerEnter = function(e) {
                    var i = this.getSlimeInParent(e.otherCollider);
                    null !== i && i.playerID === this._slime.playerID && i !== this._slime && -1 === this._collisionSlimes.findIndex((function(e) {
                        return e === i
                    }
                    )) && this._collisionSlimes.push(i)
                }
                ,
                s.getSlimeInParent = function(e) {
                    for (var i = e.node; null !== i; ) {
                        var t = i.getComponent(v);
                        if (null !== t)
                            return t;
                        i = i.parent
                    }
                    return null
                }
                ,
                s.onTriggerExit = function(e) {
                    var i = this.getSlimeInParent(e.otherCollider);
                    if (null !== i) {
                        var t = this._collisionSlimes.findIndex((function(e) {
                            return e === i
                        }
                        ));
                        -1 !== t && this._collisionSlimes.splice(t, 1)
                    }
                }
                ,
                s.update = function(e) {
                    this.updateCollisionSlimes(e),
                    this.updateVelocity(e),
                    this.move(e)
                }
                ,
                s.updateCollisionSlimes = function(e) {
                    this._isBeingBlocked = !1;
                    for (var i = this._collisionSlimes.length - 1; i >= 0 && !this._isBeingBlocked; i--)
                        if (null === this._collisionSlimes[i].node)
                            this._collisionSlimes.splice(i, 1);
                        else {
                            var t = this._slime.node.position.clone().add(new p(this._velocity.x,0,this._velocity.y).multiplyScalar(e))
                              , n = p.distance(this._slime.node.position, this._collisionSlimes[i].Position);
                            p.distance(t, this._collisionSlimes[i].Position) < n && (this._isBeingBlocked = !0)
                        }
                }
                ,
                s.updateVelocity = function(e) {
                    this._canMove && (this.direction.length() > 0 && this._velocity.add(this.direction.normalize().multiplyScalar(e * this.speed)),
                    this._velocity.length() > this.maxSpeed * this._maxSpeedMultiplier.value && (this._velocity = this._velocity.normalize().multiplyScalar(this.maxSpeed * this._maxSpeedMultiplier.value)),
                    this._debug && m.log("Character Movement:\nVelocity:" + this._velocity))
                }
                ,
                s.activeMovement = function() {
                    this._canMove = !0
                }
                ,
                s.deactivateMovement = function() {
                    this._canMove = !1
                }
                ,
                s.setMaxSpeed = function(e) {
                    this.maxSpeed = e
                }
                ,
                s.setDirection = function(e) {
                    this.direction = e
                }
                ,
                s.doubleMaxSpeed = function(e) {
                    var i = this;
                    if (e > 2)
                        throw "Invalid Double Max Speed duration: Should be less than 2 sec";
                    this._maxSpeedMultiplier.value *= 6,
                    this.schedule((function() {
                        new d(i._maxSpeedMultiplier).to(.3, {
                            value: 1
                        }).start()
                    }
                    ), 0, 0, e)
                }
                ,
                s.move = function(e) {
                    this._canMove && !this._isBeingBlocked && this._velocity.length() > 0 && this._slime.node.translate(new p(this._velocity.x,0,this._velocity.y).multiplyScalar(e))
                }
                ,
                s.setCloneMovement = function(e) {
                    this._velocity = e.velocity
                }
                ,
                r(i, [{
                    key: "MaxSpeed",
                    get: function() {
                        return this.maxSpeed
                    }
                }, {
                    key: "velocity",
                    get: function() {
                        return this._velocity
                    }
                }, {
                    key: "canMove",
                    get: function() {
                        return this._canMove
                    }
                }]),
                i
            }(_)).prototype, "_canMove", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            T = i(M.prototype, "speed", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            C = i(M.prototype, "maxSpeed", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            z = i(M.prototype, "direction", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u(0,0)
                }
            }),
            B = i(M.prototype, "body", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new h
                }
            }),
            E = i(M.prototype, "_debug", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            k = i(M.prototype, "_collisionArea", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            I = i(M.prototype, "_slime", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            x = M)) || x));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Tappable.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./InputEnums.ts"], (function(t) {
    "use strict";
    var e, n, i, r, o, a, c, s, u, p, l;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            n = t.createClass,
            i = t.defineProperty,
            r = t.inheritsLoose,
            o = t.initializerDefineProperty,
            a = t.assertThisInitialized
        }
        , function(t) {
            c = t.cclegacy,
            s = t._decorator,
            u = t.EventHandler,
            p = t.Component
        }
        , function(t) {
            l = t.InputEvent
        }
        ],
        execute: function() {
            var f, h, y, _, v;
            c._RF.push({}, "9af9dOKerdLvJjnt/yI4qE+", "Tappable", void 0);
            var d = s.ccclass
              , m = s.property
              , T = (t("Tappable", (f = d("Tappable"),
            h = m({
                type: [u],
                visible: !0,
                formerlySerializedAs: "onTap"
            }),
            f((v = e((_ = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++)
                        i[r] = arguments[r];
                    return e = t.call.apply(t, [this].concat(i)) || this,
                    o(a(e), "_onTap", v, a(e)),
                    e
                }
                return r(e, t),
                e.prototype.tap = function(t, e) {
                    var n = new T(t,e);
                    this.node.emit(l[l.Input_Tap], n),
                    u.emitEvents(this._onTap, n)
                }
                ,
                e
            }(p)).prototype, "_onTap", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            y = _)) || y)),
            t("TapData", function() {
                function t(t, e) {
                    i(this, "_touchPosition", null),
                    i(this, "_camera", null),
                    this._touchPosition = t,
                    this._camera = e
                }
                return n(t, [{
                    key: "touchScreenPosition",
                    get: function() {
                        return this._touchPosition
                    }
                }, {
                    key: "camera",
                    get: function() {
                        return this._camera
                    }
                }]),
                t
            }()));
            c._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PlayerPurseController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./SaveGame.ts", "./PlayerPurseEnums.ts"], (function(e) {
    "use strict";
    var n, t, r, s, o;
    return {
        setters: [function(e) {
            n = e.createClass
        }
        , function(e) {
            t = e.cclegacy
        }
        , function(e) {
            r = e.projectEvent
        }
        , function(e) {
            s = e.saveGame
        }
        , function(e) {
            o = e.PlayerPurseEvents
        }
        ],
        execute: function() {
            t._RF.push({}, "9de18u1d6tPlLIjKiaBViP6", "PlayerPurseController", void 0);
            e("PlayerPurseController", function() {
                function e() {}
                return e.addCoins = function(e) {
                    this.coins += e
                }
                ,
                e.removeCoins = function(e) {
                    this.addCoins(-e)
                }
                ,
                e.canAfford = function(e) {
                    return this.coins >= e
                }
                ,
                n(e, null, [{
                    key: "coins",
                    get: function() {
                        return s.getCoins()
                    },
                    set: function(e) {
                        s.setCoins(e),
                        r.emit(o[o.PlayerPurse_CoinsUpdated], e)
                    }
                }]),
                e
            }());
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AudioItem.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./AudioEnums.ts"], (function(e) {
    "use strict";
    var t, i, n, o, s, r, a, u, l, c, d, h;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.createClass,
            n = e.initializerDefineProperty,
            o = e.defineProperty
        }
        , function(e) {
            s = e.cclegacy,
            r = e._decorator,
            a = e.Prefab,
            u = e.Enum,
            l = e.AudioClip,
            c = e.randomRangeInt
        }
        , function(e) {
            d = e.LoopMode,
            h = e.PickSubitemMode
        }
        ],
        execute: function() {
            var p, f, b, y, _, m, g, v, k, x, I, S, M, w, P;
            s._RF.push({}, "9e1e3rX0ktE9pKy3qyrVu/Z", "AudioItem", void 0);
            var R = r.ccclass
              , z = r.property;
            e("AudioItem", (p = R("AudioItem"),
            f = z({
                visible: !0
            }),
            b = z({
                type: a,
                visible: !0,
                displayName: "OldKey (deprecated)"
            }),
            y = z({
                visible: !0,
                slide: !0,
                range: [0, 1]
            }),
            _ = z({
                type: u(d),
                visible: !0
            }),
            m = z({
                type: u(h),
                visible: !0
            }),
            g = z({
                type: [l],
                visible: !0
            }),
            p((x = t((k = function() {
                function e() {
                    n(this, "_audioKey", x, this),
                    n(this, "_key", I, this),
                    n(this, "_volume", S, this),
                    n(this, "_loopMode", M, this),
                    n(this, "_pickSubitemMode", w, this),
                    n(this, "_sfxs", P, this),
                    o(this, "notPlayedIndexes", [])
                }
                var t = e.prototype;
                return t.getAudioClipsToPlay = function() {
                    var e = [];
                    if (0 == this._sfxs.length)
                        return e;
                    switch (this._pickSubitemMode) {
                    case h.Disabled:
                        e.push(this.getInSequence());
                        break;
                    case h.Random:
                        e.push(this._sfxs[c(0, this._sfxs.length)]);
                        break;
                    case h.Random_Not_Same_Twice:
                        e.push(this.getRandomNotSameTwice());
                        break;
                    case h.Sequence:
                        e = this._sfxs.slice()
                    }
                    return e
                }
                ,
                t.getInSequence = function() {
                    var e = this.availableIndexes[0];
                    return this.availableIndexes.splice(0, 1),
                    this._sfxs[e]
                }
                ,
                t.getRandomNotSameTwice = function() {
                    var e = c(0, this.availableIndexes.length)
                      , t = this.availableIndexes[e];
                    return this.availableIndexes.splice(e, 1),
                    this._sfxs[t]
                }
                ,
                i(e, [{
                    key: "key",
                    get: function() {
                        return 0 == this._audioKey.length ? this._key.data.name : this._audioKey
                    }
                }, {
                    key: "volume",
                    get: function() {
                        return this._volume
                    }
                }, {
                    key: "loopMode",
                    get: function() {
                        return this._loopMode
                    }
                }, {
                    key: "pickSubItemMode",
                    get: function() {
                        return this._pickSubitemMode
                    }
                }, {
                    key: "length",
                    get: function() {
                        return this._sfxs.length
                    }
                }, {
                    key: "availableIndexes",
                    get: function() {
                        if (0 == this.notPlayedIndexes.length)
                            for (var e = 0; e < this._sfxs.length; e++)
                                this.notPlayedIndexes.push(e);
                        return this.notPlayedIndexes
                    }
                }]),
                e
            }()).prototype, "_audioKey", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            I = t(k.prototype, "_key", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            S = t(k.prototype, "_volume", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            M = t(k.prototype, "_loopMode", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return d.Do_Not_Loop
                }
            }),
            w = t(k.prototype, "_pickSubitemMode", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return h.Random_Not_Same_Twice
                }
            }),
            P = t(k.prototype, "_sfxs", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            v = k)) || v));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PunchRotationTween.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./PunchTweenBase.ts"], (function(t) {
    "use strict";
    var e, n, i, r, a, o, s;
    return {
        setters: [function(t) {
            e = t.inheritsLoose,
            n = t.createClass
        }
        , function(t) {
            i = t.cclegacy,
            r = t._decorator,
            a = t.Quat,
            o = t.tween
        }
        , function(t) {
            s = t.PunchTweenBase
        }
        ],
        execute: function() {
            var u;
            i._RF.push({}, "9e8723yU89EV46tgMTi8wWs", "PunchRotationTween", void 0);
            var c = r.ccclass;
            t("PunchRotationTween", c("PunchRotationTween")(u = function(t) {
                function i() {
                    return t.apply(this, arguments) || this
                }
                return e(i, t),
                i.prototype.playSegment = function(t) {
                    var e = this.delay;
                    t > 0 && (e = 0);
                    var n = this.getSegmentValue(t)
                      , i = new a;
                    a.fromEuler(i, n.x, n.y, n.z);
                    var r = new a;
                    a.multiply(r, this.startingValue, i),
                    this.tweenCache = o(this.getTarget()).delay(e).to(this.getSegmentDuration(t), {
                        rotation: r
                    }, this.getTweenOptions(t)).repeat(1),
                    this.tweenCache.start()
                }
                ,
                n(i, [{
                    key: "currentValue",
                    get: function() {
                        return new a(this.getTarget().rotation)
                    },
                    set: function(t) {
                        this.getTarget().rotation = t
                    }
                }]),
                i
            }(s)) || u);
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Ts-Color-Setter.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var e, r, o, i, n, l, a, s, c;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            r = t.inheritsLoose,
            o = t.initializerDefineProperty,
            i = t.assertThisInitialized
        }
        , function(t) {
            n = t.cclegacy,
            l = t._decorator,
            a = t.Sprite,
            s = t.Color,
            c = t.Component
        }
        ],
        execute: function() {
            var u, p, _, f, g, C, y;
            n._RF.push({}, "9ed1aO88vFKYaSxKYGFNCSE", "Ts-Color-Setter", void 0);
            var S = l.ccclass
              , h = l.property;
            l.requireComponent,
            t("Ts_Color_Setter", (u = S("Ts_Color_Setter"),
            p = h({
                visible: !0
            }),
            _ = h({
                type: a,
                visible: !0
            }),
            u((C = e((g = function(t) {
                function e() {
                    for (var e, r = arguments.length, n = new Array(r), l = 0; l < r; l++)
                        n[l] = arguments[l];
                    return e = t.call.apply(t, [this].concat(n)) || this,
                    o(i(e), "_targetColor", C, i(e)),
                    o(i(e), "_targetSprite", y, i(e)),
                    e
                }
                r(e, t);
                var n = e.prototype;
                return n.setColor = function() {
                    this._targetSprite.color = this._targetColor
                }
                ,
                n.setColorByHEX = function(t) {
                    this._targetSprite.color = new s(t)
                }
                ,
                e
            }(c)).prototype, "_targetColor", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            y = e(g.prototype, "_targetSprite", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            f = g)) || f));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-SkillConfig-Divide.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(i) {
    "use strict";
    var e, t, n, r, u, o, l, a;
    return {
        setters: [function(i) {
            e = i.applyDecoratedDescriptor,
            t = i.inheritsLoose,
            n = i.initializerDefineProperty,
            r = i.assertThisInitialized,
            u = i.createClass
        }
        , function(i) {
            o = i.cclegacy,
            l = i._decorator,
            a = i.Component
        }
        ],
        execute: function() {
            var c, s, d, f, _, D, b, v, p, S, g, C, y, z, m, h, k;
            o._RF.push({}, "a10b0hiYIZK75MgEQ79+63t", "TS-Slime-SkillConfig-Divide", void 0);
            var w = l.ccclass
              , T = l.property;
            i("TS_Slime_SkillConfig_Divide", (c = w("TS_Slime_SkillConfig_Divide"),
            s = T({
                visible: !0
            }),
            d = T({
                visible: !0
            }),
            f = T({
                visible: !0
            }),
            _ = T({
                visible: !0
            }),
            D = T({
                visible: !0
            }),
            b = T({
                visible: !0
            }),
            v = T({
                visible: !0
            }),
            c((g = e((S = function(i) {
                function e() {
                    for (var e, t = arguments.length, u = new Array(t), o = 0; o < t; o++)
                        u[o] = arguments[o];
                    return e = i.call.apply(i, [this].concat(u)) || this,
                    n(r(e), "_minSize", g, r(e)),
                    n(r(e), "_divideDuration", C, r(e)),
                    n(r(e), "_uniteDuration", y, r(e)),
                    n(r(e), "_divideCD", z, r(e)),
                    n(r(e), "_divideSizeCD", m, r(e)),
                    n(r(e), "_uniteCD", h, r(e)),
                    n(r(e), "_uniteSizeCD", k, r(e)),
                    e
                }
                return t(e, i),
                u(e, [{
                    key: "minSize",
                    get: function() {
                        return this._minSize
                    }
                }, {
                    key: "divideDuration",
                    get: function() {
                        return this._divideDuration
                    }
                }, {
                    key: "uniteDuration",
                    get: function() {
                        return this._uniteDuration
                    }
                }, {
                    key: "divideCD",
                    get: function() {
                        return this._divideCD
                    }
                }, {
                    key: "divideSizeCD",
                    get: function() {
                        return this._divideSizeCD
                    }
                }, {
                    key: "uniteCD",
                    get: function() {
                        return this._uniteCD
                    }
                }, {
                    key: "uniteSizeCD",
                    get: function() {
                        return this._uniteSizeCD
                    }
                }]),
                e
            }(a)).prototype, "_minSize", [s], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 8
                }
            }),
            C = e(S.prototype, "_divideDuration", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            y = e(S.prototype, "_uniteDuration", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 4
                }
            }),
            z = e(S.prototype, "_divideCD", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 3
                }
            }),
            m = e(S.prototype, "_divideSizeCD", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .02
                }
            }),
            h = e(S.prototype, "_uniteCD", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 2
                }
            }),
            k = e(S.prototype, "_uniteSizeCD", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .02
                }
            }),
            p = S)) || p));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AdButtonShower.ts", ["cc"], (function() {
    "use strict";
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }
        ],
        execute: function() {
            t._RF.push({}, "a177emXSo9ASbBZom6fcdr7", "AdButtonShower", void 0),
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AnimationHelperVariable2.ts", ["cc"], (function() {
    "use strict";
    var e;
    return {
        setters: [function(t) {
            e = t.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "a2b85OOYvNCr4ogRYF/6O3H", "AnimationHelperVariable", void 0),
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS_Slime.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts", "./ENUM-GameEvents.ts", "./TS-BattleRoyale-SafeArea.ts", "./SlimeEvents.ts", "./TS-Score-Tracker.ts", "./TS-SlimeDamageBlink.ts", "./TS-Settings-Slime.ts"], (function(e) {
    "use strict";
    var i, t, a, n, r, s, l, o, c, u, h, m, f, _, d, S, p, g, y, z, b, A, v, D, x, M, I;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            a = e.initializerDefineProperty,
            n = e.assertThisInitialized,
            r = e.defineProperty,
            s = e.createForOfIteratorHelperLoose,
            l = e.createClass
        }
        , function(e) {
            o = e.cclegacy,
            c = e._decorator,
            u = e.Node,
            h = e.CapsuleCollider,
            m = e.ParticleSystem,
            f = e.EventHandler,
            _ = e.animation,
            d = e.Prefab,
            S = e.game,
            p = e.math,
            g = e.Vec2,
            y = e.Component
        }
        , function(e) {
            z = e.logger
        }
        , function(e) {
            b = e.projectEvent
        }
        , function(e) {
            A = e.GameEvents
        }
        , function(e) {
            v = e.SafeAreaEvents
        }
        , function(e) {
            D = e.SlimeEvents
        }
        , function(e) {
            x = e.ScoreEvents
        }
        , function(e) {
            M = e.TS_SlimeDamageBlink
        }
        , function(e) {
            I = e.TS_Settings_Slime
        }
        ],
        execute: function() {
            var P, T, k, E, w, O, G, B, N, R, C, F, j, L, V, H, X, q, U, J, K, Q, W, Y, Z, $, ee, ie, te;
            o._RF.push({}, "a860dNhqbtMjpTPjtMdSRec", "TS_Slime", void 0);
            var ae = c.ccclass
              , ne = c.property
              , re = c.executionOrder;
            e("TS_Slime", (P = ae("TS_Slime"),
            T = re(-1),
            k = ne({
                type: u,
                visible: !0
            }),
            E = ne({
                type: h,
                visible: !0
            }),
            w = ne({
                type: m,
                visible: !0
            }),
            O = ne({
                type: M,
                visible: !0
            }),
            G = ne({
                visible: !0
            }),
            B = ne([f]),
            N = ne([f]),
            R = ne([f]),
            C = ne([f]),
            F = ne(_.AnimationController),
            j = ne({
                type: d,
                visible: !0
            }),
            P(L = T((H = i((V = function(e) {
                function i() {
                    for (var i, t = arguments.length, s = new Array(t), l = 0; l < t; l++)
                        s[l] = arguments[l];
                    return i = e.call.apply(e, [this].concat(s)) || this,
                    a(n(i), "_renderNode", H, n(i)),
                    a(n(i), "_collider", X, n(i)),
                    a(n(i), "_outOfSafeAreaParticles", q, n(i)),
                    a(n(i), "_damageBlink", U, n(i)),
                    a(n(i), "_debug", J, n(i)),
                    a(n(i), "size", K, n(i)),
                    a(n(i), "_maxSize", Q, n(i)),
                    a(n(i), "_active", W, n(i)),
                    a(n(i), "onSizeChanged", Y, n(i)),
                    a(n(i), "onSizeIncreased", Z, n(i)),
                    a(n(i), "onSizeDecreased", $, n(i)),
                    r(n(i), "_playerID", ""),
                    a(n(i), "onAbsorbSlime", ee, n(i)),
                    r(n(i), "absorbedSize", 0),
                    a(n(i), "anim", ie, n(i)),
                    r(n(i), "_creationTime", 0),
                    a(n(i), "_slimeSettingsPrefab", te, n(i)),
                    r(n(i), "_slimeSettings", null),
                    r(n(i), "_lastSizeDecreaseTime", 0),
                    r(n(i), "_decayAccumulator", 0),
                    r(n(i), "_decayMultipliers", []),
                    r(n(i), "_decayMultipliersRatio", 0),
                    r(n(i), "_decayFixedPenalty", 0),
                    r(n(i), "_safeArea", null),
                    r(n(i), "_safeAreaDamageAccumulator", 0),
                    r(n(i), "_original", null),
                    r(n(i), "_clone", null),
                    i
                }
                t(i, e);
                var o = i.prototype;
                return o.onLoad = function() {
                    null !== this.playerID && void 0 !== this.playerID && "" !== this.playerID || (this._playerID = S.totalTime.toString().replace(".", "") + p.randomRangeInt(1e5, 999999).toString() + "-slime")
                }
                ,
                o.start = function() {
                    this._creationTime = S.totalTime / 1e3,
                    f.emitEvents(this.onSizeChanged, this.size),
                    b.emit(D[D.Slime_NewSlime], this),
                    this._lastSizeDecreaseTime = S.totalTime / 1e3
                }
                ,
                o.canBeAbsorbed = function(e, t) {
                    return void 0 === t && (t = 0),
                    e instanceof i && (null != e && void 0 !== e.playerID && null !== e.playerID && "" !== e.playerID && (e !== this && (this.playerID !== e.playerID && e.Size - t > this.size + this.slimeSettings.minimumSizeDifferenceToAbsorb)))
                }
                ,
                o.decay = function(e) {
                    var i = e * this.size * (this.slimeSettings.decayPercentagePerSecond + this._decayMultipliersRatio);
                    if (i += this._decayFixedPenalty * e,
                    this._decayAccumulator += i,
                    this._decayAccumulator >= 1 && this.size > 1) {
                        var t = Math.min(this.size - 1, Math.floor(this._decayAccumulator));
                        this.decrease(t),
                        this._decayAccumulator -= t
                    }
                }
                ,
                o.safeAreaDamage = function(e) {
                    if (this._active && null !== this._safeArea && !this._safeArea.isInsideSafeArea(this.node)) {
                        var i = e * (this.slimeSettings.safeAreaDamage + this.size * (this.slimeSettings.decayPercentagePerSecond + this._decayMultipliersRatio));
                        if (this.safeAreaDamageAccumulator += i,
                        this.safeAreaDamageAccumulator >= 1) {
                            var t = Math.min(this.size, Math.floor(this.safeAreaDamageAccumulator));
                            this.decrease(t),
                            this.safeAreaDamageAccumulator -= t
                        }
                    } else
                        this.safeAreaDamageAccumulator > 0 && (this.safeAreaDamageAccumulator = 0)
                }
                ,
                o.update = function(e) {
                    this.decay(e),
                    this.safeAreaDamage(e)
                }
                ,
                o.onEnable = function() {
                    b.emit(v[v.SafeArea_GetSafeArea], this),
                    b.on(A[A.Game_Start], this.onGameStarted, this),
                    b.on(A[A.Game_Over], this.onGameOver, this)
                }
                ,
                o.onDisable = function() {
                    b.off(A[A.Game_Start], this.onGameStarted, this),
                    b.off(A[A.Game_Over], this.onGameOver, this),
                    this._original && (this._original._clone = null),
                    this._clone && (this._clone._original = null)
                }
                ,
                o.onGameStarted = function() {
                    this._active = !0
                }
                ,
                o.onGameOver = function() {
                    this._active = !1
                }
                ,
                o.setSafeArea = function(e) {
                    null === this._safeArea && (this._safeArea = e)
                }
                ,
                o.absorb = function(e) {
                    var i = e.Size;
                    e.eaten(this),
                    this.increase(i)
                }
                ,
                o.eaten = function(e) {
                    b.emit(D[D.Slime_SlimeAbsorbed], this),
                    this.node.destroy()
                }
                ,
                o.died = function() {
                    b.emit(D[D.Slime_SlimeBeginVanish], this)
                }
                ,
                o.finishedVanish = function() {
                    b.emit(D[D.Slime_SlimeDied], this),
                    this.node.destroy()
                }
                ,
                o.increase = function(e) {
                    if (this._active) {
                        var i = 0
                          , t = this.size + e;
                        t < this.size ? (i = Number.MAX_SAFE_INTEGER - this.size,
                        this.size = Number.MAX_SAFE_INTEGER) : (i = t - this.size,
                        this.size = t),
                        null !== this._original && this.size + this._original.Size > this._maxSize ? (this._maxSize = this.size + this._original.Size,
                        this._original._maxSize = this._maxSize,
                        z.log(this.playerID + " Max size increased: " + this._maxSize)) : null !== this._clone && this.size + this._clone.Size > this._maxSize ? (this._maxSize = this.size + this._clone.Size,
                        this._clone._maxSize = this._maxSize,
                        z.log(this.playerID + " Max size increased: " + this._maxSize)) : this.size > this._maxSize && (this._maxSize = this.size,
                        z.log(this.playerID + " Max size increased: " + this._maxSize)),
                        b.emit(x.updateSlimeScore, this, i),
                        f.emitEvents(this.onSizeIncreased, this.size),
                        f.emitEvents(this.onSizeChanged, this.size)
                    }
                }
                ,
                o.decrease = function(e) {
                    if (this._active && this.size > 0) {
                        var i = this.size;
                        this.size = Math.max(0, this.size - e),
                        b.emit(x.updateSlimeScore, this, this.size - i),
                        f.emitEvents(this.onSizeDecreased, this.size),
                        f.emitEvents(this.onSizeChanged, this.size),
                        0 === this.size && this.died()
                    }
                }
                ,
                o.activate = function() {
                    this.node.active = !0
                }
                ,
                o.setAsClone = function(e) {
                    this._playerID = e._playerID,
                    e._clone = this,
                    this._original = e
                }
                ,
                o.addDecayMultiplier = function(e) {
                    -1 === this._decayMultipliers.indexOf(e) && (this._decayMultipliers.push(e),
                    this.updateDecayMultipliers())
                }
                ,
                o.removeDecayMultiplier = function(e) {
                    var i = this._decayMultipliers.indexOf(e);
                    -1 !== i && (this._decayMultipliers.splice(i, 1),
                    this.updateDecayMultipliers())
                }
                ,
                o.updateDecayMultipliers = function() {
                    this._decayMultipliersRatio = 0,
                    this._decayFixedPenalty = 0;
                    for (var e, i = s(this._decayMultipliers); !(e = i()).done; ) {
                        var t = e.value;
                        this._decayMultipliersRatio += t.decayRatio,
                        this._decayFixedPenalty += t.fixedDecayValue
                    }
                }
                ,
                l(i, [{
                    key: "renderNode",
                    get: function() {
                        return this._renderNode
                    }
                }, {
                    key: "forward",
                    get: function() {
                        return this._renderNode.forward
                    }
                }, {
                    key: "ID",
                    get: function() {
                        return this.playerID
                    }
                }, {
                    key: "Position",
                    get: function() {
                        return this.node.position
                    }
                }, {
                    key: "Position2D",
                    get: function() {
                        return new g(this.node.position.x,this.node.position.z)
                    }
                }, {
                    key: "radius",
                    get: function() {
                        return this.node.scale.x * this._collider.radius
                    }
                }, {
                    key: "Size",
                    get: function() {
                        return this.size
                    }
                }, {
                    key: "MaxSize",
                    get: function() {
                        return this._maxSize
                    }
                }, {
                    key: "playerID",
                    get: function() {
                        return this._playerID
                    }
                }, {
                    key: "creationTime",
                    get: function() {
                        return this._creationTime
                    }
                }, {
                    key: "slimeSettings",
                    get: function() {
                        if (null === this._slimeSettings) {
                            var e = this._slimeSettingsPrefab.data;
                            this._slimeSettings = e.getComponent(I)
                        }
                        return this._slimeSettings
                    }
                }, {
                    key: "safeAreaDamageAccumulator",
                    get: function() {
                        return this._safeAreaDamageAccumulator
                    },
                    set: function(e) {
                        if (this._outOfSafeAreaParticles.length > 0)
                            if (0 == this._safeAreaDamageAccumulator && e > 0)
                                for (var i = 0; i < this._outOfSafeAreaParticles.length; i++)
                                    this._outOfSafeAreaParticles[i].play();
                            else if (this.safeAreaDamageAccumulator > 0 && 0 == e)
                                for (var t = 0; t < this._outOfSafeAreaParticles.length; t++)
                                    this._outOfSafeAreaParticles[t].stop();
                        null != this._damageBlink && (0 == this._safeAreaDamageAccumulator && e > 0 ? this._damageBlink.startBlink() : this.safeAreaDamageAccumulator > 0 && 0 == e && this._damageBlink.stopBlink()),
                        this._safeAreaDamageAccumulator = e
                    }
                }]),
                i
            }(y)).prototype, "_renderNode", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            X = i(V.prototype, "_collider", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            q = i(V.prototype, "_outOfSafeAreaParticles", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            U = i(V.prototype, "_damageBlink", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            J = i(V.prototype, "_debug", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            K = i(V.prototype, "size", [ne], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            Q = i(V.prototype, "_maxSize", [ne], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            W = i(V.prototype, "_active", [ne], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            Y = i(V.prototype, "onSizeChanged", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            Z = i(V.prototype, "onSizeIncreased", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            $ = i(V.prototype, "onSizeDecreased", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            ee = i(V.prototype, "onAbsorbSlime", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            ie = i(V.prototype, "anim", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            te = i(V.prototype, "_slimeSettingsPrefab", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            L = V)) || L) || L));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/BrainState.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var i, s;
    return {
        setters: [function(t) {
            i = t.defineProperty
        }
        , function(t) {
            s = t.cclegacy
        }
        ],
        execute: function() {
            s._RF.push({}, "a8ece/IVtJCpIRfoBE+xR93", "BrainState", void 0);
            t("BrainState", (function(t, s, e, o, r, n, h) {
                i(this, "target", void 0),
                i(this, "targets", void 0),
                i(this, "steering", void 0),
                i(this, "behavior", void 0),
                i(this, "slime", void 0),
                i(this, "threats", void 0),
                i(this, "isBoosting", void 0),
                this.target = t,
                this.targets = s,
                this.steering = e,
                this.behavior = o,
                this.slime = r,
                this.threats = n,
                this.isBoosting = h
            }
            ));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-BaseAbsorb.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TS_Slime.ts"], (function(r) {
    "use strict";
    var i, e, t, o, n, l, s, c, a;
    return {
        setters: [function(r) {
            i = r.applyDecoratedDescriptor,
            e = r.inheritsLoose,
            t = r.initializerDefineProperty,
            o = r.assertThisInitialized
        }
        , function(r) {
            n = r.cclegacy,
            l = r._decorator,
            s = r.Collider,
            c = r.Component
        }
        , function(r) {
            a = r.TS_Slime
        }
        ],
        execute: function() {
            var u, g, f, h, p, d, T;
            n._RF.push({}, "a92f8fFs6NLu4jKAIoDg/aD", "TS-Slime-BaseAbsorb", void 0);
            var b = l.ccclass
              , S = l.property;
            r("TS_Slime_BaseAbsorb", (u = b("TS_Slime_BaseAbsorb"),
            g = S(a),
            f = S(s),
            u((d = i((p = function(r) {
                function i() {
                    for (var i, e = arguments.length, n = new Array(e), l = 0; l < e; l++)
                        n[l] = arguments[l];
                    return i = r.call.apply(r, [this].concat(n)) || this,
                    t(o(i), "slime", d, o(i)),
                    t(o(i), "collider", T, o(i)),
                    i
                }
                e(i, r);
                var n = i.prototype;
                return n.onLoad = function() {
                    this.collider.on("onTriggerEnter", this.onTriggerEnter, this),
                    this.collider.on("onTriggerExit", this.onTriggerExit, this)
                }
                ,
                n.onDestroy = function() {
                    this.collider.off("onTriggerEnter", this.onTriggerEnter, this),
                    this.collider.off("onTriggerExit", this.onTriggerExit, this)
                }
                ,
                n.onTriggerEnter = function(r) {
                    this.trackCollider(r.otherCollider)
                }
                ,
                n.onTriggerExit = function(r) {
                    this.untrackCollider(r.otherCollider)
                }
                ,
                i
            }(c)).prototype, "slime", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            T = i(p.prototype, "collider", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            h = p)) || h));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SaveGameEnums.ts", ["cc"], (function(e) {
    "use strict";
    var a;
    return {
        setters: [function(e) {
            a = e.cclegacy
        }
        ],
        execute: function() {
            var t;
            e("SaveGameEvent", void 0),
            a._RF.push({}, "aa262j+KotDfJyZdamJmpon", "SaveGameEnums", void 0),
            function(e) {
                e[e.SaveGame_Loaded = 0] = "SaveGame_Loaded"
            }(t || (t = e("SaveGameEvent", {}))),
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AudioData.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./AudioItem.ts"], (function(t) {
    "use strict";
    var e, i, r, n, o, a, s, u, c;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            r = t.initializerDefineProperty,
            n = t.assertThisInitialized,
            o = t.createClass
        }
        , function(t) {
            a = t.cclegacy,
            s = t._decorator,
            u = t.Component
        }
        , function(t) {
            c = t.AudioItem
        }
        ],
        execute: function() {
            var l, p, f, d, y;
            a._RF.push({}, "aaf09Ao+q5OhKsNi2Dc5zdI", "AudioData", void 0);
            var h = s.ccclass
              , m = s.property;
            t("AudioData", (l = h("AudioData"),
            p = m({
                type: [c],
                visible: !0,
                formerlySerializedAs: "items"
            }),
            l((y = e((d = function(t) {
                function e() {
                    for (var e, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
                        o[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(o)) || this,
                    r(n(e), "_items", y, n(e)),
                    e
                }
                return i(e, t),
                e.prototype.getItem = function(t) {
                    return this._items.find((function(e) {
                        return e.key == t
                    }
                    ))
                }
                ,
                o(e, [{
                    key: "length",
                    get: function() {
                        return this._items.length
                    }
                }]),
                e
            }(u)).prototype, "_items", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            f = d)) || f));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Holdable.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./InputEnums.ts"], (function(t) {
    "use strict";
    var n, i, e, o, r, l, s, a, u, c, d;
    return {
        setters: [function(t) {
            n = t.applyDecoratedDescriptor,
            i = t.createClass,
            e = t.defineProperty,
            o = t.inheritsLoose,
            r = t.initializerDefineProperty,
            l = t.assertThisInitialized
        }
        , function(t) {
            s = t.cclegacy,
            a = t._decorator,
            u = t.EventHandler,
            c = t.Component
        }
        , function(t) {
            d = t.InputEvent
        }
        ],
        execute: function() {
            var p, h, H, _, f, v, b;
            s._RF.push({}, "ab113lawTxJjoAF39Ss9o+K", "Holdable", void 0);
            var y = a.ccclass
              , g = a.property
              , m = (t("Holdable", (p = y("Holdable"),
            h = g({
                type: [u],
                visible: !0
            }),
            H = g({
                type: [u],
                visible: !0
            }),
            p((v = n((f = function(t) {
                function n() {
                    for (var n, i = arguments.length, o = new Array(i), s = 0; s < i; s++)
                        o[s] = arguments[s];
                    return n = t.call.apply(t, [this].concat(o)) || this,
                    r(l(n), "_onHoldStart", v, l(n)),
                    r(l(n), "_onHoldEnd", b, l(n)),
                    e(l(n), "_isHolding", !1),
                    n
                }
                o(n, t);
                var i = n.prototype;
                return i.onDisable = function() {
                    this.isHolding() && this.endHold()
                }
                ,
                i.startHold = function(t, n) {
                    this._isHolding = !0;
                    var i = new m(t,n);
                    this.node.emit(d[d.Input_HoldStart], i),
                    u.emitEvents(this._onHoldStart, i)
                }
                ,
                i.endHold = function(t, n) {
                    void 0 === t && (t = null),
                    void 0 === n && (n = null),
                    this._isHolding = !1;
                    var i = new m(t,n);
                    this.node.emit(d[d.Input_HoldEnd], i),
                    u.emitEvents(this._onHoldEnd, i)
                }
                ,
                i.isHolding = function() {
                    return this._isHolding
                }
                ,
                n
            }(c)).prototype, "_onHoldStart", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            b = n(f.prototype, "_onHoldEnd", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            _ = f)) || _)),
            t("HoldData", function() {
                function t(t, n) {
                    e(this, "_touchPosition", null),
                    e(this, "_camera", null),
                    this._touchPosition = t,
                    this._camera = n
                }
                return i(t, [{
                    key: "touchScreenPosition",
                    get: function() {
                        return this._touchPosition
                    }
                }, {
                    key: "camera",
                    get: function() {
                        return this._camera
                    }
                }]),
                t
            }()));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameOverLevelDisplay.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./PlayerLevelSettings.ts", "./LevelUpRewardedAdEvents.ts", "./GameOverAnimatedXpDisplay.ts", "./GameOverCoinsDisplayToast.ts", "./GameOverTotalCoinsDisplay.ts"], (function(e) {
    "use strict";
    var i, t, n, l, a, o, s, r, p, u, v, c, d, m, y, _;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            n = e.initializerDefineProperty,
            l = e.assertThisInitialized,
            a = e.defineProperty
        }
        , function(e) {
            o = e.cclegacy,
            s = e._decorator,
            r = e.Label,
            p = e.animation,
            u = e.Component
        }
        , function(e) {
            v = e.projectEvent
        }
        , function(e) {
            c = e.levelingSettings
        }
        , function(e) {
            d = e.LevelUpRewardedAdEvents
        }
        , function(e) {
            m = e.GameOverAnimatedXpDisplay
        }
        , function(e) {
            y = e.GameOverCoinsDisplayToast
        }
        , function(e) {
            _ = e.GameOverTotalCoinsDisplay
        }
        ],
        execute: function() {
            var f, b, h, L, D, C, g, U, w, A, x, R, G, O, F;
            o._RF.push({}, "abbc67cNQxDuJ3vQ9bKAb0F", "GameOverLevelDisplay", void 0);
            var z = s.ccclass
              , E = s.property;
            e("GameOverLevelDisplay", (f = z("GameOverLevelDisplay"),
            b = E({
                type: r,
                visible: !0,
                group: {
                    id: "level",
                    name: "Level"
                }
            }),
            h = E({
                type: m,
                visible: !0,
                group: {
                    id: "xp",
                    name: "Experience"
                }
            }),
            L = E({
                type: _,
                visible: !0,
                group: {
                    id: "coins",
                    name: "Coins"
                }
            }),
            D = E({
                type: y,
                visible: !0,
                group: {
                    id: "coins",
                    name: "Coins"
                }
            }),
            C = E({
                type: p.AnimationController,
                visible: !0,
                group: {
                    id: "animation",
                    name: "Animation"
                }
            }),
            g = E({
                visible: !0,
                group: {
                    id: "animation",
                    name: "Animation"
                }
            }),
            f((A = i((w = function(e) {
                function i() {
                    for (var i, t = arguments.length, o = new Array(t), s = 0; s < t; s++)
                        o[s] = arguments[s];
                    return i = e.call.apply(e, [this].concat(o)) || this,
                    n(l(i), "_levelLabel", A, l(i)),
                    n(l(i), "_xpDisplay", x, l(i)),
                    n(l(i), "_totalCoinsDisplay", R, l(i)),
                    n(l(i), "_coinsDisplayToast", G, l(i)),
                    n(l(i), "_animator", O, l(i)),
                    n(l(i), "_levelUpAnimatorParameter", F, l(i)),
                    a(l(i), "_newLevel", -1),
                    a(l(i), "_onLevelUpCompleted", void 0),
                    a(l(i), "_levelUpBonusCoins", 0),
                    i
                }
                t(i, e);
                var o = i.prototype;
                return o.onEnable = function() {
                    this._levelUpBonusCoins = 0,
                    v.on(d[d.LevelUpRewardedAdEvents_Completed], this.watchedLevelUpRewardedAd, this)
                }
                ,
                o.onDisable = function() {
                    v.off(d[d.LevelUpRewardedAdEvents_Completed], this.watchedLevelUpRewardedAd, this)
                }
                ,
                o.watchedLevelUpRewardedAd = function() {
                    this._totalCoinsDisplay.addCoins(this._levelUpBonusCoins)
                }
                ,
                o.setValues = function(e, i, t) {
                    this._levelLabel.string = e.toFixed(),
                    this._xpDisplay.setValues(i, c.getXpRequirementForLevel(e + 1)),
                    this._totalCoinsDisplay.setCoins(t)
                }
                ,
                o.playLevelUp = function(e, i) {
                    var t = this
                      , n = c.getXpRequirementForLevel(e);
                    this._newLevel = e,
                    this._onLevelUpCompleted = i,
                    this._xpDisplay.playXpUpdate(n, n, (function() {
                        t._animator.setValue(t._levelUpAnimatorParameter, !0)
                    }
                    ))
                }
                ,
                o.refreshLevelDisplay = function() {
                    this._levelLabel.string = this._newLevel.toFixed(),
                    this._xpDisplay.setValues(0, c.getXpRequirementForLevel(this._newLevel));
                    var e = c.getCoinsForLevel(this._newLevel);
                    this._coinsDisplayToast.setCoins(e),
                    this._totalCoinsDisplay.addCoins(e),
                    this._levelUpBonusCoins += e
                }
                ,
                o.onLevelUpAnimationCompleted = function() {
                    this._onLevelUpCompleted && this._onLevelUpCompleted()
                }
                ,
                o.playXpUpdate = function(e, i, t) {
                    this._xpDisplay.playXpUpdate(e, i, t)
                }
                ,
                i
            }(u)).prototype, "_levelLabel", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            x = i(w.prototype, "_xpDisplay", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            R = i(w.prototype, "_totalCoinsDisplay", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            G = i(w.prototype, "_coinsDisplayToast", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            O = i(w.prototype, "_animator", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            F = i(w.prototype, "_levelUpAnimatorParameter", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "levelUp"
                }
            }),
            U = w)) || U));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-ColorsData.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ColorEntry.ts"], (function(t) {
    "use strict";
    var r, o, e, i, n, l, a, s, c, u;
    return {
        setters: [function(t) {
            r = t.applyDecoratedDescriptor,
            o = t.inheritsLoose,
            e = t.initializerDefineProperty,
            i = t.assertThisInitialized,
            n = t.createClass
        }
        , function(t) {
            l = t.cclegacy,
            a = t._decorator,
            s = t.Component
        }
        , function(t) {
            c = t.logger
        }
        , function(t) {
            u = t.ColorEntry
        }
        ],
        execute: function() {
            var p, f, y, g, _;
            l._RF.push({}, "ac550k6HaJEIqPwtu6geUau", "TS-Slime-ColorsData", void 0);
            var S = a.ccclass
              , h = a.property;
            t("TS_Slime_ColorsData", (p = S("TS_Slime_ColorsData"),
            f = h({
                visible: !0,
                type: [u]
            }),
            p((_ = r((g = function(t) {
                function r() {
                    for (var r, o = arguments.length, n = new Array(o), l = 0; l < o; l++)
                        n[l] = arguments[l];
                    return r = t.call.apply(t, [this].concat(n)) || this,
                    e(i(r), "_colors", _, i(r)),
                    r
                }
                return o(r, t),
                r.prototype.start = function() {
                    c.log("")
                }
                ,
                n(r, [{
                    key: "colors",
                    get: function() {
                        return this._colors
                    }
                }]),
                r
            }(s)).prototype, "_colors", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            y = g)) || y));
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AudioProxy.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./AudioManager.ts"], (function(e) {
    "use strict";
    var i, r, t, o, n, a, u, y, l, s, c, p, d;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            t = e.initializerDefineProperty,
            o = e.assertThisInitialized,
            n = e.createClass
        }
        , function(e) {
            a = e.cclegacy,
            u = e._decorator,
            y = e.Prefab,
            l = e.Component
        }
        , function(e) {
            s = e.logger,
            c = e.LogCategory,
            p = e.LogType
        }
        , function(e) {
            d = e.AudioManager
        }
        ],
        execute: function() {
            var g, f, h, k, _, b, v;
            a._RF.push({}, "ac879rTendCEbpZWFz/jexs", "AudioProxy", void 0);
            var m = u.ccclass
              , A = u.property;
            e("AudioProxy", (g = m("AudioProxy"),
            f = A({
                visible: !0,
                group: {
                    id: "key",
                    name: "Key"
                }
            }),
            h = A({
                type: y,
                visible: !0,
                group: {
                    id: "key",
                    name: "Deprecated Key"
                },
                formerlySerializedAs: "key"
            }),
            g((b = i((_ = function(e) {
                function i() {
                    for (var i, r = arguments.length, n = new Array(r), a = 0; a < r; a++)
                        n[a] = arguments[a];
                    return i = e.call.apply(e, [this].concat(n)) || this,
                    t(o(i), "_audioKey", b, o(i)),
                    t(o(i), "_key", v, o(i)),
                    i
                }
                return r(i, e),
                i.prototype.playSFX = function() {
                    var e;
                    this.key.length > 0 && (null === (e = d.instance) || void 0 === e || e.playByKey(this.key))
                }
                ,
                n(i, [{
                    key: "key",
                    get: function() {
                        return 0 == this._audioKey.length ? this._key ? this._key.data.name : (s.log("AudioProxy at " + this.node.name + " has no audio key", c.Generic, p.Error),
                        "") : this._audioKey
                    }
                }]),
                i
            }(l)).prototype, "_audioKey", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            v = i(_.prototype, "_key", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            k = _)) || k));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PlayerLevelData.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var i, t;
    return {
        setters: [function(e) {
            i = e.defineProperty
        }
        , function(e) {
            t = e.cclegacy
        }
        ],
        execute: function() {
            t._RF.push({}, "af6767GkjpHAoAZcivaY5oA", "PlayerLevelData", void 0);
            e("PlayerLevelData", (function(e) {
                i(this, "xp", void 0),
                i(this, "coinsPrize", void 0),
                this.xp = e.xp,
                this.coinsPrize = e.coinsPrize
            }
            ));
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/WorldsBundleLoader.ts", ["cc", "./BundleLoader.ts", "./BundleEvents.ts"], (function(e) {
    "use strict";
    var n, d, s;
    return {
        setters: [function(e) {
            n = e.cclegacy
        }
        , function(e) {
            d = e.BundleLoader
        }
        , function(e) {
            s = e.BundleEvents
        }
        ],
        execute: function() {
            n._RF.push({}, "b0231x9RwpJDINnWcswlMNG", "WorldsBundleLoader", void 0);
            e("worldsBundleLoader", new d("Worlds",s[s.Bundle_WorldsLoaded]));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ButtonHelper.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts"], (function(t) {
    "use strict";
    var e, n, i, o, r, a, l, c, u, s;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            i = t.initializerDefineProperty,
            o = t.assertThisInitialized
        }
        , function(t) {
            r = t.cclegacy,
            a = t._decorator,
            l = t.Button,
            c = t.EventHandler,
            u = t.Component
        }
        , function(t) {
            s = t.logger
        }
        ],
        execute: function() {
            var p, b, f, v, h, y, _, g, C, d;
            r._RF.push({}, "b2629pBo9BDtrAXL8hN6QoS", "ButtonHelper", void 0);
            var m = a.ccclass
              , B = a.property
              , k = a.requireComponent;
            t("ButtonHelper", (p = m("ButtonHelper"),
            b = k(l),
            f = B({
                visible: !0,
                type: l
            }),
            v = B({
                visible: !0,
                type: [c]
            }),
            h = B({
                visible: !0,
                type: [c]
            }),
            p(y = b((g = e((_ = function(t) {
                function e() {
                    for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                        r[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(r)) || this,
                    i(o(e), "_button", g, o(e)),
                    i(o(e), "_onActivateClick", C, o(e)),
                    i(o(e), "_onDeactivateClick", d, o(e)),
                    e
                }
                n(e, t);
                var r = e.prototype;
                return r.onLoad = function() {
                    null === this._button && (this._button = this.node.getComponent(l))
                }
                ,
                r.setInteractable = function(t, e) {
                    void 0 === t ? ("boolean" == typeof e || "string" == typeof e) && this.setInteractable(e) : "string" == typeof t ? "false" === t ? this.setInteractable(!1) : "true" === t ? this.setInteractable(!0) : s.log("Can't parse value: " + t) : this._button.interactable !== t && (this._button.interactable = t,
                    t ? c.emitEvents(this._onActivateClick) : c.emitEvents(this._onDeactivateClick))
                }
                ,
                e
            }(u)).prototype, "_button", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            C = e(_.prototype, "_onActivateClick", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            d = e(_.prototype, "_onDeactivateClick", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            y = _)) || y) || y));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameOverAnimatedXpDisplay.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, i, p, r, n, a, l, s, o, u;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            p = e.initializerDefineProperty,
            r = e.assertThisInitialized,
            n = e.defineProperty
        }
        , function(e) {
            a = e.cclegacy,
            l = e._decorator,
            s = e.Label,
            o = e.Sprite,
            u = e.Component
        }
        ],
        execute: function() {
            var c, _, h, d, X, f, y, m, g;
            a._RF.push({}, "b2e8cJmV2lHfLO8Dt8AHway", "GameOverAnimatedXpDisplay", void 0);
            var v = l.ccclass
              , b = l.property;
            e("GameOverAnimatedXpDisplay", (c = v("GameOverAnimatedXpDisplay"),
            _ = b({
                type: s,
                visible: !0
            }),
            h = b({
                type: o,
                visible: !0
            }),
            d = b({
                visible: !0
            }),
            c((y = t((f = function(e) {
                function t() {
                    for (var t, i = arguments.length, a = new Array(i), l = 0; l < i; l++)
                        a[l] = arguments[l];
                    return t = e.call.apply(e, [this].concat(a)) || this,
                    p(r(t), "_xpLabel", y, r(t)),
                    p(r(t), "_xpFill", m, r(t)),
                    p(r(t), "_fillingSpeed", g, r(t)),
                    n(r(t), "_currentXp", void 0),
                    n(r(t), "_targetXp", void 0),
                    n(r(t), "_maxXp", void 0),
                    n(r(t), "_onCompleteXpUpdate", void 0),
                    n(r(t), "_playingXpUpdate", void 0),
                    t
                }
                i(t, e);
                var a = t.prototype;
                return a.update = function(e) {
                    this._playingXpUpdate && (this._currentXp = Math.min(this._currentXp + this._fillingSpeed * this._maxXp * e, this._targetXp),
                    this.refreshDisplay(this._currentXp, this._maxXp),
                    this._currentXp === this._targetXp && (this._playingXpUpdate = !1,
                    this._onCompleteXpUpdate && this._onCompleteXpUpdate()))
                }
                ,
                a.setValues = function(e, t) {
                    this._currentXp = e,
                    this._maxXp = t,
                    this.refreshDisplay(this._currentXp, this._maxXp)
                }
                ,
                a.playXpUpdate = function(e, t, i) {
                    this._targetXp = e,
                    this._maxXp = t,
                    this._onCompleteXpUpdate = i,
                    this._playingXpUpdate = !0
                }
                ,
                a.stop = function() {
                    this._playingXpUpdate = !1
                }
                ,
                a.refreshDisplay = function(e, t) {
                    this._xpLabel.string = e.toFixed() + " / " + t.toFixed(),
                    this._xpFill.fillRange = e / t
                }
                ,
                t
            }(u)).prototype, "_xpLabel", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            m = t(f.prototype, "_xpFill", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            g = t(f.prototype, "_fillingSpeed", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .5
                }
            }),
            X = f)) || X));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Settings-Slime.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Range.ts", "./Vec3Range.ts"], (function(e) {
    "use strict";
    var i, n, t, a, r, o, c, u, l, s;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            t = e.initializerDefineProperty,
            a = e.assertThisInitialized,
            r = e.createClass
        }
        , function(e) {
            o = e.cclegacy,
            c = e._decorator,
            u = e.Component
        }
        , function(e) {
            l = e.Range
        }
        , function(e) {
            s = e.Vec3Range
        }
        ],
        execute: function() {
            var g, f, m, b, p, _, S, y, R, d, z, h, D, v, w, A, k, P, T;
            o._RF.push({}, "b3ea8q2C1lBmKIWqeNkZYz/", "TS-Settings-Slime", void 0);
            var x = c.ccclass
              , C = c.property;
            e("TS_Settings_Slime", (g = x("TS_Settings_Slime"),
            f = C({
                visible: !0
            }),
            m = C({
                visible: !0
            }),
            b = C({
                visible: !0
            }),
            p = C({
                visible: !0
            }),
            _ = C({
                visible: !0
            }),
            S = C({
                visible: !0
            }),
            y = C({
                visible: !0
            }),
            R = C({
                visible: !0
            }),
            g((h = i((z = function(e) {
                function i() {
                    for (var i, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                        r[o] = arguments[o];
                    return i = e.call.apply(e, [this].concat(r)) || this,
                    t(a(i), "_decayPercentagePerSecond", h, a(i)),
                    t(a(i), "_minimumSizeDifferenceToAbsorb", D, a(i)),
                    t(a(i), "_safeAreaDamageRatio", v, a(i)),
                    t(a(i), "_safeAreaDamage", w, a(i)),
                    t(a(i), "_sizeRange", A, a(i)),
                    t(a(i), "_maxSpeedRange", k, a(i)),
                    t(a(i), "_scaleRange", P, a(i)),
                    t(a(i), "_animationSpeedRange", T, a(i)),
                    i
                }
                return n(i, e),
                r(i, [{
                    key: "decayPercentagePerSecond",
                    get: function() {
                        return this._decayPercentagePerSecond
                    }
                }, {
                    key: "minimumSizeDifferenceToAbsorb",
                    get: function() {
                        return this._minimumSizeDifferenceToAbsorb
                    }
                }, {
                    key: "safeAreaDamageRatio",
                    get: function() {
                        return this._safeAreaDamageRatio
                    }
                }, {
                    key: "safeAreaDamage",
                    get: function() {
                        return this._safeAreaDamage
                    }
                }, {
                    key: "sizeRange",
                    get: function() {
                        return this._sizeRange
                    }
                }, {
                    key: "maxSpeedRange",
                    get: function() {
                        return this._maxSpeedRange
                    }
                }, {
                    key: "scaleRange",
                    get: function() {
                        return this._scaleRange
                    }
                }, {
                    key: "animationSpeedRange",
                    get: function() {
                        return this._animationSpeedRange
                    }
                }]),
                i
            }(u)).prototype, "_decayPercentagePerSecond", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .2
                }
            }),
            D = i(z.prototype, "_minimumSizeDifferenceToAbsorb", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            v = i(z.prototype, "_safeAreaDamageRatio", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .2
                }
            }),
            w = i(z.prototype, "_safeAreaDamage", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 2
                }
            }),
            A = i(z.prototype, "_sizeRange", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new l(0,0)
                }
            }),
            k = i(z.prototype, "_maxSpeedRange", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new l(0,0)
                }
            }),
            P = i(z.prototype, "_scaleRange", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new s
                }
            }),
            T = i(z.prototype, "_animationSpeedRange", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new l
                }
            }),
            d = z)) || d));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DailyMissionsUI.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./DailyMissionEntryUI.ts"], (function(i) {
    "use strict";
    var s, n, t, e, r, o, a, l, c;
    return {
        setters: [function(i) {
            s = i.applyDecoratedDescriptor,
            n = i.inheritsLoose,
            t = i.initializerDefineProperty,
            e = i.assertThisInitialized
        }
        , function(i) {
            r = i.cclegacy,
            o = i._decorator,
            a = i.instantiate,
            l = i.Component
        }
        , function(i) {
            c = i.DailyMissionEntryUI
        }
        ],
        execute: function() {
            var u, p, h, y, f;
            r._RF.push({}, "b42e4itkiNL2Jk75XfG9uYR", "DailyMissionsUI", void 0);
            var m = o.ccclass
              , _ = o.property;
            i("DailyMissionsUI", (u = m("DailyMissionsUI"),
            p = _({
                visible: !0,
                type: [c]
            }),
            u((f = s((y = function(i) {
                function s() {
                    for (var s, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                        r[o] = arguments[o];
                    return s = i.call.apply(i, [this].concat(r)) || this,
                    t(e(s), "_missionEntries", f, e(s)),
                    s
                }
                return n(s, i),
                s.prototype.setMissions = function(i) {
                    for (var s = 0; s < i.missions.length; s++) {
                        if (s >= this._missionEntries.length) {
                            var n = a(this._missionEntries[this._missionEntries.length - 1].node);
                            n.setParent(this._missionEntries[this._missionEntries.length - 1].node.parent),
                            this._missionEntries.push(n.getComponent(c))
                        }
                        this._missionEntries[s].setMissionData(i.missions[s])
                    }
                }
                ,
                s
            }(l)).prototype, "_missionEntries", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            h = y)) || h));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DailyMissionsSaveController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./DailyMissionsSetSave.ts", "./SaveGame.ts"], (function(s) {
    "use strict";
    var e, i, n, t, o;
    return {
        setters: [function(s) {
            e = s.createClass
        }
        , function(s) {
            i = s.cclegacy,
            n = s._decorator
        }
        , function(s) {
            t = s.DailyMissionsSetSave
        }
        , function(s) {
            o = s.saveGame
        }
        ],
        execute: function() {
            var a;
            i._RF.push({}, "b61052eI+1K0K3rPe6VItPf", "DailyMissionsSaveController", void 0);
            var r = n.ccclass;
            n.property,
            s("DailyMissionsSaveController", r("DailyMissionsSave")(a = function() {
                function s() {}
                return s.saveDailies = function(s) {
                    this.missions = new t(s)
                }
                ,
                e(s, null, [{
                    key: "missions",
                    get: function() {
                        return o.getMissions()
                    },
                    set: function(s) {
                        o.setMissions(s)
                    }
                }]),
                s
            }()) || a);
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SaveGameData.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./DailyMissionsSetSave.ts", "./PlayerLevelSettings.ts", "./ItemSave.ts", "./Item.ts"], (function(t) {
    "use strict";
    var i, e, s, n, o, r, h;
    return {
        setters: [function(t) {
            i = t.createForOfIteratorHelperLoose,
            e = t.defineProperty
        }
        , function(t) {
            s = t.cclegacy
        }
        , function(t) {
            n = t.DailyMissionsSetSave
        }
        , function(t) {
            o = t.levelingSettings
        }
        , function(t) {
            r = t.ItemSave
        }
        , function(t) {
            h = t.Item
        }
        ],
        execute: function() {
            s._RF.push({}, "b6ae0/uKsRD65AObUIRlh9J", "SaveGameData", void 0);
            t("SaveGameData", function() {
                function t(s) {
                    if (void 0 === s && (s = null),
                    e(this, "totalXp", 0),
                    e(this, "level", 0),
                    e(this, "coins", 0),
                    e(this, "highScore", 0),
                    e(this, "missions", null),
                    e(this, "items", []),
                    e(this, "currentSkin", ""),
                    e(this, "currentWorld", 0),
                    s) {
                        if (s instanceof t) {
                            this.totalXp = s.totalXp,
                            this.level = s.level,
                            this.coins = s.coins,
                            this.missions = s.missions,
                            this.highScore = s.highScore,
                            this.items = [];
                            for (var h, c = i(s.items); !(h = c()).done; ) {
                                var u = h.value;
                                this.items.push(u)
                            }
                            this.currentSkin = s.currentSkin,
                            this.currentWorld = s.currentWorld
                        } else if ("object" == typeof s) {
                            if (this.totalXp = s.totalXp,
                            this.level = s.level,
                            this.coins = s.coins,
                            this.currentSkin = s.currentSkin,
                            this.currentWorld = s.currentWorld,
                            this.highScore = s.highScore,
                            this.missions = new n,
                            Object.assign(this.missions, s.missions),
                            s.items)
                                for (var l, a = i(s.items); !(l = a()).done; ) {
                                    var f = l.value;
                                    this.items.push(new r),
                                    Object.assign(this.items[this.items.length - 1], f)
                                }
                        }
                    } else
                        this.totalXp = 0,
                        this.level = o.startingLevel,
                        this.coins = 0,
                        this.items = [],
                        this.currentSkin = "drop-0",
                        this.currentWorld = 1,
                        this.highScore = 0
                }
                var s = t.prototype;
                return s.getTotalXp = function() {
                    return this.totalXp
                }
                ,
                s.setTotalXp = function(t) {
                    this.totalXp = t
                }
                ,
                s.getLevel = function() {
                    return this.level
                }
                ,
                s.setLevel = function(t) {
                    this.level = t
                }
                ,
                s.getCoins = function() {
                    return this.coins
                }
                ,
                s.setCoins = function(t) {
                    this.coins = t
                }
                ,
                s.getHighScore = function() {
                    return this.highScore
                }
                ,
                s.setHighScore = function(t) {
                    this.highScore = t
                }
                ,
                s.getMissions = function() {
                    return this.missions
                }
                ,
                s.setMissions = function(t) {
                    this.missions = t
                }
                ,
                s.getStoreItems = function() {
                    return this.items
                }
                ,
                s.setStoreItems = function(t) {
                    this.items = [];
                    for (var e, s = i(t); !(e = s()).done; ) {
                        var n = e.value;
                        n instanceof r ? this.items.push(n) : n instanceof h && this.items.push(new r(n))
                    }
                }
                ,
                s.setStoreItem = function(t) {
                    var i = this.items.findIndex((function(i) {
                        return i.id == t.id
                    }
                    ));
                    -1 !== i && (t instanceof r ? this.items[i] = t : t instanceof h && (this.items[i] = new r(t)))
                }
                ,
                s.getStoreItem = function(t) {
                    return this.items.find((function(i) {
                        return i.id == t
                    }
                    ))
                }
                ,
                s.getSkin = function() {
                    return this.currentSkin
                }
                ,
                s.setSkin = function(t) {
                    this.currentSkin = t
                }
                ,
                s.getWorld = function() {
                    return this.currentWorld
                }
                ,
                s.setWorld = function(t) {
                    this.currentWorld = t
                }
                ,
                t
            }());
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DistributeReward.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./XpRewardSettings.ts", "./ENUM-GameEvents.ts", "./PlayerLevelController.ts"], (function(e) {
    "use strict";
    var t, i, s, n, r, o, a, l, c, u;
    return {
        setters: [function(e) {
            t = e.inheritsLoose,
            i = e.defineProperty,
            s = e.assertThisInitialized
        }
        , function(e) {
            n = e.cclegacy,
            r = e._decorator,
            o = e.Component
        }
        , function(e) {
            a = e.projectEvent
        }
        , function(e) {
            l = e.xpRewardSettingsSettings
        }
        , function(e) {
            c = e.GameEvents
        }
        , function(e) {
            u = e.PlayerLevelController
        }
        ],
        execute: function() {
            var d;
            n._RF.push({}, "b738dqUDJdPWLI7QYjSEYUQ", "DistributeReward", void 0);
            var v = r.ccclass;
            e("DistributeReward", v("DistributeReward")(d = function(e) {
                function n() {
                    for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                        r[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    i(s(t), "_slimesUpdated", void 0),
                    i(s(t), "_slimesCount", 0),
                    i(s(t), "_called", !1),
                    t
                }
                t(n, e);
                var r = n.prototype;
                return r.start = function() {
                    var e = this;
                    a.once(c[c.Game_Over], this.gameOver, this),
                    this._slimesUpdated = a.on(c[c.Game_TotalSlimes], (function(t) {
                        e.slimesAlive(t)
                    }
                    ))
                }
                ,
                r.onDestroy = function() {
                    a.off(c[c.Game_Over], this.gameOver, this),
                    a.off(c[c.Game_TotalSlimes], this._slimesUpdated)
                }
                ,
                r.gameOver = function() {
                    if (!this._called) {
                        this._called = !0;
                        var e = l.getXp(this._slimesCount);
                        u.addXp(e)
                    }
                }
                ,
                r.slimesAlive = function(e) {
                    this._slimesCount = e
                }
                ,
                n
            }(o)) || d);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PrefabPool.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var e, n, i, o, s, a, r, l, c, u, h, f;
    return {
        setters: [function(t) {
            e = t.defineProperty,
            n = t.inheritsLoose,
            i = t.assertThisInitialized,
            o = t.createForOfIteratorHelperLoose,
            s = t.createClass
        }
        , function(t) {
            a = t.cclegacy,
            r = t._decorator,
            l = t.director,
            c = t.NodePool,
            u = t.instantiate,
            h = t.Node,
            f = t.Component
        }
        ],
        execute: function() {
            var p, v, d;
            a._RF.push({}, "b7fd3GtjZNCgZZkkorYWOYh", "PrefabPool", void 0);
            var g = r.ccclass
              , P = (r.property,
            r.executionOrder);
            t("PrefabPool", g("PrefabPool")(p = P(-5)((d = v = function(t) {
                function a() {
                    for (var n, o = arguments.length, s = new Array(o), a = 0; a < o; a++)
                        s[a] = arguments[a];
                    return n = t.call.apply(t, [this].concat(s)) || this,
                    e(i(n), "pools", new Map),
                    e(i(n), "scene", void 0),
                    n
                }
                n(a, t);
                var r = a.prototype;
                return r.onLoad = function() {
                    null == a._instance && (a._instance = this),
                    this.scene = l.getScene()
                }
                ,
                r.onDestroy = function() {
                    this.unscheduleAllCallbacks(),
                    this.clearAll(),
                    a._instance == this && (a._instance = null)
                }
                ,
                r.initializeWithCallbacks = function(t, e, n) {
                    void 0 === n && (n = 3),
                    this.initialize(t, e, n)
                }
                ,
                r.initialize = function(t, e, n) {
                    if (void 0 === n && (n = 3),
                    0 == this.pools.has(t)) {
                        for (var i = new c, o = 0; o < n; o++) {
                            var s = u(t);
                            i.put(s)
                        }
                        this.pools.set(t, i)
                    }
                }
                ,
                r.getInScene = function(t) {
                    var e = this.get(t);
                    return e.setParent(this.scene),
                    e
                }
                ,
                r.get = function(t) {
                    var e;
                    0 == this.pools.has(t) && this.initialize(t);
                    var n = null === (e = this.pools.get(t)) || void 0 === e ? void 0 : e.get();
                    return null == n && (n = u(t)),
                    n
                }
                ,
                r.putByName = function(t, e) {
                    for (var n, i = o(this.pools); !(n = i()).done; ) {
                        var s = n.value
                          , a = s[0];
                        s[1];
                        if (a.data.name == t) {
                            this.put(a, e);
                            break
                        }
                    }
                }
                ,
                r.put = function(t, e) {
                    var n;
                    this.pools.has(t) && (null === (n = this.pools.get(t)) || void 0 === n || n.put(e))
                }
                ,
                r.schedulePut = function(t, e, n) {
                    var i = this;
                    this.scheduleOnce((function() {
                        i.put(t, e)
                    }
                    ), n)
                }
                ,
                r.clear = function(t) {
                    var e;
                    this.pools.has(t) && (null === (e = this.pools.get(t)) || void 0 === e || e.clear())
                }
                ,
                r.clearAll = function() {
                    this.pools.forEach((function(t) {
                        t.clear()
                    }
                    ))
                }
                ,
                r.has = function(t) {
                    return this.pools.has(t)
                }
                ,
                s(a, null, [{
                    key: "instance",
                    get: function() {
                        if (null == a._instance) {
                            var t = new h(a.name);
                            t.setParent(l.getScene()),
                            this._instance = t.addComponent(a)
                        }
                        return a._instance
                    }
                }]),
                a
            }(f),
            e(v, "_instance", void 0),
            p = d)) || p) || p);
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PunchScaleTween.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./PunchTweenBase.ts"], (function(e) {
    "use strict";
    var t, n, c, a, s, r, i;
    return {
        setters: [function(e) {
            t = e.inheritsLoose,
            n = e.createClass
        }
        , function(e) {
            c = e.cclegacy,
            a = e._decorator,
            s = e.Vec3,
            r = e.tween
        }
        , function(e) {
            i = e.PunchTweenBase
        }
        ],
        execute: function() {
            var u;
            c._RF.push({}, "b8f08y0xb5CoqUTV49W2AU6", "PunchScaleTween", void 0);
            var l = a.ccclass;
            e("PunchScaleTween", l("PunchScaleTween")(u = function(e) {
                function c() {
                    return e.apply(this, arguments) || this
                }
                return t(c, e),
                c.prototype.playSegment = function(e) {
                    var t = this.delay;
                    e > 0 && (t = 0);
                    var n = new s;
                    s.add(n, this.getSegmentValue(e), s.ONE);
                    var c = new s;
                    s.multiply(c, n, new s(this.startingValue)),
                    this.tweenCache = r(this.getTarget()).delay(t).to(this.getSegmentDuration(e), {
                        scale: c
                    }, this.getTweenOptions(e)).repeat(1),
                    this.tweenCache.start()
                }
                ,
                n(c, [{
                    key: "currentValue",
                    get: function() {
                        return new s(this.getTarget().scale)
                    },
                    set: function(e) {
                        this.getTarget().scale = e
                    }
                }]),
                c
            }(i)) || u);
            c._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/WorldEvents.ts", ["cc"], (function(e) {
    "use strict";
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }
        ],
        execute: function() {
            var r;
            e("WorldEvents", void 0),
            t._RF.push({}, "bb3f3ExmYdM9q0yF+0s7MAz", "WorldEvents", void 0),
            function(e) {
                e[e.World_Changed = 0] = "World_Changed",
                e[e.World_Ready = 1] = "World_Ready"
            }(r || (r = e("WorldEvents", {}))),
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-AI-Movement-ChaseBehavior.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Range.ts", "./TS_Slime.ts", "./AISlimeThreat.ts", "./TS-Slime-AI-Movement-BaseBehavior.ts", "./TS-SlimeFood.ts", "./TS-Slime-Player.ts"], (function(e) {
    "use strict";
    var i, t, n, r, a, o, s, l, c, h, u, m, d, f, g, v, _, S, T;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            n = e.initializerDefineProperty,
            r = e.assertThisInitialized,
            a = e.defineProperty,
            o = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            s = e.cclegacy,
            l = e._decorator,
            c = e.Vec3,
            h = e.randomRange,
            u = e.Vec2,
            m = e.game,
            d = e.math
        }
        , function(e) {
            f = e.Range
        }
        , function(e) {
            g = e.TS_Slime
        }
        , function(e) {
            v = e.AISlimeThreat
        }
        , function(e) {
            _ = e.TS_Slime_AI_Movement_BaseBehavior
        }
        , function(e) {
            S = e.TS_SlimeFood
        }
        , function(e) {
            T = e.TS_Slime_Player
        }
        ],
        execute: function() {
            var p, y, b, I, P, w, D, B, z;
            s._RF.push({}, "bb7ddyp60RMBolgAi/8Z567", "TS-Slime-AI-Movement-ChaseBehavior", void 0);
            var A = l.ccclass
              , x = l.property;
            e("TS_Slime_AI_Movement_ChaseBehavior", (p = A("TS_Slime_AI_Movement_ChaseBehavior"),
            y = x({
                type: f,
                visible: !0
            }),
            b = x({
                type: f,
                visible: !0
            }),
            I = x({
                visible: !0
            }),
            p((D = i((w = function(e) {
                function i() {
                    for (var i, t = arguments.length, o = new Array(t), s = 0; s < t; s++)
                        o[s] = arguments[s];
                    return i = e.call.apply(e, [this].concat(o)) || this,
                    n(r(i), "_chaseTime", D, r(i)),
                    n(r(i), "_chaseInterval", B, r(i)),
                    n(r(i), "_chasePlayerChance", z, r(i)),
                    a(r(i), "_currentTarget", null),
                    a(r(i), "_maxChaseTime", 0),
                    a(r(i), "_currentDirection", new c),
                    a(r(i), "_chasedSlimes", []),
                    i
                }
                t(i, e);
                var s = i.prototype;
                return s.getDirection = function(e) {
                    var i = e.slime
                      , t = e.targets
                      , n = e.threats
                      , r = e.isBoosting
                      , a = e.target;
                    return 0 == t.length ? {
                        direction: null,
                        target: null
                    } : this.setNewTarget(i, a, t, n, r)
                }
                ,
                s.isSlimeTargetValid = function(e, i) {
                    var t = this._chasedSlimes.findIndex((function(i) {
                        return i.slime === e
                    }
                    ));
                    if (-1 === t) {
                        var n = i + h(this._chaseTime.Min, this._chaseTime.Max)
                          , r = n + h(this._chaseInterval.Min, this._chaseInterval.Max);
                        this._chasedSlimes.push({
                            slime: e,
                            maxChaseTime: n,
                            chaseInterval: r
                        }),
                        t = this._chasedSlimes.length - 1
                    }
                    return i >= this._chasedSlimes[t].chaseInterval ? (this._chasedSlimes.splice(t, 1),
                    !1) : i < this._chasedSlimes[t].maxChaseTime
                }
                ,
                s.isFoodTargetValid = function(e, i, t) {
                    for (var n, r = u.distance(new u(e.Position.x,e.Position.z), i.Position2D), a = o(t); !(n = a()).done; ) {
                        var s = n.value;
                        if (s instanceof v && i.canBeAbsorbed(s.other))
                            if (u.distance(new u(e.Position.x,e.Position.z), i.Position2D) < .6 * r)
                                return !1
                    }
                    return !0
                }
                ,
                s.getDirectionForTarget = function(e, i, t) {
                    var n = new u
                      , r = 0
                      , a = new u(e.Position.x,e.Position.z)
                      , o = u.distance(a, i.Position2D) - i.radius;
                    if (e instanceof S)
                        this.isFoodTargetValid(e, i, t) && (u.subtract(n, a, i.Position2D),
                        n = n.normalize());
                    else if (e instanceof g) {
                        var s = m.totalTime / 1e3;
                        this.isSlimeTargetValid(e, s) && (u.subtract(n, a, i.Position2D),
                        n = n.normalize())
                    }
                    if (o > 0) {
                        var l = e instanceof T ? .2 : 0
                          , c = e instanceof g ? .05 : 0;
                        r = d.clamp(l + c + e.Size / o, 0, 1)
                    } else
                        r = 0;
                    return {
                        targetDirection: n,
                        targetItensity: r
                    }
                }
                ,
                s.setNewTarget = function(e, i, t, n, r) {
                    if (r) {
                        if (null !== i.node && i.canBeAbsorbed(e)) {
                            var a = this.getDirectionForTarget(i, e, n)
                              , s = a.targetDirection
                              , l = a.targetItensity;
                            return {
                                direction: new c(s.x,0,s.y).normalize(),
                                target: i,
                                dangerRatio: l
                            }
                        }
                        return {
                            direction: null,
                            target: i,
                            dangerRatio: 0
                        }
                    }
                    for (var h, m = null, d = 0, f = new u, g = 0, v = t.length, _ = o(t); !(h = _()).done; ) {
                        var S = h.value;
                        if (S.canBeAbsorbed(e)) {
                            var T = this.getDirectionForTarget(S, e, n)
                              , p = T.targetDirection
                              , y = T.targetItensity;
                            f.add(p.multiplyScalar(y)),
                            g += y,
                            (null === m || d < y) && (m = S,
                            d = y)
                        }
                    }
                    return {
                        direction: new c(f.x,0,f.y).normalize(),
                        target: m,
                        dangerRatio: g / v
                    }
                }
                ,
                i
            }(_)).prototype, "_chaseTime", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new f(0,0)
                }
            }),
            B = i(w.prototype, "_chaseInterval", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new f(0,0)
                }
            }),
            z = i(w.prototype, "_chasePlayerChance", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .25
                }
            }),
            P = w)) || P));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/WorldSelection.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts", "./WorldEvents.ts", "./BundleEvents.ts", "./WorldSaveController.ts", "./WorldsBundleLoader.ts"], (function(e) {
    "use strict";
    var r, t, n, o, i, l, d, s, a, c, u, h, v, f, W, p, _, g, b, w, y;
    return {
        setters: [function(e) {
            r = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            n = e.initializerDefineProperty,
            o = e.assertThisInitialized,
            i = e.defineProperty,
            l = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            d = e.cclegacy,
            s = e._decorator,
            a = e.Node,
            c = e.EventHandler,
            u = e.Prefab,
            h = e.instantiate,
            v = e.director,
            f = e.Vec3,
            W = e.Component
        }
        , function(e) {
            p = e.logger
        }
        , function(e) {
            _ = e.projectEvent
        }
        , function(e) {
            g = e.WorldEvents
        }
        , function(e) {
            b = e.BundleEvents
        }
        , function(e) {
            w = e.WorldSaveController
        }
        , function(e) {
            y = e.worldsBundleLoader
        }
        ],
        execute: function() {
            var m, E, I, L, x, z, C;
            d._RF.push({}, "bc4c8bzRddCFJ5qn4hnBJEo", "WorldSelection", void 0);
            var S = s.ccclass
              , B = s.property;
            e("WorldSelection", (m = S("WorldSelection"),
            E = B({
                visible: !0,
                type: [a]
            }),
            I = B({
                visible: !0,
                type: [c]
            }),
            m((z = r((x = function(e) {
                function r() {
                    for (var r, t = arguments.length, l = new Array(t), d = 0; d < t; d++)
                        l[d] = arguments[d];
                    return r = e.call.apply(e, [this].concat(l)) || this,
                    n(o(r), "_worlds", z, o(r)),
                    i(o(r), "_currentWorldIndex", -1),
                    n(o(r), "_onChangedWorld", C, o(r)),
                    r
                }
                t(r, e);
                var d = r.prototype;
                return d.start = function() {
                    y.isDataLoaded ? this.initializeWorlds() : _.once(b[b.Bundle_WorldsLoaded], this.initializeWorlds.bind(this), this)
                }
                ,
                d.initializeWorlds = function() {
                    var e = this
                      , r = this;
                    y.bundle.loadDir("/", u, (function(t, n) {
                        for (var o, i = l(n); !(o = i()).done; ) {
                            var d = o.value
                              , s = h(d);
                            v.getScene().addChild(s),
                            s.setPosition(new f(0,0,0)),
                            s.active = !1,
                            p.log("Loaded world: " + s.name),
                            r._worlds.push(s)
                        }
                        var a = w.world
                          , c = e._worlds.findIndex((function(e) {
                            return e.name === "Environment-World-" + a
                        }
                        ));
                        e.setWorld(c),
                        _.emit(g[g.World_Ready])
                    }
                    ))
                }
                ,
                d.setWorld = function(e) {
                    this._currentWorldIndex !== e && (-1 !== this._currentWorldIndex && (this._worlds[this._currentWorldIndex].active = !1),
                    this._worlds[e].active = !0,
                    this._currentWorldIndex = e,
                    c.emitEvents(this._onChangedWorld, null),
                    w.world = Number.parseInt(this._worlds[e].name.substring("Environment-World-".length)))
                }
                ,
                d.changeWorld = function() {
                    var e = (this._currentWorldIndex + 1) % this._worlds.length;
                    this.setWorld(e)
                }
                ,
                r
            }(W)).prototype, "_worlds", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            C = r(x.prototype, "_onChangedWorld", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            L = x)) || L));
            d._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DailyMissionData.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./DailyMissionState.ts", "./DailyMissionDifficulty.ts", "./DailyMissionReward.ts", "./DailyMissionDisplayName.ts"], (function(t) {
    "use strict";
    var e, i, n, r, s, a, o, u, l, c, f, h, d;
    return {
        setters: [function(t) {
            e = t.defineProperty,
            i = t.applyDecoratedDescriptor,
            n = t.createForOfIteratorHelperLoose,
            r = t.createClass,
            s = t.initializerDefineProperty
        }
        , function(t) {
            a = t.cclegacy,
            o = t._decorator,
            u = t.Enum,
            l = t.instantiate
        }
        , function(t) {
            c = t.DailyMissionState
        }
        , function(t) {
            f = t.DailyMissionDifficulty
        }
        , function(t) {
            h = t.DailyMissionReward
        }
        , function(t) {
            d = t.DailyMissionDisplayName
        }
        ],
        execute: function() {
            var y, _, p, g, v, D, m, S, b, w, C;
            a._RF.push({}, "bc9eeVNmbZLDLueEB82US0j", "DailyMissionData", void 0);
            var M = o.ccclass
              , L = o.property;
            t("DailyMissionDataSave", (function(t) {
                e(this, "_id", ""),
                e(this, "_difficulty", f.None),
                e(this, "_currentState", c.None),
                this._id = t.ID,
                this._currentState = t.currentState,
                this._difficulty = t.difficulty
            }
            )),
            t("DailyMissionData", (y = M("DailyMissionData"),
            _ = L({
                visible: !0,
                type: u(f)
            }),
            p = L({
                visible: !0,
                type: u(c)
            }),
            g = L({
                visible: !0,
                type: [h]
            }),
            v = L({
                visible: !0,
                type: d
            }),
            y((S = i((m = function() {
                function t(i, r, a) {
                    if (s(this, "_difficulty", S, this),
                    s(this, "_currentState", b, this),
                    s(this, "_rewards", w, this),
                    s(this, "_displayName", C, this),
                    e(this, "_onChangedListeners", []),
                    i instanceof t) {
                        var o = i;
                        this._difficulty = o.difficulty,
                        this._displayName = o._displayName,
                        "object" == typeof a && a._currentState ? this._currentState = a._currentState : this._currentState = o.currentState,
                        this._rewards = [];
                        for (var u, f = n(o.rewards); !(u = f()).done; ) {
                            var h = u.value;
                            this._rewards.push(l(h))
                        }
                    } else if ("object" == typeof i) {
                        var y = i;
                        if (y.rewards) {
                            this._rewards = [];
                            for (var _, p = n(y.rewards); !(_ = p()).done; ) {
                                var g = _.value
                                  , v = g.type
                                  , D = g.item
                                  , m = g.quantity;
                                this._rewards.push(r.createReward(v, D, m))
                            }
                        }
                        y.singular && y.plural && (this._displayName = new d(y.singular,y.plural)),
                        "number" == typeof a && (this._difficulty = a),
                        this._currentState = c.None
                    }
                }
                var i = t.prototype;
                return i.initializeMission = function() {
                    this._currentState = c.InProgress
                }
                ,
                i.onChange = function() {
                    for (var t = this._onChangedListeners.length - 1; t >= 0; t--)
                        null !== this._onChangedListeners[t] ? this._onChangedListeners[t]() : this._onChangedListeners.splice(t, 1)
                }
                ,
                i.missionCompleted = function() {
                    this._currentState = c.Completed,
                    this.onChange()
                }
                ,
                i.addOnChangeListener = function(t) {
                    -1 === this._onChangedListeners.findIndex((function(e) {
                        return e === t
                    }
                    )) && this._onChangedListeners.push(t)
                }
                ,
                i.removeOnChangeListener = function(t) {
                    var e = this._onChangedListeners.findIndex((function(e) {
                        return e === t
                    }
                    ));
                    -1 !== e && this._onChangedListeners.splice(e, 1)
                }
                ,
                i.instantiate = function() {
                    if (this.currentState === c.None) {
                        var t = this.createCloneInstance();
                        return t.initializeMission(),
                        t
                    }
                    throw "Invalid Daily Mission"
                }
                ,
                i.redeemRewards = function(t) {
                    if (void 0 === t && (t = 1),
                    this.currentState === c.Completed) {
                        for (var e, i = n(this._rewards); !(e = i()).done; ) {
                            e.value.give(t)
                        }
                        this._currentState = c.Redeemed
                    }
                    this.onChange()
                }
                ,
                r(t, [{
                    key: "difficulty",
                    get: function() {
                        return this._difficulty
                    }
                }, {
                    key: "currentState",
                    get: function() {
                        return this._currentState
                    }
                }, {
                    key: "rewards",
                    get: function() {
                        return this._rewards
                    }
                }]),
                t
            }()).prototype, "_difficulty", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return f.None
                }
            }),
            b = i(m.prototype, "_currentState", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return c.None
                }
            }),
            w = i(m.prototype, "_rewards", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            C = i(m.prototype, "_displayName", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            D = m)) || D));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TimedDisabler.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(i) {
    "use strict";
    var t, e, r, n, o, a, s, u, l;
    return {
        setters: [function(i) {
            t = i.applyDecoratedDescriptor,
            e = i.inheritsLoose,
            r = i.initializerDefineProperty,
            n = i.assertThisInitialized,
            o = i.defineProperty
        }
        , function(i) {
            a = i.cclegacy,
            s = i._decorator,
            u = i.EventHandler,
            l = i.Component
        }
        ],
        execute: function() {
            var c, p, d, b, _, f, h;
            a._RF.push({}, "bcfc10R9vBPuahWOcItGMB5", "TimedDisabler", void 0);
            var v = s.ccclass
              , y = s.property;
            i("TimedDisabler", (c = v("TimedDisabler"),
            p = y({
                visible: !0
            }),
            d = y({
                visible: !0,
                type: [u]
            }),
            c((f = t((_ = function(i) {
                function t() {
                    for (var t, e = arguments.length, a = new Array(e), s = 0; s < e; s++)
                        a[s] = arguments[s];
                    return t = i.call.apply(i, [this].concat(a)) || this,
                    r(n(t), "_duration", f, n(t)),
                    o(n(t), "_bkpDuration", 2),
                    r(n(t), "_disable", h, n(t)),
                    t
                }
                e(t, i);
                var a = t.prototype;
                return a.onLoad = function() {
                    this._bkpDuration = this._duration
                }
                ,
                a.onEnable = function() {
                    this._duration = this._bkpDuration
                }
                ,
                a.update = function(i) {
                    this._duration > 0 && (this._duration -= i,
                    this._duration <= 0 && (u.emitEvents(this._disable),
                    this._duration = 0))
                }
                ,
                t
            }(l)).prototype, "_duration", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 2
                }
            }),
            h = t(_.prototype, "_disable", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            b = _)) || b));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS_Slime_ModelLoader.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./SkinSelectionEvents.ts", "./SkinSaveController.ts"], (function(e) {
    "use strict";
    var n, t, i, r, o, a, s, l, c, u, d, S, f, _, h, p;
    return {
        setters: [function(e) {
            n = e.applyDecoratedDescriptor,
            t = e.initializerDefineProperty,
            i = e.inheritsLoose,
            r = e.assertThisInitialized,
            o = e.defineProperty,
            a = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            s = e.cclegacy,
            l = e._decorator,
            c = e.Prefab,
            u = e.Node,
            d = e.EventHandler,
            S = e.instantiate,
            f = e.Component
        }
        , function(e) {
            _ = e.projectEvent
        }
        , function(e) {
            h = e.SkinEvents
        }
        , function(e) {
            p = e.SkinSaveController
        }
        ],
        execute: function() {
            var k, v, b, y, m, I, D, g, M, P, w, E, L, z, C;
            s._RF.push({}, "c1182oPML1BJKpLNmjmdZdK", "TS_Slime_ModelLoader", void 0);
            var H = l.ccclass
              , T = l.property
              , j = (k = H("ModelEntry"),
            v = T({
                type: c
            }),
            k((m = n((y = function() {
                t(this, "id", m, this),
                t(this, "prefab", I, this)
            }
            ).prototype, "id", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            I = n(y.prototype, "prefab", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            b = y)) || b);
            e("TS_Slime_ModelLoader", (D = H("TS_Slime_ModelLoader"),
            g = T({
                type: u,
                visible: !0
            }),
            M = T({
                type: [j],
                visible: !0
            }),
            P = T({
                type: [d],
                visible: !0
            }),
            D((L = n((E = function(e) {
                function n() {
                    for (var n, i = arguments.length, a = new Array(i), s = 0; s < i; s++)
                        a[s] = arguments[s];
                    return n = e.call.apply(e, [this].concat(a)) || this,
                    t(r(n), "_modelHolder", L, r(n)),
                    t(r(n), "_entries", z, r(n)),
                    t(r(n), "_onModelSet", C, r(n)),
                    o(r(n), "_modelsInstances", []),
                    o(r(n), "_currentModelIndex", -1),
                    o(r(n), "_currentSkinID", ""),
                    o(r(n), "_newSkinID", ""),
                    n
                }
                i(n, e);
                var s = n.prototype;
                return s.start = function() {
                    var e = this;
                    e._currentSkinID = p.skin;
                    for (var n, t = function() {
                        var t = n.value
                          , i = e.createModelInstance(t);
                        e._modelsInstances.push(i),
                        t.id !== e._currentSkinID ? e.scheduleOnce((function() {
                            i.active = !1
                        }
                        ), .01) : d.emitEvents(e._onModelSet, i)
                    }, i = a(e._entries); !(n = i()).done; )
                        t()
                }
                ,
                s.onEnable = function() {
                    _.on(h[h.Skin_PlayerSkinChanged], this.setPlayerSkin, this),
                    _.on(h[h.Skin_ClosedSkinPanel], this.changeSkin, this)
                }
                ,
                s.onDisable = function() {
                    _.off(h[h.Skin_PlayerSkinChanged], this.setPlayerSkin, this),
                    _.off(h[h.Skin_ClosedSkinPanel], this.changeSkin, this)
                }
                ,
                s.createModelInstance = function(e) {
                    var n = e.prefab.data.children[0]
                      , t = S(n);
                    return t.setParent(this._modelHolder),
                    t
                }
                ,
                s.setPlayerSkin = function(e) {
                    this._newSkinID = e
                }
                ,
                s.changeSkin = function() {
                    "" !== this._newSkinID && this._currentSkinID !== this._newSkinID && this.activateSkin(this._newSkinID)
                }
                ,
                s.activateSkin = function(e) {
                    var n = this
                      , t = this._entries.findIndex((function(e) {
                        return e.id === n._currentSkinID
                    }
                    ));
                    -1 !== t && (this._modelsInstances[t].active = !1);
                    var i = this._entries.findIndex((function(n) {
                        return n.id === e
                    }
                    ));
                    -1 !== i && (this._modelsInstances[i].active = !0,
                    d.emitEvents(this._onModelSet, this._modelsInstances[i])),
                    this._currentSkinID = e
                }
                ,
                n
            }(f)).prototype, "_modelHolder", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            z = n(E.prototype, "_entries", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            C = n(E.prototype, "_onModelSet", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            w = E)) || w));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TutorialController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TutorialSaveController.ts"], (function(t) {
    "use strict";
    var i, r, e, o, l, n, a, u, s, c;
    return {
        setters: [function(t) {
            i = t.applyDecoratedDescriptor,
            r = t.inheritsLoose,
            e = t.initializerDefineProperty,
            o = t.assertThisInitialized,
            l = t.defineProperty
        }
        , function(t) {
            n = t.cclegacy,
            a = t._decorator,
            u = t.EventHandler,
            s = t.Component
        }
        , function(t) {
            c = t.TutorialSaveController
        }
        ],
        execute: function() {
            var h, p, T, f, v, _, d;
            n._RF.push({}, "c19c6UdX31OlI3xN6kAGLZx", "TutorialController", void 0);
            var y = a.ccclass
              , w = a.property;
            t("TutorialController", (h = y("TutorialController"),
            p = w({
                visible: !0,
                type: [u]
            }),
            T = w({
                visible: !0,
                type: [u]
            }),
            h((_ = i((v = function(t) {
                function i() {
                    for (var i, r = arguments.length, n = new Array(r), a = 0; a < r; a++)
                        n[a] = arguments[a];
                    return i = t.call.apply(t, [this].concat(n)) || this,
                    e(o(i), "_showTutorial", _, o(i)),
                    e(o(i), "_hideTutorial", d, o(i)),
                    l(o(i), "_active", !1),
                    i
                }
                r(i, t);
                var n = i.prototype;
                return n.start = function() {
                    c.showMenuTutorial && this.showTutorial()
                }
                ,
                n.showTutorial = function() {
                    this._active = !0,
                    u.emitEvents(this._showTutorial, null)
                }
                ,
                n.hideTutorial = function() {
                    this._active = !1,
                    u.emitEvents(this._hideTutorial, null)
                }
                ,
                n.toggleTutorial = function() {
                    this._active ? this.hideTutorial() : this.showTutorial()
                }
                ,
                i
            }(s)).prototype, "_showTutorial", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            d = i(v.prototype, "_hideTutorial", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            f = v)) || f));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-UI-Button-Helper.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts"], (function(t) {
    "use strict";
    var e, n, r, o, i, u, a, c, l, s;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            r = t.initializerDefineProperty,
            o = t.assertThisInitialized,
            i = t.defineProperty
        }
        , function(t) {
            u = t.cclegacy,
            a = t._decorator,
            c = t.Button,
            l = t.Component
        }
        , function(t) {
            s = t.logger
        }
        ],
        execute: function() {
            var p, _, b, f, g, h;
            u._RF.push({}, "c220ezwrChLSYwuQOQF0brq", "TS-UI-Button-Helper", void 0);
            var d = a.ccclass
              , v = a.property
              , y = a.requireComponent;
            t("TS_UI_Button_Helper", (p = d("TS_UI_Button_Helper"),
            _ = y(c),
            b = v({
                visible: !0
            }),
            p(f = _((h = e((g = function(t) {
                function e() {
                    for (var e, n = arguments.length, u = new Array(n), a = 0; a < n; a++)
                        u[a] = arguments[a];
                    return e = t.call.apply(t, [this].concat(u)) || this,
                    r(o(e), "_debug", h, o(e)),
                    i(o(e), "_button", null),
                    e
                }
                n(e, t);
                var u = e.prototype;
                return u.onLoad = function() {
                    this._button = this.node.getComponent(c)
                }
                ,
                u.activate = function() {
                    this._button.interactable = !0
                }
                ,
                u.deactivate = function() {
                    this._button.interactable = !1
                }
                ,
                u.update = function() {
                    this._debug && s.log("Button Interactable: " + this._button.interactable)
                }
                ,
                e
            }(l)).prototype, "_debug", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            f = g)) || f) || f));
            u._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS_Slime_MaxSpeed.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./TS-Settings-Slime.ts"], (function(e) {
    "use strict";
    var t, i, r, n, a, l, o, p, s, u, c, S, d, _;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            r = e.initializerDefineProperty,
            n = e.assertThisInitialized,
            a = e.defineProperty,
            l = e.createForOfIteratorHelperLoose,
            o = e.createClass
        }
        , function(e) {
            p = e.cclegacy,
            s = e._decorator,
            u = e.EventHandler,
            c = e.Prefab,
            S = e.Component
        }
        , function(e) {
            d = e.logger
        }
        , function(e) {
            _ = e.TS_Settings_Slime
        }
        ],
        execute: function() {
            var b, f, m, h, M, g, x, y, v, z, w, P, O, T, C, R, D, k, H, L, j;
            p._RF.push({}, "c223bQVaKZH2bqnzZQ0cKnq", "TS_Slime_MaxSpeed", void 0);
            var F = s.ccclass
              , q = s.property;
            e("TS_Slime_MaxSpeed", (b = F("TS_Slime_MaxSpeed"),
            f = q([u]),
            m = q({
                visible: !0
            }),
            h = q({
                visible: !0
            }),
            M = q({
                visible: !0
            }),
            g = q({
                visible: !0
            }),
            x = q({
                visible: !0
            }),
            y = q({
                visible: !0
            }),
            v = q({
                visible: !0
            }),
            z = q({
                type: c,
                visible: !0
            }),
            b((O = t((P = function(e) {
                function t() {
                    for (var t, i = arguments.length, l = new Array(i), o = 0; o < i; o++)
                        l[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(l)) || this,
                    r(n(t), "onMaxSpeedChanged", O, n(t)),
                    r(n(t), "_a", T, n(t)),
                    r(n(t), "_b", C, n(t)),
                    r(n(t), "_c", R, n(t)),
                    r(n(t), "_d", D, n(t)),
                    r(n(t), "_e", k, n(t)),
                    r(n(t), "_a2", H, n(t)),
                    r(n(t), "_b2", L, n(t)),
                    r(n(t), "_slimeSettingsPrefab", j, n(t)),
                    a(n(t), "_slimeSettings", null),
                    a(n(t), "_maxSpeedMultipliers", []),
                    a(n(t), "_maxSpeedMultipliersRatio", 1),
                    a(n(t), "_currentSizeMaxSpeed", 0),
                    t
                }
                i(t, e);
                var p = t.prototype;
                return p.setSlimeSize = function(e) {
                    this._currentSizeMaxSpeed = e < 80 ? (this._a * Math.cos(this._b * (e - 1)) - this._c) / this._d + this._e : this._a2 * e + this._b2,
                    this.node.parent.parent.parent.parent.name.includes("Player") && d.log("Max Speed: " + this.node.parent.parent.parent.name + " = " + this._currentSizeMaxSpeed),
                    this.setMaxSpeed()
                }
                ,
                p.setMaxSpeed = function() {
                    u.emitEvents(this.onMaxSpeedChanged, this._currentSizeMaxSpeed * this._maxSpeedMultipliersRatio)
                }
                ,
                p.addMaxSpeedMultiplier = function(e) {
                    -1 === this._maxSpeedMultipliers.indexOf(e) && (this._maxSpeedMultipliers.push(e),
                    this.updateMaxSpeedMultipliers())
                }
                ,
                p.removeMaxSpeedMultiplier = function(e) {
                    var t = this._maxSpeedMultipliers.indexOf(e);
                    -1 !== t && (this._maxSpeedMultipliers.splice(t, 1),
                    this.updateMaxSpeedMultipliers())
                }
                ,
                p.updateMaxSpeedMultipliers = function() {
                    this._maxSpeedMultipliersRatio = 1;
                    for (var e, t = l(this._maxSpeedMultipliers); !(e = t()).done; ) {
                        var i = e.value;
                        this._maxSpeedMultipliersRatio *= i.maxSpeedMultiplier
                    }
                    this.setMaxSpeed()
                }
                ,
                o(t, [{
                    key: "formula",
                    get: function() {
                        return "((a*cos(b*(x-1))-c)/d)+e"
                    }
                }, {
                    key: "formula2",
                    get: function() {
                        return "(a2*x)+b2"
                    }
                }, {
                    key: "slimeSettings",
                    get: function() {
                        if (null === this._slimeSettings) {
                            var e = this._slimeSettingsPrefab.data;
                            this._slimeSettings = e.getComponent(_)
                        }
                        return this._slimeSettings
                    }
                }]),
                t
            }(S)).prototype, "onMaxSpeedChanged", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            t(P.prototype, "formula", [q], Object.getOwnPropertyDescriptor(P.prototype, "formula"), P.prototype),
            T = t(P.prototype, "_a", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 3
                }
            }),
            C = t(P.prototype, "_b", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .04
                }
            }),
            R = t(P.prototype, "_c", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1.4
                }
            }),
            D = t(P.prototype, "_d", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 2
                }
            }),
            k = t(P.prototype, "_e", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 4
                }
            }),
            t(P.prototype, "formula2", [q], Object.getOwnPropertyDescriptor(P.prototype, "formula2"), P.prototype),
            H = t(P.prototype, "_a2", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .01
                }
            }),
            L = t(P.prototype, "_b2", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return -2.8
                }
            }),
            j = t(P.prototype, "_slimeSettingsPrefab", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            w = P)) || w));
            p._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AIThreat.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./AIError.ts"], (function(e) {
    "use strict";
    var t, r, n, i;
    return {
        setters: [function(e) {
            t = e.createClass,
            r = e.defineProperty
        }
        , function(e) {
            n = e.cclegacy
        }
        , function(e) {
            i = e.AIError
        }
        ],
        execute: function() {
            n._RF.push({}, "c3001K8mNdID65UQGEbHfsA", "AIThreat", void 0);
            e("AIThreat", function() {
                function e(e) {
                    r(this, "_threatLevel", 0),
                    r(this, "directionError", new i(0,0)),
                    this._threatLevel = e
                }
                return t(e, [{
                    key: "threatLevel",
                    get: function() {
                        return this._threatLevel
                    }
                }]),
                e
            }());
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PunchPositionTween.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./PunchTweenBase.ts"], (function(e) {
    "use strict";
    var t, n, i, s, o, c, r;
    return {
        setters: [function(e) {
            t = e.inheritsLoose,
            n = e.createClass
        }
        , function(e) {
            i = e.cclegacy,
            s = e._decorator,
            o = e.Vec3,
            c = e.tween
        }
        , function(e) {
            r = e.PunchTweenBase
        }
        ],
        execute: function() {
            var u;
            i._RF.push({}, "c3d3d1BwjRM46w7Jwj5DBqA", "PunchPositionTween", void 0);
            var a = s.ccclass;
            e("PunchPositionTween", a("PunchPositionTween")(u = function(e) {
                function i() {
                    return e.apply(this, arguments) || this
                }
                return t(i, e),
                i.prototype.playSegment = function(e) {
                    var t = this.delay;
                    e > 0 && (t = 0);
                    var n = new o;
                    o.add(n, this.startingValue, this.getSegmentValue(e)),
                    this.tweenCache = c(this.getTarget()).delay(t).to(this.getSegmentDuration(e), {
                        position: n
                    }, this.getTweenOptions(e)).repeat(1),
                    this.tweenCache.start()
                }
                ,
                n(i, [{
                    key: "currentValue",
                    get: function() {
                        return new o(this.getTarget().position)
                    },
                    set: function(e) {
                        this.getTarget().position = e
                    }
                }]),
                i
            }(r)) || u);
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SaveGameEnums2.ts", ["cc"], (function(e) {
    "use strict";
    var a;
    return {
        setters: [function(e) {
            a = e.cclegacy
        }
        ],
        execute: function() {
            var t;
            e("SaveGameEvent", void 0),
            a._RF.push({}, "c3d52sktfZJeoGxZs92nywx", "SaveGameEnums", void 0),
            function(e) {
                e[e.SaveGame_Loaded = 0] = "SaveGame_Loaded"
            }(t || (t = e("SaveGameEvent", {}))),
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PlayerPurseEnums.ts", ["cc"], (function(e) {
    "use strict";
    var r;
    return {
        setters: [function(e) {
            r = e.cclegacy
        }
        ],
        execute: function() {
            var s;
            e("PlayerPurseEvents", void 0),
            r._RF.push({}, "c3e97dRwwpKuK5KxNb1z/4l", "PlayerPurseEnums", void 0),
            function(e) {
                e[e.PlayerPurse_CoinsUpdated = 0] = "PlayerPurse_CoinsUpdated"
            }(s || (s = e("PlayerPurseEvents", {}))),
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-AI-Skills-DivideBehavior.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Range.ts", "./TS_Slime.ts", "./TS-Slime-AI-Skills-BaseBehavior.ts", "./TS-Slime-Skill-Divide.ts"], (function(i) {
    "use strict";
    var e, t, n, l, a, r, s, o, u, c, d, v, _, S, h;
    return {
        setters: [function(i) {
            e = i.applyDecoratedDescriptor,
            t = i.inheritsLoose,
            n = i.initializerDefineProperty,
            l = i.assertThisInitialized,
            a = i.defineProperty
        }
        , function(i) {
            r = i.cclegacy,
            s = i._decorator,
            o = i.Vec2,
            u = i.Vec3,
            c = i.math,
            d = i.randomRangeInt
        }
        , function(i) {
            v = i.Range
        }
        , function(i) {
            _ = i.TS_Slime
        }
        , function(i) {
            S = i.TS_Slime_AI_Skills_BaseBehavior
        }
        , function(i) {
            h = i.TS_Slime_Skill_Divide
        }
        ],
        execute: function() {
            var g, m, f, p, y, b, D, T, k, B;
            r._RF.push({}, "c4fd09awiBOVLbzvyNph8ec", "TS-Slime-AI-Skills-DivideBehavior", void 0);
            var R = s.ccclass
              , I = s.property
              , w = s.executionOrder;
            i("TS_Slime_AI_Skills_DivideBehavior", (g = R("TS_Slime_AI_Skills_DivideBehavior"),
            m = w(4),
            f = I({
                visible: !0,
                type: v
            }),
            p = I({
                visible: !0,
                type: v
            }),
            y = I({
                visible: !0,
                type: h
            }),
            g(b = m((T = e((D = function(i) {
                function e() {
                    for (var e, t = arguments.length, r = new Array(t), s = 0; s < t; s++)
                        r[s] = arguments[s];
                    return e = i.call.apply(i, [this].concat(r)) || this,
                    n(l(e), "_divideRange", T, l(e)),
                    n(l(e), "_uniteDelayRange", k, l(e)),
                    n(l(e), "_divideSkill", B, l(e)),
                    a(l(e), "_uniteTime", 0),
                    e
                }
                t(e, i);
                var r = e.prototype;
                return r.update = function(i) {
                    var e = this._aIBrain.brainState;
                    if (this._divideSkill.canUnite())
                        this._uniteTime -= i,
                        this._uniteTime <= 0 && this.unite();
                    else if (this._divideSkill.canDivide() && !this._aIBrain.brainState.isBoosting && "Chase" === e.behavior && e.target instanceof _ && e.target.canBeAbsorbed(e.slime, e.slime.Size / 2)) {
                        var t = o.distance(e.target.Position2D, e.slime.Position2D) - e.slime.radius
                          , n = u.distance(this._divideSkill.divideDashTargetPosition, e.slime.Position)
                          , l = new u;
                        u.subtract(l, e.target.Position, e.slime.Position),
                        l.y = 0;
                        var a = c.toDegree(u.angle(e.slime.forward, l));
                        t >= 1 && t <= n && a < 10 && this.divide()
                    }
                }
                ,
                r.unite = function() {
                    this._divideSkill.toggleDivide(),
                    this._uniteTime = 0
                }
                ,
                r.divide = function() {
                    this._uniteTime = d(this._uniteDelayRange.Min, this._uniteDelayRange.Max),
                    this._divideSkill.toggleDivide()
                }
                ,
                e
            }(S)).prototype, "_divideRange", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new v
                }
            }),
            k = e(D.prototype, "_uniteDelayRange", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new v
                }
            }),
            B = e(D.prototype, "_divideSkill", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            b = D)) || b) || b));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-AI-Movement-SafeAreaBehavior.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./TS-BattleRoyale-SafeArea.ts", "./TS-Slime-AI-Movement-BaseBehavior.ts"], (function(e) {
    "use strict";
    var t, r, n, a, i, o, c, s, l;
    return {
        setters: [function(e) {
            t = e.inheritsLoose,
            r = e.defineProperty,
            n = e.assertThisInitialized
        }
        , function(e) {
            a = e.cclegacy,
            i = e._decorator,
            o = e.Vec3
        }
        , function(e) {
            c = e.projectEvent
        }
        , function(e) {
            s = e.SafeAreaEvents
        }
        , function(e) {
            l = e.TS_Slime_AI_Movement_BaseBehavior
        }
        ],
        execute: function() {
            var f;
            a._RF.push({}, "c57898Dw0pDS4ZkL7xpzWMF", "TS-Slime-AI-Movement-SafeAreaBehavior", void 0);
            var u = i.ccclass
              , S = (i.property,
            i.executionOrder);
            e("TS_Slime_AI_Movement_SafeAreaBehavior", u("TS_Slime_AI_Movement_SafeAreaBehavior")(f = S(0)(f = function(e) {
                function a() {
                    for (var t, a = arguments.length, i = new Array(a), o = 0; o < a; o++)
                        i[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(i)) || this,
                    r(n(t), "_safeArea", null),
                    t
                }
                t(a, e);
                var i = a.prototype;
                return i.onEnable = function() {
                    c.emit(s[s.SafeArea_GetSafeArea], this)
                }
                ,
                i.setSafeArea = function(e) {
                    null === this._safeArea && (this._safeArea = e)
                }
                ,
                i.getDirection = function(e) {
                    var t = e.slime
                      , r = this._safeArea.getSafeDirection(t.node);
                    return null !== r ? {
                        direction: new o(r.x,0,r.y)
                    } : {
                        direction: null
                    }
                }
                ,
                a
            }(l)) || f) || f);
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AdsEvents.ts", ["cc"], (function(s) {
    "use strict";
    var d;
    return {
        setters: [function(s) {
            d = s.cclegacy
        }
        ],
        execute: function() {
            var e;
            s("AdsEvents", void 0),
            d._RF.push({}, "c703cP/uGhDvZ1pTA7fJayh", "AdsEvents", void 0),
            function(s) {
                s[s.AdsEvents_ShowAd = 0] = "AdsEvents_ShowAd",
                s[s.AdsEvents_LoadAd = 1] = "AdsEvents_LoadAd",
                s[s.AdsEvents_AdLoaded = 2] = "AdsEvents_AdLoaded",
                s[s.AdsEvents_AdShowed = 3] = "AdsEvents_AdShowed",
                s[s.AdsEvents_AdFailedToShow = 4] = "AdsEvents_AdFailedToShow"
            }(e || (e = s("AdsEvents", {}))),
            d._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-PositionTracker.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, r, i, n, o, a, c, u, l;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            i = e.initializerDefineProperty,
            n = e.assertThisInitialized
        }
        , function(e) {
            o = e.cclegacy,
            a = e._decorator,
            c = e.Node,
            u = e.EventHandler,
            l = e.Component
        }
        ],
        execute: function() {
            var s, p, d, f, y, g, h;
            o._RF.push({}, "c74e9d9WNdOj6e8YO3NqunG", "TS-PositionTracker", void 0);
            var T = a.ccclass
              , b = a.property;
            e("TS_PositionTracker", (s = T("TS_PositionTracker"),
            p = b(c),
            d = b(u),
            s((g = t((y = function(e) {
                function t() {
                    for (var t, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                        o[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    i(n(t), "target", g, n(t)),
                    i(n(t), "onUpdate", h, n(t)),
                    t
                }
                return r(t, e),
                t.prototype.update = function() {
                    this.onUpdate.emit([this.target.position])
                }
                ,
                t
            }(l)).prototype, "target", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            h = t(y.prototype, "onUpdate", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            f = y)) || f));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SurviveDailyMissionData.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./ENUM-GameEvents.ts", "./DailyMissionState.ts", "./BooleanDailyMissionData.ts"], (function(t) {
    "use strict";
    var i, e, n, a, s, r, o, u, c, l, v, h;
    return {
        setters: [function(t) {
            i = t.inheritsLoose,
            e = t.defineProperty,
            n = t.assertThisInitialized,
            a = t.createClass
        }
        , function(t) {
            s = t.cclegacy,
            r = t._decorator,
            o = t.game
        }
        , function(t) {
            u = t.projectEvent
        }
        , function(t) {
            c = t.GameEvents
        }
        , function(t) {
            l = t.DailyMissionState
        }
        , function(t) {
            v = t.BooleanDailyMissionDataSave,
            h = t.BooleanDailyMissionData
        }
        ],
        execute: function() {
            var f, d, y, _;
            s._RF.push({}, "c75ddg4i95AqaNj991VXdy3", "SurviveDailyMissionData", void 0);
            var m = r.ccclass;
            r.property,
            t("SurviveDailyMissionDataSave", m("SurviveDailyMissionDataSave")(f = function(t) {
                function e() {
                    return t.apply(this, arguments) || this
                }
                return i(e, t),
                e
            }(v)) || f),
            t("SurviveDailyMissionData", m("SurviveDailyMissionData")((_ = y = function(t) {
                function s(i, a, s) {
                    var r;
                    return r = t.call(this, i, a, s) || this,
                    e(n(r), "_duration", 0),
                    e(n(r), "_startTime", 0),
                    e(n(r), "_listeningEvents", !1),
                    r._duration = i instanceof h ? i._duration : i.value,
                    r
                }
                i(s, t);
                var r = s.prototype;
                return r.createCloneInstance = function() {
                    return new s(this)
                }
                ,
                r.enableListeners = function() {
                    this.currentState === l.InProgress && (this._listeningEvents = !0,
                    u.on(c[c.Game_Start], this.gameStarted, this),
                    u.on(c[c.Game_Over], this.gameOver, this))
                }
                ,
                r.disableListeners = function() {
                    this._listeningEvents && (u.off(c[c.Game_Start], this.gameStarted, this),
                    u.off(c[c.Game_Over], this.gameOver, this))
                }
                ,
                r.gameStarted = function() {
                    this._startTime = o.totalTime / 1e3
                }
                ,
                r.gameOver = function() {
                    o.totalTime / 1e3 - this._startTime >= this.duration && this.complete(),
                    this.disableListeners()
                }
                ,
                a(s, [{
                    key: "duration",
                    get: function() {
                        return this._duration
                    }
                }, {
                    key: "ID",
                    get: function() {
                        return s.ID
                    }
                }, {
                    key: "displayName",
                    get: function() {
                        return this._displayName.getName(["value"], [this._duration], 1 === this._duration)
                    }
                }], [{
                    key: "ID",
                    get: function() {
                        return this._id
                    }
                }]),
                s
            }(h),
            e(y, "_id", "survive"),
            d = _)) || d);
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/CloneData.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TS_Slime.ts", "./TS-Slime-Skill-Divide.ts"], (function(e) {
    "use strict";
    var t, i, n, o, l, r, s, c;
    return {
        setters: [function(e) {
            t = e.createClass,
            i = e.defineProperty
        }
        , function(e) {
            n = e.cclegacy,
            o = e._decorator,
            l = e.RigidBody,
            r = e.game
        }
        , function(e) {
            s = e.TS_Slime
        }
        , function(e) {
            c = e.TS_Slime_Skill_Divide
        }
        ],
        execute: function() {
            var u;
            n._RF.push({}, "c78f8Mpmw1LfK6djyfaKSeC", "CloneData", void 0);
            var a = o.ccclass;
            e("CloneData", a("CloneData")(u = function() {
                function e(e) {
                    i(this, "_node", null),
                    i(this, "_slime", null),
                    i(this, "_body", null),
                    i(this, "_divideSkill", null),
                    i(this, "_creationTime", null);
                    try {
                        this._node = e,
                        this._slime = e.getComponent(s),
                        this._body = e.getComponent(l),
                        this._divideSkill = e.getComponentInChildren(c),
                        this._creationTime = r.totalTime
                    } catch (t) {
                        throw "Couldn't create Clone Data from Node: " + e
                    }
                }
                return t(e, [{
                    key: "node",
                    get: function() {
                        return this._node
                    }
                }, {
                    key: "slime",
                    get: function() {
                        return this._slime
                    }
                }, {
                    key: "body",
                    get: function() {
                        return this._body
                    }
                }, {
                    key: "divideSkill",
                    get: function() {
                        return this._divideSkill
                    }
                }, {
                    key: "creationTime",
                    get: function() {
                        return this._creationTime
                    }
                }]),
                e
            }()) || u);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AISafeAreaThreat.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./AIThreat.ts"], (function(e) {
    "use strict";
    var t, r, a, i, n, s, c, l, o, h;
    return {
        setters: [function(e) {
            t = e.inheritsLoose,
            r = e.createClass,
            a = e.defineProperty,
            i = e.assertThisInitialized
        }
        , function(e) {
            n = e.cclegacy,
            s = e.Vec2,
            c = e.math,
            l = e.Vec3,
            o = e.randomRange
        }
        , function(e) {
            h = e.AIThreat
        }
        ],
        execute: function() {
            n._RF.push({}, "c8220veeIdE5IzjLQnIfJrq", "AISafeAreaThreat", void 0);
            e("AISafeAreaThreat", function(e) {
                function n(t, r) {
                    var s, c = n.getThreatLevel(t, r);
                    return s = e.call(this, c) || this,
                    a(i(s), "_safeArea", null),
                    a(i(s), "_slime", null),
                    s._safeArea = t,
                    s._slime = r,
                    s
                }
                return t(n, e),
                n.getThreatLevel = function(e, t) {
                    var r = e.radius
                      , a = s.distance(e.center, t.Position2D)
                      , i = c.clamp(a / r, 0, 2);
                    return i > .8 && i <= 1 ? c.lerp(0, .5, i) : i > 1 ? t.Size > 0 ? 100 / (99 + t.Size) * 1.2 : 1 : 0
                }
                ,
                n.prototype.recalculateThreat = function() {
                    var e = n.getThreatLevel(this._safeArea, this._slime);
                    return e = Math.round(100 * e) / 100,
                    this._threatLevel !== e ? new n(this._safeArea,this._slime) : this
                }
                ,
                r(n, [{
                    key: "direction",
                    get: function() {
                        if (this._threatLevel > 0) {
                            var e = new s;
                            s.subtract(e, this._safeArea.center, this._slime.Position2D);
                            var t = new l(e.x,0,e.y)
                              , r = this.directionError.evaluate(1 - c.clamp(this.threatLevel, 0, 1))
                              , a = c.toRadian(o(-r, r));
                            return l.rotateY(t, t, l.ZERO, a),
                            t.normalize()
                        }
                        return new l(0,0,0)
                    }
                }]),
                n
            }(h));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Node.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts"], (function(e) {
    "use strict";
    var t, i, n, a, r, o, c, s, l, u;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            n = e.initializerDefineProperty,
            a = e.assertThisInitialized,
            r = e.defineProperty
        }
        , function(e) {
            o = e.cclegacy,
            c = e._decorator,
            s = e.EventHandler,
            l = e.Component
        }
        , function(e) {
            u = e.logger
        }
        ],
        execute: function() {
            var v, b, p, d, h, f, _, y, g, m, D, S, w;
            o._RF.push({}, "c83f3h67FpJDoLcaBUEDjiF", "TS-Node", void 0);
            var z = c.ccclass
              , E = c.property;
            e("TS_Node", (v = z("TS_Node"),
            b = E({
                visible: !0
            }),
            p = E({
                visible: !0,
                type: [s]
            }),
            d = E({
                visible: !0,
                type: [s]
            }),
            h = E({
                visible: !0
            }),
            f = E({
                visible: !0
            }),
            v((g = t((y = function(e) {
                function t() {
                    for (var t, i = arguments.length, o = new Array(i), c = 0; c < i; c++)
                        o[c] = arguments[c];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    n(a(t), "_disableOnStart", g, a(t)),
                    n(a(t), "_onEnable", m, a(t)),
                    n(a(t), "_onDisable", D, a(t)),
                    n(a(t), "_debug", S, a(t)),
                    n(a(t), "_active", w, a(t)),
                    r(a(t), "_bkpActive", !1),
                    t
                }
                i(t, e);
                var o = t.prototype;
                return o.activate = function() {
                    this.node.active = !0,
                    s.emitEvents(this._onEnable)
                }
                ,
                o.deactivate = function() {
                    this.node.active = !1,
                    s.emitEvents(this._onDisable)
                }
                ,
                o.activatewithDelay = function(e, t) {
                    var i = this;
                    if (t && void 0 === e)
                        try {
                            e = Number.parseFloat(t.toString())
                        } catch (t) {
                            e = void 0
                        }
                    e && "number" == typeof e ? this.scheduleOnce((function() {
                        return i.activate()
                    }
                    ), e) : this.activate()
                }
                ,
                o.deactivatewithDelay = function(e, t) {
                    var i = this;
                    t && "number" == typeof t && void 0 === e && (e = t),
                    e && "number" == typeof e ? this.scheduleOnce((function() {
                        return i.deactivate()
                    }
                    ), e) : this.deactivate()
                }
                ,
                o.lateUpdate = function() {
                    this._disableOnStart && (this._disableOnStart = !1,
                    this.deactivate()),
                    this._debug && (!0 === this._bkpActive && !1 === this.node.active ? (this._bkpActive = this.node.active,
                    u.log("Node Helper: " + this.node.name + ": deactivate")) : !1 === this._bkpActive && !0 === this.node.active && (this._bkpActive = this.node.active,
                    u.log("Node Helper: " + this.node.name + ": activate")))
                }
                ,
                t
            }(l)).prototype, "_disableOnStart", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            m = t(y.prototype, "_onEnable", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            D = t(y.prototype, "_onDisable", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            S = t(y.prototype, "_debug", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            w = t(y.prototype, "_active", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            _ = y)) || _));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ENUM-GameEvents.ts", ["cc"], (function(e) {
    "use strict";
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }
        ],
        execute: function() {
            var a;
            e("GameEvents", void 0),
            t._RF.push({}, "c9032YDE1xH+p/TwxMR+aSg", "ENUM-GameEvents", void 0),
            function(e) {
                e[e.Game_Start = 0] = "Game_Start",
                e[e.Game_Started = 1] = "Game_Started",
                e[e.Game_Defeat = 2] = "Game_Defeat",
                e[e.Game_Victory = 3] = "Game_Victory",
                e[e.Game_Over = 4] = "Game_Over",
                e[e.Game_TotalSlimes = 5] = "Game_TotalSlimes"
            }(a || (a = e("GameEvents", {}))),
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Camera-Zoom.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./SlimeEvents.ts", "./TS-Camera-Gameplay.ts", "./TS-Slime-Player.ts"], (function(e) {
    "use strict";
    var i, t, r, a, n, l, o, s, f, m, u, S, c;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            r = e.initializerDefineProperty,
            a = e.assertThisInitialized,
            n = e.defineProperty
        }
        , function(e) {
            l = e.cclegacy,
            o = e._decorator,
            s = e.Vec3,
            f = e.Component
        }
        , function(e) {
            m = e.projectEvent
        }
        , function(e) {
            u = e.SlimeEvents
        }
        , function(e) {
            S = e.TS_Camera_Gameplay
        }
        , function(e) {
            c = e.TS_Slime_Player
        }
        ],
        execute: function() {
            var p, h, y, _, d, z, v, g, w;
            l._RF.push({}, "ca69bTqdzBPx5RtY5ix/2uU", "TS-Camera-Zoom", void 0);
            var b = o.ccclass
              , T = o.property
              , O = o.executionOrder;
            e("TS_Camera_Zoom", (p = b("TS_Camera_Zoom"),
            h = O(-1),
            y = T(S),
            p(_ = h((z = i((d = function(e) {
                function i() {
                    for (var i, t = arguments.length, l = new Array(t), o = 0; o < t; o++)
                        l[o] = arguments[o];
                    return i = e.call.apply(e, [this].concat(l)) || this,
                    r(a(i), "cameraController", z, a(i)),
                    n(a(i), "tweening", !1),
                    n(a(i), "targetOffsetValue", new s),
                    r(a(i), "zoomSpeed", v, a(i)),
                    r(a(i), "minOffset", g, a(i)),
                    r(a(i), "maxOffset", w, a(i)),
                    n(a(i), "_playerSlimes", []),
                    n(a(i), "_playerTotalSize", 0),
                    i
                }
                t(i, e);
                var l = i.prototype;
                return l.onLoad = function() {
                    m.on(u[u.Slime_NewSlime], this.addNewSlime, this),
                    m.on(u[u.Slime_SlimeAbsorbed], this.removeSlime, this),
                    m.on(u[u.Slime_SlimeDied], this.removeSlime, this)
                }
                ,
                l.onDestroy = function() {
                    m.off(u[u.Slime_NewSlime], this.addNewSlime, this),
                    m.off(u[u.Slime_SlimeAbsorbed], this.removeSlime, this),
                    m.off(u[u.Slime_SlimeDied], this.removeSlime, this)
                }
                ,
                l.addNewSlime = function(e) {
                    if (e instanceof c) {
                        this._playerSlimes.push(e);
                        for (var i = 0; i < this._playerSlimes.length; i++)
                            this._playerTotalSize += e.Size;
                        this.updatePlayerSize()
                    }
                }
                ,
                l.removeSlime = function(e) {
                    if (e instanceof c) {
                        var i = this._playerSlimes.findIndex((function(i) {
                            return i === e
                        }
                        ));
                        if (-1 != i) {
                            this._playerSlimes.splice(i, 1);
                            for (var t = 0; t < this._playerSlimes.length; t++)
                                this._playerTotalSize += e.Size;
                            this.updatePlayerSize()
                        }
                    }
                }
                ,
                l.updatePlayerSize = function(e) {
                    e && (this._playerTotalSize = e);
                    var i = (10 - 10 / (.01 * (this._playerTotalSize + 89.2)) + 2 - 1) / 9
                      , t = new s;
                    s.lerp(t, this.minOffset, this.maxOffset, i),
                    this.targetOffsetValue = t,
                    this.tweening = !0
                }
                ,
                l.update = function(e) {
                    for (var i = 0, t = this._playerSlimes.length - 1; t >= 0; t--)
                        i += this._playerSlimes[t].Size;
                    if (i !== this._playerTotalSize && this.updatePlayerSize(i),
                    this.tweening) {
                        var r = new s;
                        s.lerp(r, this.cameraController.Offset, this.targetOffsetValue, e * this.zoomSpeed),
                        this.cameraController.setOffset(r),
                        s.distance(r, this.targetOffsetValue) < .1 && (this.tweening = !1)
                    }
                }
                ,
                i
            }(f)).prototype, "cameraController", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            v = i(d.prototype, "zoomSpeed", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 10
                }
            }),
            g = i(d.prototype, "minOffset", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new s
                }
            }),
            w = i(d.prototype, "maxOffset", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new s
                }
            }),
            _ = d)) || _) || _));
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SkinSelection-SetTexture.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./SkinSelectionEvents.ts", "./SkinSaveController.ts", "./ItemsSaveController.ts", "./StoreController.ts"], (function(e) {
    "use strict";
    var t, i, n, r, s, o, u, c, l, S, d, a, h, p, k, _, I;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.defineProperty,
            n = e.inheritsLoose,
            r = e.initializerDefineProperty,
            s = e.assertThisInitialized
        }
        , function(e) {
            o = e.cclegacy,
            u = e._decorator,
            c = e.Enum,
            l = e.EventHandler,
            S = e.Sprite,
            d = e.SpriteFrame,
            a = e.Component
        }
        , function(e) {
            h = e.projectEvent
        }
        , function(e) {
            p = e.SkinEvents
        }
        , function(e) {
            k = e.SkinSaveController
        }
        , function(e) {
            _ = e.ItemsSaveController
        }
        , function(e) {
            I = e.StoreEvents
        }
        ],
        execute: function() {
            var D, f, v, x, b, y, E, C, N, g, m, M, q, w, T, U, L, P, z, R;
            o._RF.push({}, "cbdbcNUMMpM2Zn1GdDAXSDN", "SkinSelection-SetTexture", void 0);
            var B, F = u.ccclass, j = u.property;
            !function(e) {
                e[e.None = 0] = "None",
                e[e.LockedSelected = 1] = "LockedSelected",
                e[e.LockedNotSelected = 2] = "LockedNotSelected",
                e[e.UnlockedSelected = 3] = "UnlockedSelected",
                e[e.UnlockedNotSelected = 4] = "UnlockedNotSelected",
                e[e.EquippedSelected = 5] = "EquippedSelected",
                e[e.EquippedNotSelected = 6] = "EquippedNotSelected"
            }(B || (B = {}));
            var A = e("SkinTextureStateEntry", (D = F("SkinTextureStateEntry"),
            f = j({
                visible: !0,
                type: c(B)
            }),
            v = j({
                visible: !0,
                type: [l]
            }),
            D((y = t((b = function(e) {
                r(this, "stateID", y, this),
                r(this, "onSetState", E, this),
                this.stateID = e || 0
            }
            ).prototype, "stateID", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return B.None
                }
            }),
            E = t(b.prototype, "onSetState", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            x = b)) || x));
            e("SkinSelection_SetTexture", (C = F("SkinSelection_SetTexture"),
            N = j({
                visible: !0
            }),
            g = j({
                visible: !0,
                type: [A]
            }),
            m = j({
                visible: !0,
                type: S
            }),
            M = j({
                visible: !0,
                type: [d]
            }),
            C((R = z = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), u = 0; u < n; u++)
                        o[u] = arguments[u];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    r(s(t), "_textureID", T, s(t)),
                    i(s(t), "_skinModelID", ""),
                    r(s(t), "_skinStates", U, s(t)),
                    i(s(t), "_currentSkinState", null),
                    r(s(t), "_spriteRenderer", L, s(t)),
                    r(s(t), "_iconTextures", P, s(t)),
                    t
                }
                n(t, e);
                var o = t.prototype;
                return o.onEnable = function() {
                    var e = k.skin.split("-");
                    this._skinModelID = e[0],
                    this.updateButtonUI(),
                    t._selectedTextureID = Number.parseInt(e[1]),
                    h.on(p[p.Skin_SetModel], this.setCurrentModel, this),
                    h.on(I[I.Store_ItemPurchased], this.newSkinPurchased, this),
                    h.on(p[p.Skin_PlayerSkinChanged], this.playerSkinChanged, this),
                    this.updateState()
                }
                ,
                o.onDisable = function() {
                    h.off(p[p.Skin_SetModel], this.setCurrentModel, this),
                    h.off(I[I.Store_ItemPurchased], this.newSkinPurchased, this),
                    h.off(p[p.Skin_PlayerSkinChanged], this.playerSkinChanged, this)
                }
                ,
                o.update = function() {
                    t._selectedTextureID === this._textureID ? this._currentSkinState.stateID === B.LockedNotSelected ? this.setCurrentState(B.LockedSelected) : this._currentSkinState.stateID === B.UnlockedNotSelected ? this.setCurrentState(B.UnlockedSelected) : this._currentSkinState.stateID === B.EquippedNotSelected && this.setCurrentState(B.EquippedSelected) : this._currentSkinState.stateID === B.LockedSelected ? this.setCurrentState(B.LockedNotSelected) : this._currentSkinState.stateID === B.UnlockedSelected ? this.setCurrentState(B.UnlockedNotSelected) : this._currentSkinState.stateID === B.EquippedSelected && this.setCurrentState(B.EquippedNotSelected)
                }
                ,
                o.setCurrentModel = function(e) {
                    this._skinModelID = e,
                    this.updateButtonUI(),
                    this.updateState()
                }
                ,
                o.newSkinPurchased = function(e) {
                    e.id.split("-")[1] !== this._textureID.toString() && this._currentSkinState.stateID !== B.EquippedNotSelected && this._currentSkinState.stateID !== B.EquippedSelected || this.updateState()
                }
                ,
                o.playerSkinChanged = function(e) {
                    e.split("-")[1] !== this._textureID.toString() && this._currentSkinState.stateID !== B.EquippedNotSelected && this._currentSkinState.stateID !== B.EquippedSelected || this.updateState()
                }
                ,
                o.getModelIndex = function() {
                    return "bunny" === this._skinModelID ? 3 : "drop" === this._skinModelID ? 0 : "frog" === this._skinModelID ? 1 : "whip" === this._skinModelID ? 2 : void 0
                }
                ,
                o.updateButtonUI = function() {
                    var e = this.getModelIndex();
                    this._spriteRenderer.spriteFrame = this._iconTextures[e]
                }
                ,
                o.updateState = function() {
                    var e, i, n, r, s, o, u = this._skinModelID + "-" + this._textureID, c = k.skin, l = t._selectedTextureID;
                    c === u ? l === this._textureID && (null === (e = this._currentSkinState) || void 0 === e ? void 0 : e.stateID) !== B.EquippedSelected ? this.setCurrentState(B.EquippedSelected) : l !== this._textureID && (null === (i = this._currentSkinState) || void 0 === i ? void 0 : i.stateID) !== B.EquippedNotSelected && this.setCurrentState(B.EquippedNotSelected) : 0 === _.getItem(u).quantity ? (l === this._textureID && (null === (n = this._currentSkinState) || void 0 === n ? void 0 : n.stateID) !== B.LockedSelected || l !== this._textureID && (null === (r = this._currentSkinState) || void 0 === r ? void 0 : r.stateID) !== B.LockedNotSelected) && this.setCurrentState(B.LockedSelected) : l === this._textureID && (null === (s = this._currentSkinState) || void 0 === s ? void 0 : s.stateID) !== B.UnlockedSelected ? this.setCurrentState(B.UnlockedSelected) : l !== this._textureID && (null === (o = this._currentSkinState) || void 0 === o ? void 0 : o.stateID) !== B.UnlockedNotSelected && this.setCurrentState(B.UnlockedNotSelected)
                }
                ,
                o.setCurrentState = function(e) {
                    this._currentSkinState = this._skinStates.find((function(t) {
                        return t.stateID === e
                    }
                    )),
                    l.emitEvents(this._currentSkinState.onSetState)
                }
                ,
                o.click = function() {
                    t._selectedTextureID = this._textureID,
                    h.emit(p[p.Skin_SetTexture], this._textureID)
                }
                ,
                t
            }(a),
            i(z, "_selectedTextureID", -1),
            T = t((w = R).prototype, "_textureID", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            U = t(w.prototype, "_skinStates", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [new A(1), new A(2), new A(3), new A(4), new A(5), new A(6)]
                }
            }),
            L = t(w.prototype, "_spriteRenderer", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            P = t(w.prototype, "_iconTextures", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            q = w)) || q));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS_CharacterMovementBaseSteering.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, r, n, i, a, o, c, s;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            n = e.initializerDefineProperty,
            i = e.assertThisInitialized
        }
        , function(e) {
            a = e.cclegacy,
            o = e._decorator,
            c = e.EventHandler,
            s = e.Component
        }
        ],
        execute: function() {
            var l, u, p, g, h;
            a._RF.push({}, "cc1b726rTdKvqAocoDmRzB3", "TS_CharacterMovementBaseSteering", void 0);
            var v = o.ccclass
              , S = o.property;
            e("TS_CharacterMovementBaseSteering", (l = v("TS_CharacterMovementBaseSteering"),
            u = S({
                type: [c],
                displayOrder: 20
            }),
            l((h = t((g = function(e) {
                function t() {
                    for (var t, r = arguments.length, a = new Array(r), o = 0; o < r; o++)
                        a[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(a)) || this,
                    n(i(t), "onChangedSteering", h, i(t)),
                    t
                }
                return r(t, e),
                t.prototype.setSteering = function(e) {
                    c.emitEvents(this.onChangedSteering, e)
                }
                ,
                t
            }(s)).prototype, "onChangedSteering", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            p = g)) || p));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS_SlimeFood_Settings.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Vec3Range.ts"], (function(e) {
    "use strict";
    var t, i, n, r, o, a, s, l;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.createClass,
            n = e.initializerDefineProperty
        }
        , function(e) {
            r = e.cclegacy,
            o = e._decorator,
            a = e.Node,
            s = e.CurveRange
        }
        , function(e) {
            l = e.Vec3Range
        }
        ],
        execute: function() {
            var u, c, p, h, _, f, g, y, b, w, d, m, S, v, z;
            r._RF.push({}, "cc3333GedlEMZpQ0FikoyC7", "TS_SlimeFood_Settings", void 0);
            var C = o.ccclass
              , R = o.property;
            e("TS_SlimeFood_Settings", (u = C("TS_SlimeFood_Settings"),
            c = R({
                visible: !0
            }),
            p = R({
                visible: !0,
                type: a
            }),
            h = R({
                visible: !0,
                type: a
            }),
            _ = R({
                visible: !0
            }),
            f = R({
                visible: !0,
                type: s
            }),
            g = R({
                visible: !0,
                type: l
            }),
            u((w = t((b = function() {
                function e() {
                    n(this, "_startSize", w, this),
                    n(this, "_model", d, this),
                    n(this, "_shadowModel", m, this),
                    n(this, "_spawnChance", S, this),
                    n(this, "_spawnChanceByTime", v, this),
                    n(this, "_tweenPositionRange", z, this)
                }
                return i(e, [{
                    key: "startSize",
                    get: function() {
                        return this._startSize
                    }
                }, {
                    key: "model",
                    get: function() {
                        return this._model
                    }
                }, {
                    key: "shadowModel",
                    get: function() {
                        return this._shadowModel
                    }
                }, {
                    key: "spawnChance",
                    get: function() {
                        return this._spawnChance
                    }
                }, {
                    key: "spawnChanceByTime",
                    get: function() {
                        return this._spawnChanceByTime
                    }
                }, {
                    key: "tweenPositionRange",
                    get: function() {
                        return this._tweenPositionRange
                    }
                }]),
                e
            }()).prototype, "_startSize", [c], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            d = t(b.prototype, "_model", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            m = t(b.prototype, "_shadowModel", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            S = t(b.prototype, "_spawnChance", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            v = t(b.prototype, "_spawnChanceByTime", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new s
                }
            }),
            z = t(b.prototype, "_tweenPositionRange", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new l
                }
            }),
            y = b)) || y));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/RigidbodyHelper.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(i) {
    "use strict";
    var t, e, n, o, r, c, a;
    return {
        setters: [function(i) {
            t = i.inheritsLoose,
            e = i.defineProperty,
            n = i.assertThisInitialized
        }
        , function(i) {
            o = i.cclegacy,
            r = i._decorator,
            c = i.RigidBody,
            a = i.Component
        }
        ],
        execute: function() {
            var s;
            o._RF.push({}, "cc564Wd7lJMAJFJn8UQKq33", "RigidbodyHelper", void 0);
            var u = r.ccclass
              , d = (r.property,
            r.requireComponent);
            i("RigidBodyHelper", u("RigidBodyHelper")(s = d(c)(s = function(i) {
                function o() {
                    for (var t, o = arguments.length, r = new Array(o), c = 0; c < o; c++)
                        r[c] = arguments[c];
                    return t = i.call.apply(i, [this].concat(r)) || this,
                    e(n(t), "_body", null),
                    e(n(t), "_kinematicCounter", 0),
                    t
                }
                t(o, i);
                var r = o.prototype;
                return r.onLoad = function() {
                    this._body = this.node.getComponent(c)
                }
                ,
                r.enableGravity = function() {
                    this._body.useGravity = !0
                }
                ,
                r.disableGravity = function() {
                    this._body.useGravity = !1
                }
                ,
                r.enableKinematic = function() {
                    0 === this._kinematicCounter && (this._body.isKinematic = !0),
                    this._kinematicCounter++
                }
                ,
                r.disableKinematic = function() {
                    this._kinematicCounter = Math.max(0, this._kinematicCounter - 1),
                    0 === this._kinematicCounter && (this._body.isKinematic = !1)
                }
                ,
                r.enableDynamic = function() {
                    this._body.isDynamic = !0
                }
                ,
                r.disableDynamic = function() {
                    this._body.isDynamic = !1
                }
                ,
                o
            }(a)) || s) || s);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/VirutalJoystick%20enums.ts", ["cc"], (function(t) {
    "use strict";
    var i;
    return {
        setters: [function(t) {
            i = t.cclegacy
        }
        ],
        execute: function() {
            var s;
            t("VirtualJoystickEvent", void 0),
            i._RF.push({}, "cea81xfwhNP8KT0y4dCiHFO", "VirutalJoystick%20enums", void 0),
            function(t) {
                t[t.VistualJoystickPositionUpdated = 0] = "VistualJoystickPositionUpdated"
            }(s || (s = t("VirtualJoystickEvent", {}))),
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/CameraVisiblity.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts"], (function(i) {
    "use strict";
    var t, e, r, n, a, o, s, c;
    return {
        setters: [function(i) {
            t = i.inheritsLoose,
            e = i.defineProperty,
            r = i.assertThisInitialized
        }
        , function(i) {
            n = i.cclegacy,
            a = i._decorator,
            o = i.Camera,
            s = i.Component
        }
        , function(i) {
            c = i.logger
        }
        ],
        execute: function() {
            var l;
            n._RF.push({}, "d0ff8htFnZHB7VZ5iNK3P/g", "CameraVisiblity", void 0);
            var u = a.ccclass
              , p = a.requireComponent;
            i("CameraVisiblity", u("CameraVisiblity")(l = p(o)(l = function(i) {
                function n() {
                    for (var t, n = arguments.length, a = new Array(n), o = 0; o < n; o++)
                        a[o] = arguments[o];
                    return t = i.call.apply(i, [this].concat(a)) || this,
                    e(r(t), "_camera", null),
                    t
                }
                t(n, i);
                var a = n.prototype;
                return a.onEnable = function() {
                    this._camera = this.node.getComponent(o)
                }
                ,
                a.update = function() {
                    c.log("Camera visibility: " + this._camera.visibility)
                }
                ,
                n
            }(s)) || l) || l);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Events-Raiser.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts"], (function(e) {
    "use strict";
    var t, r, n, i, o, s, c, a;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            n = e.initializerDefineProperty,
            i = e.assertThisInitialized
        }
        , function(e) {
            o = e.cclegacy,
            s = e._decorator,
            c = e.Component
        }
        , function(e) {
            a = e.projectEvent
        }
        ],
        execute: function() {
            var u, l, p, v, f;
            o._RF.push({}, "d2017D/nqBC24w++1MXcPXY", "TS-Events-Raiser", void 0);
            var y = s.ccclass
              , _ = s.property;
            e("TS_Events_Raiser", (u = y("TS_Events_Raiser"),
            l = _({
                visible: !0
            }),
            u((f = t((v = function(e) {
                function t() {
                    for (var t, r = arguments.length, o = new Array(r), s = 0; s < r; s++)
                        o[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    n(i(t), "_eventKey", f, i(t)),
                    t
                }
                return r(t, e),
                t.prototype.raise = function() {
                    a.emit(this._eventKey)
                }
                ,
                t
            }(c)).prototype, "_eventKey", [l], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            p = v)) || p));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS_CharacterMovementChaserSteering.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TS_Slime.ts", "./TS-SlimeFood.ts", "./TS_CharacterMovementWandererSteering.ts"], (function(e) {
    "use strict";
    var t, i, r, n, o, s, l, a, h, c, u, d, g, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            r = e.initializerDefineProperty,
            n = e.assertThisInitialized,
            o = e.defineProperty
        }
        , function(e) {
            s = e.cclegacy,
            l = e._decorator,
            a = e.Collider,
            h = e.randomRange,
            c = e.Vec3,
            u = e.Vec2
        }
        , function(e) {
            d = e.TS_Slime
        }
        , function(e) {
            g = e.TS_SlimeFood
        }
        , function(e) {
            p = e.TS_CharacterMovementWandererSteering
        }
        ],
        execute: function() {
            var _, f, m, S, v, y, C, b, T, z, I;
            s._RF.push({}, "d293dAP9fFA1LlaOFGCw2Bb", "TS_CharacterMovementChaserSteering", void 0);
            var F = l.ccclass
              , D = l.property;
            e("TS_CharacterMovementChaserSteering", (_ = F("TS_CharacterMovementChaserSteering"),
            f = D({
                type: d,
                visible: !0
            }),
            m = D({
                type: a,
                visible: !0
            }),
            S = D({
                visible: !0
            }),
            v = D({
                visible: !0
            }),
            _((b = t((C = function(e) {
                function t() {
                    for (var t, i = arguments.length, s = new Array(i), l = 0; l < i; l++)
                        s[l] = arguments[l];
                    return t = e.call.apply(e, [this].concat(s)) || this,
                    r(n(t), "_slime", b, n(t)),
                    r(n(t), "_detectionArea", T, n(t)),
                    o(n(t), "otherSlimes", []),
                    o(n(t), "foods", []),
                    o(n(t), "_targetSlime", null),
                    o(n(t), "_targetFood", null),
                    r(n(t), "_giveUpMinTime", z, n(t)),
                    r(n(t), "_giveUpChance", I, n(t)),
                    o(n(t), "_targetChaseDuration", 0),
                    o(n(t), "_blackListedSlimes", []),
                    t
                }
                i(t, e);
                var s = t.prototype;
                return s.start = function() {
                    this.randomizeDirection()
                }
                ,
                s.onEnable = function() {
                    this._detectionArea.on("onTriggerEnter", this.onTriggerEnter, this),
                    this._detectionArea.on("onTriggerExit", this.onTriggerExit, this)
                }
                ,
                s.onDisable = function() {
                    this._detectionArea.off("onTriggerEnter", this.onTriggerEnter, this),
                    this._detectionArea.off("onTriggerExit", this.onTriggerExit, this)
                }
                ,
                s.onTriggerEnter = function(e) {
                    var t = e.otherCollider.getComponent(d);
                    if (null !== t && t.playerID !== this._slime.playerID)
                        -1 === this.otherSlimes.findIndex((function(e) {
                            return e === t
                        }
                        )) && t.node.activeInHierarchy && this.otherSlimes.push(t);
                    else {
                        var i = e.otherCollider.getComponent(g);
                        null != i && i.node.activeInHierarchy && this.foods.push(i)
                    }
                }
                ,
                s.onTriggerExit = function(e) {
                    var t = e.otherCollider.getComponent(d);
                    if (null !== t && t.playerID !== this._slime.playerID) {
                        var i = this.otherSlimes.findIndex((function(e) {
                            return e === t
                        }
                        ));
                        -1 !== i && this.otherSlimes.splice(i, 1),
                        -1 !== (i = this._blackListedSlimes.findIndex((function(e) {
                            return e === t
                        }
                        ))) && this._blackListedSlimes.splice(i, 1)
                    } else {
                        var r = e.otherCollider.getComponent(g);
                        if (null != r) {
                            var n = this.foods.findIndex((function(e) {
                                return e === r
                            }
                            ));
                            -1 !== n && (this.foods.splice(n, 1),
                            r === this._targetFood && (this._targetFood = null))
                        }
                    }
                }
                ,
                s.giveUpTest = function() {
                    if (null !== this._targetSlime && this._targetChaseDuration >= this._giveUpMinTime && h(0, 1) < this._giveUpChance)
                        return this._blackListedSlimes.push(this._targetSlime),
                        this._targetSlime = null,
                        !0;
                    return !1
                }
                ,
                s.update = function(t) {
                    var i = this;
                    if (0 === this.otherSlimes.length && 0 === this.foods.length)
                        e.prototype.update.call(this, t);
                    else {
                        var r = null
                          , n = 999999;
                        null !== this._targetSlime && this._targetSlime.node.activeInHierarchy && this._targetSlime.Size < this._slime.Size - 1 && (r = this._targetSlime,
                        this._targetSlime.Size,
                        n = c.distance(this._targetSlime.node.position, this._slime.node.position));
                        for (var o = function(e) {
                            var t = i.otherSlimes[e];
                            if (null != t && t.node.activeInHierarchy) {
                                var o = c.distance(t.node.position, i._slime.node.position)
                                  , s = t.Size
                                  , l = -1 !== i._blackListedSlimes.findIndex((function(e) {
                                    return e === t
                                }
                                ));
                                s < i._slime.Size - 1 && o < n && !l && (r = t,
                                n = o,
                                s,
                                i._targetChaseDuration = 0)
                            } else
                                i.otherSlimes.splice(e, 1)
                        }, s = this.otherSlimes.length - 1; s >= 0; s--)
                            o(s);
                        if (this._targetSlime = r,
                        null !== r)
                            this.giveUpTest() ? e.prototype.update.call(this, t) : (this.chase(r.node.position),
                            this._targetChaseDuration += t);
                        else {
                            var l = null
                              , a = 0;
                            null !== this._targetFood && this._targetFood.node.activeInHierarchy && (l = this._targetFood,
                            a = this._targetFood.Size);
                            for (var h = this.foods.length - 1; h >= 0; h--) {
                                var u = this.foods[h];
                                null != u && u.node.activeInHierarchy ? u.Size > a && (l = u,
                                a = u.Size) : this.foods.splice(h, 1)
                            }
                            this._targetFood = l,
                            null !== l ? this.chase(l.node.position) : e.prototype.update.call(this, t)
                        }
                    }
                }
                ,
                s.chase = function(e) {
                    var t = new c;
                    c.subtract(t, e, this._slime.node.position),
                    this.direction = new u(t.x,t.z),
                    this.setSteering(this.direction)
                }
                ,
                t
            }(p)).prototype, "_slime", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            T = t(C.prototype, "_detectionArea", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            z = t(C.prototype, "_giveUpMinTime", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 20
                }
            }),
            I = t(C.prototype, "_giveUpChance", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .2
                }
            }),
            y = C)) || y));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/BooleanDailyMissionData.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./DailyMissionData.ts"], (function(e) {
    "use strict";
    var t, i, o, n, a, l, r, c, s, p;
    return {
        setters: [function(e) {
            t = e.inheritsLoose,
            i = e.applyDecoratedDescriptor,
            o = e.defineProperty,
            n = e.assertThisInitialized,
            a = e.initializerDefineProperty,
            l = e.createClass
        }
        , function(e) {
            r = e.cclegacy,
            c = e._decorator
        }
        , function(e) {
            s = e.DailyMissionDataSave,
            p = e.DailyMissionData
        }
        ],
        execute: function() {
            var u, d, f;
            r._RF.push({}, "d5301lNMXpKh7BqeUZx94E+", "BooleanDailyMissionData", void 0);
            c.ccclass;
            var m = c.property
              , y = e("BooleanDailyMissionDataSave", function(e) {
                function i(t) {
                    var i;
                    return i = e.call(this, t) || this,
                    o(n(i), "_completed", !1),
                    i._completed = t.completed,
                    i
                }
                return t(i, e),
                i
            }(s));
            e("BooleanDailyMissionData", (u = m({
                visible: !0
            }),
            f = i((d = function(e) {
                t(o, e);
                var i = o.prototype;
                function o(t, i, l) {
                    var r;
                    return r = e.call(this, t, i, l) || this,
                    a(n(r), "_completed", f, n(r)),
                    t instanceof o ? "object" == typeof l && l._completed ? r._completed = l._completed : r._completed = t.completed : r._completed = !1,
                    r
                }
                return i.createSaveData = function() {
                    return new y(this)
                }
                ,
                i.complete = function() {
                    this._completed = !0,
                    this.missionCompleted()
                }
                ,
                i.initializeMission = function() {
                    e.prototype.initializeMission.call(this),
                    this._completed = !1
                }
                ,
                l(o, [{
                    key: "completed",
                    get: function() {
                        return this._completed
                    }
                }, {
                    key: "currentFillValue",
                    get: function() {
                        return this._completed ? 1 : 0
                    }
                }, {
                    key: "targetFillValue",
                    get: function() {
                        return 1
                    }
                }]),
                o
            }(p)).prototype, "_completed", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            d));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DailyMissionRewardFactory.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(r) {
    "use strict";
    var t, i, o, e;
    return {
        setters: [function(r) {
            t = r.inheritsLoose
        }
        , function(r) {
            i = r.cclegacy,
            o = r._decorator,
            e = r.Component
        }
        ],
        execute: function() {
            var n;
            i._RF.push({}, "d5422pLbclOVp9zLk4CpnQp", "DailyMissionRewardFactory", void 0);
            var s = o.ccclass;
            o.property,
            r("DailyMissionRewardFactory", s("DailyMissionRewardFactory")(n = function(r) {
                function i() {
                    return r.apply(this, arguments) || this
                }
                return t(i, r),
                i
            }(e)) || n);
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PlayerSlimeSelectionCreator.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./BundleEvents.ts", "./SlimesBundleLoader.ts", "./TS_Slime_ModelSelection.ts"], (function(e) {
    "use strict";
    var n, i, t, l, o, a, r, s, c, d, u, S, p;
    return {
        setters: [function(e) {
            n = e.inheritsLoose,
            i = e.defineProperty,
            t = e.assertThisInitialized,
            l = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            o = e.cclegacy,
            a = e._decorator,
            r = e.Prefab,
            s = e.instantiate,
            c = e.Component
        }
        , function(e) {
            d = e.projectEvent
        }
        , function(e) {
            u = e.BundleEvents
        }
        , function(e) {
            S = e.slimesBundleLoader
        }
        , function(e) {
            p = e.TS_Slime_ModelSelection
        }
        ],
        execute: function() {
            var h;
            o._RF.push({}, "d9040g5wUZNv41Fw6BiBXaR", "PlayerSlimeSelectionCreator", void 0);
            var _ = a.ccclass;
            a.property,
            e("PlayerSlimeSelectionCreator", _("PlayerSlimeSelectionCreator")(h = function(e) {
                function o() {
                    for (var n, l = arguments.length, o = new Array(l), a = 0; a < l; a++)
                        o[a] = arguments[a];
                    return n = e.call.apply(e, [this].concat(o)) || this,
                    i(t(n), "_slimeSelectionManager", null),
                    i(t(n), "_panelOpened", !1),
                    n
                }
                n(o, e);
                var a = o.prototype;
                return a.start = function() {
                    S.isDataLoaded ? this.slimesBundleLoaded() : d.on(u[u.Bundle_SlimesLoaded], this.slimesBundleLoaded, this)
                }
                ,
                a.slimesBundleLoaded = function() {
                    S.bundle.preload("P_Slime_Player_SkinSelection", r)
                }
                ,
                a.prefabLoaded = function(e, n) {
                    if (!e) {
                        var i = s(n);
                        i.setParent(this.node),
                        i.setPosition(0, 0, 0),
                        i.layer = 1 << 23;
                        for (var t, o = l(i.children); !(t = o()).done; ) {
                            t.value.layer = 1 << 23
                        }
                        this._slimeSelectionManager = i.getComponentInChildren(p),
                        this._panelOpened && this._slimeSelectionManager.initialize()
                    }
                }
                ,
                a.openSkinSelectionPanel = function() {
                    this._panelOpened = !0,
                    this.updateSkinSelectionManager()
                }
                ,
                a.closeSkinSelectionPanel = function() {
                    this._panelOpened = !1,
                    this.updateSkinSelectionManager()
                }
                ,
                a.updateSkinSelectionManager = function() {
                    null === this._slimeSelectionManager ? S.bundle.load("P_Slime_Player_SkinSelection", r, this.prefabLoaded.bind(this)) : this._panelOpened ? this._slimeSelectionManager.initialize() : this._slimeSelectionManager.hideModel()
                }
                ,
                o
            }(c)) || h);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-SkillConfig-Shoot.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var i, t, r, o, n, l, u, c;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            r = e.initializerDefineProperty,
            o = e.assertThisInitialized,
            n = e.createClass
        }
        , function(e) {
            l = e.cclegacy,
            u = e._decorator,
            c = e.Component
        }
        ],
        execute: function() {
            var a, s, S, f, p;
            l._RF.push({}, "d9145vAbf9AaYEH5b/AKUMu", "TS-Slime-SkillConfig-Shoot", void 0);
            var h = u.ccclass
              , b = u.property;
            e("TS_Slime_SkillConfig_Shoot", h("TS_Slime_SkillConfig_Shoot")((S = i((s = function(e) {
                function i() {
                    for (var i, t = arguments.length, n = new Array(t), l = 0; l < t; l++)
                        n[l] = arguments[l];
                    return i = e.call.apply(e, [this].concat(n)) || this,
                    r(o(i), "minSize", S, o(i)),
                    r(o(i), "bulletSize", f, o(i)),
                    r(o(i), "shootForce", p, o(i)),
                    i
                }
                return t(i, e),
                n(i, [{
                    key: "MinSize",
                    get: function() {
                        return this.minSize
                    }
                }, {
                    key: "BulletSize",
                    get: function() {
                        return this.bulletSize
                    }
                }, {
                    key: "ShootForce",
                    get: function() {
                        return this.shootForce
                    }
                }]),
                i
            }(c)).prototype, "minSize", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 8
                }
            }),
            f = i(s.prototype, "bulletSize", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 4
                }
            }),
            p = i(s.prototype, "shootForce", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 4
                }
            }),
            a = s)) || a);
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-BattleRoyale-SafeArea.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./Range.ts", "./ENUM-GameEvents.ts"], (function(e) {
    "use strict";
    var t, i, a, r, n, s, o, c, f, u, h, d, _, l, S, p, A, m;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            a = e.initializerDefineProperty,
            r = e.assertThisInitialized,
            n = e.defineProperty,
            s = e.createClass
        }
        , function(e) {
            o = e.cclegacy,
            c = e._decorator,
            f = e.CurveRange,
            u = e.math,
            h = e.Vec2,
            d = e.Node,
            _ = e.game,
            l = e.randomRange,
            S = e.Component
        }
        , function(e) {
            p = e.projectEvent
        }
        , function(e) {
            A = e.Range
        }
        , function(e) {
            m = e.GameEvents
        }
        ],
        execute: function() {
            var v, g, y, R, T, D, b, k, w, x, M, C;
            e("SafeAreaEvents", void 0),
            o._RF.push({}, "d93caQZgFhHt5kPg5dJIWQ5", "TS-BattleRoyale-SafeArea", void 0);
            var z, G = c.ccclass, E = c.property, P = c.executionOrder;
            !function(e) {
                e[e.SafeArea_CurrentState = 0] = "SafeArea_CurrentState",
                e[e.SafeArea_GetSafeArea = 1] = "SafeArea_GetSafeArea",
                e[e.SafeArea_RemoveSafeAreaTracker = 2] = "SafeArea_RemoveSafeAreaTracker",
                e[e.SafeArea_AreaUpdated = 3] = "SafeArea_AreaUpdated",
                e[e.SafeArea_AddSafeAreaMaterial = 4] = "SafeArea_AddSafeAreaMaterial",
                e[e.SafeArea_RemoveSafeAreaMaterial = 5] = "SafeArea_RemoveSafeAreaMaterial"
            }(z || (z = e("SafeAreaEvents", {})));
            e("TS_BattleRoyale_SafeArea", (v = G("TS_BattleRoyale_SafeArea"),
            g = P(-5),
            y = E({
                visible: !0,
                type: A
            }),
            R = E({
                visible: !0
            }),
            T = E({
                visible: !0
            }),
            D = E({
                visible: !0,
                type: f
            }),
            v(b = g((w = t((k = function(e) {
                function t() {
                    for (var t, i = arguments.length, s = new Array(i), o = 0; o < i; o++)
                        s[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(s)) || this,
                    a(r(t), "_radiusRange", w, r(t)),
                    a(r(t), "_changesCenter", x, r(t)),
                    a(r(t), "_shrinkTime", M, r(t)),
                    a(r(t), "_shrinkCurve", C, r(t)),
                    n(r(t), "_elapsedTime", -1),
                    n(r(t), "_currentRadius", 0),
                    n(r(t), "_center", null),
                    n(r(t), "_active", !1),
                    n(r(t), "_safeDirections", []),
                    t
                }
                i(t, e);
                var o = t.prototype;
                return o.onEnable = function() {
                    p.on(m[m.Game_Start], this.gameStarted, this),
                    p.on(m[m.Game_Victory], this.gameOverVictory, this),
                    p.on(z[z.SafeArea_GetSafeArea], this.addSafeAreaTracker, this),
                    this.radius = this._radiusRange.Max
                }
                ,
                o.onDisable = function() {
                    p.off(m[m.Game_Start], this.gameStarted, this),
                    p.off(m[m.Game_Victory], this.gameOverVictory, this),
                    p.off(z[z.SafeArea_GetSafeArea], this.addSafeAreaTracker, this)
                }
                ,
                o.update = function(e) {
                    this._active && this._elapsedTime >= 0 && (this._elapsedTime += e,
                    this.needsToShrinkSafeArea() && this.shrinkSafeArea())
                }
                ,
                o.gameStarted = function() {
                    this._active = !0,
                    this._elapsedTime = 1e-6,
                    p.emit(z[z.SafeArea_CurrentState], this.center)
                }
                ,
                o.gameOverVictory = function() {
                    this._active = !1
                }
                ,
                o.addSafeAreaTracker = function(e) {
                    e.setSafeArea(this)
                }
                ,
                o.shrinkSafeArea = function() {
                    var e = u.clamp(this._shrinkCurve.spline.evaluate(this._elapsedTime / this._shrinkTime), 0, 1);
                    this.radius = u.lerp(this._radiusRange.Min, this._radiusRange.Max, e)
                }
                ,
                o.needsToShrinkSafeArea = function() {
                    return !0
                }
                ,
                o.isInsideSafeArea = function(e) {
                    var t = new h;
                    return e instanceof d ? t = new h(e.position.x,e.position.z) : e instanceof h && (t = e),
                    h.distance(this.center, t) < this.radius
                }
                ,
                o.getSafeDirection = function(e) {
                    var t = this._safeDirections.findIndex((function(t) {
                        return t.node === e
                    }
                    ))
                      , i = _.totalTime / 1e3;
                    return this.isInsideSafeArea(e) || (-1 === t ? (this._safeDirections.push(this.createSafeDirectionData(e, i)),
                    t = this._safeDirections.length - 1) : this._safeDirections[t].expireTime <= i ? this._safeDirections[t] = this.createSafeDirectionData(e, i) : this.isInsideSafeArea(this._safeDirections[t].targetPoint) || (this._safeDirections[t] = this.createSafeDirectionData(e, i))),
                    -1 === t || this._safeDirections[t].expireTime <= i ? null : this._safeDirections[t].direction
                }
                ,
                o.createSafeDirectionData = function(e, t) {
                    var i = this.center.clone();
                    i = i.add(new h(l(-this.radius, this.radius),l(-this.radius, this.radius)));
                    var a = new h(e.position.x,e.position.z)
                      , r = new h;
                    return h.subtract(r, i, a),
                    {
                        node: e,
                        targetPoint: i,
                        direction: r = r.normalize(),
                        expireTime: t + l(1, 5)
                    }
                }
                ,
                s(t, [{
                    key: "radius",
                    get: function() {
                        return this._currentRadius
                    },
                    set: function(e) {
                        this._currentRadius = e,
                        p.emit(z[z.SafeArea_AreaUpdated], this._currentRadius)
                    }
                }, {
                    key: "radiusRatio",
                    get: function() {
                        return (this.radius - this._radiusRange.Min) / (this._radiusRange.Max - this._radiusRange.Min)
                    }
                }, {
                    key: "center",
                    get: function() {
                        return null === this._center && (this._center = new h(this.node.position.x,this.node.position.z)),
                        this._center
                    }
                }]),
                t
            }(S)).prototype, "_radiusRange", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new A
                }
            }),
            x = t(k.prototype, "_changesCenter", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            M = t(k.prototype, "_shrinkTime", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            C = t(k.prototype, "_shrinkCurve", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new f
                }
            }),
            b = k)) || b) || b));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TweenBase.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TweenEnums.ts"], (function(e) {
    "use strict";
    var t, n, i, r, o, a, u, s, l, c, p, f, h;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            i = e.initializerDefineProperty,
            r = e.assertThisInitialized,
            o = e.defineProperty
        }
        , function(e) {
            a = e.cclegacy,
            u = e._decorator,
            s = e.Node,
            l = e.Enum,
            c = e.CCBoolean,
            p = e.EventHandler,
            f = e.Component
        }
        , function(e) {
            h = e.TweenEasing
        }
        ],
        execute: function() {
            var b, y, d, m, g, v, w, C, z, S, R, T, B, E, V, _, D, H, L;
            a._RF.push({}, "d9856qOejhH7aDieMy/A3MW", "TweenBase", void 0);
            var M = u.ccclass
              , O = u.property;
            e("TweenBase", (b = M("TweenBase"),
            y = O(s),
            d = O({
                min: 0,
                unit: "sec"
            }),
            m = O({
                min: 0,
                unit: "sec"
            }),
            g = O({
                type: l(h)
            }),
            v = O(c),
            w = O(c),
            C = O({
                type: [p],
                displayOrder: 20
            }),
            z = O({
                type: [p],
                displayOrder: 20
            }),
            b((T = t((R = function(e) {
                function t() {
                    for (var t, n = arguments.length, a = new Array(n), u = 0; u < n; u++)
                        a[u] = arguments[u];
                    return t = e.call.apply(e, [this].concat(a)) || this,
                    i(r(t), "target", T, r(t)),
                    i(r(t), "delay", B, r(t)),
                    i(r(t), "duration", E, r(t)),
                    i(r(t), "easing", V, r(t)),
                    i(r(t), "useCustomStartValue", _, r(t)),
                    i(r(t), "useRelativeValue", D, r(t)),
                    i(r(t), "onStart", H, r(t)),
                    i(r(t), "onComplete", L, r(t)),
                    o(r(t), "tweenCache", void 0),
                    o(r(t), "tweenReverseCache", void 0),
                    o(r(t), "options", {}),
                    t
                }
                n(t, e);
                var a = t.prototype;
                return a.onLoad = function() {
                    var e = this;
                    this.target || (this.target = this.node),
                    this.options.onStart = function(t) {
                        p.emitEvents(e.onStart, t)
                    }
                    .bind(this),
                    this.options.onComplete = function(t) {
                        p.emitEvents(e.onComplete, t)
                    }
                    .bind(this),
                    this.options.easing = h[this.easing]
                }
                ,
                a.play = function() {
                    this.useCustomStartValue && this.reset(),
                    this.tweenCache.start()
                }
                ,
                a.reset = function() {}
                ,
                a.playReverse = function() {
                    var e;
                    null === (e = this.tweenReverseCache) || void 0 === e || e.start()
                }
                ,
                a.stop = function() {
                    this.tweenCache.stop()
                }
                ,
                t
            }(f)).prototype, "target", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            B = t(R.prototype, "delay", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            E = t(R.prototype, "duration", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            V = t(R.prototype, "easing", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return h.linear
                }
            }),
            _ = t(R.prototype, "useCustomStartValue", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            D = t(R.prototype, "useRelativeValue", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            H = t(R.prototype, "onStart", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            L = t(R.prototype, "onComplete", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            S = R)) || S));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TweenEnums.ts", ["cc"], (function(u) {
    "use strict";
    var n;
    return {
        setters: [function(u) {
            n = u.cclegacy
        }
        ],
        execute: function() {
            var t;
            u("TweenEasing", void 0),
            n._RF.push({}, "dae1f6+YdpIfrf5W5sHkb2b", "TweenEnums", void 0),
            function(u) {
                u[u.linear = 0] = "linear",
                u[u.smooth = 1] = "smooth",
                u[u.fade = 2] = "fade",
                u[u.constant = 3] = "constant",
                u[u.quadIn = 4] = "quadIn",
                u[u.quadOut = 5] = "quadOut",
                u[u.quadInOut = 6] = "quadInOut",
                u[u.quadOutIn = 7] = "quadOutIn",
                u[u.cubicIn = 8] = "cubicIn",
                u[u.cubicOut = 9] = "cubicOut",
                u[u.cubicInOut = 10] = "cubicInOut",
                u[u.cubicOutIn = 11] = "cubicOutIn",
                u[u.quartIn = 12] = "quartIn",
                u[u.quartOut = 13] = "quartOut",
                u[u.quartInOut = 14] = "quartInOut",
                u[u.quartOutIn = 15] = "quartOutIn",
                u[u.quintIn = 16] = "quintIn",
                u[u.quintOut = 17] = "quintOut",
                u[u.quintInOut = 18] = "quintInOut",
                u[u.quintOutIn = 19] = "quintOutIn",
                u[u.sineIn = 20] = "sineIn",
                u[u.sineOut = 21] = "sineOut",
                u[u.sineInOut = 22] = "sineInOut",
                u[u.sineOutIn = 23] = "sineOutIn",
                u[u.expoIn = 24] = "expoIn",
                u[u.expoOut = 25] = "expoOut",
                u[u.expoInOut = 26] = "expoInOut",
                u[u.expoOutIn = 27] = "expoOutIn",
                u[u.circIn = 28] = "circIn",
                u[u.circOut = 29] = "circOut",
                u[u.circInOut = 30] = "circInOut",
                u[u.circOutIn = 31] = "circOutIn",
                u[u.elasticIn = 32] = "elasticIn",
                u[u.elasticOut = 33] = "elasticOut",
                u[u.elasticInOut = 34] = "elasticInOut",
                u[u.elasticOutIn = 35] = "elasticOutIn",
                u[u.backIn = 36] = "backIn",
                u[u.backOut = 37] = "backOut",
                u[u.backInOut = 38] = "backInOut",
                u[u.backOutIn = 39] = "backOutIn",
                u[u.bounceIn = 40] = "bounceIn",
                u[u.bounceOut = 41] = "bounceOut",
                u[u.bounceInOut = 42] = "bounceInOut",
                u[u.bounceOutIn = 43] = "bounceOutIn"
            }(t || (t = u("TweenEasing", {}))),
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-PlayerTrackerData-Setter.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./TS-Player-Score-Tracker.ts"], (function(e) {
    "use strict";
    var t, r, i, n, a, o, s, l, c, u;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            i = e.initializerDefineProperty,
            n = e.assertThisInitialized
        }
        , function(e) {
            a = e.cclegacy,
            o = e._decorator,
            s = e.EventHandler,
            l = e.Component
        }
        , function(e) {
            c = e.projectEvent
        }
        , function(e) {
            u = e.PlayerTrackedDataEvents
        }
        ],
        execute: function() {
            var p, f, y, S, b, _, v, E, h, P, d;
            a._RF.push({}, "db96fWrL6JHS4amhC++y5aI", "TS-PlayerTrackerData-Setter", void 0);
            var m = o.ccclass
              , T = o.property;
            e("TS_PlayerTrackerData_Setter", (p = m("TS_PlayerTrackerData_Setter"),
            f = T({
                visible: !0,
                type: [s]
            }),
            y = T({
                visible: !0,
                type: [s]
            }),
            S = T({
                visible: !0,
                type: [s]
            }),
            b = T({
                visible: !0,
                type: [s]
            }),
            p((E = t((v = function(e) {
                function t() {
                    for (var t, r = arguments.length, a = new Array(r), o = 0; o < r; o++)
                        a[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(a)) || this,
                    i(n(t), "_setPlayerBestScore", E, n(t)),
                    i(n(t), "_setFoodsEaten", h, n(t)),
                    i(n(t), "_setSlimesEaten", P, n(t)),
                    i(n(t), "_setBestPosition", d, n(t)),
                    t
                }
                r(t, e);
                var a = t.prototype;
                return a.onEnable = function() {
                    c.on(u.finalData, this.setTrackedData, this)
                }
                ,
                a.onDisable = function() {
                    c.off(u.finalData, this.setTrackedData, this)
                }
                ,
                a.setTrackedData = function(e) {
                    s.emitEvents(this._setPlayerBestScore, e.playerBestScore.toString()),
                    s.emitEvents(this._setFoodsEaten, e.foodsEaten.toString()),
                    s.emitEvents(this._setSlimesEaten, e.slimesEaten.toString()),
                    s.emitEvents(this._setBestPosition, e.bestPosition.toString())
                }
                ,
                t
            }(l)).prototype, "_setPlayerBestScore", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            h = t(v.prototype, "_setFoodsEaten", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            P = t(v.prototype, "_setSlimesEaten", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            d = t(v.prototype, "_setBestPosition", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            _ = v)) || _));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Scene-Loader.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var n, r, o, t, i, c, a, s, l;
    return {
        setters: [function(e) {
            n = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            o = e.initializerDefineProperty,
            t = e.assertThisInitialized,
            i = e.defineProperty
        }
        , function(e) {
            c = e.cclegacy,
            a = e._decorator,
            s = e.director,
            l = e.Component
        }
        ],
        execute: function() {
            var p, d, u;
            c._RF.push({}, "dc5a4s/i7VEl7L/oMyoeK+/", "TS-Scene-Loader", void 0);
            var f = a.ccclass
              , h = a.property;
            e("TS_Scene_Loader", f("TS_Scene_Loader")((u = n((d = function(e) {
                function n() {
                    for (var n, r = arguments.length, c = new Array(r), a = 0; a < r; a++)
                        c[a] = arguments[a];
                    return n = e.call.apply(e, [this].concat(c)) || this,
                    o(t(n), "sceneName", u, t(n)),
                    i(t(n), "_preloadingComplete", !1),
                    n
                }
                r(n, e);
                var c = n.prototype;
                return c.loadScene = function() {
                    s.loadScene(this.sceneName)
                }
                ,
                c.preloadScene = function() {
                    s.preloadScene(this.sceneName, this.onProgress.bind(this), this.preloadCompleted.bind(this))
                }
                ,
                c.onProgress = function(e, n, r) {}
                ,
                c.preloadCompleted = function(e, n) {
                    e || (this._preloadingComplete = !0)
                }
                ,
                n
            }(l)).prototype, "sceneName", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            p = d)) || p);
            c._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PanelManager.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts"], (function(n) {
    "use strict";
    var e, t, o, a, s, i, r;
    return {
        setters: [function(n) {
            e = n.defineProperty,
            t = n.inheritsLoose,
            o = n.assertThisInitialized
        }
        , function(n) {
            a = n.cclegacy,
            s = n._decorator,
            i = n.Component
        }
        , function(n) {
            r = n.logger
        }
        ],
        execute: function() {
            var l, c, u;
            a._RF.push({}, "dd60fb0cwVANrUPb0SN5V4w", "PanelManager", void 0);
            var p = s.ccclass
              , f = (s.property,
            s.executionOrder);
            n("PanelManager", p("PanelManager")(l = f(-5)((u = c = function(n) {
                function a() {
                    for (var t, a = arguments.length, s = new Array(a), i = 0; i < a; i++)
                        s[i] = arguments[i];
                    return t = n.call.apply(n, [this].concat(s)) || this,
                    e(o(t), "panels", new Map),
                    t
                }
                t(a, n);
                var s = a.prototype;
                return s.onLoad = function() {
                    null == a.instance && (a.instance = this)
                }
                ,
                s.onDestroy = function() {
                    a.instance == this && (a.instance = null)
                }
                ,
                s.register = function(n) {
                    this.panels.set(n.Id, n)
                }
                ,
                s.open = function(n) {
                    var e;
                    this.panels && (this.panels.has(n) ? null === (e = this.panels.get(n)) || void 0 === e || e.open() : r.log("Could not find panel: " + n))
                }
                ,
                s.close = function(n) {
                    var e;
                    null === (e = this.panels.get(n)) || void 0 === e || e.close()
                }
                ,
                a
            }(i),
            e(c, "instance", void 0),
            l = u)) || l) || l);
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ENUM-SkillUIEvents.ts", ["cc"], (function(l) {
    "use strict";
    var e;
    return {
        setters: [function(l) {
            e = l.cclegacy
        }
        ],
        execute: function() {
            var i;
            l("SkillUIEvents", void 0),
            e._RF.push({}, "de13desrbRIs57yQFny5jOE", "ENUM-SkillUIEvents", void 0),
            function(l) {
                l[l.none = 0] = "none",
                l[l.SkillUIEvents_FirstSkillClicked = 1] = "SkillUIEvents_FirstSkillClicked",
                l[l.SkillUIEvents_FirstSkillReleased = 2] = "SkillUIEvents_FirstSkillReleased",
                l[l.SkillUIEvents_SecondSkillClicked = 3] = "SkillUIEvents_SecondSkillClicked",
                l[l.SkillUIEvents_SecondSkillReleased = 4] = "SkillUIEvents_SecondSkillReleased"
            }(i || (i = l("SkillUIEvents", {}))),
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Droppable.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./InputEnums.ts", "./Draggable.ts", "./DropArea.ts"], (function(e) {
    "use strict";
    var r, t, i, o, n, a, s, l, p, h, d, u, g, c, D, _;
    return {
        setters: [function(e) {
            r = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            i = e.initializerDefineProperty,
            o = e.assertThisInitialized,
            n = e.defineProperty,
            a = e.createClass
        }
        , function(e) {
            s = e.cclegacy,
            l = e._decorator,
            p = e.Collider,
            h = e.EventHandler,
            d = e.Vec3,
            u = e.Component
        }
        , function(e) {
            g = e.InputEvent,
            c = e.DroppableEvent
        }
        , function(e) {
            D = e.Draggable
        }
        , function(e) {
            _ = e.DropArea
        }
        ],
        execute: function() {
            var f, A, b, E, v, y, m, C, T, I, S, x, L, w;
            s._RF.push({}, "e0197pg1alPh4ShgAIZoXQ0", "Droppable", void 0);
            var z = l.ccclass
              , V = l.property
              , F = l.requireComponent;
            e("Droppable", (f = z("Droppable"),
            A = F(D),
            b = V({
                type: p,
                visible: !0
            }),
            E = V({
                type: [h],
                visible: !0
            }),
            v = V({
                type: [h],
                visible: !0
            }),
            y = V({
                type: [h],
                visible: !0
            }),
            m = V({
                type: [h],
                visible: !0
            }),
            f(C = A((I = r((T = function(e) {
                function r() {
                    for (var r, t = arguments.length, a = new Array(t), s = 0; s < t; s++)
                        a[s] = arguments[s];
                    return r = e.call.apply(e, [this].concat(a)) || this,
                    i(o(r), "_collider", I, o(r)),
                    i(o(r), "_onValidDrop", S, o(r)),
                    i(o(r), "_onFailedDrop", x, o(r)),
                    i(o(r), "_onEnteredADropArea", L, o(r)),
                    i(o(r), "_onLeftAllDropArea", w, o(r)),
                    n(o(r), "_draggable", null),
                    n(o(r), "_dropArea", null),
                    n(o(r), "_closeDropAreas", []),
                    r
                }
                t(r, e);
                var s = r.prototype;
                return s.onLoad = function() {
                    this._draggable = this.node.getComponent(D)
                }
                ,
                s.onEnable = function() {
                    this.node.on(g[g.Input_DragStart], this.onDragStart, this),
                    this.node.on(g[g.Input_DragEnd], this.onDragEnd, this),
                    this._collider.on("onTriggerEnter", this.onTriggerEnter, this),
                    this._collider.on("onTriggerExit", this.onTriggerExit, this)
                }
                ,
                s.onDisable = function() {
                    this._draggable && (this.node.off(g[g.Input_DragStart], this.onDragStart, this),
                    this.node.off(g[g.Input_DragEnd], this.onDragEnd, this)),
                    this._collider && (this._collider.off("onTriggerEnter", this.onTriggerEnter, this),
                    this._collider.off("onTriggerExit", this.onTriggerExit, this))
                }
                ,
                s.onDragStart = function(e) {
                    this._closeDropAreas = [],
                    this.dropArea = null
                }
                ,
                s.onDragEnd = function(e) {
                    this.dropArea ? (this.dropArea.drop(this),
                    this.node.emit(c[c.Droppable_ValidDrop]),
                    h.emitEvents(this._onValidDrop)) : (this.node.emit(c[c.Droppable_InvalidDrop]),
                    h.emitEvents(this._onFailedDrop)),
                    this.dropArea = null
                }
                ,
                s.onTriggerEnter = function(e) {
                    if (this._draggable.isDragging()) {
                        var r = e.otherCollider.node.getComponent(_);
                        if (r && r.enabled)
                            -1 == this._closeDropAreas.findIndex((function(e) {
                                return e == r
                            }
                            )) && (this._closeDropAreas.push(r),
                            this.dropArea = this.getClosestDropArea())
                    }
                }
                ,
                s.onTriggerExit = function(e) {
                    if (this._draggable.isDragging()) {
                        var r = e.otherCollider.node.getComponent(_);
                        if (r) {
                            var t = this._closeDropAreas.findIndex((function(e) {
                                return e == r
                            }
                            ));
                            t > -1 && (this._closeDropAreas.splice(t, 1),
                            this.dropArea = this.getClosestDropArea())
                        }
                    }
                }
                ,
                s.getClosestDropArea = function() {
                    for (var e = null, r = Number.MAX_VALUE, t = 0; t < this._closeDropAreas.length; t++) {
                        var i = new d;
                        d.subtract(i, this._closeDropAreas[t].node.position, this.node.position),
                        i.lengthSqr() < r && (e = this._closeDropAreas[t],
                        r = i.lengthSqr())
                    }
                    return e
                }
                ,
                a(r, [{
                    key: "dropArea",
                    get: function() {
                        return this._dropArea
                    },
                    set: function(e) {
                        if (this._dropArea != e) {
                            var r = !0;
                            null != this._dropArea && (this._dropArea.setUntargetedBy(this),
                            r = !1),
                            this._dropArea = e,
                            null != this._dropArea ? (this._dropArea.setTargetedBy(this),
                            r && (this.node.emit(c[c.Droppable_EnteredADropArea]),
                            h.emitEvents(this._onEnteredADropArea))) : r || (this.node.emit(c[c.Droppable_LeftAllDropAreas]),
                            h.emitEvents(this._onLeftAllDropArea))
                        }
                    }
                }]),
                r
            }(u)).prototype, "_collider", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            S = r(T.prototype, "_onValidDrop", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            x = r(T.prototype, "_onFailedDrop", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            L = r(T.prototype, "_onEnteredADropArea", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            w = r(T.prototype, "_onLeftAllDropArea", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            C = T)) || C) || C));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SlimePlayerHighestMassController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./SaveGame.ts", "./GSGameEventsEmitter.ts"], (function(e) {
    "use strict";
    var t, r, n, i, o, c;
    return {
        setters: [function(e) {
            t = e.defineProperty,
            r = e.createClass
        }
        , function(e) {
            n = e.cclegacy,
            i = e._decorator
        }
        , function(e) {
            o = e.saveGame
        }
        , function(e) {
            c = e.GSGameEventsEmitter
        }
        ],
        execute: function() {
            var s, h, a;
            n._RF.push({}, "e04c2kphd5KOZ8gETotSx7q", "SlimePlayerHighestMassController", void 0);
            var g = i.ccclass;
            i.property,
            e("SlimePlayerHighestMassController", g("SlimePlayerHighestMassController")((a = h = function() {
                function e() {}
                return e.sendHighScore = function() {
                    e.highScoreChanged && (c.highscore(e.highScore),
                    e._highScoreChanged = !1)
                }
                ,
                r(e, null, [{
                    key: "highScoreChanged",
                    get: function() {
                        return this._highScoreChanged
                    }
                }, {
                    key: "highScore",
                    get: function() {
                        return o.getHighScore()
                    },
                    set: function(e) {
                        this._highScoreChanged = !0,
                        o.setHighScore(e)
                    }
                }]),
                e
            }(),
            t(h, "_highScoreChanged", !1),
            s = a)) || s);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-AnimationSpeed.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TS-Settings-Slime.ts"], (function(e) {
    "use strict";
    var i, t, n, s, a, r, o, l, m, c, u, p, S;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            n = e.initializerDefineProperty,
            s = e.assertThisInitialized,
            a = e.defineProperty,
            r = e.createClass
        }
        , function(e) {
            o = e.cclegacy,
            l = e._decorator,
            m = e.Prefab,
            c = e.Animation,
            u = e.Node,
            p = e.Component
        }
        , function(e) {
            S = e.TS_Settings_Slime
        }
        ],
        execute: function() {
            var _, f, g, h, d, b, y;
            o._RF.push({}, "e0c60mrhJNLW4bXNCL3RUPS", "TS-Slime-AnimationSpeed", void 0);
            var v = l.ccclass
              , P = l.property;
            e("TS_Slime_AnimationSpeed", (_ = v("TS_Slime_AnimationSpeed"),
            f = P({
                type: m,
                visible: !0
            }),
            g = P({
                type: c,
                visible: !0
            }),
            _((b = i((d = function(e) {
                function i() {
                    for (var i, t = arguments.length, r = new Array(t), o = 0; o < t; o++)
                        r[o] = arguments[o];
                    return i = e.call.apply(e, [this].concat(r)) || this,
                    n(s(i), "_slimeSettingsPrefab", b, s(i)),
                    a(s(i), "_slimeSettings", null),
                    n(s(i), "_anim", y, s(i)),
                    a(s(i), "_animationSpeed", 1),
                    i
                }
                t(i, e);
                var o = i.prototype;
                return o.update = function() {}
                ,
                o.setSlimeSize = function(e) {
                    if (this._animationSpeed = .5 - .5 / (-.001 * (e * e + 1e3)),
                    null !== this._anim) {
                        var i = this._anim.clips[0];
                        this._anim.getState(i.name).speed = this._animationSpeed
                    }
                }
                ,
                o.setModel = function(e) {
                    e instanceof u ? this._anim = e.getComponent(c) : e instanceof c && (this._anim = e)
                }
                ,
                r(i, [{
                    key: "slimeSettings",
                    get: function() {
                        if (null === this._slimeSettings) {
                            var e = this._slimeSettingsPrefab.data;
                            this._slimeSettings = e.getComponent(S)
                        }
                        return this._slimeSettings
                    }
                }]),
                i
            }(p)).prototype, "_slimeSettingsPrefab", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            y = i(d.prototype, "_anim", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            h = d)) || h));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Slime-Skill-SpeedBoost.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts", "./ENUM-GameEvents.ts", "./SlimeEvents.ts", "./TS_Slime.ts", "./TS-Slime-SkillConfig-SpeedBoost.ts", "./TS-Slime-Player.ts", "./ENUM-SkillUIEvents.ts"], (function(e) {
    "use strict";
    var t, i, s, n, o, l, a, c, r, d, u, h, v, p, f, _, y, b, k, S, E, m, B, g, C;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            s = e.initializerDefineProperty,
            n = e.assertThisInitialized,
            o = e.defineProperty,
            l = e.createClass
        }
        , function(e) {
            a = e.cclegacy,
            c = e._decorator,
            r = e.Enum,
            d = e.Prefab,
            u = e.EventHandler,
            h = e.KeyCode,
            v = e.input,
            p = e.Input,
            f = e.Component
        }
        , function(e) {
            _ = e.logger,
            y = e.LogCategory,
            b = e.LogType
        }
        , function(e) {
            k = e.projectEvent
        }
        , function(e) {
            S = e.GameEvents
        }
        , function(e) {
            E = e.SlimeEvents
        }
        , function(e) {
            m = e.TS_Slime
        }
        , function(e) {
            B = e.TS_Slime_SkillConfig_SpeedBoost
        }
        , function(e) {
            g = e.TS_Slime_Player
        }
        , function(e) {
            C = e.SkillUIEvents
        }
        ],
        execute: function() {
            var P, R, D, T, z, K, L, A, w, I, U, G, M, N, W, Y, j, O, F, H, V, q, x, J, Q, X;
            e("SkillUIEventType", void 0),
            a._RF.push({}, "e11ad+wW8dJeaOLW/7k4mqn", "TS-Slime-Skill-SpeedBoost", void 0);
            var Z, $ = c.ccclass, ee = c.property;
            !function(e) {
                e[e.pressed = 0] = "pressed",
                e[e.released = 1] = "released",
                e[e.clicked = 2] = "clicked"
            }(Z || (Z = e("SkillUIEventType", {})));
            var te = e("SkillUIEventData", (P = $("SkillEventData"),
            R = ee({
                visible: !0
            }),
            D = ee({
                visible: !0,
                type: r(C)
            }),
            T = ee({
                visible: !0,
                type: r(C)
            }),
            z = ee({
                visible: !0,
                type: r(C)
            }),
            P((A = t((L = function() {
                function e() {
                    s(this, "_listenEvents", A, this),
                    s(this, "_pressedEvent", w, this),
                    s(this, "_releasedEvent", I, this),
                    s(this, "_clickedEvent", U, this),
                    o(this, "_pressedCallback", null),
                    o(this, "_releasedCallback", null),
                    o(this, "_clickedCallback", null)
                }
                var t = e.prototype;
                return t.activate = function() {
                    this._listenEvents && (this.activateListener(this._pressedEvent, this.onPressed),
                    this.activateListener(this._releasedEvent, this.onReleased),
                    this.activateListener(this._clickedEvent, this.onClicked))
                }
                ,
                t.activateListener = function(e, t) {
                    e !== C.none && k.on(C[e], t, this)
                }
                ,
                t.deactivate = function() {
                    this._listenEvents && (this.deactivateListener(this._pressedEvent, this.onPressed),
                    this.deactivateListener(this._releasedEvent, this.onReleased),
                    this.deactivateListener(this._clickedEvent, this.onClicked))
                }
                ,
                t.deactivateListener = function(e, t) {
                    e !== C.none && k.off(C[e], t, this)
                }
                ,
                t.addCallback = function(e, t) {
                    e == Z.pressed ? this._pressedCallback = t : e == Z.released ? this._releasedCallback = t : e == Z.clicked && (this._clickedCallback = t)
                }
                ,
                t.removeCallback = function(e) {
                    e == Z.pressed ? this._pressedCallback = null : e == Z.released ? this._releasedCallback = null : e == Z.clicked && (this._clickedCallback = null)
                }
                ,
                t.onPressed = function() {
                    null !== this._pressedCallback && this._pressedCallback()
                }
                ,
                t.onReleased = function() {
                    null !== this._releasedCallback && this._releasedCallback()
                }
                ,
                t.onClicked = function() {
                    null !== this._clickedCallback && this._clickedCallback()
                }
                ,
                e
            }()).prototype, "_listenEvents", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            w = t(L.prototype, "_pressedEvent", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return C.none
                }
            }),
            I = t(L.prototype, "_releasedEvent", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return C.none
                }
            }),
            U = t(L.prototype, "_clickedEvent", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return C.none
                }
            }),
            K = L)) || K));
            e("TS_Slime_Skill_SpeedBoost", (G = $("TS_Slime_Skill_SpeedBoost"),
            M = ee(m),
            N = ee(d),
            W = ee({
                type: [u],
                visible: !0
            }),
            Y = ee({
                type: [u],
                visible: !0
            }),
            j = ee({
                visible: !0,
                type: r(h)
            }),
            O = ee({
                visible: !0,
                type: te
            }),
            G((V = t((H = function(e) {
                function t() {
                    for (var t, i = arguments.length, l = new Array(i), a = 0; a < i; a++)
                        l[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(l)) || this,
                    s(n(t), "slime", V, n(t)),
                    s(n(t), "configPrefab", q, n(t)),
                    o(n(t), "config", null),
                    s(n(t), "_onSpeedBoostActivated", x, n(t)),
                    s(n(t), "_onSpeedBoostDeactivated", J, n(t)),
                    s(n(t), "_skillKey", Q, n(t)),
                    o(n(t), "_isBoostReady", !1),
                    o(n(t), "_isBoostActive", !1),
                    s(n(t), "_skillEventData", X, n(t)),
                    t
                }
                i(t, e);
                var a = t.prototype;
                return a.onEnable = function() {
                    var e = this;
                    this.config = this.configPrefab.data.getComponent(B),
                    this._skillEventData.addCallback(Z.pressed, (function() {
                        return e.activateBoost()
                    }
                    )),
                    this._skillEventData.addCallback(Z.released, (function() {
                        return e.deactivateBoost()
                    }
                    )),
                    k.on(S[S.Game_Victory], this.deactivateBoost, this),
                    v.on(p.EventType.KEY_DOWN, this.onKeyPressed, this),
                    v.on(p.EventType.KEY_UP, this.onKeyReleased, this),
                    this._skillEventData.activate()
                }
                ,
                a.onDisable = function() {
                    k.off(S[S.Game_Victory], this.deactivateBoost, this),
                    v.off(p.EventType.KEY_DOWN, this.onKeyPressed, this),
                    v.off(p.EventType.KEY_UP, this.onKeyReleased, this),
                    this._skillEventData.deactivate()
                }
                ,
                a.update = function(e) {
                    this.checkBoostReadiness(),
                    !1 === this._isBoostReady && !0 === this._isBoostActive && this.deactivateBoost()
                }
                ,
                a.activateBoost = function() {
                    !0 === this._isBoostReady && !1 === this._isBoostActive && (_.log("Activate Speed Boost", y.Gameplay, b.Info),
                    this._isBoostActive = !0,
                    u.emitEvents(this._onSpeedBoostActivated, this.config))
                }
                ,
                a.deactivateBoost = function() {
                    !0 === this._isBoostActive && (_.log("Deactivate Speed Boost", y.Gameplay, b.Info),
                    this._isBoostActive = !1,
                    u.emitEvents(this._onSpeedBoostDeactivated, this.config))
                }
                ,
                a.onKeyPressed = function(e) {
                    e.keyCode === this._skillKey && this.activateBoost()
                }
                ,
                a.onKeyReleased = function(e) {
                    e.keyCode === this._skillKey && this.deactivateBoost()
                }
                ,
                a.checkBoostReadiness = function() {
                    !0 === this._isBoostReady ? this.slime.Size < this.config.MinSize && (this._isBoostReady = !1,
                    this.slime instanceof g && k.emit(E[E.Slime_PlayerShootNotReady])) : !1 === this._isBoostReady && this.slime.Size >= this.config.MinSize && (this._isBoostReady = !0,
                    this.slime instanceof g && k.emit(E[E.Slime_PlayerShootReady]))
                }
                ,
                l(t, [{
                    key: "isBoostActive",
                    get: function() {
                        return this._isBoostActive
                    }
                }]),
                t
            }(f)).prototype, "slime", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            q = t(H.prototype, "configPrefab", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            x = t(H.prototype, "_onSpeedBoostActivated", [W], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            J = t(H.prototype, "_onSpeedBoostDeactivated", [Y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            Q = t(H.prototype, "_skillKey", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            X = t(H.prototype, "_skillEventData", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            F = H)) || F));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS_CharacterMovemenJoystickSteering.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TS_CharacterMovementBaseSteering.ts", "./VirtualJoystick.ts"], (function(t) {
    "use strict";
    var e, i, r, o, n, c, s, a, l, u;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            r = t.initializerDefineProperty,
            o = t.assertThisInitialized,
            n = t.defineProperty
        }
        , function(t) {
            c = t.cclegacy,
            s = t._decorator,
            a = t.Vec2
        }
        , function(t) {
            l = t.TS_CharacterMovementBaseSteering
        }
        , function(t) {
            u = t.VirtualJoystick
        }
        ],
        execute: function() {
            var y, h, p, _, k;
            c._RF.push({}, "e12febRNOJObKlsUQ4Ygfbr", "TS_CharacterMovemenJoystickSteering", void 0);
            var f = s.ccclass
              , v = s.property;
            t("TS_CharacterMovementJoystickSteering", (y = f("TS_CharacterMovementJoystickSteering"),
            h = v({
                type: u,
                visible: !0
            }),
            y((k = e((_ = function(t) {
                function e() {
                    for (var e, i = arguments.length, c = new Array(i), s = 0; s < i; s++)
                        c[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(c)) || this,
                    r(o(e), "_joystick", k, o(e)),
                    n(o(e), "_clonedJoystick", null),
                    e
                }
                i(e, t);
                var c = e.prototype;
                return c.update = function(e) {
                    var i;
                    (i = null !== this._clonedJoystick && null !== this._clonedJoystick.node ? new a(this._clonedJoystick.horizontal,-this._clonedJoystick.vertical) : new a(this._joystick.horizontal,-this._joystick.vertical)).length() > 0 && t.prototype.setSteering.call(this, i)
                }
                ,
                c.setCloneJoystick = function(t) {
                    this._clonedJoystick = t._joystick
                }
                ,
                e
            }(l)).prototype, "_joystick", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            p = _)) || p));
            c._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/StoreController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts", "./SaveGame.ts", "./PlayerPurseController.ts", "./ItemsSaveController.ts", "./StoreItem.ts"], (function(t) {
    "use strict";
    var e, s, o, r, n, i, a, c, m, u, l, I, d, h, _;
    return {
        setters: [function(t) {
            e = t.createForOfIteratorHelperLoose,
            s = t.createClass,
            o = t.defineProperty
        }
        , function(t) {
            r = t.cclegacy,
            n = t._decorator,
            i = t.game,
            a = t.Game,
            c = t.resources,
            m = t.JsonAsset
        }
        , function(t) {
            u = t.logger
        }
        , function(t) {
            l = t.projectEvent
        }
        , function(t) {
            I = t.saveGame
        }
        , function(t) {
            d = t.PlayerPurseController
        }
        , function(t) {
            h = t.ItemsSaveController
        }
        , function(t) {
            _ = t.StoreItem
        }
        ],
        execute: function() {
            var f;
            t("StoreEvents", void 0),
            r._RF.push({}, "e3e623moXVKc5Ptj3YdLYIN", "StoreController", void 0);
            var v, S = n.ccclass;
            n.property;
            !function(t) {
                t[t.Store_ItemsLoaded = 0] = "Store_ItemsLoaded",
                t[t.Store_ItemPurchased = 1] = "Store_ItemPurchased"
            }(v || (v = t("StoreEvents", {})));
            var p = t("StoreController", S("StoreController")(f = function() {
                function t() {
                    var t = this;
                    o(this, "_storeItems", []),
                    i.on(a.EVENT_GAME_INITED, (function() {
                        c.load("Skins/slime-skins", m, null, t.onSkinsLoaded.bind(t))
                    }
                    ), this)
                }
                var r = t.prototype;
                return r.onSkinsLoaded = function(t, s) {
                    var o = this
                      , r = s.json.items
                      , n = h.items;
                    this._storeItems = [];
                    for (var i, a = function() {
                        var t = i.value
                          , e = t.id
                          , s = t.name
                          , r = t.cost
                          , a = t.purchased
                          , c = n.find((function(t) {
                            return t.id === e
                        }
                        ));
                        c && (a = c.quantity > 0),
                        o._storeItems.push(new _(e,s,r,a ? 1 : 0))
                    }, c = e(r); !(i = c()).done; )
                        a();
                    u.log("Finished loading Store Items. " + this._storeItems.length + " items loaded."),
                    l.emit(v[v.Store_ItemsLoaded], this)
                }
                ,
                r.purchaseItem = function(t, e) {
                    var s = d.coins
                      , o = this._storeItems.findIndex((function(e) {
                        return e.id === t
                    }
                    ))
                      , r = this._storeItems[o].canBuyItem
                      , n = this._storeItems[o].cost * e <= s;
                    if (!r)
                        throw "Can't buy item: " + this._storeItems[o];
                    if (!n)
                        throw "Can't afford purchase: (Needs: " + this._storeItems[o].cost * e + " Balance: " + s + ")";
                    I.startTransaction(),
                    d.removeCoins(this._storeItems[o].cost * e),
                    this._storeItems[o] = new _(this._storeItems[o].id,this._storeItems[o].name,this._storeItems[o].cost,this._storeItems[o].quantity + e),
                    I.setItem(this._storeItems[o]),
                    I.commitTransaction(),
                    l.emit(v[v.Store_ItemPurchased], this._storeItems[o])
                }
                ,
                s(t, [{
                    key: "storeItems",
                    get: function() {
                        return this._storeItems
                    }
                }]),
                t
            }()) || f);
            t("storeController", new p);
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/BaseSaveGameData.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var a, e;
    return {
        setters: [function(t) {
            a = t.defineProperty
        }
        , function(t) {
            e = t.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "e47bb0NFDNFF7MAM7uQQ96C", "BaseSaveGameData", void 0);
            t("BaseSaveGameData", function() {
                function t(e) {
                    void 0 === e && (e = null),
                    a(this, "_data", []),
                    this._data = e && e instanceof t || e && "object" == typeof e ? [].concat(e._data) : []
                }
                var e = t.prototype;
                return e.setData = function(t, a) {
                    var e = this._data.findIndex((function(a) {
                        return a.key === t
                    }
                    ));
                    -1 !== e ? this._data[e].value = a : this._data.push({
                        key: t,
                        value: a
                    })
                }
                ,
                e.getData = function(t) {
                    var a = this._data.findIndex((function(a) {
                        return a.key === t
                    }
                    ));
                    if (-1 !== a)
                        return this._data[a].value;
                    throw "Invalid Key: No data with key " + t + " was found"
                }
                ,
                t
            }());
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AudioDataLoader.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./AudioManager.ts", "./AudioData.ts"], (function(t) {
    "use strict";
    var a, e, i, o, n, r, u, s, c, d, l;
    return {
        setters: [function(t) {
            a = t.applyDecoratedDescriptor,
            e = t.inheritsLoose,
            i = t.initializerDefineProperty,
            o = t.assertThisInitialized,
            n = t.defineProperty
        }
        , function(t) {
            r = t.cclegacy,
            u = t._decorator,
            s = t.Prefab,
            c = t.Component
        }
        , function(t) {
            d = t.AudioManager
        }
        , function(t) {
            l = t.AudioData
        }
        ],
        execute: function() {
            var p, f, y, D, _;
            r._RF.push({}, "e638ajtZ9xGNJqPUA/g/vww", "AudioDataLoader", void 0);
            var h = u.ccclass
              , A = u.property;
            t("AudioDataLoader", (p = h("AudioDataLoader"),
            f = A({
                type: s,
                visible: !0,
                formerlySerializedAs: "key"
            }),
            p((_ = a((D = function(t) {
                function a() {
                    for (var a, e = arguments.length, r = new Array(e), u = 0; u < e; u++)
                        r[u] = arguments[u];
                    return a = t.call.apply(t, [this].concat(r)) || this,
                    i(o(a), "_audioData", _, o(a)),
                    n(o(a), "_data", null),
                    a
                }
                e(a, t);
                var r = a.prototype;
                return r.onLoad = function() {
                    this._data = this._audioData.data.getComponent(l),
                    d.instance.load(this._data)
                }
                ,
                r.onDestroy = function() {
                    d.instance && d.instance.unload(this._data)
                }
                ,
                a
            }(c)).prototype, "_audioData", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            y = D)) || y));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/CrystalsDailyMissionData.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./SlimeEvents.ts", "./DailyMissionState.ts", "./QuantityDailyMissionData.ts"], (function(t) {
    "use strict";
    var n, i, e, s, a, r, o, l, c, u, y;
    return {
        setters: [function(t) {
            n = t.inheritsLoose,
            i = t.defineProperty,
            e = t.assertThisInitialized,
            s = t.createClass
        }
        , function(t) {
            a = t.cclegacy,
            r = t._decorator
        }
        , function(t) {
            o = t.projectEvent
        }
        , function(t) {
            l = t.SlimeEvents
        }
        , function(t) {
            c = t.DailyMissionState
        }
        , function(t) {
            u = t.QuantityDailyMissionDataSave,
            y = t.QuantityDailyMissionData
        }
        ],
        execute: function() {
            var f, h, D;
            a._RF.push({}, "e7cfculB0JI3Iyu3SonOlh2", "CrystalsDailyMissionData", void 0);
            var p = r.ccclass
              , v = (r.property,
            t("CrystalsDailyMissionDataSave", function(t) {
                function i() {
                    return t.apply(this, arguments) || this
                }
                return n(i, t),
                i
            }(u)));
            t("CrystalsDailyMissionData", p("CrystalsDailyMissionData")((D = h = function(t) {
                function a() {
                    for (var n, s = arguments.length, a = new Array(s), r = 0; r < s; r++)
                        a[r] = arguments[r];
                    return n = t.call.apply(t, [this].concat(a)) || this,
                    i(e(n), "_listening", !1),
                    n
                }
                n(a, t);
                var r = a.prototype;
                return r.createCloneInstance = function() {
                    return new a(this)
                }
                ,
                r.createSaveData = function() {
                    return new v(this)
                }
                ,
                r.enableListeners = function() {
                    this.currentState === c.InProgress && (this._listening = !0,
                    o.on(l[l.Slime_PlayerFoodEaten], this.onCrystalEaten, this))
                }
                ,
                r.disableListeners = function() {
                    this._listening && o.off(l[l.Slime_PlayerFoodEaten], this.onCrystalEaten, this)
                }
                ,
                r.onCrystalEaten = function(t) {
                    this.increase(1)
                }
                ,
                s(a, [{
                    key: "ID",
                    get: function() {
                        return a._id
                    }
                }, {
                    key: "displayName",
                    get: function() {
                        return this._displayName.getName(["value"], [this.targetValue], 1 === this.targetValue)
                    }
                }], [{
                    key: "ID",
                    get: function() {
                        return a._id
                    }
                }]),
                a
            }(y),
            i(h, "_id", "eat-crystals"),
            f = D)) || f);
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-Score-Tracker.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./SlimeEvents.ts"], (function(e) {
    "use strict";
    var i, t, n, r, a, s, o, l, c, u, p, h, m, g;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            t = e.createClass,
            n = e.inheritsLoose,
            r = e.defineProperty,
            a = e.assertThisInitialized,
            s = e.initializerDefineProperty
        }
        , function(e) {
            o = e.cclegacy,
            l = e._decorator,
            c = e.Label,
            u = e.EventHandler,
            p = e.Color,
            h = e.Component
        }
        , function(e) {
            m = e.projectEvent
        }
        , function(e) {
            g = e.SlimeEvents
        }
        ],
        execute: function() {
            var S, f, b, d, y, k, v, N, L, w, D, T, z, I, E, _, F, C, R, O, P, x, j;
            e("ScoreEvents", void 0),
            o._RF.push({}, "e87aa/uBZxNR65qcdKFrFrN", "TS-Score-Tracker", void 0);
            var M, B = l.ccclass, H = l.property, q = l.executionOrder, A = (S = B("LabelData"),
            f = H(c),
            b = H(c),
            S((k = i((y = function() {
                function e() {
                    s(this, "name", k, this),
                    s(this, "score", v, this)
                }
                return t(e, [{
                    key: "Name",
                    get: function() {
                        return this.name
                    }
                }, {
                    key: "Score",
                    get: function() {
                        return this.score
                    }
                }]),
                e
            }()).prototype, "name", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            v = i(y.prototype, "score", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            d = y)) || d);
            !function(e) {
                e.updateSlimeScore = "score-update-slime",
                e.updateSlimeID = "score-update-id-slime"
            }(M || (M = e("ScoreEvents", {})));
            e("TS_Score_Tracker", (N = B("TS_Score_Tracker"),
            L = q(-1),
            w = H([A]),
            D = H([u]),
            T = H([u]),
            z = H([u]),
            I = H(p),
            E = H(p),
            N(_ = L((C = i((F = function(e) {
                function i() {
                    for (var i, t = arguments.length, n = new Array(t), o = 0; o < t; o++)
                        n[o] = arguments[o];
                    return i = e.call.apply(e, [this].concat(n)) || this,
                    r(a(i), "slimes", new Map),
                    s(a(i), "rankingLabels", C, a(i)),
                    s(a(i), "setPlayerScore", R, a(i)),
                    s(a(i), "playerOnTopFive", O, a(i)),
                    s(a(i), "playerNotOnTopFive", P, a(i)),
                    s(a(i), "playerNameColor", x, a(i)),
                    s(a(i), "commonNameColor", j, a(i)),
                    i
                }
                n(i, e);
                var t = i.prototype;
                return t.start = function() {
                    m.on(g[g.Slime_NewSlime], this.addNewSlime, this),
                    m.on(M.updateSlimeScore, this.updateSlimeScore, this),
                    m.on(M.updateSlimeID, this.updateSlimeID, this)
                }
                ,
                t.onDestroy = function() {
                    m.off(g[g.Slime_NewSlime], this.addNewSlime, this),
                    m.off(M.updateSlimeScore, this.updateSlimeScore, this),
                    m.off(M.updateSlimeID, this.updateSlimeID, this)
                }
                ,
                t.addNewSlime = function(e) {
                    this.slimes.has(e.playerID) ? (this.updateSlimeScore(e, e.Size),
                    this.updateRanking()) : (this.slimes.set(e.playerID, e.Size),
                    this.updateRanking())
                }
                ,
                t.updateSlimeScore = function(e, i) {
                    if (this.slimes.has(e.playerID)) {
                        var t = this.slimes.get(e.playerID);
                        t += i,
                        this.slimes.set(e.playerID, t),
                        this.updateRanking()
                    }
                }
                ,
                t.updateSlimeID = function(e, i) {
                    if (this.slimes.has(i)) {
                        var t = this.slimes.get(i);
                        t -= e.Size,
                        this.slimes.set(i, t)
                    }
                    this.addNewSlime(e),
                    this.updateRanking()
                }
                ,
                t.updateRanking = function() {
                    var e = [];
                    this.slimes.forEach((function(i, t, n) {
                        e.push({
                            name: t,
                            score: i
                        })
                    }
                    )),
                    e.sort((function(e, i) {
                        return e.score < i.score ? 1 : e.score > i.score ? -1 : e.name.includes("player") ? 1 : -1
                    }
                    ));
                    var i = e.findIndex((function(e) {
                        return e.name.includes("player")
                    }
                    ));
                    u.emitEvents(this.setPlayerScore, e[i].score, e.length < 20 ? 100 : i);
                    for (var t = 0; t < this.rankingLabels.length - 1 && t < e.length; t++)
                        this.rankingLabels[t].Name.color = this.commonNameColor,
                        this.rankingLabels[t].Name.string = e[t].name.slice(0, 6),
                        this.rankingLabels[t].Score.string = e[t].score.toString();
                    this.rankingLabels[Math.min(this.rankingLabels.length - 1, i)].Name.color = this.playerNameColor,
                    i >= this.rankingLabels.length - 1 ? (this.rankingLabels[this.rankingLabels.length - 1].Name.string = e[i].name.slice(0, 6),
                    this.rankingLabels[this.rankingLabels.length - 1].Score.string = e[i].score.toString(),
                    u.emitEvents(this.playerNotOnTopFive)) : (u.emitEvents(this.playerOnTopFive),
                    this.rankingLabels[this.rankingLabels.length - 1].Name.string = "",
                    this.rankingLabels[this.rankingLabels.length - 1].Score.string = "")
                }
                ,
                i
            }(h)).prototype, "rankingLabels", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            R = i(F.prototype, "setPlayerScore", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            O = i(F.prototype, "playerOnTopFive", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            P = i(F.prototype, "playerNotOnTopFive", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            x = i(F.prototype, "playerNameColor", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            j = i(F.prototype, "commonNameColor", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            _ = F)) || _) || _));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS_CharacterMovementWandererSteering.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TS_CharacterMovementBaseSteering.ts"], (function(e) {
    "use strict";
    var t, r, n, i, o, a, c, s, u;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            n = e.initializerDefineProperty,
            i = e.assertThisInitialized
        }
        , function(e) {
            o = e.cclegacy,
            a = e._decorator,
            c = e.Vec2,
            s = e.math
        }
        , function(e) {
            u = e.TS_CharacterMovementBaseSteering
        }
        ],
        execute: function() {
            var d, l, p, h;
            o._RF.push({}, "e8964okkG9FjKA5GHcqIStZ", "TS_CharacterMovementWandererSteering", void 0);
            var S = a.ccclass
              , g = a.property;
            e("TS_CharacterMovementWandererSteering", S("TS_CharacterMovementWandererSteering")((p = t((l = function(e) {
                function t() {
                    for (var t, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                        o[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    n(i(t), "rotationSpeed", p, i(t)),
                    n(i(t), "direction", h, i(t)),
                    t
                }
                r(t, e);
                var o = t.prototype;
                return o.start = function() {
                    this.randomizeDirection()
                }
                ,
                o.update = function(e) {
                    var t = s.randomRange(-this.rotationSpeed, this.rotationSpeed)
                      , r = s.toRadian(t);
                    this.direction.rotate(r * e),
                    this.setSteering(this.direction)
                }
                ,
                o.randomizeDirection = function() {
                    this.direction = new c(s.randomRange(-1, 1),s.randomRange(-1, 1)).normalize(),
                    this.setSteering(this.direction)
                }
                ,
                t
            }(u)).prototype, "rotationSpeed", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            h = t(l.prototype, "direction", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new c
                }
            }),
            d = l)) || d);
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ITFC-ISlimeMaxSpeedMultiplier.ts", ["cc"], (function() {
    "use strict";
    var e;
    return {
        setters: [function(t) {
            e = t.cclegacy
        }
        ],
        execute: function() {
            e._RF.push({}, "eb0d5JmzPZOm4Rk/9GfVHsX", "ITFC-ISlimeMaxSpeedMultiplier", void 0),
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ColorEntry.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(r) {
    "use strict";
    var t, e, i, o, n, c;
    return {
        setters: [function(r) {
            t = r.applyDecoratedDescriptor,
            e = r.createClass,
            i = r.initializerDefineProperty
        }
        , function(r) {
            o = r.cclegacy,
            n = r._decorator,
            c = r.Color
        }
        ],
        execute: function() {
            var l, u, s, a, p, f, y;
            o._RF.push({}, "ebf80RPlctPEqFLu7P4XDMy", "ColorEntry", void 0);
            var _ = n.ccclass
              , b = n.property;
            r("ColorEntry", (l = _("ColorEntry"),
            u = b({
                visible: !0
            }),
            s = b({
                visible: !0
            }),
            l((f = t((p = function() {
                function r() {
                    i(this, "_id", f, this),
                    i(this, "_color", y, this)
                }
                return e(r, [{
                    key: "id",
                    get: function() {
                        return this._id
                    }
                }, {
                    key: "color",
                    get: function() {
                        return this._color
                    }
                }]),
                r
            }()).prototype, "_id", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            y = t(p.prototype, "_color", [s], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new c
                }
            }),
            a = p)) || a));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-TouchDebugger.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts"], (function(e) {
    "use strict";
    var t, r, n, o, i, u, c, a, l, s, h, g;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            n = e.defineProperty,
            o = e.assertThisInitialized,
            i = e.initializerDefineProperty,
            u = e.createForOfIteratorHelperLoose
        }
        , function(e) {
            c = e.cclegacy,
            a = e._decorator,
            l = e.Label,
            s = e.EventTarget,
            h = e.Component
        }
        , function(e) {
            g = e.projectEvent
        }
        ],
        execute: function() {
            var p, f, b, v, d, T, y;
            c._RF.push({}, "ecf2ell+mhC+ZmvhT2N7X53", "TS-TouchDebugger", void 0);
            var D = a.ccclass
              , _ = a.property;
            e("TS_TouchDebugger", (p = D("TS_TouchDebugger"),
            f = _(l),
            b = _(l),
            p((T = t((d = function(e) {
                function t() {
                    for (var t, r = arguments.length, u = new Array(r), c = 0; c < r; c++)
                        u[c] = arguments[c];
                    return t = e.call.apply(e, [this].concat(u)) || this,
                    n(o(t), "eventTarget", new s),
                    i(o(t), "touchCount", T, o(t)),
                    i(o(t), "ids", y, o(t)),
                    t
                }
                r(t, e);
                var c = t.prototype;
                return c.onEnable = function() {
                    g.on("touch-data", this.debugTouchData, this)
                }
                ,
                c.debugTouchData = function(e) {
                    this.touchCount.string = e.length.toString();
                    var t = "";
                    if (e.length > 0)
                        for (var r, n = u(e); !(r = n()).done; ) {
                            t += r.value.getId() + ", "
                        }
                    else
                        t = "-";
                    this.ids.string = t
                }
                ,
                t
            }(h)).prototype, "touchCount", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            y = t(d.prototype, "ids", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            v = d)) || v));
            c._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DailyMissionState.ts", ["cc"], (function(e) {
    "use strict";
    var t, s;
    return {
        setters: [function(e) {
            t = e.cclegacy,
            s = e._decorator
        }
        ],
        execute: function() {
            e("DailyMissionState", void 0),
            t._RF.push({}, "ed533jbq9FAObvEioV7yDCh", "DailyMissionState", void 0);
            var i;
            s.ccclass,
            s.property;
            !function(e) {
                e[e.None = 0] = "None",
                e[e.InProgress = 1] = "InProgress",
                e[e.Completed = 2] = "Completed",
                e[e.Redeemed = 3] = "Redeemed"
            }(i || (i = e("DailyMissionState", {}))),
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-SlimeFood-Spawner.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts", "./Range.ts", "./TS-BattleRoyale-SafeArea.ts", "./TS-SlimeFood.ts", "./BundleEvents.ts", "./SlimesBundleLoader.ts"], (function(e) {
    "use strict";
    var t, i, o, a, n, s, r, l, d, c, u, p, f, h, v, m, _, A, g, w, F, S, y;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            o = e.defineProperty,
            a = e.assertThisInitialized,
            n = e.initializerDefineProperty
        }
        , function(e) {
            s = e.cclegacy,
            r = e._decorator,
            l = e.BoxCollider,
            d = e.game,
            c = e.math,
            u = e.Prefab,
            p = e.instantiate,
            f = e.director,
            h = e.Vec3,
            v = e.randomRange,
            m = e.Component
        }
        , function(e) {
            _ = e.logger
        }
        , function(e) {
            A = e.projectEvent
        }
        , function(e) {
            g = e.Range
        }
        , function(e) {
            w = e.SafeAreaEvents
        }
        , function(e) {
            F = e.TS_SlimeFood
        }
        , function(e) {
            S = e.BundleEvents
        }
        , function(e) {
            y = e.slimesBundleLoader
        }
        ],
        execute: function() {
            var b, x, z, N, P, R, T, M, C, B, L;
            s._RF.push({}, "edb90tp43BI+7plsCPZ1UX4", "TS-SlimeFood-Spawner", void 0);
            var E = r.ccclass
              , I = r.property;
            e("TS_SlimeFood_Spawner", (b = E("TS_SlimeFood_Spawner"),
            x = I({
                visible: !0,
                type: g
            }),
            z = I(l),
            N = I({
                visible: !0
            }),
            b((T = t((R = function(e) {
                function t() {
                    for (var t, i = arguments.length, s = new Array(i), r = 0; r < i; r++)
                        s[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(s)) || this,
                    o(a(t), "foodNodes", []),
                    n(a(t), "_maxActiveFoodsRange", T, a(t)),
                    o(a(t), "_currentMaxActiveFoods", 0),
                    n(a(t), "spawnInterval", M, a(t)),
                    n(a(t), "spawnQuantity", C, a(t)),
                    n(a(t), "spawnArea", B, a(t)),
                    n(a(t), "_debug", L, a(t)),
                    o(a(t), "lastSpawnTime", 0),
                    o(a(t), "foodNodesPool", []),
                    o(a(t), "activeFoodNodes", []),
                    o(a(t), "_safeArea", null),
                    t
                }
                i(t, e);
                var s = t.prototype;
                return s.onLoad = function() {
                    this._currentMaxActiveFoods = this._maxActiveFoodsRange.Max,
                    y.isDataLoaded ? this.createFoodCrystals() : A.once(S[S.Bundle_SlimesLoaded], this.createFoodCrystals, this)
                }
                ,
                s.onEnable = function() {
                    A.emit(w[w.SafeArea_GetSafeArea], this)
                }
                ,
                s.start = function() {
                    this.lastSpawnTime = 0
                }
                ,
                s.update = function(e) {
                    if (1e3 * d.totalTime - this.lastSpawnTime >= this.spawnInterval)
                        for (var t = 0; t < this.spawnQuantity; t++)
                            this.activeFoodNodes.length < this._currentMaxActiveFoods && this.initializeFoodNode();
                    this.lastSpawnTime = 1e3 * d.totalTime,
                    this._currentMaxActiveFoods = c.lerp(this._maxActiveFoodsRange.Min, this._maxActiveFoodsRange.Max, this._safeArea.radiusRatio),
                    this._debug && _.log("Crystals: " + this.activeFoodNodes.length + " (" + this._currentMaxActiveFoods + ")")
                }
                ,
                s.createFoodCrystals = function() {
                    var e = this;
                    y.bundle.load("P_Slime Food (Crystal)", u, (function(t, i) {
                        for (var o = 0; o < e._currentMaxActiveFoods; o++) {
                            var a = p(i);
                            f.getScene().addChild(a),
                            a.setPosition(new h(0,0,0)),
                            a.active = !1,
                            e.foodNodesPool.push(a),
                            e.initializeFoodNode()
                        }
                    }
                    ))
                }
                ,
                s.setSafeArea = function(e) {
                    null === this._safeArea && (this._safeArea = e)
                }
                ,
                s.initializeFoodNode = function() {
                    var e = this;
                    if (this.foodNodesPool.length > 0) {
                        var t = this.foodNodesPool[0];
                        this.foodNodesPool = this.foodNodesPool.slice(1);
                        var i = Math.min(this._safeArea.radius, this.spawnArea.size.x / 2)
                          , o = Math.min(this._safeArea.radius, this.spawnArea.size.z / 2)
                          , a = this.spawnArea.node.position.x - i
                          , n = this.spawnArea.node.position.x + i
                          , s = this.spawnArea.node.position.z - o
                          , r = this.spawnArea.node.position.z + o
                          , l = t.position.y
                          , d = new h(c.randomRange(a, n),0,c.randomRange(s, r));
                        h.distance(d, new h(this._safeArea.center.x,0,this._safeArea.center.y)) > this._safeArea.radius && (d = d.normalize().multiplyScalar(this._safeArea.radius * v(0, .8))),
                        d.y = l,
                        t.getComponent(F).initialize(d, (function() {
                            var i = e.activeFoodNodes.findIndex((function(e) {
                                return e === t
                            }
                            ));
                            e.activeFoodNodes.splice(i, 1),
                            e.foodNodesPool.push(t)
                        }
                        ), null),
                        this.activeFoodNodes.push(t)
                    }
                }
                ,
                t
            }(m)).prototype, "_maxActiveFoodsRange", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new g(0,0)
                }
            }),
            M = t(R.prototype, "spawnInterval", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .5
                }
            }),
            C = t(R.prototype, "spawnQuantity", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 5
                }
            }),
            B = t(R.prototype, "spawnArea", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            L = t(R.prototype, "_debug", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            P = R)) || P));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-UI-ButtonSkinSelectionEvent.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./SkinSelectionEvents.ts", "./TS-UI-ButtonEvent.ts"], (function(t) {
    "use strict";
    var e, n, i, r, o, c, u, a, s, l;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            i = t.initializerDefineProperty,
            r = t.assertThisInitialized
        }
        , function(t) {
            o = t.cclegacy,
            c = t._decorator,
            u = t.Enum
        }
        , function(t) {
            a = t.projectEvent
        }
        , function(t) {
            s = t.SkinEvents
        }
        , function(t) {
            l = t.TS_UI_ButtonEvent
        }
        ],
        execute: function() {
            var p, v, S, f, y, E, _;
            o._RF.push({}, "ee672Nx9tRB+7fZZHkbEdII", "TS-UI-ButtonSkinSelectionEvent", void 0);
            var T = c.ccclass
              , b = c.property;
            t("TS_UI_ButtonSkinSelectionEvent", (p = T("TS_UI_ButtonSkinSelectionEvent"),
            v = b({
                type: u(s)
            }),
            S = b({
                visible: !0
            }),
            p((E = e((y = function(t) {
                function e() {
                    for (var e, n = arguments.length, o = new Array(n), c = 0; c < n; c++)
                        o[c] = arguments[c];
                    return e = t.call.apply(t, [this].concat(o)) || this,
                    i(r(e), "eventType", E, r(e)),
                    i(r(e), "data", _, r(e)),
                    e
                }
                return n(e, t),
                e.prototype.raise = function() {
                    var t = s[this.eventType];
                    a.emit(t, this.data)
                }
                ,
                e
            }(l)).prototype, "eventType", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return s.Skin_SetTexture
                }
            }),
            _ = e(y.prototype, "data", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            f = y)) || f));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ItemsDatabaseEvents.ts", ["cc"], (function(e) {
    "use strict";
    var t;
    return {
        setters: [function(e) {
            t = e.cclegacy
        }
        ],
        execute: function() {
            var a;
            e("ItemsDatabaseEvents", void 0),
            t._RF.push({}, "ee88axC8QZHlrLlTGV+JcCj", "ItemsDatabaseEvents", void 0),
            function(e) {
                e[e.ItemsDatabase_Loaded = 0] = "ItemsDatabase_Loaded"
            }(a || (a = e("ItemsDatabaseEvents", {}))),
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-UI-ButtonSkillEvent.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./ENUM-SkillUIEvents.ts"], (function(t) {
    "use strict";
    var e, n, i, r, l, o, c, s, u, a;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            i = t.initializerDefineProperty,
            r = t.assertThisInitialized
        }
        , function(t) {
            l = t.cclegacy,
            o = t._decorator,
            c = t.Enum,
            s = t.Component
        }
        , function(t) {
            u = t.projectEvent
        }
        , function(t) {
            a = t.SkillUIEvents
        }
        ],
        execute: function() {
            var p, v, f, S, E;
            l._RF.push({}, "eebcbgVMDVBQpDUMV9BhlVs", "TS-UI-ButtonSkillEvent", void 0);
            var I = o.ccclass
              , k = o.property;
            t("TS_UI_ButtonSkillEvent", (p = I("TS_UI_ButtonSkillEvent"),
            v = k({
                type: c(a),
                visible: !0
            }),
            p((E = e((S = function(t) {
                function e() {
                    for (var e, n = arguments.length, l = new Array(n), o = 0; o < n; o++)
                        l[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(l)) || this,
                    i(r(e), "eventID", E, r(e)),
                    e
                }
                return n(e, t),
                e.prototype.raise = function() {
                    var t = a[this.eventID];
                    u.emit(t)
                }
                ,
                e
            }(s)).prototype, "eventID", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return a.SkillUIEvents_FirstSkillClicked
                }
            }),
            f = S)) || f));
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SkinSaveController.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./SaveGame.ts", "./SkinSelectionEvents.ts"], (function(n) {
    "use strict";
    var e, t, r, i, o, c;
    return {
        setters: [function(n) {
            e = n.createClass
        }
        , function(n) {
            t = n.cclegacy,
            r = n._decorator
        }
        , function(n) {
            i = n.projectEvent
        }
        , function(n) {
            o = n.saveGame
        }
        , function(n) {
            c = n.SkinEvents
        }
        ],
        execute: function() {
            var u;
            t._RF.push({}, "ef6c6Uce8FL2qdX7kPmubxn", "SkinSaveController", void 0);
            var s = r.ccclass;
            r.property,
            n("SkinSaveController", s("SkinSaveController")(u = function() {
                function n() {}
                return n.getSkin = function() {
                    return o.getSkin()
                }
                ,
                n.setSkin = function(n) {
                    o.setSkin(n),
                    i.emit(c[c.Skin_PlayerSkinChanged], n)
                }
                ,
                e(n, null, [{
                    key: "skin",
                    get: function() {
                        return o.getSkin()
                    }
                }]),
                n
            }()) || u);
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DropArea.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./InputEnums.ts"], (function(e) {
    "use strict";
    var t, r, n, o, i, a, p, s, c;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            n = e.initializerDefineProperty,
            o = e.assertThisInitialized
        }
        , function(e) {
            i = e.cclegacy,
            a = e._decorator,
            p = e.EventHandler,
            s = e.Component
        }
        , function(e) {
            c = e.DropAreaEvent
        }
        ],
        execute: function() {
            var l, u, d, f, D, g, _, b, v;
            i._RF.push({}, "f05cdFrYUFEhLDfRJevq1qh", "DropArea", void 0);
            var y = a.ccclass
              , h = a.property;
            e("DropArea", (l = y("DropArea"),
            u = h({
                type: [p],
                visible: !0
            }),
            d = h({
                type: [p],
                visible: !0
            }),
            f = h({
                type: [p],
                visible: !0
            }),
            l((_ = t((g = function(e) {
                function t() {
                    for (var t, r = arguments.length, i = new Array(r), a = 0; a < r; a++)
                        i[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(i)) || this,
                    n(o(t), "_onTargeted", _, o(t)),
                    n(o(t), "_onUntargeted", b, o(t)),
                    n(o(t), "_onDroppableDropped", v, o(t)),
                    t
                }
                r(t, e);
                var i = t.prototype;
                return i.setTargetedBy = function(e) {
                    this.node.emit(c[c.DropArea_Targeted], e),
                    p.emitEvents(this._onTargeted, e)
                }
                ,
                i.setUntargetedBy = function(e) {
                    this.node.emit(c[c.DropArea_Untargeted], e),
                    p.emitEvents(this._onUntargeted, e)
                }
                ,
                i.drop = function(e) {
                    this.node.emit(c[c.DropArea_Dropped], e),
                    p.emitEvents(this._onDroppableDropped, e)
                }
                ,
                t
            }(s)).prototype, "_onTargeted", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            b = t(g.prototype, "_onUntargeted", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            v = t(g.prototype, "_onDroppableDropped", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            D = g)) || D));
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS_CharacterMovementStraightLineSteering.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./TS_CharacterMovementBaseSteering.ts"], (function(e) {
    "use strict";
    var t, r, i, n, a, o, c, s;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            i = e.initializerDefineProperty,
            n = e.assertThisInitialized
        }
        , function(e) {
            a = e.cclegacy,
            o = e._decorator,
            c = e.Vec2
        }
        , function(e) {
            s = e.TS_CharacterMovementBaseSteering
        }
        ],
        execute: function() {
            var u, l, p, S;
            a._RF.push({}, "f08648HUWpEjbKKcMlxXOdx", "TS_CharacterMovementStraightLineSteering", void 0);
            var h = o.ccclass
              , g = o.property;
            e("TS_CharacterMovementStraightLineSteering", h("TS_CharacterMovementStraightLineSteering")((p = t((l = function(e) {
                function t() {
                    for (var t, r = arguments.length, a = new Array(r), o = 0; o < r; o++)
                        a[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(a)) || this,
                    i(n(t), "rotationSpeed", p, n(t)),
                    i(n(t), "direction", S, n(t)),
                    t
                }
                return r(t, e),
                t.prototype.start = function() {
                    this.setSteering(this.direction)
                }
                ,
                t
            }(s)).prototype, "rotationSpeed", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            S = t(l.prototype, "direction", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new c
                }
            }),
            u = l)) || u);
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DailyMissionReward.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(i) {
    "use strict";
    var t, e, r, n, a;
    return {
        setters: [function(i) {
            t = i.applyDecoratedDescriptor,
            e = i.createClass,
            r = i.initializerDefineProperty
        }
        , function(i) {
            n = i.cclegacy,
            a = i._decorator
        }
        ],
        execute: function() {
            var s, u, o, l, c, y, p;
            n._RF.push({}, "f112eFKZpRNtZlxswONNEst", "DailyMissionReward", void 0);
            var f = a.ccclass
              , d = a.property;
            i("DailyMissionReward", (s = f("DailyMissionReward"),
            u = d({
                visible: !0
            }),
            o = d({
                visible: !0
            }),
            s((y = t((c = function() {
                function i(i, t) {
                    r(this, "_rewardID", y, this),
                    r(this, "_quantity", p, this),
                    this._rewardID = i,
                    this._quantity = t
                }
                return e(i, [{
                    key: "rewardID",
                    get: function() {
                        return this._rewardID
                    }
                }, {
                    key: "quantity",
                    get: function() {
                        return this._quantity
                    }
                }]),
                i
            }()).prototype, "_rewardID", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            p = t(c.prototype, "_quantity", [o], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            l = c)) || l));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-UI-Button.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, n, i, r, o, a, s, c;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            i = e.initializerDefineProperty,
            r = e.assertThisInitialized
        }
        , function(e) {
            o = e.cclegacy,
            a = e._decorator,
            s = e.EventHandler,
            c = e.Button
        }
        ],
        execute: function() {
            var l, u, h, p, _, d, y;
            o._RF.push({}, "f2ed5XTz8pLGIjSL7eB/6zo", "TS-UI-Button", void 0);
            var f = a.ccclass
              , b = a.property;
            e("TS_UI_Button", (l = f("TS_UI_Button"),
            u = b({
                type: [s],
                visible: !0
            }),
            h = b({
                type: [s],
                visible: !0
            }),
            l((d = t((_ = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
                        o[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    i(r(t), "_onPressed", d, r(t)),
                    i(r(t), "_onReleased", y, r(t)),
                    t
                }
                n(t, e);
                var o = t.prototype;
                return o._onTouchBegan = function(t) {
                    e.prototype._onTouchBegan.call(this, t),
                    !0 === this._interactable && !0 === this.enabledInHierarchy && s.emitEvents(this._onPressed, t)
                }
                ,
                o._onTouchEnded = function(t) {
                    e.prototype._onTouchEnded.call(this, t),
                    !0 === this._interactable && !0 === this.enabledInHierarchy && s.emitEvents(this._onReleased, t)
                }
                ,
                o._onTouchCancel = function(e) {
                    !0 === this._interactable && !0 === this.enabledInHierarchy && s.emitEvents(this._onReleased, e)
                }
                ,
                t
            }(c)).prototype, "_onPressed", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            y = t(_.prototype, "_onReleased", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            p = _)) || p));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PlayerXpDisplay.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./LevelingUpEnums.ts", "./PlayerLevelSettings.ts", "./PlayerLevelController.ts"], (function(e) {
    "use strict";
    var t, l, i, n, r, a, o, p, s, c, u, f, y, d;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            l = e.inheritsLoose,
            i = e.initializerDefineProperty,
            n = e.assertThisInitialized,
            r = e.defineProperty
        }
        , function(e) {
            a = e.cclegacy,
            o = e._decorator,
            p = e.Label,
            s = e.Sprite,
            c = e.Component
        }
        , function(e) {
            u = e.projectEvent
        }
        , function(e) {
            f = e.LevelingUpEvents
        }
        , function(e) {
            y = e.levelingSettings
        }
        , function(e) {
            d = e.PlayerLevelController
        }
        ],
        execute: function() {
            var v, b, _, g, h, L, P;
            a._RF.push({}, "f33f2pN0eBOx5QZe9NdXyzc", "PlayerXpDisplay", void 0);
            var U = o.ccclass
              , x = o.property;
            e("PlayerXpDisplay", (v = U("PlayerXpDisplay"),
            b = x({
                type: p,
                visible: !0
            }),
            _ = x({
                type: s,
                visible: !0
            }),
            v((L = t((h = function(e) {
                function t() {
                    for (var t, l = arguments.length, a = new Array(l), o = 0; o < l; o++)
                        a[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(a)) || this,
                    i(n(t), "_label", L, n(t)),
                    i(n(t), "_fill", P, n(t)),
                    r(n(t), "_xpUpdatedCallback", void 0),
                    t
                }
                l(t, e);
                var a = t.prototype;
                return a.onEnable = function() {
                    var e = this;
                    this.updateLabel(d.xp, y.getXpRequirementForLevel(d.level + 1)),
                    this._xpUpdatedCallback = u.on(f[f.LevelingUp_PlayerXpUpdated], (function(t, l) {
                        e.updateLabel(t, l)
                    }
                    ))
                }
                ,
                a.onDisable = function() {
                    u.off(f[f.LevelingUp_PlayerXpUpdated], this._xpUpdatedCallback),
                    this._xpUpdatedCallback = null
                }
                ,
                a.updateLabel = function(e, t) {
                    this._label.string = e.toFixed() + " / " + t.toFixed(),
                    this._fill.fillRange = e / t
                }
                ,
                t
            }(c)).prototype, "_label", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            P = t(h.prototype, "_fill", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            g = h)) || g));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/BaseSaveGame.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts", "./SaveGameEnums2.ts"], (function(a) {
    "use strict";
    var t, e, n, s, i, r;
    return {
        setters: [function(a) {
            t = a.defineProperty
        }
        , function(a) {
            e = a.cclegacy,
            n = a.sys
        }
        , function(a) {
            s = a.logger
        }
        , function(a) {
            i = a.projectEvent
        }
        , function(a) {
            r = a.SaveGameEvent
        }
        ],
        execute: function() {
            e._RF.push({}, "f404fjsovlKLZr4HhXQKQDM", "BaseSaveGame", void 0);
            a("BaseSaveGame", function() {
                function a() {
                    t(this, "_savedData", null),
                    t(this, "_runningTransaction", null),
                    this.load()
                }
                var e = a.prototype;
                return e.isDataLoaded = function() {
                    return null != this._savedData
                }
                ,
                e.setData = function(a, t) {
                    this._runningTransaction ? this._runningTransaction.setData(a, t) : (this._savedData.setData(a, t),
                    this.save())
                }
                ,
                e.getData = function(a, t) {
                    try {
                        return this._runningTransaction ? this._runningTransaction.getData(a) : this._savedData.getData(a)
                    } catch (a) {
                        return t
                    }
                }
                ,
                e.startTransaction = function() {
                    this._runningTransaction = this.createSaveData(this._savedData)
                }
                ,
                e.commitTransaction = function() {
                    this._savedData = this._runningTransaction,
                    this._runningTransaction = null,
                    this.save()
                }
                ,
                e.rollbackTransaction = function() {
                    this._runningTransaction = null
                }
                ,
                e.save = function() {
                    if (this._savedData) {
                        var a = JSON.stringify(this._savedData, this.replacer);
                        n.localStorage.setItem(this.saveKey, a),
                        s.log("Saved game: " + a)
                    } else
                        s.log("No data to save.")
                }
                ,
                e.load = function() {
                    var a = n.localStorage.getItem(this.saveKey);
                    a ? (this._savedData = this.createSaveData(JSON.parse(a, this.reviver)),
                    s.log("Loaded saved game: " + a)) : (this._savedData = this.createSaveData(),
                    s.log("No data to load."),
                    i.emit(r[r.SaveGame_Loaded]))
                }
                ,
                e.replacer = function(a, t) {
                    return t instanceof Map ? {
                        dataType: "Map",
                        value: Array.from(t.entries())
                    } : t
                }
                ,
                e.reviver = function(a, t) {
                    return "object" == typeof t && null !== t && "Map" === t.dataType ? new Map(t.value) : t
                }
                ,
                a
            }());
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SlimesEatenDailyMissionData.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./SlimeEvents.ts", "./DailyMissionState.ts", "./QuantityDailyMissionData.ts"], (function(t) {
    "use strict";
    var e, i, n, a, s, r, o, l, c, u, y;
    return {
        setters: [function(t) {
            e = t.inheritsLoose,
            i = t.defineProperty,
            n = t.assertThisInitialized,
            a = t.createClass
        }
        , function(t) {
            s = t.cclegacy,
            r = t._decorator
        }
        , function(t) {
            o = t.projectEvent
        }
        , function(t) {
            l = t.SlimeEvents
        }
        , function(t) {
            c = t.DailyMissionState
        }
        , function(t) {
            u = t.QuantityDailyMissionDataSave,
            y = t.QuantityDailyMissionData
        }
        ],
        execute: function() {
            var f, h, D;
            s._RF.push({}, "f5550poXC9FpZHhFhckrfn6", "SlimesEatenDailyMissionData", void 0);
            var S = r.ccclass
              , p = (r.property,
            t("SlimesEatenDailyMissionDataSave", function(t) {
                function i() {
                    return t.apply(this, arguments) || this
                }
                return e(i, t),
                i
            }(u)));
            t("SlimesEatenDailyMissionData", S("SlimesEatenDailyMissionData")((D = h = function(t) {
                function s() {
                    for (var e, a = arguments.length, s = new Array(a), r = 0; r < a; r++)
                        s[r] = arguments[r];
                    return e = t.call.apply(t, [this].concat(s)) || this,
                    i(n(e), "_listening", !1),
                    e
                }
                e(s, t);
                var r = s.prototype;
                return r.createCloneInstance = function() {
                    return new s(this)
                }
                ,
                r.createSaveData = function() {
                    return new p(this)
                }
                ,
                r.enableListeners = function() {
                    this.currentState === c.InProgress && (this._listening = !0,
                    o.on(l[l.Slime_PlayerSlimeEaten], this.onPlayerEaten, this))
                }
                ,
                r.disableListeners = function() {
                    this._listening && o.off(l[l.Slime_PlayerSlimeEaten], this.onPlayerEaten, this)
                }
                ,
                r.onPlayerEaten = function(t, e) {
                    this.increase(1)
                }
                ,
                a(s, [{
                    key: "ID",
                    get: function() {
                        return s._id
                    }
                }, {
                    key: "displayName",
                    get: function() {
                        return "Eat " + this.targetValue + " Slimes"
                    }
                }], [{
                    key: "ID",
                    get: function() {
                        return s._id
                    }
                }]),
                s
            }(y),
            i(h, "_id", "eat-slimes"),
            f = D)) || f);
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Vec3Range.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, n, i, r, c, a;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.createClass,
            i = e.initializerDefineProperty
        }
        , function(e) {
            r = e.cclegacy,
            c = e._decorator,
            a = e.Vec3
        }
        ],
        execute: function() {
            var o, u, s, l;
            r._RF.push({}, "f5738SQYclIUaNYz2GcfDWQ", "Vec3Range", void 0);
            var f = c.ccclass
              , p = c.property;
            e("Vec3Range", f("Vec3Range")((s = t((u = function() {
                function e(e, t) {
                    void 0 === e && (e = new a(0,0,0)),
                    void 0 === t && (t = new a(0,0,0)),
                    i(this, "min", s, this),
                    i(this, "max", l, this),
                    this.min = e,
                    this.max = t
                }
                return n(e, [{
                    key: "Max",
                    get: function() {
                        return this.max
                    }
                }, {
                    key: "Min",
                    get: function() {
                        return this.min
                    }
                }]),
                e
            }()).prototype, "min", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new a(0,0,0)
                }
            }),
            l = t(u.prototype, "max", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new a(0,0,0)
                }
            }),
            o = u)) || o);
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-GameEvents-Listener.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts", "./ENUM-GameEvents.ts", "./TS-Events-Listener.ts"], (function(e) {
    "use strict";
    var t, n, i, s, r, o, a, c, u, l;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            i = e.initializerDefineProperty,
            s = e.assertThisInitialized
        }
        , function(e) {
            r = e.cclegacy,
            o = e._decorator,
            a = e.Enum
        }
        , function(e) {
            c = e.projectEvent
        }
        , function(e) {
            u = e.GameEvents
        }
        , function(e) {
            l = e.TS_Events_Listener
        }
        ],
        execute: function() {
            var v, f, E, p, m;
            r._RF.push({}, "f6ce3V3GtZET7YfWjO8OsBV", "TS-GameEvents-Listener", void 0);
            var h = o.ccclass
              , _ = o.property;
            e("TS_GameEvents_Listener", (v = h("TS_GameEvents_Listener"),
            f = _({
                type: a(u)
            }),
            v((m = t((p = function(e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                        r[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    i(s(t), "slimeEvent", m, s(t)),
                    t
                }
                n(t, e);
                var r = t.prototype;
                return r.onEnable = function() {
                    c.on(u[this.slimeEvent], this.onEventRaised, this)
                }
                ,
                r.onDisable = function() {
                    c.off(u[this.slimeEvent], this.onEventRaised, this)
                }
                ,
                t
            }(l)).prototype, "slimeEvent", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return u.Game_Defeat
                }
            }),
            E = p)) || E));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-UI-ButtonEvent.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./ProjectEvent.ts"], (function(t) {
    "use strict";
    var n, e, i, r, o, c, l, s, u, a, v;
    return {
        setters: [function(t) {
            n = t.applyDecoratedDescriptor,
            e = t.inheritsLoose,
            i = t.initializerDefineProperty,
            r = t.assertThisInitialized,
            o = t.defineProperty
        }
        , function(t) {
            c = t.cclegacy,
            l = t._decorator,
            s = t.Button,
            u = t.EventHandler,
            a = t.Component
        }
        , function(t) {
            v = t.projectEvent
        }
        ],
        execute: function() {
            var p, h, _;
            c._RF.push({}, "f964aRkVl1H94vry3UKRWOf", "TS-UI-ButtonEvent", void 0);
            var d = l.ccclass
              , f = l.property
              , E = l.requireComponent;
            t("TS_UI_ButtonEvent", d("TS_UI_ButtonEvent")(p = E(s)((_ = n((h = function(t) {
                function n() {
                    for (var n, e = arguments.length, c = new Array(e), l = 0; l < e; l++)
                        c[l] = arguments[l];
                    return n = t.call.apply(t, [this].concat(c)) || this,
                    i(r(n), "eventID", _, r(n)),
                    o(r(n), "_button", null),
                    o(r(n), "_clickEventHandler", null),
                    o(r(n), "test", []),
                    n
                }
                e(n, t);
                var c = n.prototype;
                return c.start = function() {}
                ,
                c.onEnable = function() {
                    this._button = this.node.getComponent(s),
                    this._clickEventHandler = new u,
                    this._clickEventHandler.target = this.node,
                    this._clickEventHandler.component = "TS_UI_ButtonEvent",
                    this._clickEventHandler.handler = "buttonClickHandler",
                    this._button.clickEvents.push(this._clickEventHandler)
                }
                ,
                c.onDisable = function() {
                    var t = this._button.clickEvents.indexOf(this._clickEventHandler);
                    this._button.clickEvents.splice(t, 1)
                }
                ,
                c.buttonClickHandler = function(t, n) {
                    this.test.push(t)
                }
                ,
                c.raise = function() {
                    v.emit(this.eventID)
                }
                ,
                n
            }(a)).prototype, "eventID", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            p = h)) || p) || p);
            c._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameOverCoinsDisplayToast.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var i, t, n, r, o, a, s, l, u;
    return {
        setters: [function(e) {
            i = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            n = e.initializerDefineProperty,
            r = e.assertThisInitialized
        }
        , function(e) {
            o = e.cclegacy,
            a = e._decorator,
            s = e.Label,
            l = e.animation,
            u = e.Component
        }
        ],
        execute: function() {
            var p, c, m, b, f, g, y, _, d;
            o._RF.push({}, "f9fe013MwFNZb49dpCxXP29", "GameOverCoinsDisplayToast", void 0);
            var v = a.ccclass
              , C = a.property;
            e("GameOverCoinsDisplayToast", (p = v("GameOverCoinsDisplayToast"),
            c = C({
                type: s,
                visible: !0,
                group: {
                    id: "components",
                    name: "Components"
                }
            }),
            m = C({
                type: l.AnimationController,
                visible: !0,
                group: {
                    id: "animation",
                    name: "Animation"
                }
            }),
            b = C({
                visible: !0,
                group: {
                    id: "animation",
                    name: "Animation"
                }
            }),
            p((y = i((g = function(e) {
                function i() {
                    for (var i, t = arguments.length, o = new Array(t), a = 0; a < t; a++)
                        o[a] = arguments[a];
                    return i = e.call.apply(e, [this].concat(o)) || this,
                    n(r(i), "_label", y, r(i)),
                    n(r(i), "_animator", _, r(i)),
                    n(r(i), "_updateCoinsTrigger", d, r(i)),
                    i
                }
                return t(i, e),
                i.prototype.setCoins = function(e) {
                    this._label.string = e.toFixed(),
                    this._animator.setValue(this._updateCoinsTrigger, !0)
                }
                ,
                i
            }(u)).prototype, "_label", [c], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            _ = i(g.prototype, "_animator", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            d = i(g.prototype, "_updateCoinsTrigger", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "refresh"
                }
            }),
            f = g)) || f));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/AudioManager.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc", "./Logger.ts", "./ProjectEvent.ts", "./AudioListener.ts", "./AudioEnums.ts", "./AudioObject.ts", "./ObjectPool.ts"], (function(e) {
    "use strict";
    var i, o, n, a, t, u, d, r, s, l, c, A, g, f, h, y, _, p, E, S, b, v, m, D, w;
    return {
        setters: [function(e) {
            i = e.defineProperty,
            o = e.inheritsLoose,
            n = e.assertThisInitialized,
            a = e.createClass
        }
        , function(e) {
            t = e.cclegacy,
            u = e._decorator,
            d = e.systemEvent,
            r = e.SystemEventType,
            s = e.director,
            l = e.Director,
            c = e.Node,
            A = e.game,
            g = e.Prefab,
            f = e.KeyCode,
            h = e.AudioSource,
            y = e.sys,
            _ = e.Component
        }
        , function(e) {
            p = e.logger,
            E = e.LogCategory,
            S = e.LogType
        }
        , function(e) {
            b = e.projectEvent
        }
        , function(e) {
            v = e.AudioListener
        }
        , function(e) {
            m = e.AudioEvent
        }
        , function(e) {
            D = e.AudioObject
        }
        , function(e) {
            w = e.ObjectPool
        }
        ],
        execute: function() {
            var C, M, L;
            t._RF.push({}, "fa285OT0dpI3qmSmqpPzoY2", "AudioManager", void 0);
            var I = u.ccclass
              , N = u.executionOrder;
            e("AudioManager", I("AudioManager")(C = N(-10)((L = M = function(e) {
                function t() {
                    for (var o, a = arguments.length, t = new Array(a), u = 0; u < a; u++)
                        t[u] = arguments[u];
                    return o = e.call.apply(e, [this].concat(t)) || this,
                    i(n(o), "_loadedAudioData", []),
                    i(n(o), "_audioObjectPool", new w((function() {
                        return new D
                    }
                    ),5)),
                    i(n(o), "_availableAudioSources", []),
                    i(n(o), "_playingAudioSources", []),
                    i(n(o), "_isAudioEnabled", !0),
                    i(n(o), "_storageKey", "debugIsAudioEnabled"),
                    o
                }
                o(t, e);
                var u = t.prototype;
                return u.onLoad = function() {
                    t._instance != this && (p.log("ERROR: Audio manager already exists", E.Audio, S.Warning),
                    this.node.destroy())
                }
                ,
                u.onEnable = function() {
                    d.on(r.KEY_DOWN, this.onMuteKeyDown, this)
                }
                ,
                u.start = function() {
                    s.on(l.EVENT_AFTER_SCENE_LAUNCH, this.onChangedScene, this),
                    this.initializeAvailableAudioSourcesList(),
                    b.emit(m.AudioManagerInitialized)
                }
                ,
                u.onDisable = function() {
                    d.off(r.KEY_DOWN, this.onMuteKeyDown, this)
                }
                ,
                u.onDestroy = function() {
                    s.off(l.EVENT_AFTER_SCENE_LAUNCH, this.onChangedScene, this)
                }
                ,
                t.instantiateNewAudioManager = function(e) {
                    if (void 0 === e && (e = null),
                    null == t._instance) {
                        var i = new c("AudioManager");
                        t._instance = i.addComponent(t),
                        A.addPersistRootNode(i),
                        e && t._instance.load(e)
                    } else
                        p.log("Can't instantiate a new AudioManager when one already exists.", E.Audio, S.Error)
                }
                ,
                u.load = function(e) {
                    return e ? this.findAudioDataIndex(e) > -1 ? (p.log("Error loading AudioData. The AudioData " + e.node.name + " is already loaded", E.Audio, S.Error),
                    !1) : (this._loadedAudioData.push(e),
                    !0) : (p.log("Error loading AudioData. The AudioData object is null", E.Audio, S.Error),
                    !1)
                }
                ,
                u.unload = function(e) {
                    var i = this.findAudioDataIndex(e);
                    return i > -1 ? (this._loadedAudioData.splice(i, 1),
                    !0) : (p.log("Error unloading AudioData. The AudioData " + e.node.name + " was not loaded", E.Audio, S.Error),
                    !1)
                }
                ,
                u.playSpatialSound = function(e, i, o) {
                    if (void 0 === o && (o = 1),
                    p.log("Playing spatial sound from " + i + ", original scale = " + o, E.Audio),
                    v.instance) {
                        o *= v.instance.getVolumeScale(i),
                        p.log("Final scale = " + o, E.Audio);
                        var n = this.playByKey(e);
                        return n && n.scaleVolume(o),
                        n
                    }
                    var a = this.playByKey(e);
                    return a && a.scaleVolume(o),
                    a
                }
                ,
                u.playByKey = function(e) {
                    var i = this;
                    if (e instanceof g)
                        return p.log("Play by key with prefab is deprecated. Consider changing to string keys!"),
                        void this.playByKey(e.data.name);
                    if (!e)
                        return p.log("Received null key to play audio", E.Audio, S.Error),
                        null;
                    if (0 == this._loadedAudioData.length)
                        return p.log("Can not play audio. No audio data was loaded", E.Audio, S.Error),
                        null;
                    var o = this.findAudio(e);
                    if (o) {
                        var n = this.getAvailableAudioSource()
                          , a = this._audioObjectPool.get();
                        return a.initialize(o, n, !this._isAudioEnabled, (function() {
                            i.releaseAudioSource(n)
                        }
                        )),
                        a.play(),
                        a
                    }
                    return p.log("Can not play audio. No audio was found with key " + e, E.Audio, S.Error),
                    null
                }
                ,
                u.onMuteKeyDown = function(e) {
                    e.keyCode == f.KEY_M && (this.audioEnabled = !this._isAudioEnabled)
                }
                ,
                u.onAudioEnabled = function() {
                    p.log("Audio enabled", E.Audio),
                    this._isAudioEnabled = !0,
                    b.emit(m.SetMuted, !this._isAudioEnabled)
                }
                ,
                u.onAudioDisabled = function() {
                    p.log("Audio disabled", E.Audio),
                    this._isAudioEnabled = !1,
                    b.emit(m.SetMuted, !this._isAudioEnabled)
                }
                ,
                u.getAvailableAudioSource = function() {
                    var e;
                    return this._availableAudioSources.length > 0 ? (e = this._availableAudioSources[0],
                    this._availableAudioSources.splice(0, 1)) : e = this.newAudioSource(),
                    this._playingAudioSources.push(e),
                    e
                }
                ,
                u.newAudioSource = function() {
                    var e = new c("AudioSource")
                      , i = e.addComponent(h);
                    return e.setParent(s.getScene()),
                    i
                }
                ,
                u.releaseAudioSource = function(e) {
                    e || p.log("Releasing a null audioSource? AudioManager is confused :/");
                    var i = this._playingAudioSources.findIndex((function(i) {
                        return i === e
                    }
                    ));
                    -1 == i ? p.log("Released audio source was not listed as in use. AudioManager is sad :(") : (this._playingAudioSources.splice(i, 1),
                    this._availableAudioSources.push(e))
                }
                ,
                u.onChangedScene = function() {
                    this.initializeAvailableAudioSourcesList(),
                    this._playingAudioSources = []
                }
                ,
                u.initializeAvailableAudioSourcesList = function(e) {
                    void 0 === e && (e = 5),
                    this._availableAudioSources = [];
                    for (var i = 0; i < e; i++)
                        this._availableAudioSources.push(this.newAudioSource())
                }
                ,
                u.findAudioDataIndex = function(e) {
                    return this._loadedAudioData.findIndex((function(i) {
                        return i == e
                    }
                    ))
                }
                ,
                u.findAudio = function(e) {
                    for (var i = this._loadedAudioData.length - 1; i > -1; i--) {
                        var o = this._loadedAudioData[i].getItem(e);
                        if (o)
                            return o
                    }
                    return null
                }
                ,
                u.setLocalData = function(e, i) {
                    "undefined" != typeof GameSnacks ? GameSnacks.storage.setItem(e, i) : y.localStorage.setItem(e, i)
                }
                ,
                u.getLocalData = function(e) {
                    return "undefined" != typeof GameSnacks ? GameSnacks.storage.getItem(e) : y.localStorage.getItem(e)
                }
                ,
                a(t, [{
                    key: "audioEnabled",
                    get: function() {
                        return this._isAudioEnabled
                    },
                    set: function(e) {
                        this._isAudioEnabled = e,
                        e ? this.onAudioEnabled() : this.onAudioDisabled()
                    }
                }], [{
                    key: "instance",
                    get: function() {
                        return t._instance
                    }
                }]),
                t
            }(_),
            i(M, "_instance", null),
            C = L)) || C) || C);
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameOverTotalCoinsDisplay.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, i, n, r, o, s, a, l, u, c, p, h;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            n = e.initializerDefineProperty,
            r = e.assertThisInitialized,
            o = e.defineProperty
        }
        , function(e) {
            s = e.cclegacy,
            a = e._decorator,
            l = e.Label,
            u = e.EventHandler,
            c = e.tween,
            p = e.math,
            h = e.Component
        }
        ],
        execute: function() {
            var _, d, f, v, b, y, g;
            s._RF.push({}, "fba3f+FZw9DFaNAZYiJHxY0", "GameOverTotalCoinsDisplay", void 0);
            var m = a.ccclass
              , C = a.property;
            e("GameOverTotalCoinsDisplay", (_ = m("GameOverTotalCoinsDisplay"),
            d = C({
                type: l,
                visible: !0
            }),
            f = C({
                type: [u],
                visible: !0
            }),
            _((y = t((b = function(e) {
                function t() {
                    for (var t, i = arguments.length, s = new Array(i), a = 0; a < i; a++)
                        s[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(s)) || this,
                    n(r(t), "_label", y, r(t)),
                    n(r(t), "_onCoinsAdded", g, r(t)),
                    o(r(t), "_coins", void 0),
                    o(r(t), "_targetValue", 0),
                    o(r(t), "_tween", null),
                    t
                }
                i(t, e);
                var s = t.prototype;
                return s.setCoins = function(e) {
                    this._coins = e,
                    this.refresh()
                }
                ,
                s.addCoins = function(e) {
                    this._coins += e,
                    this.refresh(),
                    u.emitEvents(this._onCoinsAdded)
                }
                ,
                s.refresh = function(e) {
                    var t = this;
                    void 0 === e && (e = .3),
                    this._tween && (this._label.string = this._targetValue.toFixed(),
                    this._tween.stop());
                    var i = Number.parseInt(this._label.string)
                      , n = this._coins;
                    this._targetValue = n,
                    this._tween = c(this).to(e, null, {
                        onUpdate: function(e, t) {
                            e._label.string = p.lerp(i, n, t).toFixed()
                        },
                        onComplete: function() {
                            t._tween = null
                        }
                    }).start()
                }
                ,
                t
            }(h)).prototype, "_label", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            g = t(b.prototype, "_onCoinsAdded", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            v = b)) || v));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TS-SpeedTracker.ts", ["./_rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, r, n, i, a, o, c, l, p, u;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            n = e.initializerDefineProperty,
            i = e.assertThisInitialized
        }
        , function(e) {
            a = e.cclegacy,
            o = e._decorator,
            c = e.RigidBody,
            l = e.EventHandler,
            p = e.Vec3,
            u = e.Component
        }
        ],
        execute: function() {
            var s, d, f, y, g, h, S;
            a._RF.push({}, "fd238PDDPlJVqsyoq4sBAVf", "TS-SpeedTracker", void 0);
            var T = o.ccclass
              , v = o.property;
            e("TS_SpeedTracker", (s = T("TS_SpeedTracker"),
            d = v(c),
            f = v(l),
            s((h = t((g = function(e) {
                function t() {
                    for (var t, r = arguments.length, a = new Array(r), o = 0; o < r; o++)
                        a[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(a)) || this,
                    n(i(t), "target", h, i(t)),
                    n(i(t), "onUpdate", S, i(t)),
                    t
                }
                return r(t, e),
                t.prototype.update = function() {
                    var e = new p;
                    this.target.getLinearVelocity(e),
                    this.onUpdate.emit([e.length()])
                }
                ,
                t
            }(u)).prototype, "target", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            S = t(g.prototype, "onUpdate", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            y = g)) || y));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/BundleEvents.ts", ["cc"], (function(e) {
    "use strict";
    var n;
    return {
        setters: [function(e) {
            n = e.cclegacy
        }
        ],
        execute: function() {
            var d;
            e("BundleEvents", void 0),
            n._RF.push({}, "ff63avKXiVHSq0KsUXYm5jx", "BundleEvents", void 0),
            function(e) {
                e[e.Bundle_SlimesLoaded = 0] = "Bundle_SlimesLoaded",
                e[e.Bundle_WorldsLoaded = 1] = "Bundle_WorldsLoaded"
            }(d || (d = e("BundleEvents", {}))),
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/main", ["./Logger.ts", "./ProjectEvent.ts", "./LevelingUpEnums.ts", "./XpRewardSettings.ts", "./Range.ts", "./ENUM-GameEvents.ts", "./TS-BattleRoyale-SafeArea.ts", "./SlimeEvents.ts", "./TS-Score-Tracker.ts", "./AudioListener.ts", "./AudioEnums.ts", "./AudioObject.ts", "./ObjectPool.ts", "./AudioManager.ts", "./TS-SlimeDamageBlink.ts", "./Vec3Range.ts", "./TS-Settings-Slime.ts", "./TS_Slime.ts", "./TS_CharacterMovement.ts", "./AIError.ts", "./AIThreat.ts", "./AISlimeThreat.ts", "./TS-Slime-AI-Movement-BaseBehavior.ts", "./TS-Slime-AI-Movement-WanderBehavior.ts", "./SpriteHelper.ts", "./TS-Camera-Gameplay.ts", "./FrustumTarget.ts", "./DailyMissionsSetSave.ts", "./PlayerLevelData.ts", "./PlayerLevelSettings.ts", "./ItemSave.ts", "./Item.ts", "./SaveGameData.ts", "./SaveGameEnums.ts", "./SaveGame.ts", "./PlayerPurseEnums.ts", "./PlayerPurseController.ts", "./PlayerLevelController.ts", "./LevelUpRewardedAdEvents.ts", "./GameOverAnimatedXpDisplay.ts", "./GameOverCoinsDisplayToast.ts", "./GameOverTotalCoinsDisplay.ts", "./GameOverLevelDisplay.ts", "./GameOverLevelDisplayDirector.ts", "./SkinSelectionEvents.ts", "./SkinSaveController.ts", "./SkinSelection-SetModel.ts", "./TS-AnimationEvent-Raiser.ts", "./DailyMissionDataFactory.ts", "./TweenEnums.ts", "./TweenBase.ts", "./TweenCollection.ts", "./VirutalJoystick%20enums.ts", "./UIVirtualJoystick.ts", "./TweenNodePosition.ts", "./TS-Particle.ts", "./DailyMissionsEvents.ts", "./TS-AI-SkillsManager.ts", "./TS-Events-Listener.ts", "./TS-SlimeEvents-Listener.ts", "./TS-Rotate.ts", "./TweenNodeScale.ts", "./PrefabPool.ts", "./TS-Slime-SkillConfig-Shoot.ts", "./TS_SlimeFood_Settings.ts", "./TS-SlimeFood.ts", "./TS-SlimeFood-Bullet.ts", "./TS-Slime-Skill-Shoot.ts", "./IVelocity2D.ts", "./TS_CharacterMovementBaseSteering.ts", "./AISafeAreaThreat.ts", "./BrainState.ts", "./TS-Slime-AI-Brain.ts", "./AISteeringOption.ts", "./TS_CharacterMovemenAISteering.ts", "./ISafeAreaObject.ts", "./PunchTweenBase.ts", "./ColorEntry.ts", "./TS-Slime-ColorsData.ts", "./TS_Slime_SetModelColor.ts", "./AxisInput.ts", "./WorldEvents.ts", "./TS-WorldEvents-Listener.ts", "./BundleLoader.ts", "./TweenUIOpacity.ts", "./DailyMissionState.ts", "./DailyMissionDifficulty.ts", "./DailyMissionReward.ts", "./DailyMissionDisplayName.ts", "./DailyMissionData.ts", "./QuantityDailyMissionData.ts", "./AnimationEnums.ts", "./AnimationGraphHelper.ts", "./TS-Slime-BaseAbsorb.ts", "./TS-Slime-SlimeAbsorb.ts", "./TS-Slime-SlimeAbsorb-Consume.ts", "./IAdRequest.ts", "./BundleEvents.ts", "./SlimesBundleLoader.ts", "./GameSlimesManager.ts", "./TS-SetText.ts", "./TS-OrdinalSetText.ts", "./DailyMissionsSaveController.ts", "./DailyMissionsSet.ts", "./ItemsSaveController.ts", "./TS-Slime-SkillConfig-SpeedBoost.ts", "./GSGameEventsEmitter.ts", "./SlimePlayerHighestMassController.ts", "./TS-Slime-Player.ts", "./ENUM-SkillUIEvents.ts", "./TS-Slime-Skill-SpeedBoost.ts", "./TS-Slime-AI-Skills-BaseBehavior.ts", "./TS-Slime-AI-Skills-SpeedBoostBehavior.ts", "./CrystalsDailyMissionData.ts", "./DashSlimesEatenDailyMissionData.ts", "./DivideState.ts", "./VirtualJoystick.ts", "./TS_CharacterMovemenJoystickSteering.ts", "./TS_Slime_ModelLoader.ts", "./TS_Slime_ModelRandomizer.ts", "./TS-Slime-SkillConfig-Divide.ts", "./TS-Slime-Skill-Divide.ts", "./DivideSlimesEatenDailyMissionData.ts", "./SlimesEatenDailyMissionData.ts", "./BooleanDailyMissionData.ts", "./SurviveDailyMissionData.ts", "./SlimesMissionsDataFactory.ts", "./TS_CharacterMovementArrowsSteering.ts", "./AdsEvents.ts", "./RewardedAdOportunity.ts", "./PanelEnums.ts", "./PanelManager.ts", "./Panel.ts", "./TS-Slime-FaceForward.ts", "./TweenPunchScale.ts", "./TS-UI-ButtonEvent.ts", "./TS-UI-ButtonSlimeEvent.ts", "./TS-SafeAreaAffectedMaterials.ts", "./AnimationVariableType.ts", "./TS-UI-ButtonGameEvent.ts", "./ItemsDatabaseEvents.ts", "./ItemsDatabase.ts", "./DebugDraw.ts", "./TS-Player-Score-Tracker.ts", "./TS-AnimationGraph-Helper.ts", "./TS-Slime-AnimationBlend.ts", "./AudioItem.ts", "./AudioData.ts", "./AudioManagerInitializer.ts", "./KillBotsCheat.ts", "./UI-Fillbar.ts", "./MeshColor-Setter.ts", "./TS-OnEnable.ts", "./UICamera.ts", "./TS-Slime-FoodAbsorb.ts", "./TS-OnStart.ts", "./TutorialSaveController.ts", "./SkinSelection-UpdateTextureSprites.ts", "./WorldSaveController.ts", "./WorldShadowSelector.ts", "./ITFC-ISlimeDecayMultiplier.ts", "./InputEnums.ts", "./Draggable.ts", "./Holdable.ts", "./Tappable.ts", "./TouchController.ts", "./FollowDragOnGroundExample.ts", "./gamesnacks.ts", "./AnimationEventRaiser.ts", "./TS_Slime_ModelColorElement.ts", "./OnEnable.ts", "./PositionLogger.ts", "./FlowController.ts", "./TS-Slime-AI-Movement-FleeBehavior.ts", "./PlayerCoinsDisplay.ts", "./GSGameReadyEmitter.ts", "./SlimeDisabler.ts", "./TS-TouchController.ts", "./AnimationStateComponent_EventHandler.ts", "./DailyMissionsListener.ts", "./AnimationHelperVariable.ts", "./DailyMissionEntryUI.ts", "./GSAudioController.ts", "./TS-Slime-SlimeAbsorb-Animation.ts", "./TS-UI-Label.ts", "./OnStart.ts", "./TS_Slime_ModelSelection.ts", "./DailyMissionRewardFactory.ts", "./DailyMissionManager.ts", "./TS-Slime-Bot.ts", "./TS-ScaleTracker.ts", "./PlayerLevelDisplay.ts", "./TS-Game-Victory.ts", "./SlimesDailyMissionEntryUI.ts", "./StoreItem.ts", "./StoreController.ts", "./SelectedStoreItemUIController.ts", "./LevelUpRewardedAdController.ts", "./UICameraGetter.ts", "./TS_Slime_Scale.ts", "./CurrencyDailyMissionReward.ts", "./SlimesRewardsFactory.ts", "./ThreatType.ts", "./TS-DivideStateEvents-Listener.ts", "./UIClickSFX.ts", "./TweenNodeRotation.ts", "./NodeHelper.ts", "./PunchRotationTween.ts", "./Ts-Color-Setter.ts", "./AdButtonShower.ts", "./AnimationHelperVariable2.ts", "./AudioProxy.ts", "./WorldsBundleLoader.ts", "./ButtonHelper.ts", "./DailyMissionsUI.ts", "./DistributeReward.ts", "./PunchScaleTween.ts", "./TS-Slime-AI-Movement-ChaseBehavior.ts", "./WorldSelection.ts", "./TimedDisabler.ts", "./TutorialController.ts", "./TS-UI-Button-Helper.ts", "./TS_Slime_MaxSpeed.ts", "./PunchPositionTween.ts", "./SaveGameEnums2.ts", "./TS-Slime-AI-Skills-DivideBehavior.ts", "./TS-Slime-AI-Movement-SafeAreaBehavior.ts", "./TS-PositionTracker.ts", "./CloneData.ts", "./TS-Node.ts", "./TS-Camera-Zoom.ts", "./SkinSelection-SetTexture.ts", "./RigidbodyHelper.ts", "./CameraVisiblity.ts", "./TS-Events-Raiser.ts", "./TS_CharacterMovementWandererSteering.ts", "./TS_CharacterMovementChaserSteering.ts", "./PlayerSlimeSelectionCreator.ts", "./TS-PlayerTrackerData-Setter.ts", "./TS-Scene-Loader.ts", "./DropArea.ts", "./Droppable.ts", "./TS-Slime-AnimationSpeed.ts", "./BaseSaveGameData.ts", "./AudioDataLoader.ts", "./ITFC-ISlimeMaxSpeedMultiplier.ts", "./TS-TouchDebugger.ts", "./TS-SlimeFood-Spawner.ts", "./TS-UI-ButtonSkinSelectionEvent.ts", "./TS-UI-ButtonSkillEvent.ts", "./TS_CharacterMovementStraightLineSteering.ts", "./TS-UI-Button.ts", "./PlayerXpDisplay.ts", "./BaseSaveGame.ts", "./TS-GameEvents-Listener.ts", "./TS-SpeedTracker.ts"], (function() {
    "use strict";
    return {
        setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        execute: function() {}
    }
}
));

(function(r) {
    r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
}
)(function(mid, cid) {
    System.register(mid, [cid], function(_export, _context) {
        return {
            setters: [function(_m) {
                var _exportObj = {};

                for (var _key in _m) {
                    if (_key !== "default" && _key !== "__esModule")
                        _exportObj[_key] = _m[_key];
                }

                _export(_exportObj);
            }
            ],
            execute: function() {}
        };
    });
});
