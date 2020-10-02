import React from "react"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.css"

import Layout from "../containers/Layout"

const IndexPage = () => {
  const typeOfPage = "whiteRock";
  return (
    <Layout typeOfPage={typeOfPage} themeColor="theme-color-blue">
      <SEO title="" description="" />
    </Layout>
  )
}

export default IndexPage

