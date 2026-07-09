/**
 * reference code 
 * Source - https://stackoverflow.com/a/77887283 Posted by Łukasz Mestales, 
 * modified by community. See post 'Timeline' for change history 
 * Retrieved 2026-06-29, License - CC BY-SA 4.0
 */
import { useEffect, useState} from 'react';

//importing 3d model
import { Canvas } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'


//styles
import './Simulation.css';
function Scene({size}){
  // exporting glb file into object -- > can't simply do /public/ reference due to page getting confused getting it, idk why but gpt figured 
  // that part out
  const model = useLoader(GLTFLoader,  `${import.meta.env.BASE_URL}models/LaptopTest.glb`);
  return(
    <Canvas camera={{ position: [0,2,7], fov: 80}}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <primitive object={model.scene} scale={size} />
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={3.0}
        enableDamping={true}
      />
    </Canvas> 
  )
}

const Simulation = () => {
  return (
    <div id="simulation_container">
      {/**note do not inlcuding FUCKING LIGHTING INTO YOUR MODEL, IT WILL IN FACT BREAK!*/}
        <Scene size={2}/> 
    </div>
  )
}

export default Simulation;