import React from "react"
import Shape from "./Shape"

export default props => (
  <Shape viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" color="#37D5D3" {...props}>
    <path d="M45 0c24.853 0 45 20.147 45 45S69.853 90 45 90 0 69.853 0 45 20.147 0 45 0zm.5 27C35.283 27 27 35.283 27 45.5S35.283 64 45.5 64 64 55.717 64 45.5 55.717 27 45.5 27z" />
  </Shape>
)
