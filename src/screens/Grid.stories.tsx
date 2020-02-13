import React from 'react';
import Grid from '../screens/Grid';

export default {
  title: 'screens|Shapes/Grid',
  parameters: {
    chromatic: { viewports: [320, 960] },
  },
};

export const threeXTwo = () => <Grid />;

threeXTwo.story = { name: '3x2' };
