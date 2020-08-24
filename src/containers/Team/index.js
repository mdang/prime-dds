import React, { Fragment } from "react"
import TeamDataWhiteRock from "../../data/team/whiteRock"
import TeamMembersDataWhiteRock from "../../data/team/teamMembers/whiteRock"
import { Container, Row } from "reactstrap"
import Image from "../../components/image/index"

//Import Section Title
import SectionTitle from "../common/section-title"

function Team() {
  const TeamDataPrefix = TeamDataWhiteRock
  const TeamMembersDataPrefix = TeamMembersDataWhiteRock
  return (
    <Fragment>
      <section className="section pt-4" id="team">
        <Container>
          {/* section title */}
          <SectionTitle
            title={TeamDataPrefix[0].title}
            desc={TeamDataPrefix[1].title}
          />

          <Row className="margin-t-50">
            {/* team box */}
            {TeamMembersDataPrefix.map(item => (
              <div className="team-box text-center hover-effect">
                <div className="team-wrapper">
                  <div className="team-member">
                    <Image Path={item.profile} Class="img-fluid rounded" />
                  </div>
                </div>
                <h4 className="team-name">{item.name}</h4>
                <p className="text-uppercase team-designation">{item.title}</p>
              </div>
            ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}

export default Team
