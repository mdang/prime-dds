import React, { Component } from 'react';
import {
    Container,
    Row
} from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import TeamBox from "./TeamBox";

class Clients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams : [
                { image : "assets/images/team/img-1.jpg", title : "Dr. An Le", desc : "Dentist" },
                { image : "assets/images/team/img-2.jpg", title : "Dr. Jake Moon", desc : "Dentist" },
                { image : "assets/images/team/img-3.jpg", title : "Dr. Tim Whatley", desc : "Dentist" }
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
        <section  className="section pt-4" id="team">
            <Container>

                {/* section title */}
                <SectionTitle title="BEHIND THE PEOPLE" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed dui nec ipsum mollis venenatis nec id dui." />

                <Row className="margin-t-50">
                    {/* team box */}
                    <TeamBox teams={this.state.teams} />
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default Clients;