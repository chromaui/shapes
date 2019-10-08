import React from "react"

import Donut from "../components/Donut"
import L from "../components/L"
import Slice from "../components/Slice"
import Square from "../components/Square"
import Triangle from "../components/Triangle"
import Z from "../components/Z"

export default {
  title: "Shapes"
}

export const donut = () => <Donut fill="#37D5D3"></Donut>
export const l = () => <L fill="#66BF3C"></L>
export const slice = () => <Slice fill="#FF4785"></Slice>
export const square = () => <Square fill="#1EA7FD"></Square>
export const triangle = () => <Triangle fill="#FFAE00"></Triangle>
export const z = () => <Z fill="#FC521F"></Z>
