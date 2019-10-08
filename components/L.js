import React from "react"
import styled from "@emotion/styled"

const Svg = styled.svg(({ children, ...props }) => ({
  width: 100,
  height: 100,
  ...props
}))

export default props => (
  <Svg viewBox="0 0 55 89" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M55 3v83a3 3 0 01-3 3H3a3 3 0 01-3-3V64a3 3 0 013-3h21a3 3 0 003-3V3a3 3 0 013-3h22a3 3 0 013 3z" />
  </Svg>
)
