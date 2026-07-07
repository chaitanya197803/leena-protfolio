'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function MouseParallaxContainer({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const targetX = state.pointer.x * 1.5;
    const targetY = state.pointer.y * 1.5;
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
  });

  return <group ref={groupRef}>{children}</group>;
}

export default function CanvasBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      className="absolute inset-0 bg-white"
    >
      <ambientLight intensity={1.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      
      <MouseParallaxContainer>
        <Sparkles
          count={100}
          scale={[25, 25, 10]}
          size={1.6}
          speed={0.4}
          color="#6366F1"
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

        <Float speed={2} rotationIntensity={0.4} floatIntensity={1.5}>
          <mesh position={[-6, 3, -6]}>
            <sphereGeometry args={[2.5, 32, 32]} />
            <meshBasicMaterial color="#E0E7FF" transparent opacity={0.35} />
          </mesh>
        </Float>

        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.2}>
          <mesh position={[6, -3, -5]}>
            <sphereGeometry args={[3, 32, 32]} />
            <meshBasicMaterial color="#F3E8FF" transparent opacity={0.3} />
          </mesh>
        </Float>

        <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.8}>
          <mesh position={[-1, -5, -7]}>
            <sphereGeometry args={[2, 32, 32]} />
            <meshBasicMaterial color="#EEF2F6" transparent opacity={0.4} />
          </mesh>
        </Float>
      </MouseParallaxContainer>
    </Canvas>
  );
}
