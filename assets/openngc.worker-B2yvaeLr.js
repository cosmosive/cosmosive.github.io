(function() {
	const A = Symbol("Comlink.proxy"), T = Symbol("Comlink.endpoint"), z = Symbol("Comlink.releaseProxy"), S = Symbol("Comlink.finalizer"), p = Symbol("Comlink.thrown"), P = (e) => typeof e == "object" && e !== null || typeof e == "function", x = new Map([["proxy", {
		canHandle: (e) => P(e) && e[A],
		serialize(e) {
			const { port1: r, port2: t } = new MessageChannel();
			return k(e, r), [t, [t]];
		},
		deserialize(e) {
			return e.start(), V(e);
		}
	}], ["throw", {
		canHandle: (e) => P(e) && p in e,
		serialize({ value: e }) {
			let r;
			return e instanceof Error ? r = {
				isError: !0,
				value: {
					message: e.message,
					name: e.name,
					stack: e.stack
				}
			} : r = {
				isError: !1,
				value: e
			}, [r, []];
		},
		deserialize(e) {
			throw e.isError ? Object.assign(new Error(e.value.message), e.value) : e.value;
		}
	}]]);
	function D(e, r) {
		for (const t of e) if (r === t || t === "*" || t instanceof RegExp && t.test(r)) return !0;
		return !1;
	}
	function k(e, r = globalThis, t = ["*"]) {
		r.addEventListener("message", function s(n) {
			if (!n || !n.data) return;
			if (!D(t, n.origin)) {
				console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
				return;
			}
			const { id: o, type: g, path: c } = Object.assign({ path: [] }, n.data), u = (n.data.argumentList || []).map(y);
			let a;
			try {
				const i = c.slice(0, -1).reduce((l, h) => l[h], e), f = c.reduce((l, h) => l[h], e);
				switch (g) {
					case "GET":
						a = f;
						break;
					case "SET":
						i[c.slice(-1)[0]] = y(n.data.value), a = !0;
						break;
					case "APPLY":
						a = f.apply(i, u);
						break;
					case "CONSTRUCT":
						a = H(new f(...u));
						break;
					case "ENDPOINT":
						{
							const { port1: l, port2: h } = new MessageChannel();
							k(e, h), a = v(l, [l]);
						}
						break;
					case "RELEASE":
						a = void 0;
						break;
					default: return;
				}
			} catch (i) {
				a = {
					value: i,
					[p]: 0
				};
			}
			Promise.resolve(a).catch((i) => ({
				value: i,
				[p]: 0
			})).then((i) => {
				const [f, l] = b(i);
				r.postMessage(Object.assign(Object.assign({}, f), { id: o }), l), g === "RELEASE" && (r.removeEventListener("message", s), M(r), S in e && typeof e[S] == "function" && e[S]());
			}).catch((i) => {
				const [f, l] = b({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[p]: 0
				});
				r.postMessage(Object.assign(Object.assign({}, f), { id: o }), l);
			});
		}), r.start && r.start();
	}
	function L(e) {
		return e.constructor.name === "MessagePort";
	}
	function M(e) {
		L(e) && e.close();
	}
	function V(e, r) {
		const t = /* @__PURE__ */ new Map();
		return e.addEventListener("message", function(n) {
			const { data: o } = n;
			if (!o || !o.id) return;
			const g = t.get(o.id);
			if (g) try {
				g(o);
			} finally {
				t.delete(o.id);
			}
		}), C(e, t, [], r);
	}
	function w(e) {
		if (e) throw new Error("Proxy has been released and is not useable");
	}
	function O(e) {
		return m(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			M(e);
		});
	}
	const E = /* @__PURE__ */ new WeakMap(), d = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
		const r = (E.get(e) || 0) - 1;
		E.set(e, r), r === 0 && O(e);
	});
	function j(e, r) {
		const t = (E.get(r) || 0) + 1;
		E.set(r, t), d && d.register(e, r, e);
	}
	function F(e) {
		d && d.unregister(e);
	}
	function C(e, r, t = [], s = function() {}) {
		let n = !1;
		const o = new Proxy(s, {
			get(g, c) {
				if (w(n), c === z) return () => {
					F(o), O(e), r.clear(), n = !0;
				};
				if (c === "then") {
					if (t.length === 0) return { then: () => o };
					const u = m(e, r, {
						type: "GET",
						path: t.map((a) => a.toString())
					}).then(y);
					return u.then.bind(u);
				}
				return C(e, r, [...t, c]);
			},
			set(g, c, u) {
				w(n);
				const [a, i] = b(u);
				return m(e, r, {
					type: "SET",
					path: [...t, c].map((f) => f.toString()),
					value: a
				}, i).then(y);
			},
			apply(g, c, u) {
				w(n);
				const a = t[t.length - 1];
				if (a === T) return m(e, r, { type: "ENDPOINT" }).then(y);
				if (a === "bind") return C(e, r, t.slice(0, -1));
				const [i, f] = R(u);
				return m(e, r, {
					type: "APPLY",
					path: t.map((l) => l.toString()),
					argumentList: i
				}, f).then(y);
			},
			construct(g, c) {
				w(n);
				const [u, a] = R(c);
				return m(e, r, {
					type: "CONSTRUCT",
					path: t.map((i) => i.toString()),
					argumentList: u
				}, a).then(y);
			}
		});
		return j(o, e), o;
	}
	function _(e) {
		return Array.prototype.concat.apply([], e);
	}
	function R(e) {
		const r = e.map(b);
		return [r.map((t) => t[0]), _(r.map((t) => t[1]))];
	}
	const N = /* @__PURE__ */ new WeakMap();
	function v(e, r) {
		return N.set(e, r), e;
	}
	function H(e) {
		return Object.assign(e, { [A]: !0 });
	}
	function b(e) {
		for (const [r, t] of x) if (t.canHandle(e)) {
			const [s, n] = t.serialize(e);
			return [{
				type: "HANDLER",
				name: r,
				value: s
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
	function m(e, r, t, s) {
		return new Promise((n) => {
			const o = I();
			r.set(o, n), e.start && e.start(), e.postMessage(Object.assign({ id: o }, t), s);
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
	function G(e) {
		let r, t;
		if (Array.isArray(e)) r = e;
		else if (e != null && typeof e == "object" && "entries" in e && Array.isArray(e.entries)) {
			const s = e;
			r = s.entries, typeof s.version == "number" && Number.isFinite(s.version) && (t = s.version);
		} else throw new U("OpenNGC catalog JSON must be a top-level array or { entries: [...] }");
		return {
			entries: r.map((s) => ({
				...s,
				name: W(s.name)
			})),
			...t !== void 0 && { schemaVersion: t }
		};
	}
	async function Y(e) {
		const r = await fetch(e);
		if (!r.ok) throw new Error(`Failed to load deep-sky catalog: ${r.status}`);
		return G(await r.json());
	}
	k({ async loadCatalog(e) {
		return Y(e);
	} });
})();
