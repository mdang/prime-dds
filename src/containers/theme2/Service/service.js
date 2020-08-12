import React, { Component } from "react"
import { Container, Row } from "reactstrap"

//Import Section Title
import SectionTitle from "../common/section-title"
import ServiceBox from "./services-box"

class Process extends Component {
  constructor(props) {
    super(props)
    this.state = {
      services1: [
        {
          icon: "pe-7s-diamond",
          title: "Teeth Cleaning",
          desc:
            "Aliquam consectetur, metus nec imperdiet faucibus, sem ligula ultricies metus, vitae interdum nunc massa quis nunc.",
        },
        {
          icon: "pe-7s-display2",
          title: "Braces",
          desc:
            "In feugiat tortor quam, ut scelerisque dui pretium vel. Nullam condimentum dapibus nisi, nec convallis ex pharetra sed. ",
        },
        {
          icon: "pe-7s-piggy",
          title: "Pulling Wisdom Teeth",
          desc:
            "Nulla tempus tempus orci sed luctus. Cras dapibus ipsum ut ipsum tristique condimentum.",
        },
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className={"section " + this.props.sectionClass} id="services">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Our Services"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed dui nec ipsum mollis venenatis nec id dui. Vivamus efficitur nunc tincidunt finibus pharetra. Nunc pretium id tellus id feugiat."
            />

            <Row className="margin-t-30">
              {/* services box */}
              <ServiceBox services={this.state.services1} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    )
  }
}

export default Process
