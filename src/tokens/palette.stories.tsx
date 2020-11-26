import React from 'react';
import styled from '@emotion/styled';
import { readableColor } from 'polished';

import Grid from '../components/Grid';
import { background, color } from './palette';
import { fontSize } from './typography';

interface Props {
  color: string;
}

const Swatch = styled.div<Props>(({ color }) => ({
  background: color,
  color: readableColor(color),
  width: 100,
  padding: 10,
  textAlign: 'center',
  fontSize: fontSize.small,
  borderRadius: 2,
  small: {
    fontSize: fontSize.smaller,
  },
}));

export default {
  title: 'Tokens / Palette',
};

export const Backgrounds = () => (
  <Grid cols={5}>
    {Object.keys(background).map((key: keyof typeof background) => (
      <Swatch color={background[key]} key={key}>
        <strong>{key}</strong>
        <br />
        <small>{background[key]}</small>
      </Swatch>
    ))}
  </Grid>
);

export const Colors = () => (
  <Grid cols={3}>
    {Object.keys(color).map((key: keyof typeof color) => (
      <Swatch color={color[key]} key={key}>
        <strong>{key}</strong>
        <br />
        <small>{color[key]}</small>
      </Swatch>
    ))}
  </Grid>
);
