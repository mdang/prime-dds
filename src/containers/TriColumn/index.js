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
          <Col lg={12}>
            
            <h2 className="get-started-title text-white mb-5">
            <i className={TriColumnDataPrefix[0].subheadline + " text-white padding-t-30"}></i>
              {TriColumnDataPrefix[0].title}
            </h2>
          </Col>
        </Row>
      </Container>
      <div className="bg-pattern-effect"></div>
    </section>
  )
}

export default TriColumn
