import React from 'react';
import Interstitial from './Interstitial';
import { Lines } from '../components/Skeleton.stories';

export default {
  title: 'layouts|Interstitial',
};

export const Default = () => (
  <Interstitial>
    <Lines />
  </Interstitial>
);
