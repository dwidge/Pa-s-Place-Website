// src/shaders/TurbulenceShader.js
import * as THREE from 'three';

const TurbulenceShader = {
  uniforms: {
    u_time: { value: 0.0 },
    u_texture: { value: null },
    u_resolution: { value: new THREE.Vector2() }
  },
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float u_time;
    uniform sampler2D u_texture;
    uniform vec2 u_resolution;

    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;

      float frequency = 3.0;
      float amplitude = 0.1;
      
      vec2 p = uv * frequency;
      p += vec2(u_time * 0.05, u_time * 0.05);

      vec2 q = p + vec2(0.0, 4.0);
      vec2 r = p + vec2(4.0, 0.0);

      float noise = sin(q.x * q.y) * 0.5 + 0.5;
      noise += sin(r.x * r.y) * 0.5 + 0.5;

      uv += noise * amplitude;

      vec4 color = texture2D(u_texture, uv);
      gl_FragColor = color;
    }
  `
};

export default TurbulenceShader;
