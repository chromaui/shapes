import React from "react"
import styled from "@emotion/styled"

const Svg = styled.svg(({ children, ...props }) => ({
  width: 100,
  height: 100,
  borderRadius: 5,
  ...props
}))

export default props => (
  <Svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 0h90v90H0z" />
  </Svg>
)
