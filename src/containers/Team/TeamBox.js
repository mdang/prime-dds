import React, { useState, Fragment } from "react"
import { Col } from "reactstrap"
import Image from "../../components/image/index"

function TeamBox(props) {
  const [readMore, setReadMore] = useState(false)
  const linkName = readMore ? "Read Less << " : "Read More >> "
  console.log("props ", props)
  return (
    <Fragment>
      {props.teams.map((team, key) => (
        <Col key={key} lg={4} sm={6}>
          <div className="team-box hover-effect">
            <div className="team-wrapper">
              <div className="team-member">
                <Image Path={team.profile} Class="img-fluid rounded" />
              </div>
              <h4 className="team-name">{team.name}</h4>
              <p className="text-uppercase team-designation">{team.title}</p>
            </div>

            <a
              className="read-more-link"
              onClick={() => {
                setReadMore(!readMore)
              }}
            >
              {linkName}
            </a>
            {readMore && (
              <p className="text-uppercase team-designation extra-content">
                {team.bio}
              </p>
            )}
          </div>
        </Col>
      ))}
    </Fragment>
  )
}

export default TeamBox
