import React, { useState } from "react"
import TeamDataArlingtonDental from "../../data/team/arlingtonDental/index"
import TeamDataCrownDental from "../../data/team/crownDental/index"
import TeamDataCrystalCreek from "../../data/team/crystalCreek/index"
import TeamDataDenstar from "../../data/team/denstar/index"
import TeamDataFairview from "../../data/team/fairview/index"
import TeamDataPrimeDentalGarland from "../../data/team/primeDentalGarland/index"
import TeamDataPrimeDentalGP from "../../data/team/primeDentalGP/index"
import TeamDataPrimeDentalPlano from "../../data/team/primeDentalPlano/index"
import TeamDataWhiteRock from "../../data/team/whiteRock"
import TeamMembersDataArlingtonDental from "../../data/team/_teamMembers/arlingtonDental/index"
import TeamMembersDataCrownDental from "../../data/team/_teamMembers/crownDental/index"
import TeamMembersDataCrystalCreek from "../../data/team/_teamMembers/crystalCreek/index"
import TeamMembersDataDenstar from "../../data/team/_teamMembers/denstar/index"
import TeamMembersDataFairview from "../../data/team/_teamMembers/fairview/index"
import TeamMembersDataPrimeDentalGarland from "../../data/team/_teamMembers/primeDentalGarland/index"
import TeamMembersDataPrimeDentalGP from "../../data/team/_teamMembers/primeDentalGP/index"
import TeamMembersDataPrimeDentalPlano from "../../data/team/_teamMembers/primeDentalPlano/index"
import TeamMembersDataWhiteRock from "../../data/team/_teamMembers/whiteRock"
import { Container, Row } from "reactstrap"
import TeamBox from "./TeamBox"

//Import Section Title
import SectionTitle from "../common/section-title"

function Team(props) {
  let [typeOfPage] = useState(props.typeOfPage)
  let TeamDataPrefix = TeamDataWhiteRock
  let TeamMembersDataPrefix = TeamMembersDataWhiteRock

  if (typeOfPage === "arlingtonDental") {
    TeamDataPrefix = TeamDataArlingtonDental
    TeamMembersDataPrefix = TeamMembersDataArlingtonDental
  } else if (typeOfPage === "crownDental") {
    TeamDataPrefix = TeamDataCrownDental
    TeamMembersDataPrefix = TeamMembersDataCrownDental
  } else if (typeOfPage === "crystalCreek") {
    TeamDataPrefix = TeamDataCrystalCreek
    TeamMembersDataPrefix = TeamMembersDataCrystalCreek
  } else if (typeOfPage === "denstar") {
    TeamDataPrefix = TeamDataDenstar
    TeamMembersDataPrefix = TeamMembersDataDenstar
  } else if (typeOfPage === "fairview") {
    TeamDataPrefix = TeamDataFairview
    TeamMembersDataPrefix = TeamMembersDataFairview
  } else if (typeOfPage === "primeDentalGarland") {
    TeamDataPrefix = TeamDataPrimeDentalGarland
    TeamMembersDataPrefix = TeamMembersDataPrimeDentalGarland
  } else if (typeOfPage === "primeDentalGP") {
    TeamDataPrefix = TeamDataPrimeDentalGP
    TeamMembersDataPrefix = TeamMembersDataPrimeDentalGP
  } else if (typeOfPage === "primeDentalPlano") {
    TeamDataPrefix = TeamDataPrimeDentalPlano
    TeamMembersDataPrefix = TeamMembersDataPrimeDentalPlano
  } else if (typeOfPage === "whiteRock") {
    TeamDataPrefix = TeamDataWhiteRock
    TeamMembersDataPrefix = TeamMembersDataWhiteRock
  } 
  
  return (
    <section className="section pt-4" id="team">
      <Container>
        {/* section title */}
        <SectionTitle
          title={TeamDataPrefix[0].title}
        />

        <Row className="margin-t-50">
          {/* team box */}
          <TeamBox teams={TeamMembersDataPrefix} />
        </Row>
      </Container>
    </section>
  )
}

export default Team
