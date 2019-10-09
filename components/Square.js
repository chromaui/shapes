import React from "react"
import Shape from "./Shape"

export default props => (
  <Shape
    viewBox="0 0 90 90"
    xmlns="http://www.w3.org/2000/svg"
    color="#1EA7FD"
    {...props}
    style={{ borderRadius: 5, ...props.style }}
  >
    <path d="M0 0h90v90H0z" />
  </Shape>
)
