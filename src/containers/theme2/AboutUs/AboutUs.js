import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import Image from '../../../components/image/index';
import about from '../../../assets/images/dorsin/about-img.png';

class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="features">
            <Container>
                <Row className="vertical-content">
                    <Col lg={5}>
                        <div className="features-box">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis mollis arcu</h3>
                            <p className="text-muted web-desc">Nullam maximus, nibh nec bibendum mattis, ipsum velit semper erat, fringilla vehicula diam urna consectetur arcu. Integer orci sem, pretium sit amet imperdiet vel, facilisis in ligula.</p>
                            <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                                <li className="">Suspendisse potenti. Nunc blandit euismod nibh.</li>
                                <li className="">Donec iaculis non orci non fringilla.</li>
                                <li className="">Duis cursus sollicitudin lacus et elementum.</li>
                                <li className="">Vivamus sit amet facilisis lectus.</li>
                            </ul>
                            <a href="#" className="btn btn-custom margin-t-30 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right"></i></a>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="features-img features-right text-right">
                            <Image Path={about} Class="about-img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default AboutUs;