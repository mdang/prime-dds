import React from "react"

import videoShareMP4 from "../../assets/images/logos/shareDentistry.mp4"
import videoShareWebM from "../../assets/images/logos/shareDentistry.webm"
import videoSharePoster from "../../assets/images/logos/shareDentistry.png"


function LoadingScreen(props) {
  return (
  <React.Fragment>
    <section className="loading-screen" role="alert" aria-live="polite" aria-busy="true">
        <video loop={false} autoplay="autoplay" id="vid" muted>
            <source src={videoShareMP4} type="video/mp4" />
            <source src={videoShareWebM} type="video/webm" />

            Loading...
        </video>
    </section>
  </React.Fragment>
  )

}

export default LoadingScreen