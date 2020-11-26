import React from 'react';
import styled from '@emotion/styled';

import Grid from '../components/Grid';
import { fontSize, fontWeight } from './typography';

interface Props {
  size: string;
  weight: number;
}

const Swatch = styled.div<Props>(({ size, weight }) => ({
  justifySelf: 'flex-start',
  fontSize: size,
  fontWeight: weight,
}));

export default {
  title: 'Tokens / Typography',
};

export const Typography = () => (
  <Grid cols={4}>
    {Object.keys(fontWeight)
      .reverse()
      .map((weight: keyof typeof fontWeight) => (
        <Swatch size={fontSize.small} weight={fontWeight[weight]} key={weight}>
          {fontWeight[weight]} {weight}
        </Swatch>
      ))}
    {Object.keys(fontSize)
      .reverse()
      .map((size: keyof typeof fontSize) =>
        Object.keys(fontWeight)
          .reverse()
          .map((weight: keyof typeof fontWeight) => (
            <Swatch size={fontSize[size]} weight={fontWeight[weight]} key={size + weight}>
              {size}
            </Swatch>
          ))
      )}
  </Grid>
);
