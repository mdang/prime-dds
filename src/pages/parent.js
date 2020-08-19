import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import NavbarPage from "../containers/Navbar"
import Section from "./section"
import AboutUs from "../containers/AboutUs"
import WebsiteDesc from "../containers/WebsiteDesc"
import GetStart from "../containers/GetStart"
import Location from "../containers/Location"
import Service from "../containers/Service"
import Social from "../containers/Social"
import Footer from "../containers/Footer"
// import "../assets/scss/style2_black.scss"

const ParentPage = () => {
  return (
    <React.Fragment>
      <NavbarPage typeOfPage="parent" />
      <Section />
      <AboutUs />
      <WebsiteDesc />
      <Location />
      <GetStart />
      <Service sectionClass="pt-5" />
      <Social />
      <Footer />
    </React.Fragment>
  )
}

export default ParentPage
