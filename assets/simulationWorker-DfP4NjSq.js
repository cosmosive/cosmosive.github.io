(function() {
	const V = Symbol("Comlink.proxy"), Ae = Symbol("Comlink.endpoint"), de = Symbol("Comlink.releaseProxy"), K = Symbol("Comlink.finalizer"), M = Symbol("Comlink.thrown"), F = (e) => typeof e == "object" && e !== null || typeof e == "function", z = new Map([["proxy", {
		canHandle: (e) => F(e) && e[V],
		serialize(e) {
			const { port1: n, port2: r } = new MessageChannel();
			return D(e, n), [r, [r]];
		},
		deserialize(e) {
			return e.start(), Se(e);
		}
	}], ["throw", {
		canHandle: (e) => F(e) && M in e,
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
	function _e(e, n) {
		for (const r of e) if (n === r || r === "*" || r instanceof RegExp && r.test(n)) return !0;
		return !1;
	}
	function D(e, n = globalThis, r = ["*"]) {
		n.addEventListener("message", function o(s) {
			if (!s || !s.data) return;
			if (!_e(r, s.origin)) {
				console.warn(`Invalid origin '${s.origin}' for comlink proxy`);
				return;
			}
			const { id: i, type: l, path: c } = Object.assign({ path: [] }, s.data), d = (s.data.argumentList || []).map(R);
			let u;
			try {
				const A = c.slice(0, -1).reduce((E, T) => E[T], e), S = c.reduce((E, T) => E[T], e);
				switch (l) {
					case "GET":
						u = S;
						break;
					case "SET":
						A[c.slice(-1)[0]] = R(s.data.value), u = !0;
						break;
					case "APPLY":
						u = S.apply(A, d);
						break;
					case "CONSTRUCT":
						u = ye(new S(...d));
						break;
					case "ENDPOINT":
						{
							const { port1: E, port2: T } = new MessageChannel();
							D(e, T), u = pe(E, [E]);
						}
						break;
					case "RELEASE":
						u = void 0;
						break;
					default: return;
				}
			} catch (A) {
				u = {
					value: A,
					[M]: 0
				};
			}
			Promise.resolve(u).catch((A) => ({
				value: A,
				[M]: 0
			})).then((A) => {
				const [S, E] = b(A);
				n.postMessage(Object.assign(Object.assign({}, S), { id: i }), E), l === "RELEASE" && (n.removeEventListener("message", o), W(n), K in e && typeof e[K] == "function" && e[K]());
			}).catch((A) => {
				const [S, E] = b({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[M]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, S), { id: i }), E);
			});
		}), n.start && n.start();
	}
	function Ee(e) {
		return e.constructor.name === "MessagePort";
	}
	function W(e) {
		Ee(e) && e.close();
	}
	function Se(e, n) {
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
		}), C(e, r, [], n);
	}
	function f(e) {
		if (e) throw new Error("Proxy has been released and is not useable");
	}
	function $(e) {
		return I(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			W(e);
		});
	}
	const N = /* @__PURE__ */ new WeakMap(), U = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
		const n = (N.get(e) || 0) - 1;
		N.set(e, n), n === 0 && $(e);
	});
	function me(e, n) {
		const r = (N.get(n) || 0) + 1;
		N.set(n, r), U && U.register(e, n, e);
	}
	function Re(e) {
		U && U.unregister(e);
	}
	function C(e, n, r = [], o = function() {}) {
		let s = !1;
		const i = new Proxy(o, {
			get(l, c) {
				if (f(s), c === de) return () => {
					Re(i), $(e), n.clear(), s = !0;
				};
				if (c === "then") {
					if (r.length === 0) return { then: () => i };
					const d = I(e, n, {
						type: "GET",
						path: r.map((u) => u.toString())
					}).then(R);
					return d.then.bind(d);
				}
				return C(e, n, [...r, c]);
			},
			set(l, c, d) {
				f(s);
				const [u, A] = b(d);
				return I(e, n, {
					type: "SET",
					path: [...r, c].map((S) => S.toString()),
					value: u
				}, A).then(R);
			},
			apply(l, c, d) {
				f(s);
				const u = r[r.length - 1];
				if (u === Ae) return I(e, n, { type: "ENDPOINT" }).then(R);
				if (u === "bind") return C(e, n, r.slice(0, -1));
				const [A, S] = q(d);
				return I(e, n, {
					type: "APPLY",
					path: r.map((E) => E.toString()),
					argumentList: A
				}, S).then(R);
			},
			construct(l, c) {
				f(s);
				const [d, u] = q(c);
				return I(e, n, {
					type: "CONSTRUCT",
					path: r.map((A) => A.toString()),
					argumentList: d
				}, u).then(R);
			}
		});
		return me(i, e), i;
	}
	function Ie(e) {
		return Array.prototype.concat.apply([], e);
	}
	function q(e) {
		const n = e.map(b);
		return [n.map((r) => r[0]), Ie(n.map((r) => r[1]))];
	}
	const Q = /* @__PURE__ */ new WeakMap();
	function pe(e, n) {
		return Q.set(e, n), e;
	}
	function ye(e) {
		return Object.assign(e, { [V]: !0 });
	}
	function b(e) {
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
		}, Q.get(e) || []];
	}
	function R(e) {
		switch (e.type) {
			case "HANDLER": return z.get(e.name).deserialize(e.value);
			case "RAW": return e.value;
		}
	}
	function I(e, n, r, o) {
		return new Promise((s) => {
			const i = Te();
			n.set(i, s), e.start && e.start(), e.postMessage(Object.assign({ id: i }, r), o);
		});
	}
	function Te() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
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
		CERES: "2000001",
		ERIS: "2136199",
		HAUMEA: "2136108",
		MAKEMAKE: "2136472",
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
	};
	t.SUN, t.MERCURY, t.VENUS, t.EARTH, t.MARS, t.JUPITER, t.SATURN, t.URANUS, t.NEPTUNE, t.PLUTO, t.CERES, t.ERIS, t.HAUMEA, t.MAKEMAKE, t.MOON, t.IO, t.EUROPA, t.GANYMEDE, t.CALLISTO, t.PHOBOS, t.DEIMOS, t.MIMAS, t.ENCELADUS, t.TETHYS, t.DIONE, t.RHEA, t.TITAN, t.IAPETUS, t.MIRANDA, t.ARIEL, t.UMBRIEL, t.TITANIA, t.OBERON, t.TRITON;
	2 * Math.PI;
	Math.PI / 180;
	180 / Math.PI;
	const L = 86400, Me = 365.25, m = 299792.458, h = m * Me * L, a = 149597870.7, j = 648e3 / Math.PI, Z = j * a / h, Ne = 23.4392911, Ue = 1e3, be = m, Oe = m ** Math.sqrt(Math.E), ge = m ** 2, xe = m ** Math.E, Pe = [
		1,
		Ue,
		be,
		Oe
	], ee = [ge, xe];
	new Set(ee);
	const te = [...Pe, ...ee];
	te[te.length - 1];
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
	var O = (e, n, r) => Object.defineProperty(e, n, {
		value: r,
		enumerable: !1,
		writable: !0,
		configurable: !0
	}), Ke = Symbol.for("bitecs-relation"), De = Symbol.for("bitecs-pairTarget"), Ce = Symbol.for("bitecs-isPairComponent"), p = Symbol.for("bitecs-relationData"), ne = () => {
		let e = {
			pairsMap: /* @__PURE__ */ new Map(),
			initStore: void 0,
			exclusiveRelation: !1,
			autoRemoveSubject: !1,
			onTargetRemoved: void 0
		}, n = (r) => {
			if (r === void 0) throw Error("Relation target is undefined");
			let o = r === "*" ? ke : r;
			if (!e.pairsMap.has(o)) {
				let s = e.initStore ? e.initStore(r) : {};
				O(s, Ke, n), O(s, De, o), O(s, Ce, !0), e.pairsMap.set(o, s);
			}
			return e.pairsMap.get(o);
		};
		return O(n, p, e), n;
	}, Le = Symbol.for("bitecs-wildcard");
	function he() {
		let e = ne();
		return Object.defineProperty(e, Le, {
			value: !0,
			enumerable: !1,
			writable: !1,
			configurable: !1
		}), e;
	}
	function je() {
		let e = Symbol.for("bitecs-global-wildcard");
		return globalThis[e] || (globalThis[e] = he()), globalThis[e];
	}
	var ke = je();
	function Ye() {
		return ne();
	}
	function we() {
		let e = Symbol.for("bitecs-global-isa");
		return globalThis[e] || (globalThis[e] = Ye()), globalThis[e];
	}
	we();
	const ze = 384399 / a, We = 421800 / a, $e = 671034 / a, qe = 1070400 / a, Qe = 1882700 / a, Ze = 9376 / a, et = 23463 / a, tt = 185540 / a, nt = 237948 / a, rt = 294619 / a, ot = 377396 / a, st = 527108 / a, at = 1221870 / a, it = 3560820 / a, ct = 129390 / a, ut = 190900 / a, lt = 266e3 / a, At = 436300 / a, dt = 583520 / a, _t = 354759 / a, Et = {
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
			features: { rings: !0 },
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
			features: { rings: !0 },
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
			features: { rings: !0 },
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
		[t.CERES]: {
			name: "Ceres",
			type: "dwarf_planet",
			color: "#8c8276",
			radiusKm: 469.7,
			kind: "barren",
			textureResolution: 192,
			massKg: 0x32dec6fd325ad00000,
			semiMajorAxisAu: 2.7691,
			parentBodyId: t.SUN
		},
		[t.ERIS]: {
			name: "Eris",
			type: "dwarf_planet",
			color: "#d8d8d0",
			radiusKm: 1163,
			kind: "barren",
			textureResolution: 192,
			massKg: 16466e18,
			semiMajorAxisAu: 67.78,
			parentBodyId: t.SUN
		},
		[t.HAUMEA]: {
			name: "Haumea",
			type: "dwarf_planet",
			color: "#d6cfc4",
			radiusKm: 780,
			kind: "barren",
			textureResolution: 192,
			massKg: 4006e18,
			semiMajorAxisAu: 43.13,
			parentBodyId: t.SUN
		},
		[t.MAKEMAKE]: {
			name: "Makemake",
			type: "dwarf_planet",
			color: "#b06a4a",
			radiusKm: 715,
			kind: "barren",
			textureResolution: 192,
			massKg: 31e20,
			semiMajorAxisAu: 45.43,
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
			semiMajorAxisAu: ze,
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
			semiMajorAxisAu: We,
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
			semiMajorAxisAu: $e,
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
			semiMajorAxisAu: qe,
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
			semiMajorAxisAu: Qe,
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
			semiMajorAxisAu: Ze,
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
			semiMajorAxisAu: et,
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
			semiMajorAxisAu: tt,
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
			semiMajorAxisAu: nt,
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
			semiMajorAxisAu: rt,
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
			semiMajorAxisAu: ot,
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
			semiMajorAxisAu: st,
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
			semiMajorAxisAu: at,
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
			semiMajorAxisAu: it,
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
			semiMajorAxisAu: ct,
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
			semiMajorAxisAu: ut,
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
			semiMajorAxisAu: lt,
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
			semiMajorAxisAu: At,
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
			semiMajorAxisAu: dt,
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
			semiMajorAxisAu: _t,
			parentBodyId: t.NEPTUNE
		}
	};
	function St(e) {
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
	Object.fromEntries(Object.entries(Et).map(([e, n]) => [e, St(n)]));
	new TextEncoder();
	new TextDecoder();
	new TextEncoder();
	new TextDecoder("utf-8");
	const se = 1e3 / a, w = se * h * Z, mt = 695700, Rt = 6378.137;
	function ae(e) {
		return !Number.isFinite(e) || e <= 0 ? 0 : e * se;
	}
	ae(Rt);
	ae(mt);
	const It = Ne;
	100 / j;
	1.1 * j;
	25 * w;
	25 * w;
	const ie = Z;
	function ce(e) {
		return !Number.isFinite(e) || e < 0 ? 0 : e * w;
	}
	const pt = 5e4, yt = 2e3, Tt = pt / ie, Mt = yt / ie;
	ce(Tt);
	ce(Mt);
	const B = 1721545, H = 3181545;
	It * Math.PI / 180;
	function ft(e) {
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
			look: e.look
		};
	}
	const Nt = 26051303, Ut = 86400;
	function ue(e) {
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
	const bt = 2451545;
	function J(e) {
		return {
			protocolVersion: Nt,
			jd: e?.jd ?? bt,
			playing: e?.playing ?? !1,
			speed: e?.speed ?? 86400
		};
	}
	ft({
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
		solarHeliocentricLayout: !0
	});
	function le(e, n) {
		const r = ue(n);
		switch (r.type) {
			case "init": {
				const o = J({
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
				(s < 1721545 || s > 3181545) && (console.warn(`[kernel/seek] JD ${s} outside supported range [${B}, ${H}] (years 0-4000 AD); clamping.`), s = Math.max(B, Math.min(H, s)));
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
					const c = e.jd > 1721545 && e.jd < 3181545, d = e.jd === 1721545 && o < 1721545;
					(c || d) && l.push({
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
				const s = e.jd + e.speed * o / Ut, i = Math.max(B, Math.min(H, s)), l = {
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
	let _ = J(), P = null, y = null;
	function v(e) {
		y?.(e);
	}
	function G() {
		P != null && (clearInterval(P), P = null);
	}
	function Ot() {
		G(), P = setInterval(() => {
			const { state: e, events: n } = le(_, {
				type: "step",
				deltaSeconds: .5
			});
			_ = e, v({
				type: "workerTick",
				state: _,
				events: n
			});
		}, 500);
	}
	function X() {
		_.playing ? Ot() : G();
	}
	function gt(e) {
		if (e.type === "init") {
			const n = ue({
				type: "init",
				jd: e.jd,
				playing: e.playing,
				speed: e.speed
			});
			if (n.type !== "init") return;
			_ = J({
				jd: n.jd ?? _.jd,
				playing: n.playing ?? _.playing,
				speed: n.speed ?? _.speed
			}), X(), v({
				type: "workerTick",
				state: _,
				events: []
			});
			return;
		}
		if (e.type === "time") {
			const { state: n, events: r } = le(_, e.cmd);
			_ = n, v({
				type: "workerTick",
				state: _,
				events: r
			}), X();
		}
	}
	D({
		postInbound(e) {
			try {
				gt(e);
			} catch (n) {
				console.error(n);
			}
		},
		subscribe(e) {
			y != null && y !== e && console.warn("[simulationWorker] replacing existing outbound subscriber (double subscribe)"), y = e, X();
		},
		unsubscribe() {
			y = null, G();
		}
	});
})();
