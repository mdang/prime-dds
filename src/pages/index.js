import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import Layout from "../containers/Layout"

const IndexPage = () => {
  const typeOfPage = "whiteRock";
  return (
    <Layout typeOfPage={typeOfPage} themeColor="theme-color-blue">
    </Layout>
  )
}

export default IndexPage

