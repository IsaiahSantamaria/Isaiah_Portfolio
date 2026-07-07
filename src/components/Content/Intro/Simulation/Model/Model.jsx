
// Source - https://stackoverflow.com/a/77887283
// Posted by Łukasz Mestales, modified by community. See post 'Timeline' for change history
// Retrieved 2026-06-29, License - CC BY-SA 4.0

// src/components/Model.jsx
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from "@react-three/fiber";


const Model = ({size}) => {
  const gltf = useLoader(GLTFLoader,  `${import.meta.env.BASE_URL}models/LaptopTest.glb`);
  return (
    <>
        <Canvas camera={{ position: [0,2,7], fov: 80}}>
           <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <primitive object={gltf.scene} scale={size} />
            <OrbitControls
              autoRotate={true}
              autoRotateSpeed={3.0}
              enableDamping={true}
            />
        </Canvas> 
    </>
  );
};
export default Model;