import React, { useState } from "react"
import ServiceDataPrimeDDS from "../../data/service/primeDDS"
import ServiceDataWhiteRock from "../../data/service/whiteRock/index"
import ServiceBoxDataPrimeDDS from "../../data/service/serviceBox/primeDDS"
import ServiceBoxDataWhiteRock from "../../data/service/serviceBox/whiteRock/"
import { Container, Row } from "reactstrap"

//Import Section Title
import SectionTitle from "../common/section-title"
import ServiceBox from "./services-box"

function Service(props) {
  let ServiceDataPrefix = ServiceDataPrimeDDS
  let ServiceBoxDataPrefix = ServiceBoxDataPrimeDDS

  let [typeOfPage] = useState(props.typeOfPage)

  if (typeOfPage === "parent") {
    ServiceDataPrefix = ServiceDataPrimeDDS
    ServiceBoxDataPrefix = ServiceBoxDataPrimeDDS
  } else {
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
