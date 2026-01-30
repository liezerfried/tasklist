
import React from "react";
import AboutInfo from "../components/AboutInfo";
import Nav from "../components/Nav";
import Footer from '../components/Footer';

const About = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', minHeight: '100vh' }}>
    <Nav />
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    <AboutInfo />
    </div>
    <div className="footer-wrapper">
      <Footer />
    </div>
  </div>
);

export default About;