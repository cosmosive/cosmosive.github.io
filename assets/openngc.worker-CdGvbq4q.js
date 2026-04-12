(function() {
	const S = Symbol("Comlink.proxy"), z = Symbol("Comlink.endpoint"), N = Symbol("Comlink.releaseProxy"), k = Symbol("Comlink.finalizer"), w = Symbol("Comlink.thrown"), M = (e) => typeof e == "object" && e !== null || typeof e == "function", x = new Map([["proxy", {
		canHandle: (e) => M(e) && e[S],
		serialize(e) {
			const { port1: t, port2: r } = new MessageChannel();
			return A(e, t), [r, [r]];
		},
		deserialize(e) {
			return e.start(), _(e);
		}
	}], ["throw", {
		canHandle: (e) => M(e) && w in e,
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
	function A(e, t = globalThis, r = ["*"]) {
		t.addEventListener("message", function l(n) {
			if (!n || !n.data) return;
			if (!L(r, n.origin)) {
				console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
				return;
			}
			const { id: s, type: g, path: i } = Object.assign({ path: [] }, n.data), u = (n.data.argumentList || []).map(y);
			let a;
			try {
				const o = i.slice(0, -1).reduce((c, d) => c[d], e), f = i.reduce((c, d) => c[d], e);
				switch (g) {
					case "GET":
						a = f;
						break;
					case "SET":
						o[i.slice(-1)[0]] = y(n.data.value), a = !0;
						break;
					case "APPLY":
						a = f.apply(o, u);
						break;
					case "CONSTRUCT":
						a = I(new f(...u));
						break;
					case "ENDPOINT":
						{
							const { port1: c, port2: d } = new MessageChannel();
							A(e, d), a = H(c, [c]);
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
					[w]: 0
				};
			}
			Promise.resolve(a).catch((o) => ({
				value: o,
				[w]: 0
			})).then((o) => {
				const [f, c] = p(o);
				t.postMessage(Object.assign(Object.assign({}, f), { id: s }), c), g === "RELEASE" && (t.removeEventListener("message", l), C(t), k in e && typeof e[k] == "function" && e[k]());
			}).catch((o) => {
				const [f, c] = p({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[w]: 0
				});
				t.postMessage(Object.assign(Object.assign({}, f), { id: s }), c);
			});
		}), t.start && t.start();
	}
	function V(e) {
		return e.constructor.name === "MessagePort";
	}
	function C(e) {
		V(e) && e.close();
	}
	function _(e, t) {
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
		}), P(e, r, [], t);
	}
	function h(e) {
		if (e) throw new Error("Proxy has been released and is not useable");
	}
	function R(e) {
		return m(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			C(e);
		});
	}
	const E = /* @__PURE__ */ new WeakMap(), b = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
		const t = (E.get(e) || 0) - 1;
		E.set(e, t), t === 0 && R(e);
	});
	function j(e, t) {
		const r = (E.get(t) || 0) + 1;
		E.set(t, r), b && b.register(e, t, e);
	}
	function D(e) {
		b && b.unregister(e);
	}
	function P(e, t, r = [], l = function() {}) {
		let n = !1;
		const s = new Proxy(l, {
			get(g, i) {
				if (h(n), i === N) return () => {
					D(s), R(e), t.clear(), n = !0;
				};
				if (i === "then") {
					if (r.length === 0) return { then: () => s };
					const u = m(e, t, {
						type: "GET",
						path: r.map((a) => a.toString())
					}).then(y);
					return u.then.bind(u);
				}
				return P(e, t, [...r, i]);
			},
			set(g, i, u) {
				h(n);
				const [a, o] = p(u);
				return m(e, t, {
					type: "SET",
					path: [...r, i].map((f) => f.toString()),
					value: a
				}, o).then(y);
			},
			apply(g, i, u) {
				h(n);
				const a = r[r.length - 1];
				if (a === z) return m(e, t, { type: "ENDPOINT" }).then(y);
				if (a === "bind") return P(e, t, r.slice(0, -1));
				const [o, f] = O(u);
				return m(e, t, {
					type: "APPLY",
					path: r.map((c) => c.toString()),
					argumentList: o
				}, f).then(y);
			},
			construct(g, i) {
				h(n);
				const [u, a] = O(i);
				return m(e, t, {
					type: "CONSTRUCT",
					path: r.map((o) => o.toString()),
					argumentList: u
				}, a).then(y);
			}
		});
		return j(s, e), s;
	}
	function F(e) {
		return Array.prototype.concat.apply([], e);
	}
	function O(e) {
		const t = e.map(p);
		return [t.map((r) => r[0]), F(t.map((r) => r[1]))];
	}
	const T = /* @__PURE__ */ new WeakMap();
	function H(e, t) {
		return T.set(e, t), e;
	}
	function I(e) {
		return Object.assign(e, { [S]: !0 });
	}
	function p(e) {
		for (const [t, r] of x) if (r.canHandle(e)) {
			const [l, n] = r.serialize(e);
			return [{
				type: "HANDLER",
				name: t,
				value: l
			}, n];
		}
		return [{
			type: "RAW",
			value: e
		}, T.get(e) || []];
	}
	function y(e) {
		switch (e.type) {
			case "HANDLER": return x.get(e.name).deserialize(e.value);
			case "RAW": return e.value;
		}
	}
	function m(e, t, r, l) {
		return new Promise((n) => {
			const s = W();
			t.set(s, n), e.start && e.start(), e.postMessage(Object.assign({ id: s }, r), l);
		});
	}
	function W() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	function U(e) {
		return e.replace(/,(?!\s)/g, ", ");
	}
	async function G(e) {
		const t = await fetch(e);
		if (!t.ok) throw new Error(`Failed to load deep-sky catalog: ${t.status}`);
		const r = await t.json();
		return (Array.isArray(r) ? r : Array.isArray(r.entries) ? r.entries : []).map((l) => ({
			...l,
			name: U(l.name)
		}));
	}
	A({ async loadCatalog(e) {
		return G(e);
	} });
})();
