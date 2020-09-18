import React from "react"
import AboutDataWhiteRock from "../../data/about/whiteRock"
import AboutListDataWhiteRock from "../../data/about/aboutList/whiteRock"
import { Container, Row, Col } from "reactstrap"
import Image from "../../components/image/index"
import about from "../../assets/images/dorsin/about-img.png"

function AboutUs(props) {
  const AboutDataPrefix = AboutDataWhiteRock
  const AboutListDataPrefix = AboutListDataWhiteRock
  return (
    <section className="section bg-light" id="features">
      <Container>
        <Row className="vertical-content">
          <Col lg={5}>
            <div className="features-box">
              <h3>{AboutDataPrefix[0].title}</h3>
              <p className="text-muted web-desc">{AboutDataPrefix[1].title}</p>
              <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                {AboutListDataPrefix.map(item => (
                  <li className="">{item.title}</li>
                ))}
              </ul>
              <a
                href="#"
                className="btn btn-custom margin-t-30 waves-effect waves-light"
              >
                Call Now <i className="mdi mdi-arrow-right"></i>
              </a>
            </div>
          </Col>
          <Col lg={7}>
            <div className="features-img features-right text-right">
              <Image Path={about} Class="about-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs
