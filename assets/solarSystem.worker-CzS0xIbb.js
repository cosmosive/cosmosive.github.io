(function() {
	var c2 = Object.defineProperty, Xe = (t, e) => {
		let n = {};
		for (var o in t) c2(n, o, {
			get: t[o],
			enumerable: !0
		});
		return e || c2(n, Symbol.toStringTag, { value: "Module" }), n;
	};
	const f = {
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
	}, w1 = [
		f.SUN,
		f.MERCURY,
		f.VENUS,
		f.EARTH,
		f.MARS,
		f.JUPITER,
		f.SATURN,
		f.URANUS,
		f.NEPTUNE,
		f.PLUTO,
		f.MOON,
		f.IO,
		f.EUROPA,
		f.GANYMEDE,
		f.CALLISTO,
		f.PHOBOS,
		f.DEIMOS,
		f.MIMAS,
		f.ENCELADUS,
		f.TETHYS,
		f.DIONE,
		f.RHEA,
		f.TITAN,
		f.IAPETUS,
		f.MIRANDA,
		f.ARIEL,
		f.UMBRIEL,
		f.TITANIA,
		f.OBERON,
		f.TRITON
	];
	2 * Math.PI;
	Math.PI / 180;
	180 / Math.PI;
	const Mt = 86400, We = 365.25;
	Mt * 1e3;
	const i1 = 299792.458;
	i1 * 60;
	i1 * 3600;
	i1 * Mt;
	const a1 = i1 * We * Mt, C = 149597870.7, u2 = 648e3 / Math.PI, Ze = u2 * C;
	C / a1;
	const tn = Ze / a1;
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
	var x1 = (t, e, n) => Object.defineProperty(t, e, {
		value: n,
		enumerable: !1,
		writable: !0,
		configurable: !0
	}), en = Symbol.for("bitecs-relation"), nn = Symbol.for("bitecs-pairTarget"), on = Symbol.for("bitecs-isPairComponent"), c1 = Symbol.for("bitecs-relationData"), l2 = () => {
		let t = {
			pairsMap: /* @__PURE__ */ new Map(),
			initStore: void 0,
			exclusiveRelation: !1,
			autoRemoveSubject: !1,
			onTargetRemoved: void 0
		}, e = (n) => {
			if (n === void 0) throw Error("Relation target is undefined");
			let o = n === "*" ? cn : n;
			if (!t.pairsMap.has(o)) {
				let r = t.initStore ? t.initStore(n) : {};
				x1(r, en, e), x1(r, nn, o), x1(r, on, !0), t.pairsMap.set(o, r);
			}
			return t.pairsMap.get(o);
		};
		return x1(e, c1, t), e;
	}, rn = Symbol.for("bitecs-wildcard");
	function sn() {
		let t = l2();
		return Object.defineProperty(t, rn, {
			value: !0,
			enumerable: !1,
			writable: !1,
			configurable: !1
		}), t;
	}
	function an() {
		let t = Symbol.for("bitecs-global-wildcard");
		return globalThis[t] || (globalThis[t] = sn()), globalThis[t];
	}
	var cn = an();
	function un() {
		return l2();
	}
	function ln() {
		let t = Symbol.for("bitecs-global-isa");
		return globalThis[t] || (globalThis[t] = un()), globalThis[t];
	}
	ln();
	const En = 384399 / C, yn = 421800 / C, mn = 671034 / C, Rn = 1070400 / C, In = 1882700 / C, gn = 9376 / C, wn = 23463 / C, xn = 185540 / C, Tn = 237948 / C, Nn = 294619 / C, Dn = 377396 / C, Un = 527108 / C, vn = 1221870 / C, On = 3560820 / C, Pn = 129390 / C, zn = 190900 / C, bn = 266e3 / C, Ln = 436300 / C, Cn = 583520 / C, kn = 354759 / C, Bn = {
		[f.SUN]: {
			name: "Sun",
			type: "star",
			color: "#f5e042",
			radiusKm: 696340,
			kind: "star",
			textureResolution: 512,
			massKg: 198847e25
		},
		[f.MERCURY]: {
			name: "Mercury",
			type: "planet",
			color: "#9c8a78",
			radiusKm: 2439.7,
			kind: "barren",
			textureResolution: 192,
			massKg: 33011e19,
			semiMajorAxisAu: .387098,
			parentBodyId: f.SUN
		},
		[f.VENUS]: {
			name: "Venus",
			type: "planet",
			color: "#f0e3a0",
			radiusKm: 6051.8,
			kind: "molten",
			textureResolution: 224,
			massKg: 48675e20,
			semiMajorAxisAu: .723332,
			parentBodyId: f.SUN
		},
		[f.EARTH]: {
			name: "Earth",
			type: "planet",
			color: "#4a90d9",
			radiusKm: 6371,
			kind: "oceanic",
			textureResolution: 224,
			features: { axialSpin: "eop" },
			massKg: 597237e19,
			semiMajorAxisAu: 1.0000001,
			parentBodyId: f.SUN
		},
		[f.MARS]: {
			name: "Mars",
			type: "planet",
			color: "#c1440e",
			radiusKm: 3389.5,
			kind: "desert",
			textureResolution: 192,
			massKg: 64171e19,
			semiMajorAxisAu: 1.523679,
			parentBodyId: f.SUN
		},
		[f.JUPITER]: {
			name: "Jupiter",
			type: "planet",
			color: "#c8985a",
			radiusKm: 69911,
			kind: "gasGiant",
			textureResolution: 256,
			geometricAlbedo: .52,
			massKg: 18982e23,
			semiMajorAxisAu: 5.2044,
			parentBodyId: f.SUN
		},
		[f.SATURN]: {
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
			parentBodyId: f.SUN
		},
		[f.URANUS]: {
			name: "Uranus",
			type: "planet",
			color: "#a3d6e0",
			radiusKm: 25362,
			kind: "iceGiant",
			textureResolution: 224,
			geometricAlbedo: .51,
			massKg: 868103e20,
			semiMajorAxisAu: 19.2184,
			parentBodyId: f.SUN
		},
		[f.NEPTUNE]: {
			name: "Neptune",
			type: "planet",
			color: "#4166f5",
			radiusKm: 24622,
			kind: "iceGiant",
			textureResolution: 224,
			geometricAlbedo: .41,
			massKg: 102413e21,
			semiMajorAxisAu: 30.110387,
			parentBodyId: f.SUN
		},
		[f.PLUTO]: {
			name: "Pluto",
			type: "dwarf_planet",
			color: "#a26847",
			radiusKm: 1188.3,
			kind: "barren",
			textureResolution: 192,
			massKg: 13029e18,
			semiMajorAxisAu: 39.482,
			parentBodyId: f.SUN
		},
		[f.MOON]: {
			name: "Moon",
			type: "moon",
			color: "#cccccc",
			radiusKm: 1737,
			kind: "barren",
			textureResolution: 192,
			massKg: 7342e19,
			semiMajorAxisAu: En,
			parentBodyId: f.EARTH
		},
		[f.IO]: {
			name: "Io",
			type: "moon",
			color: "#d9b863",
			radiusKm: 1821.6,
			kind: "barren",
			textureResolution: 192,
			massKg: 89319e18,
			semiMajorAxisAu: yn,
			parentBodyId: f.JUPITER
		},
		[f.EUROPA]: {
			name: "Europa",
			type: "moon",
			color: "#d2c1a0",
			radiusKm: 1560.8,
			kind: "barren",
			textureResolution: 192,
			massKg: 47998e18,
			semiMajorAxisAu: mn,
			parentBodyId: f.JUPITER
		},
		[f.GANYMEDE]: {
			name: "Ganymede",
			type: "moon",
			color: "#8d8278",
			radiusKm: 2634.1,
			kind: "barren",
			textureResolution: 192,
			massKg: 14819e19,
			semiMajorAxisAu: Rn,
			parentBodyId: f.JUPITER
		},
		[f.CALLISTO]: {
			name: "Callisto",
			type: "moon",
			color: "#5f574d",
			radiusKm: 2410.3,
			kind: "barren",
			textureResolution: 192,
			massKg: 10759e19,
			semiMajorAxisAu: In,
			parentBodyId: f.JUPITER
		},
		[f.PHOBOS]: {
			name: "Phobos",
			type: "moon",
			color: "#a08070",
			radiusKm: 11.267,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x25de4dd4a93000,
			semiMajorAxisAu: gn,
			parentBodyId: f.MARS
		},
		[f.DEIMOS]: {
			name: "Deimos",
			type: "moon",
			color: "#9c8878",
			radiusKm: 6.2,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x53e98989e1000,
			semiMajorAxisAu: wn,
			parentBodyId: f.MARS
		},
		[f.MIMAS]: {
			name: "Mimas",
			type: "moon",
			color: "#cfcfd2",
			radiusKm: 198.2,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x20851e4da83b88000,
			semiMajorAxisAu: xn,
			parentBodyId: f.SATURN
		},
		[f.ENCELADUS]: {
			name: "Enceladus",
			type: "moon",
			color: "#e6f0f5",
			radiusKm: 252.1,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x5db1b3cacc73f0000,
			semiMajorAxisAu: Tn,
			parentBodyId: f.SATURN
		},
		[f.TETHYS]: {
			name: "Tethys",
			type: "moon",
			color: "#d8d2c4",
			radiusKm: 531.1,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x2178d3821d702a0000,
			semiMajorAxisAu: Nn,
			parentBodyId: f.SATURN
		},
		[f.DIONE]: {
			name: "Dione",
			type: "moon",
			color: "#c7c2b1",
			radiusKm: 561.4,
			kind: "barren",
			textureResolution: 128,
			massKg: 1095452e15,
			semiMajorAxisAu: Dn,
			parentBodyId: f.SATURN
		},
		[f.RHEA]: {
			name: "Rhea",
			type: "moon",
			color: "#b9b3a3",
			radiusKm: 763.8,
			kind: "barren",
			textureResolution: 128,
			massKg: 2306518e15,
			semiMajorAxisAu: Un,
			parentBodyId: f.SATURN
		},
		[f.TITAN]: {
			name: "Titan",
			type: "moon",
			color: "#d8a45c",
			radiusKm: 2574.7,
			kind: "barren",
			textureResolution: 192,
			massKg: 13452e19,
			semiMajorAxisAu: vn,
			parentBodyId: f.SATURN
		},
		[f.IAPETUS]: {
			name: "Iapetus",
			type: "moon",
			color: "#736556",
			radiusKm: 734.5,
			kind: "barren",
			textureResolution: 128,
			massKg: 1805635e15,
			semiMajorAxisAu: On,
			parentBodyId: f.SATURN
		},
		[f.MIRANDA]: {
			name: "Miranda",
			type: "moon",
			color: "#9f9893",
			radiusKm: 235.8,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x3928bd4d8ca3e0000,
			semiMajorAxisAu: Pn,
			parentBodyId: f.URANUS
		},
		[f.ARIEL]: {
			name: "Ariel",
			type: "moon",
			color: "#b6b0a8",
			radiusKm: 578.9,
			kind: "barren",
			textureResolution: 128,
			massKg: 1353e18,
			semiMajorAxisAu: zn,
			parentBodyId: f.URANUS
		},
		[f.UMBRIEL]: {
			name: "Umbriel",
			type: "moon",
			color: "#6c655c",
			radiusKm: 584.7,
			kind: "barren",
			textureResolution: 128,
			massKg: 1172e18,
			semiMajorAxisAu: bn,
			parentBodyId: f.URANUS
		},
		[f.TITANIA]: {
			name: "Titania",
			type: "moon",
			color: "#a8a097",
			radiusKm: 788.4,
			kind: "barren",
			textureResolution: 128,
			massKg: 3527e18,
			semiMajorAxisAu: Ln,
			parentBodyId: f.URANUS
		},
		[f.OBERON]: {
			name: "Oberon",
			type: "moon",
			color: "#857d70",
			radiusKm: 761.4,
			kind: "barren",
			textureResolution: 128,
			massKg: 3014e18,
			semiMajorAxisAu: Cn,
			parentBodyId: f.URANUS
		},
		[f.TRITON]: {
			name: "Triton",
			type: "moon",
			color: "#d6c8b0",
			radiusKm: 1353.4,
			kind: "barren",
			textureResolution: 192,
			massKg: 2139e19,
			semiMajorAxisAu: kn,
			parentBodyId: f.NEPTUNE
		}
	};
	function Kn(t) {
		return {
			name: t.name,
			type: t.type,
			color: t.color,
			radiusKm: t.radiusKm,
			massKg: t.massKg,
			semiMajorAxisAu: t.semiMajorAxisAu,
			parentBodyId: t.parentBodyId
		};
	}
	Object.fromEntries(Object.entries(Bn).map(([t, e]) => [t, Kn(e)]));
	new TextEncoder();
	new TextDecoder();
	new TextEncoder();
	new TextDecoder("utf-8");
	const f2 = Symbol("Comlink.proxy"), Hn = Symbol("Comlink.endpoint"), Jn = Symbol("Comlink.releaseProxy"), St = Symbol("Comlink.finalizer"), D1 = Symbol("Comlink.thrown"), M2 = (t) => typeof t == "object" && t !== null || typeof t == "function", A2 = new Map([["proxy", {
		canHandle: (t) => M2(t) && t[f2],
		serialize(t) {
			const { port1: e, port2: n } = new MessageChannel();
			return _t(t, e), [n, [n]];
		},
		deserialize(t) {
			return t.start(), Fn(t);
		}
	}], ["throw", {
		canHandle: (t) => M2(t) && D1 in t,
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
	function Vn(t, e) {
		for (const n of t) if (e === n || n === "*" || n instanceof RegExp && n.test(e)) return !0;
		return !1;
	}
	function _t(t, e = globalThis, n = ["*"]) {
		e.addEventListener("message", function o(r) {
			if (!r || !r.data) return;
			if (!Vn(n, r.origin)) {
				console.warn(`Invalid origin '${r.origin}' for comlink proxy`);
				return;
			}
			const { id: s, type: i, path: a } = Object.assign({ path: [] }, r.data), c = (r.data.argumentList || []).map(D0);
			let l;
			try {
				const h = a.slice(0, -1).reduce((M, p) => M[p], t), u = a.reduce((M, p) => M[p], t);
				switch (i) {
					case "GET":
						l = u;
						break;
					case "SET":
						h[a.slice(-1)[0]] = D0(r.data.value), l = !0;
						break;
					case "APPLY":
						l = u.apply(h, c);
						break;
					case "CONSTRUCT":
						l = qn(new u(...c));
						break;
					case "ENDPOINT":
						{
							const { port1: M, port2: p } = new MessageChannel();
							_t(t, p), l = Qn(M, [M]);
						}
						break;
					case "RELEASE":
						l = void 0;
						break;
					default: return;
				}
			} catch (h) {
				l = {
					value: h,
					[D1]: 0
				};
			}
			Promise.resolve(l).catch((h) => ({
				value: h,
				[D1]: 0
			})).then((h) => {
				const [u, M] = P1(h);
				e.postMessage(Object.assign(Object.assign({}, u), { id: s }), M), i === "RELEASE" && (e.removeEventListener("message", o), S2(e), St in t && typeof t[St] == "function" && t[St]());
			}).catch((h) => {
				const [u, M] = P1({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[D1]: 0
				});
				e.postMessage(Object.assign(Object.assign({}, u), { id: s }), M);
			});
		}), e.start && e.start();
	}
	function $n(t) {
		return t.constructor.name === "MessagePort";
	}
	function S2(t) {
		$n(t) && t.close();
	}
	function Fn(t, e) {
		const n = /* @__PURE__ */ new Map();
		return t.addEventListener("message", function(r) {
			const { data: s } = r;
			if (!s || !s.id) return;
			const i = n.get(s.id);
			if (i) try {
				i(s);
			} finally {
				n.delete(s.id);
			}
		}), pt(t, n, [], e);
	}
	function U1(t) {
		if (t) throw new Error("Proxy has been released and is not useable");
	}
	function _2(t) {
		return L0(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			S2(t);
		});
	}
	const v1 = /* @__PURE__ */ new WeakMap(), O1 = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const e = (v1.get(t) || 0) - 1;
		v1.set(t, e), e === 0 && _2(t);
	});
	function Gn(t, e) {
		const n = (v1.get(e) || 0) + 1;
		v1.set(e, n), O1 && O1.register(t, e, t);
	}
	function jn(t) {
		O1 && O1.unregister(t);
	}
	function pt(t, e, n = [], o = function() {}) {
		let r = !1;
		const s = new Proxy(o, {
			get(i, a) {
				if (U1(r), a === Jn) return () => {
					jn(s), _2(t), e.clear(), r = !0;
				};
				if (a === "then") {
					if (n.length === 0) return { then: () => s };
					const c = L0(t, e, {
						type: "GET",
						path: n.map((l) => l.toString())
					}).then(D0);
					return c.then.bind(c);
				}
				return pt(t, e, [...n, a]);
			},
			set(i, a, c) {
				U1(r);
				const [l, h] = P1(c);
				return L0(t, e, {
					type: "SET",
					path: [...n, a].map((u) => u.toString()),
					value: l
				}, h).then(D0);
			},
			apply(i, a, c) {
				U1(r);
				const l = n[n.length - 1];
				if (l === Hn) return L0(t, e, { type: "ENDPOINT" }).then(D0);
				if (l === "bind") return pt(t, e, n.slice(0, -1));
				const [h, u] = p2(c);
				return L0(t, e, {
					type: "APPLY",
					path: n.map((M) => M.toString()),
					argumentList: h
				}, u).then(D0);
			},
			construct(i, a) {
				U1(r);
				const [c, l] = p2(a);
				return L0(t, e, {
					type: "CONSTRUCT",
					path: n.map((h) => h.toString()),
					argumentList: c
				}, l).then(D0);
			}
		});
		return Gn(s, t), s;
	}
	function Yn(t) {
		return Array.prototype.concat.apply([], t);
	}
	function p2(t) {
		const e = t.map(P1);
		return [e.map((n) => n[0]), Yn(e.map((n) => n[1]))];
	}
	const E2 = /* @__PURE__ */ new WeakMap();
	function Qn(t, e) {
		return E2.set(t, e), t;
	}
	function qn(t) {
		return Object.assign(t, { [f2]: !0 });
	}
	function P1(t) {
		for (const [e, n] of A2) if (n.canHandle(t)) {
			const [o, r] = n.serialize(t);
			return [{
				type: "HANDLER",
				name: e,
				value: o
			}, r];
		}
		return [{
			type: "RAW",
			value: t
		}, E2.get(t) || []];
	}
	function D0(t) {
		switch (t.type) {
			case "HANDLER": return A2.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function L0(t, e, n, o) {
		return new Promise((r) => {
			const s = Xn();
			e.set(s, r), t.start && t.start(), t.postMessage(Object.assign({ id: s }, n), o);
		});
	}
	function Xn() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	var u1 = Xe({
		AU_PER_LY: () => y2,
		AngleBetween: () => B1,
		AngleFromSun: () => e1,
		Apsis: () => m1,
		ApsisKind: () => w0,
		AstroTime: () => R0,
		Atmosphere: () => oe,
		AtmosphereInfo: () => ne,
		AxisInfo: () => Zt,
		BackdatePosition: () => X2,
		BaryState: () => $3,
		Body: () => d,
		CALLISTO_RADIUS_KM: () => r3,
		C_AUDAY: () => z1,
		CalcMoonCount: () => z2,
		CombineRotation: () => x0,
		Constellation: () => I4,
		ConstellationInfo: () => Ie,
		CorrectLightTravel: () => q2,
		DEG2RAD: () => _,
		DefineStar: () => p3,
		DeltaT_EspenakMeeus: () => xt,
		DeltaT_JplHorizons: () => y3,
		EUROPA_RADIUS_KM: () => n3,
		EclipseEvent: () => Oe,
		EclipseKind: () => Z,
		Ecliptic: () => M1,
		EclipticCoordinates: () => J2,
		EclipticGeoMoon: () => Y1,
		EclipticLongitude: () => b0,
		Elongation: () => ce,
		ElongationEvent: () => ae,
		Equator: () => f1,
		EquatorFromVector: () => Ft,
		EquatorialCoordinates: () => G1,
		GANYMEDE_RADIUS_KM: () => o3,
		GeoEmbState: () => vt,
		GeoMoon: () => a0,
		GeoMoonState: () => A1,
		GeoVector: () => n0,
		GlobalSolarEclipseInfo: () => De,
		GravitySimulator: () => J4,
		HOUR2RAD: () => Et,
		HelioDistance: () => P0,
		HelioState: () => Z1,
		HelioVector: () => c0,
		Horizon: () => j1,
		HorizonFromVector: () => d4,
		HorizontalCoordinates: () => H2,
		HourAngle: () => o4,
		HourAngleEvent: () => se,
		IO_RADIUS_KM: () => e3,
		IdentityMatrix: () => l4,
		Illumination: () => tt,
		IlluminationInfo: () => Z2,
		InverseRefraction: () => fe,
		InverseRotation: () => o1,
		JUPITER_EQUATORIAL_RADIUS_KM: () => Wn,
		JUPITER_MEAN_RADIUS_KM: () => t3,
		JUPITER_POLAR_RADIUS_KM: () => Zn,
		JupiterMoons: () => J3,
		JupiterMoonsInfo: () => Q2,
		KM_PER_AU: () => z,
		LagrangePoint: () => H4,
		LagrangePointFast: () => $e,
		Libration: () => w3,
		LibrationInfo: () => b2,
		LocalSolarEclipseInfo: () => Pe,
		LunarEclipseInfo: () => ge,
		MakeRotation: () => U3,
		MakeTime: () => y,
		MassProduct: () => wt,
		MoonPhase: () => Vt,
		MoonQuarter: () => te,
		NextGlobalSolarEclipse: () => O4,
		NextLocalSolarEclipse: () => b4,
		NextLunarApsis: () => a4,
		NextLunarEclipse: () => v4,
		NextMoonNode: () => k4,
		NextMoonQuarter: () => Q3,
		NextPlanetApsis: () => u4,
		NextTransit: () => C4,
		NodeEventInfo: () => He,
		NodeEventKind: () => _0,
		Observer: () => Dt,
		ObserverGravity: () => z3,
		ObserverState: () => O3,
		ObserverVector: () => v3,
		PairLongitude: () => Jt,
		Pivot: () => h4,
		PlanetOrbitalPeriod: () => E3,
		RAD2DEG: () => B,
		RAD2HOUR: () => yt,
		Refraction: () => R1,
		RotateState: () => nt,
		RotateVector: () => I1,
		RotationAxis: () => K4,
		RotationMatrix: () => V,
		Rotation_ECL_EQD: () => pe,
		Rotation_ECL_EQJ: () => M4,
		Rotation_ECL_HOR: () => Ee,
		Rotation_ECT_EQD: () => ye,
		Rotation_ECT_EQJ: () => S4,
		Rotation_EQD_ECL: () => _e,
		Rotation_EQD_ECT: () => me,
		Rotation_EQD_EQJ: () => rt,
		Rotation_EQD_HOR: () => jt,
		Rotation_EQJ_ECL: () => Me,
		Rotation_EQJ_ECT: () => A4,
		Rotation_EQJ_EQD: () => ot,
		Rotation_EQJ_GAL: () => E4,
		Rotation_EQJ_HOR: () => _4,
		Rotation_GAL_EQJ: () => y4,
		Rotation_HOR_ECL: () => p4,
		Rotation_HOR_EQD: () => Ae,
		Rotation_HOR_EQJ: () => Se,
		Search: () => $,
		SearchAltitude: () => Z3,
		SearchGlobalSolarEclipse: () => ve,
		SearchHourAngle: () => n4,
		SearchLocalSolarEclipse: () => Ce,
		SearchLunarApsis: () => ue,
		SearchLunarEclipse: () => Ne,
		SearchMaxElongation: () => s4,
		SearchMoonNode: () => Ve,
		SearchMoonPhase: () => y1,
		SearchMoonQuarter: () => ee,
		SearchPeakMagnitude: () => i4,
		SearchPlanetApsis: () => he,
		SearchRelativeLongitude: () => n1,
		SearchRiseSet: () => W3,
		SearchSunLongitude: () => W2,
		SearchTransit: () => Ke,
		SeasonInfo: () => ie,
		Seasons: () => r4,
		SetDeltaTFunction: () => m3,
		SiderealTime: () => k2,
		SphereFromVector: () => Gt,
		Spherical: () => G0,
		StateVector: () => H,
		SunPosition: () => $2,
		TransitInfo: () => ke,
		Vector: () => D,
		VectorFromHorizon: () => f4,
		VectorFromSphere: () => et,
		VectorObserver: () => P3,
		e_tilt: () => I0
	});
	const z1 = 173.1446326846693, z = 149597870.69098932, y2 = 63241.07708807546, _ = .017453292519943295, Et = .26179938779914946, B = 57.29577951308232, yt = 3.819718634205488, Wn = 71492, Zn = 66854, t3 = 69911, e3 = 1821.6, n3 = 1560.8, o3 = 2631.2, r3 = 2410.3, m2 = 365.24217, R2 = /* @__PURE__ */ new Date("2000-01-01T12:00:00Z"), e0 = 2 * Math.PI, m0 = 3600 * (180 / Math.PI), C0 = 484813681109536e-20, I2 = 10800 * 60, s3 = 2 * I2, g2 = 7292115e-11, i3 = I2 / Math.PI, a3 = -.17 - 5 * Math.log10(i3), b1 = 29.530588, L1 = 24 * 3600, c3 = L1 * 1e3, w2 = .9972695717592592, l1 = 695700, x2 = l1 / z, s0 = .996647180302104, k0 = s0 * s0, M0 = 6378.1366, u3 = M0 / z, l3 = M0 * s0, T2 = 6371, h3 = T2 + 88, d3 = 1738.1 / z, X = 1737.4, N2 = 1736, f3 = N2 / z, M3 = 34 / 60, mt = 81.30056, h1 = .0002959122082855911, Rt = 4912547451450812e-26, It = 7243452486162703e-25, d1 = 8887692390113509e-25, gt = 9549535105779258e-26, B0 = 2.825345909524226e-7, K0 = 8.459715185680659e-8, H0 = 1.292024916781969e-8, J0 = 1.524358900784276e-8, A3 = 218869976542597e-26, C1 = d1 / mt;
	function wt(t) {
		switch (t) {
			case d.Sun: return h1;
			case d.Mercury: return Rt;
			case d.Venus: return It;
			case d.Earth: return d1;
			case d.Moon: return C1;
			case d.EMB: return d1 + C1;
			case d.Mars: return gt;
			case d.Jupiter: return B0;
			case d.Saturn: return K0;
			case d.Uranus: return H0;
			case d.Neptune: return J0;
			case d.Pluto: return A3;
			default: throw `Do not know mass product for body: ${t}`;
		}
	}
	function k1(t) {
		if (t !== !0 && t !== !1) throw console.trace(), `Value is not boolean: ${t}`;
		return t;
	}
	function T(t) {
		if (!Number.isFinite(t)) throw console.trace(), `Value is not a finite number: ${t}`;
		return t;
	}
	function V0(t) {
		return t - Math.floor(t);
	}
	function B1(t, e) {
		const n = t.x * t.x + t.y * t.y + t.z * t.z;
		if (Math.abs(n) < 1e-8) throw "AngleBetween: first vector is too short.";
		const o = e.x * e.x + e.y * e.y + e.z * e.z;
		if (Math.abs(o) < 1e-8) throw "AngleBetween: second vector is too short.";
		const r = (t.x * e.x + t.y * e.y + t.z * e.z) / Math.sqrt(n * o);
		return r <= -1 ? 180 : r >= 1 ? 0 : B * Math.acos(r);
	}
	var d;
	(function(t) {
		t.Sun = "Sun", t.Moon = "Moon", t.Mercury = "Mercury", t.Venus = "Venus", t.Earth = "Earth", t.Mars = "Mars", t.Jupiter = "Jupiter", t.Saturn = "Saturn", t.Uranus = "Uranus", t.Neptune = "Neptune", t.Pluto = "Pluto", t.SSB = "SSB", t.EMB = "EMB", t.Star1 = "Star1", t.Star2 = "Star2", t.Star3 = "Star3", t.Star4 = "Star4", t.Star5 = "Star5", t.Star6 = "Star6", t.Star7 = "Star7", t.Star8 = "Star8";
	})(d || (d = {}));
	const S3 = [
		d.Star1,
		d.Star2,
		d.Star3,
		d.Star4,
		d.Star5,
		d.Star6,
		d.Star7,
		d.Star8
	], _3 = [
		{
			ra: 0,
			dec: 0,
			dist: 0
		},
		{
			ra: 0,
			dec: 0,
			dist: 0
		},
		{
			ra: 0,
			dec: 0,
			dist: 0
		},
		{
			ra: 0,
			dec: 0,
			dist: 0
		},
		{
			ra: 0,
			dec: 0,
			dist: 0
		},
		{
			ra: 0,
			dec: 0,
			dist: 0
		},
		{
			ra: 0,
			dec: 0,
			dist: 0
		},
		{
			ra: 0,
			dec: 0,
			dist: 0
		}
	];
	function D2(t) {
		const e = S3.indexOf(t);
		return e >= 0 ? _3[e] : null;
	}
	function K1(t) {
		const e = D2(t);
		return e && e.dist > 0 ? e : null;
	}
	function p3(t, e, n, o) {
		const r = D2(t);
		if (!r) throw `Invalid star body: ${t}`;
		if (T(e), T(n), T(o), e < 0 || e >= 24) throw `Invalid right ascension for star: ${e}`;
		if (n < -90 || n > 90) throw `Invalid declination for star: ${n}`;
		if (o < 1) throw `Invalid star distance: ${o}`;
		r.ra = e, r.dec = n, r.dist = o * y2;
	}
	var L;
	(function(t) {
		t[t.From2000 = 0] = "From2000", t[t.Into2000 = 1] = "Into2000";
	})(L || (L = {}));
	const i0 = {
		Mercury: { OrbitalPeriod: 87.969 },
		Venus: { OrbitalPeriod: 224.701 },
		Earth: { OrbitalPeriod: 365.256 },
		Mars: { OrbitalPeriod: 686.98 },
		Jupiter: { OrbitalPeriod: 4332.589 },
		Saturn: { OrbitalPeriod: 10759.22 },
		Uranus: { OrbitalPeriod: 30685.4 },
		Neptune: { OrbitalPeriod: 60189 },
		Pluto: { OrbitalPeriod: 90560 }
	};
	function E3(t) {
		if (t in i0) return i0[t].OrbitalPeriod;
		throw `Unknown orbital period for: ${t}`;
	}
	const Y = {
		Mercury: [
			[[
				[
					4.40250710144,
					0,
					0
				],
				[
					.40989414977,
					1.48302034195,
					26087.9031415742
				],
				[
					.050462942,
					4.47785489551,
					52175.8062831484
				],
				[
					.00855346844,
					1.16520322459,
					78263.70942472259
				],
				[
					.00165590362,
					4.11969163423,
					104351.61256629678
				],
				[
					.00034561897,
					.77930768443,
					130439.51570787099
				],
				[
					7583476e-11,
					3.71348404924,
					156527.41884944518
				]
			], [
				[
					26087.90313685529,
					0,
					0
				],
				[
					.01131199811,
					6.21874197797,
					26087.9031415742
				],
				[
					.00292242298,
					3.04449355541,
					52175.8062831484
				],
				[
					.00075775081,
					6.08568821653,
					78263.70942472259
				],
				[
					.00019676525,
					2.80965111777,
					104351.61256629678
				]
			]],
			[[
				[
					.11737528961,
					1.98357498767,
					26087.9031415742
				],
				[
					.02388076996,
					5.03738959686,
					52175.8062831484
				],
				[
					.01222839532,
					3.14159265359,
					0
				],
				[
					.0054325181,
					1.79644363964,
					78263.70942472259
				],
				[
					.0012977877,
					4.83232503958,
					104351.61256629678
				],
				[
					.00031866927,
					1.58088495658,
					130439.51570787099
				],
				[
					7963301e-11,
					4.60972126127,
					156527.41884944518
				]
			], [[
				.00274646065,
				3.95008450011,
				26087.9031415742
			], [
				.00099737713,
				3.14159265359,
				0
			]]],
			[[
				[
					.39528271651,
					0,
					0
				],
				[
					.07834131818,
					6.19233722598,
					26087.9031415742
				],
				[
					.00795525558,
					2.95989690104,
					52175.8062831484
				],
				[
					.00121281764,
					6.01064153797,
					78263.70942472259
				],
				[
					.00021921969,
					2.77820093972,
					104351.61256629678
				],
				[
					4354065e-11,
					5.82894543774,
					130439.51570787099
				]
			], [[
				.0021734774,
				4.65617158665,
				26087.9031415742
			], [
				.00044141826,
				1.42385544001,
				52175.8062831484
			]]]
		],
		Venus: [
			[[
				[
					3.17614666774,
					0,
					0
				],
				[
					.01353968419,
					5.59313319619,
					10213.285546211
				],
				[
					.00089891645,
					5.30650047764,
					20426.571092422
				],
				[
					5477194e-11,
					4.41630661466,
					7860.4193924392
				],
				[
					3455741e-11,
					2.6996444782,
					11790.6290886588
				],
				[
					2372061e-11,
					2.99377542079,
					3930.2096962196
				],
				[
					1317168e-11,
					5.18668228402,
					26.2983197998
				],
				[
					1664146e-11,
					4.25018630147,
					1577.3435424478
				],
				[
					1438387e-11,
					4.15745084182,
					9683.5945811164
				],
				[
					1200521e-11,
					6.15357116043,
					30639.856638633
				]
			], [
				[
					10213.28554621638,
					0,
					0
				],
				[
					.00095617813,
					2.4640651111,
					10213.285546211
				],
				[
					7787201e-11,
					.6247848222,
					20426.571092422
				]
			]],
			[[
				[
					.05923638472,
					.26702775812,
					10213.285546211
				],
				[
					.00040107978,
					1.14737178112,
					20426.571092422
				],
				[
					.00032814918,
					3.14159265359,
					0
				]
			], [[
				.00287821243,
				1.88964962838,
				10213.285546211
			]]],
			[[
				[
					.72334820891,
					0,
					0
				],
				[
					.00489824182,
					4.02151831717,
					10213.285546211
				],
				[
					1658058e-11,
					4.90206728031,
					20426.571092422
				],
				[
					1378043e-11,
					1.12846591367,
					11790.6290886588
				],
				[
					1632096e-11,
					2.84548795207,
					7860.4193924392
				],
				[
					498395e-11,
					2.58682193892,
					9683.5945811164
				],
				[
					221985e-11,
					2.01346696541,
					19367.1891622328
				],
				[
					237454e-11,
					2.55136053886,
					15720.8387848784
				]
			], [[
				.00034551041,
				.89198706276,
				10213.285546211
			]]]
		],
		Earth: [
			[
				[
					[
						1.75347045673,
						0,
						0
					],
					[
						.03341656453,
						4.66925680415,
						6283.0758499914
					],
					[
						.00034894275,
						4.62610242189,
						12566.1516999828
					],
					[
						3417572e-11,
						2.82886579754,
						3.523118349
					],
					[
						3497056e-11,
						2.74411783405,
						5753.3848848968
					],
					[
						3135899e-11,
						3.62767041756,
						77713.7714681205
					],
					[
						2676218e-11,
						4.41808345438,
						7860.4193924392
					],
					[
						2342691e-11,
						6.13516214446,
						3930.2096962196
					],
					[
						1273165e-11,
						2.03709657878,
						529.6909650946
					],
					[
						1324294e-11,
						.74246341673,
						11506.7697697936
					],
					[
						901854e-11,
						2.04505446477,
						26.2983197998
					],
					[
						1199167e-11,
						1.10962946234,
						1577.3435424478
					],
					[
						857223e-11,
						3.50849152283,
						398.1490034082
					],
					[
						779786e-11,
						1.17882681962,
						5223.6939198022
					],
					[
						99025e-10,
						5.23268072088,
						5884.9268465832
					],
					[
						753141e-11,
						2.53339052847,
						5507.5532386674
					],
					[
						505267e-11,
						4.58292599973,
						18849.2275499742
					],
					[
						492392e-11,
						4.20505711826,
						775.522611324
					],
					[
						356672e-11,
						2.91954114478,
						.0673103028
					],
					[
						284125e-11,
						1.89869240932,
						796.2980068164
					],
					[
						242879e-11,
						.34481445893,
						5486.777843175
					],
					[
						317087e-11,
						5.84901948512,
						11790.6290886588
					],
					[
						271112e-11,
						.31486255375,
						10977.078804699
					],
					[
						206217e-11,
						4.80646631478,
						2544.3144198834
					],
					[
						205478e-11,
						1.86953770281,
						5573.1428014331
					],
					[
						202318e-11,
						2.45767790232,
						6069.7767545534
					],
					[
						126225e-11,
						1.08295459501,
						20.7753954924
					],
					[
						155516e-11,
						.83306084617,
						213.299095438
					]
				],
				[
					[
						6283.0758499914,
						0,
						0
					],
					[
						.00206058863,
						2.67823455808,
						6283.0758499914
					],
					[
						4303419e-11,
						2.63512233481,
						12566.1516999828
					]
				],
				[[
					8721859e-11,
					1.07253635559,
					6283.0758499914
				]]
			],
			[[], [[
				.00227777722,
				3.4137662053,
				6283.0758499914
			], [
				3805678e-11,
				3.37063423795,
				12566.1516999828
			]]],
			[
				[
					[
						1.00013988784,
						0,
						0
					],
					[
						.01670699632,
						3.09846350258,
						6283.0758499914
					],
					[
						.00013956024,
						3.05524609456,
						12566.1516999828
					],
					[
						308372e-10,
						5.19846674381,
						77713.7714681205
					],
					[
						1628463e-11,
						1.17387558054,
						5753.3848848968
					],
					[
						1575572e-11,
						2.84685214877,
						7860.4193924392
					],
					[
						924799e-11,
						5.45292236722,
						11506.7697697936
					],
					[
						542439e-11,
						4.56409151453,
						3930.2096962196
					],
					[
						47211e-10,
						3.66100022149,
						5884.9268465832
					],
					[
						8.5831e-7,
						1.27079125277,
						161000.6857376741
					],
					[
						5.7056e-7,
						2.01374292245,
						83996.84731811189
					],
					[
						5.5736e-7,
						5.2415979917,
						71430.69561812909
					],
					[
						174844e-11,
						3.01193636733,
						18849.2275499742
					],
					[
						243181e-11,
						4.2734953079,
						11790.6290886588
					]
				],
				[[
					.00103018607,
					1.10748968172,
					6283.0758499914
				], [
					1721238e-11,
					1.06442300386,
					12566.1516999828
				]],
				[[
					4359385e-11,
					5.78455133808,
					6283.0758499914
				]]
			]
		],
		Mars: [
			[
				[
					[
						6.20347711581,
						0,
						0
					],
					[
						.18656368093,
						5.0503710027,
						3340.6124266998
					],
					[
						.01108216816,
						5.40099836344,
						6681.2248533996
					],
					[
						.00091798406,
						5.75478744667,
						10021.8372800994
					],
					[
						.00027744987,
						5.97049513147,
						3.523118349
					],
					[
						.00010610235,
						2.93958560338,
						2281.2304965106
					],
					[
						.00012315897,
						.84956094002,
						2810.9214616052
					],
					[
						8926784e-11,
						4.15697846427,
						.0172536522
					],
					[
						8715691e-11,
						6.11005153139,
						13362.4497067992
					],
					[
						6797556e-11,
						.36462229657,
						398.1490034082
					],
					[
						7774872e-11,
						3.33968761376,
						5621.8429232104
					],
					[
						3575078e-11,
						1.6618650571,
						2544.3144198834
					],
					[
						4161108e-11,
						.22814971327,
						2942.4634232916
					],
					[
						3075252e-11,
						.85696614132,
						191.4482661116
					],
					[
						2628117e-11,
						.64806124465,
						3337.0893083508
					],
					[
						2937546e-11,
						6.07893711402,
						.0673103028
					],
					[
						2389414e-11,
						5.03896442664,
						796.2980068164
					],
					[
						2579844e-11,
						.02996736156,
						3344.1355450488
					],
					[
						1528141e-11,
						1.14979301996,
						6151.533888305
					],
					[
						1798806e-11,
						.65634057445,
						529.6909650946
					],
					[
						1264357e-11,
						3.62275122593,
						5092.1519581158
					],
					[
						1286228e-11,
						3.06796065034,
						2146.1654164752
					],
					[
						1546404e-11,
						2.91579701718,
						1751.539531416
					],
					[
						1024902e-11,
						3.69334099279,
						8962.4553499102
					],
					[
						891566e-11,
						.18293837498,
						16703.062133499
					],
					[
						858759e-11,
						2.4009381194,
						2914.0142358238
					],
					[
						832715e-11,
						2.46418619474,
						3340.5951730476
					],
					[
						83272e-10,
						4.49495782139,
						3340.629680352
					],
					[
						712902e-11,
						3.66335473479,
						1059.3819301892
					],
					[
						748723e-11,
						3.82248614017,
						155.4203994342
					],
					[
						723861e-11,
						.67497311481,
						3738.761430108
					],
					[
						635548e-11,
						2.92182225127,
						8432.7643848156
					],
					[
						655162e-11,
						.48864064125,
						3127.3133312618
					],
					[
						550474e-11,
						3.81001042328,
						.9803210682
					],
					[
						55275e-10,
						4.47479317037,
						1748.016413067
					],
					[
						425966e-11,
						.55364317304,
						6283.0758499914
					],
					[
						415131e-11,
						.49662285038,
						213.299095438
					],
					[
						472167e-11,
						3.62547124025,
						1194.4470102246
					],
					[
						306551e-11,
						.38052848348,
						6684.7479717486
					],
					[
						312141e-11,
						.99853944405,
						6677.7017350506
					],
					[
						293198e-11,
						4.22131299634,
						20.7753954924
					],
					[
						302375e-11,
						4.48618007156,
						3532.0606928114
					],
					[
						274027e-11,
						.54222167059,
						3340.545116397
					],
					[
						281079e-11,
						5.88163521788,
						1349.8674096588
					],
					[
						231183e-11,
						1.28242156993,
						3870.3033917944
					],
					[
						283602e-11,
						5.7688543494,
						3149.1641605882
					],
					[
						236117e-11,
						5.75503217933,
						3333.498879699
					],
					[
						274033e-11,
						.13372524985,
						3340.6797370026
					],
					[
						299395e-11,
						2.78323740866,
						6254.6266625236
					]
				],
				[
					[
						3340.61242700512,
						0,
						0
					],
					[
						.01457554523,
						3.60433733236,
						3340.6124266998
					],
					[
						.00168414711,
						3.92318567804,
						6681.2248533996
					],
					[
						.00020622975,
						4.26108844583,
						10021.8372800994
					],
					[
						3452392e-11,
						4.7321039319,
						3.523118349
					],
					[
						2586332e-11,
						4.60670058555,
						13362.4497067992
					],
					[
						841535e-11,
						4.45864030426,
						2281.2304965106
					]
				],
				[[
					.00058152577,
					2.04961712429,
					3340.6124266998
				], [
					.00013459579,
					2.45738706163,
					6681.2248533996
				]]
			],
			[[
				[
					.03197134986,
					3.76832042431,
					3340.6124266998
				],
				[
					.00298033234,
					4.10616996305,
					6681.2248533996
				],
				[
					.00289104742,
					0,
					0
				],
				[
					.00031365539,
					4.4465105309,
					10021.8372800994
				],
				[
					34841e-9,
					4.7881254926,
					13362.4497067992
				]
			], [
				[
					.00217310991,
					6.04472194776,
					3340.6124266998
				],
				[
					.00020976948,
					3.14159265359,
					0
				],
				[
					.00012834709,
					1.60810667915,
					6681.2248533996
				]
			]],
			[
				[
					[
						1.53033488271,
						0,
						0
					],
					[
						.1418495316,
						3.47971283528,
						3340.6124266998
					],
					[
						.00660776362,
						3.81783443019,
						6681.2248533996
					],
					[
						.00046179117,
						4.15595316782,
						10021.8372800994
					],
					[
						8109733e-11,
						5.55958416318,
						2810.9214616052
					],
					[
						7485318e-11,
						1.77239078402,
						5621.8429232104
					],
					[
						5523191e-11,
						1.3643630377,
						2281.2304965106
					],
					[
						382516e-10,
						4.49407183687,
						13362.4497067992
					],
					[
						2306537e-11,
						.09081579001,
						2544.3144198834
					],
					[
						1999396e-11,
						5.36059617709,
						3337.0893083508
					],
					[
						2484394e-11,
						4.9254563992,
						2942.4634232916
					],
					[
						1960195e-11,
						4.74249437639,
						3344.1355450488
					],
					[
						1167119e-11,
						2.11260868341,
						5092.1519581158
					],
					[
						1102816e-11,
						5.00908403998,
						398.1490034082
					],
					[
						899066e-11,
						4.40791133207,
						529.6909650946
					],
					[
						992252e-11,
						5.83861961952,
						6151.533888305
					],
					[
						807354e-11,
						2.10217065501,
						1059.3819301892
					],
					[
						797915e-11,
						3.44839203899,
						796.2980068164
					],
					[
						740975e-11,
						1.49906336885,
						2146.1654164752
					]
				],
				[
					[
						.01107433345,
						2.03250524857,
						3340.6124266998
					],
					[
						.00103175887,
						2.37071847807,
						6681.2248533996
					],
					[
						128772e-9,
						0,
						0
					],
					[
						.0001081588,
						2.70888095665,
						10021.8372800994
					]
				],
				[[
					.00044242249,
					.47930604954,
					3340.6124266998
				], [
					8138042e-11,
					.86998389204,
					6681.2248533996
				]]
			]
		],
		Jupiter: [
			[
				[
					[
						.59954691494,
						0,
						0
					],
					[
						.09695898719,
						5.06191793158,
						529.6909650946
					],
					[
						.00573610142,
						1.44406205629,
						7.1135470008
					],
					[
						.00306389205,
						5.41734730184,
						1059.3819301892
					],
					[
						.00097178296,
						4.14264726552,
						632.7837393132
					],
					[
						.00072903078,
						3.64042916389,
						522.5774180938
					],
					[
						.00064263975,
						3.41145165351,
						103.0927742186
					],
					[
						.00039806064,
						2.29376740788,
						419.4846438752
					],
					[
						.00038857767,
						1.27231755835,
						316.3918696566
					],
					[
						.00027964629,
						1.7845459182,
						536.8045120954
					],
					[
						.0001358973,
						5.7748104079,
						1589.0728952838
					],
					[
						8246349e-11,
						3.5822792584,
						206.1855484372
					],
					[
						8768704e-11,
						3.63000308199,
						949.1756089698
					],
					[
						7368042e-11,
						5.0810119427,
						735.8765135318
					],
					[
						626315e-10,
						.02497628807,
						213.299095438
					],
					[
						6114062e-11,
						4.51319998626,
						1162.4747044078
					],
					[
						4905396e-11,
						1.32084470588,
						110.2063212194
					],
					[
						5305285e-11,
						1.30671216791,
						14.2270940016
					],
					[
						5305441e-11,
						4.18625634012,
						1052.2683831884
					],
					[
						4647248e-11,
						4.69958103684,
						3.9321532631
					],
					[
						3045023e-11,
						4.31676431084,
						426.598190876
					],
					[
						2609999e-11,
						1.56667394063,
						846.0828347512
					],
					[
						2028191e-11,
						1.06376530715,
						3.1813937377
					],
					[
						1764763e-11,
						2.14148655117,
						1066.49547719
					],
					[
						1722972e-11,
						3.88036268267,
						1265.5674786264
					],
					[
						1920945e-11,
						.97168196472,
						639.897286314
					],
					[
						1633223e-11,
						3.58201833555,
						515.463871093
					],
					[
						1431999e-11,
						4.29685556046,
						625.6701923124
					],
					[
						973272e-11,
						4.09764549134,
						95.9792272178
					]
				],
				[
					[
						529.69096508814,
						0,
						0
					],
					[
						.00489503243,
						4.2208293947,
						529.6909650946
					],
					[
						.00228917222,
						6.02646855621,
						7.1135470008
					],
					[
						.00030099479,
						4.54540782858,
						1059.3819301892
					],
					[
						.0002072092,
						5.45943156902,
						522.5774180938
					],
					[
						.00012103653,
						.16994816098,
						536.8045120954
					],
					[
						6067987e-11,
						4.42422292017,
						103.0927742186
					],
					[
						5433968e-11,
						3.98480737746,
						419.4846438752
					],
					[
						4237744e-11,
						5.89008707199,
						14.2270940016
					]
				],
				[
					[
						.00047233601,
						4.32148536482,
						7.1135470008
					],
					[
						.00030649436,
						2.929777887,
						529.6909650946
					],
					[
						.00014837605,
						3.14159265359,
						0
					]
				]
			],
			[[
				[
					.02268615702,
					3.55852606721,
					529.6909650946
				],
				[
					.00109971634,
					3.90809347197,
					1059.3819301892
				],
				[
					.00110090358,
					0,
					0
				],
				[
					8101428e-11,
					3.60509572885,
					522.5774180938
				],
				[
					6043996e-11,
					4.25883108339,
					1589.0728952838
				],
				[
					6437782e-11,
					.30627119215,
					536.8045120954
				]
			], [[
				.00078203446,
				1.52377859742,
				529.6909650946
			]]],
			[[
				[
					5.20887429326,
					0,
					0
				],
				[
					.25209327119,
					3.49108639871,
					529.6909650946
				],
				[
					.00610599976,
					3.84115365948,
					1059.3819301892
				],
				[
					.00282029458,
					2.57419881293,
					632.7837393132
				],
				[
					.00187647346,
					2.07590383214,
					522.5774180938
				],
				[
					.00086792905,
					.71001145545,
					419.4846438752
				],
				[
					.00072062974,
					.21465724607,
					536.8045120954
				],
				[
					.00065517248,
					5.9799588479,
					316.3918696566
				],
				[
					.00029134542,
					1.67759379655,
					103.0927742186
				],
				[
					.00030135335,
					2.16132003734,
					949.1756089698
				],
				[
					.00023453271,
					3.54023522184,
					735.8765135318
				],
				[
					.00022283743,
					4.19362594399,
					1589.0728952838
				],
				[
					.00023947298,
					.2745803748,
					7.1135470008
				],
				[
					.00013032614,
					2.96042965363,
					1162.4747044078
				],
				[
					970336e-10,
					1.90669633585,
					206.1855484372
				],
				[
					.00012749023,
					2.71550286592,
					1052.2683831884
				],
				[
					7057931e-11,
					2.18184839926,
					1265.5674786264
				],
				[
					6137703e-11,
					6.26418240033,
					846.0828347512
				],
				[
					2616976e-11,
					2.00994012876,
					1581.959348283
				]
			], [
				[
					.0127180152,
					2.64937512894,
					529.6909650946
				],
				[
					.00061661816,
					3.00076460387,
					1059.3819301892
				],
				[
					.00053443713,
					3.89717383175,
					522.5774180938
				],
				[
					.00031185171,
					4.88276958012,
					536.8045120954
				],
				[
					.00041390269,
					0,
					0
				]
			]]
		],
		Saturn: [
			[
				[
					[
						.87401354025,
						0,
						0
					],
					[
						.11107659762,
						3.96205090159,
						213.299095438
					],
					[
						.01414150957,
						4.58581516874,
						7.1135470008
					],
					[
						.00398379389,
						.52112032699,
						206.1855484372
					],
					[
						.00350769243,
						3.30329907896,
						426.598190876
					],
					[
						.00206816305,
						.24658372002,
						103.0927742186
					],
					[
						792713e-9,
						3.84007056878,
						220.4126424388
					],
					[
						.00023990355,
						4.66976924553,
						110.2063212194
					],
					[
						.00016573588,
						.43719228296,
						419.4846438752
					],
					[
						.00014906995,
						5.76903183869,
						316.3918696566
					],
					[
						.0001582029,
						.93809155235,
						632.7837393132
					],
					[
						.00014609559,
						1.56518472,
						3.9321532631
					],
					[
						.00013160301,
						4.44891291899,
						14.2270940016
					],
					[
						.00015053543,
						2.71669915667,
						639.897286314
					],
					[
						.00013005299,
						5.98119023644,
						11.0457002639
					],
					[
						.00010725067,
						3.12939523827,
						202.2533951741
					],
					[
						5863206e-11,
						.23656938524,
						529.6909650946
					],
					[
						5227757e-11,
						4.20783365759,
						3.1813937377
					],
					[
						6126317e-11,
						1.76328667907,
						277.0349937414
					],
					[
						5019687e-11,
						3.17787728405,
						433.7117378768
					],
					[
						459255e-10,
						.61977744975,
						199.0720014364
					],
					[
						4005867e-11,
						2.24479718502,
						63.7358983034
					],
					[
						2953796e-11,
						.98280366998,
						95.9792272178
					],
					[
						387367e-10,
						3.22283226966,
						138.5174968707
					],
					[
						2461186e-11,
						2.03163875071,
						735.8765135318
					],
					[
						3269484e-11,
						.77492638211,
						949.1756089698
					],
					[
						1758145e-11,
						3.2658010994,
						522.5774180938
					],
					[
						1640172e-11,
						5.5050445305,
						846.0828347512
					],
					[
						1391327e-11,
						4.02333150505,
						323.5054166574
					],
					[
						1580648e-11,
						4.37265307169,
						309.2783226558
					],
					[
						1123498e-11,
						2.83726798446,
						415.5524906121
					],
					[
						1017275e-11,
						3.71700135395,
						227.5261894396
					],
					[
						848642e-11,
						3.1915017083,
						209.3669421749
					]
				],
				[
					[
						213.2990952169,
						0,
						0
					],
					[
						.01297370862,
						1.82834923978,
						213.299095438
					],
					[
						.00564345393,
						2.88499717272,
						7.1135470008
					],
					[
						.00093734369,
						1.06311793502,
						426.598190876
					],
					[
						.00107674962,
						2.27769131009,
						206.1855484372
					],
					[
						.00040244455,
						2.04108104671,
						220.4126424388
					],
					[
						.00019941774,
						1.2795439047,
						103.0927742186
					],
					[
						.00010511678,
						2.7488034213,
						14.2270940016
					],
					[
						6416106e-11,
						.38238295041,
						639.897286314
					],
					[
						4848994e-11,
						2.43037610229,
						419.4846438752
					],
					[
						4056892e-11,
						2.92133209468,
						110.2063212194
					],
					[
						3768635e-11,
						3.6496533078,
						3.9321532631
					]
				],
				[
					[
						.0011644133,
						1.17988132879,
						7.1135470008
					],
					[
						.00091841837,
						.0732519584,
						213.299095438
					],
					[
						.00036661728,
						0,
						0
					],
					[
						.00015274496,
						4.06493179167,
						206.1855484372
					]
				]
			],
			[[
				[
					.04330678039,
					3.60284428399,
					213.299095438
				],
				[
					.00240348302,
					2.85238489373,
					426.598190876
				],
				[
					.00084745939,
					0,
					0
				],
				[
					.00030863357,
					3.48441504555,
					220.4126424388
				],
				[
					.00034116062,
					.57297307557,
					206.1855484372
				],
				[
					.0001473407,
					2.11846596715,
					639.897286314
				],
				[
					9916667e-11,
					5.79003188904,
					419.4846438752
				],
				[
					6993564e-11,
					4.7360468972,
					7.1135470008
				],
				[
					4807588e-11,
					5.43305312061,
					316.3918696566
				]
			], [
				[
					.00198927992,
					4.93901017903,
					213.299095438
				],
				[
					.00036947916,
					3.14159265359,
					0
				],
				[
					.00017966989,
					.5197943111,
					426.598190876
				]
			]],
			[
				[
					[
						9.55758135486,
						0,
						0
					],
					[
						.52921382865,
						2.39226219573,
						213.299095438
					],
					[
						.01873679867,
						5.2354960466,
						206.1855484372
					],
					[
						.01464663929,
						1.64763042902,
						426.598190876
					],
					[
						.00821891141,
						5.93520042303,
						316.3918696566
					],
					[
						.00547506923,
						5.0153261898,
						103.0927742186
					],
					[
						.0037168465,
						2.27114821115,
						220.4126424388
					],
					[
						.00361778765,
						3.13904301847,
						7.1135470008
					],
					[
						.00140617506,
						5.70406606781,
						632.7837393132
					],
					[
						.00108974848,
						3.29313390175,
						110.2063212194
					],
					[
						.00069006962,
						5.94099540992,
						419.4846438752
					],
					[
						.00061053367,
						.94037691801,
						639.897286314
					],
					[
						.00048913294,
						1.55733638681,
						202.2533951741
					],
					[
						.00034143772,
						.19519102597,
						277.0349937414
					],
					[
						.00032401773,
						5.47084567016,
						949.1756089698
					],
					[
						.00020936596,
						.46349251129,
						735.8765135318
					],
					[
						9796004e-11,
						5.20477537945,
						1265.5674786264
					],
					[
						.00011993338,
						5.98050967385,
						846.0828347512
					],
					[
						208393e-9,
						1.52102476129,
						433.7117378768
					],
					[
						.00015298404,
						3.0594381494,
						529.6909650946
					],
					[
						6465823e-11,
						.17732249942,
						1052.2683831884
					],
					[
						.00011380257,
						1.7310542704,
						522.5774180938
					],
					[
						3419618e-11,
						4.94550542171,
						1581.959348283
					]
				],
				[
					[
						.0618298134,
						.2584351148,
						213.299095438
					],
					[
						.00506577242,
						.71114625261,
						206.1855484372
					],
					[
						.00341394029,
						5.79635741658,
						426.598190876
					],
					[
						.00188491195,
						.47215589652,
						220.4126424388
					],
					[
						.00186261486,
						3.14159265359,
						0
					],
					[
						.00143891146,
						1.40744822888,
						7.1135470008
					]
				],
				[[
					.00436902572,
					4.78671677509,
					213.299095438
				]]
			]
		],
		Uranus: [
			[[
				[
					5.48129294297,
					0,
					0
				],
				[
					.09260408234,
					.89106421507,
					74.7815985673
				],
				[
					.01504247898,
					3.6271926092,
					1.4844727083
				],
				[
					.00365981674,
					1.89962179044,
					73.297125859
				],
				[
					.00272328168,
					3.35823706307,
					149.5631971346
				],
				[
					.00070328461,
					5.39254450063,
					63.7358983034
				],
				[
					.00068892678,
					6.09292483287,
					76.2660712756
				],
				[
					.00061998615,
					2.26952066061,
					2.9689454166
				],
				[
					.00061950719,
					2.85098872691,
					11.0457002639
				],
				[
					.0002646877,
					3.14152083966,
					71.8126531507
				],
				[
					.00025710476,
					6.11379840493,
					454.9093665273
				],
				[
					.0002107885,
					4.36059339067,
					148.0787244263
				],
				[
					.00017818647,
					1.74436930289,
					36.6485629295
				],
				[
					.00014613507,
					4.73732166022,
					3.9321532631
				],
				[
					.00011162509,
					5.8268179635,
					224.3447957019
				],
				[
					.0001099791,
					.48865004018,
					138.5174968707
				],
				[
					9527478e-11,
					2.95516862826,
					35.1640902212
				],
				[
					7545601e-11,
					5.236265824,
					109.9456887885
				],
				[
					4220241e-11,
					3.23328220918,
					70.8494453042
				],
				[
					40519e-9,
					2.277550173,
					151.0476698429
				],
				[
					3354596e-11,
					1.0654900738,
					4.4534181249
				],
				[
					2926718e-11,
					4.62903718891,
					9.5612275556
				],
				[
					349034e-10,
					5.48306144511,
					146.594251718
				],
				[
					3144069e-11,
					4.75199570434,
					77.7505439839
				],
				[
					2922333e-11,
					5.35235361027,
					85.8272988312
				],
				[
					2272788e-11,
					4.36600400036,
					70.3281804424
				],
				[
					2051219e-11,
					1.51773566586,
					.1118745846
				],
				[
					2148602e-11,
					.60745949945,
					38.1330356378
				],
				[
					1991643e-11,
					4.92437588682,
					277.0349937414
				],
				[
					1376226e-11,
					2.04283539351,
					65.2203710117
				],
				[
					1666902e-11,
					3.62744066769,
					380.12776796
				],
				[
					1284107e-11,
					3.11347961505,
					202.2533951741
				],
				[
					1150429e-11,
					.93343589092,
					3.1813937377
				],
				[
					1533221e-11,
					2.58594681212,
					52.6901980395
				],
				[
					1281604e-11,
					.54271272721,
					222.8603229936
				],
				[
					1372139e-11,
					4.19641530878,
					111.4301614968
				],
				[
					1221029e-11,
					.1990065003,
					108.4612160802
				],
				[
					946181e-11,
					1.19253165736,
					127.4717966068
				],
				[
					1150989e-11,
					4.17898916639,
					33.6796175129
				]
			], [
				[
					74.7815986091,
					0,
					0
				],
				[
					.00154332863,
					5.24158770553,
					74.7815985673
				],
				[
					.00024456474,
					1.71260334156,
					1.4844727083
				],
				[
					9258442e-11,
					.4282973235,
					11.0457002639
				],
				[
					8265977e-11,
					1.50218091379,
					63.7358983034
				],
				[
					915016e-10,
					1.41213765216,
					149.5631971346
				]
			]],
			[[
				[
					.01346277648,
					2.61877810547,
					74.7815985673
				],
				[
					623414e-9,
					5.08111189648,
					149.5631971346
				],
				[
					.00061601196,
					3.14159265359,
					0
				],
				[
					9963722e-11,
					1.61603805646,
					76.2660712756
				],
				[
					992616e-10,
					.57630380333,
					73.297125859
				]
			], [[
				.00034101978,
				.01321929936,
				74.7815985673
			]]],
			[[
				[
					19.21264847206,
					0,
					0
				],
				[
					.88784984413,
					5.60377527014,
					74.7815985673
				],
				[
					.03440836062,
					.32836099706,
					73.297125859
				],
				[
					.0205565386,
					1.7829515933,
					149.5631971346
				],
				[
					.0064932241,
					4.52247285911,
					76.2660712756
				],
				[
					.00602247865,
					3.86003823674,
					63.7358983034
				],
				[
					.00496404167,
					1.40139935333,
					454.9093665273
				],
				[
					.00338525369,
					1.58002770318,
					138.5174968707
				],
				[
					.00243509114,
					1.57086606044,
					71.8126531507
				],
				[
					.00190522303,
					1.99809394714,
					1.4844727083
				],
				[
					.00161858838,
					2.79137786799,
					148.0787244263
				],
				[
					.00143706183,
					1.38368544947,
					11.0457002639
				],
				[
					.00093192405,
					.17437220467,
					36.6485629295
				],
				[
					.00071424548,
					4.24509236074,
					224.3447957019
				],
				[
					.00089806014,
					3.66105364565,
					109.9456887885
				],
				[
					.00039009723,
					1.66971401684,
					70.8494453042
				],
				[
					.00046677296,
					1.39976401694,
					35.1640902212
				],
				[
					.00039025624,
					3.36234773834,
					277.0349937414
				],
				[
					.00036755274,
					3.88649278513,
					146.594251718
				],
				[
					.00030348723,
					.70100838798,
					151.0476698429
				],
				[
					.00029156413,
					3.180563367,
					77.7505439839
				],
				[
					.00022637073,
					.72518687029,
					529.6909650946
				],
				[
					.00011959076,
					1.7504339214,
					984.6003316219
				],
				[
					.00025620756,
					5.25656086672,
					380.12776796
				]
			], [[
				.01479896629,
				3.67205697578,
				74.7815985673
			]]]
		],
		Neptune: [
			[[
				[
					5.31188633046,
					0,
					0
				],
				[
					.0179847553,
					2.9010127389,
					38.1330356378
				],
				[
					.01019727652,
					.48580922867,
					1.4844727083
				],
				[
					.00124531845,
					4.83008090676,
					36.6485629295
				],
				[
					.00042064466,
					5.41054993053,
					2.9689454166
				],
				[
					.00037714584,
					6.09221808686,
					35.1640902212
				],
				[
					.00033784738,
					1.24488874087,
					76.2660712756
				],
				[
					.00016482741,
					7727998e-11,
					491.5579294568
				],
				[
					9198584e-11,
					4.93747051954,
					39.6175083461
				],
				[
					899425e-10,
					.27462171806,
					175.1660598002
				]
			], [
				[
					38.13303563957,
					0,
					0
				],
				[
					.00016604172,
					4.86323329249,
					1.4844727083
				],
				[
					.00015744045,
					2.27887427527,
					38.1330356378
				]
			]],
			[[
				[
					.03088622933,
					1.44104372644,
					38.1330356378
				],
				[
					.00027780087,
					5.91271884599,
					76.2660712756
				],
				[
					.00027623609,
					0,
					0
				],
				[
					.00015355489,
					2.52123799551,
					36.6485629295
				],
				[
					.00015448133,
					3.50877079215,
					39.6175083461
				]
			]],
			[[
				[
					30.07013205828,
					0,
					0
				],
				[
					.27062259632,
					1.32999459377,
					38.1330356378
				],
				[
					.01691764014,
					3.25186135653,
					36.6485629295
				],
				[
					.00807830553,
					5.18592878704,
					1.4844727083
				],
				[
					.0053776051,
					4.52113935896,
					35.1640902212
				],
				[
					.00495725141,
					1.5710564165,
					491.5579294568
				],
				[
					.00274571975,
					1.84552258866,
					175.1660598002
				],
				[
					.0001201232,
					1.92059384991,
					1021.2488945514
				],
				[
					.00121801746,
					5.79754470298,
					76.2660712756
				],
				[
					.00100896068,
					.3770272493,
					73.297125859
				],
				[
					.00135134092,
					3.37220609835,
					39.6175083461
				],
				[
					7571796e-11,
					1.07149207335,
					388.4651552382
				]
			]]
		]
	};
	function xt(t) {
		var e, n, o, r, s, i, a;
		const c = 2e3 + (t - 14) / m2;
		return c < -500 ? (e = (c - 1820) / 100, -20 + 32 * e * e) : c < 500 ? (e = c / 100, n = e * e, o = e * n, r = n * n, s = n * o, i = o * o, 10583.6 - 1014.41 * e + 33.78311 * n - 5.952053 * o - .1798452 * r + .022174192 * s + .0090316521 * i) : c < 1600 ? (e = (c - 1e3) / 100, n = e * e, o = e * n, r = n * n, s = n * o, i = o * o, 1574.2 - 556.01 * e + 71.23472 * n + .319781 * o - .8503463 * r - .005050998 * s + .0083572073 * i) : c < 1700 ? (e = c - 1600, n = e * e, o = e * n, 120 - .9808 * e - .01532 * n + o / 7129) : c < 1800 ? (e = c - 1700, n = e * e, o = e * n, r = n * n, 8.83 + .1603 * e - .0059285 * n + 13336e-8 * o - r / 1174e3) : c < 1860 ? (e = c - 1800, n = e * e, o = e * n, r = n * n, s = n * o, i = o * o, a = o * r, 13.72 - .332447 * e + .0068612 * n + .0041116 * o - 37436e-8 * r + 121272e-10 * s - 1.699e-7 * i + 875e-12 * a) : c < 1900 ? (e = c - 1860, n = e * e, o = e * n, r = n * n, s = n * o, 7.62 + .5737 * e - .251754 * n + .01680668 * o - .0004473624 * r + s / 233174) : c < 1920 ? (e = c - 1900, n = e * e, o = e * n, r = n * n, -2.79 + 1.494119 * e - .0598939 * n + .0061966 * o - 197e-6 * r) : c < 1941 ? (e = c - 1920, n = e * e, o = e * n, 21.2 + .84493 * e - .0761 * n + .0020936 * o) : c < 1961 ? (e = c - 1950, n = e * e, o = e * n, 29.07 + .407 * e - n / 233 + o / 2547) : c < 1986 ? (e = c - 1975, n = e * e, o = e * n, 45.45 + 1.067 * e - n / 260 - o / 718) : c < 2005 ? (e = c - 2e3, n = e * e, o = e * n, r = n * n, s = n * o, 63.86 + .3345 * e - .060374 * n + .0017275 * o + 651814e-9 * r + 2373599e-11 * s) : c < 2050 ? (e = c - 2e3, 62.92 + .32217 * e + .005589 * e * e) : c < 2150 ? (e = (c - 1820) / 100, -20 + 32 * e * e - .5628 * (2150 - c)) : (e = (c - 1820) / 100, -20 + 32 * e * e);
	}
	function y3(t) {
		return xt(Math.min(t, 17 * m2));
	}
	let U2 = xt;
	function m3(t) {
		U2 = t;
	}
	function v2(t) {
		return t + U2(t) / 86400;
	}
	var R0 = class ft {
		constructor(e) {
			if (e instanceof ft) {
				this.date = e.date, this.ut = e.ut, this.tt = e.tt;
				return;
			}
			const n = 1e3 * 3600 * 24;
			if (e instanceof Date && Number.isFinite(e.getTime())) {
				this.date = e, this.ut = (e.getTime() - R2.getTime()) / n, this.tt = v2(this.ut);
				return;
			}
			if (Number.isFinite(e)) {
				this.date = new Date(R2.getTime() + e * n), this.ut = e, this.tt = v2(this.ut);
				return;
			}
			throw "Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date.";
		}
		static FromTerrestrialTime(e) {
			let n = new ft(e);
			for (;;) {
				const o = e - n.tt;
				if (Math.abs(o) < 1e-12) return n;
				n = n.AddDays(o);
			}
		}
		toString() {
			return this.date.toISOString();
		}
		AddDays(e) {
			return new ft(this.ut + e);
		}
	};
	function R3(t, e, n) {
		return new R0(t.ut + n * (e.ut - t.ut));
	}
	function y(t) {
		return t instanceof R0 ? t : new R0(t);
	}
	function I3(t) {
		function e(M) {
			return M % s3 * C0;
		}
		const n = t.tt / 36525, o = e(1287104.79305 + n * 129596581.0481), r = e(335779.526232 + n * 1739527262.8478), s = e(1072260.70369 + n * 1602961601.209), i = e(450160.398036 - n * 6962890.5431);
		let a = Math.sin(i), c = Math.cos(i), l = (-172064161 - 174666 * n) * a + 33386 * c, h = (92052331 + 9086 * n) * c + 15377 * a, u = 2 * (r - s + i);
		return a = Math.sin(u), c = Math.cos(u), l += (-13170906 - 1675 * n) * a - 13696 * c, h += (5730336 - 3015 * n) * c - 4587 * a, u = 2 * (r + i), a = Math.sin(u), c = Math.cos(u), l += (-2276413 - 234 * n) * a + 2796 * c, h += (978459 - 485 * n) * c + 1374 * a, u = 2 * i, a = Math.sin(u), c = Math.cos(u), l += (2074554 + 207 * n) * a - 698 * c, h += (-897492 + 470 * n) * c - 291 * a, a = Math.sin(o), c = Math.cos(o), l += (1475877 - 3633 * n) * a + 11817 * c, h += (73871 - 184 * n) * c - 1924 * a, {
			dpsi: -135e-6 + l * 1e-7,
			deps: 388e-6 + h * 1e-7
		};
	}
	function O2(t) {
		var e = t.tt / 36525;
		return (((((-4.34e-8 * e - 576e-9) * e + .0020034) * e - 1831e-7) * e - 46.836769) * e + 84381.406) / 3600;
	}
	var H1;
	function I0(t) {
		if (!H1 || Math.abs(H1.tt - t.tt) > 1e-6) {
			const e = I3(t), n = O2(t), o = n + e.deps / 3600;
			H1 = {
				tt: t.tt,
				dpsi: e.dpsi,
				deps: e.deps,
				ee: e.dpsi * Math.cos(n * _) / 15,
				mobl: n,
				tobl: o
			};
		}
		return H1;
	}
	function P2(t, e) {
		const n = t * _, o = Math.cos(n), r = Math.sin(n);
		return [
			e[0],
			e[1] * o - e[2] * r,
			e[1] * r + e[2] * o
		];
	}
	function g3(t, e) {
		return P2(O2(t), e);
	}
	let z2 = 0;
	function g0(t) {
		++z2;
		const e = t.tt / 36525;
		function n(v, b) {
			const K = [];
			let J;
			for (J = 0; J <= b - v; ++J) K.push(0);
			return {
				min: v,
				array: K
			};
		}
		function o(v, b, K, J) {
			const G = [];
			for (let N0 = 0; N0 <= b - v; ++N0) G.push(n(K, J));
			return {
				min: v,
				array: G
			};
		}
		function r(v, b, K) {
			const J = v.array[b - v.min];
			return J.array[K - J.min];
		}
		function s(v, b, K, J) {
			const G = v.array[b - v.min];
			G.array[K - G.min] = J;
		}
		let i, a, c, l, h, u, M, p, A, E, m, I, g, R, x, w, U, N, k, O, j, F, q, u0 = o(-6, 6, 1, 4), r0 = o(-6, 6, 1, 4);
		function p0(v, b) {
			return r(u0, v, b);
		}
		function T0(v, b) {
			return r(r0, v, b);
		}
		function l0(v, b, K) {
			return s(u0, v, b, K);
		}
		function h0(v, b, K) {
			return s(r0, v, b, K);
		}
		function ht(v, b, K, J, G) {
			G(v * K - b * J, b * K + v * J);
		}
		function P(v) {
			return Math.sin(e0 * v);
		}
		M = e * e, A = 0, q = 0, m = 0, I = 3422.7;
		var d0 = P(.19833 + .05611 * e), n2 = P(.27869 + .04508 * e), o2 = P(.16827 - .36903 * e), r2 = P(.34734 - 5.37261 * e), s2 = P(.10498 - 5.37899 * e), dt = P(.42681 - .41855 * e), Z4 = P(.14943 - 5.37511 * e);
		for (N = .84 * d0 + .31 * n2 + 14.27 * o2 + 7.26 * r2 + .28 * s2 + .24 * dt, k = 2.94 * d0 + .31 * n2 + 14.27 * o2 + 9.34 * r2 + 1.12 * s2 + .83 * dt, O = -6.4 * d0 - 1.89 * dt, j = .21 * d0 + .31 * n2 + 14.27 * o2 - 88.7 * r2 - 15.3 * s2 + .24 * dt - 1.86 * Z4, F = N - O, p = -3332e-9 * P(.59734 - 5.37261 * e) - 539e-9 * P(.35498 - 5.37899 * e) - 64e-9 * P(.39943 - 5.37511 * e), g = e0 * V0(.60643382 + 1336.85522467 * e - 313e-8 * M) + N / m0, R = e0 * V0(.37489701 + 1325.55240982 * e + 2565e-8 * M) + k / m0, x = e0 * V0(.99312619 + 99.99735956 * e - 44e-8 * M) + O / m0, w = e0 * V0(.25909118 + 1342.2278298 * e - 892e-8 * M) + j / m0, U = e0 * V0(.82736186 + 1236.85308708 * e - 397e-8 * M) + F / m0, h = 1; h <= 4; ++h) {
			switch (h) {
				case 1:
					c = R, a = 4, l = 1.000002208;
					break;
				case 2:
					c = x, a = 3, l = .997504612 - .002495388 * e;
					break;
				case 3:
					c = w, a = 4, l = 1.000002708 + 139.978 * p;
					break;
				case 4:
					c = U, a = 6, l = 1;
					break;
				default: throw `Internal error: I = ${h}`;
			}
			for (l0(0, h, 1), l0(1, h, Math.cos(c) * l), h0(0, h, 0), h0(1, h, Math.sin(c) * l), u = 2; u <= a; ++u) ht(p0(u - 1, h), T0(u - 1, h), p0(1, h), T0(1, h), (v, b) => (l0(u, h, v), h0(u, h, b)));
			for (u = 1; u <= a; ++u) l0(-u, h, p0(u, h)), h0(-u, h, -T0(u, h));
		}
		function Qe(v, b, K, J) {
			for (var G = {
				x: 1,
				y: 0
			}, N0 = [
				0,
				v,
				b,
				K,
				J
			], E0 = 1; E0 <= 4; ++E0) N0[E0] !== 0 && ht(G.x, G.y, p0(N0[E0], E0), T0(N0[E0], E0), (i2, s1) => (G.x = i2, G.y = s1));
			return G;
		}
		function S(v, b, K, J, G, N0, E0, i2) {
			var s1 = Qe(G, N0, E0, i2);
			A += v * s1.y, q += b * s1.y, m += K * s1.x, I += J * s1.x;
		}
		S(13.902, 14.06, -.001, .2607, 0, 0, 0, 4), S(.403, -4.01, .394, .0023, 0, 0, 0, 3), S(2369.912, 2373.36, .601, 28.2333, 0, 0, 0, 2), S(-125.154, -112.79, -.725, -.9781, 0, 0, 0, 1), S(1.979, 6.98, -.445, .0433, 1, 0, 0, 4), S(191.953, 192.72, .029, 3.0861, 1, 0, 0, 2), S(-8.466, -13.51, .455, -.1093, 1, 0, 0, 1), S(22639.5, 22609.07, .079, 186.5398, 1, 0, 0, 0), S(18.609, 3.59, -.094, .0118, 1, 0, 0, -1), S(-4586.465, -4578.13, -.077, 34.3117, 1, 0, 0, -2), S(3.215, 5.44, .192, -.0386, 1, 0, 0, -3), S(-38.428, -38.64, .001, .6008, 1, 0, 0, -4), S(-.393, -1.43, -.092, .0086, 1, 0, 0, -6), S(-.289, -1.59, .123, -.0053, 0, 1, 0, 4), S(-24.42, -25.1, .04, -.3, 0, 1, 0, 2), S(18.023, 17.93, .007, .1494, 0, 1, 0, 1), S(-668.146, -126.98, -1.302, -.3997, 0, 1, 0, 0), S(.56, .32, -.001, -.0037, 0, 1, 0, -1), S(-165.145, -165.06, .054, 1.9178, 0, 1, 0, -2), S(-1.877, -6.46, -.416, .0339, 0, 1, 0, -4), S(.213, 1.02, -.074, .0054, 2, 0, 0, 4), S(14.387, 14.78, -.017, .2833, 2, 0, 0, 2), S(-.586, -1.2, .054, -.01, 2, 0, 0, 1), S(769.016, 767.96, .107, 10.1657, 2, 0, 0, 0), S(1.75, 2.01, -.018, .0155, 2, 0, 0, -1), S(-211.656, -152.53, 5.679, -.3039, 2, 0, 0, -2), S(1.225, .91, -.03, -.0088, 2, 0, 0, -3), S(-30.773, -34.07, -.308, .3722, 2, 0, 0, -4), S(-.57, -1.4, -.074, .0109, 2, 0, 0, -6), S(-2.921, -11.75, .787, -.0484, 1, 1, 0, 2), S(1.267, 1.52, -.022, .0164, 1, 1, 0, 1), S(-109.673, -115.18, .461, -.949, 1, 1, 0, 0), S(-205.962, -182.36, 2.056, 1.4437, 1, 1, 0, -2), S(.233, .36, .012, -.0025, 1, 1, 0, -3), S(-4.391, -9.66, -.471, .0673, 1, 1, 0, -4), S(.283, 1.53, -.111, .006, 1, -1, 0, 4), S(14.577, 31.7, -1.54, .2302, 1, -1, 0, 2), S(147.687, 138.76, .679, 1.1528, 1, -1, 0, 0), S(-1.089, .55, .021, 0, 1, -1, 0, -1), S(28.475, 23.59, -.443, -.2257, 1, -1, 0, -2), S(-.276, -.38, -.006, -.0036, 1, -1, 0, -3), S(.636, 2.27, .146, -.0102, 1, -1, 0, -4), S(-.189, -1.68, .131, -.0028, 0, 2, 0, 2), S(-7.486, -.66, -.037, -.0086, 0, 2, 0, 0), S(-8.096, -16.35, -.74, .0918, 0, 2, 0, -2), S(-5.741, -.04, 0, -9e-4, 0, 0, 2, 2), S(.255, 0, 0, 0, 0, 0, 2, 1), S(-411.608, -.2, 0, -.0124, 0, 0, 2, 0), S(.584, .84, 0, .0071, 0, 0, 2, -1), S(-55.173, -52.14, 0, -.1052, 0, 0, 2, -2), S(.254, .25, 0, -.0017, 0, 0, 2, -3), S(.025, -1.67, 0, .0031, 0, 0, 2, -4), S(1.06, 2.96, -.166, .0243, 3, 0, 0, 2), S(36.124, 50.64, -1.3, .6215, 3, 0, 0, 0), S(-13.193, -16.4, .258, -.1187, 3, 0, 0, -2), S(-1.187, -.74, .042, .0074, 3, 0, 0, -4), S(-.293, -.31, -.002, .0046, 3, 0, 0, -6), S(-.29, -1.45, .116, -.0051, 2, 1, 0, 2), S(-7.649, -10.56, .259, -.1038, 2, 1, 0, 0), S(-8.627, -7.59, .078, -.0192, 2, 1, 0, -2), S(-2.74, -2.54, .022, .0324, 2, 1, 0, -4), S(1.181, 3.32, -.212, .0213, 2, -1, 0, 2), S(9.703, 11.67, -.151, .1268, 2, -1, 0, 0), S(-.352, -.37, .001, -.0028, 2, -1, 0, -1), S(-2.494, -1.17, -.003, -.0017, 2, -1, 0, -2), S(.36, .2, -.012, -.0043, 2, -1, 0, -4), S(-1.167, -1.25, .008, -.0106, 1, 2, 0, 0), S(-7.412, -6.12, .117, .0484, 1, 2, 0, -2), S(-.311, -.65, -.032, .0044, 1, 2, 0, -4), S(.757, 1.82, -.105, .0112, 1, -2, 0, 2), S(2.58, 2.32, .027, .0196, 1, -2, 0, 0), S(2.533, 2.4, -.014, -.0212, 1, -2, 0, -2), S(-.344, -.57, -.025, .0036, 0, 3, 0, -2), S(-.992, -.02, 0, 0, 1, 0, 2, 2), S(-45.099, -.02, 0, -.001, 1, 0, 2, 0), S(-.179, -9.52, 0, -.0833, 1, 0, 2, -2), S(-.301, -.33, 0, .0014, 1, 0, 2, -4), S(-6.382, -3.37, 0, -.0481, 1, 0, -2, 2), S(39.528, 85.13, 0, -.7136, 1, 0, -2, 0), S(9.366, .71, 0, -.0112, 1, 0, -2, -2), S(.202, .02, 0, 0, 1, 0, -2, -4), S(.415, .1, 0, .0013, 0, 1, 2, 0), S(-2.152, -2.26, 0, -.0066, 0, 1, 2, -2), S(-1.44, -1.3, 0, .0014, 0, 1, -2, 2), S(.384, -.04, 0, 0, 0, 1, -2, -2), S(1.938, 3.6, -.145, .0401, 4, 0, 0, 0), S(-.952, -1.58, .052, -.013, 4, 0, 0, -2), S(-.551, -.94, .032, -.0097, 3, 1, 0, 0), S(-.482, -.57, .005, -.0045, 3, 1, 0, -2), S(.681, .96, -.026, .0115, 3, -1, 0, 0), S(-.297, -.27, .002, -9e-4, 2, 2, 0, -2), S(.254, .21, -.003, 0, 2, -2, 0, -2), S(-.25, -.22, .004, .0014, 1, 3, 0, -2), S(-3.996, 0, 0, 4e-4, 2, 0, 2, 0), S(.557, -.75, 0, -.009, 2, 0, 2, -2), S(-.459, -.38, 0, -.0053, 2, 0, -2, 2), S(-1.298, .74, 0, 4e-4, 2, 0, -2, 0), S(.538, 1.14, 0, -.0141, 2, 0, -2, -2), S(.263, .02, 0, 0, 1, 1, 2, 0), S(.426, .07, 0, -6e-4, 1, 1, -2, -2), S(-.304, .03, 0, 3e-4, 1, -1, 2, 0), S(-.372, -.19, 0, -.0027, 1, -1, -2, 2), S(.418, 0, 0, 0, 0, 0, 4, 0), S(-.33, -.04, 0, 0, 3, 0, 2, 0);
		function f0(v, b, K, J, G) {
			return v * Qe(b, K, J, G).y;
		}
		E = 0, E += f0(-526.069, 0, 0, 1, -2), E += f0(-3.352, 0, 0, 1, -4), E += f0(44.297, 1, 0, 1, -2), E += f0(-6, 1, 0, 1, -4), E += f0(20.599, -1, 0, 1, 0), E += f0(-30.598, -1, 0, 1, -2), E += f0(-24.649, -2, 0, 1, 0), E += f0(-2, -2, 0, 1, -2), E += f0(-22.571, 0, 1, 1, -2), E += f0(10.985, 0, -1, 1, -2), A += .82 * P(.7736 - 62.5512 * e) + .31 * P(.0466 - 125.1025 * e) + .35 * P(.5785 - 25.1042 * e) + .66 * P(.4591 + 1335.8075 * e) + .64 * P(.313 - 91.568 * e) + 1.14 * P(.148 + 1331.2898 * e) + .21 * P(.5918 + 1056.5859 * e) + .44 * P(.5784 + 1322.8595 * e) + .24 * P(.2275 - 5.7374 * e) + .28 * P(.2965 + 2.6929 * e) + .33 * P(.3132 + 6.3368 * e), i = w + q / m0;
		let t6 = (1.000002708 + 139.978 * p) * (18519.699999999997 + m) * Math.sin(i) - 6.24 * Math.sin(3 * i) + E;
		return {
			geo_eclip_lon: e0 * V0((g + A / m0) / e0),
			geo_eclip_lat: Math.PI / (180 * 3600) * t6,
			distance_au: m0 * u3 / (.999953253 * I)
		};
	}
	var b2 = class {
		constructor(t, e, n, o, r, s) {
			this.elat = t, this.elon = e, this.mlat = n, this.mlon = o, this.dist_km = r, this.diam_deg = s;
		}
	};
	function w3(t) {
		const e = y(t), n = e.tt / 36525, o = n * n, r = o * n, s = o * o, i = g0(e), a = i.geo_eclip_lon, c = i.geo_eclip_lat, l = i.distance_au * z, h = _ * 1.543, u = _ * t1(93.272095 + 483202.0175233 * n - .0036539 * o - r / 3526e3 + s / 86331e4), M = _ * t1(125.0445479 - 1934.1362891 * n + .0020754 * o + r / 467441 - s / 60616e3), p = _ * t1(357.5291092 + 35999.0502909 * n - 1536e-7 * o + r / 2449e4), A = _ * t1(134.9633964 + 477198.8675055 * n + .0087414 * o + r / 69699 - s / 14712e3), E = _ * t1(297.8501921 + 445267.1114034 * n - .0018819 * o + r / 545868 - s / 113065e3), m = 1 - .002516 * n - 74e-7 * o, I = a - M, g = Math.atan2(Math.sin(I) * Math.cos(c) * Math.cos(h) - Math.sin(c) * Math.sin(h), Math.cos(I) * Math.cos(c)), R = Z0(B * (g - u)), x = Math.asin(-Math.sin(I) * Math.cos(c) * Math.sin(h) - Math.sin(c) * Math.cos(h)), w = _ * (119.75 + 131.849 * n), U = _ * (72.56 + 20.186 * n), N = -.02752 * Math.cos(A) + -.02245 * Math.sin(u) + .00684 * Math.cos(A - 2 * u) + -.00293 * Math.cos(2 * u) + -85e-5 * Math.cos(2 * u - 2 * E) + -54e-5 * Math.cos(A - 2 * E) + -2e-4 * Math.sin(A + u) + -2e-4 * Math.cos(A + 2 * u) + -2e-4 * Math.cos(A - u) + 14e-5 * Math.cos(A + 2 * u - 2 * E), k = -.02816 * Math.sin(A) + .02244 * Math.cos(u) + -.00682 * Math.sin(A - 2 * u) + -.00279 * Math.sin(2 * u) + -83e-5 * Math.sin(2 * u - 2 * E) + 69e-5 * Math.sin(A - 2 * E) + 4e-4 * Math.cos(A + u) + -25e-5 * Math.sin(2 * A) + -23e-5 * Math.sin(A + 2 * u) + 2e-4 * Math.cos(A - u) + 19e-5 * Math.sin(A - u) + 13e-5 * Math.sin(A + 2 * u - 2 * E) + -1e-4 * Math.cos(A - 3 * u), O = -(.0252 * m * Math.sin(p) + .00473 * Math.sin(2 * A - 2 * u) + -.00467 * Math.sin(A) + .00396 * Math.sin(w) + .00276 * Math.sin(2 * A - 2 * E) + .00196 * Math.sin(M) + -.00183 * Math.cos(A - u) + .00115 * Math.sin(A - 2 * E) + -96e-5 * Math.sin(A - E) + 46e-5 * Math.sin(2 * u - 2 * E) + -39e-5 * Math.sin(A - u) + -32e-5 * Math.sin(A - p - E) + 27e-5 * Math.sin(2 * A - p - 2 * E) + 23e-5 * Math.sin(U) + -14e-5 * Math.sin(2 * E) + 14e-5 * Math.cos(2 * A - 2 * u) + -12e-5 * Math.sin(A - 2 * u) + -12e-5 * Math.sin(2 * A) + 11e-5 * Math.sin(2 * A - 2 * p - 2 * E)) + (N * Math.cos(g) + k * Math.sin(g)) * Math.tan(x), j = k * Math.cos(g) - N * Math.sin(g), F = 2 * B * Math.atan(X / Math.sqrt(l * l - X * X));
		return new b2(B * x + j, R + O, B * c, B * a, l, F);
	}
	function L2(t, e) {
		return [
			t.rot[0][0] * e[0] + t.rot[1][0] * e[1] + t.rot[2][0] * e[2],
			t.rot[0][1] * e[0] + t.rot[1][1] * e[1] + t.rot[2][1] * e[2],
			t.rot[0][2] * e[0] + t.rot[1][2] * e[1] + t.rot[2][2] * e[2]
		];
	}
	function $0(t, e, n) {
		return L2(J1(e, n), t);
	}
	function C2(t, e, n) {
		return nt(J1(e, n), t);
	}
	function J1(t, e) {
		const n = t.tt / 36525;
		let o = 84381.406, r = ((((-9.51e-8 * n + 132851e-9) * n - .00114045) * n - 1.0790069) * n + 5038.481507) * n, s = ((((3.337e-7 * n - 467e-9) * n - .00772503) * n + .0512623) * n - .025754) * n + o, i = ((((-56e-9 * n + 170663e-9) * n - .00121197) * n - 2.3814292) * n + 10.556403) * n;
		o *= C0, r *= C0, s *= C0, i *= C0;
		const a = Math.sin(o), c = Math.cos(o), l = Math.sin(-r), h = Math.cos(-r), u = Math.sin(-s), M = Math.cos(-s), p = Math.sin(i), A = Math.cos(i), E = A * h - l * p * M, m = A * l * c + p * M * h * c - a * p * u, I = A * l * a + p * M * h * a + c * p * u, g = -p * h - l * A * M, R = -p * l * c + A * M * h * c - a * A * u, x = -p * l * a + A * M * h * a + c * A * u, w = l * u, U = -u * h * c - a * M, N = -u * h * a + M * c;
		if (e === L.Into2000) return new V([
			[
				E,
				m,
				I
			],
			[
				g,
				R,
				x
			],
			[
				w,
				U,
				N
			]
		]);
		if (e === L.From2000) return new V([
			[
				E,
				g,
				w
			],
			[
				m,
				R,
				U
			],
			[
				I,
				x,
				N
			]
		]);
		throw "Invalid precess direction";
	}
	function x3(t) {
		let e = 360 * ((.779057273264 + .00273781191135448 * t.ut + t.ut % 1) % 1);
		return e < 0 && (e += 360), e;
	}
	let V1;
	function A0(t) {
		if (!V1 || V1.tt !== t.tt) {
			const e = t.tt / 36525;
			let n = 15 * I0(t).ee;
			const o = x3(t);
			let r = ((n + .014506 + ((((-3.68e-8 * e - 29956e-9) * e - 44e-8) * e + 1.3915817) * e + 4612.156534) * e) / 3600 + o) % 360 / 15;
			r < 0 && (r += 24), V1 = {
				tt: t.tt,
				st: r
			};
		}
		return V1.st;
	}
	function k2(t) {
		return A0(y(t));
	}
	function T3(t, e) {
		const n = t[0] * z, o = t[1] * z, r = t[2] * z, s = Math.hypot(n, o);
		let i, a, c;
		if (s < 1e-6) i = 0, a = r > 0 ? 90 : -90, c = Math.abs(r) - l3;
		else {
			for (i = B * Math.atan2(o, n) - 15 * e; i <= -180;) i += 360;
			for (; i > 180;) i -= 360;
			let l = Math.atan2(r, s), h, u, M, p = 0;
			for (;;) {
				if (++p > 10) throw "inverse_terra failed to converge.";
				h = Math.cos(l), u = Math.sin(l);
				const E = (k0 - 1) * M0, m = h * h, I = u * u, g = m + k0 * I;
				M = Math.sqrt(g);
				const R = E * u * h / M - r * h + s * u;
				if (Math.abs(R) < 1e-8) break;
				const x = E * ((m - I) / M - I * m * (k0 - 1) / (E * g)) + r * u + s * h;
				l -= R / x;
			}
			a = B * l;
			const A = M0 / M;
			Math.abs(u) > Math.abs(h) ? c = r / u - k0 * A : c = s / h - A;
		}
		return new Dt(a, i, 1e3 * c);
	}
	function Tt(t, e) {
		const n = t.latitude * _, o = Math.sin(n), r = Math.cos(n), s = 1 / Math.hypot(r, s0 * o), i = k0 * s, a = t.height / 1e3, c = M0 * s + a, l = M0 * i + a, h = (15 * e + t.longitude) * _, u = Math.sin(h), M = Math.cos(h);
		return {
			pos: [
				c * r * M / z,
				c * r * u / z,
				l * o / z
			],
			vel: [
				-g2 * c * r * u * 86400 / z,
				g2 * c * r * M * 86400 / z,
				0
			]
		};
	}
	function F0(t, e, n) {
		return L2($1(e, n), t);
	}
	function B2(t, e, n) {
		return nt($1(e, n), t);
	}
	function $1(t, e) {
		const n = I0(t), o = n.mobl * _, r = n.tobl * _, s = n.dpsi * C0, i = Math.cos(o), a = Math.sin(o), c = Math.cos(r), l = Math.sin(r), h = Math.cos(s), u = Math.sin(s), M = h, p = -u * i, A = -u * a, E = u * c, m = h * i * c + a * l, I = h * a * c - i * l, g = u * l, R = h * i * l - a * c, x = h * a * l + i * c;
		if (e === L.From2000) return new V([
			[
				M,
				E,
				g
			],
			[
				p,
				m,
				R
			],
			[
				A,
				I,
				x
			]
		]);
		if (e === L.Into2000) return new V([
			[
				M,
				p,
				A
			],
			[
				E,
				m,
				I
			],
			[
				g,
				R,
				x
			]
		]);
		throw "Invalid precess direction";
	}
	function F1(t, e, n) {
		return n === L.Into2000 ? $0(F0(t, e, n), e, n) : F0($0(t, e, n), e, n);
	}
	function N3(t, e, n) {
		return n === L.Into2000 ? C2(B2(t, e, n), e, n) : B2(C2(t, e, n), e, n);
	}
	function K2(t, e) {
		const n = Tt(e, A0(t)).pos;
		return F1(n, t, L.Into2000);
	}
	var D = class {
		constructor(t, e, n, o) {
			this.x = t, this.y = e, this.z = n, this.t = o;
		}
		Length() {
			return Math.hypot(this.x, this.y, this.z);
		}
	}, H = class {
		constructor(t, e, n, o, r, s, i) {
			this.x = t, this.y = e, this.z = n, this.vx = o, this.vy = r, this.vz = s, this.t = i;
		}
	}, G0 = class {
		constructor(t, e, n) {
			this.lat = T(t), this.lon = T(e), this.dist = T(n);
		}
	}, G1 = class {
		constructor(t, e, n, o) {
			this.ra = T(t), this.dec = T(e), this.dist = T(n), this.vec = o;
		}
	};
	function D3(t) {
		if (!(t instanceof Array) || t.length !== 3) return !1;
		for (let e = 0; e < 3; ++e) {
			if (!(t[e] instanceof Array) || t[e].length !== 3) return !1;
			for (let n = 0; n < 3; ++n) if (!Number.isFinite(t[e][n])) return !1;
		}
		return !0;
	}
	var V = class {
		constructor(t) {
			this.rot = t;
		}
	};
	function U3(t) {
		if (!D3(t)) throw "Argument must be a [3][3] array of numbers";
		return new V(t);
	}
	var H2 = class {
		constructor(t, e, n, o) {
			this.azimuth = T(t), this.altitude = T(e), this.ra = T(n), this.dec = T(o);
		}
	}, J2 = class {
		constructor(t, e, n) {
			this.vec = t, this.elat = T(e), this.elon = T(n);
		}
	};
	function Nt(t, e) {
		return new D(t[0], t[1], t[2], e);
	}
	function V2(t, e) {
		const n = Nt(t, e), o = n.x * n.x + n.y * n.y, r = Math.sqrt(o + n.z * n.z);
		if (o === 0) {
			if (n.z === 0) throw "Indeterminate sky coordinates";
			return new G1(0, n.z < 0 ? -90 : 90, r, n);
		}
		let s = yt * Math.atan2(n.y, n.x);
		s < 0 && (s += 24);
		const i = B * Math.atan2(t[2], Math.sqrt(o));
		return new G1(s, i, r, n);
	}
	function j0(t, e) {
		const n = t * _, o = Math.cos(n), r = Math.sin(n);
		return [
			o * e[0] + r * e[1],
			o * e[1] - r * e[0],
			e[2]
		];
	}
	function j1(t, e, n, o, r) {
		let s = y(t);
		Y0(e), T(n), T(o);
		const i = Math.sin(e.latitude * _), a = Math.cos(e.latitude * _), c = Math.sin(e.longitude * _), l = Math.cos(e.longitude * _), h = Math.sin(o * _), u = Math.cos(o * _), M = Math.sin(n * Et), p = Math.cos(n * Et);
		let A = [
			a * l,
			a * c,
			i
		], E = [
			-i * l,
			-i * c,
			a
		], m = [
			c,
			-l,
			0
		];
		const I = -15 * A0(s);
		let g = j0(I, A), R = j0(I, E), x = j0(I, m), w = [
			u * p,
			u * M,
			h
		];
		const U = w[0] * g[0] + w[1] * g[1] + w[2] * g[2], N = w[0] * R[0] + w[1] * R[1] + w[2] * R[2], k = w[0] * x[0] + w[1] * x[1] + w[2] * x[2];
		let O = Math.hypot(N, k), j;
		O > 0 ? (j = -B * Math.atan2(k, N), j < 0 && (j += 360)) : j = 0;
		let F = B * Math.atan2(O, U), q = n, u0 = o;
		if (r) {
			let r0 = F, p0 = R1(r, 90 - F);
			if (F -= p0, p0 > 0 && F > 3e-4) {
				const T0 = Math.sin(F * _), l0 = Math.cos(F * _), h0 = Math.sin(r0 * _), ht = Math.cos(r0 * _), P = [];
				for (let d0 = 0; d0 < 3; ++d0) P.push((w[d0] - ht * g[d0]) / h0 * T0 + g[d0] * l0);
				O = Math.hypot(P[0], P[1]), O > 0 ? (q = yt * Math.atan2(P[1], P[0]), q < 0 && (q += 24)) : q = 0, u0 = B * Math.atan2(P[2], O);
			}
		}
		return new H2(j, 90 - F, q, u0);
	}
	function Y0(t) {
		if (!(t instanceof Dt)) throw `Not an instance of the Observer class: ${t}`;
		if (T(t.latitude), T(t.longitude), T(t.height), t.latitude < -90 || t.latitude > 90) throw `Latitude ${t.latitude} is out of range. Must be -90..+90.`;
		return t;
	}
	var Dt = class {
		constructor(t, e, n) {
			this.latitude = t, this.longitude = e, this.height = n, Y0(this);
		}
	};
	function $2(t) {
		const e = y(t).AddDays(-1 / z1), n = q0(Y.Earth, e), [o, r, s] = F1([
			-n.x,
			-n.y,
			-n.z
		], e, L.From2000), i = _ * I0(e).tobl, a = Math.cos(i), c = Math.sin(i);
		return Ut(new D(o, r, s, e), a, c);
	}
	function f1(t, e, n, o, r) {
		Y0(n), k1(o), k1(r);
		const s = y(e), i = K2(s, n), a = n0(t, s, r), c = [
			a.x - i[0],
			a.y - i[1],
			a.z - i[2]
		];
		return V2(o ? F1(c, s, L.From2000) : c, s);
	}
	function v3(t, e, n) {
		const o = y(t);
		let r = Tt(e, A0(o)).pos;
		return n || (r = F1(r, o, L.Into2000)), Nt(r, o);
	}
	function O3(t, e, n) {
		const o = y(t), r = Tt(e, A0(o)), s = new H(r.pos[0], r.pos[1], r.pos[2], r.vel[0], r.vel[1], r.vel[2], o);
		return n ? s : N3(s, o, L.Into2000);
	}
	function P3(t, e) {
		const n = A0(t.t);
		let o = [
			t.x,
			t.y,
			t.z
		];
		return e || (o = $0(o, t.t, L.From2000), o = F0(o, t.t, L.From2000)), T3(o, n);
	}
	function z3(t, e) {
		const n = Math.sin(t * _), o = n * n;
		return 9.7803253359 * (1 + .00193185265241 * o) / Math.sqrt(1 - .00669437999013 * o) * (1 - (3.15704e-7 - 2.10269e-9 * o) * e + 737452e-19 * e * e);
	}
	function Ut(t, e, n) {
		const o = t.x, r = t.y * e + t.z * n, s = -t.y * n + t.z * e, i = Math.hypot(o, r);
		let a = 0;
		i > 0 && (a = B * Math.atan2(r, o), a < 0 && (a += 360));
		let c = B * Math.atan2(s, i);
		return new J2(new D(o, r, s, t.t), c, a);
	}
	function M1(t) {
		const e = I0(t.t), [n, o, r] = F0($0([
			t.x,
			t.y,
			t.z
		], t.t, L.From2000), t.t, L.From2000), s = new D(n, o, r, t.t), i = e.tobl * _;
		return Ut(s, Math.cos(i), Math.sin(i));
	}
	function a0(t) {
		const e = y(t), n = g0(e), o = n.distance_au * Math.cos(n.geo_eclip_lat), r = $0(g3(e, [
			o * Math.cos(n.geo_eclip_lon),
			o * Math.sin(n.geo_eclip_lon),
			n.distance_au * Math.sin(n.geo_eclip_lat)
		]), e, L.Into2000);
		return new D(r[0], r[1], r[2], e);
	}
	function Y1(t) {
		const e = y(t), n = g0(e), o = n.distance_au * Math.cos(n.geo_eclip_lat), r = [
			o * Math.cos(n.geo_eclip_lon),
			o * Math.sin(n.geo_eclip_lon),
			n.distance_au * Math.sin(n.geo_eclip_lat)
		], s = I0(e), i = Nt(F0(P2(s.mobl, r), e, L.From2000), e), a = s.tobl * _, c = Ut(i, Math.cos(a), Math.sin(a));
		return new G0(c.elat, c.elon, n.distance_au);
	}
	function A1(t) {
		const e = y(t), n = 1e-5, o = e.AddDays(-n), r = e.AddDays(+n), s = a0(o), i = a0(r);
		return new H((s.x + i.x) / 2, (s.y + i.y) / 2, (s.z + i.z) / 2, (i.x - s.x) / (2 * n), (i.y - s.y) / (2 * n), (i.z - s.z) / (2 * n), e);
	}
	function vt(t) {
		const e = y(t), n = A1(e), o = 1 + mt;
		return new H(n.x / o, n.y / o, n.z / o, n.vx / o, n.vy / o, n.vz / o, e);
	}
	function U0(t, e, n) {
		let o = 1, r = 0;
		for (let s of t) {
			let i = 0;
			for (let [c, l, h] of s) i += c * Math.cos(l + e * h);
			let a = o * i;
			n && (a %= e0), r += a, o *= e;
		}
		return r;
	}
	function Ot(t, e) {
		let n = 1, o = 0, r = 0, s = 0;
		for (let i of t) {
			let a = 0, c = 0;
			for (let [l, h, u] of i) {
				let M = h + e * u;
				a += l * u * Math.sin(M), s > 0 && (c += l * Math.cos(M));
			}
			r += s * o * c - n * a, o = n, n *= e, ++s;
		}
		return r;
	}
	const Q0 = 365250, Pt = 0, zt = 1, Q1 = 2;
	function bt(t) {
		return new Q(t[0] + 4.4036e-7 * t[1] - 1.90919e-7 * t[2], -4.79966e-7 * t[0] + .917482137087 * t[1] - .397776982902 * t[2], .397776982902 * t[1] + .917482137087 * t[2]);
	}
	function F2(t, e, n) {
		const o = n * Math.cos(e), r = Math.cos(t), s = Math.sin(t);
		return [
			o * r,
			o * s,
			n * Math.sin(e)
		];
	}
	function q0(t, e) {
		const n = e.tt / Q0;
		return bt(F2(U0(t[Pt], n, !0), U0(t[zt], n, !1), U0(t[Q1], n, !1))).ToAstroVector(e);
	}
	function S1(t, e) {
		const n = e / Q0, o = U0(t[Pt], n, !0), r = U0(t[zt], n, !1), s = U0(t[Q1], n, !1), i = Ot(t[Pt], n), a = Ot(t[zt], n), c = Ot(t[Q1], n), l = Math.cos(o), h = Math.sin(o), u = Math.cos(r), M = Math.sin(r), p = +(c * u * l) - s * M * l * a - s * u * h * i, A = +(c * u * h) - s * M * h * a + s * u * l * i, E = +(c * M) + s * u * a, m = F2(o, r, s), I = [
			p / Q0,
			A / Q0,
			E / Q0
		];
		return new O0(e, bt(m), bt(I));
	}
	function q1(t, e, n, o) {
		const r = o / (o + h1), s = q0(Y[n], e);
		t.x += r * s.x, t.y += r * s.y, t.z += r * s.z;
	}
	function b3(t) {
		const e = new D(0, 0, 0, t);
		return q1(e, t, d.Jupiter, B0), q1(e, t, d.Saturn, K0), q1(e, t, d.Uranus, H0), q1(e, t, d.Neptune, J0), e;
	}
	const Lt = 51, L3 = 29200, X0 = 146, S0 = 201, v0 = [
		[
			-73e4,
			[
				-26.118207232108,
				-14.376168177825,
				3.384402515299
			],
			[
				.0016339372163656,
				-.0027861699588508,
				-.0013585880229445
			]
		],
		[
			-700800,
			[
				41.974905202127,
				-.448502952929,
				-12.770351505989
			],
			[
				.00073458569351457,
				.0022785014891658,
				.00048619778602049
			]
		],
		[
			-671600,
			[
				14.706930780744,
				44.269110540027,
				9.353698474772
			],
			[
				-.00210001479998,
				.00022295915939915,
				.00070143443551414
			]
		],
		[
			-642400,
			[
				-29.441003929957,
				-6.43016153057,
				6.858481011305
			],
			[
				.00084495803960544,
				-.0030783914758711,
				-.0012106305981192
			]
		],
		[
			-613200,
			[
				39.444396946234,
				-6.557989760571,
				-13.913760296463
			],
			[
				.0011480029005873,
				.0022400006880665,
				.00035168075922288
			]
		],
		[
			-584e3,
			[
				20.2303809507,
				43.266966657189,
				7.382966091923
			],
			[
				-.0019754081700585,
				.00053457141292226,
				.00075929169129793
			]
		],
		[
			-554800,
			[
				-30.65832536462,
				2.093818874552,
				9.880531138071
			],
			[
				61010603013347e-18,
				-.0031326500935382,
				-.00099346125151067
			]
		],
		[
			-525600,
			[
				35.737703251673,
				-12.587706024764,
				-14.677847247563
			],
			[
				.0015802939375649,
				.0021347678412429,
				.00019074436384343
			]
		],
		[
			-496400,
			[
				25.466295188546,
				41.367478338417,
				5.216476873382
			],
			[
				-.0018054401046468,
				.0008328308359951,
				.00080260156912107
			]
		],
		[
			-467200,
			[
				-29.847174904071,
				10.636426313081,
				12.297904180106
			],
			[
				-.00063257063052907,
				-.0029969577578221,
				-.00074476074151596
			]
		],
		[
			-438e3,
			[
				30.774692107687,
				-18.236637015304,
				-14.945535879896
			],
			[
				.0020113162005465,
				.0019353827024189,
				-20937793168297e-19
			]
		],
		[
			-408800,
			[
				30.243153324028,
				38.656267888503,
				2.938501750218
			],
			[
				-.0016052508674468,
				.0011183495337525,
				.00083333973416824
			]
		],
		[
			-379600,
			[
				-27.288984772533,
				18.643162147874,
				14.023633623329
			],
			[
				-.0011856388898191,
				-.0027170609282181,
				-.00049015526126399
			]
		],
		[
			-350400,
			[
				24.519605196774,
				-23.245756064727,
				-14.626862367368
			],
			[
				.0024322321483154,
				.0016062008146048,
				-.00023369181613312
			]
		],
		[
			-321200,
			[
				34.505274805875,
				35.125338586954,
				.557361475637
			],
			[
				-.0013824391637782,
				.0013833397561817,
				.00084823598806262
			]
		],
		[
			-292e3,
			[
				-23.275363915119,
				25.818514298769,
				15.055381588598
			],
			[
				-.0016062295460975,
				-.0023395961498533,
				-.00024377362639479
			]
		],
		[
			-262800,
			[
				17.050384798092,
				-27.180376290126,
				-13.608963321694
			],
			[
				.0028175521080578,
				.0011358749093955,
				-.00049548725258825
			]
		],
		[
			-233600,
			[
				38.093671910285,
				30.880588383337,
				-1.843688067413
			],
			[
				-.0011317697153459,
				.0016128814698472,
				.00084177586176055
			]
		],
		[
			-204400,
			[
				-18.197852930878,
				31.932869934309,
				15.438294826279
			],
			[
				-.0019117272501813,
				-.0019146495909842,
				-19657304369835e-18
			]
		],
		[
			-175200,
			[
				8.528924039997,
				-29.618422200048,
				-11.805400994258
			],
			[
				.0031034370787005,
				.0005139363329243,
				-.00077293066202546
			]
		],
		[
			-146e3,
			[
				40.94685725864,
				25.904973592021,
				-4.256336240499
			],
			[
				-.00083652705194051,
				.0018129497136404,
				.0008156422827306
			]
		],
		[
			-116800,
			[
				-12.326958895325,
				36.881883446292,
				15.217158258711
			],
			[
				-.0021166103705038,
				-.001481442003599,
				.00017401209844705
			]
		],
		[
			-87600,
			[
				-.633258375909,
				-30.018759794709,
				-9.17193287495
			],
			[
				.0032016994581737,
				-.00025279858672148,
				-.0010411088271861
			]
		],
		[
			-58400,
			[
				42.936048423883,
				20.344685584452,
				-6.588027007912
			],
			[
				-.00050525450073192,
				.0019910074335507,
				.00077440196540269
			]
		],
		[
			-29200,
			[
				-5.975910552974,
				40.61180995846,
				14.470131723673
			],
			[
				-.0022184202156107,
				-.0010562361130164,
				.00033652250216211
			]
		],
		[
			0,
			[
				-9.875369580774,
				-27.978926224737,
				-5.753711824704
			],
			[
				.0030287533248818,
				-.0011276087003636,
				-.0012651326732361
			]
		],
		[
			29200,
			[
				43.958831986165,
				14.214147973292,
				-8.808306227163
			],
			[
				-.00014717608981871,
				.0021404187242141,
				.00071486567806614
			]
		],
		[
			58400,
			[
				.67813676352,
				43.094461639362,
				13.243238780721
			],
			[
				-.0022358226110718,
				-.00063233636090933,
				.00047664798895648
			]
		],
		[
			87600,
			[
				-18.282602096834,
				-23.30503958666,
				-1.766620508028
			],
			[
				.0025567245263557,
				-.0019902940754171,
				-.0013943491701082
			]
		],
		[
			116800,
			[
				43.873338744526,
				7.700705617215,
				-10.814273666425
			],
			[
				.00023174803055677,
				.0022402163127924,
				.00062988756452032
			]
		],
		[
			146e3,
			[
				7.392949027906,
				44.382678951534,
				11.629500214854
			],
			[
				-.002193281545383,
				-.00021751799585364,
				.00059556516201114
			]
		],
		[
			175200,
			[
				-24.981690229261,
				-16.204012851426,
				2.466457544298
			],
			[
				.001819398914958,
				-.0026765419531201,
				-.0013848283502247
			]
		],
		[
			204400,
			[
				42.530187039511,
				.845935508021,
				-12.554907527683
			],
			[
				.00065059779150669,
				.0022725657282262,
				.00051133743202822
			]
		],
		[
			233600,
			[
				13.999526486822,
				44.462363044894,
				9.669418486465
			],
			[
				-.0021079296569252,
				.00017533423831993,
				.00069128485798076
			]
		],
		[
			262800,
			[
				-29.184024803031,
				-7.371243995762,
				6.493275957928
			],
			[
				.00093581363109681,
				-.0030610357109184,
				-.0012364201089345
			]
		],
		[
			292e3,
			[
				39.831980671753,
				-6.078405766765,
				-13.909815358656
			],
			[
				.0011117769689167,
				.0022362097830152,
				.00036230548231153
			]
		],
		[
			321200,
			[
				20.294955108476,
				43.417190420251,
				7.450091985932
			],
			[
				-.0019742157451535,
				.00053102050468554,
				.00075938408813008
			]
		],
		[
			350400,
			[
				-30.66999230216,
				2.318743558955,
				9.973480913858
			],
			[
				45605107450676e-18,
				-.0031308219926928,
				-.00099066533301924
			]
		],
		[
			379600,
			[
				35.626122155983,
				-12.897647509224,
				-14.777586508444
			],
			[
				.0016015684949743,
				.0021171931182284,
				.00018002516202204
			]
		],
		[
			408800,
			[
				26.133186148561,
				41.232139187599,
				5.00640132622
			],
			[
				-.0017857704419579,
				.00086046232702817,
				.00080614690298954
			]
		],
		[
			438e3,
			[
				-29.57674022923,
				11.863535943587,
				12.631323039872
			],
			[
				-.00072292830060955,
				-.0029587820140709,
				-.000708242964503
			]
		],
		[
			467200,
			[
				29.910805787391,
				-19.159019294,
				-15.013363865194
			],
			[
				.0020871080437997,
				.0018848372554514,
				-38528655083926e-18
			]
		],
		[
			496400,
			[
				31.375957451819,
				38.050372720763,
				2.433138343754
			],
			[
				-.0015546055556611,
				.0011699815465629,
				.00083565439266001
			]
		],
		[
			525600,
			[
				-26.360071336928,
				20.662505904952,
				14.414696258958
			],
			[
				-.0013142373118349,
				-.0026236647854842,
				-.00042542017598193
			]
		],
		[
			554800,
			[
				22.599441488648,
				-24.508879898306,
				-14.484045731468
			],
			[
				.0025454108304806,
				.0014917058755191,
				-.00030243665086079
			]
		],
		[
			584e3,
			[
				35.877864013014,
				33.894226366071,
				-.224524636277
			],
			[
				-.0012941245730845,
				.0014560427668319,
				.00084762160640137
			]
		],
		[
			613200,
			[
				-21.538149762417,
				28.204068269761,
				15.321973799534
			],
			[
				-.001731211740901,
				-.0021939631314577,
				-.0001631691327518
			]
		],
		[
			642400,
			[
				13.971521374415,
				-28.339941764789,
				-13.083792871886
			],
			[
				.0029334630526035,
				.00091860931752944,
				-.00059939422488627
			]
		],
		[
			671600,
			[
				39.526942044143,
				28.93989736011,
				-2.872799527539
			],
			[
				-.0010068481658095,
				.001702113288809,
				.00083578230511981
			]
		],
		[
			700800,
			[
				-15.576200701394,
				34.399412961275,
				15.466033737854
			],
			[
				-.0020098814612884,
				-.0017191109825989,
				70414782780416e-18
			]
		],
		[
			73e4,
			[
				4.24325283709,
				-30.118201690825,
				-10.707441231349
			],
			[
				.0031725847067411,
				.0001609846120227,
				-.00090672150593868
			]
		]
	];
	var Q = class y0 {
		constructor(e, n, o) {
			this.x = e, this.y = n, this.z = o;
		}
		clone() {
			return new y0(this.x, this.y, this.z);
		}
		ToAstroVector(e) {
			return new D(this.x, this.y, this.z, e);
		}
		static zero() {
			return new y0(0, 0, 0);
		}
		quadrature() {
			return this.x * this.x + this.y * this.y + this.z * this.z;
		}
		add(e) {
			return new y0(this.x + e.x, this.y + e.y, this.z + e.z);
		}
		sub(e) {
			return new y0(this.x - e.x, this.y - e.y, this.z - e.z);
		}
		incr(e) {
			this.x += e.x, this.y += e.y, this.z += e.z;
		}
		decr(e) {
			this.x -= e.x, this.y -= e.y, this.z -= e.z;
		}
		mul(e) {
			return new y0(e * this.x, e * this.y, e * this.z);
		}
		div(e) {
			return new y0(this.x / e, this.y / e, this.z / e);
		}
		mean(e) {
			return new y0((this.x + e.x) / 2, (this.y + e.y) / 2, (this.z + e.z) / 2);
		}
		neg() {
			return new y0(-this.x, -this.y, -this.z);
		}
	}, O0 = class a2 {
		constructor(e, n, o) {
			this.tt = e, this.r = n, this.v = o;
		}
		clone() {
			return new a2(this.tt, this.r, this.v);
		}
		sub(e) {
			return new a2(this.tt, this.r.sub(e.r), this.v.sub(e.v));
		}
	};
	function C3(t) {
		let [e, [n, o, r], [s, i, a]] = t;
		return new O0(e, new Q(n, o, r), new Q(s, i, a));
	}
	function W(t, e, n, o) {
		const r = o / (o + h1), s = S1(Y[n], e);
		return t.r.incr(s.r.mul(r)), t.v.incr(s.v.mul(r)), s;
	}
	function _1(t, e, n) {
		const o = n.sub(t), r = o.quadrature();
		return o.mul(e / (r * Math.sqrt(r)));
	}
	var p1 = class {
		constructor(t) {
			let e = new O0(t, new Q(0, 0, 0), new Q(0, 0, 0));
			this.Jupiter = W(e, t, d.Jupiter, B0), this.Saturn = W(e, t, d.Saturn, K0), this.Uranus = W(e, t, d.Uranus, H0), this.Neptune = W(e, t, d.Neptune, J0), this.Jupiter.r.decr(e.r), this.Jupiter.v.decr(e.v), this.Saturn.r.decr(e.r), this.Saturn.v.decr(e.v), this.Uranus.r.decr(e.r), this.Uranus.v.decr(e.v), this.Neptune.r.decr(e.r), this.Neptune.v.decr(e.v), this.Sun = new O0(t, e.r.mul(-1), e.v.mul(-1));
		}
		Acceleration(t) {
			let e = _1(t, h1, this.Sun.r);
			return e.incr(_1(t, B0, this.Jupiter.r)), e.incr(_1(t, K0, this.Saturn.r)), e.incr(_1(t, H0, this.Uranus.r)), e.incr(_1(t, J0, this.Neptune.r)), e;
		}
	}, Ct = class qe {
		constructor(e, n, o, r) {
			this.tt = e, this.r = n, this.v = o, this.a = r;
		}
		clone() {
			return new qe(this.tt, this.r.clone(), this.v.clone(), this.a.clone());
		}
	}, G2 = class {
		constructor(t, e) {
			this.bary = t, this.grav = e;
		}
	};
	function W0(t, e, n, o) {
		return new Q(e.x + t * (n.x + t * o.x / 2), e.y + t * (n.y + t * o.y / 2), e.z + t * (n.z + t * o.z / 2));
	}
	function kt(t, e, n) {
		return new Q(e.x + t * n.x, e.y + t * n.y, e.z + t * n.z);
	}
	function Bt(t, e) {
		const n = t - e.tt, o = new p1(t), r = W0(n, e.r, e.v, e.a), s = o.Acceleration(r).mean(e.a), i = W0(n, e.r, e.v, s);
		return new G2(o, new Ct(t, i, e.v.add(s.mul(n)), o.Acceleration(i)));
	}
	const k3 = [];
	function j2(t, e) {
		const n = Math.floor(t);
		return n < 0 ? 0 : n >= e ? e - 1 : n;
	}
	function Kt(t) {
		const e = C3(t), n = new p1(e.tt), o = e.r.add(n.Sun.r), r = e.v.add(n.Sun.v), s = n.Acceleration(o);
		return new G2(n, new Ct(e.tt, o, r, s));
	}
	function B3(t, e) {
		const n = v0[0][0];
		if (e < n || e > v0[Lt - 1][0]) return null;
		const o = j2((e - n) / L3, Lt - 1);
		if (!t[o]) {
			const s = t[o] = [];
			s[0] = Kt(v0[o]).grav, s[S0 - 1] = Kt(v0[o + 1]).grav;
			let i, a = s[0].tt;
			for (i = 1; i < S0 - 1; ++i) s[i] = Bt(a += X0, s[i - 1]).grav;
			a = s[S0 - 1].tt;
			var r = [];
			for (r[S0 - 1] = s[S0 - 1], i = S0 - 2; i > 0; --i) r[i] = Bt(a -= X0, r[i + 1]).grav;
			for (i = S0 - 2; i > 0; --i) {
				const c = i / (S0 - 1);
				s[i].r = s[i].r.mul(1 - c).add(r[i].r.mul(c)), s[i].v = s[i].v.mul(1 - c).add(r[i].v.mul(c)), s[i].a = s[i].a.mul(1 - c).add(r[i].a.mul(c));
			}
		}
		return t[o];
	}
	function Y2(t, e, n) {
		let o = Kt(t);
		const r = Math.ceil((e - o.grav.tt) / n);
		for (let s = 0; s < r; ++s) o = Bt(s + 1 === r ? e : o.grav.tt + n, o.grav);
		return o;
	}
	function Ht(t, e) {
		let n, o, r;
		const s = B3(k3, t.tt);
		if (s) {
			const i = j2((t.tt - s[0].tt) / X0, S0 - 1), a = s[i], c = s[i + 1], l = a.a.mean(c.a), h = W0(t.tt - a.tt, a.r, a.v, l), u = kt(t.tt - a.tt, a.v, l), M = W0(t.tt - c.tt, c.r, c.v, l), p = kt(t.tt - c.tt, c.v, l), A = (t.tt - a.tt) / X0;
			n = h.mul(1 - A).add(M.mul(A)), o = u.mul(1 - A).add(p.mul(A));
		} else {
			let i;
			t.tt < v0[0][0] ? i = Y2(v0[0], t.tt, -X0) : i = Y2(v0[Lt - 1], t.tt, +X0), n = i.grav.r, o = i.grav.v, r = i.bary;
		}
		return e && (r || (r = new p1(t.tt)), n = n.sub(r.Sun.r), o = o.sub(r.Sun.v)), new H(n.x, n.y, n.z, o.x, o.y, o.z, t);
	}
	const K3 = new V([
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
	]), X1 = [
		{
			mu: 2.82489428433814e-7,
			al: [1.446213296021224, 3.5515522861824],
			a: [[
				.0028210960212903,
				0,
				0
			]],
			l: [
				[
					-.0001925258348666,
					4.9369589722645,
					.01358483658305
				],
				[
					-970803596076e-16,
					4.3188796477322,
					.01303413843243
				],
				[
					-8988174165e-14,
					1.9080016428617,
					.00305064867158
				],
				[
					-553101050262e-16,
					1.4936156681569,
					.01293892891155
				]
			],
			z: [
				[
					.0041510849668155,
					4.089939635545,
					-.01290686414666
				],
				[
					.0006260521444113,
					1.446188898627,
					3.5515522949802
				],
				[
					352747346169e-16,
					2.1256287034578,
					.00012727416567
				]
			],
			zeta: [[
				.0003142172466014,
				2.7964219722923,
				-.002315096098
			], [
				904169207946e-16,
				1.0477061879627,
				-.00056920638196
			]]
		},
		{
			mu: 2.82483274392893e-7,
			al: [-.3735263437471362, 1.76932271112347],
			a: [[
				.0044871037804314,
				0,
				0
			], [
				4.324367498e-7,
				1.819645606291,
				1.7822295777568
			]],
			l: [
				[
					.0008576433172936,
					4.3188693178264,
					.01303413830805
				],
				[
					.0004549582875086,
					1.4936531751079,
					.01293892881962
				],
				[
					.0003248939825174,
					1.8196494533458,
					1.7822295777568
				],
				[
					-.0003074250079334,
					4.9377037005911,
					.01358483286724
				],
				[
					.0001982386144784,
					1.907986905476,
					.00305101212869
				],
				[
					.0001834063551804,
					2.1402853388529,
					.00145009789338
				],
				[
					-.0001434383188452,
					5.622214036663,
					.89111478887838
				],
				[
					-771939140944e-16,
					4.300272437235,
					2.6733443704266
				]
			],
			z: [
				[
					-.0093589104136341,
					4.0899396509039,
					-.01290686414666
				],
				[
					.0002988994545555,
					5.9097265185595,
					1.7693227079462
				],
				[
					.000213903639035,
					2.1256289300016,
					.00012727418407
				],
				[
					.0001980963564781,
					2.743516829265,
					.00067797343009
				],
				[
					.0001210388158965,
					5.5839943711203,
					320566149e-13
				],
				[
					837042048393e-16,
					1.6094538368039,
					-.90402165808846
				],
				[
					823525166369e-16,
					1.4461887708689,
					3.5515522949802
				]
			],
			zeta: [
				[
					.0040404917832303,
					1.0477063169425,
					-.0005692064054
				],
				[
					.0002200421034564,
					3.3368857864364,
					-.00012491307307
				],
				[
					.0001662544744719,
					2.4134862374711,
					0
				],
				[
					590282470983e-16,
					5.9719930968366,
					-3056160225e-14
				]
			]
		},
		{
			mu: 2.82498184184723e-7,
			al: [.2874089391143348, .878207923589328],
			a: [[
				.0071566594572575,
				0,
				0
			], [
				1393029911e-15,
				1.1586745884981,
				2.6733443704266
			]],
			l: [
				[
					.0002310797886226,
					2.1402987195942,
					.00145009784384
				],
				[
					-.0001828635964118,
					4.3188672736968,
					.01303413828263
				],
				[
					.0001512378778204,
					4.9373102372298,
					.01358483481252
				],
				[
					-.0001163720969778,
					4.300265986149,
					2.6733443704266
				],
				[
					-955478069846e-16,
					1.4936612842567,
					.01293892879857
				],
				[
					815246854464e-16,
					5.6222137132535,
					.89111478887838
				],
				[
					-801219679602e-16,
					1.2995922951532,
					1.0034433456729
				],
				[
					-607017260182e-16,
					.64978769669238,
					.50172167043264
				]
			],
			z: [
				[
					.0014289811307319,
					2.1256295942739,
					.00012727413029
				],
				[
					.000771093122676,
					5.5836330003496,
					320643411e-13
				],
				[
					.0005925911780766,
					4.0899396636448,
					-.01290686414666
				],
				[
					.0002045597496146,
					5.2713683670372,
					-.12523544076106
				],
				[
					.0001785118648258,
					.28743156721063,
					.8782079244252
				],
				[
					.0001131999784893,
					1.4462127277818,
					3.5515522949802
				],
				[
					-65877816921e-15,
					2.2702423990985,
					-1.7951364394537
				],
				[
					497058888328e-16,
					5.9096792204858,
					1.7693227129285
				]
			],
			zeta: [
				[
					.0015932721570848,
					3.3368862796665,
					-.00012491307058
				],
				[
					.0008533093128905,
					2.4133881688166,
					0
				],
				[
					.0003513347911037,
					5.9720789850127,
					-3056101771e-14
				],
				[
					-.0001441929255483,
					1.0477061764435,
					-.00056920632124
				]
			]
		},
		{
			mu: 2.82492144889909e-7,
			al: [-.3620341291375704, .376486233433828],
			a: [
				[
					.0125879701715314,
					0,
					0
				],
				[
					3595204947e-15,
					.64965776007116,
					.50172168165034
				],
				[
					27580210652e-16,
					1.808423578151,
					3.1750660413359
				]
			],
			l: [
				[
					.0005586040123824,
					2.1404207189815,
					.00145009793231
				],
				[
					-.0003805813868176,
					2.7358844897853,
					2972965062e-14
				],
				[
					.0002205152863262,
					.649796525964,
					.5017216724358
				],
				[
					.0001877895151158,
					1.8084787604005,
					3.1750660413359
				],
				[
					766916975242e-16,
					6.2720114319755,
					1.3928364636651
				],
				[
					747056855106e-16,
					1.2995916202344,
					1.0034433456729
				]
			],
			z: [
				[
					.0073755808467977,
					5.5836071576084,
					3206509914e-14
				],
				[
					.0002065924169942,
					5.9209831565786,
					.37648624194703
				],
				[
					.0001589869764021,
					.28744006242623,
					.8782079244252
				],
				[
					-.0001561131605348,
					2.1257397865089,
					.00012727441285
				],
				[
					.0001486043380971,
					1.4462134301023,
					3.5515522949802
				],
				[
					635073108731e-16,
					5.9096803285954,
					1.7693227129285
				],
				[
					599351698525e-16,
					4.1125517584798,
					-2.7985797954589
				],
				[
					540660842731e-16,
					5.5390350845569,
					.00286834082283
				],
				[
					-489596900866e-16,
					4.6218149483338,
					-.62695712529519
				]
			],
			zeta: [
				[
					.0038422977898495,
					2.4133922085557,
					0
				],
				[
					.0022453891791894,
					5.9721736773277,
					-3056125525e-14
				],
				[
					-.0002604479450559,
					3.3368746306409,
					-.00012491309972
				],
				[
					33211214323e-15,
					5.5604137742337,
					.00290037688507
				]
			]
		}
	];
	var Q2 = class {
		constructor(t, e, n, o) {
			this.io = t, this.europa = e, this.ganymede = n, this.callisto = o;
		}
	};
	function H3(t, e, n) {
		const o = n[0], r = n[1], s = n[2], i = n[3], a = n[4], c = n[5], l = Math.sqrt(e / (o * o * o));
		let h, u, M, p = r + s * Math.sin(r) - i * Math.cos(r);
		do
			h = Math.cos(p), u = Math.sin(p), M = (r - p + s * u - i * h) / (1 - s * h - i * u), p += M;
		while (Math.abs(M) >= 1e-12);
		h = Math.cos(p), u = Math.sin(p);
		const A = i * h - s * u, E = -s * h - i * u, m = 1 / (1 + E), I = 1 / (1 + Math.sqrt(1 - s * s - i * i)), g = o * (h - s - I * i * A), R = o * (u - i + I * s * A), x = l * m * o * (-u - I * i * E), w = l * m * o * (+h + I * s * E), U = 2 * Math.sqrt(1 - a * a - c * c), N = 1 - 2 * c * c, k = 1 - 2 * a * a, O = 2 * c * a;
		return new H(g * N + R * O, g * O + R * k, (a * R - g * c) * U, x * N + w * O, x * O + w * k, (a * w - x * c) * U, t);
	}
	function W1(t, e) {
		const n = t.tt + 18262.5, o = [
			0,
			e.al[0] + n * e.al[1],
			0,
			0,
			0,
			0
		];
		for (let [r, s, i] of e.a) o[0] += r * Math.cos(s + n * i);
		for (let [r, s, i] of e.l) o[1] += r * Math.sin(s + n * i);
		o[1] %= e0, o[1] < 0 && (o[1] += e0);
		for (let [r, s, i] of e.z) {
			const a = s + n * i;
			o[2] += r * Math.cos(a), o[3] += r * Math.sin(a);
		}
		for (let [r, s, i] of e.zeta) {
			const a = s + n * i;
			o[4] += r * Math.cos(a), o[5] += r * Math.sin(a);
		}
		return nt(K3, H3(t, e.mu, o));
	}
	function J3(t) {
		const e = new R0(t);
		return new Q2(W1(e, X1[0]), W1(e, X1[1]), W1(e, X1[2]), W1(e, X1[3]));
	}
	function c0(t, e) {
		var n = y(e);
		if (t in Y) return q0(Y[t], n);
		if (t === d.Pluto) {
			const i = Ht(n, !0);
			return new D(i.x, i.y, i.z, n);
		}
		if (t === d.Sun) return new D(0, 0, 0, n);
		if (t === d.Moon) {
			var o = q0(Y.Earth, n), r = a0(n);
			return new D(o.x + r.x, o.y + r.y, o.z + r.z, n);
		}
		if (t === d.EMB) {
			const i = q0(Y.Earth, n), a = a0(n), c = 1 + mt;
			return new D(i.x + a.x / c, i.y + a.y / c, i.z + a.z / c, n);
		}
		if (t === d.SSB) return b3(n);
		const s = K1(t);
		if (s) return et(new G0(s.dec, 15 * s.ra, s.dist), n);
		throw `HelioVector: Unknown body "${t}"`;
	}
	function P0(t, e) {
		const n = K1(t);
		if (n) return n.dist;
		const o = y(e);
		return t in Y ? U0(Y[t][Q1], o.tt / Q0, !1) : c0(t, o).Length();
	}
	function q2(t, e) {
		let n = e, o = 0;
		for (let r = 0; r < 10; ++r) {
			const s = t(n), i = s.Length() / z1;
			if (i > 1) throw "Object is too distant for light-travel solver.";
			const a = e.AddDays(-i);
			if (o = Math.abs(a.tt - n.tt), o < 1e-9) return s;
			n = a;
		}
		throw `Light-travel time solver did not converge: dt = ${o}`;
	}
	var V3 = class {
		constructor(t, e, n, o) {
			this.observerBody = t, this.targetBody = e, this.aberration = n, this.observerPos = o;
		}
		Position(t) {
			this.aberration && (this.observerPos = c0(this.observerBody, t));
			const e = c0(this.targetBody, t);
			return new D(e.x - this.observerPos.x, e.y - this.observerPos.y, e.z - this.observerPos.z, t);
		}
	};
	function X2(t, e, n, o) {
		k1(o);
		const r = y(t);
		if (K1(n)) {
			const a = c0(n, r);
			if (o) {
				const l = Z1(e, r), h = new D(a.x - l.x, a.y - l.y, a.z - l.z, r), u = z1 / h.Length();
				return new D(h.x + l.vx / u, h.y + l.vy / u, h.z + l.vz / u, r);
			}
			const c = c0(e, r);
			return new D(a.x - c.x, a.y - c.y, a.z - c.z, r);
		}
		let s;
		o ? s = new D(0, 0, 0, r) : s = c0(e, r);
		const i = new V3(e, n, o, s);
		return q2((a) => i.Position(a), r);
	}
	function n0(t, e, n) {
		k1(n);
		const o = y(e);
		switch (t) {
			case d.Earth: return new D(0, 0, 0, o);
			case d.Moon: return a0(o);
			default:
				const r = X2(o, d.Earth, t, n);
				return r.t = o, r;
		}
	}
	function z0(t, e) {
		return new H(t.r.x, t.r.y, t.r.z, t.v.x, t.v.y, t.v.z, e);
	}
	function $3(t, e) {
		const n = y(e);
		if (t === d.SSB) return new H(0, 0, 0, 0, 0, 0, n);
		if (t === d.Pluto) return Ht(n, !1);
		const o = new p1(n.tt);
		switch (t) {
			case d.Sun: return z0(o.Sun, n);
			case d.Jupiter: return z0(o.Jupiter, n);
			case d.Saturn: return z0(o.Saturn, n);
			case d.Uranus: return z0(o.Uranus, n);
			case d.Neptune: return z0(o.Neptune, n);
			case d.Moon:
			case d.EMB:
				const r = S1(Y[d.Earth], n.tt), s = t === d.Moon ? A1(n) : vt(n);
				return new H(s.x + o.Sun.r.x + r.r.x, s.y + o.Sun.r.y + r.r.y, s.z + o.Sun.r.z + r.r.z, s.vx + o.Sun.v.x + r.v.x, s.vy + o.Sun.v.y + r.v.y, s.vz + o.Sun.v.z + r.v.z, n);
		}
		if (t in Y) {
			const r = S1(Y[t], n.tt);
			return new H(o.Sun.r.x + r.r.x, o.Sun.r.y + r.r.y, o.Sun.r.z + r.r.z, o.Sun.v.x + r.v.x, o.Sun.v.y + r.v.y, o.Sun.v.z + r.v.z, n);
		}
		throw `BaryState: Unsupported body "${t}"`;
	}
	function Z1(t, e) {
		const n = y(e);
		switch (t) {
			case d.Sun: return new H(0, 0, 0, 0, 0, 0, n);
			case d.SSB:
				const o = new p1(n.tt);
				return new H(-o.Sun.r.x, -o.Sun.r.y, -o.Sun.r.z, -o.Sun.v.x, -o.Sun.v.y, -o.Sun.v.z, n);
			case d.Mercury:
			case d.Venus:
			case d.Earth:
			case d.Mars:
			case d.Jupiter:
			case d.Saturn:
			case d.Uranus:
			case d.Neptune: return z0(S1(Y[t], n.tt), n);
			case d.Pluto: return Ht(n, !0);
			case d.Moon:
			case d.EMB:
				const r = S1(Y.Earth, n.tt), s = t == d.Moon ? A1(n) : vt(n);
				return new H(s.x + r.r.x, s.y + r.r.y, s.z + r.r.z, s.vx + r.v.x, s.vy + r.v.y, s.vz + r.v.z, n);
			default:
				if (K1(t)) {
					const i = c0(t, n);
					return new H(i.x, i.y, i.z, 0, 0, 0, n);
				}
				throw `HelioState: Unsupported body "${t}"`;
		}
	}
	function F3(t, e, n, o, r) {
		let s = (r + n) / 2 - o, i = (r - n) / 2, a = o, c;
		if (s == 0) {
			if (i == 0 || (c = -a / i, c < -1 || c > 1)) return null;
		} else {
			let l = i * i - 4 * s * a;
			if (l <= 0) return null;
			let h = Math.sqrt(l), u = (-i + h) / (2 * s), M = (-i - h) / (2 * s);
			if (-1 <= u && u <= 1) {
				if (-1 <= M && M <= 1) return null;
				c = u;
			} else if (-1 <= M && M <= 1) c = M;
			else return null;
		}
		return {
			t: t + c * e,
			df_dt: (2 * s * c + i) / e
		};
	}
	function $(t, e, n, o) {
		const r = T(o && o.dt_tolerance_seconds || 1), s = Math.abs(r / L1);
		let i = o && o.init_f1 || t(e), a = o && o.init_f2 || t(n), c = NaN, l = 0, h = o && o.iter_limit || 20, u = !0;
		for (;;) {
			if (++l > h) throw "Excessive iteration in Search()";
			let M = R3(e, n, .5), p = M.ut - e.ut;
			if (Math.abs(p) < s) return M;
			u ? c = t(M) : u = !0;
			let A = F3(M.ut, n.ut - M.ut, i, c, a);
			if (A) {
				let E = y(A.t), m = t(E);
				if (A.df_dt !== 0) {
					if (Math.abs(m / A.df_dt) < s) return E;
					let I = 1.2 * Math.abs(m / A.df_dt);
					if (I < p / 10) {
						let g = E.AddDays(-I), R = E.AddDays(+I);
						if ((g.ut - e.ut) * (g.ut - n.ut) < 0 && (R.ut - e.ut) * (R.ut - n.ut) < 0) {
							let x = t(g), w = t(R);
							if (x < 0 && w >= 0) {
								i = x, a = w, e = g, n = R, c = m, u = !1;
								continue;
							}
						}
					}
				}
			}
			if (i < 0 && c >= 0) {
				n = M, a = c;
				continue;
			}
			if (c < 0 && a >= 0) {
				e = M, i = c;
				continue;
			}
			return null;
		}
	}
	function Z0(t) {
		let e = t;
		for (; e <= -180;) e += 360;
		for (; e > 180;) e -= 360;
		return e;
	}
	function t1(t) {
		for (; t < 0;) t += 360;
		for (; t >= 360;) t -= 360;
		return t;
	}
	function W2(t, e, n) {
		function o(s) {
			return Z0($2(s).elon - t);
		}
		T(t), T(n);
		let r = y(e);
		return $(o, r, r.AddDays(n), { dt_tolerance_seconds: .01 });
	}
	function Jt(t, e, n) {
		if (t === d.Earth || e === d.Earth) throw "The Earth does not have a longitude as seen from itself.";
		const o = y(n), r = M1(n0(t, o, !1)), s = M1(n0(e, o, !1));
		return t1(r.elon - s.elon);
	}
	function e1(t, e) {
		if (t == d.Earth) throw "The Earth does not have an angle as seen from itself.";
		const n = y(e);
		return B1(n0(d.Sun, n, !0), n0(t, n, !0));
	}
	function b0(t, e) {
		if (t === d.Sun) throw "Cannot calculate heliocentric longitude of the Sun.";
		return M1(c0(t, e)).elon;
	}
	function G3(t, e, n, o) {
		let r, s = 0, i = 0, a = 0;
		switch (t) {
			case d.Mercury:
				r = -.6, s = 4.98, i = -4.88, a = 3.02;
				break;
			case d.Venus:
				e < 163.6 ? (r = -4.47, s = 1.03, i = .57, a = .13) : (r = .98, s = -1.02);
				break;
			case d.Mars:
				r = -1.52, s = 1.6;
				break;
			case d.Jupiter:
				r = -9.4, s = .5;
				break;
			case d.Uranus:
				r = -7.19, s = .25;
				break;
			case d.Neptune:
				r = -6.87;
				break;
			case d.Pluto:
				r = -1, s = 4;
				break;
			default: throw `VisualMagnitude: unsupported body ${t}`;
		}
		const c = e / 100;
		let l = r + c * (s + c * (i + c * a));
		return l += 5 * Math.log10(n * o), l;
	}
	function j3(t, e, n, o, r) {
		const s = M1(o), i = _ * 28.06, a = _ * (169.51 + 382e-7 * r.tt), c = _ * s.elat, l = _ * s.elon, h = Math.asin(Math.sin(c) * Math.cos(i) - Math.cos(c) * Math.sin(i) * Math.sin(l - a)), u = Math.sin(Math.abs(h));
		let M = -9 + .044 * t;
		return M += u * (-2.6 + 1.2 * u), M += 5 * Math.log10(e * n), {
			mag: M,
			ring_tilt: B * h
		};
	}
	function Y3(t, e, n) {
		let o = t * _, r = o * o, s = r * r, i = -12.717 + 1.49 * Math.abs(o) + .0431 * s, a = n / (385000.6 / z);
		return i += 5 * Math.log10(e * a), i;
	}
	var Z2 = class {
		constructor(t, e, n, o, r, s, i, a) {
			this.time = t, this.mag = e, this.phase_angle = n, this.helio_dist = o, this.geo_dist = r, this.gc = s, this.hc = i, this.ring_tilt = a, this.phase_fraction = (1 + Math.cos(_ * n)) / 2;
		}
	};
	function tt(t, e) {
		if (t === d.Earth) throw "The illumination of the Earth is not defined.";
		const n = y(e), o = q0(Y.Earth, n);
		let r, s, i, a;
		t === d.Sun ? (i = new D(-o.x, -o.y, -o.z, n), s = new D(0, 0, 0, n), r = 0) : (t === d.Moon ? (i = a0(n), s = new D(o.x + i.x, o.y + i.y, o.z + i.z, n)) : (s = c0(t, e), i = new D(s.x - o.x, s.y - o.y, s.z - o.z, n)), r = B1(i, s));
		let c = i.Length(), l = s.Length(), h;
		if (t === d.Sun) a = a3 + 5 * Math.log10(c);
		else if (t === d.Moon) a = Y3(r, l, c);
		else if (t === d.Saturn) {
			const u = j3(r, l, c, i, n);
			a = u.mag, h = u.ring_tilt;
		} else a = G3(t, r, l, c);
		return new Z2(n, a, r, l, c, i, s, h);
	}
	function E1(t) {
		if (t === d.Earth) throw "The Earth does not have a synodic period as seen from itself.";
		if (t === d.Moon) return b1;
		let e = i0[t];
		if (!e) throw `Not a valid planet name: ${t}`;
		const n = i0.Earth.OrbitalPeriod, o = e.OrbitalPeriod;
		return Math.abs(n / (n / o - 1));
	}
	function n1(t, e, n) {
		T(e);
		const o = i0[t];
		if (!o) throw `Cannot search relative longitude because body is not a planet: ${t}`;
		if (t === d.Earth) throw "Cannot search relative longitude for the Earth (it is always 0)";
		const r = o.OrbitalPeriod > i0.Earth.OrbitalPeriod ? 1 : -1;
		function s(l) {
			const h = b0(t, l);
			return Z0(r * (b0(d.Earth, l) - h) - e);
		}
		let i = E1(t), a = y(n), c = s(a);
		c > 0 && (c -= 360);
		for (let l = 0; l < 100; ++l) {
			let h = -c / 360 * i;
			if (a = a.AddDays(h), Math.abs(h) * L1 < 1) return a;
			let u = c;
			if (c = s(a), Math.abs(u) < 30 && u !== c) {
				let M = u / (u - c);
				M > .5 && M < 2 && (i *= M);
			}
		}
		throw `Relative longitude search failed to converge for ${t} near ${a.toString()} (error_angle = ${c}).`;
	}
	function Vt(t) {
		return Jt(d.Moon, d.Sun, t);
	}
	function y1(t, e, n) {
		function o(h) {
			return Z0(Vt(h) - t);
		}
		T(t), T(n);
		const r = 1.5, s = y(e);
		let i = o(s), a, c, l;
		if (n < 0) {
			if (i < 0 && (i += 360), a = -(b1 * i) / 360, l = a + r, l < n) return null;
			c = Math.max(n, a - r);
		} else {
			if (i > 0 && (i -= 360), a = -(b1 * i) / 360, c = a - r, c > n) return null;
			l = Math.min(n, a + r);
		}
		return $(o, s.AddDays(c), s.AddDays(l), { dt_tolerance_seconds: .1 });
	}
	var te = class {
		constructor(t, e) {
			this.quarter = t, this.time = e;
		}
	};
	function ee(t) {
		let e = Vt(t), n = (Math.floor(e / 90) + 1) % 4, o = y1(90 * n, t, 10);
		if (!o) throw "Cannot find moon quarter";
		return new te(n, o);
	}
	function Q3(t) {
		return ee(new Date(t.time.date.getTime() + 6 * c3));
	}
	var ne = class {
		constructor(t, e, n) {
			this.pressure = t, this.temperature = e, this.density = n;
		}
	};
	function oe(t) {
		if (!Number.isFinite(t) || t < -500 || t > 1e5) throw `Invalid elevation: ${t}`;
		let r, s;
		t <= 11e3 ? (r = 288.15 - .0065 * t, s = 101325 * Math.pow(288.15 / r, -5.25577)) : t <= 2e4 ? (r = 216.65, s = 22632 * Math.exp(-.00015768832 * (t - 11e3))) : (r = 216.65 + .001 * (t - 2e4), s = 5474.87 * Math.pow(216.65 / r, 34.16319));
		const i = s / r / (101325 / 288.15);
		return new ne(s, r, i);
	}
	function q3(t, e) {
		const n = t.latitude * _, o = Math.sin(n), r = Math.cos(n), s = 1 / Math.hypot(r, o * s0), i = s * (s0 * s0), a = (t.height - e) / 1e3, c = M0 * s + a, l = M0 * i + a, h = 1e3 * Math.hypot(c * r, l * o), u = .175 * Math.pow(1 - .0065 / 283.15 * (t.height - 2 / 3 * e), 3.256);
		return B * -(Math.sqrt(2 * (1 - u) * e / h) / (1 - u));
	}
	function X3(t) {
		switch (t) {
			case d.Sun: return x2;
			case d.Moon: return d3;
			default: return 0;
		}
	}
	function W3(t, e, n, o, r, s = 0) {
		if (!Number.isFinite(s) || s < 0) throw `Invalid value for metersAboveGround: ${s}`;
		const i = X3(t), a = oe(e.height - s);
		return re(t, e, n, o, r, i, q3(e, s) - M3 * a.density);
	}
	function Z3(t, e, n, o, r, s) {
		if (!Number.isFinite(s) || s < -90 || s > 90) throw `Invalid altitude angle: ${s}`;
		return re(t, e, n, o, r, 0, s);
	}
	var t4 = class {
		constructor(t, e, n, o) {
			this.tx = t, this.ty = e, this.ax = n, this.ay = o;
		}
	};
	function $t(t, e, n, o, r, s, i) {
		if (s < 0 && i >= 0) return new t4(o, r, s, i);
		if (s >= 0 && i < 0) return null;
		if (t > 17) throw "Excessive recursion in rise/set ascent search.";
		const a = r.ut - o.ut;
		if (a * L1 < 1 || Math.min(Math.abs(s), Math.abs(i)) > n * (a / 2)) return null;
		const c = new R0((o.ut + r.ut) / 2), l = e(c);
		return $t(1 + t, e, n, o, c, s, l) || $t(1 + t, e, n, c, r, l, i);
	}
	function e4(t, e) {
		if (e < -90 || e > 90) throw `Invalid geographic latitude: ${e}`;
		let n, o;
		switch (t) {
			case d.Moon:
				n = 4.5, o = 8.2;
				break;
			case d.Sun:
				n = .8, o = .5;
				break;
			case d.Mercury:
				n = -1.6, o = 1;
				break;
			case d.Venus:
				n = -.8, o = .6;
				break;
			case d.Mars:
				n = -.5, o = .4;
				break;
			case d.Jupiter:
			case d.Saturn:
			case d.Uranus:
			case d.Neptune:
			case d.Pluto:
				n = -.2, o = .2;
				break;
			case d.Star1:
			case d.Star2:
			case d.Star3:
			case d.Star4:
			case d.Star5:
			case d.Star6:
			case d.Star7:
			case d.Star8:
				n = -.008, o = .008;
				break;
			default: throw `Body not allowed for altitude search: ${t}`;
		}
		const r = _ * e;
		return Math.abs((360 / w2 - n) * Math.cos(r)) + Math.abs(o * Math.sin(r));
	}
	function re(t, e, n, o, r, s, i) {
		if (Y0(e), T(r), T(s), T(i), i < -90 || i > 90) throw `Invalid target altitude angle: ${i}`;
		const a = .42, c = e4(t, e.latitude);
		function l(E) {
			const m = f1(t, E, e, !0, !0);
			return n * (j1(E, e, m.ra, m.dec).altitude + B * Math.asin(s / m.dist) - i);
		}
		const h = y(o);
		let u = h, M = h, p = l(u), A = p;
		for (;;) {
			r < 0 ? (u = M.AddDays(-a), p = l(u)) : (M = u.AddDays(+a), A = l(M));
			const E = $t(0, l, c, u, M, p, A);
			if (E) {
				const m = $(l, E.tx, E.ty, {
					dt_tolerance_seconds: .1,
					init_f1: E.ax,
					init_f2: E.ay
				});
				if (m) {
					if (r < 0) {
						if (m.ut < h.ut + r) return null;
					} else if (m.ut > h.ut + r) return null;
					return m;
				}
				throw `Rise/set search failed after finding ascent: t1=${u}, t2=${M}, a1=${p}, a2=${A}`;
			}
			if (r < 0) {
				if (u.ut < h.ut + r) return null;
				M = u, A = p;
			} else {
				if (M.ut > h.ut + r) return null;
				u = M, p = A;
			}
		}
	}
	var se = class {
		constructor(t, e) {
			this.time = t, this.hor = e;
		}
	};
	function n4(t, e, n, o, r = 1) {
		Y0(e);
		let s = y(o), i = 0;
		if (t === d.Earth) throw "Cannot search for hour angle of the Earth.";
		if (T(n), n < 0 || n >= 24) throw `Invalid hour angle ${n}`;
		if (T(r), r === 0) throw "Direction must be positive or negative.";
		for (;;) {
			++i;
			let a = A0(s), c = f1(t, s, e, !0, !0), l = (n + c.ra - e.longitude / 15 - a) % 24;
			if (i === 1 ? r > 0 ? l < 0 && (l += 24) : l > 0 && (l -= 24) : l < -12 ? l += 24 : l > 12 && (l -= 24), Math.abs(l) * 3600 < .1) {
				const u = j1(s, e, c.ra, c.dec, "normal");
				return new se(s, u);
			}
			let h = l / 24 * w2;
			s = s.AddDays(h);
		}
	}
	function o4(t, e, n) {
		const o = y(e), r = k2(o), s = f1(t, o, n, !0, !0);
		let i = (n.longitude / 15 + r - s.ra) % 24;
		return i < 0 && (i += 24), i;
	}
	var ie = class {
		constructor(t, e, n, o) {
			this.mar_equinox = t, this.jun_solstice = e, this.sep_equinox = n, this.dec_solstice = o;
		}
	};
	function r4(t) {
		function e(n, o, r) {
			let s = new Date(Date.UTC(t, o - 1, r)), i = W2(n, s, 20);
			if (!i) throw `Cannot find season change near ${s.toISOString()}`;
			return i;
		}
		if (t instanceof Date && Number.isFinite(t.getTime()) && (t = t.getUTCFullYear()), !Number.isSafeInteger(t)) throw `Cannot calculate seasons because year argument ${t} is neither a Date nor a safe integer.`;
		return new ie(e(0, 3, 10), e(90, 6, 10), e(180, 9, 10), e(270, 12, 10));
	}
	var ae = class {
		constructor(t, e, n, o) {
			this.time = t, this.visibility = e, this.elongation = n, this.ecliptic_separation = o;
		}
	};
	function ce(t, e) {
		let n = y(e), o = Jt(t, d.Sun, n), r;
		o > 180 ? (r = "morning", o = 360 - o) : r = "evening";
		let s = e1(t, n);
		return new ae(n, r, s, o);
	}
	function s4(t, e) {
		function o(a) {
			const c = a.AddDays(-.005), l = a.AddDays(.01 / 2);
			return (e1(t, c) - e1(t, l)) / .01;
		}
		let r = y(e);
		const s = {
			Mercury: {
				s1: 50,
				s2: 85
			},
			Venus: {
				s1: 40,
				s2: 50
			}
		}[t];
		if (!s) throw "SearchMaxElongation works for Mercury and Venus only.";
		let i = 0;
		for (; ++i <= 2;) {
			let a = Z0(b0(t, r) - b0(d.Earth, r)), c, l, h;
			a >= -s.s1 && a < +s.s1 ? (h = 0, c = +s.s1, l = +s.s2) : a >= +s.s2 || a < -s.s2 ? (h = 0, c = -s.s2, l = -s.s1) : a >= 0 ? (h = -E1(t) / 4, c = +s.s1, l = +s.s2) : (h = -E1(t) / 4, c = -s.s2, l = -s.s1);
			let u = r.AddDays(h), M = n1(t, c, u), p = n1(t, l, M), A = o(M);
			if (A >= 0) throw `SearchMaxElongation: internal error: m1 = ${A}`;
			let E = o(p);
			if (E <= 0) throw `SearchMaxElongation: internal error: m2 = ${E}`;
			let m = $(o, M, p, {
				init_f1: A,
				init_f2: E,
				dt_tolerance_seconds: 10
			});
			if (!m) throw `SearchMaxElongation: failed search iter ${i} (t1=${M.toString()}, t2=${p.toString()})`;
			if (m.tt >= r.tt) return ce(t, m);
			r = p.AddDays(1);
		}
		throw "SearchMaxElongation: failed to find event after 2 tries.";
	}
	function i4(t, e) {
		if (t !== d.Venus) throw "SearchPeakMagnitude currently works for Venus only.";
		const n = .01;
		function o(c) {
			const l = c.AddDays(-n / 2), h = c.AddDays(+n / 2), u = tt(t, l).mag;
			return (tt(t, h).mag - u) / n;
		}
		let r = y(e);
		const s = 10, i = 30;
		let a = 0;
		for (; ++a <= 2;) {
			let c = Z0(b0(t, r) - b0(d.Earth, r)), l, h, u;
			c >= -s && c < +s ? (u = 0, l = +s, h = +i) : c >= +i || c < -i ? (u = 0, l = -i, h = -s) : c >= 0 ? (u = -E1(t) / 4, l = +s, h = +i) : (u = -E1(t) / 4, l = -i, h = -s);
			let M = r.AddDays(u), p = n1(t, l, M), A = n1(t, h, p), E = o(p);
			if (E >= 0) throw `SearchPeakMagnitude: internal error: m1 = ${E}`;
			let m = o(A);
			if (m <= 0) throw `SearchPeakMagnitude: internal error: m2 = ${m}`;
			let I = $(o, p, A, {
				init_f1: E,
				init_f2: m,
				dt_tolerance_seconds: 10
			});
			if (!I) throw `SearchPeakMagnitude: failed search iter ${a} (t1=${p.toString()}, t2=${A.toString()})`;
			if (I.tt >= r.tt) return tt(t, I);
			r = A.AddDays(1);
		}
		throw "SearchPeakMagnitude: failed to find event after 2 tries.";
	}
	var w0;
	(function(t) {
		t[t.Pericenter = 0] = "Pericenter", t[t.Apocenter = 1] = "Apocenter";
	})(w0 || (w0 = {}));
	var m1 = class {
		constructor(t, e, n) {
			this.time = t, this.kind = e, this.dist_au = n, this.dist_km = n * z;
		}
	};
	function ue(t) {
		function n(c) {
			let l = c.AddDays(-5e-4), h = c.AddDays(.001 / 2), u = g0(l).distance_au;
			return (g0(h).distance_au - u) / .001;
		}
		function o(c) {
			return -n(c);
		}
		let r = y(t), s = n(r);
		const i = 5;
		for (var a = 0; a * i < 2 * b1; ++a) {
			let c = r.AddDays(i), l = n(c);
			if (s * l <= 0) {
				if (s < 0 || l > 0) {
					let h = $(n, r, c, {
						init_f1: s,
						init_f2: l
					});
					if (!h) throw "SearchLunarApsis INTERNAL ERROR: perigee search failed!";
					let u = g0(h).distance_au;
					return new m1(h, 0, u);
				}
				if (s > 0 || l < 0) {
					let h = $(o, r, c, {
						init_f1: -s,
						init_f2: -l
					});
					if (!h) throw "SearchLunarApsis INTERNAL ERROR: apogee search failed!";
					let u = g0(h).distance_au;
					return new m1(h, 1, u);
				}
				throw "SearchLunarApsis INTERNAL ERROR: cannot classify apsis event!";
			}
			r = c, s = l;
		}
		throw "SearchLunarApsis INTERNAL ERROR: could not find apsis within 2 synodic months of start date.";
	}
	function a4(t) {
		let e = ue(t.time.AddDays(11));
		if (e.kind + t.kind !== 1) throw `NextLunarApsis INTERNAL ERROR: did not find alternating apogee/perigee: prev=${t.kind} @ ${t.time.toString()}, next=${e.kind} @ ${e.time.toString()}`;
		return e;
	}
	function le(t, e, n, o) {
		const r = e === w0.Apocenter ? 1 : -1, s = 10;
		for (;;) {
			const i = o / (s - 1);
			if (i < 1 / 1440) {
				const l = n.AddDays(i / 2);
				return new m1(l, e, P0(t, l));
			}
			let a = -1, c = 0;
			for (let l = 0; l < s; ++l) {
				const h = r * P0(t, n.AddDays(l * i));
				(l == 0 || h > c) && (a = l, c = h);
			}
			n = n.AddDays((a - 1) * i), o = 2 * i;
		}
	}
	function c4(t, e) {
		const o = e.AddDays(i0[t].OrbitalPeriod * -.08333333333333333), r = e.AddDays(i0[t].OrbitalPeriod * (270 / 360));
		let s = o, i = o, a = -1, c = -1;
		const l = (r.ut - o.ut) / 99;
		for (let M = 0; M < 100; ++M) {
			const p = o.AddDays(M * l), A = P0(t, p);
			M === 0 ? c = a = A : (A > c && (c = A, i = p), A < a && (a = A, s = p));
		}
		const h = le(t, 0, s.AddDays(-2 * l), 4 * l), u = le(t, 1, i.AddDays(-2 * l), 4 * l);
		if (h.time.tt >= e.tt) return u.time.tt >= e.tt && u.time.tt < h.time.tt ? u : h;
		if (u.time.tt >= e.tt) return u;
		throw "Internal error: failed to find Neptune apsis.";
	}
	function he(t, e) {
		if (e = y(e), t === d.Neptune || t === d.Pluto) return c4(t, e);
		function n(c) {
			let h = c.AddDays(-5e-4), u = c.AddDays(.001 / 2), M = P0(t, h);
			return (P0(t, u) - M) / .001;
		}
		function o(c) {
			return -n(c);
		}
		const r = i0[t].OrbitalPeriod, s = r / 6;
		let i = e, a = n(i);
		for (let c = 0; c * s < 2 * r; ++c) {
			const l = i.AddDays(s), h = n(l);
			if (a * h <= 0) {
				let u, M;
				if (a < 0 || h > 0) u = n, M = w0.Pericenter;
				else if (a > 0 || h < 0) u = o, M = w0.Apocenter;
				else throw "Internal error with slopes in SearchPlanetApsis";
				const p = $(u, i, l);
				if (!p) throw "Failed to find slope transition in planetary apsis search.";
				const A = P0(t, p);
				return new m1(p, M, A);
			}
			i = l, a = h;
		}
		throw "Internal error: should have found planetary apsis within 2 orbital periods.";
	}
	function u4(t, e) {
		if (e.kind !== w0.Pericenter && e.kind !== w0.Apocenter) throw `Invalid apsis kind: ${e.kind}`;
		const n = .25 * i0[t].OrbitalPeriod, o = he(t, e.time.AddDays(n));
		if (o.kind + e.kind !== 1) throw `Internal error: previous apsis was ${e.kind}, but found ${o.kind} for next apsis.`;
		return o;
	}
	function o1(t) {
		return new V([
			[
				t.rot[0][0],
				t.rot[1][0],
				t.rot[2][0]
			],
			[
				t.rot[0][1],
				t.rot[1][1],
				t.rot[2][1]
			],
			[
				t.rot[0][2],
				t.rot[1][2],
				t.rot[2][2]
			]
		]);
	}
	function x0(t, e) {
		return new V([
			[
				e.rot[0][0] * t.rot[0][0] + e.rot[1][0] * t.rot[0][1] + e.rot[2][0] * t.rot[0][2],
				e.rot[0][1] * t.rot[0][0] + e.rot[1][1] * t.rot[0][1] + e.rot[2][1] * t.rot[0][2],
				e.rot[0][2] * t.rot[0][0] + e.rot[1][2] * t.rot[0][1] + e.rot[2][2] * t.rot[0][2]
			],
			[
				e.rot[0][0] * t.rot[1][0] + e.rot[1][0] * t.rot[1][1] + e.rot[2][0] * t.rot[1][2],
				e.rot[0][1] * t.rot[1][0] + e.rot[1][1] * t.rot[1][1] + e.rot[2][1] * t.rot[1][2],
				e.rot[0][2] * t.rot[1][0] + e.rot[1][2] * t.rot[1][1] + e.rot[2][2] * t.rot[1][2]
			],
			[
				e.rot[0][0] * t.rot[2][0] + e.rot[1][0] * t.rot[2][1] + e.rot[2][0] * t.rot[2][2],
				e.rot[0][1] * t.rot[2][0] + e.rot[1][1] * t.rot[2][1] + e.rot[2][1] * t.rot[2][2],
				e.rot[0][2] * t.rot[2][0] + e.rot[1][2] * t.rot[2][1] + e.rot[2][2] * t.rot[2][2]
			]
		]);
	}
	function l4() {
		return new V([
			[
				1,
				0,
				0
			],
			[
				0,
				1,
				0
			],
			[
				0,
				0,
				1
			]
		]);
	}
	function h4(t, e, n) {
		if (e !== 0 && e !== 1 && e !== 2) throw `Invalid axis ${e}. Must be [0, 1, 2].`;
		const o = T(n) * _, r = Math.cos(o), s = Math.sin(o), i = (e + 1) % 3, a = (e + 2) % 3, c = e;
		let l = [
			[
				0,
				0,
				0
			],
			[
				0,
				0,
				0
			],
			[
				0,
				0,
				0
			]
		];
		return l[i][i] = r * t.rot[i][i] - s * t.rot[i][a], l[i][a] = s * t.rot[i][i] + r * t.rot[i][a], l[i][c] = t.rot[i][c], l[a][i] = r * t.rot[a][i] - s * t.rot[a][a], l[a][a] = s * t.rot[a][i] + r * t.rot[a][a], l[a][c] = t.rot[a][c], l[c][i] = r * t.rot[c][i] - s * t.rot[c][a], l[c][a] = s * t.rot[c][i] + r * t.rot[c][a], l[c][c] = t.rot[c][c], new V(l);
	}
	function et(t, e) {
		e = y(e);
		const n = t.lat * _, o = t.lon * _, r = t.dist * Math.cos(n);
		return new D(r * Math.cos(o), r * Math.sin(o), t.dist * Math.sin(n), e);
	}
	function Ft(t) {
		const e = Gt(t);
		return new G1(e.lon / 15, e.lat, e.dist, t);
	}
	function Gt(t) {
		const e = t.x * t.x + t.y * t.y, n = Math.sqrt(e + t.z * t.z);
		let o, r;
		if (e === 0) {
			if (t.z === 0) throw "Zero-length vector not allowed.";
			r = 0, o = t.z < 0 ? -90 : 90;
		} else r = B * Math.atan2(t.y, t.x), r < 0 && (r += 360), o = B * Math.atan2(t.z, Math.sqrt(e));
		return new G0(o, r, n);
	}
	function de(t) {
		return t = 360 - t, t >= 360 ? t -= 360 : t < 0 && (t += 360), t;
	}
	function d4(t, e) {
		const n = Gt(t);
		return n.lon = de(n.lon), n.lat += R1(e, n.lat), n;
	}
	function f4(t, e, n) {
		e = y(e);
		const o = de(t.lon);
		return et(new G0(t.lat + fe(n, t.lat), o, t.dist), e);
	}
	function R1(t, e) {
		let n;
		if (T(e), e < -90 || e > 90) return 0;
		if (t === "normal" || t === "jplhor") {
			let o = e;
			o < -1 && (o = -1), n = 1.02 / Math.tan((o + 10.3 / (o + 5.11)) * _) / 60, t === "normal" && e < -1 && (n *= (e + 90) / 89);
		} else if (!t) n = 0;
		else throw `Invalid refraction option: ${t}`;
		return n;
	}
	function fe(t, e) {
		if (e < -90 || e > 90) return 0;
		let n = e - R1(t, e);
		for (;;) {
			let o = n + R1(t, n) - e;
			if (Math.abs(o) < 1e-14) return n - e;
			n -= o;
		}
	}
	function I1(t, e) {
		return new D(t.rot[0][0] * e.x + t.rot[1][0] * e.y + t.rot[2][0] * e.z, t.rot[0][1] * e.x + t.rot[1][1] * e.y + t.rot[2][1] * e.z, t.rot[0][2] * e.x + t.rot[1][2] * e.y + t.rot[2][2] * e.z, e.t);
	}
	function nt(t, e) {
		return new H(t.rot[0][0] * e.x + t.rot[1][0] * e.y + t.rot[2][0] * e.z, t.rot[0][1] * e.x + t.rot[1][1] * e.y + t.rot[2][1] * e.z, t.rot[0][2] * e.x + t.rot[1][2] * e.y + t.rot[2][2] * e.z, t.rot[0][0] * e.vx + t.rot[1][0] * e.vy + t.rot[2][0] * e.vz, t.rot[0][1] * e.vx + t.rot[1][1] * e.vy + t.rot[2][1] * e.vz, t.rot[0][2] * e.vx + t.rot[1][2] * e.vy + t.rot[2][2] * e.vz, e.t);
	}
	function Me() {
		const t = .9174821430670688, e = .3977769691083922;
		return new V([
			[
				1,
				0,
				0
			],
			[
				0,
				+t,
				-e
			],
			[
				0,
				+e,
				+t
			]
		]);
	}
	function M4() {
		const t = .9174821430670688, e = .3977769691083922;
		return new V([
			[
				1,
				0,
				0
			],
			[
				0,
				+t,
				+e
			],
			[
				0,
				-e,
				+t
			]
		]);
	}
	function ot(t) {
		return t = y(t), x0(J1(t, L.From2000), $1(t, L.From2000));
	}
	function A4(t) {
		const e = y(t);
		return x0(ot(e), me(e));
	}
	function S4(t) {
		const e = y(t);
		return x0(ye(e), rt(e));
	}
	function rt(t) {
		return t = y(t), x0($1(t, L.Into2000), J1(t, L.Into2000));
	}
	function jt(t, e) {
		t = y(t);
		const n = Math.sin(e.latitude * _), o = Math.cos(e.latitude * _), r = Math.sin(e.longitude * _), s = Math.cos(e.longitude * _), i = [
			o * s,
			o * r,
			n
		], a = [
			-n * s,
			-n * r,
			o
		], c = [
			r,
			-s,
			0
		], l = -15 * A0(t), h = j0(l, i), u = j0(l, a), M = j0(l, c);
		return new V([
			[
				u[0],
				M[0],
				h[0]
			],
			[
				u[1],
				M[1],
				h[1]
			],
			[
				u[2],
				M[2],
				h[2]
			]
		]);
	}
	function Ae(t, e) {
		return o1(jt(t, e));
	}
	function Se(t, e) {
		return t = y(t), x0(Ae(t, e), rt(t));
	}
	function _4(t, e) {
		return o1(Se(t, e));
	}
	function _e(t) {
		return x0(rt(t), Me());
	}
	function pe(t) {
		return o1(_e(t));
	}
	function Ee(t, e) {
		return t = y(t), x0(pe(t), jt(t, e));
	}
	function p4(t, e) {
		return o1(Ee(t, e));
	}
	function E4() {
		return new V([
			[
				-.0548624779711344,
				.4941095946388765,
				-.8676668813529025
			],
			[
				-.8734572784246782,
				-.4447938112296831,
				-.1980677870294097
			],
			[
				-.483800052994852,
				.7470034631630423,
				.4559861124470794
			]
		]);
	}
	function y4() {
		return new V([
			[
				-.0548624779711344,
				-.8734572784246782,
				-.483800052994852
			],
			[
				.4941095946388765,
				-.4447938112296831,
				.7470034631630423
			],
			[
				-.8676668813529025,
				-.1980677870294097,
				.4559861124470794
			]
		]);
	}
	function ye(t) {
		const e = I0(y(t)).tobl * _, n = Math.cos(e), o = Math.sin(e);
		return new V([
			[
				1,
				0,
				0
			],
			[
				0,
				+n,
				+o
			],
			[
				0,
				-o,
				+n
			]
		]);
	}
	function me(t) {
		const e = I0(y(t)).tobl * _, n = Math.cos(e), o = Math.sin(e);
		return new V([
			[
				1,
				0,
				0
			],
			[
				0,
				+n,
				-o
			],
			[
				0,
				+o,
				+n
			]
		]);
	}
	const m4 = [
		["And", "Andromeda"],
		["Ant", "Antila"],
		["Aps", "Apus"],
		["Aql", "Aquila"],
		["Aqr", "Aquarius"],
		["Ara", "Ara"],
		["Ari", "Aries"],
		["Aur", "Auriga"],
		["Boo", "Bootes"],
		["Cae", "Caelum"],
		["Cam", "Camelopardis"],
		["Cap", "Capricornus"],
		["Car", "Carina"],
		["Cas", "Cassiopeia"],
		["Cen", "Centaurus"],
		["Cep", "Cepheus"],
		["Cet", "Cetus"],
		["Cha", "Chamaeleon"],
		["Cir", "Circinus"],
		["CMa", "Canis Major"],
		["CMi", "Canis Minor"],
		["Cnc", "Cancer"],
		["Col", "Columba"],
		["Com", "Coma Berenices"],
		["CrA", "Corona Australis"],
		["CrB", "Corona Borealis"],
		["Crt", "Crater"],
		["Cru", "Crux"],
		["Crv", "Corvus"],
		["CVn", "Canes Venatici"],
		["Cyg", "Cygnus"],
		["Del", "Delphinus"],
		["Dor", "Dorado"],
		["Dra", "Draco"],
		["Equ", "Equuleus"],
		["Eri", "Eridanus"],
		["For", "Fornax"],
		["Gem", "Gemini"],
		["Gru", "Grus"],
		["Her", "Hercules"],
		["Hor", "Horologium"],
		["Hya", "Hydra"],
		["Hyi", "Hydrus"],
		["Ind", "Indus"],
		["Lac", "Lacerta"],
		["Leo", "Leo"],
		["Lep", "Lepus"],
		["Lib", "Libra"],
		["LMi", "Leo Minor"],
		["Lup", "Lupus"],
		["Lyn", "Lynx"],
		["Lyr", "Lyra"],
		["Men", "Mensa"],
		["Mic", "Microscopium"],
		["Mon", "Monoceros"],
		["Mus", "Musca"],
		["Nor", "Norma"],
		["Oct", "Octans"],
		["Oph", "Ophiuchus"],
		["Ori", "Orion"],
		["Pav", "Pavo"],
		["Peg", "Pegasus"],
		["Per", "Perseus"],
		["Phe", "Phoenix"],
		["Pic", "Pictor"],
		["PsA", "Pisces Austrinus"],
		["Psc", "Pisces"],
		["Pup", "Puppis"],
		["Pyx", "Pyxis"],
		["Ret", "Reticulum"],
		["Scl", "Sculptor"],
		["Sco", "Scorpius"],
		["Sct", "Scutum"],
		["Ser", "Serpens"],
		["Sex", "Sextans"],
		["Sge", "Sagitta"],
		["Sgr", "Sagittarius"],
		["Tau", "Taurus"],
		["Tel", "Telescopium"],
		["TrA", "Triangulum Australe"],
		["Tri", "Triangulum"],
		["Tuc", "Tucana"],
		["UMa", "Ursa Major"],
		["UMi", "Ursa Minor"],
		["Vel", "Vela"],
		["Vir", "Virgo"],
		["Vol", "Volans"],
		["Vul", "Vulpecula"]
	], R4 = [
		[
			83,
			0,
			8640,
			2112
		],
		[
			83,
			2880,
			5220,
			2076
		],
		[
			83,
			7560,
			8280,
			2068
		],
		[
			83,
			6480,
			7560,
			2064
		],
		[
			15,
			0,
			2880,
			2040
		],
		[
			10,
			3300,
			3840,
			1968
		],
		[
			15,
			0,
			1800,
			1920
		],
		[
			10,
			3840,
			5220,
			1920
		],
		[
			83,
			6300,
			6480,
			1920
		],
		[
			33,
			7260,
			7560,
			1920
		],
		[
			15,
			0,
			1263,
			1848
		],
		[
			10,
			4140,
			4890,
			1848
		],
		[
			83,
			5952,
			6300,
			1800
		],
		[
			15,
			7260,
			7440,
			1800
		],
		[
			10,
			2868,
			3300,
			1764
		],
		[
			33,
			3300,
			4080,
			1764
		],
		[
			83,
			4680,
			5952,
			1680
		],
		[
			13,
			1116,
			1230,
			1632
		],
		[
			33,
			7350,
			7440,
			1608
		],
		[
			33,
			4080,
			4320,
			1596
		],
		[
			15,
			0,
			120,
			1584
		],
		[
			83,
			5040,
			5640,
			1584
		],
		[
			15,
			8490,
			8640,
			1584
		],
		[
			33,
			4320,
			4860,
			1536
		],
		[
			33,
			4860,
			5190,
			1512
		],
		[
			15,
			8340,
			8490,
			1512
		],
		[
			10,
			2196,
			2520,
			1488
		],
		[
			33,
			7200,
			7350,
			1476
		],
		[
			15,
			7393.2,
			7416,
			1462
		],
		[
			10,
			2520,
			2868,
			1440
		],
		[
			82,
			2868,
			3030,
			1440
		],
		[
			33,
			7116,
			7200,
			1428
		],
		[
			15,
			7200,
			7393.2,
			1428
		],
		[
			15,
			8232,
			8340,
			1418
		],
		[
			13,
			0,
			876,
			1404
		],
		[
			33,
			6990,
			7116,
			1392
		],
		[
			13,
			612,
			687,
			1380
		],
		[
			13,
			876,
			1116,
			1368
		],
		[
			10,
			1116,
			1140,
			1368
		],
		[
			15,
			8034,
			8232,
			1350
		],
		[
			10,
			1800,
			2196,
			1344
		],
		[
			82,
			5052,
			5190,
			1332
		],
		[
			33,
			5190,
			6990,
			1332
		],
		[
			10,
			1140,
			1200,
			1320
		],
		[
			15,
			7968,
			8034,
			1320
		],
		[
			15,
			7416,
			7908,
			1316
		],
		[
			13,
			0,
			612,
			1296
		],
		[
			50,
			2196,
			2340,
			1296
		],
		[
			82,
			4350,
			4860,
			1272
		],
		[
			33,
			5490,
			5670,
			1272
		],
		[
			15,
			7908,
			7968,
			1266
		],
		[
			10,
			1200,
			1800,
			1260
		],
		[
			13,
			8232,
			8400,
			1260
		],
		[
			33,
			5670,
			6120,
			1236
		],
		[
			62,
			735,
			906,
			1212
		],
		[
			33,
			6120,
			6564,
			1212
		],
		[
			13,
			0,
			492,
			1200
		],
		[
			62,
			492,
			600,
			1200
		],
		[
			50,
			2340,
			2448,
			1200
		],
		[
			13,
			8400,
			8640,
			1200
		],
		[
			82,
			4860,
			5052,
			1164
		],
		[
			13,
			0,
			402,
			1152
		],
		[
			13,
			8490,
			8640,
			1152
		],
		[
			39,
			6543,
			6564,
			1140
		],
		[
			33,
			6564,
			6870,
			1140
		],
		[
			30,
			6870,
			6900,
			1140
		],
		[
			62,
			600,
			735,
			1128
		],
		[
			82,
			3030,
			3300,
			1128
		],
		[
			13,
			60,
			312,
			1104
		],
		[
			82,
			4320,
			4350,
			1080
		],
		[
			50,
			2448,
			2652,
			1068
		],
		[
			30,
			7887,
			7908,
			1056
		],
		[
			30,
			7875,
			7887,
			1050
		],
		[
			30,
			6900,
			6984,
			1044
		],
		[
			82,
			3300,
			3660,
			1008
		],
		[
			82,
			3660,
			3882,
			960
		],
		[
			8,
			5556,
			5670,
			960
		],
		[
			39,
			5670,
			5880,
			960
		],
		[
			50,
			3330,
			3450,
			954
		],
		[
			0,
			0,
			906,
			882
		],
		[
			62,
			906,
			924,
			882
		],
		[
			51,
			6969,
			6984,
			876
		],
		[
			62,
			1620,
			1689,
			864
		],
		[
			30,
			7824,
			7875,
			864
		],
		[
			44,
			7875,
			7920,
			864
		],
		[
			7,
			2352,
			2652,
			852
		],
		[
			50,
			2652,
			2790,
			852
		],
		[
			0,
			0,
			720,
			840
		],
		[
			44,
			7920,
			8214,
			840
		],
		[
			44,
			8214,
			8232,
			828
		],
		[
			0,
			8232,
			8460,
			828
		],
		[
			62,
			924,
			978,
			816
		],
		[
			82,
			3882,
			3960,
			816
		],
		[
			29,
			4320,
			4440,
			816
		],
		[
			50,
			2790,
			3330,
			804
		],
		[
			48,
			3330,
			3558,
			804
		],
		[
			0,
			258,
			507,
			792
		],
		[
			8,
			5466,
			5556,
			792
		],
		[
			0,
			8460,
			8550,
			770
		],
		[
			29,
			4440,
			4770,
			768
		],
		[
			0,
			8550,
			8640,
			752
		],
		[
			29,
			5025,
			5052,
			738
		],
		[
			80,
			870,
			978,
			736
		],
		[
			62,
			978,
			1620,
			736
		],
		[
			7,
			1620,
			1710,
			720
		],
		[
			51,
			6543,
			6969,
			720
		],
		[
			82,
			3960,
			4320,
			696
		],
		[
			30,
			7080,
			7530,
			696
		],
		[
			7,
			1710,
			2118,
			684
		],
		[
			48,
			3558,
			3780,
			684
		],
		[
			29,
			4770,
			5025,
			684
		],
		[
			0,
			0,
			24,
			672
		],
		[
			80,
			507,
			600,
			672
		],
		[
			7,
			2118,
			2352,
			672
		],
		[
			37,
			2838,
			2880,
			672
		],
		[
			30,
			7530,
			7824,
			672
		],
		[
			30,
			6933,
			7080,
			660
		],
		[
			80,
			690,
			870,
			654
		],
		[
			25,
			5820,
			5880,
			648
		],
		[
			8,
			5430,
			5466,
			624
		],
		[
			25,
			5466,
			5820,
			624
		],
		[
			51,
			6612,
			6792,
			624
		],
		[
			48,
			3870,
			3960,
			612
		],
		[
			51,
			6792,
			6933,
			612
		],
		[
			80,
			600,
			690,
			600
		],
		[
			66,
			258,
			306,
			570
		],
		[
			48,
			3780,
			3870,
			564
		],
		[
			87,
			7650,
			7710,
			564
		],
		[
			77,
			2052,
			2118,
			548
		],
		[
			0,
			24,
			51,
			528
		],
		[
			73,
			5730,
			5772,
			528
		],
		[
			37,
			2118,
			2238,
			516
		],
		[
			87,
			7140,
			7290,
			510
		],
		[
			87,
			6792,
			6930,
			506
		],
		[
			0,
			51,
			306,
			504
		],
		[
			87,
			7290,
			7404,
			492
		],
		[
			37,
			2811,
			2838,
			480
		],
		[
			87,
			7404,
			7650,
			468
		],
		[
			87,
			6930,
			7140,
			460
		],
		[
			6,
			1182,
			1212,
			456
		],
		[
			75,
			6792,
			6840,
			444
		],
		[
			59,
			2052,
			2076,
			432
		],
		[
			37,
			2238,
			2271,
			420
		],
		[
			75,
			6840,
			7140,
			388
		],
		[
			77,
			1788,
			1920,
			384
		],
		[
			39,
			5730,
			5790,
			384
		],
		[
			75,
			7140,
			7290,
			378
		],
		[
			77,
			1662,
			1788,
			372
		],
		[
			77,
			1920,
			2016,
			372
		],
		[
			23,
			4620,
			4860,
			360
		],
		[
			39,
			6210,
			6570,
			344
		],
		[
			23,
			4272,
			4620,
			336
		],
		[
			37,
			2700,
			2811,
			324
		],
		[
			39,
			6030,
			6210,
			308
		],
		[
			61,
			0,
			51,
			300
		],
		[
			77,
			2016,
			2076,
			300
		],
		[
			37,
			2520,
			2700,
			300
		],
		[
			61,
			7602,
			7680,
			300
		],
		[
			37,
			2271,
			2496,
			288
		],
		[
			39,
			6570,
			6792,
			288
		],
		[
			31,
			7515,
			7578,
			284
		],
		[
			61,
			7578,
			7602,
			284
		],
		[
			45,
			4146,
			4272,
			264
		],
		[
			59,
			2247,
			2271,
			240
		],
		[
			37,
			2496,
			2520,
			240
		],
		[
			21,
			2811,
			2853,
			240
		],
		[
			61,
			8580,
			8640,
			240
		],
		[
			6,
			600,
			1182,
			238
		],
		[
			31,
			7251,
			7308,
			204
		],
		[
			8,
			4860,
			5430,
			192
		],
		[
			61,
			8190,
			8580,
			180
		],
		[
			21,
			2853,
			3330,
			168
		],
		[
			45,
			3330,
			3870,
			168
		],
		[
			58,
			6570,
			6718.4,
			150
		],
		[
			3,
			6718.4,
			6792,
			150
		],
		[
			31,
			7500,
			7515,
			144
		],
		[
			20,
			2520,
			2526,
			132
		],
		[
			73,
			6570,
			6633,
			108
		],
		[
			39,
			5790,
			6030,
			96
		],
		[
			58,
			6570,
			6633,
			72
		],
		[
			61,
			7728,
			7800,
			66
		],
		[
			66,
			0,
			720,
			48
		],
		[
			73,
			6690,
			6792,
			48
		],
		[
			31,
			7308,
			7500,
			48
		],
		[
			34,
			7500,
			7680,
			48
		],
		[
			61,
			7680,
			7728,
			48
		],
		[
			61,
			7920,
			8190,
			48
		],
		[
			61,
			7800,
			7920,
			42
		],
		[
			20,
			2526,
			2592,
			36
		],
		[
			77,
			1290,
			1662,
			0
		],
		[
			59,
			1662,
			1680,
			0
		],
		[
			20,
			2592,
			2910,
			0
		],
		[
			85,
			5280,
			5430,
			0
		],
		[
			58,
			6420,
			6570,
			0
		],
		[
			16,
			954,
			1182,
			-42
		],
		[
			77,
			1182,
			1290,
			-42
		],
		[
			73,
			5430,
			5856,
			-78
		],
		[
			59,
			1680,
			1830,
			-96
		],
		[
			59,
			2100,
			2247,
			-96
		],
		[
			73,
			6420,
			6468,
			-96
		],
		[
			73,
			6570,
			6690,
			-96
		],
		[
			3,
			6690,
			6792,
			-96
		],
		[
			66,
			8190,
			8580,
			-96
		],
		[
			45,
			3870,
			4146,
			-144
		],
		[
			85,
			4146,
			4260,
			-144
		],
		[
			66,
			0,
			120,
			-168
		],
		[
			66,
			8580,
			8640,
			-168
		],
		[
			85,
			5130,
			5280,
			-192
		],
		[
			58,
			5730,
			5856,
			-192
		],
		[
			3,
			7200,
			7392,
			-216
		],
		[
			4,
			7680,
			7872,
			-216
		],
		[
			58,
			6180,
			6468,
			-240
		],
		[
			54,
			2100,
			2910,
			-264
		],
		[
			35,
			1770,
			1830,
			-264
		],
		[
			59,
			1830,
			2100,
			-264
		],
		[
			41,
			2910,
			3012,
			-264
		],
		[
			74,
			3450,
			3870,
			-264
		],
		[
			85,
			4260,
			4620,
			-264
		],
		[
			58,
			6330,
			6360,
			-280
		],
		[
			3,
			6792,
			7200,
			-288.8
		],
		[
			35,
			1740,
			1770,
			-348
		],
		[
			4,
			7392,
			7680,
			-360
		],
		[
			73,
			6180,
			6570,
			-384
		],
		[
			72,
			6570,
			6792,
			-384
		],
		[
			41,
			3012,
			3090,
			-408
		],
		[
			58,
			5856,
			5895,
			-438
		],
		[
			41,
			3090,
			3270,
			-456
		],
		[
			26,
			3870,
			3900,
			-456
		],
		[
			71,
			5856,
			5895,
			-462
		],
		[
			47,
			5640,
			5730,
			-480
		],
		[
			28,
			4530,
			4620,
			-528
		],
		[
			85,
			4620,
			5130,
			-528
		],
		[
			41,
			3270,
			3510,
			-576
		],
		[
			16,
			600,
			954,
			-585.2
		],
		[
			35,
			954,
			1350,
			-585.2
		],
		[
			26,
			3900,
			4260,
			-588
		],
		[
			28,
			4260,
			4530,
			-588
		],
		[
			47,
			5130,
			5370,
			-588
		],
		[
			58,
			5856,
			6030,
			-590
		],
		[
			16,
			0,
			600,
			-612
		],
		[
			11,
			7680,
			7872,
			-612
		],
		[
			4,
			7872,
			8580,
			-612
		],
		[
			16,
			8580,
			8640,
			-612
		],
		[
			41,
			3510,
			3690,
			-636
		],
		[
			35,
			1692,
			1740,
			-654
		],
		[
			46,
			1740,
			2202,
			-654
		],
		[
			11,
			7200,
			7680,
			-672
		],
		[
			41,
			3690,
			3810,
			-700
		],
		[
			41,
			4530,
			5370,
			-708
		],
		[
			47,
			5370,
			5640,
			-708
		],
		[
			71,
			5640,
			5760,
			-708
		],
		[
			35,
			1650,
			1692,
			-720
		],
		[
			58,
			6030,
			6336,
			-720
		],
		[
			76,
			6336,
			6420,
			-720
		],
		[
			41,
			3810,
			3900,
			-748
		],
		[
			19,
			2202,
			2652,
			-792
		],
		[
			41,
			4410,
			4530,
			-792
		],
		[
			41,
			3900,
			4410,
			-840
		],
		[
			36,
			1260,
			1350,
			-864
		],
		[
			68,
			3012,
			3372,
			-882
		],
		[
			35,
			1536,
			1650,
			-888
		],
		[
			76,
			6420,
			6900,
			-888
		],
		[
			65,
			7680,
			8280,
			-888
		],
		[
			70,
			8280,
			8400,
			-888
		],
		[
			36,
			1080,
			1260,
			-950
		],
		[
			1,
			3372,
			3960,
			-954
		],
		[
			70,
			0,
			600,
			-960
		],
		[
			36,
			600,
			1080,
			-960
		],
		[
			35,
			1392,
			1536,
			-960
		],
		[
			70,
			8400,
			8640,
			-960
		],
		[
			14,
			5100,
			5370,
			-1008
		],
		[
			49,
			5640,
			5760,
			-1008
		],
		[
			71,
			5760,
			5911.5,
			-1008
		],
		[
			9,
			1740,
			1800,
			-1032
		],
		[
			22,
			1800,
			2370,
			-1032
		],
		[
			67,
			2880,
			3012,
			-1032
		],
		[
			35,
			1230,
			1392,
			-1056
		],
		[
			71,
			5911.5,
			6420,
			-1092
		],
		[
			24,
			6420,
			6900,
			-1092
		],
		[
			76,
			6900,
			7320,
			-1092
		],
		[
			53,
			7320,
			7680,
			-1092
		],
		[
			35,
			1080,
			1230,
			-1104
		],
		[
			9,
			1620,
			1740,
			-1116
		],
		[
			49,
			5520,
			5640,
			-1152
		],
		[
			63,
			0,
			840,
			-1156
		],
		[
			35,
			960,
			1080,
			-1176
		],
		[
			40,
			1470,
			1536,
			-1176
		],
		[
			9,
			1536,
			1620,
			-1176
		],
		[
			38,
			7680,
			7920,
			-1200
		],
		[
			67,
			2160,
			2880,
			-1218
		],
		[
			84,
			2880,
			2940,
			-1218
		],
		[
			35,
			870,
			960,
			-1224
		],
		[
			40,
			1380,
			1470,
			-1224
		],
		[
			63,
			0,
			660,
			-1236
		],
		[
			12,
			2160,
			2220,
			-1260
		],
		[
			84,
			2940,
			3042,
			-1272
		],
		[
			40,
			1260,
			1380,
			-1276
		],
		[
			32,
			1380,
			1440,
			-1276
		],
		[
			63,
			0,
			570,
			-1284
		],
		[
			35,
			780,
			870,
			-1296
		],
		[
			64,
			1620,
			1800,
			-1296
		],
		[
			49,
			5418,
			5520,
			-1296
		],
		[
			84,
			3042,
			3180,
			-1308
		],
		[
			12,
			2220,
			2340,
			-1320
		],
		[
			14,
			4260,
			4620,
			-1320
		],
		[
			49,
			5100,
			5418,
			-1320
		],
		[
			56,
			5418,
			5520,
			-1320
		],
		[
			32,
			1440,
			1560,
			-1356
		],
		[
			84,
			3180,
			3960,
			-1356
		],
		[
			14,
			3960,
			4050,
			-1356
		],
		[
			5,
			6300,
			6480,
			-1368
		],
		[
			78,
			6480,
			7320,
			-1368
		],
		[
			38,
			7920,
			8400,
			-1368
		],
		[
			40,
			1152,
			1260,
			-1380
		],
		[
			64,
			1800,
			1980,
			-1380
		],
		[
			12,
			2340,
			2460,
			-1392
		],
		[
			63,
			0,
			480,
			-1404
		],
		[
			35,
			480,
			780,
			-1404
		],
		[
			63,
			8400,
			8640,
			-1404
		],
		[
			32,
			1560,
			1650,
			-1416
		],
		[
			56,
			5520,
			5911.5,
			-1440
		],
		[
			43,
			7320,
			7680,
			-1440
		],
		[
			64,
			1980,
			2160,
			-1464
		],
		[
			18,
			5460,
			5520,
			-1464
		],
		[
			5,
			5911.5,
			5970,
			-1464
		],
		[
			18,
			5370,
			5460,
			-1526
		],
		[
			5,
			5970,
			6030,
			-1526
		],
		[
			64,
			2160,
			2460,
			-1536
		],
		[
			12,
			2460,
			3252,
			-1536
		],
		[
			14,
			4050,
			4260,
			-1536
		],
		[
			27,
			4260,
			4620,
			-1536
		],
		[
			14,
			4620,
			5232,
			-1536
		],
		[
			18,
			4860,
			4920,
			-1560
		],
		[
			5,
			6030,
			6060,
			-1560
		],
		[
			40,
			780,
			1152,
			-1620
		],
		[
			69,
			1152,
			1650,
			-1620
		],
		[
			18,
			5310,
			5370,
			-1620
		],
		[
			5,
			6060,
			6300,
			-1620
		],
		[
			60,
			6300,
			6480,
			-1620
		],
		[
			81,
			7920,
			8400,
			-1620
		],
		[
			32,
			1650,
			2370,
			-1680
		],
		[
			18,
			4920,
			5310,
			-1680
		],
		[
			79,
			5310,
			6120,
			-1680
		],
		[
			81,
			0,
			480,
			-1800
		],
		[
			42,
			1260,
			1650,
			-1800
		],
		[
			86,
			2370,
			3252,
			-1800
		],
		[
			12,
			3252,
			4050,
			-1800
		],
		[
			55,
			4050,
			4920,
			-1800
		],
		[
			60,
			6480,
			7680,
			-1800
		],
		[
			43,
			7680,
			8400,
			-1800
		],
		[
			81,
			8400,
			8640,
			-1800
		],
		[
			81,
			270,
			480,
			-1824
		],
		[
			42,
			0,
			1260,
			-1980
		],
		[
			17,
			2760,
			4920,
			-1980
		],
		[
			2,
			4920,
			6480,
			-1980
		],
		[
			52,
			1260,
			2760,
			-2040
		],
		[
			57,
			0,
			8640,
			-2160
		]
	];
	let Yt, Re;
	var Ie = class {
		constructor(t, e, n, o) {
			this.symbol = t, this.name = e, this.ra1875 = n, this.dec1875 = o;
		}
	};
	function I4(t, e) {
		if (T(t), T(e), e < -90 || e > 90) throw "Invalid declination angle. Must be -90..+90.";
		t %= 24, t < 0 && (t += 24), Yt || (Yt = ot(new R0(-45655.74141261017)), Re = new R0(0));
		const n = et(new G0(e, 15 * t, 1), Re), o = Ft(I1(Yt, n)), r = 10 / 240, s = r / 15;
		for (let i of R4) {
			const a = i[3] * r, c = i[1] * s, l = i[2] * s;
			if (a <= o.dec && c <= o.ra && o.ra < l) {
				const h = m4[i[0]];
				return new Ie(h[0], h[1], o.ra, o.dec);
			}
		}
		throw "Unable to find constellation for given coordinates.";
	}
	var Z;
	(function(t) {
		t.Penumbral = "penumbral", t.Partial = "partial", t.Annular = "annular", t.Total = "total";
	})(Z || (Z = {}));
	var ge = class {
		constructor(t, e, n, o, r, s) {
			this.kind = t, this.obscuration = e, this.peak = n, this.sd_penum = o, this.sd_partial = r, this.sd_total = s;
		}
	}, g4 = class {
		constructor(t, e, n, o, r, s, i) {
			this.time = t, this.u = e, this.r = n, this.k = o, this.p = r, this.target = s, this.dir = i;
		}
	};
	function g1(t, e, n, o) {
		const r = (o.x * n.x + o.y * n.y + o.z * n.z) / (o.x * o.x + o.y * o.y + o.z * o.z), s = r * o.x - n.x, i = r * o.y - n.y, a = r * o.z - n.z;
		return new g4(e, r, z * Math.hypot(s, i, a), +l1 - (1 + r) * (l1 - t), -l1 + (1 + r) * (l1 + t), n, o);
	}
	function st(t) {
		const e = n0(d.Sun, t, !0), n = new D(-e.x, -e.y, -e.z, e.t);
		return g1(h3, t, a0(t), n);
	}
	function we(t) {
		const e = n0(d.Sun, t, !0), n = a0(t), o = new D(-n.x, -n.y, -n.z, n.t);
		return n.x -= e.x, n.y -= e.y, n.z -= e.z, g1(X, t, o, n);
	}
	function Qt(t, e) {
		const n = K2(t, e), o = n0(d.Sun, t, !0), r = a0(t), s = new D(n[0] - r.x, n[1] - r.y, n[2] - r.z, t);
		return r.x -= o.x, r.y -= o.y, r.z -= o.z, g1(X, t, s, r);
	}
	function it(t, e, n) {
		const o = n0(t, n, !0), r = n0(d.Sun, n, !0), s = new D(o.x - r.x, o.y - r.y, o.z - r.z, n);
		return r.x = -o.x, r.y = -o.y, r.z = -o.z, g1(e, n, r, s);
	}
	function qt(t, e) {
		const n = 11574074074074073e-21, o = e.AddDays(-n), r = e.AddDays(+n), s = t(o);
		return (t(r).r - s.r) / n;
	}
	function w4(t, e, n) {
		const o = 11574074074074073e-21, r = it(t, e, n.AddDays(-o));
		return (it(t, e, n.AddDays(+o)).r - r.r) / o;
	}
	function x4(t) {
		const n = $((o) => qt(st, o), t.AddDays(-.03), t.AddDays(.03));
		if (!n) throw "Failed to find peak Earth shadow time.";
		return st(n);
	}
	function T4(t) {
		const n = $((o) => qt(we, o), t.AddDays(-.03), t.AddDays(.03));
		if (!n) throw "Failed to find peak Moon shadow time.";
		return we(n);
	}
	function N4(t, e, n) {
		const r = $((s) => w4(t, e, s), n.AddDays(-1), n.AddDays(1));
		if (!r) throw "Failed to find peak planet shadow time.";
		return it(t, e, r);
	}
	function D4(t, e) {
		const o = t.AddDays(-.2), r = t.AddDays(.2);
		function s(a) {
			return Qt(a, e);
		}
		const i = $((a) => qt(s, a), o, r);
		if (!i) throw `PeakLocalMoonShadow: search failure for search_center_time = ${t}`;
		return Qt(i, e);
	}
	function Xt(t, e, n) {
		const o = n / 1440, r = t.AddDays(-o), s = t.AddDays(+o), i = $((c) => -(st(c).r - e), r, t), a = $((c) => +(st(c).r - e), t, s);
		if (!i || !a) throw "Failed to find shadow semiduration";
		return (a.ut - i.ut) * (1440 / 2);
	}
	function Wt(t) {
		return B * g0(t).geo_eclip_lat;
	}
	function xe(t, e, n) {
		if (t <= 0) throw "Radius of first disc must be positive.";
		if (e <= 0) throw "Radius of second disc must be positive.";
		if (n < 0) throw "Distance between discs is not allowed to be negative.";
		if (n >= t + e) return 0;
		if (n == 0) return t <= e ? 1 : e * e / (t * t);
		const o = (t * t - e * e + n * n) / (2 * n), r = t * t - o * o;
		if (r <= 0) return t <= e ? 1 : e * e / (t * t);
		const s = Math.sqrt(r);
		return (t * t * Math.acos(o / t) - o * s + (e * e * Math.acos((n - o) / e) - (n - o) * s)) / (Math.PI * t * t);
	}
	function Te(t, e) {
		const n = new D(t.x + e.x, t.y + e.y, t.z + e.z, t.t), o = xe(Math.asin(x2 / n.Length()), Math.asin(f3 / e.Length()), B1(e, n) * _);
		return Math.min(.9999, o);
	}
	function Ne(t) {
		let n = y(t);
		for (let o = 0; o < 12; ++o) {
			const r = y1(180, n, 40);
			if (!r) throw "Cannot find full moon.";
			const s = Wt(r);
			if (Math.abs(s) < 1.8) {
				const i = x4(r);
				if (i.r < i.p + X) {
					let a = Z.Penumbral, c = 0, l = 0, h = 0, u = Xt(i.time, i.p + X, 200);
					return i.r < i.k + X && (a = Z.Partial, h = Xt(i.time, i.k + X, u), i.r + X < i.k ? (a = Z.Total, c = 1, l = Xt(i.time, i.k - X, h)) : c = xe(X, i.k, i.r)), new ge(a, c, i.time, u, h, l);
				}
			}
			n = r.AddDays(10);
		}
		throw "Failed to find lunar eclipse within 12 full moons.";
	}
	var De = class {
		constructor(t, e, n, o, r, s) {
			this.kind = t, this.obscuration = e, this.peak = n, this.distance = o, this.latitude = r, this.longitude = s;
		}
	};
	function Ue(t) {
		return t > .014 ? Z.Total : Z.Annular;
	}
	function U4(t) {
		let e = Z.Partial, n = t.time, o = t.r, r, s;
		const i = ot(t.time), a = I1(i, t.dir), c = I1(i, t.target);
		a.x *= z, a.y *= z, a.z *= z / s0, c.x *= z, c.y *= z, c.z *= z / s0;
		const l = M0, h = a.x * a.x + a.y * a.y + a.z * a.z, u = -2 * (a.x * c.x + a.y * c.y + a.z * c.z), M = c.x * c.x + c.y * c.y + c.z * c.z - l * l, p = u * u - 4 * h * M;
		let A;
		if (p > 0) {
			const E = (-u - Math.sqrt(p)) / (2 * h), m = E * a.x - c.x, I = E * a.y - c.y, g = (E * a.z - c.z) * s0, R = Math.hypot(m, I) * k0;
			R == 0 ? r = g > 0 ? 90 : -90 : r = B * Math.atan(g / R);
			const x = A0(n);
			s = (B * Math.atan2(I, m) - 15 * x) % 360, s <= -180 ? s += 360 : s > 180 && (s -= 360);
			const w = o1(i);
			let U = new D(m / z, I / z, g / z, t.time);
			U = I1(w, U), U.x += t.target.x, U.y += t.target.y, U.z += t.target.z;
			const N = g1(N2, t.time, U, t.dir);
			if (N.r > 1e-9 || N.r < 0) throw `Unexpected shadow distance from geoid intersection = ${N.r}`;
			e = Ue(N.k), A = e === Z.Total ? 1 : Te(t.dir, U);
		} else A = void 0;
		return new De(e, A, n, o, r, s);
	}
	function v4(t) {
		return t = y(t), Ne(t.AddDays(10));
	}
	function ve(t) {
		t = y(t);
		const e = 1.8;
		let n = t, o;
		for (o = 0; o < 12; ++o) {
			const r = y1(0, n, 40);
			if (!r) throw "Cannot find new moon";
			const s = Wt(r);
			if (Math.abs(s) < e) {
				const i = T4(r);
				if (i.r < i.p + T2) return U4(i);
			}
			n = r.AddDays(10);
		}
		throw "Failed to find solar eclipse within 12 full moons.";
	}
	function O4(t) {
		return t = y(t), ve(t.AddDays(10));
	}
	var Oe = class {
		constructor(t, e) {
			this.time = t, this.altitude = e;
		}
	}, Pe = class {
		constructor(t, e, n, o, r, s, i) {
			this.kind = t, this.obscuration = e, this.partial_begin = n, this.total_begin = o, this.peak = r, this.total_end = s, this.partial_end = i;
		}
	};
	function ze(t) {
		return t.p - t.r;
	}
	function be(t) {
		return Math.abs(t.k) - t.r;
	}
	function P4(t, e) {
		const r = Le(e, t.time);
		let s = t.time.AddDays(-.2), i = t.time.AddDays(.2);
		const a = at(e, 1, ze, s, t.time), c = at(e, -1, ze, t.time, i);
		let l, h, u;
		t.r < Math.abs(t.k) ? (s = t.time.AddDays(-.01), i = t.time.AddDays(.01), l = at(e, 1, be, s, t.time), h = at(e, -1, be, t.time, i), u = Ue(t.k)) : u = Z.Partial;
		const M = u === Z.Total ? 1 : Te(t.dir, t.target);
		return new Pe(u, M, a, l, r, h, c);
	}
	function at(t, e, n, o, r) {
		function s(a) {
			return e * n(Qt(a, t));
		}
		const i = $(s, o, r);
		if (!i) throw "Local eclipse transition search failed.";
		return Le(t, i);
	}
	function Le(t, e) {
		return new Oe(e, z4(e, t));
	}
	function z4(t, e) {
		const n = f1(d.Sun, t, e, !0, !0);
		return j1(t, e, n.ra, n.dec, "normal").altitude;
	}
	function Ce(t, e) {
		t = y(t), Y0(e);
		const n = 1.8;
		let o = t;
		for (;;) {
			const r = y1(0, o, 40);
			if (!r) throw "Cannot find next new moon";
			const s = Wt(r);
			if (Math.abs(s) < n) {
				const i = D4(r, e);
				if (i.r < i.p) {
					const a = P4(i, e);
					if (a.partial_begin.altitude > 0 || a.partial_end.altitude > 0) return a;
				}
			}
			o = r.AddDays(10);
		}
	}
	function b4(t, e) {
		return t = y(t), Ce(t.AddDays(10), e);
	}
	var ke = class {
		constructor(t, e, n, o) {
			this.start = t, this.peak = e, this.finish = n, this.separation = o;
		}
	};
	function L4(t, e, n, o) {
		const r = it(e, n, t);
		return o * (r.r - r.p);
	}
	function Be(t, e, n, o, r) {
		const s = $((i) => L4(i, t, e, r), n, o);
		if (!s) throw "Planet transit boundary search failed";
		return s;
	}
	function Ke(t, e) {
		e = y(e);
		const n = .4, o = 1;
		let r;
		switch (t) {
			case d.Mercury:
				r = 2439.7;
				break;
			case d.Venus:
				r = 6051.8;
				break;
			default: throw `Invalid body: ${t}`;
		}
		let s = e;
		for (;;) {
			const i = n1(t, 0, s);
			if (e1(t, i) < n) {
				const a = N4(t, r, i);
				if (a.r < a.p) {
					const c = a.time.AddDays(-o), l = Be(t, r, c, a.time, -1), h = a.time.AddDays(+o), u = Be(t, r, a.time, h, 1), M = 60 * e1(t, a.time);
					return new ke(l, a.time, u, M);
				}
			}
			s = i.AddDays(10);
		}
	}
	function C4(t, e) {
		return e = y(e), Ke(t, e.AddDays(100));
	}
	var _0;
	(function(t) {
		t[t.Invalid = 0] = "Invalid", t[t.Ascending = 1] = "Ascending", t[t.Descending = -1] = "Descending";
	})(_0 || (_0 = {}));
	var He = class {
		constructor(t, e) {
			this.kind = t, this.time = e;
		}
	};
	const Je = 10;
	function Ve(t) {
		let e = y(t), n = Y1(e);
		for (;;) {
			const o = e.AddDays(Je), r = Y1(o);
			if (n.lat * r.lat <= 0) {
				const s = r.lat > n.lat ? _0.Ascending : _0.Descending, i = $((a) => s * Y1(a).lat, e, o);
				if (!i) throw "Could not find moon node.";
				return new He(s, i);
			}
			e = o, n = r;
		}
	}
	function k4(t) {
		const e = Ve(t.time.AddDays(Je));
		switch (t.kind) {
			case _0.Ascending:
				if (e.kind !== _0.Descending) throw `Internal error: previous node was ascending, but this node was: ${e.kind}`;
				break;
			case _0.Descending:
				if (e.kind !== _0.Ascending) throw `Internal error: previous node was descending, but this node was: ${e.kind}`;
				break;
			default: throw `Previous node has an invalid node kind: ${t.kind}`;
		}
		return e;
	}
	var Zt = class {
		constructor(t, e, n, o) {
			this.ra = t, this.dec = e, this.spin = n, this.north = o;
		}
	};
	function B4(t) {
		const e = $0(F0([
			0,
			0,
			1
		], t, L.Into2000), t, L.Into2000), n = new D(e[0], e[1], e[2], t), o = Ft(n), r = 190.41375788700253 + 360.9856122880876 * t.ut;
		return new Zt(o.ra, o.dec, r, n);
	}
	function K4(t, e) {
		const n = y(e), o = n.tt, r = o / 36525;
		let s, i, a;
		switch (t) {
			case d.Sun:
				s = 286.13, i = 63.87, a = 84.176 + 14.1844 * o;
				break;
			case d.Mercury:
				s = 281.0103 - .0328 * r, i = 61.4155 - .0049 * r, a = 329.5988 + 6.1385108 * o + .01067257 * Math.sin(_ * (174.7910857 + 4.092335 * o)) - .00112309 * Math.sin(_ * (349.5821714 + 8.18467 * o)) - 1104e-7 * Math.sin(_ * (164.3732571 + 12.277005 * o)) - 2539e-8 * Math.sin(_ * (339.1643429 + 16.36934 * o)) - 571e-8 * Math.sin(_ * (153.9554286 + 20.461675 * o));
				break;
			case d.Venus:
				s = 272.76, i = 67.16, a = 160.2 - 1.4813688 * o;
				break;
			case d.Earth: return B4(n);
			case d.Moon:
				const M = _ * (125.045 - .0529921 * o), p = _ * (250.089 - .1059842 * o), A = _ * (260.008 + 13.0120009 * o), E = _ * (176.625 + 13.3407154 * o), m = _ * (357.529 + .9856003 * o), I = _ * (311.589 + 26.4057084 * o), g = _ * (134.963 + 13.064993 * o), R = _ * (276.617 + .3287146 * o), x = _ * (34.226 + 1.7484877 * o), w = _ * (15.134 - .1589763 * o), U = _ * (119.743 + .0036096 * o), N = _ * (239.961 + .1643573 * o), k = _ * (25.053 + 12.9590088 * o);
				s = 269.9949 + .0031 * r - 3.8787 * Math.sin(M) - .1204 * Math.sin(p) + .07 * Math.sin(A) - .0172 * Math.sin(E) + .0072 * Math.sin(I) - .0052 * Math.sin(w) + .0043 * Math.sin(k), i = 66.5392 + .013 * r + 1.5419 * Math.cos(M) + .0239 * Math.cos(p) - .0278 * Math.cos(A) + .0068 * Math.cos(E) - .0029 * Math.cos(I) + 9e-4 * Math.cos(g) + 8e-4 * Math.cos(w) - 9e-4 * Math.cos(k), a = 38.3213 + (13.17635815 - 14e-13 * o) * o + 3.561 * Math.sin(M) + .1208 * Math.sin(p) - .0642 * Math.sin(A) + .0158 * Math.sin(E) + .0252 * Math.sin(m) - .0066 * Math.sin(I) - .0047 * Math.sin(g) - .0046 * Math.sin(R) + .0028 * Math.sin(x) + .0052 * Math.sin(w) + .004 * Math.sin(U) + .0019 * Math.sin(N) - .0044 * Math.sin(k);
				break;
			case d.Mars:
				s = 317.269202 - .10927547 * r + 68e-6 * Math.sin(_ * (198.991226 + 19139.4819985 * r)) + 238e-6 * Math.sin(_ * (226.292679 + 38280.8511281 * r)) + 52e-6 * Math.sin(_ * (249.663391 + 57420.7251593 * r)) + 9e-6 * Math.sin(_ * (266.18351 + 76560.636795 * r)) + .419057 * Math.sin(_ * (79.398797 + .5042615 * r)), i = 54.432516 - .05827105 * r + 51e-6 * Math.cos(_ * (122.433576 + 19139.9407476 * r)) + 141e-6 * Math.cos(_ * (43.058401 + 38280.8753272 * r)) + 31e-6 * Math.cos(_ * (57.663379 + 57420.7517205 * r)) + 5e-6 * Math.cos(_ * (79.476401 + 76560.6495004 * r)) + 1.591274 * Math.cos(_ * (166.325722 + .5042615 * r)), a = 176.049863 + 350.891982443297 * o + 145e-6 * Math.sin(_ * (129.071773 + 19140.0328244 * r)) + 157e-6 * Math.sin(_ * (36.352167 + 38281.0473591 * r)) + 4e-5 * Math.sin(_ * (56.668646 + 57420.929536 * r)) + 1e-6 * Math.sin(_ * (67.364003 + 76560.2552215 * r)) + 1e-6 * Math.sin(_ * (104.79268 + 95700.4387578 * r)) + .584542 * Math.sin(_ * (95.391654 + .5042615 * r));
				break;
			case d.Jupiter:
				const O = _ * (99.360714 + 4850.4046 * r), j = _ * (175.895369 + 1191.9605 * r), F = _ * (300.323162 + 262.5475 * r), q = _ * (114.012305 + 6070.2476 * r), u0 = _ * (49.511251 + 64.3 * r);
				s = 268.056595 - .006499 * r + 117e-6 * Math.sin(O) + 938e-6 * Math.sin(j) + .001432 * Math.sin(F) + 3e-5 * Math.sin(q) + .00215 * Math.sin(u0), i = 64.495303 + .002413 * r + 5e-5 * Math.cos(O) + 404e-6 * Math.cos(j) + 617e-6 * Math.cos(F) - 13e-6 * Math.cos(q) + 926e-6 * Math.cos(u0), a = 284.95 + 870.536 * o;
				break;
			case d.Saturn:
				s = 40.589 - .036 * r, i = 83.537 - .004 * r, a = 38.9 + 810.7939024 * o;
				break;
			case d.Uranus:
				s = 257.311, i = -15.175, a = 203.81 - 501.1600928 * o;
				break;
			case d.Neptune:
				const r0 = _ * (357.85 + 52.316 * r);
				s = 299.36 + .7 * Math.sin(r0), i = 43.46 - .51 * Math.cos(r0), a = 249.978 + 541.1397757 * o - .48 * Math.sin(r0);
				break;
			case d.Pluto:
				s = 132.993, i = -6.163, a = 302.695 + 56.3625225 * o;
				break;
			default: throw `Invalid body: ${t}`;
		}
		const c = i * _, l = s * _, h = Math.cos(c), u = new D(h * Math.cos(l), h * Math.sin(l), Math.sin(c), n);
		return new Zt(s / 15, i, a, u);
	}
	function H4(t, e, n, o) {
		const r = y(e), s = wt(n), i = wt(o);
		let a, c;
		return n === d.Earth && o === d.Moon ? (a = new H(0, 0, 0, 0, 0, 0, r), c = A1(r)) : (a = Z1(n, r), c = Z1(o, r)), $e(t, a, s, c, i);
	}
	function $e(t, e, n, o, r) {
		const i = .8660254037844386;
		if (t < 1 || t > 5) throw `Invalid lagrange point ${t}`;
		if (!Number.isFinite(n) || n <= 0) throw "Major mass must be a positive number.";
		if (!Number.isFinite(r) || r <= 0) throw "Minor mass must be a negative number.";
		let a = o.x - e.x, c = o.y - e.y, l = o.z - e.z;
		const h = a * a + c * c + l * l, u = Math.sqrt(h), M = o.vx - e.vx, p = o.vy - e.vy, A = o.vz - e.vz;
		let E;
		if (t === 4 || t === 5) {
			const m = c * A - l * p, I = l * M - a * A, g = a * p - c * M;
			let R = I * l - g * c, x = g * a - m * l, w = m * c - I * a;
			const U = Math.sqrt(R * R + x * x + w * w);
			R /= U, x /= U, w /= U, a /= u, c /= u, l /= u;
			const N = t == 4 ? +i : -i, k = .5 * a + N * R, O = .5 * c + N * x, j = .5 * l + N * w, F = .5 * R - N * a, q = .5 * x - N * c, u0 = .5 * w - N * l, r0 = u * k, p0 = u * O, T0 = u * j, l0 = M * a + p * c + A * l, h0 = M * R + p * x + A * w;
			E = new H(r0, p0, T0, l0 * k + h0 * F, l0 * O + h0 * q, l0 * j + h0 * u0, e.t);
		} else {
			const m = -u * (r / (n + r)), I = +u * (n / (n + r)), g = (n + r) / (h * u);
			let R, x, w;
			if (t === 1 || t === 2) R = n / (n + r) * Math.cbrt(r / (3 * n)), x = -n, t == 1 ? (R = 1 - R, w = +r) : (R = 1 + R, w = -r);
			else if (t === 3) R = (7 / 12 * r - n) / (r + n), x = +n, w = +r;
			else throw `Invalid Langrage point ${t}. Must be an integer 1..5.`;
			let U = u * R - m, N;
			do {
				const k = U - m, O = U - I;
				N = (g * U + x / (k * k) + w / (O * O)) / (g - 2 * x / (k * k * k) - 2 * w / (O * O * O)), U -= N;
			} while (Math.abs(N / u) > 1e-14);
			R = (U - m) / u, E = new H(R * a, R * c, R * l, R * M, R * p, R * A, e.t);
		}
		return E;
	}
	var J4 = class t0 {
		constructor(e, n, o) {
			const r = y(n);
			this.originBody = e;
			for (let c of o) if (c.t.tt !== r.tt) throw "Inconsistent times in bodyStates";
			const s = [], i = t0.CalcSolarSystem(r);
			this.curr = new Fe(r, i, s);
			const a = this.InternalBodyState(e);
			for (let c of o) {
				const l = new Q(c.x + a.r.x, c.y + a.r.y, c.z + a.r.z), h = new Q(c.vx + a.v.x, c.vy + a.v.y, c.vz + a.v.z), u = Q.zero();
				s.push(new Ct(r.tt, l, h, u));
			}
			this.CalcBodyAccelerations(), this.prev = this.Duplicate();
		}
		get OriginBody() {
			return this.originBody;
		}
		get Time() {
			return this.curr.time;
		}
		Update(e) {
			const n = y(e), o = n.tt - this.curr.time.tt;
			if (o === 0) this.prev = this.Duplicate();
			else {
				this.Swap(), this.curr.time = n, this.curr.gravitators = t0.CalcSolarSystem(n);
				for (let i = 0; i < this.curr.bodies.length; ++i) {
					const a = this.prev.bodies[i];
					this.curr.bodies[i].r = W0(o, a.r, a.v, a.a);
				}
				this.CalcBodyAccelerations();
				for (let i = 0; i < this.curr.bodies.length; ++i) {
					const a = this.prev.bodies[i], c = this.curr.bodies[i], l = a.a.mean(c.a);
					c.tt = n.tt, c.r = W0(o, a.r, a.v, l), c.v = kt(o, a.v, l);
				}
				this.CalcBodyAccelerations();
			}
			const r = [], s = this.InternalBodyState(this.originBody);
			for (let i of this.curr.bodies) r.push(new H(i.r.x - s.r.x, i.r.y - s.r.y, i.r.z - s.r.z, i.v.x - s.v.x, i.v.y - s.v.y, i.v.z - s.v.z, n));
			return r;
		}
		Swap() {
			const e = this.curr;
			this.curr = this.prev, this.prev = e;
		}
		SolarSystemBodyState(e) {
			const n = this.InternalBodyState(e), o = this.InternalBodyState(this.originBody);
			return z0(n.sub(o), this.curr.time);
		}
		InternalBodyState(e) {
			if (e === d.SSB) return new O0(this.curr.time.tt, Q.zero(), Q.zero());
			const n = this.curr.gravitators[e];
			if (n) return n;
			throw `Invalid body: ${e}`;
		}
		static CalcSolarSystem(e) {
			const n = {}, o = new O0(e.tt, Q.zero(), Q.zero());
			n[d.Mercury] = W(o, e.tt, d.Mercury, Rt), n[d.Venus] = W(o, e.tt, d.Venus, It), n[d.Earth] = W(o, e.tt, d.Earth, d1 + C1), n[d.Mars] = W(o, e.tt, d.Mars, gt), n[d.Jupiter] = W(o, e.tt, d.Jupiter, B0), n[d.Saturn] = W(o, e.tt, d.Saturn, K0), n[d.Uranus] = W(o, e.tt, d.Uranus, H0), n[d.Neptune] = W(o, e.tt, d.Neptune, J0);
			for (let r in n) n[r].r.decr(o.r), n[r].v.decr(o.v);
			return n[d.Sun] = new O0(e.tt, o.r.neg(), o.v.neg()), n;
		}
		CalcBodyAccelerations() {
			for (let e of this.curr.bodies) e.a = Q.zero(), t0.AddAcceleration(e.a, e.r, this.curr.gravitators[d.Sun].r, h1), t0.AddAcceleration(e.a, e.r, this.curr.gravitators[d.Mercury].r, Rt), t0.AddAcceleration(e.a, e.r, this.curr.gravitators[d.Venus].r, It), t0.AddAcceleration(e.a, e.r, this.curr.gravitators[d.Earth].r, d1 + C1), t0.AddAcceleration(e.a, e.r, this.curr.gravitators[d.Mars].r, gt), t0.AddAcceleration(e.a, e.r, this.curr.gravitators[d.Jupiter].r, B0), t0.AddAcceleration(e.a, e.r, this.curr.gravitators[d.Saturn].r, K0), t0.AddAcceleration(e.a, e.r, this.curr.gravitators[d.Uranus].r, H0), t0.AddAcceleration(e.a, e.r, this.curr.gravitators[d.Neptune].r, J0);
		}
		static AddAcceleration(e, n, o, r) {
			const s = o.x - n.x, i = o.y - n.y, a = o.z - n.z, c = s * s + i * i + a * a, l = r / (c * Math.sqrt(c));
			e.x += s * l, e.y += i * l, e.z += a * l;
		}
		Duplicate() {
			const e = {};
			for (let o in this.curr.gravitators) e[o] = this.curr.gravitators[o].clone();
			const n = [];
			for (let o of this.curr.bodies) n.push(o.clone());
			return new Fe(this.curr.time, e, n);
		}
	}, Fe = class {
		constructor(t, e, n) {
			this.time = t, this.gravitators = e, this.bodies = n;
		}
	};
	function ct(t) {
		return typeof t.Observer == "function" ? t : t.default ?? t;
	}
	const { MakeTime: b6, SearchRiseSet: L6, Body: C6, Observer: V4 } = ct(u1);
	new V4(40.7128, -74.006, 10);
	const { Body: o0 } = ct(u1);
	f.SUN, o0.Sun, f.MERCURY, o0.Mercury, f.VENUS, o0.Venus, f.EARTH, o0.Earth, f.MARS, o0.Mars, f.JUPITER, o0.Jupiter, f.SATURN, o0.Saturn, f.URANUS, o0.Uranus, f.NEPTUNE, o0.Neptune, f.PLUTO, o0.Pluto, f.MOON, o0.Moon;
	2 * Math.PI;
	const { Rotation_EQD_EQJ: H6, CombineRotation: J6, MakeRotation: V6 } = ct(u1);
	Math.PI / (180 * 3600);
	23.439291111 * Math.PI / 180;
	(() => {
		const t = u1;
		return t.default && t.default.Body ? t.default : t;
	})();
	function ut(t, e) {
		return t.x = e.x, t.y = e.y, t.z = e.z, t;
	}
	function $4(t, e, n) {
		if (t.length === 0) return null;
		if (t.length === 1) {
			const u = t[0].position;
			return n ? ut(n, u) : {
				x: u.x,
				y: u.y,
				z: u.z
			};
		}
		if (e <= t[0].time.jd) {
			const u = t[0].position;
			return n ? ut(n, u) : {
				x: u.x,
				y: u.y,
				z: u.z
			};
		}
		if (e >= t[t.length - 1].time.jd) {
			const u = t[t.length - 1].position;
			return n ? ut(n, u) : {
				x: u.x,
				y: u.y,
				z: u.z
			};
		}
		let o = 0, r = t.length - 1;
		for (; r - o > 1;) {
			const u = o + r >> 1;
			t[u].time.jd <= e ? o = u : r = u;
		}
		const s = t[o], i = t[r];
		if (i.time.jd === s.time.jd) {
			const u = s.position;
			return n ? ut(n, u) : {
				x: u.x,
				y: u.y,
				z: u.z
			};
		}
		const a = (e - s.time.jd) / (i.time.jd - s.time.jd), c = s.position.x + a * (i.position.x - s.position.x), l = s.position.y + a * (i.position.y - s.position.y), h = s.position.z + a * (i.position.z - s.position.z);
		return n ? (n.x = c, n.y = l, n.z = h, n) : {
			x: c,
			y: l,
			z: h
		};
	}
	const F4 = {
		Phobos: {
			bodyId: f.PHOBOS,
			parentName: "Mars",
			parentBodyId: f.MARS,
			semiMajorAxisKm: 9376,
			periodDays: .31891
		},
		Deimos: {
			bodyId: f.DEIMOS,
			parentName: "Mars",
			parentBodyId: f.MARS,
			semiMajorAxisKm: 23463,
			periodDays: 1.263
		},
		Mimas: {
			bodyId: f.MIMAS,
			parentName: "Saturn",
			parentBodyId: f.SATURN,
			semiMajorAxisKm: 185540,
			periodDays: .9424
		},
		Enceladus: {
			bodyId: f.ENCELADUS,
			parentName: "Saturn",
			parentBodyId: f.SATURN,
			semiMajorAxisKm: 237948,
			periodDays: 1.37
		},
		Tethys: {
			bodyId: f.TETHYS,
			parentName: "Saturn",
			parentBodyId: f.SATURN,
			semiMajorAxisKm: 294619,
			periodDays: 1.888
		},
		Dione: {
			bodyId: f.DIONE,
			parentName: "Saturn",
			parentBodyId: f.SATURN,
			semiMajorAxisKm: 377396,
			periodDays: 2.737
		},
		Rhea: {
			bodyId: f.RHEA,
			parentName: "Saturn",
			parentBodyId: f.SATURN,
			semiMajorAxisKm: 527108,
			periodDays: 4.518
		},
		Titan: {
			bodyId: f.TITAN,
			parentName: "Saturn",
			parentBodyId: f.SATURN,
			semiMajorAxisKm: 1221870,
			periodDays: 15.945
		},
		Iapetus: {
			bodyId: f.IAPETUS,
			parentName: "Saturn",
			parentBodyId: f.SATURN,
			semiMajorAxisKm: 3560820,
			periodDays: 79.32
		},
		Miranda: {
			bodyId: f.MIRANDA,
			parentName: "Uranus",
			parentBodyId: f.URANUS,
			semiMajorAxisKm: 129390,
			periodDays: 1.4135
		},
		Ariel: {
			bodyId: f.ARIEL,
			parentName: "Uranus",
			parentBodyId: f.URANUS,
			semiMajorAxisKm: 190900,
			periodDays: 2.52
		},
		Umbriel: {
			bodyId: f.UMBRIEL,
			parentName: "Uranus",
			parentBodyId: f.URANUS,
			semiMajorAxisKm: 266e3,
			periodDays: 4.144
		},
		Titania: {
			bodyId: f.TITANIA,
			parentName: "Uranus",
			parentBodyId: f.URANUS,
			semiMajorAxisKm: 436300,
			periodDays: 8.706
		},
		Oberon: {
			bodyId: f.OBERON,
			parentName: "Uranus",
			parentBodyId: f.URANUS,
			semiMajorAxisKm: 583520,
			periodDays: 13.463
		},
		Triton: {
			bodyId: f.TRITON,
			parentName: "Neptune",
			parentBodyId: f.NEPTUNE,
			semiMajorAxisKm: 354759,
			periodDays: -5.877
		}
	};
	Object.fromEntries(Object.entries(F4).map(([t, e]) => [e.bodyId, t]));
	const { HelioState: Y6, MakeTime: Q6, JupiterMoons: q6, Body: lt } = ct(u1);
	f.IO, f.EUROPA, f.GANYMEDE, f.CALLISTO;
	lt.Mars, lt.Saturn, lt.Uranus, lt.Neptune;
	const r1 = 1e3, Ge = r1 / C, je = Ge * a1 * tn, G4 = 695700, j4 = 6378.137;
	function Ye(t) {
		return !Number.isFinite(t) || t <= 0 ? 0 : t * Ge;
	}
	Ye(j4);
	Ye(G4);
	Object.freeze({
		close: 1,
		system: i1,
		sector: a1 / 1e3,
		galactic: a1
	});
	100 * r1;
	100 / u2;
	function Y4(t) {
		return {
			x: t.x * r1,
			y: t.y * r1,
			z: t.z * r1
		};
	}
	C / r1;
	25 * je;
	25 * je;
	function Q4(t, e, n = w1) {
		const o = {};
		for (const r of n) {
			const s = e[r] ?? [], i = s.length ? $4(s, t) : null;
			if (i) {
				const a = Y4(i);
				o[r] = [
					a.x,
					a.y,
					a.z
				];
			}
		}
		return o;
	}
	function q4() {
		return w1.length * 3;
	}
	function X4(t) {
		t.fill(NaN);
	}
	function W4(t, e) {
		X4(t);
		const n = w1;
		for (const o of Object.keys(e)) {
			const r = n.indexOf(o);
			if (r < 0) continue;
			const s = e[o];
			if (!s) continue;
			const i = r * 3, [a, c, l] = s;
			t[i] = a, t[i + 1] = c, t[i + 2] = l;
		}
	}
	let t2 = null, e2 = null;
	_t({
		async init(t) {
			const e = new Float32Array(t), n = q4();
			if (e.length !== n) throw new Error(`[solar worker] SAB Float32 length mismatch: expected ${n}, got ${e.length}`);
			e2 = e;
		},
		async loadBatch(t, e) {
			return t2 = e, {
				type: "ready",
				runId: t
			};
		},
		async compute(t, e, n) {
			try {
				if (!t2) return {
					type: "error",
					runId: t,
					seq: e,
					message: "No ephemeris loaded"
				};
				const o = Q4(n, t2, w1);
				return e2 ? (W4(e2, o), {
					type: "positions",
					runId: t,
					seq: e,
					jd: n
				}) : {
					type: "positions",
					runId: t,
					seq: e,
					jd: n,
					positions: o
				};
			} catch (o) {
				return {
					type: "error",
					runId: t,
					seq: e,
					message: o instanceof Error ? o.message : String(o)
				};
			}
		}
	});
})();
