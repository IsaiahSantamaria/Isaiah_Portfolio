import "../styles/projects.css";
import core4 from "../assets/images/core4.png"


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
setInterval(autoScroll, 3000);


const Projects = () =>{
    return (
        <div id="projects">
            <h1>
                $: Projects
            </h1>
            <div id="gallery">
                <img src={core4} alt="" />
                <img src={core4} alt="" />
                <img src={core4} alt="" />
            </div>
        </div>

    )
}

export default Projects;