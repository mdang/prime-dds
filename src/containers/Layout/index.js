import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

import '../../assets/scss/style2.scss'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Navbar typeOfPage="parent" siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div>{children}</div>
    <Footer />
  </>
)

export default Layout
