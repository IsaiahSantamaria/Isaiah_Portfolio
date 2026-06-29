// Source - https://stackoverflow.com/a/77887283
// Posted by Łukasz Mestales, modified by community. See post 'Timeline' for change history
// Retrieved 2026-06-29, License - CC BY-SA 4.0

// src/components/Model.jsx
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model = () => {
  const gltf = useLoader(GLTFLoader,  `${import.meta.env.BASE_URL}models/donut.glb`);
  return (
    <>
      <primitive object={gltf.scene} scale={8} />
    </>
  );
};
export default Model;
