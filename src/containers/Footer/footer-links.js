import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"

function FooterLinks(props) {
  const data = useStaticQuery(graphql`
    query SiteTitleFooterQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="footer-alt">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="float-left pull-none ">
              <p className="copy-rights text-muted">
                &copy; {new Date().getFullYear()} {data.site.siteMetadata.title}
              </p>
            </div>
            <div className="clearfix"></div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterLinks
