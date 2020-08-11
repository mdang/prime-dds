import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import Image from '../../../components/image/index';
import map from '../../../assets/images/dorsin/map.png';

//Import Section Title
import SectionTitle from "../common/section-title";

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
        <section className="section " id="contact">
            <Container>
                {/* section title */}
                <SectionTitle title="GET IN TOUCH" desc="We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with measurable results." />

                <Row>
                    <Col lg={4}>
                        <div className="mt-4 pt-4">
                            <p className="mt-4"><span className="h5">Office Address 1:</span><br/> <span className="text-muted d-block mt-2">4461 Cedar Street Moro, AR 72368</span></p>
                            <p className="mt-4"><span className="h5">Office Address 2:</span><br/> <span className="text-muted d-block mt-2">2467 Swick Hill Street <br/>New Orleans, LA 70171</span></p>
                            <p className="mt-4"><span className="h5">Working Hours:</span><br/> <span className="text-muted d-block mt-2">9:00AM To 6:00PM</span></p>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="custom-form mt-4 pt-4">
                            <Image Path={map} Class="map-img" />
                        </div>  
                    </Col>
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default Features;