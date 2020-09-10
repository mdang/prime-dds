import React from "react"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.css"

import Layout from "../containers/Layout"
import Content from "../containers/Content"
import Section from "./section"
import Safe from "../containers/Safe"
import Service from "../containers/Service"
import AboutUs from "../containers/AboutUs"
import WebsiteDesc from "../containers/WebsiteDesc"
import Team from "../containers/Team"
import TriColumn from "../containers/TriColumn"
import GetStart from "../containers/GetStart"
import Contact from "../containers/Contact"
import Social from "../containers/Social"

const IndexPage = () => {
  return (
    <Layout typeOfPage="primeDentalGP" themeColor="theme-color-black">
      <SEO title="" description="" />
      <Content>
        <Section typeOfPage="clinic" />
        <GetStart />
        <TriColumn />
        <Team />
        <AboutUs />
        <Service />
        <Contact />
        <Social />
      </Content>
    </Layout>
  )
}

export default IndexPage

