import { useState } from 'react'
import heroImg from './assets/hero.png'
//components
import Credits from './Credits/Credits.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Intro from './components/Content/Intro/Intro.jsx'
import About from './components/Content/About/About.jsx'
import Projects from './components/Content/Projects/Projects.jsx'


//styles
import './App.css'


function App() {
  

  return (
    <>
      <Navbar/>
      <div id="content" >
        <Intro/>
        <Projects/>
        <Credits/>
      </div>
      
    </>
    
      
  );
}

export default App
