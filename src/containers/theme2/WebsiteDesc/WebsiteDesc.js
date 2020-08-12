import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"

class WebsiteDesc extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section section-lg bg-web-desc">
          <div className="bg-overlay"></div>
          <Container>
            <Row>
              <Col lg={12} className="text-center">
                <h2 className="text-white">
                  Aliquam consequat metus vitae ligula porttitor mollis.
                </h2>
                <p className="padding-t-15 home-desc">
                  Sed ullamcorper mi porta consequat fermentum. Curabitur
                  aliquam lectus non faucibus dictum. Suspendisse imperdiet
                  metus molestie iaculis sollicitudin.
                </p>
                <a
                  href="#"
                  className="btn btn-bg-white margin-t-30 waves-effect waves-light mb-5"
                >
                  View Plans
                </a>
              </Col>
            </Row>
          </Container>
          <div className="bg-pattern-effect"></div>
        </section>
      </React.Fragment>
    )
  }
}

export default WebsiteDesc
