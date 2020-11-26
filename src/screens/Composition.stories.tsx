import React from 'react';
import Composition from '../screens/Composition';

export default {
  title: 'Screens / Shapes / Composition',
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'app',
    },
  }
};

export const shuffled = () => <Composition />;
