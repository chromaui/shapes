import React, { SFC, ReactNode } from 'react';
import styled from '@emotion/styled';

import Page from './Page';

const AppContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
});

const AppSidebar = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: 60,
  padding: '1rem 0',
  alignItems: 'center',
  borderRight: '1px solid #ddd',
});

interface Props {
  header?: ReactNode;
  sidebar?: ReactNode;
}

const App: SFC<Props> = ({ children, header, sidebar, ...props }) => (
  <Page header={header}>
    <AppContainer {...props}>
      {sidebar && <AppSidebar>{sidebar}</AppSidebar>}
      {children}
    </AppContainer>
  </Page>
);

export default App;
