function _$(a) {
    return document.getElementById(a)
}

function _$$(a, b) {
    if (b) {
        return b.querySelectorAll(a)
    }
    return document.querySelectorAll(a)
}

function jlQX(a, b) {
    if (b) {
        return b.querySelector(a)
    }
    return document.querySelector(a)
}

function tMgz(a) {
    return document.createElement(a)
}

function ZXsm(a) {
    a.parentNode.removeChild(a)
}

function SKeG(b, a) {
    return b.cloneNode(a)
}

function dwED(c, b, a) {
    if (a == "before") {
        b.parentNode.insertBefore(c, b.previousSibling ? b.previousSibling : b)
    } else {
        b.parentNode.insertBefore(c, b.nextSibling)
    }
}

function sDrg(c, b, a) {
    if (a == "top") {
        b.insertBefore(c, b.firstChild)
    } else {
        b.appendChild(c)
    }
}

function Mrvh(c, d) {
    for (var b in d) {
        var a = d[b];
        if (b == "html") {
            c.innerHTML = a
        } else {
            if (b == "text") {
                c.innerText = a
            } else {
                if (a) {
                    c.setAttribute(b, a)
                } else {
                    c.removeAttribute(b)
                }
            }
        }
    }
}

function yBuq(b, a) {
    if (a == "tag") {
        return b.tagName.toLowerCase()
    }
    if (a == "html") {
        return b.innerHTML
    }
    if (a == "text") {
        return b.innerText
    }
    if (a == "value" && b.tagName.toLowerCase() == "input") {
        return b.value
    }
    return b.getAttribute(a)
}

function GNUC(b, d) {
    var c = b.getBoundingClientRect();
    c = {
        x: c.width,
        y: c.height
    };
    if (d) {
        var a = window.getComputedStyle(b);
        c.x += parseInt(a.marginLeft) + parseInt(a.paddingLeft) + parseInt(a.marginRight) + parseInt(a.paddingRight);
        c.y += parseInt(a.marginTop) + parseInt(a.paddingTop) + parseInt(a.marginBottom) + parseInt(a.paddingBottom)
    }
    return c
}

function tvdw(b) {
    var h = b.getBoundingClientRect();
    var l = b.ownerDocument;
    var c = l.documentElement;
    var i = l.body;
    var j = l.defaultView;
    var g = c.clientTop || i.clientTop || 0;
    var k = c.clientLeft || i.clientLeft || 0;
    var a = j.pageYOffset || c.scrollTop || i.scrollTop;
    var f = j.pageXOffset || c.scrollLeft || i.scrollLeft;
    var o = h.top + a - g;
    var d = h.left + f - k;
    var n = new Object();
    n.x = d;
    n.y = o;
    return n
}

function _collectionHas(f, d) {
    for (var g = 0, c = f.length; g < c; g++) {
        if (f[g] == d) {
            return true
        }
    }
    return false
}

function fxen(c, a) {
    if (!a) {
        return c.parentNode
    }
    var b = document.querySelectorAll(a);
    var d = c.parentNode;
    while (d && !_collectionHas(b, d)) {
        d = d.parentNode
    }
    return d
}

function gvVx(a) {
    a.innerHTML = ""
}

function dsun(c, f) {
    var d = [];
    for (var b in f) {
        var a = f[b];
        d.push(b + ":" + a)
    }
    c.style.cssText += ";" + d.join(";")
}

function mfAw(c, b, a) {
    c.style.cssText += ";" + b + ":" + a
}

function Ghhj(a, h) {
    var d = a.getAttribute("style");
    if (d) {
        var g = d.split(";")
    } else {
        var g = []
    }
    var k = [];
    for (var c = 0; c < g.length; c++) {
        var j = g[c].trim();
        var f = j.split(":");
        var b = f[0].trim();
        if (h.indexOf(b) == -1) {
            k.push(j)
        }
    }
    a.style.cssText = k.join(";");
    if (a.style.cssText.length == 0) {
        a.removeAttribute("style")
    }
}

function LhpN(b, a) {
    return Ghhj(b, [a])
}

function yXtl(f, b) {
    var j = f.getAttribute("style");
    if (j) {
        var a = j.split(";")
    } else {
        var a = []
    }
    for (var c = 0; c < a.length; c++) {
        var g = a[c].trim();
        var h = g.split(":");
        var d = h[0].trim();
        if (b == d) {
            return h[1].trim()
        }
    }
    return ""
}

function ldxQ(b, a) {
    var j = b.getAttribute("class");
    if (j) {
        var h = j.split(" ")
    } else {
        var h = []
    }
    var g = {};
    g[a] = 1;
    for (var f = 0; f < h.length; f++) {
        var n = h[f].trim();
        g[n] = 1
    }
    var l = [];
    for (var c in g) {
        l.push(c)
    }
    b.className = l.join(" ")
}

function Swvv(b, a) {
    var j = b.getAttribute("class");
    if (j) {
        var h = j.split(" ")
    } else {
        h = []
    }
    var g = {};
    for (var f = 0; f < h.length; f++) {
        var n = h[f].trim();
        g[n] = 1
    }
    delete g[a];
    var l = [];
    for (var c in g) {
        l.push(c)
    }
    b.className = l.join(" ")
}

function aWqS(d, a) {
    var c = " " + a + " ";
    var b = d.className;
    if ((" " + b + " ").replace(/[\n\t]/g, " ").indexOf(c) > -1) {
        return true
    }
    return false
}

function fswd(b, c, a) {
    b.addEventListener(c, a, false)
}

function dygU(b, c, a) {
    b.removeEventListener(c, a)
}

function oNow() {
    var b = window,
        h = document,
        f = h.documentElement,
        c = h.getElementsByTagName("body")[0],
        a = b.innerWidth || f.clientWidth || c.clientWidth,
        i = b.innerHeight || f.clientHeight || c.clientHeight;
    return {
        width: a,
        height: i
    }
}

function Nrqi(a, d, c, b) {
    return nVBD(a, "POST", d, c, b)
}

function nVBD(b, a, f, d, h) {
    var c;
    if (window.XMLHttpRequest) {
        c = new XMLHttpRequest()
    } else {
        c = new ActiveXObject("Microsoft.XMLHTTP")
    }
    c.onreadystatechange = function() {
        if (c.readyState == 4 && c.status == 200) {
            response = c.responseText;
            if (window.ENALBE_CDN) {
                response = response.replace(/\"(http:|https:|)\\\/\\\/(.*?).cloudfront.net\\\/(.*?)\"/gm, '"\\/\\/cdn.alezaa.com/$2/$3"')
            }
            return d(response)
        } else {
            if (c.readyState == 4) {
                return h()
            }
        }
    };
    var i = [];
    for (var g in f) {
        var j = f[g];
        i.push(g + "=" + encodeURIComponent(j))
    }
    c.open(a, b, true);
    c.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    c.send(i.join("&"));
    return c
}

function pdzt(a, d, b) {
    var f = new Date();
    f.setDate(f.getDate() + b);
    var c = escape(d) + ((b == null) ? "" : "; expires=" + f.toUTCString());
    document.cookie = a + "=" + c
}

function iwyt(b) {
    var c = document.cookie;
    var d = c.indexOf(" " + b + "=");
    if (d == -1) {
        d = c.indexOf(b + "=")
    }
    if (d == -1) {
        c = null
    } else {
        d = c.indexOf("=", d) + 1;
        var a = c.indexOf(";", d);
        if (a == -1) {
            a = c.length
        }
        c = unescape(c.substring(d, a))
    }
    return c
}
var lnWo = {};
lnWo.PADCHAR = "=";
lnWo.ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
lnWo.makeDOMException = function() {
    var c, b;
    try {
        return new DOMException(DOMException.INVALID_CHARACTER_ERR)
    } catch (b) {
        var a = new Error("DOM Exception 5");
        a.code = a.number = 5;
        a.name = a.description = "INVALID_CHARACTER_ERR";
        a.toString = function() {
            return "Error: " + a.name + ": " + a.message
        };
        return a
    }
};
lnWo.getbyte64 = function(c, b) {
    var a = lnWo.ALPHA.indexOf(c.charAt(b));
    if (a === -1) {
        throw lnWo.makeDOMException()
    }
    return a
};
yyVn = function(d) {
    d = "" + d;
    var h = lnWo.getbyte64;
    var g, c, f;
    var b = d.length;
    if (b === 0) {
        return d
    }
    if (b % 4 !== 0) {
        throw lnWo.makeDOMException()
    }
    g = 0;
    if (d.charAt(b - 1) === lnWo.PADCHAR) {
        g = 1;
        if (d.charAt(b - 2) === lnWo.PADCHAR) {
            g = 2
        }
        b -= 4
    }
    var a = [];
    for (c = 0; c < b; c += 4) {
        f = (h(d, c) << 18) | (h(d, c + 1) << 12) | (h(d, c + 2) << 6) | h(d, c + 3);
        a.push(String.fromCharCode(f >> 16, (f >> 8) & 255, f & 255))
    }
    switch (g) {
        case 1:
            f = (h(d, c) << 18) | (h(d, c + 1) << 12) | (h(d, c + 2) << 6);
            a.push(String.fromCharCode(f >> 16, (f >> 8) & 255));
            break;
        case 2:
            f = (h(d, c) << 18) | (h(d, c + 1) << 12);
            a.push(String.fromCharCode(f >> 16));
            break
    }
    return a.join("")
};
lnWo.getbyte = function(c, b) {
    var a = c.charCodeAt(b);
    if (a > 255) {
        throw lnWo.makeDOMException()
    }
    return a
};
GnqH = function(f) {
    if (arguments.length !== 1) {
        throw new SyntaxError("Not enough arguments")
    }
    var b = lnWo.PADCHAR;
    var h = lnWo.ALPHA;
    var g = lnWo.getbyte;
    var d, j;
    var a = [];
    f = "" + f;
    var c = f.length - f.length % 3;
    if (f.length === 0) {
        return f
    }
    for (d = 0; d < c; d += 3) {
        j = (g(f, d) << 16) | (g(f, d + 1) << 8) | g(f, d + 2);
        a.push(h.charAt(j >> 18));
        a.push(h.charAt((j >> 12) & 63));
        a.push(h.charAt((j >> 6) & 63));
        a.push(h.charAt(j & 63))
    }
    switch (f.length - c) {
        case 1:
            j = g(f, d) << 16;
            a.push(h.charAt(j >> 18) + h.charAt((j >> 12) & 63) + b + b);
            break;
        case 2:
            j = (g(f, d) << 16) | (g(f, d + 1) << 8);
            a.push(h.charAt(j >> 18) + h.charAt((j >> 12) & 63) + h.charAt((j >> 6) & 63) + b);
            break
    }
    return a.join("")
};
try {
    if (!window.btoa) {
        window.btoa = GnqH
    }
    if (!window.atob) {
        window.atob = yyVn
    }
} catch (e) {}
var APP_VERSION = "3.0";
var APP_BUILD = "20130422";

function _NtoBR(a) {
    return a.replace(new RegExp("\n", "g"), "<br>")
}

function _BRtoN(a) {
    return a.replace(new RegExp("<br>", "g"), "\n")
}

function cnjr(a) {
    return a.outerHTML || new XMLSerializer().serializeToString(a)
}

function stKl(c, a) {
    if (c && c.length > a) {
        c = c.slice(0, a);
        var b = c.lastIndexOf(" ");
        if (b > 0) {
            c = c.slice(0, b) + "..."
        }
    }
    return c
}
window.registerMethod = function(b) {
    var a = function(c, d) {
        window.location = "call:" + c + (d || d == 0 ? "(" + d + ")" : "()")
    };
    window[b] = function(c, d) {
        window[b + "Callback"] = function(f) {
            if (d) {
                d(decodeURIComponent(escape(yyVn(f))))
            }
        };
        a(b, c)
    }
};
var Class = function(b) {
    var a = function() {
        this.initialize.apply(this, arguments)
    };
    for (var c in b) {
        a.prototype[c] = b[c]
    }
    if (!a.prototype.initialize) {
        a.prototype.initialize = function() {}
    }
    return a
};
var ufaj = new Class({
    that_callout: null,
    timer_callout: null,
    initialize: function(d, b, a, f) {
        this.container = d;
        this.close();
        if (!d) {
            return
        }
        that_callout = this;
        timer_callout = null;
        this.options = f;
        this.contentLayer = b;
        this.knob = a;
        isTouchDevice = "ontouchstart" in document.documentElement;
        this.padding = that_callout.options ? that_callout.options.padding : null;
        var g = function(h) {
            if (jlQX(".__important__")) {
                return
            }
            if (!fxen(h.target, ".callout") && !aWqS(h.target, "callout") && h.target.tagName != "A") {
                that_callout.close()
            }
        };
        var c = "ontouchstart" in document.documentElement;
        if (!c) {
            fswd(this.container, c ? "touchstart" : "mousedown", g)
        }
    },
    aknd: function() {
        var l = 24,
            o = 24,
            q = 7,
            s = 7,
            G = l + 0.5,
            w = q + 0.5;
        BORDER_RADIUS = 9, ANCHOR_HEIGHT = 14, PI = Math.PI;
        var J, d, h, c, I, n, r, K;
        I = true;
        if (that_callout.options) {
            var J = that_callout.options.color;
            var d = that_callout.options.orientation;
            var h = that_callout.options.bgcolorstart;
            var c = that_callout.options.bgcolorstop;
            var n = that_callout.options.knob_type;
            var r = that_callout.options.linearheight;
            I = that_callout.options.knob_visible != false;
            K = that_callout.options.stroke
        }
        if (!K) {
            K = "rgba(0, 0, 0, 0.25)"
        }
        if (!J) {
            J = "#000"
        }
        if (!d) {
            d = false
        }
        if (!h) {
            h = "#fff"
        }
        if (!c) {
            c = "#fff"
        }
        if (!n) {
            n = ""
        }
        if (!r) {
            r = 127
        }
        var a = GNUC(this.container, true);
        var t = that_callout.contentLayer;
        ldxQ(t, "callout");
        dsun(t, {
            position: "absolute",
            "z-index": 1010,
            padding: "34px 20px 32px 16px",
            left: 0,
            top: 0,
            color: J,
            visibility: "hidden"
        });
        sDrg(t, this.container);
        var H = GNUC(t);
        var F = H.x,
            A = H.y,
            f = tMgz("canvas");
        var u = that_callout.knob;
        var z = 10,
            y = 0;
        if (u) {
            var C = GNUC(u);
            var g = tvdw(u);
            g.y += C.y;
            var i = {
                left: g.x + window.pageXOffset,
                top: g.y + window.pageYOffset
            };
            var y = i.top
        } else {
            var g = that_callout.options ? that_callout.options.kpos : {
                x: 0,
                y: 0
            };
            var x = this.padding;
            var i = {
                left: g.x - x.left,
                top: g.y - x.top,
                width: 30,
                height: 30,
                bottom: g.y + 30,
                right: g.x + 30
            };
            var C = {
                x: 0,
                y: 0
            };
            var y = (i.width <= (a.x) ? i.top : i.bottom - 30) + x.top;
            g.y -= A
        }
        var z = i.left;
        if (z > F) {
            z = F
        }
        g.x -= F / 2 - C.x / 2;
        if (g.y < 0) {
            g.y = 0
        }
        var j = i.left % a.x;
        var B = j + C.x / 2 + F / 2;
        B = j + C.x / 2 - F / 2;
        if (B < 0) {
            g.x -= B
        }
        mfAw(t, "width", F - 15);
        var L = A;
        A = GNUC(t).y;
        if (y - window.pageYOffset - A < 0) {
            d = true;
            if (!u) {
                g.y += Math.max(y - window.pageYOffset + 10, window.pageYOffset)
            }
            if (g.y > a.y) {
                g.y -= window.pageYOffset - a.y
            }
        } else {
            g.y -= 10
        }
        g.y -= A - L;
        if (g.x + F >= a.x) {
            g.x = a.x - F - 2
        }
        if (!window.devicePixelRatio) {
            window.devicePixelRatio = 1
        }
        Mrvh(f, {
            width: F * window.devicePixelRatio + "px",
            height: A * window.devicePixelRatio + "px",
            "class": "callout-render"
        });
        dsun(f, {
            width: F + "px",
            height: A + "px",
            position: "absolute",
            left: g.x + "px",
            top: g.y + "px",
            "z-index": 1102
        });
        F -= 10 * 2;
        A -= l + o;
        dsun(t, {
            left: g.x + "px",
            top: g.y + ANCHOR_HEIGHT / 2 + "px",
            width: F - 15 + "px",
            "z-index": 1103,
            visibility: "visible"
        });
        dwED(f, t, "after");
        var b = f.getContext("2d"),
            k = yBuq(t, "anchor");
        b.scale(window.devicePixelRatio, window.devicePixelRatio);
        if (!k) {
            k = i.left - g.x
        } else {
            k = parseFloat(k)
        }
        if (k < 30) {
            k = 30
        } else {
            if (k + 30 > F) {
                k = F - 15
            }
        }
        var E = 13,
            D = 13;
        if (n == "chat") {
            if (k < F / 2) {
                E = 0
            } else {
                D = 0
            }
        }
        b.beginPath();
        b.arc(w + BORDER_RADIUS, G + BORDER_RADIUS, BORDER_RADIUS, PI, 3 * PI / 2, false);
        if (d && I) {
            b.lineTo(k - E, G);
            b.lineTo(k, G - ANCHOR_HEIGHT);
            b.lineTo(k + D, G)
        }
        b.arc(w + F - BORDER_RADIUS, G + BORDER_RADIUS, BORDER_RADIUS, 3 * PI / 2, 0, false);
        b.arc(w + F - BORDER_RADIUS, G + A - BORDER_RADIUS, BORDER_RADIUS, 0, PI / 2, false);
        if (!d && I) {
            b.lineTo(k + D, G + A);
            b.lineTo(k, G + A + ANCHOR_HEIGHT);
            b.lineTo(k - E, G + A)
        }
        b.arc(w + BORDER_RADIUS, G + A - BORDER_RADIUS, BORDER_RADIUS, PI / 2, PI, false);
        b.closePath();
        b.shadowOffsetX = 1;
        b.shadowOffsetY = 4;
        b.shadowBlur = 11;
        b.shadowColor = K;
        var v = b.createLinearGradient(0, 0, 0, r);
        v.addColorStop(0, h);
        v.addColorStop(1, c);
        b.fillStyle = v;
        b.strokeStyle = K;
        b.stroke();
        b.fill()
    },
    vDqm: function() {
        that_callout.aknd()
    },
    close: function() {
        var a = jlQX(".callout-render", this.container);
        if (a) {
            ZXsm(a)
        }
        var a = jlQX(".callout", this.container);
        if (a) {
            ZXsm(a)
        }
    }
});
(function(g, a) {
    g = g || "docReady";
    a = a || window;
    var h = [];
    var b = false;
    var f = false;

    function d() {
        if (!b) {
            b = true;
            for (var j = 0; j < h.length; j++) {
                h[j].fn.call(window, h[j].ctx)
            }
            h = []
        }
    }

    function c() {
        if (document.readyState === "complete") {
            d()
        }
    }
    a[g] = function(j, i) {
        if (b) {
            setTimeout(function() {
                j(i)
            }, 1);
            return
        } else {
            h.push({
                fn: j,
                ctx: i
            })
        }
        if (document.readyState === "complete") {
            setTimeout(d, 1)
        } else {
            if (!f) {
                if (document.addEventListener) {
                    document.addEventListener("DOMContentLoaded", d, false);
                    window.addEventListener("load", d, false)
                } else {
                    document.attachEvent("onreadystatechange", c);
                    window.attachEvent("onload", d)
                }
                f = true
            }
        }
    }
})("docReady", window);
var isMobile = {
    IEhG: function() {
        return /Android/i.test(navigator.userAgent)
    },
    lodh: function() {
        return /BlackBerry/i.test(navigator.userAgent)
    },
    MzsQ: function() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent) && !(/Trident/i.test(navigator.userAgent))
    },
    tfCS: function() {
        return /iPhone|iPod/i.test(navigator.userAgent) && !(/Trident/i.test(navigator.userAgent))
    },
    nLQD: function() {
        return /IEMobile/i.test(navigator.userAgent) || (/Trident/i.test(navigator.userAgent) && !(/iPhone|iPad|iPod/i.test(navigator.userAgent) && !(/Trident/i.test(navigator.userAgent))))
    },
    sAca: function() {
        return (isMobile.IEhG() || isMobile.lodh() || isMobile.MzsQ() || isMobile.nLQD())
    }
};
if (XMLHttpRequest.prototype.sendAsBinary === undefined) {
    XMLHttpRequest.prototype.sendAsBinary = function(b) {
        var a = Array.prototype.map.call(b, function(d) {
            return d.charCodeAt(0) & 255
        });
        this.send(new Uint8Array(a).buffer)
    }
}

function PostImageToFacebook(h, b, c, a, l, j) {
    var d = "----ThisIsTheBoundary1234567890";
    var f = "--" + d + "\r\n";
    f += 'Content-Disposition: form-data; name="source"; filename="' + b + '"\r\n';
    f += "Content-Type: " + c + "\r\n\r\n";
    for (var g = 0; g < a.length; ++g) {
        f += String.fromCharCode(a[g] & 255)
    }
    f += "\r\n";
    f += "--" + d + "\r\n";
    f += 'Content-Disposition: form-data; name="message"\r\n';
    f += "Content-Type: text/plain; charset=utf-8\r\n\r\n";
    f += unescape(encodeURIComponent(l)) + "\r\n";
    f += "--" + d + "--\r\n";
    var k = new XMLHttpRequest();
    k.open("POST", "https://graph.facebook.com/me/photos?access_token=" + h, true);
    k.onload = function() {
        if (j) {
            j(JSON.parse(k.responseText))
        }
    };
    k.onerror = function() {
        console.log(k.responseText)
    };
    k.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + d);
    k.sendAsBinary(f)
}
var vPfa = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    Dnem: function(b) {
        var a = (b.length / 4) * 3;
        var c = new ArrayBuffer(a);
        this.lCdH(b, c);
        return c
    },
    lCdH: function(h, g) {
        var d = this._keyStr.indexOf(h.charAt(h.length - 1));
        var b = this._keyStr.indexOf(h.charAt(h.length - 2));
        var t = (h.length / 4) * 3;
        if (d == 64) {
            t--
        }
        if (b == 64) {
            t--
        }
        var f;
        var s, q, n;
        var r, o, l, k;
        var c = 0;
        var a = 0;
        if (g) {
            f = new Uint8Array(g)
        } else {
            f = new Uint8Array(t)
        }
        h = h.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        for (c = 0; c < t; c += 3) {
            r = this._keyStr.indexOf(h.charAt(a++));
            o = this._keyStr.indexOf(h.charAt(a++));
            l = this._keyStr.indexOf(h.charAt(a++));
            k = this._keyStr.indexOf(h.charAt(a++));
            s = (r << 2) | (o >> 4);
            q = ((o & 15) << 4) | (l >> 2);
            n = ((l & 3) << 6) | k;
            f[c] = s;
            if (l != 64) {
                f[c + 1] = q
            }
            if (k != 64) {
                f[c + 2] = n
            }
        }
        return f
    }
};
"use strict";
(function(g) {
    function o(z, C) {
        var B = (z & 65535) + (C & 65535),
            A = (z >> 16) + (C >> 16) + (B >> 16);
        return (A << 16) | (B & 65535)
    }

    function s(x, y) {
        return (x << y) | (x >>> (32 - y))
    }

    function w(D, A, z, y, C, B) {
        return o(s(o(o(A, D), o(y, B)), C), z)
    }

    function f(A, z, E, D, y, C, B) {
        return w((z & E) | ((~z) & D), A, z, y, C, B)
    }

    function i(A, z, E, D, y, C, B) {
        return w((z & D) | (E & (~D)), A, z, y, C, B)
    }

    function u(A, z, E, D, y, C, B) {
        return w(z ^ E ^ D, A, z, y, C, B)
    }

    function c(A, z, E, D, y, C, B) {
        return w(E ^ (z | (~D)), A, z, y, C, B)
    }

    function b(I, D) {
        I[D >> 5] |= 128 << (D % 32);
        I[(((D + 64) >>> 9) << 4) + 14] = D;
        var A, C, B, z, y, H = 1732584193,
            G = -271733879,
            F = -1732584194,
            E = 271733878;
        for (A = 0; A < I.length; A += 16) {
            C = H;
            B = G;
            z = F;
            y = E;
            H = f(H, G, F, E, I[A], 7, -680876936);
            E = f(E, H, G, F, I[A + 1], 12, -389564586);
            F = f(F, E, H, G, I[A + 2], 17, 606105819);
            G = f(G, F, E, H, I[A + 3], 22, -1044525330);
            H = f(H, G, F, E, I[A + 4], 7, -176418897);
            E = f(E, H, G, F, I[A + 5], 12, 1200080426);
            F = f(F, E, H, G, I[A + 6], 17, -1473231341);
            G = f(G, F, E, H, I[A + 7], 22, -45705983);
            H = f(H, G, F, E, I[A + 8], 7, 1770035416);
            E = f(E, H, G, F, I[A + 9], 12, -1958414417);
            F = f(F, E, H, G, I[A + 10], 17, -42063);
            G = f(G, F, E, H, I[A + 11], 22, -1990404162);
            H = f(H, G, F, E, I[A + 12], 7, 1804603682);
            E = f(E, H, G, F, I[A + 13], 12, -40341101);
            F = f(F, E, H, G, I[A + 14], 17, -1502002290);
            G = f(G, F, E, H, I[A + 15], 22, 1236535329);
            H = i(H, G, F, E, I[A + 1], 5, -165796510);
            E = i(E, H, G, F, I[A + 6], 9, -1069501632);
            F = i(F, E, H, G, I[A + 11], 14, 643717713);
            G = i(G, F, E, H, I[A], 20, -373897302);
            H = i(H, G, F, E, I[A + 5], 5, -701558691);
            E = i(E, H, G, F, I[A + 10], 9, 38016083);
            F = i(F, E, H, G, I[A + 15], 14, -660478335);
            G = i(G, F, E, H, I[A + 4], 20, -405537848);
            H = i(H, G, F, E, I[A + 9], 5, 568446438);
            E = i(E, H, G, F, I[A + 14], 9, -1019803690);
            F = i(F, E, H, G, I[A + 3], 14, -187363961);
            G = i(G, F, E, H, I[A + 8], 20, 1163531501);
            H = i(H, G, F, E, I[A + 13], 5, -1444681467);
            E = i(E, H, G, F, I[A + 2], 9, -51403784);
            F = i(F, E, H, G, I[A + 7], 14, 1735328473);
            G = i(G, F, E, H, I[A + 12], 20, -1926607734);
            H = u(H, G, F, E, I[A + 5], 4, -378558);
            E = u(E, H, G, F, I[A + 8], 11, -2022574463);
            F = u(F, E, H, G, I[A + 11], 16, 1839030562);
            G = u(G, F, E, H, I[A + 14], 23, -35309556);
            H = u(H, G, F, E, I[A + 1], 4, -1530992060);
            E = u(E, H, G, F, I[A + 4], 11, 1272893353);
            F = u(F, E, H, G, I[A + 7], 16, -155497632);
            G = u(G, F, E, H, I[A + 10], 23, -1094730640);
            H = u(H, G, F, E, I[A + 13], 4, 681279174);
            E = u(E, H, G, F, I[A], 11, -358537222);
            F = u(F, E, H, G, I[A + 3], 16, -722521979);
            G = u(G, F, E, H, I[A + 6], 23, 76029189);
            H = u(H, G, F, E, I[A + 9], 4, -640364487);
            E = u(E, H, G, F, I[A + 12], 11, -421815835);
            F = u(F, E, H, G, I[A + 15], 16, 530742520);
            G = u(G, F, E, H, I[A + 2], 23, -995338651);
            H = c(H, G, F, E, I[A], 6, -198630844);
            E = c(E, H, G, F, I[A + 7], 10, 1126891415);
            F = c(F, E, H, G, I[A + 14], 15, -1416354905);
            G = c(G, F, E, H, I[A + 5], 21, -57434055);
            H = c(H, G, F, E, I[A + 12], 6, 1700485571);
            E = c(E, H, G, F, I[A + 3], 10, -1894986606);
            F = c(F, E, H, G, I[A + 10], 15, -1051523);
            G = c(G, F, E, H, I[A + 1], 21, -2054922799);
            H = c(H, G, F, E, I[A + 8], 6, 1873313359);
            E = c(E, H, G, F, I[A + 15], 10, -30611744);
            F = c(F, E, H, G, I[A + 6], 15, -1560198380);
            G = c(G, F, E, H, I[A + 13], 21, 1309151649);
            H = c(H, G, F, E, I[A + 4], 6, -145523070);
            E = c(E, H, G, F, I[A + 11], 10, -1120210379);
            F = c(F, E, H, G, I[A + 2], 15, 718787259);
            G = c(G, F, E, H, I[A + 9], 21, -343485551);
            H = o(H, C);
            G = o(G, B);
            F = o(F, z);
            E = o(E, y)
        }
        return [H, G, F, E]
    }

    function q(y) {
        var z, x = "";
        for (z = 0; z < y.length * 32; z += 8) {
            x += String.fromCharCode((y[z >> 5] >>> (z % 32)) & 255)
        }
        return x
    }

    function h(y) {
        var z, x = [];
        x[(y.length >> 2) - 1] = undefined;
        for (z = 0; z < x.length; z += 1) {
            x[z] = 0
        }
        for (z = 0; z < y.length * 8; z += 8) {
            x[z >> 5] |= (y.charCodeAt(z / 8) & 255) << (z % 32)
        }
        return x
    }

    function k(x) {
        return q(b(h(x), x.length * 8))
    }

    function t(z, C) {
        var y, B = h(z),
            x = [],
            A = [],
            D;
        x[15] = A[15] = undefined;
        if (B.length > 16) {
            B = b(B, z.length * 8)
        }
        for (y = 0; y < 16; y += 1) {
            x[y] = B[y] ^ 909522486;
            A[y] = B[y] ^ 1549556828
        }
        D = b(x.concat(h(C)), 512 + C.length * 8);
        return q(b(A.concat(D), 512 + 128))
    }

    function v(A) {
        var C = "0123456789abcdef",
            z = "",
            y, B;
        for (B = 0; B < A.length; B += 1) {
            y = A.charCodeAt(B);
            z += C.charAt((y >>> 4) & 15) + C.charAt(y & 15)
        }
        return z
    }

    function j(x) {
        return unescape(encodeURIComponent(x))
    }

    function l(x) {
        return k(j(x))
    }

    function a(x) {
        return v(l(x))
    }

    function n(x, y) {
        return t(j(x), j(y))
    }

    function r(x, y) {
        return v(n(x, y))
    }

    function d(y, z, x) {
        if (!z) {
            if (!x) {
                return a(y)
            }
            return l(y)
        }
        if (!x) {
            return r(z, y)
        }
        return n(z, y)
    }
    if (typeof define === "function" && define.amd) {
        define(function() {
            return d
        })
    } else {
        g.eHqc = d
    }
}(this));
"use strict";
var qRzT = {};
qRzT.cipher = function(f, a) {
    var d = 4;
    var j = a.length / d - 1;
    var h = [
        [],
        [],
        [],
        []
    ];
    for (var g = 0; g < 4 * d; g++) {
        h[g % 4][Math.floor(g / 4)] = f[g]
    }
    h = qRzT.addRoundKey(h, a, 0, d);
    for (var c = 1; c < j; c++) {
        h = qRzT.subBytes(h, d);
        h = qRzT.shiftRows(h, d);
        h = qRzT.mixColumns(h, d);
        h = qRzT.addRoundKey(h, a, c, d)
    }
    h = qRzT.subBytes(h, d);
    h = qRzT.shiftRows(h, d);
    h = qRzT.addRoundKey(h, a, j, d);
    var b = new Array(4 * d);
    for (var g = 0; g < 4 * d; g++) {
        b[g] = h[g % 4][Math.floor(g / 4)]
    }
    return b
};
qRzT.keyExpansion = function(g) {
    var d = 4;
    var b = g.length / 4;
    var h = b + 6;
    var f = new Array(d * (h + 1));
    var j = new Array(4);
    for (var c = 0; c < b; c++) {
        var a = [g[4 * c], g[4 * c + 1], g[4 * c + 2], g[4 * c + 3]];
        f[c] = a
    }
    for (var c = b; c < (d * (h + 1)); c++) {
        f[c] = new Array(4);
        for (var k = 0; k < 4; k++) {
            j[k] = f[c - 1][k]
        }
        if (c % b == 0) {
            j = qRzT.subWord(qRzT.rotWord(j));
            for (var k = 0; k < 4; k++) {
                j[k] ^= qRzT.rCon[c / b][k]
            }
        } else {
            if (b > 6 && c % b == 4) {
                j = qRzT.subWord(j)
            }
        }
        for (var k = 0; k < 4; k++) {
            f[c][k] = f[c - b][k] ^ j[k]
        }
    }
    return f
};
qRzT.subBytes = function(b, a) {
    for (var d = 0; d < 4; d++) {
        for (var f = 0; f < a; f++) {
            b[d][f] = qRzT.sBox[b[d][f]]
        }
    }
    return b
};
qRzT.shiftRows = function(d, a) {
    var b = new Array(4);
    for (var f = 1; f < 4; f++) {
        for (var g = 0; g < 4; g++) {
            b[g] = d[f][(g + f) % a]
        }
        for (var g = 0; g < 4; g++) {
            d[f][g] = b[g]
        }
    }
    return d
};
qRzT.mixColumns = function(j, g) {
    for (var k = 0; k < 4; k++) {
        var f = new Array(4);
        var d = new Array(4);
        for (var h = 0; h < 4; h++) {
            f[h] = j[h][k];
            d[h] = j[h][k] & 128 ? j[h][k] << 1 ^ 283 : j[h][k] << 1
        }
        j[0][k] = d[0] ^ f[1] ^ d[1] ^ f[2] ^ f[3];
        j[1][k] = f[0] ^ d[1] ^ f[2] ^ d[2] ^ f[3];
        j[2][k] = f[0] ^ f[1] ^ d[2] ^ f[3] ^ d[3];
        j[3][k] = f[0] ^ d[0] ^ f[1] ^ f[2] ^ d[3]
    }
    return j
};
qRzT.addRoundKey = function(g, a, d, b) {
    for (var f = 0; f < 4; f++) {
        for (var h = 0; h < b; h++) {
            g[f][h] ^= a[d * 4 + h][f]
        }
    }
    return g
};
qRzT.subWord = function(a) {
    for (var b = 0; b < 4; b++) {
        a[b] = qRzT.sBox[a[b]]
    }
    return a
};
qRzT.rotWord = function(a) {
    var c = a[0];
    for (var b = 0; b < 3; b++) {
        a[b] = a[b + 1]
    }
    a[3] = c;
    return a
};
qRzT.sBox = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22];
qRzT.rCon = [
    [0, 0, 0, 0],
    [1, 0, 0, 0],
    [2, 0, 0, 0],
    [4, 0, 0, 0],
    [8, 0, 0, 0],
    [16, 0, 0, 0],
    [32, 0, 0, 0],
    [64, 0, 0, 0],
    [128, 0, 0, 0],
    [27, 0, 0, 0],
    [54, 0, 0, 0]
];
if (typeof module != "undefined" && module.exports) {
    module.exports = qRzT
}
if (typeof define == "function" && define.amd) {
    define([], function() {
        return qRzT
    })
}
"use strict";
if (typeof module != "undefined" && module.exports) {
    var qRzT = require("./aes")
}
jnyD = {};
en__ = function(k, a, x) {
    var l = 16;
    if (!(x == 128 || x == 192 || x == 256)) {
        return ""
    }
    k = String(k).avbs();
    a = String(a).avbs();
    var n = x / 8;
    var g = new Array(n);
    for (var v = 0; v < n; v++) {
        g[v] = isNaN(a.charCodeAt(v)) ? 0 : a.charCodeAt(v)
    }
    var C = qRzT.cipher(g, qRzT.keyExpansion(g));
    C = C.concat(C.slice(0, n - 16));
    var f = new Array(l);
    var w = (new Date()).getTime();
    var h = w % 1000;
    var d = Math.floor(w / 1000);
    var s = Math.floor(Math.random() * 65535);
    for (var v = 0; v < 2; v++) {
        f[v] = (h >>> v * 8) & 255
    }
    for (var v = 0; v < 2; v++) {
        f[v + 2] = (s >>> v * 8) & 255
    }
    for (var v = 0; v < 4; v++) {
        f[v + 4] = (d >>> v * 8) & 255
    }
    var q = "";
    for (var v = 0; v < 8; v++) {
        q += String.fromCharCode(f[v])
    }
    var z = qRzT.keyExpansion(C);
    var u = Math.ceil(k.length / l);
    var o = new Array(u);
    for (var A = 0; A < u; A++) {
        for (var y = 0; y < 4; y++) {
            f[15 - y] = (A >>> y * 8) & 255
        }
        for (var y = 0; y < 4; y++) {
            f[15 - y - 4] = (A / 4294967296 >>> y * 8)
        }
        var j = qRzT.cipher(f, z);
        var t = A < u - 1 ? l : (k.length - 1) % l + 1;
        var r = new Array(t);
        for (var v = 0; v < t; v++) {
            r[v] = j[v] ^ k.charCodeAt(A * l + v);
            r[v] = String.fromCharCode(r[v])
        }
        o[A] = r.join("")
    }
    var B = q + o.join("");
    B = B.TmBr();
    return B
};
de__ = function(x, f, t) {
    var o = 16;
    if (!(t == 128 || t == 192 || t == 256)) {
        return ""
    }
    x = String(x).KmVe();
    f = String(f).avbs();
    var q = t / 8;
    var k = new Array(q);
    for (var s = 0; s < q; s++) {
        k[s] = isNaN(f.charCodeAt(s)) ? 0 : f.charCodeAt(s)
    }
    var y = qRzT.cipher(k, qRzT.keyExpansion(k));
    y = y.concat(y.slice(0, q - 16));
    var g = new Array(8);
    var r = x.slice(0, 8);
    for (var s = 0; s < 8; s++) {
        g[s] = r.charCodeAt(s)
    }
    var v = qRzT.keyExpansion(y);
    var h = Math.ceil((x.length - 8) / o);
    var j = new Array(h);
    for (var w = 0; w < h; w++) {
        j[w] = x.slice(8 + w * o, 8 + w * o + o)
    }
    x = j;
    var d = new Array(x.length);
    for (var w = 0; w < h; w++) {
        for (var u = 0; u < 4; u++) {
            g[15 - u] = ((w) >>> u * 8) & 255
        }
        for (var u = 0; u < 4; u++) {
            g[15 - u - 4] = (((w + 1) / 4294967296 - 1) >>> u * 8) & 255
        }
        var n = qRzT.cipher(g, v);
        var a = new Array(x[w].length);
        for (var s = 0; s < x[w].length; s++) {
            a[s] = n[s] ^ x[w].charCodeAt(s);
            a[s] = String.fromCharCode(a[s])
        }
        d[w] = a.join("")
    }
    var l = d.join("");
    l = l.trog();
    return l
};
if (typeof String.prototype.avbs == "undefined") {
    String.prototype.avbs = function() {
        return unescape(encodeURIComponent(this))
    }
}
if (typeof String.prototype.trog == "undefined") {
    String.prototype.trog = function() {
        try {
            return decodeURIComponent(escape(this))
        } catch (a) {
            return this
        }
    }
}
if (typeof String.prototype.TmBr == "undefined") {
    String.prototype.TmBr = function() {
        if (typeof btoa != "undefined") {
            return btoa(this)
        }
        if (typeof Buffer != "undefined") {
            return new Buffer(this, "utf8").toString("lnWo")
        }
        throw new Error("RoLG")
    }
}
if (typeof String.prototype.KmVe == "undefined") {
    String.prototype.KmVe = function() {
        if (typeof atob != "undefined") {
            return atob(this)
        }
        if (typeof Buffer != "undefined") {
            return new Buffer(this, "lnWo").toString("utf8")
        }
        throw new Error("IwTp")
    }
}
if (typeof module != "undefined" && module.exports) {
    module.exports = jnyD
}
if (typeof define == "function" && define.amd) {
    define(["qRzT"], function() {
        return jnyD
    })
}
var LZString = (function() {
    var c = String.fromCharCode;
    var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
    var g = {};

    function a(k, j) {
        if (!g[k]) {
            g[k] = {};
            for (var f = 0; f < k.length; f++) {
                g[k][k.charAt(f)] = f
            }
        }
        return g[k][j]
    }
    var d = {
        rjzL: function(f) {
            if (f == null) {
                return ""
            }
            var i = d._compress(f, 6, function(j) {
                return h.charAt(j)
            });
            switch (i.length % 4) {
                default:
                    case 0:
                    return i;
                case 1:
                        return i + "===";
                case 2:
                        return i + "==";
                case 3:
                        return i + "="
            }
        },
        qnyb: function(f) {
            if (f == null) {
                return ""
            }
            if (f == "") {
                return null
            }
            return d._decompress(f.length, 32, function(i) {
                return a(h, f.charAt(i))
            })
        },
        compressToUTF16: function(f) {
            if (f == null) {
                return ""
            }
            return d._compress(f, 15, function(i) {
                return c(i + 32)
            }) + " "
        },
        decompressFromUTF16: function(f) {
            if (f == null) {
                return ""
            }
            if (f == "") {
                return null
            }
            return d._decompress(f.length, 16384, function(i) {
                return f.charCodeAt(i) - 32
            })
        },
        compressToUint8Array: function(o) {
            var n = d.compress(o);
            var j = new Uint8Array(n.length * 2);
            for (var l = 0, k = n.length; l < k; l++) {
                var f = n.charCodeAt(l);
                j[l * 2] = f >>> 8;
                j[l * 2 + 1] = f % 256
            }
            return j
        },
        decompressFromUint8Array: function(n) {
            if (n === null || n === undefined) {
                return d.decompress(n)
            } else {
                var j = new Array(n.length / 2);
                for (var l = 0, k = j.length; l < k; l++) {
                    j[l] = n[l * 2] * 256 + n[l * 2 + 1]
                }
                var f = [];
                j.forEach(function(i) {
                    f.push(c(i))
                });
                return d.decompress(f.join(""))
            }
        },
        compressToEncodedURIComponent: function(f) {
            if (f == null) {
                return ""
            }
            return d._compress(f, 6, function(i) {
                return b.charAt(i)
            })
        },
        decompressFromEncodedURIComponent: function(f) {
            if (f == null) {
                return ""
            }
            if (f == "") {
                return null
            }
            f = f.replace(/ /g, "+");
            return d._decompress(f.length, 32, function(i) {
                return a(b, f.charAt(i))
            })
        },
        compress: function(f) {
            return d._compress(f, 16, function(i) {
                return c(i)
            })
        },
        _compress: function(n, z, t) {
            if (n == null) {
                return ""
            }
            var q, u, w = {},
                v = {},
                x = "",
                k = "",
                A = "",
                l = 2,
                o = 3,
                j = 2,
                s = [],
                f = 0,
                r = 0,
                y;
            for (y = 0; y < n.length; y += 1) {
                x = n.charAt(y);
                if (!Object.prototype.hasOwnProperty.call(w, x)) {
                    w[x] = o++;
                    v[x] = true
                }
                k = A + x;
                if (Object.prototype.hasOwnProperty.call(w, k)) {
                    A = k
                } else {
                    if (Object.prototype.hasOwnProperty.call(v, A)) {
                        if (A.charCodeAt(0) < 256) {
                            for (q = 0; q < j; q++) {
                                f = (f << 1);
                                if (r == z - 1) {
                                    r = 0;
                                    s.push(t(f));
                                    f = 0
                                } else {
                                    r++
                                }
                            }
                            u = A.charCodeAt(0);
                            for (q = 0; q < 8; q++) {
                                f = (f << 1) | (u & 1);
                                if (r == z - 1) {
                                    r = 0;
                                    s.push(t(f));
                                    f = 0
                                } else {
                                    r++
                                }
                                u = u >> 1
                            }
                        } else {
                            u = 1;
                            for (q = 0; q < j; q++) {
                                f = (f << 1) | u;
                                if (r == z - 1) {
                                    r = 0;
                                    s.push(t(f));
                                    f = 0
                                } else {
                                    r++
                                }
                                u = 0
                            }
                            u = A.charCodeAt(0);
                            for (q = 0; q < 16; q++) {
                                f = (f << 1) | (u & 1);
                                if (r == z - 1) {
                                    r = 0;
                                    s.push(t(f));
                                    f = 0
                                } else {
                                    r++
                                }
                                u = u >> 1
                            }
                        }
                        l--;
                        if (l == 0) {
                            l = Math.pow(2, j);
                            j++
                        }
                        delete v[A]
                    } else {
                        u = w[A];
                        for (q = 0; q < j; q++) {
                            f = (f << 1) | (u & 1);
                            if (r == z - 1) {
                                r = 0;
                                s.push(t(f));
                                f = 0
                            } else {
                                r++
                            }
                            u = u >> 1
                        }
                    }
                    l--;
                    if (l == 0) {
                        l = Math.pow(2, j);
                        j++
                    }
                    w[k] = o++;
                    A = String(x)
                }
            }
            if (A !== "") {
                if (Object.prototype.hasOwnProperty.call(v, A)) {
                    if (A.charCodeAt(0) < 256) {
                        for (q = 0; q < j; q++) {
                            f = (f << 1);
                            if (r == z - 1) {
                                r = 0;
                                s.push(t(f));
                                f = 0
                            } else {
                                r++
                            }
                        }
                        u = A.charCodeAt(0);
                        for (q = 0; q < 8; q++) {
                            f = (f << 1) | (u & 1);
                            if (r == z - 1) {
                                r = 0;
                                s.push(t(f));
                                f = 0
                            } else {
                                r++
                            }
                            u = u >> 1
                        }
                    } else {
                        u = 1;
                        for (q = 0; q < j; q++) {
                            f = (f << 1) | u;
                            if (r == z - 1) {
                                r = 0;
                                s.push(t(f));
                                f = 0
                            } else {
                                r++
                            }
                            u = 0
                        }
                        u = A.charCodeAt(0);
                        for (q = 0; q < 16; q++) {
                            f = (f << 1) | (u & 1);
                            if (r == z - 1) {
                                r = 0;
                                s.push(t(f));
                                f = 0
                            } else {
                                r++
                            }
                            u = u >> 1
                        }
                    }
                    l--;
                    if (l == 0) {
                        l = Math.pow(2, j);
                        j++
                    }
                    delete v[A]
                } else {
                    u = w[A];
                    for (q = 0; q < j; q++) {
                        f = (f << 1) | (u & 1);
                        if (r == z - 1) {
                            r = 0;
                            s.push(t(f));
                            f = 0
                        } else {
                            r++
                        }
                        u = u >> 1
                    }
                }
                l--;
                if (l == 0) {
                    l = Math.pow(2, j);
                    j++
                }
            }
            u = 2;
            for (q = 0; q < j; q++) {
                f = (f << 1) | (u & 1);
                if (r == z - 1) {
                    r = 0;
                    s.push(t(f));
                    f = 0
                } else {
                    r++
                }
                u = u >> 1
            }
            while (true) {
                f = (f << 1);
                if (r == z - 1) {
                    s.push(t(f));
                    break
                } else {
                    r++
                }
            }
            return s.join("")
        },
        decompress: function(f) {
            if (f == null) {
                return ""
            }
            if (f == "") {
                return null
            }
            return d._decompress(f.length, 32768, function(i) {
                return f.charCodeAt(i)
            })
        },
        _decompress: function(k, l, f) {
            var t = [],
                v, o = 4,
                x = 4,
                u = 3,
                j = "",
                r = [],
                z, s, y, B, n, q, A, C = {
                    val: f(0),
                    position: l,
                    index: 1
                };
            for (z = 0; z < 3; z += 1) {
                t[z] = z
            }
            y = 0;
            n = Math.pow(2, 2);
            q = 1;
            while (q != n) {
                B = C.val & C.position;
                C.position >>= 1;
                if (C.position == 0) {
                    C.position = l;
                    C.val = f(C.index++)
                }
                y |= (B > 0 ? 1 : 0) * q;
                q <<= 1
            }
            switch (v = y) {
                case 0:
                    y = 0;
                    n = Math.pow(2, 8);
                    q = 1;
                    while (q != n) {
                        B = C.val & C.position;
                        C.position >>= 1;
                        if (C.position == 0) {
                            C.position = l;
                            C.val = f(C.index++)
                        }
                        y |= (B > 0 ? 1 : 0) * q;
                        q <<= 1
                    }
                    A = c(y);
                    break;
                case 1:
                    y = 0;
                    n = Math.pow(2, 16);
                    q = 1;
                    while (q != n) {
                        B = C.val & C.position;
                        C.position >>= 1;
                        if (C.position == 0) {
                            C.position = l;
                            C.val = f(C.index++)
                        }
                        y |= (B > 0 ? 1 : 0) * q;
                        q <<= 1
                    }
                    A = c(y);
                    break;
                case 2:
                    return ""
            }
            t[3] = A;
            s = A;
            r.push(A);
            while (true) {
                if (C.index > k) {
                    return ""
                }
                y = 0;
                n = Math.pow(2, u);
                q = 1;
                while (q != n) {
                    B = C.val & C.position;
                    C.position >>= 1;
                    if (C.position == 0) {
                        C.position = l;
                        C.val = f(C.index++)
                    }
                    y |= (B > 0 ? 1 : 0) * q;
                    q <<= 1
                }
                switch (A = y) {
                    case 0:
                        y = 0;
                        n = Math.pow(2, 8);
                        q = 1;
                        while (q != n) {
                            B = C.val & C.position;
                            C.position >>= 1;
                            if (C.position == 0) {
                                C.position = l;
                                C.val = f(C.index++)
                            }
                            y |= (B > 0 ? 1 : 0) * q;
                            q <<= 1
                        }
                        t[x++] = c(y);
                        A = x - 1;
                        o--;
                        break;
                    case 1:
                        y = 0;
                        n = Math.pow(2, 16);
                        q = 1;
                        while (q != n) {
                            B = C.val & C.position;
                            C.position >>= 1;
                            if (C.position == 0) {
                                C.position = l;
                                C.val = f(C.index++)
                            }
                            y |= (B > 0 ? 1 : 0) * q;
                            q <<= 1
                        }
                        t[x++] = c(y);
                        A = x - 1;
                        o--;
                        break;
                    case 2:
                        return r.join("")
                }
                if (o == 0) {
                    o = Math.pow(2, u);
                    u++
                }
                if (t[A]) {
                    j = t[A]
                } else {
                    if (A === x) {
                        j = s + s.charAt(0)
                    } else {
                        return null
                    }
                }
                r.push(j);
                t[x++] = s + j.charAt(0);
                o--;
                s = j;
                if (o == 0) {
                    o = Math.pow(2, u);
                    u++
                }
            }
        }
    };
    return d
})();
if (typeof define === "function" && define.amd) {
    define(function() {
        return LZString
    })
} else {
    if (typeof module !== "undefined" && module != null) {
        module.exports = LZString
    }
}(function(a, c) {
    var b = function(g, l, d, q) {
        var h = d;
        g = g || "";
        l = l || {};
        d = d || "";
        q = q || function() {};
        var r = function(u) {
            var t = [];
            for (var i in u) {
                if (u.hasOwnProperty(i)) {
                    t.push(i)
                }
            }
            return t
        };
        if (typeof l == "object") {
            var f = "";
            var s = r(l);
            for (var k = 0; k < s.length; k++) {
                f += encodeURIComponent(s[k]) + "=" + encodeURIComponent(l[s[k]]);
                if (k != s.length - 1) {
                    f += "&"
                }
            }
            g += "?" + f
        } else {
            if (typeof l == "function") {
                d = l;
                q = d
            }
        }
        if (typeof d == "function") {
            q = d;
            d = "callback"
        }
        if (!Date.now) {
            Date.now = function() {
                return new Date().getTime()
            }
        }
        var o = Date.now();
        if (h.slice && h.slice(0, 5) == "jsonp") {
            var j = d
        } else {
            var j = "jsonp" + Math.round(o + Math.random() * 1000001)
        }
        a[j] = function(i) {
            a.jsonp_called_ = true;
            if (a.ENALBE_CDN) {
                i = JSON.stringify(i);
                i = i.replace(/\"(http:|https:|)\/\/(.*?).cloudfront.net\/(.*?)\"/gm, '"//cdn.alezaa.com/$2/$3"');
                i = JSON.parse(i)
            }
            q(i);
            try {
                delete a[j]
            } catch (t) {
                a[j] = c
            }
            if (n) {
                n.parentNode.removeChild(n)
            }
        };
        if (g.indexOf("?") === -1) {
            g = g + "?"
        } else {
            g = g + "&"
        }
        var n = document.createElement("script");
        n.setAttribute("src", g + d + "=" + j);
        document.getElementsByTagName("head")[0].appendChild(n);
        a.jsonp_called_ = false;
        setTimeout(function() {
            if (a.jsonp_called_) {
                return
            }
            q(null)
        }, 28000)
    };
    a.JSONP = b
})(window);
String.prototype.replaceArray = function(f, c) {
    var a = this;
    var d;
    for (var b = 0; b < f.length; b++) {
        d = new RegExp(f[b], "g");
        a = a.replace(d, c[b])
    }
    return a
};

function nmwG(a) {
    if (!a) {
        return {}
    }
    a = a.split("?")[1];
    a = a ? a.split("+").join(" ") : "";
    var d = {},
        c, b = /[?&]?([^=]+)=([^&]*)/g;
    while (c = b.exec(a)) {
        d[decodeURIComponent(c[1])] = decodeURIComponent(c[2])
    }
    return d
}

function rpdj(h, g) {
    if (!(h instanceof Array)) {
        h = [h]
    }
    var f = "giItT1WQy@!-/#",
        a = [];
    for (var c = 0; c < h.length; c++) {
        var d = tMgz("span");
        d.innerHTML = f;
        dsun(d, {
            "font-family": "sans-serif",
            "font-variant": "normal",
            "font-style": "normal",
            "font-weight": "normal",
            "font-size": "50px",
            "letter-spacing": "0",
            position: "absolute",
            left: "-2000px",
            top: "-2000px"
        });
        sDrg(d, document.body);
        a.push([d, d.clientHeight]);
        mfAw(d, "font-family", h[c])
    }
    var b = setInterval(function() {
        var k = 0;
        for (var j = 0; j < a.length; j++) {
            if (a[j][0].clientWidth != a[j][1]) {
                k++
            }
        }
        if (k == a.length || k == 10) {
            clearInterval(b);
            for (var j = 0; j < a.length; j++) {
                a[j][0].remove()
            }
            g()
        }
    }, 50)
}

function wMhi() {
    if (/MSIE 10/i.test(navigator.userAgent)) {
        return 1
    }
    if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
        return 2
    }
    if (/Edge\/./i.test(navigator.userAgent)) {
        return 3
    }
    return 0
}(function(d) {
    var c = d.prototype,
        a = c.parseFromString;
    try {
        if ((new d()).parseFromString("", "text/html")) {
            return
        }
    } catch (b) {}
    c.parseFromString = function(f, g) {
        if (/^\s*text\/html\s*(?:;|$)/i.test(g)) {
            var h = document.implementation.createHTMLDocument("");
            if (f.toLowerCase().indexOf("<!doctype") > -1) {
                h.documentElement.innerHTML = f
            } else {
                h.body.innerHTML = f
            }
            return h
        } else {
            return a.apply(this, arguments)
        }
    }
}(DOMParser));
Number.prototype.formatMoney = function(l, h, f) {
    var k = this,
        l = isNaN(l = Math.abs(l)) ? 2 : l,
        h = h == undefined ? "." : h,
        f = f == undefined ? "," : f,
        g = k < 0 ? "-" : "",
        b = parseInt(k = Math.abs(+k || 0).toFixed(l)) + "",
        a = (a = b.length) > 3 ? a % 3 : 0;
    return g + (a ? b.substr(0, a) + f : "") + b.substr(a).replace(/(\d{3})(?=\d)/g, "$1" + f) + (l ? h + Math.abs(k - b).toFixed(l).slice(2) : "")
};
(function() {
    var j = {
        b: 1,
        big: 1,
        i: 1,
        small: 1,
        tt: 1,
        abbr: 1,
        acronym: 1,
        cite: 1,
        dfn: 1,
        em: 1,
        kbd: 1,
        strong: 1,
        samp: 1,
        "var": 1,
        bdo: 1,
        br: 1,
        map: 1,
        object: 1,
        q: 1,
        script: 1,
        span: 1,
        sub: 1,
        sup: 1,
        button: 1,
        input: 1,
        label: 1,
        select: 1,
        textarea: 1,
        meta: 2,
        link: 3,
        style: 4,
        wbr: 5
    };
    var o = {
        welcome: "Chào mừng",
        login: "Đăng nhập",
        logout: "Đăng xuất",
        toc: "Mục lục",
        readforfree: "Đọc miễn phí",
        need_login_message: "Đăng nhập với tài khoản Alezaa hoặc Facebook để tiếp tục.",
        link_facebook: "Liên kết Facebook",
        subscribe: "Thuê bao",
        subscribe_or_buy: "Thuê bao hoặc Mua",
        buy: "Mua",
        need_verify_message: "Liên kết tài khoản của bạn với Facebook để đọc miễn phí.",
        need_subscribe_or_buy: "Rất tiếc đây là nội dung chỉ dành cho thuê bao. Đăng ký thuê bao để truy cập hơn 10.000 tựa sách và tạp chí chỉ với 1.000đ/ngày.",
        highlight: "Tô sáng",
        remove_highlight: "Xóa tô sáng",
        note: "Ghi chú",
        share: "Chia sẻ",
        shared: "Chia sẻ",
        save: "Lưu",
        update: "Cập nhật",
        cancel: "Bỏ qua",
        remove: "Xóa",
        text_align_left: "trái",
        text_align_justify: "đều",
        theme_white: "trắng",
        theme_light: "sáng",
        theme_sepia: "sepia",
        theme_night: "đêm",
        close: "Đóng",
        reading_time: "Thời lượng",
        word_count: "Tổng số từ",
        publisher: "Phát hành",
        share_to_facebook: "Chia sẻ Facebook",
        share_to_facebook_done: "Đã chia sẻ",
        share_to_facebook_done_alert: "Thật tuyệt <3\nBạn có muốn xem chia sẻ của bạn trên Facebook của bạn không?",
        posting_to_facebook: "Đang đăng Facebook...",
        can_not_open_book: "Bạn đang sử dụng bản Preview. Chúng tôi sẽ sớm cập nhật sớm lên Cloud Reader trong phiên bản chính thức. Cám ơn bạn.",
        toc_title: "Mục lục, Đánh dấu và Ghi chú",
        notes_n_marks: "Đánh dấu & Ghi chú",
        about_book: "Giới thiệu về tựa này",
        confirm_goto_recent_position: "Bạn có muốn mở vị trí gần đây nhất bạn đã từng đọc không?",
        login_fb_as_name: "Tiếp tục bởi <b>@{name}</b>",
        remove_from_library: "Bỏ khỏi <b>{collection_name}</b>",
        membership_valid: "Thời hạn thuê bao<br/> DD/MM/YYYY hh:mm",
        membership_invalid: "Đăng ký thuê bao để đọc không giới hạn",
        time_hrs: " giờ ",
        time_hr: " giờ ",
        time_mins: " phút ",
        time_min: " phút ",
        time_left_in_book_beginning: "@{time_left} để đọc xong tựa này.",
        time_left_in_book: "Bạn đã đọc @{traveled}%. Còn @{time_left} để đọc xong tựa này.",
        the_end: "Hoàn thành.",
        redeem: "Redeem",
        change_password: "Đổi mật khẩu",
        fullscreen: "Toàn màn hình",
        homepage: "Trang chủ",
        tab_store: "Alezaa | Hiệu sách",
        tab_library: "Alezaa | Thư viện",
        tab_for_you: "Alezaa | Cho bạn",
        load_more: "Xem thêm",
        save_for_later: 'Đã lưu "{title}" vào thư viện của bạn. Bạn có thể đọc từ web hoặc app Alezaa trên iOS, Android và Windows.',
        store_title: "Alezaa Store",
        login_for_save: "Bạn có muốn đăng nhập để lưu vào thư viện của bạn và đọc sau không?",
        collection_is_not_empty: "Nhóm đang chứa sách, vui lòng bỏ tất cả sách ra khỏi nhóm trước khi xoá.",
        request_book_thankyou: "Cám ơn bạn. Chúng tôi sẽ gửi đề nghị phát hành ebook này trên Alezaa đến nhà xuất bản. Chúng tôi sẽ báo ngay cho bạn biết khi sách được phát hành trên Alezaa.",
        login_with_facebook_free: "Đăng nhập Facebook",
        login_with_alezaa: "Đăng nhập tài khoản Alezaa",
        try_sample: "Đọc thử",
        days_ago: " ngày trước",
        today: " hôm nay",
        can_not_connect_to_server: "Không thể kết nối với máy chủ. Vui lòng thử lại :(",
        item_not_available: "Không thể mở ấn bản này này, có thể ấn bản chưa phát hành. Vui lòng kiểm tra kết nối Internet của bạn.",
        view_in_store: "Xem thông tin",
        library: "Thư viện",
        account: "Tài khoản",
        move_to_top: "Chuyển lên đầu",
        share_card: "Thẻ chia sẻ",
        share_card_note: "Mọi người có thể thấy Thẻ này",
        not_has_comment_yet: "Chưa có",
        font_default: "Mặc định",
        recommend: "Có thể bạn sẽ thích",
        recommended: "đánh giá hữu ích",
        login_to_read_free_sample: 'Đăng nhập để Đọc thử<sup class="free">Miễn phí<sup>',
        account_menu_coins: "<span>Bạn có @{coins} coin.</span> Nạp coin",
        book_reading_time: "Khoảng {hours} giờ {minutes} phút"
    };
    var h = ("ontouchstart" in document.documentElement) && isMobile.sAca();
    var T = 65;
    var P = "web";
    window.ENALBE_CDN = true;
    var w = new Class({
        initialize: function(Z, ab, aa, Y) {
            this.index = 0;
            this.url = "";
            this.iOS = isMobile.MzsQ();
            this.dd = eHqc;
            this.cc = de__;
            this.ee = 256;
            this.containers = Z;
            this.eGtK = ab;
            this.emli = aa;
            this.isWideScreen = Y;
            this.ZYNf = [{
                name: "white",
                bgcolor: "#fff",
                color: "#000",
                linecolor: "#bbb",
                linkcolor: "#0000aa",
                imgopacity: 1,
                linkunderline: ""
            }, {
                name: "light",
                bgcolor: "#f9f9f9",
                color: "#0b0b0b",
                linecolor: "#aaa",
                linkcolor: "#0000aa",
                imgopacity: 1,
                linkunderline: ""
            }, {
                name: "sepia",
                bgcolor: "#f8f1e3",
                color: "#4e331c",
                linecolor: "#888",
                linkcolor: "#0000aa",
                imgopacity: 0.7,
                linkunderline: ""
            }, {
                name: "night",
                bgcolor: "#1c1f2b",
                color: "#bdcadb",
                linecolor: "#111",
                linkcolor: "#ddd",
                imgopacity: 0.5,
                linkunderline: "dotted 1px #ccc"
            }];
            this.levels = [
                ["0.8em", "1.35em"],
                ["0.85em", "1.35em"],
                ["0.9em", "1.35em"],
                ["0.95em", "1.35em"],
                ["1.0em", "1.45em"],
                ["1.05em", "1.45em"],
                ["1.1em", "1.45em"],
                ["1.15em", "1.45em"],
                ["1.2em", "1.55em"],
                ["1.25em", "1.55em"],
                ["1.3em", "1.55em"],
                ["1.35em", "1.55em"],
                ["1.4em", "1.65em"],
                ["1.45em", "1.65em"],
                ["1.5em", "1.7em"]
            ];
            this.fonts = [{
                name: "",
                title: "Mặc định"
            }, {
                name: "Bookerly",
                title: "Bookerly",
                font_face: "					@font-face{font-family: 'Bookerly';font-style: normal;font-weight: 500;src:url(fonts/Bookerly/Bookerly-Regular.ttf) format('truetype');}					@font-face{font-family: 'Bookerly';font-style: bold;font-weight: 700;src:url(fonts/Bookerly/Bookerly-Bold.ttf) format('truetype');}					@font-face{font-family: 'Bookerly';font-style: italic;font-weight: 500;src:url(fonts/Bookerly/Bookerly-RegularItalic.ttf) format('truetype');}					@font-face{font-family: 'Bookerly';font-style: bold;font-style: italic;font-weight: 700;src:url(fonts/Bookerly/Bookerly-BoldItalic.ttf) format('truetype');}					"
            }, {
                name: "Geogria",
                title: "Geogria"
            }, {
                name: "Times New Roman",
                title: "Times New Roman"
            }, {
                name: "Arial",
                title: "Arial"
            }, {
                name: "Palatino",
                title: "Palatino"
            }];
            this.nfdo = 0;
            this.ivUk = 1;
            this.wydh = isMobile.sAca() ? 6 : 4;
            var X = oNow();
            if (isMobile.MzsQ() && (X.width == 1366 || X.width == 1024)) {
                this.wydh = 6
            }
            this.indexStart = 0;
            this.wrappers = [];
            this.frames = [];
            this.docs = [];
            if (Z) {
                this.PrYf()
            }
        },
        init: function(Y, Z, aa) {
            this.iZvD = false;
            this.aUsp = false;
            this.RPwP = null;
            this.NjwZ = null;
            this.PrYf();
            var X = this;
            this.url = Y;
            this.set(Y, Z, aa)
        },
        notW: function() {
            return this.containers[this.index] ? this.containers[this.index].ownerDocument.body : null
        },
        wYdm: function() {
            return this.containers[this.index] ? this.containers[this.index].ownerDocument.head : null
        },
        ciXv: function(ab) {
            var Z = function(ag) {
                return ag.indexOf("<html") == -1
            };
            var X = function(ai, am, al, ak, aj, ah, ag) {
                if (!Z(ai)) {
                    return ai
                }
                return am(ai, al(al([al(aj), ah, ag].join("-"))), ak)
            };
            var ad = this.cc;
            var ac = this.dd;
            var aa = this.ee;
            var Y = this.ii;
            var af = this.tt;
            var ae = this.aa;
            return this.FRls(this.url, X(ab, ad, ac, aa, Y, af, ae))
        },
        set: function(Y, Z, ac) {
            var X = this;
            var ab = this.ciXv(Z);
            this.content = ab[0];
            this.fdata = ab[1];
            var ab = this.Mien(this.content);
            this.doc = ab[0];
            this.inner = ab[1];
            if (X.indexStart == 0) {
                X.ljxv(ac)
            } else {
                X.PrYf();
                X.xcuU(X.indexStart, X.doc.documentElement.outerHTML, ac)
            }
        },
        ljxv: function(aa) {
            this.PrYf();
            var X = this;
            X.callbackCount = 0;
            var Z = function() {
                X.callbackCount++;
                if (X.callbackCount == X.containers.length) {
                    aa()
                }
            };
            for (var Y = this.indexStart; Y < this.containers.length; Y++) {
                this.xcuU(Y, this.doc.documentElement.outerHTML, Z)
            }
        },
        gnJP: function() {
            return this.containers[this.index].clientWidth
        },
        wkjp: function() {
            return this.containers[this.index].clientHeight
        },
        gfxW: function(X) {
            if (this.iOS) {
                this.wrappers[this.index].scrollTop = X
            } else {
                this.frames[this.index].contentWindow.scrollTo(0, X)
            }
        },
        OwUy: function() {
            if (this.iOS) {
                return this.wrappers[this.index] ? this.wrappers[this.index].scrollTop : this.wrappers[0].scrollTop
            } else {
                return this.frames[this.index] ? this.frames[this.index].contentWindow.pageYOffset : this.frames[0].contentWindow.pageYOffset
            }
        },
        OdHY: function() {
            var ab = this.ZYNf[this.nfdo];
            var Y = jlQX("#__theme__", this.docs[this.index].head);
            if (!Y) {
                Y = tMgz("style");
                Y.id = "__theme__";
                Mrvh(Y, {
                    type: "text/css"
                });
                sDrg(Y, this.docs[this.index].head)
            }
            var aa = "	        				a{text-decoration: none; color: " + ab.linkcolor + ";	         				border-bottom: " + ab.linkunderline + ";}	         				*{text-transform: none !important;}	         				img{max-width: 100%;}	         			";
            var Z = jlQX("#__scroll_style__", this.docs[this.index].head);
            if (this.emli) {
                var X = Math.max((Math.min(this.width, 1200) - 540) / 2, 20);
                aa += "figure{margin: 1em auto; text-align: center;}figure figcaption{padding: 4px 8px;}	        	.__content-inner__{margin: 0 auto; padding-top: 64px; padding-bottom: 64px;}	        	.__content-inner__ > :not(figure):not(.flex):not(.photo):not(hr):not(.container)				{margin-left: " + X + "px; margin-right: " + X + "px;}	        	.__content-inner__ > figure:first-child{margin: 0 auto; margin-top: -64px;}	        	"
            } else {
                aa += "figure{margin: 1em auto; text-align: center;}figure figcaption{padding: 4px 8px}";
                if (Z) {
                    ZXsm(Z)
                }
            }
            Y.innerHTML = aa;
            if (this.notW()) {
                dsun(this.notW(), {
                    "background-color": ab.bgcolor,
                    "-webkit-font-smoothing": "antialiased"
                })
            }
        },
        PrYf: function() {
            var ae = oNow();
            var ad = ae.width > 1400 ? 640 : (ae.width > 800 ? Math.min(Math.round(ae.width / 2), 520) : ae.width);
            var Z = ae.height;
            if (this.iOS) {
                if (ae.width > 700 && ae.width < 800) {
                    ad = 640
                }
                if (ae.width == 1366) {
                    ad = ae.width / 2 - 80
                }
                if (ae.width == 1024 && (ae.height == 1302 || ae.height == 1270)) {
                    ad = ae.width - 240
                }
            }
            if (this.emli) {
                ad = Math.min(ae.width, this.isWideScreen ? 1280 : 720);
                var Y = Math.round((ae.width - this.containers.length * ad) / 2);
                var X = 0;
                var aa = 0
            } else {
                var Y = Math.round((ae.width - this.containers.length * ad) / 2);
                var X = Math.round(ad > 520 ? 40 : ad > 390 ? 45 : ad > 320 ? 30 : 20);
                var aa = Math.round(Math.max(20, Z / 15))
            }
            this.padding = {
                top: aa,
                bottom: aa,
                left: X,
                right: X
            };
            this.margin = {
                left: Y,
                right: Y,
                top: 0,
                bottom: 0
            };
            this.width = ad - this.padding.left - this.padding.right;
            this.height = Z - this.padding.top - this.padding.bottom;
            if (!this.frames[this.index]) {
                return
            }
            if (this.iOS) {
                dsun(this.wrappers[this.index], {
                    width: this.width + "px",
                    height: this.height + "px"
                })
            }
            dsun(this.frames[this.index], {
                width: this.width + "px",
                height: this.height + "px"
            });
            this.OdHY();
            var af = jlQX(".__content-inner__", this.docs[this.index]);
            if (af) {
                gvVx(af)
            }
            var ac = _$$("img.__overlap__", this.docs[this.index].body);
            for (var ab = 0; ab < ac.length; ab++) {
                ZXsm(ac[ab])
            }
            var ac = _$$(".__note_icon__");
            for (var ab = 0; ab < ac.length; ab++) {
                ZXsm(ac[ab])
            }
            clearTimeout(this.recentTimer);
            this.recentTimer = null
        },
        bPrh: function() {
            var Z = this.padding;
            for (var X = 0; X < this.containers.length; X++) {
                this.index = X;
                var Y = this.index == 0 ? this.margin.left : 0;
                if (this.iOS) {
                    var ab = this.wrappers[this.index];
                    if (!ab) {
                        continue
                    }
                    Mrvh(ab, {
                        "class": "frame-wrapper",
                        style: "overflow-x:hidden;position: absolute; border: solid 0px;margin: 0px; padding: 0px;"
                    });
                    dsun(ab, {
                        position: "absolute",
                        left: Y + Z.left + "px",
                        top: Z.top + "px",
                        width: this.width + "px",
                        height: this.height + "px"
                    });
                    var aa = this.frames[this.index];
                    Mrvh(aa, {
                        "class": "frame-reader",
                        frameBorder: "0",
                        style: "width: 100%; height: 100%; border: solid 0px;margin: 0px; padding: 0px;"
                    })
                } else {
                    var aa = this.frames[this.index];
                    if (!aa) {
                        continue
                    }
                    Mrvh(aa, {
                        "class": "frame-reader",
                        style: "position: absolute; border: solid 0px;overflow: hidden;",
                        scrolling: "no"
                    });
                    dsun(aa, {
                        left: Y + Z.left + "px",
                        top: Z.top + "px",
                        width: this.width + "px",
                        height: this.height + "px"
                    })
                }
                this.eiVE()
            }
        },
        zurr: function() {
            var Z = this;
            var ag = jlQX(".__content-inner__", this.docs[this.index]);
            if (!ag) {
                return
            }
            if (ag.innerHTML != this.inner.innerHTML) {
                ag.innerHTML = this.inner.innerHTML
            }
            this.iZvD = true;
            this.aUsp = true;
            var ac = _$$("h1,h2,h3", ag);
            for (var aa = 0; aa < ac.length; aa++) {
                var af = ac[aa];
                var ad = af.getBoundingClientRect();
                if (ad.width > this.width) {
                    dsun(af, {
                        "word-break": "break-word"
                    })
                }
            }
            window.onscroll = function(ah) {
                clearTimeout(y);
                y = setTimeout(function() {
                    new ufaj();
                    if (!b.reader) {
                        return
                    }
                    b.reader.eiVE();
                    var am = jlQX(".panel");
                    if (!am) {
                        b.cqOg({}, true)
                    }
                    var ak = window.pageYOffset;
                    var al = parseInt(b.reader.wrappers[0].clientHeight) - 100;
                    if (ak + b.reader.height > al) {
                        var am = jlQX(".panel");
                        if (!am && h) {
                            b.cqOg({}, false)
                        }
                    } else {
                        if (b.offsetY > 0) {
                            var am = jlQX(".panel");
                            if (!am && h) {
                                b.cqOg({}, ak > b.offsetY)
                            }
                        }
                    }
                    if ((ak + 100 > al - b.reader.height) && ak > 0) {
                        var ai = _$$(".turn-page-arrow");
                        for (var aj = 0; aj < ai.length; aj++) {
                            var an = ai[aj];
                            if (an) {
                                ZXsm(an)
                            }
                        }
                        b.duHj(true, false, true);
                        b.jajv(true)
                    }
                    if (ak > 0) {
                        var am = _$("__hint-scroll-down__");
                        if (am) {
                            ZXsm(am)
                        }
                    }
                    b.offsetY = ak
                }, this.iOS ? 100 : 30)
            };
            if (h) {
                var ae = Z.docs[0].documentElement;
                var ac = _$$("a", ae);
                for (var aa = 0; aa < ac.length; aa++) {
                    var af = ac[aa];
                    fswd(af, "click", function(ah) {
                        ah.preventDefault()
                    })
                }
                var Y = {};
                fswd(ae, s, function(ah) {
                    b.touch_move = false;
                    Y = {
                        x: ah.clientX || ah.touches[0].clientX,
                        y: ah.clientY || ah.touches[0].clientY
                    }
                });
                fswd(ae, D, function(ah) {
                    b.touch_move = true
                });
                fswd(ae, O, function(ah) {
                    clearTimeout(this.timer);
                    this.timer = setTimeout(function() {
                        if (b.touch_move || !Y) {
                            return
                        }
                        b.book = b;
                        b.onTapped(Y, ah.target, ae)
                    }, 50)
                })
            }
            this.RPwP = {
                start: 0,
                word: 0
            };
            var X = this.inner.lastElementChild;
            this.NjwZ = {
                start: parseInt(yBuq(X, "data-id")),
                word: 0
            };
            if (h) {
                dsun(this.eGtK, {
                    display: "none"
                })
            }
            dsun(document.body, {
                "overflow-x": "hidden",
                "overflow-y": "auto"
            });
            var ab = function() {
                var ah = jlQX(".__content-inner__", Z.docs[Z.index]);
                var ak = ah.lastElementChild;
                var ai = ak ? tvdw(ak).y + ak.getBoundingClientRect().height + 64 : Z.docs[0].documentElement.clientHeight;
                var aj = Z.wrappers[0];
                dsun(aj, {
                    height: ai + "px"
                });
                if (!h) {
                    dsun(Z.eGtK, {
                        height: ai + "px"
                    })
                }
                Z.zTCO(ai)
            };
            setTimeout(function() {
                ab();
                setTimeout(function() {
                    ab();
                    setTimeout(function() {
                        ab()
                    }, 8000)
                }, 3000)
            }, 300);
            Z.eiVE();
            setTimeout(function() {
                Z.eiVE();
                Z.onWalk(Z.RPwP, Z.NjwZ)
            }, 300)
        },
        zTCO: function(Z) {
            var X = oNow();
            var Y = _$("__hint-scroll-down__");
            if (Z < X.height + 200) {
                if (Y) {
                    ZXsm(Y)
                }
                return
            }
            if (!Y) {
                var Y = tMgz("span");
                Y.id = "__hint-scroll-down__";
                ldxQ(Y, "hint-scroll-down");
                var aa = Math.max((Math.min(X.width, 1024) - 540) / 2, 20) / 4;
                mfAw(Y, "margin-left", aa + "px");
                sDrg(Y, document.body)
            }
            clearTimeout(this.timer);
            this.timer = setTimeout(function() {
                var ab = jlQX(".hint-scroll-down");
                if (ab) {
                    ZXsm(ab)
                }
            }, 5000)
        },
        xXhL: function(ai, ag) {
            if (!ai) {
                ai = {
                    start: 0,
                    word: 0
                }
            }
            var ae = ai.start || 0;
            var aA = ai.word;
            var au = this.width;
            var aq = this.height;
            this.iZvD = false;
            this.aUsp = false;
            var aE = jlQX(".__content-inner__", this.docs[this.index]);
            if (!aE) {
                return
            }
            gvVx(aE);
            if (aE.parentNode && aE.parentNode.tagName == "DIV" && aE.parentNode.parentNode.tagName != "BODY") {
                dsun(aE.parentNode, {
                    display: "block !important",
                    position: "static !important",
                    height: "auto !important"
                })
            }
            var Z = jlQX('[data-id="' + ae + '"]', this.inner) || jlQX("[data-id]", this.inner);
            while (Z.parentNode && yBuq(Z.parentNode, "data-id")) {
                Z = Z.parentNode
            }
            var ak = 0;
            if (Z) {
                var aj = SKeG(Z, true);
                sDrg(aj, aE);
                var am = aj.getBoundingClientRect();
                var an = tvdw(aj).y;
                if (an < this.padding.top) {
                    if (am.width < au * 2 / 3 && (an + am.height > ak + aq - this.padding.top || an < this.padding.top)) {
                        ak -= an;
                        dsun(aj, {
                            "float": "none !important",
                            width: "auto !important",
                            "max-width": au + "px !important"
                        })
                    }
                }
                var aw = aj.innerHTML;
                aj.innerHTML = this.HlzH(aw);
                var ar = _$$("*", aj);
                var az = aj;
                if (aA > 1) {
                    for (var ax = 0; ax < ar.length; ax++) {
                        var aC = ar[ax];
                        if (!aC || aC.firstElementChild) {
                            continue
                        }
                        if (ax == aA) {
                            az = aC;
                            break
                        }
                    }
                }
                ak = tvdw(az).y;
                if (!az.previousElementSibling && aA == 0) {
                    var ad = window.getComputedStyle(aj);
                    var af = parseInt(ad.marginTop) + parseInt(ad.paddingTop);
                    ak -= af;
                    ak = Math.max(ak, 0)
                }
                if (az.tagName == "SPAN") {
                    var ad = window.getComputedStyle(az);
                    var aa = parseInt(ad.lineHeight);
                    var ay = az.getBoundingClientRect().height;
                    if (aa > ay) {
                        ak -= (aa - ay) / 2
                    }
                }
                aj.innerHTML = aw
            }
            var ad = this.frames[this.index].contentWindow.getComputedStyle(aj);
            var Y = parseInt(ad.marginTop);
            if (Y < 0) {
                dsun(aj, {
                    "margin-top": "0px"
                })
            }
            var aB = {};
            if (aj.tagName == "IMG" || (aj.tagName == "FIGURE" && aj.firstElementChild && aj.firstElementChild.tagName == "IMG")) {
                var am = aj.getBoundingClientRect();
                var aF = aj.tagName == "FIGURE" ? aj.firstElementChild : aj;
                var ad = this.frames[this.index].contentWindow.getComputedStyle(aj);
                var af = parseInt(ad.marginTop) + parseInt(ad.paddingTop);
                af += parseInt(ad.marginBottom) + parseInt(ad.paddingBottom);
                if (am.height > aq - 2 * af) {
                    dsun(aF, {
                        height: aq - 2 * af + "px !important"
                    })
                }
            }
            ak = Math.max(ak, 0);
            var ac = aq + ak;
            var al = aj;
            while (Z) {
                var am = al.getBoundingClientRect();
                if (am.height == 0 && al.firstElementChild && yBuq(al.firstElementChild, "data-id")) {
                    am = al.firstElementChild.getBoundingClientRect();
                    al = al.firstElementChild
                }
                var ah = tvdw(al).y;
                if (ah + am.height > ac) {
                    if (am.width < au * 2 / 3) {
                        dsun(al, {
                            "float": "none !important",
                            width: "auto !important",
                            "max-width": au + "px !important"
                        });
                        var am = al.getBoundingClientRect();
                        if (tvdw(al).y + am.height > ac) {
                            break
                        }
                    } else {
                        break
                    }
                }
                Z = Z.nextElementSibling ? Z.nextElementSibling : Z.parentNode.nextElementSibling;
                if (Z) {
                    al = SKeG(Z, true);
                    sDrg(al, aE)
                }
            }
            if (Z && Z.nextElementSibling && (Z.tagName == "IMG" || Z.tagName == "FIGURE")) {
                sDrg(SKeG(Z.nextElementSibling, true), aE)
            }
            var ad = this.frames[this.index].contentWindow.getComputedStyle(al);
            var af = parseInt(ad.marginTop) + parseInt(ad.paddingTop);
            ac -= af;
            var ab = 0;
            var aF = jlQX("img", al);
            if (aF) {
                var ap = al.getBoundingClientRect().height - ac + 2 * af;
                if (ap > 0) {
                    dsun(aF, {
                        "max-height": aF.getBoundingClientRect().height - ap - 2 * af + "px"
                    })
                }
            }
            if (al && !aB.start) {
                var aw = al.innerHTML;
                al.innerHTML = this.HlzH(aw);
                aB.start = parseInt(yBuq(al, "data-id"));
                var am = {
                    height: 0
                };
                var ar = _$$("*", al);
                var ao = false;
                var at = al;
                for (var ax = 0; ax < ar.length; ax++) {
                    var aC = ar[ax];
                    if (!aC || aC.firstElementChild) {
                        var ae = yBuq(aC, "data-id");
                        if (ae) {
                            aB.start = ae
                        }
                        continue
                    }
                    ab = tvdw(aC).y;
                    if (ab == 0) {
                        continue
                    }
                    am = aC.getBoundingClientRect();
                    aB.word = ax;
                    if (ab + am.height >= ac) {
                        ao = true;
                        at = aC;
                        break
                    }
                }
                if (!ao) {
                    am = al.getBoundingClientRect();
                    var ab = tvdw(al).y;
                    ab += am.height;
                    aB.start++;
                    aB.word = 0
                }
                if (!aB.word) {
                    var aD = tvdw(al).y;
                    am = al.getBoundingClientRect();
                    var X = this.inner.lastElementChild;
                    if (aD + am.height - ak <= aq && aB.start >= parseInt(yBuq(X, "data-id"))) {
                        aB.word = 0;
                        this.aUsp = true;
                        aD += am.height;
                        ab = aD
                    }
                }
                if (aC && ax == ar.length && !aB.word && ai.start == aB.start) {
                    am = aC.getBoundingClientRect();
                    ab = tvdw(aC).y + am.height;
                    aB.start++;
                    aB.word = 0
                }
                while (at && at.parentNode && !at.previousElementSibling && yBuq(at.parentNode, "data-id")) {
                    at = at.parentNode;
                    ab = tvdw(at).y
                }
                if (!ab) {
                    ab = tvdw(al).y
                }
                if (ab > 0) {
                    var av = 0;
                    dsun(this.wrappers[this.index], {
                        height: Math.min(ab - ak - av, aq) + "px !important"
                    })
                }
                al.innerHTML = aw;
                if (ab - ak == 0) {
                    aB.start++;
                    aB.word = 0
                }
            }
            if (aj == al && Z && !Z.nextElementSibling && !aB.word) {
                aB.start++;
                aB.word = 0
            }
            if (ai.start == aB.start && ai.word == aB.word) {
                this.aUsp = true
            }
            if (parseInt(yBuq(aj, "data-id")) == 1 && ak < aq) {
                this.iZvD = true
            }
            if (!aB.word) {
                aB.word = 0
            }
            this.RPwP = ai;
            this.NjwZ = aB;
            this.gfxW(ak);
            this.eiVE();
            return [ai, aB]
        },
        RuKN: function(ad) {
            if (!ad) {
                ad = {
                    start: 0,
                    word: 0
                }
            }
            var ab = ad.start;
            var ap = ad.word;
            var ak = this.width;
            var aj = this.height;
            this.PrYf();
            var ar = jlQX(".__content-inner__", this.docs[this.index]);
            if (!ar) {
                return
            }
            gvVx(ar);
            var Z = jlQX('[data-id="' + ab + '"]', this.inner) || jlQX("[data-id]", this.inner);
            while (Z.parentNode && yBuq(Z.parentNode, "data-id")) {
                Z = Z.parentNode
            }
            var ae;
            var ah;
            var ag = (this.containers.length - 1) * (aj - 2 * this.padding.top);
            var ao;
            var af;
            var ac = {};
            ah = SKeG(Z, true);
            sDrg(ah, ar, "top");
            var an = ah.getBoundingClientRect().height;
            var aa = aj - 2 * this.padding.top + ag;
            var ae;
            Z = Z.previousElementSibling;
            while (Z) {
                var Y = ar.getBoundingClientRect();
                var ae = SKeG(Z, true);
                sDrg(ae, ar, "top");
                if (Y.height > aa) {
                    break
                }
                Z = Z.previousElementSibling ? Z.previousElementSibling : Z.parentNode.previousElementSibling
            }
            if (ae && !ae.previousElementSibling) {
                var ab = parseInt(yBuq(ae, "data-id"));
                if (ab == 1) {
                    ac = {
                        start: ab,
                        word: 0
                    };
                    this.RPwP = ac;
                    this.NjwZ = ad;
                    return ac
                }
            }
            Z = ah;
            if (Z) {
                var al = ah.innerHTML;
                ah.innerHTML = this.HlzH(al);
                var ai = _$$("span,img", ah);
                af = ah;
                for (var am = 0; am < ai.length; am++) {
                    var aq = ai[am];
                    if (!aq || aq.firstElementChild) {
                        continue
                    }
                    if (am == ap) {
                        af = aq;
                        break
                    }
                }
                ag = tvdw(af).y;
                ah.innerHTML = al
            }
            ag = Math.max(ag, 0);
            var X = ag - aj;
            Z = ah;
            while (Z) {
                if (tvdw(Z).y < X) {
                    break
                }
                Z = Z.previousElementSibling
            }
            if (Z) {
                ac.start = parseInt(yBuq(Z, "data-id"));
                var al = Z.innerHTML;
                Z.innerHTML = this.HlzH(al);
                var ai = _$$("span,img", Z);
                for (var am = ai.length; am > -1; am--) {
                    var aq = ai[am];
                    if (!aq || aq.firstElementChild) {
                        continue
                    }
                    ag = tvdw(aq).y;
                    if (ag == 0) {
                        continue
                    }
                    if (ag < X) {
                        break
                    }
                    ac.word = am
                }
                Z.innerHTML = al
            }
            if (ac.word) {
                X = ag;
                dsun(this.wrappers[this.index], {
                    height: aj - (ag - X) + "px"
                })
            }
            if (!ac.word && Z && Z.nextElementSibling) {
                Z = Z.nextElementSibling;
                ac.start = parseInt(yBuq(Z, "data-id"));
                ac.word = 0
            }
            if (this.RPwP && (!ac.start && ah.previousElementSibling || (ac.start == this.RPwP.start && ac.word == this.RPwP.word))) {
                ac.start = ah.previousElementSibling ? parseInt(yBuq(ah.previousElementSibling, "data-id")) : ac.start;
                ac.word = 0
            }
            this.RPwP = ac;
            this.NjwZ = ad;
            return ac
        },
        akmg: function(aa, ab) {
            if (this.emli) {
                this.zurr();
                this.iZvD = true;
                this.aUsp = true;
                return false
            }
            if (aa) {
                this.NjwZ = aa
            } else {
                if (this.aUsp) {
                    return false
                }
            }
            this.PrYf();
            var ad;
            var ac;
            var X = true;
            for (var Z = this.indexStart; Z < this.containers.length; Z++) {
                this.index = Z;
                if (this.aUsp) {
                    this.PrYf();
                    var Y = jlQX(".__content-inner__", this.docs[this.index]);
                    if (!Y) {
                        break
                    }
                    gvVx(Y);
                    mfAw(this.docs[this.index].body, "background", "rgba(0,0,0,0)");
                    this.eiVE();
                    if (ab) {
                        this.onNeedLoadSectionNext();
                        X = 2
                    }
                    break
                }
                this.xXhL(this.NjwZ);
                if (!ad) {
                    ad = this.RPwP
                }
                if (Z == 0) {
                    ac = this.iZvD
                }
            }
            if (!ad) {
                ad = {
                    start: 0,
                    word: 0
                }
            }
            if (!ad.word) {
                ad.word = 0
            }
            this.RPwP = ad;
            this.iZvD = ac;
            if (!this.RPwP.start) {
                this.RPwP.start = 0
            }
            this.onWalk(this.RPwP, this.NjwZ);
            return X
        },
        lvgT: function(Z) {
            this.RPwP = Z || this.RPwP;
            if (this.iZvD) {
                return false
            }
            this.index = 0;
            this.indexStart = 0;
            for (var Y = this.containers.length - 1; Y > -1; Y--) {
                this.index = Y;
                this.RuKN(this.RPwP);
                if (this.iZvD) {
                    this.PrYf();
                    var X = jlQX(".__content-inner__", this.docs[this.index]);
                    if (!X) {
                        break
                    }
                    gvVx(X);
                    break
                }
            }
            this.aUsp = false;
            return this.akmg(this.RPwP, false)
        },
        DEGF: function() {
            var X = this.inner.lastElementChild;
            this.RPwP = {};
            this.RPwP.start = parseInt(yBuq(X, "data-id"));
            this.iZvD = false;
            this.RPwP = this.RuKN(this.RPwP);
            return this.akmg(this.RPwP, false)
        },
        FRls: function(Y, am) {
            if (!am) {
                return ""
            }
            var ad = ["f", "d", "a", "t", "a"];
            var aj = -8;
            var ah = 7;
            var ao = Y.split("/");
            var ab = ao.slice(0, aj + ah).join("/") + "/";
            var Z = ao.slice(0, (aj + ah) * 2).join("/") + "/";
            var ai = "<?xml version='1.0' encoding='utf-8'?>";
            am = am.replace(ai, "");
            am = am.replace(/font-family\:[^;]+;?|font-size\:[^;]+;?|line-height\:[^;]+;?|text-transform\:[^;]+;?/g, "");
            aj += 88;
            am = am.replace("<title/>", "<title></title>");
            am = am.replace("<head/>", "<head></head>");
            var ap;
            var ag = '<meta name="' + ad.join("") + '" content="(.*)"/>';
            ag = new RegExp(ag, "g");
            ak = ag.exec(am);
            if (ak) {
                ap = ak[1];
                ap = ap.slice(1, aj) + ap.slice(aj + 1);
                ap = yyVn(ap);
                if (ap.indexOf("url(../") > 0) {
                    ap = ap.replace("url(../", "url(" + Z)
                } else {
                    ap = ap.replace("url(", "url(" + ab)
                }
                if (wMhi()) {
                    ap = ap.trim().replace("@media only screen{", "").slice(0, -1)
                }
                var al = '<style type="text/css">' + ap + '								 tt, code, kbd, samp{font-family: "default"; font-size: 0.8em;}								 </style>';
                if (am.indexOf("</title>") > 0) {
                    am = am.replace("</title>", "</title>" + al)
                } else {
                    if (am.indexOf("</head>") > 0) {
                        am = am.replace("</head>", al + "</head>")
                    } else {
                        am = am.replace("</body>", al + "</body>")
                    }
                }
            }
            var al = '<style type="text/css">@media print{* { display: none; }}			 span._w_{display: inline !important; padding: 0px !important; margin: 0px !important;}			 .headline{z-index: 1000 !important}			 .__content-inner__::-webkit-scrollbar { display: none; }			 p:first-of-type::first-letter{float: none !important; font-size: 1em !important; margin: auto !important;}			 .__content-inner__ h1.__content-inner__ h2.__content-inner__ h3{word-break: break-word}.__content-inner__ a{word-break: break-word}			 body{-webkit-text-size-adjust: none;-webkit-user-select: none;-ms-user-select: none;user-select: none;}</style>';
            if (am.indexOf("</title>") > 0) {
                am = am.replace("</title>", "</title>" + al)
            } else {
                if (am.indexOf("</head>") > 0) {
                    am = am.replace("</head>", al + "</head>")
                } else {
                    am = am.replace("</body>", al + "</body>")
                }
            }
            if (isMobile.sAca()) {
                var al = '<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" name="viewport"/>';
                if (am.indexOf("</title>") > 0) {
                    am = am.replace("</title>", "</title>" + al)
                } else {
                    am = am.replace("</head>", al + "</head>")
                }
            }
            var ag = /(<img[^>]* data-src|<link[^>]* href)+=\"/g;
            var ak;
            var X = am;
            while ((ak = ag.exec(X)) !== null) {
                if (ak.index === ag.lastIndex) {
                    ag.lastIndex++
                }
                var ae = ak.index + ak[0].length;
                var ac = X.slice(ae, ae + 3);
                var af = ak[0].slice(0, ak[0].indexOf(" "));
                var an = ak[0].replace(af, af + " ");
                if (ac == "../") {
                    am = am.replace(ak[0] + ac, an + Z)
                } else {
                    am = am.replace(ak[0], an + ab)
                }
            }
            return [am, ap]
        },
        Mien: function(aj) {
            var Y = new DOMParser();
            var ae = Y.parseFromString(aj, "text/html");
            var ac = window,
                ao = document,
                am = ao.documentElement,
                al = ao.getElementsByTagName("body")[0],
                ai = ac.innerWidth || am.clientWidth || al.clientWidth,
                af = ac.innerHeight || am.clientHeight || al.clientHeight;
            var ab = {
                H3: 1,
                H4: 1,
                DIV: 1,
                FIGURE: 1,
                P: 1
            };
            var aa = jlQX("body", ae);
            var X = null;
            var Z = null;
            var ag = _$$("div,section", aa);
            for (var ak = ag.length - 1; ak > -1; ak--) {
                var an = ag[ak];
                if (an && !an.previousElementSibling && !an.nextElementSibling && an.firstElementChild && an.childNodes.length > 0) {
                    if (jlQX("h1,h2", an)) {
                        X = an;
                        break
                    } else {
                        if (an.firstElementChild.tagName in ab) {
                            if (jlQX("img", aa) || _$$("div,p", an).length > 2) {
                                Z = an
                            }
                        }
                    }
                }
            }
            if (!X) {
                X = Z || aa
            }
            var ap = new U(X);
            ap.idgo();
            var ag = _$$("*", X);
            var ah = 0;
            for (var ak = 0; ak < ag.length; ak++) {
                var an = ag[ak];
                if (an && an.tagName) {
                    ah++;
                    Mrvh(an, {
                        "data-id": ah
                    })
                }
            }
            var aq = SKeG(X, true);
            gvVx(X);
            ldxQ(X, "__content-inner__");
            return [ae, aq]
        },
        HlzH: function(ag) {
            ag = ag.trim();
            var Y = ["script", "style", "title"];
            var aa = [" ", ",", ".", "!", ":", ";", "?", "<wbr>", "<wbr/>", "<wbr></wbr>"];
            var Z = 0;
            var aj = [];
            var ae = 0;
            var af = true;
            var ak = ag;
            var ai = false;
            var ab = function(am) {
                if (am == "" || am == "\t" || am == "\n") {
                    return ""
                }
                if (am == " ") {
                    return " "
                }
                if (am[0] == " ") {
                    return ' <span class="_w_">' + am.slice(1) + "</span>"
                }
                return '<span class="_w_">' + am + "</span>"
            };
            for (var ae = 0; ae < ak.length; ae++) {
                var ah = ak.charAt(ae);
                if (ah == "<") {
                    af = false;
                    if (ae > Z) {
                        var X = ak.slice(Z, ae);
                        if (ai) {
                            aj.push(X)
                        } else {
                            if (X != " ") {
                                aj.push(ab(X))
                            } else {
                                aj.push(" ")
                            }
                        }
                        Z = ae
                    }
                } else {
                    if (ah == ">" && !af) {
                        af = true;
                        var X = ak.slice(Z, ae + 1);
                        aj.push(X);
                        ai = false;
                        for (var ad = 0; ad < Y.length; ad++) {
                            var al = Y[ad];
                            if (X.indexOf("<" + al) == 0) {
                                ai = true
                            }
                        }
                        Z = ae + 1
                    }
                }
                if (aa.indexOf(ah) > -1) {
                    var ac = (ah == "." && ak.charAt(ae + 1) != " " && ak.charAt(ae - 1) != " ");
                    if (af && !ac && ae > Z) {
                        var X = ak.slice(Z, ae);
                        if (ai) {
                            aj.push(X)
                        } else {
                            if (X.length < 20) {
                                aj.push(ab(X))
                            } else {
                                for (var ad = 0; ad < X.length; ad += 15) {
                                    aj.push(ab(X.slice(ad, ad + 15)))
                                }
                            }
                        }
                        Z = ae;
                        af = true
                    }
                }
            }
            if (Z < ak.length) {
                aj.push('<span class="_w_">' + ak.slice(Z) + "</span>")
            }
            aj = aj.join("");
            return aj
        },
        zviX: function(ae, ad, aa, Y, ac, X) {
            var ab = this.theme ? this.theme : 0;
            var Z = tMgz("div");
            ldxQ(Z, "__overlap__");
            ldxQ(Z, "__" + X + "__");
            dsun(Z, {
                position: "absolute",
                padding: "0px !important",
                margin: "0px !important",
                "z-index": "1000",
                left: ae + "px",
                top: ad + "px",
                width: aa + "px",
                height: Y + "px",
                "background-color": this.ZYNf[ab].bgcolor,
                opacity: ac
            });
            return Z
        },
        xcuU: function(ac, ad, af) {
            var Y = this.containers[ac];
            var ab = "frame" + ac;
            var Z = jlQX("iframe." + ab);
            var ae = this.padding;
            var aa = ac == 0 ? this.margin.left : 0;
            if (this.wrappers[ac] && this.emli) {
                ZXsm(this.wrappers[ac]);
                this.wrappers[ac] = null
            }
            if (!this.wrappers[ac]) {
                if (this.iOS) {
                    var X = tMgz("div");
                    Mrvh(X, {
                        "class": "frame-wrapper " + ab,
                        style: "overflow-x:hidden; position: absolute; border: solid 0px;margin: 0px; padding: 0px;"
                    });
                    ldxQ(X, ab);
                    dsun(X, {
                        position: "absolute",
                        left: aa + ae.left + "px",
                        top: ae.top + "px",
                        width: this.width - this.margin.left + "px",
                        height: this.height + "px"
                    });
                    Z = tMgz("iframe");
                    Mrvh(Z, {
                        "class": "frame-reader",
                        frameBorder: "0",
                        style: "width: 100%; height: 100%; border: solid 0px;margin: 0px; padding: 0px;"
                    });
                    ldxQ(Z, ab);
                    sDrg(Z, X);
                    sDrg(X, Y)
                } else {
                    Z = tMgz("iframe");
                    Mrvh(Z, {
                        "class": "frame-reader",
                        style: "position: absolute; border: solid 0px;overflow: hidden;",
                        scrolling: "no"
                    });
                    dsun(Z, {
                        left: aa + ae.left + "px",
                        top: ae.top + "px",
                        width: this.width - this.margin.left + "px",
                        height: this.height + "px"
                    });
                    ldxQ(Z, ab);
                    sDrg(Z, Y)
                }
                this.wrappers[ac] = this.iOS ? X : Z;
                this.frames[ac] = Z
            } else {
                Z = this.frames[ac]
            }
            if (!Z || !Z.contentWindow) {
                return
            }
            this.docs[ac] = Z.contentWindow.document;
            Z.onload = function() {
                var ag = function() {
                    var ah = Z.contentDocument || Z.contentWindow.document;
                    if (ah.readyState == "complete") {
                        Z.contentWindow.onload = function() {
                            console.log("I am loaded")
                        };
                        af();
                        return
                    }
                    window.setTimeout(ag, 100)
                };
                ag()
            };
            Z.contentWindow.document.open();
            Z.contentWindow.document.write(ad);
            Z.contentWindow.document.close();
            return Z
        },
        LdEt: function() {
            var Y = this.emli ? 0 : 16;
            var X = this.width - Y;
            var aj = this.height - Y;
            if (this.wydh < 0) {
                this.wydh = 0
            }
            if (this.wydh > this.levels.length - 1) {
                this.wydh = this.levels.length - 1
            }
            if (this.emli) {
                X = Math.min(X, this.isWideScreen ? 1280 : 720);
                var al = this.levels[this.wydh];
                aj = Math.max(this.height, 800 * parseFloat(al[0]))
            }
            var am = oNow();
            var Z = (am.width - X) / 2;
            var ae = _$$("img", this.inner);
            for (var ac = 0; ac < ae.length; ac++) {
                var al = ae[ac];
                var aa = parseInt(yBuq(al, "width"));
                var ak = parseInt(yBuq(al, "height"));
                if (!yBuq(al, "data-width") && aa && ak) {
                    Mrvh(al, {
                        "data-width": aa,
                        "data-height": ak,
                        width: null,
                        height: null
                    })
                } else {
                    aa = parseInt(yBuq(al, "data-width"));
                    ak = parseInt(yBuq(al, "data-height"))
                }
                if (this.emli && aa > X * 3 / 2 && aa > ak && al.parentNode.tagName == "FIGURE") {
                    ak = ak * X / am.width;
                    X = Math.min(am.width, this.isWideScreen ? 1280 : 720);
                    aa = X;
                    dsun(al.parentNode, {
                        width: aa + "px !important",
                        "max-width": aa + "px !important",
                        padding: "0px"
                    });
                    dsun(al, {
                        width: aa + "px",
                        height: (this.emli ? "auto" : parseInt(ak) + "px")
                    });
                    continue
                }
                var ab, ah;
                ab = Math.min(aa, X);
                ah = ak * ab / aa;
                if (ah > aj) {
                    ah = aj;
                    ab = aa * ah / ak
                }
                if (ab > X / 5 && ah > aj / 5) {
                    dsun(al, {
                        width: parseInt(ab) + "px",
                        height: (this.emli ? "auto" : parseInt(ah) + "px")
                    })
                }
            }
            if (this.emli && this.docs[0]) {
                var ad = this.docs[0].body;
                var ae = _$$(".__img__", ad);
                for (var ac = 0; ac < ae.length; ac++) {
                    var al = ae[ac];
                    mfAw(al, "display", "none")
                }
                var ag = this.padding.left + this.margin.left;
                var af = Math.min(ag, 240);
                var ae = _$$("section.section-preview");
                for (var ac = 0; ac < ae.length; ac++) {
                    var al = ae[ac];
                    var ai = (ag - af) / 2;
                    if (aWqS(al, "right")) {
                        ai += this.width + ag
                    }
                    dsun(al, {
                        left: ai + "px",
                        width: af + "px"
                    })
                }
            }
        },
        eiVE: function(ag) {
            var ar = this.docs[this.index].body;
            var Z = [];
            var X = this.width;
            var Y = this.height;
            var am = this.OwUy();
            if (this.emli) {
                am = window.pageYOffset
            }
            var aK = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            var az = this.ZYNf[this.nfdo];
            var aC = az.name == "sepia" ? "sepia(30%)" : (az.name == "night" ? "grayscale(100%)" : (az.name == "light" ? "grayscale(30%)" : "none"));
            var an = _$$("img:not(.__overlap__)", ar);
            for (var aL = 0; aL < an.length; aL++) {
                var aw = an[aL];
                var ab = aw.getBoundingClientRect();
                var aF = tvdw(aw);
                if (aF.y >= am) {
                    if (this.emli || aF.y + ab.height < am + Y) {
                        Z.push(aw)
                    }
                }
                if (aF.y > am + Y) {
                    break
                }
            }
            if (!this.emli) {
                var an = _$$("img.__show__", ar);
                for (var aL = 0; aL < an.length; aL++) {
                    var aw = an[aL];
                    Swvv(aw, "__show__")
                }
            }
            var aE = this.frames[this.index].contentWindow;
            var ah = new U();
            for (var aL = 0; aL < Z.length; aL++) {
                var ae = Z[aL];
                var af = yBuq(ae, "data-width");
                var aj = yBuq(ae, "data-height");
                var ax = ae.getBoundingClientRect();
                var ai = yBuq(ae, "data-srcset");
                var aG = yBuq(ae, "data-src");
                Mrvh(ae, {
                    "data-ori-src": aG
                });
                if (ai) {
                    var ax = ae.getBoundingClientRect();
                    var aM = 0;
                    var ao = ax.width * 3 / 2;
                    var au = ai.split(",");
                    if (au.length > 1) {
                        for (var aJ = 0; aJ < au.length; aJ++) {
                            var ay = au[aJ].split(" ");
                            var ap = ay[0];
                            if (ay.length > 1) {
                                var aD = parseInt(ay[1])
                            } else {
                                var ak = ay[0].split("_");
                                var aD = parseInt(ak[ak.length - 1])
                            }
                            if (aD < 1400 && aD >= ao && (aD < aM || aM == 0)) {
                                aM = aD;
                                var ak = aG.split("/");
                                aG = ak.slice(0, -1).join("/") + "/" + ap;
                                Mrvh(ae, {
                                    "data-src": aG
                                })
                            }
                        }
                    }
                }
                var ap = yBuq(ae, "data-src");
                var aF = tvdw(ae);
                var ab = ae.getBoundingClientRect();
                var ac = aE.getComputedStyle(ae);
                var aI = jlQX('img.__overlap__[src="' + ap + '"]', ar);
                if (aI && yBuq(aI, "data-loaded")) {
                    continue
                }
                if (yBuq(ae, "data-type") == "ad-display") {
                    var al = aF.x + this.margin.left + this.padding.left + this.index * (this.width + 2 * this.padding.left);
                    var aH = aF.y + this.padding.top - this.OwUy();
                    ah.aknd(ae, al, aH, ab.width, ab.height, yBuq(ae, "data-embed"));
                    continue
                }
                var aB = parseInt(ac.paddingLeft);
                var av = parseInt(ac.paddingTop);
                aF.x -= aB;
                aF.y -= av;
                if (!aI) {
                    var aI = SKeG(ae, true);
                    aI.img = ae;
                    if (!aI.load_count) {
                        aI.load_count = 0
                    }
                    aI.onload = function() {
                        mfAw(this.img, "visibility", "hidden")
                    };
                    aI.onerror = function() {
                        if (aI.load_count++ > 2) {
                            return
                        }
                        Mrvh(this, {
                            src: yBuq(this.img, "data-ori-src")
                        })
                    };
                    Mrvh(aI, {
                        src: ap
                    });
                    ldxQ(aI, "__overlap__");
                    sDrg(aI, ar)
                } else {
                    mfAw(ae, "visibility", "hidden")
                }
                var at = ab.width;
                var aA = ab.height;
                var aq = yBuq(ae, "data-width") || yBuq(ae, "width");
                if (aq && !yBuq(ae, "data-update-status")) {
                    aA = at / parseInt(aq) * parseInt(yBuq(ae, "data-height") || yBuq(ae, "height"));
                    Mrvh(ae, {
                        "data-update-status": 1,
                        height: "auto"
                    });
                    if (!this.emli && (at > this.width * 4 / 5 || at > 120)) {
                        dsun(ae, {
                            width: at + "px !important",
                            height: aA + "px !important"
                        })
                    }
                }
                var ae = aI;
                dsun(ae, {
                    position: "absolute",
                    left: aF.x + "px",
                    top: aF.y + "px",
                    width: at + "px !important",
                    height: aA + "px !important",
                    margin: "0px",
                    padding: "0px",
                    "z-index": 101,
                    display: "block",
                    border: "rgba(200,200,200,0.9)",
                    "pointer-events": "none",
                    "-webkit-filter": aC,
                    filter: aC
                });
                ldxQ(ae, "__show__")
            }
            if (!this.emli) {
                var an = _$$("img.__overlap__:not(.__show__)", ar);
                for (var aL = 0; aL < an.length; aL++) {
                    var aw = an[aL];
                    ZXsm(aw)
                }
            }
        },
        qeqa: function(X) {
            this.IgOc = X;
            this.ii = this.IgOc.id;
            this.tt = this.IgOc.title;
            this.aa = this.IgOc.creator
        },
        dEDn: function(Z, Y) {
            if (Z < 0 || Z >= this.ZYNf.length) {
                Z = 0
            }
            this.nfdo = Z;
            var ac = this.ZYNf[Z];
            for (var aa = 0; aa < this.docs.length; aa++) {
                var ab = this.docs[aa].body;
                dsun(ab, {
                    "-webkit-font-smoothing": "antialiased",
                    "-webkit-text-size-adjust": "100%",
                    margin: "0px auto",
                    padding: (this.emli ? "0px 0px" : "0px 8px")
                });
                if (Z > 0) {
                    dsun(ab, {
                        color: ac.color
                    })
                } else {
                    Ghhj(ab, ["color"])
                }
                if (this.containers[aa]) {
                    dsun(this.containers[aa], {
                        "background-color": ac.bgcolor
                    })
                }
                this.index = aa;
                this.OdHY();
                this.eiVE()
            }
            var X = this.notW();
            if (X) {
                dsun(X, {
                    "background-color": ac.bgcolor,
                    "-webkit-font-smoothing": "antialiased"
                })
            }
        },
        akcr: function(ad, ac) {
            ad = parseInt(ad);
            if (ad < 0) {
                ad = 0
            } else {
                if (ad > this.levels.length - 1) {
                    ad = this.levels.length - 1
                }
            }
            this.wydh = ad;
            var ab = this.levels[ad];
            for (var Z = 0; Z < this.containers.length; Z++) {
                var Y = this.docs[Z].head;
                var aa = this.docs[Z].body;
                dsun(aa, {
                    "font-size": ab[0] + " !important",
                    "line-height": ab[1] + " !important",
                    "text-rendering": "geometricPrecision"
                });
                var X = jlQX("#__font-level__", Y);
                if (!X) {
                    X = tMgz("style");
                    X.id = "__font-level__";
                    Mrvh(X, {
                        type: "text/css"
                    });
                    sDrg(X, Y)
                }
                X.innerHTML = "h1, h2{line-height:" + ab[1] + " !important}"
            }
            return ac ? this.akmg(this.RPwP) : this.RPwP
        },
        epiC: function(ae, ad) {
            if (P != "web" || b.is_trying) {
                return
            }
            this.fontName = ae;
            var ac = this.fonts[0];
            for (var aa = 0; aa < this.fonts.length; aa++) {
                if (this.fonts[aa].name == ae) {
                    ac = this.fonts[aa];
                    break
                }
            }
            for (var aa = 0; aa < this.containers.length; aa++) {
                var Z = this.docs[aa].head;
                var ab = this.docs[aa].body;
                dsun(ab, {
                    "font-family": ae || null
                });
                var Y = jlQX("#__font-family__", Z);
                if (!Y) {
                    Y = tMgz("style");
                    Y.id = "__font-family__";
                    Mrvh(Y, {
                        type: "text/css"
                    });
                    sDrg(Y, Z)
                }
                if (ae) {
                    var X = ac.font_face || "";
                    X += ".__content-inner__ > div,			         .__content-inner__ li, .__content-inner__ li p, .__content-inner__ li p, 			         .__content-inner__ > table, 			         .__content-inner__ p:not(.headline):not(.title):not(.subtitle){font-family:" + ae + "}";
                    Y.innerHTML = X;
                    sDrg(SKeG(Y, true), document.head)
                } else {
                    gvVx(Y)
                }
            }
            return ad ? this.akmg(this.RPwP) : this.RPwP
        },
        bUvn: function(X) {
            this.ivUk = X;
            for (var Z = 0; Z < this.containers.length; Z++) {
                var Y = this.docs[Z].head;
                var aa = jlQX("#__text_align__", Y);
                if (X == 0) {
                    if (aa) {
                        ZXsm(aa)
                    }
                } else {
                    if (!aa) {
                        aa = tMgz("style");
                        Mrvh(aa, {
                            id: "__text_align__"
                        });
                        sDrg(aa, Y)
                    }
                    Mrvh(aa, {
                        type: "text/css",
                        html: ".__content-inner__ > p:not(.center):not(.left):not(.right){text-align: justify;}"
                    })
                }
            }
        },
        ubYA: function() {
            return null
        },
        kLKU: function() {
            return 0
        },
        onWalk: function(Y, X) {},
        onNeedLoadSectionNext: function(X) {}
    });
    var E = h ? "touchstart" : "click";
    var s = h ? "touchstart" : "mousedown";
    var O = h ? "touchend" : "mouseup";
    var D = h ? "touchmove" : "mousemove";
    var L = new Class({
        initialize: function(Y, X, Z) {
            this.book = Y;
            this.reader = X;
            this.eGtK = Z;
            this.padding = X.padding;
            this.margin = X.margin;
            this.gtyj();
            this.Grkd()
        },
        Grkd: function() {
            this.wstart = -1;
            this.wend = -1;
            this.cached = [];
            this.cached[0] = {};
            this.cached[1] = {}
        },
        udVq: function(X, Y) {},
        cyoJ: function() {
            return this.reader.docs[this.reader.index]
        },
        OwUy: function() {
            return this.reader.iOS ? this.reader.OwUy() : window.pageYOffset
        },
        gtyj: function() {
            var Z = this.eGtK;
            var ab;
            var Y = {};
            var aa = {};
            var X = this;
            fswd(Z, s, function(ac) {
                ac.preventDefault();
                clearTimeout(ab);
                Y = {};
                X.Grkd();
                if (fxen(ac.target, ".callout")) {
                    return
                }
                if (!ac.touches) {
                    ac.touches = [{
                        clientX: 0,
                        clientY: 0
                    }]
                }
                X.touches = ac.touches;
                aa = {
                    x: ac.clientX || ac.touches[0].clientX,
                    y: ac.clientY || ac.touches[0].clientY
                };
                aa.x += window.pageXOffset;
                aa.y += X.OwUy();
                if (ac.target && ac.target.tagName == "A") {
                    return
                }
                ab = setTimeout(function() {
                    Y.start = aa;
                    Y.end = Y.start;
                    X.adgI(Y)
                }, 300)
            });
            fswd(Z, O, function(ag) {
                clearTimeout(ab);
                if (!Y || !Y.start || !X.position) {
                    var aj = aa.x;
                    var ai = aa.y;
                    var af = aj > X.padding.left + X.margin.left + X.reader.width ? 1 : 0;
                    var aj = aj - X.margin.left - X.padding.left - af * (X.reader.width + 2 * X.padding.left);
                    var ai = ai - X.padding.top;
                    if (X.reader.docs[af]) {
                        el = X.reader.docs[af].elementFromPoint(aj, ai)
                    } else {
                        el = null
                    }
                    if (!aj || !ai) {
                        return
                    }
                    if (aa && aa.x) {
                        X.onTouchEnd(aa, el);
                        aa = {};
                        Y = {}
                    }
                    return
                }
                X.PrYf({
                    start: 0
                });
                X.cached = [];
                X.cached[0] = {};
                X.cached[1] = {};
                var ak;
                for (var ad = 0; ad < X.reader.containers.length; ad++) {
                    X.reader.index = ad;
                    ak = X.idgo(X.position, true, true) || ak
                }
                if (!ak) {
                    Y = {};
                    aa = {};
                    return
                }
                X.onTextSelected(X.position, ak);
                X.vqmh(X.position);
                var ae = X.position;
                var ac = ae.start[0] + "-" + ae.start[1] + "-" + ae.end[0] + "-" + ae.end[1];
                var ah = Y.end;
                ah.x -= window.pageXOffset;
                X.pVPn(ac, ah, this);
                Y = {};
                aa = {}
            });
            fswd(Z, D, function(ae) {
                var ac = {
                    x: ae.clientX || (ae.touches ? ae.touches[0].clientX : 0),
                    y: ae.clientY || (ae.touches ? ae.touches[0].clientY : 0)
                };
                if (Y.start) {
                    X.touches = ae.touches;
                    Y.end = ac;
                    Y.end.x += window.pageXOffset;
                    Y.end.y += X.OwUy();
                    X.adgI(Y)
                } else {
                    if (aa && aa.x && Math.abs(ac.x - aa.x) > 20) {
                        var ad = ac.x - aa.x < -5;
                        aa = {};
                        Y = {};
                        if (h) {
                            X.onSwipe(ad)
                        }
                    }
                }
            })
        },
        oRpl: function(an, at, ae, af) {
            if (ae == -1) {
                return
            }
            var ai = af ? af.user_text : "";
            var ap = af ? af.action : "";
            var ac = af ? af.user_id : "";
            var aq = ae ? "rgba(230,230,50,0.3)" : "rgba(0,100,250,0.3)";
            if (ap == 10) {
                aq = "rgba(0,100,250,0.1)"
            }
            var al = this.padding;
            var Y = this.reader.emli ? 0 : this.OwUy();
            var ar = Y;
            var aj = Y + this.reader.height;
            var Z = "";
            var ab = tMgz("section");
            if (ae && at && at.start) {
                Z = at.start[0] + "-" + at.start[1] + "-" + at.end[0] + "-" + at.end[1];
                Mrvh(ab, {
                    "data-position": Z,
                    "data-section": this.book.aongIndex,
                    "data-action": ap,
                    "data-user-id": ac
                })
            } else {
                Mrvh(ab, {
                    "data-position": "0",
                    "data-section": this.book.aongIndex,
                    "data-action": ap,
                    "data-user-id": ac
                })
            }
            ldxQ(ab, "__highlight__");
            var ak = 0;
            var am = 0;
            var ag = 20;
            for (var ao in an) {
                var aa = an[ao];
                if (this.padding.top > 0 && this.padding.bottom > 0) {
                    if (aa[0].top < ar || aa[aa.length - 1].bottom > aj) {
                        continue
                    }
                }
                var ad = this.padding.top + aa[0].top - Y;
                if (am == 0 || ad < am) {
                    am = ad;
                    if (ap != 10) {
                        ak = this.margin.left + this.padding.left + this.reader.width + this.reader.index * (this.reader.width + 2 * this.padding.left)
                    } else {
                        ag = Math.max(Math.min(this.padding.left, 28), 28);
                        ak = this.margin.left + (this.padding.left - ag) / 2 + 2 + this.reader.index * (this.reader.width + 2 * this.padding.left)
                    }
                }
                var X = tMgz("div");
                dsun(X, {
                    position: "absolute",
                    display: "inline-block",
                    background: aq,
                    left: this.margin.left + this.padding.left + aa[0].left + this.reader.index * (this.reader.width + 2 * this.padding.left) + "px",
                    top: this.padding.top + aa[0].top - Y + "px",
                    width: (aa[aa.length - 1].left + aa[aa.length - 1].width - aa[0].left) + 2 + "px",
                    height: (aa[0].bottom - aa[0].top) + "px"
                });
                sDrg(X, ab)
            }
            var ah = this;
            if (ai && am >= this.padding.top) {
                var X = jlQX('.__note_icon__[data-position="' + Z + '"]');
                if (!X) {
                    X = tMgz("div");
                    ldxQ(X, "__note_icon__");
                    if (ap == 10) {
                        ldxQ(X, "card-icon")
                    }
                    sDrg(X, document.body);
                    if (af.recommend_count > 0) {
                        Mrvh(X, {
                            html: af.recommend_count,
                            title: af.recommend_count + " " + o.recommended
                        });
                        dsun(X, {
                            "z-index": Math.min(af.recommend_count + 900, 999)
                        })
                    }
                    fswd(X, E, function(ay) {
                        ay.preventDefault();
                        var aA = yBuq(this, "data-position");
                        var az = {
                            x: ay.clientX || ah.touches[0].clientX,
                            y: ay.clientY || ah.touches[0].clientY
                        };
                        var ax = ah.reader.nfdo ? ah.reader.nfdo : 0;
                        ax = ah.reader.ZYNf[ax];
                        var aw = aA.split("-");
                        var au = {
                            start: [aw[0], aw[1]],
                            end: [aw[2], aw[3]]
                        };
                        var av = b.nklS.JXZf(b.aongIndex, au);
                        if (aWqS(this, "card-icon")) {
                            return new a(f, av).vDqm()
                        } else {
                            return new a(f, av, {
                                note: true
                            }).vDqm()
                        }
                    });
                    dsun(X, {
                        left: ak + "px",
                        top: am + "px",
                        width: ag + "px",
                        height: ag + "px"
                    })
                }
                Mrvh(X, {
                    "data-position": Z
                })
            }
            sDrg(ab, this.eGtK)
        },
        idgo: function(aq, Z, X, ab) {
            this.position = aq;
            var ac = this;
            var af = ab ? ab.user_text : "";
            var am = ab ? ab.action : "";
            var Y = ab ? ab.user_id : "";
            var ae = function(aA, ay, aC, aa, aE) {
                var at = jlQX('[data-id="' + ay + '"]', ac.cyoJ());
                if (!at) {
                    return
                }
                var aF = [];
                var az = at.innerHTML;
                at.innerHTML = ac.reader.HlzH(az);
                var aB = _$$("*", at);
                if (aa == -1) {
                    aa = aB.length
                }
                var aH = 0,
                    ax = 0;
                for (var aw = 0; aw <= aa; aw++) {
                    var aG = aB[aw];
                    if (!aG || aG.firstElementChild || aG.tagName != "SPAN") {
                        if (aw < aC) {
                            aH++
                        }
                        ax++
                    }
                }
                var ar = aC + aH;
                var av = aa + ax + 1;
                for (var aw = ar; aw < av; aw++) {
                    var aG = aB[aw];
                    if (!aG || aG.firstElementChild || aG.tagName != "SPAN") {
                        continue
                    }
                    var aD = aG.getBoundingClientRect();
                    var au = aD.top;
                    if (aA[au]) {
                        aA[au].push(aD)
                    } else {
                        aA[au] = [aD]
                    }
                    if (aE) {
                        aF.push(aG.textContent)
                    }
                }
                at.innerHTML = az;
                return [aA, aF]
            };
            var ai = {};
            var ah = aq.start[1];
            var aj = aq.end[1];
            var al = aq.start[0];
            var ad = aq.end[0];
            var ag = [];
            for (var an = al; an <= ad; an++) {
                var ak = an == al ? ah : 0;
                var ao = an == ad ? aj : -1;
                var ap = ae(ai, an, ak, ao, X);
                if (ap) {
                    ag.push.apply(ag, ap[1])
                }
            }
            this.oRpl(ai, aq, Z, ab);
            if (aq && aq.start) {
                this.vqmh()
            }
            return ag.join(" ").replace(/ ,/g, ",").replace(/ ;/g, ";").replace(/ :/g, ":").replace(/ \./g, ".").replace(/  /g, " ")
        },
        adgI: function(Z) {
            if (!Z) {
                return
            }
            var ab = this;
            var ah = function(at, av) {
                var au = (av.start.y >= at.top && av.start.y < at.top + at.height);
                if (au && at.left < av.start.x - at.width) {
                    return false
                }
                if (!au && at.top < av.start.y) {
                    return false
                }
                if (!au && at.top > av.end.y) {
                    return false
                }
                var au = (av.end.y >= at.top && av.end.y < at.top + at.height);
                if (au && at.left > av.end.x) {
                    return false
                }
                return true
            };
            var ad = function(aA, at, aD, au) {
                if (!at) {
                    return [0, 0]
                }
                var aE = yBuq(at, "data-id");
                var aF = au[aE];
                if (!aF) {
                    var az = at.innerHTML;
                    at.innerHTML = ab.reader.HlzH(az);
                    var aB = _$$("*", at);
                    aF = [];
                    for (var ax = 0; ax < aB.length; ax++) {
                        var aG = aB[ax];
                        if (!aG || aG.firstElementChild || aG.tagName != "SPAN") {
                            continue
                        }
                        var aC = aG.getBoundingClientRect();
                        aF.push(aC)
                    }
                    au[aE] = aF;
                    at.innerHTML = az
                }
                var ay = -1,
                    av = -1;
                for (var ax = 0; ax < aF.length; ax++) {
                    var aC = aF[ax];
                    if (!ah(aC, aD)) {
                        continue
                    }
                    var aw = aC.top;
                    if (aA[aw]) {
                        aA[aw].push(aC)
                    } else {
                        aA[aw] = [aC];
                        if (ay < 0) {
                            ay = ax
                        }
                    }
                    av = ax
                }
                return [ay, av]
            };
            var ak = {};
            var ae = {};
            var X = this.eGtK;
            var aj = {
                P: 1,
                DIV: 2,
                TD: 3,
                TH: 4,
                CODE: 5,
                BLOCKQUOTE: 6,
                FIGURE: 7,
                IMG: 8
            };
            this.reader.index = Z.end.x > this.padding.left + this.margin.left + this.reader.width ? 1 : 0;
            index = this.reader.index;
            if (!this.cyoJ()) {
                return
            }
            var ao = Z.end.x > this.padding.left + this.margin.left + this.reader.width && Z.start.x < this.padding.left + this.margin.left + this.reader.width;
            if (!ao) {
                var ag = Z.start.x - this.margin.left - this.padding.left - this.reader.index * (this.reader.width + 2 * this.padding.left);
                var af = Z.start.y - this.padding.top;
                Y = this.cyoJ().elementFromPoint(ag, af);
                while (Y && !(Y.tagName in aj || Y.tagName[0] == "H")) {
                    Y = Y.parentNode
                }
                if (Y && !yBuq(Y, "data-id")) {
                    Y = null
                }
            }
            var aa = Y || this.elStart;
            ae.start = {
                x: ag,
                y: af
            };
            var ag = Z.end.x - this.margin.left - this.padding.left - this.reader.index * (this.reader.width + 2 * this.padding.left);
            var af = Z.end.y - this.padding.top;
            var Y = this.cyoJ().elementFromPoint(ag, af);
            while (Y && !(Y.tagName in aj || Y.tagName[0] == "H")) {
                Y = Y.parentNode
            }
            if (Y && !yBuq(Y, "data-id")) {
                Y = null
            }
            ae.end = {
                x: ag,
                y: af
            };
            var ap = Y || this.elEnd;
            this.PrYf({
                start: 0
            });
            if (!ao && Y && (ae.end.y < ae.start.y) || (ae.end.y == ae.start.y && ae.end.x < ae.start.x)) {
                var ai = ap;
                ap = aa;
                aa = ai;
                ai = ae.end;
                ae.end = ae.start;
                ae.start = ai
            }
            this.elStart = aa;
            this.elEnd = ap;
            var al = aa ? parseInt(yBuq(aa, "data-id")) : 0;
            var ac = ap ? parseInt(yBuq(ap, "data-id")) || al : al;
            if (!al) {
                al = ac
            }
            for (var am = al; am <= ac; am++) {
                Y = jlQX('[data-id="' + am + '"]', this.cyoJ());
                var ar = ad(ak, Y, ae, this.cached[index]);
                if (am == al && (!ao || this.wstart < 0)) {
                    this.wstart = ar[0]
                }
                if (am == ac) {
                    this.wend = ar[1]
                }
            }
            var an = "rgba(0,100,250,0.3)";
            this.oRpl(ak, {});
            var aq = {
                start: [al, this.wstart],
                end: [ac, this.wend]
            };
            if (ao) {
                this.reader.index = 0;
                this.idgo(aq)
            }
            this.position = aq
        },
        PrYf: function(X, ad) {
            longPressed = {};
            if (X && X.start == 0) {
                var Z = _$$('.__highlight__[data-position="0"]', this.eGtK);
                for (var ab = 0; ab < Z.length; ab++) {
                    var ac = Z[ab];
                    if (ac) {
                        ZXsm(ac)
                    }
                }
                return
            }
            if (!X || !X.start) {
                ad = ad || 0;
                var Z = _$$(".__highlight__", this.eGtK);
                for (var ab = 0; ab < Z.length; ab++) {
                    var ac = Z[ab];
                    var Y = parseInt(yBuq(ac, "data-section"));
                    ZXsm(ac)
                }
                var Z = _$$(".__note_icon__", document.body);
                for (var ab = 0; ab < Z.length; ab++) {
                    var ac = Z[ab];
                    var Y = parseInt(yBuq(ac, "data-section"));
                    ZXsm(ac)
                }
                return
            }
            if (!X) {
                return
            }
            var aa = X.start[0] + "-" + X.start[1] + "-" + X.end[0] + "-" + X.end[1];
            var Z = _$$('.__highlight__[data-position="' + aa + '"]', this.eGtK);
            for (var ab = 0; ab < Z.length; ab++) {
                var ac = Z[ab];
                if (ac) {
                    ZXsm(ac)
                }
            }
            var Z = _$$('.__note_icon__[data-position="' + aa + '"]');
            for (var ab = 0; ab < Z.length; ab++) {
                var ac = Z[ab];
                if (ac) {
                    ZXsm(ac)
                }
            }
        },
        vqmh: function(Y) {
            var X = this;
            var Z;
            if (Y) {
                Z = _$$('.__highlight__[data-position="' + Y.start[0] + "-" + Y.start[1] + "-" + Y.end[0] + "-" + Y.end[1] + '"]', this.eGtK)
            } else {
                Z = _$$(".__highlight__", this.eGtK)
            }
            for (var aa = 0; aa < Z.length; aa++) {
                var ab = Z[aa];
                if (yBuq(ab, "data-status")) {
                    continue
                }
                Mrvh(ab, {
                    "data-status": 1
                });
                fswd(ab, E, function(ac) {
                    ac.preventDefault();
                    var ae = yBuq(this, "data-position");
                    if (ae == 0) {
                        return
                    }
                    var ad = {
                        x: ac.clientX || X.touches[0].clientX,
                        y: ac.clientY || X.touches[0].clientY
                    };
                    ad.y += window.pageYOffset;
                    X.pVPn(ae, ad, this)
                })
            }
        },
        pVPn: function(ac, af, Y) {
            var aa = this.reader.nfdo ? this.reader.nfdo : 0;
            aa = this.reader.ZYNf[aa];
            var X = yBuq(Y, "data-action");
            var ag = yBuq(Y, "data-user-id");
            var ab = tMgz("div");
            Mrvh(ab, {
                "data-position": ac
            });
            var ad = "";
            ldxQ(ab, "context-menu-highlight");
            if (X != 10 || ag == f.user_id) {
                ad = '<a href="#remove-highlight">' + o.remove_highlight + '</a><a href="#note">' + o.note + "</a>"
            }
            ad += '<a href="#share">' + o.share + "</a>";
            ad += '<style type="text/css">';
            ad += ".context-menu-highlight{margin-top: -8px; font-family: Arial; font-size: 13px; font-weight: bold;}";
            ad += ".context-menu-highlight a{text-decoration: none; display:inline-block; padding: 0px 5px; color: " + aa.color + "}";
            ad += ".context-menu-highlight a:hover{text-decoration: underline;}";
            ad += "</style>";
            ab.innerHTML = ad;
            var Y = this;
            var ae = _$$("a", ab);
            for (var Z = 0; Z < ae.length; Z++) {
                var ah = ae[Z];
                fswd(ah, O, function(al) {
                    al.preventDefault();
                    var ai = yBuq(this.parentNode, "data-position");
                    var aj = yBuq(this, "href").slice(1);
                    var ak = ai.split("-");
                    var am = tvdw(this);
                    am.y += 44;
                    ai = {
                        start: [parseInt(ak[0]), parseInt(ak[1])],
                        end: [parseInt(ak[2]), parseInt(ak[3])]
                    };
                    if (aj == "remove-highlight") {
                        Y.PrYf(ai);
                        new ufaj()
                    }
                    am.y += window.pageYOffset;
                    Y.onContextMenu(aj, ai, am)
                })
            }
            new ufaj(document.body, ab, null, {
                bgcolorstart: "#fff",
                bgcolorstop: aa.bgcolor,
                linearheight: 45,
                kpos: af,
                padding: {
                    left: 0,
                    top: 0
                },
                stroke: (aa.name == "night" ? "rgba(200,200,200,0.25)" : "")
            }).vDqm()
        },
        onTextSelected: function(X, Y) {},
        onTouchEnd: function(Y, X) {},
        onContextMenu: function(Y, X, Z) {},
        onSwipe: function(X) {}
    });
    var g = new Class({
        initialize: function(Y, Z, X) {
            this.QBvc = Y;
            this.baseURL = Z;
            tHen = X || ""
        },
        init: function(Y) {
            if (!this.QBvc) {
                return Y(false)
            }
            var X = this;
            X.Xldw(function(Z) {
                if (!Z) {
                    return Y(false)
                }
                X.Qyme(Z);
                X.VaAt(function(aa) {
                    Y(true)
                })
            })
        },
        Xldw: function(Z) {
            var Y = this.baseURL;
            Y += "content.opf";
            var X = this;
            nVBD(Y, "GET", {}, function(aa) {
                var ac = new DOMParser();
                var ab = ac.parseFromString(aa, "text/xml");
                X.docOPF = ab;
                if (Z) {
                    Z(ab)
                }
            }, function(aa) {
                Z(null)
            })
        },
        VaAt: function(Z) {
            var Y = this.baseURL;
            Y += "toc.ncx";
            var X = this;
            nVBD(Y, "GET", {}, function(aa) {
                var ac = new DOMParser();
                var ab = ac.parseFromString(aa, "text/xml");
                X.docNCX = ab;
                if (Z) {
                    Z(ab)
                }
            }, function(aa) {
                Z(null)
            })
        },
        TBUH: function(Z, aa) {
            var X = this;
            var Y = this.baseURL + Z + tHen;
            if (this.section_contents && this.section_contents[Z]) {
                return aa(Y, this.section_contents[Z])
            }
            if (Z.slice(-8) == ".private" && !tHen) {
                return aa(Y, null)
            }
            nVBD(Y, "GET", {}, function(ab) {
                aa(Y, ab)
            }, function(ab) {
                aa(Y, null)
            })
        },
        Qyme: function(Z) {
            var Y = {};
            Y.id = jlQX("metadata identifier", Z).textContent;
            Y.title = jlQX("metadata title", Z).textContent;
            Y.creator = jlQX("metadata creator", Z).textContent;
            Y.publisher = jlQX("metadata publisher", Z) ? jlQX("metadata publisher", Z).textContent : "";
            Y.language = jlQX("metadata language", Z) ? jlQX("metadata language", Z).textContent : "";
            Y.rights = jlQX("metadata rights", Z) ? jlQX("metadata rights", Z).textContent : "";
            Y.format = jlQX("metadata format", Z) ? jlQX("metadata format", Z).textContent : "";
            var X = jlQX("metadata meta[name=cover]", Z);
            if (X) {
                Y.cover = yBuq(X, "content")
            }
            var X = jlQX("metadata meta[name=word_count]", Z);
            if (X) {
                Y.word_count = parseInt(yBuq(X, "content"))
            }
            var X = jlQX("metadata meta[name=reading_time]", Z);
            if (X) {
                Y.reading_time = parseInt(yBuq(X, "content"))
            }
            var X = jlQX("metadata meta[name=word_count_list]", Z);
            if (X) {
                Y.word_count_list = yBuq(X, "content").split(",")
            }
            var X = jlQX("metadata meta[name=reading_time_list]", Z);
            if (X) {
                Y.reading_time_list = yBuq(X, "content").split(",")
            }
            this.aQmf = Y;
            this.id = Y.id;
            this.title = Y.title;
            this.creator = Y.creator
        },
        crbi: function() {
            return _$$("navMap > navPoint", this.docNCX).length
        },
        LbmQ: function(Y) {
            if (!Y) {
                return
            }
            var ab = "";
            var X = _$$("navMap > navPoint", this.docNCX);
            for (var Z = 0; Z < X.length; Z++) {
                var aa = X[Z];
                ab = yBuq(jlQX("content", aa), "src");
                if (ab.indexOf(Y) > -1 || (Y.slice(-5) == ".html" && ab.indexOf(Y.slice(0, -5)) > -1)) {
                    return ab
                }
            }
            return ""
        },
        MQiP: function(X) {
            var Y = _$$("navMap navPoint content", this.docNCX)[X];
            if (!Y && X == 0) {
                return null
            }
            return Y ? yBuq(Y, "src") : this.MQiP(0)
        },
        Liuf: function(X) {
            var Y = _$$("navMap navPoint text", this.docNCX)[X];
            if (!Y) {
                return null
            }
            return Y.textContent
        },
        OqeV: function(Y) {
            if (!Y) {
                return 0
            }
            var ab = "";
            var X = _$$("navMap > navPoint", this.docNCX);
            for (var Z = 0; Z < X.length; Z++) {
                var aa = X[Z];
                ab = yBuq(jlQX("content", aa), "src");
                if (ab == Y) {
                    return Z
                }
            }
            return 0
        },
        cjOK: function() {
            var X = yBuq(_$$("navMap navPoint content", this.docNCX)[0], "src");
            return X
        },
        VBTS: function(Y, ab) {
            if (!ab) {
                ab = 1
            }
            var ac = "";
            var X = _$$("navMap > navPoint", this.docNCX);
            var ad = -1;
            for (var Z = 0; Z < X.length; Z++) {
                var aa = X[Z];
                ac = yBuq(jlQX("content", aa), "src");
                if (ac == Y || ac.slice(0, -5) == Y) {
                    ad = Z + ab;
                    var aa = X[ad];
                    return aa ? yBuq(jlQX("content", aa), "src") : ""
                }
            }
            return ""
        }
    });
    var q = new Class({
        initialize: function(X) {
            this.userId = X;
            this.travels = {}
        },
        lxua: function(Y, X, Z) {}
    });
    var M = new Class({
        initialize: function(X) {
            try {
                localStorage.app = 1;
                this.isStorage = true
            } catch (Y) {
                this.isStorage = false
            }
            this.userId = X
        },
        Bjho: function(X) {
            this.QBvc = X
        },
        VAnM: function() {
            var aa = "reader-recent-position-" + this.userId + "-";
            var Y = [];
            var ab = aa.length;
            for (var X in localStorage) {
                if (X.indexOf(aa) == 0) {
                    var Z = JSON.parse(localStorage[X]);
                    if (Z && Z.QBvc) {
                        Y.push(Z)
                    }
                }
            }
            return Y
        },
        DmDi: function(ac, Z) {
            var ab = "reader-book-info-" + this.userId + "-";
            var Y = [];
            var ad = ab.length;
            for (var X in localStorage) {
                if (X.indexOf(ab) == 0) {
                    var aa = JSON.parse(localStorage[X]);
                    if (aa.removed == true && ac != "*" && !Z) {
                        continue
                    }
                    if (Z && aa.collection_id != Z) {
                        continue
                    }
                    if (aa && aa.isbn) {
                        Y.push(aa)
                    }
                }
            }
            return Y
        },
        dynx: function(X, Z) {
            if (!this.isStorage) {
                return
            }
            var Y = "reader-book-info-" + this.userId + "-" + X;
            localStorage[Y] = JSON.stringify(Z)
        },
        ZRNe: function(X) {
            var Y = "reader-book-info-" + this.userId + "-" + X;
            return localStorage[Y] ? JSON.parse(localStorage[Y]) : null
        },
        lcwS: function(ac, X, aa, Z) {
            if (!this.isStorage) {
                return
            }
            var Y = "reader-recent-position-" + this.userId + "-" + this.QBvc;
            var ab = this.bmHq();
            if (ab && ab.section == ac && ab.position.start == X.start && ab.position.word == X.word) {
                return false
            }
            localStorage[Y] = JSON.stringify({
                QBvc: this.QBvc,
                section: ac,
                position: X,
                percent: aa,
                ts: Z || new Date().getTime()
            });
            return true
        },
        bmHq: function(X) {
            var Z = X || this.QBvc;
            var Y = "reader-recent-position-" + this.userId + "-" + Z;
            return localStorage[Y] ? JSON.parse(localStorage[Y]) : {}
        },
        nsFk: function(X, Z, ac) {
            if (!this.isStorage) {
                return
            }
            var ab = X || this.QBvc;
            var Y = "reader-book-info-" + this.userId + "-" + ab;
            if (ac) {
                delete localStorage[Y];
                return
            }
            var aa = localStorage[Y] ? JSON.parse(localStorage[Y]) : {};
            if (!aa) {
                aa = {}
            }
            if (!aa.isbn) {
                aa.isbn = ab;
                aa.ts = new Date().getTime()
            }
            aa.removed = true;
            aa.collection_id = Z;
            localStorage[Y] = JSON.stringify(aa)
        },
        sxpg: function(ac) {
            if (!this.isStorage) {
                return
            }
            var ad = ac.isbn || this.QBvc;
            if (ac.removed) {
                var Z = "reader-activities-" + this.userId + "-" + ad;
                delete localStorage[Z];
                var Z = "reader-book-info-" + this.userId + "-" + ad;
                delete localStorage[Z];
                return
            }
            var Z = "reader-recent-position-" + this.userId + "-" + ad;
            var ab = this.bmHq(ad);
            ab.synced = true;
            localStorage[Z] = JSON.stringify(ab);
            var Z = "reader-activities-" + this.userId + "-" + ad;
            var Y = localStorage[Z] ? JSON.parse(localStorage[Z]) : {};
            var aa = [];
            for (var X in Y) {
                var ab = Y[X];
                if (ac.section != ab.section && ac.position != ab.position) {
                    continue
                }
                ab.synced = true;
                Y[X] = ab
            }
            localStorage[Z] = JSON.stringify(Y);
            var Z = "reader-book-info-" + this.userId + "-" + ad;
            var ab = this.ZRNe(ad);
            if (ab && ab.isbn) {
                ab.synced = true;
                localStorage[Z] = JSON.stringify(ab)
            }
            return true
        },
        aMur: function(X, Z) {
            if (!this.isStorage) {
                return
            }
            var Y = "reader-recent-book";
            if (!X) {
                delete localStorage[Y];
                return
            }
            return localStorage[Y] = JSON.stringify({
                QBvc: X,
                recent: Z
            })
        },
        mvoh: function() {
            var X = "reader-recent-book";
            try {
                return JSON.parse(localStorage[X])
            } catch (Y) {
                return {}
            }
        },
        mryc: function(ae, ab, ad, ag, aa, Z, X) {
            if (!this.isStorage) {
                return false
            }
            if (!aa && !this.GdDl(ae, ab)) {
                return false
            }
            if (ag.length > 400) {
                ag = ag.slice(0, 400)
            }
            var af = "reader-activities-" + this.userId + "-" + this.QBvc;
            var ac = localStorage[af] ? JSON.parse(localStorage[af]) : {};
            if (ab.start[1] == null || ab.end[1] == null || ab.start[1] == -1 || ab.end[1] == -1) {
                return false
            }
            var Y = ae + "." + ab.start[0] + "." + ab.start[1] + "." + ab.end[0] + "." + ab.end[1];
            ac[Y] = {
                QBvc: this.QBvc,
                user_id: this.userId,
                section: ae,
                position: ab,
                type: ad,
                text: ag,
                user_text: aa,
                action: Z,
                is_cloud: X,
                is_card: Z == 10,
                ts: new Date().getTime()
            };
            localStorage[af] = JSON.stringify(ac);
            return true
        },
        bfaq: function(ae, af) {
            if (!this.isStorage) {
                return false
            }
            var ab = "reader-activities-" + this.userId + "-" + this.QBvc;
            var Y = {};
            for (var Z = 0; Z < ae.length; Z++) {
                var ac = ae[Z];
                ac.QBvc = this.QBvc;
                ac.synced = true;
                ac.ts = 0;
                var ad = ac.position.split(".");
                var X = ac.section + "." + ac.position;
                ac.is_cloud = af;
                ac.position = {
                    start: [parseInt(ad[0]), parseInt(ad[1])],
                    end: [parseInt(ad[2]), parseInt(ad[3])]
                };
                Y[X] = ac
            }
            localStorage[ab] = JSON.stringify(Y)
        },
        uYhq: function(ad, X) {
            if (!this.isStorage) {
                return false
            }
            var aa = "reader-activities-" + this.userId + "-" + this.QBvc;
            var Z = localStorage[aa] ? JSON.parse(localStorage[aa]) : {};
            var ab = [];
            for (var Y in Z) {
                var ac = Z[Y];
                if (ac.section == ad && (X.start[0] == ac.position.start[0] && X.end[0] == ac.position.end[0] && X.start[1] == ac.position.start[1] && X.end[1] == ac.position.end[1]) || ac.position.start[1] == -1) {
                    ac.removed = true;
                    ac.synced = false;
                    ac.ts = new Date().getTime();
                    Z[Y] = ac;
                    localStorage[aa] = JSON.stringify(Z);
                    return true
                }
            }
            return false
        },
        bFJF: function(ac, aa, X) {
            if (ac == "*") {
                return this.ahzy()
            }
            aa = parseInt(aa);
            X = parseInt(X);
            var ad = "reader-activities-" + this.userId + "-" + this.QBvc;
            var ab = localStorage[ad] ? JSON.parse(localStorage[ad]) : {};
            var af = [];
            for (var Y in ab) {
                var ae = ab[Y];
                if (ae.removed == true) {
                    continue
                }
                if (ac && ae.section != ac) {
                    continue
                }
                var Z = ae.position;
                if (!Z.start) {
                    continue
                }
                if (!ac || (Z.start[0] >= aa && Z.start[0] <= X)) {
                    af.push(ae)
                }
            }
            return af
        },
        ahzy: function() {
            var ac = "reader-activities-" + this.userId + "-";
            var aa = [];
            var ad = ac.length;
            for (var Z in localStorage) {
                if (Z.indexOf(ac) == 0) {
                    var Y = JSON.parse(localStorage[Z]);
                    for (var X in Y) {
                        var ab = Y[X];
                        if (!ab.QBvc) {
                            continue
                        }
                        aa.push(ab)
                    }
                }
            }
            return aa
        },
        GdDl: function(aa, X) {
            var ab = "reader-activities-" + this.userId + "-" + this.QBvc;
            var Z = localStorage[ab] ? JSON.parse(localStorage[ab]) : {};
            for (var Y in Z) {
                var ac = Z[Y];
                if (ac.name != aa) {
                    continue
                }
                var ad = ac.position;
                if (ad.start[0] == X.start[0] && ad.end[0] == X.end[0] && ad.start[1] <= X.start[1] && ad.end[1] >= X.end[1]) {
                    return false
                }
            }
            return true
        },
        JXZf: function(ac, X) {
            var aa = "reader-activities-" + this.userId + "-" + this.QBvc;
            var Z = localStorage[aa] ? JSON.parse(localStorage[aa]) : {};
            for (var Y in Z) {
                var ab = Z[Y];
                if (ab.section != ac) {
                    continue
                }
                var ad = ab.position;
                if (ad.start[0] == X.start[0] && ad.end[0] == X.end[0] && ad.start[1] == X.start[1] && ad.end[1] == X.end[1]) {
                    return ab
                }
            }
            return null
        },
        LApP: function(ad) {
            var Z = [];
            if (!ad) {
                var X = this.VAnM();
                for (var Y = 0; Y < X.length; Y++) {
                    var ab = X[Y];
                    if (ab.synced == true) {
                        continue
                    }
                    var aa = this.bmHq(ab.QBvc);
                    var ac = aa.section;
                    if (!ac) {
                        continue
                    }
                    if (!ab.ts) {
                        ab.ts = new Date().getTime()
                    }
                    Z.push({
                        action: "save_recent_position",
                        isbn: ab.QBvc,
                        section: ac,
                        position: aa.position.start + "." + aa.position.word,
                        percent: aa.percent * 100 || 0,
                        __ts: ab.ts / 1000
                    })
                }
            }
            var X = this.DmDi("*");
            for (var Y = 0; Y < X.length; Y++) {
                var ab = X[Y];
                if (ab.synced == true) {
                    continue
                }
                if (ab.collection_id) {
                    if (ab.removed == true) {
                        Z.push({
                            action: "remove_collection_item",
                            isbn: ab.isbn,
                            collection_id: ab.collection_id,
                            __ts: ab.ts / 1000 || new Date().getTime() / 1000
                        })
                    } else {
                        Z.push({
                            action: "add_collection_item",
                            isbn: ab.isbn,
                            collection_id: ab.collection_id,
                            __ts: ab.ts / 1000 || new Date().getTime() / 1000
                        })
                    }
                }
            }
            var X = this.bFJF("*");
            for (var Y = 0; Y < X.length; Y++) {
                var ab = X[Y];
                if (ab.synced == true) {
                    continue
                }
                if (!ab.section) {
                    continue
                }
                if (!ab.ts) {
                    ab.ts = new Date().getTime()
                }
                if (ab.removed == true) {
                    Z.push({
                        action: "remove_highlight",
                        isbn: ab.QBvc,
                        section: ab.section,
                        position: ab.position.start[0] + "." + ab.position.start[1] + "." + ab.position.end[0] + "." + ab.position.end[1],
                        __ts: ab.ts / 1000
                    })
                } else {
                    text = ab.text || "";
                    if (P != "web" && text && !ab.is_cloud) {
                        text = "{_::_}" + text
                    }
                    Z.push({
                        action: "add_highlight",
                        isbn: ab.QBvc,
                        section: ab.section,
                        position: ab.position.start[0] + "." + ab.position.start[1] + "." + ab.position.end[0] + "." + ab.position.end[1],
                        text: text || "",
                        user_text: ab.user_text || "",
                        is_card: ab.is_card || 0,
                        __ts: ab.ts / 1000
                    })
                }
            }
            return Z
        },
        jhww: function(Y) {
            var X = "reader-theme";
            localStorage[X] = Y;
            return true
        },
        vGyC: function() {
            var X = "reader-theme";
            return localStorage[X] ? parseInt(localStorage[X]) : 0
        },
        KtGv: function(Y) {
            if (!this.isStorage) {
                return false
            }
            var X = "reader-font-level";
            localStorage[X] = Y;
            return true
        },
        sxfn: function() {
            var X = "reader-font-level";
            return localStorage[X] ? parseInt(localStorage[X]) : 0
        },
        CBrN: function(Y) {
            if (!this.isStorage) {
                return false
            }
            var X = "reader-text-align";
            localStorage[X] = Y;
            return true
        },
        lgun: function() {
            var X = "reader-text-align";
            return localStorage[X] ? parseInt(localStorage[X]) : 1
        },
        vnkg: function(X) {
            if (!this.isStorage) {
                return false
            }
            var Y = "reader-font-name";
            localStorage[Y] = X;
            return true
        },
        bMFk: function() {
            var X = "reader-font-name";
            return localStorage[X] === undefined ? "Bookerly" : localStorage[X]
        },
        Frpi: function(Y, aa, X) {
            if (!this.isStorage) {
                return
            }
            var Z = "app-signed-" + this.userId + "-" + Y + "-" + aa;
            localStorage[Z] = JSON.stringify(X)
        },
        qyQi: function(Z) {
            var aa = "app-signed-" + this.userId + "-" + Z;
            var X = localStorage[aa] ? JSON.parse(localStorage[aa]) : {};
            if (X && X.expire) {
                var Y = new Date().getTime();
                if (X.expire * 1000 - Y < 1) {
                    delete localStorage[aa];
                    return {}
                }
            }
            return X
        },
        skuW: function(X) {
            var Y = "app-signed-" + this.userId + "-" + X;
            delete localStorage[Y]
        }
    });
    var A = new Class({
        initialize: function() {
            this.baseURL = "index.php"
        },
        myie: function(X, Y) {
            Nrqi(this.baseURL, X, function(Z) {
                if (window.ENALBE_CDN) {
                    Z = Z.replace(/\"(http:|https:|)\\\/\\\/(.*?).cloudfront.net\\\/(.*?)\"/gm, '"\\/\\/cdn.alezaa.com/$2/$3"')
                }
                try {
                    jdata = JSON.parse(Z)
                } catch (aa) {
                    jdata = null
                }
                Y(jdata)
            }, function() {
                Y(null)
            })
        },
        qmuQ: function(X, Y) {
            this.myie({
                method: "get_user_info",
                user_id: X
            }, Y)
        },
        xAus: function(X) {
            this.myie({
                method: "get_login_status"
            }, X)
        },
        cusr: function(X, Y, Z) {
            this.myie({
                method: "get_cloud_signed",
                book_id: X,
                app_type: Y
            }, Z)
        },
        ntDJ: function(X) {
            this.myie({
                method: "list_collection_home"
            }, X)
        },
        Funy: function(X, Y) {
            this.myie({
                method: "list_collection_items",
                collection_id: X
            }, Y)
        },
        jdRw: function(aa, Z, X, Y, ab) {
            this.myie({
                method: "save_collection",
                collection_id: aa,
                name: Z,
                permission: X,
                memo: Y || ""
            }, ab)
        },
        IoMk: function(X, Y) {
            this.myie({
                method: "delete_collection",
                collection_id: X
            }, Y)
        },
        idop: function(X) {
            this.myie({
                method: "list_collection"
            }, X)
        },
        pPmy: function(X, Y) {
            this.myie({
                method: "sync_activities",
                data: X
            }, Y)
        },
        SLki: function(X, Y) {
            this.myie({
                method: "get_recent_position",
                book_id: X
            }, Y)
        },
        siUi: function(X, Y) {
            this.myie({
                method: "list_activities",
                book_id: X
            }, Y)
        },
        PFGf: function(X, Y, Z) {
            this.myie({
                method: "login_with_facebook",
                fb_access_token: X,
                u_id: (Y ? Y : "")
            }, Z)
        },
        EsyA: function(X) {
            this.myie({
                method: "get_brand_permission"
            }, X)
        },
        recommend: function(X, Y, Z) {
            this.myie({
                method: "recommend",
                card_id: X,
                type: Y
            }, Z)
        },
        OmJI: function(X, Y) {
            this.myie({
                method: "is_recommend",
                card_id: X
            }, Y)
        },
        vnun: function(X, Y, Z) {
            this.myie({
                method: "comment",
                card_id: X,
                content: Y
            }, Z)
        },
        remove_vnun: function(Y, X) {
            this.myie({
                method: "remove_comment",
                id: Y
            }, X)
        },
        iexn: function(X, Y) {
            this.myie({
                method: "list_comments",
                card_id: X
            }, Y)
        },
        uNze: function(X, Y) {
            this.myie({
                method: "fetch_user_profiles",
                ids: X
            }, Y)
        },
        fzHp: function(X) {
            this.myie({
                method: "list_recent_positions"
            }, X)
        }
    });
    var l;
    var n;
    var W;
    var y;
    var J = new Class({
        initialize: function(Z, X) {
            this.app = Z;
            this.container = X;
            this.nklS = new M(this.app.user_id);
            this.timeTraveled = new q(this.app.user_id);
            this.timer = null;
            this.iOS = isMobile.MzsQ();
            this.steps = [];
            if (!X) {
                return
            }
            var Y = tMgz("div");
            Y.id = "interactive-layer";
            sDrg(Y, document.body);
            this.eGtK = Y;
            document.onkeydown = function(aa) {
                if (aa.keyCode == 9) {
                    aa.preventDefault()
                }
            };
            window.onkeyup = function(aa) {
                clearTimeout(y);
                y = setTimeout(function() {
                    if (jlQX(".comments.dialog, .__important__")) {
                        return
                    }
                    if (aa.keyCode == 39) {
                        b.vAia()
                    } else {
                        if (aa.keyCode == 37) {
                            b.SsqS()
                        }
                    }
                }, 0)
            };
            window.onmousemove = function(aa) {
                clearTimeout(y);
                y = setTimeout(function() {
                    b.zsoz(aa)
                }, 15)
            }
        },
        jntu: function(Y, Z) {
            var X = this;
            this.onGetBaseURL(Y, P, function(aa) {
                X.IgOc = new g(Y, aa.url, aa.signed);
                X.IgOc.init(function(ab) {
                    Z(X.IgOc)
                })
            })
        },
        open: function(Y, Z) {
            this.QBvc = Y;
            var X = this;
            this.onGetBaseURL(Y, X.is_trying ? "" : P, function(aa) {
                if (!aa) {
                    return X.close()
                }
                X.IgOc = new g(Y, aa.url, aa.signed);
                X.IgOc.init(function(ad) {
                    if (!ad) {
                        if (!X.is_trying && P == "web") {
                            X.is_trying = true;
                            return X.open(Y, Z)
                        }
                        return X.close()
                    }
                    X.emli = X.IgOc.aQmf.format in {
                        magazine: 1,
                        "illustrated-book": 2,
                        comic: 3
                    };
                    var ae = X.IgOc.crbi() == 1;
                    X.reader = new w(X.nGfi(), X.eGtK, X.emli, ae);
                    X.reader.nfdo = X.nklS.vGyC();
                    X.reader.wydh = X.nklS.sxfn() || (isMobile.sAca() ? 6 : 4);
                    X.reader.ivUk = X.nklS.lgun();
                    X.reader.fontName = X.nklS.bMFk();
                    X.reader.onWalk = X.onWalk;
                    X.reader.onNeedLoadSectionNext = X.onNeedLoadSectionNext;
                    X.reader.docNCX = X.docNCX;
                    X.reader.aongIndex = X.aongIndex;
                    X.highlight = new L(X, X.reader, X.eGtK);
                    X.highlight.onTouchEnd = X.onTapped;
                    X.highlight.onTextSelected = X.onTextSelected;
                    X.highlight.onContextMenu = X.onContextMenu;
                    X.highlight.onSwipe = X.onSwipe;
                    X.reader.qeqa(X.IgOc);
                    X.nklS.Bjho(Y);
                    Z = Z || X.nklS.bmHq();
                    if (Z && Z.position) {
                        var af = X.IgOc.MQiP(Z.section);
                        var ab = Z.position;
                        var ac = [Z.section, ab.start, ab.word]
                    } else {
                        var af = X.IgOc.cjOK();
                        var ab = null;
                        var ac = [0, 0, 0]
                    }
                    X.nklS.aMur(Y, Z);
                    X.timeTraveled.lxua(Y, ac, "open");
                    X.TBUH(af, ab);
                    clearTimeout(X.recentTimer);
                    X.recentTimer = setTimeout(function() {
                        if (!X.recentTimer) {
                            return
                        }
                        X.onGetRecentPosition(X.QBvc, function(ah) {
                            if (ah && ah.section && ah.position && X.IgOc) {
                                ah.position += "";
                                var ak = ah.position.split(".");
                                if (ak.length < 2) {
                                    return
                                }
                                var aj = ah.section;
                                var ai = X.IgOc.MQiP(aj);
                                var ag = {
                                    start: parseInt(ak[0]),
                                    word: parseInt(ak[1])
                                };
                                if (Z && Z.position && Z.position.start == ag.start && Z.position.word == ag.word) {
                                    return
                                }
                                if (confirm(o.confirm_goto_recent_position)) {
                                    X.TBUH(ai, ag)
                                }
                            }
                        })
                    }, 3000);
                    X.onSyncActivities(function(ag) {
                        X.onGetActivities(X.QBvc, function(ah) {
                            if (!ah.items) {
                                return
                            }
                            X.nklS.QBvc = X.QBvc;
                            X.nklS.bfaq(ah.items, true);
                            X.onWalk(X.reader.RPwP, X.reader.NjwZ)
                        })
                    });
                    if (!X.emli) {
                        X.duHj(true, false, true)
                    }
                })
            })
        },
        susx: function() {
            var X = window.location;
            document.title = k;
            if ("pushState" in history) {
                history.pushState("", document.title, X.pathname)
            }
        },
        DrhW: function(Z, Y) {
            if ("pushState" in history) {
                var X = this.IgOc.aQmf.creator;
                var aa = Z > 1 ? this.IgOc.Liuf(this.aongIndex) + " - " + this.IgOc.aQmf.title : this.IgOc.aQmf.title + " - " + X;
                document.title = aa;
                history.pushState("", document.title, this.mqev(Z, Y))
            }
        },
        mqev: function(Z, Y) {
            var aa = window.location;
            var X = "?id=" + this.QBvc + "&lo=" + Z + "." + Y.start + "." + Y.word;
            return aa.pathname + X
        },
        close: function() {
            var X = _$$(".panel");
            for (var Y = 0; Y < X.length; Y++) {
                ZXsm(X[Y])
            }
            if (X.length > 0) {
                return
            }
            var X = _$$("section.section-preview");
            for (var Y = 0; Y < X.length; Y++) {
                ZXsm(X[Y])
            }
            new U().PrYf();
            if (!this.reader || !this.IgOc) {
                this.nklS.aMur("");
                K(false);
                alert(o.item_not_available);
                return window.location = "?view=library"
            }
            var Z = this.IgOc.aQmf;
            var aa = {
                isbn: this.QBvc,
                title: Z.title,
                creator: Z.creator,
                author: Z.creator,
                cover: Z.cover,
                format: Z.format,
                publisher: Z.publisher,
                language: Z.language,
                url: this.IgOc.baseURL,
                collection_id: this.collection_id
            };
            this.nklS.dynx(this.QBvc, aa);
            this.nklS.aMur("");
            this.IgOc = null;
            this.highlight = null;
            this.reader.PrYf();
            this.reader = null;
            this.QBvc = null;
            ZXsm(this.container);
            this.VoHW(false);
            this.susx();
            this.onBfDxClosed(this.QBvc)
        },
        nGfi: function() {
            var Y = oNow();
            var Z = [];
            var X = jlQX(".page.left", this.container);
            var aa = jlQX(".page.right", this.container);
            if (!this.emli && Y.width > 800 && Y.width > Y.height) {
                Z.push(X);
                Z.push(aa);
                Swvv(X, "one");
                Swvv(aa, "hidden")
            } else {
                Z.push(X);
                ldxQ(X, "one");
                ldxQ(aa, "hidden")
            }
            return Z
        },
        TBUH: function(Z, Y) {
            if (!Z) {
                return false
            }
            if (this.isLoading) {
                return false
            }
            if (!Z) {
                return false
            }
            var X = this;
            this.reader.PrYf();
            window.scrollTo(0, 0);
            this.VoHW(true);
            this.IgOc.TBUH(Z, function(aa, ab) {
                X.aong = Z;
                X.aongIndex = X.IgOc.OqeV(Z);
                if (!ab) {
                    X.nklS.skuW(X.QBvc);
                    X.VoHW(false);
                    X.nklS.lcwS(X.aongIndex, {
                        start: 0,
                        word: 0
                    }, 0);
                    X.app.onNeedAuthorization(X.IgOc, X.QBvc, Z, Y);
                    X.reader.akmg(X.reader.RPwP);
                    return
                }
                X.timeTraveled.lxua(X.QBvc, [X.aongIndex, X.RPwP ? X.RPwP.start : 0, X.RPwP ? X.RPwP.word : 0], "next");
                X.reader.init(aa, ab, function() {
                    X.mfqA(function() {
                        X.reader.dEDn(X.reader.nfdo || 0);
                        X.reader.bUvn(X.reader.ivUk);
                        X.reader.akcr(X.reader.wydh);
                        X.reader.epiC(X.reader.fontName);
                        X.isNeedLoadSectionNext = false;
                        X.ruAf(Z, X.reader.emli);
                        if (Y == -1) {
                            X.reader.DEGF();
                            X.VoHW(false)
                        } else {
                            if (X.reader.emli) {
                                X.reader.akmg(Y);
                                X.VoHW(false);
                                return
                            } else {
                                mfAw(X.container, "visibility", "hidden");
                                var ac = X.reader.akmg(Y, true);
                                if (ac == true) {
                                    mfAw(X.container, "visibility", "visible");
                                    X.VoHW(false);
                                    X.svVk(X)
                                }
                            }
                        }
                    })
                })
            })
        },
        ruAf: function(Z, aa) {
            var X = _$$("section.section-preview");
            for (var Y = 0; Y < X.length; Y++) {
                ZXsm(X[Y])
            }
            if (this.aongIndex < this.IgOc.crbi()) {
                this.rPxR(this.IgOc.VBTS(Z), "right", aa)
            }
            if (this.aongIndex > 0) {
                this.rPxR(this.IgOc.VBTS(Z, -1), "left", aa)
            }
        },
        rPxR: function(Z, Y, aa) {
            var X = this;
            this.IgOc.TBUH(Z, function(ad, aj) {
                if (!aj) {
                    return
                }
                if (!X.IgOc.section_contents) {
                    X.IgOc.section_contents = new Object()
                }
                X.IgOc.section_contents[Z] = aj;
                var ah = oNow();
                if (ah.width < 1000) {
                    return
                }
                if (!aa) {
                    return
                }
                var au = X.reader.ciXv(aj);
                if (au && au[0]) {
                    var ac = new DOMParser();
                    var ae = ac.parseFromString(au[0], "text/html");
                    var aw = jlQX("title", ae);
                    var al = jlQX('meta[name="description"]', ae);
                    var ax = jlQX("figure img", ae) || jlQX("img", ae);
                    var at = '		  				<div class="inner">		  					<a href="#"><h3 class="title"></h3></a>		  					<a href="#"><img class="cover" src=""/></a>		  					<p class="description"></p>		  				</div>		  			';
                    var ab = tMgz("section");
                    ldxQ(ab, "section-preview");
                    ldxQ(ab, Y);
                    ab.innerHTML += at;
                    var an = X.reader.padding.left + X.reader.margin.left;
                    var ar = Math.min(an, 240);
                    var af = (an - ar) / 2;
                    if (Y == "right") {
                        af += X.reader.width + an
                    }
                    dsun(ab, {
                        top: "80px",
                        left: af + "px",
                        width: ar + "px"
                    });
                    sDrg(ab, document.body);
                    if (aw) {
                        Mrvh(jlQX(".title", ab), {
                            html: aw.innerHTML
                        })
                    }
                    if (al) {
                        Mrvh(jlQX(".description", ab), {
                            html: al.content
                        })
                    }
                    if (ax) {
                        var ai = jlQX(".cover", ab);
                        ldxQ(ai, "show");
                        var ap = yBuq(ax, "data-src") || yBuq(ax, "src");
                        var ao = ap;
                        var ak = yBuq(ax, "data-srcset");
                        if (ak) {
                            ap = ap.split("/").slice(0, -1).join("/") + "/" + ak.split(",")[0]
                        }
                        ai.cover = ao;
                        ai.onerror = function() {
                            if (yBuq(this, "data-status")) {
                                return
                            }
                            Mrvh(this, {
                                src: this.cover,
                                "data-status": 1
                            })
                        };
                        Mrvh(ai, {
                            src: ap
                        })
                    }
                    var ag = _$$("a", ab);
                    for (var am = 0; am < ag.length; am++) {
                        var aq = ag[am];
                        Mrvh(aq, {
                            href: "?id=" + b.QBvc + "&lo=" + b.IgOc.OqeV(Z)
                        });
                        aq.side = Y;
                        fswd(aq, E, function(ay) {
                            ay.preventDefault();
                            if (this.side == "right") {
                                b.vAia()
                            } else {
                                b.SsqS()
                            }
                        })
                    }
                    if (Y == "left") {
                        var av = b.IgOc.docNCX;
                        var ag = _$$("navMap > navPoint", av)
                    }
                }
            })
        },
        jFdH: function() {
            var ac = oNow();
            var Z = _$$("section.section-preview");
            for (var ab = 0; ab < Z.length; ab++) {
                var ad = Z[ab];
                if (ac.width < 1000) {
                    mfAw(ad, "display", "none");
                    continue
                } else {
                    mfAw(ad, "display", "block")
                }
                var aa = aWqS(ad, "left") ? "left" : "right";
                var X = this.reader.padding.left + this.reader.margin.left;
                var Y = Math.min(X, 240);
                var ae = (X - Y) / 2;
                if (aa == "right") {
                    ae += this.reader.width + X
                }
                dsun(ad, {
                    top: "80px",
                    left: ae + "px",
                    width: Y + "px"
                })
            }
        },
        svVk: function(X) {
            setTimeout(function() {
                if (!X || !X.reader) {
                    return
                }
                X.reader.aUsp = false;
                X.reader.akmg(X.reader.RPwP);
                X.loadTimer = setTimeout(function() {
                    if (!X || !X.reader) {
                        return
                    }
                    X.reader.aUsp = false;
                    X.reader.akmg(X.reader.RPwP)
                }, 1000)
            }, 300)
        },
        IEoJ: function(X, Z, aa) {
            X.reader.indexStart = 1;
            var Y = X.IgOc.VBTS(Z);
            if (!Y) {
                mfAw(X.container, "visibility", "visible");
                X.VoHW(false);
                return
            }
            X.IgOc.TBUH(Y, function(ab, ac) {
                if (!ac) {
                    return aa(false)
                }
                X.reader.set(ab, ac, function() {
                    X.reader.dEDn(X.reader.nfdo);
                    X.reader.bUvn(X.reader.ivUk);
                    X.reader.akcr(X.reader.wydh);
                    X.reader.epiC(X.reader.fontName);
                    mfAw(X.container, "visibility", "visible");
                    X.VoHW(false);
                    X.reader.aUsp = false;
                    X.reader.OdHY();
                    X.reader.akmg({
                        start: 0,
                        word: 0
                    });
                    X.reader.indexStart = 0;
                    X.reader.index = 0;
                    X.aong = Y;
                    X.aongIndex = X.IgOc.OqeV(Y);
                    if (aa) {
                        aa(true)
                    }
                })
            })
        },
        mfqA: function(ae) {
            var ac = this.reader.fdata ? this.reader.fdata.replace("body", ".__content__") : "";
            var Y = _$("__content_style__");
            if (!Y) {
                var Y = tMgz("style");
                Mrvh(Y, {
                    type: "text/css"
                });
                Y.id = "__content_style__";
                sDrg(Y, document.head)
            }
            Y.innerHTML = ac;
            var ab = tMgz("div");
            ab.innerHTML = "giItT1WQy@!-/#";
            dsun(ab, {
                visibility: "hidden",
                position: "absolute"
            });
            ldxQ(ab, "__content__");
            sDrg(ab, document.body);
            var ad = ab;
            setTimeout(function() {
                ZXsm(ad)
            }, 0);
            for (var Z = 0; Z < this.reader.docs.length; Z++) {
                this.reader.index = Z;
                this.reader.PrYf()
            }
            this.cqOg({}, true);
            this.JNWO(false);
            var aa = /font-family: '(.*)'/i;
            var X;
            if ((X = aa.exec(ac)) !== null) {
                if (X.index === aa.lastIndex) {
                    aa.lastIndex++
                }
            }
            if (X && X.length > 1) {
                font_name = X[1]
            } else {
                font_name = "Geogria"
            }
            rpdj([font_name], ae);
            var ab = jlQX(".panel");
            if (ab) {
                ZXsm(ab);
                return
            }
        },
        vCvG: function(aa, ab) {
            if (!aa || aa.length == 0 || aa == null) {
                return false
            }
            var Y = oNow();
            var Z = this.reader.nfdo ? this.reader.nfdo : 0;
            Z = this.reader.ZYNf[Z];
            var X = tMgz("div");
            dsun(X, {
                "max-width": Math.min(Y.width - 40, 300) + "px",
                color: Z.color + " !important",
                "font-family": "Arial !important",
                "font-size": "0.8em !important",
                "padding-top": "24px !important"
            });
            X.innerHTML = "<p>" + aa + "</p>";
            new ufaj(document.body, X, null, {
                bgcolorstart: "#fff",
                bgcolorstop: Z.bgcolor,
                linearheight: 45,
                kpos: ab,
                padding: {
                    left: 0,
                    top: 0
                },
                stroke: (Z.name == "night" ? "rgba(200,200,200,0.25)" : "")
            }).vDqm();
            return aa.length > 0
        },
        pnLg: function(X, Y) {
            if (X.slice(0, 4) == "http") {
                if (Y || confirm("Do you want to open " + X + " ?")) {
                    var Z = window.open(X, "_blank");
                    Z.focus();
                    return true
                }
            }
            return false
        },
        eofw: function(ae, Z) {
            var ah = function(ak) {
                return ak.start[0] + "-" + ak.start[1] + "-" + ak.end[0] + "-" + ak.end[1]
            };
            var Y = ah(ae);
            if (Y == 0) {
                return
            }
            var X = this.nklS.JXZf(this.aongIndex, ae);
            if (!X) {
                X = {}
            }
            var ad = X.user_text || "";
            var aj = oNow();
            var ac = this.reader.nfdo ? this.reader.nfdo : 0;
            ac = this.reader.ZYNf[ac];
            var ab = tMgz("div");
            ldxQ(ab, "__important__");
            Mrvh(ab, {
                "data-position": Y
            });
            var af = "";
            ldxQ(ab, "context-menu-take-note");
            af = '<textarea autocorrect="off" spellcheck="false" rows="' + (aj.width < 500 ? 5 : 10) + '" cols="' + (aj.width < 500 ? 40 : 50) + '" border="0">' + ad + "</textarea>";
            af += "<div>";
            af += '<a href="#save">' + o.save + "</a>";
            af += '<a href="#cancel">' + o.cancel + "</a>";
            if (f.user_info && f.user_info.user_type == 10) {
                af += '<label for="share_card" title="' + o.share_card_note + '"><input type="checkbox" id="share_card" ' + (X.action == 10 ? "checked" : "") + "/>" + o.share_card + "</label></div>"
            }
            af += '<style type="text/css">';
            af += ".context-menu-take-note{margin-top: -8px; font-family: Arial; font-size: 13px; font-weight: bold;}";
            af += ".context-menu-take-note textarea{border: solid 1px #ddd;padding: 4px;font-size: 13px;}";
            af += ".context-menu-take-note a{text-decoration: none; display:inline-block; padding: 0px 8px; padding-top: 4px; color: " + ac.color + "}";
            af += ".context-menu-take-note a:hover{text-decoration: underline;}";
            af += ".context-menu-take-note label{font-weight: normal; float: right; padding-top: 4px; padding-right: 4px;}";
            af += ".context-menu-take-note label input{margin-right: 4px;}";
            af += "</style>";
            ab.innerHTML = af;
            var ag = _$$("a", ab);
            for (var aa = 0; aa < ag.length; aa++) {
                var ai = ag[aa];
                ai.book = this;
                fswd(ai, E, function(au) {
                    au.preventDefault();
                    var ao = yBuq(this, "href").slice(1);
                    if (ao == "save") {
                        var aw = this.parentNode.parentNode;
                        var ar = yBuq(aw, "data-position");
                        var ak = ar.split("-");
                        ar = {
                            start: [parseInt(ak[0]), parseInt(ak[1])],
                            end: [parseInt(ak[2]), parseInt(ak[3])]
                        };
                        var an = this.book.nklS.JXZf(this.book.aongIndex, ar);
                        var aq = jlQX("textarea", aw).value;
                        var am = jlQX("#share_card", aw);
                        var al = am && am.checked;
                        an.action = al ? 10 : 1;
                        an.user_text = aq;
                        var av = an.text;
                        var ar = an.position;
                        this.book.highlight.PrYf(ar);
                        var at = this.book.reader.index;
                        for (var ap = 0; ap < this.book.reader.containers.length; ap++) {
                            this.book.reader.index = ap;
                            av = this.book.highlight.idgo(ar, true, true, an) || av
                        }
                        this.book.reader.index = at;
                        this.book.nklS.mryc(an.section, an.position, "note", av, aq, an.action, false)
                    }
                    new ufaj()
                })
            }
            new ufaj(document.body, ab, null, {
                bgcolorstart: "#fff",
                bgcolorstop: ac.bgcolor,
                linearheight: 45,
                kpos: Z,
                padding: {
                    left: 0,
                    top: 0
                },
                stroke: (ac.name == "night" ? "rgba(200,200,200,0.25)" : "")
            }).vDqm();
            jlQX("textarea", ab).focus()
        },
        dacU: function(ap, aj, ab) {
            new ufaj();
            var ae = [{
                bgcolor: "#f9f9f9",
                color: "#0b0b0b",
                ccolor: "#888"
            }, {
                bgcolor: "#888",
                color: "#fff",
                ccolor: "#bbb"
            }, {
                bgcolor: "#444",
                color: "#ddd",
                ccolor: "#999"
            }, {
                bgcolor: "#f8f1e3",
                color: "#4e331c",
                ccolor: "#999"
            }];
            var ah = function(az, aB, aL, ax, aJ, ar, au) {
                var aJ = ae[aJ];
                var aI = jlQX(".__canvas__", az);
                if (!aI) {
                    aI = tMgz("canvas");
                    sDrg(aI, az);
                    ldxQ(aI, "__canvas__")
                }
                aI.width = 800;
                aI.height = ar || 10;
                var aD = oNow();
                var at = Math.min(aI.width / 2, aD.width - 40);
                var aA = at / aI.width * aI.height;
                dsun(aI, {
                    width: at + "px",
                    height: aA + "px"
                });
                dsun(az, {
                    width: at + "px",
                    height: aA + 36 + "px",
                    left: (aD.width - at - 2) / 2 + "px",
                    top: (aD.height - aA - 20) / 2 + "px"
                });
                var aE = /font-family: '(.*)'/i;
                var aF;
                if ((aF = aE.exec(b.reader.fdata)) !== null) {
                    if (aF.index === aE.lastIndex) {
                        aE.lastIndex++
                    }
                }
                if (aF && aF.length > 1) {
                    font_name = aF[1]
                } else {
                    var aC = new M(f.user_id);
                    font_name = aC.bMFk()
                }
                var aG = aI.getContext("2d");
                aG.fillStyle = aJ.bgcolor;
                aG.fillRect(0, 0, aI.width, aI.height);
                aG.fillStyle = aJ.color;
                aG.font = "35px '" + font_name + "'";
                aG.textBaseline = "top";
                var ay = 120;
                var aH = am(aG, aB, 40, ay, 50, aI.width - 80);
                aG.fillStyle = aJ.ccolor;
                aG.font = "28px Arial";
                aG.textBaseline = "top";
                var aw = am(aG, aL + " - " + ax, 40, aH + ay + 10, 40, aI.width - 80);
                var av = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAwIDE1OC4xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMDAgMTU4LjEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJwb3NpdGlvbjogYWJzb2x1dGU7Ij48ZyBpZD0iIj48Zz48cGF0aCBmaWxsPSIjZmZkYzBkIiBkPSJNMCw4OC40QzAsMzAuMiwzMC4yLDAsODguNCwwdjQxLjljLTIzLjMsMC0zOC42LDkuOC00NC4yLDI3LjloNDQuMnY4OC40SDBWODguNHogTTExMS42LDg4LjRDMTExLjYsMzAuMiwxNDEuOSwwLDIwMCwwdjQxLjljLTIzLjMsMC0zOC42LDkuOC00NC4yLDI3LjlIMjAwdjg4LjRoLTg4LjRWODguNHoiIGNsYXNzPSJjb2xvciBjb2xvci0xIiBkYXRhLWNvbG9yPSIjRkZEQzBEIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=";
                var aK = new Image();
                aK.src = av;
                aK.onload = function() {
                    aG.drawImage(aK, 40, 20, 100, 80);
                    if (au) {
                        au()
                    }
                };
                return ay + aH + aw + 40
            };
            var am = function(at, aC, ax, aw, aA, ar) {
                if (!aC) {
                    return
                }
                ar = ar || 0;
                if (ar <= 0) {
                    at.fillText(aC, ax, aw);
                    return
                }
                var av = aC.split(" ");
                var aB = 0;
                var az = 1;
                while (av.length > 0 && az <= av.length) {
                    var au = av.slice(0, az).join(" ");
                    var ay = at.measureText(au).width;
                    if (ay > ar) {
                        if (az == 1) {
                            az = 2
                        }
                        at.fillText(av.slice(0, az - 1).join(" "), ax, aw + (aA * aB));
                        aB++;
                        av = av.splice(az - 1);
                        az = 1
                    } else {
                        az++
                    }
                }
                if (az > 0) {
                    var aC = av.join(" ");
                    at.fillText(aC, ax, aw + (aA * aB))
                }
                return aA * (aB + 1)
            };
            var aa = this.highlight;
            var af;
            for (var ak = 0; ak < b.reader.containers.length; ak++) {
                b.reader.index = ak;
                af = aa.idgo(ap, -1, true) || af
            }
            var Z = this.nklS.JXZf(this.aongIndex, ap);
            if (!Z) {
                return
            }
            if (Z.text != af) {
                this.nklS.uYhq(this.aongIndex, ap);
                this.nklS.mryc(this.aongIndex, ap, Z.type, af, Z.user_text, Z.action, Z.is_cloud)
            }
            if (af.length > 600) {
                af = af.slice(0, 600)
            }
            var ao = this.reader.ZYNf[this.reader.nfdo];
            var aq = this.IgOc.aQmf.title;
            var ad = this.IgOc.aQmf.creator;
            var ac = jlQX(".share-note-panel");
            if (ac) {
                ZXsm(ac)
            }
            ac = tMgz("div");
            ldxQ(ac, "panel");
            ldxQ(ac, "share-note-panel");
            sDrg(ac, document.body);
            var al = ah(ac, af, aq, ad, 0);
            if (al > 10) {
                ah(ac, af, aq, ad, 0, al, function() {});
                var X = tMgz("input");
                Mrvh(X, {
                    type: "hidden"
                });
                ldxQ(X, "message");
                X.value = Z.user_text;
                sDrg(X, ac);
                var Y = tMgz("div");
                ldxQ(Y, "nav");
                var ai = "";
                for (var ak = 0; ak < ae.length; ak++) {
                    var ao = ae[ak];
                    ai += '<a data-theme-index="' + ak + '" class="theme" href="#theme" style="background:' + ao.bgcolor + "; color: " + ao.color + '">aA</a>'
                }
                ai += '<a class="btn share" href="#share">' + o.share_to_facebook + "</a>";
                if (!isMobile.sAca()) {
                    ai += '<a class="btn save" href="#save">' + o.save + "</a>"
                }
                ai += '<a class="btn close" href="#close">' + o.close + "</a>";
                Y.innerHTML = ai;
                sDrg(Y, ac);
                var ag = _$$("a", Y);
                for (var ak = 0; ak < ag.length; ak++) {
                    var an = ag[ak];
                    fswd(an, "click", function(az) {
                        az.preventDefault();
                        var av = yBuq(this, "href").slice(1);
                        if (av == "close") {
                            var at = jlQX(".share-note-panel");
                            ZXsm(at)
                        } else {
                            if (av == "save") {
                                var au = jlQX(".__canvas__", at);
                                open().document.write('<img src="' + au.toDataURL() + '"/>')
                            } else {
                                if (av == "share") {
                                    if (yBuq(this, "data-status")) {
                                        return
                                    }
                                    var at = jlQX(".share-note-panel");
                                    Mrvh(this, {
                                        html: o.posting_to_facebook
                                    });
                                    var au = jlQX(".__canvas__", at);
                                    var aA = jlQX(".message", at).value;
                                    var ar = "https://read.alezaa.com/?id=" + b.QBvc + "&lo=" + b.aongIndex + "." + ap.start[0] + "." + ap.start[1];
                                    var ax = window.location.protocol == "http:" ? "http://api.bit.ly" : "https://api-ssl.bitly.com";
                                    JSONP(ax + "/shorten", {
                                        version: "2.0.1",
                                        login: "alezaa",
                                        password: "papavn",
                                        apiKey: "R_455a71e2fc06f02b8d98d8dc51ed8b83",
                                        longUrl: ar,
                                        format: "json"
                                    }, function(aB) {
                                        aA += " " + aB.results[ar]["shortUrl"];
                                        var aC = au.toDataURL();
                                        b.LqGt(aC, aA, function(aE) {
                                            var aF = jlQX(".share-note-panel a.share");
                                            if (aE.id) {
                                                var aF = jlQX(".share-note-panel");
                                                ZXsm(aF);
                                                if (confirm(o.share_to_facebook_done_alert)) {
                                                    var aD = "https://www.facebook.com/" + f.fb_id;
                                                    var aG = window.open(aD, "_blank")
                                                }
                                            } else {
                                                Mrvh(aF, {
                                                    html: o.share_to_facebook,
                                                    "data-status": null
                                                })
                                            }
                                        })
                                    })
                                } else {
                                    if (av == "theme") {
                                        var ay = yBuq(this, "data-theme-index");
                                        var aw = jlQX(".share-note-panel");
                                        ah(aw, af, aq, ad, ay, al, function() {})
                                    }
                                }
                            }
                        }
                    })
                }
            }
        },
        LqGt: function(Z, Y, aa) {
            var X = this;
            FB.getLoginStatus(function(ac) {
                if (ac.status === "connected") {
                    var ab = Z.substring(Z.indexOf(",") + 1, Z.length);
                    var ad = vPfa.lCdH(ab);
                    PostImageToFacebook(ac.authResponse.accessToken, "book-quote.png", "image/png", ad, Y, aa)
                } else {
                    X.app.dvud(function(ae) {
                        if (ae.name) {
                            X.LqGt(Z, Y, aa)
                        } else {
                            aa(ae)
                        }
                    })
                }
            })
        },
        qXsk: function(aw, af, ax) {
            var aq = this.IgOc.aQmf.reading_time;
            var at = this.reader.inner.childNodes.length;
            while (b.reader.inner.lastElementChild) {
                var ac = yBuq(this.reader.inner.lastElementChild, "data-id");
                if (ac) {
                    at = parseInt(ac);
                    break
                }
            }
            this.isReachToTheEnd = false;
            var ae;
            var Z = 0;
            var ao;
            if (aq) {
                var an = _$$("navMap > navPoint", this.IgOc.docNCX);
                ae = aw == an.length - 1;
                var ab = this.IgOc.aQmf.reading_time;
                var aj = this.IgOc.aQmf.word_count;
                var aA = this.IgOc.aQmf.word_count_list;
                var al = 0;
                var X = 0;
                for (var au = 0; au < aA.length; au++) {
                    var ak = parseInt(aA[au]);
                    if (au < aw) {
                        al += ak
                    }
                    if (au == aw) {
                        X = ak
                    }
                }
                var ay = Math.max(af.start, 1);
                Z = (al + ay / at * X) / aj;
                var ad = Math.round(ab - Z * ab);
                var av = Math.floor(ad / 60);
                var ah = ad % 60;
                var ar = Math.round(Z * 100);
                var ai = av > 0 ? (av > 1 ? av + o.time_hrs : av + o.time_hr) : "";
                ai += " ";
                ai += ah > 0 ? (ah > 1 ? ah + o.time_mins : ah + o.time_min) : "";
                if (ar > 0) {
                    ao = o.time_left_in_book.replace("@{traveled}", ar).replace("@{time_left}", ai)
                } else {
                    ao = o.time_left_in_book_beginning.replace("@{time_left}", ai)
                }
            }
            if (this.emli) {
                return Z
            }
            if (ae && !ax) {
                ao = o.the_end;
                this.isReachToTheEnd = true
            }
            var az = this.reader.nfdo ? this.reader.nfdo : 0;
            az = this.reader.ZYNf[az];
            var Y = _$("navbar-bottom");
            if (!Y) {
                Y = tMgz("div");
                Y.id = "navbar-bottom";
                ldxQ(Y, "bottom");
                ldxQ(Y, "__reader__");
                var ap = "<div></div>";
                ap += '<style type="text/css">';
                ap += "#navbar-bottom.bottom{position: fixed; left: 0px; bottom: 0px; height: 40px; width: 100%;z-index: 2;}";
                ap += "#navbar-bottom.bottom div{padding: px; text-align: center; font-size: 12px;  font-family: Arial; opacity: 0.5;}";
                ap += "</style>";
                Y.innerHTML = ap;
                sDrg(Y, document.body)
            }
            var am = this.reader.height;
            dsun(Y, {
                height: this.reader.padding.bottom + "px",
                "line-height": this.reader.padding.bottom + "px",
                color: az.color
            });
            var ag = Y.firstElementChild;
            ag.innerHTML = ao;
            return Z
        },
        duHj: function(ah, ab, ae) {
            var af = oNow();
            if (this.emli && af.width > 999) {
                return
            }
            var ad = this.IgOc.docNCX;
            var X = jlQX("navMap :first-child content", ad);
            var ag = jlQX("navMap :last-child content", ad);
            var Z = yBuq(X, "src") == this.aong && (this.emli || ah);
            var ac = yBuq(ag, "src") == this.aong && (this.emli || ab);
            var Y = function(aj) {
                var ai = jlQX(".turn-page-arrow." + aj);
                if (ai) {
                    ZXsm(ai)
                }
            };
            var aa = function(aj, ao, an) {
                var am = jlQX(".turn-page-arrow." + ao);
                if (!am) {
                    am = tMgz("div");
                    ldxQ(am, "turn-page-arrow");
                    ldxQ(am, ao);
                    sDrg(am, aj.iOS && aj.emli ? aj.container : aj.eGtK);
                    am.book = aj;
                    am.direction = ao;
                    fswd(am, E, function(at) {
                        at.preventDefault();
                        ao == "right" ? this.book.vAia() : this.book.SsqS();
                        if (h) {
                            var ap = _$$(".turn-page-arrow");
                            for (var aq = 0; aq < ap.length; aq++) {
                                var ar = ap[aq];
                                ZXsm(ar)
                            }
                        }
                    })
                }
                if (an) {
                    ldxQ(am, "focus")
                } else {
                    Swvv(am, "focus")
                }
                var ai = aj.emli ? Math.max((Math.min(af.width, 1024) - 540) / 2, 20) / 2 : aj.reader.margin.left + aj.reader.padding.left;
                var al = af.height - 2 * (aj.reader.margin.top + aj.reader.padding.top) - 10;
                if (ai < 40) {
                    ai = 40
                }
                var ak = ao == "right" ? af.width - ai : 0;
                dsun(am, {
                    left: ak + "px",
                    top: aj.reader.margin.top + aj.reader.padding.top + "px",
                    width: ai + "px",
                    height: al + "px",
                    "line-height": al + "px"
                });
                return am
            };
            !Z ? aa(this, "left", ac == true) : Y("left");
            !ac ? aa(this, "right", Z == true) : Y("right")
        },
        zsoz: function(Z) {
            if (window.self !== window.top) {
                return
            }
            if ("ontouchstart" in document.documentElement || !b.QBvc || !b.reader) {
                return
            }
            if (jlQX(".callout") || jlQX(".comments.dialog")) {
                return
            }
            var X = Z.clientX;
            var ab = Z.clientY;
            var aa = b.reader.padding.top || 40;
            var Y = oNow();
            if (ab < aa) {
                if (!b.hasToggleNavigatorBar) {
                    b.cqOg({
                        x: X,
                        y: ab
                    })
                }
            } else {
                b.cqOg({}, true)
            }
        },
        cqOg: function(aa, af) {
            if (window.self !== window.top) {
                return
            }
            var Y = jlQX("div.navbar");
            if ((Y && yXtl(Y, "display") == "block") || af) {
                if (af && jlQX(".panel")) {
                    return
                }
                if (Y) {
                    dsun(Y, {
                        display: "none"
                    })
                }
                this.hasToggleNavigatorBar = false;
                return
            }
            this.hasToggleNavigatorBar = true;
            var ac = this.reader.nfdo ? this.reader.nfdo : 0;
            ac = this.reader.ZYNf[ac];
            if (this.IgOc && this.IgOc.aQmf) {
                var ah = this.IgOc.aQmf.title;
                var Z = this.IgOc.aQmf.creator
            } else {
                var ah = "";
                var Z = ""
            }
            var ag = isMobile.MzsQ();
            var ai = oNow();
            var X = ai.width - (ag ? 200 : 250);
            if (Y) {
                var ab = Y;
                dsun(ab, {
                    display: "block",
                    background: ac.bgcolor,
                    color: ac.color
                });
                var ad = jlQX(".book-title", ab);
                dsun(ad, {
                    "max-width": X + "px"
                });
                ad.innerHTML = ah + " - <span>" + Z + "</span>"
            } else {
                var ab = tMgz("div");
                ldxQ(ab, "navbar");
                ldxQ(ab, "__reader__");
                var ae = '<div><a class="back" title="Back to library" href="#back">&#8592;</a><a class="toc" title="' + o.toc_title + '" href="#toc">&#9776;</a><p class="book-title">' + ah + " - <span>" + Z + '</span></p><a class="notes-marks" href="#notes-marks">' + o.notes_n_marks + '</a><a class="about" href="#about" title="' + o.about_book + '">I</a><a class="share-facebook" title="' + o.share_to_facebook + '" href="#share-facebook">F</a><a class="fullscreen" title="' + o.fullscreen + '" href="#fullscreen">F</a><a class="set-appearance" href="#set-appearance">aA</a></div>';
                ae += '<style type="text/css">';
                ae += ".navbar a{text-decoration:none;} .navbar *{margin: 0px;}";
                ae += ".navbar .book-title{opacity: 0.8;padding: 8px 4px;margin-left: 96px;font-weight: bold; white-space: nowrap; overflow: hidden;text-overflow: ellipsis; max-width: " + X + "px }";
                ae += ".navbar .book-title span{opacity: 0.7;}";
                ae += ".navbar{margin: 0px !important;padding: 0px !important;font-size: 14px;font-family: Helvetica !important;position:fixed;z-index:1001;left:0px;top:0px;width:100%;height:44px;background:" + ac.bgcolor + ";color:" + ac.color + ";border-bottom:solid 1px " + ac.linecolor + ";}";
                ae += ".navbar div{margin: 0px !important;padding: 8px 4px !important;}";
                ae += ".navbar a{display: inline-block; width: 28px; height: 28px; line-height: 28px; text-align: center; margin: 0px !important;padding:0px !important;position:absolute;display:inline-block;border:solid 1px " + ac.linecolor + ";color:" + ac.color + ";}";
                ae += ".navbar a.back{left: 20px;top: 8px;} a.toc{left: 64px;top: 8px;} .navbar a.notes-marks{left: 108px;top: 8px; width: 140px; display:none} .navbar a.about{left: 262px;top: 8px;display:none} .navbar a.set-appearance{right: 20px;top: 8px;} .navbar a.fullscreen{right: 60px;top: 8px;} .navbar a.share-facebook{right: 100px;top: 8px;}";
                ae += "</style>";
                ab.innerHTML = ae;
                dsun(ab, {
                    position: "fixed",
                    display: "block"
                });
                var Y = jlQX(".navbar .fullscreen", ab);
                if (Y && ag) {
                    mfAw(Y, "display", "none");
                    var Y = jlQX("a.share-facebook", ab);
                    if (Y) {
                        mfAw(Y, "right", "60px")
                    }
                }
                sDrg(ab, document.body);
                var Y = jlQX("a.back", ab);
                Y.book = this;
                fswd(Y, E, function(aj) {
                    aj.preventDefault();
                    this.book.close()
                });
                var Y = jlQX("a.toc", ab);
                Y.book = this;
                fswd(Y, E, function(aj) {
                    aj.preventDefault();
                    this.book.XpZJ()
                });
                var Y = jlQX("a.notes-marks", ab);
                Y.book = this;
                fswd(Y, E, function(aj) {
                    aj.preventDefault();
                    this.book.aqex()
                });
                var Y = jlQX("a.about", ab);
                Y.book = this;
                fswd(Y, E, function(ak) {
                    ak.preventDefault();
                    var aj = this.book;
                    K(true);
                    this.book.onLoadLaneInfo(this.book.QBvc, function(al) {
                        K(false);
                        al = JSON.parse(al);
                        aj.dxxV(al)
                    })
                });
                var Y = jlQX("a.share-facebook", ab);
                Y.book = this;
                fswd(Y, E, function(am) {
                    am.preventDefault();
                    var ak = oNow();
                    var al = (ak.width - 540) / 2;
                    var an = (ak.height - 400) / 2;
                    var aj = "//www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
                    if (h) {
                        window.location = aj;
                        return
                    }
                    window.open(aj, "targetWindow", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,top=" + an + ",left=" + al + ",width=540,height=420")
                });
                var Y = jlQX("a.set-appearance", ab);
                Y.book = this;
                fswd(Y, E, function(aj) {
                    aj.preventDefault();
                    this.book.rtha(aj)
                });
                var Y = jlQX("a.fullscreen", ab);
                Y.book = this;
                fswd(Y, E, function(aj) {
                    aj.preventDefault();
                    this.book.jrfb()
                })
            }
            new ufaj()
        },
        XpZJ: function(Y) {
            var X = jlQX(".toc-panel");
            this.tteH(X ? false : true)
        },
        tteH: function(ah) {
            var Z = jlQX(".navbar .book-title");
            if (Z) {
                mfAw(Z, "display", ah ? "none" : "block")
            }
            var Z = jlQX(".navbar .notes-marks");
            if (Z) {
                mfAw(Z, "display", ah ? "block" : "none")
            }
            var Z = jlQX(".navbar .about");
            if (Z) {
                mfAw(Z, "display", ah ? "block" : "none")
            }
            var Z = jlQX(".navbar .set-appearance");
            if (Z) {
                mfAw(Z, "display", ah ? "none" : "block")
            }
            var Z = jlQX(".navbar .share-facebook");
            if (Z) {
                mfAw(Z, "display", ah ? "none" : "block")
            }
            var ai = isMobile.MzsQ();
            if (!ai) {
                var Z = jlQX(".navbar .fullscreen");
                if (Z) {
                    mfAw(Z, "display", ah ? "none" : "block")
                }
            }
            var an = oNow();
            var Y = an.width > 500 ? Math.min(an.width, 320) : an.width;
            var al = an.height - 46;
            if (!ah) {
                var Z = jlQX(".notes-marks-panel");
                if (Z) {
                    ZXsm(Z)
                }
                var Z = jlQX(".toc-panel");
                if (Z) {
                    ZXsm(Z)
                }
                return
            }
            var aj = this.IgOc.docNCX;
            var ag = _$$("navMap > navPoint", aj);
            var ac = this.reader.nfdo ? this.reader.nfdo : 0;
            ac = this.reader.ZYNf[ac];
            var ab = tMgz("div");
            ldxQ(ab, "toc-panel");
            ldxQ(ab, "panel");
            ldxQ(ab, "__reader__");
            var af = "<div>";
            af += '<div class="inner">';
            for (var aa = 0; aa < ag.length; aa++) {
                var am = ag[aa];
                var ak = jlQX("navLabel text", am).textContent;
                var X = yBuq(jlQX("content", am), "src");
                af += '<a data-href="' + X + '" href="javascript:void(0)">' + ak + "</a>"
            }
            af += "</div>";
            af += "</div>";
            af += '<style type="text/css">';
            af += ".toc-panel{overflow: auto;position:fixed; top: 44px; left: 0px; width: " + Y + "px; height: " + al + "px; background:" + ac.bgcolor + ";color:" + ac.color + "; border:solid 1px " + ac.linecolor + "}";
            af += ".toc-panel > div{margin: 12px;}";
            af += ".toc-panel .title{font-size: 1.4em; margin-bottom: 12px}";
            af += ".toc-panel a{text-decoration:none; color:" + ac.color + ";} .toc-panel *{margin: 0px;}";
            af += ".toc-panel{font-size: 13px;font-family: Helvetica !important}";
            af += ".toc-panel div a{display: block; padding: 8px 0px;}";
            af += ".toc-panel div a.selected{color: #aa0000;}.toc-panel div a:hover{color: #d75600;}";
            af += "</style>";
            ab.innerHTML = af;
            sDrg(ab, document.body);
            var ae = jlQX('content[src="' + this.aong + '"]', aj);
            var ag = _$$("div.inner a", ab);
            var ad = 0;
            for (var aa = 0; aa < ag.length; aa++) {
                var am = ag[aa];
                am.book = this;
                fswd(am, "click", function(aq) {
                    aq.preventDefault();
                    var ap = jlQX("a.selected", this.parentNode);
                    if (ap) {
                        Swvv(ap, "selected")
                    }
                    ldxQ(this, "selected");
                    this.book.tteH(false);
                    var ao = yBuq(this, "data-href");
                    this.book.TBUH(ao, 0);
                    new u(f.user_id).Amtz({
                        action: "toc_open_section",
                        section: ao
                    })
                });
                if (ae && yBuq(ae, "src") == yBuq(am, "data-href")) {
                    ldxQ(am, "selected");
                    ad = Math.max(tvdw(am).y - 54, 0)
                } else {
                    Swvv(am, "selected")
                }
            }
            ab.scrollTop = ad
        },
        jajv: function(X) {},
        rtha: function(ac) {
            var Z = this.reader.nfdo ? this.reader.nfdo : 0;
            Z = this.reader.ZYNf[Z];
            var af = {
                x: 10,
                y: 10
            };
            var ab = tMgz("div");
            ldxQ(ab, "set-appearance-panel");
            ldxQ(ab, "__reader__");
            var ad = "<div>";
            ad += '<div class="theme">';
            for (var aa = 0; aa < this.reader.ZYNf.length; aa++) {
                ad += '<a href="#' + this.reader.ZYNf[aa].name + '">' + o["theme_" + this.reader.ZYNf[aa].name] + "</a>"
            }
            ad += "</div>";
            ad += '<div class="font-size"><a href="#decrease-font"></a><a href="#increase-font"></a></div>';
            ad += '<div class="text-align"><a href="#left">' + o.text_align_left + '</a><a href="#justify">' + o.text_align_justify + "</a></div>";
            ad += '<div class="font-name">	    				<ul>';
            for (var aa = 0; aa < this.reader.fonts.length; aa++) {
                var Y = this.reader.fonts[aa];
                ad += '<li name="' + Y.name + '" style="font-family: ' + Y.name + ';">' + Y.title + "</li>"
            }
            ad += "</ul>	    				</div>";
            ad += "</div>";
            ad += '<style type="text/css">';
            ad += ".callout div a{margin: 0px !important;background:" + Z.bgcolor + ";color:" + Z.color + ";}";
            ad += ".callout div a{margin: 1px !important;padding: 6px !important;display:inline-block;border:solid 1px " + Z.linecolor + ";min-width: 35px; text-align:center;}";
            for (var aa = 0; aa < this.reader.ZYNf.length; aa++) {
                ad += ".callout .theme a:nth-child(" + (aa + 1) + "){background:" + this.reader.ZYNf[aa].bgcolor + ";color:" + b.reader.ZYNf[aa].color + "}"
            }
            ad += "</style>";
            ab.innerHTML = ad;
            mfAw(ab, "display", "block");
            new ufaj(document.body, ab, ac.target, {
                bgcolorstart: "#fff",
                bgcolorstop: Z.bgcolor,
                linearheight: 45,
                kpos: af,
                padding: {
                    left: 0,
                    top: 0
                },
                stroke: (Z.name == "night" ? "rgba(200,200,200,0.25)" : "")
            }).vDqm();
            var ae = _$$(".theme a", ab);
            for (var aa = 0; aa < ae.length; aa++) {
                var ag = ae[aa];
                if (Z.name == this.reader.ZYNf[aa].name) {
                    ldxQ(ag, "selected")
                }
                ag.book = this;
                fswd(ag, E, function(am) {
                    am.preventDefault();
                    var ai = this.hash.slice(1);
                    var ah = _$$(".theme a", ab);
                    for (var aj = 0; aj < ah.length; aj++) {
                        var al = ah[aj];
                        Swvv(al, "selected");
                        if (ai == this.book.reader.ZYNf[aj].name) {
                            ldxQ(this, "selected");
                            this.book.dEDn(aj);
                            var ak = jlQX(".navbar a.set-appearance");
                            this.book.rtha({
                                target: ak
                            });
                            new u(f.user_id).Amtz({
                                action: "theme_changed",
                                theme_index: aj
                            })
                        }
                    }
                })
            }
            var ae = _$$(".font-size a", ab);
            for (var aa = 0; aa < ae.length; aa++) {
                var ag = ae[aa];
                ag.book = this;
                fswd(ag, E, function(aj) {
                    aj.preventDefault();
                    var ah = this.hash.slice(1);
                    var ak = this.book.reader.wydh + (ah == "increase-font" ? 1 : -1);
                    this.book.akcr(ak);
                    var ai = jlQX(".navbar a.set-appearance");
                    this.book.rtha({
                        target: ai
                    });
                    new u(f.user_id).Amtz({
                        action: "font_size_changed",
                        font_level: ak
                    })
                })
            }
            var ae = _$$(".text-align a", ab);
            for (var aa = 0; aa < ae.length; aa++) {
                var ag = ae[aa];
                ag.book = this;
                if (aa == b.reader.ivUk) {
                    ldxQ(ag, "selected")
                }
                fswd(ag, E, function(aj) {
                    aj.preventDefault();
                    var ah = this.hash.slice(1);
                    var ak = (ah == "justify" ? 1 : 0);
                    this.book.bUvn(ak);
                    var ai = jlQX(".navbar a.set-appearance");
                    this.book.rtha({
                        target: ai
                    });
                    new u(f.user_id).Amtz({
                        action: "text_align_changed",
                        text_align: ak
                    })
                })
            }
            var ae = _$$(".font-name li", ab);
            for (var aa = 0; aa < ae.length; aa++) {
                var ag = ae[aa];
                ag.book = this;
                var X = b.reader.fontName || "";
                if (yBuq(ag, "name") == X) {
                    ldxQ(ag, "selected")
                }
                fswd(ag, E, function(aj) {
                    aj.preventDefault();
                    var ah = yBuq(this, "name");
                    this.book.epiC(ah);
                    var ai = jlQX(".navbar a.set-appearance");
                    this.book.rtha({
                        target: ai
                    });
                    new u(f.user_id).Amtz({
                        action: "font_name_changed",
                        font_name: ah
                    })
                })
            }
        },
        aqex: function() {
            if (!this.app.user_id) {
                return
            }
            var X = this;
            K(true);
            this.app.onSyncActivities(function(Y) {
                X.onGetActivities(X.QBvc, function(Z) {
                    K(false);
                    if (!Z.items) {
                        return
                    }
                    X.nklS.QBvc = X.QBvc;
                    X.nklS.bfaq(Z.items, true);
                    X.onWalk(X.reader.RPwP, X.reader.NjwZ);
                    X.JNWO(true)
                })
            }, true)
        },
        JNWO: function(ak) {
            var af = _$$(".panel");
            for (var al = 0; al < af.length; al++) {
                ZXsm(af[al])
            }
            var X = jlQX(".navbar .book-title");
            if (X) {
                mfAw(X, "display", ak ? "none" : "block")
            }
            var X = jlQX(".navbar .notes-marks");
            if (X) {
                mfAw(X, "display", ak ? "block" : "none")
            }
            var X = jlQX(".navbar .about");
            if (X) {
                mfAw(X, "display", ak ? "block" : "none")
            }
            if (!ak) {
                var X = jlQX(".toc-panel");
                if (X) {
                    ZXsm(X)
                }
                var X = jlQX(".notes-marks-panel");
                if (X) {
                    ZXsm(X)
                }
                return
            }
            var Y = this;
            var af = this.nklS.bFJF();
            af.sort(function(aq, ap) {
                return ((aq.section * 1000000 + aq.position.start[0] * 10000 + aq.position.start[1]) >= (ap.section * 1000000 + ap.position.start[0] * 10000 + ap.position.start[1]))
            });
            var ad = oNow();
            var ag = ad.width > 1000 ? Math.min(ad.width, 1000) : ad.width;
            var ae = ad.height - 46;
            var ac = ad.width > 1000 ? (ad.width - ag) / 2 : 0;
            var ao = this.reader.nfdo ? this.reader.nfdo : 0;
            ao = this.reader.ZYNf[ao];
            var aa = jlQX(".notes-marks-panel");
            if (!aa) {
                var aa = tMgz("div");
                ldxQ(aa, "notes-marks-panel");
                ldxQ(aa, "panel");
                ldxQ(aa, "__reader__");
                ldxQ(aa, "__content__")
            }
            gvVx(aa);
            var ah = "<div>";
            ah += '<div class="inner">';
            var Z = function(ap) {
                return ap.start[0] + "." + ap.start[1] + "." + ap.end[0] + "." + ap.end[1]
            };
            for (var al = 0; al < af.length; al++) {
                var an = af[al];
                if (!an.section) {
                    continue
                }
                var ai = this.IgOc.Liuf(parseInt(an.section));
                var ab = an.text || "...";
                var am = an.user_text || "";
                am = am.replace(new RegExp(/\[soundcloud track_id=(.*)\]/gm), "");
                var aj = "?id=" + this.QBvc + "&lo=" + an.section + "." + Z(an.position);
                if (an.action == 10) {
                    ah += '<div class="item card"><div class="inner">'
                } else {
                    ah += '<div class="item"><div class="inner">'
                }
                if (P != "web" && ab.slice(0, 6) != "{_::_}") {
                    ah += '<a class="normal" href="' + aj + '">' + ab + '<span class="user-text">' + am + "</span></a>"
                } else {
                    ah += '<a " href="' + aj + '">' + ab + '<span class="user-text">' + am + "</span></a>"
                }
                ah += '<p class="normal section-title">' + ai + "</p>";
                ah += "</div></div>"
            }
            ah += "</div>";
            ah += "</div>";
            ah += '<style type="text/css">';
            ah += ".notes-marks-panel{top: 44px; left: " + ac + "px; width: " + ag + "px; height: " + ae + "px; background:" + ao.bgcolor + ";color:" + ao.color + "; border:solid 1px " + ao.linecolor + "}";
            ah += ".notes-marks-panel a{color:" + ao.color + ";}";
            ah += "</style>";
            aa.innerHTML = ah;
            sDrg(aa, document.body);
            var af = _$$("div.inner a", aa);
            for (var al = 0; al < af.length; al++) {
                var an = af[al];
                an.book = this;
                fswd(an, "click", function(au) {
                    au.preventDefault();
                    var aq = jlQX("div.navbar");
                    if (aq) {
                        ZXsm(aq)
                    }
                    var aq = jlQX("a.selected", this.parentNode);
                    if (aq) {
                        Swvv(aq, "selected")
                    }
                    ldxQ(this, "selected");
                    var av = nmwG(yBuq(this, "href"));
                    var at = av.lo.split(".");
                    var ap = {
                        start: parseInt(at[1]),
                        word: parseInt(at[2])
                    };
                    var ar = this.book.IgOc.MQiP(parseInt(at[0]));
                    this.book.TBUH(ar, ap);
                    new u(f.user_id).Amtz({
                        action: "marks_open_section",
                        lo: at[0] + "." + at[1] + "." + at[2]
                    })
                })
            }
        },
        xBow: function(X) {
            this.isLoading = X;
            var ab = _$("__loading__");
            if (!X) {
                if (ab) {
                    ZXsm(ab)
                }
                return
            }
            var aa = this.reader.ZYNf[this.reader.nfdo];
            if (!ab) {
                ab = tMgz("div");
                ab.id = "__loading__";
                dsun(ab, {
                    position: "fixed",
                    margin: "0px",
                    padding: "0px",
                    "z-index": "200",
                    left: "0px",
                    top: "0px"
                });
                sDrg(ab, jlQX("body"));
                var Z = tMgz("div");
                Z.innerHTML = "<span></span><span></span><span></span>";
                ldxQ(Z, "typing-indicator");
                dsun(Z, {
                    position: "fixed",
                    margin: "0px",
                    padding: "0px",
                    width: "65px",
                    height: "30px",
                    left: "45%",
                    top: "45%"
                });
                sDrg(Z, ab)
            }
            var Y = oNow();
            dsun(ab, {
                width: Y.width + "px",
                height: Y.height + "px",
                background: aa.bgcolor
            })
        },
        VoHW: function(X) {
            this.isLoading = X;
            var ab = _$("__loading__");
            if (!X) {
                if (ab) {
                    ZXsm(ab)
                }
                return
            }
            if (ab) {
                ZXsm(ab);
                ab = null
            }
            var aa = this.reader.ZYNf[this.reader.nfdo];
            if (!ab) {
                ab = tMgz("div");
                ab.id = "__loading__";
                dsun(ab, {
                    position: "fixed",
                    margin: "0px",
                    padding: "0px",
                    "z-index": "200",
                    left: "0px",
                    top: "0px"
                });
                sDrg(ab, jlQX("body"));
                var Z = tMgz("div");
                Z.innerHTML = '				    <div class="timeline-item">				        <div class="animated-background">				            <div class="background-masker header-top"></div>				            <div class="background-masker header-left"></div>				            <div class="background-masker header-right"></div>				            <div class="background-masker header-bottom"></div>				            <div class="background-masker subheader-left"></div>				            <div class="background-masker subheader-right"></div>				            <div class="background-masker subheader-bottom"></div>				            <div class="background-masker content-top"></div>				            <div class="background-masker content-first-end"></div>				            <div class="background-masker content-second-line"></div>				            <div class="background-masker content-second-end"></div>				            <div class="background-masker content-third-line"></div>				            <div class="background-masker content-third-end"></div>				        </div>				    </div>				    <style type="text/css">				    .background-masker{background: ' + aa.bgcolor + "}				    </style>					";
                ldxQ(Z, "timeline-wrapper");
                dsun(Z, {
                    position: "fixed",
                    margin: "0px",
                    padding: "0px"
                });
                sDrg(Z, ab)
            }
            var Y = oNow();
            dsun(ab, {
                width: Y.width + "px",
                height: Y.height + "px"
            })
        },
        jrfb: function() {
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen()
                } else {
                    if (document.documentElement.msRequestFullscreen) {
                        document.documentElement.msRequestFullscreen()
                    } else {
                        if (document.documentElement.mozRequestFullScreen) {
                            document.documentElement.mozRequestFullScreen()
                        } else {
                            if (document.documentElement.webkitRequestFullscreen) {
                                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
                            }
                        }
                    }
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen()
                } else {
                    if (document.msExitFullscreen) {
                        document.msExitFullscreen()
                    } else {
                        if (document.mozCancelFullScreen) {
                            document.mozCancelFullScreen()
                        } else {
                            if (document.webkitExitFullscreen) {
                                document.webkitExitFullscreen()
                            }
                        }
                    }
                }
            }
            new u(f.user_id).Amtz({
                action: "toggle_fullscreen"
            })
        },
        ubYA: function() {
            return b.IgOc.docNCX
        },
        kLKU: function() {
            if (!b.emli) {
                return -1
            }
            return b.aongIndex
        },
        onWalk: function(X, Y) {
            if (!X) {
                return
            }
            var ac = b.reader.index;
            b.steps[ac] = X;
            var ae = b.nklS.bFJF(b.aongIndex, X.start, Y.start);
            b.highlight.PrYf(null, X.start);
            for (var Z = 0; Z < b.reader.containers.length; Z++) {
                b.reader.index = Z;
                for (var aa = 0; aa < ae.length; aa++) {
                    var ag = ae[aa];
                    var ab = ag.position;
                    b.highlight.idgo(ab, true, true, ag)
                }
            }
            b.reader.index = ac;
            var ad = b.qXsk(b.aongIndex, X, Y);
            var af = b.aongIndex;
            if (b.isNeedLoadSectionNext && af == 1) {
                af--
            }
            var ab = {
                start: X.start,
                word: X.word
            };
            b.nklS.lcwS(af, ab, ad);
            b.DrhW(af, X);
            if (!b.emli && !h) {
                b.duHj(X.start == 0, b.isReachToTheEnd)
            }
            var ae = _$$(".toc-panel, .notes-marks-panel");
            for (var aa = 0; aa < ae.length; aa++) {
                ZXsm(ae[aa])
            }
            new u(f.user_id).Amtz({
                action: "page_turned",
                section: af,
                lo_start: X.start + "." + X.word,
                lo_end: Y.start + "." + Y.word
            })
        },
        vAia: function() {
            this.onPageWillTurn(this);
            clearTimeout(this.loadTimer);
            clearTimeout(this.recentTimer);
            if (!this.reader.akmg(null, true)) {
                var X = this.IgOc.VBTS(this.aong);
                return this.TBUH(X)
            }
            this.timeTraveled.lxua(this.QBvc, [this.aongIndex, this.RPwP ? this.RPwP.start : 0, this.RPwP ? this.RPwP.word : 0], "next");
            this.onPageTurned(this)
        },
        SsqS: function() {
            this.onPageWillTurn(this);
            clearTimeout(this.loadTimer);
            clearTimeout(this.recentTimer);
            if (!this.reader.lvgT()) {
                var X = this.IgOc.VBTS(this.aong, -1);
                return this.TBUH(X, -1)
            }
            this.timeTraveled.lxua(this.QBvc, [this.aongIndex, this.RPwP ? this.RPwP.start : 0, this.RPwP ? this.RPwP.word : 0], "previous");
            this.onPageTurned(this)
        },
        hNrd: function() {
            if (!this || !this.reader) {
                return
            }
            this.reader.containers = this.nGfi();
            if (this.reader.containers.length > this.reader.wrappers.length) {
                window.location.reload();
                return
            }
            new U().PrYf();
            this.reader.PrYf();
            this.reader.bPrh();
            this.reader.LdEt();
            this.highlight.padding = this.reader.padding;
            this.highlight.margin = this.reader.margin;
            this.jFdH();
            this.reader.aUsp = false;
            this.reader.akmg(this.reader.RPwP)
        },
        akcr: function(X) {
            this.reader.akcr(X, true);
            this.hNrd();
            this.nklS.KtGv(X)
        },
        bUvn: function(X) {
            this.reader.bUvn(X, true);
            this.nklS.CBrN(X);
            this.reader.PrYf();
            this.reader.bPrh();
            this.reader.LdEt();
            this.highlight.padding = this.reader.padding;
            this.highlight.margin = this.reader.margin;
            this.reader.aUsp = false;
            this.reader.akmg(this.reader.RPwP)
        },
        epiC: function(X) {
            this.reader.epiC(X, true);
            this.nklS.vnkg(X);
            this.reader.PrYf();
            this.reader.bPrh();
            this.reader.LdEt();
            this.highlight.padding = this.reader.padding;
            this.highlight.margin = this.reader.margin;
            this.reader.aUsp = false;
            this.reader.akmg(this.reader.RPwP)
        },
        dEDn: function(ad) {
            this.reader.dEDn(ad);
            this.nklS.jhww(ad);
            var ac = this.reader.ZYNf[ad];
            mfAw(document.body, "background-color", ac.bgcolor);
            var aa = jlQX("div.navbar");
            if (aa) {
                dsun(aa, {
                    background: ac.bgcolor,
                    color: ac.color,
                    "border-bottom": "solid 1px " + ac.linecolor
                });
                var Y = _$$("a", aa);
                for (var Z = 0; Z < Y.length; Z++) {
                    var ab = Y[Z];
                    dsun(ab, {
                        color: ac.color,
                        border: "solid 1px " + ac.linecolor
                    })
                }
            }
            var X = _$("navbar-bottom");
            if (X) {
                mfAw(X, "color", ac.color)
            }
        },
        dxxV: function(ao) {
            var ab = this.IgOc.aQmf;
            var ar = ab.title;
            var ag = ab.creator;
            var ac = jlQX(".about-book-panel");
            if (ac) {
                ZXsm(ac)
            }
            ac = tMgz("div");
            ldxQ(ac, "panel");
            ldxQ(ac, "__reader__");
            ldxQ(ac, "about-book-panel");
            var ap = this.reader.ZYNf[this.reader.nfdo];
            dsun(ac, {
                "background-color": ap.bgcolor,
                color: ap.color
            });
            sDrg(ac, document.body);
            var Z = parseInt(ab.word_count / 200);
            var X = [parseInt(Z / 60), Z % 60];
            Z = X[0] + (X[0] > 1 > 0 ? (X[0] > 1 ? " hrs " : " hr ") : "") + X[1] + (X[1] > 1 ? " mins." : " min.");
            var Y = tMgz("div");
            ldxQ(Y, "nav");
            dsun(Y, {
                height: "auto"
            });
            var ak = "";
            ak += '<a class="btn close" href="#close">' + o.close + "</a>";
            Y.innerHTML = ak;
            sDrg(Y, ac);
            var ae = tMgz("div");
            ldxQ(ae, "container");
            ldxQ(ae, "__reader__");
            var al = jlQX("meta[property=item_id]");
            var aa = this.store_id ? this.store_id : (al ? jlQX("meta[property=item_id]").content : ao.id);
            var af = "https://read.alezaa.com/?sid=" + aa + "&ref=webstore";
            var aq = tMgz("div");
            ldxQ(aq, "inner");
            var ak = "";
            ak += '<p class="cover"><a target="_blank" href="' + af + '"><img src="' + this.IgOc.baseURL + ab.cover + '"/></a></p>';
            ak += '<p class="title"><a target="_blank" href="' + af + '"><span>' + ab.title + "</a></p>";
            ak += '<p class="creator"><span> by</span> ' + ab.creator + "</p>";
            ak += '<p class="publisher"><span>' + o.publisher + ":</span> " + ab.publisher + "</p>";
            ak += '<p class="word_count"><span>' + o.word_count + ":</span> " + ab.word_count + "</p>";
            ak += '<p class="reading_time"><span>' + o.reading_time + ":</span> " + Z + "</p>";
            aq.innerHTML = ak;
            sDrg(aq, ae);
            sDrg(ae, ac);
            var aj = oNow();
            var ad = Math.min(520, aj.width - 40);
            var ah = Math.min(320, aj.height - 40);
            dsun(ac, {
                width: ad + "px",
                left: (aj.width - ad - 2) / 2 + "px",
                top: (aj.height - ah - 20) / 2 + "px"
            });
            var an = jlQX(".cover img", ac);
            dsun(an, {
                width: Math.max(ad / 3, 120) + "px"
            });
            var ai = _$$("a", Y);
            for (var am = 0; am < ai.length; am++) {
                var ao = ai[am];
                fswd(ao, "click", function(av) {
                    av.preventDefault();
                    var au = yBuq(this, "href").slice(1);
                    if (au == "close") {
                        var at = jlQX(".about-book-panel");
                        ZXsm(at)
                    }
                })
            }
        },
        pAye: function() {
            this.close()
        },
        onPageTurned: function() {
            this.RPwP_ = this.reader.RPwP;
            b.cqOg({}, true)
        },
        onPageWillTurn: function() {
            new U().PrYf()
        },
        onTapped: function(ab, Y) {
            ab.x -= window.pageXOffset;
            ab.y -= window.pageYOffset;
            var Z = document.elementFromPoint(ab.x, ab.y);
            if (!this.book.emli && Z && Z.parentNode && (aWqS(Z, "callout") || fxen(Z, ".callout") || Z.parentNode.tagName != "BODY")) {
                return
            }
            if (!Y || Y.tagName != "A") {
                var X = oNow();
                var ac = Math.max(this.reader.padding.right + this.reader.margin.right + 8, X.width > 700 ? 80 : 30);
                var aa = this.reader.padding.bottom + this.reader.margin.bottom + 8;
                if (ab.x > X.width - ac || ab.x > X.width * 2 / 3 && ab.y > X.height - aa) {
                    return this.book.vAia()
                } else {
                    if ((ab.x < ac && ab.y > aa) || ab.x < X.width / 3 && ab.y > X.height - aa) {
                        return this.book.SsqS()
                    }
                }
            }
            while (Y && Y.parentNode) {
                if (Y.tagName == "A" || Y.tagName == "DIV" || Y.tagName == "FIGURE") {
                    break
                }
                Y = Y.parentNode
            }
            if (Y && Y.tagName == "A") {
                if (this.book.TBUH(b.IgOc.LbmQ(yBuq(Y, "href")))) {
                    return
                }
                if (this.book.pnLg(yBuq(Y, "href"))) {
                    return
                }
                if (this.book.vCvG(yBuq(Y, "title"), ab)) {
                    return
                }
            }
            if (Y && Y.tagName == "FIGURE" && aWqS(Y, "ad-display")) {
                if (h) {
                    window.location = yBuq(Y, "data-link")
                } else {
                    window.open(yBuq(Y, "data-link"))
                }
                return
            }
            if (jlQX(".__important__")) {
                return
            }
            new ufaj();
            this.book.cqOg(ab);
            this.book.tteH(false)
        },
        onResized: function() {
            clearTimeout(b.timer);
            b.timer = setTimeout(function() {
                b.hNrd()
            }, isMobile.sAca() ? 300 : 100)
        },
        onTextSelected: function(X, Y) {
            b.nklS.mryc(b.aongIndex, X, "highlight", Y, "")
        },
        onContextMenu: function(Y, X, Z) {
            Z.x -= window.pageXOffset;
            Z.y -= window.pageYOffset;
            if (Y == "note") {
                b.eofw(X, Z)
            } else {
                if (Y == "share") {
                    b.dacU(X, Z)
                } else {
                    if (Y == "remove-highlight") {
                        b.nklS.uYhq(b.aongIndex, X)
                    }
                }
            }
        },
        onSwipe: function(X) {
            if (X) {
                b.vAia()
            } else {
                b.SsqS()
            }
        },
        onNeedLoadSectionNext: function() {
            b.IEoJ(b, b.aong, function(X) {
                if (b.reader.index != 0) {
                    return
                }
                if (!X) {
                    b.reader.index = 0;
                    b.reader.indexStart = 0;
                    b.reader.aUsp = true;
                    mfAw(b.container, "visibility", "visible");
                    b.VoHW(false);
                    return
                }
                b.isNeedLoadSectionNext = true;
                b.reader.aUsp = false;
                b.reader.indexStart = 1;
                b.reader.index = 1;
                b.reader.akmg({
                    start: 0,
                    word: 0
                });
                b.reader.index = 0;
                b.reader.indexStart = 0
            })
        },
        onGetBaseURL: function(X, Y, Z) {
            return Z()
        },
        onGetRecentPosition: function(X, Y) {
            return Y()
        },
        onBfDxClosed: function(X) {}
    });
    var V = new Class({
        initialize: function(Z, X) {
            this.app = Z;
            this.container = X;
            this.collection_inner = jlQX("ul.items.collection", this.container);
            this.collection_item = SKeG(jlQX("li", this.collection_inner), true);
            this.collection_item_edit = SKeG(jlQX("li.edit", this.collection_inner), true);
            gvVx(this.collection_inner);
            var Y = jlQX(".collection-dialog", this.container);
            this.collection_dialog_inner = SKeG(Y, true);
            this.collection_dialog_item = SKeG(jlQX("ul.items li", this.collection_dialog_inner), true);
            ZXsm(Y);
            this.inner = jlQX("ul.items.book", this.container);
            this.inner_item = SKeG(jlQX("li", this.inner), true);
            gvVx(this.inner);
            this.elActivities = jlQX(".activities");
            if (this.elActivities) {
                this.elActivitiesItem = SKeG(jlQX("ul.items li", this.elActivities), true);
                mfAw(this.elActivities, "display", "none")
            }
            this.nklS = new M(this.app.user_id);
            this.init();
            document.title = o.tab_library
        },
        init: function() {
            var X = this;
            var aa = oNow();
            var Z = Math.max(aa.width / 5, 60);
            var Y = Math.min(aa.width * 2 / 3, 800) - Z / 2;
            this.onResized();
            var ab = jlQX(".app-version");
            if (ab) {
                ab.innerHTML = ab.innerHTML.replace("@{app-version}", Q)
            }
        },
        qeqa: function(Y) {
            if (Y) {
                if (Y.collection_id) {
                    this.collection_id = Y.collection_id
                }
                if (Y.collections) {
                    this.collections = Y.collections
                }
                this.dataSource = Y.items
            }
            if (!this.collections) {
                return alert(o.can_not_connect_to_server)
            }
            this.is_collection_home = this.collection_id == this.collections[0].id;
            gvVx(this.inner);
            this.oxTx();
            var ad = this.dataSource || [];
            var af = {};
            for (var ac = 0; ac < ad.length; ac++) {
                af[ad[ac].isbn] = 1
            }
            var aa = this.nklS.DmDi("*", this.is_collection_home ? null : this.collection_id);
            var ag = {};
            for (var ac = 0; ac < aa.length; ac++) {
                var ah = aa[ac];
                if (!this.is_collection_home && ah.collection_id != this.collection_id) {
                    continue
                }
                var ab = ah.isbn in af;
                if (!ab && !ah.removed) {
                    ad.push(ah)
                } else {
                    if (ab && ah.removed) {
                        ag[ah.isbn] = 1
                    }
                }
            }
            for (var ac = 0; ac < ad.length; ac++) {
                var ah = ad[ac];
                if (ah.isbn in ag) {
                    continue
                }
                var ae = SKeG(this.inner_item, true);
                var X = ah.format == "sample" ? "?sid=" + ah.isbn : "?id=" + ah.isbn;
                var ai = ah.cover.indexOf("http") == -1 ? (ah.url || "") + ah.cover : ah.cover;
                if (ai) {
                    ai = ai.replace("https://", "//").replace("http://", "//")
                }
                Mrvh(ae, {
                    "data-id": ah.isbn
                });
                Mrvh(jlQX("a.cover", ae), {
                    href: X,
                    title: ah.title + " - " + ah.author,
                    "data-store-id": ah.id,
                    target: "_blank"
                });
                Mrvh(jlQX(".text a", ae), {
                    href: X,
                    target: "_blank"
                });
                Mrvh(jlQX(".title", ae), {
                    html: ah.title
                });
                Mrvh(jlQX(".creator", ae), {
                    html: ah.author
                });
                Mrvh(jlQX(".cover img", ae), {
                    src: ai
                });
                sDrg(ae, this.inner)
            }
            if (this.is_collection_home) {
                this.LdEt()
            } else {
                if (this.elActivities) {
                    mfAw(this.elActivities, "display", "none")
                }
            }
            var Z = this;
            var ad = _$$("li a", this.inner);
            for (var ac = 0; ac < ad.length; ac++) {
                var ah = ad[ac];
                fswd(ah, "click", function(aj) {
                    aj.preventDefault()
                });
                fswd(ah, s, function(ak) {
                    if (this.QBvc) {
                        this.QBvc = null;
                        return
                    }
                    var al = nmwG(yBuq(this, "href"));
                    this.QBvc = al.id || al.sid;
                    this.ts = new Date().getTime();
                    var aj = this;
                    this.timer = setTimeout(function() {
                        if (!aj.QBvc) {
                            return
                        }
                        ak.QBvc = aj.QBvc;
                        Z.HpcE(ak)
                    }, 400)
                });
                fswd(ah, D, function(aj) {
                    this.QBvc = null
                });
                fswd(ah, O, function(aj) {
                    clearTimeout(this.timer);
                    if (!this.QBvc) {
                        return
                    }
                    if (new Date().getTime() - this.ts < 400) {
                        var ak = yBuq(this, "data-store-id");
                        Z.app.fsJg(this.QBvc, null, ak, Z.collection_id);
                        new u(f.user_id).Amtz({
                            action: "open_book",
                            book_id: this.QBvc,
                            ref: "library"
                        });
                        this.QBvc = null
                    }
                })
            }
            this.onListRecentPositions(function(am) {
                if (!am) {
                    return
                }
                var al = am.items;
                var ak = new M(f.user_id);
                for (var an = 0; an < Math.min(al.length, 3); an++) {
                    var ao = al[an];
                    var ap = JSON.parse(ao.value);
                    var aj = (ap.position + "").split(".");
                    ak.Bjho(ao.isbn);
                    ak.lcwS(parseInt(ap.section) || 0, {
                        start: parseInt(aj[0]),
                        word: parseInt(aj[1]) || 0
                    }, ao.percent / 100 || 0, new Date(ao.updated_time).getTime())
                }
                Z.LdEt(null, al.slice(0, 3))
            });
            this.onLoaded(ad)
        },
        MopM: function() {
            this.qeqa()
        },
        LdEt: function(am, ao) {
            ao = ao || [];
            var ak = this.nklS.VAnM();
            var ac = [];
            for (var ar = 0; ar < ak.length; ar++) {
                var au = ak[ar];
                ac.push(au)
            }
            ac.sort(function(aw, av) {
                return (av.ts || 0) - (aw.ts || 0)
            });
            var aj = jlQX(".activities ul.items");
            if (aj) {
                var ag = SKeG(this.elActivitiesItem, true);
                gvVx(aj);
                var ae = yBuq(ag, "html")
            }
            var Z = new Array();
            var ad = {};
            if (this.elActivities && this.is_collection_home) {
                for (var ar = 0; ar < ao.length; ar++) {
                    var au = ao[ar];
                    var X = new Date(au.updated_time).getTime();
                    var ai = Math.round((new Date().getTime() - X) / 86400000);
                    var an = ae;
                    if (ai > 0) {
                        an = an.replace(new RegExp("{days}", "g"), ai + o.days_ago)
                    } else {
                        an = an.replace(new RegExp("{days}", "g"), o.today)
                    }
                    var Y = au.percent || 0;
                    an = an.replace(new RegExp("{isbn}", "g"), au.isbn);
                    an = an.replace(new RegExp("{reading_percent}", "g"), Y);
                    an = an.replace(new RegExp("{title}", "g"), au.title);
                    Z.push({
                        value: an,
                        ts: X
                    });
                    ad[au.isbn] = 1
                }
            }
            var ah = this.inner;
            var ak = _$$("li", ah);
            for (var ar = 0; ar < ak.length; ar++) {
                var at = ak[ar];
                var al = yBuq(at, "data-id");
                if (am && al != am) {
                    continue
                }
                var au = this.nklS.bmHq(al);
                if (au && au.percent) {
                    var Y = Math.round(au.percent * 100) || 0;
                    if (this.elActivities && this.is_collection_home && !ad[al]) {
                        var ai = Math.round((new Date().getTime() - au.ts) / 86400000);
                        var an = ae;
                        if (ai > 0) {
                            an = an.replace(new RegExp("{days}", "g"), ai + o.days_ago)
                        } else {
                            an = an.replace(new RegExp("{days}", "g"), o.today)
                        }
                        an = an.replace(new RegExp("{isbn}", "g"), al);
                        an = an.replace(new RegExp("{reading_percent}", "g"), Y);
                        an = an.replace(new RegExp("{title}", "g"), jlQX(".text .title", at).innerHTML);
                        Z.push({
                            value: an,
                            ts: au.ts
                        })
                    }
                    var ab = jlQX(".dots", at);
                    var af = [];
                    for (var ap = 0; ap < 100; ap += 5) {
                        af.push(ap < Y ? '<span class="d">&nbsp;</span>' : "<span>&nbsp;</span>")
                    }
                    Mrvh(ab, {
                        "data-percent": Y,
                        html: af.join(""),
                        title: Y + "%"
                    })
                }
            }
            for (var ar = ac.length - 1; ar > -1; ar--) {
                var at = ac[ar];
                var ab = jlQX('li[data-id="' + at.QBvc + '"]', this.inner);
                if (ab) {
                    sDrg(ab, ah, "top")
                }
            }
            Z.sort(function(aw, av) {
                return av.ts - aw.ts
            });
            if (this.elActivities) {
                mfAw(this.elActivities, "display", Z.length > 0 ? "block" : "none")
            }
            var aq = Math.min(Z.length, 3);
            for (var ar = 0; ar < aq; ar++) {
                var at = Z[ar];
                var aa = SKeG(ag, true);
                Mrvh(aa, {
                    html: at.value
                });
                sDrg(aa, aj)
            }
        },
        HpcE: function(ac) {
            var ab = tMgz("div");
            ldxQ(ab, "context-menu");
            dsun(ab, {
                "min-width": "160px",
                "max-width": "240px",
                "padding-top": "20px !important"
            });
            var ah = new Array();
            var X = "";
            ah.push('<p>	    					<a class="view-in-store" target="_blank" href="?sid=' + (ac.QBvc) + '">' + o.view_in_store + "</a>	    	 				</p>");
            for (var aa = 0; aa < this.collections.length; aa++) {
                var ag = this.collections[aa];
                if (ag.id == this.collection_id) {
                    X = ag.name;
                    continue
                }
                ah.push('<p><a href="#" data-collection-id="' + ag.id + '" data-book-id="' + ac.QBvc + '">' + ag.name + "</a></p>")
            }
            ah.push('<p>	    					<a class="move-to-top" href="#" data-collection-id="' + this.collection_id + '" data-book-id="' + ac.QBvc + '">' + o.move_to_top + "</a>	    	 				</p>");
            X = o.remove_from_library.replace("{collection_name}", X);
            ah.push('<p>	    					<a class="remove-from-library" href="#" data-book-id="' + ac.QBvc + '">' + X + "</a>	    	 				</p>");
            ab.innerHTML = ah.join("");
            var ae = tvdw(ac.target);
            var af = ac.target.getBoundingClientRect();
            ae.x += af.width / 2;
            ae.y += 20;
            new ufaj(document.body, ab, null, {
                bgcolorstart: "#fff",
                bgcolorstop: "#fefefe",
                linearheight: 45,
                kpos: ae,
                padding: {
                    left: 0,
                    top: 0
                },
                stroke: ""
            }).vDqm();
            var Z = this;
            var Y = jlQX("a.remove-from-library", ab);
            fswd(Y, "click", function(ai) {
                ai.preventDefault();
                Z.nklS.nsFk(yBuq(this, "data-book-id"), Z.collection_id);
                Z.MopM();
                new ufaj()
            });
            var ad = _$$("a:not(.remove-from-library)", ab);
            for (var aa = 0; aa < ad.length; aa++) {
                var ag = ad[aa];
                fswd(ag, E, function(am) {
                    var aj = yBuq(this, "data-book-id");
                    if (!aj) {
                        new ufaj();
                        return
                    }
                    am.preventDefault();
                    var ak = yBuq(this, "data-collection-id");
                    var ai = jlQX('.items li[data-id="' + aj + '"]');
                    var al = {
                        isbn: aj,
                        title: jlQX(".text a .title", ai).innerHTML,
                        creator: jlQX(".text a .creator", ai).innerHTML,
                        author: jlQX(".text a .creator", ai).innerHTML,
                        cover: jlQX("a.cover img", ai).src,
                        collection_id: ak,
                        ts: new Date().getTime()
                    };
                    Z.nklS.dynx(aj, al);
                    f.onSyncActivities(function(an) {
                        Z.onLoadCRwrDataSource(Z.collection_id, function(ao) {
                            Z.qeqa(ao)
                        })
                    });
                    new ufaj()
                })
            }
        },
        oxTx: function() {
            var aa = this;
            gvVx(this.collection_inner);
            var af = jlQX(".share-collection", this.container);
            Swvv(af, "actived");
            for (var ab = 0; ab < this.collections.length; ab++) {
                var ai = this.collections[ab];
                if (ai.name == "HOME_COLLECTION") {
                    ai.name = "Home"
                }
                var Y = ai.id == this.collection_id;
                var ag = SKeG(this.collection_item, true);
                if (Y) {
                    ldxQ(ag, "selected")
                }
                var ac = jlQX("a", ag);
                Mrvh(ac, {
                    "data-permission": ai.permission,
                    href: "?view=library&collection=" + ai.id,
                    html: ai.name
                });
                sDrg(ag, this.collection_inner);
                if (Y && ai.permission == 2) {
                    var aj = oNow();
                    ldxQ(af, "actived");
                    var ah = _$$(".icon", af);
                    for (var Z = 0; Z < ah.length; Z++) {
                        var ad = ah[Z];
                        var X = yBuq(ad, "data-href") || yBuq(ad, "href");
                        if (!yBuq(ad, "data-href")) {
                            Mrvh(ad, {
                                "data-href": yBuq(ad, "href")
                            })
                        }
                        X = X.replace(new RegExp("{collection_name}", "g"), ai.name);
                        X = X.replace(new RegExp("{collection_memo}", "g"), ai.memo || "");
                        X = X.replace(new RegExp("{collection_id}", "g"), ai.id);
                        Mrvh(ad, {
                            href: X,
                            "data-collection-id": ai.id,
                            "data-collection-name": ai.name,
                            "data-collection-permission": ai.permission
                        });
                        fswd(ad, E, function(ao) {
                            ao.preventDefault();
                            if (this.loading) {
                                return
                            }
                            this.loading = true;
                            var an = yBuq(this, "data-collection-id");
                            var am = yBuq(this, "data-collection-name");
                            var ak = yBuq(this, "data-collection-permission");
                            var al = jlQX("textarea.memo").value;
                            that__ = this;
                            K(true);
                            aa.onSaveCollection(an, am, ak, al, function(ap) {
                                f.onSyncActivities(function(aq) {
                                    that__.loading = false;
                                    K(false);
                                    var ar = oNow();
                                    var at = (ar.width - 540) / 2;
                                    var au = (ar.height - 400) / 2;
                                    if (h) {
                                        window.location = yBuq(that__, "href")
                                    } else {
                                        if (aWqS(that__, "icon-copylink")) {
                                            window.open(yBuq(that__, "href"))
                                        } else {
                                            window.open(yBuq(that__, "href"), "targetWindow", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,top=" + au + ",left=" + at + ",width=540,height=420")
                                        }
                                    }
                                })
                            })
                        })
                    }
                    var ae = jlQX("textarea.memo", af);
                    ae.value = ai.memo || "";
                    mfAw(ae, "width", Math.min(450, aj.width - 40) + "px");
                    fswd(ae, "focus", function(ak) {
                        mfAw(ae, "height", "80px")
                    })
                }
                fswd(ac, E, function(ak) {
                    ak.preventDefault();
                    var al = nmwG(yBuq(this, "href"));
                    K(true);
                    if (al.collection) {
                        aa.onLoadCRwrDataSource(al.collection, function(am) {
                            K(false);
                            aa.qeqa(am)
                        })
                    }
                })
            }
            var ag = SKeG(this.collection_item_edit, true);
            sDrg(ag, this.collection_inner);
            fswd(jlQX("a", ag), E, function(ak) {
                ak.preventDefault();
                aa.zqCf();
                new u(f.user_id).Amtz({
                    action: "list-user-collections"
                })
            })
        },
        zqCf: function() {
            var ab = this;
            var Z = jlQX(".dialog");
            if (Z) {
                ZXsm(Z)
            }
            var Z = SKeG(this.collection_dialog_inner, true);
            var ae = function(ap) {
                mfAw(ap, "display", "none");
                var au = parseInt(yBuq(ap, "data-permission"));
                var ao = _$$("input[type=text]", fxen(ap, "ul"));
                for (var an = 0; an < ao.length; an++) {
                    var at = ao[an];
                    mfAw(at.previousElementSibling, "display", "block");
                    ZXsm(at.nextElementSibling.nextElementSibling);
                    ZXsm(at.nextElementSibling);
                    ZXsm(at)
                }
                var av = oNow();
                var am = Math.min(450, av.width);
                var aq = tMgz("input");
                Mrvh(aq, {
                    type: "text"
                });
                mfAw(aq, "width", am - 190 + "px");
                aq.value = yBuq(ap, "data-name");
                dwED(aq, ap);
                aq.focus();
                fswd(aq, "input", function(aw) {
                    var ax = this;
                    clearTimeout(this.timer);
                    this.timer = setTimeout(function() {
                        var ay = fxen(ax, "li");
                        var az = jlQX("a.save", ay);
                        Mrvh(az, {
                            html: ax.value ? o.save : o.remove
                        });
                        if (ax.value) {
                            Swvv(az, "delete")
                        } else {
                            ldxQ(az, "delete")
                        }
                    }, 100)
                });
                var ak = tMgz("input");
                ak.id = "btn-permission";
                Mrvh(ak, {
                    type: "checkbox"
                });
                ldxQ(ak, "permission");
                var al = tMgz("label");
                Mrvh(al, {
                    "for": "btn-permission",
                    html: o.share
                });
                sDrg(ak, al, "top");
                dwED(al, aq);
                if (au == 2) {
                    ak.checked = true
                }
                var ar = tMgz("a");
                ldxQ(ar, "save");
                Mrvh(ar, {
                    html: o.save
                });
                dwED(ar, al);
                fswd(ar, E, function(aB) {
                    aB.preventDefault();
                    var aD = fxen(this, "li");
                    var aA = jlQX("input[type=text]", aD);
                    var ax = aA.value;
                    var aE = jlQX("input[type=checkbox]", aD).checked ? 2 : 1;
                    ZXsm(aA);
                    ZXsm(jlQX("label", aD));
                    var az = jlQX("a", aD);
                    Mrvh(az, {
                        "data-name": ax,
                        "data-permission": aE,
                        html: ax
                    });
                    if (aE == 2) {
                        var aw = tMgz("sup");
                        Mrvh(aw, {
                            html: o.shared
                        });
                        sDrg(aw, az)
                    }
                    var ay = nmwG(yBuq(az, "href"));
                    var aC = ay.collection_id;
                    mfAw(this.previousElementSibling, "display", "block");
                    ZXsm(this);
                    if (ax) {
                        ab.onSaveCollection(aC, ax, aE, "", function(aF) {
                            ab.onLoadListCollection(function(aG) {
                                ab.collections = aG;
                                ab.oxTx();
                                if (aE != 2) {
                                    return
                                }
                                var aH = jlQX(".dialog");
                                if (aH) {
                                    ZXsm(aH)
                                }
                                ab.onLoadCRwrDataSource(aC, function(aI) {
                                    K(false);
                                    ab.qeqa(aI)
                                })
                            })
                        })
                    } else {
                        ab.onDeleteCollection(aC, function(aF) {
                            if (aF.error) {
                                var aG = jlQX("a", aD);
                                Mrvh(aG, {
                                    html: yBuq(aG, "data-name")
                                });
                                alert(o.collection_is_not_empty);
                                return
                            }
                            ZXsm(aD);
                            ab.onLoadListCollection(function(aH) {
                                ab.collections = aH;
                                ab.oxTx()
                            })
                        })
                    }
                })
            };
            var ag = jlQX(".inner ul", Z);
            gvVx(ag);
            for (var ac = 0; ac < this.collections.length; ac++) {
                var ad = this.collections[ac];
                if (ad.name == "HOME_COLLECTION") {
                    ad.name = "Home"
                }
                var ai = SKeG(this.collection_dialog_item, true);
                var af = jlQX("a", ai);
                Mrvh(af, {
                    "data-name": ad.name,
                    html: ad.name,
                    "data-permission": ad.permission,
                    href: "edit?collection_id=" + ad.id
                });
                sDrg(ai, ag);
                if (ad.permission == 2) {
                    var Y = tMgz("sup");
                    Mrvh(Y, {
                        html: o.shared
                    });
                    sDrg(Y, af)
                }
                fswd(af, E, function(ak) {
                    ak.preventDefault();
                    ae(this)
                })
            }
            var aj = oNow();
            var aa = Math.min(450, aj.width);
            dsun(Z, {
                left: (aj.width - aa) / 2 - 1 + "px"
            });
            sDrg(Z, document.body);
            var ah = jlQX(".btn-close", Z);
            fswd(ah, E, function(ak) {
                ak.preventDefault();
                ZXsm(fxen(this, ".dialog"))
            });
            var X = jlQX("a.add", Z);
            fswd(X, E, function(am) {
                am.preventDefault();
                var al = this.parentNode.previousElementSibling;
                var ak = SKeG(ab.collection_dialog_item, true);
                var an = jlQX("a", ak);
                Mrvh(an, {
                    html: "untitle",
                    href: "edit?collection_id="
                });
                sDrg(ak, al);
                fswd(an, E, function(ao) {
                    ao.preventDefault();
                    ae(this)
                });
                ae(an)
            })
        },
        onResized: function() {
            var Z = oNow();
            var Y = jlQX("section", this.container);
            var X = Z.width > 700 && !isMobile.tfCS();
            Swvv(Y, X ? "list" : "grid");
            ldxQ(Y, X ? "grid" : "list")
        },
        onLoaded: function(X) {},
        onLoadCRwrDataSource: function(X, Y) {},
        onLoadListCollection: function(X) {},
        onSaveCollection: function(aa, Z, X, Y, ab) {}
    });
    var F = new Class({
        initialize: function(Y, X) {
            this.app = Y;
            this.container = X;
            this.inner = jlQX("section", this.container);
            this.section_inner = SKeG(jlQX("div.section", this.container), true);
            this.section_item = SKeG(jlQX("li", this.section_inner), true);
            gvVx(this.inner);
            this.nklS = new M(this.app.user_id);
            this.max = 10;
            this.init();
            document.title = o.tab_for_you
        },
        init: function() {
            var X = this;
            var aa = oNow();
            var Z = Math.max(aa.width / 5, 60);
            var Y = Math.min(aa.width * 2 / 3, 800) - Z / 2;
            this.onResized()
        },
        qeqa: function(Y) {
            if (!Y || !Y.outputs) {
                return
            }
            this.dataSource = Y.outputs;
            var ah = this.dataSource || [];
            gvVx(this.inner);
            for (var aa = 0; aa < ah.length; aa++) {
                var af = ah[aa];
                var ai = SKeG(this.section_inner, true);
                var ac = jlQX(".title", ai);
                Mrvh(ac, {
                    html: af.name
                });
                var ab = jlQX("ul", ai);
                gvVx(ab);
                var ad = af.recs;
                var ae = Math.min(ad.length, this.max);
                for (var Z = 0; Z < ae; Z++) {
                    var aj = ad[Z];
                    var ag = SKeG(this.section_item, true);
                    Mrvh(ag, {
                        "data-id": aj.isbn
                    });
                    var X = "?sid=" + aj.id;
                    Mrvh(jlQX("a.cover", ag), {
                        href: X,
                        title: aj.title + " - " + aj.author,
                        "data-store-id": aj.id
                    });
                    Mrvh(jlQX(".text a", ag), {
                        href: X
                    });
                    Mrvh(jlQX(".title", ag), {
                        html: aj.title
                    });
                    Mrvh(jlQX(".creator", ag), {
                        html: aj.author
                    });
                    Mrvh(jlQX(".cover img", ag), {
                        src: aj.image
                    });
                    sDrg(ag, ab)
                }
                sDrg(ai, this.inner)
            }
            this.LdEt()
        },
        rejntu: function() {
            this.qeqa()
        },
        LdEt: function(X) {},
        onResized: function() {
            var Y = oNow();
            var X = Y.width > 700 && !isMobile.tfCS();
            Swvv(this.inner, X ? "list" : "grid");
            ldxQ(this.inner, X ? "grid" : "list")
        }
    });
    var H = new Class({
        initialize: function(ad, Z) {
            this.app = ad;
            this.container = Z;
            this.inner = jlQX("section", this.container);
            var ab = jlQX("#store-nav", this.container);
            this.store_nav = SKeG(ab, true);
            var aa = jlQX(".section.footer", this.container);
            this.store_footer = SKeG(aa, true);
            var ac = jlQX("div.section", this.container);
            this.section_inner = SKeG(ac, true);
            this.section_item = SKeG(jlQX("li", this.section_inner), true);
            ZXsm(ac);
            var Y = jlQX("div.section.view", this.container);
            this.view_inner = SKeG(Y, true);
            ZXsm(Y);
            this.subcate_inner = jlQX("div#sub-cate ul.items", this.container);
            this.subcate_item = SKeG(jlQX("li", this.subcate_inner), true);
            gvVx(this.subcate_inner);
            mfAw(this.subcate_inner, "display", "none");
            this.populartag_inner = jlQX("div#popular-tag ul.items", this.container);
            this.populartag_item = SKeG(jlQX("li", this.populartag_inner), true);
            gvVx(this.populartag_inner);
            mfAw(this.container, "position", "static");
            var X = jlQX(".section.footer");
            if (X) {
                mfAw(X, "display", "block")
            }
            this.nklS = new M(this.app.user_id);
            this.max = 10;
            this.need_load_more = false;
            this.init();
            this.categories = [];
            this.items = new Object();
            document.title = o.tab_store
        },
        init: function() {
            var X = this;
            var aa = oNow();
            var Z = Math.max(aa.width / 5, 60);
            var Y = Math.min(aa.width * 2 / 3, 800) - Z / 2;
            this.onResized();
            mfAw(this.container, "display", "none")
        },
        GGTt: function() {
            if (this.categories && this.categories.length > 0) {
                return this.categories
            }
            if (!this.info) {
                return this.categories
            }
            return this.info.featured_tags.split(",")
        },
        qeqa: function(X) {
            K(false);
            mfAw(this.container, "display", "block");
            if (!X) {
                return
            }
            var Y = this;
            if (X.outputs) {
                var af = X.outputs[0].recs;
                var at = X.outputs[0].name;
                var aa = SKeG(this.section_inner, true);
                var ap = jlQX(".title", aa);
                Mrvh(ap, {
                    html: o.recommend
                });
                var ae = jlQX("ul", aa);
                gvVx(ae);
                var ak = Math.min(af.length, this.max);
                for (var aj = 0; aj < ak; aj++) {
                    var ao = af[aj];
                    this.items[ao.id] = ao;
                    var ac = SKeG(this.section_item, true);
                    var an = ao.image;
                    if (an && an.indexOf("//") == -1) {
                        an = Z + an
                    }
                    if (an) {
                        an = an.replace("https://", "//").replace("http://", "//")
                    }
                    Mrvh(ac, {
                        "data-id": ao.isbn
                    });
                    var am = "?sid=" + ao.id;
                    if (ao.store_url) {
                        am = ao.store_url;
                        am = am.replace("lane://browse/", "?browse=");
                        am = am.replace("lane://brand/", "?brand=")
                    }
                    Mrvh(jlQX("a.cover", ac), {
                        href: am,
                        title: ao.title + " - " + ao.author,
                        "data-store-id": ao.id
                    });
                    Mrvh(jlQX(".text a", ac), {
                        href: am
                    });
                    Mrvh(jlQX(".title", ac), {
                        html: ao.title
                    });
                    Mrvh(jlQX(".creator", ac), {
                        html: ao.author
                    });
                    Mrvh(jlQX(".cover img", ac), {
                        src: an
                    });
                    sDrg(ac, ae)
                }
                dwED(aa, jlQX(".section.hero", this.inner), "after");
                this.LdEt();
                this.hOhO();
                return
            }
            this.categories = this.GGTt();
            var ah = X || [];
            this.dataSource = X;
            if (Y.current_offset == 0) {
                gvVx(this.inner)
            }
            for (var al = 0; al < this.categories.length; al++) {
                var at = this.categories[al];
                var aa = SKeG(this.section_inner, true);
                if (!Y.need_load_more || Y.current_offset == 0) {
                    var ap = jlQX(".title", aa);
                    if (at[0] != "#") {
                        var ar = Y.parent_category ? '<a href="?browse=' + Y.parent_category + '">' + Y.parent_category + '</a> <span class="arrow-lr-icon">></span> ' + at : at;
                        if (Y.parent_subtitle && al == 0) {
                            ar += '<p class="subtitle">' + Y.parent_subtitle + "</p>"
                        }
                        Mrvh(ap, {
                            html: ar
                        })
                    } else {
                        var ag = at == "#hero" ? "hero" : "banner";
                        ldxQ(aa, ag)
                    }
                }
                var ae = jlQX("ul", aa);
                gvVx(ae);
                var af = ah[at];
                if (!af) {
                    continue
                }
                var ab = new Object();
                var ak = Math.min(af.length, this.max);
                for (var aj = 0; aj < ak; aj++) {
                    var ao = af[aj];
                    this.items[ao.id] = ao;
                    if (this.dtags) {
                        var ad = ao.tag.split(",");
                        for (var ai = 0; ai < ad.length; ai++) {
                            var aq = ad[ai];
                            if (aq in this.dtags[3]) {
                                continue
                            }
                            if (aq.indexOf("#") > -1) {
                                continue
                            }
                            if (!ab[aq]) {
                                ab[aq] = 1
                            } else {
                                ab[aq] += 1
                            }
                        }
                    }
                    var ac = SKeG(this.section_item, true);
                    var Z = ao.url || "";
                    if (at == "#hero") {
                        var an = ao.store_hero
                    } else {
                        if (at[0] == "#") {
                            var an = ao.store_banner
                        } else {
                            var an = Z + ao.cover
                        }
                    }
                    if (an && an.indexOf("//") == -1) {
                        an = Z + an
                    }
                    if (an) {
                        an = an.replace("https://", "//").replace("http://", "//")
                    }
                    Mrvh(ac, {
                        "data-id": ao.isbn
                    });
                    var am = "?sid=" + ao.id;
                    if (ao.store_url) {
                        am = ao.store_url;
                        am = am.replace("lane://browse/", "?browse=");
                        am = am.replace("lane://brand/", "?brand=")
                    }
                    Mrvh(jlQX("a.cover", ac), {
                        href: am,
                        title: ao.title + " - " + ao.author,
                        "data-store-id": ao.id
                    });
                    Mrvh(jlQX(".text a", ac), {
                        href: am
                    });
                    Mrvh(jlQX(".title", ac), {
                        html: ao.title
                    });
                    Mrvh(jlQX(".creator", ac), {
                        html: ao.author
                    });
                    Mrvh(jlQX(".cover img", ac), {
                        src: an
                    });
                    sDrg(ac, ae)
                }
                sDrg(aa, this.inner)
            }
            if (Y.need_load_more) {
                var aa = jlQX(".section.load-more", this.inner);
                if (aa) {
                    ZXsm(aa)
                }
                var aa = tMgz("div");
                ldxQ(aa, "section load-more");
                var ap = tMgz("a");
                Mrvh(ap, {
                    href: "?browse=" + encodeURIComponent(Y.current_tags) + "&offset=" + (Y.current_offset + 20),
                    html: o.load_more
                });
                sDrg(ap, aa);
                sDrg(aa, this.inner)
            }
            this.LdEt();
            this.hOhO()
        },
        hOhO: function() {
            var X = this;
            var aa = _$$("a");
            for (var ab = 0; ab < aa.length; ab++) {
                var ad = aa[ab];
                if (yBuq(ad, "data-event-status")) {
                    continue
                }
                Mrvh(ad, {
                    "data-event-status": 1
                });
                fswd(ad, "click", function(ag) {
                    var af = yBuq(this, "href");
                    if (af.indexOf("http:") == 0 || af.indexOf(".php") > 0 || yBuq(this, "target") == "_blank") {
                        return
                    }
                    ag.preventDefault()
                });
                fswd(ad, s, function(af) {
                    this.ts = new Date().getTime()
                });
                fswd(ad, D, function(af) {
                    this.ts = null
                });
                fswd(ad, O, function(ah) {
                    if (!this.ts) {
                        return
                    }
                    var ag = this.ts;
                    this.ts = null;
                    if (new Date().getTime() - ag < 400) {
                        var af = yBuq(this, "href");
                        var ai = nmwG(af);
                        if (ai.view == "store") {
                            return X.app.dxyf()
                        } else {
                            if (ai.view == "membership") {
                                return X.app.FcdE()
                            } else {
                                if (ai.brand) {
                                    return X.zBwp(ai.brand)
                                } else {
                                    if (ai.browse) {
                                        return X.nevg(ai.browse, ai.offset)
                                    } else {
                                        if (ai.sid) {
                                            return X.Uklr(ai.sid, null, af)
                                        }
                                    }
                                }
                            }
                        }
                    }
                })
            }
            var ae = _$$(".hero.section");
            for (var ab = 0; ab < ae.length; ab++) {
                var Z = ae[ab];
                var Y = jlQX(".items", Z);
                var aa = _$$("li", Y);
                if (!Y) {
                    continue
                }
                dsun(Y, {
                    width: aa.length * 392 + "px !important",
                    "max-width": aa.length * 392 + "px !important"
                })
            }
            var ae = _$$(".banner.section");
            for (var ab = 0; ab < ae.length; ab++) {
                var Z = ae[ab];
                var Y = jlQX(".items", Z);
                var aa = _$$("li", Y);
                dsun(Y, {
                    width: aa.length * 191 + "px !important",
                    "max-width": aa.length * 191 + "px !important"
                })
            }
            var aa = _$$("#store-nav li a");
            for (var ab = 0; ab < aa.length; ab++) {
                var ad = aa[ab];
                if (yBuq(ad, "data-event-mo-status")) {
                    continue
                }
                Mrvh(ad, {
                    "data-event-mo-status": 1
                });
                fswd(ad, h ? "touchstart" : "mouseover", function(ag) {
                    if (aWqS(ag.target.parentNode, "categories")) {
                        f.GBkg(function(ah) {
                            if (!ah) {
                                var ai = jlQX("#store-nav li.categories a");
                                Swvv(ai, "selected")
                            }
                        }, ag);
                        return
                    }
                    var af = jlQX(".categories-inner");
                    if (af) {
                        ZXsm(af)
                    }
                })
            }
            var ac = jlQX("#store-nav .membership a");
            if (ac && !yBuq(ac, "data-event-ma-status")) {
                Mrvh(ac, {
                    "data-event-ma-status": 1
                });
                fswd(ac, "click", function(af) {
                    af.preventDefault();
                    new r(f, null, {
                        src: "subscribe.php",
                        width: 680
                    }).vDqm()
                })
            }
        },
        Uklr: function(Y, az, ag) {
            new ufaj();
            history.previous_location = window.location.search;
            var aa = this;
            var ah = !!az;
            var az = az || this.items[Y];
            var aE = jlQX(".view.dialog");
            if (aE && !az) {
                var az = {
                    id: yBuq(aE, "data-id"),
                    isbn: yBuq(aE, "data-isbn"),
                    title: jlQX(".title", aE).innerHTML,
                    description: jlQX(".description", aE).innerHTML,
                    publisher: jlQX(".book-info .publisher span:nth-child(2)", aE).innerHTML,
                    translator: jlQX(".book-info .translator span:nth-child(2)", aE).innerHTML,
                    author: jlQX(".book-info .author span:nth-child(2)", aE).innerHTML,
                    format: yBuq(jlQX(".book-info .format", aE), "data-format"),
                    price: (jlQX(".price", aE) ? yBuq(jlQX(".price", aE), "data-price") : ""),
                    price_unit: (jlQX(".price", aE) ? yBuq(jlQX(".price", aE), "data-price-unit") : ""),
                    permission: (jlQX(".btn-read-now", aE) ? yBuq(jlQX(".btn-read-now", aE), "data-permission") : ""),
                    word_count: (jlQX(".word-count", aE) ? yBuq(jlQX(".word-count", aE), "data-word-count") : 0)
                }
            }
            if (!az || !az.isbn) {
                window.location = "?view=welcome&action=not-available";
                return
            }
            if (!az.description) {
                az.description = " "
            }
            if (!az.publisher) {
                az.publisher = " "
            }
            document.title = az.title + " - " + az.author;
            var ap = az.isbn;
            var af = aE && aWqS(aE, "preload");
            if (af) {
                var aD = SKeG(this.store_nav, true);
                sDrg(aD, aE, "top");
                var am = SKeG(this.store_footer, true);
                sDrg(am, aE, "bottom")
            } else {
                if (aE) {
                    ZXsm(aE)
                }
                aE = SKeG(this.view_inner, true);
                sDrg(aE, document.body)
            }
            if (af) {
                mfAw(aE, "position", "static")
            } else {
                mfAw(aE, "position", "absolute")
            }
            ldxQ(aE, "__view__");
            Swvv(aE, "preload");
            if (az.title) {
                Mrvh(jlQX(".title", aE), {
                    html: az.title
                })
            }
            if (az.author) {
                Mrvh(jlQX(".author", aE), {
                    html: az.author
                })
            }
            if (az.subtitle) {
                Mrvh(jlQX(".subtitle", aE), {
                    html: az.subtitle
                })
            }
            if (az.description) {
                Mrvh(jlQX(".description", aE), {
                    html: az.description
                })
            }
            if (az.author) {
                Mrvh(jlQX(".book-info .author span:nth-child(2)", aE), {
                    html: az.author
                })
            }
            if (az.publisher) {
                Mrvh(jlQX(".book-info .publisher span:nth-child(2)", aE), {
                    html: az.publisher
                })
            }
            if (az.translator) {
                Mrvh(jlQX(".book-info .translator span:nth-child(2)", aE), {
                    html: az.translator
                })
            }
            if (az.word_count > 1) {
                Mrvh(jlQX(".book-info .word-count span:nth-child(2)", aE), {
                    html: parseInt(az.word_count).formatMoney(0, ",", ".")
                });
                var at = parseInt(az.word_count / 200);
                var ax = Math.floor(at / 60);
                var at = at % 60;
                var aq = o.book_reading_time.replace("{hours}", ax).replace("{minutes}", at);
                Mrvh(jlQX(".book-info .reading-time span:nth-child(2)", aE), {
                    html: aq
                });
                mfAw(jlQX(".book-info .word-count"), "display", "block");
                mfAw(jlQX(".book-info .reading-time"), "display", "block")
            } else {
                mfAw(jlQX(".book-info .word-count"), "display", "none");
                mfAw(jlQX(".book-info .reading-time"), "display", "none")
            }
            if (az.price) {
                var ar = jlQX(".price a", aE);
                Mrvh(ar, {
                    "data-price": az.price,
                    "data-price-unit": az.price_unit,
                    html: parseInt(az.price).formatMoney(0, ",", ".") + (az.price_unit == "VND" ? "đ" : az.price_unit),
                    href: yBuq(ar, "href").replace("@{id}", az.id)
                });
                fswd(ar, "click", function(aG) {
                    aG.preventDefault();
                    new r(f, null, {
                        src: yBuq(this, "href"),
                        height: 420
                    }).vDqm()
                });
                fswd(jlQX(".premium a", aE), "click", function(aG) {
                    aG.preventDefault();
                    new r(f, null, {
                        src: yBuq(this, "href"),
                        height: 380
                    }).vDqm()
                })
            }
            mfAw(jlQX(".book-info .translator", aE), "display", az.translator ? "" : "none");
            var X = jlQX(".published-time span:nth-child(2)", aE);
            var aA = X.innerHTML;
            var aC = new Date(aA.length > 0 ? aA : az.published_time);
            var ay = aC.toLocaleString();
            Mrvh(X, {
                html: ay
            });
            var ao = oNow();
            var ac = ao.width;
            if (ac < 600) {
                ac = ao.width
            }
            var ai = (ao.width - ac) / 2;
            var aF = jlQX("figure.cover img", aE);
            dsun(aF, {
                "max-height": ao.height - 100 + "px"
            });
            if (az.url) {
                if (az.cover.slice(0, 4) != "http") {
                    cover = az.url + (ac < 600 ? az.cover : az.cover.replace("cover.", "cover_l."))
                } else {
                    cover = az.url + az.cover
                }
                Mrvh(aF, {
                    src: cover
                })
            }
            dsun(aE, {
                left: ai + "px",
                top: "96px",
                display: "block"
            });
            var an = _$$(".btn-close", aE);
            for (var av = 0; av < an.length; av++) {
                var ak = an[av];
                if (af) {
                    mfAw(ak, "display", "none")
                } else {
                    mfAw(ak, "display", "inline-block");
                    fswd(ak, E, function(aH) {
                        aH.preventDefault();
                        var aG = fxen(this, ".dialog");
                        if (aG) {
                            ZXsm(aG)
                        }
                        window.scrollTo(0, window.current_pageYOffset);
                        new ufaj();
                        if ("pushState" in history) {
                            history.pushState("", document.title, history.previous_location)
                        }
                    })
                }
            }
            var ab = jlQX(".btn-save-later", aE);
            Mrvh(ab, {
                "data-id": Y
            });
            aa.item = az;
            fswd(ab, E, function(aG) {
                aa.DzTJ(aG);
                new u(f.user_id).Amtz({
                    action: "save-for-later"
                })
            });
            var ae = jlQX(".btn-read-now", aE);
            if (ae) {
                fswd(ae, E, function(aG) {
                    aG.preventDefault();
                    aG.QBvc = ap;
                    aG.store_id = Y;
                    aa.GuzA(aG)
                })
            }
            var al = jlQX(".btn-request-book", aE);
            if (al) {
                fswd(al, E, function(aG) {
                    aG.preventDefault();
                    new u(f.user_id).Amtz({
                        action: "request-book",
                        title: aa.item.title,
                        author: aa.item.author,
                        isbn: aa.item.isbn,
                        book_id: aa.item.id
                    });
                    alert(o.request_book_thankyou)
                })
            }
            var Z = "https://read.alezaa.com/?sid=" + Y + "&ref=plugin";
            var aj = az.title + " - " + az.author;
            var an = _$$(".social-share a.icon, .social-share a.btn-report-content", aE);
            for (var av = 0; av < an.length; av++) {
                var az = an[av];
                var ad = encodeURIComponent(Z);
                var au = az.href.replace(new RegExp("{share_url}", "g"), ad);
                au = au.replace(new RegExp("{text}", "g"), aj);
                au = au.replace(new RegExp("{subject}", "g"), aj);
                Mrvh(az, {
                    href: au
                });
                fswd(az, E, function(aI) {
                    if (h) {
                        return
                    }
                    aI.preventDefault();
                    var aG = oNow();
                    var aH = (aG.width - 540) / 2;
                    var aJ = (aG.height - 400) / 2;
                    window.open(yBuq(this, "href"), "targetWindow", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,top=" + aJ + ",left=" + aH + ",width=540,height=420");
                    new u(f.user_id).Amtz({
                        action: "share-social",
                        name: yBuq(this, "title"),
                        ref: "plugin"
                    })
                })
            }
            this.hOhO();
            if (window.pageYOffset > 0) {
                window.current_pageYOffset = window.pageYOffset
            }
            window.scrollTo(0, 0);
            var aw = function(aH, aG) {
                aa.onLoadRelatedItems(aH, function(aI) {
                    if (!aI || !aI.outputs) {
                        return
                    }
                    var aL = aI.outputs[0].recs;
                    var aR = jlQX(".related-items");
                    var aQ = oNow();
                    aQ.width > 600 ? ldxQ(aR, "grid") : Swvv(aR, "grid");
                    var aK = jlQX(".related-items ul.items");
                    gvVx(aK);
                    for (var aJ = 0; aJ < aL.length; aJ++) {
                        var aO = aL[aJ];
                        var aP = aO.image.replace("https://", "//").replace("http://", "//");
                        var aN = SKeG(aa.section_item, true);
                        var aM = "?sid=" + aO.id + "&ref=related";
                        Mrvh(jlQX("a.cover", aN), {
                            href: aM
                        });
                        Mrvh(jlQX(".text a", aN), {
                            href: aM
                        });
                        Mrvh(jlQX(".title", aN), {
                            html: aO.title
                        });
                        Mrvh(jlQX(".creator", aN), {
                            html: aO.author
                        });
                        Mrvh(jlQX(".cover img", aN), {
                            src: aP
                        });
                        sDrg(aN, aK);
                        aa.items[aO.id] = aO
                    }
                    if (aG) {
                        aa.hOhO()
                    }
                })
            };
            if (!af && !ah) {
                var aa = this;
                this.onLoadLaneInfo(Y, function(aG) {
                    if (b && b.QBvc) {
                        return
                    }
                    aG = JSON.parse(aG);
                    if (aG.store_priority < 0) {
                        window.location = "index.php?item=not-available";
                        return
                    }
                    aa.Uklr(Y, aG);
                    aw(Y, true)
                })
            } else {
                aw(Y, !af)
            }
            if ("pushState" in history && !ah) {
                var aB = nmwG(ag || window.location.search);
                if (!ag) {
                    var ag = "?sid=" + Y;
                    if (aB.ref) {
                        ag += "&ref=" + aB.ref
                    }
                }
                history.pushState("", document.title, ag);
                new u(f.user_id).Amtz({
                    action: "open_view",
                    name: "view_item",
                    store_id: Y,
                    book_id: ap,
                    ref: aB.ref || "store"
                })
            }
        },
        zBwp: function(Y) {
            var X = this;
            K(true);
            this.orNp();
            X.need_load_more = false;
            X.current_offset = 0;
            X.onLoadListBrandItemDataSource(Y, function(aa, Z) {
                K(false);
                if (!Z) {
                    return
                }
                X.max = 1000;
                X.back_to_home = true;
                document.title = aa.name;
                if (aa.featured_tags) {
                    X.categories = aa.featured_tags.split(",")
                } else {
                    X.categories = [aa.name]
                }
                X.parent_subtitle = aa.period;
                X.qeqa(Z);
                window.scrollTo(0, 0);
                if ("pushState" in history) {
                    history.pushState("", document.title, "?brand=" + Y)
                }
                new u(f.user_id).Amtz({
                    action: "open_view",
                    name: "brand"
                })
            })
        },
        nevg: function(am, aa) {
            var ab = this;
            var Y = 0;
            var ah = jlQX(".section.load-more", ab.inner);
            if (ah) {
                var Y = tvdw(ah).y
            }
            K(true);
            this.orNp();
            var ak = this.info.id;
            var aa = parseInt(aa) || 0;
            var al = f.cizU(this.info);
            if (al.length > 0) {
                this.dtags = al;
                gvVx(this.subcate_inner);
                gvVx(this.populartag_inner);
                var ai = "";
                var ag = al[0];
                for (var X in ag) {
                    var Z = ag[X];
                    for (var ac = 0; ac < Z.length; ac++) {
                        sub = Z[ac];
                        if (sub == am) {
                            ai = X;
                            break
                        }
                    }
                }
                var ad = al[0][ai || am] || [];
                mfAw(this.subcate_inner, "display", (ad.length > 0 ? "block" : "none"));
                for (var ac = 0; ac < ad.length; ac++) {
                    var ae = ad[ac];
                    var aj = SKeG(this.subcate_item, true);
                    var af = jlQX("a", aj);
                    Mrvh(af, {
                        html: ae,
                        href: "?browse=" + encodeURIComponent(ae)
                    });
                    if (ae == am) {
                        ldxQ(af, "selected")
                    } else {
                        Swvv(af, "selected")
                    }
                    sDrg(aj, this.subcate_inner)
                }
                ab.parent_category = ai;
                ab.parent_subtitle = ""
            }
            ab.onLoadListBrandItemByTagsDataSource(ak, am, aa, function(an) {
                if (!an) {
                    return
                }
                var ao = am;
                ab.max = 1000;
                ab.back_to_home = true;
                ab.current_tags = am;
                ab.current_offset = aa;
                ab.need_load_more = true;
                ab.categories = [ao];
                document.title = ao;
                ab.qeqa(an);
                if (aa == 0) {
                    window.scrollTo(0, 0)
                } else {
                    window.scrollTo(0, Y)
                }
                if ("pushState" in history) {
                    history.pushState("", document.title, "?browse=" + encodeURIComponent(am) + (aa > 0 ? "&offset=" + aa : ""))
                }
                new u(f.user_id).Amtz({
                    action: "open_view",
                    name: "browse"
                })
            })
        },
        orNp: function() {
            var aa = jlQX(".categories-inner");
            if (aa) {
                ZXsm(aa)
            }
            var Z = _$$(".__view__, .dialog");
            for (var ab = 0; ab < Z.length; ab++) {
                mfAw(Z[ab], "display", "none")
            }
            var Y = jlQX(".nav");
            if (Y) {
                dsun(Y, {
                    position: "static"
                })
            }
            var ac = jlQX("#store-nav");
            if (ac) {
                dsun(ac, {
                    position: "static"
                })
            }
            var X = jlQX("#store-nav li.store a");
            if (X) {
                Swvv(X, "selected")
            }
            var aa = jlQX("#sub-cate ul.items");
            if (aa) {
                gvVx(aa)
            }
        },
        GuzA: function(ab) {
            var af = ab.QBvc;
            var ae = ab.store_id;
            if (f.user_id && this.item.permission != "none") {
                f.fsJg(af, null, ae);
                new u(f.user_id).Amtz({
                    action: "read-now"
                })
            } else {
                var X = jlQX(".btn-read-now");
                var Z = tMgz("div");
                ldxQ(Z, "context-menu");
                dsun(Z, {
                    "min-width": "160px",
                    "max-width": "250px",
                    "padding-top": "20px !important"
                });
                var ag = [];
                if (!f.user_id) {
                    ag.push('<p><a class="login-with-facebook" href="#" data-book-id="' + af + '" data-store-id="' + ae + '">' + o.login_with_facebook_free + "</a></p>");
                    ag.push('<p><a class="login-with-alezaa" href="login.php?ru=' + encodeURIComponent("index.php?sid=" + ae) + '" data-book-id="' + af + '" data-store-id="' + ae + '">' + o.login_with_alezaa + "</a></p>")
                }
                if (!this.item.permission || this.item.permission == "none") {
                    ag.push('<p><a class="buy" href="buy.php?id=' + ae + '" data-book-id="' + af + '" data-store-id="' + ae + '">' + o.buy + "</a></p>");
                    ag.push('<p><a class="try-sample" href="#" data-book-id="' + af + '" data-store-id="' + ae + '">' + o.try_sample + "</a></p>")
                }
                Z.innerHTML = ag.join("");
                var ac = tvdw(X);
                var ad = X.getBoundingClientRect();
                ac.x += ad.width / 2;
                ac.y += 20;
                new ufaj(document.body, Z, null, {
                    bgcolorstart: "#fff",
                    bgcolorstop: "#fefefe",
                    linearheight: 45,
                    kpos: ac,
                    padding: {
                        left: 0,
                        top: 0
                    },
                    stroke: ""
                }).vDqm();
                var aa = jlQX("a.login-with-facebook", Z);
                if (aa) {
                    fswd(aa, O, function(ah) {
                        ah.preventDefault();
                        if ("localStorage" in window) {
                            try {
                                localStorage["request-book-id"] = af
                            } catch (ah) {}
                        }
                        new ufaj();
                        K(true);
                        f.dvud(function(aj) {
                            var ak = new u(f.user_id).uid;
                            var ai = f;
                            i.PFGf(f.fb_access_token, ak, function(al) {
                                K(false);
                                ai.user_id = al.user_id || 0;
                                ai.fb_id = al.fb_id || "";
                                ai.display_name = al.display_name || "";
                                ai.user_verifed = al.verified;
                                ai.fb_response = al;
                                if (ai.user_id) {
                                    var an = jlQX(".account-nav .login");
                                    mfAw(an, "display", "inline-block");
                                    var an = jlQX(".account-nav .library");
                                    mfAw(an, "display", "inline-block");
                                    var an = jlQX(".account-nav .foryou");
                                    if (an) {
                                        mfAw(an, "display", "inline-block")
                                    }
                                    var an = jlQX(".account-nav .store");
                                    if (an) {
                                        mfAw(an, "display", "inline-block")
                                    }
                                    var am = "//graph.facebook.com/" + al.fb_id + "/picture";
                                    var an = jlQX(".account-nav .login");
                                    ldxQ(an, "icon");
                                    mfAw(an, "background-image", "url(" + am + ")");
                                    Mrvh(an, {
                                        html: " ",
                                        "data-status": 1,
                                        "data-fb-id": al.fb_id,
                                        "data-name": al.name,
                                        title: al.display_name
                                    });
                                    f.fsJg(af, null, ae);
                                    new u(f.user_id).Amtz({
                                        action: "read-now"
                                    })
                                }
                            })
                        })
                    })
                }
                var Y = jlQX("a.buy", Z);
                if (Y) {
                    fswd(Y, O, function(ai) {
                        ai.preventDefault();
                        var ah = yBuq(this, "href");
                        new ufaj();
                        new r(f, null, {
                            src: ah,
                            height: 400
                        }).vDqm()
                    })
                }
                fswd(jlQX("a.try-sample", Z), O, function(ai) {
                    ai.preventDefault();
                    if (h || true) {
                        f.fsJg(af, null, ae)
                    } else {
                        var ah = "?id=" + af;
                        new ufaj();
                        new r(f, null, {
                            src: ah,
                            width: 600,
                            height: 1000
                        }).vDqm()
                    }
                    new u(f.user_id).Amtz({
                        action: "read-now"
                    })
                })
            }
        },
        DzTJ: function(Y) {
            Y.preventDefault();
            if (!this.app.user_id) {
                if (confirm(o.login_for_save)) {
                    window.location = "login.php?ru=index.php?sid=" + yBuq(Y.target, "data-id")
                }
                return
            }
            var X = this;
            if (aWqS(Y.target, "loading")) {
                return
            }
            ldxQ(Y.target, "loading");
            this.app.onLoadListCollection(function(aa) {
                var ad = jlQX(".btn-save-later");
                Swvv(ad, "loading");
                this.collections = aa;
                var ac = tMgz("div");
                ldxQ(ac, "context-menu");
                dsun(ac, {
                    "min-width": "160px",
                    "max-width": "240px",
                    "padding-top": "20px !important"
                });
                var ai = "";
                var Z = "";
                for (var ab = 0; ab < this.collections.length; ab++) {
                    var ah = this.collections[ab];
                    if (ah.name == "HOME_COLLECTION") {
                        ah.name = "Home"
                    }
                    if (ah.id == this.collection_id) {
                        Z = ah.name;
                        continue
                    }
                    ai += '<p><a href="#" data-collection-id="' + ah.id + '" data-book-id="' + Y.QBvc + '" data-id="' + ah.id + '">' + ah.name + "</a></p>"
                }
                ac.innerHTML = ai;
                var ag = tvdw(ad);
                var af = ad.getBoundingClientRect();
                ag.x += af.width / 2;
                ag.y += 20;
                new ufaj(document.body, ac, null, {
                    bgcolorstart: "#fff",
                    bgcolorstop: "#fefefe",
                    linearheight: 45,
                    kpos: ag,
                    padding: {
                        left: 0,
                        top: 0
                    },
                    stroke: ""
                }).vDqm();
                var ae = _$$("a", ac);
                for (var ab = 0; ab < ae.length; ab++) {
                    var ah = ae[ab];
                    fswd(ah, O, function(am) {
                        am.preventDefault();
                        var ak = yBuq(this, "data-collection-id");
                        var al = X.item;
                        al.collection_id = ak;
                        if (!f.user_id) {
                            if (confirm(o.login_for_save)) {
                                f.wfYt(function() {
                                    f.DrCP(f.onFacebookStatus)
                                })
                            }
                            return
                        }
                        var aj = new M(X.app.user_id);
                        aj.Bjho(al.isbn);
                        aj.dynx(al.isbn, al);
                        aj.aMur("");
                        aj.lcwS(0, {
                            start: 0,
                            word: 0
                        }, 0);
                        new ufaj()
                    })
                }
            })
        },
        rejntu: function() {
            this.qeqa()
        },
        LdEt: function(X) {},
        onResized: function() {
            var Z = oNow();
            var Y = Z.width > 700 && !isMobile.tfCS();
            Swvv(this.inner, Y ? "list" : "grid");
            ldxQ(this.inner, Y ? "grid" : "list");
            var X = jlQX("section.related-items");
            if (X) {
                Swvv(X, Y ? "list" : "grid");
                ldxQ(X, Y ? "grid" : "list")
            }
        },
        onLoadListBrandItemDataSource: function(X, Y) {},
        onLoadListBrandItemByTagsDataSource: function(Y, X, Z, aa) {},
        onLoadLaneInfo: function(Y, X) {},
        onLoadRelatedItems: function(Y, X) {}
    });
    var I = new Class({
        initialize: function(Y, X) {
            this.app = Y;
            this.container = X;
            this.inner = jlQX("section", this.container);
            this.section_inner = SKeG(jlQX("ul.items", this.container), true);
            this.section_item = SKeG(jlQX("li", this.section_inner), true);
            gvVx(this.inner);
            this.nklS = new M(this.app.user_id);
            this.init();
            this.categories = []
        },
        init: function() {
            var X = this;
            var aa = oNow();
            var Z = Math.max(aa.width / 5, 60);
            var Y = Math.min(aa.width * 2 / 3, 800) - Z / 2;
            this.onResized()
        },
        GGTt: function() {
            if (!this.info) {
                return this.categories
            }
            return this.info.featured_tags.split(",")
        },
        qeqa: function(Y) {
            if (!Y) {
                return
            }
            this.categories = this.GGTt();
            this.items = Y;
            var aa = SKeG(this.section_inner, true);
            gvVx(aa);
            for (var Z = 0; Z < this.categories.length; Z++) {
                var ac = this.categories[Z];
                if (ac[0] == "#") {
                    continue
                }
                if (ac.indexOf(":") != -1) {
                    continue
                }
                var X = SKeG(this.section_item, true);
                Mrvh(jlQX("a.title .text", X), {
                    html: ac
                });
                Mrvh(jlQX("a.title", X), {
                    href: "?browse=" + encodeURIComponent(ac)
                });
                var ab = this.items[ac];
                if (ab) {
                    ab = ab[0];
                    var ad = (ab.url || "") + ab.cover;
                    ad = ad.replace("https://", "//").replace("http://", "//");
                    dsun(jlQX("a.title .avt", X), {
                        "background-image": "url(" + ad + ")"
                    })
                }
                sDrg(X, aa)
            }
            sDrg(aa, this.container)
        },
        rejntu: function() {
            this.qeqa()
        },
        LdEt: function(X) {},
        onResized: function() {
            var Y = oNow();
            var X = Y.width > 700 && !isMobile.tfCS();
            Swvv(this.inner, X ? "list" : "grid");
            ldxQ(this.inner, X ? "grid" : "list")
        }
    });
    var N = new Class({
        initialize: function(Y, X) {
            this.app = Y;
            this.container = X;
            this.init()
        },
        init: function() {
            var X = this;
            var ac = oNow();
            var ab = Math.max(ac.width / 5, 60);
            var Y = Math.min(ac.width * 2 / 3, 800) - ab / 2;
            this.onResized();
            var ad = jlQX(".account-nav .login");
            mfAw(ad, "display", "none");
            var Z = _$$(".search", this.container);
            for (var aa = 0; aa < Z.length; aa++) {
                var ad = Z[aa];
                fswd(ad, "click", function(ae) {
                    ae.preventDefault();
                    X.app.Smsc()
                })
            }
            var ad = jlQX("a.button.login");
            fswd(ad, "click", function(ae) {
                ae.preventDefault();
                window.location = "login.php"
            });
            var ad = jlQX("a.button.login-with-facebook");
            fswd(ad, "click", function(ae) {
                ae.preventDefault();
                if (aWqS(this, "connected")) {
                    X.onLoginWithFacebook()
                } else {
                    X.app.dvud(X.app.onLoginWithFacebook)
                }
            });
            var ad = jlQX(".app-version");
            if (ad) {
                ad.innerHTML = ad.innerHTML.replace("@{app-version}", Q)
            }
        },
        onResized: function() {},
        LdEt: function() {}
    });
    var S = function() {
        var X = jlQX("section.inner");
        X.innerHTML = "<h2>:(</h2><p>Cloud Reader is not compatible with your browser yet. We are working hard on that as well.</p>"
    };
    var K = function(X) {
        var aa = _$("__loading__");
        if (!X) {
            if (aa) {
                ZXsm(aa)
            }
            return
        }
        if (!aa) {
            aa = tMgz("div");
            aa.id = "__loading__";
            dsun(aa, {
                position: "fixed",
                margin: "0px",
                padding: "0px",
                "z-index": "1000",
                left: "0px",
                top: "0px"
            });
            sDrg(aa, jlQX("body"));
            var Z = tMgz("div");
            Z.innerHTML = '			    <div class="timeline-item">			        <div class="animated-background">			            <div class="background-masker header-top"></div>			            <div class="background-masker header-left"></div>			            <div class="background-masker header-right"></div>			            <div class="background-masker header-bottom"></div>			            <div class="background-masker subheader-left"></div>			            <div class="background-masker subheader-right"></div>			            <div class="background-masker subheader-bottom"></div>			            <div class="background-masker content-top"></div>			            <div class="background-masker content-first-end"></div>			            <div class="background-masker content-second-line"></div>			            <div class="background-masker content-second-end"></div>			            <div class="background-masker content-third-line"></div>			            <div class="background-masker content-third-end"></div>			        </div>			    </div>				';
            ldxQ(Z, "timeline-wrapper");
            dsun(Z, {
                position: "fixed",
                margin: "0px",
                padding: "0px"
            });
            sDrg(Z, aa)
        }
        var Y = oNow();
        dsun(aa, {
            width: Y.width + "px",
            height: Y.height + "px"
        })
    };
    var d = new Class({
        initialize: function(X) {
            this.book = X
        },
        isEf: function(X) {}
    });
    var v = new Class({
        initialize: function(X) {
            this.app = X;
            this.baseURL = "//richanchor.com/alezaaSearcher/"
        },
        open: function() {
            this.close();
            this.fb_id = this.app.fb_id;
            var Y = oNow();
            var X = tMgz("div");
            dsun(X, {
                width: Y.width + "px",
                height: Y.height + "px"
            });
            ldxQ(X, "__view__");
            ldxQ(X, "search-container");
            window.scrollTo(0, 0);
            dsun(document.body, {
                overflow: "hidden"
            });
            var aa = tMgz("div");
            ldxQ(aa, "search-box");
            sDrg(aa, X);
            this.inner = aa;
            var Z = tMgz("input");
            Mrvh(Z, {
                type: "search",
                autocomplete: "off",
                placeholder: "Alezaa Instant Search"
            });
            sDrg(Z, aa);
            sDrg(X, document.body);
            this.container = X;
            fswd(Z, "keyup", this.onTextChanged);
            Z.focus();
            var Z = tMgz("ul");
            ldxQ(Z, "results");
            sDrg(Z, aa);
            this.onResized();
            fswd(X, E, function(ab) {
                if (R && ab.target.tagName != "A" && (!fxen(ab.target, ".search-box") && !aWqS(ab.target, "search-box"))) {
                    R.close()
                }
            })
        },
        close: function() {
            clearTimeout(this.recentTimer);
            dsun(document.body, {
                overflow: "auto"
            });
            window.scrollTo(0, 0);
            var X = jlQX(".search-container");
            if (X) {
                ZXsm(X)
            }
        },
        kqkB: function() {
            var X = jlQX(".search-box");
            if (X) {
                this.close()
            } else {
                this.open()
            }
        },
        isEf: function(aa) {
            var Y = function() {
                var ab = jlQX(".results", R.inner);
                gvVx(ab);
                ab.scrollTop = 0;
                mfAw(ab, "display", "none");
                return ab
            };
            var Z = function(ae, ag) {
                var ac = '<div class="cover">									<a href=":link"><img src=":cover"/></a>								</div>								<div class="text">									<a class="title" href=":link">:title</a>									<span class="author">:author</span>									<span class="type">:type</span>								</div>';
                var af = ae.id || ae.isbn;
                var ad = "?sid=" + af + "&ref=search";
                if (ae.sectionId) {
                    ad = "?id=" + ae.isbn + "&lo=" + ae.sectionId + ".0.0&ref=search"
                }
                var ab = tMgz("li");
                Mrvh(ab, {
                    "data-id": ae.id || ae.isbn,
                    "data-isbn": ae.isbn,
                    html: ac.replaceArray([":link", ":title", ":type", ":cover", ":author"], [ad, ae.title, ae.type || "book", ae.image || "data:image/gif;lnWo,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", ae.author])
                });
                sDrg(ab, ag)
            };
            if (!aa) {
                return Y()
            }
            R.request_id = (new Date()).getTime();
            var X = this;
            JSONP(this.baseURL, {
                f: "jsonp",
                target: "book,sample,article",
                q: aa,
                psize: 10,
                fb_id: this.fb_id,
                request_id: R.request_id
            }, function(ae) {
                if (!ae) {
                    return
                }
                var aj = ae.output;
                if (aj) {
                    if (R.request_id && ae.input.request_id != R.request_id) {
                        return
                    }
                    var ab = Y();
                    var ai = jlQX("input[type=search]", R.container).value;
                    if (ai.length == 0) {
                        return
                    }
                    if (aj.length > 0) {
                        mfAw(ab, "display", "block")
                    }
                    for (var ag = 0; ag < aj.length; ag++) {
                        var ad = aj[ag];
                        var ah = ad.items;
                        for (var af = 0; af < ah.length; af++) {
                            var ak = ah[af];
                            Z(ak, ab)
                        }
                    }
                    var ah = _$$("a", ab);
                    for (var ag = 0; ag < ah.length; ag++) {
                        var ac = ah[ag];
                        fswd(ac, "click", function(al) {
                            al.preventDefault();
                            K(true);
                            window.location = yBuq(this, "href")
                        })
                    }
                    window.logging_ts = null;
                    new u(f.user_id).Amtz({
                        action: "search",
                        query: ai,
                        ref: "search"
                    })
                }
            })
        },
        onTextChanged: function(Y) {
            var X = this;
            clearTimeout(this.timer);
            this.timer = setTimeout(function() {
                if (Y.keyCode == 27) {
                    return R.close()
                }
                var aa = jlQX("input[type=search]", R.container).value;
                if (Y.keyCode == 13) {
                    var Z = jlQX(".results li a", R.inner);
                    if (Z) {
                        K(true);
                        window.location = yBuq(Z, "href");
                        return
                    }
                }
                if (X.query == aa && aa) {
                    return
                }
                X.query = aa;
                R.isEf(aa)
            }, 300)
        },
        onResized: function() {
            var X = this.inner;
            if (!X) {
                return
            }
            var Y = oNow();
            dsun(this.container, {
                width: Y.width + "px",
                height: Y.height + "px"
            });
            var aa = Math.min(Y.width, 450);
            var ab = Y.width > 700 ? 90 : Y.width > 450 ? 54 : 54;
            dsun(X, {
                top: ab + "px",
                left: (Y.width - aa - 2) / 2 + "px",
                width: aa + "px"
            });
            var Z = jlQX("input[type=search]", X);
            dsun(Z, {
                width: aa - 20 + "px"
            });
            var Z = jlQX(".results", X);
            if (Z) {
                dsun(Z, {
                    "max-height": (Y.height - 2 * ab - 40) + "px"
                })
            }
        }
    });
    var U = new Class({
        initialize: function(X) {
            this.doc = X;
            this.ads = [{
                size: {
                    width: 320,
                    height: 500
                },
                brand: "Admatic",
                embed: "//d.admatic.vn/deliver?pub=Q7R&w=320&h=500"
            }, {
                size: {
                    width: 468,
                    height: 60
                },
                brand: "Admatic",
                embed: "//d.admatic.vn/deliver?pub=Q7R&w=320&h=50"
            }, {
                size: {
                    width: 600,
                    height: 800
                },
                brand: "Admatic",
                embed: "//d.admatic.vn/deliver?pub=Q7R&w=600&h=800"
            }];
            this.SVG_IMG = "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='@{width}px' height='@{height}px'  xml:space='preserve'><rect style='fill:rgba(230,230,230,0.3)' width='100%%' height='100%%'></rect></svg>"
        },
        idgo: function() {
            if (!f.user_info || f.user_info.user_type != 5) {
                return
            }
            var Z = this.doc.childNodes;
            var X = Z.length;
            if (X < 10) {
                return
            }
            var ac = Math.min(Math.max(parseInt(Math.random(10) * 10), 5), X);
            var aa = ac + 2;
            while (aa < X) {
                var ab = Z[aa];
                if (ab && ab.tagName) {
                    var Y = this.uvFv();
                    dwED(Y, ab, "after")
                }
                var ad = Math.floor(Math.random() * ac) + 1;
                aa += ac + ad
            }
            return
        },
        uvFv: function() {
            var Z = tMgz("img");
            var ac = this.ads[Math.round(Math.min(Math.random() * this.ads.length, this.ads.length - 1))];
            var X = GnqH(this.SVG_IMG.replace("@{width}", ac.size.width).replace("@{height}", ac.size.height));
            Mrvh(Z, {
                "data-type": "ad-display",
                src: "data:image/svg+xml;base64," + X,
                "data-src": ac.poster,
                width: ac.size.width + "px",
                height: ac.size.height + "px",
                "data-width": ac.size.width,
                "data-height": ac.size.height
            });
            if (ac.embed) {
                var aa = ac.embed + (ac.embed.indexOf("?") > -1 ? "&" : "?") + "url=" + window.location.href;
                Mrvh(Z, {
                    "data-embed": aa
                })
            }
            var ae = "https://c.alezaa.com/click.html?ru=" + encodeURIComponent(ac.link) + "&ref=alezaa-ad";
            var ab = tMgz("figure");
            ldxQ(ab, "ad-display");
            Mrvh(ab, {
                "data-link": ae
            });
            dsun(ab, {
                "max-width": ac.size.width + "px"
            });
            sDrg(Z, ab);
            var Y = (this.width - ac.size.width);
            var af = tMgz("span");
            Mrvh(af, {
                html: "Sponsored by " + ac.brand
            });
            dsun(af, {
                "font-family": "Arial !important",
                "font-size": "10px !important",
                color: "#999 !important",
                "text-align": "right",
                display: "block"
            });
            sDrg(af, ab);
            return ab
        },
        PrYf: function() {
            var X = _$$("iframe.ad-display");
            for (var Y = 0; Y < X.length; Y++) {
                var Z = X[Y];
                ZXsm(Z)
            }
        },
        aknd: function(Z, X, ad, Y, ab, ac) {
            var aa = tMgz("iframe");
            dsun(aa, {
                position: "absolute",
                left: X + "px",
                top: ad + "px",
                width: Y + "px",
                height: ab + "px",
                "z-index": 1000,
                border: "solid 1px #ddd"
            });
            ldxQ(aa, "ad-display");
            aa.src = ac;
            sDrg(aa, document.body)
        }
    });
    var G = new Class({
        initialize: function(Z, X, Y) {
            this.doc = Z;
            this.docNCX = X;
            this.sectionIndex = Y
        },
        idgo: function() {
            if (this.sectionIndex < 0) {
                return
            }
            var ad = this.docNCX;
            var ac = _$$("navMap > navPoint", ad);
            var ae = this.doc.lastElementChild;
            var ab = "";
            ab += ".__content-whatsnew__{border-top: solid 2px #aa0000; padding-top: 12px; margin-top: 40px; float: left;}";
            ab += ".__content-whatsnew__ a{font-family: Arial !important;}";
            ab += ".__content-whatsnew__ > div{margin: 12px;}";
            ab += ".__content-whatsnew__ .title{font-size: 1.4em; margin-bottom: 12px}";
            ab += ".__content-whatsnew__{font-size: 13px;font-family: Helvetica !important}";
            ab += ".__content-whatsnew__ li a{display: block; padding: 4px 0px;}";
            ab += ".__content-whatsnew__ li.selected a{color: #aa0000;}.__content-whatsnew__ li:hover{color: #d75600;}";
            var af = tMgz("style");
            af.innerHTML = ab;
            var aa = tMgz("ul");
            ldxQ(aa, "__content-whatsnew__");
            for (var Y = 0; Y < ac.length; Y++) {
                var ah = ac[Y];
                href_ = yBuq(jlQX("content", ah), "src");
                var X = tMgz("li");
                var Z = tMgz("a");
                var ag = jlQX("navLabel text", ah).textContent;
                Mrvh(Z, {
                    href: yBuq(jlQX("content", ah), "src"),
                    html: ag
                });
                if (Y == this.sectionIndex) {
                    ldxQ(X, "selected")
                }
                sDrg(Z, X);
                sDrg(X, aa)
            }
            dwED(aa, ae, "after");
            dwED(af, ae);
            return
        }
    });
    var x = new Class({
        initialize: function(X, Y) {
            this.container = X;
            this.sources = Y
        },
        jntu: function(aa, ac) {
            var Z = {};
            var Y = 0;
            var X = 0;
            for (var ab in aa) {
                X++
            }
            for (var ab in aa) {
                Z[ab] = new Image();
                Z[ab].onload = function() {
                    if (++Y >= X) {
                        ac(Z)
                    }
                };
                Z[ab].src = aa[ab]
            }
        },
        GkTV: function(ac) {
            var ab = 0;
            var ad = {
                width: 120,
                height: 180
            };
            var af = Math.min(this.sources.length, 4);
            var aa = Math.ceil(this.sources.length / af);
            var Y = (ad.width + ab) * af;
            var ae = (ad.height + ab) * aa;
            var Z = this.container;
            Z.width = Y * 2;
            Z.height = ae * 2;
            dsun(Z, {
                display: "block",
                width: Y + "px",
                height: ae + "px",
                position: "absolute",
                background: "#eee",
                left: "0px",
                top: "0px",
                visibility: "hidden"
            });
            var X = Z.getContext("2d");
            this.jntu(this.sources, function(ag) {
                var al = ab;
                var am = ab;
                var aj = 0;
                for (var ai in ag) {
                    var ah = (ad.width + ab) * 2;
                    var ak = (ad.height + ab) * 2;
                    X.drawImage(ag[ai], al, am, ah, ak);
                    if (aj % af == af - 1) {
                        al = ab;
                        am += ak + ab
                    } else {
                        al += ah + ab
                    }
                    aj++
                }
                if (ac) {
                    ac(Z)
                } else {
                    mfAw(Z, "visibility", "visible")
                }
            })
        }
    });
    var u = new Class({
        initialize: function(Y) {
            this.user_id = Y || 0;
            var Z;
            var X = "localStorage" in window;
            if (X) {
                Z = localStorage._uid
            }
            if (!Z) {
                Z = this.Rwqx();
                if (X) {
                    try {
                        localStorage._uid = Z
                    } catch (aa) {}
                }
            }
            this.uid = Z
        },
        luuu: function(X) {
            var aa = "";
            var Y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var Z = 0; Z < X; Z++) {
                aa += Y.charAt(Math.floor(Math.random() * Y.length))
            }
            return aa
        },
        Rwqx: function() {
            return eHqc(this.luuu(50))
        },
        Amtz: function(Z) {
            var ab = this;
            var Y = new Date().getTime();
            if (window.logging_ts && Y - window.logging_ts < 2000) {
                return
            }
            window.logging_ts = Y;
            var af = [];
            for (var aa in Z) {
                var ag = Z[aa];
                af.push(aa + "=" + encodeURIComponent(ag))
            }
            var ae = af.join("&");
            var X = "//c.alezaa.com/alezaa.gif?u_id=" + ab.user_id + "&uid=" + ab.uid + "&url=" + encodeURIComponent(window.location.href);
            if (ae) {
                X += "&" + ae
            }
            var ac = tMgz("img");
            ac.src = X;
            if (Z.action in {
                    open_view: 1,
                    open_book: 2,
                    page_turned: 3,
                    browse_brand_item: 4,
                    search: 5
                }) {
                function ad(ak, ai, aj) {
                    var ah = document.createElement("script");
                    ah.src = "//www.google-analytics.com/ga.js";
                    document.getElementsByTagName("head")[0].appendChild(ah);
                    window.ga = window.ga || function() {
                        (ga.q = ga.q || []).push(arguments)
                    };
                    ga.l = +new Date;
                    ga("create", ak, "auto");
                    ga("set", {
                        page: ai,
                        title: aj
                    });
                    if (this.user_id) {
                        ga("set", "userId", this.user_id)
                    }
                    if (Z.ref) {
                        ga("set", "referrer", Z.ref)
                    }
                    if (Z.action == "search" && Z.query) {
                        ga("send", "pageview", "search?q=" + Z.query)
                    } else {
                        ga("send", "pageview")
                    }
                }
                ad("UA-57573307-16", window.location.search, document.title)
            }
        }
    });
    var r = new Class({
        initialize: function(Z, X, Y) {
            this.app = Z;
            this.inner = X;
            this.options = Y || {}
        },
        vDqm: function() {
            var X = this;
            this.app.kwYo("dialog", function(Z) {
                X.container = Z;
                var aa = oNow();
                var ab = Math.min(aa.width - 40, X.options.width || 600);
                var ac = (aa.width - ab) / 2 - 2;
                if (X.inner) {
                    sDrg(X.inner, Z)
                } else {
                    if (X.options.src) {
                        var af = tMgz("iframe");
                        af.onload = function() {
                            var ag = Math.min((af.contentWindow && af.contentWindow.document ? af.contentWindow.document.documentElement.scrollHeight : 0) || X.options.height, aa.height - 90);
                            var ah = Math.max((aa.height - ag - 70) / 2 - 2, 20);
                            dsun(af, {
                                border: "0px",
                                width: "100%",
                                height: ag + "px"
                            });
                            dsun(Z, {
                                top: ah + "px",
                                height: ag + 70 + "px"
                            });
                            dsun(jlQX(".inner", Z), {
                                overflow: "auto",
                                height: ag + 16 + "px",
                                "max-height": ag + 16 + "px"
                            })
                        };
                        var Y = Math.min(X.options.height, 500);
                        Mrvh(af, {
                            border: "0"
                        });
                        dsun(af, {
                            border: "0px",
                            width: "100%",
                            height: Y + "px"
                        });
                        af.src = X.options.src;
                        sDrg(af, jlQX(".inner", Z));
                        var ae = Math.max((aa.height - Y) / 2 - 2, 20);
                        dsun(Z, {
                            top: ae + "px",
                            height: Y + 64 + "px"
                        });
                        dsun(jlQX(".inner", Z), {
                            overflow: "hidden",
                            height: Y + "px",
                            "max-height": Y + "px"
                        })
                    }
                }
                dsun(Z, {
                    position: "fixed",
                    "z-index": 1000,
                    width: ab + "px",
                    "min-height": "100px",
                    height: "auto",
                    left: ac + "px",
                    overflow: "hidden"
                });
                sDrg(Z, document.body);
                var Y = Math.min(Z.getBoundingClientRect().height, X.options.height || 500, aa.height - 40);
                var ae = Math.max((aa.height - Y) / 2 - 2, 20);
                dsun(Z, {
                    height: Y + 2 + "px",
                    top: ae + "px"
                });
                dsun(jlQX(".inner", Z), {
                    overflow: "hidden",
                    height: Y - 64 + "px",
                    "max-height": Y - 64 + "px"
                });
                var ad = jlQX(".btn-close", Z);
                fswd(ad, E, function(ag) {
                    ag.preventDefault();
                    ZXsm(X.container);
                    if (X.comments_inner) {
                        ZXsm(X.comments_inner)
                    }
                })
            })
        }
    });
    var a = new Class({
        initialize: function(Z, Y, X) {
            this.app = Z;
            this.info = Y;
            this.options = X || {}
        },
        vDqm: function() {
            var X = this;
            this.app.kwYo(this.options.note ? "note" : "card", function(Z) {
                X.container = Z;
                if (X.info.text.split(" ").length == 1) {
                    X.info.text = ""
                }
                X.info.user_text = X.asza(X.info.user_text);
                X.info.user_text = X.ldpX(X.info.user_text);
                X.info.user_text = X.info.user_text.trim("\n");
                var Y = X.info.user_text.split("\n");
                var al = [];
                for (var af = 0; af < Y.length; af++) {
                    if (Y[af]) {
                        al.push("<p>" + Y[af] + "</p>")
                    }
                }
                X.info.user_text = al.join("");
                if (!X.info.is_cloud && P != "web") {
                    X.info.text = ""
                }
                var ac = jlQX(".section.content .text", Z);
                if (X.info.text) {
                    Mrvh(ac, {
                        html: X.info.text
                    })
                } else {
                    mfAw(ac, "display", "none")
                }
                var ac = jlQX(".section.content .user-text", Z);
                Mrvh(ac, {
                    html: X.info.user_text
                });
                var ac = jlQX(".section.content .created-time", Z);
                Mrvh(ac, {
                    html: new Date(X.info.created_time || X.info.ts).toLocaleString()
                });
                var am = oNow();
                var aa = Math.min(am.width - 40, 540);
                var aj = (am.width - aa) / 2 - 2;
                dsun(Z, {
                    position: "fixed",
                    "z-index": 1000,
                    width: aa + "px",
                    "min-height": "100px",
                    height: "auto",
                    left: aj + "px"
                });
                sDrg(Z, document.body);
                var ak = Z.getBoundingClientRect().height;
                var ah = Math.max((am.height - ak) / 2 - 2, 44);
                dsun(Z, {
                    "max-height": ak + "px",
                    top: ah + "px"
                });
                var ai = jlQX(".btn-close", Z);
                fswd(ai, E, function(ab) {
                    ab.preventDefault();
                    ZXsm(X.container);
                    if (X.comments_inner) {
                        ZXsm(X.comments_inner)
                    }
                });
                var ae = jlQX(".btn-recommned", Z);
                if (ae) {
                    fswd(ae, E, function(ap) {
                        ap.preventDefault();
                        var ao = new A();
                        var ab = X.info.id;
                        var an = aWqS(this, "recommended") ? 0 : 1;
                        ao.recommend(ab, an, function(aq) {
                            var ar = jlQX(".btn-recommned", Z);
                            if (aq && aq.type == 1) {
                                ldxQ(ar, "recommended")
                            } else {
                                Swvv(ar, "recommended")
                            }
                        })
                    })
                }
                var ad = jlQX(".comment-count-inner", Z);
                if (ad) {
                    fswd(ad, E, function(ab) {
                        ab.preventDefault();
                        X.puvx()
                    })
                }
                var ad = jlQX(".btn-comment", Z);
                if (ad) {
                    fswd(ad, E, function(ab) {
                        ab.preventDefault();
                        X.puvx()
                    })
                }
                if (X.info.user_id) {
                    var ac = jlQX(".section .recommend-count", Z);
                    if (ac) {
                        if (X.info.recommend_count > 0) {
                            Mrvh(ac, {
                                html: X.info.recommend_count || "-"
                            })
                        } else {
                            mfAw(jlQX(".recommend-count-box", Z), "display", "none")
                        }
                    }
                    var ag = new A();
                    ag.qmuQ(X.info.user_id, function(an) {
                        var ao = jlQX(".section .display-name", Z);
                        if (ao) {
                            Mrvh(ao, {
                                html: an.display_name || "-"
                            })
                        }
                        var ao = jlQX(".section .card-count", Z);
                        if (ao) {
                            Mrvh(ao, {
                                html: an.card_count || "-"
                            })
                        }
                        var ao = jlQX(".section .card-recommend-count", Z);
                        if (ao) {
                            Mrvh(ao, {
                                html: an.card_recommend_count || "-"
                            })
                        }
                        if (an.fb_id) {
                            var ao = jlQX(".section.creator .picture", Z);
                            if (ao) {
                                mfAw(ao, "background-image", "url(//graph.facebook.com/" + an.fb_id + "/picture)")
                            }
                        }
                        var ao = jlQX(".section .comment-count", Z);
                        if (ao) {
                            if (X.info.comment_count > 0) {
                                Mrvh(ao, {
                                    html: X.info.comment_count,
                                    "data-comment-count": X.info.comment_count
                                })
                            } else {
                                Mrvh(ao, {
                                    html: o.not_has_comment_yet,
                                    "data-comment-count": 0
                                })
                            }
                        }
                        var ab = X.info.id;
                        ag.OmJI(ab, function(ap) {
                            var aq = jlQX(".btn-recommned", Z);
                            if (ap && ap.type == 1) {
                                ldxQ(aq, "recommended")
                            }
                        })
                    })
                }
            })
        },
        asza: function(Y) {
            var X = {
                "(\\*\\*|__)(.*?)\\1": "<strong>$2</strong>",
                "(\\*|_)(.*?)\\1": "<em>$2</em>",
                "`(.*?)`": "<code>$1</code>",
                "\n-{3,}": "\n<hr/>"
            };
            for (var Z in X) {
                Y = Y.replace(new RegExp(Z, "gm"), X[Z])
            }
            return Y
        },
        ldpX: function(ab) {
            var ad = jlQX(".place-embed", this.container);
            var ae = new RegExp(/\[soundcloud track_id=(.*)\]/gm);
            m = ae.exec(ab);
            if (m) {
                ab = ab.replace(m[0], "");
                var ag = m[1];
                var af = jlQX(".soundcloud-embed", this.container).outerHTML;
                af = af.replace(new RegExp(/@{track_id}/gm), ag);
                af = af.replace("data-src", "src");
                var Y = tMgz("div");
                Y.innerHTML = af;
                gvVx(ad);
                mfAw(ad, "display", "block");
                sDrg(Y, ad);
                return ab
            }
            var ae = new RegExp(/(https?:\/\/.*typeform.com\/[^\s]+)/gm);
            m = ae.exec(ab);
            if (m) {
                ab = ab.replace(m[0], "");
                var X = m[0];
                var af = jlQX(".typeform-embed", this.container).outerHTML;
                af = af.replace(new RegExp(/@{url}/gm), X);
                af = af.replace("data-src", "src");
                var Y = tMgz("div");
                Y.innerHTML = af;
                gvVx(ad);
                mfAw(ad, "display", "block");
                sDrg(Y, ad);
                return ab
            }
            var ae = new RegExp(/\[flashcard\]/gm);
            m = ae.exec(ab);
            if (m) {
                ab = ab.replace(m[0], "");
                var Z = ab.split(new RegExp("<hr/>", "gm"));
                ab = "";
                gvVx(ad);
                mfAw(ad, "display", "block");
                ldxQ(ad, "flashcard");
                for (var aa = 0; aa < Z.length; aa++) {
                    var ac = Z[aa];
                    var Y = tMgz("div");
                    ldxQ(Y, "face");
                    Mrvh(Y, {
                        "data-index": aa + 1
                    });
                    if (aa == 0) {
                        ldxQ(Y, "front")
                    }
                    Y.innerHTML = ac;
                    sDrg(Y, ad);
                    fswd(Y, E, function(ai) {
                        ai.preventDefault();
                        var ah = yBuq(this, "data-index");
                        Swvv(this, "front");
                        ldxQ(this.nextElementSibling ? this.nextElementSibling : this.parentNode.firstElementChild, "front")
                    })
                }
                return ab
            }
            gvVx(ad);
            return ab
        },
        eRjs: function(ac, ad) {
            var X = SKeG(this.li, true);
            Mrvh(X, {
                "data-user-id": ac.user_id
            });
            Mrvh(jlQX(".content", X), {
                html: ac.content
            });
            Mrvh(jlQX(".created-time", X), {
                html: new Date(ac.created_time).toLocaleString()
            });
            sDrg(X, this.ul);
            if (this.user_profiles) {
                for (var Z = 0; Z < this.user_profiles.length; Z++) {
                    if (this.user_profiles[Z]["id"] == ac.user_id) {
                        this.qyQz([this.user_profiles[Z]]);
                        break
                    }
                }
            }
            if (ad) {
                var Y = _$$(".section .comment-count");
                for (var Z = 0; Z < Y.length; Z++) {
                    var aa = Y[Z];
                    if (aa) {
                        var ab = parseInt(yBuq(aa, "data-comment-count")) + 1 || 1;
                        Mrvh(aa, {
                            html: ab,
                            "data-comment-count": ab
                        })
                    }
                }
            }
        },
        qyQz: function(X) {
            for (var aa = 0; aa < X.length; aa++) {
                var ab = X[aa];
                var Y = _$$('[data-user-id="' + ab.id + '"]', this.ul);
                for (var Z = 0; Z < Y.length; Z++) {
                    li = Y[Z];
                    Mrvh(jlQX(".display-name", li), {
                        html: ab.display_name
                    });
                    if (ab.fb_id) {
                        dsun(jlQX(".picture", li), {
                            "background-image": "url(//graph.facebook.com/" + ab.fb_id + "/picture)"
                        })
                    }
                }
            }
        },
        puvx: function() {
            var X = this;
            X.list_comments_count = 0;
            this.app.kwYo("comments", function(Y) {
                X.comments_inner = Y;
                var aa = jlQX(".section .comment-count", Y);
                if (aa) {
                    if (X.info.comment_count > 0) {
                        Mrvh(aa, {
                            html: X.info.comment_count,
                            "data-comment-count": X.info.comment_count
                        })
                    } else {
                        Mrvh(aa, {
                            html: o.not_has_comment_yet,
                            "data-comment-count": 0
                        })
                    }
                }
                var aj = oNow();
                var Z = Math.min(aj.width, 371);
                var ac = 0;
                var ai = aj.height - ac;
                var ah = (aj.width - Z) - 2;
                var ae = jlQX("ul.items", Y);
                dsun(jlQX(".list-comments", Y), {
                    "max-height": ai - 150 + "px"
                });
                var ag = SKeG(jlQX("li", ae), true);
                var ad = jlQX(".c-right", ag);
                dsun(ad, {
                    width: Z - 80 + "px"
                });
                gvVx(ae);
                X.ul = ae;
                X.li = ag;
                dsun(Y, {
                    position: "fixed",
                    "z-index": 1001,
                    width: Z + "px",
                    height: ai + "px",
                    top: ac + "px",
                    left: ah + "px"
                });
                sDrg(Y, document.body);
                var ab = jlQX(".comment-input", Y);
                dsun(ab, {
                    width: Z - 42 + "px"
                });
                fswd(ab, "keyup", function(ao) {
                    if (ao.keyCode == 13) {
                        var al = this;
                        if (aWqS(this, "posting")) {
                            return
                        }
                        var am = new A();
                        var ak = X.info.id;
                        var an = this.value;
                        ldxQ(this, "posting");
                        am.vnun(ak, an, function(ap) {
                            X.eRjs(ap, true);
                            Swvv(al, "posting");
                            al.value = "";
                            var aq = jlQX(".list-comments", X.comments_inner);
                            aq.scrollTop = aq.scrollHeight
                        })
                    }
                });
                var af = jlQX(".btn-close", Y);
                fswd(af, E, function(ak) {
                    ak.preventDefault();
                    X.list_comments_count = 0;
                    clearInterval(X.timer);
                    ZXsm(X.comments_inner)
                });
                X.Xxrq();
                X.timer = setInterval(function() {
                    X.Xxrq()
                }, 5000)
            })
        },
        Xxrq: function() {
            var X = this;
            var Z = new A();
            var Y = X.info.id;
            Z.iexn(Y, function(ae) {
                if (!ae.items) {
                    return
                }
                if (X.list_comments_count == ae.items.length) {
                    return
                }
                X.list_comments_count = ae.items.length;
                var ac = jlQX(".list-comments", X.comments_inner);
                var ad = ac.scrollHeight - ac.clientHeight == ac.scrollTop;
                gvVx(X.ul);
                var ah = _$$(".section .comment-count");
                for (var af = 0; af < ah.length; af++) {
                    var ac = ah[af];
                    if (ac) {
                        var ag = ae.items.length;
                        Mrvh(ac, {
                            html: ag,
                            "data-comment-count": ag
                        })
                    }
                }
                var ak = new Object();
                ak[f.user_id] = 1;
                for (var af = 0; af < ae.items.length; af++) {
                    var aj = ae.items[af];
                    ak[aj.user_id] = 1;
                    X.eRjs(aj)
                }
                if (ad) {
                    var ac = jlQX(".list-comments", X.comments_inner);
                    ac.scrollTop = ac.scrollHeight
                }
                if (X.user_profiles) {
                    return X.qyQz(X.user_profiles)
                }
                var aa = new Array();
                for (var ab in ak) {
                    aa.push(ab)
                }
                var ai = aa.join(",");
                Z.uNze(ai, function(al) {
                    if (!al.items) {
                        return
                    }
                    X.user_profiles = al.items;
                    X.qyQz(X.user_profiles)
                })
            })
        }
    });
    var i;
    var R;
    var C;
    var z;
    var c;
    var b;
    var k = yBuq(jlQX('meta[name="app-name"]'), "content") || "Cloud Reader";
    var Q = yBuq(jlQX('meta[name="app-version"]'), "content") || "1.0";
    var t = yBuq(jlQX('meta[name="fb-app-id"]'), "content") || "1.0";
    var B = new Class({
        initialize: function() {
            if (!("DOMParser" in window)) {
                return S()
            }
            var X = this;
            this.container = _$("container");
            this.user_id = 0;
            window.onorientationchange = this.onResized;
            if (!isMobile.sAca()) {
                window.onresize = window.onorientationchange
            }
            i = new A();
            R = new v(this);
            this.gtyj();
            i.xAus(function(Y) {
                X.user_id = Y.user_id || 0;
                X.fb_id = Y.fb_id || "";
                X.display_name = Y.display_name || "";
                X.user_verifed = Y.verified;
                X.fb_response = Y;
                X.user_info = Y;
                if (X.user_id) {
                    var Z = jlQX(".account-nav .login");
                    mfAw(Z, "display", "inline-block");
                    mfAw(Z, "display", "inline-block");
                    var Z = jlQX(".account-nav .foryou");
                    if (Z) {
                        mfAw(Z, "display", "inline-block")
                    }
                    var Z = jlQX(".account-nav .store");
                    if (Z) {
                        mfAw(Z, "display", "inline-block")
                    }
                    var Z = jlQX(".account-nav .library");
                    Mrvh(Z, {
                        html: o.library
                    })
                } else {
                    var Z = jlQX(".account-nav .library");
                    Mrvh(Z, {
                        html: o.account
                    })
                }
                X.khwa();
                setTimeout(function() {
                    X.onSyncActivities();
                    setInterval(function() {
                        X.onSyncActivities()
                    }, 18000)
                }, 3000)
            });
            window.onpopstate = function(Z) {
                if (Z.state == null) {
                    return
                }
                var Y = X.BExk();
                if (Y) {
                    QBvc = Y.QBvc;
                    recent = Y.recent;
                    if (b && b.IgOc) {
                        if (b.aongIndex != recent.section) {
                            return b.TBUH(b.IgOc.MQiP(recent.section), recent.position)
                        }
                        b.close()
                    }
                } else {
                    X.khwa()
                }
            }
        },
        khwa: function(Y) {
            var aa = this;
            if (!Y) {
                Y = aa.fb_response
            }
            var ad = "";
            if ("localStorage" in window) {
                ad = localStorage["request-book-id"]
            }
            if (ad && f.user_id) {
                try {
                    delete localStorage["request-book-id"]
                } catch (ab) {}
                aa.fsJg(ad);
                if (aa.user_id) {
                    aa.onLoginStatus(Y)
                } else {
                    aa.DrCP(aa.onFacebookStatus)
                }
                return
            }
            var X = nmwG(window.location.search);
            if (!X.id) {
                if (X.brand) {
                    aa.gxpR(X.brand, function() {});
                    aa.onLoginStatus(Y);
                    return
                }
                if (X.browse) {
                    aa.bzoa(decodeURIComponent(X.browse), X.offset, function() {});
                    aa.onLoginStatus(Y);
                    return
                }
                if (X.sid) {
                    aa.CrvF(X.sid, function() {});
                    aa.onLoginStatus(Y);
                    return
                }
                var ac = false;
                if (!X.view) {
                    X.view = "store"
                }
                switch (X.view) {
                    case "store":
                        aa.dxyf(function() {});
                        aa.onLoginStatus(Y);
                        break;
                    case "membership":
                        aa.FcdE(function() {});
                        aa.onLoginStatus(Y);
                        break;
                    case "foryou":
                        if (aa.user_id) {
                            aa.dzxs(function() {});
                            aa.onLoginStatus(Y)
                        } else {
                            ac = true
                        }
                        break;
                    default:
                        if (aa.user_id) {
                            aa.Egvy(function() {});
                            aa.onLoginStatus(Y)
                        } else {
                            ac = true
                        }
                        break
                }
                if (ac) {
                    aa.wfYt(function() {
                        aa.DrCP(aa.onFacebookStatus)
                    })
                }
            } else {
                var ad;
                var af;
                var ae = aa.BExk();
                if (ae) {
                    ad = ae.QBvc;
                    af = ae.recent
                }
                if (!ad && (!X.action || aa.user_id > 0)) {
                    var Z = new M(aa.user_id);
                    var ae = Z.mvoh();
                    if (ae.QBvc) {
                        ad = ae.QBvc;
                        af = ae.recent
                    }
                }
                if (ad) {
                    aa.fsJg(ad, af);
                    if (aa.user_id) {
                        aa.onLoginStatus(Y)
                    } else {
                        aa.DrCP(aa.onFacebookStatus)
                    }
                }
            }
        },
        gtyj: function() {
            var X = this;
            var Y = jlQX(".account-nav .login");
            fswd(Y, "click", function(Z) {
                Z.preventDefault();
                if (yBuq(this, "data-status") == 1) {
                    X.zhrl(Z)
                } else {
                    X.gvHv()
                }
            });
            var Y = jlQX(".account-nav .library");
            fswd(Y, "click", function(ab) {
                ab.preventDefault();
                var Z = _$$(".__view__");
                for (var aa = 0; aa < Z.length; aa++) {
                    mfAw(Z[aa], "display", "none")
                }
                if (X.user_id) {
                    X.Egvy(function() {})
                } else {
                    X.wfYt(function() {
                        X.DrCP(X.onFacebookStatus)
                    })
                }
            });
            var Y = jlQX(".account-nav .foryou");
            if (Y) {
                fswd(Y, "click", function(Z) {
                    Z.preventDefault();
                    X.dzxs()
                })
            }
            var Y = jlQX(".search");
            fswd(Y, "click", function(Z) {
                Z.preventDefault();
                X.Smsc()
            });
            window.onscroll = function(Z) {
                clearTimeout(y);
                y = setTimeout(function() {
                    new ufaj()
                }, 100)
            }
        },
        BExk: function(X) {
            var X = X || window.location.search;
            var aa = nmwG(X);
            if (aa.id) {
                QBvc = aa.id;
                var Y = null;
                if (aa.lo) {
                    var Z = aa.lo.split(".");
                    Y = {
                        section: parseInt(Z[0]),
                        position: {
                            start: parseInt(Z[1]),
                            word: parseInt(Z[2])
                        }
                    }
                }
                return {
                    QBvc: QBvc,
                    recent: Y
                }
            }
            return null
        },
        orNp: function() {
            var aa = jlQX(".nav");
            dsun(aa, {
                position: "static",
                display: "block"
            });
            var Y = _$$(".account-nav .icon");
            for (var Z = 0; Z < Y.length; Z++) {
                Swvv(Y[Z], "actived")
            }
            var Y = _$$(".__view__, .dialog");
            for (var Z = 0; Z < Y.length; Z++) {
                mfAw(Y[Z], "display", "none")
            }
            var X = jlQX(".categories-inner");
            if (X) {
                ZXsm(X)
            }
        },
        Egvy: function(Z) {
            this.orNp();
            var Y = jlQX(".account-nav .library");
            ldxQ(Y, "actived");
            var X = this;
            this.kwYo("library", function(aa) {
                C = new V(X, aa);
                C.onLoadCRwrDataSource = X.onLoadCRwrDataSource;
                C.onSaveCollection = X.onSaveCollection;
                C.onDeleteCollection = X.onDeleteCollection;
                C.onLoadListCollection = X.onLoadListCollection;
                C.onListRecentPositions = X.onListRecentPositions;
                C.onLoaded = function(ab) {
                    if (ab.length == 0) {
                        X.uLbj()
                    }
                };
                if (Z) {
                    Z()
                }
                K(true);
                X.onLoadCRwrDataSource(0, function(ab) {
                    K(false);
                    if (!ab || ab.error) {
                        return
                    }
                    C.qeqa(ab)
                })
            });
            if ("pushState" in history) {
                history.pushState("", document.title, "?view=library")
            }
            new u(f.user_id).Amtz({
                action: "open_view",
                name: "library"
            })
        },
        dzxs: function(Z) {
            this.orNp();
            var Y = jlQX(".account-nav .foryou");
            if (Y) {
                ldxQ(Y, "actived")
            }
            var X = this;
            this.kwYo("foryou", function(aa) {
                z = new F(X, aa);
                if (Z) {
                    Z()
                }
                K(true);
                X.onLoadForYouDataSource(function(ab) {
                    K(false);
                    if (!ab || ab.error) {
                        return
                    }
                    z.qeqa(ab)
                })
            });
            if ("pushState" in history) {
                history.pushState("", document.title, "?view=foryou")
            }
            new u(f.user_id).Amtz({
                action: "open_view",
                name: "foryou"
            })
        },
        gxpR: function(Y, aa) {
            this.orNp();
            var Z = jlQX(".account-nav .store");
            ldxQ(Z, "actived");
            var X = this;
            this.kwYo("store", function(ab) {
                c = new H(X, ab);
                c.onLoadListBrandItemDataSource = X.onLoadListBrandItemDataSource;
                c.onLoadListBrandItemByTagsDataSource = X.onLoadListBrandItemByTagsDataSource;
                c.onLoadLaneInfo = X.onLoadLaneInfo;
                c.onLoadRelatedItems = X.onLoadRelatedItems;
                K(true);
                X.onLoadBrandInfoDataSource(T, function(ac) {
                    K(false);
                    if (!ac || ac.error) {
                        return
                    }
                    c.info = ac;
                    c.zBwp(Y);
                    aa(ac)
                })
            })
        },
        bzoa: function(Y, aa, ab) {
            this.orNp();
            var Z = jlQX(".account-nav .store");
            ldxQ(Z, "actived");
            var X = this;
            this.kwYo("store", function(ac) {
                c = new H(X, ac);
                c.onLoadListBrandItemDataSource = X.onLoadListBrandItemDataSource;
                c.onLoadListBrandItemByTagsDataSource = X.onLoadListBrandItemByTagsDataSource;
                c.onLoadLaneInfo = X.onLoadLaneInfo;
                c.onLoadRelatedItems = X.onLoadRelatedItems;
                K(true);
                X.onLoadBrandInfoDataSource(T, function(ad) {
                    K(false);
                    if (!ad || ad.error) {
                        return
                    }
                    c.info = ad;
                    c.nevg(Y, aa);
                    ab(ad)
                })
            })
        },
        CrvF: function(aa, Z) {
            this.orNp();
            var Y = jlQX(".account-nav .store");
            ldxQ(Y, "actived");
            var X = this;
            this.kwYo("store", function(ab) {
                c = new H(X, ab);
                c.onLoadListBrandItemDataSource = X.onLoadListBrandItemDataSource;
                c.onLoadListBrandItemByTagsDataSource = X.onLoadListBrandItemByTagsDataSource;
                c.onLoadLaneInfo = X.onLoadLaneInfo;
                c.onLoadRelatedItems = X.onLoadRelatedItems;
                K(true);
                X.onLoadBrandInfoDataSource(T, function(ac) {
                    K(false);
                    if (!ac || ac.error) {
                        return
                    }
                    c.info = ac;
                    c.Uklr(aa);
                    Z(ac)
                })
            })
        },
        dxyf: function(Z) {
            this.orNp();
            K(true);
            var Y = jlQX(".account-nav .store");
            ldxQ(Y, "actived");
            var X = this;
            this.kwYo("store", function(aa) {
                c = new H(X, aa);
                c.onLoadListBrandItemDataSource = X.onLoadListBrandItemDataSource;
                c.onLoadListBrandItemByTagsDataSource = X.onLoadListBrandItemByTagsDataSource;
                c.onLoadLaneInfo = X.onLoadLaneInfo;
                c.onLoadRelatedItems = X.onLoadRelatedItems;
                K(true);
                X.onLoadListBrandItemDataSource(T, function(ae, ab) {
                    K(false);
                    if (!ab || ab.error) {
                        return
                    }
                    c.info = ae;
                    c.qeqa(ab);
                    if (Z) {
                        Z()
                    }
                    if (f.user_id) {
                        var ac = window.recommended_items_ts || new Date().getTime();
                        var ad = new Date().getTime() - ac;
                        if (window.recommended_items && ad < 30000) {
                            return c.qeqa(window.recommended_items)
                        }
                        window.recommended_items_ts = new Date().getTime();
                        X.onLoadForYouDataSource(function(af) {
                            window.recommended_items = af;
                            c.qeqa(af)
                        })
                    }
                })
            });
            if ("pushState" in history) {
                history.pushState("", document.title, "?view=store")
            }
            new u(f.user_id).Amtz({
                action: "open_view",
                name: "store"
            })
        },
        FcdE: function(Z) {
            this.orNp();
            K(true);
            var X = this;
            var Y = jlQX(".account-nav .store");
            ldxQ(Y, "actived");
            var Y = jlQX("#view-membership");
            if (!Y) {
                this.kwYo("membership", function(aa) {
                    K(false);
                    if (Z) {
                        Z()
                    }
                })
            } else {
                mfAw(Y, "display", "block");
                K(false);
                if (Z) {
                    Z()
                }
            }
            if ("pushState" in history) {
                history.pushState("", document.title, "?view=membership")
            }
            new u(f.user_id).Amtz({
                action: "open_view",
                name: "membership"
            })
        },
        GBkg: function(ab, Z) {
            var Y = jlQX(".categories-inner");
            if (!Y) {
                var Y = tMgz("div");
                sDrg(Y, document.body);
                ldxQ(Y, "categories-inner");
                var aa = tvdw(Z.target);
                dsun(Y, {
                    left: aa.x + "px",
                    top: aa.y + 40 + "px"
                });
                fswd(Y, "mouseleave", function(ac) {
                    ZXsm(this);
                    if (ab) {
                        ab(false)
                    }
                })
            }
            var X = this;
            this.kwYo("categories", function(ac) {
                categories = new I(X, ac);
                if (ab) {
                    ab(true)
                }
                if (c.info) {
                    if (b && b.QBvc) {
                        return
                    }
                    K(false);
                    categories.info = c.info;
                    categories.qeqa(c.covers)
                }
                X.onLoadCategoriesFirstItemDataSource(function(ad) {
                    if (b && b.QBvc) {
                        return
                    }
                    K(false);
                    if (!ad) {
                        return
                    }
                    c.covers = ad;
                    categories.info = c.info;
                    gvVx(ac);
                    categories.qeqa(ad);
                    c.hOhO()
                });
                new u(f.user_id).Amtz({
                    action: "open_popup",
                    name: "categories"
                })
            }, Y)
        },
        wfYt: function(Z) {
            this.orNp();
            var Y = jlQX(".nav");
            dsun(Y, {
                position: "absolute",
                display: "block"
            });
            if ("pushState" in history) {
                history.pushState("", o.welcome, "?view=welcome")
            }
            var X = this;
            this.kwYo("welcome", function(aa) {
                C = new N(X, aa);
                C.onLoginWithFacebook = X.onLoginWithFacebook;
                if (Z) {
                    Z()
                }
            })
        },
        uLbj: function(Z) {
            this.orNp();
            var Y = jlQX(".nav");
            dsun(Y, {
                position: "absolute",
                display: "block"
            });
            if ("pushState" in history) {
                history.pushState("", o.welcome, "?view=welcome")
            }
            var X = this;
            this.kwYo("welcome_signed_in", function(aa) {
                X.onLoginWithFacebook();
                if (Z) {
                    Z()
                }
            })
        },
        fsJg: function(Z, ac, ad, ab) {
            R.close();
            window.scrollTo(0, 0);
            K(true);
            dsun(document.body, {
                overflow: "hidden"
            });
            var Y = _$$(".__view__, .dialog");
            for (var aa = 0; aa < Y.length; aa++) {
                mfAw(Y[aa], "display", "none")
            }
            var X = this;
            this.kwYo("reader", function(ae) {
                b = new J(X, ae);
                b.store_id = ad;
                b.collection_id = ab;
                b.onGetBaseURL = X.onGetBaseURL;
                b.onGetRecentPosition = X.onGetRecentPosition;
                b.onGetActivities = X.onGetActivities;
                b.onSyncActivities = X.onSyncActivities;
                b.onBfDxClosed = X.onBfDxClosed;
                b.onLoadLaneInfo = X.onLoadLaneInfo;
                b.open(Z, ac)
            })
        },
        kwYo: function(Y, af, aa) {
            var ad = this;
            if (!f.user_id && iwyt("user_id")) {
                window.location = window.location.href;
                return
            }
            new ufaj();
            if (!aa) {
                var X = ad.container
            } else {
                var X = aa
            }
            var Z = "views/" + Y + ".html?" + Q;
            var ae = "view-" + Y;
            var ab = _$(ae);
            if (!ab) {
                ab = tMgz("view");
                if (!aa) {
                    ldxQ(ab, "__view__")
                }
                ab.id = ae;
                sDrg(ab, X)
            }
            gvVx(ab);
            mfAw(ab, "display", "block");
            if (!ad.views) {
                ad.views = new Object()
            }
            var ac = ad.views[ae];
            if (ac) {
                ab.innerHTML = ac;
                return af(ab)
            }
            nVBD(Z, "GET", {}, function(ag) {
                ab.innerHTML = ag;
                ad.views[ae] = ag;
                af(ab)
            }, function() {
                ZXsm(ab)
            });
            new ufaj()
        },
        zhrl: function(ab, ag) {
            var Z = jlQX(".account-nav .login");
            var af = yBuq(Z, "title");
            var X = yBuq(Z, "data-name");
            var aa = tMgz("div");
            ldxQ(aa, "account-menu");
            dsun(aa, {
                "min-width": "200px",
                "max-width": "240px",
                "padding-top": "20px !important"
            });
            aa.innerHTML = '<div>	    					<a class="display-name" href="#">' + af + '	    					<span class="name">' + X + '</span></a>	    	 				<a class="subscribe" href="subscribe.php">...</a>	    	 				<a class="coins" href="coins.php" >...</a>	    					<a class="link-facebook" href="#link-facebook">' + o.link_facebook + '	    					<a class="redeem" href="redeem.php">' + o.redeem + '	    					<a class="changepass" href="changepass.php">' + o.change_password + '	    	 				<a class="logout" href="logout.php">' + o.logout + "</a>	    	 				</div>";
            fswd(jlQX(".link-facebook", aa), "click", function(ah) {
                ah.preventDefault();
                f.dvud(f.onLoginWithFacebook)
            });
            fswd(jlQX(".subscribe", aa), "click", function(ah) {
                ah.preventDefault();
                new ufaj();
                new r(f, null, {
                    src: "subscribe.php",
                    width: 680
                }).vDqm()
            });
            fswd(jlQX(".coins", aa), "click", function(ah) {
                if (h) {
                    return
                }
                ah.preventDefault();
                new ufaj();
                new r(f, null, {
                    src: "coins.php"
                }).vDqm()
            });
            fswd(jlQX(".redeem", aa), "click", function(ah) {
                ah.preventDefault();
                new ufaj();
                new r(f, null, {
                    src: "redeem.php"
                }).vDqm()
            });
            var ad = tvdw(ab.target);
            ad.y += 24;
            new ufaj(document.body, aa, null, {
                bgcolorstart: "#fff",
                bgcolorstop: "#fefefe",
                linearheight: 45,
                kpos: ad,
                padding: {
                    left: 0,
                    top: 0
                },
                stroke: ""
            }).vDqm();
            var ae = ad;
            var Y = aa;
            var ac = function(aj) {
                i.brand_permission = aj;
                var an = jlQX(".account-menu .subscribe");
                if (!an) {
                    return
                }
                if (aj && aj.membership) {
                    var ak = new Date(aj.membership.end_time);
                    var am = ak.getFullYear();
                    var ao = ak.getMonth() + 1;
                    var ai = ak.getDate();
                    var ah = ak.getHours();
                    var al = ak.getMinutes();
                    an.innerHTML = o.membership_valid.replace("YYYY", am).replace("MM", ao).replace("DD", ai).replace("hh", ah).replace("mm", al)
                } else {
                    an.innerHTML = o.membership_invalid
                }
                if (aj && aj.user) {
                    var an = jlQX(".account-menu .coins");
                    an.innerHTML = o.account_menu_coins.replace("@{coins}", aj.user.coins)
                }
            };
            if (i.brand_permission) {
                ac(i.brand_permission)
            } else {
                i.EsyA(ac)
            }
            new u(f.user_id).Amtz({
                action: "open_view",
                name: "account"
            })
        },
        gvHv: function(X) {
            window.location = "login.php"
        },
        scRc: function(X) {},
        DrCP: function(X) {
            FB.getLoginStatus(function(Y) {
                if (Y.status === "connected") {
                    f.fb_user_id = Y.authResponse.userID;
                    f.fb_access_token = Y.authResponse.accessToken;
                    FB.api("/me", function(Z) {
                        X(Z)
                    })
                } else {
                    if (Y.status === "not_authorized") {} else {}
                }
            }, true)
        },
        dvud: function(Y) {
            var X = this;
            FB.login(function(Z) {
                if (Z.authResponse) {
                    f.fb_user_id = Z.authResponse.userID;
                    f.fb_access_token = Z.authResponse.accessToken;
                    FB.api("/me", function(aa) {
                        if (Y) {
                            Y(aa)
                        }
                    })
                } else {
                    if (Y) {
                        Y({})
                    }
                }
            }, {
                scope: "email,public_profile,publish_actions,user_birthday",
                return_scopes: true
            })
        },
        fCBg: function() {
            if (!confirm("Do you want to logout from facebook?")) {
                return
            }
            FB.scRc(function(X) {
                var Y = jlQX(".account-nav .login");
                Mrvh(Y, {
                    "data-status": null,
                    "data-fb-id": null
                });
                dsun(Y, {
                    "background-image": "url()"
                })
            })
        },
        Smsc: function() {
            R.kqkB();
            new u(f.user_id).Amtz({
                action: "open_view",
                name: "search"
            })
        },
        onResized: function() {
            if (C) {
                C.onResized()
            }
            if (c) {
                c.onResized()
            }
            if (z) {
                z.onResized()
            }
            if (b) {
                b.onResized()
            }
            if (R) {
                R.onResized()
            }
        },
        onFacebookStatus: function(X) {
            if (X.name) {
                var Y = jlQX("a.login-with-facebook");
                if (Y) {
                    ldxQ(Y, "connected");
                    Y.innerHTML = o.login_fb_as_name.replace("@{name}", X.name)
                }
            }
            if (X.status == "connected" || X.name) {
                FB.api("/me", {
                    fields: "id,name"
                }, function(Z) {
                    var aa = "//graph.facebook.com/" + Z.id + "/picture";
                    var ab = jlQX(".account-nav .login");
                    ldxQ(ab, "icon");
                    mfAw(ab, "background-image", "url(" + aa + ")");
                    Mrvh(ab, {
                        html: " ",
                        "data-status": 1,
                        "data-fb-id": Z.id
                    })
                })
            }
        },
        onLoginStatus: function(Y) {
            var ac = jlQX(".account-nav .login");
            if (!Y.profile_picture) {
                ldxQ(ac, "no-picture")
            }
            var ab = "";
            var X = ab;
            var Z = "";
            if (Y.display_name) {
                ldxQ(ac, "icon");
                var ad = Y.display_name.split(" ");
                ab = ad[0][0].toUpperCase();
                if (ad.length > 1) {
                    ab += ad[ad.length - 1][0].toUpperCase()
                }
                if (Y.fb_id) {
                    Z = "//graph.facebook.com/" + Y.fb_id + "/picture";
                    X = " "
                } else {
                    X = ab
                }
            } else {
                Swvv(ac, "icon")
            }
            Mrvh(ac, {
                html: X,
                "data-t": ab,
                style: "background-image: url(" + Z + ")",
                "data-status": Y.user_id ? 1 : 0,
                "data-user-id": Y.user_id,
                "data-name": Y.name,
                title: Y.display_name
            })
        },
        onGetBaseURL: function(Y, aa, ab) {
            var Z = Y;
            var X = b.nklS.qyQi(Z, aa);
            if (X.length > 30) {
                X = ""
            }
            if (X && X.url) {
                return ab(X)
            }
            i.cusr(Y, aa, function(ac) {
                if (!ac || ac.error) {
                    return ab(null)
                }
                if (f.user_id) {
                    b.nklS.Frpi(Z, aa, ac)
                }
                ab(ac)
            })
        },
        onLoadCRwrDataSource: function(X, Y) {
            if (!X) {
                i.ntDJ(Y)
            } else {
                i.Funy(X, Y)
            }
        },
        onLoadForYouDataSource: function(Y) {
            var X = "//richanchor.com/alezaa/";
            JSONP(X, {
                f: "jsonp",
                action: "recs",
                uid: f.user_id,
                maxRecs: 15,
                fb_id: f.fb_id
            }, Y)
        },
        onLoadCategoriesFirstItemDataSource: function(Y) {
            var X = "//cdn.alezaa.com/d2hya8pd1qsbdg/9c22e4ff9459960e2d64fd0ca714cad0";
            JSONP(X, {}, "jsonp9c22e4ff9459960e2d64fd0ca714cad0", Y)
        },
        cizU: function(ac) {
            var ae = new Object();
            var ab = new Array();
            var Z = new Array();
            var ad = new Object();
            var Y = ac.featured_tags.split(",");
            for (var aa = 0; aa < Y.length; aa++) {
                var X = Y[aa];
                X = X.trim();
                if (!X) {
                    continue
                }
                p = X.indexOf(":");
                if (p > 0) {
                    parent = X.slice(0, p);
                    X = X.slice(p + 1).trim()
                } else {
                    parent = X;
                    X = "";
                    ab.push(parent)
                }
                if (!ae[parent]) {
                    ae[parent] = []
                }
                ad[parent] = aa;
                if (X) {
                    ae[parent].push(X);
                    Z.push(X);
                    ad[X] = aa
                } else {
                    Z.push(parent);
                    ad[X] = aa
                }
            }
            return [ae, ab, Z, ad]
        },
        onLoadBrandInfoDataSource: function(X, aa) {
            var Y = "//cdn.alezaa.com/d2hya8pd1qsbdg/";
            var Z = "v1/public/get_brand_info/brand_id=" + X;
            Z = eHqc(eHqc(GnqH(Z)) + "jsonp");
            JSONP(Y + Z, {}, "jsonp" + Z, function(ab) {
                var ac = ab;
                aa(ac)
            })
        },
        onLoadListBrandItemDataSource: function(X, aa) {
            var Y = "//cdn.alezaa.com/d2hya8pd1qsbdg/";
            var Z = "v1/public/get_brand_info/brand_id=" + X;
            Z = eHqc(eHqc(GnqH(Z)) + "jsonp");
            JSONP(Y + Z, {}, "jsonp" + Z, function(ac) {
                var ag = ac;
                if (ag && ag.layout in {
                        store: 1,
                        library: 2
                    }) {
                    var ad = f.cizU(ag);
                    var af = ad[1];
                    var ab = ad = unescape(encodeURIComponent(af.join(","))).replace("&", "%26").replace("/", "%2F");
                    var ae = "v1/public/list_brand_lanes_by_tags/brand_id=" + X + "&tags=";
                    ae += ab + "&offset=0&count=16&order_by=store_priority"
                } else {
                    var ae = "v1/public/list_brand_lanes/brand_id=" + X + "&offset=0&count=1000&order_by=store_priority"
                }
                ae = eHqc(eHqc(GnqH(ae)) + "jsonp");
                JSONP(Y + ae, {}, "jsonp" + ae, function(ai) {
                    if (Object.prototype.toString.call(ai) === "[object Array]") {
                        var ah = new Object();
                        ah[ag.name] = ai
                    } else {
                        var ah = ai
                    }
                    aa(ag, ah)
                })
            })
        },
        onLoadListBrandItemByTagsDataSource: function(Y, X, ab, ac) {
            var Z = "//cdn.alezaa.com/d2hya8pd1qsbdg/";
            X = unescape(encodeURIComponent(X)).replace("&", "%26").replace("/", "%2F");
            var aa = "v1/public/list_brand_lanes_by_tags/brand_id=" + Y + "&tags=" + X + "&offset=" + ab + "&count=20&order_by=";
            aa = eHqc(eHqc(GnqH(aa)) + "jsonp");
            JSONP(Z + aa, {}, "jsonp" + aa, function(ad) {
                ac(ad)
            })
        },
        onLoadLaneInfo: function(Y, X) {
            nVBD("index.php", "POST", {
                method: "get_lane_info",
                sid: Y
            }, X, X)
        },
        onLoadRelatedItems: function(Z, Y) {
            var X = "//richanchor.com/alezaa/";
            JSONP(X, {
                f: "jsonp",
                action: "related",
                uid: f.user_id,
                item: Z,
                maxRecs: 10,
                fb_id: f.fb_id
            }, Y)
        },
        onNeedAuthorization: function(ad, ae, ah, ac) {
            var aj = ad.aQmf;
            var ag = aj.title;
            var Y = aj.creator;
            var ab = jlQX(".need-authorization-panel");
            if (ab) {
                ZXsm(ab)
            }
            ab = tMgz("div");
            ldxQ(ab, "panel");
            ldxQ(ab, "__reader__");
            ldxQ(ab, "need-authorization-panel");
            dsun(ab, {
                "background-color": "#fff",
                color: "#333"
            });
            var aa = tMgz("div");
            ldxQ(aa, "container");
            ldxQ(aa, "__reader__");
            var Y = ad.aQmf.creator;
            var ag = b.aongIndex > 1 ? ad.Liuf(b.aongIndex) + " - " + ad.aQmf.title : ad.aQmf.title + " - " + Y;
            var al = tMgz("div");
            ldxQ(al, "inner");
            var af = "";
            af += '<p class="cover"><img src="' + ad.baseURL + aj.cover + '"/></p>';
            af += '<p class="title">' + ag + "</p>";
            af += '<a target="_blank" class="button subscribe" href="index.php?sid=' + ae + '&ref=reading">' + o.subscribe_or_buy + "</a>";
            af += '<a class="button normal show-toc" href="#toc">' + o.toc + "</a></p>";
            al.innerHTML = af;
            sDrg(al, aa);
            sDrg(aa, ab);
            var ak = oNow();
            var Z = Math.min(320, ak.width - 40);
            var ai = Math.min(320, ak.height - 40);
            dsun(ab, {
                width: Z + "px",
                left: (ak.width - Z - 2) / 2 + "px",
                top: (ak.height - ai - 40) / 2 + "px"
            });
            sDrg(ab, document.body);
            var X = jlQX("a.show-toc", ab);
            fswd(X, "click", function(an) {
                an.preventDefault();
                var am = jlQX(".need-authorization-panel");
                if (am) {
                    ZXsm(am)
                }
                b.cqOg({}, true);
                b.cqOg({});
                b.tteH(true)
            });
            var X = jlQX("a.login", ab);
            if (X) {
                fswd(X, "click", function(am) {
                    am.preventDefault();
                    if ("localStorage" in window) {
                        try {
                            localStorage["request-book-id"] = b.QBvc
                        } catch (am) {}
                    }
                    window.location = "?view=welcome"
                })
            }
            var X = jlQX("a.read-for-free", ab);
            if (X) {
                fswd(X, "click", function(am) {
                    am.preventDefault();
                    f.dvud(f.onLoginWithFacebook)
                })
            }
        },
        onSyncActivities: function(ab, aa) {
            if (!f.user_id) {
                return
            }
            var X = new M(f.user_id);
            X.collectionId = C ? C.collectionId : null;
            var Y = X.LApP(aa);
            if (!Y || Y.length == 0) {
                return ab ? ab() : null
            }
            var Z = window.location.href.indexOf("http://localhost") > -1;
            if (Z) {
                console.log(Y)
            }
            i.pPmy(JSON.stringify(Y), function(ac) {
                if (Z) {
                    console.log(ac)
                }
                if (!ac) {
                    return ab ? ab() : null
                }
                for (var ad = 0; ad < ac.length; ad++) {
                    var ae = ac[ad];
                    if (ae.__error) {
                        continue
                    }
                    X.sxpg(ae)
                }
                if (Z) {
                    console.log("synced")
                }
                return ab ? ab() : null
            })
        },
        onGetRecentPosition: function(X, Y) {
            if (!f.user_id) {
                return
            }
            i.SLki(X, Y)
        },
        onGetActivities: function(X, Y) {
            if (!f.user_id) {
                return
            }
            i.siUi(X, Y)
        },
        onLoginWithFacebook: function() {
            if (!f.fb_access_token) {
                return
            }
            var Y = jlQX("a.login-with-facebook");
            if (Y && aWqS(Y, "loading")) {
                return
            }
            if (Y) {
                ldxQ(Y, "loading")
            }
            var X = new u(f.user_id).uid;
            i.PFGf(f.fb_access_token, X, function(Z) {
                window.location = "?"
            })
        },
        onBfDxClosed: function(aa) {
            var Y = _$("interactive-layer");
            if (Y) {
                ZXsm(Y)
            }
            Ghhj(document.body, ["background-color", "overflow"]);
            var ad = [".__content__", ".__reader__", ".__theme__", ".panel"];
            for (var ab = 0; ab < ad.length; ab++) {
                var X = _$$(ad[ab]);
                for (var Z = 0; Z < X.length; Z++) {
                    ZXsm(X[Z])
                }
            }
            var X = _$$(".account-nav .icon");
            for (var ab = 0; ab < X.length; ab++) {
                Swvv(X[ab], "actived")
            }
            var ac = jlQX(".account-nav .library");
            ldxQ(ac, "actived");
            var ac = jlQX(".__view__#view-library");
            if (ac) {
                mfAw(ac, "display", "block")
            }
            var ac = jlQX(".__view__#view-foryou");
            if (ac) {
                mfAw(ac, "display", "none")
            }
            new ufaj();
            if (f.user_id) {
                if (C) {
                    C.MopM()
                } else {
                    f.Egvy(function() {})
                }
            } else {
                f.wfYt(function() {
                    f.DrCP(f.onFacebookStatus)
                })
            }
        },
        onSaveCollection: function(aa, Z, X, Y, ab) {
            if (!f.user_id) {
                return
            }
            i.jdRw(aa, Z, X, Y, ab)
        },
        onDeleteCollection: function(X, Y) {
            if (!f.user_id) {
                return
            }
            i.IoMk(X, Y)
        },
        onLoadListCollection: function(X) {
            if (!f.user_id) {
                return
            }
            i.idop(X)
        },
        onListRecentPositions: function(X) {
            if (!f.user_id) {
                return
            }
            i.fzHp(X)
        }
    });
    var f;
    window.onload = function() {
        f = new B()
    }
})();