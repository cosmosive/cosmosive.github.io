(function() {
	const Y = Symbol("Comlink.proxy"), lt = Symbol("Comlink.endpoint"), St = Symbol("Comlink.releaseProxy"), w = Symbol("Comlink.finalizer"), h = Symbol("Comlink.thrown"), G = (t) => typeof t == "object" && t !== null || typeof t == "function", J = new Map([["proxy", {
		canHandle: (t) => G(t) && t[Y],
		serialize(t) {
			const { port1: n, port2: r } = new MessageChannel();
			return L(t, n), [r, [r]];
		},
		deserialize(t) {
			return t.start(), Et(t);
		}
	}], ["throw", {
		canHandle: (t) => G(t) && h in t,
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
	function ft(t, n) {
		for (const r of t) if (n === r || r === "*" || r instanceof RegExp && r.test(n)) return !0;
		return !1;
	}
	function L(t, n = globalThis, r = ["*"]) {
		n.addEventListener("message", function e(a) {
			if (!a || !a.data) return;
			if (!ft(r, a.origin)) {
				console.warn(`Invalid origin '${a.origin}' for comlink proxy`);
				return;
			}
			const { id: o, type: _, path: A } = Object.assign({ path: [] }, a.data), u = (a.data.argumentList || []).map(U);
			let i;
			try {
				const S = A.slice(0, -1).reduce((E, N) => E[N], t), R = A.reduce((E, N) => E[N], t);
				switch (_) {
					case "GET":
						i = R;
						break;
					case "SET":
						S[A.slice(-1)[0]] = U(a.data.value), i = !0;
						break;
					case "APPLY":
						i = R.apply(S, u);
						break;
					case "CONSTRUCT":
						i = mt(new R(...u));
						break;
					case "ENDPOINT":
						{
							const { port1: E, port2: N } = new MessageChannel();
							L(t, N), i = Q(E, [E]);
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
					[h]: 0
				};
			}
			Promise.resolve(i).catch((S) => ({
				value: S,
				[h]: 0
			})).then((S) => {
				const [R, E] = P(S);
				n.postMessage(Object.assign(Object.assign({}, R), { id: o }), E), _ === "RELEASE" && (n.removeEventListener("message", e), $(n), w in t && typeof t[w] == "function" && t[w]());
			}).catch((S) => {
				const [R, E] = P({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[h]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, R), { id: o }), E);
			});
		}), n.start && n.start();
	}
	function At(t) {
		return t.constructor.name === "MessagePort";
	}
	function $(t) {
		At(t) && t.close();
	}
	function Et(t, n) {
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
		}), C(t, r, [], n);
	}
	function y(t) {
		if (t) throw new Error("Proxy has been released and is not useable");
	}
	function W(t) {
		return I(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			$(t);
		});
	}
	const p = /* @__PURE__ */ new WeakMap(), O = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const n = (p.get(t) || 0) - 1;
		p.set(t, n), n === 0 && W(t);
	});
	function _t(t, n) {
		const r = (p.get(n) || 0) + 1;
		p.set(n, r), O && O.register(t, n, t);
	}
	function Rt(t) {
		O && O.unregister(t);
	}
	function C(t, n, r = [], e = function() {}) {
		let a = !1;
		const o = new Proxy(e, {
			get(_, A) {
				if (y(a), A === St) return () => {
					Rt(o), W(t), n.clear(), a = !0;
				};
				if (A === "then") {
					if (r.length === 0) return { then: () => o };
					const u = I(t, n, {
						type: "GET",
						path: r.map((i) => i.toString())
					}).then(U);
					return u.then.bind(u);
				}
				return C(t, n, [...r, A]);
			},
			set(_, A, u) {
				y(a);
				const [i, S] = P(u);
				return I(t, n, {
					type: "SET",
					path: [...r, A].map((R) => R.toString()),
					value: i
				}, S).then(U);
			},
			apply(_, A, u) {
				y(a);
				const i = r[r.length - 1];
				if (i === lt) return I(t, n, { type: "ENDPOINT" }).then(U);
				if (i === "bind") return C(t, n, r.slice(0, -1));
				const [S, R] = j(u);
				return I(t, n, {
					type: "APPLY",
					path: r.map((E) => E.toString()),
					argumentList: S
				}, R).then(U);
			},
			construct(_, A) {
				y(a);
				const [u, i] = j(A);
				return I(t, n, {
					type: "CONSTRUCT",
					path: r.map((S) => S.toString()),
					argumentList: u
				}, i).then(U);
			}
		});
		return _t(o, t), o;
	}
	function Mt(t) {
		return Array.prototype.concat.apply([], t);
	}
	function j(t) {
		const n = t.map(P);
		return [n.map((r) => r[0]), Mt(n.map((r) => r[1]))];
	}
	const q = /* @__PURE__ */ new WeakMap();
	function Q(t, n) {
		return q.set(t, n), t;
	}
	function mt(t) {
		return Object.assign(t, { [Y]: !0 });
	}
	function P(t) {
		for (const [n, r] of J) if (r.canHandle(t)) {
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
		}, q.get(t) || []];
	}
	function U(t) {
		switch (t.type) {
			case "HANDLER": return J.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function I(t, n, r, e) {
		return new Promise((a) => {
			const o = Nt();
			n.set(o, a), t.start && t.start(), t.postMessage(Object.assign({ id: o }, r), e);
		});
	}
	function Nt() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	function Ut(t) {
		return Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z);
	}
	function It(t) {
		return t.x * t.x + t.y * t.y + t.z * t.z;
	}
	function Tt(t) {
		return Math.sqrt(It(t));
	}
	function gt(t) {
		const n = Tt(t);
		return n < 1e-18 ? null : {
			x: t.x / n,
			y: t.y / n,
			z: t.z / n
		};
	}
	const ht = 149597870.7, yt = 648e3 / Math.PI, X = 1500, Z = X;
	X / 15;
	100 / yt;
	const d = {
		x: 0,
		y: 0,
		z: 0
	}, pt = Z + 500, s = {
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
	}, v = {
		[s.SUN]: {
			name: "Sun",
			type: "star",
			color: "#f5e042",
			radiusKm: 696340
		},
		[s.MERCURY]: {
			name: "Mercury",
			type: "planet",
			color: "#9c8a78",
			radiusKm: 2439.7
		},
		[s.VENUS]: {
			name: "Venus",
			type: "planet",
			color: "#f0e3a0",
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
			color: "#c8985a",
			radiusKm: 69911
		},
		[s.SATURN]: {
			name: "Saturn",
			type: "planet",
			color: "#e8c673",
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
			color: "#a26847",
			radiusKm: 1188.3
		},
		[s.MOON]: {
			name: "Moon",
			type: "moon",
			radiusKm: 1737
		}
	};
	s.SUN, s.MERCURY, s.VENUS, s.EARTH, s.MARS, s.JUPITER, s.SATURN, s.URANUS, s.NEPTUNE, s.PLUTO;
	const F = v[s.EARTH]?.radiusKm ?? 6371, x = v[s.SUN]?.radiusKm ?? 696340, Ot = F / x, T = .04;
	F / T;
	T / F / (15 / ht);
	function D(t) {
		return !Number.isFinite(t) || t <= 0 ? T : t / Ot * T;
	}
	function Pt(t) {
		return !Number.isFinite(t) || t <= 0 ? T : D(t / x);
	}
	Pt(x);
	const Dt = .008;
	function bt(t, n) {
		if (!Number.isFinite(n) || n <= 0 || t == null || !Number.isFinite(t)) return D(1);
		const r = t - 5 * Math.log10(n / 10), e = Math.pow(10, (4.83 - r) / 2.5);
		return D(Math.max(Dt, Math.min(100, Math.sqrt(e))));
	}
	const b = 149597870.69098932;
	2 * Math.PI;
	3600 * (180 / Math.PI);
	const B = 10800 * 60;
	2 * B;
	const wt = B / Math.PI;
	-.17 - 5 * Math.log10(wt);
	695700 / b;
	const z = .996647180302104;
	z * z;
	const tt = 6378.1366;
	tt / b;
	tt * z;
	1738.1 / b;
	1736 / b;
	function H(t) {
		if (!Number.isFinite(t)) throw console.trace(), `Value is not a finite number: ${t}`;
		return t;
	}
	var c;
	(function(t) {
		t.Sun = "Sun", t.Moon = "Moon", t.Mercury = "Mercury", t.Venus = "Venus", t.Earth = "Earth", t.Mars = "Mars", t.Jupiter = "Jupiter", t.Saturn = "Saturn", t.Uranus = "Uranus", t.Neptune = "Neptune", t.Pluto = "Pluto", t.SSB = "SSB", t.EMB = "EMB", t.Star1 = "Star1", t.Star2 = "Star2", t.Star3 = "Star3", t.Star4 = "Star4", t.Star5 = "Star5", t.Star6 = "Star6", t.Star7 = "Star7", t.Star8 = "Star8";
	})(c || (c = {}));
	c.Star1, c.Star2, c.Star3, c.Star4, c.Star5, c.Star6, c.Star7, c.Star8;
	var nt;
	(function(t) {
		t[t.From2000 = 0] = "From2000", t[t.Into2000 = 1] = "Into2000";
	})(nt || (nt = {}));
	var Lt = class {
		constructor(t) {
			this.rot = t;
		}
	};
	function Ct(t) {
		if (!(t instanceof rt)) throw `Not an instance of the Observer class: ${t}`;
		if (H(t.latitude), H(t.longitude), H(t.height), t.latitude < -90 || t.latitude > 90) throw `Latitude ${t.latitude} is out of range. Must be -90..+90.`;
		return t;
	}
	var rt = class {
		constructor(t, n, r) {
			this.latitude = t, this.longitude = n, this.height = r, Ct(this);
		}
	};
	new Lt([
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
	var et;
	(function(t) {
		t[t.Pericenter = 0] = "Pericenter", t[t.Apocenter = 1] = "Apocenter";
	})(et || (et = {}));
	var at;
	(function(t) {
		t.Penumbral = "penumbral", t.Partial = "partial", t.Annular = "annular", t.Total = "total";
	})(at || (at = {}));
	var st;
	(function(t) {
		t[t.Invalid = 0] = "Invalid", t[t.Ascending = 1] = "Ascending", t[t.Descending = -1] = "Descending";
	})(st || (st = {}));
	new rt(40.7128, -74.006, 10);
	function ot(t, n) {
		const r = t * Math.PI / 180, e = n * Math.PI / 180, a = Math.cos(e);
		return {
			x: a * Math.cos(r),
			y: a * Math.sin(r),
			z: Math.sin(e)
		};
	}
	function dt(t) {
		if (t == null || !Number.isFinite(t) || t <= 0) return null;
		const n = 1 / t;
		return Number.isFinite(n) ? n : null;
	}
	s.SUN, c.Sun, s.MERCURY, c.Mercury, s.VENUS, c.Venus, s.EARTH, c.Earth, s.MARS, c.Mars, s.JUPITER, c.Jupiter, s.SATURN, c.Saturn, s.URANUS, c.Uranus, s.NEPTUNE, c.Neptune, s.PLUTO, c.Pluto, s.MOON, c.Moon;
	2 * Math.PI;
	Math.PI / (180 * 3600);
	function Ft(t) {
		return t == null || !Number.isFinite(t) || t < 1 || t > 4 ? 4 : Math.floor(t);
	}
	function xt(t, n) {
		return t.length === 0 || n?.raInHours !== !0 ? t : t.map((r) => ({
			...r,
			ra: r.ra * 15
		}));
	}
	function zt(t, n, r) {
		let e = t.filter((o) => o.ra >= n.raMin && o.ra <= n.raMax && o.dec >= n.decMin && o.dec <= n.decMax);
		const a = r?.maxDistanceLevel;
		if (a != null) {
			if (a === 0) return [];
			e = e.filter((o) => Ft(o.dl) <= a);
		}
		return e;
	}
	function V(t) {
		return t.id === 0 || t.id === "0";
	}
	function it(t) {
		if (V(t)) return 0;
		const { x: n, y: r, z: e, plx: a } = t;
		return n != null && r != null && e != null && Number.isFinite(n) && Number.isFinite(r) && Number.isFinite(e) ? Ut({
			x: n,
			y: r,
			z: e
		}) : dt(a) ?? 25;
	}
	function Ht(t) {
		if (V(t)) return {
			x: d.x,
			y: d.y,
			z: d.z
		};
		const n = Z + it(t) * 20, { x: r, y: e, z: a, ra: o, dec: _ } = t, A = r != null && e != null && a != null && Number.isFinite(r) && Number.isFinite(e) && Number.isFinite(a);
		let u = null;
		return A && (u = gt({
			x: r,
			y: e,
			z: a
		})), u == null && (u = ot(o, _)), {
			x: u.x * n,
			y: u.y * n,
			z: u.z * n
		};
	}
	function Vt(t) {
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
	const ct = 2, kt = 500;
	function Kt() {
		const t = [];
		for (let n = 0; n < kt; n++) {
			const r = n * .7 % 360, e = n * .3 % 180 - 90;
			t.push(ot(r, e));
		}
		return t;
	}
	function Yt() {
		const t = pt;
		return Kt().map((n) => ({
			x: n.x * t,
			y: n.y * t,
			z: n.z * t
		}));
	}
	function Gt(t) {
		const { catalog: n, maxDistanceLevel: r, simplifyStars: e, bounds: a, raInHours: o } = t, _ = zt(xt(n, { raInHours: o }).filter((l) => !V(l)), a, { maxDistanceLevel: r }), A = (l, M, f, g) => ({
			positions: l,
			sizes: M,
			colors: f,
			brightness: g,
			namedStarsInView: [],
			starsInView: []
		});
		if (_.length === 0) {
			if (r === 0) return A(new Float32Array(0), new Float32Array(0), new Float32Array(0), new Float32Array(0));
			const l = Yt(), M = l.length, f = new Float32Array(M * 3), g = new Float32Array(M).fill(ct), k = new Float32Array(M * 3).fill(1), K = new Float32Array(M).fill(1);
			for (let m = 0; m < M; m++) f[m * 3] = l[m].x, f[m * 3 + 1] = l[m].y, f[m * 3 + 2] = l[m].z;
			return A(f, g, k, K);
		}
		const u = _.map(Ht), i = u.length, S = new Float32Array(i * 3), R = new Float32Array(i), E = new Float32Array(i * 3), N = new Float32Array(i), ut = [];
		for (let l = 0; l < i; l++) {
			const M = u[l], f = _[l];
			S[l * 3] = M.x, S[l * 3 + 1] = M.y, S[l * 3 + 2] = M.z;
			const g = f ? bt(f.mag, it(f)) : T;
			R[l] = e ? ct : g;
			const k = f?.c != null ? `#${f.c}` : void 0, [K, m, $t] = e ? [
				1,
				1,
				1
			] : Vt(k);
			E[l * 3] = K, E[l * 3 + 1] = m, E[l * 3 + 2] = $t, N[l] = e ? 1 : f?.br != null && Number.isFinite(f.br) ? Math.max(0, Math.min(1, f.br)) : 1, f?.proper && ut.push({
				position: { ...M },
				name: f.proper,
				catalogId: String(f.id)
			});
		}
		return {
			positions: S,
			sizes: R,
			colors: E,
			brightness: N,
			namedStarsInView: ut,
			starsInView: _
		};
	}
	function Jt(t) {
		return [
			t.positions.buffer,
			t.sizes.buffer,
			t.colors.buffer,
			t.brightness.buffer
		];
	}
	L({ async processStarfield(t) {
		const { runId: n, ...r } = t;
		try {
			const e = Gt(r);
			return Q({
				runId: n,
				...e
			}, Jt(e));
		} catch (e) {
			const a = e instanceof Error ? e.message : String(e);
			throw Object.assign(new Error(a), { cause: e });
		}
	} });
})();
