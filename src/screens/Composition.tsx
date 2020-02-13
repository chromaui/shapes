import React from 'react';
import styled from '@emotion/styled';

import { Donut, L, Slice, Square, Triangle, Z } from '../components/Shapes';

const Container = styled.div({
  display: 'inline-block',
  padding: '2rem',
});

const Composition = styled.div({
  position: 'relative',
  width: '560px',
  height: '450px',
  '& > *': {
    position: 'absolute',
  },
});

export default () => (
  <Container>
    <Composition>
      <Slice style={{ left: 400, top: 240 }}></Slice>
      <Z style={{ left: 20, top: 0, height: 120 }}></Z>
      <Donut style={{ left: 440, top: 20 }}></Donut>
      <Square style={{ left: 0, top: 250, height: 90 }}></Square>
      <Triangle style={{ left: 200, top: 70, height: 120 }}></Triangle>
      <L style={{ left: 220, top: 330, height: 120 }}></L>
    </Composition>
  </Container>
);
