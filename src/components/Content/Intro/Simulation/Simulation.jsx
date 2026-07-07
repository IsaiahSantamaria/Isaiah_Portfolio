
import { useEffect, useState} from 'react';

//importing 3d model
import { Canvas } from "@react-three/fiber";
import Model from "./Model/Model.jsx";


//styles
import './Simulation.css';

function Simulation() {
  return (
    <div id="simulation_container">
      {/**note do not inlcuding FUCKING LIGHTING INTO YOUR MODEL, IT WILL IN FACT BREAK!*/}
        <Model size={2}/> 
    </div>
  )
}
export default Simulation;