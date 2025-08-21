import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

// ======== Shaders ========

// Ruido simplex 3D compacto (GLSL)
const noiseGLSL = `
vec3 mod289(vec3 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float snoise(vec3 v){
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1),
                          dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                 dot(p2,x2), dot(p3,x3) ) );
}
`;

// Vertex: desplaza la superficie con ruido para un look “orgánico”
const vertexShader = `
uniform float u_time;
uniform float u_displaceAmp;
uniform float u_noiseScale;
varying vec3 vNormal;
varying vec3 vWorldPos;

${noiseGLSL}

void main() {
  vNormal = normalMatrix * normal;

  // Coordenadas para ruido (usa normal para un patrón “envolvente”)
  vec3 p = normalize(normal) * u_noiseScale + vec3(0.0, 0.0, u_time*0.15);
  float n = snoise(p);

  // Desplazamiento
  float disp = n * u_displaceAmp;

  vec3 newPosition = position + normal * disp;

  vec4 worldPosition = modelMatrix * vec4(newPosition, 1.0);
  vWorldPos = worldPosition.xyz;

  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`;

// Fragment: mezcla de colores animados + fresnel + ripple por puntero + brillo pulsante
const fragmentShader = `
precision highp float;

uniform float u_time;
uniform vec2  u_resolution;
uniform vec2  u_pointer;      // -1..1 (NDC) para ripple
uniform float u_pointerStrength;
uniform vec3  u_colorA;       // color base
uniform vec3  u_colorB;       // color secundario
uniform float u_pulseSpeed;   // Velocidad de la pulsación
uniform float u_pulseAmplitude; // Amplitud de la pulsación del brillo

varying vec3 vNormal;
varying vec3 vWorldPos;

// Fresnel simple
float fresnel(vec3 n, vec3 v, float bias, float scale, float power){
  return bias + scale * pow(1.0 + dot(n, v), power);
}

${noiseGLSL}

void main() {
  // Dirección de cámara
  vec3 V = normalize(cameraPosition - vWorldPos);
  vec3 N = normalize(vNormal);

  // Gradiente de color animado con ruido
  float t = u_time * 0.2;
  float n = snoise(N * 2.0 + vec3(t, 0.0, -t));
  float m = 0.5 + 0.5 * n; // 0..1
  vec3 base = mix(u_colorA, u_colorB, m);

  // Fresnel/halo
  float f = fresnel(N, V, 0.02, 1.0, 3.0);
  
  // Brillo pulsante para el halo
  float pulse = sin(u_time * u_pulseSpeed) * 0.5 + 0.5; // Onda de seno 0..1
  vec3 halo = vec3(0.0, 1.0, 0.8) * f * (0.6 + pulse * u_pulseAmplitude); // verdoso/azulado con pulsación

  // Ripple por puntero (proyectamos a pantalla en aprox NDC)
  // Aproximación: usamos normal.xy como coordenadas de superficie “2D”
  vec2 uv = N.xy * 0.5 + 0.5;           // 0..1
  vec2 p  = u_pointer * 0.5 + 0.5;      // 0..1
  float d = distance(uv, p);
  float ripple = smoothstep(0.35, 0.0, d); // más fuerte cerca del puntero
  float wave = 0.5 + 0.5 * sin(20.0 * d - u_time * 6.0);
  vec3 rippleCol = mix(base, vec3(0.0, 1.0, 0.7), ripple * wave * u_pointerStrength);

  // Composición final
  vec3 col = rippleCol + halo;

  // Viñeta sutil para sensación “inmersiva”
  float vignette = 0.75 + 0.25 * pow(1.0 - dot(uv - 0.5, uv - 0.5) * 2.2, 2.0);
  col *= vignette;

  gl_FragColor = vec4(col, 1.0);
}
`;

function BlobMaterial({ colorA = "#00ffd4", colorB = "#00a5ff", pulseSpeed = 2.5, pulseAmplitude = 0.7 }) {
  const matRef = useRef();
  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_colorA: { value: new THREE.Color(colorA) },
      u_colorB: { value: new THREE.Color(colorB) },
      u_displaceAmp: { value: 0.12 }, // más suave
      u_noiseScale: { value: 1.1 },
      u_pulseSpeed: { value: pulseSpeed },
      u_pulseAmplitude: { value: pulseAmplitude },
    }),
    [colorA, colorB, pulseSpeed, pulseAmplitude]
  );

  useFrame((state) => {
    uniforms.u_time.value = state.clock.getElapsedTime();
  });

  return (
    <shaderMaterial
      ref={matRef}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader.replace(/\/\/ Ripple.*\n[\s\S]*\/\/ Composición final/, `
        // Solo gradiente + halo pulsante
        vec3 col = base + vec3(0.0, 1.0, 0.8) * f * (0.6 + sin(u_time * u_pulseSpeed) * 0.5 * u_pulseAmplitude);
      `)}
      uniforms={uniforms}
      transparent={true}
      side={THREE.FrontSide}
    />
  );
}

// En tu HeroSphere usa:
<Canvas
  camera={{ position: [0, 0, 3] }}
  style={{ background: "#0b0b0b" }} // Fondo oscuro como G HUB
>
  <ambientLight intensity={0.4} />
  <Blob />
</Canvas>


function Blob() {
  const group = useRef();
  const [pointer, setPointer] = useState(new THREE.Vector2(-2, -2)); // Estado para la posición del puntero

  // Auto-rotación suave
  useFrame((_, dt) => {
    if (!group.current) return;
    group.current.rotation.y += dt * 0.15;
  });

  // Manejadores de eventos del puntero
  const handlePointerMove = (e) => {
    // R3F proporciona coordenadas UV directamente en los eventos del puntero
    if (e.uv) {
        setPointer(new THREE.Vector2(e.uv.x * 2.0 - 1.0, e.uv.y * 2.0 - 1.0));
    }
  };

  const handlePointerLeave = () => {
    setPointer(new THREE.Vector2(-2, -2)); // Mueve el puntero fuera de pantalla al salir
  };

  return (
    <group ref={group}>
      <mesh 
        onPointerMove={handlePointerMove} 
        onPointerLeave={handlePointerLeave}
      >
        <sphereGeometry args={[1, 192, 192]} />
        <BlobMaterial pointer={pointer} /> {/* Pasa el estado del puntero al material */}
      </mesh>
    </group>
  );
}

// HeroSphere es ahora solo el contenedor de la Blob
export default function HeroSphere() {
  return (
    <Blob />
  );
}
