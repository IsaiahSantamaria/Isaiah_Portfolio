
import './Project.css';

import FadeInSection from '../../../FadeInSection.jsx';

const Project = ({header, img,discription, id, techStack, repoLink, demoLink}) =>{
    
    return(

        <FadeInSection>
            <div className="Project hoverUpAnim ">
                <div className="project_header flex flex-row justify-between">
                    <h3>{header}</h3>
                    <div className="project_card_links">
                        <strong>
                            <a href={repoLink}><i class="fa-brands fa-square-github fa-2x"></i></a>
                            <a href={demoLink}><i class="fa-solid fa-gamepad fa-2x"></i></a>
                        </strong>
                    </div>
                </div>
                <div className="project_image ">
                    <img className="rounded-lg border border-2" src={img} alt={header} />
                </div>
                <div className="w-full project_content flex flex-col items-center justify-between p-3 gap-4">
                    <p2>{discription}</p2>
                    <p2>{techStack}</p2>
                </div>
                
            </div>


        </FadeInSection>
        
    )
}

export default Project;