import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
//components
import Navbar from './components/Navbar/Navbar.jsx'
import Intro from './components/Content/Intro/Intro.jsx'
//import About from './components/Content/About/About.jsx'

//styles
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Navbar/>
      <div id="content" className="">
        <Intro/>
      </div>

    </div>
    
    


      
  );
}

export default App
