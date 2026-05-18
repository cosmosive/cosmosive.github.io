(function() {
	const G = Symbol("Comlink.proxy"), me = Symbol("Comlink.endpoint"), Se = Symbol("Comlink.releaseProxy"), D = Symbol("Comlink.finalizer"), T = Symbol("Comlink.thrown"), X = (e) => typeof e == "object" && e !== null || typeof e == "function", z = new Map([["proxy", {
		canHandle: (e) => X(e) && e[G],
		serialize(e) {
			const { port1: n, port2: r } = new MessageChannel();
			return K(e, n), [r, [r]];
		},
		deserialize(e) {
			return e.start(), Re(e);
		}
	}], ["throw", {
		canHandle: (e) => X(e) && T in e,
		serialize({ value: e }) {
			let n;
			return e instanceof Error ? n = {
				isError: !0,
				value: {
					message: e.message,
					name: e.name,
					stack: e.stack
				}
			} : n = {
				isError: !1,
				value: e
			}, [n, []];
		},
		deserialize(e) {
			throw e.isError ? Object.assign(new Error(e.value.message), e.value) : e.value;
		}
	}]]);
	function Ee(e, n) {
		for (const r of e) if (n === r || r === "*" || r instanceof RegExp && r.test(n)) return !0;
		return !1;
	}
	function K(e, n = globalThis, r = ["*"]) {
		n.addEventListener("message", function o(s) {
			if (!s || !s.data) return;
			if (!Ee(r, s.origin)) {
				console.warn(`Invalid origin '${s.origin}' for comlink proxy`);
				return;
			}
			const { id: i, type: l, path: c } = Object.assign({ path: [] }, s.data), A = (s.data.argumentList || []).map(I);
			let u;
			try {
				const d = c.slice(0, -1).reduce((m, M) => m[M], e), S = c.reduce((m, M) => m[M], e);
				switch (l) {
					case "GET":
						u = S;
						break;
					case "SET":
						d[c.slice(-1)[0]] = I(s.data.value), u = !0;
						break;
					case "APPLY":
						u = S.apply(d, A);
						break;
					case "CONSTRUCT":
						u = fe(new S(...A));
						break;
					case "ENDPOINT":
						{
							const { port1: m, port2: M } = new MessageChannel();
							K(e, M), u = Te(m, [m]);
						}
						break;
					case "RELEASE":
						u = void 0;
						break;
					default: return;
				}
			} catch (d) {
				u = {
					value: d,
					[T]: 0
				};
			}
			Promise.resolve(u).catch((d) => ({
				value: d,
				[T]: 0
			})).then((d) => {
				const [S, m] = g(d);
				n.postMessage(Object.assign(Object.assign({}, S), { id: i }), m), l === "RELEASE" && (n.removeEventListener("message", o), V(n), D in e && typeof e[D] == "function" && e[D]());
			}).catch((d) => {
				const [S, m] = g({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[T]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, S), { id: i }), m);
			});
		}), n.start && n.start();
	}
	function Ie(e) {
		return e.constructor.name === "MessagePort";
	}
	function V(e) {
		Ie(e) && e.close();
	}
	function Re(e, n) {
		const r = /* @__PURE__ */ new Map();
		return e.addEventListener("message", function(s) {
			const { data: i } = s;
			if (!i || !i.id) return;
			const l = r.get(i.id);
			if (l) try {
				l(i);
			} finally {
				r.delete(i.id);
			}
		}), L(e, r, [], n);
	}
	function f(e) {
		if (e) throw new Error("Proxy has been released and is not useable");
	}
	function W(e) {
		return R(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			V(e);
		});
	}
	const b = /* @__PURE__ */ new WeakMap(), U = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
		const n = (b.get(e) || 0) - 1;
		b.set(e, n), n === 0 && W(e);
	});
	function pe(e, n) {
		const r = (b.get(n) || 0) + 1;
		b.set(n, r), U && U.register(e, n, e);
	}
	function ye(e) {
		U && U.unregister(e);
	}
	function L(e, n, r = [], o = function() {}) {
		let s = !1;
		const i = new Proxy(o, {
			get(l, c) {
				if (f(s), c === Se) return () => {
					ye(i), W(e), n.clear(), s = !0;
				};
				if (c === "then") {
					if (r.length === 0) return { then: () => i };
					const A = R(e, n, {
						type: "GET",
						path: r.map((u) => u.toString())
					}).then(I);
					return A.then.bind(A);
				}
				return L(e, n, [...r, c]);
			},
			set(l, c, A) {
				f(s);
				const [u, d] = g(A);
				return R(e, n, {
					type: "SET",
					path: [...r, c].map((S) => S.toString()),
					value: u
				}, d).then(I);
			},
			apply(l, c, A) {
				f(s);
				const u = r[r.length - 1];
				if (u === me) return R(e, n, { type: "ENDPOINT" }).then(I);
				if (u === "bind") return L(e, n, r.slice(0, -1));
				const [d, S] = $(A);
				return R(e, n, {
					type: "APPLY",
					path: r.map((m) => m.toString()),
					argumentList: d
				}, S).then(I);
			},
			construct(l, c) {
				f(s);
				const [A, u] = $(c);
				return R(e, n, {
					type: "CONSTRUCT",
					path: r.map((d) => d.toString()),
					argumentList: A
				}, u).then(I);
			}
		});
		return pe(i, e), i;
	}
	function Me(e) {
		return Array.prototype.concat.apply([], e);
	}
	function $(e) {
		const n = e.map(g);
		return [n.map((r) => r[0]), Me(n.map((r) => r[1]))];
	}
	const q = /* @__PURE__ */ new WeakMap();
	function Te(e, n) {
		return q.set(e, n), e;
	}
	function fe(e) {
		return Object.assign(e, { [G]: !0 });
	}
	function g(e) {
		for (const [n, r] of z) if (r.canHandle(e)) {
			const [o, s] = r.serialize(e);
			return [{
				type: "HANDLER",
				name: n,
				value: o
			}, s];
		}
		return [{
			type: "RAW",
			value: e
		}, q.get(e) || []];
	}
	function I(e) {
		switch (e.type) {
			case "HANDLER": return z.get(e.name).deserialize(e.value);
			case "RAW": return e.value;
		}
	}
	function R(e, n, r, o) {
		return new Promise((s) => {
			const i = be();
			n.set(i, s), e.start && e.start(), e.postMessage(Object.assign({ id: i }, r), o);
		});
	}
	function be() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	2 * Math.PI;
	Math.PI / 180;
	180 / Math.PI;
	const h = 86400, Ue = 365.25;
	h * 1e3;
	const E = 299792.458;
	E * 60;
	E * 3600;
	E * h;
	const Q = E * Ue * h, a = 149597870.7, Z = 648e3 / Math.PI, ge = Z * a;
	a / Q;
	const Ne = ge / Q;
	Object.freeze({
		x: 0,
		y: 0,
		z: 0
	});
	Object.freeze({
		x: 1,
		y: 0,
		z: 0
	});
	Object.freeze({
		x: 0,
		y: 1,
		z: 0
	});
	Object.freeze({
		x: 0,
		y: 0,
		z: 1
	});
	Object.freeze({
		x: 0,
		y: 0,
		z: 0,
		w: 1
	});
	typeof TextEncoder < "u" && new TextEncoder();
	var N = (e, n, r) => Object.defineProperty(e, n, {
		value: r,
		enumerable: !1,
		writable: !0,
		configurable: !0
	}), Oe = Symbol.for("bitecs-relation"), xe = Symbol.for("bitecs-pairTarget"), Pe = Symbol.for("bitecs-isPairComponent"), p = Symbol.for("bitecs-relationData"), ee = () => {
		let e = {
			pairsMap: /* @__PURE__ */ new Map(),
			initStore: void 0,
			exclusiveRelation: !1,
			autoRemoveSubject: !1,
			onTargetRemoved: void 0
		}, n = (r) => {
			if (r === void 0) throw Error("Relation target is undefined");
			let o = r === "*" ? he : r;
			if (!e.pairsMap.has(o)) {
				let s = e.initStore ? e.initStore(r) : {};
				N(s, Oe, n), N(s, xe, o), N(s, Pe, !0), e.pairsMap.set(o, s);
			}
			return e.pairsMap.get(o);
		};
		return N(n, p, e), n;
	}, De = Symbol.for("bitecs-wildcard");
	function Ke() {
		let e = ee();
		return Object.defineProperty(e, De, {
			value: !0,
			enumerable: !1,
			writable: !1,
			configurable: !1
		}), e;
	}
	function Le() {
		let e = Symbol.for("bitecs-global-wildcard");
		return globalThis[e] || (globalThis[e] = Ke()), globalThis[e];
	}
	var he = Le();
	function je() {
		return ee();
	}
	function Ce() {
		let e = Symbol.for("bitecs-global-isa");
		return globalThis[e] || (globalThis[e] = je()), globalThis[e];
	}
	Ce();
	const t = {
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
		MOON: "301",
		IO: "501",
		EUROPA: "502",
		GANYMEDE: "503",
		CALLISTO: "504",
		PHOBOS: "401",
		DEIMOS: "402",
		MIMAS: "601",
		ENCELADUS: "602",
		TETHYS: "603",
		DIONE: "604",
		RHEA: "605",
		TITAN: "606",
		IAPETUS: "608",
		MIRANDA: "705",
		ARIEL: "701",
		UMBRIEL: "702",
		TITANIA: "703",
		OBERON: "704",
		TRITON: "801"
	}, Ge = 384399 / a, Xe = 421800 / a, ze = 671034 / a, Ve = 1070400 / a, We = 1882700 / a, $e = 9376 / a, qe = 23463 / a, Qe = 185540 / a, Ze = 237948 / a, et = 294619 / a, tt = 377396 / a, nt = 527108 / a, rt = 1221870 / a, ot = 3560820 / a, st = 129390 / a, at = 190900 / a, it = 266e3 / a, ct = 436300 / a, ut = 583520 / a, lt = 354759 / a, dt = {
		[t.SUN]: {
			name: "Sun",
			type: "star",
			color: "#f5e042",
			radiusKm: 696340,
			kind: "star",
			textureResolution: 512,
			massKg: 198847e25
		},
		[t.MERCURY]: {
			name: "Mercury",
			type: "planet",
			color: "#9c8a78",
			radiusKm: 2439.7,
			kind: "barren",
			textureResolution: 192,
			massKg: 33011e19,
			semiMajorAxisAu: .387098,
			parentBodyId: t.SUN
		},
		[t.VENUS]: {
			name: "Venus",
			type: "planet",
			color: "#f0e3a0",
			radiusKm: 6051.8,
			kind: "molten",
			textureResolution: 224,
			massKg: 48675e20,
			semiMajorAxisAu: .723332,
			parentBodyId: t.SUN
		},
		[t.EARTH]: {
			name: "Earth",
			type: "planet",
			color: "#4a90d9",
			radiusKm: 6371,
			kind: "oceanic",
			textureResolution: 224,
			features: { axialSpin: "eop" },
			massKg: 597237e19,
			semiMajorAxisAu: 1.0000001,
			parentBodyId: t.SUN
		},
		[t.MARS]: {
			name: "Mars",
			type: "planet",
			color: "#c1440e",
			radiusKm: 3389.5,
			kind: "desert",
			textureResolution: 192,
			massKg: 64171e19,
			semiMajorAxisAu: 1.523679,
			parentBodyId: t.SUN
		},
		[t.JUPITER]: {
			name: "Jupiter",
			type: "planet",
			color: "#c8985a",
			radiusKm: 69911,
			kind: "gasGiant",
			textureResolution: 256,
			geometricAlbedo: .52,
			massKg: 18982e23,
			semiMajorAxisAu: 5.2044,
			parentBodyId: t.SUN
		},
		[t.SATURN]: {
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
			parentBodyId: t.SUN
		},
		[t.URANUS]: {
			name: "Uranus",
			type: "planet",
			color: "#a3d6e0",
			radiusKm: 25362,
			kind: "iceGiant",
			textureResolution: 224,
			geometricAlbedo: .51,
			massKg: 868103e20,
			semiMajorAxisAu: 19.2184,
			parentBodyId: t.SUN
		},
		[t.NEPTUNE]: {
			name: "Neptune",
			type: "planet",
			color: "#4166f5",
			radiusKm: 24622,
			kind: "iceGiant",
			textureResolution: 224,
			geometricAlbedo: .41,
			massKg: 102413e21,
			semiMajorAxisAu: 30.110387,
			parentBodyId: t.SUN
		},
		[t.PLUTO]: {
			name: "Pluto",
			type: "dwarf_planet",
			color: "#a26847",
			radiusKm: 1188.3,
			kind: "barren",
			textureResolution: 192,
			massKg: 13029e18,
			semiMajorAxisAu: 39.482,
			parentBodyId: t.SUN
		},
		[t.MOON]: {
			name: "Moon",
			type: "moon",
			color: "#cccccc",
			radiusKm: 1737,
			kind: "barren",
			textureResolution: 192,
			massKg: 7342e19,
			semiMajorAxisAu: Ge,
			parentBodyId: t.EARTH
		},
		[t.IO]: {
			name: "Io",
			type: "moon",
			color: "#d9b863",
			radiusKm: 1821.6,
			kind: "barren",
			textureResolution: 192,
			massKg: 89319e18,
			semiMajorAxisAu: Xe,
			parentBodyId: t.JUPITER
		},
		[t.EUROPA]: {
			name: "Europa",
			type: "moon",
			color: "#d2c1a0",
			radiusKm: 1560.8,
			kind: "barren",
			textureResolution: 192,
			massKg: 47998e18,
			semiMajorAxisAu: ze,
			parentBodyId: t.JUPITER
		},
		[t.GANYMEDE]: {
			name: "Ganymede",
			type: "moon",
			color: "#8d8278",
			radiusKm: 2634.1,
			kind: "barren",
			textureResolution: 192,
			massKg: 14819e19,
			semiMajorAxisAu: Ve,
			parentBodyId: t.JUPITER
		},
		[t.CALLISTO]: {
			name: "Callisto",
			type: "moon",
			color: "#5f574d",
			radiusKm: 2410.3,
			kind: "barren",
			textureResolution: 192,
			massKg: 10759e19,
			semiMajorAxisAu: We,
			parentBodyId: t.JUPITER
		},
		[t.PHOBOS]: {
			name: "Phobos",
			type: "moon",
			color: "#a08070",
			radiusKm: 11.267,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x25de4dd4a93000,
			semiMajorAxisAu: $e,
			parentBodyId: t.MARS
		},
		[t.DEIMOS]: {
			name: "Deimos",
			type: "moon",
			color: "#9c8878",
			radiusKm: 6.2,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x53e98989e1000,
			semiMajorAxisAu: qe,
			parentBodyId: t.MARS
		},
		[t.MIMAS]: {
			name: "Mimas",
			type: "moon",
			color: "#cfcfd2",
			radiusKm: 198.2,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x20851e4da83b88000,
			semiMajorAxisAu: Qe,
			parentBodyId: t.SATURN
		},
		[t.ENCELADUS]: {
			name: "Enceladus",
			type: "moon",
			color: "#e6f0f5",
			radiusKm: 252.1,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x5db1b3cacc73f0000,
			semiMajorAxisAu: Ze,
			parentBodyId: t.SATURN
		},
		[t.TETHYS]: {
			name: "Tethys",
			type: "moon",
			color: "#d8d2c4",
			radiusKm: 531.1,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x2178d3821d702a0000,
			semiMajorAxisAu: et,
			parentBodyId: t.SATURN
		},
		[t.DIONE]: {
			name: "Dione",
			type: "moon",
			color: "#c7c2b1",
			radiusKm: 561.4,
			kind: "barren",
			textureResolution: 128,
			massKg: 1095452e15,
			semiMajorAxisAu: tt,
			parentBodyId: t.SATURN
		},
		[t.RHEA]: {
			name: "Rhea",
			type: "moon",
			color: "#b9b3a3",
			radiusKm: 763.8,
			kind: "barren",
			textureResolution: 128,
			massKg: 2306518e15,
			semiMajorAxisAu: nt,
			parentBodyId: t.SATURN
		},
		[t.TITAN]: {
			name: "Titan",
			type: "moon",
			color: "#d8a45c",
			radiusKm: 2574.7,
			kind: "barren",
			textureResolution: 192,
			massKg: 13452e19,
			semiMajorAxisAu: rt,
			parentBodyId: t.SATURN
		},
		[t.IAPETUS]: {
			name: "Iapetus",
			type: "moon",
			color: "#736556",
			radiusKm: 734.5,
			kind: "barren",
			textureResolution: 128,
			massKg: 1805635e15,
			semiMajorAxisAu: ot,
			parentBodyId: t.SATURN
		},
		[t.MIRANDA]: {
			name: "Miranda",
			type: "moon",
			color: "#9f9893",
			radiusKm: 235.8,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x3928bd4d8ca3e0000,
			semiMajorAxisAu: st,
			parentBodyId: t.URANUS
		},
		[t.ARIEL]: {
			name: "Ariel",
			type: "moon",
			color: "#b6b0a8",
			radiusKm: 578.9,
			kind: "barren",
			textureResolution: 128,
			massKg: 1353e18,
			semiMajorAxisAu: at,
			parentBodyId: t.URANUS
		},
		[t.UMBRIEL]: {
			name: "Umbriel",
			type: "moon",
			color: "#6c655c",
			radiusKm: 584.7,
			kind: "barren",
			textureResolution: 128,
			massKg: 1172e18,
			semiMajorAxisAu: it,
			parentBodyId: t.URANUS
		},
		[t.TITANIA]: {
			name: "Titania",
			type: "moon",
			color: "#a8a097",
			radiusKm: 788.4,
			kind: "barren",
			textureResolution: 128,
			massKg: 3527e18,
			semiMajorAxisAu: ct,
			parentBodyId: t.URANUS
		},
		[t.OBERON]: {
			name: "Oberon",
			type: "moon",
			color: "#857d70",
			radiusKm: 761.4,
			kind: "barren",
			textureResolution: 128,
			massKg: 3014e18,
			semiMajorAxisAu: ut,
			parentBodyId: t.URANUS
		},
		[t.TRITON]: {
			name: "Triton",
			type: "moon",
			color: "#d6c8b0",
			radiusKm: 1353.4,
			kind: "barren",
			textureResolution: 192,
			massKg: 2139e19,
			semiMajorAxisAu: lt,
			parentBodyId: t.NEPTUNE
		}
	}, C = a, re = Z, oe = 1e3 / C, k = C * oe;
	100 * k;
	100 / re;
	const se = Ne, B = k * re;
	25 * B;
	function ae(e) {
		return !Number.isFinite(e) || e < 0 ? 0 : e * B;
	}
	const At = 5e4, _t = 2e3, mt = At / se, St = _t / se;
	ae(mt);
	ae(St);
	25 * B;
	const ie = 1e3;
	1 * ie, 1 * E, 1e3 * E, 1e6 * E, 1e9 * E;
	1e9 * E;
	1 * ie;
	const w = 1721545, Y = 3181545;
	function Et(e) {
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
	const ce = Object.fromEntries(Object.entries(dt).map(([e, n]) => [e, Et(n)]));
	t.SUN, t.MERCURY, t.VENUS, t.EARTH, t.MARS, t.JUPITER, t.SATURN, t.URANUS, t.NEPTUNE, t.PLUTO, t.MOON, t.IO, t.EUROPA, t.GANYMEDE, t.CALLISTO, t.PHOBOS, t.DEIMOS, t.MIMAS, t.ENCELADUS, t.TETHYS, t.DIONE, t.RHEA, t.TITAN, t.IAPETUS, t.MIRANDA, t.ARIEL, t.UMBRIEL, t.TITANIA, t.OBERON, t.TRITON;
	23.4392911 * Math.PI / 180;
	const ue = ce[t.EARTH]?.radiusKm ?? 6371, le = ce[t.SUN]?.radiusKm ?? 696340;
	ue / le;
	function de(e) {
		return !Number.isFinite(e) || e <= 0 ? 0 : e * oe;
	}
	de(ue);
	de(le);
	function It(e) {
		const n = e.mode, r = n.kind === "visit" ? n.visitId : null;
		let o;
		return n.kind === "watch" || n.kind === "visit" ? o = n.watchId : o = null, {
			viewpoint: e,
			visitId: r,
			watchId: o,
			scenePosition: e.location,
			autoWatch: e.autoWatch,
			solarHeliocentricLayout: e.solarHeliocentricLayout,
			pendingTeleport: e.pendingTeleport,
			pendingOrientationSlew: e.pendingOrientationSlew,
			look: e.look,
			landedTarget: e.landedTarget
		};
	}
	const Rt = 26051303, pt = 86400;
	function Ae(e) {
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
	const yt = 2451545;
	function H(e) {
		return {
			protocolVersion: Rt,
			jd: e?.jd ?? yt,
			playing: e?.playing ?? !1,
			speed: e?.speed ?? 86400
		};
	}
	It({
		location: [
			0,
			0,
			0
		],
		look: {
			forward: {
				x: 0,
				y: 0,
				z: -1
			},
			up: {
				x: 0,
				y: 1,
				z: 0
			}
		},
		mode: { kind: "first-person" },
		pendingTeleport: null,
		pendingOrientationSlew: null,
		autoWatch: !1,
		landedTarget: null,
		solarHeliocentricLayout: !0
	});
	function _e(e, n) {
		const r = Ae(n);
		switch (r.type) {
			case "init": {
				const o = H({
					jd: r.jd ?? e.jd,
					playing: r.playing ?? e.playing,
					speed: r.speed ?? e.speed
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
				if (!Number.isFinite(r.jd)) return {
					state: e,
					events: [{
						type: "error",
						code: "INVALID_JD",
						message: "seek.jd must be finite"
					}]
				};
				const o = r.jd;
				let s = o;
				(s < 1721545 || s > 3181545) && (console.warn(`[kernel/seek] JD ${s} outside supported range [${w}, ${Y}] (years 0-4000 AD); clamping.`), s = Math.max(w, Math.min(Y, s)));
				const i = {
					...e,
					jd: s
				}, l = [{
					type: "tick",
					jd: i.jd
				}, {
					type: "timeState",
					state: i
				}];
				if (o < 1721545 || o > 3181545) {
					const c = e.jd > 1721545 && e.jd < 3181545, A = e.jd === 1721545 && o < 1721545;
					(c || A) && l.push({
						type: "jdBoundaryReached",
						boundary: o > 3181545 ? "max" : "min"
					});
				}
				return {
					state: i,
					events: l
				};
			}
			case "step": {
				if (!e.playing) return {
					state: e,
					events: []
				};
				const o = r.deltaSeconds;
				if (!Number.isFinite(o)) return {
					state: e,
					events: [{
						type: "error",
						code: "INVALID_DELTA",
						message: "step.deltaSeconds must be finite"
					}]
				};
				const s = e.jd + e.speed * o / pt, i = Math.max(w, Math.min(Y, s)), l = {
					...e,
					jd: i
				}, c = [{
					type: "tick",
					jd: i
				}, {
					type: "timeState",
					state: l
				}];
				return s > 3181545 && e.jd < 3181545 ? c.push({
					type: "jdBoundaryReached",
					boundary: "max"
				}) : s < 1721545 && e.jd > 1721545 && c.push({
					type: "jdBoundaryReached",
					boundary: "min"
				}), {
					state: l,
					events: c
				};
			}
			case "setPlaying": {
				const o = {
					...e,
					playing: r.playing
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
					speed: r.speed
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
	C / k;
	let _ = H(), P = null, y = null;
	function J(e) {
		y?.(e);
	}
	function v() {
		P != null && (clearInterval(P), P = null);
	}
	function Mt() {
		v(), P = setInterval(() => {
			const { state: e, events: n } = _e(_, {
				type: "step",
				deltaSeconds: .5
			});
			_ = e, J({
				type: "workerTick",
				state: _,
				events: n
			});
		}, 500);
	}
	function F() {
		_.playing ? Mt() : v();
	}
	function Tt(e) {
		if (e.type === "init") {
			const n = Ae({
				type: "init",
				jd: e.jd,
				playing: e.playing,
				speed: e.speed
			});
			if (n.type !== "init") return;
			_ = H({
				jd: n.jd ?? _.jd,
				playing: n.playing ?? _.playing,
				speed: n.speed ?? _.speed
			}), F(), J({
				type: "workerTick",
				state: _,
				events: []
			});
			return;
		}
		if (e.type === "time") {
			const { state: n, events: r } = _e(_, e.cmd);
			_ = n, J({
				type: "workerTick",
				state: _,
				events: r
			}), F();
		}
	}
	K({
		postInbound(e) {
			try {
				Tt(e);
			} catch (n) {
				console.error(n);
			}
		},
		subscribe(e) {
			y != null && y !== e && console.warn("[simulationWorker] replacing existing outbound subscriber (double subscribe)"), y = e, F();
		},
		unsubscribe() {
			y = null, v();
		}
	});
})();
