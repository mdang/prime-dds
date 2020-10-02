import React, { useState } from "react"
import TriColumnDataArlingtonDental from "../../data/triColumn/arlingtonDental/index"
import TriColumnDataCrownDental from "../../data/triColumn/crownDental/index"
import TriColumnDataCrystalCreek from "../../data/triColumn/crystalCreek/index"
import TriColumnDataDenstar from "../../data/triColumn/denstar/index"
import TriColumnDataFairview from "../../data/triColumn/fairview/index"
import TriColumnDataPrimeDDS from "../../data/triColumn/primeDDS"
import TriColumnDataPrimeDentalGarland from "../../data/triColumn/primeDentalGarland/index"
import TriColumnDataPrimeDentalGP from "../../data/triColumn/primeDentalGP/index"
import TriColumnDataPrimeDentalPlano from "../../data/triColumn/primeDentalPlano/index"
import TriColumnDataShare from "../../data/triColumn/share/index"
import TriColumnDataWhiteRock from "../../data/triColumn/whiteRock/index"
import { Container, Row, Col } from "reactstrap"

function TriColumn(props) {
  let [typeOfPage] = useState(props.typeOfPage)
  let TriColumnDataPrefix = TriColumnDataWhiteRock
  if (typeOfPage === "arlingtonDental") {
    TriColumnDataPrefix = TriColumnDataArlingtonDental
  } else if (typeOfPage === "crownDental") {
    TriColumnDataPrefix = TriColumnDataCrownDental
  } else if (typeOfPage === "crystalCreek") {
    TriColumnDataPrefix = TriColumnDataCrystalCreek
  } else if (typeOfPage === "denstar") {
    TriColumnDataPrefix = TriColumnDataDenstar
  } else if (typeOfPage === "fairview") {
    TriColumnDataPrefix = TriColumnDataFairview
  } else if (typeOfPage === "primeDentalGarland") {
    TriColumnDataPrefix = TriColumnDataPrimeDentalGarland
  } else if (typeOfPage === "primeDentalGP") {
    TriColumnDataPrefix = TriColumnDataPrimeDentalGP
  } else if (typeOfPage === "primeDentalPlano") {
    TriColumnDataPrefix = TriColumnDataPrimeDentalPlano
  } else if (typeOfPage === "share") {
    TriColumnDataPrefix = TriColumnDataShare
  } else if (typeOfPage === "whiteRock") {
    TriColumnDataPrefix = TriColumnDataWhiteRock
  } else {
    TriColumnDataPrefix = TriColumnDataPrimeDDS
  }
  return (
    <section className="section section-lg section-tri">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="get-started-title-rating">{TriColumnDataPrefix[0].rating}</div>
            <h2 className="get-started-title">
              {TriColumnDataPrefix[0].title}
            </h2>
            <p className="section-subtitle-cta text-muted font-secondary padding-t-30">
              {TriColumnDataPrefix[0].subheadline}
            </p>
            <a
              href="#"
              className="btn btn-custom margin-t-30 waves-effect waves-light mb-5"
            >
              {TriColumnDataPrefix[0].button}
            </a>
          </Col>
          <Col lg={4}>
          <i className={TriColumnDataPrefix[1].icon + " text-muted padding-t-30"}></i>
            <h2 className="get-started-title-cta">
              {TriColumnDataPrefix[1].title}
            </h2>
            <p className="section-subtitle-cta text-muted font-secondary padding-t-30">
              {TriColumnDataPrefix[1].subheadline}
            </p>
            <a
              href="#"
              className="btn btn-custom margin-t-30 waves-effect waves-light mb-5"
            >
              {TriColumnDataPrefix[1].button}
            </a>
          </Col>
          <Col lg={4}>
            <i className={TriColumnDataPrefix[2].icon + " text-muted padding-t-30"}></i>
            <h2 className="get-started-title">
              {TriColumnDataPrefix[2].title}
            </h2>
            <a
              href="#"
              className="btn btn-custom margin-t-30 waves-effect waves-light mb-5"
            >
              {TriColumnDataPrefix[2].button}
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TriColumn
