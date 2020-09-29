import React from "react"
import TeamDataWhiteRock from "../../data/team/whiteRock"
import TeamMembersDataWhiteRock from "../../data/team/_teamMembers/whiteRock"
import { Container, Row } from "reactstrap"
import TeamBox from "./TeamBox"

//Import Section Title
import SectionTitle from "../common/section-title"

function Team() {
  const TeamDataPrefix = TeamDataWhiteRock
  const TeamMembersDataPrefix = TeamMembersDataWhiteRock
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
