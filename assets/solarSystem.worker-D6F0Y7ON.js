(function() {
	var s2 = Object.defineProperty, le = (t, n) => {
		let e = {};
		for (var o in t) s2(e, o, {
			get: t[o],
			enumerable: !0
		});
		return n || s2(e, Symbol.toStringTag, { value: "Module" }), e;
	};
	const d = {
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
	}, y1 = [
		d.SUN,
		d.MERCURY,
		d.VENUS,
		d.EARTH,
		d.MARS,
		d.JUPITER,
		d.SATURN,
		d.URANUS,
		d.NEPTUNE,
		d.PLUTO,
		d.CERES,
		d.ERIS,
		d.HAUMEA,
		d.MAKEMAKE,
		d.MOON,
		d.IO,
		d.EUROPA,
		d.GANYMEDE,
		d.CALLISTO,
		d.PHOBOS,
		d.DEIMOS,
		d.MIMAS,
		d.ENCELADUS,
		d.TETHYS,
		d.DIONE,
		d.RHEA,
		d.TITAN,
		d.IAPETUS,
		d.MIRANDA,
		d.ARIEL,
		d.UMBRIEL,
		d.TITANIA,
		d.OBERON,
		d.TRITON
	], he = (t) => t;
	2 * Math.PI;
	const fe = Math.PI / 180;
	180 / Math.PI;
	const R1 = 86400, a2 = 365.25, i2 = R1 * 1e3, c2 = 2451545, u2 = 2440587.5, m0 = 299792.458, ut = m0 * a2 * R1, T = 149597870.7, lt = 648e3 / Math.PI, Me = lt * T / ut, Ae = 23.4392911, Se = 1e3, _e = m0, Ee = m0 ** Math.sqrt(Math.E), pe = m0 ** 2, me = m0 ** Math.E, ye = [
		1,
		Se,
		_e,
		Ee
	], l2 = [pe, me];
	new Set(l2);
	const h2 = [...ye, ...l2];
	h2[h2.length - 1];
	const f2 = .999999999;
	function Re(t) {
		const n = Math.min(Math.max(t, 0), f2);
		return 1 / Math.sqrt((1 - n) * (1 + n));
	}
	Re(f2);
	const Ie = (t = 0, n = 0, e = 0) => ({
		x: t,
		y: n,
		z: e
	});
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
	function xe(t) {
		return Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z);
	}
	function ge(t) {
		const n = xe(t);
		return n < 1e-18 ? null : {
			x: t.x / n,
			y: t.y / n,
			z: t.z / n
		};
	}
	function d2(t, n) {
		return {
			x: t.y * n.z - t.z * n.y,
			y: t.z * n.x - t.x * n.z,
			z: t.x * n.y - t.y * n.x
		};
	}
	Object.freeze({
		x: 0,
		y: 0,
		z: 0,
		w: 1
	});
	typeof TextEncoder < "u" && new TextEncoder();
	var I1 = (t, n, e) => Object.defineProperty(t, n, {
		value: e,
		enumerable: !1,
		writable: !0,
		configurable: !0
	}), we = Symbol.for("bitecs-relation"), Te = Symbol.for("bitecs-pairTarget"), Ne = Symbol.for("bitecs-isPairComponent"), De = Symbol.for("bitecs-relationData"), M2 = () => {
		let t = {
			pairsMap: /* @__PURE__ */ new Map(),
			initStore: void 0,
			exclusiveRelation: !1,
			autoRemoveSubject: !1,
			onTargetRemoved: void 0
		}, n = (e) => {
			if (e === void 0) throw Error("Relation target is undefined");
			let o = e === "*" ? Pe : e;
			if (!t.pairsMap.has(o)) {
				let r = t.initStore ? t.initStore(e) : {};
				I1(r, we, n), I1(r, Te, o), I1(r, Ne, !0), t.pairsMap.set(o, r);
			}
			return t.pairsMap.get(o);
		};
		return I1(n, De, t), n;
	}, Oe = Symbol.for("bitecs-wildcard");
	function Ue() {
		let t = M2();
		return Object.defineProperty(t, Oe, {
			value: !0,
			enumerable: !1,
			writable: !1,
			configurable: !1
		}), t;
	}
	function ve() {
		let t = Symbol.for("bitecs-global-wildcard");
		return globalThis[t] || (globalThis[t] = Ue()), globalThis[t];
	}
	var Pe = ve();
	function ze() {
		return M2();
	}
	function Ce() {
		let t = Symbol.for("bitecs-global-isa");
		return globalThis[t] || (globalThis[t] = ze()), globalThis[t];
	}
	Ce();
	const be = 384399 / T, Le = 421800 / T, ke = 671034 / T, Be = 1070400 / T, Ke = 1882700 / T, He = 9376 / T, Je = 23463 / T, Ve = 185540 / T, Fe = 237948 / T, Ge = 294619 / T, $e = 377396 / T, Ye = 527108 / T, je = 1221870 / T, Qe = 3560820 / T, qe = 129390 / T, Xe = 190900 / T, We = 266e3 / T, Ze = 436300 / T, t3 = 583520 / T, n3 = 354759 / T, e3 = {
		[d.SUN]: {
			name: "Sun",
			type: "star",
			color: "#f5e042",
			radiusKm: 696340,
			kind: "star",
			textureResolution: 512,
			massKg: 198847e25
		},
		[d.MERCURY]: {
			name: "Mercury",
			type: "planet",
			color: "#9c8a78",
			radiusKm: 2439.7,
			kind: "barren",
			textureResolution: 192,
			massKg: 33011e19,
			semiMajorAxisAu: .387098,
			parentBodyId: d.SUN
		},
		[d.VENUS]: {
			name: "Venus",
			type: "planet",
			color: "#f0e3a0",
			radiusKm: 6051.8,
			kind: "molten",
			textureResolution: 224,
			massKg: 48675e20,
			semiMajorAxisAu: .723332,
			parentBodyId: d.SUN
		},
		[d.EARTH]: {
			name: "Earth",
			type: "planet",
			color: "#4a90d9",
			radiusKm: 6371,
			kind: "oceanic",
			textureResolution: 224,
			features: { axialSpin: "eop" },
			massKg: 597237e19,
			semiMajorAxisAu: 1.0000001,
			parentBodyId: d.SUN
		},
		[d.MARS]: {
			name: "Mars",
			type: "planet",
			color: "#c1440e",
			radiusKm: 3389.5,
			kind: "desert",
			textureResolution: 192,
			massKg: 64171e19,
			semiMajorAxisAu: 1.523679,
			parentBodyId: d.SUN
		},
		[d.JUPITER]: {
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
			parentBodyId: d.SUN
		},
		[d.SATURN]: {
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
			parentBodyId: d.SUN
		},
		[d.URANUS]: {
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
			parentBodyId: d.SUN
		},
		[d.NEPTUNE]: {
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
			parentBodyId: d.SUN
		},
		[d.PLUTO]: {
			name: "Pluto",
			type: "dwarf_planet",
			color: "#a26847",
			radiusKm: 1188.3,
			kind: "barren",
			textureResolution: 192,
			massKg: 13029e18,
			semiMajorAxisAu: 39.482,
			parentBodyId: d.SUN
		},
		[d.CERES]: {
			name: "Ceres",
			type: "dwarf_planet",
			color: "#8c8276",
			radiusKm: 469.7,
			kind: "barren",
			textureResolution: 192,
			massKg: 0x32dec6fd325ad00000,
			semiMajorAxisAu: 2.7691,
			parentBodyId: d.SUN
		},
		[d.ERIS]: {
			name: "Eris",
			type: "dwarf_planet",
			color: "#d8d8d0",
			radiusKm: 1163,
			kind: "barren",
			textureResolution: 192,
			massKg: 16466e18,
			semiMajorAxisAu: 67.78,
			parentBodyId: d.SUN
		},
		[d.HAUMEA]: {
			name: "Haumea",
			type: "dwarf_planet",
			color: "#d6cfc4",
			radiusKm: 780,
			kind: "barren",
			textureResolution: 192,
			massKg: 4006e18,
			semiMajorAxisAu: 43.13,
			parentBodyId: d.SUN
		},
		[d.MAKEMAKE]: {
			name: "Makemake",
			type: "dwarf_planet",
			color: "#b06a4a",
			radiusKm: 715,
			kind: "barren",
			textureResolution: 192,
			massKg: 31e20,
			semiMajorAxisAu: 45.43,
			parentBodyId: d.SUN
		},
		[d.MOON]: {
			name: "Moon",
			type: "moon",
			color: "#cccccc",
			radiusKm: 1737,
			kind: "barren",
			textureResolution: 192,
			massKg: 7342e19,
			semiMajorAxisAu: be,
			parentBodyId: d.EARTH
		},
		[d.IO]: {
			name: "Io",
			type: "moon",
			color: "#d9b863",
			radiusKm: 1821.6,
			kind: "barren",
			textureResolution: 192,
			massKg: 89319e18,
			semiMajorAxisAu: Le,
			parentBodyId: d.JUPITER
		},
		[d.EUROPA]: {
			name: "Europa",
			type: "moon",
			color: "#d2c1a0",
			radiusKm: 1560.8,
			kind: "barren",
			textureResolution: 192,
			massKg: 47998e18,
			semiMajorAxisAu: ke,
			parentBodyId: d.JUPITER
		},
		[d.GANYMEDE]: {
			name: "Ganymede",
			type: "moon",
			color: "#8d8278",
			radiusKm: 2634.1,
			kind: "barren",
			textureResolution: 192,
			massKg: 14819e19,
			semiMajorAxisAu: Be,
			parentBodyId: d.JUPITER
		},
		[d.CALLISTO]: {
			name: "Callisto",
			type: "moon",
			color: "#5f574d",
			radiusKm: 2410.3,
			kind: "barren",
			textureResolution: 192,
			massKg: 10759e19,
			semiMajorAxisAu: Ke,
			parentBodyId: d.JUPITER
		},
		[d.PHOBOS]: {
			name: "Phobos",
			type: "moon",
			color: "#a08070",
			radiusKm: 11.267,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x25de4dd4a93000,
			semiMajorAxisAu: He,
			parentBodyId: d.MARS
		},
		[d.DEIMOS]: {
			name: "Deimos",
			type: "moon",
			color: "#9c8878",
			radiusKm: 6.2,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x53e98989e1000,
			semiMajorAxisAu: Je,
			parentBodyId: d.MARS
		},
		[d.MIMAS]: {
			name: "Mimas",
			type: "moon",
			color: "#cfcfd2",
			radiusKm: 198.2,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x20851e4da83b88000,
			semiMajorAxisAu: Ve,
			parentBodyId: d.SATURN
		},
		[d.ENCELADUS]: {
			name: "Enceladus",
			type: "moon",
			color: "#e6f0f5",
			radiusKm: 252.1,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x5db1b3cacc73f0000,
			semiMajorAxisAu: Fe,
			parentBodyId: d.SATURN
		},
		[d.TETHYS]: {
			name: "Tethys",
			type: "moon",
			color: "#d8d2c4",
			radiusKm: 531.1,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x2178d3821d702a0000,
			semiMajorAxisAu: Ge,
			parentBodyId: d.SATURN
		},
		[d.DIONE]: {
			name: "Dione",
			type: "moon",
			color: "#c7c2b1",
			radiusKm: 561.4,
			kind: "barren",
			textureResolution: 128,
			massKg: 1095452e15,
			semiMajorAxisAu: $e,
			parentBodyId: d.SATURN
		},
		[d.RHEA]: {
			name: "Rhea",
			type: "moon",
			color: "#b9b3a3",
			radiusKm: 763.8,
			kind: "barren",
			textureResolution: 128,
			massKg: 2306518e15,
			semiMajorAxisAu: Ye,
			parentBodyId: d.SATURN
		},
		[d.TITAN]: {
			name: "Titan",
			type: "moon",
			color: "#d8a45c",
			radiusKm: 2574.7,
			kind: "barren",
			textureResolution: 192,
			massKg: 13452e19,
			semiMajorAxisAu: je,
			parentBodyId: d.SATURN
		},
		[d.IAPETUS]: {
			name: "Iapetus",
			type: "moon",
			color: "#736556",
			radiusKm: 734.5,
			kind: "barren",
			textureResolution: 128,
			massKg: 1805635e15,
			semiMajorAxisAu: Qe,
			parentBodyId: d.SATURN
		},
		[d.MIRANDA]: {
			name: "Miranda",
			type: "moon",
			color: "#9f9893",
			radiusKm: 235.8,
			kind: "barren",
			textureResolution: 128,
			massKg: 0x3928bd4d8ca3e0000,
			semiMajorAxisAu: qe,
			parentBodyId: d.URANUS
		},
		[d.ARIEL]: {
			name: "Ariel",
			type: "moon",
			color: "#b6b0a8",
			radiusKm: 578.9,
			kind: "barren",
			textureResolution: 128,
			massKg: 1353e18,
			semiMajorAxisAu: Xe,
			parentBodyId: d.URANUS
		},
		[d.UMBRIEL]: {
			name: "Umbriel",
			type: "moon",
			color: "#6c655c",
			radiusKm: 584.7,
			kind: "barren",
			textureResolution: 128,
			massKg: 1172e18,
			semiMajorAxisAu: We,
			parentBodyId: d.URANUS
		},
		[d.TITANIA]: {
			name: "Titania",
			type: "moon",
			color: "#a8a097",
			radiusKm: 788.4,
			kind: "barren",
			textureResolution: 128,
			massKg: 3527e18,
			semiMajorAxisAu: Ze,
			parentBodyId: d.URANUS
		},
		[d.OBERON]: {
			name: "Oberon",
			type: "moon",
			color: "#857d70",
			radiusKm: 761.4,
			kind: "barren",
			textureResolution: 128,
			massKg: 3014e18,
			semiMajorAxisAu: t3,
			parentBodyId: d.URANUS
		},
		[d.TRITON]: {
			name: "Triton",
			type: "moon",
			color: "#d6c8b0",
			radiusKm: 1353.4,
			kind: "barren",
			textureResolution: 192,
			massKg: 2139e19,
			semiMajorAxisAu: n3,
			parentBodyId: d.NEPTUNE
		}
	};
	function o3(t) {
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
	Object.fromEntries(Object.entries(e3).map(([t, n]) => [t, o3(n)]));
	new TextEncoder();
	new TextDecoder();
	new TextEncoder();
	new TextDecoder("utf-8");
	const E2 = Symbol("Comlink.proxy"), r3 = Symbol("Comlink.endpoint"), s3 = Symbol("Comlink.releaseProxy"), ft = Symbol("Comlink.finalizer"), x1 = Symbol("Comlink.thrown"), p2 = (t) => typeof t == "object" && t !== null || typeof t == "function", m2 = /* @__PURE__ */ new Map([["proxy", {
		canHandle: (t) => p2(t) && t[E2],
		serialize(t) {
			const { port1: n, port2: e } = new MessageChannel();
			return dt(t, n), [e, [e]];
		},
		deserialize(t) {
			return t.start(), c3(t);
		}
	}], ["throw", {
		canHandle: (t) => p2(t) && x1 in t,
		serialize({ value: t }) {
			let n;
			return t instanceof Error ? n = {
				isError: !0,
				value: {
					message: t.message,
					name: t.name,
					stack: t.stack
				}
			} : n = {
				isError: !1,
				value: t
			}, [n, []];
		},
		deserialize(t) {
			throw t.isError ? Object.assign(new Error(t.value.message), t.value) : t.value;
		}
	}]]);
	function a3(t, n) {
		for (const e of t) if (n === e || e === "*" || e instanceof RegExp && e.test(n)) return !0;
		return !1;
	}
	function dt(t, n = globalThis, e = ["*"]) {
		n.addEventListener("message", function o(r) {
			if (!r || !r.data) return;
			if (!a3(e, r.origin)) {
				console.warn(`Invalid origin '${r.origin}' for comlink proxy`);
				return;
			}
			const { id: s, type: a, path: c } = Object.assign({ path: [] }, r.data), i = (r.data.argumentList || []).map(D0);
			let u;
			try {
				const l = c.slice(0, -1).reduce((M, m) => M[m], t), h = c.reduce((M, m) => M[m], t);
				switch (a) {
					case "GET":
						u = h;
						break;
					case "SET":
						l[c.slice(-1)[0]] = D0(r.data.value), u = !0;
						break;
					case "APPLY":
						u = h.apply(l, i);
						break;
					case "CONSTRUCT":
						u = d3(new h(...i));
						break;
					case "ENDPOINT":
						{
							const { port1: M, port2: m } = new MessageChannel();
							dt(t, m), u = f3(M, [M]);
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
				const [h, M] = N1(l);
				n.postMessage(Object.assign(Object.assign({}, h), { id: s }), M), a === "RELEASE" && (n.removeEventListener("message", o), y2(n), ft in t && typeof t[ft] == "function" && t[ft]());
			}).catch((l) => {
				const [h, M] = N1({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[x1]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, h), { id: s }), M);
			});
		}), n.start && n.start();
	}
	function i3(t) {
		return t.constructor.name === "MessagePort";
	}
	function y2(t) {
		i3(t) && t.close();
	}
	function c3(t, n) {
		const e = /* @__PURE__ */ new Map();
		return t.addEventListener("message", function(r) {
			const { data: s } = r;
			if (!s || !s.id) return;
			const a = e.get(s.id);
			if (a) try {
				a(s);
			} finally {
				e.delete(s.id);
			}
		}), Mt(t, e, [], n);
	}
	function g1(t) {
		if (t) throw new Error("Proxy has been released and is not useable");
	}
	function R2(t) {
		return b0(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			y2(t);
		});
	}
	const w1 = /* @__PURE__ */ new WeakMap(), T1 = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const n = (w1.get(t) || 0) - 1;
		w1.set(t, n), n === 0 && R2(t);
	});
	function u3(t, n) {
		const e = (w1.get(n) || 0) + 1;
		w1.set(n, e), T1 && T1.register(t, n, t);
	}
	function l3(t) {
		T1 && T1.unregister(t);
	}
	function Mt(t, n, e = [], o = function() {}) {
		let r = !1;
		const s = new Proxy(o, {
			get(a, c) {
				if (g1(r), c === s3) return () => {
					l3(s), R2(t), n.clear(), r = !0;
				};
				if (c === "then") {
					if (e.length === 0) return { then: () => s };
					const i = b0(t, n, {
						type: "GET",
						path: e.map((u) => u.toString())
					}).then(D0);
					return i.then.bind(i);
				}
				return Mt(t, n, [...e, c]);
			},
			set(a, c, i) {
				g1(r);
				const [u, l] = N1(i);
				return b0(t, n, {
					type: "SET",
					path: [...e, c].map((h) => h.toString()),
					value: u
				}, l).then(D0);
			},
			apply(a, c, i) {
				g1(r);
				const u = e[e.length - 1];
				if (u === r3) return b0(t, n, { type: "ENDPOINT" }).then(D0);
				if (u === "bind") return Mt(t, n, e.slice(0, -1));
				const [l, h] = I2(i);
				return b0(t, n, {
					type: "APPLY",
					path: e.map((M) => M.toString()),
					argumentList: l
				}, h).then(D0);
			},
			construct(a, c) {
				g1(r);
				const [i, u] = I2(c);
				return b0(t, n, {
					type: "CONSTRUCT",
					path: e.map((l) => l.toString()),
					argumentList: i
				}, u).then(D0);
			}
		});
		return u3(s, t), s;
	}
	function h3(t) {
		return Array.prototype.concat.apply([], t);
	}
	function I2(t) {
		const n = t.map(N1);
		return [n.map((e) => e[0]), h3(n.map((e) => e[1]))];
	}
	const x2 = /* @__PURE__ */ new WeakMap();
	function f3(t, n) {
		return x2.set(t, n), t;
	}
	function d3(t) {
		return Object.assign(t, { [E2]: !0 });
	}
	function N1(t) {
		for (const [n, e] of m2) if (e.canHandle(t)) {
			const [o, r] = e.serialize(t);
			return [{
				type: "HANDLER",
				name: n,
				value: o
			}, r];
		}
		return [{
			type: "RAW",
			value: t
		}, x2.get(t) || []];
	}
	function D0(t) {
		switch (t.type) {
			case "HANDLER": return m2.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function b0(t, n, e, o) {
		return new Promise((r) => {
			const s = M3();
			n.set(s, r), t.start && t.start(), t.postMessage(Object.assign({ id: s }, e), o);
		});
	}
	function M3() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	var s1 = le({
		AU_PER_LY: () => g2,
		AngleBetween: () => z1,
		AngleFromSun: () => Z0,
		Apsis: () => A1,
		ApsisKind: () => g0,
		AstroTime: () => R0,
		Atmosphere: () => cn,
		AtmosphereInfo: () => an,
		AxisInfo: () => jt,
		BackdatePosition: () => nn,
		BaryState: () => h4,
		Body: () => f,
		CALLISTO_RADIUS_KM: () => y3,
		C_AUDAY: () => D1,
		CalcMoonCount: () => k2,
		CombineRotation: () => w0,
		Constellation: () => F4,
		ConstellationInfo: () => Nn,
		CorrectLightTravel: () => tn,
		DEG2RAD: () => _,
		DefineStar: () => B3,
		DeltaT_EspenakMeeus: () => Rt,
		DeltaT_JplHorizons: () => H3,
		EUROPA_RADIUS_KM: () => p3,
		EclipseEvent: () => Ln,
		EclipseKind: () => Z,
		Ecliptic: () => c1,
		EclipticCoordinates: () => $2,
		EclipticGeoMoon: () => V1,
		EclipticLongitude: () => C0,
		Elongation: () => dn,
		ElongationEvent: () => fn,
		Equator: () => i1,
		EquatorFromVector: () => Kt,
		EquatorialCoordinates: () => H1,
		GANYMEDE_RADIUS_KM: () => m3,
		GeoEmbState: () => Tt,
		GeoMoon: () => i0,
		GeoMoonState: () => u1,
		GeoVector: () => e0,
		GlobalSolarEclipseInfo: () => zn,
		GravitySimulator: () => u6,
		HOUR2RAD: () => At,
		HelioDistance: () => P0,
		HelioState: () => Q1,
		HelioVector: () => c0,
		Horizon: () => J1,
		HorizonFromVector: () => P4,
		HorizontalCoordinates: () => G2,
		HourAngle: () => x4,
		HourAngleEvent: () => ln,
		IO_RADIUS_KM: () => E3,
		IdentityMatrix: () => U4,
		Illumination: () => q1,
		IlluminationInfo: () => on,
		InverseRefraction: () => En,
		InverseRotation: () => n1,
		JUPITER_EQUATORIAL_RADIUS_KM: () => A3,
		JUPITER_MEAN_RADIUS_KM: () => _3,
		JUPITER_POLAR_RADIUS_KM: () => S3,
		JupiterMoons: () => u4,
		JupiterMoonsInfo: () => Z2,
		KM_PER_AU: () => z,
		LagrangePoint: () => c6,
		LagrangePointFast: () => Qn,
		Libration: () => $3,
		LibrationInfo: () => B2,
		LocalSolarEclipseInfo: () => kn,
		LunarEclipseInfo: () => Dn,
		MakeRotation: () => X3,
		MakeTime: () => y,
		MassProduct: () => yt,
		MoonPhase: () => kt,
		MoonQuarter: () => rn,
		NextGlobalSolarEclipse: () => Z4,
		NextLocalSolarEclipse: () => e6,
		NextLunarApsis: () => N4,
		NextLunarEclipse: () => W4,
		NextMoonNode: () => s6,
		NextMoonQuarter: () => S4,
		NextPlanetApsis: () => O4,
		NextTransit: () => r6,
		NodeEventInfo: () => $n,
		NodeEventKind: () => S0,
		Observer: () => gt,
		ObserverGravity: () => n4,
		ObserverState: () => Z3,
		ObserverVector: () => W3,
		PairLongitude: () => Lt,
		Pivot: () => v4,
		PlanetOrbitalPeriod: () => K3,
		RAD2DEG: () => k,
		RAD2HOUR: () => St,
		Refraction: () => S1,
		RotateState: () => W1,
		RotateVector: () => _1,
		RotationAxis: () => i6,
		RotationMatrix: () => V,
		Rotation_ECL_EQD: () => In,
		Rotation_ECL_EQJ: () => C4,
		Rotation_ECL_HOR: () => xn,
		Rotation_ECT_EQD: () => gn,
		Rotation_ECT_EQJ: () => L4,
		Rotation_EQD_ECL: () => Rn,
		Rotation_EQD_ECT: () => wn,
		Rotation_EQD_EQJ: () => tt,
		Rotation_EQD_HOR: () => Jt,
		Rotation_EQJ_ECL: () => pn,
		Rotation_EQJ_ECT: () => b4,
		Rotation_EQJ_EQD: () => Z1,
		Rotation_EQJ_GAL: () => K4,
		Rotation_EQJ_HOR: () => k4,
		Rotation_GAL_EQJ: () => H4,
		Rotation_HOR_ECL: () => B4,
		Rotation_HOR_EQD: () => mn,
		Rotation_HOR_EQJ: () => yn,
		Search: () => F,
		SearchAltitude: () => m4,
		SearchGlobalSolarEclipse: () => bn,
		SearchHourAngle: () => I4,
		SearchLocalSolarEclipse: () => Jn,
		SearchLunarApsis: () => Mn,
		SearchLunarEclipse: () => Pn,
		SearchMaxElongation: () => w4,
		SearchMoonNode: () => jn,
		SearchMoonPhase: () => M1,
		SearchMoonQuarter: () => sn,
		SearchPeakMagnitude: () => T4,
		SearchPlanetApsis: () => Sn,
		SearchRelativeLongitude: () => t1,
		SearchRiseSet: () => p4,
		SearchSunLongitude: () => en,
		SearchTransit: () => Gn,
		SeasonInfo: () => hn,
		Seasons: () => g4,
		SetDeltaTFunction: () => J3,
		SiderealTime: () => J2,
		SphereFromVector: () => Ht,
		Spherical: () => G0,
		StateVector: () => H,
		SunPosition: () => j2,
		TransitInfo: () => Vn,
		Vector: () => O,
		VectorFromHorizon: () => z4,
		VectorFromSphere: () => X1,
		VectorObserver: () => t4,
		e_tilt: () => I0
	});
	const D1 = 173.1446326846693, z = 149597870.69098932, g2 = 63241.07708807546, _ = .017453292519943295, At = .26179938779914946, k = 57.29577951308232, St = 3.819718634205488, A3 = 71492, S3 = 66854, _3 = 69911, E3 = 1821.6, p3 = 1560.8, m3 = 2631.2, y3 = 2410.3, w2 = 365.24217, T2 = /* @__PURE__ */ new Date("2000-01-01T12:00:00Z"), n0 = 2 * Math.PI, y0 = 3600 * (180 / Math.PI), L0 = 484813681109536e-20, N2 = 648e3, R3 = 2 * N2, I3 = 7292115e-11, x3 = N2 / Math.PI, g3 = -.17 - 5 * Math.log10(x3), O1 = 29.530588, U1 = 86400, w3 = U1 * 1e3, D2 = .9972695717592592, _t = 695700, O2 = _t / z, s0 = .996647180302104, v1 = s0 * s0, M0 = 6378.1366, T3 = M0 / z, N3 = M0 * s0, D3 = 6371, O3 = 6459, U3 = 1738.1 / z, X = 1737.4, U2 = 1736, v3 = U2 / z, P3 = 34 / 60, z3 = 81.30056, a1 = .0002959122082855911, Et = 4912547451450812e-26, pt = 7243452486162703e-25, v2 = 8887692390113509e-25, mt = 9549535105779258e-26, k0 = 2.825345909524226e-7, B0 = 8.459715185680659e-8, K0 = 1.292024916781969e-8, H0 = 1.524358900784276e-8, C3 = 218869976542597e-26, b3 = v2 / z3;
	function yt(t) {
		switch (t) {
			case f.Sun: return a1;
			case f.Mercury: return Et;
			case f.Venus: return pt;
			case f.Earth: return v2;
			case f.Moon: return b3;
			case f.EMB: return 8997011346712498e-25;
			case f.Mars: return mt;
			case f.Jupiter: return k0;
			case f.Saturn: return B0;
			case f.Uranus: return K0;
			case f.Neptune: return H0;
			case f.Pluto: return C3;
			default: throw `Do not know mass product for body: ${t}`;
		}
	}
	function P1(t) {
		if (t !== !0 && t !== !1) throw console.trace(), `Value is not boolean: ${t}`;
		return t;
	}
	function N(t) {
		if (!Number.isFinite(t)) throw console.trace(), `Value is not a finite number: ${t}`;
		return t;
	}
	function J0(t) {
		return t - Math.floor(t);
	}
	function z1(t, n) {
		const e = t.x * t.x + t.y * t.y + t.z * t.z;
		if (Math.abs(e) < 1e-8) throw "AngleBetween: first vector is too short.";
		const o = n.x * n.x + n.y * n.y + n.z * n.z;
		if (Math.abs(o) < 1e-8) throw "AngleBetween: second vector is too short.";
		const r = (t.x * n.x + t.y * n.y + t.z * n.z) / Math.sqrt(e * o);
		return r <= -1 ? 180 : r >= 1 ? 0 : k * Math.acos(r);
	}
	var f;
	(function(t) {
		t.Sun = "Sun", t.Moon = "Moon", t.Mercury = "Mercury", t.Venus = "Venus", t.Earth = "Earth", t.Mars = "Mars", t.Jupiter = "Jupiter", t.Saturn = "Saturn", t.Uranus = "Uranus", t.Neptune = "Neptune", t.Pluto = "Pluto", t.SSB = "SSB", t.EMB = "EMB", t.Star1 = "Star1", t.Star2 = "Star2", t.Star3 = "Star3", t.Star4 = "Star4", t.Star5 = "Star5", t.Star6 = "Star6", t.Star7 = "Star7", t.Star8 = "Star8";
	})(f || (f = {}));
	const L3 = [
		f.Star1,
		f.Star2,
		f.Star3,
		f.Star4,
		f.Star5,
		f.Star6,
		f.Star7,
		f.Star8
	], k3 = [
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
	function P2(t) {
		const n = L3.indexOf(t);
		return n >= 0 ? k3[n] : null;
	}
	function C1(t) {
		const n = P2(t);
		return n && n.dist > 0 ? n : null;
	}
	function B3(t, n, e, o) {
		const r = P2(t);
		if (!r) throw `Invalid star body: ${t}`;
		if (N(n), N(e), N(o), n < 0 || n >= 24) throw `Invalid right ascension for star: ${n}`;
		if (e < -90 || e > 90) throw `Invalid declination for star: ${e}`;
		if (o < 1) throw `Invalid star distance: ${o}`;
		r.ra = n, r.dec = e, r.dist = o * g2;
	}
	var b;
	(function(t) {
		t[t.From2000 = 0] = "From2000", t[t.Into2000 = 1] = "Into2000";
	})(b || (b = {}));
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
	function K3(t) {
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
	function Rt(t) {
		var n, e, o, r, s, a, c;
		const i = 2e3 + (t - 14) / w2;
		return i < -500 ? (n = (i - 1820) / 100, -20 + 32 * n * n) : i < 500 ? (n = i / 100, e = n * n, o = n * e, r = e * e, s = e * o, a = o * o, 10583.6 - 1014.41 * n + 33.78311 * e - 5.952053 * o - .1798452 * r + .022174192 * s + .0090316521 * a) : i < 1600 ? (n = (i - 1e3) / 100, e = n * n, o = n * e, r = e * e, s = e * o, a = o * o, 1574.2 - 556.01 * n + 71.23472 * e + .319781 * o - .8503463 * r - .005050998 * s + .0083572073 * a) : i < 1700 ? (n = i - 1600, e = n * n, o = n * e, 120 - .9808 * n - .01532 * e + o / 7129) : i < 1800 ? (n = i - 1700, e = n * n, o = n * e, r = e * e, 8.83 + .1603 * n - .0059285 * e + 13336e-8 * o - r / 1174e3) : i < 1860 ? (n = i - 1800, e = n * n, o = n * e, r = e * e, s = e * o, a = o * o, c = o * r, 13.72 - .332447 * n + .0068612 * e + .0041116 * o - 37436e-8 * r + 121272e-10 * s - 1.699e-7 * a + 875e-12 * c) : i < 1900 ? (n = i - 1860, e = n * n, o = n * e, r = e * e, s = e * o, 7.62 + .5737 * n - .251754 * e + .01680668 * o - .0004473624 * r + s / 233174) : i < 1920 ? (n = i - 1900, e = n * n, o = n * e, r = e * e, -2.79 + 1.494119 * n - .0598939 * e + .0061966 * o - 197e-6 * r) : i < 1941 ? (n = i - 1920, e = n * n, o = n * e, 21.2 + .84493 * n - .0761 * e + .0020936 * o) : i < 1961 ? (n = i - 1950, e = n * n, o = n * e, 29.07 + .407 * n - e / 233 + o / 2547) : i < 1986 ? (n = i - 1975, e = n * n, o = n * e, 45.45 + 1.067 * n - e / 260 - o / 718) : i < 2005 ? (n = i - 2e3, e = n * n, o = n * e, r = e * e, s = e * o, 63.86 + .3345 * n - .060374 * e + .0017275 * o + 651814e-9 * r + 2373599e-11 * s) : i < 2050 ? (n = i - 2e3, 62.92 + .32217 * n + .005589 * n * n) : i < 2150 ? (n = (i - 1820) / 100, -20 + 32 * n * n - .5628 * (2150 - i)) : (n = (i - 1820) / 100, -20 + 32 * n * n);
	}
	function H3(t) {
		return Rt(Math.min(t, 17 * w2));
	}
	let z2 = Rt;
	function J3(t) {
		z2 = t;
	}
	function C2(t) {
		return t + z2(t) / 86400;
	}
	var R0 = class ct {
		constructor(n) {
			if (n instanceof ct) {
				this.date = n.date, this.ut = n.ut, this.tt = n.tt;
				return;
			}
			const e = 864e5;
			if (n instanceof Date && Number.isFinite(n.getTime())) {
				this.date = n, this.ut = (n.getTime() - T2.getTime()) / e, this.tt = C2(this.ut);
				return;
			}
			if (Number.isFinite(n)) {
				this.date = new Date(T2.getTime() + n * e), this.ut = n, this.tt = C2(this.ut);
				return;
			}
			throw "Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date.";
		}
		static FromTerrestrialTime(n) {
			let e = new ct(n);
			for (;;) {
				const o = n - e.tt;
				if (Math.abs(o) < 1e-12) return e;
				e = e.AddDays(o);
			}
		}
		toString() {
			return this.date.toISOString();
		}
		AddDays(n) {
			return new ct(this.ut + n);
		}
	};
	function V3(t, n, e) {
		return new R0(t.ut + e * (n.ut - t.ut));
	}
	function y(t) {
		return t instanceof R0 ? t : new R0(t);
	}
	function F3(t) {
		function n(M) {
			return M % R3 * L0;
		}
		const e = t.tt / 36525, o = n(1287104.79305 + e * 129596581.0481), r = n(335779.526232 + e * 1739527262.8478), s = n(1072260.70369 + e * 1602961601.209), a = n(450160.398036 - e * 6962890.5431);
		let c = Math.sin(a), i = Math.cos(a), u = (-172064161 - 174666 * e) * c + 33386 * i, l = (92052331 + 9086 * e) * i + 15377 * c, h = 2 * (r - s + a);
		return c = Math.sin(h), i = Math.cos(h), u += (-13170906 - 1675 * e) * c - 13696 * i, l += (5730336 - 3015 * e) * i - 4587 * c, h = 2 * (r + a), c = Math.sin(h), i = Math.cos(h), u += (-2276413 - 234 * e) * c + 2796 * i, l += (978459 - 485 * e) * i + 1374 * c, h = 2 * a, c = Math.sin(h), i = Math.cos(h), u += (2074554 + 207 * e) * c - 698 * i, l += (-897492 + 470 * e) * i - 291 * c, c = Math.sin(o), i = Math.cos(o), u += (1475877 - 3633 * e) * c + 11817 * i, l += (73871 - 184 * e) * i - 1924 * c, {
			dpsi: -135e-6 + u * 1e-7,
			deps: 388e-6 + l * 1e-7
		};
	}
	function b2(t) {
		var n = t.tt / 36525;
		return (((((-4.34e-8 * n - 576e-9) * n + .0020034) * n - 1831e-7) * n - 46.836769) * n + 84381.406) / 3600;
	}
	var b1;
	function I0(t) {
		if (!b1 || Math.abs(b1.tt - t.tt) > 1e-6) {
			const n = F3(t), e = b2(t), o = e + n.deps / 3600;
			b1 = {
				tt: t.tt,
				dpsi: n.dpsi,
				deps: n.deps,
				ee: n.dpsi * Math.cos(e * _) / 15,
				mobl: e,
				tobl: o
			};
		}
		return b1;
	}
	function L2(t, n) {
		const e = t * _, o = Math.cos(e), r = Math.sin(e);
		return [
			n[0],
			n[1] * o - n[2] * r,
			n[1] * r + n[2] * o
		];
	}
	function G3(t, n) {
		return L2(b2(t), n);
	}
	let k2 = 0;
	function x0(t) {
		++k2;
		const n = t.tt / 36525;
		function e(U, C) {
			const K = [];
			let J;
			for (J = 0; J <= C - U; ++J) K.push(0);
			return {
				min: U,
				array: K
			};
		}
		function o(U, C, K, J) {
			const $ = [];
			for (let N0 = 0; N0 <= C - U; ++N0) $.push(e(K, J));
			return {
				min: U,
				array: $
			};
		}
		function r(U, C, K) {
			const J = U.array[C - U.min];
			return J.array[K - J.min];
		}
		function s(U, C, K, J) {
			const $ = U.array[C - U.min];
			$.array[K - $.min] = J;
		}
		let a, c, i, u, l, h, M, m, A, p, x, R, E, I, w, g, D, v, L, B, Q, G, q, u0 = o(-6, 6, 1, 4), r0 = o(-6, 6, 1, 4);
		function _0(U, C) {
			return r(u0, U, C);
		}
		function l0(U, C) {
			return r(r0, U, C);
		}
		function h0(U, C, K) {
			return s(u0, U, C, K);
		}
		function T0(U, C, K) {
			return s(r0, U, C, K);
		}
		function o1(U, C, K, J, $) {
			$(U * K - C * J, C * K + U * J);
		}
		function P(U) {
			return Math.sin(n0 * U);
		}
		M = n * n, A = 0, q = 0, x = 0, R = 3422.7;
		var f0 = P(.19833 + .05611 * n), Zt = P(.27869 + .04508 * n), t2 = P(.16827 - .36903 * n), n2 = P(.34734 - 5.37261 * n), e2 = P(.10498 - 5.37899 * n), it = P(.42681 - .41855 * n), U6 = P(.14943 - 5.37511 * n);
		for (v = .84 * f0 + .31 * Zt + 14.27 * t2 + 7.26 * n2 + .28 * e2 + .24 * it, L = 2.94 * f0 + .31 * Zt + 14.27 * t2 + 9.34 * n2 + 1.12 * e2 + .83 * it, B = -6.4 * f0 - 1.89 * it, Q = .21 * f0 + .31 * Zt + 14.27 * t2 - 88.7 * n2 - 15.3 * e2 + .24 * it - 1.86 * U6, G = v - B, m = -3332e-9 * P(.59734 - 5.37261 * n) - 539e-9 * P(.35498 - 5.37899 * n) - 64e-9 * P(.39943 - 5.37511 * n), E = n0 * J0(.60643382 + 1336.85522467 * n - 313e-8 * M) + v / y0, I = n0 * J0(.37489701 + 1325.55240982 * n + 2565e-8 * M) + L / y0, w = n0 * J0(.99312619 + 99.99735956 * n - 44e-8 * M) + B / y0, g = n0 * J0(.25909118 + 1342.2278298 * n - 892e-8 * M) + Q / y0, D = n0 * J0(.82736186 + 1236.85308708 * n - 397e-8 * M) + G / y0, l = 1; l <= 4; ++l) {
			switch (l) {
				case 1:
					i = I, c = 4, u = 1.000002208;
					break;
				case 2:
					i = w, c = 3, u = .997504612 - .002495388 * n;
					break;
				case 3:
					i = g, c = 4, u = 1.000002708 + 139.978 * m;
					break;
				case 4:
					i = D, c = 6, u = 1;
					break;
				default: throw `Internal error: I = ${l}`;
			}
			for (h0(0, l, 1), h0(1, l, Math.cos(i) * u), T0(0, l, 0), T0(1, l, Math.sin(i) * u), h = 2; h <= c; ++h) o1(_0(h - 1, l), l0(h - 1, l), _0(1, l), l0(1, l), (U, C) => (h0(h, l, U), T0(h, l, C)));
			for (h = 1; h <= c; ++h) h0(-h, l, _0(h, l)), T0(-h, l, -l0(h, l));
		}
		function ce(U, C, K, J) {
			for (var $ = {
				x: 1,
				y: 0
			}, N0 = [
				0,
				U,
				C,
				K,
				J
			], E0 = 1; E0 <= 4; ++E0) N0[E0] !== 0 && o1($.x, $.y, _0(N0[E0], E0), l0(N0[E0], E0), (o2, r1) => ($.x = o2, $.y = r1));
			return $;
		}
		function S(U, C, K, J, $, N0, E0, o2) {
			var r1 = ce($, N0, E0, o2);
			A += U * r1.y, q += C * r1.y, x += K * r1.x, R += J * r1.x;
		}
		S(13.902, 14.06, -.001, .2607, 0, 0, 0, 4), S(.403, -4.01, .394, .0023, 0, 0, 0, 3), S(2369.912, 2373.36, .601, 28.2333, 0, 0, 0, 2), S(-125.154, -112.79, -.725, -.9781, 0, 0, 0, 1), S(1.979, 6.98, -.445, .0433, 1, 0, 0, 4), S(191.953, 192.72, .029, 3.0861, 1, 0, 0, 2), S(-8.466, -13.51, .455, -.1093, 1, 0, 0, 1), S(22639.5, 22609.07, .079, 186.5398, 1, 0, 0, 0), S(18.609, 3.59, -.094, .0118, 1, 0, 0, -1), S(-4586.465, -4578.13, -.077, 34.3117, 1, 0, 0, -2), S(3.215, 5.44, .192, -.0386, 1, 0, 0, -3), S(-38.428, -38.64, .001, .6008, 1, 0, 0, -4), S(-.393, -1.43, -.092, .0086, 1, 0, 0, -6), S(-.289, -1.59, .123, -.0053, 0, 1, 0, 4), S(-24.42, -25.1, .04, -.3, 0, 1, 0, 2), S(18.023, 17.93, .007, .1494, 0, 1, 0, 1), S(-668.146, -126.98, -1.302, -.3997, 0, 1, 0, 0), S(.56, .32, -.001, -.0037, 0, 1, 0, -1), S(-165.145, -165.06, .054, 1.9178, 0, 1, 0, -2), S(-1.877, -6.46, -.416, .0339, 0, 1, 0, -4), S(.213, 1.02, -.074, .0054, 2, 0, 0, 4), S(14.387, 14.78, -.017, .2833, 2, 0, 0, 2), S(-.586, -1.2, .054, -.01, 2, 0, 0, 1), S(769.016, 767.96, .107, 10.1657, 2, 0, 0, 0), S(1.75, 2.01, -.018, .0155, 2, 0, 0, -1), S(-211.656, -152.53, 5.679, -.3039, 2, 0, 0, -2), S(1.225, .91, -.03, -.0088, 2, 0, 0, -3), S(-30.773, -34.07, -.308, .3722, 2, 0, 0, -4), S(-.57, -1.4, -.074, .0109, 2, 0, 0, -6), S(-2.921, -11.75, .787, -.0484, 1, 1, 0, 2), S(1.267, 1.52, -.022, .0164, 1, 1, 0, 1), S(-109.673, -115.18, .461, -.949, 1, 1, 0, 0), S(-205.962, -182.36, 2.056, 1.4437, 1, 1, 0, -2), S(.233, .36, .012, -.0025, 1, 1, 0, -3), S(-4.391, -9.66, -.471, .0673, 1, 1, 0, -4), S(.283, 1.53, -.111, .006, 1, -1, 0, 4), S(14.577, 31.7, -1.54, .2302, 1, -1, 0, 2), S(147.687, 138.76, .679, 1.1528, 1, -1, 0, 0), S(-1.089, .55, .021, 0, 1, -1, 0, -1), S(28.475, 23.59, -.443, -.2257, 1, -1, 0, -2), S(-.276, -.38, -.006, -.0036, 1, -1, 0, -3), S(.636, 2.27, .146, -.0102, 1, -1, 0, -4), S(-.189, -1.68, .131, -.0028, 0, 2, 0, 2), S(-7.486, -.66, -.037, -.0086, 0, 2, 0, 0), S(-8.096, -16.35, -.74, .0918, 0, 2, 0, -2), S(-5.741, -.04, 0, -9e-4, 0, 0, 2, 2), S(.255, 0, 0, 0, 0, 0, 2, 1), S(-411.608, -.2, 0, -.0124, 0, 0, 2, 0), S(.584, .84, 0, .0071, 0, 0, 2, -1), S(-55.173, -52.14, 0, -.1052, 0, 0, 2, -2), S(.254, .25, 0, -.0017, 0, 0, 2, -3), S(.025, -1.67, 0, .0031, 0, 0, 2, -4), S(1.06, 2.96, -.166, .0243, 3, 0, 0, 2), S(36.124, 50.64, -1.3, .6215, 3, 0, 0, 0), S(-13.193, -16.4, .258, -.1187, 3, 0, 0, -2), S(-1.187, -.74, .042, .0074, 3, 0, 0, -4), S(-.293, -.31, -.002, .0046, 3, 0, 0, -6), S(-.29, -1.45, .116, -.0051, 2, 1, 0, 2), S(-7.649, -10.56, .259, -.1038, 2, 1, 0, 0), S(-8.627, -7.59, .078, -.0192, 2, 1, 0, -2), S(-2.74, -2.54, .022, .0324, 2, 1, 0, -4), S(1.181, 3.32, -.212, .0213, 2, -1, 0, 2), S(9.703, 11.67, -.151, .1268, 2, -1, 0, 0), S(-.352, -.37, .001, -.0028, 2, -1, 0, -1), S(-2.494, -1.17, -.003, -.0017, 2, -1, 0, -2), S(.36, .2, -.012, -.0043, 2, -1, 0, -4), S(-1.167, -1.25, .008, -.0106, 1, 2, 0, 0), S(-7.412, -6.12, .117, .0484, 1, 2, 0, -2), S(-.311, -.65, -.032, .0044, 1, 2, 0, -4), S(.757, 1.82, -.105, .0112, 1, -2, 0, 2), S(2.58, 2.32, .027, .0196, 1, -2, 0, 0), S(2.533, 2.4, -.014, -.0212, 1, -2, 0, -2), S(-.344, -.57, -.025, .0036, 0, 3, 0, -2), S(-.992, -.02, 0, 0, 1, 0, 2, 2), S(-45.099, -.02, 0, -.001, 1, 0, 2, 0), S(-.179, -9.52, 0, -.0833, 1, 0, 2, -2), S(-.301, -.33, 0, .0014, 1, 0, 2, -4), S(-6.382, -3.37, 0, -.0481, 1, 0, -2, 2), S(39.528, 85.13, 0, -.7136, 1, 0, -2, 0), S(9.366, .71, 0, -.0112, 1, 0, -2, -2), S(.202, .02, 0, 0, 1, 0, -2, -4), S(.415, .1, 0, .0013, 0, 1, 2, 0), S(-2.152, -2.26, 0, -.0066, 0, 1, 2, -2), S(-1.44, -1.3, 0, .0014, 0, 1, -2, 2), S(.384, -.04, 0, 0, 0, 1, -2, -2), S(1.938, 3.6, -.145, .0401, 4, 0, 0, 0), S(-.952, -1.58, .052, -.013, 4, 0, 0, -2), S(-.551, -.94, .032, -.0097, 3, 1, 0, 0), S(-.482, -.57, .005, -.0045, 3, 1, 0, -2), S(.681, .96, -.026, .0115, 3, -1, 0, 0), S(-.297, -.27, .002, -9e-4, 2, 2, 0, -2), S(.254, .21, -.003, 0, 2, -2, 0, -2), S(-.25, -.22, .004, .0014, 1, 3, 0, -2), S(-3.996, 0, 0, 4e-4, 2, 0, 2, 0), S(.557, -.75, 0, -.009, 2, 0, 2, -2), S(-.459, -.38, 0, -.0053, 2, 0, -2, 2), S(-1.298, .74, 0, 4e-4, 2, 0, -2, 0), S(.538, 1.14, 0, -.0141, 2, 0, -2, -2), S(.263, .02, 0, 0, 1, 1, 2, 0), S(.426, .07, 0, -6e-4, 1, 1, -2, -2), S(-.304, .03, 0, 3e-4, 1, -1, 2, 0), S(-.372, -.19, 0, -.0027, 1, -1, -2, 2), S(.418, 0, 0, 0, 0, 0, 4, 0), S(-.33, -.04, 0, 0, 3, 0, 2, 0);
		function d0(U, C, K, J, $) {
			return U * ce(C, K, J, $).y;
		}
		p = 0, p += d0(-526.069, 0, 0, 1, -2), p += d0(-3.352, 0, 0, 1, -4), p += d0(44.297, 1, 0, 1, -2), p += d0(-6, 1, 0, 1, -4), p += d0(20.599, -1, 0, 1, 0), p += d0(-30.598, -1, 0, 1, -2), p += d0(-24.649, -2, 0, 1, 0), p += d0(-2, -2, 0, 1, -2), p += d0(-22.571, 0, 1, 1, -2), p += d0(10.985, 0, -1, 1, -2), A += .82 * P(.7736 - 62.5512 * n) + .31 * P(.0466 - 125.1025 * n) + .35 * P(.5785 - 25.1042 * n) + .66 * P(.4591 + 1335.8075 * n) + .64 * P(.313 - 91.568 * n) + 1.14 * P(.148 + 1331.2898 * n) + .21 * P(.5918 + 1056.5859 * n) + .44 * P(.5784 + 1322.8595 * n) + .24 * P(.2275 - 5.7374 * n) + .28 * P(.2965 + 2.6929 * n) + .33 * P(.3132 + 6.3368 * n), a = g + q / y0;
		let v6 = (1.000002708 + 139.978 * m) * (18518.511 + 1.189 + x) * Math.sin(a) - 6.24 * Math.sin(3 * a) + p;
		return {
			geo_eclip_lon: n0 * J0((E + A / y0) / n0),
			geo_eclip_lat: Math.PI / 648e3 * v6,
			distance_au: y0 * T3 / (.999953253 * R)
		};
	}
	var B2 = class {
		constructor(t, n, e, o, r, s) {
			this.elat = t, this.elon = n, this.mlat = e, this.mlon = o, this.dist_km = r, this.diam_deg = s;
		}
	};
	function $3(t) {
		const n = y(t), e = n.tt / 36525, o = e * e, r = o * e, s = o * o, a = x0(n), c = a.geo_eclip_lon, i = a.geo_eclip_lat, u = a.distance_au * z, l = _ * 1.543, h = _ * W0(93.272095 + 483202.0175233 * e - .0036539 * o - r / 3526e3 + s / 86331e4), M = _ * W0(125.0445479 - 1934.1362891 * e + .0020754 * o + r / 467441 - s / 60616e3), m = _ * W0(357.5291092 + 35999.0502909 * e - 1536e-7 * o + r / 2449e4), A = _ * W0(134.9633964 + 477198.8675055 * e + .0087414 * o + r / 69699 - s / 14712e3), p = _ * W0(297.8501921 + 445267.1114034 * e - .0018819 * o + r / 545868 - s / 113065e3), x = 1 - .002516 * e - 74e-7 * o, R = c - M, E = Math.atan2(Math.sin(R) * Math.cos(i) * Math.cos(l) - Math.sin(i) * Math.sin(l), Math.cos(R) * Math.cos(i)), I = X0(k * (E - h)), w = Math.asin(-Math.sin(R) * Math.cos(i) * Math.sin(l) - Math.sin(i) * Math.cos(l)), g = _ * (119.75 + 131.849 * e), D = _ * (72.56 + 20.186 * e), v = -.02752 * Math.cos(A) + -.02245 * Math.sin(h) + .00684 * Math.cos(A - 2 * h) + -.00293 * Math.cos(2 * h) + -85e-5 * Math.cos(2 * h - 2 * p) + -54e-5 * Math.cos(A - 2 * p) + -2e-4 * Math.sin(A + h) + -2e-4 * Math.cos(A + 2 * h) + -2e-4 * Math.cos(A - h) + 14e-5 * Math.cos(A + 2 * h - 2 * p), L = -.02816 * Math.sin(A) + .02244 * Math.cos(h) + -.00682 * Math.sin(A - 2 * h) + -.00279 * Math.sin(2 * h) + -83e-5 * Math.sin(2 * h - 2 * p) + 69e-5 * Math.sin(A - 2 * p) + 4e-4 * Math.cos(A + h) + -25e-5 * Math.sin(2 * A) + -23e-5 * Math.sin(A + 2 * h) + 2e-4 * Math.cos(A - h) + 19e-5 * Math.sin(A - h) + 13e-5 * Math.sin(A + 2 * h - 2 * p) + -1e-4 * Math.cos(A - 3 * h), B = -(.0252 * x * Math.sin(m) + .00473 * Math.sin(2 * A - 2 * h) + -.00467 * Math.sin(A) + .00396 * Math.sin(g) + .00276 * Math.sin(2 * A - 2 * p) + .00196 * Math.sin(M) + -.00183 * Math.cos(A - h) + .00115 * Math.sin(A - 2 * p) + -96e-5 * Math.sin(A - p) + 46e-5 * Math.sin(2 * h - 2 * p) + -39e-5 * Math.sin(A - h) + -32e-5 * Math.sin(A - m - p) + 27e-5 * Math.sin(2 * A - m - 2 * p) + 23e-5 * Math.sin(D) + -14e-5 * Math.sin(2 * p) + 14e-5 * Math.cos(2 * A - 2 * h) + -12e-5 * Math.sin(A - 2 * h) + -12e-5 * Math.sin(2 * A) + 11e-5 * Math.sin(2 * A - 2 * m - 2 * p)) + (v * Math.cos(E) + L * Math.sin(E)) * Math.tan(w), Q = L * Math.cos(E) - v * Math.sin(E), G = 2 * k * Math.atan(X / Math.sqrt(u * u - X * X));
		return new B2(k * w + Q, I + B, k * i, k * c, u, G);
	}
	function K2(t, n) {
		return [
			t.rot[0][0] * n[0] + t.rot[1][0] * n[1] + t.rot[2][0] * n[2],
			t.rot[0][1] * n[0] + t.rot[1][1] * n[1] + t.rot[2][1] * n[2],
			t.rot[0][2] * n[0] + t.rot[1][2] * n[1] + t.rot[2][2] * n[2]
		];
	}
	function V0(t, n, e) {
		return K2(L1(n, e), t);
	}
	function H2(t, n, e) {
		return W1(L1(n, e), t);
	}
	function L1(t, n) {
		const e = t.tt / 36525;
		let o = 84381.406, r = ((((-9.51e-8 * e + 132851e-9) * e - .00114045) * e - 1.0790069) * e + 5038.481507) * e, s = ((((3.337e-7 * e - 467e-9) * e - .00772503) * e + .0512623) * e - .025754) * e + o, a = ((((-56e-9 * e + 170663e-9) * e - .00121197) * e - 2.3814292) * e + 10.556403) * e;
		o *= L0, r *= L0, s *= L0, a *= L0;
		const c = Math.sin(o), i = Math.cos(o), u = Math.sin(-r), l = Math.cos(-r), h = Math.sin(-s), M = Math.cos(-s), m = Math.sin(a), A = Math.cos(a), p = A * l - u * m * M, x = A * u * i + m * M * l * i - c * m * h, R = A * u * c + m * M * l * c + i * m * h, E = -m * l - u * A * M, I = -m * u * i + A * M * l * i - c * A * h, w = -m * u * c + A * M * l * c + i * A * h, g = u * h, D = -h * l * i - c * M, v = -h * l * c + M * i;
		if (n === b.Into2000) return new V([
			[
				p,
				x,
				R
			],
			[
				E,
				I,
				w
			],
			[
				g,
				D,
				v
			]
		]);
		if (n === b.From2000) return new V([
			[
				p,
				E,
				g
			],
			[
				x,
				I,
				D
			],
			[
				R,
				w,
				v
			]
		]);
		throw "Invalid precess direction";
	}
	function Y3(t) {
		let n = 360 * ((.779057273264 + .00273781191135448 * t.ut + t.ut % 1) % 1);
		return n < 0 && (n += 360), n;
	}
	let k1;
	function A0(t) {
		if (!k1 || k1.tt !== t.tt) {
			const n = t.tt / 36525;
			let e = 15 * I0(t).ee;
			const o = Y3(t);
			let r = ((e + .014506 + ((((-3.68e-8 * n - 29956e-9) * n - 44e-8) * n + 1.3915817) * n + 4612.156534) * n) / 3600 + o) % 360 / 15;
			r < 0 && (r += 24), k1 = {
				tt: t.tt,
				st: r
			};
		}
		return k1.st;
	}
	function J2(t) {
		return A0(y(t));
	}
	function j3(t, n) {
		const e = t[0] * z, o = t[1] * z, r = t[2] * z, s = Math.hypot(e, o);
		let a, c, i;
		if (s < 1e-6) a = 0, c = r > 0 ? 90 : -90, i = Math.abs(r) - N3;
		else {
			for (a = k * Math.atan2(o, e) - 15 * n; a <= -180;) a += 360;
			for (; a > 180;) a -= 360;
			let u = Math.atan2(r, s), l, h, M, m = 0;
			for (;;) {
				if (++m > 10) throw "inverse_terra failed to converge.";
				l = Math.cos(u), h = Math.sin(u);
				const p = -.006694397995865464 * M0, x = l * l, R = h * h, E = x + v1 * R;
				M = Math.sqrt(E);
				const I = p * h * l / M - r * l + s * h;
				if (Math.abs(I) < 1e-8) break;
				const w = p * ((x - R) / M - R * x * -.006694397995865464 / (p * E)) + r * h + s * l;
				u -= I / w;
			}
			c = k * u;
			const A = M0 / M;
			Math.abs(h) > Math.abs(l) ? i = r / h - v1 * A : i = s / l - A;
		}
		return new gt(c, a, 1e3 * i);
	}
	function It(t, n) {
		const e = t.latitude * _, o = Math.sin(e), r = Math.cos(e), s = 1 / Math.hypot(r, s0 * o), a = v1 * s, c = t.height / 1e3, i = M0 * s + c, u = M0 * a + c, l = (15 * n + t.longitude) * _, h = Math.sin(l), M = Math.cos(l);
		return {
			pos: [
				i * r * M / z,
				i * r * h / z,
				u * o / z
			],
			vel: [
				-7292115e-11 * i * r * h * 86400 / z,
				I3 * i * r * M * 86400 / z,
				0
			]
		};
	}
	function F0(t, n, e) {
		return K2(B1(n, e), t);
	}
	function V2(t, n, e) {
		return W1(B1(n, e), t);
	}
	function B1(t, n) {
		const e = I0(t), o = e.mobl * _, r = e.tobl * _, s = e.dpsi * L0, a = Math.cos(o), c = Math.sin(o), i = Math.cos(r), u = Math.sin(r), l = Math.cos(s), h = Math.sin(s), M = l, m = -h * a, A = -h * c, p = h * i, x = l * a * i + c * u, R = l * c * i - a * u, E = h * u, I = l * a * u - c * i, w = l * c * u + a * i;
		if (n === b.From2000) return new V([
			[
				M,
				p,
				E
			],
			[
				m,
				x,
				I
			],
			[
				A,
				R,
				w
			]
		]);
		if (n === b.Into2000) return new V([
			[
				M,
				m,
				A
			],
			[
				p,
				x,
				R
			],
			[
				E,
				I,
				w
			]
		]);
		throw "Invalid precess direction";
	}
	function K1(t, n, e) {
		return e === b.Into2000 ? V0(F0(t, n, e), n, e) : F0(V0(t, n, e), n, e);
	}
	function Q3(t, n, e) {
		return e === b.Into2000 ? H2(V2(t, n, e), n, e) : V2(H2(t, n, e), n, e);
	}
	function F2(t, n) {
		const e = It(n, A0(t)).pos;
		return K1(e, t, b.Into2000);
	}
	var O = class {
		constructor(t, n, e, o) {
			this.x = t, this.y = n, this.z = e, this.t = o;
		}
		Length() {
			return Math.hypot(this.x, this.y, this.z);
		}
	}, H = class {
		constructor(t, n, e, o, r, s, a) {
			this.x = t, this.y = n, this.z = e, this.vx = o, this.vy = r, this.vz = s, this.t = a;
		}
	}, G0 = class {
		constructor(t, n, e) {
			this.lat = N(t), this.lon = N(n), this.dist = N(e);
		}
	}, H1 = class {
		constructor(t, n, e, o) {
			this.ra = N(t), this.dec = N(n), this.dist = N(e), this.vec = o;
		}
	};
	function q3(t) {
		if (!(t instanceof Array) || t.length !== 3) return !1;
		for (let n = 0; n < 3; ++n) {
			if (!(t[n] instanceof Array) || t[n].length !== 3) return !1;
			for (let e = 0; e < 3; ++e) if (!Number.isFinite(t[n][e])) return !1;
		}
		return !0;
	}
	var V = class {
		constructor(t) {
			this.rot = t;
		}
	};
	function X3(t) {
		if (!q3(t)) throw "Argument must be a [3][3] array of numbers";
		return new V(t);
	}
	var G2 = class {
		constructor(t, n, e, o) {
			this.azimuth = N(t), this.altitude = N(n), this.ra = N(e), this.dec = N(o);
		}
	}, $2 = class {
		constructor(t, n, e) {
			this.vec = t, this.elat = N(n), this.elon = N(e);
		}
	};
	function xt(t, n) {
		return new O(t[0], t[1], t[2], n);
	}
	function Y2(t, n) {
		const e = xt(t, n), o = e.x * e.x + e.y * e.y, r = Math.sqrt(o + e.z * e.z);
		if (o === 0) {
			if (e.z === 0) throw "Indeterminate sky coordinates";
			return new H1(0, e.z < 0 ? -90 : 90, r, e);
		}
		let s = St * Math.atan2(e.y, e.x);
		s < 0 && (s += 24);
		const a = k * Math.atan2(t[2], Math.sqrt(o));
		return new H1(s, a, r, e);
	}
	function $0(t, n) {
		const e = t * _, o = Math.cos(e), r = Math.sin(e);
		return [
			o * n[0] + r * n[1],
			o * n[1] - r * n[0],
			n[2]
		];
	}
	function J1(t, n, e, o, r) {
		let s = y(t);
		Y0(n), N(e), N(o);
		const a = Math.sin(n.latitude * _), c = Math.cos(n.latitude * _), i = Math.sin(n.longitude * _), u = Math.cos(n.longitude * _), l = Math.sin(o * _), h = Math.cos(o * _), M = Math.sin(e * At), m = Math.cos(e * At);
		let A = [
			c * u,
			c * i,
			a
		], p = [
			-a * u,
			-a * i,
			c
		], x = [
			i,
			-u,
			0
		];
		const R = -15 * A0(s);
		let E = $0(R, A), I = $0(R, p), w = $0(R, x), g = [
			h * m,
			h * M,
			l
		];
		const D = g[0] * E[0] + g[1] * E[1] + g[2] * E[2], v = g[0] * I[0] + g[1] * I[1] + g[2] * I[2], L = g[0] * w[0] + g[1] * w[1] + g[2] * w[2];
		let B = Math.hypot(v, L), Q;
		B > 0 ? (Q = -57.29577951308232 * Math.atan2(L, v), Q < 0 && (Q += 360)) : Q = 0;
		let G = k * Math.atan2(B, D), q = e, u0 = o;
		if (r) {
			let r0 = G, _0 = S1(r, 90 - G);
			if (G -= _0, _0 > 0 && G > 3e-4) {
				const l0 = Math.sin(G * _), h0 = Math.cos(G * _), T0 = Math.sin(r0 * _), o1 = Math.cos(r0 * _), P = [];
				for (let f0 = 0; f0 < 3; ++f0) P.push((g[f0] - o1 * E[f0]) / T0 * l0 + E[f0] * h0);
				B = Math.hypot(P[0], P[1]), B > 0 ? (q = St * Math.atan2(P[1], P[0]), q < 0 && (q += 24)) : q = 0, u0 = k * Math.atan2(P[2], B);
			}
		}
		return new G2(Q, 90 - G, q, u0);
	}
	function Y0(t) {
		if (!(t instanceof gt)) throw `Not an instance of the Observer class: ${t}`;
		if (N(t.latitude), N(t.longitude), N(t.height), t.latitude < -90 || t.latitude > 90) throw `Latitude ${t.latitude} is out of range. Must be -90..+90.`;
		return t;
	}
	var gt = class {
		constructor(t, n, e) {
			this.latitude = t, this.longitude = n, this.height = e, Y0(this);
		}
	};
	function j2(t) {
		const n = y(t).AddDays(-1 / D1), e = Q0(Y.Earth, n), [o, r, s] = K1([
			-e.x,
			-e.y,
			-e.z
		], n, b.From2000), a = _ * I0(n).tobl, c = Math.cos(a), i = Math.sin(a);
		return wt(new O(o, r, s, n), c, i);
	}
	function i1(t, n, e, o, r) {
		Y0(e), P1(o), P1(r);
		const s = y(n), a = F2(s, e), c = e0(t, s, r), i = [
			c.x - a[0],
			c.y - a[1],
			c.z - a[2]
		];
		return Y2(o ? K1(i, s, b.From2000) : i, s);
	}
	function W3(t, n, e) {
		const o = y(t);
		let r = It(n, A0(o)).pos;
		return e || (r = K1(r, o, b.Into2000)), xt(r, o);
	}
	function Z3(t, n, e) {
		const o = y(t), r = It(n, A0(o)), s = new H(r.pos[0], r.pos[1], r.pos[2], r.vel[0], r.vel[1], r.vel[2], o);
		return e ? s : Q3(s, o, b.Into2000);
	}
	function t4(t, n) {
		const e = A0(t.t);
		let o = [
			t.x,
			t.y,
			t.z
		];
		return n || (o = V0(o, t.t, b.From2000), o = F0(o, t.t, b.From2000)), j3(o, e);
	}
	function n4(t, n) {
		const e = Math.sin(t * _), o = e * e;
		return 9.7803253359 * (1 + .00193185265241 * o) / Math.sqrt(1 - .00669437999013 * o) * (1 - (3.15704e-7 - 2.10269e-9 * o) * n + 737452e-19 * n * n);
	}
	function wt(t, n, e) {
		const o = t.x, r = t.y * n + t.z * e, s = -t.y * e + t.z * n, a = Math.hypot(o, r);
		let c = 0;
		a > 0 && (c = k * Math.atan2(r, o), c < 0 && (c += 360));
		let i = k * Math.atan2(s, a);
		return new $2(new O(o, r, s, t.t), i, c);
	}
	function c1(t) {
		const n = I0(t.t), [e, o, r] = F0(V0([
			t.x,
			t.y,
			t.z
		], t.t, b.From2000), t.t, b.From2000), s = new O(e, o, r, t.t), a = n.tobl * _;
		return wt(s, Math.cos(a), Math.sin(a));
	}
	function i0(t) {
		const n = y(t), e = x0(n), o = e.distance_au * Math.cos(e.geo_eclip_lat), r = V0(G3(n, [
			o * Math.cos(e.geo_eclip_lon),
			o * Math.sin(e.geo_eclip_lon),
			e.distance_au * Math.sin(e.geo_eclip_lat)
		]), n, b.Into2000);
		return new O(r[0], r[1], r[2], n);
	}
	function V1(t) {
		const n = y(t), e = x0(n), o = e.distance_au * Math.cos(e.geo_eclip_lat), r = [
			o * Math.cos(e.geo_eclip_lon),
			o * Math.sin(e.geo_eclip_lon),
			e.distance_au * Math.sin(e.geo_eclip_lat)
		], s = I0(n), a = xt(F0(L2(s.mobl, r), n, b.From2000), n), c = s.tobl * _, i = wt(a, Math.cos(c), Math.sin(c));
		return new G0(i.elat, i.elon, e.distance_au);
	}
	function u1(t) {
		const n = y(t), e = 1e-5, o = n.AddDays(-1e-5), r = n.AddDays(1e-5), s = i0(o), a = i0(r);
		return new H((s.x + a.x) / 2, (s.y + a.y) / 2, (s.z + a.z) / 2, (a.x - s.x) / (2 * e), (a.y - s.y) / (2 * e), (a.z - s.z) / (2 * e), n);
	}
	function Tt(t) {
		const n = y(t), e = u1(n), o = 82.30056;
		return new H(e.x / o, e.y / o, e.z / o, e.vx / o, e.vy / o, e.vz / o, n);
	}
	function O0(t, n, e) {
		let o = 1, r = 0;
		for (let s of t) {
			let a = 0;
			for (let [i, u, l] of s) a += i * Math.cos(u + n * l);
			let c = o * a;
			e && (c %= n0), r += c, o *= n;
		}
		return r;
	}
	function Nt(t, n) {
		let e = 1, o = 0, r = 0, s = 0;
		for (let a of t) {
			let c = 0, i = 0;
			for (let [u, l, h] of a) {
				let M = l + n * h;
				c += u * h * Math.sin(M), s > 0 && (i += u * Math.cos(M));
			}
			r += s * o * i - e * c, o = e, e *= n, ++s;
		}
		return r;
	}
	const j0 = 365250, Dt = 0, Ot = 1, F1 = 2;
	function Ut(t) {
		return new j(t[0] + 4.4036e-7 * t[1] - 1.90919e-7 * t[2], -4.79966e-7 * t[0] + .917482137087 * t[1] - .397776982902 * t[2], .397776982902 * t[1] + .917482137087 * t[2]);
	}
	function Q2(t, n, e) {
		const o = e * Math.cos(n), r = Math.cos(t), s = Math.sin(t);
		return [
			o * r,
			o * s,
			e * Math.sin(n)
		];
	}
	function Q0(t, n) {
		const e = n.tt / j0;
		return Ut(Q2(O0(t[Dt], e, !0), O0(t[Ot], e, !1), O0(t[F1], e, !1))).ToAstroVector(n);
	}
	function l1(t, n) {
		const e = n / j0, o = O0(t[Dt], e, !0), r = O0(t[Ot], e, !1), s = O0(t[F1], e, !1), a = Nt(t[Dt], e), c = Nt(t[Ot], e), i = Nt(t[F1], e), u = Math.cos(o), l = Math.sin(o), h = Math.cos(r), M = Math.sin(r), m = +(i * h * u) - s * M * u * c - s * h * l * a, A = +(i * h * l) - s * M * l * c + s * h * u * a, p = +(i * M) + s * h * c, x = Q2(o, r, s), R = [
			m / j0,
			A / j0,
			p / j0
		];
		return new v0(n, Ut(x), Ut(R));
	}
	function G1(t, n, e, o) {
		const r = o / (o + a1), s = Q0(Y[e], n);
		t.x += r * s.x, t.y += r * s.y, t.z += r * s.z;
	}
	function e4(t) {
		const n = new O(0, 0, 0, t);
		return G1(n, t, f.Jupiter, k0), G1(n, t, f.Saturn, B0), G1(n, t, f.Uranus, K0), G1(n, t, f.Neptune, H0), n;
	}
	const o4 = 29200, $1 = 146, U0 = [
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
	var j = class p0 {
		constructor(n, e, o) {
			this.x = n, this.y = e, this.z = o;
		}
		clone() {
			return new p0(this.x, this.y, this.z);
		}
		ToAstroVector(n) {
			return new O(this.x, this.y, this.z, n);
		}
		static zero() {
			return new p0(0, 0, 0);
		}
		quadrature() {
			return this.x * this.x + this.y * this.y + this.z * this.z;
		}
		add(n) {
			return new p0(this.x + n.x, this.y + n.y, this.z + n.z);
		}
		sub(n) {
			return new p0(this.x - n.x, this.y - n.y, this.z - n.z);
		}
		incr(n) {
			this.x += n.x, this.y += n.y, this.z += n.z;
		}
		decr(n) {
			this.x -= n.x, this.y -= n.y, this.z -= n.z;
		}
		mul(n) {
			return new p0(n * this.x, n * this.y, n * this.z);
		}
		div(n) {
			return new p0(this.x / n, this.y / n, this.z / n);
		}
		mean(n) {
			return new p0((this.x + n.x) / 2, (this.y + n.y) / 2, (this.z + n.z) / 2);
		}
		neg() {
			return new p0(-this.x, -this.y, -this.z);
		}
	}, v0 = class r2 {
		constructor(n, e, o) {
			this.tt = n, this.r = e, this.v = o;
		}
		clone() {
			return new r2(this.tt, this.r, this.v);
		}
		sub(n) {
			return new r2(this.tt, this.r.sub(n.r), this.v.sub(n.v));
		}
	};
	function r4(t) {
		let [n, [e, o, r], [s, a, c]] = t;
		return new v0(n, new j(e, o, r), new j(s, a, c));
	}
	function W(t, n, e, o) {
		const r = o / (o + a1), s = l1(Y[e], n);
		return t.r.incr(s.r.mul(r)), t.v.incr(s.v.mul(r)), s;
	}
	function h1(t, n, e) {
		const o = e.sub(t), r = o.quadrature();
		return o.mul(n / (r * Math.sqrt(r)));
	}
	var f1 = class {
		constructor(t) {
			let n = new v0(t, new j(0, 0, 0), new j(0, 0, 0));
			this.Jupiter = W(n, t, f.Jupiter, k0), this.Saturn = W(n, t, f.Saturn, B0), this.Uranus = W(n, t, f.Uranus, K0), this.Neptune = W(n, t, f.Neptune, H0), this.Jupiter.r.decr(n.r), this.Jupiter.v.decr(n.v), this.Saturn.r.decr(n.r), this.Saturn.v.decr(n.v), this.Uranus.r.decr(n.r), this.Uranus.v.decr(n.v), this.Neptune.r.decr(n.r), this.Neptune.v.decr(n.v), this.Sun = new v0(t, n.r.mul(-1), n.v.mul(-1));
		}
		Acceleration(t) {
			let n = h1(t, a1, this.Sun.r);
			return n.incr(h1(t, k0, this.Jupiter.r)), n.incr(h1(t, B0, this.Saturn.r)), n.incr(h1(t, K0, this.Uranus.r)), n.incr(h1(t, H0, this.Neptune.r)), n;
		}
	}, vt = class ue {
		constructor(n, e, o, r) {
			this.tt = n, this.r = e, this.v = o, this.a = r;
		}
		clone() {
			return new ue(this.tt, this.r.clone(), this.v.clone(), this.a.clone());
		}
	}, q2 = class {
		constructor(t, n) {
			this.bary = t, this.grav = n;
		}
	};
	function q0(t, n, e, o) {
		return new j(n.x + t * (e.x + t * o.x / 2), n.y + t * (e.y + t * o.y / 2), n.z + t * (e.z + t * o.z / 2));
	}
	function Pt(t, n, e) {
		return new j(n.x + t * e.x, n.y + t * e.y, n.z + t * e.z);
	}
	function zt(t, n) {
		const e = t - n.tt, o = new f1(t), r = q0(e, n.r, n.v, n.a), s = o.Acceleration(r).mean(n.a), a = q0(e, n.r, n.v, s);
		return new q2(o, new vt(t, a, n.v.add(s.mul(e)), o.Acceleration(a)));
	}
	const s4 = [];
	function X2(t, n) {
		const e = Math.floor(t);
		return e < 0 ? 0 : e >= n ? n - 1 : e;
	}
	function Ct(t) {
		const n = r4(t), e = new f1(n.tt), o = n.r.add(e.Sun.r), r = n.v.add(e.Sun.v), s = e.Acceleration(o);
		return new q2(e, new vt(n.tt, o, r, s));
	}
	function a4(t, n) {
		const e = U0[0][0];
		if (n < e || n > U0[50][0]) return null;
		const o = X2((n - e) / o4, 50);
		if (!t[o]) {
			const s = t[o] = [];
			s[0] = Ct(U0[o]).grav, s[200] = Ct(U0[o + 1]).grav;
			let a, c = s[0].tt;
			for (a = 1; a < 200; ++a) s[a] = zt(c += $1, s[a - 1]).grav;
			c = s[200].tt;
			var r = [];
			for (r[200] = s[200], a = 199; a > 0; --a) r[a] = zt(c -= $1, r[a + 1]).grav;
			for (a = 199; a > 0; --a) {
				const i = a / 200;
				s[a].r = s[a].r.mul(1 - i).add(r[a].r.mul(i)), s[a].v = s[a].v.mul(1 - i).add(r[a].v.mul(i)), s[a].a = s[a].a.mul(1 - i).add(r[a].a.mul(i));
			}
		}
		return t[o];
	}
	function W2(t, n, e) {
		let o = Ct(t);
		const r = Math.ceil((n - o.grav.tt) / e);
		for (let s = 0; s < r; ++s) o = zt(s + 1 === r ? n : o.grav.tt + e, o.grav);
		return o;
	}
	function bt(t, n) {
		let e, o, r;
		const s = a4(s4, t.tt);
		if (s) {
			const a = X2((t.tt - s[0].tt) / $1, 200), c = s[a], i = s[a + 1], u = c.a.mean(i.a), l = q0(t.tt - c.tt, c.r, c.v, u), h = Pt(t.tt - c.tt, c.v, u), M = q0(t.tt - i.tt, i.r, i.v, u), m = Pt(t.tt - i.tt, i.v, u), A = (t.tt - c.tt) / $1;
			e = l.mul(1 - A).add(M.mul(A)), o = h.mul(1 - A).add(m.mul(A));
		} else {
			let a;
			t.tt < U0[0][0] ? a = W2(U0[0], t.tt, -146) : a = W2(U0[50], t.tt, 146), e = a.grav.r, o = a.grav.v, r = a.bary;
		}
		return n && (r || (r = new f1(t.tt)), e = e.sub(r.Sun.r), o = o.sub(r.Sun.v)), new H(e.x, e.y, e.z, o.x, o.y, o.z, t);
	}
	const i4 = new V([
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
	var Z2 = class {
		constructor(t, n, e, o) {
			this.io = t, this.europa = n, this.ganymede = e, this.callisto = o;
		}
	};
	function c4(t, n, e) {
		const o = e[0], r = e[1], s = e[2], a = e[3], c = e[4], i = e[5], u = Math.sqrt(n / (o * o * o));
		let l, h, M, m = r + s * Math.sin(r) - a * Math.cos(r);
		do
			l = Math.cos(m), h = Math.sin(m), M = (r - m + s * h - a * l) / (1 - s * l - a * h), m += M;
		while (Math.abs(M) >= 1e-12);
		l = Math.cos(m), h = Math.sin(m);
		const A = a * l - s * h, p = -s * l - a * h, x = 1 / (1 + p), R = 1 / (1 + Math.sqrt(1 - s * s - a * a)), E = o * (l - s - R * a * A), I = o * (h - a + R * s * A), w = u * x * o * (-h - R * a * p), g = u * x * o * (+l + R * s * p), D = 2 * Math.sqrt(1 - c * c - i * i), v = 1 - 2 * i * i, L = 1 - 2 * c * c, B = 2 * i * c;
		return new H(E * v + I * B, E * B + I * L, (c * I - E * i) * D, w * v + g * B, w * B + g * L, (c * g - w * i) * D, t);
	}
	function j1(t, n) {
		const e = t.tt + 18262.5, o = [
			0,
			n.al[0] + e * n.al[1],
			0,
			0,
			0,
			0
		];
		for (let [s, a, c] of n.a) o[0] += s * Math.cos(a + e * c);
		for (let [s, a, c] of n.l) o[1] += s * Math.sin(a + e * c);
		o[1] %= n0, o[1] < 0 && (o[1] += n0);
		for (let [s, a, c] of n.z) {
			const i = a + e * c;
			o[2] += s * Math.cos(i), o[3] += s * Math.sin(i);
		}
		for (let [s, a, c] of n.zeta) {
			const i = a + e * c;
			o[4] += s * Math.cos(i), o[5] += s * Math.sin(i);
		}
		const r = c4(t, n.mu, o);
		return W1(i4, r);
	}
	function u4(t) {
		const n = new R0(t);
		return new Z2(j1(n, Y1[0]), j1(n, Y1[1]), j1(n, Y1[2]), j1(n, Y1[3]));
	}
	function c0(t, n) {
		var e = y(n);
		if (t in Y) return Q0(Y[t], e);
		if (t === f.Pluto) {
			const a = bt(e, !0);
			return new O(a.x, a.y, a.z, e);
		}
		if (t === f.Sun) return new O(0, 0, 0, e);
		if (t === f.Moon) {
			var o = Q0(Y.Earth, e), r = i0(e);
			return new O(o.x + r.x, o.y + r.y, o.z + r.z, e);
		}
		if (t === f.EMB) {
			const a = Q0(Y.Earth, e), c = i0(e), i = 82.30056;
			return new O(a.x + c.x / i, a.y + c.y / i, a.z + c.z / i, e);
		}
		if (t === f.SSB) return e4(e);
		const s = C1(t);
		if (s) return X1(new G0(s.dec, 15 * s.ra, s.dist), e);
		throw `HelioVector: Unknown body "${t}"`;
	}
	function P0(t, n) {
		const e = C1(t);
		if (e) return e.dist;
		const o = y(n);
		return t in Y ? O0(Y[t][F1], o.tt / j0, !1) : c0(t, o).Length();
	}
	function tn(t, n) {
		let e = n, o = 0;
		for (let r = 0; r < 10; ++r) {
			const s = t(e), a = s.Length() / D1;
			if (a > 1) throw "Object is too distant for light-travel solver.";
			const c = n.AddDays(-a);
			if (o = Math.abs(c.tt - e.tt), o < 1e-9) return s;
			e = c;
		}
		throw `Light-travel time solver did not converge: dt = ${o}`;
	}
	var l4 = class {
		constructor(t, n, e, o) {
			this.observerBody = t, this.targetBody = n, this.aberration = e, this.observerPos = o;
		}
		Position(t) {
			this.aberration && (this.observerPos = c0(this.observerBody, t));
			const n = c0(this.targetBody, t);
			return new O(n.x - this.observerPos.x, n.y - this.observerPos.y, n.z - this.observerPos.z, t);
		}
	};
	function nn(t, n, e, o) {
		P1(o);
		const r = y(t);
		if (C1(e)) {
			const c = c0(e, r);
			if (o) {
				const u = Q1(n, r), l = new O(c.x - u.x, c.y - u.y, c.z - u.z, r), h = D1 / l.Length();
				return new O(l.x + u.vx / h, l.y + u.vy / h, l.z + u.vz / h, r);
			}
			const i = c0(n, r);
			return new O(c.x - i.x, c.y - i.y, c.z - i.z, r);
		}
		let s;
		o ? s = new O(0, 0, 0, r) : s = c0(n, r);
		const a = new l4(n, e, o, s);
		return tn((c) => a.Position(c), r);
	}
	function e0(t, n, e) {
		P1(e);
		const o = y(n);
		switch (t) {
			case f.Earth: return new O(0, 0, 0, o);
			case f.Moon: return i0(o);
			default:
				const r = nn(o, f.Earth, t, e);
				return r.t = o, r;
		}
	}
	function z0(t, n) {
		return new H(t.r.x, t.r.y, t.r.z, t.v.x, t.v.y, t.v.z, n);
	}
	function h4(t, n) {
		const e = y(n);
		if (t === f.SSB) return new H(0, 0, 0, 0, 0, 0, e);
		if (t === f.Pluto) return bt(e, !1);
		const o = new f1(e.tt);
		switch (t) {
			case f.Sun: return z0(o.Sun, e);
			case f.Jupiter: return z0(o.Jupiter, e);
			case f.Saturn: return z0(o.Saturn, e);
			case f.Uranus: return z0(o.Uranus, e);
			case f.Neptune: return z0(o.Neptune, e);
			case f.Moon:
			case f.EMB:
				const r = l1(Y[f.Earth], e.tt), s = t === f.Moon ? u1(e) : Tt(e);
				return new H(s.x + o.Sun.r.x + r.r.x, s.y + o.Sun.r.y + r.r.y, s.z + o.Sun.r.z + r.r.z, s.vx + o.Sun.v.x + r.v.x, s.vy + o.Sun.v.y + r.v.y, s.vz + o.Sun.v.z + r.v.z, e);
		}
		if (t in Y) {
			const r = l1(Y[t], e.tt);
			return new H(o.Sun.r.x + r.r.x, o.Sun.r.y + r.r.y, o.Sun.r.z + r.r.z, o.Sun.v.x + r.v.x, o.Sun.v.y + r.v.y, o.Sun.v.z + r.v.z, e);
		}
		throw `BaryState: Unsupported body "${t}"`;
	}
	function Q1(t, n) {
		const e = y(n);
		switch (t) {
			case f.Sun: return new H(0, 0, 0, 0, 0, 0, e);
			case f.SSB:
				const o = new f1(e.tt);
				return new H(-o.Sun.r.x, -o.Sun.r.y, -o.Sun.r.z, -o.Sun.v.x, -o.Sun.v.y, -o.Sun.v.z, e);
			case f.Mercury:
			case f.Venus:
			case f.Earth:
			case f.Mars:
			case f.Jupiter:
			case f.Saturn:
			case f.Uranus:
			case f.Neptune: return z0(l1(Y[t], e.tt), e);
			case f.Pluto: return bt(e, !0);
			case f.Moon:
			case f.EMB:
				const r = l1(Y.Earth, e.tt), s = t == f.Moon ? u1(e) : Tt(e);
				return new H(s.x + r.r.x, s.y + r.r.y, s.z + r.r.z, s.vx + r.v.x, s.vy + r.v.y, s.vz + r.v.z, e);
			default:
				if (C1(t)) {
					const a = c0(t, e);
					return new H(a.x, a.y, a.z, 0, 0, 0, e);
				}
				throw `HelioState: Unsupported body "${t}"`;
		}
	}
	function f4(t, n, e, o, r) {
		let s = (r + e) / 2 - o, a = (r - e) / 2, c = o, i;
		if (s == 0) {
			if (a == 0 || (i = -c / a, i < -1 || i > 1)) return null;
		} else {
			let u = a * a - 4 * s * c;
			if (u <= 0) return null;
			let l = Math.sqrt(u), h = (-a + l) / (2 * s), M = (-a - l) / (2 * s);
			if (-1 <= h && h <= 1) {
				if (-1 <= M && M <= 1) return null;
				i = h;
			} else if (-1 <= M && M <= 1) i = M;
			else return null;
		}
		return {
			t: t + i * n,
			df_dt: (2 * s * i + a) / n
		};
	}
	function F(t, n, e, o) {
		const r = N(o && o.dt_tolerance_seconds || 1), s = Math.abs(r / U1);
		let a = o && o.init_f1 || t(n), c = o && o.init_f2 || t(e), i = NaN, u = 0, l = o && o.iter_limit || 20, h = !0;
		for (;;) {
			if (++u > l) throw "Excessive iteration in Search()";
			let M = V3(n, e, .5), m = M.ut - n.ut;
			if (Math.abs(m) < s) return M;
			h ? i = t(M) : h = !0;
			let A = f4(M.ut, e.ut - M.ut, a, i, c);
			if (A) {
				let p = y(A.t), x = t(p);
				if (A.df_dt !== 0) {
					if (Math.abs(x / A.df_dt) < s) return p;
					let R = 1.2 * Math.abs(x / A.df_dt);
					if (R < m / 10) {
						let E = p.AddDays(-R), I = p.AddDays(+R);
						if ((E.ut - n.ut) * (E.ut - e.ut) < 0 && (I.ut - n.ut) * (I.ut - e.ut) < 0) {
							let w = t(E), g = t(I);
							if (w < 0 && g >= 0) {
								a = w, c = g, n = E, e = I, i = x, h = !1;
								continue;
							}
						}
					}
				}
			}
			if (a < 0 && i >= 0) {
				e = M, c = i;
				continue;
			}
			if (i < 0 && c >= 0) {
				n = M, a = i;
				continue;
			}
			return null;
		}
	}
	function X0(t) {
		let n = t;
		for (; n <= -180;) n += 360;
		for (; n > 180;) n -= 360;
		return n;
	}
	function W0(t) {
		for (; t < 0;) t += 360;
		for (; t >= 360;) t -= 360;
		return t;
	}
	function en(t, n, e) {
		function o(s) {
			return X0(j2(s).elon - t);
		}
		N(t), N(e);
		let r = y(n);
		return F(o, r, r.AddDays(e), { dt_tolerance_seconds: .01 });
	}
	function Lt(t, n, e) {
		if (t === f.Earth || n === f.Earth) throw "The Earth does not have a longitude as seen from itself.";
		const o = y(e), r = c1(e0(t, o, !1)), s = c1(e0(n, o, !1));
		return W0(r.elon - s.elon);
	}
	function Z0(t, n) {
		if (t == f.Earth) throw "The Earth does not have an angle as seen from itself.";
		const e = y(n);
		return z1(e0(f.Sun, e, !0), e0(t, e, !0));
	}
	function C0(t, n) {
		if (t === f.Sun) throw "Cannot calculate heliocentric longitude of the Sun.";
		return c1(c0(t, n)).elon;
	}
	function d4(t, n, e, o) {
		let r, s = 0, a = 0, c = 0;
		switch (t) {
			case f.Mercury:
				r = -.6, s = 4.98, a = -4.88, c = 3.02;
				break;
			case f.Venus:
				n < 163.6 ? (r = -4.47, s = 1.03, a = .57, c = .13) : (r = .98, s = -1.02);
				break;
			case f.Mars:
				r = -1.52, s = 1.6;
				break;
			case f.Jupiter:
				r = -9.4, s = .5;
				break;
			case f.Uranus:
				r = -7.19, s = .25;
				break;
			case f.Neptune:
				r = -6.87;
				break;
			case f.Pluto:
				r = -1, s = 4;
				break;
			default: throw `VisualMagnitude: unsupported body ${t}`;
		}
		const i = n / 100;
		let u = r + i * (s + i * (a + i * c));
		return u += 5 * Math.log10(e * o), u;
	}
	function M4(t, n, e, o, r) {
		const s = c1(o), a = _ * 28.06, c = _ * (169.51 + 382e-7 * r.tt), i = _ * s.elat, u = _ * s.elon, l = Math.asin(Math.sin(i) * Math.cos(a) - Math.cos(i) * Math.sin(a) * Math.sin(u - c)), h = Math.sin(Math.abs(l));
		let M = -9 + .044 * t;
		return M += h * (-2.6 + 1.2 * h), M += 5 * Math.log10(n * e), {
			mag: M,
			ring_tilt: k * l
		};
	}
	function A4(t, n, e) {
		let o = t * _, r = o * o, s = r * r, a = -12.717 + 1.49 * Math.abs(o) + .0431 * s, c = e / (385000.6 / z);
		return a += 5 * Math.log10(n * c), a;
	}
	var on = class {
		constructor(t, n, e, o, r, s, a, c) {
			this.time = t, this.mag = n, this.phase_angle = e, this.helio_dist = o, this.geo_dist = r, this.gc = s, this.hc = a, this.ring_tilt = c, this.phase_fraction = (1 + Math.cos(_ * e)) / 2;
		}
	};
	function q1(t, n) {
		if (t === f.Earth) throw "The illumination of the Earth is not defined.";
		const e = y(n), o = Q0(Y.Earth, e);
		let r, s, a, c;
		t === f.Sun ? (a = new O(-o.x, -o.y, -o.z, e), s = new O(0, 0, 0, e), r = 0) : (t === f.Moon ? (a = i0(e), s = new O(o.x + a.x, o.y + a.y, o.z + a.z, e)) : (s = c0(t, n), a = new O(s.x - o.x, s.y - o.y, s.z - o.z, e)), r = z1(a, s));
		let i = a.Length(), u = s.Length(), l;
		if (t === f.Sun) c = g3 + 5 * Math.log10(i);
		else if (t === f.Moon) c = A4(r, u, i);
		else if (t === f.Saturn) {
			const h = M4(r, u, i, a, e);
			c = h.mag, l = h.ring_tilt;
		} else c = d4(t, r, u, i);
		return new on(e, c, r, u, i, a, s, l);
	}
	function d1(t) {
		if (t === f.Earth) throw "The Earth does not have a synodic period as seen from itself.";
		if (t === f.Moon) return O1;
		let n = a0[t];
		if (!n) throw `Not a valid planet name: ${t}`;
		const e = a0.Earth.OrbitalPeriod, o = n.OrbitalPeriod;
		return Math.abs(e / (e / o - 1));
	}
	function t1(t, n, e) {
		N(n);
		const o = a0[t];
		if (!o) throw `Cannot search relative longitude because body is not a planet: ${t}`;
		if (t === f.Earth) throw "Cannot search relative longitude for the Earth (it is always 0)";
		const r = o.OrbitalPeriod > a0.Earth.OrbitalPeriod ? 1 : -1;
		function s(u) {
			const l = C0(t, u), h = C0(f.Earth, u);
			return X0(r * (h - l) - n);
		}
		let a = d1(t), c = y(e), i = s(c);
		i > 0 && (i -= 360);
		for (let u = 0; u < 100; ++u) {
			let l = -i / 360 * a;
			if (c = c.AddDays(l), Math.abs(l) * U1 < 1) return c;
			let h = i;
			if (i = s(c), Math.abs(h) < 30 && h !== i) {
				let M = h / (h - i);
				M > .5 && M < 2 && (a *= M);
			}
		}
		throw `Relative longitude search failed to converge for ${t} near ${c.toString()} (error_angle = ${i}).`;
	}
	function kt(t) {
		return Lt(f.Moon, f.Sun, t);
	}
	function M1(t, n, e) {
		function o(l) {
			return X0(kt(l) - t);
		}
		N(t), N(e);
		const r = 1.5, s = y(n);
		let a = o(s), c, i, u;
		if (e < 0) {
			if (a < 0 && (a += 360), c = -(O1 * a) / 360, u = c + r, u < e) return null;
			i = Math.max(e, c - r);
		} else {
			if (a > 0 && (a -= 360), c = -(O1 * a) / 360, i = c - r, i > e) return null;
			u = Math.min(e, c + r);
		}
		return F(o, s.AddDays(i), s.AddDays(u), { dt_tolerance_seconds: .1 });
	}
	var rn = class {
		constructor(t, n) {
			this.quarter = t, this.time = n;
		}
	};
	function sn(t) {
		let n = kt(t), e = (Math.floor(n / 90) + 1) % 4, o = M1(90 * e, t, 10);
		if (!o) throw "Cannot find moon quarter";
		return new rn(e, o);
	}
	function S4(t) {
		return sn(new Date(t.time.date.getTime() + 6 * w3));
	}
	var an = class {
		constructor(t, n, e) {
			this.pressure = t, this.temperature = n, this.density = e;
		}
	};
	function cn(t) {
		if (!Number.isFinite(t) || t < -500 || t > 1e5) throw `Invalid elevation: ${t}`;
		let r, s;
		t <= 11e3 ? (r = 288.15 - .0065 * t, s = 101325 * Math.pow(288.15 / r, -5.25577)) : t <= 2e4 ? (r = 216.65, s = 22632 * Math.exp(-.00015768832 * (t - 11e3))) : (r = 216.65 + .001 * (t - 2e4), s = 5474.87 * Math.pow(216.65 / r, 34.16319));
		const a = s / r / (101325 / 288.15);
		return new an(s, r, a);
	}
	function _4(t, n) {
		const e = t.latitude * _, o = Math.sin(e), r = Math.cos(e), s = 1 / Math.hypot(r, o * s0), a = s * (s0 * s0), c = (t.height - n) / 1e3, i = M0 * s + c, u = M0 * a + c, l = 1e3 * Math.hypot(i * r, u * o), h = .175 * Math.pow(1 - .0065 / 283.15 * (t.height - 2 / 3 * n), 3.256);
		return k * -(Math.sqrt(2 * (1 - h) * n / l) / (1 - h));
	}
	function E4(t) {
		switch (t) {
			case f.Sun: return O2;
			case f.Moon: return U3;
			default: return 0;
		}
	}
	function p4(t, n, e, o, r, s = 0) {
		if (!Number.isFinite(s) || s < 0) throw `Invalid value for metersAboveGround: ${s}`;
		const a = E4(t), c = cn(n.height - s);
		return un(t, n, e, o, r, a, _4(n, s) - P3 * c.density);
	}
	function m4(t, n, e, o, r, s) {
		if (!Number.isFinite(s) || s < -90 || s > 90) throw `Invalid altitude angle: ${s}`;
		return un(t, n, e, o, r, 0, s);
	}
	var y4 = class {
		constructor(t, n, e, o) {
			this.tx = t, this.ty = n, this.ax = e, this.ay = o;
		}
	};
	function Bt(t, n, e, o, r, s, a) {
		if (s < 0 && a >= 0) return new y4(o, r, s, a);
		if (s >= 0 && a < 0) return null;
		if (t > 17) throw "Excessive recursion in rise/set ascent search.";
		const c = r.ut - o.ut;
		if (c * U1 < 1 || Math.min(Math.abs(s), Math.abs(a)) > e * (c / 2)) return null;
		const i = new R0((o.ut + r.ut) / 2), u = n(i);
		return Bt(1 + t, n, e, o, i, s, u) || Bt(1 + t, n, e, i, r, u, a);
	}
	function R4(t, n) {
		if (n < -90 || n > 90) throw `Invalid geographic latitude: ${n}`;
		let e, o;
		switch (t) {
			case f.Moon:
				e = 4.5, o = 8.2;
				break;
			case f.Sun:
				e = .8, o = .5;
				break;
			case f.Mercury:
				e = -1.6, o = 1;
				break;
			case f.Venus:
				e = -.8, o = .6;
				break;
			case f.Mars:
				e = -.5, o = .4;
				break;
			case f.Jupiter:
			case f.Saturn:
			case f.Uranus:
			case f.Neptune:
			case f.Pluto:
				e = -.2, o = .2;
				break;
			case f.Star1:
			case f.Star2:
			case f.Star3:
			case f.Star4:
			case f.Star5:
			case f.Star6:
			case f.Star7:
			case f.Star8:
				e = -.008, o = .008;
				break;
			default: throw `Body not allowed for altitude search: ${t}`;
		}
		const r = _ * n;
		return Math.abs((360 / D2 - e) * Math.cos(r)) + Math.abs(o * Math.sin(r));
	}
	function un(t, n, e, o, r, s, a) {
		if (Y0(n), N(r), N(s), N(a), a < -90 || a > 90) throw `Invalid target altitude angle: ${a}`;
		const c = R4(t, n.latitude);
		function i(A) {
			const p = i1(t, A, n, !0, !0);
			return e * (J1(A, n, p.ra, p.dec).altitude + k * Math.asin(s / p.dist) - a);
		}
		const u = y(o);
		let l = u, h = u, M = i(l), m = M;
		for (;;) {
			r < 0 ? (l = h.AddDays(-.42), M = i(l)) : (h = l.AddDays(.42), m = i(h));
			const A = Bt(0, i, c, l, h, M, m);
			if (A) {
				const p = F(i, A.tx, A.ty, {
					dt_tolerance_seconds: .1,
					init_f1: A.ax,
					init_f2: A.ay
				});
				if (p) {
					if (r < 0) {
						if (p.ut < u.ut + r) return null;
					} else if (p.ut > u.ut + r) return null;
					return p;
				}
				throw `Rise/set search failed after finding ascent: t1=${l}, t2=${h}, a1=${M}, a2=${m}`;
			}
			if (r < 0) {
				if (l.ut < u.ut + r) return null;
				h = l, m = M;
			} else {
				if (h.ut > u.ut + r) return null;
				l = h, M = m;
			}
		}
	}
	var ln = class {
		constructor(t, n) {
			this.time = t, this.hor = n;
		}
	};
	function I4(t, n, e, o, r = 1) {
		Y0(n);
		let s = y(o), a = 0;
		if (t === f.Earth) throw "Cannot search for hour angle of the Earth.";
		if (N(e), e < 0 || e >= 24) throw `Invalid hour angle ${e}`;
		if (N(r), r === 0) throw "Direction must be positive or negative.";
		for (;;) {
			++a;
			let c = A0(s), i = i1(t, s, n, !0, !0), u = (e + i.ra - n.longitude / 15 - c) % 24;
			if (a === 1 ? r > 0 ? u < 0 && (u += 24) : u > 0 && (u -= 24) : u < -12 ? u += 24 : u > 12 && (u -= 24), Math.abs(u) * 3600 < .1) {
				const h = J1(s, n, i.ra, i.dec, "normal");
				return new ln(s, h);
			}
			let l = u / 24 * D2;
			s = s.AddDays(l);
		}
	}
	function x4(t, n, e) {
		const o = y(n), r = J2(o), s = i1(t, o, e, !0, !0);
		let a = (e.longitude / 15 + r - s.ra) % 24;
		return a < 0 && (a += 24), a;
	}
	var hn = class {
		constructor(t, n, e, o) {
			this.mar_equinox = t, this.jun_solstice = n, this.sep_equinox = e, this.dec_solstice = o;
		}
	};
	function g4(t) {
		function n(a, c, i) {
			let u = new Date(Date.UTC(t, c - 1, i)), l = en(a, u, 20);
			if (!l) throw `Cannot find season change near ${u.toISOString()}`;
			return l;
		}
		if (t instanceof Date && Number.isFinite(t.getTime()) && (t = t.getUTCFullYear()), !Number.isSafeInteger(t)) throw `Cannot calculate seasons because year argument ${t} is neither a Date nor a safe integer.`;
		return new hn(n(0, 3, 10), n(90, 6, 10), n(180, 9, 10), n(270, 12, 10));
	}
	var fn = class {
		constructor(t, n, e, o) {
			this.time = t, this.visibility = n, this.elongation = e, this.ecliptic_separation = o;
		}
	};
	function dn(t, n) {
		let e = y(n), o = Lt(t, f.Sun, e), r;
		o > 180 ? (r = "morning", o = 360 - o) : r = "evening";
		let s = Z0(t, e);
		return new fn(e, r, s, o);
	}
	function w4(t, n) {
		function o(c) {
			const i = c.AddDays(-.005), u = c.AddDays(.01 / 2);
			return (Z0(t, i) - Z0(t, u)) / .01;
		}
		let r = y(n);
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
			let c = X0(C0(t, r) - C0(f.Earth, r)), i, u, l;
			c >= -s.s1 && c < +s.s1 ? (l = 0, i = +s.s1, u = +s.s2) : c >= +s.s2 || c < -s.s2 ? (l = 0, i = -s.s2, u = -s.s1) : c >= 0 ? (l = -d1(t) / 4, i = +s.s1, u = +s.s2) : (l = -d1(t) / 4, i = -s.s2, u = -s.s1);
			let h = r.AddDays(l), M = t1(t, i, h), m = t1(t, u, M), A = o(M);
			if (A >= 0) throw `SearchMaxElongation: internal error: m1 = ${A}`;
			let p = o(m);
			if (p <= 0) throw `SearchMaxElongation: internal error: m2 = ${p}`;
			let x = F(o, M, m, {
				init_f1: A,
				init_f2: p,
				dt_tolerance_seconds: 10
			});
			if (!x) throw `SearchMaxElongation: failed search iter ${a} (t1=${M.toString()}, t2=${m.toString()})`;
			if (x.tt >= r.tt) return dn(t, x);
			r = m.AddDays(1);
		}
		throw "SearchMaxElongation: failed to find event after 2 tries.";
	}
	function T4(t, n) {
		if (t !== f.Venus) throw "SearchPeakMagnitude currently works for Venus only.";
		const e = .01;
		function o(a) {
			const c = a.AddDays(-.005), i = a.AddDays(.01 / 2), u = q1(t, c).mag;
			return (q1(t, i).mag - u) / e;
		}
		let r = y(n), s = 0;
		for (; ++s <= 2;) {
			let a = X0(C0(t, r) - C0(f.Earth, r)), c, i, u;
			a >= -10 && a < 10 ? (u = 0, c = 10, i = 30) : a >= 30 || a < -30 ? (u = 0, c = -30, i = -10) : a >= 0 ? (u = -d1(t) / 4, c = 10, i = 30) : (u = -d1(t) / 4, c = -30, i = -10);
			let l = r.AddDays(u), h = t1(t, c, l), M = t1(t, i, h), m = o(h);
			if (m >= 0) throw `SearchPeakMagnitude: internal error: m1 = ${m}`;
			let A = o(M);
			if (A <= 0) throw `SearchPeakMagnitude: internal error: m2 = ${A}`;
			let p = F(o, h, M, {
				init_f1: m,
				init_f2: A,
				dt_tolerance_seconds: 10
			});
			if (!p) throw `SearchPeakMagnitude: failed search iter ${s} (t1=${h.toString()}, t2=${M.toString()})`;
			if (p.tt >= r.tt) return q1(t, p);
			r = M.AddDays(1);
		}
		throw "SearchPeakMagnitude: failed to find event after 2 tries.";
	}
	var g0;
	(function(t) {
		t[t.Pericenter = 0] = "Pericenter", t[t.Apocenter = 1] = "Apocenter";
	})(g0 || (g0 = {}));
	var A1 = class {
		constructor(t, n, e) {
			this.time = t, this.kind = n, this.dist_au = e, this.dist_km = e * z;
		}
	};
	function Mn(t) {
		function e(i) {
			let u = i.AddDays(-5e-4), l = i.AddDays(.001 / 2), h = x0(u).distance_au;
			return (x0(l).distance_au - h) / .001;
		}
		function o(i) {
			return -e(i);
		}
		let r = y(t), s = e(r);
		const a = 5;
		for (var c = 0; c * a < 2 * O1; ++c) {
			let i = r.AddDays(a), u = e(i);
			if (s * u <= 0) {
				if (s < 0 || u > 0) {
					let l = F(e, r, i, {
						init_f1: s,
						init_f2: u
					});
					if (!l) throw "SearchLunarApsis INTERNAL ERROR: perigee search failed!";
					let h = x0(l).distance_au;
					return new A1(l, 0, h);
				}
				if (s > 0 || u < 0) {
					let l = F(o, r, i, {
						init_f1: -s,
						init_f2: -u
					});
					if (!l) throw "SearchLunarApsis INTERNAL ERROR: apogee search failed!";
					let h = x0(l).distance_au;
					return new A1(l, 1, h);
				}
				throw "SearchLunarApsis INTERNAL ERROR: cannot classify apsis event!";
			}
			r = i, s = u;
		}
		throw "SearchLunarApsis INTERNAL ERROR: could not find apsis within 2 synodic months of start date.";
	}
	function N4(t) {
		let n = Mn(t.time.AddDays(11));
		if (n.kind + t.kind !== 1) throw `NextLunarApsis INTERNAL ERROR: did not find alternating apogee/perigee: prev=${t.kind} @ ${t.time.toString()}, next=${n.kind} @ ${n.time.toString()}`;
		return n;
	}
	function An(t, n, e, o) {
		const r = n === g0.Apocenter ? 1 : -1, s = 10;
		for (;;) {
			const a = o / 9;
			if (a < 1 / 1440) {
				const u = e.AddDays(a / 2);
				return new A1(u, n, P0(t, u));
			}
			let c = -1, i = 0;
			for (let u = 0; u < s; ++u) {
				const l = r * P0(t, e.AddDays(u * a));
				(u == 0 || l > i) && (c = u, i = l);
			}
			e = e.AddDays((c - 1) * a), o = 2 * a;
		}
	}
	function D4(t, n) {
		const o = n.AddDays(a0[t].OrbitalPeriod * -.08333333333333333), r = n.AddDays(a0[t].OrbitalPeriod * (270 / 360));
		let s = o, a = o, c = -1, i = -1;
		const u = (r.ut - o.ut) / 99;
		for (let M = 0; M < 100; ++M) {
			const m = o.AddDays(M * u), A = P0(t, m);
			M === 0 ? i = c = A : (A > i && (i = A, a = m), A < c && (c = A, s = m));
		}
		const l = An(t, 0, s.AddDays(-2 * u), 4 * u), h = An(t, 1, a.AddDays(-2 * u), 4 * u);
		if (l.time.tt >= n.tt) return h.time.tt >= n.tt && h.time.tt < l.time.tt ? h : l;
		if (h.time.tt >= n.tt) return h;
		throw "Internal error: failed to find Neptune apsis.";
	}
	function Sn(t, n) {
		if (n = y(n), t === f.Neptune || t === f.Pluto) return D4(t, n);
		function e(i) {
			let l = i.AddDays(-5e-4), h = i.AddDays(.001 / 2), M = P0(t, l);
			return (P0(t, h) - M) / .001;
		}
		function o(i) {
			return -e(i);
		}
		const r = a0[t].OrbitalPeriod, s = r / 6;
		let a = n, c = e(a);
		for (let i = 0; i * s < 2 * r; ++i) {
			const u = a.AddDays(s), l = e(u);
			if (c * l <= 0) {
				let h, M;
				if (c < 0 || l > 0) h = e, M = g0.Pericenter;
				else if (c > 0 || l < 0) h = o, M = g0.Apocenter;
				else throw "Internal error with slopes in SearchPlanetApsis";
				const m = F(h, a, u);
				if (!m) throw "Failed to find slope transition in planetary apsis search.";
				const A = P0(t, m);
				return new A1(m, M, A);
			}
			a = u, c = l;
		}
		throw "Internal error: should have found planetary apsis within 2 orbital periods.";
	}
	function O4(t, n) {
		if (n.kind !== g0.Pericenter && n.kind !== g0.Apocenter) throw `Invalid apsis kind: ${n.kind}`;
		const e = .25 * a0[t].OrbitalPeriod, o = Sn(t, n.time.AddDays(e));
		if (o.kind + n.kind !== 1) throw `Internal error: previous apsis was ${n.kind}, but found ${o.kind} for next apsis.`;
		return o;
	}
	function n1(t) {
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
	function w0(t, n) {
		return new V([
			[
				n.rot[0][0] * t.rot[0][0] + n.rot[1][0] * t.rot[0][1] + n.rot[2][0] * t.rot[0][2],
				n.rot[0][1] * t.rot[0][0] + n.rot[1][1] * t.rot[0][1] + n.rot[2][1] * t.rot[0][2],
				n.rot[0][2] * t.rot[0][0] + n.rot[1][2] * t.rot[0][1] + n.rot[2][2] * t.rot[0][2]
			],
			[
				n.rot[0][0] * t.rot[1][0] + n.rot[1][0] * t.rot[1][1] + n.rot[2][0] * t.rot[1][2],
				n.rot[0][1] * t.rot[1][0] + n.rot[1][1] * t.rot[1][1] + n.rot[2][1] * t.rot[1][2],
				n.rot[0][2] * t.rot[1][0] + n.rot[1][2] * t.rot[1][1] + n.rot[2][2] * t.rot[1][2]
			],
			[
				n.rot[0][0] * t.rot[2][0] + n.rot[1][0] * t.rot[2][1] + n.rot[2][0] * t.rot[2][2],
				n.rot[0][1] * t.rot[2][0] + n.rot[1][1] * t.rot[2][1] + n.rot[2][1] * t.rot[2][2],
				n.rot[0][2] * t.rot[2][0] + n.rot[1][2] * t.rot[2][1] + n.rot[2][2] * t.rot[2][2]
			]
		]);
	}
	function U4() {
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
	function v4(t, n, e) {
		if (n !== 0 && n !== 1 && n !== 2) throw `Invalid axis ${n}. Must be [0, 1, 2].`;
		const o = N(e) * _, r = Math.cos(o), s = Math.sin(o), a = (n + 1) % 3, c = (n + 2) % 3, i = n;
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
		return u[a][a] = r * t.rot[a][a] - s * t.rot[a][c], u[a][c] = s * t.rot[a][a] + r * t.rot[a][c], u[a][i] = t.rot[a][i], u[c][a] = r * t.rot[c][a] - s * t.rot[c][c], u[c][c] = s * t.rot[c][a] + r * t.rot[c][c], u[c][i] = t.rot[c][i], u[i][a] = r * t.rot[i][a] - s * t.rot[i][c], u[i][c] = s * t.rot[i][a] + r * t.rot[i][c], u[i][i] = t.rot[i][i], new V(u);
	}
	function X1(t, n) {
		n = y(n);
		const e = t.lat * _, o = t.lon * _, r = t.dist * Math.cos(e);
		return new O(r * Math.cos(o), r * Math.sin(o), t.dist * Math.sin(e), n);
	}
	function Kt(t) {
		const n = Ht(t);
		return new H1(n.lon / 15, n.lat, n.dist, t);
	}
	function Ht(t) {
		const n = t.x * t.x + t.y * t.y, e = Math.sqrt(n + t.z * t.z);
		let o, r;
		if (n === 0) {
			if (t.z === 0) throw "Zero-length vector not allowed.";
			r = 0, o = t.z < 0 ? -90 : 90;
		} else r = k * Math.atan2(t.y, t.x), r < 0 && (r += 360), o = k * Math.atan2(t.z, Math.sqrt(n));
		return new G0(o, r, e);
	}
	function _n(t) {
		return t = 360 - t, t >= 360 ? t -= 360 : t < 0 && (t += 360), t;
	}
	function P4(t, n) {
		const e = Ht(t);
		return e.lon = _n(e.lon), e.lat += S1(n, e.lat), e;
	}
	function z4(t, n, e) {
		n = y(n);
		const o = _n(t.lon);
		return X1(new G0(t.lat + En(e, t.lat), o, t.dist), n);
	}
	function S1(t, n) {
		let e;
		if (N(n), n < -90 || n > 90) return 0;
		if (t === "normal" || t === "jplhor") {
			let o = n;
			o < -1 && (o = -1), e = 1.02 / Math.tan((o + 10.3 / (o + 5.11)) * _) / 60, t === "normal" && n < -1 && (e *= (n + 90) / 89);
		} else if (!t) e = 0;
		else throw `Invalid refraction option: ${t}`;
		return e;
	}
	function En(t, n) {
		if (n < -90 || n > 90) return 0;
		let e = n - S1(t, n);
		for (;;) {
			let o = e + S1(t, e) - n;
			if (Math.abs(o) < 1e-14) return e - n;
			e -= o;
		}
	}
	function _1(t, n) {
		return new O(t.rot[0][0] * n.x + t.rot[1][0] * n.y + t.rot[2][0] * n.z, t.rot[0][1] * n.x + t.rot[1][1] * n.y + t.rot[2][1] * n.z, t.rot[0][2] * n.x + t.rot[1][2] * n.y + t.rot[2][2] * n.z, n.t);
	}
	function W1(t, n) {
		return new H(t.rot[0][0] * n.x + t.rot[1][0] * n.y + t.rot[2][0] * n.z, t.rot[0][1] * n.x + t.rot[1][1] * n.y + t.rot[2][1] * n.z, t.rot[0][2] * n.x + t.rot[1][2] * n.y + t.rot[2][2] * n.z, t.rot[0][0] * n.vx + t.rot[1][0] * n.vy + t.rot[2][0] * n.vz, t.rot[0][1] * n.vx + t.rot[1][1] * n.vy + t.rot[2][1] * n.vz, t.rot[0][2] * n.vx + t.rot[1][2] * n.vy + t.rot[2][2] * n.vz, n.t);
	}
	function pn() {
		return new V([
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
	function C4() {
		return new V([
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
		return t = y(t), w0(L1(t, b.From2000), B1(t, b.From2000));
	}
	function b4(t) {
		const n = y(t);
		return w0(Z1(n), wn(n));
	}
	function L4(t) {
		const n = y(t);
		return w0(gn(n), tt(n));
	}
	function tt(t) {
		return t = y(t), w0(B1(t, b.Into2000), L1(t, b.Into2000));
	}
	function Jt(t, n) {
		t = y(t);
		const e = Math.sin(n.latitude * _), o = Math.cos(n.latitude * _), r = Math.sin(n.longitude * _), s = Math.cos(n.longitude * _), a = [
			o * s,
			o * r,
			e
		], c = [
			-e * s,
			-e * r,
			o
		], i = [
			r,
			-s,
			0
		], u = -15 * A0(t), l = $0(u, a), h = $0(u, c), M = $0(u, i);
		return new V([
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
	function mn(t, n) {
		return n1(Jt(t, n));
	}
	function yn(t, n) {
		return t = y(t), w0(mn(t, n), tt(t));
	}
	function k4(t, n) {
		return n1(yn(t, n));
	}
	function Rn(t) {
		return w0(tt(t), pn());
	}
	function In(t) {
		return n1(Rn(t));
	}
	function xn(t, n) {
		return t = y(t), w0(In(t), Jt(t, n));
	}
	function B4(t, n) {
		return n1(xn(t, n));
	}
	function K4() {
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
	function H4() {
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
	function gn(t) {
		const n = I0(y(t)).tobl * _, e = Math.cos(n), o = Math.sin(n);
		return new V([
			[
				1,
				0,
				0
			],
			[
				0,
				+e,
				+o
			],
			[
				0,
				-o,
				+e
			]
		]);
	}
	function wn(t) {
		const n = I0(y(t)).tobl * _, e = Math.cos(n), o = Math.sin(n);
		return new V([
			[
				1,
				0,
				0
			],
			[
				0,
				+e,
				-o
			],
			[
				0,
				+o,
				+e
			]
		]);
	}
	const J4 = [
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
	], V4 = [
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
	let Vt, Tn;
	var Nn = class {
		constructor(t, n, e, o) {
			this.symbol = t, this.name = n, this.ra1875 = e, this.dec1875 = o;
		}
	};
	function F4(t, n) {
		if (N(t), N(n), n < -90 || n > 90) throw "Invalid declination angle. Must be -90..+90.";
		t %= 24, t < 0 && (t += 24), Vt || (Vt = Z1(new R0(-45655.74141261017)), Tn = new R0(0));
		const e = X1(new G0(n, 15 * t, 1), Tn), o = Kt(_1(Vt, e)), r = 10 / 240, s = r / 15;
		for (let a of V4) {
			const c = a[3] * r, i = a[1] * s, u = a[2] * s;
			if (c <= o.dec && i <= o.ra && o.ra < u) {
				const l = J4[a[0]];
				return new Nn(l[0], l[1], o.ra, o.dec);
			}
		}
		throw "Unable to find constellation for given coordinates.";
	}
	var Z;
	(function(t) {
		t.Penumbral = "penumbral", t.Partial = "partial", t.Annular = "annular", t.Total = "total";
	})(Z || (Z = {}));
	var Dn = class {
		constructor(t, n, e, o, r, s) {
			this.kind = t, this.obscuration = n, this.peak = e, this.sd_penum = o, this.sd_partial = r, this.sd_total = s;
		}
	}, G4 = class {
		constructor(t, n, e, o, r, s, a) {
			this.time = t, this.u = n, this.r = e, this.k = o, this.p = r, this.target = s, this.dir = a;
		}
	};
	function E1(t, n, e, o) {
		const r = (o.x * e.x + o.y * e.y + o.z * e.z) / (o.x * o.x + o.y * o.y + o.z * o.z), s = r * o.x - e.x, a = r * o.y - e.y, c = r * o.z - e.z;
		return new G4(n, r, z * Math.hypot(s, a, c), 695700 - (1 + r) * (_t - t), -695700 + (1 + r) * (_t + t), e, o);
	}
	function nt(t) {
		const n = e0(f.Sun, t, !0), e = new O(-n.x, -n.y, -n.z, n.t), o = i0(t);
		return E1(O3, t, o, e);
	}
	function On(t) {
		const n = e0(f.Sun, t, !0), e = i0(t), o = new O(-e.x, -e.y, -e.z, e.t);
		return e.x -= n.x, e.y -= n.y, e.z -= n.z, E1(X, t, o, e);
	}
	function Ft(t, n) {
		const e = F2(t, n), o = e0(f.Sun, t, !0), r = i0(t), s = new O(e[0] - r.x, e[1] - r.y, e[2] - r.z, t);
		return r.x -= o.x, r.y -= o.y, r.z -= o.z, E1(X, t, s, r);
	}
	function et(t, n, e) {
		const o = e0(t, e, !0), r = e0(f.Sun, e, !0), s = new O(o.x - r.x, o.y - r.y, o.z - r.z, e);
		return r.x = -o.x, r.y = -o.y, r.z = -o.z, E1(n, e, r, s);
	}
	function Gt(t, n) {
		const e = 11574074074074073e-21, o = n.AddDays(-11574074074074073e-21), r = n.AddDays(11574074074074073e-21), s = t(o);
		return (t(r).r - s.r) / e;
	}
	function $4(t, n, e) {
		const o = 11574074074074073e-21, r = et(t, n, e.AddDays(-11574074074074073e-21));
		return (et(t, n, e.AddDays(11574074074074073e-21)).r - r.r) / o;
	}
	function Y4(t) {
		const n = F((e) => Gt(nt, e), t.AddDays(-.03), t.AddDays(.03));
		if (!n) throw "Failed to find peak Earth shadow time.";
		return nt(n);
	}
	function j4(t) {
		const n = F((e) => Gt(On, e), t.AddDays(-.03), t.AddDays(.03));
		if (!n) throw "Failed to find peak Moon shadow time.";
		return On(n);
	}
	function Q4(t, n, e) {
		const o = F((r) => $4(t, n, r), e.AddDays(-1), e.AddDays(1));
		if (!o) throw "Failed to find peak planet shadow time.";
		return et(t, n, o);
	}
	function q4(t, n) {
		const e = t.AddDays(-.2), o = t.AddDays(.2);
		function r(a) {
			return Ft(a, n);
		}
		const s = F((a) => Gt(r, a), e, o);
		if (!s) throw `PeakLocalMoonShadow: search failure for search_center_time = ${t}`;
		return Ft(s, n);
	}
	function $t(t, n, e) {
		const o = e / 1440, r = t.AddDays(-o), s = t.AddDays(+o), a = F((i) => -(nt(i).r - n), r, t), c = F((i) => +(nt(i).r - n), t, s);
		if (!a || !c) throw "Failed to find shadow semiduration";
		return (c.ut - a.ut) * (1440 / 2);
	}
	function Yt(t) {
		const n = x0(t);
		return k * n.geo_eclip_lat;
	}
	function Un(t, n, e) {
		if (t <= 0) throw "Radius of first disc must be positive.";
		if (n <= 0) throw "Radius of second disc must be positive.";
		if (e < 0) throw "Distance between discs is not allowed to be negative.";
		if (e >= t + n) return 0;
		if (e == 0) return t <= n ? 1 : n * n / (t * t);
		const o = (t * t - n * n + e * e) / (2 * e), r = t * t - o * o;
		if (r <= 0) return t <= n ? 1 : n * n / (t * t);
		const s = Math.sqrt(r);
		return (t * t * Math.acos(o / t) - o * s + (n * n * Math.acos((e - o) / n) - (e - o) * s)) / (Math.PI * t * t);
	}
	function vn(t, n) {
		const e = new O(t.x + n.x, t.y + n.y, t.z + n.z, t.t), o = Un(Math.asin(O2 / e.Length()), Math.asin(v3 / n.Length()), z1(n, e) * _);
		return Math.min(.9999, o);
	}
	function Pn(t) {
		let e = y(t);
		for (let o = 0; o < 12; ++o) {
			const r = M1(180, e, 40);
			if (!r) throw "Cannot find full moon.";
			const s = Yt(r);
			if (Math.abs(s) < 1.8) {
				const a = Y4(r);
				if (a.r < a.p + X) {
					let c = Z.Penumbral, i = 0, u = 0, l = 0, h = $t(a.time, a.p + X, 200);
					return a.r < a.k + X && (c = Z.Partial, l = $t(a.time, a.k + X, h), a.r + X < a.k ? (c = Z.Total, i = 1, u = $t(a.time, a.k - X, l)) : i = Un(X, a.k, a.r)), new Dn(c, i, a.time, h, l, u);
				}
			}
			e = r.AddDays(10);
		}
		throw "Failed to find lunar eclipse within 12 full moons.";
	}
	var zn = class {
		constructor(t, n, e, o, r, s) {
			this.kind = t, this.obscuration = n, this.peak = e, this.distance = o, this.latitude = r, this.longitude = s;
		}
	};
	function Cn(t) {
		return t > .014 ? Z.Total : Z.Annular;
	}
	function X4(t) {
		let n = Z.Partial, e = t.time, o = t.r, r, s;
		const a = Z1(t.time), c = _1(a, t.dir), i = _1(a, t.target);
		c.x *= z, c.y *= z, c.z *= z / s0, i.x *= z, i.y *= z, i.z *= z / s0;
		const u = M0, l = c.x * c.x + c.y * c.y + c.z * c.z, h = -2 * (c.x * i.x + c.y * i.y + c.z * i.z), M = i.x * i.x + i.y * i.y + i.z * i.z - u * u, m = h * h - 4 * l * M;
		let A;
		if (m > 0) {
			const p = (-h - Math.sqrt(m)) / (2 * l), x = p * c.x - i.x, R = p * c.y - i.y, E = (p * c.z - i.z) * s0, I = Math.hypot(x, R) * v1;
			I == 0 ? r = E > 0 ? 90 : -90 : r = k * Math.atan(E / I);
			const w = A0(e);
			s = (k * Math.atan2(R, x) - 15 * w) % 360, s <= -180 ? s += 360 : s > 180 && (s -= 360);
			const g = n1(a);
			let D = new O(x / z, R / z, E / z, t.time);
			D = _1(g, D), D.x += t.target.x, D.y += t.target.y, D.z += t.target.z;
			const v = E1(U2, t.time, D, t.dir);
			if (v.r > 1e-9 || v.r < 0) throw `Unexpected shadow distance from geoid intersection = ${v.r}`;
			n = Cn(v.k), A = n === Z.Total ? 1 : vn(t.dir, D);
		} else A = void 0;
		return new zn(n, A, e, o, r, s);
	}
	function W4(t) {
		return t = y(t), Pn(t.AddDays(10));
	}
	function bn(t) {
		t = y(t);
		const n = 1.8;
		let e = t, o;
		for (o = 0; o < 12; ++o) {
			const r = M1(0, e, 40);
			if (!r) throw "Cannot find new moon";
			const s = Yt(r);
			if (Math.abs(s) < n) {
				const a = j4(r);
				if (a.r < a.p + D3) return X4(a);
			}
			e = r.AddDays(10);
		}
		throw "Failed to find solar eclipse within 12 full moons.";
	}
	function Z4(t) {
		return t = y(t), bn(t.AddDays(10));
	}
	var Ln = class {
		constructor(t, n) {
			this.time = t, this.altitude = n;
		}
	}, kn = class {
		constructor(t, n, e, o, r, s, a) {
			this.kind = t, this.obscuration = n, this.partial_begin = e, this.total_begin = o, this.peak = r, this.total_end = s, this.partial_end = a;
		}
	};
	function Bn(t) {
		return t.p - t.r;
	}
	function Kn(t) {
		return Math.abs(t.k) - t.r;
	}
	function t6(t, n) {
		const e = Hn(n, t.time);
		let o = t.time.AddDays(-.2), r = t.time.AddDays(.2);
		const s = ot(n, 1, Bn, o, t.time), a = ot(n, -1, Bn, t.time, r);
		let c, i, u;
		t.r < Math.abs(t.k) ? (o = t.time.AddDays(-.01), r = t.time.AddDays(.01), c = ot(n, 1, Kn, o, t.time), i = ot(n, -1, Kn, t.time, r), u = Cn(t.k)) : u = Z.Partial;
		const l = u === Z.Total ? 1 : vn(t.dir, t.target);
		return new kn(u, l, s, c, e, i, a);
	}
	function ot(t, n, e, o, r) {
		function s(c) {
			return n * e(Ft(c, t));
		}
		const a = F(s, o, r);
		if (!a) throw "Local eclipse transition search failed.";
		return Hn(t, a);
	}
	function Hn(t, n) {
		return new Ln(n, n6(n, t));
	}
	function n6(t, n) {
		const e = i1(f.Sun, t, n, !0, !0);
		return J1(t, n, e.ra, e.dec, "normal").altitude;
	}
	function Jn(t, n) {
		t = y(t), Y0(n);
		const e = 1.8;
		let o = t;
		for (;;) {
			const r = M1(0, o, 40);
			if (!r) throw "Cannot find next new moon";
			const s = Yt(r);
			if (Math.abs(s) < e) {
				const a = q4(r, n);
				if (a.r < a.p) {
					const c = t6(a, n);
					if (c.partial_begin.altitude > 0 || c.partial_end.altitude > 0) return c;
				}
			}
			o = r.AddDays(10);
		}
	}
	function e6(t, n) {
		return t = y(t), Jn(t.AddDays(10), n);
	}
	var Vn = class {
		constructor(t, n, e, o) {
			this.start = t, this.peak = n, this.finish = e, this.separation = o;
		}
	};
	function o6(t, n, e, o) {
		const r = et(n, e, t);
		return o * (r.r - r.p);
	}
	function Fn(t, n, e, o, r) {
		const s = F((a) => o6(a, t, n, r), e, o);
		if (!s) throw "Planet transit boundary search failed";
		return s;
	}
	function Gn(t, n) {
		n = y(n);
		const e = .4;
		let o;
		switch (t) {
			case f.Mercury:
				o = 2439.7;
				break;
			case f.Venus:
				o = 6051.8;
				break;
			default: throw `Invalid body: ${t}`;
		}
		let r = n;
		for (;;) {
			const s = t1(t, 0, r);
			if (Z0(t, s) < e) {
				const a = Q4(t, o, s);
				if (a.r < a.p) {
					const c = a.time.AddDays(-1), i = Fn(t, o, c, a.time, -1), u = a.time.AddDays(1), l = Fn(t, o, a.time, u, 1), h = 60 * Z0(t, a.time);
					return new Vn(i, a.time, l, h);
				}
			}
			r = s.AddDays(10);
		}
	}
	function r6(t, n) {
		return n = y(n), Gn(t, n.AddDays(100));
	}
	var S0;
	(function(t) {
		t[t.Invalid = 0] = "Invalid", t[t.Ascending = 1] = "Ascending", t[t.Descending = -1] = "Descending";
	})(S0 || (S0 = {}));
	var $n = class {
		constructor(t, n) {
			this.kind = t, this.time = n;
		}
	};
	const Yn = 10;
	function jn(t) {
		let n = y(t), e = V1(n);
		for (;;) {
			const o = n.AddDays(Yn), r = V1(o);
			if (e.lat * r.lat <= 0) {
				const s = r.lat > e.lat ? S0.Ascending : S0.Descending, a = F((c) => s * V1(c).lat, n, o);
				if (!a) throw "Could not find moon node.";
				return new $n(s, a);
			}
			n = o, e = r;
		}
	}
	function s6(t) {
		const n = jn(t.time.AddDays(Yn));
		switch (t.kind) {
			case S0.Ascending:
				if (n.kind !== S0.Descending) throw `Internal error: previous node was ascending, but this node was: ${n.kind}`;
				break;
			case S0.Descending:
				if (n.kind !== S0.Ascending) throw `Internal error: previous node was descending, but this node was: ${n.kind}`;
				break;
			default: throw `Previous node has an invalid node kind: ${t.kind}`;
		}
		return n;
	}
	var jt = class {
		constructor(t, n, e, o) {
			this.ra = t, this.dec = n, this.spin = e, this.north = o;
		}
	};
	function a6(t) {
		const n = V0(F0([
			0,
			0,
			1
		], t, b.Into2000), t, b.Into2000), e = new O(n[0], n[1], n[2], t), o = Kt(e), r = 190.41375788700253 + 360.9856122880876 * t.ut;
		return new jt(o.ra, o.dec, r, e);
	}
	function i6(t, n) {
		const e = y(n), o = e.tt, r = o / 36525;
		let s, a, c;
		switch (t) {
			case f.Sun:
				s = 286.13, a = 63.87, c = 84.176 + 14.1844 * o;
				break;
			case f.Mercury:
				s = 281.0103 - .0328 * r, a = 61.4155 - .0049 * r, c = 329.5988 + 6.1385108 * o + .01067257 * Math.sin(_ * (174.7910857 + 4.092335 * o)) - .00112309 * Math.sin(_ * (349.5821714 + 8.18467 * o)) - 1104e-7 * Math.sin(_ * (164.3732571 + 12.277005 * o)) - 2539e-8 * Math.sin(_ * (339.1643429 + 16.36934 * o)) - 571e-8 * Math.sin(_ * (153.9554286 + 20.461675 * o));
				break;
			case f.Venus:
				s = 272.76, a = 67.16, c = 160.2 - 1.4813688 * o;
				break;
			case f.Earth: return a6(e);
			case f.Moon:
				const M = _ * (125.045 - .0529921 * o), m = _ * (250.089 - .1059842 * o), A = _ * (260.008 + 13.0120009 * o), p = _ * (176.625 + 13.3407154 * o), x = _ * (357.529 + .9856003 * o), R = _ * (311.589 + 26.4057084 * o), E = _ * (134.963 + 13.064993 * o), I = _ * (276.617 + .3287146 * o), w = _ * (34.226 + 1.7484877 * o), g = _ * (15.134 - .1589763 * o), D = _ * (119.743 + .0036096 * o), v = _ * (239.961 + .1643573 * o), L = _ * (25.053 + 12.9590088 * o);
				s = 269.9949 + .0031 * r - 3.8787 * Math.sin(M) - .1204 * Math.sin(m) + .07 * Math.sin(A) - .0172 * Math.sin(p) + .0072 * Math.sin(R) - .0052 * Math.sin(g) + .0043 * Math.sin(L), a = 66.5392 + .013 * r + 1.5419 * Math.cos(M) + .0239 * Math.cos(m) - .0278 * Math.cos(A) + .0068 * Math.cos(p) - .0029 * Math.cos(R) + 9e-4 * Math.cos(E) + 8e-4 * Math.cos(g) - 9e-4 * Math.cos(L), c = 38.3213 + (13.17635815 - 14e-13 * o) * o + 3.561 * Math.sin(M) + .1208 * Math.sin(m) - .0642 * Math.sin(A) + .0158 * Math.sin(p) + .0252 * Math.sin(x) - .0066 * Math.sin(R) - .0047 * Math.sin(E) - .0046 * Math.sin(I) + .0028 * Math.sin(w) + .0052 * Math.sin(g) + .004 * Math.sin(D) + .0019 * Math.sin(v) - .0044 * Math.sin(L);
				break;
			case f.Mars:
				s = 317.269202 - .10927547 * r + 68e-6 * Math.sin(_ * (198.991226 + 19139.4819985 * r)) + 238e-6 * Math.sin(_ * (226.292679 + 38280.8511281 * r)) + 52e-6 * Math.sin(_ * (249.663391 + 57420.7251593 * r)) + 9e-6 * Math.sin(_ * (266.18351 + 76560.636795 * r)) + .419057 * Math.sin(_ * (79.398797 + .5042615 * r)), a = 54.432516 - .05827105 * r + 51e-6 * Math.cos(_ * (122.433576 + 19139.9407476 * r)) + 141e-6 * Math.cos(_ * (43.058401 + 38280.8753272 * r)) + 31e-6 * Math.cos(_ * (57.663379 + 57420.7517205 * r)) + 5e-6 * Math.cos(_ * (79.476401 + 76560.6495004 * r)) + 1.591274 * Math.cos(_ * (166.325722 + .5042615 * r)), c = 176.049863 + 350.891982443297 * o + 145e-6 * Math.sin(_ * (129.071773 + 19140.0328244 * r)) + 157e-6 * Math.sin(_ * (36.352167 + 38281.0473591 * r)) + 4e-5 * Math.sin(_ * (56.668646 + 57420.929536 * r)) + 1e-6 * Math.sin(_ * (67.364003 + 76560.2552215 * r)) + 1e-6 * Math.sin(_ * (104.79268 + 95700.4387578 * r)) + .584542 * Math.sin(_ * (95.391654 + .5042615 * r));
				break;
			case f.Jupiter:
				const B = _ * (99.360714 + 4850.4046 * r), Q = _ * (175.895369 + 1191.9605 * r), G = _ * (300.323162 + 262.5475 * r), q = _ * (114.012305 + 6070.2476 * r), u0 = _ * (49.511251 + 64.3 * r);
				s = 268.056595 - .006499 * r + 117e-6 * Math.sin(B) + 938e-6 * Math.sin(Q) + .001432 * Math.sin(G) + 3e-5 * Math.sin(q) + .00215 * Math.sin(u0), a = 64.495303 + .002413 * r + 5e-5 * Math.cos(B) + 404e-6 * Math.cos(Q) + 617e-6 * Math.cos(G) - 13e-6 * Math.cos(q) + 926e-6 * Math.cos(u0), c = 284.95 + 870.536 * o;
				break;
			case f.Saturn:
				s = 40.589 - .036 * r, a = 83.537 - .004 * r, c = 38.9 + 810.7939024 * o;
				break;
			case f.Uranus:
				s = 257.311, a = -15.175, c = 203.81 - 501.1600928 * o;
				break;
			case f.Neptune:
				const r0 = _ * (357.85 + 52.316 * r);
				s = 299.36 + .7 * Math.sin(r0), a = 43.46 - .51 * Math.cos(r0), c = 249.978 + 541.1397757 * o - .48 * Math.sin(r0);
				break;
			case f.Pluto:
				s = 132.993, a = -6.163, c = 302.695 + 56.3625225 * o;
				break;
			default: throw `Invalid body: ${t}`;
		}
		const i = a * _, u = s * _, l = Math.cos(i), h = new O(l * Math.cos(u), l * Math.sin(u), Math.sin(i), e);
		return new jt(s / 15, a, c, h);
	}
	function c6(t, n, e, o) {
		const r = y(n), s = yt(e), a = yt(o);
		let c, i;
		return e === f.Earth && o === f.Moon ? (c = new H(0, 0, 0, 0, 0, 0, r), i = u1(r)) : (c = Q1(e, r), i = Q1(o, r)), Qn(t, c, s, i, a);
	}
	function Qn(t, n, e, o, r) {
		if (t < 1 || t > 5) throw `Invalid lagrange point ${t}`;
		if (!Number.isFinite(e) || e <= 0) throw "Major mass must be a positive number.";
		if (!Number.isFinite(r) || r <= 0) throw "Minor mass must be a negative number.";
		let a = o.x - n.x, c = o.y - n.y, i = o.z - n.z;
		const u = a * a + c * c + i * i, l = Math.sqrt(u), h = o.vx - n.vx, M = o.vy - n.vy, m = o.vz - n.vz;
		let A;
		if (t === 4 || t === 5) {
			const p = c * m - i * M, x = i * h - a * m, R = a * M - c * h;
			let E = x * i - R * c, I = R * a - p * i, w = p * c - x * a;
			const g = Math.sqrt(E * E + I * I + w * w);
			E /= g, I /= g, w /= g, a /= l, c /= l, i /= l;
			const D = t == 4 ? .8660254037844386 : -.8660254037844386, v = .5 * a + D * E, L = .5 * c + D * I, B = .5 * i + D * w, Q = .5 * E - D * a, G = .5 * I - D * c, q = .5 * w - D * i, u0 = l * v, r0 = l * L, _0 = l * B, l0 = h * a + M * c + m * i, h0 = h * E + M * I + m * w;
			A = new H(u0, r0, _0, l0 * v + h0 * Q, l0 * L + h0 * G, l0 * B + h0 * q, n.t);
		} else {
			const p = -l * (r / (e + r)), x = +l * (e / (e + r)), R = (e + r) / (u * l);
			let E, I, w;
			if (t === 1 || t === 2) E = e / (e + r) * Math.cbrt(r / (3 * e)), I = -e, t == 1 ? (E = 1 - E, w = +r) : (E = 1 + E, w = -r);
			else if (t === 3) E = (7 / 12 * r - e) / (r + e), I = +e, w = +r;
			else throw `Invalid Langrage point ${t}. Must be an integer 1..5.`;
			let g = l * E - p, D;
			do {
				const v = g - p, L = g - x;
				D = (R * g + I / (v * v) + w / (L * L)) / (R - 2 * I / (v * v * v) - 2 * w / (L * L * L)), g -= D;
			} while (Math.abs(D / l) > 1e-14);
			E = (g - p) / l, A = new H(E * a, E * c, E * i, E * h, E * M, E * m, n.t);
		}
		return A;
	}
	var u6 = class t0 {
		constructor(n, e, o) {
			const r = y(e);
			this.originBody = n;
			for (let i of o) if (i.t.tt !== r.tt) throw "Inconsistent times in bodyStates";
			const s = [], a = t0.CalcSolarSystem(r);
			this.curr = new qn(r, a, s);
			const c = this.InternalBodyState(n);
			for (let i of o) {
				const u = new j(i.x + c.r.x, i.y + c.r.y, i.z + c.r.z), l = new j(i.vx + c.v.x, i.vy + c.v.y, i.vz + c.v.z), h = j.zero();
				s.push(new vt(r.tt, u, l, h));
			}
			this.CalcBodyAccelerations(), this.prev = this.Duplicate();
		}
		get OriginBody() {
			return this.originBody;
		}
		get Time() {
			return this.curr.time;
		}
		Update(n) {
			const e = y(n), o = e.tt - this.curr.time.tt;
			if (o === 0) this.prev = this.Duplicate();
			else {
				this.Swap(), this.curr.time = e, this.curr.gravitators = t0.CalcSolarSystem(e);
				for (let a = 0; a < this.curr.bodies.length; ++a) {
					const c = this.prev.bodies[a];
					this.curr.bodies[a].r = q0(o, c.r, c.v, c.a);
				}
				this.CalcBodyAccelerations();
				for (let a = 0; a < this.curr.bodies.length; ++a) {
					const c = this.prev.bodies[a], i = this.curr.bodies[a], u = c.a.mean(i.a);
					i.tt = e.tt, i.r = q0(o, c.r, c.v, u), i.v = Pt(o, c.v, u);
				}
				this.CalcBodyAccelerations();
			}
			const r = [], s = this.InternalBodyState(this.originBody);
			for (let a of this.curr.bodies) r.push(new H(a.r.x - s.r.x, a.r.y - s.r.y, a.r.z - s.r.z, a.v.x - s.v.x, a.v.y - s.v.y, a.v.z - s.v.z, e));
			return r;
		}
		Swap() {
			const n = this.curr;
			this.curr = this.prev, this.prev = n;
		}
		SolarSystemBodyState(n) {
			const e = this.InternalBodyState(n), o = this.InternalBodyState(this.originBody);
			return z0(e.sub(o), this.curr.time);
		}
		InternalBodyState(n) {
			if (n === f.SSB) return new v0(this.curr.time.tt, j.zero(), j.zero());
			const e = this.curr.gravitators[n];
			if (e) return e;
			throw `Invalid body: ${n}`;
		}
		static CalcSolarSystem(n) {
			const e = {}, o = new v0(n.tt, j.zero(), j.zero());
			e[f.Mercury] = W(o, n.tt, f.Mercury, Et), e[f.Venus] = W(o, n.tt, f.Venus, pt), e[f.Earth] = W(o, n.tt, f.Earth, 8997011346712498e-25), e[f.Mars] = W(o, n.tt, f.Mars, mt), e[f.Jupiter] = W(o, n.tt, f.Jupiter, k0), e[f.Saturn] = W(o, n.tt, f.Saturn, B0), e[f.Uranus] = W(o, n.tt, f.Uranus, K0), e[f.Neptune] = W(o, n.tt, f.Neptune, H0);
			for (let r in e) e[r].r.decr(o.r), e[r].v.decr(o.v);
			return e[f.Sun] = new v0(n.tt, o.r.neg(), o.v.neg()), e;
		}
		CalcBodyAccelerations() {
			for (let n of this.curr.bodies) n.a = j.zero(), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Sun].r, a1), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Mercury].r, Et), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Venus].r, pt), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Earth].r, 8997011346712498e-25), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Mars].r, mt), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Jupiter].r, k0), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Saturn].r, B0), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Uranus].r, K0), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Neptune].r, H0);
		}
		static AddAcceleration(n, e, o, r) {
			const s = o.x - e.x, a = o.y - e.y, c = o.z - e.z, i = s * s + a * a + c * c, u = r / (i * Math.sqrt(i));
			n.x += s * u, n.y += a * u, n.z += c * u;
		}
		Duplicate() {
			const n = {};
			for (let o in this.curr.gravitators) n[o] = this.curr.gravitators[o].clone();
			const e = [];
			for (let o of this.curr.bodies) e.push(o.clone());
			return new qn(this.curr.time, n, e);
		}
	}, qn = class {
		constructor(t, n, e) {
			this.time = t, this.gravitators = n, this.bodies = e;
		}
	};
	function rt(t) {
		return typeof t.Observer == "function" ? t : t.default ?? t;
	}
	const { MakeTime: io, SearchRiseSet: co, Body: uo, Observer: l6 } = rt(s1);
	new l6(40.7128, -74.006, 10);
	const { Body: o0 } = rt(s1);
	d.SUN, o0.Sun, d.MERCURY, o0.Mercury, d.VENUS, o0.Venus, d.EARTH, o0.Earth, d.MARS, o0.Mars, d.JUPITER, o0.Jupiter, d.SATURN, o0.Saturn, d.URANUS, o0.Uranus, d.NEPTUNE, o0.Neptune, d.PLUTO, o0.Pluto, d.MOON, o0.Moon;
	2 * Math.PI;
	const { Rotation_EQD_EQJ: Mo, CombineRotation: Ao, MakeRotation: So } = rt(s1);
	Math.PI / 648e3;
	const h6 = (t) => t, p1 = (t, n, e) => h6(Ie(t, n, e));
	Ae * fe;
	const e1 = (() => {
		const t = s1;
		return t.default && t.default.Body ? t.default : t;
	})();
	function f6(t) {
		const n = e1.Body[t];
		if (n === void 0) throw new Error(`astronomy-engine missing Body.${t}`);
		return n;
	}
	const Xn = /* @__PURE__ */ new Map();
	function d6(t) {
		const n = Xn.get(t);
		if (n) return n;
		const e = e1.MakeTime(/* @__PURE__ */ new Date(10957.5 * i2)), o = e1.RotationAxis(f6(t), e).north, r = Math.sqrt(o.x * o.x + o.y * o.y + o.z * o.z), s = p1(o.x / r, o.y / r, o.z / r);
		return Xn.set(t, s), s;
	}
	function M6(t, n) {
		const e = /* @__PURE__ */ new Date((n - u2) * i2), o = e1.MakeTime(e);
		if (t === "Moon") {
			const a = e1.GeoMoon(o);
			return p1(a.x * T, a.y * T, a.z * T);
		}
		const r = e1.JupiterMoons(o), s = t === "Io" ? r.io : t === "Europa" ? r.europa : t === "Ganymede" ? r.ganymede : r.callisto;
		return p1(s.x * T, s.y * T, s.z * T);
	}
	const Wn = {
		Phobos: {
			parentName: "Mars",
			semiMajorAxisKm: 9376,
			periodDays: .31891
		},
		Deimos: {
			parentName: "Mars",
			semiMajorAxisKm: 23463,
			periodDays: 1.263
		},
		Mimas: {
			parentName: "Saturn",
			semiMajorAxisKm: 185540,
			periodDays: .9424
		},
		Enceladus: {
			parentName: "Saturn",
			semiMajorAxisKm: 237948,
			periodDays: 1.37
		},
		Tethys: {
			parentName: "Saturn",
			semiMajorAxisKm: 294619,
			periodDays: 1.888
		},
		Dione: {
			parentName: "Saturn",
			semiMajorAxisKm: 377396,
			periodDays: 2.737
		},
		Rhea: {
			parentName: "Saturn",
			semiMajorAxisKm: 527108,
			periodDays: 4.518
		},
		Titan: {
			parentName: "Saturn",
			semiMajorAxisKm: 1221870,
			periodDays: 15.945
		},
		Iapetus: {
			parentName: "Saturn",
			semiMajorAxisKm: 3560820,
			periodDays: 79.32
		},
		Miranda: {
			parentName: "Uranus",
			semiMajorAxisKm: 129390,
			periodDays: 1.4135
		},
		Ariel: {
			parentName: "Uranus",
			semiMajorAxisKm: 190900,
			periodDays: 2.52
		},
		Umbriel: {
			parentName: "Uranus",
			semiMajorAxisKm: 266e3,
			periodDays: 4.144
		},
		Titania: {
			parentName: "Uranus",
			semiMajorAxisKm: 436300,
			periodDays: 8.706
		},
		Oberon: {
			parentName: "Uranus",
			semiMajorAxisKm: 583520,
			periodDays: 13.463
		},
		Triton: {
			parentName: "Neptune",
			semiMajorAxisKm: 354759,
			periodDays: -5.877
		}
	}, Zn = /* @__PURE__ */ new Map();
	function A6(t) {
		const n = Zn.get(t);
		if (n) return n;
		const e = d6(t), r = ge(d2(Math.abs(e.z) < .9 ? {
			x: 0,
			y: 0,
			z: 1
		} : {
			x: 1,
			y: 0,
			z: 0
		}, e));
		if (!r) throw new Error(`equatorialOrbitBasis: degenerate pole for ${t}`);
		const s = {
			u: r,
			v: d2(e, r)
		};
		return Zn.set(t, s), s;
	}
	function S6(t, n) {
		const e = Wn[t];
		if (!e) return p1(0, 0, 0);
		const o = 2 * Math.PI * (n - c2) / e.periodDays, { u: r, v: s } = A6(e.parentName), a = e.semiMajorAxisKm, c = Math.cos(o), i = Math.sin(o);
		return p1(a * (c * r.x + i * s.x), a * (c * r.y + i * s.y), a * (c * r.z + i * s.z));
	}
	function st(t, n) {
		return t.x = n.x, t.y = n.y, t.z = n.z, t;
	}
	function te(t, n, e) {
		if (t.length === 0) return null;
		if (t.length === 1) {
			const E = t[0].position;
			return e ? st(e, E) : {
				x: E.x,
				y: E.y,
				z: E.z
			};
		}
		if (n <= t[0].time.jd) {
			const E = t[0].position;
			return e ? st(e, E) : {
				x: E.x,
				y: E.y,
				z: E.z
			};
		}
		if (n >= t[t.length - 1].time.jd) {
			const E = t[t.length - 1].position;
			return e ? st(e, E) : {
				x: E.x,
				y: E.y,
				z: E.z
			};
		}
		let o = 0, r = t.length - 1;
		for (; r - o > 1;) {
			const E = o + r >> 1;
			t[E].time.jd <= n ? o = E : r = E;
		}
		const s = t[o], a = t[r];
		if (a.time.jd === s.time.jd) {
			const E = s.position;
			return e ? st(e, E) : {
				x: E.x,
				y: E.y,
				z: E.z
			};
		}
		const c = a.time.jd - s.time.jd, i = (n - s.time.jd) / c, u = i * i, l = u * i, h = 2 * l - 3 * u + 1, M = l - 2 * u + i, m = -2 * l + 3 * u, A = l - u, p = h * s.position.x + M * c * s.velocity.x + m * a.position.x + A * c * a.velocity.x, x = h * s.position.y + M * c * s.velocity.y + m * a.position.y + A * c * a.velocity.y, R = h * s.position.z + M * c * s.velocity.z + m * a.position.z + A * c * a.velocity.z;
		return e ? (e.x = p, e.y = x, e.z = R, e) : {
			x: p,
			y: x,
			z: R
		};
	}
	const ne = {
		[d.MOON]: {
			name: "Moon",
			parentBodyId: d.EARTH
		},
		[d.IO]: {
			name: "Io",
			parentBodyId: d.JUPITER
		},
		[d.EUROPA]: {
			name: "Europa",
			parentBodyId: d.JUPITER
		},
		[d.GANYMEDE]: {
			name: "Ganymede",
			parentBodyId: d.JUPITER
		},
		[d.CALLISTO]: {
			name: "Callisto",
			parentBodyId: d.JUPITER
		}
	}, Qt = {
		[d.PHOBOS]: {
			name: "Phobos",
			parentBodyId: d.MARS
		},
		[d.DEIMOS]: {
			name: "Deimos",
			parentBodyId: d.MARS
		},
		[d.MIMAS]: {
			name: "Mimas",
			parentBodyId: d.SATURN
		},
		[d.ENCELADUS]: {
			name: "Enceladus",
			parentBodyId: d.SATURN
		},
		[d.TETHYS]: {
			name: "Tethys",
			parentBodyId: d.SATURN
		},
		[d.DIONE]: {
			name: "Dione",
			parentBodyId: d.SATURN
		},
		[d.RHEA]: {
			name: "Rhea",
			parentBodyId: d.SATURN
		},
		[d.TITAN]: {
			name: "Titan",
			parentBodyId: d.SATURN
		},
		[d.IAPETUS]: {
			name: "Iapetus",
			parentBodyId: d.SATURN
		},
		[d.MIRANDA]: {
			name: "Miranda",
			parentBodyId: d.URANUS
		},
		[d.ARIEL]: {
			name: "Ariel",
			parentBodyId: d.URANUS
		},
		[d.UMBRIEL]: {
			name: "Umbriel",
			parentBodyId: d.URANUS
		},
		[d.TITANIA]: {
			name: "Titania",
			parentBodyId: d.URANUS
		},
		[d.OBERON]: {
			name: "Oberon",
			parentBodyId: d.URANUS
		},
		[d.TRITON]: {
			name: "Triton",
			parentBodyId: d.NEPTUNE
		}
	};
	Object.fromEntries(Object.entries(Qt).map(([t, n]) => [t, n.name]));
	function _6(t) {
		return ne[t]?.parentBodyId ?? Qt[t]?.parentBodyId ?? null;
	}
	function E6(t, n) {
		const e = ne[t];
		if (e) return M6(e.name, he(n));
		const o = Qt[t];
		return o && Wn[o.name] ? S6(o.name, n) : null;
	}
	const { HelioState: mo, MakeTime: yo, JupiterMoons: Ro, Body: at } = rt(s1);
	d.IO, d.EUROPA, d.GANYMEDE, d.CALLISTO;
	at.Mars, at.Saturn, at.Uranus, at.Neptune;
	d.CERES, d.ERIS, d.HAUMEA, d.MAKEMAKE;
	const m1 = 1e3, ee = m1 / T, oe = ee * ut * Me, p6 = 695700, m6 = 6378.137;
	function re(t) {
		return !Number.isFinite(t) || t <= 0 ? 0 : t * ee;
	}
	re(m6);
	re(p6);
	100 / lt;
	1.1 * lt;
	function y6(t) {
		return {
			x: t.x * m1,
			y: t.y * m1,
			z: t.z * m1
		};
	}
	25 * oe;
	25 * oe;
	function R6(t, n, e) {
		const o = I6(t, n, e);
		if (!o) return null;
		const r = y6({
			x: o.x / T,
			y: o.y / T,
			z: o.z / T
		});
		return {
			x: r.x,
			y: r.y,
			z: r.z
		};
	}
	function I6(t, n, e) {
		if (!t || !n) return null;
		const o = _6(t);
		if (o) {
			const a = n[o];
			if (!a?.length) return null;
			const c = te(a, e);
			if (!c) return null;
			const i = E6(t, e);
			return i ? {
				x: c.x * T + i.x,
				y: c.y * T + i.y,
				z: c.z * T + i.z
			} : null;
		}
		const r = n[t];
		if (!r?.length) return null;
		const s = te(r, e);
		return s ? {
			x: s.x * T,
			y: s.y * T,
			z: s.z * T
		} : null;
	}
	function x6(t, n, e = y1) {
		const o = {};
		for (const r of e) {
			const s = R6(r, n, t);
			s && (o[r] = [
				s.x,
				s.y,
				s.z
			]);
		}
		return o;
	}
	const se = 0;
	function qt() {
		return y1.length * 3;
	}
	function g6() {
		return 1 + qt() * 2;
	}
	function ae(t) {
		return new Int32Array(t.buffer, t.byteOffset, 1);
	}
	function w6(t) {
		return 1 + t * qt();
	}
	function T6(t) {
		return Atomics.load(ae(t), se) === 1 ? 1 : 0;
	}
	function ie(t) {
		return T6(t) === 0 ? 1 : 0;
	}
	function N6(t) {
		const n = w6(ie(t));
		return t.subarray(n, n + qt());
	}
	function D6(t) {
		const n = ie(t);
		Atomics.store(ae(t), se, n);
	}
	function O6(t, n) {
		const e = N6(t);
		e.fill(NaN);
		const o = y1;
		for (const r of Object.keys(n)) {
			const s = o.indexOf(r);
			if (s < 0) continue;
			const a = n[r];
			if (!a) continue;
			const c = s * 3, [i, u, l] = a;
			e[c] = i, e[c + 1] = u, e[c + 2] = l;
		}
		D6(t);
	}
	let Xt = null, Wt = null;
	dt({
		async init(t) {
			const n = new Float32Array(t), e = g6();
			if (n.length !== e) throw new Error(`[solar worker] SAB Float32 length mismatch: expected ${e}, got ${n.length}`);
			Wt = n;
		},
		async loadBatch(t, n) {
			return Xt = n, {
				type: "ready",
				runId: t
			};
		},
		async compute(t, n, e) {
			try {
				if (!Xt) return {
					type: "error",
					runId: t,
					seq: n,
					message: "No ephemeris loaded"
				};
				const o = x6(e, Xt, y1);
				return Wt ? (O6(Wt, o), {
					type: "positions",
					runId: t,
					seq: n,
					jd: e
				}) : {
					type: "positions",
					runId: t,
					seq: n,
					jd: e,
					positions: o
				};
			} catch (o) {
				return console.error("[solar worker] compute failed:", o), {
					type: "error",
					runId: t,
					seq: n,
					message: o instanceof Error ? o.message : String(o)
				};
			}
		}
	});
})();
