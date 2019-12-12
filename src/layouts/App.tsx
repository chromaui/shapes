import React, { SFC, ReactNode } from 'react';
import styled from '@emotion/styled';

import { PageContainer, PageHeader, PageContent } from './Page';

const AppContainer = styled(PageContainer)({
  gridTemplateRows: '60px auto',
  gridTemplateColumns: '60px auto',
  gridTemplateAreas: '"header header" "sidebar main"',
});

const AppSidebar = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem 0',
  alignItems: 'center',
  gridArea: 'sidebar',
  borderRight: '1px solid #ddd',
});

interface Props {
  header: ReactNode;
  sidebar: ReactNode;
}

const App: SFC<Props> = ({ children, header, sidebar }) => (
  <AppContainer>
    <PageHeader>{header}</PageHeader>
    <AppSidebar>{sidebar}</AppSidebar>
    <PageContent>{children}</PageContent>
  </AppContainer>
);

export default App;
