import "./Intro.css";
import Simulation from './Simulation/Simulation.jsx'



const Intro = () => {
    return(
        <div id="intro">
            <Simulation/>
            <div id="introBlock">
                <h1 id="intro_name" className=""> Hello, it's Isaiah</h1>
                <p className="text-lg">I am a rising <strong><u>Software Developer</u></strong> and artist. 
                    I am based in  Albany, NY and currently 
                    attending Siena Univeristy for my  Bachelors
                     In Computer Science
                </p>

                <div id="buttons">
                    <button id="sayHi" className="border border-2 border-sky-200 hover:bg-zinc-800">
                        Say hello
                    </button>

                    <button id="schedule" className="border border-2 border-sky-200 hover:bg-zinc-800">
                        Schedule a meet
                    </button>

                </div>
            </div>
        </div>       
    )


}


export default Intro;