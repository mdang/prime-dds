import React, { useState } from "react"
import SafeDataWhiteRock from "../../data/safe/whiteRock/index"
import { Container, Row, Col } from "reactstrap"

function Safe(props) {
  let SafeDataPrefix = SafeDataWhiteRock
  return (
    <section className="section section-md">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="get-started-title text-center">
              {SafeDataPrefix[0].title}
            </h2>
            <div class="section-title-border margin-t-20"></div>
            <p className="section-subtitle text-muted font-secondary padding-t-30">
              {SafeDataPrefix[1].title}
            </p>
            <a
              href="#"
              className="btn btn-custom margin-t-30 waves-effect waves-light mb-5"
            >
              {SafeDataPrefix[2].title}
            </a>
          </Col>
        </Row>
      </Container>
      <div className="bg-pattern-effect"></div>
    </section>
  )
}

export default Safe
