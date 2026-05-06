import "../styles/projects.css";
import core4 from "../assets/images/core4.png"
import woodStock from "../assets/images/woodStock.png"
import tylersMaze from "../assets/images/tylersMaze.png"


const track = document.getElementById('gallery');
let scrollAmount = 0;

function autoScroll() {
  const slideWidth = track.clientWidth; // Get width of one image
  scrollAmount += slideWidth;

  // Reset to start if at the end
  if (scrollAmount >= track.scrollWidth) {
    scrollAmount = 0;
  }

  track.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

// Scroll every 3 seconds
setInterval(autoScroll, 10000);


const Projects = () =>{
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
                        <p1>AI agent that can</p1>
                    </div>
                    
                </div>

                <div class ="photo">
                    <img src={tylersMaze}alt="woodStock" />
                    <div class="content">
                        <h2>Tylers Maze</h2>
                        <p1>Top view puzzel game</p1>
                    </div>
                </div>
                

            </div>
        </div>

    )
}

export default Projects;