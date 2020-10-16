import React from "react"

function Image(props) {
  return (
    <img
      src={props.Path}
      className={props.Class}
      title={props.Title}
      alt={props.Alt}
      loading="lazy"
    />
  )
}

export default Image
