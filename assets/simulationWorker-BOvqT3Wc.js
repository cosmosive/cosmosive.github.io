(function() {
	const G = Symbol("Comlink.proxy"), Ee = Symbol("Comlink.endpoint"), Se = Symbol("Comlink.releaseProxy"), K = Symbol("Comlink.finalizer"), f = Symbol("Comlink.thrown"), z = (e) => typeof e == "object" && e !== null || typeof e == "function", X = new Map([["proxy", {
		canHandle: (e) => z(e) && e[G],
		serialize(e) {
			const { port1: n, port2: o } = new MessageChannel();
			return L(e, n), [o, [o]];
		},
		deserialize(e) {
			return e.start(), Re(e);
		}
	}], ["throw", {
		canHandle: (e) => z(e) && f in e,
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
	function me(e, n) {
		for (const o of e) if (n === o || o === "*" || o instanceof RegExp && o.test(n)) return !0;
		return !1;
	}
	function L(e, n = globalThis, o = ["*"]) {
		n.addEventListener("message", function r(s) {
			if (!s || !s.data) return;
			if (!me(o, s.origin)) {
				console.warn(`Invalid origin '${s.origin}' for comlink proxy`);
				return;
			}
			const { id: i, type: l, path: c } = Object.assign({ path: [] }, s.data), _ = (s.data.argumentList || []).map(I);
			let u;
			try {
				const d = c.slice(0, -1).reduce((S, M) => S[M], e), m = c.reduce((S, M) => S[M], e);
				switch (l) {
					case "GET":
						u = m;
						break;
					case "SET":
						d[c.slice(-1)[0]] = I(s.data.value), u = !0;
						break;
					case "APPLY":
						u = m.apply(d, _);
						break;
					case "CONSTRUCT":
						u = fe(new m(..._));
						break;
					case "ENDPOINT":
						{
							const { port1: S, port2: M } = new MessageChannel();
							L(e, M), u = Me(S, [S]);
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
				const [m, S] = g(d);
				n.postMessage(Object.assign(Object.assign({}, m), { id: i }), S), l === "RELEASE" && (n.removeEventListener("message", r), V(n), K in e && typeof e[K] == "function" && e[K]());
			}).catch((d) => {
				const [m, S] = g({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[f]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, m), { id: i }), S);
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
		const o = /* @__PURE__ */ new Map();
		return e.addEventListener("message", function(s) {
			const { data: i } = s;
			if (!i || !i.id) return;
			const l = o.get(i.id);
			if (l) try {
				l(i);
			} finally {
				o.delete(i.id);
			}
		}), C(e, o, [], n);
	}
	function U(e) {
		if (e) throw new Error("Proxy has been released and is not useable");
	}
	function W(e) {
		return R(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			V(e);
		});
	}
	const N = /* @__PURE__ */ new WeakMap(), b = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
		const n = (N.get(e) || 0) - 1;
		N.set(e, n), n === 0 && W(e);
	});
	function pe(e, n) {
		const o = (N.get(n) || 0) + 1;
		N.set(n, o), b && b.register(e, n, e);
	}
	function ye(e) {
		b && b.unregister(e);
	}
	function C(e, n, o = [], r = function() {}) {
		let s = !1;
		const i = new Proxy(r, {
			get(l, c) {
				if (U(s), c === Se) return () => {
					ye(i), W(e), n.clear(), s = !0;
				};
				if (c === "then") {
					if (o.length === 0) return { then: () => i };
					const _ = R(e, n, {
						type: "GET",
						path: o.map((u) => u.toString())
					}).then(I);
					return _.then.bind(_);
				}
				return C(e, n, [...o, c]);
			},
			set(l, c, _) {
				U(s);
				const [u, d] = g(_);
				return R(e, n, {
					type: "SET",
					path: [...o, c].map((m) => m.toString()),
					value: u
				}, d).then(I);
			},
			apply(l, c, _) {
				U(s);
				const u = o[o.length - 1];
				if (u === Ee) return R(e, n, { type: "ENDPOINT" }).then(I);
				if (u === "bind") return C(e, n, o.slice(0, -1));
				const [d, m] = $(_);
				return R(e, n, {
					type: "APPLY",
					path: o.map((S) => S.toString()),
					argumentList: d
				}, m).then(I);
			},
			construct(l, c) {
				U(s);
				const [_, u] = $(c);
				return R(e, n, {
					type: "CONSTRUCT",
					path: o.map((d) => d.toString()),
					argumentList: _
				}, u).then(I);
			}
		});
		return pe(i, e), i;
	}
	function Te(e) {
		return Array.prototype.concat.apply([], e);
	}
	function $(e) {
		const n = e.map(g);
		return [n.map((o) => o[0]), Te(n.map((o) => o[1]))];
	}
	const q = /* @__PURE__ */ new WeakMap();
	function Me(e, n) {
		return q.set(e, n), e;
	}
	function fe(e) {
		return Object.assign(e, { [G]: !0 });
	}
	function g(e) {
		for (const [n, o] of X) if (o.canHandle(e)) {
			const [r, s] = o.serialize(e);
			return [{
				type: "HANDLER",
				name: n,
				value: r
			}, s];
		}
		return [{
			type: "RAW",
			value: e
		}, q.get(e) || []];
	}
	function I(e) {
		switch (e.type) {
			case "HANDLER": return X.get(e.name).deserialize(e.value);
			case "RAW": return e.value;
		}
	}
	function R(e, n, o, r) {
		return new Promise((s) => {
			const i = Ue();
			n.set(i, s), e.start && e.start(), e.postMessage(Object.assign({ id: i }, o), r);
		});
	}
	function Ue() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	2 * Math.PI;
	Math.PI / 180;
	180 / Math.PI;
	const h = 86400, Ne = 365.25;
	h * 1e3;
	const A = 299792.458;
	A * 60;
	A * 3600;
	A * h;
	const p = A * Ne * h, a = 149597870.7, Q = 648e3 / Math.PI, be = Q * a;
	a / p;
	const Z = be / p;
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
	var O = (e, n, o) => Object.defineProperty(e, n, {
		value: o,
		enumerable: !1,
		writable: !0,
		configurable: !0
	}), ge = Symbol.for("bitecs-relation"), Oe = Symbol.for("bitecs-pairTarget"), Pe = Symbol.for("bitecs-isPairComponent"), y = Symbol.for("bitecs-relationData"), ee = () => {
		let e = {
			pairsMap: /* @__PURE__ */ new Map(),
			initStore: void 0,
			exclusiveRelation: !1,
			autoRemoveSubject: !1,
			onTargetRemoved: void 0
		}, n = (o) => {
			if (o === void 0) throw Error("Relation target is undefined");
			let r = o === "*" ? Le : o;
			if (!e.pairsMap.has(r)) {
				let s = e.initStore ? e.initStore(o) : {};
				O(s, ge, n), O(s, Oe, r), O(s, Pe, !0), e.pairsMap.set(r, s);
			}
			return e.pairsMap.get(r);
		};
		return O(n, y, e), n;
	}, xe = Symbol.for("bitecs-wildcard");
	function De() {
		let e = ee();
		return Object.defineProperty(e, xe, {
			value: !0,
			enumerable: !1,
			writable: !1,
			configurable: !1
		}), e;
	}
	function Ke() {
		let e = Symbol.for("bitecs-global-wildcard");
		return globalThis[e] || (globalThis[e] = De()), globalThis[e];
	}
	var Le = Ke();
	function Ce() {
		return ee();
	}
	function he() {
		let e = Symbol.for("bitecs-global-isa");
		return globalThis[e] || (globalThis[e] = Ce()), globalThis[e];
	}
	he();
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
	}, Fe = 384399 / a, Ge = 421800 / a, ze = 671034 / a, Xe = 1070400 / a, Ve = 1882700 / a, We = 9376 / a, $e = 23463 / a, qe = 185540 / a, Qe = 237948 / a, Ze = 294619 / a, et = 377396 / a, tt = 527108 / a, nt = 1221870 / a, ot = 3560820 / a, rt = 129390 / a, st = 190900 / a, at = 266e3 / a, it = 436300 / a, ct = 583520 / a, ut = 354759 / a, lt = {
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
			semiMajorAxisAu: Fe,
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
			semiMajorAxisAu: Ge,
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
			semiMajorAxisAu: Xe,
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
			semiMajorAxisAu: Ve,
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
			semiMajorAxisAu: We,
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
			semiMajorAxisAu: $e,
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
			semiMajorAxisAu: qe,
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
			semiMajorAxisAu: Qe,
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
			semiMajorAxisAu: Ze,
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
			semiMajorAxisAu: et,
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
			semiMajorAxisAu: tt,
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
			semiMajorAxisAu: nt,
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
			semiMajorAxisAu: rt,
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
			semiMajorAxisAu: st,
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
			semiMajorAxisAu: at,
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
			semiMajorAxisAu: it,
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
			semiMajorAxisAu: ct,
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
			semiMajorAxisAu: ut,
			parentBodyId: t.NEPTUNE
		}
	}, oe = a, re = Q, se = oe * (1e3 / oe);
	100 * se;
	100 / re;
	const ae = Z, k = se * re;
	25 * k;
	function ie(e) {
		return !Number.isFinite(e) || e < 0 ? 0 : e * k;
	}
	const At = 5e4, _t = 2e3, Et = At / ae, St = _t / ae;
	ie(Et);
	ie(St);
	25 * k;
	const B = 1e3;
	1 * B, 1 * A, 10 * A, 100 * A, 1e3 * A, 1e6 * A, 1e9 * A;
	1 * B, 1 * A;
	1e9 * A;
	1 * B;
	const w = 1721545, Y = 3181545;
	function mt(e) {
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
	const ce = Object.fromEntries(Object.entries(lt).map(([e, n]) => [e, mt(n)]));
	t.SUN, t.MERCURY, t.VENUS, t.EARTH, t.MARS, t.JUPITER, t.SATURN, t.URANUS, t.NEPTUNE, t.PLUTO, t.MOON, t.IO, t.EUROPA, t.GANYMEDE, t.CALLISTO, t.PHOBOS, t.DEIMOS, t.MIMAS, t.ENCELADUS, t.TETHYS, t.DIONE, t.RHEA, t.TITAN, t.IAPETUS, t.MIRANDA, t.ARIEL, t.UMBRIEL, t.TITANIA, t.OBERON, t.TRITON;
	Object.freeze({
		close: 1,
		system: A,
		sector: p / 1e3,
		galactic: p
	});
	const ue = 1e3, le = ue / a;
	le * p * Z;
	const It = 695700, Rt = 6378.137;
	function de(e) {
		return !Number.isFinite(e) || e <= 0 ? 0 : e * le;
	}
	de(Rt);
	de(It);
	a / ue;
	23.4392911 * Math.PI / 180;
	(ce[t.EARTH]?.radiusKm ?? 6371) / (ce[t.SUN]?.radiusKm ?? 696340);
	function Tt(e) {
		const n = e.mode, o = n.kind === "visit" ? n.visitId : null;
		let r;
		return n.kind === "watch" || n.kind === "visit" ? r = n.watchId : r = null, {
			viewpoint: e,
			visitId: o,
			watchId: r,
			scenePosition: e.location,
			autoWatch: e.autoWatch,
			solarHeliocentricLayout: e.solarHeliocentricLayout,
			pendingTeleport: e.pendingTeleport,
			pendingOrientationSlew: e.pendingOrientationSlew,
			look: e.look,
			landedTarget: e.landedTarget
		};
	}
	const Mt = 26051303, ft = 86400;
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
	const Ut = 2451545;
	function H(e) {
		return {
			protocolVersion: Mt,
			jd: e?.jd ?? Ut,
			playing: e?.playing ?? !1,
			speed: e?.speed ?? 86400
		};
	}
	Tt({
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
		const o = Ae(n);
		switch (o.type) {
			case "init": {
				const r = H({
					jd: o.jd ?? e.jd,
					playing: o.playing ?? e.playing,
					speed: o.speed ?? e.speed
				});
				return {
					state: r,
					events: [{
						type: "timeState",
						state: r
					}]
				};
			}
			case "seek": {
				if (!Number.isFinite(o.jd)) return {
					state: e,
					events: [{
						type: "error",
						code: "INVALID_JD",
						message: "seek.jd must be finite"
					}]
				};
				const r = o.jd;
				let s = r;
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
				if (r < 1721545 || r > 3181545) {
					const c = e.jd > 1721545 && e.jd < 3181545, _ = e.jd === 1721545 && r < 1721545;
					(c || _) && l.push({
						type: "jdBoundaryReached",
						boundary: r > 3181545 ? "max" : "min"
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
				const r = o.deltaSeconds;
				if (!Number.isFinite(r)) return {
					state: e,
					events: [{
						type: "error",
						code: "INVALID_DELTA",
						message: "step.deltaSeconds must be finite"
					}]
				};
				const s = e.jd + e.speed * r / ft, i = Math.max(w, Math.min(Y, s)), l = {
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
				const r = {
					...e,
					playing: o.playing
				};
				return {
					state: r,
					events: [{
						type: "timeState",
						state: r
					}]
				};
			}
			case "setRate": {
				const r = {
					...e,
					speed: o.speed
				};
				return {
					state: r,
					events: [{
						type: "timeState",
						state: r
					}]
				};
			}
			default: return {
				state: e,
				events: []
			};
		}
	}
	let E = H(), D = null, T = null;
	function J(e) {
		T?.(e);
	}
	function v() {
		D != null && (clearInterval(D), D = null);
	}
	function Nt() {
		v(), D = setInterval(() => {
			const { state: e, events: n } = _e(E, {
				type: "step",
				deltaSeconds: .5
			});
			E = e, J({
				type: "workerTick",
				state: E,
				events: n
			});
		}, 500);
	}
	function F() {
		E.playing ? Nt() : v();
	}
	function bt(e) {
		if (e.type === "init") {
			const n = Ae({
				type: "init",
				jd: e.jd,
				playing: e.playing,
				speed: e.speed
			});
			if (n.type !== "init") return;
			E = H({
				jd: n.jd ?? E.jd,
				playing: n.playing ?? E.playing,
				speed: n.speed ?? E.speed
			}), F(), J({
				type: "workerTick",
				state: E,
				events: []
			});
			return;
		}
		if (e.type === "time") {
			const { state: n, events: o } = _e(E, e.cmd);
			E = n, J({
				type: "workerTick",
				state: E,
				events: o
			}), F();
		}
	}
	L({
		postInbound(e) {
			try {
				bt(e);
			} catch (n) {
				console.error(n);
			}
		},
		subscribe(e) {
			T != null && T !== e && console.warn("[simulationWorker] replacing existing outbound subscriber (double subscribe)"), T = e, F();
		},
		unsubscribe() {
			T = null, v();
		}
	});
})();
