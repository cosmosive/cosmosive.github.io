(function() {
	const Z = Symbol("Comlink.proxy"), pt = Symbol("Comlink.endpoint"), St = Symbol("Comlink.releaseProxy"), z = Symbol("Comlink.finalizer"), M = Symbol("Comlink.thrown"), W = (t) => typeof t == "object" && t !== null || typeof t == "function", Q = new Map([["proxy", {
		canHandle: (t) => W(t) && t[Z],
		serialize(t) {
			const { port1: e, port2: n } = new MessageChannel();
			return Y(t, e), [n, [n]];
		},
		deserialize(t) {
			return t.start(), Rt(t);
		}
	}], ["throw", {
		canHandle: (t) => W(t) && M in t,
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
	function dt(t, e) {
		for (const n of t) if (e === n || n === "*" || n instanceof RegExp && n.test(e)) return !0;
		return !1;
	}
	function Y(t, e = globalThis, n = ["*"]) {
		e.addEventListener("message", function s(o) {
			if (!o || !o.data) return;
			if (!dt(n, o.origin)) {
				console.warn(`Invalid origin '${o.origin}' for comlink proxy`);
				return;
			}
			const { id: a, type: c, path: r } = Object.assign({ path: [] }, o.data), l = (o.data.argumentList || []).map(g);
			let i;
			try {
				const _ = r.slice(0, -1).reduce((f, E) => f[E], t), h = r.reduce((f, E) => f[E], t);
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
							const { port1: f, port2: E } = new MessageChannel();
							Y(t, E), i = mt(f, [f]);
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
					[M]: 0
				};
			}
			Promise.resolve(i).catch((_) => ({
				value: _,
				[M]: 0
			})).then((_) => {
				const [h, f] = I(_);
				e.postMessage(Object.assign(Object.assign({}, h), { id: a }), f), c === "RELEASE" && (e.removeEventListener("message", s), X(e), z in t && typeof t[z] == "function" && t[z]());
			}).catch((_) => {
				const [h, f] = I({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[M]: 0
				});
				e.postMessage(Object.assign(Object.assign({}, h), { id: a }), f);
			});
		}), e.start && e.start();
	}
	function gt(t) {
		return t.constructor.name === "MessagePort";
	}
	function X(t) {
		gt(t) && t.close();
	}
	function Rt(t, e) {
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
	function Pt(t, e) {
		const n = (C.get(e) || 0) + 1;
		C.set(e, n), D && D.register(t, e, t);
	}
	function Tt(t) {
		D && D.unregister(t);
	}
	function H(t, e, n = [], s = function() {}) {
		let o = !1;
		const a = new Proxy(s, {
			get(c, r) {
				if (A(o), r === St) return () => {
					Tt(a), $(t), e.clear(), o = !0;
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
				if (i === pt) return P(t, e, { type: "ENDPOINT" }).then(g);
				if (i === "bind") return H(t, e, n.slice(0, -1));
				const [_, h] = J(l);
				return P(t, e, {
					type: "APPLY",
					path: n.map((f) => f.toString()),
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
		return Pt(a, t), a;
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
			const a = Mt();
			e.set(a, o), t.start && t.start(), t.postMessage(Object.assign({ id: a }, n), s);
		});
	}
	function Mt() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	2 * Math.PI;
	Math.PI / 180;
	180 / Math.PI;
	const F = 86400, At = 365.25, S = 299792.458, v = S * At * F, x = 149597870.7, G = 648e3 / Math.PI, et = G * x / v, Dt = [
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
	], It = 1e3, xt = S, Nt = S ** Math.sqrt(Math.E), Ot = S ** 2, Ut = S ** Math.E, kt = [
		1,
		It,
		xt,
		Nt
	], Kt = [Ot, Ut];
	[...kt, ...Kt];
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
	function nt(t, e, n) {
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
	function Lt(t, e, n, s) {
		const o = u(t + n), a = o < t ? 1 : 0;
		return {
			lo: o,
			hi: u(e + s + a)
		};
	}
	function T(t, e, n) {
		const s = t & 65535, o = t >>> 16 & 65535, a = e & 65535, c = e >>> 16 & 65535, r = n & 65535, l = n >>> 16 & 65535;
		let i = s * r, _ = s * l + o * r, h = s * 0 + o * l + a * r, f = o * 0 + a * l + c * r;
		return _ += i >>> 16, i &= 65535, h += _ >>> 16, _ &= 65535, f += h >>> 16, h &= 65535, {
			lo: u((_ & 65535) << 16 | i),
			hi: u((f & 65535) << 16 | h & 65535)
		};
	}
	function wt(t) {
		const e = Lt(t.lo, t.hi, 2135587861, 2654435769);
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
	function zt(t) {
		let e, n;
		typeof t == "bigint" ? (e = u(Number(t & 4294967295n)), n = u(Number(t >> 32n & 4294967295n))) : (e = u(t), n = u(Math.floor(t / 4294967296)));
		const s = {
			lo: e,
			hi: n
		}, o = new Uint32Array(8);
		for (let a = 0; a < 4; a += 1) {
			const c = wt(s);
			o[a * 2] = c.lo, o[a * 2 + 1] = c.hi;
		}
		return o.every((a) => a === 0) && (o[0] = 1), { s: o };
	}
	function Yt(t) {
		const e = t.s, n = e[2], s = e[3], o = T(n, s, 5), a = nt(o.lo, o.hi, 7), c = T(a.lo, a.hi, 9).lo, r = u(n << 17), l = u(s << 17 | n >>> 15);
		e[4] = u(e[4] ^ e[0]), e[5] = u(e[5] ^ e[1]), e[6] = u(e[6] ^ e[2]), e[7] = u(e[7] ^ e[3]), e[2] = u(e[2] ^ e[4]), e[3] = u(e[3] ^ e[5]), e[0] = u(e[0] ^ e[6]), e[1] = u(e[1] ^ e[7]), e[4] = u(e[4] ^ r), e[5] = u(e[5] ^ l);
		const i = nt(e[6], e[7], 45);
		return e[6] = i.lo, e[7] = i.hi, c;
	}
	function Ht(t) {
		return Yt(t) / 4294967296;
	}
	typeof TextEncoder < "u" && new TextEncoder();
	var N = (t, e, n) => Object.defineProperty(t, e, {
		value: n,
		enumerable: !1,
		writable: !0,
		configurable: !0
	}), Ft = Symbol.for("bitecs-relation"), vt = Symbol.for("bitecs-pairTarget"), Gt = Symbol.for("bitecs-isPairComponent"), m = Symbol.for("bitecs-relationData"), ot = () => {
		let t = {
			pairsMap: /* @__PURE__ */ new Map(),
			initStore: void 0,
			exclusiveRelation: !1,
			autoRemoveSubject: !1,
			onTargetRemoved: void 0
		}, e = (n) => {
			if (n === void 0) throw Error("Relation target is undefined");
			let s = n === "*" ? qt : n;
			if (!t.pairsMap.has(s)) {
				let o = t.initStore ? t.initStore(n) : {};
				N(o, Ft, e), N(o, vt, s), N(o, Gt, !0), t.pairsMap.set(s, o);
			}
			return t.pairsMap.get(s);
		};
		return N(e, m, t), e;
	}, Vt = Symbol.for("bitecs-wildcard");
	function jt() {
		let t = ot();
		return Object.defineProperty(t, Vt, {
			value: !0,
			enumerable: !1,
			writable: !1,
			configurable: !1
		}), t;
	}
	function Bt() {
		let t = Symbol.for("bitecs-global-wildcard");
		return globalThis[t] || (globalThis[t] = jt()), globalThis[t];
	}
	var qt = Bt();
	function Zt() {
		return ot();
	}
	function Wt() {
		let t = Symbol.for("bitecs-global-isa");
		return globalThis[t] || (globalThis[t] = Zt()), globalThis[t];
	}
	Wt();
	const rt = 1e3 / x, k = rt * v * et, se = 695700, ae = 6378.137;
	function ct(t) {
		return !Number.isFinite(t) || t <= 0 ? 0 : t * rt;
	}
	ct(ae);
	ct(se);
	const it = Dt;
	100 / G;
	1.1 * G;
	25 * k;
	25 * k;
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
	function re(t) {
		const e = zt(t);
		return () => Ht(e);
	}
	function B(t) {
		const e = Math.max(t(), 1e-12), n = t();
		return Math.sqrt(-2 * Math.log(e)) * Math.cos(2 * Math.PI * n);
	}
	function ce(t) {
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
	function ie(t) {
		const e = t.x - p.sunRadiusKpc;
		return {
			R: Math.hypot(e, t.y),
			Z: t.z
		};
	}
	function le(t, e, n) {
		const s = it, o = s[0][0] * t + s[1][0] * e + s[2][0] * n, a = s[0][1] * t + s[1][1] * e + s[2][1] * n, c = s[0][2] * t + s[1][2] * e + s[2][2] * n, r = Math.hypot(o, a, c) || 1;
		return {
			x: o / r,
			y: a / r,
			z: c / r
		};
	}
	function ue(t, e, n) {
		const s = 1 / k, o = t * s / 1e3, a = e * s / 1e3, c = n * s / 1e3, r = it;
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
	}, lt = {
		r: .78,
		g: 1,
		b: 1.32
	}, _e = 1.2, he = [
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
		const e = t.l * Math.PI / 180, n = t.b * Math.PI / 180, s = t.distPc / 1e3, o = t.radiusPc / 1e3, a = Math.max(1, t.elongation ?? 1), c = o * a, r = (t.paDeg ?? 0) * Math.PI / 180, l = Math.sin(e), i = Math.cos(e), _ = Math.sin(n), h = Math.cos(n), f = Math.cos(r), E = Math.sin(r), d = f * -l + E * (-_ * i), b = f * i + E * (-_ * l), y = E * h, K = 1 / (o * o), L = 1 / (c * c) - K, w = t.peakTauCore / (o * Math.sqrt(2 * Math.PI) * a);
		return {
			cx: s * h * i,
			cy: s * h * l,
			cz: s * _,
			dx: d,
			dy: b,
			dz: y,
			invM: K,
			anis: L,
			peakDensity: w
		};
	}
	const Ee = he.map(fe), ut = 5, { SQRT1_2: pe } = Math, Se = Math.sqrt(2 * Math.PI);
	function _t(t) {
		const e = t < 0 ? -1 : 1, n = Math.abs(t), s = 1 / (1 + .3275911 * n);
		return e * (1 - ((((1.061405429 * s - 1.453152027) * s + 1.421413741) * s - .284496736) * s + .254829592) * s * Math.exp(-n * n));
	}
	function de(t, e, n) {
		const { R: s, Z: o } = ie({
			x: t,
			y: e,
			z: n
		});
		return R.midplaneTauPerKpc * Math.exp(-(s - p.sunRadiusKpc) / R.scaleRKpc) * Math.exp(-Math.abs(o) / R.scaleZKpc);
	}
	function ge(t, e, n, s, o, a, c, r) {
		const l = t.cx - e, i = t.cy - n, _ = t.cz - s, h = l * o + i * a + _ * c, f = o * t.dx + a * t.dy + c * t.dz, E = l * t.dx + i * t.dy + _ * t.dz, d = l * l + i * i + _ * _, b = t.invM + t.anis * f * f, y = t.invM * h + t.anis * f * E, K = t.invM * d + t.anis * E * E, L = Math.max(0, K - y * y / b);
		if (L > ut * ut) return 0;
		const w = y / b, ft = Math.sqrt(b) * pe, Et = .5 * (_t((r - w) * ft) - _t(-w * ft));
		if (Et <= 0) return 0;
		const me = 1 / Math.sqrt(b);
		return t.peakDensity * Se * me * Math.exp(-.5 * L) * Et;
	}
	function Re(t, e) {
		const n = e.x - t.x, s = e.y - t.y, o = e.z - t.z, a = Math.hypot(n, s, o);
		if (a === 0) return 0;
		let c = 0;
		for (let h = 0; h < R.steps; h += 1) {
			const f = (h + .5) / R.steps;
			c += de(t.x + n * f, t.y + s * f, t.z + o * f);
		}
		let r = c * a / R.steps;
		const l = n / a, i = s / a, _ = o / a;
		for (const h of Ee) r += ge(h, t.x, t.y, t.z, l, i, _, a);
		return r;
	}
	R.steps;
	function Pe(t) {
		const e = Math.max(0, t), n = Math.min(e, _e);
		return {
			dimMag: 1.086 * e,
			rgbScale: [
				Math.exp(-n * (lt.r - 1)),
				1,
				Math.exp(-n * (lt.b - 1))
			]
		};
	}
	const q = [
		1.15,
		1.02,
		.82
	], ht = 1e3, Te = 1e3 / (et * ht);
	function be(t) {
		const e = re(t.seed), n = t.viewerScenePos, s = n && (n.x !== 0 || n.y !== 0 || n.z !== 0) ? ue(n.x, n.y, n.z) : {
			x: 0,
			y: 0,
			z: 0
		}, o = [], a = [], c = [];
		for (let r = 0; r < t.pointBudget; r += 1) {
			const l = ce(e), i = Math.hypot(l.x, l.y, l.z);
			if (i >= Te && i <= p.maxSunDistKpc) {
				const _ = i * ht, h = le(l.x, l.y, l.z), f = _ * k, E = p.packetAbsMag + 5 * Math.log10(_ / 10), d = Pe(Re(s, l));
				o.push(h.x * f, h.y * f, h.z * f), a.push(E + d.dimMag), c.push(q[0] * d.rgbScale[0], q[1] * d.rgbScale[1], q[2] * d.rgbScale[2]);
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
