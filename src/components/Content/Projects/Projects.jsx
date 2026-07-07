import {React, useState} from 'react';
//style
import './Projects.css';
//images
import ProjectCard from'./ProjectCard/Project.jsx';
import img_example from '/home_page.png';
import portfolio from '/images/projects/Portfolio.png'
import peanutsArchImg from '/images/projects/PeanutArch.png';
import tylersMazeImg from '/images/projects/TylersMaze.png';
import woodStockAIImg from '/images/projects/WoodStockAI.png';
//animation
import FadeInSection from '../../FadeInSection.jsx';
const Projects = () =>{
    const [Projects, setProjects] = useState();

    const links = {github: 'https://github.com/IsaiahSantamaria',};



    const ProjectLogs = [
        {id: 1, header: 'Isaiah\'s Porfolio', disc: 'This is my portfolio website where I introduce myself and present my projects', 
            techStack: 'ReactJs, Vite, ThreeJS, animeJS, ', repoLink: 'https://github.com/IsaiahSantamaria/Isaiah_Portfolio',  
            demoLink:'https://isaiahsantamaria.github.io/Isaiah_Portfolio/', srcImg: portfolio},
        {id: 2, header: 'PeanutArch', disc: 'This past summer(2026), I configured and maintained an Archlinux OS on my personal laptop',
            techStack: 'ArchLinux, Hyprland, Bash, CSS', repoLink: 'https://github.com/IsaiahSantamaria/PeanutsArch', 
            demoLink:'https://github.com/IsaiahSantamaria/PeanutsArch', srcImg: peanutsArchImg},
        {id: 3, header: 'Woodstock AI', disc: 'This is my research project introducing drag and drop features to AI development with n8n(Workflow Automation Tool)', 
            techStack: 'n8n, nodeJs, docker, JSON, Ollama, OpenAI',repoLink: 'https://github.com/IsaiahSantamaria/Woodstock-AI', 
            demoLink:'https://github.com/IsaiahSantamaria/Woodstock-AI', srcImg: woodStockAIImg},
        {id: 4, header: 'Tyler\'s Maze', disc: 'Senior year of High school(2024), I created a 2D top view game heavily inpsired by Undertale and retro-pokemon with Construct3(PC support only)', 
            techStack: 'Construct3, html5', repoLink: 'https://github.com/IsaiahSantamaria/Tyler-s-Maze', 
            demoLink:'https://www.construct.net/en/free-online-games/tylers-maze-71785/play', srcImg: tylersMazeImg},
    ];

    return(
        <div id="Projects" className="">
            <div className="header_container flex flex-row justify-between ">
                <h1 className="header"><strong><i class="fa-solid fa-web-awesome"></i> Projects</strong></h1>
                <div>
                    <a href={links.github} target="_blank"><i className="fa-regular fa-folder-open fa-2x"></i></a>
                </div>
            </div>
            
            <div id="rendering_projects" className="flex flex-row justify-center gap-4 flex-wrap ">
                {ProjectLogs.map(project =>(
                        <ProjectCard
                            header={project.header}
                            img={project.srcImg}
                            discription={project.disc}
                            id={project.id}
                            techStack={project.techStack}
                            repoLink={project.repoLink}
                            demoLink={project.demoLink}
                        />
                    ))
                }
            </div>
            

        </div>
    )



}

export default Projects;
