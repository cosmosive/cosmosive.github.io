(function() {
	const Z = Symbol("Comlink.proxy"), St = Symbol("Comlink.endpoint"), dt = Symbol("Comlink.releaseProxy"), z = Symbol("Comlink.finalizer"), y = Symbol("Comlink.thrown"), W = (t) => typeof t == "object" && t !== null || typeof t == "function", Q = new Map([["proxy", {
		canHandle: (t) => W(t) && t[Z],
		serialize(t) {
			const { port1: e, port2: n } = new MessageChannel();
			return Y(t, e), [n, [n]];
		},
		deserialize(t) {
			return t.start(), Pt(t);
		}
	}], ["throw", {
		canHandle: (t) => W(t) && y in t,
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
	function gt(t, e) {
		for (const n of t) if (e === n || n === "*" || n instanceof RegExp && n.test(e)) return !0;
		return !1;
	}
	function Y(t, e = globalThis, n = ["*"]) {
		e.addEventListener("message", function s(o) {
			if (!o || !o.data) return;
			if (!gt(n, o.origin)) {
				console.warn(`Invalid origin '${o.origin}' for comlink proxy`);
				return;
			}
			const { id: a, type: c, path: r } = Object.assign({ path: [] }, o.data), l = (o.data.argumentList || []).map(g);
			let i;
			try {
				const _ = r.slice(0, -1).reduce((E, f) => E[f], t), h = r.reduce((E, f) => E[f], t);
				switch (c) {
					case "GET":
						i = h;
						break;
					case "SET":
						_[r.slice(-1)[0]] = g(o.data.value), i = !0;
						break;
					case "APPLY":
						i = h.apply(_, l);
						break;
					case "CONSTRUCT":
						i = yt(new h(...l));
						break;
					case "ENDPOINT":
						{
							const { port1: E, port2: f } = new MessageChannel();
							Y(t, f), i = mt(E, [E]);
						}
						break;
					case "RELEASE":
						i = void 0;
						break;
					default: return;
				}
			} catch (_) {
				i = {
					value: _,
					[y]: 0
				};
			}
			Promise.resolve(i).catch((_) => ({
				value: _,
				[y]: 0
			})).then((_) => {
				const [h, E] = I(_);
				e.postMessage(Object.assign(Object.assign({}, h), { id: a }), E), c === "RELEASE" && (e.removeEventListener("message", s), X(e), z in t && typeof t[z] == "function" && t[z]());
			}).catch((_) => {
				const [h, E] = I({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[y]: 0
				});
				e.postMessage(Object.assign(Object.assign({}, h), { id: a }), E);
			});
		}), e.start && e.start();
	}
	function Rt(t) {
		return t.constructor.name === "MessagePort";
	}
	function X(t) {
		Rt(t) && t.close();
	}
	function Pt(t, e) {
		const n = /* @__PURE__ */ new Map();
		return t.addEventListener("message", function(o) {
			const { data: a } = o;
			if (!a || !a.id) return;
			const c = n.get(a.id);
			if (c) try {
				c(a);
			} finally {
				n.delete(a.id);
			}
		}), H(t, n, [], e);
	}
	function A(t) {
		if (t) throw new Error("Proxy has been released and is not useable");
	}
	function $(t) {
		return P(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			X(t);
		});
	}
	const C = /* @__PURE__ */ new WeakMap(), D = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const e = (C.get(t) || 0) - 1;
		C.set(t, e), e === 0 && $(t);
	});
	function Tt(t, e) {
		const n = (C.get(e) || 0) + 1;
		C.set(e, n), D && D.register(t, e, t);
	}
	function Mt(t) {
		D && D.unregister(t);
	}
	function H(t, e, n = [], s = function() {}) {
		let o = !1;
		const a = new Proxy(s, {
			get(c, r) {
				if (A(o), r === dt) return () => {
					Mt(a), $(t), e.clear(), o = !0;
				};
				if (r === "then") {
					if (n.length === 0) return { then: () => a };
					const l = P(t, e, {
						type: "GET",
						path: n.map((i) => i.toString())
					}).then(g);
					return l.then.bind(l);
				}
				return H(t, e, [...n, r]);
			},
			set(c, r, l) {
				A(o);
				const [i, _] = I(l);
				return P(t, e, {
					type: "SET",
					path: [...n, r].map((h) => h.toString()),
					value: i
				}, _).then(g);
			},
			apply(c, r, l) {
				A(o);
				const i = n[n.length - 1];
				if (i === St) return P(t, e, { type: "ENDPOINT" }).then(g);
				if (i === "bind") return H(t, e, n.slice(0, -1));
				const [_, h] = J(l);
				return P(t, e, {
					type: "APPLY",
					path: n.map((E) => E.toString()),
					argumentList: _
				}, h).then(g);
			},
			construct(c, r) {
				A(o);
				const [l, i] = J(r);
				return P(t, e, {
					type: "CONSTRUCT",
					path: n.map((_) => _.toString()),
					argumentList: l
				}, i).then(g);
			}
		});
		return Tt(a, t), a;
	}
	function bt(t) {
		return Array.prototype.concat.apply([], t);
	}
	function J(t) {
		const e = t.map(I);
		return [e.map((n) => n[0]), bt(e.map((n) => n[1]))];
	}
	const tt = /* @__PURE__ */ new WeakMap();
	function mt(t, e) {
		return tt.set(t, e), t;
	}
	function yt(t) {
		return Object.assign(t, { [Z]: !0 });
	}
	function I(t) {
		for (const [e, n] of Q) if (n.canHandle(t)) {
			const [s, o] = n.serialize(t);
			return [{
				type: "HANDLER",
				name: e,
				value: s
			}, o];
		}
		return [{
			type: "RAW",
			value: t
		}, tt.get(t) || []];
	}
	function g(t) {
		switch (t.type) {
			case "HANDLER": return Q.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function P(t, e, n, s) {
		return new Promise((o) => {
			const a = At();
			e.set(a, o), t.start && t.start(), t.postMessage(Object.assign({ id: a }, n), s);
		});
	}
	function At() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	2 * Math.PI;
	Math.PI / 180;
	180 / Math.PI;
	const F = 86400, Ct = 365.25, S = 299792.458, v = S * Ct * F, N = 149597870.7, G = 648e3 / Math.PI, et = G * N / v, It = [
		[
			-.0548755604,
			-.8734371052,
			-.4838350155
		],
		[
			.4941094279,
			-.444829594,
			.7469822482
		],
		[
			-.8676661359,
			-.1980763734,
			.4559837958
		]
	], Nt = 1e3, xt = S, Ot = S ** Math.sqrt(Math.E), Ut = S ** 2, Kt = S ** Math.E, kt = [
		1,
		Nt,
		xt,
		Ot
	], Lt = [Ut, Kt], nt = [...kt, ...Lt];
	nt[nt.length - 1];
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
	const u = (t) => t >>> 0;
	function ot(t, e, n) {
		const s = t, o = e;
		if (n === 0) return {
			lo: s,
			hi: o
		};
		if (n < 32) {
			const r = 32 - n;
			return {
				lo: u(s << n | o >>> r),
				hi: u(o << n | s >>> r)
			};
		}
		const a = n - 32, c = 32 - a;
		return {
			lo: u(o << a | s >>> c),
			hi: u(s << a | o >>> c)
		};
	}
	function wt(t, e, n, s) {
		const o = u(t + n), a = o < t ? 1 : 0;
		return {
			lo: o,
			hi: u(e + s + a)
		};
	}
	function T(t, e, n) {
		const s = t & 65535, o = t >>> 16 & 65535, a = e & 65535, c = e >>> 16 & 65535, r = n & 65535, l = n >>> 16 & 65535;
		let i = s * r, _ = s * l + o * r, h = s * 0 + o * l + a * r, E = o * 0 + a * l + c * r;
		return _ += i >>> 16, i &= 65535, h += _ >>> 16, _ &= 65535, E += h >>> 16, h &= 65535, {
			lo: u((_ & 65535) << 16 | i),
			hi: u((E & 65535) << 16 | h & 65535)
		};
	}
	function zt(t) {
		const e = wt(t.lo, t.hi, 2135587861, 2654435769);
		t.lo = e.lo, t.hi = e.hi;
		let n = {
			lo: t.lo,
			hi: t.hi
		}, s = n.hi >>> 30, o = u(n.lo >>> 30 | (n.hi & 1073741823) << 2);
		n = {
			lo: u(n.lo ^ o),
			hi: u(n.hi ^ s)
		};
		const a = T(n.lo, n.hi, 484763065), c = T(n.lo, 0, 3210233709);
		n = {
			lo: a.lo,
			hi: u(a.hi + c.lo)
		}, s = n.hi >>> 27, o = u(n.lo >>> 27 | (n.hi & 134217727) << 5), n = {
			lo: u(n.lo ^ o),
			hi: u(n.hi ^ s)
		};
		const r = T(n.lo, n.hi, 2496678331), l = T(n.lo, 0, 2496678331);
		return n = {
			lo: r.lo,
			hi: u(r.hi + l.lo)
		}, s = n.hi >>> 31, o = u(n.lo >>> 31 | (n.hi & 2147483647) << 1), n = {
			lo: u(n.lo ^ o),
			hi: u(n.hi ^ s)
		}, n;
	}
	function Yt(t) {
		let e, n;
		typeof t == "bigint" ? (e = u(Number(t & 4294967295n)), n = u(Number(t >> 32n & 4294967295n))) : (e = u(t), n = u(Math.floor(t / 4294967296)));
		const s = {
			lo: e,
			hi: n
		}, o = new Uint32Array(8);
		for (let a = 0; a < 4; a += 1) {
			const c = zt(s);
			o[a * 2] = c.lo, o[a * 2 + 1] = c.hi;
		}
		return o.every((a) => a === 0) && (o[0] = 1), { s: o };
	}
	function Ht(t) {
		const e = t.s, n = e[2], s = e[3], o = T(n, s, 5), a = ot(o.lo, o.hi, 7), c = T(a.lo, a.hi, 9).lo, r = u(n << 17), l = u(s << 17 | n >>> 15);
		e[4] = u(e[4] ^ e[0]), e[5] = u(e[5] ^ e[1]), e[6] = u(e[6] ^ e[2]), e[7] = u(e[7] ^ e[3]), e[2] = u(e[2] ^ e[4]), e[3] = u(e[3] ^ e[5]), e[0] = u(e[0] ^ e[6]), e[1] = u(e[1] ^ e[7]), e[4] = u(e[4] ^ r), e[5] = u(e[5] ^ l);
		const i = ot(e[6], e[7], 45);
		return e[6] = i.lo, e[7] = i.hi, c;
	}
	function Ft(t) {
		return Ht(t) / 4294967296;
	}
	typeof TextEncoder < "u" && new TextEncoder();
	var x = (t, e, n) => Object.defineProperty(t, e, {
		value: n,
		enumerable: !1,
		writable: !0,
		configurable: !0
	}), vt = Symbol.for("bitecs-relation"), Gt = Symbol.for("bitecs-pairTarget"), Vt = Symbol.for("bitecs-isPairComponent"), b = Symbol.for("bitecs-relationData"), st = () => {
		let t = {
			pairsMap: /* @__PURE__ */ new Map(),
			initStore: void 0,
			exclusiveRelation: !1,
			autoRemoveSubject: !1,
			onTargetRemoved: void 0
		}, e = (n) => {
			if (n === void 0) throw Error("Relation target is undefined");
			let s = n === "*" ? Zt : n;
			if (!t.pairsMap.has(s)) {
				let o = t.initStore ? t.initStore(n) : {};
				x(o, vt, e), x(o, Gt, s), x(o, Vt, !0), t.pairsMap.set(s, o);
			}
			return t.pairsMap.get(s);
		};
		return x(e, b, t), e;
	}, jt = Symbol.for("bitecs-wildcard");
	function Bt() {
		let t = st();
		return Object.defineProperty(t, jt, {
			value: !0,
			enumerable: !1,
			writable: !1,
			configurable: !1
		}), t;
	}
	function qt() {
		let t = Symbol.for("bitecs-global-wildcard");
		return globalThis[t] || (globalThis[t] = Bt()), globalThis[t];
	}
	var Zt = qt();
	function Wt() {
		return st();
	}
	function Qt() {
		let t = Symbol.for("bitecs-global-isa");
		return globalThis[t] || (globalThis[t] = Wt()), globalThis[t];
	}
	Qt();
	const ct = 1e3 / N, K = ct * v * et, ae = 695700, re = 6378.137;
	function it(t) {
		return !Number.isFinite(t) || t <= 0 ? 0 : t * ct;
	}
	it(re);
	it(ae);
	const lt = It;
	100 / G;
	1.1 * G;
	25 * K;
	25 * K;
	const p = {
		sunRadiusKpc: 8.18,
		diskScaleRKpc: 2.6,
		diskScaleZThinKpc: .3,
		diskScaleZThickKpc: .9,
		thickFraction: .12,
		bulgeFraction: .15,
		bulgeSigmaKpc: .55,
		bulgeSigmaZKpc: .4,
		maxSunDistKpc: 22,
		packetAbsMag: -5
	};
	function ce(t) {
		const e = Yt(t);
		return () => Ft(e);
	}
	function B(t) {
		const e = Math.max(t(), 1e-12), n = t();
		return Math.sqrt(-2 * Math.log(e)) * Math.cos(2 * Math.PI * n);
	}
	function ie(t) {
		const e = p.sunRadiusKpc;
		if (t() < p.bulgeFraction) return {
			x: e + B(t) * p.bulgeSigmaKpc,
			y: B(t) * p.bulgeSigmaKpc,
			z: B(t) * p.bulgeSigmaZKpc
		};
		const n = 1 - t(), s = 1 - t(), o = -p.diskScaleRKpc * (Math.log(n) + Math.log(s)), a = t() * Math.PI * 2, c = -(t() < p.thickFraction ? p.diskScaleZThickKpc : p.diskScaleZThinKpc) * Math.log(1 - t()) * (t() < .5 ? -1 : 1);
		return {
			x: e + o * Math.cos(a),
			y: o * Math.sin(a),
			z: c
		};
	}
	function le(t) {
		const e = t.x - p.sunRadiusKpc;
		return {
			R: Math.hypot(e, t.y),
			Z: t.z
		};
	}
	function ue(t, e, n) {
		const s = lt, o = s[0][0] * t + s[1][0] * e + s[2][0] * n, a = s[0][1] * t + s[1][1] * e + s[2][1] * n, c = s[0][2] * t + s[1][2] * e + s[2][2] * n, r = Math.hypot(o, a, c) || 1;
		return {
			x: o / r,
			y: a / r,
			z: c / r
		};
	}
	function _e(t, e, n) {
		const s = 1 / K, o = t * s / 1e3, a = e * s / 1e3, c = n * s / 1e3, r = lt;
		return {
			x: r[0][0] * o + r[0][1] * a + r[0][2] * c,
			y: r[1][0] * o + r[1][1] * a + r[1][2] * c,
			z: r[2][0] * o + r[2][1] * a + r[2][2] * c
		};
	}
	const R = {
		midplaneTauPerKpc: .18,
		scaleRKpc: 3,
		scaleZKpc: .11,
		steps: 24
	}, ut = {
		r: .78,
		g: 1,
		b: 1.32
	}, he = 1.2, Ee = [
		{
			name: "Aquila Rift",
			l: 30,
			b: 2,
			distPc: 150,
			radiusPc: 55,
			peakTauCore: 3.5,
			elongation: 2.6,
			paDeg: 0
		},
		{
			name: "Cygnus Rift",
			l: 75,
			b: 0,
			distPc: 170,
			radiusPc: 60,
			peakTauCore: 3,
			elongation: 2.6,
			paDeg: 0
		},
		{
			name: "Coalsack",
			l: 303,
			b: 0,
			distPc: 180,
			radiusPc: 18,
			peakTauCore: 4,
			elongation: 1.3,
			paDeg: 0
		},
		{
			name: "Rho Ophiuchi",
			l: 354,
			b: 16,
			distPc: 140,
			radiusPc: 22,
			peakTauCore: 3,
			elongation: 1.6,
			paDeg: 70
		},
		{
			name: "Taurus Dark Cloud",
			l: 170,
			b: -15,
			distPc: 140,
			radiusPc: 28,
			peakTauCore: 2.2,
			elongation: 2,
			paDeg: 0
		},
		{
			name: "Pipe Nebula",
			l: 0,
			b: 4.5,
			distPc: 145,
			radiusPc: 16,
			peakTauCore: 2.5,
			elongation: 2.8,
			paDeg: 0
		},
		{
			name: "Lupus",
			l: 339,
			b: 16,
			distPc: 150,
			radiusPc: 18,
			peakTauCore: 2,
			elongation: 2,
			paDeg: 30
		},
		{
			name: "Chamaeleon",
			l: 300,
			b: -16,
			distPc: 160,
			radiusPc: 14,
			peakTauCore: 2,
			elongation: 1.8,
			paDeg: 0
		},
		{
			name: "Vela Molecular Ridge",
			l: 265,
			b: 1,
			distPc: 700,
			radiusPc: 30,
			peakTauCore: 1.8,
			elongation: 2.5,
			paDeg: 0
		},
		{
			name: "Musca (Dark Doodad)",
			l: 301,
			b: -9,
			distPc: 160,
			radiusPc: 3,
			peakTauCore: 1.4,
			elongation: 6,
			paDeg: 55
		},
		{
			name: "Serpens",
			l: 32,
			b: 5,
			distPc: 440,
			radiusPc: 14,
			peakTauCore: 2,
			elongation: 2,
			paDeg: 10
		},
		{
			name: "Corona Australis",
			l: 0,
			b: -18,
			distPc: 150,
			radiusPc: 6,
			peakTauCore: 2.2,
			elongation: 3.5,
			paDeg: 70
		},
		{
			name: "Orion A",
			l: 209,
			b: -19.5,
			distPc: 410,
			radiusPc: 9,
			peakTauCore: 3,
			elongation: 4,
			paDeg: 35
		},
		{
			name: "Perseus Cloud",
			l: 159,
			b: -20,
			distPc: 300,
			radiusPc: 14,
			peakTauCore: 2,
			elongation: 2.6,
			paDeg: 25
		}
	];
	function fe(t) {
		const e = t.l * Math.PI / 180, n = t.b * Math.PI / 180, s = t.distPc / 1e3, o = t.radiusPc / 1e3, a = Math.max(1, t.elongation ?? 1), c = o * a, r = (t.paDeg ?? 0) * Math.PI / 180, l = Math.sin(e), i = Math.cos(e), _ = Math.sin(n), h = Math.cos(n), E = Math.cos(r), f = Math.sin(r), d = E * -l + f * (-_ * i), M = E * i + f * (-_ * l), m = f * h, k = 1 / (o * o), L = 1 / (c * c) - k, w = t.peakTauCore / (o * Math.sqrt(2 * Math.PI) * a);
		return {
			cx: s * h * i,
			cy: s * h * l,
			cz: s * _,
			dx: d,
			dy: M,
			dz: m,
			invM: k,
			anis: L,
			peakDensity: w
		};
	}
	const pe = Ee.map(fe), _t = 5, { SQRT1_2: Se } = Math, de = Math.sqrt(2 * Math.PI);
	function ht(t) {
		const e = t < 0 ? -1 : 1, n = Math.abs(t), s = 1 / (1 + .3275911 * n);
		return e * (1 - ((((1.061405429 * s - 1.453152027) * s + 1.421413741) * s - .284496736) * s + .254829592) * s * Math.exp(-n * n));
	}
	function ge(t, e, n) {
		const { R: s, Z: o } = le({
			x: t,
			y: e,
			z: n
		});
		return R.midplaneTauPerKpc * Math.exp(-(s - p.sunRadiusKpc) / R.scaleRKpc) * Math.exp(-Math.abs(o) / R.scaleZKpc);
	}
	function Re(t, e, n, s, o, a, c, r) {
		const l = t.cx - e, i = t.cy - n, _ = t.cz - s, h = l * o + i * a + _ * c, E = o * t.dx + a * t.dy + c * t.dz, f = l * t.dx + i * t.dy + _ * t.dz, d = l * l + i * i + _ * _, M = t.invM + t.anis * E * E, m = t.invM * h + t.anis * E * f, k = t.invM * d + t.anis * f * f, L = Math.max(0, k - m * m / M);
		if (L > _t * _t) return 0;
		const w = m / M, ft = Math.sqrt(M) * Se, pt = .5 * (ht((r - w) * ft) - ht(-w * ft));
		if (pt <= 0) return 0;
		const me = 1 / Math.sqrt(M);
		return t.peakDensity * de * me * Math.exp(-.5 * L) * pt;
	}
	function Pe(t, e) {
		const n = e.x - t.x, s = e.y - t.y, o = e.z - t.z, a = Math.hypot(n, s, o);
		if (a === 0) return 0;
		let c = 0;
		for (let h = 0; h < R.steps; h += 1) {
			const E = (h + .5) / R.steps;
			c += ge(t.x + n * E, t.y + s * E, t.z + o * E);
		}
		let r = c * a / R.steps;
		const l = n / a, i = s / a, _ = o / a;
		for (const h of pe) r += Re(h, t.x, t.y, t.z, l, i, _, a);
		return r;
	}
	R.steps;
	function Te(t) {
		const e = Math.max(0, t), n = Math.min(e, he);
		return {
			dimMag: 1.086 * e,
			rgbScale: [
				Math.exp(-n * (ut.r - 1)),
				1,
				Math.exp(-n * (ut.b - 1))
			]
		};
	}
	const q = [
		1.15,
		1.02,
		.82
	], Et = 1e3, Me = 1e3 / (et * Et);
	function be(t) {
		const e = ce(t.seed), n = t.viewerScenePos, s = n && (n.x !== 0 || n.y !== 0 || n.z !== 0) ? _e(n.x, n.y, n.z) : {
			x: 0,
			y: 0,
			z: 0
		}, o = [], a = [], c = [];
		for (let r = 0; r < t.pointBudget; r += 1) {
			const l = ie(e), i = Math.hypot(l.x, l.y, l.z);
			if (i >= Me && i <= p.maxSunDistKpc) {
				const _ = i * Et, h = ue(l.x, l.y, l.z), E = _ * K, f = p.packetAbsMag + 5 * Math.log10(_ / 10), d = Te(Pe(s, l));
				o.push(h.x * E, h.y * E, h.z * E), a.push(f + d.dimMag), c.push(q[0] * d.rgbScale[0], q[1] * d.rgbScale[1], q[2] * d.rgbScale[2]);
			}
		}
		return {
			positions: new Float32Array(o),
			mag: new Float32Array(a),
			colors: new Float32Array(c),
			count: a.length
		};
	}
	Y({ async buildBandField(t) {
		return be(t);
	} });
})();
