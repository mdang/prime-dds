import React from "react"
import SEO from '../components/seo'
import "bootstrap/dist/css/bootstrap.css"

import LayoutParent from "../containers/LayoutParent"
import Content from "../containers/Content"
import Section from "./section"
import Service from "../containers/Service"
import AboutUs from "../containers/AboutUs"
import WebsiteDesc from "../containers/WebsiteDesc"
import Team from "../containers/Team"
import GetStart from "../containers/GetStart"
import Contact from "../containers/Contact"
import Social from "../containers/Social"

const IndexPage = () => {
  return (
    <LayoutParent>
      <SEO title="" description="" />
      <Content>
        <Section typeOfPage="parent" />
        <Service />
        <AboutUs />
        <WebsiteDesc />
        <Team />
        <GetStart />
        <Contact />
        <Social />
      </Content>
    </LayoutParent>
  )
}

export default IndexPage
