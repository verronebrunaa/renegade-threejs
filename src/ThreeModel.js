import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

function ThreeModel() {
  const modelUrl = "/assets/ImageToStl.com_fastback+audace+2023.gltf";

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model url={modelUrl} />
      <OrbitControls />
    </Canvas>
  );
}

export default ThreeModel;
