import React from 'react';
import { Global } from '@emotion/core';

import globalStyles from '../src/helpers/globalStyles';
import { background } from '../src/tokens/palette';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true }),
  },
  backgrounds: {
    values: Object.entries(background).map(([name, value]) => ({ name, value })),
  },
};

export const decorators = [
  (Story) => (
    <>
      <Global styles={globalStyles} />
      <Story />
    </>
  ),
];
