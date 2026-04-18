(function() {
	const k = Symbol("Comlink.proxy"), B = Symbol("Comlink.endpoint"), v = Symbol("Comlink.releaseProxy"), p = Symbol("Comlink.finalizer"), T = Symbol("Comlink.thrown"), H = (t) => typeof t == "object" && t !== null || typeof t == "function", V = new Map([["proxy", {
		canHandle: (t) => H(t) && t[k],
		serialize(t) {
			const { port1: n, port2: e } = new MessageChannel();
			return I(t, n), [e, [e]];
		},
		deserialize(t) {
			return t.start(), et(t);
		}
	}], ["throw", {
		canHandle: (t) => H(t) && T in t,
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
	function I(t, n = globalThis, e = ["*"]) {
		n.addEventListener("message", function s(o) {
			if (!o || !o.data) return;
			if (!tt(e, o.origin)) {
				console.warn(`Invalid origin '${o.origin}' for comlink proxy`);
				return;
			}
			const { id: a, type: u, path: l } = Object.assign({ path: [] }, o.data), R = (o.data.argumentList || []).map(A);
			let S;
			try {
				const E = l.slice(0, -1).reduce((_, m) => _[m], t), i = l.reduce((_, m) => _[m], t);
				switch (u) {
					case "GET":
						S = i;
						break;
					case "SET":
						E[l.slice(-1)[0]] = A(o.data.value), S = !0;
						break;
					case "APPLY":
						S = i.apply(E, R);
						break;
					case "CONSTRUCT":
						S = it(new i(...R));
						break;
					case "ENDPOINT":
						{
							const { port1: _, port2: m } = new MessageChannel();
							I(t, m), S = st(_, [_]);
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
					[T]: 0
				};
			}
			Promise.resolve(S).catch((E) => ({
				value: E,
				[T]: 0
			})).then((E) => {
				const [i, _] = g(E);
				n.postMessage(Object.assign(Object.assign({}, i), { id: a }), _), u === "RELEASE" && (n.removeEventListener("message", s), F(n), p in t && typeof t[p] == "function" && t[p]());
			}).catch((E) => {
				const [i, _] = g({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[T]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, i), { id: a }), _);
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
		return t.addEventListener("message", function(o) {
			const { data: a } = o;
			if (!a || !a.id) return;
			const u = e.get(a.id);
			if (u) try {
				u(a);
			} finally {
				e.delete(a.id);
			}
		}), P(t, e, [], n);
	}
	function N(t) {
		if (t) throw new Error("Proxy has been released and is not useable");
	}
	function z(t) {
		return f(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			F(t);
		});
	}
	const M = /* @__PURE__ */ new WeakMap(), O = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const n = (M.get(t) || 0) - 1;
		M.set(t, n), n === 0 && z(t);
	});
	function rt(t, n) {
		const e = (M.get(n) || 0) + 1;
		M.set(n, e), O && O.register(t, n, t);
	}
	function at(t) {
		O && O.unregister(t);
	}
	function P(t, n, e = [], s = function() {}) {
		let o = !1;
		const a = new Proxy(s, {
			get(u, l) {
				if (N(o), l === v) return () => {
					at(a), z(t), n.clear(), o = !0;
				};
				if (l === "then") {
					if (e.length === 0) return { then: () => a };
					const R = f(t, n, {
						type: "GET",
						path: e.map((S) => S.toString())
					}).then(A);
					return R.then.bind(R);
				}
				return P(t, n, [...e, l]);
			},
			set(u, l, R) {
				N(o);
				const [S, E] = g(R);
				return f(t, n, {
					type: "SET",
					path: [...e, l].map((i) => i.toString()),
					value: S
				}, E).then(A);
			},
			apply(u, l, R) {
				N(o);
				const S = e[e.length - 1];
				if (S === B) return f(t, n, { type: "ENDPOINT" }).then(A);
				if (S === "bind") return P(t, n, e.slice(0, -1));
				const [E, i] = K(R);
				return f(t, n, {
					type: "APPLY",
					path: e.map((_) => _.toString()),
					argumentList: E
				}, i).then(A);
			},
			construct(u, l) {
				N(o);
				const [R, S] = K(l);
				return f(t, n, {
					type: "CONSTRUCT",
					path: e.map((E) => E.toString()),
					argumentList: R
				}, S).then(A);
			}
		});
		return rt(a, t), a;
	}
	function ot(t) {
		return Array.prototype.concat.apply([], t);
	}
	function K(t) {
		const n = t.map(g);
		return [n.map((e) => e[0]), ot(n.map((e) => e[1]))];
	}
	const Y = /* @__PURE__ */ new WeakMap();
	function st(t, n) {
		return Y.set(t, n), t;
	}
	function it(t) {
		return Object.assign(t, { [k]: !0 });
	}
	function g(t) {
		for (const [n, e] of V) if (e.canHandle(t)) {
			const [s, o] = e.serialize(t);
			return [{
				type: "HANDLER",
				name: n,
				value: s
			}, o];
		}
		return [{
			type: "RAW",
			value: t
		}, Y.get(t) || []];
	}
	function A(t) {
		switch (t.type) {
			case "HANDLER": return V.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function f(t, n, e, s) {
		return new Promise((o) => {
			const a = ct();
			n.set(a, o), t.start && t.start(), t.postMessage(Object.assign({ id: a }, e), s);
		});
	}
	function ct() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
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
	}, ut = {
		[r.SUN]: {
			name: "Sun",
			type: "star",
			color: "#f5e042",
			radiusKm: 696340,
			kind: "star",
			textureResolution: 512
		},
		[r.MERCURY]: {
			name: "Mercury",
			type: "planet",
			color: "#9c8a78",
			radiusKm: 2439.7,
			kind: "barren",
			textureResolution: 192
		},
		[r.VENUS]: {
			name: "Venus",
			type: "planet",
			color: "#f0e3a0",
			radiusKm: 6051.8,
			kind: "molten",
			textureResolution: 224
		},
		[r.EARTH]: {
			name: "Earth",
			type: "planet",
			color: "#4a90d9",
			radiusKm: 6371,
			kind: "oceanic",
			textureResolution: 224,
			features: { axialSpin: "eop" }
		},
		[r.MARS]: {
			name: "Mars",
			type: "planet",
			color: "#c1440e",
			radiusKm: 3389.5,
			kind: "desert",
			textureResolution: 192
		},
		[r.JUPITER]: {
			name: "Jupiter",
			type: "planet",
			color: "#c8985a",
			radiusKm: 69911,
			kind: "gasGiant",
			textureResolution: 256
		},
		[r.SATURN]: {
			name: "Saturn",
			type: "planet",
			color: "#e8c673",
			radiusKm: 58232,
			kind: "gasGiant",
			textureResolution: 256,
			features: { rings: !0 }
		},
		[r.URANUS]: {
			name: "Uranus",
			type: "planet",
			color: "#a3d6e0",
			radiusKm: 25362,
			kind: "iceGiant",
			textureResolution: 224
		},
		[r.NEPTUNE]: {
			name: "Neptune",
			type: "planet",
			color: "#4166f5",
			radiusKm: 24622,
			kind: "iceGiant",
			textureResolution: 224
		},
		[r.PLUTO]: {
			name: "Pluto",
			type: "dwarf_planet",
			color: "#a26847",
			radiusKm: 1188.3,
			kind: "barren",
			textureResolution: 192
		},
		[r.MOON]: {
			name: "Moon",
			type: "moon",
			radiusKm: 1737,
			kind: "barren",
			textureResolution: 192
		}
	}, lt = 149597870.7, St = 648e3 / Math.PI, G = 1500, Et = G;
	G / 15;
	100 / St;
	Et + 500;
	function Rt(t) {
		return {
			name: t.name,
			type: t.type,
			color: t.color,
			radiusKm: t.radiusKm
		};
	}
	const J = Object.fromEntries(Object.entries(ut).map(([t, n]) => [t, Rt(n)])), h = [
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
	], d = J[r.EARTH]?.radiusKm ?? 6371;
	function _t(t) {
		return {
			x: t.x * 15,
			y: t.y * 15,
			z: t.z * 15
		};
	}
	const D = J[r.SUN]?.radiusKm ?? 696340, At = d / D, U = .04;
	d / U;
	U / d / (15 / lt);
	function ft(t) {
		return !Number.isFinite(t) || t <= 0 ? U : t / At * U;
	}
	function Ut(t) {
		return !Number.isFinite(t) || t <= 0 ? U : ft(t / D);
	}
	Ut(D);
	const y = 149597870.69098932;
	2 * Math.PI;
	3600 * (180 / Math.PI);
	const j = 10800 * 60;
	2 * j;
	const mt = j / Math.PI;
	-.17 - 5 * Math.log10(mt);
	695700 / y;
	const C = .996647180302104;
	C * C;
	const W = 6378.1366;
	W / y;
	W * C;
	1738.1 / y;
	1736 / y;
	function L(t) {
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
	var Tt = class {
		constructor(t) {
			this.rot = t;
		}
	};
	function Nt(t) {
		if (!(t instanceof Q)) throw `Not an instance of the Observer class: ${t}`;
		if (L(t.latitude), L(t.longitude), L(t.height), t.latitude < -90 || t.latitude > 90) throw `Latitude ${t.latitude} is out of range. Must be -90..+90.`;
		return t;
	}
	var Q = class {
		constructor(t, n, e) {
			this.latitude = t, this.longitude = n, this.height = e, Nt(this);
		}
	};
	new Tt([
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
	function b(t, n) {
		return t.x = n.x, t.y = n.y, t.z = n.z, t;
	}
	function Mt(t, n, e) {
		if (t.length === 0) return null;
		if (t.length === 1) {
			const i = t[0].position;
			return e ? b(e, i) : i;
		}
		if (n <= t[0].time.jd) {
			const i = t[0].position;
			return e ? b(e, i) : i;
		}
		if (n >= t[t.length - 1].time.jd) {
			const i = t[t.length - 1].position;
			return e ? b(e, i) : i;
		}
		let s = 0, o = t.length - 1;
		for (; o - s > 1;) {
			const i = s + o >> 1;
			t[i].time.jd <= n ? s = i : o = i;
		}
		const a = t[s], u = t[o], l = (n - a.time.jd) / (u.time.jd - a.time.jd), R = a.position.x + l * (u.position.x - a.position.x), S = a.position.y + l * (u.position.y - a.position.y), E = a.position.z + l * (u.position.z - a.position.z);
		return e ? (e.x = R, e.y = S, e.z = E, e) : {
			x: R,
			y: S,
			z: E
		};
	}
	function Ot(t, n, e = h) {
		const s = {};
		for (const o of e) {
			const a = n[o] ?? [], u = a.length ? Mt(a, t) : null;
			if (u) {
				const l = _t(u);
				s[o] = [
					l.x,
					l.y,
					l.z
				];
			}
		}
		return s;
	}
	function gt(t) {
		t.fill(NaN);
	}
	function yt(t, n) {
		gt(t);
		const e = h;
		for (const s of Object.keys(n)) {
			const o = e.indexOf(s);
			if (o < 0) continue;
			const a = n[s];
			if (!a) continue;
			const u = o * 3;
			t[u] = a[0], t[u + 1] = a[1], t[u + 2] = a[2];
		}
	}
	let w = null, x = null;
	I({
		async init(t) {
			x = new Float32Array(t);
		},
		async loadBatch(t, n) {
			return w = n, {
				type: "ready",
				runId: t
			};
		},
		async compute(t, n, e) {
			try {
				if (!w) return {
					type: "error",
					runId: t,
					seq: n,
					message: "No ephemeris loaded"
				};
				const s = Ot(e, w, h);
				return x ? (yt(x, s), {
					type: "positions",
					runId: t,
					seq: n,
					jd: e
				}) : {
					type: "positions",
					runId: t,
					seq: n,
					jd: e,
					positions: s
				};
			} catch (s) {
				return {
					type: "error",
					runId: t,
					seq: n,
					message: s instanceof Error ? s.message : String(s)
				};
			}
		}
	});
})();
