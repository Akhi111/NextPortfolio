"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export function GlassOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    // Mouse tracking interpolation
    const mouseX = state.pointer.x * 0.5;
    const mouseY = state.pointer.y * 0.5;

    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.damp(
        meshRef.current.rotation.x,
        mouseY * 0.4 + state.clock.getElapsedTime() * 0.2,
        4,
        delta
      );
      meshRef.current.rotation.y = THREE.MathUtils.damp(
        meshRef.current.rotation.y,
        mouseX * 0.6 + state.clock.getElapsedTime() * 0.3,
        4,
        delta
      );
    }

    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.35;
      ringRef.current.rotation.y += delta * 0.45;
      ringRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
    }

    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.4;
      innerRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Float
      speed={2.2}
      rotationIntensity={0.6}
      floatIntensity={1.2}
      floatingRange={[-0.15, 0.15]}
    >
      <group>
        {/* Main Translucent Liquid Glass Orb */}
        <mesh ref={meshRef} scale={1.85}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#38bdf8"
            attach="material"
            distort={0.35}
            speed={1.8}
            roughness={0.15}
            metalness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.88}
            ior={1.45}
            thickness={1.5}
            transparent={true}
            opacity={0.9}
          />
        </mesh>

        {/* Inner Geometric Core with Iridescent Glow */}
        <mesh ref={innerRef} scale={0.9}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#7c3aed"
            emissiveIntensity={0.6}
            wireframe={true}
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>

        {/* Orbiting Metallic Glass Ring */}
        <mesh ref={ringRef} scale={2.8}>
          <torusGeometry args={[1, 0.035, 16, 100]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={0.3}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>

        {/* Secondary Delicate Diagonal Ring */}
        <mesh rotation={[Math.PI / 3, 0, 0]} scale={2.4}>
          <torusGeometry args={[1, 0.02, 16, 80]} />
          <meshStandardMaterial
            color="#c084fc"
            emissive="#9333ea"
            emissiveIntensity={0.2}
            roughness={0.2}
            metalness={0.85}
          />
        </mesh>
      </group>
    </Float>
  );
}

