import{_ as U,c as f,a as n,n as V,d as z,w as _,j as B,F as h,k as R,b as A,f as x,t as p,e as D,i as M,r as Y,o as d,g as O,m as H,l as j}from"./index-CIRbbI69.js";const G=`
attribute vec2 a;
void main() { gl_Position = vec4(a, 0.0, 1.0); }
`,W=`
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
`;function X(t){const e=t.getContext("webgl",{antialias:!1,alpha:!1,preserveDrawingBuffer:!1});if(!e)return()=>{};const o=(r,v)=>{const m=e.createShader(r);return e.shaderSource(m,v),e.compileShader(m),e.getShaderParameter(m,e.COMPILE_STATUS)||console.error(e.getShaderInfoLog(m)),m},a=e.createProgram();e.attachShader(a,o(e.VERTEX_SHADER,G)),e.attachShader(a,o(e.FRAGMENT_SHADER,W)),e.linkProgram(a),e.useProgram(a),e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const y=e.getAttribLocation(a,"a");e.enableVertexAttribArray(y),e.vertexAttribPointer(y,2,e.FLOAT,!1,0,0);const c=r=>e.getUniformLocation(a,r),g=c("uRes"),i=c("uTime"),u=c("uReveal"),s=c("uPointer"),N=c("uCell"),w=window.matchMedia("(prefers-reduced-motion: reduce)").matches,P=()=>{t.width=Math.max(1,Math.round(t.clientWidth)),t.height=Math.max(1,Math.round(t.clientHeight)),e.viewport(0,0,t.width,t.height)};P();const E=new ResizeObserver(()=>{P(),w&&k(performance.now())});E.observe(t);const l={x:0,y:0,tx:0,ty:0},T=r=>{l.tx=r.clientX/window.innerWidth*2-1,l.ty=r.clientY/window.innerHeight*2-1};window.addEventListener("pointermove",T,{passive:!0});let L=!0;const S=new IntersectionObserver(([r])=>{L=r.isIntersecting});S.observe(t);const I=performance.now(),F=40;let b;function k(r){const v=(r-I)/1e3;l.x+=(l.tx-l.x)*.04,l.y+=(l.ty-l.y)*.04,e.uniform2f(g,t.width,t.height),e.uniform1f(i,w?F:F+v),e.uniform1f(u,w?1:1-Math.pow(1-Math.min(v/2.2,1),3)),e.uniform2f(s,l.x,l.y),e.uniform1f(N,2),e.drawArrays(e.TRIANGLES,0,3)}const C=r=>{L&&k(r),b=requestAnimationFrame(C)};return w?k(performance.now()):b=requestAnimationFrame(C),()=>{cancelAnimationFrame(b),E.disconnect(),S.disconnect(),window.removeEventListener("pointermove",T)}}function se(t){if(!t||!t.id)return[];const e=encodeURIComponent(t.id),o=a=>a&&a.text&&a.url?{text:a.text,href:a.url,external:!0}:null;return[{title:"Links",items:[o(t.primaryLink),o(t.secondaryLink)].filter(Boolean)},{title:"Tags",items:(t.tags||[]).map(a=>({text:a}))},{title:"Legal",items:[t.markdownPrivacyUrl&&{text:"Privacy Policy",to:`/work/${e}/privacy`},t.markdownLicenseUrl&&{text:"License",to:`/work/${e}/license`},{text:"Terms",to:"/terms"}].filter(Boolean)}]}const q={props:{back:{type:Object,default:()=>({to:"/",label:"Ismaïl"})},compact:Boolean,brand:{type:Object,default:()=>({})},columns:{type:Array,default:()=>[]},minRows:{type:Number,default:2}},computed:{rows(){return Math.max(this.minRows,...this.columns.map(t=>t.items.length))}},mounted(){document.documentElement.classList.add("is-paper"),this.stopFlight=X(this.$refs.mountains)},beforeUnmount(){document.documentElement.classList.remove("is-paper"),this.stopFlight&&this.stopFlight()},methods:{linkAttrs(t){return t.to?{to:t.to}:t.href?{href:t.href,target:t.external?"_blank":null,rel:t.external?"noopener":null}:{}}}},K={class:"wd-page"},J={class:"wd-frame"},Q={ref:"mountains",class:"wd-mountains","aria-hidden":"true"},Z={class:"wd-hero__copy"},$={class:"wd-brand"},ee={class:"wd-brand__name"},te=["src"],oe={key:0,class:"wd-brand__text"},ae={class:"wd-bottom"},ne={class:"wd-bottom__links"};function re(t,e,o,a,y,c){const g=Y("router-link");return d(),f("div",K,[n("div",J,[n("section",{class:V(["wd-hero",{"wd-hero--compact":o.compact}])},[n("canvas",Q,null,512),z(g,{to:o.back.to,class:"wd-home","aria-label":"Back to "+o.back.label},{default:_(()=>[e[0]||(e[0]=n("i",{class:"fas fa-arrow-left","aria-hidden":"true"},null,-1)),x(" "+p(o.back.label),1)]),_:1},8,["to","aria-label"]),n("div",Z,[B(t.$slots,"hero")])],2),B(t.$slots,"default"),o.columns.length?(d(),f(h,{key:0},[e[2]||(e[2]=n("div",{class:"wd-hatch"},null,-1)),n("div",{class:"wd-grid",style:R({"--rows":c.rows,"--cols":o.columns.length})},[n("div",$,[n("div",ee,[o.brand.logo?(d(),f("img",{key:0,src:o.brand.logo,alt:"",loading:"lazy"},null,8,te)):A("",!0),x(" "+p(o.brand.title),1)]),o.brand.text?(d(),f("p",oe,p(o.brand.text),1)):A("",!0),e[1]||(e[1]=D('<div class="wd-brand__social"><a href="//www.linkedin.com/in/ismailnguyen" target="_blank" rel="noopener" aria-label="LinkedIn profile"><i class="fab fa-linkedin" aria-hidden="true"></i></a><a href="//www.npmjs.com/~ismailnguyen" target="_blank" rel="noopener" aria-label="NPM profile"><i class="fab fa-npm" aria-hidden="true"></i></a><a href="//github.com/ismailnguyen" target="_blank" rel="noopener" aria-label="GitHub profile"><i class="fab fa-github" aria-hidden="true"></i></a></div>',1))]),(d(!0),f(h,null,M(o.columns,(i,u)=>(d(),f(h,{key:i.title},[n("div",{class:"wd-cell wd-cell--head",style:R({"--c":u,"--r":0})},p(i.title),5),(d(!0),f(h,null,M(c.rows,s=>(d(),f(h,{key:i.title+s},[i.items[s-1]?(d(),O(j(i.items[s-1].to?"router-link":i.items[s-1].href?"a":"span"),H({key:0,ref_for:!0},c.linkAttrs(i.items[s-1]),{class:"wd-cell",style:{"--c":u,"--r":s}}),{default:_(()=>[x(p(i.items[s-1].text),1)]),_:2},1040,["style"])):(d(),f("span",{key:1,class:"wd-cell",style:R({"--c":u,"--r":s})},null,4))],64))),128))],64))),128))],4)],64)):A("",!0),e[6]||(e[6]=n("div",{class:"wd-hatch"},null,-1)),n("div",ae,[e[5]||(e[5]=n("span",null,"Crafted without tracking, neither cookies, only passion.",-1)),n("span",ne,[e[4]||(e[4]=n("a",{href:"/privacy.html"},"Privacy",-1)),z(g,{to:"/terms"},{default:_(()=>[...e[3]||(e[3]=[x("Terms",-1)])]),_:1})])])])])}const le=U(q,[["render",re]]);export{le as P,se as w};
