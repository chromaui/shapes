import React from 'react';
import Grid from '../screens/Grid';

export default {
  title: 'Screens / Shapes / Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'app',
    },
    chromatic: { 
      viewports: [320, 960],
    },
  },
};

export const threeXTwo = () => <Grid />;

threeXTwo.storyName = '3x2';
