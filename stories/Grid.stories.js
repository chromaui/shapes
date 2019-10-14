import React from "react"
import Grid from "../screens/Grid"

export default {
  title: "screens|Shapes/Grid",
  parameters: {
    chromatic: { viewports: [250, 750] }
  }
}

export const threeXTwo = () => <Grid />

threeXTwo.story = { name: "3x2" }
