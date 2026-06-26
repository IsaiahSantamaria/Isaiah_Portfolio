import "./Navbar.css";



const Navbar = () => {
    return (
        
        <div id="navbar" >
            <nav className="border-b-2 border-b-sky-300">
                <div className="navbar-left">
                    <a href=""><ul>Isaiah</ul></a>
                    <a href=""><ul>About</ul></a>
                    <a href=""><ul>Experience</ul></a>
                    <a href=""><ul>Project</ul></a>
                    
                </div>

                <div className="navbar-right">
                    <a href=""><ul class ="fa-brands fa-github"></ul></a>
                    <a href=""><ul class="fa-brands fa-linkedin"></ul></a>
                    <a href=""><ul class="fa-brands fa-instagram"> </ul></a>
                    <a href=""><ul class="fa-regular fa-envelope"></ul></a>
                </div>

            </nav>
            
            
        </div>
        
    )
}

export default Navbar;