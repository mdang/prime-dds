import React, { Component } from 'react';
import { Col } from "reactstrap";
import Image from '../../../components/image/index';

class TeamBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.teams.map((team, key) =>
                        <Col key={key} lg={3} sm={6}>
                            <div className="team-box text-center hover-effect">
                                <div  className="team-wrapper">
                                    <div  className="team-member">
                                        <Image Path={team.image} Class="img-fluid rounded" />
                                    </div>
                                </div>
                                <h4  className="team-name">{team.title}</h4>
                                <p  className="text-uppercase team-designation">{team.desc}</p>
                            </div>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default TeamBox;