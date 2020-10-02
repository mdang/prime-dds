import React, { Fragment, useState } from "react"
import ContactDataArlingtonDental from "../../data/contact/arlingtonDental/index"
import ContactDataCrownDental from "../../data/contact/crownDental/index"
import ContactDataCrystalCreek from "../../data/contact/crystalCreek/index"
import ContactDataDenstar from "../../data/contact/denstar/index"
import ContactDataFairview from "../../data/contact/fairview/index"
import ContactDataPrimeDentalGarland from "../../data/contact/primeDentalGarland/index"
import ContactDataPrimeDentalGP from "../../data/contact/primeDentalGP/index"
import ContactDataPrimeDentalPlano from "../../data/contact/primeDentalPlano/index"
import ContactDataWhiteRock from "../../data/contact/whiteRock"
import ContactLocationDataArlingtonDental from "../../data/contact/_contactLocation/arlingtonDental/index"
import ContactLocationDataCrownDental from "../../data/contact/_contactLocation/crownDental/index"
import ContactLocationDataCrystalCreek from "../../data/contact/_contactLocation/crystalCreek/index"
import ContactLocationDataDenstar from "../../data/contact/_contactLocation/denstar/index"
import ContactLocationDataFairview from "../../data/contact/_contactLocation/fairview/index"
import ContactLocationDataPrimeDentalGarland from "../../data/contact/_contactLocation/primeDentalGarland/index"
import ContactLocationDataPrimeDentalGP from "../../data/contact/_contactLocation/primeDentalGP/index"
import ContactLocationDataPrimeDentalPlano from "../../data/contact/_contactLocation/primeDentalPlano/index"
import ContactLocationDataWhiteRock from "../../data/contact/_contactLocation/whiteRock"
import ContactHoursDataArlingtonDental from "../../data/contact/_contactHours/arlingtonDental/index"
import ContactHoursDataCrownDental from "../../data/contact/_contactHours/crownDental/index"
import ContactHoursDataCrystalCreek from "../../data/contact/_contactHours/crystalCreek/index"
import ContactHoursDataDenstar from "../../data/contact/_contactHours/denstar/index"
import ContactHoursDataFairview from "../../data/contact/_contactHours/fairview/index"
import ContactHoursDataPrimeDentalGarland from "../../data/contact/_contactHours/primeDentalGarland/index"
import ContactHoursDataPrimeDentalGP from "../../data/contact/_contactHours/primeDentalGP/index"
import ContactHoursDataPrimeDentalPlano from "../../data/contact/_contactHours/primeDentalPlano/index"
import ContactHoursDataWhiteRock from "../../data/contact/_contactHours/whiteRock"
import { Container, Row, Col } from "reactstrap"
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Image from "../../components/image/index"
import map from "../../assets/images/dorsin/map.png"

//Import Section Title
import SectionTitle from "../common/section-title"

function Contact(props) {
  let [typeOfPage] = useState(props.typeOfPage)
  let ContactDataPrefix = ContactDataWhiteRock
  let ContactLocationDataPrefix = ContactLocationDataWhiteRock
  let ContactHoursDataPrefix = ContactHoursDataWhiteRock

  if (typeOfPage === "arlingtonDental") {
    ContactDataPrefix = ContactDataArlingtonDental
    ContactLocationDataPrefix = ContactLocationDataArlingtonDental
    ContactHoursDataPrefix = ContactHoursDataArlingtonDental
  } else if (typeOfPage === "crownDental") {
    ContactDataPrefix = ContactDataCrownDental
    ContactLocationDataPrefix = ContactLocationDataCrownDental
    ContactHoursDataPrefix = ContactHoursDataCrownDental
  } else if (typeOfPage === "crystalCreek") {
    ContactDataPrefix = ContactDataCrystalCreek
    ContactLocationDataPrefix = ContactLocationDataCrystalCreek
    ContactHoursDataPrefix = ContactHoursDataCrystalCreek
  } else if (typeOfPage === "denstar") {
    ContactDataPrefix = ContactDataDenstar
    ContactLocationDataPrefix = ContactLocationDataDenstar
    ContactHoursDataPrefix = ContactHoursDataDenstar
  } else if (typeOfPage === "fairview") {
    ContactDataPrefix = ContactDataFairview
    ContactLocationDataPrefix = ContactLocationDataFairview
    ContactHoursDataPrefix = ContactHoursDataFairview
  } else if (typeOfPage === "primeDentalGarland") {
    ContactDataPrefix = ContactDataPrimeDentalGarland
    ContactLocationDataPrefix = ContactLocationDataPrimeDentalGarland
    ContactHoursDataPrefix = ContactHoursDataPrimeDentalGarland
  } else if (typeOfPage === "primeDentalGP") {
    ContactDataPrefix = ContactDataPrimeDentalGP
    ContactLocationDataPrefix = ContactLocationDataPrimeDentalGP
    ContactHoursDataPrefix = ContactHoursDataPrimeDentalGP
  } else if (typeOfPage === "primeDentalPlano") {
    ContactDataPrefix = ContactDataPrimeDentalPlano
    ContactLocationDataPrefix = ContactLocationDataPrimeDentalPlano
    ContactHoursDataPrefix = ContactHoursDataPrimeDentalPlano
  } else if (typeOfPage === "whiteRock") {
    ContactDataPrefix = ContactDataWhiteRock
    ContactLocationDataPrefix = ContactLocationDataWhiteRock
    ContactHoursDataPrefix = ContactHoursDataWhiteRock
  } 

  const position = [ContactLocationDataPrefix[0].lat, ContactLocationDataPrefix[0].lng];

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
                  <span className="h5">Office Address:</span>
                  <br />{" "}
                  <span className="text-muted d-block mt-2">
                    {ContactLocationDataPrefix[0].title}
                  </span>
                </p>
                <p className="mt-4">
                  <span className="h5">Working Hours:</span>
                  <br />{" "}
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
                <Image Path={map} Class="map-img" />
              </div>
              {/* <Map center={position} zoom={20} dragging={false} scrollWheelZoom={false} touchZoom={false}>
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </Map> */}
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}

export default Contact
