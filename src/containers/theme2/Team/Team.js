import React, { Component } from "react"
import { Container, Row } from "reactstrap"
import Image from "../../../components/image/index"
import team1 from "../../../assets/images/dorsin/team/img-1.jpg"
import team2 from "../../../assets/images/dorsin/team/img-2.jpg"
import team3 from "../../../assets/images/dorsin/team/img-3.jpg"

//Import Section Title
import SectionTitle from "../common/section-title"

class Clients extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teams: [
        {
          image: "assets/images/dorsin/team/img-1.jpg",
          title: "Dr. An Le",
          desc: "Dentist",
        },
        {
          image: "assets/images/dorsin/team/img-2.jpg",
          title: "Dr. Jake Moon",
          desc: "Dentist",
        },
        {
          image: "assets/images/dorsin/team/img-3.jpg",
          title: "Dr. Tim Whatley",
          desc: "Dentist",
        },
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="section pt-4" id="team">
          <Container>
            {/* section title */}
            <SectionTitle
              title="BEHIND THE PEOPLE"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed dui nec ipsum mollis venenatis nec id dui."
            />

            <Row className="margin-t-50">
              {/* team box */}
              <div className="team-box text-center hover-effect">
                <div className="team-wrapper">
                  <div className="team-member">
                    <Image Path={team1} Class="img-fluid rounded" />
                  </div>
                </div>
                <h4 className="team-name">Dr. An Le</h4>
                <p className="text-uppercase team-designation">Dentist</p>
              </div>
              <div className="team-box text-center hover-effect">
                <div className="team-wrapper">
                  <div className="team-member">
                    <Image Path={team2} Class="img-fluid rounded" />
                  </div>
                </div>
                <h4 className="team-name">Dr. Jake Moon</h4>
                <p className="text-uppercase team-designation">Dentist</p>
              </div>
              <div className="team-box text-center hover-effect">
                <div className="team-wrapper">
                  <div className="team-member">
                    <Image Path={team3} Class="img-fluid rounded" />
                  </div>
                </div>
                <h4 className="team-name">Dr. Tim Whatley</h4>
                <p className="text-uppercase team-designation">Dentist</p>
              </div>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    )
  }
}

export default Clients
