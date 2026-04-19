(function() {
	const K = Symbol("Comlink.proxy"), at = Symbol("Comlink.endpoint"), st = Symbol("Comlink.releaseProxy"), g = Symbol("Comlink.finalizer"), U = Symbol("Comlink.thrown"), Y = (t) => typeof t == "object" && t !== null || typeof t == "function", J = new Map([["proxy", {
		canHandle: (t) => Y(t) && t[K],
		serialize(t) {
			const { port1: e, port2: n } = new MessageChannel();
			return P(t, e), [n, [n]];
		},
		deserialize(t) {
			return t.start(), ct(t);
		}
	}], ["throw", {
		canHandle: (t) => Y(t) && U in t,
		serialize({ value: t }) {
			let e;
			return t instanceof Error ? e = {
				isError: !0,
				value: {
					message: t.message,
					name: t.name,
					stack: t.stack
				}
			} : e = {
				isError: !1,
				value: t
			}, [e, []];
		},
		deserialize(t) {
			throw t.isError ? Object.assign(new Error(t.value.message), t.value) : t.value;
		}
	}]]);
	function ot(t, e) {
		for (const n of t) if (e === n || n === "*" || n instanceof RegExp && n.test(e)) return !0;
		return !1;
	}
	function P(t, e = globalThis, n = ["*"]) {
		e.addEventListener("message", function s(a) {
			if (!a || !a.data) return;
			if (!ot(n, a.origin)) {
				console.warn(`Invalid origin '${a.origin}' for comlink proxy`);
				return;
			}
			const { id: o, type: l, path: u } = Object.assign({ path: [] }, a.data), _ = (a.data.argumentList || []).map(f);
			let c;
			try {
				const S = u.slice(0, -1).reduce((R, d) => R[d], t), A = u.reduce((R, d) => R[d], t);
				switch (l) {
					case "GET":
						c = A;
						break;
					case "SET":
						S[u.slice(-1)[0]] = f(a.data.value), c = !0;
						break;
					case "APPLY":
						c = A.apply(S, _);
						break;
					case "CONSTRUCT":
						c = Rt(new A(..._));
						break;
					case "ENDPOINT":
						{
							const { port1: R, port2: d } = new MessageChannel();
							P(t, d), c = Et(R, [R]);
						}
						break;
					case "RELEASE":
						c = void 0;
						break;
					default: return;
				}
			} catch (S) {
				c = {
					value: S,
					[U]: 0
				};
			}
			Promise.resolve(c).catch((S) => ({
				value: S,
				[U]: 0
			})).then((S) => {
				const [A, R] = N(S);
				e.postMessage(Object.assign(Object.assign({}, A), { id: o }), R), l === "RELEASE" && (e.removeEventListener("message", s), G(e), g in t && typeof t[g] == "function" && t[g]());
			}).catch((S) => {
				const [A, R] = N({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[U]: 0
				});
				e.postMessage(Object.assign(Object.assign({}, A), { id: o }), R);
			});
		}), e.start && e.start();
	}
	function it(t) {
		return t.constructor.name === "MessagePort";
	}
	function G(t) {
		it(t) && t.close();
	}
	function ct(t, e) {
		const n = /* @__PURE__ */ new Map();
		return t.addEventListener("message", function(a) {
			const { data: o } = a;
			if (!o || !o.id) return;
			const l = n.get(o.id);
			if (l) try {
				l(o);
			} finally {
				n.delete(o.id);
			}
		}), h(t, n, [], e);
	}
	function T(t) {
		if (t) throw new Error("Proxy has been released and is not useable");
	}
	function v(t) {
		return p(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			G(t);
		});
	}
	const y = /* @__PURE__ */ new WeakMap(), M = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const e = (y.get(t) || 0) - 1;
		y.set(t, e), e === 0 && v(t);
	});
	function ut(t, e) {
		const n = (y.get(e) || 0) + 1;
		y.set(e, n), M && M.register(t, e, t);
	}
	function lt(t) {
		M && M.unregister(t);
	}
	function h(t, e, n = [], s = function() {}) {
		let a = !1;
		const o = new Proxy(s, {
			get(l, u) {
				if (T(a), u === st) return () => {
					lt(o), v(t), e.clear(), a = !0;
				};
				if (u === "then") {
					if (n.length === 0) return { then: () => o };
					const _ = p(t, e, {
						type: "GET",
						path: n.map((c) => c.toString())
					}).then(f);
					return _.then.bind(_);
				}
				return h(t, e, [...n, u]);
			},
			set(l, u, _) {
				T(a);
				const [c, S] = N(_);
				return p(t, e, {
					type: "SET",
					path: [...n, u].map((A) => A.toString()),
					value: c
				}, S).then(f);
			},
			apply(l, u, _) {
				T(a);
				const c = n[n.length - 1];
				if (c === at) return p(t, e, { type: "ENDPOINT" }).then(f);
				if (c === "bind") return h(t, e, n.slice(0, -1));
				const [S, A] = z(_);
				return p(t, e, {
					type: "APPLY",
					path: n.map((R) => R.toString()),
					argumentList: S
				}, A).then(f);
			},
			construct(l, u) {
				T(a);
				const [_, c] = z(u);
				return p(t, e, {
					type: "CONSTRUCT",
					path: n.map((S) => S.toString()),
					argumentList: _
				}, c).then(f);
			}
		});
		return ut(o, t), o;
	}
	function St(t) {
		return Array.prototype.concat.apply([], t);
	}
	function z(t) {
		const e = t.map(N);
		return [e.map((n) => n[0]), St(e.map((n) => n[1]))];
	}
	const $ = /* @__PURE__ */ new WeakMap();
	function Et(t, e) {
		return $.set(t, e), t;
	}
	function Rt(t) {
		return Object.assign(t, { [K]: !0 });
	}
	function N(t) {
		for (const [e, n] of J) if (n.canHandle(t)) {
			const [s, a] = n.serialize(t);
			return [{
				type: "HANDLER",
				name: e,
				value: s
			}, a];
		}
		return [{
			type: "RAW",
			value: t
		}, $.get(t) || []];
	}
	function f(t) {
		switch (t.type) {
			case "HANDLER": return J.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function p(t, e, n, s) {
		return new Promise((a) => {
			const o = _t();
			e.set(o, a), t.start && t.start(), t.postMessage(Object.assign({ id: o }, n), s);
		});
	}
	function _t() {
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
	}, At = {
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
	}, ft = 149597870.7, pt = 648e3 / Math.PI, W = 1500, mt = W;
	W / 15;
	100 / pt;
	mt + 500;
	const D = 1721545, L = 3181545;
	function dt(t) {
		return {
			name: t.name,
			type: t.type,
			color: t.color,
			radiusKm: t.radiusKm
		};
	}
	const Q = Object.fromEntries(Object.entries(At).map(([t, e]) => [t, dt(e)]));
	r.SUN, r.MERCURY, r.VENUS, r.EARTH, r.MARS, r.JUPITER, r.SATURN, r.URANUS, r.NEPTUNE, r.PLUTO;
	const b = Q[r.EARTH]?.radiusKm ?? 6371, C = Q[r.SUN]?.radiusKm ?? 696340, Ut = b / C, m = .04;
	b / m;
	m / b / (15 / ft);
	function Tt(t) {
		return !Number.isFinite(t) || t <= 0 ? m : t / Ut * m;
	}
	function yt(t) {
		return !Number.isFinite(t) || t <= 0 ? m : Tt(t / C);
	}
	yt(C);
	const I = 149597870.69098932;
	2 * Math.PI;
	3600 * (180 / Math.PI);
	const q = 10800 * 60;
	2 * q;
	const Mt = q / Math.PI;
	-.17 - 5 * Math.log10(Mt);
	695700 / I;
	const k = .996647180302104;
	k * k;
	const X = 6378.1366;
	X / I;
	X * k;
	1738.1 / I;
	1736 / I;
	function w(t) {
		if (!Number.isFinite(t)) throw console.trace(), `Value is not a finite number: ${t}`;
		return t;
	}
	var i;
	(function(t) {
		t.Sun = "Sun", t.Moon = "Moon", t.Mercury = "Mercury", t.Venus = "Venus", t.Earth = "Earth", t.Mars = "Mars", t.Jupiter = "Jupiter", t.Saturn = "Saturn", t.Uranus = "Uranus", t.Neptune = "Neptune", t.Pluto = "Pluto", t.SSB = "SSB", t.EMB = "EMB", t.Star1 = "Star1", t.Star2 = "Star2", t.Star3 = "Star3", t.Star4 = "Star4", t.Star5 = "Star5", t.Star6 = "Star6", t.Star7 = "Star7", t.Star8 = "Star8";
	})(i || (i = {}));
	i.Star1, i.Star2, i.Star3, i.Star4, i.Star5, i.Star6, i.Star7, i.Star8;
	var Z;
	(function(t) {
		t[t.From2000 = 0] = "From2000", t[t.Into2000 = 1] = "Into2000";
	})(Z || (Z = {}));
	var Nt = class {
		constructor(t) {
			this.rot = t;
		}
	};
	function It(t) {
		if (!(t instanceof B)) throw `Not an instance of the Observer class: ${t}`;
		if (w(t.latitude), w(t.longitude), w(t.height), t.latitude < -90 || t.latitude > 90) throw `Latitude ${t.latitude} is out of range. Must be -90..+90.`;
		return t;
	}
	var B = class {
		constructor(t, e, n) {
			this.latitude = t, this.longitude = e, this.height = n, It(this);
		}
	};
	new Nt([
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
	var et;
	(function(t) {
		t.Penumbral = "penumbral", t.Partial = "partial", t.Annular = "annular", t.Total = "total";
	})(et || (et = {}));
	var nt;
	(function(t) {
		t[t.Invalid = 0] = "Invalid", t[t.Ascending = 1] = "Ascending", t[t.Descending = -1] = "Descending";
	})(nt || (nt = {}));
	new B(40.7128, -74.006, 10);
	r.SUN, i.Sun, r.MERCURY, i.Mercury, r.VENUS, i.Venus, r.EARTH, i.Earth, r.MARS, i.Mars, r.JUPITER, i.Jupiter, r.SATURN, i.Saturn, r.URANUS, i.Uranus, r.NEPTUNE, i.Neptune, r.PLUTO, i.Pluto, r.MOON, i.Moon;
	2 * Math.PI;
	Math.PI / (180 * 3600);
	const Ot = 86400;
	function gt(t) {
		return t.type === "setRate" && (!Number.isFinite(t.speed) || t.speed < 0) ? {
			type: "setRate",
			speed: 0
		} : t;
	}
	const Pt = 2451545;
	function x(t) {
		return {
			protocolVersion: 1,
			jd: t?.jd ?? Pt,
			playing: t?.playing ?? !1,
			speed: t?.speed ?? 86400
		};
	}
	function rt(t, e) {
		const n = gt(e);
		switch (n.type) {
			case "init": {
				const s = x({
					jd: n.jd ?? t.jd,
					playing: n.playing ?? t.playing,
					speed: n.speed ?? t.speed
				});
				return {
					state: s,
					events: [{
						type: "timeState",
						state: s
					}]
				};
			}
			case "seek": {
				if (!Number.isFinite(n.jd)) return {
					state: t,
					events: [{
						type: "error",
						code: "INVALID_JD",
						message: "seek.jd must be finite"
					}]
				};
				const s = n.jd;
				let a = s;
				(a < 1721545 || a > 3181545) && (console.warn(`[kernel/seek] JD ${a} outside supported range [${D}, ${L}] (years 0-4000 AD); clamping.`), a = Math.max(D, Math.min(L, a)));
				const o = {
					...t,
					jd: a
				}, l = [{
					type: "tick",
					jd: o.jd
				}, {
					type: "timeState",
					state: o
				}];
				return (s < 1721545 || s > 3181545) && t.jd > 1721545 && t.jd < 3181545 && l.push({
					type: "jdBoundaryReached",
					boundary: s > 3181545 ? "max" : "min"
				}), {
					state: o,
					events: l
				};
			}
			case "step": {
				if (!t.playing) return {
					state: t,
					events: []
				};
				const s = n.deltaSeconds;
				if (!Number.isFinite(s)) return {
					state: t,
					events: [{
						type: "error",
						code: "INVALID_DELTA",
						message: "step.deltaSeconds must be finite"
					}]
				};
				const a = t.jd + t.speed * s / Ot, o = Math.max(D, Math.min(L, a)), l = {
					...t,
					jd: o
				}, u = [{
					type: "tick",
					jd: o
				}, {
					type: "timeState",
					state: l
				}];
				return a > 3181545 && t.jd < 3181545 ? u.push({
					type: "jdBoundaryReached",
					boundary: "max"
				}) : a < 1721545 && t.jd > 1721545 && u.push({
					type: "jdBoundaryReached",
					boundary: "min"
				}), {
					state: l,
					events: u
				};
			}
			case "setPlaying": {
				const s = {
					...t,
					playing: n.playing
				};
				return {
					state: s,
					events: [{
						type: "timeState",
						state: s
					}]
				};
			}
			case "setRate": {
				const s = {
					...t,
					speed: n.speed
				};
				return {
					state: s,
					events: [{
						type: "timeState",
						state: s
					}]
				};
			}
			default: return {
				state: t,
				events: []
			};
		}
	}
	let E = x(), O = null, j = null;
	function H(t) {
		j?.(t);
	}
	function V() {
		O != null && (clearInterval(O), O = null);
	}
	function ht() {
		V(), O = setInterval(() => {
			const { state: t, events: e } = rt(E, {
				type: "step",
				deltaSeconds: .5
			});
			E = t, H({
				type: "tick",
				state: E,
				events: e
			});
		}, 500);
	}
	function F() {
		E.playing ? ht() : V();
	}
	function Dt(t) {
		if (t.type === "init") {
			E = x({
				jd: t.jd ?? E.jd,
				playing: t.playing ?? E.playing,
				speed: t.speed ?? E.speed
			}), F(), H({
				type: "tick",
				state: E,
				events: []
			});
			return;
		}
		if (t.type === "time") {
			const { state: e, events: n } = rt(E, t.cmd);
			E = e, H({
				type: "tick",
				state: E,
				events: n
			}), F();
		}
	}
	P({
		postInbound(t) {
			try {
				Dt(t);
			} catch (e) {
				console.error(e);
			}
		},
		subscribe(t) {
			j = t, F();
		},
		unsubscribe() {
			j = null, V();
		}
	});
})();
