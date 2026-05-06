
import "../styles/about.css";
import heroImg from '../assets/hero.png'


/** IMAGES */
//me
import me from '../assets/me.png'

//languages
import java from '../assets/javaIcon.webp'
import js from '../assets/js.png'
//frameworks
import tailwind from '../assets/tailwindIcon.png'
import bootstrap from '../assets/bootstrapIcon.png'
//devOps
import n8n from '../assets/n8nIcon.png'
import ollama from '../assets/ollamaIcon.png'
import elastic from '../assets/elasticIcon.png'
import git from '../assets/gitIcon.png'
//backend
import nodeJS from '../assets/nodeJSIcon.jpg'





const About = () =>{
    return(
        <div id="about">
            <div id="aboutTop">
                <div id="aboutBlock">
                    <h1>$: About Me</h1>
                    <section>
                        <p><i>Interest</i></p>
                        <p>
                            I just love building projects and learning new technologies. 
                            Nothing makes me happier than seeing others users use and play 
                            around with my creations. As of rightnow, I am currently familiarizing 
                            myself with <strong>DevOps/Cloud</strong>, <strong>Game engines/tools</strong>,
                             and <strong>Web Development</strong>. 
                        </p>
                    </section>
                    <section>
                        <p><i>Hobbies</i></p>
                        <p> For indoors, I like to draw, watch anime and sometimes
                            play video games. When it is nice out, I like to go on after
                            walks and play pickup basketball
                        </p>
                    </section>
                    <div id="aboutButtons">
                        <button id="git_btn">
                            Github
                        </button>

                        <button id="linked_btn">
                            LinkedIn
                        </button>

                    </div>
                </div>

                <div id="introPhoto" >
                    <img src={me} alt="hero" width = "300px" height="400px" />
                </div>

            </div>

            <div id="aboutBottom">
                <h2>Technologies I've used</h2>
                <div id="stackCards">
                    <div class="card">
                        <h3 class="card-title">Backend</h3>
                        <div class="card-content" >
                            <img src={nodeJS} alt="nodeJS" />
                            <img src={java} alt="java" />
                        </div>
                    </div>
                    <div class="card">
                        <h3 class="card-title">Frontend</h3>
                        <div class="card-content" >
                            <img src={js} alt="JavaScript" />
                            <img src={tailwind} alt="Tailwind CSS" />
                            <img src={bootstrap} alt="Bootstrap" />
                        </div >
                    </div>
                    <div class="card">
                        <h3 class="card-title">DevOps/Cloud</h3>
                        <div class="card-content">
                            <img src={n8n} alt="n8n" />
                            <img src={ollama} alt="Ollama"/>
                            <img src={elastic} alt="Elastic" />
                            <img src={git} alt="Git" />
                        </div>
                    </div>

                </div>
                
            </div> 
        </div>      
    )
}

export default About;