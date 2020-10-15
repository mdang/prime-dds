import React, {useState} from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
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

function FooterLinks(props) {
  let [typeOfPage] = useState(props.typeOfPage)
  let NavbarDataPrefix = NavBarDataPrimeDDS
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
  } 
  return (
    <div className="footer-alt">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="float-left pull-none ">
              <p className="copy-rights text-muted">
                &copy; {new Date().getFullYear()} {NavbarDataPrefix[0].title}
              </p>
            </div>
            <div className="clearfix"></div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterLinks
