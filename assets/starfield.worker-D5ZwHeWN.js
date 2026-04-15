(function() {
	const V = Symbol("Comlink.proxy"), st = Symbol("Comlink.endpoint"), ot = Symbol("Comlink.releaseProxy"), D = Symbol("Comlink.finalizer"), I = Symbol("Comlink.thrown"), H = (t) => typeof t == "object" && t !== null || typeof t == "function", k = new Map([["proxy", {
		canHandle: (t) => H(t) && t[V],
		serialize(t) {
			const { port1: n, port2: r } = new MessageChannel();
			return b(t, n), [r, [r]];
		},
		deserialize(t) {
			return t.start(), ut(t);
		}
	}], ["throw", {
		canHandle: (t) => H(t) && I in t,
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
	function it(t, n) {
		for (const r of t) if (n === r || r === "*" || r instanceof RegExp && r.test(n)) return !0;
		return !1;
	}
	function b(t, n = globalThis, r = ["*"]) {
		n.addEventListener("message", function e(a) {
			if (!a || !a.data) return;
			if (!it(r, a.origin)) {
				console.warn(`Invalid origin '${a.origin}' for comlink proxy`);
				return;
			}
			const { id: o, type: _, path: f } = Object.assign({ path: [] }, a.data), u = (a.data.argumentList || []).map(N);
			let i;
			try {
				const l = f.slice(0, -1).reduce((A, U) => A[U], t), R = f.reduce((A, U) => A[U], t);
				switch (_) {
					case "GET":
						i = R;
						break;
					case "SET":
						l[f.slice(-1)[0]] = N(a.data.value), i = !0;
						break;
					case "APPLY":
						i = R.apply(l, u);
						break;
					case "CONSTRUCT":
						i = At(new R(...u));
						break;
					case "ENDPOINT":
						{
							const { port1: A, port2: U } = new MessageChannel();
							b(t, U), i = $(A, [A]);
						}
						break;
					case "RELEASE":
						i = void 0;
						break;
					default: return;
				}
			} catch (l) {
				i = {
					value: l,
					[I]: 0
				};
			}
			Promise.resolve(i).catch((l) => ({
				value: l,
				[I]: 0
			})).then((l) => {
				const [R, A] = O(l);
				n.postMessage(Object.assign(Object.assign({}, R), { id: o }), A), _ === "RELEASE" && (n.removeEventListener("message", e), K(n), D in t && typeof t[D] == "function" && t[D]());
			}).catch((l) => {
				const [R, A] = O({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[I]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, R), { id: o }), A);
			});
		}), n.start && n.start();
	}
	function ct(t) {
		return t.constructor.name === "MessagePort";
	}
	function K(t) {
		ct(t) && t.close();
	}
	function ut(t, n) {
		const r = /* @__PURE__ */ new Map();
		return t.addEventListener("message", function(a) {
			const { data: o } = a;
			if (!o || !o.id) return;
			const _ = r.get(o.id);
			if (_) try {
				_(o);
			} finally {
				r.delete(o.id);
			}
		}), w(t, r, [], n);
	}
	function h(t) {
		if (t) throw new Error("Proxy has been released and is not useable");
	}
	function Y(t) {
		return T(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			K(t);
		});
	}
	const y = /* @__PURE__ */ new WeakMap(), p = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const n = (y.get(t) || 0) - 1;
		y.set(t, n), n === 0 && Y(t);
	});
	function lt(t, n) {
		const r = (y.get(n) || 0) + 1;
		y.set(n, r), p && p.register(t, n, t);
	}
	function St(t) {
		p && p.unregister(t);
	}
	function w(t, n, r = [], e = function() {}) {
		let a = !1;
		const o = new Proxy(e, {
			get(_, f) {
				if (h(a), f === ot) return () => {
					St(o), Y(t), n.clear(), a = !0;
				};
				if (f === "then") {
					if (r.length === 0) return { then: () => o };
					const u = T(t, n, {
						type: "GET",
						path: r.map((i) => i.toString())
					}).then(N);
					return u.then.bind(u);
				}
				return w(t, n, [...r, f]);
			},
			set(_, f, u) {
				h(a);
				const [i, l] = O(u);
				return T(t, n, {
					type: "SET",
					path: [...r, f].map((R) => R.toString()),
					value: i
				}, l).then(N);
			},
			apply(_, f, u) {
				h(a);
				const i = r[r.length - 1];
				if (i === st) return T(t, n, { type: "ENDPOINT" }).then(N);
				if (i === "bind") return w(t, n, r.slice(0, -1));
				const [l, R] = G(u);
				return T(t, n, {
					type: "APPLY",
					path: r.map((A) => A.toString()),
					argumentList: l
				}, R).then(N);
			},
			construct(_, f) {
				h(a);
				const [u, i] = G(f);
				return T(t, n, {
					type: "CONSTRUCT",
					path: r.map((l) => l.toString()),
					argumentList: u
				}, i).then(N);
			}
		});
		return lt(o, t), o;
	}
	function ft(t) {
		return Array.prototype.concat.apply([], t);
	}
	function G(t) {
		const n = t.map(O);
		return [n.map((r) => r[0]), ft(n.map((r) => r[1]))];
	}
	const J = /* @__PURE__ */ new WeakMap();
	function $(t, n) {
		return J.set(t, n), t;
	}
	function At(t) {
		return Object.assign(t, { [V]: !0 });
	}
	function O(t) {
		for (const [n, r] of k) if (r.canHandle(t)) {
			const [e, a] = r.serialize(t);
			return [{
				type: "HANDLER",
				name: n,
				value: e
			}, a];
		}
		return [{
			type: "RAW",
			value: t
		}, J.get(t) || []];
	}
	function N(t) {
		switch (t.type) {
			case "HANDLER": return k.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function T(t, n, r, e) {
		return new Promise((a) => {
			const o = Et();
			n.set(o, a), t.start && t.start(), t.postMessage(Object.assign({ id: o }, r), e);
		});
	}
	function Et() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	function _t(t) {
		return Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z);
	}
	function Rt(t) {
		return t.x * t.x + t.y * t.y + t.z * t.z;
	}
	function mt(t) {
		return Math.sqrt(Rt(t));
	}
	function Mt(t) {
		const n = mt(t);
		return n < 1e-18 ? null : {
			x: t.x / n,
			y: t.y / n,
			z: t.z / n
		};
	}
	const Ut = 648e3 / Math.PI, W = 1500, j = W;
	W / 15;
	100 / Ut;
	const Nt = j + 500, s = {
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
	}, Tt = {
		[s.SUN]: {
			name: "Sun",
			type: "star",
			color: "#f5e042",
			radiusKm: 696340
		},
		[s.MERCURY]: {
			name: "Mercury",
			type: "planet",
			color: "#b0b0b0",
			radiusKm: 2439.7
		},
		[s.VENUS]: {
			name: "Venus",
			type: "planet",
			color: "#e6c229",
			radiusKm: 6051.8
		},
		[s.EARTH]: {
			name: "Earth",
			type: "planet",
			color: "#4a90d9",
			radiusKm: 6371
		},
		[s.MARS]: {
			name: "Mars",
			type: "planet",
			color: "#c1440e",
			radiusKm: 3389.5
		},
		[s.JUPITER]: {
			name: "Jupiter",
			type: "planet",
			color: "#d8ca9d",
			radiusKm: 69911
		},
		[s.SATURN]: {
			name: "Saturn",
			type: "planet",
			color: "#f4d03f",
			radiusKm: 58232
		},
		[s.URANUS]: {
			name: "Uranus",
			type: "planet",
			color: "#a3d6e0",
			radiusKm: 25362
		},
		[s.NEPTUNE]: {
			name: "Neptune",
			type: "planet",
			color: "#4166f5",
			radiusKm: 24622
		},
		[s.PLUTO]: {
			name: "Pluto",
			type: "dwarf_planet",
			color: "#c4a574",
			radiusKm: 1188.3
		},
		[s.MOON]: {
			name: "Moon",
			type: "moon",
			radiusKm: 1737
		}
	};
	s.SUN, s.MERCURY, s.VENUS, s.EARTH, s.MARS, s.JUPITER, s.SATURN, s.URANUS, s.NEPTUNE, s.PLUTO;
	const gt = 6371 / (Tt[s.SUN]?.radiusKm ?? 696340), L = .04;
	function d(t) {
		return !Number.isFinite(t) || t <= 0 ? L : t / gt * L;
	}
	const It = .008;
	function ht(t, n) {
		if (!Number.isFinite(n) || n <= 0 || t == null || !Number.isFinite(t)) return d(1);
		const r = t - 5 * Math.log10(n / 10), e = Math.pow(10, (4.83 - r) / 2.5);
		return d(Math.max(It, Math.min(100, Math.sqrt(e))));
	}
	const P = 149597870.69098932;
	2 * Math.PI;
	3600 * (180 / Math.PI);
	const q = 10800 * 60;
	2 * q;
	const yt = q / Math.PI;
	-.17 - 5 * Math.log10(yt);
	695700 / P;
	const C = .996647180302104;
	C * C;
	const Q = 6378.1366;
	Q / P;
	Q * C;
	1738.1 / P;
	1736 / P;
	function F(t) {
		if (!Number.isFinite(t)) throw console.trace(), `Value is not a finite number: ${t}`;
		return t;
	}
	var c;
	(function(t) {
		t.Sun = "Sun", t.Moon = "Moon", t.Mercury = "Mercury", t.Venus = "Venus", t.Earth = "Earth", t.Mars = "Mars", t.Jupiter = "Jupiter", t.Saturn = "Saturn", t.Uranus = "Uranus", t.Neptune = "Neptune", t.Pluto = "Pluto", t.SSB = "SSB", t.EMB = "EMB", t.Star1 = "Star1", t.Star2 = "Star2", t.Star3 = "Star3", t.Star4 = "Star4", t.Star5 = "Star5", t.Star6 = "Star6", t.Star7 = "Star7", t.Star8 = "Star8";
	})(c || (c = {}));
	c.Star1, c.Star2, c.Star3, c.Star4, c.Star5, c.Star6, c.Star7, c.Star8;
	var X;
	(function(t) {
		t[t.From2000 = 0] = "From2000", t[t.Into2000 = 1] = "Into2000";
	})(X || (X = {}));
	var pt = class {
		constructor(t) {
			this.rot = t;
		}
	};
	function Ot(t) {
		if (!(t instanceof Z)) throw `Not an instance of the Observer class: ${t}`;
		if (F(t.latitude), F(t.longitude), F(t.height), t.latitude < -90 || t.latitude > 90) throw `Latitude ${t.latitude} is out of range. Must be -90..+90.`;
		return t;
	}
	var Z = class {
		constructor(t, n, r) {
			this.latitude = t, this.longitude = n, this.height = r, Ot(this);
		}
	};
	new pt([
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
	var v;
	(function(t) {
		t[t.Pericenter = 0] = "Pericenter", t[t.Apocenter = 1] = "Apocenter";
	})(v || (v = {}));
	var B;
	(function(t) {
		t.Penumbral = "penumbral", t.Partial = "partial", t.Annular = "annular", t.Total = "total";
	})(B || (B = {}));
	var tt;
	(function(t) {
		t[t.Invalid = 0] = "Invalid", t[t.Ascending = 1] = "Ascending", t[t.Descending = -1] = "Descending";
	})(tt || (tt = {}));
	new Z(40.7128, -74.006, 10);
	function nt(t, n) {
		const r = t * Math.PI / 180, e = n * Math.PI / 180, a = Math.cos(e);
		return {
			x: a * Math.cos(r),
			y: a * Math.sin(r),
			z: Math.sin(e)
		};
	}
	function Pt(t) {
		if (t == null || !Number.isFinite(t) || t <= 0) return null;
		const n = 1 / t;
		return Number.isFinite(n) ? n : null;
	}
	function Dt(t) {
		return t == null || !Number.isFinite(t) || t < 1 || t > 4 ? 4 : Math.floor(t);
	}
	s.SUN, c.Sun, s.MERCURY, c.Mercury, s.VENUS, c.Venus, s.EARTH, c.Earth, s.MARS, c.Mars, s.JUPITER, c.Jupiter, s.SATURN, c.Saturn, s.URANUS, c.Uranus, s.NEPTUNE, c.Neptune, s.PLUTO, c.Pluto, s.MOON, c.Moon;
	2 * Math.PI;
	Math.PI / (180 * 3600);
	function bt(t, n) {
		return t.length === 0 || n?.raInHours !== !0 ? t : t.map((r) => ({
			...r,
			ra: r.ra * 15
		}));
	}
	function wt(t, n, r) {
		let e = t.filter((o) => o.ra >= n.raMin && o.ra <= n.raMax && o.dec >= n.decMin && o.dec <= n.decMax);
		const a = r?.maxDistanceLevel;
		if (a != null) {
			if (a === 0) return [];
			e = e.filter((o) => Dt(o.dl) <= a);
		}
		return e;
	}
	function rt(t) {
		const { x: n, y: r, z: e, plx: a } = t;
		return n != null && r != null && e != null && Number.isFinite(n) && Number.isFinite(r) && Number.isFinite(e) ? _t({
			x: n,
			y: r,
			z: e
		}) : Pt(a) ?? 25;
	}
	function Lt(t) {
		const n = j + rt(t) * 20, { x: r, y: e, z: a, ra: o, dec: _ } = t, f = r != null && e != null && a != null && Number.isFinite(r) && Number.isFinite(e) && Number.isFinite(a);
		let u = null;
		return f && (u = Mt({
			x: r,
			y: e,
			z: a
		})), u == null && (u = nt(o, _)), {
			x: u.x * n,
			y: u.y * n,
			z: u.z * n
		};
	}
	function dt(t) {
		if (!t || typeof t != "string") return [
			1,
			1,
			1
		];
		const n = t.replace(/^#/, "").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);
		return n ? [
			parseInt(n[1], 16) / 255,
			parseInt(n[2], 16) / 255,
			parseInt(n[3], 16) / 255
		] : [
			1,
			1,
			1
		];
	}
	const et = 2, Ct = 500;
	function Ft() {
		const t = [];
		for (let n = 0; n < Ct; n++) {
			const r = n * .7 % 360, e = n * .3 % 180 - 90;
			t.push(nt(r, e));
		}
		return t;
	}
	function xt() {
		const t = Nt;
		return Ft().map((n) => ({
			x: n.x * t,
			y: n.y * t,
			z: n.z * t
		}));
	}
	function zt(t) {
		const { catalog: n, maxDistanceLevel: r, simplifyStars: e, bounds: a, raInHours: o } = t, _ = wt(bt(n, { raInHours: o }), a, { maxDistanceLevel: r }), f = (S, m, E, g) => ({
			positions: S,
			sizes: m,
			colors: E,
			brightness: g,
			namedStarsInView: [],
			starsInView: []
		});
		if (_.length === 0) {
			if (r === 0) return f(new Float32Array(0), new Float32Array(0), new Float32Array(0), new Float32Array(0));
			const S = xt(), m = S.length, E = new Float32Array(m * 3), g = new Float32Array(m).fill(et), x = new Float32Array(m * 3).fill(1), z = new Float32Array(m).fill(1);
			for (let M = 0; M < m; M++) E[M * 3] = S[M].x, E[M * 3 + 1] = S[M].y, E[M * 3 + 2] = S[M].z;
			return f(E, g, x, z);
		}
		const u = _.map(Lt), i = u.length, l = new Float32Array(i * 3), R = new Float32Array(i), A = new Float32Array(i * 3), U = new Float32Array(i), at = [];
		for (let S = 0; S < i; S++) {
			const m = u[S], E = _[S];
			l[S * 3] = m.x, l[S * 3 + 1] = m.y, l[S * 3 + 2] = m.z;
			const g = E ? ht(E.mag, rt(E)) : L;
			R[S] = e ? et : g;
			const x = E?.c != null ? `#${E.c}` : void 0, [z, M, Ht] = e ? [
				1,
				1,
				1
			] : dt(x);
			A[S * 3] = z, A[S * 3 + 1] = M, A[S * 3 + 2] = Ht, U[S] = e ? 1 : E?.br != null && Number.isFinite(E.br) ? Math.max(0, Math.min(1, E.br)) : 1, E?.proper && at.push({
				position: { ...m },
				name: E.proper
			});
		}
		return {
			positions: l,
			sizes: R,
			colors: A,
			brightness: U,
			namedStarsInView: at,
			starsInView: _
		};
	}
	function Vt(t) {
		return [
			t.positions.buffer,
			t.sizes.buffer,
			t.colors.buffer,
			t.brightness.buffer
		];
	}
	b({ async processStarfield(t) {
		const { runId: n, ...r } = t;
		try {
			const e = zt(r);
			return $({
				runId: n,
				...e
			}, Vt(e));
		} catch (e) {
			const a = e instanceof Error ? e.message : String(e);
			throw Object.assign(new Error(a), { cause: e });
		}
	} });
})();
