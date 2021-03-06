import React, { useState, useEffect } from "react"
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
import Process from "../containers/Process"
import Social from "../containers/Social"

import LoadingScreen from "../containers/LoadingScreen"

const IndexPage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500)
  }, [])
  const typeOfPage = "share";
  const siteTitle = "Share Dentistry | Dentist Office in Grapevine, TX"
  const siteDesc = "General & cosmetic. Serving also the Irving, DFW Airport, and Coppell, Texas area."
  return (
    <>
    {loading === true && (<LoadingScreen loading={loading} />) }
    <Layout typeOfPage={typeOfPage} siteTitle={siteTitle} siteDesc={siteDesc} themeColor="theme-color-blue">
      <Content typeOfPage={typeOfPage}>
        <Section typeOfPage={typeOfPage} />
        <GetStart typeOfPage={typeOfPage} />
        <TriColumn typeOfPage={typeOfPage} /> 
        <Team typeOfPage={typeOfPage} />
        <AboutUs typeOfPage={typeOfPage} />
        <WebsiteDesc typeOfPage={typeOfPage} />
        <Service typeOfPage={typeOfPage} />
        <Process typeOfPage={typeOfPage} />
        <Contact typeOfPage={typeOfPage} />
        <Social typeOfPage={typeOfPage} />
      </Content>
    </Layout>
    </>
  )
}

export default IndexPage

