import React, { Fragment, useState } from "react"
import ContactDataArlingtonDental from "../../data/contact/arlingtonDental/index"
import ContactDataCrownDental from "../../data/contact/crownDental/index"
import ContactDataCrystalCreek from "../../data/contact/crystalCreek/index"
import ContactDataDenstar from "../../data/contact/denstar/index"
import ContactDataFairview from "../../data/contact/fairview/index"
import ContactDataPrimeDentalGarland from "../../data/contact/primeDentalGarland/index"
import ContactDataPrimeDentalGP from "../../data/contact/primeDentalGP/index"
import ContactDataPrimeDentalPlano from "../../data/contact/primeDentalPlano/index"
import ContactDataShare from "../../data/contact/share/index"
import ContactDataWhiteRock from "../../data/contact/whiteRock"
import ContactLocationDataArlingtonDental from "../../data/contact/_contactLocation/arlingtonDental/index"
import ContactLocationDataCrownDental from "../../data/contact/_contactLocation/crownDental/index"
import ContactLocationDataCrystalCreek from "../../data/contact/_contactLocation/crystalCreek/index"
import ContactLocationDataDenstar from "../../data/contact/_contactLocation/denstar/index"
import ContactLocationDataFairview from "../../data/contact/_contactLocation/fairview/index"
import ContactLocationDataPrimeDentalGarland from "../../data/contact/_contactLocation/primeDentalGarland/index"
import ContactLocationDataPrimeDentalGP from "../../data/contact/_contactLocation/primeDentalGP/index"
import ContactLocationDataPrimeDentalPlano from "../../data/contact/_contactLocation/primeDentalPlano/index"
import ContactLocationDataShare from "../../data/contact/_contactLocation/share"
import ContactLocationDataWhiteRock from "../../data/contact/_contactLocation/whiteRock"
import ContactHoursDataArlingtonDental from "../../data/contact/_contactHours/arlingtonDental/index"
import ContactHoursDataCrownDental from "../../data/contact/_contactHours/crownDental/index"
import ContactHoursDataCrystalCreek from "../../data/contact/_contactHours/crystalCreek/index"
import ContactHoursDataDenstar from "../../data/contact/_contactHours/denstar/index"
import ContactHoursDataFairview from "../../data/contact/_contactHours/fairview/index"
import ContactHoursDataPrimeDentalGarland from "../../data/contact/_contactHours/primeDentalGarland/index"
import ContactHoursDataPrimeDentalGP from "../../data/contact/_contactHours/primeDentalGP/index"
import ContactHoursDataPrimeDentalPlano from "../../data/contact/_contactHours/primeDentalPlano/index"
import ContactHoursDataShare from "../../data/contact/_contactHours/share"
import ContactHoursDataWhiteRock from "../../data/contact/_contactHours/whiteRock"

import TriColumnDataArlingtonDental from "../../data/triColumn/arlingtonDental/index"
import TriColumnDataCrownDental from "../../data/triColumn/crownDental/index"
import TriColumnDataCrystalCreek from "../../data/triColumn/crystalCreek/index"
import TriColumnDataDenstar from "../../data/triColumn/denstar/index"
import TriColumnDataFairview from "../../data/triColumn/fairview/index"
import TriColumnDataPrimeDentalGarland from "../../data/triColumn/primeDentalGarland/index"
import TriColumnDataPrimeDentalGP from "../../data/triColumn/primeDentalGP/index"
import TriColumnDataPrimeDentalPlano from "../../data/triColumn/primeDentalPlano/index"
import TriColumnDataShare from "../../data/triColumn/share/index"
import TriColumnDataWhiteRock from "../../data/triColumn/whiteRock/index"

import { Container, Row, Col } from "reactstrap"
import Image from "../../components/image/index"

import MapArlingtonDental from "../../assets/images/map/arlingtonDental.png"
import MapCrownDental from "../../assets/images/map/crownDental.png"
import MapCrystalCreek from "../../assets/images/map/crystalCreek.png"
import MapDenstar from "../../assets/images/map/denstar.png"
import MapFairview from "../../assets/images/map/fairview.png"
import MapPrimeDentalGarland from "../../assets/images/map/primeDentalGarland.png"
import MapPrimeDentalGP from "../../assets/images/map/primeDentalGP.png"
import MapPrimeDentalPlano from "../../assets/images/map/primeDentalPlano.png"
import MapShare from "../../assets/images/map/share.png"
import MapWhiteRock from "../../assets/images/map/whiteRock.png"

//Import Section Title
import SectionTitle from "../common/section-title"

function Contact(props) {
  let [typeOfPage] = useState(props.typeOfPage)
  let ContactDataPrefix = ContactDataWhiteRock
  let ContactLocationDataPrefix = ContactLocationDataWhiteRock
  let ContactHoursDataPrefix = ContactHoursDataWhiteRock
  let TriColumnDataPrefix = TriColumnDataWhiteRock
  let MapPrefix = MapWhiteRock

  if (typeOfPage === "arlingtonDental") {
    ContactDataPrefix = ContactDataArlingtonDental
    ContactLocationDataPrefix = ContactLocationDataArlingtonDental
    ContactHoursDataPrefix = ContactHoursDataArlingtonDental
    TriColumnDataPrefix = TriColumnDataArlingtonDental
    MapPrefix = MapArlingtonDental
  } else if (typeOfPage === "crownDental") {
    ContactDataPrefix = ContactDataCrownDental
    ContactLocationDataPrefix = ContactLocationDataCrownDental
    ContactHoursDataPrefix = ContactHoursDataCrownDental
    TriColumnDataPrefix = TriColumnDataCrownDental
    MapPrefix = MapCrownDental
  } else if (typeOfPage === "crystalCreek") {
    ContactDataPrefix = ContactDataCrystalCreek
    ContactLocationDataPrefix = ContactLocationDataCrystalCreek
    ContactHoursDataPrefix = ContactHoursDataCrystalCreek
    TriColumnDataPrefix = TriColumnDataCrystalCreek
    MapPrefix = MapCrystalCreek
  } else if (typeOfPage === "denstar") {
    ContactDataPrefix = ContactDataDenstar
    ContactLocationDataPrefix = ContactLocationDataDenstar
    ContactHoursDataPrefix = ContactHoursDataDenstar
    TriColumnDataPrefix = TriColumnDataDenstar
    MapPrefix = MapDenstar
  } else if (typeOfPage === "fairview") {
    ContactDataPrefix = ContactDataFairview
    ContactLocationDataPrefix = ContactLocationDataFairview
    ContactHoursDataPrefix = ContactHoursDataFairview
    TriColumnDataPrefix = TriColumnDataFairview
    MapPrefix = MapFairview
  } else if (typeOfPage === "primeDentalGarland") {
    ContactDataPrefix = ContactDataPrimeDentalGarland
    ContactLocationDataPrefix = ContactLocationDataPrimeDentalGarland
    ContactHoursDataPrefix = ContactHoursDataPrimeDentalGarland
    TriColumnDataPrefix = TriColumnDataPrimeDentalGarland
    MapPrefix = MapPrimeDentalGarland
  } else if (typeOfPage === "primeDentalGP") {
    ContactDataPrefix = ContactDataPrimeDentalGP
    ContactLocationDataPrefix = ContactLocationDataPrimeDentalGP
    ContactHoursDataPrefix = ContactHoursDataPrimeDentalGP
    TriColumnDataPrefix = TriColumnDataPrimeDentalGP
    MapPrefix = MapPrimeDentalGP
  } else if (typeOfPage === "primeDentalPlano") {
    ContactDataPrefix = ContactDataPrimeDentalPlano
    ContactLocationDataPrefix = ContactLocationDataPrimeDentalPlano
    ContactHoursDataPrefix = ContactHoursDataPrimeDentalPlano
    TriColumnDataPrefix = TriColumnDataPrimeDentalPlano
    MapPrefix = MapPrimeDentalPlano
  } else if (typeOfPage === "share") {
    ContactDataPrefix = ContactDataShare
    ContactLocationDataPrefix = ContactLocationDataShare
    ContactHoursDataPrefix = ContactHoursDataShare
    TriColumnDataPrefix = TriColumnDataShare
    MapPrefix = MapShare
  } else if (typeOfPage === "whiteRock") {
    ContactDataPrefix = ContactDataWhiteRock
    ContactLocationDataPrefix = ContactLocationDataWhiteRock
    ContactHoursDataPrefix = ContactHoursDataWhiteRock
    TriColumnDataPrefix = TriColumnDataWhiteRock
    MapPrefix = MapWhiteRock
  } 

  return (
    <Fragment>
      <section className="section " id="contact">
        <Container>
          <SectionTitle
            title={ContactDataPrefix[0].title}
          />

          <Row>
            <Col lg={4}>
              <div className="mt-4 pt-4">
                <p className="mt-4">
                  <h3 className="team-name">Office Address:</h3>
                  <address className="text-muted d-block mt-2">
                    {ContactLocationDataPrefix[0].title}
                  </address>
                </p>
                <p className="mt-4">
                  <h3 className="team-name">Working Hours:</h3>
                  {ContactHoursDataPrefix.map(item => (
                    <span className="text-muted d-block mt-2">
                      {item.title}
                    </span>
                  ))}
                </p>
              </div>
            </Col>
            <Col lg={8}>
              <div className="custom-form mt-4 pt-4">
              <a
              href={TriColumnDataPrefix[0].link}
              target="_blank"
              rel="noreferrer"
            ><Image Path={MapPrefix} Class="map-img" Alt={ContactLocationDataPrefix[0].title} /></a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}

export default Contact
