import React from "react"
import styled from "@emotion/styled"

import Donut from "../components/Donut"
import L from "../components/L"
import Slice from "../components/Slice"
import Square from "../components/Square"
import Triangle from "../components/Triangle"
import Z from "../components/Z"

export default {
  title: "Grid"
}

const Grid = styled.div`
  display: inline-grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr;
  grid-gap: 30px;
  margin: 20px;
`

export const grid = () => (
  <Grid>
    <Donut fill="#37D5D3"></Donut>
    <L fill="#66BF3C"></L>
    <Slice fill="#FF4785"></Slice>
    <Square fill="#1EA7FD"></Square>
    <Triangle fill="#FFAE00"></Triangle>
    <Z fill="#FC521F"></Z>
  </Grid>
)
