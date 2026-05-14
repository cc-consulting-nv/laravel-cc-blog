import { E as Lc, N as je, w as _n, m as he, M as Cn, a as ln, b as xn, P as He, c as We, T as en, t as ur, S as es, n as $l, d as Mc, i as Bl, e as Vr, f as Ic, g as Pc, h as Rc, j as Vc, k as Hc, r as Fl, l as ze, o as jc, p as ki, q as dr, s as $c, u as Bc, v as Ul, x as Fc, y as Uc, F as Ni, z as Kl, A as Kc, D as ts, B as To, C as Wc, G as zc, H as qc, I as Gc, R as Jc, J as Ci } from "./chunks/markdown-paste-DcLg39Z4.js";
// @__NO_SIDE_EFFECTS__
function Dt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const X = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, gn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], be = () => {
}, Wl = () => !1, us = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Rs = (e) => e.startsWith("onUpdate:"), ce = Object.assign, Hr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Yc = Object.prototype.hasOwnProperty, G = (e, t) => Yc.call(e, t), I = Array.isArray, tn = (e) => ds(e) === "[object Map]", Tn = (e) => ds(e) === "[object Set]", Ti = (e) => ds(e) === "[object Date]", H = (e) => typeof e == "function", re = (e) => typeof e == "string", yt = (e) => typeof e == "symbol", J = (e) => e !== null && typeof e == "object", jr = (e) => (J(e) || H(e)) && H(e.then) && H(e.catch), zl = Object.prototype.toString, ds = (e) => zl.call(e), $r = (e) => ds(e).slice(8, -1), ql = (e) => ds(e) === "[object Object]", Br = (e) => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Bn = /* @__PURE__ */ Dt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Xc = /* @__PURE__ */ Dt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Oo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Qc = /-\w/g, et = Oo(
  (e) => e.replace(Qc, (t) => t.slice(1).toUpperCase())
), Zc = /\B([A-Z])/g, Kt = Oo(
  (e) => e.replace(Zc, "-$1").toLowerCase()
), Ao = Oo((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xt = Oo(
  (e) => e ? `on${Ao(e)}` : ""
), Ft = (e, t) => !Object.is(e, t), pn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Vs = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, So = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Oi;
const fs = () => Oi || (Oi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Fr(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = re(s) ? su(s) : Fr(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (re(e) || J(e))
    return e;
}
const eu = /;(?![^(]*\))/g, tu = /:([^]+)/, nu = /\/\*[^]*?\*\//g;
function su(e) {
  const t = {};
  return e.replace(nu, "").split(eu).forEach((n) => {
    if (n) {
      const s = n.split(tu);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Pe(e) {
  let t = "";
  if (re(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = Pe(e[n]);
      s && (t += s + " ");
    }
  else if (J(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ou = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ru = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", iu = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", lu = /* @__PURE__ */ Dt(ou), au = /* @__PURE__ */ Dt(ru), cu = /* @__PURE__ */ Dt(iu), uu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", du = /* @__PURE__ */ Dt(uu);
function Gl(e) {
  return !!e || e === "";
}
function fu(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = On(e[s], t[s]);
  return n;
}
function On(e, t) {
  if (e === t) return !0;
  let n = Ti(e), s = Ti(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = yt(e), s = yt(t), n || s)
    return e === t;
  if (n = I(e), s = I(t), n || s)
    return n && s ? fu(e, t) : !1;
  if (n = J(e), s = J(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, r = Object.keys(t).length;
    if (o !== r)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), a = t.hasOwnProperty(i);
      if (l && !a || !l && a || !On(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ur(e, t) {
  return e.findIndex((n) => On(n, t));
}
const Jl = (e) => !!(e && e.__v_isRef === !0), we = (e) => re(e) ? e : e == null ? "" : I(e) || J(e) && (e.toString === zl || !H(e.toString)) ? Jl(e) ? we(e.value) : JSON.stringify(e, Yl, 2) : String(e), Yl = (e, t) => Jl(t) ? Yl(e, t.value) : tn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[Fo(s, r) + " =>"] = o, n),
    {}
  )
} : Tn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Fo(n))
} : yt(t) ? Fo(t) : J(t) && !I(t) && !ql(t) ? String(t) : t, Fo = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    yt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function nt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Re;
class pu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Re, !t && Re && (this.index = (Re.scopes || (Re.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Re;
      try {
        return Re = this, t();
      } finally {
        Re = n;
      }
    } else process.env.NODE_ENV !== "production" && nt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Re, Re = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Re = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function hu() {
  return Re;
}
let Y;
const Uo = /* @__PURE__ */ new WeakSet();
class Xl {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Re && Re.active && Re.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Uo.has(this) && (Uo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Zl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ai(this), ea(this);
    const t = Y, n = tt;
    Y = this, tt = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && Y !== this && nt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), ta(this), Y = t, tt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        zr(t);
      this.deps = this.depsTail = void 0, Ai(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Uo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    fr(this) && this.run();
  }
  get dirty() {
    return fr(this);
  }
}
let Ql = 0, Fn, Un;
function Zl(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Un, Un = e;
    return;
  }
  e.next = Fn, Fn = e;
}
function Kr() {
  Ql++;
}
function Wr() {
  if (--Ql > 0)
    return;
  if (Un) {
    let t = Un;
    for (Un = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Fn; ) {
    let t = Fn;
    for (Fn = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ea(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ta(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), zr(s), mu(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function fr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (na(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function na(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ns) || (e.globalVersion = ns, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !fr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Y, s = tt;
  Y = e, tt = !0;
  try {
    ea(e);
    const o = e.fn(e._value);
    (t.version === 0 || Ft(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Y = n, tt = s, ta(e), e.flags &= -3;
  }
}
function zr(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      zr(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function mu(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let tt = !0;
const sa = [];
function st() {
  sa.push(tt), tt = !1;
}
function ot() {
  const e = sa.pop();
  tt = e === void 0 ? !0 : e;
}
function Ai(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Y;
    Y = void 0;
    try {
      t();
    } finally {
      Y = n;
    }
  }
}
let ns = 0, gu = class {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
};
class Do {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!Y || !tt || Y === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Y)
      n = this.activeLink = new gu(Y, this), Y.deps ? (n.prevDep = Y.depsTail, Y.depsTail.nextDep = n, Y.depsTail = n) : Y.deps = Y.depsTail = n, oa(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Y.depsTail, n.nextDep = void 0, Y.depsTail.nextDep = n, Y.depsTail = n, Y.deps === n && (Y.deps = s);
    }
    return process.env.NODE_ENV !== "production" && Y.onTrack && Y.onTrack(
      ce(
        {
          effect: Y
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, ns++, this.notify(t);
  }
  notify(t) {
    Kr();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            ce(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Wr();
    }
  }
}
function oa(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        oa(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const pr = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), hr = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ss = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ve(e, t, n) {
  if (tt && Y) {
    let s = pr.get(e);
    s || pr.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Do()), o.map = s, o.key = n), process.env.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function mt(e, t, n, s, o, r) {
  const i = pr.get(e);
  if (!i) {
    ns++;
    return;
  }
  const l = (a) => {
    a && (process.env.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: o,
      oldTarget: r
    }) : a.trigger());
  };
  if (Kr(), t === "clear")
    i.forEach(l);
  else {
    const a = I(e), f = a && Br(n);
    if (a && n === "length") {
      const u = Number(s);
      i.forEach((c, p) => {
        (p === "length" || p === ss || !yt(p) && p >= u) && l(c);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), f && l(i.get(ss)), t) {
        case "add":
          a ? f && l(i.get("length")) : (l(i.get(nn)), tn(e) && l(i.get(hr)));
          break;
        case "delete":
          a || (l(i.get(nn)), tn(e) && l(i.get(hr)));
          break;
        case "set":
          tn(e) && l(i.get(nn));
          break;
      }
  }
  Wr();
}
function un(e) {
  const t = /* @__PURE__ */ W(e);
  return t === e ? t : (ve(t, "iterate", ss), /* @__PURE__ */ De(e) ? t : t.map(it));
}
function Lo(e) {
  return ve(e = /* @__PURE__ */ W(e), "iterate", ss), e;
}
function Rt(e, t) {
  return /* @__PURE__ */ rt(e) ? wn(/* @__PURE__ */ Ut(e) ? it(t) : t) : it(t);
}
const vu = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ko(this, Symbol.iterator, (e) => Rt(this, e));
  },
  concat(...e) {
    return un(this).concat(
      ...e.map((t) => I(t) ? un(t) : t)
    );
  },
  entries() {
    return Ko(this, "entries", (e) => (e[1] = Rt(this, e[1]), e));
  },
  every(e, t) {
    return xt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return xt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Rt(this, s)),
      arguments
    );
  },
  find(e, t) {
    return xt(
      this,
      "find",
      e,
      t,
      (n) => Rt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return xt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return xt(
      this,
      "findLast",
      e,
      t,
      (n) => Rt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return xt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return xt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Wo(this, "includes", e);
  },
  indexOf(...e) {
    return Wo(this, "indexOf", e);
  },
  join(e) {
    return un(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Wo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return xt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Mn(this, "pop");
  },
  push(...e) {
    return Mn(this, "push", e);
  },
  reduce(e, ...t) {
    return Si(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Si(this, "reduceRight", e, t);
  },
  shift() {
    return Mn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return xt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Mn(this, "splice", e);
  },
  toReversed() {
    return un(this).toReversed();
  },
  toSorted(e) {
    return un(this).toSorted(e);
  },
  toSpliced(...e) {
    return un(this).toSpliced(...e);
  },
  unshift(...e) {
    return Mn(this, "unshift", e);
  },
  values() {
    return Ko(this, "values", (e) => Rt(this, e));
  }
};
function Ko(e, t, n) {
  const s = Lo(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ De(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.done || (r.value = n(r.value)), r;
  }), o;
}
const bu = Array.prototype;
function xt(e, t, n, s, o, r) {
  const i = Lo(e), l = i !== e && !/* @__PURE__ */ De(e), a = i[t];
  if (a !== bu[t]) {
    const c = a.apply(e, r);
    return l ? it(c) : c;
  }
  let f = n;
  i !== e && (l ? f = function(c, p) {
    return n.call(this, Rt(e, c), p, e);
  } : n.length > 2 && (f = function(c, p) {
    return n.call(this, c, p, e);
  }));
  const u = a.call(i, f, s);
  return l && o ? o(u) : u;
}
function Si(e, t, n, s) {
  const o = Lo(e);
  let r = n;
  return o !== e && (/* @__PURE__ */ De(e) ? n.length > 3 && (r = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : r = function(i, l, a) {
    return n.call(this, i, Rt(e, l), a, e);
  }), o[t](r, ...s);
}
function Wo(e, t, n) {
  const s = /* @__PURE__ */ W(e);
  ve(s, "iterate", ss);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Hs(n[0]) ? (n[0] = /* @__PURE__ */ W(n[0]), s[t](...n)) : o;
}
function Mn(e, t, n = []) {
  st(), Kr();
  const s = (/* @__PURE__ */ W(e))[t].apply(e, n);
  return Wr(), ot(), s;
}
const yu = /* @__PURE__ */ Dt("__proto__,__v_isRef,__isVue"), ra = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(yt)
);
function Eu(e) {
  yt(e) || (e = String(e));
  const t = /* @__PURE__ */ W(this);
  return ve(t, "has", e), t.hasOwnProperty(e);
}
class ia {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return s === (o ? r ? fa : da : r ? ua : ca).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = I(t);
    if (!o) {
      let a;
      if (i && (a = vu[n]))
        return a;
      if (n === "hasOwnProperty")
        return Eu;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ pe(t) ? t : s
    );
    if ((yt(n) ? ra.has(n) : yu(n)) || (o || ve(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ pe(l)) {
      const a = i && Br(n) ? l : l.value;
      return o && J(a) ? /* @__PURE__ */ gr(a) : a;
    }
    return J(l) ? o ? /* @__PURE__ */ gr(l) : /* @__PURE__ */ qr(l) : l;
  }
}
class la extends ia {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    const i = I(t) && Br(n);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ rt(r);
      if (!/* @__PURE__ */ De(s) && !/* @__PURE__ */ rt(s) && (r = /* @__PURE__ */ W(r), s = /* @__PURE__ */ W(s)), !i && /* @__PURE__ */ pe(r) && !/* @__PURE__ */ pe(s))
        return f ? (process.env.NODE_ENV !== "production" && nt(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (r.value = s, !0);
    }
    const l = i ? Number(n) < t.length : G(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ pe(t) ? t : o
    );
    return t === /* @__PURE__ */ W(o) && (l ? Ft(s, r) && mt(t, "set", n, s, r) : mt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = G(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && mt(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!yt(n) || !ra.has(n)) && ve(t, "has", n), s;
  }
  ownKeys(t) {
    return ve(
      t,
      "iterate",
      I(t) ? "length" : nn
    ), Reflect.ownKeys(t);
  }
}
class aa extends ia {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && nt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && nt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const _u = /* @__PURE__ */ new la(), xu = /* @__PURE__ */ new aa(), wu = /* @__PURE__ */ new la(!0), ku = /* @__PURE__ */ new aa(!0), mr = (e) => e, ys = (e) => Reflect.getPrototypeOf(e);
function Nu(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = /* @__PURE__ */ W(o), i = tn(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, f = o[e](...s), u = n ? mr : t ? wn : it;
    return !t && ve(
      r,
      "iterate",
      a ? hr : nn
    ), ce(
      // inheriting all iterator properties
      Object.create(f),
      {
        // iterator protocol
        next() {
          const { value: c, done: p } = f.next();
          return p ? { value: c, done: p } : {
            value: l ? [u(c[0]), u(c[1])] : u(c),
            done: p
          };
        }
      }
    );
  };
}
function Es(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      nt(
        `${Ao(e)} operation ${n}failed: target is readonly.`,
        /* @__PURE__ */ W(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Cu(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = /* @__PURE__ */ W(r), l = /* @__PURE__ */ W(o);
      e || (Ft(o, l) && ve(i, "get", o), ve(i, "get", l));
      const { has: a } = ys(i), f = t ? mr : e ? wn : it;
      if (a.call(i, o))
        return f(r.get(o));
      if (a.call(i, l))
        return f(r.get(l));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ve(/* @__PURE__ */ W(o), "iterate", nn), o.size;
    },
    has(o) {
      const r = this.__v_raw, i = /* @__PURE__ */ W(r), l = /* @__PURE__ */ W(o);
      return e || (Ft(o, l) && ve(i, "has", o), ve(i, "has", l)), o === l ? r.has(o) : r.has(o) || r.has(l);
    },
    forEach(o, r) {
      const i = this, l = i.__v_raw, a = /* @__PURE__ */ W(l), f = t ? mr : e ? wn : it;
      return !e && ve(a, "iterate", nn), l.forEach((u, c) => o.call(r, f(u), f(c), i));
    }
  };
  return ce(
    n,
    e ? {
      add: Es("add"),
      set: Es("set"),
      delete: Es("delete"),
      clear: Es("clear")
    } : {
      add(o) {
        !t && !/* @__PURE__ */ De(o) && !/* @__PURE__ */ rt(o) && (o = /* @__PURE__ */ W(o));
        const r = /* @__PURE__ */ W(this);
        return ys(r).has.call(r, o) || (r.add(o), mt(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !/* @__PURE__ */ De(r) && !/* @__PURE__ */ rt(r) && (r = /* @__PURE__ */ W(r));
        const i = /* @__PURE__ */ W(this), { has: l, get: a } = ys(i);
        let f = l.call(i, o);
        f ? process.env.NODE_ENV !== "production" && Di(i, l, o) : (o = /* @__PURE__ */ W(o), f = l.call(i, o));
        const u = a.call(i, o);
        return i.set(o, r), f ? Ft(r, u) && mt(i, "set", o, r, u) : mt(i, "add", o, r), this;
      },
      delete(o) {
        const r = /* @__PURE__ */ W(this), { has: i, get: l } = ys(r);
        let a = i.call(r, o);
        a ? process.env.NODE_ENV !== "production" && Di(r, i, o) : (o = /* @__PURE__ */ W(o), a = i.call(r, o));
        const f = l ? l.call(r, o) : void 0, u = r.delete(o);
        return a && mt(r, "delete", o, void 0, f), u;
      },
      clear() {
        const o = /* @__PURE__ */ W(this), r = o.size !== 0, i = process.env.NODE_ENV !== "production" ? tn(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return r && mt(
          o,
          "clear",
          void 0,
          void 0,
          i
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = Nu(o, e, t);
  }), n;
}
function Mo(e, t) {
  const n = Cu(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    G(n, o) && o in s ? n : s,
    o,
    r
  );
}
const Tu = {
  get: /* @__PURE__ */ Mo(!1, !1)
}, Ou = {
  get: /* @__PURE__ */ Mo(!1, !0)
}, Au = {
  get: /* @__PURE__ */ Mo(!0, !1)
}, Su = {
  get: /* @__PURE__ */ Mo(!0, !0)
};
function Di(e, t, n) {
  const s = /* @__PURE__ */ W(n);
  if (s !== n && t.call(e, s)) {
    const o = $r(e);
    nt(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ca = /* @__PURE__ */ new WeakMap(), ua = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap(), fa = /* @__PURE__ */ new WeakMap();
function Du(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Lu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Du($r(e));
}
// @__NO_SIDE_EFFECTS__
function qr(e) {
  return /* @__PURE__ */ rt(e) ? e : Io(
    e,
    !1,
    _u,
    Tu,
    ca
  );
}
// @__NO_SIDE_EFFECTS__
function Mu(e) {
  return Io(
    e,
    !1,
    wu,
    Ou,
    ua
  );
}
// @__NO_SIDE_EFFECTS__
function gr(e) {
  return Io(
    e,
    !0,
    xu,
    Au,
    da
  );
}
// @__NO_SIDE_EFFECTS__
function gt(e) {
  return Io(
    e,
    !0,
    ku,
    Su,
    fa
  );
}
function Io(e, t, n, s, o) {
  if (!J(e))
    return process.env.NODE_ENV !== "production" && nt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Lu(e);
  if (r === 0)
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const l = new Proxy(
    e,
    r === 2 ? s : n
  );
  return o.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
  return /* @__PURE__ */ rt(e) ? /* @__PURE__ */ Ut(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function rt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function De(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Hs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function W(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ W(t) : e;
}
function pa(e) {
  return !G(e, "__v_skip") && Object.isExtensible(e) && Vs(e, "__v_skip", !0), e;
}
const it = (e) => J(e) ? /* @__PURE__ */ qr(e) : e, wn = (e) => J(e) ? /* @__PURE__ */ gr(e) : e;
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function fe(e) {
  return ha(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Iu(e) {
  return ha(e, !0);
}
function ha(e, t) {
  return /* @__PURE__ */ pe(e) ? e : new Pu(e, t);
}
class Pu {
  constructor(t, n) {
    this.dep = new Do(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ W(t), this._value = n ? t : it(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ De(t) || /* @__PURE__ */ rt(t);
    t = s ? t : /* @__PURE__ */ W(t), Ft(t, n) && (this._rawValue = t, this._value = s ? t : it(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function ma(e) {
  return /* @__PURE__ */ pe(e) ? e.value : e;
}
const Ru = {
  get: (e, t, n) => t === "__v_raw" ? e : ma(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ pe(o) && !/* @__PURE__ */ pe(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function ga(e) {
  return /* @__PURE__ */ Ut(e) ? e : new Proxy(e, Ru);
}
class Vu {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Do(), { get: s, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Hu(e) {
  return new Vu(e);
}
class ju {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Do(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ns - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Y !== this)
      return Zl(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return na(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && nt("Write operation failed: computed value is readonly");
  }
}
// @__NO_SIDE_EFFECTS__
function $u(e, t, n = !1) {
  let s, o;
  H(e) ? s = e : (s = e.get, o = e.set);
  const r = new ju(s, o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (r.onTrack = t.onTrack, r.onTrigger = t.onTrigger), r;
}
const _s = {}, js = /* @__PURE__ */ new WeakMap();
let Qt;
function Bu(e, t = !1, n = Qt) {
  if (n) {
    let s = js.get(n);
    s || js.set(n, s = []), s.push(e);
  } else process.env.NODE_ENV !== "production" && !t && nt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Fu(e, t, n = X) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: l, call: a } = n, f = (L) => {
    (n.onWarn || nt)(
      "Invalid watch source: ",
      L,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (L) => o ? L : /* @__PURE__ */ De(L) || o === !1 || o === 0 ? At(L, 1) : At(L);
  let c, p, m, E, b = !1, O = !1;
  if (/* @__PURE__ */ pe(e) ? (p = () => e.value, b = /* @__PURE__ */ De(e)) : /* @__PURE__ */ Ut(e) ? (p = () => u(e), b = !0) : I(e) ? (O = !0, b = e.some((L) => /* @__PURE__ */ Ut(L) || /* @__PURE__ */ De(L)), p = () => e.map((L) => {
    if (/* @__PURE__ */ pe(L))
      return L.value;
    if (/* @__PURE__ */ Ut(L))
      return u(L);
    if (H(L))
      return a ? a(L, 2) : L();
    process.env.NODE_ENV !== "production" && f(L);
  })) : H(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (m) {
      st();
      try {
        m();
      } finally {
        ot();
      }
    }
    const L = Qt;
    Qt = c;
    try {
      return a ? a(e, 3, [E]) : e(E);
    } finally {
      Qt = L;
    }
  } : (p = be, process.env.NODE_ENV !== "production" && f(e)), t && o) {
    const L = p, z = o === !0 ? 1 / 0 : o;
    p = () => At(L(), z);
  }
  const D = hu(), M = () => {
    c.stop(), D && D.active && Hr(D.effects, c);
  };
  if (r && t) {
    const L = t;
    t = (...z) => {
      L(...z), M();
    };
  }
  let B = O ? new Array(e.length).fill(_s) : _s;
  const ee = (L) => {
    if (!(!(c.flags & 1) || !c.dirty && !L))
      if (t) {
        const z = c.run();
        if (o || b || (O ? z.some((me, ue) => Ft(me, B[ue])) : Ft(z, B))) {
          m && m();
          const me = Qt;
          Qt = c;
          try {
            const ue = [
              z,
              // pass undefined as the old value when it's changed for the first time
              B === _s ? void 0 : O && B[0] === _s ? [] : B,
              E
            ];
            B = z, a ? a(t, 3, ue) : (
              // @ts-expect-error
              t(...ue)
            );
          } finally {
            Qt = me;
          }
        }
      } else
        c.run();
  };
  return l && l(ee), c = new Xl(p), c.scheduler = i ? () => i(ee, !1) : ee, E = (L) => Bu(L, !1, c), m = c.onStop = () => {
    const L = js.get(c);
    if (L) {
      if (a)
        a(L, 4);
      else
        for (const z of L) z();
      js.delete(c);
    }
  }, process.env.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? s ? ee(!0) : B = c.run() : i ? i(ee.bind(null, !0), !0) : c.run(), M.pause = c.pause.bind(c), M.resume = c.resume.bind(c), M.stop = M, M;
}
function At(e, t = 1 / 0, n) {
  if (t <= 0 || !J(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ pe(e))
    At(e.value, t, n);
  else if (I(e))
    for (let s = 0; s < e.length; s++)
      At(e[s], t, n);
  else if (Tn(e) || tn(e))
    e.forEach((s) => {
      At(s, t, n);
    });
  else if (ql(e)) {
    for (const s in e)
      At(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && At(e[s], t, n);
  }
  return e;
}
const sn = [];
function Cs(e) {
  sn.push(e);
}
function Ts() {
  sn.pop();
}
let zo = !1;
function T(e, ...t) {
  if (zo) return;
  zo = !0, st();
  const n = sn.length ? sn[sn.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Uu();
  if (s)
    An(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, l;
          return (l = (i = r.toString) == null ? void 0 : i.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: r }) => `at <${vs(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...Ku(o)), console.warn(...r);
  }
  ot(), zo = !1;
}
function Uu() {
  let e = sn[sn.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Ku(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Wu(n));
  }), t;
}
function Wu({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${vs(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...zu(e.props), r] : [o + r];
}
function zu(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...va(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function va(e, t, n) {
  return re(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : /* @__PURE__ */ pe(t) ? (t = va(e, /* @__PURE__ */ W(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : H(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = /* @__PURE__ */ W(t), n ? t : [`${e}=`, t]);
}
const Gr = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function An(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    ps(o, t, n);
  }
}
function Et(e, t, n, s) {
  if (H(e)) {
    const o = An(e, t, n, s);
    return o && jr(o) && o.catch((r) => {
      ps(r, t, n);
    }), o;
  }
  if (I(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(Et(e[r], t, n, s));
    return o;
  } else process.env.NODE_ENV !== "production" && T(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function ps(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || X;
  if (t) {
    let l = t.parent;
    const a = t.proxy, f = process.env.NODE_ENV !== "production" ? Gr[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let c = 0; c < u.length; c++)
          if (u[c](e, a, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      st(), An(r, null, 10, [
        e,
        a,
        f
      ]), ot();
      return;
    }
  }
  qu(e, n, o, s, i);
}
function qu(e, t, n, s = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = Gr[t];
    if (n && Cs(n), T(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Ts(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const Oe = [];
let dt = -1;
const vn = [];
let Vt = null, hn = 0;
const ba = /* @__PURE__ */ Promise.resolve();
let $s = null;
const Gu = 100;
function bn(e) {
  const t = $s || ba;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ju(e) {
  let t = dt + 1, n = Oe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = Oe[s], r = os(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Po(e) {
  if (!(e.flags & 1)) {
    const t = os(e), n = Oe[Oe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= os(n) ? Oe.push(e) : Oe.splice(Ju(t), 0, e), e.flags |= 1, ya();
  }
}
function ya() {
  $s || ($s = ba.then(xa));
}
function Ea(e) {
  I(e) ? vn.push(...e) : Vt && e.id === -1 ? Vt.splice(hn + 1, 0, e) : e.flags & 1 || (vn.push(e), e.flags |= 1), ya();
}
function Li(e, t, n = dt + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Oe.length; n++) {
    const s = Oe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || process.env.NODE_ENV !== "production" && Jr(t, s))
        continue;
      Oe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function _a(e) {
  if (vn.length) {
    const t = [...new Set(vn)].sort(
      (n, s) => os(n) - os(s)
    );
    if (vn.length = 0, Vt) {
      Vt.push(...t);
      return;
    }
    for (Vt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), hn = 0; hn < Vt.length; hn++) {
      const n = Vt[hn];
      process.env.NODE_ENV !== "production" && Jr(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Vt = null, hn = 0;
  }
}
const os = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function xa(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => Jr(e, n) : be;
  try {
    for (dt = 0; dt < Oe.length; dt++) {
      const n = Oe[dt];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), An(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; dt < Oe.length; dt++) {
      const n = Oe[dt];
      n && (n.flags &= -2);
    }
    dt = -1, Oe.length = 0, _a(e), $s = null, (Oe.length || vn.length) && xa(e);
  }
}
function Jr(e, t) {
  const n = e.get(t) || 0;
  if (n > Gu) {
    const s = t.i, o = s && nc(s.type);
    return ps(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let vt = !1;
const Os = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (fs().__VUE_HMR_RUNTIME__ = {
  createRecord: qo(wa),
  rerender: qo(Qu),
  reload: qo(Zu)
});
const an = /* @__PURE__ */ new Map();
function Yu(e) {
  const t = e.type.__hmrId;
  let n = an.get(t);
  n || (wa(t, e.type), n = an.get(t)), n.instances.add(e);
}
function Xu(e) {
  an.get(e.type.__hmrId).instances.delete(e);
}
function wa(e, t) {
  return an.has(e) ? !1 : (an.set(e, {
    initialDef: Bs(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Bs(e) {
  return sc(e) ? e.__vccOpts : e;
}
function Qu(e, t) {
  const n = an.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Bs(s.type).render = t), s.renderCache = [], vt = !0, s.job.flags & 8 || s.update(), vt = !1;
  }));
}
function Zu(e, t) {
  const n = an.get(e);
  if (!n) return;
  t = Bs(t), Mi(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = Bs(r.type);
    let l = Os.get(i);
    l || (i !== n.initialDef && Mi(i, t), Os.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? Po(() => {
      r.job.flags & 8 || (vt = !0, r.parent.update(), vt = !1, l.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  Ea(() => {
    Os.clear();
  });
}
function Mi(e, t) {
  ce(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function qo(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Qe, Vn = [], vr = !1;
function hs(e, ...t) {
  Qe ? Qe.emit(e, ...t) : vr || Vn.push({ event: e, args: t });
}
function Yr(e, t) {
  var n, s;
  Qe = e, Qe ? (Qe.enabled = !0, Vn.forEach(({ event: o, args: r }) => Qe.emit(o, ...r)), Vn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Yr(r, t);
  }), setTimeout(() => {
    Qe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, vr = !0, Vn = []);
  }, 3e3)) : (vr = !0, Vn = []);
}
function ed(e, t) {
  hs("app:init", e, t, {
    Fragment: ye,
    Text: ms,
    Comment: Ke,
    Static: Ds
  });
}
function td(e) {
  hs("app:unmount", e);
}
const nd = /* @__PURE__ */ Xr(
  "component:added"
  /* COMPONENT_ADDED */
), ka = /* @__PURE__ */ Xr(
  "component:updated"
  /* COMPONENT_UPDATED */
), sd = /* @__PURE__ */ Xr(
  "component:removed"
  /* COMPONENT_REMOVED */
), od = (e) => {
  Qe && typeof Qe.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Qe.cleanupBuffer(e) && sd(e);
};
// @__NO_SIDE_EFFECTS__
function Xr(e) {
  return (t) => {
    hs(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const rd = /* @__PURE__ */ Na(
  "perf:start"
  /* PERFORMANCE_START */
), id = /* @__PURE__ */ Na(
  "perf:end"
  /* PERFORMANCE_END */
);
function Na(e) {
  return (t, n, s) => {
    hs(e, t.appContext.app, t.uid, t, n, s);
  };
}
function ld(e, t, n) {
  hs(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Ae = null, Ca = null;
function Fs(e) {
  const t = Ae;
  return Ae = e, Ca = e && e.type.__scopeId || null, t;
}
function ad(e, t = Ae, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Gs(-1);
    const r = Fs(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Fs(r), s._d && Gs(1);
    }
    return process.env.NODE_ENV !== "production" && ka(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Ta(e) {
  Xc(e) && T("Do not use built-in directive ids as custom directive id: " + e);
}
function xe(e, t) {
  if (Ae === null)
    return process.env.NODE_ENV !== "production" && T("withDirectives can only be used inside render functions."), e;
  const n = Ho(Ae), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, l, a = X] = t[o];
    r && (H(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && At(i), s.push({
      dir: r,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function Gt(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    r && (l.oldValue = r[i].value);
    let a = l.dir[s];
    a && (st(), Et(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ot());
  }
}
function cd(e, t) {
  if (process.env.NODE_ENV !== "production" && (!ge || ge.isMounted) && T("provide() can only be used inside setup()."), ge) {
    let n = ge.provides;
    const s = ge.parent && ge.parent.provides;
    s === n && (n = ge.provides = Object.create(s)), n[e] = t;
  }
}
function As(e, t, n = !1) {
  const s = li();
  if (s || yn) {
    let o = yn ? yn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && H(t) ? t.call(s && s.proxy) : t;
    process.env.NODE_ENV !== "production" && T(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && T("inject() can only be used inside setup() or functional components.");
}
const ud = /* @__PURE__ */ Symbol.for("v-scx"), dd = () => {
  {
    const e = As(ud);
    return e || process.env.NODE_ENV !== "production" && T(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function fd(e, t) {
  return Qr(e, null, t);
}
function Kn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !H(t) && T(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Qr(e, t, n);
}
function Qr(e, t, n = X) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (s !== void 0 && T(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && T(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && T(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = ce({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = T);
  const a = t && s || !t && r !== "post";
  let f;
  if (is) {
    if (r === "sync") {
      const m = dd();
      f = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = be, m.resume = be, m.pause = be, m;
    }
  }
  const u = ge;
  l.call = (m, E, b) => Et(m, u, E, b);
  let c = !1;
  r === "post" ? l.scheduler = (m) => {
    Ie(m, u && u.suspense);
  } : r !== "sync" && (c = !0, l.scheduler = (m, E) => {
    E ? m() : Po(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), c && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const p = Fu(e, t, l);
  return is && (f ? f.push(p) : a && p()), p;
}
function pd(e, t, n) {
  const s = this.proxy, o = re(e) ? e.includes(".") ? Oa(s, e) : () => s[e] : e.bind(s, s);
  let r;
  H(t) ? r = t : (r = t.handler, n = t);
  const i = gs(this), l = Qr(o, r.bind(s), n);
  return i(), l;
}
function Oa(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const hd = /* @__PURE__ */ Symbol("_vte"), md = (e) => e.__isTeleport, gd = /* @__PURE__ */ Symbol("_leaveCb");
function Zr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Zr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function vd(e, t) {
  return H(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ce({ name: e.name }, t, { setup: e })
  ) : e;
}
function Aa(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Ii = /* @__PURE__ */ new WeakSet();
function Pi(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Us = /* @__PURE__ */ new WeakMap();
function Wn(e, t, n, s, o = !1) {
  if (I(e)) {
    e.forEach(
      (b, O) => Wn(
        b,
        t && (I(t) ? t[O] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (zn(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Wn(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? Ho(s.component) : s.el, i = o ? null : r, { i: l, r: a } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    T(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, u = l.refs === X ? l.refs = {} : l.refs, c = l.setupState, p = /* @__PURE__ */ W(c), m = c === X ? Wl : (b) => process.env.NODE_ENV !== "production" && (G(p, b) && !/* @__PURE__ */ pe(p[b]) && T(
    `Template ref "${b}" used on a non-ref value. It will not work in the production build.`
  ), Ii.has(p[b])) || Pi(u, b) ? !1 : G(p, b), E = (b, O) => !(process.env.NODE_ENV !== "production" && Ii.has(b) || O && Pi(u, O));
  if (f != null && f !== a) {
    if (Ri(t), re(f))
      u[f] = null, m(f) && (c[f] = null);
    else if (/* @__PURE__ */ pe(f)) {
      const b = t;
      E(f, b.k) && (f.value = null), b.k && (u[b.k] = null);
    }
  }
  if (H(a))
    An(a, l, 12, [i, u]);
  else {
    const b = re(a), O = /* @__PURE__ */ pe(a);
    if (b || O) {
      const D = () => {
        if (e.f) {
          const M = b ? m(a) ? c[a] : u[a] : E(a) || !e.k ? a.value : u[e.k];
          if (o)
            I(M) && Hr(M, r);
          else if (I(M))
            M.includes(r) || M.push(r);
          else if (b)
            u[a] = [r], m(a) && (c[a] = u[a]);
          else {
            const B = [r];
            E(a, e.k) && (a.value = B), e.k && (u[e.k] = B);
          }
        } else b ? (u[a] = i, m(a) && (c[a] = i)) : O ? (E(a, e.k) && (a.value = i), e.k && (u[e.k] = i)) : process.env.NODE_ENV !== "production" && T("Invalid template ref type:", a, `(${typeof a})`);
      };
      if (i) {
        const M = () => {
          D(), Us.delete(e);
        };
        M.id = -1, Us.set(e, M), Ie(M, n);
      } else
        Ri(e), D();
    } else process.env.NODE_ENV !== "production" && T("Invalid template ref type:", a, `(${typeof a})`);
  }
}
function Ri(e) {
  const t = Us.get(e);
  t && (t.flags |= 8, Us.delete(e));
}
fs().requestIdleCallback;
fs().cancelIdleCallback;
const zn = (e) => !!e.type.__asyncLoader, ei = (e) => e.type.__isKeepAlive;
function bd(e, t) {
  Sa(e, "a", t);
}
function yd(e, t) {
  Sa(e, "da", t);
}
function Sa(e, t, n = ge) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Ro(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      ei(o.parent.vnode) && Ed(s, t, n, o), o = o.parent;
  }
}
function Ed(e, t, n, s) {
  const o = Ro(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Da(() => {
    Hr(s[t], o);
  }, n);
}
function Ro(e, t, n = ge, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      st();
      const l = gs(n), a = Et(t, n, e, i);
      return l(), ot(), a;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const o = Xt(Gr[e].replace(/ hook$/, ""));
    T(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Lt = (e) => (t, n = ge) => {
  (!is || e === "sp") && Ro(e, (...s) => t(...s), n);
}, _d = Lt("bm"), Ks = Lt("m"), xd = Lt(
  "bu"
), wd = Lt("u"), ti = Lt(
  "bum"
), Da = Lt("um"), kd = Lt(
  "sp"
), Nd = Lt("rtg"), Cd = Lt("rtc");
function Td(e, t = ge) {
  Ro("ec", e, t);
}
const Od = /* @__PURE__ */ Symbol.for("v-ndc");
function Go(e, t, n, s) {
  let o;
  const r = n, i = I(e);
  if (i || re(e)) {
    const l = i && /* @__PURE__ */ Ut(e);
    let a = !1, f = !1;
    l && (a = !/* @__PURE__ */ De(e), f = /* @__PURE__ */ rt(e), e = Lo(e)), o = new Array(e.length);
    for (let u = 0, c = e.length; u < c; u++)
      o[u] = t(
        a ? f ? wn(it(e[u])) : it(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && T(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, r);
  } else if (J(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, f = l.length; a < f; a++) {
        const u = l[a];
        o[a] = t(e[u], u, a, r);
      }
    }
  else
    o = [];
  return o;
}
const br = (e) => e ? ec(e) ? Ho(e) : br(e.parent) : null, on = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ce(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ gt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ gt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ gt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ gt(e.refs) : e.refs,
    $parent: (e) => br(e.parent),
    $root: (e) => br(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ia(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Po(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = bn.bind(e.proxy)),
    $watch: (e) => pd.bind(e)
  })
), ni = (e) => e === "_" || e === "$", Jo = (e, t) => e !== X && !e.__isScriptSetup && G(e, t), La = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: l, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (t[0] !== "$") {
      const p = i[t];
      if (p !== void 0)
        switch (p) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Jo(s, t))
          return i[t] = 1, s[t];
        if (o !== X && G(o, t))
          return i[t] = 2, o[t];
        if (G(r, t))
          return i[t] = 3, r[t];
        if (n !== X && G(n, t))
          return i[t] = 4, n[t];
        yr && (i[t] = 0);
      }
    }
    const f = on[t];
    let u, c;
    if (f)
      return t === "$attrs" ? (ve(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && zs()) : process.env.NODE_ENV !== "production" && t === "$slots" && ve(e, "get", t), f(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== X && G(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      c = a.config.globalProperties, G(c, t)
    )
      return c[t];
    process.env.NODE_ENV !== "production" && Ae && (!re(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== X && ni(t[0]) && G(o, t) ? T(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Ae && T(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return Jo(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && G(o, t) ? (T(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== X && G(s, t) ? (s[t] = n, !0) : G(e.props, t) ? (process.env.NODE_ENV !== "production" && T(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && T(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: r, type: i }
  }, l) {
    let a;
    return !!(n[l] || e !== X && l[0] !== "$" && G(e, l) || Jo(t, l) || G(r, l) || G(s, l) || G(on, l) || G(o.config.globalProperties, l) || (a = i.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : G(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (La.ownKeys = (e) => (T(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ad(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(on).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => on[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: be
    });
  }), t;
}
function Sd(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: be
    });
  });
}
function Dd(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(/* @__PURE__ */ W(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (ni(s[0])) {
        T(
          `setup() return property ${JSON.stringify(
            s
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s],
        set: be
      });
    }
  });
}
function Vi(e) {
  return I(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Ld() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? T(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let yr = !0;
function Md(e) {
  const t = Ia(e), n = e.proxy, s = e.ctx;
  yr = !1, t.beforeCreate && Hi(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: r,
    methods: i,
    watch: l,
    provide: a,
    inject: f,
    // lifecycle
    created: u,
    beforeMount: c,
    mounted: p,
    beforeUpdate: m,
    updated: E,
    activated: b,
    deactivated: O,
    beforeDestroy: D,
    beforeUnmount: M,
    destroyed: B,
    unmounted: ee,
    render: L,
    renderTracked: z,
    renderTriggered: me,
    errorCaptured: ue,
    serverPrefetch: de,
    // public API
    expose: ke,
    inheritAttrs: $e,
    // assets
    components: _e,
    directives: _t,
    filters: Mt
  } = t, Ne = process.env.NODE_ENV !== "production" ? Ld() : null;
  if (process.env.NODE_ENV !== "production") {
    const [j] = e.propsOptions;
    if (j)
      for (const U in j)
        Ne("Props", U);
  }
  if (f && Id(f, s, Ne), i)
    for (const j in i) {
      const U = i[j];
      H(U) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(s, j, {
        value: U.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[j] = U.bind(n), process.env.NODE_ENV !== "production" && Ne("Methods", j)) : process.env.NODE_ENV !== "production" && T(
        `Method "${j}" has type "${typeof U}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !H(o) && T(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const j = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && jr(j) && T(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !J(j))
      process.env.NODE_ENV !== "production" && T("data() should return an object.");
    else if (e.data = /* @__PURE__ */ qr(j), process.env.NODE_ENV !== "production")
      for (const U in j)
        Ne("Data", U), ni(U[0]) || Object.defineProperty(s, U, {
          configurable: !0,
          enumerable: !0,
          get: () => j[U],
          set: be
        });
  }
  if (yr = !0, r)
    for (const j in r) {
      const U = r[j], Be = H(U) ? U.bind(n, n) : H(U.get) ? U.get.bind(n, n) : be;
      process.env.NODE_ENV !== "production" && Be === be && T(`Computed property "${j}" has no getter.`);
      const Sn = !H(U) && H(U.set) ? U.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        T(
          `Write operation failed: computed property "${j}" is readonly.`
        );
      } : be, zt = jn({
        get: Be,
        set: Sn
      });
      Object.defineProperty(s, j, {
        enumerable: !0,
        configurable: !0,
        get: () => zt.value,
        set: (It) => zt.value = It
      }), process.env.NODE_ENV !== "production" && Ne("Computed", j);
    }
  if (l)
    for (const j in l)
      Ma(l[j], s, n, j);
  if (a) {
    const j = H(a) ? a.call(n) : a;
    Reflect.ownKeys(j).forEach((U) => {
      cd(U, j[U]);
    });
  }
  u && Hi(u, e, "c");
  function oe(j, U) {
    I(U) ? U.forEach((Be) => j(Be.bind(n))) : U && j(U.bind(n));
  }
  if (oe(_d, c), oe(Ks, p), oe(xd, m), oe(wd, E), oe(bd, b), oe(yd, O), oe(Td, ue), oe(Cd, z), oe(Nd, me), oe(ti, M), oe(Da, ee), oe(kd, de), I(ke))
    if (ke.length) {
      const j = e.exposed || (e.exposed = {});
      ke.forEach((U) => {
        Object.defineProperty(j, U, {
          get: () => n[U],
          set: (Be) => n[U] = Be,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  L && e.render === be && (e.render = L), $e != null && (e.inheritAttrs = $e), _e && (e.components = _e), _t && (e.directives = _t), de && Aa(e);
}
function Id(e, t, n = be) {
  I(e) && (e = Er(e));
  for (const s in e) {
    const o = e[s];
    let r;
    J(o) ? "default" in o ? r = As(
      o.from || s,
      o.default,
      !0
    ) : r = As(o.from || s) : r = As(o), /* @__PURE__ */ pe(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, process.env.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Hi(e, t, n) {
  Et(
    I(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ma(e, t, n, s) {
  let o = s.includes(".") ? Oa(n, s) : () => n[s];
  if (re(e)) {
    const r = t[e];
    H(r) ? Kn(o, r) : process.env.NODE_ENV !== "production" && T(`Invalid watch handler specified by key "${e}"`, r);
  } else if (H(e))
    Kn(o, e.bind(n));
  else if (J(e))
    if (I(e))
      e.forEach((r) => Ma(r, t, n, s));
    else {
      const r = H(e.handler) ? e.handler.bind(n) : t[e.handler];
      H(r) ? Kn(o, r, e) : process.env.NODE_ENV !== "production" && T(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else process.env.NODE_ENV !== "production" && T(`Invalid watch option: "${s}"`, e);
}
function Ia(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (f) => Ws(a, f, i, !0)
  ), Ws(a, t, i)), J(t) && r.set(t, a), a;
}
function Ws(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && Ws(e, r, n, !0), o && o.forEach(
    (i) => Ws(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      process.env.NODE_ENV !== "production" && T(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Pd[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Pd = {
  data: ji,
  props: $i,
  emits: $i,
  // objects
  methods: Hn,
  computed: Hn,
  // lifecycle
  beforeCreate: Te,
  created: Te,
  beforeMount: Te,
  mounted: Te,
  beforeUpdate: Te,
  updated: Te,
  beforeDestroy: Te,
  beforeUnmount: Te,
  destroyed: Te,
  unmounted: Te,
  activated: Te,
  deactivated: Te,
  errorCaptured: Te,
  serverPrefetch: Te,
  // assets
  components: Hn,
  directives: Hn,
  // watch
  watch: Vd,
  // provide / inject
  provide: ji,
  inject: Rd
};
function ji(e, t) {
  return t ? e ? function() {
    return ce(
      H(e) ? e.call(this, this) : e,
      H(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Rd(e, t) {
  return Hn(Er(e), Er(t));
}
function Er(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Te(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Hn(e, t) {
  return e ? ce(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function $i(e, t) {
  return e ? I(e) && I(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ce(
    /* @__PURE__ */ Object.create(null),
    Vi(e),
    Vi(t ?? {})
  ) : t;
}
function Vd(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ce(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Te(e[s], t[s]);
  return n;
}
function Pa() {
  return {
    app: null,
    config: {
      isNativeTag: Wl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Hd = 0;
function jd(e, t) {
  return function(s, o = null) {
    H(s) || (s = ce({}, s)), o != null && !J(o) && (process.env.NODE_ENV !== "production" && T("root props passed to app.mount() must be an object."), o = null);
    const r = Pa(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const f = r.app = {
      _uid: Hd++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Xi,
      get config() {
        return r.config;
      },
      set config(u) {
        process.env.NODE_ENV !== "production" && T(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...c) {
        return i.has(u) ? process.env.NODE_ENV !== "production" && T("Plugin has already been applied to target app.") : u && H(u.install) ? (i.add(u), u.install(f, ...c)) : H(u) ? (i.add(u), u(f, ...c)) : process.env.NODE_ENV !== "production" && T(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(u) {
        return r.mixins.includes(u) ? process.env.NODE_ENV !== "production" && T(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : r.mixins.push(u), f;
      },
      component(u, c) {
        return process.env.NODE_ENV !== "production" && Nr(u, r.config), c ? (process.env.NODE_ENV !== "production" && r.components[u] && T(`Component "${u}" has already been registered in target app.`), r.components[u] = c, f) : r.components[u];
      },
      directive(u, c) {
        return process.env.NODE_ENV !== "production" && Ta(u), c ? (process.env.NODE_ENV !== "production" && r.directives[u] && T(`Directive "${u}" has already been registered in target app.`), r.directives[u] = c, f) : r.directives[u];
      },
      mount(u, c, p) {
        if (a)
          process.env.NODE_ENV !== "production" && T(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && u.__vue_app__ && T(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = f._ceVNode || Se(s, o);
          return m.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            const E = Wt(m);
            E.el = null, e(E, u, p);
          }), e(m, u, p), a = !0, f._container = u, u.__vue_app__ = f, process.env.NODE_ENV !== "production" && (f._instance = m.component, ed(f, Xi)), Ho(m.component);
        }
      },
      onUnmount(u) {
        process.env.NODE_ENV !== "production" && typeof u != "function" && T(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), l.push(u);
      },
      unmount() {
        a ? (Et(
          l,
          f._instance,
          16
        ), e(null, f._container), process.env.NODE_ENV !== "production" && (f._instance = null, td(f)), delete f._container.__vue_app__) : process.env.NODE_ENV !== "production" && T("Cannot unmount an app that is not mounted.");
      },
      provide(u, c) {
        return process.env.NODE_ENV !== "production" && u in r.provides && (G(r.provides, u) ? T(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ) : T(
          `App already provides property with key "${String(u)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[u] = c, f;
      },
      runWithContext(u) {
        const c = yn;
        yn = f;
        try {
          return u();
        } finally {
          yn = c;
        }
      }
    };
    return f;
  };
}
let yn = null;
const $d = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${et(t)}Modifiers`] || e[`${Kt(t)}Modifiers`];
function Bd(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || X;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [c]
    } = e;
    if (u)
      if (!(t in u))
        (!c || !(Xt(et(t)) in c)) && T(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Xt(et(t))}" prop.`
        );
      else {
        const p = u[t];
        H(p) && (p(...n) || T(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && $d(s, t.slice(7));
  if (i && (i.trim && (o = n.map((u) => re(u) ? u.trim() : u)), i.number && (o = n.map(So))), process.env.NODE_ENV !== "production" && ld(e, t, o), process.env.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && s[Xt(u)] && T(
      `Event "${u}" is emitted in component ${vs(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Kt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = Xt(t)] || // also try camelCase event handler (#2249)
  s[l = Xt(et(t))];
  !a && r && (a = s[l = Xt(Kt(t))]), a && Et(
    a,
    e,
    6,
    o
  );
  const f = s[l + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Et(
      f,
      e,
      6,
      o
    );
  }
}
const Fd = /* @__PURE__ */ new WeakMap();
function Ra(e, t, n = !1) {
  const s = n ? Fd : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, l = !1;
  if (!H(e)) {
    const a = (f) => {
      const u = Ra(f, t, !0);
      u && (l = !0, ce(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (J(e) && s.set(e, null), null) : (I(r) ? r.forEach((a) => i[a] = null) : ce(i, r), J(e) && s.set(e, i), i);
}
function Vo(e, t) {
  return !e || !us(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), G(e, t[0].toLowerCase() + t.slice(1)) || G(e, Kt(t)) || G(e, t));
}
let _r = !1;
function zs() {
  _r = !0;
}
function Bi(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [r],
    slots: i,
    attrs: l,
    emit: a,
    render: f,
    renderCache: u,
    props: c,
    data: p,
    setupState: m,
    ctx: E,
    inheritAttrs: b
  } = e, O = Fs(e);
  let D, M;
  process.env.NODE_ENV !== "production" && (_r = !1);
  try {
    if (n.shapeFlag & 4) {
      const L = o || s, z = process.env.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(L, {
        get(me, ue, de) {
          return T(
            `Property '${String(
              ue
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(me, ue, de);
        }
      }) : L;
      D = Xe(
        f.call(
          z,
          L,
          u,
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ gt(c) : c,
          m,
          p,
          E
        )
      ), M = l;
    } else {
      const L = t;
      process.env.NODE_ENV !== "production" && l === c && zs(), D = Xe(
        L.length > 1 ? L(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ gt(c) : c,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return zs(), /* @__PURE__ */ gt(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : L(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ gt(c) : c,
          null
        )
      ), M = t.props ? l : Ud(l);
    }
  } catch (L) {
    qn.length = 0, ps(L, e, 1), D = Se(Ke);
  }
  let B = D, ee;
  if (process.env.NODE_ENV !== "production" && D.patchFlag > 0 && D.patchFlag & 2048 && ([B, ee] = Va(D)), M && b !== !1) {
    const L = Object.keys(M), { shapeFlag: z } = B;
    if (L.length) {
      if (z & 7)
        r && L.some(Rs) && (M = Kd(
          M,
          r
        )), B = Wt(B, M, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !_r && B.type !== Ke) {
        const me = Object.keys(l), ue = [], de = [];
        for (let ke = 0, $e = me.length; ke < $e; ke++) {
          const _e = me[ke];
          us(_e) ? Rs(_e) || ue.push(_e[2].toLowerCase() + _e.slice(3)) : de.push(_e);
        }
        de.length && T(
          `Extraneous non-props attributes (${de.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), ue.length && T(
          `Extraneous non-emits event listeners (${ue.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Fi(B) && T(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), B = Wt(B, null, !1, !0), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Fi(B) && T(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Zr(B, n.transition)), process.env.NODE_ENV !== "production" && ee ? ee(B) : D = B, Fs(O), D;
}
const Va = (e) => {
  const t = e.children, n = e.dynamicChildren, s = si(t, !1);
  if (s) {
    if (process.env.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return Va(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (l) => {
    t[o] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Xe(s), i];
};
function si(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (kn(o)) {
      if (o.type !== Ke || o.children === "v-if") {
        if (n)
          return;
        if (n = o, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return si(n.children);
      }
    } else
      return;
  }
  return n;
}
const Ud = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || us(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Kd = (e, t) => {
  const n = {};
  for (const s in e)
    (!Rs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Fi = (e) => e.shapeFlag & 7 || e.type === Ke;
function Wd(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: l, patchFlag: a } = t, f = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (o || l) && vt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Ui(s, i, f) : !!i;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        const p = u[c];
        if (Ha(i, s, p) && !Vo(f, p))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? Ui(s, i, f) : !0 : !!i;
  return !1;
}
function Ui(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (Ha(t, e, r) && !Vo(n, r))
      return !0;
  }
  return !1;
}
function Ha(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && J(s) && J(o) ? !On(s, o) : s !== o;
}
function zd({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ja = {}, $a = () => Object.create(ja), Ba = (e) => Object.getPrototypeOf(e) === ja;
function qd(e, t, n, s = !1) {
  const o = {}, r = $a();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Fa(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  process.env.NODE_ENV !== "production" && Ka(t || {}, o, e), n ? e.props = s ? o : /* @__PURE__ */ Mu(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function Gd(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Jd(e, t, n, s) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = /* @__PURE__ */ W(o), [a] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Gd(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        let p = u[c];
        if (Vo(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (a)
          if (G(r, p))
            m !== r[p] && (r[p] = m, f = !0);
          else {
            const E = et(p);
            o[E] = xr(
              a,
              l,
              E,
              m,
              e,
              !1
            );
          }
        else
          m !== r[p] && (r[p] = m, f = !0);
      }
    }
  } else {
    Fa(e, t, o, r) && (f = !0);
    let u;
    for (const c in l)
      (!t || // for camelCase
      !G(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Kt(c)) === c || !G(t, u))) && (a ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[c] = xr(
        a,
        l,
        c,
        void 0,
        e,
        !0
      )) : delete o[c]);
    if (r !== l)
      for (const c in r)
        (!t || !G(t, c)) && (delete r[c], f = !0);
  }
  f && mt(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Ka(t || {}, o, e);
}
function Fa(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (Bn(a))
        continue;
      const f = t[a];
      let u;
      o && G(o, u = et(a)) ? !r || !r.includes(u) ? n[u] = f : (l || (l = {}))[u] = f : Vo(e.emitsOptions, a) || (!(a in s) || f !== s[a]) && (s[a] = f, i = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ W(n), f = l || X;
    for (let u = 0; u < r.length; u++) {
      const c = r[u];
      n[c] = xr(
        o,
        a,
        c,
        f[c],
        e,
        !G(f, c)
      );
    }
  }
  return i;
}
function xr(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const l = G(i, "default");
    if (l && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && H(a)) {
        const { propsDefaults: f } = o;
        if (n in f)
          s = f[n];
        else {
          const u = gs(o);
          s = f[n] = a.call(
            null,
            t
          ), u();
        }
      } else
        s = a;
      o.ce && o.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !l ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Kt(n)) && (s = !0));
  }
  return s;
}
const Yd = /* @__PURE__ */ new WeakMap();
function Ua(e, t, n = !1) {
  const s = n ? Yd : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, l = [];
  let a = !1;
  if (!H(e)) {
    const u = (c) => {
      a = !0;
      const [p, m] = Ua(c, t, !0);
      ce(i, p), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !a)
    return J(e) && s.set(e, gn), gn;
  if (I(r))
    for (let u = 0; u < r.length; u++) {
      process.env.NODE_ENV !== "production" && !re(r[u]) && T("props must be strings when using array syntax.", r[u]);
      const c = et(r[u]);
      Ki(c) && (i[c] = X);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !J(r) && T("invalid props options", r);
    for (const u in r) {
      const c = et(u);
      if (Ki(c)) {
        const p = r[u], m = i[c] = I(p) || H(p) ? { type: p } : ce({}, p), E = m.type;
        let b = !1, O = !0;
        if (I(E))
          for (let D = 0; D < E.length; ++D) {
            const M = E[D], B = H(M) && M.name;
            if (B === "Boolean") {
              b = !0;
              break;
            } else B === "String" && (O = !1);
          }
        else
          b = H(E) && E.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = b, m[
          1
          /* shouldCastTrue */
        ] = O, (b || G(m, "default")) && l.push(c);
      }
    }
  }
  const f = [i, l];
  return J(e) && s.set(e, f), f;
}
function Ki(e) {
  return e[0] !== "$" && !Bn(e) ? !0 : (process.env.NODE_ENV !== "production" && T(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Xd(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Ka(e, t, n) {
  const s = /* @__PURE__ */ W(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => et(i));
  for (const i in o) {
    let l = o[i];
    l != null && Qd(
      i,
      s[i],
      l,
      process.env.NODE_ENV !== "production" ? /* @__PURE__ */ gt(s) : s,
      !r.includes(i)
    );
  }
}
function Qd(e, t, n, s, o) {
  const { type: r, required: i, validator: l, skipCheck: a } = n;
  if (i && o) {
    T('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !a) {
      let f = !1;
      const u = I(r) ? r : [r], c = [];
      for (let p = 0; p < u.length && !f; p++) {
        const { valid: m, expectedType: E } = ef(t, u[p]);
        c.push(E || ""), f = m;
      }
      if (!f) {
        T(tf(e, t, c));
        return;
      }
    }
    l && !l(t, s) && T('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Zd = /* @__PURE__ */ Dt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function ef(e, t) {
  let n;
  const s = Xd(t);
  if (s === "null")
    n = e === null;
  else if (Zd(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = J(e) : s === "Array" ? n = I(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function tf(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Ao).join(" | ")}`;
  const o = n[0], r = $r(t), i = Wi(t, o), l = Wi(t, r);
  return n.length === 1 && zi(o) && !nf(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, zi(r) && (s += `with value ${l}.`), s;
}
function Wi(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function zi(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function nf(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const oi = (e) => e === "_" || e === "_ctx" || e === "$stable", ri = (e) => I(e) ? e.map(Xe) : [Xe(e)], sf = (e, t, n) => {
  if (t._n)
    return t;
  const s = ad((...o) => (process.env.NODE_ENV !== "production" && ge && !(n === null && Ae) && !(n && n.root !== ge.root) && T(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), ri(t(...o))), n);
  return s._c = !1, s;
}, Wa = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (oi(o)) continue;
    const r = e[o];
    if (H(r))
      t[o] = sf(o, r, s);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && T(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = ri(r);
      t[o] = () => i;
    }
  }
}, za = (e, t) => {
  process.env.NODE_ENV !== "production" && !ei(e.vnode) && T(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = ri(t);
  e.slots.default = () => n;
}, wr = (e, t, n) => {
  for (const s in t)
    (n || !oi(s)) && (e[s] = t[s]);
}, of = (e, t, n) => {
  const s = e.slots = $a();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (wr(s, t, n), n && Vs(s, "_", o, !0)) : Wa(t, s);
  } else t && za(e, t);
}, rf = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = X;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && vt ? (wr(o, t, n), mt(e, "set", "$slots")) : n && l === 1 ? r = !1 : wr(o, t, n) : (r = !t.$stable, Wa(t, o)), i = t;
  } else t && (za(e, t), i = { default: 1 });
  if (r)
    for (const l in o)
      !oi(l) && i[l] == null && delete o[l];
};
let In, Tt;
function dn(e, t) {
  e.appContext.config.performance && qs() && Tt.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && rd(e, t, qs() ? Tt.now() : Date.now());
}
function fn(e, t) {
  if (e.appContext.config.performance && qs()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end", o = `<${vs(e, e.type)}> ${t}`;
    Tt.mark(s), Tt.measure(o, n, s), Tt.clearMeasures(o), Tt.clearMarks(n), Tt.clearMarks(s);
  }
  process.env.NODE_ENV !== "production" && id(e, t, qs() ? Tt.now() : Date.now());
}
function qs() {
  return In !== void 0 || (typeof window < "u" && window.performance ? (In = !0, Tt = window.performance) : In = !1), In;
}
function lf() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ie = ff;
function af(e) {
  return cf(e);
}
function cf(e, t) {
  lf();
  const n = fs();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Yr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: a,
    setText: f,
    setElementText: u,
    parentNode: c,
    nextSibling: p,
    setScopeId: m = be,
    insertStaticContent: E
  } = e, b = (d, h, v, w = null, y = null, _ = null, A = void 0, C = null, N = process.env.NODE_ENV !== "production" && vt ? !1 : !!h.dynamicChildren) => {
    if (d === h)
      return;
    d && !Pn(d, h) && (w = qt(d), Ye(d, y, _, !0), d = null), h.patchFlag === -2 && (N = !1, h.dynamicChildren = null);
    const { type: x, ref: V, shapeFlag: S } = h;
    switch (x) {
      case ms:
        O(d, h, v, w);
        break;
      case Ke:
        D(d, h, v, w);
        break;
      case Ds:
        d == null ? M(h, v, w, A) : process.env.NODE_ENV !== "production" && B(d, h, v, A);
        break;
      case ye:
        _t(
          d,
          h,
          v,
          w,
          y,
          _,
          A,
          C,
          N
        );
        break;
      default:
        S & 1 ? z(
          d,
          h,
          v,
          w,
          y,
          _,
          A,
          C,
          N
        ) : S & 6 ? Mt(
          d,
          h,
          v,
          w,
          y,
          _,
          A,
          C,
          N
        ) : S & 64 || S & 128 ? x.process(
          d,
          h,
          v,
          w,
          y,
          _,
          A,
          C,
          N,
          qe
        ) : process.env.NODE_ENV !== "production" && T("Invalid VNode type:", x, `(${typeof x})`);
    }
    V != null && y ? Wn(V, d && d.ref, _, h || d, !h) : V == null && d && d.ref != null && Wn(d.ref, null, _, d, !0);
  }, O = (d, h, v, w) => {
    if (d == null)
      s(
        h.el = l(h.children),
        v,
        w
      );
    else {
      const y = h.el = d.el;
      h.children !== d.children && f(y, h.children);
    }
  }, D = (d, h, v, w) => {
    d == null ? s(
      h.el = a(h.children || ""),
      v,
      w
    ) : h.el = d.el;
  }, M = (d, h, v, w) => {
    [d.el, d.anchor] = E(
      d.children,
      h,
      v,
      w,
      d.el,
      d.anchor
    );
  }, B = (d, h, v, w) => {
    if (h.children !== d.children) {
      const y = p(d.anchor);
      L(d), [h.el, h.anchor] = E(
        h.children,
        v,
        y,
        w
      );
    } else
      h.el = d.el, h.anchor = d.anchor;
  }, ee = ({ el: d, anchor: h }, v, w) => {
    let y;
    for (; d && d !== h; )
      y = p(d), s(d, v, w), d = y;
    s(h, v, w);
  }, L = ({ el: d, anchor: h }) => {
    let v;
    for (; d && d !== h; )
      v = p(d), o(d), d = v;
    o(h);
  }, z = (d, h, v, w, y, _, A, C, N) => {
    if (h.type === "svg" ? A = "svg" : h.type === "math" && (A = "mathml"), d == null)
      me(
        h,
        v,
        w,
        y,
        _,
        A,
        C,
        N
      );
    else {
      const x = d.el && d.el._isVueCE ? d.el : null;
      try {
        x && x._beginPatch(), ke(
          d,
          h,
          y,
          _,
          A,
          C,
          N
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, me = (d, h, v, w, y, _, A, C) => {
    let N, x;
    const { props: V, shapeFlag: S, transition: P, dirs: $ } = d;
    if (N = d.el = i(
      d.type,
      _,
      V && V.is,
      V
    ), S & 8 ? u(N, d.children) : S & 16 && de(
      d.children,
      N,
      null,
      w,
      y,
      Yo(d, _),
      A,
      C
    ), $ && Gt(d, null, w, "created"), ue(N, d, d.scopeId, A, w), V) {
      for (const Z in V)
        Z !== "value" && !Bn(Z) && r(N, Z, null, V[Z], _, w);
      "value" in V && r(N, "value", null, V.value, _), (x = V.onVnodeBeforeMount) && ut(x, w, d);
    }
    process.env.NODE_ENV !== "production" && (Vs(N, "__vnode", d, !0), Vs(N, "__vueParentComponent", w, !0)), $ && Gt(d, null, w, "beforeMount");
    const q = uf(y, P);
    q && P.beforeEnter(N), s(N, h, v), ((x = V && V.onVnodeMounted) || q || $) && Ie(() => {
      x && ut(x, w, d), q && P.enter(N), $ && Gt(d, null, w, "mounted");
    }, y);
  }, ue = (d, h, v, w, y) => {
    if (v && m(d, v), w)
      for (let _ = 0; _ < w.length; _++)
        m(d, w[_]);
    if (y) {
      let _ = y.subTree;
      if (process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && (_ = si(_.children) || _), h === _ || Ja(_.type) && (_.ssContent === h || _.ssFallback === h)) {
        const A = y.vnode;
        ue(
          d,
          A,
          A.scopeId,
          A.slotScopeIds,
          y.parent
        );
      }
    }
  }, de = (d, h, v, w, y, _, A, C, N = 0) => {
    for (let x = N; x < d.length; x++) {
      const V = d[x] = C ? Ot(d[x]) : Xe(d[x]);
      b(
        null,
        V,
        h,
        v,
        w,
        y,
        _,
        A,
        C
      );
    }
  }, ke = (d, h, v, w, y, _, A) => {
    const C = h.el = d.el;
    process.env.NODE_ENV !== "production" && (C.__vnode = h);
    let { patchFlag: N, dynamicChildren: x, dirs: V } = h;
    N |= d.patchFlag & 16;
    const S = d.props || X, P = h.props || X;
    let $;
    if (v && Jt(v, !1), ($ = P.onVnodeBeforeUpdate) && ut($, v, h, d), V && Gt(h, d, v, "beforeUpdate"), v && Jt(v, !0), process.env.NODE_ENV !== "production" && vt && (N = 0, A = !1, x = null), (S.innerHTML && P.innerHTML == null || S.textContent && P.textContent == null) && u(C, ""), x ? ($e(
      d.dynamicChildren,
      x,
      C,
      v,
      w,
      Yo(h, y),
      _
    ), process.env.NODE_ENV !== "production" && Ss(d, h)) : A || Be(
      d,
      h,
      C,
      null,
      v,
      w,
      Yo(h, y),
      _,
      !1
    ), N > 0) {
      if (N & 16)
        _e(C, S, P, v, y);
      else if (N & 2 && S.class !== P.class && r(C, "class", null, P.class, y), N & 4 && r(C, "style", S.style, P.style, y), N & 8) {
        const q = h.dynamicProps;
        for (let Z = 0; Z < q.length; Z++) {
          const Q = q[Z], Le = S[Q], Me = P[Q];
          (Me !== Le || Q === "value") && r(C, Q, Le, Me, y, v);
        }
      }
      N & 1 && d.children !== h.children && u(C, h.children);
    } else !A && x == null && _e(C, S, P, v, y);
    (($ = P.onVnodeUpdated) || V) && Ie(() => {
      $ && ut($, v, h, d), V && Gt(h, d, v, "updated");
    }, w);
  }, $e = (d, h, v, w, y, _, A) => {
    for (let C = 0; C < h.length; C++) {
      const N = d[C], x = h[C], V = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pn(N, x) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? c(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      b(
        N,
        x,
        V,
        null,
        w,
        y,
        _,
        A,
        !0
      );
    }
  }, _e = (d, h, v, w, y) => {
    if (h !== v) {
      if (h !== X)
        for (const _ in h)
          !Bn(_) && !(_ in v) && r(
            d,
            _,
            h[_],
            null,
            y,
            w
          );
      for (const _ in v) {
        if (Bn(_)) continue;
        const A = v[_], C = h[_];
        A !== C && _ !== "value" && r(d, _, C, A, y, w);
      }
      "value" in v && r(d, "value", h.value, v.value, y);
    }
  }, _t = (d, h, v, w, y, _, A, C, N) => {
    const x = h.el = d ? d.el : l(""), V = h.anchor = d ? d.anchor : l("");
    let { patchFlag: S, dynamicChildren: P, slotScopeIds: $ } = h;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (vt || S & 2048) && (S = 0, N = !1, P = null), $ && (C = C ? C.concat($) : $), d == null ? (s(x, v, w), s(V, v, w), de(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      v,
      V,
      y,
      _,
      A,
      C,
      N
    )) : S > 0 && S & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren && d.dynamicChildren.length === P.length ? ($e(
      d.dynamicChildren,
      P,
      v,
      y,
      _,
      A,
      C
    ), process.env.NODE_ENV !== "production" ? Ss(d, h) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (h.key != null || y && h === y.subTree) && Ss(
        d,
        h,
        !0
        /* shallow */
      )
    )) : Be(
      d,
      h,
      v,
      V,
      y,
      _,
      A,
      C,
      N
    );
  }, Mt = (d, h, v, w, y, _, A, C, N) => {
    h.slotScopeIds = C, d == null ? h.shapeFlag & 512 ? y.ctx.activate(
      h,
      v,
      w,
      A,
      N
    ) : Ne(
      h,
      v,
      w,
      y,
      _,
      A,
      N
    ) : oe(d, h, N);
  }, Ne = (d, h, v, w, y, _, A) => {
    const C = d.component = Ef(
      d,
      w,
      y
    );
    if (process.env.NODE_ENV !== "production" && C.type.__hmrId && Yu(C), process.env.NODE_ENV !== "production" && (Cs(d), dn(C, "mount")), ei(d) && (C.ctx.renderer = qe), process.env.NODE_ENV !== "production" && dn(C, "init"), xf(C, !1, A), process.env.NODE_ENV !== "production" && fn(C, "init"), process.env.NODE_ENV !== "production" && vt && (d.el = null), C.asyncDep) {
      if (y && y.registerDep(C, j, A), !d.el) {
        const N = C.subTree = Se(Ke);
        D(null, N, h, v), d.placeholder = N.el;
      }
    } else
      j(
        C,
        d,
        h,
        v,
        y,
        _,
        A
      );
    process.env.NODE_ENV !== "production" && (Ts(), fn(C, "mount"));
  }, oe = (d, h, v) => {
    const w = h.component = d.component;
    if (Wd(d, h, v))
      if (w.asyncDep && !w.asyncResolved) {
        process.env.NODE_ENV !== "production" && Cs(h), U(w, h, v), process.env.NODE_ENV !== "production" && Ts();
        return;
      } else
        w.next = h, w.update();
    else
      h.el = d.el, w.vnode = h;
  }, j = (d, h, v, w, y, _, A) => {
    const C = () => {
      if (d.isMounted) {
        let { next: S, bu: P, u: $, parent: q, vnode: Z } = d;
        {
          const at = qa(d);
          if (at) {
            S && (S.el = Z.el, U(d, S, A)), at.asyncDep.then(() => {
              Ie(() => {
                d.isUnmounted || x();
              }, y);
            });
            return;
          }
        }
        let Q = S, Le;
        process.env.NODE_ENV !== "production" && Cs(S || d.vnode), Jt(d, !1), S ? (S.el = Z.el, U(d, S, A)) : S = Z, P && pn(P), (Le = S.props && S.props.onVnodeBeforeUpdate) && ut(Le, q, S, Z), Jt(d, !0), process.env.NODE_ENV !== "production" && dn(d, "render");
        const Me = Bi(d);
        process.env.NODE_ENV !== "production" && fn(d, "render");
        const lt = d.subTree;
        d.subTree = Me, process.env.NODE_ENV !== "production" && dn(d, "patch"), b(
          lt,
          Me,
          // parent may have changed if it's in a teleport
          c(lt.el),
          // anchor may have changed if it's in a fragment
          qt(lt),
          d,
          y,
          _
        ), process.env.NODE_ENV !== "production" && fn(d, "patch"), S.el = Me.el, Q === null && zd(d, Me.el), $ && Ie($, y), (Le = S.props && S.props.onVnodeUpdated) && Ie(
          () => ut(Le, q, S, Z),
          y
        ), process.env.NODE_ENV !== "production" && ka(d), process.env.NODE_ENV !== "production" && Ts();
      } else {
        let S;
        const { el: P, props: $ } = h, { bm: q, m: Z, parent: Q, root: Le, type: Me } = d, lt = zn(h);
        Jt(d, !1), q && pn(q), !lt && (S = $ && $.onVnodeBeforeMount) && ut(S, Q, h), Jt(d, !0);
        {
          Le.ce && Le.ce._hasShadowRoot() && Le.ce._injectChildStyle(Me), process.env.NODE_ENV !== "production" && dn(d, "render");
          const at = d.subTree = Bi(d);
          process.env.NODE_ENV !== "production" && fn(d, "render"), process.env.NODE_ENV !== "production" && dn(d, "patch"), b(
            null,
            at,
            v,
            w,
            d,
            y,
            _
          ), process.env.NODE_ENV !== "production" && fn(d, "patch"), h.el = at.el;
        }
        if (Z && Ie(Z, y), !lt && (S = $ && $.onVnodeMounted)) {
          const at = h;
          Ie(
            () => ut(S, Q, at),
            y
          );
        }
        (h.shapeFlag & 256 || Q && zn(Q.vnode) && Q.vnode.shapeFlag & 256) && d.a && Ie(d.a, y), d.isMounted = !0, process.env.NODE_ENV !== "production" && nd(d), h = v = w = null;
      }
    };
    d.scope.on();
    const N = d.effect = new Xl(C);
    d.scope.off();
    const x = d.update = N.run.bind(N), V = d.job = N.runIfDirty.bind(N);
    V.i = d, V.id = d.uid, N.scheduler = () => Po(V), Jt(d, !0), process.env.NODE_ENV !== "production" && (N.onTrack = d.rtc ? (S) => pn(d.rtc, S) : void 0, N.onTrigger = d.rtg ? (S) => pn(d.rtg, S) : void 0), x();
  }, U = (d, h, v) => {
    h.component = d;
    const w = d.vnode.props;
    d.vnode = h, d.next = null, Jd(d, h.props, w, v), rf(d, h.children, v), st(), Li(d), ot();
  }, Be = (d, h, v, w, y, _, A, C, N = !1) => {
    const x = d && d.children, V = d ? d.shapeFlag : 0, S = h.children, { patchFlag: P, shapeFlag: $ } = h;
    if (P > 0) {
      if (P & 128) {
        zt(
          x,
          S,
          v,
          w,
          y,
          _,
          A,
          C,
          N
        );
        return;
      } else if (P & 256) {
        Sn(
          x,
          S,
          v,
          w,
          y,
          _,
          A,
          C,
          N
        );
        return;
      }
    }
    $ & 8 ? (V & 16 && cn(x, y, _), S !== x && u(v, S)) : V & 16 ? $ & 16 ? zt(
      x,
      S,
      v,
      w,
      y,
      _,
      A,
      C,
      N
    ) : cn(x, y, _, !0) : (V & 8 && u(v, ""), $ & 16 && de(
      S,
      v,
      w,
      y,
      _,
      A,
      C,
      N
    ));
  }, Sn = (d, h, v, w, y, _, A, C, N) => {
    d = d || gn, h = h || gn;
    const x = d.length, V = h.length, S = Math.min(x, V);
    let P;
    for (P = 0; P < S; P++) {
      const $ = h[P] = N ? Ot(h[P]) : Xe(h[P]);
      b(
        d[P],
        $,
        v,
        null,
        y,
        _,
        A,
        C,
        N
      );
    }
    x > V ? cn(
      d,
      y,
      _,
      !0,
      !1,
      S
    ) : de(
      h,
      v,
      w,
      y,
      _,
      A,
      C,
      N,
      S
    );
  }, zt = (d, h, v, w, y, _, A, C, N) => {
    let x = 0;
    const V = h.length;
    let S = d.length - 1, P = V - 1;
    for (; x <= S && x <= P; ) {
      const $ = d[x], q = h[x] = N ? Ot(h[x]) : Xe(h[x]);
      if (Pn($, q))
        b(
          $,
          q,
          v,
          null,
          y,
          _,
          A,
          C,
          N
        );
      else
        break;
      x++;
    }
    for (; x <= S && x <= P; ) {
      const $ = d[S], q = h[P] = N ? Ot(h[P]) : Xe(h[P]);
      if (Pn($, q))
        b(
          $,
          q,
          v,
          null,
          y,
          _,
          A,
          C,
          N
        );
      else
        break;
      S--, P--;
    }
    if (x > S) {
      if (x <= P) {
        const $ = P + 1, q = $ < V ? h[$].el : w;
        for (; x <= P; )
          b(
            null,
            h[x] = N ? Ot(h[x]) : Xe(h[x]),
            v,
            q,
            y,
            _,
            A,
            C,
            N
          ), x++;
      }
    } else if (x > P)
      for (; x <= S; )
        Ye(d[x], y, _, !0), x++;
    else {
      const $ = x, q = x, Z = /* @__PURE__ */ new Map();
      for (x = q; x <= P; x++) {
        const Ce = h[x] = N ? Ot(h[x]) : Xe(h[x]);
        Ce.key != null && (process.env.NODE_ENV !== "production" && Z.has(Ce.key) && T(
          "Duplicate keys found during update:",
          JSON.stringify(Ce.key),
          "Make sure keys are unique."
        ), Z.set(Ce.key, x));
      }
      let Q, Le = 0;
      const Me = P - q + 1;
      let lt = !1, at = 0;
      const Ln = new Array(Me);
      for (x = 0; x < Me; x++) Ln[x] = 0;
      for (x = $; x <= S; x++) {
        const Ce = d[x];
        if (Le >= Me) {
          Ye(Ce, y, _, !0);
          continue;
        }
        let ct;
        if (Ce.key != null)
          ct = Z.get(Ce.key);
        else
          for (Q = q; Q <= P; Q++)
            if (Ln[Q - q] === 0 && Pn(Ce, h[Q])) {
              ct = Q;
              break;
            }
        ct === void 0 ? Ye(Ce, y, _, !0) : (Ln[ct - q] = x + 1, ct >= at ? at = ct : lt = !0, b(
          Ce,
          h[ct],
          v,
          null,
          y,
          _,
          A,
          C,
          N
        ), Le++);
      }
      const _i = lt ? df(Ln) : gn;
      for (Q = _i.length - 1, x = Me - 1; x >= 0; x--) {
        const Ce = q + x, ct = h[Ce], xi = h[Ce + 1], wi = Ce + 1 < V ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          xi.el || Ga(xi)
        ) : w;
        Ln[x] === 0 ? b(
          null,
          ct,
          v,
          wi,
          y,
          _,
          A,
          C,
          N
        ) : lt && (Q < 0 || x !== _i[Q] ? It(ct, v, wi, 2) : Q--);
      }
    }
  }, It = (d, h, v, w, y = null) => {
    const { el: _, type: A, transition: C, children: N, shapeFlag: x } = d;
    if (x & 6) {
      It(d.component.subTree, h, v, w);
      return;
    }
    if (x & 128) {
      d.suspense.move(h, v, w);
      return;
    }
    if (x & 64) {
      A.move(d, h, v, qe);
      return;
    }
    if (A === ye) {
      s(_, h, v);
      for (let S = 0; S < N.length; S++)
        It(N[S], h, v, w);
      s(d.anchor, h, v);
      return;
    }
    if (A === Ds) {
      ee(d, h, v);
      return;
    }
    if (w !== 2 && x & 1 && C)
      if (w === 0)
        C.beforeEnter(_), s(_, h, v), Ie(() => C.enter(_), y);
      else {
        const { leave: S, delayLeave: P, afterLeave: $ } = C, q = () => {
          d.ctx.isUnmounted ? o(_) : s(_, h, v);
        }, Z = () => {
          _._isLeaving && _[gd](
            !0
            /* cancelled */
          ), S(_, () => {
            q(), $ && $();
          });
        };
        P ? P(_, q, Z) : Z();
      }
    else
      s(_, h, v);
  }, Ye = (d, h, v, w = !1, y = !1) => {
    const {
      type: _,
      props: A,
      ref: C,
      children: N,
      dynamicChildren: x,
      shapeFlag: V,
      patchFlag: S,
      dirs: P,
      cacheIndex: $
    } = d;
    if (S === -2 && (y = !1), C != null && (st(), Wn(C, null, v, d, !0), ot()), $ != null && (h.renderCache[$] = void 0), V & 256) {
      h.ctx.deactivate(d);
      return;
    }
    const q = V & 1 && P, Z = !zn(d);
    let Q;
    if (Z && (Q = A && A.onVnodeBeforeUnmount) && ut(Q, h, d), V & 6)
      Bo(d.component, v, w);
    else {
      if (V & 128) {
        d.suspense.unmount(v, w);
        return;
      }
      q && Gt(d, null, h, "beforeUnmount"), V & 64 ? d.type.remove(
        d,
        h,
        v,
        qe,
        w
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== ye || S > 0 && S & 64) ? cn(
        x,
        h,
        v,
        !1,
        !0
      ) : (_ === ye && S & 384 || !y && V & 16) && cn(N, h, v), w && Dn(d);
    }
    (Z && (Q = A && A.onVnodeUnmounted) || q) && Ie(() => {
      Q && ut(Q, h, d), q && Gt(d, null, h, "unmounted");
    }, v);
  }, Dn = (d) => {
    const { type: h, el: v, anchor: w, transition: y } = d;
    if (h === ye) {
      process.env.NODE_ENV !== "production" && d.patchFlag > 0 && d.patchFlag & 2048 && y && !y.persisted ? d.children.forEach((A) => {
        A.type === Ke ? o(A.el) : Dn(A);
      }) : $o(v, w);
      return;
    }
    if (h === Ds) {
      L(d);
      return;
    }
    const _ = () => {
      o(v), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (d.shapeFlag & 1 && y && !y.persisted) {
      const { leave: A, delayLeave: C } = y, N = () => A(v, _);
      C ? C(d.el, _, N) : N();
    } else
      _();
  }, $o = (d, h) => {
    let v;
    for (; d !== h; )
      v = p(d), o(d), d = v;
    o(h);
  }, Bo = (d, h, v) => {
    process.env.NODE_ENV !== "production" && d.type.__hmrId && Xu(d);
    const { bum: w, scope: y, job: _, subTree: A, um: C, m: N, a: x } = d;
    qi(N), qi(x), w && pn(w), y.stop(), _ && (_.flags |= 8, Ye(A, d, h, v)), C && Ie(C, h), Ie(() => {
      d.isUnmounted = !0;
    }, h), process.env.NODE_ENV !== "production" && od(d);
  }, cn = (d, h, v, w = !1, y = !1, _ = 0) => {
    for (let A = _; A < d.length; A++)
      Ye(d[A], h, v, w, y);
  }, qt = (d) => {
    if (d.shapeFlag & 6)
      return qt(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const h = p(d.anchor || d.el), v = h && h[hd];
    return v ? p(v) : h;
  };
  let R = !1;
  const F = (d, h, v) => {
    let w;
    d == null ? h._vnode && (Ye(h._vnode, null, null, !0), w = h._vnode.component) : b(
      h._vnode || null,
      d,
      h,
      null,
      null,
      null,
      v
    ), h._vnode = d, R || (R = !0, Li(w), _a(), R = !1);
  }, qe = {
    p: b,
    um: Ye,
    m: It,
    r: Dn,
    mt: Ne,
    mc: de,
    pc: Be,
    pbc: $e,
    n: qt,
    o: e
  };
  return {
    render: F,
    hydrate: void 0,
    createApp: jd(F)
  };
}
function Yo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Jt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function uf(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ss(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (I(s) && I(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[r] = Ot(o[r]), l.el = i.el), !n && l.patchFlag !== -2 && Ss(i, l)), l.type === ms && (l.patchFlag === -1 && (l = o[r] = Ot(l)), l.el = i.el), l.type === Ke && !l.el && (l.el = i.el), process.env.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function df(e) {
  const t = e.slice(), n = [0];
  let s, o, r, i, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const f = e[s];
    if (f !== 0) {
      if (o = n[n.length - 1], e[o] < f) {
        t[s] = o, n.push(s);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < f ? r = l + 1 : i = l;
      f < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function qa(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : qa(t);
}
function qi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ga(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ga(t.subTree) : null;
}
const Ja = (e) => e.__isSuspense;
function ff(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : Ea(e);
}
const ye = /* @__PURE__ */ Symbol.for("v-fgt"), ms = /* @__PURE__ */ Symbol.for("v-txt"), Ke = /* @__PURE__ */ Symbol.for("v-cmt"), Ds = /* @__PURE__ */ Symbol.for("v-stc"), qn = [];
let Ue = null;
function te(e = !1) {
  qn.push(Ue = e ? null : []);
}
function pf() {
  qn.pop(), Ue = qn[qn.length - 1] || null;
}
let rs = 1;
function Gs(e, t = !1) {
  rs += e, e < 0 && Ue && t && (Ue.hasOnce = !0);
}
function Ya(e) {
  return e.dynamicChildren = rs > 0 ? Ue || gn : null, pf(), rs > 0 && Ue && Ue.push(e), e;
}
function se(e, t, n, s, o, r) {
  return Ya(
    g(
      e,
      t,
      n,
      s,
      o,
      r,
      !0
    )
  );
}
function hf(e, t, n, s, o) {
  return Ya(
    Se(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function kn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pn(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Os.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const mf = (...e) => Qa(
  ...e
), Xa = ({ key: e }) => e ?? null, Ls = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? re(e) || /* @__PURE__ */ pe(e) || H(e) ? { i: Ae, r: e, k: t, f: !!n } : e : null);
function g(e, t = null, n = null, s = 0, o = null, r = e === ye ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Xa(t),
    ref: t && Ls(t),
    scopeId: Ca,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Ae
  };
  return l ? (ii(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= re(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && T("VNode created with invalid key (NaN). VNode type:", a.type), rs > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ue && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ue.push(a), a;
}
const Se = process.env.NODE_ENV !== "production" ? mf : Qa;
function Qa(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === Od) && (process.env.NODE_ENV !== "production" && !e && T(`Invalid vnode type when creating vnode: ${e}.`), e = Ke), kn(e)) {
    const l = Wt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ii(l, n), rs > 0 && !r && Ue && (l.shapeFlag & 6 ? Ue[Ue.indexOf(e)] = l : Ue.push(l)), l.patchFlag = -2, l;
  }
  if (sc(e) && (e = e.__vccOpts), t) {
    t = gf(t);
    let { class: l, style: a } = t;
    l && !re(l) && (t.class = Pe(l)), J(a) && (/* @__PURE__ */ Hs(a) && !I(a) && (a = ce({}, a)), t.style = Fr(a));
  }
  const i = re(e) ? 1 : Ja(e) ? 128 : md(e) ? 64 : J(e) ? 4 : H(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && /* @__PURE__ */ Hs(e) && (e = /* @__PURE__ */ W(e), T(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), g(
    e,
    t,
    n,
    s,
    o,
    i,
    r,
    !0
  );
}
function gf(e) {
  return e ? /* @__PURE__ */ Hs(e) || Ba(e) ? ce({}, e) : e : null;
}
function Wt(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: l, transition: a } = e, f = t ? vf(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Xa(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? I(r) ? r.concat(Ls(t)) : [r, Ls(t)] : Ls(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && I(l) ? l.map(Za) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ye ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Wt(e.ssContent),
    ssFallback: e.ssFallback && Wt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Zr(
    u,
    a.clone(u)
  ), u;
}
function Za(e) {
  const t = Wt(e);
  return I(e.children) && (t.children = e.children.map(Za)), t;
}
function Js(e = " ", t = 0) {
  return Se(ms, null, e, t);
}
function le(e = "", t = !1) {
  return t ? (te(), hf(Ke, null, e)) : Se(Ke, null, e);
}
function Xe(e) {
  return e == null || typeof e == "boolean" ? Se(Ke) : I(e) ? Se(
    ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : kn(e) ? Ot(e) : Se(ms, null, String(e));
}
function Ot(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Wt(e);
}
function ii(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), ii(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Ba(t) ? t._ctx = Ae : o === 3 && Ae && (Ae.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else H(t) ? (t = { default: t, _ctx: Ae }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Js(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function vf(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = Pe([t.class, s.class]));
      else if (o === "style")
        t.style = Fr([t.style, s.style]);
      else if (us(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(I(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function ut(e, t, n, s = null) {
  Et(e, t, 7, [
    n,
    s
  ]);
}
const bf = Pa();
let yf = 0;
function Ef(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || bf, r = {
    uid: yf++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new pu(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ua(s, o),
    emitsOptions: Ra(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: X,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: X,
    data: X,
    props: X,
    attrs: X,
    slots: X,
    refs: X,
    setupState: X,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? r.ctx = Ad(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Bd.bind(null, r), e.ce && e.ce(r), r;
}
let ge = null;
const li = () => ge || Ae;
let Ys, kr;
{
  const e = fs(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  Ys = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ge = n
  ), kr = t(
    "__VUE_SSR_SETTERS__",
    (n) => is = n
  );
}
const gs = (e) => {
  const t = ge;
  return Ys(e), e.scope.on(), () => {
    e.scope.off(), Ys(t);
  };
}, Gi = () => {
  ge && ge.scope.off(), Ys(null);
}, _f = /* @__PURE__ */ Dt("slot,component");
function Nr(e, { isNativeTag: t }) {
  (_f(e) || t(e)) && T(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function ec(e) {
  return e.vnode.shapeFlag & 4;
}
let is = !1;
function xf(e, t = !1, n = !1) {
  t && kr(t);
  const { props: s, children: o } = e.vnode, r = ec(e);
  qd(e, s, r, t), of(e, o, n || t);
  const i = r ? wf(e, t) : void 0;
  return t && kr(!1), i;
}
function wf(e, t) {
  const n = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (n.name && Nr(n.name, e.appContext.config), n.components) {
      const o = Object.keys(n.components);
      for (let r = 0; r < o.length; r++)
        Nr(o[r], e.appContext.config);
    }
    if (n.directives) {
      const o = Object.keys(n.directives);
      for (let r = 0; r < o.length; r++)
        Ta(o[r]);
    }
    n.compilerOptions && kf() && T(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, La), process.env.NODE_ENV !== "production" && Sd(e);
  const { setup: s } = n;
  if (s) {
    st();
    const o = e.setupContext = s.length > 1 ? Cf(e) : null, r = gs(e), i = An(
      s,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? /* @__PURE__ */ gt(e.props) : e.props,
        o
      ]
    ), l = jr(i);
    if (ot(), r(), (l || e.sp) && !zn(e) && Aa(e), l) {
      if (i.then(Gi, Gi), t)
        return i.then((a) => {
          Ji(e, a, t);
        }).catch((a) => {
          ps(a, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const a = vs(e, n);
        T(
          `Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Ji(e, i, t);
  } else
    tc(e, t);
}
function Ji(e, t, n) {
  H(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : J(t) ? (process.env.NODE_ENV !== "production" && kn(t) && T(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = ga(t), process.env.NODE_ENV !== "production" && Dd(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && T(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), tc(e, n);
}
const kf = () => !0;
function tc(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || be);
  {
    const o = gs(e);
    st();
    try {
      Md(e);
    } finally {
      ot(), o();
    }
  }
  process.env.NODE_ENV !== "production" && !s.render && e.render === be && !t && (s.template ? T(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : T("Component is missing template or render function: ", s));
}
const Yi = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return zs(), ve(e, "get", ""), e[t];
  },
  set() {
    return T("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return T("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ve(e, "get", ""), e[t];
  }
};
function Nf(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ve(e, "get", "$slots"), t[n];
    }
  });
}
function Cf(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && T("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (I(n) ? s = "array" : /* @__PURE__ */ pe(n) && (s = "ref")), s !== "object" && T(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Yi));
      },
      get slots() {
        return s || (s = Nf(e));
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Yi),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Ho(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ga(pa(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in on)
        return on[n](e);
    },
    has(t, n) {
      return n in t || n in on;
    }
  })) : e.proxy;
}
const Tf = /(?:^|[-_])\w/g, Of = (e) => e.replace(Tf, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function nc(e, t = !0) {
  return H(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function vs(e, t, n = !1) {
  let s = nc(t);
  if (!s && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && e) {
    const o = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    s = o(e.components) || e.parent && o(
      e.parent.type.components
    ) || o(e.appContext.components);
  }
  return s ? Of(s) : n ? "App" : "Anonymous";
}
function sc(e) {
  return H(e) && "__vccOpts" in e;
}
const jn = (e, t) => {
  const n = /* @__PURE__ */ $u(e, t, is);
  if (process.env.NODE_ENV !== "production") {
    const s = li();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Af(e, t, n) {
  try {
    Gs(-1);
    const s = arguments.length;
    return s === 2 ? J(t) && !I(t) ? kn(t) ? Se(e, null, [t]) : Se(e, t) : Se(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && kn(n) && (n = [n]), Se(e, t, n));
  } finally {
    Gs(1);
  }
}
function Sf() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(c) {
      if (!J(c))
        return null;
      if (c.__isVue)
        return ["div", e, "VueInstance"];
      if (/* @__PURE__ */ pe(c)) {
        st();
        const p = c.value;
        return ot(), [
          "div",
          {},
          ["span", e, u(c)],
          "<",
          l(p),
          ">"
        ];
      } else {
        if (/* @__PURE__ */ Ut(c))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ De(c) ? "ShallowReactive" : "Reactive"],
            "<",
            l(c),
            `>${/* @__PURE__ */ rt(c) ? " (readonly)" : ""}`
          ];
        if (/* @__PURE__ */ rt(c))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ De(c) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(c),
            ">"
          ];
      }
      return null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...r(c.$)
        ];
    }
  };
  function r(c) {
    const p = [];
    c.type.props && c.props && p.push(i("props", /* @__PURE__ */ W(c.props))), c.setupState !== X && p.push(i("setup", c.setupState)), c.data !== X && p.push(i("data", /* @__PURE__ */ W(c.data)));
    const m = a(c, "computed");
    m && p.push(i("computed", m));
    const E = a(c, "inject");
    return E && p.push(i("injected", E)), p.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), p;
  }
  function i(c, p) {
    return p = ce({}, p), Object.keys(p).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(p).map((m) => [
          "div",
          {},
          ["span", s, m + ": "],
          l(p[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(c, p = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", s, c] : J(c) ? ["object", { object: p ? /* @__PURE__ */ W(c) : c }] : ["span", n, String(c)];
  }
  function a(c, p) {
    const m = c.type;
    if (H(m))
      return;
    const E = {};
    for (const b in c.ctx)
      f(m, b, p) && (E[b] = c.ctx[b]);
    return E;
  }
  function f(c, p, m) {
    const E = c[m];
    if (I(E) && E.includes(p) || J(E) && p in E || c.extends && f(c.extends, p, m) || c.mixins && c.mixins.some((b) => f(b, p, m)))
      return !0;
  }
  function u(c) {
    return /* @__PURE__ */ De(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Xi = "3.5.28", bt = process.env.NODE_ENV !== "production" ? T : be;
process.env.NODE_ENV;
process.env.NODE_ENV;
let Cr;
const Qi = typeof window < "u" && window.trustedTypes;
if (Qi)
  try {
    Cr = /* @__PURE__ */ Qi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && bt(`Error creating trusted types policy: ${e}`);
  }
const oc = Cr ? (e) => Cr.createHTML(e) : (e) => e, Df = "http://www.w3.org/2000/svg", Lf = "http://www.w3.org/1998/Math/MathML", Ct = typeof document < "u" ? document : null, Zi = Ct && /* @__PURE__ */ Ct.createElement("template"), Mf = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Ct.createElementNS(Df, e) : t === "mathml" ? Ct.createElementNS(Lf, e) : n ? Ct.createElement(e, { is: n }) : Ct.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => Ct.createTextNode(e),
  createComment: (e) => Ct.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ct.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === r || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === r || !(o = o.nextSibling)); )
        ;
    else {
      Zi.innerHTML = oc(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Zi.content;
      if (s === "svg" || s === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, If = /* @__PURE__ */ Symbol("_vtc");
function Pf(e, t, n) {
  const s = e[If];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const el = /* @__PURE__ */ Symbol("_vod"), Rf = /* @__PURE__ */ Symbol("_vsh"), Vf = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Hf = /(?:^|;)\s*display\s*:/;
function jf(e, t, n) {
  const s = e.style, o = re(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (re(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Ms(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Ms(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), Ms(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[Vf];
      i && (n += ";" + i), s.cssText = n, r = Hf.test(n);
    }
  } else t && e.removeAttribute("style");
  el in e && (e[el] = r ? s.display : "", e[Rf] && (s.display = "none"));
}
const $f = /[^\\];\s*$/, tl = /\s*!important$/;
function Ms(e, t, n) {
  if (I(n))
    n.forEach((s) => Ms(e, t, s));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && $f.test(n) && bt(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Bf(e, t);
    tl.test(n) ? e.setProperty(
      Kt(s),
      n.replace(tl, ""),
      "important"
    ) : e[s] = n;
  }
}
const nl = ["Webkit", "Moz", "ms"], Xo = {};
function Bf(e, t) {
  const n = Xo[t];
  if (n)
    return n;
  let s = et(t);
  if (s !== "filter" && s in e)
    return Xo[t] = s;
  s = Ao(s);
  for (let o = 0; o < nl.length; o++) {
    const r = nl[o] + s;
    if (r in e)
      return Xo[t] = r;
  }
  return t;
}
const sl = "http://www.w3.org/1999/xlink";
function ol(e, t, n, s, o, r = du(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(sl, t.slice(6, t.length)) : e.setAttributeNS(sl, t, n) : n == null || r && !Gl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : yt(n) ? String(n) : n
  );
}
function rl(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? oc(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Gl(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !i && bt(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(o || t);
}
function $t(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ff(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const il = /* @__PURE__ */ Symbol("_vei");
function Uf(e, t, n, s, o = null) {
  const r = e[il] || (e[il] = {}), i = r[t];
  if (s && i)
    i.value = process.env.NODE_ENV !== "production" ? al(s, t) : s;
  else {
    const [l, a] = Kf(t);
    if (s) {
      const f = r[t] = qf(
        process.env.NODE_ENV !== "production" ? al(s, t) : s,
        o
      );
      $t(e, l, f, a);
    } else i && (Ff(e, l, i, a), r[t] = void 0);
  }
}
const ll = /(?:Once|Passive|Capture)$/;
function Kf(e) {
  let t;
  if (ll.test(e)) {
    t = {};
    let s;
    for (; s = e.match(ll); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Kt(e.slice(2)), t];
}
let Qo = 0;
const Wf = /* @__PURE__ */ Promise.resolve(), zf = () => Qo || (Wf.then(() => Qo = 0), Qo = Date.now());
function qf(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Et(
      Gf(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = zf(), n;
}
function al(e, t) {
  return H(e) || I(e) ? e : (bt(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), be);
}
function Gf(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const cl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Jf = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? Pf(e, s, i) : t === "style" ? jf(e, n, s) : us(t) ? Rs(t) || Uf(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Yf(e, t, s, i)) ? (rl(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ol(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !re(s)) ? rl(e, et(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), ol(e, t, s, i));
};
function Yf(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && cl(t) && H(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return cl(t) && re(n) ? !1 : t in e;
}
const Nn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return I(t) ? (n) => pn(t, n) : t;
};
function Xf(e) {
  e.target.composing = !0;
}
function ul(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const St = /* @__PURE__ */ Symbol("_assign");
function dl(e, t, n) {
  return t && (e = e.trim()), n && (e = So(e)), e;
}
const Fe = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[St] = Nn(o);
    const r = s || o.props && o.props.type === "number";
    $t(e, t ? "change" : "input", (i) => {
      i.target.composing || e[St](dl(e.value, n, r));
    }), (n || r) && $t(e, "change", () => {
      e.value = dl(e.value, n, r);
    }), t || ($t(e, "compositionstart", Xf), $t(e, "compositionend", ul), $t(e, "change", ul));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } }, i) {
    if (e[St] = Nn(i), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? So(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, Qf = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[St] = Nn(n), $t(e, "change", () => {
      const s = e._modelValue, o = ls(e), r = e.checked, i = e[St];
      if (I(s)) {
        const l = Ur(s, o), a = l !== -1;
        if (r && !a)
          i(s.concat(o));
        else if (!r && a) {
          const f = [...s];
          f.splice(l, 1), i(f);
        }
      } else if (Tn(s)) {
        const l = new Set(s);
        r ? l.add(o) : l.delete(o), i(l);
      } else
        i(rc(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: fl,
  beforeUpdate(e, t, n) {
    e[St] = Nn(n), fl(e, t, n);
  }
};
function fl(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (I(t))
    o = Ur(t, s.props.value) > -1;
  else if (Tn(t))
    o = t.has(s.props.value);
  else {
    if (t === n) return;
    o = On(t, rc(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const pl = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = Tn(t);
    $t(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? So(ls(i)) : ls(i)
      );
      e[St](
        e.multiple ? o ? new Set(r) : r : r[0]
      ), e._assigning = !0, bn(() => {
        e._assigning = !1;
      });
    }), e[St] = Nn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    hl(e, t);
  },
  beforeUpdate(e, t, n) {
    e[St] = Nn(n);
  },
  updated(e, { value: t }) {
    e._assigning || hl(e, t);
  }
};
function hl(e, t) {
  const n = e.multiple, s = I(t);
  if (n && !s && !Tn(t)) {
    process.env.NODE_ENV !== "production" && bt(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const i = e.options[o], l = ls(i);
    if (n)
      if (s) {
        const a = typeof l;
        a === "string" || a === "number" ? i.selected = t.some((f) => String(f) === String(l)) : i.selected = Ur(t, l) > -1;
      } else
        i.selected = t.has(l);
    else if (On(ls(i), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function ls(e) {
  return "_value" in e ? e._value : e.value;
}
function rc(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Zf = ["ctrl", "shift", "alt", "meta"], ep = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Zf.some((n) => e[`${n}Key`] && !t.includes(n))
}, Zo = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const l = ep[t[i]];
      if (l && l(o, t)) return;
    }
    return e(o, ...r);
  }));
}, tp = /* @__PURE__ */ ce({ patchProp: Jf }, Mf);
let ml;
function np() {
  return ml || (ml = af(tp));
}
const sp = ((...e) => {
  const t = np().createApp(...e);
  process.env.NODE_ENV !== "production" && (rp(t), ip(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = lp(s);
    if (!o) return;
    const r = t._component;
    !H(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, op(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
});
function op(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function rp(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => lu(t) || au(t) || cu(t),
    writable: !1
  });
}
function ip(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        bt(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return bt(s), n;
      },
      set() {
        bt(s);
      }
    });
  }
}
function lp(e) {
  if (re(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && bt(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && bt(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function ap() {
  Sf();
}
process.env.NODE_ENV !== "production" && ap();
function gl(e) {
  return Hu((t, n) => ({
    get() {
      return t(), e;
    },
    set(s) {
      e = s, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          n();
        });
      });
    }
  }));
}
var cp = class extends Lc {
  constructor(e = {}) {
    return super(e), this.contentComponent = null, this.appContext = null, this.reactiveState = gl(this.view.state), this.reactiveExtensionStorage = gl(this.extensionStorage), this.on("beforeTransaction", ({ nextState: t }) => {
      this.reactiveState.value = t, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), pa(this);
  }
  get state() {
    return this.reactiveState ? this.reactiveState.value : this.view.state;
  }
  get storage() {
    return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage;
  }
  /**
   * Register a ProseMirror plugin.
   */
  registerPlugin(e, t) {
    const n = super.registerPlugin(e, t);
    return this.reactiveState && (this.reactiveState.value = n), n;
  }
  /**
   * Unregister a ProseMirror plugin.
   */
  unregisterPlugin(e) {
    const t = super.unregisterPlugin(e);
    return this.reactiveState && t && (this.reactiveState.value = t), t;
  }
}, up = /* @__PURE__ */ vd({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(e) {
    const t = /* @__PURE__ */ fe(), n = li();
    return fd(() => {
      const s = e.editor;
      s && s.options.element && t.value && bn(() => {
        var o;
        if (!t.value || !((o = s.view.dom) != null && o.parentNode))
          return;
        const r = ma(t.value);
        t.value.append(...s.view.dom.parentNode.childNodes), s.contentComponent = n.ctx._, n && (s.appContext = {
          ...n.appContext,
          // Vue internally uses prototype chain to forward/shadow injects across the entire component chain
          // so don't use object spread operator or 'Object.assign' and just set `provides` as is on editor's appContext
          // @ts-expect-error forward instance's 'provides' into appContext
          provides: n.provides
        }), s.setOptions({
          element: r
        }), s.createNodeViews();
      });
    }), ti(() => {
      const s = e.editor;
      s && (s.contentComponent = null, s.appContext = null);
    }), { rootEl: t };
  },
  render() {
    return Af("div", {
      ref: (e) => {
        this.rootEl = e;
      }
    });
  }
}), vl = (e = {}) => {
  const t = /* @__PURE__ */ Iu();
  return Ks(() => {
    t.value = new cp(e);
  }), ti(() => {
    var n, s, o, r;
    const i = (s = (n = t.value) == null ? void 0 : n.view.dom) == null ? void 0 : s.parentNode, l = i?.cloneNode(!0);
    (o = i?.parentNode) == null || o.replaceChild(l, i), (r = t.value) == null || r.destroy();
  }), t;
}, Xs = (e, t) => {
  if (e === "slot")
    return 0;
  if (e instanceof Function)
    return e(t);
  const { children: n, ...s } = t ?? {};
  if (e === "svg")
    throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
  return [e, s, n];
}, dp = /^\s*>\s$/, fp = je.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [{ tag: "blockquote" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return /* @__PURE__ */ Xs("blockquote", { ...he(this.options.HTMLAttributes, e), children: /* @__PURE__ */ Xs("slot", {}) });
  },
  parseMarkdown: (e, t) => t.createNode("blockquote", void 0, t.parseChildren(e.tokens || [])),
  renderMarkdown: (e, t) => {
    if (!e.content)
      return "";
    const n = ">", s = [];
    return e.content.forEach((o) => {
      const l = t.renderChildren([o]).split(`
`).map((a) => a.trim() === "" ? n : `${n} ${a}`);
      s.push(l.join(`
`));
    }), s.join(`
${n}
`);
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: e }) => e.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: e }) => e.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: e }) => e.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      _n({
        find: dp,
        type: this.type
      })
    ];
  }
}), pp = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, hp = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, mp = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, gp = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, vp = Cn.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (e) => e.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (e) => e.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (e) => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return /* @__PURE__ */ Xs("strong", { ...he(this.options.HTMLAttributes, e), children: /* @__PURE__ */ Xs("slot", {}) });
  },
  markdownTokenName: "strong",
  parseMarkdown: (e, t) => t.applyMark("bold", t.parseInline(e.tokens || [])),
  renderMarkdown: (e, t) => `**${t.renderChildren(e)}**`,
  addCommands() {
    return {
      setBold: () => ({ commands: e }) => e.setMark(this.name),
      toggleBold: () => ({ commands: e }) => e.toggleMark(this.name),
      unsetBold: () => ({ commands: e }) => e.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      xn({
        find: pp,
        type: this.type
      }),
      xn({
        find: mp,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      ln({
        find: hp,
        type: this.type
      }),
      ln({
        find: gp,
        type: this.type
      })
    ];
  }
}), bp = /(^|[^`])`([^`]+)`(?!`)$/, yp = /(^|[^`])`([^`]+)`(?!`)/g, Ep = Cn.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [{ tag: "code" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["code", he(this.options.HTMLAttributes, e), 0];
  },
  markdownTokenName: "codespan",
  parseMarkdown: (e, t) => t.applyMark("code", [{ type: "text", text: e.text || "" }]),
  renderMarkdown: (e, t) => e.content ? `\`${t.renderChildren(e.content)}\`` : "",
  addCommands() {
    return {
      setCode: () => ({ commands: e }) => e.setMark(this.name),
      toggleCode: () => ({ commands: e }) => e.toggleMark(this.name),
      unsetCode: () => ({ commands: e }) => e.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      xn({
        find: bp,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      ln({
        find: yp,
        type: this.type
      })
    ];
  }
}), er = 4, _p = /^```([a-z]+)?[\s\n]$/, xp = /^~~~([a-z]+)?[\s\n]$/, wp = je.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      defaultLanguage: null,
      enableTabIndentation: !1,
      tabSize: er,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: !0,
  defining: !0,
  addAttributes() {
    return {
      language: {
        default: this.options.defaultLanguage,
        parseHTML: (e) => {
          var t;
          const { languageClassPrefix: n } = this.options;
          if (!n)
            return null;
          const r = [...((t = e.firstElementChild) == null ? void 0 : t.classList) || []].filter((i) => i.startsWith(n)).map((i) => i.replace(n, ""))[0];
          return r || null;
        },
        rendered: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node: e, HTMLAttributes: t }) {
    return [
      "pre",
      he(this.options.HTMLAttributes, t),
      [
        "code",
        {
          class: e.attrs.language ? this.options.languageClassPrefix + e.attrs.language : null
        },
        0
      ]
    ];
  },
  markdownTokenName: "code",
  parseMarkdown: (e, t) => {
    var n;
    return ((n = e.raw) == null ? void 0 : n.startsWith("```")) === !1 && e.codeBlockStyle !== "indented" ? [] : t.createNode(
      "codeBlock",
      { language: e.lang || null },
      e.text ? [t.createTextNode(e.text)] : []
    );
  },
  renderMarkdown: (e, t) => {
    var n;
    let s = "";
    const o = ((n = e.attrs) == null ? void 0 : n.language) || "";
    return e.content ? s = [`\`\`\`${o}`, t.renderChildren(e.content), "```"].join(`
`) : s = `\`\`\`${o}

\`\`\``, s;
  },
  addCommands() {
    return {
      setCodeBlock: (e) => ({ commands: t }) => t.setNode(this.name, e),
      toggleCodeBlock: (e) => ({ commands: t }) => t.toggleNode(this.name, "paragraph", e)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty: e, $anchor: t } = this.editor.state.selection, n = t.pos === 1;
        return !e || t.parent.type.name !== this.name ? !1 : n || !t.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      // handle tab indentation
      Tab: ({ editor: e }) => {
        var t;
        if (!this.options.enableTabIndentation)
          return !1;
        const n = (t = this.options.tabSize) != null ? t : er, { state: s } = e, { selection: o } = s, { $from: r, empty: i } = o;
        if (r.parent.type !== this.type)
          return !1;
        const l = " ".repeat(n);
        return i ? e.commands.insertContent(l) : e.commands.command(({ tr: a }) => {
          const { from: f, to: u } = o, m = s.doc.textBetween(f, u, `
`, `
`).split(`
`).map((E) => l + E).join(`
`);
          return a.replaceWith(f, u, s.schema.text(m)), !0;
        });
      },
      // handle shift+tab reverse indentation
      "Shift-Tab": ({ editor: e }) => {
        var t;
        if (!this.options.enableTabIndentation)
          return !1;
        const n = (t = this.options.tabSize) != null ? t : er, { state: s } = e, { selection: o } = s, { $from: r, empty: i } = o;
        return r.parent.type !== this.type ? !1 : i ? e.commands.command(({ tr: l }) => {
          var a;
          const { pos: f } = r, u = r.start(), c = r.end(), m = s.doc.textBetween(u, c, `
`, `
`).split(`
`);
          let E = 0, b = 0;
          const O = f - u;
          for (let z = 0; z < m.length; z += 1) {
            if (b + m[z].length >= O) {
              E = z;
              break;
            }
            b += m[z].length + 1;
          }
          const M = ((a = m[E].match(/^ */)) == null ? void 0 : a[0]) || "", B = Math.min(M.length, n);
          if (B === 0)
            return !0;
          let ee = u;
          for (let z = 0; z < E; z += 1)
            ee += m[z].length + 1;
          return l.delete(ee, ee + B), f - ee <= B && l.setSelection(en.create(l.doc, ee)), !0;
        }) : e.commands.command(({ tr: l }) => {
          const { from: a, to: f } = o, p = s.doc.textBetween(a, f, `
`, `
`).split(`
`).map((m) => {
            var E;
            const b = ((E = m.match(/^ */)) == null ? void 0 : E[0]) || "", O = Math.min(b.length, n);
            return m.slice(O);
          }).join(`
`);
          return l.replaceWith(a, f, s.schema.text(p)), !0;
        });
      },
      // exit node on triple enter
      Enter: ({ editor: e }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: t } = e, { selection: n } = t, { $from: s, empty: o } = n;
        if (!o || s.parent.type !== this.type)
          return !1;
        const r = s.parentOffset === s.parent.nodeSize - 2, i = s.parent.textContent.endsWith(`

`);
        return !r || !i ? !1 : e.chain().command(({ tr: l }) => (l.delete(s.pos - 2, s.pos), !0)).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor: e }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: t } = e, { selection: n, doc: s } = t, { $from: o, empty: r } = n;
        if (!r || o.parent.type !== this.type || !(o.parentOffset === o.parent.nodeSize - 2))
          return !1;
        const l = o.after();
        return l === void 0 ? !1 : s.nodeAt(l) ? e.commands.command(({ tr: f }) => (f.setSelection(es.near(s.resolve(l))), !0)) : e.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      ur({
        find: _p,
        type: this.type,
        getAttributes: (e) => ({
          language: e[1]
        })
      }),
      ur({
        find: xp,
        type: this.type,
        getAttributes: (e) => ({
          language: e[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new He({
        key: new We("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (e, t) => {
            if (!t.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const n = t.clipboardData.getData("text/plain"), s = t.clipboardData.getData("vscode-editor-data"), o = s ? JSON.parse(s) : void 0, r = o?.mode;
            if (!n || !r)
              return !1;
            const { tr: i, schema: l } = e.state, a = l.text(n.replace(/\r\n?/g, `
`));
            return i.replaceSelectionWith(this.type.create({ language: r }, a)), i.selection.$from.parent.type !== this.type && i.setSelection(en.near(i.doc.resolve(Math.max(0, i.selection.from - 2)))), i.setMeta("paste", !0), e.dispatch(i), !0;
          }
        }
      })
    ];
  }
}), kp = je.create({
  name: "doc",
  topNode: !0,
  content: "block+",
  renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, `

`) : ""
}), Np = je.create({
  name: "hardBreak",
  markdownTokenName: "br",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  linebreakReplacement: !0,
  parseHTML() {
    return [{ tag: "br" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["br", he(this.options.HTMLAttributes, e)];
  },
  renderText() {
    return `
`;
  },
  renderMarkdown: () => `  
`,
  parseMarkdown: () => ({
    type: "hardBreak"
  }),
  addCommands() {
    return {
      setHardBreak: () => ({ commands: e, chain: t, state: n, editor: s }) => e.first([
        () => e.exitCode(),
        () => e.command(() => {
          const { selection: o, storedMarks: r } = n;
          if (o.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: i } = this.options, { splittableMarks: l } = s.extensionManager, a = r || o.$to.parentOffset && o.$from.marks();
          return t().insertContent({ type: this.name }).command(({ tr: f, dispatch: u }) => {
            if (u && a && i) {
              const c = a.filter((p) => l.includes(p.type.name));
              f.ensureMarks(c);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), Cp = je.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((e) => ({
      tag: `h${e}`,
      attrs: { level: e }
    }));
  },
  renderHTML({ node: e, HTMLAttributes: t }) {
    return [`h${this.options.levels.includes(e.attrs.level) ? e.attrs.level : this.options.levels[0]}`, he(this.options.HTMLAttributes, t), 0];
  },
  parseMarkdown: (e, t) => t.createNode("heading", { level: e.depth || 1 }, t.parseInline(e.tokens || [])),
  renderMarkdown: (e, t) => {
    var n;
    const s = (n = e.attrs) != null && n.level ? parseInt(e.attrs.level, 10) : 1, o = "#".repeat(s);
    return e.content ? `${o} ${t.renderChildren(e.content)}` : "";
  },
  addCommands() {
    return {
      setHeading: (e) => ({ commands: t }) => this.options.levels.includes(e.level) ? t.setNode(this.name, e) : !1,
      toggleHeading: (e) => ({ commands: t }) => this.options.levels.includes(e.level) ? t.toggleNode(this.name, "paragraph", e) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce(
      (e, t) => ({
        ...e,
        [`Mod-Alt-${t}`]: () => this.editor.commands.toggleHeading({ level: t })
      }),
      {}
    );
  },
  addInputRules() {
    return this.options.levels.map((e) => ur({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${e}})\\s$`),
      type: this.type,
      getAttributes: {
        level: e
      }
    }));
  }
}), Tp = je.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {},
      nextNodeType: "paragraph"
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["hr", he(this.options.HTMLAttributes, e)];
  },
  markdownTokenName: "hr",
  parseMarkdown: (e, t) => t.createNode("horizontalRule"),
  renderMarkdown: () => "---",
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: e, state: t }) => {
        if (!Mc(t, t.schema.nodes[this.name]))
          return !1;
        const { selection: n } = t, { $to: s } = n, o = e();
        return Bl(n) ? o.insertContentAt(s.pos, {
          type: this.name
        }) : o.insertContent({ type: this.name }), o.command(({ state: r, tr: i, dispatch: l }) => {
          if (l) {
            const { $to: a } = i.selection, f = a.end();
            if (a.nodeAfter)
              a.nodeAfter.isTextblock ? i.setSelection(en.create(i.doc, a.pos + 1)) : a.nodeAfter.isBlock ? i.setSelection(Vr.create(i.doc, a.pos)) : i.setSelection(en.create(i.doc, a.pos));
            else {
              const u = r.schema.nodes[this.options.nextNodeType] || a.parent.type.contentMatch.defaultType, c = u?.create();
              c && (i.insert(f, c), i.setSelection(en.create(i.doc, f + 1)));
            }
            i.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      $l({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), Op = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, Ap = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, Sp = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, Dp = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, Lp = Cn.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (e) => e.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (e) => e.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["em", he(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: e }) => e.setMark(this.name),
      toggleItalic: () => ({ commands: e }) => e.toggleMark(this.name),
      unsetItalic: () => ({ commands: e }) => e.unsetMark(this.name)
    };
  },
  markdownTokenName: "em",
  parseMarkdown: (e, t) => t.applyMark("italic", t.parseInline(e.tokens || [])),
  renderMarkdown: (e, t) => `*${t.renderChildren(e)}*`,
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      xn({
        find: Op,
        type: this.type
      }),
      xn({
        find: Sp,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      ln({
        find: Ap,
        type: this.type
      }),
      ln({
        find: Dp,
        type: this.type
      })
    ];
  }
});
const Mp = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Ip = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Tr = "numeric", Or = "ascii", Ar = "alpha", Gn = "asciinumeric", $n = "alphanumeric", Sr = "domain", ic = "emoji", Pp = "scheme", Rp = "slashscheme", tr = "whitespace";
function Vp(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Zt(e, t, n) {
  t[Tr] && (t[Gn] = !0, t[$n] = !0), t[Or] && (t[Gn] = !0, t[Ar] = !0), t[Gn] && (t[$n] = !0), t[Ar] && (t[$n] = !0), t[$n] && (t[Sr] = !0), t[ic] && (t[Sr] = !0);
  for (const s in t) {
    const o = Vp(s, n);
    o.indexOf(e) < 0 && o.push(e);
  }
}
function Hp(e, t) {
  const n = {};
  for (const s in t)
    t[s].indexOf(e) >= 0 && (n[s] = !0);
  return n;
}
function Ve(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
Ve.groups = {};
Ve.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(e) {
    const t = this, n = t.j[e];
    if (n)
      return n;
    for (let s = 0; s < t.jr.length; s++) {
      const o = t.jr[s][0], r = t.jr[s][1];
      if (r && o.test(e))
        return r;
    }
    return t.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(e, t = !1) {
    return t ? e in this.j : !!this.go(e);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(e, t, n, s) {
    for (let o = 0; o < e.length; o++)
      this.tt(e[o], t, n, s);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(e, t, n, s) {
    s = s || Ve.groups;
    let o;
    return t && t.j ? o = t : (o = new Ve(t), n && s && Zt(t, n, s)), this.jr.push([e, o]), o;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(e, t, n, s) {
    let o = this;
    const r = e.length;
    if (!r)
      return o;
    for (let i = 0; i < r - 1; i++)
      o = o.tt(e[i]);
    return o.tt(e[r - 1], t, n, s);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(e, t, n, s) {
    s = s || Ve.groups;
    const o = this;
    if (t && t.j)
      return o.j[e] = t, t;
    const r = t;
    let i, l = o.go(e);
    if (l ? (i = new Ve(), Object.assign(i.j, l.j), i.jr.push.apply(i.jr, l.jr), i.jd = l.jd, i.t = l.t) : i = new Ve(), r) {
      if (s)
        if (i.t && typeof i.t == "string") {
          const a = Object.assign(Hp(i.t, s), n);
          Zt(r, a, s);
        } else n && Zt(r, n, s);
      i.t = r;
    }
    return o.j[e] = i, i;
  }
};
const K = (e, t, n, s, o) => e.ta(t, n, s, o), ie = (e, t, n, s, o) => e.tr(t, n, s, o), bl = (e, t, n, s, o) => e.ts(t, n, s, o), k = (e, t, n, s, o) => e.tt(t, n, s, o), Nt = "WORD", Dr = "UWORD", lc = "ASCIINUMERICAL", ac = "ALPHANUMERICAL", as = "LOCALHOST", Lr = "TLD", Mr = "UTLD", Is = "SCHEME", mn = "SLASH_SCHEME", ai = "NUM", Ir = "WS", ci = "NL", Jn = "OPENBRACE", Yn = "CLOSEBRACE", Qs = "OPENBRACKET", Zs = "CLOSEBRACKET", eo = "OPENPAREN", to = "CLOSEPAREN", no = "OPENANGLEBRACKET", so = "CLOSEANGLEBRACKET", oo = "FULLWIDTHLEFTPAREN", ro = "FULLWIDTHRIGHTPAREN", io = "LEFTCORNERBRACKET", lo = "RIGHTCORNERBRACKET", ao = "LEFTWHITECORNERBRACKET", co = "RIGHTWHITECORNERBRACKET", uo = "FULLWIDTHLESSTHAN", fo = "FULLWIDTHGREATERTHAN", po = "AMPERSAND", ho = "APOSTROPHE", mo = "ASTERISK", Ht = "AT", go = "BACKSLASH", vo = "BACKTICK", bo = "CARET", Bt = "COLON", ui = "COMMA", yo = "DOLLAR", ft = "DOT", Eo = "EQUALS", di = "EXCLAMATION", Je = "HYPHEN", Xn = "PERCENT", _o = "PIPE", xo = "PLUS", wo = "POUND", Qn = "QUERY", fi = "QUOTE", cc = "FULLWIDTHMIDDLEDOT", pi = "SEMI", pt = "SLASH", Zn = "TILDE", ko = "UNDERSCORE", uc = "EMOJI", No = "SYM";
var dc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: ac,
  AMPERSAND: po,
  APOSTROPHE: ho,
  ASCIINUMERICAL: lc,
  ASTERISK: mo,
  AT: Ht,
  BACKSLASH: go,
  BACKTICK: vo,
  CARET: bo,
  CLOSEANGLEBRACKET: so,
  CLOSEBRACE: Yn,
  CLOSEBRACKET: Zs,
  CLOSEPAREN: to,
  COLON: Bt,
  COMMA: ui,
  DOLLAR: yo,
  DOT: ft,
  EMOJI: uc,
  EQUALS: Eo,
  EXCLAMATION: di,
  FULLWIDTHGREATERTHAN: fo,
  FULLWIDTHLEFTPAREN: oo,
  FULLWIDTHLESSTHAN: uo,
  FULLWIDTHMIDDLEDOT: cc,
  FULLWIDTHRIGHTPAREN: ro,
  HYPHEN: Je,
  LEFTCORNERBRACKET: io,
  LEFTWHITECORNERBRACKET: ao,
  LOCALHOST: as,
  NL: ci,
  NUM: ai,
  OPENANGLEBRACKET: no,
  OPENBRACE: Jn,
  OPENBRACKET: Qs,
  OPENPAREN: eo,
  PERCENT: Xn,
  PIPE: _o,
  PLUS: xo,
  POUND: wo,
  QUERY: Qn,
  QUOTE: fi,
  RIGHTCORNERBRACKET: lo,
  RIGHTWHITECORNERBRACKET: co,
  SCHEME: Is,
  SEMI: pi,
  SLASH: pt,
  SLASH_SCHEME: mn,
  SYM: No,
  TILDE: Zn,
  TLD: Lr,
  UNDERSCORE: ko,
  UTLD: Mr,
  UWORD: Dr,
  WORD: Nt,
  WS: Ir
});
const wt = /[a-z]/, Rn = new RegExp("\\p{L}", "u"), nr = new RegExp("\\p{Emoji}", "u"), kt = /\d/, sr = /\s/, yl = "\r", or = `
`, jp = "️", $p = "‍", rr = "￼";
let xs = null, ws = null;
function Bp(e = []) {
  const t = {};
  Ve.groups = t;
  const n = new Ve();
  xs == null && (xs = El(Mp)), ws == null && (ws = El(Ip)), k(n, "'", ho), k(n, "{", Jn), k(n, "}", Yn), k(n, "[", Qs), k(n, "]", Zs), k(n, "(", eo), k(n, ")", to), k(n, "<", no), k(n, ">", so), k(n, "（", oo), k(n, "）", ro), k(n, "「", io), k(n, "」", lo), k(n, "『", ao), k(n, "』", co), k(n, "＜", uo), k(n, "＞", fo), k(n, "&", po), k(n, "*", mo), k(n, "@", Ht), k(n, "`", vo), k(n, "^", bo), k(n, ":", Bt), k(n, ",", ui), k(n, "$", yo), k(n, ".", ft), k(n, "=", Eo), k(n, "!", di), k(n, "-", Je), k(n, "%", Xn), k(n, "|", _o), k(n, "+", xo), k(n, "#", wo), k(n, "?", Qn), k(n, '"', fi), k(n, "/", pt), k(n, ";", pi), k(n, "~", Zn), k(n, "_", ko), k(n, "\\", go), k(n, "・", cc);
  const s = ie(n, kt, ai, {
    [Tr]: !0
  });
  ie(s, kt, s);
  const o = ie(s, wt, lc, {
    [Gn]: !0
  }), r = ie(s, Rn, ac, {
    [$n]: !0
  }), i = ie(n, wt, Nt, {
    [Or]: !0
  });
  ie(i, kt, o), ie(i, wt, i), ie(o, kt, o), ie(o, wt, o);
  const l = ie(n, Rn, Dr, {
    [Ar]: !0
  });
  ie(l, wt), ie(l, kt, r), ie(l, Rn, l), ie(r, kt, r), ie(r, wt), ie(r, Rn, r);
  const a = k(n, or, ci, {
    [tr]: !0
  }), f = k(n, yl, Ir, {
    [tr]: !0
  }), u = ie(n, sr, Ir, {
    [tr]: !0
  });
  k(n, rr, u), k(f, or, a), k(f, rr, u), ie(f, sr, u), k(u, yl), k(u, or), ie(u, sr, u), k(u, rr, u);
  const c = ie(n, nr, uc, {
    [ic]: !0
  });
  k(c, "#"), ie(c, nr, c), k(c, jp, c);
  const p = k(c, $p);
  k(p, "#"), ie(p, nr, c);
  const m = [[wt, i], [kt, o]], E = [[wt, null], [Rn, l], [kt, r]];
  for (let b = 0; b < xs.length; b++)
    Pt(n, xs[b], Lr, Nt, m);
  for (let b = 0; b < ws.length; b++)
    Pt(n, ws[b], Mr, Dr, E);
  Zt(Lr, {
    tld: !0,
    ascii: !0
  }, t), Zt(Mr, {
    utld: !0,
    alpha: !0
  }, t), Pt(n, "file", Is, Nt, m), Pt(n, "mailto", Is, Nt, m), Pt(n, "http", mn, Nt, m), Pt(n, "https", mn, Nt, m), Pt(n, "ftp", mn, Nt, m), Pt(n, "ftps", mn, Nt, m), Zt(Is, {
    scheme: !0,
    ascii: !0
  }, t), Zt(mn, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((b, O) => b[0] > O[0] ? 1 : -1);
  for (let b = 0; b < e.length; b++) {
    const O = e[b][0], M = e[b][1] ? {
      [Pp]: !0
    } : {
      [Rp]: !0
    };
    O.indexOf("-") >= 0 ? M[Sr] = !0 : wt.test(O) ? kt.test(O) ? M[Gn] = !0 : M[Or] = !0 : M[Tr] = !0, bl(n, O, O, M);
  }
  return bl(n, "localhost", as, {
    ascii: !0
  }), n.jd = new Ve(No), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, dc)
  };
}
function fc(e, t) {
  const n = Fp(t.replace(/[A-Z]/g, (l) => l.toLowerCase())), s = n.length, o = [];
  let r = 0, i = 0;
  for (; i < s; ) {
    let l = e, a = null, f = 0, u = null, c = -1, p = -1;
    for (; i < s && (a = l.go(n[i])); )
      l = a, l.accepts() ? (c = 0, p = 0, u = l) : c >= 0 && (c += n[i].length, p++), f += n[i].length, r += n[i].length, i++;
    r -= c, i -= p, f -= c, o.push({
      t: u.t,
      // token type/name
      v: t.slice(r - f, r),
      // string value
      s: r - f,
      // start index
      e: r
      // end index (excluding)
    });
  }
  return o;
}
function Fp(e) {
  const t = [], n = e.length;
  let s = 0;
  for (; s < n; ) {
    let o = e.charCodeAt(s), r, i = o < 55296 || o > 56319 || s + 1 === n || (r = e.charCodeAt(s + 1)) < 56320 || r > 57343 ? e[s] : e.slice(s, s + 2);
    t.push(i), s += i.length;
  }
  return t;
}
function Pt(e, t, n, s, o) {
  let r;
  const i = t.length;
  for (let l = 0; l < i - 1; l++) {
    const a = t[l];
    e.j[a] ? r = e.j[a] : (r = new Ve(s), r.jr = o.slice(), e.j[a] = r), e = r;
  }
  return r = new Ve(n), r.jr = o.slice(), e.j[t[i - 1]] = r, r;
}
function El(e) {
  const t = [], n = [];
  let s = 0, o = "0123456789";
  for (; s < e.length; ) {
    let r = 0;
    for (; o.indexOf(e[s + r]) >= 0; )
      r++;
    if (r > 0) {
      t.push(n.join(""));
      for (let i = parseInt(e.substring(s, s + r), 10); i > 0; i--)
        n.pop();
      s += r;
    } else
      n.push(e[s]), s++;
  }
  return t;
}
const cs = {
  defaultProtocol: "http",
  events: null,
  format: _l,
  formatHref: _l,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function hi(e, t = null) {
  let n = Object.assign({}, cs);
  e && (n = Object.assign(n, e instanceof hi ? e.o : e));
  const s = n.ignoreTags, o = [];
  for (let r = 0; r < s.length; r++)
    o.push(s[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = o;
}
hi.prototype = {
  o: cs,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(e) {
    return e;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(e) {
    return this.get("validate", e.toString(), e);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(e, t, n) {
    const s = t != null;
    let o = this.o[e];
    return o && (typeof o == "object" ? (o = n.t in o ? o[n.t] : cs[e], typeof o == "function" && s && (o = o(t, n))) : typeof o == "function" && s && (o = o(t, n.t, n)), o);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(e, t, n) {
    let s = this.o[e];
    return typeof s == "function" && t != null && (s = s(t, n.t, n)), s;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(e) {
    const t = e.render(this);
    return (this.get("render", null, e) || this.defaultRender)(t, e.t, e);
  }
};
function _l(e) {
  return e;
}
function pc(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
pc.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
   */
  toHref(e) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(e) {
    const t = this.toString(), n = e.get("truncate", t, this), s = e.get("format", t, this);
    return n && s.length > n ? s.substring(0, n) + "…" : s;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(e) {
    return e.get("formatHref", this.toHref(e.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(e = cs.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(e),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(e) {
    return {
      type: this.t,
      value: this.toFormattedString(e),
      isLink: this.isLink,
      href: this.toFormattedHref(e),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(e) {
    return e.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(e) {
    const t = this, n = this.toHref(e.get("defaultProtocol")), s = e.get("formatHref", n, this), o = e.get("tagName", n, t), r = this.toFormattedString(e), i = {}, l = e.get("className", n, t), a = e.get("target", n, t), f = e.get("rel", n, t), u = e.getObj("attributes", n, t), c = e.getObj("events", n, t);
    return i.href = s, l && (i.class = l), a && (i.target = a), f && (i.rel = f), u && Object.assign(i, u), {
      tagName: o,
      attributes: i,
      content: r,
      eventListeners: c
    };
  }
};
function jo(e, t) {
  class n extends pc {
    constructor(o, r) {
      super(o, r), this.t = e;
    }
  }
  for (const s in t)
    n.prototype[s] = t[s];
  return n.t = e, n;
}
const xl = jo("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), wl = jo("text"), Up = jo("nl"), ks = jo("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(e = cs.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== as && e[1].t === Bt;
  }
}), Ge = (e) => new Ve(e);
function Kp({
  groups: e
}) {
  const t = e.domain.concat([po, mo, Ht, go, vo, bo, yo, Eo, Je, ai, Xn, _o, xo, wo, pt, No, Zn, ko]), n = [ho, Bt, ui, ft, di, Xn, Qn, fi, pi, no, so, Jn, Yn, Zs, Qs, eo, to, oo, ro, io, lo, ao, co, uo, fo], s = [po, ho, mo, go, vo, bo, yo, Eo, Je, Jn, Yn, Xn, _o, xo, wo, Qn, pt, No, Zn, ko], o = Ge(), r = k(o, Zn);
  K(r, s, r), K(r, e.domain, r);
  const i = Ge(), l = Ge(), a = Ge();
  K(o, e.domain, i), K(o, e.scheme, l), K(o, e.slashscheme, a), K(i, s, r), K(i, e.domain, i);
  const f = k(i, Ht);
  k(r, Ht, f), k(l, Ht, f), k(a, Ht, f);
  const u = k(r, ft);
  K(u, s, r), K(u, e.domain, r);
  const c = Ge();
  K(f, e.domain, c), K(c, e.domain, c);
  const p = k(c, ft);
  K(p, e.domain, c);
  const m = Ge(xl);
  K(p, e.tld, m), K(p, e.utld, m), k(f, as, m);
  const E = k(c, Je);
  k(E, Je, E), K(E, e.domain, c), K(m, e.domain, c), k(m, ft, p), k(m, Je, E);
  const b = k(m, Bt);
  K(b, e.numeric, xl);
  const O = k(i, Je), D = k(i, ft);
  k(O, Je, O), K(O, e.domain, i), K(D, s, r), K(D, e.domain, i);
  const M = Ge(ks);
  K(D, e.tld, M), K(D, e.utld, M), K(M, e.domain, i), K(M, s, r), k(M, ft, D), k(M, Je, O), k(M, Ht, f);
  const B = k(M, Bt), ee = Ge(ks);
  K(B, e.numeric, ee);
  const L = Ge(ks), z = Ge();
  K(L, t, L), K(L, n, z), K(z, t, L), K(z, n, z), k(M, pt, L), k(ee, pt, L);
  const me = k(l, Bt), ue = k(a, Bt), de = k(ue, pt), ke = k(de, pt);
  K(l, e.domain, i), k(l, ft, D), k(l, Je, O), K(a, e.domain, i), k(a, ft, D), k(a, Je, O), K(me, e.domain, L), k(me, pt, L), k(me, Qn, L), K(ke, e.domain, L), K(ke, t, L), k(ke, pt, L);
  const $e = [
    [Jn, Yn],
    // {}
    [Qs, Zs],
    // []
    [eo, to],
    // ()
    [no, so],
    // <>
    [oo, ro],
    // （）
    [io, lo],
    // 「」
    [ao, co],
    // 『』
    [uo, fo]
    // ＜＞
  ];
  for (let _e = 0; _e < $e.length; _e++) {
    const [_t, Mt] = $e[_e], Ne = k(L, _t);
    k(z, _t, Ne), k(Ne, Mt, L);
    const oe = Ge(ks);
    K(Ne, t, oe);
    const j = Ge();
    K(Ne, n), K(oe, t, oe), K(oe, n, j), K(j, t, oe), K(j, n, j), k(oe, Mt, L), k(j, Mt, L);
  }
  return k(o, as, M), k(o, ci, Up), {
    start: o,
    tokens: dc
  };
}
function Wp(e, t, n) {
  let s = n.length, o = 0, r = [], i = [];
  for (; o < s; ) {
    let l = e, a = null, f = null, u = 0, c = null, p = -1;
    for (; o < s && !(a = l.go(n[o].t)); )
      i.push(n[o++]);
    for (; o < s && (f = a || l.go(n[o].t)); )
      a = null, l = f, l.accepts() ? (p = 0, c = l) : p >= 0 && p++, o++, u++;
    if (p < 0)
      o -= u, o < s && (i.push(n[o]), o++);
    else {
      i.length > 0 && (r.push(ir(wl, t, i)), i = []), o -= p, u -= p;
      const m = c.t, E = n.slice(o - u, o);
      r.push(ir(m, t, E));
    }
  }
  return i.length > 0 && r.push(ir(wl, t, i)), r;
}
function ir(e, t, n) {
  const s = n[0].s, o = n[n.length - 1].e, r = t.slice(s, o);
  return new e(r, n);
}
const zp = typeof console < "u" && console && console.warn || (() => {
}), qp = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", ne = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function Gp() {
  return Ve.groups = {}, ne.scanner = null, ne.parser = null, ne.tokenQueue = [], ne.pluginQueue = [], ne.customSchemes = [], ne.initialized = !1, ne;
}
function kl(e, t = !1) {
  if (ne.initialized && zp(`linkifyjs: already initialized - will not register custom scheme "${e}" ${qp}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  ne.customSchemes.push([e, t]);
}
function Jp() {
  ne.scanner = Bp(ne.customSchemes);
  for (let e = 0; e < ne.tokenQueue.length; e++)
    ne.tokenQueue[e][1]({
      scanner: ne.scanner
    });
  ne.parser = Kp(ne.scanner.tokens);
  for (let e = 0; e < ne.pluginQueue.length; e++)
    ne.pluginQueue[e][1]({
      scanner: ne.scanner,
      parser: ne.parser
    });
  return ne.initialized = !0, ne;
}
function mi(e) {
  return ne.initialized || Jp(), Wp(ne.parser.start, e, fc(ne.scanner.start, e));
}
mi.scan = fc;
function hc(e, t = null, n = null) {
  if (t && typeof t == "object") {
    if (n)
      throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
    n = t, t = null;
  }
  const s = new hi(n), o = mi(e), r = [];
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    l.isLink && (!t || l.t === t) && s.check(l) && r.push(l.toFormattedObject(s));
  }
  return r;
}
var gi = "[\0-   ᠎ -\u2029 　]", Yp = new RegExp(gi), Xp = new RegExp(`${gi}$`), Qp = new RegExp(gi, "g");
function Zp(e) {
  return e.length === 1 ? e[0].isLink : e.length === 3 && e[1].isLink ? ["()", "[]"].includes(e[0].value + e[2].value) : !1;
}
function eh(e) {
  return new He({
    key: new We("autolink"),
    appendTransaction: (t, n, s) => {
      const o = t.some((f) => f.docChanged) && !n.doc.eq(s.doc), r = t.some((f) => f.getMeta("preventAutolink"));
      if (!o || r)
        return;
      const { tr: i } = s, l = Ic(n.doc, [...t]);
      if (Pc(l).forEach(({ newRange: f }) => {
        const u = Rc(s.doc, f, (m) => m.isTextblock);
        let c, p;
        if (u.length > 1)
          c = u[0], p = s.doc.textBetween(
            c.pos,
            c.pos + c.node.nodeSize,
            void 0,
            " "
          );
        else if (u.length) {
          const m = s.doc.textBetween(f.from, f.to, " ", " ");
          if (!Xp.test(m))
            return;
          c = u[0], p = s.doc.textBetween(c.pos, f.to, void 0, " ");
        }
        if (c && p) {
          const m = p.split(Yp).filter(Boolean);
          if (m.length <= 0)
            return !1;
          const E = m[m.length - 1], b = c.pos + p.lastIndexOf(E);
          if (!E)
            return !1;
          const O = mi(E).map((D) => D.toObject(e.defaultProtocol));
          if (!Zp(O))
            return !1;
          O.filter((D) => D.isLink).map((D) => ({
            ...D,
            from: b + D.start + 1,
            to: b + D.end + 1
          })).filter((D) => s.schema.marks.code ? !s.doc.rangeHasMark(D.from, D.to, s.schema.marks.code) : !0).filter((D) => e.validate(D.value)).filter((D) => e.shouldAutoLink(D.value)).forEach((D) => {
            Vc(D.from, D.to, s.doc).some((M) => M.mark.type === e.type) || i.addMark(
              D.from,
              D.to,
              e.type.create({
                href: D.href
              })
            );
          });
        }
      }), !!i.steps.length)
        return i;
    }
  });
}
function th(e) {
  return new He({
    key: new We("handleClickLink"),
    props: {
      handleClick: (t, n, s) => {
        var o, r;
        if (s.button !== 0 || !t.editable)
          return !1;
        let i = null;
        if (s.target instanceof HTMLAnchorElement)
          i = s.target;
        else {
          const a = s.target;
          if (!a)
            return !1;
          const f = e.editor.view.dom;
          i = a.closest("a"), i && !f.contains(i) && (i = null);
        }
        if (!i)
          return !1;
        let l = !1;
        if (e.enableClickSelection && (l = e.editor.commands.extendMarkRange(e.type.name)), e.openOnClick) {
          const a = Hc(t.state, e.type.name), f = (o = i.href) != null ? o : a.href, u = (r = i.target) != null ? r : a.target;
          f && (window.open(f, u), l = !0);
        }
        return l;
      }
    }
  });
}
function nh(e) {
  return new He({
    key: new We("handlePasteLink"),
    props: {
      handlePaste: (t, n, s) => {
        const { shouldAutoLink: o } = e, { state: r } = t, { selection: i } = r, { empty: l } = i;
        if (l)
          return !1;
        let a = "";
        s.content.forEach((u) => {
          a += u.textContent;
        });
        const f = hc(a, { defaultProtocol: e.defaultProtocol }).find(
          (u) => u.isLink && u.value === a
        );
        return !a || !f || o !== void 0 && !o(f.value) ? !1 : e.editor.commands.setMark(e.type, {
          href: f.href
        });
      }
    }
  });
}
function Yt(e, t) {
  const n = ["http", "https", "ftp", "ftps", "mailto", "tel", "callto", "sms", "cid", "xmpp"];
  return t && t.forEach((s) => {
    const o = typeof s == "string" ? s : s.scheme;
    o && n.push(o);
  }), !e || e.replace(Qp, "").match(
    new RegExp(
      // eslint-disable-next-line no-useless-escape
      `^(?:(?:${n.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
      "i"
    )
  );
}
var mc = Cn.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((e) => {
      if (typeof e == "string") {
        kl(e);
        return;
      }
      kl(e.scheme, e.optionalSlashes);
    });
  },
  onDestroy() {
    Gp();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      enableClickSelection: !1,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (e, t) => !!Yt(e, t.protocols),
      validate: (e) => !!e,
      shouldAutoLink: (e) => {
        const t = /^[a-z][a-z0-9+.-]*:\/\//i.test(e), n = /^[a-z][a-z0-9+.-]*:/i.test(e);
        if (t || n && !e.includes("@"))
          return !0;
        const o = (e.includes("@") ? e.split("@").pop() : e).split(/[/?#:]/)[0];
        return !(/^\d{1,3}(\.\d{1,3}){3}$/.test(o) || !/\./.test(o));
      }
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(e) {
          return e.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      },
      title: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[href]",
        getAttrs: (e) => {
          const t = e.getAttribute("href");
          return !t || !this.options.isAllowedUri(t, {
            defaultValidate: (n) => !!Yt(n, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return this.options.isAllowedUri(e.href, {
      defaultValidate: (t) => !!Yt(t, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", he(this.options.HTMLAttributes, e), 0] : ["a", he(this.options.HTMLAttributes, { ...e, href: "" }), 0];
  },
  markdownTokenName: "link",
  parseMarkdown: (e, t) => t.applyMark("link", t.parseInline(e.tokens || []), {
    href: e.href,
    title: e.title || null
  }),
  renderMarkdown: (e, t) => {
    var n, s, o, r;
    const i = (s = (n = e.attrs) == null ? void 0 : n.href) != null ? s : "", l = (r = (o = e.attrs) == null ? void 0 : o.title) != null ? r : "", a = t.renderChildren(e);
    return l ? `[${a}](${i} "${l}")` : `[${a}](${i})`;
  },
  addCommands() {
    return {
      setLink: (e) => ({ chain: t }) => {
        const { href: n } = e;
        return this.options.isAllowedUri(n, {
          defaultValidate: (s) => !!Yt(s, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? t().setMark(this.name, e).setMeta("preventAutolink", !0).run() : !1;
      },
      toggleLink: (e) => ({ chain: t }) => {
        const { href: n } = e || {};
        return n && !this.options.isAllowedUri(n, {
          defaultValidate: (s) => !!Yt(s, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? !1 : t().toggleMark(this.name, e, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run();
      },
      unsetLink: () => ({ chain: e }) => e().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      ln({
        find: (e) => {
          const t = [];
          if (e) {
            const { protocols: n, defaultProtocol: s } = this.options, o = hc(e).filter(
              (r) => r.isLink && this.options.isAllowedUri(r.value, {
                defaultValidate: (i) => !!Yt(i, n),
                protocols: n,
                defaultProtocol: s
              })
            );
            o.length && o.forEach((r) => {
              this.options.shouldAutoLink(r.value) && t.push({
                text: r.value,
                data: {
                  href: r.href
                },
                index: r.start
              });
            });
          }
          return t;
        },
        type: this.type,
        getAttributes: (e) => {
          var t;
          return {
            href: (t = e.data) == null ? void 0 : t.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const e = [], { protocols: t, defaultProtocol: n } = this.options;
    return this.options.autolink && e.push(
      eh({
        type: this.type,
        defaultProtocol: this.options.defaultProtocol,
        validate: (s) => this.options.isAllowedUri(s, {
          defaultValidate: (o) => !!Yt(o, t),
          protocols: t,
          defaultProtocol: n
        }),
        shouldAutoLink: this.options.shouldAutoLink
      })
    ), e.push(
      th({
        type: this.type,
        editor: this.editor,
        openOnClick: this.options.openOnClick === "whenNotEditable" ? !0 : this.options.openOnClick,
        enableClickSelection: this.options.enableClickSelection
      })
    ), this.options.linkOnPaste && e.push(
      nh({
        editor: this.editor,
        defaultProtocol: this.options.defaultProtocol,
        type: this.type,
        shouldAutoLink: this.options.shouldAutoLink
      })
    ), e;
  }
}), Nl = mc, sh = Object.defineProperty, oh = (e, t) => {
  for (var n in t)
    sh(e, n, { get: t[n], enumerable: !0 });
}, rh = "listItem", Cl = "textStyle", Tl = /^\s*([-+*])\s$/, gc = je.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [{ tag: "ul" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["ul", he(this.options.HTMLAttributes, e), 0];
  },
  markdownTokenName: "list",
  parseMarkdown: (e, t) => e.type !== "list" || e.ordered ? [] : {
    type: "bulletList",
    content: e.items ? t.parseChildren(e.items) : []
  },
  renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, `
`) : "",
  markdownOptions: {
    indentsContent: !0
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: e, chain: t }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(rh, this.editor.getAttributes(Cl)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let e = _n({
      find: Tl,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (e = _n({
      find: Tl,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(Cl),
      editor: this.editor
    })), [e];
  }
}), vc = je.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["li", he(this.options.HTMLAttributes, e), 0];
  },
  markdownTokenName: "list_item",
  parseMarkdown: (e, t) => {
    if (e.type !== "list_item")
      return [];
    let n = [];
    if (e.tokens && e.tokens.length > 0)
      if (e.tokens.some((o) => o.type === "paragraph"))
        n = t.parseChildren(e.tokens);
      else {
        const o = e.tokens[0];
        if (o && o.type === "text" && o.tokens && o.tokens.length > 0) {
          if (n = [
            {
              type: "paragraph",
              content: t.parseInline(o.tokens)
            }
          ], e.tokens.length > 1) {
            const i = e.tokens.slice(1), l = t.parseChildren(i);
            n.push(...l);
          }
        } else
          n = t.parseChildren(e.tokens);
      }
    return n.length === 0 && (n = [
      {
        type: "paragraph",
        content: []
      }
    ]), {
      type: "listItem",
      content: n
    };
  },
  renderMarkdown: (e, t, n) => Fl(
    e,
    t,
    (s) => {
      var o, r;
      return s.parentType === "bulletList" ? "- " : s.parentType === "orderedList" ? `${(((r = (o = s.meta) == null ? void 0 : o.parentAttrs) == null ? void 0 : r.start) || 1) + s.index}. ` : "- ";
    },
    n
  ),
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), ih = {};
oh(ih, {
  findListItemPos: () => bs,
  getNextListDepth: () => vi,
  handleBackspace: () => Pr,
  handleDelete: () => Rr,
  hasListBefore: () => bc,
  hasListItemAfter: () => lh,
  hasListItemBefore: () => yc,
  listItemHasSubList: () => Ec,
  nextListIsDeeper: () => _c,
  nextListIsHigher: () => xc
});
var bs = (e, t) => {
  const { $from: n } = t.selection, s = Ul(e, t.schema);
  let o = null, r = n.depth, i = n.pos, l = null;
  for (; r > 0 && l === null; )
    o = n.node(r), o.type === s ? l = r : (r -= 1, i -= 1);
  return l === null ? null : { $pos: t.doc.resolve(i), depth: l };
}, vi = (e, t) => {
  const n = bs(e, t);
  if (!n)
    return !1;
  const [, s] = Fc(t, e, n.$pos.pos + 4);
  return s;
}, bc = (e, t, n) => {
  const { $anchor: s } = e.selection, o = Math.max(0, s.pos - 2), r = e.doc.resolve(o).node();
  return !(!r || !n.includes(r.type.name));
}, yc = (e, t) => {
  var n;
  const { $anchor: s } = t.selection, o = t.doc.resolve(s.pos - 2);
  return !(o.index() === 0 || ((n = o.nodeBefore) == null ? void 0 : n.type.name) !== e);
}, Ec = (e, t, n) => {
  if (!n)
    return !1;
  const s = Ul(e, t.schema);
  let o = !1;
  return n.descendants((r) => {
    r.type === s && (o = !0);
  }), o;
}, Pr = (e, t, n) => {
  if (e.commands.undoInputRule())
    return !0;
  if (e.state.selection.from !== e.state.selection.to)
    return !1;
  if (!dr(e.state, t) && bc(e.state, t, n)) {
    const { $anchor: l } = e.state.selection, a = e.state.doc.resolve(l.before() - 1), f = [];
    a.node().descendants((p, m) => {
      p.type.name === t && f.push({ node: p, pos: m });
    });
    const u = f.at(-1);
    if (!u)
      return !1;
    const c = e.state.doc.resolve(a.start() + u.pos + 1);
    return e.chain().cut({ from: l.start() - 1, to: l.end() + 1 }, c.end()).joinForward().run();
  }
  if (!dr(e.state, t) || !$c(e.state))
    return !1;
  const s = bs(t, e.state);
  if (!s)
    return !1;
  const r = e.state.doc.resolve(s.$pos.pos - 2).node(s.depth), i = Ec(t, e.state, r);
  return yc(t, e.state) && !i ? e.commands.joinItemBackward() : e.chain().liftListItem(t).run();
}, _c = (e, t) => {
  const n = vi(e, t), s = bs(e, t);
  return !s || !n ? !1 : n > s.depth;
}, xc = (e, t) => {
  const n = vi(e, t), s = bs(e, t);
  return !s || !n ? !1 : n < s.depth;
}, Rr = (e, t) => {
  if (!dr(e.state, t) || !Bc(e.state, t))
    return !1;
  const { selection: n } = e.state, { $from: s, $to: o } = n;
  return !n.empty && s.sameParent(o) ? !1 : _c(t, e.state) ? e.chain().focus(e.state.selection.from + 4).lift(t).joinBackward().run() : xc(t, e.state) ? e.chain().joinForward().joinBackward().run() : e.commands.joinItemForward();
}, lh = (e, t) => {
  var n;
  const { $anchor: s } = t.selection, o = t.doc.resolve(s.pos - s.parentOffset - 2);
  return !(o.index() === o.parent.childCount - 1 || ((n = o.nodeAfter) == null ? void 0 : n.type.name) !== e);
}, wc = ze.create({
  name: "listKeymap",
  addOptions() {
    return {
      listTypes: [
        {
          itemName: "listItem",
          wrapperNames: ["bulletList", "orderedList"]
        },
        {
          itemName: "taskItem",
          wrapperNames: ["taskList"]
        }
      ]
    };
  },
  addKeyboardShortcuts() {
    return {
      Delete: ({ editor: e }) => {
        let t = !1;
        return this.options.listTypes.forEach(({ itemName: n }) => {
          e.state.schema.nodes[n] !== void 0 && Rr(e, n) && (t = !0);
        }), t;
      },
      "Mod-Delete": ({ editor: e }) => {
        let t = !1;
        return this.options.listTypes.forEach(({ itemName: n }) => {
          e.state.schema.nodes[n] !== void 0 && Rr(e, n) && (t = !0);
        }), t;
      },
      Backspace: ({ editor: e }) => {
        let t = !1;
        return this.options.listTypes.forEach(({ itemName: n, wrapperNames: s }) => {
          e.state.schema.nodes[n] !== void 0 && Pr(e, n, s) && (t = !0);
        }), t;
      },
      "Mod-Backspace": ({ editor: e }) => {
        let t = !1;
        return this.options.listTypes.forEach(({ itemName: n, wrapperNames: s }) => {
          e.state.schema.nodes[n] !== void 0 && Pr(e, n, s) && (t = !0);
        }), t;
      }
    };
  }
}), Ol = /^(\s*)(\d+)\.\s+(.*)$/, ah = /^\s/;
function ch(e) {
  const t = [];
  let n = 0, s = 0;
  for (; n < e.length; ) {
    const o = e[n], r = o.match(Ol);
    if (!r)
      break;
    const [, i, l, a] = r, f = i.length;
    let u = a, c = n + 1;
    const p = [o];
    for (; c < e.length; ) {
      const m = e[c];
      if (m.match(Ol))
        break;
      if (m.trim() === "")
        p.push(m), u += `
`, c += 1;
      else if (m.match(ah))
        p.push(m), u += `
${m.slice(f + 2)}`, c += 1;
      else
        break;
    }
    t.push({
      indent: f,
      number: parseInt(l, 10),
      content: u.trim(),
      raw: p.join(`
`)
    }), s = c, n = c;
  }
  return [t, s];
}
function kc(e, t, n) {
  var s;
  const o = [];
  let r = 0;
  for (; r < e.length; ) {
    const i = e[r];
    if (i.indent === t) {
      const l = i.content.split(`
`), a = ((s = l[0]) == null ? void 0 : s.trim()) || "", f = [];
      a && f.push({
        type: "paragraph",
        raw: a,
        tokens: n.inlineTokens(a)
      });
      const u = l.slice(1).join(`
`).trim();
      if (u) {
        const m = n.blockTokens(u);
        f.push(...m);
      }
      let c = r + 1;
      const p = [];
      for (; c < e.length && e[c].indent > t; )
        p.push(e[c]), c += 1;
      if (p.length > 0) {
        const m = Math.min(...p.map((b) => b.indent)), E = kc(p, m, n);
        f.push({
          type: "list",
          ordered: !0,
          start: p[0].number,
          items: E,
          raw: p.map((b) => b.raw).join(`
`)
        });
      }
      o.push({
        type: "list_item",
        raw: i.raw,
        tokens: f
      }), r = c;
    } else
      r += 1;
  }
  return o;
}
function uh(e, t) {
  return e.map((n) => {
    if (n.type !== "list_item")
      return t.parseChildren([n])[0];
    const s = [];
    return n.tokens && n.tokens.length > 0 && n.tokens.forEach((o) => {
      if (o.type === "paragraph" || o.type === "list" || o.type === "blockquote" || o.type === "code")
        s.push(...t.parseChildren([o]));
      else if (o.type === "text" && o.tokens) {
        const r = t.parseChildren([o]);
        s.push({
          type: "paragraph",
          content: r
        });
      } else {
        const r = t.parseChildren([o]);
        r.length > 0 && s.push(...r);
      }
    }), {
      type: "listItem",
      content: s
    };
  });
}
var dh = "listItem", Al = "textStyle", Sl = /^(\d+)\.\s$/, Nc = je.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (e) => e.hasAttribute("start") ? parseInt(e.getAttribute("start") || "", 10) : 1
      },
      type: {
        default: null,
        parseHTML: (e) => e.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    const { start: t, ...n } = e;
    return t === 1 ? ["ol", he(this.options.HTMLAttributes, n), 0] : ["ol", he(this.options.HTMLAttributes, e), 0];
  },
  markdownTokenName: "list",
  parseMarkdown: (e, t) => {
    if (e.type !== "list" || !e.ordered)
      return [];
    const n = e.start || 1, s = e.items ? uh(e.items, t) : [];
    return n !== 1 ? {
      type: "orderedList",
      attrs: { start: n },
      content: s
    } : {
      type: "orderedList",
      content: s
    };
  },
  renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, `
`) : "",
  markdownTokenizer: {
    name: "orderedList",
    level: "block",
    start: (e) => {
      const t = e.match(/^(\s*)(\d+)\.\s+/), n = t?.index;
      return n !== void 0 ? n : -1;
    },
    tokenize: (e, t, n) => {
      var s;
      const o = e.split(`
`), [r, i] = ch(o);
      if (r.length === 0)
        return;
      const l = kc(r, 0, n);
      return l.length === 0 ? void 0 : {
        type: "list",
        ordered: !0,
        start: ((s = r[0]) == null ? void 0 : s.number) || 1,
        items: l,
        raw: o.slice(0, i).join(`
`)
      };
    }
  },
  markdownOptions: {
    indentsContent: !0
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: e, chain: t }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(dh, this.editor.getAttributes(Al)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let e = _n({
      find: Sl,
      type: this.type,
      getAttributes: (t) => ({ start: +t[1] }),
      joinPredicate: (t, n) => n.childCount + n.attrs.start === +t[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (e = _n({
      find: Sl,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (t) => ({ start: +t[1], ...this.editor.getAttributes(Al) }),
      joinPredicate: (t, n) => n.childCount + n.attrs.start === +t[1],
      editor: this.editor
    })), [e];
  }
}), fh = /^\s*(\[([( |x])?\])\s$/, ph = je.create({
  name: "taskItem",
  addOptions() {
    return {
      nested: !1,
      HTMLAttributes: {},
      taskListTypeName: "taskList",
      a11y: void 0
    };
  },
  content() {
    return this.options.nested ? "paragraph block*" : "paragraph+";
  },
  defining: !0,
  addAttributes() {
    return {
      checked: {
        default: !1,
        keepOnSplit: !1,
        parseHTML: (e) => {
          const t = e.getAttribute("data-checked");
          return t === "" || t === "true";
        },
        renderHTML: (e) => ({
          "data-checked": e.checked
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: `li[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ node: e, HTMLAttributes: t }) {
    return [
      "li",
      he(this.options.HTMLAttributes, t, {
        "data-type": this.name
      }),
      [
        "label",
        [
          "input",
          {
            type: "checkbox",
            checked: e.attrs.checked ? "checked" : null
          }
        ],
        ["span"]
      ],
      ["div", 0]
    ];
  },
  parseMarkdown: (e, t) => {
    const n = [];
    if (e.tokens && e.tokens.length > 0 ? n.push(t.createNode("paragraph", {}, t.parseInline(e.tokens))) : e.text ? n.push(t.createNode("paragraph", {}, [t.createNode("text", { text: e.text })])) : n.push(t.createNode("paragraph", {}, [])), e.nestedTokens && e.nestedTokens.length > 0) {
      const s = t.parseChildren(e.nestedTokens);
      n.push(...s);
    }
    return t.createNode("taskItem", { checked: e.checked || !1 }, n);
  },
  renderMarkdown: (e, t) => {
    var n;
    const o = `- [${(n = e.attrs) != null && n.checked ? "x" : " "}] `;
    return Fl(e, t, o);
  },
  addKeyboardShortcuts() {
    const e = {
      Enter: () => this.editor.commands.splitListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
    return this.options.nested ? {
      ...e,
      Tab: () => this.editor.commands.sinkListItem(this.name)
    } : e;
  },
  addNodeView() {
    return ({ node: e, HTMLAttributes: t, getPos: n, editor: s }) => {
      const o = document.createElement("li"), r = document.createElement("label"), i = document.createElement("span"), l = document.createElement("input"), a = document.createElement("div"), f = (c) => {
        var p, m;
        l.ariaLabel = ((m = (p = this.options.a11y) == null ? void 0 : p.checkboxLabel) == null ? void 0 : m.call(p, c, l.checked)) || `Task item checkbox for ${c.textContent || "empty task item"}`;
      };
      f(e), r.contentEditable = "false", l.type = "checkbox", l.addEventListener("mousedown", (c) => c.preventDefault()), l.addEventListener("change", (c) => {
        if (!s.isEditable && !this.options.onReadOnlyChecked) {
          l.checked = !l.checked;
          return;
        }
        const { checked: p } = c.target;
        s.isEditable && typeof n == "function" && s.chain().focus(void 0, { scrollIntoView: !1 }).command(({ tr: m }) => {
          const E = n();
          if (typeof E != "number")
            return !1;
          const b = m.doc.nodeAt(E);
          return m.setNodeMarkup(E, void 0, {
            ...b?.attrs,
            checked: p
          }), !0;
        }).run(), !s.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(e, p) || (l.checked = !l.checked));
      }), Object.entries(this.options.HTMLAttributes).forEach(([c, p]) => {
        o.setAttribute(c, p);
      }), o.dataset.checked = e.attrs.checked, l.checked = e.attrs.checked, r.append(l, i), o.append(r, a), Object.entries(t).forEach(([c, p]) => {
        o.setAttribute(c, p);
      });
      let u = new Set(Object.keys(t));
      return {
        dom: o,
        contentDOM: a,
        update: (c) => {
          if (c.type !== this.type)
            return !1;
          o.dataset.checked = c.attrs.checked, l.checked = c.attrs.checked, f(c);
          const p = s.extensionManager.attributes, m = jc(c, p), E = new Set(Object.keys(m)), b = this.options.HTMLAttributes;
          return u.forEach((O) => {
            E.has(O) || (O in b ? o.setAttribute(O, b[O]) : o.removeAttribute(O));
          }), Object.entries(m).forEach(([O, D]) => {
            D == null ? O in b ? o.setAttribute(O, b[O]) : o.removeAttribute(O) : o.setAttribute(O, D);
          }), u = E, !0;
        }
      };
    };
  },
  addInputRules() {
    return [
      _n({
        find: fh,
        type: this.type,
        getAttributes: (e) => ({
          checked: e[e.length - 1] === "x"
        })
      })
    ];
  }
}), hh = je.create({
  name: "taskList",
  addOptions() {
    return {
      itemTypeName: "taskItem",
      HTMLAttributes: {}
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      {
        tag: `ul[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["ul", he(this.options.HTMLAttributes, e, { "data-type": this.name }), 0];
  },
  parseMarkdown: (e, t) => t.createNode("taskList", {}, t.parseChildren(e.items || [])),
  renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, `
`) : "",
  markdownTokenizer: {
    name: "taskList",
    level: "block",
    start(e) {
      var t;
      const n = (t = e.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)) == null ? void 0 : t.index;
      return n !== void 0 ? n : -1;
    },
    tokenize(e, t, n) {
      const s = (r) => {
        const i = ki(
          r,
          {
            itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
            extractItemData: (l) => ({
              indentLevel: l[1].length,
              mainContent: l[4],
              checked: l[3].toLowerCase() === "x"
            }),
            createToken: (l, a) => ({
              type: "taskItem",
              raw: "",
              mainContent: l.mainContent,
              indentLevel: l.indentLevel,
              checked: l.checked,
              text: l.mainContent,
              tokens: n.inlineTokens(l.mainContent),
              nestedTokens: a
            }),
            // Allow recursive nesting
            customNestedParser: s
          },
          n
        );
        return i ? [
          {
            type: "taskList",
            raw: i.raw,
            items: i.items
          }
        ] : n.blockTokens(r);
      }, o = ki(
        e,
        {
          itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
          extractItemData: (r) => ({
            indentLevel: r[1].length,
            mainContent: r[4],
            checked: r[3].toLowerCase() === "x"
          }),
          createToken: (r, i) => ({
            type: "taskItem",
            raw: "",
            mainContent: r.mainContent,
            indentLevel: r.indentLevel,
            checked: r.checked,
            text: r.mainContent,
            tokens: n.inlineTokens(r.mainContent),
            nestedTokens: i
          }),
          // Use the recursive parser for nested content
          customNestedParser: s
        },
        n
      );
      if (o)
        return {
          type: "taskList",
          raw: o.raw,
          items: o.items
        };
    }
  },
  markdownOptions: {
    indentsContent: !0
  },
  addCommands() {
    return {
      toggleTaskList: () => ({ commands: e }) => e.toggleList(this.name, this.options.itemTypeName)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-9": () => this.editor.commands.toggleTaskList()
    };
  }
});
ze.create({
  name: "listKit",
  addExtensions() {
    const e = [];
    return this.options.bulletList !== !1 && e.push(gc.configure(this.options.bulletList)), this.options.listItem !== !1 && e.push(vc.configure(this.options.listItem)), this.options.listKeymap !== !1 && e.push(wc.configure(this.options.listKeymap)), this.options.orderedList !== !1 && e.push(Nc.configure(this.options.orderedList)), this.options.taskItem !== !1 && e.push(ph.configure(this.options.taskItem)), this.options.taskList !== !1 && e.push(hh.configure(this.options.taskList)), e;
  }
});
var Dl = "&nbsp;", mh = " ", gh = je.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [{ tag: "p" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["p", he(this.options.HTMLAttributes, e), 0];
  },
  parseMarkdown: (e, t) => {
    const n = e.tokens || [];
    if (n.length === 1 && n[0].type === "image")
      return t.parseChildren([n[0]]);
    const s = t.parseInline(n);
    return s.length === 1 && s[0].type === "text" && (s[0].text === Dl || s[0].text === mh) ? t.createNode("paragraph", void 0, []) : t.createNode("paragraph", void 0, s);
  },
  renderMarkdown: (e, t) => {
    if (!e)
      return "";
    const n = Array.isArray(e.content) ? e.content : [];
    return n.length === 0 ? Dl : t.renderChildren(n);
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: e }) => e.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), vh = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, bh = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, yh = Cn.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (e) => e.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["s", he(this.options.HTMLAttributes, e), 0];
  },
  markdownTokenName: "del",
  parseMarkdown: (e, t) => t.applyMark("strike", t.parseInline(e.tokens || [])),
  renderMarkdown: (e, t) => `~~${t.renderChildren(e)}~~`,
  addCommands() {
    return {
      setStrike: () => ({ commands: e }) => e.setMark(this.name),
      toggleStrike: () => ({ commands: e }) => e.toggleMark(this.name),
      unsetStrike: () => ({ commands: e }) => e.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      xn({
        find: vh,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      ln({
        find: bh,
        type: this.type
      })
    ];
  }
}), Eh = je.create({
  name: "text",
  group: "inline",
  parseMarkdown: (e) => ({
    type: "text",
    text: e.text || ""
  }),
  renderMarkdown: (e) => e.text || ""
}), _h = Cn.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (e) => e.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["u", he(this.options.HTMLAttributes, e), 0];
  },
  parseMarkdown(e, t) {
    return t.applyMark(this.name || "underline", t.parseInline(e.tokens || []));
  },
  renderMarkdown(e, t) {
    return `++${t.renderChildren(e)}++`;
  },
  markdownTokenizer: {
    name: "underline",
    level: "inline",
    start(e) {
      return e.indexOf("++");
    },
    tokenize(e, t, n) {
      const o = /^(\+\+)([\s\S]+?)(\+\+)/.exec(e);
      if (!o)
        return;
      const r = o[2].trim();
      return {
        type: "underline",
        raw: o[0],
        text: r,
        tokens: n.inlineTokens(r)
      };
    }
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: e }) => e.setMark(this.name),
      toggleUnderline: () => ({ commands: e }) => e.toggleMark(this.name),
      unsetUnderline: () => ({ commands: e }) => e.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
});
function xh(e = {}) {
  return new He({
    view(t) {
      return new wh(t, e);
    }
  });
}
class wh {
  constructor(t, n) {
    var s;
    this.editorView = t, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (s = n.width) !== null && s !== void 0 ? s : 1, this.color = n.color === !1 ? void 0 : n.color || "black", this.class = n.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((o) => {
      let r = (i) => {
        this[o](i);
      };
      return t.dom.addEventListener(o, r), { name: o, handler: r };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: t, handler: n }) => this.editorView.dom.removeEventListener(t, n));
  }
  update(t, n) {
    this.cursorPos != null && n.doc != t.state.doc && (this.cursorPos > t.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(t) {
    t != this.cursorPos && (this.cursorPos = t, t == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let t = this.editorView.state.doc.resolve(this.cursorPos), n = !t.parent.inlineContent, s, o = this.editorView.dom, r = o.getBoundingClientRect(), i = r.width / o.offsetWidth, l = r.height / o.offsetHeight;
    if (n) {
      let c = t.nodeBefore, p = t.nodeAfter;
      if (c || p) {
        let m = this.editorView.nodeDOM(this.cursorPos - (c ? c.nodeSize : 0));
        if (m) {
          let E = m.getBoundingClientRect(), b = c ? E.bottom : E.top;
          c && p && (b = (b + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
          let O = this.width / 2 * l;
          s = { left: E.left, right: E.right, top: b - O, bottom: b + O };
        }
      }
    }
    if (!s) {
      let c = this.editorView.coordsAtPos(this.cursorPos), p = this.width / 2 * i;
      s = { left: c.left - p, right: c.left + p, top: c.top, bottom: c.bottom };
    }
    let a = this.editorView.dom.offsetParent;
    this.element || (this.element = a.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", n), this.element.classList.toggle("prosemirror-dropcursor-inline", !n);
    let f, u;
    if (!a || a == document.body && getComputedStyle(a).position == "static")
      f = -pageXOffset, u = -pageYOffset;
    else {
      let c = a.getBoundingClientRect(), p = c.width / a.offsetWidth, m = c.height / a.offsetHeight;
      f = c.left - a.scrollLeft * p, u = c.top - a.scrollTop * m;
    }
    this.element.style.left = (s.left - f) / i + "px", this.element.style.top = (s.top - u) / l + "px", this.element.style.width = (s.right - s.left) / i + "px", this.element.style.height = (s.bottom - s.top) / l + "px";
  }
  scheduleRemoval(t) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), t);
  }
  dragover(t) {
    if (!this.editorView.editable)
      return;
    let n = this.editorView.posAtCoords({ left: t.clientX, top: t.clientY }), s = n && n.inside >= 0 && this.editorView.state.doc.nodeAt(n.inside), o = s && s.type.spec.disableDropCursor, r = typeof o == "function" ? o(this.editorView, n, t) : o;
    if (n && !r) {
      let i = n.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = Uc(this.editorView.state.doc, i, this.editorView.dragging.slice);
        l != null && (i = l);
      }
      this.setCursor(i), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(t) {
    this.editorView.dom.contains(t.relatedTarget) || this.setCursor(null);
  }
}
class ae extends es {
  /**
  Create a gap cursor.
  */
  constructor(t) {
    super(t, t);
  }
  map(t, n) {
    let s = t.resolve(n.map(this.head));
    return ae.valid(s) ? new ae(s) : es.near(s);
  }
  content() {
    return Kl.empty;
  }
  eq(t) {
    return t instanceof ae && t.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(t, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new ae(t.resolve(n.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new bi(this.anchor);
  }
  /**
  @internal
  */
  static valid(t) {
    let n = t.parent;
    if (n.isTextblock || !kh(t) || !Nh(t))
      return !1;
    let s = n.type.spec.allowGapCursor;
    if (s != null)
      return s;
    let o = n.contentMatchAt(t.index()).defaultType;
    return o && o.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(t, n, s = !1) {
    e: for (; ; ) {
      if (!s && ae.valid(t))
        return t;
      let o = t.pos, r = null;
      for (let i = t.depth; ; i--) {
        let l = t.node(i);
        if (n > 0 ? t.indexAfter(i) < l.childCount : t.index(i) > 0) {
          r = l.child(n > 0 ? t.indexAfter(i) : t.index(i) - 1);
          break;
        } else if (i == 0)
          return null;
        o += n;
        let a = t.doc.resolve(o);
        if (ae.valid(a))
          return a;
      }
      for (; ; ) {
        let i = n > 0 ? r.firstChild : r.lastChild;
        if (!i) {
          if (r.isAtom && !r.isText && !Vr.isSelectable(r)) {
            t = t.doc.resolve(o + r.nodeSize * n), s = !1;
            continue e;
          }
          break;
        }
        r = i, o += n;
        let l = t.doc.resolve(o);
        if (ae.valid(l))
          return l;
      }
      return null;
    }
  }
}
ae.prototype.visible = !1;
ae.findFrom = ae.findGapCursorFrom;
es.jsonID("gapcursor", ae);
class bi {
  constructor(t) {
    this.pos = t;
  }
  map(t) {
    return new bi(t.map(this.pos));
  }
  resolve(t) {
    let n = t.resolve(this.pos);
    return ae.valid(n) ? new ae(n) : es.near(n);
  }
}
function Cc(e) {
  return e.isAtom || e.spec.isolating || e.spec.createGapCursor;
}
function kh(e) {
  for (let t = e.depth; t >= 0; t--) {
    let n = e.index(t), s = e.node(t);
    if (n == 0) {
      if (s.type.spec.isolating)
        return !0;
      continue;
    }
    for (let o = s.child(n - 1); ; o = o.lastChild) {
      if (o.childCount == 0 && !o.inlineContent || Cc(o.type))
        return !0;
      if (o.inlineContent)
        return !1;
    }
  }
  return !0;
}
function Nh(e) {
  for (let t = e.depth; t >= 0; t--) {
    let n = e.indexAfter(t), s = e.node(t);
    if (n == s.childCount) {
      if (s.type.spec.isolating)
        return !0;
      continue;
    }
    for (let o = s.child(n); ; o = o.firstChild) {
      if (o.childCount == 0 && !o.inlineContent || Cc(o.type))
        return !0;
      if (o.inlineContent)
        return !1;
    }
  }
  return !0;
}
function Ch() {
  return new He({
    props: {
      decorations: Sh,
      createSelectionBetween(e, t, n) {
        return t.pos == n.pos && ae.valid(n) ? new ae(n) : null;
      },
      handleClick: Oh,
      handleKeyDown: Th,
      handleDOMEvents: { beforeinput: Ah }
    }
  });
}
const Th = Kc({
  ArrowLeft: Ns("horiz", -1),
  ArrowRight: Ns("horiz", 1),
  ArrowUp: Ns("vert", -1),
  ArrowDown: Ns("vert", 1)
});
function Ns(e, t) {
  const n = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
  return function(s, o, r) {
    let i = s.selection, l = t > 0 ? i.$to : i.$from, a = i.empty;
    if (i instanceof en) {
      if (!r.endOfTextblock(n) || l.depth == 0)
        return !1;
      a = !1, l = s.doc.resolve(t > 0 ? l.after() : l.before());
    }
    let f = ae.findGapCursorFrom(l, t, a);
    return f ? (o && o(s.tr.setSelection(new ae(f))), !0) : !1;
  };
}
function Oh(e, t, n) {
  if (!e || !e.editable)
    return !1;
  let s = e.state.doc.resolve(t);
  if (!ae.valid(s))
    return !1;
  let o = e.posAtCoords({ left: n.clientX, top: n.clientY });
  return o && o.inside > -1 && Vr.isSelectable(e.state.doc.nodeAt(o.inside)) ? !1 : (e.dispatch(e.state.tr.setSelection(new ae(s))), !0);
}
function Ah(e, t) {
  if (t.inputType != "insertCompositionText" || !(e.state.selection instanceof ae))
    return !1;
  let { $from: n } = e.state.selection, s = n.parent.contentMatchAt(n.index()).findWrapping(e.state.schema.nodes.text);
  if (!s)
    return !1;
  let o = Ni.empty;
  for (let i = s.length - 1; i >= 0; i--)
    o = Ni.from(s[i].createAndFill(null, o));
  let r = e.state.tr.replace(n.pos, n.pos, new Kl(o, 0, 0));
  return r.setSelection(en.near(r.doc.resolve(n.pos + 1))), e.dispatch(r), !1;
}
function Sh(e) {
  if (!(e.selection instanceof ae))
    return null;
  let t = document.createElement("div");
  return t.className = "ProseMirror-gapcursor", ts.create(e.doc, [To.widget(e.selection.head, t, { key: "gapcursor" })]);
}
var Co = 200, Ee = function() {
};
Ee.prototype.append = function(t) {
  return t.length ? (t = Ee.from(t), !this.length && t || t.length < Co && this.leafAppend(t) || this.length < Co && t.leafPrepend(this) || this.appendInner(t)) : this;
};
Ee.prototype.prepend = function(t) {
  return t.length ? Ee.from(t).append(this) : this;
};
Ee.prototype.appendInner = function(t) {
  return new Dh(this, t);
};
Ee.prototype.slice = function(t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = this.length), t >= n ? Ee.empty : this.sliceInner(Math.max(0, t), Math.min(this.length, n));
};
Ee.prototype.get = function(t) {
  if (!(t < 0 || t >= this.length))
    return this.getInner(t);
};
Ee.prototype.forEach = function(t, n, s) {
  n === void 0 && (n = 0), s === void 0 && (s = this.length), n <= s ? this.forEachInner(t, n, s, 0) : this.forEachInvertedInner(t, n, s, 0);
};
Ee.prototype.map = function(t, n, s) {
  n === void 0 && (n = 0), s === void 0 && (s = this.length);
  var o = [];
  return this.forEach(function(r, i) {
    return o.push(t(r, i));
  }, n, s), o;
};
Ee.from = function(t) {
  return t instanceof Ee ? t : t && t.length ? new Tc(t) : Ee.empty;
};
var Tc = /* @__PURE__ */ (function(e) {
  function t(s) {
    e.call(this), this.values = s;
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return t.prototype.flatten = function() {
    return this.values;
  }, t.prototype.sliceInner = function(o, r) {
    return o == 0 && r == this.length ? this : new t(this.values.slice(o, r));
  }, t.prototype.getInner = function(o) {
    return this.values[o];
  }, t.prototype.forEachInner = function(o, r, i, l) {
    for (var a = r; a < i; a++)
      if (o(this.values[a], l + a) === !1)
        return !1;
  }, t.prototype.forEachInvertedInner = function(o, r, i, l) {
    for (var a = r - 1; a >= i; a--)
      if (o(this.values[a], l + a) === !1)
        return !1;
  }, t.prototype.leafAppend = function(o) {
    if (this.length + o.length <= Co)
      return new t(this.values.concat(o.flatten()));
  }, t.prototype.leafPrepend = function(o) {
    if (this.length + o.length <= Co)
      return new t(o.flatten().concat(this.values));
  }, n.length.get = function() {
    return this.values.length;
  }, n.depth.get = function() {
    return 0;
  }, Object.defineProperties(t.prototype, n), t;
})(Ee);
Ee.empty = new Tc([]);
var Dh = /* @__PURE__ */ (function(e) {
  function t(n, s) {
    e.call(this), this.left = n, this.right = s, this.length = n.length + s.length, this.depth = Math.max(n.depth, s.depth) + 1;
  }
  return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, t.prototype.getInner = function(s) {
    return s < this.left.length ? this.left.get(s) : this.right.get(s - this.left.length);
  }, t.prototype.forEachInner = function(s, o, r, i) {
    var l = this.left.length;
    if (o < l && this.left.forEachInner(s, o, Math.min(r, l), i) === !1 || r > l && this.right.forEachInner(s, Math.max(o - l, 0), Math.min(this.length, r) - l, i + l) === !1)
      return !1;
  }, t.prototype.forEachInvertedInner = function(s, o, r, i) {
    var l = this.left.length;
    if (o > l && this.right.forEachInvertedInner(s, o - l, Math.max(r, l) - l, i + l) === !1 || r < l && this.left.forEachInvertedInner(s, Math.min(o, l), r, i) === !1)
      return !1;
  }, t.prototype.sliceInner = function(s, o) {
    if (s == 0 && o == this.length)
      return this;
    var r = this.left.length;
    return o <= r ? this.left.slice(s, o) : s >= r ? this.right.slice(s - r, o - r) : this.left.slice(s, r).append(this.right.slice(0, o - r));
  }, t.prototype.leafAppend = function(s) {
    var o = this.right.leafAppend(s);
    if (o)
      return new t(this.left, o);
  }, t.prototype.leafPrepend = function(s) {
    var o = this.left.leafPrepend(s);
    if (o)
      return new t(o, this.right);
  }, t.prototype.appendInner = function(s) {
    return this.left.depth >= Math.max(this.right.depth, s.depth) + 1 ? new t(this.left, new t(this.right, s)) : new t(this, s);
  }, t;
})(Ee);
const Lh = 500;
class Ze {
  constructor(t, n) {
    this.items = t, this.eventCount = n;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(t, n) {
    if (this.eventCount == 0)
      return null;
    let s = this.items.length;
    for (; ; s--)
      if (this.items.get(s - 1).selection) {
        --s;
        break;
      }
    let o, r;
    n && (o = this.remapping(s, this.items.length), r = o.maps.length);
    let i = t.tr, l, a, f = [], u = [];
    return this.items.forEach((c, p) => {
      if (!c.step) {
        o || (o = this.remapping(s, p + 1), r = o.maps.length), r--, u.push(c);
        return;
      }
      if (o) {
        u.push(new ht(c.map));
        let m = c.step.map(o.slice(r)), E;
        m && i.maybeStep(m).doc && (E = i.mapping.maps[i.mapping.maps.length - 1], f.push(new ht(E, void 0, void 0, f.length + u.length))), r--, E && o.appendMap(E, r);
      } else
        i.maybeStep(c.step);
      if (c.selection)
        return l = o ? c.selection.map(o.slice(r)) : c.selection, a = new Ze(this.items.slice(0, s).append(u.reverse().concat(f)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: i, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(t, n, s, o) {
    let r = [], i = this.eventCount, l = this.items, a = !o && l.length ? l.get(l.length - 1) : null;
    for (let u = 0; u < t.steps.length; u++) {
      let c = t.steps[u].invert(t.docs[u]), p = new ht(t.mapping.maps[u], c, n), m;
      (m = a && a.merge(p)) && (p = m, u ? r.pop() : l = l.slice(0, l.length - 1)), r.push(p), n && (i++, n = void 0), o || (a = p);
    }
    let f = i - s.depth;
    return f > Ih && (l = Mh(l, f), i -= f), new Ze(l.append(r), i);
  }
  remapping(t, n) {
    let s = new Wc();
    return this.items.forEach((o, r) => {
      let i = o.mirrorOffset != null && r - o.mirrorOffset >= t ? s.maps.length - o.mirrorOffset : void 0;
      s.appendMap(o.map, i);
    }, t, n), s;
  }
  addMaps(t) {
    return this.eventCount == 0 ? this : new Ze(this.items.append(t.map((n) => new ht(n))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(t, n) {
    if (!this.eventCount)
      return this;
    let s = [], o = Math.max(0, this.items.length - n), r = t.mapping, i = t.steps.length, l = this.eventCount;
    this.items.forEach((p) => {
      p.selection && l--;
    }, o);
    let a = n;
    this.items.forEach((p) => {
      let m = r.getMirror(--a);
      if (m == null)
        return;
      i = Math.min(i, m);
      let E = r.maps[m];
      if (p.step) {
        let b = t.steps[m].invert(t.docs[m]), O = p.selection && p.selection.map(r.slice(a + 1, m));
        O && l++, s.push(new ht(E, b, O));
      } else
        s.push(new ht(E));
    }, o);
    let f = [];
    for (let p = n; p < i; p++)
      f.push(new ht(r.maps[p]));
    let u = this.items.slice(0, o).append(f).append(s), c = new Ze(u, l);
    return c.emptyItemCount() > Lh && (c = c.compress(this.items.length - s.length)), c;
  }
  emptyItemCount() {
    let t = 0;
    return this.items.forEach((n) => {
      n.step || t++;
    }), t;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(t = this.items.length) {
    let n = this.remapping(0, t), s = n.maps.length, o = [], r = 0;
    return this.items.forEach((i, l) => {
      if (l >= t)
        o.push(i), i.selection && r++;
      else if (i.step) {
        let a = i.step.map(n.slice(s)), f = a && a.getMap();
        if (s--, f && n.appendMap(f, s), a) {
          let u = i.selection && i.selection.map(n.slice(s));
          u && r++;
          let c = new ht(f.invert(), a, u), p, m = o.length - 1;
          (p = o.length && o[m].merge(c)) ? o[m] = p : o.push(c);
        }
      } else i.map && s--;
    }, this.items.length, 0), new Ze(Ee.from(o.reverse()), r);
  }
}
Ze.empty = new Ze(Ee.empty, 0);
function Mh(e, t) {
  let n;
  return e.forEach((s, o) => {
    if (s.selection && t-- == 0)
      return n = o, !1;
  }), e.slice(n);
}
class ht {
  constructor(t, n, s, o) {
    this.map = t, this.step = n, this.selection = s, this.mirrorOffset = o;
  }
  merge(t) {
    if (this.step && t.step && !t.selection) {
      let n = t.step.merge(this.step);
      if (n)
        return new ht(n.getMap().invert(), n, this.selection);
    }
  }
}
class jt {
  constructor(t, n, s, o, r) {
    this.done = t, this.undone = n, this.prevRanges = s, this.prevTime = o, this.prevComposition = r;
  }
}
const Ih = 20;
function Ph(e, t, n, s) {
  let o = n.getMeta(rn), r;
  if (o)
    return o.historyState;
  n.getMeta(Hh) && (e = new jt(e.done, e.undone, null, 0, -1));
  let i = n.getMeta("appendedTransaction");
  if (n.steps.length == 0)
    return e;
  if (i && i.getMeta(rn))
    return i.getMeta(rn).redo ? new jt(e.done.addTransform(n, void 0, s, Ps(t)), e.undone, Ll(n.mapping.maps), e.prevTime, e.prevComposition) : new jt(e.done, e.undone.addTransform(n, void 0, s, Ps(t)), null, e.prevTime, e.prevComposition);
  if (n.getMeta("addToHistory") !== !1 && !(i && i.getMeta("addToHistory") === !1)) {
    let l = n.getMeta("composition"), a = e.prevTime == 0 || !i && e.prevComposition != l && (e.prevTime < (n.time || 0) - s.newGroupDelay || !Rh(n, e.prevRanges)), f = i ? lr(e.prevRanges, n.mapping) : Ll(n.mapping.maps);
    return new jt(e.done.addTransform(n, a ? t.selection.getBookmark() : void 0, s, Ps(t)), Ze.empty, f, n.time, l ?? e.prevComposition);
  } else return (r = n.getMeta("rebased")) ? new jt(e.done.rebased(n, r), e.undone.rebased(n, r), lr(e.prevRanges, n.mapping), e.prevTime, e.prevComposition) : new jt(e.done.addMaps(n.mapping.maps), e.undone.addMaps(n.mapping.maps), lr(e.prevRanges, n.mapping), e.prevTime, e.prevComposition);
}
function Rh(e, t) {
  if (!t)
    return !1;
  if (!e.docChanged)
    return !0;
  let n = !1;
  return e.mapping.maps[0].forEach((s, o) => {
    for (let r = 0; r < t.length; r += 2)
      s <= t[r + 1] && o >= t[r] && (n = !0);
  }), n;
}
function Ll(e) {
  let t = [];
  for (let n = e.length - 1; n >= 0 && t.length == 0; n--)
    e[n].forEach((s, o, r, i) => t.push(r, i));
  return t;
}
function lr(e, t) {
  if (!e)
    return null;
  let n = [];
  for (let s = 0; s < e.length; s += 2) {
    let o = t.map(e[s], 1), r = t.map(e[s + 1], -1);
    o <= r && n.push(o, r);
  }
  return n;
}
function Vh(e, t, n) {
  let s = Ps(t), o = rn.get(t).spec.config, r = (n ? e.undone : e.done).popEvent(t, s);
  if (!r)
    return null;
  let i = r.selection.resolve(r.transform.doc), l = (n ? e.done : e.undone).addTransform(r.transform, t.selection.getBookmark(), o, s), a = new jt(n ? l : r.remaining, n ? r.remaining : l, null, 0, -1);
  return r.transform.setSelection(i).setMeta(rn, { redo: n, historyState: a });
}
let ar = !1, Ml = null;
function Ps(e) {
  let t = e.plugins;
  if (Ml != t) {
    ar = !1, Ml = t;
    for (let n = 0; n < t.length; n++)
      if (t[n].spec.historyPreserveItems) {
        ar = !0;
        break;
      }
  }
  return ar;
}
const rn = new We("history"), Hh = new We("closeHistory");
function jh(e = {}) {
  return e = {
    depth: e.depth || 100,
    newGroupDelay: e.newGroupDelay || 500
  }, new He({
    key: rn,
    state: {
      init() {
        return new jt(Ze.empty, Ze.empty, null, 0, -1);
      },
      apply(t, n, s) {
        return Ph(n, s, t, e);
      }
    },
    config: e,
    props: {
      handleDOMEvents: {
        beforeinput(t, n) {
          let s = n.inputType, o = s == "historyUndo" ? Ac : s == "historyRedo" ? Sc : null;
          return !o || !t.editable ? !1 : (n.preventDefault(), o(t.state, t.dispatch));
        }
      }
    }
  });
}
function Oc(e, t) {
  return (n, s) => {
    let o = rn.getState(n);
    if (!o || (e ? o.undone : o.done).eventCount == 0)
      return !1;
    if (s) {
      let r = Vh(o, n, e);
      r && s(t ? r.scrollIntoView() : r);
    }
    return !0;
  };
}
const Ac = Oc(!1, !0), Sc = Oc(!0, !0);
ze.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize",
      textCounter: (e) => e.length,
      wordCounter: (e) => e.split(" ").filter((t) => t !== "").length
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = (e) => {
      const t = e?.node || this.editor.state.doc;
      if ((e?.mode || this.options.mode) === "textSize") {
        const s = t.textBetween(0, t.content.size, void 0, " ");
        return this.options.textCounter(s);
      }
      return t.nodeSize;
    }, this.storage.words = (e) => {
      const t = e?.node || this.editor.state.doc, n = t.textBetween(0, t.content.size, " ", " ");
      return this.options.wordCounter(n);
    };
  },
  addProseMirrorPlugins() {
    let e = !1;
    return [
      new He({
        key: new We("characterCount"),
        appendTransaction: (t, n, s) => {
          if (e)
            return;
          const o = this.options.limit;
          if (o == null || o === 0) {
            e = !0;
            return;
          }
          const r = this.storage.characters({ node: s.doc });
          if (r > o) {
            const i = r - o, l = 0, a = i;
            console.warn(
              `[CharacterCount] Initial content exceeded limit of ${o} characters. Content was automatically trimmed.`
            );
            const f = s.tr.deleteRange(l, a);
            return e = !0, f;
          }
          e = !0;
        },
        filterTransaction: (t, n) => {
          const s = this.options.limit;
          if (!t.docChanged || s === 0 || s === null || s === void 0)
            return !0;
          const o = this.storage.characters({ node: n.doc }), r = this.storage.characters({ node: t.doc });
          if (r <= s || o > s && r > s && r <= o)
            return !0;
          if (o > s && r > s && r > o || !t.getMeta("paste"))
            return !1;
          const l = t.selection.$head.pos, a = r - s, f = l - a, u = l;
          return t.deleteRange(f, u), !(this.storage.characters({ node: t.doc }) > s);
        }
      })
    ];
  }
});
var $h = ze.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [xh(this.options)];
  }
});
ze.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [
      new He({
        key: new We("focus"),
        props: {
          decorations: ({ doc: e, selection: t }) => {
            const { isEditable: n, isFocused: s } = this.editor, { anchor: o } = t, r = [];
            if (!n || !s)
              return ts.create(e, []);
            let i = 0;
            this.options.mode === "deepest" && e.descendants((a, f) => {
              if (a.isText)
                return;
              if (!(o >= f && o <= f + a.nodeSize - 1))
                return !1;
              i += 1;
            });
            let l = 0;
            return e.descendants((a, f) => {
              if (a.isText || !(o >= f && o <= f + a.nodeSize - 1))
                return !1;
              if (l += 1, this.options.mode === "deepest" && i - l > 0 || this.options.mode === "shallowest" && l > 1)
                return this.options.mode === "deepest";
              r.push(
                To.node(f, f + a.nodeSize, {
                  class: this.options.className
                })
              );
            }), ts.create(e, r);
          }
        }
      })
    ];
  }
});
var Bh = ze.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [Ch()];
  },
  extendNodeSchema(e) {
    var t;
    const n = {
      name: e.name,
      options: e.options,
      storage: e.storage
    };
    return {
      allowGapCursor: (t = zc(qc(e, "allowGapCursor", n))) != null ? t : null
    };
  }
}), Il = "placeholder";
function Fh(e) {
  return e.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "").replace(/^[0-9-]+/, "").replace(/^-+/, "").toLowerCase();
}
var Uh = ze.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      dataAttribute: Il,
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    const e = this.options.dataAttribute ? `data-${Fh(this.options.dataAttribute)}` : `data-${Il}`;
    return [
      new He({
        key: new We("placeholder"),
        props: {
          decorations: ({ doc: t, selection: n }) => {
            const s = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: o } = n, r = [];
            if (!s)
              return null;
            const i = this.editor.isEmpty;
            return t.descendants((l, a) => {
              const f = o >= a && o <= a + l.nodeSize, u = !l.isLeaf && Gc(l);
              if ((f || !this.options.showOnlyCurrent) && u) {
                const c = [this.options.emptyNodeClass];
                i && c.push(this.options.emptyEditorClass);
                const p = To.node(a, a + l.nodeSize, {
                  class: c.join(" "),
                  [e]: typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: l,
                    pos: a,
                    hasAnchor: f
                  }) : this.options.placeholder
                });
                r.push(p);
              }
              return this.options.includeChildren;
            }), ts.create(t, r);
          }
        }
      })
    ];
  }
});
ze.create({
  name: "selection",
  addOptions() {
    return {
      className: "selection"
    };
  },
  addProseMirrorPlugins() {
    const { editor: e, options: t } = this;
    return [
      new He({
        key: new We("selection"),
        props: {
          decorations(n) {
            return n.selection.empty || e.isFocused || !e.isEditable || Bl(n.selection) || e.view.dragging ? null : ts.create(n.doc, [
              To.inline(n.selection.from, n.selection.to, {
                class: t.className
              })
            ]);
          }
        }
      })
    ];
  }
});
function Pl({ types: e, node: t }) {
  return t && Array.isArray(e) && e.includes(t.type) || t?.type === e;
}
var Kh = ze.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: void 0,
      notAfter: []
    };
  },
  addProseMirrorPlugins() {
    var e;
    const t = new We(this.name), n = this.options.node || ((e = this.editor.schema.topNodeType.contentMatch.defaultType) == null ? void 0 : e.name) || "paragraph", s = Object.entries(this.editor.schema.nodes).map(([, o]) => o).filter((o) => (this.options.notAfter || []).concat(n).includes(o.name));
    return [
      new He({
        key: t,
        appendTransaction: (o, r, i) => {
          const { doc: l, tr: a, schema: f } = i, u = t.getState(i), c = l.content.size, p = f.nodes[n];
          if (u)
            return a.insert(c, p.create());
        },
        state: {
          init: (o, r) => {
            const i = r.tr.doc.lastChild;
            return !Pl({ node: i, types: s });
          },
          apply: (o, r) => {
            if (!o.docChanged || o.getMeta("__uniqueIDTransaction"))
              return r;
            const i = o.doc.lastChild;
            return !Pl({ node: i, types: s });
          }
        }
      })
    ];
  }
}), Wh = ze.create({
  name: "undoRedo",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: e, dispatch: t }) => Ac(e, t),
      redo: () => ({ state: e, dispatch: t }) => Sc(e, t)
    };
  },
  addProseMirrorPlugins() {
    return [jh(this.options)];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), zh = ze.create({
  name: "starterKit",
  addExtensions() {
    var e, t, n, s;
    const o = [];
    return this.options.bold !== !1 && o.push(vp.configure(this.options.bold)), this.options.blockquote !== !1 && o.push(fp.configure(this.options.blockquote)), this.options.bulletList !== !1 && o.push(gc.configure(this.options.bulletList)), this.options.code !== !1 && o.push(Ep.configure(this.options.code)), this.options.codeBlock !== !1 && o.push(wp.configure(this.options.codeBlock)), this.options.document !== !1 && o.push(kp.configure(this.options.document)), this.options.dropcursor !== !1 && o.push($h.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && o.push(Bh.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && o.push(Np.configure(this.options.hardBreak)), this.options.heading !== !1 && o.push(Cp.configure(this.options.heading)), this.options.undoRedo !== !1 && o.push(Wh.configure(this.options.undoRedo)), this.options.horizontalRule !== !1 && o.push(Tp.configure(this.options.horizontalRule)), this.options.italic !== !1 && o.push(Lp.configure(this.options.italic)), this.options.listItem !== !1 && o.push(vc.configure(this.options.listItem)), this.options.listKeymap !== !1 && o.push(wc.configure((e = this.options) == null ? void 0 : e.listKeymap)), this.options.link !== !1 && o.push(mc.configure((t = this.options) == null ? void 0 : t.link)), this.options.orderedList !== !1 && o.push(Nc.configure(this.options.orderedList)), this.options.paragraph !== !1 && o.push(gh.configure(this.options.paragraph)), this.options.strike !== !1 && o.push(yh.configure(this.options.strike)), this.options.text !== !1 && o.push(Eh.configure(this.options.text)), this.options.underline !== !1 && o.push(_h.configure((n = this.options) == null ? void 0 : n.underline)), this.options.trailingNode !== !1 && o.push(Kh.configure((s = this.options) == null ? void 0 : s.trailingNode)), o;
  }
}), Rl = zh, qh = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, Gh = je.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {},
      resize: !1
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      },
      width: {
        default: null
      },
      height: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["img", he(this.options.HTMLAttributes, e)];
  },
  parseMarkdown: (e, t) => t.createNode("image", {
    src: e.href,
    title: e.title,
    alt: e.text
  }),
  renderMarkdown: (e) => {
    var t, n, s, o, r, i;
    const l = (n = (t = e.attrs) == null ? void 0 : t.src) != null ? n : "", a = (o = (s = e.attrs) == null ? void 0 : s.alt) != null ? o : "", f = (i = (r = e.attrs) == null ? void 0 : r.title) != null ? i : "";
    return f ? `![${a}](${l} "${f}")` : `![${a}](${l})`;
  },
  addNodeView() {
    if (!this.options.resize || !this.options.resize.enabled || typeof document > "u")
      return null;
    const { directions: e, minWidth: t, minHeight: n, alwaysPreserveAspectRatio: s } = this.options.resize;
    return ({ node: o, getPos: r, HTMLAttributes: i, editor: l }) => {
      const a = document.createElement("img");
      Object.entries(i).forEach(([c, p]) => {
        if (p != null)
          switch (c) {
            case "width":
            case "height":
              break;
            default:
              a.setAttribute(c, p);
              break;
          }
      }), a.src = i.src;
      const f = new Jc({
        element: a,
        editor: l,
        node: o,
        getPos: r,
        onResize: (c, p) => {
          a.style.width = `${c}px`, a.style.height = `${p}px`;
        },
        onCommit: (c, p) => {
          const m = r();
          m !== void 0 && this.editor.chain().setNodeSelection(m).updateAttributes(this.name, {
            width: c,
            height: p
          }).run();
        },
        onUpdate: (c, p, m) => c.type === o.type,
        options: {
          directions: e,
          min: {
            width: t,
            height: n
          },
          preserveAspectRatio: s === !0
        }
      }), u = f.dom;
      return u.style.visibility = "hidden", u.style.pointerEvents = "none", a.onload = () => {
        u.style.visibility = "", u.style.pointerEvents = "";
      }, f;
    };
  },
  addCommands() {
    return {
      setImage: (e) => ({ commands: t }) => t.insertContent({
        type: this.name,
        attrs: e
      })
    };
  },
  addInputRules() {
    return [
      $l({
        find: qh,
        type: this.type,
        getAttributes: (e) => {
          const [, , t, n, s] = e;
          return { src: n, alt: t, title: s };
        }
      })
    ];
  }
}), Vl = Gh, Hl = Uh;
const Dc = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Jh = {
  __name: "TipTapEditor",
  props: {
    modelValue: {
      type: Object,
      default: () => ({
        type: "doc",
        content: [{ type: "paragraph", content: [] }]
      })
    }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: n }) {
    t();
    const s = e, o = n, r = /* @__PURE__ */ fe(!1);
    async function i(m, E) {
      const b = window.ccApiClient;
      if (!b) {
        console.error("[TipTap] No API client available");
        return;
      }
      r.value = !0;
      try {
        const O = await b.uploadImage(m);
        E.chain().focus().setImage({ src: O }).run();
      } catch (O) {
        console.error("[TipTap] Image upload failed:", O), alert("Image upload failed: " + O.message);
      } finally {
        r.value = !1;
      }
    }
    const l = ze.create({
      name: "imageUploadHandler",
      addProseMirrorPlugins() {
        const m = this.editor;
        return [
          new He({
            key: new We("imageUploadHandler"),
            props: {
              handlePaste(E, b) {
                const O = b.clipboardData?.items;
                if (!O) return !1;
                for (const D of O)
                  if (D.type.startsWith("image/")) {
                    b.preventDefault();
                    const M = D.getAsFile();
                    return M && i(M, m), !0;
                  }
                return !1;
              },
              handleDrop(E, b) {
                const O = b.dataTransfer?.files;
                if (!O || O.length === 0) return !1;
                for (const D of O)
                  if (D.type.startsWith("image/"))
                    return b.preventDefault(), i(D, m), !0;
                return !1;
              }
            }
          })
        ];
      }
    }), a = vl({
      extensions: [
        Rl,
        Vl.configure({ inline: !1, allowBase64: !1 }),
        Nl.configure({ openOnClick: !1 }),
        Hl.configure({ placeholder: "Start writing..." }),
        Ci,
        l
      ],
      content: s.modelValue,
      onUpdate({ editor: m }) {
        o("update:modelValue", m.getJSON());
      }
    });
    Kn(
      () => s.modelValue,
      (m) => {
        if (!a.value) return;
        const E = JSON.stringify(a.value.getJSON()), b = JSON.stringify(m);
        E !== b && a.value.commands.setContent(m, !1);
      }
    );
    function f() {
      const m = prompt("Enter URL:");
      m && a.value.chain().focus().setLink({ href: m }).run();
    }
    function u() {
      const m = prompt("Enter image URL:");
      m && a.value.chain().focus().setImage({ src: m }).run();
    }
    function c() {
      const m = document.createElement("input");
      m.type = "file", m.accept = "image/*", m.onchange = (E) => {
        const b = E.target.files?.[0];
        b && i(b, a.value);
      }, m.click();
    }
    const p = { props: s, emit: o, uploading: r, handleImageUpload: i, ImageUploadHandler: l, editor: a, setLink: f, addImageByUrl: u, triggerFileUpload: c, get useEditor() {
      return vl;
    }, get EditorContent() {
      return up;
    }, get StarterKit() {
      return Rl;
    }, get Image() {
      return Vl;
    }, get Link() {
      return Nl;
    }, get Placeholder() {
      return Hl;
    }, get MarkdownPaste() {
      return Ci;
    }, watch: Kn, ref: fe, get Plugin() {
      return He;
    }, get PluginKey() {
      return We;
    }, get Extension() {
      return ze;
    } };
    return Object.defineProperty(p, "__isScriptSetup", { enumerable: !1, value: !0 }), p;
  }
}, Yh = { class: "tiptap-editor rounded-md border border-slate-700 bg-slate-800" }, Xh = {
  key: 0,
  class: "flex flex-wrap gap-1 border-b border-slate-700 p-2"
}, Qh = {
  key: 1,
  class: "flex items-center gap-2 border-b border-slate-700 bg-slate-800/80 px-3 py-2 text-xs text-amber-400"
};
function Zh(e, t, n, s, o, r) {
  return te(), se("div", Yh, [
    le(" Toolbar "),
    s.editor ? (te(), se("div", Xh, [
      g(
        "button",
        {
          type: "button",
          onClick: t[0] || (t[0] = (i) => s.editor.chain().focus().toggleBold().run()),
          class: Pe([
            "rounded px-2 py-1 text-xs font-medium",
            s.editor.isActive("bold") ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Bold"
        },
        " B ",
        2
        /* CLASS */
      ),
      g(
        "button",
        {
          type: "button",
          onClick: t[1] || (t[1] = (i) => s.editor.chain().focus().toggleItalic().run()),
          class: Pe([
            "rounded px-2 py-1 text-xs font-medium italic",
            s.editor.isActive("italic") ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Italic"
        },
        " I ",
        2
        /* CLASS */
      ),
      g(
        "button",
        {
          type: "button",
          onClick: t[2] || (t[2] = (i) => s.editor.chain().focus().toggleStrike().run()),
          class: Pe([
            "rounded px-2 py-1 text-xs font-medium line-through",
            s.editor.isActive("strike") ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Strikethrough"
        },
        " S ",
        2
        /* CLASS */
      ),
      t[9] || (t[9] = g(
        "div",
        { class: "mx-1 w-px bg-slate-600" },
        null,
        -1
        /* CACHED */
      )),
      g(
        "button",
        {
          type: "button",
          onClick: t[3] || (t[3] = (i) => s.editor.chain().focus().toggleHeading({ level: 2 }).run()),
          class: Pe([
            "rounded px-2 py-1 text-xs font-medium",
            s.editor.isActive("heading", { level: 2 }) ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Heading 2"
        },
        " H2 ",
        2
        /* CLASS */
      ),
      g(
        "button",
        {
          type: "button",
          onClick: t[4] || (t[4] = (i) => s.editor.chain().focus().toggleHeading({ level: 3 }).run()),
          class: Pe([
            "rounded px-2 py-1 text-xs font-medium",
            s.editor.isActive("heading", { level: 3 }) ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Heading 3"
        },
        " H3 ",
        2
        /* CLASS */
      ),
      t[10] || (t[10] = g(
        "div",
        { class: "mx-1 w-px bg-slate-600" },
        null,
        -1
        /* CACHED */
      )),
      g(
        "button",
        {
          type: "button",
          onClick: t[5] || (t[5] = (i) => s.editor.chain().focus().toggleBulletList().run()),
          class: Pe([
            "rounded px-2 py-1 text-xs font-medium",
            s.editor.isActive("bulletList") ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Bullet List"
        },
        " • List ",
        2
        /* CLASS */
      ),
      g(
        "button",
        {
          type: "button",
          onClick: t[6] || (t[6] = (i) => s.editor.chain().focus().toggleOrderedList().run()),
          class: Pe([
            "rounded px-2 py-1 text-xs font-medium",
            s.editor.isActive("orderedList") ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Ordered List"
        },
        " 1. List ",
        2
        /* CLASS */
      ),
      t[11] || (t[11] = g(
        "div",
        { class: "mx-1 w-px bg-slate-600" },
        null,
        -1
        /* CACHED */
      )),
      g(
        "button",
        {
          type: "button",
          onClick: t[7] || (t[7] = (i) => s.editor.chain().focus().toggleBlockquote().run()),
          class: Pe([
            "rounded px-2 py-1 text-xs font-medium",
            s.editor.isActive("blockquote") ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Blockquote"
        },
        " “ Quote ",
        2
        /* CLASS */
      ),
      g(
        "button",
        {
          type: "button",
          onClick: t[8] || (t[8] = (i) => s.editor.chain().focus().toggleCodeBlock().run()),
          class: Pe([
            "rounded px-2 py-1 text-xs font-medium",
            s.editor.isActive("codeBlock") ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Code Block"
        },
        " </> ",
        2
        /* CLASS */
      ),
      t[12] || (t[12] = g(
        "div",
        { class: "mx-1 w-px bg-slate-600" },
        null,
        -1
        /* CACHED */
      )),
      g(
        "button",
        {
          type: "button",
          onClick: s.setLink,
          class: Pe([
            "rounded px-2 py-1 text-xs font-medium",
            s.editor.isActive("link") ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Insert Link"
        },
        " Link ",
        2
        /* CLASS */
      ),
      g("button", {
        type: "button",
        onClick: s.triggerFileUpload,
        class: "rounded bg-slate-700 px-2 py-1 text-xs font-medium text-slate-300 hover:bg-slate-600",
        title: "Upload Image"
      }, " Image "),
      g("button", {
        type: "button",
        onClick: s.addImageByUrl,
        class: "rounded bg-slate-700 px-2 py-1 text-xs font-medium text-slate-300 hover:bg-slate-600",
        title: "Image from URL"
      }, " URL ")
    ])) : le("v-if", !0),
    le(" Upload indicator "),
    s.uploading ? (te(), se("div", Qh, [...t[13] || (t[13] = [
      g(
        "div",
        { class: "h-3 w-3 animate-spin rounded-full border-2 border-amber-400 border-t-transparent" },
        null,
        -1
        /* CACHED */
      ),
      Js(
        " Uploading image... ",
        -1
        /* CACHED */
      )
    ])])) : le("v-if", !0),
    le(" Editor Content "),
    Se(s.EditorContent, {
      editor: s.editor,
      class: "tiptap-content prose prose-invert max-w-none px-4 py-3"
    }, null, 8, ["editor"])
  ]);
}
const em = /* @__PURE__ */ Dc(Jh, [["render", Zh], ["__file", "/home/ubuntu/laravel-cc-blog/resources/js/components/blog/TipTapEditor.vue"]]), tm = {
  __name: "BlogAdmin",
  setup(e, { expose: t }) {
    t();
    const n = () => window.ccApiClient, s = () => window.ccTokenProvider, o = /* @__PURE__ */ fe([]), r = /* @__PURE__ */ fe([]), i = /* @__PURE__ */ fe(!1), l = /* @__PURE__ */ fe(null), a = /* @__PURE__ */ fe(!1), f = /* @__PURE__ */ fe(null), u = /* @__PURE__ */ fe(!0), c = /* @__PURE__ */ fe(!1), p = /* @__PURE__ */ fe(null), m = /* @__PURE__ */ fe(U()), E = /* @__PURE__ */ fe("email"), b = /* @__PURE__ */ fe({
      email: ""
    }), O = /* @__PURE__ */ fe(["", "", "", "", "", ""]), D = /* @__PURE__ */ fe([]), M = /* @__PURE__ */ fe(null), B = /* @__PURE__ */ fe(!1);
    Ks(async () => {
      try {
        await ee(), a.value && await j();
      } finally {
        u.value = !1;
      }
    });
    async function ee() {
      const R = s().getTokens();
      if (console.log("[Blog Admin] checkAuth - tokens:", {
        hasAccessToken: !!R?.accessToken,
        hasRefreshToken: !!R?.refreshToken
      }), R?.accessToken)
        try {
          f.value = await n().getCurrentUser(), a.value = !0, console.log(
            "[Blog Admin] Auth check passed, user:",
            f.value?.name
          );
        } catch (F) {
          console.log("[Blog Admin] Auth check failed:", F.message), a.value = !1, s().clearTokens();
        }
    }
    const L = jn(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.value.email)), z = jn(() => O.value.every((R) => R.length === 1)), me = jn(() => O.value.join(""));
    async function ue() {
      if (!L.value) {
        M.value = "Please enter a valid email address";
        return;
      }
      B.value = !0, M.value = null;
      try {
        await n().requestAuthCode(b.value.email), E.value = "code", await bn(), D.value[0]?.focus();
      } catch (R) {
        M.value = R.message || "Failed to send auth code";
      } finally {
        B.value = !1;
      }
    }
    async function de() {
      if (!z.value) {
        M.value = "Please enter the 6-digit code";
        return;
      }
      B.value = !0, M.value = null;
      try {
        await n().loginWithMagicLink(
          b.value.email,
          me.value
        ) && (await ee(), await j());
      } catch (R) {
        M.value = R.message || "Invalid code";
      } finally {
        B.value = !1;
      }
    }
    function ke(R, F) {
      R && (D.value[F] = R);
    }
    function $e(R, F) {
      const qe = F.target.value.replace(/[^0-9]/g, "");
      O.value[R] = qe, qe && R < 5 && D.value[R + 1]?.focus(), z.value && L.value && de();
    }
    function _e(R, F) {
      F.key === "Backspace" && !O.value[R] && R > 0 && D.value[R - 1]?.focus(), F.key === "ArrowLeft" && R > 0 && (F.preventDefault(), D.value[R - 1]?.focus()), F.key === "ArrowRight" && R < 5 && (F.preventDefault(), D.value[R + 1]?.focus());
    }
    function _t(R) {
      R.preventDefault();
      const qe = (R.clipboardData?.getData("text") || "").replace(/[^0-9]/g, "").slice(0, 6);
      if (qe.length > 0) {
        for (let d = 0; d < 6; d++)
          O.value[d] = qe[d] || "";
        const Ei = Math.min(qe.length - 1, 5);
        D.value[Ei]?.focus(), z.value && L.value && de();
      }
    }
    function Mt() {
      E.value = "email", O.value = ["", "", "", "", "", ""], M.value = null;
    }
    async function Ne() {
      E.value = "code", M.value = null, await bn(), D.value[0]?.focus();
    }
    function oe() {
      s().clearTokens(), a.value = !1, f.value = null, o.value = [];
    }
    async function j() {
      i.value = !0, l.value = null;
      try {
        const [R, F] = await Promise.all([
          n().listBlogPosts({ status: void 0 }),
          // All posts for admin
          n().getBlogCategories()
        ]);
        o.value = R.data || [], r.value = F || [];
      } catch (R) {
        l.value = R.message || "Failed to load data";
      } finally {
        i.value = !1;
      }
    }
    function U() {
      return {
        title: "",
        slug: "",
        content: { type: "doc", content: [{ type: "paragraph", content: [] }] },
        excerpt: "",
        status: "draft",
        category_id: null,
        is_featured: !1,
        meta_title: "",
        meta_description: "",
        canonical_url: "",
        social_title: "",
        social_description: "",
        social_image_url: "",
        answer_summary: "",
        faq_items_json: "[]"
      };
    }
    function Be(R) {
      return R.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    }
    function Sn() {
      m.value.slug || (m.value.slug = Be(m.value.title || ""));
    }
    function zt() {
      p.value = null, m.value = U(), c.value = !0;
    }
    async function It(R) {
      i.value = !0;
      try {
        const F = await n().getBlogPost(R.slug);
        p.value = F, m.value = {
          ...U(),
          title: F.title,
          slug: F.slug || "",
          content: F.content || {
            type: "doc",
            content: [{ type: "paragraph", content: [] }]
          },
          excerpt: F.excerpt || "",
          status: F.status,
          category_id: F.category?.id || null,
          is_featured: F.isFeatured,
          meta_title: F.metaTitle || "",
          meta_description: F.metaDescription || "",
          canonical_url: F.canonicalUrl || "",
          social_title: F.socialTitle || "",
          social_description: F.socialDescription || "",
          social_image_url: F.socialImageUrl || "",
          answer_summary: F.answerSummary || "",
          faq_items_json: JSON.stringify(F.faqItems || [], null, 2)
        }, c.value = !0;
      } catch (F) {
        l.value = F.message || "Failed to load post";
      } finally {
        i.value = !1;
      }
    }
    function Ye() {
      c.value = !1, p.value = null;
    }
    async function Dn() {
      i.value = !0;
      try {
        let R = [];
        if (m.value.faq_items_json?.trim() && (R = JSON.parse(m.value.faq_items_json), !Array.isArray(R)))
          throw new Error("FAQ items must be a JSON array.");
        const F = {
          ...m.value,
          faq_items: R
        };
        delete F.faq_items_json, p.value ? await n().updateBlogPost(p.value.ulid, F) : await n().createBlogPost(F), Ye(), await j();
      } catch (R) {
        l.value = R.message || "Failed to save post";
      } finally {
        i.value = !1;
      }
    }
    async function $o(R) {
      if (confirm(`Delete "${R.title}"?`)) {
        i.value = !0;
        try {
          await n().deleteBlogPost(R.ulid), await j();
        } catch (F) {
          l.value = F.message || "Failed to delete post";
        } finally {
          i.value = !1;
        }
      }
    }
    async function Bo(R) {
      i.value = !0;
      try {
        await n().publishBlogPost(R.ulid), await j();
      } catch (F) {
        l.value = F.message || "Failed to publish post";
      } finally {
        i.value = !1;
      }
    }
    const qt = { getSdk: n, getTokenProvider: s, posts: o, categories: r, loading: i, error: l, isAuthenticated: a, currentUser: f, isCheckingAuth: u, showModal: c, editingPost: p, formData: m, loginStep: E, loginForm: b, verificationCode: O, codeInputRefs: D, loginError: M, loginLoading: B, checkAuth: ee, isValidEmail: L, isCodeComplete: z, fullCode: me, handleSendAuthCode: ue, handleVerifyCode: de, setCodeInputRef: ke, handleCodeInput: $e, handleCodeKeydown: _e, handleCodePaste: _t, resetToEmail: Mt, goToCodeStep: Ne, handleLogout: oe, loadData: j, defaultFormData: U, slugify: Be, handleTitleInput: Sn, openCreateModal: zt, openEditModal: It, closeModal: Ye, savePost: Dn, deletePost: $o, publishPost: Bo, statusColors: {
      draft: "bg-slate-700 text-slate-300",
      scheduled: "bg-yellow-900/50 text-yellow-300",
      published: "bg-green-900/50 text-green-300",
      archived: "bg-red-900/50 text-red-300"
    }, ref: fe, computed: jn, onMounted: Ks, nextTick: bn, TipTapEditor: em };
    return Object.defineProperty(qt, "__isScriptSetup", { enumerable: !1, value: !0 }), qt;
  }
}, nm = {
  key: 0,
  class: "flex min-h-[400px] items-center justify-center"
}, sm = { class: "mx-auto max-w-md p-8" }, om = {
  key: 0,
  class: "text-sm text-red-400"
}, rm = ["disabled"], im = ["disabled"], lm = { class: "space-y-4" }, am = { class: "rounded-md border border-green-800 bg-green-900/30 p-3 text-sm text-green-300" }, cm = { class: "mb-4 flex justify-center gap-2" }, um = ["onUpdate:modelValue", "disabled", "onInput", "onKeydown"], dm = {
  key: 0,
  class: "mb-4 text-sm text-red-400"
}, fm = ["disabled"], pm = { class: "p-6" }, hm = { class: "mb-6 flex items-center justify-between" }, mm = { class: "text-sm text-slate-400" }, gm = {
  key: 0,
  class: "mb-4 rounded-md border border-red-800 bg-red-900/30 p-4 text-sm text-red-300"
}, vm = {
  key: 1,
  class: "py-12 text-center"
}, bm = { class: "overflow-hidden rounded-lg border border-slate-800 bg-slate-900 shadow" }, ym = { class: "min-w-full divide-y divide-slate-800" }, Em = { class: "divide-y divide-slate-800 bg-slate-900" }, _m = { class: "whitespace-nowrap px-6 py-4" }, xm = { class: "font-medium text-slate-100" }, wm = { class: "text-sm text-slate-500" }, km = { class: "whitespace-nowrap px-6 py-4" }, Nm = {
  key: 0,
  class: "ml-1 inline-flex rounded-full bg-purple-900/50 px-2 text-xs leading-5 font-semibold text-purple-300"
}, Cm = { class: "whitespace-nowrap px-6 py-4 text-slate-400" }, Tm = { class: "whitespace-nowrap px-6 py-4 text-slate-400" }, Om = { class: "whitespace-nowrap px-6 py-4 text-right text-sm font-medium" }, Am = ["onClick"], Sm = ["onClick"], Dm = ["onClick"], Lm = { key: 0 }, Mm = {
  key: 3,
  class: "fixed inset-0 z-50 flex items-center justify-center bg-black/70"
}, Im = { class: "max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg border border-slate-700 bg-slate-900 p-6 shadow-xl" }, Pm = { class: "mb-4 text-xl font-bold text-slate-100" }, Rm = { class: "grid grid-cols-2 gap-4" }, Vm = ["value"], Hm = { class: "flex items-center" }, jm = { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, $m = { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, Bm = { class: "flex justify-end gap-4 pt-4" }, Fm = ["disabled"];
function Um(e, t, n, s, o, r) {
  return te(), se(
    ye,
    null,
    [
      le(" Initial Loading State "),
      s.isCheckingAuth ? (te(), se("div", nm, [...t[16] || (t[16] = [
        g(
          "div",
          { class: "text-center" },
          [
            g("div", { class: "inline-block h-10 w-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" }),
            g("p", { class: "mt-4 text-slate-400" }, "Loading...")
          ],
          -1
          /* CACHED */
        )
      ])])) : s.isAuthenticated ? (te(), se(
        ye,
        { key: 2 },
        [
          le(" Admin Dashboard "),
          g("div", pm, [
            g("div", hm, [
              g("div", null, [
                t[22] || (t[22] = g(
                  "h1",
                  { class: "text-2xl font-bold text-slate-100" },
                  "Blog Admin",
                  -1
                  /* CACHED */
                )),
                g(
                  "p",
                  mm,
                  " Logged in as " + we(s.currentUser?.name || s.currentUser?.email),
                  1
                  /* TEXT */
                )
              ]),
              g("div", { class: "flex gap-4" }, [
                g("button", {
                  onClick: s.openCreateModal,
                  class: "rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
                }, " New Post "),
                g("button", {
                  onClick: s.handleLogout,
                  class: "rounded-md bg-slate-700 px-4 py-2 text-slate-200 hover:bg-slate-600"
                }, " Logout ")
              ])
            ]),
            le(" Error message "),
            s.error ? (te(), se(
              "div",
              gm,
              we(s.error),
              1
              /* TEXT */
            )) : le("v-if", !0),
            le(" Loading state "),
            s.loading && !s.posts.length ? (te(), se("div", vm, [...t[23] || (t[23] = [
              g(
                "div",
                { class: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" },
                null,
                -1
                /* CACHED */
              ),
              g(
                "p",
                { class: "mt-2 text-slate-400" },
                "Loading posts...",
                -1
                /* CACHED */
              )
            ])])) : (te(), se(
              ye,
              { key: 2 },
              [
                le(" Posts table "),
                g("div", bm, [
                  g("table", ym, [
                    t[25] || (t[25] = g(
                      "thead",
                      { class: "bg-slate-800/50" },
                      [
                        g("tr", null, [
                          g("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-400 uppercase" }, " Title "),
                          g("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-400 uppercase" }, " Status "),
                          g("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-400 uppercase" }, " Category "),
                          g("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-400 uppercase" }, " Published "),
                          g("th", { class: "px-6 py-3 text-right text-xs font-medium tracking-wider text-slate-400 uppercase" }, " Actions ")
                        ])
                      ],
                      -1
                      /* CACHED */
                    )),
                    g("tbody", Em, [
                      (te(!0), se(
                        ye,
                        null,
                        Go(s.posts, (i) => (te(), se("tr", {
                          key: i.ulid,
                          class: "hover:bg-slate-800/50"
                        }, [
                          g("td", _m, [
                            g(
                              "div",
                              xm,
                              we(i.title),
                              1
                              /* TEXT */
                            ),
                            g(
                              "div",
                              wm,
                              we(i.slug),
                              1
                              /* TEXT */
                            )
                          ]),
                          g("td", km, [
                            g(
                              "span",
                              {
                                class: Pe([
                                  s.statusColors[i.status],
                                  "inline-flex rounded-full px-2 text-xs leading-5 font-semibold"
                                ])
                              },
                              we(i.status),
                              3
                              /* TEXT, CLASS */
                            ),
                            i.isFeatured ? (te(), se("span", Nm, " Featured ")) : le("v-if", !0)
                          ]),
                          g(
                            "td",
                            Cm,
                            we(i.category?.name || "-"),
                            1
                            /* TEXT */
                          ),
                          g(
                            "td",
                            Tm,
                            we(i.publishedAt ? new Date(
                              i.publishedAt
                            ).toLocaleDateString() : "-"),
                            1
                            /* TEXT */
                          ),
                          g("td", Om, [
                            g("button", {
                              onClick: (l) => s.openEditModal(i),
                              class: "text-indigo-400 hover:text-indigo-300"
                            }, " Edit ", 8, Am),
                            i.status === "draft" ? (te(), se("button", {
                              key: 0,
                              onClick: (l) => s.publishPost(i),
                              class: "ml-4 text-green-400 hover:text-green-300"
                            }, " Publish ", 8, Sm)) : le("v-if", !0),
                            g("button", {
                              onClick: (l) => s.deletePost(i),
                              class: "ml-4 text-red-400 hover:text-red-300"
                            }, " Delete ", 8, Dm)
                          ])
                        ]))),
                        128
                        /* KEYED_FRAGMENT */
                      )),
                      s.posts.length ? le("v-if", !0) : (te(), se("tr", Lm, [
                        g("td", {
                          colspan: "5",
                          class: "px-6 py-12 text-center"
                        }, [
                          t[24] || (t[24] = g(
                            "p",
                            { class: "text-slate-400" },
                            "No blog posts yet.",
                            -1
                            /* CACHED */
                          )),
                          g("button", {
                            onClick: s.openCreateModal,
                            class: "mt-2 text-indigo-400 hover:text-indigo-300"
                          }, " Create your first post ")
                        ])
                      ]))
                    ])
                  ])
                ])
              ],
              2112
              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
            )),
            le(" Edit/Create Modal "),
            s.showModal ? (te(), se("div", Mm, [
              g("div", Im, [
                g(
                  "h2",
                  Pm,
                  we(s.editingPost ? "Edit Post" : "Create Post"),
                  1
                  /* TEXT */
                ),
                g(
                  "form",
                  {
                    onSubmit: Zo(s.savePost, ["prevent"]),
                    class: "space-y-4"
                  },
                  [
                    g("div", null, [
                      t[26] || (t[26] = g(
                        "label",
                        { class: "block text-sm font-medium text-slate-300" },
                        "Title",
                        -1
                        /* CACHED */
                      )),
                      xe(g(
                        "input",
                        {
                          "onUpdate:modelValue": t[1] || (t[1] = (i) => s.formData.title = i),
                          onInput: s.handleTitleInput,
                          type: "text",
                          required: "",
                          class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        },
                        null,
                        544
                        /* NEED_HYDRATION, NEED_PATCH */
                      ), [
                        [Fe, s.formData.title]
                      ])
                    ]),
                    g("div", null, [
                      t[27] || (t[27] = g(
                        "label",
                        { class: "block text-sm font-medium text-slate-300" },
                        "Slug",
                        -1
                        /* CACHED */
                      )),
                      xe(g(
                        "input",
                        {
                          "onUpdate:modelValue": t[2] || (t[2] = (i) => s.formData.slug = i),
                          type: "text",
                          class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [Fe, s.formData.slug]
                      ])
                    ]),
                    g("div", null, [
                      t[28] || (t[28] = g(
                        "label",
                        { class: "block text-sm font-medium text-slate-300" },
                        "Excerpt",
                        -1
                        /* CACHED */
                      )),
                      xe(g(
                        "textarea",
                        {
                          "onUpdate:modelValue": t[3] || (t[3] = (i) => s.formData.excerpt = i),
                          rows: "2",
                          class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [Fe, s.formData.excerpt]
                      ])
                    ]),
                    g("div", null, [
                      t[29] || (t[29] = g(
                        "label",
                        { class: "block text-sm font-medium text-slate-300" },
                        "Content",
                        -1
                        /* CACHED */
                      )),
                      Se(s.TipTapEditor, {
                        modelValue: s.formData.content,
                        "onUpdate:modelValue": t[4] || (t[4] = (i) => s.formData.content = i),
                        class: "mt-1"
                      }, null, 8, ["modelValue"])
                    ]),
                    g("div", Rm, [
                      g("div", null, [
                        t[31] || (t[31] = g(
                          "label",
                          { class: "block text-sm font-medium text-slate-300" },
                          "Category",
                          -1
                          /* CACHED */
                        )),
                        xe(g(
                          "select",
                          {
                            "onUpdate:modelValue": t[5] || (t[5] = (i) => s.formData.category_id = i),
                            class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                          },
                          [
                            t[30] || (t[30] = g(
                              "option",
                              { value: null },
                              "No category",
                              -1
                              /* CACHED */
                            )),
                            (te(!0), se(
                              ye,
                              null,
                              Go(s.categories, (i) => (te(), se("option", {
                                key: i.id,
                                value: i.id
                              }, we(i.name), 9, Vm))),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ],
                          512
                          /* NEED_PATCH */
                        ), [
                          [pl, s.formData.category_id]
                        ])
                      ]),
                      g("div", null, [
                        t[33] || (t[33] = g(
                          "label",
                          { class: "block text-sm font-medium text-slate-300" },
                          "Status",
                          -1
                          /* CACHED */
                        )),
                        xe(g(
                          "select",
                          {
                            "onUpdate:modelValue": t[6] || (t[6] = (i) => s.formData.status = i),
                            class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                          },
                          [...t[32] || (t[32] = [
                            g(
                              "option",
                              { value: "draft" },
                              "Draft",
                              -1
                              /* CACHED */
                            ),
                            g(
                              "option",
                              { value: "published" },
                              "Published",
                              -1
                              /* CACHED */
                            ),
                            g(
                              "option",
                              { value: "archived" },
                              "Archived",
                              -1
                              /* CACHED */
                            )
                          ])],
                          512
                          /* NEED_PATCH */
                        ), [
                          [pl, s.formData.status]
                        ])
                      ])
                    ]),
                    g("div", Hm, [
                      xe(g(
                        "input",
                        {
                          "onUpdate:modelValue": t[7] || (t[7] = (i) => s.formData.is_featured = i),
                          type: "checkbox",
                          id: "isFeatured",
                          class: "h-4 w-4 rounded border-slate-600 bg-slate-800 text-indigo-600 focus:ring-indigo-500"
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [Qf, s.formData.is_featured]
                      ]),
                      t[34] || (t[34] = g(
                        "label",
                        {
                          for: "isFeatured",
                          class: "ml-2 text-sm text-slate-300"
                        },
                        "Featured post",
                        -1
                        /* CACHED */
                      ))
                    ]),
                    g("div", jm, [
                      g("div", null, [
                        t[35] || (t[35] = g(
                          "label",
                          { class: "block text-sm font-medium text-slate-300" },
                          "Meta Title",
                          -1
                          /* CACHED */
                        )),
                        xe(g(
                          "input",
                          {
                            "onUpdate:modelValue": t[8] || (t[8] = (i) => s.formData.meta_title = i),
                            type: "text",
                            class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                          },
                          null,
                          512
                          /* NEED_PATCH */
                        ), [
                          [Fe, s.formData.meta_title]
                        ])
                      ]),
                      g("div", null, [
                        t[36] || (t[36] = g(
                          "label",
                          { class: "block text-sm font-medium text-slate-300" },
                          "Canonical URL",
                          -1
                          /* CACHED */
                        )),
                        xe(g(
                          "input",
                          {
                            "onUpdate:modelValue": t[9] || (t[9] = (i) => s.formData.canonical_url = i),
                            type: "text",
                            class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                          },
                          null,
                          512
                          /* NEED_PATCH */
                        ), [
                          [Fe, s.formData.canonical_url]
                        ])
                      ])
                    ]),
                    g("div", null, [
                      t[37] || (t[37] = g(
                        "label",
                        { class: "block text-sm font-medium text-slate-300" },
                        "Meta Description",
                        -1
                        /* CACHED */
                      )),
                      xe(g(
                        "textarea",
                        {
                          "onUpdate:modelValue": t[10] || (t[10] = (i) => s.formData.meta_description = i),
                          rows: "2",
                          class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [Fe, s.formData.meta_description]
                      ])
                    ]),
                    g("div", $m, [
                      g("div", null, [
                        t[38] || (t[38] = g(
                          "label",
                          { class: "block text-sm font-medium text-slate-300" },
                          "Social Title",
                          -1
                          /* CACHED */
                        )),
                        xe(g(
                          "input",
                          {
                            "onUpdate:modelValue": t[11] || (t[11] = (i) => s.formData.social_title = i),
                            type: "text",
                            class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                          },
                          null,
                          512
                          /* NEED_PATCH */
                        ), [
                          [Fe, s.formData.social_title]
                        ])
                      ]),
                      g("div", null, [
                        t[39] || (t[39] = g(
                          "label",
                          { class: "block text-sm font-medium text-slate-300" },
                          "Social Image URL",
                          -1
                          /* CACHED */
                        )),
                        xe(g(
                          "input",
                          {
                            "onUpdate:modelValue": t[12] || (t[12] = (i) => s.formData.social_image_url = i),
                            type: "text",
                            class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                          },
                          null,
                          512
                          /* NEED_PATCH */
                        ), [
                          [Fe, s.formData.social_image_url]
                        ])
                      ])
                    ]),
                    g("div", null, [
                      t[40] || (t[40] = g(
                        "label",
                        { class: "block text-sm font-medium text-slate-300" },
                        "Social Description",
                        -1
                        /* CACHED */
                      )),
                      xe(g(
                        "textarea",
                        {
                          "onUpdate:modelValue": t[13] || (t[13] = (i) => s.formData.social_description = i),
                          rows: "2",
                          class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [Fe, s.formData.social_description]
                      ])
                    ]),
                    g("div", null, [
                      t[41] || (t[41] = g(
                        "label",
                        { class: "block text-sm font-medium text-slate-300" },
                        "Answer Summary",
                        -1
                        /* CACHED */
                      )),
                      xe(g(
                        "textarea",
                        {
                          "onUpdate:modelValue": t[14] || (t[14] = (i) => s.formData.answer_summary = i),
                          rows: "4",
                          class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [Fe, s.formData.answer_summary]
                      ])
                    ]),
                    g("div", null, [
                      t[42] || (t[42] = g(
                        "label",
                        { class: "block text-sm font-medium text-slate-300" },
                        "FAQ Items JSON",
                        -1
                        /* CACHED */
                      )),
                      xe(g(
                        "textarea",
                        {
                          "onUpdate:modelValue": t[15] || (t[15] = (i) => s.formData.faq_items_json = i),
                          rows: "6",
                          class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 font-mono text-sm text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [Fe, s.formData.faq_items_json]
                      ]),
                      t[43] || (t[43] = g(
                        "p",
                        { class: "mt-1 text-xs text-slate-500" },
                        [
                          Js(" Provide a JSON array like "),
                          g("code", null, '[{"question":"...","answer":"..."}]')
                        ],
                        -1
                        /* CACHED */
                      ))
                    ]),
                    g("div", Bm, [
                      g("button", {
                        type: "button",
                        onClick: s.closeModal,
                        class: "rounded-md bg-slate-700 px-4 py-2 text-slate-200 hover:bg-slate-600"
                      }, " Cancel "),
                      g("button", {
                        type: "submit",
                        disabled: s.loading,
                        class: "rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 disabled:opacity-50"
                      }, we(s.loading ? "Saving..." : "Save"), 9, Fm)
                    ])
                  ],
                  32
                  /* NEED_HYDRATION */
                )
              ])
            ])) : le("v-if", !0)
          ])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : (te(), se(
        ye,
        { key: 1 },
        [
          le(" Login Form - Magic Link Flow "),
          g("div", sm, [
            t[20] || (t[20] = g(
              "h2",
              { class: "mb-2 text-2xl font-bold text-slate-100" },
              "Blog Admin",
              -1
              /* CACHED */
            )),
            t[21] || (t[21] = g(
              "p",
              { class: "mb-6 text-sm text-slate-400" },
              " Sign in with your CC Platform account ",
              -1
              /* CACHED */
            )),
            le(" Step 1: Email Input "),
            s.loginStep === "email" ? (te(), se(
              "form",
              {
                key: 0,
                onSubmit: Zo(s.handleSendAuthCode, ["prevent"]),
                class: "space-y-4"
              },
              [
                g("div", null, [
                  t[17] || (t[17] = g(
                    "label",
                    { class: "block text-sm font-medium text-slate-300" },
                    "Email address",
                    -1
                    /* CACHED */
                  )),
                  xe(g(
                    "input",
                    {
                      "onUpdate:modelValue": t[0] || (t[0] = (i) => s.loginForm.email = i),
                      type: "email",
                      required: "",
                      placeholder: "you@example.com",
                      class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                    },
                    null,
                    512
                    /* NEED_PATCH */
                  ), [
                    [Fe, s.loginForm.email]
                  ])
                ]),
                s.loginError ? (te(), se(
                  "div",
                  om,
                  we(s.loginError),
                  1
                  /* TEXT */
                )) : le("v-if", !0),
                g("button", {
                  type: "submit",
                  disabled: s.loginLoading || !s.isValidEmail,
                  class: "w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 disabled:opacity-50"
                }, we(s.loginLoading ? "Sending..." : "Send Auth Code"), 9, rm),
                g("button", {
                  type: "button",
                  onClick: s.goToCodeStep,
                  disabled: !s.isValidEmail,
                  class: "w-full text-sm text-slate-400 hover:text-slate-200 disabled:opacity-50"
                }, " I already have a code ", 8, im)
              ],
              32
              /* NEED_HYDRATION */
            )) : s.loginStep === "code" ? (te(), se(
              ye,
              { key: 1 },
              [
                le(" Step 2: Code Verification "),
                g("div", lm, [
                  g("div", am, [
                    t[18] || (t[18] = Js(
                      " We sent a code to ",
                      -1
                      /* CACHED */
                    )),
                    g(
                      "strong",
                      null,
                      we(s.loginForm.email),
                      1
                      /* TEXT */
                    )
                  ]),
                  g(
                    "form",
                    {
                      onSubmit: Zo(s.handleVerifyCode, ["prevent"])
                    },
                    [
                      t[19] || (t[19] = g(
                        "label",
                        { class: "mb-2 block text-sm font-medium text-slate-300" },
                        "Enter 6-digit code",
                        -1
                        /* CACHED */
                      )),
                      g("div", cm, [
                        (te(!0), se(
                          ye,
                          null,
                          Go(s.verificationCode, (i, l) => xe((te(), se("input", {
                            key: l,
                            ref_for: !0,
                            ref: (a) => s.setCodeInputRef(a, l),
                            "onUpdate:modelValue": (a) => s.verificationCode[l] = a,
                            type: "text",
                            inputmode: "numeric",
                            pattern: "[0-9]*",
                            maxlength: "1",
                            disabled: s.loginLoading,
                            class: "h-12 w-10 rounded-md border border-slate-700 bg-slate-900 text-center text-xl font-semibold text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none disabled:bg-slate-800",
                            onInput: (a) => s.handleCodeInput(l, a),
                            onKeydown: (a) => s.handleCodeKeydown(l, a),
                            onPaste: s.handleCodePaste
                          }, null, 40, um)), [
                            [Fe, s.verificationCode[l]]
                          ])),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      s.loginError ? (te(), se(
                        "div",
                        dm,
                        we(s.loginError),
                        1
                        /* TEXT */
                      )) : le("v-if", !0),
                      g("button", {
                        type: "submit",
                        disabled: s.loginLoading || !s.isCodeComplete,
                        class: "w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 disabled:opacity-50"
                      }, we(s.loginLoading ? "Verifying..." : "Verify Code"), 9, fm)
                    ],
                    32
                    /* NEED_HYDRATION */
                  ),
                  g("button", {
                    type: "button",
                    onClick: s.resetToEmail,
                    class: "w-full text-sm text-slate-400 hover:text-slate-200"
                  }, " ← Use different email ")
                ])
              ],
              2112
              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
            )) : le("v-if", !0)
          ])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      ))
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
const Km = /* @__PURE__ */ Dc(tm, [["render", Um], ["__file", "/home/ubuntu/laravel-cc-blog/resources/js/components/blog/BlogAdmin.vue"]]), Wm = window.location.hostname.includes("localtest.me") ? "https://cc.localtest.me" : "https://app.closedcircuitconsulting.com", yi = document.querySelector('meta[name="cc-api-url"]')?.content || void 0 || Wm, cr = "cc_blog_admin_tokens", En = {
  getTokens() {
    try {
      const e = localStorage.getItem(cr);
      return e ? JSON.parse(e) : null;
    } catch {
      return null;
    }
  },
  setTokens(e) {
    localStorage.setItem(cr, JSON.stringify(e));
  },
  clearTokens() {
    localStorage.removeItem(cr);
  }
};
async function zm() {
  const e = En.getTokens();
  if (!e?.refreshToken)
    throw new Error("No refresh token available");
  const t = await fetch(`${yi}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest"
    },
    body: JSON.stringify({ refresh_token: e.refreshToken })
  });
  if (!t.ok)
    throw new Error(`Token refresh failed: ${t.status}`);
  const n = await t.json(), s = n.access_token || n.accessToken || n.data?.access_token, o = n.refresh_token || n.refreshToken || n.data?.refresh_token;
  if (!s)
    throw new Error("No access token in refresh response");
  const r = {
    accessToken: s,
    refreshToken: o || e.refreshToken
  };
  return En.setTokens(r), r;
}
const qm = {
  async request(e, t, n = null, s = !0) {
    const o = En.getTokens(), r = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest"
    };
    o?.accessToken && (r.Authorization = `Bearer ${o.accessToken}`);
    const i = { method: e, headers: r };
    n !== null && (i.body = JSON.stringify(n));
    const l = await fetch(`${yi}${t}`, i);
    if (l.status === 401 && s)
      try {
        return await zm(), this.request(e, t, n, !1);
      } catch {
        throw En.clearTokens(), window.dispatchEvent(new CustomEvent("cc:unauthorized")), new Error("Session expired. Please log in again.");
      }
    return l;
  },
  async json(e, t, n = null) {
    const s = await this.request(e, t, n);
    if (!s.ok) {
      const o = await s.text();
      let r = `Request failed (${s.status})`;
      try {
        const i = JSON.parse(o);
        r = i.message || i.error || r;
      } catch {
      }
      throw new Error(r);
    }
    return s.json();
  },
  // Auth
  async requestAuthCode(e) {
    await this.json("POST", "/sendBlogAuthCode", { email: e });
  },
  async loginWithMagicLink(e, t) {
    const n = await this.json("POST", "/authCodeLogin", { identifier: e, authCode: parseInt(t, 10) }), s = n.access_token || n.accessToken || n.data?.access_token, o = n.refresh_token || n.refreshToken || n.data?.refresh_token;
    return s && En.setTokens({ accessToken: s, refreshToken: o }), { accessToken: s, refreshToken: o };
  },
  async getCurrentUser() {
    const e = await this.json("GET", "/v1/users/me");
    return e.data || e;
  },
  // Blog posts
  async listBlogPosts(e = {}) {
    const t = new URLSearchParams(
      Object.fromEntries(
        Object.entries({ status: "all", ...e }).filter(
          ([, s]) => s != null
        )
      )
    ).toString();
    return await this.json("GET", `/v1/blog${t ? "?" + t : ""}`);
  },
  async getBlogCategories() {
    const e = await this.json("GET", "/v1/blog/categories");
    return e.data || e;
  },
  async getBlogPost(e) {
    const t = await this.json("GET", `/v1/blog/${e}`);
    return t.data || t;
  },
  async createBlogPost(e) {
    const t = await this.json("POST", "/v1/blog", e);
    return t.data || t;
  },
  async updateBlogPost(e, t) {
    const n = await this.json("PUT", `/v1/blog/${e}`, t);
    return n.data || n;
  },
  async deleteBlogPost(e) {
    await this.request("DELETE", `/v1/blog/${e}`);
  },
  async publishBlogPost(e) {
    const t = await this.json("POST", `/v1/blog/${e}/publish`);
    return t.data || t;
  },
  async uploadImage(e) {
    const t = await this.json("POST", "/v1/media/signed-storage-url", {
      content_type: e.type
    }), n = await fetch(t.url, {
      method: "PUT",
      headers: { "Content-Type": e.type },
      body: e
    });
    if (!n.ok)
      throw new Error(`Image upload failed: ${n.status}`);
    return await this.json("POST", "/v1/media/upload", { key: t.key }), t.publicUrl;
  }
};
window.ccApiClient = qm;
window.ccTokenProvider = En;
const jl = document.getElementById("blog-admin-app");
jl && (sp(Km).mount(jl), console.log("[Blog Admin] Mounted with API:", yi));
