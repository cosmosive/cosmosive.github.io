(function() {
	const H = Symbol("Comlink.proxy"), Z = Symbol("Comlink.endpoint"), B = Symbol("Comlink.releaseProxy"), O = Symbol("Comlink.finalizer"), m = Symbol("Comlink.thrown"), x = (t) => typeof t == "object" && t !== null || typeof t == "function", V = new Map([["proxy", {
		canHandle: (t) => x(t) && t[H],
		serialize(t) {
			const { port1: e, port2: n } = new MessageChannel();
			return g(t, e), [n, [n]];
		},
		deserialize(t) {
			return t.start(), nt(t);
		}
	}], ["throw", {
		canHandle: (t) => x(t) && m in t,
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
	function tt(t, e) {
		for (const n of t) if (e === n || n === "*" || n instanceof RegExp && n.test(e)) return !0;
		return !1;
	}
	function g(t, e = globalThis, n = ["*"]) {
		e.addEventListener("message", function a(s) {
			if (!s || !s.data) return;
			if (!tt(n, s.origin)) {
				console.warn(`Invalid origin '${s.origin}' for comlink proxy`);
				return;
			}
			const { id: i, type: R, path: S } = Object.assign({ path: [] }, s.data), A = (s.data.argumentList || []).map(f);
			let c;
			try {
				const u = S.slice(0, -1).reduce((E, U) => E[U], t), _ = S.reduce((E, U) => E[U], t);
				switch (R) {
					case "GET":
						c = _;
						break;
					case "SET":
						u[S.slice(-1)[0]] = f(s.data.value), c = !0;
						break;
					case "APPLY":
						c = _.apply(u, A);
						break;
					case "CONSTRUCT":
						c = it(new _(...A));
						break;
					case "ENDPOINT":
						{
							const { port1: E, port2: U } = new MessageChannel();
							g(t, U), c = ot(E, [E]);
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
				const [_, E] = d(u);
				e.postMessage(Object.assign(Object.assign({}, _), { id: i }), E), R === "RELEASE" && (e.removeEventListener("message", a), j(e), O in t && typeof t[O] == "function" && t[O]());
			}).catch((u) => {
				const [_, E] = d({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[m]: 0
				});
				e.postMessage(Object.assign(Object.assign({}, _), { id: i }), E);
			});
		}), e.start && e.start();
	}
	function et(t) {
		return t.constructor.name === "MessagePort";
	}
	function j(t) {
		et(t) && t.close();
	}
	function nt(t, e) {
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
		}), P(t, n, [], e);
	}
	function T(t) {
		if (t) throw new Error("Proxy has been released and is not useable");
	}
	function F(t) {
		return p(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			j(t);
		});
	}
	const M = /* @__PURE__ */ new WeakMap(), N = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const e = (M.get(t) || 0) - 1;
		M.set(t, e), e === 0 && F(t);
	});
	function rt(t, e) {
		const n = (M.get(e) || 0) + 1;
		M.set(e, n), N && N.register(t, e, t);
	}
	function at(t) {
		N && N.unregister(t);
	}
	function P(t, e, n = [], a = function() {}) {
		let s = !1;
		const i = new Proxy(a, {
			get(R, S) {
				if (T(s), S === B) return () => {
					at(i), F(t), e.clear(), s = !0;
				};
				if (S === "then") {
					if (n.length === 0) return { then: () => i };
					const A = p(t, e, {
						type: "GET",
						path: n.map((c) => c.toString())
					}).then(f);
					return A.then.bind(A);
				}
				return P(t, e, [...n, S]);
			},
			set(R, S, A) {
				T(s);
				const [c, u] = d(A);
				return p(t, e, {
					type: "SET",
					path: [...n, S].map((_) => _.toString()),
					value: c
				}, u).then(f);
			},
			apply(R, S, A) {
				T(s);
				const c = n[n.length - 1];
				if (c === Z) return p(t, e, { type: "ENDPOINT" }).then(f);
				if (c === "bind") return P(t, e, n.slice(0, -1));
				const [u, _] = Y(A);
				return p(t, e, {
					type: "APPLY",
					path: n.map((E) => E.toString()),
					argumentList: u
				}, _).then(f);
			},
			construct(R, S) {
				T(s);
				const [A, c] = Y(S);
				return p(t, e, {
					type: "CONSTRUCT",
					path: n.map((u) => u.toString()),
					argumentList: A
				}, c).then(f);
			}
		});
		return rt(i, t), i;
	}
	function st(t) {
		return Array.prototype.concat.apply([], t);
	}
	function Y(t) {
		const e = t.map(d);
		return [e.map((n) => n[0]), st(e.map((n) => n[1]))];
	}
	const K = /* @__PURE__ */ new WeakMap();
	function ot(t, e) {
		return K.set(t, e), t;
	}
	function it(t) {
		return Object.assign(t, { [H]: !0 });
	}
	function d(t) {
		for (const [e, n] of V) if (n.canHandle(t)) {
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
		}, K.get(t) || []];
	}
	function f(t) {
		switch (t.type) {
			case "HANDLER": return V.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function p(t, e, n, a) {
		return new Promise((s) => {
			const i = ct();
			e.set(i, s), t.start && t.start(), t.postMessage(Object.assign({ id: i }, n), a);
		});
	}
	function ct() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	const ut = 2440587.5, lt = 864e5, St = 648e3 / Math.PI, J = 1500, Et = J;
	J / 15;
	100 / St;
	Et + 500;
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
	6371 / (At[r.SUN]?.radiusKm ?? 696340);
	const y = 149597870.69098932;
	2 * Math.PI;
	3600 * (180 / Math.PI);
	const v = 10800 * 60;
	2 * v;
	const _t = v / Math.PI;
	-.17 - 5 * Math.log10(_t);
	695700 / y;
	const h = .996647180302104;
	h * h;
	const z = 6378.1366;
	z / y;
	z * h;
	1738.1 / y;
	1736 / y;
	function D(t) {
		if (!Number.isFinite(t)) throw console.trace(), `Value is not a finite number: ${t}`;
		return t;
	}
	var o;
	(function(t) {
		t.Sun = "Sun", t.Moon = "Moon", t.Mercury = "Mercury", t.Venus = "Venus", t.Earth = "Earth", t.Mars = "Mars", t.Jupiter = "Jupiter", t.Saturn = "Saturn", t.Uranus = "Uranus", t.Neptune = "Neptune", t.Pluto = "Pluto", t.SSB = "SSB", t.EMB = "EMB", t.Star1 = "Star1", t.Star2 = "Star2", t.Star3 = "Star3", t.Star4 = "Star4", t.Star5 = "Star5", t.Star6 = "Star6", t.Star7 = "Star7", t.Star8 = "Star8";
	})(o || (o = {}));
	o.Star1, o.Star2, o.Star3, o.Star4, o.Star5, o.Star6, o.Star7, o.Star8;
	var G;
	(function(t) {
		t[t.From2000 = 0] = "From2000", t[t.Into2000 = 1] = "Into2000";
	})(G || (G = {}));
	var Rt = class {
		constructor(t) {
			this.rot = t;
		}
	};
	function ft(t) {
		if (!(t instanceof W)) throw `Not an instance of the Observer class: ${t}`;
		if (D(t.latitude), D(t.longitude), D(t.height), t.latitude < -90 || t.latitude > 90) throw `Latitude ${t.latitude} is out of range. Must be -90..+90.`;
		return t;
	}
	var W = class {
		constructor(t, e, n) {
			this.latitude = t, this.longitude = e, this.height = n, ft(this);
		}
	};
	new Rt([
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
	var $;
	(function(t) {
		t[t.Pericenter = 0] = "Pericenter", t[t.Apocenter = 1] = "Apocenter";
	})($ || ($ = {}));
	var Q;
	(function(t) {
		t.Penumbral = "penumbral", t.Partial = "partial", t.Annular = "annular", t.Total = "total";
	})(Q || (Q = {}));
	var X;
	(function(t) {
		t[t.Invalid = 0] = "Invalid", t[t.Ascending = 1] = "Ascending", t[t.Descending = -1] = "Descending";
	})(X || (X = {}));
	new W(40.7128, -74.006, 10);
	r.SUN, o.Sun, r.MERCURY, o.Mercury, r.VENUS, o.Venus, r.EARTH, o.Earth, r.MARS, o.Mars, r.JUPITER, o.Jupiter, r.SATURN, o.Saturn, r.URANUS, o.Uranus, r.NEPTUNE, o.Neptune, r.PLUTO, o.Pluto, r.MOON, o.Moon;
	2 * Math.PI;
	Math.PI / (180 * 3600);
	const pt = 86400;
	function Ut(t) {
		return t.type === "setRate" && (!Number.isFinite(t.speed) || t.speed < 0) ? {
			type: "setRate",
			speed: 0
		} : t;
	}
	function mt(t) {
		return t / lt + ut;
	}
	function L(t) {
		return {
			protocolVersion: 1,
			jd: t?.jd ?? 2460400.5,
			playing: t?.playing ?? !1,
			speed: t?.speed ?? 86400
		};
	}
	function q(t, e) {
		const n = Ut(e);
		switch (n.type) {
			case "init": {
				const a = L({
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
				const s = t.jd + t.speed * a / pt, i = {
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
	let l = L({ jd: mt(Date.now()) }), I = null, C = null;
	function b(t) {
		C?.(t);
	}
	function w() {
		I != null && (clearInterval(I), I = null);
	}
	function Tt() {
		w(), I = setInterval(() => {
			const { state: t, events: e } = q(l, {
				type: "step",
				deltaSeconds: .5
			});
			l = t, b({
				type: "tick",
				state: l,
				events: e
			});
		}, 500);
	}
	function k() {
		l.playing ? Tt() : w();
	}
	function Mt(t) {
		if (t.type === "init") {
			l = L({
				jd: t.jd ?? l.jd,
				playing: t.playing ?? l.playing,
				speed: t.speed ?? l.speed
			}), k(), b({
				type: "tick",
				state: l,
				events: []
			});
			return;
		}
		if (t.type === "time") {
			const { state: e, events: n } = q(l, t.cmd);
			l = e, b({
				type: "tick",
				state: l,
				events: n
			}), k();
		}
	}
	g({
		postInbound(t) {
			try {
				Mt(t);
			} catch (e) {
				console.error(e);
			}
		},
		subscribe(t) {
			C = t, k();
		},
		unsubscribe() {
			C = null, w();
		}
	});
})();
