import React, { useState } from "react"
import WebsiteDescDataArlingtonDental from "../../data/websiteDesc/arlingtonDental/index"
import WebsiteDescDataCrownDental from "../../data/websiteDesc/crownDental/index"
import WebsiteDescDataCrystalCreek from "../../data/websiteDesc/crystalCreek/index"
import WebsiteDescDataDenstar from "../../data/websiteDesc/denstar/index"
import WebsiteDescDataFairview from "../../data/websiteDesc/fairview/index"
import WebsiteDescDataPrimeDDS from "../../data/websiteDesc/primeDDS"
import WebsiteDescDataPrimeDentalGarland from "../../data/websiteDesc/primeDentalGarland/index"
import WebsiteDescDataPrimeDentalGP from "../../data/websiteDesc/primeDentalGP/index"
import WebsiteDescDataPrimeDentalPlano from "../../data/websiteDesc/primeDentalPlano/index"
import WebsiteDescDataShare from '../../data/websiteDesc/share/index';
import WebsiteDescDataWhiteRock from "../../data/websiteDesc/whiteRock/index"
import { Container, Row, Col } from "reactstrap"

function WebsiteDesc(props) {
  let [typeOfPage] = useState(props.typeOfPage)
  let WebsiteDescDataPrefix = WebsiteDescDataPrimeDDS
  if (typeOfPage === "arlingtonDental") {
    WebsiteDescDataPrefix = WebsiteDescDataArlingtonDental
  } else if (typeOfPage === "crownDental") {
    WebsiteDescDataPrefix = WebsiteDescDataCrownDental
  } else if (typeOfPage === "crystalCreek") {
    WebsiteDescDataPrefix = WebsiteDescDataCrystalCreek
  } else if (typeOfPage === "denstar") {
    WebsiteDescDataPrefix = WebsiteDescDataDenstar
  } else if (typeOfPage === "fairview") {
    WebsiteDescDataPrefix = WebsiteDescDataFairview
  } else if (typeOfPage === "primeDentalGarland") {
    WebsiteDescDataPrefix = WebsiteDescDataPrimeDentalGarland
  } else if (typeOfPage === "primeDentalGP") {
    WebsiteDescDataPrefix = WebsiteDescDataPrimeDentalGP
  } else if (typeOfPage === "primeDentalPlano") {
    WebsiteDescDataPrefix = WebsiteDescDataPrimeDentalPlano
  } else if (typeOfPage === "share") {
    WebsiteDescDataPrefix = WebsiteDescDataShare
  } else if (typeOfPage === "whiteRock") {
    WebsiteDescDataPrefix = WebsiteDescDataWhiteRock
  } else {
    WebsiteDescDataPrefix = WebsiteDescDataPrimeDDS
  }
  return (
    <section className="section section-lg bg-web-desc">
      <div className="bg-overlay"></div>
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h2 className="get-started-title text-white">
              {WebsiteDescDataPrefix[0].title}
            </h2>
            <div className="section-subtitle font-secondary text-white text-center padding-t-30" dangerouslySetInnerHTML={{__html: WebsiteDescDataPrefix[1].title}} />
          </Col>
        </Row>
      </Container>
      <div className="bg-pattern-effect"></div>
    </section>
  )
}

export default WebsiteDesc
