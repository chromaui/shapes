import React, { SFC, ReactNode } from 'react';
import styled from '@emotion/styled';

export const PageContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const PageHeader = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 60,
  padding: '0 1rem',
  borderBottom: '1px solid #ddd',
});

export const PageContent = styled.div({});

interface Props {
  header?: ReactNode;
}

const Page: SFC<Props> = ({ children, header, ...props }) => (
  <PageContainer {...props}>
    {header && <PageHeader>{header}</PageHeader>}
    {children}
  </PageContainer>
);

export default Page;
