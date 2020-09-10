import React, { Component } from "react"
import { Container, Row, Col, Form } from "reactstrap"

//Import Footer link
import FooterLinks from "./footer-links"

class Footer extends Component {
  state = {
    links: [
      {
        title: "White Rock Dental",
        child: [
          { link: "#", title: "Home" },
          { link: "#", title: "About us" },
          { link: "#", title: "Careers" },
          { link: "#", title: "Contact us" },
        ],
      },
      {
        title: "Information",
        child: [
          { link: "#", title: "Terms & Condition" },
          { link: "#", title: "About us" },
          { link: "#", title: "Jobs" },
          { link: "#", title: "Bookmarks" },
        ],
      },
    ],
  }
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
