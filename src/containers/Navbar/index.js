import React, { useState, Fragment } from "react"
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler, 
  Container,
  Collapse,
  Button,
} from "reactstrap"
import Image from "../../components/image/index"
import logo from "../../assets/images/logo.png"

//stickey header
import "react-sticky-header/styles.css"
import StickyHeader from "react-sticky-header"

function NavbarPage(props) {
  const [isOpenMenu, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpenMenu);

  return (
    <Fragment>
        <StickyHeader
          header={
            <Navbar
              expand="lg"
              fixed="top"
              className={
                "navbar-custom sticky sticky-dark " + props.navClass
              }
            >
              <Container>
                <NavbarBrand className="logo text-uppercase" href="/">
                  <Image Path={logo} Class="logo-img" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle}>
                  <i className="mdi mdi-menu"></i>
                </NavbarToggler>

                <Collapse
                  id="navbarCollapse"
                  isOpen={isOpenMenu}
                  navbar
                >
                  <Nav navbar className="navbar-center" id="mySidenav"></Nav>
                  <div className="nav-button ml-auto">
                    <Nav navbar className="navbar-right">
                      <li>
                        <Button
                          color="none"
                          type="button"
                          className="btn-custom navbar-btn btn-rounded waves-effect waves-light"
                        >
                          Book Now
                        </Button>
                      </li>
                    </Nav>
                  </div>
                </Collapse>
              </Container>
            </Navbar>
          }
          stickyOffset={-100}
        ></StickyHeader>
      </Fragment>
  )
}

export default NavbarPage
