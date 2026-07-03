
import { useEffect, useState} from 'react';

//importing 3d model
import { Canvas } from "@react-three/fiber";
import Model from "./Model/Model.jsx";


//styles
import './Simulation.css';

function Simulation() {
  const [size, setSize] = useState(30);
  const screenType = {
    small: 430, 
    medium: 834,
    large: 1024,
  };

  useEffect(()=>{
    const updateSize =() =>{
      let width = window.innerWidth;
      if(width < screenType.small){
        setSize(10);
      } else if(width < screenType.medium){
        setSize(10);
      }else{
        setSize(10);
      }
    };
    updateSize(); //set initial size
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  },[]);

  return (
    <div id="simulation_container">
      {/**displaying model @ ipad device size */}
      <Canvas camera={{ position: [0,4,5], fov: 45}}>
        <Model size={10}/> 
      </Canvas>    
    </div>
  )
}
export default Simulation;


