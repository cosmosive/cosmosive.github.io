(function() {
	const K = Symbol("Comlink.proxy"), at = Symbol("Comlink.endpoint"), st = Symbol("Comlink.releaseProxy"), g = Symbol("Comlink.finalizer"), T = Symbol("Comlink.thrown"), Y = (t) => typeof t == "object" && t !== null || typeof t == "function", J = new Map([["proxy", {
		canHandle: (t) => Y(t) && t[K],
		serialize(t) {
			const { port1: e, port2: n } = new MessageChannel();
			return P(t, e), [n, [n]];
		},
		deserialize(t) {
			return t.start(), ct(t);
		}
	}], ["throw", {
		canHandle: (t) => Y(t) && T in t,
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
		e.addEventListener("message", function a(s) {
			if (!s || !s.data) return;
			if (!ot(n, s.origin)) {
				console.warn(`Invalid origin '${s.origin}' for comlink proxy`);
				return;
			}
			const { id: i, type: S, path: E } = Object.assign({ path: [] }, s.data), A = (s.data.argumentList || []).map(f);
			let c;
			try {
				const u = E.slice(0, -1).reduce((_, m) => _[m], t), R = E.reduce((_, m) => _[m], t);
				switch (S) {
					case "GET":
						c = R;
						break;
					case "SET":
						u[E.slice(-1)[0]] = f(s.data.value), c = !0;
						break;
					case "APPLY":
						c = R.apply(u, A);
						break;
					case "CONSTRUCT":
						c = _t(new R(...A));
						break;
					case "ENDPOINT":
						{
							const { port1: _, port2: m } = new MessageChannel();
							P(t, m), c = Et(_, [_]);
						}
						break;
					case "RELEASE":
						c = void 0;
						break;
					default: return;
				}
			} catch (u) {
				c = {
					value: u,
					[T]: 0
				};
			}
			Promise.resolve(c).catch((u) => ({
				value: u,
				[T]: 0
			})).then((u) => {
				const [R, _] = y(u);
				e.postMessage(Object.assign(Object.assign({}, R), { id: i }), _), S === "RELEASE" && (e.removeEventListener("message", a), v(e), g in t && typeof t[g] == "function" && t[g]());
			}).catch((u) => {
				const [R, _] = y({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[T]: 0
				});
				e.postMessage(Object.assign(Object.assign({}, R), { id: i }), _);
			});
		}), e.start && e.start();
	}
	function it(t) {
		return t.constructor.name === "MessagePort";
	}
	function v(t) {
		it(t) && t.close();
	}
	function ct(t, e) {
		const n = /* @__PURE__ */ new Map();
		return t.addEventListener("message", function(s) {
			const { data: i } = s;
			if (!i || !i.id) return;
			const S = n.get(i.id);
			if (S) try {
				S(i);
			} finally {
				n.delete(i.id);
			}
		}), D(t, n, [], e);
	}
	function M(t) {
		if (t) throw new Error("Proxy has been released and is not useable");
	}
	function z(t) {
		return p(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			v(t);
		});
	}
	const N = /* @__PURE__ */ new WeakMap(), I = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const e = (N.get(t) || 0) - 1;
		N.set(t, e), e === 0 && z(t);
	});
	function ut(t, e) {
		const n = (N.get(e) || 0) + 1;
		N.set(e, n), I && I.register(t, e, t);
	}
	function lt(t) {
		I && I.unregister(t);
	}
	function D(t, e, n = [], a = function() {}) {
		let s = !1;
		const i = new Proxy(a, {
			get(S, E) {
				if (M(s), E === st) return () => {
					lt(i), z(t), e.clear(), s = !0;
				};
				if (E === "then") {
					if (n.length === 0) return { then: () => i };
					const A = p(t, e, {
						type: "GET",
						path: n.map((c) => c.toString())
					}).then(f);
					return A.then.bind(A);
				}
				return D(t, e, [...n, E]);
			},
			set(S, E, A) {
				M(s);
				const [c, u] = y(A);
				return p(t, e, {
					type: "SET",
					path: [...n, E].map((R) => R.toString()),
					value: c
				}, u).then(f);
			},
			apply(S, E, A) {
				M(s);
				const c = n[n.length - 1];
				if (c === at) return p(t, e, { type: "ENDPOINT" }).then(f);
				if (c === "bind") return D(t, e, n.slice(0, -1));
				const [u, R] = $(A);
				return p(t, e, {
					type: "APPLY",
					path: n.map((_) => _.toString()),
					argumentList: u
				}, R).then(f);
			},
			construct(S, E) {
				M(s);
				const [A, c] = $(E);
				return p(t, e, {
					type: "CONSTRUCT",
					path: n.map((u) => u.toString()),
					argumentList: A
				}, c).then(f);
			}
		});
		return ut(i, t), i;
	}
	function St(t) {
		return Array.prototype.concat.apply([], t);
	}
	function $(t) {
		const e = t.map(y);
		return [e.map((n) => n[0]), St(e.map((n) => n[1]))];
	}
	const G = /* @__PURE__ */ new WeakMap();
	function Et(t, e) {
		return G.set(t, e), t;
	}
	function _t(t) {
		return Object.assign(t, { [K]: !0 });
	}
	function y(t) {
		for (const [e, n] of J) if (n.canHandle(t)) {
			const [a, s] = n.serialize(t);
			return [{
				type: "HANDLER",
				name: e,
				value: a
			}, s];
		}
		return [{
			type: "RAW",
			value: t
		}, G.get(t) || []];
	}
	function f(t) {
		switch (t.type) {
			case "HANDLER": return J.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function p(t, e, n, a) {
		return new Promise((s) => {
			const i = At();
			e.set(i, s), t.start && t.start(), t.postMessage(Object.assign({ id: i }, n), a);
		});
	}
	function At() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	const Rt = 149597870.7, ft = 648e3 / Math.PI, W = 1500, pt = W;
	W / 15;
	100 / ft;
	pt + 500;
	const h = 1721545, L = 3181545, r = {
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
	}, Q = {
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
	};
	r.SUN, r.MERCURY, r.VENUS, r.EARTH, r.MARS, r.JUPITER, r.SATURN, r.URANUS, r.NEPTUNE, r.PLUTO;
	const C = Q[r.EARTH]?.radiusKm ?? 6371, b = Q[r.SUN]?.radiusKm ?? 696340, Ut = C / b, U = .04;
	C / U;
	U / C / (15 / Rt);
	function mt(t) {
		return !Number.isFinite(t) || t <= 0 ? U : t / Ut * U;
	}
	function Tt(t) {
		return !Number.isFinite(t) || t <= 0 ? U : mt(t / b);
	}
	Tt(b);
	const d = 149597870.69098932;
	2 * Math.PI;
	3600 * (180 / Math.PI);
	const X = 10800 * 60;
	2 * X;
	const Mt = X / Math.PI;
	-.17 - 5 * Math.log10(Mt);
	695700 / d;
	const w = .996647180302104;
	w * w;
	const q = 6378.1366;
	q / d;
	q * w;
	1738.1 / d;
	1736 / d;
	function k(t) {
		if (!Number.isFinite(t)) throw console.trace(), `Value is not a finite number: ${t}`;
		return t;
	}
	var o;
	(function(t) {
		t.Sun = "Sun", t.Moon = "Moon", t.Mercury = "Mercury", t.Venus = "Venus", t.Earth = "Earth", t.Mars = "Mars", t.Jupiter = "Jupiter", t.Saturn = "Saturn", t.Uranus = "Uranus", t.Neptune = "Neptune", t.Pluto = "Pluto", t.SSB = "SSB", t.EMB = "EMB", t.Star1 = "Star1", t.Star2 = "Star2", t.Star3 = "Star3", t.Star4 = "Star4", t.Star5 = "Star5", t.Star6 = "Star6", t.Star7 = "Star7", t.Star8 = "Star8";
	})(o || (o = {}));
	o.Star1, o.Star2, o.Star3, o.Star4, o.Star5, o.Star6, o.Star7, o.Star8;
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
		if (k(t.latitude), k(t.longitude), k(t.height), t.latitude < -90 || t.latitude > 90) throw `Latitude ${t.latitude} is out of range. Must be -90..+90.`;
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
	r.SUN, o.Sun, r.MERCURY, o.Mercury, r.VENUS, o.Venus, r.EARTH, o.Earth, r.MARS, o.Mars, r.JUPITER, o.Jupiter, r.SATURN, o.Saturn, r.URANUS, o.Uranus, r.NEPTUNE, o.Neptune, r.PLUTO, o.Pluto, r.MOON, o.Moon;
	2 * Math.PI;
	Math.PI / (180 * 3600);
	const yt = 86400;
	function dt(t) {
		return t.type === "setRate" && (!Number.isFinite(t.speed) || t.speed < 0) ? {
			type: "setRate",
			speed: 0
		} : t;
	}
	const Ot = 2451545;
	function H(t) {
		return {
			protocolVersion: 1,
			jd: t?.jd ?? Ot,
			playing: t?.playing ?? !1,
			speed: t?.speed ?? 86400
		};
	}
	function rt(t, e) {
		const n = dt(e);
		switch (n.type) {
			case "init": {
				const a = H({
					jd: n.jd ?? t.jd,
					playing: n.playing ?? t.playing,
					speed: n.speed ?? t.speed
				});
				return {
					state: a,
					events: [{
						type: "timeState",
						state: a
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
				let a = n.jd;
				(a < 1721545 || a > 3181545) && (console.warn(`[kernel/seek] JD ${a} outside supported range [${h}, ${L}] (years 0-4000 AD); clamping.`), a = Math.max(h, Math.min(L, a)));
				const s = {
					...t,
					jd: a
				};
				return {
					state: s,
					events: [{
						type: "tick",
						jd: s.jd
					}, {
						type: "timeState",
						state: s
					}]
				};
			}
			case "step": {
				if (!t.playing) return {
					state: t,
					events: []
				};
				const a = n.deltaSeconds;
				if (!Number.isFinite(a)) return {
					state: t,
					events: [{
						type: "error",
						code: "INVALID_DELTA",
						message: "step.deltaSeconds must be finite"
					}]
				};
				const s = t.jd + t.speed * a / yt, i = Math.max(h, Math.min(L, s)), S = {
					...t,
					jd: i
				};
				return {
					state: S,
					events: [{
						type: "tick",
						jd: i
					}, {
						type: "timeState",
						state: S
					}]
				};
			}
			case "setPlaying": {
				const a = {
					...t,
					playing: n.playing
				};
				return {
					state: a,
					events: [{
						type: "timeState",
						state: a
					}]
				};
			}
			case "setRate": {
				const a = {
					...t,
					speed: n.speed
				};
				return {
					state: a,
					events: [{
						type: "timeState",
						state: a
					}]
				};
			}
			default: return {
				state: t,
				events: []
			};
		}
	}
	let l = H(), O = null, x = null;
	function V(t) {
		x?.(t);
	}
	function F() {
		O != null && (clearInterval(O), O = null);
	}
	function gt() {
		F(), O = setInterval(() => {
			const { state: t, events: e } = rt(l, {
				type: "step",
				deltaSeconds: .5
			});
			l = t, V({
				type: "tick",
				state: l,
				events: e
			});
		}, 500);
	}
	function j() {
		l.playing ? gt() : F();
	}
	function Pt(t) {
		if (t.type === "init") {
			l = H({
				jd: t.jd ?? l.jd,
				playing: t.playing ?? l.playing,
				speed: t.speed ?? l.speed
			}), j(), V({
				type: "tick",
				state: l,
				events: []
			});
			return;
		}
		if (t.type === "time") {
			const { state: e, events: n } = rt(l, t.cmd);
			l = e, V({
				type: "tick",
				state: l,
				events: n
			}), j();
		}
	}
	P({
		postInbound(t) {
			try {
				Pt(t);
			} catch (e) {
				console.error(e);
			}
		},
		subscribe(t) {
			x = t, j();
		},
		unsubscribe() {
			x = null, F();
		}
	});
})();
