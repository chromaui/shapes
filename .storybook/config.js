import { addParameters, configure } from "@storybook/react"

addParameters({
  options: {
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true }))
  }
})

// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module)
