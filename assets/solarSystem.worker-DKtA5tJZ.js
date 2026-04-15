(function() {
	const w = Symbol("Comlink.proxy"), Q = Symbol("Comlink.endpoint"), X = Symbol("Comlink.releaseProxy"), P = Symbol("Comlink.finalizer"), m = Symbol("Comlink.thrown"), b = (t) => typeof t == "object" && t !== null || typeof t == "function", x = new Map([["proxy", {
		canHandle: (t) => b(t) && t[w],
		serialize(t) {
			const { port1: n, port2: e } = new MessageChannel();
			return y(t, n), [e, [e]];
		},
		deserialize(t) {
			return t.start(), v(t);
		}
	}], ["throw", {
		canHandle: (t) => b(t) && m in t,
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
	function Z(t, n) {
		for (const e of t) if (n === e || e === "*" || e instanceof RegExp && e.test(n)) return !0;
		return !1;
	}
	function y(t, n = globalThis, e = ["*"]) {
		n.addEventListener("message", function s(o) {
			if (!o || !o.data) return;
			if (!Z(e, o.origin)) {
				console.warn(`Invalid origin '${o.origin}' for comlink proxy`);
				return;
			}
			const { id: a, type: u, path: l } = Object.assign({ path: [] }, o.data), A = (o.data.argumentList || []).map(f);
			let S;
			try {
				const E = l.slice(0, -1).reduce((_, U) => _[U], t), i = l.reduce((_, U) => _[U], t);
				switch (u) {
					case "GET":
						S = i;
						break;
					case "SET":
						E[l.slice(-1)[0]] = f(o.data.value), S = !0;
						break;
					case "APPLY":
						S = i.apply(E, A);
						break;
					case "CONSTRUCT":
						S = rt(new i(...A));
						break;
					case "ENDPOINT":
						{
							const { port1: _, port2: U } = new MessageChannel();
							y(t, U), S = et(_, [_]);
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
					[m]: 0
				};
			}
			Promise.resolve(S).catch((E) => ({
				value: E,
				[m]: 0
			})).then((E) => {
				const [i, _] = O(E);
				n.postMessage(Object.assign(Object.assign({}, i), { id: a }), _), u === "RELEASE" && (n.removeEventListener("message", s), H(n), P in t && typeof t[P] == "function" && t[P]());
			}).catch((E) => {
				const [i, _] = O({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[m]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, i), { id: a }), _);
			});
		}), n.start && n.start();
	}
	function q(t) {
		return t.constructor.name === "MessagePort";
	}
	function H(t) {
		q(t) && t.close();
	}
	function v(t, n) {
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
		}), h(t, e, [], n);
	}
	function M(t) {
		if (t) throw new Error("Proxy has been released and is not useable");
	}
	function V(t) {
		return R(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			H(t);
		});
	}
	const N = /* @__PURE__ */ new WeakMap(), T = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const n = (N.get(t) || 0) - 1;
		N.set(t, n), n === 0 && V(t);
	});
	function B(t, n) {
		const e = (N.get(n) || 0) + 1;
		N.set(n, e), T && T.register(t, n, t);
	}
	function tt(t) {
		T && T.unregister(t);
	}
	function h(t, n, e = [], s = function() {}) {
		let o = !1;
		const a = new Proxy(s, {
			get(u, l) {
				if (M(o), l === X) return () => {
					tt(a), V(t), n.clear(), o = !0;
				};
				if (l === "then") {
					if (e.length === 0) return { then: () => a };
					const A = R(t, n, {
						type: "GET",
						path: e.map((S) => S.toString())
					}).then(f);
					return A.then.bind(A);
				}
				return h(t, n, [...e, l]);
			},
			set(u, l, A) {
				M(o);
				const [S, E] = O(A);
				return R(t, n, {
					type: "SET",
					path: [...e, l].map((i) => i.toString()),
					value: S
				}, E).then(f);
			},
			apply(u, l, A) {
				M(o);
				const S = e[e.length - 1];
				if (S === Q) return R(t, n, { type: "ENDPOINT" }).then(f);
				if (S === "bind") return h(t, n, e.slice(0, -1));
				const [E, i] = z(A);
				return R(t, n, {
					type: "APPLY",
					path: e.map((_) => _.toString()),
					argumentList: E
				}, i).then(f);
			},
			construct(u, l) {
				M(o);
				const [A, S] = z(l);
				return R(t, n, {
					type: "CONSTRUCT",
					path: e.map((E) => E.toString()),
					argumentList: A
				}, S).then(f);
			}
		});
		return B(a, t), a;
	}
	function nt(t) {
		return Array.prototype.concat.apply([], t);
	}
	function z(t) {
		const n = t.map(O);
		return [n.map((e) => e[0]), nt(n.map((e) => e[1]))];
	}
	const k = /* @__PURE__ */ new WeakMap();
	function et(t, n) {
		return k.set(t, n), t;
	}
	function rt(t) {
		return Object.assign(t, { [w]: !0 });
	}
	function O(t) {
		for (const [n, e] of x) if (e.canHandle(t)) {
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
		}, k.get(t) || []];
	}
	function f(t) {
		switch (t.type) {
			case "HANDLER": return x.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function R(t, n, e, s) {
		return new Promise((o) => {
			const a = at();
			n.set(a, o), t.start && t.start(), t.postMessage(Object.assign({ id: a }, e), s);
		});
	}
	function at() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	const ot = 648e3 / Math.PI, F = 1500, st = F;
	F / 15;
	100 / ot;
	st + 500;
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
	}, it = {
		[r.SUN]: {
			name: "Sun",
			type: "star",
			color: "#f5e042",
			radiusKm: 696340
		},
		[r.MERCURY]: {
			name: "Mercury",
			type: "planet",
			color: "#b0b0b0",
			radiusKm: 2439.7
		},
		[r.VENUS]: {
			name: "Venus",
			type: "planet",
			color: "#e6c229",
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
			color: "#d8ca9d",
			radiusKm: 69911
		},
		[r.SATURN]: {
			name: "Saturn",
			type: "planet",
			color: "#f4d03f",
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
			color: "#c4a574",
			radiusKm: 1188.3
		},
		[r.MOON]: {
			name: "Moon",
			type: "moon",
			radiusKm: 1737
		}
	}, p = [
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
	];
	function ct(t) {
		return {
			x: t.x * 15,
			y: t.y * 15,
			z: t.z * 15
		};
	}
	6371 / (it[r.SUN]?.radiusKm ?? 696340);
	const g = 149597870.69098932;
	2 * Math.PI;
	3600 * (180 / Math.PI);
	const K = 10800 * 60;
	2 * K;
	const ut = K / Math.PI;
	-.17 - 5 * Math.log10(ut);
	695700 / g;
	const I = .996647180302104;
	I * I;
	const Y = 6378.1366;
	Y / g;
	Y * I;
	1738.1 / g;
	1736 / g;
	function D(t) {
		if (!Number.isFinite(t)) throw console.trace(), `Value is not a finite number: ${t}`;
		return t;
	}
	var c;
	(function(t) {
		t.Sun = "Sun", t.Moon = "Moon", t.Mercury = "Mercury", t.Venus = "Venus", t.Earth = "Earth", t.Mars = "Mars", t.Jupiter = "Jupiter", t.Saturn = "Saturn", t.Uranus = "Uranus", t.Neptune = "Neptune", t.Pluto = "Pluto", t.SSB = "SSB", t.EMB = "EMB", t.Star1 = "Star1", t.Star2 = "Star2", t.Star3 = "Star3", t.Star4 = "Star4", t.Star5 = "Star5", t.Star6 = "Star6", t.Star7 = "Star7", t.Star8 = "Star8";
	})(c || (c = {}));
	c.Star1, c.Star2, c.Star3, c.Star4, c.Star5, c.Star6, c.Star7, c.Star8;
	var J;
	(function(t) {
		t[t.From2000 = 0] = "From2000", t[t.Into2000 = 1] = "Into2000";
	})(J || (J = {}));
	var lt = class {
		constructor(t) {
			this.rot = t;
		}
	};
	function St(t) {
		if (!(t instanceof G)) throw `Not an instance of the Observer class: ${t}`;
		if (D(t.latitude), D(t.longitude), D(t.height), t.latitude < -90 || t.latitude > 90) throw `Latitude ${t.latitude} is out of range. Must be -90..+90.`;
		return t;
	}
	var G = class {
		constructor(t, n, e) {
			this.latitude = t, this.longitude = n, this.height = e, St(this);
		}
	};
	new lt([
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
	var j;
	(function(t) {
		t[t.Pericenter = 0] = "Pericenter", t[t.Apocenter = 1] = "Apocenter";
	})(j || (j = {}));
	var W;
	(function(t) {
		t.Penumbral = "penumbral", t.Partial = "partial", t.Annular = "annular", t.Total = "total";
	})(W || (W = {}));
	var $;
	(function(t) {
		t[t.Invalid = 0] = "Invalid", t[t.Ascending = 1] = "Ascending", t[t.Descending = -1] = "Descending";
	})($ || ($ = {}));
	new G(40.7128, -74.006, 10);
	function d(t, n) {
		return t.x = n.x, t.y = n.y, t.z = n.z, t;
	}
	function Et(t, n, e) {
		if (t.length === 0) return null;
		if (t.length === 1) {
			const i = t[0].position;
			return e ? d(e, i) : i;
		}
		if (n <= t[0].time.jd) {
			const i = t[0].position;
			return e ? d(e, i) : i;
		}
		if (n >= t[t.length - 1].time.jd) {
			const i = t[t.length - 1].position;
			return e ? d(e, i) : i;
		}
		let s = 0, o = t.length - 1;
		for (; o - s > 1;) {
			const i = s + o >> 1;
			t[i].time.jd <= n ? s = i : o = i;
		}
		const a = t[s], u = t[o], l = (n - a.time.jd) / (u.time.jd - a.time.jd), A = a.position.x + l * (u.position.x - a.position.x), S = a.position.y + l * (u.position.y - a.position.y), E = a.position.z + l * (u.position.z - a.position.z);
		return e ? (e.x = A, e.y = S, e.z = E, e) : {
			x: A,
			y: S,
			z: E
		};
	}
	r.SUN, c.Sun, r.MERCURY, c.Mercury, r.VENUS, c.Venus, r.EARTH, c.Earth, r.MARS, c.Mars, r.JUPITER, c.Jupiter, r.SATURN, c.Saturn, r.URANUS, c.Uranus, r.NEPTUNE, c.Neptune, r.PLUTO, c.Pluto, r.MOON, c.Moon;
	2 * Math.PI;
	Math.PI / (180 * 3600);
	function At(t, n, e = p) {
		const s = {};
		for (const o of e) {
			const a = n[o] ?? [], u = a.length ? Et(a, t) : null;
			if (u) {
				const l = ct(u);
				s[o] = [
					l.x,
					l.y,
					l.z
				];
			}
		}
		return s;
	}
	function _t(t) {
		t.fill(NaN);
	}
	function ft(t, n) {
		_t(t);
		const e = p;
		for (const s of Object.keys(n)) {
			const o = e.indexOf(s);
			if (o < 0) continue;
			const a = n[s];
			if (!a) continue;
			const u = o * 3;
			t[u] = a[0], t[u + 1] = a[1], t[u + 2] = a[2];
		}
	}
	let L = null, C = null;
	y({
		async init(t) {
			C = new Float32Array(t);
		},
		async loadBatch(t, n) {
			return L = n, {
				type: "ready",
				runId: t
			};
		},
		async compute(t, n, e) {
			try {
				if (!L) return {
					type: "error",
					runId: t,
					seq: n,
					message: "No ephemeris loaded"
				};
				const s = At(e, L, p);
				return C ? (ft(C, s), {
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
