import React from 'react';
import styled from '@emotion/styled';

import Donut from '../components/Donut';
import L from '../components/L';
import Slice from '../components/Slice';
import Square from '../components/Square';
import Triangle from '../components/Triangle';
import Z from '../components/Z';

const Grid = styled.div`
  display: inline-grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr;
  grid-gap: 100px 80px;
  justify-items: center;
  margin: 20px;
`;

export default () => (
  <Grid>
    <Donut />
    <L />
    <Slice />
    <Square />
    <Triangle />
    <Z />
  </Grid>
);
