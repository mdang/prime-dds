import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import Navbar from "../containers/navbar"
import Banner from "../containers/banner"
import Service from "../containers/service"
import About from "../containers/about"
import Blog from "../containers/blog"
import Contact from "../containers/contact"
import Footer from "../containers/footer"
import CopyRight from "../containers/copyright_text"
import "../assets/scss/style.scss"

// import NavbarPage from "../containers/theme2/Navbar/Navbar_Page";
// import Section from './section';
// import Service from "../containers/theme2/Service/service";
// import AboutUs from "../containers/theme2/AboutUs/AboutUs";
// import WebsiteDesc from "../containers/theme2/WebsiteDesc/WebsiteDesc";
// import Team from '../containers/theme2/Team/Team';
// import GetStart from "../containers/theme2/GetStart/GetStart"
// import Contact from "../containers/theme2/Contact/Contact";
// import Social from "../containers/theme2/Social/Social";
// import Footer from "../containers/theme2/Footer/footer";
// import "../assets/scss/style2.scss"

const IndexPage = () => {
  return (
    <div className="main-wrapper">
      <Navbar />
      <div id="main-content">
        <Banner ChangeClass={"demo1"} />
        <Service />
        <About />
        <Blog />
        <Contact />
        <Footer />
        <CopyRight />
      </div>
    </div>
    // <React.Fragment>
    //     <NavbarPage />
    //     <Section/>
    //     <Service  sectionClass="pt-5"/>
    //     <AboutUs/>
    //     <WebsiteDesc/>
    //     <Team/>
    //     <GetStart/>
    //     <Contact/>
    //     <Social />
    //     <Footer/>
    // </React.Fragment>
  )
}

export default IndexPage
