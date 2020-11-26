import { backgrounds } from 'polished';
import React from 'react';
import Profile from './Profile';

export default {
  title: 'Screens / Profile',
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'app'
    },
  }
};

export const basic = () => <Profile />;
