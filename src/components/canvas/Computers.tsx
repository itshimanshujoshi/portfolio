import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Computers: React.FC = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -4.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only show on desktop screens (> 1024px)
    const desktopQuery = window.matchMedia("(min-width: 1025px)");

    // Set initial value
    setIsDesktop(desktopQuery.matches);

    // Callback function for media query changes
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    // Add event listener
    desktopQuery.addEventListener("change", handleDesktopChange);

    // Cleanup
    return () => {
      desktopQuery.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  if (!isDesktop) {
    return null;
  }

  return (
    <div className="absolute inset-0 top-0 h-screen w-full pointer-events-none">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="pointer-events-auto"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enableDamping={true}
            dampingFactor={0.05}
          />
          <Computers />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;