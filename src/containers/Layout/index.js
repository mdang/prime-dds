import React from "react"
import Helmet from "react-helmet"
import Navbar from "../Navbar"
import Footer from "../Footer"

import "../../assets/scss/style2.scss"
import "../../assets/scss/black.scss"

const Layout = ({ typeOfPage, themeColor, children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Helmet defer={false} defaultTitle={siteTitle} >
      <html className={themeColor} lang="en" />
    </Helmet>
    <Navbar
      typeOfPage={typeOfPage}
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <div>{children}</div>
    <Footer typeOfPage={typeOfPage} />
  </>
)

export default Layout
