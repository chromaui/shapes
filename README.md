# Shapes
blah2
blah

An example Storybook for demonstration and experimentation.

[![Storybook published](https://img.shields.io/badge/storybook-published-blue 'Published on Chromatic')](https://master--5dca7f6a6ce19b00201febb7.chromatic.com/)

Notable features:

- **Multi-variant stories**: Component variants are presented in a Grid to capture permutations.
- **Story composition**: Tile composes Shapes by re-exporting all Shapes stories and wrapping them using a decorator.
- **Backgrounds**: Some components are meant to be used against a background color, so they are presented as such.
- **Layout stories**: Stories for visual layouts using slots and children, to encourage layout consistency by reuse. Rendered in full screen.
- **Screen stories**: Stories for entire app screens (pages) that combine layouts and components, rendered full screen. Build entire apps without connecting any backend. This enables regression testing against actual component usage in the final app.
- **Chromatic viewports**: Grid is tested against multiple viewports.
- **Component lazy loading**: Button is lazy-loaded directly, while Window uses an Args template with lazy loading.
- **Single-story hoisting**: The Welcome story is hoisted to component level in the sidebar.

