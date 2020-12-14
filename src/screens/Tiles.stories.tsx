import React from 'react';
import Tiles from '../screens/Tiles';

export default {
  title: 'Screens / Shapes / Tiles',
  component: Tiles,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'app',
    },
  }
};

export const tiles = () => <Tiles />;
