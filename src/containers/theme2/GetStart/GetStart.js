import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"

class GetStart extends Component {
  render() {
    return (
      <section className="section section-lg bg-get-start">
        <div className="bg-overlay"></div>
        <Container>
          <Row>
            <Col lg={{ size: 8, offset: 2 }} className="text-center">
              <h1 className="get-started-title text-white">
                Let's Get Started
              </h1>
              <div className="section-title-border margin-t-20 bg-white"></div>
              <p className="section-subtitle font-secondary text-white text-center padding-t-30">
                Suspendisse imperdiet metus molestie iaculis sollicitudin.
                Aliquam ac sem orci. Cras risus nulla, consectetur et nunc
                convallis, accumsan condimentum arcu.
              </p>
              <a
                href="#"
                className="btn btn-bg-white waves-effect margin-t-20 mb-4"
              >
                Get Started <i className="mdi mdi-arrow-right"></i>{" "}
              </a>
            </Col>
          </Row>
        </Container>
        <div className="bg-pattern-effect"></div>
      </section>
    )
  }
}

export default GetStart
