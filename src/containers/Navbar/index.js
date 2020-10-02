import React, { useState, Fragment } from "react"
import NavBarDataArlingtonDental from "../../data/navbar/arlingtonDental/index"
import NavBarDataCrownDental from "../../data/navbar/crownDental/index"
import NavBarDataCrystalCreek from "../../data/navbar/crystalCreek/index"
import NavBarDataDenstar from "../../data/navbar/denstar/index"
import NavBarDataFairview from "../../data/navbar/fairview/index"
import NavBarDataPrimeDDS from "../../data/navbar/primeDDS"
import NavBarDataPrimeDentalGarland from "../../data/navbar/primeDentalGarland/index"
import NavBarDataPrimeDentalGP from "../../data/navbar/primeDentalGP/index"
import NavBarDataPrimeDentalPlano from "../../data/navbar/primeDentalPlano/index"
import NavBarDataShare from "../../data/navbar/share/index"
import NavBarDataWhiteRock from "../../data/navbar/whiteRock/index"
import NavBarLinksDataPrimeDDS from "../../data/navbar/_navbarLinks/primeDDS"
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

import logoArlingtonDental from "../../assets/images/logos/arlingtonDental.png"
import logoCrownDental from "../../assets/images/logos/crownDental.png"
import logoCrystalCreek from "../../assets/images/logos/crystalCreek.svg"
import logoDenstar from "../../assets/images/logos/denstar.png"
import logoFairview from "../../assets/images/logos/fairview.svg"
import logoPrimeDDS from "../../assets/images/logos/PrimeDental.svg"
import logoShare from "../../assets/images/logos/share.svg"
import logoWhiteRock from "../../assets/images/logos/whiteRock.svg"

import "react-sticky-header/styles.css"
import StickyHeader from "react-sticky-header"

function NavbarPage(props) {
  const NavbarLinksDataPrefix = NavBarLinksDataPrimeDDS

  const [isOpenMenu, setIsOpen] = useState(false)

  let NavbarDataPrefix = NavBarDataPrimeDDS

  let [typeOfPage] = useState(props.typeOfPage)

  const toggle = () => setIsOpen(!isOpenMenu)

  if (typeOfPage === "arlingtonDental") {
    NavbarDataPrefix = NavBarDataArlingtonDental
  } else if (typeOfPage === "crownDental") {
    NavbarDataPrefix = NavBarDataCrownDental
  } else if (typeOfPage === "crystalCreek") {
    NavbarDataPrefix = NavBarDataCrystalCreek
  } else if (typeOfPage === "denstar") {
    NavbarDataPrefix = NavBarDataDenstar
  } else if (typeOfPage === "fairview") {
    NavbarDataPrefix = NavBarDataFairview
  } else if (typeOfPage === "primeDentalGarland") {
    NavbarDataPrefix = NavBarDataPrimeDentalGarland
  } else if (typeOfPage === "primeDentalGP") {
    NavbarDataPrefix = NavBarDataPrimeDentalGP
  } else if (typeOfPage === "primeDentalPlano") {
    NavbarDataPrefix = NavBarDataPrimeDentalPlano
  } else if (typeOfPage === "share") {
    NavbarDataPrefix = NavBarDataShare
  } else if (typeOfPage === "whiteRock") {
    NavbarDataPrefix = NavBarDataWhiteRock
  } else {
    NavbarDataPrefix = NavBarDataPrimeDDS
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
              <NavbarBrand className="logo text-uppercase" href="/">
                <Image
                  Path={
                    typeOfPage === "arlingtonDental" ? 
                    logoArlingtonDental :
                    typeOfPage === "crownDental" ? 
                    logoCrownDental :
                    typeOfPage === "crystalCreek" ? 
                    logoCrystalCreek :
                    typeOfPage === "denstar" ? 
                    logoDenstar :
                    typeOfPage === "fairview" ? 
                    logoFairview :
                    typeOfPage === "share" ? 
                    logoShare :
                    typeOfPage === "whiteRock" ? 
                    logoWhiteRock
                    : logoPrimeDDS
                  }
                  Class="logo-img"
                  Alt={NavbarDataPrefix[0].title}
                />
              </NavbarBrand>
              <NavbarToggler onClick={toggle}>
                <i className="mdi mdi-menu"></i>
              </NavbarToggler>

              <Collapse id="navbarCollapse" isOpen={isOpenMenu} navbar>
                <div className="nav-button ml-auto">
                    <Nav navbar className="navbar-right">
                      <li>
                        <Button
                          color="none"
                          type="button"
                          className="btn-custom navbar-btn btn-rounded waves-effect waves-light"
                        >
                          {NavbarLinksDataPrefix[2].title}
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
