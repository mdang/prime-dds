import React, { useState } from "react"
import { Container, Row, Col } from "reactstrap"
import SectionDataArlingtonDental from "../../data/section/arlingtonDental/index"
import SectionDataCrownDental from "../../data/section/crownDental/index"
import SectionDataCrystalCreek from "../../data/section/crystalCreek/index"
import SectionDataDenstar from "../../data/section/denstar/index"
import SectionDataFairview from "../../data/section/fairview/index"
import SectionDataPrimeDDS from "../../data/section/primeDDS"
import SectionDataPrimeDentalGarland from "../../data/section/primeDentalGarland/index"
import SectionDataPrimeDentalGP from "../../data/section/primeDentalGP/index"
import SectionDataPrimeDentalPlano from "../../data/section/primeDentalPlano/index"
import SectionDataShare from "../../data/section/share/index"
import SectionDataWhiteRock from "../../data/section/whiteRock"

function Section(props) {
  let SectionDataPrefix = SectionDataWhiteRock
  let [typeOfPage] = useState(props.typeOfPage)

  if (typeOfPage === "arlingtonDental") {
    SectionDataPrefix = SectionDataArlingtonDental
  } else if (typeOfPage === "crownDental") {
    SectionDataPrefix = SectionDataCrownDental
  } else if (typeOfPage === "crystalCreek") {
    SectionDataPrefix = SectionDataCrystalCreek
  } else if (typeOfPage === "denstar") {
    SectionDataPrefix = SectionDataDenstar
  } else if (typeOfPage === "fairview") {
    SectionDataPrefix = SectionDataFairview
  } else if (typeOfPage === "primeDentalGarland") {
    SectionDataPrefix = SectionDataPrimeDentalGarland
  } else if (typeOfPage === "primeDentalGP") {
    SectionDataPrefix = SectionDataPrimeDentalGP
  } else if (typeOfPage === "primeDentalPlano") {
    SectionDataPrefix = SectionDataPrimeDentalPlano
  } else if (typeOfPage === "share") {
    SectionDataPrefix = SectionDataShare
  } else if (typeOfPage === "whiteRock") {
    SectionDataPrefix = SectionDataWhiteRock
  } else {
    SectionDataPrefix = SectionDataPrimeDDS
  }
  return (
    <section
      className={`${typeOfPage} section bg-home home-half`}
      id="home"
      data-image-src="images/bg-home.jpg"
    >
      <div className="bg-overlay"></div>
      <div className="display-table">
        <div className="display-table-cell">
          <Container>
            <Row>
              <Col
                lg={{ size: 8, offset: 2 }}
                className="col-lg-8 offset-lg-2 text-white text-center"
              >
                <h1 className="home-title" dangerouslySetInnerHTML={{__html: SectionDataPrefix[0].title}} />
                <p className="home-desc">{SectionDataPrefix[1].title}</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="wave-effect wave-anim">
        <div className="waves-shape shape-two">
          <div className="wave wave-two"></div>
        </div>
        <div className="waves-shape shape-three">
          <div className="wave wave-three"></div>
        </div>
      </div>
    </section>
  )
}

export default Section
