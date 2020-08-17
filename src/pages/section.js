import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Button } from "reactstrap"

function Section() {
  const SectionData = useStaticQuery(graphql`
    query SectionQuery {
      allDataJson {
        edges {
          node {
            section {
              id
              title
            }
          }
        }
      }
    }
  `);
  const SectionDataPrefix = SectionData.allDataJson.edges[0].node.section;
  return (
    <Fragment>
      <section
        className="section bg-home home-half"
        id="home"
        data-image-src="images/bg-home.jpg"
      >
        <div className="bg-overlay"></div>
        <div className="display-table">
          <div className="display-table-cell">
            <Container>
              <Row>
                <Col
                  lg={{ size: 8, offset: 2 }}
                  className="col-lg-8 offset-lg-2 text-white text-center"
                >
                  <h1 className="home-title">
                    {SectionDataPrefix[0].title}
                  </h1>
                  <p className="padding-t-15 home-desc">
                    {SectionDataPrefix[1].title}
                  </p>
                  <p className="margin-t-30 margin-l-r-auto">
                    <Button
                      color="none"
                      type="button"
                      className="btn-custom navbar-btn btn-rounded waves-effect waves-light"
                    >
                      {SectionDataPrefix[2].title}
                    </Button>
                  </p>
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
    </Fragment>
  )
}

export default Section
