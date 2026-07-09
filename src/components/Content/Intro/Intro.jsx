import {React, useEffect} from 'react';
import { animate, createScope, spring, createDraggable } from 'animejs';
//import { useNavigate } from 'react-router-dom';

import "./Intro.css";
import Simulation from './Simulation/Simulation.jsx'
import Name from './Name/Name.jsx'
import FadeInSection from '../../FadeInSection.jsx';


const Intro = () => {
    //objects
    const navLinks = {
        email: {label: 'Email', path:'mailto:isaiahasant@gmail.com'},
        schedule:{label: 'Schedule', path:'https://cal.com/isaiah-santamaria-v78bjr'} 
    };
    
    



    //responsible for making component sleep before playing button animations
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms)); //use slow down action to play animation before navigating
    //function responsible for navigating to link 
    const openLink = async (e, link) => {
        await animate(e.currentTarget, {
            scale:[1,1.25,1] //animation
        }).finished;
        await sleep(500); //waits 5 miliseconds
        window.open(link, "_blank"); //opens link
    };

    return(
        <div id="intro" className="border-b border-b-4 border-gray-800">
            <div id="simulation_control">
                <Simulation/>
            </div>
            <div id="introBlock" >
                <div id="name_controller">
                    <Name/>
                </div>
                <FadeInSection>
                    <p>I am a rising <strong>DevSecOps Engineer</strong> and artist. 
                    I am based in  <u><a target="_blank" href="https://google.com/search?q=Albany, New York" className="font_size_control">Albany, NY</a></u> and currently 
                    attending Siena University for my Bachelors
                    In Computer Science. I have a strong interest in creating 
                    applications, platforms and games!
                    </p>
                    <div id="buttons" className="flex gap-4">
                        <button id="say_hi" 
                                className="border border-3 border-sky-300 hover:bg-zinc-800"
                                onClick={(e)=> openLink(e,navLinks.email.path)}
                                >
                            Say hello
                        </button>
                        <button id="schedule" 
                                className="border border-3 border-sky-300 hover:bg-zinc-800"
                                onClick={(e) => openLink(e,navLinks.schedule.path)}
                                >
                            Schedule a meet
                        </button>
                    </div>
                </FadeInSection>
            </div>
        </div>       
    )


}


export default Intro;