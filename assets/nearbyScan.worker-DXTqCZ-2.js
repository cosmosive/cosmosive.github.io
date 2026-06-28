(function() {
	var ze = Object.defineProperty, $2 = (t, e) => {
		let n = {};
		for (var r in t) ze(n, r, {
			get: t[r],
			enumerable: !0
		});
		return e || ze(n, Symbol.toStringTag, { value: "Module" }), n;
	};
	const be = Symbol("Comlink.proxy"), j2 = Symbol("Comlink.endpoint"), q2 = Symbol("Comlink.releaseProxy"), R1 = Symbol("Comlink.finalizer"), Dt = Symbol("Comlink.thrown"), ve = (t) => typeof t == "object" && t !== null || typeof t == "function", Ue = new Map([["proxy", {
		canHandle: (t) => ve(t) && t[be],
		serialize(t) {
			const { port1: e, port2: n } = new MessageChannel();
			return g1(t, e), [n, [n]];
		},
		deserialize(t) {
			return t.start(), W2(t);
		}
	}], ["throw", {
		canHandle: (t) => ve(t) && Dt in t,
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
	function Q2(t, e) {
		for (const n of t) if (e === n || n === "*" || n instanceof RegExp && n.test(e)) return !0;
		return !1;
	}
	function g1(t, e = globalThis, n = ["*"]) {
		e.addEventListener("message", function r(o) {
			if (!o || !o.data) return;
			if (!Q2(n, o.origin)) {
				console.warn(`Invalid origin '${o.origin}' for comlink proxy`);
				return;
			}
			const { id: s, type: i, path: c } = Object.assign({ path: [] }, o.data), a = (o.data.argumentList || []).map(D0);
			let u;
			try {
				const l = c.slice(0, -1).reduce((d, _) => d[_], t), h = c.reduce((d, _) => d[_], t);
				switch (i) {
					case "GET":
						u = h;
						break;
					case "SET":
						l[c.slice(-1)[0]] = D0(o.data.value), u = !0;
						break;
					case "APPLY":
						u = h.apply(l, a);
						break;
					case "CONSTRUCT":
						u = rr(new h(...a));
						break;
					case "ENDPOINT":
						{
							const { port1: d, port2: _ } = new MessageChannel();
							g1(t, _), u = nr(d, [d]);
						}
						break;
					case "RELEASE":
						u = void 0;
						break;
					default: return;
				}
			} catch (l) {
				u = {
					value: l,
					[Dt]: 0
				};
			}
			Promise.resolve(u).catch((l) => ({
				value: l,
				[Dt]: 0
			})).then((l) => {
				const [h, d] = vt(l);
				e.postMessage(Object.assign(Object.assign({}, h), { id: s }), d), i === "RELEASE" && (e.removeEventListener("message", r), Oe(e), R1 in t && typeof t[R1] == "function" && t[R1]());
			}).catch((l) => {
				const [h, d] = vt({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[Dt]: 0
				});
				e.postMessage(Object.assign(Object.assign({}, h), { id: s }), d);
			});
		}), e.start && e.start();
	}
	function X2(t) {
		return t.constructor.name === "MessagePort";
	}
	function Oe(t) {
		X2(t) && t.close();
	}
	function W2(t, e) {
		const n = /* @__PURE__ */ new Map();
		return t.addEventListener("message", function(o) {
			const { data: s } = o;
			if (!s || !s.id) return;
			const i = n.get(s.id);
			if (i) try {
				i(s);
			} finally {
				n.delete(s.id);
			}
		}), x1(t, n, [], e);
	}
	function Ct(t) {
		if (t) throw new Error("Proxy has been released and is not useable");
	}
	function Le(t) {
		return k0(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			Oe(t);
		});
	}
	const zt = /* @__PURE__ */ new WeakMap(), bt = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const e = (zt.get(t) || 0) - 1;
		zt.set(t, e), e === 0 && Le(t);
	});
	function Z2(t, e) {
		const n = (zt.get(e) || 0) + 1;
		zt.set(e, n), bt && bt.register(t, e, t);
	}
	function tr(t) {
		bt && bt.unregister(t);
	}
	function x1(t, e, n = [], r = function() {}) {
		let o = !1;
		const s = new Proxy(r, {
			get(i, c) {
				if (Ct(o), c === q2) return () => {
					tr(s), Le(t), e.clear(), o = !0;
				};
				if (c === "then") {
					if (n.length === 0) return { then: () => s };
					const a = k0(t, e, {
						type: "GET",
						path: n.map((u) => u.toString())
					}).then(D0);
					return a.then.bind(a);
				}
				return x1(t, e, [...n, c]);
			},
			set(i, c, a) {
				Ct(o);
				const [u, l] = vt(a);
				return k0(t, e, {
					type: "SET",
					path: [...n, c].map((h) => h.toString()),
					value: u
				}, l).then(D0);
			},
			apply(i, c, a) {
				Ct(o);
				const u = n[n.length - 1];
				if (u === j2) return k0(t, e, { type: "ENDPOINT" }).then(D0);
				if (u === "bind") return x1(t, e, n.slice(0, -1));
				const [l, h] = ke(a);
				return k0(t, e, {
					type: "APPLY",
					path: n.map((d) => d.toString()),
					argumentList: l
				}, h).then(D0);
			},
			construct(i, c) {
				Ct(o);
				const [a, u] = ke(c);
				return k0(t, e, {
					type: "CONSTRUCT",
					path: n.map((l) => l.toString()),
					argumentList: a
				}, u).then(D0);
			}
		});
		return Z2(s, t), s;
	}
	function er(t) {
		return Array.prototype.concat.apply([], t);
	}
	function ke(t) {
		const e = t.map(vt);
		return [e.map((n) => n[0]), er(e.map((n) => n[1]))];
	}
	const Fe = /* @__PURE__ */ new WeakMap();
	function nr(t, e) {
		return Fe.set(t, e), t;
	}
	function rr(t) {
		return Object.assign(t, { [be]: !0 });
	}
	function vt(t) {
		for (const [e, n] of Ue) if (n.canHandle(t)) {
			const [r, o] = n.serialize(t);
			return [{
				type: "HANDLER",
				name: e,
				value: r
			}, o];
		}
		return [{
			type: "RAW",
			value: t
		}, Fe.get(t) || []];
	}
	function D0(t) {
		switch (t.type) {
			case "HANDLER": return Ue.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function k0(t, e, n, r) {
		return new Promise((o) => {
			const s = or();
			e.set(s, o), t.start && t.start(), t.postMessage(Object.assign({ id: s }, n), r);
		});
	}
	function or() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	2 * Math.PI;
	const sr = Math.PI / 180;
	180 / Math.PI;
	const I1 = 86400, Ke = 365.25, He = 2451545, R0 = 299792.458, w1 = R0 * Ke * I1, L = 149597870.7, P1 = 648e3 / Math.PI, Ut = P1 * L, N1 = Ut / w1, Be = 23.4392911, ir = 1e3, ar = R0, cr = R0 ** Math.sqrt(Math.E), ur = R0 ** 2, lr = R0 ** Math.E, hr = [
		1,
		ir,
		ar,
		cr
	], Ge = [ur, lr];
	new Set(Ge);
	const T1 = [...hr, ...Ge];
	T1[T1.length - 1];
	const M0 = Object.freeze({
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
	function D1(t) {
		return Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z);
	}
	function Ve(t) {
		const e = D1(t);
		return e < 1e-18 ? null : {
			x: t.x / e,
			y: t.y / e,
			z: t.z / e
		};
	}
	Object.freeze({
		x: 0,
		y: 0,
		z: 0,
		w: 1
	});
	typeof TextEncoder < "u" && new TextEncoder();
	var Ot = (t, e, n) => Object.defineProperty(t, e, {
		value: n,
		enumerable: !1,
		writable: !0,
		configurable: !0
	}), fr = Symbol.for("bitecs-relation"), dr = Symbol.for("bitecs-pairTarget"), Mr = Symbol.for("bitecs-isPairComponent"), ht = Symbol.for("bitecs-relationData"), Je = () => {
		let t = {
			pairsMap: /* @__PURE__ */ new Map(),
			initStore: void 0,
			exclusiveRelation: !1,
			autoRemoveSubject: !1,
			onTargetRemoved: void 0
		}, e = (n) => {
			if (n === void 0) throw Error("Relation target is undefined");
			let r = n === "*" ? mr : n;
			if (!t.pairsMap.has(r)) {
				let o = t.initStore ? t.initStore(n) : {};
				Ot(o, fr, e), Ot(o, dr, r), Ot(o, Mr, !0), t.pairsMap.set(r, o);
			}
			return t.pairsMap.get(r);
		};
		return Ot(e, ht, t), e;
	}, Sr = Symbol.for("bitecs-wildcard");
	function _r() {
		let t = Je();
		return Object.defineProperty(t, Sr, {
			value: !0,
			enumerable: !1,
			writable: !1,
			configurable: !1
		}), t;
	}
	function Ar() {
		let t = Symbol.for("bitecs-global-wildcard");
		return globalThis[t] || (globalThis[t] = _r()), globalThis[t];
	}
	var mr = Ar();
	function Er() {
		return Je();
	}
	function yr() {
		let t = Symbol.for("bitecs-global-isa");
		return globalThis[t] || (globalThis[t] = Er()), globalThis[t];
	}
	yr();
	const S = {
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
	}, Tr = [
		S.SUN,
		S.MERCURY,
		S.VENUS,
		S.EARTH,
		S.MARS,
		S.JUPITER,
		S.SATURN,
		S.URANUS,
		S.NEPTUNE,
		S.PLUTO,
		S.CERES,
		S.ERIS,
		S.HAUMEA,
		S.MAKEMAKE,
		S.MOON,
		S.IO,
		S.EUROPA,
		S.GANYMEDE,
		S.CALLISTO,
		S.PHOBOS,
		S.DEIMOS,
		S.MIMAS,
		S.ENCELADUS,
		S.TETHYS,
		S.DIONE,
		S.RHEA,
		S.TITAN,
		S.IAPETUS,
		S.MIRANDA,
		S.ARIEL,
		S.UMBRIEL,
		S.TITANIA,
		S.OBERON,
		S.TRITON
	];
	function ft(t, e) {
		return `${t}:${String(e)}`;
	}
	function je(t) {
		const e = t.indexOf(":");
		if (e === -1 || e === 0 || e === t.length - 1) throw new Error(`Invalid entity ID format: expected "{source}:{rawId}", got "${t}"`);
		const n = t.slice(0, e);
		if (n !== "hor" && n !== "hyg" && n !== "dso" && n !== "exo") throw new Error(`Invalid entity source: expected "hor", "hyg", "dso", or "exo", got "${n}"`);
		const r = t.slice(e + 1);
		if (r.length === 0) throw new Error(`Invalid entity ID: raw ID cannot be empty in "${t}"`);
		return {
			source: n,
			rawId: r
		};
	}
	const F = {
		Star: "star",
		Barren: "barren",
		Molten: "molten",
		Oceanic: "oceanic",
		Desert: "desert",
		GasGiant: "gasGiant",
		IceGiant: "iceGiant",
		Galaxy: "galaxy",
		Nebula: "nebula",
		StarCluster: "starCluster",
		BlackHole: "blackHole"
	}, Dr = 1.7, Cr = 4, zr = 10, br = 50, vr = 1500, Ur = 500, Or = 250;
	function z1(t) {
		return t != null && Number.isFinite(t) ? t : null;
	}
	function qe(t) {
		return t == null ? F.Barren : t >= vr ? F.Molten : t >= Ur ? F.Desert : t >= Or ? F.Oceanic : F.Barren;
	}
	function Lr(t) {
		const e = z1(t.radiusEarth), n = z1(t.massEarth), r = z1(t.eqTempK);
		return e != null ? e > Cr ? F.GasGiant : e > Dr ? F.IceGiant : qe(r) : n != null ? n > br ? F.GasGiant : n > zr ? F.IceGiant : qe(r) : F.Barren;
	}
	const kr = 384399 / L, Fr = 421800 / L, Kr = 671034 / L, Hr = 1070400 / L, Br = 1882700 / L, Gr = 9376 / L, Vr = 23463 / L, Jr = 185540 / L, Yr = 237948 / L, $r = 294619 / L, jr = 377396 / L, qr = 527108 / L, Qr = 1221870 / L, Xr = 3560820 / L, Wr = 129390 / L, Zr = 190900 / L, to = 266e3 / L, eo = 436300 / L, no = 583520 / L, ro = 354759 / L, oo = {
		[S.SUN]: {
			name: "Sun",
			type: "star",
			color: "#f5e042",
			radiusKm: 696340,
			kind: "star",
			textureResolution: 512,
			massKg: 198847e25
		},
		[S.MERCURY]: {
			name: "Mercury",
			type: "planet",
			color: "#9c8a78",
			radiusKm: 2439.7,
			kind: "barren",
			textureResolution: 192,
			massKg: 33011e19,
			semiMajorAxisAu: .387098,
			parentBodyId: S.SUN
		},
		[S.VENUS]: {
			name: "Venus",
			type: "planet",
			color: "#f0e3a0",
			radiusKm: 6051.8,
			kind: "molten",
			textureResolution: 224,
			massKg: 48675e20,
			semiMajorAxisAu: .723332,
			parentBodyId: S.SUN
		},
		[S.EARTH]: {
			name: "Earth",
			type: "planet",
			color: "#4a90d9",
			radiusKm: 6371,
			kind: "oceanic",
			textureResolution: 224,
			features: { axialSpin: "eop" },
			massKg: 597237e19,
			semiMajorAxisAu: 1.0000001,
			parentBodyId: S.SUN
		},
		[S.MARS]: {
			name: "Mars",
			type: "planet",
			color: "#c1440e",
			radiusKm: 3389.5,
			kind: "desert",
			textureResolution: 192,
			massKg: 64171e19,
			semiMajorAxisAu: 1.523679,
			parentBodyId: S.SUN
		},
		[S.JUPITER]: {
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
			parentBodyId: S.SUN
		},
		[S.SATURN]: {
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
			parentBodyId: S.SUN
		},
		[S.URANUS]: {
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
			parentBodyId: S.SUN
		},
		[S.NEPTUNE]: {
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
			parentBodyId: S.SUN
		},
		[S.PLUTO]: {
			name: "Pluto",
			type: "dwarf_planet",
			color: "#a26847",
			radiusKm: 1188.3,
			kind: "barren",
			textureResolution: 192,
			massKg: 13029e18,
			semiMajorAxisAu: 39.482,
			parentBodyId: S.SUN
		},
		[S.CERES]: {
			name: "Ceres",
			type: "dwarf_planet",
			color: "#8c8276",
			radiusKm: 469.7,
			kind: "barren",
			textureResolution: 192,
			massKg: 0x32dec6fd325ad00000,
			semiMajorAxisAu: 2.7691,
			parentBodyId: S.SUN
		},
		[S.ERIS]: {
			name: "Eris",
			type: "dwarf_planet",
			color: "#d8d8d0",
			radiusKm: 1163,
			kind: "barren",
			textureResolution: 192,
			massKg: 16466e18,
			semiMajorAxisAu: 67.78,
			parentBodyId: S.SUN
		},
		[S.HAUMEA]: {
			name: "Haumea",
			type: "dwarf_planet",
			color: "#d6cfc4",
			radiusKm: 780,
			kind: "barren",
			textureResolution: 192,
			massKg: 4006e18,
			semiMajorAxisAu: 43.13,
			parentBodyId: S.SUN
		},
		[S.MAKEMAKE]: {
			name: "Makemake",
			type: "dwarf_planet",
			color: "#b06a4a",
			radiusKm: 715,
			kind: "barren",
			textureResolution: 192,
			massKg: 31e20,
			semiMajorAxisAu: 45.43,
			parentBodyId: S.SUN
		},
		[S.MOON]: {
			name: "Moon",
			type: "moon",
			color: "#cccccc",
			radiusKm: 1737,
			kind: "barren",
			textureResolution: 192,
			massKg: 7342e19,
			semiMajorAxisAu: kr,
			parentBodyId: S.EARTH
		},
		[S.IO]: {
			name: "Io",
			type: "moon",
			color: "#d9b863",
			radiusKm: 1821.6,
			kind: "barren",
			textureResolution: 192,
			massKg: 89319e18,
			semiMajorAxisAu: Fr,
			parentBodyId: S.JUPITER
		},
		[S.EUROPA]: {
			name: "Europa",
			type: "moon",
			color: "#d2c1a0",
			radiusKm: 1560.8,
			kind: "barren",
			textureResolution: 192,
			massKg: 47998e18,
			semiMajorAxisAu: Kr,
			parentBodyId: S.JUPITER
		},
		[S.GANYMEDE]: {
			name: "Ganymede",
			type: "moon",
			color: "#8d8278",
			radiusKm: 2634.1,
			kind: "barren",
			textureResolution: 192,
			massKg: 14819e19,
			semiMajorAxisAu: Hr,
			parentBodyId: S.JUPITER
		},
		[S.CALLISTO]: {
			name: "Callisto",
			type: "moon",
			color: "#5f574d",
			radiusKm: 2410.3,
			kind: "barren",
			textureResolution: 192,
			massKg: 10759e19,
			semiMajorAxisAu: Br,
			parentBodyId: S.JUPITER
		},
		[S.PHOBOS]: {
			name: "Phobos",
			type: "moon",
			color: "#a08070",
			radiusKm: 11.267,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x25de4dd4a93000,
			semiMajorAxisAu: Gr,
			parentBodyId: S.MARS
		},
		[S.DEIMOS]: {
			name: "Deimos",
			type: "moon",
			color: "#9c8878",
			radiusKm: 6.2,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x53e98989e1000,
			semiMajorAxisAu: Vr,
			parentBodyId: S.MARS
		},
		[S.MIMAS]: {
			name: "Mimas",
			type: "moon",
			color: "#cfcfd2",
			radiusKm: 198.2,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x20851e4da83b88000,
			semiMajorAxisAu: Jr,
			parentBodyId: S.SATURN
		},
		[S.ENCELADUS]: {
			name: "Enceladus",
			type: "moon",
			color: "#e6f0f5",
			radiusKm: 252.1,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x5db1b3cacc73f0000,
			semiMajorAxisAu: Yr,
			parentBodyId: S.SATURN
		},
		[S.TETHYS]: {
			name: "Tethys",
			type: "moon",
			color: "#d8d2c4",
			radiusKm: 531.1,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x2178d3821d702a0000,
			semiMajorAxisAu: $r,
			parentBodyId: S.SATURN
		},
		[S.DIONE]: {
			name: "Dione",
			type: "moon",
			color: "#c7c2b1",
			radiusKm: 561.4,
			kind: "barren",
			textureResolution: 128,
			massKg: 1095452e15,
			semiMajorAxisAu: jr,
			parentBodyId: S.SATURN
		},
		[S.RHEA]: {
			name: "Rhea",
			type: "moon",
			color: "#b9b3a3",
			radiusKm: 763.8,
			kind: "barren",
			textureResolution: 128,
			massKg: 2306518e15,
			semiMajorAxisAu: qr,
			parentBodyId: S.SATURN
		},
		[S.TITAN]: {
			name: "Titan",
			type: "moon",
			color: "#d8a45c",
			radiusKm: 2574.7,
			kind: "barren",
			textureResolution: 192,
			massKg: 13452e19,
			semiMajorAxisAu: Qr,
			parentBodyId: S.SATURN
		},
		[S.IAPETUS]: {
			name: "Iapetus",
			type: "moon",
			color: "#736556",
			radiusKm: 734.5,
			kind: "barren",
			textureResolution: 128,
			massKg: 1805635e15,
			semiMajorAxisAu: Xr,
			parentBodyId: S.SATURN
		},
		[S.MIRANDA]: {
			name: "Miranda",
			type: "moon",
			color: "#9f9893",
			radiusKm: 235.8,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x3928bd4d8ca3e0000,
			semiMajorAxisAu: Wr,
			parentBodyId: S.URANUS
		},
		[S.ARIEL]: {
			name: "Ariel",
			type: "moon",
			color: "#b6b0a8",
			radiusKm: 578.9,
			kind: "barren",
			textureResolution: 128,
			massKg: 1353e18,
			semiMajorAxisAu: Zr,
			parentBodyId: S.URANUS
		},
		[S.UMBRIEL]: {
			name: "Umbriel",
			type: "moon",
			color: "#6c655c",
			radiusKm: 584.7,
			kind: "barren",
			textureResolution: 128,
			massKg: 1172e18,
			semiMajorAxisAu: to,
			parentBodyId: S.URANUS
		},
		[S.TITANIA]: {
			name: "Titania",
			type: "moon",
			color: "#a8a097",
			radiusKm: 788.4,
			kind: "barren",
			textureResolution: 128,
			massKg: 3527e18,
			semiMajorAxisAu: eo,
			parentBodyId: S.URANUS
		},
		[S.OBERON]: {
			name: "Oberon",
			type: "moon",
			color: "#857d70",
			radiusKm: 761.4,
			kind: "barren",
			textureResolution: 128,
			massKg: 3014e18,
			semiMajorAxisAu: no,
			parentBodyId: S.URANUS
		},
		[S.TRITON]: {
			name: "Triton",
			type: "moon",
			color: "#d6c8b0",
			radiusKm: 1353.4,
			kind: "barren",
			textureResolution: 192,
			massKg: 2139e19,
			semiMajorAxisAu: ro,
			parentBodyId: S.NEPTUNE
		}
	};
	function so(t) {
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
	const b1 = Object.fromEntries(Object.entries(oo).map(([t, e]) => [t, so(e)]));
	function io(t) {
		return b1[t]?.name ?? t;
	}
	function ao(t) {
		return b1[t]?.type ?? "planet";
	}
	new TextEncoder();
	new TextDecoder();
	new TextEncoder();
	new TextDecoder("utf-8");
	const F0 = 1e3, C0 = F0 / L, K0 = C0 * w1 * N1, v1 = 695700, Qe = 6378.137;
	function Xe(t) {
		return !Number.isFinite(t) || t <= 0 ? 0 : t * C0;
	}
	Xe(Qe);
	Xe(v1);
	function U1(t, e) {
		if (!Number.isFinite(t) || !Number.isFinite(e)) return null;
		const n = t * Math.PI / 180, r = e * Math.PI / 180, o = Math.cos(r);
		return {
			x: o * Math.cos(n),
			y: o * Math.sin(n),
			z: Math.sin(r)
		};
	}
	function We(t) {
		if (t == null || !Number.isFinite(t) || t <= 0) return null;
		const e = 1 / t;
		return Number.isFinite(e) ? e : null;
	}
	const co = Be, uo = .005, lo = 1e3;
	100 / P1;
	1.1 * P1;
	function ho(t) {
		return !Number.isFinite(t) || t <= 0 ? 0 : t / C0;
	}
	function O1(t) {
		return !Number.isFinite(t) || t < 0 ? 0 : t * K0;
	}
	function L1(t) {
		const { x: e, y: n, z: r } = t, o = Math.hypot(e, n, r);
		if (!Number.isFinite(o) || o <= 0) return {
			x: 0,
			y: 0,
			z: 0
		};
		const s = ho(o);
		if (!Number.isFinite(s) || s <= 0) return {
			x: 0,
			y: 0,
			z: 0
		};
		const i = s / o;
		return {
			x: e * i,
			y: n * i,
			z: r * i
		};
	}
	function Ze(t) {
		const e = L1(t), n = 1 / Ut;
		return {
			x: e.x * n,
			y: e.y * n,
			z: e.z * n
		};
	}
	function fo(t, e) {
		const n = L1(t), r = L1(e), o = r.x - n.x, s = r.y - n.y, i = r.z - n.z;
		return Math.hypot(o, s, i);
	}
	function tn(t, e) {
		return fo(t, e) / Ut;
	}
	function Mo(t) {
		return {
			x: t.x * F0,
			y: t.y * F0,
			z: t.z * F0
		};
	}
	25 * K0;
	25 * K0;
	function So(t) {
		return t.proper && t.proper.length > 0 ? t.proper : t.hip != null ? `HIP ${t.hip}` : `Star ${t.id}`;
	}
	function en(t) {
		return t.proper != null && String(t.proper).trim().length > 0 ? "proper_star" : "other_star";
	}
	function _o(t, e, n) {
		return t < e ? e : t > n ? n : t;
	}
	const dt = 1e3, H0 = {
		local: 0,
		exoHost: 1,
		dso: 2,
		properStar: 3,
		otherStar: 4,
		leftover: 5
	}, nn = 99;
	function Ao(t, e, n) {
		if (t === "hor") {
			if (n === S.EARTH) return 1;
			switch (e) {
				case "star": return 0;
				case "planet": return 2;
				case "moon": return 3;
				case "dwarf_planet": return 4;
				default: return 5;
			}
		}
		return t === "hyg" ? 0 : t === "exo" ? 2 : t === "dso" ? 0 : 5;
	}
	function mo(t) {
		switch (t) {
			case "black_hole": return 0;
			case "galaxy": return 1;
			case "planetary_nebula":
			case "nebula": return 2;
			case "star_cluster": return 3;
			default: return 4;
		}
	}
	function rn(t) {
		return t.isLocal ? "local_system" : t.source === "dso" ? "dso" : t.source === "hyg" ? t.exoCount > 0 ? "exo_host_star" : t.hasProperName ? "proper_star" : "other_star" : "other_star";
	}
	function Eo(t) {
		switch (rn(t)) {
			case "local_system": return H0.local * dt + Ao(t.source, t.bodyType, t.rawId);
			case "exo_host_star": return H0.exoHost * dt + _o(nn - t.exoCount, 0, nn);
			case "dso": return H0.dso * dt + mo(t.bodyType);
			case "proper_star": return H0.properStar * dt;
			default: return (t.source === "hyg" ? H0.otherStar : H0.leftover) * dt;
		}
	}
	const Mt = (t) => t;
	function yo(t, e) {
		const n = O1(Number.isFinite(t.distPc) && t.distPc > 0 ? t.distPc : 0);
		if (e) {
			const { raDeg: o, decDeg: s } = t;
			if (Number.isFinite(o) && Number.isFinite(s)) {
				const i = o * Math.PI / 180, c = s * Math.PI / 180, a = Math.cos(c);
				e.x = a * Math.cos(i) * n, e.y = a * Math.sin(i) * n, e.z = Math.sin(c) * n;
			} else e.x = 0, e.y = 0, e.z = n;
			return e;
		}
		const r = U1(t.raDeg, t.decDeg) ?? {
			x: 0,
			y: 0,
			z: 1
		};
		return Mt({
			x: r.x * n,
			y: r.y * n,
			z: r.z * n
		});
	}
	function k1(t) {
		return t.id === 0 || t.id === "0";
	}
	function on(t) {
		if (k1(t)) return 0;
		const { x: e, y: n, z: r, plx: o } = t;
		return e != null && n != null && r != null && Number.isFinite(e) && Number.isFinite(n) && Number.isFinite(r) ? D1({
			x: e,
			y: n,
			z: r
		}) : We(o) ?? 25;
	}
	function po(t, e) {
		if (e) return Ro(t, e);
		if (k1(t)) return Mt({
			x: M0.x,
			y: M0.y,
			z: M0.z
		});
		const n = O1(on(t)), { x: r, y: o, z: s, ra: i, dec: c } = t, a = r != null && o != null && s != null && Number.isFinite(r) && Number.isFinite(o) && Number.isFinite(s);
		let u = null;
		return a && (u = Ve({
			x: r,
			y: o,
			z: s
		})), u == null && (u = U1(i, c)), u == null ? Mt({
			x: 0,
			y: 0,
			z: n
		}) : Mt({
			x: u.x * n,
			y: u.y * n,
			z: u.z * n
		});
	}
	function Ro(t, e) {
		if (k1(t)) return e.x = M0.x, e.y = M0.y, e.z = M0.z, e;
		const n = O1(on(t)), { x: r, y: o, z: s, ra: i, dec: c } = t;
		if (r != null && o != null && s != null && Number.isFinite(r) && Number.isFinite(o) && Number.isFinite(s)) {
			const a = Math.sqrt(r * r + o * o + s * s);
			if (a >= 1e-18) return e.x = r / a * n, e.y = o / a * n, e.z = s / a * n, e;
		}
		if (Number.isFinite(i) && Number.isFinite(c)) {
			const a = i * Math.PI / 180, u = c * Math.PI / 180, l = Math.cos(u);
			return e.x = l * Math.cos(a) * n, e.y = l * Math.sin(a) * n, e.z = Math.sin(u) * n, e;
		}
		return e.x = 0, e.y = 0, e.z = n, e;
	}
	function go(t, e, n, r, o) {
		o.x = 0, o.y = 0, o.z = 0;
		const { x: s, y: i, z: c, vx: a, vy: u, vz: l } = t;
		if (s == null || i == null || c == null || a == null || u == null || l == null) return o;
		const h = Math.hypot(s, i, c);
		if (h <= 0) return o;
		const d = Math.hypot(e, n, r);
		if (d <= 0) return o;
		const _ = s / h, M = i / h, m = c / h, x = a * _ + u * M + l * m, g = d / h;
		return o.x = (a - x * _) * g, o.y = (u - x * M) * g, o.z = (l - x * m) * g, o;
	}
	function F1(t) {
		return (t - He) / Ke;
	}
	const Ft = {
		x: 0,
		y: 0,
		z: 0
	};
	function sn(t, e, n) {
		return po(t, n), go(t, n.x, n.y, n.z, Ft), n.x += Ft.x * e, n.y += Ft.y * e, n.z += Ft.z * e, n;
	}
	const Kt = {
		x: 0,
		y: 0,
		z: 0
	};
	function xo(t, e) {
		return sn(t, e, Kt), Mt({
			x: Kt.x,
			y: Kt.y,
			z: Kt.z
		});
	}
	function Io(t, e) {
		return xo(t, F1(e));
	}
	const wo = {
		kind: "sol",
		originId: null
	}, Po = 10, No = .001;
	function an(t) {
		return No * Math.abs(t) + .01;
	}
	function To(t) {
		return Math.max(-1, Math.min(1, t));
	}
	function cn(t) {
		return Math.hypot(t.x, t.y, t.z);
	}
	function Do(t, e) {
		return {
			x: t.x - e.x,
			y: t.y - e.y,
			z: t.z - e.z
		};
	}
	function Ht(t) {
		const e = Do(t.objectScenePosition, t.viewpointScenePosition), n = cn(e);
		if (!Number.isFinite(n) || n <= 0) return null;
		const r = 1 / n, o = (e.x * t.viewForward.x + e.y * t.viewForward.y + e.z * t.viewForward.z) * r;
		if (!Number.isFinite(o) || o < t.cosHalfAngle) return null;
		const s = Math.acos(To(o)), i = tn(t.viewpointScenePosition, t.objectScenePosition), { source: c, rawId: a } = je(t.entityId), u = {
			source: c,
			bodyType: t.bodyType,
			rawId: a,
			isLocal: t.isLocal,
			exoCount: t.exoCount,
			hasProperName: t.hasProperName
		};
		return {
			entityId: t.entityId,
			rawId: a,
			source: c,
			category: t.category,
			scanGroup: rn(u),
			exoCount: t.exoCount,
			scanScore: Eo(u),
			name: t.name,
			bodyType: t.bodyType,
			distancePc: i,
			angleFromCenterRad: s,
			scenePosition: {
				x: t.objectScenePosition.x,
				y: t.objectScenePosition.y,
				z: t.objectScenePosition.z
			}
		};
	}
	function Co(t, e) {
		return t.angleFromCenterRad !== e.angleFromCenterRad ? t.angleFromCenterRad - e.angleFromCenterRad : t.distancePc !== e.distancePc ? t.distancePc - e.distancePc : t.name.localeCompare(e.name);
	}
	function un(t, e) {
		return t.scanScore !== e.scanScore ? t.scanScore - e.scanScore : t.distancePc !== e.distancePc ? t.distancePc - e.distancePc : t.angleFromCenterRad !== e.angleFromCenterRad ? t.angleFromCenterRad - e.angleFromCenterRad : t.name.localeCompare(e.name);
	}
	function zo(t) {
		const e = Math.max(1, Math.floor(t.maxCount ?? Po)), n = cn(t.viewForward);
		if (!Number.isFinite(n) || n <= 0) return [];
		const r = {
			x: t.viewForward.x / n,
			y: t.viewForward.y / n,
			z: t.viewForward.z / n
		}, o = Number.isFinite(t.halfAngleRad) ? Math.max(0, t.halfAngleRad) : 0, s = Math.cos(o), i = t.activeSystem ?? wo, c = i.originId != null ? je(i.originId).rawId : null, { exoCountByStarId: a } = t, u = [], l = i.kind === "sol";
		for (const p of t.solarCandidates) {
			const R = Ht({
				entityId: ft("hor", p.rawId),
				name: p.name,
				category: "solar",
				bodyType: ao(p.rawId),
				isLocal: l,
				exoCount: 0,
				hasProperName: !1,
				objectScenePosition: p.scenePosition,
				viewpointScenePosition: t.viewpointScenePosition,
				viewForward: r,
				cosHalfAngle: s
			});
			R != null && u.push(R);
		}
		for (const p of t.exoplanets ?? []) if (i.kind === "star" && p.hostStarId === c) {
			const R = Ht({
				entityId: ft("exo", p.catalogId),
				name: p.name,
				category: "exoplanet",
				bodyType: "planet",
				isLocal: !0,
				exoCount: 0,
				hasProperName: !1,
				objectScenePosition: p.scenePosition,
				viewpointScenePosition: t.viewpointScenePosition,
				viewForward: r,
				cosHalfAngle: s
			});
			R != null && u.push(R);
		}
		const h = t.viewpointScenePosition, d = t.maxDistancePc != null && Number.isFinite(t.maxDistancePc) ? t.maxDistancePc : null, _ = (p) => {
			const R = p.x - h.x, P = p.y - h.y, T = p.z - h.z, b = Math.sqrt(R * R + P * P + T * T);
			return !(!Number.isFinite(b) || b <= 0 || !((R * r.x + P * r.y + T * r.z) / b >= s) || d != null && tn(h, p) > d);
		};
		for (const p of t.deepSkyObjects) {
			const R = yo(p);
			if (_(R)) {
				const P = ft("dso", p.catalogId), T = Ht({
					entityId: P,
					name: p.name,
					category: "dso",
					bodyType: p.type,
					isLocal: i.kind === "dso" && P === i.originId,
					exoCount: 0,
					hasProperName: !1,
					objectScenePosition: R,
					viewpointScenePosition: t.viewpointScenePosition,
					viewForward: r,
					cosHalfAngle: s
				});
				T != null && u.push(T);
			}
		}
		const M = t.dtYears ?? 0;
		let m = null, x = -1;
		if (d != null) {
			m = Ze(h);
			const p = d + an(M);
			x = p * p;
		}
		const g = (p) => {
			if (m == null) return !0;
			const { x: R, y: P, z: T } = p;
			if (R == null || P == null || T == null) return !0;
			const b = R - m.x, $ = P - m.y, B = T - m.z;
			return b * b + $ * $ + B * B <= x;
		}, E = {
			x: 0,
			y: 0,
			z: 0
		};
		for (const p of t.stars) if (g(p) && (sn(p, M, E), _(E))) {
			const R = ft("hyg", p.id), P = a?.get(String(p.id)) ?? 0, T = Ht({
				entityId: R,
				name: So(p),
				category: en(p),
				bodyType: "star",
				isLocal: i.kind === "star" && R === i.originId,
				exoCount: P,
				hasProperName: en(p) === "proper_star",
				objectScenePosition: E,
				viewpointScenePosition: t.viewpointScenePosition,
				viewForward: r,
				cosHalfAngle: s
			});
			T != null && u.push(T);
		}
		const { maxDistancePc: w } = t, N = w != null && Number.isFinite(w) ? u.filter((p) => p.distancePc <= w) : u;
		return t.selection === "priority" ? [...N].sort(un).slice(0, e) : [...N].sort(Co).slice(0, e).sort(un);
	}
	Be * sr;
	var bo = $2({
		AU_PER_LY: () => ln,
		AngleBetween: () => Yt,
		AngleFromSun: () => st,
		Apsis: () => xt,
		ApsisKind: () => P0,
		AstroTime: () => x0,
		Atmosphere: () => Yn,
		AtmosphereInfo: () => Jn,
		AxisInfo: () => ye,
		BackdatePosition: () => Kn,
		BaryState: () => Ds,
		Body: () => f,
		CALLISTO_RADIUS_KM: () => Ko,
		C_AUDAY: () => Bt,
		CalcMoonCount: () => gn,
		CombineRotation: () => N0,
		Constellation: () => u3,
		ConstellationInfo: () => f2,
		CorrectLightTravel: () => Fn,
		DEG2RAD: () => y,
		DefineStar: () => os,
		DeltaT_EspenakMeeus: () => $1,
		DeltaT_JplHorizons: () => is,
		EUROPA_RADIUS_KM: () => ko,
		EclipseEvent: () => p2,
		EclipseKind: () => t0,
		Ecliptic: () => At,
		EclipticCoordinates: () => Cn,
		EclipticGeoMoon: () => e1,
		EclipticLongitude: () => L0,
		Elongation: () => Xn,
		ElongationEvent: () => Qn,
		Equator: () => _t,
		EquatorFromVector: () => fe,
		EquatorialCoordinates: () => Zt,
		GANYMEDE_RADIUS_KM: () => Fo,
		GeoEmbState: () => W1,
		GeoMoon: () => a0,
		GeoMoonState: () => mt,
		GeoVector: () => r0,
		GlobalSolarEclipseInfo: () => m2,
		GravitySimulator: () => N3,
		HOUR2RAD: () => K1,
		HelioDistance: () => U0,
		HelioState: () => a1,
		HelioVector: () => c0,
		Horizon: () => t1,
		HorizonFromVector: () => Ws,
		HorizontalCoordinates: () => Dn,
		HourAngle: () => Gs,
		HourAngleEvent: () => jn,
		IO_RADIUS_KM: () => Lo,
		IdentityMatrix: () => Qs,
		Illumination: () => c1,
		IlluminationInfo: () => Bn,
		InverseRefraction: () => n2,
		InverseRotation: () => at,
		JUPITER_EQUATORIAL_RADIUS_KM: () => vo,
		JUPITER_MEAN_RADIUS_KM: () => Oo,
		JUPITER_POLAR_RADIUS_KM: () => Uo,
		JupiterMoons: () => Ns,
		JupiterMoonsInfo: () => kn,
		KM_PER_AU: () => U,
		LagrangePoint: () => P3,
		LagrangePointFast: () => b2,
		Libration: () => hs,
		LibrationInfo: () => xn,
		LocalSolarEclipseInfo: () => R2,
		LunarEclipseInfo: () => d2,
		MakeRotation: () => _s,
		MakeTime: () => I,
		MassProduct: () => Y1,
		MoonPhase: () => le,
		MoonQuarter: () => Gn,
		NextGlobalSolarEclipse: () => m3,
		NextLocalSolarEclipse: () => p3,
		NextLunarApsis: () => $s,
		NextLunarEclipse: () => A3,
		NextMoonNode: () => x3,
		NextMoonQuarter: () => Us,
		NextPlanetApsis: () => qs,
		NextTransit: () => g3,
		NodeEventInfo: () => D2,
		NodeEventKind: () => m0,
		Observer: () => Q1,
		ObserverGravity: () => ys,
		ObserverState: () => ms,
		ObserverVector: () => As,
		PairLongitude: () => ue,
		Pivot: () => Xs,
		PlanetOrbitalPeriod: () => ss,
		RAD2DEG: () => K,
		RAD2HOUR: () => H1,
		Refraction: () => It,
		RotateState: () => l1,
		RotateVector: () => wt,
		RotationAxis: () => w3,
		RotationMatrix: () => J,
		Rotation_ECL_EQD: () => a2,
		Rotation_ECL_EQJ: () => t3,
		Rotation_ECL_HOR: () => c2,
		Rotation_ECT_EQD: () => u2,
		Rotation_ECT_EQJ: () => n3,
		Rotation_EQD_ECL: () => i2,
		Rotation_EQD_ECT: () => l2,
		Rotation_EQD_EQJ: () => f1,
		Rotation_EQD_HOR: () => Me,
		Rotation_EQJ_ECL: () => r2,
		Rotation_EQJ_ECT: () => e3,
		Rotation_EQJ_EQD: () => h1,
		Rotation_EQJ_GAL: () => s3,
		Rotation_EQJ_HOR: () => r3,
		Rotation_GAL_EQJ: () => i3,
		Rotation_HOR_ECL: () => o3,
		Rotation_HOR_EQD: () => o2,
		Rotation_HOR_EQJ: () => s2,
		Search: () => Y,
		SearchAltitude: () => Fs,
		SearchGlobalSolarEclipse: () => y2,
		SearchHourAngle: () => Bs,
		SearchLocalSolarEclipse: () => w2,
		SearchLunarApsis: () => Wn,
		SearchLunarEclipse: () => A2,
		SearchMaxElongation: () => Js,
		SearchMoonNode: () => z2,
		SearchMoonPhase: () => gt,
		SearchMoonQuarter: () => Vn,
		SearchPeakMagnitude: () => Ys,
		SearchPlanetApsis: () => t2,
		SearchRelativeLongitude: () => it,
		SearchRiseSet: () => ks,
		SearchSunLongitude: () => Hn,
		SearchTransit: () => T2,
		SeasonInfo: () => qn,
		Seasons: () => Vs,
		SetDeltaTFunction: () => as,
		SiderealTime: () => Pn,
		SphereFromVector: () => de,
		Spherical: () => X0,
		StateVector: () => G,
		SunPosition: () => bn,
		TransitInfo: () => P2,
		Vector: () => C,
		VectorFromHorizon: () => Zs,
		VectorFromSphere: () => u1,
		VectorObserver: () => Es,
		e_tilt: () => I0
	});
	const Bt = 173.1446326846693, U = 149597870.69098932, ln = 63241.07708807546, y = .017453292519943295, K1 = .26179938779914946, K = 57.29577951308232, H1 = 3.819718634205488, vo = 71492, Uo = 66854, Oo = 69911, Lo = 1821.6, ko = 1560.8, Fo = 2631.2, Ko = 2410.3, hn = 365.24217, fn = /* @__PURE__ */ new Date("2000-01-01T12:00:00Z"), n0 = 2 * Math.PI, g0 = 3600 * (180 / Math.PI), B0 = 484813681109536e-20, dn = 10800 * 60, Ho = 2 * dn, Bo = 7292115e-11, Go = dn / Math.PI, Vo = -.17 - 5 * Math.log10(Go), Gt = 29.530588, Vt = 24 * 3600, Jo = Vt * 1e3, Mn = .9972695717592592, B1 = 695700, Sn = B1 / U, s0 = .996647180302104, G0 = s0 * s0, S0 = 6378.1366, Yo = S0 / U, $o = S0 * s0, jo = 6371, qo = 6459, Qo = 1738.1 / U, W = 1737.4, _n = 1736, Xo = _n / U, Wo = 34 / 60, Zo = 81.30056, St = .0002959122082855911, G1 = 4912547451450812e-26, V1 = 7243452486162703e-25, An = 8887692390113509e-25, J1 = 9549535105779258e-26, V0 = 2.825345909524226e-7, J0 = 8.459715185680659e-8, Y0 = 1.292024916781969e-8, $0 = 1.524358900784276e-8, ts = 218869976542597e-26, es = An / Zo;
	function Y1(t) {
		switch (t) {
			case f.Sun: return St;
			case f.Mercury: return G1;
			case f.Venus: return V1;
			case f.Earth: return An;
			case f.Moon: return es;
			case f.EMB: return 8997011346712498e-25;
			case f.Mars: return J1;
			case f.Jupiter: return V0;
			case f.Saturn: return J0;
			case f.Uranus: return Y0;
			case f.Neptune: return $0;
			case f.Pluto: return ts;
			default: throw `Do not know mass product for body: ${t}`;
		}
	}
	function Jt(t) {
		if (t !== !0 && t !== !1) throw console.trace(), `Value is not boolean: ${t}`;
		return t;
	}
	function D(t) {
		if (!Number.isFinite(t)) throw console.trace(), `Value is not a finite number: ${t}`;
		return t;
	}
	function j0(t) {
		return t - Math.floor(t);
	}
	function Yt(t, e) {
		const n = t.x * t.x + t.y * t.y + t.z * t.z;
		if (Math.abs(n) < 1e-8) throw "AngleBetween: first vector is too short.";
		const r = e.x * e.x + e.y * e.y + e.z * e.z;
		if (Math.abs(r) < 1e-8) throw "AngleBetween: second vector is too short.";
		const o = (t.x * e.x + t.y * e.y + t.z * e.z) / Math.sqrt(n * r);
		return o <= -1 ? 180 : o >= 1 ? 0 : K * Math.acos(o);
	}
	var f;
	(function(t) {
		t.Sun = "Sun", t.Moon = "Moon", t.Mercury = "Mercury", t.Venus = "Venus", t.Earth = "Earth", t.Mars = "Mars", t.Jupiter = "Jupiter", t.Saturn = "Saturn", t.Uranus = "Uranus", t.Neptune = "Neptune", t.Pluto = "Pluto", t.SSB = "SSB", t.EMB = "EMB", t.Star1 = "Star1", t.Star2 = "Star2", t.Star3 = "Star3", t.Star4 = "Star4", t.Star5 = "Star5", t.Star6 = "Star6", t.Star7 = "Star7", t.Star8 = "Star8";
	})(f || (f = {}));
	const ns = [
		f.Star1,
		f.Star2,
		f.Star3,
		f.Star4,
		f.Star5,
		f.Star6,
		f.Star7,
		f.Star8
	], rs = [
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
	function mn(t) {
		const e = ns.indexOf(t);
		return e >= 0 ? rs[e] : null;
	}
	function $t(t) {
		const e = mn(t);
		return e && e.dist > 0 ? e : null;
	}
	function os(t, e, n, r) {
		const o = mn(t);
		if (!o) throw `Invalid star body: ${t}`;
		if (D(e), D(n), D(r), e < 0 || e >= 24) throw `Invalid right ascension for star: ${e}`;
		if (n < -90 || n > 90) throw `Invalid declination for star: ${n}`;
		if (r < 1) throw `Invalid star distance: ${r}`;
		o.ra = e, o.dec = n, o.dist = r * ln;
	}
	var k;
	(function(t) {
		t[t.From2000 = 0] = "From2000", t[t.Into2000 = 1] = "Into2000";
	})(k || (k = {}));
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
	function ss(t) {
		if (t in i0) return i0[t].OrbitalPeriod;
		throw `Unknown orbital period for: ${t}`;
	}
	const q = {
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
	function $1(t) {
		var e, n, r, o, s, i, c;
		const a = 2e3 + (t - 14) / hn;
		return a < -500 ? (e = (a - 1820) / 100, -20 + 32 * e * e) : a < 500 ? (e = a / 100, n = e * e, r = e * n, o = n * n, s = n * r, i = r * r, 10583.6 - 1014.41 * e + 33.78311 * n - 5.952053 * r - .1798452 * o + .022174192 * s + .0090316521 * i) : a < 1600 ? (e = (a - 1e3) / 100, n = e * e, r = e * n, o = n * n, s = n * r, i = r * r, 1574.2 - 556.01 * e + 71.23472 * n + .319781 * r - .8503463 * o - .005050998 * s + .0083572073 * i) : a < 1700 ? (e = a - 1600, n = e * e, r = e * n, 120 - .9808 * e - .01532 * n + r / 7129) : a < 1800 ? (e = a - 1700, n = e * e, r = e * n, o = n * n, 8.83 + .1603 * e - .0059285 * n + 13336e-8 * r - o / 1174e3) : a < 1860 ? (e = a - 1800, n = e * e, r = e * n, o = n * n, s = n * r, i = r * r, c = r * o, 13.72 - .332447 * e + .0068612 * n + .0041116 * r - 37436e-8 * o + 121272e-10 * s - 1.699e-7 * i + 875e-12 * c) : a < 1900 ? (e = a - 1860, n = e * e, r = e * n, o = n * n, s = n * r, 7.62 + .5737 * e - .251754 * n + .01680668 * r - .0004473624 * o + s / 233174) : a < 1920 ? (e = a - 1900, n = e * e, r = e * n, o = n * n, -2.79 + 1.494119 * e - .0598939 * n + .0061966 * r - 197e-6 * o) : a < 1941 ? (e = a - 1920, n = e * e, r = e * n, 21.2 + .84493 * e - .0761 * n + .0020936 * r) : a < 1961 ? (e = a - 1950, n = e * e, r = e * n, 29.07 + .407 * e - n / 233 + r / 2547) : a < 1986 ? (e = a - 1975, n = e * e, r = e * n, 45.45 + 1.067 * e - n / 260 - r / 718) : a < 2005 ? (e = a - 2e3, n = e * e, r = e * n, o = n * n, s = n * r, 63.86 + .3345 * e - .060374 * n + .0017275 * r + 651814e-9 * o + 2373599e-11 * s) : a < 2050 ? (e = a - 2e3, 62.92 + .32217 * e + .005589 * e * e) : a < 2150 ? (e = (a - 1820) / 100, -20 + 32 * e * e - .5628 * (2150 - a)) : (e = (a - 1820) / 100, -20 + 32 * e * e);
	}
	function is(t) {
		return $1(Math.min(t, 17 * hn));
	}
	let En = $1;
	function as(t) {
		En = t;
	}
	function yn(t) {
		return t + En(t) / 86400;
	}
	var x0 = class p1 {
		constructor(e) {
			if (e instanceof p1) {
				this.date = e.date, this.ut = e.ut, this.tt = e.tt;
				return;
			}
			const n = 1e3 * 3600 * 24;
			if (e instanceof Date && Number.isFinite(e.getTime())) {
				this.date = e, this.ut = (e.getTime() - fn.getTime()) / n, this.tt = yn(this.ut);
				return;
			}
			if (Number.isFinite(e)) {
				this.date = new Date(fn.getTime() + e * n), this.ut = e, this.tt = yn(this.ut);
				return;
			}
			throw "Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date.";
		}
		static FromTerrestrialTime(e) {
			let n = new p1(e);
			for (;;) {
				const r = e - n.tt;
				if (Math.abs(r) < 1e-12) return n;
				n = n.AddDays(r);
			}
		}
		toString() {
			return this.date.toISOString();
		}
		AddDays(e) {
			return new p1(this.ut + e);
		}
	};
	function cs(t, e, n) {
		return new x0(t.ut + n * (e.ut - t.ut));
	}
	function I(t) {
		return t instanceof x0 ? t : new x0(t);
	}
	function us(t) {
		function e(d) {
			return d % Ho * B0;
		}
		const n = t.tt / 36525, r = e(1287104.79305 + n * 129596581.0481), o = e(335779.526232 + n * 1739527262.8478), s = e(1072260.70369 + n * 1602961601.209), i = e(450160.398036 - n * 6962890.5431);
		let c = Math.sin(i), a = Math.cos(i), u = (-172064161 - 174666 * n) * c + 33386 * a, l = (92052331 + 9086 * n) * a + 15377 * c, h = 2 * (o - s + i);
		return c = Math.sin(h), a = Math.cos(h), u += (-13170906 - 1675 * n) * c - 13696 * a, l += (5730336 - 3015 * n) * a - 4587 * c, h = 2 * (o + i), c = Math.sin(h), a = Math.cos(h), u += (-2276413 - 234 * n) * c + 2796 * a, l += (978459 - 485 * n) * a + 1374 * c, h = 2 * i, c = Math.sin(h), a = Math.cos(h), u += (2074554 + 207 * n) * c - 698 * a, l += (-897492 + 470 * n) * a - 291 * c, c = Math.sin(r), a = Math.cos(r), u += (1475877 - 3633 * n) * c + 11817 * a, l += (73871 - 184 * n) * a - 1924 * c, {
			dpsi: -135e-6 + u * 1e-7,
			deps: 388e-6 + l * 1e-7
		};
	}
	function pn(t) {
		var e = t.tt / 36525;
		return (((((-4.34e-8 * e - 576e-9) * e + .0020034) * e - 1831e-7) * e - 46.836769) * e + 84381.406) / 3600;
	}
	var jt;
	function I0(t) {
		if (!jt || Math.abs(jt.tt - t.tt) > 1e-6) {
			const e = us(t), n = pn(t), r = n + e.deps / 3600;
			jt = {
				tt: t.tt,
				dpsi: e.dpsi,
				deps: e.deps,
				ee: e.dpsi * Math.cos(n * y) / 15,
				mobl: n,
				tobl: r
			};
		}
		return jt;
	}
	function Rn(t, e) {
		const n = t * y, r = Math.cos(n), o = Math.sin(n);
		return [
			e[0],
			e[1] * r - e[2] * o,
			e[1] * o + e[2] * r
		];
	}
	function ls(t, e) {
		return Rn(pn(t), e);
	}
	let gn = 0;
	function w0(t) {
		++gn;
		const e = t.tt / 36525;
		function n(z, O) {
			const H = [];
			let V;
			for (V = 0; V <= O - z; ++V) H.push(0);
			return {
				min: z,
				array: H
			};
		}
		function r(z, O, H, V) {
			const j = [];
			for (let T0 = 0; T0 <= O - z; ++T0) j.push(n(H, V));
			return {
				min: z,
				array: j
			};
		}
		function o(z, O, H) {
			const V = z.array[O - z.min];
			return V.array[H - V.min];
		}
		function s(z, O, H, V) {
			const j = z.array[O - z.min];
			j.array[H - j.min] = V;
		}
		let i, c, a, u, l, h, d, _, M, m, x, g, E, w, N, p, R, P, T, b, $, B, X, u0 = r(-6, 6, 1, 4), o0 = r(-6, 6, 1, 4);
		function E0(z, O) {
			return o(u0, z, O);
		}
		function l0(z, O) {
			return o(o0, z, O);
		}
		function h0(z, O, H) {
			return s(u0, z, O, H);
		}
		function ut(z, O, H) {
			return s(o0, z, O, H);
		}
		function E1(z, O, H, V, j) {
			j(z * H - O * V, O * H + z * V);
		}
		function v(z) {
			return Math.sin(n0 * z);
		}
		d = e * e, M = 0, X = 0, x = 0, g = 3422.7;
		var f0 = v(.19833 + .05611 * e), we = v(.27869 + .04508 * e), Pe = v(.16827 - .36903 * e), Ne = v(.34734 - 5.37261 * e), Te = v(.10498 - 5.37899 * e), y1 = v(.42681 - .41855 * e), R4 = v(.14943 - 5.37511 * e);
		for (P = .84 * f0 + .31 * we + 14.27 * Pe + 7.26 * Ne + .28 * Te + .24 * y1, T = 2.94 * f0 + .31 * we + 14.27 * Pe + 9.34 * Ne + 1.12 * Te + .83 * y1, b = -6.4 * f0 - 1.89 * y1, $ = .21 * f0 + .31 * we + 14.27 * Pe - 88.7 * Ne - 15.3 * Te + .24 * y1 - 1.86 * R4, B = P - b, _ = -3332e-9 * v(.59734 - 5.37261 * e) - 539e-9 * v(.35498 - 5.37899 * e) - 64e-9 * v(.39943 - 5.37511 * e), E = n0 * j0(.60643382 + 1336.85522467 * e - 313e-8 * d) + P / g0, w = n0 * j0(.37489701 + 1325.55240982 * e + 2565e-8 * d) + T / g0, N = n0 * j0(.99312619 + 99.99735956 * e - 44e-8 * d) + b / g0, p = n0 * j0(.25909118 + 1342.2278298 * e - 892e-8 * d) + $ / g0, R = n0 * j0(.82736186 + 1236.85308708 * e - 397e-8 * d) + B / g0, l = 1; l <= 4; ++l) {
			switch (l) {
				case 1:
					a = w, c = 4, u = 1.000002208;
					break;
				case 2:
					a = N, c = 3, u = .997504612 - .002495388 * e;
					break;
				case 3:
					a = p, c = 4, u = 1.000002708 + 139.978 * _;
					break;
				case 4:
					a = R, c = 6, u = 1;
					break;
				default: throw `Internal error: I = ${l}`;
			}
			for (h0(0, l, 1), h0(1, l, Math.cos(a) * u), ut(0, l, 0), ut(1, l, Math.sin(a) * u), h = 2; h <= c; ++h) E1(E0(h - 1, l), l0(h - 1, l), E0(1, l), l0(1, l), (z, O) => (h0(h, l, z), ut(h, l, O)));
			for (h = 1; h <= c; ++h) h0(-h, l, E0(h, l)), ut(-h, l, -l0(h, l));
		}
		function J2(z, O, H, V) {
			for (var j = {
				x: 1,
				y: 0
			}, T0 = [
				0,
				z,
				O,
				H,
				V
			], y0 = 1; y0 <= 4; ++y0) T0[y0] !== 0 && E1(j.x, j.y, E0(T0[y0], y0), l0(T0[y0], y0), (De, lt) => (j.x = De, j.y = lt));
			return j;
		}
		function A(z, O, H, V, j, T0, y0, De) {
			var lt = J2(j, T0, y0, De);
			M += z * lt.y, X += O * lt.y, x += H * lt.x, g += V * lt.x;
		}
		A(13.902, 14.06, -.001, .2607, 0, 0, 0, 4), A(.403, -4.01, .394, .0023, 0, 0, 0, 3), A(2369.912, 2373.36, .601, 28.2333, 0, 0, 0, 2), A(-125.154, -112.79, -.725, -.9781, 0, 0, 0, 1), A(1.979, 6.98, -.445, .0433, 1, 0, 0, 4), A(191.953, 192.72, .029, 3.0861, 1, 0, 0, 2), A(-8.466, -13.51, .455, -.1093, 1, 0, 0, 1), A(22639.5, 22609.07, .079, 186.5398, 1, 0, 0, 0), A(18.609, 3.59, -.094, .0118, 1, 0, 0, -1), A(-4586.465, -4578.13, -.077, 34.3117, 1, 0, 0, -2), A(3.215, 5.44, .192, -.0386, 1, 0, 0, -3), A(-38.428, -38.64, .001, .6008, 1, 0, 0, -4), A(-.393, -1.43, -.092, .0086, 1, 0, 0, -6), A(-.289, -1.59, .123, -.0053, 0, 1, 0, 4), A(-24.42, -25.1, .04, -.3, 0, 1, 0, 2), A(18.023, 17.93, .007, .1494, 0, 1, 0, 1), A(-668.146, -126.98, -1.302, -.3997, 0, 1, 0, 0), A(.56, .32, -.001, -.0037, 0, 1, 0, -1), A(-165.145, -165.06, .054, 1.9178, 0, 1, 0, -2), A(-1.877, -6.46, -.416, .0339, 0, 1, 0, -4), A(.213, 1.02, -.074, .0054, 2, 0, 0, 4), A(14.387, 14.78, -.017, .2833, 2, 0, 0, 2), A(-.586, -1.2, .054, -.01, 2, 0, 0, 1), A(769.016, 767.96, .107, 10.1657, 2, 0, 0, 0), A(1.75, 2.01, -.018, .0155, 2, 0, 0, -1), A(-211.656, -152.53, 5.679, -.3039, 2, 0, 0, -2), A(1.225, .91, -.03, -.0088, 2, 0, 0, -3), A(-30.773, -34.07, -.308, .3722, 2, 0, 0, -4), A(-.57, -1.4, -.074, .0109, 2, 0, 0, -6), A(-2.921, -11.75, .787, -.0484, 1, 1, 0, 2), A(1.267, 1.52, -.022, .0164, 1, 1, 0, 1), A(-109.673, -115.18, .461, -.949, 1, 1, 0, 0), A(-205.962, -182.36, 2.056, 1.4437, 1, 1, 0, -2), A(.233, .36, .012, -.0025, 1, 1, 0, -3), A(-4.391, -9.66, -.471, .0673, 1, 1, 0, -4), A(.283, 1.53, -.111, .006, 1, -1, 0, 4), A(14.577, 31.7, -1.54, .2302, 1, -1, 0, 2), A(147.687, 138.76, .679, 1.1528, 1, -1, 0, 0), A(-1.089, .55, .021, 0, 1, -1, 0, -1), A(28.475, 23.59, -.443, -.2257, 1, -1, 0, -2), A(-.276, -.38, -.006, -.0036, 1, -1, 0, -3), A(.636, 2.27, .146, -.0102, 1, -1, 0, -4), A(-.189, -1.68, .131, -.0028, 0, 2, 0, 2), A(-7.486, -.66, -.037, -.0086, 0, 2, 0, 0), A(-8.096, -16.35, -.74, .0918, 0, 2, 0, -2), A(-5.741, -.04, 0, -9e-4, 0, 0, 2, 2), A(.255, 0, 0, 0, 0, 0, 2, 1), A(-411.608, -.2, 0, -.0124, 0, 0, 2, 0), A(.584, .84, 0, .0071, 0, 0, 2, -1), A(-55.173, -52.14, 0, -.1052, 0, 0, 2, -2), A(.254, .25, 0, -.0017, 0, 0, 2, -3), A(.025, -1.67, 0, .0031, 0, 0, 2, -4), A(1.06, 2.96, -.166, .0243, 3, 0, 0, 2), A(36.124, 50.64, -1.3, .6215, 3, 0, 0, 0), A(-13.193, -16.4, .258, -.1187, 3, 0, 0, -2), A(-1.187, -.74, .042, .0074, 3, 0, 0, -4), A(-.293, -.31, -.002, .0046, 3, 0, 0, -6), A(-.29, -1.45, .116, -.0051, 2, 1, 0, 2), A(-7.649, -10.56, .259, -.1038, 2, 1, 0, 0), A(-8.627, -7.59, .078, -.0192, 2, 1, 0, -2), A(-2.74, -2.54, .022, .0324, 2, 1, 0, -4), A(1.181, 3.32, -.212, .0213, 2, -1, 0, 2), A(9.703, 11.67, -.151, .1268, 2, -1, 0, 0), A(-.352, -.37, .001, -.0028, 2, -1, 0, -1), A(-2.494, -1.17, -.003, -.0017, 2, -1, 0, -2), A(.36, .2, -.012, -.0043, 2, -1, 0, -4), A(-1.167, -1.25, .008, -.0106, 1, 2, 0, 0), A(-7.412, -6.12, .117, .0484, 1, 2, 0, -2), A(-.311, -.65, -.032, .0044, 1, 2, 0, -4), A(.757, 1.82, -.105, .0112, 1, -2, 0, 2), A(2.58, 2.32, .027, .0196, 1, -2, 0, 0), A(2.533, 2.4, -.014, -.0212, 1, -2, 0, -2), A(-.344, -.57, -.025, .0036, 0, 3, 0, -2), A(-.992, -.02, 0, 0, 1, 0, 2, 2), A(-45.099, -.02, 0, -.001, 1, 0, 2, 0), A(-.179, -9.52, 0, -.0833, 1, 0, 2, -2), A(-.301, -.33, 0, .0014, 1, 0, 2, -4), A(-6.382, -3.37, 0, -.0481, 1, 0, -2, 2), A(39.528, 85.13, 0, -.7136, 1, 0, -2, 0), A(9.366, .71, 0, -.0112, 1, 0, -2, -2), A(.202, .02, 0, 0, 1, 0, -2, -4), A(.415, .1, 0, .0013, 0, 1, 2, 0), A(-2.152, -2.26, 0, -.0066, 0, 1, 2, -2), A(-1.44, -1.3, 0, .0014, 0, 1, -2, 2), A(.384, -.04, 0, 0, 0, 1, -2, -2), A(1.938, 3.6, -.145, .0401, 4, 0, 0, 0), A(-.952, -1.58, .052, -.013, 4, 0, 0, -2), A(-.551, -.94, .032, -.0097, 3, 1, 0, 0), A(-.482, -.57, .005, -.0045, 3, 1, 0, -2), A(.681, .96, -.026, .0115, 3, -1, 0, 0), A(-.297, -.27, .002, -9e-4, 2, 2, 0, -2), A(.254, .21, -.003, 0, 2, -2, 0, -2), A(-.25, -.22, .004, .0014, 1, 3, 0, -2), A(-3.996, 0, 0, 4e-4, 2, 0, 2, 0), A(.557, -.75, 0, -.009, 2, 0, 2, -2), A(-.459, -.38, 0, -.0053, 2, 0, -2, 2), A(-1.298, .74, 0, 4e-4, 2, 0, -2, 0), A(.538, 1.14, 0, -.0141, 2, 0, -2, -2), A(.263, .02, 0, 0, 1, 1, 2, 0), A(.426, .07, 0, -6e-4, 1, 1, -2, -2), A(-.304, .03, 0, 3e-4, 1, -1, 2, 0), A(-.372, -.19, 0, -.0027, 1, -1, -2, 2), A(.418, 0, 0, 0, 0, 0, 4, 0), A(-.33, -.04, 0, 0, 3, 0, 2, 0);
		function d0(z, O, H, V, j) {
			return z * J2(O, H, V, j).y;
		}
		m = 0, m += d0(-526.069, 0, 0, 1, -2), m += d0(-3.352, 0, 0, 1, -4), m += d0(44.297, 1, 0, 1, -2), m += d0(-6, 1, 0, 1, -4), m += d0(20.599, -1, 0, 1, 0), m += d0(-30.598, -1, 0, 1, -2), m += d0(-24.649, -2, 0, 1, 0), m += d0(-2, -2, 0, 1, -2), m += d0(-22.571, 0, 1, 1, -2), m += d0(10.985, 0, -1, 1, -2), M += .82 * v(.7736 - 62.5512 * e) + .31 * v(.0466 - 125.1025 * e) + .35 * v(.5785 - 25.1042 * e) + .66 * v(.4591 + 1335.8075 * e) + .64 * v(.313 - 91.568 * e) + 1.14 * v(.148 + 1331.2898 * e) + .21 * v(.5918 + 1056.5859 * e) + .44 * v(.5784 + 1322.8595 * e) + .24 * v(.2275 - 5.7374 * e) + .28 * v(.2965 + 2.6929 * e) + .33 * v(.3132 + 6.3368 * e), i = p + X / g0;
		let g4 = (1.000002708 + 139.978 * _) * (18519.699999999997 + x) * Math.sin(i) - 6.24 * Math.sin(3 * i) + m;
		return {
			geo_eclip_lon: n0 * j0((E + M / g0) / n0),
			geo_eclip_lat: Math.PI / (180 * 3600) * g4,
			distance_au: g0 * Yo / (.999953253 * g)
		};
	}
	var xn = class {
		constructor(t, e, n, r, o, s) {
			this.elat = t, this.elon = e, this.mlat = n, this.mlon = r, this.dist_km = o, this.diam_deg = s;
		}
	};
	function hs(t) {
		const e = I(t), n = e.tt / 36525, r = n * n, o = r * n, s = r * r, i = w0(e), c = i.geo_eclip_lon, a = i.geo_eclip_lat, u = i.distance_au * U, l = y * 1.543, h = y * ot(93.272095 + 483202.0175233 * n - .0036539 * r - o / 3526e3 + s / 86331e4), d = y * ot(125.0445479 - 1934.1362891 * n + .0020754 * r + o / 467441 - s / 60616e3), _ = y * ot(357.5291092 + 35999.0502909 * n - 1536e-7 * r + o / 2449e4), M = y * ot(134.9633964 + 477198.8675055 * n + .0087414 * r + o / 69699 - s / 14712e3), m = y * ot(297.8501921 + 445267.1114034 * n - .0018819 * r + o / 545868 - s / 113065e3), x = 1 - .002516 * n - 74e-7 * r, g = c - d, E = Math.atan2(Math.sin(g) * Math.cos(a) * Math.cos(l) - Math.sin(a) * Math.sin(l), Math.cos(g) * Math.cos(a)), w = rt(K * (E - h)), N = Math.asin(-Math.sin(g) * Math.cos(a) * Math.sin(l) - Math.sin(a) * Math.cos(l)), p = y * (119.75 + 131.849 * n), R = y * (72.56 + 20.186 * n), P = -.02752 * Math.cos(M) + -.02245 * Math.sin(h) + .00684 * Math.cos(M - 2 * h) + -.00293 * Math.cos(2 * h) + -85e-5 * Math.cos(2 * h - 2 * m) + -54e-5 * Math.cos(M - 2 * m) + -2e-4 * Math.sin(M + h) + -2e-4 * Math.cos(M + 2 * h) + -2e-4 * Math.cos(M - h) + 14e-5 * Math.cos(M + 2 * h - 2 * m), T = -.02816 * Math.sin(M) + .02244 * Math.cos(h) + -.00682 * Math.sin(M - 2 * h) + -.00279 * Math.sin(2 * h) + -83e-5 * Math.sin(2 * h - 2 * m) + 69e-5 * Math.sin(M - 2 * m) + 4e-4 * Math.cos(M + h) + -25e-5 * Math.sin(2 * M) + -23e-5 * Math.sin(M + 2 * h) + 2e-4 * Math.cos(M - h) + 19e-5 * Math.sin(M - h) + 13e-5 * Math.sin(M + 2 * h - 2 * m) + -1e-4 * Math.cos(M - 3 * h), b = -(.0252 * x * Math.sin(_) + .00473 * Math.sin(2 * M - 2 * h) + -.00467 * Math.sin(M) + .00396 * Math.sin(p) + .00276 * Math.sin(2 * M - 2 * m) + .00196 * Math.sin(d) + -.00183 * Math.cos(M - h) + .00115 * Math.sin(M - 2 * m) + -96e-5 * Math.sin(M - m) + 46e-5 * Math.sin(2 * h - 2 * m) + -39e-5 * Math.sin(M - h) + -32e-5 * Math.sin(M - _ - m) + 27e-5 * Math.sin(2 * M - _ - 2 * m) + 23e-5 * Math.sin(R) + -14e-5 * Math.sin(2 * m) + 14e-5 * Math.cos(2 * M - 2 * h) + -12e-5 * Math.sin(M - 2 * h) + -12e-5 * Math.sin(2 * M) + 11e-5 * Math.sin(2 * M - 2 * _ - 2 * m)) + (P * Math.cos(E) + T * Math.sin(E)) * Math.tan(N), $ = T * Math.cos(E) - P * Math.sin(E), B = 2 * K * Math.atan(W / Math.sqrt(u * u - W * W));
		return new xn(K * N + $, w + b, K * a, K * c, u, B);
	}
	function In(t, e) {
		return [
			t.rot[0][0] * e[0] + t.rot[1][0] * e[1] + t.rot[2][0] * e[2],
			t.rot[0][1] * e[0] + t.rot[1][1] * e[1] + t.rot[2][1] * e[2],
			t.rot[0][2] * e[0] + t.rot[1][2] * e[1] + t.rot[2][2] * e[2]
		];
	}
	function q0(t, e, n) {
		return In(qt(e, n), t);
	}
	function wn(t, e, n) {
		return l1(qt(e, n), t);
	}
	function qt(t, e) {
		const n = t.tt / 36525;
		let r = 84381.406, o = ((((-9.51e-8 * n + 132851e-9) * n - .00114045) * n - 1.0790069) * n + 5038.481507) * n, s = ((((3.337e-7 * n - 467e-9) * n - .00772503) * n + .0512623) * n - .025754) * n + r, i = ((((-56e-9 * n + 170663e-9) * n - .00121197) * n - 2.3814292) * n + 10.556403) * n;
		r *= B0, o *= B0, s *= B0, i *= B0;
		const c = Math.sin(r), a = Math.cos(r), u = Math.sin(-o), l = Math.cos(-o), h = Math.sin(-s), d = Math.cos(-s), _ = Math.sin(i), M = Math.cos(i), m = M * l - u * _ * d, x = M * u * a + _ * d * l * a - c * _ * h, g = M * u * c + _ * d * l * c + a * _ * h, E = -_ * l - u * M * d, w = -_ * u * a + M * d * l * a - c * M * h, N = -_ * u * c + M * d * l * c + a * M * h, p = u * h, R = -h * l * a - c * d, P = -h * l * c + d * a;
		if (e === k.Into2000) return new J([
			[
				m,
				x,
				g
			],
			[
				E,
				w,
				N
			],
			[
				p,
				R,
				P
			]
		]);
		if (e === k.From2000) return new J([
			[
				m,
				E,
				p
			],
			[
				x,
				w,
				R
			],
			[
				g,
				N,
				P
			]
		]);
		throw "Invalid precess direction";
	}
	function fs(t) {
		let e = 360 * ((.779057273264 + .00273781191135448 * t.ut + t.ut % 1) % 1);
		return e < 0 && (e += 360), e;
	}
	let Qt;
	function _0(t) {
		if (!Qt || Qt.tt !== t.tt) {
			const e = t.tt / 36525;
			let n = 15 * I0(t).ee;
			const r = fs(t);
			let o = ((n + .014506 + ((((-3.68e-8 * e - 29956e-9) * e - 44e-8) * e + 1.3915817) * e + 4612.156534) * e) / 3600 + r) % 360 / 15;
			o < 0 && (o += 24), Qt = {
				tt: t.tt,
				st: o
			};
		}
		return Qt.st;
	}
	function Pn(t) {
		return _0(I(t));
	}
	function ds(t, e) {
		const n = t[0] * U, r = t[1] * U, o = t[2] * U, s = Math.hypot(n, r);
		let i, c, a;
		if (s < 1e-6) i = 0, c = o > 0 ? 90 : -90, a = Math.abs(o) - $o;
		else {
			for (i = K * Math.atan2(r, n) - 15 * e; i <= -180;) i += 360;
			for (; i > 180;) i -= 360;
			let u = Math.atan2(o, s), l, h, d, _ = 0;
			for (;;) {
				if (++_ > 10) throw "inverse_terra failed to converge.";
				l = Math.cos(u), h = Math.sin(u);
				const m = (G0 - 1) * S0, x = l * l, g = h * h, E = x + G0 * g;
				d = Math.sqrt(E);
				const w = m * h * l / d - o * l + s * h;
				if (Math.abs(w) < 1e-8) break;
				const N = m * ((x - g) / d - g * x * (G0 - 1) / (m * E)) + o * h + s * l;
				u -= w / N;
			}
			c = K * u;
			const M = S0 / d;
			Math.abs(h) > Math.abs(l) ? a = o / h - G0 * M : a = s / l - M;
		}
		return new Q1(c, i, 1e3 * a);
	}
	function j1(t, e) {
		const n = t.latitude * y, r = Math.sin(n), o = Math.cos(n), s = 1 / Math.hypot(o, s0 * r), i = G0 * s, c = t.height / 1e3, a = S0 * s + c, u = S0 * i + c, l = (15 * e + t.longitude) * y, h = Math.sin(l), d = Math.cos(l);
		return {
			pos: [
				a * o * d / U,
				a * o * h / U,
				u * r / U
			],
			vel: [
				-7292115e-11 * a * o * h * 86400 / U,
				Bo * a * o * d * 86400 / U,
				0
			]
		};
	}
	function Q0(t, e, n) {
		return In(Xt(e, n), t);
	}
	function Nn(t, e, n) {
		return l1(Xt(e, n), t);
	}
	function Xt(t, e) {
		const n = I0(t), r = n.mobl * y, o = n.tobl * y, s = n.dpsi * B0, i = Math.cos(r), c = Math.sin(r), a = Math.cos(o), u = Math.sin(o), l = Math.cos(s), h = Math.sin(s), d = l, _ = -h * i, M = -h * c, m = h * a, x = l * i * a + c * u, g = l * c * a - i * u, E = h * u, w = l * i * u - c * a, N = l * c * u + i * a;
		if (e === k.From2000) return new J([
			[
				d,
				m,
				E
			],
			[
				_,
				x,
				w
			],
			[
				M,
				g,
				N
			]
		]);
		if (e === k.Into2000) return new J([
			[
				d,
				_,
				M
			],
			[
				m,
				x,
				g
			],
			[
				E,
				w,
				N
			]
		]);
		throw "Invalid precess direction";
	}
	function Wt(t, e, n) {
		return n === k.Into2000 ? q0(Q0(t, e, n), e, n) : Q0(q0(t, e, n), e, n);
	}
	function Ms(t, e, n) {
		return n === k.Into2000 ? wn(Nn(t, e, n), e, n) : Nn(wn(t, e, n), e, n);
	}
	function Tn(t, e) {
		const n = j1(e, _0(t)).pos;
		return Wt(n, t, k.Into2000);
	}
	var C = class {
		constructor(t, e, n, r) {
			this.x = t, this.y = e, this.z = n, this.t = r;
		}
		Length() {
			return Math.hypot(this.x, this.y, this.z);
		}
	}, G = class {
		constructor(t, e, n, r, o, s, i) {
			this.x = t, this.y = e, this.z = n, this.vx = r, this.vy = o, this.vz = s, this.t = i;
		}
	}, X0 = class {
		constructor(t, e, n) {
			this.lat = D(t), this.lon = D(e), this.dist = D(n);
		}
	}, Zt = class {
		constructor(t, e, n, r) {
			this.ra = D(t), this.dec = D(e), this.dist = D(n), this.vec = r;
		}
	};
	function Ss(t) {
		if (!(t instanceof Array) || t.length !== 3) return !1;
		for (let e = 0; e < 3; ++e) {
			if (!(t[e] instanceof Array) || t[e].length !== 3) return !1;
			for (let n = 0; n < 3; ++n) if (!Number.isFinite(t[e][n])) return !1;
		}
		return !0;
	}
	var J = class {
		constructor(t) {
			this.rot = t;
		}
	};
	function _s(t) {
		if (!Ss(t)) throw "Argument must be a [3][3] array of numbers";
		return new J(t);
	}
	var Dn = class {
		constructor(t, e, n, r) {
			this.azimuth = D(t), this.altitude = D(e), this.ra = D(n), this.dec = D(r);
		}
	}, Cn = class {
		constructor(t, e, n) {
			this.vec = t, this.elat = D(e), this.elon = D(n);
		}
	};
	function q1(t, e) {
		return new C(t[0], t[1], t[2], e);
	}
	function zn(t, e) {
		const n = q1(t, e), r = n.x * n.x + n.y * n.y, o = Math.sqrt(r + n.z * n.z);
		if (r === 0) {
			if (n.z === 0) throw "Indeterminate sky coordinates";
			return new Zt(0, n.z < 0 ? -90 : 90, o, n);
		}
		let s = H1 * Math.atan2(n.y, n.x);
		s < 0 && (s += 24);
		const i = K * Math.atan2(t[2], Math.sqrt(r));
		return new Zt(s, i, o, n);
	}
	function W0(t, e) {
		const n = t * y, r = Math.cos(n), o = Math.sin(n);
		return [
			r * e[0] + o * e[1],
			r * e[1] - o * e[0],
			e[2]
		];
	}
	function t1(t, e, n, r, o) {
		let s = I(t);
		Z0(e), D(n), D(r);
		const i = Math.sin(e.latitude * y), c = Math.cos(e.latitude * y), a = Math.sin(e.longitude * y), u = Math.cos(e.longitude * y), l = Math.sin(r * y), h = Math.cos(r * y), d = Math.sin(n * K1), _ = Math.cos(n * K1);
		let M = [
			c * u,
			c * a,
			i
		], m = [
			-i * u,
			-i * a,
			c
		], x = [
			a,
			-u,
			0
		];
		const g = -15 * _0(s);
		let E = W0(g, M), w = W0(g, m), N = W0(g, x), p = [
			h * _,
			h * d,
			l
		];
		const R = p[0] * E[0] + p[1] * E[1] + p[2] * E[2], P = p[0] * w[0] + p[1] * w[1] + p[2] * w[2], T = p[0] * N[0] + p[1] * N[1] + p[2] * N[2];
		let b = Math.hypot(P, T), $;
		b > 0 ? ($ = -57.29577951308232 * Math.atan2(T, P), $ < 0 && ($ += 360)) : $ = 0;
		let B = K * Math.atan2(b, R), X = n, u0 = r;
		if (o) {
			let o0 = B, E0 = It(o, 90 - B);
			if (B -= E0, E0 > 0 && B > 3e-4) {
				const l0 = Math.sin(B * y), h0 = Math.cos(B * y), ut = Math.sin(o0 * y), E1 = Math.cos(o0 * y), v = [];
				for (let f0 = 0; f0 < 3; ++f0) v.push((p[f0] - E1 * E[f0]) / ut * l0 + E[f0] * h0);
				b = Math.hypot(v[0], v[1]), b > 0 ? (X = H1 * Math.atan2(v[1], v[0]), X < 0 && (X += 24)) : X = 0, u0 = K * Math.atan2(v[2], b);
			}
		}
		return new Dn($, 90 - B, X, u0);
	}
	function Z0(t) {
		if (!(t instanceof Q1)) throw `Not an instance of the Observer class: ${t}`;
		if (D(t.latitude), D(t.longitude), D(t.height), t.latitude < -90 || t.latitude > 90) throw `Latitude ${t.latitude} is out of range. Must be -90..+90.`;
		return t;
	}
	var Q1 = class {
		constructor(t, e, n) {
			this.latitude = t, this.longitude = e, this.height = n, Z0(this);
		}
	};
	function bn(t) {
		const e = I(t).AddDays(-1 / Bt), n = et(q.Earth, e), [r, o, s] = Wt([
			-n.x,
			-n.y,
			-n.z
		], e, k.From2000), i = y * I0(e).tobl, c = Math.cos(i), a = Math.sin(i);
		return X1(new C(r, o, s, e), c, a);
	}
	function _t(t, e, n, r, o) {
		Z0(n), Jt(r), Jt(o);
		const s = I(e), i = Tn(s, n), c = r0(t, s, o), a = [
			c.x - i[0],
			c.y - i[1],
			c.z - i[2]
		];
		return zn(r ? Wt(a, s, k.From2000) : a, s);
	}
	function As(t, e, n) {
		const r = I(t);
		let o = j1(e, _0(r)).pos;
		return n || (o = Wt(o, r, k.Into2000)), q1(o, r);
	}
	function ms(t, e, n) {
		const r = I(t), o = j1(e, _0(r)), s = new G(o.pos[0], o.pos[1], o.pos[2], o.vel[0], o.vel[1], o.vel[2], r);
		return n ? s : Ms(s, r, k.Into2000);
	}
	function Es(t, e) {
		const n = _0(t.t);
		let r = [
			t.x,
			t.y,
			t.z
		];
		return e || (r = q0(r, t.t, k.From2000), r = Q0(r, t.t, k.From2000)), ds(r, n);
	}
	function ys(t, e) {
		const n = Math.sin(t * y), r = n * n;
		return 9.7803253359 * (1 + .00193185265241 * r) / Math.sqrt(1 - .00669437999013 * r) * (1 - (3.15704e-7 - 2.10269e-9 * r) * e + 737452e-19 * e * e);
	}
	function X1(t, e, n) {
		const r = t.x, o = t.y * e + t.z * n, s = -t.y * n + t.z * e, i = Math.hypot(r, o);
		let c = 0;
		i > 0 && (c = K * Math.atan2(o, r), c < 0 && (c += 360));
		let a = K * Math.atan2(s, i);
		return new Cn(new C(r, o, s, t.t), a, c);
	}
	function At(t) {
		const e = I0(t.t), [n, r, o] = Q0(q0([
			t.x,
			t.y,
			t.z
		], t.t, k.From2000), t.t, k.From2000), s = new C(n, r, o, t.t), i = e.tobl * y;
		return X1(s, Math.cos(i), Math.sin(i));
	}
	function a0(t) {
		const e = I(t), n = w0(e), r = n.distance_au * Math.cos(n.geo_eclip_lat), o = q0(ls(e, [
			r * Math.cos(n.geo_eclip_lon),
			r * Math.sin(n.geo_eclip_lon),
			n.distance_au * Math.sin(n.geo_eclip_lat)
		]), e, k.Into2000);
		return new C(o[0], o[1], o[2], e);
	}
	function e1(t) {
		const e = I(t), n = w0(e), r = n.distance_au * Math.cos(n.geo_eclip_lat), o = [
			r * Math.cos(n.geo_eclip_lon),
			r * Math.sin(n.geo_eclip_lon),
			n.distance_au * Math.sin(n.geo_eclip_lat)
		], s = I0(e), i = q1(Q0(Rn(s.mobl, o), e, k.From2000), e), c = s.tobl * y, a = X1(i, Math.cos(c), Math.sin(c));
		return new X0(a.elat, a.elon, n.distance_au);
	}
	function mt(t) {
		const e = I(t), n = 1e-5, r = e.AddDays(-1e-5), o = e.AddDays(1e-5), s = a0(r), i = a0(o);
		return new G((s.x + i.x) / 2, (s.y + i.y) / 2, (s.z + i.z) / 2, (i.x - s.x) / (2 * n), (i.y - s.y) / (2 * n), (i.z - s.z) / (2 * n), e);
	}
	function W1(t) {
		const e = I(t), n = mt(e), r = 82.30056;
		return new G(n.x / r, n.y / r, n.z / r, n.vx / r, n.vy / r, n.vz / r, e);
	}
	function z0(t, e, n) {
		let r = 1, o = 0;
		for (let s of t) {
			let i = 0;
			for (let [a, u, l] of s) i += a * Math.cos(u + e * l);
			let c = r * i;
			n && (c %= n0), o += c, r *= e;
		}
		return o;
	}
	function Z1(t, e) {
		let n = 1, r = 0, o = 0, s = 0;
		for (let i of t) {
			let c = 0, a = 0;
			for (let [u, l, h] of i) {
				let d = l + e * h;
				c += u * h * Math.sin(d), s > 0 && (a += u * Math.cos(d));
			}
			o += s * r * a - n * c, r = n, n *= e, ++s;
		}
		return o;
	}
	const tt = 365250, te = 0, ee = 1, n1 = 2;
	function ne(t) {
		return new Q(t[0] + 4.4036e-7 * t[1] - 1.90919e-7 * t[2], -4.79966e-7 * t[0] + .917482137087 * t[1] - .397776982902 * t[2], .397776982902 * t[1] + .917482137087 * t[2]);
	}
	function vn(t, e, n) {
		const r = n * Math.cos(e), o = Math.cos(t), s = Math.sin(t);
		return [
			r * o,
			r * s,
			n * Math.sin(e)
		];
	}
	function et(t, e) {
		const n = e.tt / tt;
		return ne(vn(z0(t[te], n, !0), z0(t[ee], n, !1), z0(t[n1], n, !1))).ToAstroVector(e);
	}
	function Et(t, e) {
		const n = e / tt, r = z0(t[te], n, !0), o = z0(t[ee], n, !1), s = z0(t[n1], n, !1), i = Z1(t[te], n), c = Z1(t[ee], n), a = Z1(t[n1], n), u = Math.cos(r), l = Math.sin(r), h = Math.cos(o), d = Math.sin(o), _ = +(a * h * u) - s * d * u * c - s * h * l * i, M = +(a * h * l) - s * d * l * c + s * h * u * i, m = +(a * d) + s * h * c, x = vn(r, o, s), g = [
			_ / tt,
			M / tt,
			m / tt
		];
		return new v0(e, ne(x), ne(g));
	}
	function r1(t, e, n, r) {
		const o = r / (r + St), s = et(q[n], e);
		t.x += o * s.x, t.y += o * s.y, t.z += o * s.z;
	}
	function ps(t) {
		const e = new C(0, 0, 0, t);
		return r1(e, t, f.Jupiter, V0), r1(e, t, f.Saturn, J0), r1(e, t, f.Uranus, Y0), r1(e, t, f.Neptune, $0), e;
	}
	const re = 51, Rs = 29200, o1 = 146, A0 = 201, b0 = [
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
	var Q = class p0 {
		constructor(e, n, r) {
			this.x = e, this.y = n, this.z = r;
		}
		clone() {
			return new p0(this.x, this.y, this.z);
		}
		ToAstroVector(e) {
			return new C(this.x, this.y, this.z, e);
		}
		static zero() {
			return new p0(0, 0, 0);
		}
		quadrature() {
			return this.x * this.x + this.y * this.y + this.z * this.z;
		}
		add(e) {
			return new p0(this.x + e.x, this.y + e.y, this.z + e.z);
		}
		sub(e) {
			return new p0(this.x - e.x, this.y - e.y, this.z - e.z);
		}
		incr(e) {
			this.x += e.x, this.y += e.y, this.z += e.z;
		}
		decr(e) {
			this.x -= e.x, this.y -= e.y, this.z -= e.z;
		}
		mul(e) {
			return new p0(e * this.x, e * this.y, e * this.z);
		}
		div(e) {
			return new p0(this.x / e, this.y / e, this.z / e);
		}
		mean(e) {
			return new p0((this.x + e.x) / 2, (this.y + e.y) / 2, (this.z + e.z) / 2);
		}
		neg() {
			return new p0(-this.x, -this.y, -this.z);
		}
	}, v0 = class Ce {
		constructor(e, n, r) {
			this.tt = e, this.r = n, this.v = r;
		}
		clone() {
			return new Ce(this.tt, this.r, this.v);
		}
		sub(e) {
			return new Ce(this.tt, this.r.sub(e.r), this.v.sub(e.v));
		}
	};
	function gs(t) {
		let [e, [n, r, o], [s, i, c]] = t;
		return new v0(e, new Q(n, r, o), new Q(s, i, c));
	}
	function Z(t, e, n, r) {
		const o = r / (r + St), s = Et(q[n], e);
		return t.r.incr(s.r.mul(o)), t.v.incr(s.v.mul(o)), s;
	}
	function yt(t, e, n) {
		const r = n.sub(t), o = r.quadrature();
		return r.mul(e / (o * Math.sqrt(o)));
	}
	var pt = class {
		constructor(t) {
			let e = new v0(t, new Q(0, 0, 0), new Q(0, 0, 0));
			this.Jupiter = Z(e, t, f.Jupiter, V0), this.Saturn = Z(e, t, f.Saturn, J0), this.Uranus = Z(e, t, f.Uranus, Y0), this.Neptune = Z(e, t, f.Neptune, $0), this.Jupiter.r.decr(e.r), this.Jupiter.v.decr(e.v), this.Saturn.r.decr(e.r), this.Saturn.v.decr(e.v), this.Uranus.r.decr(e.r), this.Uranus.v.decr(e.v), this.Neptune.r.decr(e.r), this.Neptune.v.decr(e.v), this.Sun = new v0(t, e.r.mul(-1), e.v.mul(-1));
		}
		Acceleration(t) {
			let e = yt(t, St, this.Sun.r);
			return e.incr(yt(t, V0, this.Jupiter.r)), e.incr(yt(t, J0, this.Saturn.r)), e.incr(yt(t, Y0, this.Uranus.r)), e.incr(yt(t, $0, this.Neptune.r)), e;
		}
	}, oe = class Y2 {
		constructor(e, n, r, o) {
			this.tt = e, this.r = n, this.v = r, this.a = o;
		}
		clone() {
			return new Y2(this.tt, this.r.clone(), this.v.clone(), this.a.clone());
		}
	}, Un = class {
		constructor(t, e) {
			this.bary = t, this.grav = e;
		}
	};
	function nt(t, e, n, r) {
		return new Q(e.x + t * (n.x + t * r.x / 2), e.y + t * (n.y + t * r.y / 2), e.z + t * (n.z + t * r.z / 2));
	}
	function se(t, e, n) {
		return new Q(e.x + t * n.x, e.y + t * n.y, e.z + t * n.z);
	}
	function ie(t, e) {
		const n = t - e.tt, r = new pt(t), o = nt(n, e.r, e.v, e.a), s = r.Acceleration(o).mean(e.a), i = nt(n, e.r, e.v, s);
		return new Un(r, new oe(t, i, e.v.add(s.mul(n)), r.Acceleration(i)));
	}
	const xs = [];
	function On(t, e) {
		const n = Math.floor(t);
		return n < 0 ? 0 : n >= e ? e - 1 : n;
	}
	function ae(t) {
		const e = gs(t), n = new pt(e.tt), r = e.r.add(n.Sun.r), o = e.v.add(n.Sun.v), s = n.Acceleration(r);
		return new Un(n, new oe(e.tt, r, o, s));
	}
	function Is(t, e) {
		const n = b0[0][0];
		if (e < n || e > b0[re - 1][0]) return null;
		const r = On((e - n) / Rs, re - 1);
		if (!t[r]) {
			const s = t[r] = [];
			s[0] = ae(b0[r]).grav, s[A0 - 1] = ae(b0[r + 1]).grav;
			let i, c = s[0].tt;
			for (i = 1; i < A0 - 1; ++i) s[i] = ie(c += o1, s[i - 1]).grav;
			c = s[A0 - 1].tt;
			var o = [];
			for (o[A0 - 1] = s[A0 - 1], i = A0 - 2; i > 0; --i) o[i] = ie(c -= o1, o[i + 1]).grav;
			for (i = A0 - 2; i > 0; --i) {
				const a = i / (A0 - 1);
				s[i].r = s[i].r.mul(1 - a).add(o[i].r.mul(a)), s[i].v = s[i].v.mul(1 - a).add(o[i].v.mul(a)), s[i].a = s[i].a.mul(1 - a).add(o[i].a.mul(a));
			}
		}
		return t[r];
	}
	function Ln(t, e, n) {
		let r = ae(t);
		const o = Math.ceil((e - r.grav.tt) / n);
		for (let s = 0; s < o; ++s) r = ie(s + 1 === o ? e : r.grav.tt + n, r.grav);
		return r;
	}
	function ce(t, e) {
		let n, r, o;
		const s = Is(xs, t.tt);
		if (s) {
			const i = On((t.tt - s[0].tt) / o1, A0 - 1), c = s[i], a = s[i + 1], u = c.a.mean(a.a), l = nt(t.tt - c.tt, c.r, c.v, u), h = se(t.tt - c.tt, c.v, u), d = nt(t.tt - a.tt, a.r, a.v, u), _ = se(t.tt - a.tt, a.v, u), M = (t.tt - c.tt) / o1;
			n = l.mul(1 - M).add(d.mul(M)), r = h.mul(1 - M).add(_.mul(M));
		} else {
			let i;
			t.tt < b0[0][0] ? i = Ln(b0[0], t.tt, -146) : i = Ln(b0[re - 1], t.tt, 146), n = i.grav.r, r = i.grav.v, o = i.bary;
		}
		return e && (o || (o = new pt(t.tt)), n = n.sub(o.Sun.r), r = r.sub(o.Sun.v)), new G(n.x, n.y, n.z, r.x, r.y, r.z, t);
	}
	const ws = new J([
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
	]), s1 = [
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
	var kn = class {
		constructor(t, e, n, r) {
			this.io = t, this.europa = e, this.ganymede = n, this.callisto = r;
		}
	};
	function Ps(t, e, n) {
		const r = n[0], o = n[1], s = n[2], i = n[3], c = n[4], a = n[5], u = Math.sqrt(e / (r * r * r));
		let l, h, d, _ = o + s * Math.sin(o) - i * Math.cos(o);
		do
			l = Math.cos(_), h = Math.sin(_), d = (o - _ + s * h - i * l) / (1 - s * l - i * h), _ += d;
		while (Math.abs(d) >= 1e-12);
		l = Math.cos(_), h = Math.sin(_);
		const M = i * l - s * h, m = -s * l - i * h, x = 1 / (1 + m), g = 1 / (1 + Math.sqrt(1 - s * s - i * i)), E = r * (l - s - g * i * M), w = r * (h - i + g * s * M), N = u * x * r * (-h - g * i * m), p = u * x * r * (+l + g * s * m), R = 2 * Math.sqrt(1 - c * c - a * a), P = 1 - 2 * a * a, T = 1 - 2 * c * c, b = 2 * a * c;
		return new G(E * P + w * b, E * b + w * T, (c * w - E * a) * R, N * P + p * b, N * b + p * T, (c * p - N * a) * R, t);
	}
	function i1(t, e) {
		const n = t.tt + 18262.5, r = [
			0,
			e.al[0] + n * e.al[1],
			0,
			0,
			0,
			0
		];
		for (let [o, s, i] of e.a) r[0] += o * Math.cos(s + n * i);
		for (let [o, s, i] of e.l) r[1] += o * Math.sin(s + n * i);
		r[1] %= n0, r[1] < 0 && (r[1] += n0);
		for (let [o, s, i] of e.z) {
			const c = s + n * i;
			r[2] += o * Math.cos(c), r[3] += o * Math.sin(c);
		}
		for (let [o, s, i] of e.zeta) {
			const c = s + n * i;
			r[4] += o * Math.cos(c), r[5] += o * Math.sin(c);
		}
		return l1(ws, Ps(t, e.mu, r));
	}
	function Ns(t) {
		const e = new x0(t);
		return new kn(i1(e, s1[0]), i1(e, s1[1]), i1(e, s1[2]), i1(e, s1[3]));
	}
	function c0(t, e) {
		var n = I(e);
		if (t in q) return et(q[t], n);
		if (t === f.Pluto) {
			const i = ce(n, !0);
			return new C(i.x, i.y, i.z, n);
		}
		if (t === f.Sun) return new C(0, 0, 0, n);
		if (t === f.Moon) {
			var r = et(q.Earth, n), o = a0(n);
			return new C(r.x + o.x, r.y + o.y, r.z + o.z, n);
		}
		if (t === f.EMB) {
			const i = et(q.Earth, n), c = a0(n), a = 82.30056;
			return new C(i.x + c.x / a, i.y + c.y / a, i.z + c.z / a, n);
		}
		if (t === f.SSB) return ps(n);
		const s = $t(t);
		if (s) return u1(new X0(s.dec, 15 * s.ra, s.dist), n);
		throw `HelioVector: Unknown body "${t}"`;
	}
	function U0(t, e) {
		const n = $t(t);
		if (n) return n.dist;
		const r = I(e);
		return t in q ? z0(q[t][n1], r.tt / tt, !1) : c0(t, r).Length();
	}
	function Fn(t, e) {
		let n = e, r = 0;
		for (let o = 0; o < 10; ++o) {
			const s = t(n), i = s.Length() / Bt;
			if (i > 1) throw "Object is too distant for light-travel solver.";
			const c = e.AddDays(-i);
			if (r = Math.abs(c.tt - n.tt), r < 1e-9) return s;
			n = c;
		}
		throw `Light-travel time solver did not converge: dt = ${r}`;
	}
	var Ts = class {
		constructor(t, e, n, r) {
			this.observerBody = t, this.targetBody = e, this.aberration = n, this.observerPos = r;
		}
		Position(t) {
			this.aberration && (this.observerPos = c0(this.observerBody, t));
			const e = c0(this.targetBody, t);
			return new C(e.x - this.observerPos.x, e.y - this.observerPos.y, e.z - this.observerPos.z, t);
		}
	};
	function Kn(t, e, n, r) {
		Jt(r);
		const o = I(t);
		if ($t(n)) {
			const c = c0(n, o);
			if (r) {
				const u = a1(e, o), l = new C(c.x - u.x, c.y - u.y, c.z - u.z, o), h = Bt / l.Length();
				return new C(l.x + u.vx / h, l.y + u.vy / h, l.z + u.vz / h, o);
			}
			const a = c0(e, o);
			return new C(c.x - a.x, c.y - a.y, c.z - a.z, o);
		}
		let s;
		r ? s = new C(0, 0, 0, o) : s = c0(e, o);
		const i = new Ts(e, n, r, s);
		return Fn((c) => i.Position(c), o);
	}
	function r0(t, e, n) {
		Jt(n);
		const r = I(e);
		switch (t) {
			case f.Earth: return new C(0, 0, 0, r);
			case f.Moon: return a0(r);
			default:
				const o = Kn(r, f.Earth, t, n);
				return o.t = r, o;
		}
	}
	function O0(t, e) {
		return new G(t.r.x, t.r.y, t.r.z, t.v.x, t.v.y, t.v.z, e);
	}
	function Ds(t, e) {
		const n = I(e);
		if (t === f.SSB) return new G(0, 0, 0, 0, 0, 0, n);
		if (t === f.Pluto) return ce(n, !1);
		const r = new pt(n.tt);
		switch (t) {
			case f.Sun: return O0(r.Sun, n);
			case f.Jupiter: return O0(r.Jupiter, n);
			case f.Saturn: return O0(r.Saturn, n);
			case f.Uranus: return O0(r.Uranus, n);
			case f.Neptune: return O0(r.Neptune, n);
			case f.Moon:
			case f.EMB:
				const o = Et(q[f.Earth], n.tt), s = t === f.Moon ? mt(n) : W1(n);
				return new G(s.x + r.Sun.r.x + o.r.x, s.y + r.Sun.r.y + o.r.y, s.z + r.Sun.r.z + o.r.z, s.vx + r.Sun.v.x + o.v.x, s.vy + r.Sun.v.y + o.v.y, s.vz + r.Sun.v.z + o.v.z, n);
		}
		if (t in q) {
			const o = Et(q[t], n.tt);
			return new G(r.Sun.r.x + o.r.x, r.Sun.r.y + o.r.y, r.Sun.r.z + o.r.z, r.Sun.v.x + o.v.x, r.Sun.v.y + o.v.y, r.Sun.v.z + o.v.z, n);
		}
		throw `BaryState: Unsupported body "${t}"`;
	}
	function a1(t, e) {
		const n = I(e);
		switch (t) {
			case f.Sun: return new G(0, 0, 0, 0, 0, 0, n);
			case f.SSB:
				const r = new pt(n.tt);
				return new G(-r.Sun.r.x, -r.Sun.r.y, -r.Sun.r.z, -r.Sun.v.x, -r.Sun.v.y, -r.Sun.v.z, n);
			case f.Mercury:
			case f.Venus:
			case f.Earth:
			case f.Mars:
			case f.Jupiter:
			case f.Saturn:
			case f.Uranus:
			case f.Neptune: return O0(Et(q[t], n.tt), n);
			case f.Pluto: return ce(n, !0);
			case f.Moon:
			case f.EMB:
				const o = Et(q.Earth, n.tt), s = t == f.Moon ? mt(n) : W1(n);
				return new G(s.x + o.r.x, s.y + o.r.y, s.z + o.r.z, s.vx + o.v.x, s.vy + o.v.y, s.vz + o.v.z, n);
			default:
				if ($t(t)) {
					const i = c0(t, n);
					return new G(i.x, i.y, i.z, 0, 0, 0, n);
				}
				throw `HelioState: Unsupported body "${t}"`;
		}
	}
	function Cs(t, e, n, r, o) {
		let s = (o + n) / 2 - r, i = (o - n) / 2, c = r, a;
		if (s == 0) {
			if (i == 0 || (a = -c / i, a < -1 || a > 1)) return null;
		} else {
			let u = i * i - 4 * s * c;
			if (u <= 0) return null;
			let l = Math.sqrt(u), h = (-i + l) / (2 * s), d = (-i - l) / (2 * s);
			if (-1 <= h && h <= 1) {
				if (-1 <= d && d <= 1) return null;
				a = h;
			} else if (-1 <= d && d <= 1) a = d;
			else return null;
		}
		return {
			t: t + a * e,
			df_dt: (2 * s * a + i) / e
		};
	}
	function Y(t, e, n, r) {
		const o = D(r && r.dt_tolerance_seconds || 1), s = Math.abs(o / Vt);
		let i = r && r.init_f1 || t(e), c = r && r.init_f2 || t(n), a = NaN, u = 0, l = r && r.iter_limit || 20, h = !0;
		for (;;) {
			if (++u > l) throw "Excessive iteration in Search()";
			let d = cs(e, n, .5), _ = d.ut - e.ut;
			if (Math.abs(_) < s) return d;
			h ? a = t(d) : h = !0;
			let M = Cs(d.ut, n.ut - d.ut, i, a, c);
			if (M) {
				let m = I(M.t), x = t(m);
				if (M.df_dt !== 0) {
					if (Math.abs(x / M.df_dt) < s) return m;
					let g = 1.2 * Math.abs(x / M.df_dt);
					if (g < _ / 10) {
						let E = m.AddDays(-g), w = m.AddDays(+g);
						if ((E.ut - e.ut) * (E.ut - n.ut) < 0 && (w.ut - e.ut) * (w.ut - n.ut) < 0) {
							let N = t(E), p = t(w);
							if (N < 0 && p >= 0) {
								i = N, c = p, e = E, n = w, a = x, h = !1;
								continue;
							}
						}
					}
				}
			}
			if (i < 0 && a >= 0) {
				n = d, c = a;
				continue;
			}
			if (a < 0 && c >= 0) {
				e = d, i = a;
				continue;
			}
			return null;
		}
	}
	function rt(t) {
		let e = t;
		for (; e <= -180;) e += 360;
		for (; e > 180;) e -= 360;
		return e;
	}
	function ot(t) {
		for (; t < 0;) t += 360;
		for (; t >= 360;) t -= 360;
		return t;
	}
	function Hn(t, e, n) {
		function r(s) {
			return rt(bn(s).elon - t);
		}
		D(t), D(n);
		let o = I(e);
		return Y(r, o, o.AddDays(n), { dt_tolerance_seconds: .01 });
	}
	function ue(t, e, n) {
		if (t === f.Earth || e === f.Earth) throw "The Earth does not have a longitude as seen from itself.";
		const r = I(n), o = At(r0(t, r, !1)), s = At(r0(e, r, !1));
		return ot(o.elon - s.elon);
	}
	function st(t, e) {
		if (t == f.Earth) throw "The Earth does not have an angle as seen from itself.";
		const n = I(e);
		return Yt(r0(f.Sun, n, !0), r0(t, n, !0));
	}
	function L0(t, e) {
		if (t === f.Sun) throw "Cannot calculate heliocentric longitude of the Sun.";
		return At(c0(t, e)).elon;
	}
	function zs(t, e, n, r) {
		let o, s = 0, i = 0, c = 0;
		switch (t) {
			case f.Mercury:
				o = -.6, s = 4.98, i = -4.88, c = 3.02;
				break;
			case f.Venus:
				e < 163.6 ? (o = -4.47, s = 1.03, i = .57, c = .13) : (o = .98, s = -1.02);
				break;
			case f.Mars:
				o = -1.52, s = 1.6;
				break;
			case f.Jupiter:
				o = -9.4, s = .5;
				break;
			case f.Uranus:
				o = -7.19, s = .25;
				break;
			case f.Neptune:
				o = -6.87;
				break;
			case f.Pluto:
				o = -1, s = 4;
				break;
			default: throw `VisualMagnitude: unsupported body ${t}`;
		}
		const a = e / 100;
		let u = o + a * (s + a * (i + a * c));
		return u += 5 * Math.log10(n * r), u;
	}
	function bs(t, e, n, r, o) {
		const s = At(r), i = y * 28.06, c = y * (169.51 + 382e-7 * o.tt), a = y * s.elat, u = y * s.elon, l = Math.asin(Math.sin(a) * Math.cos(i) - Math.cos(a) * Math.sin(i) * Math.sin(u - c)), h = Math.sin(Math.abs(l));
		let d = -9 + .044 * t;
		return d += h * (-2.6 + 1.2 * h), d += 5 * Math.log10(e * n), {
			mag: d,
			ring_tilt: K * l
		};
	}
	function vs(t, e, n) {
		let r = t * y, o = r * r, s = o * o, i = -12.717 + 1.49 * Math.abs(r) + .0431 * s, c = n / (385000.6 / U);
		return i += 5 * Math.log10(e * c), i;
	}
	var Bn = class {
		constructor(t, e, n, r, o, s, i, c) {
			this.time = t, this.mag = e, this.phase_angle = n, this.helio_dist = r, this.geo_dist = o, this.gc = s, this.hc = i, this.ring_tilt = c, this.phase_fraction = (1 + Math.cos(y * n)) / 2;
		}
	};
	function c1(t, e) {
		if (t === f.Earth) throw "The illumination of the Earth is not defined.";
		const n = I(e), r = et(q.Earth, n);
		let o, s, i, c;
		t === f.Sun ? (i = new C(-r.x, -r.y, -r.z, n), s = new C(0, 0, 0, n), o = 0) : (t === f.Moon ? (i = a0(n), s = new C(r.x + i.x, r.y + i.y, r.z + i.z, n)) : (s = c0(t, e), i = new C(s.x - r.x, s.y - r.y, s.z - r.z, n)), o = Yt(i, s));
		let a = i.Length(), u = s.Length(), l;
		if (t === f.Sun) c = Vo + 5 * Math.log10(a);
		else if (t === f.Moon) c = vs(o, u, a);
		else if (t === f.Saturn) {
			const h = bs(o, u, a, i, n);
			c = h.mag, l = h.ring_tilt;
		} else c = zs(t, o, u, a);
		return new Bn(n, c, o, u, a, i, s, l);
	}
	function Rt(t) {
		if (t === f.Earth) throw "The Earth does not have a synodic period as seen from itself.";
		if (t === f.Moon) return Gt;
		let e = i0[t];
		if (!e) throw `Not a valid planet name: ${t}`;
		const n = i0.Earth.OrbitalPeriod, r = e.OrbitalPeriod;
		return Math.abs(n / (n / r - 1));
	}
	function it(t, e, n) {
		D(e);
		const r = i0[t];
		if (!r) throw `Cannot search relative longitude because body is not a planet: ${t}`;
		if (t === f.Earth) throw "Cannot search relative longitude for the Earth (it is always 0)";
		const o = r.OrbitalPeriod > i0.Earth.OrbitalPeriod ? 1 : -1;
		function s(u) {
			const l = L0(t, u);
			return rt(o * (L0(f.Earth, u) - l) - e);
		}
		let i = Rt(t), c = I(n), a = s(c);
		a > 0 && (a -= 360);
		for (let u = 0; u < 100; ++u) {
			let l = -a / 360 * i;
			if (c = c.AddDays(l), Math.abs(l) * Vt < 1) return c;
			let h = a;
			if (a = s(c), Math.abs(h) < 30 && h !== a) {
				let d = h / (h - a);
				d > .5 && d < 2 && (i *= d);
			}
		}
		throw `Relative longitude search failed to converge for ${t} near ${c.toString()} (error_angle = ${a}).`;
	}
	function le(t) {
		return ue(f.Moon, f.Sun, t);
	}
	function gt(t, e, n) {
		function r(l) {
			return rt(le(l) - t);
		}
		D(t), D(n);
		const o = 1.5, s = I(e);
		let i = r(s), c, a, u;
		if (n < 0) {
			if (i < 0 && (i += 360), c = -(Gt * i) / 360, u = c + o, u < n) return null;
			a = Math.max(n, c - o);
		} else {
			if (i > 0 && (i -= 360), c = -(Gt * i) / 360, a = c - o, a > n) return null;
			u = Math.min(n, c + o);
		}
		return Y(r, s.AddDays(a), s.AddDays(u), { dt_tolerance_seconds: .1 });
	}
	var Gn = class {
		constructor(t, e) {
			this.quarter = t, this.time = e;
		}
	};
	function Vn(t) {
		let e = le(t), n = (Math.floor(e / 90) + 1) % 4, r = gt(90 * n, t, 10);
		if (!r) throw "Cannot find moon quarter";
		return new Gn(n, r);
	}
	function Us(t) {
		return Vn(new Date(t.time.date.getTime() + 6 * Jo));
	}
	var Jn = class {
		constructor(t, e, n) {
			this.pressure = t, this.temperature = e, this.density = n;
		}
	};
	function Yn(t) {
		if (!Number.isFinite(t) || t < -500 || t > 1e5) throw `Invalid elevation: ${t}`;
		let o, s;
		t <= 11e3 ? (o = 288.15 - .0065 * t, s = 101325 * Math.pow(288.15 / o, -5.25577)) : t <= 2e4 ? (o = 216.65, s = 22632 * Math.exp(-.00015768832 * (t - 11e3))) : (o = 216.65 + .001 * (t - 2e4), s = 5474.87 * Math.pow(216.65 / o, 34.16319));
		const i = s / o / (101325 / 288.15);
		return new Jn(s, o, i);
	}
	function Os(t, e) {
		const n = t.latitude * y, r = Math.sin(n), o = Math.cos(n), s = 1 / Math.hypot(o, r * s0), i = s * (s0 * s0), c = (t.height - e) / 1e3, a = S0 * s + c, u = S0 * i + c, l = 1e3 * Math.hypot(a * o, u * r), h = .175 * Math.pow(1 - .0065 / 283.15 * (t.height - 2 / 3 * e), 3.256);
		return K * -(Math.sqrt(2 * (1 - h) * e / l) / (1 - h));
	}
	function Ls(t) {
		switch (t) {
			case f.Sun: return Sn;
			case f.Moon: return Qo;
			default: return 0;
		}
	}
	function ks(t, e, n, r, o, s = 0) {
		if (!Number.isFinite(s) || s < 0) throw `Invalid value for metersAboveGround: ${s}`;
		const i = Ls(t), c = Yn(e.height - s);
		return $n(t, e, n, r, o, i, Os(e, s) - Wo * c.density);
	}
	function Fs(t, e, n, r, o, s) {
		if (!Number.isFinite(s) || s < -90 || s > 90) throw `Invalid altitude angle: ${s}`;
		return $n(t, e, n, r, o, 0, s);
	}
	var Ks = class {
		constructor(t, e, n, r) {
			this.tx = t, this.ty = e, this.ax = n, this.ay = r;
		}
	};
	function he(t, e, n, r, o, s, i) {
		if (s < 0 && i >= 0) return new Ks(r, o, s, i);
		if (s >= 0 && i < 0) return null;
		if (t > 17) throw "Excessive recursion in rise/set ascent search.";
		const c = o.ut - r.ut;
		if (c * Vt < 1 || Math.min(Math.abs(s), Math.abs(i)) > n * (c / 2)) return null;
		const a = new x0((r.ut + o.ut) / 2), u = e(a);
		return he(1 + t, e, n, r, a, s, u) || he(1 + t, e, n, a, o, u, i);
	}
	function Hs(t, e) {
		if (e < -90 || e > 90) throw `Invalid geographic latitude: ${e}`;
		let n, r;
		switch (t) {
			case f.Moon:
				n = 4.5, r = 8.2;
				break;
			case f.Sun:
				n = .8, r = .5;
				break;
			case f.Mercury:
				n = -1.6, r = 1;
				break;
			case f.Venus:
				n = -.8, r = .6;
				break;
			case f.Mars:
				n = -.5, r = .4;
				break;
			case f.Jupiter:
			case f.Saturn:
			case f.Uranus:
			case f.Neptune:
			case f.Pluto:
				n = -.2, r = .2;
				break;
			case f.Star1:
			case f.Star2:
			case f.Star3:
			case f.Star4:
			case f.Star5:
			case f.Star6:
			case f.Star7:
			case f.Star8:
				n = -.008, r = .008;
				break;
			default: throw `Body not allowed for altitude search: ${t}`;
		}
		const o = y * e;
		return Math.abs((360 / Mn - n) * Math.cos(o)) + Math.abs(r * Math.sin(o));
	}
	function $n(t, e, n, r, o, s, i) {
		if (Z0(e), D(o), D(s), D(i), i < -90 || i > 90) throw `Invalid target altitude angle: ${i}`;
		const c = Hs(t, e.latitude);
		function a(M) {
			const m = _t(t, M, e, !0, !0);
			return n * (t1(M, e, m.ra, m.dec).altitude + K * Math.asin(s / m.dist) - i);
		}
		const u = I(r);
		let l = u, h = u, d = a(l), _ = d;
		for (;;) {
			o < 0 ? (l = h.AddDays(-.42), d = a(l)) : (h = l.AddDays(.42), _ = a(h));
			const M = he(0, a, c, l, h, d, _);
			if (M) {
				const m = Y(a, M.tx, M.ty, {
					dt_tolerance_seconds: .1,
					init_f1: M.ax,
					init_f2: M.ay
				});
				if (m) {
					if (o < 0) {
						if (m.ut < u.ut + o) return null;
					} else if (m.ut > u.ut + o) return null;
					return m;
				}
				throw `Rise/set search failed after finding ascent: t1=${l}, t2=${h}, a1=${d}, a2=${_}`;
			}
			if (o < 0) {
				if (l.ut < u.ut + o) return null;
				h = l, _ = d;
			} else {
				if (h.ut > u.ut + o) return null;
				l = h, d = _;
			}
		}
	}
	var jn = class {
		constructor(t, e) {
			this.time = t, this.hor = e;
		}
	};
	function Bs(t, e, n, r, o = 1) {
		Z0(e);
		let s = I(r), i = 0;
		if (t === f.Earth) throw "Cannot search for hour angle of the Earth.";
		if (D(n), n < 0 || n >= 24) throw `Invalid hour angle ${n}`;
		if (D(o), o === 0) throw "Direction must be positive or negative.";
		for (;;) {
			++i;
			let c = _0(s), a = _t(t, s, e, !0, !0), u = (n + a.ra - e.longitude / 15 - c) % 24;
			if (i === 1 ? o > 0 ? u < 0 && (u += 24) : u > 0 && (u -= 24) : u < -12 ? u += 24 : u > 12 && (u -= 24), Math.abs(u) * 3600 < .1) {
				const h = t1(s, e, a.ra, a.dec, "normal");
				return new jn(s, h);
			}
			let l = u / 24 * Mn;
			s = s.AddDays(l);
		}
	}
	function Gs(t, e, n) {
		const r = I(e), o = Pn(r), s = _t(t, r, n, !0, !0);
		let i = (n.longitude / 15 + o - s.ra) % 24;
		return i < 0 && (i += 24), i;
	}
	var qn = class {
		constructor(t, e, n, r) {
			this.mar_equinox = t, this.jun_solstice = e, this.sep_equinox = n, this.dec_solstice = r;
		}
	};
	function Vs(t) {
		function e(n, r, o) {
			let s = new Date(Date.UTC(t, r - 1, o)), i = Hn(n, s, 20);
			if (!i) throw `Cannot find season change near ${s.toISOString()}`;
			return i;
		}
		if (t instanceof Date && Number.isFinite(t.getTime()) && (t = t.getUTCFullYear()), !Number.isSafeInteger(t)) throw `Cannot calculate seasons because year argument ${t} is neither a Date nor a safe integer.`;
		return new qn(e(0, 3, 10), e(90, 6, 10), e(180, 9, 10), e(270, 12, 10));
	}
	var Qn = class {
		constructor(t, e, n, r) {
			this.time = t, this.visibility = e, this.elongation = n, this.ecliptic_separation = r;
		}
	};
	function Xn(t, e) {
		let n = I(e), r = ue(t, f.Sun, n), o;
		r > 180 ? (o = "morning", r = 360 - r) : o = "evening";
		let s = st(t, n);
		return new Qn(n, o, s, r);
	}
	function Js(t, e) {
		function r(c) {
			const a = c.AddDays(-.005), u = c.AddDays(.01 / 2);
			return (st(t, a) - st(t, u)) / .01;
		}
		let o = I(e);
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
			let c = rt(L0(t, o) - L0(f.Earth, o)), a, u, l;
			c >= -s.s1 && c < +s.s1 ? (l = 0, a = +s.s1, u = +s.s2) : c >= +s.s2 || c < -s.s2 ? (l = 0, a = -s.s2, u = -s.s1) : c >= 0 ? (l = -Rt(t) / 4, a = +s.s1, u = +s.s2) : (l = -Rt(t) / 4, a = -s.s2, u = -s.s1);
			let h = o.AddDays(l), d = it(t, a, h), _ = it(t, u, d), M = r(d);
			if (M >= 0) throw `SearchMaxElongation: internal error: m1 = ${M}`;
			let m = r(_);
			if (m <= 0) throw `SearchMaxElongation: internal error: m2 = ${m}`;
			let x = Y(r, d, _, {
				init_f1: M,
				init_f2: m,
				dt_tolerance_seconds: 10
			});
			if (!x) throw `SearchMaxElongation: failed search iter ${i} (t1=${d.toString()}, t2=${_.toString()})`;
			if (x.tt >= o.tt) return Xn(t, x);
			o = _.AddDays(1);
		}
		throw "SearchMaxElongation: failed to find event after 2 tries.";
	}
	function Ys(t, e) {
		if (t !== f.Venus) throw "SearchPeakMagnitude currently works for Venus only.";
		const n = .01;
		function r(i) {
			const c = i.AddDays(-.005), a = i.AddDays(.01 / 2), u = c1(t, c).mag;
			return (c1(t, a).mag - u) / n;
		}
		let o = I(e), s = 0;
		for (; ++s <= 2;) {
			let i = rt(L0(t, o) - L0(f.Earth, o)), c, a, u;
			i >= -10 && i < 10 ? (u = 0, c = 10, a = 30) : i >= 30 || i < -30 ? (u = 0, c = -30, a = -10) : i >= 0 ? (u = -Rt(t) / 4, c = 10, a = 30) : (u = -Rt(t) / 4, c = -30, a = -10);
			let l = o.AddDays(u), h = it(t, c, l), d = it(t, a, h), _ = r(h);
			if (_ >= 0) throw `SearchPeakMagnitude: internal error: m1 = ${_}`;
			let M = r(d);
			if (M <= 0) throw `SearchPeakMagnitude: internal error: m2 = ${M}`;
			let m = Y(r, h, d, {
				init_f1: _,
				init_f2: M,
				dt_tolerance_seconds: 10
			});
			if (!m) throw `SearchPeakMagnitude: failed search iter ${s} (t1=${h.toString()}, t2=${d.toString()})`;
			if (m.tt >= o.tt) return c1(t, m);
			o = d.AddDays(1);
		}
		throw "SearchPeakMagnitude: failed to find event after 2 tries.";
	}
	var P0;
	(function(t) {
		t[t.Pericenter = 0] = "Pericenter", t[t.Apocenter = 1] = "Apocenter";
	})(P0 || (P0 = {}));
	var xt = class {
		constructor(t, e, n) {
			this.time = t, this.kind = e, this.dist_au = n, this.dist_km = n * U;
		}
	};
	function Wn(t) {
		function n(a) {
			let u = a.AddDays(-5e-4), l = a.AddDays(.001 / 2), h = w0(u).distance_au;
			return (w0(l).distance_au - h) / .001;
		}
		function r(a) {
			return -n(a);
		}
		let o = I(t), s = n(o);
		const i = 5;
		for (var c = 0; c * i < 2 * Gt; ++c) {
			let a = o.AddDays(i), u = n(a);
			if (s * u <= 0) {
				if (s < 0 || u > 0) {
					let l = Y(n, o, a, {
						init_f1: s,
						init_f2: u
					});
					if (!l) throw "SearchLunarApsis INTERNAL ERROR: perigee search failed!";
					let h = w0(l).distance_au;
					return new xt(l, 0, h);
				}
				if (s > 0 || u < 0) {
					let l = Y(r, o, a, {
						init_f1: -s,
						init_f2: -u
					});
					if (!l) throw "SearchLunarApsis INTERNAL ERROR: apogee search failed!";
					let h = w0(l).distance_au;
					return new xt(l, 1, h);
				}
				throw "SearchLunarApsis INTERNAL ERROR: cannot classify apsis event!";
			}
			o = a, s = u;
		}
		throw "SearchLunarApsis INTERNAL ERROR: could not find apsis within 2 synodic months of start date.";
	}
	function $s(t) {
		let e = Wn(t.time.AddDays(11));
		if (e.kind + t.kind !== 1) throw `NextLunarApsis INTERNAL ERROR: did not find alternating apogee/perigee: prev=${t.kind} @ ${t.time.toString()}, next=${e.kind} @ ${e.time.toString()}`;
		return e;
	}
	function Zn(t, e, n, r) {
		const o = e === P0.Apocenter ? 1 : -1, s = 10;
		for (;;) {
			const i = r / (s - 1);
			if (i < 1 / 1440) {
				const u = n.AddDays(i / 2);
				return new xt(u, e, U0(t, u));
			}
			let c = -1, a = 0;
			for (let u = 0; u < s; ++u) {
				const l = o * U0(t, n.AddDays(u * i));
				(u == 0 || l > a) && (c = u, a = l);
			}
			n = n.AddDays((c - 1) * i), r = 2 * i;
		}
	}
	function js(t, e) {
		const r = e.AddDays(i0[t].OrbitalPeriod * -.08333333333333333), o = e.AddDays(i0[t].OrbitalPeriod * (270 / 360));
		let s = r, i = r, c = -1, a = -1;
		const u = (o.ut - r.ut) / 99;
		for (let d = 0; d < 100; ++d) {
			const _ = r.AddDays(d * u), M = U0(t, _);
			d === 0 ? a = c = M : (M > a && (a = M, i = _), M < c && (c = M, s = _));
		}
		const l = Zn(t, 0, s.AddDays(-2 * u), 4 * u), h = Zn(t, 1, i.AddDays(-2 * u), 4 * u);
		if (l.time.tt >= e.tt) return h.time.tt >= e.tt && h.time.tt < l.time.tt ? h : l;
		if (h.time.tt >= e.tt) return h;
		throw "Internal error: failed to find Neptune apsis.";
	}
	function t2(t, e) {
		if (e = I(e), t === f.Neptune || t === f.Pluto) return js(t, e);
		function n(a) {
			let l = a.AddDays(-5e-4), h = a.AddDays(.001 / 2), d = U0(t, l);
			return (U0(t, h) - d) / .001;
		}
		function r(a) {
			return -n(a);
		}
		const o = i0[t].OrbitalPeriod, s = o / 6;
		let i = e, c = n(i);
		for (let a = 0; a * s < 2 * o; ++a) {
			const u = i.AddDays(s), l = n(u);
			if (c * l <= 0) {
				let h, d;
				if (c < 0 || l > 0) h = n, d = P0.Pericenter;
				else if (c > 0 || l < 0) h = r, d = P0.Apocenter;
				else throw "Internal error with slopes in SearchPlanetApsis";
				const _ = Y(h, i, u);
				if (!_) throw "Failed to find slope transition in planetary apsis search.";
				const M = U0(t, _);
				return new xt(_, d, M);
			}
			i = u, c = l;
		}
		throw "Internal error: should have found planetary apsis within 2 orbital periods.";
	}
	function qs(t, e) {
		if (e.kind !== P0.Pericenter && e.kind !== P0.Apocenter) throw `Invalid apsis kind: ${e.kind}`;
		const n = .25 * i0[t].OrbitalPeriod, r = t2(t, e.time.AddDays(n));
		if (r.kind + e.kind !== 1) throw `Internal error: previous apsis was ${e.kind}, but found ${r.kind} for next apsis.`;
		return r;
	}
	function at(t) {
		return new J([
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
	function N0(t, e) {
		return new J([
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
	function Qs() {
		return new J([
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
	function Xs(t, e, n) {
		if (e !== 0 && e !== 1 && e !== 2) throw `Invalid axis ${e}. Must be [0, 1, 2].`;
		const r = D(n) * y, o = Math.cos(r), s = Math.sin(r), i = (e + 1) % 3, c = (e + 2) % 3, a = e;
		let u = [
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
		return u[i][i] = o * t.rot[i][i] - s * t.rot[i][c], u[i][c] = s * t.rot[i][i] + o * t.rot[i][c], u[i][a] = t.rot[i][a], u[c][i] = o * t.rot[c][i] - s * t.rot[c][c], u[c][c] = s * t.rot[c][i] + o * t.rot[c][c], u[c][a] = t.rot[c][a], u[a][i] = o * t.rot[a][i] - s * t.rot[a][c], u[a][c] = s * t.rot[a][i] + o * t.rot[a][c], u[a][a] = t.rot[a][a], new J(u);
	}
	function u1(t, e) {
		e = I(e);
		const n = t.lat * y, r = t.lon * y, o = t.dist * Math.cos(n);
		return new C(o * Math.cos(r), o * Math.sin(r), t.dist * Math.sin(n), e);
	}
	function fe(t) {
		const e = de(t);
		return new Zt(e.lon / 15, e.lat, e.dist, t);
	}
	function de(t) {
		const e = t.x * t.x + t.y * t.y, n = Math.sqrt(e + t.z * t.z);
		let r, o;
		if (e === 0) {
			if (t.z === 0) throw "Zero-length vector not allowed.";
			o = 0, r = t.z < 0 ? -90 : 90;
		} else o = K * Math.atan2(t.y, t.x), o < 0 && (o += 360), r = K * Math.atan2(t.z, Math.sqrt(e));
		return new X0(r, o, n);
	}
	function e2(t) {
		return t = 360 - t, t >= 360 ? t -= 360 : t < 0 && (t += 360), t;
	}
	function Ws(t, e) {
		const n = de(t);
		return n.lon = e2(n.lon), n.lat += It(e, n.lat), n;
	}
	function Zs(t, e, n) {
		e = I(e);
		const r = e2(t.lon);
		return u1(new X0(t.lat + n2(n, t.lat), r, t.dist), e);
	}
	function It(t, e) {
		let n;
		if (D(e), e < -90 || e > 90) return 0;
		if (t === "normal" || t === "jplhor") {
			let r = e;
			r < -1 && (r = -1), n = 1.02 / Math.tan((r + 10.3 / (r + 5.11)) * y) / 60, t === "normal" && e < -1 && (n *= (e + 90) / 89);
		} else if (!t) n = 0;
		else throw `Invalid refraction option: ${t}`;
		return n;
	}
	function n2(t, e) {
		if (e < -90 || e > 90) return 0;
		let n = e - It(t, e);
		for (;;) {
			let r = n + It(t, n) - e;
			if (Math.abs(r) < 1e-14) return n - e;
			n -= r;
		}
	}
	function wt(t, e) {
		return new C(t.rot[0][0] * e.x + t.rot[1][0] * e.y + t.rot[2][0] * e.z, t.rot[0][1] * e.x + t.rot[1][1] * e.y + t.rot[2][1] * e.z, t.rot[0][2] * e.x + t.rot[1][2] * e.y + t.rot[2][2] * e.z, e.t);
	}
	function l1(t, e) {
		return new G(t.rot[0][0] * e.x + t.rot[1][0] * e.y + t.rot[2][0] * e.z, t.rot[0][1] * e.x + t.rot[1][1] * e.y + t.rot[2][1] * e.z, t.rot[0][2] * e.x + t.rot[1][2] * e.y + t.rot[2][2] * e.z, t.rot[0][0] * e.vx + t.rot[1][0] * e.vy + t.rot[2][0] * e.vz, t.rot[0][1] * e.vx + t.rot[1][1] * e.vy + t.rot[2][1] * e.vz, t.rot[0][2] * e.vx + t.rot[1][2] * e.vy + t.rot[2][2] * e.vz, e.t);
	}
	function r2() {
		return new J([
			[
				1,
				0,
				0
			],
			[
				0,
				.9174821430670688,
				-.3977769691083922
			],
			[
				0,
				.3977769691083922,
				.9174821430670688
			]
		]);
	}
	function t3() {
		return new J([
			[
				1,
				0,
				0
			],
			[
				0,
				.9174821430670688,
				.3977769691083922
			],
			[
				0,
				-.3977769691083922,
				.9174821430670688
			]
		]);
	}
	function h1(t) {
		return t = I(t), N0(qt(t, k.From2000), Xt(t, k.From2000));
	}
	function e3(t) {
		const e = I(t);
		return N0(h1(e), l2(e));
	}
	function n3(t) {
		const e = I(t);
		return N0(u2(e), f1(e));
	}
	function f1(t) {
		return t = I(t), N0(Xt(t, k.Into2000), qt(t, k.Into2000));
	}
	function Me(t, e) {
		t = I(t);
		const n = Math.sin(e.latitude * y), r = Math.cos(e.latitude * y), o = Math.sin(e.longitude * y), s = Math.cos(e.longitude * y), i = [
			r * s,
			r * o,
			n
		], c = [
			-n * s,
			-n * o,
			r
		], a = [
			o,
			-s,
			0
		], u = -15 * _0(t), l = W0(u, i), h = W0(u, c), d = W0(u, a);
		return new J([
			[
				h[0],
				d[0],
				l[0]
			],
			[
				h[1],
				d[1],
				l[1]
			],
			[
				h[2],
				d[2],
				l[2]
			]
		]);
	}
	function o2(t, e) {
		return at(Me(t, e));
	}
	function s2(t, e) {
		return t = I(t), N0(o2(t, e), f1(t));
	}
	function r3(t, e) {
		return at(s2(t, e));
	}
	function i2(t) {
		return N0(f1(t), r2());
	}
	function a2(t) {
		return at(i2(t));
	}
	function c2(t, e) {
		return t = I(t), N0(a2(t), Me(t, e));
	}
	function o3(t, e) {
		return at(c2(t, e));
	}
	function s3() {
		return new J([
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
	function i3() {
		return new J([
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
	function u2(t) {
		const e = I0(I(t)).tobl * y, n = Math.cos(e), r = Math.sin(e);
		return new J([
			[
				1,
				0,
				0
			],
			[
				0,
				+n,
				+r
			],
			[
				0,
				-r,
				+n
			]
		]);
	}
	function l2(t) {
		const e = I0(I(t)).tobl * y, n = Math.cos(e), r = Math.sin(e);
		return new J([
			[
				1,
				0,
				0
			],
			[
				0,
				+n,
				-r
			],
			[
				0,
				+r,
				+n
			]
		]);
	}
	const a3 = [
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
	], c3 = [
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
	let Se, h2;
	var f2 = class {
		constructor(t, e, n, r) {
			this.symbol = t, this.name = e, this.ra1875 = n, this.dec1875 = r;
		}
	};
	function u3(t, e) {
		if (D(t), D(e), e < -90 || e > 90) throw "Invalid declination angle. Must be -90..+90.";
		t %= 24, t < 0 && (t += 24), Se || (Se = h1(new x0(-45655.74141261017)), h2 = new x0(0));
		const n = u1(new X0(e, 15 * t, 1), h2), r = fe(wt(Se, n)), o = 10 / 240, s = o / 15;
		for (let i of c3) {
			const c = i[3] * o, a = i[1] * s, u = i[2] * s;
			if (c <= r.dec && a <= r.ra && r.ra < u) {
				const l = a3[i[0]];
				return new f2(l[0], l[1], r.ra, r.dec);
			}
		}
		throw "Unable to find constellation for given coordinates.";
	}
	var t0;
	(function(t) {
		t.Penumbral = "penumbral", t.Partial = "partial", t.Annular = "annular", t.Total = "total";
	})(t0 || (t0 = {}));
	var d2 = class {
		constructor(t, e, n, r, o, s) {
			this.kind = t, this.obscuration = e, this.peak = n, this.sd_penum = r, this.sd_partial = o, this.sd_total = s;
		}
	}, l3 = class {
		constructor(t, e, n, r, o, s, i) {
			this.time = t, this.u = e, this.r = n, this.k = r, this.p = o, this.target = s, this.dir = i;
		}
	};
	function Pt(t, e, n, r) {
		const o = (r.x * n.x + r.y * n.y + r.z * n.z) / (r.x * r.x + r.y * r.y + r.z * r.z), s = o * r.x - n.x, i = o * r.y - n.y, c = o * r.z - n.z;
		return new l3(e, o, U * Math.hypot(s, i, c), 695700 - (1 + o) * (B1 - t), -695700 + (1 + o) * (B1 + t), n, r);
	}
	function d1(t) {
		const e = r0(f.Sun, t, !0), n = new C(-e.x, -e.y, -e.z, e.t);
		return Pt(qo, t, a0(t), n);
	}
	function M2(t) {
		const e = r0(f.Sun, t, !0), n = a0(t), r = new C(-n.x, -n.y, -n.z, n.t);
		return n.x -= e.x, n.y -= e.y, n.z -= e.z, Pt(W, t, r, n);
	}
	function _e(t, e) {
		const n = Tn(t, e), r = r0(f.Sun, t, !0), o = a0(t), s = new C(n[0] - o.x, n[1] - o.y, n[2] - o.z, t);
		return o.x -= r.x, o.y -= r.y, o.z -= r.z, Pt(W, t, s, o);
	}
	function M1(t, e, n) {
		const r = r0(t, n, !0), o = r0(f.Sun, n, !0), s = new C(r.x - o.x, r.y - o.y, r.z - o.z, n);
		return o.x = -r.x, o.y = -r.y, o.z = -r.z, Pt(e, n, o, s);
	}
	function Ae(t, e) {
		const n = 11574074074074073e-21, r = e.AddDays(-11574074074074073e-21), o = e.AddDays(11574074074074073e-21), s = t(r);
		return (t(o).r - s.r) / n;
	}
	function h3(t, e, n) {
		const r = 11574074074074073e-21, o = M1(t, e, n.AddDays(-11574074074074073e-21));
		return (M1(t, e, n.AddDays(11574074074074073e-21)).r - o.r) / r;
	}
	function f3(t) {
		const e = Y((n) => Ae(d1, n), t.AddDays(-.03), t.AddDays(.03));
		if (!e) throw "Failed to find peak Earth shadow time.";
		return d1(e);
	}
	function d3(t) {
		const e = Y((n) => Ae(M2, n), t.AddDays(-.03), t.AddDays(.03));
		if (!e) throw "Failed to find peak Moon shadow time.";
		return M2(e);
	}
	function M3(t, e, n) {
		const r = Y((o) => h3(t, e, o), n.AddDays(-1), n.AddDays(1));
		if (!r) throw "Failed to find peak planet shadow time.";
		return M1(t, e, r);
	}
	function S3(t, e) {
		const n = t.AddDays(-.2), r = t.AddDays(.2);
		function o(i) {
			return _e(i, e);
		}
		const s = Y((i) => Ae(o, i), n, r);
		if (!s) throw `PeakLocalMoonShadow: search failure for search_center_time = ${t}`;
		return _e(s, e);
	}
	function me(t, e, n) {
		const r = n / 1440, o = t.AddDays(-r), s = t.AddDays(+r), i = Y((a) => -(d1(a).r - e), o, t), c = Y((a) => +(d1(a).r - e), t, s);
		if (!i || !c) throw "Failed to find shadow semiduration";
		return (c.ut - i.ut) * (1440 / 2);
	}
	function Ee(t) {
		return K * w0(t).geo_eclip_lat;
	}
	function S2(t, e, n) {
		if (t <= 0) throw "Radius of first disc must be positive.";
		if (e <= 0) throw "Radius of second disc must be positive.";
		if (n < 0) throw "Distance between discs is not allowed to be negative.";
		if (n >= t + e) return 0;
		if (n == 0) return t <= e ? 1 : e * e / (t * t);
		const r = (t * t - e * e + n * n) / (2 * n), o = t * t - r * r;
		if (o <= 0) return t <= e ? 1 : e * e / (t * t);
		const s = Math.sqrt(o);
		return (t * t * Math.acos(r / t) - r * s + (e * e * Math.acos((n - r) / e) - (n - r) * s)) / (Math.PI * t * t);
	}
	function _2(t, e) {
		const n = new C(t.x + e.x, t.y + e.y, t.z + e.z, t.t), r = S2(Math.asin(Sn / n.Length()), Math.asin(Xo / e.Length()), Yt(e, n) * y);
		return Math.min(.9999, r);
	}
	function A2(t) {
		let n = I(t);
		for (let r = 0; r < 12; ++r) {
			const o = gt(180, n, 40);
			if (!o) throw "Cannot find full moon.";
			const s = Ee(o);
			if (Math.abs(s) < 1.8) {
				const i = f3(o);
				if (i.r < i.p + W) {
					let c = t0.Penumbral, a = 0, u = 0, l = 0, h = me(i.time, i.p + W, 200);
					return i.r < i.k + W && (c = t0.Partial, l = me(i.time, i.k + W, h), i.r + W < i.k ? (c = t0.Total, a = 1, u = me(i.time, i.k - W, l)) : a = S2(W, i.k, i.r)), new d2(c, a, i.time, h, l, u);
				}
			}
			n = o.AddDays(10);
		}
		throw "Failed to find lunar eclipse within 12 full moons.";
	}
	var m2 = class {
		constructor(t, e, n, r, o, s) {
			this.kind = t, this.obscuration = e, this.peak = n, this.distance = r, this.latitude = o, this.longitude = s;
		}
	};
	function E2(t) {
		return t > .014 ? t0.Total : t0.Annular;
	}
	function _3(t) {
		let e = t0.Partial, n = t.time, r = t.r, o, s;
		const i = h1(t.time), c = wt(i, t.dir), a = wt(i, t.target);
		c.x *= U, c.y *= U, c.z *= U / s0, a.x *= U, a.y *= U, a.z *= U / s0;
		const u = S0, l = c.x * c.x + c.y * c.y + c.z * c.z, h = -2 * (c.x * a.x + c.y * a.y + c.z * a.z), d = a.x * a.x + a.y * a.y + a.z * a.z - u * u, _ = h * h - 4 * l * d;
		let M;
		if (_ > 0) {
			const m = (-h - Math.sqrt(_)) / (2 * l), x = m * c.x - a.x, g = m * c.y - a.y, E = (m * c.z - a.z) * s0, w = Math.hypot(x, g) * G0;
			w == 0 ? o = E > 0 ? 90 : -90 : o = K * Math.atan(E / w);
			const N = _0(n);
			s = (K * Math.atan2(g, x) - 15 * N) % 360, s <= -180 ? s += 360 : s > 180 && (s -= 360);
			const p = at(i);
			let R = new C(x / U, g / U, E / U, t.time);
			R = wt(p, R), R.x += t.target.x, R.y += t.target.y, R.z += t.target.z;
			const P = Pt(_n, t.time, R, t.dir);
			if (P.r > 1e-9 || P.r < 0) throw `Unexpected shadow distance from geoid intersection = ${P.r}`;
			e = E2(P.k), M = e === t0.Total ? 1 : _2(t.dir, R);
		} else M = void 0;
		return new m2(e, M, n, r, o, s);
	}
	function A3(t) {
		return t = I(t), A2(t.AddDays(10));
	}
	function y2(t) {
		t = I(t);
		const e = 1.8;
		let n = t, r;
		for (r = 0; r < 12; ++r) {
			const o = gt(0, n, 40);
			if (!o) throw "Cannot find new moon";
			const s = Ee(o);
			if (Math.abs(s) < e) {
				const i = d3(o);
				if (i.r < i.p + jo) return _3(i);
			}
			n = o.AddDays(10);
		}
		throw "Failed to find solar eclipse within 12 full moons.";
	}
	function m3(t) {
		return t = I(t), y2(t.AddDays(10));
	}
	var p2 = class {
		constructor(t, e) {
			this.time = t, this.altitude = e;
		}
	}, R2 = class {
		constructor(t, e, n, r, o, s, i) {
			this.kind = t, this.obscuration = e, this.partial_begin = n, this.total_begin = r, this.peak = o, this.total_end = s, this.partial_end = i;
		}
	};
	function g2(t) {
		return t.p - t.r;
	}
	function x2(t) {
		return Math.abs(t.k) - t.r;
	}
	function E3(t, e) {
		const n = I2(e, t.time);
		let r = t.time.AddDays(-.2), o = t.time.AddDays(.2);
		const s = S1(e, 1, g2, r, t.time), i = S1(e, -1, g2, t.time, o);
		let c, a, u;
		t.r < Math.abs(t.k) ? (r = t.time.AddDays(-.01), o = t.time.AddDays(.01), c = S1(e, 1, x2, r, t.time), a = S1(e, -1, x2, t.time, o), u = E2(t.k)) : u = t0.Partial;
		const l = u === t0.Total ? 1 : _2(t.dir, t.target);
		return new R2(u, l, s, c, n, a, i);
	}
	function S1(t, e, n, r, o) {
		function s(c) {
			return e * n(_e(c, t));
		}
		const i = Y(s, r, o);
		if (!i) throw "Local eclipse transition search failed.";
		return I2(t, i);
	}
	function I2(t, e) {
		return new p2(e, y3(e, t));
	}
	function y3(t, e) {
		const n = _t(f.Sun, t, e, !0, !0);
		return t1(t, e, n.ra, n.dec, "normal").altitude;
	}
	function w2(t, e) {
		t = I(t), Z0(e);
		const n = 1.8;
		let r = t;
		for (;;) {
			const o = gt(0, r, 40);
			if (!o) throw "Cannot find next new moon";
			const s = Ee(o);
			if (Math.abs(s) < n) {
				const i = S3(o, e);
				if (i.r < i.p) {
					const c = E3(i, e);
					if (c.partial_begin.altitude > 0 || c.partial_end.altitude > 0) return c;
				}
			}
			r = o.AddDays(10);
		}
	}
	function p3(t, e) {
		return t = I(t), w2(t.AddDays(10), e);
	}
	var P2 = class {
		constructor(t, e, n, r) {
			this.start = t, this.peak = e, this.finish = n, this.separation = r;
		}
	};
	function R3(t, e, n, r) {
		const o = M1(e, n, t);
		return r * (o.r - o.p);
	}
	function N2(t, e, n, r, o) {
		const s = Y((i) => R3(i, t, e, o), n, r);
		if (!s) throw "Planet transit boundary search failed";
		return s;
	}
	function T2(t, e) {
		e = I(e);
		const n = .4;
		let r;
		switch (t) {
			case f.Mercury:
				r = 2439.7;
				break;
			case f.Venus:
				r = 6051.8;
				break;
			default: throw `Invalid body: ${t}`;
		}
		let o = e;
		for (;;) {
			const s = it(t, 0, o);
			if (st(t, s) < n) {
				const i = M3(t, r, s);
				if (i.r < i.p) {
					const c = i.time.AddDays(-1), a = N2(t, r, c, i.time, -1), u = i.time.AddDays(1), l = N2(t, r, i.time, u, 1), h = 60 * st(t, i.time);
					return new P2(a, i.time, l, h);
				}
			}
			o = s.AddDays(10);
		}
	}
	function g3(t, e) {
		return e = I(e), T2(t, e.AddDays(100));
	}
	var m0;
	(function(t) {
		t[t.Invalid = 0] = "Invalid", t[t.Ascending = 1] = "Ascending", t[t.Descending = -1] = "Descending";
	})(m0 || (m0 = {}));
	var D2 = class {
		constructor(t, e) {
			this.kind = t, this.time = e;
		}
	};
	const C2 = 10;
	function z2(t) {
		let e = I(t), n = e1(e);
		for (;;) {
			const r = e.AddDays(C2), o = e1(r);
			if (n.lat * o.lat <= 0) {
				const s = o.lat > n.lat ? m0.Ascending : m0.Descending, i = Y((c) => s * e1(c).lat, e, r);
				if (!i) throw "Could not find moon node.";
				return new D2(s, i);
			}
			e = r, n = o;
		}
	}
	function x3(t) {
		const e = z2(t.time.AddDays(C2));
		switch (t.kind) {
			case m0.Ascending:
				if (e.kind !== m0.Descending) throw `Internal error: previous node was ascending, but this node was: ${e.kind}`;
				break;
			case m0.Descending:
				if (e.kind !== m0.Ascending) throw `Internal error: previous node was descending, but this node was: ${e.kind}`;
				break;
			default: throw `Previous node has an invalid node kind: ${t.kind}`;
		}
		return e;
	}
	var ye = class {
		constructor(t, e, n, r) {
			this.ra = t, this.dec = e, this.spin = n, this.north = r;
		}
	};
	function I3(t) {
		const e = q0(Q0([
			0,
			0,
			1
		], t, k.Into2000), t, k.Into2000), n = new C(e[0], e[1], e[2], t), r = fe(n), o = 190.41375788700253 + 360.9856122880876 * t.ut;
		return new ye(r.ra, r.dec, o, n);
	}
	function w3(t, e) {
		const n = I(e), r = n.tt, o = r / 36525;
		let s, i, c;
		switch (t) {
			case f.Sun:
				s = 286.13, i = 63.87, c = 84.176 + 14.1844 * r;
				break;
			case f.Mercury:
				s = 281.0103 - .0328 * o, i = 61.4155 - .0049 * o, c = 329.5988 + 6.1385108 * r + .01067257 * Math.sin(y * (174.7910857 + 4.092335 * r)) - .00112309 * Math.sin(y * (349.5821714 + 8.18467 * r)) - 1104e-7 * Math.sin(y * (164.3732571 + 12.277005 * r)) - 2539e-8 * Math.sin(y * (339.1643429 + 16.36934 * r)) - 571e-8 * Math.sin(y * (153.9554286 + 20.461675 * r));
				break;
			case f.Venus:
				s = 272.76, i = 67.16, c = 160.2 - 1.4813688 * r;
				break;
			case f.Earth: return I3(n);
			case f.Moon:
				const d = y * (125.045 - .0529921 * r), _ = y * (250.089 - .1059842 * r), M = y * (260.008 + 13.0120009 * r), m = y * (176.625 + 13.3407154 * r), x = y * (357.529 + .9856003 * r), g = y * (311.589 + 26.4057084 * r), E = y * (134.963 + 13.064993 * r), w = y * (276.617 + .3287146 * r), N = y * (34.226 + 1.7484877 * r), p = y * (15.134 - .1589763 * r), R = y * (119.743 + .0036096 * r), P = y * (239.961 + .1643573 * r), T = y * (25.053 + 12.9590088 * r);
				s = 269.9949 + .0031 * o - 3.8787 * Math.sin(d) - .1204 * Math.sin(_) + .07 * Math.sin(M) - .0172 * Math.sin(m) + .0072 * Math.sin(g) - .0052 * Math.sin(p) + .0043 * Math.sin(T), i = 66.5392 + .013 * o + 1.5419 * Math.cos(d) + .0239 * Math.cos(_) - .0278 * Math.cos(M) + .0068 * Math.cos(m) - .0029 * Math.cos(g) + 9e-4 * Math.cos(E) + 8e-4 * Math.cos(p) - 9e-4 * Math.cos(T), c = 38.3213 + (13.17635815 - 14e-13 * r) * r + 3.561 * Math.sin(d) + .1208 * Math.sin(_) - .0642 * Math.sin(M) + .0158 * Math.sin(m) + .0252 * Math.sin(x) - .0066 * Math.sin(g) - .0047 * Math.sin(E) - .0046 * Math.sin(w) + .0028 * Math.sin(N) + .0052 * Math.sin(p) + .004 * Math.sin(R) + .0019 * Math.sin(P) - .0044 * Math.sin(T);
				break;
			case f.Mars:
				s = 317.269202 - .10927547 * o + 68e-6 * Math.sin(y * (198.991226 + 19139.4819985 * o)) + 238e-6 * Math.sin(y * (226.292679 + 38280.8511281 * o)) + 52e-6 * Math.sin(y * (249.663391 + 57420.7251593 * o)) + 9e-6 * Math.sin(y * (266.18351 + 76560.636795 * o)) + .419057 * Math.sin(y * (79.398797 + .5042615 * o)), i = 54.432516 - .05827105 * o + 51e-6 * Math.cos(y * (122.433576 + 19139.9407476 * o)) + 141e-6 * Math.cos(y * (43.058401 + 38280.8753272 * o)) + 31e-6 * Math.cos(y * (57.663379 + 57420.7517205 * o)) + 5e-6 * Math.cos(y * (79.476401 + 76560.6495004 * o)) + 1.591274 * Math.cos(y * (166.325722 + .5042615 * o)), c = 176.049863 + 350.891982443297 * r + 145e-6 * Math.sin(y * (129.071773 + 19140.0328244 * o)) + 157e-6 * Math.sin(y * (36.352167 + 38281.0473591 * o)) + 4e-5 * Math.sin(y * (56.668646 + 57420.929536 * o)) + 1e-6 * Math.sin(y * (67.364003 + 76560.2552215 * o)) + 1e-6 * Math.sin(y * (104.79268 + 95700.4387578 * o)) + .584542 * Math.sin(y * (95.391654 + .5042615 * o));
				break;
			case f.Jupiter:
				const b = y * (99.360714 + 4850.4046 * o), $ = y * (175.895369 + 1191.9605 * o), B = y * (300.323162 + 262.5475 * o), X = y * (114.012305 + 6070.2476 * o), u0 = y * (49.511251 + 64.3 * o);
				s = 268.056595 - .006499 * o + 117e-6 * Math.sin(b) + 938e-6 * Math.sin($) + .001432 * Math.sin(B) + 3e-5 * Math.sin(X) + .00215 * Math.sin(u0), i = 64.495303 + .002413 * o + 5e-5 * Math.cos(b) + 404e-6 * Math.cos($) + 617e-6 * Math.cos(B) - 13e-6 * Math.cos(X) + 926e-6 * Math.cos(u0), c = 284.95 + 870.536 * r;
				break;
			case f.Saturn:
				s = 40.589 - .036 * o, i = 83.537 - .004 * o, c = 38.9 + 810.7939024 * r;
				break;
			case f.Uranus:
				s = 257.311, i = -15.175, c = 203.81 - 501.1600928 * r;
				break;
			case f.Neptune:
				const o0 = y * (357.85 + 52.316 * o);
				s = 299.36 + .7 * Math.sin(o0), i = 43.46 - .51 * Math.cos(o0), c = 249.978 + 541.1397757 * r - .48 * Math.sin(o0);
				break;
			case f.Pluto:
				s = 132.993, i = -6.163, c = 302.695 + 56.3625225 * r;
				break;
			default: throw `Invalid body: ${t}`;
		}
		const a = i * y, u = s * y, l = Math.cos(a), h = new C(l * Math.cos(u), l * Math.sin(u), Math.sin(a), n);
		return new ye(s / 15, i, c, h);
	}
	function P3(t, e, n, r) {
		const o = I(e), s = Y1(n), i = Y1(r);
		let c, a;
		return n === f.Earth && r === f.Moon ? (c = new G(0, 0, 0, 0, 0, 0, o), a = mt(o)) : (c = a1(n, o), a = a1(r, o)), b2(t, c, s, a, i);
	}
	function b2(t, e, n, r, o) {
		if (t < 1 || t > 5) throw `Invalid lagrange point ${t}`;
		if (!Number.isFinite(n) || n <= 0) throw "Major mass must be a positive number.";
		if (!Number.isFinite(o) || o <= 0) throw "Minor mass must be a negative number.";
		let i = r.x - e.x, c = r.y - e.y, a = r.z - e.z;
		const u = i * i + c * c + a * a, l = Math.sqrt(u), h = r.vx - e.vx, d = r.vy - e.vy, _ = r.vz - e.vz;
		let M;
		if (t === 4 || t === 5) {
			const m = c * _ - a * d, x = a * h - i * _, g = i * d - c * h;
			let E = x * a - g * c, w = g * i - m * a, N = m * c - x * i;
			const p = Math.sqrt(E * E + w * w + N * N);
			E /= p, w /= p, N /= p, i /= l, c /= l, a /= l;
			const R = t == 4 ? .8660254037844386 : -.8660254037844386, P = .5 * i + R * E, T = .5 * c + R * w, b = .5 * a + R * N, $ = .5 * E - R * i, B = .5 * w - R * c, X = .5 * N - R * a, u0 = l * P, o0 = l * T, E0 = l * b, l0 = h * i + d * c + _ * a, h0 = h * E + d * w + _ * N;
			M = new G(u0, o0, E0, l0 * P + h0 * $, l0 * T + h0 * B, l0 * b + h0 * X, e.t);
		} else {
			const m = -l * (o / (n + o)), x = +l * (n / (n + o)), g = (n + o) / (u * l);
			let E, w, N;
			if (t === 1 || t === 2) E = n / (n + o) * Math.cbrt(o / (3 * n)), w = -n, t == 1 ? (E = 1 - E, N = +o) : (E = 1 + E, N = -o);
			else if (t === 3) E = (7 / 12 * o - n) / (o + n), w = +n, N = +o;
			else throw `Invalid Langrage point ${t}. Must be an integer 1..5.`;
			let p = l * E - m, R;
			do {
				const P = p - m, T = p - x;
				R = (g * p + w / (P * P) + N / (T * T)) / (g - 2 * w / (P * P * P) - 2 * N / (T * T * T)), p -= R;
			} while (Math.abs(R / l) > 1e-14);
			E = (p - m) / l, M = new G(E * i, E * c, E * a, E * h, E * d, E * _, e.t);
		}
		return M;
	}
	var N3 = class e0 {
		constructor(e, n, r) {
			const o = I(n);
			this.originBody = e;
			for (let a of r) if (a.t.tt !== o.tt) throw "Inconsistent times in bodyStates";
			const s = [], i = e0.CalcSolarSystem(o);
			this.curr = new v2(o, i, s);
			const c = this.InternalBodyState(e);
			for (let a of r) {
				const u = new Q(a.x + c.r.x, a.y + c.r.y, a.z + c.r.z), l = new Q(a.vx + c.v.x, a.vy + c.v.y, a.vz + c.v.z), h = Q.zero();
				s.push(new oe(o.tt, u, l, h));
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
			const n = I(e), r = n.tt - this.curr.time.tt;
			if (r === 0) this.prev = this.Duplicate();
			else {
				this.Swap(), this.curr.time = n, this.curr.gravitators = e0.CalcSolarSystem(n);
				for (let i = 0; i < this.curr.bodies.length; ++i) {
					const c = this.prev.bodies[i];
					this.curr.bodies[i].r = nt(r, c.r, c.v, c.a);
				}
				this.CalcBodyAccelerations();
				for (let i = 0; i < this.curr.bodies.length; ++i) {
					const c = this.prev.bodies[i], a = this.curr.bodies[i], u = c.a.mean(a.a);
					a.tt = n.tt, a.r = nt(r, c.r, c.v, u), a.v = se(r, c.v, u);
				}
				this.CalcBodyAccelerations();
			}
			const o = [], s = this.InternalBodyState(this.originBody);
			for (let i of this.curr.bodies) o.push(new G(i.r.x - s.r.x, i.r.y - s.r.y, i.r.z - s.r.z, i.v.x - s.v.x, i.v.y - s.v.y, i.v.z - s.v.z, n));
			return o;
		}
		Swap() {
			const e = this.curr;
			this.curr = this.prev, this.prev = e;
		}
		SolarSystemBodyState(e) {
			const n = this.InternalBodyState(e), r = this.InternalBodyState(this.originBody);
			return O0(n.sub(r), this.curr.time);
		}
		InternalBodyState(e) {
			if (e === f.SSB) return new v0(this.curr.time.tt, Q.zero(), Q.zero());
			const n = this.curr.gravitators[e];
			if (n) return n;
			throw `Invalid body: ${e}`;
		}
		static CalcSolarSystem(e) {
			const n = {}, r = new v0(e.tt, Q.zero(), Q.zero());
			n[f.Mercury] = Z(r, e.tt, f.Mercury, G1), n[f.Venus] = Z(r, e.tt, f.Venus, V1), n[f.Earth] = Z(r, e.tt, f.Earth, 8997011346712498e-25), n[f.Mars] = Z(r, e.tt, f.Mars, J1), n[f.Jupiter] = Z(r, e.tt, f.Jupiter, V0), n[f.Saturn] = Z(r, e.tt, f.Saturn, J0), n[f.Uranus] = Z(r, e.tt, f.Uranus, Y0), n[f.Neptune] = Z(r, e.tt, f.Neptune, $0);
			for (let o in n) n[o].r.decr(r.r), n[o].v.decr(r.v);
			return n[f.Sun] = new v0(e.tt, r.r.neg(), r.v.neg()), n;
		}
		CalcBodyAccelerations() {
			for (let e of this.curr.bodies) e.a = Q.zero(), e0.AddAcceleration(e.a, e.r, this.curr.gravitators[f.Sun].r, St), e0.AddAcceleration(e.a, e.r, this.curr.gravitators[f.Mercury].r, G1), e0.AddAcceleration(e.a, e.r, this.curr.gravitators[f.Venus].r, V1), e0.AddAcceleration(e.a, e.r, this.curr.gravitators[f.Earth].r, 8997011346712498e-25), e0.AddAcceleration(e.a, e.r, this.curr.gravitators[f.Mars].r, J1), e0.AddAcceleration(e.a, e.r, this.curr.gravitators[f.Jupiter].r, V0), e0.AddAcceleration(e.a, e.r, this.curr.gravitators[f.Saturn].r, J0), e0.AddAcceleration(e.a, e.r, this.curr.gravitators[f.Uranus].r, Y0), e0.AddAcceleration(e.a, e.r, this.curr.gravitators[f.Neptune].r, $0);
		}
		static AddAcceleration(e, n, r, o) {
			const s = r.x - n.x, i = r.y - n.y, c = r.z - n.z, a = s * s + i * i + c * c, u = o / (a * Math.sqrt(a));
			e.x += s * u, e.y += i * u, e.z += c * u;
		}
		Duplicate() {
			const e = {};
			for (let r in this.curr.gravitators) e[r] = this.curr.gravitators[r].clone();
			const n = [];
			for (let r of this.curr.bodies) n.push(r.clone());
			return new v2(this.curr.time, e, n);
		}
	}, v2 = class {
		constructor(t, e, n) {
			this.time = t, this.gravitators = e, this.bodies = n;
		}
	};
	(() => {
		const t = bo;
		return t.default && t.default.Body ? t.default : t;
	})();
	function _1(t, e) {
		return t.x = e.x, t.y = e.y, t.z = e.z, t;
	}
	function T3(t, e, n) {
		if (t.length === 0) return null;
		if (t.length === 1) {
			const E = t[0].position;
			return n ? _1(n, E) : {
				x: E.x,
				y: E.y,
				z: E.z
			};
		}
		if (e <= t[0].time.jd) {
			const E = t[0].position;
			return n ? _1(n, E) : {
				x: E.x,
				y: E.y,
				z: E.z
			};
		}
		if (e >= t[t.length - 1].time.jd) {
			const E = t[t.length - 1].position;
			return n ? _1(n, E) : {
				x: E.x,
				y: E.y,
				z: E.z
			};
		}
		let r = 0, o = t.length - 1;
		for (; o - r > 1;) {
			const E = r + o >> 1;
			t[E].time.jd <= e ? r = E : o = E;
		}
		const s = t[r], i = t[o];
		if (i.time.jd === s.time.jd) {
			const E = s.position;
			return n ? _1(n, E) : {
				x: E.x,
				y: E.y,
				z: E.z
			};
		}
		const c = i.time.jd - s.time.jd, a = (e - s.time.jd) / c, u = a * a, l = u * a, h = 2 * l - 3 * u + 1, d = l - 2 * u + a, _ = -2 * l + 3 * u, M = l - u, m = h * s.position.x + d * c * s.velocity.x + _ * i.position.x + M * c * i.velocity.x, x = h * s.position.y + d * c * s.velocity.y + _ * i.position.y + M * c * i.velocity.y, g = h * s.position.z + d * c * s.velocity.z + _ * i.position.z + M * c * i.velocity.z;
		return n ? (n.x = m, n.y = x, n.z = g, n) : {
			x: m,
			y: x,
			z: g
		};
	}
	function D3(t) {
		return Number.isFinite(t.x) && Number.isFinite(t.y) && Number.isFinite(t.z);
	}
	function C3(t, e) {
		if (e == null) return [];
		const n = [];
		for (const r of Tr) {
			const o = e[r];
			if (o != null && o.length > 0) {
				const s = T3(o, t);
				if (s != null) {
					const i = Mo(s);
					D3(i) && n.push({
						rawId: r,
						name: io(r),
						scenePosition: i
					});
				}
			}
		}
		return n;
	}
	const z3 = .0073, b3 = 2.5, v3 = 1.25;
	function U3(t) {
		return t === F.Star || t === F.BlackHole;
	}
	function O3(t) {
		return {
			appearance: t,
			selectionBoundaryMul: U3(t) ? b3 : v3,
			angularFloorRad: z3
		};
	}
	const U2 = N1;
	function Nt(t) {
		return !Number.isFinite(t) || t < 0 ? 0 : t * K0;
	}
	const L3 = 5e4, k3 = 2e3, F3 = L3 / U2, K3 = k3 / U2;
	Nt(F3);
	Nt(K3);
	[...T1];
	function ct(t, e, n) {
		return {
			x: t,
			y: e,
			z: n
		};
	}
	function pe(t, e) {
		return {
			value: t,
			frame: e
		};
	}
	co * Math.PI / 180;
	function O2(t) {
		return {
			id: ft(t.source, t.key),
			source: t.source,
			name: t.name,
			type: t.type,
			radiusKm: t.radiusKm,
			getHeliocentricKm: t.getHeliocentricKm,
			selectable: t.selectable ?? !0,
			pickable: t.pickable ?? !0,
			render: {
				...O3(t.appearance),
				...t.renderOverrides
			}
		};
	}
	const H3 = "Sun";
	function Re(t) {
		return t.id === 0 || t.id === "0";
	}
	function L2(t) {
		return Math.max(uo, Math.min(lo, t));
	}
	function B3(t, e) {
		if (!Number.isFinite(e) || e <= 0 || t == null || !Number.isFinite(t)) return null;
		const n = 10 ** ((4.83 - (t - 5 * Math.log10(e / 10))) / 2.5);
		return L2(Math.sqrt(n));
	}
	function G3(t, e) {
		const n = t.solrad;
		return n != null && Number.isFinite(n) && n > 0 ? L2(n) * v1 : (B3(t.mag, e) ?? 1) * v1;
	}
	function k2(t) {
		if (Re(t)) return 0;
		const { x: e, y: n, z: r, plx: o } = t;
		return e != null && n != null && r != null && Number.isFinite(e) && Number.isFinite(n) && Number.isFinite(r) ? D1({
			x: e,
			y: n,
			z: r
		}) : We(o) ?? 25;
	}
	function V3(t) {
		if (Re(t)) return ct(M0.x, M0.y, M0.z);
		const e = k2(t) * Ut, { x: n, y: r, z: o, ra: s, dec: i } = t, c = n != null && r != null && o != null && Number.isFinite(n) && Number.isFinite(r) && Number.isFinite(o);
		let a = null;
		return c && (a = Ve({
			x: n,
			y: r,
			z: o
		})), a == null && (a = U1(s, i)), a == null ? ct(0, 0, e) : ct(a.x * e, a.y * e, a.z * e);
	}
	function J3(t, e) {
		const n = Re(t), r = G3(t, k2(t)), o = pe(V3(t), "icrf-j2000-equatorial");
		let s;
		return t.proper && t.proper.length > 0 ? s = t.proper : n ? s = H3 : s = String(t.id), O2({
			source: "hyg",
			key: String(t.id),
			name: s,
			type: "star",
			radiusKm: r,
			appearance: F.Star,
			getHeliocentricKm() {
				return o;
			},
			renderOverrides: e
		});
	}
	Math.PI / 10800;
	const Tt = Math.PI * 2;
	function ge(t) {
		return t != null && Number.isFinite(t) && t > 0;
	}
	const F2 = Math.PI / 180;
	function Y3(t) {
		return t == null || !Number.isFinite(t) || t <= 0 ? 0 : Math.min(t, .99);
	}
	function $3(t, e) {
		let n = t % Tt;
		if (n > Math.PI ? n -= Tt : n < -Math.PI && (n += Tt), e === 0) return n;
		let r = n + e * Math.sin(n);
		for (let o = 0; o < 8; o += 1) {
			const s = (r - e * Math.sin(r) - n) / (1 - e * Math.cos(r));
			if (r -= s, Math.abs(s) < 1e-10) break;
		}
		return r;
	}
	function j3(t) {
		let e = 0;
		for (let n = 0; n < t.length; n += 1) e = (e * 131 + t.charCodeAt(n)) % 2147483647;
		return e / 2147483647 * Tt;
	}
	function q3(t, e, n) {
		const r = ge(t.semiMajorAxisAU) ? t.semiMajorAxisAU * L : 0;
		if (r === 0) return e;
		const o = t.orbitalPeriodDays;
		if (!ge(o) || !Number.isFinite(n)) return ct(e.x + r, e.y, e.z);
		const s = Y3(t.eccentricity), i = $3(Tt * (n - He) / o, s), c = r * (Math.cos(i) - s), a = r * Math.sqrt(1 - s * s) * Math.sin(i), u = (t.argPeriapsisDeg ?? 0) * F2, l = (t.inclinationDeg ?? 0) * F2, h = j3(t.hostStarId), d = Math.cos(u), _ = Math.sin(u), M = Math.cos(l), m = Math.sin(l), x = Math.cos(h), g = Math.sin(h), E = c * (x * d - g * _ * M) - a * (x * _ + g * d * M), w = c * (g * d + x * _ * M) - a * (g * _ - x * d * M), N = c * (_ * m) + a * (d * m);
		return ct(e.x + E, e.y + w, e.z + N);
	}
	function Q3(t, e, n, r) {
		const o = (ge(t.radiusEarth) ? t.radiusEarth : 1) * Qe, s = Lr({
			massEarth: t.massEarth ?? void 0,
			radiusEarth: t.radiusEarth ?? void 0,
			eqTempK: t.eqTempK ?? void 0
		});
		return O2({
			source: "exo",
			key: t.catalogId,
			name: t.name,
			type: "planet",
			radiusKm: o,
			appearance: s,
			getHeliocentricKm(i) {
				return pe(q3(t, e, i ?? n), "icrf-j2000-equatorial");
			},
			renderOverrides: r
		});
	}
	S.MERCURY, S.VENUS, S.EARTH, S.MARS, S.JUPITER, S.SATURN, S.URANUS, S.NEPTUNE, S.PLUTO;
	F.Star, F.Barren, F.Molten, F.Oceanic, F.Desert, F.GasGiant, F.IceGiant, F.Galaxy, F.Nebula, F.StarCluster, F.BlackHole;
	function X3(t) {
		return Number.isFinite(t.x) && Number.isFinite(t.y) && Number.isFinite(t.z);
	}
	function W3(t, e, n, r) {
		if (e.length === 0 || n.size === 0) return [];
		let o = -1, s = null;
		if (r != null && Number.isFinite(r.maxDistancePc)) {
			const a = r.maxDistancePc + r.padPc;
			o = a * a, s = r.viewerPc;
		}
		const i = (a) => {
			if (s == null) return !0;
			const { x: u, y: l, z: h } = a;
			if (u == null || l == null || h == null) return !0;
			const d = u - s.x, _ = l - s.y, M = h - s.z;
			return d * d + _ * _ + M * M <= o;
		}, c = [];
		for (const a of e) if (a.hostStarId) {
			const u = n.get(a.hostStarId);
			if (u != null && i(u)) {
				const l = Io(u, t), h = J3(u).getHeliocentricKm().value, d = Q3(a, h, t).getHeliocentricKm(t).value, _ = {
					x: l.x + (d.x - h.x) * C0,
					y: l.y + (d.y - h.y) * C0,
					z: l.z + (d.z - h.z) * C0
				};
				X3(_) && c.push({
					catalogId: a.catalogId,
					name: a.name,
					hostStarId: a.hostStarId,
					scenePosition: _
				});
			}
		}
		return c;
	}
	function Z3(t) {
		const e = /* @__PURE__ */ new Map();
		if (t == null) return e;
		for (const n of t) n.hostStarId && e.set(n.hostStarId, (e.get(n.hostStarId) ?? 0) + 1);
		return e;
	}
	let K2 = null, A1 = null;
	function t4(t) {
		return A1 != null && t === K2 || (K2 = t, A1 = Z3(t)), A1;
	}
	const e4 = 1;
	function n4(t) {
		return 2 ** Math.ceil(Math.log2(Math.max(1, t)));
	}
	let H2 = null, B2 = -1, xe = null;
	function r4(t, e, n) {
		if (!Number.isFinite(e) || e <= 0) return t;
		const r = n4(e + (Number.isFinite(n) ? Math.max(0, n) : 0) + e4);
		if (xe != null && t === H2 && r === B2) return xe;
		const o = r * r, s = [];
		for (const i of t) {
			const { x: c, y: a, z: u } = i;
			(c == null || a == null || u == null || c * c + a * a + u * u <= o) && s.push(i);
		}
		return H2 = t, B2 = r, xe = s, s;
	}
	function o4(t) {
		const e = /* @__PURE__ */ new Map();
		if (!t) return e;
		for (const n of t) e.set(String(n.id), n);
		return e;
	}
	let G2 = null, m1 = null;
	function s4(t) {
		return m1 != null && t === G2 || (G2 = t, m1 = o4(t)), m1;
	}
	const i4 = 500 * K0;
	function a4(t, e) {
		const n = Number.isFinite(t) && (t ?? 0) > 0, r = Number.isFinite(e) && (e ?? 0) > 0;
		let o;
		if (n && r) {
			const i = e / 120 * (Math.PI / 180);
			o = t * Math.tan(i);
		} else if (n || r) o = 6;
		else return 0;
		(!Number.isFinite(o) || o <= 0) && (o = 6);
		const s = o * K0;
		return !Number.isFinite(s) || s <= 0 ? 0 : Math.min(s, i4);
	}
	const c4 = {
		a: 0,
		b: .4,
		c: .7,
		d: .9,
		m: 1
	};
	function V2(t) {
		const e = t.match(/[abcdm]/);
		return e ? c4[e[0]] : .5;
	}
	function u4(t) {
		const e = (t ?? "").trim();
		return e === "" ? {
			kind: "spiral",
			tightness: .5
		} : e.startsWith("E") ? {
			kind: "elliptical",
			tightness: .5
		} : e.startsWith("S0") ? {
			kind: "lenticular",
			tightness: .5
		} : e.startsWith("SB") ? {
			kind: "barred_spiral",
			tightness: V2(e)
		} : e.startsWith("S") ? {
			kind: "spiral",
			tightness: V2(e)
		} : e.startsWith("I") ? {
			kind: "irregular",
			tightness: .5
		} : {
			kind: "spiral",
			tightness: .5
		};
	}
	const l4 = Math.PI / 180, h4 = Math.PI / 180 / 60, f4 = Nt(1e4);
	Nt(500);
	const d4 = .05, M4 = .15, S4 = .7, _4 = .35, A4 = {
		NGC0224: "spiral",
		NGC0598: "spiral",
		NGC5457: "spiral",
		NGC3031: "spiral",
		NGC0055: "spiral",
		NGC0253: "spiral",
		NGC4236: "spiral",
		NGC4945: "spiral",
		NGC5128: "lenticular",
		NGC0292: "irregular",
		NGC1300: "barred_spiral",
		NGC4565: "spiral",
		NGC3034: "irregular"
	};
	function m4(t) {
		switch (t) {
			case "lenticular": return M4;
			case "elliptical": return S4;
			case "irregular": return _4;
			default: return d4;
		}
	}
	function E4(t) {
		if (!Number.isFinite(t.distPc) || t.distPc <= 0 || !Number.isFinite(t.majAxArcmin) || (t.majAxArcmin ?? 0) <= 0) return null;
		const e = t.majAxArcmin / 2 * h4, n = t.distPc * Math.tan(e);
		if (!Number.isFinite(n) || n <= 0) return null;
		const r = Nt(n), o = Math.min(r, f4), s = u4(t.hubbleType), i = A4[t.catalogId] ?? s.kind, c = Number.isFinite(t.minAxArcmin) && (t.minAxArcmin ?? 0) > 0, a = t.majAxArcmin;
		return {
			discRadiusSu: o,
			discRadiusPc: n,
			morphScale: [
				1,
				c ? Math.min(1, Math.max(.15, t.minAxArcmin / a)) : .7,
				m4(i)
			],
			positionAngleRad: Number.isFinite(t.positionAngleDeg) ? t.positionAngleDeg * l4 : 0,
			kind: i,
			armTightness: s.tightness
		};
	}
	function y4(t) {
		return t.type === "nebula" || t.type === "planetary_nebula" ? a4(t.distPc, t.majAxArcmin) : t.type === "galaxy" ? E4(t)?.discRadiusSu ?? 0 : 0;
	}
	function p4(t, e) {
		const { stars: n, exoplanetRows: r, deepSkyObjects: o, ephemerisByBodyId: s } = t, { jd: i, viewpointScenePosition: c, viewForward: a, halfAngleRad: u, nearbyScanMaxLy: l, activeSystem: h } = e, d = C3(i, s), _ = l / N1, M = Ze(c), m = r && r.length > 0 ? s4(n) : /* @__PURE__ */ new Map(), x = r != null ? W3(i, r, m, {
			viewerPc: M,
			maxDistancePc: _,
			padPc: an(F1(i))
		}) : [], g = t4(r), E = zo({
			viewpointScenePosition: c,
			viewForward: a,
			halfAngleRad: u,
			solarCandidates: d,
			exoplanets: x,
			stars: r4(n, _, Math.hypot(M.x, M.y, M.z)),
			deepSkyObjects: o,
			maxCount: 10,
			maxDistancePc: _,
			selection: "priority",
			dtYears: F1(i),
			activeSystem: h,
			exoCountByStarId: g
		});
		let w = null;
		const N = (R) => {
			if (w == null) {
				w = /* @__PURE__ */ new Map();
				for (const T of o) w.set(T.catalogId, T);
			}
			const P = w.get(R);
			return P != null ? y4(P) : 0;
		}, p = (R, P) => {
			if (R === "hor") {
				const T = b1[P]?.radiusKm;
				return T != null && T > 0 ? T * C0 : 0;
			}
			return R === "dso" ? N(P) : 0;
		};
		return E.map((R) => ({
			entityId: R.entityId,
			rawId: R.rawId,
			source: R.source,
			name: R.name,
			bodyType: R.bodyType,
			exoCount: R.exoCount,
			scenePosition: {
				x: R.scenePosition.x,
				y: R.scenePosition.y,
				z: R.scenePosition.z
			},
			sceneRadiusSu: p(R.source, R.rawId)
		}));
	}
	let Ie = null;
	g1({
		loadCatalogs(t) {
			Ie = t;
		},
		computeNearbyScan(t) {
			const { seq: e, ...n } = t;
			try {
				return Ie == null ? {
					seq: e,
					markers: []
				} : {
					seq: e,
					markers: p4(Ie, n)
				};
			} catch (r) {
				const o = r instanceof Error ? r.message : String(r);
				throw Object.assign(new Error(o), { cause: r });
			}
		}
	});
})();
