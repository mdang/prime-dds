import React, { Component } from 'react';
import { Col } from 'reactstrap';

class TestimonialsBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.clients.map((client, key) =>
                        <Col lg={4} key={key}>
                            <div className="testimonial-box hover-effect margin-t-30">
                                <div className="testimonial-decs">
                                    <p className="text-muted text-center mb-0">“{client.desc}” </p>
                                </div>
                                <h5 className="text-center text-uppercase padding-t-15">{client.title} - <span className="text-muted text-capitalize">{client.subTitle}</span></h5>
                            </div>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default TestimonialsBox;