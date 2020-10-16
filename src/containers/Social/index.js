import React, {useState} from "react"
import SocialDataArlingtonDental from "../../data/social/arlingtonDental/index"
import SocialDataCrownDental from "../../data/social/crownDental/index"
import SocialDataCrystalCreek from "../../data/social/crystalCreek/index"
import SocialDataDenstar from "../../data/social/denstar/index"
import SocialDataFairview from "../../data/social/fairview/index"
import SocialDataPrimeDDS from "../../data/social/primeDDS"
import SocialDataPrimeDentalGarland from "../../data/social/primeDentalGarland/index"
import SocialDataPrimeDentalGP from "../../data/social/primeDentalGP/index"
import SocialDataPrimeDentalPlano from "../../data/social/primeDentalPlano/index"
import SocialDataShare from "../../data/social/share/index"
import SocialDataWhiteRock from "../../data/social/whiteRock/index"
// import SocialLinksDataArlingtonDental from "../../data/social/_socialLinks/arlingtonDental/index"
// import SocialLinksDataCrownDental from "../../data/social/_socialLinks/crownDental/index"
// import SocialLinksDataCrystalCreek from "../../data/social/_socialLinks/crystalCreek/index"
// import SocialLinksDataDenstar from "../../data/social/_socialLinks/denstar/index"
// import SocialLinksDataFairview from "../../data/social/_socialLinks/fairview/index"
// import SocialLinksDataPrimeDDS from "../../data/social/_socialLinks/primeDDS"
// import SocialLinksDataPrimeDentalGarland from "../../data/social/_socialLinks/primeDentalGarland/index"
// import SocialLinksDataPrimeDentalGP from "../../data/social/_socialLinks/primeDentalGP/index"
// import SocialLinksDataPrimeDentalPlano from "../../data/social/_socialLinks/primeDentalPlano/index"
// import SocialLinksDataShare from "../../data/social/_socialLinks/share/index"
// import SocialLinksDataWhiteRock from "../../data/social/_socialLinks/whiteRock"
import { Container, Row, Col } from "reactstrap"

function Social(props) {
  let [typeOfPage] = useState(props.typeOfPage)
  let SocialDataPrefix = SocialDataPrimeDDS
  // let SocialLinksDataPrefix = SocialLinksDataPrimeDDS

  if (typeOfPage === "arlingtonDental") {
    SocialDataPrefix = SocialDataArlingtonDental
    // SocialLinksDataPrefix = SocialLinksDataArlingtonDental
  } else if (typeOfPage === "crownDental") {
    SocialDataPrefix = SocialDataCrownDental
    // SocialLinksDataPrefix = SocialLinksDataCrownDental
  } else if (typeOfPage === "crystalCreek") {
    SocialDataPrefix = SocialDataCrystalCreek
    // SocialLinksDataPrefix = SocialLinksDataCrystalCreek
  } else if (typeOfPage === "denstar") {
    SocialDataPrefix = SocialDataDenstar
    // SocialLinksDataPrefix = SocialLinksDataDenstar
  } else if (typeOfPage === "fairview") {
    SocialDataPrefix = SocialDataFairview
    // SocialLinksDataPrefix = SocialLinksDataFairview
  } else if (typeOfPage === "primeDentalGarland") {
    SocialDataPrefix = SocialDataPrimeDentalGarland
    // SocialLinksDataPrefix = SocialLinksDataPrimeDentalGarland
  } else if (typeOfPage === "primeDentalGP") {
    SocialDataPrefix = SocialDataPrimeDentalGP
    // SocialLinksDataPrefix = SocialLinksDataPrimeDentalGP
  } else if (typeOfPage === "primeDentalPlano") {
    SocialDataPrefix = SocialDataPrimeDentalPlano
    // SocialLinksDataPrefix = SocialLinksDataPrimeDentalPlano
  } else if (typeOfPage === "share") {
    SocialDataPrefix = SocialDataShare
    // SocialLinksDataPrefix = SocialLinksDataShare
  } else if (typeOfPage === "whiteRock") {
    SocialDataPrefix = SocialDataWhiteRock
    // SocialLinksDataPrefix = SocialLinksDataWhiteRock
  }
  return (
    <section className="cta bg-light">
      <Container>
        <Row>
          {/* <Col lg={6}>
            <ul className="list-inline social margin-t-20">
              {SocialLinksDataPrefix.map(item => (
                <li className="list-inline-item">
                  <a href={item.links} className="social-icon">
                    <i className={"mdi mdi-" + item.title}></i>
                  </a>
                </li>
              ))}
            </ul>
          </Col> */}
          <Col lg={12} className="margin-t-30 text-right">
          <p className="margin-b-0 contact-title">
              <i className="pe-7s-call"></i> &nbsp; {SocialDataPrefix[0].title}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Social
