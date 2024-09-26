import { useState } from 'react'
import Header from './PageSections/Header.jsx'
import About from './PageSections/About.jsx'
import Home from './PageSections/Home.jsx'
import Footer from './PageSections/Footer.jsx'
import Skills from './PageSections/Skills.jsx'
import Services from './PageSections/Services.jsx'
import PortfolioSection from './PageSections/PortfolioSection.jsx'
import Contact from './PageSections/Contact.jsx'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


function App() {
  
  return (
    <>
       <div>
       <Header/>

       <Home/>

       <About/>

       <Skills/>

       <Services/>

       <PortfolioSection/>

       <Contact/>

       <Footer/>
       </div>
      

    </ >
     
  )
}

export default App
