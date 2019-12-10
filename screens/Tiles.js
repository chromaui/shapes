import React from 'react';
import styled from '@emotion/styled';

import Donut from '../components/Donut';
import L from '../components/L';
import Slice from '../components/Slice';
import Square from '../components/Square';
import Tile from '../components/Tile';
import Triangle from '../components/Triangle';
import Z from '../components/Z';

const Grid = styled.div`
  display: inline-grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr;
  grid-gap: 60px;
  justify-items: center;
  margin: 20px;

  ${Tile} {
    width: 100%;
    padding: 0.5rem;
    &:after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }
`;

export default () => (
  <Grid>
    <Tile>
      <Donut />
    </Tile>
    <Tile>
      <L />
    </Tile>
    <Tile>
      <Slice />
    </Tile>
    <Tile>
      <Square />
    </Tile>
    <Tile>
      <Triangle />
    </Tile>
    <Tile>
      <Z />
    </Tile>
  </Grid>
);
