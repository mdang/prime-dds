import React from "react"
import Navbar from "../Navbar"
import Footer from "../Footer"

import "../../assets/scss/style2.scss"
// import "../../assets/scss/black.scss"

const LayoutPartner = ({
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
}) => (
  <>
    <Navbar
      typeOfPage="parent"
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <div>{children}</div>
    <Footer />
  </>
)

export default LayoutPartner
