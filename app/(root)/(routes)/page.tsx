"use client";
import Loader from "@/components/loader";
import { ToggleTheme } from "@/components/toggle-theme";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        Popup
      </div>

      <Canvas
        camera={{ near: 0.1, far: 1000 }}
        className="w-full h-screen bg-transparent"
      >
        <Suspense fallback={<Loader />}></Suspense>
      </Canvas>
    </section>
  );
}
