import { E as Nc, N as je, w as _n, m as pe, M as Tn, a as cn, b as wn, P as ze, c as Ye, T as nn, t as ur, S as Qn, n as Il, d as kc, i as Pl, e as Vr, f as Oc, g as Tc, h as Cc, j as Ac, k as Sc, r as Rl, l as Xe, o as Lc, p as Ni, q as dr, s as Mc, u as Dc, v as Vl, x as Ic, y as Pc, F as ki, z as $l, A as Rc, D as Zn, B as To, C as Vc, G as $c, H as Hc, I as jc, R as Bc, J as Fc } from "./chunks/markdown-paste-CvZfJ38t.js";
// @__NO_SIDE_EFFECTS__
function Pt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Q = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, bn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ge = () => {
}, Hl = () => !1, cs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Vs = (e) => e.startsWith("onUpdate:"), de = Object.assign, $r = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Uc = Object.prototype.hasOwnProperty, J = (e, t) => Uc.call(e, t), R = Array.isArray, sn = (e) => us(e) === "[object Map]", Cn = (e) => us(e) === "[object Set]", Oi = (e) => us(e) === "[object Date]", j = (e) => typeof e == "function", le = (e) => typeof e == "string", _t = (e) => typeof e == "symbol", Y = (e) => e !== null && typeof e == "object", Hr = (e) => (Y(e) || j(e)) && j(e.then) && j(e.catch), jl = Object.prototype.toString, us = (e) => jl.call(e), jr = (e) => us(e).slice(8, -1), Bl = (e) => us(e) === "[object Object]", Br = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, jn = /* @__PURE__ */ Pt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Kc = /* @__PURE__ */ Pt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Co = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Wc = /-\w/g, tt = Co(
  (e) => e.replace(Wc, (t) => t.slice(1).toUpperCase())
), zc = /\B([A-Z])/g, qt = Co(
  (e) => e.replace(zc, "-$1").toLowerCase()
), Ao = Co((e) => e.charAt(0).toUpperCase() + e.slice(1)), Zt = Co(
  (e) => e ? `on${Ao(e)}` : ""
), Wt = (e, t) => !Object.is(e, t), mn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, $s = (e, t, n, s = !1) => {
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
let Ti;
const ds = () => Ti || (Ti = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Fr(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = le(s) ? Yc(s) : Fr(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (le(e) || Y(e))
    return e;
}
const qc = /;(?![^(]*\))/g, Gc = /:([^]+)/, Jc = /\/\*[^]*?\*\//g;
function Yc(e) {
  const t = {};
  return e.replace(Jc, "").split(qc).forEach((n) => {
    if (n) {
      const s = n.split(Gc);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Ve(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (R(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ve(e[n]);
      s && (t += s + " ");
    }
  else if (Y(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Xc = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Qc = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Zc = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", eu = /* @__PURE__ */ Pt(Xc), tu = /* @__PURE__ */ Pt(Qc), nu = /* @__PURE__ */ Pt(Zc), su = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ou = /* @__PURE__ */ Pt(su);
function Fl(e) {
  return !!e || e === "";
}
function ru(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = An(e[s], t[s]);
  return n;
}
function An(e, t) {
  if (e === t) return !0;
  let n = Oi(e), s = Oi(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = _t(e), s = _t(t), n || s)
    return e === t;
  if (n = R(e), s = R(t), n || s)
    return n && s ? ru(e, t) : !1;
  if (n = Y(e), s = Y(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, r = Object.keys(t).length;
    if (o !== r)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), a = t.hasOwnProperty(i);
      if (l && !a || !l && a || !An(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ur(e, t) {
  return e.findIndex((n) => An(n, t));
}
const Ul = (e) => !!(e && e.__v_isRef === !0), Ne = (e) => le(e) ? e : e == null ? "" : R(e) || Y(e) && (e.toString === jl || !j(e.toString)) ? Ul(e) ? Ne(e.value) : JSON.stringify(e, Kl, 2) : String(e), Kl = (e, t) => Ul(t) ? Kl(e, t.value) : sn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[Fo(s, r) + " =>"] = o, n),
    {}
  )
} : Cn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Fo(n))
} : _t(t) ? Fo(t) : Y(t) && !R(t) && !Bl(t) ? String(t) : t, Fo = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    _t(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function st(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let $e;
class iu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = $e, !t && $e && (this.index = ($e.scopes || ($e.scopes = [])).push(
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
      const n = $e;
      try {
        return $e = this, t();
      } finally {
        $e = n;
      }
    } else process.env.NODE_ENV !== "production" && st("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = $e, $e = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && ($e = this.prevScope, this.prevScope = void 0);
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
function lu() {
  return $e;
}
let X;
const Uo = /* @__PURE__ */ new WeakSet();
class Wl {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, $e && $e.active && $e.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ql(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ci(this), Gl(this);
    const t = X, n = nt;
    X = this, nt = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && X !== this && st(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Jl(this), X = t, nt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        zr(t);
      this.deps = this.depsTail = void 0, Ci(this), this.onStop && this.onStop(), this.flags &= -2;
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
let zl = 0, Bn, Fn;
function ql(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Fn, Fn = e;
    return;
  }
  e.next = Bn, Bn = e;
}
function Kr() {
  zl++;
}
function Wr() {
  if (--zl > 0)
    return;
  if (Fn) {
    let t = Fn;
    for (Fn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Bn; ) {
    let t = Bn;
    for (Bn = void 0; t; ) {
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
function Gl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Jl(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), zr(s), au(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function fr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Yl(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Yl(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === es) || (e.globalVersion = es, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !fr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = X, s = nt;
  X = e, nt = !0;
  try {
    Gl(e);
    const o = e.fn(e._value);
    (t.version === 0 || Wt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    X = n, nt = s, Jl(e), e.flags &= -3;
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
function au(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let nt = !0;
const Xl = [];
function ot() {
  Xl.push(nt), nt = !1;
}
function rt() {
  const e = Xl.pop();
  nt = e === void 0 ? !0 : e;
}
function Ci(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = X;
    X = void 0;
    try {
      t();
    } finally {
      X = n;
    }
  }
}
let es = 0, cu = class {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
};
class Lo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!X || !nt || X === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== X)
      n = this.activeLink = new cu(X, this), X.deps ? (n.prevDep = X.depsTail, X.depsTail.nextDep = n, X.depsTail = n) : X.deps = X.depsTail = n, Ql(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = X.depsTail, n.nextDep = void 0, X.depsTail.nextDep = n, X.depsTail = n, X.deps === n && (X.deps = s);
    }
    return process.env.NODE_ENV !== "production" && X.onTrack && X.onTrack(
      de(
        {
          effect: X
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, es++, this.notify(t);
  }
  notify(t) {
    Kr();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            de(
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
function Ql(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Ql(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const pr = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), hr = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ts = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function me(e, t, n) {
  if (nt && X) {
    let s = pr.get(e);
    s || pr.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Lo()), o.map = s, o.key = n), process.env.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function bt(e, t, n, s, o, r) {
  const i = pr.get(e);
  if (!i) {
    es++;
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
    const a = R(e), f = a && Br(n);
    if (a && n === "length") {
      const d = Number(s);
      i.forEach((c, u) => {
        (u === "length" || u === ts || !_t(u) && u >= d) && l(c);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), f && l(i.get(ts)), t) {
        case "add":
          a ? f && l(i.get("length")) : (l(i.get(on)), sn(e) && l(i.get(hr)));
          break;
        case "delete":
          a || (l(i.get(on)), sn(e) && l(i.get(hr)));
          break;
        case "set":
          sn(e) && l(i.get(on));
          break;
      }
  }
  Wr();
}
function fn(e) {
  const t = /* @__PURE__ */ W(e);
  return t === e ? t : (me(t, "iterate", ts), /* @__PURE__ */ Me(e) ? t : t.map(lt));
}
function Mo(e) {
  return me(e = /* @__PURE__ */ W(e), "iterate", ts), e;
}
function Ht(e, t) {
  return /* @__PURE__ */ it(e) ? Nn(/* @__PURE__ */ zt(e) ? lt(t) : t) : lt(t);
}
const uu = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ko(this, Symbol.iterator, (e) => Ht(this, e));
  },
  concat(...e) {
    return fn(this).concat(
      ...e.map((t) => R(t) ? fn(t) : t)
    );
  },
  entries() {
    return Ko(this, "entries", (e) => (e[1] = Ht(this, e[1]), e));
  },
  every(e, t) {
    return Ot(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ot(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Ht(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ot(
      this,
      "find",
      e,
      t,
      (n) => Ht(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ot(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ot(
      this,
      "findLast",
      e,
      t,
      (n) => Ht(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ot(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ot(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Wo(this, "includes", e);
  },
  indexOf(...e) {
    return Wo(this, "indexOf", e);
  },
  join(e) {
    return fn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Wo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ot(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Dn(this, "pop");
  },
  push(...e) {
    return Dn(this, "push", e);
  },
  reduce(e, ...t) {
    return Ai(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ai(this, "reduceRight", e, t);
  },
  shift() {
    return Dn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ot(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Dn(this, "splice", e);
  },
  toReversed() {
    return fn(this).toReversed();
  },
  toSorted(e) {
    return fn(this).toSorted(e);
  },
  toSpliced(...e) {
    return fn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Dn(this, "unshift", e);
  },
  values() {
    return Ko(this, "values", (e) => Ht(this, e));
  }
};
function Ko(e, t, n) {
  const s = Mo(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Me(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.done || (r.value = n(r.value)), r;
  }), o;
}
const du = Array.prototype;
function Ot(e, t, n, s, o, r) {
  const i = Mo(e), l = i !== e && !/* @__PURE__ */ Me(e), a = i[t];
  if (a !== du[t]) {
    const c = a.apply(e, r);
    return l ? lt(c) : c;
  }
  let f = n;
  i !== e && (l ? f = function(c, u) {
    return n.call(this, Ht(e, c), u, e);
  } : n.length > 2 && (f = function(c, u) {
    return n.call(this, c, u, e);
  }));
  const d = a.call(i, f, s);
  return l && o ? o(d) : d;
}
function Ai(e, t, n, s) {
  const o = Mo(e);
  let r = n;
  return o !== e && (/* @__PURE__ */ Me(e) ? n.length > 3 && (r = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : r = function(i, l, a) {
    return n.call(this, i, Ht(e, l), a, e);
  }), o[t](r, ...s);
}
function Wo(e, t, n) {
  const s = /* @__PURE__ */ W(e);
  me(s, "iterate", ts);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Hs(n[0]) ? (n[0] = /* @__PURE__ */ W(n[0]), s[t](...n)) : o;
}
function Dn(e, t, n = []) {
  ot(), Kr();
  const s = (/* @__PURE__ */ W(e))[t].apply(e, n);
  return Wr(), rt(), s;
}
const fu = /* @__PURE__ */ Pt("__proto__,__v_isRef,__isVue"), Zl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_t)
);
function pu(e) {
  _t(e) || (e = String(e));
  const t = /* @__PURE__ */ W(this);
  return me(t, "has", e), t.hasOwnProperty(e);
}
class ea {
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
      return s === (o ? r ? ia : ra : r ? oa : sa).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = R(t);
    if (!o) {
      let a;
      if (i && (a = uu[n]))
        return a;
      if (n === "hasOwnProperty")
        return pu;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ fe(t) ? t : s
    );
    if ((_t(n) ? Zl.has(n) : fu(n)) || (o || me(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ fe(l)) {
      const a = i && Br(n) ? l : l.value;
      return o && Y(a) ? /* @__PURE__ */ gr(a) : a;
    }
    return Y(l) ? o ? /* @__PURE__ */ gr(l) : /* @__PURE__ */ qr(l) : l;
  }
}
class ta extends ea {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    const i = R(t) && Br(n);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ it(r);
      if (!/* @__PURE__ */ Me(s) && !/* @__PURE__ */ it(s) && (r = /* @__PURE__ */ W(r), s = /* @__PURE__ */ W(s)), !i && /* @__PURE__ */ fe(r) && !/* @__PURE__ */ fe(s))
        return f ? (process.env.NODE_ENV !== "production" && st(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (r.value = s, !0);
    }
    const l = i ? Number(n) < t.length : J(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ fe(t) ? t : o
    );
    return t === /* @__PURE__ */ W(o) && (l ? Wt(s, r) && bt(t, "set", n, s, r) : bt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = J(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && bt(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!_t(n) || !Zl.has(n)) && me(t, "has", n), s;
  }
  ownKeys(t) {
    return me(
      t,
      "iterate",
      R(t) ? "length" : on
    ), Reflect.ownKeys(t);
  }
}
class na extends ea {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && st(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && st(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const hu = /* @__PURE__ */ new ta(), mu = /* @__PURE__ */ new na(), gu = /* @__PURE__ */ new ta(!0), vu = /* @__PURE__ */ new na(!0), mr = (e) => e, bs = (e) => Reflect.getPrototypeOf(e);
function bu(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = /* @__PURE__ */ W(o), i = sn(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, f = o[e](...s), d = n ? mr : t ? Nn : lt;
    return !t && me(
      r,
      "iterate",
      a ? hr : on
    ), de(
      // inheriting all iterator properties
      Object.create(f),
      {
        // iterator protocol
        next() {
          const { value: c, done: u } = f.next();
          return u ? { value: c, done: u } : {
            value: l ? [d(c[0]), d(c[1])] : d(c),
            done: u
          };
        }
      }
    );
  };
}
function ys(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      st(
        `${Ao(e)} operation ${n}failed: target is readonly.`,
        /* @__PURE__ */ W(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function yu(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = /* @__PURE__ */ W(r), l = /* @__PURE__ */ W(o);
      e || (Wt(o, l) && me(i, "get", o), me(i, "get", l));
      const { has: a } = bs(i), f = t ? mr : e ? Nn : lt;
      if (a.call(i, o))
        return f(r.get(o));
      if (a.call(i, l))
        return f(r.get(l));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && me(/* @__PURE__ */ W(o), "iterate", on), o.size;
    },
    has(o) {
      const r = this.__v_raw, i = /* @__PURE__ */ W(r), l = /* @__PURE__ */ W(o);
      return e || (Wt(o, l) && me(i, "has", o), me(i, "has", l)), o === l ? r.has(o) : r.has(o) || r.has(l);
    },
    forEach(o, r) {
      const i = this, l = i.__v_raw, a = /* @__PURE__ */ W(l), f = t ? mr : e ? Nn : lt;
      return !e && me(a, "iterate", on), l.forEach((d, c) => o.call(r, f(d), f(c), i));
    }
  };
  return de(
    n,
    e ? {
      add: ys("add"),
      set: ys("set"),
      delete: ys("delete"),
      clear: ys("clear")
    } : {
      add(o) {
        !t && !/* @__PURE__ */ Me(o) && !/* @__PURE__ */ it(o) && (o = /* @__PURE__ */ W(o));
        const r = /* @__PURE__ */ W(this);
        return bs(r).has.call(r, o) || (r.add(o), bt(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !/* @__PURE__ */ Me(r) && !/* @__PURE__ */ it(r) && (r = /* @__PURE__ */ W(r));
        const i = /* @__PURE__ */ W(this), { has: l, get: a } = bs(i);
        let f = l.call(i, o);
        f ? process.env.NODE_ENV !== "production" && Si(i, l, o) : (o = /* @__PURE__ */ W(o), f = l.call(i, o));
        const d = a.call(i, o);
        return i.set(o, r), f ? Wt(r, d) && bt(i, "set", o, r, d) : bt(i, "add", o, r), this;
      },
      delete(o) {
        const r = /* @__PURE__ */ W(this), { has: i, get: l } = bs(r);
        let a = i.call(r, o);
        a ? process.env.NODE_ENV !== "production" && Si(r, i, o) : (o = /* @__PURE__ */ W(o), a = i.call(r, o));
        const f = l ? l.call(r, o) : void 0, d = r.delete(o);
        return a && bt(r, "delete", o, void 0, f), d;
      },
      clear() {
        const o = /* @__PURE__ */ W(this), r = o.size !== 0, i = process.env.NODE_ENV !== "production" ? sn(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return r && bt(
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
    n[o] = bu(o, e, t);
  }), n;
}
function Do(e, t) {
  const n = yu(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    J(n, o) && o in s ? n : s,
    o,
    r
  );
}
const Eu = {
  get: /* @__PURE__ */ Do(!1, !1)
}, xu = {
  get: /* @__PURE__ */ Do(!1, !0)
}, _u = {
  get: /* @__PURE__ */ Do(!0, !1)
}, wu = {
  get: /* @__PURE__ */ Do(!0, !0)
};
function Si(e, t, n) {
  const s = /* @__PURE__ */ W(n);
  if (s !== n && t.call(e, s)) {
    const o = jr(e);
    st(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const sa = /* @__PURE__ */ new WeakMap(), oa = /* @__PURE__ */ new WeakMap(), ra = /* @__PURE__ */ new WeakMap(), ia = /* @__PURE__ */ new WeakMap();
function Nu(e) {
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
function ku(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Nu(jr(e));
}
// @__NO_SIDE_EFFECTS__
function qr(e) {
  return /* @__PURE__ */ it(e) ? e : Io(
    e,
    !1,
    hu,
    Eu,
    sa
  );
}
// @__NO_SIDE_EFFECTS__
function Ou(e) {
  return Io(
    e,
    !1,
    gu,
    xu,
    oa
  );
}
// @__NO_SIDE_EFFECTS__
function gr(e) {
  return Io(
    e,
    !0,
    mu,
    _u,
    ra
  );
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
  return Io(
    e,
    !0,
    vu,
    wu,
    ia
  );
}
function Io(e, t, n, s, o) {
  if (!Y(e))
    return process.env.NODE_ENV !== "production" && st(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = ku(e);
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
function zt(e) {
  return /* @__PURE__ */ it(e) ? /* @__PURE__ */ zt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function it(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Me(e) {
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
function la(e) {
  return !J(e, "__v_skip") && Object.isExtensible(e) && $s(e, "__v_skip", !0), e;
}
const lt = (e) => Y(e) ? /* @__PURE__ */ qr(e) : e, Nn = (e) => Y(e) ? /* @__PURE__ */ gr(e) : e;
// @__NO_SIDE_EFFECTS__
function fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ee(e) {
  return aa(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Tu(e) {
  return aa(e, !0);
}
function aa(e, t) {
  return /* @__PURE__ */ fe(e) ? e : new Cu(e, t);
}
class Cu {
  constructor(t, n) {
    this.dep = new Lo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ W(t), this._value = n ? t : lt(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Me(t) || /* @__PURE__ */ it(t);
    t = s ? t : /* @__PURE__ */ W(t), Wt(t, n) && (this._rawValue = t, this._value = s ? t : lt(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function oe(e) {
  return /* @__PURE__ */ fe(e) ? e.value : e;
}
const Au = {
  get: (e, t, n) => t === "__v_raw" ? e : oe(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ fe(o) && !/* @__PURE__ */ fe(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function ca(e) {
  return /* @__PURE__ */ zt(e) ? e : new Proxy(e, Au);
}
class Su {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Lo(), { get: s, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Lu(e) {
  return new Su(e);
}
class Mu {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Lo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = es - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    X !== this)
      return ql(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Yl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && st("Write operation failed: computed value is readonly");
  }
}
// @__NO_SIDE_EFFECTS__
function Du(e, t, n = !1) {
  let s, o;
  j(e) ? s = e : (s = e.get, o = e.set);
  const r = new Mu(s, o, n);
  return process.env.NODE_ENV, r;
}
const Es = {}, js = /* @__PURE__ */ new WeakMap();
let en;
function Iu(e, t = !1, n = en) {
  if (n) {
    let s = js.get(n);
    s || js.set(n, s = []), s.push(e);
  } else process.env.NODE_ENV !== "production" && !t && st(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Pu(e, t, n = Q) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: l, call: a } = n, f = (L) => {
    (n.onWarn || st)(
      "Invalid watch source: ",
      L,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (L) => o ? L : /* @__PURE__ */ Me(L) || o === !1 || o === 0 ? Dt(L, 1) : Dt(L);
  let c, u, m, E, y = !1, M = !1;
  if (/* @__PURE__ */ fe(e) ? (u = () => e.value, y = /* @__PURE__ */ Me(e)) : /* @__PURE__ */ zt(e) ? (u = () => d(e), y = !0) : R(e) ? (M = !0, y = e.some((L) => /* @__PURE__ */ zt(L) || /* @__PURE__ */ Me(L)), u = () => e.map((L) => {
    if (/* @__PURE__ */ fe(L))
      return L.value;
    if (/* @__PURE__ */ zt(L))
      return d(L);
    if (j(L))
      return a ? a(L, 2) : L();
    process.env.NODE_ENV !== "production" && f(L);
  })) : j(e) ? t ? u = a ? () => a(e, 2) : e : u = () => {
    if (m) {
      ot();
      try {
        m();
      } finally {
        rt();
      }
    }
    const L = en;
    en = c;
    try {
      return a ? a(e, 3, [E]) : e(E);
    } finally {
      en = L;
    }
  } : (u = ge, process.env.NODE_ENV !== "production" && f(e)), t && o) {
    const L = u, q = o === !0 ? 1 / 0 : o;
    u = () => Dt(L(), q);
  }
  const D = lu(), I = () => {
    c.stop(), D && D.active && $r(D.effects, c);
  };
  if (r && t) {
    const L = t;
    t = (...q) => {
      L(...q), I();
    };
  }
  let U = M ? new Array(e.length).fill(Es) : Es;
  const ee = (L) => {
    if (!(!(c.flags & 1) || !c.dirty && !L))
      if (t) {
        const q = c.run();
        if (o || y || (M ? q.some((ve, ae) => Wt(ve, U[ae])) : Wt(q, U))) {
          m && m();
          const ve = en;
          en = c;
          try {
            const ae = [
              q,
              // pass undefined as the old value when it's changed for the first time
              U === Es ? void 0 : M && U[0] === Es ? [] : U,
              E
            ];
            U = q, a ? a(t, 3, ae) : (
              // @ts-expect-error
              t(...ae)
            );
          } finally {
            en = ve;
          }
        }
      } else
        c.run();
  };
  return l && l(ee), c = new Wl(u), c.scheduler = i ? () => i(ee, !1) : ee, E = (L) => Iu(L, !1, c), m = c.onStop = () => {
    const L = js.get(c);
    if (L) {
      if (a)
        a(L, 4);
      else
        for (const q of L) q();
      js.delete(c);
    }
  }, process.env.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? s ? ee(!0) : U = c.run() : i ? i(ee.bind(null, !0), !0) : c.run(), I.pause = c.pause.bind(c), I.resume = c.resume.bind(c), I.stop = I, I;
}
function Dt(e, t = 1 / 0, n) {
  if (t <= 0 || !Y(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ fe(e))
    Dt(e.value, t, n);
  else if (R(e))
    for (let s = 0; s < e.length; s++)
      Dt(e[s], t, n);
  else if (Cn(e) || sn(e))
    e.forEach((s) => {
      Dt(s, t, n);
    });
  else if (Bl(e)) {
    for (const s in e)
      Dt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Dt(e[s], t, n);
  }
  return e;
}
const rn = [];
function ks(e) {
  rn.push(e);
}
function Os() {
  rn.pop();
}
let zo = !1;
function C(e, ...t) {
  if (zo) return;
  zo = !0, ot();
  const n = rn.length ? rn[rn.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Ru();
  if (s)
    Sn(
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
          ({ vnode: r }) => `at <${gs(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...Vu(o)), console.warn(...r);
  }
  rt(), zo = !1;
}
function Ru() {
  let e = rn[rn.length - 1];
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
function Vu(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...$u(n));
  }), t;
}
function $u({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${gs(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Hu(e.props), r] : [o + r];
}
function Hu(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...ua(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ua(e, t, n) {
  return le(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : /* @__PURE__ */ fe(t) ? (t = ua(e, /* @__PURE__ */ W(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : j(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = /* @__PURE__ */ W(t), n ? t : [`${e}=`, t]);
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
function Sn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    fs(o, t, n);
  }
}
function wt(e, t, n, s) {
  if (j(e)) {
    const o = Sn(e, t, n, s);
    return o && Hr(o) && o.catch((r) => {
      fs(r, t, n);
    }), o;
  }
  if (R(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(wt(e[r], t, n, s));
    return o;
  } else process.env.NODE_ENV !== "production" && C(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function fs(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Q;
  if (t) {
    let l = t.parent;
    const a = t.proxy, f = process.env.NODE_ENV !== "production" ? Gr[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let c = 0; c < d.length; c++)
          if (d[c](e, a, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      ot(), Sn(r, null, 10, [
        e,
        a,
        f
      ]), rt();
      return;
    }
  }
  ju(e, n, o, s, i);
}
function ju(e, t, n, s = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = Gr[t];
    if (n && ks(n), C(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Os(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const Ae = [];
let pt = -1;
const yn = [];
let jt = null, gn = 0;
const da = /* @__PURE__ */ Promise.resolve();
let Bs = null;
const Bu = 100;
function ns(e) {
  const t = Bs || da;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Fu(e) {
  let t = pt + 1, n = Ae.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = Ae[s], r = ss(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Po(e) {
  if (!(e.flags & 1)) {
    const t = ss(e), n = Ae[Ae.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ss(n) ? Ae.push(e) : Ae.splice(Fu(t), 0, e), e.flags |= 1, fa();
  }
}
function fa() {
  Bs || (Bs = da.then(ma));
}
function pa(e) {
  R(e) ? yn.push(...e) : jt && e.id === -1 ? jt.splice(gn + 1, 0, e) : e.flags & 1 || (yn.push(e), e.flags |= 1), fa();
}
function Li(e, t, n = pt + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Ae.length; n++) {
    const s = Ae[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || process.env.NODE_ENV !== "production" && Jr(t, s))
        continue;
      Ae.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ha(e) {
  if (yn.length) {
    const t = [...new Set(yn)].sort(
      (n, s) => ss(n) - ss(s)
    );
    if (yn.length = 0, jt) {
      jt.push(...t);
      return;
    }
    for (jt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), gn = 0; gn < jt.length; gn++) {
      const n = jt[gn];
      process.env.NODE_ENV !== "production" && Jr(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    jt = null, gn = 0;
  }
}
const ss = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ma(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => Jr(e, n) : ge;
  try {
    for (pt = 0; pt < Ae.length; pt++) {
      const n = Ae[pt];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Sn(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; pt < Ae.length; pt++) {
      const n = Ae[pt];
      n && (n.flags &= -2);
    }
    pt = -1, Ae.length = 0, ha(e), Bs = null, (Ae.length || yn.length) && ma(e);
  }
}
function Jr(e, t) {
  const n = e.get(t) || 0;
  if (n > Bu) {
    const s = t.i, o = s && Ja(s.type);
    return fs(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Et = !1;
const Ts = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (ds().__VUE_HMR_RUNTIME__ = {
  createRecord: qo(ga),
  rerender: qo(Wu),
  reload: qo(zu)
});
const un = /* @__PURE__ */ new Map();
function Uu(e) {
  const t = e.type.__hmrId;
  let n = un.get(t);
  n || (ga(t, e.type), n = un.get(t)), n.instances.add(e);
}
function Ku(e) {
  un.get(e.type.__hmrId).instances.delete(e);
}
function ga(e, t) {
  return un.has(e) ? !1 : (un.set(e, {
    initialDef: Fs(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Fs(e) {
  return Ya(e) ? e.__vccOpts : e;
}
function Wu(e, t) {
  const n = un.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Fs(s.type).render = t), s.renderCache = [], Et = !0, s.job.flags & 8 || s.update(), Et = !1;
  }));
}
function zu(e, t) {
  const n = un.get(e);
  if (!n) return;
  t = Fs(t), Mi(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = Fs(r.type);
    let l = Ts.get(i);
    l || (i !== n.initialDef && Mi(i, t), Ts.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? Po(() => {
      r.job.flags & 8 || (Et = !0, r.parent.update(), Et = !1, l.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  pa(() => {
    Ts.clear();
  });
}
function Mi(e, t) {
  de(e, t);
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
let Ze, Vn = [], vr = !1;
function ps(e, ...t) {
  Ze ? Ze.emit(e, ...t) : vr || Vn.push({ event: e, args: t });
}
function Yr(e, t) {
  var n, s;
  Ze = e, Ze ? (Ze.enabled = !0, Vn.forEach(({ event: o, args: r }) => Ze.emit(o, ...r)), Vn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Yr(r, t);
  }), setTimeout(() => {
    Ze || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, vr = !0, Vn = []);
  }, 3e3)) : (vr = !0, Vn = []);
}
function qu(e, t) {
  ps("app:init", e, t, {
    Fragment: Ue,
    Text: hs,
    Comment: We,
    Static: Ls
  });
}
function Gu(e) {
  ps("app:unmount", e);
}
const Ju = /* @__PURE__ */ Xr(
  "component:added"
  /* COMPONENT_ADDED */
), va = /* @__PURE__ */ Xr(
  "component:updated"
  /* COMPONENT_UPDATED */
), Yu = /* @__PURE__ */ Xr(
  "component:removed"
  /* COMPONENT_REMOVED */
), Xu = (e) => {
  Ze && typeof Ze.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ze.cleanupBuffer(e) && Yu(e);
};
// @__NO_SIDE_EFFECTS__
function Xr(e) {
  return (t) => {
    ps(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Qu = /* @__PURE__ */ ba(
  "perf:start"
  /* PERFORMANCE_START */
), Zu = /* @__PURE__ */ ba(
  "perf:end"
  /* PERFORMANCE_END */
);
function ba(e) {
  return (t, n, s) => {
    ps(e, t.appContext.app, t.uid, t, n, s);
  };
}
function ed(e, t, n) {
  ps(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Se = null, ya = null;
function Us(e) {
  const t = Se;
  return Se = e, ya = e && e.type.__scopeId || null, t;
}
function td(e, t = Se, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Gs(-1);
    const r = Us(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Us(r), s._d && Gs(1);
    }
    return process.env.NODE_ENV !== "production" && va(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Ea(e) {
  Kc(e) && C("Do not use built-in directive ids as custom directive id: " + e);
}
function we(e, t) {
  if (Se === null)
    return process.env.NODE_ENV !== "production" && C("withDirectives can only be used inside render functions."), e;
  const n = $o(Se), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, l, a = Q] = t[o];
    r && (j(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Dt(i), s.push({
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
function Yt(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    r && (l.oldValue = r[i].value);
    let a = l.dir[s];
    a && (ot(), wt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), rt());
  }
}
function nd(e, t) {
  if (process.env.NODE_ENV !== "production" && (!he || he.isMounted) && C("provide() can only be used inside setup()."), he) {
    let n = he.provides;
    const s = he.parent && he.parent.provides;
    s === n && (n = he.provides = Object.create(s)), n[e] = t;
  }
}
function Cs(e, t, n = !1) {
  const s = ai();
  if (s || En) {
    let o = En ? En._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && j(t) ? t.call(s && s.proxy) : t;
    process.env.NODE_ENV !== "production" && C(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && C("inject() can only be used inside setup() or functional components.");
}
const sd = /* @__PURE__ */ Symbol.for("v-scx"), od = () => {
  {
    const e = Cs(sd);
    return e || process.env.NODE_ENV !== "production" && C(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function rd(e, t) {
  return Qr(e, null, t);
}
function As(e, t, n) {
  return process.env.NODE_ENV !== "production" && !j(t) && C(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Qr(e, t, n);
}
function Qr(e, t, n = Q) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (s !== void 0 && C(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && C(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && C(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = de({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = C);
  const a = t && s || !t && r !== "post";
  let f;
  if (rs) {
    if (r === "sync") {
      const m = od();
      f = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = ge, m.resume = ge, m.pause = ge, m;
    }
  }
  const d = he;
  l.call = (m, E, y) => wt(m, d, E, y);
  let c = !1;
  r === "post" ? l.scheduler = (m) => {
    Re(m, d && d.suspense);
  } : r !== "sync" && (c = !0, l.scheduler = (m, E) => {
    E ? m() : Po(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), c && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const u = Pu(e, t, l);
  return rs && (f ? f.push(u) : a && u()), u;
}
function id(e, t, n) {
  const s = this.proxy, o = le(e) ? e.includes(".") ? xa(s, e) : () => s[e] : e.bind(s, s);
  let r;
  j(t) ? r = t : (r = t.handler, n = t);
  const i = ms(this), l = Qr(o, r.bind(s), n);
  return i(), l;
}
function xa(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const ld = /* @__PURE__ */ Symbol("_vte"), ad = (e) => e.__isTeleport, cd = /* @__PURE__ */ Symbol("_leaveCb");
function Zr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Zr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function ud(e, t) {
  return j(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    de({ name: e.name }, t, { setup: e })
  ) : e;
}
function _a(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Di = /* @__PURE__ */ new WeakSet();
function Ii(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ks = /* @__PURE__ */ new WeakMap();
function Un(e, t, n, s, o = !1) {
  if (R(e)) {
    e.forEach(
      (y, M) => Un(
        y,
        t && (R(t) ? t[M] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (Kn(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Un(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? $o(s.component) : s.el, i = o ? null : r, { i: l, r: a } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    C(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, d = l.refs === Q ? l.refs = {} : l.refs, c = l.setupState, u = /* @__PURE__ */ W(c), m = c === Q ? Hl : (y) => process.env.NODE_ENV !== "production" && (J(u, y) && !/* @__PURE__ */ fe(u[y]) && C(
    `Template ref "${y}" used on a non-ref value. It will not work in the production build.`
  ), Di.has(u[y])) || Ii(d, y) ? !1 : J(u, y), E = (y, M) => !(process.env.NODE_ENV !== "production" && Di.has(y) || M && Ii(d, M));
  if (f != null && f !== a) {
    if (Pi(t), le(f))
      d[f] = null, m(f) && (c[f] = null);
    else if (/* @__PURE__ */ fe(f)) {
      const y = t;
      E(f, y.k) && (f.value = null), y.k && (d[y.k] = null);
    }
  }
  if (j(a))
    Sn(a, l, 12, [i, d]);
  else {
    const y = le(a), M = /* @__PURE__ */ fe(a);
    if (y || M) {
      const D = () => {
        if (e.f) {
          const I = y ? m(a) ? c[a] : d[a] : E(a) || !e.k ? a.value : d[e.k];
          if (o)
            R(I) && $r(I, r);
          else if (R(I))
            I.includes(r) || I.push(r);
          else if (y)
            d[a] = [r], m(a) && (c[a] = d[a]);
          else {
            const U = [r];
            E(a, e.k) && (a.value = U), e.k && (d[e.k] = U);
          }
        } else y ? (d[a] = i, m(a) && (c[a] = i)) : M ? (E(a, e.k) && (a.value = i), e.k && (d[e.k] = i)) : process.env.NODE_ENV !== "production" && C("Invalid template ref type:", a, `(${typeof a})`);
      };
      if (i) {
        const I = () => {
          D(), Ks.delete(e);
        };
        I.id = -1, Ks.set(e, I), Re(I, n);
      } else
        Pi(e), D();
    } else process.env.NODE_ENV !== "production" && C("Invalid template ref type:", a, `(${typeof a})`);
  }
}
function Pi(e) {
  const t = Ks.get(e);
  t && (t.flags |= 8, Ks.delete(e));
}
ds().requestIdleCallback;
ds().cancelIdleCallback;
const Kn = (e) => !!e.type.__asyncLoader, ei = (e) => e.type.__isKeepAlive;
function dd(e, t) {
  wa(e, "a", t);
}
function fd(e, t) {
  wa(e, "da", t);
}
function wa(e, t, n = he) {
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
      ei(o.parent.vnode) && pd(s, t, n, o), o = o.parent;
  }
}
function pd(e, t, n, s) {
  const o = Ro(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Na(() => {
    $r(s[t], o);
  }, n);
}
function Ro(e, t, n = he, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      ot();
      const l = ms(n), a = wt(t, n, e, i);
      return l(), rt(), a;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const o = Zt(Gr[e].replace(/ hook$/, ""));
    C(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Rt = (e) => (t, n = he) => {
  (!rs || e === "sp") && Ro(e, (...s) => t(...s), n);
}, hd = Rt("bm"), ti = Rt("m"), md = Rt(
  "bu"
), gd = Rt("u"), ni = Rt(
  "bum"
), Na = Rt("um"), vd = Rt(
  "sp"
), bd = Rt("rtg"), yd = Rt("rtc");
function Ed(e, t = he) {
  Ro("ec", e, t);
}
const xd = /* @__PURE__ */ Symbol.for("v-ndc");
function Go(e, t, n, s) {
  let o;
  const r = n, i = R(e);
  if (i || le(e)) {
    const l = i && /* @__PURE__ */ zt(e);
    let a = !1, f = !1;
    l && (a = !/* @__PURE__ */ Me(e), f = /* @__PURE__ */ it(e), e = Mo(e)), o = new Array(e.length);
    for (let d = 0, c = e.length; d < c; d++)
      o[d] = t(
        a ? f ? Nn(lt(e[d])) : lt(e[d]) : e[d],
        d,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && C(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, r);
  } else if (Y(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, f = l.length; a < f; a++) {
        const d = l[a];
        o[a] = t(e[d], d, a, r);
      }
    }
  else
    o = [];
  return o;
}
const br = (e) => e ? qa(e) ? $o(e) : br(e.parent) : null, ln = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ de(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ yt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ yt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ yt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ yt(e.refs) : e.refs,
    $parent: (e) => br(e.parent),
    $root: (e) => br(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ta(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Po(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ns.bind(e.proxy)),
    $watch: (e) => id.bind(e)
  })
), si = (e) => e === "_" || e === "$", Jo = (e, t) => e !== Q && !e.__isScriptSetup && J(e, t), ka = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: l, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (t[0] !== "$") {
      const u = i[t];
      if (u !== void 0)
        switch (u) {
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
        if (o !== Q && J(o, t))
          return i[t] = 2, o[t];
        if (J(r, t))
          return i[t] = 3, r[t];
        if (n !== Q && J(n, t))
          return i[t] = 4, n[t];
        yr && (i[t] = 0);
      }
    }
    const f = ln[t];
    let d, c;
    if (f)
      return t === "$attrs" ? (me(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && zs()) : process.env.NODE_ENV !== "production" && t === "$slots" && me(e, "get", t), f(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== Q && J(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      c = a.config.globalProperties, J(c, t)
    )
      return c[t];
    process.env.NODE_ENV !== "production" && Se && (!le(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Q && si(t[0]) && J(o, t) ? C(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Se && C(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return Jo(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && J(o, t) ? (C(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== Q && J(s, t) ? (s[t] = n, !0) : J(e.props, t) ? (process.env.NODE_ENV !== "production" && C(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && C(
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
    return !!(n[l] || e !== Q && l[0] !== "$" && J(e, l) || Jo(t, l) || J(r, l) || J(s, l) || J(ln, l) || J(o.config.globalProperties, l) || (a = i.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : J(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (ka.ownKeys = (e) => (C(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function _d(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ln).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ln[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ge
    });
  }), t;
}
function wd(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: ge
    });
  });
}
function Nd(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(/* @__PURE__ */ W(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (si(s[0])) {
        C(
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
        set: ge
      });
    }
  });
}
function Ri(e) {
  return R(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function kd() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? C(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let yr = !0;
function Od(e) {
  const t = Ta(e), n = e.proxy, s = e.ctx;
  yr = !1, t.beforeCreate && Vi(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: r,
    methods: i,
    watch: l,
    provide: a,
    inject: f,
    // lifecycle
    created: d,
    beforeMount: c,
    mounted: u,
    beforeUpdate: m,
    updated: E,
    activated: y,
    deactivated: M,
    beforeDestroy: D,
    beforeUnmount: I,
    destroyed: U,
    unmounted: ee,
    render: L,
    renderTracked: q,
    renderTriggered: ve,
    errorCaptured: ae,
    serverPrefetch: be,
    // public API
    expose: ke,
    inheritAttrs: Be,
    // assets
    components: _e,
    directives: Nt,
    filters: Vt
  } = t, Oe = process.env.NODE_ENV !== "production" ? kd() : null;
  if (process.env.NODE_ENV !== "production") {
    const [F] = e.propsOptions;
    if (F)
      for (const z in F)
        Oe("Props", z);
  }
  if (f && Td(f, s, Oe), i)
    for (const F in i) {
      const z = i[F];
      j(z) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(s, F, {
        value: z.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[F] = z.bind(n), process.env.NODE_ENV !== "production" && Oe("Methods", F)) : process.env.NODE_ENV !== "production" && C(
        `Method "${F}" has type "${typeof z}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !j(o) && C(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const F = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && Hr(F) && C(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Y(F))
      process.env.NODE_ENV !== "production" && C("data() should return an object.");
    else if (e.data = /* @__PURE__ */ qr(F), process.env.NODE_ENV !== "production")
      for (const z in F)
        Oe("Data", z), si(z[0]) || Object.defineProperty(s, z, {
          configurable: !0,
          enumerable: !0,
          get: () => F[z],
          set: ge
        });
  }
  if (yr = !0, r)
    for (const F in r) {
      const z = r[F], qe = j(z) ? z.bind(n, n) : j(z.get) ? z.get.bind(n, n) : ge;
      process.env.NODE_ENV !== "production" && qe === ge && C(`Computed property "${F}" has no getter.`);
      const dn = !j(z) && j(z.set) ? z.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        C(
          `Write operation failed: computed property "${F}" is readonly.`
        );
      } : ge, Jt = Ds({
        get: qe,
        set: dn
      });
      Object.defineProperty(s, F, {
        enumerable: !0,
        configurable: !0,
        get: () => Jt.value,
        set: (kt) => Jt.value = kt
      }), process.env.NODE_ENV !== "production" && Oe("Computed", F);
    }
  if (l)
    for (const F in l)
      Oa(l[F], s, n, F);
  if (a) {
    const F = j(a) ? a.call(n) : a;
    Reflect.ownKeys(F).forEach((z) => {
      nd(z, F[z]);
    });
  }
  d && Vi(d, e, "c");
  function te(F, z) {
    R(z) ? z.forEach((qe) => F(qe.bind(n))) : z && F(z.bind(n));
  }
  if (te(hd, c), te(ti, u), te(md, m), te(gd, E), te(dd, y), te(fd, M), te(Ed, ae), te(yd, q), te(bd, ve), te(ni, I), te(Na, ee), te(vd, be), R(ke))
    if (ke.length) {
      const F = e.exposed || (e.exposed = {});
      ke.forEach((z) => {
        Object.defineProperty(F, z, {
          get: () => n[z],
          set: (qe) => n[z] = qe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  L && e.render === ge && (e.render = L), Be != null && (e.inheritAttrs = Be), _e && (e.components = _e), Nt && (e.directives = Nt), be && _a(e);
}
function Td(e, t, n = ge) {
  R(e) && (e = Er(e));
  for (const s in e) {
    const o = e[s];
    let r;
    Y(o) ? "default" in o ? r = Cs(
      o.from || s,
      o.default,
      !0
    ) : r = Cs(o.from || s) : r = Cs(o), /* @__PURE__ */ fe(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, process.env.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Vi(e, t, n) {
  wt(
    R(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Oa(e, t, n, s) {
  let o = s.includes(".") ? xa(n, s) : () => n[s];
  if (le(e)) {
    const r = t[e];
    j(r) ? As(o, r) : process.env.NODE_ENV !== "production" && C(`Invalid watch handler specified by key "${e}"`, r);
  } else if (j(e))
    As(o, e.bind(n));
  else if (Y(e))
    if (R(e))
      e.forEach((r) => Oa(r, t, n, s));
    else {
      const r = j(e.handler) ? e.handler.bind(n) : t[e.handler];
      j(r) ? As(o, r, e) : process.env.NODE_ENV !== "production" && C(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else process.env.NODE_ENV !== "production" && C(`Invalid watch option: "${s}"`, e);
}
function Ta(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (f) => Ws(a, f, i, !0)
  ), Ws(a, t, i)), Y(t) && r.set(t, a), a;
}
function Ws(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && Ws(e, r, n, !0), o && o.forEach(
    (i) => Ws(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      process.env.NODE_ENV !== "production" && C(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Cd[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Cd = {
  data: $i,
  props: Hi,
  emits: Hi,
  // objects
  methods: $n,
  computed: $n,
  // lifecycle
  beforeCreate: Ce,
  created: Ce,
  beforeMount: Ce,
  mounted: Ce,
  beforeUpdate: Ce,
  updated: Ce,
  beforeDestroy: Ce,
  beforeUnmount: Ce,
  destroyed: Ce,
  unmounted: Ce,
  activated: Ce,
  deactivated: Ce,
  errorCaptured: Ce,
  serverPrefetch: Ce,
  // assets
  components: $n,
  directives: $n,
  // watch
  watch: Sd,
  // provide / inject
  provide: $i,
  inject: Ad
};
function $i(e, t) {
  return t ? e ? function() {
    return de(
      j(e) ? e.call(this, this) : e,
      j(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ad(e, t) {
  return $n(Er(e), Er(t));
}
function Er(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ce(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function $n(e, t) {
  return e ? de(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Hi(e, t) {
  return e ? R(e) && R(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : de(
    /* @__PURE__ */ Object.create(null),
    Ri(e),
    Ri(t ?? {})
  ) : t;
}
function Sd(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = de(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Ce(e[s], t[s]);
  return n;
}
function Ca() {
  return {
    app: null,
    config: {
      isNativeTag: Hl,
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
let Ld = 0;
function Md(e, t) {
  return function(s, o = null) {
    j(s) || (s = de({}, s)), o != null && !Y(o) && (process.env.NODE_ENV !== "production" && C("root props passed to app.mount() must be an object."), o = null);
    const r = Ca(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const f = r.app = {
      _uid: Ld++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Yi,
      get config() {
        return r.config;
      },
      set config(d) {
        process.env.NODE_ENV !== "production" && C(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...c) {
        return i.has(d) ? process.env.NODE_ENV !== "production" && C("Plugin has already been applied to target app.") : d && j(d.install) ? (i.add(d), d.install(f, ...c)) : j(d) ? (i.add(d), d(f, ...c)) : process.env.NODE_ENV !== "production" && C(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(d) {
        return r.mixins.includes(d) ? process.env.NODE_ENV !== "production" && C(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : r.mixins.push(d), f;
      },
      component(d, c) {
        return process.env.NODE_ENV !== "production" && kr(d, r.config), c ? (process.env.NODE_ENV !== "production" && r.components[d] && C(`Component "${d}" has already been registered in target app.`), r.components[d] = c, f) : r.components[d];
      },
      directive(d, c) {
        return process.env.NODE_ENV !== "production" && Ea(d), c ? (process.env.NODE_ENV !== "production" && r.directives[d] && C(`Directive "${d}" has already been registered in target app.`), r.directives[d] = c, f) : r.directives[d];
      },
      mount(d, c, u) {
        if (a)
          process.env.NODE_ENV !== "production" && C(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && d.__vue_app__ && C(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = f._ceVNode || Le(s, o);
          return m.appContext = r, u === !0 ? u = "svg" : u === !1 && (u = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            const E = Gt(m);
            E.el = null, e(E, d, u);
          }), e(m, d, u), a = !0, f._container = d, d.__vue_app__ = f, process.env.NODE_ENV !== "production" && (f._instance = m.component, qu(f, Yi)), $o(m.component);
        }
      },
      onUnmount(d) {
        process.env.NODE_ENV !== "production" && typeof d != "function" && C(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (wt(
          l,
          f._instance,
          16
        ), e(null, f._container), process.env.NODE_ENV !== "production" && (f._instance = null, Gu(f)), delete f._container.__vue_app__) : process.env.NODE_ENV !== "production" && C("Cannot unmount an app that is not mounted.");
      },
      provide(d, c) {
        return process.env.NODE_ENV !== "production" && d in r.provides && (J(r.provides, d) ? C(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : C(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[d] = c, f;
      },
      runWithContext(d) {
        const c = En;
        En = f;
        try {
          return d();
        } finally {
          En = c;
        }
      }
    };
    return f;
  };
}
let En = null;
const Dd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${tt(t)}Modifiers`] || e[`${qt(t)}Modifiers`];
function Id(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Q;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [c]
    } = e;
    if (d)
      if (!(t in d))
        (!c || !(Zt(tt(t)) in c)) && C(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Zt(tt(t))}" prop.`
        );
      else {
        const u = d[t];
        j(u) && (u(...n) || C(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && Dd(s, t.slice(7));
  if (i && (i.trim && (o = n.map((d) => le(d) ? d.trim() : d)), i.number && (o = n.map(So))), process.env.NODE_ENV !== "production" && ed(e, t, o), process.env.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && s[Zt(d)] && C(
      `Event "${d}" is emitted in component ${gs(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${qt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = Zt(t)] || // also try camelCase event handler (#2249)
  s[l = Zt(tt(t))];
  !a && r && (a = s[l = Zt(qt(t))]), a && wt(
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
    e.emitted[l] = !0, wt(
      f,
      e,
      6,
      o
    );
  }
}
const Pd = /* @__PURE__ */ new WeakMap();
function Aa(e, t, n = !1) {
  const s = n ? Pd : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, l = !1;
  if (!j(e)) {
    const a = (f) => {
      const d = Aa(f, t, !0);
      d && (l = !0, de(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (Y(e) && s.set(e, null), null) : (R(r) ? r.forEach((a) => i[a] = null) : de(i, r), Y(e) && s.set(e, i), i);
}
function Vo(e, t) {
  return !e || !cs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), J(e, t[0].toLowerCase() + t.slice(1)) || J(e, qt(t)) || J(e, t));
}
let xr = !1;
function zs() {
  xr = !0;
}
function ji(e) {
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
    renderCache: d,
    props: c,
    data: u,
    setupState: m,
    ctx: E,
    inheritAttrs: y
  } = e, M = Us(e);
  let D, I;
  process.env.NODE_ENV !== "production" && (xr = !1);
  try {
    if (n.shapeFlag & 4) {
      const L = o || s, q = process.env.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(L, {
        get(ve, ae, be) {
          return C(
            `Property '${String(
              ae
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ve, ae, be);
        }
      }) : L;
      D = Qe(
        f.call(
          q,
          L,
          d,
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ yt(c) : c,
          m,
          u,
          E
        )
      ), I = l;
    } else {
      const L = t;
      process.env.NODE_ENV !== "production" && l === c && zs(), D = Qe(
        L.length > 1 ? L(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ yt(c) : c,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return zs(), /* @__PURE__ */ yt(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : L(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ yt(c) : c,
          null
        )
      ), I = t.props ? l : Rd(l);
    }
  } catch (L) {
    Wn.length = 0, fs(L, e, 1), D = Le(We);
  }
  let U = D, ee;
  if (process.env.NODE_ENV !== "production" && D.patchFlag > 0 && D.patchFlag & 2048 && ([U, ee] = Sa(D)), I && y !== !1) {
    const L = Object.keys(I), { shapeFlag: q } = U;
    if (L.length) {
      if (q & 7)
        r && L.some(Vs) && (I = Vd(
          I,
          r
        )), U = Gt(U, I, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !xr && U.type !== We) {
        const ve = Object.keys(l), ae = [], be = [];
        for (let ke = 0, Be = ve.length; ke < Be; ke++) {
          const _e = ve[ke];
          cs(_e) ? Vs(_e) || ae.push(_e[2].toLowerCase() + _e.slice(3)) : be.push(_e);
        }
        be.length && C(
          `Extraneous non-props attributes (${be.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), ae.length && C(
          `Extraneous non-emits event listeners (${ae.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Bi(U) && C(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), U = Gt(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Bi(U) && C(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Zr(U, n.transition)), process.env.NODE_ENV !== "production" && ee ? ee(U) : D = U, Us(M), D;
}
const Sa = (e) => {
  const t = e.children, n = e.dynamicChildren, s = oi(t, !1);
  if (s) {
    if (process.env.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return Sa(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (l) => {
    t[o] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Qe(s), i];
};
function oi(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (kn(o)) {
      if (o.type !== We || o.children === "v-if") {
        if (n)
          return;
        if (n = o, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return oi(n.children);
      }
    } else
      return;
  }
  return n;
}
const Rd = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || cs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Vd = (e, t) => {
  const n = {};
  for (const s in e)
    (!Vs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Bi = (e) => e.shapeFlag & 7 || e.type === We;
function $d(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: l, patchFlag: a } = t, f = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (o || l) && Et || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Fi(s, i, f) : !!i;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let c = 0; c < d.length; c++) {
        const u = d[c];
        if (La(i, s, u) && !Vo(f, u))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? Fi(s, i, f) : !0 : !!i;
  return !1;
}
function Fi(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (La(t, e, r) && !Vo(n, r))
      return !0;
  }
  return !1;
}
function La(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && Y(s) && Y(o) ? !An(s, o) : s !== o;
}
function Hd({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Ma = {}, Da = () => Object.create(Ma), Ia = (e) => Object.getPrototypeOf(e) === Ma;
function jd(e, t, n, s = !1) {
  const o = {}, r = Da();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Pa(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  process.env.NODE_ENV !== "production" && Va(t || {}, o, e), n ? e.props = s ? o : /* @__PURE__ */ Ou(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function Bd(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Fd(e, t, n, s) {
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
    !(process.env.NODE_ENV !== "production" && Bd(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let c = 0; c < d.length; c++) {
        let u = d[c];
        if (Vo(e.emitsOptions, u))
          continue;
        const m = t[u];
        if (a)
          if (J(r, u))
            m !== r[u] && (r[u] = m, f = !0);
          else {
            const E = tt(u);
            o[E] = _r(
              a,
              l,
              E,
              m,
              e,
              !1
            );
          }
        else
          m !== r[u] && (r[u] = m, f = !0);
      }
    }
  } else {
    Pa(e, t, o, r) && (f = !0);
    let d;
    for (const c in l)
      (!t || // for camelCase
      !J(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = qt(c)) === c || !J(t, d))) && (a ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[c] = _r(
        a,
        l,
        c,
        void 0,
        e,
        !0
      )) : delete o[c]);
    if (r !== l)
      for (const c in r)
        (!t || !J(t, c)) && (delete r[c], f = !0);
  }
  f && bt(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Va(t || {}, o, e);
}
function Pa(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (jn(a))
        continue;
      const f = t[a];
      let d;
      o && J(o, d = tt(a)) ? !r || !r.includes(d) ? n[d] = f : (l || (l = {}))[d] = f : Vo(e.emitsOptions, a) || (!(a in s) || f !== s[a]) && (s[a] = f, i = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ W(n), f = l || Q;
    for (let d = 0; d < r.length; d++) {
      const c = r[d];
      n[c] = _r(
        o,
        a,
        c,
        f[c],
        e,
        !J(f, c)
      );
    }
  }
  return i;
}
function _r(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const l = J(i, "default");
    if (l && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && j(a)) {
        const { propsDefaults: f } = o;
        if (n in f)
          s = f[n];
        else {
          const d = ms(o);
          s = f[n] = a.call(
            null,
            t
          ), d();
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
    ] && (s === "" || s === qt(n)) && (s = !0));
  }
  return s;
}
const Ud = /* @__PURE__ */ new WeakMap();
function Ra(e, t, n = !1) {
  const s = n ? Ud : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, l = [];
  let a = !1;
  if (!j(e)) {
    const d = (c) => {
      a = !0;
      const [u, m] = Ra(c, t, !0);
      de(i, u), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!r && !a)
    return Y(e) && s.set(e, bn), bn;
  if (R(r))
    for (let d = 0; d < r.length; d++) {
      process.env.NODE_ENV !== "production" && !le(r[d]) && C("props must be strings when using array syntax.", r[d]);
      const c = tt(r[d]);
      Ui(c) && (i[c] = Q);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !Y(r) && C("invalid props options", r);
    for (const d in r) {
      const c = tt(d);
      if (Ui(c)) {
        const u = r[d], m = i[c] = R(u) || j(u) ? { type: u } : de({}, u), E = m.type;
        let y = !1, M = !0;
        if (R(E))
          for (let D = 0; D < E.length; ++D) {
            const I = E[D], U = j(I) && I.name;
            if (U === "Boolean") {
              y = !0;
              break;
            } else U === "String" && (M = !1);
          }
        else
          y = j(E) && E.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = y, m[
          1
          /* shouldCastTrue */
        ] = M, (y || J(m, "default")) && l.push(c);
      }
    }
  }
  const f = [i, l];
  return Y(e) && s.set(e, f), f;
}
function Ui(e) {
  return e[0] !== "$" && !jn(e) ? !0 : (process.env.NODE_ENV !== "production" && C(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Kd(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Va(e, t, n) {
  const s = /* @__PURE__ */ W(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => tt(i));
  for (const i in o) {
    let l = o[i];
    l != null && Wd(
      i,
      s[i],
      l,
      process.env.NODE_ENV !== "production" ? /* @__PURE__ */ yt(s) : s,
      !r.includes(i)
    );
  }
}
function Wd(e, t, n, s, o) {
  const { type: r, required: i, validator: l, skipCheck: a } = n;
  if (i && o) {
    C('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !a) {
      let f = !1;
      const d = R(r) ? r : [r], c = [];
      for (let u = 0; u < d.length && !f; u++) {
        const { valid: m, expectedType: E } = qd(t, d[u]);
        c.push(E || ""), f = m;
      }
      if (!f) {
        C(Gd(e, t, c));
        return;
      }
    }
    l && !l(t, s) && C('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const zd = /* @__PURE__ */ Pt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function qd(e, t) {
  let n;
  const s = Kd(t);
  if (s === "null")
    n = e === null;
  else if (zd(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = Y(e) : s === "Array" ? n = R(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Gd(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Ao).join(" | ")}`;
  const o = n[0], r = jr(t), i = Ki(t, o), l = Ki(t, r);
  return n.length === 1 && Wi(o) && !Jd(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, Wi(r) && (s += `with value ${l}.`), s;
}
function Ki(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Wi(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Jd(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const ri = (e) => e === "_" || e === "_ctx" || e === "$stable", ii = (e) => R(e) ? e.map(Qe) : [Qe(e)], Yd = (e, t, n) => {
  if (t._n)
    return t;
  const s = td((...o) => (process.env.NODE_ENV !== "production" && he && !(n === null && Se) && !(n && n.root !== he.root) && C(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), ii(t(...o))), n);
  return s._c = !1, s;
}, $a = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (ri(o)) continue;
    const r = e[o];
    if (j(r))
      t[o] = Yd(o, r, s);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && C(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = ii(r);
      t[o] = () => i;
    }
  }
}, Ha = (e, t) => {
  process.env.NODE_ENV !== "production" && !ei(e.vnode) && C(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = ii(t);
  e.slots.default = () => n;
}, wr = (e, t, n) => {
  for (const s in t)
    (n || !ri(s)) && (e[s] = t[s]);
}, Xd = (e, t, n) => {
  const s = e.slots = Da();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (wr(s, t, n), n && $s(s, "_", o, !0)) : $a(t, s);
  } else t && Ha(e, t);
}, Qd = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = Q;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Et ? (wr(o, t, n), bt(e, "set", "$slots")) : n && l === 1 ? r = !1 : wr(o, t, n) : (r = !t.$stable, $a(t, o)), i = t;
  } else t && (Ha(e, t), i = { default: 1 });
  if (r)
    for (const l in o)
      !ri(l) && i[l] == null && delete o[l];
};
let In, Lt;
function pn(e, t) {
  e.appContext.config.performance && qs() && Lt.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Qu(e, t, qs() ? Lt.now() : Date.now());
}
function hn(e, t) {
  if (e.appContext.config.performance && qs()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end", o = `<${gs(e, e.type)}> ${t}`;
    Lt.mark(s), Lt.measure(o, n, s), Lt.clearMeasures(o), Lt.clearMarks(n), Lt.clearMarks(s);
  }
  process.env.NODE_ENV !== "production" && Zu(e, t, qs() ? Lt.now() : Date.now());
}
function qs() {
  return In !== void 0 || (typeof window < "u" && window.performance ? (In = !0, Lt = window.performance) : In = !1), In;
}
function Zd() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Re = of;
function ef(e) {
  return tf(e);
}
function tf(e, t) {
  Zd();
  const n = ds();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Yr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: a,
    setText: f,
    setElementText: d,
    parentNode: c,
    nextSibling: u,
    setScopeId: m = ge,
    insertStaticContent: E
  } = e, y = (p, h, v, N = null, x = null, _ = null, A = void 0, T = null, O = process.env.NODE_ENV !== "production" && Et ? !1 : !!h.dynamicChildren) => {
    if (p === h)
      return;
    p && !Pn(p, h) && (N = g(p), at(p, x, _, !0), p = null), h.patchFlag === -2 && (O = !1, h.dynamicChildren = null);
    const { type: w, ref: H, shapeFlag: S } = h;
    switch (w) {
      case hs:
        M(p, h, v, N);
        break;
      case We:
        D(p, h, v, N);
        break;
      case Ls:
        p == null ? I(h, v, N, A) : process.env.NODE_ENV !== "production" && U(p, h, v, A);
        break;
      case Ue:
        Nt(
          p,
          h,
          v,
          N,
          x,
          _,
          A,
          T,
          O
        );
        break;
      default:
        S & 1 ? q(
          p,
          h,
          v,
          N,
          x,
          _,
          A,
          T,
          O
        ) : S & 6 ? Vt(
          p,
          h,
          v,
          N,
          x,
          _,
          A,
          T,
          O
        ) : S & 64 || S & 128 ? w.process(
          p,
          h,
          v,
          N,
          x,
          _,
          A,
          T,
          O,
          ye
        ) : process.env.NODE_ENV !== "production" && C("Invalid VNode type:", w, `(${typeof w})`);
    }
    H != null && x ? Un(H, p && p.ref, _, h || p, !h) : H == null && p && p.ref != null && Un(p.ref, null, _, p, !0);
  }, M = (p, h, v, N) => {
    if (p == null)
      s(
        h.el = l(h.children),
        v,
        N
      );
    else {
      const x = h.el = p.el;
      h.children !== p.children && f(x, h.children);
    }
  }, D = (p, h, v, N) => {
    p == null ? s(
      h.el = a(h.children || ""),
      v,
      N
    ) : h.el = p.el;
  }, I = (p, h, v, N) => {
    [p.el, p.anchor] = E(
      p.children,
      h,
      v,
      N,
      p.el,
      p.anchor
    );
  }, U = (p, h, v, N) => {
    if (h.children !== p.children) {
      const x = u(p.anchor);
      L(p), [h.el, h.anchor] = E(
        h.children,
        v,
        x,
        N
      );
    } else
      h.el = p.el, h.anchor = p.anchor;
  }, ee = ({ el: p, anchor: h }, v, N) => {
    let x;
    for (; p && p !== h; )
      x = u(p), s(p, v, N), p = x;
    s(h, v, N);
  }, L = ({ el: p, anchor: h }) => {
    let v;
    for (; p && p !== h; )
      v = u(p), o(p), p = v;
    o(h);
  }, q = (p, h, v, N, x, _, A, T, O) => {
    if (h.type === "svg" ? A = "svg" : h.type === "math" && (A = "mathml"), p == null)
      ve(
        h,
        v,
        N,
        x,
        _,
        A,
        T,
        O
      );
    else {
      const w = p.el && p.el._isVueCE ? p.el : null;
      try {
        w && w._beginPatch(), ke(
          p,
          h,
          x,
          _,
          A,
          T,
          O
        );
      } finally {
        w && w._endPatch();
      }
    }
  }, ve = (p, h, v, N, x, _, A, T) => {
    let O, w;
    const { props: H, shapeFlag: S, transition: $, dirs: B } = p;
    if (O = p.el = i(
      p.type,
      _,
      H && H.is,
      H
    ), S & 8 ? d(O, p.children) : S & 16 && be(
      p.children,
      O,
      null,
      N,
      x,
      Yo(p, _),
      A,
      T
    ), B && Yt(p, null, N, "created"), ae(O, p, p.scopeId, A, N), H) {
      for (const ne in H)
        ne !== "value" && !jn(ne) && r(O, ne, null, H[ne], _, N);
      "value" in H && r(O, "value", null, H.value, _), (w = H.onVnodeBeforeMount) && ft(w, N, p);
    }
    process.env.NODE_ENV !== "production" && ($s(O, "__vnode", p, !0), $s(O, "__vueParentComponent", N, !0)), B && Yt(p, null, N, "beforeMount");
    const G = nf(x, $);
    G && $.beforeEnter(O), s(O, h, v), ((w = H && H.onVnodeMounted) || G || B) && Re(() => {
      w && ft(w, N, p), G && $.enter(O), B && Yt(p, null, N, "mounted");
    }, x);
  }, ae = (p, h, v, N, x) => {
    if (v && m(p, v), N)
      for (let _ = 0; _ < N.length; _++)
        m(p, N[_]);
    if (x) {
      let _ = x.subTree;
      if (process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && (_ = oi(_.children) || _), h === _ || Fa(_.type) && (_.ssContent === h || _.ssFallback === h)) {
        const A = x.vnode;
        ae(
          p,
          A,
          A.scopeId,
          A.slotScopeIds,
          x.parent
        );
      }
    }
  }, be = (p, h, v, N, x, _, A, T, O = 0) => {
    for (let w = O; w < p.length; w++) {
      const H = p[w] = T ? Mt(p[w]) : Qe(p[w]);
      y(
        null,
        H,
        h,
        v,
        N,
        x,
        _,
        A,
        T
      );
    }
  }, ke = (p, h, v, N, x, _, A) => {
    const T = h.el = p.el;
    process.env.NODE_ENV !== "production" && (T.__vnode = h);
    let { patchFlag: O, dynamicChildren: w, dirs: H } = h;
    O |= p.patchFlag & 16;
    const S = p.props || Q, $ = h.props || Q;
    let B;
    if (v && Xt(v, !1), (B = $.onVnodeBeforeUpdate) && ft(B, v, h, p), H && Yt(h, p, v, "beforeUpdate"), v && Xt(v, !0), process.env.NODE_ENV !== "production" && Et && (O = 0, A = !1, w = null), (S.innerHTML && $.innerHTML == null || S.textContent && $.textContent == null) && d(T, ""), w ? (Be(
      p.dynamicChildren,
      w,
      T,
      v,
      N,
      Yo(h, x),
      _
    ), process.env.NODE_ENV !== "production" && Ss(p, h)) : A || qe(
      p,
      h,
      T,
      null,
      v,
      N,
      Yo(h, x),
      _,
      !1
    ), O > 0) {
      if (O & 16)
        _e(T, S, $, v, x);
      else if (O & 2 && S.class !== $.class && r(T, "class", null, $.class, x), O & 4 && r(T, "style", S.style, $.style, x), O & 8) {
        const G = h.dynamicProps;
        for (let ne = 0; ne < G.length; ne++) {
          const Z = G[ne], Ie = S[Z], Pe = $[Z];
          (Pe !== Ie || Z === "value") && r(T, Z, Ie, Pe, x, v);
        }
      }
      O & 1 && p.children !== h.children && d(T, h.children);
    } else !A && w == null && _e(T, S, $, v, x);
    ((B = $.onVnodeUpdated) || H) && Re(() => {
      B && ft(B, v, h, p), H && Yt(h, p, v, "updated");
    }, N);
  }, Be = (p, h, v, N, x, _, A) => {
    for (let T = 0; T < h.length; T++) {
      const O = p[T], w = h[T], H = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === Ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pn(O, w) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 198) ? c(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      y(
        O,
        w,
        H,
        null,
        N,
        x,
        _,
        A,
        !0
      );
    }
  }, _e = (p, h, v, N, x) => {
    if (h !== v) {
      if (h !== Q)
        for (const _ in h)
          !jn(_) && !(_ in v) && r(
            p,
            _,
            h[_],
            null,
            x,
            N
          );
      for (const _ in v) {
        if (jn(_)) continue;
        const A = v[_], T = h[_];
        A !== T && _ !== "value" && r(p, _, T, A, x, N);
      }
      "value" in v && r(p, "value", h.value, v.value, x);
    }
  }, Nt = (p, h, v, N, x, _, A, T, O) => {
    const w = h.el = p ? p.el : l(""), H = h.anchor = p ? p.anchor : l("");
    let { patchFlag: S, dynamicChildren: $, slotScopeIds: B } = h;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Et || S & 2048) && (S = 0, O = !1, $ = null), B && (T = T ? T.concat(B) : B), p == null ? (s(w, v, N), s(H, v, N), be(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      v,
      H,
      x,
      _,
      A,
      T,
      O
    )) : S > 0 && S & 64 && $ && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === $.length ? (Be(
      p.dynamicChildren,
      $,
      v,
      x,
      _,
      A,
      T
    ), process.env.NODE_ENV !== "production" ? Ss(p, h) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (h.key != null || x && h === x.subTree) && Ss(
        p,
        h,
        !0
        /* shallow */
      )
    )) : qe(
      p,
      h,
      v,
      H,
      x,
      _,
      A,
      T,
      O
    );
  }, Vt = (p, h, v, N, x, _, A, T, O) => {
    h.slotScopeIds = T, p == null ? h.shapeFlag & 512 ? x.ctx.activate(
      h,
      v,
      N,
      A,
      O
    ) : Oe(
      h,
      v,
      N,
      x,
      _,
      A,
      O
    ) : te(p, h, O);
  }, Oe = (p, h, v, N, x, _, A) => {
    const T = p.component = pf(
      p,
      N,
      x
    );
    if (process.env.NODE_ENV !== "production" && T.type.__hmrId && Uu(T), process.env.NODE_ENV !== "production" && (ks(p), pn(T, "mount")), ei(p) && (T.ctx.renderer = ye), process.env.NODE_ENV !== "production" && pn(T, "init"), mf(T, !1, A), process.env.NODE_ENV !== "production" && hn(T, "init"), process.env.NODE_ENV !== "production" && Et && (p.el = null), T.asyncDep) {
      if (x && x.registerDep(T, F, A), !p.el) {
        const O = T.subTree = Le(We);
        D(null, O, h, v), p.placeholder = O.el;
      }
    } else
      F(
        T,
        p,
        h,
        v,
        x,
        _,
        A
      );
    process.env.NODE_ENV !== "production" && (Os(), hn(T, "mount"));
  }, te = (p, h, v) => {
    const N = h.component = p.component;
    if ($d(p, h, v))
      if (N.asyncDep && !N.asyncResolved) {
        process.env.NODE_ENV !== "production" && ks(h), z(N, h, v), process.env.NODE_ENV !== "production" && Os();
        return;
      } else
        N.next = h, N.update();
    else
      h.el = p.el, N.vnode = h;
  }, F = (p, h, v, N, x, _, A) => {
    const T = () => {
      if (p.isMounted) {
        let { next: S, bu: $, u: B, parent: G, vnode: ne } = p;
        {
          const ut = ja(p);
          if (ut) {
            S && (S.el = ne.el, z(p, S, A)), ut.asyncDep.then(() => {
              Re(() => {
                p.isUnmounted || w();
              }, x);
            });
            return;
          }
        }
        let Z = S, Ie;
        process.env.NODE_ENV !== "production" && ks(S || p.vnode), Xt(p, !1), S ? (S.el = ne.el, z(p, S, A)) : S = ne, $ && mn($), (Ie = S.props && S.props.onVnodeBeforeUpdate) && ft(Ie, G, S, ne), Xt(p, !0), process.env.NODE_ENV !== "production" && pn(p, "render");
        const Pe = ji(p);
        process.env.NODE_ENV !== "production" && hn(p, "render");
        const ct = p.subTree;
        p.subTree = Pe, process.env.NODE_ENV !== "production" && pn(p, "patch"), y(
          ct,
          Pe,
          // parent may have changed if it's in a teleport
          c(ct.el),
          // anchor may have changed if it's in a fragment
          g(ct),
          p,
          x,
          _
        ), process.env.NODE_ENV !== "production" && hn(p, "patch"), S.el = Pe.el, Z === null && Hd(p, Pe.el), B && Re(B, x), (Ie = S.props && S.props.onVnodeUpdated) && Re(
          () => ft(Ie, G, S, ne),
          x
        ), process.env.NODE_ENV !== "production" && va(p), process.env.NODE_ENV !== "production" && Os();
      } else {
        let S;
        const { el: $, props: B } = h, { bm: G, m: ne, parent: Z, root: Ie, type: Pe } = p, ct = Kn(h);
        Xt(p, !1), G && mn(G), !ct && (S = B && B.onVnodeBeforeMount) && ft(S, Z, h), Xt(p, !0);
        {
          Ie.ce && Ie.ce._hasShadowRoot() && Ie.ce._injectChildStyle(Pe), process.env.NODE_ENV !== "production" && pn(p, "render");
          const ut = p.subTree = ji(p);
          process.env.NODE_ENV !== "production" && hn(p, "render"), process.env.NODE_ENV !== "production" && pn(p, "patch"), y(
            null,
            ut,
            v,
            N,
            p,
            x,
            _
          ), process.env.NODE_ENV !== "production" && hn(p, "patch"), h.el = ut.el;
        }
        if (ne && Re(ne, x), !ct && (S = B && B.onVnodeMounted)) {
          const ut = h;
          Re(
            () => ft(S, Z, ut),
            x
          );
        }
        (h.shapeFlag & 256 || Z && Kn(Z.vnode) && Z.vnode.shapeFlag & 256) && p.a && Re(p.a, x), p.isMounted = !0, process.env.NODE_ENV !== "production" && Ju(p), h = v = N = null;
      }
    };
    p.scope.on();
    const O = p.effect = new Wl(T);
    p.scope.off();
    const w = p.update = O.run.bind(O), H = p.job = O.runIfDirty.bind(O);
    H.i = p, H.id = p.uid, O.scheduler = () => Po(H), Xt(p, !0), process.env.NODE_ENV !== "production" && (O.onTrack = p.rtc ? (S) => mn(p.rtc, S) : void 0, O.onTrigger = p.rtg ? (S) => mn(p.rtg, S) : void 0), w();
  }, z = (p, h, v) => {
    h.component = p;
    const N = p.vnode.props;
    p.vnode = h, p.next = null, Fd(p, h.props, N, v), Qd(p, h.children, v), ot(), Li(p), rt();
  }, qe = (p, h, v, N, x, _, A, T, O = !1) => {
    const w = p && p.children, H = p ? p.shapeFlag : 0, S = h.children, { patchFlag: $, shapeFlag: B } = h;
    if ($ > 0) {
      if ($ & 128) {
        Jt(
          w,
          S,
          v,
          N,
          x,
          _,
          A,
          T,
          O
        );
        return;
      } else if ($ & 256) {
        dn(
          w,
          S,
          v,
          N,
          x,
          _,
          A,
          T,
          O
        );
        return;
      }
    }
    B & 8 ? (H & 16 && V(w, x, _), S !== w && d(v, S)) : H & 16 ? B & 16 ? Jt(
      w,
      S,
      v,
      N,
      x,
      _,
      A,
      T,
      O
    ) : V(w, x, _, !0) : (H & 8 && d(v, ""), B & 16 && be(
      S,
      v,
      N,
      x,
      _,
      A,
      T,
      O
    ));
  }, dn = (p, h, v, N, x, _, A, T, O) => {
    p = p || bn, h = h || bn;
    const w = p.length, H = h.length, S = Math.min(w, H);
    let $;
    for ($ = 0; $ < S; $++) {
      const B = h[$] = O ? Mt(h[$]) : Qe(h[$]);
      y(
        p[$],
        B,
        v,
        null,
        x,
        _,
        A,
        T,
        O
      );
    }
    w > H ? V(
      p,
      x,
      _,
      !0,
      !1,
      S
    ) : be(
      h,
      v,
      N,
      x,
      _,
      A,
      T,
      O,
      S
    );
  }, Jt = (p, h, v, N, x, _, A, T, O) => {
    let w = 0;
    const H = h.length;
    let S = p.length - 1, $ = H - 1;
    for (; w <= S && w <= $; ) {
      const B = p[w], G = h[w] = O ? Mt(h[w]) : Qe(h[w]);
      if (Pn(B, G))
        y(
          B,
          G,
          v,
          null,
          x,
          _,
          A,
          T,
          O
        );
      else
        break;
      w++;
    }
    for (; w <= S && w <= $; ) {
      const B = p[S], G = h[$] = O ? Mt(h[$]) : Qe(h[$]);
      if (Pn(B, G))
        y(
          B,
          G,
          v,
          null,
          x,
          _,
          A,
          T,
          O
        );
      else
        break;
      S--, $--;
    }
    if (w > S) {
      if (w <= $) {
        const B = $ + 1, G = B < H ? h[B].el : N;
        for (; w <= $; )
          y(
            null,
            h[w] = O ? Mt(h[w]) : Qe(h[w]),
            v,
            G,
            x,
            _,
            A,
            T,
            O
          ), w++;
      }
    } else if (w > $)
      for (; w <= S; )
        at(p[w], x, _, !0), w++;
    else {
      const B = w, G = w, ne = /* @__PURE__ */ new Map();
      for (w = G; w <= $; w++) {
        const Te = h[w] = O ? Mt(h[w]) : Qe(h[w]);
        Te.key != null && (process.env.NODE_ENV !== "production" && ne.has(Te.key) && C(
          "Duplicate keys found during update:",
          JSON.stringify(Te.key),
          "Make sure keys are unique."
        ), ne.set(Te.key, w));
      }
      let Z, Ie = 0;
      const Pe = $ - G + 1;
      let ct = !1, ut = 0;
      const Mn = new Array(Pe);
      for (w = 0; w < Pe; w++) Mn[w] = 0;
      for (w = B; w <= S; w++) {
        const Te = p[w];
        if (Ie >= Pe) {
          at(Te, x, _, !0);
          continue;
        }
        let dt;
        if (Te.key != null)
          dt = ne.get(Te.key);
        else
          for (Z = G; Z <= $; Z++)
            if (Mn[Z - G] === 0 && Pn(Te, h[Z])) {
              dt = Z;
              break;
            }
        dt === void 0 ? at(Te, x, _, !0) : (Mn[dt - G] = w + 1, dt >= ut ? ut = dt : ct = !0, y(
          Te,
          h[dt],
          v,
          null,
          x,
          _,
          A,
          T,
          O
        ), Ie++);
      }
      const xi = ct ? sf(Mn) : bn;
      for (Z = xi.length - 1, w = Pe - 1; w >= 0; w--) {
        const Te = G + w, dt = h[Te], _i = h[Te + 1], wi = Te + 1 < H ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          _i.el || Ba(_i)
        ) : N;
        Mn[w] === 0 ? y(
          null,
          dt,
          v,
          wi,
          x,
          _,
          A,
          T,
          O
        ) : ct && (Z < 0 || w !== xi[Z] ? kt(dt, v, wi, 2) : Z--);
      }
    }
  }, kt = (p, h, v, N, x = null) => {
    const { el: _, type: A, transition: T, children: O, shapeFlag: w } = p;
    if (w & 6) {
      kt(p.component.subTree, h, v, N);
      return;
    }
    if (w & 128) {
      p.suspense.move(h, v, N);
      return;
    }
    if (w & 64) {
      A.move(p, h, v, ye);
      return;
    }
    if (A === Ue) {
      s(_, h, v);
      for (let S = 0; S < O.length; S++)
        kt(O[S], h, v, N);
      s(p.anchor, h, v);
      return;
    }
    if (A === Ls) {
      ee(p, h, v);
      return;
    }
    if (N !== 2 && w & 1 && T)
      if (N === 0)
        T.beforeEnter(_), s(_, h, v), Re(() => T.enter(_), x);
      else {
        const { leave: S, delayLeave: $, afterLeave: B } = T, G = () => {
          p.ctx.isUnmounted ? o(_) : s(_, h, v);
        }, ne = () => {
          _._isLeaving && _[cd](
            !0
            /* cancelled */
          ), S(_, () => {
            G(), B && B();
          });
        };
        $ ? $(_, G, ne) : ne();
      }
    else
      s(_, h, v);
  }, at = (p, h, v, N = !1, x = !1) => {
    const {
      type: _,
      props: A,
      ref: T,
      children: O,
      dynamicChildren: w,
      shapeFlag: H,
      patchFlag: S,
      dirs: $,
      cacheIndex: B
    } = p;
    if (S === -2 && (x = !1), T != null && (ot(), Un(T, null, v, p, !0), rt()), B != null && (h.renderCache[B] = void 0), H & 256) {
      h.ctx.deactivate(p);
      return;
    }
    const G = H & 1 && $, ne = !Kn(p);
    let Z;
    if (ne && (Z = A && A.onVnodeBeforeUnmount) && ft(Z, h, p), H & 6)
      Bo(p.component, v, N);
    else {
      if (H & 128) {
        p.suspense.unmount(v, N);
        return;
      }
      G && Yt(p, null, h, "beforeUnmount"), H & 64 ? p.type.remove(
        p,
        h,
        v,
        ye,
        N
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Ue || S > 0 && S & 64) ? V(
        w,
        h,
        v,
        !1,
        !0
      ) : (_ === Ue && S & 384 || !x && H & 16) && V(O, h, v), N && Ln(p);
    }
    (ne && (Z = A && A.onVnodeUnmounted) || G) && Re(() => {
      Z && ft(Z, h, p), G && Yt(p, null, h, "unmounted");
    }, v);
  }, Ln = (p) => {
    const { type: h, el: v, anchor: N, transition: x } = p;
    if (h === Ue) {
      process.env.NODE_ENV !== "production" && p.patchFlag > 0 && p.patchFlag & 2048 && x && !x.persisted ? p.children.forEach((A) => {
        A.type === We ? o(A.el) : Ln(A);
      }) : jo(v, N);
      return;
    }
    if (h === Ls) {
      L(p);
      return;
    }
    const _ = () => {
      o(v), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (p.shapeFlag & 1 && x && !x.persisted) {
      const { leave: A, delayLeave: T } = x, O = () => A(v, _);
      T ? T(p.el, _, O) : O();
    } else
      _();
  }, jo = (p, h) => {
    let v;
    for (; p !== h; )
      v = u(p), o(p), p = v;
    o(h);
  }, Bo = (p, h, v) => {
    process.env.NODE_ENV !== "production" && p.type.__hmrId && Ku(p);
    const { bum: N, scope: x, job: _, subTree: A, um: T, m: O, a: w } = p;
    zi(O), zi(w), N && mn(N), x.stop(), _ && (_.flags |= 8, at(A, p, h, v)), T && Re(T, h), Re(() => {
      p.isUnmounted = !0;
    }, h), process.env.NODE_ENV !== "production" && Xu(p);
  }, V = (p, h, v, N = !1, x = !1, _ = 0) => {
    for (let A = _; A < p.length; A++)
      at(p[A], h, v, N, x);
  }, g = (p) => {
    if (p.shapeFlag & 6)
      return g(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const h = u(p.anchor || p.el), v = h && h[ld];
    return v ? u(v) : h;
  };
  let P = !1;
  const De = (p, h, v) => {
    let N;
    p == null ? h._vnode && (at(h._vnode, null, null, !0), N = h._vnode.component) : y(
      h._vnode || null,
      p,
      h,
      null,
      null,
      null,
      v
    ), h._vnode = p, P || (P = !0, Li(N), ha(), P = !1);
  }, ye = {
    p: y,
    um: at,
    m: kt,
    r: Ln,
    mt: Oe,
    mc: be,
    pc: qe,
    pbc: Be,
    n: g,
    o: e
  };
  return {
    render: De,
    hydrate: void 0,
    createApp: Md(De)
  };
}
function Yo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Xt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function nf(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ss(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (R(s) && R(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[r] = Mt(o[r]), l.el = i.el), !n && l.patchFlag !== -2 && Ss(i, l)), l.type === hs && (l.patchFlag === -1 && (l = o[r] = Mt(l)), l.el = i.el), l.type === We && !l.el && (l.el = i.el), process.env.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function sf(e) {
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
function ja(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ja(t);
}
function zi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ba(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ba(t.subTree) : null;
}
const Fa = (e) => e.__isSuspense;
function of(e, t) {
  t && t.pendingBranch ? R(e) ? t.effects.push(...e) : t.effects.push(e) : pa(e);
}
const Ue = /* @__PURE__ */ Symbol.for("v-fgt"), hs = /* @__PURE__ */ Symbol.for("v-txt"), We = /* @__PURE__ */ Symbol.for("v-cmt"), Ls = /* @__PURE__ */ Symbol.for("v-stc"), Wn = [];
let Ke = null;
function re(e = !1) {
  Wn.push(Ke = e ? null : []);
}
function rf() {
  Wn.pop(), Ke = Wn[Wn.length - 1] || null;
}
let os = 1;
function Gs(e, t = !1) {
  os += e, e < 0 && Ke && t && (Ke.hasOnce = !0);
}
function Ua(e) {
  return e.dynamicChildren = os > 0 ? Ke || bn : null, rf(), os > 0 && Ke && Ke.push(e), e;
}
function ie(e, t, n, s, o, r) {
  return Ua(
    b(
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
function lf(e, t, n, s, o) {
  return Ua(
    Le(
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
    const n = Ts.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const af = (...e) => Wa(
  ...e
), Ka = ({ key: e }) => e ?? null, Ms = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || /* @__PURE__ */ fe(e) || j(e) ? { i: Se, r: e, k: t, f: !!n } : e : null);
function b(e, t = null, n = null, s = 0, o = null, r = e === Ue ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ka(t),
    ref: t && Ms(t),
    scopeId: ya,
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
    ctx: Se
  };
  return l ? (li(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= le(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && C("VNode created with invalid key (NaN). VNode type:", a.type), os > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ke && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ke.push(a), a;
}
const Le = process.env.NODE_ENV !== "production" ? af : Wa;
function Wa(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === xd) && (process.env.NODE_ENV !== "production" && !e && C(`Invalid vnode type when creating vnode: ${e}.`), e = We), kn(e)) {
    const l = Gt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && li(l, n), os > 0 && !r && Ke && (l.shapeFlag & 6 ? Ke[Ke.indexOf(e)] = l : Ke.push(l)), l.patchFlag = -2, l;
  }
  if (Ya(e) && (e = e.__vccOpts), t) {
    t = cf(t);
    let { class: l, style: a } = t;
    l && !le(l) && (t.class = Ve(l)), Y(a) && (/* @__PURE__ */ Hs(a) && !R(a) && (a = de({}, a)), t.style = Fr(a));
  }
  const i = le(e) ? 1 : Fa(e) ? 128 : ad(e) ? 64 : Y(e) ? 4 : j(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && /* @__PURE__ */ Hs(e) && (e = /* @__PURE__ */ W(e), C(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), b(
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
function cf(e) {
  return e ? /* @__PURE__ */ Hs(e) || Ia(e) ? de({}, e) : e : null;
}
function Gt(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: l, transition: a } = e, f = t ? uf(o || {}, t) : o, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Ka(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? R(r) ? r.concat(Ms(t)) : [r, Ms(t)] : Ms(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && R(l) ? l.map(za) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ue ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && Gt(e.ssContent),
    ssFallback: e.ssFallback && Gt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Zr(
    d,
    a.clone(d)
  ), d;
}
function za(e) {
  const t = Gt(e);
  return R(e.children) && (t.children = e.children.map(za)), t;
}
function Js(e = " ", t = 0) {
  return Le(hs, null, e, t);
}
function ht(e = "", t = !1) {
  return t ? (re(), lf(We, null, e)) : Le(We, null, e);
}
function Qe(e) {
  return e == null || typeof e == "boolean" ? Le(We) : R(e) ? Le(
    Ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : kn(e) ? Mt(e) : Le(hs, null, String(e));
}
function Mt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Gt(e);
}
function li(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (R(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), li(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Ia(t) ? t._ctx = Se : o === 3 && Se && (Se.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else j(t) ? (t = { default: t, _ctx: Se }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Js(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function uf(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = Ve([t.class, s.class]));
      else if (o === "style")
        t.style = Fr([t.style, s.style]);
      else if (cs(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(R(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function ft(e, t, n, s = null) {
  wt(e, t, 7, [
    n,
    s
  ]);
}
const df = Ca();
let ff = 0;
function pf(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || df, r = {
    uid: ff++,
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
    scope: new iu(
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
    propsOptions: Ra(s, o),
    emitsOptions: Aa(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Q,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Q,
    data: Q,
    props: Q,
    attrs: Q,
    slots: Q,
    refs: Q,
    setupState: Q,
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
  return process.env.NODE_ENV !== "production" ? r.ctx = _d(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Id.bind(null, r), e.ce && e.ce(r), r;
}
let he = null;
const ai = () => he || Se;
let Ys, Nr;
{
  const e = ds(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  Ys = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => he = n
  ), Nr = t(
    "__VUE_SSR_SETTERS__",
    (n) => rs = n
  );
}
const ms = (e) => {
  const t = he;
  return Ys(e), e.scope.on(), () => {
    e.scope.off(), Ys(t);
  };
}, qi = () => {
  he && he.scope.off(), Ys(null);
}, hf = /* @__PURE__ */ Pt("slot,component");
function kr(e, { isNativeTag: t }) {
  (hf(e) || t(e)) && C(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function qa(e) {
  return e.vnode.shapeFlag & 4;
}
let rs = !1;
function mf(e, t = !1, n = !1) {
  t && Nr(t);
  const { props: s, children: o } = e.vnode, r = qa(e);
  jd(e, s, r, t), Xd(e, o, n || t);
  const i = r ? gf(e, t) : void 0;
  return t && Nr(!1), i;
}
function gf(e, t) {
  const n = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (n.name && kr(n.name, e.appContext.config), n.components) {
      const o = Object.keys(n.components);
      for (let r = 0; r < o.length; r++)
        kr(o[r], e.appContext.config);
    }
    if (n.directives) {
      const o = Object.keys(n.directives);
      for (let r = 0; r < o.length; r++)
        Ea(o[r]);
    }
    n.compilerOptions && vf() && C(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ka), process.env.NODE_ENV !== "production" && wd(e);
  const { setup: s } = n;
  if (s) {
    ot();
    const o = e.setupContext = s.length > 1 ? yf(e) : null, r = ms(e), i = Sn(
      s,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? /* @__PURE__ */ yt(e.props) : e.props,
        o
      ]
    ), l = Hr(i);
    if (rt(), r(), (l || e.sp) && !Kn(e) && _a(e), l) {
      if (i.then(qi, qi), t)
        return i.then((a) => {
          Gi(e, a, t);
        }).catch((a) => {
          fs(a, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const a = gs(e, n);
        C(
          `Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Gi(e, i, t);
  } else
    Ga(e, t);
}
function Gi(e, t, n) {
  j(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Y(t) ? (process.env.NODE_ENV !== "production" && kn(t) && C(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = ca(t), process.env.NODE_ENV !== "production" && Nd(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && C(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Ga(e, n);
}
const vf = () => !0;
function Ga(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || ge);
  {
    const o = ms(e);
    ot();
    try {
      Od(e);
    } finally {
      rt(), o();
    }
  }
  process.env.NODE_ENV !== "production" && !s.render && e.render === ge && !t && (s.template ? C(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : C("Component is missing template or render function: ", s));
}
const Ji = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return zs(), me(e, "get", ""), e[t];
  },
  set() {
    return C("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return C("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return me(e, "get", ""), e[t];
  }
};
function bf(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return me(e, "get", "$slots"), t[n];
    }
  });
}
function yf(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && C("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (R(n) ? s = "array" : /* @__PURE__ */ fe(n) && (s = "ref")), s !== "object" && C(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Ji));
      },
      get slots() {
        return s || (s = bf(e));
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Ji),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function $o(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ca(la(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ln)
        return ln[n](e);
    },
    has(t, n) {
      return n in t || n in ln;
    }
  })) : e.proxy;
}
const Ef = /(?:^|[-_])\w/g, xf = (e) => e.replace(Ef, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ja(e, t = !0) {
  return j(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function gs(e, t, n = !1) {
  let s = Ja(t);
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
  return s ? xf(s) : n ? "App" : "Anonymous";
}
function Ya(e) {
  return j(e) && "__vccOpts" in e;
}
const Ds = (e, t) => {
  const n = /* @__PURE__ */ Du(e, t, rs);
  if (process.env.NODE_ENV !== "production") {
    const s = ai();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function _f(e, t, n) {
  try {
    Gs(-1);
    const s = arguments.length;
    return s === 2 ? Y(t) && !R(t) ? kn(t) ? Le(e, null, [t]) : Le(e, t) : Le(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && kn(n) && (n = [n]), Le(e, t, n));
  } finally {
    Gs(1);
  }
}
function wf() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(c) {
      if (!Y(c))
        return null;
      if (c.__isVue)
        return ["div", e, "VueInstance"];
      if (/* @__PURE__ */ fe(c)) {
        ot();
        const u = c.value;
        return rt(), [
          "div",
          {},
          ["span", e, d(c)],
          "<",
          l(u),
          ">"
        ];
      } else {
        if (/* @__PURE__ */ zt(c))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ Me(c) ? "ShallowReactive" : "Reactive"],
            "<",
            l(c),
            `>${/* @__PURE__ */ it(c) ? " (readonly)" : ""}`
          ];
        if (/* @__PURE__ */ it(c))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ Me(c) ? "ShallowReadonly" : "Readonly"],
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
    const u = [];
    c.type.props && c.props && u.push(i("props", /* @__PURE__ */ W(c.props))), c.setupState !== Q && u.push(i("setup", c.setupState)), c.data !== Q && u.push(i("data", /* @__PURE__ */ W(c.data)));
    const m = a(c, "computed");
    m && u.push(i("computed", m));
    const E = a(c, "inject");
    return E && u.push(i("injected", E)), u.push([
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
    ]), u;
  }
  function i(c, u) {
    return u = de({}, u), Object.keys(u).length ? [
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
        ...Object.keys(u).map((m) => [
          "div",
          {},
          ["span", s, m + ": "],
          l(u[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(c, u = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", s, c] : Y(c) ? ["object", { object: u ? /* @__PURE__ */ W(c) : c }] : ["span", n, String(c)];
  }
  function a(c, u) {
    const m = c.type;
    if (j(m))
      return;
    const E = {};
    for (const y in c.ctx)
      f(m, y, u) && (E[y] = c.ctx[y]);
    return E;
  }
  function f(c, u, m) {
    const E = c[m];
    if (R(E) && E.includes(u) || Y(E) && u in E || c.extends && f(c.extends, u, m) || c.mixins && c.mixins.some((y) => f(y, u, m)))
      return !0;
  }
  function d(c) {
    return /* @__PURE__ */ Me(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Yi = "3.5.28", xt = process.env.NODE_ENV !== "production" ? C : ge;
process.env.NODE_ENV;
process.env.NODE_ENV;
let Or;
const Xi = typeof window < "u" && window.trustedTypes;
if (Xi)
  try {
    Or = /* @__PURE__ */ Xi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && xt(`Error creating trusted types policy: ${e}`);
  }
const Xa = Or ? (e) => Or.createHTML(e) : (e) => e, Nf = "http://www.w3.org/2000/svg", kf = "http://www.w3.org/1998/Math/MathML", St = typeof document < "u" ? document : null, Qi = St && /* @__PURE__ */ St.createElement("template"), Of = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? St.createElementNS(Nf, e) : t === "mathml" ? St.createElementNS(kf, e) : n ? St.createElement(e, { is: n }) : St.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => St.createTextNode(e),
  createComment: (e) => St.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => St.querySelector(e),
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
      Qi.innerHTML = Xa(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Qi.content;
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
}, Tf = /* @__PURE__ */ Symbol("_vtc");
function Cf(e, t, n) {
  const s = e[Tf];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Zi = /* @__PURE__ */ Symbol("_vod"), Af = /* @__PURE__ */ Symbol("_vsh"), Sf = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Lf = /(?:^|;)\s*display\s*:/;
function Mf(e, t, n) {
  const s = e.style, o = le(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (le(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Is(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Is(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), Is(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[Sf];
      i && (n += ";" + i), s.cssText = n, r = Lf.test(n);
    }
  } else t && e.removeAttribute("style");
  Zi in e && (e[Zi] = r ? s.display : "", e[Af] && (s.display = "none"));
}
const Df = /[^\\];\s*$/, el = /\s*!important$/;
function Is(e, t, n) {
  if (R(n))
    n.forEach((s) => Is(e, t, s));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Df.test(n) && xt(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = If(e, t);
    el.test(n) ? e.setProperty(
      qt(s),
      n.replace(el, ""),
      "important"
    ) : e[s] = n;
  }
}
const tl = ["Webkit", "Moz", "ms"], Xo = {};
function If(e, t) {
  const n = Xo[t];
  if (n)
    return n;
  let s = tt(t);
  if (s !== "filter" && s in e)
    return Xo[t] = s;
  s = Ao(s);
  for (let o = 0; o < tl.length; o++) {
    const r = tl[o] + s;
    if (r in e)
      return Xo[t] = r;
  }
  return t;
}
const nl = "http://www.w3.org/1999/xlink";
function sl(e, t, n, s, o, r = ou(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(nl, t.slice(6, t.length)) : e.setAttributeNS(nl, t, n) : n == null || r && !Fl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : _t(n) ? String(n) : n
  );
}
function ol(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Xa(n) : n);
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
    l === "boolean" ? n = Fl(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !i && xt(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(o || t);
}
function Ut(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Pf(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const rl = /* @__PURE__ */ Symbol("_vei");
function Rf(e, t, n, s, o = null) {
  const r = e[rl] || (e[rl] = {}), i = r[t];
  if (s && i)
    i.value = process.env.NODE_ENV !== "production" ? ll(s, t) : s;
  else {
    const [l, a] = Vf(t);
    if (s) {
      const f = r[t] = jf(
        process.env.NODE_ENV !== "production" ? ll(s, t) : s,
        o
      );
      Ut(e, l, f, a);
    } else i && (Pf(e, l, i, a), r[t] = void 0);
  }
}
const il = /(?:Once|Passive|Capture)$/;
function Vf(e) {
  let t;
  if (il.test(e)) {
    t = {};
    let s;
    for (; s = e.match(il); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : qt(e.slice(2)), t];
}
let Qo = 0;
const $f = /* @__PURE__ */ Promise.resolve(), Hf = () => Qo || ($f.then(() => Qo = 0), Qo = Date.now());
function jf(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    wt(
      Bf(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Hf(), n;
}
function ll(e, t) {
  return j(e) || R(e) ? e : (xt(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ge);
}
function Bf(e, t) {
  if (R(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const al = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ff = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? Cf(e, s, i) : t === "style" ? Mf(e, n, s) : cs(t) ? Vs(t) || Rf(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Uf(e, t, s, i)) ? (ol(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && sl(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !le(s)) ? ol(e, tt(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), sl(e, t, s, i));
};
function Uf(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && al(t) && j(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return al(t) && le(n) ? !1 : t in e;
}
const On = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return R(t) ? (n) => mn(t, n) : t;
};
function Kf(e) {
  e.target.composing = !0;
}
function cl(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const It = /* @__PURE__ */ Symbol("_assign");
function ul(e, t, n) {
  return t && (e = e.trim()), n && (e = So(e)), e;
}
const Fe = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[It] = On(o);
    const r = s || o.props && o.props.type === "number";
    Ut(e, t ? "change" : "input", (i) => {
      i.target.composing || e[It](ul(e.value, n, r));
    }), (n || r) && Ut(e, "change", () => {
      e.value = ul(e.value, n, r);
    }), t || (Ut(e, "compositionstart", Kf), Ut(e, "compositionend", cl), Ut(e, "change", cl));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } }, i) {
    if (e[It] = On(i), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? So(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, Wf = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[It] = On(n), Ut(e, "change", () => {
      const s = e._modelValue, o = is(e), r = e.checked, i = e[It];
      if (R(s)) {
        const l = Ur(s, o), a = l !== -1;
        if (r && !a)
          i(s.concat(o));
        else if (!r && a) {
          const f = [...s];
          f.splice(l, 1), i(f);
        }
      } else if (Cn(s)) {
        const l = new Set(s);
        r ? l.add(o) : l.delete(o), i(l);
      } else
        i(Qa(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: dl,
  beforeUpdate(e, t, n) {
    e[It] = On(n), dl(e, t, n);
  }
};
function dl(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (R(t))
    o = Ur(t, s.props.value) > -1;
  else if (Cn(t))
    o = t.has(s.props.value);
  else {
    if (t === n) return;
    o = An(t, Qa(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const fl = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = Cn(t);
    Ut(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? So(is(i)) : is(i)
      );
      e[It](
        e.multiple ? o ? new Set(r) : r : r[0]
      ), e._assigning = !0, ns(() => {
        e._assigning = !1;
      });
    }), e[It] = On(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    pl(e, t);
  },
  beforeUpdate(e, t, n) {
    e[It] = On(n);
  },
  updated(e, { value: t }) {
    e._assigning || pl(e, t);
  }
};
function pl(e, t) {
  const n = e.multiple, s = R(t);
  if (n && !s && !Cn(t)) {
    process.env.NODE_ENV !== "production" && xt(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, r = e.options.length; o < r; o++) {
    const i = e.options[o], l = is(i);
    if (n)
      if (s) {
        const a = typeof l;
        a === "string" || a === "number" ? i.selected = t.some((f) => String(f) === String(l)) : i.selected = Ur(t, l) > -1;
      } else
        i.selected = t.has(l);
    else if (An(is(i), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function is(e) {
  return "_value" in e ? e._value : e.value;
}
function Qa(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const zf = ["ctrl", "shift", "alt", "meta"], qf = {
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
  exact: (e, t) => zf.some((n) => e[`${n}Key`] && !t.includes(n))
}, Zo = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((o, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const l = qf[t[i]];
      if (l && l(o, t)) return;
    }
    return e(o, ...r);
  }));
}, Gf = /* @__PURE__ */ de({ patchProp: Ff }, Of);
let hl;
function Jf() {
  return hl || (hl = ef(Gf));
}
const Yf = ((...e) => {
  const t = Jf().createApp(...e);
  process.env.NODE_ENV !== "production" && (Qf(t), Zf(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = ep(s);
    if (!o) return;
    const r = t._component;
    !j(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, Xf(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
});
function Xf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Qf(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => eu(t) || tu(t) || nu(t),
    writable: !1
  });
}
function Zf(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        xt(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return xt(s), n;
      },
      set() {
        xt(s);
      }
    });
  }
}
function ep(e) {
  if (le(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && xt(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && xt(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function tp() {
  wf();
}
process.env.NODE_ENV !== "production" && tp();
function ml(e) {
  return Lu((t, n) => ({
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
var np = class extends Nc {
  constructor(e = {}) {
    return super(e), this.contentComponent = null, this.appContext = null, this.reactiveState = ml(this.view.state), this.reactiveExtensionStorage = ml(this.extensionStorage), this.on("beforeTransaction", ({ nextState: t }) => {
      this.reactiveState.value = t, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), la(this);
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
}, sp = /* @__PURE__ */ ud({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(e) {
    const t = /* @__PURE__ */ Ee(), n = ai();
    return rd(() => {
      const s = e.editor;
      s && s.options.element && t.value && ns(() => {
        var o;
        if (!t.value || !((o = s.view.dom) != null && o.parentNode))
          return;
        const r = oe(t.value);
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
    }), ni(() => {
      const s = e.editor;
      s && (s.contentComponent = null, s.appContext = null);
    }), { rootEl: t };
  },
  render() {
    return _f("div", {
      ref: (e) => {
        this.rootEl = e;
      }
    });
  }
}), op = (e = {}) => {
  const t = /* @__PURE__ */ Tu();
  return ti(() => {
    t.value = new np(e);
  }), ni(() => {
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
}, rp = /^\s*>\s$/, ip = je.create({
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
    return /* @__PURE__ */ Xs("blockquote", { ...pe(this.options.HTMLAttributes, e), children: /* @__PURE__ */ Xs("slot", {}) });
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
        find: rp,
        type: this.type
      })
    ];
  }
}), lp = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, ap = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, cp = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, up = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, dp = Tn.create({
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
    return /* @__PURE__ */ Xs("strong", { ...pe(this.options.HTMLAttributes, e), children: /* @__PURE__ */ Xs("slot", {}) });
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
      wn({
        find: lp,
        type: this.type
      }),
      wn({
        find: cp,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      cn({
        find: ap,
        type: this.type
      }),
      cn({
        find: up,
        type: this.type
      })
    ];
  }
}), fp = /(^|[^`])`([^`]+)`(?!`)$/, pp = /(^|[^`])`([^`]+)`(?!`)/g, hp = Tn.create({
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
    return ["code", pe(this.options.HTMLAttributes, e), 0];
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
      wn({
        find: fp,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      cn({
        find: pp,
        type: this.type
      })
    ];
  }
}), er = 4, mp = /^```([a-z]+)?[\s\n]$/, gp = /^~~~([a-z]+)?[\s\n]$/, vp = je.create({
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
      pe(this.options.HTMLAttributes, t),
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
          const { from: f, to: d } = o, m = s.doc.textBetween(f, d, `
`, `
`).split(`
`).map((E) => l + E).join(`
`);
          return a.replaceWith(f, d, s.schema.text(m)), !0;
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
          const { pos: f } = r, d = r.start(), c = r.end(), m = s.doc.textBetween(d, c, `
`, `
`).split(`
`);
          let E = 0, y = 0;
          const M = f - d;
          for (let q = 0; q < m.length; q += 1) {
            if (y + m[q].length >= M) {
              E = q;
              break;
            }
            y += m[q].length + 1;
          }
          const I = ((a = m[E].match(/^ */)) == null ? void 0 : a[0]) || "", U = Math.min(I.length, n);
          if (U === 0)
            return !0;
          let ee = d;
          for (let q = 0; q < E; q += 1)
            ee += m[q].length + 1;
          return l.delete(ee, ee + U), f - ee <= U && l.setSelection(nn.create(l.doc, ee)), !0;
        }) : e.commands.command(({ tr: l }) => {
          const { from: a, to: f } = o, u = s.doc.textBetween(a, f, `
`, `
`).split(`
`).map((m) => {
            var E;
            const y = ((E = m.match(/^ */)) == null ? void 0 : E[0]) || "", M = Math.min(y.length, n);
            return m.slice(M);
          }).join(`
`);
          return l.replaceWith(a, f, s.schema.text(u)), !0;
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
        return l === void 0 ? !1 : s.nodeAt(l) ? e.commands.command(({ tr: f }) => (f.setSelection(Qn.near(s.resolve(l))), !0)) : e.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      ur({
        find: mp,
        type: this.type,
        getAttributes: (e) => ({
          language: e[1]
        })
      }),
      ur({
        find: gp,
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
      new ze({
        key: new Ye("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (e, t) => {
            if (!t.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const n = t.clipboardData.getData("text/plain"), s = t.clipboardData.getData("vscode-editor-data"), o = s ? JSON.parse(s) : void 0, r = o?.mode;
            if (!n || !r)
              return !1;
            const { tr: i, schema: l } = e.state, a = l.text(n.replace(/\r\n?/g, `
`));
            return i.replaceSelectionWith(this.type.create({ language: r }, a)), i.selection.$from.parent.type !== this.type && i.setSelection(nn.near(i.doc.resolve(Math.max(0, i.selection.from - 2)))), i.setMeta("paste", !0), e.dispatch(i), !0;
          }
        }
      })
    ];
  }
}), bp = je.create({
  name: "doc",
  topNode: !0,
  content: "block+",
  renderMarkdown: (e, t) => e.content ? t.renderChildren(e.content, `

`) : ""
}), yp = je.create({
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
    return ["br", pe(this.options.HTMLAttributes, e)];
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
          return t().insertContent({ type: this.name }).command(({ tr: f, dispatch: d }) => {
            if (d && a && i) {
              const c = a.filter((u) => l.includes(u.type.name));
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
}), Ep = je.create({
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
    return [`h${this.options.levels.includes(e.attrs.level) ? e.attrs.level : this.options.levels[0]}`, pe(this.options.HTMLAttributes, t), 0];
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
}), xp = je.create({
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
    return ["hr", pe(this.options.HTMLAttributes, e)];
  },
  markdownTokenName: "hr",
  parseMarkdown: (e, t) => t.createNode("horizontalRule"),
  renderMarkdown: () => "---",
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: e, state: t }) => {
        if (!kc(t, t.schema.nodes[this.name]))
          return !1;
        const { selection: n } = t, { $to: s } = n, o = e();
        return Pl(n) ? o.insertContentAt(s.pos, {
          type: this.name
        }) : o.insertContent({ type: this.name }), o.command(({ state: r, tr: i, dispatch: l }) => {
          if (l) {
            const { $to: a } = i.selection, f = a.end();
            if (a.nodeAfter)
              a.nodeAfter.isTextblock ? i.setSelection(nn.create(i.doc, a.pos + 1)) : a.nodeAfter.isBlock ? i.setSelection(Vr.create(i.doc, a.pos)) : i.setSelection(nn.create(i.doc, a.pos));
            else {
              const d = r.schema.nodes[this.options.nextNodeType] || a.parent.type.contentMatch.defaultType, c = d?.create();
              c && (i.insert(f, c), i.setSelection(nn.create(i.doc, f + 1)));
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
      Il({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), _p = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, wp = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, Np = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, kp = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, Op = Tn.create({
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
    return ["em", pe(this.options.HTMLAttributes, e), 0];
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
      wn({
        find: _p,
        type: this.type
      }),
      wn({
        find: Np,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      cn({
        find: wp,
        type: this.type
      }),
      cn({
        find: kp,
        type: this.type
      })
    ];
  }
});
const Tp = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Cp = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Tr = "numeric", Cr = "ascii", Ar = "alpha", zn = "asciinumeric", Hn = "alphanumeric", Sr = "domain", Za = "emoji", Ap = "scheme", Sp = "slashscheme", tr = "whitespace";
function Lp(e, t) {
  return e in t || (t[e] = []), t[e];
}
function tn(e, t, n) {
  t[Tr] && (t[zn] = !0, t[Hn] = !0), t[Cr] && (t[zn] = !0, t[Ar] = !0), t[zn] && (t[Hn] = !0), t[Ar] && (t[Hn] = !0), t[Hn] && (t[Sr] = !0), t[Za] && (t[Sr] = !0);
  for (const s in t) {
    const o = Lp(s, n);
    o.indexOf(e) < 0 && o.push(e);
  }
}
function Mp(e, t) {
  const n = {};
  for (const s in t)
    t[s].indexOf(e) >= 0 && (n[s] = !0);
  return n;
}
function He(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
He.groups = {};
He.prototype = {
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
    s = s || He.groups;
    let o;
    return t && t.j ? o = t : (o = new He(t), n && s && tn(t, n, s)), this.jr.push([e, o]), o;
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
    s = s || He.groups;
    const o = this;
    if (t && t.j)
      return o.j[e] = t, t;
    const r = t;
    let i, l = o.go(e);
    if (l ? (i = new He(), Object.assign(i.j, l.j), i.jr.push.apply(i.jr, l.jr), i.jd = l.jd, i.t = l.t) : i = new He(), r) {
      if (s)
        if (i.t && typeof i.t == "string") {
          const a = Object.assign(Mp(i.t, s), n);
          tn(r, a, s);
        } else n && tn(r, n, s);
      i.t = r;
    }
    return o.j[e] = i, i;
  }
};
const K = (e, t, n, s, o) => e.ta(t, n, s, o), ce = (e, t, n, s, o) => e.tr(t, n, s, o), gl = (e, t, n, s, o) => e.ts(t, n, s, o), k = (e, t, n, s, o) => e.tt(t, n, s, o), At = "WORD", Lr = "UWORD", ec = "ASCIINUMERICAL", tc = "ALPHANUMERICAL", ls = "LOCALHOST", Mr = "TLD", Dr = "UTLD", Ps = "SCHEME", vn = "SLASH_SCHEME", ci = "NUM", Ir = "WS", ui = "NL", qn = "OPENBRACE", Gn = "CLOSEBRACE", Qs = "OPENBRACKET", Zs = "CLOSEBRACKET", eo = "OPENPAREN", to = "CLOSEPAREN", no = "OPENANGLEBRACKET", so = "CLOSEANGLEBRACKET", oo = "FULLWIDTHLEFTPAREN", ro = "FULLWIDTHRIGHTPAREN", io = "LEFTCORNERBRACKET", lo = "RIGHTCORNERBRACKET", ao = "LEFTWHITECORNERBRACKET", co = "RIGHTWHITECORNERBRACKET", uo = "FULLWIDTHLESSTHAN", fo = "FULLWIDTHGREATERTHAN", po = "AMPERSAND", ho = "APOSTROPHE", mo = "ASTERISK", Bt = "AT", go = "BACKSLASH", vo = "BACKTICK", bo = "CARET", Kt = "COLON", di = "COMMA", yo = "DOLLAR", mt = "DOT", Eo = "EQUALS", fi = "EXCLAMATION", Je = "HYPHEN", Jn = "PERCENT", xo = "PIPE", _o = "PLUS", wo = "POUND", Yn = "QUERY", pi = "QUOTE", nc = "FULLWIDTHMIDDLEDOT", hi = "SEMI", gt = "SLASH", Xn = "TILDE", No = "UNDERSCORE", sc = "EMOJI", ko = "SYM";
var oc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: tc,
  AMPERSAND: po,
  APOSTROPHE: ho,
  ASCIINUMERICAL: ec,
  ASTERISK: mo,
  AT: Bt,
  BACKSLASH: go,
  BACKTICK: vo,
  CARET: bo,
  CLOSEANGLEBRACKET: so,
  CLOSEBRACE: Gn,
  CLOSEBRACKET: Zs,
  CLOSEPAREN: to,
  COLON: Kt,
  COMMA: di,
  DOLLAR: yo,
  DOT: mt,
  EMOJI: sc,
  EQUALS: Eo,
  EXCLAMATION: fi,
  FULLWIDTHGREATERTHAN: fo,
  FULLWIDTHLEFTPAREN: oo,
  FULLWIDTHLESSTHAN: uo,
  FULLWIDTHMIDDLEDOT: nc,
  FULLWIDTHRIGHTPAREN: ro,
  HYPHEN: Je,
  LEFTCORNERBRACKET: io,
  LEFTWHITECORNERBRACKET: ao,
  LOCALHOST: ls,
  NL: ui,
  NUM: ci,
  OPENANGLEBRACKET: no,
  OPENBRACE: qn,
  OPENBRACKET: Qs,
  OPENPAREN: eo,
  PERCENT: Jn,
  PIPE: xo,
  PLUS: _o,
  POUND: wo,
  QUERY: Yn,
  QUOTE: pi,
  RIGHTCORNERBRACKET: lo,
  RIGHTWHITECORNERBRACKET: co,
  SCHEME: Ps,
  SEMI: hi,
  SLASH: gt,
  SLASH_SCHEME: vn,
  SYM: ko,
  TILDE: Xn,
  TLD: Mr,
  UNDERSCORE: No,
  UTLD: Dr,
  UWORD: Lr,
  WORD: At,
  WS: Ir
});
const Tt = /[a-z]/, Rn = new RegExp("\\p{L}", "u"), nr = new RegExp("\\p{Emoji}", "u"), Ct = /\d/, sr = /\s/, vl = "\r", or = `
`, Dp = "️", Ip = "‍", rr = "￼";
let xs = null, _s = null;
function Pp(e = []) {
  const t = {};
  He.groups = t;
  const n = new He();
  xs == null && (xs = bl(Tp)), _s == null && (_s = bl(Cp)), k(n, "'", ho), k(n, "{", qn), k(n, "}", Gn), k(n, "[", Qs), k(n, "]", Zs), k(n, "(", eo), k(n, ")", to), k(n, "<", no), k(n, ">", so), k(n, "（", oo), k(n, "）", ro), k(n, "「", io), k(n, "」", lo), k(n, "『", ao), k(n, "』", co), k(n, "＜", uo), k(n, "＞", fo), k(n, "&", po), k(n, "*", mo), k(n, "@", Bt), k(n, "`", vo), k(n, "^", bo), k(n, ":", Kt), k(n, ",", di), k(n, "$", yo), k(n, ".", mt), k(n, "=", Eo), k(n, "!", fi), k(n, "-", Je), k(n, "%", Jn), k(n, "|", xo), k(n, "+", _o), k(n, "#", wo), k(n, "?", Yn), k(n, '"', pi), k(n, "/", gt), k(n, ";", hi), k(n, "~", Xn), k(n, "_", No), k(n, "\\", go), k(n, "・", nc);
  const s = ce(n, Ct, ci, {
    [Tr]: !0
  });
  ce(s, Ct, s);
  const o = ce(s, Tt, ec, {
    [zn]: !0
  }), r = ce(s, Rn, tc, {
    [Hn]: !0
  }), i = ce(n, Tt, At, {
    [Cr]: !0
  });
  ce(i, Ct, o), ce(i, Tt, i), ce(o, Ct, o), ce(o, Tt, o);
  const l = ce(n, Rn, Lr, {
    [Ar]: !0
  });
  ce(l, Tt), ce(l, Ct, r), ce(l, Rn, l), ce(r, Ct, r), ce(r, Tt), ce(r, Rn, r);
  const a = k(n, or, ui, {
    [tr]: !0
  }), f = k(n, vl, Ir, {
    [tr]: !0
  }), d = ce(n, sr, Ir, {
    [tr]: !0
  });
  k(n, rr, d), k(f, or, a), k(f, rr, d), ce(f, sr, d), k(d, vl), k(d, or), ce(d, sr, d), k(d, rr, d);
  const c = ce(n, nr, sc, {
    [Za]: !0
  });
  k(c, "#"), ce(c, nr, c), k(c, Dp, c);
  const u = k(c, Ip);
  k(u, "#"), ce(u, nr, c);
  const m = [[Tt, i], [Ct, o]], E = [[Tt, null], [Rn, l], [Ct, r]];
  for (let y = 0; y < xs.length; y++)
    $t(n, xs[y], Mr, At, m);
  for (let y = 0; y < _s.length; y++)
    $t(n, _s[y], Dr, Lr, E);
  tn(Mr, {
    tld: !0,
    ascii: !0
  }, t), tn(Dr, {
    utld: !0,
    alpha: !0
  }, t), $t(n, "file", Ps, At, m), $t(n, "mailto", Ps, At, m), $t(n, "http", vn, At, m), $t(n, "https", vn, At, m), $t(n, "ftp", vn, At, m), $t(n, "ftps", vn, At, m), tn(Ps, {
    scheme: !0,
    ascii: !0
  }, t), tn(vn, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((y, M) => y[0] > M[0] ? 1 : -1);
  for (let y = 0; y < e.length; y++) {
    const M = e[y][0], I = e[y][1] ? {
      [Ap]: !0
    } : {
      [Sp]: !0
    };
    M.indexOf("-") >= 0 ? I[Sr] = !0 : Tt.test(M) ? Ct.test(M) ? I[zn] = !0 : I[Cr] = !0 : I[Tr] = !0, gl(n, M, M, I);
  }
  return gl(n, "localhost", ls, {
    ascii: !0
  }), n.jd = new He(ko), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, oc)
  };
}
function rc(e, t) {
  const n = Rp(t.replace(/[A-Z]/g, (l) => l.toLowerCase())), s = n.length, o = [];
  let r = 0, i = 0;
  for (; i < s; ) {
    let l = e, a = null, f = 0, d = null, c = -1, u = -1;
    for (; i < s && (a = l.go(n[i])); )
      l = a, l.accepts() ? (c = 0, u = 0, d = l) : c >= 0 && (c += n[i].length, u++), f += n[i].length, r += n[i].length, i++;
    r -= c, i -= u, f -= c, o.push({
      t: d.t,
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
function Rp(e) {
  const t = [], n = e.length;
  let s = 0;
  for (; s < n; ) {
    let o = e.charCodeAt(s), r, i = o < 55296 || o > 56319 || s + 1 === n || (r = e.charCodeAt(s + 1)) < 56320 || r > 57343 ? e[s] : e.slice(s, s + 2);
    t.push(i), s += i.length;
  }
  return t;
}
function $t(e, t, n, s, o) {
  let r;
  const i = t.length;
  for (let l = 0; l < i - 1; l++) {
    const a = t[l];
    e.j[a] ? r = e.j[a] : (r = new He(s), r.jr = o.slice(), e.j[a] = r), e = r;
  }
  return r = new He(n), r.jr = o.slice(), e.j[t[i - 1]] = r, r;
}
function bl(e) {
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
const as = {
  defaultProtocol: "http",
  events: null,
  format: yl,
  formatHref: yl,
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
function mi(e, t = null) {
  let n = Object.assign({}, as);
  e && (n = Object.assign(n, e instanceof mi ? e.o : e));
  const s = n.ignoreTags, o = [];
  for (let r = 0; r < s.length; r++)
    o.push(s[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = o;
}
mi.prototype = {
  o: as,
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
    return o && (typeof o == "object" ? (o = n.t in o ? o[n.t] : as[e], typeof o == "function" && s && (o = o(t, n))) : typeof o == "function" && s && (o = o(t, n.t, n)), o);
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
function yl(e) {
  return e;
}
function ic(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
ic.prototype = {
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
  toObject(e = as.defaultProtocol) {
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
    const t = this, n = this.toHref(e.get("defaultProtocol")), s = e.get("formatHref", n, this), o = e.get("tagName", n, t), r = this.toFormattedString(e), i = {}, l = e.get("className", n, t), a = e.get("target", n, t), f = e.get("rel", n, t), d = e.getObj("attributes", n, t), c = e.getObj("events", n, t);
    return i.href = s, l && (i.class = l), a && (i.target = a), f && (i.rel = f), d && Object.assign(i, d), {
      tagName: o,
      attributes: i,
      content: r,
      eventListeners: c
    };
  }
};
function Ho(e, t) {
  class n extends ic {
    constructor(o, r) {
      super(o, r), this.t = e;
    }
  }
  for (const s in t)
    n.prototype[s] = t[s];
  return n.t = e, n;
}
const El = Ho("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), xl = Ho("text"), Vp = Ho("nl"), ws = Ho("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(e = as.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== ls && e[1].t === Kt;
  }
}), Ge = (e) => new He(e);
function $p({
  groups: e
}) {
  const t = e.domain.concat([po, mo, Bt, go, vo, bo, yo, Eo, Je, ci, Jn, xo, _o, wo, gt, ko, Xn, No]), n = [ho, Kt, di, mt, fi, Jn, Yn, pi, hi, no, so, qn, Gn, Zs, Qs, eo, to, oo, ro, io, lo, ao, co, uo, fo], s = [po, ho, mo, go, vo, bo, yo, Eo, Je, qn, Gn, Jn, xo, _o, wo, Yn, gt, ko, Xn, No], o = Ge(), r = k(o, Xn);
  K(r, s, r), K(r, e.domain, r);
  const i = Ge(), l = Ge(), a = Ge();
  K(o, e.domain, i), K(o, e.scheme, l), K(o, e.slashscheme, a), K(i, s, r), K(i, e.domain, i);
  const f = k(i, Bt);
  k(r, Bt, f), k(l, Bt, f), k(a, Bt, f);
  const d = k(r, mt);
  K(d, s, r), K(d, e.domain, r);
  const c = Ge();
  K(f, e.domain, c), K(c, e.domain, c);
  const u = k(c, mt);
  K(u, e.domain, c);
  const m = Ge(El);
  K(u, e.tld, m), K(u, e.utld, m), k(f, ls, m);
  const E = k(c, Je);
  k(E, Je, E), K(E, e.domain, c), K(m, e.domain, c), k(m, mt, u), k(m, Je, E);
  const y = k(m, Kt);
  K(y, e.numeric, El);
  const M = k(i, Je), D = k(i, mt);
  k(M, Je, M), K(M, e.domain, i), K(D, s, r), K(D, e.domain, i);
  const I = Ge(ws);
  K(D, e.tld, I), K(D, e.utld, I), K(I, e.domain, i), K(I, s, r), k(I, mt, D), k(I, Je, M), k(I, Bt, f);
  const U = k(I, Kt), ee = Ge(ws);
  K(U, e.numeric, ee);
  const L = Ge(ws), q = Ge();
  K(L, t, L), K(L, n, q), K(q, t, L), K(q, n, q), k(I, gt, L), k(ee, gt, L);
  const ve = k(l, Kt), ae = k(a, Kt), be = k(ae, gt), ke = k(be, gt);
  K(l, e.domain, i), k(l, mt, D), k(l, Je, M), K(a, e.domain, i), k(a, mt, D), k(a, Je, M), K(ve, e.domain, L), k(ve, gt, L), k(ve, Yn, L), K(ke, e.domain, L), K(ke, t, L), k(ke, gt, L);
  const Be = [
    [qn, Gn],
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
  for (let _e = 0; _e < Be.length; _e++) {
    const [Nt, Vt] = Be[_e], Oe = k(L, Nt);
    k(q, Nt, Oe), k(Oe, Vt, L);
    const te = Ge(ws);
    K(Oe, t, te);
    const F = Ge();
    K(Oe, n), K(te, t, te), K(te, n, F), K(F, t, te), K(F, n, F), k(te, Vt, L), k(F, Vt, L);
  }
  return k(o, ls, I), k(o, ui, Vp), {
    start: o,
    tokens: oc
  };
}
function Hp(e, t, n) {
  let s = n.length, o = 0, r = [], i = [];
  for (; o < s; ) {
    let l = e, a = null, f = null, d = 0, c = null, u = -1;
    for (; o < s && !(a = l.go(n[o].t)); )
      i.push(n[o++]);
    for (; o < s && (f = a || l.go(n[o].t)); )
      a = null, l = f, l.accepts() ? (u = 0, c = l) : u >= 0 && u++, o++, d++;
    if (u < 0)
      o -= d, o < s && (i.push(n[o]), o++);
    else {
      i.length > 0 && (r.push(ir(xl, t, i)), i = []), o -= u, d -= u;
      const m = c.t, E = n.slice(o - d, o);
      r.push(ir(m, t, E));
    }
  }
  return i.length > 0 && r.push(ir(xl, t, i)), r;
}
function ir(e, t, n) {
  const s = n[0].s, o = n[n.length - 1].e, r = t.slice(s, o);
  return new e(r, n);
}
const jp = typeof console < "u" && console && console.warn || (() => {
}), Bp = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", se = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function Fp() {
  return He.groups = {}, se.scanner = null, se.parser = null, se.tokenQueue = [], se.pluginQueue = [], se.customSchemes = [], se.initialized = !1, se;
}
function _l(e, t = !1) {
  if (se.initialized && jp(`linkifyjs: already initialized - will not register custom scheme "${e}" ${Bp}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(e))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  se.customSchemes.push([e, t]);
}
function Up() {
  se.scanner = Pp(se.customSchemes);
  for (let e = 0; e < se.tokenQueue.length; e++)
    se.tokenQueue[e][1]({
      scanner: se.scanner
    });
  se.parser = $p(se.scanner.tokens);
  for (let e = 0; e < se.pluginQueue.length; e++)
    se.pluginQueue[e][1]({
      scanner: se.scanner,
      parser: se.parser
    });
  return se.initialized = !0, se;
}
function gi(e) {
  return se.initialized || Up(), Hp(se.parser.start, e, rc(se.scanner.start, e));
}
gi.scan = rc;
function lc(e, t = null, n = null) {
  if (t && typeof t == "object") {
    if (n)
      throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
    n = t, t = null;
  }
  const s = new mi(n), o = gi(e), r = [];
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    l.isLink && (!t || l.t === t) && s.check(l) && r.push(l.toFormattedObject(s));
  }
  return r;
}
var vi = "[\0-   ᠎ -\u2029 　]", Kp = new RegExp(vi), Wp = new RegExp(`${vi}$`), zp = new RegExp(vi, "g");
function qp(e) {
  return e.length === 1 ? e[0].isLink : e.length === 3 && e[1].isLink ? ["()", "[]"].includes(e[0].value + e[2].value) : !1;
}
function Gp(e) {
  return new ze({
    key: new Ye("autolink"),
    appendTransaction: (t, n, s) => {
      const o = t.some((f) => f.docChanged) && !n.doc.eq(s.doc), r = t.some((f) => f.getMeta("preventAutolink"));
      if (!o || r)
        return;
      const { tr: i } = s, l = Oc(n.doc, [...t]);
      if (Tc(l).forEach(({ newRange: f }) => {
        const d = Cc(s.doc, f, (m) => m.isTextblock);
        let c, u;
        if (d.length > 1)
          c = d[0], u = s.doc.textBetween(
            c.pos,
            c.pos + c.node.nodeSize,
            void 0,
            " "
          );
        else if (d.length) {
          const m = s.doc.textBetween(f.from, f.to, " ", " ");
          if (!Wp.test(m))
            return;
          c = d[0], u = s.doc.textBetween(c.pos, f.to, void 0, " ");
        }
        if (c && u) {
          const m = u.split(Kp).filter(Boolean);
          if (m.length <= 0)
            return !1;
          const E = m[m.length - 1], y = c.pos + u.lastIndexOf(E);
          if (!E)
            return !1;
          const M = gi(E).map((D) => D.toObject(e.defaultProtocol));
          if (!qp(M))
            return !1;
          M.filter((D) => D.isLink).map((D) => ({
            ...D,
            from: y + D.start + 1,
            to: y + D.end + 1
          })).filter((D) => s.schema.marks.code ? !s.doc.rangeHasMark(D.from, D.to, s.schema.marks.code) : !0).filter((D) => e.validate(D.value)).filter((D) => e.shouldAutoLink(D.value)).forEach((D) => {
            Ac(D.from, D.to, s.doc).some((I) => I.mark.type === e.type) || i.addMark(
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
function Jp(e) {
  return new ze({
    key: new Ye("handleClickLink"),
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
          const a = Sc(t.state, e.type.name), f = (o = i.href) != null ? o : a.href, d = (r = i.target) != null ? r : a.target;
          f && (window.open(f, d), l = !0);
        }
        return l;
      }
    }
  });
}
function Yp(e) {
  return new ze({
    key: new Ye("handlePasteLink"),
    props: {
      handlePaste: (t, n, s) => {
        const { shouldAutoLink: o } = e, { state: r } = t, { selection: i } = r, { empty: l } = i;
        if (l)
          return !1;
        let a = "";
        s.content.forEach((d) => {
          a += d.textContent;
        });
        const f = lc(a, { defaultProtocol: e.defaultProtocol }).find(
          (d) => d.isLink && d.value === a
        );
        return !a || !f || o !== void 0 && !o(f.value) ? !1 : e.editor.commands.setMark(e.type, {
          href: f.href
        });
      }
    }
  });
}
function Qt(e, t) {
  const n = ["http", "https", "ftp", "ftps", "mailto", "tel", "callto", "sms", "cid", "xmpp"];
  return t && t.forEach((s) => {
    const o = typeof s == "string" ? s : s.scheme;
    o && n.push(o);
  }), !e || e.replace(zp, "").match(
    new RegExp(
      // eslint-disable-next-line no-useless-escape
      `^(?:(?:${n.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
      "i"
    )
  );
}
var ac = Tn.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((e) => {
      if (typeof e == "string") {
        _l(e);
        return;
      }
      _l(e.scheme, e.optionalSlashes);
    });
  },
  onDestroy() {
    Fp();
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
      isAllowedUri: (e, t) => !!Qt(e, t.protocols),
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
            defaultValidate: (n) => !!Qt(n, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return this.options.isAllowedUri(e.href, {
      defaultValidate: (t) => !!Qt(t, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", pe(this.options.HTMLAttributes, e), 0] : ["a", pe(this.options.HTMLAttributes, { ...e, href: "" }), 0];
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
          defaultValidate: (s) => !!Qt(s, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? t().setMark(this.name, e).setMeta("preventAutolink", !0).run() : !1;
      },
      toggleLink: (e) => ({ chain: t }) => {
        const { href: n } = e || {};
        return n && !this.options.isAllowedUri(n, {
          defaultValidate: (s) => !!Qt(s, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? !1 : t().toggleMark(this.name, e, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run();
      },
      unsetLink: () => ({ chain: e }) => e().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      cn({
        find: (e) => {
          const t = [];
          if (e) {
            const { protocols: n, defaultProtocol: s } = this.options, o = lc(e).filter(
              (r) => r.isLink && this.options.isAllowedUri(r.value, {
                defaultValidate: (i) => !!Qt(i, n),
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
      Gp({
        type: this.type,
        defaultProtocol: this.options.defaultProtocol,
        validate: (s) => this.options.isAllowedUri(s, {
          defaultValidate: (o) => !!Qt(o, t),
          protocols: t,
          defaultProtocol: n
        }),
        shouldAutoLink: this.options.shouldAutoLink
      })
    ), e.push(
      Jp({
        type: this.type,
        editor: this.editor,
        openOnClick: this.options.openOnClick === "whenNotEditable" ? !0 : this.options.openOnClick,
        enableClickSelection: this.options.enableClickSelection
      })
    ), this.options.linkOnPaste && e.push(
      Yp({
        editor: this.editor,
        defaultProtocol: this.options.defaultProtocol,
        type: this.type,
        shouldAutoLink: this.options.shouldAutoLink
      })
    ), e;
  }
}), Xp = ac, Qp = Object.defineProperty, Zp = (e, t) => {
  for (var n in t)
    Qp(e, n, { get: t[n], enumerable: !0 });
}, eh = "listItem", wl = "textStyle", Nl = /^\s*([-+*])\s$/, cc = je.create({
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
    return ["ul", pe(this.options.HTMLAttributes, e), 0];
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
      toggleBulletList: () => ({ commands: e, chain: t }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(eh, this.editor.getAttributes(wl)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let e = _n({
      find: Nl,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (e = _n({
      find: Nl,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(wl),
      editor: this.editor
    })), [e];
  }
}), uc = je.create({
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
    return ["li", pe(this.options.HTMLAttributes, e), 0];
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
  renderMarkdown: (e, t, n) => Rl(
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
}), th = {};
Zp(th, {
  findListItemPos: () => vs,
  getNextListDepth: () => bi,
  handleBackspace: () => Pr,
  handleDelete: () => Rr,
  hasListBefore: () => dc,
  hasListItemAfter: () => nh,
  hasListItemBefore: () => fc,
  listItemHasSubList: () => pc,
  nextListIsDeeper: () => hc,
  nextListIsHigher: () => mc
});
var vs = (e, t) => {
  const { $from: n } = t.selection, s = Vl(e, t.schema);
  let o = null, r = n.depth, i = n.pos, l = null;
  for (; r > 0 && l === null; )
    o = n.node(r), o.type === s ? l = r : (r -= 1, i -= 1);
  return l === null ? null : { $pos: t.doc.resolve(i), depth: l };
}, bi = (e, t) => {
  const n = vs(e, t);
  if (!n)
    return !1;
  const [, s] = Ic(t, e, n.$pos.pos + 4);
  return s;
}, dc = (e, t, n) => {
  const { $anchor: s } = e.selection, o = Math.max(0, s.pos - 2), r = e.doc.resolve(o).node();
  return !(!r || !n.includes(r.type.name));
}, fc = (e, t) => {
  var n;
  const { $anchor: s } = t.selection, o = t.doc.resolve(s.pos - 2);
  return !(o.index() === 0 || ((n = o.nodeBefore) == null ? void 0 : n.type.name) !== e);
}, pc = (e, t, n) => {
  if (!n)
    return !1;
  const s = Vl(e, t.schema);
  let o = !1;
  return n.descendants((r) => {
    r.type === s && (o = !0);
  }), o;
}, Pr = (e, t, n) => {
  if (e.commands.undoInputRule())
    return !0;
  if (e.state.selection.from !== e.state.selection.to)
    return !1;
  if (!dr(e.state, t) && dc(e.state, t, n)) {
    const { $anchor: l } = e.state.selection, a = e.state.doc.resolve(l.before() - 1), f = [];
    a.node().descendants((u, m) => {
      u.type.name === t && f.push({ node: u, pos: m });
    });
    const d = f.at(-1);
    if (!d)
      return !1;
    const c = e.state.doc.resolve(a.start() + d.pos + 1);
    return e.chain().cut({ from: l.start() - 1, to: l.end() + 1 }, c.end()).joinForward().run();
  }
  if (!dr(e.state, t) || !Mc(e.state))
    return !1;
  const s = vs(t, e.state);
  if (!s)
    return !1;
  const r = e.state.doc.resolve(s.$pos.pos - 2).node(s.depth), i = pc(t, e.state, r);
  return fc(t, e.state) && !i ? e.commands.joinItemBackward() : e.chain().liftListItem(t).run();
}, hc = (e, t) => {
  const n = bi(e, t), s = vs(e, t);
  return !s || !n ? !1 : n > s.depth;
}, mc = (e, t) => {
  const n = bi(e, t), s = vs(e, t);
  return !s || !n ? !1 : n < s.depth;
}, Rr = (e, t) => {
  if (!dr(e.state, t) || !Dc(e.state, t))
    return !1;
  const { selection: n } = e.state, { $from: s, $to: o } = n;
  return !n.empty && s.sameParent(o) ? !1 : hc(t, e.state) ? e.chain().focus(e.state.selection.from + 4).lift(t).joinBackward().run() : mc(t, e.state) ? e.chain().joinForward().joinBackward().run() : e.commands.joinItemForward();
}, nh = (e, t) => {
  var n;
  const { $anchor: s } = t.selection, o = t.doc.resolve(s.pos - s.parentOffset - 2);
  return !(o.index() === o.parent.childCount - 1 || ((n = o.nodeAfter) == null ? void 0 : n.type.name) !== e);
}, gc = Xe.create({
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
}), kl = /^(\s*)(\d+)\.\s+(.*)$/, sh = /^\s/;
function oh(e) {
  const t = [];
  let n = 0, s = 0;
  for (; n < e.length; ) {
    const o = e[n], r = o.match(kl);
    if (!r)
      break;
    const [, i, l, a] = r, f = i.length;
    let d = a, c = n + 1;
    const u = [o];
    for (; c < e.length; ) {
      const m = e[c];
      if (m.match(kl))
        break;
      if (m.trim() === "")
        u.push(m), d += `
`, c += 1;
      else if (m.match(sh))
        u.push(m), d += `
${m.slice(f + 2)}`, c += 1;
      else
        break;
    }
    t.push({
      indent: f,
      number: parseInt(l, 10),
      content: d.trim(),
      raw: u.join(`
`)
    }), s = c, n = c;
  }
  return [t, s];
}
function vc(e, t, n) {
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
      const d = l.slice(1).join(`
`).trim();
      if (d) {
        const m = n.blockTokens(d);
        f.push(...m);
      }
      let c = r + 1;
      const u = [];
      for (; c < e.length && e[c].indent > t; )
        u.push(e[c]), c += 1;
      if (u.length > 0) {
        const m = Math.min(...u.map((y) => y.indent)), E = vc(u, m, n);
        f.push({
          type: "list",
          ordered: !0,
          start: u[0].number,
          items: E,
          raw: u.map((y) => y.raw).join(`
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
function rh(e, t) {
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
var ih = "listItem", Ol = "textStyle", Tl = /^(\d+)\.\s$/, bc = je.create({
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
    return t === 1 ? ["ol", pe(this.options.HTMLAttributes, n), 0] : ["ol", pe(this.options.HTMLAttributes, e), 0];
  },
  markdownTokenName: "list",
  parseMarkdown: (e, t) => {
    if (e.type !== "list" || !e.ordered)
      return [];
    const n = e.start || 1, s = e.items ? rh(e.items, t) : [];
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
`), [r, i] = oh(o);
      if (r.length === 0)
        return;
      const l = vc(r, 0, n);
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
      toggleOrderedList: () => ({ commands: e, chain: t }) => this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(ih, this.editor.getAttributes(Ol)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let e = _n({
      find: Tl,
      type: this.type,
      getAttributes: (t) => ({ start: +t[1] }),
      joinPredicate: (t, n) => n.childCount + n.attrs.start === +t[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (e = _n({
      find: Tl,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (t) => ({ start: +t[1], ...this.editor.getAttributes(Ol) }),
      joinPredicate: (t, n) => n.childCount + n.attrs.start === +t[1],
      editor: this.editor
    })), [e];
  }
}), lh = /^\s*(\[([( |x])?\])\s$/, ah = je.create({
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
      pe(this.options.HTMLAttributes, t, {
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
    return Rl(e, t, o);
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
        var u, m;
        l.ariaLabel = ((m = (u = this.options.a11y) == null ? void 0 : u.checkboxLabel) == null ? void 0 : m.call(u, c, l.checked)) || `Task item checkbox for ${c.textContent || "empty task item"}`;
      };
      f(e), r.contentEditable = "false", l.type = "checkbox", l.addEventListener("mousedown", (c) => c.preventDefault()), l.addEventListener("change", (c) => {
        if (!s.isEditable && !this.options.onReadOnlyChecked) {
          l.checked = !l.checked;
          return;
        }
        const { checked: u } = c.target;
        s.isEditable && typeof n == "function" && s.chain().focus(void 0, { scrollIntoView: !1 }).command(({ tr: m }) => {
          const E = n();
          if (typeof E != "number")
            return !1;
          const y = m.doc.nodeAt(E);
          return m.setNodeMarkup(E, void 0, {
            ...y?.attrs,
            checked: u
          }), !0;
        }).run(), !s.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(e, u) || (l.checked = !l.checked));
      }), Object.entries(this.options.HTMLAttributes).forEach(([c, u]) => {
        o.setAttribute(c, u);
      }), o.dataset.checked = e.attrs.checked, l.checked = e.attrs.checked, r.append(l, i), o.append(r, a), Object.entries(t).forEach(([c, u]) => {
        o.setAttribute(c, u);
      });
      let d = new Set(Object.keys(t));
      return {
        dom: o,
        contentDOM: a,
        update: (c) => {
          if (c.type !== this.type)
            return !1;
          o.dataset.checked = c.attrs.checked, l.checked = c.attrs.checked, f(c);
          const u = s.extensionManager.attributes, m = Lc(c, u), E = new Set(Object.keys(m)), y = this.options.HTMLAttributes;
          return d.forEach((M) => {
            E.has(M) || (M in y ? o.setAttribute(M, y[M]) : o.removeAttribute(M));
          }), Object.entries(m).forEach(([M, D]) => {
            D == null ? M in y ? o.setAttribute(M, y[M]) : o.removeAttribute(M) : o.setAttribute(M, D);
          }), d = E, !0;
        }
      };
    };
  },
  addInputRules() {
    return [
      _n({
        find: lh,
        type: this.type,
        getAttributes: (e) => ({
          checked: e[e.length - 1] === "x"
        })
      })
    ];
  }
}), ch = je.create({
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
    return ["ul", pe(this.options.HTMLAttributes, e, { "data-type": this.name }), 0];
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
        const i = Ni(
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
      }, o = Ni(
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
Xe.create({
  name: "listKit",
  addExtensions() {
    const e = [];
    return this.options.bulletList !== !1 && e.push(cc.configure(this.options.bulletList)), this.options.listItem !== !1 && e.push(uc.configure(this.options.listItem)), this.options.listKeymap !== !1 && e.push(gc.configure(this.options.listKeymap)), this.options.orderedList !== !1 && e.push(bc.configure(this.options.orderedList)), this.options.taskItem !== !1 && e.push(ah.configure(this.options.taskItem)), this.options.taskList !== !1 && e.push(ch.configure(this.options.taskList)), e;
  }
});
var Cl = "&nbsp;", uh = " ", dh = je.create({
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
    return ["p", pe(this.options.HTMLAttributes, e), 0];
  },
  parseMarkdown: (e, t) => {
    const n = e.tokens || [];
    if (n.length === 1 && n[0].type === "image")
      return t.parseChildren([n[0]]);
    const s = t.parseInline(n);
    return s.length === 1 && s[0].type === "text" && (s[0].text === Cl || s[0].text === uh) ? t.createNode("paragraph", void 0, []) : t.createNode("paragraph", void 0, s);
  },
  renderMarkdown: (e, t) => {
    if (!e)
      return "";
    const n = Array.isArray(e.content) ? e.content : [];
    return n.length === 0 ? Cl : t.renderChildren(n);
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
}), fh = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, ph = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, hh = Tn.create({
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
    return ["s", pe(this.options.HTMLAttributes, e), 0];
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
      wn({
        find: fh,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      cn({
        find: ph,
        type: this.type
      })
    ];
  }
}), mh = je.create({
  name: "text",
  group: "inline",
  parseMarkdown: (e) => ({
    type: "text",
    text: e.text || ""
  }),
  renderMarkdown: (e) => e.text || ""
}), gh = Tn.create({
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
    return ["u", pe(this.options.HTMLAttributes, e), 0];
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
function vh(e = {}) {
  return new ze({
    view(t) {
      return new bh(t, e);
    }
  });
}
class bh {
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
      let c = t.nodeBefore, u = t.nodeAfter;
      if (c || u) {
        let m = this.editorView.nodeDOM(this.cursorPos - (c ? c.nodeSize : 0));
        if (m) {
          let E = m.getBoundingClientRect(), y = c ? E.bottom : E.top;
          c && u && (y = (y + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
          let M = this.width / 2 * l;
          s = { left: E.left, right: E.right, top: y - M, bottom: y + M };
        }
      }
    }
    if (!s) {
      let c = this.editorView.coordsAtPos(this.cursorPos), u = this.width / 2 * i;
      s = { left: c.left - u, right: c.left + u, top: c.top, bottom: c.bottom };
    }
    let a = this.editorView.dom.offsetParent;
    this.element || (this.element = a.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", n), this.element.classList.toggle("prosemirror-dropcursor-inline", !n);
    let f, d;
    if (!a || a == document.body && getComputedStyle(a).position == "static")
      f = -pageXOffset, d = -pageYOffset;
    else {
      let c = a.getBoundingClientRect(), u = c.width / a.offsetWidth, m = c.height / a.offsetHeight;
      f = c.left - a.scrollLeft * u, d = c.top - a.scrollTop * m;
    }
    this.element.style.left = (s.left - f) / i + "px", this.element.style.top = (s.top - d) / l + "px", this.element.style.width = (s.right - s.left) / i + "px", this.element.style.height = (s.bottom - s.top) / l + "px";
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
        let l = Pc(this.editorView.state.doc, i, this.editorView.dragging.slice);
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
class ue extends Qn {
  /**
  Create a gap cursor.
  */
  constructor(t) {
    super(t, t);
  }
  map(t, n) {
    let s = t.resolve(n.map(this.head));
    return ue.valid(s) ? new ue(s) : Qn.near(s);
  }
  content() {
    return $l.empty;
  }
  eq(t) {
    return t instanceof ue && t.head == this.head;
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
    return new ue(t.resolve(n.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new yi(this.anchor);
  }
  /**
  @internal
  */
  static valid(t) {
    let n = t.parent;
    if (n.isTextblock || !yh(t) || !Eh(t))
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
      if (!s && ue.valid(t))
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
        if (ue.valid(a))
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
        if (ue.valid(l))
          return l;
      }
      return null;
    }
  }
}
ue.prototype.visible = !1;
ue.findFrom = ue.findGapCursorFrom;
Qn.jsonID("gapcursor", ue);
class yi {
  constructor(t) {
    this.pos = t;
  }
  map(t) {
    return new yi(t.map(this.pos));
  }
  resolve(t) {
    let n = t.resolve(this.pos);
    return ue.valid(n) ? new ue(n) : Qn.near(n);
  }
}
function yc(e) {
  return e.isAtom || e.spec.isolating || e.spec.createGapCursor;
}
function yh(e) {
  for (let t = e.depth; t >= 0; t--) {
    let n = e.index(t), s = e.node(t);
    if (n == 0) {
      if (s.type.spec.isolating)
        return !0;
      continue;
    }
    for (let o = s.child(n - 1); ; o = o.lastChild) {
      if (o.childCount == 0 && !o.inlineContent || yc(o.type))
        return !0;
      if (o.inlineContent)
        return !1;
    }
  }
  return !0;
}
function Eh(e) {
  for (let t = e.depth; t >= 0; t--) {
    let n = e.indexAfter(t), s = e.node(t);
    if (n == s.childCount) {
      if (s.type.spec.isolating)
        return !0;
      continue;
    }
    for (let o = s.child(n); ; o = o.firstChild) {
      if (o.childCount == 0 && !o.inlineContent || yc(o.type))
        return !0;
      if (o.inlineContent)
        return !1;
    }
  }
  return !0;
}
function xh() {
  return new ze({
    props: {
      decorations: kh,
      createSelectionBetween(e, t, n) {
        return t.pos == n.pos && ue.valid(n) ? new ue(n) : null;
      },
      handleClick: wh,
      handleKeyDown: _h,
      handleDOMEvents: { beforeinput: Nh }
    }
  });
}
const _h = Rc({
  ArrowLeft: Ns("horiz", -1),
  ArrowRight: Ns("horiz", 1),
  ArrowUp: Ns("vert", -1),
  ArrowDown: Ns("vert", 1)
});
function Ns(e, t) {
  const n = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
  return function(s, o, r) {
    let i = s.selection, l = t > 0 ? i.$to : i.$from, a = i.empty;
    if (i instanceof nn) {
      if (!r.endOfTextblock(n) || l.depth == 0)
        return !1;
      a = !1, l = s.doc.resolve(t > 0 ? l.after() : l.before());
    }
    let f = ue.findGapCursorFrom(l, t, a);
    return f ? (o && o(s.tr.setSelection(new ue(f))), !0) : !1;
  };
}
function wh(e, t, n) {
  if (!e || !e.editable)
    return !1;
  let s = e.state.doc.resolve(t);
  if (!ue.valid(s))
    return !1;
  let o = e.posAtCoords({ left: n.clientX, top: n.clientY });
  return o && o.inside > -1 && Vr.isSelectable(e.state.doc.nodeAt(o.inside)) ? !1 : (e.dispatch(e.state.tr.setSelection(new ue(s))), !0);
}
function Nh(e, t) {
  if (t.inputType != "insertCompositionText" || !(e.state.selection instanceof ue))
    return !1;
  let { $from: n } = e.state.selection, s = n.parent.contentMatchAt(n.index()).findWrapping(e.state.schema.nodes.text);
  if (!s)
    return !1;
  let o = ki.empty;
  for (let i = s.length - 1; i >= 0; i--)
    o = ki.from(s[i].createAndFill(null, o));
  let r = e.state.tr.replace(n.pos, n.pos, new $l(o, 0, 0));
  return r.setSelection(nn.near(r.doc.resolve(n.pos + 1))), e.dispatch(r), !1;
}
function kh(e) {
  if (!(e.selection instanceof ue))
    return null;
  let t = document.createElement("div");
  return t.className = "ProseMirror-gapcursor", Zn.create(e.doc, [To.widget(e.selection.head, t, { key: "gapcursor" })]);
}
var Oo = 200, xe = function() {
};
xe.prototype.append = function(t) {
  return t.length ? (t = xe.from(t), !this.length && t || t.length < Oo && this.leafAppend(t) || this.length < Oo && t.leafPrepend(this) || this.appendInner(t)) : this;
};
xe.prototype.prepend = function(t) {
  return t.length ? xe.from(t).append(this) : this;
};
xe.prototype.appendInner = function(t) {
  return new Oh(this, t);
};
xe.prototype.slice = function(t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = this.length), t >= n ? xe.empty : this.sliceInner(Math.max(0, t), Math.min(this.length, n));
};
xe.prototype.get = function(t) {
  if (!(t < 0 || t >= this.length))
    return this.getInner(t);
};
xe.prototype.forEach = function(t, n, s) {
  n === void 0 && (n = 0), s === void 0 && (s = this.length), n <= s ? this.forEachInner(t, n, s, 0) : this.forEachInvertedInner(t, n, s, 0);
};
xe.prototype.map = function(t, n, s) {
  n === void 0 && (n = 0), s === void 0 && (s = this.length);
  var o = [];
  return this.forEach(function(r, i) {
    return o.push(t(r, i));
  }, n, s), o;
};
xe.from = function(t) {
  return t instanceof xe ? t : t && t.length ? new Ec(t) : xe.empty;
};
var Ec = /* @__PURE__ */ (function(e) {
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
    if (this.length + o.length <= Oo)
      return new t(this.values.concat(o.flatten()));
  }, t.prototype.leafPrepend = function(o) {
    if (this.length + o.length <= Oo)
      return new t(o.flatten().concat(this.values));
  }, n.length.get = function() {
    return this.values.length;
  }, n.depth.get = function() {
    return 0;
  }, Object.defineProperties(t.prototype, n), t;
})(xe);
xe.empty = new Ec([]);
var Oh = /* @__PURE__ */ (function(e) {
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
})(xe);
const Th = 500;
class et {
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
    let i = t.tr, l, a, f = [], d = [];
    return this.items.forEach((c, u) => {
      if (!c.step) {
        o || (o = this.remapping(s, u + 1), r = o.maps.length), r--, d.push(c);
        return;
      }
      if (o) {
        d.push(new vt(c.map));
        let m = c.step.map(o.slice(r)), E;
        m && i.maybeStep(m).doc && (E = i.mapping.maps[i.mapping.maps.length - 1], f.push(new vt(E, void 0, void 0, f.length + d.length))), r--, E && o.appendMap(E, r);
      } else
        i.maybeStep(c.step);
      if (c.selection)
        return l = o ? c.selection.map(o.slice(r)) : c.selection, a = new et(this.items.slice(0, s).append(d.reverse().concat(f)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: i, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(t, n, s, o) {
    let r = [], i = this.eventCount, l = this.items, a = !o && l.length ? l.get(l.length - 1) : null;
    for (let d = 0; d < t.steps.length; d++) {
      let c = t.steps[d].invert(t.docs[d]), u = new vt(t.mapping.maps[d], c, n), m;
      (m = a && a.merge(u)) && (u = m, d ? r.pop() : l = l.slice(0, l.length - 1)), r.push(u), n && (i++, n = void 0), o || (a = u);
    }
    let f = i - s.depth;
    return f > Ah && (l = Ch(l, f), i -= f), new et(l.append(r), i);
  }
  remapping(t, n) {
    let s = new Vc();
    return this.items.forEach((o, r) => {
      let i = o.mirrorOffset != null && r - o.mirrorOffset >= t ? s.maps.length - o.mirrorOffset : void 0;
      s.appendMap(o.map, i);
    }, t, n), s;
  }
  addMaps(t) {
    return this.eventCount == 0 ? this : new et(this.items.append(t.map((n) => new vt(n))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(t, n) {
    if (!this.eventCount)
      return this;
    let s = [], o = Math.max(0, this.items.length - n), r = t.mapping, i = t.steps.length, l = this.eventCount;
    this.items.forEach((u) => {
      u.selection && l--;
    }, o);
    let a = n;
    this.items.forEach((u) => {
      let m = r.getMirror(--a);
      if (m == null)
        return;
      i = Math.min(i, m);
      let E = r.maps[m];
      if (u.step) {
        let y = t.steps[m].invert(t.docs[m]), M = u.selection && u.selection.map(r.slice(a + 1, m));
        M && l++, s.push(new vt(E, y, M));
      } else
        s.push(new vt(E));
    }, o);
    let f = [];
    for (let u = n; u < i; u++)
      f.push(new vt(r.maps[u]));
    let d = this.items.slice(0, o).append(f).append(s), c = new et(d, l);
    return c.emptyItemCount() > Th && (c = c.compress(this.items.length - s.length)), c;
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
          let d = i.selection && i.selection.map(n.slice(s));
          d && r++;
          let c = new vt(f.invert(), a, d), u, m = o.length - 1;
          (u = o.length && o[m].merge(c)) ? o[m] = u : o.push(c);
        }
      } else i.map && s--;
    }, this.items.length, 0), new et(xe.from(o.reverse()), r);
  }
}
et.empty = new et(xe.empty, 0);
function Ch(e, t) {
  let n;
  return e.forEach((s, o) => {
    if (s.selection && t-- == 0)
      return n = o, !1;
  }), e.slice(n);
}
class vt {
  constructor(t, n, s, o) {
    this.map = t, this.step = n, this.selection = s, this.mirrorOffset = o;
  }
  merge(t) {
    if (this.step && t.step && !t.selection) {
      let n = t.step.merge(this.step);
      if (n)
        return new vt(n.getMap().invert(), n, this.selection);
    }
  }
}
class Ft {
  constructor(t, n, s, o, r) {
    this.done = t, this.undone = n, this.prevRanges = s, this.prevTime = o, this.prevComposition = r;
  }
}
const Ah = 20;
function Sh(e, t, n, s) {
  let o = n.getMeta(an), r;
  if (o)
    return o.historyState;
  n.getMeta(Dh) && (e = new Ft(e.done, e.undone, null, 0, -1));
  let i = n.getMeta("appendedTransaction");
  if (n.steps.length == 0)
    return e;
  if (i && i.getMeta(an))
    return i.getMeta(an).redo ? new Ft(e.done.addTransform(n, void 0, s, Rs(t)), e.undone, Al(n.mapping.maps), e.prevTime, e.prevComposition) : new Ft(e.done, e.undone.addTransform(n, void 0, s, Rs(t)), null, e.prevTime, e.prevComposition);
  if (n.getMeta("addToHistory") !== !1 && !(i && i.getMeta("addToHistory") === !1)) {
    let l = n.getMeta("composition"), a = e.prevTime == 0 || !i && e.prevComposition != l && (e.prevTime < (n.time || 0) - s.newGroupDelay || !Lh(n, e.prevRanges)), f = i ? lr(e.prevRanges, n.mapping) : Al(n.mapping.maps);
    return new Ft(e.done.addTransform(n, a ? t.selection.getBookmark() : void 0, s, Rs(t)), et.empty, f, n.time, l ?? e.prevComposition);
  } else return (r = n.getMeta("rebased")) ? new Ft(e.done.rebased(n, r), e.undone.rebased(n, r), lr(e.prevRanges, n.mapping), e.prevTime, e.prevComposition) : new Ft(e.done.addMaps(n.mapping.maps), e.undone.addMaps(n.mapping.maps), lr(e.prevRanges, n.mapping), e.prevTime, e.prevComposition);
}
function Lh(e, t) {
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
function Al(e) {
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
function Mh(e, t, n) {
  let s = Rs(t), o = an.get(t).spec.config, r = (n ? e.undone : e.done).popEvent(t, s);
  if (!r)
    return null;
  let i = r.selection.resolve(r.transform.doc), l = (n ? e.done : e.undone).addTransform(r.transform, t.selection.getBookmark(), o, s), a = new Ft(n ? l : r.remaining, n ? r.remaining : l, null, 0, -1);
  return r.transform.setSelection(i).setMeta(an, { redo: n, historyState: a });
}
let ar = !1, Sl = null;
function Rs(e) {
  let t = e.plugins;
  if (Sl != t) {
    ar = !1, Sl = t;
    for (let n = 0; n < t.length; n++)
      if (t[n].spec.historyPreserveItems) {
        ar = !0;
        break;
      }
  }
  return ar;
}
const an = new Ye("history"), Dh = new Ye("closeHistory");
function Ih(e = {}) {
  return e = {
    depth: e.depth || 100,
    newGroupDelay: e.newGroupDelay || 500
  }, new ze({
    key: an,
    state: {
      init() {
        return new Ft(et.empty, et.empty, null, 0, -1);
      },
      apply(t, n, s) {
        return Sh(n, s, t, e);
      }
    },
    config: e,
    props: {
      handleDOMEvents: {
        beforeinput(t, n) {
          let s = n.inputType, o = s == "historyUndo" ? _c : s == "historyRedo" ? wc : null;
          return !o || !t.editable ? !1 : (n.preventDefault(), o(t.state, t.dispatch));
        }
      }
    }
  });
}
function xc(e, t) {
  return (n, s) => {
    let o = an.getState(n);
    if (!o || (e ? o.undone : o.done).eventCount == 0)
      return !1;
    if (s) {
      let r = Mh(o, n, e);
      r && s(t ? r.scrollIntoView() : r);
    }
    return !0;
  };
}
const _c = xc(!1, !0), wc = xc(!0, !0);
Xe.create({
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
      new ze({
        key: new Ye("characterCount"),
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
          const l = t.selection.$head.pos, a = r - s, f = l - a, d = l;
          return t.deleteRange(f, d), !(this.storage.characters({ node: t.doc }) > s);
        }
      })
    ];
  }
});
var Ph = Xe.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [vh(this.options)];
  }
});
Xe.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [
      new ze({
        key: new Ye("focus"),
        props: {
          decorations: ({ doc: e, selection: t }) => {
            const { isEditable: n, isFocused: s } = this.editor, { anchor: o } = t, r = [];
            if (!n || !s)
              return Zn.create(e, []);
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
            }), Zn.create(e, r);
          }
        }
      })
    ];
  }
});
var Rh = Xe.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [xh()];
  },
  extendNodeSchema(e) {
    var t;
    const n = {
      name: e.name,
      options: e.options,
      storage: e.storage
    };
    return {
      allowGapCursor: (t = $c(Hc(e, "allowGapCursor", n))) != null ? t : null
    };
  }
}), Ll = "placeholder";
function Vh(e) {
  return e.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "").replace(/^[0-9-]+/, "").replace(/^-+/, "").toLowerCase();
}
var $h = Xe.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      dataAttribute: Ll,
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    const e = this.options.dataAttribute ? `data-${Vh(this.options.dataAttribute)}` : `data-${Ll}`;
    return [
      new ze({
        key: new Ye("placeholder"),
        props: {
          decorations: ({ doc: t, selection: n }) => {
            const s = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: o } = n, r = [];
            if (!s)
              return null;
            const i = this.editor.isEmpty;
            return t.descendants((l, a) => {
              const f = o >= a && o <= a + l.nodeSize, d = !l.isLeaf && jc(l);
              if ((f || !this.options.showOnlyCurrent) && d) {
                const c = [this.options.emptyNodeClass];
                i && c.push(this.options.emptyEditorClass);
                const u = To.node(a, a + l.nodeSize, {
                  class: c.join(" "),
                  [e]: typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: l,
                    pos: a,
                    hasAnchor: f
                  }) : this.options.placeholder
                });
                r.push(u);
              }
              return this.options.includeChildren;
            }), Zn.create(t, r);
          }
        }
      })
    ];
  }
});
Xe.create({
  name: "selection",
  addOptions() {
    return {
      className: "selection"
    };
  },
  addProseMirrorPlugins() {
    const { editor: e, options: t } = this;
    return [
      new ze({
        key: new Ye("selection"),
        props: {
          decorations(n) {
            return n.selection.empty || e.isFocused || !e.isEditable || Pl(n.selection) || e.view.dragging ? null : Zn.create(n.doc, [
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
function Ml({ types: e, node: t }) {
  return t && Array.isArray(e) && e.includes(t.type) || t?.type === e;
}
var Hh = Xe.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: void 0,
      notAfter: []
    };
  },
  addProseMirrorPlugins() {
    var e;
    const t = new Ye(this.name), n = this.options.node || ((e = this.editor.schema.topNodeType.contentMatch.defaultType) == null ? void 0 : e.name) || "paragraph", s = Object.entries(this.editor.schema.nodes).map(([, o]) => o).filter((o) => (this.options.notAfter || []).concat(n).includes(o.name));
    return [
      new ze({
        key: t,
        appendTransaction: (o, r, i) => {
          const { doc: l, tr: a, schema: f } = i, d = t.getState(i), c = l.content.size, u = f.nodes[n];
          if (d)
            return a.insert(c, u.create());
        },
        state: {
          init: (o, r) => {
            const i = r.tr.doc.lastChild;
            return !Ml({ node: i, types: s });
          },
          apply: (o, r) => {
            if (!o.docChanged || o.getMeta("__uniqueIDTransaction"))
              return r;
            const i = o.doc.lastChild;
            return !Ml({ node: i, types: s });
          }
        }
      })
    ];
  }
}), jh = Xe.create({
  name: "undoRedo",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: e, dispatch: t }) => _c(e, t),
      redo: () => ({ state: e, dispatch: t }) => wc(e, t)
    };
  },
  addProseMirrorPlugins() {
    return [Ih(this.options)];
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
}), Bh = Xe.create({
  name: "starterKit",
  addExtensions() {
    var e, t, n, s;
    const o = [];
    return this.options.bold !== !1 && o.push(dp.configure(this.options.bold)), this.options.blockquote !== !1 && o.push(ip.configure(this.options.blockquote)), this.options.bulletList !== !1 && o.push(cc.configure(this.options.bulletList)), this.options.code !== !1 && o.push(hp.configure(this.options.code)), this.options.codeBlock !== !1 && o.push(vp.configure(this.options.codeBlock)), this.options.document !== !1 && o.push(bp.configure(this.options.document)), this.options.dropcursor !== !1 && o.push(Ph.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && o.push(Rh.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && o.push(yp.configure(this.options.hardBreak)), this.options.heading !== !1 && o.push(Ep.configure(this.options.heading)), this.options.undoRedo !== !1 && o.push(jh.configure(this.options.undoRedo)), this.options.horizontalRule !== !1 && o.push(xp.configure(this.options.horizontalRule)), this.options.italic !== !1 && o.push(Op.configure(this.options.italic)), this.options.listItem !== !1 && o.push(uc.configure(this.options.listItem)), this.options.listKeymap !== !1 && o.push(gc.configure((e = this.options) == null ? void 0 : e.listKeymap)), this.options.link !== !1 && o.push(ac.configure((t = this.options) == null ? void 0 : t.link)), this.options.orderedList !== !1 && o.push(bc.configure(this.options.orderedList)), this.options.paragraph !== !1 && o.push(dh.configure(this.options.paragraph)), this.options.strike !== !1 && o.push(hh.configure(this.options.strike)), this.options.text !== !1 && o.push(mh.configure(this.options.text)), this.options.underline !== !1 && o.push(gh.configure((n = this.options) == null ? void 0 : n.underline)), this.options.trailingNode !== !1 && o.push(Hh.configure((s = this.options) == null ? void 0 : s.trailingNode)), o;
  }
}), Fh = Bh, Uh = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, Kh = je.create({
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
    return ["img", pe(this.options.HTMLAttributes, e)];
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
      Object.entries(i).forEach(([c, u]) => {
        if (u != null)
          switch (c) {
            case "width":
            case "height":
              break;
            default:
              a.setAttribute(c, u);
              break;
          }
      }), a.src = i.src;
      const f = new Bc({
        element: a,
        editor: l,
        node: o,
        getPos: r,
        onResize: (c, u) => {
          a.style.width = `${c}px`, a.style.height = `${u}px`;
        },
        onCommit: (c, u) => {
          const m = r();
          m !== void 0 && this.editor.chain().setNodeSelection(m).updateAttributes(this.name, {
            width: c,
            height: u
          }).run();
        },
        onUpdate: (c, u, m) => c.type === o.type,
        options: {
          directions: e,
          min: {
            width: t,
            height: n
          },
          preserveAspectRatio: s === !0
        }
      }), d = f.dom;
      return d.style.visibility = "hidden", d.style.pointerEvents = "none", a.onload = () => {
        d.style.visibility = "", d.style.pointerEvents = "";
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
      Il({
        find: Uh,
        type: this.type,
        getAttributes: (e) => {
          const [, , t, n, s] = e;
          return { src: n, alt: t, title: s };
        }
      })
    ];
  }
}), Wh = Kh, zh = $h;
const qh = { class: "tiptap-editor rounded-md border border-slate-700 bg-slate-800" }, Gh = {
  key: 0,
  class: "flex flex-wrap gap-1 border-b border-slate-700 p-2"
}, Jh = {
  key: 1,
  class: "flex items-center gap-2 border-b border-slate-700 bg-slate-800/80 px-3 py-2 text-xs text-amber-400"
}, Yh = {
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
  setup(e, { emit: t }) {
    const n = e, s = t, o = /* @__PURE__ */ Ee(!1);
    async function r(c, u) {
      const m = window.ccApiClient;
      if (!m) {
        console.error("[TipTap] No API client available");
        return;
      }
      o.value = !0;
      try {
        const E = await m.uploadImage(c);
        u.chain().focus().setImage({ src: E }).run();
      } catch (E) {
        console.error("[TipTap] Image upload failed:", E), alert("Image upload failed: " + E.message);
      } finally {
        o.value = !1;
      }
    }
    const i = Xe.create({
      name: "imageUploadHandler",
      addProseMirrorPlugins() {
        const c = this.editor;
        return [
          new ze({
            key: new Ye("imageUploadHandler"),
            props: {
              handlePaste(u, m) {
                const E = m.clipboardData?.items;
                if (!E) return !1;
                for (const y of E)
                  if (y.type.startsWith("image/")) {
                    m.preventDefault();
                    const M = y.getAsFile();
                    return M && r(M, c), !0;
                  }
                return !1;
              },
              handleDrop(u, m) {
                const E = m.dataTransfer?.files;
                if (!E || E.length === 0) return !1;
                for (const y of E)
                  if (y.type.startsWith("image/"))
                    return m.preventDefault(), r(y, c), !0;
                return !1;
              }
            }
          })
        ];
      }
    }), l = op({
      extensions: [
        Fh,
        Wh.configure({ inline: !1, allowBase64: !1 }),
        Xp.configure({ openOnClick: !1 }),
        zh.configure({ placeholder: "Start writing..." }),
        Fc,
        i
      ],
      content: n.modelValue,
      onUpdate({ editor: c }) {
        s("update:modelValue", c.getJSON());
      }
    });
    As(
      () => n.modelValue,
      (c) => {
        if (!l.value) return;
        const u = JSON.stringify(l.value.getJSON()), m = JSON.stringify(c);
        u !== m && l.value.commands.setContent(c, !1);
      }
    );
    function a() {
      const c = prompt("Enter URL:");
      c && l.value.chain().focus().setLink({ href: c }).run();
    }
    function f() {
      const c = prompt("Enter image URL:");
      c && l.value.chain().focus().setImage({ src: c }).run();
    }
    function d() {
      const c = document.createElement("input");
      c.type = "file", c.accept = "image/*", c.onchange = (u) => {
        const m = u.target.files?.[0];
        m && r(m, l.value);
      }, c.click();
    }
    return (c, u) => (re(), ie("div", qh, [
      oe(l) ? (re(), ie("div", Gh, [
        b("button", {
          type: "button",
          onClick: u[0] || (u[0] = (m) => oe(l).chain().focus().toggleBold().run()),
          class: Ve([
            "rounded px-2 py-1 text-xs font-medium",
            oe(l).isActive("bold") ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Bold"
        }, " B ", 2),
        b("button", {
          type: "button",
          onClick: u[1] || (u[1] = (m) => oe(l).chain().focus().toggleItalic().run()),
          class: Ve([
            "rounded px-2 py-1 text-xs font-medium italic",
            oe(l).isActive("italic") ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Italic"
        }, " I ", 2),
        b("button", {
          type: "button",
          onClick: u[2] || (u[2] = (m) => oe(l).chain().focus().toggleStrike().run()),
          class: Ve([
            "rounded px-2 py-1 text-xs font-medium line-through",
            oe(l).isActive("strike") ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Strikethrough"
        }, " S ", 2),
        u[9] || (u[9] = b("div", { class: "mx-1 w-px bg-slate-600" }, null, -1)),
        b("button", {
          type: "button",
          onClick: u[3] || (u[3] = (m) => oe(l).chain().focus().toggleHeading({ level: 2 }).run()),
          class: Ve([
            "rounded px-2 py-1 text-xs font-medium",
            oe(l).isActive("heading", { level: 2 }) ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Heading 2"
        }, " H2 ", 2),
        b("button", {
          type: "button",
          onClick: u[4] || (u[4] = (m) => oe(l).chain().focus().toggleHeading({ level: 3 }).run()),
          class: Ve([
            "rounded px-2 py-1 text-xs font-medium",
            oe(l).isActive("heading", { level: 3 }) ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Heading 3"
        }, " H3 ", 2),
        u[10] || (u[10] = b("div", { class: "mx-1 w-px bg-slate-600" }, null, -1)),
        b("button", {
          type: "button",
          onClick: u[5] || (u[5] = (m) => oe(l).chain().focus().toggleBulletList().run()),
          class: Ve([
            "rounded px-2 py-1 text-xs font-medium",
            oe(l).isActive("bulletList") ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Bullet List"
        }, " • List ", 2),
        b("button", {
          type: "button",
          onClick: u[6] || (u[6] = (m) => oe(l).chain().focus().toggleOrderedList().run()),
          class: Ve([
            "rounded px-2 py-1 text-xs font-medium",
            oe(l).isActive("orderedList") ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Ordered List"
        }, " 1. List ", 2),
        u[11] || (u[11] = b("div", { class: "mx-1 w-px bg-slate-600" }, null, -1)),
        b("button", {
          type: "button",
          onClick: u[7] || (u[7] = (m) => oe(l).chain().focus().toggleBlockquote().run()),
          class: Ve([
            "rounded px-2 py-1 text-xs font-medium",
            oe(l).isActive("blockquote") ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Blockquote"
        }, " “ Quote ", 2),
        b("button", {
          type: "button",
          onClick: u[8] || (u[8] = (m) => oe(l).chain().focus().toggleCodeBlock().run()),
          class: Ve([
            "rounded px-2 py-1 text-xs font-medium",
            oe(l).isActive("codeBlock") ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Code Block"
        }, " </> ", 2),
        u[12] || (u[12] = b("div", { class: "mx-1 w-px bg-slate-600" }, null, -1)),
        b("button", {
          type: "button",
          onClick: a,
          class: Ve([
            "rounded px-2 py-1 text-xs font-medium",
            oe(l).isActive("link") ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          ]),
          title: "Insert Link"
        }, " Link ", 2),
        b("button", {
          type: "button",
          onClick: d,
          class: "rounded bg-slate-700 px-2 py-1 text-xs font-medium text-slate-300 hover:bg-slate-600",
          title: "Upload Image"
        }, " Image "),
        b("button", {
          type: "button",
          onClick: f,
          class: "rounded bg-slate-700 px-2 py-1 text-xs font-medium text-slate-300 hover:bg-slate-600",
          title: "Image from URL"
        }, " URL ")
      ])) : ht("", !0),
      o.value ? (re(), ie("div", Jh, [...u[13] || (u[13] = [
        b("div", { class: "h-3 w-3 animate-spin rounded-full border-2 border-amber-400 border-t-transparent" }, null, -1),
        Js(" Uploading image... ", -1)
      ])])) : ht("", !0),
      Le(oe(sp), {
        editor: oe(l),
        class: "tiptap-content prose prose-invert max-w-none px-4 py-3"
      }, null, 8, ["editor"])
    ]));
  }
}, Xh = {
  key: 0,
  class: "flex min-h-[400px] items-center justify-center"
}, Qh = {
  key: 1,
  class: "mx-auto max-w-md p-8"
}, Zh = {
  key: 0,
  class: "text-sm text-red-400"
}, em = ["disabled"], tm = ["disabled"], nm = {
  key: 1,
  class: "space-y-4"
}, sm = { class: "rounded-md border border-green-800 bg-green-900/30 p-3 text-sm text-green-300" }, om = { class: "mb-4 flex justify-center gap-2" }, rm = ["onUpdate:modelValue", "disabled", "onInput", "onKeydown"], im = {
  key: 0,
  class: "mb-4 text-sm text-red-400"
}, lm = ["disabled"], am = {
  key: 2,
  class: "p-6"
}, cm = { class: "mb-6 flex items-center justify-between" }, um = { class: "text-sm text-slate-400" }, dm = {
  key: 0,
  class: "mb-4 rounded-md border border-red-800 bg-red-900/30 p-4 text-sm text-red-300"
}, fm = {
  key: 1,
  class: "py-12 text-center"
}, pm = {
  key: 2,
  class: "overflow-hidden rounded-lg border border-slate-800 bg-slate-900 shadow"
}, hm = { class: "min-w-full divide-y divide-slate-800" }, mm = { class: "divide-y divide-slate-800 bg-slate-900" }, gm = { class: "whitespace-nowrap px-6 py-4" }, vm = { class: "font-medium text-slate-100" }, bm = { class: "text-sm text-slate-500" }, ym = { class: "whitespace-nowrap px-6 py-4" }, Em = {
  key: 0,
  class: "ml-1 inline-flex rounded-full bg-purple-900/50 px-2 text-xs leading-5 font-semibold text-purple-300"
}, xm = { class: "whitespace-nowrap px-6 py-4 text-slate-400" }, _m = { class: "whitespace-nowrap px-6 py-4 text-slate-400" }, wm = { class: "whitespace-nowrap px-6 py-4 text-right text-sm font-medium" }, Nm = ["onClick"], km = ["onClick"], Om = ["onClick"], Tm = { key: 0 }, Cm = {
  key: 3,
  class: "fixed inset-0 z-50 flex items-center justify-center bg-black/70"
}, Am = { class: "max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg border border-slate-700 bg-slate-900 p-6 shadow-xl" }, Sm = { class: "mb-4 text-xl font-bold text-slate-100" }, Lm = { class: "grid grid-cols-2 gap-4" }, Mm = ["value"], Dm = { class: "flex items-center" }, Im = { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, Pm = { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, Rm = { class: "flex justify-end gap-4 pt-4" }, Vm = ["disabled"], $m = {
  __name: "BlogAdmin",
  setup(e) {
    const t = () => window.ccApiClient, n = () => window.ccTokenProvider, s = /* @__PURE__ */ Ee([]), o = /* @__PURE__ */ Ee([]), r = /* @__PURE__ */ Ee(!1), i = /* @__PURE__ */ Ee(null), l = /* @__PURE__ */ Ee(!1), a = /* @__PURE__ */ Ee(null), f = /* @__PURE__ */ Ee(!0), d = /* @__PURE__ */ Ee(!1), c = /* @__PURE__ */ Ee(null), u = /* @__PURE__ */ Ee(F()), m = /* @__PURE__ */ Ee("email"), E = /* @__PURE__ */ Ee({
      email: ""
    }), y = /* @__PURE__ */ Ee(["", "", "", "", "", ""]), M = /* @__PURE__ */ Ee([]), D = /* @__PURE__ */ Ee(null), I = /* @__PURE__ */ Ee(!1);
    ti(async () => {
      try {
        await U(), l.value && await te();
      } finally {
        f.value = !1;
      }
    });
    async function U() {
      const V = n().getTokens();
      if (console.log("[Blog Admin] checkAuth - tokens:", {
        hasAccessToken: !!V?.accessToken,
        hasRefreshToken: !!V?.refreshToken
      }), V?.accessToken)
        try {
          a.value = await t().getCurrentUser(), l.value = !0, console.log(
            "[Blog Admin] Auth check passed, user:",
            a.value?.name
          );
        } catch (g) {
          console.log("[Blog Admin] Auth check failed:", g.message), l.value = !1, n().clearTokens();
        }
    }
    const ee = Ds(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(E.value.email)), L = Ds(() => y.value.every((V) => V.length === 1)), q = Ds(() => y.value.join(""));
    async function ve() {
      if (!ee.value) {
        D.value = "Please enter a valid email address";
        return;
      }
      I.value = !0, D.value = null;
      try {
        await t().requestAuthCode(E.value.email), m.value = "code", await ns(), M.value[0]?.focus();
      } catch (V) {
        D.value = V.message || "Failed to send auth code";
      } finally {
        I.value = !1;
      }
    }
    async function ae() {
      if (!L.value) {
        D.value = "Please enter the 6-digit code";
        return;
      }
      I.value = !0, D.value = null;
      try {
        await t().loginWithMagicLink(
          E.value.email,
          q.value
        ) && (await U(), await te());
      } catch (V) {
        D.value = V.message || "Invalid code";
      } finally {
        I.value = !1;
      }
    }
    function be(V, g) {
      V && (M.value[g] = V);
    }
    function ke(V, g) {
      const P = g.target.value.replace(/[^0-9]/g, "");
      y.value[V] = P, P && V < 5 && M.value[V + 1]?.focus(), L.value && ee.value && ae();
    }
    function Be(V, g) {
      g.key === "Backspace" && !y.value[V] && V > 0 && M.value[V - 1]?.focus(), g.key === "ArrowLeft" && V > 0 && (g.preventDefault(), M.value[V - 1]?.focus()), g.key === "ArrowRight" && V < 5 && (g.preventDefault(), M.value[V + 1]?.focus());
    }
    function _e(V) {
      V.preventDefault();
      const P = (V.clipboardData?.getData("text") || "").replace(/[^0-9]/g, "").slice(0, 6);
      if (P.length > 0) {
        for (let ye = 0; ye < 6; ye++)
          y.value[ye] = P[ye] || "";
        const De = Math.min(P.length - 1, 5);
        M.value[De]?.focus(), L.value && ee.value && ae();
      }
    }
    function Nt() {
      m.value = "email", y.value = ["", "", "", "", "", ""], D.value = null;
    }
    async function Vt() {
      m.value = "code", D.value = null, await ns(), M.value[0]?.focus();
    }
    function Oe() {
      n().clearTokens(), l.value = !1, a.value = null, s.value = [];
    }
    async function te() {
      r.value = !0, i.value = null;
      try {
        const [V, g] = await Promise.all([
          t().listBlogPosts({ status: void 0 }),
          // All posts for admin
          t().getBlogCategories()
        ]);
        s.value = V.data || [], o.value = g || [];
      } catch (V) {
        i.value = V.message || "Failed to load data";
      } finally {
        r.value = !1;
      }
    }
    function F() {
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
    function z(V) {
      return V.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    }
    function qe() {
      u.value.slug || (u.value.slug = z(u.value.title || ""));
    }
    function dn() {
      c.value = null, u.value = F(), d.value = !0;
    }
    async function Jt(V) {
      r.value = !0;
      try {
        const g = await t().getBlogPost(V.slug);
        c.value = g, u.value = {
          ...F(),
          title: g.title,
          slug: g.slug || "",
          content: g.content || {
            type: "doc",
            content: [{ type: "paragraph", content: [] }]
          },
          excerpt: g.excerpt || "",
          status: g.status,
          category_id: g.category?.id || null,
          is_featured: g.isFeatured,
          meta_title: g.metaTitle || "",
          meta_description: g.metaDescription || "",
          canonical_url: g.canonicalUrl || "",
          social_title: g.socialTitle || "",
          social_description: g.socialDescription || "",
          social_image_url: g.socialImageUrl || "",
          answer_summary: g.answerSummary || "",
          faq_items_json: JSON.stringify(g.faqItems || [], null, 2)
        }, d.value = !0;
      } catch (g) {
        i.value = g.message || "Failed to load post";
      } finally {
        r.value = !1;
      }
    }
    function kt() {
      d.value = !1, c.value = null;
    }
    async function at() {
      r.value = !0;
      try {
        let V = [];
        if (u.value.faq_items_json?.trim() && (V = JSON.parse(u.value.faq_items_json), !Array.isArray(V)))
          throw new Error("FAQ items must be a JSON array.");
        const g = {
          ...u.value,
          faq_items: V
        };
        delete g.faq_items_json, c.value ? await t().updateBlogPost(c.value.ulid, g) : await t().createBlogPost(g), kt(), await te();
      } catch (V) {
        i.value = V.message || "Failed to save post";
      } finally {
        r.value = !1;
      }
    }
    async function Ln(V) {
      if (confirm(`Delete "${V.title}"?`)) {
        r.value = !0;
        try {
          await t().deleteBlogPost(V.ulid), await te();
        } catch (g) {
          i.value = g.message || "Failed to delete post";
        } finally {
          r.value = !1;
        }
      }
    }
    async function jo(V) {
      r.value = !0;
      try {
        await t().publishBlogPost(V.ulid), await te();
      } catch (g) {
        i.value = g.message || "Failed to publish post";
      } finally {
        r.value = !1;
      }
    }
    const Bo = {
      draft: "bg-slate-700 text-slate-300",
      scheduled: "bg-yellow-900/50 text-yellow-300",
      published: "bg-green-900/50 text-green-300",
      archived: "bg-red-900/50 text-red-300"
    };
    return (V, g) => f.value ? (re(), ie("div", Xh, [...g[16] || (g[16] = [
      b("div", { class: "text-center" }, [
        b("div", { class: "inline-block h-10 w-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" }),
        b("p", { class: "mt-4 text-slate-400" }, "Loading...")
      ], -1)
    ])])) : l.value ? (re(), ie("div", am, [
      b("div", cm, [
        b("div", null, [
          g[22] || (g[22] = b("h1", { class: "text-2xl font-bold text-slate-100" }, "Blog Admin", -1)),
          b("p", um, " Logged in as " + Ne(a.value?.name || a.value?.email), 1)
        ]),
        b("div", { class: "flex gap-4" }, [
          b("button", {
            onClick: dn,
            class: "rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
          }, " New Post "),
          b("button", {
            onClick: Oe,
            class: "rounded-md bg-slate-700 px-4 py-2 text-slate-200 hover:bg-slate-600"
          }, " Logout ")
        ])
      ]),
      i.value ? (re(), ie("div", dm, Ne(i.value), 1)) : ht("", !0),
      r.value && !s.value.length ? (re(), ie("div", fm, [...g[23] || (g[23] = [
        b("div", { class: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" }, null, -1),
        b("p", { class: "mt-2 text-slate-400" }, "Loading posts...", -1)
      ])])) : (re(), ie("div", pm, [
        b("table", hm, [
          g[25] || (g[25] = b("thead", { class: "bg-slate-800/50" }, [
            b("tr", null, [
              b("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-400 uppercase" }, " Title "),
              b("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-400 uppercase" }, " Status "),
              b("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-400 uppercase" }, " Category "),
              b("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-400 uppercase" }, " Published "),
              b("th", { class: "px-6 py-3 text-right text-xs font-medium tracking-wider text-slate-400 uppercase" }, " Actions ")
            ])
          ], -1)),
          b("tbody", mm, [
            (re(!0), ie(Ue, null, Go(s.value, (P) => (re(), ie("tr", {
              key: P.ulid,
              class: "hover:bg-slate-800/50"
            }, [
              b("td", gm, [
                b("div", vm, Ne(P.title), 1),
                b("div", bm, Ne(P.slug), 1)
              ]),
              b("td", ym, [
                b("span", {
                  class: Ve([
                    Bo[P.status],
                    "inline-flex rounded-full px-2 text-xs leading-5 font-semibold"
                  ])
                }, Ne(P.status), 3),
                P.isFeatured ? (re(), ie("span", Em, " Featured ")) : ht("", !0)
              ]),
              b("td", xm, Ne(P.category?.name || "-"), 1),
              b("td", _m, Ne(P.publishedAt ? new Date(
                P.publishedAt
              ).toLocaleDateString() : "-"), 1),
              b("td", wm, [
                b("button", {
                  onClick: (De) => Jt(P),
                  class: "text-indigo-400 hover:text-indigo-300"
                }, " Edit ", 8, Nm),
                P.status === "draft" ? (re(), ie("button", {
                  key: 0,
                  onClick: (De) => jo(P),
                  class: "ml-4 text-green-400 hover:text-green-300"
                }, " Publish ", 8, km)) : ht("", !0),
                b("button", {
                  onClick: (De) => Ln(P),
                  class: "ml-4 text-red-400 hover:text-red-300"
                }, " Delete ", 8, Om)
              ])
            ]))), 128)),
            s.value.length ? ht("", !0) : (re(), ie("tr", Tm, [
              b("td", {
                colspan: "5",
                class: "px-6 py-12 text-center"
              }, [
                g[24] || (g[24] = b("p", { class: "text-slate-400" }, "No blog posts yet.", -1)),
                b("button", {
                  onClick: dn,
                  class: "mt-2 text-indigo-400 hover:text-indigo-300"
                }, " Create your first post ")
              ])
            ]))
          ])
        ])
      ])),
      d.value ? (re(), ie("div", Cm, [
        b("div", Am, [
          b("h2", Sm, Ne(c.value ? "Edit Post" : "Create Post"), 1),
          b("form", {
            onSubmit: Zo(at, ["prevent"]),
            class: "space-y-4"
          }, [
            b("div", null, [
              g[26] || (g[26] = b("label", { class: "block text-sm font-medium text-slate-300" }, "Title", -1)),
              we(b("input", {
                "onUpdate:modelValue": g[1] || (g[1] = (P) => u.value.title = P),
                onInput: qe,
                type: "text",
                required: "",
                class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
              }, null, 544), [
                [Fe, u.value.title]
              ])
            ]),
            b("div", null, [
              g[27] || (g[27] = b("label", { class: "block text-sm font-medium text-slate-300" }, "Slug", -1)),
              we(b("input", {
                "onUpdate:modelValue": g[2] || (g[2] = (P) => u.value.slug = P),
                type: "text",
                class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
              }, null, 512), [
                [Fe, u.value.slug]
              ])
            ]),
            b("div", null, [
              g[28] || (g[28] = b("label", { class: "block text-sm font-medium text-slate-300" }, "Excerpt", -1)),
              we(b("textarea", {
                "onUpdate:modelValue": g[3] || (g[3] = (P) => u.value.excerpt = P),
                rows: "2",
                class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
              }, null, 512), [
                [Fe, u.value.excerpt]
              ])
            ]),
            b("div", null, [
              g[29] || (g[29] = b("label", { class: "block text-sm font-medium text-slate-300" }, "Content", -1)),
              Le(Yh, {
                modelValue: u.value.content,
                "onUpdate:modelValue": g[4] || (g[4] = (P) => u.value.content = P),
                class: "mt-1"
              }, null, 8, ["modelValue"])
            ]),
            b("div", Lm, [
              b("div", null, [
                g[31] || (g[31] = b("label", { class: "block text-sm font-medium text-slate-300" }, "Category", -1)),
                we(b("select", {
                  "onUpdate:modelValue": g[5] || (g[5] = (P) => u.value.category_id = P),
                  class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                }, [
                  g[30] || (g[30] = b("option", { value: null }, "No category", -1)),
                  (re(!0), ie(Ue, null, Go(o.value, (P) => (re(), ie("option", {
                    key: P.id,
                    value: P.id
                  }, Ne(P.name), 9, Mm))), 128))
                ], 512), [
                  [fl, u.value.category_id]
                ])
              ]),
              b("div", null, [
                g[33] || (g[33] = b("label", { class: "block text-sm font-medium text-slate-300" }, "Status", -1)),
                we(b("select", {
                  "onUpdate:modelValue": g[6] || (g[6] = (P) => u.value.status = P),
                  class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                }, [...g[32] || (g[32] = [
                  b("option", { value: "draft" }, "Draft", -1),
                  b("option", { value: "published" }, "Published", -1),
                  b("option", { value: "archived" }, "Archived", -1)
                ])], 512), [
                  [fl, u.value.status]
                ])
              ])
            ]),
            b("div", Dm, [
              we(b("input", {
                "onUpdate:modelValue": g[7] || (g[7] = (P) => u.value.is_featured = P),
                type: "checkbox",
                id: "isFeatured",
                class: "h-4 w-4 rounded border-slate-600 bg-slate-800 text-indigo-600 focus:ring-indigo-500"
              }, null, 512), [
                [Wf, u.value.is_featured]
              ]),
              g[34] || (g[34] = b("label", {
                for: "isFeatured",
                class: "ml-2 text-sm text-slate-300"
              }, "Featured post", -1))
            ]),
            b("div", Im, [
              b("div", null, [
                g[35] || (g[35] = b("label", { class: "block text-sm font-medium text-slate-300" }, "Meta Title", -1)),
                we(b("input", {
                  "onUpdate:modelValue": g[8] || (g[8] = (P) => u.value.meta_title = P),
                  type: "text",
                  class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                }, null, 512), [
                  [Fe, u.value.meta_title]
                ])
              ]),
              b("div", null, [
                g[36] || (g[36] = b("label", { class: "block text-sm font-medium text-slate-300" }, "Canonical URL", -1)),
                we(b("input", {
                  "onUpdate:modelValue": g[9] || (g[9] = (P) => u.value.canonical_url = P),
                  type: "text",
                  class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                }, null, 512), [
                  [Fe, u.value.canonical_url]
                ])
              ])
            ]),
            b("div", null, [
              g[37] || (g[37] = b("label", { class: "block text-sm font-medium text-slate-300" }, "Meta Description", -1)),
              we(b("textarea", {
                "onUpdate:modelValue": g[10] || (g[10] = (P) => u.value.meta_description = P),
                rows: "2",
                class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
              }, null, 512), [
                [Fe, u.value.meta_description]
              ])
            ]),
            b("div", Pm, [
              b("div", null, [
                g[38] || (g[38] = b("label", { class: "block text-sm font-medium text-slate-300" }, "Social Title", -1)),
                we(b("input", {
                  "onUpdate:modelValue": g[11] || (g[11] = (P) => u.value.social_title = P),
                  type: "text",
                  class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                }, null, 512), [
                  [Fe, u.value.social_title]
                ])
              ]),
              b("div", null, [
                g[39] || (g[39] = b("label", { class: "block text-sm font-medium text-slate-300" }, "Social Image URL", -1)),
                we(b("input", {
                  "onUpdate:modelValue": g[12] || (g[12] = (P) => u.value.social_image_url = P),
                  type: "text",
                  class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                }, null, 512), [
                  [Fe, u.value.social_image_url]
                ])
              ])
            ]),
            b("div", null, [
              g[40] || (g[40] = b("label", { class: "block text-sm font-medium text-slate-300" }, "Social Description", -1)),
              we(b("textarea", {
                "onUpdate:modelValue": g[13] || (g[13] = (P) => u.value.social_description = P),
                rows: "2",
                class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
              }, null, 512), [
                [Fe, u.value.social_description]
              ])
            ]),
            b("div", null, [
              g[41] || (g[41] = b("label", { class: "block text-sm font-medium text-slate-300" }, "Answer Summary", -1)),
              we(b("textarea", {
                "onUpdate:modelValue": g[14] || (g[14] = (P) => u.value.answer_summary = P),
                rows: "4",
                class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
              }, null, 512), [
                [Fe, u.value.answer_summary]
              ])
            ]),
            b("div", null, [
              g[42] || (g[42] = b("label", { class: "block text-sm font-medium text-slate-300" }, "FAQ Items JSON", -1)),
              we(b("textarea", {
                "onUpdate:modelValue": g[15] || (g[15] = (P) => u.value.faq_items_json = P),
                rows: "6",
                class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 font-mono text-sm text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
              }, null, 512), [
                [Fe, u.value.faq_items_json]
              ]),
              g[43] || (g[43] = b("p", { class: "mt-1 text-xs text-slate-500" }, [
                Js(" Provide a JSON array like "),
                b("code", null, '[{"question":"...","answer":"..."}]')
              ], -1))
            ]),
            b("div", Rm, [
              b("button", {
                type: "button",
                onClick: kt,
                class: "rounded-md bg-slate-700 px-4 py-2 text-slate-200 hover:bg-slate-600"
              }, " Cancel "),
              b("button", {
                type: "submit",
                disabled: r.value,
                class: "rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 disabled:opacity-50"
              }, Ne(r.value ? "Saving..." : "Save"), 9, Vm)
            ])
          ], 32)
        ])
      ])) : ht("", !0)
    ])) : (re(), ie("div", Qh, [
      g[20] || (g[20] = b("h2", { class: "mb-2 text-2xl font-bold text-slate-100" }, "Blog Admin", -1)),
      g[21] || (g[21] = b("p", { class: "mb-6 text-sm text-slate-400" }, " Sign in with your CC Platform account ", -1)),
      m.value === "email" ? (re(), ie("form", {
        key: 0,
        onSubmit: Zo(ve, ["prevent"]),
        class: "space-y-4"
      }, [
        b("div", null, [
          g[17] || (g[17] = b("label", { class: "block text-sm font-medium text-slate-300" }, "Email address", -1)),
          we(b("input", {
            "onUpdate:modelValue": g[0] || (g[0] = (P) => E.value.email = P),
            type: "email",
            required: "",
            placeholder: "you@example.com",
            class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
          }, null, 512), [
            [Fe, E.value.email]
          ])
        ]),
        D.value ? (re(), ie("div", Zh, Ne(D.value), 1)) : ht("", !0),
        b("button", {
          type: "submit",
          disabled: I.value || !ee.value,
          class: "w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 disabled:opacity-50"
        }, Ne(I.value ? "Sending..." : "Send Auth Code"), 9, em),
        b("button", {
          type: "button",
          onClick: Vt,
          disabled: !ee.value,
          class: "w-full text-sm text-slate-400 hover:text-slate-200 disabled:opacity-50"
        }, " I already have a code ", 8, tm)
      ], 32)) : m.value === "code" ? (re(), ie("div", nm, [
        b("div", sm, [
          g[18] || (g[18] = Js(" We sent a code to ", -1)),
          b("strong", null, Ne(E.value.email), 1)
        ]),
        b("form", {
          onSubmit: Zo(ae, ["prevent"])
        }, [
          g[19] || (g[19] = b("label", { class: "mb-2 block text-sm font-medium text-slate-300" }, "Enter 6-digit code", -1)),
          b("div", om, [
            (re(!0), ie(Ue, null, Go(y.value, (P, De) => we((re(), ie("input", {
              key: De,
              ref_for: !0,
              ref: (ye) => be(ye, De),
              "onUpdate:modelValue": (ye) => y.value[De] = ye,
              type: "text",
              inputmode: "numeric",
              pattern: "[0-9]*",
              maxlength: "1",
              disabled: I.value,
              class: "h-12 w-10 rounded-md border border-slate-700 bg-slate-900 text-center text-xl font-semibold text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none disabled:bg-slate-800",
              onInput: (ye) => ke(De, ye),
              onKeydown: (ye) => Be(De, ye),
              onPaste: _e
            }, null, 40, rm)), [
              [Fe, y.value[De]]
            ])), 128))
          ]),
          D.value ? (re(), ie("div", im, Ne(D.value), 1)) : ht("", !0),
          b("button", {
            type: "submit",
            disabled: I.value || !L.value,
            class: "w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 disabled:opacity-50"
          }, Ne(I.value ? "Verifying..." : "Verify Code"), 9, lm)
        ], 32),
        b("button", {
          type: "button",
          onClick: Nt,
          class: "w-full text-sm text-slate-400 hover:text-slate-200"
        }, " ← Use different email ")
      ])) : ht("", !0)
    ]));
  }
}, Hm = window.location.hostname.includes("localtest.me") ? "https://cc.localtest.me" : "https://app.closedcircuitconsulting.com", Ei = document.querySelector('meta[name="cc-api-url"]')?.content || void 0 || Hm, cr = "cc_blog_admin_tokens", xn = {
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
async function jm() {
  const e = xn.getTokens();
  if (!e?.refreshToken)
    throw new Error("No refresh token available");
  const t = await fetch(`${Ei}/auth/refresh`, {
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
  return xn.setTokens(r), r;
}
const Bm = {
  async request(e, t, n = null, s = !0) {
    const o = xn.getTokens(), r = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest"
    };
    o?.accessToken && (r.Authorization = `Bearer ${o.accessToken}`);
    const i = { method: e, headers: r };
    n !== null && (i.body = JSON.stringify(n));
    const l = await fetch(`${Ei}${t}`, i);
    if (l.status === 401 && s)
      try {
        return await jm(), this.request(e, t, n, !1);
      } catch {
        throw xn.clearTokens(), window.dispatchEvent(new CustomEvent("cc:unauthorized")), new Error("Session expired. Please log in again.");
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
    return s && xn.setTokens({ accessToken: s, refreshToken: o }), { accessToken: s, refreshToken: o };
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
window.ccApiClient = Bm;
window.ccTokenProvider = xn;
const Dl = document.getElementById("blog-admin-app");
Dl && (Yf($m).mount(Dl), console.log("[Blog Admin] Mounted with API:", Ei));
