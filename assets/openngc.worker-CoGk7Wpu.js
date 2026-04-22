(function() {
	const A = Symbol("Comlink.proxy"), T = Symbol("Comlink.endpoint"), z = Symbol("Comlink.releaseProxy"), S = Symbol("Comlink.finalizer"), h = Symbol("Comlink.thrown"), P = (e) => typeof e == "object" && e !== null || typeof e == "function", x = new Map([["proxy", {
		canHandle: (e) => P(e) && e[A],
		serialize(e) {
			const { port1: t, port2: r } = new MessageChannel();
			return k(e, t), [r, [r]];
		},
		deserialize(e) {
			return e.start(), j(e);
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
		t.addEventListener("message", function i(a) {
			if (!a || !a.data) return;
			if (!L(r, a.origin)) {
				console.warn(`Invalid origin '${a.origin}' for comlink proxy`);
				return;
			}
			const { id: n, type: g, path: c } = Object.assign({ path: [] }, a.data), u = (a.data.argumentList || []).map(y);
			let s;
			try {
				const o = c.slice(0, -1).reduce((l, d) => l[d], e), f = c.reduce((l, d) => l[d], e);
				switch (g) {
					case "GET":
						s = f;
						break;
					case "SET":
						o[c.slice(-1)[0]] = y(a.data.value), s = !0;
						break;
					case "APPLY":
						s = f.apply(o, u);
						break;
					case "CONSTRUCT":
						s = H(new f(...u));
						break;
					case "ENDPOINT":
						{
							const { port1: l, port2: d } = new MessageChannel();
							k(e, d), s = D(l, [l]);
						}
						break;
					case "RELEASE":
						s = void 0;
						break;
					default: return;
				}
			} catch (o) {
				s = {
					value: o,
					[h]: 0
				};
			}
			Promise.resolve(s).catch((o) => ({
				value: o,
				[h]: 0
			})).then((o) => {
				const [f, l] = b(o);
				t.postMessage(Object.assign(Object.assign({}, f), { id: n }), l), g === "RELEASE" && (t.removeEventListener("message", i), M(t), S in e && typeof e[S] == "function" && e[S]());
			}).catch((o) => {
				const [f, l] = b({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[h]: 0
				});
				t.postMessage(Object.assign(Object.assign({}, f), { id: n }), l);
			});
		}), t.start && t.start();
	}
	function V(e) {
		return e.constructor.name === "MessagePort";
	}
	function M(e) {
		V(e) && e.close();
	}
	function j(e, t) {
		const r = /* @__PURE__ */ new Map();
		return e.addEventListener("message", function(a) {
			const { data: n } = a;
			if (!n || !n.id) return;
			const g = r.get(n.id);
			if (g) try {
				g(n);
			} finally {
				r.delete(n.id);
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
	const p = /* @__PURE__ */ new WeakMap(), E = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
		const t = (p.get(e) || 0) - 1;
		p.set(e, t), t === 0 && O(e);
	});
	function F(e, t) {
		const r = (p.get(t) || 0) + 1;
		p.set(t, r), E && E.register(e, t, e);
	}
	function _(e) {
		E && E.unregister(e);
	}
	function C(e, t, r = [], i = function() {}) {
		let a = !1;
		const n = new Proxy(i, {
			get(g, c) {
				if (w(a), c === z) return () => {
					_(n), O(e), t.clear(), a = !0;
				};
				if (c === "then") {
					if (r.length === 0) return { then: () => n };
					const u = m(e, t, {
						type: "GET",
						path: r.map((s) => s.toString())
					}).then(y);
					return u.then.bind(u);
				}
				return C(e, t, [...r, c]);
			},
			set(g, c, u) {
				w(a);
				const [s, o] = b(u);
				return m(e, t, {
					type: "SET",
					path: [...r, c].map((f) => f.toString()),
					value: s
				}, o).then(y);
			},
			apply(g, c, u) {
				w(a);
				const s = r[r.length - 1];
				if (s === T) return m(e, t, { type: "ENDPOINT" }).then(y);
				if (s === "bind") return C(e, t, r.slice(0, -1));
				const [o, f] = R(u);
				return m(e, t, {
					type: "APPLY",
					path: r.map((l) => l.toString()),
					argumentList: o
				}, f).then(y);
			},
			construct(g, c) {
				w(a);
				const [u, s] = R(c);
				return m(e, t, {
					type: "CONSTRUCT",
					path: r.map((o) => o.toString()),
					argumentList: u
				}, s).then(y);
			}
		});
		return F(n, e), n;
	}
	function v(e) {
		return Array.prototype.concat.apply([], e);
	}
	function R(e) {
		const t = e.map(b);
		return [t.map((r) => r[0]), v(t.map((r) => r[1]))];
	}
	const N = /* @__PURE__ */ new WeakMap();
	function D(e, t) {
		return N.set(e, t), e;
	}
	function H(e) {
		return Object.assign(e, { [A]: !0 });
	}
	function b(e) {
		for (const [t, r] of x) if (r.canHandle(e)) {
			const [i, a] = r.serialize(e);
			return [{
				type: "HANDLER",
				name: t,
				value: i
			}, a];
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
		return new Promise((a) => {
			const n = I();
			t.set(n, a), e.start && e.start(), e.postMessage(Object.assign({ id: n }, r), i);
		});
	}
	function I() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	function W(e) {
		return e.replace(/,(?!\s)/g, ", ");
	}
	var U = class extends Error {
		constructor(e) {
			super(e), this.name = "OpenNgcCatalogShapeError";
		}
	};
	async function G(e) {
		const t = await fetch(e);
		if (!t.ok) throw new Error(`Failed to load deep-sky catalog: ${t.status}`);
		const r = await t.json();
		let i, a;
		if (Array.isArray(r)) i = r;
		else if (r != null && typeof r == "object" && "entries" in r && Array.isArray(r.entries)) {
			const n = r;
			i = n.entries, typeof n.version == "number" && Number.isFinite(n.version) && (a = n.version);
		} else throw new U("OpenNGC catalog JSON must be a top-level array or { entries: [...] }");
		return {
			entries: i.map((n) => ({
				...n,
				name: W(n.name)
			})),
			...a !== void 0 && { schemaVersion: a }
		};
	}
	k({ async loadCatalog(e) {
		return G(e);
	} });
})();
