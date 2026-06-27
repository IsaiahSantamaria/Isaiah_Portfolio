import "./Intro.css";
import Simulation from './Simulation/Simulation.jsx'
import Name from './Name/Name.jsx'


const Intro = () => {
    return(
        <div id="intro">
            <Simulation/>
            <div id="introBlock">
                <Name/>
                <p>I am a rising <strong>DevSecOps Engineer</strong> and artist. 
                    I am based in  <u><a target="_blank" href="https://google.com/search?q=Albany, New York ">Albany, NY</a></u> and currently 
                    attending Siena Univeristy for my  Bachelors
                    In Computer Science. I have a strong interest in creating 
                    applications, platforms and games!
                </p>

                <div id="buttons" className="flex gap-4">
                    <button id="say_hi" className="border border-3 border-sky-300 hover:bg-zinc-800">
                        Say hello
                    </button>

                    <button id="schedule" className="border border-3 border-sky-300 hover:bg-zinc-800">
                        Schedule a meet
                    </button>

                </div>
            </div>
        </div>       
    )


}


export default Intro;