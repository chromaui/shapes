import React from 'react';
import { background } from '../tokens/palette';
import Grid from './Grid';
import Window from './Window';
import { Donut, Slice, L, Z } from './Shapes';

export default {
  title: 'components|Window',
  parameters: {
    background: background.app,
  },
};

export const Default = () => (
  <Window>
    <Grid cols={4}>
      <Slice />
      <Donut />
      <Z />
      <L />
    </Grid>
  </Window>
);

export const Muted = () => (
  <Window muted>
    <Grid cols={4}>
      <Slice />
      <Donut />
      <Z />
      <L />
    </Grid>
  </Window>
);
