import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

class WebsiteDesc extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section section-lg bg-web-desc">
                    <div className="bg-overlay"></div>
                    <Container>
                        <Row>
                            <Col lg={12} className="text-center">
                                <h2 className="text-white">Build your dream website today</h2>
                                <p className="padding-t-15 home-desc">But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</p>
                                <a href="#" className="btn btn-bg-white margin-t-30 waves-effect waves-light mb-5">View Plan & Pricing</a>
                            </Col>
                        </Row>
                    </Container>
                    <div className="bg-pattern-effect">
                        <img src="assets/images/bg-pattern.png" alt="dorsin"/>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default WebsiteDesc;