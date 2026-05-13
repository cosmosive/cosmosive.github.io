(function() {
	const H = Symbol("Comlink.proxy"), ne = Symbol("Comlink.endpoint"), re = Symbol("Comlink.releaseProxy"), U = Symbol("Comlink.finalizer"), R = Symbol("Comlink.thrown"), Y = (e) => typeof e == "object" && e !== null || typeof e == "function", F = new Map([["proxy", {
		canHandle: (e) => Y(e) && e[H],
		serialize(e) {
			const { port1: t, port2: n } = new MessageChannel();
			return L(e, t), [n, [n]];
		},
		deserialize(e) {
			return e.start(), ae(e);
		}
	}], ["throw", {
		canHandle: (e) => Y(e) && R in e,
		serialize({ value: e }) {
			let t;
			return e instanceof Error ? t = {
				isError: !0,
				value: {
					message: e.message,
					name: e.name,
					stack: e.stack
				}
			} : t = {
				isError: !1,
				value: e
			}, [t, []];
		},
		deserialize(e) {
			throw e.isError ? Object.assign(new Error(e.value.message), e.value) : e.value;
		}
	}]]);
	function se(e, t) {
		for (const n of e) if (t === n || n === "*" || n instanceof RegExp && n.test(t)) return !0;
		return !1;
	}
	function L(e, t = globalThis, n = ["*"]) {
		t.addEventListener("message", function s(o) {
			if (!o || !o.data) return;
			if (!se(n, o.origin)) {
				console.warn(`Invalid origin '${o.origin}' for comlink proxy`);
				return;
			}
			const { id: a, type: u, path: i } = Object.assign({ path: [] }, o.data), d = (o.data.argumentList || []).map(S);
			let c;
			try {
				const l = i.slice(0, -1).reduce((E, f) => E[f], e), p = i.reduce((E, f) => E[f], e);
				switch (u) {
					case "GET":
						c = p;
						break;
					case "SET":
						l[i.slice(-1)[0]] = S(o.data.value), c = !0;
						break;
					case "APPLY":
						c = p.apply(l, d);
						break;
					case "CONSTRUCT":
						c = de(new p(...d));
						break;
					case "ENDPOINT":
						{
							const { port1: E, port2: f } = new MessageChannel();
							L(e, f), c = le(E, [E]);
						}
						break;
					case "RELEASE":
						c = void 0;
						break;
					default: return;
				}
			} catch (l) {
				c = {
					value: l,
					[R]: 0
				};
			}
			Promise.resolve(c).catch((l) => ({
				value: l,
				[R]: 0
			})).then((l) => {
				const [p, E] = M(l);
				t.postMessage(Object.assign(Object.assign({}, p), { id: a }), E), u === "RELEASE" && (t.removeEventListener("message", s), B(t), U in e && typeof e[U] == "function" && e[U]());
			}).catch((l) => {
				const [p, E] = M({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[R]: 0
				});
				t.postMessage(Object.assign(Object.assign({}, p), { id: a }), E);
			});
		}), t.start && t.start();
	}
	function oe(e) {
		return e.constructor.name === "MessagePort";
	}
	function B(e) {
		oe(e) && e.close();
	}
	function ae(e, t) {
		const n = /* @__PURE__ */ new Map();
		return e.addEventListener("message", function(o) {
			const { data: a } = o;
			if (!a || !a.id) return;
			const u = n.get(a.id);
			if (u) try {
				u(a);
			} finally {
				n.delete(a.id);
			}
		}), O(e, n, [], t);
	}
	function I(e) {
		if (e) throw new Error("Proxy has been released and is not useable");
	}
	function G(e) {
		return y(e, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			B(e);
		});
	}
	const g = /* @__PURE__ */ new WeakMap(), T = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
		const t = (g.get(e) || 0) - 1;
		g.set(e, t), t === 0 && G(e);
	});
	function ie(e, t) {
		const n = (g.get(t) || 0) + 1;
		g.set(t, n), T && T.register(e, t, e);
	}
	function ce(e) {
		T && T.unregister(e);
	}
	function O(e, t, n = [], s = function() {}) {
		let o = !1;
		const a = new Proxy(s, {
			get(u, i) {
				if (I(o), i === re) return () => {
					ce(a), G(e), t.clear(), o = !0;
				};
				if (i === "then") {
					if (n.length === 0) return { then: () => a };
					const d = y(e, t, {
						type: "GET",
						path: n.map((c) => c.toString())
					}).then(S);
					return d.then.bind(d);
				}
				return O(e, t, [...n, i]);
			},
			set(u, i, d) {
				I(o);
				const [c, l] = M(d);
				return y(e, t, {
					type: "SET",
					path: [...n, i].map((p) => p.toString()),
					value: c
				}, l).then(S);
			},
			apply(u, i, d) {
				I(o);
				const c = n[n.length - 1];
				if (c === ne) return y(e, t, { type: "ENDPOINT" }).then(S);
				if (c === "bind") return O(e, t, n.slice(0, -1));
				const [l, p] = V(d);
				return y(e, t, {
					type: "APPLY",
					path: n.map((E) => E.toString()),
					argumentList: l
				}, p).then(S);
			},
			construct(u, i) {
				I(o);
				const [d, c] = V(i);
				return y(e, t, {
					type: "CONSTRUCT",
					path: n.map((l) => l.toString()),
					argumentList: d
				}, c).then(S);
			}
		});
		return ie(a, e), a;
	}
	function ue(e) {
		return Array.prototype.concat.apply([], e);
	}
	function V(e) {
		const t = e.map(M);
		return [t.map((n) => n[0]), ue(t.map((n) => n[1]))];
	}
	const W = /* @__PURE__ */ new WeakMap();
	function le(e, t) {
		return W.set(e, t), e;
	}
	function de(e) {
		return Object.assign(e, { [H]: !0 });
	}
	function M(e) {
		for (const [t, n] of F) if (n.canHandle(e)) {
			const [s, o] = n.serialize(e);
			return [{
				type: "HANDLER",
				name: t,
				value: s
			}, o];
		}
		return [{
			type: "RAW",
			value: e
		}, W.get(e) || []];
	}
	function S(e) {
		switch (e.type) {
			case "HANDLER": return F.get(e.name).deserialize(e.value);
			case "RAW": return e.value;
		}
	}
	function y(e, t, n, s) {
		return new Promise((o) => {
			const a = _e();
			t.set(a, o), e.start && e.start(), e.postMessage(Object.assign({ id: a }, n), s);
		});
	}
	function _e() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	const r = {
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
	}, Ee = 384399 / 149597870.7, pe = {
		[r.SUN]: {
			name: "Sun",
			type: "star",
			color: "#f5e042",
			radiusKm: 696340,
			kind: "star",
			textureResolution: 512,
			massKg: 198847e25
		},
		[r.MERCURY]: {
			name: "Mercury",
			type: "planet",
			color: "#9c8a78",
			radiusKm: 2439.7,
			kind: "barren",
			textureResolution: 192,
			massKg: 33011e19,
			semiMajorAxisAu: .387098,
			parentBodyId: r.SUN
		},
		[r.VENUS]: {
			name: "Venus",
			type: "planet",
			color: "#f0e3a0",
			radiusKm: 6051.8,
			kind: "molten",
			textureResolution: 224,
			massKg: 48675e20,
			semiMajorAxisAu: .723332,
			parentBodyId: r.SUN
		},
		[r.EARTH]: {
			name: "Earth",
			type: "planet",
			color: "#4a90d9",
			radiusKm: 6371,
			kind: "oceanic",
			textureResolution: 224,
			features: { axialSpin: "eop" },
			massKg: 597237e19,
			semiMajorAxisAu: 1.0000001,
			parentBodyId: r.SUN
		},
		[r.MARS]: {
			name: "Mars",
			type: "planet",
			color: "#c1440e",
			radiusKm: 3389.5,
			kind: "desert",
			textureResolution: 192,
			massKg: 64171e19,
			semiMajorAxisAu: 1.523679,
			parentBodyId: r.SUN
		},
		[r.JUPITER]: {
			name: "Jupiter",
			type: "planet",
			color: "#c8985a",
			radiusKm: 69911,
			kind: "gasGiant",
			textureResolution: 256,
			geometricAlbedo: .52,
			massKg: 18982e23,
			semiMajorAxisAu: 5.2044,
			parentBodyId: r.SUN
		},
		[r.SATURN]: {
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
			parentBodyId: r.SUN
		},
		[r.URANUS]: {
			name: "Uranus",
			type: "planet",
			color: "#a3d6e0",
			radiusKm: 25362,
			kind: "iceGiant",
			textureResolution: 224,
			geometricAlbedo: .51,
			massKg: 868103e20,
			semiMajorAxisAu: 19.2184,
			parentBodyId: r.SUN
		},
		[r.NEPTUNE]: {
			name: "Neptune",
			type: "planet",
			color: "#4166f5",
			radiusKm: 24622,
			kind: "iceGiant",
			textureResolution: 224,
			geometricAlbedo: .41,
			massKg: 102413e21,
			semiMajorAxisAu: 30.110387,
			parentBodyId: r.SUN
		},
		[r.PLUTO]: {
			name: "Pluto",
			type: "dwarf_planet",
			color: "#a26847",
			radiusKm: 1188.3,
			kind: "barren",
			textureResolution: 192,
			massKg: 13029e18,
			semiMajorAxisAu: 39.482,
			parentBodyId: r.SUN
		},
		[r.MOON]: {
			name: "Moon",
			type: "moon",
			color: "#cccccc",
			radiusKm: 1737,
			kind: "barren",
			textureResolution: 192,
			massKg: 7342e19,
			semiMajorAxisAu: Ee,
			parentBodyId: r.EARTH
		}
	}, N = 149597870.7, C = 648e3 / Math.PI;
	C * N / 3.2615637771694;
	const J = 1e3 / N, b = N * J;
	100 * b;
	100 / C;
	const z = 3.2615637771694, D = b * C;
	25 * D;
	function v(e) {
		return !Number.isFinite(e) || e < 0 ? 0 : e * D;
	}
	const Se = 5e4, ye = 2e3, me = Se / z, Ae = ye / z;
	v(me);
	v(Ae);
	25 * D;
	const m = 299792.458, X = 1e3;
	1 * X, 1 * m, 1e3 * m, 1e6 * m, 1e9 * m;
	1e9 * m;
	1 * X;
	const K = 1721545, h = 3181545;
	function fe(e) {
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
	const $ = Object.fromEntries(Object.entries(pe).map(([e, t]) => [e, fe(t)]));
	r.SUN, r.MERCURY, r.VENUS, r.EARTH, r.MARS, r.JUPITER, r.SATURN, r.URANUS, r.NEPTUNE, r.PLUTO, r.MOON;
	23.4392911 * Math.PI / 180;
	const q = $[r.EARTH]?.radiusKm ?? 6371, Q = $[r.SUN]?.radiusKm ?? 696340;
	q / Q;
	function Z(e) {
		return !Number.isFinite(e) || e <= 0 ? 0 : e * J;
	}
	Z(q);
	Z(Q);
	function Re(e) {
		const t = e.mode, n = t.kind === "visit" ? t.visitId : null;
		let s;
		return t.kind === "watch" || t.kind === "visit" ? s = t.watchId : s = null, {
			viewpoint: e,
			visitId: n,
			watchId: s,
			scenePosition: e.location,
			autoWatch: e.autoWatch,
			solarHeliocentricLayout: e.solarHeliocentricLayout,
			pendingTeleport: e.pendingTeleport,
			pendingOrientationSlew: e.pendingOrientationSlew,
			look: e.look,
			landedTarget: e.landedTarget
		};
	}
	const Ie = 26051303, ge = 86400;
	function ee(e) {
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
	const Te = 2451545;
	function k(e) {
		return {
			protocolVersion: Ie,
			jd: e?.jd ?? Te,
			playing: e?.playing ?? !1,
			speed: e?.speed ?? 86400
		};
	}
	Re({
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
	function te(e, t) {
		const n = ee(t);
		switch (n.type) {
			case "init": {
				const s = k({
					jd: n.jd ?? e.jd,
					playing: n.playing ?? e.playing,
					speed: n.speed ?? e.speed
				});
				return {
					state: s,
					events: [{
						type: "timeState",
						state: s
					}]
				};
			}
			case "seek": {
				if (!Number.isFinite(n.jd)) return {
					state: e,
					events: [{
						type: "error",
						code: "INVALID_JD",
						message: "seek.jd must be finite"
					}]
				};
				const s = n.jd;
				let o = s;
				(o < 1721545 || o > 3181545) && (console.warn(`[kernel/seek] JD ${o} outside supported range [${K}, ${h}] (years 0-4000 AD); clamping.`), o = Math.max(K, Math.min(h, o)));
				const a = {
					...e,
					jd: o
				}, u = [{
					type: "tick",
					jd: a.jd
				}, {
					type: "timeState",
					state: a
				}];
				if (s < 1721545 || s > 3181545) {
					const i = e.jd > 1721545 && e.jd < 3181545, d = e.jd === 1721545 && s < 1721545;
					(i || d) && u.push({
						type: "jdBoundaryReached",
						boundary: s > 3181545 ? "max" : "min"
					});
				}
				return {
					state: a,
					events: u
				};
			}
			case "step": {
				if (!e.playing) return {
					state: e,
					events: []
				};
				const s = n.deltaSeconds;
				if (!Number.isFinite(s)) return {
					state: e,
					events: [{
						type: "error",
						code: "INVALID_DELTA",
						message: "step.deltaSeconds must be finite"
					}]
				};
				const o = e.jd + e.speed * s / ge, a = Math.max(K, Math.min(h, o)), u = {
					...e,
					jd: a
				}, i = [{
					type: "tick",
					jd: a
				}, {
					type: "timeState",
					state: u
				}];
				return o > 3181545 && e.jd < 3181545 ? i.push({
					type: "jdBoundaryReached",
					boundary: "max"
				}) : o < 1721545 && e.jd > 1721545 && i.push({
					type: "jdBoundaryReached",
					boundary: "min"
				}), {
					state: u,
					events: i
				};
			}
			case "setPlaying": {
				const s = {
					...e,
					playing: n.playing
				};
				return {
					state: s,
					events: [{
						type: "timeState",
						state: s
					}]
				};
			}
			case "setRate": {
				const s = {
					...e,
					speed: n.speed
				};
				return {
					state: s,
					events: [{
						type: "timeState",
						state: s
					}]
				};
			}
			default: return {
				state: e,
				events: []
			};
		}
	}
	N / b;
	let _ = k(), P = null, A = null;
	function x(e) {
		A?.(e);
	}
	function j() {
		P != null && (clearInterval(P), P = null);
	}
	function Me() {
		j(), P = setInterval(() => {
			const { state: e, events: t } = te(_, {
				type: "step",
				deltaSeconds: .5
			});
			_ = e, x({
				type: "workerTick",
				state: _,
				events: t
			});
		}, 500);
	}
	function w() {
		_.playing ? Me() : j();
	}
	function Ne(e) {
		if (e.type === "init") {
			const t = ee({
				type: "init",
				jd: e.jd,
				playing: e.playing,
				speed: e.speed
			});
			if (t.type !== "init") return;
			_ = k({
				jd: t.jd ?? _.jd,
				playing: t.playing ?? _.playing,
				speed: t.speed ?? _.speed
			}), w(), x({
				type: "workerTick",
				state: _,
				events: []
			});
			return;
		}
		if (e.type === "time") {
			const { state: t, events: n } = te(_, e.cmd);
			_ = t, x({
				type: "workerTick",
				state: _,
				events: n
			}), w();
		}
	}
	L({
		postInbound(e) {
			try {
				Ne(e);
			} catch (t) {
				console.error(t);
			}
		},
		subscribe(e) {
			A != null && A !== e && console.warn("[simulationWorker] replacing existing outbound subscriber (double subscribe)"), A = e, w();
		},
		unsubscribe() {
			A = null, j();
		}
	});
})();
