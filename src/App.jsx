//import { useState } from 'react'
import './App.css'
import About from './About'
import { Projects } from './Projects'

function App() {

  return (
    <>
      <div className='navBar'>
        <p> Brian Daniel Thomas </p>
        <div className='navElems'>
        <a href="#about">
          <button> About </button>
        </a>
        <a href="#projects">
          <button> Projects </button>
        </a>
          <a href="#contact">
            <button> Contact </button>
          </a>
          {
            //<Link to="https://www.google.com">Go to Google</Link>
            //<Link href="/About"> About </Link>
            //<Link href="/Projects"> Projects </Link>
            //<Link href="/Contact"> Contact </Link>
          }
        </div>
      </div>

      <About />

      <hr className='horizontal-line'></hr>

      <Projects />
    </>
  )
}

export default App
