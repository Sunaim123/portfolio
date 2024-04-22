import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
// import { HemisphereLight, PointLight } from "three";

const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor="white" />
      <pointLight intensity={2} />
      <spotLight   position={[-20, 70, 10]}  angle={1} penumbra={1} castShadow shadow-mapSize={1024}/>
      <primitive
        object={computer.scene}
        scale={ 0.7}
        position={isMobile?[0, -3, -2.2]:[0, -3.5, -1.5]}
        // rotation={[-0.01, 0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const[isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  },[])
  

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 10, 5], fov: isMobile ? 40 : 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
