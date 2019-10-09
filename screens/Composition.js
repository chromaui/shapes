import React from "react"
import styled from "@emotion/styled"

import Donut from "../components/Donut"
import L from "../components/L"
import Slice from "../components/Slice"
import Square from "../components/Square"
import Triangle from "../components/Triangle"
import Z from "../components/Z"

const Composition = styled.div`
  display: inline-block;
  position: relative;
  margin: 20px;
  width: 560px;
  height: 450px;
  svg {
    position: absolute;
  }
`

export default () => (
  <Composition>
    <Triangle style={{ left: 380, top: 250, height: 120 }}></Triangle>
    <L style={{ left: 40, top: 0, height: 120 }}></L>
    <Slice style={{ left: 0, top: 280, height: 100 }}></Slice>
    <Square style={{ left: 460, top: 20, height: 100 }}></Square>
    <Donut style={{ left: 220, top: 100, height: 120 }}></Donut>
    <Z style={{ left: 200, top: 330, height: 120 }}></Z>
  </Composition>
)
