import React from 'react';
import styled from '@emotion/styled';

import * as shapes from '../components/Shapes';

const Grid = styled.div`
  display: inline-grid;
  grid-template: 1fr 1fr / 1fr 1fr 1fr;
  grid-gap: 5rem;
  justify-items: center;
  padding: 4rem;
`;

export default () => (
  <Grid>
    {Object.keys(shapes).map(key => {
      const Shape = shapes[key];
      return <Shape key={key} />;
    })}
  </Grid>
);
