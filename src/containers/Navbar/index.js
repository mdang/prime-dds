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

import SocialDataArlingtonDental from "../../data/social/arlingtonDental/index"
import SocialDataCrownDental from "../../data/social/crownDental/index"
import SocialDataCrystalCreek from "../../data/social/crystalCreek/index"
import SocialDataDenstar from "../../data/social/denstar/index"
import SocialDataFairview from "../../data/social/fairview/index"
import SocialDataPrimeDentalGarland from "../../data/social/primeDentalGarland/index"
import SocialDataPrimeDentalGP from "../../data/social/primeDentalGP/index"
import SocialDataPrimeDentalPlano from "../../data/social/primeDentalPlano/index"
import SocialDataShare from "../../data/social/share/index"
import SocialDataWhiteRock from "../../data/social/whiteRock/index"

import {
  Navbar,
  Nav,
  NavbarBrand,
  Container,
  Collapse,
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
  let NavbarLinksDataPrefix = NavBarLinksDataPrimeDDS
  let SocialDataPrefix = SocialDataWhiteRock

  let NavbarDataPrefix = NavBarDataPrimeDDS

  let [typeOfPage] = useState(props.typeOfPage)

  if (typeOfPage === "arlingtonDental") {
    NavbarDataPrefix = NavBarDataArlingtonDental
    SocialDataPrefix = SocialDataArlingtonDental
  } else if (typeOfPage === "crownDental") {
    NavbarDataPrefix = NavBarDataCrownDental
    SocialDataPrefix = SocialDataCrownDental
  } else if (typeOfPage === "crystalCreek") {
    NavbarDataPrefix = NavBarDataCrystalCreek
    SocialDataPrefix = SocialDataCrystalCreek
  } else if (typeOfPage === "denstar") {
    NavbarDataPrefix = NavBarDataDenstar
    SocialDataPrefix = SocialDataDenstar
  } else if (typeOfPage === "fairview") {
    NavbarDataPrefix = NavBarDataFairview
    SocialDataPrefix = SocialDataFairview
  } else if (typeOfPage === "primeDentalGarland") {
    NavbarDataPrefix = NavBarDataPrimeDentalGarland
    SocialDataPrefix = SocialDataPrimeDentalGarland
  } else if (typeOfPage === "primeDentalGP") {
    NavbarDataPrefix = NavBarDataPrimeDentalGP
    SocialDataPrefix = SocialDataPrimeDentalGP
  } else if (typeOfPage === "primeDentalPlano") {
    NavbarDataPrefix = NavBarDataPrimeDentalPlano
    SocialDataPrefix = SocialDataPrimeDentalPlano
  } else if (typeOfPage === "share") {
    NavbarDataPrefix = NavBarDataShare
    SocialDataPrefix = SocialDataShare
  } else if (typeOfPage === "whiteRock") {
    NavbarDataPrefix = NavBarDataWhiteRock
    SocialDataPrefix = SocialDataWhiteRock
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

              <Collapse id="navbarCollapse" navbar>
                <div className="nav-button ml-auto">
                    <Nav navbar className="navbar-right">
                      <li className="contact-title text-white">
                        <i className="pe-7s-call"></i> &nbsp; {SocialDataPrefix[0].title}
                      </li>
                      {NavbarDataPrefix[2].title && 
                        <li>
                          <a
                            href={NavbarDataPrefix[2].title}
                            className="btn btn-custom margin-t-30 waves-effect waves-light mb-5"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {NavbarLinksDataPrefix[2].title}
                          </a>
                        </li>
                      }
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
