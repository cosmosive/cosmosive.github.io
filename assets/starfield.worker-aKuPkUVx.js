(function() {
	const k = Symbol("Comlink.proxy"), it = Symbol("Comlink.endpoint"), ct = Symbol("Comlink.releaseProxy"), D = Symbol("Comlink.finalizer"), g = Symbol("Comlink.thrown"), K = (t) => typeof t == "object" && t !== null || typeof t == "function", Y = new Map([["proxy", {
		canHandle: (t) => K(t) && t[k],
		serialize(t) {
			const { port1: n, port2: r } = new MessageChannel();
			return b(t, n), [r, [r]];
		},
		deserialize(t) {
			return t.start(), St(t);
		}
	}], ["throw", {
		canHandle: (t) => K(t) && g in t,
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
	function ut(t, n) {
		for (const r of t) if (n === r || r === "*" || r instanceof RegExp && r.test(n)) return !0;
		return !1;
	}
	function b(t, n = globalThis, r = ["*"]) {
		n.addEventListener("message", function e(a) {
			if (!a || !a.data) return;
			if (!ut(r, a.origin)) {
				console.warn(`Invalid origin '${a.origin}' for comlink proxy`);
				return;
			}
			const { id: o, type: _, path: f } = Object.assign({ path: [] }, a.data), u = (a.data.argumentList || []).map(N);
			let i;
			try {
				const S = f.slice(0, -1).reduce((A, U) => A[U], t), R = f.reduce((A, U) => A[U], t);
				switch (_) {
					case "GET":
						i = R;
						break;
					case "SET":
						S[f.slice(-1)[0]] = N(a.data.value), i = !0;
						break;
					case "APPLY":
						i = R.apply(S, u);
						break;
					case "CONSTRUCT":
						i = _t(new R(...u));
						break;
					case "ENDPOINT":
						{
							const { port1: A, port2: U } = new MessageChannel();
							b(t, U), i = j(A, [A]);
						}
						break;
					case "RELEASE":
						i = void 0;
						break;
					default: return;
				}
			} catch (S) {
				i = {
					value: S,
					[g]: 0
				};
			}
			Promise.resolve(i).catch((S) => ({
				value: S,
				[g]: 0
			})).then((S) => {
				const [R, A] = O(S);
				n.postMessage(Object.assign(Object.assign({}, R), { id: o }), A), _ === "RELEASE" && (n.removeEventListener("message", e), G(n), D in t && typeof t[D] == "function" && t[D]());
			}).catch((S) => {
				const [R, A] = O({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[g]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, R), { id: o }), A);
			});
		}), n.start && n.start();
	}
	function lt(t) {
		return t.constructor.name === "MessagePort";
	}
	function G(t) {
		lt(t) && t.close();
	}
	function St(t, n) {
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
	function J(t) {
		return I(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			G(t);
		});
	}
	const y = /* @__PURE__ */ new WeakMap(), p = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const n = (y.get(t) || 0) - 1;
		y.set(t, n), n === 0 && J(t);
	});
	function ft(t, n) {
		const r = (y.get(n) || 0) + 1;
		y.set(n, r), p && p.register(t, n, t);
	}
	function At(t) {
		p && p.unregister(t);
	}
	function w(t, n, r = [], e = function() {}) {
		let a = !1;
		const o = new Proxy(e, {
			get(_, f) {
				if (h(a), f === ct) return () => {
					At(o), J(t), n.clear(), a = !0;
				};
				if (f === "then") {
					if (r.length === 0) return { then: () => o };
					const u = I(t, n, {
						type: "GET",
						path: r.map((i) => i.toString())
					}).then(N);
					return u.then.bind(u);
				}
				return w(t, n, [...r, f]);
			},
			set(_, f, u) {
				h(a);
				const [i, S] = O(u);
				return I(t, n, {
					type: "SET",
					path: [...r, f].map((R) => R.toString()),
					value: i
				}, S).then(N);
			},
			apply(_, f, u) {
				h(a);
				const i = r[r.length - 1];
				if (i === it) return I(t, n, { type: "ENDPOINT" }).then(N);
				if (i === "bind") return w(t, n, r.slice(0, -1));
				const [S, R] = $(u);
				return I(t, n, {
					type: "APPLY",
					path: r.map((A) => A.toString()),
					argumentList: S
				}, R).then(N);
			},
			construct(_, f) {
				h(a);
				const [u, i] = $(f);
				return I(t, n, {
					type: "CONSTRUCT",
					path: r.map((S) => S.toString()),
					argumentList: u
				}, i).then(N);
			}
		});
		return ft(o, t), o;
	}
	function Et(t) {
		return Array.prototype.concat.apply([], t);
	}
	function $(t) {
		const n = t.map(O);
		return [n.map((r) => r[0]), Et(n.map((r) => r[1]))];
	}
	const W = /* @__PURE__ */ new WeakMap();
	function j(t, n) {
		return W.set(t, n), t;
	}
	function _t(t) {
		return Object.assign(t, { [k]: !0 });
	}
	function O(t) {
		for (const [n, r] of Y) if (r.canHandle(t)) {
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
		}, W.get(t) || []];
	}
	function N(t) {
		switch (t.type) {
			case "HANDLER": return Y.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function I(t, n, r, e) {
		return new Promise((a) => {
			const o = Rt();
			n.set(o, a), t.start && t.start(), t.postMessage(Object.assign({ id: o }, r), e);
		});
	}
	function Rt() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	function mt(t) {
		return Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z);
	}
	function Mt(t) {
		return t.x * t.x + t.y * t.y + t.z * t.z;
	}
	function Ut(t) {
		return Math.sqrt(Mt(t));
	}
	function Nt(t) {
		const n = Ut(t);
		return n < 1e-18 ? null : {
			x: t.x / n,
			y: t.y / n,
			z: t.z / n
		};
	}
	const It = 648e3 / Math.PI, q = 1500, Q = q;
	q / 15;
	100 / It;
	const L = {
		x: 0,
		y: 0,
		z: 0
	}, Tt = Q + 500, s = {
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
	}, gt = {
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
	const ht = 6371 / (gt[s.SUN]?.radiusKm ?? 696340), d = .04;
	function C(t) {
		return !Number.isFinite(t) || t <= 0 ? d : t / ht * d;
	}
	const yt = .008;
	function pt(t, n) {
		if (!Number.isFinite(n) || n <= 0 || t == null || !Number.isFinite(t)) return C(1);
		const r = t - 5 * Math.log10(n / 10), e = Math.pow(10, (4.83 - r) / 2.5);
		return C(Math.max(yt, Math.min(100, Math.sqrt(e))));
	}
	const P = 149597870.69098932;
	2 * Math.PI;
	3600 * (180 / Math.PI);
	const X = 10800 * 60;
	2 * X;
	const Ot = X / Math.PI;
	-.17 - 5 * Math.log10(Ot);
	695700 / P;
	const F = .996647180302104;
	F * F;
	const Z = 6378.1366;
	Z / P;
	Z * F;
	1738.1 / P;
	1736 / P;
	function x(t) {
		if (!Number.isFinite(t)) throw console.trace(), `Value is not a finite number: ${t}`;
		return t;
	}
	var c;
	(function(t) {
		t.Sun = "Sun", t.Moon = "Moon", t.Mercury = "Mercury", t.Venus = "Venus", t.Earth = "Earth", t.Mars = "Mars", t.Jupiter = "Jupiter", t.Saturn = "Saturn", t.Uranus = "Uranus", t.Neptune = "Neptune", t.Pluto = "Pluto", t.SSB = "SSB", t.EMB = "EMB", t.Star1 = "Star1", t.Star2 = "Star2", t.Star3 = "Star3", t.Star4 = "Star4", t.Star5 = "Star5", t.Star6 = "Star6", t.Star7 = "Star7", t.Star8 = "Star8";
	})(c || (c = {}));
	c.Star1, c.Star2, c.Star3, c.Star4, c.Star5, c.Star6, c.Star7, c.Star8;
	var v;
	(function(t) {
		t[t.From2000 = 0] = "From2000", t[t.Into2000 = 1] = "Into2000";
	})(v || (v = {}));
	var Pt = class {
		constructor(t) {
			this.rot = t;
		}
	};
	function Dt(t) {
		if (!(t instanceof B)) throw `Not an instance of the Observer class: ${t}`;
		if (x(t.latitude), x(t.longitude), x(t.height), t.latitude < -90 || t.latitude > 90) throw `Latitude ${t.latitude} is out of range. Must be -90..+90.`;
		return t;
	}
	var B = class {
		constructor(t, n, r) {
			this.latitude = t, this.longitude = n, this.height = r, Dt(this);
		}
	};
	new Pt([
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
	var tt;
	(function(t) {
		t[t.Pericenter = 0] = "Pericenter", t[t.Apocenter = 1] = "Apocenter";
	})(tt || (tt = {}));
	var nt;
	(function(t) {
		t.Penumbral = "penumbral", t.Partial = "partial", t.Annular = "annular", t.Total = "total";
	})(nt || (nt = {}));
	var rt;
	(function(t) {
		t[t.Invalid = 0] = "Invalid", t[t.Ascending = 1] = "Ascending", t[t.Descending = -1] = "Descending";
	})(rt || (rt = {}));
	new B(40.7128, -74.006, 10);
	function et(t, n) {
		const r = t * Math.PI / 180, e = n * Math.PI / 180, a = Math.cos(e);
		return {
			x: a * Math.cos(r),
			y: a * Math.sin(r),
			z: Math.sin(e)
		};
	}
	function bt(t) {
		if (t == null || !Number.isFinite(t) || t <= 0) return null;
		const n = 1 / t;
		return Number.isFinite(n) ? n : null;
	}
	function wt(t) {
		return t == null || !Number.isFinite(t) || t < 1 || t > 4 ? 4 : Math.floor(t);
	}
	s.SUN, c.Sun, s.MERCURY, c.Mercury, s.VENUS, c.Venus, s.EARTH, c.Earth, s.MARS, c.Mars, s.JUPITER, c.Jupiter, s.SATURN, c.Saturn, s.URANUS, c.Uranus, s.NEPTUNE, c.Neptune, s.PLUTO, c.Pluto, s.MOON, c.Moon;
	2 * Math.PI;
	Math.PI / (180 * 3600);
	function Lt(t, n) {
		return t.length === 0 || n?.raInHours !== !0 ? t : t.map((r) => ({
			...r,
			ra: r.ra * 15
		}));
	}
	function dt(t, n, r) {
		let e = t.filter((o) => o.ra >= n.raMin && o.ra <= n.raMax && o.dec >= n.decMin && o.dec <= n.decMax);
		const a = r?.maxDistanceLevel;
		if (a != null) {
			if (a === 0) return [];
			e = e.filter((o) => wt(o.dl) <= a);
		}
		return e;
	}
	function z(t) {
		return t.id === 0 || t.id === "0";
	}
	function at(t) {
		if (z(t)) return 0;
		const { x: n, y: r, z: e, plx: a } = t;
		return n != null && r != null && e != null && Number.isFinite(n) && Number.isFinite(r) && Number.isFinite(e) ? mt({
			x: n,
			y: r,
			z: e
		}) : bt(a) ?? 25;
	}
	function Ct(t) {
		if (z(t)) return {
			x: L.x,
			y: L.y,
			z: L.z
		};
		const n = Q + at(t) * 20, { x: r, y: e, z: a, ra: o, dec: _ } = t, f = r != null && e != null && a != null && Number.isFinite(r) && Number.isFinite(e) && Number.isFinite(a);
		let u = null;
		return f && (u = Nt({
			x: r,
			y: e,
			z: a
		})), u == null && (u = et(o, _)), {
			x: u.x * n,
			y: u.y * n,
			z: u.z * n
		};
	}
	function Ft(t) {
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
	const st = 2, xt = 500;
	function zt() {
		const t = [];
		for (let n = 0; n < xt; n++) {
			const r = n * .7 % 360, e = n * .3 % 180 - 90;
			t.push(et(r, e));
		}
		return t;
	}
	function Vt() {
		const t = Tt;
		return zt().map((n) => ({
			x: n.x * t,
			y: n.y * t,
			z: n.z * t
		}));
	}
	function Ht(t) {
		const { catalog: n, maxDistanceLevel: r, simplifyStars: e, bounds: a, raInHours: o } = t, _ = dt(Lt(n, { raInHours: o }).filter((l) => !z(l)), a, { maxDistanceLevel: r }), f = (l, m, E, T) => ({
			positions: l,
			sizes: m,
			colors: E,
			brightness: T,
			namedStarsInView: [],
			starsInView: []
		});
		if (_.length === 0) {
			if (r === 0) return f(new Float32Array(0), new Float32Array(0), new Float32Array(0), new Float32Array(0));
			const l = Vt(), m = l.length, E = new Float32Array(m * 3), T = new Float32Array(m).fill(st), V = new Float32Array(m * 3).fill(1), H = new Float32Array(m).fill(1);
			for (let M = 0; M < m; M++) E[M * 3] = l[M].x, E[M * 3 + 1] = l[M].y, E[M * 3 + 2] = l[M].z;
			return f(E, T, V, H);
		}
		const u = _.map(Ct), i = u.length, S = new Float32Array(i * 3), R = new Float32Array(i), A = new Float32Array(i * 3), U = new Float32Array(i), ot = [];
		for (let l = 0; l < i; l++) {
			const m = u[l], E = _[l];
			S[l * 3] = m.x, S[l * 3 + 1] = m.y, S[l * 3 + 2] = m.z;
			const T = E ? pt(E.mag, at(E)) : d;
			R[l] = e ? st : T;
			const V = E?.c != null ? `#${E.c}` : void 0, [H, M, Kt] = e ? [
				1,
				1,
				1
			] : Ft(V);
			A[l * 3] = H, A[l * 3 + 1] = M, A[l * 3 + 2] = Kt, U[l] = e ? 1 : E?.br != null && Number.isFinite(E.br) ? Math.max(0, Math.min(1, E.br)) : 1, E?.proper && ot.push({
				position: { ...m },
				name: E.proper
			});
		}
		return {
			positions: S,
			sizes: R,
			colors: A,
			brightness: U,
			namedStarsInView: ot,
			starsInView: _
		};
	}
	function kt(t) {
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
			const e = Ht(r);
			return j({
				runId: n,
				...e
			}, kt(e));
		} catch (e) {
			const a = e instanceof Error ? e.message : String(e);
			throw Object.assign(new Error(a), { cause: e });
		}
	} });
})();
