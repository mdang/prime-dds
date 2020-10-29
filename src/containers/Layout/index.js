import React from "react"
import Helmet from "react-helmet"
import Navbar from "../Navbar"
import Footer from "../Footer"

import social from "../../assets/images/opengraph/social.jpg"

import "../../assets/scss/style2.scss"
import "../../assets/scss/black.scss"

const Layout = ({ typeOfPage, themeColor, children, onHideNav, onShowNav, showNav, siteTitle, siteDesc, ogImage }) => (
  <>
    <Helmet defer={false} defaultTitle={siteTitle} >
      <html className={themeColor} lang="en" />
      <meta property="og:type" content="website" />
      <meta name="description" content={siteDesc} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content={`${social}`} />
      <meta property="og:image:alt" content={siteTitle} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
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
