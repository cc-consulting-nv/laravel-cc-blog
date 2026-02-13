function $(r) {
  this.content = r;
}
$.prototype = {
  constructor: $,
  find: function(r) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === r) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(r) {
    var e = this.find(r);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(r, e, t) {
    var n = t && t != r ? this.remove(t) : this, i = n.find(r), s = n.content.slice();
    return i == -1 ? s.push(t || r, e) : (s[i + 1] = e, t && (s[i] = t)), new $(s);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(r) {
    var e = this.find(r);
    if (e == -1) return this;
    var t = this.content.slice();
    return t.splice(e, 2), new $(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(r, e) {
    return new $([r, e].concat(this.remove(r).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(r, e) {
    var t = this.remove(r).content.slice();
    return t.push(r, e), new $(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(r, e, t) {
    var n = this.remove(e), i = n.content.slice(), s = n.find(r);
    return i.splice(s == -1 ? i.length : s, 0, e, t), new $(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(r) {
    for (var e = 0; e < this.content.length; e += 2)
      r(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(r) {
    return r = $.from(r), r.size ? new $(r.content.concat(this.subtract(r).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(r) {
    return r = $.from(r), r.size ? new $(this.subtract(r).content.concat(r.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(r) {
    var e = this;
    r = $.from(r);
    for (var t = 0; t < r.content.length; t += 2)
      e = e.remove(r.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var r = {};
    return this.forEach(function(e, t) {
      r[e] = t;
    }), r;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
$.from = function(r) {
  if (r instanceof $) return r;
  var e = [];
  if (r) for (var t in r) e.push(t, r[t]);
  return new $(e);
};
function kn(r, e, t) {
  for (let n = 0; ; n++) {
    if (n == r.childCount || n == e.childCount)
      return r.childCount == e.childCount ? null : t;
    let i = r.child(n), s = e.child(n);
    if (i == s) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(s))
      return t;
    if (i.isText && i.text != s.text) {
      for (let o = 0; i.text[o] == s.text[o]; o++)
        t++;
      return t;
    }
    if (i.content.size || s.content.size) {
      let o = kn(i.content, s.content, t + 1);
      if (o != null)
        return o;
    }
    t += i.nodeSize;
  }
}
function xn(r, e, t, n) {
  for (let i = r.childCount, s = e.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: t, b: n };
    let o = r.child(--i), l = e.child(--s), a = o.nodeSize;
    if (o == l) {
      t -= a, n -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: t, b: n };
    if (o.isText && o.text != l.text) {
      let c = 0, u = Math.min(o.text.length, l.text.length);
      for (; c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, n--;
      return { a: t, b: n };
    }
    if (o.content.size || l.content.size) {
      let c = xn(o.content, l.content, t - 1, n - 1);
      if (c)
        return c;
    }
    t -= a, n -= a;
  }
}
class k {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let n = 0; n < e.length; n++)
        this.size += e[n].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, n, i = 0, s) {
    for (let o = 0, l = 0; l < t; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > e && n(a, i + l, s || null, o) !== !1 && a.content.size) {
        let u = l + 1;
        a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), n, i + u);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, n, i) {
    let s = "", o = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && n && (o ? o = !1 : s += n), s += c;
    }, 0), s;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, n = e.firstChild, i = this.content.slice(), s = 0;
    for (t.isText && t.sameMarkup(n) && (i[i.length - 1] = t.withText(t.text + n.text), s = 1); s < e.content.length; s++)
      i.push(e.content[s]);
    return new k(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let n = [], i = 0;
    if (t > e)
      for (let s = 0, o = 0; o < t; s++) {
        let l = this.content[s], a = o + l.nodeSize;
        a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), n.push(l), i += l.nodeSize), o = a;
      }
    return new k(n, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? k.empty : e == 0 && t == this.content.length ? this : new k(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let n = this.content[e];
    if (n == t)
      return this;
    let i = this.content.slice(), s = this.size + t.nodeSize - n.nodeSize;
    return i[e] = t, new k(i, s);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new k([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new k(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, n = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, n, t), n += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return kn(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, n = e.size) {
    return xn(this, e, t, n);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return ze(0, e);
    if (e == this.size)
      return ze(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let t = 0, n = 0; ; t++) {
      let i = this.child(t), s = n + i.nodeSize;
      if (s >= e)
        return s == e ? ze(t + 1, s) : ze(t, n);
      n = s;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return k.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new k(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return k.empty;
    let t, n = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      n += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s);
    }
    return new k(t || e, n);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return k.empty;
    if (e instanceof k)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new k([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
k.empty = new k([], 0);
const rt = { index: 0, offset: 0 };
function ze(r, e) {
  return rt.index = r, rt.offset = e, rt;
}
function Le(r, e) {
  if (r === e)
    return !0;
  if (!(r && typeof r == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(r);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (r.length != e.length)
      return !1;
    for (let n = 0; n < r.length; n++)
      if (!Le(r[n], e[n]))
        return !1;
  } else {
    for (let n in r)
      if (!(n in e) || !Le(r[n], e[n]))
        return !1;
    for (let n in e)
      if (!(n in r))
        return !1;
  }
  return !0;
}
class M {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, n = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.eq(s))
        return e;
      if (this.type.excludes(s.type))
        t || (t = e.slice(0, i));
      else {
        if (s.type.excludes(this.type))
          return e;
        !n && s.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), n = !0), t && t.push(s);
      }
    }
    return t || (t = e.slice()), n || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Le(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let n = e.marks[t.type];
    if (!n)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    let i = n.create(t.attrs);
    return n.checkAttrs(i.attrs), i;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let n = 0; n < e.length; n++)
      if (!e[n].eq(t[n]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return M.none;
    if (e instanceof M)
      return [e];
    let t = e.slice();
    return t.sort((n, i) => n.type.rank - i.type.rank), t;
  }
}
M.none = [];
class _e extends Error {
}
class w {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, n) {
    this.content = e, this.openStart = t, this.openEnd = n;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let n = yn(this.content, e + this.openStart, t);
    return n && new w(n, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new w(wn(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return w.empty;
    let n = t.openStart || 0, i = t.openEnd || 0;
    if (typeof n != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new w(k.fromJSON(e, t.content), n, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let n = 0, i = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
      n++;
    for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new w(e, n, i);
  }
}
w.empty = new w(k.empty, 0, 0);
function wn(r, e, t) {
  let { index: n, offset: i } = r.findIndex(e), s = r.maybeChild(n), { index: o, offset: l } = r.findIndex(t);
  if (i == e || s.isText) {
    if (l != t && !r.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return r.cut(0, e).append(r.cut(t));
  }
  if (n != o)
    throw new RangeError("Removing non-flat range");
  return r.replaceChild(n, s.copy(wn(s.content, e - i - 1, t - i - 1)));
}
function yn(r, e, t, n) {
  let { index: i, offset: s } = r.findIndex(e), o = r.maybeChild(i);
  if (s == e || o.isText)
    return n && !n.canReplace(i, i, t) ? null : r.cut(0, e).append(t).append(r.cut(e));
  let l = yn(o.content, e - s - 1, t, o);
  return l && r.replaceChild(i, o.copy(l));
}
function Or(r, e, t) {
  if (t.openStart > r.depth)
    throw new _e("Inserted content deeper than insertion position");
  if (r.depth - t.openStart != e.depth - t.openEnd)
    throw new _e("Inconsistent open depths");
  return bn(r, e, t, 0);
}
function bn(r, e, t, n) {
  let i = r.index(n), s = r.node(n);
  if (i == e.index(n) && n < r.depth - t.openStart) {
    let o = bn(r, e, t, n + 1);
    return s.copy(s.content.replaceChild(i, o));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && r.depth == n && e.depth == n) {
      let o = r.parent, l = o.content;
      return oe(o, l.cut(0, r.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: o, end: l } = $r(t, r);
      return oe(s, vn(r, o, l, e, n));
    }
  else return oe(s, Je(r, e, n));
}
function Sn(r, e) {
  if (!e.type.compatibleContent(r.type))
    throw new _e("Cannot join " + e.type.name + " onto " + r.type.name);
}
function ft(r, e, t) {
  let n = r.node(t);
  return Sn(n, e.node(t)), n;
}
function se(r, e) {
  let t = e.length - 1;
  t >= 0 && r.isText && r.sameMarkup(e[t]) ? e[t] = r.withText(e[t].text + r.text) : e.push(r);
}
function Se(r, e, t, n) {
  let i = (e || r).node(t), s = 0, o = e ? e.index(t) : i.childCount;
  r && (s = r.index(t), r.depth > t ? s++ : r.textOffset && (se(r.nodeAfter, n), s++));
  for (let l = s; l < o; l++)
    se(i.child(l), n);
  e && e.depth == t && e.textOffset && se(e.nodeBefore, n);
}
function oe(r, e) {
  return r.type.checkContent(e), r.copy(e);
}
function vn(r, e, t, n, i) {
  let s = r.depth > i && ft(r, e, i + 1), o = n.depth > i && ft(t, n, i + 1), l = [];
  return Se(null, r, i, l), s && o && e.index(i) == t.index(i) ? (Sn(s, o), se(oe(s, vn(r, e, t, n, i + 1)), l)) : (s && se(oe(s, Je(r, e, i + 1)), l), Se(e, t, i, l), o && se(oe(o, Je(t, n, i + 1)), l)), Se(n, null, i, l), new k(l);
}
function Je(r, e, t) {
  let n = [];
  if (Se(null, r, t, n), r.depth > t) {
    let i = ft(r, e, t + 1);
    se(oe(i, Je(r, e, t + 1)), n);
  }
  return Se(e, null, t, n), new k(n);
}
function $r(r, e) {
  let t = e.depth - r.openStart, i = e.node(t).copy(r.content);
  for (let s = t - 1; s >= 0; s--)
    i = e.node(s).copy(k.from(i));
  return {
    start: i.resolveNoCache(r.openStart + t),
    end: i.resolveNoCache(i.content.size - r.openEnd - t)
  };
}
class Te {
  /**
  @internal
  */
  constructor(e, t, n) {
    this.pos = e, this.path = t, this.parentOffset = n, this.depth = t.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let n = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return n ? e.child(t).cut(n) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let n = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let s = 0; s < e; s++)
      i += n.child(s).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return M.none;
    if (this.textOffset)
      return e.child(t).marks;
    let n = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!n) {
      let l = n;
      n = i, i = l;
    }
    let s = n.marks;
    for (var o = 0; o < s.length; o++)
      s[o].type.spec.inclusive === !1 && (!i || !s[o].isInSet(i.marks)) && (s = s[o--].removeFromSet(s));
    return s;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let n = t.marks, i = e.parent.maybeChild(e.index());
    for (var s = 0; s < n.length; s++)
      n[s].type.spec.inclusive === !1 && (!i || !n[s].isInSet(i.marks)) && (n = n[s--].removeFromSet(n));
    return n;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let n = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); n >= 0; n--)
      if (e.pos <= this.end(n) && (!t || t(this.node(n))))
        return new qe(this, e, n);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let n = [], i = 0, s = t;
    for (let o = e; ; ) {
      let { index: l, offset: a } = o.content.findIndex(s), c = s - a;
      if (n.push(o, l, i + a), !c || (o = o.child(l), o.isText))
        break;
      s = c - 1, i += a + 1;
    }
    return new Te(t, n, s);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    let n = Wt.get(e);
    if (n)
      for (let s = 0; s < n.elts.length; s++) {
        let o = n.elts[s];
        if (o.pos == t)
          return o;
      }
    else
      Wt.set(e, n = new Br());
    let i = n.elts[n.i] = Te.resolve(e, t);
    return n.i = (n.i + 1) % Pr, i;
  }
}
class Br {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const Pr = 12, Wt = /* @__PURE__ */ new WeakMap();
class qe {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, n) {
    this.$from = e, this.$to = t, this.depth = n;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const Fr = /* @__PURE__ */ Object.create(null);
class Z {
  /**
  @internal
  */
  constructor(e, t, n, i = M.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = n || k.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, t, n, i = 0) {
    this.content.nodesBetween(e, t, n, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
  */
  textBetween(e, t, n, i) {
    return this.content.textBetween(e, t, n, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, t, n) {
    return this.type == e && Le(this.attrs, t || e.defaultAttrs || Fr) && M.sameSet(this.marks, n || M.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Z(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Z(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, n = !1) {
    if (e == t)
      return w.empty;
    let i = this.resolve(e), s = this.resolve(t), o = n ? 0 : i.sharedDepth(t), l = i.start(o), c = i.node(o).content.cut(i.pos - l, s.pos - l);
    return new w(c, i.depth - o, s.depth - o);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, n) {
    return Or(this.resolve(e), this.resolve(t), n);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: n, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(n), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: n } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: n };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: n } = this.content.findIndex(e);
    if (n < e)
      return { node: this.content.child(t), index: t, offset: n };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: n - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return Te.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return Te.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, n) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (s) => (n.isInSet(s.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Tn(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, n = k.empty, i = 0, s = n.childCount) {
    let o = this.contentMatchAt(e).matchFragment(n, i, s), l = o && o.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < s; a++)
      if (!this.type.allowsMarks(n.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, n, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let s = this.contentMatchAt(e).matchType(n), o = s && s.matchFragment(this.content, t);
    return o ? o.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = M.none;
    for (let t = 0; t < this.marks.length; t++) {
      let n = this.marks[t];
      n.type.checkAttrs(n.attrs), e = n.addToSet(e);
    }
    if (!M.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let n;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      n = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, n);
    }
    let i = k.fromJSON(e, t.content), s = e.nodeType(t.type).create(t.attrs, i, n);
    return s.type.checkAttrs(s.attrs), s;
  }
}
Z.prototype.text = void 0;
class je extends Z {
  /**
  @internal
  */
  constructor(e, t, n, i) {
    if (super(e, t, null, i), !n)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = n;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Tn(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new je(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new je(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function Tn(r, e) {
  for (let t = r.length - 1; t >= 0; t--)
    e = r[t].type.name + "(" + e + ")";
  return e;
}
class le {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, t) {
    let n = new Dr(e, t);
    if (n.next == null)
      return le.empty;
    let i = Cn(n);
    n.next && n.err("Unexpected trailing text");
    let s = Vr(Wr(i));
    return Zr(s, n), s;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, t = 0, n = e.childCount) {
    let i = this;
    for (let s = t; i && s < n; s++)
      i = i.matchType(e.child(s).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let n = 0; n < e.next.length; n++)
        if (this.next[t].type == e.next[n].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, t = !1, n = 0) {
    let i = [this];
    function s(o, l) {
      let a = o.matchFragment(e, n);
      if (a && (!t || a.validEnd))
        return k.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < o.next.length; c++) {
        let { type: u, next: f } = o.next[c];
        if (!(u.isText || u.hasRequiredAttrs()) && i.indexOf(f) == -1) {
          i.push(f);
          let h = s(f, l.concat(u));
          if (h)
            return h;
        }
      }
      return null;
    }
    return s(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let n = 0; n < this.wrapCache.length; n += 2)
      if (this.wrapCache[n] == e)
        return this.wrapCache[n + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), n = [{ match: this, type: null, via: null }];
    for (; n.length; ) {
      let i = n.shift(), s = i.match;
      if (s.matchType(e)) {
        let o = [];
        for (let l = i; l.type; l = l.via)
          o.push(l.type);
        return o.reverse();
      }
      for (let o = 0; o < s.next.length; o++) {
        let { type: l, next: a } = s.next[o];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (n.push({ match: l.contentMatch, type: l, via: i }), t[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function t(n) {
      e.push(n);
      for (let i = 0; i < n.next.length; i++)
        e.indexOf(n.next[i].next) == -1 && t(n.next[i].next);
    }
    return t(this), e.map((n, i) => {
      let s = i + (n.validEnd ? "*" : " ") + " ";
      for (let o = 0; o < n.next.length; o++)
        s += (o ? ", " : "") + n.next[o].type.name + "->" + e.indexOf(n.next[o].next);
      return s;
    }).join(`
`);
  }
}
le.empty = new le(!0);
class Dr {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function Cn(r) {
  let e = [];
  do
    e.push(Lr(r));
  while (r.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function Lr(r) {
  let e = [];
  do
    e.push(_r(r));
  while (r.next && r.next != ")" && r.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function _r(r) {
  let e = jr(r);
  for (; ; )
    if (r.eat("+"))
      e = { type: "plus", expr: e };
    else if (r.eat("*"))
      e = { type: "star", expr: e };
    else if (r.eat("?"))
      e = { type: "opt", expr: e };
    else if (r.eat("{"))
      e = Jr(r, e);
    else
      break;
  return e;
}
function Vt(r) {
  /\D/.test(r.next) && r.err("Expected number, got '" + r.next + "'");
  let e = Number(r.next);
  return r.pos++, e;
}
function Jr(r, e) {
  let t = Vt(r), n = t;
  return r.eat(",") && (r.next != "}" ? n = Vt(r) : n = -1), r.eat("}") || r.err("Unclosed braced range"), { type: "range", min: t, max: n, expr: e };
}
function qr(r, e) {
  let t = r.nodeTypes, n = t[e];
  if (n)
    return [n];
  let i = [];
  for (let s in t) {
    let o = t[s];
    o.isInGroup(e) && i.push(o);
  }
  return i.length == 0 && r.err("No node type or group '" + e + "' found"), i;
}
function jr(r) {
  if (r.eat("(")) {
    let e = Cn(r);
    return r.eat(")") || r.err("Missing closing paren"), e;
  } else if (/\W/.test(r.next))
    r.err("Unexpected token '" + r.next + "'");
  else {
    let e = qr(r, r.next).map((t) => (r.inline == null ? r.inline = t.isInline : r.inline != t.isInline && r.err("Mixing inline and block content"), { type: "name", value: t }));
    return r.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function Wr(r) {
  let e = [[]];
  return i(s(r, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function n(o, l, a) {
    let c = { term: a, to: l };
    return e[o].push(c), c;
  }
  function i(o, l) {
    o.forEach((a) => a.to = l);
  }
  function s(o, l) {
    if (o.type == "choice")
      return o.exprs.reduce((a, c) => a.concat(s(c, l)), []);
    if (o.type == "seq")
      for (let a = 0; ; a++) {
        let c = s(o.exprs[a], l);
        if (a == o.exprs.length - 1)
          return c;
        i(c, l = t());
      }
    else if (o.type == "star") {
      let a = t();
      return n(l, a), i(s(o.expr, a), a), [n(a)];
    } else if (o.type == "plus") {
      let a = t();
      return i(s(o.expr, l), a), i(s(o.expr, a), a), [n(a)];
    } else {
      if (o.type == "opt")
        return [n(l)].concat(s(o.expr, l));
      if (o.type == "range") {
        let a = l;
        for (let c = 0; c < o.min; c++) {
          let u = t();
          i(s(o.expr, a), u), a = u;
        }
        if (o.max == -1)
          i(s(o.expr, a), a);
        else
          for (let c = o.min; c < o.max; c++) {
            let u = t();
            n(a, u), i(s(o.expr, a), u), a = u;
          }
        return [n(a)];
      } else {
        if (o.type == "name")
          return [n(l, void 0, o.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function En(r, e) {
  return e - r;
}
function Zt(r, e) {
  let t = [];
  return n(e), t.sort(En);
  function n(i) {
    let s = r[i];
    if (s.length == 1 && !s[0].term)
      return n(s[0].to);
    t.push(i);
    for (let o = 0; o < s.length; o++) {
      let { term: l, to: a } = s[o];
      !l && t.indexOf(a) == -1 && n(a);
    }
  }
}
function Vr(r) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(Zt(r, 0));
  function t(n) {
    let i = [];
    n.forEach((o) => {
      r[o].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let u = 0; u < i.length; u++)
          i[u][0] == l && (c = i[u][1]);
        Zt(r, a).forEach((u) => {
          c || i.push([l, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let s = e[n.join(",")] = new le(n.indexOf(r.length - 1) > -1);
    for (let o = 0; o < i.length; o++) {
      let l = i[o][1].sort(En);
      s.next.push({ type: i[o][0], next: e[l.join(",")] || t(l) });
    }
    return s;
  }
}
function Zr(r, e) {
  for (let t = 0, n = [r]; t < n.length; t++) {
    let i = n[t], s = !i.validEnd, o = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      o.push(a.name), s && !(a.isText || a.hasRequiredAttrs()) && (s = !1), n.indexOf(c) == -1 && n.push(c);
    }
    s && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Mn(r) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in r) {
    let n = r[t];
    if (!n.hasDefault)
      return null;
    e[t] = n.default;
  }
  return e;
}
function Rn(r, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let n in r) {
    let i = e && e[n];
    if (i === void 0) {
      let s = r[n];
      if (s.hasDefault)
        i = s.default;
      else
        throw new RangeError("No value supplied for attribute " + n);
    }
    t[n] = i;
  }
  return t;
}
function An(r, e, t, n) {
  for (let i in e)
    if (!(i in r))
      throw new RangeError(`Unsupported attribute ${i} for ${t} of type ${i}`);
  for (let i in r) {
    let s = r[i];
    s.validate && s.validate(e[i]);
  }
}
function In(r, e) {
  let t = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let n in e)
      t[n] = new Qr(r, n, e[n]);
  return t;
}
class We {
  /**
  @internal
  */
  constructor(e, t, n) {
    this.name = e, this.schema = t, this.spec = n, this.markSet = null, this.groups = n.group ? n.group.split(" ") : [], this.attrs = In(e, n.attrs), this.defaultAttrs = Mn(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(n.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == le.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : Rn(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, n) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new Z(this, this.computeAttrs(e), k.from(t), M.setFrom(n));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, n) {
    return t = k.from(t), this.checkContent(t), new Z(this, this.computeAttrs(e), t, M.setFrom(n));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, n) {
    if (e = this.computeAttrs(e), t = k.from(t), t.size) {
      let o = this.contentMatch.fillBefore(t);
      if (!o)
        return null;
      t = o.append(t);
    }
    let i = this.contentMatch.matchFragment(t), s = i && i.fillBefore(k.empty, !0);
    return s ? new Z(this, e, t.append(s), M.setFrom(n)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let n = 0; n < e.childCount; n++)
      if (!this.allowsMarks(e.child(n).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    An(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let n = 0; n < e.length; n++)
      this.allowsMarkType(e[n].type) ? t && t.push(e[n]) : t || (t = e.slice(0, n));
    return t ? t.length ? t : M.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let n = /* @__PURE__ */ Object.create(null);
    e.forEach((s, o) => n[s] = new We(s, t, o));
    let i = t.spec.topNode || "doc";
    if (!n[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!n.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let s in n.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return n;
  }
}
function Ur(r, e, t) {
  let n = t.split("|");
  return (i) => {
    let s = i === null ? "null" : typeof i;
    if (n.indexOf(s) < 0)
      throw new RangeError(`Expected value of type ${n} for attribute ${e} on type ${r}, got ${s}`);
  };
}
class Qr {
  constructor(e, t, n) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(n, "default"), this.default = n.default, this.validate = typeof n.validate == "string" ? Ur(e, t, n.validate) : n.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Ge {
  /**
  @internal
  */
  constructor(e, t, n, i) {
    this.name = e, this.rank = t, this.schema = n, this.spec = i, this.attrs = In(e, i.attrs), this.excluded = null;
    let s = Mn(this.attrs);
    this.instance = s ? new M(this, s) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new M(this, Rn(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let n = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((s, o) => n[s] = new Ge(s, i++, t, o)), n;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    An(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class Hr {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = $.from(e.nodes), t.marks = $.from(e.marks || {}), this.nodes = We.compile(this.spec.nodes, this), this.marks = Ge.compile(this.spec.marks, this);
    let n = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let s = this.nodes[i], o = s.spec.content || "", l = s.spec.marks;
      if (s.contentMatch = n[o] || (n[o] = le.parse(o, this.nodes)), s.inlineContent = s.contentMatch.inlineContent, s.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!s.isInline || !s.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = s;
      }
      s.markSet = l == "_" ? null : l ? Ut(this, l.split(" ")) : l == "" || !s.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let s = this.marks[i], o = s.spec.excludes;
      s.excluded = o == null ? [s] : o == "" ? [] : Ut(this, o.split(" "));
    }
    this.nodeFromJSON = (i) => Z.fromJSON(this, i), this.markFromJSON = (i) => M.fromJSON(this, i), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, n, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof We) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, n, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let n = this.nodes.text;
    return new je(n, n.defaultAttrs, e, M.setFrom(t));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  /**
  @internal
  */
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function Ut(r, e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let i = e[n], s = r.marks[i], o = s;
    if (s)
      t.push(s);
    else
      for (let l in r.marks) {
        let a = r.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && t.push(o = a);
      }
    if (!o)
      throw new SyntaxError("Unknown mark type: '" + e[n] + "'");
  }
  return t;
}
function Kr(r) {
  return r.tag != null;
}
function Gr(r) {
  return r.style != null;
}
let it = class pt {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [];
    let n = this.matchedStyles = [];
    t.forEach((i) => {
      if (Kr(i))
        this.tags.push(i);
      else if (Gr(i)) {
        let s = /[^=]*/.exec(i.style)[0];
        n.indexOf(s) < 0 && n.push(s), this.styles.push(i);
      }
    }), this.normalizeLists = !this.tags.some((i) => {
      if (!/^(ul|ol)\b/.test(i.tag) || !i.node)
        return !1;
      let s = e.nodes[i.node];
      return s.contentMatch.matchType(s);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let n = new Ht(this, t, !1);
    return n.addAll(e, M.none, t.from, t.to), n.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let n = new Ht(this, t, !0);
    return n.addAll(e, M.none, t.from, t.to), w.maxOpen(n.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, n) {
    for (let i = n ? this.tags.indexOf(n) + 1 : 0; i < this.tags.length; i++) {
      let s = this.tags[i];
      if (ei(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || t.matchesContext(s.context))) {
        if (s.getAttrs) {
          let o = s.getAttrs(e);
          if (o === !1)
            continue;
          s.attrs = o || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, n, i) {
    for (let s = i ? this.styles.indexOf(i) + 1 : 0; s < this.styles.length; s++) {
      let o = this.styles[s], l = o.style;
      if (!(l.indexOf(e) != 0 || o.context && !n.matchesContext(o.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (o.getAttrs) {
          let a = o.getAttrs(t);
          if (a === !1)
            continue;
          o.attrs = a || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function n(i) {
      let s = i.priority == null ? 50 : i.priority, o = 0;
      for (; o < t.length; o++) {
        let l = t[o];
        if ((l.priority == null ? 50 : l.priority) < s)
          break;
      }
      t.splice(o, 0, i);
    }
    for (let i in e.marks) {
      let s = e.marks[i].spec.parseDOM;
      s && s.forEach((o) => {
        n(o = Kt(o)), o.mark || o.ignore || o.clearMark || (o.mark = i);
      });
    }
    for (let i in e.nodes) {
      let s = e.nodes[i].spec.parseDOM;
      s && s.forEach((o) => {
        n(o = Kt(o)), o.node || o.ignore || o.mark || (o.node = i);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new pt(e, pt.schemaRules(e)));
  }
};
const zn = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, Xr = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, Nn = { ol: !0, ul: !0 }, Ce = 1, dt = 2, ve = 4;
function Qt(r, e, t) {
  return e != null ? (e ? Ce : 0) | (e === "full" ? dt : 0) : r && r.whitespace == "pre" ? Ce | dt : t & ~ve;
}
class Ne {
  constructor(e, t, n, i, s, o) {
    this.type = e, this.attrs = t, this.marks = n, this.solid = i, this.options = o, this.content = [], this.activeMarks = M.none, this.match = s || (o & ve ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(k.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let n = this.type.contentMatch, i;
        return (i = n.findWrapping(e.type)) ? (this.match = n, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & Ce)) {
      let n = this.content[this.content.length - 1], i;
      if (n && n.isText && (i = /[ \t\r\n\u000c]+$/.exec(n.text))) {
        let s = n;
        n.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - i[0].length));
      }
    }
    let t = k.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(k.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !zn.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Ht {
  constructor(e, t, n) {
    this.parser = e, this.options = t, this.isOpen = n, this.open = 0, this.localPreserveWS = !1;
    let i = t.topNode, s, o = Qt(null, t.preserveWhitespace, 0) | (n ? ve : 0);
    i ? s = new Ne(i.type, i.attrs, M.none, !0, t.topMatch || i.type.contentMatch, o) : n ? s = new Ne(null, null, M.none, !0, null, o) : s = new Ne(e.schema.topNodeType, null, M.none, !0, null, o), this.nodes = [s], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, t) {
    e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
  }
  addTextNode(e, t) {
    let n = e.nodeValue, i = this.top, s = i.options & dt ? "full" : this.localPreserveWS || (i.options & Ce) > 0, { schema: o } = this.parser;
    if (s === "full" || i.inlineContext(e) || /[^ \t\r\n\u000c]/.test(n)) {
      if (s)
        if (s === "full")
          n = n.replace(/\r\n?/g, `
`);
        else if (o.linebreakReplacement && /[\r\n]/.test(n) && this.top.findWrapping(o.linebreakReplacement.create())) {
          let l = n.split(/\r?\n|\r/);
          for (let a = 0; a < l.length; a++)
            a && this.insertNode(o.linebreakReplacement.create(), t, !0), l[a] && this.insertNode(o.text(l[a]), t, !/\S/.test(l[a]));
          n = "";
        } else
          n = n.replace(/\r?\n|\r/g, " ");
      else if (n = n.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(n) && this.open == this.nodes.length - 1) {
        let l = i.content[i.content.length - 1], a = e.previousSibling;
        (!l || a && a.nodeName == "BR" || l.isText && /[ \t\r\n\u000c]$/.test(l.text)) && (n = n.slice(1));
      }
      n && this.insertNode(o.text(n), t, !/\S/.test(n)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t, n) {
    let i = this.localPreserveWS, s = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let o = e.nodeName.toLowerCase(), l;
    Nn.hasOwnProperty(o) && this.parser.normalizeLists && Yr(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, n));
    e: if (a ? a.ignore : Xr.hasOwnProperty(o))
      this.findInside(e), this.ignoreFallback(e, t);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
      let c, u = this.needsBlock;
      if (zn.hasOwnProperty(o))
        s.content.length && s.content[0].isInline && this.open && (this.open--, s = this.top), c = !0, s.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, t);
        break e;
      }
      let f = a && a.skip ? t : this.readStyles(e, t);
      f && this.addAll(e, f), c && this.sync(s), this.needsBlock = u;
    } else {
      let c = this.readStyles(e, t);
      c && this.addElementByRule(e, a, c, a.consuming === !1 ? l : void 0);
    }
    this.localPreserveWS = i;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, t) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), t);
  }
  // Called for ignored nodes
  ignoreFallback(e, t) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), t, !0);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, t) {
    let n = e.style;
    if (n && n.length)
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let s = this.parser.matchedStyles[i], o = n.getPropertyValue(s);
        if (o)
          for (let l = void 0; ; ) {
            let a = this.parser.matchStyle(s, o, this, l);
            if (!a)
              break;
            if (a.ignore)
              return null;
            if (a.clearMark ? t = t.filter((c) => !a.clearMark(c)) : t = t.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1)
              l = a;
            else
              break;
          }
      }
    return t;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, n, i) {
    let s, o;
    if (t.node)
      if (o = this.parser.schema.nodes[t.node], o.isLeaf)
        this.insertNode(o.create(t.attrs), n, e.nodeName == "BR") || this.leafFallback(e, n);
      else {
        let a = this.enter(o, t.attrs || null, n, t.preserveWhitespace);
        a && (s = !0, n = a);
      }
    else {
      let a = this.parser.schema.marks[t.mark];
      n = n.concat(a.create(t.attrs));
    }
    let l = this.top;
    if (o && o.isLeaf)
      this.findInside(e);
    else if (i)
      this.addElement(e, n, i);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a, n, !1));
    else {
      let a = e;
      typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a, n), this.findAround(e, a, !1);
    }
    s && this.sync(l) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, n, i) {
    let s = n || 0;
    for (let o = n ? e.childNodes[n] : e.firstChild, l = i == null ? null : e.childNodes[i]; o != l; o = o.nextSibling, ++s)
      this.findAtPoint(e, s), this.addDOM(o, t);
    this.findAtPoint(e, s);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, t, n) {
    let i, s;
    for (let o = this.open, l = 0; o >= 0; o--) {
      let a = this.nodes[o], c = a.findWrapping(e);
      if (c && (!i || i.length > c.length + l) && (i = c, s = a, !c.length))
        break;
      if (a.solid) {
        if (n)
          break;
        l += 2;
      }
    }
    if (!i)
      return null;
    this.sync(s);
    for (let o = 0; o < i.length; o++)
      t = this.enterInner(i[o], null, t, !1);
    return t;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, t, n) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let s = this.textblockFromContext();
      s && (t = this.enterInner(s, null, t));
    }
    let i = this.findPlace(e, t, n);
    if (i) {
      this.closeExtra();
      let s = this.top;
      s.match && (s.match = s.match.matchType(e.type));
      let o = M.none;
      for (let l of i.concat(e.marks))
        (s.type ? s.type.allowsMarkType(l.type) : Gt(l.type, e.type)) && (o = l.addToSet(o));
      return s.content.push(e.mark(o)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, n, i) {
    let s = this.findPlace(e.create(t), n, !1);
    return s && (s = this.enterInner(e, t, n, !0, i)), s;
  }
  // Open a node of the given type
  enterInner(e, t, n, i = !1, s) {
    this.closeExtra();
    let o = this.top;
    o.match = o.match && o.match.matchType(e);
    let l = Qt(e, s, o.options);
    o.options & ve && o.content.length == 0 && (l |= ve);
    let a = M.none;
    return n = n.filter((c) => (o.type ? o.type.allowsMarkType(c.type) : Gt(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new Ne(e, t, a, i, null, l)), this.open++, n;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--) {
      if (this.nodes[t] == e)
        return this.open = t, !0;
      this.localPreserveWS && (this.nodes[t].options |= Ce);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let n = this.nodes[t].content;
      for (let i = n.length - 1; i >= 0; i--)
        e += n[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].node == e && this.find[n].offset == t && (this.find[n].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, n) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (n ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), n = this.options.context, i = !this.isOpen && (!n || n.parent.type == this.nodes[0].type), s = -(n ? n.depth + 1 : 0) + (i ? 0 : 1), o = (l, a) => {
      for (; l >= 0; l--) {
        let c = t[l];
        if (c == "") {
          if (l == t.length - 1 || l == 0)
            continue;
          for (; a >= s; a--)
            if (o(l - 1, a))
              return !0;
          return !1;
        } else {
          let u = a > 0 || a == 0 && i ? this.nodes[a].type : n && a >= s ? n.node(a - s).type : null;
          if (!u || u.name != c && !u.isInGroup(c))
            return !1;
          a--;
        }
      }
      return !0;
    };
    return o(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let n = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (n && n.isTextblock && n.defaultAttrs)
          return n;
      }
    for (let t in this.parser.schema.nodes) {
      let n = this.parser.schema.nodes[t];
      if (n.isTextblock && n.defaultAttrs)
        return n;
    }
  }
}
function Yr(r) {
  for (let e = r.firstChild, t = null; e; e = e.nextSibling) {
    let n = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    n && Nn.hasOwnProperty(n) && t ? (t.appendChild(e), e = t) : n == "li" ? t = e : n && (t = null);
  }
}
function ei(r, e) {
  return (r.matches || r.msMatchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector).call(r, e);
}
function Kt(r) {
  let e = {};
  for (let t in r)
    e[t] = r[t];
  return e;
}
function Gt(r, e) {
  let t = e.schema.nodes;
  for (let n in t) {
    let i = t[n];
    if (!i.allowsMarkType(r))
      continue;
    let s = [], o = (l) => {
      s.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: u } = l.edge(a);
        if (c == e || s.indexOf(u) < 0 && o(u))
          return !0;
      }
    };
    if (o(i.contentMatch))
      return !0;
  }
}
const On = 65535, $n = Math.pow(2, 16);
function ti(r, e) {
  return r + e * $n;
}
function Xt(r) {
  return r & On;
}
function ni(r) {
  return (r - (r & On)) / $n;
}
const Bn = 1, Pn = 2, Fe = 4, Fn = 8;
class mt {
  /**
  @internal
  */
  constructor(e, t, n) {
    this.pos = e, this.delInfo = t, this.recover = n;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & Fn) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (Bn | Fe)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (Pn | Fe)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Fe) > 0;
  }
}
class L {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && L.empty)
      return L.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, n = Xt(e);
    if (!this.inverted)
      for (let i = 0; i < n; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[n * 3] + t + ni(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, n) {
    let i = 0, s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], u = this.ranges[l + o], f = a + c;
      if (e <= f) {
        let h = c ? e == a ? -1 : e == f ? 1 : t : t, p = a + i + (h < 0 ? 0 : u);
        if (n)
          return p;
        let d = e == (t < 0 ? a : f) ? null : ti(l / 3, e - a), m = e == a ? Pn : e == f ? Bn : Fe;
        return (t < 0 ? e != a : e != f) && (m |= Fn), new mt(p, m, d);
      }
      i += u - c;
    }
    return n ? e + i : new mt(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let n = 0, i = Xt(t), s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? n : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], u = a + c;
      if (e <= u && l == i * 3)
        return !0;
      n += this.ranges[l + o] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, n = this.inverted ? 1 : 2;
    for (let i = 0, s = 0; i < this.ranges.length; i += 3) {
      let o = this.ranges[i], l = o - (this.inverted ? s : 0), a = o + (this.inverted ? 0 : s), c = this.ranges[i + t], u = this.ranges[i + n];
      e(l, l + c, a, a + u), s += u - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new L(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? L.empty : new L(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
L.empty = new L([]);
class Ve {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e, t, n = 0, i = e ? e.length : 0) {
    this.mirror = t, this.from = n, this.to = i, this._maps = e || [], this.ownData = !(e || t);
  }
  /**
  The step maps in this mapping.
  */
  get maps() {
    return this._maps;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, t = this.maps.length) {
    return new Ve(this._maps, this.mirror, e, t);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, t) {
    this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(e), t != null && this.setMirror(this._maps.length - 1, t);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let t = 0, n = this._maps.length; t < e._maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e._maps[t], i != null && i < t ? n + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, n = this._maps.length + e._maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e._maps[t].invert(), i != null && i > t ? n - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new Ve();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let n = this.from; n < this.to; n++)
      e = this._maps[n].map(e, t);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  /**
  @internal
  */
  _map(e, t, n) {
    let i = 0;
    for (let s = this.from; s < this.to; s++) {
      let o = this._maps[s], l = o.mapResult(e, t);
      if (l.recover != null) {
        let a = this.getMirror(s);
        if (a != null && a > s && a < this.to) {
          s = a, e = this._maps[a].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return n ? e : new mt(e, i, null);
  }
}
const st = /* @__PURE__ */ Object.create(null);
class F {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return L.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let n = st[t.stepType];
    if (!n)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return n.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in st)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return st[e] = t, t.prototype.jsonID = e, t;
  }
}
class z {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new z(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new z(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, n, i) {
    try {
      return z.ok(e.replace(t, n, i));
    } catch (s) {
      if (s instanceof _e)
        return z.fail(s.message);
      throw s;
    }
  }
}
function bt(r, e, t) {
  let n = [];
  for (let i = 0; i < r.childCount; i++) {
    let s = r.child(i);
    s.content.size && (s = s.copy(bt(s.content, e, s))), s.isInline && (s = e(s, t, i)), n.push(s);
  }
  return k.fromArray(n);
}
class ee extends F {
  /**
  Create a mark step.
  */
  constructor(e, t, n) {
    super(), this.from = e, this.to = t, this.mark = n;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), n = e.resolve(this.from), i = n.node(n.sharedDepth(this.to)), s = new w(bt(t.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), i), t.openStart, t.openEnd);
    return z.fromReplace(e, this.from, this.to, s);
  }
  invert() {
    return new W(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), n = e.mapResult(this.to, -1);
    return t.deleted && n.deleted || t.pos >= n.pos ? null : new ee(t.pos, n.pos, this.mark);
  }
  merge(e) {
    return e instanceof ee && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new ee(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new ee(t.from, t.to, e.markFromJSON(t.mark));
  }
}
F.jsonID("addMark", ee);
class W extends F {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, n) {
    super(), this.from = e, this.to = t, this.mark = n;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), n = new w(bt(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return z.fromReplace(e, this.from, this.to, n);
  }
  invert() {
    return new ee(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), n = e.mapResult(this.to, -1);
    return t.deleted && n.deleted || t.pos >= n.pos ? null : new W(t.pos, n.pos, this.mark);
  }
  merge(e) {
    return e instanceof W && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new W(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new W(t.from, t.to, e.markFromJSON(t.mark));
  }
}
F.jsonID("removeMark", W);
class te extends F {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return z.fail("No node at mark step's position");
    let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return z.fromReplace(e, this.pos, this.pos + 1, new w(k.from(n), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let n = this.mark.addToSet(t.marks);
      if (n.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(n))
            return new te(this.pos, t.marks[i]);
        return new te(this.pos, this.mark);
      }
    }
    return new ae(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new te(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new te(t.pos, e.markFromJSON(t.mark));
  }
}
F.jsonID("addNodeMark", te);
class ae extends F {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return z.fail("No node at mark step's position");
    let n = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return z.fromReplace(e, this.pos, this.pos + 1, new w(k.from(n), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new te(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new ae(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new ae(t.pos, e.markFromJSON(t.mark));
  }
}
F.jsonID("removeNodeMark", ae);
class N extends F {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, n, i = !1) {
    super(), this.from = e, this.to = t, this.slice = n, this.structure = i;
  }
  apply(e) {
    return this.structure && gt(e, this.from, this.to) ? z.fail("Structure replace would overwrite content") : z.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new L([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new N(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), n = e.mapResult(this.to, -1);
    return t.deletedAcross && n.deletedAcross ? null : new N(t.pos, Math.max(t.pos, n.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof N) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? w.empty : new w(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new N(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? w.empty : new w(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new N(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new N(t.from, t.to, w.fromJSON(e, t.slice), !!t.structure);
  }
}
F.jsonID("replace", N);
class O extends F {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, n, i, s, o, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = n, this.gapTo = i, this.slice = s, this.insert = o, this.structure = l;
  }
  apply(e) {
    if (this.structure && (gt(e, this.from, this.gapFrom) || gt(e, this.gapTo, this.to)))
      return z.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return z.fail("Gap is not a flat range");
    let n = this.slice.insertAt(this.insert, t.content);
    return n ? z.fromReplace(e, this.from, this.to, n) : z.fail("Content does not fit in gap");
  }
  getMap() {
    return new L([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new O(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), n = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), s = this.to == this.gapTo ? n.pos : e.map(this.gapTo, 1);
    return t.deletedAcross && n.deletedAcross || i < t.pos || s > n.pos ? null : new O(t.pos, n.pos, i, s, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new O(t.from, t.to, t.gapFrom, t.gapTo, w.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
F.jsonID("replaceAround", O);
function gt(r, e, t) {
  let n = r.resolve(e), i = t - e, s = n.depth;
  for (; i > 0 && s > 0 && n.indexAfter(s) == n.node(s).childCount; )
    s--, i--;
  if (i > 0) {
    let o = n.node(s).maybeChild(n.indexAfter(s));
    for (; i > 0; ) {
      if (!o || o.isLeaf)
        return !0;
      o = o.firstChild, i--;
    }
  }
  return !1;
}
function ri(r, e, t, n) {
  let i = [], s = [], o, l;
  r.doc.nodesBetween(e, t, (a, c, u) => {
    if (!a.isInline)
      return;
    let f = a.marks;
    if (!n.isInSet(f) && u.type.allowsMarkType(n.type)) {
      let h = Math.max(c, e), p = Math.min(c + a.nodeSize, t), d = n.addToSet(f);
      for (let m = 0; m < f.length; m++)
        f[m].isInSet(d) || (o && o.to == h && o.mark.eq(f[m]) ? o.to = p : i.push(o = new W(h, p, f[m])));
      l && l.to == h ? l.to = p : s.push(l = new ee(h, p, n));
    }
  }), i.forEach((a) => r.step(a)), s.forEach((a) => r.step(a));
}
function ii(r, e, t, n) {
  let i = [], s = 0;
  r.doc.nodesBetween(e, t, (o, l) => {
    if (!o.isInline)
      return;
    s++;
    let a = null;
    if (n instanceof Ge) {
      let c = o.marks, u;
      for (; u = n.isInSet(c); )
        (a || (a = [])).push(u), c = u.removeFromSet(c);
    } else n ? n.isInSet(o.marks) && (a = [n]) : a = o.marks;
    if (a && a.length) {
      let c = Math.min(l + o.nodeSize, t);
      for (let u = 0; u < a.length; u++) {
        let f = a[u], h;
        for (let p = 0; p < i.length; p++) {
          let d = i[p];
          d.step == s - 1 && f.eq(i[p].style) && (h = d);
        }
        h ? (h.to = c, h.step = s) : i.push({ style: f, from: Math.max(l, e), to: c, step: s });
      }
    }
  }), i.forEach((o) => r.step(new W(o.from, o.to, o.style)));
}
function St(r, e, t, n = t.contentMatch, i = !0) {
  let s = r.doc.nodeAt(e), o = [], l = e + 1;
  for (let a = 0; a < s.childCount; a++) {
    let c = s.child(a), u = l + c.nodeSize, f = n.matchType(c.type);
    if (!f)
      o.push(new N(l, u, w.empty));
    else {
      n = f;
      for (let h = 0; h < c.marks.length; h++)
        t.allowsMarkType(c.marks[h].type) || r.step(new W(l, u, c.marks[h]));
      if (i && c.isText && t.whitespace != "pre") {
        let h, p = /\r?\n|\r/g, d;
        for (; h = p.exec(c.text); )
          d || (d = new w(k.from(t.schema.text(" ", t.allowedMarks(c.marks))), 0, 0)), o.push(new N(l + h.index, l + h.index + h[0].length, d));
      }
    }
    l = u;
  }
  if (!n.validEnd) {
    let a = n.fillBefore(k.empty, !0);
    r.replace(l, l, new w(a, 0, 0));
  }
  for (let a = o.length - 1; a >= 0; a--)
    r.step(o[a]);
}
function si(r, e, t) {
  return (e == 0 || r.canReplace(e, r.childCount)) && (t == r.childCount || r.canReplace(0, t));
}
function ge(r) {
  let t = r.parent.content.cutByIndex(r.startIndex, r.endIndex);
  for (let n = r.depth, i = 0, s = 0; ; --n) {
    let o = r.$from.node(n), l = r.$from.index(n) + i, a = r.$to.indexAfter(n) - s;
    if (n < r.depth && o.canReplace(l, a, t))
      return n;
    if (n == 0 || o.type.spec.isolating || !si(o, l, a))
      break;
    l && (i = 1), a < o.childCount && (s = 1);
  }
  return null;
}
function oi(r, e, t) {
  let { $from: n, $to: i, depth: s } = e, o = n.before(s + 1), l = i.after(s + 1), a = o, c = l, u = k.empty, f = 0;
  for (let d = s, m = !1; d > t; d--)
    m || n.index(d) > 0 ? (m = !0, u = k.from(n.node(d).copy(u)), f++) : a--;
  let h = k.empty, p = 0;
  for (let d = s, m = !1; d > t; d--)
    m || i.after(d + 1) < i.end(d) ? (m = !0, h = k.from(i.node(d).copy(h)), p++) : c++;
  r.step(new O(a, c, o, l, new w(u.append(h), f, p), u.size - f, !0));
}
function Dn(r, e, t = null, n = r) {
  let i = li(r, e), s = i && ai(n, e);
  return s ? i.map(Yt).concat({ type: e, attrs: t }).concat(s.map(Yt)) : null;
}
function Yt(r) {
  return { type: r, attrs: null };
}
function li(r, e) {
  let { parent: t, startIndex: n, endIndex: i } = r, s = t.contentMatchAt(n).findWrapping(e);
  if (!s)
    return null;
  let o = s.length ? s[0] : e;
  return t.canReplaceWith(n, i, o) ? s : null;
}
function ai(r, e) {
  let { parent: t, startIndex: n, endIndex: i } = r, s = t.child(n), o = e.contentMatch.findWrapping(s.type);
  if (!o)
    return null;
  let a = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let c = n; a && c < i; c++)
    a = a.matchType(t.child(c).type);
  return !a || !a.validEnd ? null : o;
}
function ci(r, e, t) {
  let n = k.empty;
  for (let o = t.length - 1; o >= 0; o--) {
    if (n.size) {
      let l = t[o].type.contentMatch.matchFragment(n);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    n = k.from(t[o].type.create(t[o].attrs, n));
  }
  let i = e.start, s = e.end;
  r.step(new O(i, s, i, s, new w(n, 0, 0), t.length, !0));
}
function ui(r, e, t, n, i) {
  if (!n.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let s = r.steps.length;
  r.doc.nodesBetween(e, t, (o, l) => {
    let a = typeof i == "function" ? i(o) : i;
    if (o.isTextblock && !o.hasMarkup(n, a) && hi(r.doc, r.mapping.slice(s).map(l), n)) {
      let c = null;
      if (n.schema.linebreakReplacement) {
        let p = n.whitespace == "pre", d = !!n.contentMatch.matchType(n.schema.linebreakReplacement);
        p && !d ? c = !1 : !p && d && (c = !0);
      }
      c === !1 && _n(r, o, l, s), St(r, r.mapping.slice(s).map(l, 1), n, void 0, c === null);
      let u = r.mapping.slice(s), f = u.map(l, 1), h = u.map(l + o.nodeSize, 1);
      return r.step(new O(f, h, f + 1, h - 1, new w(k.from(n.create(a, null, o.marks)), 0, 0), 1, !0)), c === !0 && Ln(r, o, l, s), !1;
    }
  });
}
function Ln(r, e, t, n) {
  e.forEach((i, s) => {
    if (i.isText) {
      let o, l = /\r?\n|\r/g;
      for (; o = l.exec(i.text); ) {
        let a = r.mapping.slice(n).map(t + 1 + s + o.index);
        r.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function _n(r, e, t, n) {
  e.forEach((i, s) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let o = r.mapping.slice(n).map(t + 1 + s);
      r.replaceWith(o, o + 1, e.type.schema.text(`
`));
    }
  });
}
function hi(r, e, t) {
  let n = r.resolve(e), i = n.index();
  return n.parent.canReplaceWith(i, i + 1, t);
}
function fi(r, e, t, n, i) {
  let s = r.doc.nodeAt(e);
  if (!s)
    throw new RangeError("No node at given position");
  t || (t = s.type);
  let o = t.create(n, null, i || s.marks);
  if (s.isLeaf)
    return r.replaceWith(e, e + s.nodeSize, o);
  if (!t.validContent(s.content))
    throw new RangeError("Invalid content for node type " + t.name);
  r.step(new O(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new w(k.from(o), 0, 0), 1, !0));
}
function H(r, e, t = 1, n) {
  let i = r.resolve(e), s = i.depth - t, o = n && n[n.length - 1] || i.parent;
  if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, u = t - 2; c > s; c--, u--) {
    let f = i.node(c), h = i.index(c);
    if (f.type.spec.isolating)
      return !1;
    let p = f.content.cutByIndex(h, f.childCount), d = n && n[u + 1];
    d && (p = p.replaceChild(0, d.type.create(d.attrs)));
    let m = n && n[u] || f;
    if (!f.canReplace(h + 1, f.childCount) || !m.type.validContent(p))
      return !1;
  }
  let l = i.indexAfter(s), a = n && n[0];
  return i.node(s).canReplaceWith(l, l, a ? a.type : i.node(s + 1).type);
}
function pi(r, e, t = 1, n) {
  let i = r.doc.resolve(e), s = k.empty, o = k.empty;
  for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--) {
    s = k.from(i.node(l).copy(s));
    let u = n && n[c];
    o = k.from(u ? u.type.create(u.attrs, o) : i.node(l).copy(o));
  }
  r.step(new N(e, e, new w(s.append(o), t, t), !0));
}
function ue(r, e) {
  let t = r.resolve(e), n = t.index();
  return Jn(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(n, n + 1);
}
function di(r, e) {
  e.content.size || r.type.compatibleContent(e.type);
  let t = r.contentMatchAt(r.childCount), { linebreakReplacement: n } = r.type.schema;
  for (let i = 0; i < e.childCount; i++) {
    let s = e.child(i), o = s.type == n ? r.type.schema.nodes.text : s.type;
    if (t = t.matchType(o), !t || !r.type.allowsMarks(s.marks))
      return !1;
  }
  return t.validEnd;
}
function Jn(r, e) {
  return !!(r && e && !r.isLeaf && di(r, e));
}
function Xe(r, e, t = -1) {
  let n = r.resolve(e);
  for (let i = n.depth; ; i--) {
    let s, o, l = n.index(i);
    if (i == n.depth ? (s = n.nodeBefore, o = n.nodeAfter) : t > 0 ? (s = n.node(i + 1), l++, o = n.node(i).maybeChild(l)) : (s = n.node(i).maybeChild(l - 1), o = n.node(i + 1)), s && !s.isTextblock && Jn(s, o) && n.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? n.before(i) : n.after(i);
  }
}
function mi(r, e, t) {
  let n = null, { linebreakReplacement: i } = r.doc.type.schema, s = r.doc.resolve(e - t), o = s.node().type;
  if (i && o.inlineContent) {
    let u = o.whitespace == "pre", f = !!o.contentMatch.matchType(i);
    u && !f ? n = !1 : !u && f && (n = !0);
  }
  let l = r.steps.length;
  if (n === !1) {
    let u = r.doc.resolve(e + t);
    _n(r, u.node(), u.before(), l);
  }
  o.inlineContent && St(r, e + t - 1, o, s.node().contentMatchAt(s.index()), n == null);
  let a = r.mapping.slice(l), c = a.map(e - t);
  if (r.step(new N(c, a.map(e + t, -1), w.empty, !0)), n === !0) {
    let u = r.doc.resolve(c);
    Ln(r, u.node(), u.before(), r.steps.length);
  }
  return r;
}
function gi(r, e, t) {
  let n = r.resolve(e);
  if (n.parent.canReplaceWith(n.index(), n.index(), t))
    return e;
  if (n.parentOffset == 0)
    for (let i = n.depth - 1; i >= 0; i--) {
      let s = n.index(i);
      if (n.node(i).canReplaceWith(s, s, t))
        return n.before(i + 1);
      if (s > 0)
        return null;
    }
  if (n.parentOffset == n.parent.content.size)
    for (let i = n.depth - 1; i >= 0; i--) {
      let s = n.indexAfter(i);
      if (n.node(i).canReplaceWith(s, s, t))
        return n.after(i + 1);
      if (s < n.node(i).childCount)
        return null;
    }
  return null;
}
function Ye(r, e, t = e, n = w.empty) {
  if (e == t && !n.size)
    return null;
  let i = r.resolve(e), s = r.resolve(t);
  return qn(i, s, n) ? new N(e, t, n) : new ki(i, s, n).fit();
}
function qn(r, e, t) {
  return !t.openStart && !t.openEnd && r.start() == e.start() && r.parent.canReplace(r.index(), e.index(), t.content);
}
class ki {
  constructor(e, t, n) {
    this.$from = e, this.$to = t, this.unplaced = n, this.frontier = [], this.placed = k.empty;
    for (let i = 0; i <= e.depth; i++) {
      let s = e.node(i);
      this.frontier.push({
        type: s.type,
        match: s.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = k.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, n = this.$from, i = this.close(e < 0 ? this.$to : n.doc.resolve(e));
    if (!i)
      return null;
    let s = this.placed, o = n.depth, l = i.depth;
    for (; o && l && s.childCount == 1; )
      s = s.firstChild.content, o--, l--;
    let a = new w(s, o, l);
    return e > -1 ? new O(n.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || n.pos != this.$to.pos ? new N(n.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, n = 0, i = this.unplaced.openEnd; n < e; n++) {
      let s = t.firstChild;
      if (t.childCount > 1 && (i = 0), s.type.spec.isolating && i <= n) {
        e = n;
        break;
      }
      t = s.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let n = t == 1 ? e : this.unplaced.openStart; n >= 0; n--) {
        let i, s = null;
        n ? (s = ot(this.unplaced.content, n - 1).firstChild, i = s.content) : i = this.unplaced.content;
        let o = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], u, f = null;
          if (t == 1 && (o ? c.matchType(o.type) || (f = c.fillBefore(k.from(o), !1)) : s && a.compatibleContent(s.type)))
            return { sliceDepth: n, frontierDepth: l, parent: s, inject: f };
          if (t == 2 && o && (u = c.findWrapping(o.type)))
            return { sliceDepth: n, frontierDepth: l, parent: s, wrap: u };
          if (s && c.matchType(s.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: n } = this.unplaced, i = ot(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new w(e, t + 1, Math.max(n, i.size + t >= e.size - n ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: n } = this.unplaced, i = ot(e, t);
    if (i.childCount <= 1 && t > 0) {
      let s = e.size - t <= t + i.size;
      this.unplaced = new w(we(e, t - 1, 1), t - 1, s ? t - 1 : n);
    } else
      this.unplaced = new w(we(e, t, 1), t, n);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: n, inject: i, wrap: s }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (s)
      for (let m = 0; m < s.length; m++)
        this.openFrontierNode(s[m]);
    let o = this.unplaced, l = n ? n.content : o.content, a = o.openStart - e, c = 0, u = [], { match: f, type: h } = this.frontier[t];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        u.push(i.child(m));
      f = f.matchFragment(i);
    }
    let p = l.size + e - (o.content.size - o.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), g = f.matchType(m.type);
      if (!g)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (f = g, u.push(jn(m.mark(h.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? p : -1)));
    }
    let d = c == l.childCount;
    d || (p = -1), this.placed = ye(this.placed, t, k.from(u)), this.frontier[t].match = f, d && p < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = l; m < p; m++) {
      let x = g.lastChild;
      this.frontier.push({ type: x.type, match: x.contentMatchAt(x.childCount) }), g = x.content;
    }
    this.unplaced = d ? e == 0 ? w.empty : new w(we(o.content, e - 1, 1), e - 1, p < 0 ? o.openEnd : e - 1) : new w(we(o.content, e, c), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !lt(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: n } = this.$to, i = this.$to.after(n);
    for (; n > 1 && i == this.$to.end(--n); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
      let { match: n, type: i } = this.frontier[t], s = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), o = lt(e, t, i, n, s);
      if (o) {
        for (let l = t - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], u = lt(e, l, c, a, !0);
          if (!u || u.childCount)
            continue e;
        }
        return { depth: t, fit: o, move: s ? e.doc.resolve(e.after(t + 1)) : e };
      }
    }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = ye(this.placed, t.depth, t.fit)), e = t.move;
    for (let n = t.depth + 1; n <= e.depth; n++) {
      let i = e.node(n), s = i.type.contentMatch.fillBefore(i.content, !0, e.index(n));
      this.openFrontierNode(i.type, i.attrs, s);
    }
    return e;
  }
  openFrontierNode(e, t = null, n) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = ye(this.placed, this.depth, k.from(e.create(t, n))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(k.empty, !0);
    t.childCount && (this.placed = ye(this.placed, this.frontier.length, t));
  }
}
function we(r, e, t) {
  return e == 0 ? r.cutByIndex(t, r.childCount) : r.replaceChild(0, r.firstChild.copy(we(r.firstChild.content, e - 1, t)));
}
function ye(r, e, t) {
  return e == 0 ? r.append(t) : r.replaceChild(r.childCount - 1, r.lastChild.copy(ye(r.lastChild.content, e - 1, t)));
}
function ot(r, e) {
  for (let t = 0; t < e; t++)
    r = r.firstChild.content;
  return r;
}
function jn(r, e, t) {
  if (e <= 0)
    return r;
  let n = r.content;
  return e > 1 && (n = n.replaceChild(0, jn(n.firstChild, e - 1, n.childCount == 1 ? t - 1 : 0))), e > 0 && (n = r.type.contentMatch.fillBefore(n).append(n), t <= 0 && (n = n.append(r.type.contentMatch.matchFragment(n).fillBefore(k.empty, !0)))), r.copy(n);
}
function lt(r, e, t, n, i) {
  let s = r.node(e), o = i ? r.indexAfter(e) : r.index(e);
  if (o == s.childCount && !t.compatibleContent(s.type))
    return null;
  let l = n.fillBefore(s.content, !0, o);
  return l && !xi(t, s.content, o) ? l : null;
}
function xi(r, e, t) {
  for (let n = t; n < e.childCount; n++)
    if (!r.allowsMarks(e.child(n).marks))
      return !0;
  return !1;
}
function wi(r) {
  return r.spec.defining || r.spec.definingForContent;
}
function yi(r, e, t, n) {
  if (!n.size)
    return r.deleteRange(e, t);
  let i = r.doc.resolve(e), s = r.doc.resolve(t);
  if (qn(i, s, n))
    return r.step(new N(e, t, n));
  let o = Vn(i, s);
  o[o.length - 1] == 0 && o.pop();
  let l = -(i.depth + 1);
  o.unshift(l);
  for (let h = i.depth, p = i.pos - 1; h > 0; h--, p--) {
    let d = i.node(h).type.spec;
    if (d.defining || d.definingAsContext || d.isolating)
      break;
    o.indexOf(h) > -1 ? l = h : i.before(h) == p && o.splice(1, 0, -h);
  }
  let a = o.indexOf(l), c = [], u = n.openStart;
  for (let h = n.content, p = 0; ; p++) {
    let d = h.firstChild;
    if (c.push(d), p == n.openStart)
      break;
    h = d.content;
  }
  for (let h = u - 1; h >= 0; h--) {
    let p = c[h], d = wi(p.type);
    if (d && !p.sameMarkup(i.node(Math.abs(l) - 1)))
      u = h;
    else if (d || !p.type.isTextblock)
      break;
  }
  for (let h = n.openStart; h >= 0; h--) {
    let p = (h + u + 1) % (n.openStart + 1), d = c[p];
    if (d)
      for (let m = 0; m < o.length; m++) {
        let g = o[(m + a) % o.length], x = !0;
        g < 0 && (x = !1, g = -g);
        let y = i.node(g - 1), v = i.index(g - 1);
        if (y.canReplaceWith(v, v, d.type, d.marks))
          return r.replace(i.before(g), x ? s.after(g) : t, new w(Wn(n.content, 0, n.openStart, p), p, n.openEnd));
      }
  }
  let f = r.steps.length;
  for (let h = o.length - 1; h >= 0 && (r.replace(e, t, n), !(r.steps.length > f)); h--) {
    let p = o[h];
    p < 0 || (e = i.before(p), t = s.after(p));
  }
}
function Wn(r, e, t, n, i) {
  if (e < t) {
    let s = r.firstChild;
    r = r.replaceChild(0, s.copy(Wn(s.content, e + 1, t, n, s)));
  }
  if (e > n) {
    let s = i.contentMatchAt(0), o = s.fillBefore(r).append(r);
    r = o.append(s.matchFragment(o).fillBefore(k.empty, !0));
  }
  return r;
}
function bi(r, e, t, n) {
  if (!n.isInline && e == t && r.doc.resolve(e).parent.content.size) {
    let i = gi(r.doc, e, n.type);
    i != null && (e = t = i);
  }
  r.replaceRange(e, t, new w(k.from(n), 0, 0));
}
function Si(r, e, t) {
  let n = r.doc.resolve(e), i = r.doc.resolve(t), s = Vn(n, i);
  for (let o = 0; o < s.length; o++) {
    let l = s[o], a = o == s.length - 1;
    if (a && l == 0 || n.node(l).type.contentMatch.validEnd)
      return r.delete(n.start(l), i.end(l));
    if (l > 0 && (a || n.node(l - 1).canReplace(n.index(l - 1), i.indexAfter(l - 1))))
      return r.delete(n.before(l), i.after(l));
  }
  for (let o = 1; o <= n.depth && o <= i.depth; o++)
    if (e - n.start(o) == n.depth - o && t > n.end(o) && i.end(o) - t != i.depth - o && n.start(o - 1) == i.start(o - 1) && n.node(o - 1).canReplace(n.index(o - 1), i.index(o - 1)))
      return r.delete(n.before(o), t);
  r.delete(e, t);
}
function Vn(r, e) {
  let t = [], n = Math.min(r.depth, e.depth);
  for (let i = n; i >= 0; i--) {
    let s = r.start(i);
    if (s < r.pos - (r.depth - i) || e.end(i) > e.pos + (e.depth - i) || r.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (s == e.start(i) || i == r.depth && i == e.depth && r.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == s - 1) && t.push(i);
  }
  return t;
}
class pe extends F {
  /**
  Construct an attribute step.
  */
  constructor(e, t, n) {
    super(), this.pos = e, this.attr = t, this.value = n;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return z.fail("No node at attribute step's position");
    let n = /* @__PURE__ */ Object.create(null);
    for (let s in t.attrs)
      n[s] = t.attrs[s];
    n[this.attr] = this.value;
    let i = t.type.create(n, null, t.marks);
    return z.fromReplace(e, this.pos, this.pos + 1, new w(k.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return L.empty;
  }
  invert(e) {
    return new pe(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new pe(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new pe(t.pos, t.attr, t.value);
  }
}
F.jsonID("attr", pe);
class Ee extends F {
  /**
  Construct an attribute step.
  */
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      t[i] = e.attrs[i];
    t[this.attr] = this.value;
    let n = e.type.create(t, e.content, e.marks);
    return z.ok(n);
  }
  getMap() {
    return L.empty;
  }
  invert(e) {
    return new Ee(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new Ee(t.attr, t.value);
  }
}
F.jsonID("docAttr", Ee);
let de = class extends Error {
};
de = function r(e) {
  let t = Error.call(this, e);
  return t.__proto__ = r.prototype, t;
};
de.prototype = Object.create(Error.prototype);
de.prototype.constructor = de;
de.prototype.name = "TransformError";
class vi {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new Ve();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new de(t.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  Return a single range, in post-transform document positions,
  that covers all content changed by this transform. Returns null
  if no replacements are made. Note that this will ignore changes
  that add/remove marks without replacing the underlying content.
  */
  changedRange() {
    let e = 1e9, t = -1e9;
    for (let n = 0; n < this.mapping.maps.length; n++) {
      let i = this.mapping.maps[n];
      n && (e = i.map(e, 1), t = i.map(t, -1)), i.forEach((s, o, l, a) => {
        e = Math.min(e, l), t = Math.max(t, a);
      });
    }
    return e == 1e9 ? null : { from: e, to: t };
  }
  /**
  @internal
  */
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, t = e, n = w.empty) {
    let i = Ye(this.doc, e, t, n);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, n) {
    return this.replace(e, t, new w(k.from(n), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, w.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, t, n) {
    return yi(this, e, t, n), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, t, n) {
    return bi(this, e, t, n), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return Si(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return oi(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return mi(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return ci(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, n, i = null) {
    return ui(this, e, t, n, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, n = null, i) {
    return fi(this, e, t, n, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, t, n) {
    return this.step(new pe(e, t, n)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, t) {
    return this.step(new Ee(e, t)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new te(e, t)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    let n = this.doc.nodeAt(e);
    if (!n)
      throw new RangeError("No node at position " + e);
    if (t instanceof M)
      t.isInSet(n.marks) && this.step(new ae(e, t));
    else {
      let i = n.marks, s, o = [];
      for (; s = t.isInSet(i); )
        o.push(new ae(e, s)), i = s.removeFromSet(i);
      for (let l = o.length - 1; l >= 0; l--)
        this.step(o[l]);
    }
    return this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split (with the outermost nodes coming first).
  */
  split(e, t = 1, n) {
    return pi(this, e, t, n), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, n) {
    return ri(this, e, t, n), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, n) {
    return ii(this, e, t, n), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, n) {
    return St(this, e, t, n), this;
  }
}
const at = /* @__PURE__ */ Object.create(null);
class C {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, n) {
    this.$anchor = e, this.$head = t, this.ranges = n || [new Ti(e.min(t), e.max(t))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, t = w.empty) {
    let n = t.content.lastChild, i = null;
    for (let l = 0; l < t.openEnd; l++)
      i = n, n = n.lastChild;
    let s = e.steps.length, o = this.ranges;
    for (let l = 0; l < o.length; l++) {
      let { $from: a, $to: c } = o[l], u = e.mapping.slice(s);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? w.empty : t), l == 0 && nn(e, s, (n ? n.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let n = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      let { $from: o, $to: l } = i[s], a = e.mapping.slice(n), c = a.map(o.pos), u = a.map(l.pos);
      s ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, t), nn(e, n, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, n = !1) {
    let i = e.parent.inlineContent ? new I(e) : fe(e.node(0), e.parent, e.pos, e.index(), t, n);
    if (i)
      return i;
    for (let s = e.depth - 1; s >= 0; s--) {
      let o = t < 0 ? fe(e.node(0), e.node(s), e.before(s + 1), e.index(s), t, n) : fe(e.node(0), e.node(s), e.after(s + 1), e.index(s) + 1, t, n);
      if (o)
        return o;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new J(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return fe(e, e, 0, 0, 1) || new J(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return fe(e, e, e.content.size, e.childCount, -1) || new J(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let n = at[t.type];
    if (!n)
      throw new RangeError(`No selection type ${t.type} defined`);
    return n.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in at)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return at[e] = t, t.prototype.jsonID = e, t;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return I.between(this.$anchor, this.$head).getBookmark();
  }
}
C.prototype.visible = !0;
class Ti {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let en = !1;
function tn(r) {
  !en && !r.parent.inlineContent && (en = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + r.parent.type.name + ")"));
}
class I extends C {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    tn(e), tn(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let n = e.resolve(t.map(this.head));
    if (!n.parent.inlineContent)
      return C.near(n);
    let i = e.resolve(t.map(this.anchor));
    return new I(i.parent.inlineContent ? i : n, n);
  }
  replace(e, t = w.empty) {
    if (super.replace(e, t), t == w.empty) {
      let n = this.$from.marksAcross(this.$to);
      n && e.ensureMarks(n);
    }
  }
  eq(e) {
    return e instanceof I && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new et(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new I(e.resolve(t.anchor), e.resolve(t.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, t, n = t) {
    let i = e.resolve(t);
    return new this(i, n == t ? i : e.resolve(n));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, n) {
    let i = e.pos - t.pos;
    if ((!n || i) && (n = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let s = C.findFrom(t, n, !0) || C.findFrom(t, -n, !0);
      if (s)
        t = s.$head;
      else
        return C.near(t, n);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (C.findFrom(e, -n, !0) || C.findFrom(e, n, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new I(e, t);
  }
}
C.jsonID("text", I);
class et {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new et(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return I.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class R extends C {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, n = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, n), this.node = t;
  }
  map(e, t) {
    let { deleted: n, pos: i } = t.mapResult(this.anchor), s = e.resolve(i);
    return n ? C.near(s) : new R(s);
  }
  content() {
    return new w(k.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof R && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new vt(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new R(e.resolve(t.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, t) {
    return new R(e.resolve(t));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
R.prototype.visible = !1;
C.jsonID("node", R);
class vt {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: n } = e.mapResult(this.anchor);
    return t ? new et(n, n) : new vt(n);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), n = t.nodeAfter;
    return n && R.isSelectable(n) ? new R(t) : C.near(t);
  }
}
class J extends C {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = w.empty) {
    if (t == w.empty) {
      e.delete(0, e.doc.content.size);
      let n = C.atStart(e.doc);
      n.eq(e.selection) || e.setSelection(n);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new J(e);
  }
  map(e) {
    return new J(e);
  }
  eq(e) {
    return e instanceof J;
  }
  getBookmark() {
    return Ci;
  }
}
C.jsonID("all", J);
const Ci = {
  map() {
    return this;
  },
  resolve(r) {
    return new J(r);
  }
};
function fe(r, e, t, n, i, s = !1) {
  if (e.inlineContent)
    return I.create(r, t);
  for (let o = n - (i > 0 ? 0 : 1); i > 0 ? o < e.childCount : o >= 0; o += i) {
    let l = e.child(o);
    if (l.isAtom) {
      if (!s && R.isSelectable(l))
        return R.create(r, t - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = fe(r, l, t + i, i < 0 ? l.childCount : 0, i, s);
      if (a)
        return a;
    }
    t += l.nodeSize * i;
  }
  return null;
}
function nn(r, e, t) {
  let n = r.steps.length - 1;
  if (n < e)
    return;
  let i = r.steps[n];
  if (!(i instanceof N || i instanceof O))
    return;
  let s = r.mapping.maps[n], o;
  s.forEach((l, a, c, u) => {
    o == null && (o = u);
  }), r.setSelection(C.near(r.doc.resolve(o), t));
}
function rn(r, e) {
  return !e || !r ? r : r.bind(e);
}
class Oe {
  constructor(e, t, n) {
    this.name = e, this.init = rn(t.init, n), this.apply = rn(t.apply, n);
  }
}
new Oe("doc", {
  init(r) {
    return r.doc || r.schema.topNodeType.createAndFill();
  },
  apply(r) {
    return r.doc;
  }
}), new Oe("selection", {
  init(r, e) {
    return r.selection || C.atStart(e.doc);
  },
  apply(r) {
    return r.selection;
  }
}), new Oe("storedMarks", {
  init(r) {
    return r.storedMarks || null;
  },
  apply(r, e, t, n) {
    return n.selection.$cursor ? r.storedMarks : null;
  }
}), new Oe("scrollToSelection", {
  init() {
    return 0;
  },
  apply(r, e) {
    return r.scrolledIntoView ? e + 1 : e;
  }
});
function Zn(r, e, t) {
  for (let n in r) {
    let i = r[n];
    i instanceof Function ? i = i.bind(e) : n == "handleDOMEvents" && (i = Zn(i, e, {})), t[n] = i;
  }
  return t;
}
class K {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Zn(e.props, this, this.props), this.key = e.key ? e.key.key : Un("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const ct = /* @__PURE__ */ Object.create(null);
function Un(r) {
  return r in ct ? r + "$" + ++ct[r] : (ct[r] = 0, r + "$");
}
class G {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = Un(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Tt = (r, e) => r.selection.empty ? !1 : (e && e(r.tr.deleteSelection().scrollIntoView()), !0);
function Qn(r, e) {
  let { $cursor: t } = r.selection;
  return !t || (e ? !e.endOfTextblock("backward", r) : t.parentOffset > 0) ? null : t;
}
const Hn = (r, e, t) => {
  let n = Qn(r, t);
  if (!n)
    return !1;
  let i = Ct(n);
  if (!i) {
    let o = n.blockRange(), l = o && ge(o);
    return l == null ? !1 : (e && e(r.tr.lift(o, l).scrollIntoView()), !0);
  }
  let s = i.nodeBefore;
  if (ir(r, i, e, -1))
    return !0;
  if (n.parent.content.size == 0 && (me(s, "end") || R.isSelectable(s)))
    for (let o = n.depth; ; o--) {
      let l = Ye(r.doc, n.before(o), n.after(o), w.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = r.tr.step(l);
          a.setSelection(me(s, "end") ? C.findFrom(a.doc.resolve(a.mapping.map(i.pos, -1)), -1) : R.create(a.doc, i.pos - s.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (o == 1 || n.node(o - 1).childCount > 1)
        break;
    }
  return s.isAtom && i.depth == n.depth - 1 ? (e && e(r.tr.delete(i.pos - s.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, Ei = (r, e, t) => {
  let n = Qn(r, t);
  if (!n)
    return !1;
  let i = Ct(n);
  return i ? Kn(r, i, e) : !1;
}, Mi = (r, e, t) => {
  let n = Xn(r, t);
  if (!n)
    return !1;
  let i = Et(n);
  return i ? Kn(r, i, e) : !1;
};
function Kn(r, e, t) {
  let n = e.nodeBefore, i = n, s = e.pos - 1;
  for (; !i.isTextblock; s--) {
    if (i.type.spec.isolating)
      return !1;
    let u = i.lastChild;
    if (!u)
      return !1;
    i = u;
  }
  let o = e.nodeAfter, l = o, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let u = l.firstChild;
    if (!u)
      return !1;
    l = u;
  }
  let c = Ye(r.doc, s, a, w.empty);
  if (!c || c.from != s || c instanceof N && c.slice.size >= a - s)
    return !1;
  if (t) {
    let u = r.tr.step(c);
    u.setSelection(I.create(u.doc, s)), t(u.scrollIntoView());
  }
  return !0;
}
function me(r, e, t = !1) {
  for (let n = r; n; n = e == "start" ? n.firstChild : n.lastChild) {
    if (n.isTextblock)
      return !0;
    if (t && n.childCount != 1)
      return !1;
  }
  return !1;
}
const Gn = (r, e, t) => {
  let { $head: n, empty: i } = r.selection, s = n;
  if (!i)
    return !1;
  if (n.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", r) : n.parentOffset > 0)
      return !1;
    s = Ct(n);
  }
  let o = s && s.nodeBefore;
  return !o || !R.isSelectable(o) ? !1 : (e && e(r.tr.setSelection(R.create(r.doc, s.pos - o.nodeSize)).scrollIntoView()), !0);
};
function Ct(r) {
  if (!r.parent.type.spec.isolating)
    for (let e = r.depth - 1; e >= 0; e--) {
      if (r.index(e) > 0)
        return r.doc.resolve(r.before(e + 1));
      if (r.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Xn(r, e) {
  let { $cursor: t } = r.selection;
  return !t || (e ? !e.endOfTextblock("forward", r) : t.parentOffset < t.parent.content.size) ? null : t;
}
const Yn = (r, e, t) => {
  let n = Xn(r, t);
  if (!n)
    return !1;
  let i = Et(n);
  if (!i)
    return !1;
  let s = i.nodeAfter;
  if (ir(r, i, e, 1))
    return !0;
  if (n.parent.content.size == 0 && (me(s, "start") || R.isSelectable(s))) {
    let o = Ye(r.doc, n.before(), n.after(), w.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = r.tr.step(o);
        l.setSelection(me(s, "start") ? C.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : R.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == n.depth - 1 ? (e && e(r.tr.delete(i.pos, i.pos + s.nodeSize).scrollIntoView()), !0) : !1;
}, er = (r, e, t) => {
  let { $head: n, empty: i } = r.selection, s = n;
  if (!i)
    return !1;
  if (n.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", r) : n.parentOffset < n.parent.content.size)
      return !1;
    s = Et(n);
  }
  let o = s && s.nodeAfter;
  return !o || !R.isSelectable(o) ? !1 : (e && e(r.tr.setSelection(R.create(r.doc, s.pos)).scrollIntoView()), !0);
};
function Et(r) {
  if (!r.parent.type.spec.isolating)
    for (let e = r.depth - 1; e >= 0; e--) {
      let t = r.node(e);
      if (r.index(e) + 1 < t.childCount)
        return r.doc.resolve(r.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const Ri = (r, e) => {
  let t = r.selection, n = t instanceof R, i;
  if (n) {
    if (t.node.isTextblock || !ue(r.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = Xe(r.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let s = r.tr.join(i);
    n && s.setSelection(R.create(s.doc, i - r.doc.resolve(i).nodeBefore.nodeSize)), e(s.scrollIntoView());
  }
  return !0;
}, Ai = (r, e) => {
  let t = r.selection, n;
  if (t instanceof R) {
    if (t.node.isTextblock || !ue(r.doc, t.to))
      return !1;
    n = t.to;
  } else if (n = Xe(r.doc, t.to, 1), n == null)
    return !1;
  return e && e(r.tr.join(n).scrollIntoView()), !0;
}, Ii = (r, e) => {
  let { $from: t, $to: n } = r.selection, i = t.blockRange(n), s = i && ge(i);
  return s == null ? !1 : (e && e(r.tr.lift(i, s).scrollIntoView()), !0);
}, tr = (r, e) => {
  let { $head: t, $anchor: n } = r.selection;
  return !t.parent.type.spec.code || !t.sameParent(n) ? !1 : (e && e(r.tr.insertText(`
`).scrollIntoView()), !0);
};
function Mt(r) {
  for (let e = 0; e < r.edgeCount; e++) {
    let { type: t } = r.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const zi = (r, e) => {
  let { $head: t, $anchor: n } = r.selection;
  if (!t.parent.type.spec.code || !t.sameParent(n))
    return !1;
  let i = t.node(-1), s = t.indexAfter(-1), o = Mt(i.contentMatchAt(s));
  if (!o || !i.canReplaceWith(s, s, o))
    return !1;
  if (e) {
    let l = t.after(), a = r.tr.replaceWith(l, l, o.createAndFill());
    a.setSelection(C.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, nr = (r, e) => {
  let t = r.selection, { $from: n, $to: i } = t;
  if (t instanceof J || n.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let s = Mt(i.parent.contentMatchAt(i.indexAfter()));
  if (!s || !s.isTextblock)
    return !1;
  if (e) {
    let o = (!n.parentOffset && i.index() < i.parent.childCount ? n : i).pos, l = r.tr.insert(o, s.createAndFill());
    l.setSelection(I.create(l.doc, o + 1)), e(l.scrollIntoView());
  }
  return !0;
}, rr = (r, e) => {
  let { $cursor: t } = r.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let s = t.before();
    if (H(r.doc, s))
      return e && e(r.tr.split(s).scrollIntoView()), !0;
  }
  let n = t.blockRange(), i = n && ge(n);
  return i == null ? !1 : (e && e(r.tr.lift(n, i).scrollIntoView()), !0);
};
function Ni(r) {
  return (e, t) => {
    let { $from: n, $to: i } = e.selection;
    if (e.selection instanceof R && e.selection.node.isBlock)
      return !n.parentOffset || !H(e.doc, n.pos) ? !1 : (t && t(e.tr.split(n.pos).scrollIntoView()), !0);
    if (!n.depth)
      return !1;
    let s = [], o, l, a = !1, c = !1;
    for (let p = n.depth; ; p--)
      if (n.node(p).isBlock) {
        a = n.end(p) == n.pos + (n.depth - p), c = n.start(p) == n.pos - (n.depth - p), l = Mt(n.node(p - 1).contentMatchAt(n.indexAfter(p - 1))), s.unshift(a && l ? { type: l } : null), o = p;
        break;
      } else {
        if (p == 1)
          return !1;
        s.unshift(null);
      }
    let u = e.tr;
    (e.selection instanceof I || e.selection instanceof J) && u.deleteSelection();
    let f = u.mapping.map(n.pos), h = H(u.doc, f, s.length, s);
    if (h || (s[0] = l ? { type: l } : null, h = H(u.doc, f, s.length, s)), !h)
      return !1;
    if (u.split(f, s.length, s), !a && c && n.node(o).type != l) {
      let p = u.mapping.map(n.before(o)), d = u.doc.resolve(p);
      l && n.node(o - 1).canReplaceWith(d.index(), d.index() + 1, l) && u.setNodeMarkup(u.mapping.map(n.before(o)), l);
    }
    return t && t(u.scrollIntoView()), !0;
  };
}
const Oi = Ni(), $i = (r, e) => {
  let { $from: t, to: n } = r.selection, i, s = t.sharedDepth(n);
  return s == 0 ? !1 : (i = t.before(s), e && e(r.tr.setSelection(R.create(r.doc, i))), !0);
};
function Bi(r, e, t) {
  let n = e.nodeBefore, i = e.nodeAfter, s = e.index();
  return !n || !i || !n.type.compatibleContent(i.type) ? !1 : !n.content.size && e.parent.canReplace(s - 1, s) ? (t && t(r.tr.delete(e.pos - n.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(s, s + 1) || !(i.isTextblock || ue(r.doc, e.pos)) ? !1 : (t && t(r.tr.join(e.pos).scrollIntoView()), !0);
}
function ir(r, e, t, n) {
  let i = e.nodeBefore, s = e.nodeAfter, o, l, a = i.type.spec.isolating || s.type.spec.isolating;
  if (!a && Bi(r, e, t))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (o = (l = i.contentMatchAt(i.childCount)).findWrapping(s.type)) && l.matchType(o[0] || s.type).validEnd) {
    if (t) {
      let p = e.pos + s.nodeSize, d = k.empty;
      for (let x = o.length - 1; x >= 0; x--)
        d = k.from(o[x].create(null, d));
      d = k.from(i.copy(d));
      let m = r.tr.step(new O(e.pos - 1, p, e.pos, p, new w(d, 1, 0), o.length, !0)), g = m.doc.resolve(p + 2 * o.length);
      g.nodeAfter && g.nodeAfter.type == i.type && ue(m.doc, g.pos) && m.join(g.pos), t(m.scrollIntoView());
    }
    return !0;
  }
  let u = s.type.spec.isolating || n > 0 && a ? null : C.findFrom(e, 1), f = u && u.$from.blockRange(u.$to), h = f && ge(f);
  if (h != null && h >= e.depth)
    return t && t(r.tr.lift(f, h).scrollIntoView()), !0;
  if (c && me(s, "start", !0) && me(i, "end")) {
    let p = i, d = [];
    for (; d.push(p), !p.isTextblock; )
      p = p.lastChild;
    let m = s, g = 1;
    for (; !m.isTextblock; m = m.firstChild)
      g++;
    if (p.canReplace(p.childCount, p.childCount, m.content)) {
      if (t) {
        let x = k.empty;
        for (let v = d.length - 1; v >= 0; v--)
          x = k.from(d[v].copy(x));
        let y = r.tr.step(new O(e.pos - d.length, e.pos + s.nodeSize, e.pos + g, e.pos + s.nodeSize - g, new w(x, d.length, 0), 0, !0));
        t(y.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function sr(r) {
  return function(e, t) {
    let n = e.selection, i = r < 0 ? n.$from : n.$to, s = i.depth;
    for (; i.node(s).isInline; ) {
      if (!s)
        return !1;
      s--;
    }
    return i.node(s).isTextblock ? (t && t(e.tr.setSelection(I.create(e.doc, r < 0 ? i.start(s) : i.end(s)))), !0) : !1;
  };
}
const Pi = sr(-1), Fi = sr(1);
function Di(r, e = null) {
  return function(t, n) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s), l = o && Dn(o, r, e);
    return l ? (n && n(t.tr.wrap(o, l).scrollIntoView()), !0) : !1;
  };
}
function sn(r, e = null) {
  return function(t, n) {
    let i = !1;
    for (let s = 0; s < t.selection.ranges.length && !i; s++) {
      let { $from: { pos: o }, $to: { pos: l } } = t.selection.ranges[s];
      t.doc.nodesBetween(o, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(r, e)))
          if (a.type == r)
            i = !0;
          else {
            let u = t.doc.resolve(c), f = u.index();
            i = u.parent.canReplaceWith(f, f + 1, r);
          }
      });
    }
    if (!i)
      return !1;
    if (n) {
      let s = t.tr;
      for (let o = 0; o < t.selection.ranges.length; o++) {
        let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[o];
        s.setBlockType(l, a, r, e);
      }
      n(s.scrollIntoView());
    }
    return !0;
  };
}
function Rt(...r) {
  return function(e, t, n) {
    for (let i = 0; i < r.length; i++)
      if (r[i](e, t, n))
        return !0;
    return !1;
  };
}
Rt(Tt, Hn, Gn);
Rt(Tt, Yn, er);
Rt(tr, nr, rr, Oi);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function Li(r, e = null) {
  return function(t, n) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s);
    if (!o)
      return !1;
    let l = n ? t.tr : null;
    return _i(l, o, r, e) ? (n && n(l.scrollIntoView()), !0) : !1;
  };
}
function _i(r, e, t, n = null) {
  let i = !1, s = e, o = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(t) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = o.resolve(e.start - 2);
    s = new qe(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new qe(e.$from, o.resolve(e.$to.end(e.depth)), e.depth)), i = !0;
  }
  let l = Dn(s, t, n, e);
  return l ? (r && Ji(r, e, l, i, t), !0) : !1;
}
function Ji(r, e, t, n, i) {
  let s = k.empty;
  for (let u = t.length - 1; u >= 0; u--)
    s = k.from(t[u].type.create(t[u].attrs, s));
  r.step(new O(e.start - (n ? 2 : 0), e.end, e.start, e.end, new w(s, 0, 0), t.length, !0));
  let o = 0;
  for (let u = 0; u < t.length; u++)
    t[u].type == i && (o = u + 1);
  let l = t.length - o, a = e.start + t.length - (n ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, f = e.endIndex, h = !0; u < f; u++, h = !1)
    !h && H(r.doc, a, l) && (r.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
  return r;
}
function qi(r) {
  return function(e, t) {
    let { $from: n, $to: i } = e.selection, s = n.blockRange(i, (o) => o.childCount > 0 && o.firstChild.type == r);
    return s ? t ? n.node(s.depth - 1).type == r ? ji(e, t, r, s) : Wi(e, t, s) : !0 : !1;
  };
}
function ji(r, e, t, n) {
  let i = r.tr, s = n.end, o = n.$to.end(n.depth);
  s < o && (i.step(new O(s - 1, o, s, o, new w(k.from(t.create(null, n.parent.copy())), 1, 0), 1, !0)), n = new qe(i.doc.resolve(n.$from.pos), i.doc.resolve(o), n.depth));
  const l = ge(n);
  if (l == null)
    return !1;
  i.lift(n, l);
  let a = i.doc.resolve(i.mapping.map(s, -1) - 1);
  return ue(i.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && i.join(a.pos), e(i.scrollIntoView()), !0;
}
function Wi(r, e, t) {
  let n = r.tr, i = t.parent;
  for (let p = t.end, d = t.endIndex - 1, m = t.startIndex; d > m; d--)
    p -= i.child(d).nodeSize, n.delete(p - 1, p + 1);
  let s = n.doc.resolve(t.start), o = s.nodeAfter;
  if (n.mapping.map(t.end) != t.start + s.nodeAfter.nodeSize)
    return !1;
  let l = t.startIndex == 0, a = t.endIndex == i.childCount, c = s.node(-1), u = s.index(-1);
  if (!c.canReplace(u + (l ? 0 : 1), u + 1, o.content.append(a ? k.empty : k.from(i))))
    return !1;
  let f = s.pos, h = f + o.nodeSize;
  return n.step(new O(f - (l ? 1 : 0), h + (a ? 1 : 0), f + 1, h - 1, new w((l ? k.empty : k.from(i.copy(k.empty))).append(a ? k.empty : k.from(i.copy(k.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(n.scrollIntoView()), !0;
}
function Vi(r) {
  return function(e, t) {
    let { $from: n, $to: i } = e.selection, s = n.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == r);
    if (!s)
      return !1;
    let o = s.startIndex;
    if (o == 0)
      return !1;
    let l = s.parent, a = l.child(o - 1);
    if (a.type != r)
      return !1;
    if (t) {
      let c = a.lastChild && a.lastChild.type == l.type, u = k.from(c ? r.create() : null), f = new w(k.from(r.create(null, k.from(l.type.create(null, u)))), c ? 3 : 1, 0), h = s.start, p = s.end;
      t(e.tr.step(new O(h - (c ? 3 : 1), p, h, p, f, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
var Zi = Object.defineProperty, At = (r, e) => {
  for (var t in e)
    Zi(r, t, { get: e[t], enumerable: !0 });
};
function or(r) {
  const { state: e, transaction: t } = r;
  let { selection: n } = t, { doc: i } = t, { storedMarks: s } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return s;
    },
    get selection() {
      return n;
    },
    get doc() {
      return i;
    },
    get tr() {
      return n = t.selection, i = t.doc, s = t.storedMarks, t;
    }
  };
}
var Ui = class {
  constructor(r) {
    this.editor = r.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = r.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: r, editor: e, state: t } = this, { view: n } = e, { tr: i } = t, s = this.buildProps(i);
    return Object.fromEntries(
      Object.entries(r).map(([o, l]) => [o, (...c) => {
        const u = l(...c)(s);
        return !i.getMeta("preventDispatch") && !this.hasCustomState && n.dispatch(i), u;
      }])
    );
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(r, e = !0) {
    const { rawCommands: t, editor: n, state: i } = this, { view: s } = n, o = [], l = !!r, a = r || i.tr, c = () => (!l && e && !a.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(a), o.every((f) => f === !0)), u = {
      ...Object.fromEntries(
        Object.entries(t).map(([f, h]) => [f, (...d) => {
          const m = this.buildProps(a, e), g = h(...d)(m);
          return o.push(g), u;
        }])
      ),
      run: c
    };
    return u;
  }
  createCan(r) {
    const { rawCommands: e, state: t } = this, n = !1, i = r || t.tr, s = this.buildProps(i, n);
    return {
      ...Object.fromEntries(
        Object.entries(e).map(([l, a]) => [l, (...c) => a(...c)({ ...s, dispatch: void 0 })])
      ),
      chain: () => this.createChain(i, n)
    };
  }
  buildProps(r, e = !0) {
    const { rawCommands: t, editor: n, state: i } = this, { view: s } = n, o = {
      tr: r,
      editor: n,
      view: s,
      state: or({
        state: i,
        transaction: r
      }),
      dispatch: e ? () => {
      } : void 0,
      chain: () => this.createChain(r, e),
      can: () => this.createCan(r),
      get commands() {
        return Object.fromEntries(
          Object.entries(t).map(([l, a]) => [l, (...c) => a(...c)(o)])
        );
      }
    };
    return o;
  }
}, lr = {};
At(lr, {
  blur: () => Qi,
  clearContent: () => Hi,
  clearNodes: () => Ki,
  command: () => Gi,
  createParagraphNear: () => Xi,
  cut: () => Yi,
  deleteCurrentNode: () => es,
  deleteNode: () => ts,
  deleteRange: () => ns,
  deleteSelection: () => rs,
  enter: () => is,
  exitCode: () => ss,
  extendMarkRange: () => as,
  first: () => cs,
  focus: () => fs,
  forEach: () => ps,
  insertContent: () => ds,
  insertContentAt: () => ks,
  joinBackward: () => ys,
  joinDown: () => ws,
  joinForward: () => bs,
  joinItemBackward: () => Ss,
  joinItemForward: () => vs,
  joinTextblockBackward: () => Ts,
  joinTextblockForward: () => Cs,
  joinUp: () => xs,
  keyboardShortcut: () => Ms,
  lift: () => Rs,
  liftEmptyBlock: () => As,
  liftListItem: () => Is,
  newlineInCode: () => zs,
  resetAttributes: () => Ns,
  scrollIntoView: () => Os,
  selectAll: () => $s,
  selectNodeBackward: () => Bs,
  selectNodeForward: () => Ps,
  selectParentNode: () => Fs,
  selectTextblockEnd: () => Ds,
  selectTextblockStart: () => Ls,
  setContent: () => Js,
  setMark: () => eo,
  setMeta: () => to,
  setNode: () => no,
  setNodeSelection: () => ro,
  setTextDirection: () => io,
  setTextSelection: () => so,
  sinkListItem: () => oo,
  splitBlock: () => lo,
  splitListItem: () => ao,
  toggleList: () => co,
  toggleMark: () => uo,
  toggleNode: () => ho,
  toggleWrap: () => fo,
  undoInputRule: () => po,
  unsetAllMarks: () => mo,
  unsetMark: () => go,
  unsetTextDirection: () => ko,
  updateAttributes: () => xo,
  wrapIn: () => wo,
  wrapInList: () => yo
});
var Qi = () => ({ editor: r, view: e }) => (requestAnimationFrame(() => {
  var t;
  r.isDestroyed || (e.dom.blur(), (t = window?.getSelection()) == null || t.removeAllRanges());
}), !0), Hi = (r = !0) => ({ commands: e }) => e.setContent("", { emitUpdate: r }), Ki = () => ({ state: r, tr: e, dispatch: t }) => {
  const { selection: n } = e, { ranges: i } = n;
  return t && i.forEach(({ $from: s, $to: o }) => {
    r.doc.nodesBetween(s.pos, o.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: u } = e, f = c.resolve(u.map(a)), h = c.resolve(u.map(a + l.nodeSize)), p = f.blockRange(h);
      if (!p)
        return;
      const d = ge(p);
      if (l.type.isTextblock) {
        const { defaultType: m } = f.parent.contentMatchAt(f.index());
        e.setNodeMarkup(p.start, m);
      }
      (d || d === 0) && e.lift(p, d);
    });
  }), !0;
}, Gi = (r) => (e) => r(e), Xi = () => ({ state: r, dispatch: e }) => nr(r, e), Yi = (r, e) => ({ editor: t, tr: n }) => {
  const { state: i } = t, s = i.doc.slice(r.from, r.to);
  n.deleteRange(r.from, r.to);
  const o = n.mapping.map(e);
  return n.insert(o, s.content), n.setSelection(new I(n.doc.resolve(Math.max(o - 1, 0)))), !0;
}, es = () => ({ tr: r, dispatch: e }) => {
  const { selection: t } = r, n = t.$anchor.node();
  if (n.content.size > 0)
    return !1;
  const i = r.selection.$anchor;
  for (let s = i.depth; s > 0; s -= 1)
    if (i.node(s).type === n.type) {
      if (e) {
        const l = i.before(s), a = i.after(s);
        r.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
};
function P(r, e) {
  if (typeof r == "string") {
    if (!e.nodes[r])
      throw Error(`There is no node type named '${r}'. Maybe you forgot to add the extension?`);
    return e.nodes[r];
  }
  return r;
}
var ts = (r) => ({ tr: e, state: t, dispatch: n }) => {
  const i = P(r, t.schema), s = e.selection.$anchor;
  for (let o = s.depth; o > 0; o -= 1)
    if (s.node(o).type === i) {
      if (n) {
        const a = s.before(o), c = s.after(o);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, ns = (r) => ({ tr: e, dispatch: t }) => {
  const { from: n, to: i } = r;
  return t && e.delete(n, i), !0;
}, rs = () => ({ state: r, dispatch: e }) => Tt(r, e), is = () => ({ commands: r }) => r.keyboardShortcut("Enter"), ss = () => ({ state: r, dispatch: e }) => zi(r, e);
function ls(r) {
  return Object.prototype.toString.call(r) === "[object RegExp]";
}
function Ze(r, e, t = { strict: !0 }) {
  const n = Object.keys(e);
  return n.length ? n.every((i) => t.strict ? e[i] === r[i] : ls(e[i]) ? e[i].test(r[i]) : e[i] === r[i]) : !0;
}
function ar(r, e, t = {}) {
  return r.find((n) => n.type === e && Ze(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(t).map((i) => [i, n.attrs[i]])),
    t
  ));
}
function on(r, e, t = {}) {
  return !!ar(r, e, t);
}
function cr(r, e, t) {
  var n;
  if (!r || !e)
    return;
  let i = r.parent.childAfter(r.parentOffset);
  if ((!i.node || !i.node.marks.some((u) => u.type === e)) && (i = r.parent.childBefore(r.parentOffset)), !i.node || !i.node.marks.some((u) => u.type === e) || (t = t || ((n = i.node.marks[0]) == null ? void 0 : n.attrs), !ar([...i.node.marks], e, t)))
    return;
  let o = i.index, l = r.start() + i.offset, a = o + 1, c = l + i.node.nodeSize;
  for (; o > 0 && on([...r.parent.child(o - 1).marks], e, t); )
    o -= 1, l -= r.parent.child(o).nodeSize;
  for (; a < r.parent.childCount && on([...r.parent.child(a).marks], e, t); )
    c += r.parent.child(a).nodeSize, a += 1;
  return {
    from: l,
    to: c
  };
}
function ne(r, e) {
  if (typeof r == "string") {
    if (!e.marks[r])
      throw Error(`There is no mark type named '${r}'. Maybe you forgot to add the extension?`);
    return e.marks[r];
  }
  return r;
}
var as = (r, e = {}) => ({ tr: t, state: n, dispatch: i }) => {
  const s = ne(r, n.schema), { doc: o, selection: l } = t, { $from: a, from: c, to: u } = l;
  if (i) {
    const f = cr(a, s, e);
    if (f && f.from <= c && f.to >= u) {
      const h = I.create(o, f.from, f.to);
      t.setSelection(h);
    }
  }
  return !0;
}, cs = (r) => (e) => {
  const t = typeof r == "function" ? r(e) : r;
  for (let n = 0; n < t.length; n += 1)
    if (t[n](e))
      return !0;
  return !1;
};
function ur(r) {
  return r instanceof I;
}
function ie(r = 0, e = 0, t = 0) {
  return Math.min(Math.max(r, e), t);
}
function us(r, e = null) {
  if (!e)
    return null;
  const t = C.atStart(r), n = C.atEnd(r);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return n;
  const i = t.from, s = n.to;
  return e === "all" ? I.create(r, ie(0, i, s), ie(r.content.size, i, s)) : I.create(r, ie(e, i, s), ie(e, i, s));
}
function ln() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function Ue() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function hs() {
  return typeof navigator < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
}
var fs = (r = null, e = {}) => ({ editor: t, view: n, tr: i, dispatch: s }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const o = () => {
    (Ue() || ln()) && n.dom.focus(), hs() && !Ue() && !ln() && n.dom.focus({ preventScroll: !0 }), requestAnimationFrame(() => {
      t.isDestroyed || (n.focus(), e?.scrollIntoView && t.commands.scrollIntoView());
    });
  };
  try {
    if (n.hasFocus() && r === null || r === !1)
      return !0;
  } catch {
    return !1;
  }
  if (s && r === null && !ur(t.state.selection))
    return o(), !0;
  const l = us(i.doc, r) || t.state.selection, a = t.state.selection.eq(l);
  return s && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0;
}, ps = (r, e) => (t) => r.every((n, i) => e(n, { ...t, index: i })), ds = (r, e) => ({ tr: t, commands: n }) => n.insertContentAt({ from: t.selection.from, to: t.selection.to }, r, e), hr = (r) => {
  const e = r.childNodes;
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const n = e[t];
    n.nodeType === 3 && n.nodeValue && /^(\n\s\s|\n)$/.test(n.nodeValue) ? r.removeChild(n) : n.nodeType === 1 && hr(n);
  }
  return r;
};
function $e(r) {
  if (typeof window > "u")
    throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
  const e = `<body>${r}</body>`, t = new window.DOMParser().parseFromString(e, "text/html").body;
  return hr(t);
}
function Me(r, e, t) {
  if (r instanceof Z || r instanceof k)
    return r;
  t = {
    slice: !0,
    parseOptions: {},
    ...t
  };
  const n = typeof r == "object" && r !== null, i = typeof r == "string";
  if (n)
    try {
      if (Array.isArray(r) && r.length > 0)
        return k.fromArray(r.map((l) => e.nodeFromJSON(l)));
      const o = e.nodeFromJSON(r);
      return t.errorOnInvalidContent && o.check(), o;
    } catch (s) {
      if (t.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: s });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", r, "Error:", s), Me("", e, t);
    }
  if (i) {
    if (t.errorOnInvalidContent) {
      let o = !1, l = "";
      const a = new Hr({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (c) => (o = !0, l = typeof c == "string" ? c : c.outerHTML, null)
              }
            ]
          }
        })
      });
      if (t.slice ? it.fromSchema(a).parseSlice($e(r), t.parseOptions) : it.fromSchema(a).parse($e(r), t.parseOptions), t.errorOnInvalidContent && o)
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${l}`)
        });
    }
    const s = it.fromSchema(e);
    return t.slice ? s.parseSlice($e(r), t.parseOptions).content : s.parse($e(r), t.parseOptions);
  }
  return Me("", e, t);
}
function ms(r, e, t) {
  const n = r.steps.length - 1;
  if (n < e)
    return;
  const i = r.steps[n];
  if (!(i instanceof N || i instanceof O))
    return;
  const s = r.mapping.maps[n];
  let o = 0;
  s.forEach((l, a, c, u) => {
    o === 0 && (o = u);
  }), r.setSelection(C.near(r.doc.resolve(o), t));
}
var gs = (r) => !("type" in r), ks = (r, e, t) => ({ tr: n, dispatch: i, editor: s }) => {
  var o;
  if (i) {
    t = {
      parseOptions: s.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...t
    };
    let l;
    const a = (g) => {
      s.emit("contentError", {
        editor: s,
        error: g,
        disableCollaboration: () => {
          "collaboration" in s.storage && typeof s.storage.collaboration == "object" && s.storage.collaboration && (s.storage.collaboration.isDisabled = !0);
        }
      });
    }, c = {
      preserveWhitespace: "full",
      ...t.parseOptions
    };
    if (!t.errorOnInvalidContent && !s.options.enableContentCheck && s.options.emitContentError)
      try {
        Me(e, s.schema, {
          parseOptions: c,
          errorOnInvalidContent: !0
        });
      } catch (g) {
        a(g);
      }
    try {
      l = Me(e, s.schema, {
        parseOptions: c,
        errorOnInvalidContent: (o = t.errorOnInvalidContent) != null ? o : s.options.enableContentCheck
      });
    } catch (g) {
      return a(g), !1;
    }
    let { from: u, to: f } = typeof r == "number" ? { from: r, to: r } : { from: r.from, to: r.to }, h = !0, p = !0;
    if ((gs(l) ? l : [l]).forEach((g) => {
      g.check(), h = h ? g.isText && g.marks.length === 0 : !1, p = p ? g.isBlock : !1;
    }), u === f && p) {
      const { parent: g } = n.doc.resolve(u);
      g.isTextblock && !g.type.spec.code && !g.childCount && (u -= 1, f += 1);
    }
    let m;
    if (h) {
      if (Array.isArray(e))
        m = e.map((g) => g.text || "").join("");
      else if (e instanceof k) {
        let g = "";
        e.forEach((x) => {
          x.text && (g += x.text);
        }), m = g;
      } else typeof e == "object" && e && e.text ? m = e.text : m = e;
      n.insertText(m, u, f);
    } else {
      m = l;
      const g = n.doc.resolve(u), x = g.node(), y = g.parentOffset === 0, v = x.isText || x.isTextblock, E = x.content.size > 0;
      y && v && E && (u = Math.max(0, u - 1)), n.replaceWith(u, f, m);
    }
    t.updateSelection && ms(n, n.steps.length - 1, -1), t.applyInputRules && n.setMeta("applyInputRules", { from: u, text: m }), t.applyPasteRules && n.setMeta("applyPasteRules", { from: u, text: m });
  }
  return !0;
}, xs = () => ({ state: r, dispatch: e }) => Ri(r, e), ws = () => ({ state: r, dispatch: e }) => Ai(r, e), ys = () => ({ state: r, dispatch: e }) => Hn(r, e), bs = () => ({ state: r, dispatch: e }) => Yn(r, e), Ss = () => ({ state: r, dispatch: e, tr: t }) => {
  try {
    const n = Xe(r.doc, r.selection.$from.pos, -1);
    return n == null ? !1 : (t.join(n, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, vs = () => ({ state: r, dispatch: e, tr: t }) => {
  try {
    const n = Xe(r.doc, r.selection.$from.pos, 1);
    return n == null ? !1 : (t.join(n, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, Ts = () => ({ state: r, dispatch: e }) => Ei(r, e), Cs = () => ({ state: r, dispatch: e }) => Mi(r, e);
function fr() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Es(r) {
  const e = r.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let n, i, s, o;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      n = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      Ue() || fr() ? o = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return n && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), o && (t = `Meta-${t}`), s && (t = `Shift-${t}`), t;
}
var Ms = (r) => ({ editor: e, view: t, tr: n, dispatch: i }) => {
  const s = Es(r).split(/-(?!$)/), o = s.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: o === "Space" ? " " : o,
    altKey: s.includes("Alt"),
    ctrlKey: s.includes("Ctrl"),
    metaKey: s.includes("Meta"),
    shiftKey: s.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (c) => c(t, l));
  });
  return a?.steps.forEach((c) => {
    const u = c.map(n.mapping);
    u && i && n.maybeStep(u);
  }), !0;
};
function It(r, e, t = {}) {
  const { from: n, to: i, empty: s } = r.selection, o = e ? P(e, r.schema) : null, l = [];
  r.doc.nodesBetween(n, i, (f, h) => {
    if (f.isText)
      return;
    const p = Math.max(n, h), d = Math.min(i, h + f.nodeSize);
    l.push({
      node: f,
      from: p,
      to: d
    });
  });
  const a = i - n, c = l.filter((f) => o ? o.name === f.node.type.name : !0).filter((f) => Ze(f.node.attrs, t, { strict: !1 }));
  return s ? !!c.length : c.reduce((f, h) => f + h.to - h.from, 0) >= a;
}
var Rs = (r, e = {}) => ({ state: t, dispatch: n }) => {
  const i = P(r, t.schema);
  return It(t, i, e) ? Ii(t, n) : !1;
}, As = () => ({ state: r, dispatch: e }) => rr(r, e), Is = (r) => ({ state: e, dispatch: t }) => {
  const n = P(r, e.schema);
  return qi(n)(e, t);
}, zs = () => ({ state: r, dispatch: e }) => tr(r, e);
function pr(r, e) {
  return e.nodes[r] ? "node" : e.marks[r] ? "mark" : null;
}
function an(r, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(r).reduce((n, i) => (t.includes(i) || (n[i] = r[i]), n), {});
}
var Ns = (r, e) => ({ tr: t, state: n, dispatch: i }) => {
  let s = null, o = null;
  const l = pr(
    typeof r == "string" ? r : r.name,
    n.schema
  );
  if (!l)
    return !1;
  l === "node" && (s = P(r, n.schema)), l === "mark" && (o = ne(r, n.schema));
  let a = !1;
  return t.selection.ranges.forEach((c) => {
    n.doc.nodesBetween(c.$from.pos, c.$to.pos, (u, f) => {
      s && s === u.type && (a = !0, i && t.setNodeMarkup(f, void 0, an(u.attrs, e))), o && u.marks.length && u.marks.forEach((h) => {
        o === h.type && (a = !0, i && t.addMark(f, f + u.nodeSize, o.create(an(h.attrs, e))));
      });
    });
  }), a;
}, Os = () => ({ tr: r, dispatch: e }) => (e && r.scrollIntoView(), !0), $s = () => ({ tr: r, dispatch: e }) => {
  if (e) {
    const t = new J(r.doc);
    r.setSelection(t);
  }
  return !0;
}, Bs = () => ({ state: r, dispatch: e }) => Gn(r, e), Ps = () => ({ state: r, dispatch: e }) => er(r, e), Fs = () => ({ state: r, dispatch: e }) => $i(r, e), Ds = () => ({ state: r, dispatch: e }) => Fi(r, e), Ls = () => ({ state: r, dispatch: e }) => Pi(r, e);
function _s(r, e, t = {}, n = {}) {
  return Me(r, e, {
    slice: !1,
    parseOptions: t,
    errorOnInvalidContent: n.errorOnInvalidContent
  });
}
var Js = (r, { errorOnInvalidContent: e, emitUpdate: t = !0, parseOptions: n = {} } = {}) => ({ editor: i, tr: s, dispatch: o, commands: l }) => {
  const { doc: a } = s;
  if (n.preserveWhitespace !== "full") {
    const c = _s(r, i.schema, n, {
      errorOnInvalidContent: e ?? i.options.enableContentCheck
    });
    return o && s.replaceWith(0, a.content.size, c).setMeta("preventUpdate", !t), !0;
  }
  return o && s.setMeta("preventUpdate", !t), l.insertContentAt({ from: 0, to: a.content.size }, r, {
    parseOptions: n,
    errorOnInvalidContent: e ?? i.options.enableContentCheck
  });
};
function qs(r, e) {
  const t = ne(e, r.schema), { from: n, to: i, empty: s } = r.selection, o = [];
  s ? (r.storedMarks && o.push(...r.storedMarks), o.push(...r.selection.$head.marks())) : r.doc.nodesBetween(n, i, (a) => {
    o.push(...a.marks);
  });
  const l = o.find((a) => a.type.name === t.name);
  return l ? { ...l.attrs } : {};
}
function js(r, e) {
  const t = new vi(r);
  return e.forEach((n) => {
    n.steps.forEach((i) => {
      t.step(i);
    });
  }), t;
}
function Ws(r) {
  for (let e = 0; e < r.edgeCount; e += 1) {
    const { type: t } = r.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function Vs(r, e) {
  for (let t = r.depth; t > 0; t -= 1) {
    const n = r.node(t);
    if (e(n))
      return {
        pos: t > 0 ? r.before(t) : 0,
        start: r.start(t),
        depth: t,
        node: n
      };
  }
}
function zt(r) {
  return (e) => Vs(e.$from, r);
}
function Re(r, e, t) {
  return r.config[e] === void 0 && r.parent ? Re(r.parent, e, t) : typeof r.config[e] == "function" ? r.config[e].bind({
    ...t,
    parent: r.parent ? Re(r.parent, e, t) : null
  }) : r.config[e];
}
function Zs(r) {
  return typeof r == "function";
}
function kt(r, e = void 0, ...t) {
  return Zs(r) ? e ? r.bind(e)(...t) : r(...t) : r;
}
function dr(r) {
  const e = r.filter((i) => i.type === "extension"), t = r.filter((i) => i.type === "node"), n = r.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: n
  };
}
function Us(r, e, t) {
  const { from: n, to: i } = e, { blockSeparator: s = `

`, textSerializers: o = {} } = t || {};
  let l = "";
  return r.nodesBetween(n, i, (a, c, u, f) => {
    var h;
    a.isBlock && c > n && (l += s);
    const p = o?.[a.type.name];
    if (p)
      return u && (l += p({
        node: a,
        pos: c,
        parent: u,
        index: f,
        range: e
      })), !1;
    a.isText && (l += (h = a?.text) == null ? void 0 : h.slice(Math.max(n, c) - c, i - c));
  }), l;
}
function Qs(r) {
  return Object.fromEntries(
    Object.entries(r.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText])
  );
}
function Hs(r, e = JSON.stringify) {
  const t = {};
  return r.filter((n) => {
    const i = e(n);
    return Object.prototype.hasOwnProperty.call(t, i) ? !1 : t[i] = !0;
  });
}
function Ks(r) {
  const e = Hs(r);
  return e.length === 1 ? e : e.filter((t, n) => !e.filter((s, o) => o !== n).some((s) => t.oldRange.from >= s.oldRange.from && t.oldRange.to <= s.oldRange.to && t.newRange.from >= s.newRange.from && t.newRange.to <= s.newRange.to));
}
function Gs(r) {
  const { mapping: e, steps: t } = r, n = [];
  return e.maps.forEach((i, s) => {
    const o = [];
    if (i.ranges.length)
      i.forEach((l, a) => {
        o.push({ from: l, to: a });
      });
    else {
      const { from: l, to: a } = t[s];
      if (l === void 0 || a === void 0)
        return;
      o.push({ from: l, to: a });
    }
    o.forEach(({ from: l, to: a }) => {
      const c = e.slice(s).map(l, -1), u = e.slice(s).map(a), f = e.invert().map(c, -1), h = e.invert().map(u);
      n.push({
        oldRange: {
          from: f,
          to: h
        },
        newRange: {
          from: c,
          to: u
        }
      });
    });
  }), Ks(n);
}
function De(r, e, t) {
  return Object.fromEntries(
    Object.entries(t).filter(([n]) => {
      const i = r.find((s) => s.type === e && s.name === n);
      return i ? i.attribute.keepOnSplit : !1;
    })
  );
}
function Xs(r, e, t = {}) {
  const { empty: n, ranges: i } = r.selection, s = e ? ne(e, r.schema) : null;
  if (n)
    return !!(r.storedMarks || r.selection.$from.marks()).filter((f) => s ? s.name === f.type.name : !0).find((f) => Ze(f.attrs, t, { strict: !1 }));
  let o = 0;
  const l = [];
  if (i.forEach(({ $from: f, $to: h }) => {
    const p = f.pos, d = h.pos;
    r.doc.nodesBetween(p, d, (m, g) => {
      if (!m.isText && !m.marks.length)
        return;
      const x = Math.max(p, g), y = Math.min(d, g + m.nodeSize), v = y - x;
      o += v, l.push(
        ...m.marks.map((E) => ({
          mark: E,
          from: x,
          to: y
        }))
      );
    });
  }), o === 0)
    return !1;
  const a = l.filter((f) => s ? s.name === f.mark.type.name : !0).filter((f) => Ze(f.mark.attrs, t, { strict: !1 })).reduce((f, h) => f + h.to - h.from, 0), c = l.filter((f) => s ? f.mark.type !== s && f.mark.type.excludes(s) : !0).reduce((f, h) => f + h.to - h.from, 0);
  return (a > 0 ? a + c : a) >= o;
}
function cn(r, e) {
  const { nodeExtensions: t } = dr(e), n = t.find((o) => o.name === r);
  if (!n)
    return !1;
  const i = {
    name: n.name,
    options: n.options,
    storage: n.storage
  }, s = kt(Re(n, "group", i));
  return typeof s != "string" ? !1 : s.split(" ").includes("list");
}
function mr(r, {
  checkChildren: e = !0,
  ignoreWhitespace: t = !1
} = {}) {
  var n;
  if (t) {
    if (r.type.name === "hardBreak")
      return !0;
    if (r.isText)
      return /^\s*$/m.test((n = r.text) != null ? n : "");
  }
  if (r.isText)
    return !r.text;
  if (r.isAtom || r.isLeaf)
    return !1;
  if (r.content.childCount === 0)
    return !0;
  if (e) {
    let i = !0;
    return r.content.forEach((s) => {
      i !== !1 && (mr(s, { ignoreWhitespace: t, checkChildren: e }) || (i = !1));
    }), i;
  }
  return !1;
}
function Ys(r, e, t) {
  var n;
  const { selection: i } = e;
  let s = null;
  if (ur(i) && (s = i.$cursor), s) {
    const l = (n = r.storedMarks) != null ? n : s.marks();
    return s.parent.type.allowsMarkType(t) && (!!t.isInSet(l) || !l.some((c) => c.type.excludes(t)));
  }
  const { ranges: o } = i;
  return o.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? r.doc.inlineContent && r.doc.type.allowsMarkType(t) : !1;
    return r.doc.nodesBetween(l.pos, a.pos, (u, f, h) => {
      if (c)
        return !1;
      if (u.isInline) {
        const p = !h || h.type.allowsMarkType(t), d = !!t.isInSet(u.marks) || !u.marks.some((m) => m.type.excludes(t));
        c = p && d;
      }
      return !c;
    }), c;
  });
}
var eo = (r, e = {}) => ({ tr: t, state: n, dispatch: i }) => {
  const { selection: s } = t, { empty: o, ranges: l } = s, a = ne(r, n.schema);
  if (i)
    if (o) {
      const c = qs(n, a);
      t.addStoredMark(
        a.create({
          ...c,
          ...e
        })
      );
    } else
      l.forEach((c) => {
        const u = c.$from.pos, f = c.$to.pos;
        n.doc.nodesBetween(u, f, (h, p) => {
          const d = Math.max(p, u), m = Math.min(p + h.nodeSize, f);
          h.marks.find((x) => x.type === a) ? h.marks.forEach((x) => {
            a === x.type && t.addMark(
              d,
              m,
              a.create({
                ...x.attrs,
                ...e
              })
            );
          }) : t.addMark(d, m, a.create(e));
        });
      });
  return Ys(n, t, a);
}, to = (r, e) => ({ tr: t }) => (t.setMeta(r, e), !0), no = (r, e = {}) => ({ state: t, dispatch: n, chain: i }) => {
  const s = P(r, t.schema);
  let o;
  return t.selection.$anchor.sameParent(t.selection.$head) && (o = t.selection.$anchor.parent.attrs), s.isTextblock ? i().command(({ commands: l }) => sn(s, { ...o, ...e })(t) ? !0 : l.clearNodes()).command(({ state: l }) => sn(s, { ...o, ...e })(l, n)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, ro = (r) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: n } = e, i = ie(r, 0, n.content.size), s = R.create(n, i);
    e.setSelection(s);
  }
  return !0;
}, io = (r, e) => ({ tr: t, state: n, dispatch: i }) => {
  const { selection: s } = n;
  let o, l;
  return typeof e == "number" ? (o = e, l = e) : e && "from" in e && "to" in e ? (o = e.from, l = e.to) : (o = s.from, l = s.to), i && t.doc.nodesBetween(o, l, (a, c) => {
    a.isText || t.setNodeMarkup(c, void 0, {
      ...a.attrs,
      dir: r
    });
  }), !0;
}, so = (r) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: n } = e, { from: i, to: s } = typeof r == "number" ? { from: r, to: r } : r, o = I.atStart(n).from, l = I.atEnd(n).to, a = ie(i, o, l), c = ie(s, o, l), u = I.create(n, a, c);
    e.setSelection(u);
  }
  return !0;
}, oo = (r) => ({ state: e, dispatch: t }) => {
  const n = P(r, e.schema);
  return Vi(n)(e, t);
};
function un(r, e) {
  const t = r.storedMarks || r.selection.$to.parentOffset && r.selection.$from.marks();
  if (t) {
    const n = t.filter((i) => e?.includes(i.type.name));
    r.tr.ensureMarks(n);
  }
}
var lo = ({ keepMarks: r = !0 } = {}) => ({ tr: e, state: t, dispatch: n, editor: i }) => {
  const { selection: s, doc: o } = e, { $from: l, $to: a } = s, c = i.extensionManager.attributes, u = De(c, l.node().type.name, l.node().attrs);
  if (s instanceof R && s.node.isBlock)
    return !l.parentOffset || !H(o, l.pos) ? !1 : (n && (r && un(t, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const f = a.parentOffset === a.parent.content.size, h = l.depth === 0 ? void 0 : Ws(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let p = f && h ? [
    {
      type: h,
      attrs: u
    }
  ] : void 0, d = H(e.doc, e.mapping.map(l.pos), 1, p);
  if (!p && !d && H(e.doc, e.mapping.map(l.pos), 1, h ? [{ type: h }] : void 0) && (d = !0, p = h ? [
    {
      type: h,
      attrs: u
    }
  ] : void 0), n) {
    if (d && (s instanceof I && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, p), h && !f && !l.parentOffset && l.parent.type !== h)) {
      const m = e.mapping.map(l.before()), g = e.doc.resolve(m);
      l.node(-1).canReplaceWith(g.index(), g.index() + 1, h) && e.setNodeMarkup(e.mapping.map(l.before()), h);
    }
    r && un(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return d;
}, ao = (r, e = {}) => ({ tr: t, state: n, dispatch: i, editor: s }) => {
  var o;
  const l = P(r, n.schema), { $from: a, $to: c } = n.selection, u = n.selection.node;
  if (u && u.isBlock || a.depth < 2 || !a.sameParent(c))
    return !1;
  const f = a.node(-1);
  if (f.type !== l)
    return !1;
  const h = s.extensionManager.attributes;
  if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
    if (a.depth === 2 || a.node(-3).type !== l || a.index(-2) !== a.node(-2).childCount - 1)
      return !1;
    if (i) {
      let x = k.empty;
      const y = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let _ = a.depth - y; _ >= a.depth - 3; _ -= 1)
        x = k.from(a.node(_).copy(x));
      const v = (
        // eslint-disable-next-line no-nested-ternary
        a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3
      ), E = {
        ...De(h, a.node().type.name, a.node().attrs),
        ...e
      }, S = ((o = l.contentMatch.defaultType) == null ? void 0 : o.createAndFill(E)) || void 0;
      x = x.append(k.from(l.createAndFill(null, S) || void 0));
      const A = a.before(a.depth - (y - 1));
      t.replace(A, a.after(-v), new w(x, 4 - y, 0));
      let B = -1;
      t.doc.nodesBetween(A, t.doc.content.size, (_, X) => {
        if (B > -1)
          return !1;
        _.isTextblock && _.content.size === 0 && (B = X + 1);
      }), B > -1 && t.setSelection(I.near(t.doc.resolve(B))), t.scrollIntoView();
    }
    return !0;
  }
  const p = c.pos === a.end() ? f.contentMatchAt(0).defaultType : null, d = {
    ...De(h, f.type.name, f.attrs),
    ...e
  }, m = {
    ...De(h, a.node().type.name, a.node().attrs),
    ...e
  };
  t.delete(a.pos, c.pos);
  const g = p ? [
    { type: l, attrs: d },
    { type: p, attrs: m }
  ] : [{ type: l, attrs: d }];
  if (!H(t.doc, a.pos, 2))
    return !1;
  if (i) {
    const { selection: x, storedMarks: y } = n, { splittableMarks: v } = s.extensionManager, E = y || x.$to.parentOffset && x.$from.marks();
    if (t.split(a.pos, 2, g).scrollIntoView(), !E || !i)
      return !0;
    const S = E.filter((A) => v.includes(A.type.name));
    t.ensureMarks(S);
  }
  return !0;
}, ut = (r, e) => {
  const t = zt((o) => o.type === e)(r.selection);
  if (!t)
    return !0;
  const n = r.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (n === void 0)
    return !0;
  const i = r.doc.nodeAt(n);
  return t.node.type === i?.type && ue(r.doc, t.pos) && r.join(t.pos), !0;
}, ht = (r, e) => {
  const t = zt((o) => o.type === e)(r.selection);
  if (!t)
    return !0;
  const n = r.doc.resolve(t.start).after(t.depth);
  if (n === void 0)
    return !0;
  const i = r.doc.nodeAt(n);
  return t.node.type === i?.type && ue(r.doc, n) && r.join(n), !0;
}, co = (r, e, t, n = {}) => ({ editor: i, tr: s, state: o, dispatch: l, chain: a, commands: c, can: u }) => {
  const { extensions: f, splittableMarks: h } = i.extensionManager, p = P(r, o.schema), d = P(e, o.schema), { selection: m, storedMarks: g } = o, { $from: x, $to: y } = m, v = x.blockRange(y), E = g || m.$to.parentOffset && m.$from.marks();
  if (!v)
    return !1;
  const S = zt((A) => cn(A.type.name, f))(m);
  if (v.depth >= 1 && S && v.depth - S.depth <= 1) {
    if (S.node.type === p)
      return c.liftListItem(d);
    if (cn(S.node.type.name, f) && p.validContent(S.node.content) && l)
      return a().command(() => (s.setNodeMarkup(S.pos, p), !0)).command(() => ut(s, p)).command(() => ht(s, p)).run();
  }
  return !t || !E || !l ? a().command(() => u().wrapInList(p, n) ? !0 : c.clearNodes()).wrapInList(p, n).command(() => ut(s, p)).command(() => ht(s, p)).run() : a().command(() => {
    const A = u().wrapInList(p, n), B = E.filter((_) => h.includes(_.type.name));
    return s.ensureMarks(B), A ? !0 : c.clearNodes();
  }).wrapInList(p, n).command(() => ut(s, p)).command(() => ht(s, p)).run();
}, uo = (r, e = {}, t = {}) => ({ state: n, commands: i }) => {
  const { extendEmptyMarkRange: s = !1 } = t, o = ne(r, n.schema);
  return Xs(n, o, e) ? i.unsetMark(o, { extendEmptyMarkRange: s }) : i.setMark(o, e);
}, ho = (r, e, t = {}) => ({ state: n, commands: i }) => {
  const s = P(r, n.schema), o = P(e, n.schema), l = It(n, s, t);
  let a;
  return n.selection.$anchor.sameParent(n.selection.$head) && (a = n.selection.$anchor.parent.attrs), l ? i.setNode(o, a) : i.setNode(s, { ...a, ...t });
}, fo = (r, e = {}) => ({ state: t, commands: n }) => {
  const i = P(r, t.schema);
  return It(t, i, e) ? n.lift(i) : n.wrapIn(i, e);
}, po = () => ({ state: r, dispatch: e }) => {
  const t = r.plugins;
  for (let n = 0; n < t.length; n += 1) {
    const i = t[n];
    let s;
    if (i.spec.isInputRules && (s = i.getState(r))) {
      if (e) {
        const o = r.tr, l = s.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          o.step(l.steps[a].invert(l.docs[a]));
        if (s.text) {
          const a = o.doc.resolve(s.from).marks();
          o.replaceWith(s.from, s.to, r.schema.text(s.text, a));
        } else
          o.delete(s.from, s.to);
      }
      return !0;
    }
  }
  return !1;
}, mo = () => ({ tr: r, dispatch: e }) => {
  const { selection: t } = r, { empty: n, ranges: i } = t;
  return n || e && i.forEach((s) => {
    r.removeMark(s.$from.pos, s.$to.pos);
  }), !0;
}, go = (r, e = {}) => ({ tr: t, state: n, dispatch: i }) => {
  var s;
  const { extendEmptyMarkRange: o = !1 } = e, { selection: l } = t, a = ne(r, n.schema), { $from: c, empty: u, ranges: f } = l;
  if (!i)
    return !0;
  if (u && o) {
    let { from: h, to: p } = l;
    const d = (s = c.marks().find((g) => g.type === a)) == null ? void 0 : s.attrs, m = cr(c, a, d);
    m && (h = m.from, p = m.to), t.removeMark(h, p, a);
  } else
    f.forEach((h) => {
      t.removeMark(h.$from.pos, h.$to.pos, a);
    });
  return t.removeStoredMark(a), !0;
}, ko = (r) => ({ tr: e, state: t, dispatch: n }) => {
  const { selection: i } = t;
  let s, o;
  return typeof r == "number" ? (s = r, o = r) : r && "from" in r && "to" in r ? (s = r.from, o = r.to) : (s = i.from, o = i.to), n && e.doc.nodesBetween(s, o, (l, a) => {
    if (l.isText)
      return;
    const c = { ...l.attrs };
    delete c.dir, e.setNodeMarkup(a, void 0, c);
  }), !0;
}, xo = (r, e = {}) => ({ tr: t, state: n, dispatch: i }) => {
  let s = null, o = null;
  const l = pr(
    typeof r == "string" ? r : r.name,
    n.schema
  );
  if (!l)
    return !1;
  l === "node" && (s = P(r, n.schema)), l === "mark" && (o = ne(r, n.schema));
  let a = !1;
  return t.selection.ranges.forEach((c) => {
    const u = c.$from.pos, f = c.$to.pos;
    let h, p, d, m;
    t.selection.empty ? n.doc.nodesBetween(u, f, (g, x) => {
      s && s === g.type && (a = !0, d = Math.max(x, u), m = Math.min(x + g.nodeSize, f), h = x, p = g);
    }) : n.doc.nodesBetween(u, f, (g, x) => {
      x < u && s && s === g.type && (a = !0, d = Math.max(x, u), m = Math.min(x + g.nodeSize, f), h = x, p = g), x >= u && x <= f && (s && s === g.type && (a = !0, i && t.setNodeMarkup(x, void 0, {
        ...g.attrs,
        ...e
      })), o && g.marks.length && g.marks.forEach((y) => {
        if (o === y.type && (a = !0, i)) {
          const v = Math.max(x, u), E = Math.min(x + g.nodeSize, f);
          t.addMark(
            v,
            E,
            o.create({
              ...y.attrs,
              ...e
            })
          );
        }
      }));
    }), p && (h !== void 0 && i && t.setNodeMarkup(h, void 0, {
      ...p.attrs,
      ...e
    }), o && p.marks.length && p.marks.forEach((g) => {
      o === g.type && i && t.addMark(
        d,
        m,
        o.create({
          ...g.attrs,
          ...e
        })
      );
    }));
  }), a;
}, wo = (r, e = {}) => ({ state: t, dispatch: n }) => {
  const i = P(r, t.schema);
  return Di(i, e)(t, n);
}, yo = (r, e = {}) => ({ state: t, dispatch: n }) => {
  const i = P(r, t.schema);
  return Li(i, e)(t, n);
};
function bo(r) {
  return Object.prototype.toString.call(r).slice(8, -1);
}
function Be(r) {
  return bo(r) !== "Object" ? !1 : r.constructor === Object && Object.getPrototypeOf(r) === Object.prototype;
}
function gr(r, e) {
  const t = { ...r };
  return Be(r) && Be(e) && Object.keys(e).forEach((n) => {
    Be(e[n]) && Be(r[n]) ? t[n] = gr(r[n], e[n]) : t[n] = e[n];
  }), t;
}
var So = class {
  constructor(r = {}) {
    this.type = "extendable", this.parent = null, this.child = null, this.name = "", this.config = {
      name: this.name
    }, this.config = {
      ...this.config,
      ...r
    }, this.name = this.config.name;
  }
  get options() {
    return {
      ...kt(
        Re(this, "addOptions", {
          name: this.name
        })
      ) || {}
    };
  }
  get storage() {
    return {
      ...kt(
        Re(this, "addStorage", {
          name: this.name,
          options: this.options
        })
      ) || {}
    };
  }
  configure(r = {}) {
    const e = this.extend({
      ...this.config,
      addOptions: () => gr(this.options, r)
    });
    return e.name = this.name, e.parent = this.parent, e;
  }
  extend(r = {}) {
    const e = new this.constructor({ ...this.config, ...r });
    return e.parent = this, this.child = e, e.name = "name" in r ? r.name : e.parent.name, e;
  }
}, vo = {};
At(vo, {
  ClipboardTextSerializer: () => To,
  Commands: () => Co,
  Delete: () => Eo,
  Drop: () => Mo,
  Editable: () => Ro,
  FocusEvents: () => Ao,
  Keymap: () => Io,
  Paste: () => zo,
  Tabindex: () => No,
  TextDirection: () => Oo,
  focusEventsPluginKey: () => xr
});
var V = class kr extends So {
  constructor() {
    super(...arguments), this.type = "extension";
  }
  /**
   * Create a new Extension instance
   * @param config - Extension configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const t = typeof e == "function" ? e() : e;
    return new kr(t);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const t = typeof e == "function" ? e() : e;
    return super.extend(t);
  }
}, To = V.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new K({
        key: new G("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: r } = this, { state: e, schema: t } = r, { doc: n, selection: i } = e, { ranges: s } = i, o = Math.min(...s.map((u) => u.$from.pos)), l = Math.max(...s.map((u) => u.$to.pos)), a = Qs(t);
            return Us(n, { from: o, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), Co = V.create({
  name: "commands",
  addCommands() {
    return {
      ...lr
    };
  }
}), Eo = V.create({
  name: "delete",
  onUpdate({ transaction: r, appendedTransactions: e }) {
    var t, n, i;
    const s = () => {
      var o, l, a, c;
      if ((c = (a = (l = (o = this.editor.options.coreExtensionOptions) == null ? void 0 : o.delete) == null ? void 0 : l.filterTransaction) == null ? void 0 : a.call(l, r)) != null ? c : r.getMeta("y-sync$"))
        return;
      const u = js(r.before, [r, ...e]);
      Gs(u).forEach((p) => {
        u.mapping.mapResult(p.oldRange.from).deletedAfter && u.mapping.mapResult(p.oldRange.to).deletedBefore && u.before.nodesBetween(p.oldRange.from, p.oldRange.to, (d, m) => {
          const g = m + d.nodeSize - 2, x = p.oldRange.from <= m && g <= p.oldRange.to;
          this.editor.emit("delete", {
            type: "node",
            node: d,
            from: m,
            to: g,
            newFrom: u.mapping.map(m),
            newTo: u.mapping.map(g),
            deletedRange: p.oldRange,
            newRange: p.newRange,
            partial: !x,
            editor: this.editor,
            transaction: r,
            combinedTransform: u
          });
        });
      });
      const h = u.mapping;
      u.steps.forEach((p, d) => {
        var m, g;
        if (p instanceof W) {
          const x = h.slice(d).map(p.from, -1), y = h.slice(d).map(p.to), v = h.invert().map(x, -1), E = h.invert().map(y), S = (m = u.doc.nodeAt(x - 1)) == null ? void 0 : m.marks.some((B) => B.eq(p.mark)), A = (g = u.doc.nodeAt(y)) == null ? void 0 : g.marks.some((B) => B.eq(p.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: p.mark,
            from: p.from,
            to: p.to,
            deletedRange: {
              from: v,
              to: E
            },
            newRange: {
              from: x,
              to: y
            },
            partial: !!(A || S),
            editor: this.editor,
            transaction: r,
            combinedTransform: u
          });
        }
      });
    };
    (i = (n = (t = this.editor.options.coreExtensionOptions) == null ? void 0 : t.delete) == null ? void 0 : n.async) == null || i ? setTimeout(s, 0) : s();
  }
}), Mo = V.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new K({
        key: new G("tiptapDrop"),
        props: {
          handleDrop: (r, e, t, n) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: t,
              moved: n
            });
          }
        }
      })
    ];
  }
}), Ro = V.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new K({
        key: new G("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), xr = new G("focusEvents"), Ao = V.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: r } = this;
    return [
      new K({
        key: xr,
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              r.isFocused = !0;
              const n = r.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(n), !1;
            },
            blur: (e, t) => {
              r.isFocused = !1;
              const n = r.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(n), !1;
            }
          }
        }
      })
    ];
  }
}), Io = V.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const r = () => this.editor.commands.first(({ commands: o }) => [
      () => o.undoInputRule(),
      // maybe convert first text block node to default node
      () => o.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: u, $anchor: f } = a, { pos: h, parent: p } = f, d = f.parent.isTextblock && h > 0 ? l.doc.resolve(h - 1) : f, m = d.parent.type.spec.isolating, g = f.pos - f.parentOffset, x = m && d.parent.childCount === 1 ? g === f.pos : C.atStart(c).from === h;
        return !u || !p.type.isTextblock || p.textContent.length || !x || x && f.parent.type.name === "paragraph" ? !1 : o.clearNodes();
      }),
      () => o.deleteSelection(),
      () => o.joinBackward(),
      () => o.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: o }) => [
      () => o.deleteSelection(),
      () => o.deleteCurrentNode(),
      () => o.joinForward(),
      () => o.selectNodeForward()
    ]), n = {
      Enter: () => this.editor.commands.first(({ commands: o }) => [
        () => o.newlineInCode(),
        () => o.createParagraphNear(),
        () => o.liftEmptyBlock(),
        () => o.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: r,
      "Mod-Backspace": r,
      "Shift-Backspace": r,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...n
    }, s = {
      ...n,
      "Ctrl-h": r,
      "Alt-Backspace": r,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return Ue() || fr() ? s : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new K({
        key: new G("clearDocument"),
        appendTransaction: (r, e, t) => {
          if (r.some((m) => m.getMeta("composition")))
            return;
          const n = r.some((m) => m.docChanged) && !e.doc.eq(t.doc), i = r.some((m) => m.getMeta("preventClearDocument"));
          if (!n || i)
            return;
          const { empty: s, from: o, to: l } = e.selection, a = C.atStart(e.doc).from, c = C.atEnd(e.doc).to;
          if (s || !(o === a && l === c) || !mr(t.doc))
            return;
          const h = t.tr, p = or({
            state: t,
            transaction: h
          }), { commands: d } = new Ui({
            editor: this.editor,
            state: p
          });
          if (d.clearNodes(), !!h.steps.length)
            return h;
        }
      })
    ];
  }
}), zo = V.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new K({
        key: new G("tiptapPaste"),
        props: {
          handlePaste: (r, e, t) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: t
            });
          }
        }
      })
    ];
  }
}), No = V.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new K({
        key: new G("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
}), Oo = V.create({
  name: "textDirection",
  addOptions() {
    return {
      direction: void 0
    };
  },
  addGlobalAttributes() {
    if (!this.options.direction)
      return [];
    const { nodeExtensions: r } = dr(this.extensions);
    return [
      {
        types: r.filter((e) => e.name !== "text").map((e) => e.name),
        attributes: {
          dir: {
            default: this.options.direction,
            parseHTML: (e) => {
              const t = e.getAttribute("dir");
              return t && (t === "ltr" || t === "rtl" || t === "auto") ? t : this.options.direction;
            },
            renderHTML: (e) => e.dir ? {
              dir: e.dir
            } : {}
          }
        }
      }
    ];
  },
  addProseMirrorPlugins() {
    return [
      new K({
        key: new G("textDirection"),
        props: {
          attributes: () => {
            const r = this.options.direction;
            return r ? {
              dir: r
            } : {};
          }
        }
      })
    ];
  }
}), $o = {};
At($o, {
  createAtomBlockMarkdownSpec: () => Bo,
  createBlockMarkdownSpec: () => Po,
  createInlineMarkdownSpec: () => Lo,
  parseAttributes: () => Nt,
  parseIndentedBlocks: () => _o,
  renderNestedMarkdownContent: () => Jo,
  serializeAttributes: () => Ot
});
function Nt(r) {
  if (!r?.trim())
    return {};
  const e = {}, t = [], n = r.replace(/["']([^"']*)["']/g, (c) => (t.push(c), `__QUOTED_${t.length - 1}__`)), i = n.match(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);
  if (i) {
    const c = i.map((u) => u.trim().slice(1));
    e.class = c.join(" ");
  }
  const s = n.match(/(?:^|\s)#([a-zA-Z][\w-]*)/);
  s && (e.id = s[1]);
  const o = /([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g;
  Array.from(n.matchAll(o)).forEach(([, c, u]) => {
    var f;
    const h = parseInt(((f = u.match(/__QUOTED_(\d+)__/)) == null ? void 0 : f[1]) || "0", 10), p = t[h];
    p && (e[c] = p.slice(1, -1));
  });
  const a = n.replace(/(?:^|\s)\.([a-zA-Z][\w-]*)/g, "").replace(/(?:^|\s)#([a-zA-Z][\w-]*)/g, "").replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, "").trim();
  return a && a.split(/\s+/).filter(Boolean).forEach((u) => {
    u.match(/^[a-zA-Z][\w-]*$/) && (e[u] = !0);
  }), e;
}
function Ot(r) {
  if (!r || Object.keys(r).length === 0)
    return "";
  const e = [];
  return r.class && String(r.class).split(/\s+/).filter(Boolean).forEach((n) => e.push(`.${n}`)), r.id && e.push(`#${r.id}`), Object.entries(r).forEach(([t, n]) => {
    t === "class" || t === "id" || (n === !0 ? e.push(t) : n !== !1 && n != null && e.push(`${t}="${String(n)}"`));
  }), e.join(" ");
}
function Bo(r) {
  const {
    nodeName: e,
    name: t,
    parseAttributes: n = Nt,
    serializeAttributes: i = Ot,
    defaultAttributes: s = {},
    requiredAttributes: o = [],
    allowedAttributes: l
  } = r, a = t || e, c = (u) => {
    if (!l)
      return u;
    const f = {};
    return l.forEach((h) => {
      h in u && (f[h] = u[h]);
    }), f;
  };
  return {
    parseMarkdown: (u, f) => {
      const h = { ...s, ...u.attributes };
      return f.createNode(e, h, []);
    },
    markdownTokenizer: {
      name: e,
      level: "block",
      start(u) {
        var f;
        const h = new RegExp(`^:::${a}(?:\\s|$)`, "m"), p = (f = u.match(h)) == null ? void 0 : f.index;
        return p !== void 0 ? p : -1;
      },
      tokenize(u, f, h) {
        const p = new RegExp(`^:::${a}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`), d = u.match(p);
        if (!d)
          return;
        const m = d[1] || "", g = n(m);
        if (!o.find((y) => !(y in g)))
          return {
            type: e,
            raw: d[0],
            attributes: g
          };
      }
    },
    renderMarkdown: (u) => {
      const f = c(u.attrs || {}), h = i(f), p = h ? ` {${h}}` : "";
      return `:::${a}${p} :::`;
    }
  };
}
function Po(r) {
  const {
    nodeName: e,
    name: t,
    getContent: n,
    parseAttributes: i = Nt,
    serializeAttributes: s = Ot,
    defaultAttributes: o = {},
    content: l = "block",
    allowedAttributes: a
  } = r, c = t || e, u = (f) => {
    if (!a)
      return f;
    const h = {};
    return a.forEach((p) => {
      p in f && (h[p] = f[p]);
    }), h;
  };
  return {
    parseMarkdown: (f, h) => {
      let p;
      if (n) {
        const m = n(f);
        p = typeof m == "string" ? [{ type: "text", text: m }] : m;
      } else l === "block" ? p = h.parseChildren(f.tokens || []) : p = h.parseInline(f.tokens || []);
      const d = { ...o, ...f.attributes };
      return h.createNode(e, d, p);
    },
    markdownTokenizer: {
      name: e,
      level: "block",
      start(f) {
        var h;
        const p = new RegExp(`^:::${c}`, "m"), d = (h = f.match(p)) == null ? void 0 : h.index;
        return d !== void 0 ? d : -1;
      },
      tokenize(f, h, p) {
        var d;
        const m = new RegExp(`^:::${c}(?:\\s+\\{([^}]*)\\})?\\s*\\n`), g = f.match(m);
        if (!g)
          return;
        const [x, y = ""] = g, v = i(y);
        let E = 1;
        const S = x.length;
        let A = "";
        const B = /^:::([\w-]*)(\s.*)?/gm, _ = f.slice(S);
        for (B.lastIndex = 0; ; ) {
          const X = B.exec(_);
          if (X === null)
            break;
          const Ie = X.index, zr = X[1];
          if (!((d = X[2]) != null && d.endsWith(":::"))) {
            if (zr)
              E += 1;
            else if (E -= 1, E === 0) {
              const jt = _.slice(0, Ie);
              A = jt.trim();
              const Nr = f.slice(0, S + Ie + X[0].length);
              let Y = [];
              if (A)
                if (l === "block")
                  for (Y = p.blockTokens(jt), Y.forEach((U) => {
                    U.text && (!U.tokens || U.tokens.length === 0) && (U.tokens = p.inlineTokens(U.text));
                  }); Y.length > 0; ) {
                    const U = Y[Y.length - 1];
                    if (U.type === "paragraph" && (!U.text || U.text.trim() === ""))
                      Y.pop();
                    else
                      break;
                  }
                else
                  Y = p.inlineTokens(A);
              return {
                type: e,
                raw: Nr,
                attributes: v,
                content: A,
                tokens: Y
              };
            }
          }
        }
      }
    },
    renderMarkdown: (f, h) => {
      const p = u(f.attrs || {}), d = s(p), m = d ? ` {${d}}` : "", g = h.renderChildren(f.content || [], `

`);
      return `:::${c}${m}

${g}

:::`;
    }
  };
}
function Fo(r) {
  if (!r.trim())
    return {};
  const e = {}, t = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
  let n = t.exec(r);
  for (; n !== null; ) {
    const [, i, s, o] = n;
    e[i] = s || o, n = t.exec(r);
  }
  return e;
}
function Do(r) {
  return Object.entries(r).filter(([, e]) => e != null).map(([e, t]) => `${e}="${t}"`).join(" ");
}
function Lo(r) {
  const {
    nodeName: e,
    name: t,
    getContent: n,
    parseAttributes: i = Fo,
    serializeAttributes: s = Do,
    defaultAttributes: o = {},
    selfClosing: l = !1,
    allowedAttributes: a
  } = r, c = t || e, u = (h) => {
    if (!a)
      return h;
    const p = {};
    return a.forEach((d) => {
      const m = typeof d == "string" ? d : d.name, g = typeof d == "string" ? void 0 : d.skipIfDefault;
      if (m in h) {
        const x = h[m];
        if (g !== void 0 && x === g)
          return;
        p[m] = x;
      }
    }), p;
  }, f = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return {
    parseMarkdown: (h, p) => {
      const d = { ...o, ...h.attributes };
      if (l)
        return p.createNode(e, d);
      const m = n ? n(h) : h.content || "";
      return m ? p.createNode(e, d, [p.createTextNode(m)]) : p.createNode(e, d, []);
    },
    markdownTokenizer: {
      name: e,
      level: "inline",
      start(h) {
        const p = l ? new RegExp(`\\[${f}\\s*[^\\]]*\\]`) : new RegExp(`\\[${f}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${f}\\]`), d = h.match(p), m = d?.index;
        return m !== void 0 ? m : -1;
      },
      tokenize(h, p, d) {
        const m = l ? new RegExp(`^\\[${f}\\s*([^\\]]*)\\]`) : new RegExp(`^\\[${f}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${f}\\]`), g = h.match(m);
        if (!g)
          return;
        let x = "", y = "";
        if (l) {
          const [, E] = g;
          y = E;
        } else {
          const [, E, S] = g;
          y = E, x = S || "";
        }
        const v = i(y.trim());
        return {
          type: e,
          raw: g[0],
          content: x.trim(),
          attributes: v
        };
      }
    },
    renderMarkdown: (h) => {
      let p = "";
      n ? p = n(h) : h.content && h.content.length > 0 && (p = h.content.filter((x) => x.type === "text").map((x) => x.text).join(""));
      const d = u(h.attrs || {}), m = s(d), g = m ? ` ${m}` : "";
      return l ? `[${c}${g}]` : `[${c}${g}]${p}[/${c}]`;
    }
  };
}
function _o(r, e, t) {
  var n, i, s, o;
  const l = r.split(`
`), a = [];
  let c = "", u = 0;
  const f = e.baseIndentSize || 2;
  for (; u < l.length; ) {
    const h = l[u], p = h.match(e.itemPattern);
    if (!p) {
      if (a.length > 0)
        break;
      if (h.trim() === "") {
        u += 1, c = `${c}${h}
`;
        continue;
      } else
        return;
    }
    const d = e.extractItemData(p), { indentLevel: m, mainContent: g } = d;
    c = `${c}${h}
`;
    const x = [g];
    for (u += 1; u < l.length; ) {
      const S = l[u];
      if (S.trim() === "") {
        const B = l.slice(u + 1).findIndex((Ie) => Ie.trim() !== "");
        if (B === -1)
          break;
        if ((((i = (n = l[u + 1 + B].match(/^(\s*)/)) == null ? void 0 : n[1]) == null ? void 0 : i.length) || 0) > m) {
          x.push(S), c = `${c}${S}
`, u += 1;
          continue;
        } else
          break;
      }
      if ((((o = (s = S.match(/^(\s*)/)) == null ? void 0 : s[1]) == null ? void 0 : o.length) || 0) > m)
        x.push(S), c = `${c}${S}
`, u += 1;
      else
        break;
    }
    let y;
    const v = x.slice(1);
    if (v.length > 0) {
      const S = v.map((A) => A.slice(m + f)).join(`
`);
      S.trim() && (e.customNestedParser ? y = e.customNestedParser(S) : y = t.blockTokens(S));
    }
    const E = e.createToken(d, y);
    a.push(E);
  }
  if (a.length !== 0)
    return {
      items: a,
      raw: c
    };
}
function Jo(r, e, t, n) {
  if (!r || !Array.isArray(r.content))
    return "";
  const i = typeof t == "function" ? t(n) : t, [s, ...o] = r.content, l = e.renderChildren([s]), a = [`${i}${l}`];
  return o && o.length > 0 && o.forEach((c) => {
    const u = e.renderChildren([c]);
    if (u) {
      const f = u.split(`
`).map((h) => h ? e.indent(h) : "").join(`
`);
      a.push(f);
    }
  }), a.join(`
`);
}
function $t() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var he = $t();
function wr(r) {
  he = r;
}
var re = { exec: () => null };
function b(r, e = "") {
  let t = typeof r == "string" ? r : r.source, n = { replace: (i, s) => {
    let o = typeof s == "string" ? s : s.source;
    return o = o.replace(D.caret, "$1"), t = t.replace(i, o), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
var qo = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), D = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (r) => new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}#`), htmlBeginRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}<(?:[a-z].*>|!--)`, "i"), blockquoteBeginRegex: (r) => new RegExp(`^ {0,${Math.min(3, r - 1)}}>`) }, jo = /^(?:[ \t]*(?:\n|$))+/, Wo = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Vo = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Ae = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Zo = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Bt = / {0,3}(?:[*+-]|\d{1,9}[.)])/, yr = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, br = b(yr).replace(/bull/g, Bt).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Uo = b(yr).replace(/bull/g, Bt).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Pt = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Qo = /^[^\n]+/, Ft = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Ho = b(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Ft).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Ko = b(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Bt).getRegex(), tt = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Dt = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Go = b("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Dt).replace("tag", tt).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Sr = b(Pt).replace("hr", Ae).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", tt).getRegex(), Xo = b(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Sr).getRegex(), Lt = { blockquote: Xo, code: Wo, def: Ho, fences: Vo, heading: Zo, hr: Ae, html: Go, lheading: br, list: Ko, newline: jo, paragraph: Sr, table: re, text: Qo }, hn = b("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Ae).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", tt).getRegex(), Yo = { ...Lt, lheading: Uo, table: hn, paragraph: b(Pt).replace("hr", Ae).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", hn).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", tt).getRegex() }, el = { ...Lt, html: b(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Dt).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: re, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: b(Pt).replace("hr", Ae).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", br).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, tl = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, nl = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, vr = /^( {2,}|\\)\n(?!\s*$)/, rl = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, nt = /[\p{P}\p{S}]/u, _t = /[\s\p{P}\p{S}]/u, Tr = /[^\s\p{P}\p{S}]/u, il = b(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, _t).getRegex(), Cr = /(?!~)[\p{P}\p{S}]/u, sl = /(?!~)[\s\p{P}\p{S}]/u, ol = /(?:[^\s\p{P}\p{S}]|~)/u, Er = /(?![*_])[\p{P}\p{S}]/u, ll = /(?![*_])[\s\p{P}\p{S}]/u, al = /(?:[^\s\p{P}\p{S}]|[*_])/u, cl = b(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", qo ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Mr = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, ul = b(Mr, "u").replace(/punct/g, nt).getRegex(), hl = b(Mr, "u").replace(/punct/g, Cr).getRegex(), Rr = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", fl = b(Rr, "gu").replace(/notPunctSpace/g, Tr).replace(/punctSpace/g, _t).replace(/punct/g, nt).getRegex(), pl = b(Rr, "gu").replace(/notPunctSpace/g, ol).replace(/punctSpace/g, sl).replace(/punct/g, Cr).getRegex(), dl = b("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Tr).replace(/punctSpace/g, _t).replace(/punct/g, nt).getRegex(), ml = b(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, Er).getRegex(), gl = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", kl = b(gl, "gu").replace(/notPunctSpace/g, al).replace(/punctSpace/g, ll).replace(/punct/g, Er).getRegex(), xl = b(/\\(punct)/, "gu").replace(/punct/g, nt).getRegex(), wl = b(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), yl = b(Dt).replace("(?:-->|$)", "-->").getRegex(), bl = b("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", yl).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Qe = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Sl = b(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Qe).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ar = b(/^!?\[(label)\]\[(ref)\]/).replace("label", Qe).replace("ref", Ft).getRegex(), Ir = b(/^!?\[(ref)\](?:\[\])?/).replace("ref", Ft).getRegex(), vl = b("reflink|nolink(?!\\()", "g").replace("reflink", Ar).replace("nolink", Ir).getRegex(), fn = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Jt = { _backpedal: re, anyPunctuation: xl, autolink: wl, blockSkip: cl, br: vr, code: nl, del: re, delLDelim: re, delRDelim: re, emStrongLDelim: ul, emStrongRDelimAst: fl, emStrongRDelimUnd: dl, escape: tl, link: Sl, nolink: Ir, punctuation: il, reflink: Ar, reflinkSearch: vl, tag: bl, text: rl, url: re }, Tl = { ...Jt, link: b(/^!?\[(label)\]\((.*?)\)/).replace("label", Qe).getRegex(), reflink: b(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Qe).getRegex() }, xt = { ...Jt, emStrongRDelimAst: pl, emStrongLDelim: hl, delLDelim: ml, delRDelim: kl, url: b(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", fn).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: b(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", fn).getRegex() }, Cl = { ...xt, br: b(vr).replace("{2,}", "*").getRegex(), text: b(xt.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Pe = { normal: Lt, gfm: Yo, pedantic: el }, ke = { normal: Jt, gfm: xt, breaks: Cl, pedantic: Tl }, El = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, pn = (r) => El[r];
function Q(r, e) {
  if (e) {
    if (D.escapeTest.test(r)) return r.replace(D.escapeReplace, pn);
  } else if (D.escapeTestNoEncode.test(r)) return r.replace(D.escapeReplaceNoEncode, pn);
  return r;
}
function dn(r) {
  try {
    r = encodeURI(r).replace(D.percentDecode, "%");
  } catch {
    return null;
  }
  return r;
}
function mn(r, e) {
  let t = r.replace(D.findPipe, (s, o, l) => {
    let a = !1, c = o;
    for (; --c >= 0 && l[c] === "\\"; ) a = !a;
    return a ? "|" : " |";
  }), n = t.split(D.splitPipe), i = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; i < n.length; i++) n[i] = n[i].trim().replace(D.slashPipe, "|");
  return n;
}
function xe(r, e, t) {
  let n = r.length;
  if (n === 0) return "";
  let i = 0;
  for (; i < n && r.charAt(n - i - 1) === e; )
    i++;
  return r.slice(0, n - i);
}
function Ml(r, e) {
  if (r.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < r.length; n++) if (r[n] === "\\") n++;
  else if (r[n] === e[0]) t++;
  else if (r[n] === e[1] && (t--, t < 0)) return n;
  return t > 0 ? -2 : -1;
}
function Rl(r, e = 0) {
  let t = e, n = "";
  for (let i of r) if (i === "	") {
    let s = 4 - t % 4;
    n += " ".repeat(s), t += s;
  } else n += i, t++;
  return n;
}
function gn(r, e, t, n, i) {
  let s = e.href, o = e.title || null, l = r[1].replace(i.other.outputLinkReplace, "$1");
  n.state.inLink = !0;
  let a = { type: r[0].charAt(0) === "!" ? "image" : "link", raw: t, href: s, title: o, text: l, tokens: n.inlineTokens(l) };
  return n.state.inLink = !1, a;
}
function Al(r, e, t) {
  let n = r.match(t.other.indentCodeCompensation);
  if (n === null) return e;
  let i = n[1];
  return e.split(`
`).map((s) => {
    let o = s.match(t.other.beginningSpace);
    if (o === null) return s;
    let [l] = o;
    return l.length >= i.length ? s.slice(i.length) : s;
  }).join(`
`);
}
var He = class {
  options;
  rules;
  lexer;
  constructor(r) {
    this.options = r || he;
  }
  space(r) {
    let e = this.rules.block.newline.exec(r);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(r) {
    let e = this.rules.block.code.exec(r);
    if (e) {
      let t = e[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: e[0], codeBlockStyle: "indented", text: this.options.pedantic ? t : xe(t, `
`) };
    }
  }
  fences(r) {
    let e = this.rules.block.fences.exec(r);
    if (e) {
      let t = e[0], n = Al(t, e[3] || "", this.rules);
      return { type: "code", raw: t, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: n };
    }
  }
  heading(r) {
    let e = this.rules.block.heading.exec(r);
    if (e) {
      let t = e[2].trim();
      if (this.rules.other.endingHash.test(t)) {
        let n = xe(t, "#");
        (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (t = n.trim());
      }
      return { type: "heading", raw: e[0], depth: e[1].length, text: t, tokens: this.lexer.inline(t) };
    }
  }
  hr(r) {
    let e = this.rules.block.hr.exec(r);
    if (e) return { type: "hr", raw: xe(e[0], `
`) };
  }
  blockquote(r) {
    let e = this.rules.block.blockquote.exec(r);
    if (e) {
      let t = xe(e[0], `
`).split(`
`), n = "", i = "", s = [];
      for (; t.length > 0; ) {
        let o = !1, l = [], a;
        for (a = 0; a < t.length; a++) if (this.rules.other.blockquoteStart.test(t[a])) l.push(t[a]), o = !0;
        else if (!o) l.push(t[a]);
        else break;
        t = t.slice(a);
        let c = l.join(`
`), u = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        n = n ? `${n}
${c}` : c, i = i ? `${i}
${u}` : u;
        let f = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(u, s, !0), this.lexer.state.top = f, t.length === 0) break;
        let h = s.at(-1);
        if (h?.type === "code") break;
        if (h?.type === "blockquote") {
          let p = h, d = p.raw + `
` + t.join(`
`), m = this.blockquote(d);
          s[s.length - 1] = m, n = n.substring(0, n.length - p.raw.length) + m.raw, i = i.substring(0, i.length - p.text.length) + m.text;
          break;
        } else if (h?.type === "list") {
          let p = h, d = p.raw + `
` + t.join(`
`), m = this.list(d);
          s[s.length - 1] = m, n = n.substring(0, n.length - h.raw.length) + m.raw, i = i.substring(0, i.length - p.raw.length) + m.raw, t = d.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: n, tokens: s, text: i };
    }
  }
  list(r) {
    let e = this.rules.block.list.exec(r);
    if (e) {
      let t = e[1].trim(), n = t.length > 1, i = { type: "list", raw: "", ordered: n, start: n ? +t.slice(0, -1) : "", loose: !1, items: [] };
      t = n ? `\\d{1,9}\\${t.slice(-1)}` : `\\${t}`, this.options.pedantic && (t = n ? t : "[*+-]");
      let s = this.rules.other.listItemRegex(t), o = !1;
      for (; r; ) {
        let a = !1, c = "", u = "";
        if (!(e = s.exec(r)) || this.rules.block.hr.test(r)) break;
        c = e[0], r = r.substring(c.length);
        let f = Rl(e[2].split(`
`, 1)[0], e[1].length), h = r.split(`
`, 1)[0], p = !f.trim(), d = 0;
        if (this.options.pedantic ? (d = 2, u = f.trimStart()) : p ? d = e[1].length + 1 : (d = f.search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, u = f.slice(d), d += e[1].length), p && this.rules.other.blankLine.test(h) && (c += h + `
`, r = r.substring(h.length + 1), a = !0), !a) {
          let m = this.rules.other.nextBulletRegex(d), g = this.rules.other.hrRegex(d), x = this.rules.other.fencesBeginRegex(d), y = this.rules.other.headingBeginRegex(d), v = this.rules.other.htmlBeginRegex(d), E = this.rules.other.blockquoteBeginRegex(d);
          for (; r; ) {
            let S = r.split(`
`, 1)[0], A;
            if (h = S, this.options.pedantic ? (h = h.replace(this.rules.other.listReplaceNesting, "  "), A = h) : A = h.replace(this.rules.other.tabCharGlobal, "    "), x.test(h) || y.test(h) || v.test(h) || E.test(h) || m.test(h) || g.test(h)) break;
            if (A.search(this.rules.other.nonSpaceChar) >= d || !h.trim()) u += `
` + A.slice(d);
            else {
              if (p || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || x.test(f) || y.test(f) || g.test(f)) break;
              u += `
` + h;
            }
            p = !h.trim(), c += S + `
`, r = r.substring(S.length + 1), f = A.slice(d);
          }
        }
        i.loose || (o ? i.loose = !0 : this.rules.other.doubleBlankLine.test(c) && (o = !0)), i.items.push({ type: "list_item", raw: c, task: !!this.options.gfm && this.rules.other.listIsTask.test(u), loose: !1, text: u, tokens: [] }), i.raw += c;
      }
      let l = i.items.at(-1);
      if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else return;
      i.raw = i.raw.trimEnd();
      for (let a of i.items) {
        if (this.lexer.state.top = !1, a.tokens = this.lexer.blockTokens(a.text, []), a.task) {
          if (a.text = a.text.replace(this.rules.other.listReplaceTask, ""), a.tokens[0]?.type === "text" || a.tokens[0]?.type === "paragraph") {
            a.tokens[0].raw = a.tokens[0].raw.replace(this.rules.other.listReplaceTask, ""), a.tokens[0].text = a.tokens[0].text.replace(this.rules.other.listReplaceTask, "");
            for (let u = this.lexer.inlineQueue.length - 1; u >= 0; u--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[u].src)) {
              this.lexer.inlineQueue[u].src = this.lexer.inlineQueue[u].src.replace(this.rules.other.listReplaceTask, "");
              break;
            }
          }
          let c = this.rules.other.listTaskCheckbox.exec(a.raw);
          if (c) {
            let u = { type: "checkbox", raw: c[0] + " ", checked: c[0] !== "[ ]" };
            a.checked = u.checked, i.loose ? a.tokens[0] && ["paragraph", "text"].includes(a.tokens[0].type) && "tokens" in a.tokens[0] && a.tokens[0].tokens ? (a.tokens[0].raw = u.raw + a.tokens[0].raw, a.tokens[0].text = u.raw + a.tokens[0].text, a.tokens[0].tokens.unshift(u)) : a.tokens.unshift({ type: "paragraph", raw: u.raw, text: u.raw, tokens: [u] }) : a.tokens.unshift(u);
          }
        }
        if (!i.loose) {
          let c = a.tokens.filter((f) => f.type === "space"), u = c.length > 0 && c.some((f) => this.rules.other.anyLine.test(f.raw));
          i.loose = u;
        }
      }
      if (i.loose) for (let a of i.items) {
        a.loose = !0;
        for (let c of a.tokens) c.type === "text" && (c.type = "paragraph");
      }
      return i;
    }
  }
  html(r) {
    let e = this.rules.block.html.exec(r);
    if (e) return { type: "html", block: !0, raw: e[0], pre: e[1] === "pre" || e[1] === "script" || e[1] === "style", text: e[0] };
  }
  def(r) {
    let e = this.rules.block.def.exec(r);
    if (e) {
      let t = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: t, raw: e[0], href: n, title: i };
    }
  }
  table(r) {
    let e = this.rules.block.table.exec(r);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let t = mn(e[1]), n = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = e[3]?.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: e[0], header: [], align: [], rows: [] };
    if (t.length === n.length) {
      for (let o of n) this.rules.other.tableAlignRight.test(o) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? s.align.push("left") : s.align.push(null);
      for (let o = 0; o < t.length; o++) s.header.push({ text: t[o], tokens: this.lexer.inline(t[o]), header: !0, align: s.align[o] });
      for (let o of i) s.rows.push(mn(o, s.header.length).map((l, a) => ({ text: l, tokens: this.lexer.inline(l), header: !1, align: s.align[a] })));
      return s;
    }
  }
  lheading(r) {
    let e = this.rules.block.lheading.exec(r);
    if (e) return { type: "heading", raw: e[0], depth: e[2].charAt(0) === "=" ? 1 : 2, text: e[1], tokens: this.lexer.inline(e[1]) };
  }
  paragraph(r) {
    let e = this.rules.block.paragraph.exec(r);
    if (e) {
      let t = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
      return { type: "paragraph", raw: e[0], text: t, tokens: this.lexer.inline(t) };
    }
  }
  text(r) {
    let e = this.rules.block.text.exec(r);
    if (e) return { type: "text", raw: e[0], text: e[0], tokens: this.lexer.inline(e[0]) };
  }
  escape(r) {
    let e = this.rules.inline.escape.exec(r);
    if (e) return { type: "escape", raw: e[0], text: e[1] };
  }
  tag(r) {
    let e = this.rules.inline.tag.exec(r);
    if (e) return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: e[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: e[0] };
  }
  link(r) {
    let e = this.rules.inline.link.exec(r);
    if (e) {
      let t = e[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(t)) {
        if (!this.rules.other.endAngleBracket.test(t)) return;
        let s = xe(t.slice(0, -1), "\\");
        if ((t.length - s.length) % 2 === 0) return;
      } else {
        let s = Ml(e[2], "()");
        if (s === -2) return;
        if (s > -1) {
          let o = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + s;
          e[2] = e[2].substring(0, s), e[0] = e[0].substring(0, o).trim(), e[3] = "";
        }
      }
      let n = e[2], i = "";
      if (this.options.pedantic) {
        let s = this.rules.other.pedanticHrefTitle.exec(n);
        s && (n = s[1], i = s[3]);
      } else i = e[3] ? e[3].slice(1, -1) : "";
      return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? n = n.slice(1) : n = n.slice(1, -1)), gn(e, { href: n && n.replace(this.rules.inline.anyPunctuation, "$1"), title: i && i.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
    }
  }
  reflink(r, e) {
    let t;
    if ((t = this.rules.inline.reflink.exec(r)) || (t = this.rules.inline.nolink.exec(r))) {
      let n = (t[2] || t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = e[n.toLowerCase()];
      if (!i) {
        let s = t[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return gn(t, i, t[0], this.lexer, this.rules);
    }
  }
  emStrong(r, e, t = "") {
    let n = this.rules.inline.emStrongLDelim.exec(r);
    if (!(!n || n[3] && t.match(this.rules.other.unicodeAlphaNumeric)) && (!(n[1] || n[2]) || !t || this.rules.inline.punctuation.exec(t))) {
      let i = [...n[0]].length - 1, s, o, l = i, a = 0, c = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, e = e.slice(-1 * r.length + i); (n = c.exec(e)) != null; ) {
        if (s = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !s) continue;
        if (o = [...s].length, n[3] || n[4]) {
          l += o;
          continue;
        } else if ((n[5] || n[6]) && i % 3 && !((i + o) % 3)) {
          a += o;
          continue;
        }
        if (l -= o, l > 0) continue;
        o = Math.min(o, o + l + a);
        let u = [...n[0]][0].length, f = r.slice(0, i + n.index + u + o);
        if (Math.min(i, o) % 2) {
          let p = f.slice(1, -1);
          return { type: "em", raw: f, text: p, tokens: this.lexer.inlineTokens(p) };
        }
        let h = f.slice(2, -2);
        return { type: "strong", raw: f, text: h, tokens: this.lexer.inlineTokens(h) };
      }
    }
  }
  codespan(r) {
    let e = this.rules.inline.code.exec(r);
    if (e) {
      let t = e[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(t), i = this.rules.other.startingSpaceChar.test(t) && this.rules.other.endingSpaceChar.test(t);
      return n && i && (t = t.substring(1, t.length - 1)), { type: "codespan", raw: e[0], text: t };
    }
  }
  br(r) {
    let e = this.rules.inline.br.exec(r);
    if (e) return { type: "br", raw: e[0] };
  }
  del(r, e, t = "") {
    let n = this.rules.inline.delLDelim.exec(r);
    if (n && (!n[1] || !t || this.rules.inline.punctuation.exec(t))) {
      let i = [...n[0]].length - 1, s, o, l = i, a = this.rules.inline.delRDelim;
      for (a.lastIndex = 0, e = e.slice(-1 * r.length + i); (n = a.exec(e)) != null; ) {
        if (s = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !s || (o = [...s].length, o !== i)) continue;
        if (n[3] || n[4]) {
          l += o;
          continue;
        }
        if (l -= o, l > 0) continue;
        o = Math.min(o, o + l);
        let c = [...n[0]][0].length, u = r.slice(0, i + n.index + c + o), f = u.slice(i, -i);
        return { type: "del", raw: u, text: f, tokens: this.lexer.inlineTokens(f) };
      }
    }
  }
  autolink(r) {
    let e = this.rules.inline.autolink.exec(r);
    if (e) {
      let t, n;
      return e[2] === "@" ? (t = e[1], n = "mailto:" + t) : (t = e[1], n = t), { type: "link", raw: e[0], text: t, href: n, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  url(r) {
    let e;
    if (e = this.rules.inline.url.exec(r)) {
      let t, n;
      if (e[2] === "@") t = e[0], n = "mailto:" + t;
      else {
        let i;
        do
          i = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])?.[0] ?? "";
        while (i !== e[0]);
        t = e[0], e[1] === "www." ? n = "http://" + e[0] : n = e[0];
      }
      return { type: "link", raw: e[0], text: t, href: n, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  inlineText(r) {
    let e = this.rules.inline.text.exec(r);
    if (e) {
      let t = this.lexer.state.inRawBlock;
      return { type: "text", raw: e[0], text: e[0], escaped: t };
    }
  }
}, q = class wt {
  tokens;
  options;
  state;
  inlineQueue;
  tokenizer;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || he, this.options.tokenizer = this.options.tokenizer || new He(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let t = { other: D, block: Pe.normal, inline: ke.normal };
    this.options.pedantic ? (t.block = Pe.pedantic, t.inline = ke.pedantic) : this.options.gfm && (t.block = Pe.gfm, this.options.breaks ? t.inline = ke.breaks : t.inline = ke.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: Pe, inline: ke };
  }
  static lex(e, t) {
    return new wt(t).lex(e);
  }
  static lexInline(e, t) {
    return new wt(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(D.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = !1) {
    for (this.options.pedantic && (e = e.replace(D.tabCharGlobal, "    ").replace(D.spaceLine, "")); e; ) {
      let i;
      if (this.options.extensions?.block?.some((o) => (i = o.call({ lexer: this }, e, t)) ? (e = e.substring(i.raw.length), t.push(i), !0) : !1)) continue;
      if (i = this.tokenizer.space(e)) {
        e = e.substring(i.raw.length);
        let o = t.at(-1);
        i.raw.length === 1 && o !== void 0 ? o.raw += `
` : t.push(i);
        continue;
      }
      if (i = this.tokenizer.code(e)) {
        e = e.substring(i.raw.length);
        let o = t.at(-1);
        o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + i.raw, o.text += `
` + i.text, this.inlineQueue.at(-1).src = o.text) : t.push(i);
        continue;
      }
      if (i = this.tokenizer.fences(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.heading(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.hr(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.blockquote(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.list(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.html(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.def(e)) {
        e = e.substring(i.raw.length);
        let o = t.at(-1);
        o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + i.raw, o.text += `
` + i.raw, this.inlineQueue.at(-1).src = o.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = { href: i.href, title: i.title }, t.push(i));
        continue;
      }
      if (i = this.tokenizer.table(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      if (i = this.tokenizer.lheading(e)) {
        e = e.substring(i.raw.length), t.push(i);
        continue;
      }
      let s = e;
      if (this.options.extensions?.startBlock) {
        let o = 1 / 0, l = e.slice(1), a;
        this.options.extensions.startBlock.forEach((c) => {
          a = c.call({ lexer: this }, l), typeof a == "number" && a >= 0 && (o = Math.min(o, a));
        }), o < 1 / 0 && o >= 0 && (s = e.substring(0, o + 1));
      }
      if (this.state.top && (i = this.tokenizer.paragraph(s))) {
        let o = t.at(-1);
        n && o?.type === "paragraph" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + i.raw, o.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(i), n = s.length !== e.length, e = e.substring(i.raw.length);
        continue;
      }
      if (i = this.tokenizer.text(e)) {
        e = e.substring(i.raw.length);
        let o = t.at(-1);
        o?.type === "text" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + i.raw, o.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(i);
        continue;
      }
      if (e) {
        let o = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(o);
          break;
        } else throw new Error(o);
      }
    }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let n = e, i = null;
    if (this.tokens.links) {
      let a = Object.keys(this.tokens.links);
      if (a.length > 0) for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null; ) a.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; ) n = n.slice(0, i.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let s;
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(n)) != null; ) s = i[2] ? i[2].length : 0, n = n.slice(0, i.index + s) + "[" + "a".repeat(i[0].length - s - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
    let o = !1, l = "";
    for (; e; ) {
      o || (l = ""), o = !1;
      let a;
      if (this.options.extensions?.inline?.some((u) => (a = u.call({ lexer: this }, e, t)) ? (e = e.substring(a.raw.length), t.push(a), !0) : !1)) continue;
      if (a = this.tokenizer.escape(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.tag(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.link(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(a.raw.length);
        let u = t.at(-1);
        a.type === "text" && u?.type === "text" ? (u.raw += a.raw, u.text += a.text) : t.push(a);
        continue;
      }
      if (a = this.tokenizer.emStrong(e, n, l)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.codespan(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.br(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.del(e, n, l)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (a = this.tokenizer.autolink(e)) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      if (!this.state.inLink && (a = this.tokenizer.url(e))) {
        e = e.substring(a.raw.length), t.push(a);
        continue;
      }
      let c = e;
      if (this.options.extensions?.startInline) {
        let u = 1 / 0, f = e.slice(1), h;
        this.options.extensions.startInline.forEach((p) => {
          h = p.call({ lexer: this }, f), typeof h == "number" && h >= 0 && (u = Math.min(u, h));
        }), u < 1 / 0 && u >= 0 && (c = e.substring(0, u + 1));
      }
      if (a = this.tokenizer.inlineText(c)) {
        e = e.substring(a.raw.length), a.raw.slice(-1) !== "_" && (l = a.raw.slice(-1)), o = !0;
        let u = t.at(-1);
        u?.type === "text" ? (u.raw += a.raw, u.text += a.text) : t.push(a);
        continue;
      }
      if (e) {
        let u = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(u);
          break;
        } else throw new Error(u);
      }
    }
    return t;
  }
}, Ke = class {
  options;
  parser;
  constructor(r) {
    this.options = r || he;
  }
  space(r) {
    return "";
  }
  code({ text: r, lang: e, escaped: t }) {
    let n = (e || "").match(D.notSpaceStart)?.[0], i = r.replace(D.endingNewline, "") + `
`;
    return n ? '<pre><code class="language-' + Q(n) + '">' + (t ? i : Q(i, !0)) + `</code></pre>
` : "<pre><code>" + (t ? i : Q(i, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: r }) {
    return `<blockquote>
${this.parser.parse(r)}</blockquote>
`;
  }
  html({ text: r }) {
    return r;
  }
  def(r) {
    return "";
  }
  heading({ tokens: r, depth: e }) {
    return `<h${e}>${this.parser.parseInline(r)}</h${e}>
`;
  }
  hr(r) {
    return `<hr>
`;
  }
  list(r) {
    let e = r.ordered, t = r.start, n = "";
    for (let o = 0; o < r.items.length; o++) {
      let l = r.items[o];
      n += this.listitem(l);
    }
    let i = e ? "ol" : "ul", s = e && t !== 1 ? ' start="' + t + '"' : "";
    return "<" + i + s + `>
` + n + "</" + i + `>
`;
  }
  listitem(r) {
    return `<li>${this.parser.parse(r.tokens)}</li>
`;
  }
  checkbox({ checked: r }) {
    return "<input " + (r ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({ tokens: r }) {
    return `<p>${this.parser.parseInline(r)}</p>
`;
  }
  table(r) {
    let e = "", t = "";
    for (let i = 0; i < r.header.length; i++) t += this.tablecell(r.header[i]);
    e += this.tablerow({ text: t });
    let n = "";
    for (let i = 0; i < r.rows.length; i++) {
      let s = r.rows[i];
      t = "";
      for (let o = 0; o < s.length; o++) t += this.tablecell(s[o]);
      n += this.tablerow({ text: t });
    }
    return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + n + `</table>
`;
  }
  tablerow({ text: r }) {
    return `<tr>
${r}</tr>
`;
  }
  tablecell(r) {
    let e = this.parser.parseInline(r.tokens), t = r.header ? "th" : "td";
    return (r.align ? `<${t} align="${r.align}">` : `<${t}>`) + e + `</${t}>
`;
  }
  strong({ tokens: r }) {
    return `<strong>${this.parser.parseInline(r)}</strong>`;
  }
  em({ tokens: r }) {
    return `<em>${this.parser.parseInline(r)}</em>`;
  }
  codespan({ text: r }) {
    return `<code>${Q(r, !0)}</code>`;
  }
  br(r) {
    return "<br>";
  }
  del({ tokens: r }) {
    return `<del>${this.parser.parseInline(r)}</del>`;
  }
  link({ href: r, title: e, tokens: t }) {
    let n = this.parser.parseInline(t), i = dn(r);
    if (i === null) return n;
    r = i;
    let s = '<a href="' + r + '"';
    return e && (s += ' title="' + Q(e) + '"'), s += ">" + n + "</a>", s;
  }
  image({ href: r, title: e, text: t, tokens: n }) {
    n && (t = this.parser.parseInline(n, this.parser.textRenderer));
    let i = dn(r);
    if (i === null) return Q(t);
    r = i;
    let s = `<img src="${r}" alt="${t}"`;
    return e && (s += ` title="${Q(e)}"`), s += ">", s;
  }
  text(r) {
    return "tokens" in r && r.tokens ? this.parser.parseInline(r.tokens) : "escaped" in r && r.escaped ? r.text : Q(r.text);
  }
}, qt = class {
  strong({ text: r }) {
    return r;
  }
  em({ text: r }) {
    return r;
  }
  codespan({ text: r }) {
    return r;
  }
  del({ text: r }) {
    return r;
  }
  html({ text: r }) {
    return r;
  }
  text({ text: r }) {
    return r;
  }
  link({ text: r }) {
    return "" + r;
  }
  image({ text: r }) {
    return "" + r;
  }
  br() {
    return "";
  }
  checkbox({ raw: r }) {
    return r;
  }
}, j = class yt {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || he, this.options.renderer = this.options.renderer || new Ke(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new qt();
  }
  static parse(e, t) {
    return new yt(t).parse(e);
  }
  static parseInline(e, t) {
    return new yt(t).parseInline(e);
  }
  parse(e) {
    let t = "";
    for (let n = 0; n < e.length; n++) {
      let i = e[n];
      if (this.options.extensions?.renderers?.[i.type]) {
        let o = i, l = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(o.type)) {
          t += l || "";
          continue;
        }
      }
      let s = i;
      switch (s.type) {
        case "space": {
          t += this.renderer.space(s);
          break;
        }
        case "hr": {
          t += this.renderer.hr(s);
          break;
        }
        case "heading": {
          t += this.renderer.heading(s);
          break;
        }
        case "code": {
          t += this.renderer.code(s);
          break;
        }
        case "table": {
          t += this.renderer.table(s);
          break;
        }
        case "blockquote": {
          t += this.renderer.blockquote(s);
          break;
        }
        case "list": {
          t += this.renderer.list(s);
          break;
        }
        case "checkbox": {
          t += this.renderer.checkbox(s);
          break;
        }
        case "html": {
          t += this.renderer.html(s);
          break;
        }
        case "def": {
          t += this.renderer.def(s);
          break;
        }
        case "paragraph": {
          t += this.renderer.paragraph(s);
          break;
        }
        case "text": {
          t += this.renderer.text(s);
          break;
        }
        default: {
          let o = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return t;
  }
  parseInline(e, t = this.renderer) {
    let n = "";
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.options.extensions?.renderers?.[s.type]) {
        let l = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (l !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          n += l || "";
          continue;
        }
      }
      let o = s;
      switch (o.type) {
        case "escape": {
          n += t.text(o);
          break;
        }
        case "html": {
          n += t.html(o);
          break;
        }
        case "link": {
          n += t.link(o);
          break;
        }
        case "image": {
          n += t.image(o);
          break;
        }
        case "checkbox": {
          n += t.checkbox(o);
          break;
        }
        case "strong": {
          n += t.strong(o);
          break;
        }
        case "em": {
          n += t.em(o);
          break;
        }
        case "codespan": {
          n += t.codespan(o);
          break;
        }
        case "br": {
          n += t.br(o);
          break;
        }
        case "del": {
          n += t.del(o);
          break;
        }
        case "text": {
          n += t.text(o);
          break;
        }
        default: {
          let l = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return n;
  }
}, be = class {
  options;
  block;
  constructor(r) {
    this.options = r || he;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
  static passThroughHooksRespectAsync = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(r) {
    return r;
  }
  postprocess(r) {
    return r;
  }
  processAllTokens(r) {
    return r;
  }
  emStrongMask(r) {
    return r;
  }
  provideLexer() {
    return this.block ? q.lex : q.lexInline;
  }
  provideParser() {
    return this.block ? j.parse : j.parseInline;
  }
}, Il = class {
  defaults = $t();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = j;
  Renderer = Ke;
  TextRenderer = qt;
  Lexer = q;
  Tokenizer = He;
  Hooks = be;
  constructor(...r) {
    this.use(...r);
  }
  walkTokens(r, e) {
    let t = [];
    for (let n of r) switch (t = t.concat(e.call(this, n)), n.type) {
      case "table": {
        let i = n;
        for (let s of i.header) t = t.concat(this.walkTokens(s.tokens, e));
        for (let s of i.rows) for (let o of s) t = t.concat(this.walkTokens(o.tokens, e));
        break;
      }
      case "list": {
        let i = n;
        t = t.concat(this.walkTokens(i.items, e));
        break;
      }
      default: {
        let i = n;
        this.defaults.extensions?.childTokens?.[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((s) => {
          let o = i[s].flat(1 / 0);
          t = t.concat(this.walkTokens(o, e));
        }) : i.tokens && (t = t.concat(this.walkTokens(i.tokens, e)));
      }
    }
    return t;
  }
  use(...r) {
    let e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return r.forEach((t) => {
      let n = { ...t };
      if (n.async = this.defaults.async || n.async || !1, t.extensions && (t.extensions.forEach((i) => {
        if (!i.name) throw new Error("extension name required");
        if ("renderer" in i) {
          let s = e.renderers[i.name];
          s ? e.renderers[i.name] = function(...o) {
            let l = i.renderer.apply(this, o);
            return l === !1 && (l = s.apply(this, o)), l;
          } : e.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let s = e[i.level];
          s ? s.unshift(i.tokenizer) : e[i.level] = [i.tokenizer], i.start && (i.level === "block" ? e.startBlock ? e.startBlock.push(i.start) : e.startBlock = [i.start] : i.level === "inline" && (e.startInline ? e.startInline.push(i.start) : e.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (e.childTokens[i.name] = i.childTokens);
      }), n.extensions = e), t.renderer) {
        let i = this.defaults.renderer || new Ke(this.defaults);
        for (let s in t.renderer) {
          if (!(s in i)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let o = s, l = t.renderer[o], a = i[o];
          i[o] = (...c) => {
            let u = l.apply(i, c);
            return u === !1 && (u = a.apply(i, c)), u || "";
          };
        }
        n.renderer = i;
      }
      if (t.tokenizer) {
        let i = this.defaults.tokenizer || new He(this.defaults);
        for (let s in t.tokenizer) {
          if (!(s in i)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let o = s, l = t.tokenizer[o], a = i[o];
          i[o] = (...c) => {
            let u = l.apply(i, c);
            return u === !1 && (u = a.apply(i, c)), u;
          };
        }
        n.tokenizer = i;
      }
      if (t.hooks) {
        let i = this.defaults.hooks || new be();
        for (let s in t.hooks) {
          if (!(s in i)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let o = s, l = t.hooks[o], a = i[o];
          be.passThroughHooks.has(s) ? i[o] = (c) => {
            if (this.defaults.async && be.passThroughHooksRespectAsync.has(s)) return (async () => {
              let f = await l.call(i, c);
              return a.call(i, f);
            })();
            let u = l.call(i, c);
            return a.call(i, u);
          } : i[o] = (...c) => {
            if (this.defaults.async) return (async () => {
              let f = await l.apply(i, c);
              return f === !1 && (f = await a.apply(i, c)), f;
            })();
            let u = l.apply(i, c);
            return u === !1 && (u = a.apply(i, c)), u;
          };
        }
        n.hooks = i;
      }
      if (t.walkTokens) {
        let i = this.defaults.walkTokens, s = t.walkTokens;
        n.walkTokens = function(o) {
          let l = [];
          return l.push(s.call(this, o)), i && (l = l.concat(i.call(this, o))), l;
        };
      }
      this.defaults = { ...this.defaults, ...n };
    }), this;
  }
  setOptions(r) {
    return this.defaults = { ...this.defaults, ...r }, this;
  }
  lexer(r, e) {
    return q.lex(r, e ?? this.defaults);
  }
  parser(r, e) {
    return j.parse(r, e ?? this.defaults);
  }
  parseMarkdown(r) {
    return (e, t) => {
      let n = { ...t }, i = { ...this.defaults, ...n }, s = this.onError(!!i.silent, !!i.async);
      if (this.defaults.async === !0 && n.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      if (i.hooks && (i.hooks.options = i, i.hooks.block = r), i.async) return (async () => {
        let o = i.hooks ? await i.hooks.preprocess(e) : e, l = await (i.hooks ? await i.hooks.provideLexer() : r ? q.lex : q.lexInline)(o, i), a = i.hooks ? await i.hooks.processAllTokens(l) : l;
        i.walkTokens && await Promise.all(this.walkTokens(a, i.walkTokens));
        let c = await (i.hooks ? await i.hooks.provideParser() : r ? j.parse : j.parseInline)(a, i);
        return i.hooks ? await i.hooks.postprocess(c) : c;
      })().catch(s);
      try {
        i.hooks && (e = i.hooks.preprocess(e));
        let o = (i.hooks ? i.hooks.provideLexer() : r ? q.lex : q.lexInline)(e, i);
        i.hooks && (o = i.hooks.processAllTokens(o)), i.walkTokens && this.walkTokens(o, i.walkTokens);
        let l = (i.hooks ? i.hooks.provideParser() : r ? j.parse : j.parseInline)(o, i);
        return i.hooks && (l = i.hooks.postprocess(l)), l;
      } catch (o) {
        return s(o);
      }
    };
  }
  onError(r, e) {
    return (t) => {
      if (t.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
        let n = "<p>An error occurred:</p><pre>" + Q(t.message + "", !0) + "</pre>";
        return e ? Promise.resolve(n) : n;
      }
      if (e) return Promise.reject(t);
      throw t;
    };
  }
}, ce = new Il();
function T(r, e) {
  return ce.parse(r, e);
}
T.options = T.setOptions = function(r) {
  return ce.setOptions(r), T.defaults = ce.defaults, wr(T.defaults), T;
};
T.getDefaults = $t;
T.defaults = he;
T.use = function(...r) {
  return ce.use(...r), T.defaults = ce.defaults, wr(T.defaults), T;
};
T.walkTokens = function(r, e) {
  return ce.walkTokens(r, e);
};
T.parseInline = ce.parseInline;
T.Parser = j;
T.parser = j.parse;
T.Renderer = Ke;
T.TextRenderer = qt;
T.Lexer = q;
T.lexer = q.lex;
T.Tokenizer = He;
T.Hooks = be;
T.parse = T;
T.options;
T.setOptions;
T.use;
T.walkTokens;
T.parseInline;
j.parse;
q.lex;
const zl = [
  /^#{1,6}\s/,
  // headings
  /\*\*.+\*\*/,
  // bold
  /\*.+\*/,
  // italic
  /^\s*[-*+]\s/,
  // unordered list
  /^\s*\d+\.\s/,
  // ordered list
  /\[.+\]\(.+\)/,
  // links
  /^>\s/,
  // blockquote
  /^```/,
  // code block
  /`[^`]+`/,
  // inline code
  /^---+$/
  // horizontal rule
];
function Nl(r) {
  const e = r.split(`
`);
  let t = 0;
  for (const n of e)
    for (const i of zl)
      if (i.test(n)) {
        t++;
        break;
      }
  return t >= 2 || t >= 1 && e.length <= 3;
}
const Ol = V.create({
  name: "markdownPaste",
  addProseMirrorPlugins() {
    const r = this.editor;
    return [
      new K({
        key: new G("markdownPaste"),
        props: {
          handlePaste(e, t) {
            const n = t.clipboardData;
            if (!n) return !1;
            const i = n.getData("text/plain");
            if (!i || !i.trim() || !Nl(i)) return !1;
            const s = n.getData("text/html");
            if (s && new DOMParser().parseFromString(s, "text/html").body.querySelector("h1,h2,h3,h4,h5,h6,strong,em,ul,ol,table,a[href]"))
              return !1;
            const o = T.parse(i, { async: !1 });
            return t.preventDefault(), r.commands.insertContent(o), !0;
          }
        }
      })
    ];
  }
});
export {
  Ol as default
};
