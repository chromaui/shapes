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
      <Donut style={{ left: 380, top: 250, height: 120 }}></Donut>
      <L style={{ left: 40, top: 0, height: 120 }}></L>
      <Slice style={{ left: 440, top: 20, height: 120 }}></Slice>
      <Square style={{ left: 0, top: 280, height: 80 }}></Square>
      <Triangle style={{ left: 200, top: 70, height: 120 }}></Triangle>
      <Z style={{ left: 200, top: 330, height: 120 }}></Z>
    </Composition>
  </Container>
);
