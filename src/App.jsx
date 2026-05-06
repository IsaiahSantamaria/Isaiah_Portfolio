import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
//components
import Navbar from './components/Navbar.jsx'
import Intro from './components/Intro.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Credits from './components/Credits.jsx'

//styles
import './App.css'
import "./styles/global.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Navbar/>
      <div id="content" class ="">
        <Intro/>
        <About/>
        <Experience/>
        <Projects/>
        <Credits/>
        <div id="credits">
            <p1>Created and Design by Isaiah Santamaria</p1>
            <p1>All rights reserved. ©</p1>
        </div>
      </div>

    </div>
    
    


      
  );
}

export default App
