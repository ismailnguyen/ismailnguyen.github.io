// Endless drone flight over stippled ink mountains (WebGL).
// Layers of ridges travel from the horizon toward the camera; continuous ink shading,
// drifting mist, then a stochastic stipple dither on top.

const VERTEX = `
attribute vec2 a;
void main() { gl_Position = vec4(a, 0.0, 1.0); }
`;

const FRAGMENT = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform float uReveal;
uniform vec2 uPointer;
uniform float uCell;

const int LAYERS = 6;
const vec3 INK = vec3(0.055, 0.055, 0.05);
const vec3 PAPER = vec3(0.949, 0.941, 0.922);

float hash(float n) { return fract(sin(n) * 43758.5453); }
float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

float noise(float x) {
    float i = floor(x), f = fract(x);
    float u = f * f * (3.0 - 2.0 * f);
    return mix(hash(i), hash(i + 1.0), u) * 2.0 - 1.0;
}

float n2(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash2(i), hash2(i + vec2(1.0, 0.0)), u.x),
               mix(hash2(i + vec2(0.0, 1.0)), hash2(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm2(vec2 p) {
    float s = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) { s += a * n2(p); p *= 2.03; a *= 0.5; }
    return s;
}

// ridge line, sharpened so peaks read as mountains not hills
float ridge(float x, float seed) {
    float h = 0.0, a = 0.6, f = 1.0;
    for (int o = 0; o < 5; o++) {
        float n = 1.0 - abs(noise(x * f + seed + float(o) * 7.31));
        h += a * n * n;
        f *= 2.07;
        a *= 0.47;
    }
    return h;
}

void main() {
    vec2 uv = gl_FragCoord.xy / uRes;
    float aspect = uRes.x / uRes.y;
    vec2 p = vec2((uv.x - 0.5) * aspect, uv.y);

    // drone: gentle bank and sway, plus a touch of pointer parallax
    float bank = sin(uTime * 0.07) * 0.035 + uPointer.x * 0.025;
    p.y += p.x * bank;
    p.x += sin(uTime * 0.05) * 0.15 + uPointer.x * 0.06;
    float horizon = 0.5 + uPointer.y * 0.015;

    float tone = 1.0;   // 1 = paper (sky)
    float t = uTime * 0.03;

    for (int i = 0; i < LAYERS; i++) {
        float k = t + float(i) / float(LAYERS);
        float ph = fract(k);                      // 0 = horizon, 1 = under the drone
        float id = floor(k) * float(LAYERS) + float(i);
        float seed = hash(id * 1.731) * 400.0;
        float z = mix(8.0, 0.6, ph);              // constant ground speed

        float wx = p.x * z * 0.28 + seed;
        // canyon: the drone flies along a valley, mountains tower on both sides
        float side = abs(p.x) / (0.5 * aspect);
        float terrain = 0.1 + 2.2 * ridge(wx, seed) + 0.6 * side * side;
        float y = horizon - (2.5 - terrain) / z * 0.42;

        if (uv.y < y) {
            float e = 0.02;
            float slope = (ridge(wx + e, seed) - ridge(wx - e, seed)) / (2.0 * e);
            float depth = smoothstep(0.6, 8.0, z);           // 0 near, 1 far
            float c = mix(0.06, 0.74, pow(depth, 0.7));       // atmospheric perspective
            c += clamp(-slope * 0.05, -0.15, 0.22);           // light from the left
            // rock texture, carried by the mountain (not the screen)
            c += (fbm2(vec2(wx * 2.5, (y - uv.y) * z * 3.0)) - 0.5) * 0.18;

            // mist pooling at the foot of each ridge
            float below = (y - uv.y) * z;
            c = mix(c, 0.96, smoothstep(0.3, 2.5, below) * mix(0.35, 0.9, depth));

            float a = smoothstep(0.0, 0.12, ph) * (1.0 - smoothstep(0.86, 1.0, ph));
            tone = mix(tone, clamp(c, 0.0, 1.0), a);
        }
    }

    // drifting cloud banks
    float fog = fbm2(vec2(p.x * 1.4 - uTime * 0.02, uv.y * 3.2 + uTime * 0.012));
    tone = mix(tone, 0.97, smoothstep(0.5, 0.05, uv.y) * smoothstep(0.45, 0.8, fog) * 0.65);
    tone = mix(tone, 0.96, smoothstep(0.15, 0.0, uv.y) * 0.4);

    // reveal: the image develops out of the paper
    tone = mix(1.0, tone, uReveal);

    // stochastic stipple, anchored to screen cells
    vec2 cell = floor(gl_FragCoord.xy / uCell);
    float dots = step(hash2(cell), tone);
    float mid = smoothstep(0.02, 0.3, tone) * smoothstep(0.98, 0.7, tone); // stipple the mid-tones only
    float ink = mix(tone, dots, 0.45 * mid);

    gl_FragColor = vec4(mix(INK, PAPER, ink), 1.0);
}
`;

export default function startMountainFlight(canvas) {
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false, preserveDrawingBuffer: false });
    if (!gl) return () => {};

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
    gl.useProgram(program);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, 'a');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const u = name => gl.getUniformLocation(program, name);
    const uRes = u('uRes'), uTime = u('uTime'), uReveal = u('uReveal'), uPointer = u('uPointer'), uCell = u('uCell');

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // ponytail: rendered at 1x and upscaled; the stipple is meant to be chunky and it keeps the GPU cool
    const resize = () => {
        canvas.width = Math.max(1, Math.round(canvas.clientWidth));
        canvas.height = Math.max(1, Math.round(canvas.clientHeight));
        gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    const ro = new ResizeObserver(() => { resize(); if (reduced) draw(performance.now()); });
    ro.observe(canvas);

    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const onPointer = e => {
        pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onPointer, { passive: true });

    let visible = true;
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    io.observe(canvas);

    const start = performance.now();
    const T0 = 40; // start mid-flight so every layer is already on screen
    let raf;

    function draw(now) {
        const s = (now - start) / 1000;
        pointer.x += (pointer.tx - pointer.x) * 0.04;
        pointer.y += (pointer.ty - pointer.y) * 0.04;
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uTime, reduced ? T0 : T0 + s);
        gl.uniform1f(uReveal, reduced ? 1 : 1 - Math.pow(1 - Math.min(s / 2.2, 1), 3));
        gl.uniform2f(uPointer, pointer.x, pointer.y);
        gl.uniform1f(uCell, 2);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

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
        window.removeEventListener('pointermove', onPointer);
    };
}
