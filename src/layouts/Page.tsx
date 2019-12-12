import React, { SFC, ReactNode } from 'react';
import styled from '@emotion/styled';

export const PageContainer = styled.div({
  display: 'grid',
  minHeight: '100vh',
  gridTemplateRows: '60px auto',
  gridTemplateColumns: 'auto',
  gridTemplateAreas: '"header" "main"',
});

export const PageHeader = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gridArea: 'header',
  padding: '0 1rem',
  borderBottom: '1px solid #ddd',
});

export const PageContent = styled.div({
  gridArea: 'main',
});

interface Props {
  header: ReactNode;
}

const Page: SFC<Props> = ({ children, header, ...props }) => (
  <PageContainer>
    <PageHeader>{header}</PageHeader>
    <PageContent>{children}</PageContent>
  </PageContainer>
);

export default Page;
