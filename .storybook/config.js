import React from 'react';
import { Global } from '@emotion/core';
import { addDecorator, addParameters, configure } from '@storybook/react';

import globalStyles from '../src/helpers/globalStyles';

const isScreen = ({ kind, parameters }) => {
  if (parameters.isScreen !== undefined) return parameters.isScreen;
  const [storyRoot] = kind.split(parameters.options.hierarchyRootSeparator || '/');
  return storyRoot === 'screens' || storyRoot === 'layouts';
};

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true }),
  },
  margin: 0,
  background: context => (isScreen(context) ? '#f6f9fc' : '#fff'),
});

addDecorator(storyFn => (
  <>
    <Global styles={globalStyles} />
    {storyFn()}
  </>
));

addDecorator((storyFn, context) => {
  if (isScreen(context)) return storyFn();
  return <div style={{ display: 'inline-block', padding: '1rem' }}>{storyFn()}</div>;
});

addDecorator((storyFn, context) => {
  const getValue = value => (typeof value === 'function' ? value(context) : value);
  const pxValue = (value, fallback) => (Number.isInteger(value) ? `${value}px` : fallback);
  const margin = pxValue(getValue(context.parameters.margin), '1rem');
  if (document.body.style.margin !== margin) {
    document.body.style.margin = margin;
  }
  const background = getValue(context.parameters.background);
  if (document.body.style.background !== background) {
    document.body.style.background = background;
  }
  return storyFn();
});

configure(require.context('../src', true, /\.stories\.tsx$/), module);
