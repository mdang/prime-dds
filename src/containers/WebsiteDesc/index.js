import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"

function WebsiteDesc() {
  const WebsiteDescData = useStaticQuery(graphql`
    query WebsiteDescQuery {
      allDataJson {
        edges {
          node {
            websiteDesc {
              id
              title
            }
          }
        }
      }
    }
  `)
  const WebsiteDescDataPrefix =
    WebsiteDescData.allDataJson.edges[0].node.websiteDesc
  return (
    <Fragment>
      <section className="section section-lg bg-web-desc">
        <div className="bg-overlay"></div>
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2 className="get-started-title text-white">{WebsiteDescDataPrefix[0].title}</h2>
              <p className="section-subtitle font-secondary text-white text-center padding-t-30">
                {WebsiteDescDataPrefix[1].title}
              </p>
              <a
                href="#"
                className="btn btn-bg-white margin-t-30 waves-effect waves-light mb-5"
              >
                {WebsiteDescDataPrefix[2].title}
              </a>
            </Col>
          </Row>
        </Container>
        <div className="bg-pattern-effect"></div>
      </section>
    </Fragment>
  )
}

export default WebsiteDesc
