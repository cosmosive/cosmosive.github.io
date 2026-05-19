(function() {
	const G = Symbol("Comlink.proxy"), le = Symbol("Comlink.endpoint"), de = Symbol("Comlink.releaseProxy"), K = Symbol("Comlink.finalizer"), f = Symbol("Comlink.thrown"), z = (e) => typeof e == "object" && e !== null || typeof e == "function", V = new Map([["proxy", {
		canHandle: (e) => z(e) && e[G],
		serialize(e) {
			const { port1: n, port2: r } = new MessageChannel();
			return L(e, n), [r, [r]];
		},
		deserialize(e) {
			return e.start(), _e(e);
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
				const d = c.slice(0, -1).reduce((S, M) => S[M], e), m = c.reduce((S, M) => S[M], e);
				switch (l) {
					case "GET":
						u = m;
						break;
					case "SET":
						d[c.slice(-1)[0]] = I(s.data.value), u = !0;
						break;
					case "APPLY":
						u = m.apply(d, E);
						break;
					case "CONSTRUCT":
						u = pe(new m(...E));
						break;
					case "ENDPOINT":
						{
							const { port1: S, port2: M } = new MessageChannel();
							L(e, M), u = Re(S, [S]);
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
				n.postMessage(Object.assign(Object.assign({}, m), { id: i }), S), l === "RELEASE" && (n.removeEventListener("message", o), W(n), K in e && typeof e[K] == "function" && e[K]());
			}).catch((d) => {
				const [m, S] = g({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[f]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, m), { id: i }), S);
			});
		}), n.start && n.start();
	}
	function Ee(e) {
		return e.constructor.name === "MessagePort";
	}
	function W(e) {
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
	function b(e) {
		if (e) throw new Error("Proxy has been released and is not useable");
	}
	function $(e) {
		return R(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			W(e);
		});
	}
	const U = /* @__PURE__ */ new WeakMap(), N = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
		const n = (U.get(e) || 0) - 1;
		U.set(e, n), n === 0 && $(e);
	});
	function Se(e, n) {
		const r = (U.get(n) || 0) + 1;
		U.set(n, r), N && N.register(e, n, e);
	}
	function me(e) {
		N && N.unregister(e);
	}
	function C(e, n, r = [], o = function() {}) {
		let s = !1;
		const i = new Proxy(o, {
			get(l, c) {
				if (b(s), c === de) return () => {
					me(i), $(e), n.clear(), s = !0;
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
				b(s);
				const [u, d] = g(E);
				return R(e, n, {
					type: "SET",
					path: [...r, c].map((m) => m.toString()),
					value: u
				}, d).then(I);
			},
			apply(l, c, E) {
				b(s);
				const u = r[r.length - 1];
				if (u === le) return R(e, n, { type: "ENDPOINT" }).then(I);
				if (u === "bind") return C(e, n, r.slice(0, -1));
				const [d, m] = q(E);
				return R(e, n, {
					type: "APPLY",
					path: r.map((S) => S.toString()),
					argumentList: d
				}, m).then(I);
			},
			construct(l, c) {
				b(s);
				const [E, u] = q(c);
				return R(e, n, {
					type: "CONSTRUCT",
					path: r.map((d) => d.toString()),
					argumentList: E
				}, u).then(I);
			}
		});
		return Se(i, e), i;
	}
	function Ie(e) {
		return Array.prototype.concat.apply([], e);
	}
	function q(e) {
		const n = e.map(g);
		return [n.map((r) => r[0]), Ie(n.map((r) => r[1]))];
	}
	const Z = /* @__PURE__ */ new WeakMap();
	function Re(e, n) {
		return Z.set(e, n), e;
	}
	function pe(e) {
		return Object.assign(e, { [G]: !0 });
	}
	function g(e) {
		for (const [n, r] of V) if (r.canHandle(e)) {
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
			case "HANDLER": return V.get(e.name).deserialize(e.value);
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
	t.SUN, t.MERCURY, t.VENUS, t.EARTH, t.MARS, t.JUPITER, t.SATURN, t.URANUS, t.NEPTUNE, t.PLUTO, t.MOON, t.IO, t.EUROPA, t.GANYMEDE, t.CALLISTO, t.PHOBOS, t.DEIMOS, t.MIMAS, t.ENCELADUS, t.TETHYS, t.DIONE, t.RHEA, t.TITAN, t.IAPETUS, t.MIRANDA, t.ARIEL, t.UMBRIEL, t.TITANIA, t.OBERON, t.TRITON;
	2 * Math.PI;
	Math.PI / 180;
	180 / Math.PI;
	const h = 86400, Te = 365.25;
	h * 1e3;
	const A = 299792.458;
	A * 60;
	A * 3600;
	A * h;
	const p = A * Te * h, a = 149597870.7, Q = 648e3 / Math.PI, Me = Q * a;
	a / p;
	const ee = Me / p;
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
	}), fe = Symbol.for("bitecs-relation"), be = Symbol.for("bitecs-pairTarget"), Ue = Symbol.for("bitecs-isPairComponent"), y = Symbol.for("bitecs-relationData"), te = () => {
		let e = {
			pairsMap: /* @__PURE__ */ new Map(),
			initStore: void 0,
			exclusiveRelation: !1,
			autoRemoveSubject: !1,
			onTargetRemoved: void 0
		}, n = (r) => {
			if (r === void 0) throw Error("Relation target is undefined");
			let o = r === "*" ? xe : r;
			if (!e.pairsMap.has(o)) {
				let s = e.initStore ? e.initStore(r) : {};
				O(s, fe, n), O(s, be, o), O(s, Ue, !0), e.pairsMap.set(o, s);
			}
			return e.pairsMap.get(o);
		};
		return O(n, y, e), n;
	}, Ne = Symbol.for("bitecs-wildcard");
	function ge() {
		let e = te();
		return Object.defineProperty(e, Ne, {
			value: !0,
			enumerable: !1,
			writable: !1,
			configurable: !1
		}), e;
	}
	function Oe() {
		let e = Symbol.for("bitecs-global-wildcard");
		return globalThis[e] || (globalThis[e] = ge()), globalThis[e];
	}
	var xe = Oe();
	function Pe() {
		return te();
	}
	function De() {
		let e = Symbol.for("bitecs-global-isa");
		return globalThis[e] || (globalThis[e] = Pe()), globalThis[e];
	}
	De();
	const Ye = 384399 / a, He = 421800 / a, Je = 671034 / a, ve = 1070400 / a, Fe = 1882700 / a, Xe = 9376 / a, Ge = 23463 / a, ze = 185540 / a, Ve = 237948 / a, We = 294619 / a, $e = 377396 / a, qe = 527108 / a, Ze = 1221870 / a, Qe = 3560820 / a, et = 129390 / a, tt = 190900 / a, nt = 266e3 / a, rt = 436300 / a, ot = 583520 / a, st = 354759 / a, at = {
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
			semiMajorAxisAu: Ye,
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
			semiMajorAxisAu: He,
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
			semiMajorAxisAu: Je,
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
			semiMajorAxisAu: ve,
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
			semiMajorAxisAu: Ge,
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
			semiMajorAxisAu: ze,
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
			semiMajorAxisAu: Ve,
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
			semiMajorAxisAu: We,
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
			semiMajorAxisAu: $e,
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
			semiMajorAxisAu: qe,
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
			semiMajorAxisAu: Qe,
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
			semiMajorAxisAu: et,
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
			semiMajorAxisAu: tt,
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
			semiMajorAxisAu: nt,
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
			semiMajorAxisAu: rt,
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
			semiMajorAxisAu: ot,
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
			semiMajorAxisAu: st,
			parentBodyId: t.NEPTUNE
		}
	};
	function it(e) {
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
	Object.fromEntries(Object.entries(at).map(([e, n]) => [e, it(n)]));
	new TextEncoder();
	new TextDecoder();
	new TextEncoder();
	new TextDecoder("utf-8");
	const k = 1e3, oe = k / a, w = oe * p * ee, ct = 695700, ut = 6378.137;
	function se(e) {
		return !Number.isFinite(e) || e <= 0 ? 0 : e * oe;
	}
	se(ut);
	se(ct);
	Object.freeze({
		close: 1,
		system: A,
		sector: p / 1e3,
		galactic: p
	});
	const lt = 23.4392911;
	100 * k;
	100 / Q;
	a / k;
	25 * w;
	25 * w;
	const ae = ee;
	function ie(e) {
		return !Number.isFinite(e) || e < 0 ? 0 : e * w;
	}
	const dt = 5e4, At = 2e3, Et = dt / ae, _t = At / ae;
	ie(Et);
	ie(_t);
	const B = 1e3;
	1 * B, 1 * A, 10 * A, 100 * A, 1e3 * A, 1e6 * A, 1e9 * A;
	1 * B, 1 * A;
	1e9 * A;
	1 * B;
	const Y = 1721545, H = 3181545;
	lt * Math.PI / 180;
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
			look: e.look,
			landedTarget: e.landedTarget
		};
	}
	const mt = 26051303, It = 86400;
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
	const Rt = 2451545;
	function J(e) {
		return {
			protocolVersion: mt,
			jd: e?.jd ?? Rt,
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
		landedTarget: null,
		solarHeliocentricLayout: !0
	});
	function ue(e, n) {
		const r = ce(n);
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
				(s < 1721545 || s > 3181545) && (console.warn(`[kernel/seek] JD ${s} outside supported range [${Y}, ${H}] (years 0-4000 AD); clamping.`), s = Math.max(Y, Math.min(H, s)));
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
				const s = e.jd + e.speed * o / It, i = Math.max(Y, Math.min(H, s)), l = {
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
	let _ = J(), D = null, T = null;
	function v(e) {
		T?.(e);
	}
	function F() {
		D != null && (clearInterval(D), D = null);
	}
	function pt() {
		F(), D = setInterval(() => {
			const { state: e, events: n } = ue(_, {
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
		_.playing ? pt() : F();
	}
	function yt(e) {
		if (e.type === "init") {
			const n = ce({
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
			const { state: n, events: r } = ue(_, e.cmd);
			_ = n, v({
				type: "workerTick",
				state: _,
				events: r
			}), X();
		}
	}
	L({
		postInbound(e) {
			try {
				yt(e);
			} catch (n) {
				console.error(n);
			}
		},
		subscribe(e) {
			T != null && T !== e && console.warn("[simulationWorker] replacing existing outbound subscriber (double subscribe)"), T = e, X();
		},
		unsubscribe() {
			T = null, F();
		}
	});
})();
