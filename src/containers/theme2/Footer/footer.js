import React, { Component } from 'react';
import { Container, Row, Col, Form } from "reactstrap";

//Import Footer link
import FooterLinks from "./footer-links";

class Footer extends Component {
    state = {
        links : [
            { title : "DORSIN",
                child : [
                    { link : "#", title : "Home" },
                    { link : "#", title : "About us" },
                    { link : "#", title : "Careers" },
                    { link : "#", title : "Contact us" },
                ]
            },
            { title : "Information",
                child : [
                    { link : "#", title : "Terms & Condition" },
                    { link : "#", title : "About us" },
                    { link : "#", title : "Jobs" },
                    { link : "#", title : "Bookmarks" },
                ]
            },
            { title : "Support",
                child : [
                    { link : "#", title : "FAQ" },
                    { link : "#", title : "Contact" },
                    { link : "#", title : "Disscusion" },
                ]
            }
        ],
    }
    render() {
        return (
            <React.Fragment>
        <footer className="footer">
            <Container>
                <Row>
                    {
                        this.state.links.map((fLink, key) =>
                            <Col key={key} lg={3} className="margin-t-20">
                                <h4>{fLink.title}</h4>
                                <div className="text-muted margin-t-20">
                                    <ul className="list-unstyled footer-list">
                                        {
                                            fLink.child.map((fLinkChild, key) =>
                                                <li key={key} ><a href="#">{fLinkChild.title}</a></li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </Col>
                        )
                    }
                    
                    <Col lg={3} className="margin-t-20">
                        <h4>Subscribe</h4>
                        <div className="text-muted margin-t-20">
                            <p>In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.</p>
                        </div>
                        <Form className="subscribe">
                            <input placeholder="Email" className="form-control" required />
                            <a href="#" className="submit"><i className="pe-7s-paper-plane"></i></a>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </footer>
                {/* Render footer links */}
                <FooterLinks/>
            </React.Fragment>
        );
    }
}

export default Footer;