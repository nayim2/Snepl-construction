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

const App = () => {
  return (
    <div>
      <Routes>

     <Route path='/' element={
      <>
        <Navbar />
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
      <Navbar />
     <Overview />
     <Footer />
      </>
     }
      />

       <Route
     path='/about/resources'
     element={
      <>
      <Navbar />
     <HumanResource />
     <Footer />
      </>
     }
      />

      
       <Route
     path='/director-message'
     element={
      <>
      <Navbar />
   
      </>
     }
      />

      </Routes>
    </div>
  )
}

export default App