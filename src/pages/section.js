import React, { Component } from 'react';
import { Container, Row, Col, Button } from "reactstrap";

//Importing Modal
// import ModalSection from '../../components/common/ModalSection';

class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.callModal.bind(this)
    }

    callModal = () => {
        this.refs.child.openModal();
    }

    render() {
        return (
            <React.Fragment>
        <section className="section bg-home home-half" id="home" data-image-src="images/bg-home.jpg">
            <div className="bg-overlay"></div>
            <div className="display-table">
                <div className="display-table-cell">
                    <Container>
                        <Row>
                            <Col lg={{size:8, offset :2}}  className="col-lg-8 offset-lg-2 text-white text-center">
                                <h1 className="home-title">White Teeth in White Rock Dental</h1>
                                <p className="padding-t-15 home-desc">Etiam sed.Interdum consequat proin vestibulum class at.</p>
                                <p className="margin-t-30 margin-l-r-auto"><Button color="none" type="button" className="btn-custom navbar-btn btn-rounded waves-effect waves-light">Book Now</Button></p>  
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="wave-effect wave-anim">
                <div className="waves-shape shape-one">
                    <div className="wave wave-one"></div>
                </div>
                <div className="waves-shape shape-two">
                    <div className="wave wave-two"></div>
                </div>
                <div className="waves-shape shape-three">
                    <div className="wave wave-three"></div>
                </div>
            </div>

            {/* Render ModalSection Component for Modal */}
            {/* <ModalSection ref="child" channel='vimeo' videoId='99025203' /> */}
        </section>
            </React.Fragment>
        );
    }
}

export default Section;