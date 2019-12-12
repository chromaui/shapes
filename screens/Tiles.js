import React from 'react';
import styled from '@emotion/styled';

import * as shapes from '../components/Shapes';
import Tile from '../components/Tile';

const Tiles = styled.div`
  display: inline-grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr;
  grid-gap: 3rem;
  justify-items: center;
  padding: 3rem;

  ${Tile} {
    width: 100%;
    &:after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }
`;

export default () => (
  <Tiles>
    {Object.keys(shapes).map(key => {
      const Shape = shapes[key];
      return (
        <Tile key={key}>
          <Shape />
        </Tile>
      );
    })}
  </Tiles>
);
