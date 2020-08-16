import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import NavbarPage from "../containers/Navbar";
import Section from './section';
import Service from "../containers/Service";
import AboutUs from "../containers/AboutUs";
import WebsiteDesc from "../containers/WebsiteDesc";
import Team from '../containers/Team';
import GetStart from "../containers/GetStart"
import Contact from "../containers/Contact";
import Social from "../containers/Social";
import Footer from "../containers/Footer";
import "../assets/scss/style2.scss"

const IndexPage = () => {
  return (
    <React.Fragment>
        <NavbarPage />
        <Section/>
        <Service  sectionClass="pt-5"/>
        <AboutUs/>
        <WebsiteDesc/>
        <Team/>
        <GetStart/>
        <Contact/>
        <Social />
        <Footer/>
    </React.Fragment>
  )
}

export default IndexPage
