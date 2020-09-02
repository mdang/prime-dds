import React, { useState, Fragment } from "react"
import NavBarDataPrimeDDS from "../../data/navbar/primeDDS"
import NavBarDataWhiteRock from "../../data/navbar/whiteRock/index"
import NavBarLinksDataPrimeDDS from "../../data/navbar/navbarLinks/primeDDS"
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
  Button,
} from "reactstrap"
import Image from "../../components/image/index"

import logoCrystalCreek from "../../assets/images/logos/crystalCreek.svg"
import logoPrimeDDS from "../../assets/images/logos/PrimeDental.svg"

import "react-sticky-header/styles.css"
import StickyHeader from "react-sticky-header"

function NavbarPage(props) {
  const NavbarLinksDataPrefix = NavBarLinksDataPrimeDDS

  const [isOpenMenu, setIsOpen] = useState(false)

  let NavbarDataPrefix = NavBarDataPrimeDDS

  let [typeOfPage] = useState(props.typeOfPage)

  const toggle = () => setIsOpen(!isOpenMenu)

  if (typeOfPage === "parent") {
    NavbarDataPrefix = NavBarDataPrimeDDS
  } else {
    NavbarDataPrefix = NavBarDataWhiteRock
  }

  return (
    <Fragment>
      <StickyHeader
        header={
          <Navbar
            expand="lg"
            fixed="top"
            className={"navbar-custom sticky sticky-dark " + props.navClass}
          >
            <Container>
              {typeOfPage === "parent" ? (
                <NavbarBrand className="logo text-uppercase" href="/">
                  <Image
                    Path={logoPrimeDDS}
                    Class="logo-img"
                    Alt={NavbarDataPrefix[0].title}
                  />
                </NavbarBrand>
              ) : (
                <NavbarBrand className="logo text-uppercase" href="/">
                  <Image
                    Path={logoCrystalCreek}
                    Class="logo-img"
                    Alt={NavbarDataPrefix[0].title}
                  />
                </NavbarBrand>
              )}
              <NavbarToggler onClick={toggle}>
                <i className="mdi mdi-menu"></i>
              </NavbarToggler>

              <Collapse id="navbarCollapse" isOpen={isOpenMenu} navbar>
                <div className="nav-button ml-auto">
                  {typeOfPage === "parent" ? (
                    <Nav navbar className="navbar-right">
                      {NavbarLinksDataPrefix.map((item, key) => (
                        <NavItem
                          key={key}
                          className={item.title === "Home" ? "active" : ""}
                        >
                          <NavLink href={"#test" + item.id}>
                            {" "}
                            {item.title}
                          </NavLink>
                        </NavItem>
                      ))}
                    </Nav>
                  ) : (
                    <Nav navbar className="navbar-right">
                      <li>
                        <Button
                          color="none"
                          type="button"
                          className="btn-custom navbar-btn btn-rounded waves-effect waves-light"
                        >
                          {NavbarDataPrefix[1].title}
                        </Button>
                      </li>
                    </Nav>
                  )}
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
