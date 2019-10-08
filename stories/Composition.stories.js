import React from "react"
import styled from "@emotion/styled"

import Donut from "../components/Donut"
import L from "../components/L"
import Slice from "../components/Slice"
import Square from "../components/Square"
import Triangle from "../components/Triangle"
import Z from "../components/Z"

export default {
  title: "Composition"
}

const Composition = styled.div`
  position: relative;
  display: inline-block;
  svg {
    position: absolute;
  }
`

export const shuffled = () => (
  <Composition>
    <Donut fill="#37D5D3" style={{ left: 360, top: 210, width: 120, height: 120 }}></Donut>
    <L fill="#66BF3C" style={{ left: 40, top: 30, width: 120, height: 120 }}></L>
    <Slice fill="#FF4785" width={120} height={120} style={{ left: 380, top: 40 }}></Slice>
    <Square fill="#1EA7FD" width={80} height={80} style={{ left: 80, top: 250 }}></Square>
    <Triangle fill="#FFAE00" style={{ left: 190, top: 50, width: 140, height: 140 }}></Triangle>
    <Z fill="#FC521F" style={{ left: 200, top: 230, width: 120, height: 120 }}></Z>
  </Composition>
)
