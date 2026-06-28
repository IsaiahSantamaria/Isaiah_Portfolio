import { animate, stagger} from 'animejs';
import { useEffect, useRef, useState } from 'react';
import reactLogo from './react.svg';
import './Simulation.css';

const WaterDropGrid = () =>{

};

const GRID_WIDTH = 25;
const GRID_HEIGHT = 25;



function Simulation() {

  //animation when button is clicked
  const containerRef = useRef(null);


  const handleDotClick = (e) => {
    const dot = e.currentTarget.querySelector(".dot-point");
    const allDots = containerRef.current.querySelectorAll(".dot-point")
    console.log(dot);
    animate(allDots, {
        keyframes: [
            { scale: 1.35, y: -15, opacity: 1, duration: 250, ease: "outSine" },
            { scale: 1, y: 0, opacity: 0.5, duration: 500, ease: "inOutQuad" },
        ],
        delay:stagger(100),
    });
};


  const dots = [];
  let index = 0;
  
  
  //generating the number of dots being displayed
  for(let i=0; i < GRID_WIDTH;i++){
    for(let j= 0; j < GRID_HEIGHT; j++){
      dots.push(
        <div 
          
          onClick={handleDotClick}
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div 
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-500 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
            >
            
          </div>
        </div>

      )
      
    }
  }
  
  return (
    <div 
      ref={containerRef} 
      style={{gridTemplateColumns: `repeat(${GRID_WIDTH},1fr)`}} 
      className=" grid w-fit  border-4 hover:border-sky-100"
      >
      {dots}
    </div>
  )
}

export default Simulation;