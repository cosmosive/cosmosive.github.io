(function() {
	var c2 = Object.defineProperty, Yn = (t, n) => {
		let e = {};
		for (var r in t) c2(e, r, {
			get: t[r],
			enumerable: !0
		});
		return n || c2(e, Symbol.toStringTag, { value: "Module" }), e;
	};
	const u2 = Symbol("Comlink.proxy"), jn = Symbol("Comlink.endpoint"), Wn = Symbol("Comlink.releaseProxy"), ct = Symbol("Comlink.finalizer"), g1 = Symbol("Comlink.thrown"), l2 = (t) => typeof t == "object" && t !== null || typeof t == "function", h2 = new Map([["proxy", {
		canHandle: (t) => l2(t) && t[u2],
		serialize(t) {
			const { port1: n, port2: e } = new MessageChannel();
			return ut(t, n), [e, [e]];
		},
		deserialize(t) {
			return t.start(), te(t);
		}
	}], ["throw", {
		canHandle: (t) => l2(t) && g1 in t,
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
	function Xn(t, n) {
		for (const e of t) if (n === e || e === "*" || e instanceof RegExp && e.test(n)) return !0;
		return !1;
	}
	function ut(t, n = globalThis, e = ["*"]) {
		n.addEventListener("message", function r(o) {
			if (!o || !o.data) return;
			if (!Xn(e, o.origin)) {
				console.warn(`Invalid origin '${o.origin}' for comlink proxy`);
				return;
			}
			const { id: s, type: i, path: a } = Object.assign({ path: [] }, o.data), c = (o.data.argumentList || []).map(P0);
			let u;
			try {
				const h = a.slice(0, -1).reduce((d, _) => d[_], t), l = a.reduce((d, _) => d[_], t);
				switch (i) {
					case "GET":
						u = l;
						break;
					case "SET":
						h[a.slice(-1)[0]] = P0(o.data.value), u = !0;
						break;
					case "APPLY":
						u = l.apply(h, c);
						break;
					case "CONSTRUCT":
						u = se(new l(...c));
						break;
					case "ENDPOINT":
						{
							const { port1: d, port2: _ } = new MessageChannel();
							ut(t, _), u = oe(d, [d]);
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
					[g1]: 0
				};
			}
			Promise.resolve(u).catch((h) => ({
				value: h,
				[g1]: 0
			})).then((h) => {
				const [l, d] = v1(h);
				n.postMessage(Object.assign(Object.assign({}, l), { id: s }), d), i === "RELEASE" && (n.removeEventListener("message", r), f2(n), ct in t && typeof t[ct] == "function" && t[ct]());
			}).catch((h) => {
				const [l, d] = v1({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[g1]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, l), { id: s }), d);
			});
		}), n.start && n.start();
	}
	function Zn(t) {
		return t.constructor.name === "MessagePort";
	}
	function f2(t) {
		Zn(t) && t.close();
	}
	function te(t, n) {
		const e = /* @__PURE__ */ new Map();
		return t.addEventListener("message", function(o) {
			const { data: s } = o;
			if (!s || !s.id) return;
			const i = e.get(s.id);
			if (i) try {
				i(s);
			} finally {
				e.delete(s.id);
			}
		}), lt(t, e, [], n);
	}
	function R1(t) {
		if (t) throw new Error("Proxy has been released and is not useable");
	}
	function d2(t) {
		return O0(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			f2(t);
		});
	}
	const x1 = /* @__PURE__ */ new WeakMap(), m1 = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const n = (x1.get(t) || 0) - 1;
		x1.set(t, n), n === 0 && d2(t);
	});
	function ne(t, n) {
		const e = (x1.get(n) || 0) + 1;
		x1.set(n, e), m1 && m1.register(t, n, t);
	}
	function ee(t) {
		m1 && m1.unregister(t);
	}
	function lt(t, n, e = [], r = function() {}) {
		let o = !1;
		const s = new Proxy(r, {
			get(i, a) {
				if (R1(o), a === Wn) return () => {
					ee(s), d2(t), n.clear(), o = !0;
				};
				if (a === "then") {
					if (e.length === 0) return { then: () => s };
					const c = O0(t, n, {
						type: "GET",
						path: e.map((u) => u.toString())
					}).then(P0);
					return c.then.bind(c);
				}
				return lt(t, n, [...e, a]);
			},
			set(i, a, c) {
				R1(o);
				const [u, h] = v1(c);
				return O0(t, n, {
					type: "SET",
					path: [...e, a].map((l) => l.toString()),
					value: u
				}, h).then(P0);
			},
			apply(i, a, c) {
				R1(o);
				const u = e[e.length - 1];
				if (u === jn) return O0(t, n, { type: "ENDPOINT" }).then(P0);
				if (u === "bind") return lt(t, n, e.slice(0, -1));
				const [h, l] = M2(c);
				return O0(t, n, {
					type: "APPLY",
					path: e.map((d) => d.toString()),
					argumentList: h
				}, l).then(P0);
			},
			construct(i, a) {
				R1(o);
				const [c, u] = M2(a);
				return O0(t, n, {
					type: "CONSTRUCT",
					path: e.map((h) => h.toString()),
					argumentList: c
				}, u).then(P0);
			}
		});
		return ne(s, t), s;
	}
	function re(t) {
		return Array.prototype.concat.apply([], t);
	}
	function M2(t) {
		const n = t.map(v1);
		return [n.map((e) => e[0]), re(n.map((e) => e[1]))];
	}
	const S2 = /* @__PURE__ */ new WeakMap();
	function oe(t, n) {
		return S2.set(t, n), t;
	}
	function se(t) {
		return Object.assign(t, { [u2]: !0 });
	}
	function v1(t) {
		for (const [n, e] of h2) if (e.canHandle(t)) {
			const [r, o] = e.serialize(t);
			return [{
				type: "HANDLER",
				name: n,
				value: r
			}, o];
		}
		return [{
			type: "RAW",
			value: t
		}, S2.get(t) || []];
	}
	function P0(t) {
		switch (t.type) {
			case "HANDLER": return h2.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function O0(t, n, e, r) {
		return new Promise((o) => {
			const s = ie();
			n.set(s, o), t.start && t.start(), t.postMessage(Object.assign({ id: s }, e), r);
		});
	}
	function ie() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	const D = {
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
	}, ae = {
		[D.SUN]: {
			name: "Sun",
			type: "star",
			color: "#f5e042",
			radiusKm: 696340,
			kind: "star",
			textureResolution: 512
		},
		[D.MERCURY]: {
			name: "Mercury",
			type: "planet",
			color: "#9c8a78",
			radiusKm: 2439.7,
			kind: "barren",
			textureResolution: 192
		},
		[D.VENUS]: {
			name: "Venus",
			type: "planet",
			color: "#f0e3a0",
			radiusKm: 6051.8,
			kind: "molten",
			textureResolution: 224
		},
		[D.EARTH]: {
			name: "Earth",
			type: "planet",
			color: "#4a90d9",
			radiusKm: 6371,
			kind: "oceanic",
			textureResolution: 224,
			features: { axialSpin: "eop" }
		},
		[D.MARS]: {
			name: "Mars",
			type: "planet",
			color: "#c1440e",
			radiusKm: 3389.5,
			kind: "desert",
			textureResolution: 192
		},
		[D.JUPITER]: {
			name: "Jupiter",
			type: "planet",
			color: "#c8985a",
			radiusKm: 69911,
			kind: "gasGiant",
			textureResolution: 256
		},
		[D.SATURN]: {
			name: "Saturn",
			type: "planet",
			color: "#e8c673",
			radiusKm: 58232,
			kind: "gasGiant",
			textureResolution: 256,
			features: { rings: !0 }
		},
		[D.URANUS]: {
			name: "Uranus",
			type: "planet",
			color: "#a3d6e0",
			radiusKm: 25362,
			kind: "iceGiant",
			textureResolution: 224
		},
		[D.NEPTUNE]: {
			name: "Neptune",
			type: "planet",
			color: "#4166f5",
			radiusKm: 24622,
			kind: "iceGiant",
			textureResolution: 224
		},
		[D.PLUTO]: {
			name: "Pluto",
			type: "dwarf_planet",
			color: "#a26847",
			radiusKm: 1188.3,
			kind: "barren",
			textureResolution: 192
		},
		[D.MOON]: {
			name: "Moon",
			type: "moon",
			radiusKm: 1737,
			kind: "barren",
			textureResolution: 192
		}
	}, ce = 149597870.7, ue = 648e3 / Math.PI, D1 = 1500, s1 = 100 / ue, le = 16777216, p2 = 3.2615637771694;
	(le - D1) / 20 + s1;
	function _2(t) {
		return !Number.isFinite(t) || t < 0 ? 0 : t * 20;
	}
	const he = 5e4, fe = 2e3, de = he / p2, Me = fe / p2;
	_2(de);
	_2(Me);
	s1 <= 0 || (25 >= s1 ? D1 + (25 - s1) * 20 : 25 / s1 * D1);
	const ft = 1721545, dt = 3181545;
	function Se(t) {
		return {
			name: t.name,
			type: t.type,
			color: t.color,
			radiusKm: t.radiusKm
		};
	}
	const A2 = Object.fromEntries(Object.entries(ae).map(([t, n]) => [t, Se(n)]));
	D.SUN, D.MERCURY, D.VENUS, D.EARTH, D.MARS, D.JUPITER, D.SATURN, D.URANUS, D.NEPTUNE, D.PLUTO;
	const Mt = A2[D.EARTH]?.radiusKm ?? 6371, St = A2[D.SUN]?.radiusKm ?? 696340, pe = Mt / St, i1 = .04;
	Mt / i1;
	i1 / Mt / (15 / ce);
	function _e(t) {
		return !Number.isFinite(t) || t <= 0 ? i1 : t / pe * i1;
	}
	function Ae(t) {
		return !Number.isFinite(t) || t <= 0 ? i1 : _e(t / St);
	}
	Ae(St);
	var I1 = Yn({
		AU_PER_LY: () => E2,
		AngleBetween: () => C1,
		AngleFromSun: () => n1,
		Apsis: () => A1,
		ApsisKind: () => m0,
		AstroTime: () => g0,
		Atmosphere: () => en,
		AtmosphereInfo: () => nn,
		AxisInfo: () => jt,
		BackdatePosition: () => j2,
		BaryState: () => h3,
		Body: () => f,
		CALLISTO_RADIUS_KM: () => me,
		C_AUDAY: () => P1,
		CalcMoonCount: () => L2,
		CombineRotation: () => v0,
		Constellation: () => G3,
		ConstellationInfo: () => Rn,
		CorrectLightTravel: () => Y2,
		DEG2RAD: () => p,
		DefineStar: () => Ve,
		DeltaT_EspenakMeeus: () => Rt,
		DeltaT_JplHorizons: () => He,
		EUROPA_RADIUS_KM: () => Re,
		EclipseEvent: () => Nn,
		EclipseKind: () => X,
		Ecliptic: () => h1,
		EclipticCoordinates: () => H2,
		EclipticGeoMoon: () => $1,
		EclipticLongitude: () => U0,
		Elongation: () => cn,
		ElongationEvent: () => an,
		Equator: () => l1,
		EquatorFromVector: () => Jt,
		EquatorialCoordinates: () => H1,
		GANYMEDE_RADIUS_KM: () => xe,
		GeoEmbState: () => It,
		GeoMoon: () => a0,
		GeoMoonState: () => f1,
		GeoVector: () => e0,
		GlobalSolarEclipseInfo: () => Pn,
		GravitySimulator: () => u4,
		HOUR2RAD: () => pt,
		HelioDistance: () => L0,
		HelioState: () => K1,
		HelioVector: () => c0,
		Horizon: () => J1,
		HorizonFromVector: () => L3,
		HorizontalCoordinates: () => F2,
		HourAngle: () => x3,
		HourAngleEvent: () => on,
		IO_RADIUS_KM: () => ge,
		IdentityMatrix: () => T3,
		Illumination: () => Y1,
		IlluminationInfo: () => X2,
		InverseRefraction: () => dn,
		InverseRotation: () => r1,
		JUPITER_EQUATORIAL_RADIUS_KM: () => Ee,
		JUPITER_MEAN_RADIUS_KM: () => we,
		JUPITER_POLAR_RADIUS_KM: () => ye,
		JupiterMoons: () => u3,
		JupiterMoonsInfo: () => K2,
		KM_PER_AU: () => C,
		LagrangePoint: () => c4,
		LagrangePointFast: () => Gn,
		Libration: () => qe,
		LibrationInfo: () => C2,
		LocalSolarEclipseInfo: () => Ln,
		LunarEclipseInfo: () => xn,
		MakeRotation: () => We,
		MakeTime: () => E,
		MassProduct: () => gt,
		MoonPhase: () => Ft,
		MoonQuarter: () => Z2,
		NextGlobalSolarEclipse: () => Z3,
		NextLocalSolarEclipse: () => e4,
		NextLunarApsis: () => I3,
		NextLunarEclipse: () => X3,
		NextMoonNode: () => s4,
		NextMoonQuarter: () => p3,
		NextPlanetApsis: () => z3,
		NextTransit: () => o4,
		NodeEventInfo: () => Hn,
		NodeEventKind: () => _0,
		Observer: () => vt,
		ObserverGravity: () => n3,
		ObserverState: () => Ze,
		ObserverVector: () => Xe,
		PairLongitude: () => Vt,
		Pivot: () => N3,
		PlanetOrbitalPeriod: () => Fe,
		RAD2DEG: () => b,
		RAD2HOUR: () => _t,
		Refraction: () => E1,
		RotateState: () => W1,
		RotateVector: () => y1,
		RotationAxis: () => a4,
		RotationMatrix: () => J,
		Rotation_ECL_EQD: () => An,
		Rotation_ECL_EQJ: () => U3,
		Rotation_ECL_HOR: () => En,
		Rotation_ECT_EQD: () => yn,
		Rotation_ECT_EQJ: () => k3,
		Rotation_EQD_ECL: () => _n,
		Rotation_EQD_ECT: () => wn,
		Rotation_EQD_EQJ: () => Z1,
		Rotation_EQD_HOR: () => Gt,
		Rotation_EQJ_ECL: () => Mn,
		Rotation_EQJ_ECT: () => O3,
		Rotation_EQJ_EQD: () => X1,
		Rotation_EQJ_GAL: () => F3,
		Rotation_EQJ_HOR: () => b3,
		Rotation_GAL_EQJ: () => H3,
		Rotation_HOR_ECL: () => V3,
		Rotation_HOR_EQD: () => Sn,
		Rotation_HOR_EQJ: () => pn,
		Search: () => $,
		SearchAltitude: () => y3,
		SearchGlobalSolarEclipse: () => Tn,
		SearchHourAngle: () => R3,
		SearchLocalSolarEclipse: () => kn,
		SearchLunarApsis: () => un,
		SearchLunarEclipse: () => In,
		SearchMaxElongation: () => v3,
		SearchMoonNode: () => $n,
		SearchMoonPhase: () => _1,
		SearchMoonQuarter: () => tn,
		SearchPeakMagnitude: () => D3,
		SearchPlanetApsis: () => hn,
		SearchRelativeLongitude: () => e1,
		SearchRiseSet: () => E3,
		SearchSunLongitude: () => W2,
		SearchTransit: () => Fn,
		SeasonInfo: () => sn,
		Seasons: () => m3,
		SetDeltaTFunction: () => Je,
		SiderealTime: () => k2,
		SphereFromVector: () => $t,
		Spherical: () => q0,
		StateVector: () => F,
		SunPosition: () => $2,
		TransitInfo: () => bn,
		Vector: () => P,
		VectorFromHorizon: () => C3,
		VectorFromSphere: () => j1,
		VectorObserver: () => t3,
		e_tilt: () => R0
	});
	const P1 = 173.1446326846693, C = 149597870.69098932, E2 = 63241.07708807546, p = .017453292519943295, pt = .26179938779914946, b = 57.29577951308232, _t = 3.819718634205488, Ee = 71492, ye = 66854, we = 69911, ge = 1821.6, Re = 1560.8, xe = 2631.2, me = 2410.3, y2 = 365.24217, w2 = /* @__PURE__ */ new Date("2000-01-01T12:00:00Z"), n0 = 2 * Math.PI, w0 = 3600 * (180 / Math.PI), k0 = 484813681109536e-20, g2 = 10800 * 60, ve = 2 * g2, R2 = 7292115e-11, De = g2 / Math.PI, Ie = -.17 - 5 * Math.log10(De), z1 = 29.530588, T1 = 24 * 3600, Pe = T1 * 1e3, x2 = .9972695717592592, a1 = 695700, m2 = a1 / C, s0 = .996647180302104, b0 = s0 * s0, M0 = 6378.1366, ze = M0 / C, Te = M0 * s0, v2 = 6371, Ne = v2 + 88, Le = 1738.1 / C, j = 1737.4, D2 = 1736, Ce = D2 / C, Ue = 34 / 60, At = 81.30056, c1 = .0002959122082855911, Et = 4912547451450812e-26, yt = 7243452486162703e-25, u1 = 8887692390113509e-25, wt = 9549535105779258e-26, V0 = 2.825345909524226e-7, F0 = 8.459715185680659e-8, H0 = 1.292024916781969e-8, J0 = 1.524358900784276e-8, Oe = 218869976542597e-26, N1 = u1 / At;
	function gt(t) {
		switch (t) {
			case f.Sun: return c1;
			case f.Mercury: return Et;
			case f.Venus: return yt;
			case f.Earth: return u1;
			case f.Moon: return N1;
			case f.EMB: return u1 + N1;
			case f.Mars: return wt;
			case f.Jupiter: return V0;
			case f.Saturn: return F0;
			case f.Uranus: return H0;
			case f.Neptune: return J0;
			case f.Pluto: return Oe;
			default: throw `Do not know mass product for body: ${t}`;
		}
	}
	function L1(t) {
		if (t !== !0 && t !== !1) throw console.trace(), `Value is not boolean: ${t}`;
		return t;
	}
	function v(t) {
		if (!Number.isFinite(t)) throw console.trace(), `Value is not a finite number: ${t}`;
		return t;
	}
	function $0(t) {
		return t - Math.floor(t);
	}
	function C1(t, n) {
		const e = t.x * t.x + t.y * t.y + t.z * t.z;
		if (Math.abs(e) < 1e-8) throw "AngleBetween: first vector is too short.";
		const r = n.x * n.x + n.y * n.y + n.z * n.z;
		if (Math.abs(r) < 1e-8) throw "AngleBetween: second vector is too short.";
		const o = (t.x * n.x + t.y * n.y + t.z * n.z) / Math.sqrt(e * r);
		return o <= -1 ? 180 : o >= 1 ? 0 : b * Math.acos(o);
	}
	var f;
	(function(t) {
		t.Sun = "Sun", t.Moon = "Moon", t.Mercury = "Mercury", t.Venus = "Venus", t.Earth = "Earth", t.Mars = "Mars", t.Jupiter = "Jupiter", t.Saturn = "Saturn", t.Uranus = "Uranus", t.Neptune = "Neptune", t.Pluto = "Pluto", t.SSB = "SSB", t.EMB = "EMB", t.Star1 = "Star1", t.Star2 = "Star2", t.Star3 = "Star3", t.Star4 = "Star4", t.Star5 = "Star5", t.Star6 = "Star6", t.Star7 = "Star7", t.Star8 = "Star8";
	})(f || (f = {}));
	const ke = [
		f.Star1,
		f.Star2,
		f.Star3,
		f.Star4,
		f.Star5,
		f.Star6,
		f.Star7,
		f.Star8
	], be = [
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
	function I2(t) {
		const n = ke.indexOf(t);
		return n >= 0 ? be[n] : null;
	}
	function U1(t) {
		const n = I2(t);
		return n && n.dist > 0 ? n : null;
	}
	function Ve(t, n, e, r) {
		const o = I2(t);
		if (!o) throw `Invalid star body: ${t}`;
		if (v(n), v(e), v(r), n < 0 || n >= 24) throw `Invalid right ascension for star: ${n}`;
		if (e < -90 || e > 90) throw `Invalid declination for star: ${e}`;
		if (r < 1) throw `Invalid star distance: ${r}`;
		o.ra = n, o.dec = e, o.dist = r * E2;
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
	function Fe(t) {
		if (t in i0) return i0[t].OrbitalPeriod;
		throw `Unknown orbital period for: ${t}`;
	}
	const B = {
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
		var n, e, r, o, s, i, a;
		const c = 2e3 + (t - 14) / y2;
		return c < -500 ? (n = (c - 1820) / 100, -20 + 32 * n * n) : c < 500 ? (n = c / 100, e = n * n, r = n * e, o = e * e, s = e * r, i = r * r, 10583.6 - 1014.41 * n + 33.78311 * e - 5.952053 * r - .1798452 * o + .022174192 * s + .0090316521 * i) : c < 1600 ? (n = (c - 1e3) / 100, e = n * n, r = n * e, o = e * e, s = e * r, i = r * r, 1574.2 - 556.01 * n + 71.23472 * e + .319781 * r - .8503463 * o - .005050998 * s + .0083572073 * i) : c < 1700 ? (n = c - 1600, e = n * n, r = n * e, 120 - .9808 * n - .01532 * e + r / 7129) : c < 1800 ? (n = c - 1700, e = n * n, r = n * e, o = e * e, 8.83 + .1603 * n - .0059285 * e + 13336e-8 * r - o / 1174e3) : c < 1860 ? (n = c - 1800, e = n * n, r = n * e, o = e * e, s = e * r, i = r * r, a = r * o, 13.72 - .332447 * n + .0068612 * e + .0041116 * r - 37436e-8 * o + 121272e-10 * s - 1.699e-7 * i + 875e-12 * a) : c < 1900 ? (n = c - 1860, e = n * n, r = n * e, o = e * e, s = e * r, 7.62 + .5737 * n - .251754 * e + .01680668 * r - .0004473624 * o + s / 233174) : c < 1920 ? (n = c - 1900, e = n * n, r = n * e, o = e * e, -2.79 + 1.494119 * n - .0598939 * e + .0061966 * r - 197e-6 * o) : c < 1941 ? (n = c - 1920, e = n * n, r = n * e, 21.2 + .84493 * n - .0761 * e + .0020936 * r) : c < 1961 ? (n = c - 1950, e = n * n, r = n * e, 29.07 + .407 * n - e / 233 + r / 2547) : c < 1986 ? (n = c - 1975, e = n * n, r = n * e, 45.45 + 1.067 * n - e / 260 - r / 718) : c < 2005 ? (n = c - 2e3, e = n * n, r = n * e, o = e * e, s = e * r, 63.86 + .3345 * n - .060374 * e + .0017275 * r + 651814e-9 * o + 2373599e-11 * s) : c < 2050 ? (n = c - 2e3, 62.92 + .32217 * n + .005589 * n * n) : c < 2150 ? (n = (c - 1820) / 100, -20 + 32 * n * n - .5628 * (2150 - c)) : (n = (c - 1820) / 100, -20 + 32 * n * n);
	}
	function He(t) {
		return Rt(Math.min(t, 17 * y2));
	}
	let P2 = Rt;
	function Je(t) {
		P2 = t;
	}
	function z2(t) {
		return t + P2(t) / 86400;
	}
	var g0 = class at {
		constructor(n) {
			if (n instanceof at) {
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
			let e = new at(n);
			for (;;) {
				const r = n - e.tt;
				if (Math.abs(r) < 1e-12) return e;
				e = e.AddDays(r);
			}
		}
		toString() {
			return this.date.toISOString();
		}
		AddDays(n) {
			return new at(this.ut + n);
		}
	};
	function $e(t, n, e) {
		return new g0(t.ut + e * (n.ut - t.ut));
	}
	function E(t) {
		return t instanceof g0 ? t : new g0(t);
	}
	function Ge(t) {
		function n(d) {
			return d % ve * k0;
		}
		const e = t.tt / 36525, r = n(1287104.79305 + e * 129596581.0481), o = n(335779.526232 + e * 1739527262.8478), s = n(1072260.70369 + e * 1602961601.209), i = n(450160.398036 - e * 6962890.5431);
		let a = Math.sin(i), c = Math.cos(i), u = (-172064161 - 174666 * e) * a + 33386 * c, h = (92052331 + 9086 * e) * c + 15377 * a, l = 2 * (o - s + i);
		return a = Math.sin(l), c = Math.cos(l), u += (-13170906 - 1675 * e) * a - 13696 * c, h += (5730336 - 3015 * e) * c - 4587 * a, l = 2 * (o + i), a = Math.sin(l), c = Math.cos(l), u += (-2276413 - 234 * e) * a + 2796 * c, h += (978459 - 485 * e) * c + 1374 * a, l = 2 * i, a = Math.sin(l), c = Math.cos(l), u += (2074554 + 207 * e) * a - 698 * c, h += (-897492 + 470 * e) * c - 291 * a, a = Math.sin(r), c = Math.cos(r), u += (1475877 - 3633 * e) * a + 11817 * c, h += (73871 - 184 * e) * c - 1924 * a, {
			dpsi: -135e-6 + u * 1e-7,
			deps: 388e-6 + h * 1e-7
		};
	}
	function T2(t) {
		var n = t.tt / 36525;
		return (((((-4.34e-8 * n - 576e-9) * n + .0020034) * n - 1831e-7) * n - 46.836769) * n + 84381.406) / 3600;
	}
	var O1;
	function R0(t) {
		if (!O1 || Math.abs(O1.tt - t.tt) > 1e-6) {
			const n = Ge(t), e = T2(t), r = e + n.deps / 3600;
			O1 = {
				tt: t.tt,
				dpsi: n.dpsi,
				deps: n.deps,
				ee: n.dpsi * Math.cos(e * p) / 15,
				mobl: e,
				tobl: r
			};
		}
		return O1;
	}
	function N2(t, n) {
		const e = t * p, r = Math.cos(e), o = Math.sin(e);
		return [
			n[0],
			n[1] * r - n[2] * o,
			n[1] * o + n[2] * r
		];
	}
	function Qe(t, n) {
		return N2(T2(t), n);
	}
	let L2 = 0;
	function x0(t) {
		++L2;
		const n = t.tt / 36525;
		function e(T, U) {
			const V = [];
			let H;
			for (H = 0; H <= U - T; ++H) V.push(0);
			return {
				min: T,
				array: V
			};
		}
		function r(T, U, V, H) {
			const Q = [];
			for (let I0 = 0; I0 <= U - T; ++I0) Q.push(e(V, H));
			return {
				min: T,
				array: Q
			};
		}
		function o(T, U, V) {
			const H = T.array[U - T.min];
			return H.array[V - H.min];
		}
		function s(T, U, V, H) {
			const Q = T.array[U - T.min];
			Q.array[V - Q.min] = H;
		}
		let i, a, c, u, h, l, d, _, M, A, y, g, R, w, m, x, z, I, k, N, q, G, Y, u0 = r(-6, 6, 1, 4), o0 = r(-6, 6, 1, 4);
		function A0(T, U) {
			return o(u0, T, U);
		}
		function D0(T, U) {
			return o(o0, T, U);
		}
		function l0(T, U, V) {
			return s(u0, T, U, V);
		}
		function h0(T, U, V) {
			return s(o0, T, U, V);
		}
		function st(T, U, V, H, Q) {
			Q(T * V - U * H, U * V + T * H);
		}
		function L(T) {
			return Math.sin(n0 * T);
		}
		d = n * n, M = 0, Y = 0, y = 0, g = 3422.7;
		var f0 = L(.19833 + .05611 * n), e2 = L(.27869 + .04508 * n), r2 = L(.16827 - .36903 * n), o2 = L(.34734 - 5.37261 * n), s2 = L(.10498 - 5.37899 * n), it = L(.42681 - .41855 * n), p4 = L(.14943 - 5.37511 * n);
		for (I = .84 * f0 + .31 * e2 + 14.27 * r2 + 7.26 * o2 + .28 * s2 + .24 * it, k = 2.94 * f0 + .31 * e2 + 14.27 * r2 + 9.34 * o2 + 1.12 * s2 + .83 * it, N = -6.4 * f0 - 1.89 * it, q = .21 * f0 + .31 * e2 + 14.27 * r2 - 88.7 * o2 - 15.3 * s2 + .24 * it - 1.86 * p4, G = I - N, _ = -3332e-9 * L(.59734 - 5.37261 * n) - 539e-9 * L(.35498 - 5.37899 * n) - 64e-9 * L(.39943 - 5.37511 * n), R = n0 * $0(.60643382 + 1336.85522467 * n - 313e-8 * d) + I / w0, w = n0 * $0(.37489701 + 1325.55240982 * n + 2565e-8 * d) + k / w0, m = n0 * $0(.99312619 + 99.99735956 * n - 44e-8 * d) + N / w0, x = n0 * $0(.25909118 + 1342.2278298 * n - 892e-8 * d) + q / w0, z = n0 * $0(.82736186 + 1236.85308708 * n - 397e-8 * d) + G / w0, h = 1; h <= 4; ++h) {
			switch (h) {
				case 1:
					c = w, a = 4, u = 1.000002208;
					break;
				case 2:
					c = m, a = 3, u = .997504612 - .002495388 * n;
					break;
				case 3:
					c = x, a = 4, u = 1.000002708 + 139.978 * _;
					break;
				case 4:
					c = z, a = 6, u = 1;
					break;
				default: throw `Internal error: I = ${h}`;
			}
			for (l0(0, h, 1), l0(1, h, Math.cos(c) * u), h0(0, h, 0), h0(1, h, Math.sin(c) * u), l = 2; l <= a; ++l) st(A0(l - 1, h), D0(l - 1, h), A0(1, h), D0(1, h), (T, U) => (l0(l, h, T), h0(l, h, U)));
			for (l = 1; l <= a; ++l) l0(-l, h, A0(l, h)), h0(-l, h, -D0(l, h));
		}
		function Bn(T, U, V, H) {
			for (var Q = {
				x: 1,
				y: 0
			}, I0 = [
				0,
				T,
				U,
				V,
				H
			], E0 = 1; E0 <= 4; ++E0) I0[E0] !== 0 && st(Q.x, Q.y, A0(I0[E0], E0), D0(I0[E0], E0), (i2, o1) => (Q.x = i2, Q.y = o1));
			return Q;
		}
		function S(T, U, V, H, Q, I0, E0, i2) {
			var o1 = Bn(Q, I0, E0, i2);
			M += T * o1.y, Y += U * o1.y, y += V * o1.x, g += H * o1.x;
		}
		S(13.902, 14.06, -.001, .2607, 0, 0, 0, 4), S(.403, -4.01, .394, .0023, 0, 0, 0, 3), S(2369.912, 2373.36, .601, 28.2333, 0, 0, 0, 2), S(-125.154, -112.79, -.725, -.9781, 0, 0, 0, 1), S(1.979, 6.98, -.445, .0433, 1, 0, 0, 4), S(191.953, 192.72, .029, 3.0861, 1, 0, 0, 2), S(-8.466, -13.51, .455, -.1093, 1, 0, 0, 1), S(22639.5, 22609.07, .079, 186.5398, 1, 0, 0, 0), S(18.609, 3.59, -.094, .0118, 1, 0, 0, -1), S(-4586.465, -4578.13, -.077, 34.3117, 1, 0, 0, -2), S(3.215, 5.44, .192, -.0386, 1, 0, 0, -3), S(-38.428, -38.64, .001, .6008, 1, 0, 0, -4), S(-.393, -1.43, -.092, .0086, 1, 0, 0, -6), S(-.289, -1.59, .123, -.0053, 0, 1, 0, 4), S(-24.42, -25.1, .04, -.3, 0, 1, 0, 2), S(18.023, 17.93, .007, .1494, 0, 1, 0, 1), S(-668.146, -126.98, -1.302, -.3997, 0, 1, 0, 0), S(.56, .32, -.001, -.0037, 0, 1, 0, -1), S(-165.145, -165.06, .054, 1.9178, 0, 1, 0, -2), S(-1.877, -6.46, -.416, .0339, 0, 1, 0, -4), S(.213, 1.02, -.074, .0054, 2, 0, 0, 4), S(14.387, 14.78, -.017, .2833, 2, 0, 0, 2), S(-.586, -1.2, .054, -.01, 2, 0, 0, 1), S(769.016, 767.96, .107, 10.1657, 2, 0, 0, 0), S(1.75, 2.01, -.018, .0155, 2, 0, 0, -1), S(-211.656, -152.53, 5.679, -.3039, 2, 0, 0, -2), S(1.225, .91, -.03, -.0088, 2, 0, 0, -3), S(-30.773, -34.07, -.308, .3722, 2, 0, 0, -4), S(-.57, -1.4, -.074, .0109, 2, 0, 0, -6), S(-2.921, -11.75, .787, -.0484, 1, 1, 0, 2), S(1.267, 1.52, -.022, .0164, 1, 1, 0, 1), S(-109.673, -115.18, .461, -.949, 1, 1, 0, 0), S(-205.962, -182.36, 2.056, 1.4437, 1, 1, 0, -2), S(.233, .36, .012, -.0025, 1, 1, 0, -3), S(-4.391, -9.66, -.471, .0673, 1, 1, 0, -4), S(.283, 1.53, -.111, .006, 1, -1, 0, 4), S(14.577, 31.7, -1.54, .2302, 1, -1, 0, 2), S(147.687, 138.76, .679, 1.1528, 1, -1, 0, 0), S(-1.089, .55, .021, 0, 1, -1, 0, -1), S(28.475, 23.59, -.443, -.2257, 1, -1, 0, -2), S(-.276, -.38, -.006, -.0036, 1, -1, 0, -3), S(.636, 2.27, .146, -.0102, 1, -1, 0, -4), S(-.189, -1.68, .131, -.0028, 0, 2, 0, 2), S(-7.486, -.66, -.037, -.0086, 0, 2, 0, 0), S(-8.096, -16.35, -.74, .0918, 0, 2, 0, -2), S(-5.741, -.04, 0, -9e-4, 0, 0, 2, 2), S(.255, 0, 0, 0, 0, 0, 2, 1), S(-411.608, -.2, 0, -.0124, 0, 0, 2, 0), S(.584, .84, 0, .0071, 0, 0, 2, -1), S(-55.173, -52.14, 0, -.1052, 0, 0, 2, -2), S(.254, .25, 0, -.0017, 0, 0, 2, -3), S(.025, -1.67, 0, .0031, 0, 0, 2, -4), S(1.06, 2.96, -.166, .0243, 3, 0, 0, 2), S(36.124, 50.64, -1.3, .6215, 3, 0, 0, 0), S(-13.193, -16.4, .258, -.1187, 3, 0, 0, -2), S(-1.187, -.74, .042, .0074, 3, 0, 0, -4), S(-.293, -.31, -.002, .0046, 3, 0, 0, -6), S(-.29, -1.45, .116, -.0051, 2, 1, 0, 2), S(-7.649, -10.56, .259, -.1038, 2, 1, 0, 0), S(-8.627, -7.59, .078, -.0192, 2, 1, 0, -2), S(-2.74, -2.54, .022, .0324, 2, 1, 0, -4), S(1.181, 3.32, -.212, .0213, 2, -1, 0, 2), S(9.703, 11.67, -.151, .1268, 2, -1, 0, 0), S(-.352, -.37, .001, -.0028, 2, -1, 0, -1), S(-2.494, -1.17, -.003, -.0017, 2, -1, 0, -2), S(.36, .2, -.012, -.0043, 2, -1, 0, -4), S(-1.167, -1.25, .008, -.0106, 1, 2, 0, 0), S(-7.412, -6.12, .117, .0484, 1, 2, 0, -2), S(-.311, -.65, -.032, .0044, 1, 2, 0, -4), S(.757, 1.82, -.105, .0112, 1, -2, 0, 2), S(2.58, 2.32, .027, .0196, 1, -2, 0, 0), S(2.533, 2.4, -.014, -.0212, 1, -2, 0, -2), S(-.344, -.57, -.025, .0036, 0, 3, 0, -2), S(-.992, -.02, 0, 0, 1, 0, 2, 2), S(-45.099, -.02, 0, -.001, 1, 0, 2, 0), S(-.179, -9.52, 0, -.0833, 1, 0, 2, -2), S(-.301, -.33, 0, .0014, 1, 0, 2, -4), S(-6.382, -3.37, 0, -.0481, 1, 0, -2, 2), S(39.528, 85.13, 0, -.7136, 1, 0, -2, 0), S(9.366, .71, 0, -.0112, 1, 0, -2, -2), S(.202, .02, 0, 0, 1, 0, -2, -4), S(.415, .1, 0, .0013, 0, 1, 2, 0), S(-2.152, -2.26, 0, -.0066, 0, 1, 2, -2), S(-1.44, -1.3, 0, .0014, 0, 1, -2, 2), S(.384, -.04, 0, 0, 0, 1, -2, -2), S(1.938, 3.6, -.145, .0401, 4, 0, 0, 0), S(-.952, -1.58, .052, -.013, 4, 0, 0, -2), S(-.551, -.94, .032, -.0097, 3, 1, 0, 0), S(-.482, -.57, .005, -.0045, 3, 1, 0, -2), S(.681, .96, -.026, .0115, 3, -1, 0, 0), S(-.297, -.27, .002, -9e-4, 2, 2, 0, -2), S(.254, .21, -.003, 0, 2, -2, 0, -2), S(-.25, -.22, .004, .0014, 1, 3, 0, -2), S(-3.996, 0, 0, 4e-4, 2, 0, 2, 0), S(.557, -.75, 0, -.009, 2, 0, 2, -2), S(-.459, -.38, 0, -.0053, 2, 0, -2, 2), S(-1.298, .74, 0, 4e-4, 2, 0, -2, 0), S(.538, 1.14, 0, -.0141, 2, 0, -2, -2), S(.263, .02, 0, 0, 1, 1, 2, 0), S(.426, .07, 0, -6e-4, 1, 1, -2, -2), S(-.304, .03, 0, 3e-4, 1, -1, 2, 0), S(-.372, -.19, 0, -.0027, 1, -1, -2, 2), S(.418, 0, 0, 0, 0, 0, 4, 0), S(-.33, -.04, 0, 0, 3, 0, 2, 0);
		function d0(T, U, V, H, Q) {
			return T * Bn(U, V, H, Q).y;
		}
		A = 0, A += d0(-526.069, 0, 0, 1, -2), A += d0(-3.352, 0, 0, 1, -4), A += d0(44.297, 1, 0, 1, -2), A += d0(-6, 1, 0, 1, -4), A += d0(20.599, -1, 0, 1, 0), A += d0(-30.598, -1, 0, 1, -2), A += d0(-24.649, -2, 0, 1, 0), A += d0(-2, -2, 0, 1, -2), A += d0(-22.571, 0, 1, 1, -2), A += d0(10.985, 0, -1, 1, -2), M += .82 * L(.7736 - 62.5512 * n) + .31 * L(.0466 - 125.1025 * n) + .35 * L(.5785 - 25.1042 * n) + .66 * L(.4591 + 1335.8075 * n) + .64 * L(.313 - 91.568 * n) + 1.14 * L(.148 + 1331.2898 * n) + .21 * L(.5918 + 1056.5859 * n) + .44 * L(.5784 + 1322.8595 * n) + .24 * L(.2275 - 5.7374 * n) + .28 * L(.2965 + 2.6929 * n) + .33 * L(.3132 + 6.3368 * n), i = x + Y / w0;
		let _4 = (1.000002708 + 139.978 * _) * (18519.699999999997 + y) * Math.sin(i) - 6.24 * Math.sin(3 * i) + A;
		return {
			geo_eclip_lon: n0 * $0((R + M / w0) / n0),
			geo_eclip_lat: Math.PI / (180 * 3600) * _4,
			distance_au: w0 * ze / (.999953253 * g)
		};
	}
	var C2 = class {
		constructor(t, n, e, r, o, s) {
			this.elat = t, this.elon = n, this.mlat = e, this.mlon = r, this.dist_km = o, this.diam_deg = s;
		}
	};
	function qe(t) {
		const n = E(t), e = n.tt / 36525, r = e * e, o = r * e, s = r * r, i = x0(n), a = i.geo_eclip_lon, c = i.geo_eclip_lat, u = i.distance_au * C, h = p * 1.543, l = p * t1(93.272095 + 483202.0175233 * e - .0036539 * r - o / 3526e3 + s / 86331e4), d = p * t1(125.0445479 - 1934.1362891 * e + .0020754 * r + o / 467441 - s / 60616e3), _ = p * t1(357.5291092 + 35999.0502909 * e - 1536e-7 * r + o / 2449e4), M = p * t1(134.9633964 + 477198.8675055 * e + .0087414 * r + o / 69699 - s / 14712e3), A = p * t1(297.8501921 + 445267.1114034 * e - .0018819 * r + o / 545868 - s / 113065e3), y = 1 - .002516 * e - 74e-7 * r, g = a - d, R = Math.atan2(Math.sin(g) * Math.cos(c) * Math.cos(h) - Math.sin(c) * Math.sin(h), Math.cos(g) * Math.cos(c)), w = Z0(b * (R - l)), m = Math.asin(-Math.sin(g) * Math.cos(c) * Math.sin(h) - Math.sin(c) * Math.cos(h)), x = p * (119.75 + 131.849 * e), z = p * (72.56 + 20.186 * e), I = -.02752 * Math.cos(M) + -.02245 * Math.sin(l) + .00684 * Math.cos(M - 2 * l) + -.00293 * Math.cos(2 * l) + -85e-5 * Math.cos(2 * l - 2 * A) + -54e-5 * Math.cos(M - 2 * A) + -2e-4 * Math.sin(M + l) + -2e-4 * Math.cos(M + 2 * l) + -2e-4 * Math.cos(M - l) + 14e-5 * Math.cos(M + 2 * l - 2 * A), k = -.02816 * Math.sin(M) + .02244 * Math.cos(l) + -.00682 * Math.sin(M - 2 * l) + -.00279 * Math.sin(2 * l) + -83e-5 * Math.sin(2 * l - 2 * A) + 69e-5 * Math.sin(M - 2 * A) + 4e-4 * Math.cos(M + l) + -25e-5 * Math.sin(2 * M) + -23e-5 * Math.sin(M + 2 * l) + 2e-4 * Math.cos(M - l) + 19e-5 * Math.sin(M - l) + 13e-5 * Math.sin(M + 2 * l - 2 * A) + -1e-4 * Math.cos(M - 3 * l), N = -(.0252 * y * Math.sin(_) + .00473 * Math.sin(2 * M - 2 * l) + -.00467 * Math.sin(M) + .00396 * Math.sin(x) + .00276 * Math.sin(2 * M - 2 * A) + .00196 * Math.sin(d) + -.00183 * Math.cos(M - l) + .00115 * Math.sin(M - 2 * A) + -96e-5 * Math.sin(M - A) + 46e-5 * Math.sin(2 * l - 2 * A) + -39e-5 * Math.sin(M - l) + -32e-5 * Math.sin(M - _ - A) + 27e-5 * Math.sin(2 * M - _ - 2 * A) + 23e-5 * Math.sin(z) + -14e-5 * Math.sin(2 * A) + 14e-5 * Math.cos(2 * M - 2 * l) + -12e-5 * Math.sin(M - 2 * l) + -12e-5 * Math.sin(2 * M) + 11e-5 * Math.sin(2 * M - 2 * _ - 2 * A)) + (I * Math.cos(R) + k * Math.sin(R)) * Math.tan(m), q = k * Math.cos(R) - I * Math.sin(R), G = 2 * b * Math.atan(j / Math.sqrt(u * u - j * j));
		return new C2(b * m + q, w + N, b * c, b * a, u, G);
	}
	function U2(t, n) {
		return [
			t.rot[0][0] * n[0] + t.rot[1][0] * n[1] + t.rot[2][0] * n[2],
			t.rot[0][1] * n[0] + t.rot[1][1] * n[1] + t.rot[2][1] * n[2],
			t.rot[0][2] * n[0] + t.rot[1][2] * n[1] + t.rot[2][2] * n[2]
		];
	}
	function G0(t, n, e) {
		return U2(k1(n, e), t);
	}
	function O2(t, n, e) {
		return W1(k1(n, e), t);
	}
	function k1(t, n) {
		const e = t.tt / 36525;
		let r = 84381.406, o = ((((-9.51e-8 * e + 132851e-9) * e - .00114045) * e - 1.0790069) * e + 5038.481507) * e, s = ((((3.337e-7 * e - 467e-9) * e - .00772503) * e + .0512623) * e - .025754) * e + r, i = ((((-56e-9 * e + 170663e-9) * e - .00121197) * e - 2.3814292) * e + 10.556403) * e;
		r *= k0, o *= k0, s *= k0, i *= k0;
		const a = Math.sin(r), c = Math.cos(r), u = Math.sin(-o), h = Math.cos(-o), l = Math.sin(-s), d = Math.cos(-s), _ = Math.sin(i), M = Math.cos(i), A = M * h - u * _ * d, y = M * u * c + _ * d * h * c - a * _ * l, g = M * u * a + _ * d * h * a + c * _ * l, R = -_ * h - u * M * d, w = -_ * u * c + M * d * h * c - a * M * l, m = -_ * u * a + M * d * h * a + c * M * l, x = u * l, z = -l * h * c - a * d, I = -l * h * a + d * c;
		if (n === O.Into2000) return new J([
			[
				A,
				y,
				g
			],
			[
				R,
				w,
				m
			],
			[
				x,
				z,
				I
			]
		]);
		if (n === O.From2000) return new J([
			[
				A,
				R,
				x
			],
			[
				y,
				w,
				z
			],
			[
				g,
				m,
				I
			]
		]);
		throw "Invalid precess direction";
	}
	function Be(t) {
		let n = 360 * ((.779057273264 + .00273781191135448 * t.ut + t.ut % 1) % 1);
		return n < 0 && (n += 360), n;
	}
	let b1;
	function S0(t) {
		if (!b1 || b1.tt !== t.tt) {
			const n = t.tt / 36525;
			let e = 15 * R0(t).ee;
			const r = Be(t);
			let o = ((e + .014506 + ((((-3.68e-8 * n - 29956e-9) * n - 44e-8) * n + 1.3915817) * n + 4612.156534) * n) / 3600 + r) % 360 / 15;
			o < 0 && (o += 24), b1 = {
				tt: t.tt,
				st: o
			};
		}
		return b1.st;
	}
	function k2(t) {
		return S0(E(t));
	}
	function Ke(t, n) {
		const e = t[0] * C, r = t[1] * C, o = t[2] * C, s = Math.hypot(e, r);
		let i, a, c;
		if (s < 1e-6) i = 0, a = o > 0 ? 90 : -90, c = Math.abs(o) - Te;
		else {
			for (i = b * Math.atan2(r, e) - 15 * n; i <= -180;) i += 360;
			for (; i > 180;) i -= 360;
			let u = Math.atan2(o, s), h, l, d, _ = 0;
			for (;;) {
				if (++_ > 10) throw "inverse_terra failed to converge.";
				h = Math.cos(u), l = Math.sin(u);
				const A = (b0 - 1) * M0, y = h * h, g = l * l, R = y + b0 * g;
				d = Math.sqrt(R);
				const w = A * l * h / d - o * h + s * l;
				if (Math.abs(w) < 1e-8) break;
				const m = A * ((y - g) / d - g * y * (b0 - 1) / (A * R)) + o * l + s * h;
				u -= w / m;
			}
			a = b * u;
			const M = M0 / d;
			Math.abs(l) > Math.abs(h) ? c = o / l - b0 * M : c = s / h - M;
		}
		return new vt(a, i, 1e3 * c);
	}
	function xt(t, n) {
		const e = t.latitude * p, r = Math.sin(e), o = Math.cos(e), s = 1 / Math.hypot(o, s0 * r), i = b0 * s, a = t.height / 1e3, c = M0 * s + a, u = M0 * i + a, h = (15 * n + t.longitude) * p, l = Math.sin(h), d = Math.cos(h);
		return {
			pos: [
				c * o * d / C,
				c * o * l / C,
				u * r / C
			],
			vel: [
				-R2 * c * o * l * 86400 / C,
				R2 * c * o * d * 86400 / C,
				0
			]
		};
	}
	function Q0(t, n, e) {
		return U2(V1(n, e), t);
	}
	function b2(t, n, e) {
		return W1(V1(n, e), t);
	}
	function V1(t, n) {
		const e = R0(t), r = e.mobl * p, o = e.tobl * p, s = e.dpsi * k0, i = Math.cos(r), a = Math.sin(r), c = Math.cos(o), u = Math.sin(o), h = Math.cos(s), l = Math.sin(s), d = h, _ = -l * i, M = -l * a, A = l * c, y = h * i * c + a * u, g = h * a * c - i * u, R = l * u, w = h * i * u - a * c, m = h * a * u + i * c;
		if (n === O.From2000) return new J([
			[
				d,
				A,
				R
			],
			[
				_,
				y,
				w
			],
			[
				M,
				g,
				m
			]
		]);
		if (n === O.Into2000) return new J([
			[
				d,
				_,
				M
			],
			[
				A,
				y,
				g
			],
			[
				R,
				w,
				m
			]
		]);
		throw "Invalid precess direction";
	}
	function F1(t, n, e) {
		return e === O.Into2000 ? G0(Q0(t, n, e), n, e) : Q0(G0(t, n, e), n, e);
	}
	function Ye(t, n, e) {
		return e === O.Into2000 ? O2(b2(t, n, e), n, e) : b2(O2(t, n, e), n, e);
	}
	function V2(t, n) {
		const e = xt(n, S0(t)).pos;
		return F1(e, t, O.Into2000);
	}
	var P = class {
		constructor(t, n, e, r) {
			this.x = t, this.y = n, this.z = e, this.t = r;
		}
		Length() {
			return Math.hypot(this.x, this.y, this.z);
		}
	}, F = class {
		constructor(t, n, e, r, o, s, i) {
			this.x = t, this.y = n, this.z = e, this.vx = r, this.vy = o, this.vz = s, this.t = i;
		}
	}, q0 = class {
		constructor(t, n, e) {
			this.lat = v(t), this.lon = v(n), this.dist = v(e);
		}
	}, H1 = class {
		constructor(t, n, e, r) {
			this.ra = v(t), this.dec = v(n), this.dist = v(e), this.vec = r;
		}
	};
	function je(t) {
		if (!(t instanceof Array) || t.length !== 3) return !1;
		for (let n = 0; n < 3; ++n) {
			if (!(t[n] instanceof Array) || t[n].length !== 3) return !1;
			for (let e = 0; e < 3; ++e) if (!Number.isFinite(t[n][e])) return !1;
		}
		return !0;
	}
	var J = class {
		constructor(t) {
			this.rot = t;
		}
	};
	function We(t) {
		if (!je(t)) throw "Argument must be a [3][3] array of numbers";
		return new J(t);
	}
	var F2 = class {
		constructor(t, n, e, r) {
			this.azimuth = v(t), this.altitude = v(n), this.ra = v(e), this.dec = v(r);
		}
	}, H2 = class {
		constructor(t, n, e) {
			this.vec = t, this.elat = v(n), this.elon = v(e);
		}
	};
	function mt(t, n) {
		return new P(t[0], t[1], t[2], n);
	}
	function J2(t, n) {
		const e = mt(t, n), r = e.x * e.x + e.y * e.y, o = Math.sqrt(r + e.z * e.z);
		if (r === 0) {
			if (e.z === 0) throw "Indeterminate sky coordinates";
			return new H1(0, e.z < 0 ? -90 : 90, o, e);
		}
		let s = _t * Math.atan2(e.y, e.x);
		s < 0 && (s += 24);
		const i = b * Math.atan2(t[2], Math.sqrt(r));
		return new H1(s, i, o, e);
	}
	function B0(t, n) {
		const e = t * p, r = Math.cos(e), o = Math.sin(e);
		return [
			r * n[0] + o * n[1],
			r * n[1] - o * n[0],
			n[2]
		];
	}
	function J1(t, n, e, r, o) {
		let s = E(t);
		K0(n), v(e), v(r);
		const i = Math.sin(n.latitude * p), a = Math.cos(n.latitude * p), c = Math.sin(n.longitude * p), u = Math.cos(n.longitude * p), h = Math.sin(r * p), l = Math.cos(r * p), d = Math.sin(e * pt), _ = Math.cos(e * pt);
		let M = [
			a * u,
			a * c,
			i
		], A = [
			-i * u,
			-i * c,
			a
		], y = [
			c,
			-u,
			0
		];
		const g = -15 * S0(s);
		let R = B0(g, M), w = B0(g, A), m = B0(g, y), x = [
			l * _,
			l * d,
			h
		];
		const z = x[0] * R[0] + x[1] * R[1] + x[2] * R[2], I = x[0] * w[0] + x[1] * w[1] + x[2] * w[2], k = x[0] * m[0] + x[1] * m[1] + x[2] * m[2];
		let N = Math.hypot(I, k), q;
		N > 0 ? (q = -b * Math.atan2(k, I), q < 0 && (q += 360)) : q = 0;
		let G = b * Math.atan2(N, z), Y = e, u0 = r;
		if (o) {
			let o0 = G, A0 = E1(o, 90 - G);
			if (G -= A0, A0 > 0 && G > 3e-4) {
				const D0 = Math.sin(G * p), l0 = Math.cos(G * p), h0 = Math.sin(o0 * p), st = Math.cos(o0 * p), L = [];
				for (let f0 = 0; f0 < 3; ++f0) L.push((x[f0] - st * R[f0]) / h0 * D0 + R[f0] * l0);
				N = Math.hypot(L[0], L[1]), N > 0 ? (Y = _t * Math.atan2(L[1], L[0]), Y < 0 && (Y += 24)) : Y = 0, u0 = b * Math.atan2(L[2], N);
			}
		}
		return new F2(q, 90 - G, Y, u0);
	}
	function K0(t) {
		if (!(t instanceof vt)) throw `Not an instance of the Observer class: ${t}`;
		if (v(t.latitude), v(t.longitude), v(t.height), t.latitude < -90 || t.latitude > 90) throw `Latitude ${t.latitude} is out of range. Must be -90..+90.`;
		return t;
	}
	var vt = class {
		constructor(t, n, e) {
			this.latitude = t, this.longitude = n, this.height = e, K0(this);
		}
	};
	function $2(t) {
		const n = E(t).AddDays(-1 / P1), e = j0(B.Earth, n), [r, o, s] = F1([
			-e.x,
			-e.y,
			-e.z
		], n, O.From2000), i = p * R0(n).tobl, a = Math.cos(i), c = Math.sin(i);
		return Dt(new P(r, o, s, n), a, c);
	}
	function l1(t, n, e, r, o) {
		K0(e), L1(r), L1(o);
		const s = E(n), i = V2(s, e), a = e0(t, s, o), c = [
			a.x - i[0],
			a.y - i[1],
			a.z - i[2]
		];
		return J2(r ? F1(c, s, O.From2000) : c, s);
	}
	function Xe(t, n, e) {
		const r = E(t);
		let o = xt(n, S0(r)).pos;
		return e || (o = F1(o, r, O.Into2000)), mt(o, r);
	}
	function Ze(t, n, e) {
		const r = E(t), o = xt(n, S0(r)), s = new F(o.pos[0], o.pos[1], o.pos[2], o.vel[0], o.vel[1], o.vel[2], r);
		return e ? s : Ye(s, r, O.Into2000);
	}
	function t3(t, n) {
		const e = S0(t.t);
		let r = [
			t.x,
			t.y,
			t.z
		];
		return n || (r = G0(r, t.t, O.From2000), r = Q0(r, t.t, O.From2000)), Ke(r, e);
	}
	function n3(t, n) {
		const e = Math.sin(t * p), r = e * e;
		return 9.7803253359 * (1 + .00193185265241 * r) / Math.sqrt(1 - .00669437999013 * r) * (1 - (3.15704e-7 - 2.10269e-9 * r) * n + 737452e-19 * n * n);
	}
	function Dt(t, n, e) {
		const r = t.x, o = t.y * n + t.z * e, s = -t.y * e + t.z * n, i = Math.hypot(r, o);
		let a = 0;
		i > 0 && (a = b * Math.atan2(o, r), a < 0 && (a += 360));
		let c = b * Math.atan2(s, i);
		return new H2(new P(r, o, s, t.t), c, a);
	}
	function h1(t) {
		const n = R0(t.t), [e, r, o] = Q0(G0([
			t.x,
			t.y,
			t.z
		], t.t, O.From2000), t.t, O.From2000), s = new P(e, r, o, t.t), i = n.tobl * p;
		return Dt(s, Math.cos(i), Math.sin(i));
	}
	function a0(t) {
		const n = E(t), e = x0(n), r = e.distance_au * Math.cos(e.geo_eclip_lat), o = G0(Qe(n, [
			r * Math.cos(e.geo_eclip_lon),
			r * Math.sin(e.geo_eclip_lon),
			e.distance_au * Math.sin(e.geo_eclip_lat)
		]), n, O.Into2000);
		return new P(o[0], o[1], o[2], n);
	}
	function $1(t) {
		const n = E(t), e = x0(n), r = e.distance_au * Math.cos(e.geo_eclip_lat), o = [
			r * Math.cos(e.geo_eclip_lon),
			r * Math.sin(e.geo_eclip_lon),
			e.distance_au * Math.sin(e.geo_eclip_lat)
		], s = R0(n), i = mt(Q0(N2(s.mobl, o), n, O.From2000), n), a = s.tobl * p, c = Dt(i, Math.cos(a), Math.sin(a));
		return new q0(c.elat, c.elon, e.distance_au);
	}
	function f1(t) {
		const n = E(t), e = 1e-5, r = n.AddDays(-e), o = n.AddDays(+e), s = a0(r), i = a0(o);
		return new F((s.x + i.x) / 2, (s.y + i.y) / 2, (s.z + i.z) / 2, (i.x - s.x) / (2 * e), (i.y - s.y) / (2 * e), (i.z - s.z) / (2 * e), n);
	}
	function It(t) {
		const n = E(t), e = f1(n), r = 1 + At;
		return new F(e.x / r, e.y / r, e.z / r, e.vx / r, e.vy / r, e.vz / r, n);
	}
	function z0(t, n, e) {
		let r = 1, o = 0;
		for (let s of t) {
			let i = 0;
			for (let [c, u, h] of s) i += c * Math.cos(u + n * h);
			let a = r * i;
			e && (a %= n0), o += a, r *= n;
		}
		return o;
	}
	function Pt(t, n) {
		let e = 1, r = 0, o = 0, s = 0;
		for (let i of t) {
			let a = 0, c = 0;
			for (let [u, h, l] of i) {
				let d = h + n * l;
				a += u * l * Math.sin(d), s > 0 && (c += u * Math.cos(d));
			}
			o += s * r * c - e * a, r = e, e *= n, ++s;
		}
		return o;
	}
	const Y0 = 365250, zt = 0, Tt = 1, G1 = 2;
	function Nt(t) {
		return new K(t[0] + 4.4036e-7 * t[1] - 1.90919e-7 * t[2], -4.79966e-7 * t[0] + .917482137087 * t[1] - .397776982902 * t[2], .397776982902 * t[1] + .917482137087 * t[2]);
	}
	function G2(t, n, e) {
		const r = e * Math.cos(n), o = Math.cos(t), s = Math.sin(t);
		return [
			r * o,
			r * s,
			e * Math.sin(n)
		];
	}
	function j0(t, n) {
		const e = n.tt / Y0;
		return Nt(G2(z0(t[zt], e, !0), z0(t[Tt], e, !1), z0(t[G1], e, !1))).ToAstroVector(n);
	}
	function d1(t, n) {
		const e = n / Y0, r = z0(t[zt], e, !0), o = z0(t[Tt], e, !1), s = z0(t[G1], e, !1), i = Pt(t[zt], e), a = Pt(t[Tt], e), c = Pt(t[G1], e), u = Math.cos(r), h = Math.sin(r), l = Math.cos(o), d = Math.sin(o), _ = +(c * l * u) - s * d * u * a - s * l * h * i, M = +(c * l * h) - s * d * h * a + s * l * u * i, A = +(c * d) + s * l * a, y = G2(r, o, s), g = [
			_ / Y0,
			M / Y0,
			A / Y0
		];
		return new N0(n, Nt(y), Nt(g));
	}
	function Q1(t, n, e, r) {
		const o = r / (r + c1), s = j0(B[e], n);
		t.x += o * s.x, t.y += o * s.y, t.z += o * s.z;
	}
	function e3(t) {
		const n = new P(0, 0, 0, t);
		return Q1(n, t, f.Jupiter, V0), Q1(n, t, f.Saturn, F0), Q1(n, t, f.Uranus, H0), Q1(n, t, f.Neptune, J0), n;
	}
	const Lt = 51, r3 = 29200, W0 = 146, p0 = 201, T0 = [
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
	var K = class y0 {
		constructor(n, e, r) {
			this.x = n, this.y = e, this.z = r;
		}
		clone() {
			return new y0(this.x, this.y, this.z);
		}
		ToAstroVector(n) {
			return new P(this.x, this.y, this.z, n);
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
	}, N0 = class a2 {
		constructor(n, e, r) {
			this.tt = n, this.r = e, this.v = r;
		}
		clone() {
			return new a2(this.tt, this.r, this.v);
		}
		sub(n) {
			return new a2(this.tt, this.r.sub(n.r), this.v.sub(n.v));
		}
	};
	function o3(t) {
		let [n, [e, r, o], [s, i, a]] = t;
		return new N0(n, new K(e, r, o), new K(s, i, a));
	}
	function W(t, n, e, r) {
		const o = r / (r + c1), s = d1(B[e], n);
		return t.r.incr(s.r.mul(o)), t.v.incr(s.v.mul(o)), s;
	}
	function M1(t, n, e) {
		const r = e.sub(t), o = r.quadrature();
		return r.mul(n / (o * Math.sqrt(o)));
	}
	var S1 = class {
		constructor(t) {
			let n = new N0(t, new K(0, 0, 0), new K(0, 0, 0));
			this.Jupiter = W(n, t, f.Jupiter, V0), this.Saturn = W(n, t, f.Saturn, F0), this.Uranus = W(n, t, f.Uranus, H0), this.Neptune = W(n, t, f.Neptune, J0), this.Jupiter.r.decr(n.r), this.Jupiter.v.decr(n.v), this.Saturn.r.decr(n.r), this.Saturn.v.decr(n.v), this.Uranus.r.decr(n.r), this.Uranus.v.decr(n.v), this.Neptune.r.decr(n.r), this.Neptune.v.decr(n.v), this.Sun = new N0(t, n.r.mul(-1), n.v.mul(-1));
		}
		Acceleration(t) {
			let n = M1(t, c1, this.Sun.r);
			return n.incr(M1(t, V0, this.Jupiter.r)), n.incr(M1(t, F0, this.Saturn.r)), n.incr(M1(t, H0, this.Uranus.r)), n.incr(M1(t, J0, this.Neptune.r)), n;
		}
	}, Ct = class Kn {
		constructor(n, e, r, o) {
			this.tt = n, this.r = e, this.v = r, this.a = o;
		}
		clone() {
			return new Kn(this.tt, this.r.clone(), this.v.clone(), this.a.clone());
		}
	}, Q2 = class {
		constructor(t, n) {
			this.bary = t, this.grav = n;
		}
	};
	function X0(t, n, e, r) {
		return new K(n.x + t * (e.x + t * r.x / 2), n.y + t * (e.y + t * r.y / 2), n.z + t * (e.z + t * r.z / 2));
	}
	function Ut(t, n, e) {
		return new K(n.x + t * e.x, n.y + t * e.y, n.z + t * e.z);
	}
	function Ot(t, n) {
		const e = t - n.tt, r = new S1(t), o = X0(e, n.r, n.v, n.a), s = r.Acceleration(o).mean(n.a), i = X0(e, n.r, n.v, s);
		return new Q2(r, new Ct(t, i, n.v.add(s.mul(e)), r.Acceleration(i)));
	}
	const s3 = [];
	function q2(t, n) {
		const e = Math.floor(t);
		return e < 0 ? 0 : e >= n ? n - 1 : e;
	}
	function kt(t) {
		const n = o3(t), e = new S1(n.tt), r = n.r.add(e.Sun.r), o = n.v.add(e.Sun.v), s = e.Acceleration(r);
		return new Q2(e, new Ct(n.tt, r, o, s));
	}
	function i3(t, n) {
		const e = T0[0][0];
		if (n < e || n > T0[Lt - 1][0]) return null;
		const r = q2((n - e) / r3, Lt - 1);
		if (!t[r]) {
			const s = t[r] = [];
			s[0] = kt(T0[r]).grav, s[p0 - 1] = kt(T0[r + 1]).grav;
			let i, a = s[0].tt;
			for (i = 1; i < p0 - 1; ++i) s[i] = Ot(a += W0, s[i - 1]).grav;
			a = s[p0 - 1].tt;
			var o = [];
			for (o[p0 - 1] = s[p0 - 1], i = p0 - 2; i > 0; --i) o[i] = Ot(a -= W0, o[i + 1]).grav;
			for (i = p0 - 2; i > 0; --i) {
				const c = i / (p0 - 1);
				s[i].r = s[i].r.mul(1 - c).add(o[i].r.mul(c)), s[i].v = s[i].v.mul(1 - c).add(o[i].v.mul(c)), s[i].a = s[i].a.mul(1 - c).add(o[i].a.mul(c));
			}
		}
		return t[r];
	}
	function B2(t, n, e) {
		let r = kt(t);
		const o = Math.ceil((n - r.grav.tt) / e);
		for (let s = 0; s < o; ++s) r = Ot(s + 1 === o ? n : r.grav.tt + e, r.grav);
		return r;
	}
	function bt(t, n) {
		let e, r, o;
		const s = i3(s3, t.tt);
		if (s) {
			const i = q2((t.tt - s[0].tt) / W0, p0 - 1), a = s[i], c = s[i + 1], u = a.a.mean(c.a), h = X0(t.tt - a.tt, a.r, a.v, u), l = Ut(t.tt - a.tt, a.v, u), d = X0(t.tt - c.tt, c.r, c.v, u), _ = Ut(t.tt - c.tt, c.v, u), M = (t.tt - a.tt) / W0;
			e = h.mul(1 - M).add(d.mul(M)), r = l.mul(1 - M).add(_.mul(M));
		} else {
			let i;
			t.tt < T0[0][0] ? i = B2(T0[0], t.tt, -W0) : i = B2(T0[Lt - 1], t.tt, +W0), e = i.grav.r, r = i.grav.v, o = i.bary;
		}
		return n && (o || (o = new S1(t.tt)), e = e.sub(o.Sun.r), r = r.sub(o.Sun.v)), new F(e.x, e.y, e.z, r.x, r.y, r.z, t);
	}
	const a3 = new J([
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
	]), q1 = [
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
	var K2 = class {
		constructor(t, n, e, r) {
			this.io = t, this.europa = n, this.ganymede = e, this.callisto = r;
		}
	};
	function c3(t, n, e) {
		const r = e[0], o = e[1], s = e[2], i = e[3], a = e[4], c = e[5], u = Math.sqrt(n / (r * r * r));
		let h, l, d, _ = o + s * Math.sin(o) - i * Math.cos(o);
		do
			h = Math.cos(_), l = Math.sin(_), d = (o - _ + s * l - i * h) / (1 - s * h - i * l), _ += d;
		while (Math.abs(d) >= 1e-12);
		h = Math.cos(_), l = Math.sin(_);
		const M = i * h - s * l, A = -s * h - i * l, y = 1 / (1 + A), g = 1 / (1 + Math.sqrt(1 - s * s - i * i)), R = r * (h - s - g * i * M), w = r * (l - i + g * s * M), m = u * y * r * (-l - g * i * A), x = u * y * r * (+h + g * s * A), z = 2 * Math.sqrt(1 - a * a - c * c), I = 1 - 2 * c * c, k = 1 - 2 * a * a, N = 2 * c * a;
		return new F(R * I + w * N, R * N + w * k, (a * w - R * c) * z, m * I + x * N, m * N + x * k, (a * x - m * c) * z, t);
	}
	function B1(t, n) {
		const e = t.tt + 18262.5, r = [
			0,
			n.al[0] + e * n.al[1],
			0,
			0,
			0,
			0
		];
		for (let [o, s, i] of n.a) r[0] += o * Math.cos(s + e * i);
		for (let [o, s, i] of n.l) r[1] += o * Math.sin(s + e * i);
		r[1] %= n0, r[1] < 0 && (r[1] += n0);
		for (let [o, s, i] of n.z) {
			const a = s + e * i;
			r[2] += o * Math.cos(a), r[3] += o * Math.sin(a);
		}
		for (let [o, s, i] of n.zeta) {
			const a = s + e * i;
			r[4] += o * Math.cos(a), r[5] += o * Math.sin(a);
		}
		return W1(a3, c3(t, n.mu, r));
	}
	function u3(t) {
		const n = new g0(t);
		return new K2(B1(n, q1[0]), B1(n, q1[1]), B1(n, q1[2]), B1(n, q1[3]));
	}
	function c0(t, n) {
		var e = E(n);
		if (t in B) return j0(B[t], e);
		if (t === f.Pluto) {
			const i = bt(e, !0);
			return new P(i.x, i.y, i.z, e);
		}
		if (t === f.Sun) return new P(0, 0, 0, e);
		if (t === f.Moon) {
			var r = j0(B.Earth, e), o = a0(e);
			return new P(r.x + o.x, r.y + o.y, r.z + o.z, e);
		}
		if (t === f.EMB) {
			const i = j0(B.Earth, e), a = a0(e), c = 1 + At;
			return new P(i.x + a.x / c, i.y + a.y / c, i.z + a.z / c, e);
		}
		if (t === f.SSB) return e3(e);
		const s = U1(t);
		if (s) return j1(new q0(s.dec, 15 * s.ra, s.dist), e);
		throw `HelioVector: Unknown body "${t}"`;
	}
	function L0(t, n) {
		const e = U1(t);
		if (e) return e.dist;
		const r = E(n);
		return t in B ? z0(B[t][G1], r.tt / Y0, !1) : c0(t, r).Length();
	}
	function Y2(t, n) {
		let e = n, r = 0;
		for (let o = 0; o < 10; ++o) {
			const s = t(e), i = s.Length() / P1;
			if (i > 1) throw "Object is too distant for light-travel solver.";
			const a = n.AddDays(-i);
			if (r = Math.abs(a.tt - e.tt), r < 1e-9) return s;
			e = a;
		}
		throw `Light-travel time solver did not converge: dt = ${r}`;
	}
	var l3 = class {
		constructor(t, n, e, r) {
			this.observerBody = t, this.targetBody = n, this.aberration = e, this.observerPos = r;
		}
		Position(t) {
			this.aberration && (this.observerPos = c0(this.observerBody, t));
			const n = c0(this.targetBody, t);
			return new P(n.x - this.observerPos.x, n.y - this.observerPos.y, n.z - this.observerPos.z, t);
		}
	};
	function j2(t, n, e, r) {
		L1(r);
		const o = E(t);
		if (U1(e)) {
			const a = c0(e, o);
			if (r) {
				const u = K1(n, o), h = new P(a.x - u.x, a.y - u.y, a.z - u.z, o), l = P1 / h.Length();
				return new P(h.x + u.vx / l, h.y + u.vy / l, h.z + u.vz / l, o);
			}
			const c = c0(n, o);
			return new P(a.x - c.x, a.y - c.y, a.z - c.z, o);
		}
		let s;
		r ? s = new P(0, 0, 0, o) : s = c0(n, o);
		const i = new l3(n, e, r, s);
		return Y2((a) => i.Position(a), o);
	}
	function e0(t, n, e) {
		L1(e);
		const r = E(n);
		switch (t) {
			case f.Earth: return new P(0, 0, 0, r);
			case f.Moon: return a0(r);
			default:
				const o = j2(r, f.Earth, t, e);
				return o.t = r, o;
		}
	}
	function C0(t, n) {
		return new F(t.r.x, t.r.y, t.r.z, t.v.x, t.v.y, t.v.z, n);
	}
	function h3(t, n) {
		const e = E(n);
		if (t === f.SSB) return new F(0, 0, 0, 0, 0, 0, e);
		if (t === f.Pluto) return bt(e, !1);
		const r = new S1(e.tt);
		switch (t) {
			case f.Sun: return C0(r.Sun, e);
			case f.Jupiter: return C0(r.Jupiter, e);
			case f.Saturn: return C0(r.Saturn, e);
			case f.Uranus: return C0(r.Uranus, e);
			case f.Neptune: return C0(r.Neptune, e);
			case f.Moon:
			case f.EMB:
				const o = d1(B[f.Earth], e.tt), s = t === f.Moon ? f1(e) : It(e);
				return new F(s.x + r.Sun.r.x + o.r.x, s.y + r.Sun.r.y + o.r.y, s.z + r.Sun.r.z + o.r.z, s.vx + r.Sun.v.x + o.v.x, s.vy + r.Sun.v.y + o.v.y, s.vz + r.Sun.v.z + o.v.z, e);
		}
		if (t in B) {
			const o = d1(B[t], e.tt);
			return new F(r.Sun.r.x + o.r.x, r.Sun.r.y + o.r.y, r.Sun.r.z + o.r.z, r.Sun.v.x + o.v.x, r.Sun.v.y + o.v.y, r.Sun.v.z + o.v.z, e);
		}
		throw `BaryState: Unsupported body "${t}"`;
	}
	function K1(t, n) {
		const e = E(n);
		switch (t) {
			case f.Sun: return new F(0, 0, 0, 0, 0, 0, e);
			case f.SSB:
				const r = new S1(e.tt);
				return new F(-r.Sun.r.x, -r.Sun.r.y, -r.Sun.r.z, -r.Sun.v.x, -r.Sun.v.y, -r.Sun.v.z, e);
			case f.Mercury:
			case f.Venus:
			case f.Earth:
			case f.Mars:
			case f.Jupiter:
			case f.Saturn:
			case f.Uranus:
			case f.Neptune: return C0(d1(B[t], e.tt), e);
			case f.Pluto: return bt(e, !0);
			case f.Moon:
			case f.EMB:
				const o = d1(B.Earth, e.tt), s = t == f.Moon ? f1(e) : It(e);
				return new F(s.x + o.r.x, s.y + o.r.y, s.z + o.r.z, s.vx + o.v.x, s.vy + o.v.y, s.vz + o.v.z, e);
			default:
				if (U1(t)) {
					const i = c0(t, e);
					return new F(i.x, i.y, i.z, 0, 0, 0, e);
				}
				throw `HelioState: Unsupported body "${t}"`;
		}
	}
	function f3(t, n, e, r, o) {
		let s = (o + e) / 2 - r, i = (o - e) / 2, a = r, c;
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
	function $(t, n, e, r) {
		const o = v(r && r.dt_tolerance_seconds || 1), s = Math.abs(o / T1);
		let i = r && r.init_f1 || t(n), a = r && r.init_f2 || t(e), c = NaN, u = 0, h = r && r.iter_limit || 20, l = !0;
		for (;;) {
			if (++u > h) throw "Excessive iteration in Search()";
			let d = $e(n, e, .5), _ = d.ut - n.ut;
			if (Math.abs(_) < s) return d;
			l ? c = t(d) : l = !0;
			let M = f3(d.ut, e.ut - d.ut, i, c, a);
			if (M) {
				let A = E(M.t), y = t(A);
				if (M.df_dt !== 0) {
					if (Math.abs(y / M.df_dt) < s) return A;
					let g = 1.2 * Math.abs(y / M.df_dt);
					if (g < _ / 10) {
						let R = A.AddDays(-g), w = A.AddDays(+g);
						if ((R.ut - n.ut) * (R.ut - e.ut) < 0 && (w.ut - n.ut) * (w.ut - e.ut) < 0) {
							let m = t(R), x = t(w);
							if (m < 0 && x >= 0) {
								i = m, a = x, n = R, e = w, c = y, l = !1;
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
	function Z0(t) {
		let n = t;
		for (; n <= -180;) n += 360;
		for (; n > 180;) n -= 360;
		return n;
	}
	function t1(t) {
		for (; t < 0;) t += 360;
		for (; t >= 360;) t -= 360;
		return t;
	}
	function W2(t, n, e) {
		function r(s) {
			return Z0($2(s).elon - t);
		}
		v(t), v(e);
		let o = E(n);
		return $(r, o, o.AddDays(e), { dt_tolerance_seconds: .01 });
	}
	function Vt(t, n, e) {
		if (t === f.Earth || n === f.Earth) throw "The Earth does not have a longitude as seen from itself.";
		const r = E(e), o = h1(e0(t, r, !1)), s = h1(e0(n, r, !1));
		return t1(o.elon - s.elon);
	}
	function n1(t, n) {
		if (t == f.Earth) throw "The Earth does not have an angle as seen from itself.";
		const e = E(n);
		return C1(e0(f.Sun, e, !0), e0(t, e, !0));
	}
	function U0(t, n) {
		if (t === f.Sun) throw "Cannot calculate heliocentric longitude of the Sun.";
		return h1(c0(t, n)).elon;
	}
	function d3(t, n, e, r) {
		let o, s = 0, i = 0, a = 0;
		switch (t) {
			case f.Mercury:
				o = -.6, s = 4.98, i = -4.88, a = 3.02;
				break;
			case f.Venus:
				n < 163.6 ? (o = -4.47, s = 1.03, i = .57, a = .13) : (o = .98, s = -1.02);
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
		const c = n / 100;
		let u = o + c * (s + c * (i + c * a));
		return u += 5 * Math.log10(e * r), u;
	}
	function M3(t, n, e, r, o) {
		const s = h1(r), i = p * 28.06, a = p * (169.51 + 382e-7 * o.tt), c = p * s.elat, u = p * s.elon, h = Math.asin(Math.sin(c) * Math.cos(i) - Math.cos(c) * Math.sin(i) * Math.sin(u - a)), l = Math.sin(Math.abs(h));
		let d = -9 + .044 * t;
		return d += l * (-2.6 + 1.2 * l), d += 5 * Math.log10(n * e), {
			mag: d,
			ring_tilt: b * h
		};
	}
	function S3(t, n, e) {
		let r = t * p, o = r * r, s = o * o, i = -12.717 + 1.49 * Math.abs(r) + .0431 * s, a = e / (385000.6 / C);
		return i += 5 * Math.log10(n * a), i;
	}
	var X2 = class {
		constructor(t, n, e, r, o, s, i, a) {
			this.time = t, this.mag = n, this.phase_angle = e, this.helio_dist = r, this.geo_dist = o, this.gc = s, this.hc = i, this.ring_tilt = a, this.phase_fraction = (1 + Math.cos(p * e)) / 2;
		}
	};
	function Y1(t, n) {
		if (t === f.Earth) throw "The illumination of the Earth is not defined.";
		const e = E(n), r = j0(B.Earth, e);
		let o, s, i, a;
		t === f.Sun ? (i = new P(-r.x, -r.y, -r.z, e), s = new P(0, 0, 0, e), o = 0) : (t === f.Moon ? (i = a0(e), s = new P(r.x + i.x, r.y + i.y, r.z + i.z, e)) : (s = c0(t, n), i = new P(s.x - r.x, s.y - r.y, s.z - r.z, e)), o = C1(i, s));
		let c = i.Length(), u = s.Length(), h;
		if (t === f.Sun) a = Ie + 5 * Math.log10(c);
		else if (t === f.Moon) a = S3(o, u, c);
		else if (t === f.Saturn) {
			const l = M3(o, u, c, i, e);
			a = l.mag, h = l.ring_tilt;
		} else a = d3(t, o, u, c);
		return new X2(e, a, o, u, c, i, s, h);
	}
	function p1(t) {
		if (t === f.Earth) throw "The Earth does not have a synodic period as seen from itself.";
		if (t === f.Moon) return z1;
		let n = i0[t];
		if (!n) throw `Not a valid planet name: ${t}`;
		const e = i0.Earth.OrbitalPeriod, r = n.OrbitalPeriod;
		return Math.abs(e / (e / r - 1));
	}
	function e1(t, n, e) {
		v(n);
		const r = i0[t];
		if (!r) throw `Cannot search relative longitude because body is not a planet: ${t}`;
		if (t === f.Earth) throw "Cannot search relative longitude for the Earth (it is always 0)";
		const o = r.OrbitalPeriod > i0.Earth.OrbitalPeriod ? 1 : -1;
		function s(u) {
			const h = U0(t, u);
			return Z0(o * (U0(f.Earth, u) - h) - n);
		}
		let i = p1(t), a = E(e), c = s(a);
		c > 0 && (c -= 360);
		for (let u = 0; u < 100; ++u) {
			let h = -c / 360 * i;
			if (a = a.AddDays(h), Math.abs(h) * T1 < 1) return a;
			let l = c;
			if (c = s(a), Math.abs(l) < 30 && l !== c) {
				let d = l / (l - c);
				d > .5 && d < 2 && (i *= d);
			}
		}
		throw `Relative longitude search failed to converge for ${t} near ${a.toString()} (error_angle = ${c}).`;
	}
	function Ft(t) {
		return Vt(f.Moon, f.Sun, t);
	}
	function _1(t, n, e) {
		function r(h) {
			return Z0(Ft(h) - t);
		}
		v(t), v(e);
		const o = 1.5, s = E(n);
		let i = r(s), a, c, u;
		if (e < 0) {
			if (i < 0 && (i += 360), a = -(z1 * i) / 360, u = a + o, u < e) return null;
			c = Math.max(e, a - o);
		} else {
			if (i > 0 && (i -= 360), a = -(z1 * i) / 360, c = a - o, c > e) return null;
			u = Math.min(e, a + o);
		}
		return $(r, s.AddDays(c), s.AddDays(u), { dt_tolerance_seconds: .1 });
	}
	var Z2 = class {
		constructor(t, n) {
			this.quarter = t, this.time = n;
		}
	};
	function tn(t) {
		let n = Ft(t), e = (Math.floor(n / 90) + 1) % 4, r = _1(90 * e, t, 10);
		if (!r) throw "Cannot find moon quarter";
		return new Z2(e, r);
	}
	function p3(t) {
		return tn(new Date(t.time.date.getTime() + 6 * Pe));
	}
	var nn = class {
		constructor(t, n, e) {
			this.pressure = t, this.temperature = n, this.density = e;
		}
	};
	function en(t) {
		if (!Number.isFinite(t) || t < -500 || t > 1e5) throw `Invalid elevation: ${t}`;
		let o, s;
		t <= 11e3 ? (o = 288.15 - .0065 * t, s = 101325 * Math.pow(288.15 / o, -5.25577)) : t <= 2e4 ? (o = 216.65, s = 22632 * Math.exp(-.00015768832 * (t - 11e3))) : (o = 216.65 + .001 * (t - 2e4), s = 5474.87 * Math.pow(216.65 / o, 34.16319));
		const i = s / o / (101325 / 288.15);
		return new nn(s, o, i);
	}
	function _3(t, n) {
		const e = t.latitude * p, r = Math.sin(e), o = Math.cos(e), s = 1 / Math.hypot(o, r * s0), i = s * (s0 * s0), a = (t.height - n) / 1e3, c = M0 * s + a, u = M0 * i + a, h = 1e3 * Math.hypot(c * o, u * r), l = .175 * Math.pow(1 - .0065 / 283.15 * (t.height - 2 / 3 * n), 3.256);
		return b * -(Math.sqrt(2 * (1 - l) * n / h) / (1 - l));
	}
	function A3(t) {
		switch (t) {
			case f.Sun: return m2;
			case f.Moon: return Le;
			default: return 0;
		}
	}
	function E3(t, n, e, r, o, s = 0) {
		if (!Number.isFinite(s) || s < 0) throw `Invalid value for metersAboveGround: ${s}`;
		const i = A3(t), a = en(n.height - s);
		return rn(t, n, e, r, o, i, _3(n, s) - Ue * a.density);
	}
	function y3(t, n, e, r, o, s) {
		if (!Number.isFinite(s) || s < -90 || s > 90) throw `Invalid altitude angle: ${s}`;
		return rn(t, n, e, r, o, 0, s);
	}
	var w3 = class {
		constructor(t, n, e, r) {
			this.tx = t, this.ty = n, this.ax = e, this.ay = r;
		}
	};
	function Ht(t, n, e, r, o, s, i) {
		if (s < 0 && i >= 0) return new w3(r, o, s, i);
		if (s >= 0 && i < 0) return null;
		if (t > 17) throw "Excessive recursion in rise/set ascent search.";
		const a = o.ut - r.ut;
		if (a * T1 < 1 || Math.min(Math.abs(s), Math.abs(i)) > e * (a / 2)) return null;
		const c = new g0((r.ut + o.ut) / 2), u = n(c);
		return Ht(1 + t, n, e, r, c, s, u) || Ht(1 + t, n, e, c, o, u, i);
	}
	function g3(t, n) {
		if (n < -90 || n > 90) throw `Invalid geographic latitude: ${n}`;
		let e, r;
		switch (t) {
			case f.Moon:
				e = 4.5, r = 8.2;
				break;
			case f.Sun:
				e = .8, r = .5;
				break;
			case f.Mercury:
				e = -1.6, r = 1;
				break;
			case f.Venus:
				e = -.8, r = .6;
				break;
			case f.Mars:
				e = -.5, r = .4;
				break;
			case f.Jupiter:
			case f.Saturn:
			case f.Uranus:
			case f.Neptune:
			case f.Pluto:
				e = -.2, r = .2;
				break;
			case f.Star1:
			case f.Star2:
			case f.Star3:
			case f.Star4:
			case f.Star5:
			case f.Star6:
			case f.Star7:
			case f.Star8:
				e = -.008, r = .008;
				break;
			default: throw `Body not allowed for altitude search: ${t}`;
		}
		const o = p * n;
		return Math.abs((360 / x2 - e) * Math.cos(o)) + Math.abs(r * Math.sin(o));
	}
	function rn(t, n, e, r, o, s, i) {
		if (K0(n), v(o), v(s), v(i), i < -90 || i > 90) throw `Invalid target altitude angle: ${i}`;
		const a = .42, c = g3(t, n.latitude);
		function u(A) {
			const y = l1(t, A, n, !0, !0);
			return e * (J1(A, n, y.ra, y.dec).altitude + b * Math.asin(s / y.dist) - i);
		}
		const h = E(r);
		let l = h, d = h, _ = u(l), M = _;
		for (;;) {
			o < 0 ? (l = d.AddDays(-a), _ = u(l)) : (d = l.AddDays(+a), M = u(d));
			const A = Ht(0, u, c, l, d, _, M);
			if (A) {
				const y = $(u, A.tx, A.ty, {
					dt_tolerance_seconds: .1,
					init_f1: A.ax,
					init_f2: A.ay
				});
				if (y) {
					if (o < 0) {
						if (y.ut < h.ut + o) return null;
					} else if (y.ut > h.ut + o) return null;
					return y;
				}
				throw `Rise/set search failed after finding ascent: t1=${l}, t2=${d}, a1=${_}, a2=${M}`;
			}
			if (o < 0) {
				if (l.ut < h.ut + o) return null;
				d = l, M = _;
			} else {
				if (d.ut > h.ut + o) return null;
				l = d, _ = M;
			}
		}
	}
	var on = class {
		constructor(t, n) {
			this.time = t, this.hor = n;
		}
	};
	function R3(t, n, e, r, o = 1) {
		K0(n);
		let s = E(r), i = 0;
		if (t === f.Earth) throw "Cannot search for hour angle of the Earth.";
		if (v(e), e < 0 || e >= 24) throw `Invalid hour angle ${e}`;
		if (v(o), o === 0) throw "Direction must be positive or negative.";
		for (;;) {
			++i;
			let a = S0(s), c = l1(t, s, n, !0, !0), u = (e + c.ra - n.longitude / 15 - a) % 24;
			if (i === 1 ? o > 0 ? u < 0 && (u += 24) : u > 0 && (u -= 24) : u < -12 ? u += 24 : u > 12 && (u -= 24), Math.abs(u) * 3600 < .1) {
				const l = J1(s, n, c.ra, c.dec, "normal");
				return new on(s, l);
			}
			let h = u / 24 * x2;
			s = s.AddDays(h);
		}
	}
	function x3(t, n, e) {
		const r = E(n), o = k2(r), s = l1(t, r, e, !0, !0);
		let i = (e.longitude / 15 + o - s.ra) % 24;
		return i < 0 && (i += 24), i;
	}
	var sn = class {
		constructor(t, n, e, r) {
			this.mar_equinox = t, this.jun_solstice = n, this.sep_equinox = e, this.dec_solstice = r;
		}
	};
	function m3(t) {
		function n(e, r, o) {
			let s = new Date(Date.UTC(t, r - 1, o)), i = W2(e, s, 20);
			if (!i) throw `Cannot find season change near ${s.toISOString()}`;
			return i;
		}
		if (t instanceof Date && Number.isFinite(t.getTime()) && (t = t.getUTCFullYear()), !Number.isSafeInteger(t)) throw `Cannot calculate seasons because year argument ${t} is neither a Date nor a safe integer.`;
		return new sn(n(0, 3, 10), n(90, 6, 10), n(180, 9, 10), n(270, 12, 10));
	}
	var an = class {
		constructor(t, n, e, r) {
			this.time = t, this.visibility = n, this.elongation = e, this.ecliptic_separation = r;
		}
	};
	function cn(t, n) {
		let e = E(n), r = Vt(t, f.Sun, e), o;
		r > 180 ? (o = "morning", r = 360 - r) : o = "evening";
		let s = n1(t, e);
		return new an(e, o, s, r);
	}
	function v3(t, n) {
		function r(a) {
			const c = a.AddDays(-.005), u = a.AddDays(.01 / 2);
			return (n1(t, c) - n1(t, u)) / .01;
		}
		let o = E(n);
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
			let a = Z0(U0(t, o) - U0(f.Earth, o)), c, u, h;
			a >= -s.s1 && a < +s.s1 ? (h = 0, c = +s.s1, u = +s.s2) : a >= +s.s2 || a < -s.s2 ? (h = 0, c = -s.s2, u = -s.s1) : a >= 0 ? (h = -p1(t) / 4, c = +s.s1, u = +s.s2) : (h = -p1(t) / 4, c = -s.s2, u = -s.s1);
			let l = o.AddDays(h), d = e1(t, c, l), _ = e1(t, u, d), M = r(d);
			if (M >= 0) throw `SearchMaxElongation: internal error: m1 = ${M}`;
			let A = r(_);
			if (A <= 0) throw `SearchMaxElongation: internal error: m2 = ${A}`;
			let y = $(r, d, _, {
				init_f1: M,
				init_f2: A,
				dt_tolerance_seconds: 10
			});
			if (!y) throw `SearchMaxElongation: failed search iter ${i} (t1=${d.toString()}, t2=${_.toString()})`;
			if (y.tt >= o.tt) return cn(t, y);
			o = _.AddDays(1);
		}
		throw "SearchMaxElongation: failed to find event after 2 tries.";
	}
	function D3(t, n) {
		if (t !== f.Venus) throw "SearchPeakMagnitude currently works for Venus only.";
		const e = .01;
		function r(c) {
			const u = c.AddDays(-e / 2), h = c.AddDays(+e / 2), l = Y1(t, u).mag;
			return (Y1(t, h).mag - l) / e;
		}
		let o = E(n);
		const s = 10, i = 30;
		let a = 0;
		for (; ++a <= 2;) {
			let c = Z0(U0(t, o) - U0(f.Earth, o)), u, h, l;
			c >= -s && c < +s ? (l = 0, u = +s, h = +i) : c >= +i || c < -i ? (l = 0, u = -i, h = -s) : c >= 0 ? (l = -p1(t) / 4, u = +s, h = +i) : (l = -p1(t) / 4, u = -i, h = -s);
			let d = o.AddDays(l), _ = e1(t, u, d), M = e1(t, h, _), A = r(_);
			if (A >= 0) throw `SearchPeakMagnitude: internal error: m1 = ${A}`;
			let y = r(M);
			if (y <= 0) throw `SearchPeakMagnitude: internal error: m2 = ${y}`;
			let g = $(r, _, M, {
				init_f1: A,
				init_f2: y,
				dt_tolerance_seconds: 10
			});
			if (!g) throw `SearchPeakMagnitude: failed search iter ${a} (t1=${_.toString()}, t2=${M.toString()})`;
			if (g.tt >= o.tt) return Y1(t, g);
			o = M.AddDays(1);
		}
		throw "SearchPeakMagnitude: failed to find event after 2 tries.";
	}
	var m0;
	(function(t) {
		t[t.Pericenter = 0] = "Pericenter", t[t.Apocenter = 1] = "Apocenter";
	})(m0 || (m0 = {}));
	var A1 = class {
		constructor(t, n, e) {
			this.time = t, this.kind = n, this.dist_au = e, this.dist_km = e * C;
		}
	};
	function un(t) {
		function e(c) {
			let u = c.AddDays(-5e-4), h = c.AddDays(.001 / 2), l = x0(u).distance_au;
			return (x0(h).distance_au - l) / .001;
		}
		function r(c) {
			return -e(c);
		}
		let o = E(t), s = e(o);
		const i = 5;
		for (var a = 0; a * i < 2 * z1; ++a) {
			let c = o.AddDays(i), u = e(c);
			if (s * u <= 0) {
				if (s < 0 || u > 0) {
					let h = $(e, o, c, {
						init_f1: s,
						init_f2: u
					});
					if (!h) throw "SearchLunarApsis INTERNAL ERROR: perigee search failed!";
					let l = x0(h).distance_au;
					return new A1(h, 0, l);
				}
				if (s > 0 || u < 0) {
					let h = $(r, o, c, {
						init_f1: -s,
						init_f2: -u
					});
					if (!h) throw "SearchLunarApsis INTERNAL ERROR: apogee search failed!";
					let l = x0(h).distance_au;
					return new A1(h, 1, l);
				}
				throw "SearchLunarApsis INTERNAL ERROR: cannot classify apsis event!";
			}
			o = c, s = u;
		}
		throw "SearchLunarApsis INTERNAL ERROR: could not find apsis within 2 synodic months of start date.";
	}
	function I3(t) {
		let n = un(t.time.AddDays(11));
		if (n.kind + t.kind !== 1) throw `NextLunarApsis INTERNAL ERROR: did not find alternating apogee/perigee: prev=${t.kind} @ ${t.time.toString()}, next=${n.kind} @ ${n.time.toString()}`;
		return n;
	}
	function ln(t, n, e, r) {
		const o = n === m0.Apocenter ? 1 : -1, s = 10;
		for (;;) {
			const i = r / (s - 1);
			if (i < 1 / 1440) {
				const u = e.AddDays(i / 2);
				return new A1(u, n, L0(t, u));
			}
			let a = -1, c = 0;
			for (let u = 0; u < s; ++u) {
				const h = o * L0(t, e.AddDays(u * i));
				(u == 0 || h > c) && (a = u, c = h);
			}
			e = e.AddDays((a - 1) * i), r = 2 * i;
		}
	}
	function P3(t, n) {
		const r = n.AddDays(i0[t].OrbitalPeriod * -.08333333333333333), o = n.AddDays(i0[t].OrbitalPeriod * (270 / 360));
		let s = r, i = r, a = -1, c = -1;
		const u = (o.ut - r.ut) / 99;
		for (let d = 0; d < 100; ++d) {
			const _ = r.AddDays(d * u), M = L0(t, _);
			d === 0 ? c = a = M : (M > c && (c = M, i = _), M < a && (a = M, s = _));
		}
		const h = ln(t, 0, s.AddDays(-2 * u), 4 * u), l = ln(t, 1, i.AddDays(-2 * u), 4 * u);
		if (h.time.tt >= n.tt) return l.time.tt >= n.tt && l.time.tt < h.time.tt ? l : h;
		if (l.time.tt >= n.tt) return l;
		throw "Internal error: failed to find Neptune apsis.";
	}
	function hn(t, n) {
		if (n = E(n), t === f.Neptune || t === f.Pluto) return P3(t, n);
		function e(c) {
			let h = c.AddDays(-5e-4), l = c.AddDays(.001 / 2), d = L0(t, h);
			return (L0(t, l) - d) / .001;
		}
		function r(c) {
			return -e(c);
		}
		const o = i0[t].OrbitalPeriod, s = o / 6;
		let i = n, a = e(i);
		for (let c = 0; c * s < 2 * o; ++c) {
			const u = i.AddDays(s), h = e(u);
			if (a * h <= 0) {
				let l, d;
				if (a < 0 || h > 0) l = e, d = m0.Pericenter;
				else if (a > 0 || h < 0) l = r, d = m0.Apocenter;
				else throw "Internal error with slopes in SearchPlanetApsis";
				const _ = $(l, i, u);
				if (!_) throw "Failed to find slope transition in planetary apsis search.";
				const M = L0(t, _);
				return new A1(_, d, M);
			}
			i = u, a = h;
		}
		throw "Internal error: should have found planetary apsis within 2 orbital periods.";
	}
	function z3(t, n) {
		if (n.kind !== m0.Pericenter && n.kind !== m0.Apocenter) throw `Invalid apsis kind: ${n.kind}`;
		const e = .25 * i0[t].OrbitalPeriod, r = hn(t, n.time.AddDays(e));
		if (r.kind + n.kind !== 1) throw `Internal error: previous apsis was ${n.kind}, but found ${r.kind} for next apsis.`;
		return r;
	}
	function r1(t) {
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
	function v0(t, n) {
		return new J([
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
	function T3() {
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
	function N3(t, n, e) {
		if (n !== 0 && n !== 1 && n !== 2) throw `Invalid axis ${n}. Must be [0, 1, 2].`;
		const r = v(e) * p, o = Math.cos(r), s = Math.sin(r), i = (n + 1) % 3, a = (n + 2) % 3, c = n;
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
		return u[i][i] = o * t.rot[i][i] - s * t.rot[i][a], u[i][a] = s * t.rot[i][i] + o * t.rot[i][a], u[i][c] = t.rot[i][c], u[a][i] = o * t.rot[a][i] - s * t.rot[a][a], u[a][a] = s * t.rot[a][i] + o * t.rot[a][a], u[a][c] = t.rot[a][c], u[c][i] = o * t.rot[c][i] - s * t.rot[c][a], u[c][a] = s * t.rot[c][i] + o * t.rot[c][a], u[c][c] = t.rot[c][c], new J(u);
	}
	function j1(t, n) {
		n = E(n);
		const e = t.lat * p, r = t.lon * p, o = t.dist * Math.cos(e);
		return new P(o * Math.cos(r), o * Math.sin(r), t.dist * Math.sin(e), n);
	}
	function Jt(t) {
		const n = $t(t);
		return new H1(n.lon / 15, n.lat, n.dist, t);
	}
	function $t(t) {
		const n = t.x * t.x + t.y * t.y, e = Math.sqrt(n + t.z * t.z);
		let r, o;
		if (n === 0) {
			if (t.z === 0) throw "Zero-length vector not allowed.";
			o = 0, r = t.z < 0 ? -90 : 90;
		} else o = b * Math.atan2(t.y, t.x), o < 0 && (o += 360), r = b * Math.atan2(t.z, Math.sqrt(n));
		return new q0(r, o, e);
	}
	function fn(t) {
		return t = 360 - t, t >= 360 ? t -= 360 : t < 0 && (t += 360), t;
	}
	function L3(t, n) {
		const e = $t(t);
		return e.lon = fn(e.lon), e.lat += E1(n, e.lat), e;
	}
	function C3(t, n, e) {
		n = E(n);
		const r = fn(t.lon);
		return j1(new q0(t.lat + dn(e, t.lat), r, t.dist), n);
	}
	function E1(t, n) {
		let e;
		if (v(n), n < -90 || n > 90) return 0;
		if (t === "normal" || t === "jplhor") {
			let r = n;
			r < -1 && (r = -1), e = 1.02 / Math.tan((r + 10.3 / (r + 5.11)) * p) / 60, t === "normal" && n < -1 && (e *= (n + 90) / 89);
		} else if (!t) e = 0;
		else throw `Invalid refraction option: ${t}`;
		return e;
	}
	function dn(t, n) {
		if (n < -90 || n > 90) return 0;
		let e = n - E1(t, n);
		for (;;) {
			let r = e + E1(t, e) - n;
			if (Math.abs(r) < 1e-14) return e - n;
			e -= r;
		}
	}
	function y1(t, n) {
		return new P(t.rot[0][0] * n.x + t.rot[1][0] * n.y + t.rot[2][0] * n.z, t.rot[0][1] * n.x + t.rot[1][1] * n.y + t.rot[2][1] * n.z, t.rot[0][2] * n.x + t.rot[1][2] * n.y + t.rot[2][2] * n.z, n.t);
	}
	function W1(t, n) {
		return new F(t.rot[0][0] * n.x + t.rot[1][0] * n.y + t.rot[2][0] * n.z, t.rot[0][1] * n.x + t.rot[1][1] * n.y + t.rot[2][1] * n.z, t.rot[0][2] * n.x + t.rot[1][2] * n.y + t.rot[2][2] * n.z, t.rot[0][0] * n.vx + t.rot[1][0] * n.vy + t.rot[2][0] * n.vz, t.rot[0][1] * n.vx + t.rot[1][1] * n.vy + t.rot[2][1] * n.vz, t.rot[0][2] * n.vx + t.rot[1][2] * n.vy + t.rot[2][2] * n.vz, n.t);
	}
	function Mn() {
		const t = .9174821430670688, n = .3977769691083922;
		return new J([
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
	function U3() {
		const t = .9174821430670688, n = .3977769691083922;
		return new J([
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
	function X1(t) {
		return t = E(t), v0(k1(t, O.From2000), V1(t, O.From2000));
	}
	function O3(t) {
		const n = E(t);
		return v0(X1(n), wn(n));
	}
	function k3(t) {
		const n = E(t);
		return v0(yn(n), Z1(n));
	}
	function Z1(t) {
		return t = E(t), v0(V1(t, O.Into2000), k1(t, O.Into2000));
	}
	function Gt(t, n) {
		t = E(t);
		const e = Math.sin(n.latitude * p), r = Math.cos(n.latitude * p), o = Math.sin(n.longitude * p), s = Math.cos(n.longitude * p), i = [
			r * s,
			r * o,
			e
		], a = [
			-e * s,
			-e * o,
			r
		], c = [
			o,
			-s,
			0
		], u = -15 * S0(t), h = B0(u, i), l = B0(u, a), d = B0(u, c);
		return new J([
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
		return r1(Gt(t, n));
	}
	function pn(t, n) {
		return t = E(t), v0(Sn(t, n), Z1(t));
	}
	function b3(t, n) {
		return r1(pn(t, n));
	}
	function _n(t) {
		return v0(Z1(t), Mn());
	}
	function An(t) {
		return r1(_n(t));
	}
	function En(t, n) {
		return t = E(t), v0(An(t), Gt(t, n));
	}
	function V3(t, n) {
		return r1(En(t, n));
	}
	function F3() {
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
	function H3() {
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
	function yn(t) {
		const n = R0(E(t)).tobl * p, e = Math.cos(n), r = Math.sin(n);
		return new J([
			[
				1,
				0,
				0
			],
			[
				0,
				+e,
				+r
			],
			[
				0,
				-r,
				+e
			]
		]);
	}
	function wn(t) {
		const n = R0(E(t)).tobl * p, e = Math.cos(n), r = Math.sin(n);
		return new J([
			[
				1,
				0,
				0
			],
			[
				0,
				+e,
				-r
			],
			[
				0,
				+r,
				+e
			]
		]);
	}
	const J3 = [
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
	], $3 = [
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
	let Qt, gn;
	var Rn = class {
		constructor(t, n, e, r) {
			this.symbol = t, this.name = n, this.ra1875 = e, this.dec1875 = r;
		}
	};
	function G3(t, n) {
		if (v(t), v(n), n < -90 || n > 90) throw "Invalid declination angle. Must be -90..+90.";
		t %= 24, t < 0 && (t += 24), Qt || (Qt = X1(new g0(-45655.74141261017)), gn = new g0(0));
		const e = j1(new q0(n, 15 * t, 1), gn), r = Jt(y1(Qt, e)), o = 10 / 240, s = o / 15;
		for (let i of $3) {
			const a = i[3] * o, c = i[1] * s, u = i[2] * s;
			if (a <= r.dec && c <= r.ra && r.ra < u) {
				const h = J3[i[0]];
				return new Rn(h[0], h[1], r.ra, r.dec);
			}
		}
		throw "Unable to find constellation for given coordinates.";
	}
	var X;
	(function(t) {
		t.Penumbral = "penumbral", t.Partial = "partial", t.Annular = "annular", t.Total = "total";
	})(X || (X = {}));
	var xn = class {
		constructor(t, n, e, r, o, s) {
			this.kind = t, this.obscuration = n, this.peak = e, this.sd_penum = r, this.sd_partial = o, this.sd_total = s;
		}
	}, Q3 = class {
		constructor(t, n, e, r, o, s, i) {
			this.time = t, this.u = n, this.r = e, this.k = r, this.p = o, this.target = s, this.dir = i;
		}
	};
	function w1(t, n, e, r) {
		const o = (r.x * e.x + r.y * e.y + r.z * e.z) / (r.x * r.x + r.y * r.y + r.z * r.z), s = o * r.x - e.x, i = o * r.y - e.y, a = o * r.z - e.z;
		return new Q3(n, o, C * Math.hypot(s, i, a), +a1 - (1 + o) * (a1 - t), -a1 + (1 + o) * (a1 + t), e, r);
	}
	function tt(t) {
		const n = e0(f.Sun, t, !0), e = new P(-n.x, -n.y, -n.z, n.t);
		return w1(Ne, t, a0(t), e);
	}
	function mn(t) {
		const n = e0(f.Sun, t, !0), e = a0(t), r = new P(-e.x, -e.y, -e.z, e.t);
		return e.x -= n.x, e.y -= n.y, e.z -= n.z, w1(j, t, r, e);
	}
	function qt(t, n) {
		const e = V2(t, n), r = e0(f.Sun, t, !0), o = a0(t), s = new P(e[0] - o.x, e[1] - o.y, e[2] - o.z, t);
		return o.x -= r.x, o.y -= r.y, o.z -= r.z, w1(j, t, s, o);
	}
	function nt(t, n, e) {
		const r = e0(t, e, !0), o = e0(f.Sun, e, !0), s = new P(r.x - o.x, r.y - o.y, r.z - o.z, e);
		return o.x = -r.x, o.y = -r.y, o.z = -r.z, w1(n, e, o, s);
	}
	function Bt(t, n) {
		const e = 11574074074074073e-21, r = n.AddDays(-e), o = n.AddDays(+e), s = t(r);
		return (t(o).r - s.r) / e;
	}
	function q3(t, n, e) {
		const r = 11574074074074073e-21, o = nt(t, n, e.AddDays(-r));
		return (nt(t, n, e.AddDays(+r)).r - o.r) / r;
	}
	function B3(t) {
		const e = $((r) => Bt(tt, r), t.AddDays(-.03), t.AddDays(.03));
		if (!e) throw "Failed to find peak Earth shadow time.";
		return tt(e);
	}
	function K3(t) {
		const e = $((r) => Bt(mn, r), t.AddDays(-.03), t.AddDays(.03));
		if (!e) throw "Failed to find peak Moon shadow time.";
		return mn(e);
	}
	function Y3(t, n, e) {
		const o = $((s) => q3(t, n, s), e.AddDays(-1), e.AddDays(1));
		if (!o) throw "Failed to find peak planet shadow time.";
		return nt(t, n, o);
	}
	function j3(t, n) {
		const r = t.AddDays(-.2), o = t.AddDays(.2);
		function s(a) {
			return qt(a, n);
		}
		const i = $((a) => Bt(s, a), r, o);
		if (!i) throw `PeakLocalMoonShadow: search failure for search_center_time = ${t}`;
		return qt(i, n);
	}
	function Kt(t, n, e) {
		const r = e / 1440, o = t.AddDays(-r), s = t.AddDays(+r), i = $((c) => -(tt(c).r - n), o, t), a = $((c) => +(tt(c).r - n), t, s);
		if (!i || !a) throw "Failed to find shadow semiduration";
		return (a.ut - i.ut) * (1440 / 2);
	}
	function Yt(t) {
		return b * x0(t).geo_eclip_lat;
	}
	function vn(t, n, e) {
		if (t <= 0) throw "Radius of first disc must be positive.";
		if (n <= 0) throw "Radius of second disc must be positive.";
		if (e < 0) throw "Distance between discs is not allowed to be negative.";
		if (e >= t + n) return 0;
		if (e == 0) return t <= n ? 1 : n * n / (t * t);
		const r = (t * t - n * n + e * e) / (2 * e), o = t * t - r * r;
		if (o <= 0) return t <= n ? 1 : n * n / (t * t);
		const s = Math.sqrt(o);
		return (t * t * Math.acos(r / t) - r * s + (n * n * Math.acos((e - r) / n) - (e - r) * s)) / (Math.PI * t * t);
	}
	function Dn(t, n) {
		const e = new P(t.x + n.x, t.y + n.y, t.z + n.z, t.t), r = vn(Math.asin(m2 / e.Length()), Math.asin(Ce / n.Length()), C1(n, e) * p);
		return Math.min(.9999, r);
	}
	function In(t) {
		let e = E(t);
		for (let r = 0; r < 12; ++r) {
			const o = _1(180, e, 40);
			if (!o) throw "Cannot find full moon.";
			const s = Yt(o);
			if (Math.abs(s) < 1.8) {
				const i = B3(o);
				if (i.r < i.p + j) {
					let a = X.Penumbral, c = 0, u = 0, h = 0, l = Kt(i.time, i.p + j, 200);
					return i.r < i.k + j && (a = X.Partial, h = Kt(i.time, i.k + j, l), i.r + j < i.k ? (a = X.Total, c = 1, u = Kt(i.time, i.k - j, h)) : c = vn(j, i.k, i.r)), new xn(a, c, i.time, l, h, u);
				}
			}
			e = o.AddDays(10);
		}
		throw "Failed to find lunar eclipse within 12 full moons.";
	}
	var Pn = class {
		constructor(t, n, e, r, o, s) {
			this.kind = t, this.obscuration = n, this.peak = e, this.distance = r, this.latitude = o, this.longitude = s;
		}
	};
	function zn(t) {
		return t > .014 ? X.Total : X.Annular;
	}
	function W3(t) {
		let n = X.Partial, e = t.time, r = t.r, o, s;
		const i = X1(t.time), a = y1(i, t.dir), c = y1(i, t.target);
		a.x *= C, a.y *= C, a.z *= C / s0, c.x *= C, c.y *= C, c.z *= C / s0;
		const u = M0, h = a.x * a.x + a.y * a.y + a.z * a.z, l = -2 * (a.x * c.x + a.y * c.y + a.z * c.z), d = c.x * c.x + c.y * c.y + c.z * c.z - u * u, _ = l * l - 4 * h * d;
		let M;
		if (_ > 0) {
			const A = (-l - Math.sqrt(_)) / (2 * h), y = A * a.x - c.x, g = A * a.y - c.y, R = (A * a.z - c.z) * s0, w = Math.hypot(y, g) * b0;
			w == 0 ? o = R > 0 ? 90 : -90 : o = b * Math.atan(R / w);
			const m = S0(e);
			s = (b * Math.atan2(g, y) - 15 * m) % 360, s <= -180 ? s += 360 : s > 180 && (s -= 360);
			const x = r1(i);
			let z = new P(y / C, g / C, R / C, t.time);
			z = y1(x, z), z.x += t.target.x, z.y += t.target.y, z.z += t.target.z;
			const I = w1(D2, t.time, z, t.dir);
			if (I.r > 1e-9 || I.r < 0) throw `Unexpected shadow distance from geoid intersection = ${I.r}`;
			n = zn(I.k), M = n === X.Total ? 1 : Dn(t.dir, z);
		} else M = void 0;
		return new Pn(n, M, e, r, o, s);
	}
	function X3(t) {
		return t = E(t), In(t.AddDays(10));
	}
	function Tn(t) {
		t = E(t);
		const n = 1.8;
		let e = t, r;
		for (r = 0; r < 12; ++r) {
			const o = _1(0, e, 40);
			if (!o) throw "Cannot find new moon";
			const s = Yt(o);
			if (Math.abs(s) < n) {
				const i = K3(o);
				if (i.r < i.p + v2) return W3(i);
			}
			e = o.AddDays(10);
		}
		throw "Failed to find solar eclipse within 12 full moons.";
	}
	function Z3(t) {
		return t = E(t), Tn(t.AddDays(10));
	}
	var Nn = class {
		constructor(t, n) {
			this.time = t, this.altitude = n;
		}
	}, Ln = class {
		constructor(t, n, e, r, o, s, i) {
			this.kind = t, this.obscuration = n, this.partial_begin = e, this.total_begin = r, this.peak = o, this.total_end = s, this.partial_end = i;
		}
	};
	function Cn(t) {
		return t.p - t.r;
	}
	function Un(t) {
		return Math.abs(t.k) - t.r;
	}
	function t4(t, n) {
		const o = On(n, t.time);
		let s = t.time.AddDays(-.2), i = t.time.AddDays(.2);
		const a = et(n, 1, Cn, s, t.time), c = et(n, -1, Cn, t.time, i);
		let u, h, l;
		t.r < Math.abs(t.k) ? (s = t.time.AddDays(-.01), i = t.time.AddDays(.01), u = et(n, 1, Un, s, t.time), h = et(n, -1, Un, t.time, i), l = zn(t.k)) : l = X.Partial;
		const d = l === X.Total ? 1 : Dn(t.dir, t.target);
		return new Ln(l, d, a, u, o, h, c);
	}
	function et(t, n, e, r, o) {
		function s(a) {
			return n * e(qt(a, t));
		}
		const i = $(s, r, o);
		if (!i) throw "Local eclipse transition search failed.";
		return On(t, i);
	}
	function On(t, n) {
		return new Nn(n, n4(n, t));
	}
	function n4(t, n) {
		const e = l1(f.Sun, t, n, !0, !0);
		return J1(t, n, e.ra, e.dec, "normal").altitude;
	}
	function kn(t, n) {
		t = E(t), K0(n);
		const e = 1.8;
		let r = t;
		for (;;) {
			const o = _1(0, r, 40);
			if (!o) throw "Cannot find next new moon";
			const s = Yt(o);
			if (Math.abs(s) < e) {
				const i = j3(o, n);
				if (i.r < i.p) {
					const a = t4(i, n);
					if (a.partial_begin.altitude > 0 || a.partial_end.altitude > 0) return a;
				}
			}
			r = o.AddDays(10);
		}
	}
	function e4(t, n) {
		return t = E(t), kn(t.AddDays(10), n);
	}
	var bn = class {
		constructor(t, n, e, r) {
			this.start = t, this.peak = n, this.finish = e, this.separation = r;
		}
	};
	function r4(t, n, e, r) {
		const o = nt(n, e, t);
		return r * (o.r - o.p);
	}
	function Vn(t, n, e, r, o) {
		const s = $((i) => r4(i, t, n, o), e, r);
		if (!s) throw "Planet transit boundary search failed";
		return s;
	}
	function Fn(t, n) {
		n = E(n);
		const e = .4, r = 1;
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
		let s = n;
		for (;;) {
			const i = e1(t, 0, s);
			if (n1(t, i) < e) {
				const a = Y3(t, o, i);
				if (a.r < a.p) {
					const c = a.time.AddDays(-r), u = Vn(t, o, c, a.time, -1), h = a.time.AddDays(+r), l = Vn(t, o, a.time, h, 1), d = 60 * n1(t, a.time);
					return new bn(u, a.time, l, d);
				}
			}
			s = i.AddDays(10);
		}
	}
	function o4(t, n) {
		return n = E(n), Fn(t, n.AddDays(100));
	}
	var _0;
	(function(t) {
		t[t.Invalid = 0] = "Invalid", t[t.Ascending = 1] = "Ascending", t[t.Descending = -1] = "Descending";
	})(_0 || (_0 = {}));
	var Hn = class {
		constructor(t, n) {
			this.kind = t, this.time = n;
		}
	};
	const Jn = 10;
	function $n(t) {
		let n = E(t), e = $1(n);
		for (;;) {
			const r = n.AddDays(Jn), o = $1(r);
			if (e.lat * o.lat <= 0) {
				const s = o.lat > e.lat ? _0.Ascending : _0.Descending, i = $((a) => s * $1(a).lat, n, r);
				if (!i) throw "Could not find moon node.";
				return new Hn(s, i);
			}
			n = r, e = o;
		}
	}
	function s4(t) {
		const n = $n(t.time.AddDays(Jn));
		switch (t.kind) {
			case _0.Ascending:
				if (n.kind !== _0.Descending) throw `Internal error: previous node was ascending, but this node was: ${n.kind}`;
				break;
			case _0.Descending:
				if (n.kind !== _0.Ascending) throw `Internal error: previous node was descending, but this node was: ${n.kind}`;
				break;
			default: throw `Previous node has an invalid node kind: ${t.kind}`;
		}
		return n;
	}
	var jt = class {
		constructor(t, n, e, r) {
			this.ra = t, this.dec = n, this.spin = e, this.north = r;
		}
	};
	function i4(t) {
		const n = G0(Q0([
			0,
			0,
			1
		], t, O.Into2000), t, O.Into2000), e = new P(n[0], n[1], n[2], t), r = Jt(e), o = 190.41375788700253 + 360.9856122880876 * t.ut;
		return new jt(r.ra, r.dec, o, e);
	}
	function a4(t, n) {
		const e = E(n), r = e.tt, o = r / 36525;
		let s, i, a;
		switch (t) {
			case f.Sun:
				s = 286.13, i = 63.87, a = 84.176 + 14.1844 * r;
				break;
			case f.Mercury:
				s = 281.0103 - .0328 * o, i = 61.4155 - .0049 * o, a = 329.5988 + 6.1385108 * r + .01067257 * Math.sin(p * (174.7910857 + 4.092335 * r)) - .00112309 * Math.sin(p * (349.5821714 + 8.18467 * r)) - 1104e-7 * Math.sin(p * (164.3732571 + 12.277005 * r)) - 2539e-8 * Math.sin(p * (339.1643429 + 16.36934 * r)) - 571e-8 * Math.sin(p * (153.9554286 + 20.461675 * r));
				break;
			case f.Venus:
				s = 272.76, i = 67.16, a = 160.2 - 1.4813688 * r;
				break;
			case f.Earth: return i4(e);
			case f.Moon:
				const d = p * (125.045 - .0529921 * r), _ = p * (250.089 - .1059842 * r), M = p * (260.008 + 13.0120009 * r), A = p * (176.625 + 13.3407154 * r), y = p * (357.529 + .9856003 * r), g = p * (311.589 + 26.4057084 * r), R = p * (134.963 + 13.064993 * r), w = p * (276.617 + .3287146 * r), m = p * (34.226 + 1.7484877 * r), x = p * (15.134 - .1589763 * r), z = p * (119.743 + .0036096 * r), I = p * (239.961 + .1643573 * r), k = p * (25.053 + 12.9590088 * r);
				s = 269.9949 + .0031 * o - 3.8787 * Math.sin(d) - .1204 * Math.sin(_) + .07 * Math.sin(M) - .0172 * Math.sin(A) + .0072 * Math.sin(g) - .0052 * Math.sin(x) + .0043 * Math.sin(k), i = 66.5392 + .013 * o + 1.5419 * Math.cos(d) + .0239 * Math.cos(_) - .0278 * Math.cos(M) + .0068 * Math.cos(A) - .0029 * Math.cos(g) + 9e-4 * Math.cos(R) + 8e-4 * Math.cos(x) - 9e-4 * Math.cos(k), a = 38.3213 + (13.17635815 - 14e-13 * r) * r + 3.561 * Math.sin(d) + .1208 * Math.sin(_) - .0642 * Math.sin(M) + .0158 * Math.sin(A) + .0252 * Math.sin(y) - .0066 * Math.sin(g) - .0047 * Math.sin(R) - .0046 * Math.sin(w) + .0028 * Math.sin(m) + .0052 * Math.sin(x) + .004 * Math.sin(z) + .0019 * Math.sin(I) - .0044 * Math.sin(k);
				break;
			case f.Mars:
				s = 317.269202 - .10927547 * o + 68e-6 * Math.sin(p * (198.991226 + 19139.4819985 * o)) + 238e-6 * Math.sin(p * (226.292679 + 38280.8511281 * o)) + 52e-6 * Math.sin(p * (249.663391 + 57420.7251593 * o)) + 9e-6 * Math.sin(p * (266.18351 + 76560.636795 * o)) + .419057 * Math.sin(p * (79.398797 + .5042615 * o)), i = 54.432516 - .05827105 * o + 51e-6 * Math.cos(p * (122.433576 + 19139.9407476 * o)) + 141e-6 * Math.cos(p * (43.058401 + 38280.8753272 * o)) + 31e-6 * Math.cos(p * (57.663379 + 57420.7517205 * o)) + 5e-6 * Math.cos(p * (79.476401 + 76560.6495004 * o)) + 1.591274 * Math.cos(p * (166.325722 + .5042615 * o)), a = 176.049863 + 350.891982443297 * r + 145e-6 * Math.sin(p * (129.071773 + 19140.0328244 * o)) + 157e-6 * Math.sin(p * (36.352167 + 38281.0473591 * o)) + 4e-5 * Math.sin(p * (56.668646 + 57420.929536 * o)) + 1e-6 * Math.sin(p * (67.364003 + 76560.2552215 * o)) + 1e-6 * Math.sin(p * (104.79268 + 95700.4387578 * o)) + .584542 * Math.sin(p * (95.391654 + .5042615 * o));
				break;
			case f.Jupiter:
				const N = p * (99.360714 + 4850.4046 * o), q = p * (175.895369 + 1191.9605 * o), G = p * (300.323162 + 262.5475 * o), Y = p * (114.012305 + 6070.2476 * o), u0 = p * (49.511251 + 64.3 * o);
				s = 268.056595 - .006499 * o + 117e-6 * Math.sin(N) + 938e-6 * Math.sin(q) + .001432 * Math.sin(G) + 3e-5 * Math.sin(Y) + .00215 * Math.sin(u0), i = 64.495303 + .002413 * o + 5e-5 * Math.cos(N) + 404e-6 * Math.cos(q) + 617e-6 * Math.cos(G) - 13e-6 * Math.cos(Y) + 926e-6 * Math.cos(u0), a = 284.95 + 870.536 * r;
				break;
			case f.Saturn:
				s = 40.589 - .036 * o, i = 83.537 - .004 * o, a = 38.9 + 810.7939024 * r;
				break;
			case f.Uranus:
				s = 257.311, i = -15.175, a = 203.81 - 501.1600928 * r;
				break;
			case f.Neptune:
				const o0 = p * (357.85 + 52.316 * o);
				s = 299.36 + .7 * Math.sin(o0), i = 43.46 - .51 * Math.cos(o0), a = 249.978 + 541.1397757 * r - .48 * Math.sin(o0);
				break;
			case f.Pluto:
				s = 132.993, i = -6.163, a = 302.695 + 56.3625225 * r;
				break;
			default: throw `Invalid body: ${t}`;
		}
		const c = i * p, u = s * p, h = Math.cos(c), l = new P(h * Math.cos(u), h * Math.sin(u), Math.sin(c), e);
		return new jt(s / 15, i, a, l);
	}
	function c4(t, n, e, r) {
		const o = E(n), s = gt(e), i = gt(r);
		let a, c;
		return e === f.Earth && r === f.Moon ? (a = new F(0, 0, 0, 0, 0, 0, o), c = f1(o)) : (a = K1(e, o), c = K1(r, o)), Gn(t, a, s, c, i);
	}
	function Gn(t, n, e, r, o) {
		const i = .8660254037844386;
		if (t < 1 || t > 5) throw `Invalid lagrange point ${t}`;
		if (!Number.isFinite(e) || e <= 0) throw "Major mass must be a positive number.";
		if (!Number.isFinite(o) || o <= 0) throw "Minor mass must be a negative number.";
		let a = r.x - n.x, c = r.y - n.y, u = r.z - n.z;
		const h = a * a + c * c + u * u, l = Math.sqrt(h), d = r.vx - n.vx, _ = r.vy - n.vy, M = r.vz - n.vz;
		let A;
		if (t === 4 || t === 5) {
			const y = c * M - u * _, g = u * d - a * M, R = a * _ - c * d;
			let w = g * u - R * c, m = R * a - y * u, x = y * c - g * a;
			const z = Math.sqrt(w * w + m * m + x * x);
			w /= z, m /= z, x /= z, a /= l, c /= l, u /= l;
			const I = t == 4 ? +i : -i, k = .5 * a + I * w, N = .5 * c + I * m, q = .5 * u + I * x, G = .5 * w - I * a, Y = .5 * m - I * c, u0 = .5 * x - I * u, o0 = l * k, A0 = l * N, D0 = l * q, l0 = d * a + _ * c + M * u, h0 = d * w + _ * m + M * x;
			A = new F(o0, A0, D0, l0 * k + h0 * G, l0 * N + h0 * Y, l0 * q + h0 * u0, n.t);
		} else {
			const y = -l * (o / (e + o)), g = +l * (e / (e + o)), R = (e + o) / (h * l);
			let w, m, x;
			if (t === 1 || t === 2) w = e / (e + o) * Math.cbrt(o / (3 * e)), m = -e, t == 1 ? (w = 1 - w, x = +o) : (w = 1 + w, x = -o);
			else if (t === 3) w = (7 / 12 * o - e) / (o + e), m = +e, x = +o;
			else throw `Invalid Langrage point ${t}. Must be an integer 1..5.`;
			let z = l * w - y, I;
			do {
				const k = z - y, N = z - g;
				I = (R * z + m / (k * k) + x / (N * N)) / (R - 2 * m / (k * k * k) - 2 * x / (N * N * N)), z -= I;
			} while (Math.abs(I / l) > 1e-14);
			w = (z - y) / l, A = new F(w * a, w * c, w * u, w * d, w * _, w * M, n.t);
		}
		return A;
	}
	var u4 = class t0 {
		constructor(n, e, r) {
			const o = E(e);
			this.originBody = n;
			for (let c of r) if (c.t.tt !== o.tt) throw "Inconsistent times in bodyStates";
			const s = [], i = t0.CalcSolarSystem(o);
			this.curr = new Qn(o, i, s);
			const a = this.InternalBodyState(n);
			for (let c of r) {
				const u = new K(c.x + a.r.x, c.y + a.r.y, c.z + a.r.z), h = new K(c.vx + a.v.x, c.vy + a.v.y, c.vz + a.v.z), l = K.zero();
				s.push(new Ct(o.tt, u, h, l));
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
			const e = E(n), r = e.tt - this.curr.time.tt;
			if (r === 0) this.prev = this.Duplicate();
			else {
				this.Swap(), this.curr.time = e, this.curr.gravitators = t0.CalcSolarSystem(e);
				for (let i = 0; i < this.curr.bodies.length; ++i) {
					const a = this.prev.bodies[i];
					this.curr.bodies[i].r = X0(r, a.r, a.v, a.a);
				}
				this.CalcBodyAccelerations();
				for (let i = 0; i < this.curr.bodies.length; ++i) {
					const a = this.prev.bodies[i], c = this.curr.bodies[i], u = a.a.mean(c.a);
					c.tt = e.tt, c.r = X0(r, a.r, a.v, u), c.v = Ut(r, a.v, u);
				}
				this.CalcBodyAccelerations();
			}
			const o = [], s = this.InternalBodyState(this.originBody);
			for (let i of this.curr.bodies) o.push(new F(i.r.x - s.r.x, i.r.y - s.r.y, i.r.z - s.r.z, i.v.x - s.v.x, i.v.y - s.v.y, i.v.z - s.v.z, e));
			return o;
		}
		Swap() {
			const n = this.curr;
			this.curr = this.prev, this.prev = n;
		}
		SolarSystemBodyState(n) {
			const e = this.InternalBodyState(n), r = this.InternalBodyState(this.originBody);
			return C0(e.sub(r), this.curr.time);
		}
		InternalBodyState(n) {
			if (n === f.SSB) return new N0(this.curr.time.tt, K.zero(), K.zero());
			const e = this.curr.gravitators[n];
			if (e) return e;
			throw `Invalid body: ${n}`;
		}
		static CalcSolarSystem(n) {
			const e = {}, r = new N0(n.tt, K.zero(), K.zero());
			e[f.Mercury] = W(r, n.tt, f.Mercury, Et), e[f.Venus] = W(r, n.tt, f.Venus, yt), e[f.Earth] = W(r, n.tt, f.Earth, u1 + N1), e[f.Mars] = W(r, n.tt, f.Mars, wt), e[f.Jupiter] = W(r, n.tt, f.Jupiter, V0), e[f.Saturn] = W(r, n.tt, f.Saturn, F0), e[f.Uranus] = W(r, n.tt, f.Uranus, H0), e[f.Neptune] = W(r, n.tt, f.Neptune, J0);
			for (let o in e) e[o].r.decr(r.r), e[o].v.decr(r.v);
			return e[f.Sun] = new N0(n.tt, r.r.neg(), r.v.neg()), e;
		}
		CalcBodyAccelerations() {
			for (let n of this.curr.bodies) n.a = K.zero(), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Sun].r, c1), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Mercury].r, Et), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Venus].r, yt), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Earth].r, u1 + N1), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Mars].r, wt), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Jupiter].r, V0), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Saturn].r, F0), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Uranus].r, H0), t0.AddAcceleration(n.a, n.r, this.curr.gravitators[f.Neptune].r, J0);
		}
		static AddAcceleration(n, e, r, o) {
			const s = r.x - e.x, i = r.y - e.y, a = r.z - e.z, c = s * s + i * i + a * a, u = o / (c * Math.sqrt(c));
			n.x += s * u, n.y += i * u, n.z += a * u;
		}
		Duplicate() {
			const n = {};
			for (let r in this.curr.gravitators) n[r] = this.curr.gravitators[r].clone();
			const e = [];
			for (let r of this.curr.bodies) e.push(r.clone());
			return new Qn(this.curr.time, n, e);
		}
	}, Qn = class {
		constructor(t, n, e) {
			this.time = t, this.gravitators = n, this.bodies = e;
		}
	};
	function rt(t) {
		return typeof t.Observer == "function" ? t : t.default ?? t;
	}
	const { MakeTime: z4, SearchRiseSet: T4, Body: N4, Observer: l4 } = rt(I1);
	new l4(40.7128, -74.006, 10);
	const { Body: r0 } = rt(I1);
	D.SUN, r0.Sun, D.MERCURY, r0.Mercury, D.VENUS, r0.Venus, D.EARTH, r0.Earth, D.MARS, r0.Mars, D.JUPITER, r0.Jupiter, D.SATURN, r0.Saturn, D.URANUS, r0.Uranus, D.NEPTUNE, r0.Neptune, D.PLUTO, r0.Pluto, D.MOON, r0.Moon;
	2 * Math.PI;
	const { Rotation_EQD_EQJ: O4, CombineRotation: k4, MakeRotation: b4 } = rt(I1);
	Math.PI / (180 * 3600);
	const { HelioState: F4 } = rt(I1), h4 = 86400;
	function f4(t) {
		return t.type === "setRate" && (!Number.isFinite(t.speed) || t.speed < 0) ? {
			type: "setRate",
			speed: 0
		} : t;
	}
	const d4 = 2451545;
	function Wt(t) {
		return {
			protocolVersion: 1,
			jd: t?.jd ?? d4,
			playing: t?.playing ?? !1,
			speed: t?.speed ?? 86400
		};
	}
	function qn(t, n) {
		const e = f4(n);
		switch (e.type) {
			case "init": {
				const r = Wt({
					jd: e.jd ?? t.jd,
					playing: e.playing ?? t.playing,
					speed: e.speed ?? t.speed
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
				if (!Number.isFinite(e.jd)) return {
					state: t,
					events: [{
						type: "error",
						code: "INVALID_JD",
						message: "seek.jd must be finite"
					}]
				};
				const r = e.jd;
				let o = r;
				(o < 1721545 || o > 3181545) && (console.warn(`[kernel/seek] JD ${o} outside supported range [${ft}, ${dt}] (years 0-4000 AD); clamping.`), o = Math.max(ft, Math.min(dt, o)));
				const s = {
					...t,
					jd: o
				}, i = [{
					type: "tick",
					jd: s.jd
				}, {
					type: "timeState",
					state: s
				}];
				return (r < 1721545 || r > 3181545) && t.jd > 1721545 && t.jd < 3181545 && i.push({
					type: "jdBoundaryReached",
					boundary: r > 3181545 ? "max" : "min"
				}), {
					state: s,
					events: i
				};
			}
			case "step": {
				if (!t.playing) return {
					state: t,
					events: []
				};
				const r = e.deltaSeconds;
				if (!Number.isFinite(r)) return {
					state: t,
					events: [{
						type: "error",
						code: "INVALID_DELTA",
						message: "step.deltaSeconds must be finite"
					}]
				};
				const o = t.jd + t.speed * r / h4, s = Math.max(ft, Math.min(dt, o)), i = {
					...t,
					jd: s
				}, a = [{
					type: "tick",
					jd: s
				}, {
					type: "timeState",
					state: i
				}];
				return o > 3181545 && t.jd < 3181545 ? a.push({
					type: "jdBoundaryReached",
					boundary: "max"
				}) : o < 1721545 && t.jd > 1721545 && a.push({
					type: "jdBoundaryReached",
					boundary: "min"
				}), {
					state: i,
					events: a
				};
			}
			case "setPlaying": {
				const r = {
					...t,
					playing: e.playing
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
					...t,
					speed: e.speed
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
				state: t,
				events: []
			};
		}
	}
	let Z = Wt(), ot = null, Xt = null;
	function Zt(t) {
		Xt?.(t);
	}
	function t2() {
		ot != null && (clearInterval(ot), ot = null);
	}
	function M4() {
		t2(), ot = setInterval(() => {
			const { state: t, events: n } = qn(Z, {
				type: "step",
				deltaSeconds: .5
			});
			Z = t, Zt({
				type: "workerTick",
				state: Z,
				events: n
			});
		}, 500);
	}
	function n2() {
		Z.playing ? M4() : t2();
	}
	function S4(t) {
		if (t.type === "init") {
			Z = Wt({
				jd: t.jd ?? Z.jd,
				playing: t.playing ?? Z.playing,
				speed: t.speed ?? Z.speed
			}), n2(), Zt({
				type: "workerTick",
				state: Z,
				events: []
			});
			return;
		}
		if (t.type === "time") {
			const { state: n, events: e } = qn(Z, t.cmd);
			Z = n, Zt({
				type: "workerTick",
				state: Z,
				events: e
			}), n2();
		}
	}
	ut({
		postInbound(t) {
			try {
				S4(t);
			} catch (n) {
				console.error(n);
			}
		},
		subscribe(t) {
			Xt = t, n2();
		},
		unsubscribe() {
			Xt = null, t2();
		}
	});
})();
