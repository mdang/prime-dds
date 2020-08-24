import React, { useState } from "react"
import WebsiteDescDataPrimeDDS from "../../data/websiteDesc/primeDDS"
import WebsiteDescDataWhiteRock from "../../data/websiteDesc/whiteRock/index"
import { Container, Row, Col } from "reactstrap"

function WebsiteDesc(props) {
  let [typeOfPage] = useState(props.typeOfPage)
  let WebsiteDescDataPrefix = WebsiteDescDataPrimeDDS
  if (typeOfPage === "parent") {
    WebsiteDescDataPrefix = WebsiteDescDataPrimeDDS
  } else {
    WebsiteDescDataPrefix = WebsiteDescDataWhiteRock
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
            <p className="section-subtitle font-secondary text-white text-center padding-t-30">
              {WebsiteDescDataPrefix[1].title}
            </p>
            <a
              href="#"
              className="btn btn-bg-white margin-t-30 waves-effect waves-light mb-5"
            >
              {WebsiteDescDataPrefix[2].title}
            </a>
          </Col>
        </Row>
      </Container>
      <div className="bg-pattern-effect"></div>
    </section>
  )
}

export default WebsiteDesc