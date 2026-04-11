(function() {
	const L = Symbol("Comlink.proxy"), $ = Symbol("Comlink.endpoint"), Q = Symbol("Comlink.releaseProxy"), y = Symbol("Comlink.finalizer"), m = Symbol("Comlink.thrown"), C = (t) => typeof t == "object" && t !== null || typeof t == "function", x = new Map([["proxy", {
		canHandle: (t) => C(t) && t[L],
		serialize(t) {
			const { port1: n, port2: e } = new MessageChannel();
			return h(t, n), [e, [e]];
		},
		deserialize(t) {
			return t.start(), q(t);
		}
	}], ["throw", {
		canHandle: (t) => C(t) && m in t,
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
	function X(t, n) {
		for (const e of t) if (n === e || e === "*" || e instanceof RegExp && e.test(n)) return !0;
		return !1;
	}
	function h(t, n = globalThis, e = ["*"]) {
		n.addEventListener("message", function s(o) {
			if (!o || !o.data) return;
			if (!X(e, o.origin)) {
				console.warn(`Invalid origin '${o.origin}' for comlink proxy`);
				return;
			}
			const { id: a, type: u, path: l } = Object.assign({ path: [] }, o.data), E = (o.data.argumentList || []).map(R);
			let S;
			try {
				const f = l.slice(0, -1).reduce((A, U) => A[U], t), i = l.reduce((A, U) => A[U], t);
				switch (u) {
					case "GET":
						S = i;
						break;
					case "SET":
						f[l.slice(-1)[0]] = R(o.data.value), S = !0;
						break;
					case "APPLY":
						S = i.apply(f, E);
						break;
					case "CONSTRUCT":
						S = et(new i(...E));
						break;
					case "ENDPOINT":
						{
							const { port1: A, port2: U } = new MessageChannel();
							h(t, U), S = nt(A, [A]);
						}
						break;
					case "RELEASE":
						S = void 0;
						break;
					default: return;
				}
			} catch (f) {
				S = {
					value: f,
					[m]: 0
				};
			}
			Promise.resolve(S).catch((f) => ({
				value: f,
				[m]: 0
			})).then((f) => {
				const [i, A] = N(f);
				n.postMessage(Object.assign(Object.assign({}, i), { id: a }), A), u === "RELEASE" && (n.removeEventListener("message", s), H(n), y in t && typeof t[y] == "function" && t[y]());
			}).catch((f) => {
				const [i, A] = N({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[m]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, i), { id: a }), A);
			});
		}), n.start && n.start();
	}
	function Z(t) {
		return t.constructor.name === "MessagePort";
	}
	function H(t) {
		Z(t) && t.close();
	}
	function q(t, n) {
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
		}), p(t, e, [], n);
	}
	function M(t) {
		if (t) throw new Error("Proxy has been released and is not useable");
	}
	function V(t) {
		return _(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			H(t);
		});
	}
	const T = /* @__PURE__ */ new WeakMap(), g = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const n = (T.get(t) || 0) - 1;
		T.set(t, n), n === 0 && V(t);
	});
	function v(t, n) {
		const e = (T.get(n) || 0) + 1;
		T.set(n, e), g && g.register(t, n, t);
	}
	function B(t) {
		g && g.unregister(t);
	}
	function p(t, n, e = [], s = function() {}) {
		let o = !1;
		const a = new Proxy(s, {
			get(u, l) {
				if (M(o), l === Q) return () => {
					B(a), V(t), n.clear(), o = !0;
				};
				if (l === "then") {
					if (e.length === 0) return { then: () => a };
					const E = _(t, n, {
						type: "GET",
						path: e.map((S) => S.toString())
					}).then(R);
					return E.then.bind(E);
				}
				return p(t, n, [...e, l]);
			},
			set(u, l, E) {
				M(o);
				const [S, f] = N(E);
				return _(t, n, {
					type: "SET",
					path: [...e, l].map((i) => i.toString()),
					value: S
				}, f).then(R);
			},
			apply(u, l, E) {
				M(o);
				const S = e[e.length - 1];
				if (S === $) return _(t, n, { type: "ENDPOINT" }).then(R);
				if (S === "bind") return p(t, n, e.slice(0, -1));
				const [f, i] = z(E);
				return _(t, n, {
					type: "APPLY",
					path: e.map((A) => A.toString()),
					argumentList: f
				}, i).then(R);
			},
			construct(u, l) {
				M(o);
				const [E, S] = z(l);
				return _(t, n, {
					type: "CONSTRUCT",
					path: e.map((f) => f.toString()),
					argumentList: E
				}, S).then(R);
			}
		});
		return v(a, t), a;
	}
	function tt(t) {
		return Array.prototype.concat.apply([], t);
	}
	function z(t) {
		const n = t.map(N);
		return [n.map((e) => e[0]), tt(n.map((e) => e[1]))];
	}
	const k = /* @__PURE__ */ new WeakMap();
	function nt(t, n) {
		return k.set(t, n), t;
	}
	function et(t) {
		return Object.assign(t, { [L]: !0 });
	}
	function N(t) {
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
	function R(t) {
		switch (t.type) {
			case "HANDLER": return x.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function _(t, n, e, s) {
		return new Promise((o) => {
			const a = rt();
			n.set(a, o), t.start && t.start(), t.postMessage(Object.assign({ id: a }, e), s);
		});
	}
	function rt() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	648e3 / Math.PI;
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
	}, at = {
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
	}, P = [
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
	function ot(t) {
		return {
			x: t.x * 15,
			y: t.y * 15,
			z: t.z * 15
		};
	}
	6371 / (at[r.SUN]?.radiusKm ?? 696340);
	const O = 149597870.69098932;
	2 * Math.PI;
	3600 * (180 / Math.PI);
	const K = 10800 * 60;
	2 * K;
	const st = K / Math.PI;
	-.17 - 5 * Math.log10(st);
	695700 / O;
	const I = .996647180302104;
	I * I;
	const Y = 6378.1366;
	Y / O;
	Y * I;
	1738.1 / O;
	1736 / O;
	function d(t) {
		if (!Number.isFinite(t)) throw console.trace(), `Value is not a finite number: ${t}`;
		return t;
	}
	var c;
	(function(t) {
		t.Sun = "Sun", t.Moon = "Moon", t.Mercury = "Mercury", t.Venus = "Venus", t.Earth = "Earth", t.Mars = "Mars", t.Jupiter = "Jupiter", t.Saturn = "Saturn", t.Uranus = "Uranus", t.Neptune = "Neptune", t.Pluto = "Pluto", t.SSB = "SSB", t.EMB = "EMB", t.Star1 = "Star1", t.Star2 = "Star2", t.Star3 = "Star3", t.Star4 = "Star4", t.Star5 = "Star5", t.Star6 = "Star6", t.Star7 = "Star7", t.Star8 = "Star8";
	})(c || (c = {}));
	c.Star1, c.Star2, c.Star3, c.Star4, c.Star5, c.Star6, c.Star7, c.Star8;
	var F;
	(function(t) {
		t[t.From2000 = 0] = "From2000", t[t.Into2000 = 1] = "Into2000";
	})(F || (F = {}));
	var it = class {
		constructor(t) {
			this.rot = t;
		}
	};
	function ct(t) {
		if (!(t instanceof J)) throw `Not an instance of the Observer class: ${t}`;
		if (d(t.latitude), d(t.longitude), d(t.height), t.latitude < -90 || t.latitude > 90) throw `Latitude ${t.latitude} is out of range. Must be -90..+90.`;
		return t;
	}
	var J = class {
		constructor(t, n, e) {
			this.latitude = t, this.longitude = n, this.height = e, ct(this);
		}
	};
	new it([
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
	var G;
	(function(t) {
		t[t.Pericenter = 0] = "Pericenter", t[t.Apocenter = 1] = "Apocenter";
	})(G || (G = {}));
	var j;
	(function(t) {
		t.Penumbral = "penumbral", t.Partial = "partial", t.Annular = "annular", t.Total = "total";
	})(j || (j = {}));
	var W;
	(function(t) {
		t[t.Invalid = 0] = "Invalid", t[t.Ascending = 1] = "Ascending", t[t.Descending = -1] = "Descending";
	})(W || (W = {}));
	new J(40.7128, -74.006, 10);
	function w(t, n) {
		return t.x = n.x, t.y = n.y, t.z = n.z, t;
	}
	function ut(t, n, e) {
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
		let s = 0, o = t.length - 1;
		for (; o - s > 1;) {
			const i = s + o >> 1;
			t[i].time.jd <= n ? s = i : o = i;
		}
		const a = t[s], u = t[o], l = (n - a.time.jd) / (u.time.jd - a.time.jd), E = a.position.x + l * (u.position.x - a.position.x), S = a.position.y + l * (u.position.y - a.position.y), f = a.position.z + l * (u.position.z - a.position.z);
		return e ? (e.x = E, e.y = S, e.z = f, e) : {
			x: E,
			y: S,
			z: f
		};
	}
	r.SUN, c.Sun, r.MERCURY, c.Mercury, r.VENUS, c.Venus, r.EARTH, c.Earth, r.MARS, c.Mars, r.JUPITER, c.Jupiter, r.SATURN, c.Saturn, r.URANUS, c.Uranus, r.NEPTUNE, c.Neptune, r.PLUTO, c.Pluto, r.MOON, c.Moon;
	2 * Math.PI;
	Math.PI / (180 * 3600);
	function lt(t, n, e = P) {
		const s = {};
		for (const o of e) {
			const a = n[o] ?? [], u = a.length ? ut(a, t) : null;
			if (u) {
				const l = ot(u);
				s[o] = [
					l.x,
					l.y,
					l.z
				];
			}
		}
		return s;
	}
	function St(t) {
		t.fill(NaN);
	}
	function ft(t, n) {
		St(t);
		const e = P;
		for (const s of Object.keys(n)) {
			const o = e.indexOf(s);
			if (o < 0) continue;
			const a = n[s];
			if (!a) continue;
			const u = o * 3;
			t[u] = a[0], t[u + 1] = a[1], t[u + 2] = a[2];
		}
	}
	let b = null, D = null;
	h({
		async init(t) {
			D = new Float32Array(t);
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
				const s = lt(e, b, P);
				return D ? (ft(D, s), {
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
