import React from "react"
import styled from "@emotion/styled"

const Svg = styled.svg(({ children, ...props }) => ({
  width: 100,
  height: 100,
  ...props
}))

export default props => (
  <Svg viewBox="0 0 92 92" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M92 89V3c0-3-2.056-3-3-3C39.294 0 0 39.294 0 89c0 0 0 3 3 3h86a3 3 0 003-3z" />
  </Svg>
)
