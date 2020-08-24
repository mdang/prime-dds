import React, { useState } from "react"
import GetStartDataPrimeDDS from "../../data/getStart/primeDDS"
import GetStartDataWhiteRock from "../../data/getStart/whiteRock/index"
import { Container, Row, Col } from "reactstrap"

function GetStart(props) {
  let [typeOfPage] = useState(props.typeOfPage)
  let GetStartDataPrefix = GetStartDataPrimeDDS
  if (typeOfPage === "parent") {
    GetStartDataPrefix = GetStartDataPrimeDDS
  } else {
    GetStartDataPrefix = GetStartDataWhiteRock
  }
  return (
    <section className="section section-lg bg-get-start">
      <div className="bg-overlay"></div>
      <Container>
        <Row>
          <Col lg={{ size: 8, offset: 2 }} className="text-center">
            <h1 className="get-started-title text-white">
              {GetStartDataPrefix[0].title}
            </h1>
            <div className="section-title-border margin-t-20 bg-white"></div>
            <p className="section-subtitle font-secondary text-white text-center padding-t-30">
              {GetStartDataPrefix[1].title}
            </p>
            <a
              href="#"
              className="btn btn-bg-white waves-effect margin-t-20 mb-4"
            >
              {GetStartDataPrefix[2].title}{" "}
              <i className="mdi mdi-arrow-right"></i>{" "}
            </a>
          </Col>
        </Row>
      </Container>
      <div className="bg-pattern-effect"></div>
    </section>
  )
}

export default GetStart