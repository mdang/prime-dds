import React, { Component } from "react"
import { Row, Col } from "reactstrap"

class SectionTitle extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg={{ size: 8, offset: 2 }}>
            <h2 className="section-title text-center">{this.props.title}</h2>
            <div className="section-title-border margin-t-20"></div>
            {this.props.desc && <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">
              {this.props.desc}
            </p> }
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default SectionTitle
