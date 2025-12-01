import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import AboutSection from "./Home/AboutSection";
import VisionMission from "./Home/VisionMission";
import Projects from "./Home/Projects";
import Stats from "./Home/Stats";
import Clients from "./Home/Clients";
import { Route, Routes } from "react-router-dom";
import Overview from "./About/Overview";
import HumanResource from "./About/Resources";
import Footer from "./Home/Footer";
import DirectorMessage from "./About/DirectorMessage";
import Fabrication from "./Services/Fabrication";
import Commissioning from "./Services/Comissioning";
import Piping from "./Services/Piping";
import Electricals from "./Services/Electricals";
import BoilerErection from "./Services/BoilerErection";
import Ashilo from "./Services/Ashilo";
import Clientss from "./Clients/Clients";
import ScrollToTop from "./Home/ScrollToTop";
import Photos from "./Galleries/Photos";
import Video from "./Galleries/Video";
import Enquiry from "./Contact/Enquiry";
import ContactUs from "./Contact/ContactUs";
import Brochsure from "./Galleries/Brochsure";

const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutSection />
              <VisionMission />
              <Projects />
              <Stats />
              <Clients />
            </>
          }
        />

        <Route
          path="/about/company-overview"
          element={
            <>
              <Overview />
            </>
          }
        />

        <Route
          path="/about/resources"
          element={
            <>
              <HumanResource />
            </>
          }
        />

        <Route
          path="/about/director-message"
          element={
            <>
              <DirectorMessage />
            </>
          }
        />

        <Route
          path="/services/fabrication"
          element={
            <>
              <Fabrication />
            </>
          }
        />

        <Route
          path="/services/comission"
          element={
            <>
              <Commissioning />
            </>
          }
        />

        <Route
          path="/services/comission"
          element={
            <>
              <Commissioning />
            </>
          }
        />

        <Route
          path="/services/piping"
          element={
            <>
              <Piping />
            </>
          }
        />

        <Route
          path="/services/electrical-works"
          element={
            <>
              <Electricals />
            </>
          }
        />

        <Route
          path="/services/boiler-erection"
          element={
            <>
              <BoilerErection />
            </>
          }
        />

        <Route
          path="/services/equipment-erection"
          element={
            <>
              <BoilerErection />
            </>
          }
        />

        <Route
          path="/services/ash-silo"
          element={
            <>
              <Ashilo />
            </>
          }
        />

        <Route
          path="/customers"
          element={
            <>
              <Clientss />
            </>
          }
        />

        <Route
          path="/gallery/photos"
          element={
            <>
              <Photos />
            </>
          }
        />

        <Route
          path="/gallery/videos"
          element={
            <>
              <Video />
            </>
          }
        />


         <Route
          path="/gallery/events"
          element={
            <>
              <Brochsure />
            </>
          }
        />

        <Route
          path="/enquiry"
          element={
            <>
              <Enquiry />
            </>
          }
        />


         <Route
          path="/contact"
          element={
            <>
              <ContactUs />
            </>
          }
        />



      </Routes>

      <Footer />
    </div>
  );
};

export default App;
