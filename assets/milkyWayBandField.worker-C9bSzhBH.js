(function() {
	const V = Symbol("Comlink.proxy"), St = Symbol("Comlink.endpoint"), dt = Symbol("Comlink.releaseProxy"), K = Symbol("Comlink.finalizer"), b = Symbol("Comlink.thrown"), B = (t) => typeof t == "object" && t !== null || typeof t == "function", j = /* @__PURE__ */ new Map([["proxy", {
		canHandle: (t) => B(t) && t[V],
		serialize(t) {
			const { port1: n, port2: e } = new MessageChannel();
			return L(t, n), [e, [e]];
		},
		deserialize(t) {
			return t.start(), Pt(t);
		}
	}], ["throw", {
		canHandle: (t) => B(t) && b in t,
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
	function gt(t, n) {
		for (const e of t) if (n === e || e === "*" || e instanceof RegExp && e.test(n)) return !0;
		return !1;
	}
	function L(t, n = globalThis, e = ["*"]) {
		n.addEventListener("message", function s(o) {
			if (!o || !o.data) return;
			if (!gt(e, o.origin)) {
				console.warn(`Invalid origin '${o.origin}' for comlink proxy`);
				return;
			}
			const { id: a, type: c, path: r } = Object.assign({ path: [] }, o.data), l = (o.data.argumentList || []).map(g);
			let i;
			try {
				const _ = r.slice(0, -1).reduce((h, f) => h[f], t), E = r.reduce((h, f) => h[f], t);
				switch (c) {
					case "GET":
						i = E;
						break;
					case "SET":
						_[r.slice(-1)[0]] = g(o.data.value), i = !0;
						break;
					case "APPLY":
						i = E.apply(_, l);
						break;
					case "CONSTRUCT":
						i = yt(new E(...l));
						break;
					case "ENDPOINT":
						{
							const { port1: h, port2: f } = new MessageChannel();
							L(t, f), i = bt(h, [h]);
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
					[b]: 0
				};
			}
			Promise.resolve(i).catch((_) => ({
				value: _,
				[b]: 0
			})).then((_) => {
				const [E, h] = D(_);
				n.postMessage(Object.assign(Object.assign({}, E), { id: a }), h), c === "RELEASE" && (n.removeEventListener("message", s), q(n), K in t && typeof t[K] == "function" && t[K]());
			}).catch((_) => {
				const [E, h] = D({
					value: /* @__PURE__ */ new TypeError("Unserializable return value"),
					[b]: 0
				});
				n.postMessage(Object.assign(Object.assign({}, E), { id: a }), h);
			});
		}), n.start && n.start();
	}
	function Mt(t) {
		return t.constructor.name === "MessagePort";
	}
	function q(t) {
		Mt(t) && t.close();
	}
	function Pt(t, n) {
		const e = /* @__PURE__ */ new Map();
		return t.addEventListener("message", function(o) {
			const { data: a } = o;
			if (!a || !a.id) return;
			const c = e.get(a.id);
			if (c) try {
				c(a);
			} finally {
				e.delete(a.id);
			}
		}), w(t, e, [], n);
	}
	function y(t) {
		if (t) throw new Error("Proxy has been released and is not useable");
	}
	function Z(t) {
		return P(t, /* @__PURE__ */ new Map(), { type: "RELEASE" }).then(() => {
			q(t);
		});
	}
	const A = /* @__PURE__ */ new WeakMap(), C = "FinalizationRegistry" in globalThis && new FinalizationRegistry((t) => {
		const n = (A.get(t) || 0) - 1;
		A.set(t, n), n === 0 && Z(t);
	});
	function Rt(t, n) {
		const e = (A.get(n) || 0) + 1;
		A.set(n, e), C && C.register(t, n, t);
	}
	function Tt(t) {
		C && C.unregister(t);
	}
	function w(t, n, e = [], s = function() {}) {
		let o = !1;
		const a = new Proxy(s, {
			get(c, r) {
				if (y(o), r === dt) return () => {
					Tt(a), Z(t), n.clear(), o = !0;
				};
				if (r === "then") {
					if (e.length === 0) return { then: () => a };
					const l = P(t, n, {
						type: "GET",
						path: e.map((i) => i.toString())
					}).then(g);
					return l.then.bind(l);
				}
				return w(t, n, [...e, r]);
			},
			set(c, r, l) {
				y(o);
				const [i, _] = D(l);
				return P(t, n, {
					type: "SET",
					path: [...e, r].map((E) => E.toString()),
					value: i
				}, _).then(g);
			},
			apply(c, r, l) {
				y(o);
				const i = e[e.length - 1];
				if (i === St) return P(t, n, { type: "ENDPOINT" }).then(g);
				if (i === "bind") return w(t, n, e.slice(0, -1));
				const [_, E] = W(l);
				return P(t, n, {
					type: "APPLY",
					path: e.map((h) => h.toString()),
					argumentList: _
				}, E).then(g);
			},
			construct(c, r) {
				y(o);
				const [l, i] = W(r);
				return P(t, n, {
					type: "CONSTRUCT",
					path: e.map((_) => _.toString()),
					argumentList: l
				}, i).then(g);
			}
		});
		return Rt(a, t), a;
	}
	function mt(t) {
		return Array.prototype.concat.apply([], t);
	}
	function W(t) {
		const n = t.map(D);
		return [n.map((e) => e[0]), mt(n.map((e) => e[1]))];
	}
	const X = /* @__PURE__ */ new WeakMap();
	function bt(t, n) {
		return X.set(t, n), t;
	}
	function yt(t) {
		return Object.assign(t, { [V]: !0 });
	}
	function D(t) {
		for (const [n, e] of j) if (e.canHandle(t)) {
			const [s, o] = e.serialize(t);
			return [{
				type: "HANDLER",
				name: n,
				value: s
			}, o];
		}
		return [{
			type: "RAW",
			value: t
		}, X.get(t) || []];
	}
	function g(t) {
		switch (t.type) {
			case "HANDLER": return j.get(t.name).deserialize(t.value);
			case "RAW": return t.value;
		}
	}
	function P(t, n, e, s) {
		return new Promise((o) => {
			const a = At();
			n.set(a, o), t.start && t.start(), t.postMessage(Object.assign({ id: a }, e), s);
		});
	}
	function At() {
		return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
	}
	2 * Math.PI;
	Math.PI / 180;
	180 / Math.PI;
	const I = 86400, Q = 365.25, d = 299792.458, z = d * Q * I, Y = 149597870.7, H = 648e3 / Math.PI, J = H * Y / z, Dt = [
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
	], It = 1e3, Nt = d, xt = d ** Math.sqrt(Math.E), Ot = d ** 2, Ut = d ** Math.E, kt = [
		1,
		It,
		Nt,
		xt
	], $ = [Ot, Ut];
	new Set($);
	const tt = [...kt, ...$];
	tt[tt.length - 1];
	const nt = .999999999;
	function Kt(t) {
		const n = Math.min(Math.max(t, 0), nt);
		return 1 / Math.sqrt((1 - n) * (1 + n));
	}
	Kt(nt);
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
	function et(t, n, e) {
		const s = t, o = n;
		if (e === 0) return {
			lo: s,
			hi: o
		};
		if (e < 32) {
			const r = 32 - e;
			return {
				lo: u(s << e | o >>> r),
				hi: u(o << e | s >>> r)
			};
		}
		const a = e - 32, c = 32 - a;
		return {
			lo: u(o << a | s >>> c),
			hi: u(s << a | o >>> c)
		};
	}
	function Lt(t, n, e, s) {
		const o = u(t + e), a = o < t ? 1 : 0;
		return {
			lo: o,
			hi: u(n + s + a)
		};
	}
	function R(t, n, e) {
		const s = t & 65535, o = t >>> 16 & 65535, a = n & 65535, c = n >>> 16 & 65535, r = e & 65535, l = e >>> 16 & 65535;
		let i = s * r, _ = s * l + o * r, E = s * 0 + o * l + a * r, h = o * 0 + a * l + c * r;
		return _ += i >>> 16, i &= 65535, E += _ >>> 16, _ &= 65535, h += E >>> 16, E &= 65535, {
			lo: u((_ & 65535) << 16 | i),
			hi: u((h & 65535) << 16 | E & 65535)
		};
	}
	function wt(t) {
		const n = Lt(t.lo, t.hi, 2135587861, 2654435769);
		t.lo = n.lo, t.hi = n.hi;
		let e = {
			lo: t.lo,
			hi: t.hi
		}, s = e.hi >>> 30, o = u(e.lo >>> 30 | (e.hi & 1073741823) << 2);
		e = {
			lo: u(e.lo ^ o),
			hi: u(e.hi ^ s)
		};
		const a = R(e.lo, e.hi, 484763065), c = R(e.lo, 0, 3210233709);
		e = {
			lo: a.lo,
			hi: u(a.hi + c.lo)
		}, s = e.hi >>> 27, o = u(e.lo >>> 27 | (e.hi & 134217727) << 5), e = {
			lo: u(e.lo ^ o),
			hi: u(e.hi ^ s)
		};
		const r = R(e.lo, e.hi, 2496678331), l = R(e.lo, 0, 2496678331);
		return e = {
			lo: r.lo,
			hi: u(r.hi + l.lo)
		}, s = e.hi >>> 31, o = u(e.lo >>> 31 | (e.hi & 2147483647) << 1), e = {
			lo: u(e.lo ^ o),
			hi: u(e.hi ^ s)
		}, e;
	}
	function zt(t) {
		let n, e;
		typeof t == "bigint" ? (n = u(Number(t & 4294967295n)), e = u(Number(t >> 32n & 4294967295n))) : (n = u(t), e = u(Math.floor(t / 4294967296)));
		const s = {
			lo: n,
			hi: e
		}, o = /* @__PURE__ */ new Uint32Array(8);
		for (let a = 0; a < 4; a += 1) {
			const c = wt(s);
			o[a * 2] = c.lo, o[a * 2 + 1] = c.hi;
		}
		return o.every((a) => a === 0) && (o[0] = 1), { s: o };
	}
	function Yt(t) {
		const n = t.s, e = n[2], s = n[3], o = R(e, s, 5), a = et(o.lo, o.hi, 7), c = R(a.lo, a.hi, 9).lo, r = u(e << 17), l = u(s << 17 | e >>> 15);
		n[4] = u(n[4] ^ n[0]), n[5] = u(n[5] ^ n[1]), n[6] = u(n[6] ^ n[2]), n[7] = u(n[7] ^ n[3]), n[2] = u(n[2] ^ n[4]), n[3] = u(n[3] ^ n[5]), n[0] = u(n[0] ^ n[6]), n[1] = u(n[1] ^ n[7]), n[4] = u(n[4] ^ r), n[5] = u(n[5] ^ l);
		const i = et(n[6], n[7], 45);
		return n[6] = i.lo, n[7] = i.hi, c;
	}
	function Ht(t) {
		return Yt(t) / 4294967296;
	}
	typeof TextEncoder < "u" && new TextEncoder();
	var N = (t, n, e) => Object.defineProperty(t, n, {
		value: e,
		enumerable: !1,
		writable: !0,
		configurable: !0
	}), vt = Symbol.for("bitecs-relation"), Ft = Symbol.for("bitecs-pairTarget"), Gt = Symbol.for("bitecs-isPairComponent"), Vt = Symbol.for("bitecs-relationData"), ot = () => {
		let t = {
			pairsMap: /* @__PURE__ */ new Map(),
			initStore: void 0,
			exclusiveRelation: !1,
			autoRemoveSubject: !1,
			onTargetRemoved: void 0
		}, n = (e) => {
			if (e === void 0) throw Error("Relation target is undefined");
			let s = e === "*" ? Zt : e;
			if (!t.pairsMap.has(s)) {
				let o = t.initStore ? t.initStore(e) : {};
				N(o, vt, n), N(o, Ft, s), N(o, Gt, !0), t.pairsMap.set(s, o);
			}
			return t.pairsMap.get(s);
		};
		return N(n, Vt, t), n;
	}, Bt = Symbol.for("bitecs-wildcard");
	function jt() {
		let t = ot();
		return Object.defineProperty(t, Bt, {
			value: !0,
			enumerable: !1,
			writable: !1,
			configurable: !1
		}), t;
	}
	function qt() {
		let t = Symbol.for("bitecs-global-wildcard");
		return globalThis[t] || (globalThis[t] = jt()), globalThis[t];
	}
	var Zt = qt();
	function Wt() {
		return ot();
	}
	function Xt() {
		let t = Symbol.for("bitecs-global-isa");
		return globalThis[t] || (globalThis[t] = Wt()), globalThis[t];
	}
	Xt();
	const it = 1e3 / Y, x = it * z * J, Qt = 695700, Jt = 6378.137;
	function lt(t) {
		return !Number.isFinite(t) || t <= 0 ? 0 : t * it;
	}
	lt(Jt);
	lt(Qt);
	const ut = Dt;
	100 / H;
	1.1 * H;
	25 * x;
	25 * x;
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
	function $t(t) {
		const n = zt(t);
		return () => Ht(n);
	}
	function F(t) {
		const n = Math.max(t(), 1e-12), e = t();
		return Math.sqrt(-2 * Math.log(n)) * Math.cos(2 * Math.PI * e);
	}
	function tn(t) {
		const n = p.sunRadiusKpc;
		if (t() < p.bulgeFraction) return {
			x: n + F(t) * p.bulgeSigmaKpc,
			y: F(t) * p.bulgeSigmaKpc,
			z: F(t) * p.bulgeSigmaZKpc
		};
		const e = 1 - t(), s = 1 - t(), o = -p.diskScaleRKpc * (Math.log(e) + Math.log(s)), a = t() * Math.PI * 2, c = -(t() < p.thickFraction ? p.diskScaleZThickKpc : p.diskScaleZThinKpc) * Math.log(1 - t()) * (t() < .5 ? -1 : 1);
		return {
			x: n + o * Math.cos(a),
			y: o * Math.sin(a),
			z: c
		};
	}
	function nn(t) {
		const n = t.x - p.sunRadiusKpc;
		return {
			R: Math.hypot(n, t.y),
			Z: t.z
		};
	}
	function en(t, n, e) {
		const s = ut, o = s[0][0] * t + s[1][0] * n + s[2][0] * e, a = s[0][1] * t + s[1][1] * n + s[2][1] * e, c = s[0][2] * t + s[1][2] * n + s[2][2] * e, r = Math.hypot(o, a, c) || 1;
		return {
			x: o / r,
			y: a / r,
			z: c / r
		};
	}
	function on(t, n, e) {
		const s = 1 / x, o = t * s / 1e3, a = n * s / 1e3, c = e * s / 1e3, r = ut;
		return {
			x: r[0][0] * o + r[0][1] * a + r[0][2] * c,
			y: r[1][0] * o + r[1][1] * a + r[1][2] * c,
			z: r[2][0] * o + r[2][1] * a + r[2][2] * c
		};
	}
	const M = {
		midplaneTauPerKpc: .18,
		scaleRKpc: 3,
		scaleZKpc: .11,
		steps: 24
	}, _t = {
		r: .78,
		g: 1,
		b: 1.32
	}, sn = 1.2, an = [
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
	function rn(t) {
		const n = t.l * Math.PI / 180, e = t.b * Math.PI / 180, s = t.distPc / 1e3, o = t.radiusPc / 1e3, a = Math.max(1, t.elongation ?? 1), c = o * a, r = (t.paDeg ?? 0) * Math.PI / 180, l = Math.sin(n), i = Math.cos(n), _ = Math.sin(e), E = Math.cos(e), h = Math.cos(r), f = Math.sin(r), T = h * -l + f * (-_ * i), S = h * i + f * (-_ * l), m = f * E, O = 1 / (o * o), U = 1 / (c * c) - O, k = t.peakTauCore / (o * Math.sqrt(2 * Math.PI) * a);
		return {
			cx: s * E * i,
			cy: s * E * l,
			cz: s * _,
			dx: T,
			dy: S,
			dz: m,
			invM: O,
			anis: U,
			peakDensity: k
		};
	}
	const cn = an.map(rn), { SQRT1_2: ln } = Math, un = Math.sqrt(2 * Math.PI);
	function Et(t) {
		const n = t < 0 ? -1 : 1, e = Math.abs(t), s = 1 / (1 + .3275911 * e);
		return n * (1 - ((((1.061405429 * s - 1.453152027) * s + 1.421413741) * s - .284496736) * s + .254829592) * s * Math.exp(-e * e));
	}
	function _n(t, n, e) {
		const { R: s, Z: o } = nn({
			x: t,
			y: n,
			z: e
		});
		return M.midplaneTauPerKpc * Math.exp(-(s - p.sunRadiusKpc) / M.scaleRKpc) * Math.exp(-Math.abs(o) / M.scaleZKpc);
	}
	function En(t, n, e, s, o, a, c, r) {
		const l = t.cx - n, i = t.cy - e, _ = t.cz - s, E = l * o + i * a + _ * c, h = o * t.dx + a * t.dy + c * t.dz, f = l * t.dx + i * t.dy + _ * t.dz, T = l * l + i * i + _ * _, S = t.invM + t.anis * h * h, m = t.invM * E + t.anis * h * f, O = t.invM * T + t.anis * f * f, U = Math.max(0, O - m * m / S);
		if (U > 25) return 0;
		const k = m / S, ft = Math.sqrt(S) * ln, pt = .5 * (Et((r - k) * ft) - Et(-k * ft));
		if (pt <= 0) return 0;
		const dn = 1 / Math.sqrt(S);
		return t.peakDensity * un * dn * Math.exp(-.5 * U) * pt;
	}
	function hn(t, n) {
		const e = n.x - t.x, s = n.y - t.y, o = n.z - t.z, a = Math.hypot(e, s, o);
		if (a === 0) return 0;
		let c = 0;
		for (let E = 0; E < M.steps; E += 1) {
			const h = (E + .5) / M.steps;
			c += _n(t.x + e * h, t.y + s * h, t.z + o * h);
		}
		let r = c * a / M.steps;
		const l = e / a, i = s / a, _ = o / a;
		for (const E of cn) r += En(E, t.x, t.y, t.z, l, i, _, a);
		return r;
	}
	M.steps;
	function fn(t) {
		const n = Math.max(0, t), e = Math.min(n, sn);
		return {
			dimMag: 1.086 * n,
			rgbScale: [
				Math.exp(-e * (_t.r - 1)),
				1,
				Math.exp(-e * (_t.b - 1))
			]
		};
	}
	const G = [
		1.15,
		1.02,
		.82
	], ht = 1e3, pn = 1e3 / (J * ht);
	function Sn(t) {
		const n = $t(t.seed), e = t.viewerScenePos, s = e && (e.x !== 0 || e.y !== 0 || e.z !== 0) ? on(e.x, e.y, e.z) : {
			x: 0,
			y: 0,
			z: 0
		}, o = [], a = [], c = [];
		for (let r = 0; r < t.pointBudget; r += 1) {
			const l = tn(n), i = Math.hypot(l.x, l.y, l.z);
			if (i >= pn && i <= p.maxSunDistKpc) {
				const _ = i * ht, E = en(l.x, l.y, l.z), h = _ * x, f = p.packetAbsMag + 5 * Math.log10(_ / 10), S = fn(hn(s, l));
				o.push(E.x * h, E.y * h, E.z * h), a.push(f + S.dimMag), c.push(G[0] * S.rgbScale[0], G[1] * S.rgbScale[1], G[2] * S.rgbScale[2]);
			}
		}
		return {
			positions: new Float32Array(o),
			mag: new Float32Array(a),
			colors: new Float32Array(c),
			count: a.length
		};
	}
	L({ async buildBandField(t) {
		return Sn(t);
	} });
})();
