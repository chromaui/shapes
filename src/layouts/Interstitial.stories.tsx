import React from 'react';
import Interstitial from './Interstitial';
import { Lines } from '../components/Skeleton.stories';

export default {
  title: 'Layouts / Interstitial',
  component: Interstitial,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => (
  <Interstitial>
    <Lines />
  </Interstitial>
);

Default.storyName = "Interstitial"
