import "../styles/experience.css";
import core4 from '../assets/images/core4.png'

import me from '../assets/me.png'


const Experience = () =>{

    return(

            <div id="experience"> 
                <h1>$: Experience</h1>
                <section id="experienceContent">
                    
                    <div id="experienceBlock">
                        <h5>
                            System Admin Intern @ <strong>NYS ITS </strong>
                        </h5>
                        <h6>July 2026 - present</h6>
                        <section>
                            <ul>
                                <li >
                                    
                                    I Assist with patching, updating, virutal machines 
                                    with citirx tools accross NYS agencies including the 
                                    New York State Police Department
                                    
                                </li>
                                <li>
                                    Guided the transation from Splunk Enterprise to 
                                    Kibana Elastic Search
                                </li>
                
                            </ul>
                        </section>
                    </div>
                    
                    <img src={core4} alt="core4" width ="400px"/>

                </section>

            
            </div>
    )




}
export default Experience;