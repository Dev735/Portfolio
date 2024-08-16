import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certifications from './components/Certifications'


export default function App() {
  return ( 
  <div>
   <Navbar/>
   <Hero/>
   <About/>
   <Experience/>
   <Projects/>
   <Certifications/>
   <Contact/>
   <Footer/>

    </div>
  )
}