(function() {
	const j = Symbol("Comlink.proxy"), nt = Symbol("Comlink.endpoint"), rt = Symbol("Comlink.releaseProxy"), g = Symbol("Comlink.finalizer"), m = Symbol("Comlink.thrown"), F = (t) => typeof t == "object" && t !== null || typeof t == "function", Y = new Map([["proxy", {
		canHandle: (t) => F(t) && t[j],
		serialize(t) {
			const { port1: e, port2: n } = new MessageChannel();
			return P(t, e), [n, [n]];
		},
		deserialize(t) {
			return t.start(), ot(t);
		}
	}], ["throw", {
		canHandle: (t) => F(t) && m in t,
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
	function at(t, e) {
		for (const n of t) if (e === n || n === "*" || n instanceof RegExp && n.test(e)) return !0;
		return !1;
	}
	function P(t, e = globalThis, n = ["*"]) {
		e.addEventListener("message", function a(s) {
			if (!s || !s.data) return;
			if (!at(n, s.origin)) {
				console.warn(`Invalid origin '${s.origin}' for comlink proxy`);
				return;
			}
			const { id: i, type: R, path: S } = Object.assign({ path: [] }, s.data), _ = (s.data.argumentList || []).map(f);
			let c;
			try {
				const u = S.slice(0, -1).reduce((E, T) => E[T], t), A = S.reduce((E, T) => E[T], t);
				switch (R) {
					case "GET":
						c = A;
						break;
					case "SET":
						u[S.slice(-1)[0]] = f(s.data.value), c = !0;
						break;
					case "APPLY":
						c = A.apply(u, _);
						break;
					case "CONSTRUCT":
						c = St(new A(..._));
						break;
					case "ENDPOINT":
						{
							const { port1: E, port2: T } = new MessageChannel();
							P(t, T), c = lt(E, [E]);
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
					[m]: 0
				};
			}
			Promise.resolve(c).catch((u) => ({
				value: u,
				[m]: 0
			})).then((u) => {
				const [A, E] = d(u);
				e.postMessage(Object.assign(Object.assign({}, A), { id: i }), E), R === "RELEASE" && (e.removeEventListener("message", a), K(e), g in t && typeof t[g] == "function" && t[g]());
			}).catch((u) => {
				const [A, E] = d({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[m]: 0
				});
				e.postMessage(Object.assign(Object.assign({}, A), { id: i }), E);
			});
		}), e.start && e.start();
	}
	function st(t) {
		return t.constructor.name === "MessagePort";
	}
	function K(t) {
		st(t) && t.close();
	}
	function ot(t, e) {
		const n = /* @__PURE__ */ new Map();
		return t.addEventListener("message", function(s) {
			const { data: i } = s;
			if (!i || !i.id) return;
			const R = n.get(i.id);
			if (R) try {
				R(i);
			} finally {
				n.delete(i.id);
			}
		}), D(t, n, [], e);
	}
	function N(t) {
		if (t) throw new Error("Proxy has been released and is not useable");
	}
	function J(t) {
		return p(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			K(t);
		});
	}
	const M = /* @__PURE__ */ new WeakMap(), I = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const e = (M.get(t) || 0) - 1;
		M.set(t, e), e === 0 && J(t);
	});
	function it(t, e) {
		const n = (M.get(e) || 0) + 1;
		M.set(e, n), I && I.register(t, e, t);
	}
	function ct(t) {
		I && I.unregister(t);
	}
	function D(t, e, n = [], a = function() {}) {
		let s = !1;
		const i = new Proxy(a, {
			get(R, S) {
				if (N(s), S === rt) return () => {
					ct(i), J(t), e.clear(), s = !0;
				};
				if (S === "then") {
					if (n.length === 0) return { then: () => i };
					const _ = p(t, e, {
						type: "GET",
						path: n.map((c) => c.toString())
					}).then(f);
					return _.then.bind(_);
				}
				return D(t, e, [...n, S]);
			},
			set(R, S, _) {
				N(s);
				const [c, u] = d(_);
				return p(t, e, {
					type: "SET",
					path: [...n, S].map((A) => A.toString()),
					value: c
				}, u).then(f);
			},
			apply(R, S, _) {
				N(s);
				const c = n[n.length - 1];
				if (c === nt) return p(t, e, { type: "ENDPOINT" }).then(f);
				if (c === "bind") return D(t, e, n.slice(0, -1));
				const [u, A] = v(_);
				return p(t, e, {
					type: "APPLY",
					path: n.map((E) => E.toString()),
					argumentList: u
				}, A).then(f);
			},
			construct(R, S) {
				N(s);
				const [_, c] = v(S);
				return p(t, e, {
					type: "CONSTRUCT",
					path: n.map((u) => u.toString()),
					argumentList: _
				}, c).then(f);
			}
		});
		return it(i, t), i;
	}
	function ut(t) {
		return Array.prototype.concat.apply([], t);
	}
	function v(t) {
		const e = t.map(d);
		return [e.map((n) => n[0]), ut(e.map((n) => n[1]))];
	}
	const z = /* @__PURE__ */ new WeakMap();
	function lt(t, e) {
		return z.set(t, e), t;
	}
	function St(t) {
		return Object.assign(t, { [j]: !0 });
	}
	function d(t) {
		for (const [e, n] of Y) if (n.canHandle(t)) {
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
		}, z.get(t) || []];
	}
	function f(t) {
		switch (t.type) {
			case "HANDLER": return Y.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function p(t, e, n, a) {
		return new Promise((s) => {
			const i = Et();
			e.set(i, s), t.start && t.start(), t.postMessage(Object.assign({ id: i }, n), a);
		});
	}
	function Et() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	const _t = 2440587.5, At = 864e5, Rt = 149597870.7, ft = 648e3 / Math.PI, G = 1500, pt = G;
	G / 15;
	100 / ft;
	pt + 500;
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
	}, W = {
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
	};
	r.SUN, r.MERCURY, r.VENUS, r.EARTH, r.MARS, r.JUPITER, r.SATURN, r.URANUS, r.NEPTUNE, r.PLUTO;
	const h = W[r.EARTH]?.radiusKm ?? 6371, L = W[r.SUN]?.radiusKm ?? 696340, Ut = h / L, U = .04;
	h / U;
	U / h / (15 / Rt);
	function Tt(t) {
		return !Number.isFinite(t) || t <= 0 ? U : t / Ut * U;
	}
	function mt(t) {
		return !Number.isFinite(t) || t <= 0 ? U : Tt(t / L);
	}
	mt(L);
	const y = 149597870.69098932;
	2 * Math.PI;
	3600 * (180 / Math.PI);
	const $ = 10800 * 60;
	2 * $;
	const Nt = $ / Math.PI;
	-.17 - 5 * Math.log10(Nt);
	695700 / y;
	const C = .996647180302104;
	C * C;
	const Q = 6378.1366;
	Q / y;
	Q * C;
	1738.1 / y;
	1736 / y;
	function b(t) {
		if (!Number.isFinite(t)) throw console.trace(), `Value is not a finite number: ${t}`;
		return t;
	}
	var o;
	(function(t) {
		t.Sun = "Sun", t.Moon = "Moon", t.Mercury = "Mercury", t.Venus = "Venus", t.Earth = "Earth", t.Mars = "Mars", t.Jupiter = "Jupiter", t.Saturn = "Saturn", t.Uranus = "Uranus", t.Neptune = "Neptune", t.Pluto = "Pluto", t.SSB = "SSB", t.EMB = "EMB", t.Star1 = "Star1", t.Star2 = "Star2", t.Star3 = "Star3", t.Star4 = "Star4", t.Star5 = "Star5", t.Star6 = "Star6", t.Star7 = "Star7", t.Star8 = "Star8";
	})(o || (o = {}));
	o.Star1, o.Star2, o.Star3, o.Star4, o.Star5, o.Star6, o.Star7, o.Star8;
	var X;
	(function(t) {
		t[t.From2000 = 0] = "From2000", t[t.Into2000 = 1] = "Into2000";
	})(X || (X = {}));
	var Mt = class {
		constructor(t) {
			this.rot = t;
		}
	};
	function It(t) {
		if (!(t instanceof q)) throw `Not an instance of the Observer class: ${t}`;
		if (b(t.latitude), b(t.longitude), b(t.height), t.latitude < -90 || t.latitude > 90) throw `Latitude ${t.latitude} is out of range. Must be -90..+90.`;
		return t;
	}
	var q = class {
		constructor(t, e, n) {
			this.latitude = t, this.longitude = e, this.height = n, It(this);
		}
	};
	new Mt([
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
	var Z;
	(function(t) {
		t[t.Pericenter = 0] = "Pericenter", t[t.Apocenter = 1] = "Apocenter";
	})(Z || (Z = {}));
	var B;
	(function(t) {
		t.Penumbral = "penumbral", t.Partial = "partial", t.Annular = "annular", t.Total = "total";
	})(B || (B = {}));
	var tt;
	(function(t) {
		t[t.Invalid = 0] = "Invalid", t[t.Ascending = 1] = "Ascending", t[t.Descending = -1] = "Descending";
	})(tt || (tt = {}));
	new q(40.7128, -74.006, 10);
	r.SUN, o.Sun, r.MERCURY, o.Mercury, r.VENUS, o.Venus, r.EARTH, o.Earth, r.MARS, o.Mars, r.JUPITER, o.Jupiter, r.SATURN, o.Saturn, r.URANUS, o.Uranus, r.NEPTUNE, o.Neptune, r.PLUTO, o.Pluto, r.MOON, o.Moon;
	2 * Math.PI;
	Math.PI / (180 * 3600);
	const dt = 86400;
	function yt(t) {
		return t.type === "setRate" && (!Number.isFinite(t.speed) || t.speed < 0) ? {
			type: "setRate",
			speed: 0
		} : t;
	}
	function Ot(t) {
		return t / At + _t;
	}
	function w(t) {
		return {
			protocolVersion: 1,
			jd: t?.jd ?? 2460400.5,
			playing: t?.playing ?? !1,
			speed: t?.speed ?? 86400
		};
	}
	function et(t, e) {
		const n = yt(e);
		switch (n.type) {
			case "init": {
				const a = w({
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
				const a = {
					...t,
					jd: n.jd
				};
				return {
					state: a,
					events: [{
						type: "tick",
						jd: a.jd
					}, {
						type: "timeState",
						state: a
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
				const s = t.jd + t.speed * a / dt, i = {
					...t,
					jd: s
				};
				return {
					state: i,
					events: [{
						type: "tick",
						jd: s
					}, {
						type: "timeState",
						state: i
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
	let l = w({ jd: Ot(Date.now()) }), O = null, k = null;
	function H(t) {
		k?.(t);
	}
	function V() {
		O != null && (clearInterval(O), O = null);
	}
	function gt() {
		V(), O = setInterval(() => {
			const { state: t, events: e } = et(l, {
				type: "step",
				deltaSeconds: .5
			});
			l = t, H({
				type: "tick",
				state: l,
				events: e
			});
		}, 500);
	}
	function x() {
		l.playing ? gt() : V();
	}
	function Pt(t) {
		if (t.type === "init") {
			l = w({
				jd: t.jd ?? l.jd,
				playing: t.playing ?? l.playing,
				speed: t.speed ?? l.speed
			}), x(), H({
				type: "tick",
				state: l,
				events: []
			});
			return;
		}
		if (t.type === "time") {
			const { state: e, events: n } = et(l, t.cmd);
			l = e, H({
				type: "tick",
				state: l,
				events: n
			}), x();
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
			k = t, x();
		},
		unsubscribe() {
			k = null, V();
		}
	});
})();
