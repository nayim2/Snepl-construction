import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import AboutSection from './Home/AboutSection'
import VisionMission from './Home/VisionMission'
import Projects from './Home/Projects'
import Stats from './Home/Stats'
import Clients from './Home/Clients'
import { Route, Routes } from 'react-router-dom'
import Overview from './About/Overview'
import HumanResource from './About/Resources'
import Footer from './Home/Footer'
import DirectorMessage from './About/DirectorMessage'

const App = () => {
  return (
    <div>
     <Navbar />
      <Routes>

     <Route path='/' element={
      <>
       
      <Home />
      <AboutSection />
      <VisionMission />
      <Projects />
      <Stats />
      <Clients />
      <Footer />
      </>
     } />

     <Route
     path='/about/company-overview'
     element={
      <>

     <Overview />
     <Footer />
      </>
     }
      />

       <Route
     path='/about/resources'
     element={
      <>

     <HumanResource />
     <Footer />
      </>
     }
      />

      
       <Route
     path='/about/director-message'
     element={
      <>
  
     <DirectorMessage />
      </>
     }
      />

      </Routes>

      <Footer />
    </div>
  )
}

export default App