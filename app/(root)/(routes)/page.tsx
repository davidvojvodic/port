"use client";
import Loader from "@/components/loader";
import { ToggleTheme } from "@/components/toggle-theme";
import Island from "@/models/island";
import Sky from "@/models/sky";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [4.9, 3, -261.4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        Popup
      </div>

      <Canvas
        camera={{ near: 0.1, far: 1000, position: [-0.1, -0.1, 20.4] }}
        className="w-full h-screen bg-transparent"
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 10, 1]} intensity={3} />
          <ambientLight intensity={2} />

          <hemisphereLight groundColor="#000000" intensity={2} />
          <Sky />

          <Island position={islandPosition} scale={islandScale} />
        </Suspense>
      </Canvas>
    </section>
  );
}
