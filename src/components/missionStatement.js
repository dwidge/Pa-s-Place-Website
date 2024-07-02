import { useEffect, useRef, useState } from 'react';
import styles from './MissionStatement.module.css';
import missionStatementIcon from '../../public/missionStatement/bg.jpg';

const MissionStatement = () => {
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
      uniform sampler2D u_image;
      uniform float u_time;
      uniform vec2 u_resolution;
      varying vec2 v_texCoord;

      void main() {
        vec2 uv = v_texCoord;
        vec2 texel = 1.0 / u_resolution;
        
        uv += vec2(
          sin(uv.y * 10.0 + u_time) * 0.01,
          cos(uv.x * 10.0 + u_time) * 0.01
        );
        
        gl_FragColor = texture2D(u_image, uv);
      }
    `;

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(
      gl,
      gl.FRAGMENT_SHADER,
      fragmentShaderSource,
    );
    const program = createProgram(gl, vertexShader, fragmentShader);

    const positionAttributeLocation = gl.getAttribLocation(
      program,
      'a_position',
    );
    const imageLocation = gl.getUniformLocation(program, 'u_image');
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const image = new Image();
    image.src = missionStatementIcon.src;
    image.onload = () => {
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        image,
      );
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

      let startTime = Date.now();
      function render() {
        const currentTime = (Date.now() - startTime) / 1000;

        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.useProgram(program);

        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.vertexAttribPointer(
          positionAttributeLocation,
          2,
          gl.FLOAT,
          false,
          0,
          0,
        );

        gl.uniform1i(imageLocation, 0);
        gl.uniform1f(timeLocation, currentTime);
        gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);

        gl.drawArrays(gl.TRIANGLES, 0, 6);

        requestAnimationFrame(render);
      }

      render();
    };

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
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.missionBox}>
          <h1 className={styles.title}>Our Mission Statement</h1>
          <p>
            At Pa’s Place, our mission is to nurture the spirits of young guests
            by providing a safe, enriching environment that fosters community,
            personal growth, and unforgettable experiences. Through
            compassionate care and innovative programs, we aim to inspire and
            empower youth, granting them solace, inspiration, and a sense of
            belonging.
          </p>
        </div>
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

export default MissionStatement;
