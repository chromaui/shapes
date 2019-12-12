import React from 'react';
import styled from '@emotion/styled';

import * as shapes from '../components/Shapes';

const Grid = styled.div({
  display: 'inline-grid',
  gridTemplate: '1fr 1fr / 1fr 1fr 1fr',
  gridGap: '5rem',
  justifyItems: 'center',
  padding: '4rem',
});

export default () => (
  <Grid>
    {Object.keys(shapes).map((key: keyof typeof shapes) => {
      const Shape = shapes[key];
      return <Shape key={key} />;
    })}
  </Grid>
);
