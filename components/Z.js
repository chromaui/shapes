import React from "react"
import styled from "@emotion/styled"

const Svg = styled.svg(({ children, ...props }) => ({
  width: 100,
  height: 100,
  ...props
}))

export default props => (
  <Svg viewBox="0 0 56 90" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M28 3v25a3 3 0 003 3h22a3 3 0 013 3v53a3 3 0 01-3 3H31a3 3 0 01-3-3V62a3 3 0 00-3-3H3a3 3 0 01-3-3V3a3 3 0 013-3h22a3 3 0 013 3z" />
  </Svg>
)
