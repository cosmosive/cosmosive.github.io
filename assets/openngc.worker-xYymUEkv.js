(function() {
	const A = Symbol("Comlink.proxy"), T = Symbol("Comlink.endpoint"), z = Symbol("Comlink.releaseProxy"), S = Symbol("Comlink.finalizer"), h = Symbol("Comlink.thrown"), P = (e) => typeof e == "object" && e !== null || typeof e == "function", x = new Map([["proxy", {
		canHandle: (e) => P(e) && e[A],
		serialize(e) {
			const { port1: t, port2: r } = new MessageChannel();
			return k(e, t), [r, [r]];
		},
		deserialize(e) {
			return e.start(), V(e);
		}
	}], ["throw", {
		canHandle: (e) => P(e) && h in e,
		serialize({ value: e }) {
			let t;
			return e instanceof Error ? t = {
				isError: !0,
				value: {
					message: e.message,
					name: e.name,
					stack: e.stack
				}
			} : t = {
				isError: !1,
				value: e
			}, [t, []];
		},
		deserialize(e) {
			throw e.isError ? Object.assign(new Error(e.value.message), e.value) : e.value;
		}
	}]]);
	function L(e, t) {
		for (const r of e) if (t === r || r === "*" || r instanceof RegExp && r.test(t)) return !0;
		return !1;
	}
	function k(e, t = globalThis, r = ["*"]) {
		t.addEventListener("message", function i(n) {
			if (!n || !n.data) return;
			if (!L(r, n.origin)) {
				console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
				return;
			}
			const { id: s, type: g, path: c } = Object.assign({ path: [] }, n.data), u = (n.data.argumentList || []).map(y);
			let a;
			try {
				const o = c.slice(0, -1).reduce((l, d) => l[d], e), f = c.reduce((l, d) => l[d], e);
				switch (g) {
					case "GET":
						a = f;
						break;
					case "SET":
						o[c.slice(-1)[0]] = y(n.data.value), a = !0;
						break;
					case "APPLY":
						a = f.apply(o, u);
						break;
					case "CONSTRUCT":
						a = I(new f(...u));
						break;
					case "ENDPOINT":
						{
							const { port1: l, port2: d } = new MessageChannel();
							k(e, d), a = H(l, [l]);
						}
						break;
					case "RELEASE":
						a = void 0;
						break;
					default: return;
				}
			} catch (o) {
				a = {
					value: o,
					[h]: 0
				};
			}
			Promise.resolve(a).catch((o) => ({
				value: o,
				[h]: 0
			})).then((o) => {
				const [f, l] = b(o);
				t.postMessage(Object.assign(Object.assign({}, f), { id: s }), l), g === "RELEASE" && (t.removeEventListener("message", i), M(t), S in e && typeof e[S] == "function" && e[S]());
			}).catch((o) => {
				const [f, l] = b({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[h]: 0
				});
				t.postMessage(Object.assign(Object.assign({}, f), { id: s }), l);
			});
		}), t.start && t.start();
	}
	function j(e) {
		return e.constructor.name === "MessagePort";
	}
	function M(e) {
		j(e) && e.close();
	}
	function V(e, t) {
		const r = /* @__PURE__ */ new Map();
		return e.addEventListener("message", function(n) {
			const { data: s } = n;
			if (!s || !s.id) return;
			const g = r.get(s.id);
			if (g) try {
				g(s);
			} finally {
				r.delete(s.id);
			}
		}), C(e, r, [], t);
	}
	function w(e) {
		if (e) throw new Error("Proxy has been released and is not useable");
	}
	function O(e) {
		return m(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			M(e);
		});
	}
	const E = /* @__PURE__ */ new WeakMap(), p = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
		const t = (E.get(e) || 0) - 1;
		E.set(e, t), t === 0 && O(e);
	});
	function _(e, t) {
		const r = (E.get(t) || 0) + 1;
		E.set(t, r), p && p.register(e, t, e);
	}
	function D(e) {
		p && p.unregister(e);
	}
	function C(e, t, r = [], i = function() {}) {
		let n = !1;
		const s = new Proxy(i, {
			get(g, c) {
				if (w(n), c === z) return () => {
					D(s), O(e), t.clear(), n = !0;
				};
				if (c === "then") {
					if (r.length === 0) return { then: () => s };
					const u = m(e, t, {
						type: "GET",
						path: r.map((a) => a.toString())
					}).then(y);
					return u.then.bind(u);
				}
				return C(e, t, [...r, c]);
			},
			set(g, c, u) {
				w(n);
				const [a, o] = b(u);
				return m(e, t, {
					type: "SET",
					path: [...r, c].map((f) => f.toString()),
					value: a
				}, o).then(y);
			},
			apply(g, c, u) {
				w(n);
				const a = r[r.length - 1];
				if (a === T) return m(e, t, { type: "ENDPOINT" }).then(y);
				if (a === "bind") return C(e, t, r.slice(0, -1));
				const [o, f] = R(u);
				return m(e, t, {
					type: "APPLY",
					path: r.map((l) => l.toString()),
					argumentList: o
				}, f).then(y);
			},
			construct(g, c) {
				w(n);
				const [u, a] = R(c);
				return m(e, t, {
					type: "CONSTRUCT",
					path: r.map((o) => o.toString()),
					argumentList: u
				}, a).then(y);
			}
		});
		return _(s, e), s;
	}
	function F(e) {
		return Array.prototype.concat.apply([], e);
	}
	function R(e) {
		const t = e.map(b);
		return [t.map((r) => r[0]), F(t.map((r) => r[1]))];
	}
	const N = /* @__PURE__ */ new WeakMap();
	function H(e, t) {
		return N.set(e, t), e;
	}
	function I(e) {
		return Object.assign(e, { [A]: !0 });
	}
	function b(e) {
		for (const [t, r] of x) if (r.canHandle(e)) {
			const [i, n] = r.serialize(e);
			return [{
				type: "HANDLER",
				name: t,
				value: i
			}, n];
		}
		return [{
			type: "RAW",
			value: e
		}, N.get(e) || []];
	}
	function y(e) {
		switch (e.type) {
			case "HANDLER": return x.get(e.name).deserialize(e.value);
			case "RAW": return e.value;
		}
	}
	function m(e, t, r, i) {
		return new Promise((n) => {
			const s = W();
			t.set(s, n), e.start && e.start(), e.postMessage(Object.assign({ id: s }, r), i);
		});
	}
	function W() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	function U(e) {
		return e.replace(/,(?!\s)/g, ", ");
	}
	var G = class extends Error {
		constructor(e) {
			super(e), this.name = "OpenNgcCatalogShapeError";
		}
	};
	async function v(e) {
		const t = await fetch(e);
		if (!t.ok) throw new Error(`Failed to load deep-sky catalog: ${t.status}`);
		const r = await t.json();
		let i;
		if (Array.isArray(r)) i = r;
		else if (r != null && typeof r == "object" && "entries" in r && Array.isArray(r.entries)) i = r.entries;
		else throw new G("OpenNGC catalog JSON must be a top-level array or { entries: [...] }");
		return i.map((n) => ({
			...n,
			name: U(n.name)
		}));
	}
	k({ async loadCatalog(e) {
		return v(e);
	} });
})();
