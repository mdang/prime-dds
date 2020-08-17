import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"

function GetStart() {
  const GetStartData = useStaticQuery(graphql`
    query GetStartQuery {
      allDataJson {
        edges {
          node {
            getStart {
              id
              title
            }
          }
        }
      }
    }
  `)
  const GetStartDataPrefix = GetStartData.allDataJson.edges[0].node.getStart
  return (
    <section className="section section-lg bg-get-start">
      <div className="bg-overlay"></div>
      <Container>
        <Row>
          <Col lg={{ size: 8, offset: 2 }} className="text-center">
            <h1 className="get-started-title text-white">
              {GetStartDataPrefix[0].title}
            </h1>
            <div className="section-title-border margin-t-20 bg-white"></div>
            <p className="section-subtitle font-secondary text-white text-center padding-t-30">
              {GetStartDataPrefix[1].title}
            </p>
            <a
              href="#"
              className="btn btn-bg-white waves-effect margin-t-20 mb-4"
            >
              {GetStartDataPrefix[2].title}{" "}
              <i className="mdi mdi-arrow-right"></i>{" "}
            </a>
          </Col>
        </Row>
      </Container>
      <div className="bg-pattern-effect"></div>
    </section>
  )
}

export default GetStart
