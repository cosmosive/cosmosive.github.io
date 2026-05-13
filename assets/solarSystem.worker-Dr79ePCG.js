(function() {
	var r2 = Object.defineProperty, Yn = (t, n) => {
		let e = {};
		for (var o in t) r2(e, o, {
			get: t[o],
			enumerable: !0
		});
		return n || r2(e, Symbol.toStringTag, { value: "Module" }), e;
	};
	const s2 = Symbol("Comlink.proxy"), qn = Symbol("Comlink.endpoint"), Wn = Symbol("Comlink.releaseProxy"), lt = Symbol("Comlink.finalizer"), w1 = Symbol("Comlink.thrown"), i2 = (t) => typeof t == "object" && t !== null || typeof t == "function", a2 = new Map([["proxy", {
		canHandle: (t) => i2(t) && t[s2],
		serialize(t) {
			const { port1: n, port2: e } = new MessageChannel();
			return ht(t, n), [e, [e]];
		},
		deserialize(t) {
			return t.start(), Zn(t);
		}
	}], ["throw", {
		canHandle: (t) => i2(t) && w1 in t,
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
	function jn(t, n) {
		for (const e of t) if (n === e || e === "*" || e instanceof RegExp && e.test(n)) return !0;
		return !1;
	}
	function ht(t, n = globalThis, e = ["*"]) {
		n.addEventListener("message", function o(r) {
			if (!r || !r.data) return;
			if (!jn(e, r.origin)) {
				console.warn(`Invalid origin '${r.origin}' for comlink proxy`);
				return;
			}
			const { id: s, type: i, path: a } = Object.assign({ path: [] }, r.data), c = (r.data.argumentList || []).map(D0);
			let u;
			try {
				const h = a.slice(0, -1).reduce((d, A) => d[A], t), l = a.reduce((d, A) => d[A], t);
				switch (i) {
					case "GET":
						u = l;
						break;
					case "SET":
						h[a.slice(-1)[0]] = D0(r.data.value), u = !0;
						break;
					case "APPLY":
						u = l.apply(h, c);
						break;
					case "CONSTRUCT":
						u = r3(new l(...c));
						break;
					case "ENDPOINT":
						{
							const { port1: d, port2: A } = new MessageChannel();
							ht(t, A), u = o3(d, [d]);
						}
						break;
					case "RELEASE":
						u = void 0;
						break;
					default: return;
				}
			} catch (h) {
				u = {
					value: h,
					[w1]: 0
				};
			}
			Promise.resolve(u).catch((h) => ({
				value: h,
				[w1]: 0
			})).then((h) => {
				const [l, d] = x1(h);
				n.postMessage(Object.assign(Object.assign({}, l), { id: s }), d), i === "RELEASE" && (n.removeEventListener("message", o), c2(n), lt in t && typeof t[lt] == "function" && t[lt]());
			}).catch((h) => {
				const [l, d] = x1({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[w1]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, l), { id: s }), d);
			});
		}), n.start && n.start();
	}
	function Xn(t) {
		return t.constructor.name === "MessagePort";
	}
	function c2(t) {
		Xn(t) && t.close();
	}
	function Zn(t, n) {
		const e = /* @__PURE__ */ new Map();
		return t.addEventListener("message", function(r) {
			const { data: s } = r;
			if (!s || !s.id) return;
			const i = e.get(s.id);
			if (i) try {
				i(s);
			} finally {
				e.delete(s.id);
			}
		}), ft(t, e, [], n);
	}
	function g1(t) {
		if (t) throw new Error("Proxy has been released and is not useable");
	}
	function u2(t) {
		return O0(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			c2(t);
		});
	}
	const R1 = /* @__PURE__ */ new WeakMap(), m1 = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const n = (R1.get(t) || 0) - 1;
		R1.set(t, n), n === 0 && u2(t);
	});
	function t3(t, n) {
		const e = (R1.get(n) || 0) + 1;
		R1.set(n, e), m1 && m1.register(t, n, t);
	}
	function n3(t) {
		m1 && m1.unregister(t);
	}
	function ft(t, n, e = [], o = function() {}) {
		let r = !1;
		const s = new Proxy(o, {
			get(i, a) {
				if (g1(r), a === Wn) return () => {
					n3(s), u2(t), n.clear(), r = !0;
				};
				if (a === "then") {
					if (e.length === 0) return { then: () => s };
					const c = O0(t, n, {
						type: "GET",
						path: e.map((u) => u.toString())
					}).then(D0);
					return c.then.bind(c);
				}
				return ft(t, n, [...e, a]);
			},
			set(i, a, c) {
				g1(r);
				const [u, h] = x1(c);
				return O0(t, n, {
					type: "SET",
					path: [...e, a].map((l) => l.toString()),
					value: u
				}, h).then(D0);
			},
			apply(i, a, c) {
				g1(r);
				const u = e[e.length - 1];
				if (u === qn) return O0(t, n, { type: "ENDPOINT" }).then(D0);
				if (u === "bind") return ft(t, n, e.slice(0, -1));
				const [h, l] = l2(c);
				return O0(t, n, {
					type: "APPLY",
					path: e.map((d) => d.toString()),
					argumentList: h
				}, l).then(D0);
			},
			construct(i, a) {
				g1(r);
				const [c, u] = l2(a);
				return O0(t, n, {
					type: "CONSTRUCT",
					path: e.map((h) => h.toString()),
					argumentList: c
				}, u).then(D0);
			}
		});
		return t3(s, t), s;
	}
	function e3(t) {
		return Array.prototype.concat.apply([], t);
	}
	function l2(t) {
		const n = t.map(x1);
		return [n.map((e) => e[0]), e3(n.map((e) => e[1]))];
	}
	const h2 = /* @__PURE__ */ new WeakMap();
	function o3(t, n) {
		return h2.set(t, n), t;
	}
	function r3(t) {
		return Object.assign(t, { [s2]: !0 });
	}
	function x1(t) {
		for (const [n, e] of a2) if (e.canHandle(t)) {
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
		}, h2.get(t) || []];
	}
	function D0(t) {
		switch (t.type) {
			case "HANDLER": return a2.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function O0(t, n, e, o) {
		return new Promise((r) => {
			const s = s3();
			n.set(s, r), t.start && t.start(), t.postMessage(Object.assign({ id: s }, e), o);
		});
	}
	function s3() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	const R = {
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
	}, i3 = 384399 / 149597870.7, a3 = {
		[R.SUN]: {
			name: "Sun",
			type: "star",
			color: "#f5e042",
			radiusKm: 696340,
			kind: "star",
			textureResolution: 512,
			massKg: 198847e25
		},
		[R.MERCURY]: {
			name: "Mercury",
			type: "planet",
			color: "#9c8a78",
			radiusKm: 2439.7,
			kind: "barren",
			textureResolution: 192,
			massKg: 33011e19,
			semiMajorAxisAu: .387098,
			parentBodyId: R.SUN
		},
		[R.VENUS]: {
			name: "Venus",
			type: "planet",
			color: "#f0e3a0",
			radiusKm: 6051.8,
			kind: "molten",
			textureResolution: 224,
			massKg: 48675e20,
			semiMajorAxisAu: .723332,
			parentBodyId: R.SUN
		},
		[R.EARTH]: {
			name: "Earth",
			type: "planet",
			color: "#4a90d9",
			radiusKm: 6371,
			kind: "oceanic",
			textureResolution: 224,
			features: { axialSpin: "eop" },
			massKg: 597237e19,
			semiMajorAxisAu: 1.0000001,
			parentBodyId: R.SUN
		},
		[R.MARS]: {
			name: "Mars",
			type: "planet",
			color: "#c1440e",
			radiusKm: 3389.5,
			kind: "desert",
			textureResolution: 192,
			massKg: 64171e19,
			semiMajorAxisAu: 1.523679,
			parentBodyId: R.SUN
		},
		[R.JUPITER]: {
			name: "Jupiter",
			type: "planet",
			color: "#c8985a",
			radiusKm: 69911,
			kind: "gasGiant",
			textureResolution: 256,
			geometricAlbedo: .52,
			massKg: 18982e23,
			semiMajorAxisAu: 5.2044,
			parentBodyId: R.SUN
		},
		[R.SATURN]: {
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
			parentBodyId: R.SUN
		},
		[R.URANUS]: {
			name: "Uranus",
			type: "planet",
			color: "#a3d6e0",
			radiusKm: 25362,
			kind: "iceGiant",
			textureResolution: 224,
			geometricAlbedo: .51,
			massKg: 868103e20,
			semiMajorAxisAu: 19.2184,
			parentBodyId: R.SUN
		},
		[R.NEPTUNE]: {
			name: "Neptune",
			type: "planet",
			color: "#4166f5",
			radiusKm: 24622,
			kind: "iceGiant",
			textureResolution: 224,
			geometricAlbedo: .41,
			massKg: 102413e21,
			semiMajorAxisAu: 30.110387,
			parentBodyId: R.SUN
		},
		[R.PLUTO]: {
			name: "Pluto",
			type: "dwarf_planet",
			color: "#a26847",
			radiusKm: 1188.3,
			kind: "barren",
			textureResolution: 192,
			massKg: 13029e18,
			semiMajorAxisAu: 39.482,
			parentBodyId: R.SUN
		},
		[R.MOON]: {
			name: "Moon",
			type: "moon",
			color: "#cccccc",
			radiusKm: 1737,
			kind: "barren",
			textureResolution: 192,
			massKg: 7342e19,
			semiMajorAxisAu: i3,
			parentBodyId: R.EARTH
		}
	}, I1 = 149597870.7, dt = 648e3 / Math.PI;
	dt * I1 / 3.2615637771694;
	const f2 = 1e3 / I1, k0 = I1 * f2;
	100 * k0;
	100 / dt;
	const d2 = 3.2615637771694, Mt = k0 * dt;
	25 * Mt;
	function M2(t) {
		return !Number.isFinite(t) || t < 0 ? 0 : t * Mt;
	}
	const c3 = 5e4, u3 = 2e3, l3 = c3 / d2, h3 = u3 / d2;
	M2(l3);
	M2(h3);
	25 * Mt;
	const q = 299792.458, P1 = .001, v1 = 1e3;
	1 * P1, 10 * P1, 100 * P1, 1 * v1, 10 * v1, 100 * v1, .01 * q, .1 * q, .5 * q, 1 * q, 10 * q, 100 * q, 1e3 * q, 1e4 * q, 1e5 * q, 1e6 * q, 1e7 * q, 1e8 * q, 1e9 * q;
	1 * P1;
	1e9 * q;
	1 * v1;
	function f3(t) {
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
	const S2 = Object.fromEntries(Object.entries(a3).map(([t, n]) => [t, f3(n)])), D1 = [
		R.SUN,
		R.MERCURY,
		R.VENUS,
		R.EARTH,
		R.MARS,
		R.JUPITER,
		R.SATURN,
		R.URANUS,
		R.NEPTUNE,
		R.PLUTO,
		R.MOON
	];
	23.4392911 * Math.PI / 180;
	const _2 = S2[R.EARTH]?.radiusKm ?? 6371, A2 = S2[R.SUN]?.radiusKm ?? 696340;
	_2 / A2;
	function d3(t) {
		return {
			x: t.x * k0,
			y: t.y * k0,
			z: t.z * k0
		};
	}
	function p2(t) {
		return !Number.isFinite(t) || t <= 0 ? 0 : t * f2;
	}
	p2(_2);
	p2(A2);
	function M3(t) {
		const n = t.mode, e = n.kind === "visit" ? n.visitId : null;
		let o;
		return n.kind === "watch" || n.kind === "visit" ? o = n.watchId : o = null, {
			viewpoint: t,
			visitId: e,
			watchId: o,
			scenePosition: t.location,
			autoWatch: t.autoWatch,
			solarHeliocentricLayout: t.solarHeliocentricLayout,
			pendingTeleport: t.pendingTeleport,
			pendingOrientationSlew: t.pendingOrientationSlew,
			look: t.look
		};
	}
	M3({
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
	I1 / k0;
	var z1 = Yn({
		AU_PER_LY: () => E2,
		AngleBetween: () => O1,
		AngleFromSun: () => e1,
		Apsis: () => A1,
		ApsisKind: () => x0,
		AstroTime: () => g0,
		Atmosphere: () => en,
		AtmosphereInfo: () => nn,
		AxisInfo: () => qt,
		BackdatePosition: () => W2,
		BaryState: () => ae,
		Body: () => f,
		CALLISTO_RADIUS_KM: () => w3,
		C_AUDAY: () => T1,
		CalcMoonCount: () => L2,
		CombineRotation: () => I0,
		Constellation: () => Ve,
		ConstellationInfo: () => Rn,
		CorrectLightTravel: () => q2,
		DEG2RAD: () => _,
		DefineStar: () => C3,
		DeltaT_EspenakMeeus: () => gt,
		DeltaT_JplHorizons: () => k3,
		EUROPA_RADIUS_KM: () => E3,
		EclipseEvent: () => Nn,
		EclipseKind: () => Z,
		Ecliptic: () => l1,
		EclipticCoordinates: () => F2,
		EclipticGeoMoon: () => $1,
		EclipticLongitude: () => C0,
		Elongation: () => cn,
		ElongationEvent: () => an,
		Equator: () => u1,
		EquatorFromVector: () => Ft,
		EquatorialCoordinates: () => K1,
		GANYMEDE_RADIUS_KM: () => y3,
		GeoEmbState: () => Pt,
		GeoMoon: () => a0,
		GeoMoonState: () => h1,
		GeoVector: () => e0,
		GlobalSolarEclipseInfo: () => Dn,
		GravitySimulator: () => s4,
		HOUR2RAD: () => St,
		HelioDistance: () => L0,
		HelioState: () => W1,
		HelioVector: () => c0,
		Horizon: () => J1,
		HorizonFromVector: () => De,
		HorizontalCoordinates: () => V2,
		HourAngle: () => ye,
		HourAngleEvent: () => rn,
		IO_RADIUS_KM: () => p3,
		IdentityMatrix: () => Pe,
		Illumination: () => j1,
		IlluminationInfo: () => X2,
		InverseRefraction: () => dn,
		InverseRotation: () => r1,
		JUPITER_EQUATORIAL_RADIUS_KM: () => S3,
		JUPITER_MEAN_RADIUS_KM: () => A3,
		JUPITER_POLAR_RADIUS_KM: () => _3,
		JupiterMoons: () => se,
		JupiterMoonsInfo: () => Y2,
		KM_PER_AU: () => U,
		LagrangePoint: () => r4,
		LagrangePointFast: () => Jn,
		Libration: () => G3,
		LibrationInfo: () => U2,
		LocalSolarEclipseInfo: () => Ln,
		LunarEclipseInfo: () => mn,
		MakeRotation: () => Q3,
		MakeTime: () => E,
		MassProduct: () => wt,
		MoonPhase: () => Ht,
		MoonQuarter: () => Z2,
		NextGlobalSolarEclipse: () => qe,
		NextLocalSolarEclipse: () => Xe,
		NextLunarApsis: () => me,
		NextLunarEclipse: () => Ye,
		NextMoonNode: () => n4,
		NextMoonQuarter: () => fe,
		NextPlanetApsis: () => Ie,
		NextTransit: () => t4,
		NodeEventInfo: () => Fn,
		NodeEventKind: () => A0,
		Observer: () => xt,
		ObserverGravity: () => j3,
		ObserverState: () => q3,
		ObserverVector: () => Y3,
		PairLongitude: () => bt,
		Pivot: () => ve,
		PlanetOrbitalPeriod: () => O3,
		RAD2DEG: () => b,
		RAD2HOUR: () => _t,
		Refraction: () => p1,
		RotateState: () => Z1,
		RotateVector: () => E1,
		RotationAxis: () => o4,
		RotationMatrix: () => G,
		Rotation_ECL_EQD: () => pn,
		Rotation_ECL_EQJ: () => Te,
		Rotation_ECL_HOR: () => En,
		Rotation_ECT_EQD: () => yn,
		Rotation_ECT_EQJ: () => Le,
		Rotation_EQD_ECL: () => An,
		Rotation_EQD_ECT: () => wn,
		Rotation_EQD_EQJ: () => nt,
		Rotation_EQD_HOR: () => Kt,
		Rotation_EQJ_ECL: () => Mn,
		Rotation_EQJ_ECT: () => Ne,
		Rotation_EQJ_EQD: () => tt,
		Rotation_EQJ_GAL: () => Oe,
		Rotation_EQJ_HOR: () => Ue,
		Rotation_GAL_EQJ: () => ke,
		Rotation_HOR_ECL: () => Ce,
		Rotation_HOR_EQD: () => Sn,
		Rotation_HOR_EQJ: () => _n,
		Search: () => K,
		SearchAltitude: () => _e,
		SearchGlobalSolarEclipse: () => Tn,
		SearchHourAngle: () => Ee,
		SearchLocalSolarEclipse: () => kn,
		SearchLunarApsis: () => un,
		SearchLunarEclipse: () => vn,
		SearchMaxElongation: () => ge,
		SearchMoonNode: () => Kn,
		SearchMoonPhase: () => _1,
		SearchMoonQuarter: () => tn,
		SearchPeakMagnitude: () => Re,
		SearchPlanetApsis: () => hn,
		SearchRelativeLongitude: () => o1,
		SearchRiseSet: () => Se,
		SearchSunLongitude: () => j2,
		SearchTransit: () => Vn,
		SeasonInfo: () => sn,
		Seasons: () => we,
		SetDeltaTFunction: () => b3,
		SiderealTime: () => k2,
		SphereFromVector: () => Gt,
		Spherical: () => Q0,
		StateVector: () => V,
		SunPosition: () => K2,
		TransitInfo: () => bn,
		Vector: () => D,
		VectorFromHorizon: () => ze,
		VectorFromSphere: () => X1,
		VectorObserver: () => W3,
		e_tilt: () => R0
	});
	const T1 = 173.1446326846693, U = 149597870.69098932, E2 = 63241.07708807546, _ = .017453292519943295, St = .26179938779914946, b = 57.29577951308232, _t = 3.819718634205488, S3 = 71492, _3 = 66854, A3 = 69911, p3 = 1821.6, E3 = 1560.8, y3 = 2631.2, w3 = 2410.3, y2 = 365.24217, w2 = /* @__PURE__ */ new Date("2000-01-01T12:00:00Z"), n0 = 2 * Math.PI, w0 = 3600 * (180 / Math.PI), b0 = 484813681109536e-20, g2 = 10800 * 60, g3 = 2 * g2, R2 = 7292115e-11, R3 = g2 / Math.PI, m3 = -.17 - 5 * Math.log10(R3), N1 = 29.530588, L1 = 24 * 3600, x3 = L1 * 1e3, m2 = .9972695717592592, i1 = 695700, x2 = i1 / U, s0 = .996647180302104, H0 = s0 * s0, M0 = 6378.1366, I3 = M0 / U, P3 = M0 * s0, I2 = 6371, v3 = I2 + 88, D3 = 1738.1 / U, j = 1737.4, P2 = 1736, z3 = P2 / U, T3 = 34 / 60, At = 81.30056, a1 = .0002959122082855911, pt = 4912547451450812e-26, Et = 7243452486162703e-25, c1 = 8887692390113509e-25, yt = 9549535105779258e-26, V0 = 2.825345909524226e-7, F0 = 8.459715185680659e-8, G0 = 1.292024916781969e-8, K0 = 1.524358900784276e-8, N3 = 218869976542597e-26, U1 = c1 / At;
	function wt(t) {
		switch (t) {
			case f.Sun: return a1;
			case f.Mercury: return pt;
			case f.Venus: return Et;
			case f.Earth: return c1;
			case f.Moon: return U1;
			case f.EMB: return c1 + U1;
			case f.Mars: return yt;
			case f.Jupiter: return V0;
			case f.Saturn: return F0;
			case f.Uranus: return G0;
			case f.Neptune: return K0;
			case f.Pluto: return N3;
			default: throw `Do not know mass product for body: ${t}`;
		}
	}
	function C1(t) {
		if (t !== !0 && t !== !1) throw console.trace(), `Value is not boolean: ${t}`;
		return t;
	}
	function P(t) {
		if (!Number.isFinite(t)) throw console.trace(), `Value is not a finite number: ${t}`;
		return t;
	}
	function J0(t) {
		return t - Math.floor(t);
	}
	function O1(t, n) {
		const e = t.x * t.x + t.y * t.y + t.z * t.z;
		if (Math.abs(e) < 1e-8) throw "AngleBetween: first vector is too short.";
		const o = n.x * n.x + n.y * n.y + n.z * n.z;
		if (Math.abs(o) < 1e-8) throw "AngleBetween: second vector is too short.";
		const r = (t.x * n.x + t.y * n.y + t.z * n.z) / Math.sqrt(e * o);
		return r <= -1 ? 180 : r >= 1 ? 0 : b * Math.acos(r);
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
	], U3 = [
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
	function v2(t) {
		const n = L3.indexOf(t);
		return n >= 0 ? U3[n] : null;
	}
	function k1(t) {
		const n = v2(t);
		return n && n.dist > 0 ? n : null;
	}
	function C3(t, n, e, o) {
		const r = v2(t);
		if (!r) throw `Invalid star body: ${t}`;
		if (P(n), P(e), P(o), n < 0 || n >= 24) throw `Invalid right ascension for star: ${n}`;
		if (e < -90 || e > 90) throw `Invalid declination for star: ${e}`;
		if (o < 1) throw `Invalid star distance: ${o}`;
		r.ra = n, r.dec = e, r.dist = o * E2;
	}
	var O;
	(function(t) {
		t[t.From2000 = 0] = "From2000", t[t.Into2000 = 1] = "Into2000";
	})(O || (O = {}));
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
	function O3(t) {
		if (t in i0) return i0[t].OrbitalPeriod;
		throw `Unknown orbital period for: ${t}`;
	}
	const Q = {
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
		var n, e, o, r, s, i, a;
		const c = 2e3 + (t - 14) / y2;
		return c < -500 ? (n = (c - 1820) / 100, -20 + 32 * n * n) : c < 500 ? (n = c / 100, e = n * n, o = n * e, r = e * e, s = e * o, i = o * o, 10583.6 - 1014.41 * n + 33.78311 * e - 5.952053 * o - .1798452 * r + .022174192 * s + .0090316521 * i) : c < 1600 ? (n = (c - 1e3) / 100, e = n * n, o = n * e, r = e * e, s = e * o, i = o * o, 1574.2 - 556.01 * n + 71.23472 * e + .319781 * o - .8503463 * r - .005050998 * s + .0083572073 * i) : c < 1700 ? (n = c - 1600, e = n * n, o = n * e, 120 - .9808 * n - .01532 * e + o / 7129) : c < 1800 ? (n = c - 1700, e = n * n, o = n * e, r = e * e, 8.83 + .1603 * n - .0059285 * e + 13336e-8 * o - r / 1174e3) : c < 1860 ? (n = c - 1800, e = n * n, o = n * e, r = e * e, s = e * o, i = o * o, a = o * r, 13.72 - .332447 * n + .0068612 * e + .0041116 * o - 37436e-8 * r + 121272e-10 * s - 1.699e-7 * i + 875e-12 * a) : c < 1900 ? (n = c - 1860, e = n * n, o = n * e, r = e * e, s = e * o, 7.62 + .5737 * n - .251754 * e + .01680668 * o - .0004473624 * r + s / 233174) : c < 1920 ? (n = c - 1900, e = n * n, o = n * e, r = e * e, -2.79 + 1.494119 * n - .0598939 * e + .0061966 * o - 197e-6 * r) : c < 1941 ? (n = c - 1920, e = n * n, o = n * e, 21.2 + .84493 * n - .0761 * e + .0020936 * o) : c < 1961 ? (n = c - 1950, e = n * n, o = n * e, 29.07 + .407 * n - e / 233 + o / 2547) : c < 1986 ? (n = c - 1975, e = n * n, o = n * e, 45.45 + 1.067 * n - e / 260 - o / 718) : c < 2005 ? (n = c - 2e3, e = n * n, o = n * e, r = e * e, s = e * o, 63.86 + .3345 * n - .060374 * e + .0017275 * o + 651814e-9 * r + 2373599e-11 * s) : c < 2050 ? (n = c - 2e3, 62.92 + .32217 * n + .005589 * n * n) : c < 2150 ? (n = (c - 1820) / 100, -20 + 32 * n * n - .5628 * (2150 - c)) : (n = (c - 1820) / 100, -20 + 32 * n * n);
	}
	function k3(t) {
		return gt(Math.min(t, 17 * y2));
	}
	let D2 = gt;
	function b3(t) {
		D2 = t;
	}
	function z2(t) {
		return t + D2(t) / 86400;
	}
	var g0 = class ut {
		constructor(n) {
			if (n instanceof ut) {
				this.date = n.date, this.ut = n.ut, this.tt = n.tt;
				return;
			}
			const e = 1e3 * 3600 * 24;
			if (n instanceof Date && Number.isFinite(n.getTime())) {
				this.date = n, this.ut = (n.getTime() - w2.getTime()) / e, this.tt = z2(this.ut);
				return;
			}
			if (Number.isFinite(n)) {
				this.date = new Date(w2.getTime() + n * e), this.ut = n, this.tt = z2(this.ut);
				return;
			}
			throw "Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date.";
		}
		static FromTerrestrialTime(n) {
			let e = new ut(n);
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
			return new ut(this.ut + n);
		}
	};
	function H3(t, n, e) {
		return new g0(t.ut + e * (n.ut - t.ut));
	}
	function E(t) {
		return t instanceof g0 ? t : new g0(t);
	}
	function V3(t) {
		function n(d) {
			return d % g3 * b0;
		}
		const e = t.tt / 36525, o = n(1287104.79305 + e * 129596581.0481), r = n(335779.526232 + e * 1739527262.8478), s = n(1072260.70369 + e * 1602961601.209), i = n(450160.398036 - e * 6962890.5431);
		let a = Math.sin(i), c = Math.cos(i), u = (-172064161 - 174666 * e) * a + 33386 * c, h = (92052331 + 9086 * e) * c + 15377 * a, l = 2 * (r - s + i);
		return a = Math.sin(l), c = Math.cos(l), u += (-13170906 - 1675 * e) * a - 13696 * c, h += (5730336 - 3015 * e) * c - 4587 * a, l = 2 * (r + i), a = Math.sin(l), c = Math.cos(l), u += (-2276413 - 234 * e) * a + 2796 * c, h += (978459 - 485 * e) * c + 1374 * a, l = 2 * i, a = Math.sin(l), c = Math.cos(l), u += (2074554 + 207 * e) * a - 698 * c, h += (-897492 + 470 * e) * c - 291 * a, a = Math.sin(o), c = Math.cos(o), u += (1475877 - 3633 * e) * a + 11817 * c, h += (73871 - 184 * e) * c - 1924 * a, {
			dpsi: -135e-6 + u * 1e-7,
			deps: 388e-6 + h * 1e-7
		};
	}
	function T2(t) {
		var n = t.tt / 36525;
		return (((((-4.34e-8 * n - 576e-9) * n + .0020034) * n - 1831e-7) * n - 46.836769) * n + 84381.406) / 3600;
	}
	var b1;
	function R0(t) {
		if (!b1 || Math.abs(b1.tt - t.tt) > 1e-6) {
			const n = V3(t), e = T2(t), o = e + n.deps / 3600;
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
	function N2(t, n) {
		const e = t * _, o = Math.cos(e), r = Math.sin(e);
		return [
			n[0],
			n[1] * o - n[2] * r,
			n[1] * r + n[2] * o
		];
	}
	function F3(t, n) {
		return N2(T2(t), n);
	}
	let L2 = 0;
	function m0(t) {
		++L2;
		const n = t.tt / 36525;
		function e(T, C) {
			const H = [];
			let F;
			for (F = 0; F <= C - T; ++F) H.push(0);
			return {
				min: T,
				array: H
			};
		}
		function o(T, C, H, F) {
			const $ = [];
			for (let v0 = 0; v0 <= C - T; ++v0) $.push(e(H, F));
			return {
				min: T,
				array: $
			};
		}
		function r(T, C, H) {
			const F = T.array[C - T.min];
			return F.array[H - F.min];
		}
		function s(T, C, H, F) {
			const $ = T.array[C - T.min];
			$.array[H - $.min] = F;
		}
		let i, a, c, u, h, l, d, A, M, p, y, g, m, w, I, x, z, v, k, N, B, J, W, u0 = o(-6, 6, 1, 4), r0 = o(-6, 6, 1, 4);
		function p0(T, C) {
			return r(u0, T, C);
		}
		function P0(T, C) {
			return r(r0, T, C);
		}
		function l0(T, C, H) {
			return s(u0, T, C, H);
		}
		function h0(T, C, H) {
			return s(r0, T, C, H);
		}
		function at(T, C, H, F, $) {
			$(T * H - C * F, C * H + T * F);
		}
		function L(T) {
			return Math.sin(n0 * T);
		}
		d = n * n, M = 0, W = 0, y = 0, g = 3422.7;
		var f0 = L(.19833 + .05611 * n), Xt = L(.27869 + .04508 * n), Zt = L(.16827 - .36903 * n), t2 = L(.34734 - 5.37261 * n), n2 = L(.10498 - 5.37899 * n), ct = L(.42681 - .41855 * n), f4 = L(.14943 - 5.37511 * n);
		for (v = .84 * f0 + .31 * Xt + 14.27 * Zt + 7.26 * t2 + .28 * n2 + .24 * ct, k = 2.94 * f0 + .31 * Xt + 14.27 * Zt + 9.34 * t2 + 1.12 * n2 + .83 * ct, N = -6.4 * f0 - 1.89 * ct, B = .21 * f0 + .31 * Xt + 14.27 * Zt - 88.7 * t2 - 15.3 * n2 + .24 * ct - 1.86 * f4, J = v - N, A = -3332e-9 * L(.59734 - 5.37261 * n) - 539e-9 * L(.35498 - 5.37899 * n) - 64e-9 * L(.39943 - 5.37511 * n), m = n0 * J0(.60643382 + 1336.85522467 * n - 313e-8 * d) + v / w0, w = n0 * J0(.37489701 + 1325.55240982 * n + 2565e-8 * d) + k / w0, I = n0 * J0(.99312619 + 99.99735956 * n - 44e-8 * d) + N / w0, x = n0 * J0(.25909118 + 1342.2278298 * n - 892e-8 * d) + B / w0, z = n0 * J0(.82736186 + 1236.85308708 * n - 397e-8 * d) + J / w0, h = 1; h <= 4; ++h) {
			switch (h) {
				case 1:
					c = w, a = 4, u = 1.000002208;
					break;
				case 2:
					c = I, a = 3, u = .997504612 - .002495388 * n;
					break;
				case 3:
					c = x, a = 4, u = 1.000002708 + 139.978 * A;
					break;
				case 4:
					c = z, a = 6, u = 1;
					break;
				default: throw `Internal error: I = ${h}`;
			}
			for (l0(0, h, 1), l0(1, h, Math.cos(c) * u), h0(0, h, 0), h0(1, h, Math.sin(c) * u), l = 2; l <= a; ++l) at(p0(l - 1, h), P0(l - 1, h), p0(1, h), P0(1, h), (T, C) => (l0(l, h, T), h0(l, h, C)));
			for (l = 1; l <= a; ++l) l0(-l, h, p0(l, h)), h0(-l, h, -P0(l, h));
		}
		function Bn(T, C, H, F) {
			for (var $ = {
				x: 1,
				y: 0
			}, v0 = [
				0,
				T,
				C,
				H,
				F
			], E0 = 1; E0 <= 4; ++E0) v0[E0] !== 0 && at($.x, $.y, p0(v0[E0], E0), P0(v0[E0], E0), (e2, s1) => ($.x = e2, $.y = s1));
			return $;
		}
		function S(T, C, H, F, $, v0, E0, e2) {
			var s1 = Bn($, v0, E0, e2);
			M += T * s1.y, W += C * s1.y, y += H * s1.x, g += F * s1.x;
		}
		S(13.902, 14.06, -.001, .2607, 0, 0, 0, 4), S(.403, -4.01, .394, .0023, 0, 0, 0, 3), S(2369.912, 2373.36, .601, 28.2333, 0, 0, 0, 2), S(-125.154, -112.79, -.725, -.9781, 0, 0, 0, 1), S(1.979, 6.98, -.445, .0433, 1, 0, 0, 4), S(191.953, 192.72, .029, 3.0861, 1, 0, 0, 2), S(-8.466, -13.51, .455, -.1093, 1, 0, 0, 1), S(22639.5, 22609.07, .079, 186.5398, 1, 0, 0, 0), S(18.609, 3.59, -.094, .0118, 1, 0, 0, -1), S(-4586.465, -4578.13, -.077, 34.3117, 1, 0, 0, -2), S(3.215, 5.44, .192, -.0386, 1, 0, 0, -3), S(-38.428, -38.64, .001, .6008, 1, 0, 0, -4), S(-.393, -1.43, -.092, .0086, 1, 0, 0, -6), S(-.289, -1.59, .123, -.0053, 0, 1, 0, 4), S(-24.42, -25.1, .04, -.3, 0, 1, 0, 2), S(18.023, 17.93, .007, .1494, 0, 1, 0, 1), S(-668.146, -126.98, -1.302, -.3997, 0, 1, 0, 0), S(.56, .32, -.001, -.0037, 0, 1, 0, -1), S(-165.145, -165.06, .054, 1.9178, 0, 1, 0, -2), S(-1.877, -6.46, -.416, .0339, 0, 1, 0, -4), S(.213, 1.02, -.074, .0054, 2, 0, 0, 4), S(14.387, 14.78, -.017, .2833, 2, 0, 0, 2), S(-.586, -1.2, .054, -.01, 2, 0, 0, 1), S(769.016, 767.96, .107, 10.1657, 2, 0, 0, 0), S(1.75, 2.01, -.018, .0155, 2, 0, 0, -1), S(-211.656, -152.53, 5.679, -.3039, 2, 0, 0, -2), S(1.225, .91, -.03, -.0088, 2, 0, 0, -3), S(-30.773, -34.07, -.308, .3722, 2, 0, 0, -4), S(-.57, -1.4, -.074, .0109, 2, 0, 0, -6), S(-2.921, -11.75, .787, -.0484, 1, 1, 0, 2), S(1.267, 1.52, -.022, .0164, 1, 1, 0, 1), S(-109.673, -115.18, .461, -.949, 1, 1, 0, 0), S(-205.962, -182.36, 2.056, 1.4437, 1, 1, 0, -2), S(.233, .36, .012, -.0025, 1, 1, 0, -3), S(-4.391, -9.66, -.471, .0673, 1, 1, 0, -4), S(.283, 1.53, -.111, .006, 1, -1, 0, 4), S(14.577, 31.7, -1.54, .2302, 1, -1, 0, 2), S(147.687, 138.76, .679, 1.1528, 1, -1, 0, 0), S(-1.089, .55, .021, 0, 1, -1, 0, -1), S(28.475, 23.59, -.443, -.2257, 1, -1, 0, -2), S(-.276, -.38, -.006, -.0036, 1, -1, 0, -3), S(.636, 2.27, .146, -.0102, 1, -1, 0, -4), S(-.189, -1.68, .131, -.0028, 0, 2, 0, 2), S(-7.486, -.66, -.037, -.0086, 0, 2, 0, 0), S(-8.096, -16.35, -.74, .0918, 0, 2, 0, -2), S(-5.741, -.04, 0, -9e-4, 0, 0, 2, 2), S(.255, 0, 0, 0, 0, 0, 2, 1), S(-411.608, -.2, 0, -.0124, 0, 0, 2, 0), S(.584, .84, 0, .0071, 0, 0, 2, -1), S(-55.173, -52.14, 0, -.1052, 0, 0, 2, -2), S(.254, .25, 0, -.0017, 0, 0, 2, -3), S(.025, -1.67, 0, .0031, 0, 0, 2, -4), S(1.06, 2.96, -.166, .0243, 3, 0, 0, 2), S(36.124, 50.64, -1.3, .6215, 3, 0, 0, 0), S(-13.193, -16.4, .258, -.1187, 3, 0, 0, -2), S(-1.187, -.74, .042, .0074, 3, 0, 0, -4), S(-.293, -.31, -.002, .0046, 3, 0, 0, -6), S(-.29, -1.45, .116, -.0051, 2, 1, 0, 2), S(-7.649, -10.56, .259, -.1038, 2, 1, 0, 0), S(-8.627, -7.59, .078, -.0192, 2, 1, 0, -2), S(-2.74, -2.54, .022, .0324, 2, 1, 0, -4), S(1.181, 3.32, -.212, .0213, 2, -1, 0, 2), S(9.703, 11.67, -.151, .1268, 2, -1, 0, 0), S(-.352, -.37, .001, -.0028, 2, -1, 0, -1), S(-2.494, -1.17, -.003, -.0017, 2, -1, 0, -2), S(.36, .2, -.012, -.0043, 2, -1, 0, -4), S(-1.167, -1.25, .008, -.0106, 1, 2, 0, 0), S(-7.412, -6.12, .117, .0484, 1, 2, 0, -2), S(-.311, -.65, -.032, .0044, 1, 2, 0, -4), S(.757, 1.82, -.105, .0112, 1, -2, 0, 2), S(2.58, 2.32, .027, .0196, 1, -2, 0, 0), S(2.533, 2.4, -.014, -.0212, 1, -2, 0, -2), S(-.344, -.57, -.025, .0036, 0, 3, 0, -2), S(-.992, -.02, 0, 0, 1, 0, 2, 2), S(-45.099, -.02, 0, -.001, 1, 0, 2, 0), S(-.179, -9.52, 0, -.0833, 1, 0, 2, -2), S(-.301, -.33, 0, .0014, 1, 0, 2, -4), S(-6.382, -3.37, 0, -.0481, 1, 0, -2, 2), S(39.528, 85.13, 0, -.7136, 1, 0, -2, 0), S(9.366, .71, 0, -.0112, 1, 0, -2, -2), S(.202, .02, 0, 0, 1, 0, -2, -4), S(.415, .1, 0, .0013, 0, 1, 2, 0), S(-2.152, -2.26, 0, -.0066, 0, 1, 2, -2), S(-1.44, -1.3, 0, .0014, 0, 1, -2, 2), S(.384, -.04, 0, 0, 0, 1, -2, -2), S(1.938, 3.6, -.145, .0401, 4, 0, 0, 0), S(-.952, -1.58, .052, -.013, 4, 0, 0, -2), S(-.551, -.94, .032, -.0097, 3, 1, 0, 0), S(-.482, -.57, .005, -.0045, 3, 1, 0, -2), S(.681, .96, -.026, .0115, 3, -1, 0, 0), S(-.297, -.27, .002, -9e-4, 2, 2, 0, -2), S(.254, .21, -.003, 0, 2, -2, 0, -2), S(-.25, -.22, .004, .0014, 1, 3, 0, -2), S(-3.996, 0, 0, 4e-4, 2, 0, 2, 0), S(.557, -.75, 0, -.009, 2, 0, 2, -2), S(-.459, -.38, 0, -.0053, 2, 0, -2, 2), S(-1.298, .74, 0, 4e-4, 2, 0, -2, 0), S(.538, 1.14, 0, -.0141, 2, 0, -2, -2), S(.263, .02, 0, 0, 1, 1, 2, 0), S(.426, .07, 0, -6e-4, 1, 1, -2, -2), S(-.304, .03, 0, 3e-4, 1, -1, 2, 0), S(-.372, -.19, 0, -.0027, 1, -1, -2, 2), S(.418, 0, 0, 0, 0, 0, 4, 0), S(-.33, -.04, 0, 0, 3, 0, 2, 0);
		function d0(T, C, H, F, $) {
			return T * Bn(C, H, F, $).y;
		}
		p = 0, p += d0(-526.069, 0, 0, 1, -2), p += d0(-3.352, 0, 0, 1, -4), p += d0(44.297, 1, 0, 1, -2), p += d0(-6, 1, 0, 1, -4), p += d0(20.599, -1, 0, 1, 0), p += d0(-30.598, -1, 0, 1, -2), p += d0(-24.649, -2, 0, 1, 0), p += d0(-2, -2, 0, 1, -2), p += d0(-22.571, 0, 1, 1, -2), p += d0(10.985, 0, -1, 1, -2), M += .82 * L(.7736 - 62.5512 * n) + .31 * L(.0466 - 125.1025 * n) + .35 * L(.5785 - 25.1042 * n) + .66 * L(.4591 + 1335.8075 * n) + .64 * L(.313 - 91.568 * n) + 1.14 * L(.148 + 1331.2898 * n) + .21 * L(.5918 + 1056.5859 * n) + .44 * L(.5784 + 1322.8595 * n) + .24 * L(.2275 - 5.7374 * n) + .28 * L(.2965 + 2.6929 * n) + .33 * L(.3132 + 6.3368 * n), i = x + W / w0;
		let d4 = (1.000002708 + 139.978 * A) * (18519.699999999997 + y) * Math.sin(i) - 6.24 * Math.sin(3 * i) + p;
		return {
			geo_eclip_lon: n0 * J0((m + M / w0) / n0),
			geo_eclip_lat: Math.PI / (180 * 3600) * d4,
			distance_au: w0 * I3 / (.999953253 * g)
		};
	}
	var U2 = class {
		constructor(t, n, e, o, r, s) {
			this.elat = t, this.elon = n, this.mlat = e, this.mlon = o, this.dist_km = r, this.diam_deg = s;
		}
	};
	function G3(t) {
		const n = E(t), e = n.tt / 36525, o = e * e, r = o * e, s = o * o, i = m0(n), a = i.geo_eclip_lon, c = i.geo_eclip_lat, u = i.distance_au * U, h = _ * 1.543, l = _ * n1(93.272095 + 483202.0175233 * e - .0036539 * o - r / 3526e3 + s / 86331e4), d = _ * n1(125.0445479 - 1934.1362891 * e + .0020754 * o + r / 467441 - s / 60616e3), A = _ * n1(357.5291092 + 35999.0502909 * e - 1536e-7 * o + r / 2449e4), M = _ * n1(134.9633964 + 477198.8675055 * e + .0087414 * o + r / 69699 - s / 14712e3), p = _ * n1(297.8501921 + 445267.1114034 * e - .0018819 * o + r / 545868 - s / 113065e3), y = 1 - .002516 * e - 74e-7 * o, g = a - d, m = Math.atan2(Math.sin(g) * Math.cos(c) * Math.cos(h) - Math.sin(c) * Math.sin(h), Math.cos(g) * Math.cos(c)), w = t1(b * (m - l)), I = Math.asin(-Math.sin(g) * Math.cos(c) * Math.sin(h) - Math.sin(c) * Math.cos(h)), x = _ * (119.75 + 131.849 * e), z = _ * (72.56 + 20.186 * e), v = -.02752 * Math.cos(M) + -.02245 * Math.sin(l) + .00684 * Math.cos(M - 2 * l) + -.00293 * Math.cos(2 * l) + -85e-5 * Math.cos(2 * l - 2 * p) + -54e-5 * Math.cos(M - 2 * p) + -2e-4 * Math.sin(M + l) + -2e-4 * Math.cos(M + 2 * l) + -2e-4 * Math.cos(M - l) + 14e-5 * Math.cos(M + 2 * l - 2 * p), k = -.02816 * Math.sin(M) + .02244 * Math.cos(l) + -.00682 * Math.sin(M - 2 * l) + -.00279 * Math.sin(2 * l) + -83e-5 * Math.sin(2 * l - 2 * p) + 69e-5 * Math.sin(M - 2 * p) + 4e-4 * Math.cos(M + l) + -25e-5 * Math.sin(2 * M) + -23e-5 * Math.sin(M + 2 * l) + 2e-4 * Math.cos(M - l) + 19e-5 * Math.sin(M - l) + 13e-5 * Math.sin(M + 2 * l - 2 * p) + -1e-4 * Math.cos(M - 3 * l), N = -(.0252 * y * Math.sin(A) + .00473 * Math.sin(2 * M - 2 * l) + -.00467 * Math.sin(M) + .00396 * Math.sin(x) + .00276 * Math.sin(2 * M - 2 * p) + .00196 * Math.sin(d) + -.00183 * Math.cos(M - l) + .00115 * Math.sin(M - 2 * p) + -96e-5 * Math.sin(M - p) + 46e-5 * Math.sin(2 * l - 2 * p) + -39e-5 * Math.sin(M - l) + -32e-5 * Math.sin(M - A - p) + 27e-5 * Math.sin(2 * M - A - 2 * p) + 23e-5 * Math.sin(z) + -14e-5 * Math.sin(2 * p) + 14e-5 * Math.cos(2 * M - 2 * l) + -12e-5 * Math.sin(M - 2 * l) + -12e-5 * Math.sin(2 * M) + 11e-5 * Math.sin(2 * M - 2 * A - 2 * p)) + (v * Math.cos(m) + k * Math.sin(m)) * Math.tan(I), B = k * Math.cos(m) - v * Math.sin(m), J = 2 * b * Math.atan(j / Math.sqrt(u * u - j * j));
		return new U2(b * I + B, w + N, b * c, b * a, u, J);
	}
	function C2(t, n) {
		return [
			t.rot[0][0] * n[0] + t.rot[1][0] * n[1] + t.rot[2][0] * n[2],
			t.rot[0][1] * n[0] + t.rot[1][1] * n[1] + t.rot[2][1] * n[2],
			t.rot[0][2] * n[0] + t.rot[1][2] * n[1] + t.rot[2][2] * n[2]
		];
	}
	function $0(t, n, e) {
		return C2(H1(n, e), t);
	}
	function O2(t, n, e) {
		return Z1(H1(n, e), t);
	}
	function H1(t, n) {
		const e = t.tt / 36525;
		let o = 84381.406, r = ((((-9.51e-8 * e + 132851e-9) * e - .00114045) * e - 1.0790069) * e + 5038.481507) * e, s = ((((3.337e-7 * e - 467e-9) * e - .00772503) * e + .0512623) * e - .025754) * e + o, i = ((((-56e-9 * e + 170663e-9) * e - .00121197) * e - 2.3814292) * e + 10.556403) * e;
		o *= b0, r *= b0, s *= b0, i *= b0;
		const a = Math.sin(o), c = Math.cos(o), u = Math.sin(-r), h = Math.cos(-r), l = Math.sin(-s), d = Math.cos(-s), A = Math.sin(i), M = Math.cos(i), p = M * h - u * A * d, y = M * u * c + A * d * h * c - a * A * l, g = M * u * a + A * d * h * a + c * A * l, m = -A * h - u * M * d, w = -A * u * c + M * d * h * c - a * M * l, I = -A * u * a + M * d * h * a + c * M * l, x = u * l, z = -l * h * c - a * d, v = -l * h * a + d * c;
		if (n === O.Into2000) return new G([
			[
				p,
				y,
				g
			],
			[
				m,
				w,
				I
			],
			[
				x,
				z,
				v
			]
		]);
		if (n === O.From2000) return new G([
			[
				p,
				m,
				x
			],
			[
				y,
				w,
				z
			],
			[
				g,
				I,
				v
			]
		]);
		throw "Invalid precess direction";
	}
	function K3(t) {
		let n = 360 * ((.779057273264 + .00273781191135448 * t.ut + t.ut % 1) % 1);
		return n < 0 && (n += 360), n;
	}
	let V1;
	function S0(t) {
		if (!V1 || V1.tt !== t.tt) {
			const n = t.tt / 36525;
			let e = 15 * R0(t).ee;
			const o = K3(t);
			let r = ((e + .014506 + ((((-3.68e-8 * n - 29956e-9) * n - 44e-8) * n + 1.3915817) * n + 4612.156534) * n) / 3600 + o) % 360 / 15;
			r < 0 && (r += 24), V1 = {
				tt: t.tt,
				st: r
			};
		}
		return V1.st;
	}
	function k2(t) {
		return S0(E(t));
	}
	function J3(t, n) {
		const e = t[0] * U, o = t[1] * U, r = t[2] * U, s = Math.hypot(e, o);
		let i, a, c;
		if (s < 1e-6) i = 0, a = r > 0 ? 90 : -90, c = Math.abs(r) - P3;
		else {
			for (i = b * Math.atan2(o, e) - 15 * n; i <= -180;) i += 360;
			for (; i > 180;) i -= 360;
			let u = Math.atan2(r, s), h, l, d, A = 0;
			for (;;) {
				if (++A > 10) throw "inverse_terra failed to converge.";
				h = Math.cos(u), l = Math.sin(u);
				const p = (H0 - 1) * M0, y = h * h, g = l * l, m = y + H0 * g;
				d = Math.sqrt(m);
				const w = p * l * h / d - r * h + s * l;
				if (Math.abs(w) < 1e-8) break;
				const I = p * ((y - g) / d - g * y * (H0 - 1) / (p * m)) + r * l + s * h;
				u -= w / I;
			}
			a = b * u;
			const M = M0 / d;
			Math.abs(l) > Math.abs(h) ? c = r / l - H0 * M : c = s / h - M;
		}
		return new xt(a, i, 1e3 * c);
	}
	function Rt(t, n) {
		const e = t.latitude * _, o = Math.sin(e), r = Math.cos(e), s = 1 / Math.hypot(r, s0 * o), i = H0 * s, a = t.height / 1e3, c = M0 * s + a, u = M0 * i + a, h = (15 * n + t.longitude) * _, l = Math.sin(h), d = Math.cos(h);
		return {
			pos: [
				c * r * d / U,
				c * r * l / U,
				u * o / U
			],
			vel: [
				-R2 * c * r * l * 86400 / U,
				R2 * c * r * d * 86400 / U,
				0
			]
		};
	}
	function B0(t, n, e) {
		return C2(F1(n, e), t);
	}
	function b2(t, n, e) {
		return Z1(F1(n, e), t);
	}
	function F1(t, n) {
		const e = R0(t), o = e.mobl * _, r = e.tobl * _, s = e.dpsi * b0, i = Math.cos(o), a = Math.sin(o), c = Math.cos(r), u = Math.sin(r), h = Math.cos(s), l = Math.sin(s), d = h, A = -l * i, M = -l * a, p = l * c, y = h * i * c + a * u, g = h * a * c - i * u, m = l * u, w = h * i * u - a * c, I = h * a * u + i * c;
		if (n === O.From2000) return new G([
			[
				d,
				p,
				m
			],
			[
				A,
				y,
				w
			],
			[
				M,
				g,
				I
			]
		]);
		if (n === O.Into2000) return new G([
			[
				d,
				A,
				M
			],
			[
				p,
				y,
				g
			],
			[
				m,
				w,
				I
			]
		]);
		throw "Invalid precess direction";
	}
	function G1(t, n, e) {
		return e === O.Into2000 ? $0(B0(t, n, e), n, e) : B0($0(t, n, e), n, e);
	}
	function $3(t, n, e) {
		return e === O.Into2000 ? O2(b2(t, n, e), n, e) : b2(O2(t, n, e), n, e);
	}
	function H2(t, n) {
		const e = Rt(n, S0(t)).pos;
		return G1(e, t, O.Into2000);
	}
	var D = class {
		constructor(t, n, e, o) {
			this.x = t, this.y = n, this.z = e, this.t = o;
		}
		Length() {
			return Math.hypot(this.x, this.y, this.z);
		}
	}, V = class {
		constructor(t, n, e, o, r, s, i) {
			this.x = t, this.y = n, this.z = e, this.vx = o, this.vy = r, this.vz = s, this.t = i;
		}
	}, Q0 = class {
		constructor(t, n, e) {
			this.lat = P(t), this.lon = P(n), this.dist = P(e);
		}
	}, K1 = class {
		constructor(t, n, e, o) {
			this.ra = P(t), this.dec = P(n), this.dist = P(e), this.vec = o;
		}
	};
	function B3(t) {
		if (!(t instanceof Array) || t.length !== 3) return !1;
		for (let n = 0; n < 3; ++n) {
			if (!(t[n] instanceof Array) || t[n].length !== 3) return !1;
			for (let e = 0; e < 3; ++e) if (!Number.isFinite(t[n][e])) return !1;
		}
		return !0;
	}
	var G = class {
		constructor(t) {
			this.rot = t;
		}
	};
	function Q3(t) {
		if (!B3(t)) throw "Argument must be a [3][3] array of numbers";
		return new G(t);
	}
	var V2 = class {
		constructor(t, n, e, o) {
			this.azimuth = P(t), this.altitude = P(n), this.ra = P(e), this.dec = P(o);
		}
	}, F2 = class {
		constructor(t, n, e) {
			this.vec = t, this.elat = P(n), this.elon = P(e);
		}
	};
	function mt(t, n) {
		return new D(t[0], t[1], t[2], n);
	}
	function G2(t, n) {
		const e = mt(t, n), o = e.x * e.x + e.y * e.y, r = Math.sqrt(o + e.z * e.z);
		if (o === 0) {
			if (e.z === 0) throw "Indeterminate sky coordinates";
			return new K1(0, e.z < 0 ? -90 : 90, r, e);
		}
		let s = _t * Math.atan2(e.y, e.x);
		s < 0 && (s += 24);
		const i = b * Math.atan2(t[2], Math.sqrt(o));
		return new K1(s, i, r, e);
	}
	function Y0(t, n) {
		const e = t * _, o = Math.cos(e), r = Math.sin(e);
		return [
			o * n[0] + r * n[1],
			o * n[1] - r * n[0],
			n[2]
		];
	}
	function J1(t, n, e, o, r) {
		let s = E(t);
		q0(n), P(e), P(o);
		const i = Math.sin(n.latitude * _), a = Math.cos(n.latitude * _), c = Math.sin(n.longitude * _), u = Math.cos(n.longitude * _), h = Math.sin(o * _), l = Math.cos(o * _), d = Math.sin(e * St), A = Math.cos(e * St);
		let M = [
			a * u,
			a * c,
			i
		], p = [
			-i * u,
			-i * c,
			a
		], y = [
			c,
			-u,
			0
		];
		const g = -15 * S0(s);
		let m = Y0(g, M), w = Y0(g, p), I = Y0(g, y), x = [
			l * A,
			l * d,
			h
		];
		const z = x[0] * m[0] + x[1] * m[1] + x[2] * m[2], v = x[0] * w[0] + x[1] * w[1] + x[2] * w[2], k = x[0] * I[0] + x[1] * I[1] + x[2] * I[2];
		let N = Math.hypot(v, k), B;
		N > 0 ? (B = -b * Math.atan2(k, v), B < 0 && (B += 360)) : B = 0;
		let J = b * Math.atan2(N, z), W = e, u0 = o;
		if (r) {
			let r0 = J, p0 = p1(r, 90 - J);
			if (J -= p0, p0 > 0 && J > 3e-4) {
				const P0 = Math.sin(J * _), l0 = Math.cos(J * _), h0 = Math.sin(r0 * _), at = Math.cos(r0 * _), L = [];
				for (let f0 = 0; f0 < 3; ++f0) L.push((x[f0] - at * m[f0]) / h0 * P0 + m[f0] * l0);
				N = Math.hypot(L[0], L[1]), N > 0 ? (W = _t * Math.atan2(L[1], L[0]), W < 0 && (W += 24)) : W = 0, u0 = b * Math.atan2(L[2], N);
			}
		}
		return new V2(B, 90 - J, W, u0);
	}
	function q0(t) {
		if (!(t instanceof xt)) throw `Not an instance of the Observer class: ${t}`;
		if (P(t.latitude), P(t.longitude), P(t.height), t.latitude < -90 || t.latitude > 90) throw `Latitude ${t.latitude} is out of range. Must be -90..+90.`;
		return t;
	}
	var xt = class {
		constructor(t, n, e) {
			this.latitude = t, this.longitude = n, this.height = e, q0(this);
		}
	};
	function K2(t) {
		const n = E(t).AddDays(-1 / T1), e = j0(Q.Earth, n), [o, r, s] = G1([
			-e.x,
			-e.y,
			-e.z
		], n, O.From2000), i = _ * R0(n).tobl, a = Math.cos(i), c = Math.sin(i);
		return It(new D(o, r, s, n), a, c);
	}
	function u1(t, n, e, o, r) {
		q0(e), C1(o), C1(r);
		const s = E(n), i = H2(s, e), a = e0(t, s, r), c = [
			a.x - i[0],
			a.y - i[1],
			a.z - i[2]
		];
		return G2(o ? G1(c, s, O.From2000) : c, s);
	}
	function Y3(t, n, e) {
		const o = E(t);
		let r = Rt(n, S0(o)).pos;
		return e || (r = G1(r, o, O.Into2000)), mt(r, o);
	}
	function q3(t, n, e) {
		const o = E(t), r = Rt(n, S0(o)), s = new V(r.pos[0], r.pos[1], r.pos[2], r.vel[0], r.vel[1], r.vel[2], o);
		return e ? s : $3(s, o, O.Into2000);
	}
	function W3(t, n) {
		const e = S0(t.t);
		let o = [
			t.x,
			t.y,
			t.z
		];
		return n || (o = $0(o, t.t, O.From2000), o = B0(o, t.t, O.From2000)), J3(o, e);
	}
	function j3(t, n) {
		const e = Math.sin(t * _), o = e * e;
		return 9.7803253359 * (1 + .00193185265241 * o) / Math.sqrt(1 - .00669437999013 * o) * (1 - (3.15704e-7 - 2.10269e-9 * o) * n + 737452e-19 * n * n);
	}
	function It(t, n, e) {
		const o = t.x, r = t.y * n + t.z * e, s = -t.y * e + t.z * n, i = Math.hypot(o, r);
		let a = 0;
		i > 0 && (a = b * Math.atan2(r, o), a < 0 && (a += 360));
		let c = b * Math.atan2(s, i);
		return new F2(new D(o, r, s, t.t), c, a);
	}
	function l1(t) {
		const n = R0(t.t), [e, o, r] = B0($0([
			t.x,
			t.y,
			t.z
		], t.t, O.From2000), t.t, O.From2000), s = new D(e, o, r, t.t), i = n.tobl * _;
		return It(s, Math.cos(i), Math.sin(i));
	}
	function a0(t) {
		const n = E(t), e = m0(n), o = e.distance_au * Math.cos(e.geo_eclip_lat), r = $0(F3(n, [
			o * Math.cos(e.geo_eclip_lon),
			o * Math.sin(e.geo_eclip_lon),
			e.distance_au * Math.sin(e.geo_eclip_lat)
		]), n, O.Into2000);
		return new D(r[0], r[1], r[2], n);
	}
	function $1(t) {
		const n = E(t), e = m0(n), o = e.distance_au * Math.cos(e.geo_eclip_lat), r = [
			o * Math.cos(e.geo_eclip_lon),
			o * Math.sin(e.geo_eclip_lon),
			e.distance_au * Math.sin(e.geo_eclip_lat)
		], s = R0(n), i = mt(B0(N2(s.mobl, r), n, O.From2000), n), a = s.tobl * _, c = It(i, Math.cos(a), Math.sin(a));
		return new Q0(c.elat, c.elon, e.distance_au);
	}
	function h1(t) {
		const n = E(t), e = 1e-5, o = n.AddDays(-e), r = n.AddDays(+e), s = a0(o), i = a0(r);
		return new V((s.x + i.x) / 2, (s.y + i.y) / 2, (s.z + i.z) / 2, (i.x - s.x) / (2 * e), (i.y - s.y) / (2 * e), (i.z - s.z) / (2 * e), n);
	}
	function Pt(t) {
		const n = E(t), e = h1(n), o = 1 + At;
		return new V(e.x / o, e.y / o, e.z / o, e.vx / o, e.vy / o, e.vz / o, n);
	}
	function z0(t, n, e) {
		let o = 1, r = 0;
		for (let s of t) {
			let i = 0;
			for (let [c, u, h] of s) i += c * Math.cos(u + n * h);
			let a = o * i;
			e && (a %= n0), r += a, o *= n;
		}
		return r;
	}
	function vt(t, n) {
		let e = 1, o = 0, r = 0, s = 0;
		for (let i of t) {
			let a = 0, c = 0;
			for (let [u, h, l] of i) {
				let d = h + n * l;
				a += u * l * Math.sin(d), s > 0 && (c += u * Math.cos(d));
			}
			r += s * o * c - e * a, o = e, e *= n, ++s;
		}
		return r;
	}
	const W0 = 365250, Dt = 0, zt = 1, B1 = 2;
	function Tt(t) {
		return new Y(t[0] + 4.4036e-7 * t[1] - 1.90919e-7 * t[2], -4.79966e-7 * t[0] + .917482137087 * t[1] - .397776982902 * t[2], .397776982902 * t[1] + .917482137087 * t[2]);
	}
	function J2(t, n, e) {
		const o = e * Math.cos(n), r = Math.cos(t), s = Math.sin(t);
		return [
			o * r,
			o * s,
			e * Math.sin(n)
		];
	}
	function j0(t, n) {
		const e = n.tt / W0;
		return Tt(J2(z0(t[Dt], e, !0), z0(t[zt], e, !1), z0(t[B1], e, !1))).ToAstroVector(n);
	}
	function f1(t, n) {
		const e = n / W0, o = z0(t[Dt], e, !0), r = z0(t[zt], e, !1), s = z0(t[B1], e, !1), i = vt(t[Dt], e), a = vt(t[zt], e), c = vt(t[B1], e), u = Math.cos(o), h = Math.sin(o), l = Math.cos(r), d = Math.sin(r), A = +(c * l * u) - s * d * u * a - s * l * h * i, M = +(c * l * h) - s * d * h * a + s * l * u * i, p = +(c * d) + s * l * a, y = J2(o, r, s), g = [
			A / W0,
			M / W0,
			p / W0
		];
		return new N0(n, Tt(y), Tt(g));
	}
	function Q1(t, n, e, o) {
		const r = o / (o + a1), s = j0(Q[e], n);
		t.x += r * s.x, t.y += r * s.y, t.z += r * s.z;
	}
	function X3(t) {
		const n = new D(0, 0, 0, t);
		return Q1(n, t, f.Jupiter, V0), Q1(n, t, f.Saturn, F0), Q1(n, t, f.Uranus, G0), Q1(n, t, f.Neptune, K0), n;
	}
	const Nt = 51, Z3 = 29200, X0 = 146, _0 = 201, T0 = [
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
	var Y = class y0 {
		constructor(n, e, o) {
			this.x = n, this.y = e, this.z = o;
		}
		clone() {
			return new y0(this.x, this.y, this.z);
		}
		ToAstroVector(n) {
			return new D(this.x, this.y, this.z, n);
		}
		static zero() {
			return new y0(0, 0, 0);
		}
		quadrature() {
			return this.x * this.x + this.y * this.y + this.z * this.z;
		}
		add(n) {
			return new y0(this.x + n.x, this.y + n.y, this.z + n.z);
		}
		sub(n) {
			return new y0(this.x - n.x, this.y - n.y, this.z - n.z);
		}
		incr(n) {
			this.x += n.x, this.y += n.y, this.z += n.z;
		}
		decr(n) {
			this.x -= n.x, this.y -= n.y, this.z -= n.z;
		}
		mul(n) {
			return new y0(n * this.x, n * this.y, n * this.z);
		}
		div(n) {
			return new y0(this.x / n, this.y / n, this.z / n);
		}
		mean(n) {
			return new y0((this.x + n.x) / 2, (this.y + n.y) / 2, (this.z + n.z) / 2);
		}
		neg() {
			return new y0(-this.x, -this.y, -this.z);
		}
	}, N0 = class o2 {
		constructor(n, e, o) {
			this.tt = n, this.r = e, this.v = o;
		}
		clone() {
			return new o2(this.tt, this.r, this.v);
		}
		sub(n) {
			return new o2(this.tt, this.r.sub(n.r), this.v.sub(n.v));
		}
	};
	function te(t) {
		let [n, [e, o, r], [s, i, a]] = t;
		return new N0(n, new Y(e, o, r), new Y(s, i, a));
	}
	function X(t, n, e, o) {
		const r = o / (o + a1), s = f1(Q[e], n);
		return t.r.incr(s.r.mul(r)), t.v.incr(s.v.mul(r)), s;
	}
	function d1(t, n, e) {
		const o = e.sub(t), r = o.quadrature();
		return o.mul(n / (r * Math.sqrt(r)));
	}
	var M1 = class {
		constructor(t) {
			let n = new N0(t, new Y(0, 0, 0), new Y(0, 0, 0));
			this.Jupiter = X(n, t, f.Jupiter, V0), this.Saturn = X(n, t, f.Saturn, F0), this.Uranus = X(n, t, f.Uranus, G0), this.Neptune = X(n, t, f.Neptune, K0), this.Jupiter.r.decr(n.r), this.Jupiter.v.decr(n.v), this.Saturn.r.decr(n.r), this.Saturn.v.decr(n.v), this.Uranus.r.decr(n.r), this.Uranus.v.decr(n.v), this.Neptune.r.decr(n.r), this.Neptune.v.decr(n.v), this.Sun = new N0(t, n.r.mul(-1), n.v.mul(-1));
		}
		Acceleration(t) {
			let n = d1(t, a1, this.Sun.r);
			return n.incr(d1(t, V0, this.Jupiter.r)), n.incr(d1(t, F0, this.Saturn.r)), n.incr(d1(t, G0, this.Uranus.r)), n.incr(d1(t, K0, this.Neptune.r)), n;
		}
	}, Lt = class Qn {
		constructor(n, e, o, r) {
			this.tt = n, this.r = e, this.v = o, this.a = r;
		}
		clone() {
			return new Qn(this.tt, this.r.clone(), this.v.clone(), this.a.clone());
		}
	}, $2 = class {
		constructor(t, n) {
			this.bary = t, this.grav = n;
		}
	};
	function Z0(t, n, e, o) {
		return new Y(n.x + t * (e.x + t * o.x / 2), n.y + t * (e.y + t * o.y / 2), n.z + t * (e.z + t * o.z / 2));
	}
	function Ut(t, n, e) {
		return new Y(n.x + t * e.x, n.y + t * e.y, n.z + t * e.z);
	}
	function Ct(t, n) {
		const e = t - n.tt, o = new M1(t), r = Z0(e, n.r, n.v, n.a), s = o.Acceleration(r).mean(n.a), i = Z0(e, n.r, n.v, s);
		return new $2(o, new Lt(t, i, n.v.add(s.mul(e)), o.Acceleration(i)));
	}
	const ne = [];
	function B2(t, n) {
		const e = Math.floor(t);
		return e < 0 ? 0 : e >= n ? n - 1 : e;
	}
	function Ot(t) {
		const n = te(t), e = new M1(n.tt), o = n.r.add(e.Sun.r), r = n.v.add(e.Sun.v), s = e.Acceleration(o);
		return new $2(e, new Lt(n.tt, o, r, s));
	}
	function ee(t, n) {
		const e = T0[0][0];
		if (n < e || n > T0[Nt - 1][0]) return null;
		const o = B2((n - e) / Z3, Nt - 1);
		if (!t[o]) {
			const s = t[o] = [];
			s[0] = Ot(T0[o]).grav, s[_0 - 1] = Ot(T0[o + 1]).grav;
			let i, a = s[0].tt;
			for (i = 1; i < _0 - 1; ++i) s[i] = Ct(a += X0, s[i - 1]).grav;
			a = s[_0 - 1].tt;
			var r = [];
			for (r[_0 - 1] = s[_0 - 1], i = _0 - 2; i > 0; --i) r[i] = Ct(a -= X0, r[i + 1]).grav;
			for (i = _0 - 2; i > 0; --i) {
				const c = i / (_0 - 1);
				s[i].r = s[i].r.mul(1 - c).add(r[i].r.mul(c)), s[i].v = s[i].v.mul(1 - c).add(r[i].v.mul(c)), s[i].a = s[i].a.mul(1 - c).add(r[i].a.mul(c));
			}
		}
		return t[o];
	}
	function Q2(t, n, e) {
		let o = Ot(t);
		const r = Math.ceil((n - o.grav.tt) / e);
		for (let s = 0; s < r; ++s) o = Ct(s + 1 === r ? n : o.grav.tt + e, o.grav);
		return o;
	}
	function kt(t, n) {
		let e, o, r;
		const s = ee(ne, t.tt);
		if (s) {
			const i = B2((t.tt - s[0].tt) / X0, _0 - 1), a = s[i], c = s[i + 1], u = a.a.mean(c.a), h = Z0(t.tt - a.tt, a.r, a.v, u), l = Ut(t.tt - a.tt, a.v, u), d = Z0(t.tt - c.tt, c.r, c.v, u), A = Ut(t.tt - c.tt, c.v, u), M = (t.tt - a.tt) / X0;
			e = h.mul(1 - M).add(d.mul(M)), o = l.mul(1 - M).add(A.mul(M));
		} else {
			let i;
			t.tt < T0[0][0] ? i = Q2(T0[0], t.tt, -X0) : i = Q2(T0[Nt - 1], t.tt, +X0), e = i.grav.r, o = i.grav.v, r = i.bary;
		}
		return n && (r || (r = new M1(t.tt)), e = e.sub(r.Sun.r), o = o.sub(r.Sun.v)), new V(e.x, e.y, e.z, o.x, o.y, o.z, t);
	}
	const oe = new G([
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
		constructor(t, n, e, o) {
			this.io = t, this.europa = n, this.ganymede = e, this.callisto = o;
		}
	};
	function re(t, n, e) {
		const o = e[0], r = e[1], s = e[2], i = e[3], a = e[4], c = e[5], u = Math.sqrt(n / (o * o * o));
		let h, l, d, A = r + s * Math.sin(r) - i * Math.cos(r);
		do
			h = Math.cos(A), l = Math.sin(A), d = (r - A + s * l - i * h) / (1 - s * h - i * l), A += d;
		while (Math.abs(d) >= 1e-12);
		h = Math.cos(A), l = Math.sin(A);
		const M = i * h - s * l, p = -s * h - i * l, y = 1 / (1 + p), g = 1 / (1 + Math.sqrt(1 - s * s - i * i)), m = o * (h - s - g * i * M), w = o * (l - i + g * s * M), I = u * y * o * (-l - g * i * p), x = u * y * o * (+h + g * s * p), z = 2 * Math.sqrt(1 - a * a - c * c), v = 1 - 2 * c * c, k = 1 - 2 * a * a, N = 2 * c * a;
		return new V(m * v + w * N, m * N + w * k, (a * w - m * c) * z, I * v + x * N, I * N + x * k, (a * x - I * c) * z, t);
	}
	function q1(t, n) {
		const e = t.tt + 18262.5, o = [
			0,
			n.al[0] + e * n.al[1],
			0,
			0,
			0,
			0
		];
		for (let [r, s, i] of n.a) o[0] += r * Math.cos(s + e * i);
		for (let [r, s, i] of n.l) o[1] += r * Math.sin(s + e * i);
		o[1] %= n0, o[1] < 0 && (o[1] += n0);
		for (let [r, s, i] of n.z) {
			const a = s + e * i;
			o[2] += r * Math.cos(a), o[3] += r * Math.sin(a);
		}
		for (let [r, s, i] of n.zeta) {
			const a = s + e * i;
			o[4] += r * Math.cos(a), o[5] += r * Math.sin(a);
		}
		return Z1(oe, re(t, n.mu, o));
	}
	function se(t) {
		const n = new g0(t);
		return new Y2(q1(n, Y1[0]), q1(n, Y1[1]), q1(n, Y1[2]), q1(n, Y1[3]));
	}
	function c0(t, n) {
		var e = E(n);
		if (t in Q) return j0(Q[t], e);
		if (t === f.Pluto) {
			const i = kt(e, !0);
			return new D(i.x, i.y, i.z, e);
		}
		if (t === f.Sun) return new D(0, 0, 0, e);
		if (t === f.Moon) {
			var o = j0(Q.Earth, e), r = a0(e);
			return new D(o.x + r.x, o.y + r.y, o.z + r.z, e);
		}
		if (t === f.EMB) {
			const i = j0(Q.Earth, e), a = a0(e), c = 1 + At;
			return new D(i.x + a.x / c, i.y + a.y / c, i.z + a.z / c, e);
		}
		if (t === f.SSB) return X3(e);
		const s = k1(t);
		if (s) return X1(new Q0(s.dec, 15 * s.ra, s.dist), e);
		throw `HelioVector: Unknown body "${t}"`;
	}
	function L0(t, n) {
		const e = k1(t);
		if (e) return e.dist;
		const o = E(n);
		return t in Q ? z0(Q[t][B1], o.tt / W0, !1) : c0(t, o).Length();
	}
	function q2(t, n) {
		let e = n, o = 0;
		for (let r = 0; r < 10; ++r) {
			const s = t(e), i = s.Length() / T1;
			if (i > 1) throw "Object is too distant for light-travel solver.";
			const a = n.AddDays(-i);
			if (o = Math.abs(a.tt - e.tt), o < 1e-9) return s;
			e = a;
		}
		throw `Light-travel time solver did not converge: dt = ${o}`;
	}
	var ie = class {
		constructor(t, n, e, o) {
			this.observerBody = t, this.targetBody = n, this.aberration = e, this.observerPos = o;
		}
		Position(t) {
			this.aberration && (this.observerPos = c0(this.observerBody, t));
			const n = c0(this.targetBody, t);
			return new D(n.x - this.observerPos.x, n.y - this.observerPos.y, n.z - this.observerPos.z, t);
		}
	};
	function W2(t, n, e, o) {
		C1(o);
		const r = E(t);
		if (k1(e)) {
			const a = c0(e, r);
			if (o) {
				const u = W1(n, r), h = new D(a.x - u.x, a.y - u.y, a.z - u.z, r), l = T1 / h.Length();
				return new D(h.x + u.vx / l, h.y + u.vy / l, h.z + u.vz / l, r);
			}
			const c = c0(n, r);
			return new D(a.x - c.x, a.y - c.y, a.z - c.z, r);
		}
		let s;
		o ? s = new D(0, 0, 0, r) : s = c0(n, r);
		const i = new ie(n, e, o, s);
		return q2((a) => i.Position(a), r);
	}
	function e0(t, n, e) {
		C1(e);
		const o = E(n);
		switch (t) {
			case f.Earth: return new D(0, 0, 0, o);
			case f.Moon: return a0(o);
			default:
				const r = W2(o, f.Earth, t, e);
				return r.t = o, r;
		}
	}
	function U0(t, n) {
		return new V(t.r.x, t.r.y, t.r.z, t.v.x, t.v.y, t.v.z, n);
	}
	function ae(t, n) {
		const e = E(n);
		if (t === f.SSB) return new V(0, 0, 0, 0, 0, 0, e);
		if (t === f.Pluto) return kt(e, !1);
		const o = new M1(e.tt);
		switch (t) {
			case f.Sun: return U0(o.Sun, e);
			case f.Jupiter: return U0(o.Jupiter, e);
			case f.Saturn: return U0(o.Saturn, e);
			case f.Uranus: return U0(o.Uranus, e);
			case f.Neptune: return U0(o.Neptune, e);
			case f.Moon:
			case f.EMB:
				const r = f1(Q[f.Earth], e.tt), s = t === f.Moon ? h1(e) : Pt(e);
				return new V(s.x + o.Sun.r.x + r.r.x, s.y + o.Sun.r.y + r.r.y, s.z + o.Sun.r.z + r.r.z, s.vx + o.Sun.v.x + r.v.x, s.vy + o.Sun.v.y + r.v.y, s.vz + o.Sun.v.z + r.v.z, e);
		}
		if (t in Q) {
			const r = f1(Q[t], e.tt);
			return new V(o.Sun.r.x + r.r.x, o.Sun.r.y + r.r.y, o.Sun.r.z + r.r.z, o.Sun.v.x + r.v.x, o.Sun.v.y + r.v.y, o.Sun.v.z + r.v.z, e);
		}
		throw `BaryState: Unsupported body "${t}"`;
	}
	function W1(t, n) {
		const e = E(n);
		switch (t) {
			case f.Sun: return new V(0, 0, 0, 0, 0, 0, e);
			case f.SSB:
				const o = new M1(e.tt);
				return new V(-o.Sun.r.x, -o.Sun.r.y, -o.Sun.r.z, -o.Sun.v.x, -o.Sun.v.y, -o.Sun.v.z, e);
			case f.Mercury:
			case f.Venus:
			case f.Earth:
			case f.Mars:
			case f.Jupiter:
			case f.Saturn:
			case f.Uranus:
			case f.Neptune: return U0(f1(Q[t], e.tt), e);
			case f.Pluto: return kt(e, !0);
			case f.Moon:
			case f.EMB:
				const r = f1(Q.Earth, e.tt), s = t == f.Moon ? h1(e) : Pt(e);
				return new V(s.x + r.r.x, s.y + r.r.y, s.z + r.r.z, s.vx + r.v.x, s.vy + r.v.y, s.vz + r.v.z, e);
			default:
				if (k1(t)) {
					const i = c0(t, e);
					return new V(i.x, i.y, i.z, 0, 0, 0, e);
				}
				throw `HelioState: Unsupported body "${t}"`;
		}
	}
	function ce(t, n, e, o, r) {
		let s = (r + e) / 2 - o, i = (r - e) / 2, a = o, c;
		if (s == 0) {
			if (i == 0 || (c = -a / i, c < -1 || c > 1)) return null;
		} else {
			let u = i * i - 4 * s * a;
			if (u <= 0) return null;
			let h = Math.sqrt(u), l = (-i + h) / (2 * s), d = (-i - h) / (2 * s);
			if (-1 <= l && l <= 1) {
				if (-1 <= d && d <= 1) return null;
				c = l;
			} else if (-1 <= d && d <= 1) c = d;
			else return null;
		}
		return {
			t: t + c * n,
			df_dt: (2 * s * c + i) / n
		};
	}
	function K(t, n, e, o) {
		const r = P(o && o.dt_tolerance_seconds || 1), s = Math.abs(r / L1);
		let i = o && o.init_f1 || t(n), a = o && o.init_f2 || t(e), c = NaN, u = 0, h = o && o.iter_limit || 20, l = !0;
		for (;;) {
			if (++u > h) throw "Excessive iteration in Search()";
			let d = H3(n, e, .5), A = d.ut - n.ut;
			if (Math.abs(A) < s) return d;
			l ? c = t(d) : l = !0;
			let M = ce(d.ut, e.ut - d.ut, i, c, a);
			if (M) {
				let p = E(M.t), y = t(p);
				if (M.df_dt !== 0) {
					if (Math.abs(y / M.df_dt) < s) return p;
					let g = 1.2 * Math.abs(y / M.df_dt);
					if (g < A / 10) {
						let m = p.AddDays(-g), w = p.AddDays(+g);
						if ((m.ut - n.ut) * (m.ut - e.ut) < 0 && (w.ut - n.ut) * (w.ut - e.ut) < 0) {
							let I = t(m), x = t(w);
							if (I < 0 && x >= 0) {
								i = I, a = x, n = m, e = w, c = y, l = !1;
								continue;
							}
						}
					}
				}
			}
			if (i < 0 && c >= 0) {
				e = d, a = c;
				continue;
			}
			if (c < 0 && a >= 0) {
				n = d, i = c;
				continue;
			}
			return null;
		}
	}
	function t1(t) {
		let n = t;
		for (; n <= -180;) n += 360;
		for (; n > 180;) n -= 360;
		return n;
	}
	function n1(t) {
		for (; t < 0;) t += 360;
		for (; t >= 360;) t -= 360;
		return t;
	}
	function j2(t, n, e) {
		function o(s) {
			return t1(K2(s).elon - t);
		}
		P(t), P(e);
		let r = E(n);
		return K(o, r, r.AddDays(e), { dt_tolerance_seconds: .01 });
	}
	function bt(t, n, e) {
		if (t === f.Earth || n === f.Earth) throw "The Earth does not have a longitude as seen from itself.";
		const o = E(e), r = l1(e0(t, o, !1)), s = l1(e0(n, o, !1));
		return n1(r.elon - s.elon);
	}
	function e1(t, n) {
		if (t == f.Earth) throw "The Earth does not have an angle as seen from itself.";
		const e = E(n);
		return O1(e0(f.Sun, e, !0), e0(t, e, !0));
	}
	function C0(t, n) {
		if (t === f.Sun) throw "Cannot calculate heliocentric longitude of the Sun.";
		return l1(c0(t, n)).elon;
	}
	function ue(t, n, e, o) {
		let r, s = 0, i = 0, a = 0;
		switch (t) {
			case f.Mercury:
				r = -.6, s = 4.98, i = -4.88, a = 3.02;
				break;
			case f.Venus:
				n < 163.6 ? (r = -4.47, s = 1.03, i = .57, a = .13) : (r = .98, s = -1.02);
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
		const c = n / 100;
		let u = r + c * (s + c * (i + c * a));
		return u += 5 * Math.log10(e * o), u;
	}
	function le(t, n, e, o, r) {
		const s = l1(o), i = _ * 28.06, a = _ * (169.51 + 382e-7 * r.tt), c = _ * s.elat, u = _ * s.elon, h = Math.asin(Math.sin(c) * Math.cos(i) - Math.cos(c) * Math.sin(i) * Math.sin(u - a)), l = Math.sin(Math.abs(h));
		let d = -9 + .044 * t;
		return d += l * (-2.6 + 1.2 * l), d += 5 * Math.log10(n * e), {
			mag: d,
			ring_tilt: b * h
		};
	}
	function he(t, n, e) {
		let o = t * _, r = o * o, s = r * r, i = -12.717 + 1.49 * Math.abs(o) + .0431 * s, a = e / (385000.6 / U);
		return i += 5 * Math.log10(n * a), i;
	}
	var X2 = class {
		constructor(t, n, e, o, r, s, i, a) {
			this.time = t, this.mag = n, this.phase_angle = e, this.helio_dist = o, this.geo_dist = r, this.gc = s, this.hc = i, this.ring_tilt = a, this.phase_fraction = (1 + Math.cos(_ * e)) / 2;
		}
	};
	function j1(t, n) {
		if (t === f.Earth) throw "The illumination of the Earth is not defined.";
		const e = E(n), o = j0(Q.Earth, e);
		let r, s, i, a;
		t === f.Sun ? (i = new D(-o.x, -o.y, -o.z, e), s = new D(0, 0, 0, e), r = 0) : (t === f.Moon ? (i = a0(e), s = new D(o.x + i.x, o.y + i.y, o.z + i.z, e)) : (s = c0(t, n), i = new D(s.x - o.x, s.y - o.y, s.z - o.z, e)), r = O1(i, s));
		let c = i.Length(), u = s.Length(), h;
		if (t === f.Sun) a = m3 + 5 * Math.log10(c);
		else if (t === f.Moon) a = he(r, u, c);
		else if (t === f.Saturn) {
			const l = le(r, u, c, i, e);
			a = l.mag, h = l.ring_tilt;
		} else a = ue(t, r, u, c);
		return new X2(e, a, r, u, c, i, s, h);
	}
	function S1(t) {
		if (t === f.Earth) throw "The Earth does not have a synodic period as seen from itself.";
		if (t === f.Moon) return N1;
		let n = i0[t];
		if (!n) throw `Not a valid planet name: ${t}`;
		const e = i0.Earth.OrbitalPeriod, o = n.OrbitalPeriod;
		return Math.abs(e / (e / o - 1));
	}
	function o1(t, n, e) {
		P(n);
		const o = i0[t];
		if (!o) throw `Cannot search relative longitude because body is not a planet: ${t}`;
		if (t === f.Earth) throw "Cannot search relative longitude for the Earth (it is always 0)";
		const r = o.OrbitalPeriod > i0.Earth.OrbitalPeriod ? 1 : -1;
		function s(u) {
			const h = C0(t, u);
			return t1(r * (C0(f.Earth, u) - h) - n);
		}
		let i = S1(t), a = E(e), c = s(a);
		c > 0 && (c -= 360);
		for (let u = 0; u < 100; ++u) {
			let h = -c / 360 * i;
			if (a = a.AddDays(h), Math.abs(h) * L1 < 1) return a;
			let l = c;
			if (c = s(a), Math.abs(l) < 30 && l !== c) {
				let d = l / (l - c);
				d > .5 && d < 2 && (i *= d);
			}
		}
		throw `Relative longitude search failed to converge for ${t} near ${a.toString()} (error_angle = ${c}).`;
	}
	function Ht(t) {
		return bt(f.Moon, f.Sun, t);
	}
	function _1(t, n, e) {
		function o(h) {
			return t1(Ht(h) - t);
		}
		P(t), P(e);
		const r = 1.5, s = E(n);
		let i = o(s), a, c, u;
		if (e < 0) {
			if (i < 0 && (i += 360), a = -(N1 * i) / 360, u = a + r, u < e) return null;
			c = Math.max(e, a - r);
		} else {
			if (i > 0 && (i -= 360), a = -(N1 * i) / 360, c = a - r, c > e) return null;
			u = Math.min(e, a + r);
		}
		return K(o, s.AddDays(c), s.AddDays(u), { dt_tolerance_seconds: .1 });
	}
	var Z2 = class {
		constructor(t, n) {
			this.quarter = t, this.time = n;
		}
	};
	function tn(t) {
		let n = Ht(t), e = (Math.floor(n / 90) + 1) % 4, o = _1(90 * e, t, 10);
		if (!o) throw "Cannot find moon quarter";
		return new Z2(e, o);
	}
	function fe(t) {
		return tn(new Date(t.time.date.getTime() + 6 * x3));
	}
	var nn = class {
		constructor(t, n, e) {
			this.pressure = t, this.temperature = n, this.density = e;
		}
	};
	function en(t) {
		if (!Number.isFinite(t) || t < -500 || t > 1e5) throw `Invalid elevation: ${t}`;
		let r, s;
		t <= 11e3 ? (r = 288.15 - .0065 * t, s = 101325 * Math.pow(288.15 / r, -5.25577)) : t <= 2e4 ? (r = 216.65, s = 22632 * Math.exp(-.00015768832 * (t - 11e3))) : (r = 216.65 + .001 * (t - 2e4), s = 5474.87 * Math.pow(216.65 / r, 34.16319));
		const i = s / r / (101325 / 288.15);
		return new nn(s, r, i);
	}
	function de(t, n) {
		const e = t.latitude * _, o = Math.sin(e), r = Math.cos(e), s = 1 / Math.hypot(r, o * s0), i = s * (s0 * s0), a = (t.height - n) / 1e3, c = M0 * s + a, u = M0 * i + a, h = 1e3 * Math.hypot(c * r, u * o), l = .175 * Math.pow(1 - .0065 / 283.15 * (t.height - 2 / 3 * n), 3.256);
		return b * -(Math.sqrt(2 * (1 - l) * n / h) / (1 - l));
	}
	function Me(t) {
		switch (t) {
			case f.Sun: return x2;
			case f.Moon: return D3;
			default: return 0;
		}
	}
	function Se(t, n, e, o, r, s = 0) {
		if (!Number.isFinite(s) || s < 0) throw `Invalid value for metersAboveGround: ${s}`;
		const i = Me(t), a = en(n.height - s);
		return on(t, n, e, o, r, i, de(n, s) - T3 * a.density);
	}
	function _e(t, n, e, o, r, s) {
		if (!Number.isFinite(s) || s < -90 || s > 90) throw `Invalid altitude angle: ${s}`;
		return on(t, n, e, o, r, 0, s);
	}
	var Ae = class {
		constructor(t, n, e, o) {
			this.tx = t, this.ty = n, this.ax = e, this.ay = o;
		}
	};
	function Vt(t, n, e, o, r, s, i) {
		if (s < 0 && i >= 0) return new Ae(o, r, s, i);
		if (s >= 0 && i < 0) return null;
		if (t > 17) throw "Excessive recursion in rise/set ascent search.";
		const a = r.ut - o.ut;
		if (a * L1 < 1 || Math.min(Math.abs(s), Math.abs(i)) > e * (a / 2)) return null;
		const c = new g0((o.ut + r.ut) / 2), u = n(c);
		return Vt(1 + t, n, e, o, c, s, u) || Vt(1 + t, n, e, c, r, u, i);
	}
	function pe(t, n) {
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
		return Math.abs((360 / m2 - e) * Math.cos(r)) + Math.abs(o * Math.sin(r));
	}
	function on(t, n, e, o, r, s, i) {
		if (q0(n), P(r), P(s), P(i), i < -90 || i > 90) throw `Invalid target altitude angle: ${i}`;
		const a = .42, c = pe(t, n.latitude);
		function u(p) {
			const y = u1(t, p, n, !0, !0);
			return e * (J1(p, n, y.ra, y.dec).altitude + b * Math.asin(s / y.dist) - i);
		}
		const h = E(o);
		let l = h, d = h, A = u(l), M = A;
		for (;;) {
			r < 0 ? (l = d.AddDays(-a), A = u(l)) : (d = l.AddDays(+a), M = u(d));
			const p = Vt(0, u, c, l, d, A, M);
			if (p) {
				const y = K(u, p.tx, p.ty, {
					dt_tolerance_seconds: .1,
					init_f1: p.ax,
					init_f2: p.ay
				});
				if (y) {
					if (r < 0) {
						if (y.ut < h.ut + r) return null;
					} else if (y.ut > h.ut + r) return null;
					return y;
				}
				throw `Rise/set search failed after finding ascent: t1=${l}, t2=${d}, a1=${A}, a2=${M}`;
			}
			if (r < 0) {
				if (l.ut < h.ut + r) return null;
				d = l, M = A;
			} else {
				if (d.ut > h.ut + r) return null;
				l = d, A = M;
			}
		}
	}
	var rn = class {
		constructor(t, n) {
			this.time = t, this.hor = n;
		}
	};
	function Ee(t, n, e, o, r = 1) {
		q0(n);
		let s = E(o), i = 0;
		if (t === f.Earth) throw "Cannot search for hour angle of the Earth.";
		if (P(e), e < 0 || e >= 24) throw `Invalid hour angle ${e}`;
		if (P(r), r === 0) throw "Direction must be positive or negative.";
		for (;;) {
			++i;
			let a = S0(s), c = u1(t, s, n, !0, !0), u = (e + c.ra - n.longitude / 15 - a) % 24;
			if (i === 1 ? r > 0 ? u < 0 && (u += 24) : u > 0 && (u -= 24) : u < -12 ? u += 24 : u > 12 && (u -= 24), Math.abs(u) * 3600 < .1) {
				const l = J1(s, n, c.ra, c.dec, "normal");
				return new rn(s, l);
			}
			let h = u / 24 * m2;
			s = s.AddDays(h);
		}
	}
	function ye(t, n, e) {
		const o = E(n), r = k2(o), s = u1(t, o, e, !0, !0);
		let i = (e.longitude / 15 + r - s.ra) % 24;
		return i < 0 && (i += 24), i;
	}
	var sn = class {
		constructor(t, n, e, o) {
			this.mar_equinox = t, this.jun_solstice = n, this.sep_equinox = e, this.dec_solstice = o;
		}
	};
	function we(t) {
		function n(e, o, r) {
			let s = new Date(Date.UTC(t, o - 1, r)), i = j2(e, s, 20);
			if (!i) throw `Cannot find season change near ${s.toISOString()}`;
			return i;
		}
		if (t instanceof Date && Number.isFinite(t.getTime()) && (t = t.getUTCFullYear()), !Number.isSafeInteger(t)) throw `Cannot calculate seasons because year argument ${t} is neither a Date nor a safe integer.`;
		return new sn(n(0, 3, 10), n(90, 6, 10), n(180, 9, 10), n(270, 12, 10));
	}
	var an = class {
		constructor(t, n, e, o) {
			this.time = t, this.visibility = n, this.elongation = e, this.ecliptic_separation = o;
		}
	};
	function cn(t, n) {
		let e = E(n), o = bt(t, f.Sun, e), r;
		o > 180 ? (r = "morning", o = 360 - o) : r = "evening";
		let s = e1(t, e);
		return new an(e, r, s, o);
	}
	function ge(t, n) {
		function o(a) {
			const c = a.AddDays(-.005), u = a.AddDays(.01 / 2);
			return (e1(t, c) - e1(t, u)) / .01;
		}
		let r = E(n);
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
			let a = t1(C0(t, r) - C0(f.Earth, r)), c, u, h;
			a >= -s.s1 && a < +s.s1 ? (h = 0, c = +s.s1, u = +s.s2) : a >= +s.s2 || a < -s.s2 ? (h = 0, c = -s.s2, u = -s.s1) : a >= 0 ? (h = -S1(t) / 4, c = +s.s1, u = +s.s2) : (h = -S1(t) / 4, c = -s.s2, u = -s.s1);
			let l = r.AddDays(h), d = o1(t, c, l), A = o1(t, u, d), M = o(d);
			if (M >= 0) throw `SearchMaxElongation: internal error: m1 = ${M}`;
			let p = o(A);
			if (p <= 0) throw `SearchMaxElongation: internal error: m2 = ${p}`;
			let y = K(o, d, A, {
				init_f1: M,
				init_f2: p,
				dt_tolerance_seconds: 10
			});
			if (!y) throw `SearchMaxElongation: failed search iter ${i} (t1=${d.toString()}, t2=${A.toString()})`;
			if (y.tt >= r.tt) return cn(t, y);
			r = A.AddDays(1);
		}
		throw "SearchMaxElongation: failed to find event after 2 tries.";
	}
	function Re(t, n) {
		if (t !== f.Venus) throw "SearchPeakMagnitude currently works for Venus only.";
		const e = .01;
		function o(c) {
			const u = c.AddDays(-e / 2), h = c.AddDays(+e / 2), l = j1(t, u).mag;
			return (j1(t, h).mag - l) / e;
		}
		let r = E(n);
		const s = 10, i = 30;
		let a = 0;
		for (; ++a <= 2;) {
			let c = t1(C0(t, r) - C0(f.Earth, r)), u, h, l;
			c >= -s && c < +s ? (l = 0, u = +s, h = +i) : c >= +i || c < -i ? (l = 0, u = -i, h = -s) : c >= 0 ? (l = -S1(t) / 4, u = +s, h = +i) : (l = -S1(t) / 4, u = -i, h = -s);
			let d = r.AddDays(l), A = o1(t, u, d), M = o1(t, h, A), p = o(A);
			if (p >= 0) throw `SearchPeakMagnitude: internal error: m1 = ${p}`;
			let y = o(M);
			if (y <= 0) throw `SearchPeakMagnitude: internal error: m2 = ${y}`;
			let g = K(o, A, M, {
				init_f1: p,
				init_f2: y,
				dt_tolerance_seconds: 10
			});
			if (!g) throw `SearchPeakMagnitude: failed search iter ${a} (t1=${A.toString()}, t2=${M.toString()})`;
			if (g.tt >= r.tt) return j1(t, g);
			r = M.AddDays(1);
		}
		throw "SearchPeakMagnitude: failed to find event after 2 tries.";
	}
	var x0;
	(function(t) {
		t[t.Pericenter = 0] = "Pericenter", t[t.Apocenter = 1] = "Apocenter";
	})(x0 || (x0 = {}));
	var A1 = class {
		constructor(t, n, e) {
			this.time = t, this.kind = n, this.dist_au = e, this.dist_km = e * U;
		}
	};
	function un(t) {
		function e(c) {
			let u = c.AddDays(-5e-4), h = c.AddDays(.001 / 2), l = m0(u).distance_au;
			return (m0(h).distance_au - l) / .001;
		}
		function o(c) {
			return -e(c);
		}
		let r = E(t), s = e(r);
		const i = 5;
		for (var a = 0; a * i < 2 * N1; ++a) {
			let c = r.AddDays(i), u = e(c);
			if (s * u <= 0) {
				if (s < 0 || u > 0) {
					let h = K(e, r, c, {
						init_f1: s,
						init_f2: u
					});
					if (!h) throw "SearchLunarApsis INTERNAL ERROR: perigee search failed!";
					let l = m0(h).distance_au;
					return new A1(h, 0, l);
				}
				if (s > 0 || u < 0) {
					let h = K(o, r, c, {
						init_f1: -s,
						init_f2: -u
					});
					if (!h) throw "SearchLunarApsis INTERNAL ERROR: apogee search failed!";
					let l = m0(h).distance_au;
					return new A1(h, 1, l);
				}
				throw "SearchLunarApsis INTERNAL ERROR: cannot classify apsis event!";
			}
			r = c, s = u;
		}
		throw "SearchLunarApsis INTERNAL ERROR: could not find apsis within 2 synodic months of start date.";
	}
	function me(t) {
		let n = un(t.time.AddDays(11));
		if (n.kind + t.kind !== 1) throw `NextLunarApsis INTERNAL ERROR: did not find alternating apogee/perigee: prev=${t.kind} @ ${t.time.toString()}, next=${n.kind} @ ${n.time.toString()}`;
		return n;
	}
	function ln(t, n, e, o) {
		const r = n === x0.Apocenter ? 1 : -1, s = 10;
		for (;;) {
			const i = o / (s - 1);
			if (i < 1 / 1440) {
				const u = e.AddDays(i / 2);
				return new A1(u, n, L0(t, u));
			}
			let a = -1, c = 0;
			for (let u = 0; u < s; ++u) {
				const h = r * L0(t, e.AddDays(u * i));
				(u == 0 || h > c) && (a = u, c = h);
			}
			e = e.AddDays((a - 1) * i), o = 2 * i;
		}
	}
	function xe(t, n) {
		const o = n.AddDays(i0[t].OrbitalPeriod * -.08333333333333333), r = n.AddDays(i0[t].OrbitalPeriod * (270 / 360));
		let s = o, i = o, a = -1, c = -1;
		const u = (r.ut - o.ut) / 99;
		for (let d = 0; d < 100; ++d) {
			const A = o.AddDays(d * u), M = L0(t, A);
			d === 0 ? c = a = M : (M > c && (c = M, i = A), M < a && (a = M, s = A));
		}
		const h = ln(t, 0, s.AddDays(-2 * u), 4 * u), l = ln(t, 1, i.AddDays(-2 * u), 4 * u);
		if (h.time.tt >= n.tt) return l.time.tt >= n.tt && l.time.tt < h.time.tt ? l : h;
		if (l.time.tt >= n.tt) return l;
		throw "Internal error: failed to find Neptune apsis.";
	}
	function hn(t, n) {
		if (n = E(n), t === f.Neptune || t === f.Pluto) return xe(t, n);
		function e(c) {
			let h = c.AddDays(-5e-4), l = c.AddDays(.001 / 2), d = L0(t, h);
			return (L0(t, l) - d) / .001;
		}
		function o(c) {
			return -e(c);
		}
		const r = i0[t].OrbitalPeriod, s = r / 6;
		let i = n, a = e(i);
		for (let c = 0; c * s < 2 * r; ++c) {
			const u = i.AddDays(s), h = e(u);
			if (a * h <= 0) {
				let l, d;
				if (a < 0 || h > 0) l = e, d = x0.Pericenter;
				else if (a > 0 || h < 0) l = o, d = x0.Apocenter;
				else throw "Internal error with slopes in SearchPlanetApsis";
				const A = K(l, i, u);
				if (!A) throw "Failed to find slope transition in planetary apsis search.";
				const M = L0(t, A);
				return new A1(A, d, M);
			}
			i = u, a = h;
		}
		throw "Internal error: should have found planetary apsis within 2 orbital periods.";
	}
	function Ie(t, n) {
		if (n.kind !== x0.Pericenter && n.kind !== x0.Apocenter) throw `Invalid apsis kind: ${n.kind}`;
		const e = .25 * i0[t].OrbitalPeriod, o = hn(t, n.time.AddDays(e));
		if (o.kind + n.kind !== 1) throw `Internal error: previous apsis was ${n.kind}, but found ${o.kind} for next apsis.`;
		return o;
	}
	function r1(t) {
		return new G([
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
	function I0(t, n) {
		return new G([
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
	function Pe() {
		return new G([
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
	function ve(t, n, e) {
		if (n !== 0 && n !== 1 && n !== 2) throw `Invalid axis ${n}. Must be [0, 1, 2].`;
		const o = P(e) * _, r = Math.cos(o), s = Math.sin(o), i = (n + 1) % 3, a = (n + 2) % 3, c = n;
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
		return u[i][i] = r * t.rot[i][i] - s * t.rot[i][a], u[i][a] = s * t.rot[i][i] + r * t.rot[i][a], u[i][c] = t.rot[i][c], u[a][i] = r * t.rot[a][i] - s * t.rot[a][a], u[a][a] = s * t.rot[a][i] + r * t.rot[a][a], u[a][c] = t.rot[a][c], u[c][i] = r * t.rot[c][i] - s * t.rot[c][a], u[c][a] = s * t.rot[c][i] + r * t.rot[c][a], u[c][c] = t.rot[c][c], new G(u);
	}
	function X1(t, n) {
		n = E(n);
		const e = t.lat * _, o = t.lon * _, r = t.dist * Math.cos(e);
		return new D(r * Math.cos(o), r * Math.sin(o), t.dist * Math.sin(e), n);
	}
	function Ft(t) {
		const n = Gt(t);
		return new K1(n.lon / 15, n.lat, n.dist, t);
	}
	function Gt(t) {
		const n = t.x * t.x + t.y * t.y, e = Math.sqrt(n + t.z * t.z);
		let o, r;
		if (n === 0) {
			if (t.z === 0) throw "Zero-length vector not allowed.";
			r = 0, o = t.z < 0 ? -90 : 90;
		} else r = b * Math.atan2(t.y, t.x), r < 0 && (r += 360), o = b * Math.atan2(t.z, Math.sqrt(n));
		return new Q0(o, r, e);
	}
	function fn(t) {
		return t = 360 - t, t >= 360 ? t -= 360 : t < 0 && (t += 360), t;
	}
	function De(t, n) {
		const e = Gt(t);
		return e.lon = fn(e.lon), e.lat += p1(n, e.lat), e;
	}
	function ze(t, n, e) {
		n = E(n);
		const o = fn(t.lon);
		return X1(new Q0(t.lat + dn(e, t.lat), o, t.dist), n);
	}
	function p1(t, n) {
		let e;
		if (P(n), n < -90 || n > 90) return 0;
		if (t === "normal" || t === "jplhor") {
			let o = n;
			o < -1 && (o = -1), e = 1.02 / Math.tan((o + 10.3 / (o + 5.11)) * _) / 60, t === "normal" && n < -1 && (e *= (n + 90) / 89);
		} else if (!t) e = 0;
		else throw `Invalid refraction option: ${t}`;
		return e;
	}
	function dn(t, n) {
		if (n < -90 || n > 90) return 0;
		let e = n - p1(t, n);
		for (;;) {
			let o = e + p1(t, e) - n;
			if (Math.abs(o) < 1e-14) return e - n;
			e -= o;
		}
	}
	function E1(t, n) {
		return new D(t.rot[0][0] * n.x + t.rot[1][0] * n.y + t.rot[2][0] * n.z, t.rot[0][1] * n.x + t.rot[1][1] * n.y + t.rot[2][1] * n.z, t.rot[0][2] * n.x + t.rot[1][2] * n.y + t.rot[2][2] * n.z, n.t);
	}
	function Z1(t, n) {
		return new V(t.rot[0][0] * n.x + t.rot[1][0] * n.y + t.rot[2][0] * n.z, t.rot[0][1] * n.x + t.rot[1][1] * n.y + t.rot[2][1] * n.z, t.rot[0][2] * n.x + t.rot[1][2] * n.y + t.rot[2][2] * n.z, t.rot[0][0] * n.vx + t.rot[1][0] * n.vy + t.rot[2][0] * n.vz, t.rot[0][1] * n.vx + t.rot[1][1] * n.vy + t.rot[2][1] * n.vz, t.rot[0][2] * n.vx + t.rot[1][2] * n.vy + t.rot[2][2] * n.vz, n.t);
	}
	function Mn() {
		const t = .9174821430670688, n = .3977769691083922;
		return new G([
			[
				1,
				0,
				0
			],
			[
				0,
				+t,
				-n
			],
			[
				0,
				+n,
				+t
			]
		]);
	}
	function Te() {
		const t = .9174821430670688, n = .3977769691083922;
		return new G([
			[
				1,
				0,
				0
			],
			[
				0,
				+t,
				+n
			],
			[
				0,
				-n,
				+t
			]
		]);
	}
	function tt(t) {
		return t = E(t), I0(H1(t, O.From2000), F1(t, O.From2000));
	}
	function Ne(t) {
		const n = E(t);
		return I0(tt(n), wn(n));
	}
	function Le(t) {
		const n = E(t);
		return I0(yn(n), nt(n));
	}
	function nt(t) {
		return t = E(t), I0(F1(t, O.Into2000), H1(t, O.Into2000));
	}
	function Kt(t, n) {
		t = E(t);
		const e = Math.sin(n.latitude * _), o = Math.cos(n.latitude * _), r = Math.sin(n.longitude * _), s = Math.cos(n.longitude * _), i = [
			o * s,
			o * r,
			e
		], a = [
			-e * s,
			-e * r,
			o
		], c = [
			r,
			-s,
			0
		], u = -15 * S0(t), h = Y0(u, i), l = Y0(u, a), d = Y0(u, c);
		return new G([
			[
				l[0],
				d[0],
				h[0]
			],
			[
				l[1],
				d[1],
				h[1]
			],
			[
				l[2],
				d[2],
				h[2]
			]
		]);
	}
	function Sn(t, n) {
		return r1(Kt(t, n));
	}
	function _n(t, n) {
		return t = E(t), I0(Sn(t, n), nt(t));
	}
	function Ue(t, n) {
		return r1(_n(t, n));
	}
	function An(t) {
		return I0(nt(t), Mn());
	}
	function pn(t) {
		return r1(An(t));
	}
	function En(t, n) {
		return t = E(t), I0(pn(t), Kt(t, n));
	}
	function Ce(t, n) {
		return r1(En(t, n));
	}
	function Oe() {
		return new G([
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
	function ke() {
		return new G([
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
	function yn(t) {
		const n = R0(E(t)).tobl * _, e = Math.cos(n), o = Math.sin(n);
		return new G([
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
		const n = R0(E(t)).tobl * _, e = Math.cos(n), o = Math.sin(n);
		return new G([
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
	const be = [
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
	], He = [
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
	let Jt, gn;
	var Rn = class {
		constructor(t, n, e, o) {
			this.symbol = t, this.name = n, this.ra1875 = e, this.dec1875 = o;
		}
	};
	function Ve(t, n) {
		if (P(t), P(n), n < -90 || n > 90) throw "Invalid declination angle. Must be -90..+90.";
		t %= 24, t < 0 && (t += 24), Jt || (Jt = tt(new g0(-45655.74141261017)), gn = new g0(0));
		const e = X1(new Q0(n, 15 * t, 1), gn), o = Ft(E1(Jt, e)), r = 10 / 240, s = r / 15;
		for (let i of He) {
			const a = i[3] * r, c = i[1] * s, u = i[2] * s;
			if (a <= o.dec && c <= o.ra && o.ra < u) {
				const h = be[i[0]];
				return new Rn(h[0], h[1], o.ra, o.dec);
			}
		}
		throw "Unable to find constellation for given coordinates.";
	}
	var Z;
	(function(t) {
		t.Penumbral = "penumbral", t.Partial = "partial", t.Annular = "annular", t.Total = "total";
	})(Z || (Z = {}));
	var mn = class {
		constructor(t, n, e, o, r, s) {
			this.kind = t, this.obscuration = n, this.peak = e, this.sd_penum = o, this.sd_partial = r, this.sd_total = s;
		}
	}, Fe = class {
		constructor(t, n, e, o, r, s, i) {
			this.time = t, this.u = n, this.r = e, this.k = o, this.p = r, this.target = s, this.dir = i;
		}
	};
	function y1(t, n, e, o) {
		const r = (o.x * e.x + o.y * e.y + o.z * e.z) / (o.x * o.x + o.y * o.y + o.z * o.z), s = r * o.x - e.x, i = r * o.y - e.y, a = r * o.z - e.z;
		return new Fe(n, r, U * Math.hypot(s, i, a), +i1 - (1 + r) * (i1 - t), -i1 + (1 + r) * (i1 + t), e, o);
	}
	function et(t) {
		const n = e0(f.Sun, t, !0), e = new D(-n.x, -n.y, -n.z, n.t);
		return y1(v3, t, a0(t), e);
	}
	function xn(t) {
		const n = e0(f.Sun, t, !0), e = a0(t), o = new D(-e.x, -e.y, -e.z, e.t);
		return e.x -= n.x, e.y -= n.y, e.z -= n.z, y1(j, t, o, e);
	}
	function $t(t, n) {
		const e = H2(t, n), o = e0(f.Sun, t, !0), r = a0(t), s = new D(e[0] - r.x, e[1] - r.y, e[2] - r.z, t);
		return r.x -= o.x, r.y -= o.y, r.z -= o.z, y1(j, t, s, r);
	}
	function ot(t, n, e) {
		const o = e0(t, e, !0), r = e0(f.Sun, e, !0), s = new D(o.x - r.x, o.y - r.y, o.z - r.z, e);
		return r.x = -o.x, r.y = -o.y, r.z = -o.z, y1(n, e, r, s);
	}
	function Bt(t, n) {
		const e = 11574074074074073e-21, o = n.AddDays(-e), r = n.AddDays(+e), s = t(o);
		return (t(r).r - s.r) / e;
	}
	function Ge(t, n, e) {
		const o = 11574074074074073e-21, r = ot(t, n, e.AddDays(-o));
		return (ot(t, n, e.AddDays(+o)).r - r.r) / o;
	}
	function Ke(t) {
		const e = K((o) => Bt(et, o), t.AddDays(-.03), t.AddDays(.03));
		if (!e) throw "Failed to find peak Earth shadow time.";
		return et(e);
	}
	function Je(t) {
		const e = K((o) => Bt(xn, o), t.AddDays(-.03), t.AddDays(.03));
		if (!e) throw "Failed to find peak Moon shadow time.";
		return xn(e);
	}
	function $e(t, n, e) {
		const r = K((s) => Ge(t, n, s), e.AddDays(-1), e.AddDays(1));
		if (!r) throw "Failed to find peak planet shadow time.";
		return ot(t, n, r);
	}
	function Be(t, n) {
		const o = t.AddDays(-.2), r = t.AddDays(.2);
		function s(a) {
			return $t(a, n);
		}
		const i = K((a) => Bt(s, a), o, r);
		if (!i) throw `PeakLocalMoonShadow: search failure for search_center_time = ${t}`;
		return $t(i, n);
	}
	function Qt(t, n, e) {
		const o = e / 1440, r = t.AddDays(-o), s = t.AddDays(+o), i = K((c) => -(et(c).r - n), r, t), a = K((c) => +(et(c).r - n), t, s);
		if (!i || !a) throw "Failed to find shadow semiduration";
		return (a.ut - i.ut) * (1440 / 2);
	}
	function Yt(t) {
		return b * m0(t).geo_eclip_lat;
	}
	function In(t, n, e) {
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
	function Pn(t, n) {
		const e = new D(t.x + n.x, t.y + n.y, t.z + n.z, t.t), o = In(Math.asin(x2 / e.Length()), Math.asin(z3 / n.Length()), O1(n, e) * _);
		return Math.min(.9999, o);
	}
	function vn(t) {
		let e = E(t);
		for (let o = 0; o < 12; ++o) {
			const r = _1(180, e, 40);
			if (!r) throw "Cannot find full moon.";
			const s = Yt(r);
			if (Math.abs(s) < 1.8) {
				const i = Ke(r);
				if (i.r < i.p + j) {
					let a = Z.Penumbral, c = 0, u = 0, h = 0, l = Qt(i.time, i.p + j, 200);
					return i.r < i.k + j && (a = Z.Partial, h = Qt(i.time, i.k + j, l), i.r + j < i.k ? (a = Z.Total, c = 1, u = Qt(i.time, i.k - j, h)) : c = In(j, i.k, i.r)), new mn(a, c, i.time, l, h, u);
				}
			}
			e = r.AddDays(10);
		}
		throw "Failed to find lunar eclipse within 12 full moons.";
	}
	var Dn = class {
		constructor(t, n, e, o, r, s) {
			this.kind = t, this.obscuration = n, this.peak = e, this.distance = o, this.latitude = r, this.longitude = s;
		}
	};
	function zn(t) {
		return t > .014 ? Z.Total : Z.Annular;
	}
	function Qe(t) {
		let n = Z.Partial, e = t.time, o = t.r, r, s;
		const i = tt(t.time), a = E1(i, t.dir), c = E1(i, t.target);
		a.x *= U, a.y *= U, a.z *= U / s0, c.x *= U, c.y *= U, c.z *= U / s0;
		const u = M0, h = a.x * a.x + a.y * a.y + a.z * a.z, l = -2 * (a.x * c.x + a.y * c.y + a.z * c.z), d = c.x * c.x + c.y * c.y + c.z * c.z - u * u, A = l * l - 4 * h * d;
		let M;
		if (A > 0) {
			const p = (-l - Math.sqrt(A)) / (2 * h), y = p * a.x - c.x, g = p * a.y - c.y, m = (p * a.z - c.z) * s0, w = Math.hypot(y, g) * H0;
			w == 0 ? r = m > 0 ? 90 : -90 : r = b * Math.atan(m / w);
			const I = S0(e);
			s = (b * Math.atan2(g, y) - 15 * I) % 360, s <= -180 ? s += 360 : s > 180 && (s -= 360);
			const x = r1(i);
			let z = new D(y / U, g / U, m / U, t.time);
			z = E1(x, z), z.x += t.target.x, z.y += t.target.y, z.z += t.target.z;
			const v = y1(P2, t.time, z, t.dir);
			if (v.r > 1e-9 || v.r < 0) throw `Unexpected shadow distance from geoid intersection = ${v.r}`;
			n = zn(v.k), M = n === Z.Total ? 1 : Pn(t.dir, z);
		} else M = void 0;
		return new Dn(n, M, e, o, r, s);
	}
	function Ye(t) {
		return t = E(t), vn(t.AddDays(10));
	}
	function Tn(t) {
		t = E(t);
		const n = 1.8;
		let e = t, o;
		for (o = 0; o < 12; ++o) {
			const r = _1(0, e, 40);
			if (!r) throw "Cannot find new moon";
			const s = Yt(r);
			if (Math.abs(s) < n) {
				const i = Je(r);
				if (i.r < i.p + I2) return Qe(i);
			}
			e = r.AddDays(10);
		}
		throw "Failed to find solar eclipse within 12 full moons.";
	}
	function qe(t) {
		return t = E(t), Tn(t.AddDays(10));
	}
	var Nn = class {
		constructor(t, n) {
			this.time = t, this.altitude = n;
		}
	}, Ln = class {
		constructor(t, n, e, o, r, s, i) {
			this.kind = t, this.obscuration = n, this.partial_begin = e, this.total_begin = o, this.peak = r, this.total_end = s, this.partial_end = i;
		}
	};
	function Un(t) {
		return t.p - t.r;
	}
	function Cn(t) {
		return Math.abs(t.k) - t.r;
	}
	function We(t, n) {
		const r = On(n, t.time);
		let s = t.time.AddDays(-.2), i = t.time.AddDays(.2);
		const a = rt(n, 1, Un, s, t.time), c = rt(n, -1, Un, t.time, i);
		let u, h, l;
		t.r < Math.abs(t.k) ? (s = t.time.AddDays(-.01), i = t.time.AddDays(.01), u = rt(n, 1, Cn, s, t.time), h = rt(n, -1, Cn, t.time, i), l = zn(t.k)) : l = Z.Partial;
		const d = l === Z.Total ? 1 : Pn(t.dir, t.target);
		return new Ln(l, d, a, u, r, h, c);
	}
	function rt(t, n, e, o, r) {
		function s(a) {
			return n * e($t(a, t));
		}
		const i = K(s, o, r);
		if (!i) throw "Local eclipse transition search failed.";
		return On(t, i);
	}
	function On(t, n) {
		return new Nn(n, je(n, t));
	}
	function je(t, n) {
		const e = u1(f.Sun, t, n, !0, !0);
		return J1(t, n, e.ra, e.dec, "normal").altitude;
	}
	function kn(t, n) {
		t = E(t), q0(n);
		const e = 1.8;
		let o = t;
		for (;;) {
			const r = _1(0, o, 40);
			if (!r) throw "Cannot find next new moon";
			const s = Yt(r);
			if (Math.abs(s) < e) {
				const i = Be(r, n);
				if (i.r < i.p) {
					const a = We(i, n);
					if (a.partial_begin.altitude > 0 || a.partial_end.altitude > 0) return a;
				}
			}
			o = r.AddDays(10);
		}
	}
	function Xe(t, n) {
		return t = E(t), kn(t.AddDays(10), n);
	}
	var bn = class {
		constructor(t, n, e, o) {
			this.start = t, this.peak = n, this.finish = e, this.separation = o;
		}
	};
	function Ze(t, n, e, o) {
		const r = ot(n, e, t);
		return o * (r.r - r.p);
	}
	function Hn(t, n, e, o, r) {
		const s = K((i) => Ze(i, t, n, r), e, o);
		if (!s) throw "Planet transit boundary search failed";
		return s;
	}
	function Vn(t, n) {
		n = E(n);
		const e = .4, o = 1;
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
		let s = n;
		for (;;) {
			const i = o1(t, 0, s);
			if (e1(t, i) < e) {
				const a = $e(t, r, i);
				if (a.r < a.p) {
					const c = a.time.AddDays(-o), u = Hn(t, r, c, a.time, -1), h = a.time.AddDays(+o), l = Hn(t, r, a.time, h, 1), d = 60 * e1(t, a.time);
					return new bn(u, a.time, l, d);
				}
			}
			s = i.AddDays(10);
		}
	}
	function t4(t, n) {
		return n = E(n), Vn(t, n.AddDays(100));
	}
	var A0;
	(function(t) {
		t[t.Invalid = 0] = "Invalid", t[t.Ascending = 1] = "Ascending", t[t.Descending = -1] = "Descending";
	})(A0 || (A0 = {}));
	var Fn = class {
		constructor(t, n) {
			this.kind = t, this.time = n;
		}
	};
	const Gn = 10;
	function Kn(t) {
		let n = E(t), e = $1(n);
		for (;;) {
			const o = n.AddDays(Gn), r = $1(o);
			if (e.lat * r.lat <= 0) {
				const s = r.lat > e.lat ? A0.Ascending : A0.Descending, i = K((a) => s * $1(a).lat, n, o);
				if (!i) throw "Could not find moon node.";
				return new Fn(s, i);
			}
			n = o, e = r;
		}
	}
	function n4(t) {
		const n = Kn(t.time.AddDays(Gn));
		switch (t.kind) {
			case A0.Ascending:
				if (n.kind !== A0.Descending) throw `Internal error: previous node was ascending, but this node was: ${n.kind}`;
				break;
			case A0.Descending:
				if (n.kind !== A0.Ascending) throw `Internal error: previous node was descending, but this node was: ${n.kind}`;
				break;
			default: throw `Previous node has an invalid node kind: ${t.kind}`;
		}
		return n;
	}
	var qt = class {
		constructor(t, n, e, o) {
			this.ra = t, this.dec = n, this.spin = e, this.north = o;
		}
	};
	function e4(t) {
		const n = $0(B0([
			0,
			0,
			1
		], t, O.Into2000), t, O.Into2000), e = new D(n[0], n[1], n[2], t), o = Ft(e), r = 190.41375788700253 + 360.9856122880876 * t.ut;
		return new qt(o.ra, o.dec, r, e);
	}
	function o4(t, n) {
		const e = E(n), o = e.tt, r = o / 36525;
		let s, i, a;
		switch (t) {
			case f.Sun:
				s = 286.13, i = 63.87, a = 84.176 + 14.1844 * o;
				break;
			case f.Mercury:
				s = 281.0103 - .0328 * r, i = 61.4155 - .0049 * r, a = 329.5988 + 6.1385108 * o + .01067257 * Math.sin(_ * (174.7910857 + 4.092335 * o)) - .00112309 * Math.sin(_ * (349.5821714 + 8.18467 * o)) - 1104e-7 * Math.sin(_ * (164.3732571 + 12.277005 * o)) - 2539e-8 * Math.sin(_ * (339.1643429 + 16.36934 * o)) - 571e-8 * Math.sin(_ * (153.9554286 + 20.461675 * o));
				break;
			case f.Venus:
				s = 272.76, i = 67.16, a = 160.2 - 1.4813688 * o;
				break;
			case f.Earth: return e4(e);
			case f.Moon:
				const d = _ * (125.045 - .0529921 * o), A = _ * (250.089 - .1059842 * o), M = _ * (260.008 + 13.0120009 * o), p = _ * (176.625 + 13.3407154 * o), y = _ * (357.529 + .9856003 * o), g = _ * (311.589 + 26.4057084 * o), m = _ * (134.963 + 13.064993 * o), w = _ * (276.617 + .3287146 * o), I = _ * (34.226 + 1.7484877 * o), x = _ * (15.134 - .1589763 * o), z = _ * (119.743 + .0036096 * o), v = _ * (239.961 + .1643573 * o), k = _ * (25.053 + 12.9590088 * o);
				s = 269.9949 + .0031 * r - 3.8787 * Math.sin(d) - .1204 * Math.sin(A) + .07 * Math.sin(M) - .0172 * Math.sin(p) + .0072 * Math.sin(g) - .0052 * Math.sin(x) + .0043 * Math.sin(k), i = 66.5392 + .013 * r + 1.5419 * Math.cos(d) + .0239 * Math.cos(A) - .0278 * Math.cos(M) + .0068 * Math.cos(p) - .0029 * Math.cos(g) + 9e-4 * Math.cos(m) + 8e-4 * Math.cos(x) - 9e-4 * Math.cos(k), a = 38.3213 + (13.17635815 - 14e-13 * o) * o + 3.561 * Math.sin(d) + .1208 * Math.sin(A) - .0642 * Math.sin(M) + .0158 * Math.sin(p) + .0252 * Math.sin(y) - .0066 * Math.sin(g) - .0047 * Math.sin(m) - .0046 * Math.sin(w) + .0028 * Math.sin(I) + .0052 * Math.sin(x) + .004 * Math.sin(z) + .0019 * Math.sin(v) - .0044 * Math.sin(k);
				break;
			case f.Mars:
				s = 317.269202 - .10927547 * r + 68e-6 * Math.sin(_ * (198.991226 + 19139.4819985 * r)) + 238e-6 * Math.sin(_ * (226.292679 + 38280.8511281 * r)) + 52e-6 * Math.sin(_ * (249.663391 + 57420.7251593 * r)) + 9e-6 * Math.sin(_ * (266.18351 + 76560.636795 * r)) + .419057 * Math.sin(_ * (79.398797 + .5042615 * r)), i = 54.432516 - .05827105 * r + 51e-6 * Math.cos(_ * (122.433576 + 19139.9407476 * r)) + 141e-6 * Math.cos(_ * (43.058401 + 38280.8753272 * r)) + 31e-6 * Math.cos(_ * (57.663379 + 57420.7517205 * r)) + 5e-6 * Math.cos(_ * (79.476401 + 76560.6495004 * r)) + 1.591274 * Math.cos(_ * (166.325722 + .5042615 * r)), a = 176.049863 + 350.891982443297 * o + 145e-6 * Math.sin(_ * (129.071773 + 19140.0328244 * r)) + 157e-6 * Math.sin(_ * (36.352167 + 38281.0473591 * r)) + 4e-5 * Math.sin(_ * (56.668646 + 57420.929536 * r)) + 1e-6 * Math.sin(_ * (67.364003 + 76560.2552215 * r)) + 1e-6 * Math.sin(_ * (104.79268 + 95700.4387578 * r)) + .584542 * Math.sin(_ * (95.391654 + .5042615 * r));
				break;
			case f.Jupiter:
				const N = _ * (99.360714 + 4850.4046 * r), B = _ * (175.895369 + 1191.9605 * r), J = _ * (300.323162 + 262.5475 * r), W = _ * (114.012305 + 6070.2476 * r), u0 = _ * (49.511251 + 64.3 * r);
				s = 268.056595 - .006499 * r + 117e-6 * Math.sin(N) + 938e-6 * Math.sin(B) + .001432 * Math.sin(J) + 3e-5 * Math.sin(W) + .00215 * Math.sin(u0), i = 64.495303 + .002413 * r + 5e-5 * Math.cos(N) + 404e-6 * Math.cos(B) + 617e-6 * Math.cos(J) - 13e-6 * Math.cos(W) + 926e-6 * Math.cos(u0), a = 284.95 + 870.536 * o;
				break;
			case f.Saturn:
				s = 40.589 - .036 * r, i = 83.537 - .004 * r, a = 38.9 + 810.7939024 * o;
				break;
			case f.Uranus:
				s = 257.311, i = -15.175, a = 203.81 - 501.1600928 * o;
				break;
			case f.Neptune:
				const r0 = _ * (357.85 + 52.316 * r);
				s = 299.36 + .7 * Math.sin(r0), i = 43.46 - .51 * Math.cos(r0), a = 249.978 + 541.1397757 * o - .48 * Math.sin(r0);
				break;
			case f.Pluto:
				s = 132.993, i = -6.163, a = 302.695 + 56.3625225 * o;
				break;
			default: throw `Invalid body: ${t}`;
		}
		const c = i * _, u = s * _, h = Math.cos(c), l = new D(h * Math.cos(u), h * Math.sin(u), Math.sin(c), e);
		return new qt(s / 15, i, a, l);
	}
	function r4(t, n, e, o) {
		const r = E(n), s = wt(e), i = wt(o);
		let a, c;
		return e === f.Earth && o === f.Moon ? (a = new V(0, 0, 0, 0, 0, 0, r), c = h1(r)) : (a = W1(e, r), c = W1(o, r)), Jn(t, a, s, c, i);
	}
	function Jn(t, n, e, o, r) {
		const i = .8660254037844386;
		if (t < 1 || t > 5) throw `Invalid lagrange point ${t}`;
		if (!Number.isFinite(e) || e <= 0) throw "Major mass must be a positive number.";
		if (!Number.isFinite(r) || r <= 0) throw "Minor mass must be a negative number.";
		let a = o.x - n.x, c = o.y - n.y, u = o.z - n.z;
		const h = a * a + c * c + u * u, l = Math.sqrt(h), d = o.vx - n.vx, A = o.vy - n.vy, M = o.vz - n.vz;
		let p;
		if (t === 4 || t === 5) {
			const y = c * M - u * A, g = u * d - a * M, m = a * A - c * d;
			let w = g * u - m * c, I = m * a - y * u, x = y * c - g * a;
			const z = Math.sqrt(w * w + I * I + x * x);
			w /= z, I /= z, x /= z, a /= l, c /= l, u /= l;
			const v = t == 4 ? +i : -i, k = .5 * a + v * w, N = .5 * c + v * I, B = .5 * u + v * x, J = .5 * w - v * a, W = .5 * I - v * c, u0 = .5 * x - v * u, r0 = l * k, p0 = l * N, P0 = l * B, l0 = d * a + A * c + M * u, h0 = d * w + A * I + M * x;
			p = new V(r0, p0, P0, l0 * k + h0 * J, l0 * N + h0 * W, l0 * B + h0 * u0, n.t);
		} else {
			const y = -l * (r / (e + r)), g = +l * (e / (e + r)), m = (e + r) / (h * l);
			let w, I, x;
			if (t === 1 || t === 2) w = e / (e + r) * Math.cbrt(r / (3 * e)), I = -e, t == 1 ? (w = 1 - w, x = +r) : (w = 1 + w, x = -r);
			else if (t === 3) w = (7 / 12 * r - e) / (r + e), I = +e, x = +r;
			else throw `Invalid Langrage point ${t}. Must be an integer 1..5.`;
			let z = l * w - y, v;
			do {
				const k = z - y, N = z - g;
				v = (m * z + I / (k * k) + x / (N * N)) / (m - 2 * I / (k * k * k) - 2 * x / (N * N * N)), z -= v;
			} while (Math.abs(v / l) > 1e-14);
			w = (z - y) / l, p = new V(w * a, w * c, w * u, w * d, w * A, w * M, n.t);
		}
		return p;
	}
	var s4 = class t0 {
		constructor(n, e, o) {
			const r = E(e);
			this.originBody = n;
			for (let c of o) if (c.t.tt !== r.tt) throw "Inconsistent times in bodyStates";
			const s = [], i = t0.CalcSolarSystem(r);
			this.curr = new $n(r, i, s);
			const a = this.InternalBodyState(n);
			for (let c of o) {
				const u = new Y(c.x + a.r.x, c.y + a.r.y, c.z + a.r.z), h = new Y(c.vx + a.v.x, c.vy + a.v.y, c.vz + a.v.z), l = Y.zero();
				s.push(new Lt(r.tt, u, h, l));
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
			const e = E(n), o = e.tt - this.curr.time.tt;
			if (o === 0) this.prev = this.Duplicate();
			else {
				this.Swap(), this.curr.time = e, this.curr.gravitators = t0.CalcSolarSystem(e);
				for (let i = 0; i < this.curr.bodies.length; ++i) {
					const a = this.prev.bodies[i];
					this.curr.bodies[i].r = Z0(o, a.r, a.v, a.a);
				}
				this.CalcBodyAccelerations();
				for (let i = 0; i < this.curr.bodies.length; ++i) {
					const a = this.prev.bodies[i], c = this.curr.bodies[i], u = a.a.mean(c.a);
					c.tt = e.tt, c.r = Z0(o, a.r, a.v, u), c.v = Ut(o, a.v, u);
				}
				this.CalcBodyAccelerations();
			}
			const r = [], s = this.InternalBodyState(this.originBody);
			for (let i of this.curr.bodies) r.push(new V(i.r.x - s.r.x, i.r.y - s.r.y, i.r.z - s.r.z, i.v.x - s.v.x, i.v.y - s.v.y, i.v.z - s.v.z, e));
			return r;
		}
		Swap() {
			const n = this.curr;
			this.curr = this.prev, this.prev = n;
		}
		SolarSystemBodyState(n) {
			const e = this.InternalBodyState(n), o = this.InternalBodyState(this.originBody);
			return U0(e.sub(o), this.curr.time);
		}
		InternalBodyState(n) {
			if (n === f.SSB) return new N0(this.curr.time.tt, Y.zero(), Y.zero());
			const e = this.curr.gravitators[n];
			if (e) return e;
			throw `Invalid body: ${n}`;
		}
		static CalcSolarSystem(n) {
			const e = {}, o = new N0(n.tt, Y.zero(), Y.zero());
			e[f.Mercury] = X(o, n.tt, f.Mercury, pt), e[f.Venus] = X(o, n.tt, f.Venus, Et), e[f.Earth] = X(o, n.tt, f.Earth, c1 + U1), e[f.Mars] = X(o, n.tt, f.Mars, yt), e[f.Jupiter] = X(o, n.tt, f.Jupiter, V0), e[f.Saturn] = X(o, n.tt, f.Saturn, F0), e[f.Uranus] = X(o, n.tt, f.Uranus, G0), e[f.Neptune] = X(o, n.tt, f.Neptune, K0);
			for (let r in e) e[r].r.decr(o.r), e[r].v.decr(o.v);
			return e[f.Sun] = new N0(n.tt, o.r.neg(), o.v.neg()), e;
		}
		CalcBodyAccelerations() {
			for (let n of this.curr.bodies) n.a = Y.zero(), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Sun].r, a1), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Mercury].r, pt), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Venus].r, Et), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Earth].r, c1 + U1), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Mars].r, yt), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Jupiter].r, V0), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Saturn].r, F0), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Uranus].r, G0), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Neptune].r, K0);
		}
		static AddAcceleration(n, e, o, r) {
			const s = o.x - e.x, i = o.y - e.y, a = o.z - e.z, c = s * s + i * i + a * a, u = r / (c * Math.sqrt(c));
			n.x += s * u, n.y += i * u, n.z += a * u;
		}
		Duplicate() {
			const n = {};
			for (let o in this.curr.gravitators) n[o] = this.curr.gravitators[o].clone();
			const e = [];
			for (let o of this.curr.bodies) e.push(o.clone());
			return new $n(this.curr.time, n, e);
		}
	}, $n = class {
		constructor(t, n, e) {
			this.time = t, this.gravitators = n, this.bodies = e;
		}
	};
	function st(t) {
		return typeof t.Observer == "function" ? t : t.default ?? t;
	}
	const { MakeTime: H4, SearchRiseSet: V4, Body: F4, Observer: i4 } = st(z1);
	new i4(40.7128, -74.006, 10);
	const { Body: o0 } = st(z1);
	R.SUN, o0.Sun, R.MERCURY, o0.Mercury, R.VENUS, o0.Venus, R.EARTH, o0.Earth, R.MARS, o0.Mars, R.JUPITER, o0.Jupiter, R.SATURN, o0.Saturn, R.URANUS, o0.Uranus, R.NEPTUNE, o0.Neptune, R.PLUTO, o0.Pluto, R.MOON, o0.Moon;
	2 * Math.PI;
	const { Rotation_EQD_EQJ: $4, CombineRotation: B4, MakeRotation: Q4 } = st(z1);
	Math.PI / (180 * 3600);
	function it(t, n) {
		return t.x = n.x, t.y = n.y, t.z = n.z, t;
	}
	function a4(t, n, e) {
		if (t.length === 0) return null;
		if (t.length === 1) {
			const l = t[0].position;
			return e ? it(e, l) : l;
		}
		if (n <= t[0].time.jd) {
			const l = t[0].position;
			return e ? it(e, l) : l;
		}
		if (n >= t[t.length - 1].time.jd) {
			const l = t[t.length - 1].position;
			return e ? it(e, l) : l;
		}
		let o = 0, r = t.length - 1;
		for (; r - o > 1;) {
			const l = o + r >> 1;
			t[l].time.jd <= n ? o = l : r = l;
		}
		const s = t[o], i = t[r];
		if (i.time.jd === s.time.jd) {
			const l = s.position;
			return e ? it(e, l) : l;
		}
		const a = (n - s.time.jd) / (i.time.jd - s.time.jd), c = s.position.x + a * (i.position.x - s.position.x), u = s.position.y + a * (i.position.y - s.position.y), h = s.position.z + a * (i.position.z - s.position.z);
		return e ? (e.x = c, e.y = u, e.z = h, e) : {
			x: c,
			y: u,
			z: h
		};
	}
	const { HelioState: q4 } = st(z1);
	function c4(t, n, e = D1) {
		const o = {};
		for (const r of e) {
			const s = n[r] ?? [], i = s.length ? a4(s, t) : null;
			if (i) {
				const a = d3(i);
				o[r] = [
					a.x,
					a.y,
					a.z
				];
			}
		}
		return o;
	}
	function u4() {
		return D1.length * 3;
	}
	function l4(t) {
		t.fill(NaN);
	}
	function h4(t, n) {
		l4(t);
		const e = D1;
		for (const o of Object.keys(n)) {
			const r = e.indexOf(o);
			if (r < 0) continue;
			const s = n[o];
			if (!s) continue;
			const i = r * 3, [a, c, u] = s;
			t[i] = a, t[i + 1] = c, t[i + 2] = u;
		}
	}
	let Wt = null, jt = null;
	ht({
		async init(t) {
			const n = new Float32Array(t), e = u4();
			if (n.length !== e) throw new Error(`[solar worker] SAB Float32 length mismatch: expected ${e}, got ${n.length}`);
			jt = n;
		},
		async loadBatch(t, n) {
			return Wt = n, {
				type: "ready",
				runId: t
			};
		},
		async compute(t, n, e) {
			try {
				if (!Wt) return {
					type: "error",
					runId: t,
					seq: n,
					message: "No ephemeris loaded"
				};
				const o = c4(e, Wt, D1);
				return jt ? (h4(jt, o), {
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
				return {
					type: "error",
					runId: t,
					seq: n,
					message: o instanceof Error ? o.message : String(o)
				};
			}
		}
	});
})();
