var AE = AE || {};
AE.extendObjectContainer = function(e) {
    PIXI.DisplayObjectContainer.call(e)
};
AE.getContainer = function() {
    return new PIXI.Container
};
AE.getResponsiveContainer = function(e) {
    return e.xLandscape = e.xLandscape || 0, e.yLandscape = e.yLandscape || 0, e.xPortrait = e.xPortrait || 0, e.yPortrait = e.yPortrait || 0, e.horizontalAlignment = e.horizontalAlignment || AE.ResponsiveContainer.align.CENTER, e.verticalAlignment = e.verticalAlignment || AE.ResponsiveContainer.align.CENTER, new AE.ResponsiveContainer(gameApp.gameView, e.xLandscape, e.yLandscape, e.xPortrait, e.yPortrait, e.horizontalAlignment, e.verticalAlignment)
};
AE.addChild = function(e, t) {
    t.addChild(e)
};
AE.addChildAt = function(e, t, i) {
    t.addChildAt(e, i)
};
AE.removeChild = function(e, t) {
    t.removeChild(e)
};
AE.getRectangle = function(e, t, i, o) {
    var s = new PIXI.Graphics,
        n = 1,
        r = 0,
        a = 0,
        h = 0;
    return i = void 0 !== i ? i : 0, void 0 !== o && (n = void 0 !== o.opacity ? o.opacity : 1, r = void 0 !== o.borderWidth ? o.borderWidth : 0, a = void 0 !== o.borderColor ? o.borderColor : 0, h = void 0 !== o.borderRadius ? o.borderRadius : 0), s.beginFill(i, n), s.lineStyle(r, a), h > 0 ? s.drawRoundedRect(0, 0, e, t, h) : s.drawRect(0, 0, e, t), s.endFill(), s
};
AE.getPolygon = function(e, t) {
    void 0 == t && (t = 0);
    var i = (e.length, new PIXI.Graphics);
    return i.beginFill(t), i.drawPolygon(e), i.endFill(), i
};
AE.getTexture = function(e, t) {
    try {
        return PIXI.Texture.fromFrame(e)
    } catch (i) {
        if (t) throw i
    }
};
AE.setTexture = function(e, t) {
    try {
        e.texture = PIXI.utils.TextureCache[t];
    } catch (i) {}
};
AE.getSprite = function(e) {
    var t;
    if (e.length > 0) {
        var i;
        i = this.getTexture(e), t = new PIXI.Sprite(i)
    } else t = new PIXI.Sprite;
    return t
};
AE.getMovieClip = function(e, t) {
    for (var i = [], o = e.length, s = 0; o > s; s++) i.push(this.getTexture(e[s], t));
    var n = new PIXI.extras.AnimatedSprite(i);
    return n.anchor.set(.5, .5), n
};
AE.getAnimatedSprite = function(e) {
    for (var t = [], i = (void 0 !== e.prefix ? e.prefix : "", void 0 !== e.frames ? e.frames : 0), o = 1; i >= o; o++) {
        var s = e.prefix + (9 >= o ? "0" + o : o);
        t.push(this.getTexture(s))
    }
    var n = new PIXI.extras.AnimatedSprite(t);
    return n.anchor.set(.5, .5), n
};
AE.getTextField = function(e, t) {
    t = t || {};
    var e;
    return e = "bitmapFont" == t.type ? new PIXI.extras.BitmapText(e, t) : new AE.Text(e, t)
};
AE.getCozyTextField = function(e, t) {
    t = t || {};
    var e = new AE.Text(e, t);
    return e
};
AE.getButton = function(e) {
    var t = [];
    t.push(this.getTexture(e + "_up"));
    try {
        t.push(this.getTexture(e + "_over", !0))
    } catch (i) {
        t.push(this.getTexture(e + "_up"))
    }
    try {
        t.push(this.getTexture(e + "_down", !0))
    } catch (i) {
        t.push(this.getTexture(e + "_up"))
    }
    try {
        t.push(this.getTexture(e + "_inactive", !0))
    } catch (i) {
        t.push(this.getTexture(e + "_up"))
    }
    var o = new PIXI.extras.AnimatedSprite(t);
    return o.interactive = !0, o.buttonMode = !0, o.mousedown = function(e) {
        o.gotoAndStop(2)
    }, o.mouseover = function(e) {
        o.gotoAndStop(1)
    }, o.mouseout = function(e) {
        o.gotoAndStop(0)
    }, o
};
AE.getResponsiveButton = function(e, t) {
    var i = AE.getResponsiveContainer(t);
    i.interactive = !0;
    var o = AE.getButton(e);
    return AE.addChild(o, i), i.updateSize(), i
};
AE.addEvent = function(e, t) {
    e[gameApp.tapEvent] = t
};
AE.addStartEvent = function(e, t) {
    e[gameApp.tapStart] = t
};
AE.addEndEvent = function(e, t) {
    e[gameApp.tapEnd] = t
};
AE.addMouseOverEvent = function(e, t) {
    e.mouseover = t
};
AE.addMouseOutEvent = function(e, t) {
    e.mouseout = t
};
AE.removeAllEvent = function(e) {}, AE.applyBlur = function(e, t) {
    var i = new PIXI.filters.BlurYFilter;
    i.blur = t, e.filters = [i]
};
AE.removeBlur = function(e) {
    e.filters = void 0
};
AE.mouseEnable = function(e) {
    e.interactive = !0, e.buttonMode = !0, e.textures && e.textures.length >= 1 && e.gotoAndStop(0)
};
AE.mouseDisable = function(e) {
    e.interactive = !1, e.buttonMode = !1, e.textures && e.textures.length >= 4 && e.gotoAndStop(3)
};
AE.showObject = function(e) {
    e.visible = !0
};
AE.hideObject = function(e) {
    e.visible = !1
};
AE.setScale = function(e, t) {
    void 0 !== t.x && (e.scale.x = t.x), void 0 !== t.y && (e.scale.y = t.y)
};
AE.setRotation = function(e, t) {
    e.rotation = AE.getRadians(t)
};
AE.setPosition = function(e, t) {
    void 0 !== t.x && (e.position.x = t.x), void 0 !== t.y && (e.position.y = t.y)
};
AE.setText = function(e, t) {
    e.text = t
};
AE.setAnchor = function(e, t) {
    e.anchor.set(t.x, t.y)
};
AE.setAlpha = function(e, t) {
    e.alpha = t
};
AE.setWidth = function(e, t) {
    e.width = t
};
AE.setHeight = function(e, t) {
    e.height = t
};
AE.getWidth = function(e) {
    return e.width
};
AE.getHeight = function(e) {
    return e.height
};
AE.getRandomRange = function(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e
};
AE.getFormattedAmount = function(e) {
    return "$" + (e / 100).toFixed(2)
};
AE.getFormattedNumber = function(e) {
    return (e / 100).toFixed(2)
};
AE.getRadians = function(e) {
    return e * Math.PI / 180
};
AE.getDegrees = function(e) {
    return e * (180 / Math.PI)
};
AE.addGlow = function(e) {
    var t = new PIXI.GlowFilter,
        i = [t];
    e.filters = i
};
AE.removeFilters = function(e) {
    e.filters = []
};
AE.cloneObject = function(e) {
    "use strict";
    var t;
    for (t in e) this[t] = "object" == typeof e[t] ? new AE.cloneObject(e[t]) : e[t]
};
AE.trim = function(e, t) {
    "use strict";
    return null === e ? "" : AE.ltrim(AE.rtrim(e, t), t)
};
AE.ltrim = function(e, t) {
    "use strict";
    return t = t || "\\s", e.replace(new RegExp("^[" + t + "]+", "g"), "")
};
AE.rtrim = function(e, t) {
    "use strict";
    return t = t || "\\s", e.replace(new RegExp("[" + t + "]+$", "g"), "")
};
AE.addClass = function(e, t) {
    "use strict";
    if (void 0 !== document.getElementById(e)) {
        var i = document.getElementById(e);
        AE.addClassToNode(i, t)
    }
};
AE.removeClass = function(e, t) {
    "use strict";
    if (void 0 !== document.getElementById(e)) {
        var i = document.getElementById(e);
        AE.removeClassFromNode(i, t)
    }
};
AE.addClassToNode = function(e, t) {
    "use strict";
    if (void 0 !== e) {
        var i = AE.trim(e.className);
        t = AE.trim(t), -1 === i.indexOf(t) && (e.setAttribute("class", i + " " + t), e.setAttribute("className", i + " " + t))
    }
};
AE.removeClassFromNode = function(e, t) {
    "use strict";
    if (void 0 !== e) {
        var i, o = AE.trim(e.className);
        t = AE.trim(t), -1 !== o.indexOf(t) && (i = o.indexOf(t), o = AE.trim(o.substring(0, i) + o.substring(i + t.length))), e.setAttribute("class", o), e.setAttribute("className", o)
    }
};
AE.removeAllClassesFromNode = function(e) {
    "use strict";
    void 0 !== e && (e.setAttribute("class", ""), e.setAttribute("className", ""))
};