import React, { useState } from "react"
import TriColumnDataWhiteRock from "../../data/triColumn/whiteRock/index"
import { Container, Row, Col } from "reactstrap"

function TriColumn(props) {
  let TriColumnDataPrefix = TriColumnDataWhiteRock
  return (
    <section className="section section-lg">
      <Container>
        <Row>
          <Col lg={4}>
            <h2 className="get-started-title">
              {TriColumnDataPrefix[0].title}
            </h2>
            <p className="section-subtitle text-muted font-secondary padding-t-30">
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
            <h2 className="get-started-title">
              {TriColumnDataPrefix[1].title}
            </h2>
            <p className="section-subtitle text-muted font-secondary padding-t-30">
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
            <h2 className="get-started-title">
              {TriColumnDataPrefix[2].title}
            </h2>
            <p className="section-subtitle text-muted font-secondary padding-t-30">
              {TriColumnDataPrefix[2].subheadline}
            </p>
            <a
              href="#"
              className="btn btn-custom margin-t-30 waves-effect waves-light mb-5"
            >
              {TriColumnDataPrefix[2].button}
            </a>
          </Col>
        </Row>
      </Container>
      <div className="bg-pattern-effect"></div>
    </section>
  )
}

export default TriColumn
