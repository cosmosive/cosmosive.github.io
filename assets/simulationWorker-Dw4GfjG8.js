(function() {
	const z = Symbol("Comlink.proxy"), le = Symbol("Comlink.endpoint"), de = Symbol("Comlink.releaseProxy"), K = Symbol("Comlink.finalizer"), f = Symbol("Comlink.thrown"), V = (e) => typeof e == "object" && e !== null || typeof e == "function", W = new Map([["proxy", {
		canHandle: (e) => V(e) && e[z],
		serialize(e) {
			const { port1: n, port2: r } = new MessageChannel();
			return L(e, n), [r, [r]];
		},
		deserialize(e) {
			return e.start(), _e(e);
		}
	}], ["throw", {
		canHandle: (e) => V(e) && f in e,
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
	function Ae(e, n) {
		for (const r of e) if (n === r || r === "*" || r instanceof RegExp && r.test(n)) return !0;
		return !1;
	}
	function L(e, n = globalThis, r = ["*"]) {
		n.addEventListener("message", function o(s) {
			if (!s || !s.data) return;
			if (!Ae(r, s.origin)) {
				console.warn(`Invalid origin '${s.origin}' for comlink proxy`);
				return;
			}
			const { id: i, type: l, path: c } = Object.assign({ path: [] }, s.data), E = (s.data.argumentList || []).map(I);
			let u;
			try {
				const d = c.slice(0, -1).reduce((m, T) => m[T], e), S = c.reduce((m, T) => m[T], e);
				switch (l) {
					case "GET":
						u = S;
						break;
					case "SET":
						d[c.slice(-1)[0]] = I(s.data.value), u = !0;
						break;
					case "APPLY":
						u = S.apply(d, E);
						break;
					case "CONSTRUCT":
						u = pe(new S(...E));
						break;
					case "ENDPOINT":
						{
							const { port1: m, port2: T } = new MessageChannel();
							L(e, T), u = Re(m, [m]);
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
					[f]: 0
				};
			}
			Promise.resolve(u).catch((d) => ({
				value: d,
				[f]: 0
			})).then((d) => {
				const [S, m] = g(d);
				n.postMessage(Object.assign(Object.assign({}, S), { id: i }), m), l === "RELEASE" && (n.removeEventListener("message", o), $(n), K in e && typeof e[K] == "function" && e[K]());
			}).catch((d) => {
				const [S, m] = g({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[f]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, S), { id: i }), m);
			});
		}), n.start && n.start();
	}
	function Ee(e) {
		return e.constructor.name === "MessagePort";
	}
	function $(e) {
		Ee(e) && e.close();
	}
	function _e(e, n) {
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
	function U(e) {
		if (e) throw new Error("Proxy has been released and is not useable");
	}
	function q(e) {
		return R(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			$(e);
		});
	}
	const N = /* @__PURE__ */ new WeakMap(), b = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
		const n = (N.get(e) || 0) - 1;
		N.set(e, n), n === 0 && q(e);
	});
	function me(e, n) {
		const r = (N.get(n) || 0) + 1;
		N.set(n, r), b && b.register(e, n, e);
	}
	function Se(e) {
		b && b.unregister(e);
	}
	function C(e, n, r = [], o = function() {}) {
		let s = !1;
		const i = new Proxy(o, {
			get(l, c) {
				if (U(s), c === de) return () => {
					Se(i), q(e), n.clear(), s = !0;
				};
				if (c === "then") {
					if (r.length === 0) return { then: () => i };
					const E = R(e, n, {
						type: "GET",
						path: r.map((u) => u.toString())
					}).then(I);
					return E.then.bind(E);
				}
				return C(e, n, [...r, c]);
			},
			set(l, c, E) {
				U(s);
				const [u, d] = g(E);
				return R(e, n, {
					type: "SET",
					path: [...r, c].map((S) => S.toString()),
					value: u
				}, d).then(I);
			},
			apply(l, c, E) {
				U(s);
				const u = r[r.length - 1];
				if (u === le) return R(e, n, { type: "ENDPOINT" }).then(I);
				if (u === "bind") return C(e, n, r.slice(0, -1));
				const [d, S] = Q(E);
				return R(e, n, {
					type: "APPLY",
					path: r.map((m) => m.toString()),
					argumentList: d
				}, S).then(I);
			},
			construct(l, c) {
				U(s);
				const [E, u] = Q(c);
				return R(e, n, {
					type: "CONSTRUCT",
					path: r.map((d) => d.toString()),
					argumentList: E
				}, u).then(I);
			}
		});
		return me(i, e), i;
	}
	function Ie(e) {
		return Array.prototype.concat.apply([], e);
	}
	function Q(e) {
		const n = e.map(g);
		return [n.map((r) => r[0]), Ie(n.map((r) => r[1]))];
	}
	const Z = /* @__PURE__ */ new WeakMap();
	function Re(e, n) {
		return Z.set(e, n), e;
	}
	function pe(e) {
		return Object.assign(e, { [z]: !0 });
	}
	function g(e) {
		for (const [n, r] of W) if (r.canHandle(e)) {
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
		}, Z.get(e) || []];
	}
	function I(e) {
		switch (e.type) {
			case "HANDLER": return W.get(e.name).deserialize(e.value);
			case "RAW": return e.value;
		}
	}
	function R(e, n, r, o) {
		return new Promise((s) => {
			const i = ye();
			n.set(i, s), e.start && e.start(), e.postMessage(Object.assign({ id: i }, r), o);
		});
	}
	function ye() {
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
	const j = 86400, Me = 365.25, A = 299792.458, p = A * Me * j, a = 149597870.7, k = 648e3 / Math.PI, ee = k * a / p, fe = 23.4392911;
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
	}), Ue = Symbol.for("bitecs-relation"), Ne = Symbol.for("bitecs-pairTarget"), be = Symbol.for("bitecs-isPairComponent"), y = Symbol.for("bitecs-relationData"), te = () => {
		let e = {
			pairsMap: /* @__PURE__ */ new Map(),
			initStore: void 0,
			exclusiveRelation: !1,
			autoRemoveSubject: !1,
			onTargetRemoved: void 0
		}, n = (r) => {
			if (r === void 0) throw Error("Relation target is undefined");
			let o = r === "*" ? Pe : r;
			if (!e.pairsMap.has(o)) {
				let s = e.initStore ? e.initStore(r) : {};
				O(s, Ue, n), O(s, Ne, o), O(s, be, !0), e.pairsMap.set(o, s);
			}
			return e.pairsMap.get(o);
		};
		return O(n, y, e), n;
	}, ge = Symbol.for("bitecs-wildcard");
	function Oe() {
		let e = te();
		return Object.defineProperty(e, ge, {
			value: !0,
			enumerable: !1,
			writable: !1,
			configurable: !1
		}), e;
	}
	function xe() {
		let e = Symbol.for("bitecs-global-wildcard");
		return globalThis[e] || (globalThis[e] = Oe()), globalThis[e];
	}
	var Pe = xe();
	function De() {
		return te();
	}
	function Ke() {
		let e = Symbol.for("bitecs-global-isa");
		return globalThis[e] || (globalThis[e] = De()), globalThis[e];
	}
	Ke();
	const He = 384399 / a, Je = 421800 / a, ve = 671034 / a, Ge = 1070400 / a, Fe = 1882700 / a, Xe = 9376 / a, ze = 23463 / a, Ve = 185540 / a, We = 237948 / a, $e = 294619 / a, qe = 377396 / a, Qe = 527108 / a, Ze = 1221870 / a, et = 3560820 / a, tt = 129390 / a, nt = 190900 / a, rt = 266e3 / a, ot = 436300 / a, st = 583520 / a, at = 354759 / a, it = {
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
			semiMajorAxisAu: He,
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
			semiMajorAxisAu: Je,
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
			semiMajorAxisAu: ve,
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
			semiMajorAxisAu: Ge,
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
			semiMajorAxisAu: Fe,
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
			semiMajorAxisAu: Xe,
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
			semiMajorAxisAu: ze,
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
			semiMajorAxisAu: Ve,
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
			semiMajorAxisAu: We,
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
			semiMajorAxisAu: $e,
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
			semiMajorAxisAu: qe,
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
			semiMajorAxisAu: Qe,
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
			semiMajorAxisAu: Ze,
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
			semiMajorAxisAu: et,
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
			semiMajorAxisAu: tt,
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
			semiMajorAxisAu: nt,
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
			semiMajorAxisAu: rt,
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
			semiMajorAxisAu: ot,
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
			semiMajorAxisAu: st,
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
			semiMajorAxisAu: at,
			parentBodyId: t.NEPTUNE
		}
	};
	function ct(e) {
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
	Object.fromEntries(Object.entries(it).map(([e, n]) => [e, ct(n)]));
	new TextEncoder();
	new TextDecoder();
	new TextEncoder();
	new TextDecoder("utf-8");
	const oe = 1e3 / a, w = oe * p * ee, ut = 695700, lt = 6378.137;
	function se(e) {
		return !Number.isFinite(e) || e <= 0 ? 0 : e * oe;
	}
	se(lt);
	se(ut);
	Object.freeze({
		close: 1,
		system: A,
		sector: p / 1e3,
		galactic: p
	});
	const dt = fe;
	100 / k;
	1.1 * k;
	25 * w;
	25 * w;
	const ae = ee;
	function ie(e) {
		return !Number.isFinite(e) || e < 0 ? 0 : e * w;
	}
	const At = 5e4, Et = 2e3, _t = At / ae, mt = Et / ae;
	ie(_t);
	ie(mt);
	const H = 1721545, J = 3181545;
	dt * Math.PI / 180;
	function St(e) {
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
	const It = 26051303, Rt = 86400;
	function ce(e) {
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
	const pt = 2451545;
	function v(e) {
		return {
			protocolVersion: It,
			jd: e?.jd ?? pt,
			playing: e?.playing ?? !1,
			speed: e?.speed ?? 86400
		};
	}
	St({
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
	function ue(e, n) {
		const r = ce(n);
		switch (r.type) {
			case "init": {
				const o = v({
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
				(s < 1721545 || s > 3181545) && (console.warn(`[kernel/seek] JD ${s} outside supported range [${H}, ${J}] (years 0-4000 AD); clamping.`), s = Math.max(H, Math.min(J, s)));
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
					const c = e.jd > 1721545 && e.jd < 3181545, E = e.jd === 1721545 && o < 1721545;
					(c || E) && l.push({
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
				const s = e.jd + e.speed * o / Rt, i = Math.max(H, Math.min(J, s)), l = {
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
	let _ = v(), D = null, M = null;
	function G(e) {
		M?.(e);
	}
	function F() {
		D != null && (clearInterval(D), D = null);
	}
	function yt() {
		F(), D = setInterval(() => {
			const { state: e, events: n } = ue(_, {
				type: "step",
				deltaSeconds: .5
			});
			_ = e, G({
				type: "workerTick",
				state: _,
				events: n
			});
		}, 500);
	}
	function X() {
		_.playing ? yt() : F();
	}
	function Mt(e) {
		if (e.type === "init") {
			const n = ce({
				type: "init",
				jd: e.jd,
				playing: e.playing,
				speed: e.speed
			});
			if (n.type !== "init") return;
			_ = v({
				jd: n.jd ?? _.jd,
				playing: n.playing ?? _.playing,
				speed: n.speed ?? _.speed
			}), X(), G({
				type: "workerTick",
				state: _,
				events: []
			});
			return;
		}
		if (e.type === "time") {
			const { state: n, events: r } = ue(_, e.cmd);
			_ = n, G({
				type: "workerTick",
				state: _,
				events: r
			}), X();
		}
	}
	L({
		postInbound(e) {
			try {
				Mt(e);
			} catch (n) {
				console.error(n);
			}
		},
		subscribe(e) {
			M != null && M !== e && console.warn("[simulationWorker] replacing existing outbound subscriber (double subscribe)"), M = e, X();
		},
		unsubscribe() {
			M = null, F();
		}
	});
})();
