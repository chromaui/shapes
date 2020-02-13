import React from 'react';
import styled from '@emotion/styled';
import Composition from '../screens/Composition';

const Welcome = styled.div`
  display: inline-block;
  position: relative;

  h1 {
    position: absolute;
    top: 34%;
    left: 10%;
    right: 10%;
    text-align: center;
    line-height: 1.6em;
  }
  svg {
    opacity: 0.5;
  }
`;

export default {
  title: 'Welcome',
  parameters: {
    isScreen: true,
  },
};

export const hi = () => (
  <Welcome>
    <Composition />
    <h1>Hi there, this is a demo Storybook for testing purposes.</h1>
  </Welcome>
);
