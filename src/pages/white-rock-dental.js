import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import Layout from "../containers/Layout"
import Content from "../containers/Content"
import Section from "../containers/Section"
import Service from "../containers/Service"
import AboutUs from "../containers/AboutUs"
import WebsiteDesc from "../containers/WebsiteDesc"
import Team from "../containers/Team"
import TriColumn from "../containers/TriColumn"
import GetStart from "../containers/GetStart"
import Contact from "../containers/Contact"
import Social from "../containers/Social"

const IndexPage = () => {
  const typeOfPage = "whiteRock";
  const siteTitle = "White Rock Dental | Dentist Office in Dallas, TX"
  const siteDesc = "General & cosmetic. Serving also the White Rock, Deep Ellum and Dallas Arboretum, Texas area."
  return (
    <Layout typeOfPage={typeOfPage} siteTitle={siteTitle} siteDesc={siteDesc} themeColor="theme-color-blue">
      <Content typeOfPage={typeOfPage}>
        <Section typeOfPage={typeOfPage} />
        <GetStart typeOfPage={typeOfPage} />
        <TriColumn typeOfPage={typeOfPage} /> 
        <Team typeOfPage={typeOfPage} />
        <AboutUs typeOfPage={typeOfPage} />
        <WebsiteDesc typeOfPage={typeOfPage} />
        <Service typeOfPage={typeOfPage} />
        <Contact typeOfPage={typeOfPage} />
        <Social typeOfPage={typeOfPage} />
      </Content>
    </Layout>
  )
}

export default IndexPage

