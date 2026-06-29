//animejs
import { animate, stagger} from 'animejs';
import { useEffect, useRef,Suspense} from 'react';

//importing 3d model
import { Canvas } from "@react-three/fiber";
import Model from "./Model/Model.jsx";
import { OrbitControls } from '@react-three/drei'

//styles
import './Simulation.css';

const GRID_WIDTH = 20;
const GRID_HEIGHT = 26;
function Simulation() {
  //animation when button is clicked
  const containerRef = useRef(null);
  /**
   * breathing animation for background of simulation
   */
  useEffect(() => {
    if(!containerRef.current) return;
    const allDots = containerRef.current.querySelectorAll(".dot-point");

    animate(allDots, {
      keyframes: [
            {scale: 1.15, duration: 250, ease:"outSine"},
            {scale: 1, duration:500, ease:"outInOutQuad"},
            {y: -10, duration: 250, ease:"outSine"},
            {y: 0, duration:500, ease:"outInOutQuad"},
            {opacity: 1, duration: 250, ease:"outSine"},
            {opacity: 1.5, duration:500, ease:"outInOutQuad"},
      ],
      delay:stagger(150,{
        grid:[GRID_WIDTH, GRID_HEIGHT],
        from: "center",
      }),
      loop:true,
    });
  },[]);

  const dots = [];
  let index = 0;

  //generating the number of dots being displayed
  for(let i=0; i < GRID_WIDTH;i++){
    for(let j= 0; j < GRID_HEIGHT; j++){
      dots.push(
        <div 
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div 
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-500 opacity-50 "
            data-index={index}
            >
          </div>
        </div>

      )
      index++;  
    }
  }
  
  return (
    <div 
      ref={containerRef} 
      style={{gridTemplateColumns: `repeat(${GRID_WIDTH},1fr)`}} 
      className=" relative grid w-fit  border-4 hover:border-sky-100"
      >
      {dots}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <Canvas camera={{ position: [0,0,5], fov: 60}}>
           <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={2} />
            <Model/>
            <OrbitControls/>
        </Canvas>
      </div>
      
    </div>
  )
}

export default Simulation;