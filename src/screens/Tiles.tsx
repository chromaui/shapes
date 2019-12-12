import React from 'react';
import styled from '@emotion/styled';

import * as shapes from '../components/Shapes';
import Tile from '../components/Tile';

const Tiles = styled.div({
  display: 'inline-grid',
  gridTemplate: '1fr 1fr / 1fr 1fr 1fr',
  gridGap: '3rem',
  justifyItems: 'center',
  padding: '3rem',

  '& > *': {
    width: '100%',
    '&:after': {
      content: '""',
      display: 'block',
      paddingBottom: '100%',
    },
  },
});

export default () => (
  <Tiles>
    {Object.keys(shapes).map((key: keyof typeof shapes) => {
      const Shape = shapes[key];
      return (
        <Tile key={key}>
          <Shape />
        </Tile>
      );
    })}
  </Tiles>
);
