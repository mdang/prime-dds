import React, { Fragment } from "react"
import { Container, Row, Col } from "reactstrap"

function Social() {
  return (
    <Fragment>
      <section className="cta bg-light">
        <Container>
          <Row>
            <Col lg={6}>
              <ul className="list-inline social margin-t-20">
                <li className="list-inline-item">
                  <a href="#" className="social-icon">
                    <i className="mdi mdi-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-icon">
                    <i className="mdi mdi-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-icon">
                    <i className="mdi mdi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={3} className="margin-t-30">
              <p className="margin-b-0 contact-title">
                <i className="pe-7s-call"></i> &nbsp;(214) 348-2320
              </p>
            </Col>
            <Col lg={3} className="margin-t-30 text-right">
              <p className="contact-title">
                <i className="pe-7s-mail-open"></i>&nbsp; Support@info.com
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}

export default Social
