import React, { Component } from "react"
import { Container, Row, Col, Form } from "reactstrap"

//Import Footer link
import FooterLinks from "./footer-links"

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer">
    

        {/* Render footer links */}
        <FooterLinks />
        </footer>
      </React.Fragment>
    )
  }
}

export default Footer
