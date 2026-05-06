import "../styles/intro.css";
import heroImg from '../assets/hero.png'
import me from '../assets/me.png'


const Intro = () => {
    return(
        <div id="intro">

            <div id="introSimulation" >
                <img src={heroImg} alt="hero" height= "450" />
            </div>

            <div id="introBlock">
                <h1> Hello, it's Isaiah</h1>
                
                <p>I am a rising <strong><u>Software Developer</u></strong> and artist. 
                    I am based in  Albany, NY and currently 
                    attending Siena Univeristy for my  Bachelors
                     In Computer Science
                </p>

                <div id="buttons">
                    <button id="sayHi">
                        Say hello
                    </button>

                    <button id="schedule">
                        Schedule a meet
                    </button>

                </div>
            </div>
        </div>       
    )


}


export default Intro;