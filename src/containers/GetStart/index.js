import React, { useState } from "react"
import GetStartDataArlingtonDental from "../../data/getStart/arlingtonDental/index"
import GetStartDataCrownDental from "../../data/getStart/crownDental/index"
import GetStartDataCrystalCreek from "../../data/getStart/crystalCreek/index"
import GetStartDataDenstar from "../../data/getStart/denstar/index"
import GetStartDataFairview from "../../data/getStart/fairview/index"
import GetStartDataPrimeDDS from "../../data/getStart/primeDDS"
import GetStartDataPrimeDentalGarland from "../../data/getStart/primeDentalGarland/index"
import GetStartDataPrimeDentalGP from "../../data/getStart/primeDentalGP/index"
import GetStartDataPrimeDentalPlano from "../../data/getStart/primeDentalPlano/index"
import GetStartDataShare from "../../data/getStart/share/index"
import GetStartDataWhiteRock from "../../data/getStart/whiteRock/index"
import { Container, Row, Col } from "reactstrap"

function GetStart(props) {
  let [typeOfPage] = useState(props.typeOfPage)
  let GetStartDataPrefix = GetStartDataPrimeDDS
  if (typeOfPage === "arlingtonDental") {
    GetStartDataPrefix = GetStartDataArlingtonDental
  } else if (typeOfPage === "crownDental") {
    GetStartDataPrefix = GetStartDataCrownDental
  } else if (typeOfPage === "crystalCreek") {
    GetStartDataPrefix = GetStartDataCrystalCreek
  } else if (typeOfPage === "denstar") {
    GetStartDataPrefix = GetStartDataDenstar
  } else if (typeOfPage === "fairview") {
    GetStartDataPrefix = GetStartDataFairview
  } else if (typeOfPage === "primeDentalGarland") {
    GetStartDataPrefix = GetStartDataPrimeDentalGarland
  } else if (typeOfPage === "primeDentalGP") {
    GetStartDataPrefix = GetStartDataPrimeDentalGP
  } else if (typeOfPage === "primeDentalPlano") {
    GetStartDataPrefix = GetStartDataPrimeDentalPlano
  } else if (typeOfPage === "share") {
    GetStartDataPrefix = GetStartDataShare
  } else if (typeOfPage === "whiteRock") {
    GetStartDataPrefix = GetStartDataWhiteRock
  } else {
    GetStartDataPrefix = GetStartDataPrimeDDS
  }
  return (
    <section className="section section-lg bg-get-start">
      <Container>
        <Row>
          <Col lg={{ size: 8, offset: 2 }} className="text-center">
            <h1 className="get-started-title" dangerouslySetInnerHTML={{__html: GetStartDataPrefix[0].title}} />
            <div className="section-title-border margin-t-20 bg-white"></div>
            <div className="section-subtitle font-secondary text-muted text-center padding-t-30" dangerouslySetInnerHTML={{__html: GetStartDataPrefix[1].title}} />
            {/* <a
              href="#"
              className="btn btn-bg-white waves-effect margin-t-20 mb-4"
            >
              {GetStartDataPrefix[2].title}{" "}
              <i className="mdi mdi-arrow-right"></i>{" "}
            </a> */}
          </Col>
        </Row>
      </Container>
      <div className="bg-pattern-effect"></div>
    </section>
  )
}

export default GetStart
