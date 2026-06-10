(function() {
	var i2 = Object.defineProperty, We = (t, e) => {
		let n = {};
		for (var o in t) i2(n, o, {
			get: t[o],
			enumerable: !0
		});
		return e || i2(n, Symbol.toStringTag, { value: "Module" }), n;
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
	}, m1 = [
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
		f.CERES,
		f.ERIS,
		f.HAUMEA,
		f.MAKEMAKE,
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
	const Ze = Math.PI / 180;
	180 / Math.PI;
	const lt = 86400, tn = 365.25, m0 = 299792.458, ht = m0 * tn * lt, C = 149597870.7, dt = 648e3 / Math.PI, nn = dt * C / ht, on = 23.4392911, rn = 1e3, sn = m0, an = m0 ** Math.sqrt(Math.E), cn = m0 ** 2, un = m0 ** Math.E, ln = [
		1,
		rn,
		sn,
		an
	], hn = [cn, un], c2 = [...ln, ...hn];
	c2[c2.length - 1];
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
	var R1 = (t, e, n) => Object.defineProperty(t, e, {
		value: n,
		enumerable: !1,
		writable: !0,
		configurable: !0
	}), dn = Symbol.for("bitecs-relation"), fn = Symbol.for("bitecs-pairTarget"), Mn = Symbol.for("bitecs-isPairComponent"), a1 = Symbol.for("bitecs-relationData"), u2 = () => {
		let t = {
			pairsMap: /* @__PURE__ */ new Map(),
			initStore: void 0,
			exclusiveRelation: !1,
			autoRemoveSubject: !1,
			onTargetRemoved: void 0
		}, e = (n) => {
			if (n === void 0) throw Error("Relation target is undefined");
			let o = n === "*" ? En : n;
			if (!t.pairsMap.has(o)) {
				let r = t.initStore ? t.initStore(n) : {};
				R1(r, dn, e), R1(r, fn, o), R1(r, Mn, !0), t.pairsMap.set(o, r);
			}
			return t.pairsMap.get(o);
		};
		return R1(e, a1, t), e;
	}, An = Symbol.for("bitecs-wildcard");
	function Sn() {
		let t = u2();
		return Object.defineProperty(t, An, {
			value: !0,
			enumerable: !1,
			writable: !1,
			configurable: !1
		}), t;
	}
	function _n() {
		let t = Symbol.for("bitecs-global-wildcard");
		return globalThis[t] || (globalThis[t] = Sn()), globalThis[t];
	}
	var En = _n();
	function pn() {
		return u2();
	}
	function yn() {
		let t = Symbol.for("bitecs-global-isa");
		return globalThis[t] || (globalThis[t] = pn()), globalThis[t];
	}
	yn();
	const Un = 384399 / C, Dn = 421800 / C, vn = 671034 / C, On = 1070400 / C, Pn = 1882700 / C, bn = 9376 / C, zn = 23463 / C, Cn = 185540 / C, Ln = 237948 / C, kn = 294619 / C, Kn = 377396 / C, Bn = 527108 / C, Hn = 1221870 / C, Vn = 3560820 / C, Jn = 129390 / C, Fn = 190900 / C, $n = 266e3 / C, Gn = 436300 / C, Yn = 583520 / C, jn = 354759 / C, Qn = {
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
			features: { rings: !0 },
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
			features: { rings: !0 },
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
			features: { rings: !0 },
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
		[f.CERES]: {
			name: "Ceres",
			type: "dwarf_planet",
			color: "#8c8276",
			radiusKm: 469.7,
			kind: "barren",
			textureResolution: 192,
			massKg: 0x32dec6fd325ad00000,
			semiMajorAxisAu: 2.7691,
			parentBodyId: f.SUN
		},
		[f.ERIS]: {
			name: "Eris",
			type: "dwarf_planet",
			color: "#d8d8d0",
			radiusKm: 1163,
			kind: "barren",
			textureResolution: 192,
			massKg: 16466e18,
			semiMajorAxisAu: 67.78,
			parentBodyId: f.SUN
		},
		[f.HAUMEA]: {
			name: "Haumea",
			type: "dwarf_planet",
			color: "#d6cfc4",
			radiusKm: 780,
			kind: "barren",
			textureResolution: 192,
			massKg: 4006e18,
			semiMajorAxisAu: 43.13,
			parentBodyId: f.SUN
		},
		[f.MAKEMAKE]: {
			name: "Makemake",
			type: "dwarf_planet",
			color: "#b06a4a",
			radiusKm: 715,
			kind: "barren",
			textureResolution: 192,
			massKg: 31e20,
			semiMajorAxisAu: 45.43,
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
			semiMajorAxisAu: Un,
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
			semiMajorAxisAu: Dn,
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
			semiMajorAxisAu: vn,
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
			semiMajorAxisAu: On,
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
			semiMajorAxisAu: Pn,
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
			semiMajorAxisAu: bn,
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
			semiMajorAxisAu: zn,
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
			semiMajorAxisAu: Cn,
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
			semiMajorAxisAu: Ln,
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
			semiMajorAxisAu: kn,
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
			semiMajorAxisAu: Kn,
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
			semiMajorAxisAu: Bn,
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
			semiMajorAxisAu: Hn,
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
			semiMajorAxisAu: Vn,
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
			semiMajorAxisAu: Jn,
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
			semiMajorAxisAu: Fn,
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
			semiMajorAxisAu: $n,
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
			semiMajorAxisAu: Gn,
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
			semiMajorAxisAu: Yn,
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
			semiMajorAxisAu: jn,
			parentBodyId: f.NEPTUNE
		}
	};
	function qn(t) {
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
	Object.fromEntries(Object.entries(Qn).map(([t, e]) => [t, qn(e)]));
	new TextEncoder();
	new TextDecoder();
	new TextEncoder();
	new TextDecoder("utf-8");
	const d2 = Symbol("Comlink.proxy"), Xn = Symbol("Comlink.endpoint"), Wn = Symbol("Comlink.releaseProxy"), Mt = Symbol("Comlink.finalizer"), x1 = Symbol("Comlink.thrown"), f2 = (t) => typeof t == "object" && t !== null || typeof t == "function", M2 = new Map([["proxy", {
		canHandle: (t) => f2(t) && t[d2],
		serialize(t) {
			const { port1: e, port2: n } = new MessageChannel();
			return At(t, e), [n, [n]];
		},
		deserialize(t) {
			return t.start(), e3(t);
		}
	}], ["throw", {
		canHandle: (t) => f2(t) && x1 in t,
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
	function Zn(t, e) {
		for (const n of t) if (e === n || n === "*" || n instanceof RegExp && n.test(e)) return !0;
		return !1;
	}
	function At(t, e = globalThis, n = ["*"]) {
		e.addEventListener("message", function o(r) {
			if (!r || !r.data) return;
			if (!Zn(n, r.origin)) {
				console.warn(`Invalid origin '${r.origin}' for comlink proxy`);
				return;
			}
			const { id: s, type: a, path: i } = Object.assign({ path: [] }, r.data), c = (r.data.argumentList || []).map(U0);
			let u;
			try {
				const l = i.slice(0, -1).reduce((M, y) => M[y], t), h = i.reduce((M, y) => M[y], t);
				switch (a) {
					case "GET":
						u = h;
						break;
					case "SET":
						l[i.slice(-1)[0]] = U0(r.data.value), u = !0;
						break;
					case "APPLY":
						u = h.apply(l, c);
						break;
					case "CONSTRUCT":
						u = a3(new h(...c));
						break;
					case "ENDPOINT":
						{
							const { port1: M, port2: y } = new MessageChannel();
							At(t, y), u = s3(M, [M]);
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
					[x1]: 0
				};
			}
			Promise.resolve(u).catch((l) => ({
				value: l,
				[x1]: 0
			})).then((l) => {
				const [h, M] = U1(l);
				e.postMessage(Object.assign(Object.assign({}, h), { id: s }), M), a === "RELEASE" && (e.removeEventListener("message", o), A2(e), Mt in t && typeof t[Mt] == "function" && t[Mt]());
			}).catch((l) => {
				const [h, M] = U1({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[x1]: 0
				});
				e.postMessage(Object.assign(Object.assign({}, h), { id: s }), M);
			});
		}), e.start && e.start();
	}
	function t3(t) {
		return t.constructor.name === "MessagePort";
	}
	function A2(t) {
		t3(t) && t.close();
	}
	function e3(t, e) {
		const n = /* @__PURE__ */ new Map();
		return t.addEventListener("message", function(r) {
			const { data: s } = r;
			if (!s || !s.id) return;
			const a = n.get(s.id);
			if (a) try {
				a(s);
			} finally {
				n.delete(s.id);
			}
		}), St(t, n, [], e);
	}
	function w1(t) {
		if (t) throw new Error("Proxy has been released and is not useable");
	}
	function S2(t) {
		return C0(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			A2(t);
		});
	}
	const T1 = /* @__PURE__ */ new WeakMap(), N1 = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const e = (T1.get(t) || 0) - 1;
		T1.set(t, e), e === 0 && S2(t);
	});
	function n3(t, e) {
		const n = (T1.get(e) || 0) + 1;
		T1.set(e, n), N1 && N1.register(t, e, t);
	}
	function o3(t) {
		N1 && N1.unregister(t);
	}
	function St(t, e, n = [], o = function() {}) {
		let r = !1;
		const s = new Proxy(o, {
			get(a, i) {
				if (w1(r), i === Wn) return () => {
					o3(s), S2(t), e.clear(), r = !0;
				};
				if (i === "then") {
					if (n.length === 0) return { then: () => s };
					const c = C0(t, e, {
						type: "GET",
						path: n.map((u) => u.toString())
					}).then(U0);
					return c.then.bind(c);
				}
				return St(t, e, [...n, i]);
			},
			set(a, i, c) {
				w1(r);
				const [u, l] = U1(c);
				return C0(t, e, {
					type: "SET",
					path: [...n, i].map((h) => h.toString()),
					value: u
				}, l).then(U0);
			},
			apply(a, i, c) {
				w1(r);
				const u = n[n.length - 1];
				if (u === Xn) return C0(t, e, { type: "ENDPOINT" }).then(U0);
				if (u === "bind") return St(t, e, n.slice(0, -1));
				const [l, h] = _2(c);
				return C0(t, e, {
					type: "APPLY",
					path: n.map((M) => M.toString()),
					argumentList: l
				}, h).then(U0);
			},
			construct(a, i) {
				w1(r);
				const [c, u] = _2(i);
				return C0(t, e, {
					type: "CONSTRUCT",
					path: n.map((l) => l.toString()),
					argumentList: c
				}, u).then(U0);
			}
		});
		return n3(s, t), s;
	}
	function r3(t) {
		return Array.prototype.concat.apply([], t);
	}
	function _2(t) {
		const e = t.map(U1);
		return [e.map((n) => n[0]), r3(e.map((n) => n[1]))];
	}
	const E2 = /* @__PURE__ */ new WeakMap();
	function s3(t, e) {
		return E2.set(t, e), t;
	}
	function a3(t) {
		return Object.assign(t, { [d2]: !0 });
	}
	function U1(t) {
		for (const [e, n] of M2) if (n.canHandle(t)) {
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
	function U0(t) {
		switch (t.type) {
			case "HANDLER": return M2.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function C0(t, e, n, o) {
		return new Promise((r) => {
			const s = i3();
			e.set(s, r), t.start && t.start(), t.postMessage(Object.assign({ id: s }, n), o);
		});
	}
	function i3() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	var i1 = We({
		AU_PER_LY: () => p2,
		AngleBetween: () => b1,
		AngleFromSun: () => t1,
		Apsis: () => _1,
		ApsisKind: () => w0,
		AstroTime: () => I0,
		Atmosphere: () => ee,
		AtmosphereInfo: () => te,
		AxisInfo: () => Xt,
		BackdatePosition: () => Q2,
		BaryState: () => r4,
		Body: () => d,
		CALLISTO_RADIUS_KM: () => M3,
		C_AUDAY: () => D1,
		CalcMoonCount: () => O2,
		CombineRotation: () => T0,
		Constellation: () => L4,
		ConstellationInfo: () => me,
		CorrectLightTravel: () => j2,
		DEG2RAD: () => _,
		DefineStar: () => O3,
		DeltaT_EspenakMeeus: () => gt,
		DeltaT_JplHorizons: () => b3,
		EUROPA_RADIUS_KM: () => d3,
		EclipseEvent: () => De,
		EclipseKind: () => Z,
		Ecliptic: () => l1,
		EclipticCoordinates: () => B2,
		EclipticGeoMoon: () => J1,
		EclipticLongitude: () => z0,
		Elongation: () => ae,
		ElongationEvent: () => se,
		Equator: () => u1,
		EquatorFromVector: () => Jt,
		EquatorialCoordinates: () => H1,
		GANYMEDE_RADIUS_KM: () => f3,
		GeoEmbState: () => Ut,
		GeoMoon: () => i0,
		GeoMoonState: () => h1,
		GeoVector: () => n0,
		GlobalSolarEclipseInfo: () => Te,
		GravitySimulator: () => n6,
		HOUR2RAD: () => _t,
		HelioDistance: () => P0,
		HelioState: () => Q1,
		HelioVector: () => c0,
		Horizon: () => V1,
		HorizonFromVector: () => w4,
		HorizontalCoordinates: () => K2,
		HourAngle: () => _4,
		HourAngleEvent: () => oe,
		IO_RADIUS_KM: () => h3,
		IdentityMatrix: () => g4,
		Illumination: () => q1,
		IlluminationInfo: () => X2,
		InverseRefraction: () => he,
		InverseRotation: () => n1,
		JUPITER_EQUATORIAL_RADIUS_KM: () => c3,
		JUPITER_MEAN_RADIUS_KM: () => l3,
		JUPITER_POLAR_RADIUS_KM: () => u3,
		JupiterMoons: () => n4,
		JupiterMoonsInfo: () => Y2,
		KM_PER_AU: () => P,
		LagrangePoint: () => e6,
		LagrangePointFast: () => Ve,
		Libration: () => K3,
		LibrationInfo: () => P2,
		LocalSolarEclipseInfo: () => ve,
		LunarEclipseInfo: () => Re,
		MakeRotation: () => F3,
		MakeTime: () => m,
		MassProduct: () => It,
		MoonPhase: () => Ht,
		MoonQuarter: () => W2,
		NextGlobalSolarEclipse: () => G4,
		NextLocalSolarEclipse: () => Q4,
		NextLunarApsis: () => m4,
		NextLunarEclipse: () => $4,
		NextMoonNode: () => W4,
		NextMoonQuarter: () => u4,
		NextPlanetApsis: () => I4,
		NextTransit: () => X4,
		NodeEventInfo: () => Ke,
		NodeEventKind: () => _0,
		Observer: () => Tt,
		ObserverGravity: () => j3,
		ObserverState: () => G3,
		ObserverVector: () => $3,
		PairLongitude: () => Bt,
		Pivot: () => x4,
		PlanetOrbitalPeriod: () => P3,
		RAD2DEG: () => k,
		RAD2HOUR: () => Et,
		Refraction: () => E1,
		RotateState: () => W1,
		RotateVector: () => p1,
		RotationAxis: () => t6,
		RotationMatrix: () => J,
		Rotation_ECL_EQD: () => Se,
		Rotation_ECL_EQJ: () => N4,
		Rotation_ECL_HOR: () => _e,
		Rotation_ECT_EQD: () => Ee,
		Rotation_ECT_EQJ: () => D4,
		Rotation_EQD_ECL: () => Ae,
		Rotation_EQD_ECT: () => pe,
		Rotation_EQD_EQJ: () => tt,
		Rotation_EQD_HOR: () => $t,
		Rotation_EQJ_ECL: () => de,
		Rotation_EQJ_ECT: () => U4,
		Rotation_EQJ_EQD: () => Z1,
		Rotation_EQJ_GAL: () => P4,
		Rotation_EQJ_HOR: () => v4,
		Rotation_GAL_EQJ: () => b4,
		Rotation_HOR_ECL: () => O4,
		Rotation_HOR_EQD: () => fe,
		Rotation_HOR_EQJ: () => Me,
		Search: () => F,
		SearchAltitude: () => f4,
		SearchGlobalSolarEclipse: () => Ue,
		SearchHourAngle: () => S4,
		SearchLocalSolarEclipse: () => ze,
		SearchLunarApsis: () => ie,
		SearchLunarEclipse: () => we,
		SearchMaxElongation: () => p4,
		SearchMoonNode: () => He,
		SearchMoonPhase: () => S1,
		SearchMoonQuarter: () => Z2,
		SearchPeakMagnitude: () => y4,
		SearchPlanetApsis: () => ue,
		SearchRelativeLongitude: () => e1,
		SearchRiseSet: () => d4,
		SearchSunLongitude: () => q2,
		SearchTransit: () => ke,
		SeasonInfo: () => re,
		Seasons: () => E4,
		SetDeltaTFunction: () => z3,
		SiderealTime: () => C2,
		SphereFromVector: () => Ft,
		Spherical: () => G0,
		StateVector: () => H,
		SunPosition: () => V2,
		TransitInfo: () => Ce,
		Vector: () => U,
		VectorFromHorizon: () => T4,
		VectorFromSphere: () => X1,
		VectorObserver: () => Y3,
		e_tilt: () => g0
	});
	const D1 = 173.1446326846693, P = 149597870.69098932, p2 = 63241.07708807546, _ = .017453292519943295, _t = .26179938779914946, k = 57.29577951308232, Et = 3.819718634205488, c3 = 71492, u3 = 66854, l3 = 69911, h3 = 1821.6, d3 = 1560.8, f3 = 2631.2, M3 = 2410.3, y2 = 365.24217, m2 = /* @__PURE__ */ new Date("2000-01-01T12:00:00Z"), e0 = 2 * Math.PI, R0 = 3600 * (180 / Math.PI), L0 = 484813681109536e-20, R2 = 10800 * 60, A3 = 2 * R2, S3 = 7292115e-11, _3 = R2 / Math.PI, E3 = -.17 - 5 * Math.log10(_3), v1 = 29.530588, O1 = 24 * 3600, p3 = O1 * 1e3, I2 = .9972695717592592, pt = 695700, g2 = pt / P, s0 = .996647180302104, k0 = s0 * s0, M0 = 6378.1366, y3 = M0 / P, m3 = M0 * s0, R3 = 6371, I3 = 6459, g3 = 1738.1 / P, X = 1737.4, x2 = 1736, x3 = x2 / P, w3 = 34 / 60, T3 = 81.30056, c1 = .0002959122082855911, yt = 4912547451450812e-26, mt = 7243452486162703e-25, w2 = 8887692390113509e-25, Rt = 9549535105779258e-26, K0 = 2.825345909524226e-7, B0 = 8.459715185680659e-8, H0 = 1.292024916781969e-8, V0 = 1.524358900784276e-8, N3 = 218869976542597e-26, U3 = w2 / T3;
	function It(t) {
		switch (t) {
			case d.Sun: return c1;
			case d.Mercury: return yt;
			case d.Venus: return mt;
			case d.Earth: return w2;
			case d.Moon: return U3;
			case d.EMB: return 8997011346712498e-25;
			case d.Mars: return Rt;
			case d.Jupiter: return K0;
			case d.Saturn: return B0;
			case d.Uranus: return H0;
			case d.Neptune: return V0;
			case d.Pluto: return N3;
			default: throw `Do not know mass product for body: ${t}`;
		}
	}
	function P1(t) {
		if (t !== !0 && t !== !1) throw console.trace(), `Value is not boolean: ${t}`;
		return t;
	}
	function T(t) {
		if (!Number.isFinite(t)) throw console.trace(), `Value is not a finite number: ${t}`;
		return t;
	}
	function J0(t) {
		return t - Math.floor(t);
	}
	function b1(t, e) {
		const n = t.x * t.x + t.y * t.y + t.z * t.z;
		if (Math.abs(n) < 1e-8) throw "AngleBetween: first vector is too short.";
		const o = e.x * e.x + e.y * e.y + e.z * e.z;
		if (Math.abs(o) < 1e-8) throw "AngleBetween: second vector is too short.";
		const r = (t.x * e.x + t.y * e.y + t.z * e.z) / Math.sqrt(n * o);
		return r <= -1 ? 180 : r >= 1 ? 0 : k * Math.acos(r);
	}
	var d;
	(function(t) {
		t.Sun = "Sun", t.Moon = "Moon", t.Mercury = "Mercury", t.Venus = "Venus", t.Earth = "Earth", t.Mars = "Mars", t.Jupiter = "Jupiter", t.Saturn = "Saturn", t.Uranus = "Uranus", t.Neptune = "Neptune", t.Pluto = "Pluto", t.SSB = "SSB", t.EMB = "EMB", t.Star1 = "Star1", t.Star2 = "Star2", t.Star3 = "Star3", t.Star4 = "Star4", t.Star5 = "Star5", t.Star6 = "Star6", t.Star7 = "Star7", t.Star8 = "Star8";
	})(d || (d = {}));
	const D3 = [
		d.Star1,
		d.Star2,
		d.Star3,
		d.Star4,
		d.Star5,
		d.Star6,
		d.Star7,
		d.Star8
	], v3 = [
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
	function T2(t) {
		const e = D3.indexOf(t);
		return e >= 0 ? v3[e] : null;
	}
	function z1(t) {
		const e = T2(t);
		return e && e.dist > 0 ? e : null;
	}
	function O3(t, e, n, o) {
		const r = T2(t);
		if (!r) throw `Invalid star body: ${t}`;
		if (T(e), T(n), T(o), e < 0 || e >= 24) throw `Invalid right ascension for star: ${e}`;
		if (n < -90 || n > 90) throw `Invalid declination for star: ${n}`;
		if (o < 1) throw `Invalid star distance: ${o}`;
		r.ra = e, r.dec = n, r.dist = o * p2;
	}
	var z;
	(function(t) {
		t[t.From2000 = 0] = "From2000", t[t.Into2000 = 1] = "Into2000";
	})(z || (z = {}));
	const a0 = {
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
	function P3(t) {
		if (t in a0) return a0[t].OrbitalPeriod;
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
	function gt(t) {
		var e, n, o, r, s, a, i;
		const c = 2e3 + (t - 14) / y2;
		return c < -500 ? (e = (c - 1820) / 100, -20 + 32 * e * e) : c < 500 ? (e = c / 100, n = e * e, o = e * n, r = n * n, s = n * o, a = o * o, 10583.6 - 1014.41 * e + 33.78311 * n - 5.952053 * o - .1798452 * r + .022174192 * s + .0090316521 * a) : c < 1600 ? (e = (c - 1e3) / 100, n = e * e, o = e * n, r = n * n, s = n * o, a = o * o, 1574.2 - 556.01 * e + 71.23472 * n + .319781 * o - .8503463 * r - .005050998 * s + .0083572073 * a) : c < 1700 ? (e = c - 1600, n = e * e, o = e * n, 120 - .9808 * e - .01532 * n + o / 7129) : c < 1800 ? (e = c - 1700, n = e * e, o = e * n, r = n * n, 8.83 + .1603 * e - .0059285 * n + 13336e-8 * o - r / 1174e3) : c < 1860 ? (e = c - 1800, n = e * e, o = e * n, r = n * n, s = n * o, a = o * o, i = o * r, 13.72 - .332447 * e + .0068612 * n + .0041116 * o - 37436e-8 * r + 121272e-10 * s - 1.699e-7 * a + 875e-12 * i) : c < 1900 ? (e = c - 1860, n = e * e, o = e * n, r = n * n, s = n * o, 7.62 + .5737 * e - .251754 * n + .01680668 * o - .0004473624 * r + s / 233174) : c < 1920 ? (e = c - 1900, n = e * e, o = e * n, r = n * n, -2.79 + 1.494119 * e - .0598939 * n + .0061966 * o - 197e-6 * r) : c < 1941 ? (e = c - 1920, n = e * e, o = e * n, 21.2 + .84493 * e - .0761 * n + .0020936 * o) : c < 1961 ? (e = c - 1950, n = e * e, o = e * n, 29.07 + .407 * e - n / 233 + o / 2547) : c < 1986 ? (e = c - 1975, n = e * e, o = e * n, 45.45 + 1.067 * e - n / 260 - o / 718) : c < 2005 ? (e = c - 2e3, n = e * e, o = e * n, r = n * n, s = n * o, 63.86 + .3345 * e - .060374 * n + .0017275 * o + 651814e-9 * r + 2373599e-11 * s) : c < 2050 ? (e = c - 2e3, 62.92 + .32217 * e + .005589 * e * e) : c < 2150 ? (e = (c - 1820) / 100, -20 + 32 * e * e - .5628 * (2150 - c)) : (e = (c - 1820) / 100, -20 + 32 * e * e);
	}
	function b3(t) {
		return gt(Math.min(t, 17 * y2));
	}
	let N2 = gt;
	function z3(t) {
		N2 = t;
	}
	function U2(t) {
		return t + N2(t) / 86400;
	}
	var I0 = class ut {
		constructor(e) {
			if (e instanceof ut) {
				this.date = e.date, this.ut = e.ut, this.tt = e.tt;
				return;
			}
			const n = 1e3 * 3600 * 24;
			if (e instanceof Date && Number.isFinite(e.getTime())) {
				this.date = e, this.ut = (e.getTime() - m2.getTime()) / n, this.tt = U2(this.ut);
				return;
			}
			if (Number.isFinite(e)) {
				this.date = new Date(m2.getTime() + e * n), this.ut = e, this.tt = U2(this.ut);
				return;
			}
			throw "Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date.";
		}
		static FromTerrestrialTime(e) {
			let n = new ut(e);
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
			return new ut(this.ut + e);
		}
	};
	function C3(t, e, n) {
		return new I0(t.ut + n * (e.ut - t.ut));
	}
	function m(t) {
		return t instanceof I0 ? t : new I0(t);
	}
	function L3(t) {
		function e(M) {
			return M % A3 * L0;
		}
		const n = t.tt / 36525, o = e(1287104.79305 + n * 129596581.0481), r = e(335779.526232 + n * 1739527262.8478), s = e(1072260.70369 + n * 1602961601.209), a = e(450160.398036 - n * 6962890.5431);
		let i = Math.sin(a), c = Math.cos(a), u = (-172064161 - 174666 * n) * i + 33386 * c, l = (92052331 + 9086 * n) * c + 15377 * i, h = 2 * (r - s + a);
		return i = Math.sin(h), c = Math.cos(h), u += (-13170906 - 1675 * n) * i - 13696 * c, l += (5730336 - 3015 * n) * c - 4587 * i, h = 2 * (r + a), i = Math.sin(h), c = Math.cos(h), u += (-2276413 - 234 * n) * i + 2796 * c, l += (978459 - 485 * n) * c + 1374 * i, h = 2 * a, i = Math.sin(h), c = Math.cos(h), u += (2074554 + 207 * n) * i - 698 * c, l += (-897492 + 470 * n) * c - 291 * i, i = Math.sin(o), c = Math.cos(o), u += (1475877 - 3633 * n) * i + 11817 * c, l += (73871 - 184 * n) * c - 1924 * i, {
			dpsi: -135e-6 + u * 1e-7,
			deps: 388e-6 + l * 1e-7
		};
	}
	function D2(t) {
		var e = t.tt / 36525;
		return (((((-4.34e-8 * e - 576e-9) * e + .0020034) * e - 1831e-7) * e - 46.836769) * e + 84381.406) / 3600;
	}
	var C1;
	function g0(t) {
		if (!C1 || Math.abs(C1.tt - t.tt) > 1e-6) {
			const e = L3(t), n = D2(t), o = n + e.deps / 3600;
			C1 = {
				tt: t.tt,
				dpsi: e.dpsi,
				deps: e.deps,
				ee: e.dpsi * Math.cos(n * _) / 15,
				mobl: n,
				tobl: o
			};
		}
		return C1;
	}
	function v2(t, e) {
		const n = t * _, o = Math.cos(n), r = Math.sin(n);
		return [
			e[0],
			e[1] * o - e[2] * r,
			e[1] * r + e[2] * o
		];
	}
	function k3(t, e) {
		return v2(D2(t), e);
	}
	let O2 = 0;
	function x0(t) {
		++O2;
		const e = t.tt / 36525;
		function n(D, b) {
			const B = [];
			let V;
			for (V = 0; V <= b - D; ++V) B.push(0);
			return {
				min: D,
				array: B
			};
		}
		function o(D, b, B, V) {
			const G = [];
			for (let N0 = 0; N0 <= b - D; ++N0) G.push(n(B, V));
			return {
				min: D,
				array: G
			};
		}
		function r(D, b, B) {
			const V = D.array[b - D.min];
			return V.array[B - V.min];
		}
		function s(D, b, B, V) {
			const G = D.array[b - D.min];
			G.array[B - G.min] = V;
		}
		let a, i, c, u, l, h, M, y, A, E, I, R, p, g, w, x, N, v, L, K, Q, $, q, u0 = o(-6, 6, 1, 4), r0 = o(-6, 6, 1, 4);
		function E0(D, b) {
			return r(u0, D, b);
		}
		function l0(D, b) {
			return r(r0, D, b);
		}
		function h0(D, b, B) {
			return s(u0, D, b, B);
		}
		function r1(D, b, B) {
			return s(r0, D, b, B);
		}
		function it(D, b, B, V, G) {
			G(D * B - b * V, b * B + D * V);
		}
		function O(D) {
			return Math.sin(e0 * D);
		}
		M = e * e, A = 0, q = 0, I = 0, R = 3422.7;
		var d0 = O(.19833 + .05611 * e), e2 = O(.27869 + .04508 * e), n2 = O(.16827 - .36903 * e), o2 = O(.34734 - 5.37261 * e), r2 = O(.10498 - 5.37899 * e), ct = O(.42681 - .41855 * e), S6 = O(.14943 - 5.37511 * e);
		for (v = .84 * d0 + .31 * e2 + 14.27 * n2 + 7.26 * o2 + .28 * r2 + .24 * ct, L = 2.94 * d0 + .31 * e2 + 14.27 * n2 + 9.34 * o2 + 1.12 * r2 + .83 * ct, K = -6.4 * d0 - 1.89 * ct, Q = .21 * d0 + .31 * e2 + 14.27 * n2 - 88.7 * o2 - 15.3 * r2 + .24 * ct - 1.86 * S6, $ = v - K, y = -3332e-9 * O(.59734 - 5.37261 * e) - 539e-9 * O(.35498 - 5.37899 * e) - 64e-9 * O(.39943 - 5.37511 * e), p = e0 * J0(.60643382 + 1336.85522467 * e - 313e-8 * M) + v / R0, g = e0 * J0(.37489701 + 1325.55240982 * e + 2565e-8 * M) + L / R0, w = e0 * J0(.99312619 + 99.99735956 * e - 44e-8 * M) + K / R0, x = e0 * J0(.25909118 + 1342.2278298 * e - 892e-8 * M) + Q / R0, N = e0 * J0(.82736186 + 1236.85308708 * e - 397e-8 * M) + $ / R0, l = 1; l <= 4; ++l) {
			switch (l) {
				case 1:
					c = g, i = 4, u = 1.000002208;
					break;
				case 2:
					c = w, i = 3, u = .997504612 - .002495388 * e;
					break;
				case 3:
					c = x, i = 4, u = 1.000002708 + 139.978 * y;
					break;
				case 4:
					c = N, i = 6, u = 1;
					break;
				default: throw `Internal error: I = ${l}`;
			}
			for (h0(0, l, 1), h0(1, l, Math.cos(c) * u), r1(0, l, 0), r1(1, l, Math.sin(c) * u), h = 2; h <= i; ++h) it(E0(h - 1, l), l0(h - 1, l), E0(1, l), l0(1, l), (D, b) => (h0(h, l, D), r1(h, l, b)));
			for (h = 1; h <= i; ++h) h0(-h, l, E0(h, l)), r1(-h, l, -l0(h, l));
		}
		function qe(D, b, B, V) {
			for (var G = {
				x: 1,
				y: 0
			}, N0 = [
				0,
				D,
				b,
				B,
				V
			], p0 = 1; p0 <= 4; ++p0) N0[p0] !== 0 && it(G.x, G.y, E0(N0[p0], p0), l0(N0[p0], p0), (s2, s1) => (G.x = s2, G.y = s1));
			return G;
		}
		function S(D, b, B, V, G, N0, p0, s2) {
			var s1 = qe(G, N0, p0, s2);
			A += D * s1.y, q += b * s1.y, I += B * s1.x, R += V * s1.x;
		}
		S(13.902, 14.06, -.001, .2607, 0, 0, 0, 4), S(.403, -4.01, .394, .0023, 0, 0, 0, 3), S(2369.912, 2373.36, .601, 28.2333, 0, 0, 0, 2), S(-125.154, -112.79, -.725, -.9781, 0, 0, 0, 1), S(1.979, 6.98, -.445, .0433, 1, 0, 0, 4), S(191.953, 192.72, .029, 3.0861, 1, 0, 0, 2), S(-8.466, -13.51, .455, -.1093, 1, 0, 0, 1), S(22639.5, 22609.07, .079, 186.5398, 1, 0, 0, 0), S(18.609, 3.59, -.094, .0118, 1, 0, 0, -1), S(-4586.465, -4578.13, -.077, 34.3117, 1, 0, 0, -2), S(3.215, 5.44, .192, -.0386, 1, 0, 0, -3), S(-38.428, -38.64, .001, .6008, 1, 0, 0, -4), S(-.393, -1.43, -.092, .0086, 1, 0, 0, -6), S(-.289, -1.59, .123, -.0053, 0, 1, 0, 4), S(-24.42, -25.1, .04, -.3, 0, 1, 0, 2), S(18.023, 17.93, .007, .1494, 0, 1, 0, 1), S(-668.146, -126.98, -1.302, -.3997, 0, 1, 0, 0), S(.56, .32, -.001, -.0037, 0, 1, 0, -1), S(-165.145, -165.06, .054, 1.9178, 0, 1, 0, -2), S(-1.877, -6.46, -.416, .0339, 0, 1, 0, -4), S(.213, 1.02, -.074, .0054, 2, 0, 0, 4), S(14.387, 14.78, -.017, .2833, 2, 0, 0, 2), S(-.586, -1.2, .054, -.01, 2, 0, 0, 1), S(769.016, 767.96, .107, 10.1657, 2, 0, 0, 0), S(1.75, 2.01, -.018, .0155, 2, 0, 0, -1), S(-211.656, -152.53, 5.679, -.3039, 2, 0, 0, -2), S(1.225, .91, -.03, -.0088, 2, 0, 0, -3), S(-30.773, -34.07, -.308, .3722, 2, 0, 0, -4), S(-.57, -1.4, -.074, .0109, 2, 0, 0, -6), S(-2.921, -11.75, .787, -.0484, 1, 1, 0, 2), S(1.267, 1.52, -.022, .0164, 1, 1, 0, 1), S(-109.673, -115.18, .461, -.949, 1, 1, 0, 0), S(-205.962, -182.36, 2.056, 1.4437, 1, 1, 0, -2), S(.233, .36, .012, -.0025, 1, 1, 0, -3), S(-4.391, -9.66, -.471, .0673, 1, 1, 0, -4), S(.283, 1.53, -.111, .006, 1, -1, 0, 4), S(14.577, 31.7, -1.54, .2302, 1, -1, 0, 2), S(147.687, 138.76, .679, 1.1528, 1, -1, 0, 0), S(-1.089, .55, .021, 0, 1, -1, 0, -1), S(28.475, 23.59, -.443, -.2257, 1, -1, 0, -2), S(-.276, -.38, -.006, -.0036, 1, -1, 0, -3), S(.636, 2.27, .146, -.0102, 1, -1, 0, -4), S(-.189, -1.68, .131, -.0028, 0, 2, 0, 2), S(-7.486, -.66, -.037, -.0086, 0, 2, 0, 0), S(-8.096, -16.35, -.74, .0918, 0, 2, 0, -2), S(-5.741, -.04, 0, -9e-4, 0, 0, 2, 2), S(.255, 0, 0, 0, 0, 0, 2, 1), S(-411.608, -.2, 0, -.0124, 0, 0, 2, 0), S(.584, .84, 0, .0071, 0, 0, 2, -1), S(-55.173, -52.14, 0, -.1052, 0, 0, 2, -2), S(.254, .25, 0, -.0017, 0, 0, 2, -3), S(.025, -1.67, 0, .0031, 0, 0, 2, -4), S(1.06, 2.96, -.166, .0243, 3, 0, 0, 2), S(36.124, 50.64, -1.3, .6215, 3, 0, 0, 0), S(-13.193, -16.4, .258, -.1187, 3, 0, 0, -2), S(-1.187, -.74, .042, .0074, 3, 0, 0, -4), S(-.293, -.31, -.002, .0046, 3, 0, 0, -6), S(-.29, -1.45, .116, -.0051, 2, 1, 0, 2), S(-7.649, -10.56, .259, -.1038, 2, 1, 0, 0), S(-8.627, -7.59, .078, -.0192, 2, 1, 0, -2), S(-2.74, -2.54, .022, .0324, 2, 1, 0, -4), S(1.181, 3.32, -.212, .0213, 2, -1, 0, 2), S(9.703, 11.67, -.151, .1268, 2, -1, 0, 0), S(-.352, -.37, .001, -.0028, 2, -1, 0, -1), S(-2.494, -1.17, -.003, -.0017, 2, -1, 0, -2), S(.36, .2, -.012, -.0043, 2, -1, 0, -4), S(-1.167, -1.25, .008, -.0106, 1, 2, 0, 0), S(-7.412, -6.12, .117, .0484, 1, 2, 0, -2), S(-.311, -.65, -.032, .0044, 1, 2, 0, -4), S(.757, 1.82, -.105, .0112, 1, -2, 0, 2), S(2.58, 2.32, .027, .0196, 1, -2, 0, 0), S(2.533, 2.4, -.014, -.0212, 1, -2, 0, -2), S(-.344, -.57, -.025, .0036, 0, 3, 0, -2), S(-.992, -.02, 0, 0, 1, 0, 2, 2), S(-45.099, -.02, 0, -.001, 1, 0, 2, 0), S(-.179, -9.52, 0, -.0833, 1, 0, 2, -2), S(-.301, -.33, 0, .0014, 1, 0, 2, -4), S(-6.382, -3.37, 0, -.0481, 1, 0, -2, 2), S(39.528, 85.13, 0, -.7136, 1, 0, -2, 0), S(9.366, .71, 0, -.0112, 1, 0, -2, -2), S(.202, .02, 0, 0, 1, 0, -2, -4), S(.415, .1, 0, .0013, 0, 1, 2, 0), S(-2.152, -2.26, 0, -.0066, 0, 1, 2, -2), S(-1.44, -1.3, 0, .0014, 0, 1, -2, 2), S(.384, -.04, 0, 0, 0, 1, -2, -2), S(1.938, 3.6, -.145, .0401, 4, 0, 0, 0), S(-.952, -1.58, .052, -.013, 4, 0, 0, -2), S(-.551, -.94, .032, -.0097, 3, 1, 0, 0), S(-.482, -.57, .005, -.0045, 3, 1, 0, -2), S(.681, .96, -.026, .0115, 3, -1, 0, 0), S(-.297, -.27, .002, -9e-4, 2, 2, 0, -2), S(.254, .21, -.003, 0, 2, -2, 0, -2), S(-.25, -.22, .004, .0014, 1, 3, 0, -2), S(-3.996, 0, 0, 4e-4, 2, 0, 2, 0), S(.557, -.75, 0, -.009, 2, 0, 2, -2), S(-.459, -.38, 0, -.0053, 2, 0, -2, 2), S(-1.298, .74, 0, 4e-4, 2, 0, -2, 0), S(.538, 1.14, 0, -.0141, 2, 0, -2, -2), S(.263, .02, 0, 0, 1, 1, 2, 0), S(.426, .07, 0, -6e-4, 1, 1, -2, -2), S(-.304, .03, 0, 3e-4, 1, -1, 2, 0), S(-.372, -.19, 0, -.0027, 1, -1, -2, 2), S(.418, 0, 0, 0, 0, 0, 4, 0), S(-.33, -.04, 0, 0, 3, 0, 2, 0);
		function f0(D, b, B, V, G) {
			return D * qe(b, B, V, G).y;
		}
		E = 0, E += f0(-526.069, 0, 0, 1, -2), E += f0(-3.352, 0, 0, 1, -4), E += f0(44.297, 1, 0, 1, -2), E += f0(-6, 1, 0, 1, -4), E += f0(20.599, -1, 0, 1, 0), E += f0(-30.598, -1, 0, 1, -2), E += f0(-24.649, -2, 0, 1, 0), E += f0(-2, -2, 0, 1, -2), E += f0(-22.571, 0, 1, 1, -2), E += f0(10.985, 0, -1, 1, -2), A += .82 * O(.7736 - 62.5512 * e) + .31 * O(.0466 - 125.1025 * e) + .35 * O(.5785 - 25.1042 * e) + .66 * O(.4591 + 1335.8075 * e) + .64 * O(.313 - 91.568 * e) + 1.14 * O(.148 + 1331.2898 * e) + .21 * O(.5918 + 1056.5859 * e) + .44 * O(.5784 + 1322.8595 * e) + .24 * O(.2275 - 5.7374 * e) + .28 * O(.2965 + 2.6929 * e) + .33 * O(.3132 + 6.3368 * e), a = x + q / R0;
		let _6 = (1.000002708 + 139.978 * y) * (18519.699999999997 + I) * Math.sin(a) - 6.24 * Math.sin(3 * a) + E;
		return {
			geo_eclip_lon: e0 * J0((p + A / R0) / e0),
			geo_eclip_lat: Math.PI / (180 * 3600) * _6,
			distance_au: R0 * y3 / (.999953253 * R)
		};
	}
	var P2 = class {
		constructor(t, e, n, o, r, s) {
			this.elat = t, this.elon = e, this.mlat = n, this.mlon = o, this.dist_km = r, this.diam_deg = s;
		}
	};
	function K3(t) {
		const e = m(t), n = e.tt / 36525, o = n * n, r = o * n, s = o * o, a = x0(e), i = a.geo_eclip_lon, c = a.geo_eclip_lat, u = a.distance_au * P, l = _ * 1.543, h = _ * Z0(93.272095 + 483202.0175233 * n - .0036539 * o - r / 3526e3 + s / 86331e4), M = _ * Z0(125.0445479 - 1934.1362891 * n + .0020754 * o + r / 467441 - s / 60616e3), y = _ * Z0(357.5291092 + 35999.0502909 * n - 1536e-7 * o + r / 2449e4), A = _ * Z0(134.9633964 + 477198.8675055 * n + .0087414 * o + r / 69699 - s / 14712e3), E = _ * Z0(297.8501921 + 445267.1114034 * n - .0018819 * o + r / 545868 - s / 113065e3), I = 1 - .002516 * n - 74e-7 * o, R = i - M, p = Math.atan2(Math.sin(R) * Math.cos(c) * Math.cos(l) - Math.sin(c) * Math.sin(l), Math.cos(R) * Math.cos(c)), g = W0(k * (p - h)), w = Math.asin(-Math.sin(R) * Math.cos(c) * Math.sin(l) - Math.sin(c) * Math.cos(l)), x = _ * (119.75 + 131.849 * n), N = _ * (72.56 + 20.186 * n), v = -.02752 * Math.cos(A) + -.02245 * Math.sin(h) + .00684 * Math.cos(A - 2 * h) + -.00293 * Math.cos(2 * h) + -85e-5 * Math.cos(2 * h - 2 * E) + -54e-5 * Math.cos(A - 2 * E) + -2e-4 * Math.sin(A + h) + -2e-4 * Math.cos(A + 2 * h) + -2e-4 * Math.cos(A - h) + 14e-5 * Math.cos(A + 2 * h - 2 * E), L = -.02816 * Math.sin(A) + .02244 * Math.cos(h) + -.00682 * Math.sin(A - 2 * h) + -.00279 * Math.sin(2 * h) + -83e-5 * Math.sin(2 * h - 2 * E) + 69e-5 * Math.sin(A - 2 * E) + 4e-4 * Math.cos(A + h) + -25e-5 * Math.sin(2 * A) + -23e-5 * Math.sin(A + 2 * h) + 2e-4 * Math.cos(A - h) + 19e-5 * Math.sin(A - h) + 13e-5 * Math.sin(A + 2 * h - 2 * E) + -1e-4 * Math.cos(A - 3 * h), K = -(.0252 * I * Math.sin(y) + .00473 * Math.sin(2 * A - 2 * h) + -.00467 * Math.sin(A) + .00396 * Math.sin(x) + .00276 * Math.sin(2 * A - 2 * E) + .00196 * Math.sin(M) + -.00183 * Math.cos(A - h) + .00115 * Math.sin(A - 2 * E) + -96e-5 * Math.sin(A - E) + 46e-5 * Math.sin(2 * h - 2 * E) + -39e-5 * Math.sin(A - h) + -32e-5 * Math.sin(A - y - E) + 27e-5 * Math.sin(2 * A - y - 2 * E) + 23e-5 * Math.sin(N) + -14e-5 * Math.sin(2 * E) + 14e-5 * Math.cos(2 * A - 2 * h) + -12e-5 * Math.sin(A - 2 * h) + -12e-5 * Math.sin(2 * A) + 11e-5 * Math.sin(2 * A - 2 * y - 2 * E)) + (v * Math.cos(p) + L * Math.sin(p)) * Math.tan(w), Q = L * Math.cos(p) - v * Math.sin(p), $ = 2 * k * Math.atan(X / Math.sqrt(u * u - X * X));
		return new P2(k * w + Q, g + K, k * c, k * i, u, $);
	}
	function b2(t, e) {
		return [
			t.rot[0][0] * e[0] + t.rot[1][0] * e[1] + t.rot[2][0] * e[2],
			t.rot[0][1] * e[0] + t.rot[1][1] * e[1] + t.rot[2][1] * e[2],
			t.rot[0][2] * e[0] + t.rot[1][2] * e[1] + t.rot[2][2] * e[2]
		];
	}
	function F0(t, e, n) {
		return b2(L1(e, n), t);
	}
	function z2(t, e, n) {
		return W1(L1(e, n), t);
	}
	function L1(t, e) {
		const n = t.tt / 36525;
		let o = 84381.406, r = ((((-9.51e-8 * n + 132851e-9) * n - .00114045) * n - 1.0790069) * n + 5038.481507) * n, s = ((((3.337e-7 * n - 467e-9) * n - .00772503) * n + .0512623) * n - .025754) * n + o, a = ((((-56e-9 * n + 170663e-9) * n - .00121197) * n - 2.3814292) * n + 10.556403) * n;
		o *= L0, r *= L0, s *= L0, a *= L0;
		const i = Math.sin(o), c = Math.cos(o), u = Math.sin(-r), l = Math.cos(-r), h = Math.sin(-s), M = Math.cos(-s), y = Math.sin(a), A = Math.cos(a), E = A * l - u * y * M, I = A * u * c + y * M * l * c - i * y * h, R = A * u * i + y * M * l * i + c * y * h, p = -y * l - u * A * M, g = -y * u * c + A * M * l * c - i * A * h, w = -y * u * i + A * M * l * i + c * A * h, x = u * h, N = -h * l * c - i * M, v = -h * l * i + M * c;
		if (e === z.Into2000) return new J([
			[
				E,
				I,
				R
			],
			[
				p,
				g,
				w
			],
			[
				x,
				N,
				v
			]
		]);
		if (e === z.From2000) return new J([
			[
				E,
				p,
				x
			],
			[
				I,
				g,
				N
			],
			[
				R,
				w,
				v
			]
		]);
		throw "Invalid precess direction";
	}
	function B3(t) {
		let e = 360 * ((.779057273264 + .00273781191135448 * t.ut + t.ut % 1) % 1);
		return e < 0 && (e += 360), e;
	}
	let k1;
	function A0(t) {
		if (!k1 || k1.tt !== t.tt) {
			const e = t.tt / 36525;
			let n = 15 * g0(t).ee;
			const o = B3(t);
			let r = ((n + .014506 + ((((-3.68e-8 * e - 29956e-9) * e - 44e-8) * e + 1.3915817) * e + 4612.156534) * e) / 3600 + o) % 360 / 15;
			r < 0 && (r += 24), k1 = {
				tt: t.tt,
				st: r
			};
		}
		return k1.st;
	}
	function C2(t) {
		return A0(m(t));
	}
	function H3(t, e) {
		const n = t[0] * P, o = t[1] * P, r = t[2] * P, s = Math.hypot(n, o);
		let a, i, c;
		if (s < 1e-6) a = 0, i = r > 0 ? 90 : -90, c = Math.abs(r) - m3;
		else {
			for (a = k * Math.atan2(o, n) - 15 * e; a <= -180;) a += 360;
			for (; a > 180;) a -= 360;
			let u = Math.atan2(r, s), l, h, M, y = 0;
			for (;;) {
				if (++y > 10) throw "inverse_terra failed to converge.";
				l = Math.cos(u), h = Math.sin(u);
				const E = (k0 - 1) * M0, I = l * l, R = h * h, p = I + k0 * R;
				M = Math.sqrt(p);
				const g = E * h * l / M - r * l + s * h;
				if (Math.abs(g) < 1e-8) break;
				const w = E * ((I - R) / M - R * I * (k0 - 1) / (E * p)) + r * h + s * l;
				u -= g / w;
			}
			i = k * u;
			const A = M0 / M;
			Math.abs(h) > Math.abs(l) ? c = r / h - k0 * A : c = s / l - A;
		}
		return new Tt(i, a, 1e3 * c);
	}
	function xt(t, e) {
		const n = t.latitude * _, o = Math.sin(n), r = Math.cos(n), s = 1 / Math.hypot(r, s0 * o), a = k0 * s, i = t.height / 1e3, c = M0 * s + i, u = M0 * a + i, l = (15 * e + t.longitude) * _, h = Math.sin(l), M = Math.cos(l);
		return {
			pos: [
				c * r * M / P,
				c * r * h / P,
				u * o / P
			],
			vel: [
				-7292115e-11 * c * r * h * 86400 / P,
				S3 * c * r * M * 86400 / P,
				0
			]
		};
	}
	function $0(t, e, n) {
		return b2(K1(e, n), t);
	}
	function L2(t, e, n) {
		return W1(K1(e, n), t);
	}
	function K1(t, e) {
		const n = g0(t), o = n.mobl * _, r = n.tobl * _, s = n.dpsi * L0, a = Math.cos(o), i = Math.sin(o), c = Math.cos(r), u = Math.sin(r), l = Math.cos(s), h = Math.sin(s), M = l, y = -h * a, A = -h * i, E = h * c, I = l * a * c + i * u, R = l * i * c - a * u, p = h * u, g = l * a * u - i * c, w = l * i * u + a * c;
		if (e === z.From2000) return new J([
			[
				M,
				E,
				p
			],
			[
				y,
				I,
				g
			],
			[
				A,
				R,
				w
			]
		]);
		if (e === z.Into2000) return new J([
			[
				M,
				y,
				A
			],
			[
				E,
				I,
				R
			],
			[
				p,
				g,
				w
			]
		]);
		throw "Invalid precess direction";
	}
	function B1(t, e, n) {
		return n === z.Into2000 ? F0($0(t, e, n), e, n) : $0(F0(t, e, n), e, n);
	}
	function V3(t, e, n) {
		return n === z.Into2000 ? z2(L2(t, e, n), e, n) : L2(z2(t, e, n), e, n);
	}
	function k2(t, e) {
		const n = xt(e, A0(t)).pos;
		return B1(n, t, z.Into2000);
	}
	var U = class {
		constructor(t, e, n, o) {
			this.x = t, this.y = e, this.z = n, this.t = o;
		}
		Length() {
			return Math.hypot(this.x, this.y, this.z);
		}
	}, H = class {
		constructor(t, e, n, o, r, s, a) {
			this.x = t, this.y = e, this.z = n, this.vx = o, this.vy = r, this.vz = s, this.t = a;
		}
	}, G0 = class {
		constructor(t, e, n) {
			this.lat = T(t), this.lon = T(e), this.dist = T(n);
		}
	}, H1 = class {
		constructor(t, e, n, o) {
			this.ra = T(t), this.dec = T(e), this.dist = T(n), this.vec = o;
		}
	};
	function J3(t) {
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
	function F3(t) {
		if (!J3(t)) throw "Argument must be a [3][3] array of numbers";
		return new J(t);
	}
	var K2 = class {
		constructor(t, e, n, o) {
			this.azimuth = T(t), this.altitude = T(e), this.ra = T(n), this.dec = T(o);
		}
	}, B2 = class {
		constructor(t, e, n) {
			this.vec = t, this.elat = T(e), this.elon = T(n);
		}
	};
	function wt(t, e) {
		return new U(t[0], t[1], t[2], e);
	}
	function H2(t, e) {
		const n = wt(t, e), o = n.x * n.x + n.y * n.y, r = Math.sqrt(o + n.z * n.z);
		if (o === 0) {
			if (n.z === 0) throw "Indeterminate sky coordinates";
			return new H1(0, n.z < 0 ? -90 : 90, r, n);
		}
		let s = Et * Math.atan2(n.y, n.x);
		s < 0 && (s += 24);
		const a = k * Math.atan2(t[2], Math.sqrt(o));
		return new H1(s, a, r, n);
	}
	function Y0(t, e) {
		const n = t * _, o = Math.cos(n), r = Math.sin(n);
		return [
			o * e[0] + r * e[1],
			o * e[1] - r * e[0],
			e[2]
		];
	}
	function V1(t, e, n, o, r) {
		let s = m(t);
		j0(e), T(n), T(o);
		const a = Math.sin(e.latitude * _), i = Math.cos(e.latitude * _), c = Math.sin(e.longitude * _), u = Math.cos(e.longitude * _), l = Math.sin(o * _), h = Math.cos(o * _), M = Math.sin(n * _t), y = Math.cos(n * _t);
		let A = [
			i * u,
			i * c,
			a
		], E = [
			-a * u,
			-a * c,
			i
		], I = [
			c,
			-u,
			0
		];
		const R = -15 * A0(s);
		let p = Y0(R, A), g = Y0(R, E), w = Y0(R, I), x = [
			h * y,
			h * M,
			l
		];
		const N = x[0] * p[0] + x[1] * p[1] + x[2] * p[2], v = x[0] * g[0] + x[1] * g[1] + x[2] * g[2], L = x[0] * w[0] + x[1] * w[1] + x[2] * w[2];
		let K = Math.hypot(v, L), Q;
		K > 0 ? (Q = -57.29577951308232 * Math.atan2(L, v), Q < 0 && (Q += 360)) : Q = 0;
		let $ = k * Math.atan2(K, N), q = n, u0 = o;
		if (r) {
			let r0 = $, E0 = E1(r, 90 - $);
			if ($ -= E0, E0 > 0 && $ > 3e-4) {
				const l0 = Math.sin($ * _), h0 = Math.cos($ * _), r1 = Math.sin(r0 * _), it = Math.cos(r0 * _), O = [];
				for (let d0 = 0; d0 < 3; ++d0) O.push((x[d0] - it * p[d0]) / r1 * l0 + p[d0] * h0);
				K = Math.hypot(O[0], O[1]), K > 0 ? (q = Et * Math.atan2(O[1], O[0]), q < 0 && (q += 24)) : q = 0, u0 = k * Math.atan2(O[2], K);
			}
		}
		return new K2(Q, 90 - $, q, u0);
	}
	function j0(t) {
		if (!(t instanceof Tt)) throw `Not an instance of the Observer class: ${t}`;
		if (T(t.latitude), T(t.longitude), T(t.height), t.latitude < -90 || t.latitude > 90) throw `Latitude ${t.latitude} is out of range. Must be -90..+90.`;
		return t;
	}
	var Tt = class {
		constructor(t, e, n) {
			this.latitude = t, this.longitude = e, this.height = n, j0(this);
		}
	};
	function V2(t) {
		const e = m(t).AddDays(-1 / D1), n = q0(Y.Earth, e), [o, r, s] = B1([
			-n.x,
			-n.y,
			-n.z
		], e, z.From2000), a = _ * g0(e).tobl, i = Math.cos(a), c = Math.sin(a);
		return Nt(new U(o, r, s, e), i, c);
	}
	function u1(t, e, n, o, r) {
		j0(n), P1(o), P1(r);
		const s = m(e), a = k2(s, n), i = n0(t, s, r), c = [
			i.x - a[0],
			i.y - a[1],
			i.z - a[2]
		];
		return H2(o ? B1(c, s, z.From2000) : c, s);
	}
	function $3(t, e, n) {
		const o = m(t);
		let r = xt(e, A0(o)).pos;
		return n || (r = B1(r, o, z.Into2000)), wt(r, o);
	}
	function G3(t, e, n) {
		const o = m(t), r = xt(e, A0(o)), s = new H(r.pos[0], r.pos[1], r.pos[2], r.vel[0], r.vel[1], r.vel[2], o);
		return n ? s : V3(s, o, z.Into2000);
	}
	function Y3(t, e) {
		const n = A0(t.t);
		let o = [
			t.x,
			t.y,
			t.z
		];
		return e || (o = F0(o, t.t, z.From2000), o = $0(o, t.t, z.From2000)), H3(o, n);
	}
	function j3(t, e) {
		const n = Math.sin(t * _), o = n * n;
		return 9.7803253359 * (1 + .00193185265241 * o) / Math.sqrt(1 - .00669437999013 * o) * (1 - (3.15704e-7 - 2.10269e-9 * o) * e + 737452e-19 * e * e);
	}
	function Nt(t, e, n) {
		const o = t.x, r = t.y * e + t.z * n, s = -t.y * n + t.z * e, a = Math.hypot(o, r);
		let i = 0;
		a > 0 && (i = k * Math.atan2(r, o), i < 0 && (i += 360));
		let c = k * Math.atan2(s, a);
		return new B2(new U(o, r, s, t.t), c, i);
	}
	function l1(t) {
		const e = g0(t.t), [n, o, r] = $0(F0([
			t.x,
			t.y,
			t.z
		], t.t, z.From2000), t.t, z.From2000), s = new U(n, o, r, t.t), a = e.tobl * _;
		return Nt(s, Math.cos(a), Math.sin(a));
	}
	function i0(t) {
		const e = m(t), n = x0(e), o = n.distance_au * Math.cos(n.geo_eclip_lat), r = F0(k3(e, [
			o * Math.cos(n.geo_eclip_lon),
			o * Math.sin(n.geo_eclip_lon),
			n.distance_au * Math.sin(n.geo_eclip_lat)
		]), e, z.Into2000);
		return new U(r[0], r[1], r[2], e);
	}
	function J1(t) {
		const e = m(t), n = x0(e), o = n.distance_au * Math.cos(n.geo_eclip_lat), r = [
			o * Math.cos(n.geo_eclip_lon),
			o * Math.sin(n.geo_eclip_lon),
			n.distance_au * Math.sin(n.geo_eclip_lat)
		], s = g0(e), a = wt($0(v2(s.mobl, r), e, z.From2000), e), i = s.tobl * _, c = Nt(a, Math.cos(i), Math.sin(i));
		return new G0(c.elat, c.elon, n.distance_au);
	}
	function h1(t) {
		const e = m(t), n = 1e-5, o = e.AddDays(-1e-5), r = e.AddDays(1e-5), s = i0(o), a = i0(r);
		return new H((s.x + a.x) / 2, (s.y + a.y) / 2, (s.z + a.z) / 2, (a.x - s.x) / (2 * n), (a.y - s.y) / (2 * n), (a.z - s.z) / (2 * n), e);
	}
	function Ut(t) {
		const e = m(t), n = h1(e), o = 82.30056;
		return new H(n.x / o, n.y / o, n.z / o, n.vx / o, n.vy / o, n.vz / o, e);
	}
	function D0(t, e, n) {
		let o = 1, r = 0;
		for (let s of t) {
			let a = 0;
			for (let [c, u, l] of s) a += c * Math.cos(u + e * l);
			let i = o * a;
			n && (i %= e0), r += i, o *= e;
		}
		return r;
	}
	function Dt(t, e) {
		let n = 1, o = 0, r = 0, s = 0;
		for (let a of t) {
			let i = 0, c = 0;
			for (let [u, l, h] of a) {
				let M = l + e * h;
				i += u * h * Math.sin(M), s > 0 && (c += u * Math.cos(M));
			}
			r += s * o * c - n * i, o = n, n *= e, ++s;
		}
		return r;
	}
	const Q0 = 365250, vt = 0, Ot = 1, F1 = 2;
	function Pt(t) {
		return new j(t[0] + 4.4036e-7 * t[1] - 1.90919e-7 * t[2], -4.79966e-7 * t[0] + .917482137087 * t[1] - .397776982902 * t[2], .397776982902 * t[1] + .917482137087 * t[2]);
	}
	function J2(t, e, n) {
		const o = n * Math.cos(e), r = Math.cos(t), s = Math.sin(t);
		return [
			o * r,
			o * s,
			n * Math.sin(e)
		];
	}
	function q0(t, e) {
		const n = e.tt / Q0;
		return Pt(J2(D0(t[vt], n, !0), D0(t[Ot], n, !1), D0(t[F1], n, !1))).ToAstroVector(e);
	}
	function d1(t, e) {
		const n = e / Q0, o = D0(t[vt], n, !0), r = D0(t[Ot], n, !1), s = D0(t[F1], n, !1), a = Dt(t[vt], n), i = Dt(t[Ot], n), c = Dt(t[F1], n), u = Math.cos(o), l = Math.sin(o), h = Math.cos(r), M = Math.sin(r), y = +(c * h * u) - s * M * u * i - s * h * l * a, A = +(c * h * l) - s * M * l * i + s * h * u * a, E = +(c * M) + s * h * i, I = J2(o, r, s), R = [
			y / Q0,
			A / Q0,
			E / Q0
		];
		return new O0(e, Pt(I), Pt(R));
	}
	function $1(t, e, n, o) {
		const r = o / (o + c1), s = q0(Y[n], e);
		t.x += r * s.x, t.y += r * s.y, t.z += r * s.z;
	}
	function Q3(t) {
		const e = new U(0, 0, 0, t);
		return $1(e, t, d.Jupiter, K0), $1(e, t, d.Saturn, B0), $1(e, t, d.Uranus, H0), $1(e, t, d.Neptune, V0), e;
	}
	const bt = 51, q3 = 29200, G1 = 146, S0 = 201, v0 = [
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
	var j = class y0 {
		constructor(e, n, o) {
			this.x = e, this.y = n, this.z = o;
		}
		clone() {
			return new y0(this.x, this.y, this.z);
		}
		ToAstroVector(e) {
			return new U(this.x, this.y, this.z, e);
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
	function X3(t) {
		let [e, [n, o, r], [s, a, i]] = t;
		return new O0(e, new j(n, o, r), new j(s, a, i));
	}
	function W(t, e, n, o) {
		const r = o / (o + c1), s = d1(Y[n], e);
		return t.r.incr(s.r.mul(r)), t.v.incr(s.v.mul(r)), s;
	}
	function f1(t, e, n) {
		const o = n.sub(t), r = o.quadrature();
		return o.mul(e / (r * Math.sqrt(r)));
	}
	var M1 = class {
		constructor(t) {
			let e = new O0(t, new j(0, 0, 0), new j(0, 0, 0));
			this.Jupiter = W(e, t, d.Jupiter, K0), this.Saturn = W(e, t, d.Saturn, B0), this.Uranus = W(e, t, d.Uranus, H0), this.Neptune = W(e, t, d.Neptune, V0), this.Jupiter.r.decr(e.r), this.Jupiter.v.decr(e.v), this.Saturn.r.decr(e.r), this.Saturn.v.decr(e.v), this.Uranus.r.decr(e.r), this.Uranus.v.decr(e.v), this.Neptune.r.decr(e.r), this.Neptune.v.decr(e.v), this.Sun = new O0(t, e.r.mul(-1), e.v.mul(-1));
		}
		Acceleration(t) {
			let e = f1(t, c1, this.Sun.r);
			return e.incr(f1(t, K0, this.Jupiter.r)), e.incr(f1(t, B0, this.Saturn.r)), e.incr(f1(t, H0, this.Uranus.r)), e.incr(f1(t, V0, this.Neptune.r)), e;
		}
	}, zt = class Xe {
		constructor(e, n, o, r) {
			this.tt = e, this.r = n, this.v = o, this.a = r;
		}
		clone() {
			return new Xe(this.tt, this.r.clone(), this.v.clone(), this.a.clone());
		}
	}, F2 = class {
		constructor(t, e) {
			this.bary = t, this.grav = e;
		}
	};
	function X0(t, e, n, o) {
		return new j(e.x + t * (n.x + t * o.x / 2), e.y + t * (n.y + t * o.y / 2), e.z + t * (n.z + t * o.z / 2));
	}
	function Ct(t, e, n) {
		return new j(e.x + t * n.x, e.y + t * n.y, e.z + t * n.z);
	}
	function Lt(t, e) {
		const n = t - e.tt, o = new M1(t), r = X0(n, e.r, e.v, e.a), s = o.Acceleration(r).mean(e.a), a = X0(n, e.r, e.v, s);
		return new F2(o, new zt(t, a, e.v.add(s.mul(n)), o.Acceleration(a)));
	}
	const W3 = [];
	function $2(t, e) {
		const n = Math.floor(t);
		return n < 0 ? 0 : n >= e ? e - 1 : n;
	}
	function kt(t) {
		const e = X3(t), n = new M1(e.tt), o = e.r.add(n.Sun.r), r = e.v.add(n.Sun.v), s = n.Acceleration(o);
		return new F2(n, new zt(e.tt, o, r, s));
	}
	function Z3(t, e) {
		const n = v0[0][0];
		if (e < n || e > v0[bt - 1][0]) return null;
		const o = $2((e - n) / q3, bt - 1);
		if (!t[o]) {
			const s = t[o] = [];
			s[0] = kt(v0[o]).grav, s[S0 - 1] = kt(v0[o + 1]).grav;
			let a, i = s[0].tt;
			for (a = 1; a < S0 - 1; ++a) s[a] = Lt(i += G1, s[a - 1]).grav;
			i = s[S0 - 1].tt;
			var r = [];
			for (r[S0 - 1] = s[S0 - 1], a = S0 - 2; a > 0; --a) r[a] = Lt(i -= G1, r[a + 1]).grav;
			for (a = S0 - 2; a > 0; --a) {
				const c = a / (S0 - 1);
				s[a].r = s[a].r.mul(1 - c).add(r[a].r.mul(c)), s[a].v = s[a].v.mul(1 - c).add(r[a].v.mul(c)), s[a].a = s[a].a.mul(1 - c).add(r[a].a.mul(c));
			}
		}
		return t[o];
	}
	function G2(t, e, n) {
		let o = kt(t);
		const r = Math.ceil((e - o.grav.tt) / n);
		for (let s = 0; s < r; ++s) o = Lt(s + 1 === r ? e : o.grav.tt + n, o.grav);
		return o;
	}
	function Kt(t, e) {
		let n, o, r;
		const s = Z3(W3, t.tt);
		if (s) {
			const a = $2((t.tt - s[0].tt) / G1, S0 - 1), i = s[a], c = s[a + 1], u = i.a.mean(c.a), l = X0(t.tt - i.tt, i.r, i.v, u), h = Ct(t.tt - i.tt, i.v, u), M = X0(t.tt - c.tt, c.r, c.v, u), y = Ct(t.tt - c.tt, c.v, u), A = (t.tt - i.tt) / G1;
			n = l.mul(1 - A).add(M.mul(A)), o = h.mul(1 - A).add(y.mul(A));
		} else {
			let a;
			t.tt < v0[0][0] ? a = G2(v0[0], t.tt, -146) : a = G2(v0[bt - 1], t.tt, 146), n = a.grav.r, o = a.grav.v, r = a.bary;
		}
		return e && (r || (r = new M1(t.tt)), n = n.sub(r.Sun.r), o = o.sub(r.Sun.v)), new H(n.x, n.y, n.z, o.x, o.y, o.z, t);
	}
	const t4 = new J([
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
	]), Y1 = [
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
	var Y2 = class {
		constructor(t, e, n, o) {
			this.io = t, this.europa = e, this.ganymede = n, this.callisto = o;
		}
	};
	function e4(t, e, n) {
		const o = n[0], r = n[1], s = n[2], a = n[3], i = n[4], c = n[5], u = Math.sqrt(e / (o * o * o));
		let l, h, M, y = r + s * Math.sin(r) - a * Math.cos(r);
		do
			l = Math.cos(y), h = Math.sin(y), M = (r - y + s * h - a * l) / (1 - s * l - a * h), y += M;
		while (Math.abs(M) >= 1e-12);
		l = Math.cos(y), h = Math.sin(y);
		const A = a * l - s * h, E = -s * l - a * h, I = 1 / (1 + E), R = 1 / (1 + Math.sqrt(1 - s * s - a * a)), p = o * (l - s - R * a * A), g = o * (h - a + R * s * A), w = u * I * o * (-h - R * a * E), x = u * I * o * (+l + R * s * E), N = 2 * Math.sqrt(1 - i * i - c * c), v = 1 - 2 * c * c, L = 1 - 2 * i * i, K = 2 * c * i;
		return new H(p * v + g * K, p * K + g * L, (i * g - p * c) * N, w * v + x * K, w * K + x * L, (i * x - w * c) * N, t);
	}
	function j1(t, e) {
		const n = t.tt + 18262.5, o = [
			0,
			e.al[0] + n * e.al[1],
			0,
			0,
			0,
			0
		];
		for (let [r, s, a] of e.a) o[0] += r * Math.cos(s + n * a);
		for (let [r, s, a] of e.l) o[1] += r * Math.sin(s + n * a);
		o[1] %= e0, o[1] < 0 && (o[1] += e0);
		for (let [r, s, a] of e.z) {
			const i = s + n * a;
			o[2] += r * Math.cos(i), o[3] += r * Math.sin(i);
		}
		for (let [r, s, a] of e.zeta) {
			const i = s + n * a;
			o[4] += r * Math.cos(i), o[5] += r * Math.sin(i);
		}
		return W1(t4, e4(t, e.mu, o));
	}
	function n4(t) {
		const e = new I0(t);
		return new Y2(j1(e, Y1[0]), j1(e, Y1[1]), j1(e, Y1[2]), j1(e, Y1[3]));
	}
	function c0(t, e) {
		var n = m(e);
		if (t in Y) return q0(Y[t], n);
		if (t === d.Pluto) {
			const a = Kt(n, !0);
			return new U(a.x, a.y, a.z, n);
		}
		if (t === d.Sun) return new U(0, 0, 0, n);
		if (t === d.Moon) {
			var o = q0(Y.Earth, n), r = i0(n);
			return new U(o.x + r.x, o.y + r.y, o.z + r.z, n);
		}
		if (t === d.EMB) {
			const a = q0(Y.Earth, n), i = i0(n), c = 82.30056;
			return new U(a.x + i.x / c, a.y + i.y / c, a.z + i.z / c, n);
		}
		if (t === d.SSB) return Q3(n);
		const s = z1(t);
		if (s) return X1(new G0(s.dec, 15 * s.ra, s.dist), n);
		throw `HelioVector: Unknown body "${t}"`;
	}
	function P0(t, e) {
		const n = z1(t);
		if (n) return n.dist;
		const o = m(e);
		return t in Y ? D0(Y[t][F1], o.tt / Q0, !1) : c0(t, o).Length();
	}
	function j2(t, e) {
		let n = e, o = 0;
		for (let r = 0; r < 10; ++r) {
			const s = t(n), a = s.Length() / D1;
			if (a > 1) throw "Object is too distant for light-travel solver.";
			const i = e.AddDays(-a);
			if (o = Math.abs(i.tt - n.tt), o < 1e-9) return s;
			n = i;
		}
		throw `Light-travel time solver did not converge: dt = ${o}`;
	}
	var o4 = class {
		constructor(t, e, n, o) {
			this.observerBody = t, this.targetBody = e, this.aberration = n, this.observerPos = o;
		}
		Position(t) {
			this.aberration && (this.observerPos = c0(this.observerBody, t));
			const e = c0(this.targetBody, t);
			return new U(e.x - this.observerPos.x, e.y - this.observerPos.y, e.z - this.observerPos.z, t);
		}
	};
	function Q2(t, e, n, o) {
		P1(o);
		const r = m(t);
		if (z1(n)) {
			const i = c0(n, r);
			if (o) {
				const u = Q1(e, r), l = new U(i.x - u.x, i.y - u.y, i.z - u.z, r), h = D1 / l.Length();
				return new U(l.x + u.vx / h, l.y + u.vy / h, l.z + u.vz / h, r);
			}
			const c = c0(e, r);
			return new U(i.x - c.x, i.y - c.y, i.z - c.z, r);
		}
		let s;
		o ? s = new U(0, 0, 0, r) : s = c0(e, r);
		const a = new o4(e, n, o, s);
		return j2((i) => a.Position(i), r);
	}
	function n0(t, e, n) {
		P1(n);
		const o = m(e);
		switch (t) {
			case d.Earth: return new U(0, 0, 0, o);
			case d.Moon: return i0(o);
			default:
				const r = Q2(o, d.Earth, t, n);
				return r.t = o, r;
		}
	}
	function b0(t, e) {
		return new H(t.r.x, t.r.y, t.r.z, t.v.x, t.v.y, t.v.z, e);
	}
	function r4(t, e) {
		const n = m(e);
		if (t === d.SSB) return new H(0, 0, 0, 0, 0, 0, n);
		if (t === d.Pluto) return Kt(n, !1);
		const o = new M1(n.tt);
		switch (t) {
			case d.Sun: return b0(o.Sun, n);
			case d.Jupiter: return b0(o.Jupiter, n);
			case d.Saturn: return b0(o.Saturn, n);
			case d.Uranus: return b0(o.Uranus, n);
			case d.Neptune: return b0(o.Neptune, n);
			case d.Moon:
			case d.EMB:
				const r = d1(Y[d.Earth], n.tt), s = t === d.Moon ? h1(n) : Ut(n);
				return new H(s.x + o.Sun.r.x + r.r.x, s.y + o.Sun.r.y + r.r.y, s.z + o.Sun.r.z + r.r.z, s.vx + o.Sun.v.x + r.v.x, s.vy + o.Sun.v.y + r.v.y, s.vz + o.Sun.v.z + r.v.z, n);
		}
		if (t in Y) {
			const r = d1(Y[t], n.tt);
			return new H(o.Sun.r.x + r.r.x, o.Sun.r.y + r.r.y, o.Sun.r.z + r.r.z, o.Sun.v.x + r.v.x, o.Sun.v.y + r.v.y, o.Sun.v.z + r.v.z, n);
		}
		throw `BaryState: Unsupported body "${t}"`;
	}
	function Q1(t, e) {
		const n = m(e);
		switch (t) {
			case d.Sun: return new H(0, 0, 0, 0, 0, 0, n);
			case d.SSB:
				const o = new M1(n.tt);
				return new H(-o.Sun.r.x, -o.Sun.r.y, -o.Sun.r.z, -o.Sun.v.x, -o.Sun.v.y, -o.Sun.v.z, n);
			case d.Mercury:
			case d.Venus:
			case d.Earth:
			case d.Mars:
			case d.Jupiter:
			case d.Saturn:
			case d.Uranus:
			case d.Neptune: return b0(d1(Y[t], n.tt), n);
			case d.Pluto: return Kt(n, !0);
			case d.Moon:
			case d.EMB:
				const r = d1(Y.Earth, n.tt), s = t == d.Moon ? h1(n) : Ut(n);
				return new H(s.x + r.r.x, s.y + r.r.y, s.z + r.r.z, s.vx + r.v.x, s.vy + r.v.y, s.vz + r.v.z, n);
			default:
				if (z1(t)) {
					const a = c0(t, n);
					return new H(a.x, a.y, a.z, 0, 0, 0, n);
				}
				throw `HelioState: Unsupported body "${t}"`;
		}
	}
	function s4(t, e, n, o, r) {
		let s = (r + n) / 2 - o, a = (r - n) / 2, i = o, c;
		if (s == 0) {
			if (a == 0 || (c = -i / a, c < -1 || c > 1)) return null;
		} else {
			let u = a * a - 4 * s * i;
			if (u <= 0) return null;
			let l = Math.sqrt(u), h = (-a + l) / (2 * s), M = (-a - l) / (2 * s);
			if (-1 <= h && h <= 1) {
				if (-1 <= M && M <= 1) return null;
				c = h;
			} else if (-1 <= M && M <= 1) c = M;
			else return null;
		}
		return {
			t: t + c * e,
			df_dt: (2 * s * c + a) / e
		};
	}
	function F(t, e, n, o) {
		const r = T(o && o.dt_tolerance_seconds || 1), s = Math.abs(r / O1);
		let a = o && o.init_f1 || t(e), i = o && o.init_f2 || t(n), c = NaN, u = 0, l = o && o.iter_limit || 20, h = !0;
		for (;;) {
			if (++u > l) throw "Excessive iteration in Search()";
			let M = C3(e, n, .5), y = M.ut - e.ut;
			if (Math.abs(y) < s) return M;
			h ? c = t(M) : h = !0;
			let A = s4(M.ut, n.ut - M.ut, a, c, i);
			if (A) {
				let E = m(A.t), I = t(E);
				if (A.df_dt !== 0) {
					if (Math.abs(I / A.df_dt) < s) return E;
					let R = 1.2 * Math.abs(I / A.df_dt);
					if (R < y / 10) {
						let p = E.AddDays(-R), g = E.AddDays(+R);
						if ((p.ut - e.ut) * (p.ut - n.ut) < 0 && (g.ut - e.ut) * (g.ut - n.ut) < 0) {
							let w = t(p), x = t(g);
							if (w < 0 && x >= 0) {
								a = w, i = x, e = p, n = g, c = I, h = !1;
								continue;
							}
						}
					}
				}
			}
			if (a < 0 && c >= 0) {
				n = M, i = c;
				continue;
			}
			if (c < 0 && i >= 0) {
				e = M, a = c;
				continue;
			}
			return null;
		}
	}
	function W0(t) {
		let e = t;
		for (; e <= -180;) e += 360;
		for (; e > 180;) e -= 360;
		return e;
	}
	function Z0(t) {
		for (; t < 0;) t += 360;
		for (; t >= 360;) t -= 360;
		return t;
	}
	function q2(t, e, n) {
		function o(s) {
			return W0(V2(s).elon - t);
		}
		T(t), T(n);
		let r = m(e);
		return F(o, r, r.AddDays(n), { dt_tolerance_seconds: .01 });
	}
	function Bt(t, e, n) {
		if (t === d.Earth || e === d.Earth) throw "The Earth does not have a longitude as seen from itself.";
		const o = m(n), r = l1(n0(t, o, !1)), s = l1(n0(e, o, !1));
		return Z0(r.elon - s.elon);
	}
	function t1(t, e) {
		if (t == d.Earth) throw "The Earth does not have an angle as seen from itself.";
		const n = m(e);
		return b1(n0(d.Sun, n, !0), n0(t, n, !0));
	}
	function z0(t, e) {
		if (t === d.Sun) throw "Cannot calculate heliocentric longitude of the Sun.";
		return l1(c0(t, e)).elon;
	}
	function a4(t, e, n, o) {
		let r, s = 0, a = 0, i = 0;
		switch (t) {
			case d.Mercury:
				r = -.6, s = 4.98, a = -4.88, i = 3.02;
				break;
			case d.Venus:
				e < 163.6 ? (r = -4.47, s = 1.03, a = .57, i = .13) : (r = .98, s = -1.02);
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
		let u = r + c * (s + c * (a + c * i));
		return u += 5 * Math.log10(n * o), u;
	}
	function i4(t, e, n, o, r) {
		const s = l1(o), a = _ * 28.06, i = _ * (169.51 + 382e-7 * r.tt), c = _ * s.elat, u = _ * s.elon, l = Math.asin(Math.sin(c) * Math.cos(a) - Math.cos(c) * Math.sin(a) * Math.sin(u - i)), h = Math.sin(Math.abs(l));
		let M = -9 + .044 * t;
		return M += h * (-2.6 + 1.2 * h), M += 5 * Math.log10(e * n), {
			mag: M,
			ring_tilt: k * l
		};
	}
	function c4(t, e, n) {
		let o = t * _, r = o * o, s = r * r, a = -12.717 + 1.49 * Math.abs(o) + .0431 * s, i = n / (385000.6 / P);
		return a += 5 * Math.log10(e * i), a;
	}
	var X2 = class {
		constructor(t, e, n, o, r, s, a, i) {
			this.time = t, this.mag = e, this.phase_angle = n, this.helio_dist = o, this.geo_dist = r, this.gc = s, this.hc = a, this.ring_tilt = i, this.phase_fraction = (1 + Math.cos(_ * n)) / 2;
		}
	};
	function q1(t, e) {
		if (t === d.Earth) throw "The illumination of the Earth is not defined.";
		const n = m(e), o = q0(Y.Earth, n);
		let r, s, a, i;
		t === d.Sun ? (a = new U(-o.x, -o.y, -o.z, n), s = new U(0, 0, 0, n), r = 0) : (t === d.Moon ? (a = i0(n), s = new U(o.x + a.x, o.y + a.y, o.z + a.z, n)) : (s = c0(t, e), a = new U(s.x - o.x, s.y - o.y, s.z - o.z, n)), r = b1(a, s));
		let c = a.Length(), u = s.Length(), l;
		if (t === d.Sun) i = E3 + 5 * Math.log10(c);
		else if (t === d.Moon) i = c4(r, u, c);
		else if (t === d.Saturn) {
			const h = i4(r, u, c, a, n);
			i = h.mag, l = h.ring_tilt;
		} else i = a4(t, r, u, c);
		return new X2(n, i, r, u, c, a, s, l);
	}
	function A1(t) {
		if (t === d.Earth) throw "The Earth does not have a synodic period as seen from itself.";
		if (t === d.Moon) return v1;
		let e = a0[t];
		if (!e) throw `Not a valid planet name: ${t}`;
		const n = a0.Earth.OrbitalPeriod, o = e.OrbitalPeriod;
		return Math.abs(n / (n / o - 1));
	}
	function e1(t, e, n) {
		T(e);
		const o = a0[t];
		if (!o) throw `Cannot search relative longitude because body is not a planet: ${t}`;
		if (t === d.Earth) throw "Cannot search relative longitude for the Earth (it is always 0)";
		const r = o.OrbitalPeriod > a0.Earth.OrbitalPeriod ? 1 : -1;
		function s(u) {
			const l = z0(t, u);
			return W0(r * (z0(d.Earth, u) - l) - e);
		}
		let a = A1(t), i = m(n), c = s(i);
		c > 0 && (c -= 360);
		for (let u = 0; u < 100; ++u) {
			let l = -c / 360 * a;
			if (i = i.AddDays(l), Math.abs(l) * O1 < 1) return i;
			let h = c;
			if (c = s(i), Math.abs(h) < 30 && h !== c) {
				let M = h / (h - c);
				M > .5 && M < 2 && (a *= M);
			}
		}
		throw `Relative longitude search failed to converge for ${t} near ${i.toString()} (error_angle = ${c}).`;
	}
	function Ht(t) {
		return Bt(d.Moon, d.Sun, t);
	}
	function S1(t, e, n) {
		function o(l) {
			return W0(Ht(l) - t);
		}
		T(t), T(n);
		const r = 1.5, s = m(e);
		let a = o(s), i, c, u;
		if (n < 0) {
			if (a < 0 && (a += 360), i = -(v1 * a) / 360, u = i + r, u < n) return null;
			c = Math.max(n, i - r);
		} else {
			if (a > 0 && (a -= 360), i = -(v1 * a) / 360, c = i - r, c > n) return null;
			u = Math.min(n, i + r);
		}
		return F(o, s.AddDays(c), s.AddDays(u), { dt_tolerance_seconds: .1 });
	}
	var W2 = class {
		constructor(t, e) {
			this.quarter = t, this.time = e;
		}
	};
	function Z2(t) {
		let e = Ht(t), n = (Math.floor(e / 90) + 1) % 4, o = S1(90 * n, t, 10);
		if (!o) throw "Cannot find moon quarter";
		return new W2(n, o);
	}
	function u4(t) {
		return Z2(new Date(t.time.date.getTime() + 6 * p3));
	}
	var te = class {
		constructor(t, e, n) {
			this.pressure = t, this.temperature = e, this.density = n;
		}
	};
	function ee(t) {
		if (!Number.isFinite(t) || t < -500 || t > 1e5) throw `Invalid elevation: ${t}`;
		let r, s;
		t <= 11e3 ? (r = 288.15 - .0065 * t, s = 101325 * Math.pow(288.15 / r, -5.25577)) : t <= 2e4 ? (r = 216.65, s = 22632 * Math.exp(-.00015768832 * (t - 11e3))) : (r = 216.65 + .001 * (t - 2e4), s = 5474.87 * Math.pow(216.65 / r, 34.16319));
		const a = s / r / (101325 / 288.15);
		return new te(s, r, a);
	}
	function l4(t, e) {
		const n = t.latitude * _, o = Math.sin(n), r = Math.cos(n), s = 1 / Math.hypot(r, o * s0), a = s * (s0 * s0), i = (t.height - e) / 1e3, c = M0 * s + i, u = M0 * a + i, l = 1e3 * Math.hypot(c * r, u * o), h = .175 * Math.pow(1 - .0065 / 283.15 * (t.height - 2 / 3 * e), 3.256);
		return k * -(Math.sqrt(2 * (1 - h) * e / l) / (1 - h));
	}
	function h4(t) {
		switch (t) {
			case d.Sun: return g2;
			case d.Moon: return g3;
			default: return 0;
		}
	}
	function d4(t, e, n, o, r, s = 0) {
		if (!Number.isFinite(s) || s < 0) throw `Invalid value for metersAboveGround: ${s}`;
		const a = h4(t), i = ee(e.height - s);
		return ne(t, e, n, o, r, a, l4(e, s) - w3 * i.density);
	}
	function f4(t, e, n, o, r, s) {
		if (!Number.isFinite(s) || s < -90 || s > 90) throw `Invalid altitude angle: ${s}`;
		return ne(t, e, n, o, r, 0, s);
	}
	var M4 = class {
		constructor(t, e, n, o) {
			this.tx = t, this.ty = e, this.ax = n, this.ay = o;
		}
	};
	function Vt(t, e, n, o, r, s, a) {
		if (s < 0 && a >= 0) return new M4(o, r, s, a);
		if (s >= 0 && a < 0) return null;
		if (t > 17) throw "Excessive recursion in rise/set ascent search.";
		const i = r.ut - o.ut;
		if (i * O1 < 1 || Math.min(Math.abs(s), Math.abs(a)) > n * (i / 2)) return null;
		const c = new I0((o.ut + r.ut) / 2), u = e(c);
		return Vt(1 + t, e, n, o, c, s, u) || Vt(1 + t, e, n, c, r, u, a);
	}
	function A4(t, e) {
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
		return Math.abs((360 / I2 - n) * Math.cos(r)) + Math.abs(o * Math.sin(r));
	}
	function ne(t, e, n, o, r, s, a) {
		if (j0(e), T(r), T(s), T(a), a < -90 || a > 90) throw `Invalid target altitude angle: ${a}`;
		const i = A4(t, e.latitude);
		function c(A) {
			const E = u1(t, A, e, !0, !0);
			return n * (V1(A, e, E.ra, E.dec).altitude + k * Math.asin(s / E.dist) - a);
		}
		const u = m(o);
		let l = u, h = u, M = c(l), y = M;
		for (;;) {
			r < 0 ? (l = h.AddDays(-.42), M = c(l)) : (h = l.AddDays(.42), y = c(h));
			const A = Vt(0, c, i, l, h, M, y);
			if (A) {
				const E = F(c, A.tx, A.ty, {
					dt_tolerance_seconds: .1,
					init_f1: A.ax,
					init_f2: A.ay
				});
				if (E) {
					if (r < 0) {
						if (E.ut < u.ut + r) return null;
					} else if (E.ut > u.ut + r) return null;
					return E;
				}
				throw `Rise/set search failed after finding ascent: t1=${l}, t2=${h}, a1=${M}, a2=${y}`;
			}
			if (r < 0) {
				if (l.ut < u.ut + r) return null;
				h = l, y = M;
			} else {
				if (h.ut > u.ut + r) return null;
				l = h, M = y;
			}
		}
	}
	var oe = class {
		constructor(t, e) {
			this.time = t, this.hor = e;
		}
	};
	function S4(t, e, n, o, r = 1) {
		j0(e);
		let s = m(o), a = 0;
		if (t === d.Earth) throw "Cannot search for hour angle of the Earth.";
		if (T(n), n < 0 || n >= 24) throw `Invalid hour angle ${n}`;
		if (T(r), r === 0) throw "Direction must be positive or negative.";
		for (;;) {
			++a;
			let i = A0(s), c = u1(t, s, e, !0, !0), u = (n + c.ra - e.longitude / 15 - i) % 24;
			if (a === 1 ? r > 0 ? u < 0 && (u += 24) : u > 0 && (u -= 24) : u < -12 ? u += 24 : u > 12 && (u -= 24), Math.abs(u) * 3600 < .1) {
				const h = V1(s, e, c.ra, c.dec, "normal");
				return new oe(s, h);
			}
			let l = u / 24 * I2;
			s = s.AddDays(l);
		}
	}
	function _4(t, e, n) {
		const o = m(e), r = C2(o), s = u1(t, o, n, !0, !0);
		let a = (n.longitude / 15 + r - s.ra) % 24;
		return a < 0 && (a += 24), a;
	}
	var re = class {
		constructor(t, e, n, o) {
			this.mar_equinox = t, this.jun_solstice = e, this.sep_equinox = n, this.dec_solstice = o;
		}
	};
	function E4(t) {
		function e(n, o, r) {
			let s = new Date(Date.UTC(t, o - 1, r)), a = q2(n, s, 20);
			if (!a) throw `Cannot find season change near ${s.toISOString()}`;
			return a;
		}
		if (t instanceof Date && Number.isFinite(t.getTime()) && (t = t.getUTCFullYear()), !Number.isSafeInteger(t)) throw `Cannot calculate seasons because year argument ${t} is neither a Date nor a safe integer.`;
		return new re(e(0, 3, 10), e(90, 6, 10), e(180, 9, 10), e(270, 12, 10));
	}
	var se = class {
		constructor(t, e, n, o) {
			this.time = t, this.visibility = e, this.elongation = n, this.ecliptic_separation = o;
		}
	};
	function ae(t, e) {
		let n = m(e), o = Bt(t, d.Sun, n), r;
		o > 180 ? (r = "morning", o = 360 - o) : r = "evening";
		let s = t1(t, n);
		return new se(n, r, s, o);
	}
	function p4(t, e) {
		function o(i) {
			const c = i.AddDays(-.005), u = i.AddDays(.01 / 2);
			return (t1(t, c) - t1(t, u)) / .01;
		}
		let r = m(e);
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
		let a = 0;
		for (; ++a <= 2;) {
			let i = W0(z0(t, r) - z0(d.Earth, r)), c, u, l;
			i >= -s.s1 && i < +s.s1 ? (l = 0, c = +s.s1, u = +s.s2) : i >= +s.s2 || i < -s.s2 ? (l = 0, c = -s.s2, u = -s.s1) : i >= 0 ? (l = -A1(t) / 4, c = +s.s1, u = +s.s2) : (l = -A1(t) / 4, c = -s.s2, u = -s.s1);
			let h = r.AddDays(l), M = e1(t, c, h), y = e1(t, u, M), A = o(M);
			if (A >= 0) throw `SearchMaxElongation: internal error: m1 = ${A}`;
			let E = o(y);
			if (E <= 0) throw `SearchMaxElongation: internal error: m2 = ${E}`;
			let I = F(o, M, y, {
				init_f1: A,
				init_f2: E,
				dt_tolerance_seconds: 10
			});
			if (!I) throw `SearchMaxElongation: failed search iter ${a} (t1=${M.toString()}, t2=${y.toString()})`;
			if (I.tt >= r.tt) return ae(t, I);
			r = y.AddDays(1);
		}
		throw "SearchMaxElongation: failed to find event after 2 tries.";
	}
	function y4(t, e) {
		if (t !== d.Venus) throw "SearchPeakMagnitude currently works for Venus only.";
		const n = .01;
		function o(a) {
			const i = a.AddDays(-.005), c = a.AddDays(.01 / 2), u = q1(t, i).mag;
			return (q1(t, c).mag - u) / n;
		}
		let r = m(e), s = 0;
		for (; ++s <= 2;) {
			let a = W0(z0(t, r) - z0(d.Earth, r)), i, c, u;
			a >= -10 && a < 10 ? (u = 0, i = 10, c = 30) : a >= 30 || a < -30 ? (u = 0, i = -30, c = -10) : a >= 0 ? (u = -A1(t) / 4, i = 10, c = 30) : (u = -A1(t) / 4, i = -30, c = -10);
			let l = r.AddDays(u), h = e1(t, i, l), M = e1(t, c, h), y = o(h);
			if (y >= 0) throw `SearchPeakMagnitude: internal error: m1 = ${y}`;
			let A = o(M);
			if (A <= 0) throw `SearchPeakMagnitude: internal error: m2 = ${A}`;
			let E = F(o, h, M, {
				init_f1: y,
				init_f2: A,
				dt_tolerance_seconds: 10
			});
			if (!E) throw `SearchPeakMagnitude: failed search iter ${s} (t1=${h.toString()}, t2=${M.toString()})`;
			if (E.tt >= r.tt) return q1(t, E);
			r = M.AddDays(1);
		}
		throw "SearchPeakMagnitude: failed to find event after 2 tries.";
	}
	var w0;
	(function(t) {
		t[t.Pericenter = 0] = "Pericenter", t[t.Apocenter = 1] = "Apocenter";
	})(w0 || (w0 = {}));
	var _1 = class {
		constructor(t, e, n) {
			this.time = t, this.kind = e, this.dist_au = n, this.dist_km = n * P;
		}
	};
	function ie(t) {
		function n(c) {
			let u = c.AddDays(-5e-4), l = c.AddDays(.001 / 2), h = x0(u).distance_au;
			return (x0(l).distance_au - h) / .001;
		}
		function o(c) {
			return -n(c);
		}
		let r = m(t), s = n(r);
		const a = 5;
		for (var i = 0; i * a < 2 * v1; ++i) {
			let c = r.AddDays(a), u = n(c);
			if (s * u <= 0) {
				if (s < 0 || u > 0) {
					let l = F(n, r, c, {
						init_f1: s,
						init_f2: u
					});
					if (!l) throw "SearchLunarApsis INTERNAL ERROR: perigee search failed!";
					let h = x0(l).distance_au;
					return new _1(l, 0, h);
				}
				if (s > 0 || u < 0) {
					let l = F(o, r, c, {
						init_f1: -s,
						init_f2: -u
					});
					if (!l) throw "SearchLunarApsis INTERNAL ERROR: apogee search failed!";
					let h = x0(l).distance_au;
					return new _1(l, 1, h);
				}
				throw "SearchLunarApsis INTERNAL ERROR: cannot classify apsis event!";
			}
			r = c, s = u;
		}
		throw "SearchLunarApsis INTERNAL ERROR: could not find apsis within 2 synodic months of start date.";
	}
	function m4(t) {
		let e = ie(t.time.AddDays(11));
		if (e.kind + t.kind !== 1) throw `NextLunarApsis INTERNAL ERROR: did not find alternating apogee/perigee: prev=${t.kind} @ ${t.time.toString()}, next=${e.kind} @ ${e.time.toString()}`;
		return e;
	}
	function ce(t, e, n, o) {
		const r = e === w0.Apocenter ? 1 : -1, s = 10;
		for (;;) {
			const a = o / (s - 1);
			if (a < 1 / 1440) {
				const u = n.AddDays(a / 2);
				return new _1(u, e, P0(t, u));
			}
			let i = -1, c = 0;
			for (let u = 0; u < s; ++u) {
				const l = r * P0(t, n.AddDays(u * a));
				(u == 0 || l > c) && (i = u, c = l);
			}
			n = n.AddDays((i - 1) * a), o = 2 * a;
		}
	}
	function R4(t, e) {
		const o = e.AddDays(a0[t].OrbitalPeriod * -.08333333333333333), r = e.AddDays(a0[t].OrbitalPeriod * (270 / 360));
		let s = o, a = o, i = -1, c = -1;
		const u = (r.ut - o.ut) / 99;
		for (let M = 0; M < 100; ++M) {
			const y = o.AddDays(M * u), A = P0(t, y);
			M === 0 ? c = i = A : (A > c && (c = A, a = y), A < i && (i = A, s = y));
		}
		const l = ce(t, 0, s.AddDays(-2 * u), 4 * u), h = ce(t, 1, a.AddDays(-2 * u), 4 * u);
		if (l.time.tt >= e.tt) return h.time.tt >= e.tt && h.time.tt < l.time.tt ? h : l;
		if (h.time.tt >= e.tt) return h;
		throw "Internal error: failed to find Neptune apsis.";
	}
	function ue(t, e) {
		if (e = m(e), t === d.Neptune || t === d.Pluto) return R4(t, e);
		function n(c) {
			let l = c.AddDays(-5e-4), h = c.AddDays(.001 / 2), M = P0(t, l);
			return (P0(t, h) - M) / .001;
		}
		function o(c) {
			return -n(c);
		}
		const r = a0[t].OrbitalPeriod, s = r / 6;
		let a = e, i = n(a);
		for (let c = 0; c * s < 2 * r; ++c) {
			const u = a.AddDays(s), l = n(u);
			if (i * l <= 0) {
				let h, M;
				if (i < 0 || l > 0) h = n, M = w0.Pericenter;
				else if (i > 0 || l < 0) h = o, M = w0.Apocenter;
				else throw "Internal error with slopes in SearchPlanetApsis";
				const y = F(h, a, u);
				if (!y) throw "Failed to find slope transition in planetary apsis search.";
				const A = P0(t, y);
				return new _1(y, M, A);
			}
			a = u, i = l;
		}
		throw "Internal error: should have found planetary apsis within 2 orbital periods.";
	}
	function I4(t, e) {
		if (e.kind !== w0.Pericenter && e.kind !== w0.Apocenter) throw `Invalid apsis kind: ${e.kind}`;
		const n = .25 * a0[t].OrbitalPeriod, o = ue(t, e.time.AddDays(n));
		if (o.kind + e.kind !== 1) throw `Internal error: previous apsis was ${e.kind}, but found ${o.kind} for next apsis.`;
		return o;
	}
	function n1(t) {
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
	function T0(t, e) {
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
	function g4() {
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
	function x4(t, e, n) {
		if (e !== 0 && e !== 1 && e !== 2) throw `Invalid axis ${e}. Must be [0, 1, 2].`;
		const o = T(n) * _, r = Math.cos(o), s = Math.sin(o), a = (e + 1) % 3, i = (e + 2) % 3, c = e;
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
		return u[a][a] = r * t.rot[a][a] - s * t.rot[a][i], u[a][i] = s * t.rot[a][a] + r * t.rot[a][i], u[a][c] = t.rot[a][c], u[i][a] = r * t.rot[i][a] - s * t.rot[i][i], u[i][i] = s * t.rot[i][a] + r * t.rot[i][i], u[i][c] = t.rot[i][c], u[c][a] = r * t.rot[c][a] - s * t.rot[c][i], u[c][i] = s * t.rot[c][a] + r * t.rot[c][i], u[c][c] = t.rot[c][c], new J(u);
	}
	function X1(t, e) {
		e = m(e);
		const n = t.lat * _, o = t.lon * _, r = t.dist * Math.cos(n);
		return new U(r * Math.cos(o), r * Math.sin(o), t.dist * Math.sin(n), e);
	}
	function Jt(t) {
		const e = Ft(t);
		return new H1(e.lon / 15, e.lat, e.dist, t);
	}
	function Ft(t) {
		const e = t.x * t.x + t.y * t.y, n = Math.sqrt(e + t.z * t.z);
		let o, r;
		if (e === 0) {
			if (t.z === 0) throw "Zero-length vector not allowed.";
			r = 0, o = t.z < 0 ? -90 : 90;
		} else r = k * Math.atan2(t.y, t.x), r < 0 && (r += 360), o = k * Math.atan2(t.z, Math.sqrt(e));
		return new G0(o, r, n);
	}
	function le(t) {
		return t = 360 - t, t >= 360 ? t -= 360 : t < 0 && (t += 360), t;
	}
	function w4(t, e) {
		const n = Ft(t);
		return n.lon = le(n.lon), n.lat += E1(e, n.lat), n;
	}
	function T4(t, e, n) {
		e = m(e);
		const o = le(t.lon);
		return X1(new G0(t.lat + he(n, t.lat), o, t.dist), e);
	}
	function E1(t, e) {
		let n;
		if (T(e), e < -90 || e > 90) return 0;
		if (t === "normal" || t === "jplhor") {
			let o = e;
			o < -1 && (o = -1), n = 1.02 / Math.tan((o + 10.3 / (o + 5.11)) * _) / 60, t === "normal" && e < -1 && (n *= (e + 90) / 89);
		} else if (!t) n = 0;
		else throw `Invalid refraction option: ${t}`;
		return n;
	}
	function he(t, e) {
		if (e < -90 || e > 90) return 0;
		let n = e - E1(t, e);
		for (;;) {
			let o = n + E1(t, n) - e;
			if (Math.abs(o) < 1e-14) return n - e;
			n -= o;
		}
	}
	function p1(t, e) {
		return new U(t.rot[0][0] * e.x + t.rot[1][0] * e.y + t.rot[2][0] * e.z, t.rot[0][1] * e.x + t.rot[1][1] * e.y + t.rot[2][1] * e.z, t.rot[0][2] * e.x + t.rot[1][2] * e.y + t.rot[2][2] * e.z, e.t);
	}
	function W1(t, e) {
		return new H(t.rot[0][0] * e.x + t.rot[1][0] * e.y + t.rot[2][0] * e.z, t.rot[0][1] * e.x + t.rot[1][1] * e.y + t.rot[2][1] * e.z, t.rot[0][2] * e.x + t.rot[1][2] * e.y + t.rot[2][2] * e.z, t.rot[0][0] * e.vx + t.rot[1][0] * e.vy + t.rot[2][0] * e.vz, t.rot[0][1] * e.vx + t.rot[1][1] * e.vy + t.rot[2][1] * e.vz, t.rot[0][2] * e.vx + t.rot[1][2] * e.vy + t.rot[2][2] * e.vz, e.t);
	}
	function de() {
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
	function N4() {
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
	function Z1(t) {
		return t = m(t), T0(L1(t, z.From2000), K1(t, z.From2000));
	}
	function U4(t) {
		const e = m(t);
		return T0(Z1(e), pe(e));
	}
	function D4(t) {
		const e = m(t);
		return T0(Ee(e), tt(e));
	}
	function tt(t) {
		return t = m(t), T0(K1(t, z.Into2000), L1(t, z.Into2000));
	}
	function $t(t, e) {
		t = m(t);
		const n = Math.sin(e.latitude * _), o = Math.cos(e.latitude * _), r = Math.sin(e.longitude * _), s = Math.cos(e.longitude * _), a = [
			o * s,
			o * r,
			n
		], i = [
			-n * s,
			-n * r,
			o
		], c = [
			r,
			-s,
			0
		], u = -15 * A0(t), l = Y0(u, a), h = Y0(u, i), M = Y0(u, c);
		return new J([
			[
				h[0],
				M[0],
				l[0]
			],
			[
				h[1],
				M[1],
				l[1]
			],
			[
				h[2],
				M[2],
				l[2]
			]
		]);
	}
	function fe(t, e) {
		return n1($t(t, e));
	}
	function Me(t, e) {
		return t = m(t), T0(fe(t, e), tt(t));
	}
	function v4(t, e) {
		return n1(Me(t, e));
	}
	function Ae(t) {
		return T0(tt(t), de());
	}
	function Se(t) {
		return n1(Ae(t));
	}
	function _e(t, e) {
		return t = m(t), T0(Se(t), $t(t, e));
	}
	function O4(t, e) {
		return n1(_e(t, e));
	}
	function P4() {
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
	function b4() {
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
	function Ee(t) {
		const e = g0(m(t)).tobl * _, n = Math.cos(e), o = Math.sin(e);
		return new J([
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
	function pe(t) {
		const e = g0(m(t)).tobl * _, n = Math.cos(e), o = Math.sin(e);
		return new J([
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
	const z4 = [
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
	], C4 = [
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
	let Gt, ye;
	var me = class {
		constructor(t, e, n, o) {
			this.symbol = t, this.name = e, this.ra1875 = n, this.dec1875 = o;
		}
	};
	function L4(t, e) {
		if (T(t), T(e), e < -90 || e > 90) throw "Invalid declination angle. Must be -90..+90.";
		t %= 24, t < 0 && (t += 24), Gt || (Gt = Z1(new I0(-45655.74141261017)), ye = new I0(0));
		const n = X1(new G0(e, 15 * t, 1), ye), o = Jt(p1(Gt, n)), r = 10 / 240, s = r / 15;
		for (let a of C4) {
			const i = a[3] * r, c = a[1] * s, u = a[2] * s;
			if (i <= o.dec && c <= o.ra && o.ra < u) {
				const l = z4[a[0]];
				return new me(l[0], l[1], o.ra, o.dec);
			}
		}
		throw "Unable to find constellation for given coordinates.";
	}
	var Z;
	(function(t) {
		t.Penumbral = "penumbral", t.Partial = "partial", t.Annular = "annular", t.Total = "total";
	})(Z || (Z = {}));
	var Re = class {
		constructor(t, e, n, o, r, s) {
			this.kind = t, this.obscuration = e, this.peak = n, this.sd_penum = o, this.sd_partial = r, this.sd_total = s;
		}
	}, k4 = class {
		constructor(t, e, n, o, r, s, a) {
			this.time = t, this.u = e, this.r = n, this.k = o, this.p = r, this.target = s, this.dir = a;
		}
	};
	function y1(t, e, n, o) {
		const r = (o.x * n.x + o.y * n.y + o.z * n.z) / (o.x * o.x + o.y * o.y + o.z * o.z), s = r * o.x - n.x, a = r * o.y - n.y, i = r * o.z - n.z;
		return new k4(e, r, P * Math.hypot(s, a, i), 695700 - (1 + r) * (pt - t), -695700 + (1 + r) * (pt + t), n, o);
	}
	function et(t) {
		const e = n0(d.Sun, t, !0), n = new U(-e.x, -e.y, -e.z, e.t);
		return y1(I3, t, i0(t), n);
	}
	function Ie(t) {
		const e = n0(d.Sun, t, !0), n = i0(t), o = new U(-n.x, -n.y, -n.z, n.t);
		return n.x -= e.x, n.y -= e.y, n.z -= e.z, y1(X, t, o, n);
	}
	function Yt(t, e) {
		const n = k2(t, e), o = n0(d.Sun, t, !0), r = i0(t), s = new U(n[0] - r.x, n[1] - r.y, n[2] - r.z, t);
		return r.x -= o.x, r.y -= o.y, r.z -= o.z, y1(X, t, s, r);
	}
	function nt(t, e, n) {
		const o = n0(t, n, !0), r = n0(d.Sun, n, !0), s = new U(o.x - r.x, o.y - r.y, o.z - r.z, n);
		return r.x = -o.x, r.y = -o.y, r.z = -o.z, y1(e, n, r, s);
	}
	function jt(t, e) {
		const n = 11574074074074073e-21, o = e.AddDays(-11574074074074073e-21), r = e.AddDays(11574074074074073e-21), s = t(o);
		return (t(r).r - s.r) / n;
	}
	function K4(t, e, n) {
		const o = 11574074074074073e-21, r = nt(t, e, n.AddDays(-11574074074074073e-21));
		return (nt(t, e, n.AddDays(11574074074074073e-21)).r - r.r) / o;
	}
	function B4(t) {
		const e = F((n) => jt(et, n), t.AddDays(-.03), t.AddDays(.03));
		if (!e) throw "Failed to find peak Earth shadow time.";
		return et(e);
	}
	function H4(t) {
		const e = F((n) => jt(Ie, n), t.AddDays(-.03), t.AddDays(.03));
		if (!e) throw "Failed to find peak Moon shadow time.";
		return Ie(e);
	}
	function V4(t, e, n) {
		const o = F((r) => K4(t, e, r), n.AddDays(-1), n.AddDays(1));
		if (!o) throw "Failed to find peak planet shadow time.";
		return nt(t, e, o);
	}
	function J4(t, e) {
		const n = t.AddDays(-.2), o = t.AddDays(.2);
		function r(a) {
			return Yt(a, e);
		}
		const s = F((a) => jt(r, a), n, o);
		if (!s) throw `PeakLocalMoonShadow: search failure for search_center_time = ${t}`;
		return Yt(s, e);
	}
	function Qt(t, e, n) {
		const o = n / 1440, r = t.AddDays(-o), s = t.AddDays(+o), a = F((c) => -(et(c).r - e), r, t), i = F((c) => +(et(c).r - e), t, s);
		if (!a || !i) throw "Failed to find shadow semiduration";
		return (i.ut - a.ut) * (1440 / 2);
	}
	function qt(t) {
		return k * x0(t).geo_eclip_lat;
	}
	function ge(t, e, n) {
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
	function xe(t, e) {
		const n = new U(t.x + e.x, t.y + e.y, t.z + e.z, t.t), o = ge(Math.asin(g2 / n.Length()), Math.asin(x3 / e.Length()), b1(e, n) * _);
		return Math.min(.9999, o);
	}
	function we(t) {
		let n = m(t);
		for (let o = 0; o < 12; ++o) {
			const r = S1(180, n, 40);
			if (!r) throw "Cannot find full moon.";
			const s = qt(r);
			if (Math.abs(s) < 1.8) {
				const a = B4(r);
				if (a.r < a.p + X) {
					let i = Z.Penumbral, c = 0, u = 0, l = 0, h = Qt(a.time, a.p + X, 200);
					return a.r < a.k + X && (i = Z.Partial, l = Qt(a.time, a.k + X, h), a.r + X < a.k ? (i = Z.Total, c = 1, u = Qt(a.time, a.k - X, l)) : c = ge(X, a.k, a.r)), new Re(i, c, a.time, h, l, u);
				}
			}
			n = r.AddDays(10);
		}
		throw "Failed to find lunar eclipse within 12 full moons.";
	}
	var Te = class {
		constructor(t, e, n, o, r, s) {
			this.kind = t, this.obscuration = e, this.peak = n, this.distance = o, this.latitude = r, this.longitude = s;
		}
	};
	function Ne(t) {
		return t > .014 ? Z.Total : Z.Annular;
	}
	function F4(t) {
		let e = Z.Partial, n = t.time, o = t.r, r, s;
		const a = Z1(t.time), i = p1(a, t.dir), c = p1(a, t.target);
		i.x *= P, i.y *= P, i.z *= P / s0, c.x *= P, c.y *= P, c.z *= P / s0;
		const u = M0, l = i.x * i.x + i.y * i.y + i.z * i.z, h = -2 * (i.x * c.x + i.y * c.y + i.z * c.z), M = c.x * c.x + c.y * c.y + c.z * c.z - u * u, y = h * h - 4 * l * M;
		let A;
		if (y > 0) {
			const E = (-h - Math.sqrt(y)) / (2 * l), I = E * i.x - c.x, R = E * i.y - c.y, p = (E * i.z - c.z) * s0, g = Math.hypot(I, R) * k0;
			g == 0 ? r = p > 0 ? 90 : -90 : r = k * Math.atan(p / g);
			const w = A0(n);
			s = (k * Math.atan2(R, I) - 15 * w) % 360, s <= -180 ? s += 360 : s > 180 && (s -= 360);
			const x = n1(a);
			let N = new U(I / P, R / P, p / P, t.time);
			N = p1(x, N), N.x += t.target.x, N.y += t.target.y, N.z += t.target.z;
			const v = y1(x2, t.time, N, t.dir);
			if (v.r > 1e-9 || v.r < 0) throw `Unexpected shadow distance from geoid intersection = ${v.r}`;
			e = Ne(v.k), A = e === Z.Total ? 1 : xe(t.dir, N);
		} else A = void 0;
		return new Te(e, A, n, o, r, s);
	}
	function $4(t) {
		return t = m(t), we(t.AddDays(10));
	}
	function Ue(t) {
		t = m(t);
		const e = 1.8;
		let n = t, o;
		for (o = 0; o < 12; ++o) {
			const r = S1(0, n, 40);
			if (!r) throw "Cannot find new moon";
			const s = qt(r);
			if (Math.abs(s) < e) {
				const a = H4(r);
				if (a.r < a.p + R3) return F4(a);
			}
			n = r.AddDays(10);
		}
		throw "Failed to find solar eclipse within 12 full moons.";
	}
	function G4(t) {
		return t = m(t), Ue(t.AddDays(10));
	}
	var De = class {
		constructor(t, e) {
			this.time = t, this.altitude = e;
		}
	}, ve = class {
		constructor(t, e, n, o, r, s, a) {
			this.kind = t, this.obscuration = e, this.partial_begin = n, this.total_begin = o, this.peak = r, this.total_end = s, this.partial_end = a;
		}
	};
	function Oe(t) {
		return t.p - t.r;
	}
	function Pe(t) {
		return Math.abs(t.k) - t.r;
	}
	function Y4(t, e) {
		const n = be(e, t.time);
		let o = t.time.AddDays(-.2), r = t.time.AddDays(.2);
		const s = ot(e, 1, Oe, o, t.time), a = ot(e, -1, Oe, t.time, r);
		let i, c, u;
		t.r < Math.abs(t.k) ? (o = t.time.AddDays(-.01), r = t.time.AddDays(.01), i = ot(e, 1, Pe, o, t.time), c = ot(e, -1, Pe, t.time, r), u = Ne(t.k)) : u = Z.Partial;
		const l = u === Z.Total ? 1 : xe(t.dir, t.target);
		return new ve(u, l, s, i, n, c, a);
	}
	function ot(t, e, n, o, r) {
		function s(i) {
			return e * n(Yt(i, t));
		}
		const a = F(s, o, r);
		if (!a) throw "Local eclipse transition search failed.";
		return be(t, a);
	}
	function be(t, e) {
		return new De(e, j4(e, t));
	}
	function j4(t, e) {
		const n = u1(d.Sun, t, e, !0, !0);
		return V1(t, e, n.ra, n.dec, "normal").altitude;
	}
	function ze(t, e) {
		t = m(t), j0(e);
		const n = 1.8;
		let o = t;
		for (;;) {
			const r = S1(0, o, 40);
			if (!r) throw "Cannot find next new moon";
			const s = qt(r);
			if (Math.abs(s) < n) {
				const a = J4(r, e);
				if (a.r < a.p) {
					const i = Y4(a, e);
					if (i.partial_begin.altitude > 0 || i.partial_end.altitude > 0) return i;
				}
			}
			o = r.AddDays(10);
		}
	}
	function Q4(t, e) {
		return t = m(t), ze(t.AddDays(10), e);
	}
	var Ce = class {
		constructor(t, e, n, o) {
			this.start = t, this.peak = e, this.finish = n, this.separation = o;
		}
	};
	function q4(t, e, n, o) {
		const r = nt(e, n, t);
		return o * (r.r - r.p);
	}
	function Le(t, e, n, o, r) {
		const s = F((a) => q4(a, t, e, r), n, o);
		if (!s) throw "Planet transit boundary search failed";
		return s;
	}
	function ke(t, e) {
		e = m(e);
		const n = .4;
		let o;
		switch (t) {
			case d.Mercury:
				o = 2439.7;
				break;
			case d.Venus:
				o = 6051.8;
				break;
			default: throw `Invalid body: ${t}`;
		}
		let r = e;
		for (;;) {
			const s = e1(t, 0, r);
			if (t1(t, s) < n) {
				const a = V4(t, o, s);
				if (a.r < a.p) {
					const i = a.time.AddDays(-1), c = Le(t, o, i, a.time, -1), u = a.time.AddDays(1), l = Le(t, o, a.time, u, 1), h = 60 * t1(t, a.time);
					return new Ce(c, a.time, l, h);
				}
			}
			r = s.AddDays(10);
		}
	}
	function X4(t, e) {
		return e = m(e), ke(t, e.AddDays(100));
	}
	var _0;
	(function(t) {
		t[t.Invalid = 0] = "Invalid", t[t.Ascending = 1] = "Ascending", t[t.Descending = -1] = "Descending";
	})(_0 || (_0 = {}));
	var Ke = class {
		constructor(t, e) {
			this.kind = t, this.time = e;
		}
	};
	const Be = 10;
	function He(t) {
		let e = m(t), n = J1(e);
		for (;;) {
			const o = e.AddDays(Be), r = J1(o);
			if (n.lat * r.lat <= 0) {
				const s = r.lat > n.lat ? _0.Ascending : _0.Descending, a = F((i) => s * J1(i).lat, e, o);
				if (!a) throw "Could not find moon node.";
				return new Ke(s, a);
			}
			e = o, n = r;
		}
	}
	function W4(t) {
		const e = He(t.time.AddDays(Be));
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
	var Xt = class {
		constructor(t, e, n, o) {
			this.ra = t, this.dec = e, this.spin = n, this.north = o;
		}
	};
	function Z4(t) {
		const e = F0($0([
			0,
			0,
			1
		], t, z.Into2000), t, z.Into2000), n = new U(e[0], e[1], e[2], t), o = Jt(n), r = 190.41375788700253 + 360.9856122880876 * t.ut;
		return new Xt(o.ra, o.dec, r, n);
	}
	function t6(t, e) {
		const n = m(e), o = n.tt, r = o / 36525;
		let s, a, i;
		switch (t) {
			case d.Sun:
				s = 286.13, a = 63.87, i = 84.176 + 14.1844 * o;
				break;
			case d.Mercury:
				s = 281.0103 - .0328 * r, a = 61.4155 - .0049 * r, i = 329.5988 + 6.1385108 * o + .01067257 * Math.sin(_ * (174.7910857 + 4.092335 * o)) - .00112309 * Math.sin(_ * (349.5821714 + 8.18467 * o)) - 1104e-7 * Math.sin(_ * (164.3732571 + 12.277005 * o)) - 2539e-8 * Math.sin(_ * (339.1643429 + 16.36934 * o)) - 571e-8 * Math.sin(_ * (153.9554286 + 20.461675 * o));
				break;
			case d.Venus:
				s = 272.76, a = 67.16, i = 160.2 - 1.4813688 * o;
				break;
			case d.Earth: return Z4(n);
			case d.Moon:
				const M = _ * (125.045 - .0529921 * o), y = _ * (250.089 - .1059842 * o), A = _ * (260.008 + 13.0120009 * o), E = _ * (176.625 + 13.3407154 * o), I = _ * (357.529 + .9856003 * o), R = _ * (311.589 + 26.4057084 * o), p = _ * (134.963 + 13.064993 * o), g = _ * (276.617 + .3287146 * o), w = _ * (34.226 + 1.7484877 * o), x = _ * (15.134 - .1589763 * o), N = _ * (119.743 + .0036096 * o), v = _ * (239.961 + .1643573 * o), L = _ * (25.053 + 12.9590088 * o);
				s = 269.9949 + .0031 * r - 3.8787 * Math.sin(M) - .1204 * Math.sin(y) + .07 * Math.sin(A) - .0172 * Math.sin(E) + .0072 * Math.sin(R) - .0052 * Math.sin(x) + .0043 * Math.sin(L), a = 66.5392 + .013 * r + 1.5419 * Math.cos(M) + .0239 * Math.cos(y) - .0278 * Math.cos(A) + .0068 * Math.cos(E) - .0029 * Math.cos(R) + 9e-4 * Math.cos(p) + 8e-4 * Math.cos(x) - 9e-4 * Math.cos(L), i = 38.3213 + (13.17635815 - 14e-13 * o) * o + 3.561 * Math.sin(M) + .1208 * Math.sin(y) - .0642 * Math.sin(A) + .0158 * Math.sin(E) + .0252 * Math.sin(I) - .0066 * Math.sin(R) - .0047 * Math.sin(p) - .0046 * Math.sin(g) + .0028 * Math.sin(w) + .0052 * Math.sin(x) + .004 * Math.sin(N) + .0019 * Math.sin(v) - .0044 * Math.sin(L);
				break;
			case d.Mars:
				s = 317.269202 - .10927547 * r + 68e-6 * Math.sin(_ * (198.991226 + 19139.4819985 * r)) + 238e-6 * Math.sin(_ * (226.292679 + 38280.8511281 * r)) + 52e-6 * Math.sin(_ * (249.663391 + 57420.7251593 * r)) + 9e-6 * Math.sin(_ * (266.18351 + 76560.636795 * r)) + .419057 * Math.sin(_ * (79.398797 + .5042615 * r)), a = 54.432516 - .05827105 * r + 51e-6 * Math.cos(_ * (122.433576 + 19139.9407476 * r)) + 141e-6 * Math.cos(_ * (43.058401 + 38280.8753272 * r)) + 31e-6 * Math.cos(_ * (57.663379 + 57420.7517205 * r)) + 5e-6 * Math.cos(_ * (79.476401 + 76560.6495004 * r)) + 1.591274 * Math.cos(_ * (166.325722 + .5042615 * r)), i = 176.049863 + 350.891982443297 * o + 145e-6 * Math.sin(_ * (129.071773 + 19140.0328244 * r)) + 157e-6 * Math.sin(_ * (36.352167 + 38281.0473591 * r)) + 4e-5 * Math.sin(_ * (56.668646 + 57420.929536 * r)) + 1e-6 * Math.sin(_ * (67.364003 + 76560.2552215 * r)) + 1e-6 * Math.sin(_ * (104.79268 + 95700.4387578 * r)) + .584542 * Math.sin(_ * (95.391654 + .5042615 * r));
				break;
			case d.Jupiter:
				const K = _ * (99.360714 + 4850.4046 * r), Q = _ * (175.895369 + 1191.9605 * r), $ = _ * (300.323162 + 262.5475 * r), q = _ * (114.012305 + 6070.2476 * r), u0 = _ * (49.511251 + 64.3 * r);
				s = 268.056595 - .006499 * r + 117e-6 * Math.sin(K) + 938e-6 * Math.sin(Q) + .001432 * Math.sin($) + 3e-5 * Math.sin(q) + .00215 * Math.sin(u0), a = 64.495303 + .002413 * r + 5e-5 * Math.cos(K) + 404e-6 * Math.cos(Q) + 617e-6 * Math.cos($) - 13e-6 * Math.cos(q) + 926e-6 * Math.cos(u0), i = 284.95 + 870.536 * o;
				break;
			case d.Saturn:
				s = 40.589 - .036 * r, a = 83.537 - .004 * r, i = 38.9 + 810.7939024 * o;
				break;
			case d.Uranus:
				s = 257.311, a = -15.175, i = 203.81 - 501.1600928 * o;
				break;
			case d.Neptune:
				const r0 = _ * (357.85 + 52.316 * r);
				s = 299.36 + .7 * Math.sin(r0), a = 43.46 - .51 * Math.cos(r0), i = 249.978 + 541.1397757 * o - .48 * Math.sin(r0);
				break;
			case d.Pluto:
				s = 132.993, a = -6.163, i = 302.695 + 56.3625225 * o;
				break;
			default: throw `Invalid body: ${t}`;
		}
		const c = a * _, u = s * _, l = Math.cos(c), h = new U(l * Math.cos(u), l * Math.sin(u), Math.sin(c), n);
		return new Xt(s / 15, a, i, h);
	}
	function e6(t, e, n, o) {
		const r = m(e), s = It(n), a = It(o);
		let i, c;
		return n === d.Earth && o === d.Moon ? (i = new H(0, 0, 0, 0, 0, 0, r), c = h1(r)) : (i = Q1(n, r), c = Q1(o, r)), Ve(t, i, s, c, a);
	}
	function Ve(t, e, n, o, r) {
		if (t < 1 || t > 5) throw `Invalid lagrange point ${t}`;
		if (!Number.isFinite(n) || n <= 0) throw "Major mass must be a positive number.";
		if (!Number.isFinite(r) || r <= 0) throw "Minor mass must be a negative number.";
		let a = o.x - e.x, i = o.y - e.y, c = o.z - e.z;
		const u = a * a + i * i + c * c, l = Math.sqrt(u), h = o.vx - e.vx, M = o.vy - e.vy, y = o.vz - e.vz;
		let A;
		if (t === 4 || t === 5) {
			const E = i * y - c * M, I = c * h - a * y, R = a * M - i * h;
			let p = I * c - R * i, g = R * a - E * c, w = E * i - I * a;
			const x = Math.sqrt(p * p + g * g + w * w);
			p /= x, g /= x, w /= x, a /= l, i /= l, c /= l;
			const N = t == 4 ? .8660254037844386 : -.8660254037844386, v = .5 * a + N * p, L = .5 * i + N * g, K = .5 * c + N * w, Q = .5 * p - N * a, $ = .5 * g - N * i, q = .5 * w - N * c, u0 = l * v, r0 = l * L, E0 = l * K, l0 = h * a + M * i + y * c, h0 = h * p + M * g + y * w;
			A = new H(u0, r0, E0, l0 * v + h0 * Q, l0 * L + h0 * $, l0 * K + h0 * q, e.t);
		} else {
			const E = -l * (r / (n + r)), I = +l * (n / (n + r)), R = (n + r) / (u * l);
			let p, g, w;
			if (t === 1 || t === 2) p = n / (n + r) * Math.cbrt(r / (3 * n)), g = -n, t == 1 ? (p = 1 - p, w = +r) : (p = 1 + p, w = -r);
			else if (t === 3) p = (7 / 12 * r - n) / (r + n), g = +n, w = +r;
			else throw `Invalid Langrage point ${t}. Must be an integer 1..5.`;
			let x = l * p - E, N;
			do {
				const v = x - E, L = x - I;
				N = (R * x + g / (v * v) + w / (L * L)) / (R - 2 * g / (v * v * v) - 2 * w / (L * L * L)), x -= N;
			} while (Math.abs(N / l) > 1e-14);
			p = (x - E) / l, A = new H(p * a, p * i, p * c, p * h, p * M, p * y, e.t);
		}
		return A;
	}
	var n6 = class t0 {
		constructor(e, n, o) {
			const r = m(n);
			this.originBody = e;
			for (let c of o) if (c.t.tt !== r.tt) throw "Inconsistent times in bodyStates";
			const s = [], a = t0.CalcSolarSystem(r);
			this.curr = new Je(r, a, s);
			const i = this.InternalBodyState(e);
			for (let c of o) {
				const u = new j(c.x + i.r.x, c.y + i.r.y, c.z + i.r.z), l = new j(c.vx + i.v.x, c.vy + i.v.y, c.vz + i.v.z), h = j.zero();
				s.push(new zt(r.tt, u, l, h));
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
			const n = m(e), o = n.tt - this.curr.time.tt;
			if (o === 0) this.prev = this.Duplicate();
			else {
				this.Swap(), this.curr.time = n, this.curr.gravitators = t0.CalcSolarSystem(n);
				for (let a = 0; a < this.curr.bodies.length; ++a) {
					const i = this.prev.bodies[a];
					this.curr.bodies[a].r = X0(o, i.r, i.v, i.a);
				}
				this.CalcBodyAccelerations();
				for (let a = 0; a < this.curr.bodies.length; ++a) {
					const i = this.prev.bodies[a], c = this.curr.bodies[a], u = i.a.mean(c.a);
					c.tt = n.tt, c.r = X0(o, i.r, i.v, u), c.v = Ct(o, i.v, u);
				}
				this.CalcBodyAccelerations();
			}
			const r = [], s = this.InternalBodyState(this.originBody);
			for (let a of this.curr.bodies) r.push(new H(a.r.x - s.r.x, a.r.y - s.r.y, a.r.z - s.r.z, a.v.x - s.v.x, a.v.y - s.v.y, a.v.z - s.v.z, n));
			return r;
		}
		Swap() {
			const e = this.curr;
			this.curr = this.prev, this.prev = e;
		}
		SolarSystemBodyState(e) {
			const n = this.InternalBodyState(e), o = this.InternalBodyState(this.originBody);
			return b0(n.sub(o), this.curr.time);
		}
		InternalBodyState(e) {
			if (e === d.SSB) return new O0(this.curr.time.tt, j.zero(), j.zero());
			const n = this.curr.gravitators[e];
			if (n) return n;
			throw `Invalid body: ${e}`;
		}
		static CalcSolarSystem(e) {
			const n = {}, o = new O0(e.tt, j.zero(), j.zero());
			n[d.Mercury] = W(o, e.tt, d.Mercury, yt), n[d.Venus] = W(o, e.tt, d.Venus, mt), n[d.Earth] = W(o, e.tt, d.Earth, 8997011346712498e-25), n[d.Mars] = W(o, e.tt, d.Mars, Rt), n[d.Jupiter] = W(o, e.tt, d.Jupiter, K0), n[d.Saturn] = W(o, e.tt, d.Saturn, B0), n[d.Uranus] = W(o, e.tt, d.Uranus, H0), n[d.Neptune] = W(o, e.tt, d.Neptune, V0);
			for (let r in n) n[r].r.decr(o.r), n[r].v.decr(o.v);
			return n[d.Sun] = new O0(e.tt, o.r.neg(), o.v.neg()), n;
		}
		CalcBodyAccelerations() {
			for (let e of this.curr.bodies) e.a = j.zero(), t0.AddAcceleration(e.a, e.r, this.curr.gravitators[d.Sun].r, c1), t0.AddAcceleration(e.a, e.r, this.curr.gravitators[d.Mercury].r, yt), t0.AddAcceleration(e.a, e.r, this.curr.gravitators[d.Venus].r, mt), t0.AddAcceleration(e.a, e.r, this.curr.gravitators[d.Earth].r, 8997011346712498e-25), t0.AddAcceleration(e.a, e.r, this.curr.gravitators[d.Mars].r, Rt), t0.AddAcceleration(e.a, e.r, this.curr.gravitators[d.Jupiter].r, K0), t0.AddAcceleration(e.a, e.r, this.curr.gravitators[d.Saturn].r, B0), t0.AddAcceleration(e.a, e.r, this.curr.gravitators[d.Uranus].r, H0), t0.AddAcceleration(e.a, e.r, this.curr.gravitators[d.Neptune].r, V0);
		}
		static AddAcceleration(e, n, o, r) {
			const s = o.x - n.x, a = o.y - n.y, i = o.z - n.z, c = s * s + a * a + i * i, u = r / (c * Math.sqrt(c));
			e.x += s * u, e.y += a * u, e.z += i * u;
		}
		Duplicate() {
			const e = {};
			for (let o in this.curr.gravitators) e[o] = this.curr.gravitators[o].clone();
			const n = [];
			for (let o of this.curr.bodies) n.push(o.clone());
			return new Je(this.curr.time, e, n);
		}
	}, Je = class {
		constructor(t, e, n) {
			this.time = t, this.gravitators = e, this.bodies = n;
		}
	};
	function rt(t) {
		return typeof t.Observer == "function" ? t : t.default ?? t;
	}
	const { MakeTime: Z6, SearchRiseSet: t8, Body: e8, Observer: o6 } = rt(i1);
	new o6(40.7128, -74.006, 10);
	const { Body: o0 } = rt(i1);
	f.SUN, o0.Sun, f.MERCURY, o0.Mercury, f.VENUS, o0.Venus, f.EARTH, o0.Earth, f.MARS, o0.Mars, f.JUPITER, o0.Jupiter, f.SATURN, o0.Saturn, f.URANUS, o0.Uranus, f.NEPTUNE, o0.Neptune, f.PLUTO, o0.Pluto, f.MOON, o0.Moon;
	2 * Math.PI;
	const { Rotation_EQD_EQJ: s8, CombineRotation: a8, MakeRotation: i8 } = rt(i1);
	Math.PI / (180 * 3600);
	on * Ze;
	(() => {
		const t = i1;
		return t.default && t.default.Body ? t.default : t;
	})();
	function st(t, e) {
		return t.x = e.x, t.y = e.y, t.z = e.z, t;
	}
	function r6(t, e, n) {
		if (t.length === 0) return null;
		if (t.length === 1) {
			const p = t[0].position;
			return n ? st(n, p) : {
				x: p.x,
				y: p.y,
				z: p.z
			};
		}
		if (e <= t[0].time.jd) {
			const p = t[0].position;
			return n ? st(n, p) : {
				x: p.x,
				y: p.y,
				z: p.z
			};
		}
		if (e >= t[t.length - 1].time.jd) {
			const p = t[t.length - 1].position;
			return n ? st(n, p) : {
				x: p.x,
				y: p.y,
				z: p.z
			};
		}
		let o = 0, r = t.length - 1;
		for (; r - o > 1;) {
			const p = o + r >> 1;
			t[p].time.jd <= e ? o = p : r = p;
		}
		const s = t[o], a = t[r];
		if (a.time.jd === s.time.jd) {
			const p = s.position;
			return n ? st(n, p) : {
				x: p.x,
				y: p.y,
				z: p.z
			};
		}
		const i = a.time.jd - s.time.jd, c = (e - s.time.jd) / i, u = c * c, l = u * c, h = 2 * l - 3 * u + 1, M = l - 2 * u + c, y = -2 * l + 3 * u, A = l - u, E = h * s.position.x + M * i * s.velocity.x + y * a.position.x + A * i * a.velocity.x, I = h * s.position.y + M * i * s.velocity.y + y * a.position.y + A * i * a.velocity.y, R = h * s.position.z + M * i * s.velocity.z + y * a.position.z + A * i * a.velocity.z;
		return n ? (n.x = E, n.y = I, n.z = R, n) : {
			x: E,
			y: I,
			z: R
		};
	}
	const s6 = {
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
	Object.fromEntries(Object.entries(s6).map(([t, e]) => [e.bodyId, t]));
	const { HelioState: d8, MakeTime: f8, JupiterMoons: M8, Body: at } = rt(i1);
	f.IO, f.EUROPA, f.GANYMEDE, f.CALLISTO;
	at.Mars, at.Saturn, at.Uranus, at.Neptune;
	f.CERES, f.ERIS, f.HAUMEA, f.MAKEMAKE;
	const o1 = 1e3, Fe = o1 / C, $e = Fe * ht * nn, a6 = 695700, i6 = 6378.137;
	function Ge(t) {
		return !Number.isFinite(t) || t <= 0 ? 0 : t * Fe;
	}
	Ge(i6);
	Ge(a6);
	100 / dt;
	1.1 * dt;
	function c6(t) {
		return {
			x: t.x * o1,
			y: t.y * o1,
			z: t.z * o1
		};
	}
	25 * $e;
	25 * $e;
	function u6(t, e, n = m1) {
		const o = {};
		for (const r of n) {
			const s = e[r] ?? [], a = s.length ? r6(s, t) : null;
			if (a) {
				const i = c6(a);
				o[r] = [
					i.x,
					i.y,
					i.z
				];
			}
		}
		return o;
	}
	const Ye = 0;
	function Wt() {
		return m1.length * 3;
	}
	function l6() {
		return 1 + Wt() * 2;
	}
	function je(t) {
		return new Int32Array(t.buffer, t.byteOffset, 1);
	}
	function h6(t) {
		return 1 + t * Wt();
	}
	function d6(t) {
		return Atomics.load(je(t), Ye) === 1 ? 1 : 0;
	}
	function Qe(t) {
		return d6(t) === 0 ? 1 : 0;
	}
	function f6(t) {
		const e = h6(Qe(t));
		return t.subarray(e, e + Wt());
	}
	function M6(t) {
		const e = Qe(t);
		Atomics.store(je(t), Ye, e);
	}
	function A6(t, e) {
		const n = f6(t);
		n.fill(NaN);
		const o = m1;
		for (const r of Object.keys(e)) {
			const s = o.indexOf(r);
			if (s < 0) continue;
			const a = e[r];
			if (!a) continue;
			const i = s * 3, [c, u, l] = a;
			n[i] = c, n[i + 1] = u, n[i + 2] = l;
		}
		M6(t);
	}
	let Zt = null, t2 = null;
	At({
		async init(t) {
			const e = new Float32Array(t), n = l6();
			if (e.length !== n) throw new Error(`[solar worker] SAB Float32 length mismatch: expected ${n}, got ${e.length}`);
			t2 = e;
		},
		async loadBatch(t, e) {
			return Zt = e, {
				type: "ready",
				runId: t
			};
		},
		async compute(t, e, n) {
			try {
				if (!Zt) return {
					type: "error",
					runId: t,
					seq: e,
					message: "No ephemeris loaded"
				};
				const o = u6(n, Zt, m1);
				return t2 ? (A6(t2, o), {
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
				return console.error("[solar worker] compute failed:", o), {
					type: "error",
					runId: t,
					seq: e,
					message: o instanceof Error ? o.message : String(o)
				};
			}
		}
	});
})();
