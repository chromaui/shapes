import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { Global, css } from '@emotion/core';

addDecorator((storyFn, { kind, parameters }) => {
  const type = kind.split(parameters.options.hierarchyRootSeparator)[0];
  const isScreen = type === 'screens';
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            background: ${isScreen ? '#f6f9fc' : '#fff'};
            padding: ${isScreen ? 0 : 1}rem;
          }
        `}
      />
      {storyFn()}
    </>
  );
});

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true }),
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
