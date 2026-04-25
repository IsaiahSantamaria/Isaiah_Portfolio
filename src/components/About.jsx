
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
                        <p><strong>Interest</strong></p>
                        <p>y plans for this year is bettering my 
                            skills in web development(Front-end and back-end),  
                            familarize myself with DevOps tools like  
                            AWS and Docker, research LLMs and most importantly..... develop video games!</p>
                    </section>
                    <section>
                        <p><strong>Hobbies</strong></p>
                        <p>For indoors, I like to draw, watch anime and sometimes play video games. When it is nice out, I like to go on walks and play pickup basketball</p>
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
                <h1>
                    Technologies I've used
                </h1>
                <div id="stackCards">
                    <div class="card">
                        <img src={js} alt="JavaScript" />
                        <div class="name">
                            <h4>JavaScript</h4>
                        </div>
                    </div>
                    <div class="card">
                        <img src={java} alt="java" />
                        <div class="name">
                            <h2>Java</h2>
                        </div>
                    </div>
                    <div class="card">
                        <img src={tailwind} alt="tailwind" />
                        <div class="name">
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                    <div class="card">
                        <img src={bootstrap} alt="bootstrap" />
                        <div class="name">
                            <h3>Bootstrap</h3>
                        </div>
                    </div>
                    <div class="card">
                        <img src={git} alt="git" />
                        <div class="name">
                            <h2>Git</h2>
                        </div>
                    </div>
                    <div class="card">
                        <img src={elastic} alt="ollama" />
                        <div class="name">
                            <h3>Elastic</h3>
                        </div>
                    </div>
                    <div class="card">
                        <img src={n8n} alt="ollama" />
                        <div class="name">
                            <h2>n8n</h2>
                        </div>
                    </div>
                    <div class="card">
                        <img src={ollama} alt="ollama" />
                        <div class="name">
                            <h3>Ollama</h3>
                        </div>
                    </div>
                    <div class="card">
                        <img src={nodeJS} alt="nodeJS" />
                        <div class="name">
                            <h3>NodeJS</h3>
                        </div>
                    </div>
                </div>


            </div>
            
        </div>      
    )
}

export default About;