import "./Navbar.css";


const navLinks = {
    //pages
    home: {label: 'Home', path:'/'},
    about:{label: 'About', path: '/'},
    experience:{label: 'Experience', path: 'https://docs.google.com/document/d/1MHjsiJQJE25XYcKBKqE9F3zFayM6BubI/edit?usp=sharing&ouid=106151378304154963111&rtpof=true&sd=true'},    
    projects:{label: 'Projects', path: '/'},


    //outside links
    github :{ label: 'Github', path: 'https://github.com/IsaiahSantamaria'},
    linkedin:{ label: 'LinkedIn', path: 'https://www.linkedin.com/in/isaiahasanta/'},
    instagram:{label: 'Instagram', path:'https://www.instagram.com/zaysantcomputes/?utm_source=ig_web_button_share_sheet'},
    email:{ label: 'Email', path: 'mailto:isaiahasant@gmail.com'},
}

const Navbar = () => {
    return (  
        <div id="nav" className="" >
            <nav className="border-b-2 border-b-sky-300 pl-[10vw] pr-[10vw]">
                <div id="navbar_left" className="navbar-left flex ">
                    <a href="" ><ul className="max-[500px]:text-sm">Isaiah</ul></a>
                    <a href="" ><ul className="max-[500px]:text-sm">About</ul></a>
                    <a href={navLinks.experience.path} target="_blank" ><ul className="max-[500px]:text-sm">Experience</ul></a>
                    <a href="" ><ul className="max-[500px]:text-sm">Projects</ul></a>
                </div>
                <div id="navbar_right" className="flex gap-[15px]">
                    <a href={navLinks.github.path} target="_blank"><ul class ="fa-brands fa-github"></ul></a>
                    <a href={navLinks.linkedin.path} target="_blank"><ul class="fa-brands fa-linkedin"></ul></a>
                    <a href={navLinks.instagram.path} target="_blank"><ul class="fa-brands fa-instagram"> </ul></a>
                    <a href={navLinks.email.path} target="_blank"><ul class="fa-regular fa-envelope"></ul></a>
                </div>
                <div id="" className="mobileNavbar flex ">
                    <button><i className="fa-solid fa-bars fa-2x hover:text-slate-600 "></i></button>
                    <ul className ="hidden">
                        <li><a href="" ><ul className="max-[500px]:text-sm">Isaiah</ul></a></li>
                        <li><a href="" ><ul className="max-[500px]:text-sm">About</ul></a></li>
                        <li><a href={navLinks.experience.path} target="_blank" ><ul className="max-[500px]:text-sm">Experience</ul></a></li>
                        <li><a href="" ><ul className="max-[500px]:text-sm">Projects</ul></a></li>
                        <li><a href={navLinks.github.path} target="_blank"><ul class ="fa-brands fa-github"></ul></a></li>
                        <li><a href={navLinks.linkedin.path} target="_blank"><ul class="fa-brands fa-linkedin"></ul></a></li>
                        <li><a href={navLinks.instagram.path} target="_blank"><ul class="fa-brands fa-instagram"> </ul></a></li>
                        <li><a href={navLinks.email.path} target="_blank"><ul class="fa-regular fa-envelope"></ul></a></li>

                        
                    </ul>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar;
