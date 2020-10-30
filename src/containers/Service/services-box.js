import React, { Component } from "react"
import { Col } from "reactstrap"

class ServiceBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.services.map((service, key) => (
          <Col lg={2} key={key} className="margin-t-20">
            <div className="services-box text-center hover-effect">
              <i className={service.icon + " text-custom"}></i>
              <h3 className="padding-t-15">{service.title}</h3>
              {/* <p className="padding-t-15 text-muted">{service.desc}</p> */}
            </div>
          </Col>
        ))}
      </React.Fragment>
    )
  }
}

export default ServiceBox
