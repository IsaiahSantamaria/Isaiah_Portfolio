import "./Intro.css";
import Simulation from './Simulation/Simulation.jsx'
import Name from './Name/Name.jsx'


const Intro = () => {
    return(
        <div id="intro">
            <Simulation/>
            <div id="introBlock">
                <Name/>
                <p>I am a rising <strong><u>DevSecOps Engineer</u></strong> and artist. 
                    I am based in  Albany, NY and currently 
                    attending Siena Univeristy for my  Bachelors
                    In Computer Science. I have a strong interest in creating 
                    applications, platforms and games!
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