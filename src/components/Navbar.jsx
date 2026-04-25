import "../styles/navbar.css";


const Navbar = () => {
    return (

        
        <div id="navbarTop">
            <nav>
                <div class="navbarLeft">
                    <a href=""><ul>Isaiah</ul></a>
                    <a href=""><ul>About</ul></a>
                    <a href=""><ul>Experience</ul></a>
                    <a href=""><ul>Project</ul></a>
                    
                </div>

                <div class="navbarRight">
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