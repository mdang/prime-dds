import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import Image from "../../components/image/index"

//Import Section Title
import SectionTitle from "../common/section-title"
import calendar from "../../assets/images/dorsin/calendar.jpg"

class Process extends Component {

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Our Dentists are Available on Saturdays"
              desc="Toothache on a Saturday?  Busy during the weekdays?  Look no further!  Our dentists are available to you on Saturdays for your convenience."
            />

            <Row className="margin-t-30 vertical-content">
              <Col lg={5}>
                <div className="features-box">
                  <h2>Saturday Dentist Appointments for Convenience</h2>
                  <p className="text-muted web-desc">We understand that your schedule is busy and seeing a dentist could be inconvenient.  This is why our team of dentists are dedicated to working around your schedule.  We are available for you on Saturdays when it is convenient for you and your family so you do not have to take time away from your weekly obligations.  Whether you need an exam and cleaning or an emergency procedure, we promise to be accommodating of your time.</p>
                </div>
              </Col>
              <Col lg={7}>
                <div className="features-img features-right text-right">
                  <Image Path={calendar} Class="about-img" Alt="Calendar image" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    )
  }
}

export default Process
