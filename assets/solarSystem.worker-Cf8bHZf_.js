(function() {
	const H = Symbol("Comlink.proxy"), v = Symbol("Comlink.endpoint"), B = Symbol("Comlink.releaseProxy"), g = Symbol("Comlink.finalizer"), N = Symbol("Comlink.thrown"), V = (t) => typeof t == "object" && t !== null || typeof t == "function", z = new Map([["proxy", {
		canHandle: (t) => V(t) && t[H],
		serialize(t) {
			const { port1: n, port2: e } = new MessageChannel();
			return y(t, n), [e, [e]];
		},
		deserialize(t) {
			return t.start(), et(t);
		}
	}], ["throw", {
		canHandle: (t) => V(t) && N in t,
		serialize({ value: t }) {
			let n;
			return t instanceof Error ? n = {
				isError: !0,
				value: {
					message: t.message,
					name: t.name,
					stack: t.stack
				}
			} : n = {
				isError: !1,
				value: t
			}, [n, []];
		},
		deserialize(t) {
			throw t.isError ? Object.assign(new Error(t.value.message), t.value) : t.value;
		}
	}]]);
	function tt(t, n) {
		for (const e of t) if (n === e || e === "*" || e instanceof RegExp && e.test(n)) return !0;
		return !1;
	}
	function y(t, n = globalThis, e = ["*"]) {
		n.addEventListener("message", function o(s) {
			if (!s || !s.data) return;
			if (!tt(e, s.origin)) {
				console.warn(`Invalid origin '${s.origin}' for comlink proxy`);
				return;
			}
			const { id: a, type: u, path: l } = Object.assign({ path: [] }, s.data), _ = (s.data.argumentList || []).map(R);
			let S;
			try {
				const E = l.slice(0, -1).reduce((A, m) => A[m], t), i = l.reduce((A, m) => A[m], t);
				switch (u) {
					case "GET":
						S = i;
						break;
					case "SET":
						E[l.slice(-1)[0]] = R(s.data.value), S = !0;
						break;
					case "APPLY":
						S = i.apply(E, _);
						break;
					case "CONSTRUCT":
						S = it(new i(..._));
						break;
					case "ENDPOINT":
						{
							const { port1: A, port2: m } = new MessageChannel();
							y(t, m), S = ot(A, [A]);
						}
						break;
					case "RELEASE":
						S = void 0;
						break;
					default: return;
				}
			} catch (E) {
				S = {
					value: E,
					[N]: 0
				};
			}
			Promise.resolve(S).catch((E) => ({
				value: E,
				[N]: 0
			})).then((E) => {
				const [i, A] = I(E);
				n.postMessage(Object.assign(Object.assign({}, i), { id: a }), A), u === "RELEASE" && (n.removeEventListener("message", o), F(n), g in t && typeof t[g] == "function" && t[g]());
			}).catch((E) => {
				const [i, A] = I({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[N]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, i), { id: a }), A);
			});
		}), n.start && n.start();
	}
	function nt(t) {
		return t.constructor.name === "MessagePort";
	}
	function F(t) {
		nt(t) && t.close();
	}
	function et(t, n) {
		const e = /* @__PURE__ */ new Map();
		return t.addEventListener("message", function(s) {
			const { data: a } = s;
			if (!a || !a.id) return;
			const u = e.get(a.id);
			if (u) try {
				u(a);
			} finally {
				e.delete(a.id);
			}
		}), p(t, e, [], n);
	}
	function T(t) {
		if (t) throw new Error("Proxy has been released and is not useable");
	}
	function k(t) {
		return f(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			F(t);
		});
	}
	const M = /* @__PURE__ */ new WeakMap(), O = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const n = (M.get(t) || 0) - 1;
		M.set(t, n), n === 0 && k(t);
	});
	function rt(t, n) {
		const e = (M.get(n) || 0) + 1;
		M.set(n, e), O && O.register(t, n, t);
	}
	function at(t) {
		O && O.unregister(t);
	}
	function p(t, n, e = [], o = function() {}) {
		let s = !1;
		const a = new Proxy(o, {
			get(u, l) {
				if (T(s), l === B) return () => {
					at(a), k(t), n.clear(), s = !0;
				};
				if (l === "then") {
					if (e.length === 0) return { then: () => a };
					const _ = f(t, n, {
						type: "GET",
						path: e.map((S) => S.toString())
					}).then(R);
					return _.then.bind(_);
				}
				return p(t, n, [...e, l]);
			},
			set(u, l, _) {
				T(s);
				const [S, E] = I(_);
				return f(t, n, {
					type: "SET",
					path: [...e, l].map((i) => i.toString()),
					value: S
				}, E).then(R);
			},
			apply(u, l, _) {
				T(s);
				const S = e[e.length - 1];
				if (S === v) return f(t, n, { type: "ENDPOINT" }).then(R);
				if (S === "bind") return p(t, n, e.slice(0, -1));
				const [E, i] = Y(_);
				return f(t, n, {
					type: "APPLY",
					path: e.map((A) => A.toString()),
					argumentList: E
				}, i).then(R);
			},
			construct(u, l) {
				T(s);
				const [_, S] = Y(l);
				return f(t, n, {
					type: "CONSTRUCT",
					path: e.map((E) => E.toString()),
					argumentList: _
				}, S).then(R);
			}
		});
		return rt(a, t), a;
	}
	function st(t) {
		return Array.prototype.concat.apply([], t);
	}
	function Y(t) {
		const n = t.map(I);
		return [n.map((e) => e[0]), st(n.map((e) => e[1]))];
	}
	const K = /* @__PURE__ */ new WeakMap();
	function ot(t, n) {
		return K.set(t, n), t;
	}
	function it(t) {
		return Object.assign(t, { [H]: !0 });
	}
	function I(t) {
		for (const [n, e] of z) if (e.canHandle(t)) {
			const [o, s] = e.serialize(t);
			return [{
				type: "HANDLER",
				name: n,
				value: o
			}, s];
		}
		return [{
			type: "RAW",
			value: t
		}, K.get(t) || []];
	}
	function R(t) {
		switch (t.type) {
			case "HANDLER": return z.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function f(t, n, e, o) {
		return new Promise((s) => {
			const a = ct();
			n.set(a, s), t.start && t.start(), t.postMessage(Object.assign({ id: a }, e), o);
		});
	}
	function ct() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	const ut = 149597870.7, lt = 648e3 / Math.PI, J = 1500, St = J;
	J / 15;
	100 / lt;
	St + 500;
	const r = {
		SUN: "10",
		MERCURY: "199",
		VENUS: "299",
		EARTH: "399",
		MARS: "499",
		JUPITER: "599",
		SATURN: "699",
		URANUS: "799",
		NEPTUNE: "899",
		PLUTO: "999",
		MOON: "301"
	}, G = {
		[r.SUN]: {
			name: "Sun",
			type: "star",
			color: "#f5e042",
			radiusKm: 696340
		},
		[r.MERCURY]: {
			name: "Mercury",
			type: "planet",
			color: "#9c8a78",
			radiusKm: 2439.7
		},
		[r.VENUS]: {
			name: "Venus",
			type: "planet",
			color: "#f0e3a0",
			radiusKm: 6051.8
		},
		[r.EARTH]: {
			name: "Earth",
			type: "planet",
			color: "#4a90d9",
			radiusKm: 6371
		},
		[r.MARS]: {
			name: "Mars",
			type: "planet",
			color: "#c1440e",
			radiusKm: 3389.5
		},
		[r.JUPITER]: {
			name: "Jupiter",
			type: "planet",
			color: "#c8985a",
			radiusKm: 69911
		},
		[r.SATURN]: {
			name: "Saturn",
			type: "planet",
			color: "#e8c673",
			radiusKm: 58232
		},
		[r.URANUS]: {
			name: "Uranus",
			type: "planet",
			color: "#a3d6e0",
			radiusKm: 25362
		},
		[r.NEPTUNE]: {
			name: "Neptune",
			type: "planet",
			color: "#4166f5",
			radiusKm: 24622
		},
		[r.PLUTO]: {
			name: "Pluto",
			type: "dwarf_planet",
			color: "#a26847",
			radiusKm: 1188.3
		},
		[r.MOON]: {
			name: "Moon",
			type: "moon",
			radiusKm: 1737
		}
	}, h = [
		r.SUN,
		r.MERCURY,
		r.VENUS,
		r.EARTH,
		r.MARS,
		r.JUPITER,
		r.SATURN,
		r.URANUS,
		r.NEPTUNE,
		r.PLUTO
	], D = G[r.EARTH]?.radiusKm ?? 6371;
	function Et(t) {
		return {
			x: t.x * 15,
			y: t.y * 15,
			z: t.z * 15
		};
	}
	const L = G[r.SUN]?.radiusKm ?? 696340, _t = D / L, U = .04;
	D / U;
	U / D / (15 / ut);
	function At(t) {
		return !Number.isFinite(t) || t <= 0 ? U : t / _t * U;
	}
	function Rt(t) {
		return !Number.isFinite(t) || t <= 0 ? U : At(t / L);
	}
	Rt(L);
	const P = 149597870.69098932;
	2 * Math.PI;
	3600 * (180 / Math.PI);
	const j = 10800 * 60;
	2 * j;
	const ft = j / Math.PI;
	-.17 - 5 * Math.log10(ft);
	695700 / P;
	const C = .996647180302104;
	C * C;
	const W = 6378.1366;
	W / P;
	W * C;
	1738.1 / P;
	1736 / P;
	function d(t) {
		if (!Number.isFinite(t)) throw console.trace(), `Value is not a finite number: ${t}`;
		return t;
	}
	var c;
	(function(t) {
		t.Sun = "Sun", t.Moon = "Moon", t.Mercury = "Mercury", t.Venus = "Venus", t.Earth = "Earth", t.Mars = "Mars", t.Jupiter = "Jupiter", t.Saturn = "Saturn", t.Uranus = "Uranus", t.Neptune = "Neptune", t.Pluto = "Pluto", t.SSB = "SSB", t.EMB = "EMB", t.Star1 = "Star1", t.Star2 = "Star2", t.Star3 = "Star3", t.Star4 = "Star4", t.Star5 = "Star5", t.Star6 = "Star6", t.Star7 = "Star7", t.Star8 = "Star8";
	})(c || (c = {}));
	c.Star1, c.Star2, c.Star3, c.Star4, c.Star5, c.Star6, c.Star7, c.Star8;
	var $;
	(function(t) {
		t[t.From2000 = 0] = "From2000", t[t.Into2000 = 1] = "Into2000";
	})($ || ($ = {}));
	var Ut = class {
		constructor(t) {
			this.rot = t;
		}
	};
	function mt(t) {
		if (!(t instanceof Q)) throw `Not an instance of the Observer class: ${t}`;
		if (d(t.latitude), d(t.longitude), d(t.height), t.latitude < -90 || t.latitude > 90) throw `Latitude ${t.latitude} is out of range. Must be -90..+90.`;
		return t;
	}
	var Q = class {
		constructor(t, n, e) {
			this.latitude = t, this.longitude = n, this.height = e, mt(this);
		}
	};
	new Ut([
		[
			.999432765338654,
			-.0336771074697641,
			0
		],
		[
			.0303959428906285,
			.902057912352809,
			.430543388542295
		],
		[
			-.0144994559663353,
			-.430299169409101,
			.902569881273754
		]
	]);
	var X;
	(function(t) {
		t[t.Pericenter = 0] = "Pericenter", t[t.Apocenter = 1] = "Apocenter";
	})(X || (X = {}));
	var Z;
	(function(t) {
		t.Penumbral = "penumbral", t.Partial = "partial", t.Annular = "annular", t.Total = "total";
	})(Z || (Z = {}));
	var q;
	(function(t) {
		t[t.Invalid = 0] = "Invalid", t[t.Ascending = 1] = "Ascending", t[t.Descending = -1] = "Descending";
	})(q || (q = {}));
	new Q(40.7128, -74.006, 10);
	r.SUN, c.Sun, r.MERCURY, c.Mercury, r.VENUS, c.Venus, r.EARTH, c.Earth, r.MARS, c.Mars, r.JUPITER, c.Jupiter, r.SATURN, c.Saturn, r.URANUS, c.Uranus, r.NEPTUNE, c.Neptune, r.PLUTO, c.Pluto, r.MOON, c.Moon;
	2 * Math.PI;
	Math.PI / (180 * 3600);
	function w(t, n) {
		return t.x = n.x, t.y = n.y, t.z = n.z, t;
	}
	function Nt(t, n, e) {
		if (t.length === 0) return null;
		if (t.length === 1) {
			const i = t[0].position;
			return e ? w(e, i) : i;
		}
		if (n <= t[0].time.jd) {
			const i = t[0].position;
			return e ? w(e, i) : i;
		}
		if (n >= t[t.length - 1].time.jd) {
			const i = t[t.length - 1].position;
			return e ? w(e, i) : i;
		}
		let o = 0, s = t.length - 1;
		for (; s - o > 1;) {
			const i = o + s >> 1;
			t[i].time.jd <= n ? o = i : s = i;
		}
		const a = t[o], u = t[s], l = (n - a.time.jd) / (u.time.jd - a.time.jd), _ = a.position.x + l * (u.position.x - a.position.x), S = a.position.y + l * (u.position.y - a.position.y), E = a.position.z + l * (u.position.z - a.position.z);
		return e ? (e.x = _, e.y = S, e.z = E, e) : {
			x: _,
			y: S,
			z: E
		};
	}
	function Tt(t, n, e = h) {
		const o = {};
		for (const s of e) {
			const a = n[s] ?? [], u = a.length ? Nt(a, t) : null;
			if (u) {
				const l = Et(u);
				o[s] = [
					l.x,
					l.y,
					l.z
				];
			}
		}
		return o;
	}
	function Mt(t) {
		t.fill(NaN);
	}
	function Ot(t, n) {
		Mt(t);
		const e = h;
		for (const o of Object.keys(n)) {
			const s = e.indexOf(o);
			if (s < 0) continue;
			const a = n[o];
			if (!a) continue;
			const u = s * 3;
			t[u] = a[0], t[u + 1] = a[1], t[u + 2] = a[2];
		}
	}
	let b = null, x = null;
	y({
		async init(t) {
			x = new Float32Array(t);
		},
		async loadBatch(t, n) {
			return b = n, {
				type: "ready",
				runId: t
			};
		},
		async compute(t, n, e) {
			try {
				if (!b) return {
					type: "error",
					runId: t,
					seq: n,
					message: "No ephemeris loaded"
				};
				const o = Tt(e, b, h);
				return x ? (Ot(x, o), {
					type: "positions",
					runId: t,
					seq: n,
					jd: e
				}) : {
					type: "positions",
					runId: t,
					seq: n,
					jd: e,
					positions: o
				};
			} catch (o) {
				return {
					type: "error",
					runId: t,
					seq: n,
					message: o instanceof Error ? o.message : String(o)
				};
			}
		}
	});
})();
