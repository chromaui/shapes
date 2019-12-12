import React, { SFC, ReactNode } from 'react';
import styled from '@emotion/styled';

const Container = styled.div({
  display: 'grid',
  minHeight: '100vh',
  gridTemplateColumns: '60px auto',
  gridTemplateRows: '60px auto',
  gridTemplateAreas: '"header header" "sidebar main"',
});

const Header = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gridArea: 'header',
  padding: '0 1rem',
  borderBottom: '1px solid #ddd',
});

const Sidebar = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem 0',
  alignItems: 'center',
  gridArea: 'sidebar',
  borderRight: '1px solid #ddd',
});

const Main = styled.div({
  gridArea: 'main',
});

interface Props {
  header: ReactNode;
  sidebar: ReactNode;
}

const App: SFC<Props> = ({ children, header, sidebar }) => (
  <Container>
    <Header>{header}</Header>
    <Sidebar>{sidebar}</Sidebar>
    <Main>{children}</Main>
  </Container>
);

export default App;
