import React, { Component } from "react"

//Import Footer link
import FooterLinks from "./footer-links"

function Footer(props) {
  return (
  <React.Fragment>
    <footer className="footer">


    {/* Render footer links */}
    <FooterLinks typeOfPage={props.typeOfPage} />
    </footer>
  </React.Fragment>
  )

}

export default Footer