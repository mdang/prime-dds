import React, { Fragment } from "react"
import ContactDataWhiteRock from "../../data/contact/whiteRock"
import ContactLocationDataWhiteRock from "../../data/contact/_contactLocation/whiteRock"
import ContactHoursDataWhiteRock from "../../data/contact/_contactHours/whiteRock"
import { Container, Row, Col } from "reactstrap"
import Image from "../../components/image/index"
import map from "../../assets/images/dorsin/map.png"

//Import Section Title
import SectionTitle from "../common/section-title"

function Contact(props) {
  const ContactDataPrefix = ContactDataWhiteRock
  const ContactLocationDataPrefix = ContactLocationDataWhiteRock
  const ContactHoursDataPrefix = ContactHoursDataWhiteRock
  return (
    <Fragment>
      <section className="section " id="contact">
        <Container>
          <SectionTitle
            title={ContactDataPrefix[0].title}
          />

          <Row>
            <Col lg={4}>
              <div className="mt-4 pt-4">
                <p className="mt-4">
                  <span className="h5">Office Address:</span>
                  <br />{" "}
                  <span className="text-muted d-block mt-2">
                    {ContactLocationDataPrefix[0].title}
                  </span>
                </p>
                <p className="mt-4">
                  <span className="h5">Working Hours:</span>
                  <br />{" "}
                  {ContactHoursDataPrefix.map(item => (
                    <span className="text-muted d-block mt-2">
                      {item.title}
                    </span>
                  ))}
                </p>
              </div>
            </Col>
            <Col lg={8}>
              <div className="custom-form mt-4 pt-4">
                <Image Path={map} Class="map-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}

export default Contact
