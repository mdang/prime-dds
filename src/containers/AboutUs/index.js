import React, { useState } from "react"
import AboutDataArlingtonDental from "../../data/about/arlingtonDental/index"
import AboutDataCrownDental from "../../data/about/crownDental/index"
import AboutDataCrystalCreek from "../../data/about/crystalCreek/index"
import AboutDataDenstar from "../../data/about/denstar/index"
import AboutDataFairview from "../../data/about/fairview/index"
import AboutDataPrimeDDS from "../../data/about/primeDDS"
import AboutDataPrimeDentalGarland from "../../data/about/primeDentalGarland/index"
import AboutDataPrimeDentalGP from "../../data/about/primeDentalGP/index"
import AboutDataPrimeDentalPlano from "../../data/about/primeDentalPlano/index"
import AboutDataShare from "../../data/about/share/index"
import AboutDataWhiteRock from "../../data/about/whiteRock"
import AboutListDataArlingtonDental from "../../data/about/_aboutList/arlingtonDental/index"
import AboutListDataCrownDental from "../../data/about/_aboutList/crownDental/index"
import AboutListDataCrystalCreek from "../../data/about/_aboutList/crystalCreek/index"
import AboutListDataDenstar from "../../data/about/_aboutList/denstar/index"
import AboutListDataFairview from "../../data/about/_aboutList/fairview/index"
import AboutListDataPrimeDDS from "../../data/about/_aboutList/primeDDS"
import AboutListDataPrimeDentalGarland from "../../data/about/_aboutList/primeDentalGarland/index"
import AboutListDataPrimeDentalGP from "../../data/about/_aboutList/primeDentalGP/index"
import AboutListDataPrimeDentalPlano from "../../data/about/_aboutList/primeDentalPlano/index"
import AboutListDataShare from "../../data/about/_aboutList/share/index"
import AboutListDataWhiteRock from "../../data/about/_aboutList/whiteRock"
import { Container, Row, Col } from "reactstrap"
import Image from "../../components/image/index"
import about from "../../assets/images/dorsin/about-img.jpg"

function AboutUs(props) {
  let [typeOfPage] = useState(props.typeOfPage)
  let AboutDataPrefix = AboutDataPrimeDDS
  let AboutListDataPrefix = AboutListDataPrimeDDS

  if (typeOfPage === "arlingtonDental") {
    AboutDataPrefix = AboutDataArlingtonDental
    AboutListDataPrefix = AboutListDataArlingtonDental
  } else if (typeOfPage === "crownDental") {
    AboutDataPrefix = AboutDataCrownDental
    AboutListDataPrefix = AboutListDataCrownDental
  } else if (typeOfPage === "crystalCreek") {
    AboutDataPrefix = AboutDataCrystalCreek
    AboutListDataPrefix = AboutListDataCrystalCreek
  } else if (typeOfPage === "denstar") {
    AboutDataPrefix = AboutDataDenstar
    AboutListDataPrefix = AboutListDataDenstar
  } else if (typeOfPage === "fairview") {
    AboutDataPrefix = AboutDataFairview
    AboutListDataPrefix = AboutListDataFairview
  } else if (typeOfPage === "primeDentalGarland") {
    AboutDataPrefix = AboutDataPrimeDentalGarland
    AboutListDataPrefix = AboutListDataPrimeDentalGarland
  } else if (typeOfPage === "primeDentalGP") {
    AboutDataPrefix = AboutDataPrimeDentalGP
    AboutListDataPrefix = AboutListDataPrimeDentalGP
  } else if (typeOfPage === "primeDentalPlano") {
    AboutDataPrefix = AboutDataPrimeDentalPlano
    AboutListDataPrefix = AboutListDataPrimeDentalPlano
  } else if (typeOfPage === "share") {
    AboutDataPrefix = AboutDataShare
    AboutListDataPrefix = AboutListDataShare
  } else if (typeOfPage === "whiteRock") {
    AboutDataPrefix = AboutDataWhiteRock
    AboutListDataPrefix = AboutListDataWhiteRock
  }
  return (
    <section className="section bg-light" id="features">
      <Container>
        <Row className="vertical-content">
          <Col lg={5}>
            <div className="features-box">
              <h3>{AboutDataPrefix[0].title}</h3>
              <p className="text-muted web-desc">{AboutDataPrefix[1].title}</p>
              <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                {AboutListDataPrefix.map(item => (
                  <li className="">{item.title}</li>
                ))}
              </ul>
              {/* <a
                href="#"
                className="btn btn-custom margin-t-30 waves-effect waves-light"
              >
                Call Now <i className="mdi mdi-arrow-right"></i>
              </a> */}
            </div>
          </Col>
          <Col lg={7}>
            <div className="features-img features-right text-right">
              <Image Path={about} Class="about-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs
