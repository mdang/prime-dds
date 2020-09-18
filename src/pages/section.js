import React, { useState } from "react"
import { Container, Row, Col, Button } from "reactstrap"
import SectionDataPrimeDDS from "../data/section/primeDDS"
import SectionDataWhiteRock from "../data/section/whiteRock"

function Section(props) {
  let SectionDataPrefix = SectionDataPrimeDDS
  let [typeOfPage] = useState(props.typeOfPage)

  if (typeOfPage === "parent") {
    SectionDataPrefix = SectionDataPrimeDDS
  } else {
    SectionDataPrefix = SectionDataWhiteRock
  }
  return (
    <section
      className="section bg-home home-half"
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
        <div className="waves-shape shape-one">
          <div className="wave wave-one"></div>
        </div>
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
