// Dusk meadow above a sea of clouds (WebGL).
// Sky that slowly breathes, three parallax cloud banks, drifting cumulus,
// wind-blown grass blades, swaying hydrangea clusters, and the avatar graded into the scene.

const VERTEX = `
attribute vec2 a;
void main() { gl_Position = vec4(a, 0.0, 1.0); }
`;

const FRAGMENT = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform sampler2D uTex;
uniform float uHasTex;

const int ROWS = 16;
const int AVATAR_ROW = 10;
const vec3 HAZE = vec3(0.56, 0.60, 0.86);

float hash(float n) { return fract(sin(n) * 43758.5453123); }
float hash2(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }

float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash2(i), hash2(i + vec2(1.0, 0.0)), u.x),
               mix(hash2(i + vec2(0.0, 1.0)), hash2(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
    float s = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + 17.1; a *= 0.5; }
    return s;
}

float noise1(float x) {
    float i = floor(x), f = fract(x);
    return mix(hash(i), hash(i + 1.0), f * f * (3.0 - 2.0 * f));
}

vec3 sky(float y, float t) {
    vec3 c = mix(vec3(0.99, 0.80, 0.74), vec3(0.94, 0.68, 0.80), smoothstep(0.40, 0.53, y));
    c = mix(c, vec3(0.60, 0.62, 0.92), smoothstep(0.53, 0.70, y));
    c = mix(c, vec3(0.30, 0.44, 0.86), smoothstep(0.70, 1.00, y));
    // the dawn slowly brightens and settles again
    float b = 0.5 + 0.5 * sin(t * 0.07);
    return mix(c, c * vec3(0.94, 1.02, 1.07) + vec3(0.02, 0.05, 0.08), b * 0.6);
}

// one bank of the cloud sea: puffy top edge, lit crests, shadowed folds
vec4 bank(vec2 p, float base, float amp, float speed, float scale, float t, vec3 lit, vec3 shade, float seed) {
    float x = p.x * scale + t * speed + seed;
    float top = base + amp * (fbm(vec2(x * 0.8, seed)) * 1.7 - 0.6);
    // stacked puffs along the crest
    top += amp * 0.55 * (abs(sin(x * 6.0 + fbm(vec2(x * 3.0, seed)) * 4.0)) - 0.5);
    top += amp * 0.25 * (fbm(vec2(x * 9.0, seed + 5.0)) - 0.5);
    float d = top - p.y;
    float edge = fbm(vec2(x * 7.0, p.y * 26.0 - t * 0.05));
    float a = smoothstep(-0.004, 0.018, d + (edge - 0.5) * 0.035);
    float billow = fbm(vec2(x * 3.4 - t * 0.01, p.y * 14.0 + seed));
    float l = clamp(exp(-d * 22.0) * 0.95 + (billow - 0.5) * 0.9 - d * 1.5, 0.0, 1.0);
    return vec4(mix(shade, lit, l), a);
}

// towering cumulus drifting across the horizon
vec4 cumulus(vec2 p, vec2 c, vec2 size, float t, float seed) {
    vec2 q = (p - c) / size;
    float n = fbm(q * 2.2 + vec2(seed, t * 0.03));
    float r = length(q * vec2(0.85, 1.15)) + (n - 0.5) * 0.65;
    float a = smoothstep(1.0, 0.82, r) * smoothstep(-0.55, -0.2, q.y);
    float l = clamp(0.45 + q.y * 0.35 + q.x * 0.25 + (fbm(q * 4.0 + seed) - 0.5) * 0.6, 0.0, 1.0);
    return vec4(mix(vec3(0.45, 0.50, 0.84), vec3(1.0, 0.88, 0.92), l), a);
}

uniform float uSlope;
float hillY(float x) {
    return 0.335 - uSlope * x + 0.014 * sin(x * 5.0 + 1.0) + 0.012 * (noise1(x * 11.0) - 0.5);
}

float rowBase(float x, float f, float jitter) {
    return mix(hillY(x) - 0.003, -0.05, pow(f, 1.2)) + jitter;
}

float wind(float x, float t) {
    return sin(t * 1.5 + x * 9.0) * 0.45 + (noise1(x * 2.5 - t * 0.55) - 0.5) * 1.6;
}

void main() {
    vec2 uv = gl_FragCoord.xy / uRes;
    float aspect = uRes.x / uRes.y;
    vec2 p = vec2(uv.x * aspect, uv.y);
    float t = uTime;

    // ---- sky & sun glow
    vec3 col = sky(uv.y, t);
    float glow = exp(-length((p - vec2(0.62 * aspect, 0.46)) * vec2(0.9, 2.6)) * 2.2);
    col += vec3(0.30, 0.18, 0.10) * glow;

    // ---- far bank, distant peaks, cumulus, nearer banks
    vec4 b = bank(p, 0.47, 0.05, 0.006, 1.6, t, vec3(1.0, 0.88, 0.90), vec3(0.66, 0.64, 0.90), 3.0);
    col = mix(col, b.rgb, b.a * 0.9);

    float peaks = 0.43 + 0.10 * pow(noise1(p.x * 2.1 + 4.0), 2.2);
    col = mix(col, mix(vec3(0.62, 0.60, 0.88), col, 0.45), smoothstep(0.0, 0.004, peaks - uv.y));

    for (int i = 0; i < 2; i++) {
        float fi = float(i);
        float span = aspect + 1.4;
        float cx = mod(t * (0.010 + fi * 0.004) + fi * 1.3, span) - 0.7;
        vec4 c = cumulus(p, vec2(cx, 0.43 + fi * 0.02), vec2(0.28 - fi * 0.08, 0.22 - fi * 0.06), t, fi * 7.0);
        col = mix(col, c.rgb, c.a * 0.92);
    }

    b = bank(p, 0.41, 0.06, 0.013, 2.3, t, vec3(1.0, 0.86, 0.91), vec3(0.50, 0.54, 0.86), 11.0);
    col = mix(col, b.rgb, b.a);
    b = bank(p, 0.36, 0.05, 0.022, 3.1, t, vec3(0.92, 0.88, 0.98), vec3(0.42, 0.48, 0.80), 23.0);
    col = mix(col, b.rgb, b.a);

    // ---- hill ground
    float hy = hillY(uv.x);
    if (uv.y < hy) {
        float depth = clamp((hy - uv.y) / 0.3, 0.0, 1.0);
        vec3 g = mix(vec3(0.26, 0.38, 0.50), vec3(0.08, 0.17, 0.20), depth);
        g *= 0.85 + 0.3 * fbm(vec2(uv.x * 260.0, uv.y * 30.0));
        col = mix(g, HAZE, (1.0 - depth) * 0.35);
    }

    // ---- grass rows (back to front), flowers, avatar
    for (int k = 0; k < ROWS; k++) {
        float f = float(k) / float(ROWS - 1);
        float fog = clamp((uv.y - 0.02) / 0.32, 0.0, 1.0) * 0.5;

        // grass blades
        float spacing = mix(0.0018, 0.0065, f);
        float bh = mix(0.024, 0.10, f * f);
        float bw = mix(0.0013, 0.0048, f);
        for (int j = -2; j <= 2; j++) {
            float i = floor(uv.x / spacing) + float(j);
            float r = hash(i * 1.37 + float(k) * 91.1);
            float xb = (i + r) * spacing;
            float yb = rowBase(xb, f, (hash(i * 3.1 + float(k)) - 0.5) * 0.03 * (0.3 + f) + (noise1(xb * 18.0 + float(k) * 3.0) - 0.5) * 0.02);
            float h = bh * (0.55 + 0.9 * hash(i * 7.7 + float(k) * 3.0));
            float v = (uv.y - yb) / h;
            if (v < 0.0 || v > 1.0) continue;
            float lean = (hash(i * 5.3 + float(k)) - 0.5) * 1.4;
            float cx = xb + (lean * v + wind(xb, t) * v * v) * spacing * 0.9;
            float w = bw * pow(1.0 - v, 0.85);
            if (abs(uv.x - cx) < w) {
                float shade = 0.8 + 0.4 * hash(i * 9.1 + float(k));
                vec3 g = mix(vec3(0.06, 0.14, 0.16), vec3(0.20, 0.34, 0.37), v) * shade;
                g += vec3(0.62, 0.50, 0.68) * pow(v, 3.0) * 0.35;     // dusk light on the tips
                col = mix(g, HAZE, fog);
            }
        }

        // hydrangea clusters
        float cs = mix(0.022, 0.075, f);
        for (int j = -1; j <= 1; j++) {
            float i = floor(uv.x / cs) + float(j);
            float r = hash(i * 4.7 + float(k) * 13.3);
            // bushes grow in patches, richer on the left
            float patch = smoothstep(0.35, 0.7, noise(vec2(i * cs * 5.0, float(k) * 0.37)));
            if (r > patch * (0.55 + 0.4 * (1.0 - clamp(i * cs, 0.0, 1.0)))) continue;
            float xc = (i + 0.5 + (hash(i * 2.9 + float(k)) - 0.5) * 0.7) * cs;
            float rad = mix(0.010, 0.05, f) * (0.7 + 0.6 * hash(i * 6.1 + float(k)));
            xc += wind(xc, t * 0.8) * 0.0025 * (0.3 + f);
            vec2 c = vec2(xc, rowBase(xc, f, 0.0) + rad * 0.75);
            vec2 q = (uv - c) * vec2(aspect, 1.0);
            float d = length(q / vec2(1.2, 0.85)) / rad;
            if (d > 1.4) continue;
            float edge = fbm(q / rad * 1.8 + i);
            if (d + (edge - 0.5) * 0.7 > 1.0) continue;

            // florets: jittered cells
            vec2 g = q / (rad * 0.23);
            vec2 gi = floor(g), gf = fract(g);
            float m = 1.0;
            for (int y = -1; y <= 1; y++)
                for (int x = -1; x <= 1; x++) {
                    vec2 o = vec2(float(x), float(y));
                    vec2 pt = o + vec2(hash2(gi + o + i), hash2(gi + o + i + 7.0)) * 0.8 + 0.1;
                    m = min(m, length(pt - gf));
                }
            float floret = smoothstep(0.62, 0.18, m);

            float pick = hash(i * 8.3 + float(k) * 2.1);
            vec3 base = pick < 0.4 ? vec3(0.52, 0.66, 0.98)
                      : pick < 0.65 ? vec3(0.66, 0.63, 0.95)
                      : pick < 0.85 ? vec3(0.90, 0.70, 0.88)
                      : vec3(0.86, 0.90, 1.00);
            float light = 0.55 + 0.45 * clamp(q.y / rad * 0.8 + 0.5, 0.0, 1.0);
            vec3 fc = mix(base * 0.32, base * light, floret);
            col = mix(fc, HAZE, fog * 0.9);
        }

        // the avatar sits among the middle rows, so the front grass covers the feet
        if (k == AVATAR_ROW && uHasTex > 0.5) {
            float hc = aspect < 1.0 ? 0.52 : 0.64;
            float wc = hc / aspect;
            vec2 tuv = vec2((uv.x - (0.5 - wc * 0.5)) / wc, (uv.y + 0.03) / hc);
            if (tuv.x > 0.0 && tuv.x < 1.0 && tuv.y > 0.0 && tuv.y < 1.0) {
                vec4 tx = texture2D(uTex, vec2(tuv.x, 1.0 - tuv.y));
                // lifted blacks to navy, compressed whites, cool cast
                vec3 c = mix(vec3(0.13, 0.17, 0.35), vec3(0.88, 0.85, 0.97), tx.rgb) * vec3(0.86, 0.9, 1.06);
                // warm rim where the sky light grazes the silhouette
                float behind = texture2D(uTex, vec2(tuv.x + 0.0025, 1.0 - tuv.y - 0.002)).a;
                c += vec3(0.95, 0.62, 0.72) * (1.0 - behind) * 0.4;
                c = mix(c, HAZE, 0.1);
                col = mix(col, c, tx.a);
            }
        }
    }

    // ---- atmosphere
    col = mix(col, vec3(0.80, 0.78, 0.95), smoothstep(0.30, 0.45, uv.y) * smoothstep(0.55, 0.45, uv.y) * 0.12);
    col *= 1.0 - 0.25 * pow(length((uv - 0.5) * vec2(1.0, 0.8)), 2.0);

    gl_FragColor = vec4(col, 1.0);
}
`;

export default function startMeadowScene(canvas, avatarUrl) {
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false });
    if (!gl) return null;

    const shader = (type, src) => {
        const s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(s));
        return s;
    };
    const program = gl.createProgram();
    gl.attachShader(program, shader(gl.VERTEX_SHADER, VERTEX));
    gl.attachShader(program, shader(gl.FRAGMENT_SHADER, FRAGMENT));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
    gl.useProgram(program);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, 'a');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const u = name => gl.getUniformLocation(program, name);
    const uRes = u('uRes'), uTime = u('uTime'), uHasTex = u('uHasTex'), uSlope = u('uSlope');
    gl.uniform1i(u('uTex'), 0);
    gl.uniform1f(uHasTex, 0);

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const start = performance.now();
    const draw = (now) => {
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uSlope, 0.13 * Math.min(1, canvas.width / canvas.height / 1.4));
        gl.uniform1f(uTime, reduced ? 12 : 12 + (now - start) / 1000);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    // the avatar becomes a texture so it is graded with the scene
    const img = new Image();
    img.onload = () => {
        const tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.uniform1f(uHasTex, 1);
        if (reduced) draw(performance.now());
    };
    img.src = avatarUrl;

    // ponytail: pixel budget caps the cost on big screens; the VHS overlay hides the softness
    const resize = () => {
        const w = canvas.clientWidth, h = canvas.clientHeight;
        const scale = Math.min(window.devicePixelRatio || 1, Math.sqrt(1.4e6 / Math.max(1, w * h)));
        canvas.width = Math.max(1, Math.round(w * scale));
        canvas.height = Math.max(1, Math.round(h * scale));
        gl.viewport(0, 0, canvas.width, canvas.height);
        if (reduced) draw(performance.now());
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let visible = true;
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    io.observe(canvas);

    let raf;
    const loop = now => {
        if (visible) draw(now);
        raf = requestAnimationFrame(loop);
    };
    if (reduced) draw(performance.now());
    else raf = requestAnimationFrame(loop);

    return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
    };
}
