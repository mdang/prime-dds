import React from "react"
import SocialDataPrimeDDS from "../../data/social/primeDDS"
import SocialLinksDataPrimeDDS from "../../data/social/socialLinks/primeDDS"
import { Container, Row, Col } from "reactstrap"

function Social(props) {
  const SocialDataPrefix = SocialDataPrimeDDS
  const SocialLinksDataPrefix = SocialLinksDataPrimeDDS
  return (
    <section className="cta bg-light">
      <Container>
        <Row>
          <Col lg={6}>
            <ul className="list-inline social margin-t-20">
              {SocialLinksDataPrefix.map(item => (
                <li className="list-inline-item">
                  <a href={item.links} className="social-icon">
                    <i className={"mdi mdi-" + item.title}></i>
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={3} className="margin-t-30">
            <p className="margin-b-0 contact-title">
              <i className="pe-7s-call"></i> &nbsp; {SocialDataPrefix[0].title}
            </p>
          </Col>
          <Col lg={3} className="margin-t-30 text-right">
            <p className="contact-title">
              <i className="pe-7s-mail-open"></i>&nbsp;{" "}
              {SocialDataPrefix[1].title}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Social
