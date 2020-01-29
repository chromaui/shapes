import React, { SFC } from 'react';
import styled from '@emotion/styled';

export const InterstitialContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
});

export const InterstitialContent = styled.div({
  maxWidth: 600,
  padding: '1rem',
});

interface Props {}

const Interstitial: SFC<Props> = ({ children, ...props }) => (
  <InterstitialContainer>
    <InterstitialContent>{children}</InterstitialContent>
  </InterstitialContainer>
);

export default Interstitial;
