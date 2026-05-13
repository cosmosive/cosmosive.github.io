(function() {
	const F = Symbol("Comlink.proxy"), re = Symbol("Comlink.endpoint"), se = Symbol("Comlink.releaseProxy"), O = Symbol("Comlink.finalizer"), f = Symbol("Comlink.thrown"), B = (e) => typeof e == "object" && e !== null || typeof e == "function", G = new Map([["proxy", {
		canHandle: (e) => B(e) && e[F],
		serialize(e) {
			const { port1: t, port2: n } = new MessageChannel();
			return C(e, t), [n, [n]];
		},
		deserialize(e) {
			return e.start(), ie(e);
		}
	}], ["throw", {
		canHandle: (e) => B(e) && f in e,
		serialize({ value: e }) {
			let t;
			return e instanceof Error ? t = {
				isError: !0,
				value: {
					message: e.message,
					name: e.name,
					stack: e.stack
				}
			} : t = {
				isError: !1,
				value: e
			}, [t, []];
		},
		deserialize(e) {
			throw e.isError ? Object.assign(new Error(e.value.message), e.value) : e.value;
		}
	}]]);
	function oe(e, t) {
		for (const n of e) if (t === n || n === "*" || n instanceof RegExp && n.test(t)) return !0;
		return !1;
	}
	function C(e, t = globalThis, n = ["*"]) {
		t.addEventListener("message", function o(s) {
			if (!s || !s.data) return;
			if (!oe(n, s.origin)) {
				console.warn(`Invalid origin '${s.origin}' for comlink proxy`);
				return;
			}
			const { id: a, type: u, path: i } = Object.assign({ path: [] }, s.data), d = (s.data.argumentList || []).map(y);
			let c;
			try {
				const l = i.slice(0, -1).reduce((S, R) => S[R], e), p = i.reduce((S, R) => S[R], e);
				switch (u) {
					case "GET":
						c = p;
						break;
					case "SET":
						l[i.slice(-1)[0]] = y(s.data.value), c = !0;
						break;
					case "APPLY":
						c = p.apply(l, d);
						break;
					case "CONSTRUCT":
						c = de(new p(...d));
						break;
					case "ENDPOINT":
						{
							const { port1: S, port2: R } = new MessageChannel();
							C(e, R), c = _e(S, [S]);
						}
						break;
					case "RELEASE":
						c = void 0;
						break;
					default: return;
				}
			} catch (l) {
				c = {
					value: l,
					[f]: 0
				};
			}
			Promise.resolve(c).catch((l) => ({
				value: l,
				[f]: 0
			})).then((l) => {
				const [p, S] = M(l);
				t.postMessage(Object.assign(Object.assign({}, p), { id: a }), S), u === "RELEASE" && (t.removeEventListener("message", o), V(t), O in e && typeof e[O] == "function" && e[O]());
			}).catch((l) => {
				const [p, S] = M({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[f]: 0
				});
				t.postMessage(Object.assign(Object.assign({}, p), { id: a }), S);
			});
		}), t.start && t.start();
	}
	function ae(e) {
		return e.constructor.name === "MessagePort";
	}
	function V(e) {
		ae(e) && e.close();
	}
	function ie(e, t) {
		const n = /* @__PURE__ */ new Map();
		return e.addEventListener("message", function(s) {
			const { data: a } = s;
			if (!a || !a.id) return;
			const u = n.get(a.id);
			if (u) try {
				u(a);
			} finally {
				n.delete(a.id);
			}
		}), b(e, n, [], t);
	}
	function I(e) {
		if (e) throw new Error("Proxy has been released and is not useable");
	}
	function v(e) {
		return m(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			V(e);
		});
	}
	const T = /* @__PURE__ */ new WeakMap(), g = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
		const t = (T.get(e) || 0) - 1;
		T.set(e, t), t === 0 && v(e);
	});
	function ce(e, t) {
		const n = (T.get(t) || 0) + 1;
		T.set(t, n), g && g.register(e, t, e);
	}
	function ue(e) {
		g && g.unregister(e);
	}
	function b(e, t, n = [], o = function() {}) {
		let s = !1;
		const a = new Proxy(o, {
			get(u, i) {
				if (I(s), i === se) return () => {
					ue(a), v(e), t.clear(), s = !0;
				};
				if (i === "then") {
					if (n.length === 0) return { then: () => a };
					const d = m(e, t, {
						type: "GET",
						path: n.map((c) => c.toString())
					}).then(y);
					return d.then.bind(d);
				}
				return b(e, t, [...n, i]);
			},
			set(u, i, d) {
				I(s);
				const [c, l] = M(d);
				return m(e, t, {
					type: "SET",
					path: [...n, i].map((p) => p.toString()),
					value: c
				}, l).then(y);
			},
			apply(u, i, d) {
				I(s);
				const c = n[n.length - 1];
				if (c === re) return m(e, t, { type: "ENDPOINT" }).then(y);
				if (c === "bind") return b(e, t, n.slice(0, -1));
				const [l, p] = W(d);
				return m(e, t, {
					type: "APPLY",
					path: n.map((S) => S.toString()),
					argumentList: l
				}, p).then(y);
			},
			construct(u, i) {
				I(s);
				const [d, c] = W(i);
				return m(e, t, {
					type: "CONSTRUCT",
					path: n.map((l) => l.toString()),
					argumentList: d
				}, c).then(y);
			}
		});
		return ce(a, e), a;
	}
	function le(e) {
		return Array.prototype.concat.apply([], e);
	}
	function W(e) {
		const t = e.map(M);
		return [t.map((n) => n[0]), le(t.map((n) => n[1]))];
	}
	const J = /* @__PURE__ */ new WeakMap();
	function _e(e, t) {
		return J.set(e, t), e;
	}
	function de(e) {
		return Object.assign(e, { [F]: !0 });
	}
	function M(e) {
		for (const [t, n] of G) if (n.canHandle(e)) {
			const [o, s] = n.serialize(e);
			return [{
				type: "HANDLER",
				name: t,
				value: o
			}, s];
		}
		return [{
			type: "RAW",
			value: e
		}, J.get(e) || []];
	}
	function y(e) {
		switch (e.type) {
			case "HANDLER": return G.get(e.name).deserialize(e.value);
			case "RAW": return e.value;
		}
	}
	function m(e, t, n, o) {
		return new Promise((s) => {
			const a = Ee();
			t.set(a, s), e.start && e.start(), e.postMessage(Object.assign({ id: a }, n), o);
		});
	}
	function Ee() {
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
	}, Se = 384399 / 149597870.7, pe = {
		[r.SUN]: {
			name: "Sun",
			type: "star",
			color: "#f5e042",
			radiusKm: 696340,
			kind: "star",
			textureResolution: 512,
			massKg: 198847e25
		},
		[r.MERCURY]: {
			name: "Mercury",
			type: "planet",
			color: "#9c8a78",
			radiusKm: 2439.7,
			kind: "barren",
			textureResolution: 192,
			massKg: 33011e19,
			semiMajorAxisAu: .387098,
			parentBodyId: r.SUN
		},
		[r.VENUS]: {
			name: "Venus",
			type: "planet",
			color: "#f0e3a0",
			radiusKm: 6051.8,
			kind: "molten",
			textureResolution: 224,
			massKg: 48675e20,
			semiMajorAxisAu: .723332,
			parentBodyId: r.SUN
		},
		[r.EARTH]: {
			name: "Earth",
			type: "planet",
			color: "#4a90d9",
			radiusKm: 6371,
			kind: "oceanic",
			textureResolution: 224,
			features: { axialSpin: "eop" },
			massKg: 597237e19,
			semiMajorAxisAu: 1.0000001,
			parentBodyId: r.SUN
		},
		[r.MARS]: {
			name: "Mars",
			type: "planet",
			color: "#c1440e",
			radiusKm: 3389.5,
			kind: "desert",
			textureResolution: 192,
			massKg: 64171e19,
			semiMajorAxisAu: 1.523679,
			parentBodyId: r.SUN
		},
		[r.JUPITER]: {
			name: "Jupiter",
			type: "planet",
			color: "#c8985a",
			radiusKm: 69911,
			kind: "gasGiant",
			textureResolution: 256,
			geometricAlbedo: .52,
			massKg: 18982e23,
			semiMajorAxisAu: 5.2044,
			parentBodyId: r.SUN
		},
		[r.SATURN]: {
			name: "Saturn",
			type: "planet",
			color: "#e8c673",
			radiusKm: 58232,
			kind: "gasGiant",
			textureResolution: 256,
			geometricAlbedo: .47,
			features: { rings: !0 },
			massKg: 56834e22,
			semiMajorAxisAu: 9.5826,
			parentBodyId: r.SUN
		},
		[r.URANUS]: {
			name: "Uranus",
			type: "planet",
			color: "#a3d6e0",
			radiusKm: 25362,
			kind: "iceGiant",
			textureResolution: 224,
			geometricAlbedo: .51,
			massKg: 868103e20,
			semiMajorAxisAu: 19.2184,
			parentBodyId: r.SUN
		},
		[r.NEPTUNE]: {
			name: "Neptune",
			type: "planet",
			color: "#4166f5",
			radiusKm: 24622,
			kind: "iceGiant",
			textureResolution: 224,
			geometricAlbedo: .41,
			massKg: 102413e21,
			semiMajorAxisAu: 30.110387,
			parentBodyId: r.SUN
		},
		[r.PLUTO]: {
			name: "Pluto",
			type: "dwarf_planet",
			color: "#a26847",
			radiusKm: 1188.3,
			kind: "barren",
			textureResolution: 192,
			massKg: 13029e18,
			semiMajorAxisAu: 39.482,
			parentBodyId: r.SUN
		},
		[r.MOON]: {
			name: "Moon",
			type: "moon",
			color: "#cccccc",
			radiusKm: 1737,
			kind: "barren",
			textureResolution: 192,
			massKg: 7342e19,
			semiMajorAxisAu: Se,
			parentBodyId: r.EARTH
		}
	}, N = 149597870.7, D = 648e3 / Math.PI;
	D * N / 3.2615637771694;
	const z = 1e3 / N, K = N * z;
	100 * K;
	100 / D;
	const X = 3.2615637771694, x = K * D;
	25 * x;
	function $(e) {
		return !Number.isFinite(e) || e < 0 ? 0 : e * x;
	}
	const ye = 5e4, me = 2e3, Ae = ye / X, Re = me / X;
	$(Ae);
	$(Re);
	25 * x;
	const _ = 299792.458, P = .001, U = 1e3;
	1 * P, 10 * P, 100 * P, 1 * U, 10 * U, 100 * U, .01 * _, .1 * _, .5 * _, 1 * _, 10 * _, 100 * _, 1e3 * _, 1e4 * _, 1e5 * _, 1e6 * _, 1e7 * _, 1e8 * _, 1e9 * _;
	1 * P;
	1e9 * _;
	1 * U;
	const j = 1721545, h = 3181545;
	function fe(e) {
		return {
			name: e.name,
			type: e.type,
			color: e.color,
			radiusKm: e.radiusKm,
			massKg: e.massKg,
			semiMajorAxisAu: e.semiMajorAxisAu,
			parentBodyId: e.parentBodyId
		};
	}
	const q = Object.fromEntries(Object.entries(pe).map(([e, t]) => [e, fe(t)]));
	r.SUN, r.MERCURY, r.VENUS, r.EARTH, r.MARS, r.JUPITER, r.SATURN, r.URANUS, r.NEPTUNE, r.PLUTO, r.MOON;
	23.4392911 * Math.PI / 180;
	const Q = q[r.EARTH]?.radiusKm ?? 6371, Z = q[r.SUN]?.radiusKm ?? 696340;
	Q / Z;
	function ee(e) {
		return !Number.isFinite(e) || e <= 0 ? 0 : e * z;
	}
	ee(Q);
	ee(Z);
	const Ie = 26051301, Te = 86400;
	function te(e) {
		return e.type === "init" ? {
			type: "init",
			...e.jd !== void 0 && Number.isFinite(e.jd) ? { jd: e.jd } : {},
			...e.playing !== void 0 ? { playing: e.playing } : {},
			...e.speed !== void 0 && Number.isFinite(e.speed) && e.speed >= 0 ? { speed: e.speed } : {}
		} : e.type === "setRate" && (!Number.isFinite(e.speed) || e.speed < 0) ? {
			type: "setRate",
			speed: 0
		} : e;
	}
	const ge = 2451545;
	function k(e) {
		return {
			protocolVersion: Ie,
			jd: e?.jd ?? ge,
			playing: e?.playing ?? !1,
			speed: e?.speed ?? 86400
		};
	}
	function ne(e, t) {
		const n = te(t);
		switch (n.type) {
			case "init": {
				const o = k({
					jd: n.jd ?? e.jd,
					playing: n.playing ?? e.playing,
					speed: n.speed ?? e.speed
				});
				return {
					state: o,
					events: [{
						type: "timeState",
						state: o
					}]
				};
			}
			case "seek": {
				if (!Number.isFinite(n.jd)) return {
					state: e,
					events: [{
						type: "error",
						code: "INVALID_JD",
						message: "seek.jd must be finite"
					}]
				};
				const o = n.jd;
				let s = o;
				(s < 1721545 || s > 3181545) && (console.warn(`[kernel/seek] JD ${s} outside supported range [${j}, ${h}] (years 0-4000 AD); clamping.`), s = Math.max(j, Math.min(h, s)));
				const a = {
					...e,
					jd: s
				}, u = [{
					type: "tick",
					jd: a.jd
				}, {
					type: "timeState",
					state: a
				}];
				if (o < 1721545 || o > 3181545) {
					const i = e.jd > 1721545 && e.jd < 3181545, d = e.jd === 1721545 && o < 1721545;
					(i || d) && u.push({
						type: "jdBoundaryReached",
						boundary: o > 3181545 ? "max" : "min"
					});
				}
				return {
					state: a,
					events: u
				};
			}
			case "step": {
				if (!e.playing) return {
					state: e,
					events: []
				};
				const o = n.deltaSeconds;
				if (!Number.isFinite(o)) return {
					state: e,
					events: [{
						type: "error",
						code: "INVALID_DELTA",
						message: "step.deltaSeconds must be finite"
					}]
				};
				const s = e.jd + e.speed * o / Te, a = Math.max(j, Math.min(h, s)), u = {
					...e,
					jd: a
				}, i = [{
					type: "tick",
					jd: a
				}, {
					type: "timeState",
					state: u
				}];
				return s > 3181545 && e.jd < 3181545 ? i.push({
					type: "jdBoundaryReached",
					boundary: "max"
				}) : s < 1721545 && e.jd > 1721545 && i.push({
					type: "jdBoundaryReached",
					boundary: "min"
				}), {
					state: u,
					events: i
				};
			}
			case "setPlaying": {
				const o = {
					...e,
					playing: n.playing
				};
				return {
					state: o,
					events: [{
						type: "timeState",
						state: o
					}]
				};
			}
			case "setRate": {
				const o = {
					...e,
					speed: n.speed
				};
				return {
					state: o,
					events: [{
						type: "timeState",
						state: o
					}]
				};
			}
			default: return {
				state: e,
				events: []
			};
		}
	}
	N / K;
	let E = k(), L = null, A = null;
	function w(e) {
		A?.(e);
	}
	function H() {
		L != null && (clearInterval(L), L = null);
	}
	function Me() {
		H(), L = setInterval(() => {
			const { state: e, events: t } = ne(E, {
				type: "step",
				deltaSeconds: .5
			});
			E = e, w({
				type: "workerTick",
				state: E,
				events: t
			});
		}, 500);
	}
	function Y() {
		E.playing ? Me() : H();
	}
	function Ne(e) {
		if (e.type === "init") {
			const t = te({
				type: "init",
				jd: e.jd,
				playing: e.playing,
				speed: e.speed
			});
			if (t.type !== "init") return;
			E = k({
				jd: t.jd ?? E.jd,
				playing: t.playing ?? E.playing,
				speed: t.speed ?? E.speed
			}), Y(), w({
				type: "workerTick",
				state: E,
				events: []
			});
			return;
		}
		if (e.type === "time") {
			const { state: t, events: n } = ne(E, e.cmd);
			E = t, w({
				type: "workerTick",
				state: E,
				events: n
			}), Y();
		}
	}
	C({
		postInbound(e) {
			try {
				Ne(e);
			} catch (t) {
				console.error(t);
			}
		},
		subscribe(e) {
			A != null && A !== e && console.warn("[simulationWorker] replacing existing outbound subscriber (double subscribe)"), A = e, Y();
		},
		unsubscribe() {
			A = null, H();
		}
	});
})();
