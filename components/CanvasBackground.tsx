'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function MouseParallaxContainer({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const targetX = state.pointer.x * 2;
    const targetY = state.pointer.y * 2;
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
  });

  return <group ref={groupRef}>{children}</group>;
}

function CursorLight() {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (!lightRef.current) return;
    const x = (state.pointer.x * state.viewport.width) / 2;
    const y = (state.pointer.y * state.viewport.height) / 2;
    
    lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, x, 0.1);
    lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, y, 0.1);
  });

  return <pointLight ref={lightRef} distance={15} intensity={6} color="#8B5CF6" />;
}

export default function CanvasBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      className="absolute inset-0 bg-white"
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#4F46E5" />
      
      <CursorLight />
      
      <MouseParallaxContainer>
        <Sparkles
          count={100}
          scale={[25, 25, 10]}
          size={1.6}
          speed={0.4}
          color="#4F46E5"
          opacity={0.35}
        />
        <Sparkles
          count={60}
          scale={[25, 25, 10]}
          size={2.2}
          speed={0.3}
          color="#8B5CF6"
          opacity={0.25}
        />

        {/* Liquid Blob 1 (Top Left) */}
        <Float speed={3} rotationIntensity={0.6} floatIntensity={1.5}>
          <mesh position={[-6, 3, -5]}>
            <sphereGeometry args={[2, 64, 64]} />
            <MeshDistortMaterial
              color="#EEF2F6"
              clearcoat={1}
              clearcoatRoughness={0.1}
              metalness={0.1}
              roughness={0.2}
              distort={0.3}
              speed={1.5}
              transparent
              opacity={0.45}
            />
          </mesh>
        </Float>

        {/* Liquid Blob 2 (Center Right) */}
        <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
          <mesh position={[6, -2, -4]}>
            <sphereGeometry args={[2.2, 64, 64]} />
            <MeshWobbleMaterial
              color="#F3E8FF"
              factor={0.4}
              speed={1.8}
              roughness={0.1}
              metalness={0.2}
              transparent
              opacity={0.4}
            />
          </mesh>
        </Float>

        {/* Liquid Blob 3 (Bottom Center) */}
        <Float speed={4} rotationIntensity={0.8} floatIntensity={2}>
          <mesh position={[-1, -5, -6]}>
            <sphereGeometry args={[1.8, 64, 64]} />
            <MeshDistortMaterial
              color="#E0E7FF"
              clearcoat={0.5}
              roughness={0.3}
              distort={0.4}
              speed={2.2}
              transparent
              opacity={0.5}
            />
          </mesh>
        </Float>

        {/* Floating Geometric Wireframe Torus (Top Right) */}
        <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1}>
          <mesh position={[5, 4, -7]} rotation={[0.5, 0.5, 0.5]}>
            <torusGeometry args={[1.5, 0.35, 16, 100]} />
            <meshStandardMaterial
              color="#6366F1"
              wireframe
              transparent
              opacity={0.12}
            />
          </mesh>
        </Float>

        {/* Floating Geometric Wireframe Torus Knot (Bottom Left) */}
        <Float speed={3.5} rotationIntensity={1.5} floatIntensity={1.5}>
          <mesh position={[-6, -4, -8]} rotation={[0.2, 0.8, 0.1]}>
            <torusKnotGeometry args={[1.2, 0.3, 100, 16]} />
            <meshStandardMaterial
              color="#8B5CF6"
              wireframe
              transparent
              opacity={0.08}
            />
          </mesh>
        </Float>
      </MouseParallaxContainer>
    </Canvas>
  );
}
