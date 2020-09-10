import React, { useState } from "react"
import TriColumnDataWhiteRock from "../../data/triColumn/whiteRock/index"
import { Container, Row, Col } from "reactstrap"

function TriColumn(props) {
  let TriColumnDataPrefix = TriColumnDataWhiteRock
  return (
    <section className="section section-lg section-tri">
      <div className="bg-overlay"></div>
      <Container>
        <Row>
          <Col lg={6}>
            <i className={TriColumnDataPrefix[0].subheadline + " text-white padding-t-30"}></i>
            <h2 className="get-started-title text-white mb-5">
              {TriColumnDataPrefix[0].title}
            </h2>
          </Col>
          <Col lg={6}>
            <h2 className="get-started-title text-white padding-t-30">
              {TriColumnDataPrefix[1].title}
            </h2>
            <p className="section-subtitle text-white font-secondary padding-t-15">
              {TriColumnDataPrefix[1].subheadline}
            </p>
            <p className="section-subtitle text-white font-secondary mb-5">
              {TriColumnDataPrefix[1].button}
            </p>
          </Col>
        </Row>
      </Container>
      <div className="bg-pattern-effect"></div>
    </section>
  )
}

export default TriColumn
