import React from "react"
import styled from "@emotion/styled"

const Svg = styled.svg(({ children, ...props }) => ({
  width: 100,
  height: 100,
  ...props
}))

export default props => (
  <Svg viewBox="0 0 96 88" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M50.63 1.785l44.928 81.77A3 3 0 0192.928 88H3.072a3 3 0 01-2.629-4.445l44.929-81.77a3 3 0 015.258 0z" />
  </Svg>
)
