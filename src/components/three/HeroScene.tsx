"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { GlassOrb } from "./GlassOrb";

// Fallback UI when 3D is loading or if WebGL is disabled
function CanvasFallback() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-sky-500/20 via-purple-500/15 to-cyan-400/20 backdrop-blur-2xl border border-white/20 animate-pulse-glow flex items-center justify-center shadow-[0_0_80px_rgba(56,189,248,0.25)]">
        <div className="w-44 h-44 rounded-full border border-sky-400/30 animate-spin-slow" />
        <div className="absolute w-28 h-28 rounded-2xl border border-purple-400/30 rotate-45 animate-pulse" />
      </div>
    </div>
  );
}

export function HeroScene() {
  const [mounted, setMounted] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglSupported(false);
      }
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (!mounted) {
    return <CanvasFallback />;
  }

  if (!webglSupported) {
    return <CanvasFallback />;
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">
      <Suspense fallback={<CanvasFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5.2], fov: 45 }}
          dpr={[1, 1.8]} // Clamped for smooth 60fps on Retina displays
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          className="cursor-grab active:cursor-grabbing"
        >
          {/* Ambient soft glow */}
          <ambientLight intensity={0.8} />

          {/* Key light for surface reflection */}
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />

          {/* Rim light with cyan accent */}
          <pointLight position={[-10, -5, -5]} intensity={2.5} color="#38bdf8" />

          {/* Accent light with purple hue */}
          <pointLight position={[5, -5, 5]} intensity={2.0} color="#c084fc" />

          {/* The interactive liquid glass orb mesh */}
          <GlassOrb />
        </Canvas>
      </Suspense>
    </div>
  );
}

