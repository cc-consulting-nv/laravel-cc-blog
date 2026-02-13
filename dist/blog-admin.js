// @__NO_SIDE_EFFECTS__
function ln(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const Ne = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, lr = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Je = () => {
}, jc = () => !1, ns = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Js = (t) => t.startsWith("onUpdate:"), qe = Object.assign, $o = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Pf = Object.prototype.hasOwnProperty, De = (t, e) => Pf.call(t, e), ue = Array.isArray, qn = (t) => rs(t) === "[object Map]", gr = (t) => rs(t) === "[object Set]", Ga = (t) => rs(t) === "[object Date]", ge = (t) => typeof t == "function", Me = (t) => typeof t == "string", Yt = (t) => typeof t == "symbol", ke = (t) => t !== null && typeof t == "object", Vo = (t) => (ke(t) || ge(t)) && ge(t.then) && ge(t.catch), Hc = Object.prototype.toString, rs = (t) => Hc.call(t), Ko = (t) => rs(t).slice(8, -1), zc = (t) => rs(t) === "[object Object]", Lo = (t) => Me(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Kr = /* @__PURE__ */ ln(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Cf = /* @__PURE__ */ ln(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), li = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((n) => e[n] || (e[n] = t(n)));
}, Df = /-\w/g, Tt = li(
  (t) => t.replace(Df, (e) => e.slice(1).toUpperCase())
), kf = /\B([A-Z])/g, An = li(
  (t) => t.replace(kf, "-$1").toLowerCase()
), fi = li((t) => t.charAt(0).toUpperCase() + t.slice(1)), zn = li(
  (t) => t ? `on${fi(t)}` : ""
), In = (t, e) => !Object.is(t, e), cr = (t, ...e) => {
  for (let n = 0; n < t.length; n++)
    t[n](...e);
}, Xs = (t, e, n, r = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, di = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let qa;
const ss = () => qa || (qa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function jo(t) {
  if (ue(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], o = Me(r) ? Nf(r) : jo(r);
      if (o)
        for (const a in o)
          e[a] = o[a];
    }
    return e;
  } else if (Me(t) || ke(t))
    return t;
}
const If = /;(?![^(]*\))/g, Of = /:([^]+)/, Af = /\/\*[^]*?\*\//g;
function Nf(t) {
  const e = {};
  return t.replace(Af, "").split(If).forEach((n) => {
    if (n) {
      const r = n.split(Of);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function hi(t) {
  let e = "";
  if (Me(t))
    e = t;
  else if (ue(t))
    for (let n = 0; n < t.length; n++) {
      const r = hi(t[n]);
      r && (e += r + " ");
    }
  else if (ke(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const Tf = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Rf = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Uf = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Bf = /* @__PURE__ */ ln(Tf), Mf = /* @__PURE__ */ ln(Rf), Ff = /* @__PURE__ */ ln(Uf), $f = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Vf = /* @__PURE__ */ ln($f);
function Gc(t) {
  return !!t || t === "";
}
function Kf(t, e) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++)
    n = yr(t[r], e[r]);
  return n;
}
function yr(t, e) {
  if (t === e) return !0;
  let n = Ga(t), r = Ga(e);
  if (n || r)
    return n && r ? t.getTime() === e.getTime() : !1;
  if (n = Yt(t), r = Yt(e), n || r)
    return t === e;
  if (n = ue(t), r = ue(e), n || r)
    return n && r ? Kf(t, e) : !1;
  if (n = ke(t), r = ke(e), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(t).length, a = Object.keys(e).length;
    if (o !== a)
      return !1;
    for (const l in t) {
      const d = t.hasOwnProperty(l), p = e.hasOwnProperty(l);
      if (d && !p || !d && p || !yr(t[l], e[l]))
        return !1;
    }
  }
  return String(t) === String(e);
}
function Ho(t, e) {
  return t.findIndex((n) => yr(n, e));
}
const qc = (t) => !!(t && t.__v_isRef === !0), lt = (t) => Me(t) ? t : t == null ? "" : ue(t) || ke(t) && (t.toString === Hc || !ge(t.toString)) ? qc(t) ? lt(t.value) : JSON.stringify(t, Wc, 2) : String(t), Wc = (t, e) => qc(e) ? Wc(t, e.value) : qn(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [r, o], a) => (n[so(r, a) + " =>"] = o, n),
    {}
  )
} : gr(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => so(n))
} : Yt(e) ? so(e) : ke(e) && !ue(e) && !zc(e) ? String(e) : e, so = (t, e = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Yt(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
  );
};
function Ut(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let _t;
class Lf {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = _t, !e && _t && (this.index = (_t.scopes || (_t.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, n;
      if (this.scopes)
        for (e = 0, n = this.scopes.length; e < n; e++)
          this.scopes[e].pause();
      for (e = 0, n = this.effects.length; e < n; e++)
        this.effects[e].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, n;
      if (this.scopes)
        for (e = 0, n = this.scopes.length; e < n; e++)
          this.scopes[e].resume();
      for (e = 0, n = this.effects.length; e < n; e++)
        this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const n = _t;
      try {
        return _t = this, e();
      } finally {
        _t = n;
      }
    } else process.env.NODE_ENV !== "production" && Ut("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = _t, _t = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (_t = this.prevScope, this.prevScope = void 0);
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function jf() {
  return _t;
}
let Ae;
const io = /* @__PURE__ */ new WeakSet();
class Qc {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, _t && _t.active && _t.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, io.has(this) && (io.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Jc(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Wa(this), Xc(this);
    const e = Ae, n = Rt;
    Ae = this, Rt = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && Ae !== this && Ut(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Zc(this), Ae = e, Rt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        qo(e);
      this.deps = this.depsTail = void 0, Wa(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? io.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    _o(this) && this.run();
  }
  get dirty() {
    return _o(this);
  }
}
let Yc = 0, Lr, jr;
function Jc(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = jr, jr = t;
    return;
  }
  t.next = Lr, Lr = t;
}
function zo() {
  Yc++;
}
function Go() {
  if (--Yc > 0)
    return;
  if (jr) {
    let e = jr;
    for (jr = void 0; e; ) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n;
    }
  }
  let t;
  for (; Lr; ) {
    let e = Lr;
    for (Lr = void 0; e; ) {
      const n = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (r) {
          t || (t = r);
        }
      e = n;
    }
  }
  if (t) throw t;
}
function Xc(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Zc(t) {
  let e, n = t.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), qo(r), Hf(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  t.deps = e, t.depsTail = n;
}
function _o(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (eu(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function eu(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Qr) || (t.globalVersion = Qr, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !_o(t))))
    return;
  t.flags |= 2;
  const e = t.dep, n = Ae, r = Rt;
  Ae = t, Rt = !0;
  try {
    Xc(t);
    const o = t.fn(t._value);
    (e.version === 0 || In(o, t._value)) && (t.flags |= 128, t._value = o, e.version++);
  } catch (o) {
    throw e.version++, o;
  } finally {
    Ae = n, Rt = r, Zc(t), t.flags &= -3;
  }
}
function qo(t, e = !1) {
  const { dep: n, prevSub: r, nextSub: o } = t;
  if (r && (r.nextSub = o, t.prevSub = void 0), o && (o.prevSub = r, t.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === t && (n.subsHead = o), n.subs === t && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      qo(a, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function Hf(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let Rt = !0;
const tu = [];
function Bt() {
  tu.push(Rt), Rt = !1;
}
function Mt() {
  const t = tu.pop();
  Rt = t === void 0 ? !0 : t;
}
function Wa(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const n = Ae;
    Ae = void 0;
    try {
      e();
    } finally {
      Ae = n;
    }
  }
}
let Qr = 0;
class zf {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Wo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(e) {
    if (!Ae || !Rt || Ae === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ae)
      n = this.activeLink = new zf(Ae, this), Ae.deps ? (n.prevDep = Ae.depsTail, Ae.depsTail.nextDep = n, Ae.depsTail = n) : Ae.deps = Ae.depsTail = n, nu(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Ae.depsTail, n.nextDep = void 0, Ae.depsTail.nextDep = n, Ae.depsTail = n, Ae.deps === n && (Ae.deps = r);
    }
    return process.env.NODE_ENV !== "production" && Ae.onTrack && Ae.onTrack(
      qe(
        {
          effect: Ae
        },
        e
      )
    ), n;
  }
  trigger(e) {
    this.version++, Qr++, this.notify(e);
  }
  notify(e) {
    zo();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            qe(
              {
                effect: n.sub
              },
              e
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Go();
    }
  }
}
function nu(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep)
        nu(r);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), process.env.NODE_ENV !== "production" && t.dep.subsHead === void 0 && (t.dep.subsHead = t), t.dep.subs = t;
  }
}
const Eo = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), xo = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Yr = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Ye(t, e, n) {
  if (Rt && Ae) {
    let r = Eo.get(t);
    r || Eo.set(t, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Wo()), o.map = r, o.key = n), process.env.NODE_ENV !== "production" ? o.track({
      target: t,
      type: e,
      key: n
    }) : o.track();
  }
}
function Gt(t, e, n, r, o, a) {
  const l = Eo.get(t);
  if (!l) {
    Qr++;
    return;
  }
  const d = (p) => {
    p && (process.env.NODE_ENV !== "production" ? p.trigger({
      target: t,
      type: e,
      key: n,
      newValue: r,
      oldValue: o,
      oldTarget: a
    }) : p.trigger());
  };
  if (zo(), e === "clear")
    l.forEach(d);
  else {
    const p = ue(t), _ = p && Lo(n);
    if (p && n === "length") {
      const v = Number(r);
      l.forEach((w, D) => {
        (D === "length" || D === Yr || !Yt(D) && D >= v) && d(w);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && d(l.get(n)), _ && d(l.get(Yr)), e) {
        case "add":
          p ? _ && d(l.get("length")) : (d(l.get(Wn)), qn(t) && d(l.get(xo)));
          break;
        case "delete":
          p || (d(l.get(Wn)), qn(t) && d(l.get(xo)));
          break;
        case "set":
          qn(t) && d(l.get(Wn));
          break;
      }
  }
  Go();
}
function ir(t) {
  const e = /* @__PURE__ */ _e(t);
  return e === t ? e : (Ye(e, "iterate", Yr), /* @__PURE__ */ pt(t) ? e : e.map($t));
}
function pi(t) {
  return Ye(t = /* @__PURE__ */ _e(t), "iterate", Yr), t;
}
function Cn(t, e) {
  return /* @__PURE__ */ Ft(t) ? hr(/* @__PURE__ */ On(t) ? $t(e) : e) : $t(e);
}
const Gf = {
  __proto__: null,
  [Symbol.iterator]() {
    return oo(this, Symbol.iterator, (t) => Cn(this, t));
  },
  concat(...t) {
    return ir(this).concat(
      ...t.map((e) => ue(e) ? ir(e) : e)
    );
  },
  entries() {
    return oo(this, "entries", (t) => (t[1] = Cn(this, t[1]), t));
  },
  every(t, e) {
    return nn(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return nn(
      this,
      "filter",
      t,
      e,
      (n) => n.map((r) => Cn(this, r)),
      arguments
    );
  },
  find(t, e) {
    return nn(
      this,
      "find",
      t,
      e,
      (n) => Cn(this, n),
      arguments
    );
  },
  findIndex(t, e) {
    return nn(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return nn(
      this,
      "findLast",
      t,
      e,
      (n) => Cn(this, n),
      arguments
    );
  },
  findLastIndex(t, e) {
    return nn(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return nn(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return ao(this, "includes", t);
  },
  indexOf(...t) {
    return ao(this, "indexOf", t);
  },
  join(t) {
    return ir(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return ao(this, "lastIndexOf", t);
  },
  map(t, e) {
    return nn(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return Tr(this, "pop");
  },
  push(...t) {
    return Tr(this, "push", t);
  },
  reduce(t, ...e) {
    return Qa(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Qa(this, "reduceRight", t, e);
  },
  shift() {
    return Tr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return nn(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return Tr(this, "splice", t);
  },
  toReversed() {
    return ir(this).toReversed();
  },
  toSorted(t) {
    return ir(this).toSorted(t);
  },
  toSpliced(...t) {
    return ir(this).toSpliced(...t);
  },
  unshift(...t) {
    return Tr(this, "unshift", t);
  },
  values() {
    return oo(this, "values", (t) => Cn(this, t));
  }
};
function oo(t, e, n) {
  const r = pi(t), o = r[e]();
  return r !== t && !/* @__PURE__ */ pt(t) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const qf = Array.prototype;
function nn(t, e, n, r, o, a) {
  const l = pi(t), d = l !== t && !/* @__PURE__ */ pt(t), p = l[e];
  if (p !== qf[e]) {
    const w = p.apply(t, a);
    return d ? $t(w) : w;
  }
  let _ = n;
  l !== t && (d ? _ = function(w, D) {
    return n.call(this, Cn(t, w), D, t);
  } : n.length > 2 && (_ = function(w, D) {
    return n.call(this, w, D, t);
  }));
  const v = p.call(l, _, r);
  return d && o ? o(v) : v;
}
function Qa(t, e, n, r) {
  const o = pi(t);
  let a = n;
  return o !== t && (/* @__PURE__ */ pt(t) ? n.length > 3 && (a = function(l, d, p) {
    return n.call(this, l, d, p, t);
  }) : a = function(l, d, p) {
    return n.call(this, l, Cn(t, d), p, t);
  }), o[e](a, ...r);
}
function ao(t, e, n) {
  const r = /* @__PURE__ */ _e(t);
  Ye(r, "iterate", Yr);
  const o = r[e](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Zs(n[0]) ? (n[0] = /* @__PURE__ */ _e(n[0]), r[e](...n)) : o;
}
function Tr(t, e, n = []) {
  Bt(), zo();
  const r = (/* @__PURE__ */ _e(t))[e].apply(t, n);
  return Go(), Mt(), r;
}
const Wf = /* @__PURE__ */ ln("__proto__,__v_isRef,__isVue"), ru = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Yt)
);
function Qf(t) {
  Yt(t) || (t = String(t));
  const e = /* @__PURE__ */ _e(this);
  return Ye(e, "has", t), e.hasOwnProperty(t);
}
class su {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, r) {
    if (n === "__v_skip") return e.__v_skip;
    const o = this._isReadonly, a = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return a;
    if (n === "__v_raw")
      return r === (o ? a ? lu : uu : a ? cu : au).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const l = ue(e);
    if (!o) {
      let p;
      if (l && (p = Gf[n]))
        return p;
      if (n === "hasOwnProperty")
        return Qf;
    }
    const d = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ge(e) ? e : r
    );
    if ((Yt(n) ? ru.has(n) : Wf(n)) || (o || Ye(e, "get", n), a))
      return d;
    if (/* @__PURE__ */ Ge(d)) {
      const p = l && Lo(n) ? d : d.value;
      return o && ke(p) ? /* @__PURE__ */ Po(p) : p;
    }
    return ke(d) ? o ? /* @__PURE__ */ Po(d) : /* @__PURE__ */ Qo(d) : d;
  }
}
class iu extends su {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, o) {
    let a = e[n];
    const l = ue(e) && Lo(n);
    if (!this._isShallow) {
      const _ = /* @__PURE__ */ Ft(a);
      if (!/* @__PURE__ */ pt(r) && !/* @__PURE__ */ Ft(r) && (a = /* @__PURE__ */ _e(a), r = /* @__PURE__ */ _e(r)), !l && /* @__PURE__ */ Ge(a) && !/* @__PURE__ */ Ge(r))
        return _ ? (process.env.NODE_ENV !== "production" && Ut(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          e[n]
        ), !0) : (a.value = r, !0);
    }
    const d = l ? Number(n) < e.length : De(e, n), p = Reflect.set(
      e,
      n,
      r,
      /* @__PURE__ */ Ge(e) ? e : o
    );
    return e === /* @__PURE__ */ _e(o) && (d ? In(r, a) && Gt(e, "set", n, r, a) : Gt(e, "add", n, r)), p;
  }
  deleteProperty(e, n) {
    const r = De(e, n), o = e[n], a = Reflect.deleteProperty(e, n);
    return a && r && Gt(e, "delete", n, void 0, o), a;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!Yt(n) || !ru.has(n)) && Ye(e, "has", n), r;
  }
  ownKeys(e) {
    return Ye(
      e,
      "iterate",
      ue(e) ? "length" : Wn
    ), Reflect.ownKeys(e);
  }
}
class ou extends su {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return process.env.NODE_ENV !== "production" && Ut(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
  deleteProperty(e, n) {
    return process.env.NODE_ENV !== "production" && Ut(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      e
    ), !0;
  }
}
const Yf = /* @__PURE__ */ new iu(), Jf = /* @__PURE__ */ new ou(), Xf = /* @__PURE__ */ new iu(!0), Zf = /* @__PURE__ */ new ou(!0), So = (t) => t, Ms = (t) => Reflect.getPrototypeOf(t);
function ed(t, e, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ _e(o), l = qn(a), d = t === "entries" || t === Symbol.iterator && l, p = t === "keys" && l, _ = o[t](...r), v = n ? So : e ? hr : $t;
    return !e && Ye(
      a,
      "iterate",
      p ? xo : Wn
    ), qe(
      // inheriting all iterator properties
      Object.create(_),
      {
        // iterator protocol
        next() {
          const { value: w, done: D } = _.next();
          return D ? { value: w, done: D } : {
            value: d ? [v(w[0]), v(w[1])] : v(w),
            done: D
          };
        }
      }
    );
  };
}
function Fs(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      Ut(
        `${fi(t)} operation ${n}failed: target is readonly.`,
        /* @__PURE__ */ _e(this)
      );
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function td(t, e) {
  const n = {
    get(o) {
      const a = this.__v_raw, l = /* @__PURE__ */ _e(a), d = /* @__PURE__ */ _e(o);
      t || (In(o, d) && Ye(l, "get", o), Ye(l, "get", d));
      const { has: p } = Ms(l), _ = e ? So : t ? hr : $t;
      if (p.call(l, o))
        return _(a.get(o));
      if (p.call(l, d))
        return _(a.get(d));
      a !== l && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !t && Ye(/* @__PURE__ */ _e(o), "iterate", Wn), o.size;
    },
    has(o) {
      const a = this.__v_raw, l = /* @__PURE__ */ _e(a), d = /* @__PURE__ */ _e(o);
      return t || (In(o, d) && Ye(l, "has", o), Ye(l, "has", d)), o === d ? a.has(o) : a.has(o) || a.has(d);
    },
    forEach(o, a) {
      const l = this, d = l.__v_raw, p = /* @__PURE__ */ _e(d), _ = e ? So : t ? hr : $t;
      return !t && Ye(p, "iterate", Wn), d.forEach((v, w) => o.call(a, _(v), _(w), l));
    }
  };
  return qe(
    n,
    t ? {
      add: Fs("add"),
      set: Fs("set"),
      delete: Fs("delete"),
      clear: Fs("clear")
    } : {
      add(o) {
        !e && !/* @__PURE__ */ pt(o) && !/* @__PURE__ */ Ft(o) && (o = /* @__PURE__ */ _e(o));
        const a = /* @__PURE__ */ _e(this);
        return Ms(a).has.call(a, o) || (a.add(o), Gt(a, "add", o, o)), this;
      },
      set(o, a) {
        !e && !/* @__PURE__ */ pt(a) && !/* @__PURE__ */ Ft(a) && (a = /* @__PURE__ */ _e(a));
        const l = /* @__PURE__ */ _e(this), { has: d, get: p } = Ms(l);
        let _ = d.call(l, o);
        _ ? process.env.NODE_ENV !== "production" && Ya(l, d, o) : (o = /* @__PURE__ */ _e(o), _ = d.call(l, o));
        const v = p.call(l, o);
        return l.set(o, a), _ ? In(a, v) && Gt(l, "set", o, a, v) : Gt(l, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ _e(this), { has: l, get: d } = Ms(a);
        let p = l.call(a, o);
        p ? process.env.NODE_ENV !== "production" && Ya(a, l, o) : (o = /* @__PURE__ */ _e(o), p = l.call(a, o));
        const _ = d ? d.call(a, o) : void 0, v = a.delete(o);
        return p && Gt(a, "delete", o, void 0, _), v;
      },
      clear() {
        const o = /* @__PURE__ */ _e(this), a = o.size !== 0, l = process.env.NODE_ENV !== "production" ? qn(o) ? new Map(o) : new Set(o) : void 0, d = o.clear();
        return a && Gt(
          o,
          "clear",
          void 0,
          void 0,
          l
        ), d;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = ed(o, t, e);
  }), n;
}
function gi(t, e) {
  const n = td(t, e);
  return (r, o, a) => o === "__v_isReactive" ? !t : o === "__v_isReadonly" ? t : o === "__v_raw" ? r : Reflect.get(
    De(n, o) && o in r ? n : r,
    o,
    a
  );
}
const nd = {
  get: /* @__PURE__ */ gi(!1, !1)
}, rd = {
  get: /* @__PURE__ */ gi(!1, !0)
}, sd = {
  get: /* @__PURE__ */ gi(!0, !1)
}, id = {
  get: /* @__PURE__ */ gi(!0, !0)
};
function Ya(t, e, n) {
  const r = /* @__PURE__ */ _e(n);
  if (r !== n && e.call(t, r)) {
    const o = Ko(t);
    Ut(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const au = /* @__PURE__ */ new WeakMap(), cu = /* @__PURE__ */ new WeakMap(), uu = /* @__PURE__ */ new WeakMap(), lu = /* @__PURE__ */ new WeakMap();
function od(t) {
  switch (t) {
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
function ad(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : od(Ko(t));
}
// @__NO_SIDE_EFFECTS__
function Qo(t) {
  return /* @__PURE__ */ Ft(t) ? t : yi(
    t,
    !1,
    Yf,
    nd,
    au
  );
}
// @__NO_SIDE_EFFECTS__
function cd(t) {
  return yi(
    t,
    !1,
    Xf,
    rd,
    cu
  );
}
// @__NO_SIDE_EFFECTS__
function Po(t) {
  return yi(
    t,
    !0,
    Jf,
    sd,
    uu
  );
}
// @__NO_SIDE_EFFECTS__
function qt(t) {
  return yi(
    t,
    !0,
    Zf,
    id,
    lu
  );
}
function yi(t, e, n, r, o) {
  if (!ke(t))
    return process.env.NODE_ENV !== "production" && Ut(
      `value cannot be made ${e ? "readonly" : "reactive"}: ${String(
        t
      )}`
    ), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const a = ad(t);
  if (a === 0)
    return t;
  const l = o.get(t);
  if (l)
    return l;
  const d = new Proxy(
    t,
    a === 2 ? r : n
  );
  return o.set(t, d), d;
}
// @__NO_SIDE_EFFECTS__
function On(t) {
  return /* @__PURE__ */ Ft(t) ? /* @__PURE__ */ On(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ft(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function pt(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Zs(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function _e(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ _e(e) : t;
}
function ud(t) {
  return !De(t, "__v_skip") && Object.isExtensible(t) && Xs(t, "__v_skip", !0), t;
}
const $t = (t) => ke(t) ? /* @__PURE__ */ Qo(t) : t, hr = (t) => ke(t) ? /* @__PURE__ */ Po(t) : t;
// @__NO_SIDE_EFFECTS__
function Ge(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function rt(t) {
  return ld(t, !1);
}
function ld(t, e) {
  return /* @__PURE__ */ Ge(t) ? t : new fd(t, e);
}
class fd {
  constructor(e, n) {
    this.dep = new Wo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : /* @__PURE__ */ _e(e), this._value = n ? e : $t(e), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ pt(e) || /* @__PURE__ */ Ft(e);
    e = r ? e : /* @__PURE__ */ _e(e), In(e, n) && (this._rawValue = e, this._value = r ? e : $t(e), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: e,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function dd(t) {
  return /* @__PURE__ */ Ge(t) ? t.value : t;
}
const hd = {
  get: (t, e, n) => e === "__v_raw" ? t : dd(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const o = t[e];
    return /* @__PURE__ */ Ge(o) && !/* @__PURE__ */ Ge(n) ? (o.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function fu(t) {
  return /* @__PURE__ */ On(t) ? t : new Proxy(t, hd);
}
class pd {
  constructor(e, n, r) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new Wo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Qr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ae !== this)
      return Jc(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const e = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return eu(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter ? this.setter(e) : process.env.NODE_ENV !== "production" && Ut("Write operation failed: computed value is readonly");
  }
}
// @__NO_SIDE_EFFECTS__
function gd(t, e, n = !1) {
  let r, o;
  ge(t) ? r = t : (r = t.get, o = t.set);
  const a = new pd(r, o, n);
  return process.env.NODE_ENV !== "production" && e && !n && (a.onTrack = e.onTrack, a.onTrigger = e.onTrigger), a;
}
const $s = {}, ei = /* @__PURE__ */ new WeakMap();
let Gn;
function yd(t, e = !1, n = Gn) {
  if (n) {
    let r = ei.get(n);
    r || ei.set(n, r = []), r.push(t);
  } else process.env.NODE_ENV !== "production" && !e && Ut(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function md(t, e, n = Ne) {
  const { immediate: r, deep: o, once: a, scheduler: l, augmentJob: d, call: p } = n, _ = (ne) => {
    (n.onWarn || Ut)(
      "Invalid watch source: ",
      ne,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, v = (ne) => o ? ne : /* @__PURE__ */ pt(ne) || o === !1 || o === 0 ? an(ne, 1) : an(ne);
  let w, D, O, Q, H = !1, le = !1;
  if (/* @__PURE__ */ Ge(t) ? (D = () => t.value, H = /* @__PURE__ */ pt(t)) : /* @__PURE__ */ On(t) ? (D = () => v(t), H = !0) : ue(t) ? (le = !0, H = t.some((ne) => /* @__PURE__ */ On(ne) || /* @__PURE__ */ pt(ne)), D = () => t.map((ne) => {
    if (/* @__PURE__ */ Ge(ne))
      return ne.value;
    if (/* @__PURE__ */ On(ne))
      return v(ne);
    if (ge(ne))
      return p ? p(ne, 2) : ne();
    process.env.NODE_ENV !== "production" && _(ne);
  })) : ge(t) ? e ? D = p ? () => p(t, 2) : t : D = () => {
    if (O) {
      Bt();
      try {
        O();
      } finally {
        Mt();
      }
    }
    const ne = Gn;
    Gn = w;
    try {
      return p ? p(t, 3, [Q]) : t(Q);
    } finally {
      Gn = ne;
    }
  } : (D = Je, process.env.NODE_ENV !== "production" && _(t)), e && o) {
    const ne = D, Se = o === !0 ? 1 / 0 : o;
    D = () => an(ne(), Se);
  }
  const pe = jf(), oe = () => {
    w.stop(), pe && pe.active && $o(pe.effects, w);
  };
  if (a && e) {
    const ne = e;
    e = (...Se) => {
      ne(...Se), oe();
    };
  }
  let fe = le ? new Array(t.length).fill($s) : $s;
  const xe = (ne) => {
    if (!(!(w.flags & 1) || !w.dirty && !ne))
      if (e) {
        const Se = w.run();
        if (o || H || (le ? Se.some((Xe, He) => In(Xe, fe[He])) : In(Se, fe))) {
          O && O();
          const Xe = Gn;
          Gn = w;
          try {
            const He = [
              Se,
              // pass undefined as the old value when it's changed for the first time
              fe === $s ? void 0 : le && fe[0] === $s ? [] : fe,
              Q
            ];
            fe = Se, p ? p(e, 3, He) : (
              // @ts-expect-error
              e(...He)
            );
          } finally {
            Gn = Xe;
          }
        }
      } else
        w.run();
  };
  return d && d(xe), w = new Qc(D), w.scheduler = l ? () => l(xe, !1) : xe, Q = (ne) => yd(ne, !1, w), O = w.onStop = () => {
    const ne = ei.get(w);
    if (ne) {
      if (p)
        p(ne, 4);
      else
        for (const Se of ne) Se();
      ei.delete(w);
    }
  }, process.env.NODE_ENV !== "production" && (w.onTrack = n.onTrack, w.onTrigger = n.onTrigger), e ? r ? xe(!0) : fe = w.run() : l ? l(xe.bind(null, !0), !0) : w.run(), oe.pause = w.pause.bind(w), oe.resume = w.resume.bind(w), oe.stop = oe, oe;
}
function an(t, e = 1 / 0, n) {
  if (e <= 0 || !ke(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(t) || 0) >= e))
    return t;
  if (n.set(t, e), e--, /* @__PURE__ */ Ge(t))
    an(t.value, e, n);
  else if (ue(t))
    for (let r = 0; r < t.length; r++)
      an(t[r], e, n);
  else if (gr(t) || qn(t))
    t.forEach((r) => {
      an(r, e, n);
    });
  else if (zc(t)) {
    for (const r in t)
      an(t[r], e, n);
    for (const r of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, r) && an(t[r], e, n);
  }
  return t;
}
const Qn = [];
function Ls(t) {
  Qn.push(t);
}
function js() {
  Qn.pop();
}
let co = !1;
function W(t, ...e) {
  if (co) return;
  co = !0, Bt();
  const n = Qn.length ? Qn[Qn.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = vd();
  if (r)
    mr(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        t + e.map((a) => {
          var l, d;
          return (d = (l = a.toString) == null ? void 0 : l.call(a)) != null ? d : JSON.stringify(a);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: a }) => `at <${us(n, a.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const a = [`[Vue warn]: ${t}`, ...e];
    o.length && a.push(`
`, ...wd(o)), console.warn(...a);
  }
  Mt(), co = !1;
}
function vd() {
  let t = Qn[Qn.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const n = e[0];
    n && n.vnode === t ? n.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const r = t.component && t.component.parent;
    t = r && r.vnode;
  }
  return e;
}
function wd(t) {
  const e = [];
  return t.forEach((n, r) => {
    e.push(...r === 0 ? [] : [`
`], ...bd(n));
  }), e;
}
function bd({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", r = t.component ? t.component.parent == null : !1, o = ` at <${us(
    t.component,
    t.type,
    r
  )}`, a = ">" + n;
  return t.props ? [o, ..._d(t.props), a] : [o + a];
}
function _d(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((r) => {
    e.push(...du(r, t[r]));
  }), n.length > 3 && e.push(" ..."), e;
}
function du(t, e, n) {
  return Me(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : /* @__PURE__ */ Ge(e) ? (e = du(t, /* @__PURE__ */ _e(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : ge(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = /* @__PURE__ */ _e(e), n ? e : [`${t}=`, e]);
}
const Yo = {
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
function mr(t, e, n, r) {
  try {
    return r ? t(...r) : t();
  } catch (o) {
    is(o, e, n);
  }
}
function Jt(t, e, n, r) {
  if (ge(t)) {
    const o = mr(t, e, n, r);
    return o && Vo(o) && o.catch((a) => {
      is(a, e, n);
    }), o;
  }
  if (ue(t)) {
    const o = [];
    for (let a = 0; a < t.length; a++)
      o.push(Jt(t[a], e, n, r));
    return o;
  } else process.env.NODE_ENV !== "production" && W(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof t}`
  );
}
function is(t, e, n, r = !0) {
  const o = e ? e.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: l } = e && e.appContext.config || Ne;
  if (e) {
    let d = e.parent;
    const p = e.proxy, _ = process.env.NODE_ENV !== "production" ? Yo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; d; ) {
      const v = d.ec;
      if (v) {
        for (let w = 0; w < v.length; w++)
          if (v[w](t, p, _) === !1)
            return;
      }
      d = d.parent;
    }
    if (a) {
      Bt(), mr(a, null, 10, [
        t,
        p,
        _
      ]), Mt();
      return;
    }
  }
  Ed(t, n, o, r, l);
}
function Ed(t, e, n, r = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const a = Yo[e];
    if (n && Ls(n), W(`Unhandled error${a ? ` during execution of ${a}` : ""}`), n && js(), r)
      throw t;
    console.error(t);
  } else {
    if (o)
      throw t;
    console.error(t);
  }
}
const dt = [];
let zt = -1;
const fr = [];
let Dn = null, ur = 0;
const hu = /* @__PURE__ */ Promise.resolve();
let ti = null;
const xd = 100;
function Hr(t) {
  const e = ti || hu;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Sd(t) {
  let e = zt + 1, n = dt.length;
  for (; e < n; ) {
    const r = e + n >>> 1, o = dt[r], a = Jr(o);
    a < t || a === t && o.flags & 2 ? e = r + 1 : n = r;
  }
  return e;
}
function mi(t) {
  if (!(t.flags & 1)) {
    const e = Jr(t), n = dt[dt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Jr(n) ? dt.push(t) : dt.splice(Sd(e), 0, t), t.flags |= 1, pu();
  }
}
function pu() {
  ti || (ti = hu.then(mu));
}
function gu(t) {
  ue(t) ? fr.push(...t) : Dn && t.id === -1 ? Dn.splice(ur + 1, 0, t) : t.flags & 1 || (fr.push(t), t.flags |= 1), pu();
}
function Ja(t, e, n = zt + 1) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); n < dt.length; n++) {
    const r = dt[n];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid || process.env.NODE_ENV !== "production" && Jo(e, r))
        continue;
      dt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function yu(t) {
  if (fr.length) {
    const e = [...new Set(fr)].sort(
      (n, r) => Jr(n) - Jr(r)
    );
    if (fr.length = 0, Dn) {
      Dn.push(...e);
      return;
    }
    for (Dn = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), ur = 0; ur < Dn.length; ur++) {
      const n = Dn[ur];
      process.env.NODE_ENV !== "production" && Jo(t, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Dn = null, ur = 0;
  }
}
const Jr = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function mu(t) {
  process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map());
  const e = process.env.NODE_ENV !== "production" ? (n) => Jo(t, n) : Je;
  try {
    for (zt = 0; zt < dt.length; zt++) {
      const n = dt[zt];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && e(n))
          continue;
        n.flags & 4 && (n.flags &= -2), mr(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; zt < dt.length; zt++) {
      const n = dt[zt];
      n && (n.flags &= -2);
    }
    zt = -1, dt.length = 0, yu(t), ti = null, (dt.length || fr.length) && mu(t);
  }
}
function Jo(t, e) {
  const n = t.get(e) || 0;
  if (n > xd) {
    const r = e.i, o = r && el(r.type);
    return is(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return t.set(e, n + 1), !1;
}
let Wt = !1;
const Hs = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (ss().__VUE_HMR_RUNTIME__ = {
  createRecord: uo(vu),
  rerender: uo(Dd),
  reload: uo(kd)
});
const Jn = /* @__PURE__ */ new Map();
function Pd(t) {
  const e = t.type.__hmrId;
  let n = Jn.get(e);
  n || (vu(e, t.type), n = Jn.get(e)), n.instances.add(t);
}
function Cd(t) {
  Jn.get(t.type.__hmrId).instances.delete(t);
}
function vu(t, e) {
  return Jn.has(t) ? !1 : (Jn.set(t, {
    initialDef: ni(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ni(t) {
  return tl(t) ? t.__vccOpts : t;
}
function Dd(t, e) {
  const n = Jn.get(t);
  n && (n.initialDef.render = e, [...n.instances].forEach((r) => {
    e && (r.render = e, ni(r.type).render = e), r.renderCache = [], Wt = !0, r.job.flags & 8 || r.update(), Wt = !1;
  }));
}
function kd(t, e) {
  const n = Jn.get(t);
  if (!n) return;
  e = ni(e), Xa(n.initialDef, e);
  const r = [...n.instances];
  for (let o = 0; o < r.length; o++) {
    const a = r[o], l = ni(a.type);
    let d = Hs.get(l);
    d || (l !== n.initialDef && Xa(l, e), Hs.set(l, d = /* @__PURE__ */ new Set())), d.add(a), a.appContext.propsCache.delete(a.type), a.appContext.emitsCache.delete(a.type), a.appContext.optionsCache.delete(a.type), a.ceReload ? (d.add(a), a.ceReload(e.styles), d.delete(a)) : a.parent ? mi(() => {
      a.job.flags & 8 || (Wt = !0, a.parent.update(), Wt = !1, d.delete(a));
    }) : a.appContext.reload ? a.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), a.root.ce && a !== a.root && a.root.ce._removeChildStyle(l);
  }
  gu(() => {
    Hs.clear();
  });
}
function Xa(t, e) {
  qe(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function uo(t) {
  return (e, n) => {
    try {
      return t(e, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Nt, Fr = [], Co = !1;
function os(t, ...e) {
  Nt ? Nt.emit(t, ...e) : Co || Fr.push({ event: t, args: e });
}
function Xo(t, e) {
  var n, r;
  Nt = t, Nt ? (Nt.enabled = !0, Fr.forEach(({ event: o, args: a }) => Nt.emit(o, ...a)), Fr = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((a) => {
    Xo(a, e);
  }), setTimeout(() => {
    Nt || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Co = !0, Fr = []);
  }, 3e3)) : (Co = !0, Fr = []);
}
function Id(t, e) {
  os("app:init", t, e, {
    Fragment: nt,
    Text: as,
    Comment: Pt,
    Static: qs
  });
}
function Od(t) {
  os("app:unmount", t);
}
const Ad = /* @__PURE__ */ Zo(
  "component:added"
  /* COMPONENT_ADDED */
), wu = /* @__PURE__ */ Zo(
  "component:updated"
  /* COMPONENT_UPDATED */
), Nd = /* @__PURE__ */ Zo(
  "component:removed"
  /* COMPONENT_REMOVED */
), Td = (t) => {
  Nt && typeof Nt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Nt.cleanupBuffer(t) && Nd(t);
};
// @__NO_SIDE_EFFECTS__
function Zo(t) {
  return (e) => {
    os(
      t,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
const Rd = /* @__PURE__ */ bu(
  "perf:start"
  /* PERFORMANCE_START */
), Ud = /* @__PURE__ */ bu(
  "perf:end"
  /* PERFORMANCE_END */
);
function bu(t) {
  return (e, n, r) => {
    os(t, e.appContext.app, e.uid, e, n, r);
  };
}
function Bd(t, e, n) {
  os(
    "component:emit",
    t.appContext.app,
    t,
    e,
    n
  );
}
let ht = null, _u = null;
function ri(t) {
  const e = ht;
  return ht = t, _u = t && t.type.__scopeId || null, e;
}
function Md(t, e = ht, n) {
  if (!e || t._n)
    return t;
  const r = (...o) => {
    r._d && hc(-1);
    const a = ri(e);
    let l;
    try {
      l = t(...o);
    } finally {
      ri(a), r._d && hc(1);
    }
    return process.env.NODE_ENV !== "production" && wu(e), l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Eu(t) {
  Cf(t) && W("Do not use built-in directive ids as custom directive id: " + t);
}
function Ln(t, e) {
  if (ht === null)
    return process.env.NODE_ENV !== "production" && W("withDirectives can only be used inside render functions."), t;
  const n = _i(ht), r = t.dirs || (t.dirs = []);
  for (let o = 0; o < e.length; o++) {
    let [a, l, d, p = Ne] = e[o];
    a && (ge(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && an(l), r.push({
      dir: a,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: d,
      modifiers: p
    }));
  }
  return t;
}
function jn(t, e, n, r) {
  const o = t.dirs, a = e && e.dirs;
  for (let l = 0; l < o.length; l++) {
    const d = o[l];
    a && (d.oldValue = a[l].value);
    let p = d.dir[r];
    p && (Bt(), Jt(p, n, 8, [
      t.el,
      d,
      t,
      e
    ]), Mt());
  }
}
function Fd(t, e) {
  if (process.env.NODE_ENV !== "production" && (!Qe || Qe.isMounted) && W("provide() can only be used inside setup()."), Qe) {
    let n = Qe.provides;
    const r = Qe.parent && Qe.parent.provides;
    r === n && (n = Qe.provides = Object.create(r)), n[t] = e;
  }
}
function zs(t, e, n = !1) {
  const r = Ju();
  if (r || dr) {
    let o = dr ? dr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && t in o)
      return o[t];
    if (arguments.length > 1)
      return n && ge(e) ? e.call(r && r.proxy) : e;
    process.env.NODE_ENV !== "production" && W(`injection "${String(t)}" not found.`);
  } else process.env.NODE_ENV !== "production" && W("inject() can only be used inside setup() or functional components.");
}
const $d = /* @__PURE__ */ Symbol.for("v-scx"), Vd = () => {
  {
    const t = zs($d);
    return t || process.env.NODE_ENV !== "production" && W(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), t;
  }
};
function lo(t, e, n) {
  return process.env.NODE_ENV !== "production" && !ge(e) && W(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), xu(t, e, n);
}
function xu(t, e, n = Ne) {
  const { immediate: r, deep: o, flush: a, once: l } = n;
  process.env.NODE_ENV !== "production" && !e && (r !== void 0 && W(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && W(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), l !== void 0 && W(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const d = qe({}, n);
  process.env.NODE_ENV !== "production" && (d.onWarn = W);
  const p = e && r || !e && a !== "post";
  let _;
  if (Zr) {
    if (a === "sync") {
      const O = Vd();
      _ = O.__watcherHandles || (O.__watcherHandles = []);
    } else if (!p) {
      const O = () => {
      };
      return O.stop = Je, O.resume = Je, O.pause = Je, O;
    }
  }
  const v = Qe;
  d.call = (O, Q, H) => Jt(O, v, Q, H);
  let w = !1;
  a === "post" ? d.scheduler = (O) => {
    bt(O, v && v.suspense);
  } : a !== "sync" && (w = !0, d.scheduler = (O, Q) => {
    Q ? O() : mi(O);
  }), d.augmentJob = (O) => {
    e && (O.flags |= 4), w && (O.flags |= 2, v && (O.id = v.uid, O.i = v));
  };
  const D = md(t, e, d);
  return Zr && (_ ? _.push(D) : p && D()), D;
}
function Kd(t, e, n) {
  const r = this.proxy, o = Me(t) ? t.includes(".") ? Su(r, t) : () => r[t] : t.bind(r, r);
  let a;
  ge(e) ? a = e : (a = e.handler, n = e);
  const l = cs(this), d = xu(o, a.bind(r), n);
  return l(), d;
}
function Su(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Ld = /* @__PURE__ */ Symbol("_vte"), jd = (t) => t.__isTeleport, Hd = /* @__PURE__ */ Symbol("_leaveCb");
function ea(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, ea(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Pu(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
const Za = /* @__PURE__ */ new WeakSet();
function ec(t, e) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(t, e)) && !n.configurable);
}
const si = /* @__PURE__ */ new WeakMap();
function zr(t, e, n, r, o = !1) {
  if (ue(t)) {
    t.forEach(
      (H, le) => zr(
        H,
        e && (ue(e) ? e[le] : e),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Gr(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && zr(t, e, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? _i(r.component) : r.el, l = o ? null : a, { i: d, r: p } = t;
  if (process.env.NODE_ENV !== "production" && !d) {
    W(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const _ = e && e.r, v = d.refs === Ne ? d.refs = {} : d.refs, w = d.setupState, D = /* @__PURE__ */ _e(w), O = w === Ne ? jc : (H) => process.env.NODE_ENV !== "production" && (De(D, H) && !/* @__PURE__ */ Ge(D[H]) && W(
    `Template ref "${H}" used on a non-ref value. It will not work in the production build.`
  ), Za.has(D[H])) || ec(v, H) ? !1 : De(D, H), Q = (H, le) => !(process.env.NODE_ENV !== "production" && Za.has(H) || le && ec(v, le));
  if (_ != null && _ !== p) {
    if (tc(e), Me(_))
      v[_] = null, O(_) && (w[_] = null);
    else if (/* @__PURE__ */ Ge(_)) {
      const H = e;
      Q(_, H.k) && (_.value = null), H.k && (v[H.k] = null);
    }
  }
  if (ge(p))
    mr(p, d, 12, [l, v]);
  else {
    const H = Me(p), le = /* @__PURE__ */ Ge(p);
    if (H || le) {
      const pe = () => {
        if (t.f) {
          const oe = H ? O(p) ? w[p] : v[p] : Q(p) || !t.k ? p.value : v[t.k];
          if (o)
            ue(oe) && $o(oe, a);
          else if (ue(oe))
            oe.includes(a) || oe.push(a);
          else if (H)
            v[p] = [a], O(p) && (w[p] = v[p]);
          else {
            const fe = [a];
            Q(p, t.k) && (p.value = fe), t.k && (v[t.k] = fe);
          }
        } else H ? (v[p] = l, O(p) && (w[p] = l)) : le ? (Q(p, t.k) && (p.value = l), t.k && (v[t.k] = l)) : process.env.NODE_ENV !== "production" && W("Invalid template ref type:", p, `(${typeof p})`);
      };
      if (l) {
        const oe = () => {
          pe(), si.delete(t);
        };
        oe.id = -1, si.set(t, oe), bt(oe, n);
      } else
        tc(t), pe();
    } else process.env.NODE_ENV !== "production" && W("Invalid template ref type:", p, `(${typeof p})`);
  }
}
function tc(t) {
  const e = si.get(t);
  e && (e.flags |= 8, si.delete(t));
}
ss().requestIdleCallback;
ss().cancelIdleCallback;
const Gr = (t) => !!t.type.__asyncLoader, ta = (t) => t.type.__isKeepAlive;
function zd(t, e) {
  Cu(t, "a", e);
}
function Gd(t, e) {
  Cu(t, "da", e);
}
function Cu(t, e, n = Qe) {
  const r = t.__wdc || (t.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return t();
  });
  if (vi(e, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      ta(o.parent.vnode) && qd(r, e, n, o), o = o.parent;
  }
}
function qd(t, e, n, r) {
  const o = vi(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  Du(() => {
    $o(r[e], o);
  }, n);
}
function vi(t, e, n = Qe, r = !1) {
  if (n) {
    const o = n[t] || (n[t] = []), a = e.__weh || (e.__weh = (...l) => {
      Bt();
      const d = cs(n), p = Jt(e, n, t, l);
      return d(), Mt(), p;
    });
    return r ? o.unshift(a) : o.push(a), a;
  } else if (process.env.NODE_ENV !== "production") {
    const o = zn(Yo[t].replace(/ hook$/, ""));
    W(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const fn = (t) => (e, n = Qe) => {
  (!Zr || t === "sp") && vi(t, (...r) => e(...r), n);
}, Wd = fn("bm"), Do = fn("m"), Qd = fn(
  "bu"
), Yd = fn("u"), Jd = fn(
  "bum"
), Du = fn("um"), Xd = fn(
  "sp"
), Zd = fn("rtg"), eh = fn("rtc");
function th(t, e = Qe) {
  vi("ec", t, e);
}
const nh = /* @__PURE__ */ Symbol.for("v-ndc");
function fo(t, e, n, r) {
  let o;
  const a = n, l = ue(t);
  if (l || Me(t)) {
    const d = l && /* @__PURE__ */ On(t);
    let p = !1, _ = !1;
    d && (p = !/* @__PURE__ */ pt(t), _ = /* @__PURE__ */ Ft(t), t = pi(t)), o = new Array(t.length);
    for (let v = 0, w = t.length; v < w; v++)
      o[v] = e(
        p ? _ ? hr($t(t[v])) : $t(t[v]) : t[v],
        v,
        void 0,
        a
      );
  } else if (typeof t == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(t) && W(`The v-for range expect an integer value but got ${t}.`), o = new Array(t);
    for (let d = 0; d < t; d++)
      o[d] = e(d + 1, d, void 0, a);
  } else if (ke(t))
    if (t[Symbol.iterator])
      o = Array.from(
        t,
        (d, p) => e(d, p, void 0, a)
      );
    else {
      const d = Object.keys(t);
      o = new Array(d.length);
      for (let p = 0, _ = d.length; p < _; p++) {
        const v = d[p];
        o[p] = e(t[v], v, p, a);
      }
    }
  else
    o = [];
  return o;
}
const ko = (t) => t ? Xu(t) ? _i(t) : ko(t.parent) : null, Yn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ qe(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ qt(t.props) : t.props,
    $attrs: (t) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ qt(t.attrs) : t.attrs,
    $slots: (t) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ qt(t.slots) : t.slots,
    $refs: (t) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ qt(t.refs) : t.refs,
    $parent: (t) => ko(t.parent),
    $root: (t) => ko(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Ou(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      mi(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Hr.bind(t.proxy)),
    $watch: (t) => Kd.bind(t)
  })
), na = (t) => t === "_" || t === "$", ho = (t, e) => t !== Ne && !t.__isScriptSetup && De(t, e), ku = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: a, accessCache: l, type: d, appContext: p } = t;
    if (process.env.NODE_ENV !== "production" && e === "__isVue")
      return !0;
    if (e[0] !== "$") {
      const D = l[e];
      if (D !== void 0)
        switch (D) {
          case 1:
            return r[e];
          case 2:
            return o[e];
          case 4:
            return n[e];
          case 3:
            return a[e];
        }
      else {
        if (ho(r, e))
          return l[e] = 1, r[e];
        if (o !== Ne && De(o, e))
          return l[e] = 2, o[e];
        if (De(a, e))
          return l[e] = 3, a[e];
        if (n !== Ne && De(n, e))
          return l[e] = 4, n[e];
        Io && (l[e] = 0);
      }
    }
    const _ = Yn[e];
    let v, w;
    if (_)
      return e === "$attrs" ? (Ye(t.attrs, "get", ""), process.env.NODE_ENV !== "production" && oi()) : process.env.NODE_ENV !== "production" && e === "$slots" && Ye(t, "get", e), _(t);
    if (
      // css module (injected by vue-loader)
      (v = d.__cssModules) && (v = v[e])
    )
      return v;
    if (n !== Ne && De(n, e))
      return l[e] = 4, n[e];
    if (
      // global properties
      w = p.config.globalProperties, De(w, e)
    )
      return w[e];
    process.env.NODE_ENV !== "production" && ht && (!Me(e) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    e.indexOf("__v") !== 0) && (o !== Ne && na(e[0]) && De(o, e) ? W(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : t === ht && W(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: o, ctx: a } = t;
    return ho(o, e) ? (o[e] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && De(o, e) ? (W(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : r !== Ne && De(r, e) ? (r[e] = n, !0) : De(t.props, e) ? (process.env.NODE_ENV !== "production" && W(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in t ? (process.env.NODE_ENV !== "production" && W(
      `Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && e in t.appContext.config.globalProperties ? Object.defineProperty(a, e, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : a[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: o, props: a, type: l }
  }, d) {
    let p;
    return !!(n[d] || t !== Ne && d[0] !== "$" && De(t, d) || ho(e, d) || De(a, d) || De(r, d) || De(Yn, d) || De(o.config.globalProperties, d) || (p = l.__cssModules) && p[d]);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : De(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
process.env.NODE_ENV !== "production" && (ku.ownKeys = (t) => (W(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
function rh(t) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => t
  }), Object.keys(Yn).forEach((n) => {
    Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Yn[n](t),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Je
    });
  }), e;
}
function sh(t) {
  const {
    ctx: e,
    propsOptions: [n]
  } = t;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => t.props[r],
      set: Je
    });
  });
}
function ih(t) {
  const { ctx: e, setupState: n } = t;
  Object.keys(/* @__PURE__ */ _e(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (na(r[0])) {
        W(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(e, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: Je
      });
    }
  });
}
function nc(t) {
  return ue(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
function oh() {
  const t = /* @__PURE__ */ Object.create(null);
  return (e, n) => {
    t[n] ? W(`${e} property "${n}" is already defined in ${t[n]}.`) : t[n] = e;
  };
}
let Io = !0;
function ah(t) {
  const e = Ou(t), n = t.proxy, r = t.ctx;
  Io = !1, e.beforeCreate && rc(e.beforeCreate, t, "bc");
  const {
    // state
    data: o,
    computed: a,
    methods: l,
    watch: d,
    provide: p,
    inject: _,
    // lifecycle
    created: v,
    beforeMount: w,
    mounted: D,
    beforeUpdate: O,
    updated: Q,
    activated: H,
    deactivated: le,
    beforeDestroy: pe,
    beforeUnmount: oe,
    destroyed: fe,
    unmounted: xe,
    render: ne,
    renderTracked: Se,
    renderTriggered: Xe,
    errorCaptured: He,
    serverPrefetch: Re,
    // public API
    expose: Ue,
    inheritAttrs: Ct,
    // assets
    components: it,
    directives: dn,
    filters: Tn
  } = e, Dt = process.env.NODE_ENV !== "production" ? oh() : null;
  if (process.env.NODE_ENV !== "production") {
    const [me] = t.propsOptions;
    if (me)
      for (const Ee in me)
        Dt("Props", Ee);
  }
  if (_ && ch(_, r, Dt), l)
    for (const me in l) {
      const Ee = l[me];
      ge(Ee) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, me, {
        value: Ee.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[me] = Ee.bind(n), process.env.NODE_ENV !== "production" && Dt("Methods", me)) : process.env.NODE_ENV !== "production" && W(
        `Method "${me}" has type "${typeof Ee}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !ge(o) && W(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const me = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && Vo(me) && W(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ke(me))
      process.env.NODE_ENV !== "production" && W("data() should return an object.");
    else if (t.data = /* @__PURE__ */ Qo(me), process.env.NODE_ENV !== "production")
      for (const Ee in me)
        Dt("Data", Ee), na(Ee[0]) || Object.defineProperty(r, Ee, {
          configurable: !0,
          enumerable: !0,
          get: () => me[Ee],
          set: Je
        });
  }
  if (Io = !0, a)
    for (const me in a) {
      const Ee = a[me], Ze = ge(Ee) ? Ee.bind(n, n) : ge(Ee.get) ? Ee.get.bind(n, n) : Je;
      process.env.NODE_ENV !== "production" && Ze === Je && W(`Computed property "${me}" has no getter.`);
      const gt = !ge(Ee) && ge(Ee.set) ? Ee.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        W(
          `Write operation failed: computed property "${me}" is readonly.`
        );
      } : Je, It = Vr({
        get: Ze,
        set: gt
      });
      Object.defineProperty(r, me, {
        enumerable: !0,
        configurable: !0,
        get: () => It.value,
        set: (Vt) => It.value = Vt
      }), process.env.NODE_ENV !== "production" && Dt("Computed", me);
    }
  if (d)
    for (const me in d)
      Iu(d[me], r, n, me);
  if (p) {
    const me = ge(p) ? p.call(n) : p;
    Reflect.ownKeys(me).forEach((Ee) => {
      Fd(Ee, me[Ee]);
    });
  }
  v && rc(v, t, "c");
  function We(me, Ee) {
    ue(Ee) ? Ee.forEach((Ze) => me(Ze.bind(n))) : Ee && me(Ee.bind(n));
  }
  if (We(Wd, w), We(Do, D), We(Qd, O), We(Yd, Q), We(zd, H), We(Gd, le), We(th, He), We(eh, Se), We(Zd, Xe), We(Jd, oe), We(Du, xe), We(Xd, Re), ue(Ue))
    if (Ue.length) {
      const me = t.exposed || (t.exposed = {});
      Ue.forEach((Ee) => {
        Object.defineProperty(me, Ee, {
          get: () => n[Ee],
          set: (Ze) => n[Ee] = Ze,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  ne && t.render === Je && (t.render = ne), Ct != null && (t.inheritAttrs = Ct), it && (t.components = it), dn && (t.directives = dn), Re && Pu(t);
}
function ch(t, e, n = Je) {
  ue(t) && (t = Oo(t));
  for (const r in t) {
    const o = t[r];
    let a;
    ke(o) ? "default" in o ? a = zs(
      o.from || r,
      o.default,
      !0
    ) : a = zs(o.from || r) : a = zs(o), /* @__PURE__ */ Ge(a) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (l) => a.value = l
    }) : e[r] = a, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function rc(t, e, n) {
  Jt(
    ue(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function Iu(t, e, n, r) {
  let o = r.includes(".") ? Su(n, r) : () => n[r];
  if (Me(t)) {
    const a = e[t];
    ge(a) ? lo(o, a) : process.env.NODE_ENV !== "production" && W(`Invalid watch handler specified by key "${t}"`, a);
  } else if (ge(t))
    lo(o, t.bind(n));
  else if (ke(t))
    if (ue(t))
      t.forEach((a) => Iu(a, e, n, r));
    else {
      const a = ge(t.handler) ? t.handler.bind(n) : e[t.handler];
      ge(a) ? lo(o, a, t) : process.env.NODE_ENV !== "production" && W(`Invalid watch handler specified by key "${t.handler}"`, a);
    }
  else process.env.NODE_ENV !== "production" && W(`Invalid watch option: "${r}"`, t);
}
function Ou(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: l }
  } = t.appContext, d = a.get(e);
  let p;
  return d ? p = d : !o.length && !n && !r ? p = e : (p = {}, o.length && o.forEach(
    (_) => ii(p, _, l, !0)
  ), ii(p, e, l)), ke(e) && a.set(e, p), p;
}
function ii(t, e, n, r = !1) {
  const { mixins: o, extends: a } = e;
  a && ii(t, a, n, !0), o && o.forEach(
    (l) => ii(t, l, n, !0)
  );
  for (const l in e)
    if (r && l === "expose")
      process.env.NODE_ENV !== "production" && W(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const d = uh[l] || n && n[l];
      t[l] = d ? d(t[l], e[l]) : e[l];
    }
  return t;
}
const uh = {
  data: sc,
  props: ic,
  emits: ic,
  // objects
  methods: $r,
  computed: $r,
  // lifecycle
  beforeCreate: ft,
  created: ft,
  beforeMount: ft,
  mounted: ft,
  beforeUpdate: ft,
  updated: ft,
  beforeDestroy: ft,
  beforeUnmount: ft,
  destroyed: ft,
  unmounted: ft,
  activated: ft,
  deactivated: ft,
  errorCaptured: ft,
  serverPrefetch: ft,
  // assets
  components: $r,
  directives: $r,
  // watch
  watch: fh,
  // provide / inject
  provide: sc,
  inject: lh
};
function sc(t, e) {
  return e ? t ? function() {
    return qe(
      ge(t) ? t.call(this, this) : t,
      ge(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function lh(t, e) {
  return $r(Oo(t), Oo(e));
}
function Oo(t) {
  if (ue(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function ft(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function $r(t, e) {
  return t ? qe(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function ic(t, e) {
  return t ? ue(t) && ue(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : qe(
    /* @__PURE__ */ Object.create(null),
    nc(t),
    nc(e ?? {})
  ) : e;
}
function fh(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = qe(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = ft(t[r], e[r]);
  return n;
}
function Au() {
  return {
    app: null,
    config: {
      isNativeTag: jc,
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
let dh = 0;
function hh(t, e) {
  return function(r, o = null) {
    ge(r) || (r = qe({}, r)), o != null && !ke(o) && (process.env.NODE_ENV !== "production" && W("root props passed to app.mount() must be an object."), o = null);
    const a = Au(), l = /* @__PURE__ */ new WeakSet(), d = [];
    let p = !1;
    const _ = a.app = {
      _uid: dh++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: mc,
      get config() {
        return a.config;
      },
      set config(v) {
        process.env.NODE_ENV !== "production" && W(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(v, ...w) {
        return l.has(v) ? process.env.NODE_ENV !== "production" && W("Plugin has already been applied to target app.") : v && ge(v.install) ? (l.add(v), v.install(_, ...w)) : ge(v) ? (l.add(v), v(_, ...w)) : process.env.NODE_ENV !== "production" && W(
          'A plugin must either be a function or an object with an "install" function.'
        ), _;
      },
      mixin(v) {
        return a.mixins.includes(v) ? process.env.NODE_ENV !== "production" && W(
          "Mixin has already been applied to target app" + (v.name ? `: ${v.name}` : "")
        ) : a.mixins.push(v), _;
      },
      component(v, w) {
        return process.env.NODE_ENV !== "production" && Uo(v, a.config), w ? (process.env.NODE_ENV !== "production" && a.components[v] && W(`Component "${v}" has already been registered in target app.`), a.components[v] = w, _) : a.components[v];
      },
      directive(v, w) {
        return process.env.NODE_ENV !== "production" && Eu(v), w ? (process.env.NODE_ENV !== "production" && a.directives[v] && W(`Directive "${v}" has already been registered in target app.`), a.directives[v] = w, _) : a.directives[v];
      },
      mount(v, w, D) {
        if (p)
          process.env.NODE_ENV !== "production" && W(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && v.__vue_app__ && W(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const O = _._ceVNode || cn(r, o);
          return O.appContext = a, D === !0 ? D = "svg" : D === !1 && (D = void 0), process.env.NODE_ENV !== "production" && (a.reload = () => {
            const Q = Nn(O);
            Q.el = null, t(Q, v, D);
          }), t(O, v, D), p = !0, _._container = v, v.__vue_app__ = _, process.env.NODE_ENV !== "production" && (_._instance = O.component, Id(_, mc)), _i(O.component);
        }
      },
      onUnmount(v) {
        process.env.NODE_ENV !== "production" && typeof v != "function" && W(
          `Expected function as first argument to app.onUnmount(), but got ${typeof v}`
        ), d.push(v);
      },
      unmount() {
        p ? (Jt(
          d,
          _._instance,
          16
        ), t(null, _._container), process.env.NODE_ENV !== "production" && (_._instance = null, Od(_)), delete _._container.__vue_app__) : process.env.NODE_ENV !== "production" && W("Cannot unmount an app that is not mounted.");
      },
      provide(v, w) {
        return process.env.NODE_ENV !== "production" && v in a.provides && (De(a.provides, v) ? W(
          `App already provides property with key "${String(v)}". It will be overwritten with the new value.`
        ) : W(
          `App already provides property with key "${String(v)}" inherited from its parent element. It will be overwritten with the new value.`
        )), a.provides[v] = w, _;
      },
      runWithContext(v) {
        const w = dr;
        dr = _;
        try {
          return v();
        } finally {
          dr = w;
        }
      }
    };
    return _;
  };
}
let dr = null;
const ph = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${Tt(e)}Modifiers`] || t[`${An(e)}Modifiers`];
function gh(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || Ne;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: v,
      propsOptions: [w]
    } = t;
    if (v)
      if (!(e in v))
        (!w || !(zn(Tt(e)) in w)) && W(
          `Component emitted event "${e}" but it is neither declared in the emits option nor as an "${zn(Tt(e))}" prop.`
        );
      else {
        const D = v[e];
        ge(D) && (D(...n) || W(
          `Invalid event arguments: event validation failed for event "${e}".`
        ));
      }
  }
  let o = n;
  const a = e.startsWith("update:"), l = a && ph(r, e.slice(7));
  if (l && (l.trim && (o = n.map((v) => Me(v) ? v.trim() : v)), l.number && (o = n.map(di))), process.env.NODE_ENV !== "production" && Bd(t, e, o), process.env.NODE_ENV !== "production") {
    const v = e.toLowerCase();
    v !== e && r[zn(v)] && W(
      `Event "${v}" is emitted in component ${us(
        t,
        t.type
      )} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${An(
        e
      )}" instead of "${e}".`
    );
  }
  let d, p = r[d = zn(e)] || // also try camelCase event handler (#2249)
  r[d = zn(Tt(e))];
  !p && a && (p = r[d = zn(An(e))]), p && Jt(
    p,
    t,
    6,
    o
  );
  const _ = r[d + "Once"];
  if (_) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[d])
      return;
    t.emitted[d] = !0, Jt(
      _,
      t,
      6,
      o
    );
  }
}
const yh = /* @__PURE__ */ new WeakMap();
function Nu(t, e, n = !1) {
  const r = n ? yh : e.emitsCache, o = r.get(t);
  if (o !== void 0)
    return o;
  const a = t.emits;
  let l = {}, d = !1;
  if (!ge(t)) {
    const p = (_) => {
      const v = Nu(_, e, !0);
      v && (d = !0, qe(l, v));
    };
    !n && e.mixins.length && e.mixins.forEach(p), t.extends && p(t.extends), t.mixins && t.mixins.forEach(p);
  }
  return !a && !d ? (ke(t) && r.set(t, null), null) : (ue(a) ? a.forEach((p) => l[p] = null) : qe(l, a), ke(t) && r.set(t, l), l);
}
function wi(t, e) {
  return !t || !ns(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), De(t, e[0].toLowerCase() + e.slice(1)) || De(t, An(e)) || De(t, e));
}
let Ao = !1;
function oi() {
  Ao = !0;
}
function oc(t) {
  const {
    type: e,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [a],
    slots: l,
    attrs: d,
    emit: p,
    render: _,
    renderCache: v,
    props: w,
    data: D,
    setupState: O,
    ctx: Q,
    inheritAttrs: H
  } = t, le = ri(t);
  let pe, oe;
  process.env.NODE_ENV !== "production" && (Ao = !1);
  try {
    if (n.shapeFlag & 4) {
      const ne = o || r, Se = process.env.NODE_ENV !== "production" && O.__isScriptSetup ? new Proxy(ne, {
        get(Xe, He, Re) {
          return W(
            `Property '${String(
              He
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Xe, He, Re);
        }
      }) : ne;
      pe = At(
        _.call(
          Se,
          ne,
          v,
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ qt(w) : w,
          O,
          D,
          Q
        )
      ), oe = d;
    } else {
      const ne = e;
      process.env.NODE_ENV !== "production" && d === w && oi(), pe = At(
        ne.length > 1 ? ne(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ qt(w) : w,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return oi(), /* @__PURE__ */ qt(d);
            },
            slots: l,
            emit: p
          } : { attrs: d, slots: l, emit: p }
        ) : ne(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ qt(w) : w,
          null
        )
      ), oe = e.props ? d : mh(d);
    }
  } catch (ne) {
    qr.length = 0, is(ne, t, 1), pe = cn(Pt);
  }
  let fe = pe, xe;
  if (process.env.NODE_ENV !== "production" && pe.patchFlag > 0 && pe.patchFlag & 2048 && ([fe, xe] = Tu(pe)), oe && H !== !1) {
    const ne = Object.keys(oe), { shapeFlag: Se } = fe;
    if (ne.length) {
      if (Se & 7)
        a && ne.some(Js) && (oe = vh(
          oe,
          a
        )), fe = Nn(fe, oe, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !Ao && fe.type !== Pt) {
        const Xe = Object.keys(d), He = [], Re = [];
        for (let Ue = 0, Ct = Xe.length; Ue < Ct; Ue++) {
          const it = Xe[Ue];
          ns(it) ? Js(it) || He.push(it[2].toLowerCase() + it.slice(3)) : Re.push(it);
        }
        Re.length && W(
          `Extraneous non-props attributes (${Re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), He.length && W(
          `Extraneous non-emits event listeners (${He.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !ac(fe) && W(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), fe = Nn(fe, null, !1, !0), fe.dirs = fe.dirs ? fe.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !ac(fe) && W(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), ea(fe, n.transition)), process.env.NODE_ENV !== "production" && xe ? xe(fe) : pe = fe, ri(le), pe;
}
const Tu = (t) => {
  const e = t.children, n = t.dynamicChildren, r = ra(e, !1);
  if (r) {
    if (process.env.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return Tu(r);
  } else return [t, void 0];
  const o = e.indexOf(r), a = n ? n.indexOf(r) : -1, l = (d) => {
    e[o] = d, n && (a > -1 ? n[a] = d : d.patchFlag > 0 && (t.dynamicChildren = [...n, d]));
  };
  return [At(r), l];
};
function ra(t, e = !0) {
  let n;
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (bi(o)) {
      if (o.type !== Pt || o.children === "v-if") {
        if (n)
          return;
        if (n = o, process.env.NODE_ENV !== "production" && e && n.patchFlag > 0 && n.patchFlag & 2048)
          return ra(n.children);
      }
    } else
      return;
  }
  return n;
}
const mh = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || ns(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, vh = (t, e) => {
  const n = {};
  for (const r in t)
    (!Js(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
}, ac = (t) => t.shapeFlag & 7 || t.type === Pt;
function wh(t, e, n) {
  const { props: r, children: o, component: a } = t, { props: l, children: d, patchFlag: p } = e, _ = a.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (o || d) && Wt || e.dirs || e.transition)
    return !0;
  if (n && p >= 0) {
    if (p & 1024)
      return !0;
    if (p & 16)
      return r ? cc(r, l, _) : !!l;
    if (p & 8) {
      const v = e.dynamicProps;
      for (let w = 0; w < v.length; w++) {
        const D = v[w];
        if (Ru(l, r, D) && !wi(_, D))
          return !0;
      }
    }
  } else
    return (o || d) && (!d || !d.$stable) ? !0 : r === l ? !1 : r ? l ? cc(r, l, _) : !0 : !!l;
  return !1;
}
function cc(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (Ru(e, t, a) && !wi(n, a))
      return !0;
  }
  return !1;
}
function Ru(t, e, n) {
  const r = t[n], o = e[n];
  return n === "style" && ke(r) && ke(o) ? !yr(r, o) : r !== o;
}
function bh({ vnode: t, parent: e }, n) {
  for (; e; ) {
    const r = e.subTree;
    if (r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t)
      (t = e.vnode).el = n, e = e.parent;
    else
      break;
  }
}
const Uu = {}, Bu = () => Object.create(Uu), Mu = (t) => Object.getPrototypeOf(t) === Uu;
function _h(t, e, n, r = !1) {
  const o = {}, a = Bu();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Fu(t, e, o, a);
  for (const l in t.propsOptions[0])
    l in o || (o[l] = void 0);
  process.env.NODE_ENV !== "production" && Vu(e || {}, o, t), n ? t.props = r ? o : /* @__PURE__ */ cd(o) : t.type.props ? t.props = o : t.props = a, t.attrs = a;
}
function Eh(t) {
  for (; t; ) {
    if (t.type.__hmrId) return !0;
    t = t.parent;
  }
}
function xh(t, e, n, r) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: l }
  } = t, d = /* @__PURE__ */ _e(o), [p] = t.propsOptions;
  let _ = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Eh(t)) && (r || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const v = t.vnode.dynamicProps;
      for (let w = 0; w < v.length; w++) {
        let D = v[w];
        if (wi(t.emitsOptions, D))
          continue;
        const O = e[D];
        if (p)
          if (De(a, D))
            O !== a[D] && (a[D] = O, _ = !0);
          else {
            const Q = Tt(D);
            o[Q] = No(
              p,
              d,
              Q,
              O,
              t,
              !1
            );
          }
        else
          O !== a[D] && (a[D] = O, _ = !0);
      }
    }
  } else {
    Fu(t, e, o, a) && (_ = !0);
    let v;
    for (const w in d)
      (!e || // for camelCase
      !De(e, w) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = An(w)) === w || !De(e, v))) && (p ? n && // for camelCase
      (n[w] !== void 0 || // for kebab-case
      n[v] !== void 0) && (o[w] = No(
        p,
        d,
        w,
        void 0,
        t,
        !0
      )) : delete o[w]);
    if (a !== d)
      for (const w in a)
        (!e || !De(e, w)) && (delete a[w], _ = !0);
  }
  _ && Gt(t.attrs, "set", ""), process.env.NODE_ENV !== "production" && Vu(e || {}, o, t);
}
function Fu(t, e, n, r) {
  const [o, a] = t.propsOptions;
  let l = !1, d;
  if (e)
    for (let p in e) {
      if (Kr(p))
        continue;
      const _ = e[p];
      let v;
      o && De(o, v = Tt(p)) ? !a || !a.includes(v) ? n[v] = _ : (d || (d = {}))[v] = _ : wi(t.emitsOptions, p) || (!(p in r) || _ !== r[p]) && (r[p] = _, l = !0);
    }
  if (a) {
    const p = /* @__PURE__ */ _e(n), _ = d || Ne;
    for (let v = 0; v < a.length; v++) {
      const w = a[v];
      n[w] = No(
        o,
        p,
        w,
        _[w],
        t,
        !De(_, w)
      );
    }
  }
  return l;
}
function No(t, e, n, r, o, a) {
  const l = t[n];
  if (l != null) {
    const d = De(l, "default");
    if (d && r === void 0) {
      const p = l.default;
      if (l.type !== Function && !l.skipFactory && ge(p)) {
        const { propsDefaults: _ } = o;
        if (n in _)
          r = _[n];
        else {
          const v = cs(o);
          r = _[n] = p.call(
            null,
            e
          ), v();
        }
      } else
        r = p;
      o.ce && o.ce._setProp(n, r);
    }
    l[
      0
      /* shouldCast */
    ] && (a && !d ? r = !1 : l[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === An(n)) && (r = !0));
  }
  return r;
}
const Sh = /* @__PURE__ */ new WeakMap();
function $u(t, e, n = !1) {
  const r = n ? Sh : e.propsCache, o = r.get(t);
  if (o)
    return o;
  const a = t.props, l = {}, d = [];
  let p = !1;
  if (!ge(t)) {
    const v = (w) => {
      p = !0;
      const [D, O] = $u(w, e, !0);
      qe(l, D), O && d.push(...O);
    };
    !n && e.mixins.length && e.mixins.forEach(v), t.extends && v(t.extends), t.mixins && t.mixins.forEach(v);
  }
  if (!a && !p)
    return ke(t) && r.set(t, lr), lr;
  if (ue(a))
    for (let v = 0; v < a.length; v++) {
      process.env.NODE_ENV !== "production" && !Me(a[v]) && W("props must be strings when using array syntax.", a[v]);
      const w = Tt(a[v]);
      uc(w) && (l[w] = Ne);
    }
  else if (a) {
    process.env.NODE_ENV !== "production" && !ke(a) && W("invalid props options", a);
    for (const v in a) {
      const w = Tt(v);
      if (uc(w)) {
        const D = a[v], O = l[w] = ue(D) || ge(D) ? { type: D } : qe({}, D), Q = O.type;
        let H = !1, le = !0;
        if (ue(Q))
          for (let pe = 0; pe < Q.length; ++pe) {
            const oe = Q[pe], fe = ge(oe) && oe.name;
            if (fe === "Boolean") {
              H = !0;
              break;
            } else fe === "String" && (le = !1);
          }
        else
          H = ge(Q) && Q.name === "Boolean";
        O[
          0
          /* shouldCast */
        ] = H, O[
          1
          /* shouldCastTrue */
        ] = le, (H || De(O, "default")) && d.push(w);
      }
    }
  }
  const _ = [l, d];
  return ke(t) && r.set(t, _), _;
}
function uc(t) {
  return t[0] !== "$" && !Kr(t) ? !0 : (process.env.NODE_ENV !== "production" && W(`Invalid prop name: "${t}" is a reserved property.`), !1);
}
function Ph(t) {
  return t === null ? "null" : typeof t == "function" ? t.name || "" : typeof t == "object" && t.constructor && t.constructor.name || "";
}
function Vu(t, e, n) {
  const r = /* @__PURE__ */ _e(e), o = n.propsOptions[0], a = Object.keys(t).map((l) => Tt(l));
  for (const l in o) {
    let d = o[l];
    d != null && Ch(
      l,
      r[l],
      d,
      process.env.NODE_ENV !== "production" ? /* @__PURE__ */ qt(r) : r,
      !a.includes(l)
    );
  }
}
function Ch(t, e, n, r, o) {
  const { type: a, required: l, validator: d, skipCheck: p } = n;
  if (l && o) {
    W('Missing required prop: "' + t + '"');
    return;
  }
  if (!(e == null && !l)) {
    if (a != null && a !== !0 && !p) {
      let _ = !1;
      const v = ue(a) ? a : [a], w = [];
      for (let D = 0; D < v.length && !_; D++) {
        const { valid: O, expectedType: Q } = kh(e, v[D]);
        w.push(Q || ""), _ = O;
      }
      if (!_) {
        W(Ih(t, e, w));
        return;
      }
    }
    d && !d(e, r) && W('Invalid prop: custom validator check failed for prop "' + t + '".');
  }
}
const Dh = /* @__PURE__ */ ln(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function kh(t, e) {
  let n;
  const r = Ph(e);
  if (r === "null")
    n = t === null;
  else if (Dh(r)) {
    const o = typeof t;
    n = o === r.toLowerCase(), !n && o === "object" && (n = t instanceof e);
  } else r === "Object" ? n = ke(t) : r === "Array" ? n = ue(t) : n = t instanceof e;
  return {
    valid: n,
    expectedType: r
  };
}
function Ih(t, e, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${t}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${t}". Expected ${n.map(fi).join(" | ")}`;
  const o = n[0], a = Ko(e), l = lc(e, o), d = lc(e, a);
  return n.length === 1 && fc(o) && !Oh(o, a) && (r += ` with value ${l}`), r += `, got ${a} `, fc(a) && (r += `with value ${d}.`), r;
}
function lc(t, e) {
  return e === "String" ? `"${t}"` : e === "Number" ? `${Number(t)}` : `${t}`;
}
function fc(t) {
  return ["string", "number", "boolean"].some((n) => t.toLowerCase() === n);
}
function Oh(...t) {
  return t.some((e) => e.toLowerCase() === "boolean");
}
const sa = (t) => t === "_" || t === "_ctx" || t === "$stable", ia = (t) => ue(t) ? t.map(At) : [At(t)], Ah = (t, e, n) => {
  if (e._n)
    return e;
  const r = Md((...o) => (process.env.NODE_ENV !== "production" && Qe && !(n === null && ht) && !(n && n.root !== Qe.root) && W(
    `Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), ia(e(...o))), n);
  return r._c = !1, r;
}, Ku = (t, e, n) => {
  const r = t._ctx;
  for (const o in t) {
    if (sa(o)) continue;
    const a = t[o];
    if (ge(a))
      e[o] = Ah(o, a, r);
    else if (a != null) {
      process.env.NODE_ENV !== "production" && W(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const l = ia(a);
      e[o] = () => l;
    }
  }
}, Lu = (t, e) => {
  process.env.NODE_ENV !== "production" && !ta(t.vnode) && W(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = ia(e);
  t.slots.default = () => n;
}, To = (t, e, n) => {
  for (const r in e)
    (n || !sa(r)) && (t[r] = e[r]);
}, Nh = (t, e, n) => {
  const r = t.slots = Bu();
  if (t.vnode.shapeFlag & 32) {
    const o = e._;
    o ? (To(r, e, n), n && Xs(r, "_", o, !0)) : Ku(e, r);
  } else e && Lu(t, e);
}, Th = (t, e, n) => {
  const { vnode: r, slots: o } = t;
  let a = !0, l = Ne;
  if (r.shapeFlag & 32) {
    const d = e._;
    d ? process.env.NODE_ENV !== "production" && Wt ? (To(o, e, n), Gt(t, "set", "$slots")) : n && d === 1 ? a = !1 : To(o, e, n) : (a = !e.$stable, Ku(e, o)), l = e;
  } else e && (Lu(t, e), l = { default: 1 });
  if (a)
    for (const d in o)
      !sa(d) && l[d] == null && delete o[d];
};
let Rr, sn;
function or(t, e) {
  t.appContext.config.performance && ai() && sn.mark(`vue-${e}-${t.uid}`), process.env.NODE_ENV !== "production" && Rd(t, e, ai() ? sn.now() : Date.now());
}
function ar(t, e) {
  if (t.appContext.config.performance && ai()) {
    const n = `vue-${e}-${t.uid}`, r = n + ":end", o = `<${us(t, t.type)}> ${e}`;
    sn.mark(r), sn.measure(o, n, r), sn.clearMeasures(o), sn.clearMarks(n), sn.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && Ud(t, e, ai() ? sn.now() : Date.now());
}
function ai() {
  return Rr !== void 0 || (typeof window < "u" && window.performance ? (Rr = !0, sn = window.performance) : Rr = !1), Rr;
}
function Rh() {
  const t = [];
  if (process.env.NODE_ENV !== "production" && t.length) {
    const e = t.length > 1;
    console.warn(
      `Feature flag${e ? "s" : ""} ${t.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const bt = $h;
function Uh(t) {
  return Bh(t);
}
function Bh(t, e) {
  Rh();
  const n = ss();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Xo(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: r,
    remove: o,
    patchProp: a,
    createElement: l,
    createText: d,
    createComment: p,
    setText: _,
    setElementText: v,
    parentNode: w,
    nextSibling: D,
    setScopeId: O = Je,
    insertStaticContent: Q
  } = t, H = (b, x, T, L = null, F = null, V = null, Y = void 0, I = null, G = process.env.NODE_ENV !== "production" && Wt ? !1 : !!x.dynamicChildren) => {
    if (b === x)
      return;
    b && !Ur(b, x) && (L = Ve(b), yt(b, F, V, !0), b = null), x.patchFlag === -2 && (G = !1, x.dynamicChildren = null);
    const { type: j, ref: ce, shapeFlag: K } = x;
    switch (j) {
      case as:
        le(b, x, T, L);
        break;
      case Pt:
        pe(b, x, T, L);
        break;
      case qs:
        b == null ? oe(x, T, L, Y) : process.env.NODE_ENV !== "production" && fe(b, x, T, Y);
        break;
      case nt:
        dn(
          b,
          x,
          T,
          L,
          F,
          V,
          Y,
          I,
          G
        );
        break;
      default:
        K & 1 ? Se(
          b,
          x,
          T,
          L,
          F,
          V,
          Y,
          I,
          G
        ) : K & 6 ? Tn(
          b,
          x,
          T,
          L,
          F,
          V,
          Y,
          I,
          G
        ) : K & 64 || K & 128 ? j.process(
          b,
          x,
          T,
          L,
          F,
          V,
          Y,
          I,
          G,
          pn
        ) : process.env.NODE_ENV !== "production" && W("Invalid VNode type:", j, `(${typeof j})`);
    }
    ce != null && F ? zr(ce, b && b.ref, V, x || b, !x) : ce == null && b && b.ref != null && zr(b.ref, null, V, b, !0);
  }, le = (b, x, T, L) => {
    if (b == null)
      r(
        x.el = d(x.children),
        T,
        L
      );
    else {
      const F = x.el = b.el;
      x.children !== b.children && _(F, x.children);
    }
  }, pe = (b, x, T, L) => {
    b == null ? r(
      x.el = p(x.children || ""),
      T,
      L
    ) : x.el = b.el;
  }, oe = (b, x, T, L) => {
    [b.el, b.anchor] = Q(
      b.children,
      x,
      T,
      L,
      b.el,
      b.anchor
    );
  }, fe = (b, x, T, L) => {
    if (x.children !== b.children) {
      const F = D(b.anchor);
      ne(b), [x.el, x.anchor] = Q(
        x.children,
        T,
        F,
        L
      );
    } else
      x.el = b.el, x.anchor = b.anchor;
  }, xe = ({ el: b, anchor: x }, T, L) => {
    let F;
    for (; b && b !== x; )
      F = D(b), r(b, T, L), b = F;
    r(x, T, L);
  }, ne = ({ el: b, anchor: x }) => {
    let T;
    for (; b && b !== x; )
      T = D(b), o(b), b = T;
    o(x);
  }, Se = (b, x, T, L, F, V, Y, I, G) => {
    if (x.type === "svg" ? Y = "svg" : x.type === "math" && (Y = "mathml"), b == null)
      Xe(
        x,
        T,
        L,
        F,
        V,
        Y,
        I,
        G
      );
    else {
      const j = b.el && b.el._isVueCE ? b.el : null;
      try {
        j && j._beginPatch(), Ue(
          b,
          x,
          F,
          V,
          Y,
          I,
          G
        );
      } finally {
        j && j._endPatch();
      }
    }
  }, Xe = (b, x, T, L, F, V, Y, I) => {
    let G, j;
    const { props: ce, shapeFlag: K, transition: re, dirs: ye } = b;
    if (G = b.el = l(
      b.type,
      V,
      ce && ce.is,
      ce
    ), K & 8 ? v(G, b.children) : K & 16 && Re(
      b.children,
      G,
      null,
      L,
      F,
      po(b, V),
      Y,
      I
    ), ye && jn(b, null, L, "created"), He(G, b, b.scopeId, Y, L), ce) {
      for (const Te in ce)
        Te !== "value" && !Kr(Te) && a(G, Te, null, ce[Te], V, L);
      "value" in ce && a(G, "value", null, ce.value, V), (j = ce.onVnodeBeforeMount) && Ht(j, L, b);
    }
    process.env.NODE_ENV !== "production" && (Xs(G, "__vnode", b, !0), Xs(G, "__vueParentComponent", L, !0)), ye && jn(b, null, L, "beforeMount");
    const ve = Mh(F, re);
    ve && re.beforeEnter(G), r(G, x, T), ((j = ce && ce.onVnodeMounted) || ve || ye) && bt(() => {
      j && Ht(j, L, b), ve && re.enter(G), ye && jn(b, null, L, "mounted");
    }, F);
  }, He = (b, x, T, L, F) => {
    if (T && O(b, T), L)
      for (let V = 0; V < L.length; V++)
        O(b, L[V]);
    if (F) {
      let V = F.subTree;
      if (process.env.NODE_ENV !== "production" && V.patchFlag > 0 && V.patchFlag & 2048 && (V = ra(V.children) || V), x === V || zu(V.type) && (V.ssContent === x || V.ssFallback === x)) {
        const Y = F.vnode;
        He(
          b,
          Y,
          Y.scopeId,
          Y.slotScopeIds,
          F.parent
        );
      }
    }
  }, Re = (b, x, T, L, F, V, Y, I, G = 0) => {
    for (let j = G; j < b.length; j++) {
      const ce = b[j] = I ? on(b[j]) : At(b[j]);
      H(
        null,
        ce,
        x,
        T,
        L,
        F,
        V,
        Y,
        I
      );
    }
  }, Ue = (b, x, T, L, F, V, Y) => {
    const I = x.el = b.el;
    process.env.NODE_ENV !== "production" && (I.__vnode = x);
    let { patchFlag: G, dynamicChildren: j, dirs: ce } = x;
    G |= b.patchFlag & 16;
    const K = b.props || Ne, re = x.props || Ne;
    let ye;
    if (T && Hn(T, !1), (ye = re.onVnodeBeforeUpdate) && Ht(ye, T, x, b), ce && jn(x, b, T, "beforeUpdate"), T && Hn(T, !0), process.env.NODE_ENV !== "production" && Wt && (G = 0, Y = !1, j = null), (K.innerHTML && re.innerHTML == null || K.textContent && re.textContent == null) && v(I, ""), j ? (Ct(
      b.dynamicChildren,
      j,
      I,
      T,
      L,
      po(x, F),
      V
    ), process.env.NODE_ENV !== "production" && Gs(b, x)) : Y || Ze(
      b,
      x,
      I,
      null,
      T,
      L,
      po(x, F),
      V,
      !1
    ), G > 0) {
      if (G & 16)
        it(I, K, re, T, F);
      else if (G & 2 && K.class !== re.class && a(I, "class", null, re.class, F), G & 4 && a(I, "style", K.style, re.style, F), G & 8) {
        const ve = x.dynamicProps;
        for (let Te = 0; Te < ve.length; Te++) {
          const Oe = ve[Te], ot = K[Oe], at = re[Oe];
          (at !== ot || Oe === "value") && a(I, Oe, ot, at, F, T);
        }
      }
      G & 1 && b.children !== x.children && v(I, x.children);
    } else !Y && j == null && it(I, K, re, T, F);
    ((ye = re.onVnodeUpdated) || ce) && bt(() => {
      ye && Ht(ye, T, x, b), ce && jn(x, b, T, "updated");
    }, L);
  }, Ct = (b, x, T, L, F, V, Y) => {
    for (let I = 0; I < x.length; I++) {
      const G = b[I], j = x[I], ce = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        G.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (G.type === nt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ur(G, j) || // - In the case of a component, it could contain anything.
        G.shapeFlag & 198) ? w(G.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          T
        )
      );
      H(
        G,
        j,
        ce,
        null,
        L,
        F,
        V,
        Y,
        !0
      );
    }
  }, it = (b, x, T, L, F) => {
    if (x !== T) {
      if (x !== Ne)
        for (const V in x)
          !Kr(V) && !(V in T) && a(
            b,
            V,
            x[V],
            null,
            F,
            L
          );
      for (const V in T) {
        if (Kr(V)) continue;
        const Y = T[V], I = x[V];
        Y !== I && V !== "value" && a(b, V, I, Y, F, L);
      }
      "value" in T && a(b, "value", x.value, T.value, F);
    }
  }, dn = (b, x, T, L, F, V, Y, I, G) => {
    const j = x.el = b ? b.el : d(""), ce = x.anchor = b ? b.anchor : d("");
    let { patchFlag: K, dynamicChildren: re, slotScopeIds: ye } = x;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Wt || K & 2048) && (K = 0, G = !1, re = null), ye && (I = I ? I.concat(ye) : ye), b == null ? (r(j, T, L), r(ce, T, L), Re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      x.children || [],
      T,
      ce,
      F,
      V,
      Y,
      I,
      G
    )) : K > 0 && K & 64 && re && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren && b.dynamicChildren.length === re.length ? (Ct(
      b.dynamicChildren,
      re,
      T,
      F,
      V,
      Y,
      I
    ), process.env.NODE_ENV !== "production" ? Gs(b, x) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (x.key != null || F && x === F.subTree) && Gs(
        b,
        x,
        !0
        /* shallow */
      )
    )) : Ze(
      b,
      x,
      T,
      ce,
      F,
      V,
      Y,
      I,
      G
    );
  }, Tn = (b, x, T, L, F, V, Y, I, G) => {
    x.slotScopeIds = I, b == null ? x.shapeFlag & 512 ? F.ctx.activate(
      x,
      T,
      L,
      Y,
      G
    ) : Dt(
      x,
      T,
      L,
      F,
      V,
      Y,
      G
    ) : We(b, x, G);
  }, Dt = (b, x, T, L, F, V, Y) => {
    const I = b.component = qh(
      b,
      L,
      F
    );
    if (process.env.NODE_ENV !== "production" && I.type.__hmrId && Pd(I), process.env.NODE_ENV !== "production" && (Ls(b), or(I, "mount")), ta(b) && (I.ctx.renderer = pn), process.env.NODE_ENV !== "production" && or(I, "init"), Qh(I, !1, Y), process.env.NODE_ENV !== "production" && ar(I, "init"), process.env.NODE_ENV !== "production" && Wt && (b.el = null), I.asyncDep) {
      if (F && F.registerDep(I, me, Y), !b.el) {
        const G = I.subTree = cn(Pt);
        pe(null, G, x, T), b.placeholder = G.el;
      }
    } else
      me(
        I,
        b,
        x,
        T,
        F,
        V,
        Y
      );
    process.env.NODE_ENV !== "production" && (js(), ar(I, "mount"));
  }, We = (b, x, T) => {
    const L = x.component = b.component;
    if (wh(b, x, T))
      if (L.asyncDep && !L.asyncResolved) {
        process.env.NODE_ENV !== "production" && Ls(x), Ee(L, x, T), process.env.NODE_ENV !== "production" && js();
        return;
      } else
        L.next = x, L.update();
    else
      x.el = b.el, L.vnode = x;
  }, me = (b, x, T, L, F, V, Y) => {
    const I = () => {
      if (b.isMounted) {
        let { next: K, bu: re, u: ye, parent: ve, vnode: Te } = b;
        {
          const Ke = ju(b);
          if (Ke) {
            K && (K.el = Te.el, Ee(b, K, Y)), Ke.asyncDep.then(() => {
              bt(() => {
                b.isUnmounted || j();
              }, F);
            });
            return;
          }
        }
        let Oe = K, ot;
        process.env.NODE_ENV !== "production" && Ls(K || b.vnode), Hn(b, !1), K ? (K.el = Te.el, Ee(b, K, Y)) : K = Te, re && cr(re), (ot = K.props && K.props.onVnodeBeforeUpdate) && Ht(ot, ve, K, Te), Hn(b, !0), process.env.NODE_ENV !== "production" && or(b, "render");
        const at = oc(b);
        process.env.NODE_ENV !== "production" && ar(b, "render");
        const mt = b.subTree;
        b.subTree = at, process.env.NODE_ENV !== "production" && or(b, "patch"), H(
          mt,
          at,
          // parent may have changed if it's in a teleport
          w(mt.el),
          // anchor may have changed if it's in a fragment
          Ve(mt),
          b,
          F,
          V
        ), process.env.NODE_ENV !== "production" && ar(b, "patch"), K.el = at.el, Oe === null && bh(b, at.el), ye && bt(ye, F), (ot = K.props && K.props.onVnodeUpdated) && bt(
          () => Ht(ot, ve, K, Te),
          F
        ), process.env.NODE_ENV !== "production" && wu(b), process.env.NODE_ENV !== "production" && js();
      } else {
        let K;
        const { el: re, props: ye } = x, { bm: ve, m: Te, parent: Oe, root: ot, type: at } = b, mt = Gr(x);
        Hn(b, !1), ve && cr(ve), !mt && (K = ye && ye.onVnodeBeforeMount) && Ht(K, Oe, x), Hn(b, !0);
        {
          ot.ce && ot.ce._hasShadowRoot() && ot.ce._injectChildStyle(at), process.env.NODE_ENV !== "production" && or(b, "render");
          const Ke = b.subTree = oc(b);
          process.env.NODE_ENV !== "production" && ar(b, "render"), process.env.NODE_ENV !== "production" && or(b, "patch"), H(
            null,
            Ke,
            T,
            L,
            b,
            F,
            V
          ), process.env.NODE_ENV !== "production" && ar(b, "patch"), x.el = Ke.el;
        }
        if (Te && bt(Te, F), !mt && (K = ye && ye.onVnodeMounted)) {
          const Ke = x;
          bt(
            () => Ht(K, Oe, Ke),
            F
          );
        }
        (x.shapeFlag & 256 || Oe && Gr(Oe.vnode) && Oe.vnode.shapeFlag & 256) && b.a && bt(b.a, F), b.isMounted = !0, process.env.NODE_ENV !== "production" && Ad(b), x = T = L = null;
      }
    };
    b.scope.on();
    const G = b.effect = new Qc(I);
    b.scope.off();
    const j = b.update = G.run.bind(G), ce = b.job = G.runIfDirty.bind(G);
    ce.i = b, ce.id = b.uid, G.scheduler = () => mi(ce), Hn(b, !0), process.env.NODE_ENV !== "production" && (G.onTrack = b.rtc ? (K) => cr(b.rtc, K) : void 0, G.onTrigger = b.rtg ? (K) => cr(b.rtg, K) : void 0), j();
  }, Ee = (b, x, T) => {
    x.component = b;
    const L = b.vnode.props;
    b.vnode = x, b.next = null, xh(b, x.props, L, T), Th(b, x.children, T), Bt(), Ja(b), Mt();
  }, Ze = (b, x, T, L, F, V, Y, I, G = !1) => {
    const j = b && b.children, ce = b ? b.shapeFlag : 0, K = x.children, { patchFlag: re, shapeFlag: ye } = x;
    if (re > 0) {
      if (re & 128) {
        It(
          j,
          K,
          T,
          L,
          F,
          V,
          Y,
          I,
          G
        );
        return;
      } else if (re & 256) {
        gt(
          j,
          K,
          T,
          L,
          F,
          V,
          Y,
          I,
          G
        );
        return;
      }
    }
    ye & 8 ? (ce & 16 && Ie(j, F, V), K !== j && v(T, K)) : ce & 16 ? ye & 16 ? It(
      j,
      K,
      T,
      L,
      F,
      V,
      Y,
      I,
      G
    ) : Ie(j, F, V, !0) : (ce & 8 && v(T, ""), ye & 16 && Re(
      K,
      T,
      L,
      F,
      V,
      Y,
      I,
      G
    ));
  }, gt = (b, x, T, L, F, V, Y, I, G) => {
    b = b || lr, x = x || lr;
    const j = b.length, ce = x.length, K = Math.min(j, ce);
    let re;
    for (re = 0; re < K; re++) {
      const ye = x[re] = G ? on(x[re]) : At(x[re]);
      H(
        b[re],
        ye,
        T,
        null,
        F,
        V,
        Y,
        I,
        G
      );
    }
    j > ce ? Ie(
      b,
      F,
      V,
      !0,
      !1,
      K
    ) : Re(
      x,
      T,
      L,
      F,
      V,
      Y,
      I,
      G,
      K
    );
  }, It = (b, x, T, L, F, V, Y, I, G) => {
    let j = 0;
    const ce = x.length;
    let K = b.length - 1, re = ce - 1;
    for (; j <= K && j <= re; ) {
      const ye = b[j], ve = x[j] = G ? on(x[j]) : At(x[j]);
      if (Ur(ye, ve))
        H(
          ye,
          ve,
          T,
          null,
          F,
          V,
          Y,
          I,
          G
        );
      else
        break;
      j++;
    }
    for (; j <= K && j <= re; ) {
      const ye = b[K], ve = x[re] = G ? on(x[re]) : At(x[re]);
      if (Ur(ye, ve))
        H(
          ye,
          ve,
          T,
          null,
          F,
          V,
          Y,
          I,
          G
        );
      else
        break;
      K--, re--;
    }
    if (j > K) {
      if (j <= re) {
        const ye = re + 1, ve = ye < ce ? x[ye].el : L;
        for (; j <= re; )
          H(
            null,
            x[j] = G ? on(x[j]) : At(x[j]),
            T,
            ve,
            F,
            V,
            Y,
            I,
            G
          ), j++;
      }
    } else if (j > re)
      for (; j <= K; )
        yt(b[j], F, V, !0), j++;
    else {
      const ye = j, ve = j, Te = /* @__PURE__ */ new Map();
      for (j = ve; j <= re; j++) {
        const et = x[j] = G ? on(x[j]) : At(x[j]);
        et.key != null && (process.env.NODE_ENV !== "production" && Te.has(et.key) && W(
          "Duplicate keys found during update:",
          JSON.stringify(et.key),
          "Make sure keys are unique."
        ), Te.set(et.key, j));
      }
      let Oe, ot = 0;
      const at = re - ve + 1;
      let mt = !1, Ke = 0;
      const gn = new Array(at);
      for (j = 0; j < at; j++) gn[j] = 0;
      for (j = ye; j <= K; j++) {
        const et = b[j];
        if (ot >= at) {
          yt(et, F, V, !0);
          continue;
        }
        let vt;
        if (et.key != null)
          vt = Te.get(et.key);
        else
          for (Oe = ve; Oe <= re; Oe++)
            if (gn[Oe - ve] === 0 && Ur(et, x[Oe])) {
              vt = Oe;
              break;
            }
        vt === void 0 ? yt(et, F, V, !0) : (gn[vt - ve] = j + 1, vt >= Ke ? Ke = vt : mt = !0, H(
          et,
          x[vt],
          T,
          null,
          F,
          V,
          Y,
          I,
          G
        ), ot++);
      }
      const yn = mt ? Fh(gn) : lr;
      for (Oe = yn.length - 1, j = at - 1; j >= 0; j--) {
        const et = ve + j, vt = x[et], wr = x[et + 1], br = et + 1 < ce ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          wr.el || Hu(wr)
        ) : L;
        gn[j] === 0 ? H(
          null,
          vt,
          T,
          br,
          F,
          V,
          Y,
          I,
          G
        ) : mt && (Oe < 0 || j !== yn[Oe] ? Vt(vt, T, br, 2) : Oe--);
      }
    }
  }, Vt = (b, x, T, L, F = null) => {
    const { el: V, type: Y, transition: I, children: G, shapeFlag: j } = b;
    if (j & 6) {
      Vt(b.component.subTree, x, T, L);
      return;
    }
    if (j & 128) {
      b.suspense.move(x, T, L);
      return;
    }
    if (j & 64) {
      Y.move(b, x, T, pn);
      return;
    }
    if (Y === nt) {
      r(V, x, T);
      for (let K = 0; K < G.length; K++)
        Vt(G[K], x, T, L);
      r(b.anchor, x, T);
      return;
    }
    if (Y === qs) {
      xe(b, x, T);
      return;
    }
    if (L !== 2 && j & 1 && I)
      if (L === 0)
        I.beforeEnter(V), r(V, x, T), bt(() => I.enter(V), F);
      else {
        const { leave: K, delayLeave: re, afterLeave: ye } = I, ve = () => {
          b.ctx.isUnmounted ? o(V) : r(V, x, T);
        }, Te = () => {
          V._isLeaving && V[Hd](
            !0
            /* cancelled */
          ), K(V, () => {
            ve(), ye && ye();
          });
        };
        re ? re(V, ve, Te) : Te();
      }
    else
      r(V, x, T);
  }, yt = (b, x, T, L = !1, F = !1) => {
    const {
      type: V,
      props: Y,
      ref: I,
      children: G,
      dynamicChildren: j,
      shapeFlag: ce,
      patchFlag: K,
      dirs: re,
      cacheIndex: ye
    } = b;
    if (K === -2 && (F = !1), I != null && (Bt(), zr(I, null, T, b, !0), Mt()), ye != null && (x.renderCache[ye] = void 0), ce & 256) {
      x.ctx.deactivate(b);
      return;
    }
    const ve = ce & 1 && re, Te = !Gr(b);
    let Oe;
    if (Te && (Oe = Y && Y.onVnodeBeforeUnmount) && Ht(Oe, x, b), ce & 6)
      se(b.component, T, L);
    else {
      if (ce & 128) {
        b.suspense.unmount(T, L);
        return;
      }
      ve && jn(b, null, x, "beforeUnmount"), ce & 64 ? b.type.remove(
        b,
        x,
        T,
        pn,
        L
      ) : j && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !j.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (V !== nt || K > 0 && K & 64) ? Ie(
        j,
        x,
        T,
        !1,
        !0
      ) : (V === nt && K & 384 || !F && ce & 16) && Ie(G, x, T), L && hn(b);
    }
    (Te && (Oe = Y && Y.onVnodeUnmounted) || ve) && bt(() => {
      Oe && Ht(Oe, x, b), ve && jn(b, null, x, "unmounted");
    }, T);
  }, hn = (b) => {
    const { type: x, el: T, anchor: L, transition: F } = b;
    if (x === nt) {
      process.env.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && F && !F.persisted ? b.children.forEach((Y) => {
        Y.type === Pt ? o(Y.el) : hn(Y);
      }) : Xn(T, L);
      return;
    }
    if (x === qs) {
      ne(b);
      return;
    }
    const V = () => {
      o(T), F && !F.persisted && F.afterLeave && F.afterLeave();
    };
    if (b.shapeFlag & 1 && F && !F.persisted) {
      const { leave: Y, delayLeave: I } = F, G = () => Y(T, V);
      I ? I(b.el, V, G) : G();
    } else
      V();
  }, Xn = (b, x) => {
    let T;
    for (; b !== x; )
      T = D(b), o(b), b = T;
    o(x);
  }, se = (b, x, T) => {
    process.env.NODE_ENV !== "production" && b.type.__hmrId && Cd(b);
    const { bum: L, scope: F, job: V, subTree: Y, um: I, m: G, a: j } = b;
    dc(G), dc(j), L && cr(L), F.stop(), V && (V.flags |= 8, yt(Y, b, x, T)), I && bt(I, x), bt(() => {
      b.isUnmounted = !0;
    }, x), process.env.NODE_ENV !== "production" && Td(b);
  }, Ie = (b, x, T, L = !1, F = !1, V = 0) => {
    for (let Y = V; Y < b.length; Y++)
      yt(b[Y], x, T, L, F);
  }, Ve = (b) => {
    if (b.shapeFlag & 6)
      return Ve(b.component.subTree);
    if (b.shapeFlag & 128)
      return b.suspense.next();
    const x = D(b.anchor || b.el), T = x && x[Ld];
    return T ? D(T) : x;
  };
  let Xt = !1;
  const Zt = (b, x, T) => {
    let L;
    b == null ? x._vnode && (yt(x._vnode, null, null, !0), L = x._vnode.component) : H(
      x._vnode || null,
      b,
      x,
      null,
      null,
      null,
      T
    ), x._vnode = b, Xt || (Xt = !0, Ja(L), yu(), Xt = !1);
  }, pn = {
    p: H,
    um: yt,
    m: Vt,
    r: hn,
    mt: Dt,
    mc: Re,
    pc: Ze,
    pbc: Ct,
    n: Ve,
    o: t
  };
  return {
    render: Zt,
    hydrate: void 0,
    createApp: hh(Zt)
  };
}
function po({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Hn({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function Mh(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Gs(t, e, n = !1) {
  const r = t.children, o = e.children;
  if (ue(r) && ue(o))
    for (let a = 0; a < r.length; a++) {
      const l = r[a];
      let d = o[a];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = o[a] = on(o[a]), d.el = l.el), !n && d.patchFlag !== -2 && Gs(l, d)), d.type === as && (d.patchFlag === -1 && (d = o[a] = on(d)), d.el = l.el), d.type === Pt && !d.el && (d.el = l.el), process.env.NODE_ENV !== "production" && d.el && (d.el.__vnode = d);
    }
}
function Fh(t) {
  const e = t.slice(), n = [0];
  let r, o, a, l, d;
  const p = t.length;
  for (r = 0; r < p; r++) {
    const _ = t[r];
    if (_ !== 0) {
      if (o = n[n.length - 1], t[o] < _) {
        e[r] = o, n.push(r);
        continue;
      }
      for (a = 0, l = n.length - 1; a < l; )
        d = a + l >> 1, t[n[d]] < _ ? a = d + 1 : l = d;
      _ < t[n[a]] && (a > 0 && (e[r] = n[a - 1]), n[a] = r);
    }
  }
  for (a = n.length, l = n[a - 1]; a-- > 0; )
    n[a] = l, l = e[l];
  return n;
}
function ju(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : ju(e);
}
function dc(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function Hu(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? Hu(e.subTree) : null;
}
const zu = (t) => t.__isSuspense;
function $h(t, e) {
  e && e.pendingBranch ? ue(t) ? e.effects.push(...t) : e.effects.push(t) : gu(t);
}
const nt = /* @__PURE__ */ Symbol.for("v-fgt"), as = /* @__PURE__ */ Symbol.for("v-txt"), Pt = /* @__PURE__ */ Symbol.for("v-cmt"), qs = /* @__PURE__ */ Symbol.for("v-stc"), qr = [];
let St = null;
function $e(t = !1) {
  qr.push(St = t ? null : []);
}
function Vh() {
  qr.pop(), St = qr[qr.length - 1] || null;
}
let Xr = 1;
function hc(t, e = !1) {
  Xr += t, t < 0 && St && e && (St.hasOnce = !0);
}
function Gu(t) {
  return t.dynamicChildren = Xr > 0 ? St || lr : null, Vh(), Xr > 0 && St && St.push(t), t;
}
function je(t, e, n, r, o, a) {
  return Gu(
    q(
      t,
      e,
      n,
      r,
      o,
      a,
      !0
    )
  );
}
function Kh(t, e, n, r, o) {
  return Gu(
    cn(
      t,
      e,
      n,
      r,
      o,
      !0
    )
  );
}
function bi(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Ur(t, e) {
  if (process.env.NODE_ENV !== "production" && e.shapeFlag & 6 && t.component) {
    const n = Hs.get(e.type);
    if (n && n.has(t.component))
      return t.shapeFlag &= -257, e.shapeFlag &= -513, !1;
  }
  return t.type === e.type && t.key === e.key;
}
const Lh = (...t) => Wu(
  ...t
), qu = ({ key: t }) => t ?? null, Ws = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Me(t) || /* @__PURE__ */ Ge(t) || ge(t) ? { i: ht, r: t, k: e, f: !!n } : t : null);
function q(t, e = null, n = null, r = 0, o = null, a = t === nt ? 0 : 1, l = !1, d = !1) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && qu(e),
    ref: e && Ws(e),
    scopeId: _u,
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
    shapeFlag: a,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: ht
  };
  return d ? (oa(p, n), a & 128 && t.normalize(p)) : n && (p.shapeFlag |= Me(n) ? 8 : 16), process.env.NODE_ENV !== "production" && p.key !== p.key && W("VNode created with invalid key (NaN). VNode type:", p.type), Xr > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  St && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (p.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  p.patchFlag !== 32 && St.push(p), p;
}
const cn = process.env.NODE_ENV !== "production" ? Lh : Wu;
function Wu(t, e = null, n = null, r = 0, o = null, a = !1) {
  if ((!t || t === nh) && (process.env.NODE_ENV !== "production" && !t && W(`Invalid vnode type when creating vnode: ${t}.`), t = Pt), bi(t)) {
    const d = Nn(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && oa(d, n), Xr > 0 && !a && St && (d.shapeFlag & 6 ? St[St.indexOf(t)] = d : St.push(d)), d.patchFlag = -2, d;
  }
  if (tl(t) && (t = t.__vccOpts), e) {
    e = jh(e);
    let { class: d, style: p } = e;
    d && !Me(d) && (e.class = hi(d)), ke(p) && (/* @__PURE__ */ Zs(p) && !ue(p) && (p = qe({}, p)), e.style = jo(p));
  }
  const l = Me(t) ? 1 : zu(t) ? 128 : jd(t) ? 64 : ke(t) ? 4 : ge(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && l & 4 && /* @__PURE__ */ Zs(t) && (t = /* @__PURE__ */ _e(t), W(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), q(
    t,
    e,
    n,
    r,
    o,
    l,
    a,
    !0
  );
}
function jh(t) {
  return t ? /* @__PURE__ */ Zs(t) || Mu(t) ? qe({}, t) : t : null;
}
function Nn(t, e, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: l, children: d, transition: p } = t, _ = e ? Hh(o || {}, e) : o, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: _,
    key: _ && qu(_),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? ue(a) ? a.concat(Ws(e)) : [a, Ws(e)] : Ws(e)
    ) : a,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && l === -1 && ue(d) ? d.map(Qu) : d,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== nt ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: p,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Nn(t.ssContent),
    ssFallback: t.ssFallback && Nn(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return p && r && ea(
    v,
    p.clone(v)
  ), v;
}
function Qu(t) {
  const e = Nn(t);
  return ue(t.children) && (e.children = t.children.map(Qu)), e;
}
function Yu(t = " ", e = 0) {
  return cn(as, null, t, e);
}
function st(t = "", e = !1) {
  return e ? ($e(), Kh(Pt, null, t)) : cn(Pt, null, t);
}
function At(t) {
  return t == null || typeof t == "boolean" ? cn(Pt) : ue(t) ? cn(
    nt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : bi(t) ? on(t) : cn(as, null, String(t));
}
function on(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Nn(t);
}
function oa(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (ue(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const o = e.default;
      o && (o._c && (o._d = !1), oa(t, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = e._;
      !o && !Mu(e) ? e._ctx = ht : o === 3 && ht && (ht.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else ge(e) ? (e = { default: e, _ctx: ht }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [Yu(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function Hh(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const o in r)
      if (o === "class")
        e.class !== r.class && (e.class = hi([e.class, r.class]));
      else if (o === "style")
        e.style = jo([e.style, r.style]);
      else if (ns(o)) {
        const a = e[o], l = r[o];
        l && a !== l && !(ue(a) && a.includes(l)) && (e[o] = a ? [].concat(a, l) : l);
      } else o !== "" && (e[o] = r[o]);
  }
  return e;
}
function Ht(t, e, n, r = null) {
  Jt(t, e, 7, [
    n,
    r
  ]);
}
const zh = Au();
let Gh = 0;
function qh(t, e, n) {
  const r = t.type, o = (e ? e.appContext : t.appContext) || zh, a = {
    uid: Gh++,
    vnode: t,
    type: r,
    parent: e,
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
    scope: new Lf(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(o.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: $u(r, o),
    emitsOptions: Nu(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ne,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Ne,
    data: Ne,
    props: Ne,
    attrs: Ne,
    slots: Ne,
    refs: Ne,
    setupState: Ne,
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
  return process.env.NODE_ENV !== "production" ? a.ctx = rh(a) : a.ctx = { _: a }, a.root = e ? e.root : a, a.emit = gh.bind(null, a), t.ce && t.ce(a), a;
}
let Qe = null;
const Ju = () => Qe || ht;
let ci, Ro;
{
  const t = ss(), e = (n, r) => {
    let o;
    return (o = t[n]) || (o = t[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((l) => l(a)) : o[0](a);
    };
  };
  ci = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Qe = n
  ), Ro = e(
    "__VUE_SSR_SETTERS__",
    (n) => Zr = n
  );
}
const cs = (t) => {
  const e = Qe;
  return ci(t), t.scope.on(), () => {
    t.scope.off(), ci(e);
  };
}, pc = () => {
  Qe && Qe.scope.off(), ci(null);
}, Wh = /* @__PURE__ */ ln("slot,component");
function Uo(t, { isNativeTag: e }) {
  (Wh(t) || e(t)) && W(
    "Do not use built-in or reserved HTML elements as component id: " + t
  );
}
function Xu(t) {
  return t.vnode.shapeFlag & 4;
}
let Zr = !1;
function Qh(t, e = !1, n = !1) {
  e && Ro(e);
  const { props: r, children: o } = t.vnode, a = Xu(t);
  _h(t, r, a, e), Nh(t, o, n || e);
  const l = a ? Yh(t, e) : void 0;
  return e && Ro(!1), l;
}
function Yh(t, e) {
  const n = t.type;
  if (process.env.NODE_ENV !== "production") {
    if (n.name && Uo(n.name, t.appContext.config), n.components) {
      const o = Object.keys(n.components);
      for (let a = 0; a < o.length; a++)
        Uo(o[a], t.appContext.config);
    }
    if (n.directives) {
      const o = Object.keys(n.directives);
      for (let a = 0; a < o.length; a++)
        Eu(o[a]);
    }
    n.compilerOptions && Jh() && W(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, ku), process.env.NODE_ENV !== "production" && sh(t);
  const { setup: r } = n;
  if (r) {
    Bt();
    const o = t.setupContext = r.length > 1 ? Zh(t) : null, a = cs(t), l = mr(
      r,
      t,
      0,
      [
        process.env.NODE_ENV !== "production" ? /* @__PURE__ */ qt(t.props) : t.props,
        o
      ]
    ), d = Vo(l);
    if (Mt(), a(), (d || t.sp) && !Gr(t) && Pu(t), d) {
      if (l.then(pc, pc), e)
        return l.then((p) => {
          gc(t, p, e);
        }).catch((p) => {
          is(p, t, 0);
        });
      if (t.asyncDep = l, process.env.NODE_ENV !== "production" && !t.suspense) {
        const p = us(t, n);
        W(
          `Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      gc(t, l, e);
  } else
    Zu(t, e);
}
function gc(t, e, n) {
  ge(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : ke(e) ? (process.env.NODE_ENV !== "production" && bi(e) && W(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (t.devtoolsRawSetupState = e), t.setupState = fu(e), process.env.NODE_ENV !== "production" && ih(t)) : process.env.NODE_ENV !== "production" && e !== void 0 && W(
    `setup() should return an object. Received: ${e === null ? "null" : typeof e}`
  ), Zu(t, n);
}
const Jh = () => !0;
function Zu(t, e, n) {
  const r = t.type;
  t.render || (t.render = r.render || Je);
  {
    const o = cs(t);
    Bt();
    try {
      ah(t);
    } finally {
      Mt(), o();
    }
  }
  process.env.NODE_ENV !== "production" && !r.render && t.render === Je && !e && (r.template ? W(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : W("Component is missing template or render function: ", r));
}
const yc = process.env.NODE_ENV !== "production" ? {
  get(t, e) {
    return oi(), Ye(t, "get", ""), t[e];
  },
  set() {
    return W("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return W("setupContext.attrs is readonly."), !1;
  }
} : {
  get(t, e) {
    return Ye(t, "get", ""), t[e];
  }
};
function Xh(t) {
  return new Proxy(t.slots, {
    get(e, n) {
      return Ye(t, "get", "$slots"), e[n];
    }
  });
}
function Zh(t) {
  const e = (n) => {
    if (process.env.NODE_ENV !== "production" && (t.exposed && W("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (ue(n) ? r = "array" : /* @__PURE__ */ Ge(n) && (r = "ref")), r !== "object" && W(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    t.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, r;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(t.attrs, yc));
      },
      get slots() {
        return r || (r = Xh(t));
      },
      get emit() {
        return (o, ...a) => t.emit(o, ...a);
      },
      expose: e
    });
  } else
    return {
      attrs: new Proxy(t.attrs, yc),
      slots: t.slots,
      emit: t.emit,
      expose: e
    };
}
function _i(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(fu(ud(t.exposed)), {
    get(e, n) {
      if (n in e)
        return e[n];
      if (n in Yn)
        return Yn[n](t);
    },
    has(e, n) {
      return n in e || n in Yn;
    }
  })) : t.proxy;
}
const ep = /(?:^|[-_])\w/g, tp = (t) => t.replace(ep, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function el(t, e = !0) {
  return ge(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function us(t, e, n = !1) {
  let r = el(e);
  if (!r && e.__file) {
    const o = e.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && t) {
    const o = (a) => {
      for (const l in a)
        if (a[l] === e)
          return l;
    };
    r = o(t.components) || t.parent && o(
      t.parent.type.components
    ) || o(t.appContext.components);
  }
  return r ? tp(r) : n ? "App" : "Anonymous";
}
function tl(t) {
  return ge(t) && "__vccOpts" in t;
}
const Vr = (t, e) => {
  const n = /* @__PURE__ */ gd(t, e, Zr);
  if (process.env.NODE_ENV !== "production") {
    const r = Ju();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function np() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(w) {
      if (!ke(w))
        return null;
      if (w.__isVue)
        return ["div", t, "VueInstance"];
      if (/* @__PURE__ */ Ge(w)) {
        Bt();
        const D = w.value;
        return Mt(), [
          "div",
          {},
          ["span", t, v(w)],
          "<",
          d(D),
          ">"
        ];
      } else {
        if (/* @__PURE__ */ On(w))
          return [
            "div",
            {},
            ["span", t, /* @__PURE__ */ pt(w) ? "ShallowReactive" : "Reactive"],
            "<",
            d(w),
            `>${/* @__PURE__ */ Ft(w) ? " (readonly)" : ""}`
          ];
        if (/* @__PURE__ */ Ft(w))
          return [
            "div",
            {},
            ["span", t, /* @__PURE__ */ pt(w) ? "ShallowReadonly" : "Readonly"],
            "<",
            d(w),
            ">"
          ];
      }
      return null;
    },
    hasBody(w) {
      return w && w.__isVue;
    },
    body(w) {
      if (w && w.__isVue)
        return [
          "div",
          {},
          ...a(w.$)
        ];
    }
  };
  function a(w) {
    const D = [];
    w.type.props && w.props && D.push(l("props", /* @__PURE__ */ _e(w.props))), w.setupState !== Ne && D.push(l("setup", w.setupState)), w.data !== Ne && D.push(l("data", /* @__PURE__ */ _e(w.data)));
    const O = p(w, "computed");
    O && D.push(l("computed", O));
    const Q = p(w, "inject");
    return Q && D.push(l("injected", Q)), D.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: w }]
    ]), D;
  }
  function l(w, D) {
    return D = qe({}, D), Object.keys(D).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        w
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(D).map((O) => [
          "div",
          {},
          ["span", r, O + ": "],
          d(D[O], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function d(w, D = !0) {
    return typeof w == "number" ? ["span", e, w] : typeof w == "string" ? ["span", n, JSON.stringify(w)] : typeof w == "boolean" ? ["span", r, w] : ke(w) ? ["object", { object: D ? /* @__PURE__ */ _e(w) : w }] : ["span", n, String(w)];
  }
  function p(w, D) {
    const O = w.type;
    if (ge(O))
      return;
    const Q = {};
    for (const H in w.ctx)
      _(O, H, D) && (Q[H] = w.ctx[H]);
    return Q;
  }
  function _(w, D, O) {
    const Q = w[O];
    if (ue(Q) && Q.includes(D) || ke(Q) && D in Q || w.extends && _(w.extends, D, O) || w.mixins && w.mixins.some((H) => _(H, D, O)))
      return !0;
  }
  function v(w) {
    return /* @__PURE__ */ pt(w) ? "ShallowRef" : w.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const mc = "3.5.28", Qt = process.env.NODE_ENV !== "production" ? W : Je;
process.env.NODE_ENV;
process.env.NODE_ENV;
let Bo;
const vc = typeof window < "u" && window.trustedTypes;
if (vc)
  try {
    Bo = /* @__PURE__ */ vc.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch (t) {
    process.env.NODE_ENV !== "production" && Qt(`Error creating trusted types policy: ${t}`);
  }
const nl = Bo ? (t) => Bo.createHTML(t) : (t) => t, rp = "http://www.w3.org/2000/svg", sp = "http://www.w3.org/1998/Math/MathML", rn = typeof document < "u" ? document : null, wc = rn && /* @__PURE__ */ rn.createElement("template"), ip = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const o = e === "svg" ? rn.createElementNS(rp, t) : e === "mathml" ? rn.createElementNS(sp, t) : n ? rn.createElement(t, { is: n }) : rn.createElement(t);
    return t === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (t) => rn.createTextNode(t),
  createComment: (t) => rn.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => rn.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, n, r, o, a) {
    const l = n ? n.previousSibling : e.lastChild;
    if (o && (o === a || o.nextSibling))
      for (; e.insertBefore(o.cloneNode(!0), n), !(o === a || !(o = o.nextSibling)); )
        ;
    else {
      wc.innerHTML = nl(
        r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t
      );
      const d = wc.content;
      if (r === "svg" || r === "mathml") {
        const p = d.firstChild;
        for (; p.firstChild; )
          d.appendChild(p.firstChild);
        d.removeChild(p);
      }
      e.insertBefore(d, n);
    }
    return [
      // first
      l ? l.nextSibling : e.firstChild,
      // last
      n ? n.previousSibling : e.lastChild
    ];
  }
}, op = /* @__PURE__ */ Symbol("_vtc");
function ap(t, e, n) {
  const r = t[op];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const bc = /* @__PURE__ */ Symbol("_vod"), cp = /* @__PURE__ */ Symbol("_vsh"), up = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), lp = /(?:^|;)\s*display\s*:/;
function fp(t, e, n) {
  const r = t.style, o = Me(n);
  let a = !1;
  if (n && !o) {
    if (e)
      if (Me(e))
        for (const l of e.split(";")) {
          const d = l.slice(0, l.indexOf(":")).trim();
          n[d] == null && Qs(r, d, "");
        }
      else
        for (const l in e)
          n[l] == null && Qs(r, l, "");
    for (const l in n)
      l === "display" && (a = !0), Qs(r, l, n[l]);
  } else if (o) {
    if (e !== n) {
      const l = r[up];
      l && (n += ";" + l), r.cssText = n, a = lp.test(n);
    }
  } else e && t.removeAttribute("style");
  bc in t && (t[bc] = a ? r.display : "", t[cp] && (r.display = "none"));
}
const dp = /[^\\];\s*$/, _c = /\s*!important$/;
function Qs(t, e, n) {
  if (ue(n))
    n.forEach((r) => Qs(t, e, r));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && dp.test(n) && Qt(
    `Unexpected semicolon at the end of '${e}' style value: '${n}'`
  ), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = hp(t, e);
    _c.test(n) ? t.setProperty(
      An(r),
      n.replace(_c, ""),
      "important"
    ) : t[r] = n;
  }
}
const Ec = ["Webkit", "Moz", "ms"], go = {};
function hp(t, e) {
  const n = go[e];
  if (n)
    return n;
  let r = Tt(e);
  if (r !== "filter" && r in t)
    return go[e] = r;
  r = fi(r);
  for (let o = 0; o < Ec.length; o++) {
    const a = Ec[o] + r;
    if (a in t)
      return go[e] = a;
  }
  return e;
}
const xc = "http://www.w3.org/1999/xlink";
function Sc(t, e, n, r, o, a = Vf(e)) {
  r && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(xc, e.slice(6, e.length)) : t.setAttributeNS(xc, e, n) : n == null || a && !Gc(n) ? t.removeAttribute(e) : t.setAttribute(
    e,
    a ? "" : Yt(n) ? String(n) : n
  );
}
function Pc(t, e, n, r, o) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? nl(n) : n);
    return;
  }
  const a = t.tagName;
  if (e === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const d = a === "OPTION" ? t.getAttribute("value") || "" : t.value, p = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(n);
    (d !== p || !("_value" in t)) && (t.value = p), n == null && t.removeAttribute(e), t._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const d = typeof t[e];
    d === "boolean" ? n = Gc(n) : n == null && d === "string" ? (n = "", l = !0) : d === "number" && (n = 0, l = !0);
  }
  try {
    t[e] = n;
  } catch (d) {
    process.env.NODE_ENV !== "production" && !l && Qt(
      `Failed setting prop "${e}" on <${a.toLowerCase()}>: value ${n} is invalid.`,
      d
    );
  }
  l && t.removeAttribute(o || e);
}
function kn(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function pp(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const Cc = /* @__PURE__ */ Symbol("_vei");
function gp(t, e, n, r, o = null) {
  const a = t[Cc] || (t[Cc] = {}), l = a[e];
  if (r && l)
    l.value = process.env.NODE_ENV !== "production" ? kc(r, e) : r;
  else {
    const [d, p] = yp(e);
    if (r) {
      const _ = a[e] = wp(
        process.env.NODE_ENV !== "production" ? kc(r, e) : r,
        o
      );
      kn(t, d, _, p);
    } else l && (pp(t, d, l, p), a[e] = void 0);
  }
}
const Dc = /(?:Once|Passive|Capture)$/;
function yp(t) {
  let e;
  if (Dc.test(t)) {
    e = {};
    let r;
    for (; r = t.match(Dc); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : An(t.slice(2)), e];
}
let yo = 0;
const mp = /* @__PURE__ */ Promise.resolve(), vp = () => yo || (mp.then(() => yo = 0), yo = Date.now());
function wp(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Jt(
      bp(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = vp(), n;
}
function kc(t, e) {
  return ge(t) || ue(t) ? t : (Qt(
    `Wrong type passed as event handler to ${e} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof t}.`
  ), Je);
}
function bp(t, e) {
  if (ue(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return e;
}
const Ic = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, _p = (t, e, n, r, o, a) => {
  const l = o === "svg";
  e === "class" ? ap(t, r, l) : e === "style" ? fp(t, n, r) : ns(e) ? Js(e) || gp(t, e, n, r, a) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : Ep(t, e, r, l)) ? (Pc(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && Sc(t, e, r, l, a, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && (/[A-Z]/.test(e) || !Me(r)) ? Pc(t, Tt(e), r, a, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), Sc(t, e, r, l));
};
function Ep(t, e, n, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && Ic(e) && ge(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const o = t.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Ic(e) && Me(n) ? !1 : e in t;
}
const pr = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return ue(e) ? (n) => cr(e, n) : e;
};
function xp(t) {
  t.target.composing = !0;
}
function Oc(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const un = /* @__PURE__ */ Symbol("_assign");
function Ac(t, e, n) {
  return e && (t = t.trim()), n && (t = di(t)), t;
}
const Vs = {
  created(t, { modifiers: { lazy: e, trim: n, number: r } }, o) {
    t[un] = pr(o);
    const a = r || o.props && o.props.type === "number";
    kn(t, e ? "change" : "input", (l) => {
      l.target.composing || t[un](Ac(t.value, n, a));
    }), (n || a) && kn(t, "change", () => {
      t.value = Ac(t.value, n, a);
    }), e || (kn(t, "compositionstart", xp), kn(t, "compositionend", Oc), kn(t, "change", Oc));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: e }) {
    t.value = e ?? "";
  },
  beforeUpdate(t, { value: e, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, l) {
    if (t[un] = pr(l), t.composing) return;
    const d = (a || t.type === "number") && !/^0\d/.test(t.value) ? di(t.value) : t.value, p = e ?? "";
    d !== p && (document.activeElement === t && t.type !== "range" && (r && e === n || o && t.value.trim() === p) || (t.value = p));
  }
}, Sp = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(t, e, n) {
    t[un] = pr(n), kn(t, "change", () => {
      const r = t._modelValue, o = es(t), a = t.checked, l = t[un];
      if (ue(r)) {
        const d = Ho(r, o), p = d !== -1;
        if (a && !p)
          l(r.concat(o));
        else if (!a && p) {
          const _ = [...r];
          _.splice(d, 1), l(_);
        }
      } else if (gr(r)) {
        const d = new Set(r);
        a ? d.add(o) : d.delete(o), l(d);
      } else
        l(rl(t, a));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Nc,
  beforeUpdate(t, e, n) {
    t[un] = pr(n), Nc(t, e, n);
  }
};
function Nc(t, { value: e, oldValue: n }, r) {
  t._modelValue = e;
  let o;
  if (ue(e))
    o = Ho(e, r.props.value) > -1;
  else if (gr(e))
    o = e.has(r.props.value);
  else {
    if (e === n) return;
    o = yr(e, rl(t, !0));
  }
  t.checked !== o && (t.checked = o);
}
const Tc = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(t, { value: e, modifiers: { number: n } }, r) {
    const o = gr(e);
    kn(t, "change", () => {
      const a = Array.prototype.filter.call(t.options, (l) => l.selected).map(
        (l) => n ? di(es(l)) : es(l)
      );
      t[un](
        t.multiple ? o ? new Set(a) : a : a[0]
      ), t._assigning = !0, Hr(() => {
        t._assigning = !1;
      });
    }), t[un] = pr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(t, { value: e }) {
    Rc(t, e);
  },
  beforeUpdate(t, e, n) {
    t[un] = pr(n);
  },
  updated(t, { value: e }) {
    t._assigning || Rc(t, e);
  }
};
function Rc(t, e) {
  const n = t.multiple, r = ue(e);
  if (n && !r && !gr(e)) {
    process.env.NODE_ENV !== "production" && Qt(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(e).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, a = t.options.length; o < a; o++) {
    const l = t.options[o], d = es(l);
    if (n)
      if (r) {
        const p = typeof d;
        p === "string" || p === "number" ? l.selected = e.some((_) => String(_) === String(d)) : l.selected = Ho(e, d) > -1;
      } else
        l.selected = e.has(d);
    else if (yr(es(l), e)) {
      t.selectedIndex !== o && (t.selectedIndex = o);
      return;
    }
  }
  !n && t.selectedIndex !== -1 && (t.selectedIndex = -1);
}
function es(t) {
  return "_value" in t ? t._value : t.value;
}
function rl(t, e) {
  const n = e ? "_trueValue" : "_falseValue";
  return n in t ? t[n] : e;
}
const Pp = ["ctrl", "shift", "alt", "meta"], Cp = {
  stop: (t) => t.stopPropagation(),
  prevent: (t) => t.preventDefault(),
  self: (t) => t.target !== t.currentTarget,
  ctrl: (t) => !t.ctrlKey,
  shift: (t) => !t.shiftKey,
  alt: (t) => !t.altKey,
  meta: (t) => !t.metaKey,
  left: (t) => "button" in t && t.button !== 0,
  middle: (t) => "button" in t && t.button !== 1,
  right: (t) => "button" in t && t.button !== 2,
  exact: (t, e) => Pp.some((n) => t[`${n}Key`] && !e.includes(n))
}, mo = (t, e) => {
  if (!t) return t;
  const n = t._withMods || (t._withMods = {}), r = e.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let l = 0; l < e.length; l++) {
      const d = Cp[e[l]];
      if (d && d(o, e)) return;
    }
    return t(o, ...a);
  }));
}, Dp = /* @__PURE__ */ qe({ patchProp: _p }, ip);
let Uc;
function kp() {
  return Uc || (Uc = Uh(Dp));
}
const Ip = ((...t) => {
  const e = kp().createApp(...t);
  process.env.NODE_ENV !== "production" && (Ap(e), Np(e));
  const { mount: n } = e;
  return e.mount = (r) => {
    const o = Tp(r);
    if (!o) return;
    const a = e._component;
    !ge(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const l = n(o, !1, Op(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), l;
  }, e;
});
function Op(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function Ap(t) {
  Object.defineProperty(t.config, "isNativeTag", {
    value: (e) => Bf(e) || Mf(e) || Ff(e),
    writable: !1
  });
}
function Np(t) {
  {
    const e = t.config.isCustomElement;
    Object.defineProperty(t.config, "isCustomElement", {
      get() {
        return e;
      },
      set() {
        Qt(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = t.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(t.config, "compilerOptions", {
      get() {
        return Qt(r), n;
      },
      set() {
        Qt(r);
      }
    });
  }
}
function Tp(t) {
  if (Me(t)) {
    const e = document.querySelector(t);
    return process.env.NODE_ENV !== "production" && !e && Qt(
      `Failed to mount app: mount target selector "${t}" returned null.`
    ), e;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && t instanceof window.ShadowRoot && t.mode === "closed" && Qt(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), t;
}
function Rp() {
  np();
}
process.env.NODE_ENV !== "production" && Rp();
new TextEncoder();
const Up = 4096;
function sl(t, e, n) {
  let r = e;
  const o = r + n, a = [];
  let l = "";
  for (; r < o; ) {
    const d = t[r++];
    if ((d & 128) === 0)
      a.push(d);
    else if ((d & 224) === 192) {
      const p = t[r++] & 63;
      a.push((d & 31) << 6 | p);
    } else if ((d & 240) === 224) {
      const p = t[r++] & 63, _ = t[r++] & 63;
      a.push((d & 31) << 12 | p << 6 | _);
    } else if ((d & 248) === 240) {
      const p = t[r++] & 63, _ = t[r++] & 63, v = t[r++] & 63;
      let w = (d & 7) << 18 | p << 12 | _ << 6 | v;
      w > 65535 && (w -= 65536, a.push(w >>> 10 & 1023 | 55296), w = 56320 | w & 1023), a.push(w);
    } else
      a.push(d);
    a.length >= Up && (l += String.fromCharCode(...a), a.length = 0);
  }
  return a.length > 0 && (l += String.fromCharCode(...a)), l;
}
const Bp = new TextDecoder(), Mp = 200;
function Fp(t, e, n) {
  const r = t.subarray(e, e + n);
  return Bp.decode(r);
}
function $p(t, e, n) {
  return n > Mp ? Fp(t, e, n) : sl(t, e, n);
}
class Ks {
  type;
  data;
  constructor(e, n) {
    this.type = e, this.data = n;
  }
}
class xt extends Error {
  constructor(e) {
    super(e);
    const n = Object.create(xt.prototype);
    Object.setPrototypeOf(this, n), Object.defineProperty(this, "name", {
      configurable: !0,
      enumerable: !1,
      value: xt.name
    });
  }
}
const Br = 4294967295;
function Vp(t, e, n) {
  const r = Math.floor(n / 4294967296), o = n;
  t.setUint32(e, r), t.setUint32(e + 4, o);
}
function il(t, e) {
  const n = t.getInt32(e), r = t.getUint32(e + 4);
  return n * 4294967296 + r;
}
function Kp(t, e) {
  const n = t.getUint32(e), r = t.getUint32(e + 4);
  return n * 4294967296 + r;
}
const Lp = -1, jp = 4294967296 - 1, Hp = 17179869184 - 1;
function zp({ sec: t, nsec: e }) {
  if (t >= 0 && e >= 0 && t <= Hp)
    if (e === 0 && t <= jp) {
      const n = new Uint8Array(4);
      return new DataView(n.buffer).setUint32(0, t), n;
    } else {
      const n = t / 4294967296, r = t & 4294967295, o = new Uint8Array(8), a = new DataView(o.buffer);
      return a.setUint32(0, e << 2 | n & 3), a.setUint32(4, r), o;
    }
  else {
    const n = new Uint8Array(12), r = new DataView(n.buffer);
    return r.setUint32(0, e), Vp(r, 4, t), n;
  }
}
function Gp(t) {
  const e = t.getTime(), n = Math.floor(e / 1e3), r = (e - n * 1e3) * 1e6, o = Math.floor(r / 1e9);
  return {
    sec: n + o,
    nsec: r - o * 1e9
  };
}
function qp(t) {
  if (t instanceof Date) {
    const e = Gp(t);
    return zp(e);
  } else
    return null;
}
function Wp(t) {
  const e = new DataView(t.buffer, t.byteOffset, t.byteLength);
  switch (t.byteLength) {
    case 4:
      return { sec: e.getUint32(0), nsec: 0 };
    case 8: {
      const n = e.getUint32(0), r = e.getUint32(4), o = (n & 3) * 4294967296 + r, a = n >>> 2;
      return { sec: o, nsec: a };
    }
    case 12: {
      const n = il(e, 4), r = e.getUint32(0);
      return { sec: n, nsec: r };
    }
    default:
      throw new xt(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${t.length}`);
  }
}
function Qp(t) {
  const e = Wp(t);
  return new Date(e.sec * 1e3 + e.nsec / 1e6);
}
const Yp = {
  type: Lp,
  encode: qp,
  decode: Qp
};
class aa {
  static defaultCodec = new aa();
  // ensures ExtensionCodecType<X> matches ExtensionCodec<X>
  // this will make type errors a lot more clear
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __brand;
  // built-in extensions
  builtInEncoders = [];
  builtInDecoders = [];
  // custom extensions
  encoders = [];
  decoders = [];
  constructor() {
    this.register(Yp);
  }
  register({ type: e, encode: n, decode: r }) {
    if (e >= 0)
      this.encoders[e] = n, this.decoders[e] = r;
    else {
      const o = -1 - e;
      this.builtInEncoders[o] = n, this.builtInDecoders[o] = r;
    }
  }
  tryToEncode(e, n) {
    for (let r = 0; r < this.builtInEncoders.length; r++) {
      const o = this.builtInEncoders[r];
      if (o != null) {
        const a = o(e, n);
        if (a != null) {
          const l = -1 - r;
          return new Ks(l, a);
        }
      }
    }
    for (let r = 0; r < this.encoders.length; r++) {
      const o = this.encoders[r];
      if (o != null) {
        const a = o(e, n);
        if (a != null) {
          const l = r;
          return new Ks(l, a);
        }
      }
    }
    return e instanceof Ks ? e : null;
  }
  decode(e, n, r) {
    const o = n < 0 ? this.builtInDecoders[-1 - n] : this.decoders[n];
    return o ? o(e, n, r) : new Ks(n, e);
  }
}
function Jp(t) {
  return t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer;
}
function Bc(t) {
  return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Jp(t) ? new Uint8Array(t) : Uint8Array.from(t);
}
function vo(t) {
  return `${t < 0 ? "-" : ""}0x${Math.abs(t).toString(16).padStart(2, "0")}`;
}
const Xp = 16, Zp = 16;
class eg {
  hit = 0;
  miss = 0;
  caches;
  maxKeyLength;
  maxLengthPerKey;
  constructor(e = Xp, n = Zp) {
    this.maxKeyLength = e, this.maxLengthPerKey = n, this.caches = [];
    for (let r = 0; r < this.maxKeyLength; r++)
      this.caches.push([]);
  }
  canBeCached(e) {
    return e > 0 && e <= this.maxKeyLength;
  }
  find(e, n, r) {
    const o = this.caches[r - 1];
    e: for (const a of o) {
      const l = a.bytes;
      for (let d = 0; d < r; d++)
        if (l[d] !== e[n + d])
          continue e;
      return a.str;
    }
    return null;
  }
  store(e, n) {
    const r = this.caches[e.length - 1], o = { bytes: e, str: n };
    r.length >= this.maxLengthPerKey ? r[Math.random() * r.length | 0] = o : r.push(o);
  }
  decode(e, n, r) {
    const o = this.find(e, n, r);
    if (o != null)
      return this.hit++, o;
    this.miss++;
    const a = sl(e, n, r), l = Uint8Array.prototype.slice.call(e, n, n + r);
    return this.store(l, a), a;
  }
}
const Mo = "array", Wr = "map_key", ol = "map_value", tg = (t) => {
  if (typeof t == "string" || typeof t == "number")
    return t;
  throw new xt("The type of key must be string or number but " + typeof t);
};
class ng {
  stack = [];
  stackHeadPosition = -1;
  get length() {
    return this.stackHeadPosition + 1;
  }
  top() {
    return this.stack[this.stackHeadPosition];
  }
  pushArrayState(e) {
    const n = this.getUninitializedStateFromPool();
    n.type = Mo, n.position = 0, n.size = e, n.array = new Array(e);
  }
  pushMapState(e) {
    const n = this.getUninitializedStateFromPool();
    n.type = Wr, n.readCount = 0, n.size = e, n.map = {};
  }
  getUninitializedStateFromPool() {
    if (this.stackHeadPosition++, this.stackHeadPosition === this.stack.length) {
      const e = {
        type: void 0,
        size: 0,
        array: void 0,
        position: 0,
        readCount: 0,
        map: void 0,
        key: null
      };
      this.stack.push(e);
    }
    return this.stack[this.stackHeadPosition];
  }
  release(e) {
    if (this.stack[this.stackHeadPosition] !== e)
      throw new Error("Invalid stack state. Released state is not on top of the stack.");
    if (e.type === Mo) {
      const r = e;
      r.size = 0, r.array = void 0, r.position = 0, r.type = void 0;
    }
    if (e.type === Wr || e.type === ol) {
      const r = e;
      r.size = 0, r.map = void 0, r.readCount = 0, r.type = void 0;
    }
    this.stackHeadPosition--;
  }
  reset() {
    this.stack.length = 0, this.stackHeadPosition = -1;
  }
}
const Mr = -1, ca = new DataView(new ArrayBuffer(0)), rg = new Uint8Array(ca.buffer);
try {
  ca.getInt8(0);
} catch (t) {
  if (!(t instanceof RangeError))
    throw new Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access");
}
const Mc = new RangeError("Insufficient data"), sg = new eg();
class ua {
  extensionCodec;
  context;
  useBigInt64;
  rawStrings;
  maxStrLength;
  maxBinLength;
  maxArrayLength;
  maxMapLength;
  maxExtLength;
  keyDecoder;
  mapKeyConverter;
  totalPos = 0;
  pos = 0;
  view = ca;
  bytes = rg;
  headByte = Mr;
  stack = new ng();
  entered = !1;
  constructor(e) {
    this.extensionCodec = e?.extensionCodec ?? aa.defaultCodec, this.context = e?.context, this.useBigInt64 = e?.useBigInt64 ?? !1, this.rawStrings = e?.rawStrings ?? !1, this.maxStrLength = e?.maxStrLength ?? Br, this.maxBinLength = e?.maxBinLength ?? Br, this.maxArrayLength = e?.maxArrayLength ?? Br, this.maxMapLength = e?.maxMapLength ?? Br, this.maxExtLength = e?.maxExtLength ?? Br, this.keyDecoder = e?.keyDecoder !== void 0 ? e.keyDecoder : sg, this.mapKeyConverter = e?.mapKeyConverter ?? tg;
  }
  clone() {
    return new ua({
      extensionCodec: this.extensionCodec,
      context: this.context,
      useBigInt64: this.useBigInt64,
      rawStrings: this.rawStrings,
      maxStrLength: this.maxStrLength,
      maxBinLength: this.maxBinLength,
      maxArrayLength: this.maxArrayLength,
      maxMapLength: this.maxMapLength,
      maxExtLength: this.maxExtLength,
      keyDecoder: this.keyDecoder
    });
  }
  reinitializeState() {
    this.totalPos = 0, this.headByte = Mr, this.stack.reset();
  }
  setBuffer(e) {
    const n = Bc(e);
    this.bytes = n, this.view = new DataView(n.buffer, n.byteOffset, n.byteLength), this.pos = 0;
  }
  appendBuffer(e) {
    if (this.headByte === Mr && !this.hasRemaining(1))
      this.setBuffer(e);
    else {
      const n = this.bytes.subarray(this.pos), r = Bc(e), o = new Uint8Array(n.length + r.length);
      o.set(n), o.set(r, n.length), this.setBuffer(o);
    }
  }
  hasRemaining(e) {
    return this.view.byteLength - this.pos >= e;
  }
  createExtraByteError(e) {
    const { view: n, pos: r } = this;
    return new RangeError(`Extra ${n.byteLength - r} of ${n.byteLength} byte(s) found at buffer[${e}]`);
  }
  /**
   * @throws {@link DecodeError}
   * @throws {@link RangeError}
   */
  decode(e) {
    if (this.entered)
      return this.clone().decode(e);
    try {
      this.entered = !0, this.reinitializeState(), this.setBuffer(e);
      const n = this.doDecodeSync();
      if (this.hasRemaining(1))
        throw this.createExtraByteError(this.pos);
      return n;
    } finally {
      this.entered = !1;
    }
  }
  *decodeMulti(e) {
    if (this.entered) {
      yield* this.clone().decodeMulti(e);
      return;
    }
    try {
      for (this.entered = !0, this.reinitializeState(), this.setBuffer(e); this.hasRemaining(1); )
        yield this.doDecodeSync();
    } finally {
      this.entered = !1;
    }
  }
  async decodeAsync(e) {
    if (this.entered)
      return this.clone().decodeAsync(e);
    try {
      this.entered = !0;
      let n = !1, r;
      for await (const d of e) {
        if (n)
          throw this.entered = !1, this.createExtraByteError(this.totalPos);
        this.appendBuffer(d);
        try {
          r = this.doDecodeSync(), n = !0;
        } catch (p) {
          if (!(p instanceof RangeError))
            throw p;
        }
        this.totalPos += this.pos;
      }
      if (n) {
        if (this.hasRemaining(1))
          throw this.createExtraByteError(this.totalPos);
        return r;
      }
      const { headByte: o, pos: a, totalPos: l } = this;
      throw new RangeError(`Insufficient data in parsing ${vo(o)} at ${l} (${a} in the current buffer)`);
    } finally {
      this.entered = !1;
    }
  }
  decodeArrayStream(e) {
    return this.decodeMultiAsync(e, !0);
  }
  decodeStream(e) {
    return this.decodeMultiAsync(e, !1);
  }
  async *decodeMultiAsync(e, n) {
    if (this.entered) {
      yield* this.clone().decodeMultiAsync(e, n);
      return;
    }
    try {
      this.entered = !0;
      let r = n, o = -1;
      for await (const a of e) {
        if (n && o === 0)
          throw this.createExtraByteError(this.totalPos);
        this.appendBuffer(a), r && (o = this.readArraySize(), r = !1, this.complete());
        try {
          for (; yield this.doDecodeSync(), --o !== 0; )
            ;
        } catch (l) {
          if (!(l instanceof RangeError))
            throw l;
        }
        this.totalPos += this.pos;
      }
    } finally {
      this.entered = !1;
    }
  }
  doDecodeSync() {
    e: for (; ; ) {
      const e = this.readHeadByte();
      let n;
      if (e >= 224)
        n = e - 256;
      else if (e < 192)
        if (e < 128)
          n = e;
        else if (e < 144) {
          const o = e - 128;
          if (o !== 0) {
            this.pushMapState(o), this.complete();
            continue e;
          } else
            n = {};
        } else if (e < 160) {
          const o = e - 144;
          if (o !== 0) {
            this.pushArrayState(o), this.complete();
            continue e;
          } else
            n = [];
        } else {
          const o = e - 160;
          n = this.decodeString(o, 0);
        }
      else if (e === 192)
        n = null;
      else if (e === 194)
        n = !1;
      else if (e === 195)
        n = !0;
      else if (e === 202)
        n = this.readF32();
      else if (e === 203)
        n = this.readF64();
      else if (e === 204)
        n = this.readU8();
      else if (e === 205)
        n = this.readU16();
      else if (e === 206)
        n = this.readU32();
      else if (e === 207)
        this.useBigInt64 ? n = this.readU64AsBigInt() : n = this.readU64();
      else if (e === 208)
        n = this.readI8();
      else if (e === 209)
        n = this.readI16();
      else if (e === 210)
        n = this.readI32();
      else if (e === 211)
        this.useBigInt64 ? n = this.readI64AsBigInt() : n = this.readI64();
      else if (e === 217) {
        const o = this.lookU8();
        n = this.decodeString(o, 1);
      } else if (e === 218) {
        const o = this.lookU16();
        n = this.decodeString(o, 2);
      } else if (e === 219) {
        const o = this.lookU32();
        n = this.decodeString(o, 4);
      } else if (e === 220) {
        const o = this.readU16();
        if (o !== 0) {
          this.pushArrayState(o), this.complete();
          continue e;
        } else
          n = [];
      } else if (e === 221) {
        const o = this.readU32();
        if (o !== 0) {
          this.pushArrayState(o), this.complete();
          continue e;
        } else
          n = [];
      } else if (e === 222) {
        const o = this.readU16();
        if (o !== 0) {
          this.pushMapState(o), this.complete();
          continue e;
        } else
          n = {};
      } else if (e === 223) {
        const o = this.readU32();
        if (o !== 0) {
          this.pushMapState(o), this.complete();
          continue e;
        } else
          n = {};
      } else if (e === 196) {
        const o = this.lookU8();
        n = this.decodeBinary(o, 1);
      } else if (e === 197) {
        const o = this.lookU16();
        n = this.decodeBinary(o, 2);
      } else if (e === 198) {
        const o = this.lookU32();
        n = this.decodeBinary(o, 4);
      } else if (e === 212)
        n = this.decodeExtension(1, 0);
      else if (e === 213)
        n = this.decodeExtension(2, 0);
      else if (e === 214)
        n = this.decodeExtension(4, 0);
      else if (e === 215)
        n = this.decodeExtension(8, 0);
      else if (e === 216)
        n = this.decodeExtension(16, 0);
      else if (e === 199) {
        const o = this.lookU8();
        n = this.decodeExtension(o, 1);
      } else if (e === 200) {
        const o = this.lookU16();
        n = this.decodeExtension(o, 2);
      } else if (e === 201) {
        const o = this.lookU32();
        n = this.decodeExtension(o, 4);
      } else
        throw new xt(`Unrecognized type byte: ${vo(e)}`);
      this.complete();
      const r = this.stack;
      for (; r.length > 0; ) {
        const o = r.top();
        if (o.type === Mo)
          if (o.array[o.position] = n, o.position++, o.position === o.size)
            n = o.array, r.release(o);
          else
            continue e;
        else if (o.type === Wr) {
          if (n === "__proto__")
            throw new xt("The key __proto__ is not allowed");
          o.key = this.mapKeyConverter(n), o.type = ol;
          continue e;
        } else if (o.map[o.key] = n, o.readCount++, o.readCount === o.size)
          n = o.map, r.release(o);
        else {
          o.key = null, o.type = Wr;
          continue e;
        }
      }
      return n;
    }
  }
  readHeadByte() {
    return this.headByte === Mr && (this.headByte = this.readU8()), this.headByte;
  }
  complete() {
    this.headByte = Mr;
  }
  readArraySize() {
    const e = this.readHeadByte();
    switch (e) {
      case 220:
        return this.readU16();
      case 221:
        return this.readU32();
      default: {
        if (e < 160)
          return e - 144;
        throw new xt(`Unrecognized array type byte: ${vo(e)}`);
      }
    }
  }
  pushMapState(e) {
    if (e > this.maxMapLength)
      throw new xt(`Max length exceeded: map length (${e}) > maxMapLengthLength (${this.maxMapLength})`);
    this.stack.pushMapState(e);
  }
  pushArrayState(e) {
    if (e > this.maxArrayLength)
      throw new xt(`Max length exceeded: array length (${e}) > maxArrayLength (${this.maxArrayLength})`);
    this.stack.pushArrayState(e);
  }
  decodeString(e, n) {
    return !this.rawStrings || this.stateIsMapKey() ? this.decodeUtf8String(e, n) : this.decodeBinary(e, n);
  }
  /**
   * @throws {@link RangeError}
   */
  decodeUtf8String(e, n) {
    if (e > this.maxStrLength)
      throw new xt(`Max length exceeded: UTF-8 byte length (${e}) > maxStrLength (${this.maxStrLength})`);
    if (this.bytes.byteLength < this.pos + n + e)
      throw Mc;
    const r = this.pos + n;
    let o;
    return this.stateIsMapKey() && this.keyDecoder?.canBeCached(e) ? o = this.keyDecoder.decode(this.bytes, r, e) : o = $p(this.bytes, r, e), this.pos += n + e, o;
  }
  stateIsMapKey() {
    return this.stack.length > 0 ? this.stack.top().type === Wr : !1;
  }
  /**
   * @throws {@link RangeError}
   */
  decodeBinary(e, n) {
    if (e > this.maxBinLength)
      throw new xt(`Max length exceeded: bin length (${e}) > maxBinLength (${this.maxBinLength})`);
    if (!this.hasRemaining(e + n))
      throw Mc;
    const r = this.pos + n, o = this.bytes.subarray(r, r + e);
    return this.pos += n + e, o;
  }
  decodeExtension(e, n) {
    if (e > this.maxExtLength)
      throw new xt(`Max length exceeded: ext length (${e}) > maxExtLength (${this.maxExtLength})`);
    const r = this.view.getInt8(this.pos + n), o = this.decodeBinary(
      e,
      n + 1
      /* extType */
    );
    return this.extensionCodec.decode(o, r, this.context);
  }
  lookU8() {
    return this.view.getUint8(this.pos);
  }
  lookU16() {
    return this.view.getUint16(this.pos);
  }
  lookU32() {
    return this.view.getUint32(this.pos);
  }
  readU8() {
    const e = this.view.getUint8(this.pos);
    return this.pos++, e;
  }
  readI8() {
    const e = this.view.getInt8(this.pos);
    return this.pos++, e;
  }
  readU16() {
    const e = this.view.getUint16(this.pos);
    return this.pos += 2, e;
  }
  readI16() {
    const e = this.view.getInt16(this.pos);
    return this.pos += 2, e;
  }
  readU32() {
    const e = this.view.getUint32(this.pos);
    return this.pos += 4, e;
  }
  readI32() {
    const e = this.view.getInt32(this.pos);
    return this.pos += 4, e;
  }
  readU64() {
    const e = Kp(this.view, this.pos);
    return this.pos += 8, e;
  }
  readI64() {
    const e = il(this.view, this.pos);
    return this.pos += 8, e;
  }
  readU64AsBigInt() {
    const e = this.view.getBigUint64(this.pos);
    return this.pos += 8, e;
  }
  readI64AsBigInt() {
    const e = this.view.getBigInt64(this.pos);
    return this.pos += 8, e;
  }
  readF32() {
    const e = this.view.getFloat32(this.pos);
    return this.pos += 4, e;
  }
  readF64() {
    const e = this.view.getFloat64(this.pos);
    return this.pos += 8, e;
  }
}
function ig(t, e) {
  return new ua(e).decode(t);
}
class og {
  constructor(e) {
    this.options = e, this.isRefreshing = !1, this.refreshQueue = [];
  }
  async get(e, n) {
    return this.request("GET", e, n);
  }
  async post(e, n) {
    return this.request("POST", e, n);
  }
  async put(e, n) {
    return this.request("PUT", e, n);
  }
  async patch(e, n) {
    return this.request("PATCH", e, n);
  }
  async delete(e, n) {
    return this.request("DELETE", e, n);
  }
  buildUrl(e, n) {
    const r = new URL(e.startsWith("http") ? e : `${this.options.baseUrl}${e}`);
    return n && Object.entries(n).forEach(([o, a]) => {
      a != null && r.searchParams.set(o, String(a));
    }), r.toString();
  }
  async request(e, n, r) {
    const o = this.options.fetchImpl ?? fetch, a = r?.body instanceof FormData;
    let l;
    r?.body !== void 0 && e !== "GET" && (l = a ? r.body : JSON.stringify(r.body));
    const d = this.options.useMsgpack ? "application/msgpack" : "application/json", p = {
      ...a ? {} : { "Content-Type": "application/json" },
      Accept: d,
      "X-Requested-With": "XMLHttpRequest",
      ...this.options.defaultHeaders ?? {},
      ...r?.headers ?? {}
    };
    if (!r?.skipAuth) {
      const w = this.options.getAuthTokens?.();
      w?.accessToken && (p.Authorization = `Bearer ${w.accessToken}`);
    }
    if (this.options.getActingContext) {
      const w = this.options.getActingContext();
      w?.token && w?.managedUserUlid && (p["X-Acting-Context-Token"] = w.token, p["X-Acting-User-ULID"] = w.managedUserUlid);
    }
    const _ = this.buildUrl(n, r?.query), v = await o(_, {
      method: e,
      headers: p,
      body: l
    });
    if (v.status === 401 && !r?.skipAuth) {
      const w = await this.refreshTokens();
      if (w?.accessToken) {
        p.Authorization = `Bearer ${w.accessToken}`;
        const D = await o(_, {
          method: e,
          headers: p,
          body: l
        });
        return this.parseResponse(D);
      }
    }
    return this.parseResponse(v);
  }
  async parseResponse(e) {
    const r = (e.headers.get("Content-Type") || "").includes("msgpack");
    let o = null;
    if (r) {
      const a = await e.arrayBuffer();
      if (a.byteLength > 0)
        try {
          o = ig(new Uint8Array(a));
        } catch (l) {
          console.error("Failed to decode MessagePack response:", l), o = null;
        }
    } else {
      const a = await e.text();
      if (a)
        try {
          o = JSON.parse(a);
        } catch {
          o = a;
        }
    }
    if (!e.ok) {
      let a = "Request failed";
      o && typeof o == "object" && "message" in o ? a = String(o.message) : e.statusText && (a = e.statusText);
      const l = new Error(a);
      throw l.payload = o, l.status = e.status, l;
    }
    return o;
  }
  async refreshTokens() {
    if (!this.options.onRefreshTokens)
      return await this.options.onUnauthorized?.(), null;
    if (this.isRefreshing)
      return new Promise((e, n) => {
        this.refreshQueue.push({ resolve: e, reject: n });
      });
    this.isRefreshing = !0;
    try {
      const e = await this.options.onRefreshTokens();
      return this.refreshQueue.forEach((n) => n.resolve(e)), this.refreshQueue = [], e;
    } catch (e) {
      return this.refreshQueue.forEach((n) => n.reject(e)), this.refreshQueue = [], await this.options.onUnauthorized?.(), null;
    } finally {
      this.isRefreshing = !1;
    }
  }
}
var ag = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cg(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ys = { exports: {} }, ug = Ys.exports, Fc;
function lg() {
  return Fc || (Fc = 1, (function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(ug, (function() {
      var n = function(s, i) {
        return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, u) {
          c.__proto__ = u;
        } || function(c, u) {
          for (var f in u) Object.prototype.hasOwnProperty.call(u, f) && (c[f] = u[f]);
        }, n(s, i);
      };
      function r(s, i) {
        if (typeof i != "function" && i !== null)
          throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
        n(s, i);
        function c() {
          this.constructor = s;
        }
        s.prototype = i === null ? Object.create(i) : (c.prototype = i.prototype, new c());
      }
      var o = function() {
        return o = Object.assign || function(i) {
          for (var c, u = 1, f = arguments.length; u < f; u++) {
            c = arguments[u];
            for (var h in c) Object.prototype.hasOwnProperty.call(c, h) && (i[h] = c[h]);
          }
          return i;
        }, o.apply(this, arguments);
      };
      function a(s, i, c) {
        for (var u = 0, f = i.length, h; u < f; u++)
          (h || !(u in i)) && (h || (h = Array.prototype.slice.call(i, 0, u)), h[u] = i[u]);
        return s.concat(h || Array.prototype.slice.call(i));
      }
      typeof SuppressedError == "function" && SuppressedError;
      var l = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : ag, d = Object.keys, p = Array.isArray;
      typeof Promise < "u" && !l.Promise && (l.Promise = Promise);
      function _(s, i) {
        return typeof i != "object" || d(i).forEach(function(c) {
          s[c] = i[c];
        }), s;
      }
      var v = Object.getPrototypeOf, w = {}.hasOwnProperty;
      function D(s, i) {
        return w.call(s, i);
      }
      function O(s, i) {
        typeof i == "function" && (i = i(v(s))), (typeof Reflect > "u" ? d : Reflect.ownKeys)(i).forEach(function(c) {
          H(s, c, i[c]);
        });
      }
      var Q = Object.defineProperty;
      function H(s, i, c, u) {
        Q(s, i, _(c && D(c, "get") && typeof c.get == "function" ? { get: c.get, set: c.set, configurable: !0 } : { value: c, configurable: !0, writable: !0 }, u));
      }
      function le(s) {
        return {
          from: function(i) {
            return s.prototype = Object.create(i.prototype), H(s.prototype, "constructor", s), {
              extend: O.bind(null, s.prototype)
            };
          }
        };
      }
      var pe = Object.getOwnPropertyDescriptor;
      function oe(s, i) {
        var c = pe(s, i), u;
        return c || (u = v(s)) && oe(u, i);
      }
      var fe = [].slice;
      function xe(s, i, c) {
        return fe.call(s, i, c);
      }
      function ne(s, i) {
        return i(s);
      }
      function Se(s) {
        if (!s)
          throw new Error("Assertion Failed");
      }
      function Xe(s) {
        l.setImmediate ? setImmediate(s) : setTimeout(s, 0);
      }
      function He(s, i) {
        return s.reduce(function(c, u, f) {
          var h = i(u, f);
          return h && (c[h[0]] = h[1]), c;
        }, {});
      }
      function Re(s, i) {
        if (typeof i == "string" && D(s, i))
          return s[i];
        if (!i)
          return s;
        if (typeof i != "string") {
          for (var c = [], u = 0, f = i.length; u < f; ++u) {
            var h = Re(s, i[u]);
            c.push(h);
          }
          return c;
        }
        var g = i.indexOf(".");
        if (g !== -1) {
          var y = s[i.substr(0, g)];
          return y == null ? void 0 : Re(y, i.substr(g + 1));
        }
      }
      function Ue(s, i, c) {
        if (!(!s || i === void 0) && !("isFrozen" in Object && Object.isFrozen(s)))
          if (typeof i != "string" && "length" in i) {
            Se(typeof c != "string" && "length" in c);
            for (var u = 0, f = i.length; u < f; ++u)
              Ue(s, i[u], c[u]);
          } else {
            var h = i.indexOf(".");
            if (h !== -1) {
              var g = i.substr(0, h), y = i.substr(h + 1);
              if (y === "")
                c === void 0 ? p(s) && !isNaN(parseInt(g)) ? s.splice(g, 1) : delete s[g] : s[g] = c;
              else {
                var m = s[g];
                (!m || !D(s, g)) && (m = s[g] = {}), Ue(m, y, c);
              }
            } else
              c === void 0 ? p(s) && !isNaN(parseInt(i)) ? s.splice(i, 1) : delete s[i] : s[i] = c;
          }
      }
      function Ct(s, i) {
        typeof i == "string" ? Ue(s, i, void 0) : "length" in i && [].map.call(i, function(c) {
          Ue(s, c, void 0);
        });
      }
      function it(s) {
        var i = {};
        for (var c in s)
          D(s, c) && (i[c] = s[c]);
        return i;
      }
      var dn = [].concat;
      function Tn(s) {
        return dn.apply([], s);
      }
      var Dt = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Tn([8, 16, 32, 64].map(function(s) {
        return ["Int", "Uint", "Float"].map(function(i) {
          return i + s + "Array";
        });
      }))).filter(function(s) {
        return l[s];
      }), We = new Set(Dt.map(function(s) {
        return l[s];
      }));
      function me(s) {
        var i = {};
        for (var c in s)
          if (D(s, c)) {
            var u = s[c];
            i[c] = !u || typeof u != "object" || We.has(u.constructor) ? u : me(u);
          }
        return i;
      }
      function Ee(s) {
        for (var i in s)
          if (D(s, i))
            return !1;
        return !0;
      }
      var Ze = null;
      function gt(s) {
        Ze = /* @__PURE__ */ new WeakMap();
        var i = It(s);
        return Ze = null, i;
      }
      function It(s) {
        if (!s || typeof s != "object")
          return s;
        var i = Ze.get(s);
        if (i)
          return i;
        if (p(s)) {
          i = [], Ze.set(s, i);
          for (var c = 0, u = s.length; c < u; ++c)
            i.push(It(s[c]));
        } else if (We.has(s.constructor))
          i = s;
        else {
          var f = v(s);
          i = f === Object.prototype ? {} : Object.create(f), Ze.set(s, i);
          for (var h in s)
            D(s, h) && (i[h] = It(s[h]));
        }
        return i;
      }
      var Vt = {}.toString;
      function yt(s) {
        return Vt.call(s).slice(8, -1);
      }
      var hn = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Xn = typeof hn == "symbol" ? function(s) {
        var i;
        return s != null && (i = s[hn]) && i.apply(s);
      } : function() {
        return null;
      };
      function se(s, i) {
        var c = s.indexOf(i);
        return c >= 0 && s.splice(c, 1), c >= 0;
      }
      var Ie = {};
      function Ve(s) {
        var i, c, u, f;
        if (arguments.length === 1) {
          if (p(s))
            return s.slice();
          if (this === Ie && typeof s == "string")
            return [s];
          if (f = Xn(s)) {
            for (c = []; u = f.next(), !u.done; )
              c.push(u.value);
            return c;
          }
          if (s == null)
            return [s];
          if (i = s.length, typeof i == "number") {
            for (c = new Array(i); i--; )
              c[i] = s[i];
            return c;
          }
          return [s];
        }
        for (i = arguments.length, c = new Array(i); i--; )
          c[i] = arguments[i];
        return c;
      }
      var Xt = typeof Symbol < "u" ? function(s) {
        return s[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Zt = [
        "Modify",
        "Bulk",
        "OpenFailed",
        "VersionChange",
        "Schema",
        "Upgrade",
        "InvalidTable",
        "MissingAPI",
        "NoSuchDatabase",
        "InvalidArgument",
        "SubTransaction",
        "Unsupported",
        "Internal",
        "DatabaseClosed",
        "PrematureCommit",
        "ForeignAwait"
      ], pn = [
        "Unknown",
        "Constraint",
        "Data",
        "TransactionInactive",
        "ReadOnly",
        "Version",
        "NotFound",
        "InvalidState",
        "InvalidAccess",
        "Abort",
        "Timeout",
        "QuotaExceeded",
        "Syntax",
        "DataClone"
      ], ls = Zt.concat(pn), b = {
        VersionChanged: "Database version changed by other database connection",
        DatabaseClosed: "Database has been closed",
        Abort: "Transaction aborted",
        TransactionInactive: "Transaction has already completed or failed",
        MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
      };
      function x(s, i) {
        this.name = s, this.message = i;
      }
      le(x).from(Error).extend({
        toString: function() {
          return this.name + ": " + this.message;
        }
      });
      function T(s, i) {
        return s + ". Errors: " + Object.keys(i).map(function(c) {
          return i[c].toString();
        }).filter(function(c, u, f) {
          return f.indexOf(c) === u;
        }).join(`
`);
      }
      function L(s, i, c, u) {
        this.failures = i, this.failedKeys = u, this.successCount = c, this.message = T(s, i);
      }
      le(L).from(x);
      function F(s, i) {
        this.name = "BulkError", this.failures = Object.keys(i).map(function(c) {
          return i[c];
        }), this.failuresByPos = i, this.message = T(s, this.failures);
      }
      le(F).from(x);
      var V = ls.reduce(function(s, i) {
        return s[i] = i + "Error", s;
      }, {}), Y = x, I = ls.reduce(function(s, i) {
        var c = i + "Error";
        function u(f, h) {
          this.name = c, f ? typeof f == "string" ? (this.message = "".concat(f).concat(h ? `
 ` + h : ""), this.inner = h || null) : typeof f == "object" && (this.message = "".concat(f.name, " ").concat(f.message), this.inner = f) : (this.message = b[i] || c, this.inner = null);
        }
        return le(u).from(Y), s[i] = u, s;
      }, {});
      I.Syntax = SyntaxError, I.Type = TypeError, I.Range = RangeError;
      var G = pn.reduce(function(s, i) {
        return s[i + "Error"] = I[i], s;
      }, {});
      function j(s, i) {
        if (!s || s instanceof x || s instanceof TypeError || s instanceof SyntaxError || !s.name || !G[s.name])
          return s;
        var c = new G[s.name](i || s.message, s);
        return "stack" in s && H(c, "stack", { get: function() {
          return this.inner.stack;
        } }), c;
      }
      var ce = ls.reduce(function(s, i) {
        return ["Syntax", "Type", "Range"].indexOf(i) === -1 && (s[i + "Error"] = I[i]), s;
      }, {});
      ce.ModifyError = L, ce.DexieError = x, ce.BulkError = F;
      function K() {
      }
      function re(s) {
        return s;
      }
      function ye(s, i) {
        return s == null || s === re ? i : function(c) {
          return i(s(c));
        };
      }
      function ve(s, i) {
        return function() {
          s.apply(this, arguments), i.apply(this, arguments);
        };
      }
      function Te(s, i) {
        return s === K ? i : function() {
          var c = s.apply(this, arguments);
          c !== void 0 && (arguments[0] = c);
          var u = this.onsuccess, f = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var h = i.apply(this, arguments);
          return u && (this.onsuccess = this.onsuccess ? ve(u, this.onsuccess) : u), f && (this.onerror = this.onerror ? ve(f, this.onerror) : f), h !== void 0 ? h : c;
        };
      }
      function Oe(s, i) {
        return s === K ? i : function() {
          s.apply(this, arguments);
          var c = this.onsuccess, u = this.onerror;
          this.onsuccess = this.onerror = null, i.apply(this, arguments), c && (this.onsuccess = this.onsuccess ? ve(c, this.onsuccess) : c), u && (this.onerror = this.onerror ? ve(u, this.onerror) : u);
        };
      }
      function ot(s, i) {
        return s === K ? i : function(c) {
          var u = s.apply(this, arguments);
          _(c, u);
          var f = this.onsuccess, h = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var g = i.apply(this, arguments);
          return f && (this.onsuccess = this.onsuccess ? ve(f, this.onsuccess) : f), h && (this.onerror = this.onerror ? ve(h, this.onerror) : h), u === void 0 ? g === void 0 ? void 0 : g : _(u, g);
        };
      }
      function at(s, i) {
        return s === K ? i : function() {
          return i.apply(this, arguments) === !1 ? !1 : s.apply(this, arguments);
        };
      }
      function mt(s, i) {
        return s === K ? i : function() {
          var c = s.apply(this, arguments);
          if (c && typeof c.then == "function") {
            for (var u = this, f = arguments.length, h = new Array(f); f--; )
              h[f] = arguments[f];
            return c.then(function() {
              return i.apply(u, h);
            });
          }
          return i.apply(this, arguments);
        };
      }
      var Ke = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function gn(s, i) {
        Ke = s;
      }
      var yn = {}, et = 100, vt = typeof Promise > "u" ? [] : (function() {
        var s = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle)
          return [s, v(s), s];
        var i = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [
          i,
          v(i),
          s
        ];
      })(), wr = vt[0], br = vt[1], al = vt[2], cl = br && br.then, Rn = wr && wr.constructor, Ei = !!al;
      function ul() {
        queueMicrotask(fl);
      }
      var _r = function(s, i) {
        Er.push([s, i]), fs && (ul(), fs = !1);
      }, xi = !0, fs = !0, Un = [], ds = [], Si = re, mn = {
        id: "global",
        global: !0,
        ref: 0,
        unhandleds: [],
        onunhandled: K,
        pgp: !1,
        env: {},
        finalize: K
      }, ie = mn, Er = [], Bn = 0, hs = [];
      function Z(s) {
        if (typeof this != "object")
          throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var i = this._PSD = ie;
        if (typeof s != "function") {
          if (s !== yn)
            throw new TypeError("Not a function");
          this._state = arguments[1], this._value = arguments[2], this._state === !1 && Ci(this, this._value);
          return;
        }
        this._state = null, this._value = null, ++i.ref, ha(this, s);
      }
      var Pi = {
        get: function() {
          var s = ie, i = ms;
          function c(u, f) {
            var h = this, g = !s.global && (s !== ie || i !== ms), y = g && !wn(), m = new Z(function(E, C) {
              Di(h, new da(ya(u, s, g, y), ya(f, s, g, y), E, C, s));
            });
            return this._consoleTask && (m._consoleTask = this._consoleTask), m;
          }
          return c.prototype = yn, c;
        },
        set: function(s) {
          H(this, "then", s && s.prototype === yn ? Pi : {
            get: function() {
              return s;
            },
            set: Pi.set
          });
        }
      };
      O(Z.prototype, {
        then: Pi,
        _then: function(s, i) {
          Di(this, new da(null, null, s, i, ie));
        },
        catch: function(s) {
          if (arguments.length === 1)
            return this.then(null, s);
          var i = arguments[0], c = arguments[1];
          return typeof i == "function" ? this.then(null, function(u) {
            return u instanceof i ? c(u) : ps(u);
          }) : this.then(null, function(u) {
            return u && u.name === i ? c(u) : ps(u);
          });
        },
        finally: function(s) {
          return this.then(function(i) {
            return Z.resolve(s()).then(function() {
              return i;
            });
          }, function(i) {
            return Z.resolve(s()).then(function() {
              return ps(i);
            });
          });
        },
        timeout: function(s, i) {
          var c = this;
          return s < 1 / 0 ? new Z(function(u, f) {
            var h = setTimeout(function() {
              return f(new I.Timeout(i));
            }, s);
            c.then(u, f).finally(clearTimeout.bind(null, h));
          }) : this;
        }
      }), typeof Symbol < "u" && Symbol.toStringTag && H(Z.prototype, Symbol.toStringTag, "Dexie.Promise"), mn.env = ga();
      function da(s, i, c, u, f) {
        this.onFulfilled = typeof s == "function" ? s : null, this.onRejected = typeof i == "function" ? i : null, this.resolve = c, this.reject = u, this.psd = f;
      }
      O(Z, {
        all: function() {
          var s = Ve.apply(null, arguments).map(vs);
          return new Z(function(i, c) {
            s.length === 0 && i([]);
            var u = s.length;
            s.forEach(function(f, h) {
              return Z.resolve(f).then(function(g) {
                s[h] = g, --u || i(s);
              }, c);
            });
          });
        },
        resolve: function(s) {
          if (s instanceof Z)
            return s;
          if (s && typeof s.then == "function")
            return new Z(function(c, u) {
              s.then(c, u);
            });
          var i = new Z(yn, !0, s);
          return i;
        },
        reject: ps,
        race: function() {
          var s = Ve.apply(null, arguments).map(vs);
          return new Z(function(i, c) {
            s.map(function(u) {
              return Z.resolve(u).then(i, c);
            });
          });
        },
        PSD: {
          get: function() {
            return ie;
          },
          set: function(s) {
            return ie = s;
          }
        },
        totalEchoes: { get: function() {
          return ms;
        } },
        newPSD: vn,
        usePSD: Mn,
        scheduler: {
          get: function() {
            return _r;
          },
          set: function(s) {
            _r = s;
          }
        },
        rejectionMapper: {
          get: function() {
            return Si;
          },
          set: function(s) {
            Si = s;
          }
        },
        follow: function(s, i) {
          return new Z(function(c, u) {
            return vn(function(f, h) {
              var g = ie;
              g.unhandleds = [], g.onunhandled = h, g.finalize = ve(function() {
                var y = this;
                dl(function() {
                  y.unhandleds.length === 0 ? f() : h(y.unhandleds[0]);
                });
              }, g.finalize), s();
            }, i, c, u);
          });
        }
      }), Rn && (Rn.allSettled && H(Z, "allSettled", function() {
        var s = Ve.apply(null, arguments).map(vs);
        return new Z(function(i) {
          s.length === 0 && i([]);
          var c = s.length, u = new Array(c);
          s.forEach(function(f, h) {
            return Z.resolve(f).then(function(g) {
              return u[h] = { status: "fulfilled", value: g };
            }, function(g) {
              return u[h] = { status: "rejected", reason: g };
            }).then(function() {
              return --c || i(u);
            });
          });
        });
      }), Rn.any && typeof AggregateError < "u" && H(Z, "any", function() {
        var s = Ve.apply(null, arguments).map(vs);
        return new Z(function(i, c) {
          s.length === 0 && c(new AggregateError([]));
          var u = s.length, f = new Array(u);
          s.forEach(function(h, g) {
            return Z.resolve(h).then(function(y) {
              return i(y);
            }, function(y) {
              f[g] = y, --u || c(new AggregateError(f));
            });
          });
        });
      }), Rn.withResolvers && (Z.withResolvers = Rn.withResolvers));
      function ha(s, i) {
        try {
          i(function(c) {
            if (s._state === null) {
              if (c === s)
                throw new TypeError("A promise cannot be resolved with itself.");
              var u = s._lib && Zn();
              c && typeof c.then == "function" ? ha(s, function(f, h) {
                c instanceof Z ? c._then(f, h) : c.then(f, h);
              }) : (s._state = !0, s._value = c, pa(s)), u && er();
            }
          }, Ci.bind(null, s));
        } catch (c) {
          Ci(s, c);
        }
      }
      function Ci(s, i) {
        if (ds.push(i), s._state === null) {
          var c = s._lib && Zn();
          i = Si(i), s._state = !1, s._value = i, hl(s), pa(s), c && er();
        }
      }
      function pa(s) {
        var i = s._listeners;
        s._listeners = [];
        for (var c = 0, u = i.length; c < u; ++c)
          Di(s, i[c]);
        var f = s._PSD;
        --f.ref || f.finalize(), Bn === 0 && (++Bn, _r(function() {
          --Bn === 0 && ki();
        }, []));
      }
      function Di(s, i) {
        if (s._state === null) {
          s._listeners.push(i);
          return;
        }
        var c = s._state ? i.onFulfilled : i.onRejected;
        if (c === null)
          return (s._state ? i.resolve : i.reject)(s._value);
        ++i.psd.ref, ++Bn, _r(ll, [c, s, i]);
      }
      function ll(s, i, c) {
        try {
          var u, f = i._value;
          !i._state && ds.length && (ds = []), u = Ke && i._consoleTask ? i._consoleTask.run(function() {
            return s(f);
          }) : s(f), !i._state && ds.indexOf(f) === -1 && pl(i), c.resolve(u);
        } catch (h) {
          c.reject(h);
        } finally {
          --Bn === 0 && ki(), --c.psd.ref || c.psd.finalize();
        }
      }
      function fl() {
        Mn(mn, function() {
          Zn() && er();
        });
      }
      function Zn() {
        var s = xi;
        return xi = !1, fs = !1, s;
      }
      function er() {
        var s, i, c;
        do
          for (; Er.length > 0; )
            for (s = Er, Er = [], c = s.length, i = 0; i < c; ++i) {
              var u = s[i];
              u[0].apply(null, u[1]);
            }
        while (Er.length > 0);
        xi = !0, fs = !0;
      }
      function ki() {
        var s = Un;
        Un = [], s.forEach(function(u) {
          u._PSD.onunhandled.call(null, u._value, u);
        });
        for (var i = hs.slice(0), c = i.length; c; )
          i[--c]();
      }
      function dl(s) {
        function i() {
          s(), hs.splice(hs.indexOf(i), 1);
        }
        hs.push(i), ++Bn, _r(function() {
          --Bn === 0 && ki();
        }, []);
      }
      function hl(s) {
        Un.some(function(i) {
          return i._value === s._value;
        }) || Un.push(s);
      }
      function pl(s) {
        for (var i = Un.length; i; )
          if (Un[--i]._value === s._value) {
            Un.splice(i, 1);
            return;
          }
      }
      function ps(s) {
        return new Z(yn, !1, s);
      }
      function Be(s, i) {
        var c = ie;
        return function() {
          var u = Zn(), f = ie;
          try {
            return bn(c, !0), s.apply(this, arguments);
          } catch (h) {
            i && i(h);
          } finally {
            bn(f, !1), u && er();
          }
        };
      }
      var tt = { awaits: 0, echoes: 0, id: 0 }, gl = 0, gs = [], ys = 0, ms = 0, yl = 0;
      function vn(s, i, c, u) {
        var f = ie, h = Object.create(f);
        h.parent = f, h.ref = 0, h.global = !1, h.id = ++yl, mn.env, h.env = Ei ? {
          Promise: Z,
          PromiseProp: { value: Z, configurable: !0, writable: !0 },
          all: Z.all,
          race: Z.race,
          allSettled: Z.allSettled,
          any: Z.any,
          resolve: Z.resolve,
          reject: Z.reject
        } : {}, i && _(h, i), ++f.ref, h.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        };
        var g = Mn(h, s, c, u);
        return h.ref === 0 && h.finalize(), g;
      }
      function tr() {
        return tt.id || (tt.id = ++gl), ++tt.awaits, tt.echoes += et, tt.id;
      }
      function wn() {
        return tt.awaits ? (--tt.awaits === 0 && (tt.id = 0), tt.echoes = tt.awaits * et, !0) : !1;
      }
      ("" + cl).indexOf("[native code]") === -1 && (tr = wn = K);
      function vs(s) {
        return tt.echoes && s && s.constructor === Rn ? (tr(), s.then(function(i) {
          return wn(), i;
        }, function(i) {
          return wn(), Le(i);
        })) : s;
      }
      function ml(s) {
        ++ms, (!tt.echoes || --tt.echoes === 0) && (tt.echoes = tt.awaits = tt.id = 0), gs.push(ie), bn(s, !0);
      }
      function vl() {
        var s = gs[gs.length - 1];
        gs.pop(), bn(s, !1);
      }
      function bn(s, i) {
        var c = ie;
        if ((i ? tt.echoes && (!ys++ || s !== ie) : ys && (!--ys || s !== ie)) && queueMicrotask(i ? ml.bind(null, s) : vl), s !== ie && (ie = s, c === mn && (mn.env = ga()), Ei)) {
          var u = mn.env.Promise, f = s.env;
          (c.global || s.global) && (Object.defineProperty(l, "Promise", f.PromiseProp), u.all = f.all, u.race = f.race, u.resolve = f.resolve, u.reject = f.reject, f.allSettled && (u.allSettled = f.allSettled), f.any && (u.any = f.any));
        }
      }
      function ga() {
        var s = l.Promise;
        return Ei ? {
          Promise: s,
          PromiseProp: Object.getOwnPropertyDescriptor(l, "Promise"),
          all: s.all,
          race: s.race,
          allSettled: s.allSettled,
          any: s.any,
          resolve: s.resolve,
          reject: s.reject
        } : {};
      }
      function Mn(s, i, c, u, f) {
        var h = ie;
        try {
          return bn(s, !0), i(c, u, f);
        } finally {
          bn(h, !1);
        }
      }
      function ya(s, i, c, u) {
        return typeof s != "function" ? s : function() {
          var f = ie;
          c && tr(), bn(i, !0);
          try {
            return s.apply(this, arguments);
          } finally {
            bn(f, !1), u && queueMicrotask(wn);
          }
        };
      }
      function Ii(s) {
        Promise === Rn && tt.echoes === 0 ? ys === 0 ? s() : enqueueNativeMicroTask(s) : setTimeout(s, 0);
      }
      var Le = Z.reject;
      function Oi(s, i, c, u) {
        if (!s.idbdb || !s._state.openComplete && !ie.letThrough && !s._vip) {
          if (s._state.openComplete)
            return Le(new I.DatabaseClosed(s._state.dbOpenError));
          if (!s._state.isBeingOpened) {
            if (!s._state.autoOpen)
              return Le(new I.DatabaseClosed());
            s.open().catch(K);
          }
          return s._state.dbReadyPromise.then(function() {
            return Oi(s, i, c, u);
          });
        } else {
          var f = s._createTransaction(i, c, s._dbSchema);
          try {
            f.create(), s._state.PR1398_maxLoop = 3;
          } catch (h) {
            return h.name === V.InvalidState && s.isOpen() && --s._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), s.close({ disableAutoOpen: !1 }), s.open().then(function() {
              return Oi(s, i, c, u);
            })) : Le(h);
          }
          return f._promise(i, function(h, g) {
            return vn(function() {
              return ie.trans = f, u(h, g, f);
            });
          }).then(function(h) {
            if (i === "readwrite")
              try {
                f.idbtrans.commit();
              } catch {
              }
            return i === "readonly" ? h : f._completion.then(function() {
              return h;
            });
          });
        }
      }
      var ma = "4.3.0", Fn = "￿", Ai = -1 / 0, en = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", va = "String expected.", nr = [], ws = "__dbnames", Ni = "readonly", Ti = "readwrite";
      function $n(s, i) {
        return s ? i ? function() {
          return s.apply(this, arguments) && i.apply(this, arguments);
        } : s : i;
      }
      var wa = {
        type: 3,
        lower: -1 / 0,
        lowerOpen: !1,
        upper: [[]],
        upperOpen: !1
      };
      function bs(s) {
        return typeof s == "string" && !/\./.test(s) ? function(i) {
          return i[s] === void 0 && s in i && (i = gt(i), delete i[s]), i;
        } : function(i) {
          return i;
        };
      }
      function ba() {
        throw I.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function Pe(s, i) {
        try {
          var c = _a(s), u = _a(i);
          if (c !== u)
            return c === "Array" ? 1 : u === "Array" ? -1 : c === "binary" ? 1 : u === "binary" ? -1 : c === "string" ? 1 : u === "string" ? -1 : c === "Date" ? 1 : u !== "Date" ? NaN : -1;
          switch (c) {
            case "number":
            case "Date":
            case "string":
              return s > i ? 1 : s < i ? -1 : 0;
            case "binary":
              return bl(Ea(s), Ea(i));
            case "Array":
              return wl(s, i);
          }
        } catch {
        }
        return NaN;
      }
      function wl(s, i) {
        for (var c = s.length, u = i.length, f = c < u ? c : u, h = 0; h < f; ++h) {
          var g = Pe(s[h], i[h]);
          if (g !== 0)
            return g;
        }
        return c === u ? 0 : c < u ? -1 : 1;
      }
      function bl(s, i) {
        for (var c = s.length, u = i.length, f = c < u ? c : u, h = 0; h < f; ++h)
          if (s[h] !== i[h])
            return s[h] < i[h] ? -1 : 1;
        return c === u ? 0 : c < u ? -1 : 1;
      }
      function _a(s) {
        var i = typeof s;
        if (i !== "object")
          return i;
        if (ArrayBuffer.isView(s))
          return "binary";
        var c = yt(s);
        return c === "ArrayBuffer" ? "binary" : c;
      }
      function Ea(s) {
        return s instanceof Uint8Array ? s : ArrayBuffer.isView(s) ? new Uint8Array(s.buffer, s.byteOffset, s.byteLength) : new Uint8Array(s);
      }
      function _s(s, i, c) {
        var u = s.schema.yProps;
        return u ? (i && c.numFailures > 0 && (i = i.filter(function(f, h) {
          return !c.failures[h];
        })), Promise.all(u.map(function(f) {
          var h = f.updatesTable;
          return i ? s.db.table(h).where("k").anyOf(i).delete() : s.db.table(h).clear();
        })).then(function() {
          return c;
        })) : c;
      }
      var xr = (function() {
        function s(i) {
          this["@@propmod"] = i;
        }
        return s.prototype.execute = function(i) {
          var c, u = this["@@propmod"];
          if (u.add !== void 0) {
            var f = u.add;
            if (p(f))
              return a(a([], p(i) ? i : [], !0), f).sort();
            if (typeof f == "number")
              return (Number(i) || 0) + f;
            if (typeof f == "bigint")
              try {
                return BigInt(i) + f;
              } catch {
                return BigInt(0) + f;
              }
            throw new TypeError("Invalid term ".concat(f));
          }
          if (u.remove !== void 0) {
            var h = u.remove;
            if (p(h))
              return p(i) ? i.filter(function(y) {
                return !h.includes(y);
              }).sort() : [];
            if (typeof h == "number")
              return Number(i) - h;
            if (typeof h == "bigint")
              try {
                return BigInt(i) - h;
              } catch {
                return BigInt(0) - h;
              }
            throw new TypeError("Invalid subtrahend ".concat(h));
          }
          var g = (c = u.replacePrefix) === null || c === void 0 ? void 0 : c[0];
          return g && typeof i == "string" && i.startsWith(g) ? u.replacePrefix[1] + i.substring(g.length) : i;
        }, s;
      })();
      function xa(s, i) {
        for (var c = d(i), u = c.length, f = !1, h = 0; h < u; ++h) {
          var g = c[h], y = i[g], m = Re(s, g);
          y instanceof xr ? (Ue(s, g, y.execute(m)), f = !0) : m !== y && (Ue(s, g, y), f = !0);
        }
        return f;
      }
      var Sa = (function() {
        function s() {
        }
        return s.prototype._trans = function(i, c, u) {
          var f = this._tx || ie.trans, h = this.name, g = Ke && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(i === "readonly" ? "read" : "write", " ").concat(this.name));
          function y(C, S, N) {
            if (!N.schema[h])
              throw new I.NotFound("Table " + h + " not part of transaction");
            return c(N.idbtrans, N);
          }
          var m = Zn();
          try {
            var E = f && f.db._novip === this.db._novip ? f === ie.trans ? f._promise(i, y, u) : vn(function() {
              return f._promise(i, y, u);
            }, { trans: f, transless: ie.transless || ie }) : Oi(this.db, i, [this.name], y);
            return g && (E._consoleTask = g, E = E.catch(function(C) {
              return console.trace(C), Le(C);
            })), E;
          } finally {
            m && er();
          }
        }, s.prototype.get = function(i, c) {
          var u = this;
          return i && i.constructor === Object ? this.where(i).first(c) : i == null ? Le(new I.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(f) {
            return u.core.get({ trans: f, key: i }).then(function(h) {
              return u.hook.reading.fire(h);
            });
          }).then(c);
        }, s.prototype.where = function(i) {
          if (typeof i == "string")
            return new this.db.WhereClause(this, i);
          if (p(i))
            return new this.db.WhereClause(this, "[".concat(i.join("+"), "]"));
          var c = d(i);
          if (c.length === 1)
            return this.where(c[0]).equals(i[c[0]]);
          var u = this.schema.indexes.concat(this.schema.primKey).filter(function(C) {
            if (C.compound && c.every(function(N) {
              return C.keyPath.indexOf(N) >= 0;
            })) {
              for (var S = 0; S < c.length; ++S)
                if (c.indexOf(C.keyPath[S]) === -1)
                  return !1;
              return !0;
            }
            return !1;
          }).sort(function(C, S) {
            return C.keyPath.length - S.keyPath.length;
          })[0];
          if (u && this.db._maxKey !== Fn) {
            var f = u.keyPath.slice(0, c.length);
            return this.where(f).equals(f.map(function(C) {
              return i[C];
            }));
          }
          !u && Ke && console.warn("The query ".concat(JSON.stringify(i), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(c.join("+"), "]"));
          var h = this.schema.idxByName;
          function g(C, S) {
            return Pe(C, S) === 0;
          }
          var y = c.reduce(function(C, S) {
            var N = C[0], z = C[1], P = h[S], k = i[S];
            return [
              N || P,
              N || !P ? $n(z, P && P.multi ? function(A) {
                var R = Re(A, S);
                return p(R) && R.some(function(B) {
                  return g(k, B);
                });
              } : function(A) {
                return g(k, Re(A, S));
              }) : z
            ];
          }, [null, null]), m = y[0], E = y[1];
          return m ? this.where(m.name).equals(i[m.keyPath]).filter(E) : u ? this.filter(E) : this.where(c).equals("");
        }, s.prototype.filter = function(i) {
          return this.toCollection().and(i);
        }, s.prototype.count = function(i) {
          return this.toCollection().count(i);
        }, s.prototype.offset = function(i) {
          return this.toCollection().offset(i);
        }, s.prototype.limit = function(i) {
          return this.toCollection().limit(i);
        }, s.prototype.each = function(i) {
          return this.toCollection().each(i);
        }, s.prototype.toArray = function(i) {
          return this.toCollection().toArray(i);
        }, s.prototype.toCollection = function() {
          return new this.db.Collection(new this.db.WhereClause(this));
        }, s.prototype.orderBy = function(i) {
          return new this.db.Collection(new this.db.WhereClause(this, p(i) ? "[".concat(i.join("+"), "]") : i));
        }, s.prototype.reverse = function() {
          return this.toCollection().reverse();
        }, s.prototype.mapToClass = function(i) {
          var c = this, u = c.db, f = c.name;
          this.schema.mappedClass = i, i.prototype instanceof ba && (i = (function(m) {
            r(E, m);
            function E() {
              return m !== null && m.apply(this, arguments) || this;
            }
            return Object.defineProperty(E.prototype, "db", {
              get: function() {
                return u;
              },
              enumerable: !1,
              configurable: !0
            }), E.prototype.table = function() {
              return f;
            }, E;
          })(i));
          for (var h = /* @__PURE__ */ new Set(), g = i.prototype; g; g = v(g))
            Object.getOwnPropertyNames(g).forEach(function(m) {
              return h.add(m);
            });
          var y = function(m) {
            if (!m)
              return m;
            var E = Object.create(i.prototype);
            for (var C in m)
              if (!h.has(C))
                try {
                  E[C] = m[C];
                } catch {
                }
            return E;
          };
          return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = y, this.hook("reading", y), i;
        }, s.prototype.defineClass = function() {
          function i(c) {
            _(this, c);
          }
          return this.mapToClass(i);
        }, s.prototype.add = function(i, c) {
          var u = this, f = this.schema.primKey, h = f.auto, g = f.keyPath, y = i;
          return g && h && (y = bs(g)(i)), this._trans("readwrite", function(m) {
            return u.core.mutate({ trans: m, type: "add", keys: c != null ? [c] : null, values: [y] });
          }).then(function(m) {
            return m.numFailures ? Z.reject(m.failures[0]) : m.lastResult;
          }).then(function(m) {
            if (g)
              try {
                Ue(i, g, m);
              } catch {
              }
            return m;
          });
        }, s.prototype.upsert = function(i, c) {
          var u = this, f = this.schema.primKey.keyPath;
          return this._trans("readwrite", function(h) {
            return u.core.get({ trans: h, key: i }).then(function(g) {
              var y = g ?? {};
              return xa(y, c), f && Ue(y, f, i), u.core.mutate({
                trans: h,
                type: "put",
                values: [y],
                keys: [i],
                upsert: !0,
                updates: { keys: [i], changeSpecs: [c] }
              }).then(function(m) {
                return m.numFailures ? Z.reject(m.failures[0]) : !!g;
              });
            });
          });
        }, s.prototype.update = function(i, c) {
          if (typeof i == "object" && !p(i)) {
            var u = Re(i, this.schema.primKey.keyPath);
            return u === void 0 ? Le(new I.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(u).modify(c);
          } else
            return this.where(":id").equals(i).modify(c);
        }, s.prototype.put = function(i, c) {
          var u = this, f = this.schema.primKey, h = f.auto, g = f.keyPath, y = i;
          return g && h && (y = bs(g)(i)), this._trans("readwrite", function(m) {
            return u.core.mutate({ trans: m, type: "put", values: [y], keys: c != null ? [c] : null });
          }).then(function(m) {
            return m.numFailures ? Z.reject(m.failures[0]) : m.lastResult;
          }).then(function(m) {
            if (g)
              try {
                Ue(i, g, m);
              } catch {
              }
            return m;
          });
        }, s.prototype.delete = function(i) {
          var c = this;
          return this._trans("readwrite", function(u) {
            return c.core.mutate({ trans: u, type: "delete", keys: [i] }).then(function(f) {
              return _s(c, [i], f);
            }).then(function(f) {
              return f.numFailures ? Z.reject(f.failures[0]) : void 0;
            });
          });
        }, s.prototype.clear = function() {
          var i = this;
          return this._trans("readwrite", function(c) {
            return i.core.mutate({ trans: c, type: "deleteRange", range: wa }).then(function(u) {
              return _s(i, null, u);
            });
          }).then(function(c) {
            return c.numFailures ? Z.reject(c.failures[0]) : void 0;
          });
        }, s.prototype.bulkGet = function(i) {
          var c = this;
          return this._trans("readonly", function(u) {
            return c.core.getMany({
              keys: i,
              trans: u
            }).then(function(f) {
              return f.map(function(h) {
                return c.hook.reading.fire(h);
              });
            });
          });
        }, s.prototype.bulkAdd = function(i, c, u) {
          var f = this, h = Array.isArray(c) ? c : void 0;
          u = u || (h ? void 0 : c);
          var g = u ? u.allKeys : void 0;
          return this._trans("readwrite", function(y) {
            var m = f.schema.primKey, E = m.auto, C = m.keyPath;
            if (C && h)
              throw new I.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
            if (h && h.length !== i.length)
              throw new I.InvalidArgument("Arguments objects and keys must have the same length");
            var S = i.length, N = C && E ? i.map(bs(C)) : i;
            return f.core.mutate({ trans: y, type: "add", keys: h, values: N, wantResults: g }).then(function(z) {
              var P = z.numFailures, k = z.results, A = z.lastResult, R = z.failures, B = g ? k : A;
              if (P === 0)
                return B;
              throw new F("".concat(f.name, ".bulkAdd(): ").concat(P, " of ").concat(S, " operations failed"), R);
            });
          });
        }, s.prototype.bulkPut = function(i, c, u) {
          var f = this, h = Array.isArray(c) ? c : void 0;
          u = u || (h ? void 0 : c);
          var g = u ? u.allKeys : void 0;
          return this._trans("readwrite", function(y) {
            var m = f.schema.primKey, E = m.auto, C = m.keyPath;
            if (C && h)
              throw new I.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
            if (h && h.length !== i.length)
              throw new I.InvalidArgument("Arguments objects and keys must have the same length");
            var S = i.length, N = C && E ? i.map(bs(C)) : i;
            return f.core.mutate({ trans: y, type: "put", keys: h, values: N, wantResults: g }).then(function(z) {
              var P = z.numFailures, k = z.results, A = z.lastResult, R = z.failures, B = g ? k : A;
              if (P === 0)
                return B;
              throw new F("".concat(f.name, ".bulkPut(): ").concat(P, " of ").concat(S, " operations failed"), R);
            });
          });
        }, s.prototype.bulkUpdate = function(i) {
          var c = this, u = this.core, f = i.map(function(y) {
            return y.key;
          }), h = i.map(function(y) {
            return y.changes;
          }), g = [];
          return this._trans("readwrite", function(y) {
            return u.getMany({ trans: y, keys: f, cache: "clone" }).then(function(m) {
              var E = [], C = [];
              i.forEach(function(N, z) {
                var P = N.key, k = N.changes, A = m[z];
                if (A) {
                  for (var R = 0, B = Object.keys(k); R < B.length; R++) {
                    var M = B[R], $ = k[M];
                    if (M === c.schema.primKey.keyPath) {
                      if (Pe($, P) !== 0)
                        throw new I.Constraint("Cannot update primary key in bulkUpdate()");
                    } else
                      Ue(A, M, $);
                  }
                  g.push(z), E.push(P), C.push(A);
                }
              });
              var S = E.length;
              return u.mutate({
                trans: y,
                type: "put",
                keys: E,
                values: C,
                updates: {
                  keys: f,
                  changeSpecs: h
                }
              }).then(function(N) {
                var z = N.numFailures, P = N.failures;
                if (z === 0)
                  return S;
                for (var k = 0, A = Object.keys(P); k < A.length; k++) {
                  var R = A[k], B = g[Number(R)];
                  if (B != null) {
                    var M = P[R];
                    delete P[R], P[B] = M;
                  }
                }
                throw new F("".concat(c.name, ".bulkUpdate(): ").concat(z, " of ").concat(S, " operations failed"), P);
              });
            });
          });
        }, s.prototype.bulkDelete = function(i) {
          var c = this, u = i.length;
          return this._trans("readwrite", function(f) {
            return c.core.mutate({ trans: f, type: "delete", keys: i }).then(function(h) {
              return _s(c, i, h);
            });
          }).then(function(f) {
            var h = f.numFailures, g = f.lastResult, y = f.failures;
            if (h === 0)
              return g;
            throw new F("".concat(c.name, ".bulkDelete(): ").concat(h, " of ").concat(u, " operations failed"), y);
          });
        }, s;
      })();
      function Sr(s) {
        var i = {}, c = function(y, m) {
          if (m) {
            for (var E = arguments.length, C = new Array(E - 1); --E; )
              C[E - 1] = arguments[E];
            return i[y].subscribe.apply(null, C), s;
          } else if (typeof y == "string")
            return i[y];
        };
        c.addEventType = h;
        for (var u = 1, f = arguments.length; u < f; ++u)
          h(arguments[u]);
        return c;
        function h(y, m, E) {
          if (typeof y == "object")
            return g(y);
          m || (m = at), E || (E = K);
          var C = {
            subscribers: [],
            fire: E,
            subscribe: function(S) {
              C.subscribers.indexOf(S) === -1 && (C.subscribers.push(S), C.fire = m(C.fire, S));
            },
            unsubscribe: function(S) {
              C.subscribers = C.subscribers.filter(function(N) {
                return N !== S;
              }), C.fire = C.subscribers.reduce(m, E);
            }
          };
          return i[y] = c[y] = C, C;
        }
        function g(y) {
          d(y).forEach(function(m) {
            var E = y[m];
            if (p(E))
              h(m, y[m][0], y[m][1]);
            else if (E === "asap")
              var C = h(m, re, function() {
                for (var N = arguments.length, z = new Array(N); N--; )
                  z[N] = arguments[N];
                C.subscribers.forEach(function(P) {
                  Xe(function() {
                    P.apply(null, z);
                  });
                });
              });
            else
              throw new I.InvalidArgument("Invalid event config");
          });
        }
      }
      function Pr(s, i) {
        return le(i).from({ prototype: s }), i;
      }
      function _l(s) {
        return Pr(Sa.prototype, function(c, u, f) {
          this.db = s, this._tx = f, this.name = c, this.schema = u, this.hook = s._allTables[c] ? s._allTables[c].hook : Sr(null, {
            creating: [Te, K],
            reading: [ye, re],
            updating: [ot, K],
            deleting: [Oe, K]
          });
        });
      }
      function rr(s, i) {
        return !(s.filter || s.algorithm || s.or) && (i ? s.justLimit : !s.replayFilter);
      }
      function Ri(s, i) {
        s.filter = $n(s.filter, i);
      }
      function Ui(s, i, c) {
        var u = s.replayFilter;
        s.replayFilter = u ? function() {
          return $n(u(), i());
        } : i, s.justLimit = c && !u;
      }
      function El(s, i) {
        s.isMatch = $n(s.isMatch, i);
      }
      function Es(s, i) {
        if (s.isPrimKey)
          return i.primaryKey;
        var c = i.getIndexByKeyPath(s.index);
        if (!c)
          throw new I.Schema("KeyPath " + s.index + " on object store " + i.name + " is not indexed");
        return c;
      }
      function Pa(s, i, c) {
        var u = Es(s, i.schema);
        return i.openCursor({
          trans: c,
          values: !s.keysOnly,
          reverse: s.dir === "prev",
          unique: !!s.unique,
          query: {
            index: u,
            range: s.range
          }
        });
      }
      function xs(s, i, c, u) {
        var f = s.replayFilter ? $n(s.filter, s.replayFilter()) : s.filter;
        if (s.or) {
          var h = {}, g = function(y, m, E) {
            if (!f || f(m, E, function(N) {
              return m.stop(N);
            }, function(N) {
              return m.fail(N);
            })) {
              var C = m.primaryKey, S = "" + C;
              S === "[object ArrayBuffer]" && (S = "" + new Uint8Array(C)), D(h, S) || (h[S] = !0, i(y, m, E));
            }
          };
          return Promise.all([
            s.or._iterate(g, c),
            Ca(Pa(s, u, c), s.algorithm, g, !s.keysOnly && s.valueMapper)
          ]);
        } else
          return Ca(Pa(s, u, c), $n(s.algorithm, f), i, !s.keysOnly && s.valueMapper);
      }
      function Ca(s, i, c, u) {
        var f = u ? function(g, y, m) {
          return c(u(g), y, m);
        } : c, h = Be(f);
        return s.then(function(g) {
          if (g)
            return g.start(function() {
              var y = function() {
                return g.continue();
              };
              (!i || i(g, function(m) {
                return y = m;
              }, function(m) {
                g.stop(m), y = K;
              }, function(m) {
                g.fail(m), y = K;
              })) && h(g.value, g, function(m) {
                return y = m;
              }), y();
            });
        });
      }
      var xl = (function() {
        function s() {
        }
        return s.prototype._read = function(i, c) {
          var u = this._ctx;
          return u.error ? u.table._trans(null, Le.bind(null, u.error)) : u.table._trans("readonly", i).then(c);
        }, s.prototype._write = function(i) {
          var c = this._ctx;
          return c.error ? c.table._trans(null, Le.bind(null, c.error)) : c.table._trans("readwrite", i, "locked");
        }, s.prototype._addAlgorithm = function(i) {
          var c = this._ctx;
          c.algorithm = $n(c.algorithm, i);
        }, s.prototype._iterate = function(i, c) {
          return xs(this._ctx, i, c, this._ctx.table.core);
        }, s.prototype.clone = function(i) {
          var c = Object.create(this.constructor.prototype), u = Object.create(this._ctx);
          return i && _(u, i), c._ctx = u, c;
        }, s.prototype.raw = function() {
          return this._ctx.valueMapper = null, this;
        }, s.prototype.each = function(i) {
          var c = this._ctx;
          return this._read(function(u) {
            return xs(c, i, u, c.table.core);
          });
        }, s.prototype.count = function(i) {
          var c = this;
          return this._read(function(u) {
            var f = c._ctx, h = f.table.core;
            if (rr(f, !0))
              return h.count({
                trans: u,
                query: {
                  index: Es(f, h.schema),
                  range: f.range
                }
              }).then(function(y) {
                return Math.min(y, f.limit);
              });
            var g = 0;
            return xs(f, function() {
              return ++g, !1;
            }, u, h).then(function() {
              return g;
            });
          }).then(i);
        }, s.prototype.sortBy = function(i, c) {
          var u = i.split(".").reverse(), f = u[0], h = u.length - 1;
          function g(E, C) {
            return C ? g(E[u[C]], C - 1) : E[f];
          }
          var y = this._ctx.dir === "next" ? 1 : -1;
          function m(E, C) {
            var S = g(E, h), N = g(C, h);
            return Pe(S, N) * y;
          }
          return this.toArray(function(E) {
            return E.sort(m);
          }).then(c);
        }, s.prototype.toArray = function(i) {
          var c = this;
          return this._read(function(u) {
            var f = c._ctx;
            if (f.dir === "next" && rr(f, !0) && f.limit > 0) {
              var h = f.valueMapper, g = Es(f, f.table.core.schema);
              return f.table.core.query({
                trans: u,
                limit: f.limit,
                values: !0,
                query: {
                  index: g,
                  range: f.range
                }
              }).then(function(m) {
                var E = m.result;
                return h ? E.map(h) : E;
              });
            } else {
              var y = [];
              return xs(f, function(m) {
                return y.push(m);
              }, u, f.table.core).then(function() {
                return y;
              });
            }
          }, i);
        }, s.prototype.offset = function(i) {
          var c = this._ctx;
          return i <= 0 ? this : (c.offset += i, rr(c) ? Ui(c, function() {
            var u = i;
            return function(f, h) {
              return u === 0 ? !0 : u === 1 ? (--u, !1) : (h(function() {
                f.advance(u), u = 0;
              }), !1);
            };
          }) : Ui(c, function() {
            var u = i;
            return function() {
              return --u < 0;
            };
          }), this);
        }, s.prototype.limit = function(i) {
          return this._ctx.limit = Math.min(this._ctx.limit, i), Ui(this._ctx, function() {
            var c = i;
            return function(u, f, h) {
              return --c <= 0 && f(h), c >= 0;
            };
          }, !0), this;
        }, s.prototype.until = function(i, c) {
          return Ri(this._ctx, function(u, f, h) {
            return i(u.value) ? (f(h), c) : !0;
          }), this;
        }, s.prototype.first = function(i) {
          return this.limit(1).toArray(function(c) {
            return c[0];
          }).then(i);
        }, s.prototype.last = function(i) {
          return this.reverse().first(i);
        }, s.prototype.filter = function(i) {
          return Ri(this._ctx, function(c) {
            return i(c.value);
          }), El(this._ctx, i), this;
        }, s.prototype.and = function(i) {
          return this.filter(i);
        }, s.prototype.or = function(i) {
          return new this.db.WhereClause(this._ctx.table, i, this);
        }, s.prototype.reverse = function() {
          return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
        }, s.prototype.desc = function() {
          return this.reverse();
        }, s.prototype.eachKey = function(i) {
          var c = this._ctx;
          return c.keysOnly = !c.isMatch, this.each(function(u, f) {
            i(f.key, f);
          });
        }, s.prototype.eachUniqueKey = function(i) {
          return this._ctx.unique = "unique", this.eachKey(i);
        }, s.prototype.eachPrimaryKey = function(i) {
          var c = this._ctx;
          return c.keysOnly = !c.isMatch, this.each(function(u, f) {
            i(f.primaryKey, f);
          });
        }, s.prototype.keys = function(i) {
          var c = this._ctx;
          c.keysOnly = !c.isMatch;
          var u = [];
          return this.each(function(f, h) {
            u.push(h.key);
          }).then(function() {
            return u;
          }).then(i);
        }, s.prototype.primaryKeys = function(i) {
          var c = this._ctx;
          if (c.dir === "next" && rr(c, !0) && c.limit > 0)
            return this._read(function(f) {
              var h = Es(c, c.table.core.schema);
              return c.table.core.query({
                trans: f,
                values: !1,
                limit: c.limit,
                query: {
                  index: h,
                  range: c.range
                }
              });
            }).then(function(f) {
              var h = f.result;
              return h;
            }).then(i);
          c.keysOnly = !c.isMatch;
          var u = [];
          return this.each(function(f, h) {
            u.push(h.primaryKey);
          }).then(function() {
            return u;
          }).then(i);
        }, s.prototype.uniqueKeys = function(i) {
          return this._ctx.unique = "unique", this.keys(i);
        }, s.prototype.firstKey = function(i) {
          return this.limit(1).keys(function(c) {
            return c[0];
          }).then(i);
        }, s.prototype.lastKey = function(i) {
          return this.reverse().firstKey(i);
        }, s.prototype.distinct = function() {
          var i = this._ctx, c = i.index && i.table.schema.idxByName[i.index];
          if (!c || !c.multi)
            return this;
          var u = {};
          return Ri(this._ctx, function(f) {
            var h = f.primaryKey.toString(), g = D(u, h);
            return u[h] = !0, !g;
          }), this;
        }, s.prototype.modify = function(i) {
          var c = this, u = this._ctx;
          return this._write(function(f) {
            var h;
            typeof i == "function" ? h = i : h = function(R) {
              return xa(R, i);
            };
            var g = u.table.core, y = g.schema.primaryKey, m = y.outbound, E = y.extractKey, C = 200, S = c.db._options.modifyChunkSize;
            S && (typeof S == "object" ? C = S[g.name] || S["*"] || 200 : C = S);
            var N = [], z = 0, P = [], k = function(R, B) {
              var M = B.failures, $ = B.numFailures;
              z += R - $;
              for (var U = 0, J = d(M); U < J.length; U++) {
                var ee = J[U];
                N.push(M[ee]);
              }
            }, A = i === Da;
            return c.clone().primaryKeys().then(function(R) {
              var B = rr(u) && u.limit === 1 / 0 && (typeof i != "function" || A) && {
                index: u.index,
                range: u.range
              }, M = function($) {
                var U = Math.min(C, R.length - $), J = R.slice($, $ + U);
                return (A ? Promise.resolve([]) : g.getMany({
                  trans: f,
                  keys: J,
                  cache: "immutable"
                })).then(function(ee) {
                  var X = [], de = [], be = m ? [] : null, te = A ? J : [];
                  if (!A)
                    for (var we = 0; we < U; ++we) {
                      var he = ee[we], Ce = {
                        value: gt(he),
                        primKey: R[$ + we]
                      };
                      h.call(Ce, Ce.value, Ce) !== !1 && (Ce.value == null ? te.push(R[$ + we]) : !m && Pe(E(he), E(Ce.value)) !== 0 ? (te.push(R[$ + we]), X.push(Ce.value)) : (de.push(Ce.value), m && be.push(R[$ + we])));
                    }
                  return Promise.resolve(X.length > 0 && g.mutate({ trans: f, type: "add", values: X }).then(function(ae) {
                    for (var Fe in ae.failures)
                      te.splice(parseInt(Fe), 1);
                    k(X.length, ae);
                  })).then(function() {
                    return (de.length > 0 || B && typeof i == "object") && g.mutate({
                      trans: f,
                      type: "put",
                      keys: be,
                      values: de,
                      criteria: B,
                      changeSpec: typeof i != "function" && i,
                      isAdditionalChunk: $ > 0
                    }).then(function(ae) {
                      return k(de.length, ae);
                    });
                  }).then(function() {
                    return (te.length > 0 || B && A) && g.mutate({
                      trans: f,
                      type: "delete",
                      keys: te,
                      criteria: B,
                      isAdditionalChunk: $ > 0
                    }).then(function(ae) {
                      return _s(u.table, te, ae);
                    }).then(function(ae) {
                      return k(te.length, ae);
                    });
                  }).then(function() {
                    return R.length > $ + U && M($ + C);
                  });
                });
              };
              return M(0).then(function() {
                if (N.length > 0)
                  throw new L("Error modifying one or more objects", N, z, P);
                return R.length;
              });
            });
          });
        }, s.prototype.delete = function() {
          var i = this._ctx, c = i.range;
          return rr(i) && !i.table.schema.yProps && (i.isPrimKey || c.type === 3) ? this._write(function(u) {
            var f = i.table.core.schema.primaryKey, h = c;
            return i.table.core.count({ trans: u, query: { index: f, range: h } }).then(function(g) {
              return i.table.core.mutate({ trans: u, type: "deleteRange", range: h }).then(function(y) {
                var m = y.failures, E = y.numFailures;
                if (E)
                  throw new L("Could not delete some values", Object.keys(m).map(function(C) {
                    return m[C];
                  }), g - E);
                return g - E;
              });
            });
          }) : this.modify(Da);
        }, s;
      })(), Da = function(s, i) {
        return i.value = null;
      };
      function Sl(s) {
        return Pr(xl.prototype, function(c, u) {
          this.db = s;
          var f = wa, h = null;
          if (u)
            try {
              f = u();
            } catch (E) {
              h = E;
            }
          var g = c._ctx, y = g.table, m = y.hook.reading.fire;
          this._ctx = {
            table: y,
            index: g.index,
            isPrimKey: !g.index || y.schema.primKey.keyPath && g.index === y.schema.primKey.name,
            range: f,
            keysOnly: !1,
            dir: "next",
            unique: "",
            algorithm: null,
            filter: null,
            replayFilter: null,
            justLimit: !0,
            isMatch: null,
            offset: 0,
            limit: 1 / 0,
            error: h,
            or: g.or,
            valueMapper: m !== re ? m : null
          };
        });
      }
      function Pl(s, i) {
        return s < i ? -1 : s === i ? 0 : 1;
      }
      function Cl(s, i) {
        return s > i ? -1 : s === i ? 0 : 1;
      }
      function Et(s, i, c) {
        var u = s instanceof Ia ? new s.Collection(s) : s;
        return u._ctx.error = c ? new c(i) : new TypeError(i), u;
      }
      function sr(s) {
        return new s.Collection(s, function() {
          return ka("");
        }).limit(0);
      }
      function Dl(s) {
        return s === "next" ? function(i) {
          return i.toUpperCase();
        } : function(i) {
          return i.toLowerCase();
        };
      }
      function kl(s) {
        return s === "next" ? function(i) {
          return i.toLowerCase();
        } : function(i) {
          return i.toUpperCase();
        };
      }
      function Il(s, i, c, u, f, h) {
        for (var g = Math.min(s.length, u.length), y = -1, m = 0; m < g; ++m) {
          var E = i[m];
          if (E !== u[m])
            return f(s[m], c[m]) < 0 ? s.substr(0, m) + c[m] + c.substr(m + 1) : f(s[m], u[m]) < 0 ? s.substr(0, m) + u[m] + c.substr(m + 1) : y >= 0 ? s.substr(0, y) + i[y] + c.substr(y + 1) : null;
          f(s[m], E) < 0 && (y = m);
        }
        return g < u.length && h === "next" ? s + c.substr(s.length) : g < s.length && h === "prev" ? s.substr(0, c.length) : y < 0 ? null : s.substr(0, y) + u[y] + c.substr(y + 1);
      }
      function Ss(s, i, c, u) {
        var f, h, g, y, m, E, C, S = c.length;
        if (!c.every(function(k) {
          return typeof k == "string";
        }))
          return Et(s, va);
        function N(k) {
          f = Dl(k), h = kl(k), g = k === "next" ? Pl : Cl;
          var A = c.map(function(R) {
            return { lower: h(R), upper: f(R) };
          }).sort(function(R, B) {
            return g(R.lower, B.lower);
          });
          y = A.map(function(R) {
            return R.upper;
          }), m = A.map(function(R) {
            return R.lower;
          }), E = k, C = k === "next" ? "" : u;
        }
        N("next");
        var z = new s.Collection(s, function() {
          return _n(y[0], m[S - 1] + u);
        });
        z._ondirectionchange = function(k) {
          N(k);
        };
        var P = 0;
        return z._addAlgorithm(function(k, A, R) {
          var B = k.key;
          if (typeof B != "string")
            return !1;
          var M = h(B);
          if (i(M, m, P))
            return !0;
          for (var $ = null, U = P; U < S; ++U) {
            var J = Il(B, M, y[U], m[U], g, E);
            J === null && $ === null ? P = U + 1 : ($ === null || g($, J) > 0) && ($ = J);
          }
          return A($ !== null ? function() {
            k.continue($ + C);
          } : R), !1;
        }), z;
      }
      function _n(s, i, c, u) {
        return {
          type: 2,
          lower: s,
          upper: i,
          lowerOpen: c,
          upperOpen: u
        };
      }
      function ka(s) {
        return {
          type: 1,
          lower: s,
          upper: s
        };
      }
      var Ia = (function() {
        function s() {
        }
        return Object.defineProperty(s.prototype, "Collection", {
          get: function() {
            return this._ctx.table.db.Collection;
          },
          enumerable: !1,
          configurable: !0
        }), s.prototype.between = function(i, c, u, f) {
          u = u !== !1, f = f === !0;
          try {
            return this._cmp(i, c) > 0 || this._cmp(i, c) === 0 && (u || f) && !(u && f) ? sr(this) : new this.Collection(this, function() {
              return _n(i, c, !u, !f);
            });
          } catch {
            return Et(this, en);
          }
        }, s.prototype.equals = function(i) {
          return i == null ? Et(this, en) : new this.Collection(this, function() {
            return ka(i);
          });
        }, s.prototype.above = function(i) {
          return i == null ? Et(this, en) : new this.Collection(this, function() {
            return _n(i, void 0, !0);
          });
        }, s.prototype.aboveOrEqual = function(i) {
          return i == null ? Et(this, en) : new this.Collection(this, function() {
            return _n(i, void 0, !1);
          });
        }, s.prototype.below = function(i) {
          return i == null ? Et(this, en) : new this.Collection(this, function() {
            return _n(void 0, i, !1, !0);
          });
        }, s.prototype.belowOrEqual = function(i) {
          return i == null ? Et(this, en) : new this.Collection(this, function() {
            return _n(void 0, i);
          });
        }, s.prototype.startsWith = function(i) {
          return typeof i != "string" ? Et(this, va) : this.between(i, i + Fn, !0, !0);
        }, s.prototype.startsWithIgnoreCase = function(i) {
          return i === "" ? this.startsWith(i) : Ss(this, function(c, u) {
            return c.indexOf(u[0]) === 0;
          }, [i], Fn);
        }, s.prototype.equalsIgnoreCase = function(i) {
          return Ss(this, function(c, u) {
            return c === u[0];
          }, [i], "");
        }, s.prototype.anyOfIgnoreCase = function() {
          var i = Ve.apply(Ie, arguments);
          return i.length === 0 ? sr(this) : Ss(this, function(c, u) {
            return u.indexOf(c) !== -1;
          }, i, "");
        }, s.prototype.startsWithAnyOfIgnoreCase = function() {
          var i = Ve.apply(Ie, arguments);
          return i.length === 0 ? sr(this) : Ss(this, function(c, u) {
            return u.some(function(f) {
              return c.indexOf(f) === 0;
            });
          }, i, Fn);
        }, s.prototype.anyOf = function() {
          var i = this, c = Ve.apply(Ie, arguments), u = this._cmp;
          try {
            c.sort(u);
          } catch {
            return Et(this, en);
          }
          if (c.length === 0)
            return sr(this);
          var f = new this.Collection(this, function() {
            return _n(c[0], c[c.length - 1]);
          });
          f._ondirectionchange = function(g) {
            u = g === "next" ? i._ascending : i._descending, c.sort(u);
          };
          var h = 0;
          return f._addAlgorithm(function(g, y, m) {
            for (var E = g.key; u(E, c[h]) > 0; )
              if (++h, h === c.length)
                return y(m), !1;
            return u(E, c[h]) === 0 ? !0 : (y(function() {
              g.continue(c[h]);
            }), !1);
          }), f;
        }, s.prototype.notEqual = function(i) {
          return this.inAnyRange([[Ai, i], [i, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
        }, s.prototype.noneOf = function() {
          var i = Ve.apply(Ie, arguments);
          if (i.length === 0)
            return new this.Collection(this);
          try {
            i.sort(this._ascending);
          } catch {
            return Et(this, en);
          }
          var c = i.reduce(function(u, f) {
            return u ? u.concat([[u[u.length - 1][1], f]]) : [[Ai, f]];
          }, null);
          return c.push([i[i.length - 1], this.db._maxKey]), this.inAnyRange(c, { includeLowers: !1, includeUppers: !1 });
        }, s.prototype.inAnyRange = function(i, c) {
          var u = this, f = this._cmp, h = this._ascending, g = this._descending, y = this._min, m = this._max;
          if (i.length === 0)
            return sr(this);
          if (!i.every(function(U) {
            return U[0] !== void 0 && U[1] !== void 0 && h(U[0], U[1]) <= 0;
          }))
            return Et(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", I.InvalidArgument);
          var E = !c || c.includeLowers !== !1, C = c && c.includeUppers === !0;
          function S(U, J) {
            for (var ee = 0, X = U.length; ee < X; ++ee) {
              var de = U[ee];
              if (f(J[0], de[1]) < 0 && f(J[1], de[0]) > 0) {
                de[0] = y(de[0], J[0]), de[1] = m(de[1], J[1]);
                break;
              }
            }
            return ee === X && U.push(J), U;
          }
          var N = h;
          function z(U, J) {
            return N(U[0], J[0]);
          }
          var P;
          try {
            P = i.reduce(S, []), P.sort(z);
          } catch {
            return Et(this, en);
          }
          var k = 0, A = C ? function(U) {
            return h(U, P[k][1]) > 0;
          } : function(U) {
            return h(U, P[k][1]) >= 0;
          }, R = E ? function(U) {
            return g(U, P[k][0]) > 0;
          } : function(U) {
            return g(U, P[k][0]) >= 0;
          };
          function B(U) {
            return !A(U) && !R(U);
          }
          var M = A, $ = new this.Collection(this, function() {
            return _n(P[0][0], P[P.length - 1][1], !E, !C);
          });
          return $._ondirectionchange = function(U) {
            U === "next" ? (M = A, N = h) : (M = R, N = g), P.sort(z);
          }, $._addAlgorithm(function(U, J, ee) {
            for (var X = U.key; M(X); )
              if (++k, k === P.length)
                return J(ee), !1;
            return B(X) ? !0 : (u._cmp(X, P[k][1]) === 0 || u._cmp(X, P[k][0]) === 0 || J(function() {
              N === h ? U.continue(P[k][0]) : U.continue(P[k][1]);
            }), !1);
          }), $;
        }, s.prototype.startsWithAnyOf = function() {
          var i = Ve.apply(Ie, arguments);
          return i.every(function(c) {
            return typeof c == "string";
          }) ? i.length === 0 ? sr(this) : this.inAnyRange(i.map(function(c) {
            return [c, c + Fn];
          })) : Et(this, "startsWithAnyOf() only works with strings");
        }, s;
      })();
      function Ol(s) {
        return Pr(Ia.prototype, function(c, u, f) {
          if (this.db = s, this._ctx = {
            table: c,
            index: u === ":id" ? null : u,
            or: f
          }, this._cmp = this._ascending = Pe, this._descending = function(h, g) {
            return Pe(g, h);
          }, this._max = function(h, g) {
            return Pe(h, g) > 0 ? h : g;
          }, this._min = function(h, g) {
            return Pe(h, g) < 0 ? h : g;
          }, this._IDBKeyRange = s._deps.IDBKeyRange, !this._IDBKeyRange)
            throw new I.MissingAPI();
        });
      }
      function Kt(s) {
        return Be(function(i) {
          return Cr(i), s(i.target.error), !1;
        });
      }
      function Cr(s) {
        s.stopPropagation && s.stopPropagation(), s.preventDefault && s.preventDefault();
      }
      var Dr = "storagemutated", Bi = "x-storagemutated-1", En = Sr(null, Dr), Al = (function() {
        function s() {
        }
        return s.prototype._lock = function() {
          return Se(!ie.global), ++this._reculock, this._reculock === 1 && !ie.global && (ie.lockOwnerFor = this), this;
        }, s.prototype._unlock = function() {
          if (Se(!ie.global), --this._reculock === 0)
            for (ie.global || (ie.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked(); ) {
              var i = this._blockedFuncs.shift();
              try {
                Mn(i[1], i[0]);
              } catch {
              }
            }
          return this;
        }, s.prototype._locked = function() {
          return this._reculock && ie.lockOwnerFor !== this;
        }, s.prototype.create = function(i) {
          var c = this;
          if (!this.mode)
            return this;
          var u = this.db.idbdb, f = this.db._state.dbOpenError;
          if (Se(!this.idbtrans), !i && !u)
            switch (f && f.name) {
              case "DatabaseClosedError":
                throw new I.DatabaseClosed(f);
              case "MissingAPIError":
                throw new I.MissingAPI(f.message, f);
              default:
                throw new I.OpenFailed(f);
            }
          if (!this.active)
            throw new I.TransactionInactive();
          return Se(this._completion._state === null), i = this.idbtrans = i || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }) : u.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })), i.onerror = Be(function(h) {
            Cr(h), c._reject(i.error);
          }), i.onabort = Be(function(h) {
            Cr(h), c.active && c._reject(new I.Abort(i.error)), c.active = !1, c.on("abort").fire(h);
          }), i.oncomplete = Be(function() {
            c.active = !1, c._resolve(), "mutatedParts" in i && En.storagemutated.fire(i.mutatedParts);
          }), this;
        }, s.prototype._promise = function(i, c, u) {
          var f = this;
          if (i === "readwrite" && this.mode !== "readwrite")
            return Le(new I.ReadOnly("Transaction is readonly"));
          if (!this.active)
            return Le(new I.TransactionInactive());
          if (this._locked())
            return new Z(function(g, y) {
              f._blockedFuncs.push([function() {
                f._promise(i, c, u).then(g, y);
              }, ie]);
            });
          if (u)
            return vn(function() {
              var g = new Z(function(y, m) {
                f._lock();
                var E = c(y, m, f);
                E && E.then && E.then(y, m);
              });
              return g.finally(function() {
                return f._unlock();
              }), g._lib = !0, g;
            });
          var h = new Z(function(g, y) {
            var m = c(g, y, f);
            m && m.then && m.then(g, y);
          });
          return h._lib = !0, h;
        }, s.prototype._root = function() {
          return this.parent ? this.parent._root() : this;
        }, s.prototype.waitFor = function(i) {
          var c = this._root(), u = Z.resolve(i);
          if (c._waitingFor)
            c._waitingFor = c._waitingFor.then(function() {
              return u;
            });
          else {
            c._waitingFor = u, c._waitingQueue = [];
            var f = c.idbtrans.objectStore(c.storeNames[0]);
            (function g() {
              for (++c._spinCount; c._waitingQueue.length; )
                c._waitingQueue.shift()();
              c._waitingFor && (f.get(-1 / 0).onsuccess = g);
            })();
          }
          var h = c._waitingFor;
          return new Z(function(g, y) {
            u.then(function(m) {
              return c._waitingQueue.push(Be(g.bind(null, m)));
            }, function(m) {
              return c._waitingQueue.push(Be(y.bind(null, m)));
            }).finally(function() {
              c._waitingFor === h && (c._waitingFor = null);
            });
          });
        }, s.prototype.abort = function() {
          this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new I.Abort()));
        }, s.prototype.table = function(i) {
          var c = this._memoizedTables || (this._memoizedTables = {});
          if (D(c, i))
            return c[i];
          var u = this.schema[i];
          if (!u)
            throw new I.NotFound("Table " + i + " not part of transaction");
          var f = new this.db.Table(i, u, this);
          return f.core = this.db.core.table(i), c[i] = f, f;
        }, s;
      })();
      function Nl(s) {
        return Pr(Al.prototype, function(c, u, f, h, g) {
          var y = this;
          c !== "readonly" && u.forEach(function(m) {
            var E, C = (E = f[m]) === null || E === void 0 ? void 0 : E.yProps;
            C && (u = u.concat(C.map(function(S) {
              return S.updatesTable;
            })));
          }), this.db = s, this.mode = c, this.storeNames = u, this.schema = f, this.chromeTransactionDurability = h, this.idbtrans = null, this.on = Sr(this, "complete", "error", "abort"), this.parent = g || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Z(function(m, E) {
            y._resolve = m, y._reject = E;
          }), this._completion.then(function() {
            y.active = !1, y.on.complete.fire();
          }, function(m) {
            var E = y.active;
            return y.active = !1, y.on.error.fire(m), y.parent ? y.parent._reject(m) : E && y.idbtrans && y.idbtrans.abort(), Le(m);
          });
        });
      }
      function Mi(s, i, c, u, f, h, g, y) {
        return {
          name: s,
          keyPath: i,
          unique: c,
          multi: u,
          auto: f,
          compound: h,
          src: (c && !g ? "&" : "") + (u ? "*" : "") + (f ? "++" : "") + Oa(i),
          type: y
        };
      }
      function Oa(s) {
        return typeof s == "string" ? s : s ? "[" + [].join.call(s, "+") + "]" : "";
      }
      function Fi(s, i, c) {
        return {
          name: s,
          primKey: i,
          indexes: c,
          mappedClass: null,
          idxByName: He(c, function(u) {
            return [u.name, u];
          })
        };
      }
      function Tl(s) {
        return s.length === 1 ? s[0] : s;
      }
      var kr = function(s) {
        try {
          return s.only([[]]), kr = function() {
            return [[]];
          }, [[]];
        } catch {
          return kr = function() {
            return Fn;
          }, Fn;
        }
      };
      function $i(s) {
        return s == null ? function() {
        } : typeof s == "string" ? Rl(s) : function(i) {
          return Re(i, s);
        };
      }
      function Rl(s) {
        var i = s.split(".");
        return i.length === 1 ? function(c) {
          return c[s];
        } : function(c) {
          return Re(c, s);
        };
      }
      function Aa(s) {
        return [].slice.call(s);
      }
      var Ul = 0;
      function Ir(s) {
        return s == null ? ":id" : typeof s == "string" ? s : "[".concat(s.join("+"), "]");
      }
      function Bl(s, i, c) {
        function u(S, N) {
          var z = Aa(S.objectStoreNames);
          return {
            schema: {
              name: S.name,
              tables: z.map(function(P) {
                return N.objectStore(P);
              }).map(function(P) {
                var k = P.keyPath, A = P.autoIncrement, R = p(k), B = k == null, M = {}, $ = {
                  name: P.name,
                  primaryKey: {
                    name: null,
                    isPrimaryKey: !0,
                    outbound: B,
                    compound: R,
                    keyPath: k,
                    autoIncrement: A,
                    unique: !0,
                    extractKey: $i(k)
                  },
                  indexes: Aa(P.indexNames).map(function(U) {
                    return P.index(U);
                  }).map(function(U) {
                    var J = U.name, ee = U.unique, X = U.multiEntry, de = U.keyPath, be = p(de), te = {
                      name: J,
                      compound: be,
                      keyPath: de,
                      unique: ee,
                      multiEntry: X,
                      extractKey: $i(de)
                    };
                    return M[Ir(de)] = te, te;
                  }),
                  getIndexByKeyPath: function(U) {
                    return M[Ir(U)];
                  }
                };
                return M[":id"] = $.primaryKey, k != null && (M[Ir(k)] = $.primaryKey), $;
              })
            },
            hasGetAll: z.length > 0 && "getAll" in N.objectStore(z[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
          };
        }
        function f(S) {
          if (S.type === 3)
            return null;
          if (S.type === 4)
            throw new Error("Cannot convert never type to IDBKeyRange");
          var N = S.lower, z = S.upper, P = S.lowerOpen, k = S.upperOpen, A = N === void 0 ? z === void 0 ? null : i.upperBound(z, !!k) : z === void 0 ? i.lowerBound(N, !!P) : i.bound(N, z, !!P, !!k);
          return A;
        }
        function h(S) {
          var N = S.name;
          function z(A) {
            var R = A.trans, B = A.type, M = A.keys, $ = A.values, U = A.range;
            return new Promise(function(J, ee) {
              J = Be(J);
              var X = R.objectStore(N), de = X.keyPath == null, be = B === "put" || B === "add";
              if (!be && B !== "delete" && B !== "deleteRange")
                throw new Error("Invalid operation type: " + B);
              var te = (M || $ || { length: 1 }).length;
              if (M && $ && M.length !== $.length)
                throw new Error("Given keys array must have same length as given values array.");
              if (te === 0)
                return J({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              var we, he = [], Ce = [], ae = 0, Fe = function(jt) {
                ++ae, Cr(jt);
              };
              if (B === "deleteRange") {
                if (U.type === 4)
                  return J({ numFailures: ae, failures: Ce, results: [], lastResult: void 0 });
                U.type === 3 ? he.push(we = X.clear()) : he.push(we = X.delete(f(U)));
              } else {
                var ut = be ? de ? [$, M] : [$, null] : [M, null], Lt = ut[0], wt = ut[1];
                if (be)
                  for (var kt = 0; kt < te; ++kt)
                    he.push(we = wt && wt[kt] !== void 0 ? X[B](Lt[kt], wt[kt]) : X[B](Lt[kt])), we.onerror = Fe;
                else
                  for (var kt = 0; kt < te; ++kt)
                    he.push(we = X[B](Lt[kt])), we.onerror = Fe;
              }
              var Pn = function(jt) {
                var Nr = jt.target.result;
                he.forEach(function(Ot, Bs) {
                  return Ot.error != null && (Ce[Bs] = Ot.error);
                }), J({
                  numFailures: ae,
                  failures: Ce,
                  results: B === "delete" ? M : he.map(function(Ot) {
                    return Ot.result;
                  }),
                  lastResult: Nr
                });
              };
              we.onerror = function(jt) {
                Fe(jt), Pn(jt);
              }, we.onsuccess = Pn;
            });
          }
          function P(A) {
            var R = A.trans, B = A.values, M = A.query, $ = A.reverse, U = A.unique;
            return new Promise(function(J, ee) {
              J = Be(J);
              var X = M.index, de = M.range, be = R.objectStore(N), te = X.isPrimaryKey ? be : be.index(X.name), we = $ ? U ? "prevunique" : "prev" : U ? "nextunique" : "next", he = B || !("openKeyCursor" in te) ? te.openCursor(f(de), we) : te.openKeyCursor(f(de), we);
              he.onerror = Kt(ee), he.onsuccess = Be(function(Ce) {
                var ae = he.result;
                if (!ae) {
                  J(null);
                  return;
                }
                ae.___id = ++Ul, ae.done = !1;
                var Fe = ae.continue.bind(ae), ut = ae.continuePrimaryKey;
                ut && (ut = ut.bind(ae));
                var Lt = ae.advance.bind(ae), wt = function() {
                  throw new Error("Cursor not started");
                }, kt = function() {
                  throw new Error("Cursor not stopped");
                };
                ae.trans = R, ae.stop = ae.continue = ae.continuePrimaryKey = ae.advance = wt, ae.fail = Be(ee), ae.next = function() {
                  var Pn = this, jt = 1;
                  return this.start(function() {
                    return jt-- ? Pn.continue() : Pn.stop();
                  }).then(function() {
                    return Pn;
                  });
                }, ae.start = function(Pn) {
                  var jt = new Promise(function(Ot, Bs) {
                    Ot = Be(Ot), he.onerror = Kt(Bs), ae.fail = Bs, ae.stop = function(Sf) {
                      ae.stop = ae.continue = ae.continuePrimaryKey = ae.advance = kt, Ot(Sf);
                    };
                  }), Nr = function() {
                    if (he.result)
                      try {
                        Pn();
                      } catch (Ot) {
                        ae.fail(Ot);
                      }
                    else
                      ae.done = !0, ae.start = function() {
                        throw new Error("Cursor behind last entry");
                      }, ae.stop();
                  };
                  return he.onsuccess = Be(function(Ot) {
                    he.onsuccess = Nr, Nr();
                  }), ae.continue = Fe, ae.continuePrimaryKey = ut, ae.advance = Lt, Nr(), jt;
                }, J(ae);
              }, ee);
            });
          }
          function k(A) {
            return function(R) {
              return new Promise(function(B, M) {
                B = Be(B);
                var $ = R.trans, U = R.values, J = R.limit, ee = R.query, X = J === 1 / 0 ? void 0 : J, de = ee.index, be = ee.range, te = $.objectStore(N), we = de.isPrimaryKey ? te : te.index(de.name), he = f(be);
                if (J === 0)
                  return B({ result: [] });
                if (A) {
                  var Ce = U ? we.getAll(he, X) : we.getAllKeys(he, X);
                  Ce.onsuccess = function(Lt) {
                    return B({ result: Lt.target.result });
                  }, Ce.onerror = Kt(M);
                } else {
                  var ae = 0, Fe = U || !("openKeyCursor" in we) ? we.openCursor(he) : we.openKeyCursor(he), ut = [];
                  Fe.onsuccess = function(Lt) {
                    var wt = Fe.result;
                    if (!wt)
                      return B({ result: ut });
                    if (ut.push(U ? wt.value : wt.primaryKey), ++ae === J)
                      return B({ result: ut });
                    wt.continue();
                  }, Fe.onerror = Kt(M);
                }
              });
            };
          }
          return {
            name: N,
            schema: S,
            mutate: z,
            getMany: function(A) {
              var R = A.trans, B = A.keys;
              return new Promise(function(M, $) {
                M = Be(M);
                for (var U = R.objectStore(N), J = B.length, ee = new Array(J), X = 0, de = 0, be, te = function(ae) {
                  var Fe = ae.target;
                  (ee[Fe._pos] = Fe.result) != null, ++de === X && M(ee);
                }, we = Kt($), he = 0; he < J; ++he) {
                  var Ce = B[he];
                  Ce != null && (be = U.get(B[he]), be._pos = he, be.onsuccess = te, be.onerror = we, ++X);
                }
                X === 0 && M(ee);
              });
            },
            get: function(A) {
              var R = A.trans, B = A.key;
              return new Promise(function(M, $) {
                M = Be(M);
                var U = R.objectStore(N), J = U.get(B);
                J.onsuccess = function(ee) {
                  return M(ee.target.result);
                }, J.onerror = Kt($);
              });
            },
            query: k(m),
            openCursor: P,
            count: function(A) {
              var R = A.query, B = A.trans, M = R.index, $ = R.range;
              return new Promise(function(U, J) {
                var ee = B.objectStore(N), X = M.isPrimaryKey ? ee : ee.index(M.name), de = f($), be = de ? X.count(de) : X.count();
                be.onsuccess = Be(function(te) {
                  return U(te.target.result);
                }), be.onerror = Kt(J);
              });
            }
          };
        }
        var g = u(s, c), y = g.schema, m = g.hasGetAll, E = y.tables.map(function(S) {
          return h(S);
        }), C = {};
        return E.forEach(function(S) {
          return C[S.name] = S;
        }), {
          stack: "dbcore",
          transaction: s.transaction.bind(s),
          table: function(S) {
            var N = C[S];
            if (!N)
              throw new Error("Table '".concat(S, "' not found"));
            return C[S];
          },
          MIN_KEY: -1 / 0,
          MAX_KEY: kr(i),
          schema: y
        };
      }
      function Ml(s, i) {
        return i.reduce(function(c, u) {
          var f = u.create;
          return o(o({}, c), f(c));
        }, s);
      }
      function Fl(s, i, c, u) {
        var f = c.IDBKeyRange;
        c.indexedDB;
        var h = Ml(Bl(i, f, u), s.dbcore);
        return {
          dbcore: h
        };
      }
      function Ps(s, i) {
        var c = i.db, u = Fl(s._middlewares, c, s._deps, i);
        s.core = u.dbcore, s.tables.forEach(function(f) {
          var h = f.name;
          s.core.schema.tables.some(function(g) {
            return g.name === h;
          }) && (f.core = s.core.table(h), s[h] instanceof s.Table && (s[h].core = f.core));
        });
      }
      function Cs(s, i, c, u) {
        c.forEach(function(f) {
          var h = u[f];
          i.forEach(function(g) {
            var y = oe(g, f);
            (!y || "value" in y && y.value === void 0) && (g === s.Transaction.prototype || g instanceof s.Transaction ? H(g, f, {
              get: function() {
                return this.table(f);
              },
              set: function(m) {
                Q(this, f, { value: m, writable: !0, configurable: !0, enumerable: !0 });
              }
            }) : g[f] = new s.Table(f, h));
          });
        });
      }
      function Vi(s, i) {
        i.forEach(function(c) {
          for (var u in c)
            c[u] instanceof s.Table && delete c[u];
        });
      }
      function $l(s, i) {
        return s._cfg.version - i._cfg.version;
      }
      function Vl(s, i, c, u) {
        var f = s._dbSchema;
        c.objectStoreNames.contains("$meta") && !f.$meta && (f.$meta = Fi("$meta", Ta("")[0], []), s._storeNames.push("$meta"));
        var h = s._createTransaction("readwrite", s._storeNames, f);
        h.create(c), h._completion.catch(u);
        var g = h._reject.bind(h), y = ie.transless || ie;
        vn(function() {
          if (ie.trans = h, ie.transless = y, i === 0)
            d(f).forEach(function(m) {
              Li(c, m, f[m].primKey, f[m].indexes);
            }), Ps(s, c), Z.follow(function() {
              return s.on.populate.fire(h);
            }).catch(g);
          else
            return Ps(s, c), Ll(s, h, i).then(function(m) {
              return jl(s, m, h, c);
            }).catch(g);
        });
      }
      function Kl(s, i) {
        Na(s._dbSchema, i), i.db.version % 10 === 0 && !i.objectStoreNames.contains("$meta") && i.db.createObjectStore("$meta").add(Math.ceil(i.db.version / 10 - 1), "version");
        var c = ks(s, s.idbdb, i);
        Is(s, s._dbSchema, i);
        for (var u = Ki(c, s._dbSchema), f = function(E) {
          if (E.change.length || E.recreate)
            return console.warn("Unable to patch indexes of table ".concat(E.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
          var C = i.objectStore(E.name);
          E.add.forEach(function(S) {
            Ke && console.debug("Dexie upgrade patch: Creating missing index ".concat(E.name, ".").concat(S.src)), Ds(C, S);
          });
        }, h = 0, g = u.change; h < g.length; h++) {
          var y = g[h], m = f(y);
          if (typeof m == "object")
            return m.value;
        }
      }
      function Ll(s, i, c) {
        return i.storeNames.includes("$meta") ? i.table("$meta").get("version").then(function(u) {
          return u ?? c;
        }) : Z.resolve(c);
      }
      function jl(s, i, c, u) {
        var f = [], h = s._versions, g = s._dbSchema = ks(s, s.idbdb, u), y = h.filter(function(E) {
          return E._cfg.version >= i;
        });
        if (y.length === 0)
          return Z.resolve();
        y.forEach(function(E) {
          f.push(function() {
            var C = g, S = E._cfg.dbschema;
            Is(s, C, u), Is(s, S, u), g = s._dbSchema = S;
            var N = Ki(C, S);
            N.add.forEach(function(B) {
              Li(u, B[0], B[1].primKey, B[1].indexes);
            }), N.change.forEach(function(B) {
              if (B.recreate)
                throw new I.Upgrade("Not yet support for changing primary key");
              var M = u.objectStore(B.name);
              B.add.forEach(function($) {
                return Ds(M, $);
              }), B.change.forEach(function($) {
                M.deleteIndex($.name), Ds(M, $);
              }), B.del.forEach(function($) {
                return M.deleteIndex($);
              });
            });
            var z = E._cfg.contentUpgrade;
            if (z && E._cfg.version > i) {
              Ps(s, u), c._memoizedTables = {};
              var P = it(S);
              N.del.forEach(function(B) {
                P[B] = C[B];
              }), Vi(s, [s.Transaction.prototype]), Cs(s, [s.Transaction.prototype], d(P), P), c.schema = P;
              var k = Xt(z);
              k && tr();
              var A, R = Z.follow(function() {
                if (A = z(c), A && k) {
                  var B = wn.bind(null, null);
                  A.then(B, B);
                }
              });
              return A && typeof A.then == "function" ? Z.resolve(A) : R.then(function() {
                return A;
              });
            }
          }), f.push(function(C) {
            var S = E._cfg.dbschema;
            Hl(S, C), Vi(s, [s.Transaction.prototype]), Cs(s, [s.Transaction.prototype], s._storeNames, s._dbSchema), c.schema = s._dbSchema;
          }), f.push(function(C) {
            s.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(s.idbdb.version / 10) === E._cfg.version ? (s.idbdb.deleteObjectStore("$meta"), delete s._dbSchema.$meta, s._storeNames = s._storeNames.filter(function(S) {
              return S !== "$meta";
            })) : C.objectStore("$meta").put(E._cfg.version, "version"));
          });
        });
        function m() {
          return f.length ? Z.resolve(f.shift()(c.idbtrans)).then(m) : Z.resolve();
        }
        return m().then(function() {
          Na(g, u);
        });
      }
      function Ki(s, i) {
        var c = {
          del: [],
          add: [],
          change: []
        }, u;
        for (u in s)
          i[u] || c.del.push(u);
        for (u in i) {
          var f = s[u], h = i[u];
          if (!f)
            c.add.push([u, h]);
          else {
            var g = {
              name: u,
              def: h,
              recreate: !1,
              del: [],
              add: [],
              change: []
            };
            if ("" + (f.primKey.keyPath || "") != "" + (h.primKey.keyPath || "") || f.primKey.auto !== h.primKey.auto)
              g.recreate = !0, c.change.push(g);
            else {
              var y = f.idxByName, m = h.idxByName, E = void 0;
              for (E in y)
                m[E] || g.del.push(E);
              for (E in m) {
                var C = y[E], S = m[E];
                C ? C.src !== S.src && g.change.push(S) : g.add.push(S);
              }
              (g.del.length > 0 || g.add.length > 0 || g.change.length > 0) && c.change.push(g);
            }
          }
        }
        return c;
      }
      function Li(s, i, c, u) {
        var f = s.db.createObjectStore(i, c.keyPath ? { keyPath: c.keyPath, autoIncrement: c.auto } : { autoIncrement: c.auto });
        return u.forEach(function(h) {
          return Ds(f, h);
        }), f;
      }
      function Na(s, i) {
        d(s).forEach(function(c) {
          i.db.objectStoreNames.contains(c) || (Ke && console.debug("Dexie: Creating missing table", c), Li(i, c, s[c].primKey, s[c].indexes));
        });
      }
      function Hl(s, i) {
        [].slice.call(i.db.objectStoreNames).forEach(function(c) {
          return s[c] == null && i.db.deleteObjectStore(c);
        });
      }
      function Ds(s, i) {
        s.createIndex(i.name, i.keyPath, { unique: i.unique, multiEntry: i.multi });
      }
      function ks(s, i, c) {
        var u = {}, f = xe(i.objectStoreNames, 0);
        return f.forEach(function(h) {
          for (var g = c.objectStore(h), y = g.keyPath, m = Mi(Oa(y), y || "", !0, !1, !!g.autoIncrement, y && typeof y != "string", !0), E = [], C = 0; C < g.indexNames.length; ++C) {
            var S = g.index(g.indexNames[C]);
            y = S.keyPath;
            var N = Mi(S.name, y, !!S.unique, !!S.multiEntry, !1, y && typeof y != "string", !1);
            E.push(N);
          }
          u[h] = Fi(h, m, E);
        }), u;
      }
      function zl(s, i, c) {
        s.verno = i.version / 10;
        var u = s._dbSchema = ks(s, i, c);
        s._storeNames = xe(i.objectStoreNames, 0), Cs(s, [s._allTables], d(u), u);
      }
      function Gl(s, i) {
        var c = ks(s, s.idbdb, i), u = Ki(c, s._dbSchema);
        return !(u.add.length || u.change.some(function(f) {
          return f.add.length || f.change.length;
        }));
      }
      function Is(s, i, c) {
        for (var u = c.db.objectStoreNames, f = 0; f < u.length; ++f) {
          var h = u[f], g = c.objectStore(h);
          s._hasGetAll = "getAll" in g;
          for (var y = 0; y < g.indexNames.length; ++y) {
            var m = g.indexNames[y], E = g.index(m).keyPath, C = typeof E == "string" ? E : "[" + xe(E).join("+") + "]";
            if (i[h]) {
              var S = i[h].idxByName[C];
              S && (S.name = m, delete i[h].idxByName[C], i[h].idxByName[m] = S);
            }
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && l.WorkerGlobalScope && l instanceof l.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (s._hasGetAll = !1);
      }
      function Ta(s) {
        return s.split(",").map(function(i, c) {
          var u, f = i.split(":"), h = (u = f[1]) === null || u === void 0 ? void 0 : u.trim();
          i = f[0].trim();
          var g = i.replace(/([&*]|\+\+)/g, ""), y = /^\[/.test(g) ? g.match(/^\[(.*)\]$/)[1].split("+") : g;
          return Mi(g, y || null, /\&/.test(i), /\*/.test(i), /\+\+/.test(i), p(y), c === 0, h);
        });
      }
      var ql = (function() {
        function s() {
        }
        return s.prototype._createTableSchema = function(i, c, u) {
          return Fi(i, c, u);
        }, s.prototype._parseIndexSyntax = function(i) {
          return Ta(i);
        }, s.prototype._parseStoresSpec = function(i, c) {
          var u = this;
          d(i).forEach(function(f) {
            if (i[f] !== null) {
              var h = u._parseIndexSyntax(i[f]), g = h.shift();
              if (!g)
                throw new I.Schema("Invalid schema for table " + f + ": " + i[f]);
              if (g.unique = !0, g.multi)
                throw new I.Schema("Primary key cannot be multiEntry*");
              h.forEach(function(m) {
                if (m.auto)
                  throw new I.Schema("Only primary key can be marked as autoIncrement (++)");
                if (!m.keyPath)
                  throw new I.Schema("Index must have a name and cannot be an empty string");
              });
              var y = u._createTableSchema(f, g, h);
              c[f] = y;
            }
          });
        }, s.prototype.stores = function(i) {
          var c = this.db;
          this._cfg.storesSource = this._cfg.storesSource ? _(this._cfg.storesSource, i) : i;
          var u = c._versions, f = {}, h = {};
          return u.forEach(function(g) {
            _(f, g._cfg.storesSource), h = g._cfg.dbschema = {}, g._parseStoresSpec(f, h);
          }), c._dbSchema = h, Vi(c, [c._allTables, c, c.Transaction.prototype]), Cs(c, [c._allTables, c, c.Transaction.prototype, this._cfg.tables], d(h), h), c._storeNames = d(h), this;
        }, s.prototype.upgrade = function(i) {
          return this._cfg.contentUpgrade = mt(this._cfg.contentUpgrade || K, i), this;
        }, s;
      })();
      function Wl(s) {
        return Pr(ql.prototype, function(c) {
          this.db = s, this._cfg = {
            version: c,
            storesSource: null,
            dbschema: {},
            tables: {},
            contentUpgrade: null
          };
        });
      }
      function ji(s, i) {
        var c = s._dbNamesDB;
        return c || (c = s._dbNamesDB = new tn(ws, {
          addons: [],
          indexedDB: s,
          IDBKeyRange: i
        }), c.version(1).stores({ dbnames: "name" })), c.table("dbnames");
      }
      function Hi(s) {
        return s && typeof s.databases == "function";
      }
      function Ql(s) {
        var i = s.indexedDB, c = s.IDBKeyRange;
        return Hi(i) ? Promise.resolve(i.databases()).then(function(u) {
          return u.map(function(f) {
            return f.name;
          }).filter(function(f) {
            return f !== ws;
          });
        }) : ji(i, c).toCollection().primaryKeys();
      }
      function Yl(s, i) {
        var c = s.indexedDB, u = s.IDBKeyRange;
        !Hi(c) && i !== ws && ji(c, u).put({ name: i }).catch(K);
      }
      function Jl(s, i) {
        var c = s.indexedDB, u = s.IDBKeyRange;
        !Hi(c) && i !== ws && ji(c, u).delete(i).catch(K);
      }
      function zi(s) {
        return vn(function() {
          return ie.letThrough = !0, s();
        });
      }
      function Xl() {
        var s = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
        if (!s || !indexedDB.databases)
          return Promise.resolve();
        var i;
        return new Promise(function(c) {
          var u = function() {
            return indexedDB.databases().finally(c);
          };
          i = setInterval(u, 100), u();
        }).finally(function() {
          return clearInterval(i);
        });
      }
      var Gi;
      function qi(s) {
        return !("from" in s);
      }
      var ct = function(s, i) {
        if (this)
          _(this, arguments.length ? { d: 1, from: s, to: arguments.length > 1 ? i : s } : { d: 0 });
        else {
          var c = new ct();
          return s && "d" in s && _(c, s), c;
        }
      };
      O(ct.prototype, (Gi = {
        add: function(s) {
          return Ar(this, s), this;
        },
        addKey: function(s) {
          return Or(this, s, s), this;
        },
        addKeys: function(s) {
          var i = this;
          return s.forEach(function(c) {
            return Or(i, c, c);
          }), this;
        },
        hasKey: function(s) {
          var i = Os(this).next(s).value;
          return i && Pe(i.from, s) <= 0 && Pe(i.to, s) >= 0;
        }
      }, Gi[hn] = function() {
        return Os(this);
      }, Gi));
      function Or(s, i, c) {
        var u = Pe(i, c);
        if (!isNaN(u)) {
          if (u > 0)
            throw RangeError();
          if (qi(s))
            return _(s, { from: i, to: c, d: 1 });
          var f = s.l, h = s.r;
          if (Pe(c, s.from) < 0)
            return f ? Or(f, i, c) : s.l = { from: i, to: c, d: 1, l: null, r: null }, Ua(s);
          if (Pe(i, s.to) > 0)
            return h ? Or(h, i, c) : s.r = { from: i, to: c, d: 1, l: null, r: null }, Ua(s);
          Pe(i, s.from) < 0 && (s.from = i, s.l = null, s.d = h ? h.d + 1 : 1), Pe(c, s.to) > 0 && (s.to = c, s.r = null, s.d = s.l ? s.l.d + 1 : 1);
          var g = !s.r;
          f && !s.l && Ar(s, f), h && g && Ar(s, h);
        }
      }
      function Ar(s, i) {
        function c(u, f) {
          var h = f.from, g = f.to, y = f.l, m = f.r;
          Or(u, h, g), y && c(u, y), m && c(u, m);
        }
        qi(i) || c(s, i);
      }
      function Ra(s, i) {
        var c = Os(i), u = c.next();
        if (u.done)
          return !1;
        for (var f = u.value, h = Os(s), g = h.next(f.from), y = g.value; !u.done && !g.done; ) {
          if (Pe(y.from, f.to) <= 0 && Pe(y.to, f.from) >= 0)
            return !0;
          Pe(f.from, y.from) < 0 ? f = (u = c.next(y.from)).value : y = (g = h.next(f.from)).value;
        }
        return !1;
      }
      function Os(s) {
        var i = qi(s) ? null : { s: 0, n: s };
        return {
          next: function(c) {
            for (var u = arguments.length > 0; i; )
              switch (i.s) {
                case 0:
                  if (i.s = 1, u)
                    for (; i.n.l && Pe(c, i.n.from) < 0; )
                      i = { up: i, n: i.n.l, s: 1 };
                  else
                    for (; i.n.l; )
                      i = { up: i, n: i.n.l, s: 1 };
                case 1:
                  if (i.s = 2, !u || Pe(c, i.n.to) <= 0)
                    return { value: i.n, done: !1 };
                case 2:
                  if (i.n.r) {
                    i.s = 3, i = { up: i, n: i.n.r, s: 0 };
                    continue;
                  }
                case 3:
                  i = i.up;
              }
            return { done: !0 };
          }
        };
      }
      function Ua(s) {
        var i, c, u = (((i = s.r) === null || i === void 0 ? void 0 : i.d) || 0) - (((c = s.l) === null || c === void 0 ? void 0 : c.d) || 0), f = u > 1 ? "r" : u < -1 ? "l" : "";
        if (f) {
          var h = f === "r" ? "l" : "r", g = o({}, s), y = s[f];
          s.from = y.from, s.to = y.to, s[f] = y[f], g[f] = y[h], s[h] = g, g.d = Ba(g);
        }
        s.d = Ba(s);
      }
      function Ba(s) {
        var i = s.r, c = s.l;
        return (i ? c ? Math.max(i.d, c.d) : i.d : c ? c.d : 0) + 1;
      }
      function As(s, i) {
        return d(i).forEach(function(c) {
          s[c] ? Ar(s[c], i[c]) : s[c] = me(i[c]);
        }), s;
      }
      function Wi(s, i) {
        return s.all || i.all || Object.keys(s).some(function(c) {
          return i[c] && Ra(i[c], s[c]);
        });
      }
      var Vn = {}, Qi = {}, Yi = !1;
      function Ns(s, i) {
        As(Qi, s), Yi || (Yi = !0, setTimeout(function() {
          Yi = !1;
          var c = Qi;
          Qi = {}, Ji(c, !1);
        }, 0));
      }
      function Ji(s, i) {
        i === void 0 && (i = !1);
        var c = /* @__PURE__ */ new Set();
        if (s.all)
          for (var u = 0, f = Object.values(Vn); u < f.length; u++) {
            var h = f[u];
            Ma(h, s, c, i);
          }
        else
          for (var g in s) {
            var y = /^idb\:\/\/(.*)\/(.*)\//.exec(g);
            if (y) {
              var m = y[1], E = y[2], h = Vn["idb://".concat(m, "/").concat(E)];
              h && Ma(h, s, c, i);
            }
          }
        c.forEach(function(C) {
          return C();
        });
      }
      function Ma(s, i, c, u) {
        for (var f = [], h = 0, g = Object.entries(s.queries.query); h < g.length; h++) {
          for (var y = g[h], m = y[0], E = y[1], C = [], S = 0, N = E; S < N.length; S++) {
            var z = N[S];
            Wi(i, z.obsSet) ? z.subscribers.forEach(function(R) {
              return c.add(R);
            }) : u && C.push(z);
          }
          u && f.push([m, C]);
        }
        if (u)
          for (var P = 0, k = f; P < k.length; P++) {
            var A = k[P], m = A[0], C = A[1];
            s.queries.query[m] = C;
          }
      }
      function Zl(s) {
        var i = s._state, c = s._deps.indexedDB;
        if (i.isBeingOpened || s.idbdb)
          return i.dbReadyPromise.then(function() {
            return i.dbOpenError ? Le(i.dbOpenError) : s;
          });
        i.isBeingOpened = !0, i.dbOpenError = null, i.openComplete = !1;
        var u = i.openCanceller, f = Math.round(s.verno * 10), h = !1;
        function g() {
          if (i.openCanceller !== u)
            throw new I.DatabaseClosed("db.open() was cancelled");
        }
        var y = i.dbReadyResolve, m = null, E = !1, C = function() {
          return new Z(function(S, N) {
            if (g(), !c)
              throw new I.MissingAPI();
            var z = s.name, P = i.autoSchema || !f ? c.open(z) : c.open(z, f);
            if (!P)
              throw new I.MissingAPI();
            P.onerror = Kt(N), P.onblocked = Be(s._fireOnBlocked), P.onupgradeneeded = Be(function(k) {
              if (m = P.transaction, i.autoSchema && !s._options.allowEmptyDB) {
                P.onerror = Cr, m.abort(), P.result.close();
                var A = c.deleteDatabase(z);
                A.onsuccess = A.onerror = Be(function() {
                  N(new I.NoSuchDatabase("Database ".concat(z, " doesnt exist")));
                });
              } else {
                m.onerror = Kt(N);
                var R = k.oldVersion > Math.pow(2, 62) ? 0 : k.oldVersion;
                E = R < 1, s.idbdb = P.result, h && Kl(s, m), Vl(s, R / 10, m, N);
              }
            }, N), P.onsuccess = Be(function() {
              m = null;
              var k = s.idbdb = P.result, A = xe(k.objectStoreNames);
              if (A.length > 0)
                try {
                  var R = k.transaction(Tl(A), "readonly");
                  if (i.autoSchema)
                    zl(s, k, R);
                  else if (Is(s, s._dbSchema, R), !Gl(s, R) && !h)
                    return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), k.close(), f = k.version + 1, h = !0, S(C());
                  Ps(s, R);
                } catch {
                }
              nr.push(s), k.onversionchange = Be(function(B) {
                i.vcFired = !0, s.on("versionchange").fire(B);
              }), k.onclose = Be(function() {
                s.close({ disableAutoOpen: !1 });
              }), E && Yl(s._deps, z), S();
            }, N);
          }).catch(function(S) {
            switch (S?.name) {
              case "UnknownError":
                if (i.PR1398_maxLoop > 0)
                  return i.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), C();
                break;
              case "VersionError":
                if (f > 0)
                  return f = 0, C();
                break;
            }
            return Z.reject(S);
          });
        };
        return Z.race([
          u,
          (typeof navigator > "u" ? Z.resolve() : Xl()).then(C)
        ]).then(function() {
          return g(), i.onReadyBeingFired = [], Z.resolve(zi(function() {
            return s.on.ready.fire(s.vip);
          })).then(function S() {
            if (i.onReadyBeingFired.length > 0) {
              var N = i.onReadyBeingFired.reduce(mt, K);
              return i.onReadyBeingFired = [], Z.resolve(zi(function() {
                return N(s.vip);
              })).then(S);
            }
          });
        }).finally(function() {
          i.openCanceller === u && (i.onReadyBeingFired = null, i.isBeingOpened = !1);
        }).catch(function(S) {
          i.dbOpenError = S;
          try {
            m && m.abort();
          } catch {
          }
          return u === i.openCanceller && s._close(), Le(S);
        }).finally(function() {
          i.openComplete = !0, y();
        }).then(function() {
          if (E) {
            var S = {};
            s.tables.forEach(function(N) {
              N.schema.indexes.forEach(function(z) {
                z.name && (S["idb://".concat(s.name, "/").concat(N.name, "/").concat(z.name)] = new ct(-1 / 0, [[[]]]));
              }), S["idb://".concat(s.name, "/").concat(N.name, "/")] = S["idb://".concat(s.name, "/").concat(N.name, "/:dels")] = new ct(-1 / 0, [[[]]]);
            }), En(Dr).fire(S), Ji(S, !0);
          }
          return s;
        });
      }
      function Xi(s) {
        var i = function(g) {
          return s.next(g);
        }, c = function(g) {
          return s.throw(g);
        }, u = h(i), f = h(c);
        function h(g) {
          return function(y) {
            var m = g(y), E = m.value;
            return m.done ? E : !E || typeof E.then != "function" ? p(E) ? Promise.all(E).then(u, f) : u(E) : E.then(u, f);
          };
        }
        return h(i)();
      }
      function ef(s, i, c) {
        var u = arguments.length;
        if (u < 2)
          throw new I.InvalidArgument("Too few arguments");
        for (var f = new Array(u - 1); --u; )
          f[u - 1] = arguments[u];
        c = f.pop();
        var h = Tn(f);
        return [s, h, c];
      }
      function Fa(s, i, c, u, f) {
        return Z.resolve().then(function() {
          var h = ie.transless || ie, g = s._createTransaction(i, c, s._dbSchema, u);
          g.explicit = !0;
          var y = {
            trans: g,
            transless: h
          };
          if (u)
            g.idbtrans = u.idbtrans;
          else
            try {
              g.create(), g.idbtrans._explicit = !0, s._state.PR1398_maxLoop = 3;
            } catch (S) {
              return S.name === V.InvalidState && s.isOpen() && --s._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"), s.close({ disableAutoOpen: !1 }), s.open().then(function() {
                return Fa(s, i, c, null, f);
              })) : Le(S);
            }
          var m = Xt(f);
          m && tr();
          var E, C = Z.follow(function() {
            if (E = f.call(g, g), E)
              if (m) {
                var S = wn.bind(null, null);
                E.then(S, S);
              } else typeof E.next == "function" && typeof E.throw == "function" && (E = Xi(E));
          }, y);
          return (E && typeof E.then == "function" ? Z.resolve(E).then(function(S) {
            return g.active ? S : Le(new I.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
          }) : C.then(function() {
            return E;
          })).then(function(S) {
            return u && g._resolve(), g._completion.then(function() {
              return S;
            });
          }).catch(function(S) {
            return g._reject(S), Le(S);
          });
        });
      }
      function Ts(s, i, c) {
        for (var u = p(s) ? s.slice() : [s], f = 0; f < c; ++f)
          u.push(i);
        return u;
      }
      function tf(s) {
        return o(o({}, s), { table: function(i) {
          var c = s.table(i), u = c.schema, f = {}, h = [];
          function g(k, A, R) {
            var B = Ir(k), M = f[B] = f[B] || [], $ = k == null ? 0 : typeof k == "string" ? 1 : k.length, U = A > 0, J = o(o({}, R), { name: U ? "".concat(B, "(virtual-from:").concat(R.name, ")") : R.name, lowLevelIndex: R, isVirtual: U, keyTail: A, keyLength: $, extractKey: $i(k), unique: !U && R.unique });
            if (M.push(J), J.isPrimaryKey || h.push(J), $ > 1) {
              var ee = $ === 2 ? k[0] : k.slice(0, $ - 1);
              g(ee, A + 1, R);
            }
            return M.sort(function(X, de) {
              return X.keyTail - de.keyTail;
            }), J;
          }
          var y = g(u.primaryKey.keyPath, 0, u.primaryKey);
          f[":id"] = [y];
          for (var m = 0, E = u.indexes; m < E.length; m++) {
            var C = E[m];
            g(C.keyPath, 0, C);
          }
          function S(k) {
            var A = f[Ir(k)];
            return A && A[0];
          }
          function N(k, A) {
            return {
              type: k.type === 1 ? 2 : k.type,
              lower: Ts(k.lower, k.lowerOpen ? s.MAX_KEY : s.MIN_KEY, A),
              lowerOpen: !0,
              upper: Ts(k.upper, k.upperOpen ? s.MIN_KEY : s.MAX_KEY, A),
              upperOpen: !0
            };
          }
          function z(k) {
            var A = k.query.index;
            return A.isVirtual ? o(o({}, k), { query: {
              index: A.lowLevelIndex,
              range: N(k.query.range, A.keyTail)
            } }) : k;
          }
          var P = o(o({}, c), { schema: o(o({}, u), { primaryKey: y, indexes: h, getIndexByKeyPath: S }), count: function(k) {
            return c.count(z(k));
          }, query: function(k) {
            return c.query(z(k));
          }, openCursor: function(k) {
            var A = k.query.index, R = A.keyTail, B = A.isVirtual, M = A.keyLength;
            if (!B)
              return c.openCursor(k);
            function $(U) {
              function J(X) {
                X != null ? U.continue(Ts(X, k.reverse ? s.MAX_KEY : s.MIN_KEY, R)) : k.unique ? U.continue(U.key.slice(0, M).concat(k.reverse ? s.MIN_KEY : s.MAX_KEY, R)) : U.continue();
              }
              var ee = Object.create(U, {
                continue: { value: J },
                continuePrimaryKey: {
                  value: function(X, de) {
                    U.continuePrimaryKey(Ts(X, s.MAX_KEY, R), de);
                  }
                },
                primaryKey: {
                  get: function() {
                    return U.primaryKey;
                  }
                },
                key: {
                  get: function() {
                    var X = U.key;
                    return M === 1 ? X[0] : X.slice(0, M);
                  }
                },
                value: {
                  get: function() {
                    return U.value;
                  }
                }
              });
              return ee;
            }
            return c.openCursor(z(k)).then(function(U) {
              return U && $(U);
            });
          } });
          return P;
        } });
      }
      var nf = {
        stack: "dbcore",
        name: "VirtualIndexMiddleware",
        level: 1,
        create: tf
      };
      function Zi(s, i, c, u) {
        return c = c || {}, u = u || "", d(s).forEach(function(f) {
          if (!D(i, f))
            c[u + f] = void 0;
          else {
            var h = s[f], g = i[f];
            if (typeof h == "object" && typeof g == "object" && h && g) {
              var y = yt(h), m = yt(g);
              y !== m ? c[u + f] = i[f] : y === "Object" ? Zi(h, g, c, u + f + ".") : h !== g && (c[u + f] = i[f]);
            } else h !== g && (c[u + f] = i[f]);
          }
        }), d(i).forEach(function(f) {
          D(s, f) || (c[u + f] = i[f]);
        }), c;
      }
      function eo(s, i) {
        return i.type === "delete" ? i.keys : i.keys || i.values.map(s.extractKey);
      }
      var rf = {
        stack: "dbcore",
        name: "HooksMiddleware",
        level: 2,
        create: function(s) {
          return o(o({}, s), { table: function(i) {
            var c = s.table(i), u = c.schema.primaryKey, f = o(o({}, c), { mutate: function(h) {
              var g = ie.trans, y = g.table(i).hook, m = y.deleting, E = y.creating, C = y.updating;
              switch (h.type) {
                case "add":
                  if (E.fire === K)
                    break;
                  return g._promise("readwrite", function() {
                    return S(h);
                  }, !0);
                case "put":
                  if (E.fire === K && C.fire === K)
                    break;
                  return g._promise("readwrite", function() {
                    return S(h);
                  }, !0);
                case "delete":
                  if (m.fire === K)
                    break;
                  return g._promise("readwrite", function() {
                    return S(h);
                  }, !0);
                case "deleteRange":
                  if (m.fire === K)
                    break;
                  return g._promise("readwrite", function() {
                    return N(h);
                  }, !0);
              }
              return c.mutate(h);
              function S(P) {
                var k = ie.trans, A = P.keys || eo(u, P);
                if (!A)
                  throw new Error("Keys missing");
                return P = P.type === "add" || P.type === "put" ? o(o({}, P), { keys: A }) : o({}, P), P.type !== "delete" && (P.values = a([], P.values)), P.keys && (P.keys = a([], P.keys)), sf(c, P, A).then(function(R) {
                  var B = A.map(function(M, $) {
                    var U = R[$], J = { onerror: null, onsuccess: null };
                    if (P.type === "delete")
                      m.fire.call(J, M, U, k);
                    else if (P.type === "add" || U === void 0) {
                      var ee = E.fire.call(J, M, P.values[$], k);
                      M == null && ee != null && (M = ee, P.keys[$] = M, u.outbound || Ue(P.values[$], u.keyPath, M));
                    } else {
                      var X = Zi(U, P.values[$]), de = C.fire.call(J, X, M, U, k);
                      if (de) {
                        var be = P.values[$];
                        Object.keys(de).forEach(function(te) {
                          D(be, te) ? be[te] = de[te] : Ue(be, te, de[te]);
                        });
                      }
                    }
                    return J;
                  });
                  return c.mutate(P).then(function(M) {
                    for (var $ = M.failures, U = M.results, J = M.numFailures, ee = M.lastResult, X = 0; X < A.length; ++X) {
                      var de = U ? U[X] : A[X], be = B[X];
                      de == null ? be.onerror && be.onerror($[X]) : be.onsuccess && be.onsuccess(
                        P.type === "put" && R[X] ? P.values[X] : de
                      );
                    }
                    return { failures: $, results: U, numFailures: J, lastResult: ee };
                  }).catch(function(M) {
                    return B.forEach(function($) {
                      return $.onerror && $.onerror(M);
                    }), Promise.reject(M);
                  });
                });
              }
              function N(P) {
                return z(P.trans, P.range, 1e4);
              }
              function z(P, k, A) {
                return c.query({ trans: P, values: !1, query: { index: u, range: k }, limit: A }).then(function(R) {
                  var B = R.result;
                  return S({ type: "delete", keys: B, trans: P }).then(function(M) {
                    return M.numFailures > 0 ? Promise.reject(M.failures[0]) : B.length < A ? { failures: [], numFailures: 0, lastResult: void 0 } : z(P, o(o({}, k), { lower: B[B.length - 1], lowerOpen: !0 }), A);
                  });
                });
              }
            } });
            return f;
          } });
        }
      };
      function sf(s, i, c) {
        return i.type === "add" ? Promise.resolve([]) : s.getMany({ trans: i.trans, keys: c, cache: "immutable" });
      }
      function $a(s, i, c) {
        try {
          if (!i || i.keys.length < s.length)
            return null;
          for (var u = [], f = 0, h = 0; f < i.keys.length && h < s.length; ++f)
            Pe(i.keys[f], s[h]) === 0 && (u.push(c ? gt(i.values[f]) : i.values[f]), ++h);
          return u.length === s.length ? u : null;
        } catch {
          return null;
        }
      }
      var of = {
        stack: "dbcore",
        level: -1,
        create: function(s) {
          return {
            table: function(i) {
              var c = s.table(i);
              return o(o({}, c), { getMany: function(u) {
                if (!u.cache)
                  return c.getMany(u);
                var f = $a(u.keys, u.trans._cache, u.cache === "clone");
                return f ? Z.resolve(f) : c.getMany(u).then(function(h) {
                  return u.trans._cache = {
                    keys: u.keys,
                    values: u.cache === "clone" ? gt(h) : h
                  }, h;
                });
              }, mutate: function(u) {
                return u.type !== "add" && (u.trans._cache = null), c.mutate(u);
              } });
            }
          };
        }
      };
      function Va(s, i) {
        return s.trans.mode === "readonly" && !!s.subscr && !s.trans.explicit && s.trans.db._options.cache !== "disabled" && !i.schema.primaryKey.outbound;
      }
      function Ka(s, i) {
        switch (s) {
          case "query":
            return i.values && !i.unique;
          case "get":
            return !1;
          case "getMany":
            return !1;
          case "count":
            return !1;
          case "openCursor":
            return !1;
        }
      }
      var af = {
        stack: "dbcore",
        level: 0,
        name: "Observability",
        create: function(s) {
          var i = s.schema.name, c = new ct(s.MIN_KEY, s.MAX_KEY);
          return o(o({}, s), { transaction: function(u, f, h) {
            if (ie.subscr && f !== "readonly")
              throw new I.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ie.querier));
            return s.transaction(u, f, h);
          }, table: function(u) {
            var f = s.table(u), h = f.schema, g = h.primaryKey, y = h.indexes, m = g.extractKey, E = g.outbound, C = g.autoIncrement && y.filter(function(P) {
              return P.compound && P.keyPath.includes(g.keyPath);
            }), S = o(o({}, f), { mutate: function(P) {
              var k, A, R = P.trans, B = P.mutatedParts || (P.mutatedParts = {}), M = function(he) {
                var Ce = "idb://".concat(i, "/").concat(u, "/").concat(he);
                return B[Ce] || (B[Ce] = new ct());
              }, $ = M(""), U = M(":dels"), J = P.type, ee = P.type === "deleteRange" ? [P.range] : P.type === "delete" ? [P.keys] : P.values.length < 50 ? [eo(g, P).filter(function(he) {
                return he;
              }), P.values] : [], X = ee[0], de = ee[1], be = P.trans._cache;
              if (p(X)) {
                $.addKeys(X);
                var te = J === "delete" || X.length === de.length ? $a(X, be) : null;
                te || U.addKeys(X), (te || de) && cf(M, h, te, de);
              } else if (X) {
                var we = {
                  from: (k = X.lower) !== null && k !== void 0 ? k : s.MIN_KEY,
                  to: (A = X.upper) !== null && A !== void 0 ? A : s.MAX_KEY
                };
                U.add(we), $.add(we);
              } else
                $.add(c), U.add(c), h.indexes.forEach(function(he) {
                  return M(he.name).add(c);
                });
              return f.mutate(P).then(function(he) {
                return X && (P.type === "add" || P.type === "put") && ($.addKeys(he.results), C && C.forEach(function(Ce) {
                  for (var ae = P.values.map(function(wt) {
                    return Ce.extractKey(wt);
                  }), Fe = Ce.keyPath.findIndex(function(wt) {
                    return wt === g.keyPath;
                  }), ut = 0, Lt = he.results.length; ut < Lt; ++ut)
                    ae[ut][Fe] = he.results[ut];
                  M(Ce.name).addKeys(ae);
                })), R.mutatedParts = As(R.mutatedParts || {}, B), he;
              });
            } }), N = function(P) {
              var k, A, R = P.query, B = R.index, M = R.range;
              return [
                B,
                new ct((k = M.lower) !== null && k !== void 0 ? k : s.MIN_KEY, (A = M.upper) !== null && A !== void 0 ? A : s.MAX_KEY)
              ];
            }, z = {
              get: function(P) {
                return [g, new ct(P.key)];
              },
              getMany: function(P) {
                return [g, new ct().addKeys(P.keys)];
              },
              count: N,
              query: N,
              openCursor: N
            };
            return d(z).forEach(function(P) {
              S[P] = function(k) {
                var A = ie.subscr, R = !!A, B = Va(ie, f) && Ka(P, k), M = B ? k.obsSet = {} : A;
                if (R) {
                  var $ = function(te) {
                    var we = "idb://".concat(i, "/").concat(u, "/").concat(te);
                    return M[we] || (M[we] = new ct());
                  }, U = $(""), J = $(":dels"), ee = z[P](k), X = ee[0], de = ee[1];
                  if (P === "query" && X.isPrimaryKey && !k.values ? J.add(de) : $(X.name || "").add(de), !X.isPrimaryKey)
                    if (P === "count")
                      J.add(c);
                    else {
                      var be = P === "query" && E && k.values && f.query(o(o({}, k), { values: !1 }));
                      return f[P].apply(this, arguments).then(function(te) {
                        if (P === "query") {
                          if (E && k.values)
                            return be.then(function(ae) {
                              var Fe = ae.result;
                              return U.addKeys(Fe), te;
                            });
                          var we = k.values ? te.result.map(m) : te.result;
                          k.values ? U.addKeys(we) : J.addKeys(we);
                        } else if (P === "openCursor") {
                          var he = te, Ce = k.values;
                          return he && Object.create(he, {
                            key: {
                              get: function() {
                                return J.addKey(he.primaryKey), he.key;
                              }
                            },
                            primaryKey: {
                              get: function() {
                                var ae = he.primaryKey;
                                return J.addKey(ae), ae;
                              }
                            },
                            value: {
                              get: function() {
                                return Ce && U.addKey(he.primaryKey), he.value;
                              }
                            }
                          });
                        }
                        return te;
                      });
                    }
                }
                return f[P].apply(this, arguments);
              };
            }), S;
          } });
        }
      };
      function cf(s, i, c, u) {
        function f(h) {
          var g = s(h.name || "");
          function y(E) {
            return E != null ? h.extractKey(E) : null;
          }
          var m = function(E) {
            return h.multiEntry && p(E) ? E.forEach(function(C) {
              return g.addKey(C);
            }) : g.addKey(E);
          };
          (c || u).forEach(function(E, C) {
            var S = c && y(c[C]), N = u && y(u[C]);
            Pe(S, N) !== 0 && (S != null && m(S), N != null && m(N));
          });
        }
        i.indexes.forEach(f);
      }
      function La(s, i, c) {
        if (c.numFailures === 0)
          return i;
        if (i.type === "deleteRange")
          return null;
        var u = i.keys ? i.keys.length : "values" in i && i.values ? i.values.length : 1;
        if (c.numFailures === u)
          return null;
        var f = o({}, i);
        return p(f.keys) && (f.keys = f.keys.filter(function(h, g) {
          return !(g in c.failures);
        })), "values" in f && p(f.values) && (f.values = f.values.filter(function(h, g) {
          return !(g in c.failures);
        })), f;
      }
      function uf(s, i) {
        return i.lower === void 0 ? !0 : i.lowerOpen ? Pe(s, i.lower) > 0 : Pe(s, i.lower) >= 0;
      }
      function lf(s, i) {
        return i.upper === void 0 ? !0 : i.upperOpen ? Pe(s, i.upper) < 0 : Pe(s, i.upper) <= 0;
      }
      function to(s, i) {
        return uf(s, i) && lf(s, i);
      }
      function ja(s, i, c, u, f, h) {
        if (!c || c.length === 0)
          return s;
        var g = i.query.index, y = g.multiEntry, m = i.query.range, E = u.schema.primaryKey, C = E.extractKey, S = g.extractKey, N = (g.lowLevelIndex || g).extractKey, z = c.reduce(function(P, k) {
          var A = P, R = [];
          if (k.type === "add" || k.type === "put")
            for (var B = new ct(), M = k.values.length - 1; M >= 0; --M) {
              var $ = k.values[M], U = C($);
              if (!B.hasKey(U)) {
                var J = S($);
                (y && p(J) ? J.some(function(te) {
                  return to(te, m);
                }) : to(J, m)) && (B.addKey(U), R.push($));
              }
            }
          switch (k.type) {
            case "add": {
              var ee = new ct().addKeys(i.values ? P.map(function(te) {
                return C(te);
              }) : P);
              A = P.concat(i.values ? R.filter(function(te) {
                var we = C(te);
                return ee.hasKey(we) ? !1 : (ee.addKey(we), !0);
              }) : R.map(function(te) {
                return C(te);
              }).filter(function(te) {
                return ee.hasKey(te) ? !1 : (ee.addKey(te), !0);
              }));
              break;
            }
            case "put": {
              var X = new ct().addKeys(k.values.map(function(te) {
                return C(te);
              }));
              A = P.filter(
                function(te) {
                  return !X.hasKey(i.values ? C(te) : te);
                }
              ).concat(
                i.values ? R : R.map(function(te) {
                  return C(te);
                })
              );
              break;
            }
            case "delete":
              var de = new ct().addKeys(k.keys);
              A = P.filter(function(te) {
                return !de.hasKey(i.values ? C(te) : te);
              });
              break;
            case "deleteRange":
              var be = k.range;
              A = P.filter(function(te) {
                return !to(C(te), be);
              });
              break;
          }
          return A;
        }, s);
        return z === s ? s : (z.sort(function(P, k) {
          return Pe(N(P), N(k)) || Pe(C(P), C(k));
        }), i.limit && i.limit < 1 / 0 && (z.length > i.limit ? z.length = i.limit : s.length === i.limit && z.length < i.limit && (f.dirty = !0)), h ? Object.freeze(z) : z);
      }
      function Ha(s, i) {
        return Pe(s.lower, i.lower) === 0 && Pe(s.upper, i.upper) === 0 && !!s.lowerOpen == !!i.lowerOpen && !!s.upperOpen == !!i.upperOpen;
      }
      function ff(s, i, c, u) {
        if (s === void 0)
          return i !== void 0 ? -1 : 0;
        if (i === void 0)
          return 1;
        var f = Pe(s, i);
        if (f === 0) {
          if (c && u)
            return 0;
          if (c)
            return 1;
          if (u)
            return -1;
        }
        return f;
      }
      function df(s, i, c, u) {
        if (s === void 0)
          return i !== void 0 ? 1 : 0;
        if (i === void 0)
          return -1;
        var f = Pe(s, i);
        if (f === 0) {
          if (c && u)
            return 0;
          if (c)
            return -1;
          if (u)
            return 1;
        }
        return f;
      }
      function hf(s, i) {
        return ff(s.lower, i.lower, s.lowerOpen, i.lowerOpen) <= 0 && df(s.upper, i.upper, s.upperOpen, i.upperOpen) >= 0;
      }
      function pf(s, i, c, u) {
        var f = Vn["idb://".concat(s, "/").concat(i)];
        if (!f)
          return [];
        var h = f.queries[c];
        if (!h)
          return [null, !1, f, null];
        var g = u.query ? u.query.index.name : null, y = h[g || ""];
        if (!y)
          return [null, !1, f, null];
        switch (c) {
          case "query":
            var m = y.find(function(S) {
              return S.req.limit === u.limit && S.req.values === u.values && Ha(S.req.query.range, u.query.range);
            });
            if (m)
              return [
                m,
                !0,
                f,
                y
              ];
            var E = y.find(function(S) {
              var N = "limit" in S.req ? S.req.limit : 1 / 0;
              return N >= u.limit && (u.values ? S.req.values : !0) && hf(S.req.query.range, u.query.range);
            });
            return [E, !1, f, y];
          case "count":
            var C = y.find(function(S) {
              return Ha(S.req.query.range, u.query.range);
            });
            return [C, !!C, f, y];
        }
      }
      function gf(s, i, c, u) {
        s.subscribers.add(c), u.addEventListener("abort", function() {
          s.subscribers.delete(c), s.subscribers.size === 0 && yf(s, i);
        });
      }
      function yf(s, i) {
        setTimeout(function() {
          s.subscribers.size === 0 && se(i, s);
        }, 3e3);
      }
      var mf = {
        stack: "dbcore",
        level: 0,
        name: "Cache",
        create: function(s) {
          var i = s.schema.name, c = o(o({}, s), { transaction: function(u, f, h) {
            var g = s.transaction(u, f, h);
            if (f === "readwrite") {
              var y = new AbortController(), m = y.signal, E = function(C) {
                return function() {
                  if (y.abort(), f === "readwrite") {
                    for (var S = /* @__PURE__ */ new Set(), N = 0, z = u; N < z.length; N++) {
                      var P = z[N], k = Vn["idb://".concat(i, "/").concat(P)];
                      if (k) {
                        var A = s.table(P), R = k.optimisticOps.filter(function(Ce) {
                          return Ce.trans === g;
                        });
                        if (g._explicit && C && g.mutatedParts)
                          for (var B = 0, M = Object.values(k.queries.query); B < M.length; B++)
                            for (var $ = M[B], U = 0, J = $.slice(); U < J.length; U++) {
                              var ee = J[U];
                              Wi(ee.obsSet, g.mutatedParts) && (se($, ee), ee.subscribers.forEach(function(Ce) {
                                return S.add(Ce);
                              }));
                            }
                        else if (R.length > 0) {
                          k.optimisticOps = k.optimisticOps.filter(function(Ce) {
                            return Ce.trans !== g;
                          });
                          for (var X = 0, de = Object.values(k.queries.query); X < de.length; X++)
                            for (var $ = de[X], be = 0, te = $.slice(); be < te.length; be++) {
                              var ee = te[be];
                              if (ee.res != null && g.mutatedParts)
                                if (C && !ee.dirty) {
                                  var we = Object.isFrozen(ee.res), he = ja(ee.res, ee.req, R, A, ee, we);
                                  ee.dirty ? (se($, ee), ee.subscribers.forEach(function(Fe) {
                                    return S.add(Fe);
                                  })) : he !== ee.res && (ee.res = he, ee.promise = Z.resolve({ result: he }));
                                } else
                                  ee.dirty && se($, ee), ee.subscribers.forEach(function(Fe) {
                                    return S.add(Fe);
                                  });
                            }
                        }
                      }
                    }
                    S.forEach(function(Ce) {
                      return Ce();
                    });
                  }
                };
              };
              g.addEventListener("abort", E(!1), {
                signal: m
              }), g.addEventListener("error", E(!1), {
                signal: m
              }), g.addEventListener("complete", E(!0), {
                signal: m
              });
            }
            return g;
          }, table: function(u) {
            var f = s.table(u), h = f.schema.primaryKey, g = o(o({}, f), { mutate: function(y) {
              var m = ie.trans;
              if (h.outbound || m.db._options.cache === "disabled" || m.explicit || m.idbtrans.mode !== "readwrite")
                return f.mutate(y);
              var E = Vn["idb://".concat(i, "/").concat(u)];
              if (!E)
                return f.mutate(y);
              var C = f.mutate(y);
              return (y.type === "add" || y.type === "put") && (y.values.length >= 50 || eo(h, y).some(function(S) {
                return S == null;
              })) ? C.then(function(S) {
                var N = o(o({}, y), { values: y.values.map(function(P, k) {
                  var A;
                  if (S.failures[k])
                    return P;
                  var R = !((A = h.keyPath) === null || A === void 0) && A.includes(".") ? gt(P) : o({}, P);
                  return Ue(R, h.keyPath, S.results[k]), R;
                }) }), z = La(E, N, S);
                E.optimisticOps.push(z), queueMicrotask(function() {
                  return y.mutatedParts && Ns(y.mutatedParts);
                });
              }) : (E.optimisticOps.push(y), y.mutatedParts && Ns(y.mutatedParts), C.then(function(S) {
                if (S.numFailures > 0) {
                  se(E.optimisticOps, y);
                  var N = La(E, y, S);
                  N && E.optimisticOps.push(N), y.mutatedParts && Ns(y.mutatedParts);
                }
              }), C.catch(function() {
                se(E.optimisticOps, y), y.mutatedParts && Ns(y.mutatedParts);
              })), C;
            }, query: function(y) {
              var m;
              if (!Va(ie, f) || !Ka("query", y))
                return f.query(y);
              var E = ((m = ie.trans) === null || m === void 0 ? void 0 : m.db._options.cache) === "immutable", C = ie, S = C.requery, N = C.signal, z = pf(i, u, "query", y), P = z[0], k = z[1], A = z[2], R = z[3];
              if (P && k)
                P.obsSet = y.obsSet;
              else {
                var B = f.query(y).then(function(M) {
                  var $ = M.result;
                  if (P && (P.res = $), E) {
                    for (var U = 0, J = $.length; U < J; ++U)
                      Object.freeze($[U]);
                    Object.freeze($);
                  } else
                    M.result = gt($);
                  return M;
                }).catch(function(M) {
                  return R && P && se(R, P), Promise.reject(M);
                });
                P = {
                  obsSet: y.obsSet,
                  promise: B,
                  subscribers: /* @__PURE__ */ new Set(),
                  type: "query",
                  req: y,
                  dirty: !1
                }, R ? R.push(P) : (R = [P], A || (A = Vn["idb://".concat(i, "/").concat(u)] = {
                  queries: {
                    query: {},
                    count: {}
                  },
                  objs: /* @__PURE__ */ new Map(),
                  optimisticOps: [],
                  unsignaledParts: {}
                }), A.queries.query[y.query.index.name || ""] = R);
              }
              return gf(P, R, S, N), P.promise.then(function(M) {
                return {
                  result: ja(M.result, y, A?.optimisticOps, f, P, E)
                };
              });
            } });
            return g;
          } });
          return c;
        }
      };
      function Rs(s, i) {
        return new Proxy(s, {
          get: function(c, u, f) {
            return u === "db" ? i : Reflect.get(c, u, f);
          }
        });
      }
      var tn = (function() {
        function s(i, c) {
          var u = this;
          this._middlewares = {}, this.verno = 0;
          var f = s.dependencies;
          this._options = c = o({
            addons: s.addons,
            autoOpen: !0,
            indexedDB: f.indexedDB,
            IDBKeyRange: f.IDBKeyRange,
            cache: "cloned"
          }, c), this._deps = {
            indexedDB: c.indexedDB,
            IDBKeyRange: c.IDBKeyRange
          };
          var h = c.addons;
          this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
          var g = {
            dbOpenError: null,
            isBeingOpened: !1,
            onReadyBeingFired: null,
            openComplete: !1,
            dbReadyResolve: K,
            dbReadyPromise: null,
            cancelOpen: K,
            openCanceller: null,
            autoSchema: !0,
            PR1398_maxLoop: 3,
            autoOpen: c.autoOpen
          };
          g.dbReadyPromise = new Z(function(m) {
            g.dbReadyResolve = m;
          }), g.openCanceller = new Z(function(m, E) {
            g.cancelOpen = E;
          }), this._state = g, this.name = i, this.on = Sr(this, "populate", "blocked", "versionchange", "close", { ready: [mt, K] }), this.once = function(m, E) {
            var C = function() {
              for (var S = [], N = 0; N < arguments.length; N++)
                S[N] = arguments[N];
              u.on(m).unsubscribe(C), E.apply(u, S);
            };
            return u.on(m, C);
          }, this.on.ready.subscribe = ne(this.on.ready.subscribe, function(m) {
            return function(E, C) {
              s.vip(function() {
                var S = u._state;
                if (S.openComplete)
                  S.dbOpenError || Z.resolve().then(E), C && m(E);
                else if (S.onReadyBeingFired)
                  S.onReadyBeingFired.push(E), C && m(E);
                else {
                  m(E);
                  var N = u;
                  C || m(function z() {
                    N.on.ready.unsubscribe(E), N.on.ready.unsubscribe(z);
                  });
                }
              });
            };
          }), this.Collection = Sl(this), this.Table = _l(this), this.Transaction = Nl(this), this.Version = Wl(this), this.WhereClause = Ol(this), this.on("versionchange", function(m) {
            m.newVersion > 0 ? console.warn("Another connection wants to upgrade database '".concat(u.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(u.name, "'. Closing db now to resume the delete request.")), u.close({ disableAutoOpen: !1 });
          }), this.on("blocked", function(m) {
            !m.newVersion || m.newVersion < m.oldVersion ? console.warn("Dexie.delete('".concat(u.name, "') was blocked")) : console.warn("Upgrade '".concat(u.name, "' blocked by other connection holding version ").concat(m.oldVersion / 10));
          }), this._maxKey = kr(c.IDBKeyRange), this._createTransaction = function(m, E, C, S) {
            return new u.Transaction(m, E, C, u._options.chromeTransactionDurability, S);
          }, this._fireOnBlocked = function(m) {
            u.on("blocked").fire(m), nr.filter(function(E) {
              return E.name === u.name && E !== u && !E._state.vcFired;
            }).map(function(E) {
              return E.on("versionchange").fire(m);
            });
          }, this.use(of), this.use(mf), this.use(af), this.use(nf), this.use(rf);
          var y = new Proxy(this, {
            get: function(m, E, C) {
              if (E === "_vip")
                return !0;
              if (E === "table")
                return function(N) {
                  return Rs(u.table(N), y);
                };
              var S = Reflect.get(m, E, C);
              return S instanceof Sa ? Rs(S, y) : E === "tables" ? S.map(function(N) {
                return Rs(N, y);
              }) : E === "_createTransaction" ? function() {
                var N = S.apply(this, arguments);
                return Rs(N, y);
              } : S;
            }
          });
          this.vip = y, h.forEach(function(m) {
            return m(u);
          });
        }
        return s.prototype.version = function(i) {
          if (isNaN(i) || i < 0.1)
            throw new I.Type("Given version is not a positive number");
          if (i = Math.round(i * 10) / 10, this.idbdb || this._state.isBeingOpened)
            throw new I.Schema("Cannot add version when database is open");
          this.verno = Math.max(this.verno, i);
          var c = this._versions, u = c.filter(function(f) {
            return f._cfg.version === i;
          })[0];
          return u || (u = new this.Version(i), c.push(u), c.sort($l), u.stores({}), this._state.autoSchema = !1, u);
        }, s.prototype._whenReady = function(i) {
          var c = this;
          return this.idbdb && (this._state.openComplete || ie.letThrough || this._vip) ? i() : new Z(function(u, f) {
            if (c._state.openComplete)
              return f(new I.DatabaseClosed(c._state.dbOpenError));
            if (!c._state.isBeingOpened) {
              if (!c._state.autoOpen) {
                f(new I.DatabaseClosed());
                return;
              }
              c.open().catch(K);
            }
            c._state.dbReadyPromise.then(u, f);
          }).then(i);
        }, s.prototype.use = function(i) {
          var c = i.stack, u = i.create, f = i.level, h = i.name;
          h && this.unuse({ stack: c, name: h });
          var g = this._middlewares[c] || (this._middlewares[c] = []);
          return g.push({ stack: c, create: u, level: f ?? 10, name: h }), g.sort(function(y, m) {
            return y.level - m.level;
          }), this;
        }, s.prototype.unuse = function(i) {
          var c = i.stack, u = i.name, f = i.create;
          return c && this._middlewares[c] && (this._middlewares[c] = this._middlewares[c].filter(function(h) {
            return f ? h.create !== f : u ? h.name !== u : !1;
          })), this;
        }, s.prototype.open = function() {
          var i = this;
          return Mn(
            mn,
            function() {
              return Zl(i);
            }
          );
        }, s.prototype._close = function() {
          this.on.close.fire(new CustomEvent("close"));
          var i = this._state, c = nr.indexOf(this);
          if (c >= 0 && nr.splice(c, 1), this.idbdb) {
            try {
              this.idbdb.close();
            } catch {
            }
            this.idbdb = null;
          }
          i.isBeingOpened || (i.dbReadyPromise = new Z(function(u) {
            i.dbReadyResolve = u;
          }), i.openCanceller = new Z(function(u, f) {
            i.cancelOpen = f;
          }));
        }, s.prototype.close = function(i) {
          var c = i === void 0 ? { disableAutoOpen: !0 } : i, u = c.disableAutoOpen, f = this._state;
          u ? (f.isBeingOpened && f.cancelOpen(new I.DatabaseClosed()), this._close(), f.autoOpen = !1, f.dbOpenError = new I.DatabaseClosed()) : (this._close(), f.autoOpen = this._options.autoOpen || f.isBeingOpened, f.openComplete = !1, f.dbOpenError = null);
        }, s.prototype.delete = function(i) {
          var c = this;
          i === void 0 && (i = { disableAutoOpen: !0 });
          var u = arguments.length > 0 && typeof arguments[0] != "object", f = this._state;
          return new Z(function(h, g) {
            var y = function() {
              c.close(i);
              var m = c._deps.indexedDB.deleteDatabase(c.name);
              m.onsuccess = Be(function() {
                Jl(c._deps, c.name), h();
              }), m.onerror = Kt(g), m.onblocked = c._fireOnBlocked;
            };
            if (u)
              throw new I.InvalidArgument("Invalid closeOptions argument to db.delete()");
            f.isBeingOpened ? f.dbReadyPromise.then(y) : y();
          });
        }, s.prototype.backendDB = function() {
          return this.idbdb;
        }, s.prototype.isOpen = function() {
          return this.idbdb !== null;
        }, s.prototype.hasBeenClosed = function() {
          var i = this._state.dbOpenError;
          return i && i.name === "DatabaseClosed";
        }, s.prototype.hasFailed = function() {
          return this._state.dbOpenError !== null;
        }, s.prototype.dynamicallyOpened = function() {
          return this._state.autoSchema;
        }, Object.defineProperty(s.prototype, "tables", {
          get: function() {
            var i = this;
            return d(this._allTables).map(function(c) {
              return i._allTables[c];
            });
          },
          enumerable: !1,
          configurable: !0
        }), s.prototype.transaction = function() {
          var i = ef.apply(this, arguments);
          return this._transaction.apply(this, i);
        }, s.prototype._transaction = function(i, c, u) {
          var f = this, h = ie.trans;
          (!h || h.db !== this || i.indexOf("!") !== -1) && (h = null);
          var g = i.indexOf("?") !== -1;
          i = i.replace("!", "").replace("?", "");
          var y, m;
          try {
            if (m = c.map(function(C) {
              var S = C instanceof f.Table ? C.name : C;
              if (typeof S != "string")
                throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
              return S;
            }), i == "r" || i === Ni)
              y = Ni;
            else if (i == "rw" || i == Ti)
              y = Ti;
            else
              throw new I.InvalidArgument("Invalid transaction mode: " + i);
            if (h) {
              if (h.mode === Ni && y === Ti)
                if (g)
                  h = null;
                else
                  throw new I.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              h && m.forEach(function(C) {
                if (h && h.storeNames.indexOf(C) === -1)
                  if (g)
                    h = null;
                  else
                    throw new I.SubTransaction("Table " + C + " not included in parent transaction.");
              }), g && h && !h.active && (h = null);
            }
          } catch (C) {
            return h ? h._promise(null, function(S, N) {
              N(C);
            }) : Le(C);
          }
          var E = Fa.bind(null, this, y, m, h, u);
          return h ? h._promise(y, E, "lock") : ie.trans ? Mn(ie.transless, function() {
            return f._whenReady(E);
          }) : this._whenReady(E);
        }, s.prototype.table = function(i) {
          if (!D(this._allTables, i))
            throw new I.InvalidTable("Table ".concat(i, " does not exist"));
          return this._allTables[i];
        }, s;
      })(), vf = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", wf = (function() {
        function s(i) {
          this._subscribe = i;
        }
        return s.prototype.subscribe = function(i, c, u) {
          return this._subscribe(!i || typeof i == "function" ? { next: i, error: c, complete: u } : i);
        }, s.prototype[vf] = function() {
          return this;
        }, s;
      })(), Us;
      try {
        Us = {
          indexedDB: l.indexedDB || l.mozIndexedDB || l.webkitIndexedDB || l.msIndexedDB,
          IDBKeyRange: l.IDBKeyRange || l.webkitIDBKeyRange
        };
      } catch {
        Us = { indexedDB: null, IDBKeyRange: null };
      }
      function za(s) {
        var i = !1, c, u = new wf(function(f) {
          var h = Xt(s);
          function g(R) {
            var B = Zn();
            try {
              h && tr();
              var M = vn(s, R);
              return h && (M = M.finally(wn)), M;
            } finally {
              B && er();
            }
          }
          var y = !1, m, E = {}, C = {}, S = {
            get closed() {
              return y;
            },
            unsubscribe: function() {
              y || (y = !0, m && m.abort(), N && En.storagemutated.unsubscribe(k));
            }
          };
          f.start && f.start(S);
          var N = !1, z = function() {
            return Ii(A);
          };
          function P() {
            return Wi(C, E);
          }
          var k = function(R) {
            As(E, R), P() && z();
          }, A = function() {
            if (!(y || !Us.indexedDB)) {
              E = {};
              var R = {};
              m && m.abort(), m = new AbortController();
              var B = {
                subscr: R,
                signal: m.signal,
                requery: z,
                querier: s,
                trans: null
              }, M = g(B);
              Promise.resolve(M).then(function($) {
                i = !0, c = $, !(y || B.signal.aborted) && (E = {}, C = R, !Ee(C) && !N && (En(Dr, k), N = !0), Ii(function() {
                  return !y && f.next && f.next($);
                }));
              }, function($) {
                i = !1, ["DatabaseClosedError", "AbortError"].includes($?.name) || y || Ii(function() {
                  y || f.error && f.error($);
                });
              });
            }
          };
          return setTimeout(z, 0), S;
        });
        return u.hasValue = function() {
          return i;
        }, u.getValue = function() {
          return c;
        }, u;
      }
      var Kn = tn;
      O(Kn, o(o({}, ce), {
        delete: function(s) {
          var i = new Kn(s, { addons: [] });
          return i.delete();
        },
        exists: function(s) {
          return new Kn(s, { addons: [] }).open().then(function(i) {
            return i.close(), !0;
          }).catch("NoSuchDatabaseError", function() {
            return !1;
          });
        },
        getDatabaseNames: function(s) {
          try {
            return Ql(Kn.dependencies).then(s);
          } catch {
            return Le(new I.MissingAPI());
          }
        },
        defineClass: function() {
          function s(i) {
            _(this, i);
          }
          return s;
        },
        ignoreTransaction: function(s) {
          return ie.trans ? Mn(ie.transless, s) : s();
        },
        vip: zi,
        async: function(s) {
          return function() {
            try {
              var i = Xi(s.apply(this, arguments));
              return !i || typeof i.then != "function" ? Z.resolve(i) : i;
            } catch (c) {
              return Le(c);
            }
          };
        },
        spawn: function(s, i, c) {
          try {
            var u = Xi(s.apply(c, i || []));
            return !u || typeof u.then != "function" ? Z.resolve(u) : u;
          } catch (f) {
            return Le(f);
          }
        },
        currentTransaction: {
          get: function() {
            return ie.trans || null;
          }
        },
        waitFor: function(s, i) {
          var c = Z.resolve(typeof s == "function" ? Kn.ignoreTransaction(s) : s).timeout(i || 6e4);
          return ie.trans ? ie.trans.waitFor(c) : c;
        },
        Promise: Z,
        debug: {
          get: function() {
            return Ke;
          },
          set: function(s) {
            gn(s);
          }
        },
        derive: le,
        extend: _,
        props: O,
        override: ne,
        Events: Sr,
        on: En,
        liveQuery: za,
        extendObservabilitySet: As,
        getByKeyPath: Re,
        setByKeyPath: Ue,
        delByKeyPath: Ct,
        shallowClone: it,
        deepClone: gt,
        getObjectDiff: Zi,
        cmp: Pe,
        asap: Xe,
        minKey: Ai,
        addons: [],
        connections: nr,
        errnames: V,
        dependencies: Us,
        cache: Vn,
        semVer: ma,
        version: ma.split(".").map(function(s) {
          return parseInt(s);
        }).reduce(function(s, i, c) {
          return s + i / Math.pow(10, c * 2);
        })
      })), Kn.maxKey = kr(Kn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (En(Dr, function(s) {
        if (!xn) {
          var i;
          i = new CustomEvent(Bi, {
            detail: s
          }), xn = !0, dispatchEvent(i), xn = !1;
        }
      }), addEventListener(Bi, function(s) {
        var i = s.detail;
        xn || no(i);
      }));
      function no(s) {
        var i = xn;
        try {
          xn = !0, En.storagemutated.fire(s), Ji(s, !0);
        } finally {
          xn = i;
        }
      }
      var xn = !1, Sn, ro = function() {
      };
      typeof BroadcastChannel < "u" && (ro = function() {
        Sn = new BroadcastChannel(Bi), Sn.onmessage = function(s) {
          return s.data && no(s.data);
        };
      }, ro(), typeof Sn.unref == "function" && Sn.unref(), En(Dr, function(s) {
        xn || Sn.postMessage(s);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(s) {
        if (!tn.disableBfCache && s.persisted) {
          Ke && console.debug("Dexie: handling persisted pagehide"), Sn?.close();
          for (var i = 0, c = nr; i < c.length; i++) {
            var u = c[i];
            u.close({ disableAutoOpen: !1 });
          }
        }
      }), addEventListener("pageshow", function(s) {
        !tn.disableBfCache && s.persisted && (Ke && console.debug("Dexie: handling persisted pageshow"), ro(), no({ all: new ct(-1 / 0, [[]]) }));
      }));
      function bf(s) {
        return new xr({ add: s });
      }
      function _f(s) {
        return new xr({ remove: s });
      }
      function Ef(s, i) {
        return new xr({ replacePrefix: [s, i] });
      }
      Z.rejectionMapper = j, gn(Ke);
      var xf = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        Dexie: tn,
        Entity: ba,
        PropModification: xr,
        RangeSet: ct,
        add: bf,
        cmp: Pe,
        default: tn,
        liveQuery: za,
        mergeRanges: Ar,
        rangesOverlap: Ra,
        remove: _f,
        replacePrefix: Ef
      });
      return o(tn, xf, { default: tn }), tn;
    }));
  })(Ys)), Ys.exports;
}
var fg = lg();
const Fo = /* @__PURE__ */ cg(fg), $c = /* @__PURE__ */ Symbol.for("Dexie"), ui = globalThis[$c] || (globalThis[$c] = Fo);
if (Fo.semVer !== ui.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Fo.semVer} and ${ui.semVer}`);
const {
  liveQuery: dg,
  mergeRanges: hy,
  rangesOverlap: py,
  RangeSet: gy,
  cmp: yy,
  Entity: my,
  PropModification: vy,
  replacePrefix: wy,
  add: by,
  remove: _y,
  DexieYProvider: Ey
} = ui;
class hg extends ui {
  constructor(e = "CcPlatformSdkCache") {
    super(e), this.version(1).stores({
      posts: "id, cachedAt, lastAccessed",
      feedResources: "route, cachedAt, lastAccessed",
      notifications: "id, cachedAt, lastAccessed",
      notificationFeeds: "route, userId, updatedAt",
      metadata: "key, updatedAt"
    }), this.version(2).stores({
      posts: "id, cachedAt, lastAccessed",
      feedResources: "route, cachedAt, lastAccessed",
      users: "id, cachedAt, lastAccessed, updatedAt",
      notifications: "id, cachedAt, lastAccessed",
      notificationFeeds: "route, userId, updatedAt",
      metadata: "key, updatedAt"
    }), this.version(3).stores({
      posts: "id, cachedAt, lastAccessed",
      feedResources: "route, cachedAt, lastAccessed",
      users: "id, cachedAt, lastAccessed, updatedAt",
      notifications: "id, cachedAt, lastAccessed",
      notificationFeeds: "route, userId, updatedAt",
      metadata: "key, updatedAt"
    }), this.version(4).stores({
      posts: "id, cachedAt, lastAccessed",
      feedResources: "route, cachedAt, lastAccessed",
      users: "id, cachedAt, lastAccessed",
      notifications: "id, cachedAt, lastAccessed",
      notificationFeeds: "route, userId, updatedAt",
      metadata: "key, updatedAt"
    }), this.on("versionchange", () => {
      this.close();
    });
  }
}
class pg {
  /**
   * Create a new cache instance.
   *
   * @param ttlMs - Time-to-live in milliseconds (default: 24 hours)
   * @param dbName - Optional custom database name
   */
  constructor(e = 1440 * 60 * 1e3, n) {
    this.ttlMs = e, this.db = new hg(n);
  }
  /**
   * Open the IndexedDB database connection.
   * Must be called before using any cache methods.
   */
  async open() {
    await this.db.open();
  }
  isExpired(e) {
    return Date.now() - e > this.ttlMs;
  }
  createEntry(e, n) {
    const r = Date.now();
    return {
      id: e,
      data: n,
      cachedAt: r,
      lastAccessed: r,
      accessCount: 1
    };
  }
  touch(e) {
    return {
      ...e,
      accessCount: e.accessCount + 1,
      lastAccessed: Date.now()
    };
  }
  /**
   * Sanitize an object for IndexedDB storage by removing non-serializable properties (functions).
   * IndexedDB uses the structured clone algorithm which cannot serialize functions.
   */
  sanitizeForStorage(e) {
    if (e == null || typeof e != "object")
      return e;
    if (Array.isArray(e))
      return e.map((r) => this.sanitizeForStorage(r));
    const n = {};
    for (const [r, o] of Object.entries(e))
      typeof o != "function" && (n[r] = typeof o == "object" && o !== null ? this.sanitizeForStorage(o) : o);
    return n;
  }
  /**
   * Get a post from cache by its ULID.
   *
   * @param id - The post ULID
   * @returns The cached post or null if not found/expired
   */
  async getPost(e) {
    const n = await this.db.posts.get(e);
    return !n || this.isExpired(n.cachedAt) ? null : (await this.db.posts.put(this.touch(n)), n.data);
  }
  /**
   * Get multiple posts from cache by their ULIDs.
   *
   * @param ids - Array of post ULIDs
   * @returns Record mapping ULID to Post for found entries
   */
  async getPosts(e) {
    const n = await this.db.posts.bulkGet(e), r = {}, o = n.filter(Boolean).filter((a) => !!a && !this.isExpired(a.cachedAt));
    for (const a of o)
      r[a.id] = a.data, await this.db.posts.put(this.touch(a));
    return r;
  }
  /**
   * Store a post in the cache.
   *
   * @param id - The post ULID
   * @param post - The post data to cache
   */
  async setPost(e, n) {
    await this.db.posts.put(this.createEntry(e, n));
  }
  /**
   * Store multiple posts in the cache.
   *
   * @param posts - Record mapping ULID to Post
   */
  async setPosts(e) {
    const n = Object.entries(e).map(([r, o]) => this.createEntry(r, o));
    await this.db.posts.bulkPut(n);
  }
  // ========================================================================
  // Users
  // ========================================================================
  /**
   * Get a user profile from cache by ULID.
   *
   * @param id - The user ULID
   * @returns The cached user profile or null if not found/expired
   */
  async getUser(e) {
    const n = await this.db.users?.get(e);
    return !n || this.isExpired(n.cachedAt) ? null : (await this.db.users?.put(this.touch(n)), n.data);
  }
  /**
   * Create a reactive observable for a user profile by ID.
   * Uses Dexie's liveQuery to automatically update when the user data changes in IndexedDB.
   * @param id - User ULID to observe
   * @returns Observable that emits UserProfile | null whenever the cache entry changes
   */
  observeUser(e) {
    return dg(async () => {
      if (!this.db.users)
        return null;
      const n = await this.db.users.get(e);
      return !n || this.isExpired(n.cachedAt) ? null : n.data;
    });
  }
  /**
   * Get user by username from IndexedDB cache
   * @param username - Username to lookup (case-insensitive)
   * @returns User profile if found and not expired, null otherwise
   * Note: This uses a filter since username is optional and can't be indexed
   */
  async getUserByUsername(e) {
    if (!this.db.users)
      return null;
    const n = e.toLowerCase(), r = await this.db.users.filter((o) => o.data.username?.toLowerCase() === n && !this.isExpired(o.cachedAt)).first();
    return r ? (await this.db.users.put(this.touch(r)), r.data) : null;
  }
  /**
   * Get multiple users by ULIDs from IndexedDB cache
   * @param ids - Array of user ULIDs
   * @returns Map of ULID to UserProfile for cached, non-expired entries
   */
  async getUsers(e) {
    if (!this.db.users)
      return /* @__PURE__ */ new Map();
    const n = await this.db.users.bulkGet(e), r = /* @__PURE__ */ new Map();
    for (let o = 0; o < n.length; o++) {
      const a = n[o];
      a && !this.isExpired(a.cachedAt) && (r.set(e[o], a.data), await this.db.users.put(this.touch(a)));
    }
    return r;
  }
  /**
   * Store a user profile in the cache.
   *
   * @param id - The user ULID
   * @param user - The user profile to cache
   */
  /**
   * Sanitize user profile data to ensure it's IndexedDB-serializable.
   * Removes functions, symbols, and converts Date objects to strings.
   * This is critical because CurrentUser objects have methods like isAdmin() and hasBadge()
   * that cannot be cloned to IndexedDB.
   */
  sanitizeUserProfile(e) {
    try {
      const n = {};
      for (const [o, a] of Object.entries(e))
        typeof a == "function" || typeof a == "symbol" || (n[o] = a);
      return JSON.parse(JSON.stringify(n));
    } catch (n) {
      console.warn("[CacheDB] Failed to sanitize user profile, using original:", n);
      const r = {};
      for (const [o, a] of Object.entries(e))
        typeof a != "function" && typeof a != "symbol" && (r[o] = a);
      return r;
    }
  }
  async setUser(e, n) {
    if (this.db.users) {
      if (!e || typeof e != "string") {
        console.warn("[CacheDB] Skipping user cache - invalid ULID:", e, n);
        return;
      }
      try {
        const r = this.sanitizeUserProfile(n);
        if (Object.values(r).some((a) => typeof a == "function" || typeof a == "symbol")) {
          console.error("[CacheDB] Sanitized user still contains functions!", {
            id: e,
            keys: Object.keys(r),
            functions: Object.entries(r).filter(([l, d]) => typeof d == "function" || typeof d == "symbol").map(([l]) => l)
          });
          const a = JSON.parse(JSON.stringify(r));
          await this.db.users.put(this.createEntry(e, a));
          return;
        }
        await this.db.users.put(this.createEntry(e, r));
      } catch (r) {
        console.error("[CacheDB] Failed to store user in IndexedDB:", r, {
          id: e,
          userKeys: Object.keys(n),
          avatarVariants: n.avatarVariants,
          backgroundVariants: n.backgroundVariants,
          errorMessage: r instanceof Error ? r.message : String(r),
          errorName: r instanceof Error ? r.name : typeof r,
          hasIsAdmin: typeof n.isAdmin == "function",
          hasHasBadge: typeof n.hasBadge == "function"
        });
      }
    }
  }
  /**
   * Store multiple users in IndexedDB cache
   * @param users - Array of user profiles to cache
   */
  async setUsers(e) {
    if (!this.db.users)
      return;
    const n = e.filter((r) => r.ulid && typeof r.ulid == "string").map((r) => this.createEntry(r.ulid, this.sanitizeForStorage(r)));
    if (n.length === 0) {
      console.warn("[CacheDB] No valid users to cache - all missing ULIDs");
      return;
    }
    n.length < e.length && console.warn("[CacheDB] Skipped", e.length - n.length, "users with invalid ULIDs"), await this.db.users.bulkPut(n);
  }
  /**
   * Delete a user from cache by ULID.
   * @param id - The user ULID to delete
   */
  async deleteUser(e) {
    this.db.users && await this.db.users.delete(e);
  }
  /**
   * Delete a post from cache and remove from all feeds.
   *
   * @param id - The post ULID to delete
   */
  async deletePost(e) {
    await this.db.posts.delete(e), await this.removeUlidFromFeeds(e);
  }
  async removeUlidFromFeeds(e) {
    const r = (await this.db.feedResources.toArray()).map((o) => {
      const a = o.ulids.filter((d) => d !== e);
      return a.length !== o.ulids.length ? { ...o, ulids: a } : null;
    }).filter((o) => !!o);
    r.length !== 0 && await this.db.feedResources.bulkPut(r);
  }
  /**
   * Get a cached feed resource by route.
   *
   * @param route - The feed route identifier
   * @returns The cached feed resource or null if not found/expired
   */
  async getFeedResource(e) {
    const n = await this.db.feedResources.get(e);
    return n ? this.isExpired(n.cachedAt) ? (await this.db.feedResources.delete(e), null) : (await this.db.feedResources.update(e, { lastAccessed: Date.now() }), n) : null;
  }
  /**
   * Store or update a feed resource.
   *
   * @param route - The feed route identifier
   * @param ulids - Array of post ULIDs in the feed
   * @param cursor - Pagination cursor
   * @param replace - If true, replaces existing; if false, merges with existing
   */
  async setFeedResource(e, n, r, o = !1) {
    const a = Date.now();
    if (o) {
      await this.db.feedResources.put({
        route: e,
        ulids: n,
        cursor: r ?? null,
        cachedAt: a,
        lastAccessed: a
      });
      return;
    }
    const l = await this.db.feedResources.get(e), d = l ? Array.from(/* @__PURE__ */ new Set([...n, ...l.ulids])) : n;
    await this.db.feedResources.put({
      route: e,
      ulids: d,
      cursor: r ?? l?.cursor ?? null,
      cachedAt: a,
      lastAccessed: a
    });
  }
  /**
   * Append new posts to an existing feed resource.
   *
   * @param route - The feed route identifier
   * @param ulids - Array of post ULIDs to append
   * @param cursor - New pagination cursor
   */
  async appendToFeedResource(e, n, r) {
    const o = await this.db.feedResources.get(e), a = Date.now();
    if (!o) {
      await this.db.feedResources.put({
        route: e,
        ulids: n,
        cursor: r ?? null,
        cachedAt: a,
        lastAccessed: a
      });
      return;
    }
    const l = Array.from(/* @__PURE__ */ new Set([...o.ulids, ...n]));
    await this.db.feedResources.put({
      route: e,
      ulids: l,
      cursor: r ?? o.cursor ?? null,
      cachedAt: a,
      lastAccessed: a
    });
  }
  /**
   * Clear all cached data from all stores.
   * Use with caution - this removes all offline data.
   */
  async clearAll() {
    await Promise.all([
      this.db.posts.clear(),
      this.db.feedResources.clear(),
      this.db.notifications.clear(),
      this.db.notificationFeeds.clear(),
      this.db.metadata.clear()
    ]);
  }
  // ========================================================================
  // Notifications
  // ========================================================================
  /**
   * Store a notification in the cache.
   *
   * @param notification - The notification to cache
   */
  async storeNotification(e) {
    const n = e.notificationId || e.id;
    n && await this.db.notifications.put(this.createEntry(n, e));
  }
  /**
   * Get a notification from cache by ID.
   *
   * @param id - The notification ULID
   * @returns The cached notification or null if not found/expired
   */
  async getNotification(e) {
    const n = await this.db.notifications.get(e);
    return !n || this.isExpired(n.cachedAt) ? null : (await this.db.notifications.put(this.touch(n)), n.data);
  }
  /**
   * Store notification feed pagination state.
   *
   * @param route - The feed route identifier
   * @param userId - The user this feed belongs to
   * @param ulids - Array of notification ULIDs
   * @param cursor - Pagination cursor
   * @param hasMore - Whether more notifications are available
   */
  async setNotificationFeed(e, n, r, o, a) {
    await this.db.notificationFeeds.put({
      route: `${n}:${e}`,
      userId: n,
      ulids: r,
      cursor: o,
      updatedAt: Date.now(),
      hasMore: a
    });
  }
  /**
   * Get cached notification feed state.
   *
   * @param route - The feed route identifier
   * @param userId - The user this feed belongs to
   * @returns The cached feed resource or null if not found/stale (30s TTL)
   */
  async getNotificationFeed(e, n) {
    const r = `${n}:${e}`, o = await this.db.notificationFeeds.get(r);
    return o ? Date.now() - o.updatedAt > 3e4 ? (await this.db.notificationFeeds.delete(r), null) : o : null;
  }
  /**
   * Clear all cached notification feeds.
   */
  async clearNotificationFeeds() {
    await this.db.notificationFeeds.clear();
  }
  // ========================================================================
  // Metadata (used for query cache or misc)
  // ========================================================================
  /**
   * Store arbitrary metadata in the cache.
   *
   * @param key - Unique key for the metadata
   * @param value - The value to store
   */
  async setMetadata(e, n) {
    await this.db.metadata.put({
      key: e,
      value: n,
      updatedAt: Date.now()
    });
  }
  /**
   * Retrieve metadata from the cache.
   *
   * @typeParam T - The expected type of the stored value
   * @param key - The metadata key
   * @returns The stored value or null if not found
   */
  async getMetadata(e) {
    const n = await this.db.metadata.get(e);
    return n ? n.value : null;
  }
}
async function gg(t, e) {
  const n = new pg(t, e);
  return await n.open(), n;
}
class yg {
  /**
   * Create a new storage token provider.
   * @param storage - The storage implementation (localStorage, sessionStorage, or custom)
   * @param key - The key under which to store tokens (default: "auth_tokens")
   */
  constructor(e, n = "auth_tokens") {
    this.storage = e, this.key = n;
  }
  getTokens() {
    try {
      const e = this.storage.getItem(this.key);
      return e ? JSON.parse(e) : null;
    } catch {
      return null;
    }
  }
  setTokens(e) {
    if (!e) {
      this.storage.removeItem(this.key);
      return;
    }
    try {
      this.storage.setItem(this.key, JSON.stringify(e));
    } catch {
    }
  }
  clearTokens() {
    this.storage.removeItem(this.key);
  }
}
class mg {
  constructor() {
    this.refreshing = !1, this.waiters = [];
  }
  async run(e) {
    if (this.refreshing)
      return new Promise((n, r) => {
        this.waiters.push({ resolve: n, reject: r });
      });
    this.refreshing = !0;
    try {
      const n = await e();
      return this.waiters.forEach((r) => r.resolve(n)), this.waiters = [], n;
    } catch (n) {
      throw this.waiters.forEach((r) => r.reject(n)), this.waiters = [], n;
    } finally {
      this.refreshing = !1;
    }
  }
}
class vg {
  constructor(e, n, r = "refresh_token") {
    this.accessToken = null, this.storage = e, this.refreshTokenKey = r, n?.accessToken && (this.accessToken = n.accessToken, console.log("🔑 HybridTokenProvider: Initialized with access token in memory")), n?.refreshToken && (this.storage.setItem(this.refreshTokenKey, n.refreshToken), console.log("🔑 HybridTokenProvider: Stored refresh token in localStorage")), this.storage.getItem(this.refreshTokenKey) && console.log("🔑 HybridTokenProvider: Found persisted refresh token");
  }
  getTokens() {
    const e = this.storage.getItem(this.refreshTokenKey);
    if (!this.accessToken && !e)
      return null;
    const n = {};
    return this.accessToken && (n.accessToken = this.accessToken), e && (n.refreshToken = e), n;
  }
  setTokens(e) {
    if (!e) {
      this.accessToken = null, this.storage.removeItem(this.refreshTokenKey), console.log("🔑 HybridTokenProvider: Cleared all tokens");
      return;
    }
    e.accessToken && (this.accessToken = e.accessToken, console.log("🔑 HybridTokenProvider: Set access token in memory")), e.refreshToken && (this.storage.setItem(this.refreshTokenKey, e.refreshToken), console.log("🔑 HybridTokenProvider: Stored refresh token in localStorage"));
  }
  clearTokens() {
    this.accessToken = null, this.storage.removeItem(this.refreshTokenKey), console.log("🔑 HybridTokenProvider: Cleared all tokens via clearTokens()");
  }
}
class Vc {
  /**
   * Create a new MultipartUpload instance.
   *
   * @param client - The HttpClient instance for API calls
   * @param options - Upload configuration options
   */
  constructor(e, n) {
    this.uploadId = null, this.key = null, this.partSize = 10 * 1024 * 1024, this.maxConcurrentUploads = 3, this.uploadedParts = /* @__PURE__ */ new Set(), this.uploading = !1, this.aborted = !1, this.uploadUrls = {}, this.etags = {}, this.client = e, this.file = n.file, this.uploadId = null, this.key = n.key || null, this.partSize = n.partSize || 10 * 1024 * 1024, this.maxConcurrentUploads = n.maxConcurrentUploads || 3, this.onProgress = n.onProgress || (() => {
    }), this.onComplete = n.onComplete || (() => {
    }), this.onError = n.onError || (() => {
    }), this.onPartComplete = n.onPartComplete || (() => {
    }), this.totalParts = Math.ceil(this.file.size / this.partSize), this.uploadedParts = /* @__PURE__ */ new Set(), this.uploading = !1, this.aborted = !1;
  }
  /**
   * Initialize the multipart upload session with the server.
   *
   * Creates a new upload session and retrieves the uploadId and final key.
   * Called automatically by start() if not already initialized.
   *
   * @throws Error if initialization fails
   */
  async initialize() {
    try {
      const e = await this.client.post("/v1/media/multipart/initialize", {
        body: {
          key: this.key || `media/uploads/${Date.now()}-${this.file.name}`,
          content_type: this.file.type,
          file_size: this.file.size
        }
      }), n = e.data || e;
      if (!n || !n.uploadId)
        throw new Error("Invalid response from initialize endpoint - missing uploadId");
      this.uploadId = n.uploadId, this.key = n.key, this.partSize = n.partSize || this.partSize, this.totalParts = Math.ceil(this.file.size / this.partSize);
    } catch (e) {
      throw new Error(`Failed to initialize upload: ${e}`);
    }
  }
  /**
   * Retrieve presigned URLs for all parts.
   *
   * Gets presigned S3 URLs for uploading each part of the file.
   * Called automatically by start().
   *
   * @throws Error if upload not initialized or URL retrieval fails
   */
  async getUploadUrls() {
    if (!this.uploadId || !this.key)
      throw new Error("Upload not initialized");
    try {
      const e = await this.client.post("/v1/media/multipart/upload-urls", {
        body: {
          uploadId: this.uploadId,
          key: this.key,
          total_parts: this.totalParts
        }
      }), n = e.data || e;
      if (!n || typeof n != "object")
        throw new Error("Invalid response from upload-urls endpoint");
      this.uploadUrls = n;
    } catch (e) {
      throw new Error(`Failed to get upload URLs: ${e}`);
    }
  }
  /**
   * Start the multipart upload.
   *
   * Initializes the upload session, retrieves URLs, and begins uploading
   * parts with the configured concurrency. Progress callbacks are invoked
   * as parts complete.
   *
   * @example
   * ```typescript
   * const upload = new MultipartUpload(client, { file, onComplete: console.log });
   * await upload.start();
   * ```
   */
  async start() {
    if (this.uploading) {
      console.warn("Upload already in progress");
      return;
    }
    (!this.uploadId || !this.key) && await this.initialize(), await this.getUploadUrls(), this.uploading = !0, this.aborted = !1, this.updateProgress();
    const e = [];
    for (let a = 1; a <= this.totalParts; a++)
      this.uploadedParts.has(a) || e.push(a);
    const n = [], r = [...e], o = async () => {
      if (this.aborted || r.length === 0)
        return;
      const a = r.shift();
      if (a)
        try {
          await this.uploadPart(a), this.uploadedParts.add(a), await this.completePart(a, this.etags[a]), this.onPartComplete(a, this.etags[a]), this.updateProgress(), r.length > 0 && await o();
        } catch (l) {
          this.aborted || (console.error(`Failed to upload part ${a}, retrying...`, l), r.push(a), await new Promise((d) => setTimeout(d, 5e3)), await o());
        }
    };
    for (let a = 0; a < Math.min(this.maxConcurrentUploads, e.length); a++)
      n.push(o());
    try {
      if (await Promise.all(n), !this.aborted && this.uploadedParts.size === this.totalParts) {
        const a = await this.complete();
        this.onComplete(a);
      }
    } catch (a) {
      this.aborted || this.onError(a);
    } finally {
      this.uploading = !1;
    }
  }
  async uploadPart(e) {
    const n = (e - 1) * this.partSize, r = Math.min(n + this.partSize, this.file.size), o = this.file.slice(n, r), { etag: a } = await this.uploadWithRetry(this.uploadUrls[e], o, 3);
    if (!a)
      throw new Error(`No ETag received for part ${e}`);
    this.etags[e] = a;
  }
  async uploadWithRetry(e, n, r) {
    let o = null;
    for (let a = 0; a < r && !this.aborted; a++)
      try {
        return { etag: await this.uploadWithXHR(e, n) };
      } catch (l) {
        if (o = l, console.warn(`Upload attempt ${a + 1} failed:`, l), o.message && o.message.includes("CORS")) {
          console.error("CORS Error: Make sure the S3 bucket has proper CORS configuration");
          break;
        }
        a < r - 1 && await new Promise((d) => setTimeout(d, Math.pow(2, a) * 1e3));
      }
    throw o || new Error("Upload failed");
  }
  /**
   * Upload a blob using XMLHttpRequest (more reliable on iOS Safari)
   */
  uploadWithXHR(e, n) {
    return new Promise((r, o) => {
      const a = new XMLHttpRequest();
      a.open("PUT", e, !0), a.setRequestHeader("Content-Type", "application/octet-stream"), a.onload = () => {
        if (a.status >= 200 && a.status < 300) {
          const l = a.getResponseHeader("ETag")?.replace(/"/g, "");
          l ? r(l) : o(new Error("No ETag received in response"));
        } else
          o(new Error(`Upload failed with status ${a.status}: ${a.responseText}`));
      }, a.onerror = () => {
        o(new Error("Network error during upload"));
      }, a.onabort = () => {
        o(new Error("Upload aborted"));
      }, a.send(n);
    });
  }
  async completePart(e, n) {
    if (!this.uploadId)
      throw new Error("Upload not initialized");
    try {
      await this.client.post("/v1/media/multipart/complete-part", {
        body: {
          uploadId: this.uploadId,
          part_number: e,
          etag: n
        }
      });
    } catch (r) {
      console.error("Failed to mark part as complete:", r);
    }
  }
  async complete() {
    if (!this.uploadId || !this.key)
      throw new Error("Upload not initialized");
    try {
      const e = await this.client.post("/v1/media/multipart/complete", {
        body: {
          uploadId: this.uploadId,
          key: this.key
        }
      }), n = e.data || e;
      if (!n || !n.location)
        throw new Error("Invalid response from complete endpoint - missing location");
      return n.location;
    } catch (e) {
      throw new Error(`Failed to complete upload: ${e}`);
    }
  }
  /**
   * Abort the current upload.
   *
   * Cancels the upload in progress and notifies the server to clean up
   * any partially uploaded parts.
   *
   * @example
   * ```typescript
   * // Cancel on user request
   * cancelButton.onclick = () => upload.abort();
   * ```
   */
  async abort() {
    if (this.aborted = !0, !(!this.uploadId || !this.key))
      try {
        await this.client.post("/v1/media/multipart/abort", {
          body: {
            uploadId: this.uploadId,
            key: this.key
          }
        });
      } catch (e) {
        console.error("Failed to abort upload:", e);
      }
  }
  /**
   * Resume a previously started upload.
   *
   * Retrieves the state of a prior upload session and continues from
   * where it left off. Useful for recovering from network failures or
   * app restarts.
   *
   * @param uploadId - The upload ID from a previous session
   * @param key - The S3 key from a previous session
   *
   * @example
   * ```typescript
   * // Save upload state before app closes
   * localStorage.setItem('pendingUpload', JSON.stringify({
   *   uploadId: upload.getUploadId(),
   *   key: upload.getKey(),
   * }));
   *
   * // Resume on next app launch
   * const saved = JSON.parse(localStorage.getItem('pendingUpload'));
   * if (saved) {
   *   await upload.resume(saved.uploadId, saved.key);
   * }
   * ```
   */
  async resume(e, n) {
    try {
      const r = await this.client.get(`/v1/media/multipart/resume?uploadId=${encodeURIComponent(e)}&key=${encodeURIComponent(n)}`), o = r.data || r;
      if (!o || !o.uploadId)
        throw new Error("Invalid response from resume endpoint - missing uploadId");
      this.uploadId = o.uploadId, this.key = o.key, this.partSize = o.partSize, this.uploadedParts = new Set(o.completedParts), await this.start();
    } catch (r) {
      throw new Error(`Failed to resume upload: ${r}`);
    }
  }
  updateProgress() {
    const e = this.uploadedParts.size / this.totalParts * 100;
    this.onProgress(e, this.uploadedParts.size, this.totalParts);
  }
  /**
   * Pause the current upload.
   *
   * Stops uploading new parts but doesn't abort. Can be resumed later
   * using the resume() method with the current uploadId and key.
   */
  pause() {
    this.aborted = !0;
  }
  /**
   * Get the list of successfully uploaded part numbers.
   *
   * @returns Array of 1-indexed part numbers that have been uploaded
   */
  getUploadedParts() {
    return Array.from(this.uploadedParts);
  }
  /**
   * Get detailed progress information.
   *
   * @returns Object with percentage, part counts, and byte counts
   *
   * @example
   * ```typescript
   * const progress = upload.getProgress();
   * console.log(`${progress.percentage.toFixed(1)}% complete`);
   * console.log(`${progress.uploadedParts}/${progress.totalParts} parts`);
   * console.log(`${progress.uploadedBytes}/${progress.totalBytes} bytes`);
   * ```
   */
  getProgress() {
    return {
      percentage: this.uploadedParts.size / this.totalParts * 100,
      uploadedParts: this.uploadedParts.size,
      totalParts: this.totalParts,
      uploadedBytes: this.uploadedParts.size * this.partSize,
      totalBytes: this.file.size
    };
  }
  /**
   * Get the current upload ID.
   *
   * @returns The upload ID or null if not initialized
   */
  getUploadId() {
    return this.uploadId;
  }
  /**
   * Get the S3 key for this upload.
   *
   * @returns The S3 key or null if not initialized
   */
  getKey() {
    return this.key;
  }
}
function wg(t) {
  return t.replace(/_([a-z])/g, (e, n) => n.toUpperCase());
}
function ze(t) {
  if (t == null || typeof t != "object")
    return t;
  if (t instanceof Date)
    return t.toISOString();
  if (Array.isArray(t))
    return t.map(ze);
  if (typeof t == "object" && t.constructor === Object) {
    const e = {};
    for (const [n, r] of Object.entries(t))
      typeof r == "function" || typeof r == "symbol" || (e[wg(n)] = ze(r));
    return e;
  }
  return t;
}
function Kc(t) {
  return ze(t);
}
function wo(t) {
  const e = JSON.stringify(t, Object.keys(t).sort());
  let n = 5381;
  for (let r = 0; r < e.length; r++)
    n = (n << 5) + n ^ e.charCodeAt(r);
  return (n >>> 0).toString(36);
}
function bo(t) {
  return {
    postEngagement: t.postEngagement,
    userReaction: t.userReaction,
    userRating: t.userRating,
    ratingStats: t.ratingStats,
    // Include fields the engagement API may return
    isDeleted: t.isDeleted,
    isHidden: t.isHidden,
    isSensitive: t.isSensitive,
    otherRepostUsers: t.otherRepostUsers
  };
}
function bg() {
  try {
    const t = globalThis.import?.meta;
    if (t?.env) {
      const e = t.env.VITE_SDK_ENABLE_LOGGING;
      if (e !== void 0)
        return e === "true" || e === !0 || e === "1" || e === 1;
    }
  } catch {
  }
  if (typeof window < "u") {
    const t = window;
    if (t.__SDK_ENABLE_LOGGING__ !== void 0)
      return t.__SDK_ENABLE_LOGGING__ === !0 || t.__SDK_ENABLE_LOGGING__ === "true";
    try {
      const e = localStorage.getItem("SDK_ENABLE_LOGGING");
      if (e !== null)
        return e === "true" || e === "1";
    } catch {
    }
  }
  try {
    const t = globalThis.process?.env;
    if (t) {
      const e = t.SDK_ENABLE_LOGGING || t.VITE_SDK_ENABLE_LOGGING;
      if (e !== void 0)
        return e === "true" || e === "1";
    }
  } catch {
  }
  return !1;
}
class vr {
  constructor(e) {
    this.options = e, this.refreshCoordinator = new mg(), this.postBatchDelay = 100, this.postBatchQueue = /* @__PURE__ */ new Set(), this.postPendingResolvers = /* @__PURE__ */ new Map(), this.postBatchTimer = null, this.userBatchDelay = 50, this.userBatchMaxSize = 20, this.userBatchQueue = /* @__PURE__ */ new Map(), this.userPendingResolvers = /* @__PURE__ */ new Map(), this.userBatchTimer = null, this.engagementBatchDelay = 100, this.engagementBatchQueue = /* @__PURE__ */ new Set(), this.engagementPendingResolvers = [], this.engagementBatchTimer = null, this.engagementInFlight = null, this.notificationCountsInFlight = null, this.actingContext = null, this.enableLogging = e.enableLogging !== void 0 ? e.enableLogging : bg(), this.tokens = e.tokenProvider ?? new vg(typeof localStorage < "u" ? localStorage : {
      getItem: () => null,
      setItem: () => {
      },
      removeItem: () => {
      }
    }, e.tokens), this.cachePromise = e.cache ? Promise.resolve(e.cache) : gg(void 0, e.dbName);
    const n = {
      baseUrl: e.baseUrl.replace(/\/$/, ""),
      getAuthTokens: () => this.tokens.getTokens(),
      getActingContext: () => this.actingContext,
      onRefreshTokens: e.onRefreshTokens ? () => this.refreshCoordinator.run(e.onRefreshTokens) : void 0,
      onUnauthorized: e.onUnauthorized,
      useMsgpack: e.useMsgpack
    };
    this.client = new og(n);
  }
  /**
   * Conditional logging helper. Only logs if logging is enabled.
   */
  log(...e) {
    this.enableLogging && console.log(...e);
  }
  setTokens(e) {
    this.tokens.setTokens(e);
  }
  getTokens() {
    return this.tokens.getTokens();
  }
  isAuthenticated() {
    return !!this.tokens.getTokens()?.accessToken;
  }
  /**
   * Set the acting context for delegated user access.
   * All subsequent API requests will include acting context headers.
   */
  setActingContext(e) {
    this.actingContext = e, typeof localStorage < "u" && (e ? localStorage.setItem("actingContext", JSON.stringify(e)) : localStorage.removeItem("actingContext"));
  }
  /**
   * Get the current acting context.
   */
  getActingContext() {
    if (this.actingContext)
      return this.actingContext;
    if (typeof localStorage < "u") {
      const e = localStorage.getItem("actingContext");
      if (e)
        try {
          return this.actingContext = JSON.parse(e), this.actingContext;
        } catch {
          localStorage.removeItem("actingContext");
        }
    }
    return null;
  }
  /**
   * Clear the acting context.
   */
  clearActingContext() {
    this.actingContext = null, typeof localStorage < "u" && localStorage.removeItem("actingContext");
  }
  /**
   * Check if currently acting as another user.
   */
  isActing() {
    if (!this.actingContext)
      return !1;
    const e = new Date(this.actingContext.expiresAt).getTime();
    return Date.now() >= e ? (this.clearActingContext(), !1) : !0;
  }
  // ---------------------------------------------------------------------------
  // Authentication
  // ---------------------------------------------------------------------------
  /**
   * Get the current authenticated user's profile
   * Returns null immediately if no auth token is set (avoids unnecessary API call)
   */
  async getCurrentUser() {
    if (!this.tokens.getTokens()?.accessToken)
      return null;
    try {
      const n = await this.client.get("/v1/users/me"), r = this.unwrap(n);
      if (!r)
        return null;
      const o = JSON.parse(JSON.stringify(r)), a = o.badges, l = [];
      if (Array.isArray(a))
        for (const p of a)
          typeof p == "string" ? l.push(p) : p && typeof p == "object" && "name" in p && l.push(p.name);
      return {
        ...o,
        badges: l
      };
    } catch {
      return null;
    }
  }
  /**
   * Update the current user's profile
   * Supports both Promise and callback patterns
   * When callback is provided, the PATCH request fires and returns immediately (non-blocking)
   * The read-after-write hook is called when the response arrives
   */
  async updateCurrentUser(e, n) {
    const r = async (o) => {
      const a = await this.cachePromise;
      if (o.data) {
        const p = JSON.parse(JSON.stringify(o.data)), _ = this.normalizeUserProfile(p);
        return await a.setUser(_.ulid, _), _;
      }
      let l = null;
      if (this.actingContext) {
        this.log("📡 SDK: Fetching managed user profile after update:", this.actingContext.managedUserUlid);
        const p = await this.getUserProfileById(this.actingContext.managedUserUlid);
        p.data && (l = JSON.parse(JSON.stringify(p.data)));
      } else {
        const p = await this.client.get("/v1/users/me"), _ = this.unwrap(p);
        _ && (l = JSON.parse(JSON.stringify(_)));
      }
      if (!l)
        throw new Error("Failed to fetch updated profile");
      const d = this.normalizeUserProfile(l);
      return await a.setUser(d.ulid, d), d;
    };
    if (n)
      return queueMicrotask(() => {
        this.client.patch("/v1/users/me", {
          body: e
        }).then((o) => r(o)).then((o) => {
          n(null, o);
        }).catch((o) => {
          console.error("SDK: Error in updateCurrentUser:", o), n(o instanceof Error ? o : new Error(String(o)), null);
        });
      }), Promise.resolve({});
    try {
      const o = await this.client.patch("/v1/users/me", {
        body: e
      });
      return await r(o);
    } catch (o) {
      throw o;
    }
  }
  /**
   * Check if a username is available
   * Returns true if available, false if taken
   */
  async checkUsernameAvailability(e) {
    try {
      return await this.client.post("/v1/users/me/checkUsername", {
        body: { username: e }
      }), !0;
    } catch (n) {
      if (n.status === 403)
        return !1;
      throw n;
    }
  }
  /**
   * Login with email and password.
   *
   * @param email - User's email address
   * @param password - User's password
   * @returns Authentication tokens (access and refresh)
   *
   * @example
   * ```typescript
   * const tokens = await sdk.login('user@example.com', 'password123');
   * console.log('Logged in, access token:', tokens.accessToken);
   * ```
   *
   * @category Authentication
   */
  async login(e, n) {
    const r = await this.client.post("/v1/auth/login", {
      body: { email: e, password: n }
    }), o = this.unwrap(r);
    return this.setTokens(o), o;
  }
  /**
   * Login with OAuth authorization code (social login callback).
   *
   * @param provider - OAuth provider name (e.g., 'google', 'apple')
   * @param code - Authorization code from OAuth callback
   * @param redirectUri - The redirect URI used in the OAuth flow
   * @param extraData - Additional data for specific providers (e.g., Apple id_token)
   * @returns Authentication tokens
   *
   * @example
   * ```typescript
   * // Google OAuth callback
   * const tokens = await sdk.loginWithOAuth('google', authCode, redirectUri);
   *
   * // Apple OAuth with id_token
   * const tokens = await sdk.loginWithOAuth('apple', authCode, redirectUri, {
   *   id_token: appleIdToken,
   *   user: userInfo
   * });
   * ```
   *
   * @category Authentication
   */
  async loginWithOAuth(e, n, r, o) {
    const a = { code: n };
    r && (a.redirect_uri = r), o?.id_token && (a.id_token = o.id_token), o?.user && (a.user = o.user);
    const l = await this.client.post(`/v1/auth/${e}/callback`, {
      body: a
    }), d = {
      accessToken: l.access_token || l.accessToken,
      refreshToken: l.refresh_token || l.refreshToken
    };
    return this.setTokens(d), d;
  }
  /**
   * Login with a magic link code (6-digit auth code).
   *
   * @param identifier - Email or phone number
   * @param authCode - 6-digit code (string or number, will be converted to integer)
   * @returns Authentication tokens
   *
   * @example
   * ```typescript
   * // Request magic link first
   * await sdk.requestMagicLink('user@example.com');
   *
   * // Then login with the code from email
   * const tokens = await sdk.loginWithMagicLink('user@example.com', '123456');
   * ```
   *
   * @category Authentication
   */
  async loginWithMagicLink(e, n) {
    const r = await this.client.post("/authCodeLogin", {
      body: { identifier: e, authCode: parseInt(String(n), 10) }
    }), o = {
      accessToken: r.access_token,
      refreshToken: r.refresh_token
    };
    return this.setTokens(o), o;
  }
  /**
   * Request a magic link (auth code) to be sent to an email address.
   *
   * @param email - Email address to send the auth code to
   * @param options - Optional referral and routing data
   *
   * @example
   * ```typescript
   * await sdk.requestMagicLink('user@example.com', { referralCode: 'REF123' });
   * // User receives email with 6-digit code
   * ```
   *
   * @category Authentication
   */
  async requestMagicLink(e, n) {
    const r = { email: e };
    n?.referralCode && (r.ref = n.referralCode), n?.redirect && (r.redirect = n.redirect), n?.platform && (r.platform = n.platform), await this.client.post("/sendMagicLink", {
      body: r
    });
  }
  /**
   * Request an auth code to be sent to an email address.
   * This is a simpler alternative to magic links that sends a 6-digit code.
   *
   * @param email - Email address to send the auth code to
   * @param options - Optional referral and routing data
   *
   * @example
   * ```typescript
   * await sdk.requestAuthCode('user@example.com');
   * // User receives email with 6-digit code
   * // Then call loginWithMagicLink() with the code
   * const tokens = await sdk.loginWithMagicLink('user@example.com', '123456');
   * ```
   *
   * @category Authentication
   */
  async requestAuthCode(e, n) {
    const r = { email: e };
    n?.referralCode && (r.ref = n.referralCode), n?.redirect && (r.redirect = n.redirect), n?.platform && (r.platform = n.platform), await this.client.post("/sendAuthCode", {
      body: r
    });
  }
  /**
   * Register a new user account.
   *
   * @param payload - Registration details
   * @param payload.email - User's email address
   * @param payload.password - User's password
   * @param payload.username - Unique username (handle)
   * @param payload.displayName - Optional display name
   * @returns Authentication tokens for the new account
   *
   * @example
   * ```typescript
   * const tokens = await sdk.register({
   *   email: 'user@example.com',
   *   password: 'securePassword123',
   *   username: 'newuser',
   *   displayName: 'New User'
   * });
   * ```
   *
   * @category Authentication
   */
  async register(e) {
    const n = await this.client.post("/v1/auth/register", {
      body: e
    }), r = this.unwrap(n);
    return this.setTokens(r), r;
  }
  /**
   * Logout the current user and clear all tokens.
   *
   * Also clears the local cache to remove any cached user data.
   *
   * @example
   * ```typescript
   * await sdk.logout();
   * // User is now logged out, redirect to login page
   * ```
   *
   * @category Authentication
   */
  async logout() {
    try {
      await this.client.post("/v1/auth/logout");
    } finally {
      this.setTokens(null), await this.clearCache();
    }
  }
  /**
   * Delete the current user's account (soft delete).
   *
   * This permanently marks the account as deleted. The user will be logged out
   * and all tokens will be invalidated. This action cannot be undone by the user.
   *
   * @example
   * ```typescript
   * // Show confirmation dialog first
   * if (confirm('Are you sure you want to delete your account?')) {
   *   await sdk.deleteAccount();
   *   // Redirect to home page
   *   router.push('/');
   * }
   * ```
   *
   * @category Authentication
   */
  async deleteAccount() {
    await this.client.delete("/v1/users/me"), this.setTokens(null), await this.clearCache();
  }
  /**
   * Refresh the access token using the stored refresh token.
   *
   * @returns New authentication tokens, or null if refresh failed
   *
   * @example
   * ```typescript
   * const tokens = await sdk.refreshToken();
   * if (!tokens) {
   *   // Refresh failed, redirect to login
   *   router.push('/login');
   * }
   * ```
   *
   * @category Authentication
   */
  async refreshToken() {
    const e = this.getTokens();
    if (!e?.refreshToken)
      return null;
    try {
      const n = await this.client.post("/auth/refresh", {
        body: { refresh_token: e.refreshToken }
      }), r = this.unwrap(n);
      return this.setTokens(r), r;
    } catch {
      return this.setTokens(null), null;
    }
  }
  /**
   * Request password reset email
   */
  async requestPasswordReset(e) {
    await this.client.post("/v1/auth/password/forgot", {
      body: { email: e }
    });
  }
  /**
   * Reset password with token
   */
  async resetPassword(e, n, r) {
    await this.client.post("/v1/auth/password/reset", {
      body: { token: e, password: n, password_confirmation: r }
    });
  }
  /**
   * Change password for authenticated user
   */
  async changePassword(e, n, r) {
    await this.client.post("/v1/auth/password/change", {
      body: {
        current_password: e,
        password: n,
        password_confirmation: r
      }
    });
  }
  /**
   * Fetch a single post by ULID using cache → API resolution.
   */
  async getPostByUlid(e, n = !1) {
    const r = await this.cachePromise;
    if (!n) {
      const a = await r.getPost(e);
      if (a)
        return a;
    }
    if (n)
      try {
        const a = await this.client.post("/v1/posts", {
          body: { ulids: [e] }
        }), l = this.unwrap(a);
        if (Array.isArray(l) && l.length > 0) {
          const d = this.normalizePost(l[0]), p = d.ulid || d.id;
          return p && await r.setPost(p, d), d;
        }
        return null;
      } catch (a) {
        return console.error(`[SDK] Failed to force-refresh post ${e}:`, a), null;
      }
    return (await this.fetchPostsBatch([e]))[e] ?? null;
  }
  /**
   * Batch fetch posts with three-tier resolution: cache → API.
   */
  async fetchPostsBatch(e) {
    const n = await this.cachePromise, r = Array.from(new Set(e)), o = {};
    this.log(`[SDK] 📥 fetchPostsBatch called with ${r.length} IDs`, r.slice(0, 3)), console.log(`[SDK] 📥 fetchPostsBatch called with ${r.length} IDs`, r.slice(0, 5));
    const a = await n.getPosts(r);
    if (Object.assign(o, a), console.log(`[SDK] 💾 Cache hits: ${Object.keys(a).length}/${r.length}`), Object.keys(a).length > 0) {
      const w = Object.values(a)[0];
      console.log("[SDK] 💾 First cached post:", {
        ulid: w?.ulid,
        hasTitle: !!w?.title,
        hasAudio: !!w?.audio,
        audioLength: w?.audio?.length,
        hasStreamUrl: !!w?.streamUrl,
        keys: w ? Object.keys(w).slice(0, 15) : []
      });
    }
    const l = r.filter((w) => !o[w]);
    if (console.log(`[SDK] 🔍 Missing from cache: ${l.length}`, l.slice(0, 5)), l.length === 0)
      return console.log("[SDK] ⏩ All posts found in cache, skipping API call"), o;
    if (l.length === 0)
      return o;
    this.log(`[SDK] ⏱️  Setting up batch timeout (delay: ${this.postBatchDelay}ms)`);
    const d = l.map((w) => new Promise((D, O) => {
      this.postBatchQueue.add(w), this.postPendingResolvers.has(w) || this.postPendingResolvers.set(w, []), this.postPendingResolvers.get(w).push({ resolve: D, reject: O });
    }));
    this.postBatchTimer !== null && clearTimeout(this.postBatchTimer), this.postBatchTimer = window.setTimeout(() => {
      this.flushPostBatch(n);
    }, this.postBatchDelay);
    const p = await Promise.allSettled(d), _ = p.filter((w) => w.status === "fulfilled"), v = p.filter((w) => w.status === "rejected");
    return v.length > 0 && console.warn(`[SDK] ⚠️  ${v.length}/${p.length} posts failed to fetch:`, v.map((w) => w.reason.message)), this.log(`[SDK] ✅ Successfully fetched ${_.length}/${p.length} posts`), _.forEach((w) => {
      const D = w.value, O = D.ulid || D.id;
      O && (o[O] = D);
    }), o;
  }
  async flushPostBatch(e) {
    const n = Array.from(this.postBatchQueue);
    if (this.postBatchQueue.clear(), this.postBatchTimer = null, n.length !== 0) {
      this.log(`[SDK] 🔄 Flushing post batch: ${n.length} posts`, n.slice(0, 3));
      try {
        const r = await this.client.post("/v1/posts", {
          body: { ulids: n }
        });
        this.log("[SDK] ✅ POST /v1/posts response received", { payload: typeof r });
        const o = this.unwrap(r);
        if (this.log("[SDK] 📦 Unwrapped posts:", { isArray: Array.isArray(o), length: Array.isArray(o) ? o.length : 0 }), !Array.isArray(o)) {
          console.warn("[SDK] ⚠️  Posts is not an array!", { posts: o });
          return;
        }
        const a = o.reduce((l, d, p) => {
          const _ = d.ulid || d.id;
          if (p < 2 && this.log(`[SDK] 🔑 Post ${p}:`, { ulid: d.ulid, id: d.id, hasUlid: !!d.ulid, hasId: !!d.id, keys: Object.keys(d).slice(0, 10) }), !_)
            return console.warn(`[SDK] ⚠️  Post ${p} has no ulid or id!`, { keys: Object.keys(d) }), l;
          const v = this.normalizePost(d);
          return p < 2 && this.log(`[SDK] ✨ Normalized post ${p}:`, {
            ulid: v.ulid,
            type: v.type,
            hasTitle: !!v.title,
            title: v.title,
            hasImages: !!v.images,
            imagesLength: Array.isArray(v.images) ? v.images.length : 0
          }), l[_] = v, l;
        }, {});
        this.log(`[SDK] 🗺️  Mapped ${Object.keys(a).length} posts from ${o.length} raw posts`), await e.setPosts(a), this.log(`[SDK] 🎯 Resolving promises for ${n.length} IDs with ${Object.keys(a).length} posts`), n.forEach((l) => {
          const d = this.postPendingResolvers.get(l) || [], p = a[l];
          d.forEach(({ resolve: _, reject: v }) => {
            p ? _(p) : (console.warn(`[SDK] ❌ Post ${l} not returned from API`), v(new Error(`Post ${l} not returned`)));
          }), this.postPendingResolvers.delete(l);
        });
      } catch (r) {
        n.forEach((o) => {
          (this.postPendingResolvers.get(o) || []).forEach(({ reject: l }) => l(r)), this.postPendingResolvers.delete(o);
        });
      }
    }
  }
  /**
  * Fetch a feed page from /v1/songs/feed/all (configurable), hydrate posts via batch fetch,
  * and cache ULID ordering for offline/instant reload.
  * @param endpoint - API endpoint path
  */
  async fetchFeedCount(e) {
    const n = e.endsWith("/count") ? e : `${e}/count`;
    return (await this.client.get(n)).count ?? 0;
  }
  /**
   * Fetch a feed page from /v1/songs/feed/all (configurable), hydrate posts via batch fetch,
   * and cache ULID ordering for offline/instant reload.
   * @param cursor - Pagination cursor for next page
   * @param endpoint - API endpoint path
   * @param cacheKey - Cache key for storing results
   * @param limit - Number of items per page (default: 100, max: 100)
   */
  async fetchFeedPage(e, n = "/v1/songs/feed/all", r = n, o = vr.DEFAULT_FEED_LIMIT) {
    let a = n, l = {};
    const d = n.indexOf("?");
    d !== -1 && (a = n.substring(0, d), new URLSearchParams(n.substring(d + 1)).forEach((oe, fe) => {
      l[fe] = oe;
    })), e && (l.cursor = e), l.limit = String(Math.min(o, 100));
    const _ = await this.client.get(a, {
      query: Object.keys(l).length > 0 ? l : void 0
    }), v = this.unwrap(_);
    if (!Array.isArray(v))
      return console.warn(`fetchFeedPage: Expected array from ${n}, got:`, typeof v), { ulids: [], posts: [], nextCursor: null };
    if (v.length === 0)
      return { ulids: [], posts: [], nextCursor: null };
    const w = this.extractNextCursor(_), D = v[0];
    if (D && (D.body !== void 0 || D.title !== void 0 || D.content !== void 0 || D.song_title !== void 0 || D.songTitle !== void 0)) {
      const pe = v.map((fe) => this.normalizePost(fe)).filter(Boolean);
      return { ulids: pe.map((fe) => fe.ulid).filter((fe) => !!fe), posts: pe, nextCursor: w ?? null };
    }
    const Q = v.map((pe) => pe.ulid).filter(Boolean);
    this.log(`[SDK] 📋 Extracted ${Q.length} ULIDs from collection`, Q.slice(0, 3));
    const H = v.reduce((pe, oe) => {
      const fe = oe.ulid;
      return fe && (pe[fe] = {
        userId: oe.userId || oe.user_ulid || oe.userULID,
        groupUlid: oe.groupUlid,
        groupName: oe.groupName,
        commentCount: oe.commentCount,
        isLikedByProfileUser: oe.isLikedByProfileUser
      }), pe;
    }, {});
    this.log(`[SDK] 👤 Built feedItemMap with ${Object.keys(H).length} entries`);
    let le = [];
    if (Q.length > 0) {
      this.log(`[SDK] 🔄 Calling fetchPostsBatch with ${Q.length} ULIDs...`);
      const pe = await this.fetchPostsBatch(Q);
      this.log(`[SDK] ✅ fetchPostsBatch returned ${Object.keys(pe).length} posts`), le = Q.map((xe) => {
        const ne = pe[xe];
        if (!ne)
          return null;
        const Se = H[xe] || {};
        return {
          ...ne,
          userId: ne.userId || Se.userId,
          groupUlid: ne.groupUlid || Se.groupUlid,
          groupName: ne.groupName || Se.groupName,
          commentCount: Se.commentCount ?? ne.commentCount,
          isLikedByProfileUser: Se.isLikedByProfileUser
        };
      }).filter((xe) => !!xe), await (await this.cachePromise).appendToFeedResource(r, Q, w ?? null);
      const fe = v.map((xe) => ({
        userId: xe.userId || xe.user_ulid || xe.userULID,
        userUpdatedAt: xe.userUpdatedAtEpoch || xe.userUpdatedAt
      })).filter((xe) => xe.userId);
      await this.hydrateUsersFromHints(fe);
    }
    return {
      ulids: Q,
      posts: le,
      nextCursor: w
    };
  }
  // ─────────────────────────────────────────────────────────────────────────
  // Feed Methods
  // ─────────────────────────────────────────────────────────────────────────
  /**
   * Fetch the trending songs feed.
   *
   * @param cursor - Pagination cursor for fetching next page
   * @param cacheKey - Cache key override (default: endpoint path)
   * @returns A page of trending posts/songs
   *
   * @example
   * ```typescript
   * const page = await sdk.fetchTrendingFeed();
   * for (const post of page.posts) {
   *   console.log(post.title, post.artist);
   * }
   * ```
   *
   * @category Feeds
   */
  async fetchTrendingFeed(e, n = "/v1/songs/feed/trending") {
    return this.fetchFeedPage(e, "/v1/songs/feed/trending", n);
  }
  /**
   * Fetch the following feed (posts from users you follow).
   *
   * @param cursor - Pagination cursor for fetching next page
   * @param cacheKey - Cache key override
   * @returns A page of posts from followed users
   *
   * @category Feeds
   */
  async fetchFollowingFeed(e, n = "/v1/songs/feed/following") {
    return this.fetchFeedPage(e, "/v1/songs/feed/following", n);
  }
  /**
   * Fetch the discover feed (recommended content).
   *
   * @param cursor - Pagination cursor for fetching next page
   * @param cacheKey - Cache key override
   * @returns A page of recommended posts
   *
   * @category Feeds
   */
  async fetchDiscoverFeed(e, n = "/v1/songs/feed/discover") {
    return this.fetchFeedPage(e, "/v1/songs/feed/discover", n);
  }
  /**
   * Fetch the latest feed (most recent posts).
   *
   * @param cursor - Pagination cursor for fetching next page
   * @param cacheKey - Cache key override
   * @returns A page of the most recent posts
   *
   * @category Feeds
   */
  async fetchLatestFeed(e, n = "/v1/songs/feed/latest") {
    return this.fetchFeedPage(e, "/v1/songs/feed/latest", n);
  }
  /**
   * Fetch a genre-specific feed.
   *
   * @param genrePath - Genre path (e.g., 'hip-hop', 'electronic/house')
   * @param cursor - Pagination cursor for fetching next page
   * @param cacheKey - Cache key override
   * @returns A page of posts in the specified genre
   *
   * @example
   * ```typescript
   * const page = await sdk.fetchGenreFeed('hip-hop');
   * ```
   *
   * @category Feeds
   */
  async fetchGenreFeed(e, n, r) {
    const a = `/v1/songs/feed/genre/${encodeURIComponent(e)}`;
    return this.fetchFeedPage(n, a, r ?? a);
  }
  /**
   * Fetch the popular genres feed.
   *
   * @param cursor - Pagination cursor
   * @param cacheKey - Cache key override
   * @returns A page of posts from popular genres
   *
   * @category Feeds
   */
  async fetchPopularGenresFeed(e, n = "/v1/songs/feed/genres/popular") {
    return this.fetchFeedPage(e, "/v1/songs/feed/genres/popular", n);
  }
  /**
   * Fetch the trending genres feed.
   *
   * @param cursor - Pagination cursor
   * @param cacheKey - Cache key override
   * @returns A page of posts from trending genres
   *
   * @category Feeds
   */
  async fetchTrendingGenresFeed(e, n = "/v1/songs/feed/trending/genres") {
    return this.fetchFeedPage(e, "/v1/songs/feed/trending/genres", n);
  }
  /**
   * Fetch the trending users feed.
   *
   * @param cursor - Pagination cursor
   * @param cacheKey - Cache key override
   * @returns A page of posts from trending users
   *
   * @category Feeds
   */
  async fetchTrendingUsersFeed(e, n = "/v1/songs/feed/trending/users") {
    return this.fetchFeedPage(e, "/v1/songs/feed/trending/users", n);
  }
  /**
   * Fetch unrated songs feed for the rating feature.
   * Returns songs the user hasn't rated yet, optionally filtered by genre.
   *
   * @param options - Optional filters (genreIds, limit)
   * @returns Promise resolving to a FeedPage with unrated songs
   *
   * @example
   * ```typescript
   * // Get unrated songs across all genres
   * const feed = await sdk.getUnratedSongsFeed();
   *
   * // Get unrated songs for specific genres
   * const feed = await sdk.getUnratedSongsFeed({ genreIds: [1, 2, 3] });
   * ```
   *
   * @category Feeds
   */
  async getUnratedSongsFeed(e) {
    const n = await this.client.post("/v1/songs/feed/unrated", {
      body: {
        genre_ids: e?.genreIds?.length ? e.genreIds : void 0,
        limit: e?.limit ?? 20,
        cursor: e?.cursor ?? void 0
      }
    }), o = (n.data || []).map((p) => p.ulid).filter(Boolean), a = n.nextCursor || n.meta?.nextCursor || null;
    if (o.length === 0)
      return { ulids: [], posts: [], nextCursor: a };
    const l = await this.fetchPostsBatch(o), d = o.map((p) => l[p]).filter((p) => !!p);
    return {
      ulids: o,
      posts: d,
      nextCursor: a
    };
  }
  /**
   * Hydrate an existing feed route from cache (if present).
   */
  async readCachedFeed(e) {
    const n = await this.cachePromise, r = await n.getFeedResource(e);
    if (!r)
      return null;
    const o = await n.getPosts(r.ulids), a = r.ulids.map((l) => o[l]).filter(Boolean);
    return {
      ulids: r.ulids,
      posts: a,
      nextCursor: r.cursor
    };
  }
  /**
   * Clear all cached data (posts + feed ULIDs).
   */
  async clearCache() {
    await (await this.cachePromise).clearAll();
  }
  /**
   * Invalidate a user's profile cache.
   * Call this after operations that change user profile data (e.g., pin/unpin).
   * @param ulid - The user ULID to invalidate
   */
  async invalidateUserCache(e) {
    await (await this.cachePromise).deleteUser(e);
  }
  // ---------------------------------------------------------------------------
  // File uploads (S3 multipart)
  // ---------------------------------------------------------------------------
  /**
   * Get a presigned URL for direct file upload.
   * Use this for small files (< 10MB) to avoid multipart overhead.
   */
  async getPresignedUploadUrl(e, n) {
    const r = await this.client.post("/v1/media/signed-storage-url", {
      body: {
        content_type: e,
        key: n?.key
      }
    }), o = r.data || r;
    return {
      url: o.url,
      key: o.key,
      publicUrl: o.publicUrl || o.url,
      // Fallback to presigned URL if publicUrl not provided
      headers: o.headers || {}
    };
  }
  /**
   * Upload a file directly using a presigned URL (for small files).
   * Uses XMLHttpRequest for better iOS Safari compatibility.
   */
  async uploadDirect(e, n, r, o) {
    return new Promise((a, l) => {
      const d = new XMLHttpRequest();
      d.open("PUT", n, !0), d.setRequestHeader("Content-Type", r), o && d.upload.addEventListener("progress", (p) => {
        if (p.lengthComputable) {
          const _ = p.loaded / p.total * 100;
          o(_);
        }
      }), d.onload = () => {
        if (d.status >= 200 && d.status < 300) {
          const p = new URL(n);
          p.search = "", a(p.toString());
        } else
          l(new Error(`Upload failed with status ${d.status}: ${d.responseText}`));
      }, d.onerror = () => {
        l(new Error("Network error during upload"));
      }, d.onabort = () => {
        l(new Error("Upload aborted"));
      }, d.send(e);
    });
  }
  /**
   * Upload a media file using direct presigned URL (small files) or multipart upload (large files).
   * Files are uploaded to a tmp/ location in S3 for processing.
   * Returns the final S3 URL after upload completes.
   *
   * For files < 10MB: Uses direct presigned URL upload (faster, simpler)
   * For files >= 10MB: Uses multipart upload (required for large files)
   */
  async uploadMediaFile(e, n) {
    const r = this.validateMediaFile(e, n.mediaType);
    if (r)
      throw new Error(r);
    const o = Date.now(), a = e.name.replace(/[^a-zA-Z0-9.-]/g, "_"), l = `tmp/${n.userUlid}/${o}-${a}`, d = 10 * 1024 * 1024;
    if (e.size < d) {
      const p = e.type || "application/octet-stream", { url: _, key: v, publicUrl: w } = await this.getPresignedUploadUrl(p, {
        key: l
      });
      return await this.uploadDirect(e, _, p, n.onProgress), { url: w, key: v };
    } else
      return new Promise((p, _) => {
        new Vc(this.client, {
          file: e,
          key: l,
          onProgress: (w) => {
            n.onProgress && n.onProgress(w);
          },
          onComplete: (w) => {
            p({ url: w, key: l });
          },
          onError: (w) => {
            _(w);
          }
        }).start().catch(_);
      });
  }
  /**
   * Create a multipart upload instance for more control over the upload process.
   */
  createMultipartUpload(e) {
    return new Vc(this.client, e);
  }
  validateMediaFile(e, n) {
    switch (n) {
      case "audio":
        return e.size > 104857600 ? "Audio file exceeds the 100MB upload limit" : e.type.startsWith("audio/") ? null : "Please select a valid audio file";
      case "image":
        return e.size > 20971520 ? "Image exceeds the 20MB upload limit" : e.type.startsWith("image/") ? null : "Please select a valid image file";
      case "video":
        return e.size > 524288e3 ? "Video exceeds the 500MB upload limit" : e.type.startsWith("video/") ? null : "Please select a valid video file";
      default:
        return e.size > 104857600 ? "File exceeds the 100MB upload limit" : null;
    }
  }
  // ─────────────────────────────────────────────────────────────────────────
  // Post Methods
  // ─────────────────────────────────────────────────────────────────────────
  /**
   * Create a new post.
   *
   * @param payload - Post data (content, type, media, etc.)
   * @returns The created post with full data
   *
   * @example
   * ```typescript
   * const post = await sdk.createPost({
   *   content: 'Hello world!',
   *   type: 'POST'
   * });
   * ```
   *
   * @category Posts
   */
  async createPost(e) {
    const n = await this.client.post("/v1/posts/create", {
      body: e
    }), r = this.unwrap(n);
    if (r.ulid) {
      const o = await this.getPostByUlid(r.ulid, !0);
      if (o)
        return o;
    }
    return await this.cachePost(r), r;
  }
  /**
   * Register an uploaded video URL as a temporary video.
   * This is the first step in creating a video post.
   *
   * @param videoUrl - The S3 URL of the uploaded video
   * @param videoType - Type of video: 'video' or 'burst'
   * @returns The temporary video record with its ULID
   *
   * @example
   * ```typescript
   * const tmpVideo = await sdk.createTmpVideo(
   *   'https://s3.../video.mp4',
   *   'video'
   * );
   * // Use tmpVideo.id as videoId when creating the video post
   * ```
   *
   * @category Videos
   */
  async createTmpVideo(e, n = "video") {
    const r = await this.client.post(`/v1/${n}/upload`, {
      body: { videoUrl: e }
    });
    return this.unwrap(r);
  }
  /**
   * Create a video post.
   * Use this instead of createPost() when posting a video.
   *
   * @param payload - Video post data including videoId from createTmpVideo()
   * @returns The created video post
   *
   * @example
   * ```typescript
   * // First, upload video and register it
   * const tmpVideo = await sdk.createTmpVideo(videoUrl, 'video');
   *
   * // Then create the video post
   * const post = await sdk.createVideoPost({
   *   videoId: tmpVideo.id,
   *   title: 'My Video',
   *   body: 'Description',
   *   groupName: 'default'
   * });
   * ```
   *
   * @category Videos
   */
  async createVideoPost(e) {
    const n = await this.client.post("/v1/video/add", {
      body: {
        ...e,
        type: e.type || "VIDEO",
        groupName: e.groupName || "default"
      }
    }), r = this.unwrap(n);
    if (r.ulid) {
      const o = await this.getPostByUlid(r.ulid, !0);
      if (o)
        return o;
    }
    return await this.cachePost(r), r;
  }
  /**
   * Update an existing post.
   *
   * @param postUlid - ULID of the post to update
   * @param payload - Updated post data
   * @returns The updated post
   *
   * @example
   * ```typescript
   * const updated = await sdk.updatePost('01HX...', {
   *   content: 'Updated content'
   * });
   * ```
   *
   * @category Posts
   */
  async updatePost(e, n) {
    const r = await this.client.patch(`/v1/posts/${encodeURIComponent(e)}`, { body: n }), o = this.unwrap(r);
    if (o.ulid) {
      const a = await this.getPostByUlid(o.ulid, !0);
      if (a)
        return a;
    }
    return await this.cachePost(o), o;
  }
  /**
   * Delete a post.
   *
   * @param postUlid - ULID of the post to delete
   *
   * @example
   * ```typescript
   * await sdk.deletePost('01HX...');
   * ```
   *
   * @category Posts
   */
  async deletePost(e) {
    await this.client.delete(`/v1/posts/${encodeURIComponent(e)}`), await (await this.cachePromise).deletePost(e);
  }
  /**
   * Add a reaction to a post.
   *
   * @param postUlid - ULID of the post
   * @param reaction - Reaction emoji (e.g., '❤️', '🔥')
   *
   * @example
   * ```typescript
   * await sdk.addReaction('01HX...', '❤️');
   * ```
   *
   * @category Posts
   */
  async addReaction(e, n) {
    await this.client.post(`/v1/posts/${encodeURIComponent(e)}/reactions`, {
      body: { reaction: n }
    }), await this.refreshPostEngagement(e);
  }
  /**
   * Remove a reaction from a post.
   *
   * @param postUlid - ULID of the post
   * @param reaction - Reaction emoji to remove
   *
   * @category Posts
   */
  async removeReaction(e, n) {
    await this.client.delete(`/v1/posts/${encodeURIComponent(e)}/reactions`, {
      body: { reaction: n }
    }), await this.refreshPostEngagement(e);
  }
  /**
   * Refresh a single post's engagement data in the cache.
   *
   * @param postUlid - ULID of the post to refresh
   *
   * @category Posts
   */
  async refreshPostEngagement(e) {
    try {
      const r = (await this.fetchEngagement([e]))[e];
      r && await this.updateCachedEngagement(e, r);
    } catch {
    }
  }
  /**
   * Bookmark a post.
   *
   * @param postUlid - ULID of the post to bookmark
   *
   * @category Posts
   */
  async bookmarkPost(e) {
    await this.client.post(`/v1/posts/${encodeURIComponent(e)}/bookmarks`), await this.refreshPostEngagement(e);
  }
  /**
   * Remove a bookmark from a post.
   *
   * @param postUlid - ULID of the post to unbookmark
   *
   * @category Posts
   */
  async unbookmarkPost(e) {
    await this.client.delete(`/v1/posts/${encodeURIComponent(e)}/bookmarks`), await this.refreshPostEngagement(e);
  }
  /**
   * Share a post (increment share count).
   *
   * @param postUlid - ULID of the post to share
   *
   * @category Posts
   */
  async sharePost(e) {
    await this.client.post(`/v1/posts/${encodeURIComponent(e)}/share`), await this.refreshPostEngagement(e);
  }
  /**
   * Upvote a post.
   *
   * @param postUlid - ULID of the post to upvote
   *
   * @category Posts
   */
  async upvotePost(e) {
    await this.client.post(`/v1/posts/${encodeURIComponent(e)}/upvote`), await this.refreshPostEngagement(e);
  }
  /**
   * Vote on a poll attached to a post.
   * Updates the post's poll data in the Dexie cache after voting.
   * @param postUlid - The ULID of the post containing the poll
   * @param optionId - The ID of the poll option to vote for
   * @returns The updated poll data
   */
  async votePoll(e, n) {
    const r = await this.client.post(`/v1/posts/${encodeURIComponent(e)}/polls/vote`, { body: { optionId: n } }), o = this.unwrap(r), a = Kc(o);
    return await this.updateCachedPostPoll(e, a), a;
  }
  /**
   * Update the poll data for a cached post
   */
  async updateCachedPostPoll(e, n) {
    try {
      const r = await this.cachePromise, o = await r.getPost(e);
      o && (o.poll = n, await r.setPost(e, o));
    } catch {
    }
  }
  /**
   * Repost a post (simple repost without additional content)
   */
  async repost(e) {
    const n = await this.client.post(`/v1/posts/${encodeURIComponent(e)}/reposts`), r = this.unwrap(n);
    if (r.ulid) {
      const o = await this.getPostByUlid(r.ulid, !0);
      if (o)
        return await this.refreshPostEngagement(e), o;
    }
    return await this.cachePost(r), r;
  }
  /**
   * Remove a repost
   */
  async unrepost(e) {
    await this.client.delete(`/v1/posts/${encodeURIComponent(e)}/reposts`), await this.refreshPostEngagement(e);
  }
  /**
   * Quote a post (repost with additional content)
   */
  async quotePost(e, n) {
    const r = await this.client.post(`/v1/posts/${encodeURIComponent(e)}/quote`, { body: { content: n } }), o = this.unwrap(r);
    if (o.ulid) {
      const a = await this.getPostByUlid(o.ulid, !0);
      if (a)
        return await this.refreshPostEngagement(e), a;
    }
    return await this.cachePost(o), o;
  }
  /**
   * Get reposts of a post
   */
  async getReposts(e, n) {
    const r = `/v1/posts/${encodeURIComponent(e)}/reposts`;
    return this.fetchFeedPage(n, r, `reposts-${e}`);
  }
  /**
   * Get quotes of a post
   */
  async getQuotes(e, n) {
    const r = `/v1/posts/${encodeURIComponent(e)}/quotes`;
    return this.fetchFeedPage(n, r, `quotes-${e}`);
  }
  /**
   * Pin a post to profile
   */
  async pinPost(e) {
    await this.client.post(`/v1/posts/${encodeURIComponent(e)}/pin`);
  }
  /**
   * Unpin a post from profile
   */
  async unpinPost(e) {
    await this.client.delete(`/v1/posts/${encodeURIComponent(e)}/pin`);
  }
  // ---------------------------------------------------------------------------
  // Admin/Moderation actions
  // ---------------------------------------------------------------------------
  /**
   * Mark a post as sensitive (NSFW) or remove the sensitive flag.
   * Requires admin/moderator permissions.
   */
  async markPostSensitive(e, n) {
    const r = n ? "applyNSFW" : "removeNSFW";
    await this.client.post(`/moderation/post/action/${r}`, {
      body: {
        postULID: e,
        action: r
      }
    });
  }
  /**
   * Mark a post as trolling (web-only) or remove the trolling flag.
   * Requires admin/moderator permissions.
   */
  async markPostTrolling(e, n) {
    const r = n ? "applyTroll" : "removeTroll";
    await this.client.post(`/moderation/post/action/${r}`, {
      body: {
        postULID: e,
        action: r
      }
    });
  }
  /**
   * Delete a post using admin privileges.
   * Requires admin/moderator permissions.
   */
  async adminDeletePost(e) {
    await this.client.delete("/v1/moderation/post", {
      body: { ulid: e }
    }), await (await this.cachePromise).deletePost(e);
  }
  /**
   * Get users who liked a post
   */
  async getPostLikers(e, n) {
    return this.client.get(`/v1/posts/${encodeURIComponent(e)}/likers`, { query: n ? { cursor: n } : void 0 });
  }
  /**
   * Get bookmarked posts for current user
   */
  async getBookmarks(e) {
    return this.fetchFeedPage(e, "/v1/posts/bookmarks", "bookmarks");
  }
  /**
   * Get liked posts for current user
   */
  async getLikedPosts(e) {
    return this.fetchFeedPage(e, "/v1/posts/liked", "liked-posts");
  }
  /**
   * Like a post (adds a 'like' reaction)
   */
  async likePost(e) {
    await this.addReaction(e, "like");
  }
  /**
   * Unlike a post (removes the 'like' reaction)
   */
  async unlikePost(e) {
    await this.removeReaction(e, "like");
  }
  async ratePost(e, n) {
    await this.client.post(`/v1/posts/${encodeURIComponent(e)}/ratings`, {
      body: { rating: n }
    }), await this.refreshPostEngagement(e);
  }
  async removeRating(e) {
    await this.client.delete(`/v1/posts/${encodeURIComponent(e)}/ratings`), await this.refreshPostEngagement(e);
  }
  /**
   * @deprecated Rating stats are now included in the SongResource/PostResource.
   * No need to call this endpoint separately - use the post data directly.
   */
  async getRatings(e) {
    return this.client.get(`/v1/posts/${encodeURIComponent(e)}/ratings`);
  }
  /**
   * @deprecated User's rating is now included in the SongResource/PostResource as `userRating`.
   * No need to call this endpoint separately - use the post data directly.
   */
  async getMyRating(e) {
    return this.client.get(`/v1/posts/${encodeURIComponent(e)}/ratings/me`);
  }
  async getRatingsBatch(e) {
    return this.client.post("/v1/posts/ratings/batch", { body: { ulids: e } });
  }
  /**
   * Fetch engagement data for posts and update cache.
   * Debounced and single-flight - only one API call at a time.
   * Uses hash-based comparison to only update and return changed data.
   *
   * @param postUlids - Array of post ULIDs to fetch engagement for
   * @returns Only the engagement data that has changed (empty object if no changes)
   */
  async fetchEngagement(e) {
    return new Promise((n, r) => {
      for (const o of e)
        this.engagementBatchQueue.add(o);
      this.engagementPendingResolvers.push({ ulids: e, resolve: n, reject: r }), this.engagementBatchTimer !== null && clearTimeout(this.engagementBatchTimer), this.engagementBatchTimer = window.setTimeout(() => {
        this.flushEngagementBatch();
      }, this.engagementBatchDelay);
    });
  }
  /**
   * Execute the batched engagement fetch.
   * Single-flight: if a request is already in progress, wait for it.
   */
  async flushEngagementBatch() {
    if (this.engagementInFlight)
      return;
    const e = Array.from(this.engagementBatchQueue), n = [...this.engagementPendingResolvers];
    if (this.engagementBatchQueue.clear(), this.engagementPendingResolvers = [], this.engagementBatchTimer = null, e.length === 0) {
      n.forEach(({ resolve: r }) => r({}));
      return;
    }
    this.engagementInFlight = this.executeEngagementFetch(e);
    try {
      const r = await this.engagementInFlight;
      for (const { ulids: o, resolve: a } of n) {
        const l = {};
        for (const d of o)
          r[d] && (l[d] = r[d]);
        a(l);
      }
    } catch (r) {
      n.forEach(({ reject: o }) => o(r));
    } finally {
      this.engagementInFlight = null, this.engagementBatchQueue.size > 0 && this.flushEngagementBatch();
    }
  }
  /**
   * Execute the actual engagement API call and update cache.
   * Chunks requests into batches of 40 ULIDs max per API call.
   */
  async executeEngagementFetch(e) {
    const r = [];
    for (let p = 0; p < e.length; p += 40)
      r.push(e.slice(p, p + 40));
    const o = {};
    for (const p of r) {
      const _ = await this.client.post("/v1/posts/engagement", { body: { ulids: p } }), v = this.unwrap(_);
      Object.assign(o, v);
    }
    const a = {}, l = [], d = await this.cachePromise;
    for (const [p, _] of Object.entries(o)) {
      if (!_ || typeof _ != "object")
        continue;
      const v = _, w = await d.getPost(p), D = v.updatedAt, O = w?.updatedAt;
      if (w && D && O && D !== O) {
        l.push(p), a[p] = _;
        continue;
      }
      const Q = wo(bo(v));
      if (w?._engagementHash !== Q && (a[p] = _, w)) {
        const H = {
          ...w,
          postEngagement: {
            ...w.postEngagement,
            ...v.postEngagement || {}
          }
        };
        v.userReaction !== void 0 && (H.userReaction = v.userReaction);
        const le = v.ratingStats;
        le && (H.ratingStats = {
          average: le.average_rating ?? le.average,
          total: le.total_ratings ?? le.total,
          distribution: le.rating_distribution ?? le.distribution
        }, H.averageRating = le.average_rating ?? le.average, H.ratingCount = le.total_ratings ?? le.total), v.userRating !== void 0 && (H.userRating = v.userRating), v.isDeleted !== void 0 && (H.isDeleted = v.isDeleted), v.isHidden !== void 0 && (H.isHidden = v.isHidden), v.isSensitive !== void 0 && (H.isSensitive = v.isSensitive), v.otherRepostUsers !== void 0 && (H.otherRepostUsers = v.otherRepostUsers), H._engagementHash = wo(bo(H)), await d.setPost(p, H);
      }
    }
    return l.length > 0 && await this.fetchPostsBatch(l), a;
  }
  // ─────────────────────────────────────────────────────────────────────────────
  // Notifications
  // ─────────────────────────────────────────────────────────────────────────────
  /**
   * Fetch notifications for the current user.
   *
   * Supports cursor-based pagination and filtering by type.
   *
   * @param params - Optional query parameters
   * @param params.cursor - Cursor for pagination (ULID of last notification)
   * @param params.limit - Maximum notifications to return
   * @param params.type - Filter by notification type
   * @param params.unreadOnly - Only return unread notifications
   * @returns Promise resolving to paginated notifications
   *
   * @example
   * ```typescript
   * const response = await sdk.getNotifications({ limit: 20, unreadOnly: true });
   * const notifications = sdk.unwrap(response);
   * ```
   *
   * @category Notifications
   */
  async getNotifications(e) {
    const n = {};
    return e?.cursor && (n.ulid = e.cursor), e?.limit && (n.limit = e.limit), e?.type && (n.type = e.type), e?.unreadOnly && (n.unread_only = e.unreadOnly), this.client.get("/v1/users/me/notifications", { query: n });
  }
  /**
   * Get notification counts (total, read, unread, seen, unseen).
   *
   * Uses request deduplication to prevent multiple simultaneous API calls.
   *
   * @returns Promise resolving to notification count breakdown
   *
   * @example
   * ```typescript
   * const counts = await sdk.getNotificationCounts();
   * console.log(`${counts.read_count_false} unread notifications`);
   * ```
   *
   * @category Notifications
   */
  async getNotificationCounts() {
    return this.notificationCountsInFlight ? (this.log("🔔 SDK: Reusing in-flight notification counts request"), this.notificationCountsInFlight) : (this.log("🔔 SDK: Starting new notification counts request"), this.notificationCountsInFlight = (async () => {
      try {
        const e = await this.client.get("/v1/users/me/notifications/count");
        return this.unwrap(e);
      } finally {
        this.notificationCountsInFlight = null;
      }
    })(), this.notificationCountsInFlight);
  }
  /**
   * Get unread notification count (convenience method).
   *
   * @returns Promise resolving to the number of unread notifications
   *
   * @category Notifications
   */
  async getUnreadNotificationCount() {
    return (await this.getNotificationCounts()).read_count_false;
  }
  /**
   * Mark specific notifications as read.
   *
   * @param notificationIds - Array of notification IDs to mark as read
   *
   * @category Notifications
   */
  async markNotificationsRead(e) {
    await this.client.post("/v1/users/me/notifications/markRead", {
      body: { notificationIds: e }
    });
  }
  /**
   * Mark a single notification as read.
   *
   * @param notificationId - The notification ID to mark as read
   *
   * @category Notifications
   */
  async markNotificationRead(e) {
    await this.markNotificationsRead([e]);
  }
  /**
   * Mark all notifications as read.
   *
   * @param lastNotificationId - Optional: only mark notifications up to this ID
   *
   * @category Notifications
   */
  async markAllNotificationsRead(e) {
    await this.client.post("/v1/users/me/notifications/markAllRead", {
      body: e ? { lastNotificationId: e } : {}
    });
  }
  /**
   * Delete notifications by their IDs.
   *
   * @param notificationIds - Array of notification ULIDs to delete
   *
   * @category Notifications
   */
  async deleteNotifications(e) {
    await this.client.delete("/v1/users/me/notifications/delete", {
      body: { notificationIds: e }
    });
  }
  /**
   * Delete a single notification by ID.
   *
   * @param notificationId - The notification ULID to delete
   *
   * @category Notifications
   */
  async deleteNotification(e) {
    await this.deleteNotifications([e]);
  }
  // ---------------------------------------------------------------------------
  // Comments
  // ---------------------------------------------------------------------------
  async fetchComments(e) {
    const { ulid: n, perPage: r = 20, sortBy: o = "newest", cursor: a } = e, l = {
      ulid: n,
      perPage: r,
      sortBy: o
    };
    a && (l.cursor = a);
    const d = await this.client.post("/v1/comments", {
      body: l
    }), p = d.data ?? d, _ = Array.isArray(p) ? p : p?.data || [];
    if (!Array.isArray(_) || _.length === 0) {
      const O = d.nextCursor ?? d.next_cursor ?? p?.nextCursor ?? p?.next_cursor;
      return {
        comments: [],
        nextCursor: O,
        hasMore: !!O
      };
    }
    const v = _.filter((O) => O?.ulid).map((O) => this.normalizePost(O)), w = v.map((O) => ({
      userId: O.userId,
      userUpdatedAt: O.userUpdatedAt
    })).filter((O) => O.userId);
    await this.hydrateUsersFromHints(w);
    const D = d.nextCursor ?? d.next_cursor ?? p?.nextCursor ?? p?.next_cursor;
    return {
      comments: v,
      nextCursor: D,
      hasMore: !!D
    };
  }
  async createComment(e) {
    const n = await this.client.put("/v1/comments", {
      body: {
        parentId: e.parentId,
        title: e.title,
        body: e.body,
        images: e.images
      }
    }), r = this.unwrap(n);
    if (r.ulid) {
      const o = await this.getPostByUlid(r.ulid, !0);
      if (o)
        return await this.refreshPostEngagement(e.parentId), o;
    }
    return await this.cachePost(r), r;
  }
  async deleteComment(e, n) {
    let r = n;
    if (!r) {
      const l = await (await this.cachePromise).getPost(e);
      l?.parentId && typeof l.parentId == "string" && (r = l.parentId);
    }
    await this.client.delete(`/v1/posts/${encodeURIComponent(e)}`), await (await this.cachePromise).deletePost(e), r && await this.refreshPostEngagement(r);
  }
  /**
   * Get comments for a post (convenience wrapper)
   */
  async getPostComments(e, n) {
    const r = await this.fetchComments({
      ulid: e,
      cursor: n ?? void 0
    });
    return {
      posts: r.comments,
      nextCursor: r.nextCursor
    };
  }
  // ─────────────────────────────────────────────────────────────────────────
  // Playlists
  // ─────────────────────────────────────────────────────────────────────────
  /**
   * Get playlists for a specific user by their username.
   *
   * @param username - The username of the user whose playlists to fetch
   * @param params - Optional query parameters for filtering/pagination
   * @returns Promise resolving to an array of playlists
   *
   * @example
   * ```typescript
   * const response = await sdk.getPlaylists('johndoe');
   * const playlists = sdk.unwrap(response);
   * playlists.forEach(playlist => console.log(playlist.name));
   * ```
   *
   * @category Playlists
   */
  async getPlaylists(e, n) {
    return this.client.get(`/v1/playlist/${encodeURIComponent(e)}/feed`, { query: n });
  }
  /**
   * Get public/promoted playlists for the Explore section.
   *
   * Returns playlists that have been promoted by users with Administrator/Creator badges.
   * These are curated playlists shown in the Explore area of the application.
   *
   * @returns Promise resolving to an array of promoted playlists
   *
   * @example
   * ```typescript
   * const response = await sdk.getPublicPlaylists();
   * const playlists = sdk.unwrap(response);
   * ```
   *
   * @category Playlists
   */
  async getPublicPlaylists() {
    return this.client.get("/v1/explore/playlists");
  }
  /**
   * Get playlists for the timeline feed.
   *
   * When myStuff is true, returns playlists from followed users.
   * Otherwise returns recent public playlists.
   *
   * @param myStuff - If true, returns playlists only from followed users
   * @returns Promise resolving to an array of playlists
   *
   * @example
   * ```typescript
   * // Get public playlists for timeline
   * const publicPlaylists = await sdk.getTimelinePlaylists();
   *
   * // Get playlists from followed users only
   * const myPlaylists = await sdk.getTimelinePlaylists(true);
   * ```
   *
   * @category Playlists
   */
  async getTimelinePlaylists(e = !1) {
    const n = new URLSearchParams();
    e && n.set("my_stuff", "true");
    const r = n.toString(), o = r ? `/v1/playlists/timeline?${r}` : "/v1/playlists/timeline";
    return this.client.get(o);
  }
  /**
   * Get featured artists for the Explore section.
   *
   * Returns artists ordered by sort_order (ascending).
   * Backend returns ULIDs, SDK hydrates full user profiles from IndexedDB cache or API.
   *
   * @returns Promise resolving to an array of featured artist profiles
   *
   * @example
   * ```typescript
   * const artists = await sdk.getFeaturedArtists();
   * artists.forEach(artist => console.log(artist.username));
   * ```
   *
   * @category Playlists
   */
  async getFeaturedArtists() {
    const e = await this.client.get("/v1/explore/featured-artists"), n = this.unwrap(e);
    if (!n || n.length === 0)
      return [];
    await Promise.all(n.map((a) => this.fetchUserProfileById(a)));
    const r = await this.cachePromise, o = [];
    for (const a of n) {
      const l = await r.getUser(a);
      l && o.push(l);
    }
    return o;
  }
  /**
   * Check if a user is featured.
   *
   * Used to determine menu option visibility for admin actions.
   *
   * @param userUlid - The user ULID to check
   * @returns Promise resolving to is_featured status and ends_at date if applicable
   *
   * @example
   * ```typescript
   * const status = await sdk.checkFeaturedArtist('01HQ...');
   * if (status.is_featured) {
   *   console.log('Featured until:', status.ends_at);
   * }
   * ```
   *
   * @category Playlists
   */
  async checkFeaturedArtist(e) {
    return this.client.get(`/v1/featured-artists/${e}/check`);
  }
  /**
   * Add a user to featured artists (admin only).
   *
   * Requires admin privileges. Featured artists appear in the Explore section.
   *
   * @param userUlid - The user ULID to add
   * @param endsAt - Optional end date for the featured status (ISO 8601 format)
   * @returns Promise resolving to the updated user profile
   *
   * @example
   * ```typescript
   * // Feature indefinitely
   * await sdk.addFeaturedArtist('01HQ...');
   *
   * // Feature until specific date
   * await sdk.addFeaturedArtist('01HQ...', '2025-12-31T23:59:59Z');
   * ```
   *
   * @category Playlists
   */
  async addFeaturedArtist(e, n) {
    return this.client.post("/v1/featured-artists", {
      body: { user_ulid: e, ends_at: n }
    });
  }
  /**
   * Remove a user from featured artists (admin only).
   *
   * Requires admin privileges.
   *
   * @param userUlid - The user ULID to remove from featured
   * @returns Promise resolving to confirmation message
   *
   * @example
   * ```typescript
   * await sdk.removeFeaturedArtist('01HQ...');
   * ```
   *
   * @category Playlists
   */
  async removeFeaturedArtist(e) {
    return this.client.delete(`/v1/featured-artists/${e}`);
  }
  /**
   * Get a single playlist by its ULID.
   *
   * @param playlistId - The playlist ULID
   * @param shuffle - If true, returns songs in shuffled order (promoted playlists auto-shuffle daily)
   * @returns Promise resolving to the playlist with its songs
   *
   * @example
   * ```typescript
   * // Get playlist in original order
   * const response = await sdk.getPlaylist('01HQ...');
   * const playlist = sdk.unwrap(response);
   *
   * // Get playlist with shuffled songs
   * const shuffled = await sdk.getPlaylist('01HQ...', true);
   * ```
   *
   * @category Playlists
   */
  async getPlaylist(e, n) {
    const r = n !== void 0 ? { shuffle: n ? "true" : "false" } : {};
    return this.client.get(`/v1/playlist/${encodeURIComponent(e)}`, { query: r });
  }
  /**
   * Create a new playlist.
   *
   * @param payload - Playlist creation data including name, description, isPublic
   * @returns Promise resolving to the created playlist
   *
   * @example
   * ```typescript
   * const response = await sdk.createPlaylist({
   *   name: 'My Favorites',
   *   description: 'Collection of my favorite songs',
   *   isPublic: true
   * });
   * const playlist = sdk.unwrap(response);
   * ```
   *
   * @category Playlists
   */
  async createPlaylist(e) {
    return this.client.post("/v1/playlist/add", { body: e });
  }
  /**
   * Create a new song playlist (audio-only). Automatically sets type to 'SONG'.
   * Use this for sites that have both songs and videos to ensure correct playlist type.
   *
   * @param payload - Playlist configuration (name, description, isPublic)
   * @returns Promise resolving to the created playlist
   *
   * @example
   * ```typescript
   * const response = await sdk.createSongPlaylist({
   *   name: 'My Favorites',
   *   description: 'Collection of my favorite songs',
   *   isPublic: true
   * });
   * const playlist = sdk.unwrap(response);
   * ```
   *
   * @category Playlists
   */
  async createSongPlaylist(e) {
    return this.client.post("/v1/playlist/add", {
      body: { ...e, type: "SONG" }
    });
  }
  /**
   * Update an existing playlist (name, description, isPublic, etc).
   *
   * @param playlistId - The playlist ULID to update
   * @param payload - Fields to update (name, description, isPublic, coverUrl)
   * @returns Promise resolving to the updated playlist
   *
   * @example
   * ```typescript
   * await sdk.updatePlaylist('01HQ...', {
   *   name: 'Updated Name',
   *   description: 'New description'
   * });
   * ```
   *
   * @category Playlists
   */
  async updatePlaylist(e, n) {
    return this.client.patch(`/v1/playlist/${encodeURIComponent(e)}`, { body: n });
  }
  /**
   * Delete a playlist.
   *
   * @param playlistId - The playlist ULID to delete
   * @returns Promise that resolves when the playlist is deleted
   *
   * @example
   * ```typescript
   * await sdk.deletePlaylist('01HQ...');
   * ```
   *
   * @category Playlists
   */
  async deletePlaylist(e) {
    await this.client.delete(`/v1/playlist/${encodeURIComponent(e)}`);
  }
  /**
   * Upload a cover image for a playlist.
   *
   * Uses S3 multipart upload to tmp/ location, returns URL for use with updatePlaylist.
   *
   * @param playlistId - The playlist ID (used for S3 path organization)
   * @param file - The image file to upload (File or Blob)
   * @param userUlid - The user's ULID (required for S3 tmp path)
   * @returns Promise resolving to the S3 URL of the uploaded image
   *
   * @example
   * ```typescript
   * const coverUrl = await sdk.uploadPlaylistCoverImage(
   *   '01HQ...',
   *   imageFile,
   *   user.ulid
   * );
   * await sdk.updatePlaylist('01HQ...', { coverUrl });
   * ```
   *
   * @category Playlists
   */
  async uploadPlaylistCoverImage(e, n, r) {
    const o = n instanceof File ? n : new File([n], `playlist-cover-${e}.jpg`, { type: n.type || "image/jpeg" });
    return (await this.uploadMediaFile(o, {
      userUlid: r,
      mediaType: "image"
    })).url;
  }
  /**
   * Add songs to a playlist.
   *
   * The media array should contain objects with id (song ULID) and order (position).
   *
   * @param playlistId - The playlist ULID to add songs to
   * @param songs - Array of song objects with id (ULID) and optional order (position)
   * @returns Promise resolving to the updated playlist
   *
   * @example
   * ```typescript
   * await sdk.addPlaylistSongs('01HQ...', [
   *   { id: 'song1ulid', order: 0 },
   *   { id: 'song2ulid', order: 1 }
   * ]);
   * ```
   *
   * @category Playlists
   */
  async addPlaylistSongs(e, n) {
    return this.client.patch(`/v1/playlist/${encodeURIComponent(e)}/media`, { body: { media: n } });
  }
  /**
   * Remove a song from a playlist.
   *
   * @param playlistId - The playlist ULID to remove from
   * @param songUlid - The song ULID to remove
   * @returns Promise resolving to the updated playlist
   *
   * @example
   * ```typescript
   * await sdk.removePlaylistSong('01HQ...', 'songUlid123');
   * ```
   *
   * @category Playlists
   */
  async removePlaylistSong(e, n) {
    return this.client.delete(`/v1/playlist/${encodeURIComponent(e)}/media`, { body: { ulids: [n] } });
  }
  /**
   * Reorder songs in a playlist by providing an ordered array of song ULIDs.
   * Each item contains the song ID and its new order position.
   */
  async reorderPlaylistSongs(e, n) {
    return this.client.patch(`/v1/playlist/${encodeURIComponent(e)}/media`, { body: { media: n, is_reorder: !0 } });
  }
  /**
   * Promote a playlist to Explore (make it public/featured).
   * Requires user to have appropriate permissions (Administrator/Creator badges).
   */
  async promotePlaylist(e) {
    return this.client.post(`/v1/playlists/${encodeURIComponent(e)}/promote`);
  }
  /**
   * Remove a playlist from Explore (unpromote/unfeature it).
   */
  async unpromotePlaylist(e) {
    return this.client.post(`/v1/playlists/${encodeURIComponent(e)}/unpromote`);
  }
  /**
   * Check if the current user can promote playlists to Explore.
   * Returns whether the user has Administrator or Creator badges.
   */
  async canPromotePlaylist() {
    return this.client.get("/v1/playlists/can-promote");
  }
  /**
   * Check if the current user can manage (edit) public playlists in Explore.
   * Returns true if user has Administrator badge.
   */
  async canManagePublicPlaylists() {
    return this.client.get("/v1/playlists/can-manage");
  }
  // ---------------------------------------------------------------------------
  // Radio Stations
  // ---------------------------------------------------------------------------
  /**
   * Get all radio stations (active for listeners, all for admins).
   *
   * @param options - Optional filters
   * @param options.state - Filter by state ('draft', 'active', 'inactive')
   * @param options.featured - Filter by featured status
   * @returns Promise resolving to array of radio stations
   *
   * @category Radio Stations
   */
  async getRadioStations(e) {
    const n = {};
    e?.state && (n.state = e.state), e?.featured !== void 0 && (n.featured = e.featured ? "1" : "0");
    const r = Object.keys(n).length > 0 ? { query: n } : void 0;
    return this.client.get("/v1/radio-stations", r);
  }
  /**
   * Get a single radio station by ULID.
   *
   * @param ulid - Radio station ULID
   * @param includeTracks - Whether to include track list (admin only, or for active stations)
   * @returns Promise resolving to radio station data
   *
   * @category Radio Stations
   */
  async getRadioStation(e, n = !1) {
    const r = n ? { query: { include_tracks: !0 } } : void 0, o = await this.client.get(`/v1/radio-stations/${encodeURIComponent(e)}`, r);
    if (n && o.data) {
      const a = o.data;
      let l = a.tracks || a.songs || [];
      if (l && typeof l == "object" && "data" in l && Array.isArray(l.data) && (l = l.data), Array.isArray(l) && l.length > 0) {
        const d = l[0], p = ["ulid", "type", "updatedAt", "updatedAtEpoch", "userId", "userUpdatedAt", "userUpdatedAtEpoch", "lastActiveAt", "groupUlid", "groupName", "commentCount", "parentUlid"], _ = ["title", "body", "content", "song_title", "songTitle", "streamUrl", "audio", "images", "attachments", "audios"], v = d && p.some((O) => O in d), w = d && _.some((O) => O in d && d[O] !== null && d[O] !== void 0), D = v && !w;
        if (this.log(`[SDK] getRadioStation: tracksData.length=${l.length}, needsHydration=${D}, hasOnlyFeedFields=${v}, hasContentFields=${w}, firstItem keys=${d ? Object.keys(d).join(",") : "null"}`), console.log("[SDK] getRadioStation: First item analysis:", {
          ulid: d?.ulid,
          hasOnlyFeedFields: v,
          hasContentFields: w,
          needsHydration: D,
          keys: d ? Object.keys(d) : []
        }), D) {
          console.log("[SDK] getRadioStation: 🔥 HYDRATION NEEDED - calling fetchPostsBatch...");
          const O = l.map((Q) => Q.ulid).filter(Boolean);
          if (this.log(`[SDK] getRadioStation: Detected feed items, extracting ${O.length} ULIDs for hydration`), O.length > 0)
            try {
              this.log(`[SDK] getRadioStation: Calling fetchPostsBatch with ${O.length} ULIDs...`), console.log(`[SDK] getRadioStation: Calling fetchPostsBatch with ${O.length} ULIDs...`);
              const Q = await this.fetchPostsBatch(O);
              this.log(`[SDK] getRadioStation: fetchPostsBatch returned ${Object.keys(Q).length} posts`), console.log(`[SDK] getRadioStation: fetchPostsBatch returned ${Object.keys(Q).length} posts`);
              const H = O.map((le) => Q[le]).filter(Boolean);
              this.log(`[SDK] getRadioStation: Mapped ${H.length} hydrated tracks from ${O.length} ULIDs`), console.log(`[SDK] getRadioStation: Mapped ${H.length} hydrated tracks`, {
                firstTrack: H[0] ? {
                  ulid: H[0].ulid,
                  title: H[0].title,
                  hasAudio: !!H[0].audio,
                  audioLength: H[0].audio?.length,
                  hasStreamUrl: !!H[0].streamUrl,
                  keys: Object.keys(H[0]).slice(0, 15)
                } : null
              }), a.tracks = H, a.songs = H;
            } catch (Q) {
              this.log(`[SDK] getRadioStation: Error hydrating tracks: ${Q}`), console.error("[SDK] getRadioStation: Error hydrating tracks:", Q), a.tracks = [], a.songs = [];
            }
          else
            this.log("[SDK] getRadioStation: No ULIDs found in tracksData"), a.tracks = [], a.songs = [];
        } else {
          this.log(`[SDK] getRadioStation: Tracks are full posts, normalizing ${l.length} items`);
          const O = l.map((Q) => this.normalizePost(Q)).filter(Boolean);
          this.log(`[SDK] getRadioStation: Normalized ${O.length} tracks`), a.tracks = O, a.songs = O;
        }
      } else
        this.log(`[SDK] getRadioStation: No tracks or invalid format, tracksData=${l}`), a.tracks = [], a.songs = [];
    }
    return o;
  }
  /**
   * Create a new radio station (Admin only).
   *
   * @param payload - Radio station creation data
   * @returns Promise resolving to the created radio station
   *
   * @category Radio Stations
   */
  async createRadioStation(e) {
    return this.client.post("/v1/radio-stations", { body: e });
  }
  /**
   * Update a radio station (Admin only).
   *
   * @param ulid - Radio station ULID
   * @param payload - Fields to update
   * @returns Promise resolving to the updated radio station
   *
   * @category Radio Stations
   */
  async updateRadioStation(e, n) {
    return this.client.patch(`/v1/radio-stations/${encodeURIComponent(e)}`, {
      body: n
    });
  }
  /**
   * Delete a radio station (Admin only).
   *
   * @param ulid - Radio station ULID
   *
   * @category Radio Stations
   */
  async deleteRadioStation(e) {
    await this.client.delete(`/v1/radio-stations/${encodeURIComponent(e)}`);
  }
  /**
   * Activate a radio station (Admin only).
   *
   * @param ulid - Radio station ULID
   * @returns Promise resolving to the activated radio station
   *
   * @category Radio Stations
   */
  async activateRadioStation(e) {
    return this.client.post(`/v1/radio-stations/${encodeURIComponent(e)}/activate`);
  }
  /**
   * Deactivate a radio station (Admin only).
   *
   * @param ulid - Radio station ULID
   * @returns Promise resolving to the deactivated radio station
   *
   * @category Radio Stations
   */
  async deactivateRadioStation(e) {
    return this.client.post(`/v1/radio-stations/${encodeURIComponent(e)}/deactivate`);
  }
  /**
   * Toggle featured status of a radio station (Admin only).
   *
   * @param ulid - Radio station ULID
   * @returns Promise resolving to the updated radio station
   *
   * @category Radio Stations
   */
  async toggleFeaturedRadioStation(e) {
    return this.client.post(`/v1/radio-stations/${encodeURIComponent(e)}/toggle-featured`);
  }
  /**
   * Search songs using music_analyses filters (Admin only).
   *
   * @param filters - Search filters (BPM, genres, moods, etc.)
   * @returns Promise resolving to search results
   *
   * @category Radio Stations
   */
  async searchRadioStationSongs(e) {
    return this.client.post("/v1/radio-stations/search/songs", { body: e });
  }
  /**
   * Get tracks for a radio station (Admin only).
   *
   * @param ulid - Radio station ULID
   * @returns Promise resolving to array of track ULIDs with order
   *
   * @category Radio Stations
   */
  async getRadioStationTracks(e) {
    return this.client.get(`/v1/radio-stations/${encodeURIComponent(e)}/tracks`);
  }
  /**
   * Add tracks to a radio station (Admin only).
   *
   * @param ulid - Radio station ULID
   * @param trackUlids - Array of track ULIDs to add
   *
   * @category Radio Stations
   */
  async addRadioStationTracks(e, n) {
    await this.client.post(`/v1/radio-stations/${encodeURIComponent(e)}/tracks`, {
      body: { tracks: n }
    });
  }
  /**
   * Remove a track from a radio station (Admin only).
   *
   * @param ulid - Radio station ULID
   * @param trackUlid - Track ULID to remove
   *
   * @category Radio Stations
   */
  async removeRadioStationTrack(e, n) {
    await this.client.delete(`/v1/radio-stations/${encodeURIComponent(e)}/tracks/${encodeURIComponent(n)}`);
  }
  /**
   * Reorder tracks in a radio station (Admin only).
   *
   * @param ulid - Radio station ULID
   * @param tracks - Array of track ULIDs with new order positions
   *
   * @category Radio Stations
   */
  async reorderRadioStationTracks(e, n) {
    await this.client.patch(`/v1/radio-stations/${encodeURIComponent(e)}/tracks`, {
      body: { tracks: n }
    });
  }
  /**
   * Convert an existing playlist to a radio station (Admin only).
   *
   * @param playlistUlid - The ULID of the playlist to convert
   * @param options - Optional conversion options (state, config, name, description, cover_image)
   * @returns Promise resolving to the converted radio station
   *
   * @category Radio Stations
   */
  async convertPlaylistToRadioStation(e, n) {
    return this.client.post(`/v1/radio-stations/convert/${encodeURIComponent(e)}`, { body: n || {} });
  }
  // ---------------------------------------------------------------------------
  // Users/Profile
  // ---------------------------------------------------------------------------
  /**
   * Normalize user profile data from API to SDK interface
   * Maps various API field names to standardized SDK field names
   */
  normalizeUserProfile(e) {
    const n = e.displayName || e.name, r = e.avatarVariants || e.avatar_variants, o = e.backgroundVariants || e.background_variants;
    let a, l;
    if (r && typeof r == "object" && !Array.isArray(r) && r.constructor === Object)
      try {
        a = ze(r);
      } catch (Q) {
        console.warn("[SDK] Failed to normalize avatarVariants:", Q), a = r;
      }
    if (o && typeof o == "object" && !Array.isArray(o) && o.constructor === Object)
      try {
        l = ze(o);
      } catch (Q) {
        console.warn("[SDK] Failed to normalize backgroundVariants:", Q), l = o;
      }
    const { avatar_variants: d, background_variants: p, isAdmin: _, hasBadge: v, ...w } = e, D = {};
    for (const [Q, H] of Object.entries(w))
      typeof H != "function" && typeof H != "symbol" && (D[Q] = H);
    const O = {
      // Preserve all original data first (excluding snake_case variant keys and functions)
      ...D,
      // Then override with normalized values
      ulid: e.ulid,
      username: e.username,
      displayName: n,
      name: e.name,
      avatarUrl: e.avatarUrl,
      avatar: e.avatar,
      bio: e.bio,
      // Normalize count fields - API may return followers/following/postCount
      // but SDK interface expects followersCount/followingCount/postsCount
      followersCount: e.followersCount || e.followers || 0,
      followingCount: e.followingCount || e.following || 0,
      postsCount: e.postsCount || e.postCount || 0
    };
    return a !== void 0 && (O.avatarVariants = a), l !== void 0 && (O.backgroundVariants = l), O;
  }
  // ─────────────────────────────────────────────────────────────────────────
  // User Methods
  // ─────────────────────────────────────────────────────────────────────────
  /**
   * Get a user profile by username.
   *
   * Checks IndexedDB cache first, then falls back to API.
   *
   * @param username - Username to lookup
   * @param skipCache - Skip cache and fetch directly from API
   * @returns User profile wrapped in API envelope
   *
   * @example
   * ```typescript
   * const { data: profile } = await sdk.getUserProfile('johndoe');
   * console.log(profile.displayName, profile.followersCount);
   * ```
   *
   * @category Users
   */
  async getUserProfile(e, n = !1) {
    this.log("🔍 SDK: getUserProfile called with username:", e, "skipCache:", n);
    const r = await this.cachePromise;
    if (n)
      this.log("⏭️ SDK: Skipping cache lookup, fetching directly from API:", e);
    else {
      const a = await r.getUserByUsername(e);
      if (a)
        return this.log("✅ SDK: Found user in IndexedDB cache:", e), { data: a };
      this.log("❌ SDK: User not in cache, fetching from API:", e);
    }
    this.log("📡 SDK: Making API request to /v1/profile/" + e);
    const o = await this.client.get(`/v1/profile/${encodeURIComponent(e)}`);
    if (o.data) {
      const a = this.normalizeUserProfile(o.data);
      return await r.setUser(a.ulid, a), this.log("💾 SDK: Cached fresh profile for:", e), { data: a };
    }
    return o;
  }
  /**
   * Get a user profile by ULID.
   *
   * Preferred over username lookup when ULID is available.
   * Checks IndexedDB cache first, then falls back to API.
   *
   * @param ulid - User ULID to lookup
   * @returns User profile wrapped in API envelope
   *
   * @example
   * ```typescript
   * const { data: profile } = await sdk.getUserProfileById('01HX...');
   * ```
   *
   * @category Users
   */
  async getUserProfileById(e) {
    const n = await this.cachePromise, r = await n.getUser(e);
    if (r)
      return this.log("✅ SDK: Found user in IndexedDB cache by ID:", e), { data: r };
    this.log("📡 SDK: Fetching user from API by ID:", e);
    const o = await this.client.get(`/v1/profile/ulid/${encodeURIComponent(e)}`);
    if (o.data) {
      const a = this.normalizeUserProfile(o.data);
      return await n.setUser(e, a), { data: a };
    }
    return o;
  }
  /**
   * Get multiple user profiles by ULIDs in a single batched request
   * Checks IndexedDB cache first, only fetches missing profiles from API
   * @param ulids - Array of user ULIDs to fetch
   * @returns Array of user profiles
   */
  async getBatchedUserProfiles(e) {
    if (e.length === 0)
      return [];
    const n = await this.cachePromise, r = await n.getUsers(e), o = Array.from(r.values()), a = new Set(r.keys()), l = e.filter((_) => !a.has(_));
    if (this.log(`✅ SDK: Found ${o.length}/${e.length} users in IndexedDB cache`), l.length === 0)
      return o;
    this.log(`📡 SDK: Fetching ${l.length} missing users from API`);
    const d = await this.client.post("/v1/profile", {
      body: { ulids: l }
    });
    let p = [];
    if (Array.isArray(d) && (d.length === 1 && Array.isArray(d[0]) ? p = d[0] : p = d), p.length > 0) {
      this.log("📦 SDK: Attempting to cache fetched users:", p);
      try {
        await n.setUsers(p), this.log("✅ SDK: Successfully cached fetched users");
      } catch (_) {
        console.error("❌ SDK: Failed to cache users:", _), console.error("Data that failed to cache:", JSON.stringify(p, null, 2));
      }
    }
    return [...o, ...p];
  }
  /**
   * Get followers for a user's profile by username.
   * Uses /v1/profile/{username}/followers endpoint.
   */
  async getProfileFollowers(e) {
    return this.client.get(`/v1/profile/${encodeURIComponent(e)}/followers`);
  }
  /**
   * Get following for a user's profile by username.
   * Uses /v1/profile/{username}/following endpoint.
   */
  async getProfileFollowing(e) {
    return this.client.get(`/v1/profile/${encodeURIComponent(e)}/following`);
  }
  /**
   * Get posts for a user's profile by username.
   * Uses /v1/profile/{username}/feed endpoint.
   */
  async getProfileFeed(e, n) {
    const r = `/v1/profile/${encodeURIComponent(e)}/feed`;
    return this.fetchFeedPage(n, r, `profile-feed-${e}`);
  }
  /**
   * Get songs for a user's profile by username.
   * Uses /v1/songs/user/{username} endpoint.
   */
  async getProfileSongs(e, n) {
    const r = `/v1/songs/user/${encodeURIComponent(e)}`;
    return this.fetchFeedPage(n, r, `profile-songs-${e}`);
  }
  /**
   * Get posts only (no songs/media) for a user's profile by username.
   * Uses /v1/profile/{username}/feedPostsOnly endpoint.
   */
  async getProfilePostsOnly(e, n) {
    const r = `/v1/profile/${encodeURIComponent(e)}/feedPostsOnly`;
    return this.fetchFeedPage(n, r, `profile-posts-${e}`);
  }
  /**
   * Get images/media for a user's profile by username.
   * Uses /v1/profile/{username}/feedImagesOnly endpoint.
   */
  async getProfileImages(e, n) {
    const r = `/v1/profile/${encodeURIComponent(e)}/feedImagesOnly`;
    return this.fetchFeedPage(n, r, `profile-images-${e}`);
  }
  /**
   * @deprecated Use getProfileFollowers(username) instead.
   * This method calls a non-existent endpoint.
   */
  async getUserFollowers(e) {
    const n = await this.fetchUserProfileById(e);
    if (!n?.username)
      throw new Error(`Cannot fetch followers: username not found for ULID ${e}`);
    return this.getProfileFollowers(n.username);
  }
  /**
   * @deprecated Use getProfileFollowing(username) instead.
   * This method calls a non-existent endpoint.
   */
  async getUserFollowing(e) {
    const n = await this.fetchUserProfileById(e);
    if (!n?.username)
      throw new Error(`Cannot fetch following: username not found for ULID ${e}`);
    return this.getProfileFollowing(n.username);
  }
  /**
   * @deprecated Use getProfileFeed(username) instead. This method calls a non-existent endpoint.
   * Kept for backwards compatibility - fetches username from profile first.
   */
  async getUserPosts(e, n) {
    const r = await this.fetchUserProfileById(e);
    if (!r?.username)
      throw new Error(`Cannot fetch posts: username not found for ULID ${e}`);
    return this.getProfileFeed(r.username, n);
  }
  /**
   * @deprecated Use getProfileLikes(username) instead.
   */
  async getUserLikes(e, n) {
    const r = await this.fetchUserProfileById(e);
    if (!r?.username)
      throw new Error(`Cannot fetch likes: username not found for ULID ${e}`);
    const o = `/v1/profile/${encodeURIComponent(r.username)}/likes`;
    return this.fetchFeedPage(n, o, `profile-likes-${r.username}`);
  }
  /**
   * @deprecated Use getProfileImages(username) instead.
   */
  async getUserMedia(e, n) {
    const r = await this.fetchUserProfileById(e);
    if (!r?.username)
      throw new Error(`Cannot fetch media: username not found for ULID ${e}`);
    return this.getProfileImages(r.username, n);
  }
  // ─────────────────────────────────────────────────────────────────────────
  // Follow/Unfollow
  // ─────────────────────────────────────────────────────────────────────────
  /**
   * Follow a user by username.
   *
   * @param username - Username of the user to follow
   *
   * @example
   * ```typescript
   * await sdk.followUser('johndoe');
   * ```
   *
   * @category Users
   */
  async followUser(e) {
    await this.client.put(`/v1/profile/${encodeURIComponent(e)}/follow`), await this.invalidateUserCacheByUsername(e);
  }
  /**
   * Unfollow a user by username.
   *
   * @param username - Username of the user to unfollow
   *
   * @category Users
   */
  async unfollowUser(e) {
    await this.client.delete(`/v1/profile/${encodeURIComponent(e)}/follow`), await this.invalidateUserCacheByUsername(e);
  }
  /**
   * Invalidate a user's cache entry by username.
   * Used after follow/unfollow to ensure fresh ProfileEngagement data.
   *
   * @param username - Username of the user to invalidate
   * @internal
   */
  async invalidateUserCacheByUsername(e) {
    const n = await this.cachePromise, r = await n.getUserByUsername(e);
    r?.ulid && await n.deleteUser(r.ulid);
  }
  /**
   * Follow a user by ULID.
   *
   * Convenience method that fetches the username first, then follows.
   *
   * @param userId - ULID of the user to follow
   *
   * @category Users
   */
  async followUserByUlid(e) {
    const n = await this.fetchUserProfileById(e);
    if (!n?.username)
      throw new Error(`Cannot follow user: username not found for ULID ${e}`);
    await this.followUser(n.username);
  }
  /**
   * Unfollow a user by ULID.
   *
   * Convenience method that fetches the username first, then unfollows.
   *
   * @param userId - ULID of the user to unfollow
   *
   * @category Users
   */
  async unfollowUserByUlid(e) {
    const n = await this.fetchUserProfileById(e);
    if (!n?.username)
      throw new Error(`Cannot unfollow user: username not found for ULID ${e}`);
    await this.unfollowUser(n.username);
  }
  // Note: Follow status is returned in the profile response as `isFollowing` and `isFollowingYou`
  // No separate endpoint needed - use getUserProfile() to get follow status
  // ─────────────────────────────────────────────────────────────────────────
  // Invite Friends
  // ─────────────────────────────────────────────────────────────────────────
  /**
   * Send an email invitation to a friend.
   *
   * @param email - Email address to invite
   * @returns Success status and message
   *
   * @category Users
   */
  async inviteByEmail(e) {
    return this.client.post("/v1/users/me/inviteByEmail", {
      body: { email: e }
    });
  }
  /**
   * Send email invitations to multiple friends.
   *
   * @param emails - Array of email addresses to invite
   * @returns Success status and message
   *
   * @category Users
   */
  async inviteByEmailMultiple(e) {
    return this.client.post("/v1/users/me/inviteEmailMultiple", {
      body: { emails: e }
    });
  }
  // ─────────────────────────────────────────────────────────────────────────
  // Block/Mute
  // ─────────────────────────────────────────────────────────────────────────
  /**
   * Block a user.
   *
   * Blocked users cannot see your content or interact with you.
   *
   * @param userId - ULID of the user to block
   *
   * @category Users
   */
  async blockUser(e) {
    await this.client.post(`/v1/users/${encodeURIComponent(e)}/block`);
  }
  /**
   * Unblock a user.
   *
   * @param userId - ULID of the user to unblock
   *
   * @category Users
   */
  async unblockUser(e) {
    await this.client.delete(`/v1/users/${encodeURIComponent(e)}/block`);
  }
  /**
   * Get a list of users you have blocked.
   *
   * @param cursor - Pagination cursor
   * @returns List of blocked user profiles
   *
   * @category Users
   */
  async getBlockedUsers(e) {
    return this.client.get("/v1/users/me/blockedUsers", {
      query: e ? { cursor: e } : void 0
    });
  }
  /**
   * Mute a user.
   *
   * Muted users' content will not appear in your feeds.
   *
   * @param userId - ULID of the user to mute
   *
   * @category Users
   */
  async muteUser(e) {
    await this.client.post(`/v1/users/${encodeURIComponent(e)}/mute`);
  }
  /**
   * Unmute a user.
   *
   * @param userId - ULID of the user to unmute
   *
   * @category Users
   */
  async unmuteUser(e) {
    await this.client.delete(`/v1/users/${encodeURIComponent(e)}/mute`);
  }
  /**
   * Get a list of users you have muted.
   *
   * @param cursor - Pagination cursor
   * @returns List of muted user profiles
   *
   * @category Users
   */
  async getMutedUsers(e) {
    return this.client.get("/v1/users/me/mutedUsers", {
      query: e ? { cursor: e } : void 0
    });
  }
  // ─────────────────────────────────────────────────────────────────────────
  // Admin Moderation
  // ─────────────────────────────────────────────────────────────────────────
  /**
   * Ban a user (admin/moderator only).
   *
   * Banned users cannot access the platform.
   *
   * @param userId - ULID of the user to ban
   *
   * @category Users
   */
  async banUser(e) {
    await this.client.post("/admin/profile/ban", {
      body: { ulid: e }
    });
  }
  /**
   * Unban a user (admin/moderator only).
   *
   * @param userId - ULID of the user to unban
   *
   * @category Users
   */
  async unbanUser(e) {
    await this.client.delete("/admin/profile/ban", {
      body: { ulid: e }
    });
  }
  // ─────────────────────────────────────────────────────────────────────────
  // Report Content
  // ─────────────────────────────────────────────────────────────────────────
  /**
   * Report a post for policy violation.
   *
   * @param postUlid - ULID of the post to report
   * @param reason - Reason category for the report
   * @param details - Additional details about the report
   *
   * @category Posts
   */
  async reportPost(e, n, r) {
    await this.client.post(`/v1/posts/${encodeURIComponent(e)}/report`, {
      body: { reason: n, details: r }
    });
  }
  /**
   * Report a user for policy violation.
   *
   * @param userId - ULID of the user to report
   * @param reason - Reason category for the report
   * @param details - Additional details about the report
   *
   * @category Users
   */
  async reportUser(e, n, r) {
    await this.client.post(`/v1/users/${encodeURIComponent(e)}/report`, {
      body: { reason: n, details: r }
    });
  }
  async reportComment(e, n, r) {
    await this.client.post(`/v1/comments/${encodeURIComponent(e)}/report`, {
      body: { reason: n, details: r }
    });
  }
  async fetchUserProfileById(e, n) {
    const r = await this.cachePromise, o = await r.getUser(e);
    if (o && !this.isUserStale(o, n)) {
      if (o && typeof o == "object" && "data" in o && Array.isArray(o.data)) {
        const a = o.data[0];
        if (a)
          return await r.setUser(e, a), a;
      }
      return o;
    }
    return this.queueUserFetch(e, n);
  }
  /**
   * Create a reactive observable for a user profile by ID.
   * Uses Dexie's liveQuery to automatically update when the user data changes in IndexedDB.
   * This is useful for keeping UI components in sync with cached user data.
   *
   * @param userId - User ULID to observe
   * @returns Observable that emits UserProfile | null whenever the cache entry changes
   *
   * @example
   * ```typescript
   * const subscription = sdk.observeUserProfile(userId).subscribe({
   *   next: (profile) => console.log('Profile updated:', profile),
   *   error: (err) => console.error('Error:', err),
   * });
   * // Later: subscription.unsubscribe();
   * ```
   */
  async observeUserProfile(e) {
    return (await this.cachePromise).observeUser(e);
  }
  /**
   * Queue a user profile fetch for batching. Debounces requests and batches up to 20 ULIDs.
   */
  queueUserFetch(e, n) {
    return new Promise((r, o) => {
      this.userBatchQueue.set(e, n);
      const a = this.userPendingResolvers.get(e) || [];
      a.push({ resolve: r, reject: o }), this.userPendingResolvers.set(e, a), this.userBatchTimer !== null && clearTimeout(this.userBatchTimer), this.userBatchQueue.size >= this.userBatchMaxSize ? this.flushUserBatch() : this.userBatchTimer = setTimeout(() => this.flushUserBatch(), this.userBatchDelay);
    });
  }
  /**
   * Flush the user batch queue and fetch all queued users in one request.
   */
  async flushUserBatch() {
    if (this.userBatchQueue.size === 0)
      return;
    const e = Array.from(this.userBatchQueue.keys()), n = new Map(this.userPendingResolvers);
    this.userBatchQueue.clear(), this.userPendingResolvers.clear(), this.userBatchTimer = null;
    try {
      const r = await this.client.post("/v1/profile", {
        body: { ulids: e }
      });
      let o = this.unwrap(r);
      Array.isArray(o) && o.length > 0 && o[0] && typeof o[0] == "object" && "data" in o[0] && (o = o[0].data);
      const a = /* @__PURE__ */ new Map();
      if (Array.isArray(o)) {
        const l = await this.cachePromise;
        for (const d of o) {
          const p = d.ulid || d.id;
          p && (a.set(p, d), await l.setUser(p, d));
        }
      }
      for (const l of e) {
        const d = n.get(l) || [], p = a.get(l) || null;
        for (const { resolve: _ } of d)
          _(p);
      }
    } catch (r) {
      console.error("[SDK] ❌ Error fetching user batch:", r);
      for (const o of e) {
        const a = n.get(o) || [];
        for (const { reject: l } of a)
          l(r);
      }
    }
  }
  isUserStale(e, n) {
    if (!n)
      return !1;
    const r = typeof e.updatedAt == "string" ? Date.parse(e.updatedAt) : Number(e.updatedAt || 0), o = typeof n == "string" ? Date.parse(n) : Number(n);
    return !r || !o ? !1 : o > r;
  }
  async hydrateUsersFromHints(e) {
    const n = await this.cachePromise, r = Object.values(e.reduce((a, l) => (l.userId && (a[l.userId] = l), a), {})), o = [];
    for (const a of r) {
      const l = await n.getUser(a.userId);
      (!l || this.isUserStale(l, a.userUpdatedAt)) && o.push(a);
    }
    o.length !== 0 && await Promise.all(o.map((a) => this.fetchUserProfileById(a.userId, a.userUpdatedAt)));
  }
  // ─────────────────────────────────────────────────────────────────────────
  // Search
  // ─────────────────────────────────────────────────────────────────────────
  /**
   * Search users by query string (full search).
   *
   * Returns user profiles matching the search query with fields:
   * ulid, name, username, avatar, updatedAt, updatedAtEpoch.
   *
   * @param query - The search query string
   * @param limit - Maximum number of results to return (default: 30)
   * @returns Promise resolving to an array of matching user profiles
   *
   * @example
   * ```typescript
   * const response = await sdk.searchUsers('john');
   * const users = sdk.unwrap(response);
   * users.forEach(user => console.log(user.username));
   * ```
   *
   * @category Search
   */
  async searchUsers(e, n = 30) {
    return this.client.post("/v1/search/user", {
      body: { q: e, limit: n, pagination: !1 }
    });
  }
  /**
   * Autocomplete users by query string (for typeahead suggestions).
   *
   * Returns lightweight user profiles optimized for typeahead/autocomplete UIs.
   *
   * @param query - The search query string
   * @returns Promise resolving to an array of matching user profiles
   *
   * @example
   * ```typescript
   * const response = await sdk.searchUsersAutocomplete('jo');
   * const suggestions = sdk.unwrap(response);
   * ```
   *
   * @category Search
   */
  async searchUsersAutocomplete(e) {
    return this.client.post("/v1/search/autocomplete/user", {
      body: { q: e }
    });
  }
  /**
   * Get suggested users to follow.
   *
   * Returns personalized user suggestions based on:
   * - Users followed by people you follow (friends of friends)
   * - Popular users if you don't follow anyone yet
   * - Includes ProfileEngagement data for each user
   *
   * @param limit - Maximum number of suggestions (1-20, default: 5)
   * @returns Promise resolving to an array of suggested users with engagement data
   *
   * @example
   * ```typescript
   * const suggestions = await sdk.getUserSuggestions(10);
   * suggestions.forEach(user => console.log(user.username));
   * ```
   *
   * @category Search
   */
  async getUserSuggestions(e = 5) {
    const n = await this.client.get(`/v1/users/me/suggestions?limit=${e}`);
    return this.unwrap(n);
  }
  /**
   * Search audio/songs by query string.
   *
   * Returns audio results with fields:
   * ulid, title, username, userId, avatar, updatedAt, updatedAtEpoch.
   *
   * @param query - The search query string
   * @returns Promise resolving to an array of matching audio results
   *
   * @example
   * ```typescript
   * const response = await sdk.searchAudio('jazz');
   * const songs = sdk.unwrap(response);
   * songs.forEach(song => console.log(song.title));
   * ```
   *
   * @category Search
   */
  async searchAudio(e) {
    return this.client.post("/v1/search/audio", {
      body: { q: e }
    });
  }
  /**
   * Search/autocomplete hashtags by query string.
   *
   * Sanitizes input to match API requirements (word characters only).
   *
   * @param query - The hashtag query (with or without leading #)
   * @returns Promise resolving to search results with matching hashtag names
   *
   * @example
   * ```typescript
   * const response = await sdk.searchHashtags('music');
   * const result = sdk.unwrap(response);
   * result.items.forEach(tag => console.log('#' + tag.name));
   * ```
   *
   * @category Search
   */
  async searchHashtags(e) {
    let n = e.startsWith("#") ? e.slice(1) : e;
    return n = n.replace(/[^\w]/g, ""), !n || n.length < 1 ? { data: { items: [] } } : this.client.post("/v1/search/autocomplete/hashtag", {
      body: { hashtag: n }
    });
  }
  /**
   * Hydrate search results by fetching full post data for SONG/PODCAST posts.
   * Search API returns metadata only - this fetches audio URLs, cover images, etc.
   */
  async hydrateSearchResults(e) {
    const n = ["SONG", "PODCAST"], r = e.filter((l) => {
      const d = l.type || l.postType || "";
      return n.includes(d) && (!l.audio || Array.isArray(l.audio) && l.audio.length === 0);
    });
    if (r.length === 0)
      return e.map((l) => this.normalizePost(l));
    const o = r.map((l) => l.ulid || l.id).filter(Boolean), a = await this.fetchPostsBatch(o);
    return e.map((l) => {
      const d = l.ulid || l.id, p = d ? a[d] : null;
      return this.normalizePost(p || l);
    });
  }
  /**
   * Search posts by hashtag.
   *
   * @param hashtag - The hashtag to search for (with or without leading #)
   * @returns Promise resolving to search results containing matching posts
   *
   * @example
   * ```typescript
   * const response = await sdk.searchPostsByHashtag('#music');
   * const result = sdk.unwrap(response);
   * result.items.forEach(post => console.log(post.title));
   * ```
   *
   * @category Search
   */
  async searchPostsByHashtag(e) {
    const n = e.startsWith("#") ? e.slice(1) : e, r = await this.client.post("/v1/search/posts/hashtag", {
      body: { hashtag: n }
    });
    return r.data?.items && (r.data.items = await this.hydrateSearchResults(r.data.items)), r;
  }
  /**
   * Search posts by text query (full-text search).
   *
   * @param query - The search query string
   * @returns Promise resolving to search results containing matching posts
   *
   * @example
   * ```typescript
   * const response = await sdk.searchPosts('music production tips');
   * const result = sdk.unwrap(response);
   * result.items.forEach(post => console.log(post.title));
   * ```
   *
   * @category Search
   */
  async searchPosts(e) {
    const r = {
      data: await this.client.post("/v1/search/posts", {
        body: { q: e }
      })
    };
    return r.data?.items && (r.data.items = await this.hydrateSearchResults(r.data.items)), r;
  }
  /**
   * Search posts by user ULID.
   *
   * @param userUlid - The user ULID whose posts to search
   * @returns Promise resolving to search results containing the user's posts
   *
   * @example
   * ```typescript
   * const response = await sdk.searchPostsByUser('01HQ...');
   * const result = sdk.unwrap(response);
   * ```
   *
   * @category Search
   */
  async searchPostsByUser(e) {
    const n = await this.client.post("/v1/search/posts/username", {
      body: { ulid: e }
    });
    return n.data?.items && (n.data.items = await this.hydrateSearchResults(n.data.items)), n;
  }
  /**
   * Search followers of current user.
   *
   * @param query - The search query string
   * @returns Promise resolving to search results containing matching followers
   *
   * @example
   * ```typescript
   * const response = await sdk.searchFollowers('john');
   * const result = sdk.unwrap(response);
   * ```
   *
   * @category Search
   */
  async searchFollowers(e) {
    return this.client.post("/v1/search/followers", {
      body: { q: e }
    });
  }
  /**
   * Search users the current user is following.
   *
   * @param query - The search query string
   * @returns Promise resolving to search results containing matching followed users
   *
   * @example
   * ```typescript
   * const response = await sdk.searchFollowing('john');
   * const result = sdk.unwrap(response);
   * ```
   *
   * @category Search
   */
  async searchFollowing(e) {
    return this.client.post("/v1/search/following", {
      body: { q: e }
    });
  }
  // ─────────────────────────────────────────────────────────────────────────────
  // Badges
  // ─────────────────────────────────────────────────────────────────────────────
  /**
   * Get all available badges from app settings (cached for 24 hours).
   *
   * @returns Promise resolving to array of available badges
   *
   * @category Badges
   */
  async getAvailableBadges() {
    const e = await this.cachePromise, n = "app_settings", r = 1440 * 60 * 1e3, o = await e.getMetadata(n);
    if (o && Date.now() - o.cachedAt < r)
      return { data: (o.data.badges || []).map((w) => ({
        id: String(w.id || 0),
        name: w.name || "",
        description: w.description,
        iconUrl: w.iconUrl || void 0
      })) };
    const l = (await this.client.get("/v1/settings")).data;
    return await e.setMetadata(n, {
      data: l,
      cachedAt: Date.now()
    }), { data: (l.badges || []).map((_) => ({
      id: String(_.id || 0),
      name: _.name || "",
      description: _.description,
      iconUrl: _.iconUrl || void 0
    })) };
  }
  /**
   * Get badges earned by a specific user.
   *
   * @param userId - The ULID of the user
   * @returns Promise resolving to array of earned badges
   *
   * @category Badges
   */
  async getUserBadges(e) {
    return this.client.get(`/v1/users/${encodeURIComponent(e)}/badges`);
  }
  /**
   * Get the current user's earned badges.
   *
   * @returns Promise resolving to array of earned badges
   *
   * @category Badges
   */
  async getMyBadges() {
    return this.client.get("/v1/users/me/badges");
  }
  /**
   * Check if user has a specific badge from provided badges array.
   *
   * This is a synchronous helper that checks badges from an existing array.
   * Use this with badges already loaded from auth state (e.g., from login response).
   *
   * @param badges - Array of badges (strings or objects with 'name' property)
   * @param badgeName - The badge name to check for (case-insensitive)
   * @returns true if the badge is found
   *
   * @example
   * ```typescript
   * // In UI, use with auth store badges
   * const user = authStore.user;
   * const isAdmin = sdk.hasBadgeInList(user?.badges, 'administrator');
   * ```
   *
   * @category Badges
   */
  hasBadgeInList(e, n) {
    return !e || !Array.isArray(e) ? !1 : e.some((r) => (typeof r == "string" ? r : r?.name)?.toLowerCase() === n.toLowerCase());
  }
  /**
   * @deprecated Use hasBadgeInList() with badges from auth state instead.
   * This method no longer makes API calls and always returns false.
   * Check badges synchronously from auth store user data.
   *
   * @category Badges
   */
  async hasBadge(e) {
    return !1;
  }
  /**
   * @deprecated Use hasBadgeInList(badges, 'administrator') with badges from auth state instead.
   * This method no longer makes API calls and always returns false.
   *
   * @category Badges
   */
  async isAdmin() {
    return !1;
  }
  /**
   * Get all badges defined in the system.
   *
   * @returns Promise resolving to array of all badges
   *
   * @category Badges
   */
  async getAllBadges() {
    return this.client.get("/v1/badges");
  }
  /**
   * Award a badge to a user (admin operation).
   *
   * @param userId - The ULID of the user to award the badge to
   * @param badgeId - The ID of the badge to award
   * @returns Promise resolving to the awarded badge
   *
   * @category Badges
   */
  async awardBadge(e, n) {
    return this.client.post(`/v1/users/${encodeURIComponent(e)}/badges`, { body: { badge_id: n } });
  }
  /**
   * Set a badge as the current user's featured badge.
   *
   * The featured badge is displayed on posts and comments.
   *
   * @param badgeId - The ID of the badge to feature
   * @returns Promise resolving to the featured badge
   *
   * @category Badges
   */
  async setFeaturedBadge(e) {
    return this.client.put(`/v1/users/me/badges/${encodeURIComponent(e)}/featured`);
  }
  /**
   * Clear the current user's featured badge.
   *
   * @returns Promise resolving to success status
   *
   * @category Badges
   */
  async clearFeaturedBadge() {
    return this.client.delete("/v1/users/me/badges/featured");
  }
  /**
   * Get the current user's badge progress for gamification badges.
   *
   * Returns current listen/rating counts and next badges to earn.
   *
   * @returns Promise resolving to badge progress data
   *
   * @example
   * ```typescript
   * const response = await sdk.getBadgeProgress();
   * const progress = sdk.unwrap(response);
   * console.log(`Listen count: ${progress.listenCount}`);
   * if (progress.nextBadges.listenCount) {
   *   console.log(`Next badge: ${progress.nextBadges.listenCount.badge.name}`);
   * }
   * ```
   *
   * @category Badges
   */
  async getBadgeProgress() {
    const n = (await this.client.get("/v1/users/me/badges/progress")).data, r = (o) => ({
      id: String(o.id || ""),
      name: String(o.name || ""),
      description: o.description,
      iconUrl: o.icon_url,
      slug: o.slug,
      type: o.type,
      threshold: o.threshold
    });
    return {
      data: {
        listenCount: n.listen_count,
        ratingCount: n.rating_count,
        nextBadges: {
          listenCount: n.next_badges.listen_count ? {
            badge: r(n.next_badges.listen_count.badge),
            current: n.next_badges.listen_count.current,
            needed: n.next_badges.listen_count.needed,
            progressPercentage: n.next_badges.listen_count.progress_percentage
          } : null,
          ratingCount: n.next_badges.rating_count ? {
            badge: r(n.next_badges.rating_count.badge),
            current: n.next_badges.rating_count.current,
            needed: n.next_badges.rating_count.needed,
            progressPercentage: n.next_badges.rating_count.progress_percentage
          } : null
        }
      }
    };
  }
  // ─────────────────────────────────────────────────────────────────────────────
  // Settings
  // ─────────────────────────────────────────────────────────────────────────────
  /**
   * Get global application settings.
   *
   * Includes site branding, available reactions, badges, genres, etc.
   *
   * @returns Promise resolving to application settings
   *
   * @category Settings
   */
  async getGlobalSettings() {
    return this.client.get("/v1/settings");
  }
  /**
   * Get notification types with display templates.
   *
   * Templates contain %s placeholder for actor name substitution.
   *
   * @returns Promise resolving to array of notification types
   *
   * @example
   * ```typescript
   * const response = await sdk.getNotificationTypes();
   * const types = sdk.unwrap(response);
   * // types = [{ name: "user_followed", description: "%s followed you" }, ...]
   * ```
   *
   * @category Settings
   */
  async getNotificationTypes() {
    return this.client.get("/v1/settings/notification-types");
  }
  /**
   * Get the current user's personal settings.
   *
   * @returns Promise resolving to user settings
   *
   * @category Settings
   */
  async getUserSettings() {
    return this.client.get("/v1/users/me/settings");
  }
  /**
   * Update the current user's personal settings.
   *
   * @param payload - Settings to update
   * @returns Promise resolving to updated settings
   *
   * @category Settings
   */
  async updateUserSettings(e) {
    return this.client.patch("/v1/users/me/settings", { body: e });
  }
  // ─────────────────────────────────────────────────────────────────────────────
  // Uploads / Imports
  // ─────────────────────────────────────────────────────────────────────────────
  /**
   * Import a song from an external URL.
   *
   * @param payload - Import parameters (url, title, artist, etc.)
   * @returns Promise resolving to the upload job status
   *
   * @category Uploads
   */
  async importSong(e) {
    return this.client.post("/v1/songs/import", { body: e });
  }
  /**
   * Upload a file to a specified endpoint.
   *
   * @param path - The API endpoint path
   * @param file - The file to upload
   * @param additionalData - Additional form fields to include
   * @returns Promise resolving to the upload response
   *
   * @category Uploads
   */
  async uploadFile(e, n, r) {
    const o = new FormData();
    return o.append("file", n), r && Object.entries(r).forEach(([a, l]) => o.append(a, String(l))), this.client.post(e, { body: o });
  }
  // ─────────────────────────────────────────────────────────────────────────────
  // Analytics
  // ─────────────────────────────────────────────────────────────────────────────
  /**
   * Get analytics dashboard data for songs.
   *
   * @param params - Optional filter parameters
   * @param params.startDate - Start date filter (ISO format)
   * @param params.endDate - End date filter (ISO format)
   * @param params.username - Filter by specific user
   * @returns Promise resolving to dashboard analytics data
   *
   * @category Analytics
   */
  async getAnalyticsDashboard(e) {
    const n = new URLSearchParams();
    e?.startDate && n.append("start_date", e.startDate), e?.endDate && n.append("end_date", e.endDate), e?.username && n.append("username", e.username);
    const r = n.toString();
    return this.client.get(`/v1/analytics/songs/dashboard${r ? `?${r}` : ""}`);
  }
  async getSongAnalytics(e, n) {
    const r = new URLSearchParams();
    n?.startDate && r.append("start_date", n.startDate), n?.endDate && r.append("end_date", n.endDate);
    const o = r.toString();
    return this.client.get(`/v1/analytics/songs/song/${e}${o ? `?${o}` : ""}`);
  }
  async getAnalyticsTimeSeries(e) {
    const n = new URLSearchParams();
    return n.append("metric", e.metric), e.startDate && n.append("start_date", e.startDate), e.endDate && n.append("end_date", e.endDate), e.postId && n.append("post_id", e.postId.toString()), e.username && n.append("username", e.username), this.client.get(`/v1/analytics/songs/time-series?${n.toString()}`);
  }
  async getTopSongs(e) {
    const n = new URLSearchParams();
    e?.startDate && n.append("start_date", e.startDate), e?.endDate && n.append("end_date", e.endDate), e?.limit && n.append("limit", e.limit.toString()), e?.username && n.append("username", e.username);
    const r = n.toString();
    return this.client.get(`/v1/analytics/songs/top-songs${r ? `?${r}` : ""}`);
  }
  async getAnalyticsDemographics(e) {
    const n = new URLSearchParams();
    e?.startDate && n.append("start_date", e.startDate), e?.endDate && n.append("end_date", e.endDate), e?.postId && n.append("post_id", e.postId.toString());
    const r = n.toString();
    return this.client.get(`/v1/analytics/songs/demographics${r ? `?${r}` : ""}`);
  }
  // ---------------------------------------------------------------------------
  // CEO Dashboard
  // ---------------------------------------------------------------------------
  /**
   * Get CEO Dashboard summary metrics
   * @param params - Optional date range or preset (7d, 30d, 90d, 365d)
   * @returns Dashboard summary with key metrics and category breakdowns
   */
  async getCEODashboardSummary(e) {
    const n = new URLSearchParams();
    e?.preset && n.append("preset", e.preset), e?.startDate && n.append("start_date", e.startDate), e?.endDate && n.append("end_date", e.endDate);
    const r = n.toString();
    return this.client.get(`/v1/admin/dashboard/summary${r ? `?${r}` : ""}`);
  }
  /**
   * Get CEO Dashboard timeseries data for a specific metric
   * @param params - Metric name and optional date range
   * @returns Timeseries data points
   */
  async getCEODashboardTimeseries(e) {
    const n = new URLSearchParams();
    return n.append("metric", e.metric), e.preset && n.append("preset", e.preset), e.startDate && n.append("start_date", e.startDate), e.endDate && n.append("end_date", e.endDate), this.client.get(`/v1/admin/dashboard/timeseries?${n.toString()}`);
  }
  /**
   * Get user listening distribution (logarithmic buckets)
   * @param params - Optional date range
   * @returns Distribution of users by listening time
   */
  async getCEODashboardListeningDistribution(e) {
    const n = new URLSearchParams();
    e?.preset && n.append("preset", e.preset), e?.startDate && n.append("start_date", e.startDate), e?.endDate && n.append("end_date", e.endDate);
    const r = n.toString();
    return this.client.get(`/v1/admin/dashboard/listening-distribution${r ? `?${r}` : ""}`);
  }
  /**
   * Get hourly active users for the last 24 hours
   * @returns Hourly active user counts
   */
  async getCEODashboardHourlyActiveUsers() {
    return this.client.get("/v1/admin/dashboard/hourly-active-users");
  }
  // ---------------------------------------------------------------------------
  // Push Notifications
  // ---------------------------------------------------------------------------
  async createPushSubscription(e) {
    return this.client.post("/v1/subscriptions", {
      body: { subscription: e }
    });
  }
  async deletePushSubscription(e) {
    await this.client.delete("/v1/subscriptions", {
      body: { endpoint: e }
    });
  }
  // ---------------------------------------------------------------------------
  // Profile / User Likes
  // ---------------------------------------------------------------------------
  async getProfileLikes(e) {
    const n = {
      per_page: e.per_page || 20
    };
    return e.cursor && (n.cursor = e.cursor), e.rating !== void 0 && e.rating > 0 && (n.rating = e.rating), this.client.post(`/v1/profile/${e.username}/likes`, { body: n });
  }
  /**
   * Get liked posts for a user's profile with hydration.
   * Returns a FeedPage with full post objects.
   */
  async getProfileLikesFeed(e, n) {
    const o = await this.getProfileLikes({
      username: e,
      cursor: n || void 0,
      per_page: 20,
      rating: 1
      // Include all rated posts (1-5), not just highly rated (>=3)
    }), a = this.unwrap(o), l = this.extractNextCursor(o);
    if (!Array.isArray(a) || a.length === 0)
      return { ulids: [], posts: [], nextCursor: null };
    const d = a[0];
    if (d && (d.body !== void 0 || d.title !== void 0 || d.content !== void 0 || d.song_title !== void 0 || d.songTitle !== void 0)) {
      const w = a.map((O) => this.normalizePost(O)).filter(Boolean);
      return { ulids: w.map((O) => O.ulid).filter((O) => !!O), posts: w, nextCursor: l ?? null };
    }
    const _ = a.map((w) => w.ulid).filter(Boolean);
    let v = [];
    if (_.length > 0) {
      const w = await this.fetchPostsBatch(_);
      v = _.map((D) => w[D]).filter((D) => !!D);
    }
    return { ulids: _, posts: v, nextCursor: l ?? null };
  }
  // ---------------------------------------------------------------------------
  // Engagement helpers for cache
  // ---------------------------------------------------------------------------
  async updateCachedEngagement(e, n) {
    const r = await this.cachePromise, o = await r.getPost(e);
    if (!o)
      return;
    const { postEngagement: a, userReaction: l, ...d } = n, p = {
      ...o.postEngagement,
      ...a || {},
      userReaction: l
    }, _ = {
      ...o,
      ...d,
      // Include any other fields like updatedAt
      postEngagement: p
    };
    await r.setPost(e, _);
  }
  // ---------------------------------------------------------------------------
  // Songs: detail + channels
  // ---------------------------------------------------------------------------
  async getSongDetail(e) {
    return this.client.get(`/v1/songs/${encodeURIComponent(e)}`);
  }
  /**
   * Create a new song (audio post).
   * Audio and cover image should be uploaded via uploadMediaFile first.
   *
   * @param payload - Song creation payload
   * @param payload.groupName - Artist/group name
   * @param payload.songTitle - Song title
   * @param payload.audioUrl - URL of the uploaded audio file (from S3 multipart upload)
   * @param payload.songArt - Array of cover image URLs (optional)
   * @param payload.lyrics - Song lyrics (optional)
   * @param payload.genreId - Genre ID from app settings (optional)
   * @param payload.enterWsom - Whether to enter WSOM contest (deprecated, use enterWsomEvent)
   * @param payload.enterWsomEvent - WSOM event ID to enter the song into (optional)
   */
  async createSong(e) {
    const n = await this.client.put("/v1/songs/add", {
      body: e
    }), r = this.unwrap(n);
    if (r.ulid) {
      const o = await this.getPostByUlid(r.ulid, !0);
      if (o)
        return o;
    }
    return await this.cachePost(r), r;
  }
  async getSongChannels() {
    return this.client.get("/v1/songs/channels");
  }
  async listSongChannels() {
    return this.client.get("/v1/songs/channels/list");
  }
  /**
   * Generate a personalized mix queue based on a seed song.
   * Returns a queue of 30 songs similar to the seed, based on genre,
   * user listening history, and engagement data.
   *
   * @param seedUlid - The ULID of the seed song to generate the mix from
   * @returns Queue of posts and metadata
   */
  async generateMixQueue(e) {
    const n = await this.client.post("/v1/songs/generate-queue", {
      body: { seed_ulid: e }
    });
    return this.unwrap(n);
  }
  // ─────────────────────────────────────────────────────────────────────────────
  // Chat / Conversations
  // ─────────────────────────────────────────────────────────────────────────────
  /**
   * Get all chat groups/conversations for the current user.
   *
   * @param params - Optional query parameters for filtering/pagination
   * @returns Promise resolving to array of chat groups
   *
   * @example
   * ```typescript
   * const response = await sdk.getChatGroups();
   * const groups = sdk.unwrap(response);
   * groups.forEach(g => console.log(`${g.name}: ${g.unreadCount} unread`));
   * ```
   *
   * @category Chat
   */
  async getChatGroups(e) {
    return this.client.get("/v1/chat/groups", { query: e });
  }
  /**
   * Create a new chat group/conversation.
   *
   * @param payload - Group creation data (members, name, etc.)
   * @returns Promise resolving to the created chat group
   *
   * @category Chat
   */
  async createChatGroup(e) {
    return this.client.post("/v1/chat/groups", { body: e });
  }
  /**
   * Mark all messages in a chat group as read.
   *
   * @param groupUlid - The ULID of the chat group
   *
   * @category Chat
   */
  async markChatGroupRead(e) {
    await this.client.post(`/v1/chat/groups/${encodeURIComponent(e)}/read`);
  }
  /**
   * Get messages from a chat group.
   *
   * @param groupUlid - The ULID of the chat group
   * @param params - Optional query parameters for pagination
   * @returns Promise resolving to array of chat messages
   *
   * @example
   * ```typescript
   * const response = await sdk.getChatMessages(groupUlid);
   * const messages = sdk.unwrap(response);
   * messages.forEach(m => console.log(`${m.sender?.username}: ${m.body}`));
   * ```
   *
   * @category Chat
   */
  async getChatMessages(e, n) {
    return this.client.get(`/v1/chat/groups/${encodeURIComponent(e)}/messages`, { query: n });
  }
  /**
   * Send a message to a chat group.
   *
   * @param groupUlid - The ULID of the chat group
   * @param payload - Message data (body text, attachments, etc.)
   * @returns Promise resolving to the sent message
   *
   * @example
   * ```typescript
   * const response = await sdk.sendChatMessage(groupUlid, { body: 'Hello!' });
   * const message = sdk.unwrap(response);
   * ```
   *
   * @category Chat
   */
  async sendChatMessage(e, n) {
    return this.client.post(`/v1/chat/groups/${encodeURIComponent(e)}/messages`, { body: n });
  }
  // ---------------------------------------------------------------------------
  // Group Moderation (for MODERATED visibility groups)
  // ---------------------------------------------------------------------------
  /**
   * Get posts pending moderation for a group
   * @param groupUlid - The group's ULID
   * @param params - Optional pagination params (cursor, limit)
   */
  async getModerationQueue(e, n) {
    const r = await this.client.get(`/v1/group/${encodeURIComponent(e)}/moderation-queue`, { query: n });
    return this.unwrap(r);
  }
  /**
   * Approve a pending post in a moderated group
   * @param groupUlid - The group's ULID
   * @param postUlid - The post's ULID to approve
   */
  async approvePost(e, n) {
    const r = await this.client.post(`/v1/group/${encodeURIComponent(e)}/posts/${encodeURIComponent(n)}/approve`), o = this.unwrap(r), a = await this.cachePromise, l = await a.getPost(n);
    return l && await a.setPost(n, {
      ...l,
      group_moderation_status: "approved"
    }), o;
  }
  /**
   * Reject a pending post in a moderated group
   * @param groupUlid - The group's ULID
   * @param postUlid - The post's ULID to reject
   * @param reason - Reason for rejection (will be sent to the author)
   */
  async rejectPost(e, n, r) {
    const o = await this.client.post(`/v1/group/${encodeURIComponent(e)}/posts/${encodeURIComponent(n)}/reject`, { body: { reason: r } }), a = this.unwrap(o);
    return await (await this.cachePromise).deletePost(n), a;
  }
  // ---------------------------------------------------------------------------
  // User Genre Preferences
  // ---------------------------------------------------------------------------
  /**
   * Get current user's genre preferences
   */
  async getGenrePreferences() {
    const e = await this.client.get("/v1/users/me/genre-preferences");
    return this.unwrap(e);
  }
  /**
   * Update multiple genre preferences at once
   */
  async updateGenrePreferences(e) {
    const n = e.map((o) => ({
      genre_id: o.genreId,
      is_enabled: o.isEnabled,
      ...o.sortOrder !== void 0 && { sort_order: o.sortOrder }
    })), r = await this.client.put("/v1/users/me/genre-preferences", {
      body: { preferences: n }
    });
    return this.unwrap(r);
  }
  /**
   * Toggle a single genre preference on/off
   */
  async toggleGenrePreference(e) {
    const n = await this.client.patch(`/v1/users/me/genre-preferences/${e}/toggle`);
    return this.unwrap(n);
  }
  /**
   * Reset genre preferences to defaults (all tenant-enabled genres)
   */
  async resetGenrePreferences() {
    const e = await this.client.post("/v1/users/me/genre-preferences/reset");
    return this.unwrap(e);
  }
  /**
   * Get trending genres by percentage of audio views
   * Returns genres ordered by popularity (trendingScore)
   */
  async getTrendingGenres() {
    const e = await this.client.get("/v1/songs/feed/trending/genres");
    return this.unwrap(e);
  }
  async getTrendingMusicUsers(e) {
    const n = new URLSearchParams();
    e?.limit && n.append("limit", e.limit.toString());
    const r = n.toString(), o = await this.client.get(`/v1/songs/feed/trending/users${r ? `?${r}` : ""}`);
    return this.unwrap(o);
  }
  /**
   * Get trending hashtags
   * Returns hashtags ordered by usage count in the last 24 hours
   */
  async getTrendingHashtags(e = 5) {
    const n = await this.client.get("/v1/trending/hashtags/last24");
    return (this.unwrap(n).hashtags || []).slice(0, e);
  }
  /**
   * Get trending songs for sidebar display
   * Returns songs with title, artist, cover image, and play count
   */
  async getTrendingSongs(e = 5, n = !1) {
    const r = new URLSearchParams();
    r.append("limit", e.toString()), n && r.append("nocache", "1");
    const o = await this.client.get(`/v1/songs/feed/trending/sidebar?${r.toString()}`);
    return this.unwrap(o);
  }
  // ---------------------------------------------------------------------------
  // Signup / Demographics
  // ---------------------------------------------------------------------------
  /**
   * Get signup configuration including demographic questions and legal documents
   * Returns questions with their options and current user responses
   */
  async getSignupConfig() {
    const e = await this.client.get("/v1/signup/config");
    return this.unwrap(e);
  }
  /**
   * Save demographic question responses
   * @param responses - Array of question responses to save
   */
  async saveDemographicResponses(e) {
    const n = await this.client.post("/v1/signup/responses", { body: { responses: e } });
    return this.unwrap(n);
  }
  /**
   * Accept legal agreement documents
   * @param documents - Array of document acceptances with timestamps
   */
  async acceptAgreements(e) {
    const n = await this.client.post("/v1/signup/agreements", { body: { documents: e } });
    return this.unwrap(n);
  }
  /**
   * Mark account setup as complete
   * Validates all requirements are met before completing
   */
  async completeSignup() {
    const e = await this.client.post("/v1/signup/complete");
    return this.unwrap(e);
  }
  // ---------------------------------------------------------------------------
  // WSOM (World Series of Music)
  // ---------------------------------------------------------------------------
  /**
   * Get list of WSOM contests
   */
  async wsomListContests(e, n) {
    const r = new URLSearchParams();
    e && r.append("status", e), n && r.append("cursor", n);
    const o = r.toString(), a = `/v1/wsom/contests${o ? `?${o}` : ""}`, l = await this.client.get(a), d = this.unwrap(l);
    return {
      data: d.contests ?? d,
      meta: {
        nextCursor: d.nextCursor ?? null,
        prevCursor: d.prevCursor ?? null,
        perPage: d.perPage ?? 10
      }
    };
  }
  /**
   * Get the currently active WSOM contest
   */
  async wsomGetActiveContest() {
    try {
      const e = await this.client.get("/v1/wsom/contests/active");
      return this.unwrap(e) ?? null;
    } catch (e) {
      if (e && typeof e == "object" && "status" in e && e.status === 404)
        return null;
      throw e;
    }
  }
  /**
   * Get a specific WSOM contest by ULID
   */
  async wsomGetContest(e) {
    const n = await this.client.get(`/v1/wsom/contests/${e}`);
    return this.unwrap(n);
  }
  /**
   * Get entries for a WSOM contest
   */
  async wsomGetContestEntries(e, n, r) {
    if (!e || typeof e != "string" || e.trim() === "")
      throw new Error("Contest ULID is required and must be a valid string");
    const o = new URLSearchParams();
    n && o.append("sort", n), r && o.append("cursor", r);
    const a = o.toString(), l = `/v1/wsom/contests/${e}/entries${a ? `?${a}` : ""}`, d = await this.client.get(l), p = this.unwrap(d);
    return {
      data: p.entries ?? p,
      meta: {
        nextCursor: p.nextCursor ?? null,
        prevCursor: p.prevCursor ?? null,
        perPage: p.perPage ?? 20
      }
    };
  }
  /**
   * Get results for a completed WSOM contest
   */
  async wsomGetContestResults(e) {
    const n = await this.client.get(`/v1/wsom/contests/${e}/results`);
    return this.unwrap(n);
  }
  /**
   * Get the WSOM feed for the active contest
   */
  async wsomGetFeed(e = !1, n) {
    const r = new URLSearchParams();
    e && r.append("unrated_only", "true"), n && r.append("cursor", n);
    const o = r.toString(), a = `/v1/wsom/feed${o ? `?${o}` : ""}`, l = await this.client.get(a), d = this.unwrap(l);
    return {
      data: d.entries ?? d,
      meta: {
        nextCursor: d.nextCursor ?? null,
        prevCursor: d.prevCursor ?? null,
        perPage: d.perPage ?? 20,
        contest: d.contest ?? {},
        unratedCount: d.unratedCount ?? 0
      }
    };
  }
  /**
   * Enter a song into the active WSOM contest
   */
  async wsomEnterSong(e) {
    const n = await this.client.post("/v1/wsom/entries", {
      body: { postUlid: e }
    });
    return this.unwrap(n);
  }
  /**
   * Get a specific WSOM entry
   */
  async wsomGetEntry(e) {
    const n = await this.client.get(`/v1/wsom/entries/${e}`);
    return this.unwrap(n);
  }
  /**
   * Withdraw an entry from WSOM
   */
  async wsomWithdrawEntry(e) {
    await this.client.delete(`/v1/wsom/entries/${e}`);
  }
  /**
   * Rate a WSOM entry
   */
  async wsomRateEntry(e, n) {
    const r = await this.client.post(`/v1/wsom/entries/${e}/rate`, { body: { rating: n } });
    return this.unwrap(r);
  }
  /**
   * Get the current user's WSOM entries
   */
  async wsomGetMyEntries(e) {
    const n = new URLSearchParams();
    e && n.append("status", e);
    const r = n.toString(), o = `/v1/wsom/my-entries${r ? `?${r}` : ""}`, a = await this.client.get(o);
    return this.unwrap(a) ?? [];
  }
  /**
   * Create a new WSOM contest (admin only)
   */
  async wsomCreateContest(e) {
    const n = await this.client.post("/v1/wsom/admin/contests", { body: e });
    return this.unwrap(n);
  }
  /**
   * Update a WSOM contest (admin only)
   */
  async wsomUpdateContest(e, n) {
    const r = await this.client.patch(`/v1/wsom/admin/contests/${e}`, { body: n });
    return this.unwrap(r);
  }
  /**
   * Check if there's an active WSOM contest
   */
  async wsomHasActiveContest() {
    return await this.wsomGetActiveContest() !== null;
  }
  // ---------------------------------------------------------------------------
  // WSOM v3 Methods (Event-based contest system)
  // ---------------------------------------------------------------------------
  /**
   * Track listening time for a WSOM entry (v3)
   * @param entryUlid - The entry ULID
   * @param seconds - Number of seconds listened
   */
  async wsomTrackListening(e, n) {
    const r = await this.client.post(`/v3/wsom/entries/${e}/listening`, { body: { seconds: n } });
    return ze(this.unwrap(r));
  }
  /**
   * Submit a classification for a WSOM entry (v3)
   * @param entryUlid - The entry ULID
   * @param classification - AI, Human, Hybrid, or CouldNotDetermine
   */
  async wsomSubmitClassification(e, n) {
    const r = await this.client.post(`/v3/wsom/entries/${e}/classifications`, { body: { classification: n } });
    return ze(this.unwrap(r));
  }
  /**
   * Update an existing classification within the edit window (v3)
   * @param classificationId - The classification ID
   * @param classification - Updated classification type
   */
  async wsomUpdateClassification(e, n) {
    const r = await this.client.patch(`/v3/wsom/classifications/${e}`, { body: { classification: n } });
    return ze(this.unwrap(r));
  }
  /**
   * Get detector accuracy leaderboards (v3)
   */
  async wsomGetLeaderboards() {
    const e = await this.client.get("/v3/wsom/leaderboards");
    return ze(this.unwrap(e));
  }
  /**
   * List upcoming WSOM events (v3, public - no auth required)
   */
  async wsomListEvents() {
    const e = await this.client.get("/v3/wsom/events");
    return ze(this.unwrap(e));
  }
  /**
   * Get a specific WSOM event (v3, public - no auth required)
   * @param eventId - The event ID
   */
  async wsomGetEvent(e) {
    const n = await this.client.get(`/v3/wsom/events/${e}`);
    return ze(this.unwrap(n));
  }
  /**
   * Get the feed of entries for a specific WSOM event (v3).
   * Used by the voting view to show event-scoped entries.
   * @param eventId - The event ID
   * @param cursor - Optional cursor for pagination
   */
  async wsomGetEventFeed(e, n) {
    const r = {};
    n && (r.cursor = n);
    const o = await this.client.get(`/v3/wsom/events/${e}/feed`, { query: r }), a = ze(this.unwrap(o));
    return {
      data: a.entries ?? [],
      meta: {
        nextCursor: a.nextCursor ?? null,
        prevCursor: a.prevCursor ?? null,
        perPage: a.perPage ?? 50,
        contest: {},
        // Not applicable for event feed
        unratedCount: a.unratedCount ?? 0
      }
    };
  }
  /**
   * Get entry eligibility status for a WSOM event or contest.
   * @param options - Optional event ID or contest ULID to check status for
   */
  async wsomGetEntryStatus(e) {
    const n = {};
    e?.eventId ? n.event = String(e.eventId) : e?.contestUlid && (n.contest = e.contestUlid);
    const r = await this.client.get("/v1/wsom/entry-status", { query: n });
    return ze(this.unwrap(r));
  }
  // ---------------------------------------------------------------------------
  // Passkey (WebAuthn) Methods
  // ---------------------------------------------------------------------------
  /**
   * Check if email has registered passkeys
   * Note: This endpoint does not require authentication
   */
  async passkeyCheckHasPasskeys(e) {
    const n = await this.client.post("/v1/auth/passkey/check", { body: { email: e }, skipAuth: !0 });
    return ze(this.unwrap(n));
  }
  /**
   * Get WebAuthn authentication options for passkey login
   * Note: This endpoint does not require authentication
   * @param email Optional email to filter available credentials
   */
  async passkeyGetAuthenticateOptions(e) {
    const n = await this.client.post("/v1/auth/passkey/authenticate-options", { body: e ? { email: e } : {}, skipAuth: !0 });
    return ze(this.unwrap(n));
  }
  /**
   * Authenticate with a passkey credential
   * Note: This endpoint does not require authentication
   * @param sessionId Session ID from authenticate-options call
   * @param credential The WebAuthn credential response
   */
  async passkeyAuthenticate(e, n) {
    const r = await this.client.post("/v1/auth/passkey/authenticate", { body: { session_id: e, credential: n }, skipAuth: !0 });
    return ze(this.unwrap(r));
  }
  /**
   * Get WebAuthn registration options for adding a new passkey
   * @param name Display name for the passkey
   */
  async passkeyGetRegisterOptions(e) {
    const n = await this.client.post("/v1/auth/passkey/register-options", { body: { name: e } });
    return this.unwrap(n);
  }
  /**
   * Register a new passkey credential
   * @param credential The WebAuthn credential response
   */
  async passkeyRegister(e) {
    const n = await this.client.post("/v1/auth/passkey/register", { body: { credential: e } });
    return ze(this.unwrap(n));
  }
  /**
   * List all passkeys for the current user
   */
  async passkeyList() {
    const e = await this.client.get("/v1/auth/passkeys");
    return ze(this.unwrap(e)).passkeys ?? [];
  }
  /**
   * Rename a passkey
   * @param id Passkey ID
   * @param name New name for the passkey
   */
  async passkeyRename(e, n) {
    const r = await this.client.patch(`/v1/auth/passkeys/${e}`, { body: { name: n } });
    return ze(this.unwrap(r));
  }
  /**
   * Delete a passkey
   * @param id Passkey ID
   */
  async passkeyDelete(e) {
    await this.client.delete(`/v1/auth/passkeys/${e}`);
  }
  // ---------------------------------------------------------------------------
  // Poll Methods
  // ---------------------------------------------------------------------------
  /**
   * Get poll data for a post
   */
  async pollGet(e) {
    const n = await this.client.get(`/v1/posts/${e}/polls`);
    return this.unwrap(n).poll ?? null;
  }
  /**
   * Get current user's vote on a poll
   */
  async pollGetMyVote(e) {
    const n = await this.client.get(`/v1/posts/${e}/polls/me`);
    return this.unwrap(n).vote ?? null;
  }
  /**
   * Vote on a poll
   * @param postUlid Post ULID
   * @param optionId Poll option ID to vote for
   */
  async pollVote(e, n) {
    const r = await this.client.post(`/v1/posts/${e}/polls/vote`, { body: { optionId: n } });
    return this.unwrap(r).poll;
  }
  /**
   * Remove vote from a poll
   */
  async pollRemoveVote(e) {
    const n = await this.client.delete(`/v1/posts/${e}/polls/vote`);
    return this.unwrap(n).poll;
  }
  /**
   * Batch fetch polls for multiple posts
   * @param postUlids Array of post ULIDs
   */
  async pollBatchGet(e) {
    const n = await this.client.post("/v1/posts/polls/batch", { body: { postUlids: e } });
    return this.unwrap(n);
  }
  // ---------------------------------------------------------------------------
  // Trending Methods
  // ---------------------------------------------------------------------------
  /**
   * Get trending songs feed
   * Hydrates posts with full data via batch fetch
   */
  async trendingGetSongs(e) {
    const n = new URLSearchParams();
    e && n.append("cursor", e);
    const r = n.toString(), o = `/v1/songs/feed/trending${r ? `?${r}` : ""}`, a = await this.client.get(o), d = (this.unwrap(a) ?? []).map((v) => v.ulid || v.id).filter((v) => !!v);
    this.log(`[SDK] 📊 trendingGetSongs: Got ${d.length} ULIDs from feed endpoint`);
    const p = await this.fetchPostsBatch(d);
    this.log(`[SDK] 💧 trendingGetSongs: Hydrated ${Object.keys(p).length} posts`);
    const _ = d.map((v) => p[v]).filter((v) => !!v);
    return {
      ulids: d,
      posts: _,
      nextCursor: this.extractNextCursor(a)
    };
  }
  /**
   * Get trending videos feed
   * Hydrates posts with full data via batch fetch
   */
  async trendingGetVideos(e) {
    const n = new URLSearchParams();
    e && n.append("cursor", e);
    const r = n.toString(), o = `/v1/trending/videos${r ? `?${r}` : ""}`, a = await this.client.get(o), d = (this.unwrap(a) ?? []).map((v) => v.ulid || v.id).filter((v) => !!v), p = await this.fetchPostsBatch(d), _ = d.map((v) => p[v]).filter((v) => !!v);
    return {
      ulids: d,
      posts: _,
      nextCursor: this.extractNextCursor(a)
    };
  }
  /**
   * Get trending bursts feed
   * Hydrates posts with full data via batch fetch
   */
  async trendingGetBursts(e) {
    const n = new URLSearchParams();
    e && n.append("cursor", e);
    const r = n.toString(), o = `/v1/trending/bursts${r ? `?${r}` : ""}`, a = await this.client.get(o), d = (this.unwrap(a) ?? []).map((v) => v.ulid || v.id).filter((v) => !!v), p = await this.fetchPostsBatch(d), _ = d.map((v) => p[v]).filter((v) => !!v);
    return {
      ulids: d,
      posts: _,
      nextCursor: this.extractNextCursor(a)
    };
  }
  /**
   * Get all videos feed
   */
  async videosGetAll(e) {
    const n = new URLSearchParams();
    e && n.append("cursor", e);
    const r = n.toString(), o = `/v1/videos/all${r ? `?${r}` : ""}`, a = await this.client.get(o), l = this.unwrap(a) ?? [];
    return await Promise.all(l.map((d) => this.cachePost(d))), {
      ulids: l.map((d) => d.ulid).filter((d) => !!d),
      posts: l,
      nextCursor: this.extractNextCursor(a)
    };
  }
  /**
   * Get all bursts feed
   */
  async burstsGetAll(e) {
    const n = new URLSearchParams();
    e && n.append("cursor", e);
    const r = n.toString(), o = `/v1/bursts/all${r ? `?${r}` : ""}`, a = await this.client.get(o), l = this.unwrap(a) ?? [];
    return await Promise.all(l.map((d) => this.cachePost(d))), {
      ulids: l.map((d) => d.ulid).filter((d) => !!d),
      posts: l,
      nextCursor: this.extractNextCursor(a)
    };
  }
  // ---------------------------------------------------------------------------
  // Push Notification Methods
  // ---------------------------------------------------------------------------
  /**
   * Register device for push notifications
   * @param token FCM/APNS token
   * @param platform Device platform (ios, android, web)
   */
  async pushNotificationRegister(e, n) {
    const r = await this.client.post("/v1/push-notifications/register", { body: { token: e, platform: n } });
    return this.unwrap(r);
  }
  // ---------------------------------------------------------------------------
  // Branding Methods
  // ---------------------------------------------------------------------------
  /**
   * Get site branding configuration
   * Note: This endpoint is at the root, not under /v1
   */
  async brandingGet() {
    const e = await this.client.get("/branding.json");
    return this.unwrap(e);
  }
  // ---------------------------------------------------------------------------
  // Cache helpers
  // ---------------------------------------------------------------------------
  async cachePost(e) {
    const n = e.ulid || e.id;
    if (!n)
      return;
    await (await this.cachePromise).setPost(n, this.normalizePost(e));
  }
  unwrap(e) {
    return e && typeof e == "object" && "data" in e ? e.data : e;
  }
  extractNextCursor(e) {
    return e?.nextCursor ?? e?.meta?.nextCursor ?? e?.meta?.pagination?.nextCursor ?? null;
  }
  /**
   * Normalize post data from API to SDK format.
   * Handles field name variations between API responses.
   */
  normalizePost(e) {
    const n = e, r = { ...e };
    !r.type && r.postType && (r.type = r.postType), (r.title === null || r.title === void 0) && (r.title = n.song_title || n.songTitle || n.name), n.images !== void 0 && (r.images = n.images), r.artist || (r.artist = n.artist_name || n.artistName), r.album || (r.album = n.album_name || n.albumName), r.userId || (r.userId = n.user_ulid || n.userULID);
    const o = n.user, a = o && typeof o == "object" ? { ...o } : {};
    !a.username && n.username && (a.username = n.username), !a.displayName && n.displayName && (a.displayName = n.displayName), !a.name && n.name && (a.name = n.name), !a.avatar && n.avatar && (a.avatar = n.avatar), !a.avatarUrl && n.avatarUrl && (a.avatarUrl = n.avatarUrl), !a.name && a.displayName && (a.name = a.displayName), !a.displayName && a.name && (a.displayName = a.name), !a.avatar && a.avatarUrl && (a.avatar = a.avatarUrl), !a.avatarUrl && a.avatar && (a.avatarUrl = a.avatar), !r.userId && a.ulid && (r.userId = a.ulid), !r.userId && a.userId && (r.userId = a.userId), Object.keys(a).length > 0 && (r.user = a);
    const l = n.ratingStats;
    l && (r.ratingStats = {
      average: l.average_rating ?? l.average,
      total: l.total_ratings ?? l.total,
      distribution: l.rating_distribution ?? l.distribution
    }, n.averageRating || (r.averageRating = l.average_rating ?? l.average), n.ratingCount || (r.ratingCount = l.total_ratings ?? l.total)), n.userRating !== void 0 && (r.userRating = n.userRating);
    const d = n.poll;
    d && (r.poll = Kc(d));
    const p = bo(r);
    return r._engagementHash = wo(p), r;
  }
  // ─────────────────────────────────────────────────────────────────────────────
  // User Management / Delegation
  // ─────────────────────────────────────────────────────────────────────────────
  /**
   * Get managed user limit status for the current user.
   *
   * Returns whether the user can create more managed users based on their badge tier.
   *
   * @returns Promise resolving to limit status (can_create, current_count, limit)
   *
   * @example
   * ```typescript
   * const response = await sdk.getUserManagementLimitStatus();
   * const status = sdk.unwrap(response);
   * if (status.can_create) {
   *   console.log(`Can create ${status.remaining} more managed users`);
   * }
   * ```
   *
   * @category Delegation
   */
  async getUserManagementLimitStatus() {
    return this.client.get("/v1/user-management/limit-status");
  }
  /**
   * Create a new managed user account.
   *
   * Creates a user and establishes a management assignment in one operation.
   *
   * @param requestData - User creation data including credentials and scopes
   * @returns Promise resolving to the created user and assignment
   *
   * @category Delegation
   */
  async createManagedUser(e) {
    return this.client.post("/v1/user-management/managed-users", { body: e });
  }
  /**
   * List managed user assignments for the current manager.
   *
   * @param params - Optional filter parameters
   * @param params.scope - Filter by delegation scope
   * @param params.status - Filter by status (default: "active")
   * @param params.cursor - Cursor for pagination
   * @param params.limit - Maximum results (default: 20)
   * @returns Promise resolving to assignment list with pagination
   *
   * @category Delegation
   */
  async listManagedUserAssignments(e) {
    return this.client.get("/v1/user-management/assignments", {
      query: {
        scope: e?.scope,
        status: e?.status || "active",
        cursor: e?.cursor,
        limit: e?.limit || 20
      }
    });
  }
  /**
   * Revoke a managed user assignment.
   *
   * Ends the delegation relationship between manager and managed user.
   *
   * @param assignmentUlid - The ULID of the assignment to revoke
   * @returns Promise resolving to revocation details
   *
   * @category Delegation
   */
  async revokeManagedUserAssignment(e) {
    return this.client.delete(`/v1/user-management/assignments/${encodeURIComponent(e)}`);
  }
  /**
   * Issue a short-lived acting context token for a managed user.
   *
   * The token is used in X-Acting-Context-Token header for delegated operations.
   *
   * @param assignmentUlid - The ULID of the assignment
   * @param request - Token request with intended action and TTL
   * @returns Promise resolving to the acting context token and metadata
   *
   * @example
   * ```typescript
   * const response = await sdk.issueManagedUserToken(assignmentUlid, {
   *   intended_action: 'edit_profile',
   *   ttl_seconds: 300,
   * });
   * const token = sdk.unwrap(response);
   * // Use token.acting_context_token in subsequent requests
   * ```
   *
   * @category Delegation
   */
  async issueManagedUserToken(e, n) {
    return this.client.post(`/v1/user-management/assignments/${encodeURIComponent(e)}/token`, { body: n });
  }
  /**
   * Update a managed user's profile on their behalf.
   *
   * Requires acting context headers from issueManagedUserToken.
   * Implements read-after-write to keep IndexedDB cache in sync.
   *
   * @param userUlid - The ULID of the managed user
   * @param data - Profile fields to update
   * @param actingHeaders - Headers containing X-Acting-Context-Token and X-Acting-User-ULID
   * @returns Promise resolving to updated profile and audit entry
   *
   * @category Delegation
   */
  async updateManagedUserProfile(e, n, r) {
    const o = await this.client.patch(`/v1/user-management/users/${encodeURIComponent(e)}`, {
      body: n,
      headers: r
    });
    try {
      this.log("📡 SDK: Fetching updated managed user profile from API:", e);
      const a = await this.client.get(`/v1/profile/ulid/${encodeURIComponent(e)}`);
      if (a.data) {
        const l = await this.cachePromise, d = this.normalizeUserProfile(a.data);
        await l.setUser(d.ulid, d), this.log("✅ SDK: Updated managed user cache after profile update:", e);
      }
    } catch (a) {
      console.error("⚠️ SDK: Failed to update cache after managed user profile update:", a);
    }
    return o;
  }
  /**
   * Upload avatar for a managed user.
   *
   * Allows a manager to update the avatar image for a managed user.
   * Requires acting context headers obtained from issueManagedUserToken.
   *
   * @param userUlid - The ULID of the managed user
   * @param file - The avatar image file (JPEG/PNG recommended)
   * @param actingHeaders - Headers containing X-Acting-Context-Token and X-Acting-User-ULID
   * @returns Promise resolving to the new avatar URL
   *
   * @example
   * ```typescript
   * const tokenResponse = await sdk.issueManagedUserToken(assignmentUlid, {
   *   intended_action: 'edit_avatar',
   *   ttl_seconds: 300,
   * });
   * const token = sdk.unwrap(tokenResponse);
   *
   * const avatarFile = document.querySelector('input[type="file"]').files[0];
   * const response = await sdk.uploadManagedUserAvatar(
   *   userUlid,
   *   avatarFile,
   *   {
   *     'X-Acting-Context-Token': token.acting_context_token,
   *     'X-Acting-User-ULID': userUlid,
   *   }
   * );
   * console.log('New avatar URL:', sdk.unwrap(response).avatar_url);
   * ```
   *
   * @category Delegation
   */
  async uploadManagedUserAvatar(e, n, r) {
    const o = new FormData();
    return o.append("avatar", n), this.client.post(`/v1/user-management/users/${encodeURIComponent(e)}/avatar`, {
      body: o,
      headers: r
    });
  }
  /**
   * List audit entries for a managed user.
   *
   * Returns a paginated log of actions taken on behalf of a managed user,
   * including profile updates, avatar changes, and other delegated operations.
   *
   * @param userUlid - The ULID of the managed user
   * @param params - Optional filtering and pagination parameters
   * @param params.action - Filter by specific action type
   * @param params.cursor - Pagination cursor for next page
   * @param params.per_page - Number of entries per page (default: 20)
   * @returns Promise resolving to paginated audit entries
   *
   * @example
   * ```typescript
   * // Get all audit entries for a managed user
   * const response = await sdk.listManagedUserAudits(userUlid);
   * const audits = sdk.unwrap(response);
   *
   * audits.forEach(entry => {
   *   console.log(`${entry.action} at ${entry.created_at} by ${entry.actor_ulid}`);
   * });
   *
   * // Filter by action type
   * const profileUpdates = await sdk.listManagedUserAudits(userUlid, {
   *   action: 'profile_update',
   *   per_page: 50,
   * });
   * ```
   *
   * @category Delegation
   */
  async listManagedUserAudits(e, n) {
    return this.client.get(`/v1/user-management/users/${encodeURIComponent(e)}/audits`, {
      query: {
        action: n?.action,
        cursor: n?.cursor,
        per_page: n?.per_page || 20
      }
    });
  }
  /**
   * Send audio view tracking data for analytics.
   *
   * Reports listening progress for audio posts to the server for analytics
   * and recommendation purposes. Typically called periodically during playback.
   *
   * @param payload - The tracking payload
   * @param payload.views - Array of view segments with position data
   * @param payload.timestamp - Unix timestamp when the data was collected
   * @param payload.client_id - Unique identifier for the client session
   * @returns Promise that resolves when tracking data is sent
   *
   * @example
   * ```typescript
   * await sdk.sendAudioViews({
   *   views: [
   *     {
   *       post_ulid: '01HX...ULID',
   *       start_second: 0,
   *       end_second: 30,
   *       last_position: 30,
   *     },
   *   ],
   *   timestamp: Date.now(),
   *   client_id: 'unique-session-id',
   * });
   * ```
   *
   * @category Analytics
   */
  async sendAudioViews(e) {
    await this.client.post("/v1/audio-views", {
      body: e
    });
  }
  /**
   * Get all 3 Daily Mix playlists.
   *
   * Returns personalized daily mix playlists generated based on the user's
   * listening history and preferences. These playlists are refreshed daily.
   *
   * @returns Promise resolving to array of 3 Daily Mix playlists
   *
   * @example
   * ```typescript
   * const dailyMixes = await sdk.getDailyMixes();
   * dailyMixes.forEach((mix, index) => {
   *   console.log(`Daily Mix ${index + 1}: ${mix.name}`);
   * });
   * ```
   *
   * @category Playlists
   */
  async getDailyMixes() {
    return this.client.get("/v1/smart-playlists/daily-mixes");
  }
  /**
   * Get Discover Weekly playlist
   * GET /v1/smart-playlists/discover-weekly
   */
  async getDiscoverWeekly() {
    return this.client.get("/v1/smart-playlists/discover-weekly");
  }
  /**
   * Get user's music preferences and listening stats
   * GET /v1/smart-playlists/preferences
   */
  async getUserMusicPreferences() {
    return this.client.get("/v1/smart-playlists/preferences");
  }
  /**
   * Force refresh a smart playlist
   * POST /v1/smart-playlists/refresh/{playlistId}
   */
  async refreshSmartPlaylist(e) {
    return this.client.post(`/v1/smart-playlists/refresh/${e}`);
  }
  // ---------------------------------------------------------------------------
  // Audio Ads
  // ---------------------------------------------------------------------------
  /**
   * Get all active audio ads for playback between songs.
   * Returns all active audio ads for frontend caching. The frontend
   * should cache these locally and handle rotation. Refresh every
   * 5 minutes to pick up any changes (new ads or removed ads).
   *
   * This is a public endpoint - no authentication required.
   *
   * GET /v1/ads/audio
   *
   * @returns Array of audio ads (empty array if none available)
   */
  async getAudioAds() {
    return (await this.client.get("/v1/ads/audio"))?.data ?? [];
  }
  // ---------------------------------------------------------------------------
  // Blog Posts
  // ---------------------------------------------------------------------------
  /**
   * List published blog posts with filtering and pagination.
   * GET /v1/blog
   *
   * @param options - Filtering and pagination options
   * @returns Paginated list of blog posts
   */
  async listBlogPosts(e) {
    return await this.client.get("/v1/blog", {
      query: e
    });
  }
  /**
   * Get featured blog posts.
   * GET /v1/blog/featured
   *
   * @returns Array of featured blog posts
   */
  async getFeaturedBlogPosts() {
    return (await this.client.get("/v1/blog/featured"))?.data ?? [];
  }
  /**
   * Get blog categories.
   * GET /v1/blog/categories
   *
   * @returns Array of blog categories with post counts
   */
  async getBlogCategories() {
    return (await this.client.get("/v1/blog/categories"))?.data ?? [];
  }
  /**
   * Get a single blog post by slug.
   * GET /v1/blog/{slug}
   *
   * @param slug - Blog post slug
   * @returns Full blog post details
   */
  async getBlogPost(e) {
    const n = await this.client.get(`/v1/blog/${encodeURIComponent(e)}`);
    return this.unwrap(n);
  }
  /**
   * Create a new blog post.
   * POST /v1/blog
   *
   * @param input - Blog post creation data
   * @returns Created blog post
   */
  async createBlogPost(e) {
    const n = await this.client.post("/v1/blog", {
      body: e
    });
    return this.unwrap(n);
  }
  /**
   * Update an existing blog post.
   * PUT /v1/blog/{ulid}
   *
   * @param ulid - Blog post ULID
   * @param input - Blog post update data
   * @returns Updated blog post
   */
  async updateBlogPost(e, n) {
    const r = await this.client.put(`/v1/blog/${encodeURIComponent(e)}`, {
      body: n
    });
    return this.unwrap(r);
  }
  /**
   * Delete a blog post (soft delete).
   * DELETE /v1/blog/{ulid}
   *
   * @param ulid - Blog post ULID
   */
  async deleteBlogPost(e) {
    await this.client.delete(`/v1/blog/${encodeURIComponent(e)}`);
  }
  /**
   * Publish a draft blog post.
   * POST /v1/blog/{ulid}/publish
   *
   * @param ulid - Blog post ULID
   * @returns Published blog post
   */
  async publishBlogPost(e) {
    const n = await this.client.post(`/v1/blog/${encodeURIComponent(e)}/publish`);
    return this.unwrap(n);
  }
  /**
   * Schedule a blog post for future publication.
   * POST /v1/blog/{ulid}/schedule
   *
   * @param ulid - Blog post ULID
   * @param scheduledFor - ISO 8601 datetime string for scheduled publication
   * @returns Scheduled blog post
   */
  async scheduleBlogPost(e, n) {
    const r = await this.client.post(`/v1/blog/${encodeURIComponent(e)}/schedule`, {
      body: { scheduled_for: n }
    });
    return this.unwrap(r);
  }
  /**
   * Search blog posts via Typesense.
   * POST /v1/blog/search
   *
   * @param options - Search options
   * @returns Paginated search results
   */
  async searchBlogPosts(e) {
    return await this.client.post("/v1/blog/search", {
      body: e
    });
  }
  // ---------------------------------------------------------------------------
  // Creation Mode Methods (AI/Human content voting)
  // ---------------------------------------------------------------------------
  /**
   * Vote on a post's creation mode (AI, HUMAN, HYBRID, or CANT_TELL).
   * POST /v1/posts/{postUlid}/creation-mode
   *
   * @param postUlid - The ULID of the post to vote on
   * @param mode - The creation mode to vote for
   * @returns The vote response with stats
   */
  async voteCreationMode(e, n) {
    const r = await this.client.post(`/v1/posts/${encodeURIComponent(e)}/creation-mode`, { body: { mode: n } });
    return this.unwrap(r);
  }
  /**
   * Remove the current user's creation mode vote from a post.
   * DELETE /v1/posts/{postUlid}/creation-mode
   *
   * @param postUlid - The ULID of the post to remove the vote from
   * @returns The delete response with message and stats
   */
  async deleteCreationModeVote(e) {
    const n = await this.client.delete(`/v1/posts/${encodeURIComponent(e)}/creation-mode`);
    return this.unwrap(n);
  }
  // ---------------------------------------------------------------------------
  // Group Methods
  // ---------------------------------------------------------------------------
  /**
   * Get all groups with optional pagination.
   * GET /v1/groups
   *
   * @param cursor - Optional cursor for pagination
   * @returns List of groups
   */
  async getGroups(e) {
    const n = await this.client.get("/v1/groups", {
      query: e ? { cursor: e } : void 0
    }), r = Array.isArray(n) ? n : n.data || [], o = n;
    return {
      data: r,
      nextCursor: o.next_cursor || o.nextCursor
    };
  }
  /**
   * Get a single group by its ULID.
   * GET /v1/groups/{groupUlid}
   *
   * @param groupUlid - The ULID of the group
   * @returns The group details
   */
  async getGroup(e) {
    const n = await this.client.get(`/v1/groups/${encodeURIComponent(e)}`);
    return this.unwrap(n);
  }
  /**
   * Create a new group.
   * POST /v1/group/add
   *
   * @param request - Group creation request
   * @returns The created group (with isJoined: true since creator is auto-joined)
   */
  async createGroup(e) {
    const n = await this.client.post("/v1/group/add", { body: e }), r = this.unwrap(n);
    return r.group || r;
  }
  /**
   * Join a group.
   * POST /v1/group/join
   *
   * @param groupId - The ULID or ID of the group to join
   * @returns Success response
   */
  async joinGroup(e) {
    await this.client.post("/v1/group/join", {
      body: { groupId: e }
    });
  }
  /**
   * Leave a group.
   * POST /v1/group/leave
   *
   * @param groupId - The ULID or ID of the group to leave
   * @returns Success response
   */
  async leaveGroup(e) {
    await this.client.post("/v1/group/leave", {
      body: { groupId: e }
    });
  }
  /**
   * Get posts in a group feed.
   * POST /v1/feeds/group
   *
   * @param groupUlid - The ULID of the group
   * @param options - Optional parameters (limit, cursor)
   * @returns List of group posts with pagination
   */
  async getGroupPosts(e, n) {
    const r = new URLSearchParams();
    n?.limit && r.set("limit", String(n.limit)), n?.cursor && r.set("cursor", n.cursor);
    const o = r.toString(), a = `/v1/feeds/group${o ? `?${o}` : ""}`, l = await this.client.post(a, {
      body: { groupId: e }
    }), d = l, p = d.data ?? (Array.isArray(l) ? l : []);
    return {
      data: ze(p),
      nextCursor: d.nextCursor ?? d.next_cursor
    };
  }
  /**
   * Toggle favorite status of a group.
   * POST /v1/group/{groupUlid}/favorite
   *
   * @param groupUlid - The ULID of the group
   * @returns Updated favorite status
   */
  async toggleGroupFavorite(e) {
    const n = await this.client.post(`/v1/group/${encodeURIComponent(e)}/favorite`);
    return this.unwrap(n);
  }
  // Group Management Methods
  /**
   * Get members of a group.
   * GET /v1/group/{groupUlid}/members
   *
   * @param groupUlid - The ULID of the group
   * @returns List of group members
   */
  async getGroupMembers(e) {
    const n = await this.client.get(`/v1/group/${encodeURIComponent(e)}/members`);
    return this.unwrap(n) || [];
  }
  /**
   * Get moderators of a group.
   * GET /v1/group/{groupUlid}/moderators
   *
   * @param groupUlid - The ULID of the group
   * @returns List of group moderators
   */
  async getGroupModerators(e) {
    const n = await this.client.get(`/v1/group/${encodeURIComponent(e)}/moderators`);
    return this.unwrap(n) || [];
  }
  /**
   * Get banned users from a group.
   * POST /v1/group/banned-users
   *
   * @param groupUlid - The ULID of the group
   * @returns List of banned users
   */
  async getGroupBannedUsers(e) {
    const n = await this.client.post("/v1/group/banned-users", { body: { groupId: e } });
    return this.unwrap(n) || [];
  }
  /**
   * Get moderation log for a group.
   * GET /v1/group/{groupUlid}/moderation-log
   *
   * @param groupUlid - The ULID of the group
   * @returns List of moderation log entries
   */
  async getGroupModerationLog(e) {
    const n = await this.client.get(`/v1/group/${encodeURIComponent(e)}/moderation-log`);
    return this.unwrap(n) || [];
  }
  /**
   * Invite a user to a group.
   * POST /v1/group/{groupUlid}/invite
   *
   * @param groupUlid - The ULID of the group
   * @param userUlid - The ULID of the user to invite
   */
  async inviteToGroup(e, n) {
    await this.client.post(`/v1/group/${encodeURIComponent(e)}/invite`, {
      body: { userId: n }
    });
  }
  /**
   * Promote a member to moderator.
   * POST /v1/group/{groupUlid}/moderators
   *
   * @param groupUlid - The ULID of the group
   * @param userUlid - The ULID of the user to promote
   */
  async promoteToModerator(e, n) {
    await this.client.post(`/v1/group/${encodeURIComponent(e)}/moderators`, {
      body: { userId: n }
    });
  }
  /**
   * Demote a moderator to regular member.
   * DELETE /v1/group/{groupUlid}/moderators/{userUlid}
   *
   * @param groupUlid - The ULID of the group
   * @param userUlid - The ULID of the moderator to demote
   */
  async demoteFromModerator(e, n) {
    await this.client.delete(`/v1/group/${encodeURIComponent(e)}/moderators/${encodeURIComponent(n)}`);
  }
  /**
   * Mute a member in a group.
   * POST /v1/group/{groupUlid}/mute
   *
   * @param groupUlid - The ULID of the group
   * @param userUlid - The ULID of the user to mute
   */
  async muteGroupMember(e, n) {
    await this.client.post(`/v1/group/${encodeURIComponent(e)}/mute`, {
      body: { userId: n }
    });
  }
  /**
   * Unmute a member in a group.
   * POST /v1/group/{groupUlid}/mute with _method DELETE
   *
   * @param groupUlid - The ULID of the group
   * @param userUlid - The ULID of the user to unmute
   */
  async unmuteGroupMember(e, n) {
    await this.client.post(`/v1/group/${encodeURIComponent(e)}/mute`, {
      body: { _method: "DELETE", userId: n }
    });
  }
  /**
   * Ban a member from a group.
   * POST /v1/group/ban
   *
   * @param groupUlid - The ULID of the group
   * @param userUlid - The ULID of the user to ban
   */
  async banGroupMember(e, n) {
    await this.client.post("/v1/group/ban", {
      body: { userId: n, groupId: e }
    });
  }
  /**
   * Unban a user from a group.
   * POST /v1/group/unban
   *
   * @param groupUlid - The ULID of the group
   * @param userUlid - The ULID of the user to unban
   */
  async unbanGroupMember(e, n) {
    await this.client.post("/v1/group/unban", {
      body: { userId: n, groupId: e }
    });
  }
  /**
   * Update group settings (avatar, background, etc.).
   * PATCH /v1/group/edit
   *
   * @param request - The update request with group ID and fields to update
   */
  async updateGroup(e) {
    await this.client.patch("/v1/group/edit", {
      body: e
    });
  }
  // ─────────────────────────────────────────────────────────────────────────────
  // Referral Tracking
  // ─────────────────────────────────────────────────────────────────────────────
  /**
   * Record a referral visit for analytics tracking.
   * POST /v1/referral-visits
   *
   * @param params - Referral visit details
   * @param params.referralCode - The referral code from the URL
   * @param params.destinationType - Type of destination (profile, playlist, song, content)
   * @param params.destinationId - ID of the destination resource
   * @param params.landingPath - The path the user landed on
   *
   * @example
   * ```typescript
   * await sdk.recordReferralVisit({
   *   referralCode: 'ABC123',
   *   destinationType: 'profile',
   *   destinationId: 'username',
   *   landingPath: '/profile/username'
   * });
   * ```
   *
   * @category Analytics
   */
  async recordReferralVisit(e) {
    await this.client.post("/v1/referral-visits", {
      body: {
        referral_code: e.referralCode,
        destination_type: e.destinationType,
        destination_id: e.destinationId,
        landing_path: e.landingPath
      }
    });
  }
}
vr.SDK_VERSION = "2.0.0";
vr.DEFAULT_FEED_LIMIT = 50;
const _g = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, o] of e)
    n[r] = o;
  return n;
}, Eg = {
  __name: "BlogAdmin",
  setup(t, { expose: e }) {
    e();
    const n = () => window.ccSdk, r = () => window.ccTokenProvider, o = /* @__PURE__ */ rt([]), a = /* @__PURE__ */ rt([]), l = /* @__PURE__ */ rt(!1), d = /* @__PURE__ */ rt(null), p = /* @__PURE__ */ rt(!1), _ = /* @__PURE__ */ rt(null), v = /* @__PURE__ */ rt(!0), w = /* @__PURE__ */ rt(!1), D = /* @__PURE__ */ rt(null), O = /* @__PURE__ */ rt({
      title: "",
      content: { type: "doc", content: [{ type: "paragraph", content: [] }] },
      excerpt: "",
      status: "draft",
      categoryId: null,
      isFeatured: !1
    }), Q = /* @__PURE__ */ rt("email"), H = /* @__PURE__ */ rt({
      email: ""
    }), le = /* @__PURE__ */ rt(["", "", "", "", "", ""]), pe = /* @__PURE__ */ rt([]), oe = /* @__PURE__ */ rt(null), fe = /* @__PURE__ */ rt(!1);
    Do(async () => {
      try {
        await xe(), p.value && await me();
      } finally {
        v.value = !1;
      }
    });
    async function xe() {
      const se = r().getTokens();
      if (console.log("[Blog Admin] checkAuth - tokens:", {
        hasAccessToken: !!se?.accessToken,
        hasRefreshToken: !!se?.refreshToken
      }), se?.accessToken)
        try {
          _.value = await n().getCurrentUser(), p.value = !0, console.log(
            "[Blog Admin] Auth check passed, user:",
            _.value?.name
          );
        } catch (Ie) {
          console.log("[Blog Admin] Auth check failed:", Ie.message), p.value = !1, r().clearTokens();
        }
    }
    const ne = Vr(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(H.value.email)), Se = Vr(() => le.value.every((se) => se.length === 1)), Xe = Vr(() => le.value.join(""));
    async function He() {
      if (!ne.value) {
        oe.value = "Please enter a valid email address";
        return;
      }
      fe.value = !0, oe.value = null;
      try {
        await n().requestAuthCode(H.value.email), Q.value = "code", await Hr(), pe.value[0]?.focus();
      } catch (se) {
        oe.value = se.message || "Failed to send auth code";
      } finally {
        fe.value = !1;
      }
    }
    async function Re() {
      if (!Se.value) {
        oe.value = "Please enter the 6-digit code";
        return;
      }
      fe.value = !0, oe.value = null;
      try {
        await n().loginWithMagicLink(
          H.value.email,
          Xe.value
        ) && (await xe(), await me());
      } catch (se) {
        oe.value = se.message || "Invalid code";
      } finally {
        fe.value = !1;
      }
    }
    function Ue(se, Ie) {
      se && (pe.value[Ie] = se);
    }
    function Ct(se, Ie) {
      const Ve = Ie.target.value.replace(/[^0-9]/g, "");
      le.value[se] = Ve, Ve && se < 5 && pe.value[se + 1]?.focus(), Se.value && ne.value && Re();
    }
    function it(se, Ie) {
      Ie.key === "Backspace" && !le.value[se] && se > 0 && pe.value[se - 1]?.focus(), Ie.key === "ArrowLeft" && se > 0 && (Ie.preventDefault(), pe.value[se - 1]?.focus()), Ie.key === "ArrowRight" && se < 5 && (Ie.preventDefault(), pe.value[se + 1]?.focus());
    }
    function dn(se) {
      se.preventDefault();
      const Ve = (se.clipboardData?.getData("text") || "").replace(/[^0-9]/g, "").slice(0, 6);
      if (Ve.length > 0) {
        for (let Zt = 0; Zt < 6; Zt++)
          le.value[Zt] = Ve[Zt] || "";
        const Xt = Math.min(Ve.length - 1, 5);
        pe.value[Xt]?.focus(), Se.value && ne.value && Re();
      }
    }
    function Tn() {
      Q.value = "email", le.value = ["", "", "", "", "", ""], oe.value = null;
    }
    async function Dt() {
      Q.value = "code", oe.value = null, await Hr(), pe.value[0]?.focus();
    }
    function We() {
      r().clearTokens(), p.value = !1, _.value = null, o.value = [];
    }
    async function me() {
      l.value = !0, d.value = null;
      try {
        const [se, Ie] = await Promise.all([
          n().listBlogPosts({ status: void 0 }),
          // All posts for admin
          n().getBlogCategories()
        ]);
        o.value = se.data || [], a.value = Ie || [];
      } catch (se) {
        d.value = se.message || "Failed to load data";
      } finally {
        l.value = !1;
      }
    }
    function Ee() {
      D.value = null, O.value = {
        title: "",
        content: { type: "doc", content: [{ type: "paragraph", content: [] }] },
        excerpt: "",
        status: "draft",
        categoryId: null,
        isFeatured: !1
      }, w.value = !0;
    }
    function Ze(se) {
      D.value = se, O.value = {
        title: se.title,
        content: se.content || {
          type: "doc",
          content: [{ type: "paragraph", content: [] }]
        },
        excerpt: se.excerpt || "",
        status: se.status,
        categoryId: se.category?.id || null,
        isFeatured: se.isFeatured
      }, w.value = !0;
    }
    function gt() {
      w.value = !1, D.value = null;
    }
    async function It() {
      l.value = !0;
      try {
        D.value ? await n().updateBlogPost(
          D.value.ulid,
          O.value
        ) : await n().createBlogPost(O.value), gt(), await me();
      } catch (se) {
        d.value = se.message || "Failed to save post";
      } finally {
        l.value = !1;
      }
    }
    async function Vt(se) {
      if (confirm(`Delete "${se.title}"?`)) {
        l.value = !0;
        try {
          await n().deleteBlogPost(se.ulid), await me();
        } catch (Ie) {
          d.value = Ie.message || "Failed to delete post";
        } finally {
          l.value = !1;
        }
      }
    }
    async function yt(se) {
      l.value = !0;
      try {
        await n().publishBlogPost(se.ulid), await me();
      } catch (Ie) {
        d.value = Ie.message || "Failed to publish post";
      } finally {
        l.value = !1;
      }
    }
    const Xn = { getSdk: n, getTokenProvider: r, posts: o, categories: a, loading: l, error: d, isAuthenticated: p, currentUser: _, isCheckingAuth: v, showModal: w, editingPost: D, formData: O, loginStep: Q, loginForm: H, verificationCode: le, codeInputRefs: pe, loginError: oe, loginLoading: fe, checkAuth: xe, isValidEmail: ne, isCodeComplete: Se, fullCode: Xe, handleSendAuthCode: He, handleVerifyCode: Re, setCodeInputRef: Ue, handleCodeInput: Ct, handleCodeKeydown: it, handleCodePaste: dn, resetToEmail: Tn, goToCodeStep: Dt, handleLogout: We, loadData: me, openCreateModal: Ee, openEditModal: Ze, closeModal: gt, savePost: It, deletePost: Vt, publishPost: yt, statusColors: {
      draft: "bg-slate-700 text-slate-300",
      scheduled: "bg-yellow-900/50 text-yellow-300",
      published: "bg-green-900/50 text-green-300",
      archived: "bg-red-900/50 text-red-300"
    }, ref: rt, computed: Vr, onMounted: Do, nextTick: Hr };
    return Object.defineProperty(Xn, "__isScriptSetup", { enumerable: !1, value: !0 }), Xn;
  }
}, xg = {
  key: 0,
  class: "flex min-h-[400px] items-center justify-center"
}, Sg = { class: "mx-auto max-w-md p-8" }, Pg = {
  key: 0,
  class: "text-sm text-red-400"
}, Cg = ["disabled"], Dg = ["disabled"], kg = { class: "space-y-4" }, Ig = { class: "rounded-md border border-green-800 bg-green-900/30 p-3 text-sm text-green-300" }, Og = { class: "mb-4 flex justify-center gap-2" }, Ag = ["onUpdate:modelValue", "disabled", "onInput", "onKeydown"], Ng = {
  key: 0,
  class: "mb-4 text-sm text-red-400"
}, Tg = ["disabled"], Rg = { class: "p-6" }, Ug = { class: "mb-6 flex items-center justify-between" }, Bg = { class: "text-sm text-slate-400" }, Mg = {
  key: 0,
  class: "mb-4 rounded-md border border-red-800 bg-red-900/30 p-4 text-sm text-red-300"
}, Fg = {
  key: 1,
  class: "py-12 text-center"
}, $g = { class: "overflow-hidden rounded-lg border border-slate-800 bg-slate-900 shadow" }, Vg = { class: "min-w-full divide-y divide-slate-800" }, Kg = { class: "divide-y divide-slate-800 bg-slate-900" }, Lg = { class: "whitespace-nowrap px-6 py-4" }, jg = { class: "font-medium text-slate-100" }, Hg = { class: "text-sm text-slate-500" }, zg = { class: "whitespace-nowrap px-6 py-4" }, Gg = {
  key: 0,
  class: "ml-1 inline-flex rounded-full bg-purple-900/50 px-2 text-xs leading-5 font-semibold text-purple-300"
}, qg = { class: "whitespace-nowrap px-6 py-4 text-slate-400" }, Wg = { class: "whitespace-nowrap px-6 py-4 text-slate-400" }, Qg = { class: "whitespace-nowrap px-6 py-4 text-right text-sm font-medium" }, Yg = ["onClick"], Jg = ["onClick"], Xg = ["onClick"], Zg = { key: 0 }, ey = {
  key: 3,
  class: "fixed inset-0 z-50 flex items-center justify-center bg-black/70"
}, ty = { class: "w-full max-w-2xl rounded-lg border border-slate-700 bg-slate-900 p-6 shadow-xl" }, ny = { class: "mb-4 text-xl font-bold text-slate-100" }, ry = ["value"], sy = { class: "grid grid-cols-2 gap-4" }, iy = ["value"], oy = { class: "flex items-center" }, ay = { class: "flex justify-end gap-4 pt-4" }, cy = ["disabled"];
function uy(t, e, n, r, o, a) {
  return $e(), je(
    nt,
    null,
    [
      st(" Initial Loading State "),
      r.isCheckingAuth ? ($e(), je("div", xg, [...e[7] || (e[7] = [
        q(
          "div",
          { class: "text-center" },
          [
            q("div", { class: "inline-block h-10 w-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" }),
            q("p", { class: "mt-4 text-slate-400" }, "Loading...")
          ],
          -1
          /* CACHED */
        )
      ])])) : r.isAuthenticated ? ($e(), je(
        nt,
        { key: 2 },
        [
          st(" Admin Dashboard "),
          q("div", Rg, [
            q("div", Ug, [
              q("div", null, [
                e[13] || (e[13] = q(
                  "h1",
                  { class: "text-2xl font-bold text-slate-100" },
                  "Blog Admin",
                  -1
                  /* CACHED */
                )),
                q(
                  "p",
                  Bg,
                  " Logged in as " + lt(r.currentUser?.name || r.currentUser?.email),
                  1
                  /* TEXT */
                )
              ]),
              q("div", { class: "flex gap-4" }, [
                q("button", {
                  onClick: r.openCreateModal,
                  class: "rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
                }, " New Post "),
                q("button", {
                  onClick: r.handleLogout,
                  class: "rounded-md bg-slate-700 px-4 py-2 text-slate-200 hover:bg-slate-600"
                }, " Logout ")
              ])
            ]),
            st(" Error message "),
            r.error ? ($e(), je(
              "div",
              Mg,
              lt(r.error),
              1
              /* TEXT */
            )) : st("v-if", !0),
            st(" Loading state "),
            r.loading && !r.posts.length ? ($e(), je("div", Fg, [...e[14] || (e[14] = [
              q(
                "div",
                { class: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" },
                null,
                -1
                /* CACHED */
              ),
              q(
                "p",
                { class: "mt-2 text-slate-400" },
                "Loading posts...",
                -1
                /* CACHED */
              )
            ])])) : ($e(), je(
              nt,
              { key: 2 },
              [
                st(" Posts table "),
                q("div", $g, [
                  q("table", Vg, [
                    e[16] || (e[16] = q(
                      "thead",
                      { class: "bg-slate-800/50" },
                      [
                        q("tr", null, [
                          q("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-400 uppercase" }, " Title "),
                          q("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-400 uppercase" }, " Status "),
                          q("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-400 uppercase" }, " Category "),
                          q("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-400 uppercase" }, " Published "),
                          q("th", { class: "px-6 py-3 text-right text-xs font-medium tracking-wider text-slate-400 uppercase" }, " Actions ")
                        ])
                      ],
                      -1
                      /* CACHED */
                    )),
                    q("tbody", Kg, [
                      ($e(!0), je(
                        nt,
                        null,
                        fo(r.posts, (l) => ($e(), je("tr", {
                          key: l.ulid,
                          class: "hover:bg-slate-800/50"
                        }, [
                          q("td", Lg, [
                            q(
                              "div",
                              jg,
                              lt(l.title),
                              1
                              /* TEXT */
                            ),
                            q(
                              "div",
                              Hg,
                              lt(l.slug),
                              1
                              /* TEXT */
                            )
                          ]),
                          q("td", zg, [
                            q(
                              "span",
                              {
                                class: hi([
                                  r.statusColors[l.status],
                                  "inline-flex rounded-full px-2 text-xs leading-5 font-semibold"
                                ])
                              },
                              lt(l.status),
                              3
                              /* TEXT, CLASS */
                            ),
                            l.isFeatured ? ($e(), je("span", Gg, " Featured ")) : st("v-if", !0)
                          ]),
                          q(
                            "td",
                            qg,
                            lt(l.category?.name || "-"),
                            1
                            /* TEXT */
                          ),
                          q(
                            "td",
                            Wg,
                            lt(l.publishedAt ? new Date(
                              l.publishedAt
                            ).toLocaleDateString() : "-"),
                            1
                            /* TEXT */
                          ),
                          q("td", Qg, [
                            q("button", {
                              onClick: (d) => r.openEditModal(l),
                              class: "text-indigo-400 hover:text-indigo-300"
                            }, " Edit ", 8, Yg),
                            l.status === "draft" ? ($e(), je("button", {
                              key: 0,
                              onClick: (d) => r.publishPost(l),
                              class: "ml-4 text-green-400 hover:text-green-300"
                            }, " Publish ", 8, Jg)) : st("v-if", !0),
                            q("button", {
                              onClick: (d) => r.deletePost(l),
                              class: "ml-4 text-red-400 hover:text-red-300"
                            }, " Delete ", 8, Xg)
                          ])
                        ]))),
                        128
                        /* KEYED_FRAGMENT */
                      )),
                      r.posts.length ? st("v-if", !0) : ($e(), je("tr", Zg, [
                        q("td", {
                          colspan: "5",
                          class: "px-6 py-12 text-center"
                        }, [
                          e[15] || (e[15] = q(
                            "p",
                            { class: "text-slate-400" },
                            "No blog posts yet.",
                            -1
                            /* CACHED */
                          )),
                          q("button", {
                            onClick: r.openCreateModal,
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
            st(" Edit/Create Modal "),
            r.showModal ? ($e(), je("div", ey, [
              q("div", ty, [
                q(
                  "h2",
                  ny,
                  lt(r.editingPost ? "Edit Post" : "Create Post"),
                  1
                  /* TEXT */
                ),
                q(
                  "form",
                  {
                    onSubmit: mo(r.savePost, ["prevent"]),
                    class: "space-y-4"
                  },
                  [
                    q("div", null, [
                      e[17] || (e[17] = q(
                        "label",
                        { class: "block text-sm font-medium text-slate-300" },
                        "Title",
                        -1
                        /* CACHED */
                      )),
                      Ln(q(
                        "input",
                        {
                          "onUpdate:modelValue": e[1] || (e[1] = (l) => r.formData.title = l),
                          type: "text",
                          required: "",
                          class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [Vs, r.formData.title]
                      ])
                    ]),
                    q("div", null, [
                      e[18] || (e[18] = q(
                        "label",
                        { class: "block text-sm font-medium text-slate-300" },
                        "Excerpt",
                        -1
                        /* CACHED */
                      )),
                      Ln(q(
                        "textarea",
                        {
                          "onUpdate:modelValue": e[2] || (e[2] = (l) => r.formData.excerpt = l),
                          rows: "2",
                          class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [Vs, r.formData.excerpt]
                      ])
                    ]),
                    q("div", null, [
                      e[19] || (e[19] = q(
                        "label",
                        { class: "block text-sm font-medium text-slate-300" },
                        "Content (JSON)",
                        -1
                        /* CACHED */
                      )),
                      q("textarea", {
                        value: JSON.stringify(r.formData.content, null, 2),
                        onInput: e[3] || (e[3] = (l) => {
                          try {
                            r.formData.content = JSON.parse(
                              l.target.value
                            );
                          } catch {
                          }
                        }),
                        rows: "6",
                        class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 font-mono text-sm text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                      }, null, 40, ry),
                      e[20] || (e[20] = q(
                        "p",
                        { class: "mt-1 text-xs text-slate-500" },
                        " TipTap/ProseMirror JSON format ",
                        -1
                        /* CACHED */
                      ))
                    ]),
                    q("div", sy, [
                      q("div", null, [
                        e[22] || (e[22] = q(
                          "label",
                          { class: "block text-sm font-medium text-slate-300" },
                          "Category",
                          -1
                          /* CACHED */
                        )),
                        Ln(q(
                          "select",
                          {
                            "onUpdate:modelValue": e[4] || (e[4] = (l) => r.formData.categoryId = l),
                            class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                          },
                          [
                            e[21] || (e[21] = q(
                              "option",
                              { value: null },
                              "No category",
                              -1
                              /* CACHED */
                            )),
                            ($e(!0), je(
                              nt,
                              null,
                              fo(r.categories, (l) => ($e(), je("option", {
                                key: l.id,
                                value: l.id
                              }, lt(l.name), 9, iy))),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ],
                          512
                          /* NEED_PATCH */
                        ), [
                          [Tc, r.formData.categoryId]
                        ])
                      ]),
                      q("div", null, [
                        e[24] || (e[24] = q(
                          "label",
                          { class: "block text-sm font-medium text-slate-300" },
                          "Status",
                          -1
                          /* CACHED */
                        )),
                        Ln(q(
                          "select",
                          {
                            "onUpdate:modelValue": e[5] || (e[5] = (l) => r.formData.status = l),
                            class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                          },
                          [...e[23] || (e[23] = [
                            q(
                              "option",
                              { value: "draft" },
                              "Draft",
                              -1
                              /* CACHED */
                            ),
                            q(
                              "option",
                              { value: "published" },
                              "Published",
                              -1
                              /* CACHED */
                            ),
                            q(
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
                          [Tc, r.formData.status]
                        ])
                      ])
                    ]),
                    q("div", oy, [
                      Ln(q(
                        "input",
                        {
                          "onUpdate:modelValue": e[6] || (e[6] = (l) => r.formData.isFeatured = l),
                          type: "checkbox",
                          id: "isFeatured",
                          class: "h-4 w-4 rounded border-slate-600 bg-slate-800 text-indigo-600 focus:ring-indigo-500"
                        },
                        null,
                        512
                        /* NEED_PATCH */
                      ), [
                        [Sp, r.formData.isFeatured]
                      ]),
                      e[25] || (e[25] = q(
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
                    q("div", ay, [
                      q("button", {
                        type: "button",
                        onClick: r.closeModal,
                        class: "rounded-md bg-slate-700 px-4 py-2 text-slate-200 hover:bg-slate-600"
                      }, " Cancel "),
                      q("button", {
                        type: "submit",
                        disabled: r.loading,
                        class: "rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 disabled:opacity-50"
                      }, lt(r.loading ? "Saving..." : "Save"), 9, cy)
                    ])
                  ],
                  32
                  /* NEED_HYDRATION */
                )
              ])
            ])) : st("v-if", !0)
          ])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : ($e(), je(
        nt,
        { key: 1 },
        [
          st(" Login Form - Magic Link Flow "),
          q("div", Sg, [
            e[11] || (e[11] = q(
              "h2",
              { class: "mb-2 text-2xl font-bold text-slate-100" },
              "Blog Admin",
              -1
              /* CACHED */
            )),
            e[12] || (e[12] = q(
              "p",
              { class: "mb-6 text-sm text-slate-400" },
              " Sign in with your CC Platform account ",
              -1
              /* CACHED */
            )),
            st(" Step 1: Email Input "),
            r.loginStep === "email" ? ($e(), je(
              "form",
              {
                key: 0,
                onSubmit: mo(r.handleSendAuthCode, ["prevent"]),
                class: "space-y-4"
              },
              [
                q("div", null, [
                  e[8] || (e[8] = q(
                    "label",
                    { class: "block text-sm font-medium text-slate-300" },
                    "Email address",
                    -1
                    /* CACHED */
                  )),
                  Ln(q(
                    "input",
                    {
                      "onUpdate:modelValue": e[0] || (e[0] = (l) => r.loginForm.email = l),
                      type: "email",
                      required: "",
                      placeholder: "you@example.com",
                      class: "mt-1 block w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                    },
                    null,
                    512
                    /* NEED_PATCH */
                  ), [
                    [Vs, r.loginForm.email]
                  ])
                ]),
                r.loginError ? ($e(), je(
                  "div",
                  Pg,
                  lt(r.loginError),
                  1
                  /* TEXT */
                )) : st("v-if", !0),
                q("button", {
                  type: "submit",
                  disabled: r.loginLoading || !r.isValidEmail,
                  class: "w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 disabled:opacity-50"
                }, lt(r.loginLoading ? "Sending..." : "Send Auth Code"), 9, Cg),
                q("button", {
                  type: "button",
                  onClick: r.goToCodeStep,
                  disabled: !r.isValidEmail,
                  class: "w-full text-sm text-slate-400 hover:text-slate-200 disabled:opacity-50"
                }, " I already have a code ", 8, Dg)
              ],
              32
              /* NEED_HYDRATION */
            )) : r.loginStep === "code" ? ($e(), je(
              nt,
              { key: 1 },
              [
                st(" Step 2: Code Verification "),
                q("div", kg, [
                  q("div", Ig, [
                    e[9] || (e[9] = Yu(
                      " We sent a code to ",
                      -1
                      /* CACHED */
                    )),
                    q(
                      "strong",
                      null,
                      lt(r.loginForm.email),
                      1
                      /* TEXT */
                    )
                  ]),
                  q(
                    "form",
                    {
                      onSubmit: mo(r.handleVerifyCode, ["prevent"])
                    },
                    [
                      e[10] || (e[10] = q(
                        "label",
                        { class: "mb-2 block text-sm font-medium text-slate-300" },
                        "Enter 6-digit code",
                        -1
                        /* CACHED */
                      )),
                      q("div", Og, [
                        ($e(!0), je(
                          nt,
                          null,
                          fo(r.verificationCode, (l, d) => Ln(($e(), je("input", {
                            key: d,
                            ref_for: !0,
                            ref: (p) => r.setCodeInputRef(p, d),
                            "onUpdate:modelValue": (p) => r.verificationCode[d] = p,
                            type: "text",
                            inputmode: "numeric",
                            pattern: "[0-9]*",
                            maxlength: "1",
                            disabled: r.loginLoading,
                            class: "h-12 w-10 rounded-md border border-slate-700 bg-slate-900 text-center text-xl font-semibold text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none disabled:bg-slate-800",
                            onInput: (p) => r.handleCodeInput(d, p),
                            onKeydown: (p) => r.handleCodeKeydown(d, p),
                            onPaste: r.handleCodePaste
                          }, null, 40, Ag)), [
                            [Vs, r.verificationCode[d]]
                          ])),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      r.loginError ? ($e(), je(
                        "div",
                        Ng,
                        lt(r.loginError),
                        1
                        /* TEXT */
                      )) : st("v-if", !0),
                      q("button", {
                        type: "submit",
                        disabled: r.loginLoading || !r.isCodeComplete,
                        class: "w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 disabled:opacity-50"
                      }, lt(r.loginLoading ? "Verifying..." : "Verify Code"), 9, Tg)
                    ],
                    32
                    /* NEED_HYDRATION */
                  ),
                  q("button", {
                    type: "button",
                    onClick: r.resetToEmail,
                    class: "w-full text-sm text-slate-400 hover:text-slate-200"
                  }, " ← Use different email ")
                ])
              ],
              2112
              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
            )) : st("v-if", !0)
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
const ly = /* @__PURE__ */ _g(Eg, [["render", uy], ["__file", "/home/ubuntu/laravel-cc-blog/resources/js/components/blog/BlogAdmin.vue"]]), fy = window.location.hostname.includes("localtest.me") ? "https://cc.localtest.me" : "https://app.closedcircuitconsulting.com", la = document.querySelector('meta[name="cc-api-url"]')?.content || void 0 || fy, ts = new yg(
  localStorage,
  "cc_blog_admin_tokens"
);
async function dy() {
  const t = ts.getTokens();
  if (!t?.refreshToken)
    throw new Error("No refresh token available");
  const e = await fetch(`${la}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest"
    },
    body: JSON.stringify({ refresh_token: t.refreshToken })
  });
  if (!e.ok)
    throw new Error(`Token refresh failed: ${e.status}`);
  const n = await e.json(), r = n.access_token || n.accessToken || n.data?.access_token, o = n.refresh_token || n.refreshToken || n.data?.refresh_token;
  if (!r)
    throw new Error("No access token in refresh response");
  const a = {
    accessToken: r,
    refreshToken: o || t.refreshToken
  };
  return ts.setTokens(a), console.log("[Blog Admin] Token refreshed successfully"), a;
}
const fa = new vr({
  baseUrl: la,
  tokenProvider: ts,
  dbName: "CcBlogAdminCache",
  onRefreshTokens: dy,
  onUnauthorized: () => {
    ts.clearTokens(), window.dispatchEvent(new CustomEvent("cc:unauthorized"));
  }
});
window.ccSdk = fa;
window.ccTokenProvider = ts;
console.log("[Blog Admin] SDK version:", vr.SDK_VERSION);
console.log(
  "[Blog Admin] SDK has requestAuthCode:",
  typeof fa.requestAuthCode
);
console.log(
  "[Blog Admin] SDK methods:",
  Object.getOwnPropertyNames(Object.getPrototypeOf(fa)).filter(
    (t) => t.startsWith("request")
  )
);
const Lc = document.getElementById("blog-admin-app");
Lc && (Ip(ly).mount(Lc), console.log("[Blog Admin] Mounted with API:", la));
