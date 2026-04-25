import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
//components
import Navbar from './components/Navbar.jsx'
import Intro from './components/Intro.jsx'
import About from './components/About.jsx'

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

      </div>

    </div>
    
    


      
  );
}

export default App
