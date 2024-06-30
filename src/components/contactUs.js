import React, { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './contactUs.module.css';

const ContactUs = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');

    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    const updateDimensions = () => {
      const { clientWidth, clientHeight } = canvas.parentElement;
      setDimensions({ width: clientWidth, height: clientHeight });
      canvas.width = clientWidth;
      canvas.height = clientHeight;
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions();

    const vertexShaderSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        gl_Position = vec4(a_position, 0, 1);
        v_texCoord = a_position * 0.5 + 0.5;
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      uniform float u_time;
      uniform float u_brightness;
      varying vec2 v_texCoord;

      void main() {
        vec2 uv = v_texCoord;
        float lines = sin(uv.x * 30.0 + u_time) * 0.5 + 0.5;
        lines += sin(uv.y * 20.0 - u_time) * 0.5 + 0.5;
        gl_FragColor = vec4(vec3(lines * u_brightness), 1.0);
      }
    `;

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    const program = createProgram(gl, vertexShader, fragmentShader);

    const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const brightnessLocation = gl.getUniformLocation(program, "u_brightness");

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1,
    ]), gl.STATIC_DRAW);

    let startTime = Date.now();
    function render() {
      const currentTime = (Date.now() - startTime) / 1000;

      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);

      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform1f(timeLocation, currentTime);
      gl.uniform1f(brightnessLocation, 0.5); // Adjust brightness here

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      requestAnimationFrame(render);
    }

    render();

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div className={styles.container}>
      <canvas 
        ref={canvasRef} 
        className={styles.backgroundCanvas}
        width={dimensions.width}
        height={dimensions.height}
      />
      <div className={styles.content}>
        <h1>Contact Us</h1>
        <p><FaEnvelope className={styles.icon} /> Email: <a href="mailto:info@pasplace.co.za">info@pasplace.co.za</a></p>
        <p><FaPhone className={styles.icon} /> Phone: <a href="tel:+27833097288">Pierre: 083 309 7288</a></p>
      </div>
    </div>
  );
};

// Helper functions
function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program linking error:', gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

export default ContactUs;
