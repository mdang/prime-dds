import React, { Fragment } from "react"
import { Container } from "reactstrap"

//Import Section Title
import SectionTitle from "../common/section-title"

function Location() {
  return (
    <Fragment>
      <section className="section " id="location">
        <Container>
          {/* section title */}
          <SectionTitle
            title="Find your nearest location"
            desc="We're located many parts of the Dallas &amp; Fort Worth area."
          />

          <p className="section-subtitle font-secondary text-white text-center padding-t-30">
            <a
              href="#"
              className="btn btn-custom waves-effect waves-light mb-5"
            >
              Find Your Nearest Location
            </a>
          </p>
        </Container>
      </section>
    </Fragment>
  )
}

export default Location
