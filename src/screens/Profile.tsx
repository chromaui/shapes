import React from 'react';
import styled from '@emotion/styled';

import Avatar from '../components/Avatar';
import * as Skeleton from '../components/Skeleton';

const Container = styled.div({
  display: 'grid',
  gridTemplate: '1fr / 120px 1fr',
  gridGap: '3rem',
  justifyItems: 'center',
  padding: '3rem',
});

const Left = styled.div({
  display: 'grid',
  justifyItems: 'center',
  alignContent: 'start',
  gridGap: '1rem',
  width: '100%',
});

const Main = styled.div({
  display: 'grid',
  gridTemplate: '1rem 1fr 1rem 1fr / 1fr 100px',
  gridTemplateAreas: `"header header" "text image" "footer footer"`,
  gridGap: '1rem',
  width: '100%',
});

export default () => (
  <Container>
    <Left>
      <Avatar size="huge" appearance="secondary" />
      <Skeleton.Line width={100} height={20} />
      <Skeleton.Line width={80} />
    </Left>
    <Main>
      <Skeleton.Line width="100%" style={{ gridArea: 'header' }} />
      <Skeleton.Line width="100%" height="100%" style={{ gridArea: 'text' }} />
      <Skeleton.Line width="100%" height="100%" style={{ gridArea: 'image' }} />
      <div style={{ gridArea: 'footer' }}>
        <Skeleton.Line width="100%" />
      </div>
    </Main>
  </Container>
);
