(function() {
	const V = Symbol("Comlink.proxy"), et = Symbol("Comlink.endpoint"), at = Symbol("Comlink.releaseProxy"), b = Symbol("Comlink.finalizer"), T = Symbol("Comlink.thrown"), H = (t) => typeof t == "object" && t !== null || typeof t == "function", k = new Map([["proxy", {
		canHandle: (t) => H(t) && t[V],
		serialize(t) {
			const { port1: n, port2: r } = new MessageChannel();
			return w(t, n), [r, [r]];
		},
		deserialize(t) {
			return t.start(), it(t);
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
	function st(t, n) {
		for (const r of t) if (n === r || r === "*" || r instanceof RegExp && r.test(n)) return !0;
		return !1;
	}
	function w(t, n = globalThis, r = ["*"]) {
		n.addEventListener("message", function e(a) {
			if (!a || !a.data) return;
			if (!st(r, a.origin)) {
				console.warn(`Invalid origin '${a.origin}' for comlink proxy`);
				return;
			}
			const { id: o, type: E, path: A } = Object.assign({ path: [] }, a.data), R = (a.data.argumentList || []).map(g);
			let i;
			try {
				const u = A.slice(0, -1).reduce((f, U) => f[U], t), _ = A.reduce((f, U) => f[U], t);
				switch (E) {
					case "GET":
						i = _;
						break;
					case "SET":
						u[A.slice(-1)[0]] = g(a.data.value), i = !0;
						break;
					case "APPLY":
						i = _.apply(u, R);
						break;
					case "CONSTRUCT":
						i = ft(new _(...R));
						break;
					case "ENDPOINT":
						{
							const { port1: f, port2: U } = new MessageChannel();
							w(t, U), i = $(f, [f]);
						}
						break;
					case "RELEASE":
						i = void 0;
						break;
					default: return;
				}
			} catch (u) {
				i = {
					value: u,
					[T]: 0
				};
			}
			Promise.resolve(i).catch((u) => ({
				value: u,
				[T]: 0
			})).then((u) => {
				const [_, f] = O(u);
				n.postMessage(Object.assign(Object.assign({}, _), { id: o }), f), E === "RELEASE" && (n.removeEventListener("message", e), K(n), b in t && typeof t[b] == "function" && t[b]());
			}).catch((u) => {
				const [_, f] = O({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[T]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, _), { id: o }), f);
			});
		}), n.start && n.start();
	}
	function ot(t) {
		return t.constructor.name === "MessagePort";
	}
	function K(t) {
		ot(t) && t.close();
	}
	function it(t, n) {
		const r = /* @__PURE__ */ new Map();
		return t.addEventListener("message", function(a) {
			const { data: o } = a;
			if (!o || !o.id) return;
			const E = r.get(o.id);
			if (E) try {
				E(o);
			} finally {
				r.delete(o.id);
			}
		}), D(t, r, [], n);
	}
	function p(t) {
		if (t) throw new Error("Proxy has been released and is not useable");
	}
	function Y(t) {
		return h(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			K(t);
		});
	}
	const y = /* @__PURE__ */ new WeakMap(), I = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const n = (y.get(t) || 0) - 1;
		y.set(t, n), n === 0 && Y(t);
	});
	function ct(t, n) {
		const r = (y.get(n) || 0) + 1;
		y.set(n, r), I && I.register(t, n, t);
	}
	function ut(t) {
		I && I.unregister(t);
	}
	function D(t, n, r = [], e = function() {}) {
		let a = !1;
		const o = new Proxy(e, {
			get(E, A) {
				if (p(a), A === at) return () => {
					ut(o), Y(t), n.clear(), a = !0;
				};
				if (A === "then") {
					if (r.length === 0) return { then: () => o };
					const R = h(t, n, {
						type: "GET",
						path: r.map((i) => i.toString())
					}).then(g);
					return R.then.bind(R);
				}
				return D(t, n, [...r, A]);
			},
			set(E, A, R) {
				p(a);
				const [i, u] = O(R);
				return h(t, n, {
					type: "SET",
					path: [...r, A].map((_) => _.toString()),
					value: i
				}, u).then(g);
			},
			apply(E, A, R) {
				p(a);
				const i = r[r.length - 1];
				if (i === et) return h(t, n, { type: "ENDPOINT" }).then(g);
				if (i === "bind") return D(t, n, r.slice(0, -1));
				const [u, _] = G(R);
				return h(t, n, {
					type: "APPLY",
					path: r.map((f) => f.toString()),
					argumentList: u
				}, _).then(g);
			},
			construct(E, A) {
				p(a);
				const [R, i] = G(A);
				return h(t, n, {
					type: "CONSTRUCT",
					path: r.map((u) => u.toString()),
					argumentList: R
				}, i).then(g);
			}
		});
		return ct(o, t), o;
	}
	function lt(t) {
		return Array.prototype.concat.apply([], t);
	}
	function G(t) {
		const n = t.map(O);
		return [n.map((r) => r[0]), lt(n.map((r) => r[1]))];
	}
	const J = /* @__PURE__ */ new WeakMap();
	function $(t, n) {
		return J.set(t, n), t;
	}
	function ft(t) {
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
	function g(t) {
		switch (t.type) {
			case "HANDLER": return k.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function h(t, n, r, e) {
		return new Promise((a) => {
			const o = St();
			n.set(o, a), t.start && t.start(), t.postMessage(Object.assign({ id: o }, r), e);
		});
	}
	function St() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	function At(t) {
		return Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z);
	}
	648e3 / Math.PI;
	const s = {
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
	}, Et = {
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
	const Rt = 6371 / (Et[s.SUN]?.radiusKm ?? 696340), d = .04;
	function L(t) {
		return !Number.isFinite(t) || t <= 0 ? d : t / Rt * d;
	}
	const _t = .008;
	function mt(t, n) {
		if (!Number.isFinite(n) || n <= 0 || t == null || !Number.isFinite(t)) return L(1);
		const r = t - 5 * Math.log10(n / 10), e = Math.pow(10, (4.83 - r) / 2.5);
		return L(Math.max(_t, Math.min(100, Math.sqrt(e))));
	}
	const P = 149597870.69098932;
	2 * Math.PI;
	3600 * (180 / Math.PI);
	const W = 10800 * 60;
	2 * W;
	const Mt = W / Math.PI;
	-.17 - 5 * Math.log10(Mt);
	695700 / P;
	const F = .996647180302104;
	F * F;
	const j = 6378.1366;
	j / P;
	j * F;
	1738.1 / P;
	1736 / P;
	function C(t) {
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
	var Ut = class {
		constructor(t) {
			this.rot = t;
		}
	};
	function gt(t) {
		if (!(t instanceof Q)) throw `Not an instance of the Observer class: ${t}`;
		if (C(t.latitude), C(t.longitude), C(t.height), t.latitude < -90 || t.latitude > 90) throw `Latitude ${t.latitude} is out of range. Must be -90..+90.`;
		return t;
	}
	var Q = class {
		constructor(t, n, r) {
			this.latitude = t, this.longitude = n, this.height = r, gt(this);
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
	var q;
	(function(t) {
		t[t.Pericenter = 0] = "Pericenter", t[t.Apocenter = 1] = "Apocenter";
	})(q || (q = {}));
	var X;
	(function(t) {
		t.Penumbral = "penumbral", t.Partial = "partial", t.Annular = "annular", t.Total = "total";
	})(X || (X = {}));
	var Z;
	(function(t) {
		t[t.Invalid = 0] = "Invalid", t[t.Ascending = 1] = "Ascending", t[t.Descending = -1] = "Descending";
	})(Z || (Z = {}));
	new Q(40.7128, -74.006, 10);
	function B(t, n) {
		const r = t * Math.PI / 180, e = n * Math.PI / 180, a = Math.cos(e);
		return {
			x: a * Math.cos(r),
			y: a * Math.sin(r),
			z: Math.sin(e)
		};
	}
	function ht(t) {
		if (t == null || !Number.isFinite(t) || t <= 0) return null;
		const n = 1 / t;
		return Number.isFinite(n) ? n : null;
	}
	function Nt(t, n, r, e) {
		const a = B(t, n), o = r * e;
		return {
			x: a.x * o,
			y: a.y * o,
			z: a.z * o
		};
	}
	function Tt(t) {
		return t == null || !Number.isFinite(t) || t < 1 || t > 4 ? 4 : Math.floor(t);
	}
	s.SUN, c.Sun, s.MERCURY, c.Mercury, s.VENUS, c.Venus, s.EARTH, c.Earth, s.MARS, c.Mars, s.JUPITER, c.Jupiter, s.SATURN, c.Saturn, s.URANUS, c.Uranus, s.NEPTUNE, c.Neptune, s.PLUTO, c.Pluto, s.MOON, c.Moon;
	2 * Math.PI;
	Math.PI / (180 * 3600);
	function pt(t, n) {
		return t.length === 0 || n?.raInHours !== !0 ? t : t.map((r) => ({
			...r,
			ra: r.ra * 15
		}));
	}
	function yt(t, n, r) {
		let e = t.filter((o) => o.ra >= n.raMin && o.ra <= n.raMax && o.dec >= n.decMin && o.dec <= n.decMax);
		const a = r?.maxDistanceLevel;
		if (a != null) {
			if (a === 0) return [];
			e = e.filter((o) => Tt(o.dl) <= a);
		}
		return e;
	}
	function tt(t) {
		const { x: n, y: r, z: e, plx: a } = t;
		return n != null && r != null && e != null && Number.isFinite(n) && Number.isFinite(r) && Number.isFinite(e) ? At({
			x: n,
			y: r,
			z: e
		}) : ht(a) ?? 25;
	}
	function It(t) {
		const { x: n, y: r, z: e, ra: a, dec: o } = t;
		return n != null && r != null && e != null && Number.isFinite(n) && Number.isFinite(r) && Number.isFinite(e) ? {
			x: n * 20,
			y: r * 20,
			z: e * 20
		} : Nt(a, o, tt(t), 20);
	}
	function Ot(t) {
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
	const nt = 2, Pt = 500;
	function bt() {
		const t = [];
		for (let n = 0; n < Pt; n++) {
			const r = n * .7 % 360, e = n * .3 % 180 - 90;
			t.push(B(r, e));
		}
		return t;
	}
	function wt() {
		return bt().map((n) => ({
			x: n.x * 500,
			y: n.y * 500,
			z: n.z * 500
		}));
	}
	function Dt(t) {
		const { catalog: n, maxDistanceLevel: r, simplifyStars: e, bounds: a, raInHours: o } = t, E = yt(pt(n, { raInHours: o }), a, { maxDistanceLevel: r }), A = (l, m, S, N) => ({
			positions: l,
			sizes: m,
			colors: S,
			brightness: N,
			namedStarsInView: [],
			starsInView: []
		});
		if (E.length === 0) {
			if (r === 0) return A(new Float32Array(0), new Float32Array(0), new Float32Array(0), new Float32Array(0));
			const l = wt(), m = l.length, S = new Float32Array(m * 3), N = new Float32Array(m).fill(nt), x = new Float32Array(m * 3).fill(1), z = new Float32Array(m).fill(1);
			for (let M = 0; M < m; M++) S[M * 3] = l[M].x, S[M * 3 + 1] = l[M].y, S[M * 3 + 2] = l[M].z;
			return A(S, N, x, z);
		}
		const R = E.map(It), i = R.length, u = new Float32Array(i * 3), _ = new Float32Array(i), f = new Float32Array(i * 3), U = new Float32Array(i), rt = [];
		for (let l = 0; l < i; l++) {
			const m = R[l], S = E[l];
			u[l * 3] = m.x, u[l * 3 + 1] = m.y, u[l * 3 + 2] = m.z;
			const N = S ? mt(S.mag, tt(S)) : d;
			_[l] = e ? nt : N;
			const x = S?.c != null ? `#${S.c}` : void 0, [z, M, Lt] = e ? [
				1,
				1,
				1
			] : Ot(x);
			f[l * 3] = z, f[l * 3 + 1] = M, f[l * 3 + 2] = Lt, U[l] = e ? 1 : S?.br != null && Number.isFinite(S.br) ? Math.max(0, Math.min(1, S.br)) : 1, S?.proper && rt.push({
				position: { ...m },
				name: S.proper
			});
		}
		return {
			positions: u,
			sizes: _,
			colors: f,
			brightness: U,
			namedStarsInView: rt,
			starsInView: E
		};
	}
	function dt(t) {
		return [
			t.positions.buffer,
			t.sizes.buffer,
			t.colors.buffer,
			t.brightness.buffer
		];
	}
	w({ async processStarfield(t) {
		const { runId: n, ...r } = t;
		try {
			const e = Dt(r);
			return $({
				runId: n,
				...e
			}, dt(e));
		} catch (e) {
			const a = e instanceof Error ? e.message : String(e);
			throw Object.assign(new Error(a), { cause: e });
		}
	} });
})();
