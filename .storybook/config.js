/** @jsx jsx */
import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { Global, css, jsx } from '@emotion/core';

addDecorator((storyFn, { kind, parameters }) => {
  const [storyRoot] = kind.split(parameters.options.hierarchyRootSeparator);
  const isScreen = storyRoot === 'screens';
  const globalStyles = css`
    body {
      margin: 0;
      background: ${isScreen ? '#f6f9fc' : '#fff'};
    }
  `;
  const wrapperStyles = css`
    padding: ${isScreen ? 0 : 1}rem;
  `;
  return (
    <>
      <Global styles={globalStyles} />
      <div css={wrapperStyles}>{storyFn()}</div>
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
