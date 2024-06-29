// src/components/MissionStatement.js
import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { shaderMaterial, extend, Canvas, useFrame, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';
import TurbulenceShader from '../shaders/TurbulenceShader';
import * as THREE from 'three';

// Extend the shader material for use in the canvas
const TurbulenceMaterial = shaderMaterial(
  TurbulenceShader.uniforms,
  TurbulenceShader.vertexShader,
  TurbulenceShader.fragmentShader
);
extend({ TurbulenceMaterial });

const TurbulencePlane = () => {
  const materialRef = useRef();
  const { size } = useThree();

  useEffect(() => {
    new TextureLoader().load('/public/missionStatement/bg.jpg', (texture) => {
      if (materialRef.current) {
        materialRef.current.uniforms.u_texture.value = texture;
        materialRef.current.uniforms.u_resolution.value.set(size.width, size.height);
      }
    });
  }, [size]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh>
      <planeBufferGeometry args={[size.width, size.height]} />
      <turbulenceMaterial ref={materialRef} />
    </mesh>
  );
};

// Dynamically import the Canvas component to ensure it only renders on the client side
const DynamicCanvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), {
  ssr: false,
});

const MissionStatement = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <DynamicCanvas>
        <TurbulencePlane />
      </DynamicCanvas>
    </div>
  );
};

export default MissionStatement;
