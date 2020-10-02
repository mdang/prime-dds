import React, { useState } from "react"
import ServiceDataArlingtonDental from "../../data/service/arlingtonDental/index"
import ServiceDataCrownDental from "../../data/service/crownDental/index"
import ServiceDataCrystalCreek from "../../data/service/crystalCreek/index"
import ServiceDataDenstar from "../../data/service/denstar/index"
import ServiceDataFairview from "../../data/service/fairview/index"
import ServiceDataPrimeDDS from "../../data/service/primeDDS"
import ServiceDataPrimeDentalGarland from "../../data/service/primeDentalGarland/index"
import ServiceDataPrimeDentalGP from "../../data/service/primeDentalGP/index"
import ServiceDataPrimeDentalPlano from "../../data/service/primeDentalPlano/index"
import ServiceDataWhiteRock from "../../data/service/whiteRock/index"
import ServiceBoxDataArlingtonDental from "../../data/service/_serviceBox/arlingtonDental/index"
import ServiceBoxDataCrownDental from "../../data/service/_serviceBox/crownDental/index"
import ServiceBoxDataCrystalCreek from "../../data/service/_serviceBox/crystalCreek/index"
import ServiceBoxDataDenstar from "../../data/service/_serviceBox/denstar/index"
import ServiceBoxDataFairview from "../../data/service/_serviceBox/fairview/index"
import ServiceBoxDataPrimeDDS from "../../data/service/_serviceBox/primeDDS"
import ServiceBoxDataPrimeDentalGarland from "../../data/service/_serviceBox/primeDentalGarland/index"
import ServiceBoxDataPrimeDentalGP from "../../data/service/_serviceBox/primeDentalGP/index"
import ServiceBoxDataPrimeDentalPlano from "../../data/service/_serviceBox/primeDentalPlano/index"
import ServiceBoxDataWhiteRock from "../../data/service/_serviceBox/whiteRock/"
import { Container, Row } from "reactstrap"

//Import Section Title
import SectionTitle from "../common/section-title"
import ServiceBox from "./services-box"

function Service(props) {
  let ServiceDataPrefix = ServiceDataWhiteRock
  let ServiceBoxDataPrefix = ServiceBoxDataWhiteRock

  let [typeOfPage] = useState(props.typeOfPage)

  console.log('typeOfPage props ', props);
  console.log('typeOfPage ', typeOfPage);

  if (typeOfPage === "arlingtonDental") {
    ServiceDataPrefix = ServiceDataArlingtonDental
    ServiceBoxDataPrefix = ServiceBoxDataArlingtonDental
  } else if (typeOfPage === "crownDental") {
    ServiceDataPrefix = ServiceDataCrownDental
    ServiceBoxDataPrefix = ServiceBoxDataCrownDental
  } else if (typeOfPage === "crystalCreek") {
    ServiceDataPrefix = ServiceDataCrystalCreek
    ServiceBoxDataPrefix = ServiceBoxDataCrystalCreek
  } else if (typeOfPage === "denstar") {
    ServiceDataPrefix = ServiceDataDenstar
    ServiceBoxDataPrefix = ServiceBoxDataDenstar
  } else if (typeOfPage === "fairview") {
    ServiceDataPrefix = ServiceDataFairview
    ServiceBoxDataPrefix = ServiceBoxDataFairview
  } else if (typeOfPage === "primeDentalGarland") {
    ServiceDataPrefix = ServiceDataPrimeDentalGarland
    ServiceBoxDataPrefix = ServiceBoxDataPrimeDentalGarland
  } else if (typeOfPage === "primeDentalGP") {
    ServiceDataPrefix = ServiceDataPrimeDentalGP
    ServiceBoxDataPrefix = ServiceBoxDataPrimeDentalGP
  } else if (typeOfPage === "primeDentalPlano") {
    ServiceDataPrefix = ServiceDataPrimeDentalPlano
    ServiceBoxDataPrefix = ServiceBoxDataPrimeDentalPlano
  } else if (typeOfPage === "whiteRock") {
    ServiceDataPrefix = ServiceDataWhiteRock
    ServiceBoxDataPrefix = ServiceBoxDataWhiteRock
  } 

  return (
    <section className={"section " + props.sectionClass} id="services">
      <Container>
        <SectionTitle
          title={ServiceDataPrefix[0].title}
          desc={ServiceDataPrefix[1].title}
        />

        <Row className="margin-t-30">
          <ServiceBox services={ServiceBoxDataPrefix} />
        </Row>
      </Container>
    </section>
  )
}

export default Service
