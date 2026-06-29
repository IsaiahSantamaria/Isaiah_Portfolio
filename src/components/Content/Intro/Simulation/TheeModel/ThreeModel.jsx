import { useGLTF } from "@react-three/drei";

export default function ThreeModel() {
  const { scene } = useGLTF("/models/donut.glb");
  if(!gltf?.scene) return null;
  return <primitive object={scene} scale={1.5} />;
}