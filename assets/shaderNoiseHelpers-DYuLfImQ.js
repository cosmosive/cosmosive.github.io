var f=`
vec2 rotate2D(vec2 p, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
}

float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}

float noise3(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash13(i + vec3(0.0, 0.0, 0.0));
  float n100 = hash13(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash13(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash13(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash13(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash13(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash13(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash13(i + vec3(1.0, 1.0, 1.0));
  float nx00 = mix(n000, n100, f.x);
  float nx10 = mix(n010, n110, f.x);
  float nx01 = mix(n001, n101, f.x);
  float nx11 = mix(n011, n111, f.x);
  return mix(mix(nx00, nx10, f.y), mix(nx01, nx11, f.y), f.z);
}

float fbm3(vec3 p) {
  float v = 0.0;
  float amp = 0.55;
  float freq = 1.0;
  for (int i = 0; i < 3; i += 1) {
    v += amp * noise3(p * freq);
    freq *= 1.94;
    amp *= 0.52;
  }
  return v;
}

float fbm4(vec3 p) {
  float v = 0.0;
  float amp = 0.55;
  float freq = 1.0;
  for (int i = 0; i < 4; i += 1) {
    v += amp * noise3(p * freq);
    freq *= 1.94;
    amp *= 0.52;
  }
  return v;
}

float fbm6(vec3 p) {
  float v = 0.0;
  float amp = 0.55;
  float freq = 1.0;
  for (int i = 0; i < 6; i += 1) {
    v += amp * noise3(p * freq);
    freq *= 1.92;
    amp *= 0.5;
  }
  return v;
}

vec3 curlWarp(vec3 p, float strength) {
  float a = fbm4(p + vec3(0.0, 11.7, 3.1));
  float b = fbm4(p + vec3(7.3, -4.9, 21.5));
  float c = fbm4(p + vec3(-18.4, 5.6, -2.2));
  return vec3(a - 0.5, b - 0.5, c - 0.5) * strength;
}
`;export{f as t};
