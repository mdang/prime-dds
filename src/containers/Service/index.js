import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row } from "reactstrap"

//Import Section Title
import SectionTitle from "../common/section-title"
import ServiceBox from "./services-box"

function Service(props) {
  const ServiceData = useStaticQuery(graphql`
    query ServiceQuery {
      allDataJson {
        edges {
          node {
            service {
              id
              title
            }
          }
        }
      }
      allDataJson {
        edges {
          node {
            serviceBox {
              icon
              title
              desc
            }
          }
        }
      }
    }
  `)
  const ServiceDataPrefix = ServiceData.allDataJson.edges[0].node.service

  const ServiceBoxDataPrefix = ServiceData.allDataJson.edges[0].node.serviceBox

  return (
    <Fragment>
      <section className={"section " + props.sectionClass} id="services">
        <Container>
          <SectionTitle
            title={ServiceDataPrefix[0].title}
            desc={ServiceDataPrefix[1].title}
          />

          <Row className="margin-t-30">
            <ServiceBox services={ServiceBoxDataPrefix} />
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}

export default Service
