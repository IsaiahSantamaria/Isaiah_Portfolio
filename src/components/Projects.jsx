import "../styles/projects.css";
import core4 from "../assets/images/core4.png"
import woodStock from "../assets/images/woodStock.png"
import tylersMaze from "../assets/images/tylersMaze.png"






const Projects = () =>{

    const track = document.getElementById('gallery');

    let scrollAmount = 0;

    function autoScroll() {
        const slideWidth = track.clientWidth; // Get width of one image
        scrollAmount += slideWidth;

        // Reset to start if at the end
        if (scrollAmount === track.scrollWidth) {
          scrollAmount = 0;
        }   
        track.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
        });


    }

    // Scroll every 3 seconds
    setInterval(autoScroll, 10000);

    return (
        <div id="projects">
            <h1>
                $: Projects
            </h1>
            
            <div id="gallery">
                <div class ="photo">
                    
                    <img src={woodStock}alt="woodStock" />
                    <div class="content">
                        <h2>WoodStock AI</h2>
                        <p>AI agent that can</p>
                        <p>n8n</p>
                    </div>
                    
                </div>

                <div class ="photo">
                    <img src={tylersMaze}alt="woodStock" />
                    <div class="content">
                        <h2>Tylers Maze</h2>
                        <p>Top view puzzel game</p>
                        <p>construct 3</p>
                    </div>
                </div>
                

            </div>
        </div>

    )
}

export default Projects;